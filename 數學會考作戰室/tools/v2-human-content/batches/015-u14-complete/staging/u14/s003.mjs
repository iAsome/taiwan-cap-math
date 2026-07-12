// Generated only from reviewed immutable source. Do not hand edit.
export default {
  "lecture": {
    "lectureId": "u14-s003-lecture-r1",
    "unitId": "u14",
    "numericUnitId": 14,
    "topicId": "u14-sequences",
    "skillId": "arithmetic-sequence-common-diff",
    "lockedTitle": "等差公差",
    "title": "等差公差：用項值差除以位置差",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能由相鄰項求公差。",
      "能由不相鄰兩項求公差。",
      "能判斷遺漏項與含參數的等差條件。",
      "能解釋公差的單位與正負意義。"
    ],
    "prerequisiteBridge": [
      {
        "skillId": "arithmetic-sequence-nth",
        "title": "等差數列第 n 項",
        "requiredLevel": "能說明「等差數列第 n 項」的核心定義並完成基本計算，作為本技能的直接前置。"
      }
    ],
    "glossary": [
      {
        "term": "公差",
        "definition": "等差數列中固定的後項減前項。"
      },
      {
        "term": "位置差",
        "definition": "兩已知項的項數相減。"
      },
      {
        "term": "總變化量",
        "definition": "兩項的項值相減。"
      },
      {
        "term": "遞增與遞減",
        "definition": "公差正表示遞增，公差負表示遞減。"
      }
    ],
    "notation": [
      {
        "symbol": "d=a_{k+1}-a_k",
        "meaning": "由相鄰項求公差。"
      },
      {
        "symbol": "d=(a_q-a_p)/(q-p)",
        "meaning": "由第p項與第q項求公差。"
      }
    ],
    "conceptNarrative": [
      "相鄰項只隔一步，所以直接後項減前項。",
      "不相鄰兩項之間跨了多個等長步驟，總變化必須平均分給位置差。",
      "公差的順序固定是後項減前項；顛倒時正負號會反轉。",
      "若數列有實際單位，公差表示每增加一個位置時的單位變化量。"
    ],
    "formalDefinitions": [
      {
        "name": "公差",
        "statement": "a_{n+1}-a_n 的固定值。"
      },
      {
        "name": "位置差",
        "statement": "q-p，代表從第p項到第q項走了幾步。"
      }
    ],
    "formulas": [
      {
        "formula": "d=a_{n+1}-a_n",
        "conditions": [
          "兩項相鄰"
        ],
        "meaning": "一步的變化量。"
      },
      {
        "formula": "d=(a_q-a_p)/(q-p)",
        "conditions": [
          "p≠q",
          "兩項屬同一等差數列"
        ],
        "meaning": "總變化除以步數。"
      }
    ],
    "nonApplicableCases": [
      "不是等差數列時不存在單一公差。",
      "用前項減後項會把正負號倒轉。",
      "不相鄰兩項不可直接把項值差當公差。",
      "含單位時不可省略每項的變化單位。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "寫出兩項的位置與值",
        "check": "避免把值差當位置差。"
      },
      {
        "step": 2,
        "instruction": "算總變化a_q-a_p",
        "check": "保持同一方向。"
      },
      {
        "step": 3,
        "instruction": "算位置差q-p",
        "check": "位置差不可為0。"
      },
      {
        "step": 4,
        "instruction": "相除得到d",
        "check": "必要時約分。"
      },
      {
        "step": 5,
        "instruction": "用另一段相鄰差驗證",
        "check": "確認整個數列一致。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "9，14，19，… 的公差",
        "reasoning": "14-9=5。",
        "solutionSteps": [
          "14-9=5。",
          "19-14也等於5。"
        ],
        "answer": "5"
      },
      {
        "exampleId": "L2",
        "prompt": "a_3=7，a_8=27",
        "reasoning": "總變化20，位置差5。",
        "solutionSteps": [
          "總變化20，位置差5。",
          "d=20÷5=4。"
        ],
        "answer": "4"
      },
      {
        "exampleId": "L3",
        "prompt": "a_2=12，a_6=-4",
        "reasoning": "總變化-16，位置差4。",
        "solutionSteps": [
          "總變化-16，位置差4。",
          "d=-4。"
        ],
        "answer": "-4"
      },
      {
        "exampleId": "L4",
        "prompt": "x，13，21為連續三項",
        "reasoning": "兩段公差相等。",
        "solutionSteps": [
          "兩段公差相等。",
          "13-x=8，所以x=5。"
        ],
        "answer": "x=5"
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
        "mistake": "把q-p算成項數個數",
        "why": "兩端之間的步數少1。",
        "correction": "直接用項次相減。"
      },
      {
        "mistake": "項值差與位置差方向不同",
        "why": "會造成符號錯誤。",
        "correction": "分子分母保持同方向。"
      },
      {
        "mistake": "公差只看絕對值",
        "why": "遞增與遞減意義消失。",
        "correction": "保留正負號。"
      },
      {
        "mistake": "看到兩項就假定等差",
        "why": "兩點可定一個候選公差但不保證全列。",
        "correction": "需要題目明示或更多項驗證。"
      },
      {
        "mistake": "缺項時平均錯段數",
        "why": "插入k項會形成k+1段。",
        "correction": "畫位置格。"
      },
      {
        "mistake": "單位寫成總量單位",
        "why": "公差是每增加一項的變化。",
        "correction": "寫成「每項增加…」。"
      }
    ],
    "selfCheck": [
      "分子與分母方向是否一致？",
      "位置差是否正確？",
      "公差的正負是否符合遞增或遞減？",
      "是否有題意保證等差？",
      "代回兩項是否成立？"
    ],
    "summary": [
      "相鄰公差是後項減前項。",
      "不相鄰公差等於項值差除以位置差。",
      "位置差是步數，不是兩端包含的項數。",
      "公差要保留符號與單位。"
    ],
    "connections": {
      "previous": "使用等差第n項公式中的固定變化量。",
      "next": [
        "固定乘法變化將進入等比數列。",
        "公差也會用於等差中項與級數。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u14-s003-v001",
        "u14-s003-v002",
        "u14-s003-v003",
        "u14-s003-v004",
        "u14-s003-v005",
        "u14-s003-v006",
        "u14-s003-v007",
        "u14-s003-v008",
        "u14-s003-v009",
        "u14-s003-v010",
        "u14-s003-v011",
        "u14-s003-v012"
      ],
      "constructedResponseIds": [
        "u14-s003-cr001",
        "u14-s003-cr002"
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
      "reviewNote": "逐段檢查「等差公差」的定義、符號、適用條件與六類常見錯誤；四個例題均以不同數值與推理路徑重算，並確認未直接複製本技能題庫題幹。"
    },
    "contentSha256": "9c1294a3d201f38da76d79362fe0ff2229f1e2d1a189a1c1c586d7425bc580f9"
  },
  "mcQuestions": [
    {
      "questionId": "u14-s003-v001",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-common-diff",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等差數列 11，15，19，23，… 的公差是多少？",
      "givenConditions": [
        "前四項"
      ],
      "target": "求公差",
      "choices": [
        "3",
        "8",
        "4",
        "12"
      ],
      "answerIndex": 2,
      "independentSolution": "逐段相減：15-11=4、19-15=4、23-19=4，所以公差d=4。",
      "mainExplanation": "依題意依序處理：用後項減前項。；核對至少兩段。，所以唯一正確選項是「4」。",
      "steps": [
        "用後項減前項。",
        "核對至少兩段。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "3不是任何相鄰差。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "8是隔兩項的總變化。"
        },
        {
          "choice": "4",
          "truth": true,
          "reason": "15-11=4，後續19-15與23-19也都是4。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "12是首末已知項的總變化。"
        }
      ],
      "misconceptionTarget": "把兩個間隔的總變化8當公差。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-nth"
      ],
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "公差方向為後項減前項。",
      "difficultyReason": "基礎：直接計算並驗證相鄰差。",
      "literacyContextNecessity": null,
      "authoringIntent": "由相鄰項求正公差。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "95ac33ba5ee9f23863d6da4aa3c95e3b8f905cefb8e1c1cc250720c6adbf6b81"
    },
    {
      "questionId": "u14-s003-v002",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-common-diff",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等差數列 30，24，18，12，… 的公差是多少？",
      "givenConditions": [
        "前四項"
      ],
      "target": "求d",
      "choices": [
        "-6",
        "6",
        "-12",
        "12"
      ],
      "answerIndex": 0,
      "independentSolution": "d=24-30=-6；18-24=-6，故公差為-6。",
      "mainExplanation": "依題意依序處理：後項減前項。；保留負號。，所以唯一正確選項是「-6」。",
      "steps": [
        "後項減前項。",
        "保留負號。"
      ],
      "optionAnalysis": [
        {
          "choice": "-6",
          "truth": true,
          "reason": "24-30=-6，每一步都減6。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "6只取絕對值，失去遞減方向。"
        },
        {
          "choice": "-12",
          "truth": false,
          "reason": "-12是跨兩步的變化。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "12是跨兩步且符號錯。"
        }
      ],
      "misconceptionTarget": "只報變化量大小6而漏掉負號。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-nth"
      ],
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "負公差表示每項減6。",
      "difficultyReason": "基礎：單一步驟，但重點是保留遞減符號。",
      "literacyContextNecessity": null,
      "authoringIntent": "由相鄰項求負公差。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3dcabf48da9dd15ba56683c7c6488b9453a5ad02b7d7ca84da17df507c4a0fef"
    },
    {
      "questionId": "u14-s003-v003",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-common-diff",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "某等差數列 a_9=41、a_10=46，公差是多少？",
      "givenConditions": [
        "a_9=41",
        "a_10=46"
      ],
      "target": "求d",
      "choices": [
        "4",
        "9",
        "87",
        "5"
      ],
      "answerIndex": 3,
      "independentSolution": "第9與第10項只隔一步，公差=46-41=5。",
      "mainExplanation": "依題意依序處理：確認項次相鄰。；用後項減前項。，所以唯一正確選項是「5」。",
      "steps": [
        "確認項次相鄰。",
        "用後項減前項。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "4是項次差的誤讀。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "9是把第9項項次當公差。"
        },
        {
          "choice": "87",
          "truth": false,
          "reason": "87是把兩項相加。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "兩項相鄰，所以d=a_10-a_9=46-41=5。"
        }
      ],
      "misconceptionTarget": "看到下標9、10而把9或1當成公差。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-nth"
      ],
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "下標是位置，不參與項值相減。",
      "difficultyReason": "基礎：辨認下標與項值後做一次減法。",
      "literacyContextNecessity": null,
      "authoringIntent": "由符號化相鄰項求公差。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "bb25c81425232c97e424da52a6185cf72a271b7c04527ed5dc2322e4e1d391e3"
    },
    {
      "questionId": "u14-s003-v004",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-common-diff",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等差數列中，第3項為8，第7項為24。學生說「兩項相差16，所以公差是16」。他的錯誤是什麼？",
      "givenConditions": [
        "a3=8",
        "a7=24",
        "等差數列"
      ],
      "target": "診斷公差計算中的間隔數",
      "choices": [
        "應除以3個間隔",
        "應除以4個間隔",
        "應除以7個間隔",
        "不必相減"
      ],
      "answerIndex": 1,
      "independentSolution": "第3項到第7項經過7−3=4個公差，因此d=(24−8)/4=4；學生漏除以4個間隔。",
      "mainExplanation": "把項次差7−3轉成公差的個數。；完整檢查：第3項到第7項經過7−3=4個公差，因此d=(24−8)/4=4；學生漏除以4個間隔。",
      "steps": [
        "計算項次差7−3=4。",
        "把總差24−8=16除以4。"
      ],
      "optionAnalysis": [
        {
          "choice": "應除以3個間隔",
          "truth": false,
          "reason": "不是3個間隔。"
        },
        {
          "choice": "應除以4個間隔",
          "truth": true,
          "reason": "共有4個間隔。"
        },
        {
          "choice": "應除以7個間隔",
          "truth": false,
          "reason": "7是項次不是間隔數。"
        },
        {
          "choice": "不必相減",
          "truth": false,
          "reason": "相減仍是必要步驟。"
        }
      ],
      "misconceptionTarget": "把兩項總差直接當公差。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-nth"
      ],
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "只問錯誤原因，間隔數唯一。",
      "difficultyReason": "標準：錯誤分析項數與間隔數。",
      "literacyContextNecessity": null,
      "authoringIntent": "由不相鄰兩項求公差。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "96f362526aa64c48222eeda9c1895458a8907d4e62f369dbd51c4a43cb455c1f"
    },
    {
      "questionId": "u14-s003-v005",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-common-diff",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "若 5、x、17 是某等差數列的連續三項，則公差是多少？",
      "givenConditions": [
        "連續三項5、x、17"
      ],
      "target": "求d",
      "choices": [
        "5",
        "11",
        "12",
        "6"
      ],
      "answerIndex": 3,
      "independentSolution": "連續三項總差17-5=12，分成2個相等間隔，所以d=12÷2=6，且x=11。",
      "mainExplanation": "依題意依序處理：兩端差除以2。；用中項驗證兩段差皆6。，所以唯一正確選項是「6」。",
      "steps": [
        "兩端差除以2。",
        "用中項驗證兩段差皆6。"
      ],
      "optionAnalysis": [
        {
          "choice": "5",
          "truth": false,
          "reason": "5是首項，不是公差。"
        },
        {
          "choice": "11",
          "truth": false,
          "reason": "11是中項值。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "12是兩端總差，跨了兩步。"
        },
        {
          "choice": "6",
          "truth": true,
          "reason": "中項x=(5+17)/2=11，因此公差11-5=6。"
        }
      ],
      "misconceptionTarget": "把兩端差12直接當公差。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-nth"
      ],
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "x為實數且由等差條件唯一決定。",
      "difficultyReason": "標準：需辨認兩端之間有兩個間隔並可用中項驗證。",
      "literacyContextNecessity": null,
      "authoringIntent": "利用連續三項求公差。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a9fe89f1ed5793c23ad83033480b986d41f1cd86cd6c0dade488dabde4922031"
    },
    {
      "questionId": "u14-s003-v006",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-common-diff",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等差數列中 a_2=-1、a_6=-13，公差是多少？",
      "givenConditions": [
        "a_2=-1",
        "a_6=-13"
      ],
      "target": "求d",
      "choices": [
        "-4",
        "-3",
        "3",
        "-12"
      ],
      "answerIndex": 1,
      "independentSolution": "d=[-13-(-1)]/(6-2)=(-12)/4=-3。",
      "mainExplanation": "依題意依序處理：處理雙重負號。；除以4個間隔。，所以唯一正確選項是「-3」。",
      "steps": [
        "處理雙重負號。",
        "除以4個間隔。"
      ],
      "optionAnalysis": [
        {
          "choice": "-4",
          "truth": false,
          "reason": "-4是把位置差誤當公差。"
        },
        {
          "choice": "-3",
          "truth": true,
          "reason": "總變化-12，位置差4，所以d=-12÷4=-3。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "3漏掉遞減負號。"
        },
        {
          "choice": "-12",
          "truth": false,
          "reason": "-12是總變化而非每步變化。"
        }
      ],
      "misconceptionTarget": "把-13-(-1)算成-14或漏負號。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-nth"
      ],
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "分子計算為-12；公差保留符號。",
      "difficultyReason": "標準：同時考查有號數減法與位置差。",
      "literacyContextNecessity": null,
      "authoringIntent": "由負項值求負公差。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "6e534cf30cb10ae158d33b0fc61ee28a66d9fc03296b69df5487d62c719ec795"
    },
    {
      "questionId": "u14-s003-v007",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-common-diff",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "某等差數列第4項是2，第11項是30。若在數線上從第4項走到第11項，每一步增加相同數量，單步增加多少？",
      "givenConditions": [
        "從第4項到第11項共有7步",
        "總增加量為28"
      ],
      "target": "用數線步數理解公差",
      "choices": [
        "4",
        "3.5",
        "7",
        "28"
      ],
      "answerIndex": 0,
      "independentSolution": "總增加量為30−2=28，項次從4到11共有7個間隔，所以每步增加28÷7=4。",
      "mainExplanation": "計算總變化量28，再除以7個相鄰間隔。；完整檢查：總增加量為30−2=28，項次從4到11共有7個間隔，所以每步增加28÷7=4。",
      "steps": [
        "求總增加量30−2=28。",
        "求間隔數11−4=7。",
        "28÷7=4。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": true,
          "reason": "每步增加4。"
        },
        {
          "choice": "3.5",
          "truth": false,
          "reason": "3.5是誤算8個間隔。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "7只是間隔數。"
        },
        {
          "choice": "28",
          "truth": false,
          "reason": "28是總增加量。"
        }
      ],
      "misconceptionTarget": "把總變化量或項次差直接當公差。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-nth"
      ],
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "每一步對應一個公差，端點明示。",
      "difficultyReason": "進階：用數線步數理解公差。",
      "literacyContextNecessity": null,
      "authoringIntent": "處理較遠兩項的公差。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "28864eef1616f94338c5bae359817855d195a5bd37216624df35f392f96b5119"
    },
    {
      "questionId": "u14-s003-v008",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-common-diff",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "某等差數列中 a_m=7、a_{m+5}=-8，則公差是多少？",
      "givenConditions": [
        "a_m=7",
        "a_{m+5}=-8"
      ],
      "target": "求d",
      "choices": [
        "-15",
        "-5",
        "-3",
        "3"
      ],
      "answerIndex": 2,
      "independentSolution": "不必知道m的數值；從m到m+5恰有5步，-8-7=-15，所以d=-3。",
      "mainExplanation": "依題意依序處理：由代數下標得位置差5。；項值差除以5。，所以唯一正確選項是「-3」。",
      "steps": [
        "由代數下標得位置差5。",
        "項值差除以5。"
      ],
      "optionAnalysis": [
        {
          "choice": "-15",
          "truth": false,
          "reason": "-15是總變化。"
        },
        {
          "choice": "-5",
          "truth": false,
          "reason": "-5是把位置差加負號。"
        },
        {
          "choice": "-3",
          "truth": true,
          "reason": "兩位置相差5，項值變化-15，因此d=-15÷5=-3。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "3漏掉遞減符號。"
        }
      ],
      "misconceptionTarget": "認為不知道m就無法求公差。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-nth"
      ],
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "m為使兩項存在的正整數；結果不依賴m。",
      "difficultyReason": "進階：使用代數下標，需辨認位置差與m本身無關。",
      "literacyContextNecessity": null,
      "authoringIntent": "理解相對項次足以求公差。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4e4f6f2b9ae914c9c3e547741aeb5e9602c0bc194b9b00c788a6a72c78cb0b2e"
    },
    {
      "questionId": "u14-s003-v009",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-common-diff",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "若 2k-1、5k+2、9k-3 是等差數列的連續三項，則 k 為多少？",
      "givenConditions": [
        "三個含k的連續項"
      ],
      "target": "求k",
      "choices": [
        "5",
        "8",
        "6",
        "10"
      ],
      "answerIndex": 1,
      "independentSolution": "(5k+2)-(2k-1)=3k+3；(9k-3)-(5k+2)=4k-5。令兩者相等，3k+3=4k-5，所以k=8；代回三項15、42、69，公差27。",
      "mainExplanation": "依題意依序處理：分別計算兩個相鄰差。；建立一次方程式並代回。，所以唯一正確選項是「8」。",
      "steps": [
        "分別計算兩個相鄰差。",
        "建立一次方程式並代回。"
      ],
      "optionAnalysis": [
        {
          "choice": "5",
          "truth": false,
          "reason": "k=5時兩差18與15，不相等。"
        },
        {
          "choice": "8",
          "truth": true,
          "reason": "相鄰差相等：3k+3=4k-5，解得k=8。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "k=6時兩差21與19，不相等。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "k=10時兩差33與35，不相等。"
        }
      ],
      "misconceptionTarget": "把三個式子直接相加或只令首末差相等。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-nth"
      ],
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "k=8使三項為15、42、69；唯一一次方程式解。",
      "difficultyReason": "進階：需化簡兩個代數差、解方程式並驗證。",
      "literacyContextNecessity": null,
      "authoringIntent": "由含參數連續三項求公差條件。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e64fa8712f424896dada8b411d4239cbc4b6d75fd07e788fbaffd4082860e477"
    },
    {
      "questionId": "u14-s003-v010",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-common-diff",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "某地連續三小時的整點氣溫依序為 23.5°C、22.8°C、22.1°C，且每小時等量下降。每小時的公差是多少？",
      "givenConditions": [
        "三個整點氣溫"
      ],
      "target": "每小時公差",
      "choices": [
        "0.7°C",
        "-1.4°C",
        "1.4°C",
        "-0.7°C"
      ],
      "answerIndex": 3,
      "independentSolution": "每小時後項減前項：22.8-23.5=-0.7°C；22.1-22.8=-0.7°C，故公差為每小時-0.7°C。",
      "mainExplanation": "依題意依序處理：計算兩段氣溫差。；保留每小時與負號。，所以唯一正確選項是「-0.7°C」。",
      "steps": [
        "計算兩段氣溫差。",
        "保留每小時與負號。"
      ],
      "optionAnalysis": [
        {
          "choice": "0.7°C",
          "truth": false,
          "reason": "0.7°C只表示下降幅度，沒有公差方向。"
        },
        {
          "choice": "-1.4°C",
          "truth": false,
          "reason": "-1.4°C是兩小時總變化。"
        },
        {
          "choice": "1.4°C",
          "truth": false,
          "reason": "1.4°C是總變化且符號錯。"
        },
        {
          "choice": "-0.7°C",
          "truth": true,
          "reason": "22.8-23.5=-0.7，下一段也為-0.7°C。"
        }
      ],
      "misconceptionTarget": "把「下降0.7」寫成正公差0.7。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-nth"
      ],
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "攝氏溫差可直接相減；答案為每小時-0.7°C。",
      "difficultyReason": "素養：公差必須同時表達數值、方向與每小時單位。",
      "literacyContextNecessity": "氣溫情境不可刪除，因為它要求將下降幅度轉成帶方向且含時間單位的公差。",
      "authoringIntent": "解讀氣溫資料中的有向變化率。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ce8d89baaf50b3894422b62afc017f19e078e1d77bc8916172572d1ee9cfed37"
    },
    {
      "questionId": "u14-s003-v011",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-common-diff",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "展示架三層層板離地高度依序為 42 cm、47.5 cm、53 cm，且相鄰層板等距。層板高度數列的公差是多少？",
      "givenConditions": [
        "三層高度"
      ],
      "target": "相鄰層板公差",
      "choices": [
        "5 cm",
        "10.5 cm",
        "5.5 cm",
        "11 cm"
      ],
      "answerIndex": 2,
      "independentSolution": "相鄰高度差為5.5 cm，且兩段一致，所以公差5.5 cm。",
      "mainExplanation": "依題意依序處理：用後層高度減前層高度。；核對第二段。，所以唯一正確選項是「5.5 cm」。",
      "steps": [
        "用後層高度減前層高度。",
        "核對第二段。"
      ],
      "optionAnalysis": [
        {
          "choice": "5 cm",
          "truth": false,
          "reason": "5 cm是小數減法錯誤。"
        },
        {
          "choice": "10.5 cm",
          "truth": false,
          "reason": "10.5 cm不是相鄰差。"
        },
        {
          "choice": "5.5 cm",
          "truth": true,
          "reason": "47.5-42=5.5，53-47.5=5.5 cm。"
        },
        {
          "choice": "11 cm",
          "truth": false,
          "reason": "11 cm是兩段總高度差。"
        }
      ],
      "misconceptionTarget": "把最上與最下差11 cm直接當公差。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-nth"
      ],
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "高度均以cm表示；不需換單位。",
      "difficultyReason": "素養：需辨認高度值與相鄰間距，並正確保留cm單位。",
      "literacyContextNecessity": "展示架情境使公差具有「每升一層的高度增量」意義。",
      "authoringIntent": "從量測資料求小數公差。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a90c7cec6406c1c897d960ebcdb1b9f9b4fd3ee6bf3434f2128690841fbe773f"
    },
    {
      "questionId": "u14-s003-v012",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-common-diff",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "分期付款金額形成等差數列。第 3 期為 1260 元，第 9 期為 1620 元，每一期比前一期增加多少元？",
      "givenConditions": [
        "第3期1260元",
        "第9期1620元"
      ],
      "target": "每期增加額",
      "choices": [
        "60",
        "45",
        "90",
        "360"
      ],
      "answerIndex": 0,
      "independentSolution": "d=(1620-1260)/(9-3)=360/6=60元/期。",
      "mainExplanation": "依題意依序處理：算金額差360。；除以期數位置差6。，所以唯一正確選項是「60」。",
      "steps": [
        "算金額差360。",
        "除以期數位置差6。"
      ],
      "optionAnalysis": [
        {
          "choice": "60",
          "truth": true,
          "reason": "金額增加360元，跨6個期距，所以每期增加60元。"
        },
        {
          "choice": "45",
          "truth": false,
          "reason": "45是除以8或混入含端點期數。"
        },
        {
          "choice": "90",
          "truth": false,
          "reason": "90是除以4，位置差錯。"
        },
        {
          "choice": "360",
          "truth": false,
          "reason": "360是總增加額。"
        }
      ],
      "misconceptionTarget": "把第3期到第9期包含7期誤當7段。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-nth"
      ],
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "金額差360元分配於6個間隔；答案60元/期。",
      "difficultyReason": "素養：需把期次差與金額差配對，並解釋每一期的元數變化。",
      "literacyContextNecessity": "付款情境提供「每期增加」的單位意義，不能只報無單位60。",
      "authoringIntent": "由分期資料求每期增量。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1649fd8ec9891e0d8527edcac1d9f78d4b86d516e7cc62ee6ae2b68f71420685"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u14-s003-cr001",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-common-diff",
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "某等差數列第 4 項為 -5，第 19 項為 40。求公差，並用兩種方式驗證。",
      "requiredWork": [
        "計算項值差與位置差。",
        "求公差。",
        "至少提供兩種驗證，例如代回與列出局部項。"
      ],
      "fullCreditSolution": [
        "項值差40-(-5)=45，位置差19-4=15。",
        "d=45÷15=3。",
        "驗證一：a_19=a_4+(19-4)d=-5+15×3=40。",
        "驗證二：由第4項向後為-5、-2、1、…，每步加3，方向與目標值一致。"
      ],
      "alternativeSolutions": [
        "也可先回推a_1=-14，再驗a_4=-14+9=-5與a_19=-14+54=40。"
      ],
      "reasoningSteps": [
        "項值差40-(-5)=45，位置差19-4=15。",
        "d=45÷15=3。",
        "驗證一：a_19=a_4+(19-4)d=-5+15×3=40。",
        "驗證二：由第4項向後為-5、-2、1、…，每步加3，方向與目標值一致。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確求d=3，且兩種具體驗證都成立。"
        },
        {
          "score": 2,
          "criteria": "d=3且只有一種完整驗證，或第二種驗證略有算術小錯。"
        },
        {
          "score": 1,
          "criteria": "看出總變化45或位置差15，但未正確相除。"
        },
        {
          "score": 0,
          "criteria": "無法辨識位置差與項值差。"
        }
      ],
      "partialCreditRules": [
        "兩種驗證不可只是同一句重複；代回不同公式可視為不同驗證。"
      ],
      "followThroughPolicy": "若d算術錯但兩個驗證都一致使用錯值，最高1分，因驗證無法符合原資料。",
      "unitAndNotationRules": "無單位；後項減前項方向固定。",
      "answerOnlyPolicy": "只答3最多1分。",
      "commonErrors": [
        "把19-4算成16。",
        "把40-(-5)算成35。"
      ],
      "figureDrawingSpecRef": null,
      "independentReview": {
        "derivedResult": "公差3。",
        "ambiguity": "兩個已知項唯一決定候選公差，且題目已保證等差。",
        "unitBoundaryCheck": "無單位；後項減前項方向固定。",
        "decision": "pass",
        "reviewNote": "獨立依題目條件重新推導，得到「公差3。」。評分規準逐分對應本題必要步驟，並已檢查錯誤追隨與只寫答案的處理。"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a93a63ad93e0b46bf0a8384c1a493601fd951d175ce631a5df4c6c083fadbe3d"
    },
    {
      "questionId": "u14-s003-cr002",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "arithmetic-sequence-common-diff",
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "三個式子 x+2、3x-4、7x-18 依序為等差數列的連續三項。求 x 與公差。",
      "requiredWork": [
        "令兩個相鄰差相等。",
        "解x。",
        "代回求公差並核對。"
      ],
      "fullCreditSolution": [
        "第一段差=(3x-4)-(x+2)=2x-6。",
        "第二段差=(7x-18)-(3x-4)=4x-14。",
        "2x-6=4x-14，得x=4。",
        "三項為6、8、10，公差2。"
      ],
      "alternativeSolutions": [
        "也可用2(3x-4)=(x+2)+(7x-18)建立中項方程式，解得x=4。"
      ],
      "reasoningSteps": [
        "第一段差=(3x-4)-(x+2)=2x-6。",
        "第二段差=(7x-18)-(3x-4)=4x-14。",
        "2x-6=4x-14，得x=4。",
        "三項為6、8、10，公差2。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確求x=4、公差2，且列出相鄰差或中項方程式。"
        },
        {
          "score": 2,
          "criteria": "x正確但公差漏答或算錯；或式子正確但單一化簡錯。"
        },
        {
          "score": 1,
          "criteria": "知道要令兩段差相等，但方程式未解完。"
        },
        {
          "score": 0,
          "criteria": "未使用等差條件。"
        }
      ],
      "partialCreditRules": [
        "替代的中項法完全等價，可得滿分。"
      ],
      "followThroughPolicy": "若x因算術錯而錯，但後續代回一致求公差，最高2分。",
      "unitAndNotationRules": "無單位；三項順序依題目固定。",
      "answerOnlyPolicy": "只答x=4、公差2且無過程，最多1分。",
      "commonErrors": [
        "第二段差漏掉括號。",
        "把連續三項誤作三式相等。"
      ],
      "figureDrawingSpecRef": null,
      "independentReview": {
        "derivedResult": "x=4，公差2。",
        "ambiguity": "一次方程式唯一解，代回三項確為6、8、10。",
        "unitBoundaryCheck": "無單位；三項順序依題目固定。",
        "decision": "pass",
        "reviewNote": "獨立依題目條件重新推導，得到「x=4，公差2。」。評分規準逐分對應本題必要步驟，並已檢查錯誤追隨與只寫答案的處理。"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "be388727d6c27f0b13e8c8c47ae446fcf503ef7f12b645f559f888b92441179f"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u14-s003-v001",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-common-diff",
      "contentSha256": "95ac33ba5ee9f23863d6da4aa3c95e3b8f905cefb8e1c1cc250720c6adbf6b81",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "逐段相減：15-11=4、19-15=4、23-19=4，所以公差d=4。",
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「4」符合。其餘三項各自違反：3不是任何相鄰差。；8是隔兩項的總變化。；12是首末已知項的總變化。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差公差」講義中定義；本題目標為「求公差」。",
        "unitConflict": "公差方向為後項減前項。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「4」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：公差方向為後項減前項。",
        "alternateReading": "最可能的誤讀是「把兩個間隔的總變化8當公差。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：直接計算並驗證相鄰差。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等差數列 11，15，19，23，… 的公差是多少？」獨立重算為：逐段相減：15-11=4、19-15=4、23-19=4，所以公差d=4。 四選項逐項核對後唯一正解為「4」；邊界檢查：公差方向為後項減前項。",
      "reviewContentSha256": "f976e83551334c77f0ce5490aecebc7b8561c334464bfaef8a8fcb46a3b0c458"
    },
    {
      "questionId": "u14-s003-v002",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-common-diff",
      "contentSha256": "3dcabf48da9dd15ba56683c7c6488b9453a5ad02b7d7ca84da17df507c4a0fef",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "d=24-30=-6；18-24=-6，故公差為-6。",
      "derivedAnswer": "-6",
      "storedAnswer": "-6",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「-6」符合。其餘三項各自違反：6只取絕對值，失去遞減方向。；-12是跨兩步的變化。；12是跨兩步且符號錯。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差公差」講義中定義；本題目標為「求d」。",
        "unitConflict": "負公差表示每項減6。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「-6」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：負公差表示每項減6。",
        "alternateReading": "最可能的誤讀是「只報變化量大小6而漏掉負號。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：單一步驟，但重點是保留遞減符號。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等差數列 30，24，18，12，… 的公差是多少？」獨立重算為：d=24-30=-6；18-24=-6，故公差為-6。 四選項逐項核對後唯一正解為「-6」；邊界檢查：負公差表示每項減6。",
      "reviewContentSha256": "fbfdf17a684fe0fb11831fc146db4f0fa8d2d74029754d55ba8f721fd60151a0"
    },
    {
      "questionId": "u14-s003-v003",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-common-diff",
      "contentSha256": "bb25c81425232c97e424da52a6185cf72a271b7c04527ed5dc2322e4e1d391e3",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "第9與第10項只隔一步，公差=46-41=5。",
      "derivedAnswer": "5",
      "storedAnswer": "5",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「5」符合。其餘三項各自違反：4是項次差的誤讀。；9是把第9項項次當公差。；87是把兩項相加。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差公差」講義中定義；本題目標為「求d」。",
        "unitConflict": "下標是位置，不參與項值相減。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「5」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：下標是位置，不參與項值相減。",
        "alternateReading": "最可能的誤讀是「看到下標9、10而把9或1當成公差。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：辨認下標與項值後做一次減法。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某等差數列 a_9=41、a_10=46，公差是多少？」獨立重算為：第9與第10項只隔一步，公差=46-41=5。 四選項逐項核對後唯一正解為「5」；邊界檢查：下標是位置，不參與項值相減。",
      "reviewContentSha256": "daa9631153edcde262864181712b0c628565e2b78ff6defabc38cec19cbe8a46"
    },
    {
      "questionId": "u14-s003-v004",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-common-diff",
      "contentSha256": "96f362526aa64c48222eeda9c1895458a8907d4e62f369dbd51c4a43cb455c1f",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "第3項到第7項經過7−3=4個公差，因此d=(24−8)/4=4；學生漏除以4個間隔。",
      "derivedAnswer": "應除以4個間隔",
      "storedAnswer": "應除以4個間隔",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回後只有「應除以4個間隔」成立；其他三項分別因：不是3個間隔。；7是項次不是間隔數。；相減仍是必要步驟。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差公差」講義中定義；本題目標為「求d」。",
        "unitConflict": "兩項屬同一等差數列；分母4不為0。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「4」，沒有近似取整導致第二答案。",
        "domainBoundary": "只問錯誤原因，間隔數唯一。；項次、間隔、正負號與會考範圍均已逐項核對。",
        "alternateReading": "題幹明確要求「診斷公差計算中的間隔數」，沒有第二種合理所求。"
      },
      "difficultyReason": "標準：錯誤分析項數與間隔數。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "languageCheck": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "u14-s003-v004 中央修訂後獨立重算：第3項到第7項經過7−3=4個公差，因此d=(24−8)/4=4；學生漏除以4個間隔。 四個選項逐項核對，唯一正解為「應除以4個間隔」；其餘選項排除理由為：不是3個間隔。；7是項次不是間隔數。；相減仍是必要步驟。",
      "reviewContentSha256": "cca68e4b4a0446e13cab5fa4f9f8ce3d583a55e1732e5004d3a00376280da488"
    },
    {
      "questionId": "u14-s003-v005",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-common-diff",
      "contentSha256": "a9fe89f1ed5793c23ad83033480b986d41f1cd86cd6c0dade488dabde4922031",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "連續三項總差17-5=12，分成2個相等間隔，所以d=12÷2=6，且x=11。",
      "derivedAnswer": "6",
      "storedAnswer": "6",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「6」符合。其餘三項各自違反：5是首項，不是公差。；11是中項值。；12是兩端總差，跨了兩步。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差公差」講義中定義；本題目標為「求d」。",
        "unitConflict": "x為實數且由等差條件唯一決定。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「6」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：x為實數且由等差條件唯一決定。",
        "alternateReading": "最可能的誤讀是「把兩端差12直接當公差。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：需辨認兩端之間有兩個間隔並可用中項驗證。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 5、x、17 是某等差數列的連續三項，則公差是多少？」獨立重算為：連續三項總差17-5=12，分成2個相等間隔，所以d=12÷2=6，且x=11。 四選項逐項核對後唯一正解為「6」；邊界檢查：x為實數且由等差條件唯一決定。",
      "reviewContentSha256": "cb6b004f0459d8a0f85cbb2504bd78c3b7dcd2740af3b2eae6d365392de96e8f"
    },
    {
      "questionId": "u14-s003-v006",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-common-diff",
      "contentSha256": "6e534cf30cb10ae158d33b0fc61ee28a66d9fc03296b69df5487d62c719ec795",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "d=[-13-(-1)]/(6-2)=(-12)/4=-3。",
      "derivedAnswer": "-3",
      "storedAnswer": "-3",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「-3」符合。其餘三項各自違反：-4是把位置差誤當公差。；3漏掉遞減負號。；-12是總變化而非每步變化。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差公差」講義中定義；本題目標為「求d」。",
        "unitConflict": "分子計算為-12；公差保留符號。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「-3」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：分子計算為-12；公差保留符號。",
        "alternateReading": "最可能的誤讀是「把-13-(-1)算成-14或漏負號。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：同時考查有號數減法與位置差。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等差數列中 a_2=-1、a_6=-13，公差是多少？」獨立重算為：d=[-13-(-1)]/(6-2)=(-12)/4=-3。 四選項逐項核對後唯一正解為「-3」；邊界檢查：分子計算為-12；公差保留符號。",
      "reviewContentSha256": "2214aad2ac13015838c400f049ff2c52adecd8cb3d83915de118d4591363f02c"
    },
    {
      "questionId": "u14-s003-v007",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-common-diff",
      "contentSha256": "28864eef1616f94338c5bae359817855d195a5bd37216624df35f392f96b5119",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "總增加量為30−2=28，項次從4到11共有7個間隔，所以每步增加28÷7=4。",
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
        "secondCorrectAnswer": "逐項代回後只有「4」成立；其他三項分別因：3.5是誤算8個間隔。；7只是間隔數。；28是總增加量。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差公差」講義中定義；本題目標為「求d」。",
        "unitConflict": "公差為精確整數；不以平均近似。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「4」，沒有近似取整導致第二答案。",
        "domainBoundary": "每一步對應一個公差，端點明示。；項次、間隔、正負號與會考範圍均已逐項核對。",
        "alternateReading": "題幹明確要求「用數線步數理解公差」，沒有第二種合理所求。"
      },
      "difficultyReason": "進階：用數線步數理解公差。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "languageCheck": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "u14-s003-v007 中央修訂後獨立重算：總增加量為30−2=28，項次從4到11共有7個間隔，所以每步增加28÷7=4。 四個選項逐項核對，唯一正解為「4」；其餘選項排除理由為：3.5是誤算8個間隔。；7只是間隔數。；28是總增加量。",
      "reviewContentSha256": "3ba97c7dc299f942c1b4331d4a4394ccc1a7963c6ff409d15ece853bf2461819"
    },
    {
      "questionId": "u14-s003-v008",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-common-diff",
      "contentSha256": "4e4f6f2b9ae914c9c3e547741aeb5e9602c0bc194b9b00c788a6a72c78cb0b2e",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "不必知道m的數值；從m到m+5恰有5步，-8-7=-15，所以d=-3。",
      "derivedAnswer": "-3",
      "storedAnswer": "-3",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「-3」符合。其餘三項各自違反：-15是總變化。；-5是把位置差加負號。；3漏掉遞減符號。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差公差」講義中定義；本題目標為「求d」。",
        "unitConflict": "m為使兩項存在的正整數；結果不依賴m。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「-3」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：m為使兩項存在的正整數；結果不依賴m。",
        "alternateReading": "最可能的誤讀是「認為不知道m就無法求公差。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：使用代數下標，需辨認位置差與m本身無關。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某等差數列中 a_m=7、a_{m+5}=-8，則公差是多少？」獨立重算為：不必知道m的數值；從m到m+5恰有5步，-8-7=-15，所以d=-3。 四選項逐項核對後唯一正解為「-3」；邊界檢查：m為使兩項存在的正整數；結果不依賴m。",
      "reviewContentSha256": "86beb2656909b41bdb1a60abfc3a476e83b463c1a9bf1d854cc03ab71d9e0164"
    },
    {
      "questionId": "u14-s003-v009",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-common-diff",
      "contentSha256": "e64fa8712f424896dada8b411d4239cbc4b6d75fd07e788fbaffd4082860e477",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "(5k+2)-(2k-1)=3k+3；(9k-3)-(5k+2)=4k-5。令兩者相等，3k+3=4k-5，所以k=8；代回三項15、42、69，公差27。",
      "derivedAnswer": "8",
      "storedAnswer": "8",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「8」符合。其餘三項各自違反：k=5時兩差18與15，不相等。；k=6時兩差21與19，不相等。；k=10時兩差33與35，不相等。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差公差」講義中定義；本題目標為「求k」。",
        "unitConflict": "k=8使三項為15、42、69；唯一一次方程式解。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「8」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：k=8使三項為15、42、69；唯一一次方程式解。",
        "alternateReading": "最可能的誤讀是「把三個式子直接相加或只令首末差相等。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：需化簡兩個代數差、解方程式並驗證。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 2k-1、5k+2、9k-3 是等差數列的連續三項，則 k 為多少？」獨立重算為：(5k+2)-(2k-1)=3k+3；(9k-3)-(5k+2)=4k-5。令兩者相等，3k+3=4k-5，所以k=8；代回三項15、42、69，公差27。 四選項逐項核對後唯一正解為「8」；邊界檢查：k=8使三項為15、42、69；唯一一次方程式解。",
      "reviewContentSha256": "111cc595364cf16a95b9870c2149f4b4065e0fd58498a15bf126b16de6a76b1e"
    },
    {
      "questionId": "u14-s003-v010",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-common-diff",
      "contentSha256": "ce8d89baaf50b3894422b62afc017f19e078e1d77bc8916172572d1ee9cfed37",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "每小時後項減前項：22.8-23.5=-0.7°C；22.1-22.8=-0.7°C，故公差為每小時-0.7°C。",
      "derivedAnswer": "-0.7°C",
      "storedAnswer": "-0.7°C",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「-0.7°C」符合。其餘三項各自違反：0.7°C只表示下降幅度，沒有公差方向。；-1.4°C是兩小時總變化。；1.4°C是總變化且符號錯。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差公差」講義中定義；本題目標為「每小時公差」。",
        "unitConflict": "攝氏溫差可直接相減；答案為每小時-0.7°C。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「-0.7°C」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：攝氏溫差可直接相減；答案為每小時-0.7°C。",
        "alternateReading": "最可能的誤讀是「把「下降0.7」寫成正公差0.7。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：公差必須同時表達數值、方向與每小時單位。",
      "literacyContextNecessity": "氣溫情境不可刪除，因為它要求將下降幅度轉成帶方向且含時間單位的公差。",
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某地連續三小時的整點氣溫依序為 23.5°C、22.8°C、22.1°C，且每小時等量下降。每小時的公差是多少？」獨立重算為：每小時後項減前項：22.8-23.5=-0.7°C；22.1-22.8=-0.7°C，故公差為每小時-0.7°C。 四選項逐項核對後唯一正解為「-0.7°C」；邊界檢查：攝氏溫差可直接相減；答案為每小時-0.7°C。",
      "reviewContentSha256": "bd3306e8e7d6582f2faa06cf6b99e30b7a4b78917cb16ffc89a46b3dd7ef0cd5"
    },
    {
      "questionId": "u14-s003-v011",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-common-diff",
      "contentSha256": "a90c7cec6406c1c897d960ebcdb1b9f9b4fd3ee6bf3434f2128690841fbe773f",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "相鄰高度差為5.5 cm，且兩段一致，所以公差5.5 cm。",
      "derivedAnswer": "5.5 cm",
      "storedAnswer": "5.5 cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「5.5 cm」符合。其餘三項各自違反：5 cm是小數減法錯誤。；10.5 cm不是相鄰差。；11 cm是兩段總高度差。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差公差」講義中定義；本題目標為「相鄰層板公差」。",
        "unitConflict": "高度均以cm表示；不需換單位。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「5.5 cm」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：高度均以cm表示；不需換單位。",
        "alternateReading": "最可能的誤讀是「把最上與最下差11 cm直接當公差。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：需辨認高度值與相鄰間距，並正確保留cm單位。",
      "literacyContextNecessity": "展示架情境使公差具有「每升一層的高度增量」意義。",
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展示架三層層板離地高度依序為 42 cm、47.5 cm、53 cm，且相鄰層板等距。層板高度數列的公差是多少？」獨立重算為：相鄰高度差為5.5 cm，且兩段一致，所以公差5.5 cm。 四選項逐項核對後唯一正解為「5.5 cm」；邊界檢查：高度均以cm表示；不需換單位。",
      "reviewContentSha256": "b1ec397a0034b0c65095095f69a90605708d57ce46e509800c6b5e2338f805c8"
    },
    {
      "questionId": "u14-s003-v012",
      "unitId": "u14",
      "skillId": "arithmetic-sequence-common-diff",
      "contentSha256": "1649fd8ec9891e0d8527edcac1d9f78d4b86d516e7cc62ee6ae2b68f71420685",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "d=(1620-1260)/(9-3)=360/6=60元/期。",
      "derivedAnswer": "60",
      "storedAnswer": "60",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「60」符合。其餘三項各自違反：45是除以8或混入含端點期數。；90是除以4，位置差錯。；360是總增加額。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差公差」講義中定義；本題目標為「每期增加額」。",
        "unitConflict": "金額差360元分配於6個間隔；答案60元/期。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「60」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：金額差360元分配於6個間隔；答案60元/期。",
        "alternateReading": "最可能的誤讀是「把第3期到第9期包含7期誤當7段。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：需把期次差與金額差配對，並解釋每一期的元數變化。",
      "literacyContextNecessity": "付款情境提供「每期增加」的單位意義，不能只報無單位60。",
      "prerequisiteCheck": "使用前置技能「等差數列第 n 項」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「分期付款金額形成等差數列。第 3 期為 1260 元，第 9 期為 1620 元，每一期比前一期增加多少元？」獨立重算為：d=(1620-1260)/(9-3)=360/6=60元/期。 四選項逐項核對後唯一正解為「60」；邊界檢查：金額差360元分配於6個間隔；答案60元/期。",
      "reviewContentSha256": "6ec4a306b186ba0077c1524f1279e67f5ab1abda7a1e1073d2bf3d494bdee43f"
    }
  ],
  "drawingSpecs": []
};
