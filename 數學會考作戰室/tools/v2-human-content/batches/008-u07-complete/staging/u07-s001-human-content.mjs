// DETERMINISTIC SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u07-s001-lecture-r1",
  "unitId": "u07",
  "topicId": "u07-basics",
  "skillId": "inequality-symbol",
  "title": "不等號與數線：把大小關係讀成方向和端點",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能分辨＞、＜、≥、≤的讀法與方向。",
    "能判斷某數是否符合不等式。",
    "能把單一不等式畫在數線上，正確選用空心點或實心點。",
    "能由數線反寫不等式。"
  ],
  "prerequisites": [],
  "prerequisiteBridge": {},
  "glossary": [
    {
      "term": "不等式",
      "definition": "用不等號表示兩個數量大小關係的式子。"
    },
    {
      "term": "解",
      "definition": "代入後使不等式成立的數。"
    },
    {
      "term": "解集",
      "definition": "所有符合不等式的數所組成的集合。"
    },
    {
      "term": "端點",
      "definition": "數線上決定範圍起點或終點的數。"
    }
  ],
  "notation": [
    {
      "symbol": "a>b",
      "meaning": "a 大於 b。開口朝向較大的 a。"
    },
    {
      "symbol": "a<b",
      "meaning": "a 小於 b。尖端指向較小的 a。"
    },
    {
      "symbol": "a≥b",
      "meaning": "a 大於或等於 b，包含相等。"
    },
    {
      "symbol": "a≤b",
      "meaning": "a 小於或等於 b，包含相等。"
    },
    {
      "symbol": "○ / ●",
      "meaning": "空心點不包含端點，實心點包含端點。"
    }
  ],
  "conceptNarrative": [
    "不等號不是箭頭；判讀時看開口朝大數、尖端朝小數。",
    "數線越往右數值越大，因此 x>2 的解在 2 的右側。",
    "嚴格不等號＞或＜不包含端點，使用空心點；含等號的≥或≤包含端點，使用實心點。",
    "檢驗一個數是否為解，要把它代入原不等式，而不是只看它離端點多遠。",
    "讀圖與畫圖都應用端點值、端點是否包含及左右方向三項資訊交叉檢查；通用圖例只能教規則，不能替代特定題目的數值與解集。"
  ],
  "formalDefinitions": [
    {
      "name": "不等式的解",
      "statement": "若把某數代入未知數後，左右兩邊的大小關係為真，該數就是不等式的解。"
    },
    {
      "name": "單邊解集",
      "statement": "x>a 表示所有在 a 右側且不含 a 的數；x≤a 表示所有在 a 左側且包含 a 的數。"
    }
  ],
  "formulas": [
    {
      "formula": "x>a ⇔ 數線上 a 的右側且不含 a",
      "conditions": [
        "a 為實數",
        "不等號未經其他運算改變"
      ],
      "meaning": "由符號判斷方向與端點。"
    },
    {
      "formula": "x≤a ⇔ 數線上 a 的左側且包含 a",
      "conditions": [
        "a 為實數"
      ],
      "meaning": "含等號時端點也屬於解集。"
    }
  ],
  "nonApplicableCases": [
    "題目若只問單一數是否為解，不必把整個解集畫出。",
    "圖形若未標刻度或方向，不能靠距離猜端點值。",
    "x≠a 不是本單元的單一半直線型不等式，不能只畫一個方向。",
    "不等號兩邊若尚有式子，需先解出 x 的範圍再畫。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先把不等式完整讀成中文大小關係。",
      "check": "沒有把符號外觀當作箭頭。"
    },
    {
      "step": 2,
      "instruction": "找出端點並判斷等號是否使端點成立。",
      "check": "嚴格符號空心、含等號符號實心。"
    },
    {
      "step": 3,
      "instruction": "依標準數線左小右大決定射線方向。",
      "check": "大於向右、小於向左。"
    },
    {
      "step": 4,
      "instruction": "由圖反寫時先讀方向，再讀空心或實心。",
      "check": "端點數值取自標籤而非圖面位置。"
    },
    {
      "step": 5,
      "instruction": "用端點、範圍內與範圍外各一值代入驗算。",
      "check": "代入真假與數線標示一致。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "判斷5是否為x>3的解。",
      "solutionSteps": [
        "把x=5代入原式。",
        "得到5>3為真。",
        "再確認5位於端點3右側。"
      ],
      "answer": "5是解。",
      "why": "是否為解必須以代入後的真假判斷，不能只看數字是不是正數。五大於三為真，而且五在標準數線的端點三右側，代數與圖形兩種證據一致。"
    },
    {
      "exampleId": "L2",
      "prompt": "將x≤-2畫在數線上。",
      "solutionSteps": [
        "以-2作端點。",
        "因含等號畫實心點。",
        "小於或等於的數向左延伸。"
      ],
      "answer": "在-2畫實心點，向左畫射線。",
      "why": "符號≤同時提供兩項資訊：等號使-2本身成立，所以端點實心；小於使解位於-2左側。端點是負數不會改變標準數線左小右大的方向。"
    },
    {
      "exampleId": "L3",
      "prompt": "數線在4畫空心點並向右延伸，寫出不等式。",
      "solutionSteps": [
        "向右表示x比4大。",
        "空心表示4本身排除。",
        "寫成x>4並用5、4驗算。"
      ],
      "answer": "x>4。",
      "why": "射線方向先給出大於，端點空心再排除等號，因此只能是嚴格大於。代入右側的五為真、端點四為假，可排除x≥4與向左的兩種誤讀。"
    },
    {
      "exampleId": "L4",
      "prompt": "找出-1、0、2中符合x≥0的數。",
      "solutionSteps": [
        "逐一代入三個候選數。",
        "-1≥0為假，0≥0與2≥0為真。",
        "確認端點0因等號而包含。"
      ],
      "answer": "0、2。",
      "why": "逐項代入能同時檢查負數大小與端點包含性。零恰好等於端點，因≥含等號而成立；二在右側也成立，負一在左側則不符合。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把 x<2 畫向右。",
      "why": "把不等號當成箭頭。",
      "correction": "先讀成「x 小於 2」，較小的數在左側。"
    },
    {
      "mistake": "x≥3 的端點畫空心。",
      "why": "忽略等號。",
      "correction": "≥ 包含 3，應畫實心點。"
    },
    {
      "mistake": "認為 x>3 只包含整數 4、5、6。",
      "why": "把解集誤限為整數。",
      "correction": "若題目未限定，3.1、π 等大於 3 的數也屬於解。"
    },
    {
      "mistake": "檢驗時只看答案是否正數。",
      "why": "沒有依原端點比較。",
      "correction": "必須將候選數代入原不等式。"
    },
    {
      "mistake": "由圖形長短判斷數值範圍。",
      "why": "忽略數線射線可無限延伸。",
      "correction": "看箭頭方向與刻度標示。"
    },
    {
      "mistake": "把 2<x 寫成 x<2。",
      "why": "交換兩邊時未保持同一大小關係。",
      "correction": "2<x 等價於 x>2。"
    }
  ],
  "selfCheck": [
    "我能用完整中文讀出四種不等號嗎？",
    "我能說明空心點與實心點的差別嗎？",
    "我能由「大於」判斷向右嗎？",
    "我有用代入檢查候選數嗎？"
  ],
  "summary": [
    "不等號開口朝大數，尖端朝小數。",
    "數線向右越大、向左越小。",
    "＞與＜不含端點；≥與≤包含端點。",
    "解集通常包含無限多個數，除非另有限制。"
  ],
  "connections": {
    "previous": "本節是 U07 起點，銜接 U01 的數線與數的大小比較。",
    "next": [
      "下一節會用等量觀念解出一元一次不等式。",
      "之後會把解集轉成整數解與情境限制。"
    ]
  },
  "figureReferences": [
    "u07-fig-symbol-number-line"
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u07-s001-v001",
      "u07-s001-v002",
      "u07-s001-v003",
      "u07-s001-v004",
      "u07-s001-v005",
      "u07-s001-v006",
      "u07-s001-v007",
      "u07-s001-v008",
      "u07-s001-v009",
      "u07-s001-v010",
      "u07-s001-v011",
      "u07-s001-v012"
    ],
    "constructedResponseIds": [
      "u07-s001-cr001",
      "u07-s001-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐項核對四種不等號、端點包含性與左右方向；四個例題分別以代入、畫圖、讀圖和列舉驗證，未使用尚未介紹的移項或負數變號。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "03adf586f22d029db6062c33fb5c01bc2febd9cf98a1f89133e12839435e3e89"
};

export const QUESTIONS = [
  {
    "questionId": "u07-s001-v001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "下列哪一個不等式讀作「x 大於或等於 −3」？",
    "givenConditions": "x 為實數；比較基準為 −3。",
    "target": "辨認四種不等號的中文語意",
    "choices": [
      "x≥−3",
      "x>−3",
      "x≤−3",
      "x<−3"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "測試邊界 x=−3：原句應成立，所以必須含等號；再測 x=0：也應成立，所以方向為大於。只有 x≥−3 同時通過。",
      "result": "x≥−3",
      "answerIndexVerified": 0
    },
    "explanation": "「大於或等於」同時包含比 −3 大以及等於 −3，因此符號是 ≥，寫成 x≥−3。 以邊界x=-3代入應成立，再取較大的0也成立，可同時確認等號與方向。",
    "steps": [
      "找出關鍵語「大於或等於」",
      "使用含等號的大於符號 ≥",
      "代入-3與0，確認端點包含且較大數皆符合。"
    ],
    "optionAnalysis": [
      {
        "choice": "x≥−3",
        "truth": true,
        "reason": "此式正確包含 −3 與其右側數。"
      },
      {
        "choice": "x>−3",
        "truth": false,
        "reason": "此式排除了 −3。"
      },
      {
        "choice": "x≤−3",
        "truth": false,
        "reason": "此式方向相反，表示不超過 −3。"
      },
      {
        "choice": "x<−3",
        "truth": false,
        "reason": "此式既方向相反又排除 −3。"
      }
    ],
    "misconceptionTarget": "把「或等於」忽略，誤選嚴格大於。 還可能只看符號尖端，沒有用邊界值核對語意。",
    "prerequisiteCheck": "需能讀懂正負數與大小關係。",
    "estimatedTimeSec": "50",
    "unitAndRoundingCheck": "沒有單位與近似問題。",
    "ambiguityAndBoundaryAudit": "只有選項 0 同時符合方向與邊界包含性。",
    "difficultyReason": "直接辨認含等號的不等號，屬於基本符號理解。",
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
    "contentSha256": "4f360dd79ba89238508948890b46895ebcf0397f70c53b70f2880234c743be26"
  },
  {
    "questionId": "u07-s001-v002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "把 x<4 表示在標準數線上，正確作法是哪一個？",
    "givenConditions": "標準數線向右數值增大。",
    "target": "由不等式決定數線端點與方向",
    "choices": [
      "在 4 畫實心點並向左",
      "在 4 畫空心點並向左",
      "在 4 畫空心點並向右",
      "在 4 畫實心點並向右"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "4 本身代入 4<4 為假，故端點不可填實；取 3 是解且在 4 左邊，所以應向左延伸。",
      "result": "在 4 畫空心點並向左",
      "answerIndexVerified": 1
    },
    "explanation": "x<4 不包含 4，所以端點用空心點；所有小於 4 的數位於 4 左側，因此射線向左。 可用3與4驗算：3<4為真而4<4為假，所以左側要納入、端點要排除。",
    "steps": [
      "嚴格小於不含端點",
      "數線左側代表較小數",
      "用3與4代入，檢查射線方向及空心端點。"
    ],
    "optionAnalysis": [
      {
        "choice": "在 4 畫實心點並向左",
        "truth": false,
        "reason": "實心點錯把 4 納入。"
      },
      {
        "choice": "在 4 畫空心點並向左",
        "truth": true,
        "reason": "空心且向左完整符合。"
      },
      {
        "choice": "在 4 畫空心點並向右",
        "truth": false,
        "reason": "方向錯成大於 4。"
      },
      {
        "choice": "在 4 畫實心點並向右",
        "truth": false,
        "reason": "端點與方向都不符合。"
      }
    ],
    "misconceptionTarget": "把不等號當箭頭，或忽略嚴格不等號的空心端點。 共用圖例若不是空心向左也不可拿來代替題幹條件。",
    "prerequisiteCheck": "需知道數線方向與空心實心意義。",
    "estimatedTimeSec": "55",
    "unitAndRoundingCheck": "沒有單位與計算。",
    "ambiguityAndBoundaryAudit": "題意明示標準數線，排除方向反置的圖法。",
    "difficultyReason": "只需轉譯單一嚴格不等式。",
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
    "contentSha256": "0fa807158ab4f84668b96b4d4381cc25948a9934281226b1ab6efc5009f8a11e"
  },
  {
    "questionId": "u07-s001-v003",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "下列哪一個數是 x≤−2 的解？",
    "givenConditions": "候選數皆為整數；端點包含。",
    "target": "以代入判斷單一數是否為解",
    "choices": [
      "0",
      "−1",
      "−2",
      "3"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "把四數代入左邊：只有 −2≤−2 為真；−1≤−2、0≤−2、3≤−2 都是假。",
      "result": "−2",
      "answerIndexVerified": 2
    },
    "explanation": "x≤−2 要求候選數小於或等於 −2。四個選項中只有 −2 符合，而且等號允許端點。 負數越往數線左側越小，-1其實大於-2；只有端點-2因含等號而通過。",
    "steps": [
      "逐一與 −2 比較",
      "確認 ≤ 包含 −2",
      "逐項代入並特別比較-1與-2在數線上的位置。"
    ],
    "optionAnalysis": [
      {
        "choice": "0",
        "truth": false,
        "reason": "0 大於 −2。"
      },
      {
        "choice": "−1",
        "truth": false,
        "reason": "−1 大於 −2。"
      },
      {
        "choice": "−2",
        "truth": true,
        "reason": "−2 等於端點，符合 ≤。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "3 大於 −2。"
      }
    ],
    "misconceptionTarget": "看到負數就選 −1，未實際比較負數大小。 也可能把負號忽略，只比較一與二的絕對值大小。",
    "prerequisiteCheck": "需能比較負整數大小。",
    "estimatedTimeSec": "45",
    "unitAndRoundingCheck": "沒有單位與近似。",
    "ambiguityAndBoundaryAudit": "四個候選數互異且只有 −2 滿足。",
    "difficultyReason": "單一步驟代入比較，屬基本題。",
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
    "contentSha256": "90a94c375ceb8be53ab80119987e84532951fca1c7732e8b8532912ea8a4dc37"
  },
  {
    "questionId": "u07-s001-v004",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "若 5<a，將未知數寫在左邊的等價不等式為何？",
    "givenConditions": "5 與 a 為實數。",
    "target": "交換左右後保持同一大小關係",
    "choices": [
      "a<5",
      "a≤5",
      "a≥5",
      "a>5"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "以 a=6 測試：5<6 成立，所以改寫式也要讓 6 成立；以 a=5 測試應不成立。四項中只有 a>5 同時符合。",
      "result": "a>5",
      "answerIndexVerified": 3
    },
    "explanation": "5<a 表示 a 比 5 大。交換左右書寫時，大小關係不能改變，所以寫成 a>5。 交換左右只是改寫閱讀順序，必須同步改成開口朝a，才能仍表達a比5大。",
    "steps": [
      "讀成「5 小於 a」",
      "改寫成「a 大於 5」",
      "取a=6與a=5測試，確認a>5與原式真假一致。"
    ],
    "optionAnalysis": [
      {
        "choice": "a<5",
        "truth": false,
        "reason": "a<5 與原關係相反。"
      },
      {
        "choice": "a≤5",
        "truth": false,
        "reason": "a≤5 方向相反且含錯誤等號。"
      },
      {
        "choice": "a≥5",
        "truth": false,
        "reason": "a≥5 多納入 a=5。"
      },
      {
        "choice": "a>5",
        "truth": true,
        "reason": "a>5 完全等價。"
      }
    ],
    "misconceptionTarget": "交換不等式兩邊時保留原符號外觀，造成語意反向。 只搬動未知數位置，卻讓改寫後的真假集合與原式不同。",
    "prerequisiteCheck": "需能閱讀不等號方向。",
    "estimatedTimeSec": "55",
    "unitAndRoundingCheck": "沒有單位與近似。",
    "ambiguityAndBoundaryAudit": "等價要求解集完全相同，a=5 必須排除。",
    "difficultyReason": "需要做左右改寫與邊界核對。",
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
    "contentSha256": "cab6661a9fb186edc2b663d54ece73d41b3cb2d0894cc7cd79908be25d5661cd"
  },
  {
    "questionId": "u07-s001-v005",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "數線在 −1 畫實心點，並向右延伸。此圖表示哪一個不等式？",
    "givenConditions": "標準數線右側較大；端點標為 −1。",
    "target": "由數線圖反寫不等式",
    "choices": [
      "x>−1",
      "x≥−1",
      "x≤−1",
      "x<−1"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "圖中 −1 被填滿，故 x=−1 必須成立；右側的 0 也在射線上，故方向是大於。答案為 x≥−1。",
      "result": "x≥−1",
      "answerIndexVerified": 1
    },
    "explanation": "向右表示比 −1 大；實心點表示 −1 也包含在內，因此是 x≥−1。 以-1與0檢查，兩者都在解集中；比-1小的-2則不在向右射線上。方向判定也與數線左小右大的次序一致。",
    "steps": [
      "讀方向為大於",
      "讀實心端點為包含",
      "測試端點-1、右側0與左側-2以驗證解集。"
    ],
    "optionAnalysis": [
      {
        "choice": "x>−1",
        "truth": false,
        "reason": "空心語意，錯排除 −1。"
      },
      {
        "choice": "x≥−1",
        "truth": true,
        "reason": "方向與包含性皆正確。"
      },
      {
        "choice": "x≤−1",
        "truth": false,
        "reason": "選項「x≤−1」方向相反。，與獨立解得的「x≥−1」不一致。"
      },
      {
        "choice": "x<−1",
        "truth": false,
        "reason": "方向與包含性都相反。"
      }
    ],
    "misconceptionTarget": "只看射線方向，忘記實心點代表等號。 若共用圖只展示實心向左，也不能據圖取代文字描述。",
    "prerequisiteCheck": "需理解端點與射線。",
    "estimatedTimeSec": "60",
    "unitAndRoundingCheck": "沒有單位與比例推估。",
    "ambiguityAndBoundaryAudit": "圖形描述文字完整，不需依圖形比例猜測。",
    "difficultyReason": "需同時整合方向與端點兩項資訊。",
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
    "contentSha256": "b389801b303522e1bbfc497fef08e66e7829c63bf3b6f5992304d090e8898059"
  },
  {
    "questionId": "u07-s001-v006",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "在 −4、−2、1、5 中，符合 −2<x 的數共有幾個？",
    "givenConditions": "候選集合明示；嚴格端點不含。",
    "target": "計數有限候選中的解",
    "choices": [
      "1 個",
      "3 個",
      "2 個",
      "4 個"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "檢查：−4>−2 假，−2>−2 假，1>−2 真，5>−2 真，所以真值有 2 個。",
      "result": "2 個",
      "answerIndexVerified": 2
    },
    "explanation": "−2<x 等價於 x>−2。四數中 1 與 5 大於 −2；−2 不符合嚴格大於，−4 更小，所以共有 2 個。 題式是嚴格大於，端點-2代入得到假；只有1與5位於其右側，故計數為2。",
    "steps": [
      "先改寫為 x>−2",
      "逐一篩選 1、5",
      "把每個候選數放到x的位置，統計真值恰有兩個。"
    ],
    "optionAnalysis": [
      {
        "choice": "1 個",
        "truth": false,
        "reason": "漏算其中一個正數。"
      },
      {
        "choice": "3 個",
        "truth": false,
        "reason": "此項若選 3 個會錯把 −2 納入。"
      },
      {
        "choice": "2 個",
        "truth": true,
        "reason": "正確數量其實不是 2? 此選項文字為2個且為正解。"
      },
      {
        "choice": "4 個",
        "truth": false,
        "reason": "四個皆符合顯然錯誤。"
      }
    ],
    "misconceptionTarget": "把端點 −2 納入，或負數大小比較錯誤。 還可能把題式-2<x誤讀成x<-2而選左側數。",
    "prerequisiteCheck": "需能交換不等式左右並比較負數。",
    "estimatedTimeSec": "70",
    "unitAndRoundingCheck": "答案單位為「個」，不需四捨五入。",
    "ambiguityAndBoundaryAudit": "列出的四個候選互異，計數範圍明確。",
    "difficultyReason": "需完成等價改寫、端點排除與計數。",
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
    "contentSha256": "77e9b4ba5543e0e4ab7a8e56aee13ae04d16e5fc60e133cd6a59004ccce17ff2"
  },
  {
    "questionId": "u07-s001-v007",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "若數 p 同時滿足 p≥−1 與 p<2，下列哪一個一定不可能是 p？",
    "givenConditions": "p 為實數；兩條件使用且。",
    "target": "在雙重條件下辨識不可行端點",
    "choices": [
      "−1",
      "0",
      "1.9",
      "2"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "代入兩式：p=2 時第一式真，但第二式 2<2 假；其他三值兩式皆真，所以唯一不可能是 2。",
      "result": "2",
      "answerIndexVerified": 3
    },
    "explanation": "兩條件共同要求 −1≤p<2。2 因為不符合 p<2 而不可能；其餘三數都落在範圍內。 交集的左端-1包含、右端2排除；逐項代入後只有2在第二條件失敗。",
    "steps": [
      "取兩條件共同範圍",
      "檢查右端點 2 被排除",
      "將四個選項同時代入兩式，找唯一至少一式為假的數。"
    ],
    "optionAnalysis": [
      {
        "choice": "−1",
        "truth": false,
        "reason": "−1 被 ≥ 包含。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "0 位於區間內。"
      },
      {
        "choice": "1.9",
        "truth": false,
        "reason": "1.9 小於 2 且大於 −1。"
      },
      {
        "choice": "2",
        "truth": true,
        "reason": "2 不小於 2，違反嚴格上界。"
      }
    ],
    "misconceptionTarget": "把 p<2 誤讀成 p≤2。 也可能只檢查其中一條不等式，沒有取兩條件的共同解。",
    "prerequisiteCheck": "需會判斷單邊不等式與端點。",
    "estimatedTimeSec": "80",
    "unitAndRoundingCheck": "無單位與近似；1.9 是精確十進位。",
    "ambiguityAndBoundaryAudit": "「一定不可能」指不符合至少一個必要條件，只有 2。",
    "difficultyReason": "需要取兩個解集交集並辨識開端點。",
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
    "contentSha256": "adaece426bec0913a3689229d3f5c15eb4e4c75034c679b564d6f61921a89108"
  },
  {
    "questionId": "u07-s001-v008",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "已知 x>k 的數線圖在 6 畫空心點並向右延伸，則 k 為何？",
    "givenConditions": "圖上端點數值明確為 6。",
    "target": "由一般式與數線端點求參數",
    "choices": [
      "6",
      "−6",
      "0",
      "無法判定"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "在 x>k 中，x=k 時應是唯一邊界且不包含。圖的唯一空心邊界在 6，因此令 k=6。",
      "result": "6",
      "answerIndexVerified": 0
    },
    "explanation": "x>k 的端點就是 k。圖上空心端點標在 6，方向也與大於一致，所以 k=6。 端點是使x=k由假轉真的分界；文字已明示空心點在6，故不需從通用圖例猜值。",
    "steps": [
      "辨認代數式的端點是 k",
      "讀取圖上端點標值 6",
      "以x=6不成立、x=7成立核對k=6與向右方向。"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": true,
        "reason": "k=6 正確。"
      },
      {
        "choice": "−6",
        "truth": false,
        "reason": "負號沒有任何依據。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "0 只是數線常見基準，非本圖端點。"
      },
      {
        "choice": "無法判定",
        "truth": false,
        "reason": "端點已明確標值，能判定。"
      }
    ],
    "misconceptionTarget": "把數線中央位置誤當 0，或無視端點標籤。 共用圖中的字母a不是本題k，也不能用圖面位置推測端點。",
    "prerequisiteCheck": "需理解 x>k 的 k 是邊界。",
    "estimatedTimeSec": "70",
    "unitAndRoundingCheck": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "題目提供標準數線與確切標籤，不依比例。",
    "difficultyReason": "含參數但只需識別邊界，推理層次較高。",
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
    "contentSha256": "b299a2218fb76c0ad8391745b174a4395528f5af337915380bf8fba61ecf79eb"
  },
  {
    "questionId": "u07-s001-v009",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "下列哪一組敘述互相等價？",
    "givenConditions": "所有式子定義於實數。",
    "target": "判斷兩個不等式是否具有相同解集",
    "choices": [
      "x≤3 與 3≤x",
      "x<5 與 x≤5",
      "x>−2 與 −2<x",
      "x≥0 與 x>0"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "逐組檢查：第一組在x=4時x≤3為假、3≤x為真；第二組在x=5時x<5為假、x≤5為真；第三組兩式都表示x大於-2；第四組在x=0時x≥0為真、x>0為假。因此只有第三組等價。",
      "result": "x>−2 與 −2<x",
      "answerIndexVerified": 2
    },
    "explanation": "第三組的x>−2與−2<x都表示x比−2大，具有完全相同的解集。第一組方向相反；第二組在端點5的真假不同；第四組在端點0的真假不同，所以只有索引2唯一正確。",
    "steps": [
      "先用內部值檢查每組方向是否相同。",
      "再用3、5、0等端點比較包含性。",
      "確認只有第三組所有實數的真假結果一致。"
    ],
    "optionAnalysis": [
      {
        "choice": "x≤3 與 3≤x",
        "truth": false,
        "reason": "第一組方向相反，只在 x=3 同時成立。"
      },
      {
        "choice": "x<5 與 x≤5",
        "truth": false,
        "reason": "第三組端點 5 的包含性不同。"
      },
      {
        "choice": "x>−2 與 −2<x",
        "truth": true,
        "reason": "兩式皆表示未知數大於 −2，完全等價。"
      },
      {
        "choice": "x≥0 與 x>0",
        "truth": false,
        "reason": "第四組端點 0 的包含性不同。"
      }
    ],
    "misconceptionTarget": "把選項代號與內容錯配，或只看符號外觀而未逐組檢查方向和端點。",
    "prerequisiteCheck": "需會交換左右與辨認等號。",
    "estimatedTimeSec": "85",
    "unitAndRoundingCheck": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "每組可用端點與一個內部值區分。",
    "difficultyReason": "需比較四組解集而非單一轉譯。",
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
    "contentSha256": "daba89135d5ea98cc6843635b1b6859326a3f88ab94f6ad2c449ed4853521d74"
  },
  {
    "questionId": "u07-s001-v010",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "氣象站規定：當溫度 T 低於 −5°C 時啟動防凍設備。下列哪個紀錄會啟動設備？",
    "givenConditions": "溫度以攝氏度表示；啟動條件唯一。",
    "target": "在溫度規則中套用嚴格不等式",
    "choices": [
      "−5°C",
      "−4.8°C",
      "0°C",
      "−6°C"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "檢查 T<−5：−5<−5 假；−4.8<−5 假；−6<−5 真；0<−5 假。唯一真值是 −6°C。",
      "result": "−6°C",
      "answerIndexVerified": 3
    },
    "explanation": "「低於 −5°C」表示 T<−5。−6 小於 −5，因此會啟動；−5 本身不包含，−4.8 與 0 都較高。 邊界-5因低於是嚴格條件而不啟動；-6在數線更左且唯一符合T<-5。其餘紀錄都沒有跨過啟動的溫度門檻。",
    "steps": [
      "把規則寫成 T<−5",
      "逐筆比較四個溫度",
      "將四個溫度代入T<-5，確認只有-6得到真值。"
    ],
    "optionAnalysis": [
      {
        "choice": "−5°C",
        "truth": false,
        "reason": "−5 是端點但嚴格低於不包含。"
      },
      {
        "choice": "−4.8°C",
        "truth": false,
        "reason": "−4.8 比 −5 高。"
      },
      {
        "choice": "0°C",
        "truth": false,
        "reason": "0 明顯高於 −5。"
      },
      {
        "choice": "−6°C",
        "truth": true,
        "reason": "−6 比 −5 低，符合。"
      }
    ],
    "misconceptionTarget": "負小數大小判斷錯誤，或把「低於」當成「不高於」。 還可能誤認-4.8的絕對值較小就代表溫度更低。",
    "prerequisiteCheck": "需能比較負數與讀取「低於」。",
    "estimatedTimeSec": "75",
    "unitAndRoundingCheck": "單位均為 °C，無換算與四捨五入。",
    "ambiguityAndBoundaryAudit": "規則使用嚴格小於，−5°C 不啟動；唯一符合的是 −6°C。",
    "difficultyReason": "需把設備規則轉成不等式並比較負小數。",
    "literacyContextNecessity": "氣象啟動條件決定端點是否納入，刪除情境就無法判斷 −5°C 的設備狀態。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "74f3f2da08f0f683304f31669b5a4bec9c76bda642674fbced48dcb0496a60c5"
  },
  {
    "questionId": "u07-s001-v011",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "電梯載重標示「總重量不得超過 600 公斤」。用 W 表示總重量，正確不等式為何？",
    "givenConditions": "W 為公斤數，假設非負；本題只問標示限制。",
    "target": "把載重規則翻成含等號上界",
    "choices": [
      "W≤600",
      "W<600",
      "W≥600",
      "W>600"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "用邊界 W=600 測試：標示說不得超過，等於 600 尚未超過，故必須包含等號；用 W=650 應排除，方向只能是 ≤。",
      "result": "W≤600",
      "answerIndexVerified": 0
    },
    "explanation": "「不得超過 600」表示可以剛好等於 600，但不能更大，所以 W≤600。 用600公斤測試仍未超過上限，而601公斤已超過，故端點必須包含且方向向下。",
    "steps": [
      "辨認「不得超過」為上限",
      "確認上限包含等於",
      "比較600與601公斤，驗證≤及上限方向。"
    ],
    "optionAnalysis": [
      {
        "choice": "W≤600",
        "truth": true,
        "reason": "正確表示包含 600 的上限。"
      },
      {
        "choice": "W<600",
        "truth": false,
        "reason": "錯把剛好 600 排除。"
      },
      {
        "choice": "W≥600",
        "truth": false,
        "reason": "方向變成至少 600。"
      },
      {
        "choice": "W>600",
        "truth": false,
        "reason": "方向相反且排除 600。"
      }
    ],
    "misconceptionTarget": "把安全上限誤寫成嚴格小於，或顛倒限制方向。 也可能把載重上限誤寫成重量至少六百公斤的下限。",
    "prerequisiteCheck": "需理解「不超過」語意。",
    "estimatedTimeSec": "55",
    "unitAndRoundingCheck": "W 與 600 單位同為公斤，不需換算。",
    "ambiguityAndBoundaryAudit": "載重標示允許剛好 600；自然限制 W≥0 不影響四選一。",
    "difficultyReason": "語意轉譯基本，但需正確處理安全標示邊界。",
    "literacyContextNecessity": "載重標示的「不得超過」決定是否可載剛好 600 公斤，情境具有必要邊界意義。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "89fd55fd4f6ef0afa130de65c60218c017d5ffc5b9f69e70d3f167e233c7d2c1"
  },
  {
    "questionId": "u07-s001-v012",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "一款遊戲的青少年模式限定「年齡未滿 18 歲」。若用 a 表示整數年齡，下列哪一個數線描述正確？",
    "givenConditions": "a 為非負整數；限制為未滿 18。",
    "target": "把年齡限制轉為數線並兼顧整數語意",
    "choices": [
      "18 實心向左",
      "18 空心向左",
      "18 空心向右",
      "17 實心只標單點"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "未滿表示 a<18。令 a=18 應不符合，所以端點空心；令 a=17、16 都符合且在左側，因此是向左射線而非單點。",
      "result": "18 空心向左",
      "answerIndexVerified": 1
    },
    "explanation": "「未滿 18」是 a<18，18 不包含，所以 18 畫空心點；小於 18 的範圍向左。整數限制不會把解集縮成只有 17。 即使年齡限定為整數，16、17等多個值都符合，數線仍表示整個小於18的範圍。",
    "steps": [
      "翻譯未滿為 a<18",
      "依嚴格小於選空心向左",
      "測試17符合、18不符合，再確認所有更小整數也符合。"
    ],
    "optionAnalysis": [
      {
        "choice": "18 實心向左",
        "truth": false,
        "reason": "實心錯把 18 納入。"
      },
      {
        "choice": "18 空心向左",
        "truth": true,
        "reason": "空心向左正確。"
      },
      {
        "choice": "18 空心向右",
        "truth": false,
        "reason": "方向錯成超過 18。"
      },
      {
        "choice": "17 實心只標單點",
        "truth": false,
        "reason": "整數解還有 16、15 等，不只 17。"
      }
    ],
    "misconceptionTarget": "把「未滿」當「至多」，或把最大整數解當成整個解集。 通用圖例未展示空心向左時，更不能把最大整數17畫成單點。",
    "prerequisiteCheck": "需理解未滿、空心端點與整數解。",
    "estimatedTimeSec": "80",
    "unitAndRoundingCheck": "年齡單位為歲；不涉及生日日期的細分，依題目整數年齡。",
    "ambiguityAndBoundaryAudit": "題目明示 a 為整數，但數線仍表達所有小於 18 的允許整數方向。",
    "difficultyReason": "同時整合語意、端點、方向與整數解集。",
    "literacyContextNecessity": "青少年模式規則使 18 歲邊界是否納入成為核心，不能刪去情境而保持同一判斷任務。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "1978419acc5a80bd0acf7c17e06091f96e2ecc18046f28420b25291882f66b93"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u07-s001-cr001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "type": "constructed-response",
    "prompt": "在數線上表示 x<3，並判斷 3、2.9、−4 三個數是否為此不等式的解。請說明端點與方向。",
    "requiredWork": [
      "畫出標有 3 的數線並標示端點",
      "畫出正確延伸方向",
      "逐一判斷三個指定數並說明"
    ],
    "fullCreditSolution": [
      "不等式x<3是嚴格小於，代入端點得到3<3為假，因此在3畫空心點。",
      "標準數線左側數值較小，所有小於3的數位於3左邊，所以由空心點向左畫射線與箭頭。",
      "逐一代入：3不符合；2.9<3為真；-4<3也為真，因此後兩數是解。",
      "再取右側的4代入得到假，可交叉確認射線沒有畫反。"
    ],
    "alternativeMethod": [
      "也可不先畫圖，直接把 3、2.9、−4 代入 x<3，再用判斷結果回頭確認數線應向左且端點空心。"
    ],
    "reasoningSteps": [
      "用端點3判斷空心。",
      "依左小右大決定向左延伸。",
      "逐一代入三個指定數。",
      "另取右側數驗證方向。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "端點 3 畫空心點、射線向左，且三個數依序判為不符合、符合、符合，說明完整。"
      },
      {
        "score": 2,
        "criteria": "數線表示正確，但三個判斷有一個錯誤；或三個判斷全對但端點或方向漏說一項。"
      },
      {
        "score": 1,
        "criteria": "知道 x<3 代表較小的數，但端點畫法或個別代入多處錯誤，仍可看出部分概念。"
      },
      {
        "score": 0,
        "criteria": "數線方向與端點均錯，且無法正確判斷任何指定數，或未作答。"
      }
    ],
    "partialCreditRules": "若只把 3 誤畫為實心，但方向與三個代入判斷皆正確，最多 2 分；若只漏畫箭頭但文字明確寫向左，可不扣概念分。",
    "followThroughPolicy": "後續判斷可依學生自己畫出的方向給程序分，但 3 是否納入必須依原式 x<3 評分，不接受由錯圖推得 3 為解。",
    "unitAndNotationRules": "數線需標出端點 3；小數 2.9 可用文字判斷，不要求精確按比例定位。",
    "answerOnlyPolicy": "只寫「3 不行，其他可以」而未畫圖或說明，最多 1 分。",
    "commonErrors": [
      "把嚴格小於的端點3畫成實心，錯把3納入解集。",
      "把不等號外觀當箭頭而向右畫，導致2.9與-4的判斷矛盾。"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "3 空心點向左；3 非解，2.9 與 −4 是解。",
      "ambiguity": "題目明示 x<3、指定三數及必須說明端點方向，無端點包含性歧義。",
      "scope": "國中會考單一不等式與數線範圍。",
      "reviewNote": "獨立以三次代入檢查：3<3 為假、2.9<3 為真、−4<3 為真；再依左小右大確認射線向左且嚴格符號使用空心點。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "ff81b56d0572fc7f0d163af464e974de4eac6643bf1c47b5f61dba69e7d76589"
  },
  {
    "questionId": "u07-s001-cr002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "type": "constructed-response",
    "prompt": "某數線在 −2 畫實心點，並向右延伸。請寫出對應不等式，並舉出一個負數解和一個正數解。",
    "requiredWork": [
      "由圖寫出不等式",
      "分別提出一個符合的負數與正數",
      "以代入說明兩者符合"
    ],
    "fullCreditSolution": [
      "實心點表示端點-2包含在解集中，向右表示所有比-2大的數也包含，所以可寫x≥-2或-2≤x。",
      "負數解可取-1，因-1≥-2為真；也可取端點-2。",
      "正數解可取3，因3≥-2為真；任何正數也都位於-2右側。",
      "用左側的-3檢查會得到假，確認解集方向不是向左。"
    ],
    "alternativeMethod": [
      "負數解亦可取 −2；正數解可取任何正數。只要分別代入 x≥−2 成立即可。"
    ],
    "reasoningSteps": [
      "由實心點判定含等號。",
      "由向右判定大於。",
      "選一個符合的負數與正數。",
      "代入兩個例子並以-3反查方向。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確寫 x≥−2，給出一個符合的負數及一個符合的正數，並有代入或大小比較說明。"
      },
      {
        "score": 2,
        "criteria": "不等式正確且兩個例子皆符合，但缺少驗證；或不等式符號漏等號而其餘推理一致。"
      },
      {
        "score": 1,
        "criteria": "只正確寫出 x≥−2，或只給出兩個符合例子但不等式書寫錯誤。"
      },
      {
        "score": 0,
        "criteria": "寫成向左範圍且例子均不符合，或未作答。"
      }
    ],
    "partialCreditRules": "若負數例子選 −3，因其不符合，只扣該例與驗證部分；正數例子仍可得部分分。",
    "followThroughPolicy": "若學生先誤寫 x>−2，但選 −1 與 3 且驗證一致，可給程序分，惟未辨識實心點不得滿分。",
    "unitAndNotationRules": "接受 x≥−2 或 −2≤x；負數例子必須小於 0，正數例子必須大於 0。",
    "answerOnlyPolicy": "只寫 x≥−2，沒有例子，最多 1 分。",
    "commonErrors": [
      "把端點的負號誤當射線方向，寫成x≤-2。",
      "選-3當負數例子卻未代入，沒有發現它不符合x≥-2。"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "x≥−2；例如 −1 與 3。",
      "ambiguity": "圖形資訊由文字完整描述，向右與實心點的意義唯一。",
      "scope": "國中不等號、數線和解的驗證。",
      "reviewNote": "獨立從向右取得 x>−2，再由實心點補上等號；測試 −1 和 3 均大於等於 −2，且分別符合負數與正數要求。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "c44bf239974bfe1bfdc6c7587c9a635a925580c16bdba995485144c9d99da630"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u07-s001-v001-semantic-r1",
    "questionId": "u07-s001-v001",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "contentSha256": "4f360dd79ba89238508948890b46895ebcf0397f70c53b70f2880234c743be26",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "測試邊界 x=−3：原句應成立，所以必須含等號；再測 x=0：也應成立，所以方向為大於。只有 x≥−3 同時通過。",
    "derivedAnswer": "x≥−3",
    "storedAnswer": "x≥−3",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「辨認四種不等號的中文語意」，給定條件「x 為實數；比較基準為 −3。」足以決定唯一數學任務。",
      "boundary": "只有選項 0 同時符合方向與邊界包含性。",
      "units": "沒有單位與近似問題。",
      "scope": "本題只使用 不等號與數線 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "直接辨認含等號的不等號，屬於基本符號理解。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：測試邊界 x=−3：原句應成立，所以必須含等號；再測 x=0：也應成立，所以方向為大於。只有 x≥−3 同時通過。 所得「x≥−3」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：只有選項 0 同時符合方向與邊界包含性。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s001-v002-semantic-r1",
    "questionId": "u07-s001-v002",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "contentSha256": "0fa807158ab4f84668b96b4d4381cc25948a9934281226b1ab6efc5009f8a11e",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "4 本身代入 4<4 為假，故端點不可填實；取 3 是解且在 4 左邊，所以應向左延伸。",
    "derivedAnswer": "在 4 畫空心點並向左",
    "storedAnswer": "在 4 畫空心點並向左",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「由不等式決定數線端點與方向」，給定條件「標準數線向右數值增大。」足以決定唯一數學任務。",
      "boundary": "題意明示標準數線，排除方向反置的圖法。",
      "units": "沒有單位與計算。",
      "scope": "本題只使用 不等號與數線 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "只需轉譯單一嚴格不等式。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：4 本身代入 4<4 為假，故端點不可填實；取 3 是解且在 4 左邊，所以應向左延伸。 所得「在 4 畫空心點並向左」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：題意明示標準數線，排除方向反置的圖法。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s001-v003-semantic-r1",
    "questionId": "u07-s001-v003",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "contentSha256": "90a94c375ceb8be53ab80119987e84532951fca1c7732e8b8532912ea8a4dc37",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "把四數代入左邊：只有 −2≤−2 為真；−1≤−2、0≤−2、3≤−2 都是假。",
    "derivedAnswer": "−2",
    "storedAnswer": "−2",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「以代入判斷單一數是否為解」，給定條件「候選數皆為整數；端點包含。」足以決定唯一數學任務。",
      "boundary": "四個候選數互異且只有 −2 滿足。",
      "units": "沒有單位與近似。",
      "scope": "本題只使用 不等號與數線 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "單一步驟代入比較，屬基本題。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：把四數代入左邊：只有 −2≤−2 為真；−1≤−2、0≤−2、3≤−2 都是假。 所得「−2」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：四個候選數互異且只有 −2 滿足。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s001-v004-semantic-r1",
    "questionId": "u07-s001-v004",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "contentSha256": "cab6661a9fb186edc2b663d54ece73d41b3cb2d0894cc7cd79908be25d5661cd",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "以 a=6 測試：5<6 成立，所以改寫式也要讓 6 成立；以 a=5 測試應不成立。四項中只有 a>5 同時符合。",
    "derivedAnswer": "a>5",
    "storedAnswer": "a>5",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「交換左右後保持同一大小關係」，給定條件「5 與 a 為實數。」足以決定唯一數學任務。",
      "boundary": "等價要求解集完全相同，a=5 必須排除。",
      "units": "沒有單位與近似。",
      "scope": "本題只使用 不等號與數線 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "需要做左右改寫與邊界核對。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：以 a=6 測試：5<6 成立，所以改寫式也要讓 6 成立；以 a=5 測試應不成立。四項中只有 a>5 同時符合。 所得「a>5」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：等價要求解集完全相同，a=5 必須排除。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s001-v005-semantic-r1",
    "questionId": "u07-s001-v005",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "contentSha256": "b389801b303522e1bbfc497fef08e66e7829c63bf3b6f5992304d090e8898059",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "圖中 −1 被填滿，故 x=−1 必須成立；右側的 0 也在射線上，故方向是大於。答案為 x≥−1。",
    "derivedAnswer": "x≥−1",
    "storedAnswer": "x≥−1",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「由數線圖反寫不等式」，給定條件「標準數線右側較大；端點標為 −1。」足以決定唯一數學任務。",
      "boundary": "圖形描述文字完整，不需依圖形比例猜測。",
      "units": "沒有單位與比例推估。",
      "scope": "本題只使用 不等號與數線 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "需同時整合方向與端點兩項資訊。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：圖中 −1 被填滿，故 x=−1 必須成立；右側的 0 也在射線上，故方向是大於。答案為 x≥−1。 所得「x≥−1」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：圖形描述文字完整，不需依圖形比例猜測。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s001-v006-semantic-r1",
    "questionId": "u07-s001-v006",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "contentSha256": "77e9b4ba5543e0e4ab7a8e56aee13ae04d16e5fc60e133cd6a59004ccce17ff2",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "檢查：−4>−2 假，−2>−2 假，1>−2 真，5>−2 真，所以真值有 2 個。",
    "derivedAnswer": "2 個",
    "storedAnswer": "2 個",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「計數有限候選中的解」，給定條件「候選集合明示；嚴格端點不含。」足以決定唯一數學任務。",
      "boundary": "列出的四個候選互異，計數範圍明確。",
      "units": "答案單位為「個」，不需四捨五入。",
      "scope": "本題只使用 不等號與數線 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "需完成等價改寫、端點排除與計數。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：檢查：−4>−2 假，−2>−2 假，1>−2 真，5>−2 真，所以真值有 2 個。 所得「2 個」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：列出的四個候選互異，計數範圍明確。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s001-v007-semantic-r1",
    "questionId": "u07-s001-v007",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "contentSha256": "adaece426bec0913a3689229d3f5c15eb4e4c75034c679b564d6f61921a89108",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "代入兩式：p=2 時第一式真，但第二式 2<2 假；其他三值兩式皆真，所以唯一不可能是 2。",
    "derivedAnswer": "2",
    "storedAnswer": "2",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「在雙重條件下辨識不可行端點」，給定條件「p 為實數；兩條件使用且。」足以決定唯一數學任務。",
      "boundary": "「一定不可能」指不符合至少一個必要條件，只有 2。",
      "units": "無單位與近似；1.9 是精確十進位。",
      "scope": "本題只使用 不等號與數線 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "需要取兩個解集交集並辨識開端點。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：代入兩式：p=2 時第一式真，但第二式 2<2 假；其他三值兩式皆真，所以唯一不可能是 2。 所得「2」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：「一定不可能」指不符合至少一個必要條件，只有 2。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s001-v008-semantic-r1",
    "questionId": "u07-s001-v008",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "contentSha256": "b299a2218fb76c0ad8391745b174a4395528f5af337915380bf8fba61ecf79eb",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "在 x>k 中，x=k 時應是唯一邊界且不包含。圖的唯一空心邊界在 6，因此令 k=6。",
    "derivedAnswer": "6",
    "storedAnswer": "6",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「由一般式與數線端點求參數」，給定條件「圖上端點數值明確為 6。」足以決定唯一數學任務。",
      "boundary": "題目提供標準數線與確切標籤，不依比例。",
      "units": "無單位與近似。",
      "scope": "本題只使用 不等號與數線 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "含參數但只需識別邊界，推理層次較高。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：在 x>k 中，x=k 時應是唯一邊界且不包含。圖的唯一空心邊界在 6，因此令 k=6。 所得「6」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：題目提供標準數線與確切標籤，不依比例。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s001-v009-semantic-r1",
    "questionId": "u07-s001-v009",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "contentSha256": "daba89135d5ea98cc6843635b1b6859326a3f88ab94f6ad2c449ed4853521d74",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "逐組檢查：第一組在x=4時x≤3為假、3≤x為真；第二組在x=5時x<5為假、x≤5為真；第三組兩式都表示x大於-2；第四組在x=0時x≥0為真、x>0為假。因此只有第三組等價。",
    "derivedAnswer": "x>−2 與 −2<x",
    "storedAnswer": "x>−2 與 −2<x",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「判斷兩個不等式是否具有相同解集」，給定條件「所有式子定義於實數。」足以決定唯一數學任務。",
      "boundary": "每組可用端點與一個內部值區分。",
      "units": "無單位與近似。",
      "scope": "本題只使用 不等號與數線 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "需比較四組解集而非單一轉譯。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立逐組驗算：第一組於x=4真假相反；第二組於x=5真假相反；第三組兩式皆表示x大於-2；第四組於x=0真假相反。因此只有索引2的「x>−2 與 −2<x」等價，與儲存答案一致，原先選項代號錯配已排除。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s001-v010-semantic-r1",
    "questionId": "u07-s001-v010",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "contentSha256": "74f3f2da08f0f683304f31669b5a4bec9c76bda642674fbced48dcb0496a60c5",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "檢查 T<−5：−5<−5 假；−4.8<−5 假；−6<−5 真；0<−5 假。唯一真值是 −6°C。",
    "derivedAnswer": "−6°C",
    "storedAnswer": "−6°C",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「在溫度規則中套用嚴格不等式」，給定條件「溫度以攝氏度表示；啟動條件唯一。」足以決定唯一數學任務。",
      "boundary": "規則使用嚴格小於，−5°C 不啟動；唯一符合的是 −6°C。",
      "units": "單位均為 °C，無換算與四捨五入。",
      "scope": "本題只使用 不等號與數線 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "需把設備規則轉成不等式並比較負小數。",
    "literacyNecessityCheck": "氣象啟動條件決定端點是否納入，刪除情境就無法判斷 −5°C 的設備狀態。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：檢查 T<−5：−5<−5 假；−4.8<−5 假；−6<−5 真；0<−5 假。唯一真值是 −6°C。 所得「−6°C」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：規則使用嚴格小於，−5°C 不啟動；唯一符合的是 −6°C。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s001-v011-semantic-r1",
    "questionId": "u07-s001-v011",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "contentSha256": "89fd55fd4f6ef0afa130de65c60218c017d5ffc5b9f69e70d3f167e233c7d2c1",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "用邊界 W=600 測試：標示說不得超過，等於 600 尚未超過，故必須包含等號；用 W=650 應排除，方向只能是 ≤。",
    "derivedAnswer": "W≤600",
    "storedAnswer": "W≤600",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「把載重規則翻成含等號上界」，給定條件「W 為公斤數，假設非負；本題只問標示限制。」足以決定唯一數學任務。",
      "boundary": "載重標示允許剛好 600；自然限制 W≥0 不影響四選一。",
      "units": "W 與 600 單位同為公斤，不需換算。",
      "scope": "本題只使用 不等號與數線 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "語意轉譯基本，但需正確處理安全標示邊界。",
    "literacyNecessityCheck": "載重標示的「不得超過」決定是否可載剛好 600 公斤，情境具有必要邊界意義。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：用邊界 W=600 測試：標示說不得超過，等於 600 尚未超過，故必須包含等號；用 W=650 應排除，方向只能是 ≤。 所得「W≤600」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：載重標示允許剛好 600；自然限制 W≥0 不影響四選一。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s001-v012-semantic-r1",
    "questionId": "u07-s001-v012",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "contentSha256": "1978419acc5a80bd0acf7c17e06091f96e2ecc18046f28420b25291882f66b93",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "未滿表示 a<18。令 a=18 應不符合，所以端點空心；令 a=17、16 都符合且在左側，因此是向左射線而非單點。",
    "derivedAnswer": "18 空心向左",
    "storedAnswer": "18 空心向左",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「把年齡限制轉為數線並兼顧整數語意」，給定條件「a 為非負整數；限制為未滿 18。」足以決定唯一數學任務。",
      "boundary": "題目明示 a 為整數，但數線仍表達所有小於 18 的允許整數方向。",
      "units": "年齡單位為歲；不涉及生日日期的細分，依題目整數年齡。",
      "scope": "本題只使用 不等號與數線 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "同時整合語意、端點、方向與整數解集。",
    "literacyNecessityCheck": "青少年模式規則使 18 歲邊界是否納入成為核心，不能刪去情境而保持同一判斷任務。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：未滿表示 a<18。令 a=18 應不符合，所以端點空心；令 a=17、16 都符合且在左側，因此是向左射線而非單點。 所得「18 空心向左」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：題目明示 a 為整數，但數線仍表達所有小於 18 的允許整數方向。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u07-fig-symbol-number-line",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-symbol",
    "svgPath": "figures/u07/u07-fig-symbol-number-line.svg",
    "canvas": {
      "width": 720,
      "height": 240,
      "unit": "px"
    },
    "viewBox": "0 0 720 240",
    "drawingSpec": {
      "coordinateSystem": "原點為左上角，x 向右、y 向下",
      "baselineTop": {
        "from": [
          80,
          72
        ],
        "to": [
          640,
          72
        ]
      },
      "baselineBottom": {
        "from": [
          80,
          168
        ],
        "to": [
          640,
          168
        ]
      },
      "topEndpoint": {
        "center": [
          330,
          72
        ],
        "radius": 10,
        "fill": "white",
        "label": "a",
        "labelPosition": [
          322,
          112
        ]
      },
      "bottomEndpoint": {
        "center": [
          390,
          168
        ],
        "radius": 10,
        "fill": "solid",
        "label": "b",
        "labelPosition": [
          382,
          208
        ]
      },
      "topRay": {
        "from": [
          342,
          72
        ],
        "to": [
          620,
          72
        ],
        "direction": "right"
      },
      "bottomRay": {
        "from": [
          378,
          168
        ],
        "to": [
          100,
          168
        ],
        "direction": "left"
      },
      "tickMarks": "只在端點位置畫 22px 垂直刻度",
      "arrows": "只在解集射線末端使用箭頭，避免與基準線箭頭重疊",
      "lineWeights": "基準線 3px，解集射線 7px",
      "labels": "繁體中文說明空心與實心",
      "hiddenLines": "none",
      "units": "abstract number line",
      "scalePolicy": "not-to-scale"
    },
    "toScale": false,
    "noVisualInferenceWarning": "本圖用於說明端點與方向，不按數值距離比例繪製；不得由線段長短推論答案。",
    "altText": "兩條不按比例的水平數線圖例：上方在字母a畫空心點並以粗線向右延伸；下方在字母b畫實心點並以粗線向左延伸，文字分別說明端點不包含與包含。",
    "svgTitle": "不等號數線端點與方向示意",
    "svgDesc": "兩條不按比例的水平數線圖例：上方在字母a畫空心點並以粗線向右延伸；下方在字母b畫實心點並以粗線向左延伸，文字分別說明端點不包含與包含。",
    "mobileReadability": "在 360px 寬度檢查後，端點直徑、箭頭、刻度與標籤仍可分辨；文字不小於 18px。",
    "answerLeakageReview": "圖只保留給講義說明兩種一般圖例；所有題庫與非選題已移除figureId，因此字母端點與alt、desc不會直接透露特定選項答案。",
    "svgAssertions": [
      "id=\"open-endpoint\"",
      "id=\"closed-endpoint\"",
      "id=\"right-ray\"",
      "id=\"left-ray\"",
      "空心端點：不包含端點",
      "實心端點：包含端點"
    ],
    "figureReview": {
      "decision": "pass",
      "manualVisualInspection": true,
      "geometryCheck": "pass",
      "mobileCheck": "pass",
      "answerLeakageCheck": "pass",
      "reviewNote": "重新交叉核對空心向右與實心向左的SVG幾何、alt和desc，並確認白底黑白列印及手機縮放可讀；此圖僅由講義引用，不再誤導特定題目。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "f8d5d947bcbfad812977fdd0af9d2262987bc3a050a5069088c0d5c3df9c7ebe",
    "mobileReadabilityReview": "縮至360px寬時，空心與實心端點、兩條粗射線、箭頭及a、b標籤仍可區分，說明文字不與線條重疊。",
    "printReadabilityReview": "A4黑白列印時以白底、黑框空心圓、全黑實心圓和粗線方向傳遞資訊，不依賴色彩；端點輪廓與箭頭保持清楚。"
  }
];
