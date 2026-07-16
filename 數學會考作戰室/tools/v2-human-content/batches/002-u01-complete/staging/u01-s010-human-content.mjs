// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u01-s010-lecture-r1",
  "unitId": "u01",
  "topicId": "u01-integer-arithmetic",
  "skillId": "integer-multiplication-division",
  "title": "整數的乘法和除法：先判符號，再算絕對值",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能判斷兩整數乘積或商的符號。",
    "能計算整數乘法與整除。",
    "能處理多個負因數的乘積。",
    "能使用乘除互逆檢查。",
    "能解釋重複變化與平均分配情境。"
  ],
  "prerequisites": [
    {
      "skillId": "integer-subtraction",
      "requiredLevel": "能完成整數加減，並正確處理負號、括號和帶號數。"
    }
  ],
  "glossary": [
    {
      "term": "因數",
      "definition": "乘法中相乘的數。"
    },
    {
      "term": "乘積",
      "definition": "乘法的結果。"
    },
    {
      "term": "被除數",
      "definition": "除號前要被分配或分組的數。"
    },
    {
      "term": "除數",
      "definition": "除號後用來分配或分組的數，不能為 0。"
    },
    {
      "term": "商",
      "definition": "除法所得結果。"
    }
  ],
  "notation": [
    {
      "symbol": "a×b",
      "meaning": "a 與 b 相乘。"
    },
    {
      "symbol": "a÷b",
      "meaning": "a 除以 b；b≠0。"
    },
    {
      "symbol": "(-1)ⁿ",
      "meaning": "可用負因數個數的奇偶判斷乘積符號。"
    }
  ],
  "conceptNarrative": [
    "整數乘法與除法可以分成兩個獨立判斷：先由符號決定結果方向，再用絕對值完成數值運算。同號相乘或相除得正，異號相乘或相除得負。",
    "多個因數相乘時，不必反覆猜測符號，只要數負因數個數：偶數個負號成對抵消，乘積為正；奇數個會剩下一個負向，乘積為負。負一雖不改變絕對值，仍會改變符號。",
    "除法中要分清被除數與除數，只有除數不能為零。可用商乘除數是否回到被除數來驗算；生活情境則先把下降、債務等方向寫成負數，再依重複次數或平均份數列式。"
  ],
  "formalDefinitions": [
    {
      "name": "乘法符號規則",
      "statement": "同號兩數相乘得正，異號兩數相乘得負。"
    },
    {
      "name": "除法符號規則",
      "statement": "同號兩數相除得正，異號兩數相除得負。"
    },
    {
      "name": "零的乘法",
      "statement": "任何整數乘 0 都是 0。"
    },
    {
      "name": "除數限制",
      "statement": "0 不能作除數。"
    }
  ],
  "formulas": [
    {
      "formula": "(-a)(-b)=ab",
      "conditions": [
        "a、b≥0"
      ],
      "meaning": "兩個負方向相乘得正。"
    },
    {
      "formula": "(-a)b=-(ab)",
      "conditions": [
        "a、b≥0"
      ],
      "meaning": "一正一負得負。"
    },
    {
      "formula": "a÷b=c ⇔ b×c=a",
      "conditions": [
        "b≠0"
      ],
      "meaning": "乘除互逆。"
    }
  ],
  "nonApplicableCases": [
    "除以 0 沒有定義。",
    "a÷b 不可交換成 b÷a。",
    "負因數個數判斷只適用乘積，不能直接套在加減式。",
    "若題目要求整數答案，要先確認是否整除。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "圈出每個因數、被除數與除數的正負號，多因數乘法則數出負因數總數。",
      "check": "確認負一也列入負因數，除數的位置與被除數沒有對調。"
    },
    {
      "step": 2,
      "instruction": "依同號得正、異號得負，或負因數個數奇偶，先寫下結果符號。",
      "check": "兩數運算要同時看兩個符號，不能只由第一個數決定。"
    },
    {
      "step": 3,
      "instruction": "暫時忽略正負號，以絕對值完成乘法或除法的數值計算。",
      "check": "基本乘除結果正確，且除數不是零；連續乘除遵守由左到右。"
    },
    {
      "step": 4,
      "instruction": "把先前判定的正負號與絕對值合併，情境題同時補上正確單位。",
      "check": "負號表示的下降、債務或反方向是否在答案中完整保留。"
    },
    {
      "step": 5,
      "instruction": "除法用商乘除數驗算，乘法則以符號奇偶與估算重新核對。",
      "check": "驗算是否回到原被除數，結果大小是否符合各絕對值的乘除關係。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u01-s010-example-a",
      "prompt": "計算 (-9)×7。",
      "answer": "-63。",
      "why": "負九與正七異號，所以乘積符號為負；絕對值九乘七等於六十三，合併後得到負六十三。符號判斷與數值計算分開，可避免漏寫負號。"
    },
    {
      "exampleId": "u01-s010-example-b",
      "prompt": "計算 (-84)÷(-12)。",
      "answer": "7。",
      "why": "被除數與除數都是負數，同號相除得到正商。絕對值八十四除以十二等於七，再用七乘負十二得到負八十四，可確認答案為正七。"
    },
    {
      "exampleId": "u01-s010-example-c",
      "prompt": "計算 (-2)×(-5)×3。",
      "answer": "30。",
      "why": "式中有兩個負因數，負號個數為偶數，所以乘積為正。絕對值二乘五乘三等於三十，得到正三十；正三不會改變負因數的個數。"
    },
    {
      "exampleId": "u01-s010-ex04-r4",
      "prompt": "計算 (-96)÷8×(-2)。",
      "answer": "24。",
      "why": "乘法與除法同級，依出現順序先算 (-96)÷8=-12，再算 (-12)×(-2)=24；兩次運算各自判斷符號，可避免跳步漏掉第二個負號，並可核對負因數總數為偶數。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "只看到第一個數是負數，就認為乘積或商一定為負。",
      "correction": "必須同時比較所有相關數的符號；兩個負數同號運算的結果為正。"
    },
    {
      "mistake": "多因數乘法只配對前兩個負號，漏看後面剩餘的負因數。",
      "correction": "一次數完全部負因數，以總數的奇偶直接決定最終符號。"
    },
    {
      "mistake": "把負一當成乘法單位一，認為它不影響任何結果。",
      "correction": "負一雖不改變絕對值，仍會把乘積符號翻轉一次。"
    },
    {
      "mistake": "混淆零作為被除數與除數，認為所有含零的除法都有定義。",
      "correction": "零除以非零數等於零，但任何數除以零都沒有定義。"
    },
    {
      "mistake": "平均分擔債務時只寫每份金額大小，遺漏債務方向。",
      "correction": "先以負數表示總債務，負除以正份數後每份仍應保留負號。"
    },
    {
      "mistake": "為了先乘 8×(-2)，擅自改變原式乘除的次序。",
      "correction": "沒有括號時乘除同級且由左到右；不能跨過除號任意把後兩數先相乘。"
    }
  ],
  "selfCheck": [
    "符號先判了嗎？",
    "負因數是奇數個或偶數個？",
    "除數是否為 0？",
    "絕對值運算正確嗎？",
    "能乘回去檢查嗎？"
  ],
  "summary": [
    "同號乘除得正，異號乘除得負。",
    "偶數個負因數乘積為正，奇數個為負。",
    "任何數乘 0 得 0。",
    "0 不能作除數。"
  ],
  "connections": {
    "previous": "先備技能是整數減法，且需熟悉正負號。",
    "next": [
      "四則混合會把乘除放在加減之前。",
      "指數可表示重複乘法。",
      "素養題會把固定速率的重複變化寫成乘法。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u01-s010-v001",
      "u01-s010-v002",
      "u01-s010-v003",
      "u01-s010-v004",
      "u01-s010-v005",
      "u01-s010-v006",
      "u01-s010-v007",
      "u01-s010-v008",
      "u01-s010-v009",
      "u01-s010-v010",
      "u01-s010-v011",
      "u01-s010-v012"
    ],
    "constructedResponseIds": [
      "u01-s010-cr001",
      "u01-s010-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "先數負因數個數判符號，再計算絕對值；除數皆非 0，連續乘除依原順序重算。",
    "reviewVersion": "human-lecture-review-r2.1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "1db5c1992642fa54b38f788cd5dea4f5e430bb5247b596131c84abd5fc839fbe",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u01-s010-v001",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-4)×6 的值是多少？",
    "choices": [
      "-24",
      "24",
      "-10",
      "10"
    ],
    "answerIndex": 0,
    "explanation": "先判斷兩個因數的符號：負四與正六異號，所以乘積必為負。再計算絕對值四乘六等於二十四，將負號加回可得負二十四，代回原式也符合異號相乘規則。",
    "steps": [
      "辨認因數 -4 與 6 為一負一正，屬於異號相乘。",
      "先算兩數絕對值的乘積 4×6=24。",
      "依異號乘積為負寫成 -24，並核對沒有漏掉負號。"
    ],
    "optionAnalysis": [
      {
        "choice": "-24",
        "truth": true,
        "reason": "(-4)×6=-24。"
      },
      {
        "choice": "24",
        "truth": false,
        "reason": "漏負號。"
      },
      {
        "choice": "-10",
        "truth": false,
        "reason": "把乘法當加法。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "大小錯。"
      }
    ],
    "commonMistake": "只完成四乘六等於二十四，未依異號相乘規則補上負號。",
    "concept": "異號相乘得負。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "基本負乘正。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "fb52de334631f58af7b526860250e42200281362d1d48f09af6705ee6c9a6164",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v002",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-35)÷7 的值是多少？",
    "choices": [
      "5",
      "-5",
      "-28",
      "-42"
    ],
    "answerIndex": 1,
    "explanation": "被除數負三十五與除數正七異號，因此商是負數。絕對值部分為三十五除以七等於五，合併符號後得到負五；用負五乘七可回到負三十五。",
    "steps": [
      "比較 -35 與 7 的符號，判定兩數異號，商應為負。",
      "忽略符號先算 35÷7=5。",
      "將負號加到商上得到 -5，再以 (-5)×7=-35 驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "-5",
        "truth": true,
        "reason": "-35÷7=-5。"
      },
      {
        "choice": "-28",
        "truth": false,
        "reason": "把除法當減法。"
      },
      {
        "choice": "-42",
        "truth": false,
        "reason": "把除法當加法。"
      }
    ],
    "commonMistake": "以為除法會自動消去負號，只寫正五而沒有檢查乘回結果。",
    "concept": "異號相除得負。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "基本負除正。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0a6d3400793256c1a4f63b27e82727e7cac38fc364c020e35569782026237e01",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v003",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-8)×(-3) 的值是多少？",
    "choices": [
      "-24",
      "-11",
      "24",
      "11"
    ],
    "answerIndex": 2,
    "explanation": "負八與負三是同號因數，同號相乘的結果為正。兩個數的絕對值相乘是八乘三等於二十四，因此原式等於正二十四，而不是看到負因數就一律判成負數。",
    "steps": [
      "確認 -8 與 -3 都是負數，兩個因數同號。",
      "套用同號相乘得正，先決定結果符號為正。",
      "計算 8×3=24，寫出原式結果為 24。"
    ],
    "optionAnalysis": [
      {
        "choice": "-24",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "-11",
        "truth": false,
        "reason": "把乘法當加法。"
      },
      {
        "choice": "24",
        "truth": true,
        "reason": "(-8)(-3)=24。"
      },
      {
        "choice": "11",
        "truth": false,
        "reason": "大小錯。"
      }
    ],
    "commonMistake": "只注意式中出現負號便選負二十四，漏看兩個負號會使乘積為正。",
    "concept": "負乘負得正。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "基本負乘負。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d14a20d4cf40bc2fefad220c3015c4baa1df21f339f429c54b139f0292148787",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v004",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "72÷(-9) 的值是多少？",
    "choices": [
      "8",
      "-63",
      "63",
      "-8"
    ],
    "answerIndex": 3,
    "explanation": "正七十二除以負九是一正一負，異號相除的商為負。絕對值運算七十二除以九等於八，因此結果是負八；用負八乘負九會回到正七十二。",
    "steps": [
      "辨認被除數 72 為正、除數 -9 為負，兩者異號。",
      "先計算絕對值 72÷9=8。",
      "依異號相除得負寫成 -8，並用 (-8)×(-9)=72 檢查。"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "-63",
        "truth": false,
        "reason": "誤作減法。"
      },
      {
        "choice": "63",
        "truth": false,
        "reason": "誤作加法。"
      },
      {
        "choice": "-8",
        "truth": true,
        "reason": "72÷(-9)=-8。"
      }
    ],
    "commonMistake": "把七十二除以九算對後，沒有把除數為負所決定的負號寫進商。",
    "concept": "正除負得負。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "正數除以負數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0ff368c20055909eb7ec070c10bd3f1f6cc234f9d85d8019cf379308eff84e85",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-2)×(-3)×(-5) 的結果符號與值為何？",
    "choices": [
      "-30",
      "30",
      "-10",
      "10"
    ],
    "answerIndex": 0,
    "explanation": "三個因數都是負數，負因數共有三個，是奇數個，所以整體乘積為負。絕對值部分二乘三再乘五等於三十，故結果是負三十；第三個負號仍會改變符號。",
    "steps": [
      "數出 -2、-3、-5 共三個負因數。",
      "三是奇數，依負因數個數判定乘積符號為負。",
      "計算 2×3×5=30，合併符號得到 -30。"
    ],
    "optionAnalysis": [
      {
        "choice": "-30",
        "truth": true,
        "reason": "負號3個，結果-30。"
      },
      {
        "choice": "30",
        "truth": false,
        "reason": "忽略第三個負號。"
      },
      {
        "choice": "-10",
        "truth": false,
        "reason": "大小錯。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "大小與符號錯。"
      }
    ],
    "commonMistake": "只把前兩個負因數配成正數，忘記乘上第三個負因數後符號會再翻轉。",
    "concept": "奇數個負因數的乘積為負。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "判斷三個負因數的乘積。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2b8ff067ffed13b9b7eab8df27edc02794b142daac59fab2326b7d396a52575a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-96)÷(-12) 的值是多少？",
    "choices": [
      "-8",
      "8",
      "-108",
      "108"
    ],
    "answerIndex": 1,
    "explanation": "負九十六與負十二同號，所以兩個負數相除的商為正。絕對值部分九十六除以十二等於八，因此答案是正八；以八乘負十二可驗證得到負九十六。",
    "steps": [
      "確認被除數與除數都是負數，屬於同號相除。",
      "先決定商為正，再計算 96÷12=8。",
      "寫出結果 8，並以 8×(-12)=-96 驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "-8",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "8",
        "truth": true,
        "reason": "(-96)/(-12)=8。"
      },
      {
        "choice": "-108",
        "truth": false,
        "reason": "誤作加法。"
      },
      {
        "choice": "108",
        "truth": false,
        "reason": "漏除法。"
      }
    ],
    "commonMistake": "只因被除數是負數便把商寫成負八，沒有同時比較除數的符號。",
    "concept": "負除負得正。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "負數除以負數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "091a3cd5c1a91a5948c3460715ca77047a21b7cfb51617b4c902c2a497af24f4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v007",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-2)×5×(-3)×(-1) 的值是多少？",
    "choices": [
      "30",
      "-10",
      "-30",
      "10"
    ],
    "answerIndex": 2,
    "explanation": "乘積中的負因數是負二、負三與負一，共三個，正五不影響負號個數。奇數個負因數使結果為負；絕對值二乘五乘三乘一等於三十，所以答案是負三十。",
    "steps": [
      "逐項辨認符號，數出 -2、-3、-1 三個負因數。",
      "負因數個數為奇數，因此先判定乘積符號為負。",
      "計算 2×5×3×1=30，得到完整結果 -30。"
    ],
    "optionAnalysis": [
      {
        "choice": "30",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "-10",
        "truth": false,
        "reason": "漏乘3。"
      },
      {
        "choice": "-30",
        "truth": true,
        "reason": "三負因數，絕對值30，得-30。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "大小與符號錯。"
      }
    ],
    "commonMistake": "把負一視為乘法單位而忽略它的負號，因而錯把三個負因數算成兩個。",
    "concept": "乘以-1會改變符號。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "處理含-1的多因數乘積。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a88f2b41dbc1e1be25201ea1c7548a45b7b216656e5cff2218e86baddb59d7f2",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v008",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 x×(-7)=56，則 x 等於多少？",
    "choices": [
      "8",
      "-49",
      "49",
      "-8"
    ],
    "answerIndex": 3,
    "explanation": "要由乘積反求 x，可將等式兩邊除以負七，得到 x=56÷(-7)。正五十六與負七異號，商為負八；代回 (-8)×(-7)=56，確實符合原等式，也能確認 x 與負七同為負數。",
    "steps": [
      "將 x×(-7)=56 兩邊同除以 -7，列出 x=56÷(-7)。",
      "判斷異號相除得負，並計算 56÷7=8，所以 x=-8。",
      "把 x=-8 乘回 -7，得到正 56，完成驗證。"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": false,
        "reason": "8×-7=-56。"
      },
      {
        "choice": "-49",
        "truth": false,
        "reason": "大小錯。"
      },
      {
        "choice": "49",
        "truth": false,
        "reason": "49×-7不等56。"
      },
      {
        "choice": "-8",
        "truth": true,
        "reason": "x=-8。"
      }
    ],
    "commonMistake": "只算五十六除以七得到正八，沒有利用乘積為正判斷兩因數必須同號。",
    "concept": "未知因數＝積÷已知因數。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "由積反求負因數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "11d24818e84040695410ef192185adb5c07cc8c56fe3c29f51ab391b4169c8da",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v009",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-144)÷8÷(-3) 的值是多少？",
    "choices": [
      "6",
      "-6",
      "54",
      "-54"
    ],
    "answerIndex": 0,
    "explanation": "連續除法沒有括號改變順序時，應由左向右計算。先算負一百四十四除以八得負十八，再算負十八除以負三；同號相除得正六，所以原式值為六。",
    "steps": [
      "依乘除同級由左到右，先計算 (-144)÷8=-18。",
      "將原式化為 (-18)÷(-3)，確認第二次是同號相除。",
      "計算 18÷3=6 並取正號，得到結果 6。"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": true,
        "reason": "(-144÷8)÷(-3)=6。"
      },
      {
        "choice": "-6",
        "truth": false,
        "reason": "漏第二次符號轉正。"
      },
      {
        "choice": "54",
        "truth": false,
        "reason": "錯誤分組。"
      },
      {
        "choice": "-54",
        "truth": false,
        "reason": "大小與符號錯。"
      }
    ],
    "commonMistake": "先把右側八除以負三分成一組，擅自改變連續除法由左到右的結合順序。",
    "concept": "連續乘除同級由左到右。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "處理連續除法與兩次符號判斷。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "eab881af06a28d909a907c8d2e62d49bb212e213478f6793a713fc60c4d502fb",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v010",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某設備每小時效能變化為 -4 單位，連續運轉 9 小時，總變化量是多少？",
    "choices": [
      "36 單位",
      "-36 單位",
      "-13 單位",
      "5 單位"
    ],
    "answerIndex": 1,
    "explanation": "每小時變化負四單位，連續九小時就是把同一變化累積九次，可列為 (-4)×9。異號相乘且四乘九等於三十六，所以總變化量為負三十六單位。",
    "steps": [
      "把每小時效能變化保留為帶號數 -4 單位。",
      "九小時重複同一變化，列式 (-4)×9。",
      "計算得 -36 單位，並確認題目問的是總變化而非最後效能。"
    ],
    "optionAnalysis": [
      {
        "choice": "36 單位",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "-36 單位",
        "truth": true,
        "reason": "-4×9=-36。"
      },
      {
        "choice": "-13 單位",
        "truth": false,
        "reason": "把乘法當加法。"
      },
      {
        "choice": "5 單位",
        "truth": false,
        "reason": "錯誤相減。"
      }
    ],
    "commonMistake": "題目未提供起始效能，卻自行假設起始值並回答剩餘效能而非總變化量。",
    "concept": "固定帶號速率的重複變化用乘法。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "literacy"
    ],
    "estimatedTimeSec": "80",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "把每小時下降轉成負數乘法。",
    "literacyContextNecessity": "每小時變化、持續時間與「總變化」措辭共同決定算式。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d2fefdfc75d5741906fbaa76b55c26eee0634e0eccd20d56e7b0bc15a2e2f118",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v011",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "冷藏室起始溫度 5°C，控制器每小時使溫度變化 -2°C，連續 6 小時後溫度為何？",
    "choices": [
      "17°C",
      "-12°C",
      "-7°C",
      "7°C"
    ],
    "answerIndex": 2,
    "explanation": "每小時降二度記為負二度，六小時的總變化是 (-2)×6=-12 度。最後溫度還要把這個變化加到起始五度，因此 5+(-12)=-7 度；所得溫度低於零且方向合理。",
    "steps": [
      "先由每小時 -2°C、共 6 小時計算總變化 (-2)×6=-12°C。",
      "把總變化加到起始溫度，列式 5+(-12)。",
      "完成加法得到 -7°C，區分最後溫度與單純變化量。"
    ],
    "optionAnalysis": [
      {
        "choice": "17°C",
        "truth": false,
        "reason": "把降溫當升溫。"
      },
      {
        "choice": "-12°C",
        "truth": false,
        "reason": "是總變化不是最後值。"
      },
      {
        "choice": "-7°C",
        "truth": true,
        "reason": "5+(-2)×6=-7°C。"
      },
      {
        "choice": "7°C",
        "truth": false,
        "reason": "只減一次2。"
      }
    ],
    "commonMistake": "算出六小時總變化負十二度後直接作答，忘記題目另給起始溫度五度。",
    "concept": "最後量＝起始量＋速率×時間。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "結合負速率乘法與起始溫度。",
    "literacyContextNecessity": "起始值、每小時變化、時間及求最後值都必要。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c9768cd4ba8c60cd80644ad53233c05a757813d0aeb54852b8ab31fc31654993",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v012",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "共同債務記為 -840 元，由 7 人平均分擔。每人分擔的帶號金額是多少？",
    "choices": [
      "120 元",
      "-5,880 元",
      "5,880 元",
      "-120 元"
    ],
    "answerIndex": 3,
    "explanation": "共同債務以負八百四十元表示，平均分給七人就是計算 (-840)÷7。負數除以正數得負，八百四十除以七等於一百二十，所以每人帶號金額為負一百二十元。",
    "steps": [
      "保留債務方向，將總額寫成 -840 元。",
      "平均分成七份，列出 (-840)÷7，先判斷商為負。",
      "計算 840÷7=120，得到每人 -120 元並以七份合計驗證。"
    ],
    "optionAnalysis": [
      {
        "choice": "120 元",
        "truth": false,
        "reason": "漏負號。"
      },
      {
        "choice": "-5,880 元",
        "truth": false,
        "reason": "把除法當乘法且負。"
      },
      {
        "choice": "5,880 元",
        "truth": false,
        "reason": "把除法當乘法。"
      },
      {
        "choice": "-120 元",
        "truth": true,
        "reason": "-840/7=-120元。"
      }
    ],
    "commonMistake": "只寫每人一百二十元的大小，漏掉負號所表示的債務方向。",
    "concept": "負總量平均分配給正份數，商為負。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "在債務分攤中使用負除正。",
    "literacyContextNecessity": "帶號總債務、分擔人數與平均分配語意共同決定商。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a6d97d4d94e2c9e09d6d06ba51013573f046435ebe24a54e0222b1543786ea13",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u01-s010-cr001",
    "unitId": "u01",
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "計算：(-6)×4、(-45)÷(-5)、(-2)×(-3)×7。每題先判斷符號，再算絕對值。",
    "requiredWork": [
      "每題分成符號與絕對值兩步。",
      "除數不得忽略。"
    ],
    "fullCreditSolution": [
      "第一式 (-6)×4 為異號相乘，結果取負；絕對值 6×4=24，所以答案是 -24。",
      "第二式 (-45)÷(-5) 為同號相除，結果取正；絕對值 45÷5=9，所以答案是 9。",
      "第三式 (-2)×(-3)×7 有兩個負因數，負號個數為偶數，乘積為正；2×3×7=42。",
      "三式分別用符號規則與絕對值運算核對，結果依序為 -24、9、42。"
    ],
    "alternativeSolutions": [
      "可用逐步相乘，但須顯示符號判斷。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三題符號、值與步驟全部正確。"
      },
      {
        "score": 2,
        "criteria": "三個答案正確但一處說明缺漏；或一題小錯。"
      },
      {
        "score": 1,
        "criteria": "至少一題完整正確且符號規則可辨認。"
      },
      {
        "score": 0,
        "criteria": "同號異號規則大多顛倒。"
      }
    ],
    "scoringNotes": [
      "第三題只有兩個負因數。"
    ],
    "commonErrors": [
      "將負六乘正四寫成正二十四，沒有依一正一負判定乘積為負。",
      "把負四十五除以負五仍寫成負九，忽略同號相除的商為正。",
      "第三式只算兩個負因數相乘，漏乘最後的正七而把答案停在六。"
    ],
    "independentReview": {
      "derivedResult": "-24、9、42。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "13c176406a31206ceedad7a83ea65aedc5449910b07ac69cc5a2e0ac27a7ad61",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "每一式先辨認因數或被除數、除數的符號，決定結果正負。",
      "再忽略符號計算絕對值部分，分別得到 24、9、42。",
      "把先前判定的符號加回，並用乘回或負因數個數檢查答案。"
    ]
  },
  {
    "questionId": "u01-s010-cr002",
    "unitId": "u01",
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某潛水器起始深度為 -20 公尺，每分鐘下沉 3 公尺，連續 8 分鐘後，再平均分成 4 段回報這段總深度變化。求最後深度、總變化量，以及每段平均變化量。",
    "requiredWork": [
      "下沉速率記-3。",
      "最後深度與總變化分開。",
      "平均變化量保留負號。"
    ],
    "fullCreditSolution": [
      "下沉方向記為負，每分鐘變化 -3 公尺，八分鐘總變化為 (-3)×8=-24 公尺。",
      "最後深度要把總變化加到起始深度：-20+(-24)=-44 公尺。",
      "題目分段的是這段總變化而非最後深度，所以每段平均變化為 (-24)÷4=-6 公尺。"
    ],
    "alternativeSolutions": [
      "可先求最後深度，再用-44-(-20)驗算總變化。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三個量-24、-44、-6及意義全部正確。"
      },
      {
        "score": 2,
        "criteria": "兩個量正確且方法完整；或一處算術小錯。"
      },
      {
        "score": 1,
        "criteria": "正確建立-3×8或求出一個主要量。"
      },
      {
        "score": 0,
        "criteria": "把下沉記正且無可辨認方法。"
      }
    ],
    "scoringNotes": [
      "每段是總變化平均，不是最後深度除4。"
    ],
    "commonErrors": [
      "用最後深度負四十四除以四，混淆位置值與題目要求分段的總變化量。",
      "把下沉二十四公尺寫成正二十四，漏掉向下方向應以負號表示。",
      "將起始負二十與變化負二十四相減，錯把最後深度算成正四公尺。"
    ],
    "independentReview": {
      "derivedResult": "總變化-24公尺，最後-44公尺，每段-6公尺。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "59506681a644c7108f8f166315ce48f1268a5fc6d04566c8e863d7544e3cdb14",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "先以負號表示下沉方向，利用速率乘時間求八分鐘總變化。",
      "將總變化加到起始深度，分開記錄最後位置與變化量。",
      "只把總變化平均分為四段，保留負號並檢查四段合計仍為負二十四。"
    ]
  }
];

export const DRAWING_SPECS = [];
