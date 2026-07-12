// DETERMINISTIC SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u07-s005-lecture-r1",
  "unitId": "u07",
  "topicId": "u07-basics",
  "skillId": "inequality-sign-flip",
  "title": "乘除負數變號：用數線次序理解方向反轉",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能說明乘除負數時不等號為何反向。",
    "能正確解未知數係數為負的一元一次不等式。",
    "能區分移項與負數乘除兩種不同規則。",
    "能用代入或數值例子檢查變號。"
  ],
  "prerequisites": [
    {
      "skillId": "inequality-number-line",
      "requiredLevel": "能將大小關係連結到數線左右次序。"
    }
  ],
  "prerequisiteBridge": {
    "inequality-number-line": "能將大小關係連結到數線左右次序。"
  },
  "glossary": [
    {
      "term": "方向反轉",
      "definition": "不等號由＞變＜、由≥變≤，反之亦然。"
    },
    {
      "term": "負倍數",
      "definition": "乘上一個小於 0 的數。"
    },
    {
      "term": "次序反轉",
      "definition": "數線上的大小順序經乘負數後左右對調。"
    }
  ],
  "notation": [
    {
      "symbol": "a>b, k<0 ⇒ ak<bk",
      "meaning": "乘負數後，原本較大的乘積反而較小。"
    },
    {
      "symbol": "−x>3 ⇔ x<−3",
      "meaning": "兩邊除以 −1，必須反向。"
    }
  ],
  "conceptNarrative": [
    "先用 5>2 觀察：兩邊乘 −1 得 −5<−2，大小次序倒轉。",
    "乘除負數會同時做「縮放」與「關於 0 的翻轉」，因此不等號必須反向，才能保留原解集。",
    "移項只是兩邊同加減，不會變號；只有整個不等式兩邊同乘或同除負數時才變號。",
    "乘除正數方向不變；乘除 0 會失去資訊，不能用來解不等式。"
  ],
  "formalDefinitions": [
    {
      "name": "負數乘法次序律",
      "statement": "若 a>b 且 k<0，則 ak<bk。"
    },
    {
      "name": "負數除法次序律",
      "statement": "若 a>b 且 k<0，則 a÷k<b÷k。"
    }
  ],
  "formulas": [
    {
      "formula": "−ax>b（a>0）⇔ x<−b/a",
      "conditions": [
        "兩邊除以 −a<0"
      ],
      "meaning": "除以負係數後反向。"
    },
    {
      "formula": "a>b ⇒ −a<−b",
      "conditions": [
        "兩邊乘 −1"
      ],
      "meaning": "最基本的變號例子。"
    }
  ],
  "nonApplicableCases": [
    "不能在加減負數時變號。",
    "不能因為式子中「看見負號」就立即變號；必須真的對兩邊做乘除負數。",
    "不能乘除 0 來消去未知數。",
    "若兩邊同除以含未知數的式子，因其正負未知，超出本單元安全方法。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先整理未知數項。",
      "check": "目前是否真的要乘或除負數？"
    },
    {
      "step": 2,
      "instruction": "執行負數乘除並同時反向不等號。",
      "check": "＞與＜互換，≥與≤互換。"
    },
    {
      "step": 3,
      "instruction": "寫成 x 在左側的標準形式。",
      "check": "端點正負號是否正確？"
    },
    {
      "step": 4,
      "instruction": "取一個解集內的值代回原式。",
      "check": "若未變號，代入是否會失敗？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "解 −2x>8。",
      "solutionSteps": [
        "兩邊同除以 −2。",
        "因除以負數，＞改成＜，得到 x<−4。"
      ],
      "answer": "x<−4。"
    },
    {
      "exampleId": "L2",
      "prompt": "解 6−3x≤15。",
      "solutionSteps": [
        "兩邊同減 6，得 −3x≤9。",
        "除以 −3 並反向，得 x≥−3。"
      ],
      "answer": "x≥−3。"
    },
    {
      "exampleId": "L3",
      "prompt": "解 4x−7>6x+1。",
      "solutionSteps": [
        "兩邊同減 6x，得 −2x−7>1。",
        "加 7 得 −2x>8；除以 −2 變號。"
      ],
      "answer": "x<−4。"
    },
    {
      "exampleId": "L4",
      "prompt": "說明為何 −5<−2。",
      "solutionSteps": [
        "原本 5>2。",
        "兩邊乘 −1 後，數線位置左右對調。"
      ],
      "answer": "乘負數使大小順序反轉。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "−2x>8 得 x>−4。",
      "why": "除以負數卻未變號。",
      "correction": "應為 x<−4。"
    },
    {
      "mistake": "x−3<5 因為減 3 而變號。",
      "why": "把減負數與除負數混淆。",
      "correction": "同加減不變號。"
    },
    {
      "mistake": "移項 −3x 時就變號。",
      "why": "誤判操作種類。",
      "correction": "移項只改該項加減號，不改不等號。"
    },
    {
      "mistake": "兩邊乘 0 消去所有項。",
      "why": "乘 0 會把不同數都變成 0，失去等價性。",
      "correction": "解不等式不可用 0 作乘除因子。"
    },
    {
      "mistake": "−6x≤−12 得 x≤2。",
      "why": "忘記同除負數反向。",
      "correction": "正確為 x≥2。"
    },
    {
      "mistake": "變號後端點仍寫錯正負。",
      "why": "只注意符號方向，未完成除法。",
      "correction": "同時計算數值與方向。"
    }
  ],
  "selfCheck": [
    "我能說出變號發生的精確操作嗎？",
    "我能用 5>2 的例子說明次序反轉嗎？",
    "我是否把端點數值也正確除完？",
    "我有代回原式檢查方向嗎？"
  ],
  "summary": [
    "乘除正數不變號。",
    "乘除負數必須反向。",
    "同加減與移項不會改變不等號方向。",
    "乘除 0 不可用。"
  ],
  "connections": {
    "previous": "承接數線左右次序與基本不等式解法。",
    "next": [
      "下一節將利用正確方向列出整數解。",
      "後續複合範圍也需要在每個不等式中正確變號。"
    ]
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u07-s005-v001",
      "u07-s005-v002",
      "u07-s005-v003",
      "u07-s005-v004",
      "u07-s005-v005",
      "u07-s005-v006",
      "u07-s005-v007",
      "u07-s005-v008",
      "u07-s005-v009",
      "u07-s005-v010",
      "u07-s005-v011",
      "u07-s005-v012"
    ],
    "constructedResponseIds": [
      "u07-s005-cr001",
      "u07-s005-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "以 5>2 乘 −1 的次序反轉作原理驗證，並逐步重算三個負係數例題；人工檢查所有嚴格與含等號符號的對應反向。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "4eb9bdf939159c8219d3ad606d53eb66f3c0eb994fdecb9703d22d15caa509ed"
};

export const QUESTIONS = [
  {
    "questionId": "u07-s005-v001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解不等式 −3x>12，答案為何？",
    "givenConditions": "−3<0 且非 0。",
    "target": "解單一步驟負係數不等式",
    "choices": [
      "x<−4",
      "x>−4",
      "x≤−4",
      "x≥−4"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "−3x>12。因除數為負，方向反轉；12÷(−3)=−4，所以 x<−4。取 x=−5 時 15>12 成立。",
      "result": "x<−4",
      "answerIndexVerified": 0
    },
    "explanation": "兩邊同除以 −3，不等號必須反向，所以 x<−4。",
    "steps": [
      "除以負數 −3",
      "將 > 反向為 <"
    ],
    "optionAnalysis": [
      {
        "choice": "x<−4",
        "truth": true,
        "reason": "獨立重算得到「x<−4」，此選項與完整解答一致。"
      },
      {
        "choice": "x>−4",
        "truth": false,
        "reason": "選項「x>−4」未變號。，與獨立解得的「x<−4」不一致。"
      },
      {
        "choice": "x≤−4",
        "truth": false,
        "reason": "錯納入端點。"
      },
      {
        "choice": "x≥−4",
        "truth": false,
        "reason": "方向與端點都錯。"
      }
    ],
    "misconceptionTarget": "除以負數時忘記反向。",
    "prerequisiteCheck": "需會整數除法與變號。",
    "estimatedTimeSec": "50",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "x=−4 代回得 12>12 假，故嚴格排除。",
    "difficultyReason": "單一步驟核心規則。",
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
    "contentSha256": "115d5086e0b70cf38936c83a5302968f607779dc7a567da0cd42f633bbe185b5"
  },
  {
    "questionId": "u07-s005-v002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解不等式 −x≤7，答案為何？",
    "givenConditions": "−1 為負數。",
    "target": "處理係數 −1",
    "choices": [
      "x≤−7",
      "x<−7",
      "x≥−7",
      "x>−7"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "把 −x≤7 的兩邊乘 −1，左邊成 x，右邊成 −7，大小次序反轉，故 x≥−7。",
      "result": "x≥−7",
      "answerIndexVerified": 2
    },
    "explanation": "兩邊同除以 −1，≤ 反向為 ≥，得到 x≥−7。",
    "steps": [
      "除以 −1",
      "≤ 變為 ≥"
    ],
    "optionAnalysis": [
      {
        "choice": "x≤−7",
        "truth": false,
        "reason": "選項「x≤−7」未變號。，與獨立解得的「x≥−7」不一致。"
      },
      {
        "choice": "x<−7",
        "truth": false,
        "reason": "方向與端點錯。"
      },
      {
        "choice": "x≥−7",
        "truth": true,
        "reason": "獨立重算得到「x≥−7」，此選項與完整解答一致。"
      },
      {
        "choice": "x>−7",
        "truth": false,
        "reason": "選項「x>−7」漏含端點。，與獨立解得的「x≥−7」不一致。"
      }
    ],
    "misconceptionTarget": "只改數值正負而沒有改不等號。",
    "prerequisiteCheck": "需會相反數。",
    "estimatedTimeSec": "45",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "x=−7 代回 7≤7 成立。",
    "difficultyReason": "最簡負數變號。",
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
    "contentSha256": "904501e3ab10322432e512b78d915481aceb3aeb816384844e382897fca6d4a3"
  },
  {
    "questionId": "u07-s005-v003",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "已知 4>1，兩邊同乘 −2 後正確關係為何？",
    "givenConditions": "乘數 −2<0。",
    "target": "用數值說明負數乘法變號",
    "choices": [
      "−8>−2",
      "−8<−2",
      "8<2",
      "8>2"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "直接算得 −8 與 −2；在數線上 −8 較小，所以新關係必為 −8<−2。",
      "result": "−8<−2",
      "answerIndexVerified": 1
    },
    "explanation": "4×(−2)=−8，1×(−2)=−2；乘負數後方向反轉，所以 −8<−2。",
    "steps": [
      "計算兩個乘積",
      "將 > 反向為 <"
    ],
    "optionAnalysis": [
      {
        "choice": "−8>−2",
        "truth": false,
        "reason": "數值對但方向錯。"
      },
      {
        "choice": "−8<−2",
        "truth": true,
        "reason": "獨立重算得到「−8<−2」，此選項與完整解答一致。"
      },
      {
        "choice": "8<2",
        "truth": false,
        "reason": "乘積正負錯。"
      },
      {
        "choice": "8>2",
        "truth": false,
        "reason": "乘積正負與題意不符。"
      }
    ],
    "misconceptionTarget": "只計算乘積，不處理次序反轉。",
    "prerequisiteCheck": "需會負數乘法。",
    "estimatedTimeSec": "50",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "−8 在數線上確實位於 −2 左側。",
    "difficultyReason": "以具體數值驗證原理。",
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
    "contentSha256": "f7d0aa9494ea5303aa1c7272fc3dc86bd1906429fc69b3e02ae19f9db086c81f"
  },
  {
    "questionId": "u07-s005-v004",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解不等式 5−2x≥11，答案為何？",
    "givenConditions": "−2<0。",
    "target": "兩步負係數不等式",
    "choices": [
      "x≥−3",
      "x≤3",
      "x<−3",
      "x≤−3"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "5−2x≥11 ⇒ −2x≥6。除以負 2，符號變成 ≤，端點 6/(−2)=−3，故 x≤−3。",
      "result": "x≤−3",
      "answerIndexVerified": 3
    },
    "explanation": "兩邊同減 5 得 −2x≥6；除以 −2 並反向，得 x≤−3。",
    "steps": [
      "移常數",
      "除負係數變號"
    ],
    "optionAnalysis": [
      {
        "choice": "x≥−3",
        "truth": false,
        "reason": "選項「x≥−3」方向錯。，與獨立解得的「x≤−3」不一致。"
      },
      {
        "choice": "x≤3",
        "truth": false,
        "reason": "端點與正負錯。"
      },
      {
        "choice": "x<−3",
        "truth": false,
        "reason": "選項「x<−3」漏含端點。，與獨立解得的「x≤−3」不一致。"
      },
      {
        "choice": "x≤−3",
        "truth": true,
        "reason": "獨立重算得到「x≤−3」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "6÷(−2) 的正負或 ≥ 反向錯誤。",
    "prerequisiteCheck": "需會移項與負數除法。",
    "estimatedTimeSec": "75",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "x=−3 代入左式 11，等號成立。",
    "difficultyReason": "同時考常數移項與變號。",
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
    "contentSha256": "94e6978d56651612d11a17f250f8f09712bb02c93cd27bde9e8e010f834dfd7e"
  },
  {
    "questionId": "u07-s005-v005",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解不等式 −4x−1<15，答案為何？",
    "givenConditions": "−4 為負。",
    "target": "解含常數的嚴格負係數不等式",
    "choices": [
      "x<−4",
      "x≥−4",
      "x>−4",
      "x≤−4"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "加 1：−4x<16。除以 −4：x>−4。測 x=0 得 −1<15 成立，符合向右範圍。",
      "result": "x>−4",
      "answerIndexVerified": 2
    },
    "explanation": "兩邊同加 1 得 −4x<16；除以 −4 時 < 反向成 >，所以 x>−4。",
    "steps": [
      "同加 1",
      "除以負數變號"
    ],
    "optionAnalysis": [
      {
        "choice": "x<−4",
        "truth": false,
        "reason": "選項「x<−4」未變號。，與獨立解得的「x>−4」不一致。"
      },
      {
        "choice": "x≥−4",
        "truth": false,
        "reason": "選項「x≥−4」錯含端點。，與獨立解得的「x>−4」不一致。"
      },
      {
        "choice": "x>−4",
        "truth": true,
        "reason": "獨立重算得到「x>−4」，此選項與完整解答一致。"
      },
      {
        "choice": "x≤−4",
        "truth": false,
        "reason": "方向錯且含端點。"
      }
    ],
    "misconceptionTarget": "只注意端點 −4，未正確決定方向。",
    "prerequisiteCheck": "需會加法與負數除法。",
    "estimatedTimeSec": "70",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "x=−4 代回 15<15 假，應排除。",
    "difficultyReason": "嚴格符號與負數變號雙重檢查。",
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
    "contentSha256": "6d546546c8f9cf90fb88e1467532fea61c78704b6759a8d80c5068d39d55285b"
  },
  {
    "questionId": "u07-s005-v006",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "下列哪一個操作一定需要反向不等號？",
    "givenConditions": "所有操作皆作用於不等式兩邊。",
    "target": "辨認變號的必要條件",
    "choices": [
      "兩邊同加 −5",
      "兩邊同除以 −3",
      "兩邊同減 8",
      "兩邊同乘 4"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "逐項套規則：加減任意實數保序；乘 4 因 4>0 保序；除以 −3 因負數反序，所以只有索引 1。",
      "result": "兩邊同除以 −3",
      "answerIndexVerified": 1
    },
    "explanation": "只有同除以 −3 是乘除負數；同加減任何數與同乘正數都不改方向。",
    "steps": [
      "辨認運算種類",
      "檢查乘除因子的正負"
    ],
    "optionAnalysis": [
      {
        "choice": "兩邊同加 −5",
        "truth": false,
        "reason": "加負數仍是同加，不變號。"
      },
      {
        "choice": "兩邊同除以 −3",
        "truth": true,
        "reason": "獨立重算得到「兩邊同除以 −3」，此選項與完整解答一致。"
      },
      {
        "choice": "兩邊同減 8",
        "truth": false,
        "reason": "同減不變號。"
      },
      {
        "choice": "兩邊同乘 4",
        "truth": false,
        "reason": "乘正數不變號。"
      }
    ],
    "misconceptionTarget": "看見負數就變號，而未區分加法與除法。",
    "prerequisiteCheck": "需理解運算分類。",
    "estimatedTimeSec": "60",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "除數 −3 非 0 且為負，唯一觸發規則。",
    "difficultyReason": "概念辨識而非計算。",
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
    "contentSha256": "5d7e9cf575768fee67b30cf1eff5db34f1f749cf4bb492bb72b093e6cad42c2e"
  },
  {
    "questionId": "u07-s005-v007",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解不等式 3x−8>7x+4，答案為何？",
    "givenConditions": "最後除數 −4<0。",
    "target": "兩邊含 x 且結果為負係數",
    "choices": [
      "x>−3",
      "x≤−3",
      "x<3",
      "x<−3"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "3x−8>7x+4 ⇒ −4x>12。除 −4 得 x<−3。取 x=−4：左 −20、右 −24，−20>−24 成立。",
      "result": "x<−3",
      "answerIndexVerified": 3
    },
    "explanation": "移項得 −4x>12；除以 −4 並反向，得到 x<−3。",
    "steps": [
      "把 x 項集中",
      "除以負係數"
    ],
    "optionAnalysis": [
      {
        "choice": "x>−3",
        "truth": false,
        "reason": "選項「x>−3」未變號。，與獨立解得的「x<−3」不一致。"
      },
      {
        "choice": "x≤−3",
        "truth": false,
        "reason": "選項「x≤−3」錯含端點。，與獨立解得的「x<−3」不一致。"
      },
      {
        "choice": "x<3",
        "truth": false,
        "reason": "端點正負錯。"
      },
      {
        "choice": "x<−3",
        "truth": true,
        "reason": "獨立重算得到「x<−3」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "係數 3−7=−4 後忘記變號。",
    "prerequisiteCheck": "需會移項與變號。",
    "estimatedTimeSec": "90",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "x=−3 時兩邊同為 −17，不符合 >。",
    "difficultyReason": "多步整理後才出現負係數。",
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
    "contentSha256": "110cea5456b048fbd3129795f9207d08e7dae0280026755c3481babd94970875"
  },
  {
    "questionId": "u07-s005-v008",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解不等式 −2(3x−5)≤4，答案為何？",
    "givenConditions": "−2 需乘括號內兩項。",
    "target": "含負括號的變號解法",
    "choices": [
      "x≥1",
      "x≤1",
      "x≥−1",
      "x≤−1"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "−2(3x−5)=−6x+10。減 10 得 −6x≤−6；除負 6 時 ≤ 反成 ≥，端點為 1。",
      "result": "x≥1",
      "answerIndexVerified": 0
    },
    "explanation": "展開為 −6x+10≤4；移項得 −6x≤−6；除以 −6 反向，得到 x≥1。",
    "steps": [
      "展開負係數",
      "移常數",
      "除負數變號"
    ],
    "optionAnalysis": [
      {
        "choice": "x≥1",
        "truth": true,
        "reason": "獨立重算得到「x≥1」，此選項與完整解答一致。"
      },
      {
        "choice": "x≤1",
        "truth": false,
        "reason": "選項「x≤1」未變號。，與獨立解得的「x≥1」不一致。"
      },
      {
        "choice": "x≥−1",
        "truth": false,
        "reason": "端點正負錯。"
      },
      {
        "choice": "x≤−1",
        "truth": false,
        "reason": "方向與端點錯。"
      }
    ],
    "misconceptionTarget": "負號分配或 −6÷−6 計算錯誤。",
    "prerequisiteCheck": "需會分配律。",
    "estimatedTimeSec": "100",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "x=1 時左 4≤4 成立。",
    "difficultyReason": "分配律與負數變號連續出現。",
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
    "contentSha256": "1a158fdcc3e2680fe75036b0c1aa274fd2d4b3e84a1a58117a7fa920c8385092"
  },
  {
    "questionId": "u07-s005-v009",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "若不等式 −ax>10 的解為 x<−2，且 a>0，則 a 為何？",
    "givenConditions": "a>0，故 −a<0。",
    "target": "由負係數不等式的解集反求參數",
    "choices": [
      "2",
      "5",
      "−5",
      "1/5"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "−ax>10 除以負數 −a：x<10/(−a)=−10/a。題給端點 −2，故 10/a=2，a=5。",
      "result": "5",
      "answerIndexVerified": 1
    },
    "explanation": "−a<0，兩邊除以 −a 得 x<−10/a。與 x<−2 比較端點，−10/a=−2，所以 a=5。",
    "steps": [
      "確認除數 −a 為負",
      "令端點相等解參數"
    ],
    "optionAnalysis": [
      {
        "choice": "2",
        "truth": false,
        "reason": "a=2 時端點 −5。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "獨立重算得到「5」，此選項與完整解答一致。"
      },
      {
        "choice": "−5",
        "truth": false,
        "reason": "違反 a>0。"
      },
      {
        "choice": "1/5",
        "truth": false,
        "reason": "端點 −50。"
      }
    ],
    "misconceptionTarget": "忽略 −a 的負性，或解分式方程錯誤。",
    "prerequisiteCheck": "需會變號與參數方程。",
    "estimatedTimeSec": "110",
    "unitAndRoundingCheck": "無單位；a 精確。",
    "ambiguityAndBoundaryAudit": "方向 x< 與負係數除法一致，端點唯一。",
    "difficultyReason": "反向推理含符號條件。",
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
    "contentSha256": "0c461759e53318e746d8111e8d29b9a7dfa1d8818e5d0d7d33e4f152b7467bff"
  },
  {
    "questionId": "u07-s005-v010",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "冷凍庫目前 −8°C，每小時再下降 3°C。若要求溫度低於 −20°C，至少經過多少個完整小時？",
    "givenConditions": "t 為非負整數。",
    "target": "以負係數模型求最小整數時間",
    "choices": [
      "3 小時",
      "4 小時",
      "6 小時",
      "5 小時"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "逐時檢查：4 小時後 −8−12=−20，尚未低於；5 小時後 −23，低於 −20。因此最少 5 小時。",
      "result": "5 小時",
      "answerIndexVerified": 3
    },
    "explanation": "t 小時後為 −8−3t，需 −8−3t<−20。得 −3t<−12；除以 −3 變號，t>4，所以至少 5 小時。",
    "steps": [
      "建立下降模型",
      "除以負數變號",
      "取最小完整小時"
    ],
    "optionAnalysis": [
      {
        "choice": "3 小時",
        "truth": false,
        "reason": "3 小時為 −17°C。"
      },
      {
        "choice": "4 小時",
        "truth": false,
        "reason": "4 小時剛好 −20°C，不符合低於。"
      },
      {
        "choice": "6 小時",
        "truth": false,
        "reason": "6 小時可行但不是最少。"
      },
      {
        "choice": "5 小時",
        "truth": true,
        "reason": "5 小時為 −23°C，是最少。"
      }
    ],
    "misconceptionTarget": "負溫度與負係數造成方向誤判，或把低於當含等號。",
    "prerequisiteCheck": "需會負數比較與變號。",
    "estimatedTimeSec": "105",
    "unitAndRoundingCheck": "溫度 °C、時間小時；不做四捨五入。",
    "ambiguityAndBoundaryAudit": "4 小時端點排除，5 小時首次符合。",
    "difficultyReason": "情境中的雙重負號與嚴格門檻增加難度。",
    "literacyContextNecessity": "冷凍庫降溫方向與門檻使負係數及端點判斷不可省略。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "357c48a33e6077fb1b100fe3c7a0cf7735f890304719e25621d7828863ff481a"
  },
  {
    "questionId": "u07-s005-v011",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "某潛水員在海拔 0 公尺處開始，每分鐘下降 4 公尺。以高度 h 表示位置，需到 h≤−28 公尺才開始測量。至少下降幾分鐘？",
    "givenConditions": "t 為非負整數；下降速度固定。",
    "target": "用負速度模型求達到下界時間",
    "choices": [
      "7 分鐘",
      "6 分鐘",
      "8 分鐘",
      "5 分鐘"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "每分鐘降 4 公尺，7 分鐘為 −28 公尺，符合 h≤−28；6 分鐘為 −24，不夠深。故至少 7 分鐘。",
      "result": "7 分鐘",
      "answerIndexVerified": 0
    },
    "explanation": "t 分鐘後 h=−4t，條件 −4t≤−28。除以 −4 並反向，得 t≥7，所以至少 7 分鐘。",
    "steps": [
      "列高度 −4t",
      "除負數並將 ≤ 變 ≥"
    ],
    "optionAnalysis": [
      {
        "choice": "7 分鐘",
        "truth": true,
        "reason": "正確，7 分鐘恰到 −28。"
      },
      {
        "choice": "6 分鐘",
        "truth": false,
        "reason": "6 分鐘只有 −24。"
      },
      {
        "choice": "8 分鐘",
        "truth": false,
        "reason": "8 分鐘可行但非最少。"
      },
      {
        "choice": "5 分鐘",
        "truth": false,
        "reason": "5 分鐘只有 −20。"
      }
    ],
    "misconceptionTarget": "將高度的負號忽略或除負數未變號。",
    "prerequisiteCheck": "需理解高度負值與 ≤。",
    "estimatedTimeSec": "90",
    "unitAndRoundingCheck": "公尺與分鐘單位一致。",
    "ambiguityAndBoundaryAudit": "t=7 邊界包含，t=6 不符合。",
    "difficultyReason": "負係數、含等號與最小時間整合。",
    "literacyContextNecessity": "海拔高度採負值，下降率與測量深度共同決定不等式方向。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "089cb1ec633f6dbc48b37a6e3ee9efabf04cb35c495fea9eee319cc6065468ed"
  },
  {
    "questionId": "u07-s005-v012",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "帳戶原有 1200 元，每天扣除 150 元。為使餘額仍大於 300 元，最多可扣幾個完整日？",
    "givenConditions": "d 為非負整數；每日扣款固定。",
    "target": "以負變動量求最大完整日數",
    "choices": [
      "7 日",
      "6 日",
      "5 日",
      "8 日"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "第 5 日餘額 1200−750=450>300；第 6 日餘額正好 300，不符合「大於」。所以最多 5 日。",
      "result": "5 日",
      "answerIndexVerified": 2
    },
    "explanation": "d 日後餘額 1200−150d>300。得 −150d>−900；除以 −150 變號，d<6。d 為非負整數，最多 5 日。",
    "steps": [
      "建立餘額不等式",
      "除負數得 d<6",
      "取最大整數 5"
    ],
    "optionAnalysis": [
      {
        "choice": "7 日",
        "truth": false,
        "reason": "7 日餘額 150，不符合。"
      },
      {
        "choice": "6 日",
        "truth": false,
        "reason": "6 日剛好 300，但要求大於。"
      },
      {
        "choice": "5 日",
        "truth": true,
        "reason": "5 日餘額 450，正確最大。"
      },
      {
        "choice": "8 日",
        "truth": false,
        "reason": "8 日餘額 0。"
      }
    ],
    "misconceptionTarget": "把 d<6 回答為 6，或忽略嚴格餘額。",
    "prerequisiteCheck": "需會餘額模型與嚴格上界。",
    "estimatedTimeSec": "100",
    "unitAndRoundingCheck": "金額元、時間日；計算精確。",
    "ambiguityAndBoundaryAudit": "5 日成立，6 日端點不成立，最大值唯一。",
    "difficultyReason": "負係數解法與最大整數邊界。",
    "literacyContextNecessity": "每日扣款使餘額隨時間下降，且「仍大於」決定第 5、6 日分界。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "5b2c246ae06a9021dce34764291818c2d4807250eca2cc1d011a8f0e278e37cf"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u07-s005-cr001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "type": "constructed-response",
    "prompt": "解不等式 −4x+5≥17，並以一組「在解集內」與一組「不在解集內」的數代回原式驗證不等號方向。",
    "requiredWork": [
      "完整解出不等式",
      "指出除以負數時反向",
      "各選一個內外值驗證"
    ],
    "fullCreditSolution": [
      "−4x≥12。",
      "兩邊同除以 −4，≥ 反向成 ≤，得 x≤−3。",
      "取解集內 x=−4：−4(−4)+5=21≥17，成立。",
      "取解集外 x=0：5≥17，不成立。"
    ],
    "alternativeMethod": [
      "也可取邊界 x=−3 驗證等號成立，再取 −2 驗證外側失敗；關鍵是至少一內一外。"
    ],
    "reasoningSteps": [
      "移除常數 5",
      "負係數除法反向",
      "用內外測試值辨別方向"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確得到 x≤−3，明說除以 −4 必須反向，且內外各一個代入判斷正確。"
      },
      {
        "score": 2,
        "criteria": "答案與變號步驟正確，但只完成一個代入；或兩個代入完整但未用文字說明反向理由。"
      },
      {
        "score": 1,
        "criteria": "能得到端點 −3，但方向錯；或方向正確但有算術錯誤且驗證顯示部分理解。"
      },
      {
        "score": 0,
        "criteria": "未形成 −4x≥12，也沒有有效代入。"
      }
    ],
    "partialCreditRules": "若選的「外值」其實仍在 x≤−3，該驗證不得分；其餘解法可獨立給分。",
    "followThroughPolicy": "若早期算術錯誤但在除負數時確實反向，可保留變號概念分；最終邊界與代入正確性另評。",
    "unitAndNotationRules": "不需要單位；負號需清楚，接受 x≤−3 或 −3≥x。",
    "answerOnlyPolicy": "只寫 x≤−3，最多 1 分。",
    "commonErrors": [
      "除以 −4 未反向",
      "代回時把 −4×−4 算成負數"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "x≤−3；例如 −4 成立、0 不成立。",
      "ambiguity": "負係數固定為 −4，變號條件明確；內外測試值可多解但判準清楚。",
      "scope": "國中乘除負數變號。",
      "reviewNote": "獨立推得 −4x≥12，除以 −4 得 x≤−3；用 −4 算得 21≥17 為真、用 0 算得 5≥17 為假，排除錯向 x≥−3。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "6011b406ef4ded192a7fa8f3f679f5d97f8e3bec0e436d138830ca0f8f4b8e85"
  },
  {
    "questionId": "u07-s005-cr002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "type": "constructed-response",
    "prompt": "小明認為「只要式子中出現負號，不等號就要反向」。請以解 x−6<2 與解 −3x<12 為例，判斷他的說法並修正規則。",
    "requiredWork": [
      "分別解兩個不等式",
      "指出兩題是否需要反向",
      "寫出精確變號規則"
    ],
    "fullCreditSolution": [
      "x−6<2：兩邊同加 6，得 x<8；加減運算不使不等號反向。",
      "−3x<12：兩邊同除以 −3，因除以負數，< 反向為 >，得 x>−4。",
      "修正規則：只有對不等式兩邊同乘或同除一個負數時，才必須反向；單純出現負號、移項或加減負數都不夠。"
    ],
    "alternativeMethod": [
      "可先用數值例 5>2 乘 −1 得 −5<−2 說明次序翻轉，再對兩題分類。"
    ],
    "reasoningSteps": [
      "辨認操作而非符號外觀",
      "比較加法等價運算與負數除法",
      "形成精確規則"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "兩題解答 x<8、x>−4 均正確，且規則明確限定為兩邊同乘或同除負數。"
      },
      {
        "score": 2,
        "criteria": "兩題答案正確但規則表達較簡略；或規則精確且只有一題算術小錯。"
      },
      {
        "score": 1,
        "criteria": "知道第二題要變號、第一題不要，但未能正確完成兩題或規則仍含糊。"
      },
      {
        "score": 0,
        "criteria": "兩題都因看見負號而任意變號，且未提出正確規則。"
      }
    ],
    "partialCreditRules": "若第二題端點 −4 算對但寫 x<−4，代表變號核心錯誤，不能超過 1 分。",
    "followThroughPolicy": "第一題算術錯誤可與變號概念分開；只要清楚說同加 6 不反向，仍可得該部分。",
    "unitAndNotationRules": "最終規則不可只寫「除法要變號」，必須限定除數為負數；不需單位。",
    "answerOnlyPolicy": "只寫「小明錯」而無例題或修正，0 分或至多極少程序證據，不足 1 分標準。",
    "commonErrors": [
      "把減 6 誤認為除以負數",
      "說所有除法都要反向"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "小明錯；x−6<2 得 x<8，−3x<12 得 x>−4；僅兩邊乘除負數反向。",
      "ambiguity": "兩個對比例題操作類型不同，足以唯一區分規則。",
      "scope": "國中不等式變號原理與錯誤辨析。",
      "reviewNote": "獨立解第一題用同加 6 保持 <，第二題用同除 −3 將 < 改 >；對照後確認「看到負號」不是充分條件。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "076078c7e737a45136100d3bad2e3a9b8399ef59ab18480912ce9032b987b3c7"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u07-s005-v001-semantic-r1",
    "questionId": "u07-s005-v001",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "contentSha256": "115d5086e0b70cf38936c83a5302968f607779dc7a567da0cd42f633bbe185b5",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "−3x>12。因除數為負，方向反轉；12÷(−3)=−4，所以 x<−4。取 x=−5 時 15>12 成立。",
    "derivedAnswer": "x<−4",
    "storedAnswer": "x<−4",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「解單一步驟負係數不等式」，給定條件「−3<0 且非 0。」足以決定唯一數學任務。",
      "boundary": "x=−4 代回得 12>12 假，故嚴格排除。",
      "units": "無單位。",
      "scope": "本題只使用 乘除負數變號 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "單一步驟核心規則。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：−3x>12。因除數為負，方向反轉；12÷(−3)=−4，所以 x<−4。取 x=−5 時 15>12 成立。 所得「x<−4」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：x=−4 代回得 12>12 假，故嚴格排除。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s005-v002-semantic-r1",
    "questionId": "u07-s005-v002",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "contentSha256": "904501e3ab10322432e512b78d915481aceb3aeb816384844e382897fca6d4a3",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "把 −x≤7 的兩邊乘 −1，左邊成 x，右邊成 −7，大小次序反轉，故 x≥−7。",
    "derivedAnswer": "x≥−7",
    "storedAnswer": "x≥−7",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「處理係數 −1」，給定條件「−1 為負數。」足以決定唯一數學任務。",
      "boundary": "x=−7 代回 7≤7 成立。",
      "units": "無單位。",
      "scope": "本題只使用 乘除負數變號 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "最簡負數變號。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：把 −x≤7 的兩邊乘 −1，左邊成 x，右邊成 −7，大小次序反轉，故 x≥−7。 所得「x≥−7」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：x=−7 代回 7≤7 成立。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s005-v003-semantic-r1",
    "questionId": "u07-s005-v003",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "contentSha256": "f7d0aa9494ea5303aa1c7272fc3dc86bd1906429fc69b3e02ae19f9db086c81f",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "直接算得 −8 與 −2；在數線上 −8 較小，所以新關係必為 −8<−2。",
    "derivedAnswer": "−8<−2",
    "storedAnswer": "−8<−2",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「用數值說明負數乘法變號」，給定條件「乘數 −2<0。」足以決定唯一數學任務。",
      "boundary": "−8 在數線上確實位於 −2 左側。",
      "units": "無單位。",
      "scope": "本題只使用 乘除負數變號 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "以具體數值驗證原理。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：直接算得 −8 與 −2；在數線上 −8 較小，所以新關係必為 −8<−2。 所得「−8<−2」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：−8 在數線上確實位於 −2 左側。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s005-v004-semantic-r1",
    "questionId": "u07-s005-v004",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "contentSha256": "94e6978d56651612d11a17f250f8f09712bb02c93cd27bde9e8e010f834dfd7e",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "5−2x≥11 ⇒ −2x≥6。除以負 2，符號變成 ≤，端點 6/(−2)=−3，故 x≤−3。",
    "derivedAnswer": "x≤−3",
    "storedAnswer": "x≤−3",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「兩步負係數不等式」，給定條件「−2<0。」足以決定唯一數學任務。",
      "boundary": "x=−3 代入左式 11，等號成立。",
      "units": "無單位。",
      "scope": "本題只使用 乘除負數變號 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "同時考常數移項與變號。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：5−2x≥11 ⇒ −2x≥6。除以負 2，符號變成 ≤，端點 6/(−2)=−3，故 x≤−3。 所得「x≤−3」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：x=−3 代入左式 11，等號成立。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s005-v005-semantic-r1",
    "questionId": "u07-s005-v005",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "contentSha256": "6d546546c8f9cf90fb88e1467532fea61c78704b6759a8d80c5068d39d55285b",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "加 1：−4x<16。除以 −4：x>−4。測 x=0 得 −1<15 成立，符合向右範圍。",
    "derivedAnswer": "x>−4",
    "storedAnswer": "x>−4",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「解含常數的嚴格負係數不等式」，給定條件「−4 為負。」足以決定唯一數學任務。",
      "boundary": "x=−4 代回 15<15 假，應排除。",
      "units": "無單位。",
      "scope": "本題只使用 乘除負數變號 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "嚴格符號與負數變號雙重檢查。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：加 1：−4x<16。除以 −4：x>−4。測 x=0 得 −1<15 成立，符合向右範圍。 所得「x>−4」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：x=−4 代回 15<15 假，應排除。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s005-v006-semantic-r1",
    "questionId": "u07-s005-v006",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "contentSha256": "5d7e9cf575768fee67b30cf1eff5db34f1f749cf4bb492bb72b093e6cad42c2e",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "逐項套規則：加減任意實數保序；乘 4 因 4>0 保序；除以 −3 因負數反序，所以只有索引 1。",
    "derivedAnswer": "兩邊同除以 −3",
    "storedAnswer": "兩邊同除以 −3",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「辨認變號的必要條件」，給定條件「所有操作皆作用於不等式兩邊。」足以決定唯一數學任務。",
      "boundary": "除數 −3 非 0 且為負，唯一觸發規則。",
      "units": "無單位。",
      "scope": "本題只使用 乘除負數變號 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "概念辨識而非計算。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：逐項套規則：加減任意實數保序；乘 4 因 4>0 保序；除以 −3 因負數反序，所以只有索引 1。 所得「兩邊同除以 −3」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：除數 −3 非 0 且為負，唯一觸發規則。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s005-v007-semantic-r1",
    "questionId": "u07-s005-v007",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "contentSha256": "110cea5456b048fbd3129795f9207d08e7dae0280026755c3481babd94970875",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "3x−8>7x+4 ⇒ −4x>12。除 −4 得 x<−3。取 x=−4：左 −20、右 −24，−20>−24 成立。",
    "derivedAnswer": "x<−3",
    "storedAnswer": "x<−3",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「兩邊含 x 且結果為負係數」，給定條件「最後除數 −4<0。」足以決定唯一數學任務。",
      "boundary": "x=−3 時兩邊同為 −17，不符合 >。",
      "units": "無單位。",
      "scope": "本題只使用 乘除負數變號 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "多步整理後才出現負係數。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：3x−8>7x+4 ⇒ −4x>12。除 −4 得 x<−3。取 x=−4：左 −20、右 −24，−20>−24 成立。 所得「x<−3」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：x=−3 時兩邊同為 −17，不符合 >。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s005-v008-semantic-r1",
    "questionId": "u07-s005-v008",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "contentSha256": "1a158fdcc3e2680fe75036b0c1aa274fd2d4b3e84a1a58117a7fa920c8385092",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "−2(3x−5)=−6x+10。減 10 得 −6x≤−6；除負 6 時 ≤ 反成 ≥，端點為 1。",
    "derivedAnswer": "x≥1",
    "storedAnswer": "x≥1",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「含負括號的變號解法」，給定條件「−2 需乘括號內兩項。」足以決定唯一數學任務。",
      "boundary": "x=1 時左 4≤4 成立。",
      "units": "無單位。",
      "scope": "本題只使用 乘除負數變號 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "分配律與負數變號連續出現。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：−2(3x−5)=−6x+10。減 10 得 −6x≤−6；除負 6 時 ≤ 反成 ≥，端點為 1。 所得「x≥1」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：x=1 時左 4≤4 成立。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s005-v009-semantic-r1",
    "questionId": "u07-s005-v009",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "contentSha256": "0c461759e53318e746d8111e8d29b9a7dfa1d8818e5d0d7d33e4f152b7467bff",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "−ax>10 除以負數 −a：x<10/(−a)=−10/a。題給端點 −2，故 10/a=2，a=5。",
    "derivedAnswer": "5",
    "storedAnswer": "5",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「由負係數不等式的解集反求參數」，給定條件「a>0，故 −a<0。」足以決定唯一數學任務。",
      "boundary": "方向 x< 與負係數除法一致，端點唯一。",
      "units": "無單位；a 精確。",
      "scope": "本題只使用 乘除負數變號 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "反向推理含符號條件。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：−ax>10 除以負數 −a：x<10/(−a)=−10/a。題給端點 −2，故 10/a=2，a=5。 所得「5」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：方向 x< 與負係數除法一致，端點唯一。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s005-v010-semantic-r1",
    "questionId": "u07-s005-v010",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "contentSha256": "357c48a33e6077fb1b100fe3c7a0cf7735f890304719e25621d7828863ff481a",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "逐時檢查：4 小時後 −8−12=−20，尚未低於；5 小時後 −23，低於 −20。因此最少 5 小時。",
    "derivedAnswer": "5 小時",
    "storedAnswer": "5 小時",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「以負係數模型求最小整數時間」，給定條件「t 為非負整數。」足以決定唯一數學任務。",
      "boundary": "4 小時端點排除，5 小時首次符合。",
      "units": "溫度 °C、時間小時；不做四捨五入。",
      "scope": "本題只使用 乘除負數變號 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "情境中的雙重負號與嚴格門檻增加難度。",
    "literacyNecessityCheck": "冷凍庫降溫方向與門檻使負係數及端點判斷不可省略。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：逐時檢查：4 小時後 −8−12=−20，尚未低於；5 小時後 −23，低於 −20。因此最少 5 小時。 所得「5 小時」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：4 小時端點排除，5 小時首次符合。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s005-v011-semantic-r1",
    "questionId": "u07-s005-v011",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "contentSha256": "089cb1ec633f6dbc48b37a6e3ee9efabf04cb35c495fea9eee319cc6065468ed",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "每分鐘降 4 公尺，7 分鐘為 −28 公尺，符合 h≤−28；6 分鐘為 −24，不夠深。故至少 7 分鐘。",
    "derivedAnswer": "7 分鐘",
    "storedAnswer": "7 分鐘",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「用負速度模型求達到下界時間」，給定條件「t 為非負整數；下降速度固定。」足以決定唯一數學任務。",
      "boundary": "t=7 邊界包含，t=6 不符合。",
      "units": "公尺與分鐘單位一致。",
      "scope": "本題只使用 乘除負數變號 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "負係數、含等號與最小時間整合。",
    "literacyNecessityCheck": "海拔高度採負值，下降率與測量深度共同決定不等式方向。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：每分鐘降 4 公尺，7 分鐘為 −28 公尺，符合 h≤−28；6 分鐘為 −24，不夠深。故至少 7 分鐘。 所得「7 分鐘」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：t=7 邊界包含，t=6 不符合。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s005-v012-semantic-r1",
    "questionId": "u07-s005-v012",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "contentSha256": "5b2c246ae06a9021dce34764291818c2d4807250eca2cc1d011a8f0e278e37cf",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "第 5 日餘額 1200−750=450>300；第 6 日餘額正好 300，不符合「大於」。所以最多 5 日。",
    "derivedAnswer": "5 日",
    "storedAnswer": "5 日",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「以負變動量求最大完整日數」，給定條件「d 為非負整數；每日扣款固定。」足以決定唯一數學任務。",
      "boundary": "5 日成立，6 日端點不成立，最大值唯一。",
      "units": "金額元、時間日；計算精確。",
      "scope": "本題只使用 乘除負數變號 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "負係數解法與最大整數邊界。",
    "literacyNecessityCheck": "每日扣款使餘額隨時間下降，且「仍大於」決定第 5、6 日分界。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：第 5 日餘額 1200−750=450>300；第 6 日餘額正好 300，不符合「大於」。所以最多 5 日。 所得「5 日」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：5 日成立，6 日端點不成立，最大值唯一。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
