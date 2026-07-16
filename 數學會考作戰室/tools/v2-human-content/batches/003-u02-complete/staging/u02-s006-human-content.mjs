// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u02-s006-lecture-r1",
  "unitId": "u02",
  "topicId": "u02-factors-apps",
  "skillId": "fraction-gcd-application",
  "title": "最大公因數應用：把最多分組和最長切割與最大正方形翻成 GCD",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能從『最多相同組』辨認GCD模型。",
    "能從『最長等段且不剩』辨認GCD模型。",
    "能求每組內容、總段數或正方形塊數。",
    "能分清問題問的是組數、每組數量或單位長度。"
  ],
  "prerequisites": [
    {
      "skillId": "fraction-lcm-basic",
      "requiredLevel": "能計算GCD與LCM，並知道GCD是共同整除的最大單位。"
    }
  ],
  "glossary": [
    {
      "term": "最大分組",
      "definition": "在全部用完且每組內容相同下，使組數最多。"
    },
    {
      "term": "最大切割單位",
      "definition": "能整除所有原長且數值最大的段長。"
    },
    {
      "term": "鋪滿",
      "definition": "不重疊、不裁切且沒有空隙。"
    },
    {
      "term": "每組內容",
      "definition": "各類總量除以組數後所得數量。"
    }
  ],
  "notation": [
    {
      "symbol": "gcd(a,b)",
      "meaning": "可作為最大組數或最大單位長度。"
    }
  ],
  "conceptNarrative": [
    "最大公因數應用的共同結構是「同時整除且要求最大」。最多相同分組時，組數要整除每一類總量；最長等段或最大正方形邊長則要整除每一個原長度。",
    "求出 GCD 後要辨認它在情境中的單位：可能是包數、隊數、段長或正方形邊長，不一定就是題目最終答案。若問每組內容，要以各總量除以組數；若問總段數，要把各商相加。",
    "平面鋪面要分別計算長、寬方向塊數後相乘，面積則用邊長平方。多類物品或三個長度必須全部納入 GCD，計算前也要先統一公分、公尺等單位。"
  ],
  "formalDefinitions": [
    {
      "name": "最大相同組數",
      "statement": "同時整除所有物品總量的最大正整數。"
    },
    {
      "name": "最大正方形邊長",
      "statement": "同時整除長與寬的最大正整數。"
    }
  ],
  "formulas": [],
  "nonApplicableCases": [
    "題目只說平均分但未說最多時，可能有多個可行組數。",
    "題目允許剩餘或裁切時，不一定使用GCD。",
    "問總塊數時不能只答邊長。",
    "不同長度單位要先統一。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "圈出所有需平均分配的總量或需完整切割的邊長，先統一單位。",
      "check": "多類物品與每一條邊都已列入，沒有只取其中兩個。"
    },
    {
      "step": 2,
      "instruction": "由最多、最長、相同且不剩餘等關鍵詞，確認模型是求最大公因數。",
      "check": "候選量必須同時整除所有原量，而不是求共同倍數。"
    },
    {
      "step": 3,
      "instruction": "用質因數分解或短除法計算全部原量的 GCD。",
      "check": "將結果逐一除回原量，確認每個商都是整數且沒有更大共同因數。"
    },
    {
      "step": 4,
      "instruction": "依問句決定後續：求每組內容、各方向段數、總塊數或面積。",
      "check": "先標記 GCD 的單位，避免把組數、邊長和每組總數混用。"
    },
    {
      "step": 5,
      "instruction": "把每組數乘組數或把鋪面排列乘回，驗證全部用完、剪完或鋪滿。",
      "check": "答案含正確單位，且每一類原量都能由結果完整重建。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u02-s006-example-a",
      "prompt": "45 枝麥克筆與 75 張貼紙做最多份相同材料包。",
      "solutionSteps": [
        "計算 gcd(45,75)=15，得到最多可做十五包。",
        "分別計算 45÷15=3、75÷15=5，並乘回核對總量。"
      ],
      "answer": "15 包，每包 3 枝麥克筆與 5 張貼紙。",
      "why": "最多包數要同時整除四十五與七十五，所以取最大公因數十五。再用兩個總量除以十五，得到每包三枝與五張；乘回可確認全部用完。"
    },
    {
      "exampleId": "u02-s006-example-b",
      "prompt": "108 公分與 180 公分電線剪成最長等段，總共幾段？",
      "solutionSteps": [
        "求兩長度最大公因數 gcd(108,180)=36，確定最長段長。",
        "計算 108÷36=3、180÷36=5，再將兩條電線段數相加得八段。"
      ],
      "answer": "每段 36 公分，共 8 段。",
      "why": "最長段長是兩數最大公因數三十六。兩條電線分別可剪三段與五段，題目問總段數，因此要把兩個商相加得到八段，而不是回答三十六段。"
    },
    {
      "exampleId": "u02-s006-example-c",
      "prompt": "132×180 公分地面鋪最大正方形磁磚，共需幾塊？",
      "solutionSteps": [
        "求 gcd(132,180)=12，得到最大正方形邊長十二公分。",
        "長寬方向分別為 132÷12=11、180÷12=15，總數 11×15=165。"
      ],
      "answer": "邊長 12 公分，共 165 塊。",
      "why": "磁磚最大邊長是兩邊長的最大公因數十二。長方向一百三十二除以十二得十一塊，寬方向得十五塊，平面總數為十一乘十五等於一百六十五。"
    },
    {
      "exampleId": "u02-s006-example-d",
      "prompt": "150×210 公分展板鋪最大正方形紙片，共需幾張？",
      "solutionSteps": [
        "計算 gcd(150,210)=30，最大紙片邊長為三十公分。",
        "兩方向張數為 150÷30=5、210÷30=7，相乘得 35 張。"
      ],
      "answer": "邊長 30 公分，共 35 張。",
      "why": "最大正方形邊長必須同時整除展板長與寬，所以取一百五十與二百一十的最大公因數三十。五列乘七行，總共需要三十五張。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "求出最大公因數後，不看單位就直接當成最終答案。",
      "correction": "先寫它代表包數、段長或邊長，再依問句完成每組內容、段數或面積。"
    },
    {
      "mistake": "三類物品只取前兩類求最大公因數。",
      "correction": "最多相同分組必須同時整除全部類別，任何一類遺漏都可能改變答案。"
    },
    {
      "mistake": "平面長方向與寬方向塊數相加。",
      "correction": "平面是行列排列，總塊數應以兩方向塊數相乘。"
    },
    {
      "mistake": "選擇能整除的較小數，沒有滿足最多或最長。",
      "correction": "除了可行性，還要證明候選是共同因數中的最大值。"
    },
    {
      "mistake": "公尺與公分未統一就直接做整數最大公因數。",
      "correction": "先換成相同的整數單位，再求 GCD 並把答案單位換回情境。"
    },
    {
      "mistake": "求兩條材料的總段數時，只計算其中一個長度除以段長的商。",
      "correction": "先分別求每條材料的段數，再依題意把所有段數相加。"
    }
  ],
  "selfCheck": [
    "關鍵詞是否明確指向GCD？",
    "GCD在本題代表什麼單位？",
    "是否還有第二步？",
    "所有物品是否全部用完？",
    "平面塊數是否用乘法？"
  ],
  "summary": [
    "最多相同組數、最長等段與最大正方形邊長都是GCD模型。",
    "GCD常只是中間量。",
    "每組內容用總量除組數。",
    "總塊數依一維加總或二維相乘。"
  ],
  "connections": {
    "previous": "先備技能為 fraction-lcm-basic，需能完成其基本判斷與計算。",
    "next": [
      "最小公倍數應用處理再次同步。",
      "分數運算會使用GCD約分。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u02-s006-v001",
      "u02-s006-v002",
      "u02-s006-v003",
      "u02-s006-v004",
      "u02-s006-v005",
      "u02-s006-v006",
      "u02-s006-v007",
      "u02-s006-v008",
      "u02-s006-v009",
      "u02-s006-v010",
      "u02-s006-v011",
      "u02-s006-v012"
    ],
    "constructedResponseIds": [
      "u02-s006-cr001",
      "u02-s006-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐一以物品數除組數、原長除段長與牆面長寬除邊長驗算；42包、24公分與35塊均能還原原始數量且無剩餘。",
    "reviewVersion": "human-lecture-review-r3.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "165abdd7938255e9a8441fb2448c2c66af0d46c996aba79d2e6ea66cb86dabea",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u02-s006-v001",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-gcd-application",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "有 24 顆蘋果和 36 顆橘子，要分成內容相同且全部用完的最多袋數。最多可分幾袋？",
    "choices": [
      "12 袋",
      "6 袋",
      "18 袋",
      "24 袋"
    ],
    "answerIndex": 0,
    "explanation": "袋數必須同時整除二十四顆蘋果與三十六顆橘子，才能使每袋內容相同且全部用完。二十四與三十六的最大公因數是十二，因此最多可分十二袋。",
    "steps": [
      "把最多袋數辨認為 24 與 36 的共同因數問題。",
      "計算 gcd(24,36)=12，並確認 12 同時整除兩數。",
      "每袋可分得 2 顆蘋果與 3 顆橘子，所以答案為 12 袋。"
    ],
    "optionAnalysis": [
      {
        "choice": "12 袋",
        "truth": true,
        "reason": "12是最大共同因數。"
      },
      {
        "choice": "6 袋",
        "truth": false,
        "reason": "6可行但不是最多。"
      },
      {
        "choice": "18 袋",
        "truth": false,
        "reason": "18不能整除24。"
      },
      {
        "choice": "24 袋",
        "truth": false,
        "reason": "24不能整除36。"
      }
    ],
    "commonMistake": "只找出可行的六袋就停止，沒有確認還能用更大的共同因數十二。",
    "concept": "最多相同組數等於各數量的 GCD。",
    "tags": [
      "數與量",
      "最大公因數應用",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-basic"
    ],
    "authoringIntent": "辨認最大分組模型。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "dfd0483f15190a991d07028345afaf5fb84d6f2977b2682eeda67d0dfea1a536",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s006-v002",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-gcd-application",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩條繩子分別長 30 公分與 45 公分，要剪成等長且最長的小段。每段長多少？",
    "choices": [
      "5 公分",
      "15 公分",
      "10 公分",
      "30 公分"
    ],
    "answerIndex": 1,
    "explanation": "每段長度要同時整除三十公分與四十五公分，才能使兩條繩子都沒有剩餘；題目又要求最長，所以取兩數的最大公因數十五。每段長十五公分。",
    "steps": [
      "將等長且最長、不剩餘轉成求 gcd(30,45)。",
      "列出共同因數並取最大值，得到 gcd(30,45)=15。",
      "驗算 30÷15=2、45÷15=3，兩條繩子都能完整剪完。"
    ],
    "optionAnalysis": [
      {
        "choice": "5 公分",
        "truth": false,
        "reason": "5可行但不是最長。"
      },
      {
        "choice": "15 公分",
        "truth": true,
        "reason": "15是最大共同因數。"
      },
      {
        "choice": "10 公分",
        "truth": false,
        "reason": "10不能整除45。"
      },
      {
        "choice": "30 公分",
        "truth": false,
        "reason": "30不能整除45。"
      }
    ],
    "commonMistake": "選五公分雖然可以剪完，卻忽略題目要求的是所有可行段長中最長者。",
    "concept": "最長等段長是原長度的 GCD。",
    "tags": [
      "數與量",
      "最大公因數應用",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-basic"
    ],
    "authoringIntent": "辨認最大切割模型。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0c828ff93c37f13a3b9b39cf5853a3db949fa12367aefe608d35b0b7b5ecb598",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s006-v003",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-gcd-application",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一張 42 公分×56 公分的紙，要裁成不重疊、無剩餘且邊長最大的正方形。正方形邊長為何？",
    "choices": [
      "7 公分",
      "12 公分",
      "14 公分",
      "28 公分"
    ],
    "answerIndex": 2,
    "explanation": "正方形邊長必須同時整除紙張的四十二公分與五十六公分，才可不重疊且無剩餘鋪滿。兩邊長的最大公因數為十四，所以最大正方形邊長是十四公分。",
    "steps": [
      "把最大正方形邊長轉成求 gcd(42,56)。",
      "計算 gcd(42,56)=14，確認沒有更大的共同因數。",
      "驗算 42÷14=3、56÷14=4，能排成 3×4 個完整正方形。"
    ],
    "optionAnalysis": [
      {
        "choice": "7 公分",
        "truth": false,
        "reason": "7可行但不是最大。"
      },
      {
        "choice": "12 公分",
        "truth": false,
        "reason": "12不能整除42、56。"
      },
      {
        "choice": "14 公分",
        "truth": true,
        "reason": "14是最大共同因數。"
      },
      {
        "choice": "28 公分",
        "truth": false,
        "reason": "28不能整除42。"
      }
    ],
    "commonMistake": "看到二十八是五十六的因數就選它，未檢查二十八不能整除四十二。",
    "concept": "最大正方形邊長是長寬 GCD。",
    "tags": [
      "數與量",
      "最大公因數應用",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-basic"
    ],
    "authoringIntent": "辨認鋪面模型。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "95b3c9601fbe952eb6c6b6b6650f5333b221b5a0a52646dbb7aa1a6ea093c83d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s006-v004",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-gcd-application",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "48 枝紅筆與 60 枝藍筆分成最多個相同文具包。每包共有幾枝筆？",
    "choices": [
      "5 枝",
      "8 枝",
      "10 枝",
      "9 枝"
    ],
    "answerIndex": 3,
    "explanation": "最多相同文具包的包數是四十八與六十的最大公因數十二。每包紅筆四十八除以十二得四枝，藍筆六十除以十二得五枝，合計每包九枝。",
    "steps": [
      "先求最多包數 gcd(48,60)=12。",
      "分別計算每包紅筆 48÷12=4 枝、藍筆 60÷12=5 枝。",
      "題目問每包總數，所以相加 4+5=9 枝。"
    ],
    "optionAnalysis": [
      {
        "choice": "5 枝",
        "truth": false,
        "reason": "5只算藍筆數。"
      },
      {
        "choice": "8 枝",
        "truth": false,
        "reason": "8不是兩種每包數量之和。"
      },
      {
        "choice": "10 枝",
        "truth": false,
        "reason": "10是未依最大包數分配。"
      },
      {
        "choice": "9 枝",
        "truth": true,
        "reason": "4+5=9枝。"
      }
    ],
    "commonMistake": "求出最大公因數十二後直接當每包枝數，混淆包數與每包內容。",
    "concept": "GCD 決定組數，每組內容用各總量除以組數。",
    "tags": [
      "數與量",
      "最大公因數應用",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-basic"
    ],
    "authoringIntent": "由最大分組求每組內容。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "955a8f4e2b15e6818ba6bc497f03cc5ea5967d4867d44dd6325c2b9ae1eb026e",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s006-v005",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-gcd-application",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "有 72 位男生與 90 位女生，要分成若干隊，每隊男、女生人數分別相同且隊數最多。最多分幾隊？",
    "choices": [
      "18 隊",
      "9 隊",
      "12 隊",
      "36 隊"
    ],
    "answerIndex": 0,
    "explanation": "隊數要同時整除七十二位男生與九十位女生，才能讓每隊男女生人數分別相同。兩數最大公因數為十八，所以最多分十八隊；每隊有四位男生與五位女生。",
    "steps": [
      "把最多隊數列為 gcd(72,90)。",
      "計算 gcd(72,90)=18，確認 18 同時整除兩個總人數。",
      "驗算每隊 72÷18=4 位男生、90÷18=5 位女生。"
    ],
    "optionAnalysis": [
      {
        "choice": "18 隊",
        "truth": true,
        "reason": "18是最大共同因數。"
      },
      {
        "choice": "9 隊",
        "truth": false,
        "reason": "9可行但不是最多。"
      },
      {
        "choice": "12 隊",
        "truth": false,
        "reason": "12不能整除90。"
      },
      {
        "choice": "36 隊",
        "truth": false,
        "reason": "36不能整除90。"
      }
    ],
    "commonMistake": "選九隊雖然也能平均分，卻沒有繼續尋找更大的共同因數十八。",
    "concept": "最多相同隊數就是人數的 GCD。",
    "tags": [
      "數與量",
      "最大公因數應用",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-basic"
    ],
    "authoringIntent": "處理兩類人員分隊。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b4def087fff371464ccb9406fe91a4864bdea0e188f4f250a3936218bcfd738f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s006-v006",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-gcd-application",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長 84 公分、寬 60 公分的長方形地板，用最大正方形磁磚鋪滿。長邊排幾塊？",
    "choices": [
      "5 塊",
      "7 塊",
      "12 塊",
      "14 塊"
    ],
    "answerIndex": 1,
    "explanation": "最大正方形磁磚邊長為八十四與六十的最大公因數十二公分。題目問長邊排列數，因此用長邊八十四除以十二，得到七塊；五塊是寬邊的排列數。",
    "steps": [
      "先求磁磚最大邊長 gcd(84,60)=12 公分。",
      "辨認題目只問長邊，而長邊長度是 84 公分。",
      "計算 84÷12=7，得到長邊排 7 塊。"
    ],
    "optionAnalysis": [
      {
        "choice": "5 塊",
        "truth": false,
        "reason": "5是寬邊塊數。"
      },
      {
        "choice": "7 塊",
        "truth": true,
        "reason": "長邊排7塊。"
      },
      {
        "choice": "12 塊",
        "truth": false,
        "reason": "12是磁磚邊長。"
      },
      {
        "choice": "14 塊",
        "truth": false,
        "reason": "14是錯用6公分。"
      }
    ],
    "commonMistake": "算出寬邊六十除以十二等於五後作答，沒有辨認題目問的是長邊。",
    "concept": "先求最大邊長，再用邊長相除求塊數。",
    "tags": [
      "數與量",
      "最大公因數應用",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-basic"
    ],
    "authoringIntent": "兩步鋪面計算。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "983bd0b9b7a8b231f97e1230951cf671458f219e41ce7fab6748c21f77d77cf7",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s006-v007",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-gcd-application",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三卷緞帶長 96、120、168 公分，要剪成等長且最長的小段。總共可剪成幾段？",
    "choices": [
      "12 段",
      "14 段",
      "16 段",
      "18 段"
    ],
    "answerIndex": 2,
    "explanation": "最長等長小段為九十六、一百二十、一百六十八的最大公因數二十四公分。三卷分別剪成四、五、七段，題目問總段數，所以相加得到十六段。",
    "steps": [
      "計算 gcd(96,120,168)=24，得到每段最長 24 公分。",
      "分別求段數 96÷24=4、120÷24=5、168÷24=7。",
      "將三卷段數相加 4+5+7=16 段。"
    ],
    "optionAnalysis": [
      {
        "choice": "12 段",
        "truth": false,
        "reason": "只算前兩卷會不足。"
      },
      {
        "choice": "14 段",
        "truth": false,
        "reason": "14不是三卷段數總和。"
      },
      {
        "choice": "16 段",
        "truth": true,
        "reason": "4+5+7=16。"
      },
      {
        "choice": "18 段",
        "truth": false,
        "reason": "18來自錯誤段長。"
      }
    ],
    "commonMistake": "只把前兩卷段數相加，漏掉第三卷一百六十八公分可剪出的七段。",
    "concept": "多數切割先求 GCD，再加總各段數。",
    "tags": [
      "數與量",
      "最大公因數應用",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-basic"
    ],
    "authoringIntent": "求最大切割後的總段數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0db2f0f789895177d0d25c26c28798f4670775e3dfbcb52dc6e306a77bee4aa1",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s006-v008",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-gcd-application",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一面 144 公分×96 公分的牆，用邊長最大的正方形板材鋪滿。共需幾塊？",
    "choices": [
      "4 塊",
      "8 塊",
      "12 塊",
      "6 塊"
    ],
    "answerIndex": 3,
    "explanation": "最大正方形板材邊長是一百四十四與九十六的最大公因數四十八公分。長方向排三塊、寬方向排兩塊，平面總塊數要相乘，得到六塊。",
    "steps": [
      "求 gcd(144,96)=48，得到板材最大邊長 48 公分。",
      "計算長方向 144÷48=3 塊、寬方向 96÷48=2 塊。",
      "平面排列數相乘 3×2=6，得到共需 6 塊。"
    ],
    "optionAnalysis": [
      {
        "choice": "4 塊",
        "truth": false,
        "reason": "4只相加錯誤。"
      },
      {
        "choice": "8 塊",
        "truth": false,
        "reason": "8來自邊長24的非最大方案。"
      },
      {
        "choice": "12 塊",
        "truth": false,
        "reason": "12同樣使用較小板材。"
      },
      {
        "choice": "6 塊",
        "truth": true,
        "reason": "3×2=6塊。"
      }
    ],
    "commonMistake": "把長方向三塊與寬方向兩塊相加，未理解牆面是三列乘兩行的排列。",
    "concept": "鋪滿總塊數等於長方向塊數乘寬方向塊數。",
    "tags": [
      "數與量",
      "最大公因數應用",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-basic"
    ],
    "authoringIntent": "最大正方形鋪面總數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "fec279e9bd95a575d5953f4cb4bd92fe47bdbff0749ed6acb7f836c3271564d2",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s006-v009",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-gcd-application",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "有 105 顆白珠、140 顆黑珠與175顆金珠，分成最多個相同組合包。每包共有幾顆珠子？",
    "choices": [
      "12 顆",
      "10 顆",
      "15 顆",
      "20 顆"
    ],
    "answerIndex": 0,
    "explanation": "最多組合包數是一百零五、一百四十、一百七十五的最大公因數三十五。每包白珠三顆、黑珠四顆、金珠五顆，三類相加為十二顆。",
    "steps": [
      "計算 gcd(105,140,175)=35，得到最多 35 包。",
      "分別計算每包白珠 3 顆、黑珠 4 顆、金珠 5 顆。",
      "題目問每包總數，將三類相加 3+4+5=12 顆。"
    ],
    "optionAnalysis": [
      {
        "choice": "12 顆",
        "truth": true,
        "reason": "gcd(105,140,175)=35；每包白珠3顆、黑珠4顆、金珠5顆，共12顆。"
      },
      {
        "choice": "10 顆",
        "truth": false,
        "reason": "依最多35包分配後應為3+4+5=12顆，10顆不是三類每包數量的總和。"
      },
      {
        "choice": "15 顆",
        "truth": false,
        "reason": "15顆無法由105÷35、140÷35、175÷35三個商相加得到。"
      },
      {
        "choice": "20 顆",
        "truth": false,
        "reason": "20顆不是最多35包時的每包總數，乘回35也不符合三類原始數量。"
      }
    ],
    "commonMistake": "求出三十五包後只計算其中兩種珠子，漏掉第三類便得到錯誤總數。",
    "concept": "GCD 給包數，各類數量除以包數後再加總。",
    "tags": [
      "數與量",
      "最大公因數應用",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-basic"
    ],
    "authoringIntent": "三類物品最大分組。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6ea7cdacff43527b4341402067e4180afacb9236a5a0f5f34f4931fe27559e44",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s006-v010",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-gcd-application",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "學校有 54 盒彩色筆與 72 本筆記本，要做最多份內容相同的獎品且全部用完。每份各有多少？",
    "choices": [
      "4盒彩色筆、3本筆記本",
      "3盒彩色筆、4本筆記本",
      "6盒彩色筆、8本筆記本",
      "9盒彩色筆、12本筆記本"
    ],
    "answerIndex": 1,
    "explanation": "最多獎品份數為五十四與七十二的最大公因數十八。每份彩色筆五十四除以十八得三盒，筆記本七十二除以十八得四本，因此每份是三盒與四本。",
    "steps": [
      "先求最多份數 gcd(54,72)=18。",
      "計算彩色筆每份 54÷18=3 盒。",
      "計算筆記本每份 72÷18=4 本，對應正確選項。"
    ],
    "optionAnalysis": [
      {
        "choice": "4盒彩色筆、3本筆記本",
        "truth": false,
        "reason": "兩種數量對調。"
      },
      {
        "choice": "3盒彩色筆、4本筆記本",
        "truth": true,
        "reason": "3盒與4本正確。"
      },
      {
        "choice": "6盒彩色筆、8本筆記本",
        "truth": false,
        "reason": "這是分成9份。"
      },
      {
        "choice": "9盒彩色筆、12本筆記本",
        "truth": false,
        "reason": "這是分成6份。"
      }
    ],
    "commonMistake": "把兩種每份數量對調，沒有將五十四與彩色筆、七十二與筆記本正確配對。",
    "concept": "最大獎品份數為 GCD，再分別相除。",
    "tags": [
      "數與量",
      "最大公因數應用",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-basic"
    ],
    "authoringIntent": "獎品包內容計算。",
    "literacyContextNecessity": "兩種物品總量、全部用完與最多份數共同決定 GCD，再決定每份內容。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "719b3e995d39e43ea274785faa8f6e4bae03ef202e798662564534d076f348a6",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s006-v011",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-gcd-application",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一塊 90 公分×150 公分的布，要裁成最大正方形桌墊且不剩。每塊桌墊面積是多少？",
    "choices": [
      "225 平方公分",
      "400 平方公分",
      "900 平方公分",
      "2500 平方公分"
    ],
    "answerIndex": 2,
    "explanation": "最大正方形桌墊邊長是九十與一百五十的最大公因數三十公分。題目問每塊面積，需用邊長乘邊長，三十平方等於九百平方公分。",
    "steps": [
      "計算 gcd(90,150)=30，得到最大正方形邊長 30 公分。",
      "套用正方形面積公式，列式 30×30。",
      "計算 30²=900，附上面積單位平方公分。"
    ],
    "optionAnalysis": [
      {
        "choice": "225 平方公分",
        "truth": false,
        "reason": "15²才是225。"
      },
      {
        "choice": "400 平方公分",
        "truth": false,
        "reason": "20²才是400。"
      },
      {
        "choice": "900 平方公分",
        "truth": true,
        "reason": "30²=900。"
      },
      {
        "choice": "2500 平方公分",
        "truth": false,
        "reason": "50不能整除90。"
      }
    ],
    "commonMistake": "求出邊長三十後直接選數值三十，沒有依問句繼續計算正方形面積。",
    "concept": "先用 GCD 求邊長，再平方求面積。",
    "tags": [
      "數與量",
      "最大公因數應用",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-basic"
    ],
    "authoringIntent": "最大正方形面積。",
    "literacyContextNecessity": "布的長寬、最大正方形與面積要求形成兩步計算，不能只保留數字。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "17206528962087529ad8cbbc839f7a9acd37c692fdb0ee9e87beac6d52488476",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s006-v012",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-gcd-application",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "烘焙坊有 80 個蛋黃酥、96 個鳳梨酥與112個綠豆椪，要裝成最多盒相同禮盒。每盒甜點總數是多少？",
    "choices": [
      "12 個",
      "14 個",
      "16 個",
      "18 個"
    ],
    "answerIndex": 3,
    "explanation": "最多禮盒數為八十、九十六、一百一十二的最大公因數十六。每盒三類甜點分別有五、六、七個，題目問每盒總數，因此相加得到十八個。",
    "steps": [
      "計算 gcd(80,96,112)=16，得到最多 16 盒。",
      "分別求每盒數量 80÷16=5、96÷16=6、112÷16=7。",
      "將三類甜點相加 5+6+7=18 個。"
    ],
    "optionAnalysis": [
      {
        "choice": "12 個",
        "truth": false,
        "reason": "12少算一類。"
      },
      {
        "choice": "14 個",
        "truth": false,
        "reason": "14不是商的總和。"
      },
      {
        "choice": "16 個",
        "truth": false,
        "reason": "16是盒數，不是每盒總數。"
      },
      {
        "choice": "18 個",
        "truth": true,
        "reason": "5+6+7=18。"
      }
    ],
    "commonMistake": "把最大公因數十六當成每盒總數，混淆盒數與每盒三類甜點的合計。",
    "concept": "三類最大分組後須把每類每盒數量相加。",
    "tags": [
      "數與量",
      "最大公因數應用",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-basic"
    ],
    "authoringIntent": "禮盒最大分組與內容。",
    "literacyContextNecessity": "三種庫存、相同禮盒、最多盒及求每盒總數共同決定完整兩步解法。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a7238bb5da7ddc0a069f19bdd8dd55a72befe3a65d564abc962a1f3808def5b0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u02-s006-cr001",
    "unitId": "u02",
    "topicId": "u02-factors-apps",
    "skillId": "fraction-gcd-application",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "有 84 枝鉛筆、126 枝原子筆和 210 塊橡皮擦，要裝成最多份內容相同的文具包。求包數與每包內容。",
    "requiredWork": [
      "先求三數GCD。",
      "分別求每包數量。",
      "說明全部用完。"
    ],
    "fullCreditSolution": [
      "最多包數要同時整除三類總量，因此計算 gcd(84,126,210)=42，得到最多 42 包。",
      "每包鉛筆 84÷42=2 枝、原子筆 126÷42=3 枝、橡皮擦 210÷42=5 塊。",
      "每包共 2+3+5=10 件；乘回 42 包分別恢復三個總量，證明全部用完。"
    ],
    "alternativeSolutions": [
      "可用質因數分解：共同2×3×7=42。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "42包及2、3、5內容完整並驗證。"
      },
      {
        "score": 2,
        "criteria": "包數正確且每包內容僅一處錯。"
      },
      {
        "score": 1,
        "criteria": "知道用GCD並得到一個正確中間量。"
      },
      {
        "score": 0,
        "criteria": "使用LCM或無法平均分配。"
      }
    ],
    "scoringNotes": [
      "單位分別為枝、枝、塊。"
    ],
    "commonErrors": [
      "把最大公因數四十二當成每包總件數，混淆包數與每包內容。",
      "只求八十四與一百二十六的最大公因數，沒有檢查橡皮擦也須平均分。",
      "求出每包二、三、五件後沒有回答包數，或未說明三類都能全部用完。"
    ],
    "independentReview": {
      "derivedResult": "42包；每包2枝鉛筆、3枝原子筆、5塊橡皮擦。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "4e0ccbde866bf8e69205dd9b7280010f780c48946b7c9b543ce31c0403753b13",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "先把最多相同文具包辨認為三個總量的最大公因數。",
      "用各總量除以包數，求出每包三類文具的數量。",
      "相加得每包總件數，並用每包數乘包數逐類驗算。"
    ]
  },
  {
    "questionId": "u02-s006-cr002",
    "unitId": "u02",
    "topicId": "u02-factors-apps",
    "skillId": "fraction-gcd-application",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "一面長 168 公分、寬 120 公分的牆，用邊長最大的正方形瓷磚鋪滿。求瓷磚邊長與總塊數。",
    "requiredWork": [
      "求長寬GCD。",
      "分別求長寬方向塊數。",
      "總塊數用乘法。"
    ],
    "fullCreditSolution": [
      "最大正方形瓷磚邊長須同時整除 168 與 120，故為 gcd(168,120)=24 公分。",
      "長方向排 168÷24=7 塊，寬方向排 120÷24=5 塊。",
      "牆面為七列乘五行，總塊數 7×5=35 塊，且兩方向都沒有剩餘。"
    ],
    "alternativeSolutions": [
      "可先分解168=2³×3×7、120=2³×3×5。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "邊長24與35塊均正確且步驟完整。"
      },
      {
        "score": 2,
        "criteria": "邊長正確但總塊數運算小錯。"
      },
      {
        "score": 1,
        "criteria": "能辨認GCD並求出可行共同邊長。"
      },
      {
        "score": 0,
        "criteria": "邊長不能整除長寬或使用LCM。"
      }
    ],
    "scoringNotes": [
      "總塊數不是7+5。"
    ],
    "commonErrors": [
      "把瓷磚邊長二十四公分誤寫成總共二十四塊。",
      "將長方向七塊與寬方向五塊相加成十二，未使用平面排列的乘法。",
      "採用可整除但較小的瓷磚邊長，沒有滿足題目要求的邊長最大。"
    ],
    "independentReview": {
      "derivedResult": "邊長24公分，共35塊。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "1ccb1d9bd0d7f308d1571cf83f1a9bb3283d96c9b86a4f940124113e9af9bcba",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "先用長寬的最大公因數求最大瓷磚邊長。",
      "分別用牆面長、寬除以瓷磚邊長，得到兩方向塊數。",
      "將兩方向排列數相乘求平面總塊數，並檢查完全鋪滿。"
    ]
  }
];

export const DRAWING_SPECS = [];
