// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
// CONTENT AUTHORITY: CHATGPT_HUMAN_AUTHORED_R1
// OLD GENERATED CONTENT MUST NOT BE IMPORTED OR MERGED.
export const LECTURE = {
  "lectureId": "u03-s002-lecture-r1",
  "unitId": "u03",
  "topicId": "u03-linear-expression",
  "skillId": "linear-expression-simplify",
  "title": "一元一次式化簡：展開括號並正確合併同類項",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能辨認同類項。",
    "能用分配律展開正負括號。",
    "能合併未知數項與常數項。",
    "能由生活情境建立並化簡一元一次式。"
  ],
  "prerequisites": [
    {
      "skillId": "linear-expression-substitution",
      "requiredLevel": "能把數值代入文字式，並辨認運算順序與括號。"
    }
  ],
  "glossary": [
    {
      "term": "同類項",
      "definition": "未知數及其指數完全相同的項。"
    },
    {
      "term": "分配律",
      "definition": "a(b+c)=ab+ac。"
    },
    {
      "term": "一元一次式",
      "definition": "只含一個未知數，且最高次數為1的式子。"
    },
    {
      "term": "化簡",
      "definition": "在不改變值的前提下寫成較精簡的等價式。"
    }
  ],
  "notation": [
    {
      "symbol": "ax+b",
      "meaning": "一元一次式的一般形式，a、b為數且a可為0。"
    },
    {
      "symbol": "-(x-3)",
      "meaning": "等於-x+3，括號內每項都變號。"
    }
  ],
  "conceptNarrative": [
    "化簡不是求出未知數，而是把等價的項整理在一起。",
    "只有同類項能合併，例如3x與-2x可合併，3x與4不能。",
    "括號外的數要乘括號內每一項；括號前是負號時可視為乘-1。",
    "情境式先按物件層級列出，再化簡，不能為了簡短而改變每份與總共的關係。"
  ],
  "formalDefinitions": [
    {
      "name": "同類項合併",
      "statement": "ax+bx=(a+b)x。"
    },
    {
      "name": "分配律",
      "statement": "a(b+c)=ab+ac，a(b-c)=ab-ac。"
    }
  ],
  "formulas": [
    {
      "formula": "ax+bx+c=(a+b)x+c",
      "conditions": [
        "ax與bx的未知數部分完全相同"
      ],
      "meaning": "係數相加，未知數部分保留。"
    },
    {
      "formula": "-(ax+b)=-ax-b",
      "conditions": [
        "負號作用於整個括號"
      ],
      "meaning": "括號內每項變號。"
    }
  ],
  "nonApplicableCases": [
    "x與x²不是同類項。",
    "不同未知數x與y不能合併。",
    "只乘括號第一項不是分配律。",
    "化簡後仍可能含未知數，這是正常結果。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先展開每一個括號。",
      "check": "外係數是否乘到每一項？"
    },
    {
      "step": 2,
      "instruction": "按未知數項與常數項分類。",
      "check": "是否誤把不同類項放一起？"
    },
    {
      "step": 3,
      "instruction": "分別計算係數與常數。",
      "check": "負號是否保留？"
    },
    {
      "step": 4,
      "instruction": "依ax+b順序書寫。",
      "check": "係數1與-1的寫法是否正確？"
    },
    {
      "step": 5,
      "instruction": "代入一個簡單值驗證前後相等。",
      "check": "原式與化簡式是否同值？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "化簡6x-4x+7。",
      "solutionSteps": [
        "6x-4x=2x。",
        "常數7保留。"
      ],
      "answer": "2x+7。"
    },
    {
      "exampleId": "L2",
      "prompt": "化簡3(2y-5)+y。",
      "solutionSteps": [
        "展開為6y-15+y。",
        "合併為7y-15。"
      ],
      "answer": "7y-15。"
    },
    {
      "exampleId": "L3",
      "prompt": "化簡4a-[2a-(3-a)]。",
      "solutionSteps": [
        "內括號2a-3+a=3a-3。",
        "4a-(3a-3)=a+3。"
      ],
      "answer": "a+3。"
    },
    {
      "exampleId": "L4",
      "prompt": "每袋有x顆球，買5袋後送出2袋各少3顆的數量，求剩餘式。",
      "solutionSteps": [
        "原有5x。",
        "送出2(x-3)=2x-6。",
        "剩餘5x-(2x-6)=3x+6。"
      ],
      "answer": "3x+6顆。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把3x+4合併成7x。",
      "why": "常數與未知數項不是同類項。",
      "correction": "保留為3x+4。"
    },
    {
      "mistake": "把2(x+5)寫成2x+5。",
      "why": "外係數漏乘常數。",
      "correction": "寫成2x+10。"
    },
    {
      "mistake": "把-(x-4)寫成-x-4。",
      "why": "只改第一項符號。",
      "correction": "兩項都變號成-x+4。"
    },
    {
      "mistake": "合併係數時忽略負號。",
      "why": "只看絕對值。",
      "correction": "將每項連同前方符號一起抄寫。"
    },
    {
      "mistake": "看到括號就先把內部異類項相加。",
      "why": "誤認任何項都可合併。",
      "correction": "只能先做合法運算或分配。"
    },
    {
      "mistake": "情境中把每一個的增減當成總共增減。",
      "why": "未區分括號內外層級。",
      "correction": "確認變化是每份發生還是整體一次發生。"
    }
  ],
  "selfCheck": [
    "括號是否全部展開？",
    "負號是否作用到每一項？",
    "只合併真正同類項？",
    "情境中的每份與總共層級是否正確？",
    "可否代入x=1驗證？"
  ],
  "summary": [
    "先展開再分類合併。",
    "同類項只加減係數。",
    "括號前負號使每項變號。",
    "化簡不等於求未知數。"
  ],
  "connections": {
    "previous": "建立在代入求值與整數、分數運算之上。",
    "next": [
      "等量公理會在等式兩邊使用相同運算。",
      "解方程式前常要先化簡每一邊。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u03-s002-v001",
      "u03-s002-v002",
      "u03-s002-v003",
      "u03-s002-v004",
      "u03-s002-v005",
      "u03-s002-v006",
      "u03-s002-v007",
      "u03-s002-v008",
      "u03-s002-v009",
      "u03-s002-v010",
      "u03-s002-v011",
      "u03-s002-v012"
    ],
    "constructedResponseIds": [
      "u03-s002-cr001",
      "u03-s002-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "用x=2分別驗證四例原式與化簡式同值；尤其核對4a-[2a-(3-a)]的兩層負號及5x-2(x-3)的每袋層級，結果分別為2x+7、7y-15、a+3、3x+6。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "693ed2628abc522a47eded05b96c3e24dd1e7da5492e7b86d1bae46a91f06251",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "legacyContentDisposition": "replace-old-lecture-at-final-integration"
};

export const QUESTIONS = [
  {
    "questionId": "u03-s002-v001",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-simplify",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "化簡 3x＋5x。",
    "choices": [
      "8x",
      "8",
      "15x",
      "2x"
    ],
    "answerIndex": 0,
    "explanation": "確認兩項都是x的一次項；係數相加3+5=8；保留x得到8x。所以答案是「8x」。",
    "steps": [
      "確認兩項都是x的一次項",
      "係數相加3+5=8",
      "保留x得到8x"
    ],
    "optionAnalysis": [
      {
        "choice": "8x",
        "truth": true,
        "reason": "同類項的未知數部分相同，係數3+5=8，所以為8x。 因此此選項符合題目。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "相加係數後漏寫x。"
      },
      {
        "choice": "15x",
        "truth": false,
        "reason": "把係數相乘成15。"
      },
      {
        "choice": "2x",
        "truth": false,
        "reason": "把5x移到另一邊般相減。"
      }
    ],
    "commonMistake": "把係數相加後漏掉未知數。",
    "concept": "同類項只加係數，未知數部分不變。",
    "tags": [
      "代數",
      "一元一次式化簡",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-substitution"
    ],
    "authoringIntent": "合併最基本同類項。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1e6adb6cce06cfc3623fc36f6bfbab2d5ccf6571eb2a999069d53150a3b3d793",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s002-v002",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-simplify",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "化簡 7a－2a＋4。",
    "choices": [
      "5a",
      "5a＋4",
      "9a＋4",
      "5a＋2"
    ],
    "answerIndex": 1,
    "explanation": "合併a項得5a；常數4原樣保留；寫成5a+4。所以答案是「5a＋4」。",
    "steps": [
      "合併a項得5a",
      "常數4原樣保留",
      "寫成5a+4"
    ],
    "optionAnalysis": [
      {
        "choice": "5a",
        "truth": false,
        "reason": "漏掉常數4。"
      },
      {
        "choice": "5a＋4",
        "truth": true,
        "reason": "7a-2a=5a，常數4沒有同類項，結果5a+4。 因此此選項符合題目。"
      },
      {
        "choice": "9a＋4",
        "truth": false,
        "reason": "把減2a誤成加2a。"
      },
      {
        "choice": "5a＋2",
        "truth": false,
        "reason": "把常數4與係數2相減。"
      }
    ],
    "commonMistake": "把常數與a項係數直接合併。",
    "concept": "不同類項不能合併。",
    "tags": [
      "代數",
      "一元一次式化簡",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-substitution"
    ],
    "authoringIntent": "分辨未知數項與常數項。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "693126d8e8ce7f8c75414c42cd2b84d58ab6915aed9d7fbad953e2d43d51cc8d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s002-v003",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-simplify",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "展開並化簡 4(2x－3)。",
    "choices": [
      "8x－3",
      "6x－12",
      "8x－12",
      "8x＋12"
    ],
    "answerIndex": 2,
    "explanation": "用分配律乘第一項得8x；乘第二項得-12；合併寫成8x-12。所以答案是「8x－12」。",
    "steps": [
      "用分配律乘第一項得8x",
      "乘第二項得-12",
      "合併寫成8x-12"
    ],
    "optionAnalysis": [
      {
        "choice": "8x－3",
        "truth": false,
        "reason": "4只乘第一項，漏乘-3。"
      },
      {
        "choice": "6x－12",
        "truth": false,
        "reason": "把4+2誤當係數。"
      },
      {
        "choice": "8x－12",
        "truth": true,
        "reason": "4要分別乘2x與-3，得8x-12。 因此此選項符合題目。"
      },
      {
        "choice": "8x＋12",
        "truth": false,
        "reason": "負號在分配後改成正號。"
      }
    ],
    "commonMistake": "只把括號外數乘第一項。",
    "concept": "括號外係數要乘括號內每一項。",
    "tags": [
      "代數",
      "一元一次式化簡",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-substitution"
    ],
    "authoringIntent": "使用分配律展開括號。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "188ddfd9a701a17b0eef639ebcc1085da89a1e5ea3c4ee05d6b1d9d92797e8be",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s002-v004",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-simplify",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "化簡 5y－(2y－7)。",
    "choices": [
      "3y－7",
      "7y－7",
      "3y",
      "3y＋7"
    ],
    "answerIndex": 3,
    "explanation": "括號前是負號；去括號得-2y+7；合併得3y+7。所以答案是「3y＋7」。",
    "steps": [
      "括號前是負號",
      "去括號得-2y+7",
      "合併得3y+7"
    ],
    "optionAnalysis": [
      {
        "choice": "3y－7",
        "truth": false,
        "reason": "去括號時未改-7的符號。"
      },
      {
        "choice": "7y－7",
        "truth": false,
        "reason": "把5y與2y相加。"
      },
      {
        "choice": "3y",
        "truth": false,
        "reason": "合併後漏掉常數7。"
      },
      {
        "choice": "3y＋7",
        "truth": true,
        "reason": "減去整個括號會改變兩項符號：5y-2y+7=3y+7。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "只改第一項符號或完全不變號。",
    "concept": "減去括號等於括號內每項變號。",
    "tags": [
      "代數",
      "一元一次式化簡",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-substitution"
    ],
    "authoringIntent": "處理括號前負號。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "790e16f7c054bc98791b55368b6d16a3f05c4c9b2ec4c2459e35617a3d85c52a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s002-v005",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-simplify",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "化簡 3(2m＋1)－4(m－2)。",
    "choices": [
      "2m－5",
      "2m＋11",
      "10m＋11",
      "2m＋5"
    ],
    "answerIndex": 1,
    "explanation": "分配得6m+3；減4(m-2)得-4m+8；合併為2m+11。所以答案是「2m＋11」。",
    "steps": [
      "分配得6m+3",
      "減4(m-2)得-4m+8",
      "合併為2m+11"
    ],
    "optionAnalysis": [
      {
        "choice": "2m－5",
        "truth": false,
        "reason": "第二個括號常數項符號錯。"
      },
      {
        "choice": "2m＋11",
        "truth": true,
        "reason": "展開得6m+3-4m+8，合併為2m+11。 因此此選項符合題目。"
      },
      {
        "choice": "10m＋11",
        "truth": false,
        "reason": "把兩個外係數相乘到m。"
      },
      {
        "choice": "2m＋5",
        "truth": false,
        "reason": "把3與8相減。"
      }
    ],
    "commonMistake": "把-4(m-2)展成-4m-8。",
    "concept": "負號與外係數要一起分配。",
    "tags": [
      "代數",
      "一元一次式化簡",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-substitution"
    ],
    "authoringIntent": "連續使用分配律並合併同類項。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "cfd0008d367560bc2d1f507651e02a33fcbbe99f1834e59e3a9e6b1a3922a134",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s002-v006",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-simplify",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "化簡－(4x－5)＋2(x＋3)。",
    "choices": [
      "-2x＋1",
      "6x＋1",
      "－2x＋11",
      "-6x＋11"
    ],
    "answerIndex": 2,
    "explanation": "去第一括號得-4x+5；展開第二括號得2x+6；合併為-2x+11。所以答案是「－2x＋11」。",
    "steps": [
      "去第一括號得-4x+5",
      "展開第二括號得2x+6",
      "合併為-2x+11"
    ],
    "optionAnalysis": [
      {
        "choice": "-2x＋1",
        "truth": false,
        "reason": "漏掉第二括號的6。"
      },
      {
        "choice": "6x＋1",
        "truth": false,
        "reason": "把-4x與2x相加成6x。"
      },
      {
        "choice": "－2x＋11",
        "truth": true,
        "reason": "第一括號變為-4x+5，第二括號為2x+6，合併得-2x+11。 因此此選項符合題目。"
      },
      {
        "choice": "-6x＋11",
        "truth": false,
        "reason": "把係數合併成-6x。"
      }
    ],
    "commonMistake": "多個括號同時展開時符號混亂。",
    "concept": "逐個括號展開後再分類合併。",
    "tags": [
      "代數",
      "一元一次式化簡",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-substitution"
    ],
    "authoringIntent": "同時處理負號括號與分配律。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d66739a989c6543a23ffe445f3a6b31d2f2927b03c5eab21b0ad3beb8783990c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s002-v007",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-simplify",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "化簡 2(3a－4)－[a－(2a＋1)]。",
    "choices": [
      "5a－9",
      "3a－7",
      "7a－9",
      "7a－7"
    ],
    "answerIndex": 3,
    "explanation": "先化簡2(3a-4)=6a-8；中括號化成-a-1；6a-8+a+1=7a-7。所以答案是「7a－7」。",
    "steps": [
      "先化簡2(3a-4)=6a-8",
      "中括號化成-a-1",
      "6a-8+a+1=7a-7"
    ],
    "optionAnalysis": [
      {
        "choice": "5a－9",
        "truth": false,
        "reason": "中括號只去掉一層符號。"
      },
      {
        "choice": "3a－7",
        "truth": false,
        "reason": "把6a與-a合併成3a。"
      },
      {
        "choice": "7a－9",
        "truth": false,
        "reason": "常數-8與+1誤算成-9。"
      },
      {
        "choice": "7a－7",
        "truth": true,
        "reason": "前段為6a-8；中括號a-(2a+1)=-a-1，所以相減後6a-8-(-a-1)=7a-7。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "未把中括號整體視為被減數。",
    "concept": "內層結果作為整體再處理外部減號。",
    "tags": [
      "代數",
      "一元一次式化簡",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-substitution"
    ],
    "authoringIntent": "逐層化簡巢狀括號。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "35a4a727df97894185a9c2221c35f2069c87b497a2cae56bda5d52227f998465",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s002-v008",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-simplify",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "化簡 1/2(6x－4)＋1/3(3x＋6)。",
    "choices": [
      "4x",
      "4x－4",
      "3x",
      "5x"
    ],
    "answerIndex": 0,
    "explanation": "分別分配1/2得3x-2；分配1/3得x+2；相加得4x。所以答案是「4x」。",
    "steps": [
      "分別分配1/2得3x-2",
      "分配1/3得x+2",
      "相加得4x"
    ],
    "optionAnalysis": [
      {
        "choice": "4x",
        "truth": true,
        "reason": "第一部分3x-2，第二部分x+2，相加常數抵消，得4x。 因此此選項符合題目。"
      },
      {
        "choice": "4x－4",
        "truth": false,
        "reason": "常數未抵消。"
      },
      {
        "choice": "3x",
        "truth": false,
        "reason": "漏掉第二個x。"
      },
      {
        "choice": "5x",
        "truth": false,
        "reason": "把兩個係數相加成5。"
      }
    ],
    "commonMistake": "只約分未知數項而漏處理常數。",
    "concept": "分數乘括號內每一項。",
    "tags": [
      "代數",
      "一元一次式化簡",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-substitution"
    ],
    "authoringIntent": "用分數係數分配並合併。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c43d547566224bc3e962a1ad3cbf3ea3b752ed0021d7fc4ba1670aa03d7fcce5",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s002-v009",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-simplify",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "化簡 0.4x＋1.2－0.1(3x－2)。",
    "choices": [
      "0.1x＋1",
      "0.7x＋1",
      "0.1x＋1.4",
      "0.1x＋1.0"
    ],
    "answerIndex": 2,
    "explanation": "展開被減括號為0.3x-0.2；外部減號使其成-0.3x+0.2；合併得0.1x+1.4。所以答案是「0.1x＋1.4」。",
    "steps": [
      "展開被減括號為0.3x-0.2",
      "外部減號使其成-0.3x+0.2",
      "合併得0.1x+1.4"
    ],
    "optionAnalysis": [
      {
        "choice": "0.1x＋1",
        "truth": false,
        "reason": "把+0.2漏掉。"
      },
      {
        "choice": "0.7x＋1",
        "truth": false,
        "reason": "把0.4x與0.3x相加。"
      },
      {
        "choice": "0.1x＋1.4",
        "truth": true,
        "reason": "0.1(3x-2)=0.3x-0.2，前式減去它變為0.4x+1.2-0.3x+0.2=0.1x+1.4。 因此此選項符合題目。"
      },
      {
        "choice": "0.1x＋1.0",
        "truth": false,
        "reason": "常數1.2-0.2算成1.0。"
      }
    ],
    "commonMistake": "減去含負常數的式子時未變號。",
    "concept": "小數運算仍遵守分配律。",
    "tags": [
      "代數",
      "一元一次式化簡",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-substitution"
    ],
    "authoringIntent": "正確處理小數係數與負號。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c995ef6ae0482b9f038ea329786fa1c5fdb07de3566899d2b98db78c0976ce01",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s002-v010",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-simplify",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長方形長為 3x＋2 公尺、寬為 x－1 公尺。其周長可化簡為哪一式？",
    "choices": [
      "4x＋1",
      "8x＋6",
      "4x＋2",
      "8x＋2"
    ],
    "answerIndex": 3,
    "explanation": "先將長與寬相加得4x+1；周長為其2倍；分配得到8x+2。所以答案是「8x＋2」。",
    "steps": [
      "先將長與寬相加得4x+1",
      "周長為其2倍",
      "分配得到8x+2"
    ],
    "optionAnalysis": [
      {
        "choice": "4x＋1",
        "truth": false,
        "reason": "只算長加寬。"
      },
      {
        "choice": "8x＋6",
        "truth": false,
        "reason": "把括號內常數算成3。"
      },
      {
        "choice": "4x＋2",
        "truth": false,
        "reason": "只將未知數部分乘2。"
      },
      {
        "choice": "8x＋2",
        "truth": true,
        "reason": "周長2[(3x+2)+(x-1)]=2(4x+1)=8x+2。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "把半周長當成周長。",
    "concept": "周長公式與同類項化簡缺一不可。",
    "tags": [
      "代數",
      "一元一次式化簡",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-substitution"
    ],
    "authoringIntent": "由幾何情境建立並化簡文字式。",
    "literacyContextNecessity": "長與寬的幾何意義決定必須使用2(長+寬)，情境不可刪除為純粹展開題。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e8074f4b9419420a18f46f0e065912f125168aa2f4062a91282fe74cea1a68f4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s002-v011",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-simplify",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某活動買 4 張成人票，每張 x 元；另買 3 張兒童票，每張比成人票少 50 元。總票價可化簡為何式？",
    "choices": [
      "7x－150",
      "7x－50",
      "x－150",
      "12x－150"
    ],
    "answerIndex": 0,
    "explanation": "成人票費用為4x；兒童票費用為3x-150；合併為7x-150。所以答案是「7x－150」。",
    "steps": [
      "成人票費用為4x",
      "兒童票費用為3x-150",
      "合併為7x-150"
    ],
    "optionAnalysis": [
      {
        "choice": "7x－150",
        "truth": true,
        "reason": "成人票4x，兒童票3(x-50)=3x-150，合計7x-150。 因此此選項符合題目。"
      },
      {
        "choice": "7x－50",
        "truth": false,
        "reason": "折價50只扣一次。"
      },
      {
        "choice": "x－150",
        "truth": false,
        "reason": "只保留一張成人票係數。"
      },
      {
        "choice": "12x－150",
        "truth": false,
        "reason": "把張數4與3相乘。"
      }
    ],
    "commonMistake": "把每張少50誤成總共少50。",
    "concept": "每張折價要乘兒童票張數。",
    "tags": [
      "代數",
      "一元一次式化簡",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-substitution"
    ],
    "authoringIntent": "把多類票價翻成一元一次式。",
    "literacyContextNecessity": "成人與兒童票的張數和價差決定各項係數，刪除售票情境就無法建立正確式子。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c56c14fbe98295febcc9287406d47b2d116f7bc9a5599ad273045f25a83af15d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s002-v012",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-simplify",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "倉庫原有 n 箱貨，每箱 12 件；出貨量為 3n＋8 件。剩餘件數化簡為何式？",
    "choices": [
      "9n＋8",
      "9n－8",
      "15n－8",
      "12n－8"
    ],
    "answerIndex": 1,
    "explanation": "原有量為12n；剩餘量是12n-(3n+8)；去括號合併得9n-8。所以答案是「9n－8」。",
    "steps": [
      "原有量為12n",
      "剩餘量是12n-(3n+8)",
      "去括號合併得9n-8"
    ],
    "optionAnalysis": [
      {
        "choice": "9n＋8",
        "truth": false,
        "reason": "減去出貨量時常數符號未改。"
      },
      {
        "choice": "9n－8",
        "truth": true,
        "reason": "原有12n件，減去3n+8，得12n-3n-8=9n-8。 因此此選項符合題目。"
      },
      {
        "choice": "15n－8",
        "truth": false,
        "reason": "把12n與3n相加。"
      },
      {
        "choice": "12n－8",
        "truth": false,
        "reason": "只扣掉常數8，漏扣3n。"
      }
    ],
    "commonMistake": "把出貨式中的加8保留為加。",
    "concept": "減去整個出貨式要逐項變號。",
    "tags": [
      "代數",
      "一元一次式化簡",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-substitution"
    ],
    "authoringIntent": "由庫存與出貨關係化簡剩餘量。",
    "literacyContextNecessity": "每箱件數、箱數與出貨規則共同形成12n-(3n+8)，情境資料直接決定代數式。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6a27596717039fa86513bf61e2082c5613b45fe214e82399557f329cda45fce0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u03-s002-cr001",
    "unitId": "u03",
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-simplify",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "化簡 4(3x－2)－2(x＋5)＋7，並以 x＝2 驗證原式與化簡式同值。",
    "requiredWork": [
      "完整展開括號。",
      "合併同類項。",
      "代入x=2驗證兩式。"
    ],
    "fullCreditSolution": [
      "展開：12x-8-2x-10+7。",
      "化簡為10x-11。",
      "原式代x=2得9；10(2)-11=9。"
    ],
    "alternativeSolutions": [
      "可先分別化簡兩個括號，再合併。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "化簡為10x-11且完成同值驗證。"
      },
      {
        "score": 2,
        "criteria": "化簡正確但未驗證，或驗證正確但一處算術錯。"
      },
      {
        "score": 1,
        "criteria": "能正確展開至少一個括號並合併x項。"
      },
      {
        "score": 0,
        "criteria": "分配律與同類項概念均不正確。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "-2(x+5)展成-2x+10。",
      "常數-8-10+7算錯。"
    ],
    "independentReview": {
      "derivedResult": "10x-11，x=2時兩式皆為9",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "40355980562b83ec73ecd4d51c21e7ebddcc676529e01650f1ff259533667af5",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s002-cr002",
    "unitId": "u03",
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-simplify",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某校購買 n 箱紙，每箱 500 張；印製講義使用 120n＋300 張。請寫出剩餘紙張的最簡式，並說明300為何不能與n項直接合併。",
    "requiredWork": [
      "先列原有量減使用量。",
      "化簡並說明同類項條件。"
    ],
    "fullCreditSolution": [
      "剩餘=500n-(120n+300)。",
      "=500n-120n-300=380n-300。",
      "300是常數，與含n的項不是同類項。"
    ],
    "alternativeSolutions": [
      "可用n=1作數值驗證：500-420=80，380-300=80。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "列式、化簡與同類項說明三者完整。"
      },
      {
        "score": 2,
        "criteria": "化簡正確但理由不完整，或一處符號錯。"
      },
      {
        "score": 1,
        "criteria": "能列500n-(120n+300)或指出常數不同類。"
      },
      {
        "score": 0,
        "criteria": "無有效列式且混淆每箱與總量。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "括號前負號未分配。",
      "把300合併到n的係數。"
    ],
    "independentReview": {
      "derivedResult": "380n-300張",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "ca7c289f985431efc3384ed4d2b78acfb43a6e0506bd6ee232149420f37eda42",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const DRAWING_SPECS = [];
