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
    "含括號的一元一次方程式多了一層運算群組，但仍以等量公理求解。括號外係數作用於括號內每一項，不能只乘含未知數的第一項。",
    "若等式兩邊可先同除以括號外的共同係數，先除能減少項數；若不能，就依分配律展開。兩種方法只要每步等價，最後會得到相同解。",
    "括號前的負號等於乘以負一，負係數分配時每一項的符號都要重新判斷。遇到巢狀括號，先化簡最內層，再逐層向外處理。",
    "情境中的每一組增加或減少通常寫在括號內，再乘組數；整體額外增減則寫在括號外。列式後要用原情境的每組量與總量驗算。"
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
      "instruction": "標出每個括號代表的運算群組或每組情境量。",
      "check": "外係數的作用範圍已涵蓋括號內所有項。"
    },
    {
      "step": 2,
      "instruction": "判斷先同除共同係數或先用分配律展開何者較簡潔。",
      "check": "所選操作會保持等式等價且不遺漏任何項。"
    },
    {
      "step": 3,
      "instruction": "由內向外處理括號，逐項記錄乘積與正負號。",
      "check": "負數乘負數的項已改為正，常數也有被分配。"
    },
    {
      "step": 4,
      "instruction": "合併左右同類項，再依基本方程式步驟求出 x。",
      "check": "中間值沒有誤當答案，最後已消去未知數係數。"
    },
    {
      "step": 5,
      "instruction": "把解代回未展開的原式或每組情境進行驗算。",
      "check": "原方程式左右相等，組數與額外量的層級一致。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u03-s005-example-a",
      "prompt": "解方程式 5(x-2)=35。",
      "solutionSteps": [
        "兩邊同除以 5，得到 x-2=7。",
        "兩邊同加 2，得到 x=9。"
      ],
      "answer": "x=9。",
      "why": "先同除以括號外五可直接保留完整的 x 減二，再用加二消去常數。代回五乘七等於三十五，步驟比先展開更精簡。"
    },
    {
      "exampleId": "u03-s005-example-b",
      "prompt": "解方程式 7-2(x+1)=-5。",
      "solutionSteps": [
        "展開並合併，得到 5-2x=-5。",
        "兩邊減五再除以負二，得到 x=5。"
      ],
      "answer": "x=5。",
      "why": "負二要同時乘 x 與一，左邊因此成七減二 x 減二。整理後負二 x 等於負十，兩邊同除負二得到正五，代回也使兩側同為負五。"
    },
    {
      "exampleId": "u03-s005-example-c",
      "prompt": "解方程式 3[4-(x-2)]=15。",
      "solutionSteps": [
        "先化內層 4-(x-2)=6-x。",
        "兩邊除三得 6-x=5，所以 x=1。"
      ],
      "answer": "x=1。",
      "why": "內層減去 x 減二時，負二會因外層減號變成正二，故括號是六減 x。先處理最內層可避免兩個減號混淆。"
    },
    {
      "exampleId": "u03-s005-example-d",
      "prompt": "七盒文具每盒原有 x 枝，每盒再補兩枝後共有八十四枝。",
      "solutionSteps": [
        "依每盒都增加兩枝列 7(x+2)=84。",
        "兩邊除七得 x+2=12，再減二得 x=10。"
      ],
      "answer": "每盒原有十枝。",
      "why": "補充量發生在每一盒，因此每盒完成量是 x 加二，再乘七盒。求得十後，每盒十二枝，七盒共八十四枝，符合總量。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "括號外係數只乘未知數項。",
      "why": "忽略分配律作用於整個括號。",
      "correction": "逐項標示外係數乘到每一項。"
    },
    {
      "mistake": "把 -2(x-3) 展成 -2x-6。",
      "why": "負二乘負三的符號判斷錯誤。",
      "correction": "第二項應為正六。"
    },
    {
      "mistake": "把 x+3 直接合併成 4x。",
      "why": "未知數項與常數項不是同類項。",
      "correction": "保留括號或正確使用分配律。"
    },
    {
      "mistake": "巢狀括號從最外層開始亂拆。",
      "why": "內層減號尚未確定就套用外層運算。",
      "correction": "先化簡最內層，再逐層向外。"
    },
    {
      "mistake": "每盒增加兩枝寫成 7x+2。",
      "why": "把每組變化誤當成整體只發生一次。",
      "correction": "先寫每盒 x+2，再乘盒數七。"
    },
    {
      "mistake": "得到分數解就強行取整。",
      "why": "預設所有方程式解都必須是整數。",
      "correction": "保留精確分數並代回原式驗證。"
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
  "contentSha256": "0a864be225e5035fc8a36107e92ccc670bf1a8fe0a059c6a7b375699cd58988a",
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
    "explanation": "方程式兩邊先同除以三，可直接消去括號外的係數，得到 x+2=7。再在兩邊同減二，求得 x=5；代回 3(5+2)=21，確認括號整體處理正確。先除再減也能縮短計算。",
    "steps": [
      "等式兩邊同除以 3，得到 x+2=7。",
      "兩邊同減 2，求得 x=5。",
      "代回驗算 3(5+2)=21。"
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
    "commonMistake": "沒有先消去括號外的三，直接把二移到二十一的另一邊。",
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
    "contentSha256": "6948ea344a7b3db32e87979ba6e3147ef26b6154a00186a5f954d5b38ec3b12a",
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
    "explanation": "兩邊同除以二，先把 2(x-4)=10 化成 x-4=5。接著兩邊同加四，得到 x=9；代回 2(9-4)=10，證明負四的逆運算應為加四。先消外係數可避免展開漏項。",
    "steps": [
      "等式兩邊同除以 2，得到 x-4=5。",
      "兩邊同加 4，求得 x=9。",
      "代回驗算 2(9-4)=10。"
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
    "commonMistake": "把括號內的減四移到右邊後仍然減四，沒有改用逆運算加四。",
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
    "contentSha256": "7f449e817dd67a41300b51988ca2f838f68c41304c73afc478458c6ada62d8f5",
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
    "explanation": "先將 -2 分配到 x+1，得 -2x-2，因此左邊化為 5-2x-2=3-2x。由 3-2x=-9，兩邊減三得 -2x=-12，再除以 -2，求得 x=6。分配與合併完成後，代回六可核對左右都是負九，解值正確。",
    "steps": [
      "展開 -2(x+1)，把左邊化簡為 3-2x。",
      "兩邊同減 3，得到 -2x=-12。",
      "兩邊同除以 -2，求得 x=6 並代回。"
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
    "commonMistake": "括號外負二只乘 x，沒有同時乘括號內的正一。",
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
    "contentSha256": "65caee6f4ff69113b931d631f44bd7bb7e920e436f8ce17962683ae03108af0a",
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
    "explanation": "可先把方程式兩邊同除以四，得到 2x-3=5，再同加三得 2x=8，最後同除以二，x=4。代回 4(2×4-3)=20，避免展開時漏乘常數。先除共同因數可減少計算。",
    "steps": [
      "兩邊同除以 4，得到 2x-3=5。",
      "兩邊同加 3，再同除以 2，求得 x=4。",
      "代回計算 4(8-3)=20。"
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
    "commonMistake": "使用分配律時只算 4×2x，卻漏掉四也必須乘負三。",
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
    "contentSha256": "8eb356fd4a7aceaca67e241507e1abf2d5ca0000b3dc7f8fbeb0a93b540e1016",
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
    "explanation": "展開 3(x-2)+5 得 3x-6+5=3x-1，所以方程式為 3x-1=2x+8。兩邊同減 2x 再同加一，得到 x=9；代回左右都為二十六。先展開括號再集中未知數項，步驟較不易漏項。",
    "steps": [
      "展開並合併左邊，得到 3x-1=2x+8。",
      "兩邊同減 2x，得到 x-1=8。",
      "兩邊同加 1，求得 x=9 並驗算。"
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
    "commonMistake": "展開後沒有先合併負六與正五，導致左邊常數項判斷錯誤。",
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
    "contentSha256": "bf580c4a626b32d046581a4eaf71b7978ac795fae993a0dc88365a9fa9abbe03",
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
    "explanation": "展開第一項得 6x+2；減去 4(x-2) 要寫成 -4x+8。合併後為 2x+10=18，再減十得 2x=8，故 x=4；第二括號的負負乘積是正八。代回四可得等式兩邊都是十八。",
    "steps": [
      "分別展開為 6x+2 與 -4x+8。",
      "合併同類項，得到 2x+10=18。",
      "兩邊減十再除二，求得 x=4。"
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
    "commonMistake": "把 -4(x-2) 展成 -4x-8，忽略負四乘負二應為正八。",
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
    "contentSha256": "6f831d40e7563fc70d00f89a9eb60d1297ea7f97920593983db93b2610ea18b7",
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
    "explanation": "展開可得 5x-5-2x-8=3，合併成 3x-13=3。兩邊同加十三得到 3x=16，再同除以三，x=16/3；分數解仍可代回驗證，不應強行取整。精確分數答案不需改成小數。",
    "steps": [
      "展開並合併，得到 3x-13=3。",
      "兩邊同加 13，得到 3x=16。",
      "兩邊同除以 3，求得 x=16/3。"
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
    "commonMistake": "看到 x 的值不是整數就任意捨去分數，沒有用原方程式驗證。",
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
    "contentSha256": "7e5992204e58224d414226cdca7bad904e6eccc10ca113e8c5ec068df5106498",
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
    "explanation": "先化簡最內層：2-(x-1)=2-x+1=3-x，所以原式為 3(3-x)=12。兩邊同除以三得 3-x=4，再減三得 -x=1，故 x=-1。代回負一，括號內成四，三倍正好是十二，結果確實唯一。",
    "steps": [
      "由內向外化簡 2-(x-1)=3-x。",
      "兩邊同除以 3，得到 3-x=4。",
      "整理得 -x=1，所以 x=-1。"
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
    "commonMistake": "把 2-(x-1) 寫成 2-x-1，沒有讓外層減號改變負一的符號。",
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
    "contentSha256": "150c76364c36b402bdf4aadbb88f862ea1b7690c25e9332c42106193d31df60b",
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
    "explanation": "把 0.5 分配到 4x-6，左邊化成 2x-3，因此方程式是 2x-3=x+5。兩邊同減 x 再同加三，得到 x=8；代回兩邊都等於十三。完整分配是得到正確常數的關鍵。",
    "steps": [
      "展開 0.5(4x-6)，得到 2x-3。",
      "兩邊同減 x，得到 x-3=5。",
      "兩邊同加 3，求得 x=8 並驗算。"
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
    "commonMistake": "零點五只乘 4x 而漏乘負六，造成左邊常數項消失。",
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
    "contentSha256": "602d586d0a93dd9ddb49a1324bb30723d56f7c6fffb73541ea16951724d67c12",
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
    "explanation": "長為 x+3、寬為 x，周長關係是 2[(x+3)+x]=34。化簡得 4x+6=34，再解得 4x=28、x=7 公分；題目問寬，正好就是 x。代回得長十公分、寬七公分，周長確為三十四公分。",
    "steps": [
      "依周長列 2[(x+3)+x]=34。",
      "展開化簡為 4x+6=34。",
      "兩邊減六再除四，求得寬 7 公分。"
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
    "commonMistake": "把長加寬所得十七當成寬，混淆半周長與單一邊長。",
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
    "contentSha256": "16a6ff472afd9fd6c8af53855ff8618f0e9e8c6113e31abd26c7e39bf27868fd",
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
    "explanation": "每盒原有 x 顆且各加四顆，所以每盒完成後有 x+4 顆，三盒共 3(x+4)=45。兩邊同除以三得 x+4=15，再減四，求得 x=11 顆。代回十一可重建三盒總數。",
    "steps": [
      "依每盒都加四顆列 3(x+4)=45。",
      "兩邊同除以 3，得到 x+4=15。",
      "兩邊同減 4，求得每盒原有 11 顆。"
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
    "commonMistake": "把每一盒都增加四顆誤寫成三盒合計只增加四顆。",
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
    "contentSha256": "917501c8076ef3a348234187140700db96d1782e8276b889c29c78aaf1aaf007",
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
    "explanation": "每排拆掉兩張後為 x-2 張，六排共有 6(x-2) 張，再加十二張活動椅，所以列 6(x-2)+12=72。解得 6(x-2)=60、x-2=10，因此 x=12。活動椅只加入一次，不能與排數相乘，層級正確。",
    "steps": [
      "依每排變化列 6(x-2)+12=72。",
      "兩邊減 12 再除以 6，得到 x-2=10。",
      "兩邊同加 2，求得 x=12 張。"
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
    "commonMistake": "把每排拆兩張當成全場只拆兩張，沒有讓六排都乘上 x-2。",
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
    "contentSha256": "ebce405bf5fa982a824caec12709415f8001fd3a90e4fc2e4031d7e2025ba6d7",
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
      "展開兩個括號：3(2x-5)-2(x+4)=6x-15-2x-8，所以方程式為 6x-15-2x-8=9。",
      "合併同類項得到 4x-23=9；兩邊同加二十三得 4x=32，再同除以四，x=8。",
      "代回原式，3(16-5)-2(8+4)=33-24=9，與右邊相等，驗證括號展開與常數合併都正確。"
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
      "把 -2(x+4) 展開成 -2x+8，誤判負二乘正四的符號。",
      "合併常數負十五與負八時算成負七，沒有連同符號運算。",
      "只把括號外係數乘含 x 的項，漏乘括號中的常數項。"
    ],
    "independentReview": {
      "derivedResult": "x=8",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "7c84f0830417e840f61e38becaa0503b8d7e7e7fe0cb1abe9baadf0fe3cb00c3",
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
      "每排原有 x 張、各增三張後為 x+3 張，五排加十張活動椅的總量可列 5(x+3)+10=100。",
      "兩邊同減十得 5(x+3)=90，再同除以五得 x+3=18，因此 x=15。",
      "驗算每排完成後十八張，五排共九十張，再加十張活動椅正好一百張。"
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
      "把每排增加三張寫成 5x+3，只讓全劇場增加一次三張。",
      "把另外十張活動椅也放進每排括號，錯誤地將十乘以五。",
      "求得 x+3=18 就回答十八張，混淆增設後與原有每排座位數。"
    ],
    "independentReview": {
      "derivedResult": "15張",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "a7a2bfc4cc7655e9e624268d6c79f364f18ad773bf7a4e3ab21a0661dce1c4f9",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const DRAWING_SPECS = [];
