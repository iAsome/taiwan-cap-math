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
    "分數比較的核心是把兩個量改寫成可直接比較的同一標準。同分母時比較分子；同分子的正分數中，分母越小代表每份越大，整體反而越大。",
    "一般分數可通分或在分母為正時交叉相乘。多個分數排序最好統一公分母，使所有分子一次呈現相對順序；接近的分數用交叉積可避免小數近似造成誤判。",
    "比較負分數仍遵守數線右邊較大。通分後直接比較帶號分子，或先比較絕對值再反轉方向。情境比例要先用部分量除以各自總量，不能只比較部分量的表面數字。"
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
      "instruction": "先整理正負號、約分並確認分母為正，辨認所比的是原分數或情境比例。",
      "check": "負號位置明確，兩個比例的整體基準都已正確建立。"
    },
    {
      "step": 2,
      "instruction": "檢查是否同分母或同分子，可用相應快速規則直接比較。",
      "check": "同分子反向規則只在正分數情況使用，不套錯到負數。"
    },
    {
      "step": 3,
      "instruction": "一般情況選擇通分或交叉相乘，完整標示每個交叉積的來源。",
      "check": "通分時分子分母同乘，交叉相乘沒有配錯位置。"
    },
    {
      "step": 4,
      "instruction": "遇到負分數，以數線或帶號通分結果確認不等號方向。",
      "check": "絕對值較大的負數應更靠左、數值更小。"
    },
    {
      "step": 5,
      "instruction": "排序三個以上分數時使用同一標準，完成後逐對檢查傳遞關係。",
      "check": "最終符號統一使用 ASCII <、>、=，順序符合題目由大到小或由小到大。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u02-s008-example-a",
      "prompt": "比較 7/10 與 5/7。",
      "solutionSteps": [
        "兩分母皆為正，計算交叉積 7×7=49、5×10=50。",
        "右側交叉積五十較大，判定 7/10<5/7。"
      ],
      "answer": "7/10<5/7。",
      "why": "兩個分母為正，可交叉相乘：七乘七等於四十九，五乘十等於五十。因五十較大，右側分數七分之五較大，所以十分之七小於七分之五。"
    },
    {
      "exampleId": "u02-s008-example-b",
      "prompt": "比較 -7/8 與 -5/6。",
      "solutionSteps": [
        "通分為 -7/8=-21/24、-5/6=-20/24。",
        "比較帶號分子 -21<-20，所以前者在數線較左。"
      ],
      "answer": "-7/8<-5/6。",
      "why": "通分為二十四分母後，兩數是負二十四分之二十一與負二十四分之二十。負二十一較小，在數線更靠左，因此負八分之七小於負六分之五。"
    },
    {
      "exampleId": "u02-s008-example-c",
      "prompt": "將 3/5、7/12、5/8 由小到大排列。",
      "solutionSteps": [
        "取公分母一百二十，依序通分為 72/120、70/120、75/120。",
        "依分子七十、七十二、七十五由小到大對回原分數。"
      ],
      "answer": "7/12<3/5<5/8。",
      "why": "以一百二十為公分母，三個分數依序化為 72/120、70/120、75/120。比較同分母分數的分子，依七十、七十二、七十五排列，即得完整順序。"
    },
    {
      "exampleId": "u02-s008-example-d",
      "prompt": "比較 11/15 與 7/10。",
      "solutionSteps": [
        "分母均為正，計算交叉積 11×10=110、7×15=105。",
        "左側交叉積一百一十較大，所以 11/15>7/10。"
      ],
      "answer": "11/15>7/10。",
      "why": "兩個分母皆為正，可用交叉相乘精確比較。十一乘十是一百一十，七乘十五是一百零五，左側交叉積較大，因此十五分之十一較大。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "看到分母較大就直接判分數較大。",
      "correction": "同分子正分數中，分母越大每份越小，因此原分數反而越小。"
    },
    {
      "mistake": "交叉相乘後沒有標示兩個乘積分別對應哪一側。",
      "correction": "固定 a/b 與 c/d，比較 ad 與 bc，寫清較大交叉積對應的原分數。"
    },
    {
      "mistake": "負分數照絕對值大小維持同一方向。",
      "correction": "負數絕對值越大越靠左，數值反而越小，應用數線再核對。"
    },
    {
      "mistake": "相近分數只化成一位小數便判斷。",
      "correction": "使用通分或交叉相乘保留精確值，避免近似相同造成誤判。"
    },
    {
      "mistake": "情境濃度只比較原液份數，忽略各配方總份數不同。",
      "correction": "先以原液份數除以原液與水的總份數，再比較兩個比例。"
    },
    {
      "mistake": "交叉積算對後，卻把較大的乘積錯配到另一個原分數。",
      "correction": "在每個交叉積旁標明來源分數，再依乘積大小寫回不等號。"
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
  "contentSha256": "728bf46f9b1095349257eb4d00d310e23b9b45f5183424e5b2fab1bd4a9610fa",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
      "3/5<4/5",
      "3/5>4/5",
      "3/5=4/5",
      "無法比較"
    ],
    "answerIndex": 0,
    "explanation": "兩個分數分母同為五，表示每一份大小相同，只要比較分子即可。三小於四，所以取三份的五分之三小於取四份的五分之四，關係為 3/5<4/5。",
    "steps": [
      "確認 3/5 與 4/5 的分母同為 5。",
      "同分母正分數比較分子，得到 3<4。",
      "將分子關係寫回分數，得到 3/5<4/5。"
    ],
    "optionAnalysis": [
      {
        "choice": "3/5<4/5",
        "truth": true,
        "reason": "同分母且3<4，正確。"
      },
      {
        "choice": "3/5>4/5",
        "truth": false,
        "reason": "不等號方向相反。"
      },
      {
        "choice": "3/5=4/5",
        "truth": false,
        "reason": "分子不同，不相等。"
      },
      {
        "choice": "無法比較",
        "truth": false,
        "reason": "同分母可直接比較。"
      }
    ],
    "commonMistake": "看到分母相同便誤認兩分數相等，忽略分子代表取了不同份數。",
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
    "contentSha256": "68070617149c262586fe1a3c4c90463d383b48695b65585b87972e8a5965ba34",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "兩個正分數分子同為五，分母越小代表每一份越大，因此整體也越大。六小於八，所以六分之五大於八分之五，較大的分數是 5/6。",
    "steps": [
      "確認兩分數都是正數且分子同為 5。",
      "比較分母 6<8；同分子時分母較小者較大。",
      "判定 5/6>5/8，因此選擇 5/6。"
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
    "commonMistake": "直接認為分母八較大所以八分之五較大，忽略分母表示等分的份數。",
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
    "contentSha256": "fbe974640ae27e5d98535257a417522f0e43ecea4476e136436c7d16fedc8964",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "將四個分數都通分為分母六十，可得 1/2=30/60、2/3=40/60、4/5=48/60、3/4=45/60。比較同分母分數的分子，四十八最大，所以 4/5 最大；其餘三個分數都可據此排除。",
    "steps": [
      "選共同分母 60，將四個正分數統一表示。",
      "得到分子依序為 30、40、48、45。",
      "最大分子是 48，對應原分數 4/5。"
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
    "commonMistake": "只比較分子大小便選三分之二或五分之四，沒有先統一不同的分母。",
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
    "contentSha256": "b1d2a98f027763762c7e27a0c88acc8bf713e4ba85ab150159c404bc64ee7183",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
      "-2/3>-3/5",
      "兩者相等",
      "無法比較",
      "-2/3<-3/5"
    ],
    "answerIndex": 3,
    "explanation": "通分為十五分母，-2/3=-10/15，-3/5=-9/15。兩個負數中負十比負九小，所以 -10/15<-9/15，故 -2/3<-3/5。通分後直接比較帶號分子，可避免只看絕對值而把負數次序完全顛倒。",
    "steps": [
      "將兩分數通分：-2/3=-10/15、-3/5=-9/15。",
      "比較同分母的負分子，得到 -10<-9。",
      "寫回原分數關係 -2/3<-3/5。"
    ],
    "optionAnalysis": [
      {
        "choice": "-2/3>-3/5",
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
        "choice": "-2/3<-3/5",
        "truth": true,
        "reason": "負數順序正確。"
      }
    ],
    "commonMistake": "只比較絕對值後保持同方向，忘記負數絕對值較大者在數線上反而較小。",
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
    "contentSha256": "2e4eb62f8029077d6929c8f6e201d9491c8647a064745a00430745a584dfdc33",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "text": "比較 7/12、5/8 與 2/3 後，下列哪一條不等式鏈正確？",
    "choices": [
      "7/12<5/8<2/3",
      "5/8<7/12<2/3",
      "7/12<2/3<5/8",
      "2/3<5/8<7/12"
    ],
    "answerIndex": 0,
    "explanation": "三個分數通分為二十四分母：7/12=14/24、5/8=15/24、2/3=16/24。比較分子十四、十五、十六，即得 7/12<5/8<2/3。用同一公分母一次比較三者，所得順序也能逐對驗證。",
    "steps": [
      "選最小公分母 24，將三個分數通分。",
      "得到 14/24、15/24、16/24。",
      "依分子由小到大寫成 7/12<5/8<2/3。"
    ],
    "optionAnalysis": [
      {
        "choice": "7/12<5/8<2/3",
        "truth": true,
        "reason": "14/24<15/24<16/24。"
      },
      {
        "choice": "5/8<7/12<2/3",
        "truth": false,
        "reason": "5/8=15/24，大於 7/12=14/24。"
      },
      {
        "choice": "7/12<2/3<5/8",
        "truth": false,
        "reason": "2/3=16/24，大於 5/8=15/24。"
      },
      {
        "choice": "2/3<5/8<7/12",
        "truth": false,
        "reason": "把最大值 2/3 放在最前面。"
      }
    ],
    "commonMistake": "分別用不同近似值比較而排錯順序，沒有用同一公分母一次核對三者。",
    "concept": "異分母分數可通分後比較。",
    "tags": [
      "數與量",
      "分數大小比較",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-lcm-application"
    ],
    "authoringIntent": "使用共同分母辨認完整分數大小鏈。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "da418cd961cd6a4703cc9a433f3ee6b9e7861e10ced3eabd94a63b261a055d00",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "text": "若 0<a<b，則下列哪個關係一定成立？",
    "choices": [
      "1/a<1/b",
      "1/a>1/b",
      "a/b>1",
      "b/a<1"
    ],
    "answerIndex": 1,
    "explanation": "已知 0<a<b，表示 a、b 都是正數且 a 較小。正數取倒數後大小順序反轉，因此 1/a>1/b；同時 a/b<1、b/a>1。這個結論依賴兩數都為正，因此題目中的零界線條件不能省略。",
    "steps": [
      "由 0<a<b 確認 a、b 均為正數。",
      "正數取倒數會反轉大小，從 a<b 得 1/a>1/b。",
      "核對其餘比值 a/b<1、b/a>1，排除其他選項。"
    ],
    "optionAnalysis": [
      {
        "choice": "1/a<1/b",
        "truth": false,
        "reason": "倒數不維持原順序。"
      },
      {
        "choice": "1/a>1/b",
        "truth": true,
        "reason": "1/a>1/b，這個關係正確。"
      },
      {
        "choice": "a/b>1",
        "truth": false,
        "reason": "a/b<1。"
      },
      {
        "choice": "b/a<1",
        "truth": false,
        "reason": "b/a>1。"
      }
    ],
    "commonMistake": "沿用原本 a 小於 b 的方向，未察覺正數分母變大時倒數會變小。",
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
    "contentSha256": "f6617015282110b8d1ebad57227389f9bebcdc376aeaf0c5d2b4537ab58ec83e",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "兩個分母都為正，可用交叉相乘精確比較。17×29=493，而 22×23=506；因五百零六較大，所以 22/29 大於 17/23。兩個交叉積不同，也同時證明這兩個分數並不相等。",
    "steps": [
      "固定比較 17/23 與 22/29，交叉積分別為 17×29 與 22×23。",
      "計算得到 493 與 506。",
      "因 506>493，判定 22/29 較大。"
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
    "commonMistake": "只比較分子二十二大於十七，沒有確認不同分母下仍需用交叉積判斷。",
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
    "contentSha256": "7c0167eb9f9f928114e9c1bdd7b30b5a485e46337512890e46a764baf8c48a1f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "通分後 A=-3/4=-9/12，B=-2/3=-8/12。負十二分之九較小，所以 A 在 B 左邊；兩點距離是 |-9/12-(-8/12)|=1/12。帶號坐標先決定左右位置，再以差的絕對值計算非負距離。",
    "steps": [
      "將兩坐標通分為 A=-9/12、B=-8/12。",
      "比較得 -9/12<-8/12，所以 A 位於 B 左邊。",
      "取坐標差的絕對值，得到兩點距離 1/12。"
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
    "commonMistake": "位置判斷正確後直接把分母相減求距離，沒有計算兩坐標差的絕對值。",
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
    "contentSha256": "8f90125d7899265bcf0ed0ad16f1c456603478a870f4bfbb2659ab67174249d5",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
      "x>y>z",
      "y>x>z",
      "z>y>x",
      "y>z>x"
    ],
    "answerIndex": 0,
    "explanation": "比較 x 與 y：5×10=50 大於 7×7=49，所以 x>y。比較 y 與 z：7×13=91 大於 9×10=90，所以 y>z，故由大到小為 x>y>z。兩次交叉比較都只差一，仍可精確確定三個相近分數的順序。",
    "steps": [
      "交叉比較 x=5/7 與 y=7/10，得到 50>49，所以 x>y。",
      "交叉比較 y=7/10 與 z=9/13，得到 91>90，所以 y>z。",
      "利用傳遞性合併為 x>y>z。"
    ],
    "optionAnalysis": [
      {
        "choice": "x>y>z",
        "truth": true,
        "reason": "三個近似值依序遞減。"
      },
      {
        "choice": "y>x>z",
        "truth": false,
        "reason": "把5/7與7/10顛倒。"
      },
      {
        "choice": "z>y>x",
        "truth": false,
        "reason": "z其實最小。"
      },
      {
        "choice": "y>z>x",
        "truth": false,
        "reason": "x不是最小。"
      }
    ],
    "commonMistake": "只看三個分數都接近零點七便猜測順序，沒有用精確交叉積分辨細小差距。",
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
    "contentSha256": "2ff89ec93d615f7556a781e973cccdb0f13ecbcb39a6573c8d523d9462d50181",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "通分為一百二十分母，甲 7/10=84/120、乙 5/8=75/120、丙 2/3=80/120。由高到低是甲、丙、乙，因此第二高為丙。同一公分母下，分子大小就直接代表完成比例大小。",
    "steps": [
      "將三個完成比例通分為分母 120。",
      "得到甲 84/120、乙 75/120、丙 80/120。",
      "依分子由大到小排成甲、丙、乙，選丙。"
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
    "commonMistake": "找出甲最高後直接選乙，沒有完整比較乙與丙誰才是第二高。",
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
    "contentSha256": "1d0e9ac099ed6c72132852e992bcbf9c2adbf47faad658b680e5cc1c062cc9db",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "以一百八十為公分母，四人的比例依序化為 3/4=135/180、7/9=140/180、4/5=144/180、5/6=150/180。比較同分母分數的分子，一百五十最大，對應小萱的 5/6，所以小萱最高。",
    "steps": [
      "選共同分母 180，將四個完成比例通分。",
      "分子依序得到 135、140、144、150。",
      "最大值 150 對應小萱的 5/6，因此選小萱。"
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
    "commonMistake": "只比較原分子七最大便選小芸，忽略四個分數的分母不同。",
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
    "contentSha256": "e400e96be017fe30ac820d41214d7696c955e7f365a1263505fb80a949a9a22a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
      "B，因為4>3",
      "兩款相同",
      "無法比較",
      "A，因為3/8>4/11"
    ],
    "answerIndex": 3,
    "explanation": "A 的原液比例是 3/(3+5)=3/8，B 的原液比例是 4/(4+7)=4/11。交叉相乘得 3×11=33、4×8=32，所以 3/8>4/11，A 較高。兩款總份數不同，必須先各自建立完整配方比例再比較，才能精確判定。",
    "steps": [
      "先用原液除以總份數，得到 A 為 3/8、B 為 4/11。",
      "交叉相乘比較，計算 3×11=33、4×8=32。",
      "因 33>32，判定 A 的原液比例較高。"
    ],
    "optionAnalysis": [
      {
        "choice": "B，因為4>3",
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
        "choice": "A，因為3/8>4/11",
        "truth": true,
        "reason": "3/8略大於4/11。"
      }
    ],
    "commonMistake": "只比較原液份數四大於三便選 B，沒有把各自加入的水量納入總份數。",
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
    "contentSha256": "e1e94ef6adcaf8b091b261e9ac06648c97c7946426a47d7028807e2c8ce8e2be",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
      "先比較 13/18 與 17/24：交叉積 13×24=312、17×18=306，所以前者較大。",
      "再比較 13/18 與 29/40：交叉積 13×40=520、29×18=522，所以前者較小。",
      "綜合兩個精確比較，二十四分之十七最小、四十分之二十九最大，從小到大為 17/24<13/18<29/40。"
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
      "交叉相乘時把十三乘十八、十七乘二十四，配對到同一分數內部。",
      "只比較原分子大小便猜四十分之二十九最大，雖碰巧選對仍未驗證分母影響。",
      "兩組比較都算對後，抄寫最終不等號方向時把由小到大顛倒。"
    ],
    "independentReview": {
      "derivedResult": "17/24＜13/18＜29/40。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "fe0cd3efbc155372bda66133c94e623cb02050bc8ba9f572d5643f556a756667",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "固定每對分數的分子分母位置，計算兩個交叉積。",
      "先確定二十四分之十七小於十八分之十三，再確定後者小於四十分之二十九。",
      "利用傳遞性合併成一條由小到大的不等式鏈。"
    ]
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
      "通分得 A=-5/6=-15/18，B=-7/9=-14/18，兩點已使用相同單位分數表示。",
      "因負十四大於負十五，所以 B 的坐標較大，在數線上位於 A 的右邊。",
      "兩點坐標只差一個十八分之一，取差的絕對值後距離為 1/18，距離不帶負號。"
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
      "用絕對值大小直接判位置，誤認負十八分之十五在負十八分之十四右邊。",
      "坐標相減得到負十八分之一後直接當距離，忘記距離必須取絕對值。",
      "通分時只改分母，沒有同步將分子乘上相同倍數。"
    ],
    "independentReview": {
      "derivedResult": "B在右邊，距離1/18。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "cdcb04a44f8fd5b7dc6adb38313cc71c63aefdbadb6f3fb37e25ea793732b49e",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "將兩個負分數通分成相同正分母。",
      "比較帶號分子，利用數線右邊坐標較大判斷 B 在右。",
      "以兩坐標差的絕對值求距離，化簡為十八分之一。"
    ]
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
    "contentSha256": "51e4f6615f7a8aeaf7e556e8741ff1694db4332e68cf4c7d38c0740cf540cfe2",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];
