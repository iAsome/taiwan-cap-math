// Generated only from reviewed immutable source. Do not hand edit.
export default {
  "lecture": {
    "lectureId": "u14-s002-lecture-r1",
    "unitId": "u14",
    "numericUnitId": 14,
    "topicId": "u14-sequences",
    "skillId": "arithmetic-sequence-nth",
    "lockedTitle": "等差數列第 n 項",
    "title": "等差數列第 n 項：從首項走 n−1 步",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能辨認首項 a_1、公差 d 與項數 n。",
      "能理解 a_n=a_1+(n-1)d 的由來。",
      "能由已知項求另一項或回求項數。",
      "能處理負公差與分數公差。"
    ],
    "prerequisiteBridge": [
      {
        "skillId": "sequence-pattern",
        "title": "數列規律",
        "requiredLevel": "能說明「數列規律」的核心定義並完成基本計算，作為本技能的直接前置。"
      }
    ],
    "glossary": [
      {
        "term": "等差數列",
        "definition": "任兩相鄰項的後項減前項皆相同的數列。"
      },
      {
        "term": "首項",
        "definition": "第1項，記作 a_1。"
      },
      {
        "term": "公差",
        "definition": "固定的相鄰差，記作 d。"
      },
      {
        "term": "第 n 項",
        "definition": "從首項經過 n-1 次公差後得到的項。"
      }
    ],
    "notation": [
      {
        "symbol": "a_n",
        "meaning": "第 n 項。"
      },
      {
        "symbol": "d",
        "meaning": "公差，d=a_{k+1}-a_k。"
      },
      {
        "symbol": "n-1",
        "meaning": "由第1項走到第n項的步數。"
      }
    ],
    "conceptNarrative": [
      "由第1項到第2項加一次 d，到第3項加兩次 d，因此到第n項共加 n-1 次 d。",
      "公差可以是正數、0或負數；負公差表示數列逐項減少。",
      "知道任一項 a_k 時，也可用 a_n=a_k+(n-k)d，直接計算位置差。",
      "回求 n 時，所得 n 必須是正整數，否則目標值不是這個數列中的某一項。"
    ],
    "formalDefinitions": [
      {
        "name": "等差數列",
        "statement": "相鄰差固定的數列。"
      },
      {
        "name": "通項公式",
        "statement": "直接由位置 n 求項值的公式。"
      }
    ],
    "formulas": [
      {
        "formula": "a_n=a_1+(n-1)d",
        "conditions": [
          "n為正整數",
          "d為固定公差"
        ],
        "meaning": "首項加上n-1次公差。"
      },
      {
        "formula": "a_n=a_k+(n-k)d",
        "conditions": [
          "已知第k項與公差"
        ],
        "meaning": "由已知位置跨到目標位置。"
      }
    ],
    "nonApplicableCases": [
      "相鄰差不固定時不可套公式。",
      "把 n 當成步數會多加一次公差。",
      "回求 n 得到非正整數時不能硬說是某一項。",
      "題目只給兩個不相鄰項時，公差要除以位置差。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "確認數列等差",
        "check": "至少核對相鄰差或題目明示。"
      },
      {
        "step": 2,
        "instruction": "標出 a_1、d、n",
        "check": "負號與分數要保留。"
      },
      {
        "step": 3,
        "instruction": "代入 a_n=a_1+(n-1)d",
        "check": "括號先處理。"
      },
      {
        "step": 4,
        "instruction": "若回求 n，解一元一次方程式",
        "check": "檢查n為正整數。"
      },
      {
        "step": 5,
        "instruction": "把答案代回數列",
        "check": "確認位置與項值。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "首項7、公差4，求第12項",
        "reasoning": "a_1=7，d=4。",
        "solutionSteps": [
          "a_1=7，d=4。",
          "a_12=7+11×4=51。"
        ],
        "answer": "51"
      },
      {
        "exampleId": "L2",
        "prompt": "20，17，14，… 求第9項",
        "reasoning": "d=-3。",
        "solutionSteps": [
          "d=-3。",
          "a_9=20+8×(-3)=-4。"
        ],
        "answer": "-4"
      },
      {
        "exampleId": "L3",
        "prompt": "a_5=18，d=6，求a_1",
        "reasoning": "18=a_1+4×6。",
        "solutionSteps": [
          "18=a_1+4×6。",
          "a_1=-6。"
        ],
        "answer": "-6"
      },
      {
        "exampleId": "L4",
        "prompt": "4，9，14，… 中64是第幾項",
        "reasoning": "64=4+(n-1)5。",
        "solutionSteps": [
          "64=4+(n-1)5。",
          "n-1=12，所以n=13。"
        ],
        "answer": "第13項"
      }
    ],
    "difficultyConnections": {
      "basic": "能辨認定義與完成單一步驟。",
      "standard": "能在多個表示間轉換並處理兩至三步推理。",
      "advanced": "能整合位置、條件、反推或代數驗證。",
      "literacy": "能從表格、圖形或實際單位中選擇模型並檢查邊界。"
    },
    "commonMistakes": [
      {
        "mistake": "使用 nd 而不是(n-1)d",
        "why": "首項不需先加公差。",
        "correction": "畫出從1到n的間隔數。"
      },
      {
        "mistake": "負公差漏括號",
        "why": "減少數列會算錯符號。",
        "correction": "代入時寫(n-1)×(-數)。"
      },
      {
        "mistake": "兩項相差位置未計",
        "why": "把總變化直接當公差。",
        "correction": "公差=項值差÷項數位置差。"
      },
      {
        "mistake": "回求n後不檢查整數",
        "why": "項數只能是正整數。",
        "correction": "驗證n的範圍與整數性。"
      },
      {
        "mistake": "把a_n和n對調",
        "why": "一個是項值，一個是位置。",
        "correction": "寫完整方程式。"
      },
      {
        "mistake": "未確認等差",
        "why": "非等差數列公式不成立。",
        "correction": "先看相鄰差。"
      }
    ],
    "selfCheck": [
      "從第1項到第n項是否只走n-1步？",
      "公差的正負號是否正確？",
      "使用不相鄰項時是否除以位置差？",
      "回求的n是否為正整數？",
      "代回後是否得到原題項值？"
    ],
    "summary": [
      "等差通項是首項加上n-1個公差。",
      "可從任一已知項跨越位置差。",
      "負公差與分數公差同樣適用。",
      "回求項數必須檢查正整數。"
    ],
    "connections": {
      "previous": "承接數列規律中的固定相鄰差。",
      "next": [
        "下一技能會專門由不同已知條件求公差。",
        "之後等差級數會把多個等差項相加。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u14-s002-v001",
        "u14-s002-v002",
        "u14-s002-v003",
        "u14-s002-v004",
        "u14-s002-v005",
        "u14-s002-v006",
        "u14-s002-v007",
        "u14-s002-v008",
        "u14-s002-v009",
        "u14-s002-v010",
        "u14-s002-v011",
        "u14-s002-v012"
      ],
      "constructedResponseIds": [
        "u14-s002-cr001",
        "u14-s002-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "capBoundary": "pass",
      "undefinedSymbolAudit": "pass",
      "futureKnowledgeLeakage": "pass",
      "examplesNotCopiedFromQuestionBank": true,
      "reviewVersion": "human-lecture-review-r4.0",
      "reviewedAt": "2026-07-12",
      "reviewNote": "逐段檢查「等差數列第 n 項」的定義、符號、適用條件與六類常見錯誤；四個例題均以不同數值與推理路徑重算，並確認未直接複製本技能題庫題幹。"
    },
    "contentSha256": "fb3e1016fcf363e546faaacdeab3e4e26cdb746f378367ad58ea319b81b6e8c6"
  },
  "mcQuestions": [
    {
      "questionId": "u14-s002-v001",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-nth",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等差數列首項為 4，公差為 3，則第 10 項是多少？",
      "givenConditions": [
        "a_1=4",
        "d=3"
      ],
      "target": "求a_10",
      "choices": [
        "27",
        "31",
        "30",
        "34"
      ],
      "answerIndex": 1,
      "independentSolution": "由首項到第10項有9個間隔，所以4+9×3=31。",
      "mainExplanation": "依題意依序處理：寫通項公式。；代入a_1=4、d=3、n=10。，所以唯一正確選項是「31」。",
      "steps": [
        "寫通項公式。",
        "代入a_1=4、d=3、n=10。"
      ],
      "optionAnalysis": [
        {
          "choice": "27",
          "truth": false,
          "reason": "27只算9×3，漏首項。"
        },
        {
          "choice": "31",
          "truth": true,
          "reason": "a_10=4+(10-1)×3=31。"
        },
        {
          "choice": "30",
          "truth": false,
          "reason": "30把第10項誤作10×3。"
        },
        {
          "choice": "34",
          "truth": false,
          "reason": "34使用10次公差。"
        }
      ],
      "misconceptionTarget": "把n當成公差出現次數。",
      "prerequisiteSkillIds": [
        "sequence-pattern"
      ],
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "n為正整數；公差正且答案精確。",
      "difficultyReason": "基礎：資料完整，只需一次通項代入。",
      "literacyContextNecessity": null,
      "authoringIntent": "直接使用等差通項。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c756e1a3f6e2f9338b1cacbbb995a203c8dc32bb6ad320f0b71f9a588a4ef001"
    },
    {
      "questionId": "u14-s002-v002",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-nth",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等差數列 20，18，16，… 的第 7 項是多少？",
      "givenConditions": [
        "前3項20、18、16"
      ],
      "target": "求第7項",
      "choices": [
        "6",
        "10",
        "12",
        "8"
      ],
      "answerIndex": 3,
      "independentSolution": "由第1項20到第7項共6步，每步減2：20-12=8。",
      "mainExplanation": "依題意依序處理：求d=18-20=-2。；代入n-1=6。，所以唯一正確選項是「8」。",
      "steps": [
        "求d=18-20=-2。",
        "代入n-1=6。"
      ],
      "optionAnalysis": [
        {
          "choice": "6",
          "truth": false,
          "reason": "6是多減一次。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "10是少減一次。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "12只減4次。"
        },
        {
          "choice": "8",
          "truth": true,
          "reason": "公差為-2，a_7=20+6×(-2)=8。"
        }
      ],
      "misconceptionTarget": "把負公差的步數算成7次。",
      "prerequisiteSkillIds": [
        "sequence-pattern"
      ],
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "公差為-2；負號已置於括號中。",
      "difficultyReason": "基礎：需先辨認負公差，再代入單一公式。",
      "literacyContextNecessity": null,
      "authoringIntent": "處理負公差的通項。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5a92aef7e503e151608bd96d23445cdb814f3f7b8ad28b776c06b4cff7f264a2"
    },
    {
      "questionId": "u14-s002-v003",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-nth",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等差數列 1/2，1，3/2，2，… 的第 9 項是多少？",
      "givenConditions": [
        "前四項"
      ],
      "target": "求第9項",
      "choices": [
        "9/2",
        "4",
        "5",
        "11/2"
      ],
      "answerIndex": 0,
      "independentSolution": "a_9=1/2+(9-1)(1/2)=1/2+4=9/2。",
      "mainExplanation": "依題意依序處理：辨認分數公差1/2。；通分後相加。，所以唯一正確選項是「9/2」。",
      "steps": [
        "辨認分數公差1/2。",
        "通分後相加。"
      ],
      "optionAnalysis": [
        {
          "choice": "9/2",
          "truth": true,
          "reason": "首項1/2、公差1/2，a_9=1/2+8×1/2=9/2。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "4是少加一次1/2。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "5是多加一次1/2。"
        },
        {
          "choice": "11/2",
          "truth": false,
          "reason": "11/2多算兩次公差。"
        }
      ],
      "misconceptionTarget": "把第9項直接算成9×1/2卻不說明首項，或分數步數錯。",
      "prerequisiteSkillIds": [
        "sequence-pattern"
      ],
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "答案以最簡分數表示；無近似。",
      "difficultyReason": "基礎：概念單純，但要求精確處理分數。",
      "literacyContextNecessity": null,
      "authoringIntent": "使用分數公差。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "741be2f0ba1cfea81f3440ca7585811cb95f5272d15f3d76e12cb19f80e388a6"
    },
    {
      "questionId": "u14-s002-v004",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-nth",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "某等差數列第 4 項為 17，公差為 5，首項是多少？",
      "givenConditions": [
        "a_4=17",
        "d=5"
      ],
      "target": "求a_1",
      "choices": [
        "-3",
        "7",
        "2",
        "12"
      ],
      "answerIndex": 2,
      "independentSolution": "第1項到第4項只有3步，a_1=17-3×5=2。",
      "mainExplanation": "依題意依序處理：建立17=a_1+3×5。；解出a_1。，所以唯一正確選項是「2」。",
      "steps": [
        "建立17=a_1+3×5。",
        "解出a_1。"
      ],
      "optionAnalysis": [
        {
          "choice": "-3",
          "truth": false,
          "reason": "-3是錯把4次公差扣除。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "7只扣2次公差。"
        },
        {
          "choice": "2",
          "truth": true,
          "reason": "a_4=a_1+3d，所以17=a_1+15，a_1=2。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "12只扣1次公差。"
        }
      ],
      "misconceptionTarget": "用第4項減4個公差。",
      "prerequisiteSkillIds": [
        "sequence-pattern"
      ],
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "位置差4-1=3；唯一解。",
      "difficultyReason": "標準：需反向使用通項並正確處理位置差。",
      "literacyContextNecessity": null,
      "authoringIntent": "由後項回推首項。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3d4ceda02b70c22bc67f1116cdf6f3cbd56215dcb084a5acb7a46ce42fd5994c"
    },
    {
      "questionId": "u14-s002-v005",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-nth",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等差數列的第3項是10，第8項是30。若先求出公差，再求第10項，結果是多少？",
      "givenConditions": [
        "a3=10",
        "a8=30",
        "等差數列"
      ],
      "target": "由兩個非首項資料推求更後面的項",
      "choices": [
        "34",
        "36",
        "38",
        "40"
      ],
      "answerIndex": 2,
      "independentSolution": "從第3項到第8項跨5個公差，d=(30−10)/5=4。第10項比第8項再多2個公差，所以a10=30+2×4=38。",
      "mainExplanation": "先由兩項的項次差求公差4，再從第8項前進兩項。；完整檢查：從第3項到第8項跨5個公差，d=(30−10)/5=4。第10項比第8項再多2個公差，所以a10=30+2×4=38。",
      "steps": [
        "由(30−10)/(8−3)求d=4。",
        "從第8項前進兩個公差。",
        "30+2×4=38。"
      ],
      "optionAnalysis": [
        {
          "choice": "34",
          "truth": false,
          "reason": "34只加一個公差。"
        },
        {
          "choice": "36",
          "truth": false,
          "reason": "36把兩個公差算成6。"
        },
        {
          "choice": "38",
          "truth": true,
          "reason": "正確為38。"
        },
        {
          "choice": "40",
          "truth": false,
          "reason": "40把項次差5誤作公差。"
        }
      ],
      "misconceptionTarget": "用項次差直接當公差或前進項數錯誤。",
      "prerequisiteSkillIds": [
        "sequence-pattern"
      ],
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "項次差與公差個數明確。",
      "difficultyReason": "標準：整合兩點求公差與指定項。",
      "literacyContextNecessity": null,
      "authoringIntent": "由不相鄰項求公差。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a67d17d013039fc66f64c70c85a4deade047c9ac64f710e62f723a19e5624b27"
    },
    {
      "questionId": "u14-s002-v006",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-nth",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等差數列的第 n 項為 a_n=7-3(n-1)，則 a_12 等於多少？",
      "givenConditions": [
        "通項a_n=7-3(n-1)"
      ],
      "target": "求a_12",
      "choices": [
        "-26",
        "-29",
        "-23",
        "40"
      ],
      "answerIndex": 0,
      "independentSolution": "代n=12，括號內為11；7-33=-26。",
      "mainExplanation": "依題意依序處理：代入n=12。；先算乘法再相減。，所以唯一正確選項是「-26」。",
      "steps": [
        "代入n=12。",
        "先算乘法再相減。"
      ],
      "optionAnalysis": [
        {
          "choice": "-26",
          "truth": true,
          "reason": "a_12=7-3×11=7-33=-26。"
        },
        {
          "choice": "-29",
          "truth": false,
          "reason": "-29是把n當12次公差。"
        },
        {
          "choice": "-23",
          "truth": false,
          "reason": "-23是只減10次公差。"
        },
        {
          "choice": "40",
          "truth": false,
          "reason": "40把負公差改成正。"
        }
      ],
      "misconceptionTarget": "忽略(n-1)或負號。",
      "prerequisiteSkillIds": [
        "sequence-pattern"
      ],
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "n=12正整數；精確整數。",
      "difficultyReason": "標準：包含負公差與括號運算，需控制符號。",
      "literacyContextNecessity": null,
      "authoringIntent": "由已給通項求指定項。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "97309cc6a1dee4276624a9530bb757660443853f8f9e5395e8e86803bead59c2"
    },
    {
      "questionId": "u14-s002-v007",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-nth",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等差數列中 a_5=-2、a_13=30，則首項 a_1 是多少？",
      "givenConditions": [
        "a_5=-2",
        "a_13=30"
      ],
      "target": "求a_1",
      "choices": [
        "-22",
        "-14",
        "2",
        "-18"
      ],
      "answerIndex": 3,
      "independentSolution": "第5到第13項跨8步，d=4；第1到第5項跨4步，所以a_1=-2-16=-18。",
      "mainExplanation": "依題意依序處理：由兩個非相鄰項求d。；從第5項回推4步。，所以唯一正確選項是「-18」。",
      "steps": [
        "由兩個非相鄰項求d。",
        "從第5項回推4步。"
      ],
      "optionAnalysis": [
        {
          "choice": "-22",
          "truth": false,
          "reason": "-22是從a_5多退一步。"
        },
        {
          "choice": "-14",
          "truth": false,
          "reason": "-14是只退3個公差。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "2是符號與回推方向錯。"
        },
        {
          "choice": "-18",
          "truth": true,
          "reason": "先求d=(30-(-2))/(13-5)=32/8=4，再由a_5=a_1+4d得a_1=-18。"
        }
      ],
      "misconceptionTarget": "直接用兩項值差當公差，或回推步數錯。",
      "prerequisiteSkillIds": [
        "sequence-pattern"
      ],
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "位置差分別8與4；負值首項允許。",
      "difficultyReason": "進階：需先由不相鄰項求公差，再回推首項。",
      "literacyContextNecessity": null,
      "authoringIntent": "兩階段反推首項。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "373311aca46865e07a45e45c7239ddf840294d4addf01b8d05b8e0d533932885"
    },
    {
      "questionId": "u14-s002-v008",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-nth",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等差數列中 a_2=5、a_7=-10，則第 20 項是多少？",
      "givenConditions": [
        "a_2=5",
        "a_7=-10"
      ],
      "target": "求a_20",
      "choices": [
        "-46",
        "-49",
        "-52",
        "-55"
      ],
      "answerIndex": 1,
      "independentSolution": "由第2到第7項跨5步，d=-15/5=-3；第2到第20項跨18步，故5+18(-3)=-49。",
      "mainExplanation": "依題意依序處理：求公差-3。；由a_2直接跨18步。，所以唯一正確選項是「-49」。",
      "steps": [
        "求公差-3。",
        "由a_2直接跨18步。"
      ],
      "optionAnalysis": [
        {
          "choice": "-46",
          "truth": false,
          "reason": "-46是只跨17步。"
        },
        {
          "choice": "-49",
          "truth": true,
          "reason": "d=(-10-5)/(7-2)=-3，a_20=a_2+(20-2)(-3)=5-54=-49。"
        },
        {
          "choice": "-52",
          "truth": false,
          "reason": "-52是多跨1步。"
        },
        {
          "choice": "-55",
          "truth": false,
          "reason": "-55把起點5漏掉。"
        }
      ],
      "misconceptionTarget": "使用20-1而不是20-2。",
      "prerequisiteSkillIds": [
        "sequence-pattern"
      ],
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "使用a_n=a_k+(n-k)d；答案精確。",
      "difficultyReason": "進階：需要兩段位置差與負公差運算。",
      "literacyContextNecessity": null,
      "authoringIntent": "從非首項直接求遠項。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d26757fe52874fc50e879617af0b5717545d90c049a39fee89d954fc0e38b314"
    },
    {
      "questionId": "u14-s002-v009",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-nth",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等差數列首項為 7、公差為 6。數值 103 是此數列的第幾項？",
      "givenConditions": [
        "a_1=7",
        "d=6",
        "a_n=103"
      ],
      "target": "求n",
      "choices": [
        "17",
        "16",
        "18",
        "19"
      ],
      "answerIndex": 0,
      "independentSolution": "解方程式：103-7=96，96÷6=16個間隔，從第1項起故項數為17。代回7+16×6=103。",
      "mainExplanation": "依題意依序處理：建立通項方程式。；解n並代回。，所以唯一正確選項是「17」。",
      "steps": [
        "建立通項方程式。",
        "解n並代回。"
      ],
      "optionAnalysis": [
        {
          "choice": "17",
          "truth": true,
          "reason": "103=7+(n-1)6，96=6(n-1)，n-1=16，所以n=17。"
        },
        {
          "choice": "16",
          "truth": false,
          "reason": "16是把間隔數當項數。"
        },
        {
          "choice": "18",
          "truth": false,
          "reason": "18是多加1。"
        },
        {
          "choice": "19",
          "truth": false,
          "reason": "19不滿足代回。"
        }
      ],
      "misconceptionTarget": "求得16個間隔後忘記加1。",
      "prerequisiteSkillIds": [
        "sequence-pattern"
      ],
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "n=17為正整數；目標值確實落在數列上。",
      "difficultyReason": "進階：需解方程式並檢查項數與間隔數的差別。",
      "literacyContextNecessity": null,
      "authoringIntent": "由項值回求項數。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a5a9780c749387d5a226cacd7553f846a766786b4d248fe8c5d88af077a3a8b6"
    },
    {
      "questionId": "u14-s002-v010",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-nth",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "一座小劇場第 1 排有 18 個座位，之後每排比前一排多 4 個。第 25 排有幾個座位？",
      "givenConditions": [
        "首排18席",
        "每排多4席"
      ],
      "target": "第25排座位數",
      "choices": [
        "110",
        "118",
        "114",
        "122"
      ],
      "answerIndex": 2,
      "independentSolution": "座位數形成等差數列，a_25=18+(25-1)×4=18+96=114席。",
      "mainExplanation": "依題意依序處理：辨認排數為項次。；用24個間隔計算。，所以唯一正確選項是「114」。",
      "steps": [
        "辨認排數為項次。",
        "用24個間隔計算。"
      ],
      "optionAnalysis": [
        {
          "choice": "110",
          "truth": false,
          "reason": "110是少算一次增量。"
        },
        {
          "choice": "118",
          "truth": false,
          "reason": "118是把25次增量都算入。"
        },
        {
          "choice": "114",
          "truth": true,
          "reason": "第25排比第1排多24次，每次4席：18+24×4=114。"
        },
        {
          "choice": "122",
          "truth": false,
          "reason": "122是多算兩次。"
        }
      ],
      "misconceptionTarget": "將25排誤當成25次增加。",
      "prerequisiteSkillIds": [
        "sequence-pattern"
      ],
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "答案單位為席；不計前25排總和。",
      "difficultyReason": "素養：需把排號與該排座位數分離，且只求單排而非全場總座位。",
      "literacyContextNecessity": "劇場排數與座位數是不同量，情境提供必要的項次與單位判讀。",
      "authoringIntent": "在排座位情境中求指定一排。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a484b468bfa7ae61610c6685f8eef8ea618caedf0873ec2bad577465acd7a3ee"
    },
    {
      "questionId": "u14-s002-v011",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-nth",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "一個會員點數方案在第 1 天有 120 點，之後每天結算後比前一天少 7 點。第 16 天結算後有幾點？",
      "givenConditions": [
        "第1天120點",
        "每天少7點"
      ],
      "target": "第16天餘額",
      "choices": [
        "8",
        "15",
        "22",
        "105"
      ],
      "answerIndex": 1,
      "independentSolution": "a_16=120+(16-1)(-7)=120-105=15點。",
      "mainExplanation": "依題意依序處理：公差記為-7。；計算15次減少。，所以唯一正確選項是「15」。",
      "steps": [
        "公差記為-7。",
        "計算15次減少。"
      ],
      "optionAnalysis": [
        {
          "choice": "8",
          "truth": false,
          "reason": "8是減少16次。"
        },
        {
          "choice": "15",
          "truth": true,
          "reason": "從第1天到第16天減少15次：120-15×7=15。"
        },
        {
          "choice": "22",
          "truth": false,
          "reason": "22是只減少14次。"
        },
        {
          "choice": "105",
          "truth": false,
          "reason": "105是把天數15當減少量。"
        }
      ],
      "misconceptionTarget": "把「第16天」當成16次扣點。",
      "prerequisiteSkillIds": [
        "sequence-pattern"
      ],
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "第16天為15點仍非負；模型未延伸到負點數。",
      "difficultyReason": "素養：必須確認每天的單次餘額仍非負，並把日數轉為位置。",
      "literacyContextNecessity": "點數情境提供不能任意四捨五入與需檢查非負的實際邊界。",
      "authoringIntent": "處理每日固定下降的點數。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f8047693fa848094f6c9f803c6f923f13f92f10b5379ca884988be696aade384"
    },
    {
      "questionId": "u14-s002-v012",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-nth",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "海拔標記從第 1 個的 -30 公尺開始，之後每一個標記比前一個高 12 公尺。第一個海拔不低於 0 公尺的是第幾個標記？",
      "givenConditions": [
        "首標-30公尺",
        "每標高12公尺"
      ],
      "target": "首次非負的標記序號",
      "choices": [
        "3",
        "5",
        "6",
        "4"
      ],
      "answerIndex": 3,
      "independentSolution": "逐項或解不等式：-30+12(n-1)≥0，n≥3.5，最小正整數n=4；檢查a_3=-6<0、a_4=6≥0。",
      "mainExplanation": "依題意依序處理：建立等差通項。；取最小可行整數並檢查前一項。，所以唯一正確選項是「4」。",
      "steps": [
        "建立等差通項。",
        "取最小可行整數並檢查前一項。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "第3個仍為-6公尺。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "第5個雖達標但不是第一個。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "第6個也不是最早達標。"
        },
        {
          "choice": "4",
          "truth": true,
          "reason": "a_n=-30+12(n-1)。第3個為-6，第4個為6，所以第一個不低於0的是第4個。"
        }
      ],
      "misconceptionTarget": "解出3.5後直接報3.5個標記，或未檢查首次。",
      "prerequisiteSkillIds": [
        "sequence-pattern"
      ],
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "estimatedTimeSec": 120,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "標記序號只能是正整數；需同時驗a_3與a_4。",
      "difficultyReason": "素養：結合等差通項、不等式、整數性與首次達標驗證。",
      "literacyContextNecessity": "海拔與「第一個不低於0」提供門檻及整數項次限制，不能刪除而保持同一任務。",
      "authoringIntent": "求首次跨越門檻的項次。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1e2a96ee65a0532ef224eea800f61b7172b5506d1eda67ed754c26623305b24e"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u14-s002-cr001",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-nth",
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "某等差數列第 6 項為 23，第 14 項為 55。求公差、首項與第 25 項。",
      "requiredWork": [
        "由兩項求公差。",
        "回推首項。",
        "求第25項並驗算。"
      ],
      "fullCreditSolution": [
        "d=(55-23)/(14-6)=32/8=4。",
        "a_1=23-(6-1)×4=3。",
        "a_25=3+24×4=99。",
        "檢查a_14=3+13×4=55。"
      ],
      "alternativeSolutions": [
        "可從a_14直接跨到a_25：55+(25-14)×4=99，再回推首項。"
      ],
      "reasoningSteps": [
        "d=(55-23)/(14-6)=32/8=4。",
        "a_1=23-(6-1)×4=3。",
        "a_25=3+24×4=99。",
        "檢查a_14=3+13×4=55。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "d=4、a_1=3、a_25=99全部正確，且位置差8與5處理清楚。"
        },
        {
          "score": 2,
          "criteria": "公差正確且另兩量中僅一個算術錯；或方法完整但最後抄錯。"
        },
        {
          "score": 1,
          "criteria": "能由兩項求得d=4，但未正確完成首項與第25項。"
        },
        {
          "score": 0,
          "criteria": "把32當公差或無可辨識等差方法。"
        }
      ],
      "partialCreditRules": [
        "三個答案各有角色，但公差為後續核心；公差錯時最高1分，除非只是單一算術筆誤且後續錯誤追隨一致。"
      ],
      "followThroughPolicy": "若公差因算術筆誤為錯值，但首項與第25項皆一致依該錯值計算，可給方法分至2分。",
      "unitAndNotationRules": "無單位；項次均為正整數。",
      "answerOnlyPolicy": "只列99且無過程，最多1分。",
      "commonErrors": [
        "將14-6算成9。",
        "由第6項回推時減6個公差。"
      ],
      "figureDrawingSpecRef": null,
      "independentReview": {
        "derivedResult": "d=4，a_1=3，a_25=99。",
        "ambiguity": "資料足以唯一決定等差數列。",
        "unitBoundaryCheck": "無單位；項次均為正整數。",
        "decision": "pass",
        "reviewNote": "獨立依題目條件重新推導，得到「d=4，a_1=3，a_25=99。」。評分規準逐分對應本題必要步驟，並已檢查錯誤追隨與只寫答案的處理。"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a799475ed36d3fb7cc54ffec4be229713395b715894261ceb27de706cd1ad1a8"
    },
    {
      "questionId": "u14-s002-cr002",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-nth",
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "等差數列首項為 -8，公差為 5。數值 67 是否為此數列中的某一項？若是，求項次；若不是，說明原因。",
      "requiredWork": [
        "建立通項方程式。",
        "判斷項次是否為正整數。",
        "明確回答是否屬於數列。"
      ],
      "fullCreditSolution": [
        "令67=-8+(n-1)5。",
        "75=5(n-1)，所以n-1=15，n=16。",
        "n=16為正整數，因此67是第16項。"
      ],
      "alternativeSolutions": [
        "可逐項或從-8每次加5，確認第16項為67，但需說明15個間隔。"
      ],
      "reasoningSteps": [
        "令67=-8+(n-1)5。",
        "75=5(n-1)，所以n-1=15，n=16。",
        "n=16為正整數，因此67是第16項。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確建立方程式、求n=16並作正整數判斷。"
        },
        {
          "score": 2,
          "criteria": "答案第16項正確且有通項或間隔說明，但整數性說明略。"
        },
        {
          "score": 1,
          "criteria": "只算出15個間隔卻答第15項，或只答是且無過程。"
        },
        {
          "score": 0,
          "criteria": "答案與等差規律不符。"
        }
      ],
      "partialCreditRules": [
        "若算出n=16但漏寫「是」，由結論可推知，仍可得3分。"
      ],
      "followThroughPolicy": "若將75÷5算錯但方程式正確，依算術錯保留2分。",
      "unitAndNotationRules": "無單位；項次必須是正整數。",
      "answerOnlyPolicy": "只答「第16項」最多1分。",
      "commonErrors": [
        "把15個間隔當第15項。",
        "把-8移項時算成59。"
      ],
      "figureDrawingSpecRef": null,
      "independentReview": {
        "derivedResult": "67是第16項。",
        "ambiguity": "方程式唯一解且為正整數。",
        "unitBoundaryCheck": "無單位；項次必須是正整數。",
        "decision": "pass",
        "reviewNote": "獨立依題目條件重新推導，得到「67是第16項。」。評分規準逐分對應本題必要步驟，並已檢查錯誤追隨與只寫答案的處理。"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "37deb84310ecf0b10ee4def93d411728ec1737c765df3a46a5f5713aa6064485"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u14-s002-v001",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-nth",
      "contentSha256": "c756e1a3f6e2f9338b1cacbbb995a203c8dc32bb6ad320f0b71f9a588a4ef001",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "由首項到第10項有9個間隔，所以4+9×3=31。",
      "derivedAnswer": "31",
      "storedAnswer": "31",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「31」符合。其餘三項各自違反：27只算9×3，漏首項。；30把第10項誤作10×3。；34使用10次公差。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差數列第 n 項」講義中定義；本題目標為「求a_10」。",
        "unitConflict": "n為正整數；公差正且答案精確。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「31」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：n為正整數；公差正且答案精確。",
        "alternateReading": "最可能的誤讀是「把n當成公差出現次數。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：資料完整，只需一次通項代入。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等差數列首項為 4，公差為 3，則第 10 項是多少？」獨立重算為：由首項到第10項有9個間隔，所以4+9×3=31。 四選項逐項核對後唯一正解為「31」；邊界檢查：n為正整數；公差正且答案精確。",
      "reviewContentSha256": "cafe3450730117f9022f4d77f44b210ba9deca56a37c438a75de96448a692057"
    },
    {
      "questionId": "u14-s002-v002",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-nth",
      "contentSha256": "5a92aef7e503e151608bd96d23445cdb814f3f7b8ad28b776c06b4cff7f264a2",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "由第1項20到第7項共6步，每步減2：20-12=8。",
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
        "secondCorrectAnswer": "逐項重算四個選項後，只有「8」符合。其餘三項各自違反：6是多減一次。；10是少減一次。；12只減4次。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差數列第 n 項」講義中定義；本題目標為「求第7項」。",
        "unitConflict": "公差為-2；負號已置於括號中。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「8」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：公差為-2；負號已置於括號中。",
        "alternateReading": "最可能的誤讀是「把負公差的步數算成7次。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：需先辨認負公差，再代入單一公式。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等差數列 20，18，16，… 的第 7 項是多少？」獨立重算為：由第1項20到第7項共6步，每步減2：20-12=8。 四選項逐項核對後唯一正解為「8」；邊界檢查：公差為-2；負號已置於括號中。",
      "reviewContentSha256": "503a6362412c248dd4ec3d4d9bd3ede693c16859dffaff5c89dbcdddcc0feb48"
    },
    {
      "questionId": "u14-s002-v003",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-nth",
      "contentSha256": "741be2f0ba1cfea81f3440ca7585811cb95f5272d15f3d76e12cb19f80e388a6",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "a_9=1/2+(9-1)(1/2)=1/2+4=9/2。",
      "derivedAnswer": "9/2",
      "storedAnswer": "9/2",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「9/2」符合。其餘三項各自違反：4是少加一次1/2。；5是多加一次1/2。；11/2多算兩次公差。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差數列第 n 項」講義中定義；本題目標為「求第9項」。",
        "unitConflict": "答案以最簡分數表示；無近似。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「9/2」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：答案以最簡分數表示；無近似。",
        "alternateReading": "最可能的誤讀是「把第9項直接算成9×1/2卻不說明首項，或分數步數錯。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：概念單純，但要求精確處理分數。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等差數列 1/2，1，3/2，2，… 的第 9 項是多少？」獨立重算為：a_9=1/2+(9-1)(1/2)=1/2+4=9/2。 四選項逐項核對後唯一正解為「9/2」；邊界檢查：答案以最簡分數表示；無近似。",
      "reviewContentSha256": "216ab2f0869d6efc1979806a19a18ec178b4e014f5a170bb3f3072174ba4ee28"
    },
    {
      "questionId": "u14-s002-v004",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-nth",
      "contentSha256": "3d4ceda02b70c22bc67f1116cdf6f3cbd56215dcb084a5acb7a46ce42fd5994c",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "第1項到第4項只有3步，a_1=17-3×5=2。",
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
        "secondCorrectAnswer": "逐項重算四個選項後，只有「2」符合。其餘三項各自違反：-3是錯把4次公差扣除。；7只扣2次公差。；12只扣1次公差。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差數列第 n 項」講義中定義；本題目標為「求a_1」。",
        "unitConflict": "位置差4-1=3；唯一解。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「2」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：位置差4-1=3；唯一解。",
        "alternateReading": "最可能的誤讀是「用第4項減4個公差。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：需反向使用通項並正確處理位置差。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某等差數列第 4 項為 17，公差為 5，首項是多少？」獨立重算為：第1項到第4項只有3步，a_1=17-3×5=2。 四選項逐項核對後唯一正解為「2」；邊界檢查：位置差4-1=3；唯一解。",
      "reviewContentSha256": "0fd3059e1bce92145b485d6590629127f52f4b642359deafbb448d08744b364c"
    },
    {
      "questionId": "u14-s002-v005",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-nth",
      "contentSha256": "a67d17d013039fc66f64c70c85a4deade047c9ac64f710e62f723a19e5624b27",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "從第3項到第8項跨5個公差，d=(30−10)/5=4。第10項比第8項再多2個公差，所以a10=30+2×4=38。",
      "derivedAnswer": "38",
      "storedAnswer": "38",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回後只有「38」成立；其他三項分別因：34只加一個公差。；36把兩個公差算成6。；40把項次差5誤作公差。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差數列第 n 項」講義中定義；本題目標為「求d」。",
        "unitConflict": "兩項屬同一等差數列；位置差非0。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「4」，沒有近似取整導致第二答案。",
        "domainBoundary": "項次差與公差個數明確。；項次、間隔、正負號與會考範圍均已逐項核對。",
        "alternateReading": "題幹明確要求「由兩個非首項資料推求更後面的項」，沒有第二種合理所求。"
      },
      "difficultyReason": "標準：整合兩點求公差與指定項。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "languageCheck": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "u14-s002-v005 中央修訂後獨立重算：從第3項到第8項跨5個公差，d=(30−10)/5=4。第10項比第8項再多2個公差，所以a10=30+2×4=38。 四個選項逐項核對，唯一正解為「38」；其餘選項排除理由為：34只加一個公差。；36把兩個公差算成6。；40把項次差5誤作公差。",
      "reviewContentSha256": "9f40a30ba9698964a5ff4343b5e1230fef555271ab6d35e48afb3ef7531ff0da"
    },
    {
      "questionId": "u14-s002-v006",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-nth",
      "contentSha256": "97309cc6a1dee4276624a9530bb757660443853f8f9e5395e8e86803bead59c2",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "代n=12，括號內為11；7-33=-26。",
      "derivedAnswer": "-26",
      "storedAnswer": "-26",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「-26」符合。其餘三項各自違反：-29是把n當12次公差。；-23是只減10次公差。；40把負公差改成正。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差數列第 n 項」講義中定義；本題目標為「求a_12」。",
        "unitConflict": "n=12正整數；精確整數。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「-26」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：n=12正整數；精確整數。",
        "alternateReading": "最可能的誤讀是「忽略(n-1)或負號。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：包含負公差與括號運算，需控制符號。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等差數列的第 n 項為 a_n=7-3(n-1)，則 a_12 等於多少？」獨立重算為：代n=12，括號內為11；7-33=-26。 四選項逐項核對後唯一正解為「-26」；邊界檢查：n=12正整數；精確整數。",
      "reviewContentSha256": "644ecde1973d8f2b7acd0f7cd706027b8df7aaaa71aee5a2b351f089da75aa31"
    },
    {
      "questionId": "u14-s002-v007",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-nth",
      "contentSha256": "373311aca46865e07a45e45c7239ddf840294d4addf01b8d05b8e0d533932885",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "第5到第13項跨8步，d=4；第1到第5項跨4步，所以a_1=-2-16=-18。",
      "derivedAnswer": "-18",
      "storedAnswer": "-18",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「-18」符合。其餘三項各自違反：-22是從a_5多退一步。；-14是只退3個公差。；2是符號與回推方向錯。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差數列第 n 項」講義中定義；本題目標為「求a_1」。",
        "unitConflict": "位置差分別8與4；負值首項允許。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「-18」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：位置差分別8與4；負值首項允許。",
        "alternateReading": "最可能的誤讀是「直接用兩項值差當公差，或回推步數錯。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：需先由不相鄰項求公差，再回推首項。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等差數列中 a_5=-2、a_13=30，則首項 a_1 是多少？」獨立重算為：第5到第13項跨8步，d=4；第1到第5項跨4步，所以a_1=-2-16=-18。 四選項逐項核對後唯一正解為「-18」；邊界檢查：位置差分別8與4；負值首項允許。",
      "reviewContentSha256": "f1f31f3073e18210ad028806a2e02c419ffe7e860b2e4edc0cb9313af888f6d5"
    },
    {
      "questionId": "u14-s002-v008",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-nth",
      "contentSha256": "d26757fe52874fc50e879617af0b5717545d90c049a39fee89d954fc0e38b314",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "由第2到第7項跨5步，d=-15/5=-3；第2到第20項跨18步，故5+18(-3)=-49。",
      "derivedAnswer": "-49",
      "storedAnswer": "-49",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「-49」符合。其餘三項各自違反：-46是只跨17步。；-52是多跨1步。；-55把起點5漏掉。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差數列第 n 項」講義中定義；本題目標為「求a_20」。",
        "unitConflict": "使用a_n=a_k+(n-k)d；答案精確。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「-49」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：使用a_n=a_k+(n-k)d；答案精確。",
        "alternateReading": "最可能的誤讀是「使用20-1而不是20-2。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：需要兩段位置差與負公差運算。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等差數列中 a_2=5、a_7=-10，則第 20 項是多少？」獨立重算為：由第2到第7項跨5步，d=-15/5=-3；第2到第20項跨18步，故5+18(-3)=-49。 四選項逐項核對後唯一正解為「-49」；邊界檢查：使用a_n=a_k+(n-k)d；答案精確。",
      "reviewContentSha256": "87b32d886b3b351a85bba41f5c755d5c04a0938397539c40c7085cb8bbc688ad"
    },
    {
      "questionId": "u14-s002-v009",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-nth",
      "contentSha256": "a5a9780c749387d5a226cacd7553f846a766786b4d248fe8c5d88af077a3a8b6",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "解方程式：103-7=96，96÷6=16個間隔，從第1項起故項數為17。代回7+16×6=103。",
      "derivedAnswer": "17",
      "storedAnswer": "17",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「17」符合。其餘三項各自違反：16是把間隔數當項數。；18是多加1。；19不滿足代回。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差數列第 n 項」講義中定義；本題目標為「求n」。",
        "unitConflict": "n=17為正整數；目標值確實落在數列上。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「17」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：n=17為正整數；目標值確實落在數列上。",
        "alternateReading": "最可能的誤讀是「求得16個間隔後忘記加1。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：需解方程式並檢查項數與間隔數的差別。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等差數列首項為 7、公差為 6。數值 103 是此數列的第幾項？」獨立重算為：解方程式：103-7=96，96÷6=16個間隔，從第1項起故項數為17。代回7+16×6=103。 四選項逐項核對後唯一正解為「17」；邊界檢查：n=17為正整數；目標值確實落在數列上。",
      "reviewContentSha256": "3dcca3661be804b7cb63d8b4c0768998d58a2e68922ee0bd5fa7301b1d2e7f70"
    },
    {
      "questionId": "u14-s002-v010",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-nth",
      "contentSha256": "a484b468bfa7ae61610c6685f8eef8ea618caedf0873ec2bad577465acd7a3ee",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "座位數形成等差數列，a_25=18+(25-1)×4=18+96=114席。",
      "derivedAnswer": "114",
      "storedAnswer": "114",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「114」符合。其餘三項各自違反：110是少算一次增量。；118是把25次增量都算入。；122是多算兩次。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差數列第 n 項」講義中定義；本題目標為「第25排座位數」。",
        "unitConflict": "答案單位為席；不計前25排總和。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「114」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：答案單位為席；不計前25排總和。",
        "alternateReading": "最可能的誤讀是「將25排誤當成25次增加。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：需把排號與該排座位數分離，且只求單排而非全場總座位。",
      "literacyContextNecessity": "劇場排數與座位數是不同量，情境提供必要的項次與單位判讀。",
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一座小劇場第 1 排有 18 個座位，之後每排比前一排多 4 個。第 25 排有幾個座位？」獨立重算為：座位數形成等差數列，a_25=18+(25-1)×4=18+96=114席。 四選項逐項核對後唯一正解為「114」；邊界檢查：答案單位為席；不計前25排總和。",
      "reviewContentSha256": "395a7afe0f597bac1e7ad586f625a9c003c1ebb77b993bf4141cb37357789a2c"
    },
    {
      "questionId": "u14-s002-v011",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-nth",
      "contentSha256": "f8047693fa848094f6c9f803c6f923f13f92f10b5379ca884988be696aade384",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "a_16=120+(16-1)(-7)=120-105=15點。",
      "derivedAnswer": "15",
      "storedAnswer": "15",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「15」符合。其餘三項各自違反：8是減少16次。；22是只減少14次。；105是把天數15當減少量。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差數列第 n 項」講義中定義；本題目標為「第16天餘額」。",
        "unitConflict": "第16天為15點仍非負；模型未延伸到負點數。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「15」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：第16天為15點仍非負；模型未延伸到負點數。",
        "alternateReading": "最可能的誤讀是「把「第16天」當成16次扣點。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：必須確認每天的單次餘額仍非負，並把日數轉為位置。",
      "literacyContextNecessity": "點數情境提供不能任意四捨五入與需檢查非負的實際邊界。",
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一個會員點數方案在第 1 天有 120 點，之後每天結算後比前一天少 7 點。第 16 天結算後有幾點？」獨立重算為：a_16=120+(16-1)(-7)=120-105=15點。 四選項逐項核對後唯一正解為「15」；邊界檢查：第16天為15點仍非負；模型未延伸到負點數。",
      "reviewContentSha256": "52153e141c2df4b848f3649cc2d44b2f6ef964125b920e6e1eae2ce8f1b5b9f0"
    },
    {
      "questionId": "u14-s002-v012",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-nth",
      "contentSha256": "1e2a96ee65a0532ef224eea800f61b7172b5506d1eda67ed754c26623305b24e",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "逐項或解不等式：-30+12(n-1)≥0，n≥3.5，最小正整數n=4；檢查a_3=-6<0、a_4=6≥0。",
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
        "secondCorrectAnswer": "逐項重算四個選項後，只有「4」符合。其餘三項各自違反：第3個仍為-6公尺。；第5個雖達標但不是第一個。；第6個也不是最早達標。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差數列第 n 項」講義中定義；本題目標為「首次非負的標記序號」。",
        "unitConflict": "標記序號只能是正整數；需同時驗a_3與a_4。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「4」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：標記序號只能是正整數；需同時驗a_3與a_4。",
        "alternateReading": "最可能的誤讀是「解出3.5後直接報3.5個標記，或未檢查首次。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：結合等差通項、不等式、整數性與首次達標驗證。",
      "literacyContextNecessity": "海拔與「第一個不低於0」提供門檻及整數項次限制，不能刪除而保持同一任務。",
      "prerequisiteCheck": "使用前置技能「數列規律」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「海拔標記從第 1 個的 -30 公尺開始，之後每一個標記比前一個高 12 公尺。第一個海拔不低於 0 公尺的是第幾個標記？」獨立重算為：逐項或解不等式：-30+12(n-1)≥0，n≥3.5，最小正整數n=4；檢查a_3=-6<0、a_4=6≥0。 四選項逐項核對後唯一正解為「4」；邊界檢查：標記序號只能是正整數；需同時驗a_3與a_4。",
      "reviewContentSha256": "4bb5fcaeffb22fcf02ed50af73068c3e498e72b34edcc951ebecf3d7564376dd"
    }
  ],
  "drawingSpecs": []
};
