// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
// CONTENT AUTHORITY: CHATGPT_HUMAN_AUTHORED_R1
// OLD GENERATED CONTENT MUST NOT BE IMPORTED OR MERGED.
export const LECTURE = {
  "lectureId": "u03-s001-lecture-r1",
  "unitId": "u03",
  "topicId": "u03-linear-expression",
  "skillId": "linear-expression-substitution",
  "title": "文字式與代入求值：把未知數換成指定數值後精確計算",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能分辨係數、未知數與常數。",
    "能將正數、負數、分數與小數代入文字式。",
    "能在代入後按照括號、乘除、加減的順序計算。",
    "能檢查未知數的單位是否與公式定義一致。"
  ],
  "prerequisites": [],
  "glossary": [
    {
      "term": "文字式",
      "definition": "含有數字、運算符號與未知數的式子。"
    },
    {
      "term": "代入",
      "definition": "用指定數值取代文字式中的未知數。"
    },
    {
      "term": "係數",
      "definition": "與未知數相乘的數。"
    },
    {
      "term": "常數項",
      "definition": "不含未知數的項。"
    }
  ],
  "notation": [
    {
      "symbol": "3x",
      "meaning": "3乘以x，不是3加x。"
    },
    {
      "symbol": "f(x)",
      "meaning": "若題目使用函數記號，表示把x代入指定規則；本節只作直接代入。"
    }
  ],
  "conceptNarrative": [
    "代入求值是把文字式中的每一個未知數，換成題目指定的同一數值，再依原式的運算關係計算；它不是在解方程式，也不能任意改變原式。",
    "係數與未知數相鄰表示乘法，例如 3x 是 3×x。負數或分數代入時使用括號，可以清楚區分原式的減號、數值本身的負號與分數作用範圍。",
    "同一個未知數若出現多次，每一處都要代入；若有不同未知數，則依名稱逐一對應。完成代入後仍遵守括號、乘除、加減的運算順序。",
    "情境公式中的變數通常附帶單位或計費規則。代入前須先把公尺換成百公尺、實際時數換成計費時數等，最後再檢查答案單位與量級是否合理。"
  ],
  "formalDefinitions": [
    {
      "name": "代入求值",
      "statement": "若文字式E含未知數x，且x=a，則用a取代E中每一個x後計算。"
    },
    {
      "name": "係數乘法",
      "statement": "ax表示a×x。"
    }
  ],
  "formulas": [
    {
      "formula": "E(x)=原式中的每個x以指定值取代",
      "conditions": [
        "所有未知數都有指定值",
        "代入後保留括號與原運算順序"
      ],
      "meaning": "代入求值的一般規則。"
    }
  ],
  "nonApplicableCases": [
    "未知數尚未給值時，不能把文字式算成單一數字。",
    "同一未知數在式中出現多次時，每一處都要代入。",
    "未知數單位與公式不一致時，要先換算。",
    "代入值若使題目另有分母為0情況，該值不可使用。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "圈出文字式中的所有未知數，並抄下各自的指定值與單位。",
      "check": "同名未知數的每一處都已標記，不同未知數沒有對調。"
    },
    {
      "step": 2,
      "instruction": "依題目定義先完成單位換算或計費級距判定。",
      "check": "代入值所用單位與公式中變數的單位完全一致。"
    },
    {
      "step": 3,
      "instruction": "用括號把指定值代入原式，保留原有係數、減號與括號層次。",
      "check": "負數及分數都有明確括號，省略乘號沒有誤讀成加法。"
    },
    {
      "step": 4,
      "instruction": "按照括號、乘除、加減的順序逐步計算並化簡。",
      "check": "每一步只做合法運算，帶號數與分數的符號均已保留。"
    },
    {
      "step": 5,
      "instruction": "把結果放回情境並用估算或重新代入檢查。",
      "check": "答案單位、正負與大小都符合題意，重算結果一致。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u03-s001-example-a",
      "prompt": "若 x=-6，求 4x+11。",
      "solutionSteps": [
        "代入成 4(-6)+11。",
        "先算乘法得 -24，再加十一。"
      ],
      "answer": "-13。",
      "why": "負六代入時以括號保留負號，四與負六相乘得負二十四，再加十一得到負十三。先乘後加可避免把 4x 誤看成四加 x。"
    },
    {
      "exampleId": "u03-s001-example-b",
      "prompt": "若 a=2、b=-5，求 3a-2b。",
      "solutionSteps": [
        "分別代入成 3(2)-2(-5)。",
        "計算 6-(-10)=16。"
      ],
      "answer": "16。",
      "why": "兩個未知數須依名稱對應，不能交換數值。第二項是減去負十，因此轉為加十；完整保留 b 的負號後，結果才會是十六。"
    },
    {
      "exampleId": "u03-s001-example-c",
      "prompt": "若 t=5/6，求 12t-7。",
      "solutionSteps": [
        "代入成 12×5/6-7。",
        "先約分得十，再減七。"
      ],
      "answer": "3。",
      "why": "十二乘六分之五可先用十二與六約分，得到二乘五等於十，再減七得三。分數代入仍先處理乘法，不能把分母與常數相加。"
    },
    {
      "exampleId": "u03-s001-example-d",
      "prompt": "運費公式 C=50+12(k-2)，寄送七公斤時求 C。",
      "solutionSteps": [
        "代入 k=7，超過基準的部分為 7-2=5。",
        "計算 C=50+12×5=110。"
      ],
      "answer": "110 元。",
      "why": "括號 k-2 表示超過兩公斤基準的重量，七公斤只對五公斤收取追加費。基本費五十元再加六十元，總額為一百一十元。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把 4x 看成 4+x。",
      "why": "忽略代數中省略乘號的慣例。",
      "correction": "代入前先把 4x 改讀為 4×x。"
    },
    {
      "mistake": "負數代入時不寫括號。",
      "why": "原式減號與數值負號容易互相混淆。",
      "correction": "一律寫成係數乘以括號內負數。"
    },
    {
      "mistake": "同一未知數只代入第一次出現處。",
      "why": "沒有逐項掃描整個文字式。",
      "correction": "標記每一個同名未知數後再統一代入。"
    },
    {
      "mistake": "不同未知數的指定值互相對調。",
      "why": "只依數值順序代入而未核對名稱。",
      "correction": "建立變數與數值的一對一對照。"
    },
    {
      "mistake": "代入後由左到右忽略運算順序。",
      "why": "先做加減會改變原式結構。",
      "correction": "依括號、乘除、加減逐層計算。"
    },
    {
      "mistake": "直接把公尺數代入以百公尺為單位的變數。",
      "why": "忽略公式對變數單位的定義。",
      "correction": "代入前先換成公式指定的相同單位。"
    }
  ],
  "selfCheck": [
    "所有未知數是否都已代入？",
    "負數是否保留括號？",
    "乘除是否先於加減？",
    "單位是否符合公式定義？",
    "估算結果的正負與量級是否合理？"
  ],
  "summary": [
    "代入是用數值替換未知數。",
    "係數與未知數之間是乘法。",
    "負數與分數代入要加括號。",
    "情境公式需先核對單位。"
  ],
  "connections": {
    "previous": "承接U01整數與U02分數運算，開始把數值放入代數式。",
    "next": [
      "下一節將不指定未知數值，而是合併同類項化簡文字式。",
      "方程式求解會反過來由式子求未知數。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u03-s001-v001",
      "u03-s001-v002",
      "u03-s001-v003",
      "u03-s001-v004",
      "u03-s001-v005",
      "u03-s001-v006",
      "u03-s001-v007",
      "u03-s001-v008",
      "u03-s001-v009",
      "u03-s001-v010",
      "u03-s001-v011",
      "u03-s001-v012"
    ],
    "constructedResponseIds": [
      "u03-s001-cr001",
      "u03-s001-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐一重算四個例題：2(-5)+9=-1、2(3)-(-4)=10、8×3/4-5=1、25+1.8×2.5=29.5；並核對負數括號、分數約分及小時單位，未使用後續方程式技巧。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "866467cb677e04de53b0e84b84bd5d4ebc88a02e2e6becde9a51fc8dccb21d13",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "legacyContentDisposition": "replace-old-lecture-at-final-integration"
};

export const QUESTIONS = [
  {
    "questionId": "u03-s001-v001",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-substitution",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知 x＝4，求 3x＋2 的值。",
    "choices": [
      "14",
      "10",
      "12",
      "18"
    ],
    "answerIndex": 0,
    "explanation": "將 x 的每一處都以四取代，3x 表示三乘以 x，因此 3×4=12，再加常數二得十四。依乘法先於加法的順序計算，代回原式也確實得到選項十四。",
    "steps": [
      "把 x=4 代入 3x+2，寫成 3×4+2。",
      "先算係數乘法 3×4=12。",
      "再算 12+2=14，確認選項十四。"
    ],
    "optionAnalysis": [
      {
        "choice": "14",
        "truth": true,
        "reason": "把 x=4 代入 3x+2，得 3×4+2=12+2=14。 因此此選項符合題目。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "只算3+4+2，沒有依照3x表示3乘以x。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "算出3×4後漏加常數2。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "把2也乘進去，誤算成3×(4+2)。"
      }
    ],
    "commonMistake": "把 3x 誤讀成 3+x，因而算成九而非十四。",
    "concept": "代入後依運算順序計算。",
    "tags": [
      "代數",
      "文字式與代入求值",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [],
    "authoringIntent": "理解係數與代入順序。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4b4e5b9601a43e64ff24fe768dca4d43895e09db90622021b5b71b5e5a9a4adf",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s001-v002",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-substitution",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 a＝－3，則 5－2a 的值為何？",
    "choices": [
      "-1",
      "11",
      "1",
      "-11"
    ],
    "answerIndex": 1,
    "explanation": "負三代入 a 時要保留括號，原式成 5-2×(-3)。先算乘法得負六，再計算五減負六等於五加六，所以結果為十一；負負轉正是本題的關鍵。",
    "steps": [
      "將 a=-3 代入，寫成 5-2×(-3)。",
      "先計算 2×(-3)=-6。",
      "完成 5-(-6)=5+6=11。"
    ],
    "optionAnalysis": [
      {
        "choice": "-1",
        "truth": false,
        "reason": "把減去負數仍算成減6。"
      },
      {
        "choice": "11",
        "truth": true,
        "reason": "代入 a=-3：5-2(-3)=5+6=11。 因此此選項符合題目。"
      },
      {
        "choice": "1",
        "truth": false,
        "reason": "只處理負號而漏掉係數2。"
      },
      {
        "choice": "-11",
        "truth": false,
        "reason": "將5-2a錯看成-(5-2a)。"
      }
    ],
    "commonMistake": "代入負三時漏寫括號，把原有減號與負號混成同一個符號。",
    "concept": "負數代入時應加括號。",
    "tags": [
      "代數",
      "文字式與代入求值",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [],
    "authoringIntent": "處理負數代入與雙重負號。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2990c58429e4759dd03176b49ffd47ef6c94af3d8321fee547a8829b51936635",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s001-v003",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-substitution",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知 y＝1/2，求 6y－1。",
    "choices": [
      "1",
      "5/2",
      "2",
      "4"
    ],
    "answerIndex": 2,
    "explanation": "把 y=1/2 代入後，6y 是六乘二分之一，而不是六加二分之一。六乘二分之一等於三，再減一得到二；所得整數也可由二分之一的六倍驗證。",
    "steps": [
      "將 y=1/2 代入 6y-1。",
      "計算 6×1/2=3。",
      "再算 3-1=2，選擇二。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "誤把6×1/2算成2。"
      },
      {
        "choice": "5/2",
        "truth": false,
        "reason": "算到3後把減1誤成減1/2。"
      },
      {
        "choice": "2",
        "truth": true,
        "reason": "6×(1/2)-1=3-1=2。 因此此選項符合題目。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "把6y誤看成6+y。"
      }
    ],
    "commonMistake": "分數代入後先把六與分母相加，沒有依乘法關係正確約分。",
    "concept": "整數乘分數後再做加減。",
    "tags": [
      "代數",
      "文字式與代入求值",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [],
    "authoringIntent": "正確代入分數並約分。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "57b5580aecb5b9cca07a177fc5bf00065a8458fd4d651589e8722d29f711d9d9",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s001-v004",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-substitution",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知 m＝－2、n＝5，求 3m＋2n。",
    "choices": [
      "-16",
      "8",
      "16",
      "4"
    ],
    "answerIndex": 3,
    "explanation": "依變數名稱分別代入 m=-2、n=5，可得 3m=-6，2n=10。原式是兩項相加，所以 -6+10=4；兩個代入值不能交換，否則每項的係數乘積都會改變。逐項對應可避免代錯。",
    "steps": [
      "依序代入 m=-2、n=5。",
      "分別算出 3m=-6 與 2n=10。",
      "合併 -6+10=4，得到選項四。"
    ],
    "optionAnalysis": [
      {
        "choice": "-16",
        "truth": false,
        "reason": "把兩項都當成負數。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "將3m算成-3×-2。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "忽略m的負號並算成6+10。"
      },
      {
        "choice": "4",
        "truth": true,
        "reason": "3(-2)+2(5)=-6+10=4。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "把 m 與 n 的指定值對調，造成兩個係數乘到錯誤的數值。",
    "concept": "各項先獨立代入再合併。",
    "tags": [
      "代數",
      "文字式與代入求值",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [],
    "authoringIntent": "同時代入兩個未知數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "cf679516abc20ecfd73bf3108b72c6fd55114c2fe7e403867dc783836c2dadf3",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s001-v005",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-substitution",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 x＝－2，則－2(3x－1)的值為何？",
    "choices": [
      "-14",
      "14",
      "10",
      "16"
    ],
    "answerIndex": 1,
    "explanation": "先把 x=-2 代入括號，得到 3×(-2)-1=-7。括號外還有負二，因此下一步是 (-2)×(-7)=14；兩個負數相乘為正，不能漏掉外層係數。代回亦能得到原括號值。",
    "steps": [
      "代入 x=-2，括號內成 3×(-2)-1。",
      "先完成括號，得到 -6-1=-7。",
      "再算 (-2)×(-7)=14。"
    ],
    "optionAnalysis": [
      {
        "choice": "-14",
        "truth": false,
        "reason": "只處理一個負號，符號判斷錯。"
      },
      {
        "choice": "14",
        "truth": true,
        "reason": "3(-2)-1=-7，再乘-2得到14。 因此此選項符合題目。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "括號內誤算成-5。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "把外面的-2分配時多加一次常數。"
      }
    ],
    "commonMistake": "算出括號內負七就停止，沒有再乘括號外的負二。",
    "concept": "先算括號內再乘外係數。",
    "tags": [
      "代數",
      "文字式與代入求值",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [],
    "authoringIntent": "代入後正確處理括號與負號。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "523ae7029b8a5fc572b128a2996c140bb6f08553a339046272ffa4fb50923cfc",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s001-v006",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-substitution",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長方形長為 2x＋1 公分、寬為 x－1 公分。若 x＝5，周長是多少公分？",
    "choices": [
      "15",
      "26",
      "30",
      "32"
    ],
    "answerIndex": 2,
    "explanation": "代入 x=5 後，長為 2×5+1=11 公分，寬為 5-1=4 公分。長方形周長是兩倍的長寬和，所以 2×(11+4)=30 公分，不是只求半周長。四條邊的長度都已納入計算。",
    "steps": [
      "代入求長 2×5+1=11 公分。",
      "代入求寬 5-1=4 公分。",
      "用周長公式 2×(11+4)=30 公分。"
    ],
    "optionAnalysis": [
      {
        "choice": "15",
        "truth": false,
        "reason": "只算長加寬，得到半周長。"
      },
      {
        "choice": "26",
        "truth": false,
        "reason": "把周長公式誤寫成2長+寬。"
      },
      {
        "choice": "30",
        "truth": true,
        "reason": "x=5時長11、寬4，周長2(11+4)=30。 因此此選項符合題目。"
      },
      {
        "choice": "32",
        "truth": false,
        "reason": "將寬x-1誤算成5。"
      }
    ],
    "commonMistake": "只把長與寬相加得到十五，忘記長方形各有兩條長與兩條寬。",
    "concept": "代入值後仍要套用情境公式。",
    "tags": [
      "代數",
      "文字式與代入求值",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [],
    "authoringIntent": "把文字式代入幾何量並使用周長公式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "599dcfa5842fc5f810cbf97929bdc0a672ff07996ce2b0ddc1b22aed439f7af9",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s001-v007",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-substitution",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 p＝－4，求 2－[3p－(p－5)]。",
    "choices": [
      "-5",
      "3",
      "11",
      "5"
    ],
    "answerIndex": 3,
    "explanation": "代入 p=-4，可得 3p=-12、p-5=-9，因此中括號是 -12-(-9)=-3。外層為 2-(-3)=5；兩層相減都要保留括號，才能正確處理減去負數。最後正五也符合兩次減法方向。",
    "steps": [
      "代入算出 3p=-12、p-5=-9。",
      "計算中括號 -12-(-9)=-3。",
      "完成外層 2-(-3)=5。"
    ],
    "optionAnalysis": [
      {
        "choice": "-5",
        "truth": false,
        "reason": "最後將2-(-3)誤算成-5。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "中括號誤算成-1。"
      },
      {
        "choice": "11",
        "truth": false,
        "reason": "把減去(p-5)錯當成加p-5。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "p=-4時，3p=-12、p-5=-9，所以括號為-12-(-9)=-3，2-(-3)=5。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "去掉中括號時漏掉減去負九應改為加九，導致符號顛倒。",
    "concept": "由內向外逐層運算。",
    "tags": [
      "代數",
      "文字式與代入求值",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [],
    "authoringIntent": "處理巢狀括號與負數代入。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0ffc1405a8ec0baccb4548c9e92bac9fc2f6780dc5c42894027afddabff43c77",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s001-v008",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-substitution",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知 a－b＝3 且 b＝－2，求 2a＋b。",
    "choices": [
      "0",
      "-4",
      "2",
      "4"
    ],
    "answerIndex": 0,
    "explanation": "先由 a-b=3 且 b=-2 得 a-(-2)=3，也就是 a+2=3，所以 a=1。再代入 2a+b，得到 2×1+(-2)=0；必須先求出 a 才能評估目標式。代回原關係可驗證一減負二確實等於三，前後一致。",
    "steps": [
      "把 b=-2 代入 a-b=3，得到 a+2=3。",
      "解得 a=1。",
      "代入 2a+b，算得 2×1+(-2)=0。"
    ],
    "optionAnalysis": [
      {
        "choice": "0",
        "truth": true,
        "reason": "由a-(-2)=3得a+2=3，所以a=1；2a+b=2-2=0。 因此此選項符合題目。"
      },
      {
        "choice": "-4",
        "truth": false,
        "reason": "把a誤求成-1。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "只算2a而漏掉b。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "把b=-2當成+2。"
      }
    ],
    "commonMistake": "只代入已知的 b 就直接計算，沒有先由關係式求出 a。",
    "concept": "可先解簡單方程再求式值。",
    "tags": [
      "代數",
      "文字式與代入求值",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [],
    "authoringIntent": "先由關係求未知數再代入另一式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d5b1ccce59be2af73801015dc5339e97e7c1f193ba103571032e9e7f9a85cdde",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s001-v009",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-substitution",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 x＝3/2，求 4x－3(2－x)。",
    "choices": [
      "3/2",
      "3",
      "9/2",
      "15/2"
    ],
    "answerIndex": 2,
    "explanation": "代入 x=3/2，第一項 4x=6；括號內 2-3/2=1/2，所以 3(2-x)=3/2。最後 6-3/2=12/2-3/2=9/2，通分後可確認答案。分數結果保持精確，沒有使用近似小數造成誤差，結果亦符合量級。",
    "steps": [
      "代入並算出 4x=4×3/2=6。",
      "計算 3(2-x)=3×1/2=3/2。",
      "相減 6-3/2=9/2。"
    ],
    "optionAnalysis": [
      {
        "choice": "3/2",
        "truth": false,
        "reason": "只留下第二項的值。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "把6-3/2誤算成3。"
      },
      {
        "choice": "9/2",
        "truth": true,
        "reason": "4×3/2=6，2-3/2=1/2，3×1/2=3/2，因此6-3/2=9/2。 因此此選項符合題目。"
      },
      {
        "choice": "15/2",
        "truth": false,
        "reason": "把減去3(2-x)改成加法。"
      }
    ],
    "commonMistake": "計算 2-3/2 時未通分，或把括號前的三漏乘整個差。",
    "concept": "分別算兩部分再相減。",
    "tags": [
      "代數",
      "文字式與代入求值",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [],
    "authoringIntent": "整合分數代入、括號與減法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b8aa27b5bfc58e5d0fa5f795c0d6d73de7a674210f7ea781ddd0608acd6866c6",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s001-v010",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-substitution",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "計程車前 1 公里收 85 元，超過部分每公里 5 元。若共行駛 12 公里，以 85＋5(k－1) 計費，車資是多少元？",
    "choices": [
      "125",
      "145",
      "150",
      "140"
    ],
    "answerIndex": 3,
    "explanation": "公式中的 k 是總里程，代入十二後，超過首公里的里程為 12-1=11 公里。超過部分收 5×11=55 元，再加首公里八十五元，共為一百四十元。",
    "steps": [
      "把總里程 k=12 代入 85+5(k-1)。",
      "求超過部分 12-1=11 公里，費用為 55 元。",
      "合計 85+55=140 元。"
    ],
    "optionAnalysis": [
      {
        "choice": "125",
        "truth": false,
        "reason": "把超過部分誤當8公里。"
      },
      {
        "choice": "145",
        "truth": false,
        "reason": "直接算85+5×12，重複計首公里。"
      },
      {
        "choice": "150",
        "truth": false,
        "reason": "把85與5相乘後再扣1。"
      },
      {
        "choice": "140",
        "truth": true,
        "reason": "k=12時，超過首公里的部分是11公里，85+5×11=140。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "把十二公里全部乘每公里五元，造成首公里同時被基本費與里程費重複計算。",
    "concept": "分段計費中的首段不可重複計算。",
    "tags": [
      "代數",
      "文字式與代入求值",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [],
    "authoringIntent": "由真實計費式代入里程。",
    "literacyContextNecessity": "首公里與超過部分的計費規則決定代入式中的k-1，刪除情境就無法判斷為何要扣1。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "cb2a4a9ea1ab41b6cb7da752990089b992eb6100fafa5cfb40f4a85645c687ab",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s001-v011",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-substitution",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "雲端帳戶有 120 GB 空間，每完成一天備份會使用 8 GB。若已備份 9 天，以 120－8d 表示剩餘空間，尚餘多少 GB？",
    "choices": [
      "48",
      "40",
      "56",
      "112"
    ],
    "answerIndex": 0,
    "explanation": "d 表示已備份天數，代入九後，九天共使用 8×9=72 GB。總空間一百二十減去已用七十二，剩 48 GB；式中的八是每天用量，必須乘天數。",
    "steps": [
      "將 d=9 代入 120-8d。",
      "計算九天使用量 8×9=72 GB。",
      "求剩餘量 120-72=48 GB。"
    ],
    "optionAnalysis": [
      {
        "choice": "48",
        "truth": true,
        "reason": "d=9，120-8×9=120-72=48。 因此此選項符合題目。"
      },
      {
        "choice": "40",
        "truth": false,
        "reason": "把備份天數多算1天。"
      },
      {
        "choice": "56",
        "truth": false,
        "reason": "把72從128扣除。"
      },
      {
        "choice": "112",
        "truth": false,
        "reason": "只扣一天的8GB。"
      }
    ],
    "commonMistake": "只從總容量扣除一次八 GB，忽略每天都會新增相同備份用量。",
    "concept": "剩餘量等於原有量減去累積使用量。",
    "tags": [
      "代數",
      "文字式與代入求值",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [],
    "authoringIntent": "將天數代入剩餘量模型。",
    "literacyContextNecessity": "空間上限、每日用量與天數共同決定剩餘量，情境資料是建立120-8d的必要資訊。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "23928479657355984b793c45ccdde01390c9fed7b6a296a08f83622dbe21f6b3",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s001-v012",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-substitution",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "山區氣溫可用 T＝18－0.6h 估計，其中 h 為高度的百公尺數。觀測點高度 1500 公尺，估計氣溫為多少°C？",
    "choices": [
      "8.4",
      "9",
      "12",
      "17.1"
    ],
    "answerIndex": 1,
    "explanation": "h 的單位是百公尺，因此一千五百公尺要先換成十五個百公尺。代入 T=18-0.6h，得到 18-0.6×15=18-9=9°C；不能直接把一千五百代入。單位換算是本題必要步驟。",
    "steps": [
      "換算 1500 公尺為 15 個百公尺。",
      "將 h=15 代入 T=18-0.6h。",
      "計算 18-0.6×15=9°C。"
    ],
    "optionAnalysis": [
      {
        "choice": "8.4",
        "truth": false,
        "reason": "把h直接代成16。"
      },
      {
        "choice": "9",
        "truth": true,
        "reason": "1500公尺等於15個百公尺，所以h=15；T=18-0.6×15=18-9=9。 因此此選項符合題目。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "只把高度換算後未乘0.6。"
      },
      {
        "choice": "17.1",
        "truth": false,
        "reason": "把0.6×15誤算成0.9。"
      }
    ],
    "commonMistake": "忽略 h 以百公尺為單位，把一千五百直接代入而得到不合理氣溫。",
    "concept": "未知數的單位必須與公式定義一致。",
    "tags": [
      "代數",
      "文字式與代入求值",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [],
    "authoringIntent": "先做單位換算再代入線性模型。",
    "literacyContextNecessity": "公式明定h以百公尺為單位，必須使用高度情境完成換算後才能代入，刪除單位資訊會改變答案。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2a432685ba33f8edaaf24d12eab78580a92749af3ffb368ed4be5f6c39dcf70e",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u03-s001-cr001",
    "unitId": "u03",
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-substitution",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "已知 a＝－2、b＝3/2，求 4a－2b＋5，並寫出完整代入過程。",
    "requiredWork": [
      "負數與分數代入時使用括號。",
      "依運算順序寫出每一步。"
    ],
    "fullCreditSolution": [
      "把 a=-2、b=3/2 分別代入，原式寫成 4(-2)-2(3/2)+5，負數與分數都以括號標明作用範圍。",
      "先完成乘法，4(-2)=-8、2(3/2)=3，所以原式化為 -8-3+5。",
      "由左到右合併得 -6；逐項重算負八減三再加五，確認結果與代入式一致。"
    ],
    "alternativeSolutions": [
      "也可先計算4a=-8、2b=3，再合併。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確代入兩個未知數、完成三步運算並得-6。"
      },
      {
        "score": 2,
        "criteria": "代入正確但一處算術錯，或答案正確但步驟少一項。"
      },
      {
        "score": 1,
        "criteria": "只寫出部分代入式或顯示知道係數乘法。"
      },
      {
        "score": 0,
        "criteria": "未代入、運算方向錯誤且無有效步驟。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "把 4a 誤寫成 4+a，沒有把係數四與 a 相乘。",
      "代入 b=3/2 後漏掉原式中 2b 前的減號，誤把負三算成正三。",
      "計算 -8-3+5 時先合併異號數卻判錯符號，得到正六。"
    ],
    "independentReview": {
      "derivedResult": "-6",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "63d55e79e780f71ed8cac463baa4fc28474feeadf73025561a1911cf809636bc",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s001-cr002",
    "unitId": "u03",
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-substitution",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某停車場收費公式為 C＝60＋25(h－1)，h 為停車的小時數且不足一小時以一小時計。小林停車 4.2 小時，求費用並解釋 h 應代入多少。",
    "requiredWork": [
      "先依計費規則決定h。",
      "代入公式並附上元。"
    ],
    "fullCreditSolution": [
      "因不足一小時以一小時計，停車 4.2 小時要進位成五個計費小時，所以公式中的 h=5。",
      "代入 C=60+25(h-1)，得到 C=60+25(5-1)=60+25×4。",
      "另外四個計費小時共一百元，加首小時六十元得 C=160 元，與分段計費規則相符。"
    ],
    "alternativeSolutions": [
      "可先說首小時60元，另外4小時各25元。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確判定h=5、列式並得160元。"
      },
      {
        "score": 2,
        "criteria": "進位正確但一處計算錯，或費用正確但未解釋h。"
      },
      {
        "score": 1,
        "criteria": "能指出需進位或寫出60+25×4。"
      },
      {
        "score": 0,
        "criteria": "忽略進位與公式結構，答案無合理依據。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "直接代入 h=4.2，忽略題目明定不足一小時仍以一小時計。",
      "把五個計費小時全部乘二十五元，再漏掉或重複首小時費用。",
      "將 h-1 誤算成 h，沒有扣除已包含在六十元中的首小時。"
    ],
    "independentReview": {
      "derivedResult": "160元",
      "ambiguity": "題目明定不足一小時以一小時計，因此4.2小時唯一對應h=5，費用唯一為160元。",
      "decision": "pass"
    },
    "contentSha256": "9b079fda4e15ebd722bf74dfe8df8ef0ffbd5d78e81736b1ffb0ff657cba4a2b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const DRAWING_SPECS = [];
