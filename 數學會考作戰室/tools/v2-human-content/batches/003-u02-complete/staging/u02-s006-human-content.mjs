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
    "『最多組且每組相同』表示組數要同時整除各總量，故取GCD。",
    "『最長小段且不剩』表示段長要同時整除各原長，故取GCD。",
    "求出GCD後仍要依題目繼續：問每組內容就相除，問總段數就把各商相加，問鋪面塊數就把長寬方向商相乘。",
    "GCD是中間量還是最終答案，必須由題目問句判斷。"
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
      "instruction": "圈出所有總量或邊長。",
      "check": "是否同單位？"
    },
    {
      "step": 2,
      "instruction": "找關鍵詞最多、最長、不剩、相同。",
      "check": "是否符合GCD模型？"
    },
    {
      "step": 3,
      "instruction": "計算GCD。",
      "check": "結果能否整除全部量？"
    },
    {
      "step": 4,
      "instruction": "依問句做後續除法。",
      "check": "問組數、每組內容、段數還是面積？"
    },
    {
      "step": 5,
      "instruction": "放回情境驗算。",
      "check": "全部是否用完、鋪滿或剪完？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "36顆紅球與48顆藍球做最多相同袋。",
      "solutionSteps": [
        "gcd(36,48)=12。",
        "每袋紅3、藍4。"
      ],
      "answer": "12袋，每袋7顆。"
    },
    {
      "exampleId": "L2",
      "prompt": "90與150公分繩剪最長等段。",
      "solutionSteps": [
        "gcd=30。",
        "段數3+5=8。"
      ],
      "answer": "每段30公分，共8段。"
    },
    {
      "exampleId": "L3",
      "prompt": "120×168公分牆鋪最大正方形。",
      "solutionSteps": [
        "gcd=24。",
        "長5塊、寬7塊。"
      ],
      "answer": "邊長24公分，共35塊。"
    },
    {
      "exampleId": "L4",
      "prompt": "84、126、210件物品做最多禮盒。",
      "solutionSteps": [
        "三數gcd=42。",
        "每盒2、3、5件。"
      ],
      "answer": "42盒，每盒10件。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把GCD當每組物品數。",
      "why": "未看清GCD代表組數。",
      "correction": "先寫單位：袋、段或公分。"
    },
    {
      "mistake": "求段長後未求總段數。",
      "why": "問句要求第二步。",
      "correction": "各長度除以段長再加總。"
    },
    {
      "mistake": "鋪面塊數用長商加寬商。",
      "why": "平面排列應相乘。",
      "correction": "長方向塊數×寬方向塊數。"
    },
    {
      "mistake": "只使用兩個數，漏掉第三類物品。",
      "why": "多類分組需共同整除全部。",
      "correction": "計算多數GCD。"
    },
    {
      "mistake": "選到可行但不是最大的數。",
      "why": "忽略最多或最長。",
      "correction": "確認沒有更大共同因數。"
    },
    {
      "mistake": "公分與公尺直接求GCD。",
      "why": "單位不一致。",
      "correction": "先換成同一整數單位。"
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
  "contentSha256": "749a9e0dcbf068525cc72f822f7143bc41cfa432b3255f4dae787371e6632017",
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
    "explanation": "依題意逐步處理：袋數必須同時整除24和36；gcd(24,36)=12。所以答案是「12 袋」。",
    "steps": [
      "袋數必須同時整除24和36",
      "gcd(24,36)=12"
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
    "commonMistake": "把每袋水果總數當作袋數。",
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
    "contentSha256": "f2888477954363f89618281965f6b8299ed4b03dec0e7e0391651e5b829863c0",
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
    "explanation": "依題意逐步處理：段長要同時整除30與45；gcd(30,45)=15。所以答案是「15 公分」。",
    "steps": [
      "段長要同時整除30與45",
      "gcd(30,45)=15"
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
    "commonMistake": "看到共同因數就停止，未找最大。",
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
    "contentSha256": "c17071fa236f817445d7a309607850fa664af57e4f132517571e54f0a6e59f67",
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
    "explanation": "依題意逐步處理：邊長須同時整除42與56；gcd(42,56)=14。所以答案是「14 公分」。",
    "steps": [
      "邊長須同時整除42與56",
      "gcd(42,56)=14"
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
    "commonMistake": "以面積開平方，忽略長寬都要整除。",
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
    "contentSha256": "11525a1b02e9b95b20b2dd4c9ac61f5d7cb6e25324b0a56d904e8a4108e753ec",
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
    "explanation": "依題意逐步處理：最多包數gcd(48,60)=12；每包紅4枝、藍5枝，共9枝。所以答案是「9 枝」。",
    "steps": [
      "最多包數gcd(48,60)=12",
      "每包紅4枝、藍5枝，共9枝"
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
    "commonMistake": "先求包數後忘記分別除，再相加。",
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
    "contentSha256": "49309ffa403814a53c047cd91609e382fe80c4a06fc006e4008e10ba4f8f69d9",
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
    "explanation": "依題意逐步處理：隊數同時整除72與90；gcd=18。所以答案是「18 隊」。",
    "steps": [
      "隊數同時整除72與90",
      "gcd=18"
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
    "commonMistake": "把每隊人數和隊數混淆。",
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
    "contentSha256": "fd560c28ffe69ecee544909f87549086c2c4dca7912a1d738bce5a65de5a6742",
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
    "explanation": "依題意逐步處理：最大邊長gcd(84,60)=12公分；長邊84÷12=7塊。所以答案是「7 塊」。",
    "steps": [
      "最大邊長gcd(84,60)=12公分",
      "長邊84÷12=7塊"
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
    "commonMistake": "求出 GCD 後直接把它當塊數。",
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
    "contentSha256": "1726ce3846a0a66485a11b411b4601b5df07c1a837fd1ebff20b0a08475969a7",
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
    "explanation": "依題意逐步處理：gcd(96,120,168)=24；段數=96÷24+120÷24+168÷24=4+5+7=16。所以答案是「16 段」。",
    "steps": [
      "gcd(96,120,168)=24",
      "段數=96÷24+120÷24+168÷24=4+5+7=16"
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
    "commonMistake": "只求段長，未把三卷各自段數相加。",
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
    "contentSha256": "9a73fb83a121b7175c89f9431716f943b8bab14993382116c41fe9542786d2b8",
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
    "explanation": "依題意逐步處理：最大邊長gcd(144,96)=48；長邊3塊、寬邊2塊，共6塊。所以答案是「6 塊」。",
    "steps": [
      "最大邊長gcd(144,96)=48",
      "長邊3塊、寬邊2塊，共6塊"
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
    "commonMistake": "把長邊與寬邊的塊數相加而不是相乘。",
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
    "contentSha256": "52cbb3c53075d507835080fc595ea8e70fdac3fab66d613ebf215c42f0d878d5",
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
    "explanation": "依題意逐步處理：gcd(105,140,175)=35；每包3+4+5=12顆。所以答案是「12 顆」。",
    "steps": [
      "gcd(105,140,175)=35",
      "每包3+4+5=12顆"
    ],
    "optionAnalysis": [
      {
        "choice": "12 顆",
        "truth": true,
        "reason": "每包共12顆。"
      },
      {
        "choice": "10 顆",
        "truth": false,
        "reason": "10少算一種。"
      },
      {
        "choice": "15 顆",
        "truth": false,
        "reason": "15不是各商總和。"
      },
      {
        "choice": "20 顆",
        "truth": false,
        "reason": "20過大。"
      }
    ],
    "commonMistake": "把最大包數 35 誤當每包珠數。",
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
    "contentSha256": "bf296ca2f454ed6adc0a044d8bfc83c2b6b6fe9e475f299e4f97903e04b53d44",
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
    "explanation": "依題意逐步處理：最多份數gcd(54,72)=18；每份彩色筆54÷18=3盒、筆記本72÷18=4本。所以答案是「3盒彩色筆、4本筆記本」。",
    "steps": [
      "最多份數gcd(54,72)=18",
      "每份彩色筆54÷18=3盒、筆記本72÷18=4本"
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
    "commonMistake": "求出份數後把兩種每份數量對調。",
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
    "contentSha256": "95d47543eb7fe53d76a71ada60f707b271d2e57561a56cbaea9a5755337c9e97",
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
    "explanation": "依題意逐步處理：最大邊長gcd(90,150)=30；面積30²=900平方公分。所以答案是「900 平方公分」。",
    "steps": [
      "最大邊長gcd(90,150)=30",
      "面積30²=900平方公分"
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
    "commonMistake": "求出邊長30後忘記平方。",
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
    "contentSha256": "bb69cf54683570977dfd761aa642fc6198b40dea8c0bd7afda93ca657c2eaf4d",
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
    "explanation": "依題意逐步處理：gcd(80,96,112)=16盒；每盒5+6+7=18個。所以答案是「18 個」。",
    "steps": [
      "gcd(80,96,112)=16盒",
      "每盒5+6+7=18個"
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
    "commonMistake": "把盒數 16 當成每盒甜點數。",
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
    "contentSha256": "bfb1c91e58cf992ff54d896d133a217b75ebb459cd46a8967757e185708d23f1",
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
      "gcd(84,126,210)=42。",
      "每包鉛筆84÷42=2枝、原子筆126÷42=3枝、橡皮擦210÷42=5塊。",
      "共42包，每包10件，全部用完。"
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
      "把42當每包總件數。",
      "只求兩類GCD。"
    ],
    "independentReview": {
      "derivedResult": "42包；每包2枝鉛筆、3枝原子筆、5塊橡皮擦。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "f8a33ff19261dff5c852fd2d950324c47b4a8f77ee22b8cb3f0de70fe30234ff",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
      "gcd(168,120)=24公分。",
      "長方向168÷24=7塊，寬方向120÷24=5塊。",
      "總塊數7×5=35塊。"
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
      "答24塊。",
      "把7與5相加。"
    ],
    "independentReview": {
      "derivedResult": "邊長24公分，共35塊。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "f33c38499f2b96a6233f7be7c7b750e5308ee8511f5f5b16bd1e9c9169fe977c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
