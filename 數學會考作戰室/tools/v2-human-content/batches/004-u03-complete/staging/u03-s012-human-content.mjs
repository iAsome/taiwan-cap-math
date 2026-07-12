// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
// CONTENT AUTHORITY: CHATGPT_HUMAN_AUTHORED_R1
// OLD GENERATED CONTENT MUST NOT BE IMPORTED OR MERGED.
export const LECTURE = {
  "lectureId": "u03-s012-lecture-r1",
  "unitId": "u03",
  "topicId": "u03-linear-equation-apps",
  "skillId": "linear-equation-consecutive-integers",
  "title": "連續整數問題：用相鄰差表示整組數列",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能表示連續整數、偶數與奇數。",
    "能用最小數或中間數建立方程式。",
    "能處理負數範圍的連續數。",
    "能檢查相鄰差、總和與奇偶性。"
  ],
  "prerequisites": [
    {
      "skillId": "linear-equation-distribution-problem",
      "requiredLevel": "能把總量表示為每份量乘份數加上剩餘量。"
    }
  ],
  "glossary": [
    {
      "term": "連續整數",
      "definition": "依序相差1的整數。"
    },
    {
      "term": "連續偶數",
      "definition": "依序相差2且全部為偶數。"
    },
    {
      "term": "連續奇數",
      "definition": "依序相差2且全部為奇數。"
    },
    {
      "term": "中間數",
      "definition": "奇數個連續數排列正中央的數。"
    }
  ],
  "notation": [
    {
      "symbol": "x,x+1,x+2",
      "meaning": "三個由小到大的連續整數。"
    },
    {
      "symbol": "x-2,x,x+2",
      "meaning": "以中間數x表示三個連續同奇偶數。"
    }
  ],
  "conceptNarrative": [
    "連續描述的是相鄰差，不是所有數都設成同一個x。",
    "連續偶數與連續奇數的相鄰差都是2，不能誤寫成只差1。",
    "奇數個對稱連續數的平均數等於中間數，可快速列式。",
    "負數仍依數線由小到大每次加1或2。"
  ],
  "formalDefinitions": [
    {
      "name": "連續整數表示",
      "statement": "由最小數x開始依序為x、x+1、x+2……。"
    },
    {
      "name": "連續同奇偶數表示",
      "statement": "由x開始依序為x、x+2、x+4……。"
    }
  ],
  "formulas": [
    {
      "formula": "x+(x+1)+(x+2)=S",
      "conditions": [
        "三個連續整數總和為S"
      ],
      "meaning": "最小數表示法。"
    },
    {
      "formula": "3m=S",
      "conditions": [
        "三個對稱連續數的中間數為m"
      ],
      "meaning": "中間數表示法。"
    }
  ],
  "nonApplicableCases": [
    "連續奇數不能寫成相差1。",
    "題目若要求整數，方程式結果非整數表示沒有符合條件的整數組。",
    "跨月份日期題需確認題目允許。",
    "負數排序不可只看絕對值。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "判斷是整數、偶數還是奇數。",
      "check": "相鄰差是1還是2？"
    },
    {
      "step": 2,
      "instruction": "選最小數或中間數為x。",
      "check": "哪種表示可抵消常數？"
    },
    {
      "step": 3,
      "instruction": "列出每個數。",
      "check": "數量與順序完整嗎？"
    },
    {
      "step": 4,
      "instruction": "套用總和或其他關係。",
      "check": "題目只用部分數還是全部？"
    },
    {
      "step": 5,
      "instruction": "驗查相鄰差、奇偶與總和。",
      "check": "每個數都是整數嗎？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "三個連續整數和為72。",
      "solutionSteps": [
        "設中間數x。",
        "3x=72，x=24。"
      ],
      "answer": "23、24、25。"
    },
    {
      "exampleId": "L2",
      "prompt": "兩個連續奇數和為48。",
      "solutionSteps": [
        "設較小x，另一個x+2。",
        "2x+2=48，x=23。"
      ],
      "answer": "23、25。"
    },
    {
      "exampleId": "L3",
      "prompt": "五個連續整數平均為6。",
      "solutionSteps": [
        "中間數為6。",
        "向兩側各取兩個。"
      ],
      "answer": "4、5、6、7、8。"
    },
    {
      "exampleId": "L4",
      "prompt": "三個連續負偶數和為-30。",
      "solutionSteps": [
        "設中間數x，3x=-30。",
        "x=-10。"
      ],
      "answer": "-12、-10、-8。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "三個連續數都設x。",
      "why": "忽略相鄰差。",
      "correction": "依序加1或2。"
    },
    {
      "mistake": "連續奇數相差1。",
      "why": "與連續整數混淆。",
      "correction": "奇數間隔2。"
    },
    {
      "mistake": "負數由絕對值小排到大。",
      "why": "忽略數線方向。",
      "correction": "由左到右每次加固定差。"
    },
    {
      "mistake": "只求出x卻未回答整組數。",
      "why": "忘記x代表最小或中間數。",
      "correction": "回代列出全部。"
    },
    {
      "mistake": "得到非整數仍列連續整數。",
      "why": "未檢查整數性。",
      "correction": "判定無符合組合或重查列式。"
    },
    {
      "mistake": "總和條件漏加某一數。",
      "why": "未先完整列數列。",
      "correction": "逐項寫出再相加。"
    }
  ],
  "selfCheck": [
    "相鄰差是否正確？",
    "x代表最小還是中間？",
    "是否列出題目要求的全部數？",
    "每個結果是否符合奇偶性？",
    "總和與其他條件是否代回成立？"
  ],
  "summary": [
    "連續整數相差1。",
    "連續偶數或奇數相差2。",
    "中間數可簡化奇數個總和。",
    "解後必須列出整組並驗查。"
  ],
  "connections": {
    "previous": "需要能用一個未知數表示多個相關數量。",
    "next": [
      "解的合理性檢查會判斷整數條件。",
      "方案比較會用兩個線性式求交點。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u03-s012-v001",
      "u03-s012-v002",
      "u03-s012-v003",
      "u03-s012-v004",
      "u03-s012-v005",
      "u03-s012-v006",
      "u03-s012-v007",
      "u03-s012-v008",
      "u03-s012-v009",
      "u03-s012-v010",
      "u03-s012-v011",
      "u03-s012-v012"
    ],
    "constructedResponseIds": [
      "u03-s012-cr001",
      "u03-s012-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四例驗算總和分別72、48、30、-30，並核對23與25皆奇數、-12至-8相鄰差2，所有結果均為整數。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "70210f58083932091035b94cb2702db1c8b2a20501a2f03f67127d3438c43dfa",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "legacyContentDisposition": "replace-old-lecture-at-final-integration"
};

export const QUESTIONS = [
  {
    "questionId": "u03-s012-v001",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-consecutive-integers",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三個連續整數的和為 36，這三個數為何？",
    "choices": [
      "11、12、13",
      "10、11、12",
      "12、13、14",
      "9、12、15"
    ],
    "answerIndex": 0,
    "explanation": "以x、x+1、x+2表示；列3x+3=36；得到11、12、13。所以答案是「11、12、13」。",
    "steps": [
      "以x、x+1、x+2表示",
      "列3x+3=36",
      "得到11、12、13"
    ],
    "optionAnalysis": [
      {
        "choice": "11、12、13",
        "truth": true,
        "reason": "設最小為x，x+(x+1)+(x+2)=36，3x+3=36，x=11。 因此此選項符合題目。"
      },
      {
        "choice": "10、11、12",
        "truth": false,
        "reason": "三數和只有33。"
      },
      {
        "choice": "12、13、14",
        "truth": false,
        "reason": "三數和39。"
      },
      {
        "choice": "9、12、15",
        "truth": false,
        "reason": "不是連續整數。"
      }
    ],
    "commonMistake": "把三個數都設成x。",
    "concept": "相鄰連續整數相差1。",
    "tags": [
      "代數",
      "連續整數問題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-distribution-problem"
    ],
    "authoringIntent": "用最小數表示三個連續整數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "95a3f02dcc8fdb81b1d75c48e760751315e7b5016303a3ba3c9bd6f479579d23",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s012-v002",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-consecutive-integers",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩個連續整數的和為 41，較小者是多少？",
    "choices": [
      "19",
      "20",
      "21",
      "40"
    ],
    "answerIndex": 1,
    "explanation": "列2x+1=41；2x=40；x=20。所以答案是「20」。",
    "steps": [
      "列2x+1=41",
      "2x=40",
      "x=20"
    ],
    "optionAnalysis": [
      {
        "choice": "19",
        "truth": false,
        "reason": "19+20=39。"
      },
      {
        "choice": "20",
        "truth": true,
        "reason": "設較小x，x+(x+1)=41，2x+1=41，x=20。 因此此選項符合題目。"
      },
      {
        "choice": "21",
        "truth": false,
        "reason": "21是較大者若較小20。"
      },
      {
        "choice": "40",
        "truth": false,
        "reason": "40不是兩個連續數之一。"
      }
    ],
    "commonMistake": "直接把總和除2取整但未驗算。",
    "concept": "較大數為x+1。",
    "tags": [
      "代數",
      "連續整數問題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-distribution-problem"
    ],
    "authoringIntent": "解兩個連續整數總和。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b25a2b0b39d79976cdfad7f4c20c5966f61ce3fd224155c93aa2a6109e0519fe",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s012-v003",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-consecutive-integers",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三個連續奇數的和為 63，這三個數為何？",
    "choices": [
      "17、19、21",
      "20、21、22",
      "19、21、23",
      "21、23、25"
    ],
    "answerIndex": 2,
    "explanation": "奇數相差2；列3x+6=63；得到19、21、23。所以答案是「19、21、23」。",
    "steps": [
      "奇數相差2",
      "列3x+6=63",
      "得到19、21、23"
    ],
    "optionAnalysis": [
      {
        "choice": "17、19、21",
        "truth": false,
        "reason": "總和57。"
      },
      {
        "choice": "20、21、22",
        "truth": false,
        "reason": "不是全為奇數。"
      },
      {
        "choice": "19、21、23",
        "truth": true,
        "reason": "設最小奇數x，後兩個為x+2、x+4；3x+6=63，x=19。 因此此選項符合題目。"
      },
      {
        "choice": "21、23、25",
        "truth": false,
        "reason": "總和69。"
      }
    ],
    "commonMistake": "把連續奇數寫成x、x+1、x+2。",
    "concept": "連續奇數不是相差1。",
    "tags": [
      "代數",
      "連續整數問題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-distribution-problem"
    ],
    "authoringIntent": "連續奇數以差2表示。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3ec67cc4467e949384f2d1f57604f9512606fd09de8fc719b9a1e4c298c4efb0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s012-v004",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-consecutive-integers",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "四個連續整數的和為 54，最小數為何？",
    "choices": [
      "10",
      "13",
      "15",
      "12"
    ],
    "answerIndex": 3,
    "explanation": "四數為x到x+3；常數和1+2+3=6；解得12。所以答案是「12」。",
    "steps": [
      "四數為x到x+3",
      "常數和1+2+3=6",
      "解得12"
    ],
    "optionAnalysis": [
      {
        "choice": "10",
        "truth": false,
        "reason": "10到13和46。"
      },
      {
        "choice": "13",
        "truth": false,
        "reason": "13是第二個數。"
      },
      {
        "choice": "15",
        "truth": false,
        "reason": "15是最大數。"
      },
      {
        "choice": "12",
        "truth": true,
        "reason": "設最小x，四數和4x+6=54，4x=48，x=12。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "漏加部分常數差。",
    "concept": "n個連續數可由最小數逐次加1。",
    "tags": [
      "代數",
      "連續整數問題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-distribution-problem"
    ],
    "authoringIntent": "處理四個連續整數的常數總和。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e99043c011951cb4428fb34bd71c563587a477fbc51ef4030437a6bca09155d3",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s012-v005",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-consecutive-integers",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩個連續偶數的和為 74，較小者是多少？",
    "choices": [
      "35",
      "36",
      "37",
      "38"
    ],
    "answerIndex": 1,
    "explanation": "偶數相差2；列2x+2=74；解得36。所以答案是「36」。",
    "steps": [
      "偶數相差2",
      "列2x+2=74",
      "解得36"
    ],
    "optionAnalysis": [
      {
        "choice": "35",
        "truth": false,
        "reason": "35不是偶數。"
      },
      {
        "choice": "36",
        "truth": true,
        "reason": "設較小偶數x，另一個x+2；2x+2=74，2x=72，x=36。 因此此選項符合題目。"
      },
      {
        "choice": "37",
        "truth": false,
        "reason": "37不是偶數。"
      },
      {
        "choice": "38",
        "truth": false,
        "reason": "38是較大者。"
      }
    ],
    "commonMistake": "把兩數寫成x與x+1。",
    "concept": "必須同時符合偶數與連續。",
    "tags": [
      "代數",
      "連續整數問題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-distribution-problem"
    ],
    "authoringIntent": "連續偶數以差2表示。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "581c89607285f3d0bf97ba965663c3caf091567d99637e6a01746657e39a1ed9",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s012-v006",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-consecutive-integers",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三個連續整數中，最大數等於最小數的 2 倍減 8。最小數是多少？",
    "choices": [
      "8",
      "12",
      "10",
      "14"
    ],
    "answerIndex": 2,
    "explanation": "把最大數表示為x+2；列x+2=2x-8；解得x=10。所以答案是「10」。",
    "steps": [
      "把最大數表示為x+2",
      "列x+2=2x-8",
      "解得x=10"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": false,
        "reason": "代入時最大數10不符。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "12是最大數。"
      },
      {
        "choice": "10",
        "truth": true,
        "reason": "設三數x、x+1、x+2；條件x+2=2x-8，所以x=10。 因此此選項符合題目。"
      },
      {
        "choice": "14",
        "truth": false,
        "reason": "14不滿足關係。"
      }
    ],
    "commonMistake": "把最大數也設成x。",
    "concept": "最大與最小相差2。",
    "tags": [
      "代數",
      "連續整數問題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-distribution-problem"
    ],
    "authoringIntent": "由數列位置關係建立方程式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f8c04ef72a55134a87443abe937bb1be421b985c070ef60ddd5414720a3cafa7",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s012-v007",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-consecutive-integers",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三個連續整數中，最小數與最大數的和為 50。最小數為何？",
    "choices": [
      "23",
      "25",
      "26",
      "24"
    ],
    "answerIndex": 3,
    "explanation": "只取第一與第三數；列2x+2=50；解得24。所以答案是「24」。",
    "steps": [
      "只取第一與第三數",
      "列2x+2=50",
      "解得24"
    ],
    "optionAnalysis": [
      {
        "choice": "23",
        "truth": false,
        "reason": "23+25=48。"
      },
      {
        "choice": "25",
        "truth": false,
        "reason": "25是中間數。"
      },
      {
        "choice": "26",
        "truth": false,
        "reason": "26是最大數。"
      },
      {
        "choice": "24",
        "truth": true,
        "reason": "設最小x，最大x+2；x+x+2=50，2x=48，x=24。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "把三個數都加進條件。",
    "concept": "最大數為x+2。",
    "tags": [
      "代數",
      "連續整數問題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-distribution-problem"
    ],
    "authoringIntent": "利用指定位置的和而非全部總和。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2b6a619013f696604e3b08ae76ff1659c387efa235af82bc1414af888c550a78",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s012-v008",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-consecutive-integers",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "五個連續整數的平均數是－3，這五個數為何？",
    "choices": [
      "－5、－4、－3、－2、－1",
      "-7、-5、-3、-1、1",
      "-3、-2、-1、0、1",
      "-6、-5、-4、-3、-2"
    ],
    "answerIndex": 0,
    "explanation": "平均數為中間數-3；向前兩個為-5、-4；向後兩個為-2、-1。所以答案是「－5、－4、－3、－2、－1」。",
    "steps": [
      "平均數為中間數-3",
      "向前兩個為-5、-4",
      "向後兩個為-2、-1"
    ],
    "optionAnalysis": [
      {
        "choice": "－5、－4、－3、－2、－1",
        "truth": true,
        "reason": "五個連續整數對稱排列時中間數等於平均數-3，所以為-5到-1。 因此此選項符合題目。"
      },
      {
        "choice": "-7、-5、-3、-1、1",
        "truth": false,
        "reason": "相鄰差不是1。"
      },
      {
        "choice": "-3、-2、-1、0、1",
        "truth": false,
        "reason": "平均為-1。"
      },
      {
        "choice": "-6、-5、-4、-3、-2",
        "truth": false,
        "reason": "平均為-4。"
      }
    ],
    "commonMistake": "負數排列方向錯誤。",
    "concept": "對稱數列平均等於中央數。",
    "tags": [
      "代數",
      "連續整數問題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-distribution-problem"
    ],
    "authoringIntent": "用奇數個連續整數的中間值。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1a3fd2033552e398fc373abfb063ba4c4d924d604196ad5366a9e5b244a5b253",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s012-v009",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-consecutive-integers",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "電影院三個連續座號的和為 306，中間座號是多少？",
    "choices": [
      "100",
      "101",
      "102",
      "103"
    ],
    "answerIndex": 2,
    "explanation": "以中間座號表示兩側；常數互相抵消；306÷3=102。所以答案是「102」。",
    "steps": [
      "以中間座號表示兩側",
      "常數互相抵消",
      "306÷3=102"
    ],
    "optionAnalysis": [
      {
        "choice": "100",
        "truth": false,
        "reason": "三座號總和303。"
      },
      {
        "choice": "101",
        "truth": false,
        "reason": "101是左側座號。"
      },
      {
        "choice": "102",
        "truth": true,
        "reason": "設中間為x，三座號x-1、x、x+1，總和3x=306，x=102。 因此此選項符合題目。"
      },
      {
        "choice": "103",
        "truth": false,
        "reason": "103是右側座號。"
      }
    ],
    "commonMistake": "把306÷3後再加1。",
    "concept": "對稱表示可消去常數。",
    "tags": [
      "代數",
      "連續整數問題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-distribution-problem"
    ],
    "authoringIntent": "以中間數快速表示三個連續數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "10dd5c4fc2b6e17087885df0cbf9cd0ee2bf6b16e36da30f275fd78021a05759",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s012-v010",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-consecutive-integers",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "行事曆上四個連續日期的和為 74，最早日期是幾日？",
    "choices": [
      "16",
      "18",
      "20",
      "17"
    ],
    "answerIndex": 3,
    "explanation": "四日期為x至x+3；列4x+6=74；解得17。所以答案是「17」。",
    "steps": [
      "四日期為x至x+3",
      "列4x+6=74",
      "解得17"
    ],
    "optionAnalysis": [
      {
        "choice": "16",
        "truth": false,
        "reason": "16到19和70。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "18是第二天。"
      },
      {
        "choice": "20",
        "truth": false,
        "reason": "20是最後一天。"
      },
      {
        "choice": "17",
        "truth": true,
        "reason": "設最早x，4x+6=74，4x=68，x=17。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "忽略日期不可跨月的題幹假設。",
    "concept": "同一月份內連續日期相差1。",
    "tags": [
      "代數",
      "連續整數問題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-distribution-problem"
    ],
    "authoringIntent": "把日期連續性翻成四個整數。",
    "literacyContextNecessity": "題目明定同一月份的連續日期，日曆順序使四個數必為相差1的整數。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "548e0a85b262682a538c2d0acf6cf43cf2525522e81338bca9a280502bcc7eaf",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s012-v011",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-consecutive-integers",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三個連續奇數的置物櫃號碼總和為 99，中間號碼是多少？",
    "choices": [
      "33",
      "31",
      "32",
      "35"
    ],
    "answerIndex": 0,
    "explanation": "奇數間隔2；以中間數表示；99÷3=33。所以答案是「33」。",
    "steps": [
      "奇數間隔2",
      "以中間數表示",
      "99÷3=33"
    ],
    "optionAnalysis": [
      {
        "choice": "33",
        "truth": true,
        "reason": "設中間奇數x，三數x-2、x、x+2，總和3x=99，所以x=33。 因此此選項符合題目。"
      },
      {
        "choice": "31",
        "truth": false,
        "reason": "31是較小號碼。"
      },
      {
        "choice": "32",
        "truth": false,
        "reason": "32不是奇數。"
      },
      {
        "choice": "35",
        "truth": false,
        "reason": "35是較大號碼。"
      }
    ],
    "commonMistake": "把奇數間隔當1。",
    "concept": "前後分別相差2。",
    "tags": [
      "代數",
      "連續整數問題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-distribution-problem"
    ],
    "authoringIntent": "用中間數表示連續奇數。",
    "literacyContextNecessity": "置物櫃號碼被指定為連續奇數，這個分類資訊決定相鄰差為2。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a7b4929befaef9ce4b273b50260e9d7dd65254eb0fc2f4d12cd8164b3e0e336c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s012-v012",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-consecutive-integers",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "地下樓層標號為三個連續整數，合計－12。這三個樓層標號為何？",
    "choices": [
      "-6、-5、-4",
      "－5、－4、－3",
      "-4、-3、-2",
      "-6、-4、-2"
    ],
    "answerIndex": 1,
    "explanation": "以x-1、x、x+1表示；3x=-12；得到-5、-4、-3。所以答案是「－5、－4、－3」。",
    "steps": [
      "以x-1、x、x+1表示",
      "3x=-12",
      "得到-5、-4、-3"
    ],
    "optionAnalysis": [
      {
        "choice": "-6、-5、-4",
        "truth": false,
        "reason": "總和-15。"
      },
      {
        "choice": "－5、－4、－3",
        "truth": true,
        "reason": "設中間標號x，3x=-12，所以x=-4，三數為-5、-4、-3。 因此此選項符合題目。"
      },
      {
        "choice": "-4、-3、-2",
        "truth": false,
        "reason": "總和-9。"
      },
      {
        "choice": "-6、-4、-2",
        "truth": false,
        "reason": "不是連續整數。"
      }
    ],
    "commonMistake": "認為負數越遠離0越大。",
    "concept": "負樓層仍按每次加1排列。",
    "tags": [
      "代數",
      "連續整數問題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-distribution-problem"
    ],
    "authoringIntent": "處理負數範圍的連續整數。",
    "literacyContextNecessity": "地下樓層標號包含負數且連續，建築情境決定順序與符號，不能只取絕對值。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7c19d6f0c70f2a15e18c37af1d4b90dad4703719a311c5c080e8e8a8cf5cdd30",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u03-s012-cr001",
    "unitId": "u03",
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-consecutive-integers",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "五個連續奇數的和為 215。求這五個數。",
    "requiredWork": [
      "相鄰奇數相差2。",
      "可設中間數或最小數。",
      "列出全部並驗算總和。"
    ],
    "fullCreditSolution": [
      "設中間奇數為x，五數為x-4、x-2、x、x+2、x+4。",
      "總和5x=215，x=43。",
      "五數為39、41、43、45、47，總和215。"
    ],
    "alternativeSolutions": [
      "設最小數n，列n+(n+2)+(n+4)+(n+6)+(n+8)=215。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "方程式、五數與總和驗查完整。"
      },
      {
        "score": 2,
        "criteria": "中間數正確但漏列或算錯一個數。"
      },
      {
        "score": 1,
        "criteria": "能求出中間數43或正確表示五數。"
      },
      {
        "score": 0,
        "criteria": "奇數間距與列式均錯。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "把連續奇數寫成相差1。",
      "只回答中間數43。"
    ],
    "independentReview": {
      "derivedResult": "39、41、43、45、47",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "e522ff1cd309de13f4837ac126c96d151b7f9cd5a7fc315544b9c10e5903328b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s012-cr002",
    "unitId": "u03",
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-consecutive-integers",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "三個連續整數中，最大數的 2 倍比最小數的 3 倍多 7。求這三個整數。",
    "requiredWork": [
      "以最小數x表示三數。",
      "正確翻譯「多7」。",
      "列出三個數並驗算。"
    ],
    "fullCreditSolution": [
      "三數為x、x+1、x+2。",
      "2(x+2)=3x+7。",
      "2x+4=3x+7，x=-3。",
      "三數為-3、-2、-1；最大數2倍=-2，最小數3倍=-9，前者多7。"
    ],
    "alternativeSolutions": [
      "可設最大數y，最小數y-2。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "列式、解三數並完成語句驗證。"
      },
      {
        "score": 2,
        "criteria": "方法正確但符號或算術一處錯。"
      },
      {
        "score": 1,
        "criteria": "能正確表示x、x+1、x+2。"
      },
      {
        "score": 0,
        "criteria": "無法翻譯比較關係。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "把「多7」方向寫反。",
      "最大數誤寫成x+1。"
    ],
    "independentReview": {
      "derivedResult": "-3、-2、-1",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "09fa741155dab1b336f1f8c099a79895ea857a4304bab898d66053e93c830433",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const DRAWING_SPECS = [];
