// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u01-s005-lecture-r1",
  "unitId": "u01",
  "topicId": "u01-integer-basics",
  "skillId": "integer-opposite-number",
  "title": "相反數：關於原點對稱且和為 0",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能求任意整數的相反數。",
    "能解釋相反數在數線上的對稱關係。",
    "能正確處理負數外再加負號。",
    "能利用相反數和為 0 解題。",
    "能辨認 0 的相反數仍是 0。"
  ],
  "prerequisites": [
    {
      "skillId": "integer-number-comparison",
      "requiredLevel": "能比較整數大小，並辨認原點兩側等距的位置。"
    }
  ],
  "glossary": [
    {
      "term": "相反數",
      "definition": "與原數距離 0 相同、方向相反的數。"
    },
    {
      "term": "關於原點對稱",
      "definition": "兩點分居 0 的兩側且離 0 等距。"
    },
    {
      "term": "互為相反數",
      "definition": "兩數相加為 0，例如 6 與 -6。"
    },
    {
      "term": "負號運算",
      "definition": "數前的負號表示取該數的相反數。"
    }
  ],
  "notation": [
    {
      "symbol": "-a",
      "meaning": "a 的相反數；若 a=-4，則 -a=4。"
    },
    {
      "symbol": "a+(-a)=0",
      "meaning": "一個數和它的相反數相加為 0。"
    },
    {
      "symbol": "-(-a)=a",
      "meaning": "連續取兩次相反數會回到原數。"
    }
  ],
  "conceptNarrative": [
    "一個數的相反數，是在數線上關於原點對稱的數：兩數到原點距離相同、方向相反。代數上，原數與相反數相加必為零，這是最可靠的驗證方式。",
    "正數的相反數是同距離的負數，負數的相反數是同距離的正數；零位在原點，對稱後仍是零，所以零的相反數就是零。",
    "符號前的負號常表示取相反數。遇到括號或多層負號時要由內向外逐層處理；連續取兩次相反數會回到原數。交易沖銷、反方向位移與偏差修正都可用同一概念表示。"
  ],
  "formalDefinitions": [
    {
      "name": "相反數",
      "statement": "若兩數的和為 0，則它們互為相反數。"
    },
    {
      "name": "唯一性",
      "statement": "每一個數都有且只有一個相反數。"
    },
    {
      "name": "零的相反數",
      "statement": "0 的相反數是 0。"
    }
  ],
  "formulas": [
    {
      "formula": "a 的相反數＝-a",
      "conditions": [
        "a 可為正、負或 0"
      ],
      "meaning": "改變原數方向。"
    },
    {
      "formula": "a+(-a)=0",
      "conditions": [
        "兩數確實互為相反數"
      ],
      "meaning": "檢查相反數。"
    }
  ],
  "nonApplicableCases": [
    "倒數與相反數不同；2 的相反數是 -2，倒數是 1/2。",
    "絕對值與相反數不同；|-5|=5，而 -(-5)=5，兩式在此同值但意義不同。",
    "若原數是代數式，負號要作用於整個式子；本單元只做基礎辨認。",
    "不能說「0 沒有相反數」，因為 0+0=0。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先辨認要求的是哪一個完整數的相反數，括號內的正負號都屬於原數。",
      "check": "把原數圈出來，避免只改到其中一個符號或漏看括號。"
    },
    {
      "step": 2,
      "instruction": "保留原數到零的距離，將它移到原點另一側，因此改變正負方向。",
      "check": "所得數與原數的絕對值應相同，正負號應相反；零則保持零。"
    },
    {
      "step": 3,
      "instruction": "有多層負號時由最內層開始，每遇到一次外部負號就取一次相反數。",
      "check": "記錄取反次數，偶數次回到原數，奇數次得到原數的相反數。"
    },
    {
      "step": 4,
      "instruction": "含未知數或其他運算時，先求出相反數再代入，最後按正常運算順序計算。",
      "check": "代入後回看每個符號屬於數值、運算或括號外取反，避免混用。"
    },
    {
      "step": 5,
      "instruction": "以原數加所得數等於零作最後驗證，情境題則確認兩個變化能完全抵消。",
      "check": "若和不為零，表示距離不同或符號沒有正確反轉，必須回到前一步修正。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u01-s005-example-a",
      "prompt": "求負十七的相反數。",
      "answer": "十七。",
      "why": "負十七位於原點左側十七個單位，關於原點對稱後會到右側相同距離，因此得到正十七。再以負十七加十七等於零，可以確認答案。"
    },
    {
      "exampleId": "u01-s005-example-b",
      "prompt": "化簡負的負二十三。",
      "answer": "二十三。",
      "why": "括號內的負二十三是完整原數，外面的負號表示取它的相反數。負二十三的相反數是正二十三，而且兩數相加為零，所以化簡結果為二十三。"
    },
    {
      "exampleId": "u01-s005-example-c",
      "prompt": "電梯向下十一層記為負十一，反方向同距離應記為多少？",
      "answer": "正十一。",
      "why": "反方向要保留移動距離十一，只把向下改成向上，因此帶號數由負十一改為正十一。兩次移動合計為零，也驗證它們是方向相反的等量變化。"
    },
    {
      "exampleId": "u01-s005-ex04-r4",
      "prompt": "若 a 的相反數是 -12，求 a。",
      "answer": "a=12。",
      "why": "a 的相反數寫成 -a，題意給出 -a=-12；等式兩邊同取相反數可得 a=12，再以 12+(-12)=0 驗證兩數確實互為相反數，也確認符號方向沒有顛倒。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把相反數誤認成倒數，將八的相反數寫成八分之一。",
      "correction": "相反數檢查兩數相加為零；倒數則是兩數相乘為一，定義完全不同。"
    },
    {
      "mistake": "認為零沒有相反數，或另造一個負零。",
      "correction": "零在原點對稱後位置不變，零加零也等於零，所以相反數仍是零。"
    },
    {
      "mistake": "看到兩個負號就不分層次地直接背負負得正。",
      "correction": "先圈出括號內完整原數，再把每個外部負號逐次解讀為取相反數。"
    },
    {
      "mistake": "只看一正一負就判定互為相反數，沒有比較距離。",
      "correction": "除了符號相反，兩數絕對值也必須相同，等價地說它們的和必須為零。"
    },
    {
      "mistake": "情境中的反方向同時改變方向與數量大小。",
      "correction": "相反變化只反轉方向，原本的距離、金額或偏差量大小必須保持相同。"
    },
    {
      "mistake": "題目說 a 的相反數是 -12，就直接把 a 也寫成 -12。",
      "correction": "先把語句翻成 -a=-12，再取一次相反數；原數與其相反數的符號應相反。"
    }
  ],
  "selfCheck": [
    "原數是正、負還是 0？",
    "我是否改變方向而非取倒數？",
    "括號中的負號有處理嗎？",
    "原數與答案相加等於 0 嗎？"
  ],
  "summary": [
    "a 的相反數是 -a。",
    "相反數在數線上關於 0 對稱。",
    "互為相反數的兩數和為 0。",
    "0 的相反數仍是 0。"
  ],
  "connections": {
    "previous": "先備技能是數的大小比較與數線位置。",
    "next": [
      "絕對值會比較相反數到 0 的共同距離。",
      "整數加法中相反數相加可直接得到 0。",
      "減去一個數可改寫成加上它的相反數。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u01-s005-v001",
      "u01-s005-v002",
      "u01-s005-v003",
      "u01-s005-v004",
      "u01-s005-v005",
      "u01-s005-v006",
      "u01-s005-v007",
      "u01-s005-v008",
      "u01-s005-v009",
      "u01-s005-v010",
      "u01-s005-v011",
      "u01-s005-v012"
    ],
    "constructedResponseIds": [
      "u01-s005-cr001",
      "u01-s005-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "用「相加為 0」和原點對稱兩種方法重算全部例題，並確認 0 的相反數仍為 0、相反數不等於倒數。",
    "reviewVersion": "human-lecture-review-r2.1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "409ec233160fbd71b25331e99140cd149a8e5ac84ff18d7674be1562381c88ad",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u01-s005-v001",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "7 的相反數是多少？",
    "choices": [
      "-7",
      "7",
      "1/7",
      "0"
    ],
    "answerIndex": 0,
    "explanation": "相反數是在數線上位於原點另一側且到原點距離相同的數，也就是與原數相加等於零。七的另一側對應位置是負七，而且七加負七為零，所以答案是負七。",
    "steps": [
      "確認原數七是正數，位於原點右側七個單位。",
      "移到原點另一側相同距離，得到負七。",
      "用七加負七等於零驗證兩數互為相反數。"
    ],
    "optionAnalysis": [
      {
        "choice": "-7",
        "truth": true,
        "reason": "7+(-7)=0。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "是原數本身。"
      },
      {
        "choice": "1/7",
        "truth": false,
        "reason": "是倒數。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "與7相加不為0。"
      }
    ],
    "commonMistake": "把相反數誤當倒數而寫成七分之一，沒有檢查兩數相加是否為零。",
    "concept": "a的相反數是-a。",
    "tags": [
      "數與量",
      "相反數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "求正整數的相反數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "cc17609b5727425a9b3ea00ae55d54c06f9e40585163272b94c1b3c1bb2e5bb3",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s005-v002",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-12 的相反數是多少？",
    "choices": [
      "-12",
      "12",
      "1/12",
      "0"
    ],
    "answerIndex": 1,
    "explanation": "負十二位於原點左側十二個單位，它的相反數必須位於右側相同距離，因此是正十二。也可用負十二加十二等於零驗證，符號改變而數值距離不變。",
    "steps": [
      "讀出原數是負十二，先保留它到零的距離十二。",
      "將位置移到原點的另一側，符號改為正，得到十二。",
      "檢查負十二與十二的和為零，確認答案正確。"
    ],
    "optionAnalysis": [
      {
        "choice": "-12",
        "truth": false,
        "reason": "未改方向。"
      },
      {
        "choice": "12",
        "truth": true,
        "reason": "-12+12=0。"
      },
      {
        "choice": "1/12",
        "truth": false,
        "reason": "不是倒數。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "距離不符。"
      }
    ],
    "commonMistake": "只去掉負號卻未理解原點對稱，遇到零或多層負號時便容易判錯。",
    "concept": "負數的相反數是對應正數。",
    "tags": [
      "數與量",
      "相反數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "求負整數的相反數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0af0b57cd61f6bc3ec9bd15651938d942737c8014cffdf84db10d8202e563053",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s005-v003",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "0 的相反數是多少？",
    "choices": [
      "不存在",
      "1",
      "0",
      "-1"
    ],
    "answerIndex": 2,
    "explanation": "相反數要與原數相加得到零。零加零仍然等於零，而且零在數線原點，關於原點對稱後位置不變，因此零的相反數仍是零，不會產生另一個不同的數。",
    "steps": [
      "從定義要求找一個與零相加後等於零的數。",
      "代入零可得零加零等於零，已符合條件。",
      "再以數線原點對稱檢查，原點映回自身，所以答案為零。"
    ],
    "optionAnalysis": [
      {
        "choice": "不存在",
        "truth": false,
        "reason": "每個數都有相反數。"
      },
      {
        "choice": "1",
        "truth": false,
        "reason": "0+1不為0。"
      },
      {
        "choice": "0",
        "truth": true,
        "reason": "0+0=0，故0。"
      },
      {
        "choice": "-1",
        "truth": false,
        "reason": "0+(-1)不為0。"
      }
    ],
    "commonMistake": "以為每個數的相反數都必須不同，因而錯認零沒有相反數。",
    "concept": "0是自己的相反數。",
    "tags": [
      "數與量",
      "相反數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "辨認相反數的邊界情況。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "5b57e2c6ff546412d14de69971ccd78952786c3269b8168d28f2d7f3e9073252",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s005-v004",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "化簡 -(-8) 的結果為何？",
    "choices": [
      "-16",
      "-8",
      "0",
      "8"
    ],
    "answerIndex": 3,
    "explanation": "括號內的負八是一個完整的數，括號外的負號表示取它的相反數。負八的相反數是正八，因此負的負八等於八；兩個負號不是相乘口訣，而是連續取相反數。",
    "steps": [
      "先辨認括號內的完整原數為負八。",
      "把括號外負號解讀為取負八的相反數。",
      "用負八加八等於零驗證結果，得到正八。"
    ],
    "optionAnalysis": [
      {
        "choice": "-16",
        "truth": false,
        "reason": "把兩數相加。"
      },
      {
        "choice": "-8",
        "truth": false,
        "reason": "忽略外層負號。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "誤認互相抵消成0。"
      },
      {
        "choice": "8",
        "truth": true,
        "reason": "-8的相反數為8。"
      }
    ],
    "commonMistake": "未先處理括號就把式子讀成普通減法，導致符號層次混淆。",
    "concept": "連續取兩次相反數回到原數。",
    "tags": [
      "數與量",
      "相反數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "處理負號套在負數外。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8dfadf9acd88c78926385f3b7ef2145cd82c5a8d041273d67073f84ab64a4f4c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s005-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一組數互為相反數？",
    "choices": [
      "-15 與 15",
      "-5 與 1/5",
      "0 與 1",
      "8 與 8"
    ],
    "answerIndex": 0,
    "explanation": "互為相反數的兩數到原點距離相同、符號相反，並且相加為零。負十五與十五的距離都為十五且和為零，因此這一組符合；只同號或距離不同的組合都不符合。",
    "steps": [
      "逐組檢查兩數是否一正一負，先排除同號的組合。",
      "比較剩餘組合到零的距離，負十五與十五距離相同。",
      "計算負十五加十五等於零，確認這組互為相反數。"
    ],
    "optionAnalysis": [
      {
        "choice": "-15 與 15",
        "truth": true,
        "reason": "四組和依序0,-4.8,1,16，只有第一組。"
      },
      {
        "choice": "-5 與 1/5",
        "truth": false,
        "reason": "這組接近倒數概念。"
      },
      {
        "choice": "0 與 1",
        "truth": false,
        "reason": "和為1。"
      },
      {
        "choice": "8 與 8",
        "truth": false,
        "reason": "和為16。"
      }
    ],
    "commonMistake": "只看一正一負就判定為相反數，沒有再檢查兩數的絕對值是否相同。",
    "concept": "互為相反數的兩數和為0。",
    "tags": [
      "數與量",
      "相反數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "用和為0辨認數對。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "16b10a38981b34d2f263b0603ae9a4258f4a17e6281fa9548c2aee7dbb4a3f38",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s005-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 a 的相反數是 -5，則 a 等於多少？",
    "choices": [
      "-5",
      "5",
      "0",
      "10"
    ],
    "answerIndex": 1,
    "explanation": "a 的相反數是負五，表示負 a 等於負五。對負五再取一次相反數即可回到 a，因此 a 等於正五；也可檢查五的相反數確實是負五。",
    "steps": [
      "把敘述轉成負 a 等於負五，也就是 a 被取相反數後為負五。",
      "等式兩邊各取一次相反數，左邊回復為 a，右邊成為五。",
      "以五的相反數是負五代回原敘述，確認 a 等於五。"
    ],
    "optionAnalysis": [
      {
        "choice": "-5",
        "truth": false,
        "reason": "-5的相反數不是自己。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "a-5=0，因此a=5。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "0與-5不互為相反數。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "10與-5和不為0。"
      }
    ],
    "commonMistake": "把題目給的負五直接當成 a，忘記它其實是 a 的相反數。",
    "concept": "若-a已知，可用和為0回推原數。",
    "tags": [
      "數與量",
      "相反數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "由相反數反求原數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8a7d8f5517e265dc386a1c0adfdf51b93297edd39e67b4bdd5a317d3b88f891a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s005-v007",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "a=-3，b 是 a 的相反數。則 2a+b 的值為何？",
    "choices": [
      "9",
      "3",
      "-3",
      "-9"
    ],
    "answerIndex": 2,
    "explanation": "先由相反數定義判斷：已知 a=-3，因此 b=3。代入 2a+b 時，先完成乘法 2×(-3)=-6，再加上 b 的值 3，得到 -6+3=-3，所以原式的值為 -3；最後代回可確認符號與條件一致，運算順序也正確。",
    "steps": [
      "由 a 等於負三求出其相反數 b 等於三。",
      "把兩個已知數值 a=-3、b=3 代入式子 2a+b，得到 2×(-3)+3。",
      "依先乘後加的順序計算為 -6+3，結果是 -3。"
    ],
    "optionAnalysis": [
      {
        "choice": "9",
        "truth": false,
        "reason": "把2a算成6。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "只取b。"
      },
      {
        "choice": "-3",
        "truth": true,
        "reason": "b=3，2a+b=-6+3=-3。"
      },
      {
        "choice": "-9",
        "truth": false,
        "reason": "把兩項都取負後相加。"
      }
    ],
    "commonMistake": "把 b 也代成負三，沒有先依相反數定義把 b 的符號改為正。",
    "concept": "先利用相反數求未知量，再代入整數算式。",
    "tags": [
      "數與量",
      "相反數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "結合相反數與代入運算。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "50b6d07f89683c58d66513b10cb80f777ef686bf427eb039ab05305534d81c6c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s005-v008",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "先計算 -(-6)，再求所得結果的相反數，最後答案是多少？",
    "choices": [
      "12",
      "6",
      "0",
      "-6"
    ],
    "answerIndex": 3,
    "explanation": "先計算負的負六，這是在對負六取相反數，結果為正六。題目接著要求正六的相反數，因此再跨到原點另一側得到負六，兩次取相反數會回到原數。",
    "steps": [
      "先把括號內負六視為完整原數，取其相反數得到六。",
      "再依題意對剛得到的六取一次相反數。",
      "六的相反數為負六，並以兩次取反回到原數檢查。"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": false,
        "reason": "把兩步當加法。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "只完成第一步。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "誤認兩步抵消為0。"
      },
      {
        "choice": "-6",
        "truth": true,
        "reason": "第一次得6，第二次得-6。"
      }
    ],
    "commonMistake": "做到第一層得到正六就停止，漏掉題目要求再求一次相反數。",
    "concept": "取相反數兩次會回到原數。",
    "tags": [
      "數與量",
      "相反數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "追蹤連續兩次相反運算。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e07bc369a3074e8e18d2fdda85faad985cf41ed7c45a3a001f8b68deb0400485",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s005-v009",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "數線上 P 的坐標是 -9，Q 與 P 關於原點對稱。Q 的坐標是多少？",
    "choices": [
      "9",
      "-9",
      "0",
      "18"
    ],
    "answerIndex": 0,
    "explanation": "點 P 的坐標是負九，點 Q 與 P 關於原點對稱。原點對稱會保留到零的距離並改變符號，所以 Q 在原點右側九個單位，坐標為正九。",
    "steps": [
      "讀出 P 位在原點左側九個單位，坐標為負九。",
      "關於原點對稱時移到另一側，但與原點距離仍為九。",
      "因此 Q 坐標為九，並以負九加九等於零驗證。"
    ],
    "optionAnalysis": [
      {
        "choice": "9",
        "truth": true,
        "reason": "Q=-(-9)=9。"
      },
      {
        "choice": "-9",
        "truth": false,
        "reason": "沒有對稱。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "是中心而非對稱點。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "是兩點距離。"
      }
    ],
    "commonMistake": "把原點對稱誤認為位置不變，或只改距離而沒有把坐標符號反轉。",
    "concept": "關於原點對稱的兩點坐標互為相反數。",
    "tags": [
      "數與量",
      "相反數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "把幾何對稱轉成相反數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b36a5db6eefb4ac6b6f0cd0416466846118e61cb9799fae73a340473843271a6",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s005-v010",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "帳務系統發現一筆 -450 元的扣款誤登，現在要用一筆「完全沖銷」紀錄使兩筆合計為 0。新紀錄應為何？",
    "choices": [
      "-900 元",
      "+450 元",
      "0 元",
      "+900 元"
    ],
    "answerIndex": 1,
    "explanation": "扣款四百五十元可用負四百五十表示。要完全沖銷，新增的交易必須與它相加為零，因此應記入正四百五十元；兩筆金額相同、方向相反。",
    "steps": [
      "把原扣款寫成負四百五十元。",
      "設沖銷金額需滿足負四百五十加該金額等於零。",
      "求得該金額為正四百五十元，代回後餘額變化為零。"
    ],
    "optionAnalysis": [
      {
        "choice": "-900 元",
        "truth": false,
        "reason": "會使總額更負。"
      },
      {
        "choice": "+450 元",
        "truth": true,
        "reason": "正確沖銷。"
      },
      {
        "choice": "0 元",
        "truth": false,
        "reason": "不會改變原紀錄。"
      },
      {
        "choice": "+900 元",
        "truth": false,
        "reason": "超過需要的金額。"
      }
    ],
    "commonMistake": "再次輸入負四百五十元，結果變成重複扣款而不是把原交易沖銷。",
    "concept": "沖銷紀錄使用原金額的相反數。",
    "tags": [
      "數與量",
      "相反數",
      "literacy"
    ],
    "estimatedTimeSec": "80",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "在帳務語境中使用相反數抵消。",
    "literacyContextNecessity": "「完全沖銷」與原扣款金額共同決定新紀錄，情境不能刪除。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "eb1bf780b0d981a01e953e137a0c5032cd830bf3aee58aba7fc12c2929388d3a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s005-v011",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "電梯控制器把向上 6 層記為 +6。若要執行與此位移大小相同、方向相反的指令，應輸入何者？",
    "choices": [
      "+12",
      "0",
      "-6",
      "-12"
    ],
    "answerIndex": 2,
    "explanation": "向上六個單位記為正六，反方向代表方向完全相反但移動距離相同。因此應改為向下六個單位，以帶號數表示就是負六，而不是把距離改成其他數。",
    "steps": [
      "辨認正號代表向上，數字六代表移動距離六個單位。",
      "反方向只改變方向，距離六保持不變。",
      "把向下六個單位寫成負六，並核對與正六相加為零。"
    ],
    "optionAnalysis": [
      {
        "choice": "+12",
        "truth": false,
        "reason": "大小改變且方向相同。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "沒有移動。"
      },
      {
        "choice": "-6",
        "truth": true,
        "reason": "+6的相反數是-6。"
      },
      {
        "choice": "-12",
        "truth": false,
        "reason": "大小也改變。"
      }
    ],
    "commonMistake": "把反方向理解成距離減半或變成零，沒有保留原本六個單位的大小。",
    "concept": "相反數保持絕對值、改變方向。",
    "tags": [
      "數與量",
      "相反數",
      "literacy"
    ],
    "estimatedTimeSec": "80",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "從控制指令語意辨認相反位移。",
    "literacyContextNecessity": "控制器的正方向約定、位移大小與反向要求都是必要資訊。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "338d1385d4af1c32485b3ce7dfa677c32c80d790cec054cc6a53a59abb04cd20",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s005-v012",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "產品目標值為 100。某次檢測偏差是 +8；下一次偏差恰為它的相反數。下一次的實際值是多少？",
    "choices": [
      "108",
      "100",
      "84",
      "92"
    ],
    "answerIndex": 3,
    "explanation": "偏差正八表示實際值比目標一百高八。下一次偏差取其相反數，所以偏差為負八，代表比目標低八；實際值是一百減八，得到九十二。",
    "steps": [
      "由正八的相反數求得下一次偏差為負八。",
      "把偏差定義寫成實際值減目標值等於負八。",
      "用一百加負八計算實際值，得到九十二並核對低於目標八。"
    ],
    "optionAnalysis": [
      {
        "choice": "108",
        "truth": false,
        "reason": "是第一次實際值。"
      },
      {
        "choice": "100",
        "truth": false,
        "reason": "把偏差相反誤作0。"
      },
      {
        "choice": "84",
        "truth": false,
        "reason": "減了兩次8。"
      },
      {
        "choice": "92",
        "truth": true,
        "reason": "相反偏差-8，100-8=92。"
      }
    ],
    "commonMistake": "把負八直接當成實際值，沒有把偏差加回目標一百來求實際量。",
    "concept": "先取相反偏差，再加回基準。",
    "tags": [
      "數與量",
      "相反數",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "結合相反數與基準偏差還原。",
    "literacyContextNecessity": "目標值、第一次偏差與「相反數」條件共同決定下一次實際值。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3e3b6df8792ff7c0329b4961f211fb4ed4ba41d19c13e615cc6b36099daca95a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u01-s005-cr001",
    "unitId": "u01",
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "求下列各數的相反數，並用「兩數相加為 0」逐一檢查：14、-9、0、-(-5)。",
    "requiredWork": [
      "先化簡 -(-5)。",
      "每題都寫出相反數。",
      "至少列出一次完整和為0的檢查形式。"
    ],
    "fullCreditSolution": [
      "相反數與原數的和必為零，因此十四的相反數是負十四，負九的相反數是正九，而零的相反數仍是零。",
      "先處理負的負五：括號外負號表示取負五的相反數，所以負的負五等於正五；正五的相反數再是負五。",
      "逐一驗算十四加負十四、負九加九、零加零、五加負五，四個和都為零，因此各組答案成立。"
    ],
    "alternativeSolutions": [
      "可用數線對稱說明，但答案必須相同。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "四項答案與檢查全部正確。"
      },
      {
        "score": 2,
        "criteria": "四項答案正確但檢查略缺；或一項小錯。"
      },
      {
        "score": 1,
        "criteria": "至少兩項正確且知道用和為0檢查。"
      },
      {
        "score": 0,
        "criteria": "相反數與倒數混淆，少於兩項正確。"
      }
    ],
    "scoringNotes": [
      "若把最後一項直接視為-5，表示未先化簡。"
    ],
    "commonErrors": [
      "把相反數誤當倒數，將十四寫成十四分之一而無法使兩數和為零。",
      "認為零沒有相反數，忽略零加零正好等於零且原點對稱後不動。",
      "沒有先化簡負的負五，直接把內外負號層次混在一起而答成正五。"
    ],
    "independentReview": {
      "derivedResult": "-14、9、0、-5。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "760415b86f148979acdc41a83a667476ce91e6cb1ae43c2b3dd3e22c97dc3d32",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "先用相加為零求出十四、負九與零各自的相反數。",
      "對負的負五先化簡為正五，再求正五的相反數負五。",
      "把每個原數與所求相反數相加，逐項確認結果都等於零。"
    ]
  },
  {
    "questionId": "u01-s005-cr002",
    "unitId": "u01",
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "數線上 A 與 B 關於原點對稱，A=-7。C 又與 B 關於坐標 2 的點對稱。求 B、C，並說明第二次對稱為什麼不能只取相反數。",
    "requiredWork": [
      "先利用原點對稱求B。",
      "把2視為B、C中點。",
      "說明取相反數只適用以0為中心。"
    ],
    "fullCreditSolution": [
      "A 的坐標是負七，B 與 A 關於原點對稱，所以 B 到原點距離仍為七但改在右側，B 坐標為正七。",
      "C 是 B 關於坐標二的對稱點，對稱中心二必為 B 與 C 的中點，因此七加 C 等於二乘二，也就是四。",
      "由七加 C 等於四求得 C 等於負三；檢查二到七與二到負三的距離都為五，符合第二次對稱。"
    ],
    "alternativeSolutions": [
      "可用距離：B=7距2為5，另一側C=2-5=-3。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "B=7、C=-3且中心非0的解釋完整。"
      },
      {
        "score": 2,
        "criteria": "兩坐標正確但理由不完整；或方法正確有小算錯。"
      },
      {
        "score": 1,
        "criteria": "正確求出B並知道第二次中心為2。"
      },
      {
        "score": 0,
        "criteria": "兩次都只取相反數而得錯誤C。"
      }
    ],
    "scoringNotes": [
      "若只答C=-7，表示把中心2忽略。"
    ],
    "commonErrors": [
      "第二次仍以原點為對稱中心，把 B 的相反數負七誤當成 C。",
      "把坐標二當成平移兩單位，沒有使用二是 B 與 C 中點的條件。",
      "只求出 B 等於七便停止，未繼續依第二個對稱條件計算 C。"
    ],
    "independentReview": {
      "derivedResult": "B=7，C=-3。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "ac34def13b548df244398c89b83021395d73f03da1f6aae4f87eb7df4c2a30fa",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "先做原點對稱，把 A 的負七改為 B 的正七。",
      "對第二次對稱使用中點關係，列出 B 加 C 等於四。",
      "代入 B 等於七求得 C 等於負三，再用到坐標二的等距性驗證。"
    ]
  }
];

export const DRAWING_SPECS = [];
