// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
// CONTENT AUTHORITY: CHATGPT_HUMAN_AUTHORED_R1
// OLD GENERATED CONTENT MUST NOT BE IMPORTED OR MERGED.
export const LECTURE = {
  "lectureId": "u03-s005-lecture-r1",
  "unitId": "u03",
  "topicId": "u03-linear-equation-solving",
  "skillId": "linear-equation-parentheses",
  "title": "含括號的一元一次方程式：先判斷層級再展開求解",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能以分配律正確展開括號。",
    "能處理括號前負係數與巢狀括號。",
    "能選擇先除係數或先展開的有效策略。",
    "能由重複群組情境建立括號方程式。"
  ],
  "prerequisites": [
    {
      "skillId": "linear-equation-basic-solving",
      "requiredLevel": "能解基本一元一次方程式，並檢查移項等同等量操作。"
    }
  ],
  "glossary": [
    {
      "term": "括號層級",
      "definition": "指出哪些項先視為一個整體。"
    },
    {
      "term": "分配律",
      "definition": "外係數乘括號內每一項。"
    },
    {
      "term": "巢狀括號",
      "definition": "括號內還包含另一層括號。"
    },
    {
      "term": "群組量",
      "definition": "每一組共同包含的數量，常寫在括號內。"
    }
  ],
  "notation": [
    {
      "symbol": "a(x+b)",
      "meaning": "a個相同群組，每組含x+b。"
    },
    {
      "symbol": "-[x-(y+1)]",
      "meaning": "須由內向外處理兩層負號。"
    }
  ],
  "conceptNarrative": [
    "含括號方程式最常見錯誤是外係數只乘第一項。",
    "若方程式兩邊都有公因數，可先同除以該數，減少展開工作。",
    "括號前負號等於乘-1，括號內每項都要變號。",
    "生活題中「每一組都增加或減少」通常形成a(x±b)，而「總共增加」則在括號外。"
  ],
  "formalDefinitions": [
    {
      "name": "分配律展開",
      "statement": "a(bx+c)=abx+ac。"
    },
    {
      "name": "群組方程式",
      "statement": "組數×每組量±整體額外量=總量。"
    }
  ],
  "formulas": [
    {
      "formula": "a(x+b)=c ⇒ x+b=c/a",
      "conditions": [
        "a≠0"
      ],
      "meaning": "可先兩邊同除a。"
    },
    {
      "formula": "a(x+b)+d=e",
      "conditions": [
        "依等量公理處理d與a"
      ],
      "meaning": "常見群組型方程式。"
    }
  ],
  "nonApplicableCases": [
    "不能把a(x+b)寫成ax+b。",
    "括號內不是同類項時不可先合併。",
    "情境中的每組變化與整體變化不能互換。",
    "巢狀括號要由最內層開始。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "辨認括號代表運算群組還是情境群組。",
      "check": "外係數作用範圍到哪裡？"
    },
    {
      "step": 2,
      "instruction": "評估先除共同係數或先展開。",
      "check": "哪種方法項數較少？"
    },
    {
      "step": 3,
      "instruction": "用分配律處理每一項。",
      "check": "負號是否全部分配？"
    },
    {
      "step": 4,
      "instruction": "合併同類項後解基本方程式。",
      "check": "左右兩邊是否先化簡？"
    },
    {
      "step": 5,
      "instruction": "代回原括號式與情境。",
      "check": "每組量與總量是否一致？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "解4(x+3)=32。",
      "solutionSteps": [
        "兩邊除4得x+3=8。",
        "x=5。"
      ],
      "answer": "5。"
    },
    {
      "exampleId": "L2",
      "prompt": "解6-3(x-2)=-9。",
      "solutionSteps": [
        "展開得6-3x+6=-9。",
        "12-3x=-9，故x=7。"
      ],
      "answer": "7。"
    },
    {
      "exampleId": "L3",
      "prompt": "解2[5-(x+1)]=8。",
      "solutionSteps": [
        "內層5-(x+1)=4-x。",
        "2(4-x)=8，4-x=4，所以x=0。"
      ],
      "answer": "0。"
    },
    {
      "exampleId": "L4",
      "prompt": "8盒零件，每盒原有x個，整理後每盒多2個，共80個。",
      "solutionSteps": [
        "列8(x+2)=80。",
        "x+2=10。",
        "x=8。"
      ],
      "answer": "每盒原有8個。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "外係數只乘未知數項。",
      "why": "忽略分配律作用於整個括號。",
      "correction": "逐項畫箭頭相乘。"
    },
    {
      "mistake": "-2(x-3)展成-2x-6。",
      "why": "負負相乘符號錯。",
      "correction": "第二項為+6。"
    },
    {
      "mistake": "先把x+3合併成4x。",
      "why": "未知數項與常數不是同類項。",
      "correction": "保留括號或分配。"
    },
    {
      "mistake": "巢狀括號從外層亂拆。",
      "why": "未處理內部符號。",
      "correction": "先化簡最內層。"
    },
    {
      "mistake": "每盒多2個寫成8x+2。",
      "why": "把每組變化當整體一次。",
      "correction": "寫成8(x+2)。"
    },
    {
      "mistake": "得到分數解就認為展開錯。",
      "why": "預設答案一定整數。",
      "correction": "代回確認即可。"
    }
  ],
  "selfCheck": [
    "外係數是否乘每一項？",
    "括號前負號是否完整分配？",
    "情境變化是每組還是總共？",
    "是否選擇較簡潔的合法解法？",
    "代回原括號式是否成立？"
  ],
  "summary": [
    "括號表示整體。",
    "分配律需乘每一項。",
    "可先除共同係數。",
    "每組變化通常放在括號內。"
  ],
  "connections": {
    "previous": "建立在基本方程式與一元一次式展開上。",
    "next": [
      "含分母方程式會把括號與通分結合。",
      "應用問題常以括號表示每組或每段變化。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u03-s005-v001",
      "u03-s005-v002",
      "u03-s005-v003",
      "u03-s005-v004",
      "u03-s005-v005",
      "u03-s005-v006",
      "u03-s005-v007",
      "u03-s005-v008",
      "u03-s005-v009",
      "u03-s005-v010",
      "u03-s005-v011",
      "u03-s005-v012"
    ],
    "constructedResponseIds": [
      "u03-s005-cr001",
      "u03-s005-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四例逐一展開與代回：4(5+3)=32、6-3(7-2)=-9、2[5-(0+1)]=8、8(8+2)=80；特別核對負係數與每盒層級。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "4731260d831b7de47dc958891aefa36b3bab727e17413212652be4759f50912d",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "legacyContentDisposition": "replace-old-lecture-at-final-integration"
};

export const QUESTIONS = [
  {
    "questionId": "u03-s005-v001",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-parentheses",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解 3(x＋2)＝21。",
    "choices": [
      "5",
      "3",
      "7",
      "9"
    ],
    "answerIndex": 0,
    "explanation": "先消括號外係數3；x+2=7；兩邊減2得5。所以答案是「5」。",
    "steps": [
      "先消括號外係數3",
      "x+2=7",
      "兩邊減2得5"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": true,
        "reason": "兩邊除3得x+2=7，再減2得x=5。 因此此選項符合題目。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "只算21÷7。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "算到x+2=7就停止。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "把2移項後相加。"
      }
    ],
    "commonMistake": "括號外係數未處理。",
    "concept": "可先除係數再解括號內。",
    "tags": [
      "代數",
      "含括號的一元一次方程式",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-basic-solving"
    ],
    "authoringIntent": "解外有係數的括號方程式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "80db3d12182e92372e29bfda991447e8d1bd536923d4152c62e8271e9fa66d5e",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s005-v002",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-parentheses",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解 2(x－4)＝10。",
    "choices": [
      "1",
      "9",
      "5",
      "14"
    ],
    "answerIndex": 1,
    "explanation": "兩邊除2；x-4=5；兩邊加4得9。所以答案是「9」。",
    "steps": [
      "兩邊除2",
      "x-4=5",
      "兩邊加4得9"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "把5-4當解。"
      },
      {
        "choice": "9",
        "truth": true,
        "reason": "兩邊除2得x-4=5，再加4得x=9。 因此此選項符合題目。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "算到5停止。"
      },
      {
        "choice": "14",
        "truth": false,
        "reason": "把4再加兩次。"
      }
    ],
    "commonMistake": "移項時將-4變成-4。",
    "concept": "消係數後用逆運算。",
    "tags": [
      "代數",
      "含括號的一元一次方程式",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-basic-solving"
    ],
    "authoringIntent": "處理括號內減法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "5d39acf865a6300163ddea4785f089906621e4af5ffa15e0d8b44ac3a766e2d3",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s005-v003",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-parentheses",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解 5－2(x＋1)＝－9。",
    "choices": [
      "-6",
      "3",
      "6",
      "7"
    ],
    "answerIndex": 2,
    "explanation": "分配-2得-2x-2；合併為3-2x=-9；解得x=6。所以答案是「6」。",
    "steps": [
      "分配-2得-2x-2",
      "合併為3-2x=-9",
      "解得x=6"
    ],
    "optionAnalysis": [
      {
        "choice": "-6",
        "truth": false,
        "reason": "最後除負數漏符號。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "把常數3當解。"
      },
      {
        "choice": "6",
        "truth": true,
        "reason": "展開得5-2x-2=-9，即3-2x=-9；減3後-2x=-12，所以x=6。 因此此選項符合題目。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "展開時把-2×1算成+2。"
      }
    ],
    "commonMistake": "-2只乘x而未乘1。",
    "concept": "先完整分配再合併。",
    "tags": [
      "代數",
      "含括號的一元一次方程式",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-basic-solving"
    ],
    "authoringIntent": "處理括號前負係數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1bba12b566db03e9f7a0ac7c5980e2dbda97ad0ed1626d18029d9fe25c56f86a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s005-v004",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-parentheses",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解 4(2x－3)＝20。",
    "choices": [
      "1",
      "5",
      "8",
      "4"
    ],
    "answerIndex": 3,
    "explanation": "分配4得8x-12；兩邊加12；除8得4。所以答案是「4」。",
    "steps": [
      "分配4得8x-12",
      "兩邊加12",
      "除8得4"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "把20-12後除8。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "只算20÷4。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "把2x-3直接等於20。"
      },
      {
        "choice": "4",
        "truth": true,
        "reason": "展開得8x-12=20；加12得8x=32，除8得x=4。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "只把4乘2x。",
    "concept": "括號內每項都要乘4。",
    "tags": [
      "代數",
      "含括號的一元一次方程式",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-basic-solving"
    ],
    "authoringIntent": "解展開後的兩步方程式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "fb538006cee0233744b7bc0f743e06174cf0e1aade8ec2e845e9a72f9ce81329",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s005-v005",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-parentheses",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解 3(x－2)＋5＝2x＋8。",
    "choices": [
      "1",
      "9",
      "7",
      "13"
    ],
    "answerIndex": 1,
    "explanation": "展開並合併左邊為3x-1；兩邊減2x；兩邊加1得9。所以答案是「9」。",
    "steps": [
      "展開並合併左邊為3x-1",
      "兩邊減2x",
      "兩邊加1得9"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "把常數-6+5算成1。"
      },
      {
        "choice": "9",
        "truth": true,
        "reason": "展開得3x-6+5=2x+8，即3x-1=2x+8，所以x=9。 因此此選項符合題目。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "算到x=7。"
      },
      {
        "choice": "13",
        "truth": false,
        "reason": "把右邊8與左邊5直接相減。"
      }
    ],
    "commonMistake": "未先合併左邊常數。",
    "concept": "先化簡每一邊再移項。",
    "tags": [
      "代數",
      "含括號的一元一次方程式",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-basic-solving"
    ],
    "authoringIntent": "括號展開後整理兩邊未知數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "897b0dcc6fb3fe85ca7d7d3d375fff10f866b7a1110da89cfad3e02b1402d2ff",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s005-v006",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-parentheses",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解 2(3x＋1)－4(x－2)＝18。",
    "choices": [
      "2",
      "5",
      "4",
      "8"
    ],
    "answerIndex": 2,
    "explanation": "分配兩個括號；合併成2x+10=18；2x=8得4。所以答案是「4」。",
    "steps": [
      "分配兩個括號",
      "合併成2x+10=18",
      "2x=8得4"
    ],
    "optionAnalysis": [
      {
        "choice": "2",
        "truth": false,
        "reason": "把18-10後再除4。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "常數2+8誤成8。"
      },
      {
        "choice": "4",
        "truth": true,
        "reason": "展開得6x+2-4x+8=18，即2x+10=18，所以x=4。 因此此選項符合題目。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "把係數6與4相加。"
      }
    ],
    "commonMistake": "把-4(x-2)展成-4x-8。",
    "concept": "第二括號前的負號與4一起分配。",
    "tags": [
      "代數",
      "含括號的一元一次方程式",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-basic-solving"
    ],
    "authoringIntent": "同時展開兩個括號。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3622dcf0f85781e37da6ae0326ab3dd569a3b6f8c9686ace5e35dfbdd9aa64c2",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s005-v007",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-parentheses",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解 5(x－1)－2(x＋4)＝3。",
    "choices": [
      "4",
      "16",
      "3/16",
      "16/3"
    ],
    "answerIndex": 3,
    "explanation": "展開得3x-13=3；兩邊加13得3x=16；除3得16/3。所以答案是「16/3」。",
    "steps": [
      "展開得3x-13=3",
      "兩邊加13得3x=16",
      "除3得16/3"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": false,
        "reason": "把16除以4。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "忘記最後除3。"
      },
      {
        "choice": "3/16",
        "truth": false,
        "reason": "將分子分母顛倒。"
      },
      {
        "choice": "16/3",
        "truth": true,
        "reason": "展開得5x-5-2x-8=3，3x-13=3，3x=16，所以x=16/3。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "看到分數結果就強行取整。",
    "concept": "一元一次方程式的解不一定是整數。",
    "tags": [
      "代數",
      "含括號的一元一次方程式",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-basic-solving"
    ],
    "authoringIntent": "接受分數解並精確表示。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6aee3e90432c4d07c7ba2ce3aa60306900c5ff640091e069dc7443614b8c939d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s005-v008",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-parentheses",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解 3[2－(x－1)]＝12。",
    "choices": [
      "-1",
      "1",
      "3",
      "5"
    ],
    "answerIndex": 0,
    "explanation": "先化簡內層為3-x；除3得3-x=4；移項得x=-1。所以答案是「-1」。",
    "steps": [
      "先化簡內層為3-x",
      "除3得3-x=4",
      "移項得x=-1"
    ],
    "optionAnalysis": [
      {
        "choice": "-1",
        "truth": true,
        "reason": "內括號2-(x-1)=3-x；3(3-x)=12，除3得3-x=4，所以x=-1。 因此此選項符合題目。"
      },
      {
        "choice": "1",
        "truth": false,
        "reason": "漏掉負號。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "把2-(x-1)算成1-x。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "把12÷3後直接當x。"
      }
    ],
    "commonMistake": "把2-(x-1)錯寫成2-x-1。",
    "concept": "內層減號須同時改變x與-1。",
    "tags": [
      "代數",
      "含括號的一元一次方程式",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-basic-solving"
    ],
    "authoringIntent": "逐層處理巢狀括號。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "28bc3a160cb25e1b311a00017668b9eec5da5688fd508841598a437a4ef2ebf7",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s005-v009",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-parentheses",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解 0.5(4x－6)＝x＋5。",
    "choices": [
      "2",
      "5",
      "8",
      "16"
    ],
    "answerIndex": 2,
    "explanation": "分配0.5得2x-3；整理2x-3=x+5；得到x=8。所以答案是「8」。",
    "steps": [
      "分配0.5得2x-3",
      "整理2x-3=x+5",
      "得到x=8"
    ],
    "optionAnalysis": [
      {
        "choice": "2",
        "truth": false,
        "reason": "只算4×0.5。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "把常數5當解。"
      },
      {
        "choice": "8",
        "truth": true,
        "reason": "左邊化成2x-3，故2x-3=x+5；兩邊減x再加3，得x=8。 因此此選項符合題目。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "小數係數消除後把答案加倍。"
      }
    ],
    "commonMistake": "把0.5只乘第一項。",
    "concept": "0.5等於1/2，可精確分配。",
    "tags": [
      "代數",
      "含括號的一元一次方程式",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-basic-solving"
    ],
    "authoringIntent": "含小數括號方程式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ba82fffa687286a17a85fc06aa2151276a40a39daa55bcf1d32d3df5e016a958",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s005-v010",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-parentheses",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長方形長為 x＋3 公分、寬為 x 公分，周長為 34 公分。寬是多少？",
    "choices": [
      "5",
      "8",
      "14",
      "7"
    ],
    "answerIndex": 3,
    "explanation": "依周長列2(2x+3)=34；除2並整理；解得寬7公分。所以答案是「7」。",
    "steps": [
      "依周長列2(2x+3)=34",
      "除2並整理",
      "解得寬7公分"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "把34÷2後再減7。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "把長當成答案。"
      },
      {
        "choice": "14",
        "truth": false,
        "reason": "只求半周長後未解x。"
      },
      {
        "choice": "7",
        "truth": true,
        "reason": "2[(x+3)+x]=34，除2得2x+3=17，2x=14，所以x=7。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "把半周長當成寬。",
    "concept": "長與寬都含未知數。",
    "tags": [
      "代數",
      "含括號的一元一次方程式",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-basic-solving"
    ],
    "authoringIntent": "以周長公式建立含括號方程式。",
    "literacyContextNecessity": "長寬關係與周長公式決定2[(x+3)+x]=34，幾何情境是方程式括號結構的必要來源。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3ba3b34f42ef2511fe2f0b6a0c8d9a267d33d11886516eb4fa4066a0151915c4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s005-v011",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-parentheses",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三個相同禮盒，每盒有 x 顆糖，再各加 4 顆裝飾糖，共有 45 顆。每盒原有多少顆？",
    "choices": [
      "11",
      "9",
      "13",
      "15"
    ],
    "answerIndex": 0,
    "explanation": "每盒總數為x+4；三盒列3(x+4)=45；解得x=11。所以答案是「11」。",
    "steps": [
      "每盒總數為x+4",
      "三盒列3(x+4)=45",
      "解得x=11"
    ],
    "optionAnalysis": [
      {
        "choice": "11",
        "truth": true,
        "reason": "3(x+4)=45，除3得x+4=15，所以x=11。 因此此選項符合題目。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "把45÷5。"
      },
      {
        "choice": "13",
        "truth": false,
        "reason": "將4只加一次。"
      },
      {
        "choice": "15",
        "truth": false,
        "reason": "把三盒數量當每盒數量。"
      }
    ],
    "commonMistake": "把每盒加4誤成總共加4。",
    "concept": "每一盒都增加4，所以4在括號內。",
    "tags": [
      "代數",
      "含括號的一元一次方程式",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-basic-solving"
    ],
    "authoringIntent": "由重複群組建立括號方程式。",
    "literacyContextNecessity": "三盒都各加4顆的語意決定3(x+4)，若刪除「各」就會變成3x+4並改變答案。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3ce687c771d0a3fd2fc3f90425bcf9ed75b3a25797f84d689af47e9be3eef24d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s005-v012",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-parentheses",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "禮堂有 6 排座位，每排原有 x 張；整修後每排拆掉 2 張，另增設 12 張活動椅，總座位 72 張。x 為多少？",
    "choices": [
      "8",
      "12",
      "10",
      "14"
    ],
    "answerIndex": 1,
    "explanation": "列6(x-2)+12=72；扣除活動椅並除6；加2得x=12。所以答案是「12」。",
    "steps": [
      "列6(x-2)+12=72",
      "扣除活動椅並除6",
      "加2得x=12"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": false,
        "reason": "只把72除6。"
      },
      {
        "choice": "12",
        "truth": true,
        "reason": "6(x-2)+12=72；減12後6(x-2)=60，除6得x-2=10，所以x=12。 因此此選項符合題目。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "把拆掉2張只算一次。"
      },
      {
        "choice": "14",
        "truth": false,
        "reason": "把新增12平均後忘記加回2。"
      }
    ],
    "commonMistake": "把每排減2誤成全場只減2。",
    "concept": "每排拆除要放入乘6的括號內。",
    "tags": [
      "代數",
      "含括號的一元一次方程式",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-basic-solving"
    ],
    "authoringIntent": "整合每排變化與額外座位。",
    "literacyContextNecessity": "排數、每排拆除量與額外活動椅分屬不同層級，情境決定6(x-2)+12的結構。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "845e173b330a4f2a61f71878bebbed743c64dbe2e9e2c6ff18e9e1dc125868d7",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u03-s005-cr001",
    "unitId": "u03",
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-parentheses",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "解 3(2x－5)－2(x＋4)＝9，寫出展開與合併過程。",
    "requiredWork": [
      "兩個括號都完整分配。",
      "合併同類項。",
      "求解並代回。"
    ],
    "fullCreditSolution": [
      "展開得6x-15-2x-8=9。",
      "4x-23=9，4x=32。",
      "x=8；代回得9。"
    ],
    "alternativeSolutions": [
      "也可先將左式化簡成4x-23。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "展開、化簡、求解與驗算完整。"
      },
      {
        "score": 2,
        "criteria": "方法正確但一處符號或算術錯。"
      },
      {
        "score": 1,
        "criteria": "至少正確展開兩個括號。"
      },
      {
        "score": 0,
        "criteria": "分配律錯誤且無有效後續。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "-2(x+4)展成-2x+8。",
      "常數-15-8合併錯。"
    ],
    "independentReview": {
      "derivedResult": "x=8",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "d7103441eda2cd0b13bf35fac24177c0a7fcdff68a9461f4c0f8356a0dcc8cd7",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s005-cr002",
    "unitId": "u03",
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-parentheses",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某劇場有 5 排臨時座位，每排原有 x 張；每排增設 3 張後，再另外放置 10 張活動椅，共有 100 張。求每排原有座位數。",
    "requiredWork": [
      "辨認每排增加量在括號內。",
      "列5(x+3)+10=100。",
      "解並驗算。"
    ],
    "fullCreditSolution": [
      "5(x+3)+10=100。",
      "5(x+3)=90，x+3=18。",
      "x=15；5×18+10=100。"
    ],
    "alternativeSolutions": [
      "可先扣活動椅10張，再平均五排。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "方程式層級正確、解15並驗算。"
      },
      {
        "score": 2,
        "criteria": "列式正確但計算一處錯，或答案正確未說明每排層級。"
      },
      {
        "score": 1,
        "criteria": "能指出增設3張要乘5。"
      },
      {
        "score": 0,
        "criteria": "混淆每排與全場變化。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "列成5x+3+10。",
      "把活動椅10張也乘5。"
    ],
    "independentReview": {
      "derivedResult": "15張",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "da53c1ec77ab31d820bdb2b0fa52215ed51131518e9ae29cb9a89e1edf463df7",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const DRAWING_SPECS = [];
