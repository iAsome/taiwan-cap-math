// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u02-s008-lecture-r1",
  "unitId": "u02",
  "topicId": "u02-fraction-ops",
  "skillId": "fraction-compare",
  "title": "分數大小比較：在同分母和同分子與負數和近似值之間建立一致順序",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能比較同分母與同分子正分數。",
    "能用通分或交叉相乘比較一般分數。",
    "能比較負分數並在數線上定位。",
    "能排序多個接近的分數。"
  ],
  "prerequisites": [
    {
      "skillId": "fraction-lcm-application",
      "requiredLevel": "能求公倍數，作為通分共同分母。"
    }
  ],
  "glossary": [
    {
      "term": "同分母",
      "definition": "兩分數分母相同。"
    },
    {
      "term": "同分子",
      "definition": "兩分數分子相同。"
    },
    {
      "term": "通分",
      "definition": "改寫成相同分母的等值分數。"
    },
    {
      "term": "交叉相乘",
      "definition": "對正分母分數比較ad與bc。"
    }
  ],
  "notation": [
    {
      "symbol": "a/b ? c/d",
      "meaning": "在b、d為正時，可比較ad與bc。"
    }
  ],
  "conceptNarrative": [
    "同分母時，每一份大小相同，分子較大者取的份數較多。",
    "同分子正分數中，分母越大每份越小，因此整體越小。",
    "一般分數可通分或交叉相乘。",
    "兩個負數比較時，數線越右越大；絕對值較大的負數反而較小。"
  ],
  "formalDefinitions": [
    {
      "name": "等值分數",
      "statement": "分子分母同乘或同除非零整數，值不變。"
    },
    {
      "name": "分數順序",
      "statement": "依其在數線上的位置由左到右遞增。"
    }
  ],
  "formulas": [
    {
      "formula": "a/b<c/d ⇔ ad<bc",
      "conditions": [
        "b>0、d>0"
      ],
      "meaning": "交叉相乘比較。"
    }
  ],
  "nonApplicableCases": [
    "分母有負號時先把負號移到分子。",
    "近似小數若截斷太少位可能造成誤判。",
    "圖形面積不同不能只看塗色格數。",
    "同分子規則對負分數要重新考慮符號。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先整理符號與約分。",
      "check": "分母是否為正？"
    },
    {
      "step": 2,
      "instruction": "看是否同分母或同分子。",
      "check": "能否使用快速規則？"
    },
    {
      "step": 3,
      "instruction": "否則通分或交叉相乘。",
      "check": "共同分母是否正確？"
    },
    {
      "step": 4,
      "instruction": "負數時用數線檢查方向。",
      "check": "越右是否越大？"
    },
    {
      "step": 5,
      "instruction": "多個分數使用同一比較標準。",
      "check": "排序是否自洽？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "比較5/12與7/12。",
      "solutionSteps": [
        "同分母。",
        "5<7。"
      ],
      "answer": "5/12<7/12。"
    },
    {
      "exampleId": "L2",
      "prompt": "比較4/9與4/7。",
      "solutionSteps": [
        "同分子正分數。",
        "7<9，所以4/7較大。"
      ],
      "answer": "4/9<4/7。"
    },
    {
      "exampleId": "L3",
      "prompt": "比較-5/6與-4/5。",
      "solutionSteps": [
        "通分為-25/30、-24/30。",
        "-25/30較小。"
      ],
      "answer": "-5/6<-4/5。"
    },
    {
      "exampleId": "L4",
      "prompt": "排序7/15、5/12、9/20。",
      "solutionSteps": [
        "通分60得28、25、27。",
        "依分子排序。"
      ],
      "answer": "5/12<9/20<7/15。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "分母大就判分數大。",
      "why": "忽略每份變小。",
      "correction": "分子相同正分數中分母小者大。"
    },
    {
      "mistake": "交叉相乘後比較錯配。",
      "why": "未固定a/b與c/d位置。",
      "correction": "比較ad與bc並標清來源。"
    },
    {
      "mistake": "負分數沿用絕對值順序。",
      "why": "忘記數線方向。",
      "correction": "負數絕對值大者較小。"
    },
    {
      "mistake": "化小數只看一位。",
      "why": "近似精度不足。",
      "correction": "使用交叉相乘作精確比較。"
    },
    {
      "mistake": "排序每一對使用不同錯誤基準。",
      "why": "結果不具傳遞性。",
      "correction": "統一通分。"
    },
    {
      "mistake": "圖形不同大小卻比較塗色格數。",
      "why": "單位整體不同。",
      "correction": "先確認整體等大。"
    }
  ],
  "selfCheck": [
    "分母是否都為正？",
    "有快速同分母或同分子法嗎？",
    "交叉積是否配對正確？",
    "負數方向是否反轉？",
    "排序是否可由數線驗證？"
  ],
  "summary": [
    "同分母比分子。",
    "同分子正分數分母小者大。",
    "一般分數可通分或交叉相乘。",
    "負分數要依數線位置。"
  ],
  "connections": {
    "previous": "先備技能為 fraction-lcm-application，需能完成其基本判斷與計算。",
    "next": [
      "分數加減需要通分。",
      "帶分數與百分率都會使用大小比較。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u02-s008-v001",
      "u02-s008-v002",
      "u02-s008-v003",
      "u02-s008-v004",
      "u02-s008-v005",
      "u02-s008-v006",
      "u02-s008-v007",
      "u02-s008-v008",
      "u02-s008-v009",
      "u02-s008-v010",
      "u02-s008-v011",
      "u02-s008-v012"
    ],
    "constructedResponseIds": [
      "u02-s008-cr001",
      "u02-s008-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "所有例題以通分與交叉相乘雙重驗算；負分數另以數線順序核對，17/24、13/18、29/40與1/18距離均重新計算。",
    "reviewVersion": "human-lecture-review-r3.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "ab42277758401363d7c11c6280845fc549566888de8296dbfd1f023ae98d1dda"
};

export const QUESTIONS = [
  {
    "questionId": "u02-s008-v001",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-compare",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "比較 3/5 與 4/5，哪一個關係正確？",
    "choices": [
      "3/5＜4/5",
      "3/5＞4/5",
      "3/5＝4/5",
      "無法比較"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：分母相同時比較分子；3＜4，所以3/5＜4/5。所以答案是「3/5＜4/5」。",
    "steps": [
      "分母相同時比較分子",
      "3＜4，所以3/5＜4/5"
    ],
    "optionAnalysis": [
      {
        "choice": "3/5＜4/5",
        "truth": true,
        "reason": "同分母且3<4，正確。"
      },
      {
        "choice": "3/5＞4/5",
        "truth": false,
        "reason": "不等號方向相反。"
      },
      {
        "choice": "3/5＝4/5",
        "truth": false,
        "reason": "分子不同，不相等。"
      },
      {
        "choice": "無法比較",
        "truth": false,
        "reason": "同分母可直接比較。"
      }
    ],
    "commonMistake": "把分母大的概念誤套到同分母題。",
    "concept": "同分母分數由分子大小決定。",
    "tags": [
      "數與量",
      "分數大小比較",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-application"
    ],
    "authoringIntent": "比較同分母正分數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "58353174ad8b268e2f2aa48870cabae23df625da7a86b7a4646d0a4fee418b01"
  },
  {
    "questionId": "u02-s008-v002",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-compare",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "比較 5/8 與 5/6，哪一個較大？",
    "choices": [
      "5/8",
      "5/6",
      "一樣大",
      "資訊不足"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：分子相同且為正數時，分母較小的分數較大；6<8，所以5/6較大。所以答案是「5/6」。",
    "steps": [
      "分子相同且為正數時，分母較小的分數較大",
      "6<8，所以5/6較大"
    ],
    "optionAnalysis": [
      {
        "choice": "5/8",
        "truth": false,
        "reason": "分母8較大，單位分數較小。"
      },
      {
        "choice": "5/6",
        "truth": true,
        "reason": "5/6較大。"
      },
      {
        "choice": "一樣大",
        "truth": false,
        "reason": "分母不同，不相等。"
      },
      {
        "choice": "資訊不足",
        "truth": false,
        "reason": "可用同分子法比較。"
      }
    ],
    "commonMistake": "看到分母8較大就判5/8較大。",
    "concept": "同分子正分數的分母越小，值越大。",
    "tags": [
      "數與量",
      "分數大小比較",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-application"
    ],
    "authoringIntent": "比較同分子分數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "00d652cbcad0036115345d6bdbe351b56246d9741b5f6d2a18f316f46f8361ba"
  },
  {
    "questionId": "u02-s008-v003",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-compare",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個分數最大？",
    "choices": [
      "1/2",
      "2/3",
      "4/5",
      "3/4"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：1/2=0.5，2/3約0.667，4/5=0.8，3/4=0.75；最大為4/5。所以答案是「4/5」。",
    "steps": [
      "1/2=0.5，2/3約0.667，4/5=0.8，3/4=0.75",
      "最大為4/5"
    ],
    "optionAnalysis": [
      {
        "choice": "1/2",
        "truth": false,
        "reason": "1/2最小。"
      },
      {
        "choice": "2/3",
        "truth": false,
        "reason": "2/3小於3/4。"
      },
      {
        "choice": "4/5",
        "truth": true,
        "reason": "4/5=0.8最大。"
      },
      {
        "choice": "3/4",
        "truth": false,
        "reason": "3/4=0.75。"
      }
    ],
    "commonMistake": "只比較分子或分母。",
    "concept": "不同分數可通分、交叉相乘或化小數比較。",
    "tags": [
      "數與量",
      "分數大小比較",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-application"
    ],
    "authoringIntent": "比較多個正分數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f6defee5b877243cf7f81c54fba0efba82a018be370258205dbdb27dad6e3650"
  },
  {
    "questionId": "u02-s008-v004",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-compare",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "比較 -2/3 與 -3/5，何者正確？",
    "choices": [
      "-2/3＞-3/5",
      "兩者相等",
      "無法比較",
      "-2/3＜-3/5"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：交叉比較絕對值：2×5=10，3×3=9，所以2/3>3/5；負數絕對值較大者反而較小，因此-2/3<-3/5。所以答案是「-2/3＜-3/5」。",
    "steps": [
      "交叉比較絕對值：2×5=10，3×3=9，所以2/3>3/5",
      "負數絕對值較大者反而較小，因此-2/3<-3/5"
    ],
    "optionAnalysis": [
      {
        "choice": "-2/3＞-3/5",
        "truth": false,
        "reason": "忽略負號造成方向錯。"
      },
      {
        "choice": "兩者相等",
        "truth": false,
        "reason": "兩值不相等。"
      },
      {
        "choice": "無法比較",
        "truth": false,
        "reason": "分母皆正可比較。"
      },
      {
        "choice": "-2/3＜-3/5",
        "truth": true,
        "reason": "負數順序正確。"
      }
    ],
    "commonMistake": "先比較絕對值後忘記反轉負數大小。",
    "concept": "兩個負分數比較時，絕對值較大者較小。",
    "tags": [
      "數與量",
      "分數大小比較",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-application"
    ],
    "authoringIntent": "比較負分數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3e044d58aa0b3285e56c8cd5fe13a59a577a1caf3ffe73d66c8212d5fc606862"
  },
  {
    "questionId": "u02-s008-v005",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-compare",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "將 7/12、5/8、2/3 由小到大排列，何者正確？",
    "choices": [
      "7/12＜5/8＜2/3",
      "5/8＜7/12＜2/3",
      "7/12＜2/3＜5/8",
      "2/3＜5/8＜7/12"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：通分到24：14/24、15/24、16/24；因此7/12<5/8<2/3。所以答案是「7/12＜5/8＜2/3」。",
    "steps": [
      "通分到24：14/24、15/24、16/24",
      "因此7/12<5/8<2/3"
    ],
    "optionAnalysis": [
      {
        "choice": "7/12＜5/8＜2/3",
        "truth": true,
        "reason": "14<15<16，正確。"
      },
      {
        "choice": "5/8＜7/12＜2/3",
        "truth": false,
        "reason": "前兩項顛倒。"
      },
      {
        "choice": "7/12＜2/3＜5/8",
        "truth": false,
        "reason": "2/3與5/8顛倒。"
      },
      {
        "choice": "2/3＜5/8＜7/12",
        "truth": false,
        "reason": "順序完全相反。"
      }
    ],
    "commonMistake": "多個分數用不同基準比較，造成排序矛盾。",
    "concept": "統一分母後可一致排序。",
    "tags": [
      "數與量",
      "分數大小比較",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-application"
    ],
    "authoringIntent": "排序三個分數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "39a011b464c0aeb829b45e2c144256c744f98115f608e352cf96ed9167044b36"
  },
  {
    "questionId": "u02-s008-v006",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-compare",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 0＜a＜b，則下列哪個關係一定成立？",
    "choices": [
      "1/a＜1/b",
      "1/a＞1/b",
      "a/b＞1",
      "b/a＜1"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：正數取倒數後大小反轉；a<b，所以1/a>1/b。所以答案是「1/a＞1/b」。",
    "steps": [
      "正數取倒數後大小反轉",
      "a<b，所以1/a>1/b"
    ],
    "optionAnalysis": [
      {
        "choice": "1/a＜1/b",
        "truth": false,
        "reason": "倒數不維持原順序。"
      },
      {
        "choice": "1/a＞1/b",
        "truth": true,
        "reason": "1/a＞1/b，這個關係正確。"
      },
      {
        "choice": "a/b＞1",
        "truth": false,
        "reason": "a/b<1。"
      },
      {
        "choice": "b/a＜1",
        "truth": false,
        "reason": "b/a>1。"
      }
    ],
    "commonMistake": "以為取倒數不改變大小順序。",
    "concept": "正數倒數會反轉大小。",
    "tags": [
      "數與量",
      "分數大小比較",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-application"
    ],
    "authoringIntent": "用符號比較倒數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a3b133e2cb3add8ef0b4942e00e2b600c664c796729e74242f02bc1bbdcf5f7d"
  },
  {
    "questionId": "u02-s008-v007",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-compare",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "比較 17/23 與 22/29，哪個較大？",
    "choices": [
      "17/23",
      "一樣大",
      "22/29",
      "無法判斷"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：交叉相乘：17×29=493，22×23=506；506較大，所以22/29較大。所以答案是「22/29」。",
    "steps": [
      "交叉相乘：17×29=493，22×23=506",
      "506較大，所以22/29較大"
    ],
    "optionAnalysis": [
      {
        "choice": "17/23",
        "truth": false,
        "reason": "493<506，因此17/23較小。"
      },
      {
        "choice": "一樣大",
        "truth": false,
        "reason": "交叉積不同。"
      },
      {
        "choice": "22/29",
        "truth": true,
        "reason": "22/29較大。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "分母正，可比較。"
      }
    ],
    "commonMistake": "直接比較17與22或23與29。",
    "concept": "交叉相乘適用於正分母分數。",
    "tags": [
      "數與量",
      "分數大小比較",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-application"
    ],
    "authoringIntent": "比較不易通分的分數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4d87e40b6c5c7ba1678f4eb9a6b29cff1853d71a4b5a3b63ccc1c033ce069156"
  },
  {
    "questionId": "u02-s008-v008",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-compare",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "svg",
    "figureId": "fig-u02-s008-v008",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "數線上 A 位於 -3/4，B 位於 -2/3。哪一個敘述正確？",
    "choices": [
      "A 在 B 右邊",
      "A 與 B 重合",
      "A 在 B 左邊且距離 1/6",
      "A 在 B 左邊且距離 1/12"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：-3/4=-9/12，-2/3=-8/12；A較小，在左邊；距離|-9/12+8/12|=1/12。所以答案是「A 在 B 左邊且距離 1/12」。",
    "steps": [
      "-3/4=-9/12，-2/3=-8/12",
      "A較小，在左邊；距離|-9/12+8/12|=1/12"
    ],
    "optionAnalysis": [
      {
        "choice": "A 在 B 右邊",
        "truth": false,
        "reason": "A較小，不在右邊。"
      },
      {
        "choice": "A 與 B 重合",
        "truth": false,
        "reason": "坐標不同。"
      },
      {
        "choice": "A 在 B 左邊且距離 1/6",
        "truth": false,
        "reason": "位置對但距離錯。"
      },
      {
        "choice": "A 在 B 左邊且距離 1/12",
        "truth": true,
        "reason": "位置與距離都正確。"
      }
    ],
    "commonMistake": "把負數絕對值較大者放右邊。",
    "concept": "數線位置與距離需分別比較與相減。",
    "tags": [
      "數與量",
      "分數大小比較",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-application"
    ],
    "authoringIntent": "結合負分數位置和距離。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2caaf411047e9a9872cbd5f25c911155db67746b25bb8e7f276d4a67e855112b"
  },
  {
    "questionId": "u02-s008-v009",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-compare",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 x=5/7，y=7/10，z=9/13，則由大到小排列為何？",
    "choices": [
      "x＞y＞z",
      "y＞x＞z",
      "z＞y＞x",
      "y＞z＞x"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：x約0.7143，y=0.7，z約0.6923；所以x>y>z。所以答案是「x＞y＞z」。",
    "steps": [
      "x約0.7143，y=0.7，z約0.6923",
      "所以x>y>z"
    ],
    "optionAnalysis": [
      {
        "choice": "x＞y＞z",
        "truth": true,
        "reason": "三個近似值依序遞減。"
      },
      {
        "choice": "y＞x＞z",
        "truth": false,
        "reason": "把5/7與7/10顛倒。"
      },
      {
        "choice": "z＞y＞x",
        "truth": false,
        "reason": "z其實最小。"
      },
      {
        "choice": "y＞z＞x",
        "truth": false,
        "reason": "x不是最小。"
      }
    ],
    "commonMistake": "只看分子分母差值都為2或4就猜測。",
    "concept": "接近的分數可用交叉相乘逐對比較。",
    "tags": [
      "數與量",
      "分數大小比較",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-application"
    ],
    "authoringIntent": "排序相近分數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "eb7ecd5d4d983b6fe01ea00031620696331274df6ef6d80e6d77f50af70da841"
  },
  {
    "questionId": "u02-s008-v010",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-compare",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三條步道已完成的比例分別是甲 7/10、乙 5/8、丙 2/3。完成比例第二高的是哪一條？",
    "choices": [
      "甲",
      "丙",
      "乙",
      "甲與丙並列"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：甲=0.7，乙=0.625，丙約0.667；由高到低甲、丙、乙，所以第二高是丙。所以答案是「丙」。",
    "steps": [
      "甲=0.7，乙=0.625，丙約0.667",
      "由高到低甲、丙、乙，所以第二高是丙"
    ],
    "optionAnalysis": [
      {
        "choice": "甲",
        "truth": false,
        "reason": "甲最高，不是第二。"
      },
      {
        "choice": "丙",
        "truth": true,
        "reason": "丙第二高。"
      },
      {
        "choice": "乙",
        "truth": false,
        "reason": "乙的5/8=0.625，在三條步道中最低，不是第二高。"
      },
      {
        "choice": "甲與丙並列",
        "truth": false,
        "reason": "三者不相等。"
      }
    ],
    "commonMistake": "把工程總長也想像進來，混淆比例與實際長度。",
    "concept": "比較完成比例只需比較分數本身。",
    "tags": [
      "數與量",
      "分數大小比較",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-application"
    ],
    "authoringIntent": "在工程資料中排序比例。",
    "literacyContextNecessity": "三條步道的完成分數與『第二高』要求是判斷核心；若刪除情境資料就沒有比較物件。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c08079d45dd707817b186c3f08f1e0f66c3e6b980561a544c3f53016d458bd20"
  },
  {
    "questionId": "u02-s008-v011",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-compare",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "四位學生完成閱讀計畫的比例為：小安 3/4、小芸 7/9、小杰 4/5、小萱 5/6。誰完成比例最高？",
    "choices": [
      "小安",
      "小芸",
      "小萱",
      "小杰"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：3/4=.75，7/9約.778，4/5=.8，5/6約.833；最高為小萱。所以答案是「小萱」。",
    "steps": [
      "3/4=.75，7/9約.778，4/5=.8，5/6約.833",
      "最高為小萱"
    ],
    "optionAnalysis": [
      {
        "choice": "小安",
        "truth": false,
        "reason": "0.75不是最高。"
      },
      {
        "choice": "小芸",
        "truth": false,
        "reason": "約0.778不是最高。"
      },
      {
        "choice": "小萱",
        "truth": true,
        "reason": "5/6約0.833最高。"
      },
      {
        "choice": "小杰",
        "truth": false,
        "reason": "4/5=0.8低於5/6。"
      }
    ],
    "commonMistake": "只看分子5最大就可能偶然猜對，未驗證。",
    "concept": "比例比較需把所有分數置於共同尺度。",
    "tags": [
      "數與量",
      "分數大小比較",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-application"
    ],
    "authoringIntent": "比較個人完成比例。",
    "literacyContextNecessity": "人物與四個完成比例構成排行資料，最高者必須經過完整比較。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "5d2a52dae3e8dd63f5b9a5193757280f067c522672109f20212790c701426c6d"
  },
  {
    "questionId": "u02-s008-v012",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-compare",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩款濃縮果汁，A 每 3 份原液加 5 份水，B 每 4 份原液加 7 份水。哪款原液比例較高？",
    "choices": [
      "B，因為4＞3",
      "兩款相同",
      "無法比較",
      "A，因為3/8＞4/11"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：A原液比例3/(3+5)=3/8；B為4/(4+7)=4/11；3×11=33>32=4×8，所以A較高。所以答案是「A，因為3/8＞4/11」。",
    "steps": [
      "A原液比例3/(3+5)=3/8",
      "B為4/(4+7)=4/11；3×11=33>32=4×8，所以A較高"
    ],
    "optionAnalysis": [
      {
        "choice": "B，因為4＞3",
        "truth": false,
        "reason": "只比較原液份數，忽略總份數。"
      },
      {
        "choice": "兩款相同",
        "truth": false,
        "reason": "交叉積不同。"
      },
      {
        "choice": "無法比較",
        "truth": false,
        "reason": "資料足夠。"
      },
      {
        "choice": "A，因為3/8＞4/11",
        "truth": true,
        "reason": "3/8略大於4/11。"
      }
    ],
    "commonMistake": "把配方中的原液份數直接當濃度。",
    "concept": "濃度是部分量除以總量。",
    "tags": [
      "數與量",
      "分數大小比較",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-application"
    ],
    "authoringIntent": "用分數比較配方濃度。",
    "literacyContextNecessity": "原液與水的份數都不可刪除，必須先求各自總量再比較實際濃度。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f8381e75a399f78f1eb5f253eeaf3c981a8494a3bc1b843d7be3bf0088a3a32e"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u02-s008-cr001",
    "unitId": "u02",
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-compare",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "不用小數，比較 13/18、17/24 與 29/40 的大小，並由小到大排列。",
    "requiredWork": [
      "使用通分或交叉相乘。",
      "每一對比較過程清楚。"
    ],
    "fullCreditSolution": [
      "13/18與17/24：13×24=312，17×18=306，所以13/18較大。",
      "13/18與29/40：13×40=520，29×18=522，所以13/18較小。",
      "因此17/24＜13/18＜29/40。"
    ],
    "alternativeSolutions": [
      "可通分到360：255/360、260/360、261/360。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "排序正確且有完整精確比較。"
      },
      {
        "score": 2,
        "criteria": "排序正確但一個比較理由略缺。"
      },
      {
        "score": 1,
        "criteria": "至少一對比較正確。"
      },
      {
        "score": 0,
        "criteria": "只看分子分母或排序錯誤。"
      }
    ],
    "scoringNotes": [
      "禁止只以截斷小數作唯一證據。"
    ],
    "commonErrors": [
      "交叉積配對錯。",
      "把17/24判最大。"
    ],
    "independentReview": {
      "derivedResult": "17/24＜13/18＜29/40。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "742d6c3da73871a422e7b7ef7eaac588e31ab4346b8602f1cac74acac8055619"
  },
  {
    "questionId": "u02-s008-cr002",
    "unitId": "u02",
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-compare",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "數線上 A=-5/6、B=-7/9。判斷哪點在右邊，並求兩點距離。",
    "requiredWork": [
      "通分比較負分數。",
      "距離取絕對差。"
    ],
    "fullCreditSolution": [
      "-5/6=-15/18，-7/9=-14/18。",
      "-14/18較大，所以B在右邊。",
      "距離=|-15/18-(-14/18)|=1/18。"
    ],
    "alternativeSolutions": [
      "可用交叉相乘比較絕對值，再反轉負數順序。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "B在右、距離1/18且過程完整。"
      },
      {
        "score": 2,
        "criteria": "位置與距離都對但理由簡略。"
      },
      {
        "score": 1,
        "criteria": "只答對位置或距離一項。"
      },
      {
        "score": 0,
        "criteria": "位置與距離皆錯。"
      }
    ],
    "scoringNotes": [
      "距離寫正數，不帶方向。"
    ],
    "commonErrors": [
      "把絕對值較大者判在右。",
      "距離寫-1/18。"
    ],
    "independentReview": {
      "derivedResult": "B在右邊，距離1/18。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "9880859be6a5375456410d0f8085a0f67e58d9b7c3cc80c33e86257651557cf6"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "fig-u02-s008-v008",
    "unitId": "u02",
    "skillId": "fraction-compare",
    "altText": "水平數線從 -1 到 0，以十二分之一為一小格。點 A 位於 -3/4，也就是 -9/12；點 B 位於 -2/3，也就是 -8/12。A 在 B 左方一小格。",
    "drawingSpec": {
      "canvas": "900×250，viewBox 0 0 900 250",
      "axis": "水平3畫素實線由 (90,125) 到 (810,125)，左右端有箭頭",
      "scale": "-1 到0分成12等格，相鄰刻度60畫素；每格代表1/12",
      "majorLabels": "左端標-1，中點-1/2，右端0；其餘小刻度不標數值，避免視覺擁擠",
      "pointA": "A 在 -9/12 對應 (270,125)，半徑8實心圓，標籤置於上方 (270,82)",
      "pointB": "B 在 -8/12 對應 (330,125)，半徑8空心外框加中心實點，標籤置於下方 (330,185)",
      "distanceCue": "A、B上方以細實線括號標示一格距離，但不寫1/12數值",
      "lineStyle": "軸和刻度皆實線，無虛線；A、B使用不同點樣式但不得依顏色區分",
      "proportionNote": "按比例繪製，可由12等分確認位置與距離",
      "accessibility": "altText明確提供座標與左右關係，色覺不影響判讀"
    },
    "svgPath": "figures/u02/fig-u02-s008-v008.svg",
    "svgAssertions": [
      "<circle cx=\"270\" cy=\"125\"",
      "<circle cx=\"330\" cy=\"125\"",
      "<text x=\"270\" y=\"82\"",
      "<text x=\"330\" y=\"190\"",
      "<text x=\"90\" y=\"170\""
    ],
    "figureReview": {
      "reviewVersion": "human-figure-review-r3.0",
      "coordinateAndScaleCheck": "pass",
      "labelPlacementCheck": "pass",
      "solidDashedLineCheck": "pass",
      "questionConsistencyCheck": "pass",
      "answerLeakCheck": "pass",
      "mobileReadabilityCheck": "pass at 360 CSS px width",
      "accessibilityCheck": "pass: title, desc, role=img and equivalent altText present",
      "reviewNote": "數線720畫素分12格，每格60畫素；-9/12與-8/12分別落在x=270與330，A確在B左一格，圖中未標出距離數值。",
      "reviewedAt": "2026-07-12",
      "decision": "pass"
    },
    "reviewStatus": "independently-reviewed",
    "contentSha256": "f8e42c5a0bfb2dc352c538ea24a9eb38055aa8ab5aeaf75e88c881377e62af0e"
  }
];
