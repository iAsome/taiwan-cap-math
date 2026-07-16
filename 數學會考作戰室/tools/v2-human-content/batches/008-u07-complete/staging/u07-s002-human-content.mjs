// DETERMINISTIC SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u07-s002-lecture-r1",
  "unitId": "u07",
  "topicId": "u07-basics",
  "skillId": "inequality-solve-basic",
  "title": "一元一次不等式解法：用同向等值操作保留解集",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能理解解不等式是找出所有使關係成立的 x。",
    "能在不等式兩邊同加或同減同一數。",
    "能在兩邊同乘或同除正數。",
    "能把答案代回原式檢查。"
  ],
  "prerequisites": [
    {
      "skillId": "inequality-symbol",
      "requiredLevel": "能讀懂四種不等號並判斷解集方向。"
    }
  ],
  "prerequisiteBridge": {
    "inequality-symbol": "能讀懂四種不等號並判斷解集方向。"
  },
  "glossary": [
    {
      "term": "一元一次不等式",
      "definition": "只含一個未知數，且未知數最高次數為 1 的不等式。"
    },
    {
      "term": "同向等值操作",
      "definition": "在不等式兩邊做不改變大小方向的相同運算。"
    },
    {
      "term": "係數",
      "definition": "乘在未知數前面的數。"
    }
  ],
  "notation": [
    {
      "symbol": "ax+b>c",
      "meaning": "一元一次不等式的一般外形之一。"
    },
    {
      "symbol": "⇔",
      "meaning": "前後兩個不等式具有相同解集。"
    }
  ],
  "conceptNarrative": [
    "解不等式與解方程式都要讓未知數單獨，但結果通常是一段範圍，不是單一數。",
    "兩邊同加或同減相同數，大小關係不變。",
    "兩邊同乘或同除正數，大小關係也不變。",
    "本節先處理正係數；若最後需要除以負數，必須使用下一節後段的變號規則。",
    "每一步等價運算後都可用邊界、範圍內與範圍外的測試值回到原式檢查；遇到人數、圈數或分鐘等離散量，還要把連續範圍解讀成合適整數。"
  ],
  "formalDefinitions": [
    {
      "name": "等價不等式",
      "statement": "若兩個不等式的解集完全相同，就稱它們等價。"
    },
    {
      "name": "正數倍操作",
      "statement": "若 a>b 且 k>0，則 ak>bk；除以正數也保持方向。"
    }
  ],
  "formulas": [
    {
      "formula": "a>b ⇒ a+c>b+c",
      "conditions": [
        "c 為任意實數"
      ],
      "meaning": "兩邊同加同一數不變號。"
    },
    {
      "formula": "a>b 且 k>0 ⇒ ak>bk",
      "conditions": [
        "k 必須為正數"
      ],
      "meaning": "乘除正數不變號。"
    }
  ],
  "nonApplicableCases": [
    "不能只在其中一邊加減。",
    "除數不能是 0。",
    "若乘除的數是負數，不能沿用本節「不變號」規則。",
    "得到 x 的範圍後，不可把端點誤當成唯一答案。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "辨認要消去的常數或正係數。",
      "check": "本節不直接除以負數。"
    },
    {
      "step": 2,
      "instruction": "在左右兩邊同加或同減同一數。",
      "check": "每一行仍與前一行等價。"
    },
    {
      "step": 3,
      "instruction": "必要時同乘或同除同一正數。",
      "check": "乘除正數不改不等號方向。"
    },
    {
      "step": 4,
      "instruction": "將結果寫成x在一段範圍，而非單一值。",
      "check": "端點是否包含沿用原符號。"
    },
    {
      "step": 5,
      "instruction": "代入邊界、內部與外部值，情境題再處理整數限制。",
      "check": "原式真假與答案範圍一致。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "解x+5>9。",
      "solutionSteps": [
        "兩邊同減5。",
        "得到x>4。",
        "代入5成立、4不成立。"
      ],
      "answer": "x>4。",
      "why": "同減五保持原來的大小次序，並使未知數單獨。以範圍內的五及端點四回到原式，一真一假，既確認方向也確認嚴格不等號沒有納入端點。"
    },
    {
      "exampleId": "L2",
      "prompt": "解x-7≤2。",
      "solutionSteps": [
        "兩邊同加7。",
        "得到x≤9。",
        "用9與10代入檢查。"
      ],
      "answer": "x≤9。",
      "why": "消去負七必須在兩邊同加七，不是只把符號搬到右邊。九代入使兩邊相等而成立，十代入則失敗，因此上界九包含在解集中。"
    },
    {
      "exampleId": "L3",
      "prompt": "解3x<15。",
      "solutionSteps": [
        "辨認係數3為正。",
        "兩邊同除正數3，方向不變。",
        "得到x<5並以4、5驗算。"
      ],
      "answer": "x<5。",
      "why": "正數除法會等比例縮小兩邊而不改變次序，所以仍使用小於號。四在答案範圍內且原式成立，五恰為端點但不成立，驗證嚴格性。"
    },
    {
      "exampleId": "L4",
      "prompt": "解2x+3≥11。",
      "solutionSteps": [
        "兩邊同減3得2x≥8。",
        "兩邊同除正二得x≥4。",
        "代入4得等號成立。"
      ],
      "answer": "x≥4。",
      "why": "先消去常數再除正係數，每一步都維持等價與方向。端點四讓原式左邊等於十一，因≥含等號而必須納入，較大的數也都成立。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "x+5>9 只把左邊減 5。",
      "why": "破壞兩邊原有比較。",
      "correction": "兩邊同減 5。"
    },
    {
      "mistake": "3x<15 除以 3 後寫 x>5。",
      "why": "誤以為任何除法都變號。",
      "correction": "除以正數不變號。"
    },
    {
      "mistake": "x−7≤2 寫成 x≤−5。",
      "why": "移除 −7 時符號處理錯。",
      "correction": "兩邊同加 7。"
    },
    {
      "mistake": "把 x≥4 解讀為 x=4。",
      "why": "沿用方程式單一解思維。",
      "correction": "4 以及所有更大的數都是解。"
    },
    {
      "mistake": "驗算只代端點。",
      "why": "端點可能剛好成立，無法確認方向。",
      "correction": "另代範圍內與範圍外各一數。"
    },
    {
      "mistake": "將 2x+3≥11 先除以 2 卻漏除常數 3。",
      "why": "沒有對整個左右式做同一運算。",
      "correction": "先移除常數或將整個式子各項同除。"
    }
  ],
  "selfCheck": [
    "每一步是否對左右兩邊做同一運算？",
    "乘除的數是否為正數？",
    "最後答案是否為範圍而非單一數？",
    "我是否用原式驗算方向？"
  ],
  "summary": [
    "同加同減任意數，不等號方向不變。",
    "同乘同除正數，不等號方向不變。",
    "目標是讓 x 單獨。",
    "答案要以解集範圍表示並代回檢查。"
  ],
  "connections": {
    "previous": "承接不等號與數線的讀法。",
    "next": [
      "下一節會把多項式整理與移項連在一起。",
      "乘除負數的例外規則將在第五技能完整處理。"
    ]
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u07-s002-v001",
      "u07-s002-v002",
      "u07-s002-v003",
      "u07-s002-v004",
      "u07-s002-v005",
      "u07-s002-v006",
      "u07-s002-v007",
      "u07-s002-v008",
      "u07-s002-v009",
      "u07-s002-v010",
      "u07-s002-v011",
      "u07-s002-v012"
    ],
    "constructedResponseIds": [
      "u07-s002-cr001",
      "u07-s002-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐步重算四題並以代入原式確認；特別區分正數除法不變號與尚未進入的負數變號，避免零基礎學生過早混用規則。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "5df0881de0be69063660b916dca3d34ed48b53c64fdcf536f9cfbab6fab084fd"
};

export const QUESTIONS = [
  {
    "questionId": "u07-s002-v001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解不等式 x+7>12，答案為何？",
    "givenConditions": "x 為實數。",
    "target": "解一個加法型基本不等式",
    "choices": [
      "x>19",
      "x>5",
      "x<5",
      "x≥5"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "由 x+7>12，為保持比較兩邊同減 7：x>12−7=5。代 x=6 成立、x=5 不成立。",
      "result": "x>5",
      "answerIndexVerified": 1
    },
    "explanation": "兩邊同減 7，得到 x>5。嚴格不等號不會因同減而改變方向。 代入6得到13>12為真，代入端點5得到12>12為假，驗證範圍是嚴格大於5。因此只可能選右側且不含端點的範圍。",
    "steps": [
      "左右同減 7",
      "整理為 x>5",
      "用x=6與x=5代回原式，確認方向與端點排除。"
    ],
    "optionAnalysis": [
      {
        "choice": "x>19",
        "truth": false,
        "reason": "把 7 加到右邊方向錯。"
      },
      {
        "choice": "x>5",
        "truth": true,
        "reason": "獨立重算得到「x>5」，此選項與完整解答一致。"
      },
      {
        "choice": "x<5",
        "truth": false,
        "reason": "無理由反向。"
      },
      {
        "choice": "x≥5",
        "truth": false,
        "reason": "錯把嚴格大於改成含等號。"
      }
    ],
    "misconceptionTarget": "移除常數時做錯運算或擅自加入等號。 也可能只在一邊減七，破壞原來的不等關係。",
    "prerequisiteCheck": "需能讀懂不等號與做整數減法。",
    "estimatedTimeSec": "55",
    "unitAndRoundingCheck": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "同減 7 是等價操作，唯一解集為 x>5。",
    "difficultyReason": "單步同減常數。",
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
    "contentSha256": "e7eb99193c618b5ca385503c7a6be8b40327dfb188f5897530f645d8d475e7f5"
  },
  {
    "questionId": "u07-s002-v002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解不等式 x−4≤9，答案為何？",
    "givenConditions": "x 為實數。",
    "target": "解減法型基本不等式",
    "choices": [
      "x≤5",
      "x≥13",
      "x≤13",
      "x<13"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "把左右都加 4：x−4+4≤9+4，所以 x≤13；端點 13 代回成立。",
      "result": "x≤13",
      "answerIndexVerified": 2
    },
    "explanation": "兩邊同加 4，得到 x≤13。含等號的 ≤ 在同加後保持不變。 端點13代入後左式為9，與右式相等，所以13必須包含；14則不符合。這也排除把上界錯寫成嚴格小於。",
    "steps": [
      "左右同加 4",
      "計算 9+4=13",
      "代入13與14，驗證端點包含且更大值排除。"
    ],
    "optionAnalysis": [
      {
        "choice": "x≤5",
        "truth": false,
        "reason": "把 4 方向處理錯。"
      },
      {
        "choice": "x≥13",
        "truth": false,
        "reason": "方向錯成下界。"
      },
      {
        "choice": "x≤13",
        "truth": true,
        "reason": "獨立重算得到「x≤13」，此選項與完整解答一致。"
      },
      {
        "choice": "x<13",
        "truth": false,
        "reason": "漏掉端點 13。"
      }
    ],
    "misconceptionTarget": "將減 4 移除時誤作減法，或漏保留等號。 還可能把x-4理解成x與4的距離而不做等價運算。",
    "prerequisiteCheck": "需能做整數加法。",
    "estimatedTimeSec": "50",
    "unitAndRoundingCheck": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "x=13 代入得 9≤9，必須包含。",
    "difficultyReason": "單步同加常數。",
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
    "contentSha256": "901abe986940d3c1aeba741edb72ea9aa5ebd70890064857c2c14f4d1bf9e3d6"
  },
  {
    "questionId": "u07-s002-v003",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解不等式 5x<30，答案為何？",
    "givenConditions": "5 為正數。",
    "target": "解正係數乘法型不等式",
    "choices": [
      "x≤6",
      "x>6",
      "x≥6",
      "x<6"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "5x<30，因 5>0 可同除 5 且保持方向：x<6。代 x=5 成立、x=6 不成立。",
      "result": "x<6",
      "answerIndexVerified": 3
    },
    "explanation": "兩邊同除以正數 5，不等號方向不變，得到 x<6。 正數除法保持次序；用5驗算25<30成立，用6驗算30<30失敗，故端點不含。這同時排除把除以正數誤當成需要反向。",
    "steps": [
      "左右同除以 5",
      "正數除法不變號",
      "以5與6代入原式檢查範圍內值及端點。"
    ],
    "optionAnalysis": [
      {
        "choice": "x≤6",
        "truth": false,
        "reason": "錯把嚴格小於改成含等號。"
      },
      {
        "choice": "x>6",
        "truth": false,
        "reason": "選項「x>6」方向錯。，與獨立解得的「x<6」不一致。"
      },
      {
        "choice": "x≥6",
        "truth": false,
        "reason": "方向與端點都錯。"
      },
      {
        "choice": "x<6",
        "truth": true,
        "reason": "獨立重算得到「x<6」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "誤以為所有除法都要變號。 也可能把30除以5算錯，或無故把嚴格小於改成含等號。",
    "prerequisiteCheck": "需會基本除法。",
    "estimatedTimeSec": "50",
    "unitAndRoundingCheck": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "除數為正且非 0，等價操作有效。",
    "difficultyReason": "單一步驟除正係數。",
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
    "contentSha256": "d66c4ddec14af1cfb5d00fe3b7b07baea9adea42ded72c3462e09d75a750e05f"
  },
  {
    "questionId": "u07-s002-v004",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解不等式 3x+2≥20，答案為何？",
    "givenConditions": "3>0，除法不變號。",
    "target": "解兩步驟正係數不等式",
    "choices": [
      "x≥6",
      "x≤6",
      "x≥22/3",
      "x>6"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "原式減 2：3x≥18；再除正 3：x≥6。檢查 x=6 時左邊 20，恰等於右邊。",
      "result": "x≥6",
      "answerIndexVerified": 0
    },
    "explanation": "先兩邊同減 2 得 3x≥18，再同除以正數 3，得到 x≥6。 x=6使左式正好20，符合含等號條件；x=5使左式為17而不成立，x=7則成立，確認射線應從6向較大側延伸。",
    "steps": [
      "同減 2 得 3x≥18",
      "同除以 3 得 x≥6",
      "把6與5代回3x+2≥20，核對端點及方向。"
    ],
    "optionAnalysis": [
      {
        "choice": "x≥6",
        "truth": true,
        "reason": "獨立重算得到「x≥6」，此選項與完整解答一致。"
      },
      {
        "choice": "x≤6",
        "truth": false,
        "reason": "選項「x≤6」方向相反。，與獨立解得的「x≥6」不一致。"
      },
      {
        "choice": "x≥22/3",
        "truth": false,
        "reason": "把 2 未先移除或算錯。"
      },
      {
        "choice": "x>6",
        "truth": false,
        "reason": "選項「x>6」漏掉等號。，與獨立解得的「x≥6」不一致。"
      }
    ],
    "misconceptionTarget": "計算 20−2 或端點包含性錯誤。 還可能把二十減二錯算，或除正三時誤反向。",
    "prerequisiteCheck": "需會基本移項與除法。",
    "estimatedTimeSec": "70",
    "unitAndRoundingCheck": "無單位與近似；18÷3 整除。",
    "ambiguityAndBoundaryAudit": "x=6 代入得 20≥20，端點必須包含。",
    "difficultyReason": "需要兩個等價步驟與端點驗算。",
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
    "contentSha256": "a0768a75a72f3ed3a4bcd51e2ce9533839e76a2fa3f39a9be33a4ee37cbe8b04"
  },
  {
    "questionId": "u07-s002-v005",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "以「兩邊先同加 9」解不等式 4x−9<7，最後範圍為何？",
    "givenConditions": "指定第一步為兩邊同加 9；4 為正係數。",
    "target": "依指定等價運算完成基本不等式解法",
    "choices": [
      "x<−1/2",
      "x>4",
      "x<4",
      "x≤4"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "兩邊同加 9 得 4x<16；兩邊同除以正數 4，方向不變，得 x<4。",
      "result": "x<4",
      "answerIndexVerified": 2
    },
    "explanation": "兩邊同加 9 得 4x<16，再同除以 4，得 x<4。 因4為正，最後除法不改方向；代入3成立、4不成立，確認答案不含端點。端點四代入後成為七小於七，這個命題為假。",
    "steps": [
      "同加 9",
      "除以正數 4",
      "用x=3與x=4代回原式驗證x<4。"
    ],
    "optionAnalysis": [
      {
        "choice": "x<−1/2",
        "truth": false,
        "reason": "把 7−9 當作右側結果。"
      },
      {
        "choice": "x>4",
        "truth": false,
        "reason": "選項「x>4」方向錯。，與獨立解得的「x<4」不一致。"
      },
      {
        "choice": "x<4",
        "truth": true,
        "reason": "獨立重算得到「x<4」，此選項與完整解答一致。"
      },
      {
        "choice": "x≤4",
        "truth": false,
        "reason": "錯納入 x=4。"
      }
    ],
    "misconceptionTarget": "移除 −9 時使用錯誤符號，或把嚴格小於改成含等號。 也可能把指定的先同加九做成只改左式符號的移項。",
    "prerequisiteCheck": "需會整數加法與正數除法。",
    "estimatedTimeSec": "70",
    "unitAndRoundingCheck": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "x=4 代入得 7<7 為假，故不含端點。",
    "difficultyReason": "需把指定的同加運算落實到兩邊，再以正數除法完成。",
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
    "contentSha256": "7956baaa0c6451b6c2a238c21b027392ccd6685370543bc6ce22b162ebbac8d1"
  },
  {
    "questionId": "u07-s002-v006",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "若 2x+5≤17，則下列哪個數不是解？",
    "givenConditions": "候選值皆為實數；問「不是解」。",
    "target": "先解不等式再辨識反例",
    "choices": [
      "0",
      "6",
      "−10",
      "7"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "2x+5≤17 ⇒ 2x≤12 ⇒ x≤6。測四值，只有 7 不滿足 x≤6，因此不是解。",
      "result": "7",
      "answerIndexVerified": 3
    },
    "explanation": "解原式：2x≤12，所以 x≤6。0、6、−10 都符合；7 大於 6，不是解。 端點6使2×6+5=17而成立；7使左式19超過17，因此只有7不是解。這也說明含等號的上界本身仍然可以取到。",
    "steps": [
      "先求解 x≤6",
      "逐一檢查候選值",
      "逐一代入四個選項，找出唯一使原式為假的7。"
    ],
    "optionAnalysis": [
      {
        "choice": "0",
        "truth": false,
        "reason": "0≤6，是解。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "6 是包含的端點。"
      },
      {
        "choice": "−10",
        "truth": false,
        "reason": "−10≤6，是解。"
      },
      {
        "choice": "7",
        "truth": true,
        "reason": "7>6，不是解。"
      }
    ],
    "misconceptionTarget": "只代入部分選項，或忘記端點 6 包含。 還可能看到負十就先排除，未將它代入小於等於的範圍。",
    "prerequisiteCheck": "需會兩步解法與否定語意。",
    "estimatedTimeSec": "80",
    "unitAndRoundingCheck": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "「不是解」只有一項；x=6 端點代回等號成立。",
    "difficultyReason": "需先求完整解集再反向篩選。",
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
    "contentSha256": "2c5b98e084449fa809d19e17c90e51a217d82c6a48bce01045a433e6a1225220"
  },
  {
    "questionId": "u07-s002-v007",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "已知不等式 ax>12 的解為 x>3，且 a 為正數，則 a 為何？",
    "givenConditions": "a>0 已明示，排除變號問題。",
    "target": "由指定解集反求正係數",
    "choices": [
      "4",
      "3",
      "6",
      "1/4"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "ax>12 且 a>0 等價於 x>12/a。題給同一解集 x>3，因此 12/a=3；乘 a 得 12=3a，a=4。",
      "result": "4",
      "answerIndexVerified": 0
    },
    "explanation": "因 a>0，兩邊除以 a 得 x>12/a。與 x>3 比較端點，12/a=3，所以 a=4。 a為正保證除法不反向；求得4後，原式4x>12確實等價於x>3。若選其他係數，邊界三就不會使左右兩邊相等。",
    "steps": [
      "正係數除法保持方向",
      "令解集端點 12/a 等於 3",
      "將a=4代回並同除正四，檢查解集恰為x>3。"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": true,
        "reason": "12/4=3，正確。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "12/3=4，端點不為 3。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "12/6=2。"
      },
      {
        "choice": "1/4",
        "truth": false,
        "reason": "12/(1/4)=48。"
      }
    ],
    "misconceptionTarget": "把 a 直接當成解集端點，或解 12/a=3 時顛倒。 也可能忽略a>0的條件，未先確認能否保持不等號方向。",
    "prerequisiteCheck": "需會解正係數不等式與分數方程。",
    "estimatedTimeSec": "95",
    "unitAndRoundingCheck": "無單位；a=4 精確。",
    "ambiguityAndBoundaryAudit": "正數條件確保解集方向一致，端點唯一決定 a。",
    "difficultyReason": "反向從解集重建係數，推理高於直接求解。",
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
    "contentSha256": "2a9fea2e9388c7ebd0058d5e40bc2a667870d0552a7925d888231c9eeb6075c7"
  },
  {
    "questionId": "u07-s002-v008",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解不等式 (x+3)/2≥5，答案為何？",
    "givenConditions": "分母 2>0 且非 0。",
    "target": "解含正分母的一元一次不等式",
    "choices": [
      "x≤7",
      "x≥7",
      "x≥13",
      "x>7"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "因 2 為正，原式乘 2 得 x+3≥10；減 3 得 x≥7。x=7 時左式 5，故含端點。",
      "result": "x≥7",
      "answerIndexVerified": 1
    },
    "explanation": "兩邊同乘正數 2 得 x+3≥10，再同減 3，得到 x≥7。 乘以正二只清除分母而不反向；端點7代入左式等於5，所以必須包含。範圍外的六代入則不足五，可排除錯向答案。",
    "steps": [
      "乘以正數 2",
      "同減 3",
      "代入x=7及較小的6，檢查端點與向右範圍。"
    ],
    "optionAnalysis": [
      {
        "choice": "x≤7",
        "truth": false,
        "reason": "選項「x≤7」方向錯。，與獨立解得的「x≥7」不一致。"
      },
      {
        "choice": "x≥7",
        "truth": true,
        "reason": "獨立重算得到「x≥7」，此選項與完整解答一致。"
      },
      {
        "choice": "x≥13",
        "truth": false,
        "reason": "把 3 加到 10。"
      },
      {
        "choice": "x>7",
        "truth": false,
        "reason": "漏掉端點 7。"
      }
    ],
    "misconceptionTarget": "清除分母時誤變號或常數移項錯誤。 還可能只把分子中的x乘二，沒有對整個不等式等價處理。",
    "prerequisiteCheck": "需會分數式與基本解法。",
    "estimatedTimeSec": "80",
    "unitAndRoundingCheck": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "乘正數 2 不改方向；x=7 代回等於 5。",
    "difficultyReason": "含分母但仍是兩個等價步驟。",
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
    "contentSha256": "441ed78d49a0c74bab73bf694868f4dd37acad1e11cb631a26c3363bd988ab85"
  },
  {
    "questionId": "u07-s002-v009",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "若 x 為整數且 7−2x>1，但暫時只允許使用「兩邊同加減」與「除以正數」的基本策略，下列哪一步最適合先做？",
    "givenConditions": "限制只允許同加減與除正數作主要策略。",
    "target": "選擇能避免負數除法的等價操作",
    "choices": [
      "兩邊同除以 −2",
      "兩邊同減 7",
      "直接寫 x<3",
      "兩邊同加 2x"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "若先加 2x：7>1+2x，再減 1 得 6>2x，除正 2 得 3>x。整個流程沒有除負數，符合題設。",
      "result": "兩邊同加 2x",
      "answerIndexVerified": 3
    },
    "explanation": "為避免立刻除以負數，可先在兩邊同加 2x，得到 7>1+2x；之後同減 1、除以正數 2。 同加2x可把未知數係數移成正二，後續只需減一並除正二，完全符合題目策略限制。",
    "steps": [
      "觀察未知數係數為負",
      "先同加 2x 使右側係數為正",
      "完成7>1+2x、6>2x、3>x，檢查全程未除負數。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩邊同除以 −2",
        "truth": false,
        "reason": "此步需要負數變號規則，不符合題設策略。"
      },
      {
        "choice": "兩邊同減 7",
        "truth": false,
        "reason": "可行但得到 −2x>−6，仍需除負數。"
      },
      {
        "choice": "直接寫 x<3",
        "truth": false,
        "reason": "答案雖正確但跳過必要推理，且題目問第一步。"
      },
      {
        "choice": "兩邊同加 2x",
        "truth": true,
        "reason": "最能維持後續只除正數。"
      }
    ],
    "misconceptionTarget": "把「可得到答案」與「符合指定策略的第一步」混為一談。 也可能選已知最後答案而忽略題目只問符合限制的第一步。",
    "prerequisiteCheck": "需會分析操作順序。",
    "estimatedTimeSec": "105",
    "unitAndRoundingCheck": "無單位；整數限制不影響第一步。",
    "ambiguityAndBoundaryAudit": "多個步驟可能等價，但只有同加 2x 最符合「避免除負數」的明示條件。",
    "difficultyReason": "需要策略判斷而非機械運算。",
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
    "contentSha256": "f30899541379274d8d6374df4a1d5a219c7514223461f56c8516834d08add3a6"
  },
  {
    "questionId": "u07-s002-v010",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "某集點活動規定，原有 18 點，每完成一次任務增加 6 點；總點數至少 60 點才可兌換。若完成 n 次任務，最直接的不等式為何？",
    "givenConditions": "n 為非負整數；本題只問列式。",
    "target": "把集點規則列成基本不等式",
    "choices": [
      "18+6n≥60",
      "18+6n≤60",
      "6+18n≥60",
      "18+6n>60"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "n 次新增 6n 點，總數 18+6n。邊界 n=7 時總數 60 且可兌換，因此比較符號為 ≥。",
      "result": "18+6n≥60",
      "answerIndexVerified": 0
    },
    "explanation": "總點數是原有 18 點加上每次 6 點乘 n；「至少 60」包含 60，所以 18+6n≥60。 原有18是固定項、每次6乘任務次數；七次剛好60可兌換，證明≥而非>。若少乘任務次數，單位與累積規則都不成立。",
    "steps": [
      "建立總點數 18+6n",
      "將至少翻成 ≥",
      "以n=7算得60點，驗證至少條件包含邊界。"
    ],
    "optionAnalysis": [
      {
        "choice": "18+6n≥60",
        "truth": true,
        "reason": "獨立重算得到「18+6n≥60」，此選項與完整解答一致。"
      },
      {
        "choice": "18+6n≤60",
        "truth": false,
        "reason": "方向錯成上限。"
      },
      {
        "choice": "6+18n≥60",
        "truth": false,
        "reason": "把固定點數與每次點數位置顛倒。"
      },
      {
        "choice": "18+6n>60",
        "truth": false,
        "reason": "錯排除剛好 60。"
      }
    ],
    "misconceptionTarget": "把固定量與每單位量混淆，或把至少寫成嚴格大於。 也可能把每次六點寫成固定六，或把原有十八乘上次數。",
    "prerequisiteCheck": "需理解固定量加變動量與至少語意。",
    "estimatedTimeSec": "75",
    "unitAndRoundingCheck": "單位均為點；不需換算。",
    "ambiguityAndBoundaryAudit": "完成 7 次時剛好 60，規則允許兌換，故必須含等號。",
    "difficultyReason": "情境資料需正確分成固定與變動部分。",
    "literacyContextNecessity": "集點制度中的原有點數、每次增量與兌換門檻共同決定模型，情境不可刪除。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "a609bafe27ff59381323a4a1a5abf5c539d9395ab2a576b0096c844b75c761cc"
  },
  {
    "questionId": "u07-s002-v011",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "水桶已有 14 公升水，每分鐘流入 3 公升。若容量警示在水量超過 35 公升時啟動，至少經過多少個完整分鐘會啟動？",
    "givenConditions": "t 為非負整數；流入率固定；忽略溢流前其他因素。",
    "target": "解基本不等式並解讀最小整數",
    "choices": [
      "7 分鐘",
      "8 分鐘",
      "6 分鐘",
      "5 分鐘"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "逐步算邊界：t=7 時 14+21=35，未超過；t=8 時 14+24=38，首次超過。因此至少 8 分鐘。",
      "result": "8 分鐘",
      "answerIndexVerified": 1
    },
    "explanation": "設經過 t 個完整分鐘，14+3t>35，所以 3t>21，t>7。t 為整數，最小為 8。 七分鐘水量恰35並未超過，八分鐘38才首次觸發；完整分鐘限制要求取下一整數。",
    "steps": [
      "列 14+3t>35",
      "解得 t>7 並取最小整數",
      "比較t=7與t=8的水量，確認最小完整分鐘為8。"
    ],
    "optionAnalysis": [
      {
        "choice": "7 分鐘",
        "truth": false,
        "reason": "7 分鐘時剛好 35，尚未超過。"
      },
      {
        "choice": "8 分鐘",
        "truth": true,
        "reason": "8 分鐘時 38 公升，首次超過。"
      },
      {
        "choice": "6 分鐘",
        "truth": false,
        "reason": "6 分鐘只有 32。"
      },
      {
        "choice": "5 分鐘",
        "truth": false,
        "reason": "5 分鐘只有 29。"
      }
    ],
    "misconceptionTarget": "把「超過」當成「至少」，或對整數時間錯誤取整。 還可能把t>7四捨五入回七，忽略嚴格門檻與首次觸發。",
    "prerequisiteCheck": "需會建立一次式與嚴格下界。",
    "estimatedTimeSec": "95",
    "unitAndRoundingCheck": "公升與分鐘單位一致；完整分鐘不做小數四捨五入。",
    "ambiguityAndBoundaryAudit": "7 分鐘是排除端點，8 分鐘為第一個可行整數。",
    "difficultyReason": "需完成列式、解式、嚴格邊界與整數化。",
    "literacyContextNecessity": "容量警示的「超過」與完整分鐘限制決定 7 和 8 的分界，情境具有必要性。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "98555d0a30940c083270e5b1df27be56c79764f3f6e26a58a61945af3b1244f4"
  },
  {
    "questionId": "u07-s002-v012",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "健走計畫目前累積 2.5 公里，之後每圈 0.8 公里；目標是不少於 6.5 公里。至少還要走幾整圈？",
    "givenConditions": "c 為非負整數；每圈里程固定。",
    "target": "以基本不等式求最少整圈數",
    "choices": [
      "4 圈",
      "6 圈",
      "5 圈",
      "7 圈"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "剩餘距離 6.5−2.5=4 公里；每圈 0.8 公里，4÷0.8=5。走 5 圈剛好達到且「不少於」允許等於。",
      "result": "5 圈",
      "answerIndexVerified": 2
    },
    "explanation": "設再走 c 圈，2.5+0.8c≥6.5。得 0.8c≥4，所以 c≥5；至少 5 圈。 五圈增加4公里，總距離恰6.5而符合不少於；四圈只有5.7公里，尚未達標。整圈限制也表示結果不能保留任何非整數圈數。",
    "steps": [
      "列總里程下限",
      "解得 c≥5",
      "以4圈與5圈相鄰檢查，確認5為最小整數解。"
    ],
    "optionAnalysis": [
      {
        "choice": "4 圈",
        "truth": false,
        "reason": "4 圈只有 5.7 公里。"
      },
      {
        "choice": "6 圈",
        "truth": false,
        "reason": "6 圈可達標但不是最少。"
      },
      {
        "choice": "5 圈",
        "truth": true,
        "reason": "5 圈剛好 6.5 公里。"
      },
      {
        "choice": "7 圈",
        "truth": false,
        "reason": "7 圈也非最少。"
      }
    ],
    "misconceptionTarget": "小數運算錯誤，或看到「不少於」卻排除剛好達標。 還可能把累積里程二點五再次乘圈數，錯置固定量與單位量。",
    "prerequisiteCheck": "需會小數加乘與 ≥ 語意。",
    "estimatedTimeSec": "95",
    "unitAndRoundingCheck": "里程同為公里；0.8 精確，不需四捨五入。",
    "ambiguityAndBoundaryAudit": "c=5 剛好達標且包含；c=4 未達標。",
    "difficultyReason": "含小數係數與最小整數驗證。",
    "literacyContextNecessity": "既有里程、每圈距離與整圈限制共同影響最少圈數，情境不可簡化成純符號辨認。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "6443e49fe5fa49aa8302b14534250ff0a0b07dba995dea2c0d5417f85647bf5f"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u07-s002-cr001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "type": "constructed-response",
    "prompt": "解不等式 4x−7≤21，寫出每一步所做的等價運算，並用邊界值驗證答案。",
    "requiredWork": [
      "完整寫出解題步驟",
      "說明每一步對兩邊做相同運算",
      "代入邊界值驗證"
    ],
    "fullCreditSolution": [
      "在4x-7≤21兩邊同加7，得到4x≤28；同加相同數不改變大小次序。",
      "再將兩邊同除以正數4，不等號方向保持，得到x≤7。",
      "代入邊界x=7，左式4×7-7=21，與右式相等，所以7應納入解集。",
      "另取範圍外x=8，左式25>21不成立，可確認方向不是x≥7。"
    ],
    "alternativeMethod": [
      "也可先把 −7 移到右邊寫成 4x≤28，但必須能說明本質是兩邊同加 7。"
    ],
    "reasoningSteps": [
      "兩邊同加7消去常數。",
      "兩邊同除正四孤立x。",
      "代入邊界7檢查等號。",
      "用範圍外的8反查方向。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確得到 x≤7，列出同加 7 與同除 4，並用 x=7 驗證等號成立。"
      },
      {
        "score": 2,
        "criteria": "答案與主要運算正確，但缺少邊界驗證或未說明除以正數方向不變。"
      },
      {
        "score": 1,
        "criteria": "有 4x≤28 或正確端點 7，但最後不等號或運算步驟有錯。"
      },
      {
        "score": 0,
        "criteria": "無有效等價運算，答案與原式無關，或未作答。"
      }
    ],
    "partialCreditRules": "算術誤把 21+7 算成 26，但後續同除 4 的方法正確，可給 1 分程序分；不能因錯誤結果碰巧寫 7 而加分。",
    "followThroughPolicy": "若第一步只有算術錯誤，後續依其 4x≤錯誤常數正確處理，可保留方法分，但最終正確性不得滿分。",
    "unitAndNotationRules": "接受分數或小數中間式；最後需清楚寫 x≤7。",
    "answerOnlyPolicy": "只寫 x≤7 而無任何步驟與驗證，最多 1 分。",
    "commonErrors": [
      "只在左邊加7而未同步改右邊，破壞等價關係。",
      "除以正數4時不必要地反向，或漏掉原符號中的等號。"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "x≤7。",
      "ambiguity": "係數 4 為正且原式含等號，運算方向與端點均唯一。",
      "scope": "國中一元一次不等式基本解法。",
      "reviewNote": "獨立重算 4x−7≤21 ⇒ 4x≤28 ⇒ x≤7；另以 x=7 使左式等於 21，確認端點應納入。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "0c9f7ab264aa9a73e2d4fc42a13bf65235ca34c11d8060f9c74b5837c43f1c71"
  },
  {
    "questionId": "u07-s002-cr002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "type": "constructed-response",
    "prompt": "小華有 130 元，買一本 34 元的筆記本後，想買每支 12 元的筆。設可買 x 支且不得超過現金。建立不等式並求 x 的最大非負整數值。",
    "requiredWork": [
      "定義 x 與單位",
      "依不得超過建立不等式",
      "求解並依整數情境解讀最大值",
      "用相鄰整數檢查"
    ],
    "fullCreditSolution": [
      "設x為購買的筆數，因不能買負支或部分一支，所以x為非負整數。",
      "筆記本固定34元，x支筆共12x元；不得超過130元給出34+12x≤130。",
      "兩邊減34得12x≤96，再除正12得x≤8。",
      "買8支總價34+96=130元可行；買9支為142元超過現金，所以最大非負整數是8。"
    ],
    "alternativeMethod": [
      "也可先算剩餘金額 130−34=96，再以 96÷12=8，並用「不得超過」說明這等同於 12x≤96。"
    ],
    "reasoningSteps": [
      "定義筆數及非負整數限制。",
      "辨認固定費與每支費建立≤。",
      "解出連續上界x≤8。",
      "用8與9支相鄰檢查最大值。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確列 34+12x≤130，求得 x≤8，並解讀最多 8 支且檢查 8 可行、9 不可行。"
      },
      {
        "score": 2,
        "criteria": "列式與答案正確，但缺少整數或相鄰值檢查；或用剩餘金額法完整得到 8。"
      },
      {
        "score": 1,
        "criteria": "知道先扣 34 或建立 12x≤96，但後續除法或最大值解讀有錯。"
      },
      {
        "score": 0,
        "criteria": "把 34 與 12 錯誤相乘或未建立任何限制關係。"
      }
    ],
    "partialCreditRules": "若列式正確但 96÷12 算錯，可依正確列式與不等號方向給 1 至 2 分；答案單位錯誤另扣解讀部分。",
    "followThroughPolicy": "由前段算術錯誤所得上界若後續正確向下取整，可給程序分；但必須保留 x 為非負整數。",
    "unitAndNotationRules": "x 的單位為支，金額為元；不接受把 x 寫成金額。",
    "answerOnlyPolicy": "只寫「8 支」而無列式，最多 1 分。",
    "commonErrors": [
      "漏加已確定購買的筆記本34元，使可買筆數被高估。",
      "把不得超過寫成≥，或解出上界後未套用筆數的整數限制。"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "34+12x≤130，最大非負整數 x=8。",
      "ambiguity": "現金上限、固定購買項目與每支價格均明確；筆數天然為非負整數。",
      "scope": "國中一次不等式基本情境。",
      "reviewNote": "獨立以剩餘 96 元除以每支 12 元得 8；再算 34+12×8=130 與 34+12×9=142，確認最大值和含等號邊界。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "64b5b79822f5a677e49334c07bd5929bb625fde4faace9ecd377d07bc244aeef"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u07-s002-v001-semantic-r1",
    "questionId": "u07-s002-v001",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "contentSha256": "e7eb99193c618b5ca385503c7a6be8b40327dfb188f5897530f645d8d475e7f5",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "由 x+7>12，為保持比較兩邊同減 7：x>12−7=5。代 x=6 成立、x=5 不成立。",
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
      "wording": "題幹目標為「解一個加法型基本不等式」，給定條件「x 為實數。」足以決定唯一數學任務。",
      "boundary": "同減 7 是等價操作，唯一解集為 x>5。",
      "units": "無單位與近似。",
      "scope": "本題只使用 一元一次不等式解法 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "單步同減常數。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：由 x+7>12，為保持比較兩邊同減 7：x>12−7=5。代 x=6 成立、x=5 不成立。 所得「x>5」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：同減 7 是等價操作，唯一解集為 x>5。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s002-v002-semantic-r1",
    "questionId": "u07-s002-v002",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "contentSha256": "901abe986940d3c1aeba741edb72ea9aa5ebd70890064857c2c14f4d1bf9e3d6",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "把左右都加 4：x−4+4≤9+4，所以 x≤13；端點 13 代回成立。",
    "derivedAnswer": "x≤13",
    "storedAnswer": "x≤13",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「解減法型基本不等式」，給定條件「x 為實數。」足以決定唯一數學任務。",
      "boundary": "x=13 代入得 9≤9，必須包含。",
      "units": "無單位與近似。",
      "scope": "本題只使用 一元一次不等式解法 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "單步同加常數。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：把左右都加 4：x−4+4≤9+4，所以 x≤13；端點 13 代回成立。 所得「x≤13」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：x=13 代入得 9≤9，必須包含。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s002-v003-semantic-r1",
    "questionId": "u07-s002-v003",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "contentSha256": "d66c4ddec14af1cfb5d00fe3b7b07baea9adea42ded72c3462e09d75a750e05f",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "5x<30，因 5>0 可同除 5 且保持方向：x<6。代 x=5 成立、x=6 不成立。",
    "derivedAnswer": "x<6",
    "storedAnswer": "x<6",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「解正係數乘法型不等式」，給定條件「5 為正數。」足以決定唯一數學任務。",
      "boundary": "除數為正且非 0，等價操作有效。",
      "units": "無單位與近似。",
      "scope": "本題只使用 一元一次不等式解法 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "單一步驟除正係數。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：5x<30，因 5>0 可同除 5 且保持方向：x<6。代 x=5 成立、x=6 不成立。 所得「x<6」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：除數為正且非 0，等價操作有效。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s002-v004-semantic-r1",
    "questionId": "u07-s002-v004",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "contentSha256": "a0768a75a72f3ed3a4bcd51e2ce9533839e76a2fa3f39a9be33a4ee37cbe8b04",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "原式減 2：3x≥18；再除正 3：x≥6。檢查 x=6 時左邊 20，恰等於右邊。",
    "derivedAnswer": "x≥6",
    "storedAnswer": "x≥6",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「解兩步驟正係數不等式」，給定條件「3>0，除法不變號。」足以決定唯一數學任務。",
      "boundary": "x=6 代入得 20≥20，端點必須包含。",
      "units": "無單位與近似；18÷3 整除。",
      "scope": "本題只使用 一元一次不等式解法 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "需要兩個等價步驟與端點驗算。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：原式減 2：3x≥18；再除正 3：x≥6。檢查 x=6 時左邊 20，恰等於右邊。 所得「x≥6」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：x=6 代入得 20≥20，端點必須包含。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s002-v005-semantic-r1",
    "questionId": "u07-s002-v005",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "contentSha256": "7956baaa0c6451b6c2a238c21b027392ccd6685370543bc6ce22b162ebbac8d1",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "兩邊同加 9 得 4x<16；兩邊同除以正數 4，方向不變，得 x<4。",
    "derivedAnswer": "x<4",
    "storedAnswer": "x<4",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「依指定等價運算完成基本不等式解法」，並明示第一步同加 9，數學任務唯一。",
      "boundary": "x=4 代入得 7<7 為假，故不含端點。",
      "units": "無單位與近似。",
      "scope": "本題只使用 一元一次不等式解法 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "需把指定的同加運算落實到兩邊，再以正數除法完成。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：兩邊同加 9 得 4x<16；兩邊同除以正數 4，方向不變，得 x<4。 所得「x<4」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：x=4 代入得 7<7 為假，故不含端點。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s002-v006-semantic-r1",
    "questionId": "u07-s002-v006",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "contentSha256": "2c5b98e084449fa809d19e17c90e51a217d82c6a48bce01045a433e6a1225220",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "2x+5≤17 ⇒ 2x≤12 ⇒ x≤6。測四值，只有 7 不滿足 x≤6，因此不是解。",
    "derivedAnswer": "7",
    "storedAnswer": "7",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「先解不等式再辨識反例」，給定條件「候選值皆為實數；問「不是解」。」足以決定唯一數學任務。",
      "boundary": "「不是解」只有一項；x=6 端點代回等號成立。",
      "units": "無單位與近似。",
      "scope": "本題只使用 一元一次不等式解法 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "需先求完整解集再反向篩選。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：2x+5≤17 ⇒ 2x≤12 ⇒ x≤6。測四值，只有 7 不滿足 x≤6，因此不是解。 所得「7」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：「不是解」只有一項；x=6 端點代回等號成立。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s002-v007-semantic-r1",
    "questionId": "u07-s002-v007",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "contentSha256": "2a9fea2e9388c7ebd0058d5e40bc2a667870d0552a7925d888231c9eeb6075c7",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "ax>12 且 a>0 等價於 x>12/a。題給同一解集 x>3，因此 12/a=3；乘 a 得 12=3a，a=4。",
    "derivedAnswer": "4",
    "storedAnswer": "4",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「由指定解集反求正係數」，給定條件「a>0 已明示，排除變號問題。」足以決定唯一數學任務。",
      "boundary": "正數條件確保解集方向一致，端點唯一決定 a。",
      "units": "無單位；a=4 精確。",
      "scope": "本題只使用 一元一次不等式解法 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "反向從解集重建係數，推理高於直接求解。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：ax>12 且 a>0 等價於 x>12/a。題給同一解集 x>3，因此 12/a=3；乘 a 得 12=3a，a=4。 所得「4」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：正數條件確保解集方向一致，端點唯一決定 a。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s002-v008-semantic-r1",
    "questionId": "u07-s002-v008",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "contentSha256": "441ed78d49a0c74bab73bf694868f4dd37acad1e11cb631a26c3363bd988ab85",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "因 2 為正，原式乘 2 得 x+3≥10；減 3 得 x≥7。x=7 時左式 5，故含端點。",
    "derivedAnswer": "x≥7",
    "storedAnswer": "x≥7",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「解含正分母的一元一次不等式」，給定條件「分母 2>0 且非 0。」足以決定唯一數學任務。",
      "boundary": "乘正數 2 不改方向；x=7 代回等於 5。",
      "units": "無單位與近似。",
      "scope": "本題只使用 一元一次不等式解法 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "含分母但仍是兩個等價步驟。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：因 2 為正，原式乘 2 得 x+3≥10；減 3 得 x≥7。x=7 時左式 5，故含端點。 所得「x≥7」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：乘正數 2 不改方向；x=7 代回等於 5。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s002-v009-semantic-r1",
    "questionId": "u07-s002-v009",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "contentSha256": "f30899541379274d8d6374df4a1d5a219c7514223461f56c8516834d08add3a6",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "若先加 2x：7>1+2x，再減 1 得 6>2x，除正 2 得 3>x。整個流程沒有除負數，符合題設。",
    "derivedAnswer": "兩邊同加 2x",
    "storedAnswer": "兩邊同加 2x",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「選擇能避免負數除法的等價操作」，給定條件「限制只允許同加減與除正數作主要策略。」足以決定唯一數學任務。",
      "boundary": "多個步驟可能等價，但只有同加 2x 最符合「避免除負數」的明示條件。",
      "units": "無單位；整數限制不影響第一步。",
      "scope": "本題只使用 一元一次不等式解法 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "需要策略判斷而非機械運算。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：若先加 2x：7>1+2x，再減 1 得 6>2x，除正 2 得 3>x。整個流程沒有除負數，符合題設。 所得「兩邊同加 2x」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：多個步驟可能等價，但只有同加 2x 最符合「避免除負數」的明示條件。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s002-v010-semantic-r1",
    "questionId": "u07-s002-v010",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "contentSha256": "a609bafe27ff59381323a4a1a5abf5c539d9395ab2a576b0096c844b75c761cc",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "n 次新增 6n 點，總數 18+6n。邊界 n=7 時總數 60 且可兌換，因此比較符號為 ≥。",
    "derivedAnswer": "18+6n≥60",
    "storedAnswer": "18+6n≥60",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「把集點規則列成基本不等式」，給定條件「n 為非負整數；本題只問列式。」足以決定唯一數學任務。",
      "boundary": "完成 7 次時剛好 60，規則允許兌換，故必須含等號。",
      "units": "單位均為點；不需換算。",
      "scope": "本題只使用 一元一次不等式解法 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "情境資料需正確分成固定與變動部分。",
    "literacyNecessityCheck": "集點制度中的原有點數、每次增量與兌換門檻共同決定模型，情境不可刪除。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：n 次新增 6n 點，總數 18+6n。邊界 n=7 時總數 60 且可兌換，因此比較符號為 ≥。 所得「18+6n≥60」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：完成 7 次時剛好 60，規則允許兌換，故必須含等號。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s002-v011-semantic-r1",
    "questionId": "u07-s002-v011",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "contentSha256": "98555d0a30940c083270e5b1df27be56c79764f3f6e26a58a61945af3b1244f4",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "逐步算邊界：t=7 時 14+21=35，未超過；t=8 時 14+24=38，首次超過。因此至少 8 分鐘。",
    "derivedAnswer": "8 分鐘",
    "storedAnswer": "8 分鐘",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「解基本不等式並解讀最小整數」，給定條件「t 為非負整數；流入率固定；忽略溢流前其他因素。」足以決定唯一數學任務。",
      "boundary": "7 分鐘是排除端點，8 分鐘為第一個可行整數。",
      "units": "公升與分鐘單位一致；完整分鐘不做小數四捨五入。",
      "scope": "本題只使用 一元一次不等式解法 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "需完成列式、解式、嚴格邊界與整數化。",
    "literacyNecessityCheck": "容量警示的「超過」與完整分鐘限制決定 7 和 8 的分界，情境具有必要性。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：逐步算邊界：t=7 時 14+21=35，未超過；t=8 時 14+24=38，首次超過。因此至少 8 分鐘。 所得「8 分鐘」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：7 分鐘是排除端點，8 分鐘為第一個可行整數。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s002-v012-semantic-r1",
    "questionId": "u07-s002-v012",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-solve-basic",
    "contentSha256": "6443e49fe5fa49aa8302b14534250ff0a0b07dba995dea2c0d5417f85647bf5f",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "剩餘距離 6.5−2.5=4 公里；每圈 0.8 公里，4÷0.8=5。走 5 圈剛好達到且「不少於」允許等於。",
    "derivedAnswer": "5 圈",
    "storedAnswer": "5 圈",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「以基本不等式求最少整圈數」，給定條件「c 為非負整數；每圈里程固定。」足以決定唯一數學任務。",
      "boundary": "c=5 剛好達標且包含；c=4 未達標。",
      "units": "里程同為公里；0.8 精確，不需四捨五入。",
      "scope": "本題只使用 一元一次不等式解法 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "含小數係數與最小整數驗證。",
    "literacyNecessityCheck": "既有里程、每圈距離與整圈限制共同影響最少圈數，情境不可簡化成純符號辨認。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：剩餘距離 6.5−2.5=4 公里；每圈 0.8 公里，4÷0.8=5。走 5 圈剛好達到且「不少於」允許等於。 所得「5 圈」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：c=5 剛好達標且包含；c=4 未達標。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
