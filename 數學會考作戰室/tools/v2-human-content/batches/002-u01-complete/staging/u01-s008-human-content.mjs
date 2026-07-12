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
      "exampleId": "L1",
      "prompt": "計算 (-8)+(-5)。",
      "solutionSteps": [
        "同為負數。",
        "8+5=13。",
        "保留負號。"
      ],
      "answer": "-13。"
    },
    {
      "exampleId": "L2",
      "prompt": "計算 11+(-7)。",
      "solutionSteps": [
        "異號相加。",
        "11-7=4。",
        "11 的絕對值較大且為正。"
      ],
      "answer": "4。"
    },
    {
      "exampleId": "L3",
      "prompt": "計算 -14+9。",
      "solutionSteps": [
        "異號相加。",
        "14-9=5。",
        "-14 的絕對值較大，結果為負。"
      ],
      "answer": "-5。"
    },
    {
      "exampleId": "L4",
      "prompt": "計算 18+(-6)+(-18)+10。",
      "solutionSteps": [
        "先配 18 與 -18 得 0。",
        "剩下 -6+10=4。",
        "利用交換律與結合律不改變總和。"
      ],
      "answer": "4。"
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
  "contentSha256": "e156e758ad86aa1125db1eafba27a1f17b4b34eefca012fcd1d8ff55a49f52eb"
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
    "explanation": "異號相加，8-5=3，絕對值較大者8為正，所以結果3。",
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
    "commonMistake": "異號相加仍把5與8直接相加。",
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
    "contentSha256": "82725052c13c6519179e0d8e79f110d85b9b6b26fbdb965d02fced78d27ca014"
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
    "explanation": "同為負數，絕對值相加7+4=11，保留負號，得到-11。",
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
    "commonMistake": "看到兩個負號就互相抵消。",
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
    "contentSha256": "550bf0eccd4b637b83641c715f10aaa03f15228161fc247f776a64bc3c3f0942"
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
    "explanation": "9與-9互為相反數，相加為0。",
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
    "commonMistake": "把相反數相加誤寫成18。",
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
    "contentSha256": "0cb10816f406ba7b84591644df3d0cce30ec130610cadaff4a30798ef65d808f"
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
    "explanation": "異號相加，12-5=7，負數絕對值較大，所以結果-7。",
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
    "contentSha256": "020a3ac05445a32490dc0675e0a243ea56d24f0576bc47f1e3489145281efec8"
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
    "explanation": "(-6)+(-8)=-14，再與14相加抵消為0。也可先配14與-8得6，再加-6。",
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
    "commonMistake": "只先算14-6=8後忘記再加-8。",
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
    "contentSha256": "1919e71ec085382979b10ad595febd8528b65055bf466d35e64ccaf6cab87153"
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
    "explanation": "要從-9加到4，需要增加13，因此x=13。也可兩邊加9。",
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
    "commonMistake": "把4與9相減得到-5。",
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
    "contentSha256": "feea090d869c64534116bd5e7734097c54e3ef1542dafef594bc947381bbf52c"
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
    "explanation": "18與-18先抵消，剩-7+12=5。",
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
    "contentSha256": "3c0ed264f5396d2fecf65b55d7947845842bd9a30c691e4e4c490e2028d93f53"
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
    "explanation": "-6+11-5。先把-6與-5合成-11，再與11抵消，得到0。",
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
    "commonMistake": "把c=-5代入成+5。",
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
    "contentSha256": "0a0d2d941bcb1bbb9f766f104ffde99053f9d1e80527b835f2ffe48089a19b34"
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
    "explanation": "-25與25抵消，-7+12=5。",
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
    "commonMistake": "看到-25+25後誤寫1。",
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
    "contentSha256": "622b5d5a69bc2411efe603773a157091b842563c1c4e743324ef33cb47795124"
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
    "explanation": "-3+8+(-4)=1°C。",
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
    "commonMistake": "只用8-4=4，忘記起始溫度-3。",
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
    "contentSha256": "cbfbe4801c4c2c752b6ff7064ab3451a462f28c28fbeb25b6e99a5c4db1c3b9e"
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
    "explanation": "1200+(-450)+300+(-200)=850 元。",
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
    "contentSha256": "bd216e7fd319c046ad0aaa62be405ee8bf3800efa4f23e129630695931c51d4a"
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
    "explanation": "-6+10-3+4=5。",
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
    "contentSha256": "db9ca380bf1a565434fef6a1fd60771fb098de7642dd504ddd3253efd75d34d1"
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
      "簡便法：(-18+18)+(7-12)=0-5=-5。",
      "原順序：-18+7=-11，-11+18=7，7-12=-5。"
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
    "contentSha256": "3197916af750586262e6e6e26dd54f44ebc17bcc9de7c8406467b0e3515f8a99"
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
      "總變化=12-9+4-6=1。",
      "最後能量=-5+1=-4。",
      "最後能量=起始能量+總變化。"
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
    "contentSha256": "2b6ccd03528737dc0ddbb2948151c39897f7ab1c3e0ef9c5395405142fe6aa16"
  }
];

export const DRAWING_SPECS = [];
