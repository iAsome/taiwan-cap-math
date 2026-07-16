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
    "化簡一元一次式是把原式改寫成較精簡但對所有允許的未知數值都相等的式子，不是在求某個特定的 x，也不能為了簡短而任意刪除項。",
    "只有未知數部分完全相同的同類項才能合併。ax 與 bx 可合成 (a+b)x，但含 x 的一次項與不含 x 的常數項必須分開保留。",
    "分配律要求括號外係數乘到括號內每一項；括號前只有負號時可視為乘以負一。去括號後，每一項都要連同前方正負號一起整理。",
    "情境列式要先分清每份與總共的層級，再進行化簡。完成後可選一個簡單數值代入原式與化簡式，比較兩者是否同值來檢查。"
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
      "instruction": "先辨認每個括號外的係數與負號作用範圍。",
      "check": "係數會乘到括號內每一項，沒有只作用於第一項。"
    },
    {
      "step": 2,
      "instruction": "由內向外展開括號，將每一項連同符號完整抄寫。",
      "check": "負數乘負數的項已正確變成正數。"
    },
    {
      "step": 3,
      "instruction": "把相同未知數的一次項與常數項分別歸類。",
      "check": "沒有把未知數項和常數項當成同類項。"
    },
    {
      "step": 4,
      "instruction": "分別計算未知數項係數與常數和，寫成最簡式。",
      "check": "係數一、負一與零的表示都符合代數慣例。"
    },
    {
      "step": 5,
      "instruction": "選一個簡單值代入原式及化簡式進行等值驗證。",
      "check": "兩式得到相同數值，情境單位與層級也未改變。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u03-s002-example-a",
      "prompt": "化簡 9x-4x+6。",
      "solutionSteps": [
        "合併同類的 x 項，9x-4x=5x。",
        "常數六保留，寫成 5x+6。"
      ],
      "answer": "5x+6。",
      "why": "九 x 與負四 x 的未知數部分相同，所以係數可相減成五；常數六不含 x，不能再和五 x 合併，必須保留為另一項。"
    },
    {
      "exampleId": "u03-s002-example-b",
      "prompt": "化簡 2(3y-4)-y。",
      "solutionSteps": [
        "分配外係數，得到 6y-8-y。",
        "合併 y 項，得到 5y-8。"
      ],
      "answer": "5y-8。",
      "why": "外係數二必須同時乘三 y 與負四，先得到六 y 減八；再把負 y 視為係數負一的同類項，六減一得到五，常數負八保持不變。"
    },
    {
      "exampleId": "u03-s002-example-c",
      "prompt": "化簡 5a-[2a-(4-a)]。",
      "solutionSteps": [
        "先化最內層，2a-(4-a)=3a-4。",
        "計算 5a-(3a-4)=2a+4。"
      ],
      "answer": "2a+4。",
      "why": "內層減號先使四與負 a 變成負四與正 a，得到三 a 減四；外層再減整個括號，負四因此改成正四，最後合併為二 a 加四。"
    },
    {
      "exampleId": "u03-s002-example-d",
      "prompt": "六箱零件每箱 x 個，送出兩箱且每箱另附三個，求剩餘數量式。",
      "solutionSteps": [
        "原有量為 6x，送出量為 2(x+3)。",
        "相減得 6x-2x-6=4x-6。"
      ],
      "answer": "4x-6 個。",
      "why": "送出的兩箱各包含 x 個零件與三個附件，所以三也要乘二。剩餘量用原有六 x 減去完整送出量，不能只減兩 x。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把 3x+4 合併成 7x。",
      "why": "常數與含 x 的項不是同類項。",
      "correction": "未知數項與常數項分開保留。"
    },
    {
      "mistake": "把 2(x+5) 展開成 2x+5。",
      "why": "括號外二漏乘常數五。",
      "correction": "逐項分配成 2x+10。"
    },
    {
      "mistake": "把 -(x-4) 寫成 -x-4。",
      "why": "只改了括號第一項的符號。",
      "correction": "視為乘負一，得到 -x+4。"
    },
    {
      "mistake": "合併係數時只看絕對值。",
      "why": "每項前方符號本來就是係數的一部分。",
      "correction": "先把每項寫成帶號係數再相加。"
    },
    {
      "mistake": "巢狀括號由外層直接拆除。",
      "why": "內層符號尚未確定就套用外層負號。",
      "correction": "先化簡最內層，再逐層向外。"
    },
    {
      "mistake": "把每份減三誤成總量只減三。",
      "why": "沒有區分括號內的每份變化與括號外份數。",
      "correction": "先列份數乘每份量，再展開化簡。"
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
  "contentSha256": "ea40c872408abc82775049ec9bbee603a9a8c4e2a5a7319eb62be853d1874f98",
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
    "explanation": "3x 與 5x 都是 x 的一次項，屬於同類項，因此只需把係數三與五相加。係數和為八，未知數 x 保留，化簡結果是 8x；不能把 x 一併消去。",
    "steps": [
      "辨認 3x 與 5x 都是 x 的同類項。",
      "相加係數 3+5=8。",
      "保留共同未知數，寫成 8x。"
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
    "commonMistake": "係數相加得到八後漏寫 x，把代數式誤化成常數八。",
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
    "contentSha256": "12145cb0afb00369466e38f50c23d4cc57b959a875212723ce61356f307f63cb",
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
    "explanation": "7a 與 -2a 是同類項，係數相加為 7-2=5，所以合併成 5a。常數四不含 a，不能與 5a 再合併，因此最簡式是 5a+4，而不是單一項。用簡單數值代入前後也會同值。",
    "steps": [
      "把 a 項 7a-2a 分在同一組。",
      "計算係數差 7-2=5，得到 5a。",
      "保留不同類的常數 4，寫成 5a+4。"
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
    "commonMistake": "把常數四當成 a 的係數一起相加，混淆未知數項與常數項。",
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
    "contentSha256": "fcf6b17fbd30c56b945cd63125c28e5541e4949d00d79fac2a1b0adcb6351032",
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
    "explanation": "依分配律，括號外的四要分別乘 2x 與 -3。第一項為 8x，第二項為 -12，所以展開後得到 8x-12；外係數不能只作用在含 x 的第一項。代入任意 x 前後皆同值。",
    "steps": [
      "用 4 乘第一項 2x，得到 8x。",
      "用 4 乘第二項 -3，得到 -12。",
      "依原順序合併為 8x-12。"
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
    "commonMistake": "只計算 4×2x，卻把括號內的負三原樣保留為負三。",
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
    "contentSha256": "fb5ddbcdb151fc191472c303b1d2739c556632943377baec74672782192992e7",
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
    "explanation": "括號前的減號等於把括號整體乘以負一，因此 -(2y-7)=-2y+7。再與 5y 合併，5y-2y=3y，常數正七保留，最簡式為 3y+7。代入零即可驗證常數應為正七。",
    "steps": [
      "把減去 (2y-7) 展開成 -2y+7。",
      "合併 y 項 5y-2y=3y。",
      "保留常數正七，得到 3y+7。"
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
    "commonMistake": "去括號時只把 2y 變號，沒有把負七也改成正七。",
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
    "contentSha256": "a0bab33cf8f2c4a51088edee797aaa24fac6bfed38fa235deadbce66f7a04232",
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
    "explanation": "先展開 3(2m+1)=6m+3；第二部分是減去 4(m-2)，所以展開為 -4m+8。合併同類項後，6m-4m=2m，3+8=11，得到 2m+11。若第二括號符號錯誤，代入任意 m 時兩式就不相等，符號可核對。",
    "steps": [
      "展開第一括號為 6m+3。",
      "把 -4 分配到第二括號，得到 -4m+8。",
      "合併為 2m+11。"
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
    "commonMistake": "把 -4(m-2) 寫成 -4m-8，未處理負數乘負二為正八。",
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
    "contentSha256": "3192fbb1d676be6a5588d04800d674edb3518a355b25bb9426d5bf3efed371a2",
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
    "explanation": "第一個括號前只有負號，展開為 -4x+5；第二個括號乘二後為 2x+6。合併 x 項得 -2x，常數五加六得十一，因此結果是 -2x+11。代入零可核對常數十一。",
    "steps": [
      "展開 -(4x-5) 為 -4x+5。",
      "展開 2(x+3) 為 2x+6。",
      "合併 -4x+2x 與 5+6，得到 -2x+11。"
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
    "commonMistake": "同時展開兩個括號時漏改第一括號的常數符號，導致常數和錯誤。",
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
    "contentSha256": "88d51b7c8d9f39674629bc8741e403abe7428647a7d493a96b525a25be4e484a",
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
    "explanation": "先得 2(3a-4)=6a-8；中括號 a-(2a+1)=-a-1。原式是再減去整個中括號，因此變成 6a-8-(-a-1)=6a-8+a+1=7a-7。兩層減號依序處理，代入零可核對最後常數負七，結果前後同值。",
    "steps": [
      "展開左側括號，得到 6a-8。",
      "由內向外化簡中括號為 -a-1。",
      "減去中括號並合併，得到 7a-7。"
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
    "commonMistake": "把中括號當成直接相加，沒有讓外層減號作用於括號內每一項。",
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
    "contentSha256": "2a371d8ccb1c2c5e421f0dd0b827bc6645438eeed20e92689e4d3d97a6ffc0af",
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
    "explanation": "把二分之一分配到 6x-4，得到 3x-2；把三分之一分配到 3x+6，得到 x+2。兩式相加時常數負二與正二抵消，x 項合併為 4x。兩個常數正好完全抵消。",
    "steps": [
      "計算 1/2(6x-4)=3x-2。",
      "計算 1/3(3x+6)=x+2。",
      "相加並抵消常數，得到 4x。"
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
    "commonMistake": "只約分兩個括號中的 x 項，漏把分數係數分配到常數項。",
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
    "contentSha256": "9734ccc1b2651a4a268147726809838a64dc6c2c9259f3c270f3ecf77dd1f155",
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
    "explanation": "先算 0.1(3x-2)=0.3x-0.2。原式減去這個括號，符號改為 -0.3x+0.2；再合併 0.4x-0.3x=0.1x，1.2+0.2=1.4，故為 0.1x+1.4。代入零時原式也是一點四，可直接檢查常數符號，兩項都已核對。",
    "steps": [
      "展開 0.1(3x-2)=0.3x-0.2。",
      "套用外層減號，改成 -0.3x+0.2。",
      "合併同類項得到 0.1x+1.4。"
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
    "commonMistake": "減去含負常數的式子時仍寫負零點二，忘記減負數要改成加。",
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
    "contentSha256": "da96d31c3ed38dbd1fe3f5f287730a63f4b3158d5dc32951e4ffcfc9f36f1bc8",
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
    "explanation": "長與寬的和為 (3x+2)+(x-1)=4x+1，這只是半周長。長方形周長要乘二，所以 2(4x+1)=8x+2 公尺；常數二與負一也要先正確合併。代入正值後周長亦為正。",
    "steps": [
      "先列周長 2[(3x+2)+(x-1)]。",
      "化簡括號內長寬和為 4x+1。",
      "分配外層二，得到 8x+2 公尺。"
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
    "commonMistake": "算出長寬和 4x+1 就作答，誤把半周長當成完整周長。",
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
    "contentSha256": "a516be0775708a8398075e579c7d3a699ad1e7b29f9a1a515602aa5eac066723",
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
    "explanation": "四張成人票費用為 4x；每張兒童票是 x-50 元，三張共 3(x-50)=3x-150。兩類票價相加得 4x+3x-150=7x-150 元。每張少五十的影響要重複三次，不能只扣一次。",
    "steps": [
      "寫出成人票總價 4x。",
      "寫出兒童票總價 3(x-50)=3x-150。",
      "合併兩類費用為 7x-150。"
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
    "commonMistake": "把每張兒童票少五十元誤成三張合計只少五十元。",
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
    "contentSha256": "772cabc07daa333a2f4585fe749326d6e1eb1f7b8258b8aa5f64646e182d95f0",
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
    "explanation": "倉庫原有 n 箱、每箱十二件，所以原有量是 12n。剩餘量為 12n-(3n+8)，外層減號要分配成 -3n-8；合併後得到 9n-8 件。代入零可驗證常數應為負八。",
    "steps": [
      "由箱數與每箱件數寫出原有量 12n。",
      "列剩餘量 12n-(3n+8)。",
      "去括號並合併，得到 9n-8 件。"
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
    "commonMistake": "去掉出貨量括號時仍保留正八，使已出貨的額外八件反而增加庫存。",
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
    "contentSha256": "55f16592ed6fd1db61fc882f503e1020624a3421749c36e33650ae73ec57ba4d",
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
      "依分配律展開：4(3x-2)-2(x+5)+7=12x-8-2x-10+7。",
      "合併同類項，12x-2x=10x，常數 -8-10+7=-11，所以最簡式為 10x-11。",
      "以 x=2 驗證：原式 4(4)-2(7)+7=9，化簡式 10(2)-11=9，兩者同值，證明展開與合併沒有改變原式，前後相符。"
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
      "把 -2(x+5) 展開成 -2x+10，漏掉負二乘正五仍為負十。",
      "合併常數 -8-10+7 時忽略其中一個負號，得到錯誤常數。",
      "只驗證化簡式的值，沒有獨立計算原式，因此無法完成等值檢查。"
    ],
    "independentReview": {
      "derivedResult": "10x-11，x=2時兩式皆為9",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "c7d544fdb53eb53a7074b43f3cdf87eafbf6d791f29349f46b2a459d062f37fa",
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
      "n 箱紙、每箱五百張，原有紙張為 500n；扣除使用量後列式 500n-(120n+300)。",
      "把外層減號分配進括號，得到 500n-120n-300，再合併同類項為 380n-300 張。",
      "三百是沒有未知數的常數項，380n 是含 n 的一次項，兩者不是同類項，不能再直接合併。"
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
      "去括號時把使用量中的正三百保留為正，讓已使用紙張反而增加剩餘量。",
      "把常數三百加到 n 的係數三百八十，誤寫成 680n。",
      "只計算每箱紙張差 500-120，漏掉另行使用的三百張。"
    ],
    "independentReview": {
      "derivedResult": "380n-300張",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "ed18b5f23ec8ac5da600da58118ec8bcf61de8829791417f04d47c8e8c31de7d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const DRAWING_SPECS = [];
