// SERIALIZATION OF REVIEWED CHATGPT HUMAN-AUTHORED CONTENT.

// BATCH-LOCAL STAGING ONLY. DO NOT EDIT OR ACTIVATE IN PRODUCTION.

export const UNIT_ID = "u18";

export const SKILL_SLOT = "s005";

export const SKILL_ID = "continued-ratio-properties";

export const LECTURE = {
  "lectureId": "u18-s005-lecture-r1",
  "unitId": "u18",
  "numericUnitId": 18,
  "topicId": "u18-ratio",
  "skillId": "continued-ratio-properties",
  "lockedSkillOrder": 5,
  "lockedSkillTitle": "連比性質",
  "title": "連比性質：在和與差及比例式之間推理",
  "audience": "臺灣國中零基礎至國中教育會考數學滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能判斷兩個連比是否等值。",
    "能利用連比推得部分和、部分差與總量的比。",
    "能由等比關係建立比例式並求未知量。",
    "能辨認交換順序、倒比與同比例伸縮的差異。"
  ],
  "prerequisiteBridge": {
    "prerequisites": [
      {
        "skillId": "continued-ratio-word",
        "title": "連比應用題",
        "requiredLevel": "能運用「連比應用題」完成本節所需的基本判斷與計算，並能說明主要條件。"
      }
    ],
    "bridgeExplanation": "本節承接「連比應用題」，先複習其核心判斷，再把方法推進到「連比性質」。"
  },
  "glossary": [
    {
      "term": "等值連比",
      "definition": "各對應項可由同一非零倍數轉換的連比。"
    },
    {
      "term": "合比",
      "definition": "由各項相加形成的新比，例如 a:b:c 可推得 (a+b):c。"
    },
    {
      "term": "分比",
      "definition": "由各項相減形成的新比，使用時須注意差為正及順序。"
    },
    {
      "term": "倒比",
      "definition": "將二項比的前後項交換；連比若改順序，對應對象也隨之改變。"
    }
  ],
  "notation": [
    {
      "symbol": "a:b:c=d:e:f",
      "meaning": "存在同一倍數使三組對應項相等。"
    },
    {
      "symbol": "a/(a+b+c)",
      "meaning": "第一部分占總量的比例。"
    },
    {
      "symbol": "(a+b):(b+c)",
      "meaning": "可由同一連比中的部分和形成的新比。"
    }
  ],
  "conceptNarrative": [
    "連比 a:b:c 可設為 ak:bk:ck，因此任何由這三個量做相同線性組合的比，都可用份數直接計算。例如 A:B:C=2:3:5，則 (A+B):C=5:5=1:1。",
    "同比例伸縮不改變關係，但交換項目會改變對應對象。A:B:C=2:3:4 不代表 B:A:C 仍是 2:3:4，而應為 3:2:4。",
    "由連比求占比時，分母必須是所問整體。例如 A 占 A+B+C 的比例為 a/(a+b+c)，不是 a/c。",
    "涉及差時要保留方向。若 A:B=5:3，則 A-B 是 2 份；若寫 B-A，則是 -2 份，在長度或人數情境中通常改問正差。"
  ],
  "formalDefinitions": [
    {
      "name": "連比不變性",
      "statement": "所有項同乘或同除同一非零數，對應比值不變。"
    },
    {
      "name": "份數運算性質",
      "statement": "若 A:B:C=a:b:c，則 A=ak、B=bk、C=ck，可將和差條件化為份數和差。"
    }
  ],
  "formulas": [
    {
      "formula": "A/(A+B+C)=a/(a+b+c)",
      "conditions": [
        "A:B:C=a:b:c",
        "總量不為 0"
      ],
      "meaning": "由連比求部分占總量的比例。"
    },
    {
      "formula": "(A+B):(B+C)=(a+b):(b+c)",
      "conditions": [
        "使用同一組共同倍數 k"
      ],
      "meaning": "共同倍數可在新比中約去。"
    },
    {
      "formula": "(A-B):C=(a-b):c",
      "conditions": [
        "差的順序一致"
      ],
      "meaning": "由份數差求實際差的比例。"
    }
  ],
  "nonApplicableCases": [
    "不能從 A:B:C=2:3:5 推得 A:B=2:5；前兩項仍是 2:3。",
    "各項若分別乘不同數，連比通常改變。",
    "把項目重新排序時，必須同步更改量名。",
    "求部分占總量時不能把總份數誤寫成最後一項。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "把實際量寫成 ak、bk、ck。",
      "check": "三量是否共用同一 k？"
    },
    {
      "step": 2,
      "instruction": "將題目所求的和、差或占比用 ak、bk、ck 表示。",
      "check": "括號與差的順序正確嗎？"
    },
    {
      "step": 3,
      "instruction": "約去共同倍數 k。",
      "check": "分母是否可能為 0？"
    },
    {
      "step": 4,
      "instruction": "化簡得到份數關係。",
      "check": "結果是否維持題目要求的順序？"
    },
    {
      "step": 5,
      "instruction": "用一組實際倍數數值回查。",
      "check": "選 k=1 或其他正數能否驗證？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "A:B:C=3:4:8，求 (A+B):C。",
      "solutionSteps": [
        "設 A=3k、B=4k、C=8k。",
        "A+B=7k。",
        "(A+B):C=7k:8k=7:8。"
      ],
      "answer": "7:8"
    },
    {
      "exampleId": "L2",
      "prompt": "X:Y:Z=5:2:3，求 Y 占總量的比例。",
      "solutionSteps": [
        "總份數 5+2+3=10。",
        "Y 為 2 份。",
        "占比 2/10=1/5。"
      ],
      "answer": "1/5"
    },
    {
      "exampleId": "L3",
      "prompt": "P:Q:R=7:4:2，求 (P-Q):(Q-R)。",
      "solutionSteps": [
        "P-Q 為 3 份。",
        "Q-R 為 2 份。",
        "比為 3:2。"
      ],
      "answer": "3:2"
    },
    {
      "exampleId": "L4",
      "prompt": "a:b:c=2:6:9，若改寫成 c:a:b，結果為何？",
      "solutionSteps": [
        "原對應是 a=2k、b=6k、c=9k。",
        "依新順序列 c、a、b。",
        "得到 9:2:6。"
      ],
      "answer": "9:2:6"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "只要數字相同就認為順序無關。",
      "why": "忽略比的對應性。",
      "correction": "量名改順序，份數也同樣重排。"
    },
    {
      "mistake": "A+B 的份數寫成 ab。",
      "why": "混淆加法與乘法。",
      "correction": "A+B=(a+b)k。"
    },
    {
      "mistake": "部分占比的分母只用另外兩項。",
      "why": "未辨認題目中的整體。",
      "correction": "將所有構成整體的份數相加。"
    },
    {
      "mistake": "差的先後顛倒。",
      "why": "只取絕對差。",
      "correction": "依題目順序寫 A-B 或 B-A。"
    },
    {
      "mistake": "認為任何三項同時變動都保持連比。",
      "why": "忽略必須是同一倍數。",
      "correction": "檢查每一項的新值除以舊值是否相同。"
    }
  ],
  "selfCheck": [
    "所有實際量是否以同一 k 表示？",
    "所求整體包含哪些項？",
    "和差的括號正確嗎？",
    "重新排序時量名與份數同步嗎？",
    "我能用 k=1 驗證嗎？"
  ],
  "summary": [
    "等值連比來自所有項乘除同一數。",
    "和與差可直接在份數上運算。",
    "部分占比等於該份數除以整體份數。",
    "順序改變會改變連比的意義。"
  ],
  "connections": {
    "previous": "連比應用題提供文字轉比與橋接量經驗。",
    "next": [
      "相似三角形會把對應邊寫成等值連比。",
      "周長比與面積比將使用同一縮放倍數。"
    ]
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u18-s005-v001",
      "u18-s005-v002",
      "u18-s005-v003",
      "u18-s005-v004",
      "u18-s005-v005",
      "u18-s005-v006",
      "u18-s005-v007",
      "u18-s005-v008",
      "u18-s005-v009",
      "u18-s005-v010",
      "u18-s005-v011",
      "u18-s005-v012"
    ],
    "constructedResponseIds": [
      "u18-s005-cr001",
      "u18-s005-cr002"
    ]
  },
  "lectureReview": {
    "reviewVersion": "human-lecture-review-r1.0",
    "reviewedAt": "2026-07-12",
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "capScopeCheck": "pass",
    "symbolDefinitionsComplete": true,
    "invalidUseCasesIncluded": true,
    "examplesIndividuallyChosen": true,
    "reviewNote": "驗證所有合比、分比與占比均由共同倍數推導，未使用未證明的比例規則；重排範例清楚區分數值集合相同與對應順序不同。"
  },
  "contentSha256": "1d12ef0b58ef674176575685b658d56e499c0a7b1bea050972bf7f4444d35431"
};

export const QUESTIONS = [
  {
    "questionId": "u18-s005-v001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-properties",
    "lockedSkillOrder": 5,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "若 A:B:C=2:3:5，則 (A+B):C 為何？",
    "text": "若 A:B:C=2:3:5，則 (A+B):C 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "1:1",
      "2:5",
      "5:3",
      "5:10"
    ],
    "answerIndex": 0,
    "independentSolution": "設 A=2k、B=3k、C=5k，則 A+B=5k，故 (A+B):C=5k:5k=1:1。",
    "explanation": "A+B 對應 2+3=5 份，C 也是 5 份，所以比為 5:5=1:1。",
    "steps": [
      "將 A、B 份數相加。",
      "列 5:5。",
      "化簡為 1:1。"
    ],
    "optionAnalysis": [
      {
        "choice": "1:1",
        "truth": true,
        "reason": "依獨立推導可得到 1:1，符合所有已知條件。"
      },
      {
        "choice": "2:5",
        "truth": false,
        "reason": "只取 A:C，漏掉 B。"
      },
      {
        "choice": "5:3",
        "truth": false,
        "reason": "把 C 與 A+B 的順序顛倒。"
      },
      {
        "choice": "5:10",
        "truth": false,
        "reason": "等值但未化成最簡比。"
      }
    ],
    "misconceptionTarget": "部分和的份數漏加或順序顛倒。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "直接由份數相加形成新比。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c6ea0b42dee487cdba0aeea71d0f4462a86005716dfa1ba954bc2b1a3509f640"
  },
  {
    "questionId": "u18-s005-v002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-properties",
    "lockedSkillOrder": 5,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "若 X:Y:Z=4:1:5，則 Y 占 X+Y+Z 的比例為何？",
    "text": "若 X:Y:Z=4:1:5，則 Y 占 X+Y+Z 的比例為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "1/5",
      "1/4",
      "1/10",
      "1/9"
    ],
    "answerIndex": 2,
    "independentSolution": "令 X=4k、Y=k、Z=5k，則 Y/(X+Y+Z)=k/(10k)=1/10。",
    "explanation": "總份數為 4+1+5=10，Y 為 1 份，所以占比 1/10。",
    "steps": [
      "求總份數 10。",
      "取 Y 的 1 份。",
      "寫成 1/10。"
    ],
    "optionAnalysis": [
      {
        "choice": "1/5",
        "truth": false,
        "reason": "把 Y 與 Z 的比誤當占總量比例。"
      },
      {
        "choice": "1/4",
        "truth": false,
        "reason": "只與 X 比較。"
      },
      {
        "choice": "1/10",
        "truth": true,
        "reason": "依獨立推導可得到 1/10，符合所有已知條件。"
      },
      {
        "choice": "1/9",
        "truth": false,
        "reason": "總份數漏加 Y 自己的 1 份。"
      }
    ],
    "misconceptionTarget": "分母沒有包含全部構成總量的項。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "基本部分占總量比例。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1f7dc4af98754a6b6e2b9ba2fce14909de833a76a7f91fa0379aa7ad94ef27b7"
  },
  {
    "questionId": "u18-s005-v003",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-properties",
    "lockedSkillOrder": 5,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "A:B:C=7:4:2，則 (A-B):(B-C) 為何？",
    "text": "A:B:C=7:4:2，則 (A-B):(B-C) 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "11:6",
      "3:2",
      "5:2",
      "3:6"
    ],
    "answerIndex": 1,
    "independentSolution": "設三量為 7k、4k、2k；兩差分別 3k、2k，共同 k 約去得到 3:2。",
    "explanation": "A-B 為 7-4=3 份，B-C 為 4-2=2 份，所以比為 3:2。",
    "steps": [
      "計算份數差 3。",
      "計算份數差 2。",
      "依題目順序寫 3:2。"
    ],
    "optionAnalysis": [
      {
        "choice": "11:6",
        "truth": false,
        "reason": "把差誤作和。"
      },
      {
        "choice": "3:2",
        "truth": true,
        "reason": "依獨立推導可得到 3:2，符合所有已知條件。"
      },
      {
        "choice": "5:2",
        "truth": false,
        "reason": "A-B 計算錯。"
      },
      {
        "choice": "3:6",
        "truth": false,
        "reason": "第二個差未化簡。"
      }
    ],
    "misconceptionTarget": "把連比中的差運算誤成加法或絕對值順序混亂。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "簡單分比，兩差皆為正。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "9b1b51de887ca54423a9f7e4112dbc62cd3428298d242df8a88d60bd6b97ee3f"
  },
  {
    "questionId": "u18-s005-v004",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-properties",
    "lockedSkillOrder": 5,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "若 p:q:r=3:8:5，將順序改寫為 r:p:q，結果為何？",
    "text": "若 p:q:r=3:8:5，將順序改寫為 r:p:q，結果為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "3:8:5",
      "8:3:5",
      "5:8:3",
      "5:3:8"
    ],
    "answerIndex": 3,
    "independentSolution": "取 k=1 測試，p=3、q=8、r=5，故 r:p:q=5:3:8。",
    "explanation": "原來 p=3k、q=8k、r=5k；依 r、p、q 順序列出 5:3:8。",
    "steps": [
      "標出各量的份數。",
      "按 r、p、q 重新排列。",
      "保留同一共同倍數。"
    ],
    "optionAnalysis": [
      {
        "choice": "3:8:5",
        "truth": false,
        "reason": "沒有依新順序重排。"
      },
      {
        "choice": "8:3:5",
        "truth": false,
        "reason": "把順序寫成 q:p:r。"
      },
      {
        "choice": "5:8:3",
        "truth": false,
        "reason": "中間與最後一項對錯。"
      },
      {
        "choice": "5:3:8",
        "truth": true,
        "reason": "依獨立推導可得到 5:3:8，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "只記數字集合，沒有跟著量名重排。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "考對應順序而非計算。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ead709de08f847548618b23f0ab6f0a499a3f336c63e569c559a74e27e8a1cdb"
  },
  {
    "questionId": "u18-s005-v005",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-properties",
    "lockedSkillOrder": 5,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "若 A:B:C=5:7:9，則 A:(B+C) 為何？",
    "text": "若 A:B:C=5:7:9，則 A:(B+C) 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "5:9",
      "12:9",
      "5:16",
      "5:2"
    ],
    "answerIndex": 2,
    "independentSolution": "設 A=5k、B=7k、C=9k，B+C=16k，所以 5k:16k=5:16。",
    "explanation": "B+C 對應 7+9=16 份，所以 A:(B+C)=5:16。",
    "steps": [
      "相加 B、C 的份數。",
      "保持 A 在前。",
      "寫最簡比 5:16。"
    ],
    "optionAnalysis": [
      {
        "choice": "5:9",
        "truth": false,
        "reason": "只取 C，漏掉 B。"
      },
      {
        "choice": "12:9",
        "truth": false,
        "reason": "把 A+B 與 C 相比。"
      },
      {
        "choice": "5:16",
        "truth": true,
        "reason": "依獨立推導可得到 5:16，符合所有已知條件。"
      },
      {
        "choice": "5:2",
        "truth": false,
        "reason": "把 B+C 誤作 7+9=2 的末位數。"
      }
    ],
    "misconceptionTarget": "忽略括號，只取其中一項。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "由連比形成部分對部分的合比。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2781d73b47213601f55be420ec5e3f004d5c2a1a17853aa4f5227347405a029b"
  },
  {
    "questionId": "u18-s005-v006",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-properties",
    "lockedSkillOrder": 5,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "A:B:C=6:10:15。下列哪一個等式一定成立？",
    "text": "A:B:C=6:10:15。下列哪一個等式一定成立？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "B/(B+C)=2/3",
      "A/(A+B)=3/8",
      "(A+C)/B=3/2",
      "(C-A)/(B-A)=3"
    ],
    "answerIndex": 1,
    "independentSolution": "令共同倍數 k 約去，第一式為 6k/16k=3/8；其餘數值分別 2/5、21/10、9/4。",
    "explanation": "A/(A+B)=6/(6+10)=6/16=3/8。",
    "steps": [
      "以份數代入各選項。",
      "逐一計算。",
      "只有第一式成立。"
    ],
    "optionAnalysis": [
      {
        "choice": "B/(B+C)=2/3",
        "truth": false,
        "reason": "正確應為 10/(10+15)=2/5。"
      },
      {
        "choice": "A/(A+B)=3/8",
        "truth": true,
        "reason": "依獨立推導可得到 A/(A+B)=3/8，符合所有已知條件。"
      },
      {
        "choice": "(A+C)/B=3/2",
        "truth": false,
        "reason": "正確為 21/10。"
      },
      {
        "choice": "(C-A)/(B-A)=3",
        "truth": false,
        "reason": "正確為 9/4。"
      }
    ],
    "misconceptionTarget": "看到原比可約分就直接套入不相關分母。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "需逐一驗證四個由和差構成的關系。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0b931c8204d0704d46cdbe40d3a2888f55898c5e78354ffd927da9631959a350"
  },
  {
    "questionId": "u18-s005-v007",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-properties",
    "lockedSkillOrder": 5,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "若 A:B:C=2:5:7，且 A+B+C=84，則 (C-A) 為何？",
    "text": "若 A:B:C=2:5:7，且 A+B+C=84，則 (C-A) 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "12",
      "42",
      "54",
      "30"
    ],
    "answerIndex": 3,
    "independentSolution": "設 A=2k、B=5k、C=7k，14k=84 得 k=6，C-A=5k=30。",
    "explanation": "總份數 14，每份 6；C-A=(7-2)×6=30。",
    "steps": [
      "求每份 84÷14=6。",
      "差份數 5。",
      "計算 5×6=30。"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": false,
        "reason": "這是 A 的實際值。"
      },
      {
        "choice": "42",
        "truth": false,
        "reason": "這是 C 的實際值。"
      },
      {
        "choice": "54",
        "truth": false,
        "reason": "把差誤作 C+A。"
      },
      {
        "choice": "30",
        "truth": true,
        "reason": "依獨立推導可得到 30，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "先求各量後把差寫成和，或差份數算錯。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 100,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "連比性質與實際總量結合。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "efd34bd9e28f6cdff0609e016cf82ad601b1dac42181b481597ad8b3a5f44a59"
  },
  {
    "questionId": "u18-s005-v008",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-properties",
    "lockedSkillOrder": 5,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "若非零數 a:b:c=4:6:9，則下列哪個連比不一定與原比相等？",
    "text": "若非零數 a:b:c=4:6:9，則下列哪個連比不一定與原比相等？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "(a+1):(b+1):(c+1)",
      "2a:2b:2c",
      "a/3:b/3:c/3",
      "-a:-b:-c"
    ],
    "answerIndex": 0,
    "independentSolution": "原比 4:6:9 加 1 後為 5:7:10，無法用同一倍率從原比得到，所以不一定相等。",
    "explanation": "三項同加 1 不是同比例伸縮，通常會改變比值；其餘皆為同乘或同除同一非零數。",
    "steps": [
      "辨認等值連比需同乘非零常數。",
      "檢查前三個操作。",
      "用 4:6:9 測試加 1 得 5:7:10。"
    ],
    "optionAnalysis": [
      {
        "choice": "(a+1):(b+1):(c+1)",
        "truth": true,
        "reason": "依獨立推導可得到 (a+1):(b+1):(c+1)，符合所有已知條件。"
      },
      {
        "choice": "2a:2b:2c",
        "truth": false,
        "reason": "三項同乘 2，必定等值。"
      },
      {
        "choice": "a/3:b/3:c/3",
        "truth": false,
        "reason": "三項同除 3，必定等值。"
      },
      {
        "choice": "-a:-b:-c",
        "truth": false,
        "reason": "三項同乘 -1，代數比值相同；若限定正量則表達需另說明。"
      }
    ],
    "misconceptionTarget": "把同加一數誤認為同乘。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "允許代數上的非零連比，因此三項同乘 -1 保持比值；實際正量情境通常不用負連比。",
    "difficultyReason": "需區分乘法不變性與加法不變性的反例。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "29da40e3718ea06db009f5d0633e8e30dd04bce9da452f0da6785c4991151c80"
  },
  {
    "questionId": "u18-s005-v009",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-properties",
    "lockedSkillOrder": 5,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "若 A:B:C=3:4:6，且 (A+C)/(B+C)=27/30，則此等式是否可能成立？",
    "text": "若 A:B:C=3:4:6，且 (A+C)/(B+C)=27/30，則此等式是否可能成立？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "不可能，因為 3+6≠27",
      "可能，因為 9/10=27/30",
      "不可能，因為 B+C=10 不是 30",
      "資料不足，因為不知道共同倍數"
    ],
    "answerIndex": 1,
    "independentSolution": "設 A=3k、B=4k、C=6k，則比為 9k/10k=9/10=27/30。",
    "explanation": "(A+C)/(B+C)=(3+6)/(4+6)=9/10，而 27/30 也化簡為 9/10，所以可能且一定成立。",
    "steps": [
      "用份數代入。",
      "化簡 9/10。",
      "化簡 27/30 比較。"
    ],
    "optionAnalysis": [
      {
        "choice": "不可能，因為 3+6≠27",
        "truth": false,
        "reason": "比較的是比值，不要求份數和直接等於 27。"
      },
      {
        "choice": "可能，因為 9/10=27/30",
        "truth": true,
        "reason": "依獨立推導可得到 可能，因為 9/10=27/30，符合所有已知條件。"
      },
      {
        "choice": "不可能，因為 B+C=10 不是 30",
        "truth": false,
        "reason": "等值分數可同乘 3。"
      },
      {
        "choice": "資料不足，因為不知道共同倍數",
        "truth": false,
        "reason": "共同倍數會在比值中約去。"
      }
    ],
    "misconceptionTarget": "把等值分數誤認為分子分母必須等於份數。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "需要理解共同倍數約去與等值分數。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e501202109d897d22efce505e93f61a9ca157a9b005a0105180cdb3714297007"
  },
  {
    "questionId": "u18-s005-v010",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-properties",
    "lockedSkillOrder": 5,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "營養標示中蛋白質、脂肪、碳水化合物的質量比為 3:2:7。若只計這三項，脂肪占三項總質量的幾分之幾？",
    "text": "營養標示中蛋白質、脂肪、碳水化合物的質量比為 3:2:7。若只計這三項，脂肪占三項總質量的幾分之幾？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "2/7",
      "2/9",
      "1/3",
      "1/6"
    ],
    "answerIndex": 3,
    "independentSolution": "可設三項為 3k、2k、7k；脂肪占比 2k/(12k)=1/6。",
    "explanation": "總份數 3+2+7=12，脂肪占 2/12=1/6。",
    "steps": [
      "確認只計三項。",
      "求總份數 12。",
      "化簡 2/12。"
    ],
    "optionAnalysis": [
      {
        "choice": "2/7",
        "truth": false,
        "reason": "拿脂肪與碳水相比。"
      },
      {
        "choice": "2/9",
        "truth": false,
        "reason": "總份數漏掉脂肪本身。"
      },
      {
        "choice": "1/3",
        "truth": false,
        "reason": "把脂肪 2 份除以蛋白質與脂肪共 5 份後再約錯。"
      },
      {
        "choice": "1/6",
        "truth": true,
        "reason": "依獨立推導可得到 1/6，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "分母没有按照題目指定的三項整體。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "同為質量，單位約去；答案為比例。",
    "ambiguityAndBoundaryAudit": "『只計這三項』排除水分與其他成分，分母範圍明確。",
    "difficultyReason": "從標示比判斷指定整體中的成分占比。",
    "literacyContextNecessity": "營養標示的占比必須以題目限定的三項總質量為分母，情境決定整體範圍。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ee061bf5b30e5d7426b6f50180575c367d58372de8a582ed83e93e24d1b11fe1"
  },
  {
    "questionId": "u18-s005-v011",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-properties",
    "lockedSkillOrder": 5,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "某活動票券分為普通、優待、贈票，張數比 8:3:1。若取消全部贈票，普通票與優待票在剩餘票券中的比例為何？",
    "text": "某活動票券分為普通、優待、贈票，張數比 8:3:1。若取消全部贈票，普通票與優待票在剩餘票券中的比例為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "8:3",
      "8:3:1",
      "8:4",
      "2:1"
    ],
    "answerIndex": 0,
    "independentSolution": "設原張數 8k、3k、k；移除 k 後剩 8k 與 3k，比仍為 8:3。",
    "explanation": "取消贈票只移除第三項，普通與優待原本的相對份數仍是 8:3。",
    "steps": [
      "列出剩餘項目普通與優待。",
      "保留其原份數 8、3。",
      "確認最大公因數 1。"
    ],
    "optionAnalysis": [
      {
        "choice": "8:3",
        "truth": true,
        "reason": "依獨立推導可得到 8:3，符合所有已知條件。"
      },
      {
        "choice": "8:3:1",
        "truth": false,
        "reason": "取消後不應保留赠票項。"
      },
      {
        "choice": "8:4",
        "truth": false,
        "reason": "把優待與贈票相加。"
      },
      {
        "choice": "2:1",
        "truth": false,
        "reason": "8:3 不能化簡為 2:1。"
      }
    ],
    "misconceptionTarget": "刪除一項後把該項份數加到其他類別。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "票券張數為同類離散量；比例 8:3。",
    "ambiguityAndBoundaryAudit": "題目是取消贈票而非改發給其他票種，因此普通與優待數量不變。",
    "difficultyReason": "需區分移除類別與重新分配的不同影響。",
    "literacyContextNecessity": "票券取消改變總量但不改變未調整類別的相對張數，必須依類別變動解讀。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ebd26c70bda0db0c0dcc089f2be65d128ed828cf15048159202fa4bf749f986b"
  },
  {
    "questionId": "u18-s005-v012",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-properties",
    "lockedSkillOrder": 5,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "三個儲槽目前水量比為 5:4:3。若每槽都再加入相同的 10 公升，新的水量比是否仍一定為 5:4:3？",
    "text": "三個儲槽目前水量比為 5:4:3。若每槽都再加入相同的 10 公升，新的水量比是否仍一定為 5:4:3？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "一定，因為三槽都加相同水量",
      "一定變成 6:5:4",
      "不會，固定加上 10 公升後不可能維持原比",
      "一定變成 15:14:13"
    ],
    "answerIndex": 2,
    "independentSolution": "設原水量為5k、4k、3k，其中k>0。若加10公升後仍為5:4，則(5k+10):(4k+10)=5:4，交叉相乘20k+40=20k+50，得到40=50矛盾，所以不可能維持原比。",
    "explanation": "原水量寫成5k、4k、3k，各加10後為5k+10、4k+10、3k+10。只要比較前兩項：若仍為5:4，交叉相乘會得到40=50的矛盾，因此新比絕不可能還是5:4:3。",
    "steps": [
      "以5k、4k、3k表示原來三槽水量，且k>0。",
      "假設各加10公升後仍為5:4，列(5k+10):(4k+10)=5:4。",
      "交叉相乘得20k+40=20k+50，矛盾，故不可能維持原比。"
    ],
    "optionAnalysis": [
      {
        "choice": "一定，因為三槽都加相同水量",
        "truth": false,
        "reason": "同加10是固定加法，不是把各項乘上同一倍數。"
      },
      {
        "choice": "一定變成 6:5:4",
        "truth": false,
        "reason": "只有k=10時會得60:50:40=6:5:4，題幹未給定k。"
      },
      {
        "choice": "不會，固定加上 10 公升後不可能維持原比",
        "truth": true,
        "reason": "由(5k+10):(4k+10)=5:4會推得40=50矛盾，可知不可能保持原比。"
      },
      {
        "choice": "一定變成 15:14:13",
        "truth": false,
        "reason": "5、4、3是比的項，不是原來的公升數，不能直接各加10。"
      }
    ],
    "misconceptionTarget": "把相同加量誤當相同乘數。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "各槽加水量同為 10 公升；比例無單位。",
    "ambiguityAndBoundaryAudit": "『每槽都再加入相同的 10 公升』是對三個正數量加同一正數，不是各增加10%；代數比較可證明無任何k>0能維持原比。",
    "difficultyReason": "需把連比寫成5k、4k、3k，再用交叉相乘驗證固定加量不能保持原比。",
    "literacyContextNecessity": "儲槽操作區分固定加量與按比例補充，直接決定新配比是否改變，情境不可刪。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "80f38bc7a15bd86aea3b71163991209d0a36ef182751c102f656b71253de6a3b"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u18-s005-cr001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-properties",
    "lockedSkillOrder": 5,
    "itemType": "constructed-response",
    "prompt": "已知 x：y：z=4：7：9。證明 (x+y)：(y+z)：(z+x)=11：16：13。",
    "requiredWork": "必須以共同倍數表示 x、y、z，再代入和式。",
    "standardSolution": "由 x：y：z=4：7：9，可設 x=4k、y=7k、z=9k（k≠0）。則 x+y=11k、y+z=16k、z+x=13k，所以所求連比為11：16：13。",
    "alternativeMethod": "可利用連比同乘性，將代表數4、7、9直接代入所有同次齊次的一次和式，再說明共同倍率會消去。",
    "reasoningSteps": [
      "設 x=4k、y=7k、z=9k。",
      "分別求三個和。",
      "消去共同非零因數 k。",
      "得到結論。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整建立共同倍數並正確推出11：16：13。"
      },
      {
        "score": 2,
        "criteria": "主要推理正確但漏寫 k≠0 或一個和算錯。"
      },
      {
        "score": 1,
        "criteria": "只把4+7、7+9、9+4列出，未說明可如此代入的理由。"
      },
      {
        "score": 0,
        "criteria": "沒有呈現可辨識的相關比例或相似推理，或答案與過程均無法支持題目要求。"
      }
    ],
    "partialCreditRules": [
      "比例式或相似判定正確但後續算術錯誤，可依已完成的關鍵步驟給 2 分。",
      "只有正確公式但沒有把題目數據正確代入，通常給 1 分。"
    ],
    "followThroughPolicy": "若早期僅有單一算術錯誤，後續使用該錯誤值的推理一致且方法正確，保留後續方法分；不得因錯誤值巧合得到正確答案而補足滿分。",
    "unitAndNotationRules": "代數比值無單位；若 k=0 則三數皆0而比無意義，因此須排除。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "以代入展開核對三項皆含同一因數 k，證明不依賴 k 的具體值。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "0e8ccc30b2f50feee0d45d3af5fd85b14db8ab80fa1e1fb76ca9f56cfe253a90"
  },
  {
    "questionId": "u18-s005-cr002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-properties",
    "lockedSkillOrder": 5,
    "itemType": "constructed-response",
    "prompt": "若 a：b：c=2：5：7，且 3a+2b−c=18，求 a+b+c。",
    "requiredWork": "以共同倍數代入線性條件，注意係數與負號。",
    "standardSolution": "設 a=2k、b=5k、c=7k。則 3a+2b−c=6k+10k−7k=9k=18，故 k=2。a+b+c=(2+5+7)k=14×2=28。",
    "alternativeMethod": "先計算條件式對應份數3×2+2×5−7=9份，18÷9=2，再算總份數14×2。",
    "reasoningSteps": [
      "設三數為2k、5k、7k。",
      "代入條件並正確處理−c。",
      "求 k=2。",
      "求總和28。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整列式並得到28。"
      },
      {
        "score": 2,
        "criteria": "方法正確但有一處係數算術錯誤；或只漏最後總和單一步驟。"
      },
      {
        "score": 1,
        "criteria": "只寫 a=2k、b=5k、c=7k 或未正確代入條件。"
      },
      {
        "score": 0,
        "criteria": "沒有呈現可辨識的相關比例或相似推理，或答案與過程均無法支持題目要求。"
      }
    ],
    "partialCreditRules": [
      "比例式或相似判定正確但後續算術錯誤，可依已完成的關鍵步驟給 2 分。",
      "只有正確公式但沒有把題目數據正確代入，通常給 1 分。"
    ],
    "followThroughPolicy": "若早期僅有單一算術錯誤，後續使用該錯誤值的推理一致且方法正確，保留後續方法分；不得因錯誤值巧合得到正確答案而補足滿分。",
    "unitAndNotationRules": "a、b、c 為純數；負號必須保留。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "以份數法與代入法驗算，條件值為18且總和28。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "12d025c37f4df6490d283d6b03c3cd2e09c7a7f367c14ac92829899b9940c55e"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u18-s005-v001-semantic-review-r1",
    "questionId": "u18-s005-v001",
    "unitId": "u18",
    "skillId": "continued-ratio-properties",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "c6ea0b42dee487cdba0aeea71d0f4462a86005716dfa1ba954bc2b1a3509f640",
    "independentSolution": "設 A=2k、B=3k、C=5k，則 A+B=5k，故 (A+B):C=5k:5k=1:1。",
    "derivedAnswer": "1:1",
    "storedAnswer": "1:1",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「連比性質」概念，未要求高中延伸。"
    },
    "difficultyReason": "直接由份數相加形成新比。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：設 A=2k、B=3k、C=5k，則 A+B=5k，故 (A+B):C=5k:5k=1:1。 四個選項逐一核對後，只有「1:1」符合；主要排除點是「部分和的份數漏加或順序顛倒。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s005-v002-semantic-review-r1",
    "questionId": "u18-s005-v002",
    "unitId": "u18",
    "skillId": "continued-ratio-properties",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "1f7dc4af98754a6b6e2b9ba2fce14909de833a76a7f91fa0379aa7ad94ef27b7",
    "independentSolution": "令 X=4k、Y=k、Z=5k，則 Y/(X+Y+Z)=k/(10k)=1/10。",
    "derivedAnswer": "1/10",
    "storedAnswer": "1/10",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「連比性質」概念，未要求高中延伸。"
    },
    "difficultyReason": "基本部分占總量比例。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：令 X=4k、Y=k、Z=5k，則 Y/(X+Y+Z)=k/(10k)=1/10。 四個選項逐一核對後，只有「1/10」符合；主要排除點是「分母沒有包含全部構成總量的項。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s005-v003-semantic-review-r1",
    "questionId": "u18-s005-v003",
    "unitId": "u18",
    "skillId": "continued-ratio-properties",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "9b1b51de887ca54423a9f7e4112dbc62cd3428298d242df8a88d60bd6b97ee3f",
    "independentSolution": "設三量為 7k、4k、2k；兩差分別 3k、2k，共同 k 約去得到 3:2。",
    "derivedAnswer": "3:2",
    "storedAnswer": "3:2",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「連比性質」概念，未要求高中延伸。"
    },
    "difficultyReason": "簡單分比，兩差皆為正。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：設三量為 7k、4k、2k；兩差分別 3k、2k，共同 k 約去得到 3:2。 四個選項逐一核對後，只有「3:2」符合；主要排除點是「把連比中的差運算誤成加法或絕對值順序混亂。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s005-v004-semantic-review-r1",
    "questionId": "u18-s005-v004",
    "unitId": "u18",
    "skillId": "continued-ratio-properties",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "ead709de08f847548618b23f0ab6f0a499a3f336c63e569c559a74e27e8a1cdb",
    "independentSolution": "取 k=1 測試，p=3、q=8、r=5，故 r:p:q=5:3:8。",
    "derivedAnswer": "5:3:8",
    "storedAnswer": "5:3:8",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「連比性質」概念，未要求高中延伸。"
    },
    "difficultyReason": "考對應順序而非計算。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：取 k=1 測試，p=3、q=8、r=5，故 r:p:q=5:3:8。 四個選項逐一核對後，只有「5:3:8」符合；主要排除點是「只記數字集合，沒有跟著量名重排。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s005-v005-semantic-review-r1",
    "questionId": "u18-s005-v005",
    "unitId": "u18",
    "skillId": "continued-ratio-properties",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "2781d73b47213601f55be420ec5e3f004d5c2a1a17853aa4f5227347405a029b",
    "independentSolution": "設 A=5k、B=7k、C=9k，B+C=16k，所以 5k:16k=5:16。",
    "derivedAnswer": "5:16",
    "storedAnswer": "5:16",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「連比性質」概念，未要求高中延伸。"
    },
    "difficultyReason": "由連比形成部分對部分的合比。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：設 A=5k、B=7k、C=9k，B+C=16k，所以 5k:16k=5:16。 四個選項逐一核對後，只有「5:16」符合；主要排除點是「忽略括號，只取其中一項。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s005-v006-semantic-review-r1",
    "questionId": "u18-s005-v006",
    "unitId": "u18",
    "skillId": "continued-ratio-properties",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "0b931c8204d0704d46cdbe40d3a2888f55898c5e78354ffd927da9631959a350",
    "independentSolution": "令共同倍數 k 約去，第一式為 6k/16k=3/8；其餘數值分別 2/5、21/10、9/4。",
    "derivedAnswer": "A/(A+B)=3/8",
    "storedAnswer": "A/(A+B)=3/8",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「連比性質」概念，未要求高中延伸。"
    },
    "difficultyReason": "需逐一驗證四個由和差構成的關系。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：令共同倍數 k 約去，第一式為 6k/16k=3/8；其餘數值分別 2/5、21/10、9/4。 四個選項逐一核對後，只有「A/(A+B)=3/8」符合；主要排除點是「看到原比可約分就直接套入不相關分母。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s005-v007-semantic-review-r1",
    "questionId": "u18-s005-v007",
    "unitId": "u18",
    "skillId": "continued-ratio-properties",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "efd34bd9e28f6cdff0609e016cf82ad601b1dac42181b481597ad8b3a5f44a59",
    "independentSolution": "設 A=2k、B=5k、C=7k，14k=84 得 k=6，C-A=5k=30。",
    "derivedAnswer": "30",
    "storedAnswer": "30",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「連比性質」概念，未要求高中延伸。"
    },
    "difficultyReason": "連比性質與實際總量結合。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：設 A=2k、B=5k、C=7k，14k=84 得 k=6，C-A=5k=30。 四個選項逐一核對後，只有「30」符合；主要排除點是「先求各量後把差寫成和，或差份數算錯。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s005-v008-semantic-review-r1",
    "questionId": "u18-s005-v008",
    "unitId": "u18",
    "skillId": "continued-ratio-properties",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "29da40e3718ea06db009f5d0633e8e30dd04bce9da452f0da6785c4991151c80",
    "independentSolution": "原比 4:6:9 加 1 後為 5:7:10，無法用同一倍率從原比得到，所以不一定相等。",
    "derivedAnswer": "(a+1):(b+1):(c+1)",
    "storedAnswer": "(a+1):(b+1):(c+1)",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "允許代數上的非零連比，因此三項同乘 -1 保持比值；實際正量情境通常不用負連比。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「連比性質」概念，未要求高中延伸。"
    },
    "difficultyReason": "需區分乘法不變性與加法不變性的反例。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：原比 4:6:9 加 1 後為 5:7:10，無法用同一倍率從原比得到，所以不一定相等。 四個選項逐一核對後，只有「(a+1):(b+1):(c+1)」符合；主要排除點是「把同加一數誤認為同乘。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s005-v009-semantic-review-r1",
    "questionId": "u18-s005-v009",
    "unitId": "u18",
    "skillId": "continued-ratio-properties",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "e501202109d897d22efce505e93f61a9ca157a9b005a0105180cdb3714297007",
    "independentSolution": "設 A=3k、B=4k、C=6k，則比為 9k/10k=9/10=27/30。",
    "derivedAnswer": "可能，因為 9/10=27/30",
    "storedAnswer": "可能，因為 9/10=27/30",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「連比性質」概念，未要求高中延伸。"
    },
    "difficultyReason": "需要理解共同倍數約去與等值分數。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：設 A=3k、B=4k、C=6k，則比為 9k/10k=9/10=27/30。 四個選項逐一核對後，只有「可能，因為 9/10=27/30」符合；主要排除點是「把等值分數誤認為分子分母必須等於份數。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s005-v010-semantic-review-r1",
    "questionId": "u18-s005-v010",
    "unitId": "u18",
    "skillId": "continued-ratio-properties",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "ee061bf5b30e5d7426b6f50180575c367d58372de8a582ed83e93e24d1b11fe1",
    "independentSolution": "可設三項為 3k、2k、7k；脂肪占比 2k/(12k)=1/6。",
    "derivedAnswer": "1/6",
    "storedAnswer": "1/6",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "『只計這三項』排除水分與其他成分，分母範圍明確。",
      "units": "同為質量，單位約去；答案為比例。",
      "scope": "只使用國中會考範圍內的「連比性質」概念，未要求高中延伸。"
    },
    "difficultyReason": "從標示比判斷指定整體中的成分占比。",
    "literacyNecessityReview": "營養標示的占比必須以題目限定的三項總質量為分母，情境決定整體範圍。",
    "reviewerNote": "重新由已知條件獨立計算：可設三項為 3k、2k、7k；脂肪占比 2k/(12k)=1/6。 四個選項逐一核對後，只有「1/6」符合；主要排除點是「分母没有按照題目指定的三項整體。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s005-v011-semantic-review-r1",
    "questionId": "u18-s005-v011",
    "unitId": "u18",
    "skillId": "continued-ratio-properties",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "ebd26c70bda0db0c0dcc089f2be65d128ed828cf15048159202fa4bf749f986b",
    "independentSolution": "設原張數 8k、3k、k；移除 k 後剩 8k 與 3k，比仍為 8:3。",
    "derivedAnswer": "8:3",
    "storedAnswer": "8:3",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題目是取消贈票而非改發給其他票種，因此普通與優待數量不變。",
      "units": "票券張數為同類離散量；比例 8:3。",
      "scope": "只使用國中會考範圍內的「連比性質」概念，未要求高中延伸。"
    },
    "difficultyReason": "需區分移除類別與重新分配的不同影響。",
    "literacyNecessityReview": "票券取消改變總量但不改變未調整類別的相對張數，必須依類別變動解讀。",
    "reviewerNote": "重新由已知條件獨立計算：設原張數 8k、3k、k；移除 k 後剩 8k 與 3k，比仍為 8:3。 四個選項逐一核對後，只有「8:3」符合；主要排除點是「刪除一項後把該項份數加到其他類別。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s005-v012-semantic-review-r1",
    "questionId": "u18-s005-v012",
    "unitId": "u18",
    "skillId": "continued-ratio-properties",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "80f38bc7a15bd86aea3b71163991209d0a36ef182751c102f656b71253de6a3b",
    "independentSolution": "設原水量為5k、4k、3k，其中k>0。若加10公升後仍為5:4，則(5k+10):(4k+10)=5:4，交叉相乘20k+40=20k+50，得到40=50矛盾，所以不可能維持原比。",
    "derivedAnswer": "不會，固定加上 10 公升後不可能維持原比",
    "storedAnswer": "不會，固定加上 10 公升後不可能維持原比",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹明示原水量比與每槽同加10公升，所求是新比是否仍為5:4:3。",
      "boundary": "同加10公升是固定加量，不是各增加10%；原水量均為正數。",
      "units": "三槽水量與加水量都以公升表示，比值本身無單位。",
      "scope": "只使用國中連比的公共倍數表示與比例性質。"
    },
    "difficultyReason": "需用代數表示連比並驗證固定加量是否保持原比。",
    "literacyNecessityReview": "儲槽加水情境明確區分固定加量與按比例增加，是判斷的核心。",
    "reviewerNote": "設原水量為5k、4k、3k。若各加10公升後仍保持前兩項5:4，則(5k+10):(4k+10)=5:4，交叉相乘得20k+40=20k+50，即40=50，不可能。因此唯一正確選項是『不會，固定加上10公升後不可能維持原比』。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];

