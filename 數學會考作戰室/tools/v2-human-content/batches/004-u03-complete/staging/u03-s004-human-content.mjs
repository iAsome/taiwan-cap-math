// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
// CONTENT AUTHORITY: CHATGPT_HUMAN_AUTHORED_R1
// OLD GENERATED CONTENT MUST NOT BE IMPORTED OR MERGED.
export const LECTURE = {
  "lectureId": "u03-s004-lecture-r1",
  "unitId": "u03",
  "topicId": "u03-linear-equation-solving",
  "skillId": "linear-equation-basic-solving",
  "title": "一元一次方程式基本解法：整理未知數與常數直到求出唯一解",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能解一步與兩步一元一次方程式。",
    "能處理未知數出現在等式兩邊。",
    "能正確處理負係數與小數係數。",
    "能把解代回原式驗算。"
  ],
  "prerequisites": [
    {
      "skillId": "linear-equation-balance-property",
      "requiredLevel": "能在等式兩邊做相同加減乘除，且知道除數不可為零。"
    }
  ],
  "glossary": [
    {
      "term": "一元一次方程式",
      "definition": "只含一個未知數且未知數最高次數為1的方程式。"
    },
    {
      "term": "係數",
      "definition": "未知數前相乘的數。"
    },
    {
      "term": "常數",
      "definition": "不含未知數的數。"
    },
    {
      "term": "孤立未知數",
      "definition": "把方程式整理成x=某數。"
    }
  ],
  "notation": [
    {
      "symbol": "ax+b=c",
      "meaning": "基本一元一次方程式，a≠0。"
    },
    {
      "symbol": "ax+b=cx+d",
      "meaning": "未知數可能出現在等式兩邊。"
    }
  ],
  "conceptNarrative": [
    "解一元一次方程式的目標是找出代入後使左右兩邊相等的未知數值。每一步都以等量公理產生等價方程式，而不是把項目無理由搬動。",
    "只有一個加減常數時，用相反運算消去；未知數帶有非零係數時，再把兩邊同除以該係數。完成後應看到 x 單獨等於一個確定數。",
    "未知數出現在兩邊時，可先把未知數項集中到一側，再把常數集中到另一側。選擇能讓係數較簡單的方向，可降低負號與算術錯誤。",
    "小數、負數或情境題仍遵循同一程序。答案可以是負數、分數或小數，不能為了配合預期而改值；代回原方程式是最後的必要檢查。"
  ],
  "formalDefinitions": [
    {
      "name": "方程式的解",
      "statement": "代入後使左右兩邊相等的數。"
    },
    {
      "name": "唯一解情況",
      "statement": "整理後若ax=b且a≠0，則x=b/a。"
    }
  ],
  "formulas": [
    {
      "formula": "ax+b=c ⇒ x=(c-b)/a",
      "conditions": [
        "a≠0"
      ],
      "meaning": "兩步方程式的結果。"
    },
    {
      "formula": "ax+b=cx+d ⇒ (a-c)x=d-b",
      "conditions": [
        "a≠c時有唯一解"
      ],
      "meaning": "兩邊含未知數的整理。"
    }
  ],
  "nonApplicableCases": [
    "若整理後未知數係數為0，要另判斷無解或無限多解；本節主要處理唯一解。",
    "不能把小數係數任意四捨五入。",
    "未知數若代表情境量，求解後還需檢查範圍。",
    "未化簡兩邊前直接移項容易漏項。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先化簡等式左右兩邊，標出所有未知數項與常數項。",
      "check": "括號已正確展開，同類項已在各自一邊合併。"
    },
    {
      "step": 2,
      "instruction": "用兩邊同加減，把未知數項集中在選定的一側。",
      "check": "每個移動都能還原成完整等量操作，沒有漏項。"
    },
    {
      "step": 3,
      "instruction": "再用兩邊同加減，把常數項集中到另一側。",
      "check": "負常數與負號都連同原項一起處理。"
    },
    {
      "step": 4,
      "instruction": "兩邊同除以未知數的非零係數，得到 x=數。",
      "check": "中間值不是最終答案，完整係數含正負號。"
    },
    {
      "step": 5,
      "instruction": "將解代回原方程式左右兩邊重新計算。",
      "check": "左右結果完全相同，情境答案附有正確單位。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u03-s004-example-a",
      "prompt": "解方程式 x-14=9。",
      "solutionSteps": [
        "兩邊同加 14。",
        "得到 x=23，代回二十三減十四為九。"
      ],
      "answer": "x=23。",
      "why": "左邊減十四要用加十四抵消，右邊九也同步加十四得到二十三。代回後原式成立，顯示不是把九再減十四。"
    },
    {
      "exampleId": "u03-s004-example-b",
      "prompt": "解方程式 -6x=42。",
      "solutionSteps": [
        "兩邊同除以 -6。",
        "求得 x=-7，代回乘積為四十二。"
      ],
      "answer": "x=-7。",
      "why": "未知數完整係數是負六，必須同除以負六；正四十二除以負六得負七。代回負六乘負七為正四十二，符號合理。"
    },
    {
      "exampleId": "u03-s004-example-c",
      "prompt": "解方程式 8x+3=5x+24。",
      "solutionSteps": [
        "兩邊同減 5x，再同減 3，得到 3x=21。",
        "兩邊同除以 3，得到 x=7。"
      ],
      "answer": "x=7。",
      "why": "先集中未知數項可得三 x 加三等於二十四，再消去常數三。最後除以三得到七，代回左右都為五十九。"
    },
    {
      "exampleId": "u03-s004-example-d",
      "prompt": "解方程式 0.4x-1.2=2。",
      "solutionSteps": [
        "兩邊同加 1.2，得到 0.4x=3.2。",
        "兩邊同除以 0.4，得到 x=8。"
      ],
      "answer": "x=8。",
      "why": "小數方程式可直接依等量公理精確運算，三點二除以零點四等於八。也可兩邊同乘十成整數式，答案保持相同。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "移項後符號保持不變。",
      "why": "沒有實際使用原運算的逆運算。",
      "correction": "逐步寫成兩邊同加或同減。"
    },
    {
      "mistake": "把中間的 3x=15 當成 x=15。",
      "why": "未知數尚未除去係數三。",
      "correction": "確認最後形式必須是 x 單獨。"
    },
    {
      "mistake": "除負係數時漏掉負號。",
      "why": "只使用係數的絕對值計算。",
      "correction": "把正負號視為完整係數的一部分。"
    },
    {
      "mistake": "未知數兩邊都有時只移其中一項。",
      "why": "沒有先完整標出同類項。",
      "correction": "一次集中一類項並同步化簡兩邊。"
    },
    {
      "mistake": "處理小數時只移一邊小數點。",
      "why": "左右放大倍數不同會破壞等式。",
      "correction": "若放大就讓方程式兩邊同乘相同倍數。"
    },
    {
      "mistake": "求得答案後省略代回。",
      "why": "符號與算術錯誤因而無法被發現。",
      "correction": "回到原式分別計算左右值並比較。"
    }
  ],
  "selfCheck": [
    "左右兩邊是否先化簡？",
    "未知數項與常數項是否分開？",
    "最後是否除完整係數？",
    "小數是否精確處理？",
    "代回後左右是否相等？"
  ],
  "summary": [
    "連續使用等量公理。",
    "先整理再孤立未知數。",
    "負數與小數解都可接受。",
    "驗算是最後必要步驟。"
  ],
  "connections": {
    "previous": "延續等量公理並使用一元一次式化簡。",
    "next": [
      "含括號方程式需先展開。",
      "含分母方程式可先用最小公倍數消分母。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u03-s004-v001",
      "u03-s004-v002",
      "u03-s004-v003",
      "u03-s004-v004",
      "u03-s004-v005",
      "u03-s004-v006",
      "u03-s004-v007",
      "u03-s004-v008",
      "u03-s004-v009",
      "u03-s004-v010",
      "u03-s004-v011",
      "u03-s004-v012"
    ],
    "constructedResponseIds": [
      "u03-s004-cr001",
      "u03-s004-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四例獨立代回：21-13=8、-5(-7)=35、7(5)+4=3(5)+24=39、0.6(6)-1.5=2.1；確認每個解唯一且無四捨五入。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "3b7fae1f9827e321fdb2d95cf22b8fb9b354d08b6488eaf58873c365c9722e94",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "legacyContentDisposition": "replace-old-lecture-at-final-integration"
};

export const QUESTIONS = [
  {
    "questionId": "u03-s004-v001",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-basic-solving",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解方程式 x＋9＝21。",
    "choices": [
      "12",
      "10",
      "20",
      "30"
    ],
    "answerIndex": 0,
    "explanation": "方程式 x+9=21 中，要消去左邊的加九，應在兩邊同減九。化簡得 x=21-9=12；把十二代回，12+9=21，左右相等，因此解為十二。解題與驗算互相支持。",
    "steps": [
      "在等式兩邊同減 9。",
      "化簡得到 x=21-9=12。",
      "代回驗算 12+9=21。"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": true,
        "reason": "兩邊同減9，x=21-9=12。 因此此選項符合題目。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "把21-9誤算成10。"
      },
      {
        "choice": "20",
        "truth": false,
        "reason": "把9移到右邊後相加。"
      },
      {
        "choice": "30",
        "truth": false,
        "reason": "把21與9相加。"
      }
    ],
    "commonMistake": "移項時仍把九加到二十一，沒有使用加九的逆運算減九。",
    "concept": "以逆運算孤立未知數。",
    "tags": [
      "代數",
      "一元一次方程式基本解法",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-balance-property"
    ],
    "authoringIntent": "解最基本加法型方程式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "09bf3a3687448c65f99b622ce2f198e85283478b4b3e8d5d4d5d21bb8a189750",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s004-v002",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-basic-solving",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解方程式 x－7＝－3。",
    "choices": [
      "-10",
      "4",
      "-4",
      "10"
    ],
    "answerIndex": 1,
    "explanation": "由 x-7=-3，要抵消減七就在等式兩邊同加七。右邊 -3+7=4，所以 x=4；代回原式可得 4-7=-3，證明正數四才是解。相反運算的方向因而正確，方向無誤。",
    "steps": [
      "等式兩邊同加 7。",
      "計算 -3+7=4，得到 x=4。",
      "代回檢查 4-7=-3。"
    ],
    "optionAnalysis": [
      {
        "choice": "-10",
        "truth": false,
        "reason": "把-3-7算成-10。"
      },
      {
        "choice": "4",
        "truth": true,
        "reason": "兩邊同加7，x=-3+7=4。 因此此選項符合題目。"
      },
      {
        "choice": "-4",
        "truth": false,
        "reason": "負數加正數方向判斷錯。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "把7移項後仍減。"
      }
    ],
    "commonMistake": "看到右邊是負三便先判答案為負，忽略加七後會跨過零。",
    "concept": "消去減7要加7。",
    "tags": [
      "代數",
      "一元一次方程式基本解法",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-balance-property"
    ],
    "authoringIntent": "處理含負數常數的減法型方程式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0fe99c0a47516145689b3158fdca716c871a16ee08c66ba366e23ee988de6ded",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s004-v003",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-basic-solving",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解方程式 5x＝45。",
    "choices": [
      "5",
      "40",
      "9",
      "225"
    ],
    "answerIndex": 2,
    "explanation": "5x=45 中的五是乘法係數，兩邊同除以五即可讓 x 單獨。45÷5=9，所以 x=9；驗算 5×9=45，確定不是把四十五減五或乘五。完整係數必須一次消去。",
    "steps": [
      "辨認未知數係數為 5。",
      "等式兩邊同除以 5，得到 x=45÷5。",
      "計算 x=9，並驗算 5×9=45。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "把係數5當成解。"
      },
      {
        "choice": "40",
        "truth": false,
        "reason": "將45減5。"
      },
      {
        "choice": "9",
        "truth": true,
        "reason": "兩邊同除以5，x=45÷5=9。 因此此選項符合題目。"
      },
      {
        "choice": "225",
        "truth": false,
        "reason": "把45乘5。"
      }
    ],
    "commonMistake": "把係數五視為加項而計算四十五減五，沒有用除法消去乘法係數。",
    "concept": "係數非零時兩邊同除。",
    "tags": [
      "代數",
      "一元一次方程式基本解法",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-balance-property"
    ],
    "authoringIntent": "解乘法型方程式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "190f506e37435c5107d8ed7bcda8b2c250d4d3d77f0597064b78cd76777aeb4b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s004-v004",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-basic-solving",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解方程式－4x＝20。",
    "choices": [
      "5",
      "-16",
      "24",
      "-5"
    ],
    "answerIndex": 3,
    "explanation": "未知數的係數是負四，因此兩邊要同除以 -4，而不是只除以正四。正二十除以負四得 -5，所以 x=-5；代回 (-4)×(-5)=20，符號與數值都成立。",
    "steps": [
      "確認 x 的完整係數是 -4。",
      "等式兩邊同除以 -4。",
      "得到 x=-5，代回乘積為二十。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "漏掉負號。"
      },
      {
        "choice": "-16",
        "truth": false,
        "reason": "把20-4誤當解。"
      },
      {
        "choice": "24",
        "truth": false,
        "reason": "把20+4誤當解。"
      },
      {
        "choice": "-5",
        "truth": true,
        "reason": "兩邊同除以-4，x=20÷(-4)=-5。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "只看係數的絕對值四，除法時漏掉負號而誤答正五。",
    "concept": "異號相除結果為負。",
    "tags": [
      "代數",
      "一元一次方程式基本解法",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-balance-property"
    ],
    "authoringIntent": "處理負係數的一步方程式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0dc25744362348a950fa0c3e030815d78e48c3269a45f4e2c4c1e8e2085ba35d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s004-v005",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-basic-solving",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解方程式 3x＋2＝17。",
    "choices": [
      "3",
      "5",
      "15",
      "19"
    ],
    "answerIndex": 1,
    "explanation": "先在 3x+2=17 兩邊同減二，得到 3x=15；再同除以三，求得 x=5。代回 3×5+2=17，左右相等；中間值十五不是最後答案。兩次逆運算缺一不可，答案唯一。",
    "steps": [
      "等式兩邊同減 2，得到 3x=15。",
      "兩邊同除以 3，得到 x=5。",
      "代回驗算 3×5+2=17。"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": false,
        "reason": "把未知數前的係數3直接當成解，未執行兩邊同減2及同除3。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "先兩邊減2得3x=15，再除3得x=5。 因此此選項符合題目。"
      },
      {
        "choice": "15",
        "truth": false,
        "reason": "把17-2誤當最後答案。"
      },
      {
        "choice": "19",
        "truth": false,
        "reason": "把2移項後相加。"
      }
    ],
    "commonMistake": "只做到 3x=15 就停止，沒有再除以未知數的係數三。",
    "concept": "先消常數再消係數。",
    "tags": [
      "代數",
      "一元一次方程式基本解法",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-balance-property"
    ],
    "authoringIntent": "完成兩步驟方程式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "54fff6e64b9aa64398419be889d2316dbece7832e606786c3dfd784f3791bae1",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s004-v006",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-basic-solving",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解方程式 7－2x＝19。",
    "choices": [
      "6",
      "-13",
      "-6",
      "13"
    ],
    "answerIndex": 2,
    "explanation": "由 7-2x=19，先在兩邊同減七，得到 -2x=12。再同除以 -2，可得 x=-6；代回 7-2×(-6)=7+12=19，負號不能遺漏。先整理常數再除負係數，可清楚控制結果符號，代回相符。",
    "steps": [
      "等式兩邊同減 7，整理成 -2x=12。",
      "兩邊同除以 -2，得到 x=-6。",
      "代回算得 7-2×(-6)=19。"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": false,
        "reason": "除以-2時漏負號。"
      },
      {
        "choice": "-13",
        "truth": false,
        "reason": "把19-7後再減1。"
      },
      {
        "choice": "-6",
        "truth": true,
        "reason": "兩邊減7得-2x=12，再除-2得x=-6。 因此此選項符合題目。"
      },
      {
        "choice": "13",
        "truth": false,
        "reason": "把常數相加。"
      }
    ],
    "commonMistake": "把 7-2x 誤讀成 (7-2)x，改變原式的運算結構。",
    "concept": "整理後再除負係數。",
    "tags": [
      "代數",
      "一元一次方程式基本解法",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-balance-property"
    ],
    "authoringIntent": "未知數係數為負且常數在前。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "81135ac08e3fdfcea7cd627aea62d50ff494c2ec3a6e8745be223701d80a9424",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s004-v007",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-basic-solving",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解方程式 4x－9＝2x＋7。",
    "choices": [
      "-8",
      "1",
      "16",
      "8"
    ],
    "answerIndex": 3,
    "explanation": "先在兩邊同減 2x，得到 2x-9=7；再同加九，得到 2x=16。最後同除以二，求得 x=8；代回左右都等於二十三，確認解正確。三步等量操作依序完整。",
    "steps": [
      "兩邊同減 2x，得到 2x-9=7。",
      "兩邊同加 9，得到 2x=16。",
      "兩邊同除以 2，求得 x=8 並代回。"
    ],
    "optionAnalysis": [
      {
        "choice": "-8",
        "truth": false,
        "reason": "移項時把答案符號反轉。"
      },
      {
        "choice": "1",
        "truth": false,
        "reason": "只比較係數差。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "算到2x=16卻忘記除2。"
      },
      {
        "choice": "8",
        "truth": true,
        "reason": "兩邊減2x得2x-9=7，再加9得2x=16，所以x=8。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "算到 2x=16 就把十六當成解，忘記最後還要除以係數二。",
    "concept": "同類項集中後再求解。",
    "tags": [
      "代數",
      "一元一次方程式基本解法",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-balance-property"
    ],
    "authoringIntent": "解未知數出現在等式兩邊的方程式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a85dd7dfc623a816693af5c8b7abd935037026df0e44f28be7e9defc5accdc12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s004-v008",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-basic-solving",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解方程式 6x＋5＝3x－10。",
    "choices": [
      "-5",
      "5",
      "-15",
      "15"
    ],
    "answerIndex": 0,
    "explanation": "在 6x+5=3x-10 兩邊同減 3x，得到 3x+5=-10；再同減五，得到 3x=-15。最後同除以三，x=-5；代回兩邊都為負二十五。負數解與原式兩側的值一致，不能任意改正。",
    "steps": [
      "兩邊同減 3x，得到 3x+5=-10。",
      "兩邊同減 5，得到 3x=-15。",
      "兩邊同除以 3，求得 x=-5 並驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "-5",
        "truth": true,
        "reason": "兩邊減3x得3x+5=-10，再減5得3x=-15，所以x=-5。 因此此選項符合題目。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "最後忽略負號。"
      },
      {
        "choice": "-15",
        "truth": false,
        "reason": "算到3x=-15後把中間值-15誤當成x，沒有再除以係數3。"
      },
      {
        "choice": "15",
        "truth": false,
        "reason": "將-10與5相加成15。"
      }
    ],
    "commonMistake": "整理負常數時漏掉負號，或把中間值負十五直接當成 x。",
    "concept": "集中未知數與常數。",
    "tags": [
      "代數",
      "一元一次方程式基本解法",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-balance-property"
    ],
    "authoringIntent": "整理兩邊含未知數與負常數的方程式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "82e8beba03b2018b08ad66acd7544441d8531d24eb809f2a428618beebe79c69",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s004-v009",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-basic-solving",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解方程式 0.3x＋1.2＝3。",
    "choices": [
      "4",
      "5",
      "6",
      "60"
    ],
    "answerIndex": 2,
    "explanation": "先在兩邊同減 1.2，得到 0.3x=1.8；再同除以 0.3，求得 x=6。也可整式同乘十後計算 3x=18，結果相同，不能只移動一邊的小數點。兩種精確算法互相驗證。",
    "steps": [
      "兩邊同減 1.2，得到 0.3x=1.8。",
      "兩邊同除以 0.3，得到 x=6。",
      "代回檢查 0.3×6+1.2=3。"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": false,
        "reason": "把1.2÷0.3當成答案。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "小數除法誤差。"
      },
      {
        "choice": "6",
        "truth": true,
        "reason": "兩邊減1.2得0.3x=1.8，再除0.3得x=6。 因此此選項符合題目。"
      },
      {
        "choice": "60",
        "truth": false,
        "reason": "小數點移位只移一邊。"
      }
    ],
    "commonMistake": "處理小數時只把一邊放大十倍，破壞原本左右相等的關係。",
    "concept": "可同乘10或直接精確計算。",
    "tags": [
      "代數",
      "一元一次方程式基本解法",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-balance-property"
    ],
    "authoringIntent": "解含有限小數係數的方程式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "60fcdcc0addf5bf74c4db82d2433dc9e749d26ca31de88c4773cee158f9cbc8a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s004-v010",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-basic-solving",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "四張同價電影票另加 50 元手續費，共付 530 元。每張票多少元？",
    "choices": [
      "95",
      "132.5",
      "145",
      "120"
    ],
    "answerIndex": 3,
    "explanation": "設每張票 x 元，四張票加固定手續費可列 4x+50=530。先扣除一次手續費，得 4x=480，再除以四，x=120 元；固定費不應平均成第五張票。代回總價也正好成立。",
    "steps": [
      "設單張票價為 x，列 4x+50=530。",
      "兩邊同減 50，得到 4x=480。",
      "兩邊同除以 4，求得每張 120 元。"
    ],
    "optionAnalysis": [
      {
        "choice": "95",
        "truth": false,
        "reason": "把530-50後除5。"
      },
      {
        "choice": "132.5",
        "truth": false,
        "reason": "將手續費平均前直接530÷4。"
      },
      {
        "choice": "145",
        "truth": false,
        "reason": "只扣除一次票價。"
      },
      {
        "choice": "120",
        "truth": true,
        "reason": "設每張x元，4x+50=530；4x=480，所以x=120。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "把五十元固定手續費當成另一張票，錯把四百八十除以五。",
    "concept": "總價=單價×張數+固定費。",
    "tags": [
      "代數",
      "一元一次方程式基本解法",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-balance-property"
    ],
    "authoringIntent": "由總價與固定費列一步一元方程式。",
    "literacyContextNecessity": "票數與固定手續費決定方程式4x+50=530，刪除交易結構就無法判斷係數與加項。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "02b8b38da843529a51b1770362b52b8cbef85290de01bde62c25d9ce6b68a2d2",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s004-v011",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-basic-solving",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "小芸原有 x 元，買書花 240 元後還有 680 元。她原有多少元？",
    "choices": [
      "920",
      "440",
      "680",
      "960"
    ],
    "answerIndex": 0,
    "explanation": "原有金額減去買書支出等於剩餘金額，可列 x-240=680。兩邊同加二百四十，得 x=920 元；用剩餘金額再減支出是在計算另一個量，方向不符題意。",
    "steps": [
      "依原有減支出等於剩餘，列 x-240=680。",
      "等式兩邊同加 240。",
      "求得 x=920 元，並驗算 920-240=680。"
    ],
    "optionAnalysis": [
      {
        "choice": "920",
        "truth": true,
        "reason": "x-240=680，兩邊加240得x=920。 因此此選項符合題目。"
      },
      {
        "choice": "440",
        "truth": false,
        "reason": "用680-240。"
      },
      {
        "choice": "680",
        "truth": false,
        "reason": "把剩餘金額當原有金額。"
      },
      {
        "choice": "960",
        "truth": false,
        "reason": "把240錯加成280。"
      }
    ],
    "commonMistake": "從剩餘六百八十再扣二百四十，混淆回推原有量與計算支出後餘額。",
    "concept": "原有量-支出=剩餘量。",
    "tags": [
      "代數",
      "一元一次方程式基本解法",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-balance-property"
    ],
    "authoringIntent": "由剩餘量回推原有量。",
    "literacyContextNecessity": "原有、支出與剩餘的方向關係決定x-240=680，情境不可改成任意加減。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "9e60c5fc72e61463b99925872cd4fcb8e77c4f70954e8c3b5151c9821f5895cf",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s004-v012",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-basic-solving",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某地目前氣溫為 x°C，夜間下降 7°C 後為－3°C。目前氣溫是多少？",
    "choices": [
      "-10",
      "4",
      "-4",
      "10"
    ],
    "answerIndex": 1,
    "explanation": "目前氣溫 x°C 下降七度後為 -3°C，因此列 x-7=-3。兩邊同加七，得到 x=4°C；由四度下降七度確實是負三度，情境方向與驗算一致。溫度單位亦保持一致。",
    "steps": [
      "依下降七度列出 x-7=-3。",
      "等式兩邊同加 7，得到 x=4。",
      "驗算 4-7=-3，附回攝氏度。"
    ],
    "optionAnalysis": [
      {
        "choice": "-10",
        "truth": false,
        "reason": "把下降後再減7。"
      },
      {
        "choice": "4",
        "truth": true,
        "reason": "x-7=-3，兩邊加7得x=4。 因此此選項符合題目。"
      },
      {
        "choice": "-4",
        "truth": false,
        "reason": "只看-3判成負4。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "將-3與7相加時符號錯。"
      }
    ],
    "commonMistake": "看到下降七度就從負三再減七，算的是繼續下降而不是回推目前氣溫。",
    "concept": "下降代表從原值減去。",
    "tags": [
      "代數",
      "一元一次方程式基本解法",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-balance-property"
    ],
    "authoringIntent": "以有向量變化列方程式。",
    "literacyContextNecessity": "氣溫下降與最後溫度決定x-7=-3，正負方向是求解的必要情境資訊。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f3ee4b6c153974021ffea24b089d1ae353adfc3d38320da57995f0dbae09691f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u03-s004-cr001",
    "unitId": "u03",
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-basic-solving",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "解方程式 7x－11＝3x＋25，並將答案代回原式。",
    "requiredWork": [
      "集中未知數項。",
      "集中常數項。",
      "代回比較左右。"
    ],
    "fullCreditSolution": [
      "由 7x-11=3x+25，兩邊同減 3x，得到 4x-11=25。",
      "兩邊同加十一得 4x=36，再同除以四，求得 x=9。",
      "代回驗算：左邊 7×9-11=52，右邊 3×9+25=52，因此九是方程式的解，兩側同值也排除移項符號錯誤。"
    ],
    "alternativeSolutions": [
      "可先兩邊加11再減3x。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "解得9並完整驗算左右皆52。"
      },
      {
        "score": 2,
        "criteria": "解法正確但驗算缺失，或一處算術錯。"
      },
      {
        "score": 1,
        "criteria": "能整理成4x=36。"
      },
      {
        "score": 0,
        "criteria": "沒有合法等量步驟。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "移動 3x 時只改右邊，沒有在等式兩邊同減同一項。",
      "算到 4x=36 就把三十六當成解，漏掉最後同除以四。",
      "驗算只代入方程式一邊，沒有比較左右兩邊是否同為五十二。"
    ],
    "independentReview": {
      "derivedResult": "x=9",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "f99ac5d30cd212227e3cfd28298da3d8b96767fa6d07315e11e35972ef4bf6ba",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s004-cr002",
    "unitId": "u03",
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-basic-solving",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某數的 4 倍再減 13 等於該數的 2 倍加 9。求此數並說明列式。",
    "requiredWork": [
      "設未知數。",
      "把兩種敘述放在等號兩邊。",
      "解並驗算。"
    ],
    "fullCreditSolution": [
      "設此數為 x；某數的四倍再減十三寫成 4x-13，該數的二倍加九寫成 2x+9，因此列 4x-13=2x+9。",
      "兩邊同減 2x 再同加十三，得到 2x=22；兩邊同除以二，求得 x=11。",
      "代回檢查，四倍十一減十三為三十一，二倍十一加九也為三十一，列式與答案一致。"
    ],
    "alternativeSolutions": [
      "可用兩邊差額：兩倍的數補足22。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "列式、解答與驗算完整。"
      },
      {
        "score": 2,
        "criteria": "列式正確但一處計算錯，或答案正確未驗算。"
      },
      {
        "score": 1,
        "criteria": "能寫出4x-13=2x+9。"
      },
      {
        "score": 0,
        "criteria": "列式無法反映兩個相等敘述。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "把某數的四倍再減十三誤寫成 4(x-13)，讓十三也被乘四。",
      "看到兩句敘述就相加，沒有用等號表達兩個量彼此相等。",
      "整理 4x-2x 時漏掉一個 x，或把係數差算成六。"
    ],
    "independentReview": {
      "derivedResult": "11",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "625460e65a3268efd97a66d6a753052ccd9f78ac2005f079fa39cbebb65daa9e",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const DRAWING_SPECS = [];
