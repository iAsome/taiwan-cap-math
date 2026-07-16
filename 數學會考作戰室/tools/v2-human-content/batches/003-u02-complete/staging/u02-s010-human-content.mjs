// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u02-s010-lecture-r1",
  "unitId": "u02",
  "topicId": "u02-fraction-ops",
  "skillId": "fraction-multiply-divide",
  "title": "分數的乘法和除法：用倍量和倒數與每份大小解決比例分裝",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能完成正負分數乘法。",
    "能把除以分數改成乘倒數。",
    "能先約分再乘以降低計算錯誤。",
    "能判斷部分中的部分、份數與反求整體。"
  ],
  "prerequisites": [
    {
      "skillId": "fraction-add-subtract",
      "requiredLevel": "能處理分數符號、約分與基本四則順序。"
    }
  ],
  "glossary": [
    {
      "term": "倒數",
      "definition": "兩數乘積為1時互為倒數。"
    },
    {
      "term": "交叉約分",
      "definition": "乘法前在分子分母間約去公因數。"
    },
    {
      "term": "部分中的部分",
      "definition": "一個比例作用在另一部分上，通常用乘法。"
    },
    {
      "term": "份數",
      "definition": "總量可分成多少個指定大小的份。"
    }
  ],
  "notation": [
    {
      "symbol": "(a/b)⁻¹=b/a",
      "meaning": "a、b皆非0時的倒數。"
    }
  ],
  "conceptNarrative": [
    "分數乘法表示部分量或連續比例，計算時分子乘分子、分母乘分母，並可在相乘前交叉約分。它不需要通分，因為不是合併不同單位分數。",
    "除以非零分數等於乘該除數的倒數，只有除數被顛倒，被除數保持原位。負分數乘除仍依整數符號規則先判正負，再計算絕對值；零不能作除數或被取倒數。",
    "情境中的「某量的幾分之幾」使用乘法；已知總量與每份量要求份數，或已知部分反求整體，使用除法。列式後應用乘回驗算，確認份數、容量與原總量一致。"
  ],
  "formalDefinitions": [
    {
      "name": "分數乘法",
      "statement": "a/b×c/d=ac/bd。"
    },
    {
      "name": "分數除法",
      "statement": "a/b÷c/d=a/b×d/c，c、d非0。"
    }
  ],
  "formulas": [
    {
      "formula": "a/b×c/d=ac/bd",
      "conditions": [
        "b、d非0"
      ],
      "meaning": "分數乘法。"
    },
    {
      "formula": "a/b÷c/d=ad/bc",
      "conditions": [
        "b、c、d非0"
      ],
      "meaning": "乘倒數。"
    }
  ],
  "nonApplicableCases": [
    "0沒有倒數。",
    "除數不得為0。",
    "分數乘法不需通分。",
    "『其中的』與『平均分成』代表不同運算。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先由問句判斷是求部分量、份數或反求整體，決定使用乘法或除法。",
      "check": "其中的比例用乘法；總量可分幾份用總量除以每份量。"
    },
    {
      "step": 2,
      "instruction": "圈出每個分數的正負號，依同號正、異號負先判定結果符號。",
      "check": "沒有只算絕對值而漏掉負號，除數也確認非零。"
    },
    {
      "step": 3,
      "instruction": "遇到除法，只將第二個分數也就是除數顛倒，改寫為乘法。",
      "check": "被除數保持不變，倒數的分子分母交換且原符號保留。"
    },
    {
      "step": 4,
      "instruction": "在乘法式中先做跨分子分母約分，再完成剩餘因數相乘。",
      "check": "約分只除共同因數，沒有在加減項之間任意消去。"
    },
    {
      "step": 5,
      "instruction": "化成最簡分數或合適整數，附回情境單位並用乘回方式驗算。",
      "check": "份數乘每份量能回到總量，部分量除比例能回到原整體。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u02-s010-example-a",
      "prompt": "計算 5/9×3/10。",
      "solutionSteps": [
        "交叉約分：五與十約成一與二，三與九約成一與三。",
        "將剩餘分子相乘、分母相乘，得到 1/6。"
      ],
      "answer": "1/6。",
      "why": "分數乘法可先交叉約分：五與十分別除以五，三與九分別除以三，剩下一乘一作分子、三乘二作分母，因此最簡結果為六分之一。"
    },
    {
      "exampleId": "u02-s010-example-b",
      "prompt": "計算 7/12÷14/9。",
      "solutionSteps": [
        "把除以 14/9 改成乘其倒數 9/14。",
        "在 7/12×9/14 中交叉約分並相乘，得到 3/8。"
      ],
      "answer": "3/8。",
      "why": "除以九分之十四改成乘其倒數十四分之九，原式成十二分之七乘十四分之九。七與十四、九與十二交叉約分後，得到八分之三。"
    },
    {
      "exampleId": "u02-s010-example-c",
      "prompt": "有 10 公升飲料，每瓶裝 2/3 公升，可裝幾瓶？",
      "solutionSteps": [
        "份數用總量除以每份量，列 10÷2/3。",
        "改乘倒數 10×3/2=15，並用 15×2/3=10 驗算。"
      ],
      "answer": "15 瓶。",
      "why": "所求是份數，所以用總量十公升除以每瓶三分之二公升。除法改成十乘二分之三，約分後得到十五；十五瓶乘每瓶三分之二正好回到十公升。"
    },
    {
      "exampleId": "u02-s010-example-d",
      "prompt": "計算 6/7÷9/14。",
      "solutionSteps": [
        "把除法改成 6/7×14/9，只顛倒除數 9/14。",
        "交叉約分後得 12/9，再約成 4/3。"
      ],
      "answer": "4/3。",
      "why": "除以十四分之九等於乘它的倒數九分之十四，原式成七分之六乘九分之十四。交叉約分後為九分之十二，再化成三分之四。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "分數乘法先通分，沿用加減法的處理方式。",
      "correction": "乘法直接分子乘分子、分母乘分母，先交叉約分可簡化數字。"
    },
    {
      "mistake": "除法把被除數顛倒，或兩個分數一起顛倒。",
      "correction": "只有除數也就是第二個分數取倒數，被除數原樣保留。"
    },
    {
      "mistake": "對零取倒數，認為除數為零仍可改成乘法。",
      "correction": "零沒有倒數，任何除以零的式子都沒有定義。"
    },
    {
      "mistake": "求可分幾份時用總量乘每份量。",
      "correction": "份數等於總量除以每份量，最後可用份數乘每份量驗算。"
    },
    {
      "mistake": "負分數乘除只計算絕對值，答案漏寫負號。",
      "correction": "先依所有因數的符號判定正負，再進行約分與數值運算。"
    },
    {
      "mistake": "交叉約分完成後漏乘剩餘因數，直接把約分數字當答案。",
      "correction": "約分只是在相乘前化簡，最後仍要完成剩餘分子與分母的乘法。"
    }
  ],
  "selfCheck": [
    "除數是否非0？",
    "倒數是否只作用在除數？",
    "能否先約分？",
    "符號是否正確？",
    "情境問的是部分量還是份數？"
  ],
  "summary": [
    "乘法分子乘分子、分母乘分母。",
    "除法改乘倒數。",
    "乘法前可交叉約分。",
    "部分中的部分用乘法，份數用除法。"
  ],
  "connections": {
    "previous": "先備技能為 fraction-add-subtract，需能完成其基本判斷與計算。",
    "next": [
      "帶分數的乘法和除法前通常化成假分數。",
      "繁分數的主分數線就是除法。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u02-s010-v001",
      "u02-s010-v002",
      "u02-s010-v003",
      "u02-s010-v004",
      "u02-s010-v005",
      "u02-s010-v006",
      "u02-s010-v007",
      "u02-s010-v008",
      "u02-s010-v009",
      "u02-s010-v010",
      "u02-s010-v011",
      "u02-s010-v012"
    ],
    "constructedResponseIds": [
      "u02-s010-cr001",
      "u02-s010-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四例均以未約分直接乘與先約分兩路重算；除法結果再乘回除數恢復被除數，符號與0條件單獨檢查。",
    "reviewVersion": "human-lecture-review-r3.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "09d1e2fcf61017691f0a9cb3de6a745e6ba8963bd28a640cf3f81277e25fd17c",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u02-s010-v001",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "3/4×2/5 等於多少？",
    "choices": [
      "3/10",
      "5/9",
      "6/9",
      "3/5"
    ],
    "answerIndex": 0,
    "explanation": "分數乘法將分子相乘、分母相乘，得到 3×2/(4×5)=6/20。分子分母同除以二，約成最簡分數 3/10。兩個小於一的正分數相乘，結果也應小於任一因數。",
    "steps": [
      "列出分子乘積 3×2=6、分母乘積 4×5=20。",
      "得到乘積 6/20。",
      "分子分母同除以 2，約分為 3/10。"
    ],
    "optionAnalysis": [
      {
        "choice": "3/10",
        "truth": true,
        "reason": "3/10正確。"
      },
      {
        "choice": "5/9",
        "truth": false,
        "reason": "把分子分母相加。"
      },
      {
        "choice": "6/9",
        "truth": false,
        "reason": "未正確乘分母。"
      },
      {
        "choice": "3/5",
        "truth": false,
        "reason": "約分錯誤。"
      }
    ],
    "commonMistake": "沿用分數加法規則，把兩個分子與兩個分母分別相加成九分之五。",
    "concept": "分數乘法分子乘分子、分母乘分母，再約分。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "基本分數乘法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8780f69bb77c6b2a9da5dee10ce8824b64e3f3b679a4b4710610ec517d1ebd24",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v002",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "5/6÷10/9 等於多少？",
    "choices": [
      "25/27",
      "3/4",
      "4/3",
      "1/12"
    ],
    "answerIndex": 1,
    "explanation": "除以 10/9 等於乘它的倒數 9/10，所以原式為 5/6×9/10。交叉約分或直接計算得 45/60，約分為 3/4。除數大於一，因此商小於原來的六分之五，也符合大小檢查。",
    "steps": [
      "只把除數 10/9 取倒數，將原式改成 5/6×9/10。",
      "計算分子分母乘積得到 45/60。",
      "分子分母同除以 15，得到最簡分數 3/4。"
    ],
    "optionAnalysis": [
      {
        "choice": "25/27",
        "truth": false,
        "reason": "把除法誤作5/6×10/9，未將除數取倒數。"
      },
      {
        "choice": "3/4",
        "truth": true,
        "reason": "5/6×9/10=45/60=3/4。"
      },
      {
        "choice": "4/3",
        "truth": false,
        "reason": "把正確商3/4再顛倒，倒數方向錯誤。"
      },
      {
        "choice": "1/12",
        "truth": false,
        "reason": "只將5/6除以整數10，忽略除數10/9的分母9。"
      }
    ],
    "commonMistake": "沒有把完整除數取倒數，或把被除數六分之五顛倒，造成運算方向錯誤。",
    "concept": "除以分數等於乘它的倒數。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "基本分數除法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "343a1bc8747d4b6959ae94852de632e47626f0b0381fcf2f3f7b6a735a0ee5fc",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v003",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-2/3×9/4 等於多少？",
    "choices": [
      "3/2",
      "-3/4",
      "-3/2",
      "-6"
    ],
    "answerIndex": 2,
    "explanation": "負分數乘正分數的結果為負。數值部分可先約分：九與三約成三與一，二與四約成一與二，最後得到 -3/2。異號乘積的負號與絕對值二分之三都已完整保留。",
    "steps": [
      "先由一負一正判定乘積符號為負。",
      "在 2/3×9/4 中交叉約分，9÷3=3、2÷4=1/2。",
      "合併得到 -3/2。"
    ],
    "optionAnalysis": [
      {
        "choice": "3/2",
        "truth": false,
        "reason": "符號應為負。"
      },
      {
        "choice": "-3/4",
        "truth": false,
        "reason": "數值少一倍。"
      },
      {
        "choice": "-3/2",
        "truth": true,
        "reason": "-3/2正確。"
      },
      {
        "choice": "-6",
        "truth": false,
        "reason": "未約分且乘錯。"
      }
    ],
    "commonMistake": "只計算絕對值三分之二乘九分之四，漏掉異號乘積應為負。",
    "concept": "異號相乘結果為負。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "帶符號分數乘法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "147f889f701a2b9dd52ded7b934d8fdec47084e5633889726327016c13c00c6f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v004",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "7/8÷(-14/3) 等於多少？",
    "choices": [
      "-49/24",
      "3/16",
      "-7/12",
      "-3/16"
    ],
    "answerIndex": 3,
    "explanation": "除以負三分之十四要乘它的倒數負十四分之三，因此 7/8×(-3/14)。七與十四約分後得到 -3/16；正數除以負數，負號必須保留，且商的絕對值小於一。",
    "steps": [
      "把除數 -14/3 取倒數，原式成 7/8×(-3/14)。",
      "交叉約分 7 與 14，留下 1 與 2。",
      "計算並保留異號的負號，得到 -3/16。"
    ],
    "optionAnalysis": [
      {
        "choice": "-49/24",
        "truth": false,
        "reason": "未取倒數。"
      },
      {
        "choice": "3/16",
        "truth": false,
        "reason": "除以負數後結果必為負，3/16遺漏負號。"
      },
      {
        "choice": "-7/12",
        "truth": false,
        "reason": "約分與倒數都錯。"
      },
      {
        "choice": "-3/16",
        "truth": true,
        "reason": "-3/16正確。"
      }
    ],
    "commonMistake": "取倒數時只交換十四與三卻漏掉負號，因而錯答正十六分之三。",
    "concept": "除以負分數等於乘負倒數。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "負分數除法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "996ed1457c5457a9727c73f9f08c986cce519f30987a7f2ad0b13fd3801c43b9",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v005",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(2/3)²×9/8 等於多少？",
    "choices": [
      "1/2",
      "3/4",
      "1",
      "9/16"
    ],
    "answerIndex": 0,
    "explanation": "先計算平方，(2/3)²=4/9。再乘 9/8，九可以約去，得到 4/8；分子分母同除以四，最簡結果是 1/2。平方必須同時作用於分子與分母，括號範圍不可拆開。",
    "steps": [
      "先算括號內分數的平方，得到 4/9。",
      "列出 4/9×9/8，約去分子與分母的 9。",
      "得到 4/8，再約分為 1/2。"
    ],
    "optionAnalysis": [
      {
        "choice": "1/2",
        "truth": true,
        "reason": "1/2正確。"
      },
      {
        "choice": "3/4",
        "truth": false,
        "reason": "約分不完整。"
      },
      {
        "choice": "1",
        "truth": false,
        "reason": "誤以為9全部消去後為1。"
      },
      {
        "choice": "9/16",
        "truth": false,
        "reason": "只算部分。"
      }
    ],
    "commonMistake": "把三分之二的平方算成三分之四，只平方分子而沒有同時平方分母。",
    "concept": "分數次方要分子分母都乘方。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "結合分數乘方。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ee30556490e55bdd8d837472628d5343011850051bcff0db0b9d84fee6651fc9",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v006",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個數的 3/5 是 18，這個數是多少？",
    "choices": [
      "18×3/5",
      "30",
      "18÷5",
      "10又4/5"
    ],
    "answerIndex": 1,
    "explanation": "設原數為 x，題意是 (3/5)x=18。要反求整體，將十八除以五分之三，也就是乘三分之五，18×5/3=30。原數三十的五分之三確實等於十八，代回成立。",
    "steps": [
      "設原數 x，列出 (3/5)x=18。",
      "兩邊除以 3/5，得到 x=18×5/3。",
      "約分計算得 x=30，並驗算 30×3/5=18。"
    ],
    "optionAnalysis": [
      {
        "choice": "18×3/5",
        "truth": false,
        "reason": "求的是18的3/5，不是原數。"
      },
      {
        "choice": "30",
        "truth": true,
        "reason": "30正確。"
      },
      {
        "choice": "18÷5",
        "truth": false,
        "reason": "只除分母。"
      },
      {
        "choice": "10又4/5",
        "truth": false,
        "reason": "數值太小。"
      }
    ],
    "commonMistake": "看到五分之三是十八便再乘五分之三，算的是十八的一部分而非反求原整體。",
    "concept": "已知部分求整體要除以所佔分率。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "由部分反求整體。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "71060d07985bf00f494725ac5f48f5982dfafe0acec117a8f41a17676d490638",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v007",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-3/4)×(8/9)÷(-2/3) 等於多少？",
    "choices": [
      "-1",
      "1/2",
      "1",
      "2"
    ],
    "answerIndex": 2,
    "explanation": "先算 (-3/4)×(8/9)，交叉約分得到 -2/3。再以 -2/3 除以相同的非零分數 -2/3，商為一，所以原式等於 1。兩個負數相除為正，也能檢查最終符號，且不存在除以零的問題。",
    "steps": [
      "先完成乘法 (-3/4)×(8/9)=-2/3。",
      "原式化為 (-2/3)÷(-2/3)。",
      "同一非零數除以自身等於 1。"
    ],
    "optionAnalysis": [
      {
        "choice": "-1",
        "truth": false,
        "reason": "兩負相除應為正。"
      },
      {
        "choice": "1/2",
        "truth": false,
        "reason": "漏掉一次倒數。"
      },
      {
        "choice": "1",
        "truth": true,
        "reason": "同一非零數相除得1。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "多乘倒數。"
      }
    ],
    "commonMistake": "只處理第一個負號或漏掉最後一次除法，未看出後兩個分數相同。",
    "concept": "乘除同級由左到右，除法改乘倒數。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "多步帶符號乘除。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "400c798e863d5dad97bad1173d089c2280acf4384784c6759b775b67f13087cd",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v008",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 a=5/6，則 (a÷5/12)×3/4 等於多少？",
    "choices": [
      "1",
      "5/8",
      "4/3",
      "3/2"
    ],
    "answerIndex": 3,
    "explanation": "先代入 a=5/6，括號內為 5/6÷5/12=5/6×12/5=2。再乘 3/4 得 2×3/4=3/2。括號內的除法必須先完成，最後乘法不能被省略；結果大於一也符合先除以較小正分數的變化。",
    "steps": [
      "代入 a=5/6，列出 (5/6÷5/12)×3/4。",
      "括號內乘除數倒數，計算 5/6×12/5=2。",
      "再算 2×3/4=3/2。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "漏乘3/4。"
      },
      {
        "choice": "5/8",
        "truth": false,
        "reason": "倒數或約分錯。"
      },
      {
        "choice": "4/3",
        "truth": false,
        "reason": "把最後乘法倒過來。"
      },
      {
        "choice": "3/2",
        "truth": true,
        "reason": "3/2正確。"
      }
    ],
    "commonMistake": "代入後把除以十二分之五當成直接相乘，沒有將除數取倒數。",
    "concept": "代入式要保留運算順序與倒數。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "分數代入多步運算。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "fa569133c4c568d3e3187205d64e217f25e4db2d894339e1c0728b97b20cc6bd",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v009",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某正數乘 7/9 後再除以 14/15，結果為 5/6。原數是多少？",
    "choices": [
      "1",
      "3/5",
      "7/10",
      "5/7"
    ],
    "answerIndex": 0,
    "explanation": "設原數為 x，連續運算可寫成 x×7/9×15/14。後兩個因數約分為 5/6，所以題意成為 x×5/6=5/6；因此 x=1。將一代回原流程，輸出正好仍為六分之五，原等式成立。",
    "steps": [
      "設原數 x，將除以 14/15 改成乘 15/14。",
      "化簡 7/9×15/14=5/6，得到 (5/6)x=5/6。",
      "兩邊除以非零的 5/6，求得 x=1 並代回驗證。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": true,
        "reason": "1×5/6=5/6。"
      },
      {
        "choice": "3/5",
        "truth": false,
        "reason": "代回只得1/2。"
      },
      {
        "choice": "7/10",
        "truth": false,
        "reason": "代回不符。"
      },
      {
        "choice": "5/7",
        "truth": false,
        "reason": "把7/9當答案。"
      }
    ],
    "commonMistake": "反向計算時逐步亂取倒數，沒有先把整個乘除流程化成單一乘數六分之五。",
    "concept": "可先合併總乘數，再由結果除回。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "反向解分數的乘法和除法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "510efbce23ca716cddf26fa8e7af32bd91cd4eb1e9dcea76cb09f10adeb677f4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v010",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一桶油有 12 公升，每瓶裝 3/4 公升，最多可裝滿幾瓶？",
    "choices": [
      "12 瓶",
      "16 瓶",
      "9 瓶",
      "18 瓶"
    ],
    "answerIndex": 1,
    "explanation": "瓶數等於總量除以每瓶容量，所以列式 12÷3/4。除以四分之三改乘三分之四，12×4/3=16，因此最多可裝滿十六瓶。十六瓶乘每瓶四分之三公升會回到十二公升。",
    "steps": [
      "辨認所求是份數，列出 12÷3/4。",
      "將除法改為乘倒數 12×4/3。",
      "約分計算得到 16 瓶，並驗算 16×3/4=12 公升。"
    ],
    "optionAnalysis": [
      {
        "choice": "12 瓶",
        "truth": false,
        "reason": "把公升數當瓶數。"
      },
      {
        "choice": "16 瓶",
        "truth": true,
        "reason": "16瓶正確。"
      },
      {
        "choice": "9 瓶",
        "truth": false,
        "reason": "算成12×3/4。"
      },
      {
        "choice": "18 瓶",
        "truth": false,
        "reason": "除法錯誤。"
      }
    ],
    "commonMistake": "用總量十二乘每瓶四分之三，算成九公升而不是求可分裝的瓶數。",
    "concept": "份數=總量÷每份量。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "容量分裝。",
    "literacyContextNecessity": "總油量、每瓶容量與「裝滿」限制共同決定要用12÷3/4，不能刪去分裝情境後仍保留相同問題。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "723b72ab90b658eadbd7ef919d8a988de8645cbafe7068904993db42f841d4ba",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v011",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一塊布長 7又1/2 公尺，每件作品用 5/8 公尺。若不拼接，最多可做幾件完整作品？",
    "choices": [
      "10 件",
      "11 件",
      "12 件",
      "13 件"
    ],
    "answerIndex": 2,
    "explanation": "總布長 7又1/2 公尺化成 15/2 公尺。作品件數為 15/2÷5/8=15/2×8/5，約分後得到十二，且十二件剛好用完。題目限制不拼接，但整除結果沒有剩料，因此不需捨去零頭。",
    "steps": [
      "把帶分數 7又1/2 化為假分數 15/2。",
      "列出份數 15/2÷5/8，改為 15/2×8/5。",
      "約分計算得 12 件，驗算 12×5/8=15/2 公尺。"
    ],
    "optionAnalysis": [
      {
        "choice": "10 件",
        "truth": false,
        "reason": "10件只用6.25公尺。"
      },
      {
        "choice": "11 件",
        "truth": false,
        "reason": "11件非最大。"
      },
      {
        "choice": "12 件",
        "truth": true,
        "reason": "12件正好用完。"
      },
      {
        "choice": "13 件",
        "truth": false,
        "reason": "13件超過總長。"
      }
    ],
    "commonMistake": "帶分數未先正確化成假分數，或用總布長乘每件用量而把運算方向顛倒。",
    "concept": "完整件數由總長除以單件用量。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "布料分裝。",
    "literacyContextNecessity": "總布長、單件用量及完整作品要求決定商，且需檢查是否超量。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "42920ea4a062092af92646316bc7f2d810d418d85db620562821bc9eaa26dc82",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v012",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一批果汁為 18 公升，先倒出全量的 2/3，再把倒出的果汁平均裝入每瓶 3/4 公升。共可裝幾瓶？",
    "choices": [
      "12 瓶",
      "18 瓶",
      "20 瓶",
      "16 瓶"
    ],
    "answerIndex": 3,
    "explanation": "先求倒出的實際量：18×2/3=12 公升。再用十二公升除以每瓶四分之三公升，12÷3/4=12×4/3=16，所以可裝十六瓶。兩步分別回答倒出多少與可分幾份，不能互相省略。",
    "steps": [
      "計算倒出量 18×2/3=12 公升。",
      "以倒出量除以每瓶容量，列出 12÷3/4。",
      "乘倒數計算 12×4/3=16 瓶。"
    ],
    "optionAnalysis": [
      {
        "choice": "12 瓶",
        "truth": false,
        "reason": "只算第一步公升數。"
      },
      {
        "choice": "18 瓶",
        "truth": false,
        "reason": "把18直接當瓶數。"
      },
      {
        "choice": "20 瓶",
        "truth": false,
        "reason": "錯用12÷3/5。"
      },
      {
        "choice": "16 瓶",
        "truth": true,
        "reason": "16瓶正確。"
      }
    ],
    "commonMistake": "跳過第一步直接用十八公升分瓶，或把十二公升當成最後的瓶數。",
    "concept": "先求部分量，再除以每份量。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "兩步比例分裝。",
    "literacyContextNecessity": "全量、倒出比例與瓶容量三筆資料依序決定兩步運算，任何一項都不可刪除。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b63ce572276a0ccd602d1d8879af0d6a33fd40593a9dc2b8adc55ba300b8bc16",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u02-s010-cr001",
    "unitId": "u02",
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "一桶蜂蜜有 15又3/4 公斤，每罐裝 7/8 公斤。可裝滿幾罐？寫出計算與驗算。",
    "requiredWork": [
      "帶分數化假分數。",
      "用總量除每罐量。",
      "乘回驗算。"
    ],
    "fullCreditSolution": [
      "先把總量化成假分數：15又3/4=63/4 公斤。",
      "罐數用總量除以每罐量，將除法改乘倒數並交叉約分後得到 18 罐。",
      "驗算 18×7/8=126/8=63/4=15又3/4 公斤，正好全部裝完。"
    ],
    "alternativeSolutions": [
      "可先把每罐7/8公斤換成小數0.875，但需精確驗算。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "18罐、除法與乘回驗算完整。"
      },
      {
        "score": 2,
        "criteria": "答案與主要過程正確但無驗算。"
      },
      {
        "score": 1,
        "criteria": "列出正確除法但計算小錯。"
      },
      {
        "score": 0,
        "criteria": "用乘法求罐數或答案不合理。"
      }
    ],
    "scoringNotes": [
      "沒有剩餘，不需取整。"
    ],
    "commonErrors": [
      "用總重量乘每罐八分之七公斤，混淆求份數應使用除法。",
      "把十五又四分之三化成十八分之四，沒有使用整數乘分母再加分子的規則。",
      "求得十八罐後未乘回驗算，無法確認是否剛好用完。"
    ],
    "independentReview": {
      "derivedResult": "18罐。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "edc9b8f9810fd27f5b72d38fc726671c127e77bd0bfc6d6ddb84598135597f8c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "將帶分數總量轉成假分數，保持公斤單位。",
      "用總量除以每罐量，將除法改成乘除數倒數並約分。",
      "以罐數乘每罐容量，確認回到原總量且沒有剩餘。"
    ]
  },
  {
    "questionId": "u02-s010-cr002",
    "unitId": "u02",
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某數先乘 5/6，再除以 3/4，結果為 70。求原數並代回驗證。",
    "requiredWork": [
      "設未知數或逆運算。",
      "代回原流程。"
    ],
    "fullCreditSolution": [
      "設原數為 x，依流程列式 x×5/6÷3/4=70；除以 3/4 改為乘 4/3。",
      "化簡整體乘數為九分之十，得到九分之十乘 x 等於七十，因此原數 x=63。",
      "代回驗證：63×5/6=105/2，再除以 3/4 即乘 4/3，結果為 70。"
    ],
    "alternativeSolutions": [
      "可由70先乘3/4再除5/6：70×3/4×6/5=63。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "x=63且完整代回。"
      },
      {
        "score": 2,
        "criteria": "答案正確但驗證略缺。"
      },
      {
        "score": 1,
        "criteria": "逆運算方向基本正確但算錯。"
      },
      {
        "score": 0,
        "criteria": "直接把70當原數。"
      }
    ],
    "scoringNotes": [
      "可全程用分數避免小數。"
    ],
    "commonErrors": [
      "逆運算時交換兩步順序，沒有先把原流程寫成完整等式。",
      "將除以四分之三又誤寫成除以三分之四一次，沒有改乘倒數。",
      "用小數五十二點五驗證到一半便停止，未完成最後除法回到七十。"
    ],
    "independentReview": {
      "derivedResult": "原數63。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "2192c4e5c10c59e01bb11b5d8cee234432a02506d8c2e4a895486d4cc206eb1c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "依原流程順序建立含未知數的乘除等式。",
      "把除法改成乘倒數並化簡整體係數，再解一次方程式。",
      "將六十三代回原先先乘後除的流程，確認結果確實為七十。"
    ]
  }
];

export const DRAWING_SPECS = [];
