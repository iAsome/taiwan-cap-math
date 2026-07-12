// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u12-s001-lecture-r1",
  "unitId": "u12",
  "numericUnitId": 12,
  "topicId": "u12-methods",
  "skillId": "factoring-common",
  "lockedSkillTitle": "提公因式",
  "title": "提公因式：先找每一項共同擁有的部分",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能說明因式分解是乘法展開的逆運算。",
    "能找出多項式各項的最大公因式。",
    "能處理數字、字母與次方同時出現的公因式。",
    "能辨認共同括號也是公因式。",
    "能展開檢查分解結果。"
  ],
  "prerequisites": [],
  "prerequisiteBridge": "本技能為本單元起點，先從分配律的逆運算建立概念。",
  "glossary": [
    {
      "term": "因式",
      "definition": "相乘後形成原式的每一個乘數。"
    },
    {
      "term": "因式分解",
      "definition": "把多項式改寫成兩個或更多因式相乘。"
    },
    {
      "term": "公因式",
      "definition": "每一項都含有的共同乘數。"
    },
    {
      "term": "最大公因式",
      "definition": "可提出的共同部分中，數字係數最大且字母次方取最低者。"
    }
  ],
  "notation": [
    {
      "symbol": "ab",
      "meaning": "a 與 b 相乘。"
    },
    {
      "symbol": "x^2",
      "meaning": "x 的平方，也就是 x·x。"
    },
    {
      "symbol": "k(A+B)",
      "meaning": "k 是括號 A+B 的共同因式。"
    }
  ],
  "conceptNarrative": [
    "展開使用分配律 kA+kB=k(A+B) 的反方向，就是提公因式。",
    "找數字公因式時看所有係數的最大公因數；找字母時只保留每項都有的字母，次方取最低。",
    "提出後，括號內每一項都要用原項除以公因式，不能漏項。",
    "若多項式首項為負，有時提出負公因式可讓括號首項為正，後續較易判讀。"
  ],
  "formalDefinitions": [
    {
      "name": "提公因式",
      "statement": "若每一項都可寫成 g 乘某式，則把 g 提出，形成 g(各項除以 g 的結果)。"
    }
  ],
  "formulas": [
    {
      "formula": "ga+gb=g(a+b)",
      "conditions": [
        "g 同時整除兩項或同時是兩項的因式"
      ],
      "meaning": "分配律的逆運算。"
    },
    {
      "formula": "ax+ay+az=a(x+y+z)",
      "conditions": [
        "三項都含因式 a"
      ],
      "meaning": "多項共同因式。"
    }
  ],
  "nonApplicableCases": [
    "只在部分項含有某字母時，不能把該字母提出。",
    "提出的數若不能整除所有係數，就不是公因式。",
    "分解結果仍是加減式而沒有乘積形式，尚未完成因式分解。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "列出每項係數的最大公因數。",
      "check": "檢查數字是否能整除每一項。"
    },
    {
      "step": 2,
      "instruction": "找每項共有的字母，次方取最低。",
      "check": "例如 x^3、x^2、x 共同部分是 x。"
    },
    {
      "step": 3,
      "instruction": "把共同部分寫在括號外。",
      "check": "若首項為負，評估是否提出負號。"
    },
    {
      "step": 4,
      "instruction": "每項除以公因式寫入括號。",
      "check": "逐項相乘是否回到原項？"
    },
    {
      "step": 5,
      "instruction": "檢查括號內是否還能再提出。",
      "check": "目標是完整分解。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "18x+24",
      "solutionSteps": [
        "18 與 24 的最大公因數是 6。",
        "兩項都沒有共同字母。",
        "18x÷6=3x，24÷6=4。"
      ],
      "answer": "6(3x+4)"
    },
    {
      "exampleId": "L2",
      "prompt": "12a^2b-18ab^2",
      "solutionSteps": [
        "係數公因數為 6。",
        "字母共同有 a、b，最低次方各為 1。",
        "除回括號得到 2a 與 -3b。"
      ],
      "answer": "6ab(2a-3b)"
    },
    {
      "exampleId": "L3",
      "prompt": "-14y^3+21y^2",
      "solutionSteps": [
        "共同部分可取 7y^2。",
        "提出 -7y^2 使括號首項為正。",
        "展開 -7y^2(2y-3) 得原式。"
      ],
      "answer": "-7y^2(2y-3)"
    },
    {
      "exampleId": "L4",
      "prompt": "5m(m+2)-3(m+2)",
      "solutionSteps": [
        "兩項共同因式不是單一字母，而是整個括號 m+2。",
        "分別除以 m+2 得 5m 與 -3。"
      ],
      "answer": "(m+2)(5m-3)"
    }
  ],
  "difficultyConnections": {
    "basic": "辨認單一結構並完成直接分解。",
    "standard": "結合符號、係數或兩步驟方法。",
    "advanced": "比較策略、處理參數或驗證限制。",
    "literacy": "從必要情境建立或解讀乘積結構。"
  },
  "commonMistakes": [
    {
      "mistake": "只提出數字，漏掉共同字母。",
      "why": "沒有逐項比較字母。",
      "correction": "係數與字母都要檢查。"
    },
    {
      "mistake": "把最高次方提出。",
      "why": "誤以為越大越好。",
      "correction": "共同次方必須取最低，否則低次項無法整除。"
    },
    {
      "mistake": "括號內漏寫一項。",
      "why": "除法時只處理部分項。",
      "correction": "原式有幾項，括號通常也要保留幾項。"
    },
    {
      "mistake": "提出負號後括號符號未全反。",
      "why": "只改第一項。",
      "correction": "每一項都要除以負公因式。"
    },
    {
      "mistake": "把和的某一部分當因式。",
      "why": "公因式必須整體相乘。",
      "correction": "檢查能否用分配律展開。"
    },
    {
      "mistake": "沒有展開檢查。",
      "why": "只看外觀。",
      "correction": "用括號外因式乘回每一項。"
    }
  ],
  "selfCheck": [
    "我是否先判斷可用的方法？",
    "每一項、每個符號與外層因式都保留了嗎？",
    "我是否把結果展開回原式？",
    "情境中的單位與變數限制是否合理？"
  ],
  "summary": [
    "提公因式是分配律的逆運算。",
    "數字取最大公因數，字母取共同且最低次方。",
    "提出後逐項相除，最後展開回查。"
  ],
  "connections": {
    "previous": "無單元內先備技能；連接分配律與多項式運算。",
    "next": "依鎖定順序銜接下一技能；本單元不提前使用一元二次方程式解根。"
  },
  "figureReferences": [
    {
      "figureId": "u12-fig-common-area",
      "purpose": "用共享高度說明 hu+hv=h(u+v)。",
      "altText": "兩區共享高度 h 的面積模型。"
    }
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u12-s001-v001",
      "u12-s001-v002",
      "u12-s001-v003",
      "u12-s001-v004",
      "u12-s001-v005",
      "u12-s001-v006",
      "u12-s001-v007",
      "u12-s001-v008",
      "u12-s001-v009",
      "u12-s001-v010",
      "u12-s001-v011",
      "u12-s001-v012"
    ],
    "constructedResponseIds": [
      "u12-s001-cr001",
      "u12-s001-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐一展開四個例題並核對係數、字母最低次方與負號；共同括號例也能回到原式，未使用後續一元二次方程式概念。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "79e5c2d059fdb0782b650d0194316723ec14df26e28abf521f178c341a638171"
};

export const QUESTIONS = [
  {
    "questionId": "u12-s001-v001",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "將 6x+9 因式分解，下列何者正確？",
    "givenConditions": [
      "x 為變數；係數為整數。"
    ],
    "target": "找最大公因式並寫成乘積。",
    "choices": [
      "3(2x+3)",
      "6(x+3)",
      "3(2x+6)",
      "x(6+9)"
    ],
    "answerIndex": 0,
    "independentSolution": "6x÷3=2x，9÷3=3，所以答案為 3(2x+3)。",
    "explanation": "6 與 9 的最大公因數是 3，因此 6x+9=3(2x+3)。",
    "steps": [
      "求係數最大公因數 3。",
      "兩項除以 3 得 2x 與 3。",
      "展開檢查。"
    ],
    "optionAnalysis": [
      {
        "choice": "3(2x+3)",
        "truth": true,
        "reason": "展開為 6x+9，且 3 是兩項係數的最大公因數。"
      },
      {
        "choice": "6(x+3)",
        "truth": false,
        "reason": "展開為 6x+18，常數項不符。"
      },
      {
        "choice": "3(2x+6)",
        "truth": false,
        "reason": "展開為 6x+18，括號內 9÷3 算錯。"
      },
      {
        "choice": "x(6+9)",
        "truth": false,
        "reason": "第二項 9 不含 x，不能提出 x。"
      }
    ],
    "misconceptionTarget": "把不共同的 x 提出，或把 9÷3 算成 6。",
    "prerequisiteCheck": "只需整數整除與分配律。",
    "estimatedTimeSec": 60,
    "unitAndRoundingChecks": "無單位；全為精確整數係數，不涉及近似。",
    "ambiguityAndBoundaryAudit": "題目要求最大公因式形式；等價交換順序不影響唯一選項。",
    "difficultyReason": "只含兩項且公因式為單一整數，辨認直接。",
    "literacyContextNecessity": null,
    "authoringIntent": "建立提數字公因式的基本動作。",
    "concept": "分配律逆運算",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "提公因式"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "12a9a89daaa3e4a41257cc3b01e8c19f7d858f476f5b186d8ccad7c4c53985b3"
  },
  {
    "questionId": "u12-s001-v002",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "12a²b 與 18ab² 的最大共同單項因式為何？",
    "givenConditions": [
      "a、b 為代數變數。"
    ],
    "target": "找係數與字母的共同最低次方。",
    "choices": [
      "3ab",
      "6ab",
      "6a²b²",
      "6a²b"
    ],
    "answerIndex": 1,
    "independentSolution": "12a²b÷6ab=2a；18ab²÷6ab=3b，兩者皆整除，因此共同最大部分是 6ab。",
    "explanation": "係數最大公因數為 6；a 的最低次方是 1，b 的最低次方也是 1，所以為 6ab。",
    "steps": [
      "求 gcd(12,18)=6。",
      "比較 a 次方取 1。",
      "比較 b 次方取 1。"
    ],
    "optionAnalysis": [
      {
        "choice": "3ab",
        "truth": false,
        "reason": "雖是公因式，但數字係數不是最大。"
      },
      {
        "choice": "6ab",
        "truth": true,
        "reason": "6 同時整除 12、18，且兩項共同含 a¹b¹。"
      },
      {
        "choice": "6a²b²",
        "truth": false,
        "reason": "次方過高，不能整除任一較低次方的項。"
      },
      {
        "choice": "6a²b",
        "truth": false,
        "reason": "第二項只有 a¹，無法被 a² 整除。"
      }
    ],
    "misconceptionTarget": "把最高次方誤當共同次方。",
    "prerequisiteCheck": "需會最大公因數及同底數次方相除。",
    "estimatedTimeSec": 75,
    "unitAndRoundingChecks": "無實際單位；次方為整數且結果精確。",
    "ambiguityAndBoundaryAudit": "「最大」指單項式整除意義；未限定 a、b 數值也不影響形式判斷。",
    "difficultyReason": "需要同時處理係數與兩種字母，但不需分解整個多項式。",
    "literacyContextNecessity": null,
    "authoringIntent": "練習最大共同單項式。",
    "concept": "最大公因式",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "提公因式"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "58c4fce978b35e7df6102710af4ec2d892d13568b2a9b76f9dd00b3be970d0a5"
  },
  {
    "questionId": "u12-s001-v003",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "將 8x³+12x² 完整提出最大公因式，答案是哪一個？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "完成提公因式。",
    "choices": [
      "2x²(4x+6)",
      "4x(2x²+3x)",
      "4x²(2x+3)",
      "4x²(2x²+3)"
    ],
    "answerIndex": 2,
    "independentSolution": "8x³÷4x²=2x，12x²÷4x²=3；括號內 2x 與 3 無公因式。",
    "explanation": "係數取 4，x 的最低次方取 2，故 8x³+12x²=4x²(2x+3)。",
    "steps": [
      "求係數公因數 4。",
      "x³ 與 x² 取 x²。",
      "逐項相除並檢查括號。"
    ],
    "optionAnalysis": [
      {
        "choice": "2x²(4x+6)",
        "truth": false,
        "reason": "可展開回原式，但括號內仍可提 2，未完整。"
      },
      {
        "choice": "4x(2x²+3x)",
        "truth": false,
        "reason": "可展開回原式，但漏提共同的另一個 x。"
      },
      {
        "choice": "4x²(2x+3)",
        "truth": true,
        "reason": "4x² 是兩項的最大共同單項式，括號內不再有共同因式。"
      },
      {
        "choice": "4x²(2x²+3)",
        "truth": false,
        "reason": "第一項展開成 8x⁴，次方錯。"
      }
    ],
    "misconceptionTarget": "只提出部分公因式，或次方相除錯誤。",
    "prerequisiteCheck": "需理解 x³÷x²=x。",
    "estimatedTimeSec": 75,
    "unitAndRoundingChecks": "無單位與近似；指數皆為非負整數。",
    "ambiguityAndBoundaryAudit": "題目明示「最大」與「完整」，排除只提部分公因式的等價形式。",
    "difficultyReason": "除了正確性還要判斷是否完整分解。",
    "literacyContextNecessity": null,
    "authoringIntent": "強化最低次方與完整性。",
    "concept": "共同最低次方",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "提公因式"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "1e16572e5e001d1a8a7449b1a7d50befcadb89a3ab5e14d2627fe36afffda4f8"
  },
  {
    "questionId": "u12-s001-v004",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "將 -15y²+10y 分解，若希望括號首項係數為正，下列何者正確？",
    "givenConditions": [
      "y 為變數；要求括號首項正。"
    ],
    "target": "選擇負公因式並分解。",
    "choices": [
      "-5y(3y+2)",
      "5y(-3y-2)",
      "-5(3y²-2y)",
      "-5y(3y-2)"
    ],
    "answerIndex": 3,
    "independentSolution": "-5y·3y=-15y²，-5y·(-2)=+10y，因此答案正確。",
    "explanation": "提出 -5y：(-15y²)÷(-5y)=3y，10y÷(-5y)=-2。",
    "steps": [
      "共同部分為 5y。",
      "為使括號首項正，提出 -5y。",
      "兩項逐一除以 -5y。"
    ],
    "optionAnalysis": [
      {
        "choice": "-5y(3y+2)",
        "truth": false,
        "reason": "展開第二項為 -10y，符號錯。"
      },
      {
        "choice": "5y(-3y-2)",
        "truth": false,
        "reason": "展開第二項為 -10y，符號錯。"
      },
      {
        "choice": "-5(3y²-2y)",
        "truth": false,
        "reason": "展開正確但未提出共同 y，不是最大公因式。"
      },
      {
        "choice": "-5y(3y-2)",
        "truth": true,
        "reason": "展開為 -15y²+10y，括號首項 3y 為正。"
      }
    ],
    "misconceptionTarget": "提出負數後只改第一項符號。",
    "prerequisiteCheck": "需會負數除法與單項式相除。",
    "estimatedTimeSec": 90,
    "unitAndRoundingChecks": "無單位；係數與符號皆精確。",
    "ambiguityAndBoundaryAudit": "若不要求首項正，5y(-3y+2)也等價；題幹條件使選項唯一。",
    "difficultyReason": "需處理負公因式與題目指定的呈現條件。",
    "literacyContextNecessity": null,
    "authoringIntent": "練習提出負公因式。",
    "concept": "負號分配",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "提公因式"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "3c9cb8f3499559f29e22547250e7b08d23937f8b779044f9abb7f3764487e2c7"
  },
  {
    "questionId": "u12-s001-v005",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "因式分解 3x(x-2)+5(x-2)，結果為何？",
    "givenConditions": [
      "把整個 x-2 視為共同因式。"
    ],
    "target": "提出共同括號。",
    "choices": [
      "(x-2)(3x+5)",
      "8x(x-2)",
      "(x-2)(3x-5)",
      "(x-2)(8x)"
    ],
    "answerIndex": 0,
    "independentSolution": "(x-2)(3x+5)=3x(x-2)+5(x-2)，完全等於原式。",
    "explanation": "令 M=x-2，原式為 3xM+5M=M(3x+5)。",
    "steps": [
      "辨認共同整體 x-2。",
      "提出共同括號。",
      "以分配律展開回查。"
    ],
    "optionAnalysis": [
      {
        "choice": "(x-2)(3x+5)",
        "truth": true,
        "reason": "兩項均含完整因式 x-2，提出後剩 3x 與 5。"
      },
      {
        "choice": "8x(x-2)",
        "truth": false,
        "reason": "把 3x 與 5 誤加成 8x。"
      },
      {
        "choice": "(x-2)(3x-5)",
        "truth": false,
        "reason": "第二項原為正 5(x-2)，符號不應改。"
      },
      {
        "choice": "(x-2)(8x)",
        "truth": false,
        "reason": "常數 5 不能與 3x 合併為同類項。"
      }
    ],
    "misconceptionTarget": "只找單一字母，未把括號視為整體。",
    "prerequisiteCheck": "需理解分配律和整體代換觀念。",
    "estimatedTimeSec": 90,
    "unitAndRoundingChecks": "無單位與近似；括號不可拆散判斷。",
    "ambiguityAndBoundaryAudit": "x-2 即使在 x=2 時為 0，因式恆等仍成立。",
    "difficultyReason": "共同因式是二項式而非單項式。",
    "literacyContextNecessity": null,
    "authoringIntent": "建立共同括號也是公因式。",
    "concept": "整體公因式",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "提公因式"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "8253fb211b13a50bb112e37745ebdf6dd509f4903f235dff98f89029903a86f8"
  },
  {
    "questionId": "u12-s001-v006",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "將 6x²y-9xy²+12xy 完整因式分解，何者正確？",
    "givenConditions": [
      "x、y 為變數。"
    ],
    "target": "提出三項最大公因式。",
    "choices": [
      "3x(2xy-3y²+4y)",
      "3xy(2x-3y+4)",
      "3xy(2x-3y+12)",
      "6xy(x-3y+2)"
    ],
    "answerIndex": 1,
    "independentSolution": "三個商為 2x、-3y、4；括號內三項無共同因式。",
    "explanation": "係數最大公因數為 3；三項共同含 x、y 各一次。",
    "steps": [
      "gcd(6,9,12)=3。",
      "比較 x、y 最低次方皆為 1。",
      "逐項除以 3xy。"
    ],
    "optionAnalysis": [
      {
        "choice": "3x(2xy-3y²+4y)",
        "truth": false,
        "reason": "展開正確但括號仍共同含 y，未完整。"
      },
      {
        "choice": "3xy(2x-3y+4)",
        "truth": true,
        "reason": "展開三項依序回到 6x²y、-9xy²、12xy。"
      },
      {
        "choice": "3xy(2x-3y+12)",
        "truth": false,
        "reason": "最後一項展開為 36xy。"
      },
      {
        "choice": "6xy(x-3y+2)",
        "truth": false,
        "reason": "中間項展開為 -18xy²。"
      }
    ],
    "misconceptionTarget": "三項公因式漏字母或最後常數除法錯。",
    "prerequisiteCheck": "需會三個整數的最大公因數與單項式相除。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位；所有係數精確。",
    "ambiguityAndBoundaryAudit": "完整分解要求提出 3xy；部分提出形式不算最佳答案。",
    "difficultyReason": "同時處理三項、兩字母與負號。",
    "literacyContextNecessity": null,
    "authoringIntent": "練習多項三項提公因式。",
    "concept": "多項公因式",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "提公因式"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "1f4a0eb236b079e1292076a186ad5a4337d83ada57e61e50ce6cbbd93f94001b"
  },
  {
    "questionId": "u12-s001-v007",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "化簡並因式分解 2a(x+y)-3b(x+y)，下列何者正確？",
    "givenConditions": [
      "a、b、x、y 為變數。"
    ],
    "target": "辨認共同二項式並保留不同係數。",
    "choices": [
      "(x+y)(2a+3b)",
      "(a+b)(2x-3y)",
      "(x+y)(2a-3b)",
      "(x+y)(-ab)"
    ],
    "answerIndex": 2,
    "independentSolution": "(x+y)(2a-3b)=2a(x+y)-3b(x+y)，與原式逐項相同。",
    "explanation": "把 M=x+y，原式為 2aM-3bM=M(2a-3b)。",
    "steps": [
      "將共同括號視為 M。",
      "使用 AM+BM=(A+B)M。",
      "展開回查兩項。"
    ],
    "optionAnalysis": [
      {
        "choice": "(x+y)(2a+3b)",
        "truth": false,
        "reason": "第二項原為負，提出後仍應為負。"
      },
      {
        "choice": "(a+b)(2x-3y)",
        "truth": false,
        "reason": "改變了各項配對，展開不等於原式。"
      },
      {
        "choice": "(x+y)(2a-3b)",
        "truth": true,
        "reason": "提出 x+y 後剩下 2a 與 -3b。"
      },
      {
        "choice": "(x+y)(-ab)",
        "truth": false,
        "reason": "2a 與 -3b 不是同類項，不能合併。"
      }
    ],
    "misconceptionTarget": "把不同字母係數誤合併，或漏負號。",
    "prerequisiteCheck": "需能把二項式視為單一因式。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位；不需設定變數值。",
    "ambiguityAndBoundaryAudit": "因式順序可交換，但選項僅一個展開完全一致。",
    "difficultyReason": "共同因式與括號外係數都含變數，需要整體辨認。",
    "literacyContextNecessity": null,
    "authoringIntent": "處理含多變數的共同括號。",
    "concept": "代數整體觀",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "提公因式"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "2275b9c79f2699745ed45217f203cb66d708e3681e8436347589436a55dcf6ec"
  },
  {
    "questionId": "u12-s001-v008",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某生將 20m³n²-30m²n³ 分解成 10m²n²(2m-3n)。關於此結果，下列敘述何者正確？",
    "givenConditions": [
      "m、n 為變數。"
    ],
    "target": "判斷正確性與完整性。",
    "choices": [
      "結果錯，因為應提出 5m²n²",
      "結果錯，因為括號應為 2m+3n",
      "結果正確但括號還能提出 mn",
      "結果正確且已提出最大共同單項式"
    ],
    "answerIndex": 3,
    "independentSolution": "展開 10m²n²·2m=20m³n²，乘 -3n 得 -30m²n³；且無剩餘公因式。",
    "explanation": "逐項相除得 2m 與 -3n；最大共同部分確為 10m²n²。",
    "steps": [
      "求 20、30 的 gcd=10。",
      "m³、m² 取 m²；n²、n³ 取 n²。",
      "檢查括號 2m-3n。"
    ],
    "optionAnalysis": [
      {
        "choice": "結果錯，因為應提出 5m²n²",
        "truth": false,
        "reason": "5m²n² 是公因式但不是最大，且原結果仍正確。"
      },
      {
        "choice": "結果錯，因為括號應為 2m+3n",
        "truth": false,
        "reason": "原式第二項為負，括號應保留負號。"
      },
      {
        "choice": "結果正確但括號還能提出 mn",
        "truth": false,
        "reason": "2m 與 -3n 不共同含 m 或 n。"
      },
      {
        "choice": "結果正確且已提出最大共同單項式",
        "truth": true,
        "reason": "係數 gcd 為 10，m、n 最低次方皆為 2；括號無共同因式。"
      }
    ],
    "misconceptionTarget": "以為提出較小公因式才正確，或誤判括號仍有 mn。",
    "prerequisiteCheck": "需綜合係數 gcd、字母最低次方與展開。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "無單位；所有指數為整數。",
    "ambiguityAndBoundaryAudit": "「最大共同單項式」按整數係數正值慣例判定；提出負號不影響完整性但此題首項正。",
    "difficultyReason": "要求同時評估等值與最大完整性。",
    "literacyContextNecessity": null,
    "authoringIntent": "訓練對他人分解結果的審查。",
    "concept": "完整性審查",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "提公因式"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "5fa4c7f5a91d8489eed250fb18238a49159ca24a48de429e199314ef633a684c"
  },
  {
    "questionId": "u12-s001-v009",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知 P=4x²(x-1)+6x(x-1)。若要把 P 完整分解，第一個最有效的共同因式為何？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "辨認外層與括號的全部共同部分。",
    "choices": [
      "2x(x-1)",
      "2x",
      "x-1",
      "12x²(x-1)"
    ],
    "answerIndex": 0,
    "independentSolution": "P=2x(x-1)[2x+3]，所有共同部分一次提出。",
    "explanation": "兩項係數 4、6 共同 2，x²、x 共同 x，且都含 x-1。",
    "steps": [
      "比較數字得到 2。",
      "比較 x 次方得到 x。",
      "辨認共同括號 x-1。"
    ],
    "optionAnalysis": [
      {
        "choice": "2x(x-1)",
        "truth": true,
        "reason": "兩項共同有 2x 及整個 x-1，提出後為 2x(x-1)(2x+3)。"
      },
      {
        "choice": "2x",
        "truth": false,
        "reason": "雖共同，但未同時利用 x-1，仍需再分一步。"
      },
      {
        "choice": "x-1",
        "truth": false,
        "reason": "雖共同，但漏掉係數 2 與 x。"
      },
      {
        "choice": "12x²(x-1)",
        "truth": false,
        "reason": "此式不能整除第二項 6x(x-1)。"
      }
    ],
    "misconceptionTarget": "只看單項式或只看共同括號，沒有合併完整公因式。",
    "prerequisiteCheck": "需綜合單項公因式與整體括號。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "無單位；x=0 或 1 時等式仍成立。",
    "ambiguityAndBoundaryAudit": "題目問「第一個最有效」指一次提出完整共同因式；非唯一分步途徑但唯一完整選項。",
    "difficultyReason": "需要同時辨認單項與二項共同因式。",
    "literacyContextNecessity": null,
    "authoringIntent": "整合兩類公因式。",
    "concept": "複合公因式",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "提公因式"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "b9828b4cbbd7659b1e5ed1eb65f44434c3e5748a715c731090d61225e7cca75e"
  },
  {
    "questionId": "u12-s001-v010",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一間工坊製作兩種木條組。甲組需 14x 公分木條，乙組需 21 公分木條。若要把總用量寫成「每份共同長度×份數式」，14x+21 應寫成何者？",
    "givenConditions": [
      "x 表示甲組的倍數；長度單位為公分。"
    ],
    "target": "用共同長度 7 公分分組。",
    "choices": [
      "7(2x+14) 公分",
      "7(2x+3) 公分",
      "14(x+21) 公分",
      "(14x)(21) 公分"
    ],
    "answerIndex": 1,
    "independentSolution": "共同 7 公分乘總份數 2x+3，展開即原總長。",
    "explanation": "14x+21=7·2x+7·3=7(2x+3)。",
    "steps": [
      "找兩段長度共同單位 7 公分。",
      "各段換算為 7 公分的份數。",
      "用分配律逆向合併。"
    ],
    "optionAnalysis": [
      {
        "choice": "7(2x+14) 公分",
        "truth": false,
        "reason": "21÷7 應為 3，不是 14。"
      },
      {
        "choice": "7(2x+3) 公分",
        "truth": true,
        "reason": "14x 與 21 都以 7 公分為共同單位，份數分別為 2x 與 3。"
      },
      {
        "choice": "14(x+21) 公分",
        "truth": false,
        "reason": "14 不能整除 21，展開常數錯。"
      },
      {
        "choice": "(14x)(21) 公分",
        "truth": false,
        "reason": "把總和誤寫成乘積，量值改變。"
      }
    ],
    "misconceptionTarget": "把共同單位與份數混淆。",
    "prerequisiteCheck": "只需整數公因數與單位解讀。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "原式與答案皆為公分；2x+3 是無單位份數式，無近似。",
    "ambiguityAndBoundaryAudit": "x 應使實際用量合理，但因式恆等不依賴特定正值。",
    "difficultyReason": "情境中的「共同長度」決定因式，不能刪除而仍保留任務。",
    "literacyContextNecessity": "木條以 7 公分為共同裁切單位，分解後的因式直接表示每份長度與份數。",
    "authoringIntent": "把提公因式翻成共同裁切單位。",
    "concept": "共同單位分組",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "提公因式"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "8702ddc7a5ca57b26c0cf1d02cb7b65315c60c70c2cd1e81ac98004c5f5f2a25"
  },
  {
    "questionId": "u12-s001-v011",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "svg",
    "figureId": "u12-fig-common-area",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長方形展示板由兩區組成，面積分別為 18x² 平方公分與 30x 平方公分，兩區共同高度為 6x 公分。整塊板的總寬是多少？",
    "givenConditions": [
      "x>0；兩區並排且高度相同。"
    ],
    "target": "用總面積除以共同高度。",
    "choices": [
      "6x(3x+5) 公分",
      "3x+30 公分",
      "3x+5 公分",
      "8x 公分"
    ],
    "answerIndex": 2,
    "independentSolution": "兩區寬分別為 3x、5 公分，相加為 3x+5 公分。",
    "explanation": "總面積=18x²+30x=6x(3x+5)，共同高度為 6x，所以總寬 3x+5。",
    "steps": [
      "把兩區面積相加。",
      "提出共同高度 6x。",
      "括號解讀為總寬。"
    ],
    "optionAnalysis": [
      {
        "choice": "6x(3x+5) 公分",
        "truth": false,
        "reason": "這是面積的乘積形式，不是所問總寬。"
      },
      {
        "choice": "3x+30 公分",
        "truth": false,
        "reason": "第二區寬應為 5，不是 30。"
      },
      {
        "choice": "3x+5 公分",
        "truth": true,
        "reason": "18x²÷6x=3x，30x÷6x=5。"
      },
      {
        "choice": "8x 公分",
        "truth": false,
        "reason": "3x 與 5 不是同類項，不能合併。"
      }
    ],
    "misconceptionTarget": "把面積式本身當寬，或錯合併不同類項。",
    "prerequisiteCheck": "需知道長方形面積=高×寬。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "面積單位平方公分，除以公分後得到公分；x>0 避免高度為 0。",
    "ambiguityAndBoundaryAudit": "圖未提供比例；全部依代數標示。",
    "difficultyReason": "需由提公因式解讀幾何尺寸。",
    "literacyContextNecessity": "共同高度使因式分解成為求總寬的必要步驟，情境不能刪除。",
    "authoringIntent": "連接公因式與面積模型。",
    "concept": "面積共同邊",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "提公因式"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "8882dde030f2fea3907edae7e4a51c8f895e229b2c06519fdd781d8c75265d76"
  },
  {
    "questionId": "u12-s001-v012",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某包裝線一天可處理 24mn 件合格品，另有 36m 件需重檢。主管想以最大共同批量分組，使兩類都分成整批。最大共同批量的代數式為何？",
    "givenConditions": [
      "m、n 為正整數；每批件數也為正整數。"
    ],
    "target": "求 24mn 與 36m 的最大共同因式。",
    "choices": [
      "6mn 件",
      "12mn 件",
      "72m²n 件",
      "12m 件"
    ],
    "answerIndex": 3,
    "independentSolution": "因 m、n 為正整數，兩種批數都為正整數，12m 可實際分批。",
    "explanation": "24mn=12m·2n，36m=12m·3，因此最大共同批量是 12m。",
    "steps": [
      "求數字最大公因數 12。",
      "找共同字母只有 m。",
      "以兩式除回驗證批數 2n、3。"
    ],
    "optionAnalysis": [
      {
        "choice": "6mn 件",
        "truth": false,
        "reason": "第二類 36m 不一定能除以 n。"
      },
      {
        "choice": "12mn 件",
        "truth": false,
        "reason": "同樣把非共同的 n 納入批量。"
      },
      {
        "choice": "72m²n 件",
        "truth": false,
        "reason": "大於兩類量且不能整除。"
      },
      {
        "choice": "12m 件",
        "truth": true,
        "reason": "係數 gcd(24,36)=12，兩式共同含 m，但只有第一式含 n。"
      }
    ],
    "misconceptionTarget": "把只出現在一類的 n 當共同因式。",
    "prerequisiteCheck": "需理解正整數與整除。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "單位為件；因式 12m 也是件數，商 2n、3 為批數；無近似。",
    "ambiguityAndBoundaryAudit": "m、n 已限定正整數，排除零批與非整批歧義。",
    "difficultyReason": "需結合代數公因式與整批限制。",
    "literacyContextNecessity": "整批條件要求共同因式能同時整除兩類件數，情境決定為何要求最大。",
    "authoringIntent": "以最大共同批量解釋公因式。",
    "concept": "整除與分批",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "提公因式"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "a5eae26c30f4c131380378dd3fe2ade4e8672135f70d363dccd42a95acd30b90"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u12-s001-cr001",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "將 24x³y²-36x²y³+12x²y² 完整因式分解，並用展開檢查。",
    "requiredWork": [
      "找三項係數的最大公因數。",
      "比較 x、y 的最低次方。",
      "括號內不得仍有共同因式。",
      "展開核對三項。"
    ],
    "fullCreditSolution": [
      "係數最大公因數為 12，字母共同部分為 x²y²。",
      "原式=12x²y²(2x-3y+1)。",
      "展開依序得 24x³y²、-36x²y³、12x²y²，與原式一致。"
    ],
    "alternativeSolutions": [
      "也可先提 12x²，再從括號提出 y²；最後合併外層因式，結果相同。"
    ],
    "reasoningSteps": [
      "gcd(24,36,12)=12。",
      "x 次方最低為 2，y 次方最低為 2。",
      "三個商為 2x、-3y、1。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整寫出 12x²y²(2x-3y+1)，三個商與展開檢查均正確。"
      },
      {
        "score": 2,
        "criteria": "方法正確且主要因式正確，但一處係數、次方或展開小錯；其餘推理可辨認。"
      },
      {
        "score": 1,
        "criteria": "至少找出 12 或 x²y² 的主要共同部分，並有逐項相除的嘗試。"
      },
      {
        "score": 0,
        "criteria": "未能找共同因式，或結果展開與三項皆不符。"
      }
    ],
    "partialCreditRules": [
      "只提 6x²y² 且未繼續者最高 2 分。",
      "答案等價但因式順序不同不扣分。"
    ],
    "followThroughPolicy": "若前一步只把某一商算錯，後續展開依其結果一致，可保留方法分；若共同次方選到不能整除的高次方，後續不給完整性分。",
    "unitAndNotationRules": [
      "x、y 次方用上標或 ^ 均可。",
      "無實際單位。"
    ],
    "answerOnlyPolicy": "只寫最終分解且正確，最高 2 分；必須有共同因式判斷或展開證據才得 3 分。",
    "commonErrors": [
      "把 x³、x² 的共同次方取成 x³。",
      "提出負號後漏改中間項。"
    ],
    "independentReview": {
      "derivedResult": "12x²y²(2x-3y+1)，展開完全吻合。",
      "ambiguity": "題意明示完整分解；等價因式順序與分步提出均接受。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "e3cee54de84bad65e854e626cc9cc2e55c7b3ff02098a7f9cc7004a9184cf477"
  },
  {
    "questionId": "u12-s001-cr002",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "已知 P=8a(a-b)-12c(a-b)+4(a-b)。請一次提出所有共同因式，完整分解 P，並說明為何你的共同因式是最大的。",
    "requiredWork": [
      "把 a-b 視為整體因式。",
      "同時檢查三個外層係數 8a、-12c、4。",
      "說明最大公因數。",
      "展開驗證。"
    ],
    "fullCreditSolution": [
      "三項都含 a-b，外層係數的數字最大公因數為 4。",
      "P=4(a-b)(2a-3c+1)。",
      "括號 2a-3c+1 沒有共同數字或字母因式。"
    ],
    "alternativeSolutions": [
      "可先提出 a-b 得 (a-b)(8a-12c+4)，再從第二括號提出 4。"
    ],
    "reasoningSteps": [
      "共同整體為 a-b。",
      "8、12、4 的最大公因數為 4。",
      "a、c 並非每一項共有。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "得到 4(a-b)(2a-3c+1)，並清楚說明 4 與 a-b 為全部共同部分且完成回展。"
      },
      {
        "score": 2,
        "criteria": "分解正確但最大性說明或展開檢查不完整；或一處輕微符號錯。"
      },
      {
        "score": 1,
        "criteria": "能辨認 a-b 或 4 為共同因式，並有合理分步。"
      },
      {
        "score": 0,
        "criteria": "把 a-b 拆開錯提，或無法形成與原式等值的乘積。"
      }
    ],
    "partialCreditRules": [
      "只寫 (a-b)(8a-12c+4) 且未再提 4，最高 2 分。",
      "若寫 4(2a-3c+1)(a-b) 視為同一答案。"
    ],
    "followThroughPolicy": "早期把 -12c÷4 算成 +3c，後續一致者可得方法分但失去符號正確分；把 a 或 c 當共同字母則不給最大性分。",
    "unitAndNotationRules": [
      "括號 a-b 必須整體保留。",
      "無單位。"
    ],
    "answerOnlyPolicy": "答案正確但無說明最高 2 分。",
    "commonErrors": [
      "只提出共同括號，忽略數字 4。",
      "誤把 a 與 c 視為共同字母。"
    ],
    "independentReview": {
      "derivedResult": "4(a-b)(2a-3c+1)。",
      "ambiguity": "「一次提出」允許最終一次寫出完整共同因式，也接受先分步後合併。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "c04309fbfeeed362450c02953fa7c6d42814661fe6cc1719533b587fa38a339e"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u12-s001-v001",
    "unitId": "u12",
    "skillId": "factoring-common",
    "contentSha256": "12a9a89daaa3e4a41257cc3b01e8c19f7d858f476f5b186d8ccad7c4c53985b3",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "6x÷3=2x，9÷3=3，所以答案為 3(2x+3)。",
    "derivedAnswer": "3(2x+3)",
    "storedAnswer": "3(2x+3)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「將 6x+9 因式分解，下列何者正確？」逐一展開或回代；正解「3(2x+3)」成立。「6(x+3)」不成立：展開為 6x+18，常數項不符。；「3(2x+6)」不成立：展開為 6x+18，括號內 9÷3 算錯。；「x(6+9)」不成立：第二項 9 不含 x，不能提出 x。",
      "undefinedSymbol": "題幹已給條件為「x 為變數；係數為整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「找最大公因式並寫成乘積。」。",
      "unitConflict": "本題單位審查：無單位；全為精確整數係數，不涉及近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；全為精確整數係數，不涉及近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：題目要求最大公因式形式；等價交換順序不影響唯一選項。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「找最大公因式並寫成乘積。」閱讀後，常見誤讀為「把不共同的 x 提出，或把 9÷3 算成 6。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "只含兩項且公因式為單一整數，辨認直接。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "只需整數整除與分配律。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s001-v001：6x÷3=2x，9÷3=3，所以答案為 3(2x+3)。 因此導出「3(2x+3)」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「找最大公因式並寫成乘積。」，並特別排除「把不共同的 x 提出，或把 9÷3 算成 6。」。難度理由是「只含兩項且公因式為單一整數，辨認直接。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s001-v002",
    "unitId": "u12",
    "skillId": "factoring-common",
    "contentSha256": "58c4fce978b35e7df6102710af4ec2d892d13568b2a9b76f9dd00b3be970d0a5",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "12a²b÷6ab=2a；18ab²÷6ab=3b，兩者皆整除，因此共同最大部分是 6ab。",
    "derivedAnswer": "6ab",
    "storedAnswer": "6ab",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「12a²b 與 18ab² 的最大共同單項因式為何？」逐一展開或回代；正解「6ab」成立。「3ab」不成立：雖是公因式，但數字係數不是最大。；「6a²b²」不成立：次方過高，不能整除任一較低次方的項。；「6a²b」不成立：第二項只有 a¹，無法被 a² 整除。",
      "undefinedSymbol": "題幹已給條件為「a、b 為代數變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「找係數與字母的共同最低次方。」。",
      "unitConflict": "本題單位審查：無實際單位；次方為整數且結果精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無實際單位；次方為整數且結果精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：「最大」指單項式整除意義；未限定 a、b 數值也不影響形式判斷。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「找係數與字母的共同最低次方。」閱讀後，常見誤讀為「把最高次方誤當共同次方。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需要同時處理係數與兩種字母，但不需分解整個多項式。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會最大公因數及同底數次方相除。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s001-v002：12a²b÷6ab=2a；18ab²÷6ab=3b，兩者皆整除，因此共同最大部分是 6ab。 因此導出「6ab」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「找係數與字母的共同最低次方。」，並特別排除「把最高次方誤當共同次方。」。難度理由是「需要同時處理係數與兩種字母，但不需分解整個多項式。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s001-v003",
    "unitId": "u12",
    "skillId": "factoring-common",
    "contentSha256": "1e16572e5e001d1a8a7449b1a7d50befcadb89a3ab5e14d2627fe36afffda4f8",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "8x³÷4x²=2x，12x²÷4x²=3；括號內 2x 與 3 無公因式。",
    "derivedAnswer": "4x²(2x+3)",
    "storedAnswer": "4x²(2x+3)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「將 8x³+12x² 完整提出最大公因式，答案是哪一個？」逐一展開或回代；正解「4x²(2x+3)」成立。「2x²(4x+6)」不成立：可展開回原式，但括號內仍可提 2，未完整。；「4x(2x²+3x)」不成立：可展開回原式，但漏提共同的另一個 x。；「4x²(2x²+3)」不成立：第一項展開成 8x⁴，次方錯。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「完成提公因式。」。",
      "unitConflict": "本題單位審查：無單位與近似；指數皆為非負整數。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位與近似；指數皆為非負整數。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：題目明示「最大」與「完整」，排除只提部分公因式的等價形式。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「完成提公因式。」閱讀後，常見誤讀為「只提出部分公因式，或次方相除錯誤。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "除了正確性還要判斷是否完整分解。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解 x³÷x²=x。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s001-v003：8x³÷4x²=2x，12x²÷4x²=3；括號內 2x 與 3 無公因式。 因此導出「4x²(2x+3)」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「完成提公因式。」，並特別排除「只提出部分公因式，或次方相除錯誤。」。難度理由是「除了正確性還要判斷是否完整分解。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s001-v004",
    "unitId": "u12",
    "skillId": "factoring-common",
    "contentSha256": "3c9cb8f3499559f29e22547250e7b08d23937f8b779044f9abb7f3764487e2c7",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "-5y·3y=-15y²，-5y·(-2)=+10y，因此答案正確。",
    "derivedAnswer": "-5y(3y-2)",
    "storedAnswer": "-5y(3y-2)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「將 -15y²+10y 分解，若希望括號首項係數為正，下列何者正確？」逐一展開或回代；正解「-5y(3y-2)」成立。「-5y(3y+2)」不成立：展開第二項為 -10y，符號錯。；「5y(-3y-2)」不成立：展開第二項為 -10y，符號錯。；「-5(3y²-2y)」不成立：展開正確但未提出共同 y，不是最大公因式。",
      "undefinedSymbol": "題幹已給條件為「y 為變數；要求括號首項正。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「選擇負公因式並分解。」。",
      "unitConflict": "本題單位審查：無單位；係數與符號皆精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；係數與符號皆精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：若不要求首項正，5y(-3y+2)也等價；題幹條件使選項唯一。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「選擇負公因式並分解。」閱讀後，常見誤讀為「提出負數後只改第一項符號。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需處理負公因式與題目指定的呈現條件。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會負數除法與單項式相除。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s001-v004：-5y·3y=-15y²，-5y·(-2)=+10y，因此答案正確。 因此導出「-5y(3y-2)」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「選擇負公因式並分解。」，並特別排除「提出負數後只改第一項符號。」。難度理由是「需處理負公因式與題目指定的呈現條件。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s001-v005",
    "unitId": "u12",
    "skillId": "factoring-common",
    "contentSha256": "8253fb211b13a50bb112e37745ebdf6dd509f4903f235dff98f89029903a86f8",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "(x-2)(3x+5)=3x(x-2)+5(x-2)，完全等於原式。",
    "derivedAnswer": "(x-2)(3x+5)",
    "storedAnswer": "(x-2)(3x+5)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「因式分解 3x(x-2)+5(x-2)，結果為何？」逐一展開或回代；正解「(x-2)(3x+5)」成立。「8x(x-2)」不成立：把 3x 與 5 誤加成 8x。；「(x-2)(3x-5)」不成立：第二項原為正 5(x-2)，符號不應改。；「(x-2)(8x)」不成立：常數 5 不能與 3x 合併為同類項。",
      "undefinedSymbol": "題幹已給條件為「把整個 x-2 視為共同因式。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「提出共同括號。」。",
      "unitConflict": "本題單位審查：無單位與近似；括號不可拆散判斷。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位與近似；括號不可拆散判斷。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：x-2 即使在 x=2 時為 0，因式恆等仍成立。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「提出共同括號。」閱讀後，常見誤讀為「只找單一字母，未把括號視為整體。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "共同因式是二項式而非單項式。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解分配律和整體代換觀念。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s001-v005：(x-2)(3x+5)=3x(x-2)+5(x-2)，完全等於原式。 因此導出「(x-2)(3x+5)」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「提出共同括號。」，並特別排除「只找單一字母，未把括號視為整體。」。難度理由是「共同因式是二項式而非單項式。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s001-v006",
    "unitId": "u12",
    "skillId": "factoring-common",
    "contentSha256": "1f4a0eb236b079e1292076a186ad5a4337d83ada57e61e50ce6cbbd93f94001b",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "三個商為 2x、-3y、4；括號內三項無共同因式。",
    "derivedAnswer": "3xy(2x-3y+4)",
    "storedAnswer": "3xy(2x-3y+4)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「將 6x²y-9xy²+12xy 完整因式分解，何者正確？」逐一展開或回代；正解「3xy(2x-3y+4)」成立。「3x(2xy-3y²+4y)」不成立：展開正確但括號仍共同含 y，未完整。；「3xy(2x-3y+12)」不成立：最後一項展開為 36xy。；「6xy(x-3y+2)」不成立：中間項展開為 -18xy²。",
      "undefinedSymbol": "題幹已給條件為「x、y 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「提出三項最大公因式。」。",
      "unitConflict": "本題單位審查：無單位；所有係數精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；所有係數精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：完整分解要求提出 3xy；部分提出形式不算最佳答案。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「提出三項最大公因式。」閱讀後，常見誤讀為「三項公因式漏字母或最後常數除法錯。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "同時處理三項、兩字母與負號。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會三個整數的最大公因數與單項式相除。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s001-v006：三個商為 2x、-3y、4；括號內三項無共同因式。 因此導出「3xy(2x-3y+4)」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「提出三項最大公因式。」，並特別排除「三項公因式漏字母或最後常數除法錯。」。難度理由是「同時處理三項、兩字母與負號。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s001-v007",
    "unitId": "u12",
    "skillId": "factoring-common",
    "contentSha256": "2275b9c79f2699745ed45217f203cb66d708e3681e8436347589436a55dcf6ec",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "(x+y)(2a-3b)=2a(x+y)-3b(x+y)，與原式逐項相同。",
    "derivedAnswer": "(x+y)(2a-3b)",
    "storedAnswer": "(x+y)(2a-3b)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「化簡並因式分解 2a(x+y)-3b(x+y)，下列何者正確？」逐一展開或回代；正解「(x+y)(2a-3b)」成立。「(x+y)(2a+3b)」不成立：第二項原為負，提出後仍應為負。；「(a+b)(2x-3y)」不成立：改變了各項配對，展開不等於原式。；「(x+y)(-ab)」不成立：2a 與 -3b 不是同類項，不能合併。",
      "undefinedSymbol": "題幹已給條件為「a、b、x、y 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「辨認共同二項式並保留不同係數。」。",
      "unitConflict": "本題單位審查：無單位；不需設定變數值。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；不需設定變數值。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：因式順序可交換，但選項僅一個展開完全一致。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「辨認共同二項式並保留不同係數。」閱讀後，常見誤讀為「把不同字母係數誤合併，或漏負號。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "共同因式與括號外係數都含變數，需要整體辨認。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需能把二項式視為單一因式。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s001-v007：(x+y)(2a-3b)=2a(x+y)-3b(x+y)，與原式逐項相同。 因此導出「(x+y)(2a-3b)」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「辨認共同二項式並保留不同係數。」，並特別排除「把不同字母係數誤合併，或漏負號。」。難度理由是「共同因式與括號外係數都含變數，需要整體辨認。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s001-v008",
    "unitId": "u12",
    "skillId": "factoring-common",
    "contentSha256": "5fa4c7f5a91d8489eed250fb18238a49159ca24a48de429e199314ef633a684c",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開 10m²n²·2m=20m³n²，乘 -3n 得 -30m²n³；且無剩餘公因式。",
    "derivedAnswer": "結果正確且已提出最大共同單項式",
    "storedAnswer": "結果正確且已提出最大共同單項式",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「某生將 20m³n²-30m²n³ 分解成 10m²n²(2m-3n)。關於此結果，下列敘述何者正確？」逐一展開或回代；正解「結果正確且已提出最大共同單項式」成立。「結果錯，因為應提出 5m²n²」不成立：5m²n² 是公因式但不是最大，且原結果仍正確。；「結果錯，因為括號應為 2m+3n」不成立：原式第二項為負，括號應保留負號。；「結果正確但括號還能提出 mn」不成立：2m 與 -3n 不共同含 m 或 n。",
      "undefinedSymbol": "題幹已給條件為「m、n 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「判斷正確性與完整性。」。",
      "unitConflict": "本題單位審查：無單位；所有指數為整數。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；所有指數為整數。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：「最大共同單項式」按整數係數正值慣例判定；提出負號不影響完整性但此題首項正。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「判斷正確性與完整性。」閱讀後，常見誤讀為「以為提出較小公因式才正確，或誤判括號仍有 mn。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "要求同時評估等值與最大完整性。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需綜合係數 gcd、字母最低次方與展開。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s001-v008：展開 10m²n²·2m=20m³n²，乘 -3n 得 -30m²n³；且無剩餘公因式。 因此導出「結果正確且已提出最大共同單項式」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「判斷正確性與完整性。」，並特別排除「以為提出較小公因式才正確，或誤判括號仍有 mn。」。難度理由是「要求同時評估等值與最大完整性。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s001-v009",
    "unitId": "u12",
    "skillId": "factoring-common",
    "contentSha256": "b9828b4cbbd7659b1e5ed1eb65f44434c3e5748a715c731090d61225e7cca75e",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "P=2x(x-1)[2x+3]，所有共同部分一次提出。",
    "derivedAnswer": "2x(x-1)",
    "storedAnswer": "2x(x-1)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「已知 P=4x²(x-1)+6x(x-1)。若要把 P 完整分解，第一個最有效的共同因式為何？」逐一展開或回代；正解「2x(x-1)」成立。「2x」不成立：雖共同，但未同時利用 x-1，仍需再分一步。；「x-1」不成立：雖共同，但漏掉係數 2 與 x。；「12x²(x-1)」不成立：此式不能整除第二項 6x(x-1)。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「辨認外層與括號的全部共同部分。」。",
      "unitConflict": "本題單位審查：無單位；x=0 或 1 時等式仍成立。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；x=0 或 1 時等式仍成立。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：題目問「第一個最有效」指一次提出完整共同因式；非唯一分步途徑但唯一完整選項。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「辨認外層與括號的全部共同部分。」閱讀後，常見誤讀為「只看單項式或只看共同括號，沒有合併完整公因式。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需要同時辨認單項與二項共同因式。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需綜合單項公因式與整體括號。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s001-v009：P=2x(x-1)[2x+3]，所有共同部分一次提出。 因此導出「2x(x-1)」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「辨認外層與括號的全部共同部分。」，並特別排除「只看單項式或只看共同括號，沒有合併完整公因式。」。難度理由是「需要同時辨認單項與二項共同因式。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s001-v010",
    "unitId": "u12",
    "skillId": "factoring-common",
    "contentSha256": "8702ddc7a5ca57b26c0cf1d02cb7b65315c60c70c2cd1e81ac98004c5f5f2a25",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "共同 7 公分乘總份數 2x+3，展開即原總長。",
    "derivedAnswer": "7(2x+3) 公分",
    "storedAnswer": "7(2x+3) 公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「一間工坊製作兩種木條組。甲組需 14x 公分木條，乙組需 21 公分木條。若要把總用量寫成「每份共同長度×份數式」，14x+21 應寫成何者？」逐一展開或回代；正解「7(2x+3) 公分」成立。「7(2x+14) 公分」不成立：21÷7 應為 3，不是 14。；「14(x+21) 公分」不成立：14 不能整除 21，展開常數錯。；「(14x)(21) 公分」不成立：把總和誤寫成乘積，量值改變。",
      "undefinedSymbol": "題幹已給條件為「x 表示甲組的倍數；長度單位為公分。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「用共同長度 7 公分分組。」。",
      "unitConflict": "本題單位審查：原式與答案皆為公分；2x+3 是無單位份數式，無近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；原式與答案皆為公分；2x+3 是無單位份數式，無近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：x 應使實際用量合理，但因式恆等不依賴特定正值。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「用共同長度 7 公分分組。」閱讀後，常見誤讀為「把共同單位與份數混淆。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "情境中的「共同長度」決定因式，不能刪除而仍保留任務。",
    "literacyContextNecessity": "木條以 7 公分為共同裁切單位，分解後的因式直接表示每份長度與份數。",
    "prerequisiteCheck": "只需整數公因數與單位解讀。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s001-v010：共同 7 公分乘總份數 2x+3，展開即原總長。 因此導出「7(2x+3) 公分」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「用共同長度 7 公分分組。」，並特別排除「把共同單位與份數混淆。」。難度理由是「情境中的「共同長度」決定因式，不能刪除而仍保留任務。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s001-v011",
    "unitId": "u12",
    "skillId": "factoring-common",
    "contentSha256": "8882dde030f2fea3907edae7e4a51c8f895e229b2c06519fdd781d8c75265d76",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "兩區寬分別為 3x、5 公分，相加為 3x+5 公分。",
    "derivedAnswer": "3x+5 公分",
    "storedAnswer": "3x+5 公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「長方形展示板由兩區組成，面積分別為 18x² 平方公分與 30x 平方公分，兩區共同高度為 6x 公分。整塊板的總寬是多少？」逐一展開或回代；正解「3x+5 公分」成立。「6x(3x+5) 公分」不成立：這是面積的乘積形式，不是所問總寬。；「3x+30 公分」不成立：第二區寬應為 5，不是 30。；「8x 公分」不成立：3x 與 5 不是同類項，不能合併。",
      "undefinedSymbol": "題幹已給條件為「x>0；兩區並排且高度相同。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「用總面積除以共同高度。」。",
      "unitConflict": "本題單位審查：面積單位平方公分，除以公分後得到公分；x>0 避免高度為 0。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；面積單位平方公分，除以公分後得到公分；x>0 避免高度為 0。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：圖未提供比例；全部依代數標示。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「用總面積除以共同高度。」閱讀後，常見誤讀為「把面積式本身當寬，或錯合併不同類項。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需由提公因式解讀幾何尺寸。",
    "literacyContextNecessity": "共同高度使因式分解成為求總寬的必要步驟，情境不能刪除。",
    "prerequisiteCheck": "需知道長方形面積=高×寬。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s001-v011：兩區寬分別為 3x、5 公分，相加為 3x+5 公分。 因此導出「3x+5 公分」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「用總面積除以共同高度。」，並特別排除「把面積式本身當寬，或錯合併不同類項。」。難度理由是「需由提公因式解讀幾何尺寸。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s001-v012",
    "unitId": "u12",
    "skillId": "factoring-common",
    "contentSha256": "a5eae26c30f4c131380378dd3fe2ade4e8672135f70d363dccd42a95acd30b90",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "因 m、n 為正整數，兩種批數都為正整數，12m 可實際分批。",
    "derivedAnswer": "12m 件",
    "storedAnswer": "12m 件",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「某包裝線一天可處理 24mn 件合格品，另有 36m 件需重檢。主管想以最大共同批量分組，使兩類都分成整批。最大共同批量的代數式為何？」逐一展開或回代；正解「12m 件」成立。「6mn 件」不成立：第二類 36m 不一定能除以 n。；「12mn 件」不成立：同樣把非共同的 n 納入批量。；「72m²n 件」不成立：大於兩類量且不能整除。",
      "undefinedSymbol": "題幹已給條件為「m、n 為正整數；每批件數也為正整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「求 24mn 與 36m 的最大共同因式。」。",
      "unitConflict": "本題單位審查：單位為件；因式 12m 也是件數，商 2n、3 為批數；無近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；單位為件；因式 12m 也是件數，商 2n、3 為批數；無近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：m、n 已限定正整數，排除零批與非整批歧義。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「求 24mn 與 36m 的最大共同因式。」閱讀後，常見誤讀為「把只出現在一類的 n 當共同因式。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需結合代數公因式與整批限制。",
    "literacyContextNecessity": "整批條件要求共同因式能同時整除兩類件數，情境決定為何要求最大。",
    "prerequisiteCheck": "需理解正整數與整除。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s001-v012：因 m、n 為正整數，兩種批數都為正整數，12m 可實際分批。 因此導出「12m 件」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「求 24mn 與 36m 的最大共同因式。」，並特別排除「把只出現在一類的 n 當共同因式。」。難度理由是「需結合代數公因式與整批限制。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u12-fig-common-area",
    "unitId": "u12",
    "primarySkillId": "factoring-common",
    "svgPath": "figures/u12/u12-fig-common-area.svg",
    "canvas": {
      "width": 720,
      "height": 360,
      "units": "px"
    },
    "viewBox": "0 0 720 360",
    "notToScale": true,
    "visualInferenceWarning": "左右區寬度不可由視覺比例判斷，只能依 u、v 標示。",
    "altText": "兩個並排長方形共享高度 h，左區寬 u、面積 hu，右區寬 v、面積 hv；總面積可寫成 h(u+v)。",
    "drawingSpec": {
      "canvas": {
        "width": 720,
        "height": 360,
        "units": "px"
      },
      "viewBox": "0 0 720 360",
      "layout": "outer rectangle from (90,70) to (590,280), divider x=360",
      "coordinates": {
        "outer": [
          90,
          70,
          500,
          210
        ],
        "divider": [
          [
            360,
            70
          ],
          [
            360,
            280
          ]
        ],
        "heightMarkerX": 65
      },
      "labels": [
        {
          "text": "h",
          "position": [
            35,
            185
          ]
        },
        {
          "text": "u",
          "position": [
            215,
            320
          ]
        },
        {
          "text": "v",
          "position": [
            465,
            320
          ]
        },
        {
          "text": "面積 hu",
          "position": [
            195,
            185
          ]
        },
        {
          "text": "面積 hv",
          "position": [
            425,
            185
          ]
        }
      ],
      "lines": {
        "outer": "4px solid",
        "divider": "4px solid",
        "dimension": "2px solid"
      },
      "arrows": "none; height is indicated by end ticks",
      "units": "generic algebraic lengths; no physical unit forced",
      "scale": "not to scale",
      "notToScale": true,
      "visualInferenceWarning": "左右區寬度不可由視覺比例判斷，只能依 u、v 標示。",
      "hiddenLines": "none",
      "labelCollisionRule": "all labels remain at least 18px from borders and divider"
    },
    "svgAssertions": [
      "viewBox=\"0 0 720 360\"",
      "x1=\"360\"",
      "面積 hu",
      "示意圖不按比例"
    ],
    "mobileReadabilityReview": "在 360px 寬度下，主要標籤字級至少 16px，線條不重疊，數學式保持可讀。",
    "answerLeakageReview": "圖中只呈現題幹已給的尺寸或區塊關係，不直接標示待求答案。",
    "figureReview": {
      "decision": "pass",
      "reviewNote": "人工渲染檢查確認外框、分隔線、h 尺寸刻度與兩區面積標籤清楚；圖只顯示分配律結構，未透露任何特定題目的數值答案。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "fad48e48456a08788e3f9ba987a90901a2fc80f388c5aed29450dd99fca79639"
  }
];
