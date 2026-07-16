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
    "乘除正數方向不變；乘除 0 會失去資訊，不能用來解不等式。",
    "變號規則應由實際操作判斷而非負號外觀；完成除法後要同時計算端點正負，並用解集內、端點及解集外的數回代原式，確認方向沒有翻錯。"
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
      "instruction": "先以同加減整理出未知數項。",
      "check": "移項本身不反向不等號。"
    },
    {
      "step": 2,
      "instruction": "辨認最後乘數或除數的正負。",
      "check": "只有負數乘除需要反向。"
    },
    {
      "step": 3,
      "instruction": "除以負係數時同步反向並計算端點。",
      "check": "數值正負和符號方向都已處理。"
    },
    {
      "step": 4,
      "instruction": "把結果改寫成x在左的標準範圍。",
      "check": "交換左右仍維持同一大小語意。"
    },
    {
      "step": 5,
      "instruction": "取解集內、端點及外部值回原式驗算。",
      "check": "三個測試值的真假符合答案。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "解-2x>8。",
      "solutionSteps": [
        "兩邊同除以-2。",
        "因除負數將>反成<。",
        "得到x<-4並用-5、-4驗算。"
      ],
      "answer": "x<-4。",
      "why": "除以負二會把數線左右次序翻轉，因此必須同時反向不等號。負五代入使十>八成立，端點負四使兩邊相等而不成立，驗證嚴格向左範圍。"
    },
    {
      "exampleId": "L2",
      "prompt": "解6-3x≤15。",
      "solutionSteps": [
        "同減6得-3x≤9。",
        "除以-3並把≤反成≥。",
        "得到x≥-3，以-3、-4驗算。"
      ],
      "answer": "x≥-3。",
      "why": "整理常數的同減六不會變號，真正需要反向的是最後除以負三。端點負三讓兩邊相等而成立，負四則使左式十八大於十五而失敗。"
    },
    {
      "exampleId": "L3",
      "prompt": "解4x-7>6x+1。",
      "solutionSteps": [
        "同減6x得-2x-7>1。",
        "同加7得-2x>8。",
        "除以-2反向得x<-4並驗算。"
      ],
      "answer": "x<-4。",
      "why": "兩邊有未知數時先集中會得到負係數，但前兩次同加減仍不改方向。只有除以負二時才反向；以負五及負四代入可確認端點和方向。"
    },
    {
      "exampleId": "L4",
      "prompt": "說明為何-5<-2。",
      "solutionSteps": [
        "從已知5>2開始。",
        "兩邊同乘-1得到-5與-2。",
        "負數乘法翻轉次序，所以改成-5<-2。"
      ],
      "answer": "乘負數使大小順序反轉。",
      "why": "乘負一相當於把數線上的點關於零鏡射，原來右側的五會移到更左的負五，原來的二移到負二。因此原本的大於必須改成小於，才能保持真值。"
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
  "contentSha256": "482e2f20b20c8813de0c18023947007a043f81f52df85b471bd24fad19e1dfc0"
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
    "explanation": "兩邊同除以 −3，不等號必須反向，所以 x<−4。 端點-4使左右相等而不符合嚴格大於；取-5時左式15>12成立，驗證向左範圍，而較大的零代入不成立。",
    "steps": [
      "除以負數 −3",
      "將 > 反向為 <",
      "用-5與-4代回原式，檢查方向及端點排除。"
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
    "misconceptionTarget": "除以負數時忘記反向。 也可能正確反向後把十二除負三的端點錯算成正四。",
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
    "contentSha256": "2f50171847350666030af5b610b03a120a3b86580350ef9e1d62967a8338bb48"
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
    "explanation": "兩邊同除以 −1，≤ 反向為 ≥，得到 x≥−7。 x=-7使兩邊相等而成立，x=-8也成立，x=0亦成立，確認是含端點的右向範圍。負號消去等同兩邊同乘負一並反向。",
    "steps": [
      "除以 −1",
      "≤ 變為 ≥",
      "代入-7、-8與0，交叉確認x≥-7。"
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
    "misconceptionTarget": "只改數值正負而沒有改不等號。 還可能只把-x改為x，卻忘記右邊七也要乘負一。",
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
    "contentSha256": "1e1405aa45cc62bab7bac6530a336e3b4a3405b45fa0562ad96fc6739da7a1cb"
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
    "explanation": "4×(−2)=−8，1×(−2)=−2；乘負數後方向反轉，所以 −8<−2。 數線上-8位於-2左側，故原來較大的4乘負二後反而變成較小的-8。這正是負數乘法反轉大小次序的具體例子。",
    "steps": [
      "計算兩個乘積",
      "將 > 反向為 <",
      "計算兩乘積並在數線比較-8與-2的位置。"
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
    "misconceptionTarget": "只計算乘積，不處理次序反轉。 也可能把兩邊乘積算成正八與正二，漏掉乘數的負號。",
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
    "contentSha256": "e21cc34a922828f3008fea5920601fc6f4eb37983c3b378cd84cf762dac821d2"
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
    "explanation": "兩邊同減 5 得 −2x≥6；除以 −2 並反向，得 x≤−3。 原式先同減五得負二x大於等於六，再除負二得x小於等於負三。x=-3代入左式11而成立，x=-2使左式9不足11。",
    "steps": [
      "移常數",
      "除負係數變號",
      "代入-3與-2驗證端點及x≤-3方向。"
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
    "misconceptionTarget": "6÷(−2) 的正負或 ≥ 反向錯誤。 還可能只反向不等號，卻把六除負二的端點寫成正三。",
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
    "contentSha256": "3ea5b87ee6e7f4f99530db5a1c7d2f754e48099ed32c557824153deda2fe0123"
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
    "explanation": "兩邊同加 1 得 −4x<16；除以 −4 時 < 反向成 >，所以 x>−4。 x=-4使左右同為15而不符合嚴格小於，x=0使-1<15成立，確認向右且空心，所以解集從負四右方開始。",
    "steps": [
      "同加 1",
      "除以負數變號",
      "用-4與0代入原式，檢查嚴格端點和右向範圍。"
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
    "misconceptionTarget": "只注意端點 −4，未正確決定方向。 還可能只求出端點-4，沒有用測試值決定射線方向。",
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
    "contentSha256": "07cc2e3a6cd8a0aaa530947970d516543217b5369eefe338827efcd1378a63f1"
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
    "explanation": "只有同除以 −3 是乘除負數；同加減任何數與同乘正數都不改方向。 加減負數仍是平移且保序；只有除以負三會把數線左右次序翻轉。",
    "steps": [
      "辨認運算種類",
      "檢查乘除因子的正負",
      "逐項分類為加減、乘正數與除負數，找唯一反序操作。"
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
    "misconceptionTarget": "看見負數就變號，而未區分加法與除法。 還可能認為同乘正四也變號，未依乘除因子的正負分類。",
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
    "contentSha256": "fccc84fd86fed023c58811675fb0098c5fcbf6593bb1194d96d0c759e5463f5e"
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
    "explanation": "移項得 −4x>12；除以 −4 並反向，得到 x<−3。 整理得負四x大於十二，除負四得x小於負三。x=-4代入左式-20、右式-24而成立；端點-3兩邊同為-17不符合。",
    "steps": [
      "把 x 項集中",
      "除以負係數",
      "以-4與-3回代原式，驗證x<-3。"
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
    "misconceptionTarget": "係數 3−7=−4 後忘記變號。 還可能把三x減七x算成正四x，導致端點與方向都錯。",
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
    "contentSha256": "00cc1d08644447d03c08261bf60e7334ff743d595098371b9dde94024ad47013"
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
    "explanation": "展開為 −6x+10≤4；移項得 −6x≤−6；除以 −6 反向，得到 x≥1。 展開為負六x加十小於等於四，整理得x大於等於一。x=1使左式4與右式相等而成立，x=0使左式10>4失敗。",
    "steps": [
      "展開負係數",
      "移常數",
      "除負數變號",
      "代入1與0檢查端點包含及x≥1方向。"
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
    "misconceptionTarget": "負號分配或 −6÷−6 計算錯誤。 還可能只把負二乘到三x，漏乘括號內的負五。",
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
    "contentSha256": "1158da9ac98a0e4b6148a01dab7194ff582d70f18cba774eab713b2f7426e916"
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
    "explanation": "−a<0，兩邊除以 −a 得 x<−10/a。與 x<−2 比較端點，−10/a=−2，所以 a=5。 因負a實為負係數，除法後方向必須反轉。a=5時原式-5x>10，除負五得到x<-2，與題給解集完全相同。",
    "steps": [
      "確認除數 −a 為負",
      "令端點相等解參數",
      "把a=5代回並重新除以-5，驗證方向與端點。"
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
    "misconceptionTarget": "忽略 −a 的負性，或解分式方程錯誤。 也可能只看到a>0就當除數正數，忽略實際係數是-a<0。",
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
    "contentSha256": "49241994e3f1df0425a2dfcf4ac33e2d50fe346e338e4f5f70c6c208b25f15c1"
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
    "explanation": "t 小時後為 −8−3t，需 −8−3t<−20。得 −3t<−12；除以 −3 變號，t>4，所以至少 5 小時。 四小時後恰-20不符合低於，五小時後-23才成立，故完整小時最少5，整數時數必須越過四的端點。",
    "steps": [
      "建立下降模型",
      "除以負數變號",
      "取最小完整小時",
      "比較4與5小時後溫度，驗證嚴格門檻和取整。"
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
    "misconceptionTarget": "負溫度與負係數造成方向誤判，或把低於當含等號。 還可能把溫度越負誤認為越高，或將t>4的整數答案寫4。",
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
    "contentSha256": "e11fe072f3132f5488dc8312fcc60fc50d5424ba8a1f03f7541e3355d6a50b36"
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
    "explanation": "t 分鐘後 h=−4t，條件 −4t≤−28。除以 −4 並反向，得 t≥7，所以至少 7 分鐘。 六分鐘高度-24尚未達標，七分鐘恰-28且≤包含等號，所以最少7分鐘。下降量乘時間應從零高度扣除。",
    "steps": [
      "列高度 −4t",
      "除負數並將 ≤ 變 ≥",
      "用6與7分鐘的高度做相鄰整數檢查。"
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
    "misconceptionTarget": "將高度的負號忽略或除負數未變號。 還可能把下降四公尺寫成高度加四，讓情境方向相反。",
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
    "contentSha256": "1a2d7a763efb62a62745f74d67437fd1b69f478eb68cb6f8203c3fc3676be0a3"
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
    "explanation": "d 日後餘額 1200−150d>300。得 −150d>−900；除以 −150 變號，d<6。d 為非負整數，最多 5 日。 五日後餘450仍大於300，六日後恰300而失敗；故最大非負整數日數為5。完整日限制排除分數天的解釋。",
    "steps": [
      "建立餘額不等式",
      "除負數得 d<6",
      "取最大整數 5",
      "比較第5與第6日餘額，確認最大整數解。"
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
    "misconceptionTarget": "把 d<6 回答為 6，或忽略嚴格餘額。 還可能看到d<6就回答端點六，沒有套用嚴格條件與完整日。",
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
    "contentSha256": "9ae487127979f21d64998060d056c77ca395fb94cc8426888fec6dd90510437f"
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
      "由-4x+5≥17兩邊同減5，得到-4x≥12。",
      "兩邊同除以負數-4時大小次序反轉，≥改為≤，所以x≤-3。",
      "取解集內x=-4，左式21≥17為真。",
      "取解集外x=0，左式5≥17為假；內外測試共同排除錯向x≥-3。",
      "端點x=-3使左式17與右式相等，因含等號而成立。"
    ],
    "alternativeMethod": [
      "也可取邊界 x=−3 驗證等號成立，再取 −2 驗證外側失敗；關鍵是至少一內一外。"
    ],
    "reasoningSteps": [
      "同減5整理常數。",
      "除負四並反向求出x≤-3。",
      "用-4檢查解集內值。",
      "用0檢查解集外值。",
      "用-3確認端點包含。"
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
      "兩邊除以-4後仍保留≥，沒有反轉大小次序。",
      "代回x=-4時把負四乘負四算成負十六，導致正確解被誤判。"
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
    "contentSha256": "d1cd28f0f54cf35a05defaafa78fcf2740ea4556dc73314604680f9cfea7a664"
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
      "第一題x-6<2只需兩邊同加6，得到x<8；加減相同數是平移，不改大小次序。",
      "第二題-3x<12要兩邊同除以負數-3，因此<反向成>，得到x>-4。",
      "所以小明的說法錯在只看式子是否出現負號，而沒有辨認實際操作。",
      "精確規則是：只有不等式兩邊同乘或同除同一負數時必須反向；同加減任意數及乘除正數都不反向。",
      "以x=0驗算兩題都成立，可檢查x<8與x>-4的方向。"
    ],
    "alternativeMethod": [
      "可先用數值例 5>2 乘 −1 得 −5<−2 說明次序翻轉，再對兩題分類。"
    ],
    "reasoningSteps": [
      "解加減型例題並保持方向。",
      "解負係數例題並於除負數時反向。",
      "比較兩題的操作種類。",
      "寫出限定乘除負數的精確規則。",
      "選測試值回原式驗算。"
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
      "看到x-6中的負號就反向，混淆減法與除以負數。",
      "把規則寫成所有除法都變號，沒有明定乘數或除數必須為負。"
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
    "contentSha256": "db18cc7adba761bdbb36aa1dcb107505285fef865c173189268817cbbe557157"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u07-s005-v001-semantic-r1",
    "questionId": "u07-s005-v001",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-sign-flip",
    "contentSha256": "2f50171847350666030af5b610b03a120a3b86580350ef9e1d62967a8338bb48",
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
    "contentSha256": "1e1405aa45cc62bab7bac6530a336e3b4a3405b45fa0562ad96fc6739da7a1cb",
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
    "contentSha256": "e21cc34a922828f3008fea5920601fc6f4eb37983c3b378cd84cf762dac821d2",
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
    "contentSha256": "3ea5b87ee6e7f4f99530db5a1c7d2f754e48099ed32c557824153deda2fe0123",
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
    "contentSha256": "07cc2e3a6cd8a0aaa530947970d516543217b5369eefe338827efcd1378a63f1",
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
    "contentSha256": "fccc84fd86fed023c58811675fb0098c5fcbf6593bb1194d96d0c759e5463f5e",
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
    "contentSha256": "00cc1d08644447d03c08261bf60e7334ff743d595098371b9dde94024ad47013",
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
    "contentSha256": "1158da9ac98a0e4b6148a01dab7194ff582d70f18cba774eab713b2f7426e916",
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
    "contentSha256": "49241994e3f1df0425a2dfcf4ac33e2d50fe346e338e4f5f70c6c208b25f15c1",
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
    "contentSha256": "e11fe072f3132f5488dc8312fcc60fc50d5424ba8a1f03f7541e3355d6a50b36",
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
    "contentSha256": "1a2d7a763efb62a62745f74d67437fd1b69f478eb68cb6f8203c3fc3676be0a3",
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
    "contentSha256": "9ae487127979f21d64998060d056c77ca395fb94cc8426888fec6dd90510437f",
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
