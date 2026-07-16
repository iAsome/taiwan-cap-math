// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
// CONTENT AUTHORITY: CHATGPT_HUMAN_AUTHORED_R1
// OLD GENERATED CONTENT MUST NOT BE IMPORTED OR MERGED.
export const LECTURE = {
  "lectureId": "u03-s007-lecture-r1",
  "unitId": "u03",
  "topicId": "u03-linear-equation-solving",
  "skillId": "linear-equation-check-solution",
  "title": "方程式解的檢查：代入原式比較左右兩邊",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能把候選值代入原方程式。",
    "能分別計算左右兩邊而不先移項。",
    "能找出解題過程中的符號或運算錯誤。",
    "能區分代數上成立與情境上可接受。"
  ],
  "prerequisites": [
    {
      "skillId": "linear-equation-fractions",
      "requiredLevel": "能解含分母的一元一次方程式，並保持原式結構進行代入。"
    }
  ],
  "glossary": [
    {
      "term": "驗算",
      "definition": "把求得的值代回原式，確認左右兩邊相等。"
    },
    {
      "term": "候選解",
      "definition": "尚待檢查是否使方程式成立的數。"
    },
    {
      "term": "左式與右式",
      "definition": "等號左邊與右邊各自完整的式子。"
    },
    {
      "term": "反例",
      "definition": "一個能使宣稱不成立的具體代入結果。"
    }
  ],
  "notation": [
    {
      "symbol": "LHS",
      "meaning": "left-hand side，等號左邊的值。"
    },
    {
      "symbol": "RHS",
      "meaning": "right-hand side，等號右邊的值。"
    }
  ],
  "conceptNarrative": [
    "驗算時不要使用自己化簡後可能已出錯的式子，而要回到原方程式。",
    "負數代入、括號與分母是最常出錯的地方。",
    "若左右不等，候選值就不是解；只需要一個不等結果即可否定。",
    "情境題還需檢查整數、正值、單位等限制，代數成立只是第一關。"
  ],
  "formalDefinitions": [
    {
      "name": "解的判定",
      "statement": "數a是方程式的解，當且僅當把x=a代入後左右兩邊相等。"
    },
    {
      "name": "驗算失敗",
      "statement": "若代入後左右值不同，候選值不是解。"
    }
  ],
  "formulas": [
    {
      "formula": "LHS(a)=RHS(a)",
      "conditions": [
        "a代入原方程式每一處未知數"
      ],
      "meaning": "候選解成立的必要且充分條件。"
    }
  ],
  "nonApplicableCases": [
    "只檢查化簡後其中一步不能取代代回原式。",
    "左右兩邊數值接近但不相等仍不是解。",
    "不能為了讓答案成立而改動題目常數。",
    "有分母時仍需確認分母不為0。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "抄回原方程式。",
      "check": "是否誤用中間式？"
    },
    {
      "step": 2,
      "instruction": "用括號代入候選值。",
      "check": "負數是否加括號？"
    },
    {
      "step": 3,
      "instruction": "分別計算左式與右式。",
      "check": "是否未先移項？"
    },
    {
      "step": 4,
      "instruction": "比較兩個精確值。",
      "check": "是否完全相等？"
    },
    {
      "step": 5,
      "instruction": "再檢查情境限制。",
      "check": "答案的單位、正負與整數性是否合理？"
    }
  ],
  "workedExamples": [
    {
      "prompt": "檢查 x＝7 是否為 4x－9＝19 的解。",
      "solutionSteps": [
        "代入原式左邊，計算 4×7－9＝19。",
        "把左邊 19 與右邊 19 比較，判定相等。"
      ],
      "answer": "是。",
      "why": "回到原式代入七，左邊四乘七再減九，得到二十八減九等於十九，和右邊精確相等。因此七是解；驗算不能只看四乘七而漏掉常數項。"
    },
    {
      "prompt": "檢查 x＝－4 是否為 3－2x＝11 的解。",
      "solutionSteps": [
        "以括號代入負四，左邊成為 3－2(－4)。",
        "算得左邊 11，與右邊 11 比較相等。"
      ],
      "answer": "是。",
      "why": "負四代入時要加括號，左邊是三減二乘負四，也就是三減負八等於十一，與右邊相同。若漏括號，容易把減去負數的符號算錯。"
    },
    {
      "prompt": "檢查 x＝5 是否為 2(x－1)＝x＋4 的解。",
      "solutionSteps": [
        "代入左邊得 2(5－1)＝8。",
        "代入右邊得 5＋4＝9，左右不等。"
      ],
      "answer": "不是。",
      "why": "左邊二乘四等於八，右邊五加四等於九，兩邊不相等，所以五不是解。只算括號中的四或只算其中一邊，都不足以完成方程式驗算。"
    },
    {
      "prompt": "方程式算得票數 x＝6.5，代數驗算成立，是否為可接受答案？",
      "solutionSteps": [
        "先確認候選值代回方程式後左右相等。",
        "再檢查票數必須是非負整數，六點五不符限制。"
      ],
      "answer": "若票只能整張出售，不能接受。",
      "why": "代數式左右相等只通過數學驗算；票數還受非負整數的情境限制。六點五張無法實際出售，所以必須回查題目資料或列式，不能直接作答。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "代入中間化簡式。",
      "why": "若化簡本身錯誤，驗算無法發現。",
      "correction": "回到原方程式。"
    },
    {
      "mistake": "只算左邊就判定。",
      "why": "未比較右邊。",
      "correction": "把LHS與RHS都寫出。"
    },
    {
      "mistake": "負數代入不加括號。",
      "why": "符號與原減號混淆。",
      "correction": "寫成完整括號。"
    },
    {
      "mistake": "左右相差1仍說大致正確。",
      "why": "方程式要求精確相等。",
      "correction": "不同即不是解。"
    },
    {
      "mistake": "候選值不成立就修改右邊。",
      "why": "改變題目。",
      "correction": "否定候選值並重查解法。"
    },
    {
      "mistake": "只驗算代數不看情境。",
      "why": "可能得到負人數或小數箱數。",
      "correction": "再做合理性檢查。"
    }
  ],
  "selfCheck": [
    "是否使用原方程式？",
    "候選值是否每處都代入？",
    "左右是否分開計算？",
    "比較是否精確？",
    "情境限制是否通過？"
  ],
  "summary": [
    "解必須使原式左右相等。",
    "驗算可找到符號與算術錯誤。",
    "負數代入要加括號。",
    "情境答案還需通過範圍限制。"
  ],
  "connections": {
    "previous": "需要會解含括號與分母的一元一次方程式。",
    "next": [
      "年齡、金錢與行程題都要以驗算確認列式。",
      "合理性檢查會進一步判斷單位與範圍。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u03-s007-v001",
      "u03-s007-v002",
      "u03-s007-v003",
      "u03-s007-v004",
      "u03-s007-v005",
      "u03-s007-v006",
      "u03-s007-v007",
      "u03-s007-v008",
      "u03-s007-v009",
      "u03-s007-v010",
      "u03-s007-v011",
      "u03-s007-v012"
    ],
    "constructedResponseIds": [
      "u03-s007-cr001",
      "u03-s007-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四例均獨立計算左右：14=14、3≠2、8=8；票數7.5雖可使代數式成立但違反完整張數限制，確認代數驗算與情境驗收分開進行。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "4a0fb54cb4f890390ee41782277728ac97c07606767a549835c2a045cab9ff98",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "legacyContentDisposition": "replace-old-lecture-at-final-integration"
};

export const QUESTIONS = [
  {
    "questionId": "u03-s007-v001",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-check-solution",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "判斷 x＝4 是否為方程式 2x＋1＝9 的解。",
    "choices": [
      "是，左邊等於9",
      "否，左邊等於8",
      "否，右邊應改成10",
      "是，因為4＋1＝5"
    ],
    "answerIndex": 0,
    "explanation": "檢查候選值時要代回原方程式。把 x＝4 代入左邊 2x＋1，得到 2×4＋1＝8＋1＝9，與右邊 9 完全相等，因此 x＝4 是方程式的解。其他說法若漏掉係數或常數，都沒有比較完整左右兩式。",
    "steps": [
      "把候選值 4 代入原式左邊。",
      "依運算順序算得 2×4＋1＝9。",
      "比較右邊也是 9，判定 x＝4 是解。"
    ],
    "optionAnalysis": [
      {
        "choice": "是，左邊等於9",
        "truth": true,
        "reason": "代入x=4，左邊2×4+1=9，與右邊9相等，所以是解。 因此此選項符合題目。"
      },
      {
        "choice": "否，左邊等於8",
        "truth": false,
        "reason": "漏加常數1。"
      },
      {
        "choice": "否，右邊應改成10",
        "truth": false,
        "reason": "檢查解不需要改題目右邊。"
      },
      {
        "choice": "是，因為4＋1＝5",
        "truth": false,
        "reason": "把2x誤看成x。"
      }
    ],
    "commonMistake": "只算二乘四便停止而漏加常數一，會把左邊錯認成八並否定正確解。",
    "concept": "候選值使左右兩邊相等才是解。",
    "tags": [
      "代數",
      "方程式解的檢查",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-fractions"
    ],
    "authoringIntent": "用代入檢查方程式解。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "079c0771da466ca27a5e5a22bda7f599c260d0b114578b66f320f7af32b7142b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s007-v002",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-check-solution",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "判斷 x＝－3 是否為 5－x＝8 的解。",
    "choices": [
      "否，5－3＝2",
      "是，5－(－3)＝8",
      "否，左邊等於－8",
      "是，因為5＋(－3)＝8"
    ],
    "answerIndex": 1,
    "explanation": "將負數代入減法式時必須加括號。把 x＝－3 代入 5－x，得到 5－(－3)＝5＋3＝8，與方程式右邊 8 相同，所以 x＝－3 是解。若寫成 5－3，便漏掉原式減去負數會轉為加法。",
    "steps": [
      "把 x＝－3 以括號代入，寫成 5－(－3)。",
      "利用減去負數等於加正數，算得左邊為 8。",
      "比較右邊也是 8，判定候選值成立。"
    ],
    "optionAnalysis": [
      {
        "choice": "否，5－3＝2",
        "truth": false,
        "reason": "漏掉代入負數的括號。"
      },
      {
        "choice": "是，5－(－3)＝8",
        "truth": true,
        "reason": "代入x=-3時須加括號，5-(-3)=8，因此是解。 因此此選項符合題目。"
      },
      {
        "choice": "否，左邊等於－8",
        "truth": false,
        "reason": "符號運算錯誤。"
      },
      {
        "choice": "是，因為5＋(－3)＝8",
        "truth": false,
        "reason": "把減x改成加x後又算錯。"
      }
    ],
    "commonMistake": "負三代入時不加括號，把五減負三錯寫成五減三，會得到錯誤的左式值。",
    "concept": "負數代入要保留原運算符號。",
    "tags": [
      "代數",
      "方程式解的檢查",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-fractions"
    ],
    "authoringIntent": "檢查負數候選解。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "9454b453c1d052bfdb640089916a16af9ff7ad578462c1709ed1453f0a646acf",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s007-v003",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-check-solution",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪個數是 3x－2＝10 的解？",
    "choices": [
      "2",
      "3",
      "4",
      "6"
    ],
    "answerIndex": 2,
    "explanation": "可先解方程式：3x－2＝10 兩邊同加 2，得到 3x＝12，再同除以 3 得 x＝4。也可逐一代入選項，只有 3×4－2＝12－2＝10，與右邊相等，因此第三個選項是唯一正確解。",
    "steps": [
      "等式兩邊同加 2，得到 3x＝12。",
      "兩邊同除以 3，求得 x＝4。",
      "代回 3×4－2＝10，確認等式成立。"
    ],
    "optionAnalysis": [
      {
        "choice": "2",
        "truth": false,
        "reason": "代入得4。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "代入得7。"
      },
      {
        "choice": "4",
        "truth": true,
        "reason": "解得3x=12，所以x=4；代入也有12-2=10。 因此此選項符合題目。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "代入得16。"
      }
    ],
    "commonMistake": "算到三 x 等於十二便把十二當答案，忘記未知數前仍有係數三需要消去。",
    "concept": "可先解方程式再代入。",
    "tags": [
      "代數",
      "方程式解的檢查",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-fractions"
    ],
    "authoringIntent": "從候選值中找唯一解。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b60c2cfcd6eee28b68e395646adfd069d0a7a0353783b7af725b56d1605585ac",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s007-v004",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-check-solution",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "小明說 x＝2 是方程式 4(x－1)＝5 的解。下列判斷何者正確？",
    "choices": [
      "是，左邊為5",
      "不是，左邊為8",
      "是，因為2－1＝1",
      "不是，左邊為4"
    ],
    "answerIndex": 3,
    "explanation": "把 x＝2 代回原式左邊，先算括號 2－1＝1，再乘 4 得 4；右邊是 5。因為 4 不等於 5，所以 x＝2 不是解，正確判斷是『不是，左邊為 4』。只確認括號值等於 1 還不能判斷整個方程式。",
    "steps": [
      "以括號代入 x＝2，左邊成為 4(2－1)。",
      "先算括號再乘係數，得到左邊為 4。",
      "比較右邊為 5，因不相等而判定不是解。"
    ],
    "optionAnalysis": [
      {
        "choice": "是，左邊為5",
        "truth": false,
        "reason": "把4(1)算成5。"
      },
      {
        "choice": "不是，左邊為8",
        "truth": false,
        "reason": "忽略括號內減1。"
      },
      {
        "choice": "是，因為2－1＝1",
        "truth": false,
        "reason": "只確認括號值，不比較完整左右。"
      },
      {
        "choice": "不是，左邊為4",
        "truth": true,
        "reason": "代入x=2，左邊4(1)=4，不等於右邊5，所以不是解。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "只確認二減一等於一就說候選值成立，沒有把外面的四乘完並比較右邊。",
    "concept": "完整代入左右兩邊，不只看局部。",
    "tags": [
      "代數",
      "方程式解的檢查",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-fractions"
    ],
    "authoringIntent": "辨認錯誤驗算。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6aec745e4d78b7f28fdac67ab58489b0fbe629ef3ff43257a35fc56526554377",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s007-v005",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-check-solution",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "判斷 x＝－2 是否為 3x＋7＝1 的解。",
    "choices": [
      "否，左邊為13",
      "是",
      "否，左邊為－1",
      "無法判斷"
    ],
    "answerIndex": 1,
    "explanation": "把 x＝－2 代入左邊 3x＋7，得到 3(－2)＋7＝－6＋7＝1。左邊精確等於右邊 1，因此 x＝－2 是方程式的解。計算負數乘法時，正三乘負二必須是負六，不能遺失負號。",
    "steps": [
      "以括號把負二代入 3x＋7。",
      "計算 3(－2)＋7＝－6＋7＝1。",
      "比較右邊也是 1，判定 x＝－2 是解。"
    ],
    "optionAnalysis": [
      {
        "choice": "否，左邊為13",
        "truth": false,
        "reason": "把3(-2)算成6。"
      },
      {
        "choice": "是",
        "truth": true,
        "reason": "3(-2)+7=-6+7=1，等於右邊，所以是解。 因此此選項符合題目。"
      },
      {
        "choice": "否，左邊為－1",
        "truth": false,
        "reason": "把-6+7算成-1。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "資料足以直接檢查。"
      }
    ],
    "commonMistake": "把正三乘負二算成正六，會得到十三並錯誤否定原本成立的候選值。",
    "concept": "左右相等即可判定。",
    "tags": [
      "代數",
      "方程式解的檢查",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-fractions"
    ],
    "authoringIntent": "驗算含負係數結果的候選解。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "9f2b5f0e8165f878b32ff1050c778df8cc32e1952a086efac0d4e30b3dddb5ea",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s007-v006",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-check-solution",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "方程式 x/3＋2＝5 的解是下列何者？",
    "choices": [
      "3",
      "6",
      "9",
      "15"
    ],
    "answerIndex": 2,
    "explanation": "先解 x/3＋2＝5：兩邊同減 2 得 x/3＝3，再同乘 3 得 x＝9。代回原式，9/3＋2＝3＋2＝5，左右相等。選項 3 只是 x/3 的值，還不是題目所求的 x；最後必須消除分母才能完成求解。",
    "steps": [
      "等式兩邊同減 2，得到 x/3＝3。",
      "等式兩邊同乘 3，求得 x＝9。",
      "代回計算 9/3＋2＝5，確認成立。"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": false,
        "reason": "代入得3。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "代入得4。"
      },
      {
        "choice": "9",
        "truth": true,
        "reason": "x/3=3，所以x=9；代入得3+2=5。 因此此選項符合題目。"
      },
      {
        "choice": "15",
        "truth": false,
        "reason": "代入得7。"
      }
    ],
    "commonMistake": "得到 x/3 等於三便停止，把分式的值誤當未知數本身，漏做最後同乘三。",
    "concept": "候選解須使原式成立。",
    "tags": [
      "代數",
      "方程式解的檢查",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-fractions"
    ],
    "authoringIntent": "以代入和直接解法交叉檢查。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0d5b8e4c08a3d168140c66fe1acaba3c0f0b37715154bdbbde60a1d4069be154",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s007-v007",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-check-solution",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某生解 2x－3＝4 得 x＝5。下列何者正確？",
    "choices": [
      "對，因為5－3＝2",
      "錯，正確解為1/2",
      "對，因為2×5＝10",
      "錯，代入後左邊為7"
    ],
    "answerIndex": 3,
    "explanation": "把學生答案 x＝5 代回原式，左邊是 2×5－3＝10－3＝7，而右邊是 4；左右不等，所以答案錯誤。重新解得 2x＝7、x＝7/2。題目只問對錯時，以原式代入得到的反例就足以否定 x＝5。",
    "steps": [
      "把 x＝5 代回左邊 2x－3。",
      "算得左邊為 7，與右邊 4 比較。",
      "判定答案錯誤；重新解可得正確值 7/2。"
    ],
    "optionAnalysis": [
      {
        "choice": "對，因為5－3＝2",
        "truth": false,
        "reason": "漏掉係數2。"
      },
      {
        "choice": "錯，正確解為1/2",
        "truth": false,
        "reason": "正確解不是1/2。"
      },
      {
        "choice": "對，因為2×5＝10",
        "truth": false,
        "reason": "只算乘法未完成減3。"
      },
      {
        "choice": "錯，代入後左邊為7",
        "truth": true,
        "reason": "把x=5代入左邊得10-3=7，不是4，所以答案錯；正確解為7/2。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "只算二乘五等於十便說解法正確，忘記原式左邊還要減去三並與四比較。",
    "concept": "驗算能直接否定錯誤答案。",
    "tags": [
      "代數",
      "方程式解的檢查",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-fractions"
    ],
    "authoringIntent": "用原式找出解題錯誤。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "5dff71538c736d1691b150ae49ed74538c9fd36d2d48ecdc271648ff9f227850",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s007-v008",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-check-solution",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 x＝4，檢查 3(x＋1)＝2x＋7。結果如何？",
    "choices": [
      "左右皆為15，是解",
      "左邊15、右邊11，不是解",
      "左邊12、右邊15，不是解",
      "左右皆為11，是解"
    ],
    "answerIndex": 0,
    "explanation": "將 x＝4 分別代入原方程式兩邊。左邊 3(x＋1)＝3(4＋1)＝15；右邊 2x＋7＝2×4＋7＝15。兩個精確值相等，因此 x＝4 是解。驗算要分開計算左右，不能只看其中一式或只憑外形判斷。",
    "steps": [
      "代入左邊，計算 3(4＋1)＝15。",
      "代入右邊，計算 2×4＋7＝15。",
      "左右同為 15，判定候選值是解。"
    ],
    "optionAnalysis": [
      {
        "choice": "左右皆為15，是解",
        "truth": true,
        "reason": "左邊3×5=15，右邊8+7=15，兩邊相等。 因此此選項符合題目。"
      },
      {
        "choice": "左邊15、右邊11，不是解",
        "truth": false,
        "reason": "右邊2×4漏加7。"
      },
      {
        "choice": "左邊12、右邊15，不是解",
        "truth": false,
        "reason": "左邊漏算括號加1。"
      },
      {
        "choice": "左右皆為11，是解",
        "truth": false,
        "reason": "兩邊數值都算錯。"
      }
    ],
    "commonMistake": "左邊漏算括號中的加一，或右邊漏加七，都會造成假性的左右不等。",
    "concept": "驗算不可在計算中移項。",
    "tags": [
      "代數",
      "方程式解的檢查",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-fractions"
    ],
    "authoringIntent": "分開計算較複雜方程式兩邊。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0d41455b07bbd598d58eaa228a28f5ea12aca849a99791d9e81f57f161016386",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s007-v009",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-check-solution",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪個方程式以 x＝－1 為解？",
    "choices": [
      "2x＋1＝1",
      "5－x＝4",
      "4x＋3＝－1",
      "3x－2＝2"
    ],
    "answerIndex": 2,
    "explanation": "把 x＝－1 逐一代入四個方程式。第三式左邊 4(－1)＋3＝－4＋3＝－1，與右邊相等；其餘三式代入後左右分別不等。因此只有 4x＋3＝－1 以 x＝－1 為解，且負數括號不可省略。",
    "steps": [
      "以括號將負一代入每個選項的左邊。",
      "第三式算得 4(－1)＋3＝－1。",
      "確認第三式左右相等，並排除其餘不等的方程式。"
    ],
    "optionAnalysis": [
      {
        "choice": "2x＋1＝1",
        "truth": false,
        "reason": "代入得-1而右邊1。"
      },
      {
        "choice": "5－x＝4",
        "truth": false,
        "reason": "代入得6而右邊4。"
      },
      {
        "choice": "4x＋3＝－1",
        "truth": true,
        "reason": "代入-1：4(-1)+3=-1，等於右邊；其餘三式左右不等。 因此此選項符合題目。"
      },
      {
        "choice": "3x－2＝2",
        "truth": false,
        "reason": "代入得-5而右邊2。"
      }
    ],
    "commonMistake": "代入負一時忽略括號或只看方程式外形，沒有實際比較每個選項的左右值。",
    "concept": "對每個選項完整代入。",
    "tags": [
      "代數",
      "方程式解的檢查",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-fractions"
    ],
    "authoringIntent": "反向辨認具有指定解的方程式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0e7eca9003572d3c9e21083dab7ecb34930ea5b0b0a08fe29d489a910bd782dd",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s007-v010",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-check-solution",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某行動方案月租 199 元，每 GB 加收 3 元。帳單方程式為 199＋3m＝244。業者記錄 m＝15，這個記錄正確嗎？",
    "choices": [
      "不正確，應為14",
      "不正確，左邊為259",
      "正確，因為244－199＝15",
      "正確，199＋45＝244"
    ],
    "answerIndex": 3,
    "explanation": "把業者記錄 m＝15 代入帳單左邊：每 GB 費用為 3×15＝45 元，加月租 199 元得到 244 元，與帳單右邊相同，所以記錄正確。244－199＝45 是流量費總額，還要除以 3 才得到 15 GB。",
    "steps": [
      "把 m＝15 代入每 GB 加收項，算得 3m＝45。",
      "將月租加入，199＋45＝244。",
      "與帳單總額比較相等，判定記錄正確。"
    ],
    "optionAnalysis": [
      {
        "choice": "不正確，應為14",
        "truth": false,
        "reason": "14代入只得241。"
      },
      {
        "choice": "不正確，左邊為259",
        "truth": false,
        "reason": "把199與60相加。"
      },
      {
        "choice": "正確，因為244－199＝15",
        "truth": false,
        "reason": "244-199=45，不是15；還要除3。"
      },
      {
        "choice": "正確，199＋45＝244",
        "truth": true,
        "reason": "代入m=15，3m=45，199+45=244，記錄正確。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "把帳單減月租所得四十五元直接當成十五 GB，混淆流量費總額與使用量。",
    "concept": "驗算應保留每GB單價。",
    "tags": [
      "代數",
      "方程式解的檢查",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-fractions"
    ],
    "authoringIntent": "用實際費率驗證使用量。",
    "literacyContextNecessity": "月租與每GB單價決定199+3m，只有保留計費情境才能判斷m=15是否合理。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c7cdc45c0455c35d311c342b3db1e86f7bcbf87e849cd57ecef5a3628d38f882",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s007-v011",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-check-solution",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "活動票每張 120 元，另收 60 元郵寄費。方程式 120x＋60＝1020 中，工作人員填 x＝8。驗算結果為何？",
    "choices": [
      "正確，總額為1020元",
      "不正確，總額為960元",
      "不正確，應為9張",
      "正確，因為1020÷120＝8"
    ],
    "answerIndex": 0,
    "explanation": "把 x＝8 代入 120x＋60，票款為 120×8＝960 元，再加一次郵寄費 60 元，總額為 1020 元，與方程式右邊相等，所以八張正確。直接用 1020 除以 120 會漏掉固定郵寄費，不能作為驗算。",
    "steps": [
      "以八張計算票款 120×8＝960 元。",
      "加上一次郵寄費，得到 960＋60＝1020 元。",
      "與題目總額相等，判定 x＝8 正確。"
    ],
    "optionAnalysis": [
      {
        "choice": "正確，總額為1020元",
        "truth": true,
        "reason": "120×8+60=960+60=1020，所以8張正確。 因此此選項符合題目。"
      },
      {
        "choice": "不正確，總額為960元",
        "truth": false,
        "reason": "漏加郵寄費。"
      },
      {
        "choice": "不正確，應為9張",
        "truth": false,
        "reason": "9張會超過總額。"
      },
      {
        "choice": "正確，因為1020÷120＝8",
        "truth": false,
        "reason": "直接除以120未扣郵寄費。"
      }
    ],
    "commonMistake": "只算八張票款九百六十元而漏加郵寄費，會錯誤判定工作人員的答案不成立。",
    "concept": "固定費必須在代入後加入。",
    "tags": [
      "代數",
      "方程式解的檢查",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-fractions"
    ],
    "authoringIntent": "驗算含固定費的票價方程式。",
    "literacyContextNecessity": "票價與固定郵寄費分屬變動費和固定費，情境決定驗算式120x+60。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2c1a31a0a7ba051cbe479211d00d0972f027390fd6899f133085f56d813bb9bd",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s007-v012",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-check-solution",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "水槽模型為 x/4＋7＝12，管理員記錄 x＝20 公升。驗算結果如何？",
    "choices": [
      "不正確，20/4＝4",
      "正確，5＋7＝12",
      "不正確，應為12",
      "正確，因為20＋7＝27"
    ],
    "answerIndex": 1,
    "explanation": "把管理員記錄 x＝20 代入原式，先算 20/4＝5，再加 7 得 12，正好等於右邊，所以記錄正確。選項『20/4＝4』本身就是錯誤算式；驗算時也必須保留除以 4，不能改算 20＋7。",
    "steps": [
      "把 x＝20 代入 x/4＋7。",
      "依運算順序算得 20/4＋7＝5＋7＝12。",
      "比較右邊也是 12，判定記錄正確。"
    ],
    "optionAnalysis": [
      {
        "choice": "不正確，20/4＝4",
        "truth": false,
        "reason": "20/4 實際等於 5，不是選項所寫的 4；完整左邊為 5＋7＝12。"
      },
      {
        "choice": "正確，5＋7＝12",
        "truth": true,
        "reason": "20/4=5，5+7=12，等於右邊，因此記錄正確。 因此此選項符合題目。"
      },
      {
        "choice": "不正確，應為12",
        "truth": false,
        "reason": "12是方程式右邊，不是x。"
      },
      {
        "choice": "正確，因為20＋7＝27",
        "truth": false,
        "reason": "驗算必須保留除4。"
      }
    ],
    "commonMistake": "把二十除以四錯算成四，或代入時漏掉除以四，都會得到不實的驗算結果。",
    "concept": "按原式運算而非重列新式。",
    "tags": [
      "代數",
      "方程式解的檢查",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-fractions"
    ],
    "authoringIntent": "驗算分數型情境方程式。",
    "literacyContextNecessity": "四等分後再加7公升的操作次序決定x/4+7，情境是驗算原式的必要依據。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "5aae75559954bd08f2e600ac84904356d7dbdb094bbf827ef40518d5f8c9180b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u03-s007-cr001",
    "unitId": "u03",
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-check-solution",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某生解方程式 4(x－2)＝2x＋10 得 x＝7。請用代入原式檢查，並指出這個答案是否正確。",
    "requiredWork": [
      "分別計算原式左右兩邊。",
      "明確判定是否為解。",
      "若錯，求出正確解。"
    ],
    "fullCreditSolution": [
      "先把學生答案 x＝7 代回原式：左邊 4(7－2)＝20，右邊 2×7＋10＝24。",
      "左右不相等，所以 x＝7 不是解。重新解原式，展開得 4x－8＝2x＋10。",
      "移項後 2x＝18，故 x＝9；再代回可得左右兩邊都等於 28，確認正確解是 9。"
    ],
    "alternativeSolutions": [
      "也可先指出一個不等值作反例，再重新解原式。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完成7的反例驗算、求出9並再次驗算。"
      },
      {
        "score": 2,
        "criteria": "能證明7錯且求出9但缺第二次驗算。"
      },
      {
        "score": 1,
        "criteria": "只算出左右20與24並判定不是解。"
      },
      {
        "score": 0,
        "criteria": "未代入原式或比較錯誤。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "只代入自己化簡過的中間式，若中間式本身有錯，就無法檢查原解法。",
      "算出左邊二十與右邊二十四仍說大致相等，忽略方程式要求精確相等。",
      "只證明七不是解，卻漏答題目要求的正確解九或沒有再次代回驗算。"
    ],
    "independentReview": {
      "derivedResult": "x=7不是解；正確解x=9",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "be8b131b97a3a0f918b0cc27cd66a2ea478a0867534fff97caea8d7ef599b95f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s007-cr002",
    "unitId": "u03",
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-check-solution",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "判斷 x＝－3 是否為 (2x＋1)/5＝－1 的解，並說明每一步。",
    "requiredWork": [
      "負數代入使用括號。",
      "分別計算分子、分數與右邊。"
    ],
    "fullCreditSolution": [
      "將 x＝－3 以括號代入原式分子，得到 2(－3)＋1＝－6＋1＝－5。",
      "左邊完整分數為－5/5＝－1，分母仍須計算，不能只停在分子負五。",
      "左邊－1 與右邊－1 精確相等，所以 x＝－3 是此方程式的解。"
    ],
    "alternativeSolutions": [
      "也可先解方程式：2x+1=-5，x=-3。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "代入與左右比較完整，判定正確。"
      },
      {
        "score": 2,
        "criteria": "答案正確但省略一個關鍵計算。"
      },
      {
        "score": 1,
        "criteria": "能算出分子-5或左邊-1。"
      },
      {
        "score": 0,
        "criteria": "負數代入與分數運算皆錯。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "負三代入時不加括號，把二乘負三錯算成正六，造成分子符號錯誤。",
      "算出分子負五便直接和右邊負一比較，漏掉整個分子還要除以五。",
      "因候選值是負數便直接否定，沒有依原方程式逐步計算左右兩邊。"
    ],
    "independentReview": {
      "derivedResult": "是，x=-3",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "851c78abeb01834ba52bbb75489f0fa4944735b9dd531beed727b4a9b841dc6f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const DRAWING_SPECS = [];
