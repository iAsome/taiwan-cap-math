// Generated only from reviewed immutable source. Do not hand edit.
export default {
  "lecture": {
    "lectureId": "u14-s009-lecture-r1",
    "unitId": "u14",
    "numericUnitId": 14,
    "topicId": "u14-series",
    "skillId": "arithmetic-series-sum",
    "lockedTitle": "等差級數和",
    "title": "等差級數和：首尾配對與平均乘項數",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能區分數列與級數。",
      "能使用S_n=n(a_1+a_n)/2。",
      "能在只知首項、公差與項數時求和。",
      "能處理負數、分數與跨越0的級數。"
    ],
    "prerequisiteBridge": [
      {
        "skillId": "geometric-nth-basic",
        "title": "等比第 n 項基本",
        "requiredLevel": "能說明「等比第 n 項基本」的核心定義並完成基本計算，作為本技能的直接前置。"
      }
    ],
    "glossary": [
      {
        "term": "級數",
        "definition": "把數列的各項相加形成的式子或總和。"
      },
      {
        "term": "前n項和",
        "definition": "前n項的總和，記作S_n。"
      },
      {
        "term": "首尾配對",
        "definition": "第一項與最後一項、第二項與倒數第二項配成相同和。"
      },
      {
        "term": "平均項值",
        "definition": "等差數列首尾平均，等於所有項的平均。"
      }
    ],
    "notation": [
      {
        "symbol": "S_n",
        "meaning": "前n項和。"
      },
      {
        "symbol": "S_n=n(a_1+a_n)/2",
        "meaning": "項數乘首尾平均。"
      },
      {
        "symbol": "S_n=n[2a_1+(n-1)d]/2",
        "meaning": "以首項、公差與項數表示。"
      }
    ],
    "conceptNarrative": [
      "數列是項的排列，級數則是把項相加；第n項a_n與前n項和S_n不可混淆。",
      "等差數列首尾配對的和都相同，因此總和等於項數乘以首尾平均。",
      "若最後一項未知，先用通項公式求a_n，再套和公式。",
      "含負數時仍可首尾配對；若正負對稱，許多項會互相抵消。"
    ],
    "formalDefinitions": [
      {
        "name": "前n項和",
        "statement": "S_n=a_1+a_2+…+a_n。"
      },
      {
        "name": "首尾平均",
        "statement": "(a_1+a_n)/2。"
      }
    ],
    "formulas": [
      {
        "formula": "S_n=n(a_1+a_n)/2",
        "conditions": [
          "前n項形成等差數列"
        ],
        "meaning": "項數乘平均項值。"
      },
      {
        "formula": "S_n=n[2a_1+(n-1)d]/2",
        "conditions": [
          "已知a_1、d、n"
        ],
        "meaning": "先代入a_n後化簡。"
      }
    ],
    "nonApplicableCases": [
      "非等差數列不能直接套等差和公式。",
      "把a_n當成S_n會漏掉前面項。",
      "項數計算錯會使總和錯。",
      "首尾列出的端點若不屬數列，不能用端點差直接算項數。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "確認加總項形成等差數列",
        "check": "列出首項、末項、公差。"
      },
      {
        "step": 2,
        "instruction": "求項數n",
        "check": "n=(a_n-a_1)/d+1，d≠0時。"
      },
      {
        "step": 3,
        "instruction": "必要時先求末項",
        "check": "a_n=a_1+(n-1)d。"
      },
      {
        "step": 4,
        "instruction": "套S_n=n(a_1+a_n)/2",
        "check": "保留括號。"
      },
      {
        "step": 5,
        "instruction": "用估算或配對檢查",
        "check": "總和應接近項數乘中間大小。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "1+2+…+50",
        "reasoning": "n=50，首末為1與50。",
        "solutionSteps": [
          "n=50，首末為1與50。",
          "S=50×51÷2。"
        ],
        "answer": "1275"
      },
      {
        "exampleId": "L2",
        "prompt": "4+7+…+40",
        "reasoning": "d=3，n=(40-4)÷3+1=13。",
        "solutionSteps": [
          "d=3，n=(40-4)÷3+1=13。",
          "S=13×44÷2。"
        ],
        "answer": "286"
      },
      {
        "exampleId": "L3",
        "prompt": "a_1=-5，d=2，n=12",
        "reasoning": "a_12=17。",
        "solutionSteps": [
          "a_12=17。",
          "S=12×12÷2。"
        ],
        "answer": "72"
      },
      {
        "exampleId": "L4",
        "prompt": "1/2+1+…+5",
        "reasoning": "d=1/2，n=10。",
        "solutionSteps": [
          "d=1/2，n=10。",
          "S=10×(11/2)÷2。"
        ],
        "answer": "55/2"
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
        "mistake": "項數少加1",
        "why": "端點包含在內。",
        "correction": "n=間隔數+1。"
      },
      {
        "mistake": "先算平均卻忘乘n",
        "why": "只得到單項平均。",
        "correction": "總和=平均×項數。"
      },
      {
        "mistake": "末項不在數列仍直接使用",
        "why": "端點不符合公差。",
        "correction": "檢查(a_n-a_1)能否整除d。"
      },
      {
        "mistake": "負公差項數公式符號亂掉",
        "why": "分子分母方向不一致。",
        "correction": "使用同方向a_n-a_1與d。"
      },
      {
        "mistake": "把S_n與a_n混用",
        "why": "一個是總和，一個是單項。",
        "correction": "標清符號。"
      },
      {
        "mistake": "非等差也首尾平均",
        "why": "中間項平均未必等於首尾平均。",
        "correction": "先驗公差。"
      }
    ],
    "selfCheck": [
      "我求的是單一項還是總和？",
      "首末項都包含嗎？",
      "項數是否為間隔數加1？",
      "最後一項確實在數列中嗎？",
      "總和量級是否合理？"
    ],
    "summary": [
      "等差級數和等於項數乘首尾平均。",
      "S_n與a_n意義不同。",
      "最後一項未知時先用通項求出。",
      "端點、項數與公差都要一致。"
    ],
    "connections": {
      "previous": "利用等差通項、等差中項與首尾對稱。",
      "next": [
        "下一技能把公式用在座位、存款與堆疊情境。",
        "更進一步會由總和反求項數或末項。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u14-s009-v001",
        "u14-s009-v002",
        "u14-s009-v003",
        "u14-s009-v004",
        "u14-s009-v005",
        "u14-s009-v006",
        "u14-s009-v007",
        "u14-s009-v008",
        "u14-s009-v009",
        "u14-s009-v010",
        "u14-s009-v011",
        "u14-s009-v012"
      ],
      "constructedResponseIds": [
        "u14-s009-cr001",
        "u14-s009-cr002"
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
      "reviewNote": "逐段檢查「等差級數和」的定義、符號、適用條件與六類常見錯誤；四個例題均以不同數值與推理路徑重算，並確認未直接複製本技能題庫題幹。"
    },
    "contentSha256": "6036076f6374f41dde690dcad897d27ce410a73179fab527dc9c0e901922e15d"
  },
  "mcQuestions": [
    {
      "questionId": "u14-s009-v001",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "arithmetic-series-sum",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "1+2+3+…+20 的總和是多少？",
      "givenConditions": [
        "1到20"
      ],
      "target": "求總和",
      "choices": [
        "210",
        "190",
        "200",
        "220"
      ],
      "answerIndex": 0,
      "independentSolution": "S_20=20(1+20)/2=10×21=210。",
      "mainExplanation": "依題意依序處理：確認項數20。；使用首尾配對公式。，所以唯一正確選項是「210」。",
      "steps": [
        "確認項數20。",
        "使用首尾配對公式。"
      ],
      "optionAnalysis": [
        {
          "choice": "210",
          "truth": true,
          "reason": "共有20項，首尾平均(1+20)/2=10.5，總和20×10.5=210。"
        },
        {
          "choice": "190",
          "truth": false,
          "reason": "190是20×19/2，少了最後一項20。"
        },
        {
          "choice": "200",
          "truth": false,
          "reason": "200是把平均誤作10。"
        },
        {
          "choice": "220",
          "truth": false,
          "reason": "220是多加10。"
        }
      ],
      "misconceptionTarget": "項數少1或首尾和少1。",
      "prerequisiteSkillIds": [
        "geometric-nth-basic"
      ],
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "兩端都包含；共有20項。",
      "difficultyReason": "基礎：直接套用等差級數和。",
      "literacyContextNecessity": null,
      "authoringIntent": "計算連續正整數和。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "bc060631739e39307b59953a0869856ce2f9dd79e0b167de19a6b93130541c55"
    },
    {
      "questionId": "u14-s009-v002",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "arithmetic-series-sum",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等差級數 5+8+11+…+32 的總和是多少？",
      "givenConditions": [
        "首項5",
        "末項32",
        "d=3"
      ],
      "target": "求和",
      "choices": [
        "180",
        "190",
        "370",
        "185"
      ],
      "answerIndex": 3,
      "independentSolution": "列項可確認共10項；首尾和37，十項總和=5對首尾配對共185。",
      "mainExplanation": "依題意依序處理：求項數10。；用首尾平均18.5乘10。，所以唯一正確選項是「185」。",
      "steps": [
        "求項數10。",
        "用首尾平均18.5乘10。"
      ],
      "optionAnalysis": [
        {
          "choice": "180",
          "truth": false,
          "reason": "180是平均或端點計算錯。"
        },
        {
          "choice": "190",
          "truth": false,
          "reason": "190是把首尾和當38。"
        },
        {
          "choice": "370",
          "truth": false,
          "reason": "370忘記除以2。"
        },
        {
          "choice": "185",
          "truth": true,
          "reason": "公差3，項數(32-5)/3+1=10，S=10(5+32)/2=185。"
        }
      ],
      "misconceptionTarget": "只看末項32就誤判項數或忘記加1。",
      "prerequisiteSkillIds": [
        "geometric-nth-basic"
      ],
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "32確實為5+9×3；端點包含。",
      "difficultyReason": "基礎：需先求項數再套公式。",
      "literacyContextNecessity": null,
      "authoringIntent": "由首末與公差求等差和。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e635360c6b2b1119e460eac53ff83da8f8df0474bb4e92b093aded538d2787be"
    },
    {
      "questionId": "u14-s009-v003",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "arithmetic-series-sum",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等差級數30+27+24+…+3共有10項。若把首尾配對，每一對的和是多少？",
      "givenConditions": [
        "首項30",
        "末項3",
        "共有10項"
      ],
      "target": "使用首尾配對理解等差級數",
      "choices": [
        "30",
        "27",
        "33",
        "60"
      ],
      "answerIndex": 2,
      "independentSolution": "首項與末項配對：30+3=33；第二項27與倒數第二項6也同樣得到33。",
      "mainExplanation": "先找首項與末項，不必立刻計算總和。；完整檢查：首項與末項配對：30+3=33；第二項27與倒數第二項6也同樣得到33。",
      "steps": [
        "配對首項30與末項3。",
        "計算固定配對和33。"
      ],
      "optionAnalysis": [
        {
          "choice": "30",
          "truth": false,
          "reason": "30只抄首項。"
        },
        {
          "choice": "27",
          "truth": false,
          "reason": "27是第二項。"
        },
        {
          "choice": "33",
          "truth": true,
          "reason": "30+3=33。"
        },
        {
          "choice": "60",
          "truth": false,
          "reason": "60是首項加倍。"
        }
      ],
      "misconceptionTarget": "直接套總和公式，未理解首尾配對。",
      "prerequisiteSkillIds": [
        "geometric-nth-basic"
      ],
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "首末項與項數明示。",
      "difficultyReason": "基礎：改考首尾配對結構。",
      "literacyContextNecessity": null,
      "authoringIntent": "計算遞減等差級數。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "625a28e0cdb3564766226c4f3b3d25e94ba5b895d29e5a7b55ca8823d12df05a"
    },
    {
      "questionId": "u14-s009-v004",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "arithmetic-series-sum",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等差數列首項為 -4、公差為 3，前 15 項和是多少？",
      "givenConditions": [
        "a_1=-4",
        "d=3",
        "n=15"
      ],
      "target": "求S_15",
      "choices": [
        "225",
        "255",
        "270",
        "285"
      ],
      "answerIndex": 1,
      "independentSolution": "先求末項38，再以15×17=255。也可用15[2(-4)+14×3]/2。",
      "mainExplanation": "依題意依序處理：求a_15。；套S_n公式。，所以唯一正確選項是「255」。",
      "steps": [
        "求a_15。",
        "套S_n公式。"
      ],
      "optionAnalysis": [
        {
          "choice": "225",
          "truth": false,
          "reason": "225是末項或平均計算錯。"
        },
        {
          "choice": "255",
          "truth": true,
          "reason": "a_15=-4+14×3=38，S_15=15(-4+38)/2=255。"
        },
        {
          "choice": "270",
          "truth": false,
          "reason": "270把首尾和當36。"
        },
        {
          "choice": "285",
          "truth": false,
          "reason": "285把末項誤作42。"
        }
      ],
      "misconceptionTarget": "直接把公差3乘15後與首項相加當總和。",
      "prerequisiteSkillIds": [
        "geometric-nth-basic"
      ],
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "含負首項但末項正；總和可為正。",
      "difficultyReason": "標準：需連續使用通項與級數公式。",
      "literacyContextNecessity": null,
      "authoringIntent": "由首項、公差、項數求和。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2d9fdf739977027945c7cd11e7f0f860306456448e586ff5a62870ec81d0087e"
    },
    {
      "questionId": "u14-s009-v005",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "arithmetic-series-sum",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等差數列 2，2.5，3，… 的前 12 項和是多少？",
      "givenConditions": [
        "首項2",
        "d=0.5",
        "n=12"
      ],
      "target": "求總和",
      "choices": [
        "54",
        "60",
        "57",
        "66"
      ],
      "answerIndex": 2,
      "independentSolution": "首尾平均(2+7.5)/2=4.75，乘12得57。",
      "mainExplanation": "依題意依序處理：求小數末項7.5。；以平均乘項數。，所以唯一正確選項是「57」。",
      "steps": [
        "求小數末項7.5。",
        "以平均乘項數。"
      ],
      "optionAnalysis": [
        {
          "choice": "54",
          "truth": false,
          "reason": "54是把末項算7。"
        },
        {
          "choice": "60",
          "truth": false,
          "reason": "60把平均誤作5。"
        },
        {
          "choice": "57",
          "truth": true,
          "reason": "d=0.5，a_12=2+11×0.5=7.5，S=12(2+7.5)/2=57。"
        },
        {
          "choice": "66",
          "truth": false,
          "reason": "66使用末項9。"
        }
      ],
      "misconceptionTarget": "把12項當成12次增加0.5。",
      "prerequisiteSkillIds": [
        "geometric-nth-basic"
      ],
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "有限小數精確表示；無四捨五入。",
      "difficultyReason": "標準：需精確處理小數與n-1。",
      "literacyContextNecessity": null,
      "authoringIntent": "含小數公差的級數和。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9f138a1431f8365ad5a0e9b7844b8ad62eb83a93e3c119610ba034903faa207e"
    },
    {
      "questionId": "u14-s009-v006",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "arithmetic-series-sum",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等差級數 7+11+15+… 共 18 項，其總和是多少？",
      "givenConditions": [
        "前幾項7、11、15",
        "共18項"
      ],
      "target": "求和",
      "choices": [
        "702",
        "738",
        "720",
        "756"
      ],
      "answerIndex": 1,
      "independentSolution": "公差4，末項75；18項平均41，總和738。",
      "mainExplanation": "依題意依序處理：由前兩項求d=4。；求末項再求和。，所以唯一正確選項是「738」。",
      "steps": [
        "由前兩項求d=4。",
        "求末項再求和。"
      ],
      "optionAnalysis": [
        {
          "choice": "702",
          "truth": false,
          "reason": "702是末項少4。"
        },
        {
          "choice": "738",
          "truth": true,
          "reason": "末項a_18=7+17×4=75，S=18(7+75)/2=9×82=738。"
        },
        {
          "choice": "720",
          "truth": false,
          "reason": "720把首尾和當80。"
        },
        {
          "choice": "756",
          "truth": false,
          "reason": "756多算一個公差。"
        }
      ],
      "misconceptionTarget": "用18×4當末項增量。",
      "prerequisiteSkillIds": [
        "geometric-nth-basic"
      ],
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "第18項為75；項數固定18。",
      "difficultyReason": "標準：需自行辨認公差並求末項。",
      "literacyContextNecessity": null,
      "authoringIntent": "由前兩項與項數求級數和。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "30d962f4c54b5a77af827e7ab6a78aa6a7cbcb7efb2a11c0ceec9fc4524ac2f4"
    },
    {
      "questionId": "u14-s009-v007",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "arithmetic-series-sum",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "所有整數從 -20 加到 30 的總和是多少？",
      "givenConditions": [
        "-20至30所有整數"
      ],
      "target": "求和",
      "choices": [
        "255",
        "0",
        "250",
        "510"
      ],
      "answerIndex": 0,
      "independentSolution": "n=30-(-20)+1=51；S=51[-20+30]/2=51×5=255。也可抵消-20到20後加21到30。",
      "mainExplanation": "依題意依序處理：計算含端點項數51。；首尾配對。，所以唯一正確選項是「255」。",
      "steps": [
        "計算含端點項數51。",
        "首尾配對。"
      ],
      "optionAnalysis": [
        {
          "choice": "255",
          "truth": true,
          "reason": "共有51項，首尾平均5，總和51×5=255。"
        },
        {
          "choice": "0",
          "truth": false,
          "reason": "0誤以為正負完全對稱；其實正數多到30。"
        },
        {
          "choice": "250",
          "truth": false,
          "reason": "250把項數算50。"
        },
        {
          "choice": "510",
          "truth": false,
          "reason": "510忘記除以2。"
        }
      ],
      "misconceptionTarget": "看到跨越0就認為總和必為0。",
      "prerequisiteSkillIds": [
        "geometric-nth-basic"
      ],
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "兩端與0均包含；51項。",
      "difficultyReason": "進階：需正確計算含負數、0與正數的項數及不對稱剩餘。",
      "literacyContextNecessity": null,
      "authoringIntent": "跨越0的連續整數求和。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a2cfa96a59b6935839686e41961f55f85bea1abba9795ff1ce75616fce8ff954"
    },
    {
      "questionId": "u14-s009-v008",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "arithmetic-series-sum",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "某等差數列 a_4=10、a_12=34，求前 15 項和。",
      "givenConditions": [
        "a_4=10",
        "a_12=34"
      ],
      "target": "求S_15",
      "choices": [
        "300",
        "345",
        "360",
        "330"
      ],
      "answerIndex": 3,
      "independentSolution": "第4到第12項跨8步得d=3；首項1；第15項43；平均22，15項和330。",
      "mainExplanation": "依題意依序處理：由兩項求d。；回推首項並求末項。；套總和公式。，所以唯一正確選項是「330」。",
      "steps": [
        "由兩項求d。",
        "回推首項並求末項。",
        "套總和公式。"
      ],
      "optionAnalysis": [
        {
          "choice": "300",
          "truth": false,
          "reason": "300是末項或首項推算錯。"
        },
        {
          "choice": "345",
          "truth": false,
          "reason": "345把a_15誤作45。"
        },
        {
          "choice": "360",
          "truth": false,
          "reason": "360把首尾和或項數錯算。"
        },
        {
          "choice": "330",
          "truth": true,
          "reason": "d=(34-10)/8=3，a_1=10-9=1，a_15=43，S_15=15(1+43)/2=330。"
        }
      ],
      "misconceptionTarget": "直接把a_4當首項計算前15項。",
      "prerequisiteSkillIds": [
        "geometric-nth-basic"
      ],
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "數列唯一由兩項與等差條件決定。",
      "difficultyReason": "進階：三階段推理，涉及公差、首項、末項與總和。",
      "literacyContextNecessity": null,
      "authoringIntent": "由中間兩項重建數列後求和。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d3fbaf81b14b6eb77f72cc785b4fa4c42fe55d18bedfc04598fe50be01c4f9ca"
    },
    {
      "questionId": "u14-s009-v009",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "arithmetic-series-sum",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等差數列 5，10，15，… 的前 n 項和為 275，則 n 是多少？",
      "givenConditions": [
        "數列5、10、15…",
        "S_n=275"
      ],
      "target": "求n",
      "choices": [
        "9",
        "11",
        "55",
        "10"
      ],
      "answerIndex": 3,
      "independentSolution": "各項為5k，前n項和=5(1+…+n)=5n(n+1)/2。解n²+n-110=0=(n-10)(n+11)，取正整數10。",
      "mainExplanation": "依題意依序處理：建立含n的和式。；解方程式並排除負根。，所以唯一正確選項是「10」。",
      "steps": [
        "建立含n的和式。",
        "解方程式並排除負根。"
      ],
      "optionAnalysis": [
        {
          "choice": "9",
          "truth": false,
          "reason": "n=9時和225。"
        },
        {
          "choice": "11",
          "truth": false,
          "reason": "n=11時和330。"
        },
        {
          "choice": "55",
          "truth": false,
          "reason": "55是平均或除法誤解。"
        },
        {
          "choice": "10",
          "truth": true,
          "reason": "S_n=5n(n+1)/2=275，所以n(n+1)=110，n=10。"
        }
      ],
      "misconceptionTarget": "把275÷5=55直接當項數。",
      "prerequisiteSkillIds": [
        "geometric-nth-basic"
      ],
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "n為正整數；負根-11排除。",
      "difficultyReason": "進階：需建立二次方程式並套用正整數限制。",
      "literacyContextNecessity": null,
      "authoringIntent": "由總和反求項數。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e464dcab2cc38b5d0d1626a2eeadb15af5afa958c11f16a14c75334d138f74c0"
    },
    {
      "questionId": "u14-s009-v010",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "arithmetic-series-sum",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "一座小劇場有 10 排座位，第 1 排 18 席，每往後一排多 4 席。全劇場共有多少席？",
      "givenConditions": [
        "10排",
        "首排18",
        "每排+4"
      ],
      "target": "總座位",
      "choices": [
        "360",
        "180",
        "342",
        "378"
      ],
      "answerIndex": 0,
      "independentSolution": "座位數18、22、…、54形成10項等差級數；平均36席，乘10得360。",
      "mainExplanation": "依題意依序處理：求末排54。；累加10排。，所以唯一正確選項是「360」。",
      "steps": [
        "求末排54。",
        "累加10排。"
      ],
      "optionAnalysis": [
        {
          "choice": "360",
          "truth": true,
          "reason": "第10排54席，總和10(18+54)/2=360席。"
        },
        {
          "choice": "180",
          "truth": false,
          "reason": "180是首排乘10，忽略增加。"
        },
        {
          "choice": "342",
          "truth": false,
          "reason": "342是少一排或末項少4。"
        },
        {
          "choice": "378",
          "truth": false,
          "reason": "378是多算一排增量。"
        }
      ],
      "misconceptionTarget": "只計算第10排或把首排數乘排數。",
      "prerequisiteSkillIds": [
        "geometric-nth-basic"
      ],
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "答案為360席；10排皆包含。",
      "difficultyReason": "素養：需辨認「全劇場」要求級數總和，並把每排座位視為單項。",
      "literacyContextNecessity": "劇場排座位情境提供單排與全場總量的語意差異。",
      "authoringIntent": "劇場座位總量。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "cade38aa58e93f3acdca1d1a16a4c51d93c7f185b11e0f3e3f43eed98d0b736e"
    },
    {
      "questionId": "u14-s009-v011",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "arithmetic-series-sum",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "小安第 1 週存 200 元，以後每週比前一週多存 50 元，連續存 12 週。共存多少元？",
      "givenConditions": [
        "第1週200元",
        "每週+50元",
        "12週"
      ],
      "target": "總存款",
      "choices": [
        "750",
        "5700",
        "5400",
        "6000"
      ],
      "answerIndex": 1,
      "independentSolution": "每週存款為200、250、…、750；平均475元，12週共5700元。",
      "mainExplanation": "依題意依序處理：求第12週750。；用平均乘12。，所以唯一正確選項是「5700」。",
      "steps": [
        "求第12週750。",
        "用平均乘12。"
      ],
      "optionAnalysis": [
        {
          "choice": "750",
          "truth": false,
          "reason": "750只是第12週單週金額。"
        },
        {
          "choice": "5700",
          "truth": true,
          "reason": "第12週存750元，總和12(200+750)/2=5700元。"
        },
        {
          "choice": "5400",
          "truth": false,
          "reason": "5400是末項或平均錯。"
        },
        {
          "choice": "6000",
          "truth": false,
          "reason": "6000把平均估作500。"
        }
      ],
      "misconceptionTarget": "把最後一週金額當累積存款。",
      "prerequisiteSkillIds": [
        "geometric-nth-basic"
      ],
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "每週金額皆非負；答案5700元。",
      "difficultyReason": "素養：需由「共存」辨認累積，並保留元與週的角色。",
      "literacyContextNecessity": "存款情境不可刪除，因為它測試單週金額與累積金額。",
      "authoringIntent": "固定增加存款的累積。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3e14948caf900b9904ba6878227b512f2c3c725704c89ab19b93f24d3da7bcd2"
    },
    {
      "questionId": "u14-s009-v012",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "arithmetic-series-sum",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "大樓第 1 層裝 6 盞指示燈，每高一層多裝 3 盞，共計前 15 層。這 15 層共裝多少盞？",
      "givenConditions": [
        "首層6盞",
        "每層+3",
        "15層"
      ],
      "target": "總燈數",
      "choices": [
        "48",
        "360",
        "405",
        "450"
      ],
      "answerIndex": 2,
      "independentSolution": "每層燈數6、9、…、48；平均27，15層總數405盞。",
      "mainExplanation": "依題意依序處理：求末層。；累加前15層。，所以唯一正確選項是「405」。",
      "steps": [
        "求末層。",
        "累加前15層。"
      ],
      "optionAnalysis": [
        {
          "choice": "48",
          "truth": false,
          "reason": "48只是第15層。"
        },
        {
          "choice": "360",
          "truth": false,
          "reason": "360把平均或末項算錯。"
        },
        {
          "choice": "405",
          "truth": true,
          "reason": "第15層48盞，S=15(6+48)/2=405。"
        },
        {
          "choice": "450",
          "truth": false,
          "reason": "450把平均估成30。"
        }
      ],
      "misconceptionTarget": "只回答最高一層燈數。",
      "prerequisiteSkillIds": [
        "geometric-nth-basic"
      ],
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "層數15為正整數；答案405盞。",
      "difficultyReason": "素養：需把樓層作項次、每層燈數作項值，再求跨樓層總量。",
      "literacyContextNecessity": "樓層情境提供「每層」與「共計」的必要層次。",
      "authoringIntent": "樓層配置總量。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e27f14209a59930ab80296e1fd8166feaba101ce9354ff9f130fe818197f4f32"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u14-s009-cr001",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "arithmetic-series-sum",
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "求等差級數 -12+(-7)+(-2)+3+…+48 的總和，並說明項數如何得到。",
      "requiredWork": [
        "辨認公差5。",
        "確認48是否為數列項並求項數。",
        "計算總和。"
      ],
      "fullCreditSolution": [
        "首項-12，公差5。",
        "48=-12+(n-1)5，得到60=5(n-1)，n=13。",
        "S_13=13(-12+48)/2=13×18=234。"
      ],
      "alternativeSolutions": [
        "可列出負項與正項後配對，但仍需確認13項。"
      ],
      "reasoningSteps": [
        "首項-12，公差5。",
        "48=-12+(n-1)5，得到60=5(n-1)，n=13。",
        "S_13=13(-12+48)/2=13×18=234。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確求n=13與總和234，且說明端點方程式。"
        },
        {
          "score": 2,
          "criteria": "項數正確但總和算術錯，或總和正確但項數說明略。"
        },
        {
          "score": 1,
          "criteria": "只求得公差或項數，未完成總和。"
        },
        {
          "score": 0,
          "criteria": "未能確認48在數列中或項數錯誤無方法。"
        }
      ],
      "partialCreditRules": [
        "若將級數寫成-12+(-7)+(-2)+3避免符號混淆，同樣正確。"
      ],
      "followThroughPolicy": "若首尾和36算錯但公式與n正確，保留2分。",
      "unitAndNotationRules": "無單位；負項加法需括號清楚。",
      "answerOnlyPolicy": "只答234最多1分。",
      "commonErrors": [
        "把間隔12當項數12。",
        "把-12+48算成60。"
      ],
      "figureDrawingSpecRef": null,
      "independentReview": {
        "derivedResult": "n=13，總和234。",
        "ambiguity": "48恰為第13項，端點與公差一致。",
        "unitBoundaryCheck": "無單位；負項加法需括號清楚。",
        "decision": "pass",
        "reviewNote": "獨立依題目條件重新推導，得到「n=13，總和234。」。評分規準逐分對應本題必要步驟，並已檢查錯誤追隨與只寫答案的處理。"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "416373630fb62fd03b44bfd3e24476df7099c24cbed48c6904c4b83ed0d8a2a6"
    },
    {
      "questionId": "u14-s009-cr002",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "arithmetic-series-sum",
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "某等差數列前 20 項和為 610，首項為 2。若公差為 3，請檢查這三個條件是否相容；若不相容，指出矛盾。",
      "requiredWork": [
        "由首項、公差、項數獨立求S_20。",
        "與給定610比較。",
        "明確判斷相容性。"
      ],
      "fullCreditSolution": [
        "由a_1=2、d=3得a_20=2+19×3=59。",
        "因此S_20=20(2+59)/2=10×61=610。",
        "計算結果與給定相同，所以三個條件相容。"
      ],
      "alternativeSolutions": [
        "也可使用S_n=n[2a_1+(n-1)d]/2直接算20[4+57]/2=610。"
      ],
      "reasoningSteps": [
        "由a_1=2、d=3得a_20=2+19×3=59。",
        "因此S_20=20(2+59)/2=10×61=610。",
        "計算結果與給定相同，所以三個條件相容。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "獨立算出a_20=59與S_20=610，正確判斷相容。"
        },
        {
          "score": 2,
          "criteria": "總和610與判斷正確，但末項或公式說明略。"
        },
        {
          "score": 1,
          "criteria": "只說相容或只重述610，缺乏獨立計算。"
        },
        {
          "score": 0,
          "criteria": "判斷不相容且無正確證據。"
        }
      ],
      "partialCreditRules": [
        "題目刻意要求檢查，不能直接因給定而接受。"
      ],
      "followThroughPolicy": "若末項算術錯但直接公式正確得610，可得3分；兩種方法任一完整即可。",
      "unitAndNotationRules": "無單位；所有條件精確。",
      "answerOnlyPolicy": "只答「相容」不超過1分。",
      "commonErrors": [
        "把20項當20個公差得到a_20=62。",
        "未獨立計算就接受給定總和。"
      ],
      "figureDrawingSpecRef": null,
      "independentReview": {
        "derivedResult": "條件相容，a_20=59，S_20=610。",
        "ambiguity": "獨立公式驗證沒有矛盾。",
        "unitBoundaryCheck": "無單位；所有條件精確。",
        "decision": "pass",
        "reviewNote": "獨立依題目條件重新推導，得到「條件相容，a_20=59，S_20=610。」。評分規準逐分對應本題必要步驟，並已檢查錯誤追隨與只寫答案的處理。"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "50f4fb84c3b135a3b24a43e63da331a0b07d4f1736b1b19e157b02a275d80d82"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u14-s009-v001",
      "unitId": "u14",
      "skillId": "arithmetic-series-sum",
      "contentSha256": "bc060631739e39307b59953a0869856ce2f9dd79e0b167de19a6b93130541c55",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "S_20=20(1+20)/2=10×21=210。",
      "derivedAnswer": "210",
      "storedAnswer": "210",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「210」符合。其餘三項各自違反：190是20×19/2，少了最後一項20。；200是把平均誤作10。；220是多加10。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差級數和」講義中定義；本題目標為「求總和」。",
        "unitConflict": "兩端都包含；共有20項。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「210」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：兩端都包含；共有20項。",
        "alternateReading": "最可能的誤讀是「項數少1或首尾和少1。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：直接套用等差級數和。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「1+2+3+…+20 的總和是多少？」獨立重算為：S_20=20(1+20)/2=10×21=210。 四選項逐項核對後唯一正解為「210」；邊界檢查：兩端都包含；共有20項。",
      "reviewContentSha256": "17e23593abfc71cb388a6c17c8fa90cd4779325c803d2a10d54e5769155015ee"
    },
    {
      "questionId": "u14-s009-v002",
      "unitId": "u14",
      "skillId": "arithmetic-series-sum",
      "contentSha256": "e635360c6b2b1119e460eac53ff83da8f8df0474bb4e92b093aded538d2787be",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "列項可確認共10項；首尾和37，十項總和=5對首尾配對共185。",
      "derivedAnswer": "185",
      "storedAnswer": "185",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「185」符合。其餘三項各自違反：180是平均或端點計算錯。；190是把首尾和當38。；370忘記除以2。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差級數和」講義中定義；本題目標為「求和」。",
        "unitConflict": "32確實為5+9×3；端點包含。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「185」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：32確實為5+9×3；端點包含。",
        "alternateReading": "最可能的誤讀是「只看末項32就誤判項數或忘記加1。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：需先求項數再套公式。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等差級數 5+8+11+…+32 的總和是多少？」獨立重算為：列項可確認共10項；首尾和37，十項總和=5對首尾配對共185。 四選項逐項核對後唯一正解為「185」；邊界檢查：32確實為5+9×3；端點包含。",
      "reviewContentSha256": "2cd1ec18a4cd829d8425228d63d76539a5bc5ba106203c2b17448b55bc5d5a49"
    },
    {
      "questionId": "u14-s009-v003",
      "unitId": "u14",
      "skillId": "arithmetic-series-sum",
      "contentSha256": "625a28e0cdb3564766226c4f3b3d25e94ba5b895d29e5a7b55ca8823d12df05a",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "首項與末項配對：30+3=33；第二項27與倒數第二項6也同樣得到33。",
      "derivedAnswer": "33",
      "storedAnswer": "33",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回後只有「33」成立；其他三項分別因：30只抄首項。；27是第二項。；60是首項加倍。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差級數和」講義中定義；本題目標為「求和」。",
        "unitConflict": "3為第10項；所有項正。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「165」，沒有近似取整導致第二答案。",
        "domainBoundary": "首末項與項數明示。；項次、間隔、正負號與會考範圍均已逐項核對。",
        "alternateReading": "題幹明確要求「使用首尾配對理解等差級數」，沒有第二種合理所求。"
      },
      "difficultyReason": "基礎：改考首尾配對結構。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "languageCheck": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "u14-s009-v003 中央修訂後獨立重算：首項與末項配對：30+3=33；第二項27與倒數第二項6也同樣得到33。 四個選項逐項核對，唯一正解為「33」；其餘選項排除理由為：30只抄首項。；27是第二項。；60是首項加倍。",
      "reviewContentSha256": "1daf91f1242d3e18997a1614cc220ba5cd1023ad7c9a10af93e2604f9d3d309c"
    },
    {
      "questionId": "u14-s009-v004",
      "unitId": "u14",
      "skillId": "arithmetic-series-sum",
      "contentSha256": "2d9fdf739977027945c7cd11e7f0f860306456448e586ff5a62870ec81d0087e",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "先求末項38，再以15×17=255。也可用15[2(-4)+14×3]/2。",
      "derivedAnswer": "255",
      "storedAnswer": "255",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「255」符合。其餘三項各自違反：225是末項或平均計算錯。；270把首尾和當36。；285把末項誤作42。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差級數和」講義中定義；本題目標為「求S_15」。",
        "unitConflict": "含負首項但末項正；總和可為正。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「255」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：含負首項但末項正；總和可為正。",
        "alternateReading": "最可能的誤讀是「直接把公差3乘15後與首項相加當總和。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：需連續使用通項與級數公式。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等差數列首項為 -4、公差為 3，前 15 項和是多少？」獨立重算為：先求末項38，再以15×17=255。也可用15[2(-4)+14×3]/2。 四選項逐項核對後唯一正解為「255」；邊界檢查：含負首項但末項正；總和可為正。",
      "reviewContentSha256": "950bf355af4735b95406f2d6908c5c8d2fb937a78964ab44f7509e656da53de9"
    },
    {
      "questionId": "u14-s009-v005",
      "unitId": "u14",
      "skillId": "arithmetic-series-sum",
      "contentSha256": "9f138a1431f8365ad5a0e9b7844b8ad62eb83a93e3c119610ba034903faa207e",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "首尾平均(2+7.5)/2=4.75，乘12得57。",
      "derivedAnswer": "57",
      "storedAnswer": "57",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「57」符合。其餘三項各自違反：54是把末項算7。；60把平均誤作5。；66使用末項9。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差級數和」講義中定義；本題目標為「求總和」。",
        "unitConflict": "有限小數精確表示；無四捨五入。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「57」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：有限小數精確表示；無四捨五入。",
        "alternateReading": "最可能的誤讀是「把12項當成12次增加0.5。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：需精確處理小數與n-1。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等差數列 2，2.5，3，… 的前 12 項和是多少？」獨立重算為：首尾平均(2+7.5)/2=4.75，乘12得57。 四選項逐項核對後唯一正解為「57」；邊界檢查：有限小數精確表示；無四捨五入。",
      "reviewContentSha256": "fe3874f0321b8ef2eb0640dcf4ec32e26eafa0a49b194bb2955b92723f9badd0"
    },
    {
      "questionId": "u14-s009-v006",
      "unitId": "u14",
      "skillId": "arithmetic-series-sum",
      "contentSha256": "30d962f4c54b5a77af827e7ab6a78aa6a7cbcb7efb2a11c0ceec9fc4524ac2f4",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "公差4，末項75；18項平均41，總和738。",
      "derivedAnswer": "738",
      "storedAnswer": "738",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「738」符合。其餘三項各自違反：702是末項少4。；720把首尾和當80。；756多算一個公差。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差級數和」講義中定義；本題目標為「求和」。",
        "unitConflict": "第18項為75；項數固定18。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「738」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：第18項為75；項數固定18。",
        "alternateReading": "最可能的誤讀是「用18×4當末項增量。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：需自行辨認公差並求末項。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等差級數 7+11+15+… 共 18 項，其總和是多少？」獨立重算為：公差4，末項75；18項平均41，總和738。 四選項逐項核對後唯一正解為「738」；邊界檢查：第18項為75；項數固定18。",
      "reviewContentSha256": "c9a9dc1c34fefe0d41b031c63a2674800de4f8ae3debeaefd7849a313795c126"
    },
    {
      "questionId": "u14-s009-v007",
      "unitId": "u14",
      "skillId": "arithmetic-series-sum",
      "contentSha256": "a2cfa96a59b6935839686e41961f55f85bea1abba9795ff1ce75616fce8ff954",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "n=30-(-20)+1=51；S=51[-20+30]/2=51×5=255。也可抵消-20到20後加21到30。",
      "derivedAnswer": "255",
      "storedAnswer": "255",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「255」符合。其餘三項各自違反：0誤以為正負完全對稱；其實正數多到30。；250把項數算50。；510忘記除以2。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差級數和」講義中定義；本題目標為「求和」。",
        "unitConflict": "兩端與0均包含；51項。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「255」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：兩端與0均包含；51項。",
        "alternateReading": "最可能的誤讀是「看到跨越0就認為總和必為0。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：需正確計算含負數、0與正數的項數及不對稱剩餘。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「所有整數從 -20 加到 30 的總和是多少？」獨立重算為：n=30-(-20)+1=51；S=51[-20+30]/2=51×5=255。也可抵消-20到20後加21到30。 四選項逐項核對後唯一正解為「255」；邊界檢查：兩端與0均包含；51項。",
      "reviewContentSha256": "36bd91af56bb2ae582c402ce0842654e4617e9850f587a8cf6dde3ed8c1e4fbb"
    },
    {
      "questionId": "u14-s009-v008",
      "unitId": "u14",
      "skillId": "arithmetic-series-sum",
      "contentSha256": "d3fbaf81b14b6eb77f72cc785b4fa4c42fe55d18bedfc04598fe50be01c4f9ca",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "第4到第12項跨8步得d=3；首項1；第15項43；平均22，15項和330。",
      "derivedAnswer": "330",
      "storedAnswer": "330",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「330」符合。其餘三項各自違反：300是末項或首項推算錯。；345把a_15誤作45。；360把首尾和或項數錯算。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差級數和」講義中定義；本題目標為「求S_15」。",
        "unitConflict": "數列唯一由兩項與等差條件決定。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「330」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：數列唯一由兩項與等差條件決定。",
        "alternateReading": "最可能的誤讀是「直接把a_4當首項計算前15項。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：三階段推理，涉及公差、首項、末項與總和。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某等差數列 a_4=10、a_12=34，求前 15 項和。」獨立重算為：第4到第12項跨8步得d=3；首項1；第15項43；平均22，15項和330。 四選項逐項核對後唯一正解為「330」；邊界檢查：數列唯一由兩項與等差條件決定。",
      "reviewContentSha256": "f6233447c505fa6dc21bd04ff6aba3e2855f71322532e15fc5c0b23cfdf89c86"
    },
    {
      "questionId": "u14-s009-v009",
      "unitId": "u14",
      "skillId": "arithmetic-series-sum",
      "contentSha256": "e464dcab2cc38b5d0d1626a2eeadb15af5afa958c11f16a14c75334d138f74c0",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "各項為5k，前n項和=5(1+…+n)=5n(n+1)/2。解n²+n-110=0=(n-10)(n+11)，取正整數10。",
      "derivedAnswer": "10",
      "storedAnswer": "10",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「10」符合。其餘三項各自違反：n=9時和225。；n=11時和330。；55是平均或除法誤解。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差級數和」講義中定義；本題目標為「求n」。",
        "unitConflict": "n為正整數；負根-11排除。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「10」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：n為正整數；負根-11排除。",
        "alternateReading": "最可能的誤讀是「把275÷5=55直接當項數。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：需建立二次方程式並套用正整數限制。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等差數列 5，10，15，… 的前 n 項和為 275，則 n 是多少？」獨立重算為：各項為5k，前n項和=5(1+…+n)=5n(n+1)/2。解n²+n-110=0=(n-10)(n+11)，取正整數10。 四選項逐項核對後唯一正解為「10」；邊界檢查：n為正整數；負根-11排除。",
      "reviewContentSha256": "8bfde4063b6e5800cc42b9d7e729d36a5c9a49c58c521691a8eee12bb358b8e3"
    },
    {
      "questionId": "u14-s009-v010",
      "unitId": "u14",
      "skillId": "arithmetic-series-sum",
      "contentSha256": "cade38aa58e93f3acdca1d1a16a4c51d93c7f185b11e0f3e3f43eed98d0b736e",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "座位數18、22、…、54形成10項等差級數；平均36席，乘10得360。",
      "derivedAnswer": "360",
      "storedAnswer": "360",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「360」符合。其餘三項各自違反：180是首排乘10，忽略增加。；342是少一排或末項少4。；378是多算一排增量。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差級數和」講義中定義；本題目標為「總座位」。",
        "unitConflict": "答案為360席；10排皆包含。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「360」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：答案為360席；10排皆包含。",
        "alternateReading": "最可能的誤讀是「只計算第10排或把首排數乘排數。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：需辨認「全劇場」要求級數總和，並把每排座位視為單項。",
      "literacyContextNecessity": "劇場排座位情境提供單排與全場總量的語意差異。",
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一座小劇場有 10 排座位，第 1 排 18 席，每往後一排多 4 席。全劇場共有多少席？」獨立重算為：座位數18、22、…、54形成10項等差級數；平均36席，乘10得360。 四選項逐項核對後唯一正解為「360」；邊界檢查：答案為360席；10排皆包含。",
      "reviewContentSha256": "6d6c27d14b3225f7577207bde4560fd688cc6daf9b62587b9d5eb6e9ce796a47"
    },
    {
      "questionId": "u14-s009-v011",
      "unitId": "u14",
      "skillId": "arithmetic-series-sum",
      "contentSha256": "3e14948caf900b9904ba6878227b512f2c3c725704c89ab19b93f24d3da7bcd2",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "每週存款為200、250、…、750；平均475元，12週共5700元。",
      "derivedAnswer": "5700",
      "storedAnswer": "5700",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「5700」符合。其餘三項各自違反：750只是第12週單週金額。；5400是末項或平均錯。；6000把平均估作500。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差級數和」講義中定義；本題目標為「總存款」。",
        "unitConflict": "每週金額皆非負；答案5700元。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「5700」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：每週金額皆非負；答案5700元。",
        "alternateReading": "最可能的誤讀是「把最後一週金額當累積存款。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：需由「共存」辨認累積，並保留元與週的角色。",
      "literacyContextNecessity": "存款情境不可刪除，因為它測試單週金額與累積金額。",
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「小安第 1 週存 200 元，以後每週比前一週多存 50 元，連續存 12 週。共存多少元？」獨立重算為：每週存款為200、250、…、750；平均475元，12週共5700元。 四選項逐項核對後唯一正解為「5700」；邊界檢查：每週金額皆非負；答案5700元。",
      "reviewContentSha256": "e91641aa86b872785ea10e98144fd8e50ab27737eb53d8fe4c200f512342f426"
    },
    {
      "questionId": "u14-s009-v012",
      "unitId": "u14",
      "skillId": "arithmetic-series-sum",
      "contentSha256": "e27f14209a59930ab80296e1fd8166feaba101ce9354ff9f130fe818197f4f32",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "每層燈數6、9、…、48；平均27，15層總數405盞。",
      "derivedAnswer": "405",
      "storedAnswer": "405",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「405」符合。其餘三項各自違反：48只是第15層。；360把平均或末項算錯。；450把平均估成30。",
        "undefinedSymbol": "題幹所用符號與用語均在「等差級數和」講義中定義；本題目標為「總燈數」。",
        "unitConflict": "層數15為正整數；答案405盞。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「405」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：層數15為正整數；答案405盞。",
        "alternateReading": "最可能的誤讀是「只回答最高一層燈數。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：需把樓層作項次、每層燈數作項值，再求跨樓層總量。",
      "literacyContextNecessity": "樓層情境提供「每層」與「共計」的必要層次。",
      "prerequisiteCheck": "使用前置技能「等比第 n 項基本」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「大樓第 1 層裝 6 盞指示燈，每高一層多裝 3 盞，共計前 15 層。這 15 層共裝多少盞？」獨立重算為：每層燈數6、9、…、48；平均27，15層總數405盞。 四選項逐項核對後唯一正解為「405」；邊界檢查：層數15為正整數；答案405盞。",
      "reviewContentSha256": "b79fed606197a766fca4cf31b67beaf3a7624c918f51b73328a852edb38881f9"
    }
  ],
  "drawingSpecs": []
};
