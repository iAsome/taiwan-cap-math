// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u01-s008-lecture-r1",
  "unitId": "u01",
  "topicId": "u01-integer-arithmetic",
  "skillId": "integer-addition",
  "title": "整數加法：合併同方向與相反方向的變化",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能計算同號整數相加。",
    "能計算異號整數相加。",
    "能辨認相反數相加為 0。",
    "能使用交換律與結合律簡化多項加法。",
    "能把情境中的連續變化寫成整數加法。"
  ],
  "prerequisites": [
    {
      "skillId": "integer-absolute-value-distance",
      "requiredLevel": "能理解正負數的方向意義，並用絕對值比較兩個方向量的大小。"
    }
  ],
  "glossary": [
    {
      "term": "同號相加",
      "definition": "兩加數符號相同，方向一致。"
    },
    {
      "term": "異號相加",
      "definition": "兩加數符號不同，方向相反。"
    },
    {
      "term": "交換律",
      "definition": "加數交換順序，和不變。"
    },
    {
      "term": "結合律",
      "definition": "三個以上加數可先合併任意相鄰兩項，和不變。"
    },
    {
      "term": "抵消",
      "definition": "互為相反數的兩數相加得到 0。"
    }
  ],
  "notation": [
    {
      "symbol": "a+b",
      "meaning": "把帶號變化 b 加到 a。"
    },
    {
      "symbol": "a+b=b+a",
      "meaning": "加法交換律。"
    },
    {
      "symbol": "(a+b)+c=a+(b+c)",
      "meaning": "加法結合律。"
    }
  ],
  "conceptNarrative": [
    "同號相加表示同方向累積：把絕對值相加，符號保持不變。",
    "異號相加表示兩方向抵消：比較絕對值，以較大絕對值的方向作為結果符號，再用大減小。",
    "數線模型中，從第一個數出發，正數向右移、負數向左移。",
    "多項加法可先找相反數或容易湊整的組合，交換律與結合律讓計算更安全。"
  ],
  "formalDefinitions": [
    {
      "name": "同號加法",
      "statement": "同號整數相加，絕對值相加，符號不變。"
    },
    {
      "name": "異號加法",
      "statement": "異號整數相加，絕對值相減，結果取絕對值較大者的符號。"
    },
    {
      "name": "加法單位元",
      "statement": "a+0=a。"
    }
  ],
  "formulas": [
    {
      "formula": "(+a)+(+b)=+(a+b)",
      "conditions": [
        "a、b≥0"
      ],
      "meaning": "正方向累積。"
    },
    {
      "formula": "(-a)+(-b)=-(a+b)",
      "conditions": [
        "a、b≥0"
      ],
      "meaning": "負方向累積。"
    },
    {
      "formula": "a+(-a)=0",
      "conditions": [
        "互為相反數"
      ],
      "meaning": "完全抵消。"
    }
  ],
  "nonApplicableCases": [
    "異號相加不能直接把絕對值相加。",
    "結果符號取決於絕對值較大者，不是固定取第一項。",
    "交換律與結合律只改順序與分組，不可改變每一項本身符號。",
    "情境中的最後量還可能需要加回基準或起始量。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先判斷兩數同號或異號。",
      "check": "符號是否看清楚？"
    },
    {
      "step": 2,
      "instruction": "同號加絕對值，異號做絕對值大減小。",
      "check": "使用的是加還是減？"
    },
    {
      "step": 3,
      "instruction": "決定結果符號。",
      "check": "絕對值較大者的方向是什麼？"
    },
    {
      "step": 4,
      "instruction": "多項時先配對相反數或湊整。",
      "check": "是否能先得到 0 或 10 的倍數？"
    },
    {
      "step": 5,
      "instruction": "用估算或情境方向檢查。",
      "check": "結果方向合理嗎？"
    }
  ],
  "workedExamples": [
    {
      "prompt": "計算 (−8)+(−5)。",
      "answer": "結果是 −13。",
      "why": "兩個加數都是負數，代表同方向累積，應先把絕對值 8 與 5 相加得 13，再保留共同負號。加號不會使兩個負號抵消，所以結果為 −13。"
    },
    {
      "prompt": "計算 11+(−7)。",
      "answer": "結果是 4。",
      "why": "11 與 −7 是異號加法，先以較大絕對值 11 減 7 得 4，再取絕對值較大的正 11 所帶正號。從數線看也就是由 11 向左移 7 到 4。"
    },
    {
      "prompt": "計算 −14+9。",
      "answer": "結果是 −5。",
      "why": "異號相加先比較絕對值，14 大於 9，因此用 14−9=5 決定大小，並保留 −14 的負號。數線上從 −14 向右移 9，仍停在原點左側的 −5。"
    },
    {
      "prompt": "計算 18+(−6)+(−18)+10。",
      "answer": "結果是 4。",
      "why": "利用交換律與結合律把 18 和 −18 配成相反數，兩者相加為 0；剩下 −6+10=4。重新分組時每個加數連同符號移動，原式總和不會改變。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "異號相加把絕對值直接相加。",
      "why": "套用同號規則。",
      "correction": "異號應用大減小。"
    },
    {
      "mistake": "結果永遠取第一個數的符號。",
      "why": "未比較絕對值。",
      "correction": "取絕對值較大者的符號。"
    },
    {
      "mistake": "把 -3+(-4) 算成 1。",
      "why": "把同號誤當異號。",
      "correction": "同號相加得 -7。"
    },
    {
      "mistake": "移項或重排時漏掉負號。",
      "why": "把符號和數字分離。",
      "correction": "每一項連同前方符號一起移動。"
    },
    {
      "mistake": "相反數相加後寫成 1。",
      "why": "混淆乘法倒數。",
      "correction": "a+(-a)=0。"
    },
    {
      "mistake": "情境中只算變化，忘記起始量。",
      "why": "沒有辨認題目求最後值。",
      "correction": "最後值＝起始值＋總變化。"
    }
  ],
  "selfCheck": [
    "兩數同號還是異號？",
    "異號時絕對值誰較大？",
    "符號是否跟著項目？",
    "能先抵消嗎？",
    "題目求總變化還是最後量？"
  ],
  "summary": [
    "同號：絕對值相加，符號不變。",
    "異號：絕對值大減小，取較大者符號。",
    "相反數相加為 0。",
    "交換律和結合律可協助配對。"
  ],
  "connections": {
    "previous": "先備技能是絕對值與距離。",
    "next": [
      "整數減法可改寫成加上相反數。",
      "乘除會使用不同的符號規則。",
      "四則混合需先判斷運算順序。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u01-s008-v001",
      "u01-s008-v002",
      "u01-s008-v003",
      "u01-s008-v004",
      "u01-s008-v005",
      "u01-s008-v006",
      "u01-s008-v007",
      "u01-s008-v008",
      "u01-s008-v009",
      "u01-s008-v010",
      "u01-s008-v011",
      "u01-s008-v012"
    ],
    "constructedResponseIds": [
      "u01-s008-cr001",
      "u01-s008-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "以數線方向、同號累積、異號抵消和相反數配對重算四例；交換律與結合律未改變任何數的符號。",
    "reviewVersion": "human-lecture-review-r2.1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "229ee119b6751f6c714fd8e4043fe3a6e6c1fed15f7a76e185293bd41eed4cf7",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u01-s008-v001",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-addition",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-5)+8 的值是多少？",
    "choices": [
      "3",
      "-13",
      "13",
      "-3"
    ],
    "answerIndex": 0,
    "explanation": "−5 與 8 符號相反，表示兩個相反方向的量互相抵消。先用較大絕對值 8 減 5 得 3，再取絕對值較大的 8 所帶正號，因此 (−5)+8=3；不能把絕對值直接相加。",
    "steps": [
      "判斷異號。",
      "絕對值大減小。",
      "取8的正號。"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": true,
        "reason": "8-5=3，正。"
      },
      {
        "choice": "-13",
        "truth": false,
        "reason": "把絕對值相加且取負。"
      },
      {
        "choice": "13",
        "truth": false,
        "reason": "把絕對值相加。"
      },
      {
        "choice": "-3",
        "truth": false,
        "reason": "符號取錯。"
      }
    ],
    "commonMistake": "異號相加仍套用同號規則，把五與八直接相加成十三。",
    "concept": "異號加法做絕對值大減小。",
    "tags": [
      "數與量",
      "整數加法",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-absolute-value-distance"
    ],
    "authoringIntent": "計算基本異號加法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "76c9b8385aa3fa62c97eb684138c23289d45a2ad4ef366a0f2ccac1da4a0acc5",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s008-v002",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-addition",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-7)+(-4) 的值是多少？",
    "choices": [
      "-3",
      "-11",
      "11",
      "3"
    ],
    "answerIndex": 1,
    "explanation": "兩個加數 −7、−4 同為負數，方向一致，所以先把絕對值相加：7+4=11，再保留共同的負號，得到 −11。加號連接兩個負數不會使負號抵消，−3 是誤用異號規則。",
    "steps": [
      "兩數同號且為負。",
      "7+4=11。",
      "結果-11。"
    ],
    "optionAnalysis": [
      {
        "choice": "-3",
        "truth": false,
        "reason": "誤作異號相減。"
      },
      {
        "choice": "-11",
        "truth": true,
        "reason": "-(7+4)=-11。"
      },
      {
        "choice": "11",
        "truth": false,
        "reason": "漏負號。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "符號與運算皆錯。"
      }
    ],
    "commonMistake": "看到兩個負號便以為會互相抵消，誤把同號負數當成異號計算。",
    "concept": "同號負數相加，絕對值相加並保留負號。",
    "tags": [
      "數與量",
      "整數加法",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-absolute-value-distance"
    ],
    "authoringIntent": "計算基本同號負加法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "667b13faf113adb43b3aecb02ad49ebe790b921ab3d30c55348b07ca0a1b7d19",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s008-v003",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-addition",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "9+(-9) 的值是多少？",
    "choices": [
      "18",
      "-18",
      "0",
      "9"
    ],
    "answerIndex": 2,
    "explanation": "9 與 −9 絕對值相同、方向相反，是一對相反數。相加時兩個方向量完全抵消，9+(−9)=9−9=0；結果不是 18，也不能只保留其中一個加數。從數線看，向右九格再向左九格會回到原點。",
    "steps": [
      "辨認相反數。",
      "距離相同方向相反。",
      "完全抵消為0。"
    ],
    "optionAnalysis": [
      {
        "choice": "18",
        "truth": false,
        "reason": "把絕對值相加。"
      },
      {
        "choice": "-18",
        "truth": false,
        "reason": "錯誤負號。"
      },
      {
        "choice": "0",
        "truth": true,
        "reason": "9-9=0。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "只保留第一項。"
      }
    ],
    "commonMistake": "把相反數九與負九的絕對值相加，誤寫成十八而沒有抵消。",
    "concept": "a+(-a)=0。",
    "tags": [
      "數與量",
      "整數加法",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-absolute-value-distance"
    ],
    "authoringIntent": "辨認相反數抵消。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e8b8b24064a7b881ebd72a829531b0fbd00131b1cee1d4db741f84dcfe3ae054",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s008-v004",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-addition",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-12)+5 的值是多少？",
    "choices": [
      "17",
      "7",
      "-17",
      "-7"
    ],
    "answerIndex": 3,
    "explanation": "−12 與 5 是異號加法，先比較絕對值，12 大於 5。用 12−5=7 得結果大小，再取絕對值較大的 −12 所帶負號，因此 (−12)+5=−7；正 7 只有大小正確而符號錯誤。",
    "steps": [
      "異號。",
      "12-5=7。",
      "取-12的負號。"
    ],
    "optionAnalysis": [
      {
        "choice": "17",
        "truth": false,
        "reason": "絕對值相加且符號錯。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "大小對但符號錯。"
      },
      {
        "choice": "-17",
        "truth": false,
        "reason": "絕對值相加。"
      },
      {
        "choice": "-7",
        "truth": true,
        "reason": "12-5=7，結果負，-7。"
      }
    ],
    "commonMistake": "算出7後忘記較大絕對值來自負數。",
    "concept": "異號和的符號取絕對值較大者。",
    "tags": [
      "數與量",
      "整數加法",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-absolute-value-distance"
    ],
    "authoringIntent": "計算負絕對值較大的異號加法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6f009f4b32a24b0272178e07f605fe36474e5bb7bdc49383c49efb5af5ebd89d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s008-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-addition",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "14+(-6)+(-8) 的值是多少？",
    "choices": [
      "0",
      "16",
      "-28",
      "28"
    ],
    "answerIndex": 0,
    "explanation": "利用結合律可先合併兩個負數：(−6)+(−8)=−14，再與正 14 相加，14+(−14)=0。也可依原順序算 14−6−8=8−8=0；兩種算法都把三項完整納入。正十四與合成的負十四恰好完全抵消。",
    "steps": [
      "辨認總負和-14。",
      "14+(-14)=0。",
      "完成。"
    ],
    "optionAnalysis": [
      {
        "choice": "0",
        "truth": true,
        "reason": "14-6-8=0。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "漏掉一項。"
      },
      {
        "choice": "-28",
        "truth": false,
        "reason": "把絕對值全加並取負。"
      },
      {
        "choice": "28",
        "truth": false,
        "reason": "漏負號。"
      }
    ],
    "commonMistake": "算完十四加負六得到八便停止，漏掉最後還要再加負八。",
    "concept": "多項加法可重排配成相反數。",
    "tags": [
      "數與量",
      "整數加法",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-absolute-value-distance"
    ],
    "authoringIntent": "使用結合律找出完全抵消。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e42eedff462729ffe2eeee99a6ef05f283dbad14d1f5642b811da1fc3cdae5eb",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s008-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-addition",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 -9+x=4，則 x 等於多少？",
    "choices": [
      "-13",
      "13",
      "5",
      "-5"
    ],
    "answerIndex": 1,
    "explanation": "等式 −9+x=4 表示從 −9 增加 x 後到 4，因此未知加數 x=4−(−9)=4+9=13。代回檢查，−9+13=4，左右兩邊相等；若取 −5 或 5 都無法滿足原式。數線上從負九到正四也正好向右十三格。",
    "steps": [
      "寫x=4-(-9)。",
      "4+9=13。",
      "代回-9+13=4。"
    ],
    "optionAnalysis": [
      {
        "choice": "-13",
        "truth": false,
        "reason": "代回得-22。"
      },
      {
        "choice": "13",
        "truth": true,
        "reason": "x=13。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "代回得-4。"
      },
      {
        "choice": "-5",
        "truth": false,
        "reason": "代回得-14。"
      }
    ],
    "commonMistake": "把四與九直接相減成負五，沒有依未知加數公式處理負九。",
    "concept": "未知加數＝和－已知加數。",
    "tags": [
      "數與量",
      "整數加法",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-absolute-value-distance"
    ],
    "authoringIntent": "由和與一個加數反求另一加數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "bd00af00c5f2234085db920995fba86567c9ef8e37ecd05ee0c0106deba6b8a9",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s008-v007",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-addition",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "18+(-7)+(-18)+12 的值是多少？",
    "choices": [
      "41",
      "-5",
      "5",
      "-41"
    ],
    "answerIndex": 2,
    "explanation": "加法可用交換律與結合律重新配對，但每項符號不變。先把 18 與 −18 配成相反數得 0，再算 −7+12=5，所以原式總和為 5；這樣也避免依序計算時抄錯負號。",
    "steps": [
      "用交換律配18與-18。",
      "得到0。",
      "-7+12=5。"
    ],
    "optionAnalysis": [
      {
        "choice": "41",
        "truth": false,
        "reason": "把絕對值全加。"
      },
      {
        "choice": "-5",
        "truth": false,
        "reason": "符號取錯。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "(18-18)+(-7+12)=5。"
      },
      {
        "choice": "-41",
        "truth": false,
        "reason": "全取負。"
      }
    ],
    "commonMistake": "按照原順序計算時抄錯負號，未利用抵消。",
    "concept": "加法交換律和結合律可簡化多項計算。",
    "tags": [
      "數與量",
      "整數加法",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-absolute-value-distance"
    ],
    "authoringIntent": "重新分組以快速求和。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b55309ad3ff54a08f6ecdb36d8801fda2649c2aa783a4c0f222aa733d09f13e5",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s008-v008",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-addition",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "a=-6、b=11、c=-5，則 a+b+c 的值是多少？",
    "choices": [
      "22",
      "-22",
      "10",
      "0"
    ],
    "answerIndex": 3,
    "explanation": "先連同符號代入 a=−6、b=11、c=−5，得 −6+11+(−5)。可先合併兩個負數為 −11，再算 −11+11=0；也可依序得到 5−5=0，兩種算法一致。代入時每個字母的正負號都屬於該數本身。",
    "steps": [
      "代入三數。",
      "負數合成-11。",
      "-11+11=0。"
    ],
    "optionAnalysis": [
      {
        "choice": "22",
        "truth": false,
        "reason": "把絕對值相加。"
      },
      {
        "choice": "-22",
        "truth": false,
        "reason": "全取負。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "漏掉一個負號。"
      },
      {
        "choice": "0",
        "truth": true,
        "reason": "-6+11-5=0。"
      }
    ],
    "commonMistake": "代入時把題目給的負五抄成正五，導致三個加數的符號被改變。",
    "concept": "代入後每個數連同符號參與加法。",
    "tags": [
      "數與量",
      "整數加法",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-absolute-value-distance"
    ],
    "authoringIntent": "結合代入與多項加法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "46b55ac9a281d6406d393fbb0c6a54eb55628535c28818be8f813c4682fb414c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s008-v009",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-addition",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-25)+25+(-7)+12 的值是多少？",
    "choices": [
      "5",
      "-5",
      "55",
      "-69"
    ],
    "answerIndex": 0,
    "explanation": "先辨認 −25 與 25 互為相反數，相加恰為 0；剩下 (−7)+12 是異號相加，12−7=5 且正數絕對值較大，所以總和為 0+5=5。抵消後仍不能漏掉其餘兩項。",
    "steps": [
      "配對-25與25。",
      "得到0。",
      "剩餘和5。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": true,
        "reason": "0+5=5。"
      },
      {
        "choice": "-5",
        "truth": false,
        "reason": "符號取錯。"
      },
      {
        "choice": "55",
        "truth": false,
        "reason": "只加絕對值部分。"
      },
      {
        "choice": "-69",
        "truth": false,
        "reason": "全部負加。"
      }
    ],
    "commonMistake": "把負二十五與正二十五相加誤寫成一，接著造成整體總和錯誤。",
    "concept": "相反數抵消並保留其他加數。",
    "tags": [
      "數與量",
      "整數加法",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-absolute-value-distance"
    ],
    "authoringIntent": "在四項加法中辨認兩組結構。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3e4f2e903aa6228e1f00704cd17d80ec2f9865c0a83139ce90f176534fff068c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s008-v010",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-addition",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "清晨溫度 -3°C，上午上升 8°C，傍晚又下降 4°C。傍晚溫度是多少？",
    "choices": [
      "-15°C",
      "1°C",
      "5°C",
      "9°C"
    ],
    "answerIndex": 1,
    "explanation": "以清晨 −3°C 為起始量，上升 8°C 記 +8，下降 4°C 記 −4。依時間列式 −3+8+(−4)，先到 5°C，再降到 1°C，所以傍晚溫度是 1°C，而不是只算兩段變化的淨值。最後值必須同時包含起始溫度與全部變化。",
    "steps": [
      "起始-3。",
      "升8到5。",
      "降4到1。"
    ],
    "optionAnalysis": [
      {
        "choice": "-15°C",
        "truth": false,
        "reason": "把兩次變化都當下降。"
      },
      {
        "choice": "1°C",
        "truth": true,
        "reason": "-3+8-4=1°C。"
      },
      {
        "choice": "5°C",
        "truth": false,
        "reason": "只算到上午。"
      },
      {
        "choice": "9°C",
        "truth": false,
        "reason": "忽略起始量。"
      }
    ],
    "commonMistake": "只算上升八與下降四的淨變化四度，忘記加回清晨負三度。",
    "concept": "最後量＝起始量＋所有帶號變化。",
    "tags": [
      "數與量",
      "整數加法",
      "literacy"
    ],
    "estimatedTimeSec": "85",
    "prerequisiteSkillIds": [
      "integer-absolute-value-distance"
    ],
    "authoringIntent": "整合一天內兩次溫度變化。",
    "literacyContextNecessity": "起始溫度、兩段變化與時間順序都影響最後值。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "49c2da132141902f778fde9c551e0205f13aabd5deb58978c4f73b9542e309c4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s008-v011",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-addition",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "帳戶原有 1,200 元，之後支出 450 元、收入 300 元、再支出 200 元。最後餘額為何？",
    "choices": [
      "250 元",
      "750 元",
      "850 元",
      "1,150 元"
    ],
    "answerIndex": 2,
    "explanation": "從起始餘額 1,200 元出發，支出記負、收入記正，完整算式為 1,200−450+300−200。依序算得 750、1,050、850，因此最後餘額為 850 元；三筆交易都必須納入。代回交易紀錄後，各次增減方向也完全一致。",
    "steps": [
      "支出記負，收入記正。",
      "1200-450=750。",
      "750+300-200=850。"
    ],
    "optionAnalysis": [
      {
        "choice": "250 元",
        "truth": false,
        "reason": "漏掉收入或多扣款。"
      },
      {
        "choice": "750 元",
        "truth": false,
        "reason": "停在第一次支出。"
      },
      {
        "choice": "850 元",
        "truth": true,
        "reason": "1200-450+300-200=850。"
      },
      {
        "choice": "1,150 元",
        "truth": false,
        "reason": "錯誤加總。"
      }
    ],
    "commonMistake": "把所有交易金額都相加成增加。",
    "concept": "收支依方向轉成正負數後累加。",
    "tags": [
      "數與量",
      "整數加法",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-absolute-value-distance"
    ],
    "authoringIntent": "追蹤多筆帳戶交易。",
    "literacyContextNecessity": "起始餘額與三筆不同方向交易都是必要資料。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "55269910b8cd0a5963e75df4354041762f5937f428181154bbf8bc469bb3b0ea",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s008-v012",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-addition",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "桌遊四回合得分依序為 -6、+10、-3、+4。總得分變化是多少？",
    "choices": [
      "23",
      "-5",
      "-23",
      "5"
    ],
    "answerIndex": 3,
    "explanation": "總得分變化要把四回合帶號分數全部累加：−6+10−3+4。依時間順序先得 4，再減 3 得 1，最後加 4 得 5；也可先合併正分 14 與負分 −9，仍得 5。兩種分組都沒有遺漏任何一回合。",
    "steps": [
      "依序合併-6+10=4。",
      "4-3=1。",
      "1+4=5。"
    ],
    "optionAnalysis": [
      {
        "choice": "23",
        "truth": false,
        "reason": "把絕對值全加。"
      },
      {
        "choice": "-5",
        "truth": false,
        "reason": "符號處理錯。"
      },
      {
        "choice": "-23",
        "truth": false,
        "reason": "把全部當負。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "-6+10-3+4=5。"
      }
    ],
    "commonMistake": "只比較最高與最低回合，沒有累加四回合。",
    "concept": "總變化是所有帶號回合分數的和。",
    "tags": [
      "數與量",
      "整數加法",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-absolute-value-distance"
    ],
    "authoringIntent": "由遊戲紀錄求累積得分。",
    "literacyContextNecessity": "四回合的每筆帶號分數都需納入，不能只看正分。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6be1bdd8d10b2b567a848dfe5a616314b5953538207bceae013db79ffc2e4eb5",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u01-s008-cr001",
    "unitId": "u01",
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-addition",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "計算 -18+7+18+(-12)，要求至少寫出一種利用交換律或結合律的簡便算法，並用原順序驗算。",
    "requiredWork": [
      "寫簡便分組。",
      "再以原順序或另一分組驗算。"
    ],
    "fullCreditSolution": [
      "簡便法先把每一項連同符號重排：(−18+18)+(7−12)=0+(−5)=−5。",
      "交換律只改變加數順序，−18 與 18 是相反數，所以先配對後不會改變原式總和。",
      "再按原順序驗算：−18+7=−11，−11+18=7，7−12=−5，與簡便法結果一致。"
    ],
    "alternativeSolutions": [
      "也可先配7與-12，再配相反數。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "兩種算法都正確且答案-5。"
      },
      {
        "score": 2,
        "criteria": "答案與簡便法正確，但驗算不完整。"
      },
      {
        "score": 1,
        "criteria": "主要加法方法正確但有一處小算術錯。"
      },
      {
        "score": 0,
        "criteria": "符號規則錯誤且無有效結果。"
      }
    ],
    "scoringNotes": [
      "交換時每一項要連同符號移動。"
    ],
    "commonErrors": [
      "把-18移動後變+18。",
      "相反數和寫1。",
      "漏掉-12。"
    ],
    "independentReview": {
      "derivedResult": "-5。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "4527f175326116462291d97ce3ea582c01f7c6b19d498c7fba7ddca7104a0402",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s008-cr002",
    "unitId": "u01",
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-addition",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某遊戲角色起始能量為 -5。四個事件依序造成 +12、-9、+4、-6 的變化。求最後能量與四事件的總變化，並說明兩個答案的關係。",
    "requiredWork": [
      "分開求總變化與最後能量。",
      "保留每筆正負號。"
    ],
    "fullCreditSolution": [
      "先只合併四個事件的帶號變化：12−9+4−6=3+4−6=1，所以總變化為 +1。",
      "最後能量要加回起始值 −5，因此 −5+(+1)=−4；總變化 1 不能直接當成最後能量。",
      "兩個答案的關係是最後能量＝起始能量＋總變化，代入 −5+1=−4 可完整驗證。"
    ],
    "alternativeSolutions": [
      "可直接列 -5+12-9+4-6=-4，再另外指出事件和為1。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "總變化1、最後-4與關係說明完整。"
      },
      {
        "score": 2,
        "criteria": "兩數值正確但關係未說明；或方法正確有小錯。"
      },
      {
        "score": 1,
        "criteria": "正確算出其中一個量並保留帶號資料。"
      },
      {
        "score": 0,
        "criteria": "把總變化直接當最後能量且運算錯誤。"
      }
    ],
    "scoringNotes": [
      "總變化不是最後能量。"
    ],
    "commonErrors": [
      "漏起始值。",
      "把-9與-6當正。",
      "把最後能量寫1。"
    ],
    "independentReview": {
      "derivedResult": "總變化+1，最後-4。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "f2af0a6e69ecc84d9fc127fcb33580ee9c4074d5a78f5c28b58bfe9d40c5b020",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
