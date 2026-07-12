// Generated only from reviewed immutable source. Do not hand edit.
export default {
  "lecture": {
    "lectureId": "u14-s004-lecture-r1",
    "unitId": "u14",
    "numericUnitId": 14,
    "topicId": "u14-sequences",
    "skillId": "geometric-basic",
    "lockedTitle": "等比數列基本",
    "title": "等比數列基本：固定倍數與公比的辨認",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能以相鄰比判斷等比數列。",
      "能求公比與下一項。",
      "能處理負公比、分數公比與遞減情況。",
      "能分清等差的固定差與等比的固定比。"
    ],
    "prerequisiteBridge": [
      {
        "skillId": "arithmetic-sequence-common-diff",
        "title": "等差公差",
        "requiredLevel": "能說明「等差公差」的核心定義並完成基本計算，作為本技能的直接前置。"
      }
    ],
    "glossary": [
      {
        "term": "等比數列",
        "definition": "相鄰後項都是前項乘同一非零常數的數列。"
      },
      {
        "term": "公比",
        "definition": "相鄰後項除以前項所得的固定比 r。"
      },
      {
        "term": "倍增或倍減",
        "definition": "每一步乘固定倍數。"
      },
      {
        "term": "負公比",
        "definition": "項的正負通常交錯。"
      }
    ],
    "notation": [
      {
        "symbol": "r=a_{n+1}/a_n",
        "meaning": "前項非0時的相鄰比。"
      },
      {
        "symbol": "a_{n+1}=r a_n",
        "meaning": "用公比產生下一項。"
      }
    ],
    "conceptNarrative": [
      "等比關係關心的是「乘幾倍」，不是「增加多少」。",
      "公比大於1時絕對值常變大；0<r<1時絕對值常變小；r<0時正負交錯。",
      "若數列含0，直接用相鄰除法可能無意義，必須依定義檢查是否能以同一r產生。",
      "等比數列的首項與公比共同決定後續各項。"
    ],
    "formalDefinitions": [
      {
        "name": "公比",
        "statement": "每一項到下一項所乘的固定數。"
      },
      {
        "name": "等比判準",
        "statement": "對所有可比較的相鄰項，相鄰比相同。"
      }
    ],
    "formulas": [
      {
        "formula": "r=a_{n+1}÷a_n",
        "conditions": [
          "a_n≠0"
        ],
        "meaning": "由相鄰項求公比。"
      },
      {
        "formula": "a_{n+1}=r a_n",
        "conditions": [
          "同一公比對每一步成立"
        ],
        "meaning": "遞推下一項。"
      }
    ],
    "nonApplicableCases": [
      "相鄰差固定的是等差，不等於等比。",
      "前項為0時不能用除法求公比。",
      "只驗一次相鄰比不足以確認整列。",
      "題目未限定正項時，中間項可能有正負兩解。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "先算各相鄰差與比",
        "check": "分辨加法或乘法規律。"
      },
      {
        "step": 2,
        "instruction": "確認所有相鄰比相同",
        "check": "至少核對兩段。"
      },
      {
        "step": 3,
        "instruction": "保留公比符號",
        "check": "負號決定交錯。"
      },
      {
        "step": 4,
        "instruction": "用前項乘r求下一項",
        "check": "不要改成加r。"
      },
      {
        "step": 5,
        "instruction": "回代檢查每一步",
        "check": "尤其注意0與分數。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "4，12，36，…",
        "reasoning": "相鄰比皆為3。",
        "solutionSteps": [
          "相鄰比皆為3。",
          "下一項36×3=108。"
        ],
        "answer": "108"
      },
      {
        "exampleId": "L2",
        "prompt": "64，32，16，…",
        "reasoning": "公比為1/2。",
        "solutionSteps": [
          "公比為1/2。",
          "下一項8。"
        ],
        "answer": "8"
      },
      {
        "exampleId": "L3",
        "prompt": "-3，6，-12，…",
        "reasoning": "公比為-2。",
        "solutionSteps": [
          "公比為-2。",
          "下一項24。"
        ],
        "answer": "24"
      },
      {
        "exampleId": "L4",
        "prompt": "2，x，18為正的連續三項",
        "reasoning": "x/2=18/x。",
        "solutionSteps": [
          "x/2=18/x。",
          "x^2=36且x>0。"
        ],
        "answer": "x=6"
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
        "mistake": "把公比當公差",
        "why": "乘法規律被誤作加法。",
        "correction": "比較相鄰比。"
      },
      {
        "mistake": "負公比漏負號",
        "why": "正負交錯會被破壞。",
        "correction": "做有號數除法。"
      },
      {
        "mistake": "0作除數",
        "why": "除法無定義。",
        "correction": "改用a_{n+1}=ra_n檢查。"
      },
      {
        "mistake": "只看數列遞增就判等比",
        "why": "許多非等比數列也遞增。",
        "correction": "必須驗證固定比。"
      },
      {
        "mistake": "正項條件被忽略",
        "why": "中項平方方程可能有兩解。",
        "correction": "讀清是否限定正數。"
      },
      {
        "mistake": "每一步加公比",
        "why": "公比應乘在前項上。",
        "correction": "寫a_{n+1}=ra_n。"
      }
    ],
    "selfCheck": [
      "相鄰比是否對每一段相同？",
      "是否有0造成除法無定義？",
      "公比正負是否保留？",
      "我用的是乘法而非加法嗎？",
      "題目是否限制各項正負？"
    ],
    "summary": [
      "等比數列每一步乘固定公比。",
      "公比可為負數或分數。",
      "等比看相鄰比，等差看相鄰差。",
      "含0或正負限制時要額外檢查。"
    ],
    "connections": {
      "previous": "由等差的固定差對照等比的固定比。",
      "next": [
        "後續會用指數表示等比第n項。",
        "一般求第n項還會包含平方與交錯規律。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u14-s004-v001",
        "u14-s004-v002",
        "u14-s004-v003",
        "u14-s004-v004",
        "u14-s004-v005",
        "u14-s004-v006",
        "u14-s004-v007",
        "u14-s004-v008",
        "u14-s004-v009",
        "u14-s004-v010",
        "u14-s004-v011",
        "u14-s004-v012"
      ],
      "constructedResponseIds": [
        "u14-s004-cr001",
        "u14-s004-cr002"
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
      "reviewNote": "逐段檢查「等比數列基本」的定義、符號、適用條件與六類常見錯誤；四個例題均以不同數值與推理路徑重算，並確認未直接複製本技能題庫題幹。"
    },
    "contentSha256": "f0da0294e671304e052355365f50984882b71cec2553394b7689b7d4e64a3288"
  },
  "mcQuestions": [
    {
      "questionId": "u14-s004-v001",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-basic",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "數列 3，6，12，24，… 是等比數列，其公比為多少？",
      "givenConditions": [
        "前四項"
      ],
      "target": "求公比",
      "choices": [
        "3",
        "6",
        "12",
        "2"
      ],
      "answerIndex": 3,
      "independentSolution": "相鄰後項除以前項皆為2，所以公比r=2。",
      "mainExplanation": "依題意依序處理：計算至少兩個相鄰比。；確認固定。，所以唯一正確選項是「2」。",
      "steps": [
        "計算至少兩個相鄰比。",
        "確認固定。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "3是首項。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "6是第二項。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "12是兩項差或第三項。"
        },
        {
          "choice": "2",
          "truth": true,
          "reason": "6÷3=2、12÷6=2、24÷12=2。"
        }
      ],
      "misconceptionTarget": "把首項或相鄰差當公比。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-common-diff"
      ],
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "各前項非0，除法有定義。",
      "difficultyReason": "基礎：直接計算整數相鄰比。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認基本倍增公比。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "72c9f7f6f4ebccbe9337a9876d488caa582bbba921a7239b4225b27318005a47"
    },
    {
      "questionId": "u14-s004-v002",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-basic",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等比數列 81，27，9，3，… 的下一項是多少？",
      "givenConditions": [
        "前四項"
      ],
      "target": "求下一項",
      "choices": [
        "0",
        "6",
        "1",
        "9"
      ],
      "answerIndex": 2,
      "independentSolution": "27/81=1/3、9/27=1/3、3/9=1/3，所以下一項=3/3=1。",
      "mainExplanation": "依題意依序處理：求公比1/3。；將3乘1/3。，所以唯一正確選項是「1」。",
      "steps": [
        "求公比1/3。",
        "將3乘1/3。"
      ],
      "optionAnalysis": [
        {
          "choice": "0",
          "truth": false,
          "reason": "0是把遞減誤作減3直到0。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "6是把3加3。"
        },
        {
          "choice": "1",
          "truth": true,
          "reason": "公比為1/3，3×1/3=1。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "9是回到前一項。"
        }
      ],
      "misconceptionTarget": "把固定除以3誤成固定減3。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-common-diff"
      ],
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "公比1/3；答案精確。",
      "difficultyReason": "基礎：辨認每次除以3並求下一項。",
      "literacyContextNecessity": null,
      "authoringIntent": "延伸分數公比數列。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "13ba1852557c52834ca1d94f81c2fcda1af16cd7eaeef1d82c1365e34144fa02"
    },
    {
      "questionId": "u14-s004-v003",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-basic",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等比數列 -2，6，-18，54，… 的下一項是多少？",
      "givenConditions": [
        "前四項"
      ],
      "target": "求下一項",
      "choices": [
        "108",
        "-162",
        "162",
        "-108"
      ],
      "answerIndex": 1,
      "independentSolution": "6÷(-2)=-3、-18÷6=-3、54÷(-18)=-3，因此下一項-162。",
      "mainExplanation": "依題意依序處理：求負公比。；保留符號相乘。，所以唯一正確選項是「-162」。",
      "steps": [
        "求負公比。",
        "保留符號相乘。"
      ],
      "optionAnalysis": [
        {
          "choice": "108",
          "truth": false,
          "reason": "108使用錯誤公比2。"
        },
        {
          "choice": "-162",
          "truth": true,
          "reason": "公比為-3，54×(-3)=-162。"
        },
        {
          "choice": "162",
          "truth": false,
          "reason": "162漏掉負號。"
        },
        {
          "choice": "-108",
          "truth": false,
          "reason": "-108使用公比-2。"
        }
      ],
      "misconceptionTarget": "只看絕對值乘3，忘記負公比會交錯符號。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-common-diff"
      ],
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "所有除數非0；負公比造成正負交錯。",
      "difficultyReason": "基礎：運算簡單但需控制交錯符號。",
      "literacyContextNecessity": null,
      "authoringIntent": "處理負公比。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5f1b48a4905024bbe740551a13dbbf2ee3b027e96e0acc580127455bdaae8d96"
    },
    {
      "questionId": "u14-s004-v004",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-basic",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "下列哪一個數列是等比數列？",
      "givenConditions": [
        "四個候選數列"
      ],
      "target": "選出等比數列",
      "choices": [
        "5，10，20，40",
        "2，5，8，11",
        "1，4，9，16",
        "3，6，10，15"
      ],
      "answerIndex": 0,
      "independentSolution": "逐一檢查：只有5、10、20、40的每一個相鄰比都等於2。",
      "mainExplanation": "依題意依序處理：對每個選項比較至少兩個相鄰比。；排除僅固定差或其他規律。，所以唯一正確選項是「5，10，20，40」。",
      "steps": [
        "對每個選項比較至少兩個相鄰比。",
        "排除僅固定差或其他規律。"
      ],
      "optionAnalysis": [
        {
          "choice": "5，10，20，40",
          "truth": true,
          "reason": "相鄰比10/5、20/10、40/20皆為2。"
        },
        {
          "choice": "2，5，8，11",
          "truth": false,
          "reason": "相鄰差固定3，是等差而非等比。"
        },
        {
          "choice": "1，4，9，16",
          "truth": false,
          "reason": "相鄰比分別4、9/4、16/9，不固定。"
        },
        {
          "choice": "3，6，10，15",
          "truth": false,
          "reason": "相鄰差3、4、5且相鄰比也不固定。"
        }
      ],
      "misconceptionTarget": "只因數列遞增或數值成倍出現一次就判等比。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-common-diff"
      ],
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "候選均無0作前項；唯一一組相鄰比固定。",
      "difficultyReason": "標準：需對多個候選逐項驗證，而非只算一段。",
      "literacyContextNecessity": null,
      "authoringIntent": "比較四組數列的固定比。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "6377e0bf9706a96f4aa57afdd755e8231df5b2972fa31e0bd865c88bf62fc4df"
    },
    {
      "questionId": "u14-s004-v005",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-basic",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等比數列 1/4，1/2，1，2，… 的下一項是多少？",
      "givenConditions": [
        "前四項"
      ],
      "target": "求下一項",
      "choices": [
        "4",
        "2.5",
        "3",
        "8"
      ],
      "answerIndex": 0,
      "independentSolution": "(1/2)/(1/4)=2、1/(1/2)=2、2/1=2，因此下一項4。",
      "mainExplanation": "依題意依序處理：將分數相除求公比。；用2乘公比2。，所以唯一正確選項是「4」。",
      "steps": [
        "將分數相除求公比。",
        "用2乘公比2。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": true,
          "reason": "公比為2，2×2=4。"
        },
        {
          "choice": "2.5",
          "truth": false,
          "reason": "5/2是固定加1/2的錯誤延伸。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "3是固定加1。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "8是多乘一次2。"
        }
      ],
      "misconceptionTarget": "看到後兩項1、2就誤以為下一項加1。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-common-diff"
      ],
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "分數皆非0；公比精確為2。",
      "difficultyReason": "標準：需正確做分數相除並辨別加法假象。",
      "literacyContextNecessity": null,
      "authoringIntent": "由分數項辨認固定倍率。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "60dc5137e0c851c2ff48aa64b38dd7a8809fe2ad08b1d2800913c81c7b69c8b2"
    },
    {
      "questionId": "u14-s004-v006",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-basic",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "某等比數列 a_2=12、a_3=-6，則 a_4 等於多少？",
      "givenConditions": [
        "a_2=12",
        "a_3=-6"
      ],
      "target": "求a_4",
      "choices": [
        "-3",
        "6",
        "18",
        "3"
      ],
      "answerIndex": 3,
      "independentSolution": "r=-1/2；由第3項再乘同一公比，a_4=3。",
      "mainExplanation": "依題意依序處理：求帶負號的分數公比。；乘到下一項。，所以唯一正確選項是「3」。",
      "steps": [
        "求帶負號的分數公比。",
        "乘到下一項。"
      ],
      "optionAnalysis": [
        {
          "choice": "-3",
          "truth": false,
          "reason": "-3漏掉兩個負號相乘為正。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "6把公比當-1或取絕對值。"
        },
        {
          "choice": "18",
          "truth": false,
          "reason": "18把差-18錯作倍率。"
        },
        {
          "choice": "3",
          "truth": true,
          "reason": "公比r=-6÷12=-1/2，所以a_4=-6×(-1/2)=3。"
        }
      ],
      "misconceptionTarget": "負分數公比的符號運算錯誤。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-common-diff"
      ],
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "a_2非0，公比有定義。",
      "difficultyReason": "標準：結合有號數除法與分數乘法。",
      "literacyContextNecessity": null,
      "authoringIntent": "由兩項求負分數公比並延伸。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "29755c31c77d263f71283645936d9373bb85a82f873f703e09169680e611c4e5"
    },
    {
      "questionId": "u14-s004-v007",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-basic",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "正數 2、x、18 是等比數列的連續三項，則 x 為多少？",
      "givenConditions": [
        "正數連續三項2、x、18"
      ],
      "target": "求x",
      "choices": [
        "4",
        "-6",
        "6",
        "9"
      ],
      "answerIndex": 2,
      "independentSolution": "x/2=18/x，故x²=36，x=±6；題目限定正數，所以只取6。",
      "mainExplanation": "依題意依序處理：建立相鄰比相等。；解平方並套用正數限制。，所以唯一正確選項是「6」。",
      "steps": [
        "建立相鄰比相等。",
        "解平方並套用正數限制。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "4無法使兩相鄰比相等。"
        },
        {
          "choice": "-6",
          "truth": false,
          "reason": "-6也滿足平方關係，但違反正數條件。"
        },
        {
          "choice": "6",
          "truth": true,
          "reason": "連續三項滿足x²=2×18=36；因x為正數，所以x=6。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "9的兩相鄰比不相等。"
        }
      ],
      "misconceptionTarget": "解出±6後忽略正數條件，認為有兩個答案。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-common-diff"
      ],
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "正數條件排除-6；唯一答案6。",
      "difficultyReason": "進階：方程式有兩個代數根，需依題目正數邊界篩選。",
      "literacyContextNecessity": null,
      "authoringIntent": "求正的等比中項。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a9bf572cd6cb0e3ead57def68ac4fd57aa8eb96477b6ce543ff5df736d3bff4a"
    },
    {
      "questionId": "u14-s004-v008",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-basic",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等比數列首項為 64、公比為 1/2。第一個小於 5 的項是第幾項？",
      "givenConditions": [
        "a_1=64",
        "r=1/2"
      ],
      "target": "第一個小於5的項次",
      "choices": [
        "4",
        "5",
        "6",
        "7"
      ],
      "answerIndex": 1,
      "independentSolution": "a_n=64(1/2)^{n-1}。列到門檻附近：a_4=8≥5，a_5=4<5，所以最小n=5。",
      "mainExplanation": "依題意依序處理：逐次乘1/2。；檢查前一項與達標項。，所以唯一正確選項是「5」。",
      "steps": [
        "逐次乘1/2。",
        "檢查前一項與達標項。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "第4項為8，尚未小於5。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "依序為64、32、16、8、4；第4項8不小於5，第5項4小於5。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "第6項雖小於5但不是第一個。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "第7項也非最早。"
        }
      ],
      "misconceptionTarget": "找到某個小於5的項卻未確認「第一個」。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-common-diff"
      ],
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "項次為正整數；同時驗證a_4與a_5。",
      "difficultyReason": "進階：需處理分數公比與最小項次的雙重驗證。",
      "literacyContextNecessity": null,
      "authoringIntent": "等比衰減的首次低於門檻。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5b0b6caf18c09c5c24ddb9b8d459b9f50c9df9b7c59bc3683d8417e64c2e143f"
    },
    {
      "questionId": "u14-s004-v009",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-basic",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "正數 a、b、c 為等比數列的連續三項，且 a=12、c=27，則 b 為多少？",
      "givenConditions": [
        "正數連續等比三項",
        "a=12",
        "c=27"
      ],
      "target": "求b",
      "choices": [
        "15",
        "39",
        "18",
        "-18"
      ],
      "answerIndex": 2,
      "independentSolution": "由b/a=c/b得b²=ac=324，因此b=±18；正數條件保留18。",
      "mainExplanation": "依題意依序處理：使用等比中項關係。；依正數條件選根。，所以唯一正確選項是「18」。",
      "steps": [
        "使用等比中項關係。",
        "依正數條件選根。"
      ],
      "optionAnalysis": [
        {
          "choice": "15",
          "truth": false,
          "reason": "15的平方225不等於324。"
        },
        {
          "choice": "39",
          "truth": false,
          "reason": "39是兩端相加。"
        },
        {
          "choice": "18",
          "truth": true,
          "reason": "b²=ac=12×27=324；b為正數，所以b=18。"
        },
        {
          "choice": "-18",
          "truth": false,
          "reason": "-18違反正數條件。"
        }
      ],
      "misconceptionTarget": "把等比中項誤算成兩端算術平均19.5，或忽略正負限制。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-common-diff"
      ],
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "正數條件給唯一正根。",
      "difficultyReason": "進階：需分辨等差平均與等比平方關係，並篩選根。",
      "literacyContextNecessity": null,
      "authoringIntent": "以乘積關係求等比中項。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "67f9b3fbb31dd2d8d4b8175088ad4e784951f8d7a47c0e08e99d035a394cf877"
    },
    {
      "questionId": "u14-s004-v010",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-basic",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "一個培養皿起初有 80 個細菌，每 20 分鐘數量變為原來的 2 倍。經過 1 小時後有多少個？",
      "givenConditions": [
        "起初80個",
        "每20分鐘2倍",
        "經過60分鐘"
      ],
      "target": "末數量",
      "choices": [
        "320",
        "640",
        "480",
        "1280"
      ],
      "answerIndex": 1,
      "independentSolution": "60÷20=3次倍增；80→160→320→640，所以為640個。",
      "mainExplanation": "依題意依序處理：把時間換成3個區間。；重複乘2三次。，所以唯一正確選項是「640」。",
      "steps": [
        "把時間換成3個區間。",
        "重複乘2三次。"
      ],
      "optionAnalysis": [
        {
          "choice": "320",
          "truth": false,
          "reason": "320只倍增2次。"
        },
        {
          "choice": "640",
          "truth": true,
          "reason": "1小時有3個20分鐘區間，80×2³=640。"
        },
        {
          "choice": "480",
          "truth": false,
          "reason": "480把每次增加80線性相加。"
        },
        {
          "choice": "1280",
          "truth": false,
          "reason": "1280倍增4次。"
        }
      ],
      "misconceptionTarget": "把起初時刻也算成一次倍增。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-common-diff"
      ],
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "假設每20分鐘整體倍增且無其他變化；單位個。",
      "difficultyReason": "素養：需由1小時與20分鐘換算倍率次數，區分起始量與三次變化。",
      "literacyContextNecessity": "細菌與時間情境提供倍率發生頻率；刪除後無法測試時間區間建模。",
      "authoringIntent": "把時間區間轉成等比倍率次數。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a58fa1bba0c8d52380498609fbcca07a781b288b0165a1a1689f9a7a9f1c6a6b"
    },
    {
      "questionId": "u14-s004-v011",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-basic",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "一台設備原價 50000 元，每年價值變為前一年的 80%。經過 3 年後估值多少元？",
      "givenConditions": [
        "原價50000元",
        "每年保留80%"
      ],
      "target": "3年後估值",
      "choices": [
        "25600",
        "32000",
        "30000",
        "20480"
      ],
      "answerIndex": 0,
      "independentSolution": "第0年50000；第1年40000；第2年32000；第3年25600。等價於50000×(4/5)^3。",
      "mainExplanation": "依題意依序處理：確認經過3年有3次折減。；逐年乘0.8。，所以唯一正確選項是「25600」。",
      "steps": [
        "確認經過3年有3次折減。",
        "逐年乘0.8。"
      ],
      "optionAnalysis": [
        {
          "choice": "25600",
          "truth": true,
          "reason": "經過3年需乘0.8三次：50000×0.8³=25600。"
        },
        {
          "choice": "32000",
          "truth": false,
          "reason": "32000只乘兩次0.8。"
        },
        {
          "choice": "30000",
          "truth": false,
          "reason": "30000把每年減少10000線性處理。"
        },
        {
          "choice": "20480",
          "truth": false,
          "reason": "20480是乘四次0.8。"
        }
      ],
      "misconceptionTarget": "把80%誤作每年減80%或少乘一次。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-common-diff"
      ],
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "未要求四捨五入；結果為整數元。",
      "difficultyReason": "素養：需把「保留80%」翻成公比0.8並正確計算經過年數。",
      "literacyContextNecessity": "估值情境提供百分比為保留比例而非固定減額的必要解讀。",
      "authoringIntent": "處理百分比等比衰減。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4658d0c146946cad96ab2020d4cb286ed0a46d77b2bb485cbac407f8c3a9ad54"
    },
    {
      "questionId": "u14-s004-v012",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-basic",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "某濾光裝置每通過一層，光強度變為原來的一半。進入前強度為 160 單位，通過 5 層後是多少？",
      "givenConditions": [
        "進入前160",
        "每層剩一半",
        "5層"
      ],
      "target": "通過後強度",
      "choices": [
        "10",
        "20",
        "80",
        "5"
      ],
      "answerIndex": 3,
      "independentSolution": "160→80→40→20→10→5，共5次減半。",
      "mainExplanation": "依題意依序處理：每層對應一次倍率。；連續除以2五次。，所以唯一正確選項是「5」。",
      "steps": [
        "每層對應一次倍率。",
        "連續除以2五次。"
      ],
      "optionAnalysis": [
        {
          "choice": "10",
          "truth": false,
          "reason": "10只通過4層。"
        },
        {
          "choice": "20",
          "truth": false,
          "reason": "20只通過3層。"
        },
        {
          "choice": "80",
          "truth": false,
          "reason": "80只通過1層。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "通過5層即乘(1/2)^5，160÷32=5。"
        }
      ],
      "misconceptionTarget": "把進入前160當成第1層後的量，少減半一次。",
      "prerequisiteSkillIds": [
        "arithmetic-sequence-common-diff"
      ],
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "強度單位一致；不涉及連續衰減或近似。",
      "difficultyReason": "素養：需把物理層數逐一對應到等比變化，並區分進入前與通過後。",
      "literacyContextNecessity": "濾光層情境直接決定倍率次數，不能刪除而保留相同建模要求。",
      "authoringIntent": "由層數判斷倍率次數。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "fe04d0f6dea1cfa8ed84c30fce3d02d5ddc61a28ac9a3b19db5f96429c60764a"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u14-s004-cr001",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-basic",
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "判斷數列 2，-6，18，-54，… 是否為等比數列；若是，求公比與下一項，並說明符號為何交錯。",
      "requiredWork": [
        "計算至少兩個相鄰比。",
        "求公比與下一項。",
        "解釋負公比造成交錯。"
      ],
      "fullCreditSolution": [
        "-6÷2=-3，18÷(-6)=-3，-54÷18=-3。",
        "相鄰比固定，因此是等比數列，公比r=-3。",
        "下一項=-54×(-3)=162。",
        "每次乘負數會改變正負號，所以符號交錯。"
      ],
      "alternativeSolutions": [
        "也可用a_{n+1}=-3a_n逐項驗證。"
      ],
      "reasoningSteps": [
        "-6÷2=-3，18÷(-6)=-3，-54÷18=-3。",
        "相鄰比固定，因此是等比數列，公比r=-3。",
        "下一項=-54×(-3)=162。",
        "每次乘負數會改變正負號，所以符號交錯。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "完整判定等比、r=-3、下一項162，並解釋負公比交錯。"
        },
        {
          "score": 2,
          "criteria": "主要答案皆正確但缺符號說明或只驗一段相鄰比。"
        },
        {
          "score": 1,
          "criteria": "看出乘3但漏負號，或只答下一項。"
        },
        {
          "score": 0,
          "criteria": "誤判等差且無固定比證據。"
        }
      ],
      "partialCreditRules": [
        "公比符號是核心；只寫3不能視為公比正確。"
      ],
      "followThroughPolicy": "若公比寫成3但下一項依交錯算162，顯示概念矛盾，最高1分。",
      "unitAndNotationRules": "無單位；各前項非0。",
      "answerOnlyPolicy": "只答「是，162」最多1分。",
      "commonErrors": [
        "把絕對值倍率3當公比。",
        "-54乘-3的符號算錯。"
      ],
      "figureDrawingSpecRef": null,
      "independentReview": {
        "derivedResult": "是等比數列，r=-3，下一項162。",
        "ambiguity": "相鄰比三段一致，答案唯一。",
        "unitBoundaryCheck": "無單位；各前項非0。",
        "decision": "pass",
        "reviewNote": "獨立依題目條件重新推導，得到「是等比數列，r=-3，下一項162。」。評分規準逐分對應本題必要步驟，並已檢查錯誤追隨與只寫答案的處理。"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e76cb07aa5026b643605fc8369aedd7e447125c9d39ebc304c7ff3b5430a6e78"
    },
    {
      "questionId": "u14-s004-cr002",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-basic",
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "正數 a、b、48 為等比數列的連續三項，且公比大於 1。若 a=3，求 b 與公比。",
      "requiredWork": [
        "使用等比中項或相鄰比。",
        "處理正數與公比大於1條件。",
        "求b與r並驗算。"
      ],
      "fullCreditSolution": [
        "b²=3×48=144，所以b=±12。",
        "因三項皆為正數，取b=12。",
        "公比r=12÷3=4，且48÷12=4>1。"
      ],
      "alternativeSolutions": [
        "也可設3r²=48，得r²=16；因r>1取r=4，再得b=3r=12。"
      ],
      "reasoningSteps": [
        "b²=3×48=144，所以b=±12。",
        "因三項皆為正數，取b=12。",
        "公比r=12÷3=4，且48÷12=4>1。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "b=12、r=4，且正確使用正數與r>1篩選。"
        },
        {
          "score": 2,
          "criteria": "兩答案正確但未明說排除負根；或方法正確有一個算術小錯。"
        },
        {
          "score": 1,
          "criteria": "得到b=±12或r=±4但未套限制。"
        },
        {
          "score": 0,
          "criteria": "以算術平均求b或無等比關係。"
        }
      ],
      "partialCreditRules": [
        "只保留b=12但未說理由，可由正數題意推定，扣至2分。"
      ],
      "followThroughPolicy": "若先得到b=-12但後續因r>1改正為12並驗算，可給滿分。",
      "unitAndNotationRules": "無單位；正數與r>1均為必要條件。",
      "answerOnlyPolicy": "只答12、4最多1分。",
      "commonErrors": [
        "把b算成(3+48)/2。",
        "只取平方根正負卻未用題意。"
      ],
      "figureDrawingSpecRef": null,
      "independentReview": {
        "derivedResult": "b=12，r=4。",
        "ambiguity": "限制排除所有其他代數根。",
        "unitBoundaryCheck": "無單位；正數與r>1均為必要條件。",
        "decision": "pass",
        "reviewNote": "獨立依題目條件重新推導，得到「b=12，r=4。」。評分規準逐分對應本題必要步驟，並已檢查錯誤追隨與只寫答案的處理。"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9365f70217261ef95844ef7e4934ec7d6a08dcc32be9476986c20db56770309c"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u14-s004-v001",
      "unitId": "u14",
      "skillId": "geometric-basic",
      "contentSha256": "72c9f7f6f4ebccbe9337a9876d488caa582bbba921a7239b4225b27318005a47",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "相鄰後項除以前項皆為2，所以公比r=2。",
      "derivedAnswer": "2",
      "storedAnswer": "2",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「2」符合。其餘三項各自違反：3是首項。；6是第二項。；12是兩項差或第三項。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比數列基本」講義中定義；本題目標為「求公比」。",
        "unitConflict": "各前項非0，除法有定義。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「2」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：各前項非0，除法有定義。",
        "alternateReading": "最可能的誤讀是「把首項或相鄰差當公比。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：直接計算整數相鄰比。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「數列 3，6，12，24，… 是等比數列，其公比為多少？」獨立重算為：相鄰後項除以前項皆為2，所以公比r=2。 四選項逐項核對後唯一正解為「2」；邊界檢查：各前項非0，除法有定義。",
      "reviewContentSha256": "d6daaa4b27decfbb22d235b147abeacd9afb115268a2a35ff300bd2b8c608ee3"
    },
    {
      "questionId": "u14-s004-v002",
      "unitId": "u14",
      "skillId": "geometric-basic",
      "contentSha256": "13ba1852557c52834ca1d94f81c2fcda1af16cd7eaeef1d82c1365e34144fa02",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "27/81=1/3、9/27=1/3、3/9=1/3，所以下一項=3/3=1。",
      "derivedAnswer": "1",
      "storedAnswer": "1",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「1」符合。其餘三項各自違反：0是把遞減誤作減3直到0。；6是把3加3。；9是回到前一項。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比數列基本」講義中定義；本題目標為「求下一項」。",
        "unitConflict": "公比1/3；答案精確。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「1」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：公比1/3；答案精確。",
        "alternateReading": "最可能的誤讀是「把固定除以3誤成固定減3。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：辨認每次除以3並求下一項。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等比數列 81，27，9，3，… 的下一項是多少？」獨立重算為：27/81=1/3、9/27=1/3、3/9=1/3，所以下一項=3/3=1。 四選項逐項核對後唯一正解為「1」；邊界檢查：公比1/3；答案精確。",
      "reviewContentSha256": "c58958520ac4fb72487c3d24d12a03e08bc4d90ba1d71348d7ac1274a4dfb4c1"
    },
    {
      "questionId": "u14-s004-v003",
      "unitId": "u14",
      "skillId": "geometric-basic",
      "contentSha256": "5f1b48a4905024bbe740551a13dbbf2ee3b027e96e0acc580127455bdaae8d96",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "6÷(-2)=-3、-18÷6=-3、54÷(-18)=-3，因此下一項-162。",
      "derivedAnswer": "-162",
      "storedAnswer": "-162",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「-162」符合。其餘三項各自違反：108使用錯誤公比2。；162漏掉負號。；-108使用公比-2。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比數列基本」講義中定義；本題目標為「求下一項」。",
        "unitConflict": "所有除數非0；負公比造成正負交錯。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「-162」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：所有除數非0；負公比造成正負交錯。",
        "alternateReading": "最可能的誤讀是「只看絕對值乘3，忘記負公比會交錯符號。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：運算簡單但需控制交錯符號。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等比數列 -2，6，-18，54，… 的下一項是多少？」獨立重算為：6÷(-2)=-3、-18÷6=-3、54÷(-18)=-3，因此下一項-162。 四選項逐項核對後唯一正解為「-162」；邊界檢查：所有除數非0；負公比造成正負交錯。",
      "reviewContentSha256": "35bde02793436dc57e67cb41c59c7cdee8260d7f1bb72d9a1ab27e6064446cc6"
    },
    {
      "questionId": "u14-s004-v004",
      "unitId": "u14",
      "skillId": "geometric-basic",
      "contentSha256": "6377e0bf9706a96f4aa57afdd755e8231df5b2972fa31e0bd865c88bf62fc4df",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "逐一檢查：只有5、10、20、40的每一個相鄰比都等於2。",
      "derivedAnswer": "5，10，20，40",
      "storedAnswer": "5，10，20，40",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「5，10，20，40」符合。其餘三項各自違反：相鄰差固定3，是等差而非等比。；相鄰比分別4、9/4、16/9，不固定。；相鄰差3、4、5且相鄰比也不固定。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比數列基本」講義中定義；本題目標為「選出等比數列」。",
        "unitConflict": "候選均無0作前項；唯一一組相鄰比固定。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「5，10，20，40」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：候選均無0作前項；唯一一組相鄰比固定。",
        "alternateReading": "最可能的誤讀是「只因數列遞增或數值成倍出現一次就判等比。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：需對多個候選逐項驗證，而非只算一段。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「下列哪一個數列是等比數列？」獨立重算為：逐一檢查：只有5、10、20、40的每一個相鄰比都等於2。 四選項逐項核對後唯一正解為「5，10，20，40」；邊界檢查：候選均無0作前項；唯一一組相鄰比固定。",
      "reviewContentSha256": "e35ad30226cb05c45c4b5364dfbd48a072156e6f0771672a61bfc16a9648e789"
    },
    {
      "questionId": "u14-s004-v005",
      "unitId": "u14",
      "skillId": "geometric-basic",
      "contentSha256": "60dc5137e0c851c2ff48aa64b38dd7a8809fe2ad08b1d2800913c81c7b69c8b2",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "(1/2)/(1/4)=2、1/(1/2)=2、2/1=2，因此下一項4。",
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
        "secondCorrectAnswer": "逐項重算四個選項後，只有「4」符合。其餘三項各自違反：5/2是固定加1/2的錯誤延伸。；3是固定加1。；8是多乘一次2。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比數列基本」講義中定義；本題目標為「求下一項」。",
        "unitConflict": "分數皆非0；公比精確為2。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「4」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：分數皆非0；公比精確為2。",
        "alternateReading": "最可能的誤讀是「看到後兩項1、2就誤以為下一項加1。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：需正確做分數相除並辨別加法假象。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等比數列 1/4，1/2，1，2，… 的下一項是多少？」獨立重算為：(1/2)/(1/4)=2、1/(1/2)=2、2/1=2，因此下一項4。 四選項逐項核對後唯一正解為「4」；邊界檢查：分數皆非0；公比精確為2。",
      "reviewContentSha256": "fba0732bb18649be9e32f453af9a8ad9b173098e1416b56872007ac4946ade65"
    },
    {
      "questionId": "u14-s004-v006",
      "unitId": "u14",
      "skillId": "geometric-basic",
      "contentSha256": "29755c31c77d263f71283645936d9373bb85a82f873f703e09169680e611c4e5",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "r=-1/2；由第3項再乘同一公比，a_4=3。",
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
        "secondCorrectAnswer": "逐項重算四個選項後，只有「3」符合。其餘三項各自違反：-3漏掉兩個負號相乘為正。；6把公比當-1或取絕對值。；18把差-18錯作倍率。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比數列基本」講義中定義；本題目標為「求a_4」。",
        "unitConflict": "a_2非0，公比有定義。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「3」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：a_2非0，公比有定義。",
        "alternateReading": "最可能的誤讀是「負分數公比的符號運算錯誤。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：結合有號數除法與分數乘法。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某等比數列 a_2=12、a_3=-6，則 a_4 等於多少？」獨立重算為：r=-1/2；由第3項再乘同一公比，a_4=3。 四選項逐項核對後唯一正解為「3」；邊界檢查：a_2非0，公比有定義。",
      "reviewContentSha256": "e85453b02ee0074c6ff121cfe4a025f000743d7686ac6ba51e759c26cda0768d"
    },
    {
      "questionId": "u14-s004-v007",
      "unitId": "u14",
      "skillId": "geometric-basic",
      "contentSha256": "a9bf572cd6cb0e3ead57def68ac4fd57aa8eb96477b6ce543ff5df736d3bff4a",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "x/2=18/x，故x²=36，x=±6；題目限定正數，所以只取6。",
      "derivedAnswer": "6",
      "storedAnswer": "6",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「6」符合。其餘三項各自違反：4無法使兩相鄰比相等。；-6也滿足平方關係，但違反正數條件。；9的兩相鄰比不相等。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比數列基本」講義中定義；本題目標為「求x」。",
        "unitConflict": "正數條件排除-6；唯一答案6。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「6」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：正數條件排除-6；唯一答案6。",
        "alternateReading": "最可能的誤讀是「解出±6後忽略正數條件，認為有兩個答案。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：方程式有兩個代數根，需依題目正數邊界篩選。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「正數 2、x、18 是等比數列的連續三項，則 x 為多少？」獨立重算為：x/2=18/x，故x²=36，x=±6；題目限定正數，所以只取6。 四選項逐項核對後唯一正解為「6」；邊界檢查：正數條件排除-6；唯一答案6。",
      "reviewContentSha256": "cdf29e7604a1b1dbdd14fb388274ada0c10de09e0fd0a020f1b6f3a5adf65963"
    },
    {
      "questionId": "u14-s004-v008",
      "unitId": "u14",
      "skillId": "geometric-basic",
      "contentSha256": "5b0b6caf18c09c5c24ddb9b8d459b9f50c9df9b7c59bc3683d8417e64c2e143f",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "a_n=64(1/2)^{n-1}。列到門檻附近：a_4=8≥5，a_5=4<5，所以最小n=5。",
      "derivedAnswer": "5",
      "storedAnswer": "5",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「5」符合。其餘三項各自違反：第4項為8，尚未小於5。；第6項雖小於5但不是第一個。；第7項也非最早。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比數列基本」講義中定義；本題目標為「第一個小於5的項次」。",
        "unitConflict": "項次為正整數；同時驗證a_4與a_5。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「5」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：項次為正整數；同時驗證a_4與a_5。",
        "alternateReading": "最可能的誤讀是「找到某個小於5的項卻未確認「第一個」。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：需處理分數公比與最小項次的雙重驗證。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等比數列首項為 64、公比為 1/2。第一個小於 5 的項是第幾項？」獨立重算為：a_n=64(1/2)^{n-1}。列到門檻附近：a_4=8≥5，a_5=4<5，所以最小n=5。 四選項逐項核對後唯一正解為「5」；邊界檢查：項次為正整數；同時驗證a_4與a_5。",
      "reviewContentSha256": "981a0263845d3c05d8206d6b1fb5a1b54a256dc07fde32137552c217447589ec"
    },
    {
      "questionId": "u14-s004-v009",
      "unitId": "u14",
      "skillId": "geometric-basic",
      "contentSha256": "67f9b3fbb31dd2d8d4b8175088ad4e784951f8d7a47c0e08e99d035a394cf877",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "由b/a=c/b得b²=ac=324，因此b=±18；正數條件保留18。",
      "derivedAnswer": "18",
      "storedAnswer": "18",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「18」符合。其餘三項各自違反：15的平方225不等於324。；39是兩端相加。；-18違反正數條件。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比數列基本」講義中定義；本題目標為「求b」。",
        "unitConflict": "正數條件給唯一正根。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「18」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：正數條件給唯一正根。",
        "alternateReading": "最可能的誤讀是「把等比中項誤算成兩端算術平均19.5，或忽略正負限制。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：需分辨等差平均與等比平方關係，並篩選根。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「正數 a、b、c 為等比數列的連續三項，且 a=12、c=27，則 b 為多少？」獨立重算為：由b/a=c/b得b²=ac=324，因此b=±18；正數條件保留18。 四選項逐項核對後唯一正解為「18」；邊界檢查：正數條件給唯一正根。",
      "reviewContentSha256": "d97902c9b672fa46297b30afc416deb5e3cd057e54ae9834189ec9a0bdd90054"
    },
    {
      "questionId": "u14-s004-v010",
      "unitId": "u14",
      "skillId": "geometric-basic",
      "contentSha256": "a58fa1bba0c8d52380498609fbcca07a781b288b0165a1a1689f9a7a9f1c6a6b",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "60÷20=3次倍增；80→160→320→640，所以為640個。",
      "derivedAnswer": "640",
      "storedAnswer": "640",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「640」符合。其餘三項各自違反：320只倍增2次。；480把每次增加80線性相加。；1280倍增4次。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比數列基本」講義中定義；本題目標為「末數量」。",
        "unitConflict": "假設每20分鐘整體倍增且無其他變化；單位個。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「640」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：假設每20分鐘整體倍增且無其他變化；單位個。",
        "alternateReading": "最可能的誤讀是「把起初時刻也算成一次倍增。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：需由1小時與20分鐘換算倍率次數，區分起始量與三次變化。",
      "literacyContextNecessity": "細菌與時間情境提供倍率發生頻率；刪除後無法測試時間區間建模。",
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一個培養皿起初有 80 個細菌，每 20 分鐘數量變為原來的 2 倍。經過 1 小時後有多少個？」獨立重算為：60÷20=3次倍增；80→160→320→640，所以為640個。 四選項逐項核對後唯一正解為「640」；邊界檢查：假設每20分鐘整體倍增且無其他變化；單位個。",
      "reviewContentSha256": "706b996d9b169109323fe59588467de44414ef97477249f7a7de36e5694fb9d0"
    },
    {
      "questionId": "u14-s004-v011",
      "unitId": "u14",
      "skillId": "geometric-basic",
      "contentSha256": "4658d0c146946cad96ab2020d4cb286ed0a46d77b2bb485cbac407f8c3a9ad54",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "第0年50000；第1年40000；第2年32000；第3年25600。等價於50000×(4/5)^3。",
      "derivedAnswer": "25600",
      "storedAnswer": "25600",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「25600」符合。其餘三項各自違反：32000只乘兩次0.8。；30000把每年減少10000線性處理。；20480是乘四次0.8。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比數列基本」講義中定義；本題目標為「3年後估值」。",
        "unitConflict": "未要求四捨五入；結果為整數元。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「25600」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：未要求四捨五入；結果為整數元。",
        "alternateReading": "最可能的誤讀是「把80%誤作每年減80%或少乘一次。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：需把「保留80%」翻成公比0.8並正確計算經過年數。",
      "literacyContextNecessity": "估值情境提供百分比為保留比例而非固定減額的必要解讀。",
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一台設備原價 50000 元，每年價值變為前一年的 80%。經過 3 年後估值多少元？」獨立重算為：第0年50000；第1年40000；第2年32000；第3年25600。等價於50000×(4/5)^3。 四選項逐項核對後唯一正解為「25600」；邊界檢查：未要求四捨五入；結果為整數元。",
      "reviewContentSha256": "96c82f2dc277f6aa9d016698a6bc30dbe503576994144877781a526287f9393f"
    },
    {
      "questionId": "u14-s004-v012",
      "unitId": "u14",
      "skillId": "geometric-basic",
      "contentSha256": "fe04d0f6dea1cfa8ed84c30fce3d02d5ddc61a28ac9a3b19db5f96429c60764a",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "160→80→40→20→10→5，共5次減半。",
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
        "secondCorrectAnswer": "逐項重算四個選項後，只有「5」符合。其餘三項各自違反：10只通過4層。；20只通過3層。；80只通過1層。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比數列基本」講義中定義；本題目標為「通過後強度」。",
        "unitConflict": "強度單位一致；不涉及連續衰減或近似。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「5」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：強度單位一致；不涉及連續衰減或近似。",
        "alternateReading": "最可能的誤讀是「把進入前160當成第1層後的量，少減半一次。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：需把物理層數逐一對應到等比變化，並區分進入前與通過後。",
      "literacyContextNecessity": "濾光層情境直接決定倍率次數，不能刪除而保留相同建模要求。",
      "prerequisiteCheck": "使用前置技能「等差公差」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某濾光裝置每通過一層，光強度變為原來的一半。進入前強度為 160 單位，通過 5 層後是多少？」獨立重算為：160→80→40→20→10→5，共5次減半。 四選項逐項核對後唯一正解為「5」；邊界檢查：強度單位一致；不涉及連續衰減或近似。",
      "reviewContentSha256": "07180fd99bf8485d0482e7d1e08fcf5d9c28ea2f40d2effe1df395845f964ce2"
    }
  ],
  "drawingSpecs": []
};
