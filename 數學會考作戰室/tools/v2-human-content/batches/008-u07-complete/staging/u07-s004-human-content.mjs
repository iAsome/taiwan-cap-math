// DETERMINISTIC SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u07-s004-lecture-r1",
  "unitId": "u07",
  "topicId": "u07-basics",
  "skillId": "inequality-number-line",
  "title": "不等式解的數線表示：端點和方向與圖文互譯",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能依解集選擇空心點或實心點。",
    "能判斷射線方向。",
    "能由數線圖寫出不等式。",
    "能比較兩種數線表示是否同一解集。"
  ],
  "prerequisites": [
    {
      "skillId": "inequality-transposition",
      "requiredLevel": "能先把不等式整理成 x 與常數的比較。"
    }
  ],
  "prerequisiteBridge": {
    "inequality-transposition": "能先把不等式整理成 x 與常數的比較。"
  },
  "glossary": [
    {
      "term": "射線",
      "definition": "從一個端點向單一方向無限延伸的圖形。"
    },
    {
      "term": "開端點",
      "definition": "端點不屬於解集，以空心圓表示。"
    },
    {
      "term": "閉端點",
      "definition": "端點屬於解集，以實心圓表示。"
    },
    {
      "term": "刻度",
      "definition": "數線上用來表示數值位置的等距標記。"
    }
  ],
  "notation": [
    {
      "symbol": "○────▶",
      "meaning": "空心端點並向右延伸，代表大於且不含端點。"
    },
    {
      "symbol": "◀────●",
      "meaning": "向左延伸且實心端點，代表小於或等於端點。"
    }
  ],
  "conceptNarrative": [
    "先完成代數解法，再把 x 的標準形式轉成圖。",
    "端點符號只回答「是否包含」，射線方向回答「比端點大或小」。",
    "數線必須有方向、端點數值與足夠刻度，不能僅憑圓點位置猜值。",
    "由圖回寫時，先讀方向，再讀端點是否填滿。",
    "特定題目的數線應由最後解集自行畫出；一次展示四種組合的圖例只適合作為講義規則表，若直接掛在選擇題旁會洩漏選項分類，且不應替代端點代入驗證。"
  ],
  "formalDefinitions": [
    {
      "name": "開端點",
      "statement": "對應 x>a 或 x<a，端點 a 不符合。"
    },
    {
      "name": "閉端點",
      "statement": "對應 x≥a 或 x≤a，端點 a 符合。"
    }
  ],
  "formulas": [
    {
      "formula": "x<a → a 空心，向左",
      "conditions": [
        "標準數線向右為正方向"
      ],
      "meaning": "嚴格小於的圖形。"
    },
    {
      "formula": "x≥a → a 實心，向右",
      "conditions": [
        "標準數線向右為正方向"
      ],
      "meaning": "包含端點的大於範圍。"
    }
  ],
  "nonApplicableCases": [
    "若題目限定整數解，仍應先畫連續解集，再標明整數點或另行列舉。",
    "數線圖若比例不精確，只能讀標示值，不能量距離。",
    "兩邊都有式子的原不等式不能直接拿任一常數作端點。",
    "不含端點不代表離端點最近的整數也排除。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先把代數答案整理成x與端點的標準形式。",
      "check": "端點取自最後解集而非原式常數。"
    },
    {
      "step": 2,
      "instruction": "用端點代入判斷是否包含。",
      "check": "成立畫實心，不成立畫空心。"
    },
    {
      "step": 3,
      "instruction": "依大於或小於決定右向或左向射線。",
      "check": "不受端點正負號干擾。"
    },
    {
      "step": 4,
      "instruction": "由圖回寫時分開讀方向與端點空實。",
      "check": "不從線段長度或位置猜端點值。"
    },
    {
      "step": 5,
      "instruction": "取端點與射線內外各一值回原式檢查。",
      "check": "圖形與代數解集完全一致。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "畫出x>-1。",
      "solutionSteps": [
        "端點是-1。",
        "嚴格大於使端點空心。",
        "較大數位於右側，向右延伸。"
      ],
      "answer": "-1空心，射線向右。",
      "why": "端點的負號不會改變數線方向，真正決定方向的是大於。代入-1得到假所以空心，代入0得到真且零位於右側，因此空心向右唯一正確。"
    },
    {
      "exampleId": "L2",
      "prompt": "畫出x≤3。",
      "solutionSteps": [
        "端點為3。",
        "≤含等號所以畫實心。",
        "較小值向左延伸。"
      ],
      "answer": "3實心，射線向左。",
      "why": "三代入原式成立，端點必須填實；二與更小的數也成立並位於左側。用四代入則失敗，交叉確認射線沒有畫到右邊。"
    },
    {
      "exampleId": "L3",
      "prompt": "圖上2為實心點且向右，寫出解集。",
      "solutionSteps": [
        "向右讀成x大於2。",
        "實心補上端點2也成立。",
        "合併寫成x≥2並以2、3驗算。"
      ],
      "answer": "x≥2。",
      "why": "方向與端點包含性要分開判讀：向右先給大於，實心再加入等號。二和三都應成立，而左側的一不成立，這組真假恰好對應x≥2。"
    },
    {
      "exampleId": "L4",
      "prompt": "解2x-1<5並畫圖。",
      "solutionSteps": [
        "同加1得2x<6。",
        "除正二得x<3。",
        "在3畫空心點向左。"
      ],
      "answer": "x<3；數線在3空心向左。",
      "why": "代數先求出真正端點三，再由嚴格小於判斷空心與左向。二代入原式成立、三使兩邊相等而失敗，所以圖形與原式的解集一致。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "x≤3 畫成 3 空心。",
      "why": "忽略等號。",
      "correction": "≤ 包含 3，畫實心。"
    },
    {
      "mistake": "x>−1 因端點是負數而向左。",
      "why": "把負號與方向混淆。",
      "correction": "只看「大於」就向右。"
    },
    {
      "mistake": "圖向右就寫 x<a。",
      "why": "沒有連結右側較大。",
      "correction": "標準數線右側數值增加。"
    },
    {
      "mistake": "把箭頭畫在圓點上而沒有延伸線。",
      "why": "圖形資訊不完整。",
      "correction": "畫射線並在末端加箭頭。"
    },
    {
      "mistake": "由未標比例的圖量出端點。",
      "why": "把示意圖當作精密測量圖。",
      "correction": "只採用標示數值。"
    },
    {
      "mistake": "解完 x<3 卻在圖上標 5。",
      "why": "把原式常數當端點。",
      "correction": "端點必須來自最後標準解。"
    }
  ],
  "selfCheck": [
    "端點是否包含？",
    "方向是否和大於或小於一致？",
    "端點標示是否來自最後解集？",
    "圖上任取一點代入是否成立？"
  ],
  "summary": [
    "先解代數，再畫數線。",
    "空心表示不含，實心表示包含。",
    "大於向右，小於向左。",
    "讀圖時先看方向，再看端點。"
  ],
  "connections": {
    "previous": "承接移項後的標準解集。",
    "next": [
      "下一節會解釋除以負數後為何方向反轉。",
      "第六技能會從連續解集挑出整數解。"
    ]
  },
  "figureReferences": [
    "u07-fig-number-line-translation"
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u07-s004-v001",
      "u07-s004-v002",
      "u07-s004-v003",
      "u07-s004-v004",
      "u07-s004-v005",
      "u07-s004-v006",
      "u07-s004-v007",
      "u07-s004-v008",
      "u07-s004-v009",
      "u07-s004-v010",
      "u07-s004-v011",
      "u07-s004-v012"
    ],
    "constructedResponseIds": [
      "u07-s004-cr001",
      "u07-s004-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐一核對四種端點與方向組合，並以 x<3 的完整解題鏈驗證代數與圖示一致；SVG 僅作語意示意，不依比例洩漏答案。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "039065ce7528fc93101d3abebfd6b9b14e397b10ad7efe3fa9483c46b01164f1"
};

export const QUESTIONS = [
  {
    "questionId": "u07-s004-v001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "不等式 x≥2 的數線圖應如何畫？",
    "givenConditions": "標準數線向右增大。",
    "target": "把含等號下界畫成數線",
    "choices": [
      "2 空心向左",
      "2 實心向左",
      "2 空心向右",
      "2 實心向右"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "x=2 應是解，故端點填滿；x=3 也是解且在右側，所以射線向右。",
      "result": "2 實心向右",
      "answerIndexVerified": 3
    },
    "explanation": "≥ 包含端點 2，所以畫實心點；大於表示向右延伸。 代入2成立使端點實心，代入3也成立且在右側；題幹文字已足以唯一作圖。",
    "steps": [
      "由 ≥ 判斷實心",
      "由大於判斷向右",
      "用2與3代入，分別確認實心端點和向右方向。"
    ],
    "optionAnalysis": [
      {
        "choice": "2 空心向左",
        "truth": false,
        "reason": "端點與方向都錯。"
      },
      {
        "choice": "2 實心向左",
        "truth": false,
        "reason": "選項「2 實心向左」方向錯。，與獨立解得的「2 實心向右」不一致。"
      },
      {
        "choice": "2 空心向右",
        "truth": false,
        "reason": "選項「2 空心向右」端點錯。，與獨立解得的「2 實心向右」不一致。"
      },
      {
        "choice": "2 實心向右",
        "truth": true,
        "reason": "獨立重算得到「2 實心向右」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "忽略等號或把大於畫向左。 四格共用圖例直接列出所有選項，若顯示會洩漏判讀而非提供必要資料。",
    "prerequisiteCheck": "需理解端點與方向。",
    "estimatedTimeSec": "45",
    "unitAndRoundingCheck": "無單位與比例。",
    "ambiguityAndBoundaryAudit": "四種組合中只有實心向右同時符合。",
    "difficultyReason": "直接圖像轉譯。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "a5f1e9de46aeadf9c5c0f4af37d169f304c5d1ae834d5898aabbdd1294684b75"
  },
  {
    "questionId": "u07-s004-v002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "不等式 x<−3 的數線圖應如何畫？",
    "givenConditions": "數線方向標準。",
    "target": "畫出負端點的嚴格上界",
    "choices": [
      "−3 空心向左",
      "−3 實心向左",
      "−3 空心向右",
      "−3 實心向右"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "−3<−3 為假，故空心；−4<−3 為真且 −4 在左側，故向左。",
      "result": "−3 空心向左",
      "answerIndexVerified": 0
    },
    "explanation": "嚴格小於不含 −3，畫空心點；較小的數在左側，因此向左。 -4代入為真、-3代入為假，故射線在左側且端點空心，與端點正負無關。",
    "steps": [
      "判斷端點不含",
      "判斷小於向左",
      "以-4與-3代入，驗證空心向左。"
    ],
    "optionAnalysis": [
      {
        "choice": "−3 空心向左",
        "truth": true,
        "reason": "獨立重算得到「−3 空心向左」，此選項與完整解答一致。"
      },
      {
        "choice": "−3 實心向左",
        "truth": false,
        "reason": "錯納入 −3。"
      },
      {
        "choice": "−3 空心向右",
        "truth": false,
        "reason": "選項「−3 空心向右」方向錯。，與獨立解得的「−3 空心向左」不一致。"
      },
      {
        "choice": "−3 實心向右",
        "truth": false,
        "reason": "端點與方向都錯。"
      }
    ],
    "misconceptionTarget": "因端點是負數而誤向右。 也可能讓負端點改變左右規則，沒有依數線左小右大判斷。",
    "prerequisiteCheck": "需比較負數與理解嚴格符號。",
    "estimatedTimeSec": "50",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "取 −4 應位於圖上、−2 不在圖上。",
    "difficultyReason": "單一負端點轉譯。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "42d892ba426514840f15adc2562360f6949ccc75313956fd95c3ed8d7897f985"
  },
  {
    "questionId": "u07-s004-v003",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "數線在 5 畫空心點並向右延伸，表示哪個解集？",
    "givenConditions": "端點標為 5。",
    "target": "由數線圖寫嚴格下界",
    "choices": [
      "x≥5",
      "x>5",
      "x≤5",
      "x<5"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "圖上 6 被包含，表示 x 比 5 大；5 的圓點未填，表示 x=5 不成立，因此 x>5。",
      "result": "x>5",
      "answerIndexVerified": 1
    },
    "explanation": "向右代表大於 5，空心代表不包含 5，所以是 x>5。 右側的6應符合而端點5不符合，因此正確式只能是嚴格大於5並向右延伸。",
    "steps": [
      "讀向右為大於",
      "讀空心為嚴格",
      "把6與5代入候選式，檢查方向與端點。"
    ],
    "optionAnalysis": [
      {
        "choice": "x≥5",
        "truth": false,
        "reason": "錯納入 5。"
      },
      {
        "choice": "x>5",
        "truth": true,
        "reason": "獨立重算得到「x>5」，此選項與完整解答一致。"
      },
      {
        "choice": "x≤5",
        "truth": false,
        "reason": "方向與端點都錯。"
      },
      {
        "choice": "x<5",
        "truth": false,
        "reason": "選項「x<5」方向錯。，與獨立解得的「x>5」不一致。"
      }
    ],
    "misconceptionTarget": "只看方向而漏看端點。 也可能從四格圖例直接抄標籤，沒有用題目端點5完成驗證。",
    "prerequisiteCheck": "需會讀圖。",
    "estimatedTimeSec": "45",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "圖示資訊充分且不依比例。",
    "difficultyReason": "基本圖文互譯。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "2d8afce457964cde63e2b161a78cf44adbcf2fc6b4caa2132af0e7448af94cd2"
  },
  {
    "questionId": "u07-s004-v004",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解 3x+1≤10 並選出正確數線描述。",
    "givenConditions": "係數 3>0。",
    "target": "結合解式與數線表示",
    "choices": [
      "3 空心向右",
      "3 實心向右",
      "3 實心向左",
      "3 空心向左"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "3x+1≤10 ⇒ 3x≤9 ⇒ x≤3。數線上所有不超過 3 的值在左側，且 3 屬於解。",
      "result": "3 實心向左",
      "answerIndexVerified": 2
    },
    "explanation": "3x≤9，所以 x≤3。端點 3 包含，應實心向左。 x=3使原式兩邊同為10而成立，x=4則左式13超過10，確認3是含入的上界。由三x小於等於九也可直接核對此結論。",
    "steps": [
      "解得 x≤3",
      "轉成 3 實心向左",
      "代入3與4回原式，驗證實心向左。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 空心向右",
        "truth": false,
        "reason": "方向與端點錯。"
      },
      {
        "choice": "3 實心向右",
        "truth": false,
        "reason": "選項「3 實心向右」方向錯。，與獨立解得的「3 實心向左」不一致。"
      },
      {
        "choice": "3 實心向左",
        "truth": true,
        "reason": "實心向左才正確。"
      },
      {
        "choice": "3 空心向左",
        "truth": false,
        "reason": "選項「3 空心向左」端點錯。，與獨立解得的「3 實心向左」不一致。"
      }
    ],
    "misconceptionTarget": "代數解正確但圖示端點或方向錯。 還可能求得x≤3後，畫圖時只看大於形狀而向右。",
    "prerequisiteCheck": "需會基本不等式解法。",
    "estimatedTimeSec": "75",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "x=3 代回等號成立，圖應包含 3。",
    "difficultyReason": "需完成代數與圖形兩層。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "36391beac821cd8606a17d49936b5323f49f4d77a135ce318646f2147b624087"
  },
  {
    "questionId": "u07-s004-v005",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "下列哪一個數線敘述與 4>x 等價？",
    "givenConditions": "標準數線。",
    "target": "將常數在左的不等式轉成圖",
    "choices": [
      "4 空心向左",
      "4 空心向右",
      "4 實心向左",
      "4 實心向右"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "測 x=3：4>3 成立，3 在 4 左側；測 x=4 不成立，故 4 空心。",
      "result": "4 空心向左",
      "answerIndexVerified": 0
    },
    "explanation": "4>x 等價於 x<4，所以 4 不包含，向左延伸。 交換左右後4>x須讀成x<4；3成立而4不成立，故空心向左。數線左側的三符合，而右側的五不符合。",
    "steps": [
      "交換左右讀成 x<4",
      "嚴格小於畫空心向左",
      "以x=3與4測試改寫式，確認與原式等價。"
    ],
    "optionAnalysis": [
      {
        "choice": "4 空心向左",
        "truth": true,
        "reason": "獨立重算得到「4 空心向左」，此選項與完整解答一致。"
      },
      {
        "choice": "4 空心向右",
        "truth": false,
        "reason": "選項「4 空心向右」方向錯。，與獨立解得的「4 空心向左」不一致。"
      },
      {
        "choice": "4 實心向左",
        "truth": false,
        "reason": "選項「4 實心向左」端點錯。，與獨立解得的「4 空心向左」不一致。"
      },
      {
        "choice": "4 實心向右",
        "truth": false,
        "reason": "端點與方向都錯。"
      }
    ],
    "misconceptionTarget": "交換左右後把關係寫成 x>4。 也可能只把未知數搬到左邊，卻保留符號外觀造成x>4。",
    "prerequisiteCheck": "需會等價改寫。",
    "estimatedTimeSec": "60",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "4>x 的解不含 4 且全在左側。",
    "difficultyReason": "多一步左右交換。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "0b8c53501eafc749fce7828df4566bea723294605982d109e34b3bf0e4cd1c81"
  },
  {
    "questionId": "u07-s004-v006",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "兩張數線圖分別表示 x≤1 與 1≥x。它們的關係為何？",
    "givenConditions": "兩圖使用相同刻度。",
    "target": "比較兩種寫法的數線解集",
    "choices": [
      "第二張應向右",
      "兩張解集相同",
      "只有端點相同",
      "第一張不含 1"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "1≥x 的中文是「1 大於或等於 x」，也就是「x 小於或等於 1」。因此圖形均為 1 實心向左。",
      "result": "兩張解集相同",
      "answerIndexVerified": 1
    },
    "explanation": "1≥x 就是 x≤1，兩式皆包含 1 並向左，因此解集完全相同。 兩式都讓1與更小的數成立、讓2失敗，所以端點及整個左向射線完全相同。",
    "steps": [
      "把 1≥x 改寫為 x≤1",
      "比較端點與方向",
      "用1、0與2代入兩式，比較每個測試值的真假一致。"
    ],
    "optionAnalysis": [
      {
        "choice": "第二張應向右",
        "truth": false,
        "reason": "改寫後仍向左。"
      },
      {
        "choice": "兩張解集相同",
        "truth": true,
        "reason": "獨立重算得到「兩張解集相同」，此選項與完整解答一致。"
      },
      {
        "choice": "只有端點相同",
        "truth": false,
        "reason": "不只端點相同，整條射線相同。"
      },
      {
        "choice": "第一張不含 1",
        "truth": false,
        "reason": "≤ 包含 1。"
      }
    ],
    "misconceptionTarget": "只看符號外觀不同就認為解集不同。 還可能只看左右交換後符號朝向不同，沒有把兩式讀成中文。",
    "prerequisiteCheck": "需會交換不等式左右。",
    "estimatedTimeSec": "65",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "兩式對任意 x 真值一致。",
    "difficultyReason": "需要辨識等價表示。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "4597471972f52ac90916c27711739300d339c11bf80fbf9caf70a2e243946bb2"
  },
  {
    "questionId": "u07-s004-v007",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "數線上端點 a 為實心，射線向左；已知 2 是解而 3 不是解，則 a 可能為何？",
    "givenConditions": "端點實心，解集 x≤a。",
    "target": "由解與非解反推圖形端點",
    "choices": [
      "1.5",
      "1.9",
      "2.5",
      "3"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "x≤a；2 是解要求 a≥2，3 不是解要求 a<3，故 2≤a<3。四個選項只有 2.5 位於此區間。",
      "result": "2.5",
      "answerIndexVerified": 2
    },
    "explanation": "圖表示 x≤a。2 是解給 a≥2；3 不是解給 a<3，因此 2≤a<3，只有 2.5 符合。 實心向左代表x≤a；a須至少2且小於3，四項只有2.5同時滿足。端點可為介於二與三之間的實數。",
    "steps": [
      "由實心向左寫 x≤a",
      "用 2 是解得到 a≥2",
      "用 3 不是解得到 a<3",
      "取參數交集",
      "將四個a分別檢查a≥2與a<3兩條條件。"
    ],
    "optionAnalysis": [
      {
        "choice": "1.5",
        "truth": false,
        "reason": "a<2，會使 2 不是解。"
      },
      {
        "choice": "1.9",
        "truth": false,
        "reason": "a<2，仍不包含 2。"
      },
      {
        "choice": "2.5",
        "truth": true,
        "reason": "2≤2.5<3，兩個條件都符合。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "a=3 時 3 會因實心端點成為解。"
      }
    ],
    "misconceptionTarget": "只檢查一個測試值，未同時使用包含與排除條件。 也可能把2是解誤寫成a≤2，顛倒端點與候選值的關係。",
    "prerequisiteCheck": "需會把候選真值轉成參數範圍。",
    "estimatedTimeSec": "110",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "a 必須同時滿足 2≤a<3；修正後四個選項僅 2.5 符合，且 a=3 因實心端點被排除。",
    "difficultyReason": "反向利用兩個測試點限定參數。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "f9793908d531af6043a9925b6092917c4a0f0db33d28cfa081c2a57cf928af08"
  },
  {
    "questionId": "u07-s004-v008",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解 2x−6<0 後，哪一個數線描述正確？",
    "givenConditions": "係數2為正，使用已鎖定的基本解法。",
    "target": "由正係數不等式解集轉成數線",
    "choices": [
      "3 實心向右",
      "3 空心向右",
      "3 實心向左",
      "3 空心向左"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "2x−6<0；兩邊同加6得2x<6，再同除以正數2得x<3。端點3代入為0<0假，2代入為-2<0真，所以3空心向左。",
      "result": "3 空心向左",
      "answerIndexVerified": 3
    },
    "explanation": "先在2x−6<0兩邊同加6，得到2x<6；再同除以正數2，方向不變，得到x<3。端點3不含且較小值位於左側，因此數線為3空心向左；以二回代也成立。",
    "steps": [
      "兩邊同加6得2x<6。",
      "兩邊同除正二得x<3。",
      "用3與2代入後畫成空心向左。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 實心向右",
        "truth": false,
        "reason": "錯成 x≥3。"
      },
      {
        "choice": "3 空心向右",
        "truth": false,
        "reason": "錯成 x>3。"
      },
      {
        "choice": "3 實心向左",
        "truth": false,
        "reason": "錯納入 3。"
      },
      {
        "choice": "3 空心向左",
        "truth": true,
        "reason": "獨立重算得到「3 空心向左」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "把數線轉譯題提前使用下一技能的負數除法，或將嚴格端點畫成實心。",
    "prerequisiteCheck": "只需已鎖定的正數除法與數線轉譯，不使用下一技能。",
    "estimatedTimeSec": "95",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "x=3代回為0<0假；x=2代回為-2<0真。",
    "difficultyReason": "需先解正係數不等式，再同步判讀空心端點與左向射線。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "d62f6485729f2e275c8082695de27102707c0010ef174c77ae4d7248afeaff10"
  },
  {
    "questionId": "u07-s004-v009",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "某數線圖表示 x>−1。若將整條圖左右鏡射並把每個標值乘以 −1，所得解集為何？",
    "givenConditions": "新變數代表原值乘 −1。",
    "target": "理解數線鏡射與不等號變號",
    "choices": [
      "x≥1",
      "x<1",
      "x>1",
      "x≤1"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "取原解 x=0，鏡射得 0，應仍在新解；取原解 x=2，鏡射得 −2。這些都小於 1，且端點 1 對應原 −1 被排除，故 y<1。",
      "result": "x<1",
      "answerIndexVerified": 1
    },
    "explanation": "原解中的每個 x 乘 −1，令 y=−x。由 x>−1 乘 −1 得 y<1，所以新圖為 1 空心向左。 原端點-1映成1且仍排除，原右側解映到1左側，因此新範圍嚴格小於1。",
    "steps": [
      "對所有值取相反數",
      "負數乘法使方向反轉",
      "追蹤原端點-1及原解0、2的鏡射位置，驗證x<1。"
    ],
    "optionAnalysis": [
      {
        "choice": "x≥1",
        "truth": false,
        "reason": "端點不含，不應 ≥。"
      },
      {
        "choice": "x<1",
        "truth": true,
        "reason": "獨立重算得到「x<1」，此選項與完整解答一致。"
      },
      {
        "choice": "x>1",
        "truth": false,
        "reason": "選項「x>1」方向錯。，與獨立解得的「x<1」不一致。"
      },
      {
        "choice": "x≤1",
        "truth": false,
        "reason": "錯納入 1。"
      }
    ],
    "misconceptionTarget": "只把端點 −1 變成 1，卻忘記射線方向反轉。 也可能只改端點正負，卻沒有把整條射線鏡射到另一側。",
    "prerequisiteCheck": "需會負數乘法次序反轉。",
    "estimatedTimeSec": "105",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "原端點不含，鏡射後仍不含；方向必反轉。",
    "difficultyReason": "以幾何操作理解代數變號。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "5cbea55cf0953d1169c6ba644f027488ee62ac617d232fe2e89e5b0562f12014"
  },
  {
    "questionId": "u07-s004-v010",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "停車場限高標誌寫「車高 h 不得超過 2.1 公尺」。哪個數線表示正確？",
    "givenConditions": "h 以公尺為單位且非負。",
    "target": "將實際限高規則畫成數線",
    "choices": [
      "2.1 空心向左",
      "2.1 空心向右",
      "2.1 實心向左",
      "2.1 實心向右"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "車高 2.1 公尺沒有超過限制，因此端點要實心；更矮的車可進，在數線左側，故實心向左。",
      "result": "2.1 實心向左",
      "answerIndexVerified": 2
    },
    "explanation": "不得超過表示 h≤2.1，包含剛好 2.1 且方向向左。 車高2.1仍未超過限制而可行，2.2則超標；因此端點含入且允許較小值，與不得超過的語意一致。",
    "steps": [
      "翻譯為 h≤2.1",
      "畫實心向左",
      "用2.1與2.2公尺測試，確認實心向左。"
    ],
    "optionAnalysis": [
      {
        "choice": "2.1 空心向左",
        "truth": false,
        "reason": "錯排除剛好 2.1。"
      },
      {
        "choice": "2.1 空心向右",
        "truth": false,
        "reason": "選項「2.1 空心向右」方向錯。，與獨立解得的「2.1 實心向左」不一致。"
      },
      {
        "choice": "2.1 實心向左",
        "truth": true,
        "reason": "獨立重算得到「2.1 實心向左」，此選項與完整解答一致。"
      },
      {
        "choice": "2.1 實心向右",
        "truth": false,
        "reason": "選項「2.1 實心向右」方向錯。，與獨立解得的「2.1 實心向左」不一致。"
      }
    ],
    "misconceptionTarget": "把安全上限誤當嚴格小於或下限。 也可能把不得超過當成最低高度，讓射線錯向右側。",
    "prerequisiteCheck": "需理解不超過。",
    "estimatedTimeSec": "65",
    "unitAndRoundingCheck": "所有高度單位為公尺，2.1 為精確標示。",
    "ambiguityAndBoundaryAudit": "自然限制 h≥0 未在選項中呈現，但不影響上界圖法。",
    "difficultyReason": "語意與數線端點結合。",
    "literacyContextNecessity": "限高標誌決定上界包含性，圖示用於判斷剛好 2.1 公尺是否允許。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "4b2827dba76e6ec0237fb46490d1e3b130c4125d383a859e166f7fefd72ea7c3"
  },
  {
    "questionId": "u07-s004-v011",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "藥品保存規範寫「溫度須高於 2°C」。冷藏箱顯示 2.0°C 時，依數線端點判斷應如何處理？",
    "givenConditions": "溫度讀數精確到 0.1°C，2.0=2。",
    "target": "用端點包含性判斷合規",
    "choices": [
      "符合，因端點實心",
      "符合，因 2.0 大於 2",
      "無法判斷",
      "不符合，因端點空心"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "2.0=2。原條件要求 T>2，代入得到 2>2 為假，所以不符合；圖上 2 應為空心。",
      "result": "不符合，因端點空心",
      "answerIndexVerified": 3
    },
    "explanation": "高於 2°C 表示 T>2，端點 2 為空心。2.0 與 2 相等，不屬於解集，因此不符合。 2.0只是2的另一種小數寫法，並未大於2；只有更高值如2.1才符合。",
    "steps": [
      "翻譯高於為 >",
      "檢查 2.0 等於端點",
      "比較2.0=2與2.1>2，驗證端點空心。"
    ],
    "optionAnalysis": [
      {
        "choice": "符合，因端點實心",
        "truth": false,
        "reason": "高於使用空心端點。"
      },
      {
        "choice": "符合，因 2.0 大於 2",
        "truth": false,
        "reason": "2.0 並不大於 2。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "規範與讀數足以判斷。"
      },
      {
        "choice": "不符合，因端點空心",
        "truth": true,
        "reason": "獨立重算得到「不符合，因端點空心」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "把小數寫法 2.0 誤認為比 2 大。 還可能把小數位數較多誤認為數值較大，忽略二點零等於二。",
    "prerequisiteCheck": "需理解小數等值與嚴格大於。",
    "estimatedTimeSec": "75",
    "unitAndRoundingCheck": "單位均為 °C；2.0 與 2 數值相等。",
    "ambiguityAndBoundaryAudit": "規範使用嚴格下界，因此端點不合規。",
    "difficultyReason": "需結合小數等值與數線端點。",
    "literacyContextNecessity": "保存規範與顯示精度使 2.0 是否等於門檻成為必要判斷。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "0cf49acfb2fdff0eac1c86f1c266ee5317afca76fe439a566c41e9a8785bedf9"
  },
  {
    "questionId": "u07-s004-v012",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "健身課程標示「心率 r 至少 120 下／分」。下列哪一位學員的心率位於數線解集的端點？",
    "givenConditions": "r 單位為下／分。",
    "target": "辨認情境不等式的數線邊界",
    "choices": [
      "120 下／分",
      "119 下／分",
      "121 下／分",
      "0 下／分"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "r≥120 的最左端是 120，且 120 本身符合；119 不在解集，121 雖在解集但不是邊界。",
      "result": "120 下／分",
      "answerIndexVerified": 0
    },
    "explanation": "至少 120 表示 r≥120，數線端點是 120，且為實心點。 端點是解集由不符合轉為符合的邊界120；121雖符合但位於射線內部，119則未進入解集。",
    "steps": [
      "翻譯至少為 ≥",
      "辨認端點數值 120",
      "檢查119、120、121的真假，找出含入的最小邊界120。"
    ],
    "optionAnalysis": [
      {
        "choice": "120 下／分",
        "truth": true,
        "reason": "正確，是包含的端點。"
      },
      {
        "choice": "119 下／分",
        "truth": false,
        "reason": "在端點左側且不符合。"
      },
      {
        "choice": "121 下／分",
        "truth": false,
        "reason": "在解集內但不是端點。"
      },
      {
        "choice": "0 下／分",
        "truth": false,
        "reason": "遠離端點且不符合實際活動情況。"
      }
    ],
    "misconceptionTarget": "把解集內任意數誤認為端點。 也可能把任何解都稱為端點，沒有辨認解集的邊界值。",
    "prerequisiteCheck": "需理解至少與端點。",
    "estimatedTimeSec": "55",
    "unitAndRoundingCheck": "單位一致，無換算。",
    "ambiguityAndBoundaryAudit": "端點由規則中的臨界值決定，唯一為 120。",
    "difficultyReason": "語意轉譯後識別幾何邊界。",
    "literacyContextNecessity": "心率門檻中的 120 是課程規則臨界值，情境決定端點。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "783a403456ded0c6ac1215c73a35b9857a51ca6f65738c586751b402f43a9a74"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u07-s004-cr001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "type": "constructed-response",
    "prompt": "解 2x+3>11，將解集畫在數線上，並說明為何端點使用空心點。",
    "requiredWork": [
      "代數解出 x 的範圍",
      "畫出端點與方向",
      "解釋空心點"
    ],
    "fullCreditSolution": [
      "由2x+3>11兩邊同減3得2x>8，再除以正數2得到x>4。",
      "在數線端點4畫空心點，並向右畫射線，因所有大於4的數位於右側。",
      "將x=4代入原式得11>11為假，所以端點不能填實。",
      "另取x=5，左式13>11成立，可確認射線方向向右。"
    ],
    "alternativeMethod": [
      "可先用邊界方程 2x+3=11 找到端點 4，再以 x=5 測試方向；但仍需說明 x=4 不符合。"
    ],
    "reasoningSteps": [
      "等價運算求出x>4。",
      "以嚴格符號判斷空心。",
      "依大於判斷向右。",
      "用4與5回原式驗證。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確求 x>4，在 4 畫空心點向右，並以 x=4 代入說明不包含。"
      },
      {
        "score": 2,
        "criteria": "代數答案與圖形正確，但空心點理由不完整；或只漏箭頭但文字寫明向右。"
      },
      {
        "score": 1,
        "criteria": "求得端點 4，但方向或空實心有一項錯，仍展示部分解題。"
      },
      {
        "score": 0,
        "criteria": "端點、方向與包含性均無法由原式合理得到。"
      }
    ],
    "partialCreditRules": "若代數步驟省略但圖形和端點驗證完整，可給 2 分；若圖正確但寫 x≥4，視為符號不一致。",
    "followThroughPolicy": "若算錯端點但依自己的嚴格不等式畫空心點並正確決定方向，可給圖形程序分。",
    "unitAndNotationRules": "數線需標 4；圖不要求按比例，但需有左右方向或箭頭。",
    "answerOnlyPolicy": "只寫 x>4，未畫數線，最多 1 分。",
    "commonErrors": [
      "求得x>4後仍把端點畫實心，錯把4納入。",
      "把大於當作符號箭頭而向左畫，沒有用5代入檢查方向。"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "x>4；4 空心點向右。",
      "ambiguity": "數線要求由代數解集產生，方向與端點皆唯一。",
      "scope": "國中不等式解集的數線表示。",
      "reviewNote": "獨立解得 2x>8、x>4；代入邊界 4 得 11>11 為假，再取 5 得 13>11 為真，確認空心點與向右方向。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "927e0d1fd909117e11f9e6e48f627d22298b9833a00b3ef3dbae15c7c5bb6e48"
  },
  {
    "questionId": "u07-s004-cr002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "type": "constructed-response",
    "prompt": "某數線表示 −1≤x<5。請以文字敘述此範圍，列出所有整數解，並說明兩端為何一實一空。",
    "requiredWork": [
      "用中文完整描述範圍",
      "列出所有整數解",
      "說明左右端點包含性"
    ],
    "fullCreditSolution": [
      "範圍-1≤x<5可讀成x至少為-1而且未滿5，或x不小於-1且小於5。",
      "與整數集合取交集，從-1開始逐一列到4，得到-1、0、1、2、3、4。",
      "左端符號含等號，所以-1成立並畫實心；右端是嚴格小於，所以5不成立並畫空心。",
      "代入-1、4都符合，代入5在第二條件失敗，確認列舉完整。"
    ],
    "alternativeMethod": [
      "可寫「x 不小於 −1 且小於 5」；整數也可由 −1 起逐一檢查至 4。"
    ],
    "reasoningSteps": [
      "把雙邊符號翻成中文。",
      "列出範圍內全部整數。",
      "依等號判斷左右端空實心。",
      "用兩端及5代入驗算。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "文字範圍、六個整數解與兩端實空心理由均正確。"
      },
      {
        "score": 2,
        "criteria": "文字與整數解正確，但端點理由只說一端；或只漏列一個整數。"
      },
      {
        "score": 1,
        "criteria": "能辨認大致介於 −1 與 5，但端點與列舉有兩項以上錯誤。"
      },
      {
        "score": 0,
        "criteria": "把範圍讀成外側或無法列出任何符合整數。"
      }
    ],
    "partialCreditRules": "漏列 0 或漏列一端整數視為單一列舉錯誤；若把 5 納入則顯示嚴格端點概念錯誤。",
    "followThroughPolicy": "若學生因誤判右端含 5 而列至 5，其他整數順序與左端正確，可給部分分但端點分不得給。",
    "unitAndNotationRules": "接受「−1 到 5 之間，包含 −1、不包含 5」；整數需使用正確負號。",
    "answerOnlyPolicy": "只列整數而無文字和理由，最多 1 分。",
    "commonErrors": [
      "把右端5列入整數解，忽略嚴格小於。",
      "把左端-1排除，或只列正整數而漏掉-1與0。"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "至少 −1 且未滿 5；整數解 −1、0、1、2、3、4。",
      "ambiguity": "雙邊符號明示兩端包含性，文字敘述可有同義表達但數學範圍唯一。",
      "scope": "國中雙邊範圍、數線和整數解。",
      "reviewNote": "獨立逐一檢查 −1≤x 與 x<5；−1 通過等號、5 因嚴格小於排除，故整數從 −1 連續到 4 共六個。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "b041d90928da3c44bde600e1f7c86b2f95b083087719b815a9f7f17e6227c915"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u07-s004-v001-semantic-r1",
    "questionId": "u07-s004-v001",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "contentSha256": "a5f1e9de46aeadf9c5c0f4af37d169f304c5d1ae834d5898aabbdd1294684b75",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "x=2 應是解，故端點填滿；x=3 也是解且在右側，所以射線向右。",
    "derivedAnswer": "2 實心向右",
    "storedAnswer": "2 實心向右",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「把含等號下界畫成數線」，給定條件「標準數線向右增大。」足以決定唯一數學任務。",
      "boundary": "四種組合中只有實心向右同時符合。",
      "units": "無單位與比例。",
      "scope": "本題只使用 不等式解的數線表示 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "直接圖像轉譯。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：x=2 應是解，故端點填滿；x=3 也是解且在右側，所以射線向右。 所得「2 實心向右」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：四種組合中只有實心向右同時符合。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s004-v002-semantic-r1",
    "questionId": "u07-s004-v002",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "contentSha256": "42d892ba426514840f15adc2562360f6949ccc75313956fd95c3ed8d7897f985",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "−3<−3 為假，故空心；−4<−3 為真且 −4 在左側，故向左。",
    "derivedAnswer": "−3 空心向左",
    "storedAnswer": "−3 空心向左",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「畫出負端點的嚴格上界」，給定條件「數線方向標準。」足以決定唯一數學任務。",
      "boundary": "取 −4 應位於圖上、−2 不在圖上。",
      "units": "無單位。",
      "scope": "本題只使用 不等式解的數線表示 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "單一負端點轉譯。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：−3<−3 為假，故空心；−4<−3 為真且 −4 在左側，故向左。 所得「−3 空心向左」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：取 −4 應位於圖上、−2 不在圖上。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s004-v003-semantic-r1",
    "questionId": "u07-s004-v003",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "contentSha256": "2d8afce457964cde63e2b161a78cf44adbcf2fc6b4caa2132af0e7448af94cd2",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "圖上 6 被包含，表示 x 比 5 大；5 的圓點未填，表示 x=5 不成立，因此 x>5。",
    "derivedAnswer": "x>5",
    "storedAnswer": "x>5",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「由數線圖寫嚴格下界」，給定條件「端點標為 5。」足以決定唯一數學任務。",
      "boundary": "圖示資訊充分且不依比例。",
      "units": "無單位。",
      "scope": "本題只使用 不等式解的數線表示 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "基本圖文互譯。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：圖上 6 被包含，表示 x 比 5 大；5 的圓點未填，表示 x=5 不成立，因此 x>5。 所得「x>5」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：圖示資訊充分且不依比例。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s004-v004-semantic-r1",
    "questionId": "u07-s004-v004",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "contentSha256": "36391beac821cd8606a17d49936b5323f49f4d77a135ce318646f2147b624087",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "3x+1≤10 ⇒ 3x≤9 ⇒ x≤3。數線上所有不超過 3 的值在左側，且 3 屬於解。",
    "derivedAnswer": "3 實心向左",
    "storedAnswer": "3 實心向左",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「結合解式與數線表示」，給定條件「係數 3>0。」足以決定唯一數學任務。",
      "boundary": "x=3 代回等號成立，圖應包含 3。",
      "units": "無單位。",
      "scope": "本題只使用 不等式解的數線表示 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "需完成代數與圖形兩層。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：3x+1≤10 ⇒ 3x≤9 ⇒ x≤3。數線上所有不超過 3 的值在左側，且 3 屬於解。 所得「3 實心向左」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：x=3 代回等號成立，圖應包含 3。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s004-v005-semantic-r1",
    "questionId": "u07-s004-v005",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "contentSha256": "0b8c53501eafc749fce7828df4566bea723294605982d109e34b3bf0e4cd1c81",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "測 x=3：4>3 成立，3 在 4 左側；測 x=4 不成立，故 4 空心。",
    "derivedAnswer": "4 空心向左",
    "storedAnswer": "4 空心向左",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「將常數在左的不等式轉成圖」，給定條件「標準數線。」足以決定唯一數學任務。",
      "boundary": "4>x 的解不含 4 且全在左側。",
      "units": "無單位。",
      "scope": "本題只使用 不等式解的數線表示 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "多一步左右交換。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：測 x=3：4>3 成立，3 在 4 左側；測 x=4 不成立，故 4 空心。 所得「4 空心向左」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：4>x 的解不含 4 且全在左側。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s004-v006-semantic-r1",
    "questionId": "u07-s004-v006",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "contentSha256": "4597471972f52ac90916c27711739300d339c11bf80fbf9caf70a2e243946bb2",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "1≥x 的中文是「1 大於或等於 x」，也就是「x 小於或等於 1」。因此圖形均為 1 實心向左。",
    "derivedAnswer": "兩張解集相同",
    "storedAnswer": "兩張解集相同",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「比較兩種寫法的數線解集」，給定條件「兩圖使用相同刻度。」足以決定唯一數學任務。",
      "boundary": "兩式對任意 x 真值一致。",
      "units": "無單位。",
      "scope": "本題只使用 不等式解的數線表示 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "需要辨識等價表示。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：1≥x 的中文是「1 大於或等於 x」，也就是「x 小於或等於 1」。因此圖形均為 1 實心向左。 所得「兩張解集相同」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：兩式對任意 x 真值一致。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s004-v007-semantic-r1",
    "questionId": "u07-s004-v007",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "contentSha256": "f9793908d531af6043a9925b6092917c4a0f0db33d28cfa081c2a57cf928af08",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "x≤a；2 是解要求 a≥2，3 不是解要求 a<3，故 2≤a<3。四個選項只有 2.5 位於此區間。",
    "derivedAnswer": "2.5",
    "storedAnswer": "2.5",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「由解與非解反推圖形端點」，給定條件「端點實心，解集 x≤a。」足以決定唯一數學任務。",
      "boundary": "a 必須同時滿足 2≤a<3；修正後四個選項僅 2.5 符合，且 a=3 因實心端點被排除。",
      "units": "無單位。",
      "scope": "本題只使用 不等式解的數線表示 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "反向利用兩個測試點限定參數。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：x≤a；2 是解要求 a≥2，3 不是解要求 a<3，故 2≤a<3。四個選項只有 2.5 位於此區間。 所得「2.5」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：a 必須同時滿足 2≤a<3；修正後四個選項僅 2.5 符合，且 a=3 因實心端點被排除。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s004-v008-semantic-r1",
    "questionId": "u07-s004-v008",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "contentSha256": "d62f6485729f2e275c8082695de27102707c0010ef174c77ae4d7248afeaff10",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "2x−6<0；兩邊同加6得2x<6，再同除以正數2得x<3。端點3代入為0<0假，2代入為-2<0真，所以3空心向左。",
    "derivedAnswer": "3 空心向左",
    "storedAnswer": "3 空心向左",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹要求先解正係數一次不等式，再選出對應數線，任務與先備範圍明確。",
      "boundary": "x=3代回為0<0假；x=2代回為-2<0真。",
      "units": "無單位與近似。",
      "scope": "只使用不等式基本解法與數線表示，不提前使用下一技能的乘除負數變號。"
    },
    "difficultyReason": "需先解正係數不等式，再同步判讀空心端點與左向射線。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算2x−6<0，兩邊同加6得2x<6，再除正二得x<3；x=3使0<0為假，x=2使-2<0為真，因此唯一答案仍為索引3的「3 空心向左」，且未提前使用下一技能。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s004-v009-semantic-r1",
    "questionId": "u07-s004-v009",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "contentSha256": "5cbea55cf0953d1169c6ba644f027488ee62ac617d232fe2e89e5b0562f12014",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "取原解 x=0，鏡射得 0，應仍在新解；取原解 x=2，鏡射得 −2。這些都小於 1，且端點 1 對應原 −1 被排除，故 y<1。",
    "derivedAnswer": "x<1",
    "storedAnswer": "x<1",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「理解數線鏡射與不等號變號」，給定條件「新變數代表原值乘 −1。」足以決定唯一數學任務。",
      "boundary": "原端點不含，鏡射後仍不含；方向必反轉。",
      "units": "無單位。",
      "scope": "本題只使用 不等式解的數線表示 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "以幾何操作理解代數變號。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：取原解 x=0，鏡射得 0，應仍在新解；取原解 x=2，鏡射得 −2。這些都小於 1，且端點 1 對應原 −1 被排除，故 y<1。 所得「x<1」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：原端點不含，鏡射後仍不含；方向必反轉。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s004-v010-semantic-r1",
    "questionId": "u07-s004-v010",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "contentSha256": "4b2827dba76e6ec0237fb46490d1e3b130c4125d383a859e166f7fefd72ea7c3",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "車高 2.1 公尺沒有超過限制，因此端點要實心；更矮的車可進，在數線左側，故實心向左。",
    "derivedAnswer": "2.1 實心向左",
    "storedAnswer": "2.1 實心向左",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「將實際限高規則畫成數線」，給定條件「h 以公尺為單位且非負。」足以決定唯一數學任務。",
      "boundary": "自然限制 h≥0 未在選項中呈現，但不影響上界圖法。",
      "units": "所有高度單位為公尺，2.1 為精確標示。",
      "scope": "本題只使用 不等式解的數線表示 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "語意與數線端點結合。",
    "literacyNecessityCheck": "限高標誌決定上界包含性，圖示用於判斷剛好 2.1 公尺是否允許。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：車高 2.1 公尺沒有超過限制，因此端點要實心；更矮的車可進，在數線左側，故實心向左。 所得「2.1 實心向左」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：自然限制 h≥0 未在選項中呈現，但不影響上界圖法。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s004-v011-semantic-r1",
    "questionId": "u07-s004-v011",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "contentSha256": "0cf49acfb2fdff0eac1c86f1c266ee5317afca76fe439a566c41e9a8785bedf9",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "2.0=2。原條件要求 T>2，代入得到 2>2 為假，所以不符合；圖上 2 應為空心。",
    "derivedAnswer": "不符合，因端點空心",
    "storedAnswer": "不符合，因端點空心",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「用端點包含性判斷合規」，給定條件「溫度讀數精確到 0.1°C，2.0=2。」足以決定唯一數學任務。",
      "boundary": "規範使用嚴格下界，因此端點不合規。",
      "units": "單位均為 °C；2.0 與 2 數值相等。",
      "scope": "本題只使用 不等式解的數線表示 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "需結合小數等值與數線端點。",
    "literacyNecessityCheck": "保存規範與顯示精度使 2.0 是否等於門檻成為必要判斷。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：2.0=2。原條件要求 T>2，代入得到 2>2 為假，所以不符合；圖上 2 應為空心。 所得「不符合，因端點空心」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：規範使用嚴格下界，因此端點不合規。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s004-v012-semantic-r1",
    "questionId": "u07-s004-v012",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "contentSha256": "783a403456ded0c6ac1215c73a35b9857a51ca6f65738c586751b402f43a9a74",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "r≥120 的最左端是 120，且 120 本身符合；119 不在解集，121 雖在解集但不是邊界。",
    "derivedAnswer": "120 下／分",
    "storedAnswer": "120 下／分",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「辨認情境不等式的數線邊界」，給定條件「r 單位為下／分。」足以決定唯一數學任務。",
      "boundary": "端點由規則中的臨界值決定，唯一為 120。",
      "units": "單位一致，無換算。",
      "scope": "本題只使用 不等式解的數線表示 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "語意轉譯後識別幾何邊界。",
    "literacyNecessityCheck": "心率門檻中的 120 是課程規則臨界值，情境決定端點。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：r≥120 的最左端是 120，且 120 本身符合；119 不在解集，121 雖在解集但不是邊界。 所得「120 下／分」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：端點由規則中的臨界值決定，唯一為 120。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u07-fig-number-line-translation",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-number-line",
    "svgPath": "figures/u07/u07-fig-number-line-translation.svg",
    "canvas": {
      "width": 720,
      "height": 240,
      "unit": "px"
    },
    "viewBox": "0 0 720 240",
    "drawingSpec": {
      "coordinateSystem": "四個 145×80 的局部數線區塊",
      "panelOrigins": [
        [
          25,
          35
        ],
        [
          195,
          35
        ],
        [
          365,
          35
        ],
        [
          535,
          35
        ]
      ],
      "endpointSymbol": "all panels use c",
      "endpointRadius": 8,
      "panel1": "open-left",
      "panel2": "closed-left",
      "panel3": "open-right",
      "panel4": "closed-right",
      "baselineLength": 145,
      "rayLengthApprox": 60,
      "lineWeights": "baseline default, solution ray 6px, endpoint outline 3px",
      "labels": "每格下方中文標示狀態",
      "arrows": "射線與數線正方向均有箭頭",
      "hiddenLines": "none",
      "units": "abstract number line",
      "scalePolicy": "not-to-scale",
      "layoutConstraint": "四面板等距且不重疊"
    },
    "toScale": false,
    "noVisualInferenceWarning": "本圖用於說明端點與方向，不按數值距離比例繪製；不得由線段長短推論答案。",
    "altText": "四個不按比例的數線圖例，以字母c為端點，依序呈現空心向左、實心向左、空心向右與實心向右；下方提醒方向和端點包含性必須分開判讀。",
    "svgTitle": "數線翻譯的中性端點圖例",
    "svgDesc": "四個不按比例的數線圖例，以字母c為端點，依序呈現空心向左、實心向左、空心向右與實心向右；下方提醒方向和端點包含性必須分開判讀。",
    "mobileReadability": "在 360px 寬度檢查後，端點直徑、箭頭、刻度與標籤仍可分辨；文字不小於 18px。",
    "answerLeakageReview": "四種完整組合只由講義引用作規則總覽；所有題庫與非選題已移除figureId，避免在要求選擇組合時直接顯示答案分類。",
    "svgAssertions": [
      "空心向左",
      "實心向左",
      "空心向右",
      "實心向右",
      "方向與端點必須分開判讀",
      "<circle cx=\"78\" cy=\"35\" r=\"8\" fill=\"white\""
    ],
    "figureReview": {
      "decision": "pass",
      "manualVisualInspection": true,
      "geometryCheck": "pass",
      "mobileCheck": "pass",
      "answerLeakageCheck": "pass",
      "reviewNote": "重新核對四面板SVG幾何、標籤、alt與desc完全一致，白底黑白列印及手機縮放可讀；此完整圖例僅保留給講義，不再掛於作答題目旁。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "fea81ad9cde6b63e3923b72767aa87aadd902e4debb785ac7ede0b709258fa25",
    "mobileReadabilityReview": "縮至360px寬時四個面板仍保持分欄，空實心圓、左右粗射線、箭頭與中文標籤可辨，不互相覆蓋。",
    "printReadabilityReview": "A4黑白列印時以白底、黑框空心圓、全黑實心圓與粗線箭頭區分四種狀態，不依賴色彩，縮放後端點輪廓仍清楚。"
  }
];
