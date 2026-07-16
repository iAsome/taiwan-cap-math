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
    "連續描述的是相鄰差，不是所有數都設成同一個 x。",
    "連續偶數與連續奇數的相鄰差都是 2，不能誤寫成只差 1。",
    "奇數個對稱連續數的平均數等於中間數，可快速列式。",
    "負數仍依數線由小到大每次加 1 或 2。",
    "解出代表數後，必須回代列出全部數值，再同時檢查數量個數、相鄰間隔、奇偶性與題目給定的總和或關係。"
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
      "prompt": "三個連續整數和為72。",
      "answer": "23、24、25。",
      "solutionSteps": [
        "設中間數為 x，三數是 x-1、x、x+1。",
        "相加得 3x=72，所以 x=24。",
        "列出 23、24、25，驗算總和為 72。"
      ],
      "why": "用中間數表示三個連續整數時，前後的減一與加一會在總和中抵消，因此總和直接等於中間數的三倍。解得二十四後仍要列出首尾兩數，才能檢查連續與總和。"
    },
    {
      "prompt": "兩個連續奇數和為48。",
      "answer": "23、25。",
      "solutionSteps": [
        "設較小奇數為 x，另一數為 x+2。",
        "列 x+(x+2)=48，化簡得 2x=46。",
        "解得 x=23，另一數為 25，總和是 48。"
      ],
      "why": "連續奇數在數線上中間會隔一個偶數，所以相鄰差是二而不是一。以 x 與 x+2 列式可同時保留連續與奇數條件；二十三、二十五皆為奇數，總和也精確為四十八。"
    },
    {
      "prompt": "五個連續整數平均為6。",
      "answer": "4、5、6、7、8。",
      "solutionSteps": [
        "五個數對稱排列，中間數等於平均數 6。",
        "由 6 向左取 5、4，向右取 7、8。",
        "驗算五數總和 30，30÷5=6。"
      ],
      "why": "奇數個的連續整數以中間數為對稱中心，左右等距的數互相平衡，所以平均數就是中間數。中間為六時，向兩側各取兩個即得四到八；相鄰差與平均驗算都通過。"
    },
    {
      "prompt": "三個連續負偶數和為-30。",
      "answer": "-12、-10、-8。",
      "solutionSteps": [
        "設中間負偶數為 x，前後數為 x-2、x+2。",
        "三數和為 3x=-30，所以 x=-10。",
        "列出 -12、-10、-8，驗算均為偶數且和為 -30。"
      ],
      "why": "負偶數的連續關係仍是沿數線每次加二，不能因為有負號就倒過來排列。以中間數表示時，前後的減二與加二抵消，所以中間數為負十；負十二、負十、負八的間隔與總和均正確。"
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
  "contentSha256": "0f007b6038248af8765b76c6bdbad15b3595e978c39ac81b708af37a6634565b",
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
    "explanation": "設三個連續整數的中間數為 x，前後兩數分別為 x-1、x+1。三數和為 3x=36，所以 x=12，這三數是 11、12、13。相鄰差均為 1，且 11+12+13=36，條件全部成立。 中間數也確實是總和除以三所得的 12。",
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
    "commonMistake": "把三個連續整數都設成同一個 x，忽略前後各差一的關係。",
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
    "contentSha256": "c746679032b5e48e3215c9155e31f86fcd8dd9dd51bbb3f3e9513a1c1be020e2",
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
    "explanation": "設較小的整數為 x，另一個連續整數就是 x+1。依總和列 x+(x+1)=41，化簡為 2x+1=41，得 x=20。因此兩數是 20、21，相差 1 且總和恰為 41，較小者為 20。 這是精確整數解，不是把平均數任意取整。",
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
    "contentSha256": "7e26941651e01de024b030994bc182fa881461c5dee4998784b7123071cd7fc6",
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
    "explanation": "連續奇數相鄰差 2。設最小奇數為 x，另兩數為 x+2、x+4，總和 3x+6=63，所以 x=19。三數為 19、21、23，都是奇數、相鄰差 2，而且 19+21+23=63，因此答案唯一。 中間奇數為 21，也等於三數的平均。",
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
    "commonMistake": "把連續奇數誤寫成 x、x+1、x+2，忽略奇數之間應相差二。",
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
    "contentSha256": "260af444d2c66e4238aee5dccc6b4f0ee18b7fbcbaf8a2466cc67eaeaca32359",
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
    "explanation": "設最小整數為 x，四數依序是 x、x+1、x+2、x+3。相加得 4x+6=54，所以 4x=48、x=12。四數 12、13、14、15 依序連續，而且總和為 54，因此最小數是 12。 四數的平均雖是 13.5，題目所求仍是最小整數 12。",
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
    "commonMistake": "相加四個數時漏掉一、二、三的部分常數，把總和錯寫成 4x。",
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
    "contentSha256": "490a98c79a7090f261d3ff619ecc720ff1ebe1cf1809e83feb817b5ec5a13175",
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
    "explanation": "連續偶數相鄰差 2。設較小偶數為 x，較大者為 x+2，依總和列 x+(x+2)=74。化簡得 2x=72，x=36，另一數是 38。36 與 38 皆為偶數、相差 2，總和為 74，故較小者是 36。 所求是較小者 36，而 38 是同組的較大偶數。",
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
    "commonMistake": "把兩個連續偶數寫成 x 與 x+1，與偶數間隔應為二的條件不符。",
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
    "contentSha256": "007119be1ba14d889aaff6b9ec66c0eae2107e57973e03e2f4e63f690f4c431d",
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
    "explanation": "設最小整數為 x，三數依序是 x、x+1、x+2，所以最大數是 x+2。依「最大數等於最小數的兩倍減八」列 x+2=2x-8，解得 x=10。三數為 10、11、12，而 2×10-8=12，關係成立。 因此最小數確實是 10，不是同組的最大數 12。",
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
    "commonMistake": "把最大數也設成 x，沒有用 x+2 表示它與最小數相差二。",
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
    "contentSha256": "bf95bf3fb2ae4213ede8eace10bd4784bfe42ad0c7d6a67ab7e24f9d91612a9f",
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
    "explanation": "設最小整數為 x，由於共有三個連續整數，最大數為 x+2。題目只要最小與最大相加，所以 x+(x+2)=50，得 2x=48、x=24。三數是 24、25、26，首尾和 24+26=50，故最小數為 24。",
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
    "commonMistake": "把中間數也加入題目只要求的首尾總和，因而建立不同的方程式。",
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
    "contentSha256": "9349cb2eb65abe3a99ad61215fad0dff3f5f0a3e2170f34ecfc4997814984566",
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
    "explanation": "五個連續整數對稱排列時，中間數就是平均數。平均為 -3，所以中間數是 -3，左右各取兩個相鄰整數，得 -5、-4、-3、-2、-1。五數總和 -15，除以 5 確實為 -3，順序與間隔也正確。",
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
    "commonMistake": "排列負整數時把絕對值較大者誤當成數值較大，因而顫倒數線順序。",
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
    "contentSha256": "39480766e9a8c86e908eb5d1fd105f0199a465704b87ace75c2e8e73e4175d6f",
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
    "explanation": "設中間座號為 x，三個連續座號依序是 x-1、x、x+1。相加時前後的減一與加一抵消，得 3x=306，x=102。三個座號 101、102、103 連續，而且總和為 306，所以中間座號是 102。",
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
    "commonMistake": "已用三百零六除以三得到中間座號後，又多加一而誤選右側座號。",
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
    "contentSha256": "4964e871a7659f0229c462e9e34568931def993943f890f50b3807aa80ad802e",
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
    "explanation": "設最早日期為 x，四個連續日期為 x、x+1、x+2、x+3。總和 4x+6=74，所以 4x=68、x=17。四天是 17、18、19、20 日，合計 74，因此最早日期是 17 日；這組日期也不涉及跨月。 所求為最早日期 17，不是四日的非整數平均值。",
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
    "commonMistake": "把四個日期全都設為同一個 x，漏掉後三天分別增加一、二、三日。",
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
    "contentSha256": "292bfcd7161b2bc8b2a5f67041d9e584e16cc71d8f2d77cd549753aeb640fd74",
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
    "explanation": "設中間奇數為 x，前後兩個連續奇數為 x-2、x+2。三個號碼總和為 3x=99，因此 x=33。完整號碼是 31、33、35，均為奇數、相鄰差 2，且總和為 99，所以中間號碼是 33。",
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
    "commonMistake": "把連續奇數的間隔當成一，寫出含偶數的號碼組合，不符題意。",
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
    "contentSha256": "236be5555e8adab29f1266f4ea19ccbf814f89bac1ddcf69c6967baf8dfe2185",
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
    "explanation": "設中間樓層標號為 x，三個連續整數為 x-1、x、x+1。總和化簡為 3x=-12，所以 x=-4，三個標號為 -5、-4、-3。它們在數線上依序相差 1，且總和恰為 -12，因此這組答案正確。",
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
    "commonMistake": "誤認負數離零越遠數值越大，導致地下樓層的數線順序顛倒。",
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
    "contentSha256": "dcf0fdecf30ac4705b386030744415c10452f0f78901a311ce2a4ec409ad1e0f",
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
      "設五個連續奇數的中間數為 x，由於奇數相鄰差 2，五數依序為 x-4、x-2、x、x+2、x+4。",
      "五數相加時常數互相抵消，得 5x=215。兩邊同除以 5，得中間奇數 x=43。",
      "代回得五個數為 39、41、43、45、47。它們皆為奇數、相鄰差 2，且總和 39+41+43+45+47=215。"
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
      "把連續奇數寫成每次加 1，用了連續整數的間隔。",
      "只解出中間數 43，未依題意列出其餘四個奇數並驗算總和。"
    ],
    "independentReview": {
      "derivedResult": "39、41、43、45、47",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "31a7233605dd803063b6b11d4cf74604d0c5e29d947a14652517ba72a240224c",
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
      "設最小整數為 x，三個連續整數依序為 x、x+1、x+2，因此最大數是 x+2。",
      "「最大數的 2 倍比最小數的 3 倍多 7」表示 2(x+2)=3x+7，不能把多 7 的方向寫反。",
      "展開得 2x+4=3x+7，移項得 x=-3，所以三數為 -3、-2、-1。",
      "驗算最大數的 2 倍為 -2，最小數的 3 倍為 -9，而 -2-(-9)=7，前者確實多 7。"
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
      "把「前者比後者多 7」寫成 2(x+2)+7=3x，將比較方向寫反。",
      "只寫 x、x+1 兩個數，或把最大數誤寫成 x+1，未完整表示三個連續整數。"
    ],
    "independentReview": {
      "derivedResult": "-3、-2、-1",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "91d73b310ef993f5364f7d405ae76a098e0acbf88166915105976388f6470dfb",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const DRAWING_SPECS = [];
