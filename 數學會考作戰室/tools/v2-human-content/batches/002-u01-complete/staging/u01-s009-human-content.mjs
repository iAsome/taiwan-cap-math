// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u01-s009-lecture-r1",
  "unitId": "u01",
  "topicId": "u01-integer-arithmetic",
  "skillId": "integer-subtraction",
  "title": "整數減法：改寫成加上減數的相反數",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能把整數減法改寫成加法。",
    "能正確處理減去負數。",
    "能計算兩量的帶號變化。",
    "能解含未知被減數或減數的簡單問題。",
    "能區分差、距離與最後量。"
  ],
  "prerequisites": [
    {
      "skillId": "integer-addition",
      "requiredLevel": "能完成整數加法，並找出任一整數的相反數。"
    }
  ],
  "glossary": [
    {
      "term": "被減數",
      "definition": "減號前的數。"
    },
    {
      "term": "減數",
      "definition": "減號後被減去的數。"
    },
    {
      "term": "差",
      "definition": "減法所得結果。"
    },
    {
      "term": "加上相反數",
      "definition": "把 a-b 改寫成 a+(-b)。"
    },
    {
      "term": "帶號變化",
      "definition": "後值減前值，正表示增加，負表示減少。"
    }
  ],
  "notation": [
    {
      "symbol": "a-b",
      "meaning": "從 a 中減去 b。"
    },
    {
      "symbol": "a-b=a+(-b)",
      "meaning": "減法轉加法的核心規則。"
    },
    {
      "symbol": "後值－前值",
      "meaning": "求帶方向的變化量。"
    }
  ],
  "conceptNarrative": [
    "減法不是交換運算，7-3 與 3-7 不相等。",
    "減去一個數等於加上它的相反數，因此減去負數會變成加正數。",
    "情境中「從前值變到後值」的變化量應寫後值－前值；若只問相差多少，才取絕對值。",
    "連續減法要依原本順序，或逐項改寫成加法後再利用加法規則。"
  ],
  "formalDefinitions": [
    {
      "name": "減法轉加法",
      "statement": "對任何整數 a、b，a-b=a+(-b)。"
    },
    {
      "name": "變化量",
      "statement": "從初值 a 變到終值 b，帶號變化量為 b-a。"
    }
  ],
  "formulas": [
    {
      "formula": "a-b=a+(-b)",
      "conditions": [
        "負號作用於完整減數"
      ],
      "meaning": "用已學加法規則計算減法。"
    },
    {
      "formula": "變化量＝後值－前值",
      "conditions": [
        "前後值使用同一基準與單位"
      ],
      "meaning": "判斷增加或減少。"
    }
  ],
  "nonApplicableCases": [
    "a-b 不可任意交換成 b-a。",
    "減去負數變加正數，但減去正數仍是加負數。",
    "括號內若有整個算式，取相反數時每一項符號都要處理；本節先處理整數。",
    "相差多少與變化量不同，前者非負，後者可負。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "標出被減數與減數。",
      "check": "減號後是否為負數？"
    },
    {
      "step": 2,
      "instruction": "保留被減數，把減號改加號。",
      "check": "第一個數是否原樣保留？"
    },
    {
      "step": 3,
      "instruction": "把減數改成相反數。",
      "check": "負數的相反數是否變正？"
    },
    {
      "step": 4,
      "instruction": "依整數加法規則計算。",
      "check": "同號或異號判斷正確嗎？"
    },
    {
      "step": 5,
      "instruction": "用原情境檢查方向。",
      "check": "變化增加或減少合理嗎？"
    }
  ],
  "workedExamples": [
    {
      "prompt": "計算 6−11。",
      "answer": "結果是 −5。",
      "why": "減去 11 等於加上它的相反數 −11，所以 6−11=6+(−11)。異號相加用 11−6=5，並取絕對值較大的 −11 所帶負號，得到 −5。數線上也相當於從六向左走十一格。"
    },
    {
      "prompt": "計算 −4−(−9)。",
      "answer": "結果是 5。",
      "why": "減數是 −9，它的相反數為 +9，因此 −4−(−9)=−4+9。異號相加後 9−4=5，且正數絕對值較大，所以答案是正 5。代回原式後，兩個負號的作用也完整保留。"
    },
    {
      "prompt": "氣溫從 3°C 降到 −5°C，帶號變化量是多少？",
      "answer": "帶號變化量是 −8°C。",
      "why": "帶號變化要用後值減前值，列式 −5−3=−5+(−3)=−8°C。結果的負號對應題目的下降方向，絕對值 8 則表示下降幅度。從三度經過零度到負五度也共下降八度。"
    },
    {
      "prompt": "某數減 7 得 −2，求該數。",
      "answer": "該數是 5。",
      "why": "設原數為 x，依題意 x−7=−2。被減數等於差加減數，所以 x=−2+7=5；代回原式 5−7=−2，確認答案滿足條件。反求未知數後的代回檢查可排除符號誤寫。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把 -4-(-9) 算成 -13。",
      "why": "把減去負數當加上負數。",
      "correction": "改寫 -4+9=5。"
    },
    {
      "mistake": "交換減法次序。",
      "why": "誤認減法有交換律。",
      "correction": "先後位置不可交換。"
    },
    {
      "mistake": "只改減號，不改減數符號。",
      "why": "規則只做一半。",
      "correction": "a-b 要變 a+(-b)。"
    },
    {
      "mistake": "求變化量寫前值－後值。",
      "why": "次序顛倒。",
      "correction": "應寫後值－前值。"
    },
    {
      "mistake": "把相差多少寫成負數。",
      "why": "沒有區分距離。",
      "correction": "相差多少取絕對值。"
    },
    {
      "mistake": "連續減法先算後兩項。",
      "why": "誤用結合律。",
      "correction": "同級運算由左到右，或全部改成加法。"
    }
  ],
  "selfCheck": [
    "被減數和減數找對嗎？",
    "是否改成加上相反數？",
    "減去負數是否變加正數？",
    "前後值次序正確嗎？",
    "題目問變化量還是距離？"
  ],
  "summary": [
    "a-b=a+(-b)。",
    "減去負數等於加上正數。",
    "減法沒有交換律。",
    "變化量＝後值－前值。"
  ],
  "connections": {
    "previous": "先備技能是整數加法與相反數。",
    "next": [
      "整數乘除會使用另一套符號規則。",
      "四則混合中加減同級時由左到右。",
      "素養題常用減法求溫度變化與收支差。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u01-s009-v001",
      "u01-s009-v002",
      "u01-s009-v003",
      "u01-s009-v004",
      "u01-s009-v005",
      "u01-s009-v006",
      "u01-s009-v007",
      "u01-s009-v008",
      "u01-s009-v009",
      "u01-s009-v010",
      "u01-s009-v011",
      "u01-s009-v012"
    ],
    "constructedResponseIds": [
      "u01-s009-cr001",
      "u01-s009-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "將每個減法改寫成加上減數的相反數，並用「後值減前值」重算溫度變化與未知數例題。",
    "reviewVersion": "human-lecture-review-r2.1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "b9381de84fc47768859828586b5efa4df44bf2c8bea0ba506f7b84fd2098613d",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u01-s009-v001",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-subtraction",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "7-12 的值是多少？",
    "choices": [
      "-5",
      "5",
      "19",
      "-19"
    ],
    "answerIndex": 0,
    "explanation": "減去 12 等於加上 12 的相反數，所以 7−12 可改寫為 7+(−12)。這是異號相加，12−7=5，且絕對值較大的 −12 為負，因此結果是 −5；原式次序不能顛倒。結果在數線上位於原點左側。",
    "steps": [
      "改寫加上-12。",
      "異號相加。",
      "結果-5。"
    ],
    "optionAnalysis": [
      {
        "choice": "-5",
        "truth": true,
        "reason": "7+(-12)=-5。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "19",
        "truth": false,
        "reason": "把減法當加法。"
      },
      {
        "choice": "-19",
        "truth": false,
        "reason": "大小與符號皆錯。"
      }
    ],
    "commonMistake": "只算十二減七得到五，卻忘記原式是較小數七減較大數十二。",
    "concept": "減去正數等於加上負數。",
    "tags": [
      "數與量",
      "整數減法",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-addition"
    ],
    "authoringIntent": "基本正減大正數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8f0ebde80cec9c394411d1af497c2f6d4e37bbb55645b8c84d7b50c039d042ba",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s009-v002",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-subtraction",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-3-5 的值是多少？",
    "choices": [
      "2",
      "-8",
      "8",
      "-2"
    ],
    "answerIndex": 1,
    "explanation": "把減法改寫成加上相反數，−3−5=−3+(−5)。兩個加數同為負數，絕對值 3+5=8 並保留負號，所以答案是 −8；負數再減正數會往數線左方移得更小。",
    "steps": [
      "減5改加-5。",
      "同號負數相加。",
      "得-8。"
    ],
    "optionAnalysis": [
      {
        "choice": "2",
        "truth": false,
        "reason": "誤作異號。"
      },
      {
        "choice": "-8",
        "truth": true,
        "reason": "-3+(-5)=-8。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "漏負號。"
      },
      {
        "choice": "-2",
        "truth": false,
        "reason": "算術錯。"
      }
    ],
    "commonMistake": "把負三減五顛倒成五減三，忽略減法沒有交換律。",
    "concept": "負數再減正數會更小。",
    "tags": [
      "數與量",
      "整數減法",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-addition"
    ],
    "authoringIntent": "負整數減正整數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "47f07346614e1f8712d988cc33605aba4f2a60c1a347763ff460efdb640ec797",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s009-v003",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-subtraction",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-6-(-4) 的值是多少？",
    "choices": [
      "-10",
      "10",
      "-2",
      "2"
    ],
    "answerIndex": 2,
    "explanation": "減去負數要加上該負數的相反數，因此 −6−(−4)=−6+4。異號相加時用 6−4=2，絕對值較大的 −6 決定負號，得到 −2；代回原式也不會是正 2 或 −10。數線上向右移四格後仍在原點左側。",
    "steps": [
      "把減去-4改成加4。",
      "異號相加。",
      "得-2。"
    ],
    "optionAnalysis": [
      {
        "choice": "-10",
        "truth": false,
        "reason": "把減負仍當減正。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "絕對值相加且取正。"
      },
      {
        "choice": "-2",
        "truth": true,
        "reason": "-6+4=-2。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "符號取錯。"
      }
    ],
    "commonMistake": "看到兩個負號就把數值相加成10。",
    "concept": "減去負數等於加上正數。",
    "tags": [
      "數與量",
      "整數減法",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-addition"
    ],
    "authoringIntent": "基本減負數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4be39f51bbbda0b0b15277607ba1e45f388a14e7bc31aad51c6d200953ca3a0d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s009-v004",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-subtraction",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "15-(-7) 的值是多少？",
    "choices": [
      "8",
      "-22",
      "-8",
      "22"
    ],
    "answerIndex": 3,
    "explanation": "依 a−b=a+(−b)，減數 −7 的相反數是 +7，所以 15−(−7)=15+7=22。減去負數會使數值增加，若算成 8 就是把 −(−7) 錯當成 −7。答案二十二也確實大於原被減數十五，方向合理。",
    "steps": [
      "減去負數改加正數。",
      "15+7。",
      "得22。"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": false,
        "reason": "把減負當減正。"
      },
      {
        "choice": "-22",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "-8",
        "truth": false,
        "reason": "大小錯。"
      },
      {
        "choice": "22",
        "truth": true,
        "reason": "15+7=22。"
      }
    ],
    "commonMistake": "把減去負七仍處理成減七，沒有將負減數改成相反數正七。",
    "concept": "減去負數使值增加。",
    "tags": [
      "數與量",
      "整數減法",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-addition"
    ],
    "authoringIntent": "正數減負數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "61142fafc6ad9fde17a24273ec28fefcc4435e44a09ba38d252dd639fd2dbfe8",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s009-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-subtraction",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個改寫正確？",
    "choices": [
      "-8-3=-8+(-3)",
      "-8-3=8+3",
      "-8-3=-8+3",
      "-8-3=8+(-3)"
    ],
    "answerIndex": 0,
    "explanation": "減法轉加法時，被減數 −8 原樣保留，減號改為加號，減數 3 改成相反數 −3，因此 −8−3=−8+(−3)。其他選項不是改變被減數，就是沒有正確改變減數符號。",
    "steps": [
      "被減數-8原樣保留。",
      "減號改加號。",
      "減數3改相反數-3。"
    ],
    "optionAnalysis": [
      {
        "choice": "-8-3=-8+(-3)",
        "truth": true,
        "reason": "-8-3=-8+(-3)。"
      },
      {
        "choice": "-8-3=8+3",
        "truth": false,
        "reason": "被減數符號被改。"
      },
      {
        "choice": "-8-3=-8+3",
        "truth": false,
        "reason": "減數未取相反數。"
      },
      {
        "choice": "-8-3=8+(-3)",
        "truth": false,
        "reason": "被減數被改。"
      }
    ],
    "commonMistake": "改減數符號時連被減數也一起改。",
    "concept": "減法轉加法只把減數換成相反數。",
    "tags": [
      "數與量",
      "整數減法",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-addition"
    ],
    "authoringIntent": "辨認減法正確等價式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "55860f6df3ab27153e06801790b2ed053546bb5c43e464731cc56b934bda2031",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s009-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-subtraction",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 x-9=-4，則 x 等於多少？",
    "choices": [
      "-13",
      "5",
      "13",
      "-5"
    ],
    "answerIndex": 1,
    "explanation": "在 x−9=−4 中，被減數等於差加減數，因此 x=−4+9=5。也可在等式兩邊同加 9；代回檢查 5−9=−4，確實符合原式，其餘選項代回都不成立。反求未知數後的代回檢查可同時核對數值與符號。",
    "steps": [
      "兩邊加9。",
      "x=5。",
      "代回檢查。"
    ],
    "optionAnalysis": [
      {
        "choice": "-13",
        "truth": false,
        "reason": "代回-22。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "x=5。"
      },
      {
        "choice": "13",
        "truth": false,
        "reason": "代回4。"
      },
      {
        "choice": "-5",
        "truth": false,
        "reason": "代回-14。"
      }
    ],
    "commonMistake": "把負四再減九當成未知數，沒有用差加減數反求被減數。",
    "concept": "被減數＝差＋減數。",
    "tags": [
      "數與量",
      "整數減法",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-addition"
    ],
    "authoringIntent": "由差與減數反求被減數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "92881f9d9d261470a015f2ea077da0537b4729217ba85d87782714c43318b320",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s009-v007",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-subtraction",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-5-[3-(-2)] 的值是多少？",
    "choices": [
      "0",
      "-6",
      "-10",
      "10"
    ],
    "answerIndex": 2,
    "explanation": "依運算順序先算括號：3−(−2)=3+2=5。外層成為 −5−5，再改寫為 −5+(−5)=−10；不能先把外面的 −5 與括號中的 −2 結合，否則會破壞括號範圍。兩個同號負數相加後結果必在負方向。",
    "steps": [
      "先算括號5。",
      "外式-5-5。",
      "得-10。"
    ],
    "optionAnalysis": [
      {
        "choice": "0",
        "truth": false,
        "reason": "把兩個5抵消。"
      },
      {
        "choice": "-6",
        "truth": false,
        "reason": "括號計算錯。"
      },
      {
        "choice": "-10",
        "truth": true,
        "reason": "3+2=5，-5-5=-10。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "漏負號。"
      }
    ],
    "commonMistake": "先把外層 -5 與括號中的 -2 結合，破壞運算順序。",
    "concept": "有括號的減法先處理內層。",
    "tags": [
      "數與量",
      "整數減法",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-addition"
    ],
    "authoringIntent": "處理雙層減法與負數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "aa66a3a7e880ebe68a0d359fd3d9ab0fc330e3dfe6f457b6d7e7cb00069341b1",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s009-v008",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-subtraction",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "12-(-4)-9 的值是多少？",
    "choices": [
      "25",
      "-1",
      "17",
      "7"
    ],
    "answerIndex": 3,
    "explanation": "連續減法是同級運算，要由左到右計算。先算 12−(−4)=12+4=16，再算 16−9=7；也可全部改寫成 12+4+(−9)=7，但不能把後兩項先結合成另一個減數。兩種合法算法都得到相同結果七。",
    "steps": [
      "先算12+4=16。",
      "再減9。",
      "得7。"
    ],
    "optionAnalysis": [
      {
        "choice": "25",
        "truth": false,
        "reason": "把9也變正。"
      },
      {
        "choice": "-1",
        "truth": false,
        "reason": "從右邊先算。"
      },
      {
        "choice": "17",
        "truth": false,
        "reason": "少減一。"
      },
      {
        "choice": "7",
        "truth": true,
        "reason": "16-9=7。"
      }
    ],
    "commonMistake": "把連續減法誤用結合律，先算括號中的負四減九而改變原式。",
    "concept": "連續加減同級由左到右。",
    "tags": [
      "數與量",
      "整數減法",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-addition"
    ],
    "authoringIntent": "正確處理連續減法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1c80349d4af8113cbd9e754e83ca279cda20a8ecf6e0777797a0c9385dd27191",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s009-v009",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-subtraction",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "溫度從 -2°C 變成 -11°C，帶號變化量是多少？",
    "choices": [
      "-9°C",
      "9°C",
      "-13°C",
      "13°C"
    ],
    "answerIndex": 0,
    "explanation": "帶號變化量要用後值減前值，故 −11−(−2)=−11+2=−9°C。負號表示溫度下降，大小 9 表示下降幅度；若只答 9°C，僅得到無方向的溫差而不符合題目。",
    "steps": [
      "後值-11。",
      "減前值-2。",
      "-11+2=-9。"
    ],
    "optionAnalysis": [
      {
        "choice": "-9°C",
        "truth": true,
        "reason": "正確帶號變化。"
      },
      {
        "choice": "9°C",
        "truth": false,
        "reason": "是變化大小。"
      },
      {
        "choice": "-13°C",
        "truth": false,
        "reason": "把兩絕對值相加。"
      },
      {
        "choice": "13°C",
        "truth": false,
        "reason": "符號錯。"
      }
    ],
    "commonMistake": "只答相差9°C，忽略題目要求帶號變化量。",
    "concept": "帶號變化＝後值－前值。",
    "tags": [
      "數與量",
      "整數減法",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-addition"
    ],
    "authoringIntent": "由兩個負溫度求方向變化。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d9cbed3be116a522d71d606aff854e1735cf4f8ec9d2cb18c54a182fa1df5149",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s009-v010",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-subtraction",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "倉庫原有 70 件商品，今天出貨 85 件；允許缺貨量以負庫存表示。出貨後庫存為何？",
    "choices": [
      "15 件",
      "-15 件",
      "155 件",
      "-155 件"
    ],
    "answerIndex": 1,
    "explanation": "出貨會從原庫存扣除，因此出貨後庫存為 70−85=−15 件。題目明定允許用負庫存表示缺貨，−15 代表尚有 15 件需求未滿足；正 15 只有缺貨大小，沒有保留庫存狀態。",
    "steps": [
      "原庫存70。",
      "出貨85用減法。",
      "70-85=-15。"
    ],
    "optionAnalysis": [
      {
        "choice": "15 件",
        "truth": false,
        "reason": "是缺貨大小但漏負號。"
      },
      {
        "choice": "-15 件",
        "truth": true,
        "reason": "70-85=-15件。"
      },
      {
        "choice": "155 件",
        "truth": false,
        "reason": "把出貨當進貨。"
      },
      {
        "choice": "-155 件",
        "truth": false,
        "reason": "錯誤符號與大小。"
      }
    ],
    "commonMistake": "認為庫存不可能為負，強行寫15。",
    "concept": "在允許欠貨的模型中，負庫存表示未滿足需求。",
    "tags": [
      "數與量",
      "整數減法",
      "literacy"
    ],
    "estimatedTimeSec": "85",
    "prerequisiteSkillIds": [
      "integer-addition"
    ],
    "authoringIntent": "把出貨量從庫存扣除並解讀負結果。",
    "literacyContextNecessity": "允許負庫存的規則是必要條件，否則情境解讀不同。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e9c71505167666b5eb4c5c23660c0402cec7865d9321f4286a5b62b36b2caf83",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s009-v011",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-subtraction",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "探測器由海拔 -30 公尺上升到 12 公尺。它的帶號高度變化是多少？",
    "choices": [
      "-42 公尺",
      "18 公尺",
      "42 公尺",
      "-18 公尺"
    ],
    "answerIndex": 2,
    "explanation": "高度的帶號變化用後值減前值：12−(−30)=12+30=42 公尺。結果為正，與題目所說上升一致；探測器先從 −30 上升 30 公尺到 0，再上升 12 公尺，共上升 42 公尺。",
    "steps": [
      "後值12。",
      "減去前值-30。",
      "12+30=42。"
    ],
    "optionAnalysis": [
      {
        "choice": "-42 公尺",
        "truth": false,
        "reason": "方向錯。"
      },
      {
        "choice": "18 公尺",
        "truth": false,
        "reason": "只相減絕對值。"
      },
      {
        "choice": "42 公尺",
        "truth": true,
        "reason": "12-(-30)=42公尺。"
      },
      {
        "choice": "-18 公尺",
        "truth": false,
        "reason": "大小與方向錯。"
      }
    ],
    "commonMistake": "只用三十減十二得到十八，沒有把負海拔當成帶號的前值。",
    "concept": "跨越基準的上升量用後值減前值。",
    "tags": [
      "數與量",
      "整數減法",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-addition"
    ],
    "authoringIntent": "由負海拔到正海拔求上升量。",
    "literacyContextNecessity": "起終海拔與「上升」要求共同決定帶號變化。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0bdd931a048882ff5b44cd3ef5ccf0946f9c0414279f670622a0fc050bc94cd5",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s009-v012",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-subtraction",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "帳戶餘額從 500 元變成 -120 元。餘額的帶號變化量是多少？",
    "choices": [
      "620 元",
      "-380 元",
      "380 元",
      "-620 元"
    ],
    "answerIndex": 3,
    "explanation": "餘額的帶號變化量是後值減前值，所以列式 −120−500=−620 元。負號表示餘額減少，大小 620 也可由 500 元降到 0 再降到 −120 元相加驗證；不能忽略後值的負號。",
    "steps": [
      "後值-120。",
      "減前值500。",
      "得到-620。"
    ],
    "optionAnalysis": [
      {
        "choice": "620 元",
        "truth": false,
        "reason": "是變化大小但漏方向。"
      },
      {
        "choice": "-380 元",
        "truth": false,
        "reason": "錯誤相減。"
      },
      {
        "choice": "380 元",
        "truth": false,
        "reason": "方向和大小都錯。"
      },
      {
        "choice": "-620 元",
        "truth": true,
        "reason": "-120-500=-620元。"
      }
    ],
    "commonMistake": "把負一百二十看成正數後算五百減一百二十，導致大小與方向都錯。",
    "concept": "從正餘額到負餘額的變化跨越0。",
    "tags": [
      "數與量",
      "整數減法",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-addition"
    ],
    "authoringIntent": "計算帳戶由正轉負的帶號變化。",
    "literacyContextNecessity": "兩次餘額與「帶號變化量」措辭決定次序和符號。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "26cfc69e69db9157a3000cc411ab9a967819ee8f4a5e1b8e73777fb920546146",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u01-s009-cr001",
    "unitId": "u01",
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-subtraction",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "計算並寫成「加上相反數」：8-13、-6-4、-9-(-5)。",
    "requiredWork": [
      "每題先寫等價加法。",
      "再完成整數加法。"
    ],
    "fullCreditSolution": [
      "第一題保留被減數 8，把減去 13 改成加上 −13：8−13=8+(−13)=−5。",
      "第二題同樣把正減數 4 改成 −4：−6−4=−6+(−4)=−10。",
      "第三題的減數是 −5，其相反數為 +5，所以 −9−(−5)=−9+5=−4；三題都只改減數的符號。"
    ],
    "alternativeSolutions": [
      "可用數線驗證，但等價加法必須出現。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三題改寫與答案全部正確。"
      },
      {
        "score": 2,
        "criteria": "三個答案正確但一處改寫不完整；或一題小錯。"
      },
      {
        "score": 1,
        "criteria": "至少一題完整正確且知道減法轉加法。"
      },
      {
        "score": 0,
        "criteria": "未能把減數改為相反數。"
      }
    ],
    "scoringNotes": [
      "被減數符號保持不變。"
    ],
    "commonErrors": [
      "把-9-(-5)寫-9+(-5)。",
      "改變被減數。",
      "減號與減數都不改。"
    ],
    "independentReview": {
      "derivedResult": "-5、-10、-4。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "956cf22e8e9cfda19de24201070acbf1b742159cadd7a0fc2ab87462614547a5",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s009-cr002",
    "unitId": "u01",
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-subtraction",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某地上午溫度為 -4°C，下午為 7°C，夜間為 -9°C。求上午到下午、下午到夜間的帶號變化量，以及上午到夜間的溫差。",
    "requiredWork": [
      "帶號變化使用後值-前值。",
      "溫差使用絕對差。",
      "三個答案附單位。"
    ],
    "fullCreditSolution": [
      "上午到下午的帶號變化為後值減前值：7−(−4)=+11°C，正號表示上升 11°C。",
      "下午到夜間的帶號變化為 −9−7=−16°C，負號表示下降 16°C。",
      "上午到夜間問的是溫差而非帶號變化，因此取絕對值 |−9−(−4)|=|−5|=5°C。"
    ],
    "alternativeSolutions": [
      "可說上升11、下降16、相差5。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三個量、符號與單位全部正確。"
      },
      {
        "score": 2,
        "criteria": "兩個完整正確，第三個有小錯。"
      },
      {
        "score": 1,
        "criteria": "至少一個帶號變化正確且知道溫差不帶方向。"
      },
      {
        "score": 0,
        "criteria": "把三個問題都用同一減法次序且大多錯。"
      }
    ],
    "scoringNotes": [
      "夜間相對上午的帶號變化為-5，但題目問的是溫差5。"
    ],
    "commonErrors": [
      "下午到夜間寫+16。",
      "溫差寫-5。",
      "上午到下午算3。"
    ],
    "independentReview": {
      "derivedResult": "+11°C、-16°C、5°C。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "8e5474b6f18f2559f0f5e272917ee375ed2e9ef375a6a476ff7b302b92fc5c93",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
