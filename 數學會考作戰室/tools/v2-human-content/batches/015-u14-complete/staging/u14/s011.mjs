// Generated only from reviewed immutable source. Do not hand edit.
export default {
  "lecture": {
    "lectureId": "u14-s011-lecture-r1",
    "unitId": "u14",
    "numericUnitId": 14,
    "topicId": "u14-series",
    "skillId": "series-sum-word",
    "lockedTitle": "級數求和應用",
    "title": "級數求和應用：由總和反推項數與末項",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能由總和與其他條件反求末項。",
      "能由總和建立方程式求項數。",
      "能處理連續整數、倍數與奇偶數求和。",
      "能檢查項數整數性與情境限制。"
    ],
    "prerequisiteBridge": [
      {
        "skillId": "arithmetic-series-word",
        "title": "等差級數應用",
        "requiredLevel": "能說明「等差級數應用」的核心定義並完成基本計算，作為本技能的直接前置。"
      }
    ],
    "glossary": [
      {
        "term": "反推",
        "definition": "由已知總和回頭求未知項數或末項。"
      },
      {
        "term": "端點",
        "definition": "級數的第一項與最後一項。"
      },
      {
        "term": "連續倍數",
        "definition": "固定公差等於基準倍數的等差數列。"
      },
      {
        "term": "整數性",
        "definition": "項數必須是正整數。"
      }
    ],
    "notation": [
      {
        "symbol": "S_n=n(a_1+a_n)/2",
        "meaning": "反推的核心方程式。"
      },
      {
        "symbol": "a_n=a_1+(n-1)d",
        "meaning": "把末項改寫成n。"
      }
    ],
    "conceptNarrative": [
      "反推題通常先把未知量設為n或a_n，再把通項與和公式聯立。",
      "若n未知，代入後常形成可因式分解的二次方程式；國中範圍只取正整數解。",
      "連續奇數、偶數與某數的倍數都是等差數列，可直接找首末項與項數。",
      "解出代數答案後要回到情境，負根、非整數期數或超出範圍的根都要捨去。"
    ],
    "formalDefinitions": [
      {
        "name": "反推項數",
        "statement": "由總和條件求滿足的正整數n。"
      },
      {
        "name": "反推末項",
        "statement": "由平均項值關係求a_n。"
      }
    ],
    "formulas": [
      {
        "formula": "a_n=2S_n/n-a_1",
        "conditions": [
          "n與a_1已知"
        ],
        "meaning": "由總和反求末項。"
      },
      {
        "formula": "S_n=n[2a_1+(n-1)d]/2",
        "conditions": [
          "a_1、d已知，n未知"
        ],
        "meaning": "建立n的方程式。"
      }
    ],
    "nonApplicableCases": [
      "代數方程式的負根不能當項數。",
      "非整數n不表示可取最接近整數。",
      "端點不在同一等差數列時公式失效。",
      "總和題若每期變化不固定，不能只用平均端點。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "決定未知量n或a_n",
        "check": "依題目所問設變數。"
      },
      {
        "step": 2,
        "instruction": "列通項關係",
        "check": "必要時以n表示a_n。"
      },
      {
        "step": 3,
        "instruction": "代入S_n公式",
        "check": "建立一元方程式。"
      },
      {
        "step": 4,
        "instruction": "解方程式並篩選正整數",
        "check": "排除不合情境解。"
      },
      {
        "step": 5,
        "instruction": "回算末項與總和驗證",
        "check": "確保完全符合。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "8項等差數列首項6，總和216，求末項",
        "reasoning": "216=8(6+a_8)/2。",
        "solutionSteps": [
          "216=8(6+a_8)/2。",
          "54=6+a_8。"
        ],
        "answer": "a_8=48"
      },
      {
        "exampleId": "L2",
        "prompt": "3，6，9，… 前n項和為165",
        "reasoning": "S_n=3n(n+1)/2。",
        "solutionSteps": [
          "S_n=3n(n+1)/2。",
          "n(n+1)=110。"
        ],
        "answer": "n=10"
      },
      {
        "exampleId": "L3",
        "prompt": "21到79的所有奇數和",
        "reasoning": "d=2，n=(79-21)/2+1=30。",
        "solutionSteps": [
          "d=2，n=(79-21)/2+1=30。",
          "S=30×100/2。"
        ],
        "answer": "1500"
      },
      {
        "exampleId": "L4",
        "prompt": "首項10、公差4，前n項和384",
        "reasoning": "384=n[20+4(n-1)]/2。",
        "solutionSteps": [
          "384=n[20+4(n-1)]/2。",
          "2n(n+4)=384。"
        ],
        "answer": "n=12"
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
        "mistake": "解到兩根都保留",
        "why": "項數需正整數。",
        "correction": "代回情境篩選。"
      },
      {
        "mistake": "總和除以n就當末項",
        "why": "那是平均，不是末項。",
        "correction": "a_n=2平均-a_1。"
      },
      {
        "mistake": "奇數個數用端點差除2卻忘加1",
        "why": "端點包含。",
        "correction": "n=間隔+1。"
      },
      {
        "mistake": "把公差當首項倍數",
        "why": "公式角色混淆。",
        "correction": "逐一標示a_1、d。"
      },
      {
        "mistake": "四捨五入項數",
        "why": "項數不能近似。",
        "correction": "非整數表示條件不成立或計算錯。"
      },
      {
        "mistake": "未回算總和",
        "why": "代數錯誤無法被發現。",
        "correction": "把n放回原級數加總。"
      }
    ],
    "selfCheck": [
      "未知量是n還是a_n？",
      "是否同時使用通項與和公式？",
      "n是否為正整數？",
      "端點是否真的屬於數列？",
      "回算總和是否完全相符？"
    ],
    "summary": [
      "反推題把未知項數或末項放入和公式。",
      "n未知時常需解一元二次方程式。",
      "只接受符合情境的正整數項數。",
      "連續奇偶數與倍數可視為等差級數。"
    ],
    "connections": {
      "previous": "在等差級數情境中辨認首項、公差與總量。",
      "next": [
        "最後技能會整合表格、圖形、等差與等比判讀。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u14-s011-v001",
        "u14-s011-v002",
        "u14-s011-v003",
        "u14-s011-v004",
        "u14-s011-v005",
        "u14-s011-v006",
        "u14-s011-v007",
        "u14-s011-v008",
        "u14-s011-v009",
        "u14-s011-v010",
        "u14-s011-v011",
        "u14-s011-v012"
      ],
      "constructedResponseIds": [
        "u14-s011-cr001",
        "u14-s011-cr002"
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
      "reviewNote": "逐段檢查「級數求和應用」的定義、符號、適用條件與六類常見錯誤；四個例題均以不同數值與推理路徑重算，並確認未直接複製本技能題庫題幹。"
    },
    "contentSha256": "cef68f6ffa61b89264358dac27c1ee91bef950b70dc6dd391a3f00fbde1bf7cb"
  },
  "mcQuestions": [
    {
      "questionId": "u14-s011-v001",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "series-sum-word",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "小明 8 天閱讀頁數依序為 12、15、18、…，每天多讀 3 頁。8 天共讀多少頁？",
      "givenConditions": [
        "首日12頁",
        "每日+3",
        "8天"
      ],
      "target": "總頁數",
      "choices": [
        "33",
        "168",
        "180",
        "192"
      ],
      "answerIndex": 2,
      "independentSolution": "閱讀頁數12、15、…、33，共8項，平均22.5，總數180頁。",
      "mainExplanation": "依題意依序處理：求第8天。；累加8天。，所以唯一正確選項是「180」。",
      "steps": [
        "求第8天。",
        "累加8天。"
      ],
      "optionAnalysis": [
        {
          "choice": "33",
          "truth": false,
          "reason": "33只是第8天。"
        },
        {
          "choice": "168",
          "truth": false,
          "reason": "168把末項算30。"
        },
        {
          "choice": "180",
          "truth": true,
          "reason": "第8天33頁，S=8(12+33)/2=4×45=180。"
        },
        {
          "choice": "192",
          "truth": false,
          "reason": "192把末項算36。"
        }
      ],
      "misconceptionTarget": "把末日頁數當總頁數。",
      "prerequisiteSkillIds": [
        "arithmetic-series-word"
      ],
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "頁數為整數；總和180頁。",
      "difficultyReason": "基礎：一次求末項與總和，數字簡單。",
      "literacyContextNecessity": null,
      "authoringIntent": "基本閱讀累積。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9c66382f2fe73dab3798719681d70b52ec1944c4ad92a4c15278a9baaa07aa89"
    },
    {
      "questionId": "u14-s011-v002",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "series-sum-word",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等差級數5+7+9+…+23中，若已知前9項和為117，再加上第10項23，總和是多少？",
      "givenConditions": [
        "前9項和117",
        "第10項23"
      ],
      "target": "由部分和更新總和",
      "choices": [
        "115",
        "126",
        "280",
        "140"
      ],
      "answerIndex": 3,
      "independentSolution": "完整10項的總和=前9項和117+第10項23=140。",
      "mainExplanation": "辨認117尚未包含末項23，再相加。；完整檢查：完整10項的總和=前9項和117+第10項23=140。",
      "steps": [
        "辨認117尚未含第10項。",
        "計算117+23=140。"
      ],
      "optionAnalysis": [
        {
          "choice": "115",
          "truth": false,
          "reason": "加正數後不可能小於117。"
        },
        {
          "choice": "126",
          "truth": false,
          "reason": "126只增加9。"
        },
        {
          "choice": "280",
          "truth": false,
          "reason": "280是錯誤倍增。"
        },
        {
          "choice": "140",
          "truth": true,
          "reason": "117+23=140。"
        }
      ],
      "misconceptionTarget": "把項數、末項與部分和混淆。",
      "prerequisiteSkillIds": [
        "arithmetic-series-word"
      ],
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "117明定為前9項和。",
      "difficultyReason": "基礎：由部分和更新總和。",
      "literacyContextNecessity": null,
      "authoringIntent": "有限奇數級數求和。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3ca6234ec8b68e8e9744d25cdeca80edbb9ee014fd20906007611420267c7a00"
    },
    {
      "questionId": "u14-s011-v003",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "series-sum-word",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "六個月付款依序為 1000、950、900、850、800、750 元，總付款多少元？",
      "givenConditions": [
        "六個月完整金額"
      ],
      "target": "總付款",
      "choices": [
        "750",
        "5250",
        "5000",
        "5500"
      ],
      "answerIndex": 1,
      "independentSolution": "也可配對1000+750、950+800、900+850，三組各1750，共5250。",
      "mainExplanation": "依題意依序處理：首尾配對。；乘配對數3。，所以唯一正確選項是「5250」。",
      "steps": [
        "首尾配對。",
        "乘配對數3。"
      ],
      "optionAnalysis": [
        {
          "choice": "750",
          "truth": false,
          "reason": "750只是末月。"
        },
        {
          "choice": "5250",
          "truth": true,
          "reason": "首尾平均875，6個月總額6×875=5250。"
        },
        {
          "choice": "5000",
          "truth": false,
          "reason": "5000漏算或平均錯。"
        },
        {
          "choice": "5500",
          "truth": false,
          "reason": "5500高估平均。"
        }
      ],
      "misconceptionTarget": "把每月少50乘6後從總額錯扣。",
      "prerequisiteSkillIds": [
        "arithmetic-series-word"
      ],
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "所有月份均包含，單位元。",
      "difficultyReason": "基礎：可直接配對，數列已完整列出。",
      "literacyContextNecessity": null,
      "authoringIntent": "短期遞減級數。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "16cd2bc86c44d28f592342887c87ea9c2b0a90e6175680eb91511ffe6baae49d"
    },
    {
      "questionId": "u14-s011-v004",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "series-sum-word",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "某等差數列共有 8 項，首項為 24，總和為 360。末項是多少？",
      "givenConditions": [
        "n=8",
        "a_1=24",
        "S_8=360"
      ],
      "target": "求a_8",
      "choices": [
        "66",
        "45",
        "56",
        "72"
      ],
      "answerIndex": 0,
      "independentSolution": "平均項值=360÷8=45；首尾平均45，所以(24+a_8)/2=45，a_8=66。",
      "mainExplanation": "依題意依序處理：求平均45。；用末項=2×平均-首項。，所以唯一正確選項是「66」。",
      "steps": [
        "求平均45。",
        "用末項=2×平均-首項。"
      ],
      "optionAnalysis": [
        {
          "choice": "66",
          "truth": true,
          "reason": "360=8(24+a_8)/2，故90=24+a_8，a_8=66。"
        },
        {
          "choice": "45",
          "truth": false,
          "reason": "45是平均360/8。"
        },
        {
          "choice": "56",
          "truth": false,
          "reason": "56是平均後加錯。"
        },
        {
          "choice": "72",
          "truth": false,
          "reason": "72把平均45直接加首項27。"
        }
      ],
      "misconceptionTarget": "把平均45當末項。",
      "prerequisiteSkillIds": [
        "arithmetic-series-word"
      ],
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "等差條件保證首尾平均等於全體平均。",
      "difficultyReason": "標準：需理解總和除項數是平均，再利用首尾對稱。",
      "literacyContextNecessity": null,
      "authoringIntent": "由總和反推末項。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "31ff548d3e161599d5598ff16533b9d1c65beabae44bcfe36e8657fcf35baa63"
    },
    {
      "questionId": "u14-s011-v005",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "series-sum-word",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等差數列 7、12、17、… 從首項開始累加，前 n 項和第一次超過 200 時，n 是多少？",
      "givenConditions": [
        "a_1=7",
        "d=5",
        "從首項累加"
      ],
      "target": "最小正整數n",
      "choices": [
        "7",
        "8",
        "10",
        "9"
      ],
      "answerIndex": 3,
      "independentSolution": "先算相鄰候選：第8項42，S_8=196；第9項47，S_9=196+47=243，所以第一次超過200發生在n=9。",
      "mainExplanation": "依題意依序處理：找接近門檻的累積和。；同時核對前一項未超過與本項已超過。，所以唯一正確選項是「9」。",
      "steps": [
        "找接近門檻的累積和。",
        "同時核對前一項未超過與本項已超過。"
      ],
      "optionAnalysis": [
        {
          "choice": "7",
          "truth": false,
          "reason": "S_7=154，還沒接近跨過200。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "S_8=196，仍未超過200。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "n=10雖然也超過，但不是第一次。"
        },
        {
          "choice": "9",
          "truth": true,
          "reason": "S_8=8(7+42)/2=196尚未超過200；S_9=9(7+47)/2=243已超過，因此最小n為9。"
        }
      ],
      "misconceptionTarget": "只找一個超過200的項數，沒有檢查是否最小。",
      "prerequisiteSkillIds": [
        "arithmetic-series-word"
      ],
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "「第一次超過」要求前一個部分和不超過200，且S_n>200。",
      "difficultyReason": "標準：必須以S_8≤200<S_9的雙邊檢查確定「第一次」。",
      "literacyContextNecessity": null,
      "authoringIntent": "找累積和跨越門檻的最小項數。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3636a38612f30950ac66d5442023c3a5e82c60232a86caab48da85fe26eec05b"
    },
    {
      "questionId": "u14-s011-v006",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "series-sum-word",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "一個 12 項等差數列首項為 10，總和為 420。末項是多少？",
      "givenConditions": [
        "n=12",
        "a_1=10",
        "S=420"
      ],
      "target": "求末項",
      "choices": [
        "25",
        "50",
        "60",
        "70"
      ],
      "answerIndex": 2,
      "independentSolution": "全體平均35，首尾平均也為35，因此首尾和70，末項70-10=60。",
      "mainExplanation": "依題意依序處理：求平均35。；反推末項。，所以唯一正確選項是「60」。",
      "steps": [
        "求平均35。",
        "反推末項。"
      ],
      "optionAnalysis": [
        {
          "choice": "25",
          "truth": false,
          "reason": "25是平均420/12附近錯算。"
        },
        {
          "choice": "50",
          "truth": false,
          "reason": "50少10。"
        },
        {
          "choice": "60",
          "truth": true,
          "reason": "420=12(10+a_12)/2=6(10+a_12)，所以10+a_12=70，末項60。"
        },
        {
          "choice": "70",
          "truth": false,
          "reason": "70是首尾和。"
        }
      ],
      "misconceptionTarget": "把首尾和70直接報為末項。",
      "prerequisiteSkillIds": [
        "arithmetic-series-word"
      ],
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "末項60與12項等差模型一致。",
      "difficultyReason": "標準：需經過平均或方程式兩步。",
      "literacyContextNecessity": null,
      "authoringIntent": "由項數、首項與總和求末項。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a596f7af7a5a5e979aeefd5f5d3b7913a7b268e2eba096435ddce635e9c6072b"
    },
    {
      "questionId": "u14-s011-v007",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "series-sum-word",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "7 的正倍數從 7 加到 140，總和是多少？",
      "givenConditions": [
        "7至140的正倍數"
      ],
      "target": "求和",
      "choices": [
        "1470",
        "1400",
        "1540",
        "2940"
      ],
      "answerIndex": 0,
      "independentSolution": "級數為7(1+2+…+20)=7×210=1470，也可首尾配對。",
      "mainExplanation": "依題意依序處理：辨認20個倍數。；求和。，所以唯一正確選項是「1470」。",
      "steps": [
        "辨認20個倍數。",
        "求和。"
      ],
      "optionAnalysis": [
        {
          "choice": "1470",
          "truth": true,
          "reason": "共有140÷7=20項，S=20(7+140)/2=1470。"
        },
        {
          "choice": "1400",
          "truth": false,
          "reason": "1400把平均取70。"
        },
        {
          "choice": "1540",
          "truth": false,
          "reason": "1540多加一個7或項數錯。"
        },
        {
          "choice": "2940",
          "truth": false,
          "reason": "2940忘除2。"
        }
      ],
      "misconceptionTarget": "把140視為項數。",
      "prerequisiteSkillIds": [
        "arithmetic-series-word"
      ],
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "包含7與140；共20項。",
      "difficultyReason": "進階：需把末值140轉成倍數序號20，再求級數。",
      "literacyContextNecessity": null,
      "authoringIntent": "倍數級數的項數與總和。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3f7a1f8b9c594895cb9874259296bf29cf6680ff8add9ccb83473995895baa59"
    },
    {
      "questionId": "u14-s011-v008",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "series-sum-word",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "某售票活動第 1 天售 45 張，以後每天多售 5 張。若總共售出 870 張，活動進行幾天？",
      "givenConditions": [
        "首日45張",
        "每日+5",
        "總870張"
      ],
      "target": "活動天數",
      "choices": [
        "10",
        "12",
        "11",
        "13"
      ],
      "answerIndex": 1,
      "independentSolution": "解5n²+85n-1740=0，除5得n²+17n-348=(n-12)(n+29)=0；取n=12。",
      "mainExplanation": "依題意依序處理：建立累積售票方程式。；解並篩選正根。，所以唯一正確選項是「12」。",
      "steps": [
        "建立累積售票方程式。",
        "解並篩選正根。"
      ],
      "optionAnalysis": [
        {
          "choice": "10",
          "truth": false,
          "reason": "10天總售675張。"
        },
        {
          "choice": "12",
          "truth": true,
          "reason": "S_n=n[90+5(n-1)]/2=n(5n+85)/2=870；n=12成立。"
        },
        {
          "choice": "11",
          "truth": false,
          "reason": "11天總售770張。"
        },
        {
          "choice": "13",
          "truth": false,
          "reason": "13天總售975張。"
        }
      ],
      "misconceptionTarget": "用870÷45直接取整，忽略每日增加。",
      "prerequisiteSkillIds": [
        "arithmetic-series-word"
      ],
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "只取正整數12；代回總和870。",
      "difficultyReason": "進階：二次方程式與情境正整數限制。",
      "literacyContextNecessity": null,
      "authoringIntent": "由實際總量反推天數。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "470b0e34bc0d09b37169c40a2d92de862ffb7dae6566e0165841e9625d2f21d2"
    },
    {
      "questionId": "u14-s011-v009",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "series-sum-word",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "從 21 到 79 的所有奇數相加，總和是多少？",
      "givenConditions": [
        "21到79所有奇數"
      ],
      "target": "求總和",
      "choices": [
        "1450",
        "1500",
        "1470",
        "3000"
      ],
      "answerIndex": 1,
      "independentSolution": "首尾和100，共30項；配成15對，每對100，總和1500。",
      "mainExplanation": "依題意依序處理：求奇數個數30。；首尾配對。，所以唯一正確選項是「1500」。",
      "steps": [
        "求奇數個數30。",
        "首尾配對。"
      ],
      "optionAnalysis": [
        {
          "choice": "1450",
          "truth": false,
          "reason": "1450是29項或端點漏算。"
        },
        {
          "choice": "1500",
          "truth": true,
          "reason": "項數=(79-21)/2+1=30，S=30(21+79)/2=1500。"
        },
        {
          "choice": "1470",
          "truth": false,
          "reason": "1470首尾或項數錯。"
        },
        {
          "choice": "3000",
          "truth": false,
          "reason": "3000忘除2。"
        }
      ],
      "misconceptionTarget": "把58÷2=29直接當項數，忘記加1。",
      "prerequisiteSkillIds": [
        "arithmetic-series-word"
      ],
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "兩端皆奇數且包含。",
      "difficultyReason": "進階：端點包含與奇數間隔2的項數判斷。",
      "literacyContextNecessity": null,
      "authoringIntent": "較大範圍奇數求和。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "25cdd9bdb59baff85227d78ce093595eff454f41570bb34c790588a56d288fce"
    },
    {
      "questionId": "u14-s011-v010",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "series-sum-word",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "電池測試的容量讀數依序為 100、96、92、…，直到 60 為止。所有讀數的總和是多少？",
      "givenConditions": [
        "100起每次-4",
        "包含60"
      ],
      "target": "所有讀數和",
      "choices": [
        "880",
        "440",
        "840",
        "920"
      ],
      "answerIndex": 0,
      "independentSolution": "讀數100、96、…、60共11次；平均80，累計880。",
      "mainExplanation": "依題意依序處理：求讀數次數11。；用平均乘次數。，所以唯一正確選項是「880」。",
      "steps": [
        "求讀數次數11。",
        "用平均乘次數。"
      ],
      "optionAnalysis": [
        {
          "choice": "880",
          "truth": true,
          "reason": "公差-4，項數(60-100)/(-4)+1=11，S=11(100+60)/2=880。"
        },
        {
          "choice": "440",
          "truth": false,
          "reason": "440是只算一半項數。"
        },
        {
          "choice": "840",
          "truth": false,
          "reason": "840是10項和。"
        },
        {
          "choice": "920",
          "truth": false,
          "reason": "920把項數或末項錯算。"
        }
      ],
      "misconceptionTarget": "將10個下降間隔當成10次讀數。",
      "prerequisiteSkillIds": [
        "arithmetic-series-word"
      ],
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "60確實在序列中；共有11筆。",
      "difficultyReason": "素養：需分清10個間隔與11筆測量，並理解題目要求數值總和。",
      "literacyContextNecessity": "電池讀數情境讓「直到60為止」包含末次測量，測試端點語意。",
      "authoringIntent": "量測序列的累積讀值。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7590e8b35ddec1ef1a5a0fe6e5447742febfc3dbb7e05396c3482d7065bc6a54"
    },
    {
      "questionId": "u14-s011-v011",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "series-sum-word",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "訓練計畫共 9 天，每天圈數等差增加。第 1 天跑 10 圈，9 天合計 234 圈。第 9 天跑幾圈？",
      "givenConditions": [
        "9天",
        "首日10圈",
        "總234圈"
      ],
      "target": "第9天圈數",
      "choices": [
        "26",
        "52",
        "42",
        "58"
      ],
      "answerIndex": 2,
      "independentSolution": "平均每天26圈；首尾平均26，所以末日=2×26-10=42圈。公差為4圈。",
      "mainExplanation": "依題意依序處理：求平均26。；反推末日42。，所以唯一正確選項是「42」。",
      "steps": [
        "求平均26。",
        "反推末日42。"
      ],
      "optionAnalysis": [
        {
          "choice": "26",
          "truth": false,
          "reason": "26是平均234/9。"
        },
        {
          "choice": "52",
          "truth": false,
          "reason": "52是首尾和。"
        },
        {
          "choice": "42",
          "truth": true,
          "reason": "234=9(10+a_9)/2，所以10+a_9=52，a_9=42。"
        },
        {
          "choice": "58",
          "truth": false,
          "reason": "58是把平均加首項。"
        }
      ],
      "misconceptionTarget": "把平均每天26圈當第9天圈數。",
      "prerequisiteSkillIds": [
        "arithmetic-series-word"
      ],
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "末日42圈；公差(42-10)/8=4為整數。",
      "difficultyReason": "素養：需區分平均、末日與總量，並檢查末日圈數為整數。",
      "literacyContextNecessity": "訓練情境提供每天單量與9天累積量的層次。",
      "authoringIntent": "由總訓練量反推末日單量。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "69dfdd796106ba1a77bf2187c682cd180cb7261f53207b2f7b5957de11c7c5b3"
    },
    {
      "questionId": "u14-s011-v012",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "series-sum-word",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "一項 15 週預算按等差數列分配，第 1 週 280 元，15 週總額 6300 元。第 15 週分配多少元？",
      "givenConditions": [
        "15週",
        "首週280元",
        "總6300元"
      ],
      "target": "末週金額",
      "choices": [
        "420",
        "540",
        "840",
        "560"
      ],
      "answerIndex": 3,
      "independentSolution": "平均每週420元；等差首尾平均420，因此末週=840-280=560元。",
      "mainExplanation": "依題意依序處理：由總額求平均420。；反推末週。，所以唯一正確選項是「560」。",
      "steps": [
        "由總額求平均420。",
        "反推末週。"
      ],
      "optionAnalysis": [
        {
          "choice": "420",
          "truth": false,
          "reason": "420是平均6300/15。"
        },
        {
          "choice": "540",
          "truth": false,
          "reason": "540是減法錯20。"
        },
        {
          "choice": "840",
          "truth": false,
          "reason": "840是首尾和。"
        },
        {
          "choice": "560",
          "truth": true,
          "reason": "6300=15(280+a_15)/2，首尾和840，所以a_15=560。"
        }
      ],
      "misconceptionTarget": "把平均或首尾和當末週金額。",
      "prerequisiteSkillIds": [
        "arithmetic-series-word"
      ],
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "末週560元；若需要公差則20元/週，模型可行。",
      "difficultyReason": "素養：需將平均分配額與等差末週額分開，並保留貨幣單位。",
      "literacyContextNecessity": "預算情境要求由總額推單週末項，而非平均分配。",
      "authoringIntent": "預算總額反推末期配置。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5325150e5aced63ba623fd1958c893952b8708bf41f64a174be85f5af9b7c2b8"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u14-s011-cr001",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "series-sum-word",
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "某等差數列首項為 8、公差為 4。判斷是否存在正整數 n 使前 n 項和為 468；若存在求 n，若不存在請說明。",
      "requiredWork": [
        "建立S_n方程式。",
        "解出正整數n。",
        "代回驗證總和。"
      ],
      "fullCreditSolution": [
        "S_n=n[16+4(n-1)]/2=2n(n+3)。",
        "若S_n=468，則n(n+3)=234，也就是n²+3n-234=0。",
        "判別式3²+4×234=945不是完全平方，因此方程式沒有整數根。",
        "再檢查相鄰項數：S_13=416，S_14=476，468介於兩者之間。",
        "所以不存在正整數n使前n項和恰為468。"
      ],
      "alternativeSolutions": [
        "可逐一檢查相鄰n：S_13=416，S_14=476，468介於兩者之間，故不存在整數n。"
      ],
      "reasoningSteps": [
        "S_n=n[16+4(n-1)]/2=2n(n+3)。",
        "若S_n=468，則n(n+3)=234，也就是n²+3n-234=0。",
        "判別式3²+4×234=945不是完全平方，因此方程式沒有整數根。",
        "再檢查相鄰項數：S_13=416，S_14=476，468介於兩者之間。",
        "所以不存在正整數n使前n項和恰為468。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確建立2n(n+3)=468，指出沒有正整數解，並以S_13=416、S_14=476驗證。"
        },
        {
          "score": 2,
          "criteria": "方程式正確且判斷無整數解，但驗證不足；或相鄰和驗證正確但代數略。"
        },
        {
          "score": 1,
          "criteria": "只算出468介於兩個總和但未清楚說項數整數性。"
        },
        {
          "score": 0,
          "criteria": "錯答n=13或14且未驗算。"
        }
      ],
      "partialCreditRules": [
        "本題刻意包含不相容總和；能發現錯誤因式分解並修正是完整推理的一部分。"
      ],
      "followThroughPolicy": "若學生先得到n=13但代回發現不符並改判無解，按最終修正給滿分。",
      "unitAndNotationRules": "無單位；n必須是正整數，不能四捨五入。",
      "answerOnlyPolicy": "只答「無解」且無證據最多1分。",
      "commonErrors": [
        "硬把非整數根四捨五入成13或14。",
        "錯誤認為(n-13)(n+18)=n²+5n-234。"
      ],
      "figureDrawingSpecRef": null,
      "independentReview": {
        "derivedResult": "不存在正整數n；S_13=416，S_14=476。",
        "ambiguity": "總和468落在相鄰兩個前n項和之間，條件確定不相容。",
        "unitBoundaryCheck": "無單位；n必須是正整數，不能四捨五入。",
        "decision": "pass",
        "reviewNote": "獨立依題目條件重新推導，得到「不存在正整數n；S_13=416，S_14=476。」。評分規準逐分對應本題必要步驟，並已檢查錯誤追隨與只寫答案的處理。"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "72032b86b886bb4d0d75e7f7f9bf11fa5b693b01bde335533471b9a2166f8eb7"
    },
    {
      "questionId": "u14-s011-cr002",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-series",
      "skillId": "series-sum-word",
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "某分期方案共有 12 期，金額等差遞增。第一期 500 元，12 期總額 9300 元。求第 12 期金額與每期增加額。",
      "requiredWork": [
        "由總和反求末項。",
        "由首末與間隔求公差。",
        "附貨幣單位並驗算。"
      ],
      "fullCreditSolution": [
        "9300=12(500+a_12)/2=6(500+a_12)。",
        "500+a_12=1550，所以a_12=1050元。",
        "d=(1050-500)/(12-1)=550/11=50元/期。",
        "驗算平均775元，12期共9300元。"
      ],
      "alternativeSolutions": [
        "可先求平均9300÷12=775，再由首尾平均775得末項1050。"
      ],
      "reasoningSteps": [
        "9300=12(500+a_12)/2=6(500+a_12)。",
        "500+a_12=1550，所以a_12=1050元。",
        "d=(1050-500)/(12-1)=550/11=50元/期。",
        "驗算平均775元，12期共9300元。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "末期1050元、公差50元/期，且總和驗算正確。"
        },
        {
          "score": 2,
          "criteria": "末項正確但公差算錯或漏答；或方法完整有一處算術錯。"
        },
        {
          "score": 1,
          "criteria": "只求平均775元或只求出末項。"
        },
        {
          "score": 0,
          "criteria": "把平均775當末項且無進一步推理。"
        }
      ],
      "partialCreditRules": [
        "末項與公差皆為要求；只完成末項最高1分。"
      ],
      "followThroughPolicy": "若末項因算術錯而錯，但公差一致由11個間隔計算，可給2分。",
      "unitAndNotationRules": "金額單位元，公差應寫元/期。",
      "answerOnlyPolicy": "只答1050、50最多1分。",
      "commonErrors": [
        "把12期當12個間隔。",
        "把平均775當第12期。"
      ],
      "figureDrawingSpecRef": null,
      "independentReview": {
        "derivedResult": "第12期1050元，每期增加50元。",
        "ambiguity": "12期、首項與總額唯一決定末項及公差。",
        "unitBoundaryCheck": "金額單位元，公差應寫元/期。",
        "decision": "pass",
        "reviewNote": "獨立依題目條件重新推導，得到「第12期1050元，每期增加50元。」。評分規準逐分對應本題必要步驟，並已檢查錯誤追隨與只寫答案的處理。"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "654380884e2bb674c03f21704d8c1bc04a5429cce73519473f5276239d9da3d0"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u14-s011-v001",
      "unitId": "u14",
      "skillId": "series-sum-word",
      "contentSha256": "9c66382f2fe73dab3798719681d70b52ec1944c4ad92a4c15278a9baaa07aa89",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "閱讀頁數12、15、…、33，共8項，平均22.5，總數180頁。",
      "derivedAnswer": "180",
      "storedAnswer": "180",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「180」符合。其餘三項各自違反：33只是第8天。；168把末項算30。；192把末項算36。",
        "undefinedSymbol": "題幹所用符號與用語均在「級數求和應用」講義中定義；本題目標為「總頁數」。",
        "unitConflict": "頁數為整數；總和180頁。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「180」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：頁數為整數；總和180頁。",
        "alternateReading": "最可能的誤讀是「把末日頁數當總頁數。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：一次求末項與總和，數字簡單。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「小明 8 天閱讀頁數依序為 12、15、18、…，每天多讀 3 頁。8 天共讀多少頁？」獨立重算為：閱讀頁數12、15、…、33，共8項，平均22.5，總數180頁。 四選項逐項核對後唯一正解為「180」；邊界檢查：頁數為整數；總和180頁。",
      "reviewContentSha256": "470e067523ce47394d67d0ebfcf4a29d0999a23252bbe157ca2cf307bce460b9"
    },
    {
      "questionId": "u14-s011-v002",
      "unitId": "u14",
      "skillId": "series-sum-word",
      "contentSha256": "3ca6234ec8b68e8e9744d25cdeca80edbb9ee014fd20906007611420267c7a00",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "完整10項的總和=前9項和117+第10項23=140。",
      "derivedAnswer": "140",
      "storedAnswer": "140",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回後只有「140」成立；其他三項分別因：加正數後不可能小於117。；126只增加9。；280是錯誤倍增。",
        "undefinedSymbol": "題幹所用符號與用語均在「級數求和應用」講義中定義；本題目標為「求和」。",
        "unitConflict": "5與23皆包含。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「140」，沒有近似取整導致第二答案。",
        "domainBoundary": "117明定為前9項和。；項次、間隔、正負號與會考範圍均已逐項核對。",
        "alternateReading": "題幹明確要求「由部分和更新總和」，沒有第二種合理所求。"
      },
      "difficultyReason": "基礎：由部分和更新總和。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "languageCheck": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "u14-s011-v002 中央修訂後獨立重算：完整10項的總和=前9項和117+第10項23=140。 四個選項逐項核對，唯一正解為「140」；其餘選項排除理由為：加正數後不可能小於117。；126只增加9。；280是錯誤倍增。",
      "reviewContentSha256": "b450fff0bb2036ebe9760c8efbccc38cb9f4ca6650f711c9520d260a5bc0c209"
    },
    {
      "questionId": "u14-s011-v003",
      "unitId": "u14",
      "skillId": "series-sum-word",
      "contentSha256": "16cd2bc86c44d28f592342887c87ea9c2b0a90e6175680eb91511ffe6baae49d",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "也可配對1000+750、950+800、900+850，三組各1750，共5250。",
      "derivedAnswer": "5250",
      "storedAnswer": "5250",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「5250」符合。其餘三項各自違反：750只是末月。；5000漏算或平均錯。；5500高估平均。",
        "undefinedSymbol": "題幹所用符號與用語均在「級數求和應用」講義中定義；本題目標為「總付款」。",
        "unitConflict": "所有月份均包含，單位元。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「5250」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：所有月份均包含，單位元。",
        "alternateReading": "最可能的誤讀是「把每月少50乘6後從總額錯扣。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：可直接配對，數列已完整列出。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「六個月付款依序為 1000、950、900、850、800、750 元，總付款多少元？」獨立重算為：也可配對1000+750、950+800、900+850，三組各1750，共5250。 四選項逐項核對後唯一正解為「5250」；邊界檢查：所有月份均包含，單位元。",
      "reviewContentSha256": "dfbf9b41ba63cfa970ac59096b7f406ae890e4ea09bf804ca11b2ebe49c0d1d0"
    },
    {
      "questionId": "u14-s011-v004",
      "unitId": "u14",
      "skillId": "series-sum-word",
      "contentSha256": "31ff548d3e161599d5598ff16533b9d1c65beabae44bcfe36e8657fcf35baa63",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "平均項值=360÷8=45；首尾平均45，所以(24+a_8)/2=45，a_8=66。",
      "derivedAnswer": "66",
      "storedAnswer": "66",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「66」符合。其餘三項各自違反：45是平均360/8。；56是平均後加錯。；72把平均45直接加首項27。",
        "undefinedSymbol": "題幹所用符號與用語均在「級數求和應用」講義中定義；本題目標為「求a_8」。",
        "unitConflict": "等差條件保證首尾平均等於全體平均。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「66」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：等差條件保證首尾平均等於全體平均。",
        "alternateReading": "最可能的誤讀是「把平均45當末項。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：需理解總和除項數是平均，再利用首尾對稱。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某等差數列共有 8 項，首項為 24，總和為 360。末項是多少？」獨立重算為：平均項值=360÷8=45；首尾平均45，所以(24+a_8)/2=45，a_8=66。 四選項逐項核對後唯一正解為「66」；邊界檢查：等差條件保證首尾平均等於全體平均。",
      "reviewContentSha256": "95ca590fe8855d3d1c1c1f34c43c6cf0c6efde759adbd655753821def079125c"
    },
    {
      "questionId": "u14-s011-v005",
      "unitId": "u14",
      "skillId": "series-sum-word",
      "contentSha256": "3636a38612f30950ac66d5442023c3a5e82c60232a86caab48da85fe26eec05b",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "先算相鄰候選：第8項42，S_8=196；第9項47，S_9=196+47=243，所以第一次超過200發生在n=9。",
      "derivedAnswer": "9",
      "storedAnswer": "9",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「9」符合。其餘三項各自違反：S_7=154，還沒接近跨過200。；S_8=196，仍未超過200。；n=10雖然也超過，但不是第一次。",
        "undefinedSymbol": "題幹所用符號與用語均在「級數求和應用」講義中定義；本題目標為「最小正整數n」。",
        "unitConflict": "「第一次超過」要求前一個部分和不超過200，且S_n>200。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「9」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：「第一次超過」要求前一個部分和不超過200，且S_n>200。",
        "alternateReading": "最可能的誤讀是「只找一個超過200的項數，沒有檢查是否最小。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：必須以S_8≤200<S_9的雙邊檢查確定「第一次」。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等差數列 7、12、17、… 從首項開始累加，前 n 項和第一次超過 200 時，n 是多少？」獨立重算為：先算相鄰候選：第8項42，S_8=196；第9項47，S_9=196+47=243，所以第一次超過200發生在n=9。 四選項逐項核對後唯一正解為「9」；邊界檢查：「第一次超過」要求前一個部分和不超過200，且S_n>200。",
      "reviewContentSha256": "afda5fede4077883763690908bb45e8233cdc309023a848ba944b9ba036784dc"
    },
    {
      "questionId": "u14-s011-v006",
      "unitId": "u14",
      "skillId": "series-sum-word",
      "contentSha256": "a596f7af7a5a5e979aeefd5f5d3b7913a7b268e2eba096435ddce635e9c6072b",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "全體平均35，首尾平均也為35，因此首尾和70，末項70-10=60。",
      "derivedAnswer": "60",
      "storedAnswer": "60",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「60」符合。其餘三項各自違反：25是平均420/12附近錯算。；50少10。；70是首尾和。",
        "undefinedSymbol": "題幹所用符號與用語均在「級數求和應用」講義中定義；本題目標為「求末項」。",
        "unitConflict": "末項60與12項等差模型一致。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「60」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：末項60與12項等差模型一致。",
        "alternateReading": "最可能的誤讀是「把首尾和70直接報為末項。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：需經過平均或方程式兩步。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一個 12 項等差數列首項為 10，總和為 420。末項是多少？」獨立重算為：全體平均35，首尾平均也為35，因此首尾和70，末項70-10=60。 四選項逐項核對後唯一正解為「60」；邊界檢查：末項60與12項等差模型一致。",
      "reviewContentSha256": "3060ea8f50d800fa763a4e02eae0e4b3d80068fce5219497354b635b555c4e1e"
    },
    {
      "questionId": "u14-s011-v007",
      "unitId": "u14",
      "skillId": "series-sum-word",
      "contentSha256": "3f7a1f8b9c594895cb9874259296bf29cf6680ff8add9ccb83473995895baa59",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "級數為7(1+2+…+20)=7×210=1470，也可首尾配對。",
      "derivedAnswer": "1470",
      "storedAnswer": "1470",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「1470」符合。其餘三項各自違反：1400把平均取70。；1540多加一個7或項數錯。；2940忘除2。",
        "undefinedSymbol": "題幹所用符號與用語均在「級數求和應用」講義中定義；本題目標為「求和」。",
        "unitConflict": "包含7與140；共20項。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「1470」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：包含7與140；共20項。",
        "alternateReading": "最可能的誤讀是「把140視為項數。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：需把末值140轉成倍數序號20，再求級數。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「7 的正倍數從 7 加到 140，總和是多少？」獨立重算為：級數為7(1+2+…+20)=7×210=1470，也可首尾配對。 四選項逐項核對後唯一正解為「1470」；邊界檢查：包含7與140；共20項。",
      "reviewContentSha256": "ab53b230acc8661f5217b5fdd51c801cfdc998c050f71edcf07083edc3b6477f"
    },
    {
      "questionId": "u14-s011-v008",
      "unitId": "u14",
      "skillId": "series-sum-word",
      "contentSha256": "470b0e34bc0d09b37169c40a2d92de862ffb7dae6566e0165841e9625d2f21d2",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "解5n²+85n-1740=0，除5得n²+17n-348=(n-12)(n+29)=0；取n=12。",
      "derivedAnswer": "12",
      "storedAnswer": "12",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「12」符合。其餘三項各自違反：10天總售675張。；11天總售770張。；13天總售975張。",
        "undefinedSymbol": "題幹所用符號與用語均在「級數求和應用」講義中定義；本題目標為「活動天數」。",
        "unitConflict": "只取正整數12；代回總和870。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「12」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：只取正整數12；代回總和870。",
        "alternateReading": "最可能的誤讀是「用870÷45直接取整，忽略每日增加。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：二次方程式與情境正整數限制。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某售票活動第 1 天售 45 張，以後每天多售 5 張。若總共售出 870 張，活動進行幾天？」獨立重算為：解5n²+85n-1740=0，除5得n²+17n-348=(n-12)(n+29)=0；取n=12。 四選項逐項核對後唯一正解為「12」；邊界檢查：只取正整數12；代回總和870。",
      "reviewContentSha256": "5d2a2b5bb8b16e360138f8ad0a3969a45e5da32a180aa732d59dd471f6311424"
    },
    {
      "questionId": "u14-s011-v009",
      "unitId": "u14",
      "skillId": "series-sum-word",
      "contentSha256": "25cdd9bdb59baff85227d78ce093595eff454f41570bb34c790588a56d288fce",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "首尾和100，共30項；配成15對，每對100，總和1500。",
      "derivedAnswer": "1500",
      "storedAnswer": "1500",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「1500」符合。其餘三項各自違反：1450是29項或端點漏算。；1470首尾或項數錯。；3000忘除2。",
        "undefinedSymbol": "題幹所用符號與用語均在「級數求和應用」講義中定義；本題目標為「求總和」。",
        "unitConflict": "兩端皆奇數且包含。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「1500」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：兩端皆奇數且包含。",
        "alternateReading": "最可能的誤讀是「把58÷2=29直接當項數，忘記加1。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：端點包含與奇數間隔2的項數判斷。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「從 21 到 79 的所有奇數相加，總和是多少？」獨立重算為：首尾和100，共30項；配成15對，每對100，總和1500。 四選項逐項核對後唯一正解為「1500」；邊界檢查：兩端皆奇數且包含。",
      "reviewContentSha256": "b4204a7a353f4d9546dd020fc4d00a450fdbdb60eea7791cd63b68300129e69a"
    },
    {
      "questionId": "u14-s011-v010",
      "unitId": "u14",
      "skillId": "series-sum-word",
      "contentSha256": "7590e8b35ddec1ef1a5a0fe6e5447742febfc3dbb7e05396c3482d7065bc6a54",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "讀數100、96、…、60共11次；平均80，累計880。",
      "derivedAnswer": "880",
      "storedAnswer": "880",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「880」符合。其餘三項各自違反：440是只算一半項數。；840是10項和。；920把項數或末項錯算。",
        "undefinedSymbol": "題幹所用符號與用語均在「級數求和應用」講義中定義；本題目標為「所有讀數和」。",
        "unitConflict": "60確實在序列中；共有11筆。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「880」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：60確實在序列中；共有11筆。",
        "alternateReading": "最可能的誤讀是「將10個下降間隔當成10次讀數。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：需分清10個間隔與11筆測量，並理解題目要求數值總和。",
      "literacyContextNecessity": "電池讀數情境讓「直到60為止」包含末次測量，測試端點語意。",
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「電池測試的容量讀數依序為 100、96、92、…，直到 60 為止。所有讀數的總和是多少？」獨立重算為：讀數100、96、…、60共11次；平均80，累計880。 四選項逐項核對後唯一正解為「880」；邊界檢查：60確實在序列中；共有11筆。",
      "reviewContentSha256": "3881a84254aad796f20b763f5fd22ec587231ffaaee7a6c96d6a9b4ef18dadea"
    },
    {
      "questionId": "u14-s011-v011",
      "unitId": "u14",
      "skillId": "series-sum-word",
      "contentSha256": "69dfdd796106ba1a77bf2187c682cd180cb7261f53207b2f7b5957de11c7c5b3",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "平均每天26圈；首尾平均26，所以末日=2×26-10=42圈。公差為4圈。",
      "derivedAnswer": "42",
      "storedAnswer": "42",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「42」符合。其餘三項各自違反：26是平均234/9。；52是首尾和。；58是把平均加首項。",
        "undefinedSymbol": "題幹所用符號與用語均在「級數求和應用」講義中定義；本題目標為「第9天圈數」。",
        "unitConflict": "末日42圈；公差(42-10)/8=4為整數。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「42」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：末日42圈；公差(42-10)/8=4為整數。",
        "alternateReading": "最可能的誤讀是「把平均每天26圈當第9天圈數。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：需區分平均、末日與總量，並檢查末日圈數為整數。",
      "literacyContextNecessity": "訓練情境提供每天單量與9天累積量的層次。",
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「訓練計畫共 9 天，每天圈數等差增加。第 1 天跑 10 圈，9 天合計 234 圈。第 9 天跑幾圈？」獨立重算為：平均每天26圈；首尾平均26，所以末日=2×26-10=42圈。公差為4圈。 四選項逐項核對後唯一正解為「42」；邊界檢查：末日42圈；公差(42-10)/8=4為整數。",
      "reviewContentSha256": "77937c6a59341190c413286a958284d91af79493d2119cf395eea8409065f2f4"
    },
    {
      "questionId": "u14-s011-v012",
      "unitId": "u14",
      "skillId": "series-sum-word",
      "contentSha256": "5325150e5aced63ba623fd1958c893952b8708bf41f64a174be85f5af9b7c2b8",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "平均每週420元；等差首尾平均420，因此末週=840-280=560元。",
      "derivedAnswer": "560",
      "storedAnswer": "560",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「560」符合。其餘三項各自違反：420是平均6300/15。；540是減法錯20。；840是首尾和。",
        "undefinedSymbol": "題幹所用符號與用語均在「級數求和應用」講義中定義；本題目標為「末週金額」。",
        "unitConflict": "末週560元；若需要公差則20元/週，模型可行。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「560」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：末週560元；若需要公差則20元/週，模型可行。",
        "alternateReading": "最可能的誤讀是「把平均或首尾和當末週金額。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：需將平均分配額與等差末週額分開，並保留貨幣單位。",
      "literacyContextNecessity": "預算情境要求由總額推單週末項，而非平均分配。",
      "prerequisiteCheck": "使用前置技能「等差級數應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一項 15 週預算按等差數列分配，第 1 週 280 元，15 週總額 6300 元。第 15 週分配多少元？」獨立重算為：平均每週420元；等差首尾平均420，因此末週=840-280=560元。 四選項逐項核對後唯一正解為「560」；邊界檢查：末週560元；若需要公差則20元/週，模型可行。",
      "reviewContentSha256": "9e2e9501e4298d21b8a1bb7aabf2b69c4b6082e62b15eb4cae31914a70ce8a50"
    }
  ],
  "drawingSpecs": []
};
