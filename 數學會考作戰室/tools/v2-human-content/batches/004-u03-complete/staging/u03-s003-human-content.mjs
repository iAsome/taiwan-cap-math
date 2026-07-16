// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
// CONTENT AUTHORITY: CHATGPT_HUMAN_AUTHORED_R1
// OLD GENERATED CONTENT MUST NOT BE IMPORTED OR MERGED.
export const LECTURE = {
  "lectureId": "u03-s003-lecture-r1",
  "unitId": "u03",
  "topicId": "u03-linear-equation-solving",
  "skillId": "linear-equation-balance-property",
  "title": "等量公理：把方程式看成保持平衡的兩邊",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能說明等號表示左右兩邊同值。",
    "能在兩邊同加減或同乘除非零數。",
    "能把移項還原為等量操作。",
    "能由天平圖解釋方程式變形。"
  ],
  "prerequisites": [
    {
      "skillId": "linear-expression-simplify",
      "requiredLevel": "能展開括號、合併同類項並理解等號表示左右同值。"
    }
  ],
  "glossary": [
    {
      "term": "方程式",
      "definition": "含未知數的等式。"
    },
    {
      "term": "等量公理",
      "definition": "等式兩邊做相同合法運算後仍相等。"
    },
    {
      "term": "移項",
      "definition": "等量操作的簡寫，不是項目自行穿越等號。"
    },
    {
      "term": "解",
      "definition": "使方程式左右兩邊相等的未知數值。"
    }
  ],
  "notation": [
    {
      "symbol": "=",
      "meaning": "左右兩個式子的值相同。"
    },
    {
      "symbol": "a=b⇒a+c=b+c",
      "meaning": "兩邊同加c保持相等。"
    }
  ],
  "conceptNarrative": [
    "方程式表示左右兩個式子的值相等，可以想成保持平衡的天平。任何解題操作都必須同時作用在左右兩邊，才能維持原來的相等關係。",
    "等式兩邊可同加或同減同一個數，也可同乘同一個數；同除時除數必須非零，因為除以零沒有定義，不能拿來建立等價方程式。",
    "讓未知數單獨時，通常選擇原運算的逆運算：加法用減法抵消，乘法用除法抵消。每完成一次操作便立即化簡，可避免重複或漏改一邊。",
    "課堂常用的移項變號只是等式兩邊同加或同減某一項的簡寫。遇到負係數、括號或情境天平時，寫出完整等量操作較能防止符號錯誤。"
  ],
  "formalDefinitions": [
    {
      "name": "加減等量公理",
      "statement": "若a=b，則a+c=b+c且a-c=b-c。"
    },
    {
      "name": "乘法等量公理",
      "statement": "若a=b，則ac=bc。"
    },
    {
      "name": "除法等量公理",
      "statement": "若a=b且c≠0，則a/c=b/c。"
    }
  ],
  "formulas": [
    {
      "formula": "a=b ⇔ a+c=b+c",
      "conditions": [
        "c為任意數"
      ],
      "meaning": "兩邊同加減。"
    },
    {
      "formula": "a=b ⇔ ac=bc",
      "conditions": [
        "反推時c不可為0"
      ],
      "meaning": "兩邊同乘。"
    },
    {
      "formula": "a=b ⇔ a/c=b/c",
      "conditions": [
        "c≠0"
      ],
      "meaning": "兩邊同除。"
    }
  ],
  "nonApplicableCases": [
    "不能只改等式一邊。",
    "兩邊乘不同數不保證相等。",
    "不能兩邊同除以0。",
    "平方等非可逆操作在進階情況可能產生額外解，本單元不以此替代基本等量步驟。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "觀察未知數旁的加項、減項或乘法係數，決定要先消去哪一層。",
      "check": "目標操作能讓未知數比原式更接近單獨。"
    },
    {
      "step": 2,
      "instruction": "選擇對應逆運算，並明確寫成等式兩邊同做。",
      "check": "左右兩邊使用完全相同的數與運算。"
    },
    {
      "step": 3,
      "instruction": "若使用除法，先確認共同除數不是零。",
      "check": "除法等量公理的非零條件已明確滿足。"
    },
    {
      "step": 4,
      "instruction": "化簡新等式，再判斷是否需要下一個等量操作。",
      "check": "被抵消項確實消失，右邊也已同步計算。"
    },
    {
      "step": 5,
      "instruction": "求得未知數後代回原方程式或天平情境。",
      "check": "左右值相同，單位與題目所求一致。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u03-s003-example-a",
      "prompt": "用等量公理解 x+13=22。",
      "solutionSteps": [
        "等式兩邊同減 13。",
        "化簡得 x=9，代回九加十三為二十二。"
      ],
      "answer": "x=9。",
      "why": "左邊的十三是加項，所以用同減十三抵消；右邊也必須減十三才維持平衡。代回得到二十二，證明操作與答案都正確。"
    },
    {
      "exampleId": "u03-s003-example-b",
      "prompt": "用等量公理解 -4x=28。",
      "solutionSteps": [
        "兩邊同除以非零數 -4。",
        "得到 x=-7，代回乘積為二十八。"
      ],
      "answer": "x=-7。",
      "why": "未知數乘負四要用除以負四消去，除數不為零且左右相同，因此合法。正數除以負數得到負七，負負相乘可驗算回二十八。"
    },
    {
      "exampleId": "u03-s003-example-c",
      "prompt": "說明 5x-2=18 如何逐步求解。",
      "solutionSteps": [
        "兩邊同加 2，得到 5x=20。",
        "兩邊同除以 5，得到 x=4。"
      ],
      "answer": "x=4。",
      "why": "先用加二抵消負二，再用除五抵消乘法係數，兩步都同步作用於左右。這比只寫移項更能看出新方程式與原式等價。"
    },
    {
      "exampleId": "u03-s003-example-d",
      "prompt": "平衡天平左盤有未知盒與五個單位砝碼，右盤有十二個單位砝碼。",
      "solutionSteps": [
        "把平衡關係寫成 x+5=12。",
        "兩盤各移五個砝碼，得到 x=7。"
      ],
      "answer": "盒子重七個單位。",
      "why": "天平兩盤原本等重，兩側移去相同的五個單位後仍會平衡。右盤剩七個單位，因此未知盒重量必須等於七個單位。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "只在含未知數的一邊減常數。",
      "why": "只改一邊會破壞原有相等關係。",
      "correction": "把同一減法完整寫在等式兩邊。"
    },
    {
      "mistake": "把乘法係數移到右邊改做減法。",
      "why": "沒有使用乘法的逆運算。",
      "correction": "兩邊同除以完整且非零的係數。"
    },
    {
      "mistake": "等式兩邊同除以零。",
      "why": "除以零沒有定義，不能保證等價。",
      "correction": "除法操作前先確認除數非零。"
    },
    {
      "mistake": "左右兩邊分別使用不同數。",
      "why": "兩側改變量不同就不再維持平衡。",
      "correction": "核對運算符號及操作數都完全相同。"
    },
    {
      "mistake": "只寫移項變號而漏掉操作理由。",
      "why": "複雜式中容易因此漏項或改錯符號。",
      "correction": "改寫成兩邊同加或同減該項。"
    },
    {
      "mistake": "天平圖只從一盤移走砝碼。",
      "why": "實際動作沒有保持兩盤同步。",
      "correction": "兩盤移走相同種類與數量的砝碼。"
    }
  ],
  "selfCheck": [
    "兩邊是否做同一運算？",
    "逆運算是否正確？",
    "除數是否非零？",
    "移項能否解釋成等量公理？",
    "最後是否代回原式？"
  ],
  "summary": [
    "等號表示同值。",
    "兩邊同做合法運算保持相等。",
    "移項只是等量操作的簡寫。",
    "天平模型可直觀解釋等量公理。"
  ],
  "connections": {
    "previous": "需要先會化簡一元一次式與理解等號。",
    "next": [
      "下一節把等量公理連續使用來解基本方程式。",
      "後續含括號與分母方程式仍遵守同一原理。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u03-s003-v001",
      "u03-s003-v002",
      "u03-s003-v003",
      "u03-s003-v004",
      "u03-s003-v005",
      "u03-s003-v006",
      "u03-s003-v007",
      "u03-s003-v008",
      "u03-s003-v009",
      "u03-s003-v010",
      "u03-s003-v011",
      "u03-s003-v012"
    ],
    "constructedResponseIds": [
      "u03-s003-cr001",
      "u03-s003-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐步驗證四例每次操作兩邊一致，-3除數非零；天平例由x+4=10各減4得到x=6，圖示中的盒子與單位砝碼數量亦逐項核對。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "0d9f919de78a117d250ec8c1a1731102e7b0237174558d80ed598682e5fd9360",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "legacyContentDisposition": "replace-old-lecture-at-final-integration"
};

export const QUESTIONS = [
  {
    "questionId": "u03-s003-v001",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-balance-property",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "由 x＋7＝15 解 x，第一步應在等式兩邊做什麼？",
    "choices": [
      "同減 7",
      "同加7",
      "同乘7",
      "左邊減7、右邊不變"
    ],
    "answerIndex": 0,
    "explanation": "要讓 x 單獨留下，必須消去左邊加七的項。依等量公理在兩邊同減七，得到 x=15-7=8；只改左邊會破壞等式，因此第一步是兩邊同減七。",
    "steps": [
      "辨認要用減七抵消左邊的加七。",
      "在 x+7=15 兩邊同減 7。",
      "化簡得 x=8，確認等式仍成立。"
    ],
    "optionAnalysis": [
      {
        "choice": "同減 7",
        "truth": true,
        "reason": "等式兩邊同減7仍保持相等，得到x=8。 因此此選項符合題目。"
      },
      {
        "choice": "同加7",
        "truth": false,
        "reason": "同加7會使常數更大。"
      },
      {
        "choice": "同乘7",
        "truth": false,
        "reason": "乘7無法直接消去加7。"
      },
      {
        "choice": "左邊減7、右邊不變",
        "truth": false,
        "reason": "只改一邊會破壞等量關係。"
      }
    ],
    "commonMistake": "只在左邊刪掉七，卻沒有讓右邊十五也同時減七。",
    "concept": "等式兩邊做相同加減運算仍相等。",
    "tags": [
      "代數",
      "等量公理",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-simplify"
    ],
    "authoringIntent": "理解加法等量公理。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7bb1dce6adbe8700bf0959f667835e3d952dbcc122cb38f7b7610640eefa6334",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s003-v002",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-balance-property",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "由 4x＝28 解 x，應在等式兩邊同做哪個運算？",
    "choices": [
      "減4",
      "除以 4",
      "乘4",
      "除以28"
    ],
    "answerIndex": 1,
    "explanation": "4x 表示四乘 x，要消去係數四應使用除法，而不是減四。在等式兩邊同除以四，左邊化成 x，右邊 28÷4=7，所以合法操作是兩邊同除以四。",
    "steps": [
      "辨認未知數 x 的乘法係數是 4。",
      "等式兩邊同除以非零數 4。",
      "化簡得到 x=7，代回 4×7=28。"
    ],
    "optionAnalysis": [
      {
        "choice": "減4",
        "truth": false,
        "reason": "減4不能消掉乘法係數。"
      },
      {
        "choice": "除以 4",
        "truth": true,
        "reason": "兩邊同除以4，左邊成x，右邊28÷4=7。 因此此選項符合題目。"
      },
      {
        "choice": "乘4",
        "truth": false,
        "reason": "乘4會把係數變16。"
      },
      {
        "choice": "除以28",
        "truth": false,
        "reason": "除28使左邊變x/7。"
      }
    ],
    "commonMistake": "把乘在 x 前的四當成加項，錯用兩邊同減四來消去係數。",
    "concept": "消去未知數係數要在兩邊同除。",
    "tags": [
      "代數",
      "等量公理",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-simplify"
    ],
    "authoringIntent": "理解乘除等量公理。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "51cd4584ebba442734c27bc2bd38027e8851aa4b3129c5c626e3cddd649dd6c4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s003-v003",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-balance-property",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 x/5＝6，為求 x，等式兩邊應同乘多少？",
    "choices": [
      "1/5",
      "6",
      "5",
      "30"
    ],
    "answerIndex": 2,
    "explanation": "x/5 表示 x 除以五，逆運算是乘五。等式兩邊同乘五後，左邊恢復為 x，右邊成 6×5=30；題目問的是應乘多少，因此答案是五而不是最後的 x 值三十。",
    "steps": [
      "辨認除以 5 的逆運算為乘以 5。",
      "在等式兩邊同乘 5。",
      "得到 x=30，並區分操作數五與解三十。"
    ],
    "optionAnalysis": [
      {
        "choice": "1/5",
        "truth": false,
        "reason": "再乘1/5會使x變x/25。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "乘6與分母5無關。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "x被5除，兩邊同乘5可得x=30。 因此此選項符合題目。"
      },
      {
        "choice": "30",
        "truth": false,
        "reason": "30是解，不是兩邊要乘的數。"
      }
    ],
    "commonMistake": "把求得的 x=30 當成題目所問的操作數，沒有讀清問題是同乘多少。",
    "concept": "乘以分母可消除分母。",
    "tags": [
      "代數",
      "等量公理",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-simplify"
    ],
    "authoringIntent": "把除法關係用等量公理逆轉。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "bc9c9474818be8589bfaa9e7a632f76a9e5730c176b9bf952390edfeac786ec1",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s003-v004",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-balance-property",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "svg",
    "figureId": "fig-u03-s003-v004",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "圖中的天平保持平衡：左盤是一個標有 x 的盒子加 3 個相同砝碼，右盤有 8 個相同砝碼。若先從兩盤各移走 3 個砝碼，剩下的關係是什麼？",
    "choices": [
      "x＝8",
      "x＋3＝5",
      "3x＝8",
      "x＝5"
    ],
    "answerIndex": 3,
    "explanation": "平衡天平代表 x+3=8。兩盤各移走三個相同砝碼，就是等式兩邊同減三，左盤只剩未知盒，右盤剩五個砝碼，因此新的關係是 x=5。",
    "steps": [
      "把天平關係寫成 x+3=8。",
      "兩盤同步移走 3 個砝碼。",
      "化簡左右剩餘物，得到 x=5。"
    ],
    "optionAnalysis": [
      {
        "choice": "x＝8",
        "truth": false,
        "reason": "未執行移走3的動作。"
      },
      {
        "choice": "x＋3＝5",
        "truth": false,
        "reason": "把右盤移走3卻在左邊保留+3。"
      },
      {
        "choice": "3x＝8",
        "truth": false,
        "reason": "把3個砝碼誤當3個x盒。"
      },
      {
        "choice": "x＝5",
        "truth": true,
        "reason": "原關係是x+3=8；兩邊各減3後x=5。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "只移走左盤砝碼而不改右盤，或把三個砝碼誤認成三個未知盒。",
    "concept": "天平平衡對應等量關係。",
    "tags": [
      "代數",
      "等量公理",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-simplify"
    ],
    "authoringIntent": "從平衡圖理解等式兩邊同減。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4cd47529a78df36a38b94f0569b381b7317f4432c23a185589104ed3b2b45b50",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s003-v005",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-balance-property",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個操作一定能由 a＝b 得到仍正確的等式？",
    "choices": [
      "左邊加9、右邊減9",
      "兩邊同加 9",
      "兩邊分別乘不同數",
      "只將左邊平方"
    ],
    "answerIndex": 1,
    "explanation": "由 a=b 出發，等式兩邊同加同一個數仍會相等，所以 a+9=b+9 必然成立。其餘操作不是只改一邊，就是左右使用不同運算，無法對所有相等的 a、b 保證結果相等。",
    "steps": [
      "以等量公理檢查每個操作是否左右完全相同。",
      "兩邊同加 9 可得 a+9=b+9。",
      "排除只改一邊或左右乘不同數的選項。"
    ],
    "optionAnalysis": [
      {
        "choice": "左邊加9、右邊減9",
        "truth": false,
        "reason": "兩邊改變方向不同。"
      },
      {
        "choice": "兩邊同加 9",
        "truth": true,
        "reason": "a=b時，兩邊同加9可得a+9=b+9。 因此此選項符合題目。"
      },
      {
        "choice": "兩邊分別乘不同數",
        "truth": false,
        "reason": "乘數不同不保證結果相等。"
      },
      {
        "choice": "只將左邊平方",
        "truth": false,
        "reason": "只改左邊不能保持一般性的相等。"
      }
    ],
    "commonMistake": "只要看見左右都有改動就認為仍相等，沒有核對兩邊是否做同一運算。",
    "concept": "相同運算必須施於等式兩邊。",
    "tags": [
      "代數",
      "等量公理",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-simplify"
    ],
    "authoringIntent": "判斷能保持等式的操作。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "89e07b11ca0473cfa60de0ec16503f9820fed328d78ce30fceb28a46db3dcc87",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s003-v006",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-balance-property",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "由 3x－4＝11 變成 3x＝15，使用了哪個等量操作？",
    "choices": [
      "兩邊同減4",
      "兩邊同乘4",
      "兩邊同加 4",
      "兩邊同除4"
    ],
    "answerIndex": 2,
    "explanation": "從 3x-4=11 到 3x=15，左邊的負四被抵消，必須在兩邊同加四。右邊十一也因此變成十五；這是加法等量公理，不是把負四無理由地換成正四。",
    "steps": [
      "辨認要以加四抵消左邊的負四。",
      "等式兩邊同加 4。",
      "化簡成 3x=15，確認右邊為 11+4。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩邊同減4",
        "truth": false,
        "reason": "同減4會得到3x-8=7。"
      },
      {
        "choice": "兩邊同乘4",
        "truth": false,
        "reason": "乘4不會產生所示式子。"
      },
      {
        "choice": "兩邊同加 4",
        "truth": true,
        "reason": "為消去左邊-4，兩邊同加4，右邊11+4=15。 因此此選項符合題目。"
      },
      {
        "choice": "兩邊同除4",
        "truth": false,
        "reason": "除4後左邊不是3x。"
      }
    ],
    "commonMistake": "只背移項變號，漏說右邊也加四，因而無法說明等式為何保持成立。",
    "concept": "每一步移項可還原為兩邊同做運算。",
    "tags": [
      "代數",
      "等量公理",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-simplify"
    ],
    "authoringIntent": "辨認等式變形背後的操作。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2046792d544f7d1f2b25d97169f53b39d8876bf396a7d2cf7892c8809750f0be",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s003-v007",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-balance-property",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 a＝b，則下列哪一式一定成立？",
    "choices": [
      "2a－5＝b－5",
      "a＋5＝b－5",
      "a/2＝2b",
      "2a－5＝2b－5"
    ],
    "answerIndex": 3,
    "explanation": "若 a=b，先在兩邊同乘二可得 2a=2b，再同減五便得到 2a-5=2b-5。這兩步都對左右施以相同運算，因此對任何相等的 a、b 都必然成立。逐步代入也能完成驗證。",
    "steps": [
      "由 a=b 兩邊同乘 2，得到 2a=2b。",
      "再在兩邊同減 5。",
      "得到必然成立的 2a-5=2b-5。"
    ],
    "optionAnalysis": [
      {
        "choice": "2a－5＝b－5",
        "truth": false,
        "reason": "只把左邊乘2。"
      },
      {
        "choice": "a＋5＝b－5",
        "truth": false,
        "reason": "兩邊加減不同數。"
      },
      {
        "choice": "a/2＝2b",
        "truth": false,
        "reason": "左右分別除2與乘2。"
      },
      {
        "choice": "2a－5＝2b－5",
        "truth": true,
        "reason": "先兩邊同乘2，再同減5，得到2a-5=2b-5。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "左右兩邊使用不同係數或不同常數，卻誤以為式子仍由 a=b 推得。",
    "concept": "可依序在兩邊做相同合法運算。",
    "tags": [
      "代數",
      "等量公理",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-simplify"
    ],
    "authoringIntent": "連續使用多個等量操作。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2f320e10c71e7b48d2030643df7b906b2bf9f80e603ab7fd439f8584764c308b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s003-v008",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-balance-property",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "由－2x＝14 得 x＝－7，兩邊同除以－2。這個步驟為何合法？",
    "choices": [
      "等式兩邊同除以同一個非零數",
      "負數會自動移到右邊",
      "等式兩邊除數可以不同",
      "任何式子都可只改左邊"
    ],
    "answerIndex": 0,
    "explanation": "等式兩邊可以同除以同一個非零數。此處除數 -2 不為零，所以 -2x÷(-2)=14÷(-2)，得到 x=-7；負數並沒有特殊的移動規則，合法性來自除法等量公理。",
    "steps": [
      "確認兩邊使用相同除數 -2。",
      "檢查 -2 非零，符合除法等量公理。",
      "化簡得 x=-7，代回左邊為十四。"
    ],
    "optionAnalysis": [
      {
        "choice": "等式兩邊同除以同一個非零數",
        "truth": true,
        "reason": "除數-2非零，兩邊同除-2保持相等，14÷(-2)=-7。 因此此選項符合題目。"
      },
      {
        "choice": "負數會自動移到右邊",
        "truth": false,
        "reason": "移項不是負數自動移動。"
      },
      {
        "choice": "等式兩邊除數可以不同",
        "truth": false,
        "reason": "兩邊除數不同會破壞等式。"
      },
      {
        "choice": "任何式子都可只改左邊",
        "truth": false,
        "reason": "只改一邊不合法。"
      }
    ],
    "commonMistake": "忽略除數必須非零，或把負號當成可以只從左邊移到右邊。",
    "concept": "等式兩邊可同除以非零數。",
    "tags": [
      "代數",
      "等量公理",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-simplify"
    ],
    "authoringIntent": "說明除法等量公理的非零條件。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "840cefc7154535f026d9a7fcd15ed7db975b454c893e0fbd586a968402d20662",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s003-v009",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-balance-property",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "由 2(x＋1)＝10 先變成 x＋1＝5，所用操作是什麼？",
    "choices": [
      "兩邊同減2",
      "兩邊同加2",
      "兩邊同除以 2",
      "只把左邊的2刪掉"
    ],
    "answerIndex": 2,
    "explanation": "左邊的二乘整個括號 x+1，因此要先消去外層係數，可在等式兩邊同除以二。左邊成 x+1，右邊 10÷2=5，正好得到題目所示的新等式。",
    "steps": [
      "把 2 視為整個括號 x+1 的係數。",
      "等式兩邊同除以 2。",
      "化簡為 x+1=5。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩邊同減2",
        "truth": false,
        "reason": "減2不能消除乘法。"
      },
      {
        "choice": "兩邊同加2",
        "truth": false,
        "reason": "加2也不能消除係數。"
      },
      {
        "choice": "兩邊同除以 2",
        "truth": true,
        "reason": "整個左邊是2倍，兩邊同除2後x+1=5。 因此此選項符合題目。"
      },
      {
        "choice": "只把左邊的2刪掉",
        "truth": false,
        "reason": "刪係數但右邊不變違反等量公理。"
      }
    ],
    "commonMistake": "直接刪掉左邊括號外的二，卻讓右邊十維持不變。",
    "concept": "除係數時等式兩邊都要處理。",
    "tags": [
      "代數",
      "等量公理",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-simplify"
    ],
    "authoringIntent": "對整體括號使用乘除等量公理。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8f64737c344d4fa0caaa2df7fc20f79ca8e20b335773e9d7eee362f365f48775",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s003-v010",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-balance-property",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個包裹與 200 公克砝碼合計 1700 公克。若包裹重量為 x 公克，先去掉兩邊共同的 200 公克後，方程式變成什麼？",
    "choices": [
      "x＝1700",
      "x＋200＝1500",
      "200x＝1700",
      "x＝1500"
    ],
    "answerIndex": 3,
    "explanation": "包裹與二百公克砝碼合計一千七百公克，可列 x+200=1700。兩邊同減二百，相當於天平兩側去掉相同重量，得到 x=1500 公克，單位與原題一致。",
    "steps": [
      "依重量平衡列出 x+200=1700。",
      "等式兩邊同減 200。",
      "計算得 x=1500 公克。"
    ],
    "optionAnalysis": [
      {
        "choice": "x＝1700",
        "truth": false,
        "reason": "未扣掉砝碼重量。"
      },
      {
        "choice": "x＋200＝1500",
        "truth": false,
        "reason": "右邊扣200但左邊仍保留+200。"
      },
      {
        "choice": "200x＝1700",
        "truth": false,
        "reason": "把相加關係誤寫成乘法。"
      },
      {
        "choice": "x＝1500",
        "truth": true,
        "reason": "原式x+200=1700，兩邊同減200得x=1500。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "只從總重量扣掉二百，卻沒有在方程式左邊同步消去砝碼項。",
    "concept": "共同增加的重量可從兩邊同時移除。",
    "tags": [
      "代數",
      "等量公理",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-simplify"
    ],
    "authoringIntent": "用重量平衡情境理解等式同減。",
    "literacyContextNecessity": "包裹與砝碼的實際組成決定等式x+200=1700，移除相同砝碼是等量公理的情境化操作。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4e736a91bed0b8e43e7e6fe31a435779a92c65be121633ece390080c04621b7a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s003-v011",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-balance-property",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "儲值卡原有 P 元，再儲值 80 元後餘額為 350 元。要找 P，應如何操作 P＋80＝350？",
    "choices": [
      "兩邊同減 80",
      "兩邊同加80",
      "兩邊同除80",
      "左邊減80、右邊加80"
    ],
    "answerIndex": 0,
    "explanation": "P+80=350 中的八十是新增金額，要還原原餘額需用逆運算。等式兩邊同減八十後，P=350-80=270；因此正確操作是兩邊同減八十，而不是除以八十。",
    "steps": [
      "辨認新增 80 元對應方程式中的加項。",
      "等式兩邊同減 80。",
      "化簡得 P=270 元。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩邊同減 80",
        "truth": true,
        "reason": "儲值80是加項，兩邊同減80可得P=270。 因此此選項符合題目。"
      },
      {
        "choice": "兩邊同加80",
        "truth": false,
        "reason": "同加80會離P更遠。"
      },
      {
        "choice": "兩邊同除80",
        "truth": false,
        "reason": "除80不對應加法逆運算。"
      },
      {
        "choice": "左邊減80、右邊加80",
        "truth": false,
        "reason": "左右做相反操作破壞等式。"
      }
    ],
    "commonMistake": "只看到數字八十就選除法，沒有依原來是加項而使用減法逆運算。",
    "concept": "消去加項要兩邊同減。",
    "tags": [
      "代數",
      "等量公理",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-simplify"
    ],
    "authoringIntent": "把餘額變化轉成等量操作。",
    "literacyContextNecessity": "儲值前後的餘額關係決定使用加法方程式，情境中的新增80元是選擇同減80的必要依據。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8eb617758efb8ed072d2bb72f03916c7a87a4494452464953b678f97b074287c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s003-v012",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-balance-property",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "水槽原水位為 h 公分，加水後上升 12 公分，水位成為 35 公分。由 h＋12＝35 求 h 的第一步是什麼？",
    "choices": [
      "兩邊同乘12",
      "兩邊同減 12",
      "兩邊同加12",
      "只把12改成負號放右邊而不說明操作"
    ],
    "answerIndex": 1,
    "explanation": "加水後水位上升十二公分，所以 h+12=35。要找原水位，第一步在兩邊同減十二，左邊只剩 h，右邊為二十三；所謂移項變號只是這個等量操作的簡寫。",
    "steps": [
      "由上升量辨認要消去左邊的加十二。",
      "在 h+12=35 兩邊同減 12。",
      "化簡得 h=23 公分。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩邊同乘12",
        "truth": false,
        "reason": "乘12不能消去加項。"
      },
      {
        "choice": "兩邊同減 12",
        "truth": true,
        "reason": "h+12=35兩邊同減12，得到h=23。 因此此選項符合題目。"
      },
      {
        "choice": "兩邊同加12",
        "truth": false,
        "reason": "同加12使差距不變但未知數未孤立。"
      },
      {
        "choice": "只把12改成負號放右邊而不說明操作",
        "truth": false,
        "reason": "只寫移項變號沒有檢查兩邊同做運算。"
      }
    ],
    "commonMistake": "只把十二改成負號寫到右邊，卻無法說明兩邊實際做了相同減法。",
    "concept": "移項應理解為兩邊同加減。",
    "tags": [
      "代數",
      "等量公理",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-expression-simplify"
    ],
    "authoringIntent": "由水位變化選擇合法等量操作。",
    "literacyContextNecessity": "原水位、上升量與最後水位三者形成h+12=35，水位情境讓同減12的意義可被驗證。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "80aca6159e68f9a0fa3837b6ee15b40212f492b5454053ca3a6e20011c7838a2",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u03-s003-cr001",
    "unitId": "u03",
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-balance-property",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "用等量公理解 5x－7＝18。每一步都要寫出等式兩邊做了什麼。",
    "requiredWork": [
      "寫出兩邊同加7。",
      "寫出兩邊同除5。",
      "代回原式。"
    ],
    "fullCreditSolution": [
      "由 5x-7=18 開始，在等式兩邊同加七，負七與正七抵消，得到 5x=25。",
      "再在等式兩邊同除以非零數五，左邊化為 x，右邊 25÷5=5，所以 x=5。",
      "代回原式驗算，5×5-7=25-7=18，左右相等，兩次等量操作均有效。"
    ],
    "alternativeSolutions": [
      "可用天平移除與平均分的語言解釋。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "兩個等量步驟與驗算完整。"
      },
      {
        "score": 2,
        "criteria": "答案正確且有一個等量步驟，或驗算缺漏。"
      },
      {
        "score": 1,
        "criteria": "知道先加7或最後除5。"
      },
      {
        "score": 0,
        "criteria": "只寫答案或破壞等式平衡。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "只把負七改成正七放到右邊，沒有說明等式兩邊同加七。",
      "從 5x=25 只刪掉左邊係數五，卻沒有讓右邊同除以五。",
      "代回時把 5x 寫成 5+x，造成驗算式與原方程式不同。"
    ],
    "independentReview": {
      "derivedResult": "x=5",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "b8bd1f922818a71a1ca02697de941bfe45c987686326157cd1808638ee5e24be",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s003-cr002",
    "unitId": "u03",
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-balance-property",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "一個未知重量的盒子與 6 個 50 公克砝碼平衡於 900 公克。設盒子重 x 公克，列方程式並用等量公理解出盒子重量。",
    "requiredWork": [
      "列出x+6×50=900。",
      "說明兩邊同減300。",
      "附單位並驗算。"
    ],
    "fullCreditSolution": [
      "六個五十公克砝碼共重 6×50=300 公克，依平衡關係列方程式 x+300=900。",
      "在等式兩邊同減三百公克，左邊只剩盒子重量，得到 x=600 公克。",
      "驗算盒子六百公克加砝碼三百公克等於九百公克，與天平總重完全一致。"
    ],
    "alternativeSolutions": [
      "也可先算六個砝碼總重，再由總重扣除。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "方程式、等量操作、答案與驗算完整。"
      },
      {
        "score": 2,
        "criteria": "列式與答案正確但說明等量操作不足。"
      },
      {
        "score": 1,
        "criteria": "能算出砝碼300公克或列出x+300=900。"
      },
      {
        "score": 0,
        "criteria": "未建立正確重量關係。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "把六個五十公克誤看成六加五十，算成五十六公克。",
      "只從右邊九百公克扣除砝碼，卻沒有在左邊同步消去三百公克。",
      "求得六百後漏寫公克單位，無法清楚表明答案代表盒子重量。"
    ],
    "independentReview": {
      "derivedResult": "600公克",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "3604607d493ed761dd672158905a4b0635b749566fbf43e5584d2b46fad952c9",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "fig-u03-s003-v004",
    "unitId": "u03",
    "skillId": "linear-equation-balance-property",
    "altText": "一座水平平衡的天平，左盤有一個標示 x 的盒子與三個單位砝碼，右盤有八個單位砝碼。",
    "drawingSpec": {
      "canvas": {
        "width": 900,
        "height": 430,
        "viewBox": "0 0 900 430"
      },
      "layout": "天平支點位於畫布中央，橫桿保持水平，左右盤高度相同。",
      "leftPan": {
        "box": {
          "label": "x",
          "position": [
            176,
            215
          ]
        },
        "unitWeights": 3
      },
      "rightPan": {
        "unitWeights": 8
      },
      "lines": {
        "beam": "7px實線",
        "supports": "4至8px實線",
        "hidden": "無虛線"
      },
      "labels": {
        "left": "左盤：x 與 3 個單位砝碼",
        "right": "右盤：8 個單位砝碼"
      },
      "scaleNote": "砝碼大小相同；盒子尺寸不代表實際重量。",
      "accessibility": "title與desc完整說明兩盤內容及平衡狀態。",
      "mobile": "最小文字22px，重要標籤28px。"
    },
    "svgPath": "figures/u03/fig-u03-s003-v004.svg",
    "svgAssertions": [
      "<title id=\"t\">平衡天平表示 x 加 3 等於 8</title>",
      "<text x=\"176\" y=\"224\"",
      "右盤：8 個單位砝碼"
    ],
    "figureReview": {
      "decision": "pass",
      "questionFigureConsistency": "pass",
      "accessibility": "pass",
      "mobileReadability": "pass",
      "answerLeakage": "pass",
      "reviewNote": "逐一核對左盤一個x盒與三顆砝碼、右盤八顆砝碼，橫桿兩端同高；圖中沒有寫出x=5，因此不會直接洩漏答案。",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "b08e1d735bfd431489cdd6fefb925a9f46c9be67a32b5d7e9e7be5fc252e4348",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "new-human-authored-figure"
  }
];
