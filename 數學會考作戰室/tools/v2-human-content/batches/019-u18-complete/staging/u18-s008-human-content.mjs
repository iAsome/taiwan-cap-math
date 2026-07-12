// SERIALIZATION OF REVIEWED CHATGPT HUMAN-AUTHORED CONTENT.

// BATCH-LOCAL STAGING ONLY. DO NOT EDIT OR ACTIVATE IN PRODUCTION.

export const UNIT_ID = "u18";

export const SKILL_SLOT = "s008";

export const SKILL_ID = "similarity-sas";

export const LECTURE = {
  "lectureId": "u18-s008-lecture-r1",
  "unitId": "u18",
  "numericUnitId": 18,
  "topicId": "u18-similarity",
  "skillId": "similarity-sas",
  "lockedSkillOrder": 8,
  "lockedSkillTitle": "SAS 相似",
  "title": "SAS 相似：兩邊成比例且夾角相等",
  "audience": "臺灣國中零基礎至國中教育會考數學滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能辨認兩組成比例邊之間的夾角。",
    "能檢查兩組對應邊比是否相等。",
    "能用 SAS 判定三角形相似並寫正確順序。",
    "能辨認非夾角相等不足以使用 SAS。"
  ],
  "prerequisiteBridge": {
    "prerequisites": [
      {
        "skillId": "similarity-aa",
        "title": "AA 相似",
        "requiredLevel": "能運用「AA 相似」完成本節所需的基本判斷與計算，並能說明主要條件。"
      }
    ],
    "bridgeExplanation": "本節承接「AA 相似」，先複習其核心判斷，再把方法推進到「SAS 相似」。"
  },
  "glossary": [
    {
      "term": "夾角",
      "definition": "兩條指定邊共同端點所形成的角。"
    },
    {
      "term": "SAS 判定",
      "definition": "兩組對應邊成比例，且這兩組邊的夾角相等時，兩三角形相似。"
    },
    {
      "term": "對應邊比",
      "definition": "按同一方向比較兩三角形對應邊所得的比。"
    },
    {
      "term": "非夾角",
      "definition": "不位於兩組已知邊之間的角；只知非夾角相等通常不足以判定。"
    }
  ],
  "notation": [
    {
      "symbol": "AB/DE=AC/DF",
      "meaning": "A 周圍兩邊與 D 周圍兩邊成比例。"
    },
    {
      "symbol": "∠A=∠D",
      "meaning": "上述兩組邊的夾角相等。"
    },
    {
      "symbol": "SAS",
      "meaning": "Side-Angle-Side，邊角邊相似判定。"
    }
  ],
  "conceptNarrative": [
    "SAS 相似不是任意兩邊加任意一角。相等的角必須正好夾在兩組成比例的邊之間，這個位置條件是判定成立的關鍵。",
    "先找相等角的頂點，再檢查從該頂點伸出的兩邊。例如比較 ∠A 與 ∠D，應比較 AB、AC 與 DE、DF。",
    "兩組邊比必須使用同一方向。若 AB/DE=2/3，另一組也應寫 AC/DF，而不是 DF/AC。",
    "若角不是夾角，可能出現兩個不同形狀的三角形都滿足資料，因此不能僅憑 SSA 判定相似。"
  ],
  "formalDefinitions": [
    {
      "name": "SAS 相似判定",
      "statement": "若兩三角形有兩組對應邊成比例，且其夾角相等，則兩三角形相似。"
    },
    {
      "name": "夾角定位",
      "statement": "指定兩邊共有的頂點即為夾角頂點。"
    }
  ],
  "formulas": [
    {
      "formula": "AB/DE=AC/DF 且 ∠A=∠D ⇒ △ABC∼△DEF",
      "conditions": [
        "∠A、∠D 分別是 AB 與 AC、DE 與 DF 的夾角"
      ],
      "meaning": "SAS 判定。"
    },
    {
      "formula": "AB·DF=AC·DE",
      "conditions": [
        "用交叉相乘檢查兩邊比"
      ],
      "meaning": "兩組邊比例的等價式。"
    }
  ],
  "nonApplicableCases": [
    "兩組邊成比例但所給相等角不是夾角時，不能使用 SAS。",
    "只知道夾角相等但只有一組邊比，不足以判定。",
    "兩組邊比若一組用小/大、另一組用大/小，結論無效。",
    "角度相等必須有已知、共同角或幾何定理支持。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "找出可能相等的夾角頂點。",
      "check": "角的兩臂是哪兩條已知邊？"
    },
    {
      "step": 2,
      "instruction": "配對角兩側的邊。",
      "check": "AB 對 DE、AC 對 DF 是否合理？"
    },
    {
      "step": 3,
      "instruction": "計算兩組邊比並統一方向。",
      "check": "兩比是否完全相等？"
    },
    {
      "step": 4,
      "instruction": "說明夾角相等的理由。",
      "check": "是已知角、共同角或對頂角？"
    },
    {
      "step": 5,
      "instruction": "依頂點配對寫相似結論。",
      "check": "其餘頂點順序是否由邊配對決定？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "AB=6、AC=9、DE=10、DF=15，且 ∠A=∠D，判定兩三角形。",
      "solutionSteps": [
        "AB/DE=6/10=3/5。",
        "AC/DF=9/15=3/5。",
        "∠A、∠D 是兩組邊夾角，所以由 SAS 相似。"
      ],
      "answer": "相似"
    },
    {
      "exampleId": "L2",
      "prompt": "△ABC 與 △ADE 共用 ∠A，AB=4、AC=6、AD=10、AE=15，判定是否相似。",
      "solutionSteps": [
        "AB/AD=4/10=2/5。",
        "AC/AE=6/15=2/5。",
        "夾角 ∠A 共用，由 SAS 得相似。"
      ],
      "answer": "△ABC∼△ADE"
    },
    {
      "exampleId": "L3",
      "prompt": "兩三角形有邊 5、8 與 10、16 成比例，且一組非夾角相等，可否用 SAS？",
      "solutionSteps": [
        "兩組邊比雖相等。",
        "但相等角不在兩組邊之間。",
        "不符合 SAS 的夾角條件。"
      ],
      "answer": "不可"
    },
    {
      "exampleId": "L4",
      "prompt": "若 AB/DE=BC/EF 且 ∠B=∠E，應如何排列相似順序？",
      "solutionSteps": [
        "∠B、∠E 是 AB與BC、DE與EF 的夾角。",
        "AB 對 DE，所以 A↔D；BC 對 EF，所以 C↔F。",
        "得到 △ABC∼△DEF。"
      ],
      "answer": "△ABC∼△DEF"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "看到兩邊比相等就判相似。",
      "why": "漏掉夾角條件。",
      "correction": "再確認兩組邊的夾角相等。"
    },
    {
      "mistake": "把非夾角當夾角。",
      "why": "沒有找共同端點。",
      "correction": "在兩條已知邊的共同端點圈出角。"
    },
    {
      "mistake": "比例方向一正一反。",
      "why": "只看數值能否約分。",
      "correction": "所有分子取自同一三角形。"
    },
    {
      "mistake": "相似順序只依角配一個頂點。",
      "why": "其餘頂點未依邊配對。",
      "correction": "用兩條邊的另一端決定剩餘配對。"
    },
    {
      "mistake": "把 SAS 相似與 SAS 全等混同。",
      "why": "忽略相似要求比例、全等要求邊長相等。",
      "correction": "相似邊可不同長，只需同一比例。"
    }
  ],
  "selfCheck": [
    "相等角是兩組已知邊的夾角嗎？",
    "兩組邊比方向一致嗎？",
    "角相等有理由嗎？",
    "頂點順序由角與邊共同決定嗎？",
    "我是否誤用 SSA？"
  ],
  "summary": [
    "SAS 相似需要兩組邊成比例與夾角相等。",
    "夾角是兩條指定邊共同端點的角。",
    "比例方向必須一致。",
    "非夾角相等的 SSA 不足以判定。"
  ],
  "connections": {
    "previous": "AA 使用兩組角判定相似。",
    "next": [
      "SSS 將用三組邊比例判定，不需角度資料。",
      "相似比與周長比會使用判定後的固定縮放倍數。"
    ]
  },
  "figureReferences": [
    {
      "figureId": "u18-sas-q011",
      "purpose": "協助辨認「SAS 相似」中的對應關係；圖不按比例時不得憑外觀猜答案。"
    }
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u18-s008-v001",
      "u18-s008-v002",
      "u18-s008-v003",
      "u18-s008-v004",
      "u18-s008-v005",
      "u18-s008-v006",
      "u18-s008-v007",
      "u18-s008-v008",
      "u18-s008-v009",
      "u18-s008-v010",
      "u18-s008-v011",
      "u18-s008-v012"
    ],
    "constructedResponseIds": [
      "u18-s008-cr001",
      "u18-s008-cr002"
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
    "reviewNote": "所有 SAS 範例均逐一標明夾角的兩臂，並設置一個非夾角反例；比例方向與相似字母順序已交叉核對，避免把 SAS 相似誤寫成全等條件。"
  },
  "contentSha256": "a2459bbc2c3d9e5593b6045181b57fcc1a85f85f7f07385f065ef42994a1bcaf"
};

export const QUESTIONS = [
  {
    "questionId": "u18-s008-v001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sas",
    "lockedSkillOrder": 8,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "SAS 相似判定中的 A 所代表的角必須是何者？",
    "text": "SAS 相似判定中的 A 所代表的角必須是何者？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "任意一個對應角",
      "最大角",
      "直角",
      "兩組成比例邊的夾角"
    ],
    "answerIndex": 3,
    "independentSolution": "由字母順序 Side-Angle-Side 可知角在兩邊之間，必須是共同端點形成的夾角。",
    "explanation": "SAS 要求兩組對應邊成比例，且這兩組邊之間的夾角相等。",
    "steps": [
      "辨認 S、A、S 的排列。",
      "A 位在兩個 S 之間。",
      "因此是兩邊的夾角。"
    ],
    "optionAnalysis": [
      {
        "choice": "任意一個對應角",
        "truth": false,
        "reason": "非夾角相等通常不足以判定。"
      },
      {
        "choice": "最大角",
        "truth": false,
        "reason": "SAS 不要求使用最大角。"
      },
      {
        "choice": "直角",
        "truth": false,
        "reason": "夾角不一定是直角。"
      },
      {
        "choice": "兩組成比例邊的夾角",
        "truth": true,
        "reason": "依獨立推導可得到 兩組成比例邊的夾角，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "把任何已知相等角都當成 SAS 的角。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "直接辨認 SAS 的位置條件。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d100fb8ca563a429172882b02e84e314be9a727c35bcc24e35e2edb9072beb41"
  },
  {
    "questionId": "u18-s008-v002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sas",
    "lockedSkillOrder": 8,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "△ABC 與 △DEF 中，AB=6、AC=9、DE=10、DF=15，且 ∠A=∠D。下列何者正確？",
    "text": "△ABC 與 △DEF 中，AB=6、AC=9、DE=10、DF=15，且 ∠A=∠D。下列何者正確？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "不能相似，因為 6≠10",
      "兩三角形可由 SAS 判定相似",
      "只能由 AA 判定",
      "一定全等"
    ],
    "answerIndex": 1,
    "independentSolution": "A 周圍的兩邊 6、9 與 D 周圍的 10、15 同比放大 5/3，夾角又相等，故相似。",
    "explanation": "AB/DE=6/10=3/5，AC/DF=9/15=3/5，且 ∠A、∠D 為夾角，所以由 SAS 相似。",
    "steps": [
      "算兩組邊比。",
      "確認夾角相等。",
      "套用 SAS。"
    ],
    "optionAnalysis": [
      {
        "choice": "不能相似，因為 6≠10",
        "truth": false,
        "reason": "相似只要求成比例，不要求邊等長。"
      },
      {
        "choice": "兩三角形可由 SAS 判定相似",
        "truth": true,
        "reason": "依獨立推導可得到 兩三角形可由 SAS 判定相似，符合所有已知條件。"
      },
      {
        "choice": "只能由 AA 判定",
        "truth": false,
        "reason": "題目只給一組角，主要條件是 SAS。"
      },
      {
        "choice": "一定全等",
        "truth": false,
        "reason": "對應邊長不同，不是全等。"
      }
    ],
    "misconceptionTarget": "把相似邊比例誤認為邊必須相等。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "數值比例直接且夾角明示。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "bf03037da072322a4717b4cfefa606279182d1ee98d14ba65d951247f86f3eae"
  },
  {
    "questionId": "u18-s008-v003",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sas",
    "lockedSkillOrder": 8,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "若 AB/DE=BC/EF，且 ∠B=∠E，則符合 SAS 的理由為何？",
    "text": "若 AB/DE=BC/EF，且 ∠B=∠E，則符合 SAS 的理由為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "∠B 與 ∠E 分別是 AB、BC 和 DE、EF 的夾角",
      "因為 B、E 都是三角形第二個頂點",
      "因為兩組邊長相等",
      "因為任何一組角相等都可以"
    ],
    "answerIndex": 0,
    "independentSolution": "AB 與 BC 相交於 B，DE 與 EF 相交於 E，故 ∠B、∠E 正好是夾角。",
    "explanation": "AB、BC 共同端點是 B；DE、EF 共同端點是 E，所以所給相等角正是兩組比例邊的夾角。",
    "steps": [
      "找第一組兩邊的共同端點 B。",
      "找第二組共同端點 E。",
      "確認角位於兩邊之間。"
    ],
    "optionAnalysis": [
      {
        "choice": "∠B 與 ∠E 分別是 AB、BC 和 DE、EF 的夾角",
        "truth": true,
        "reason": "依獨立推導可得到 ∠B 與 ∠E 分別是 AB、BC 和 DE、EF 的夾角，符合所有已知條件。"
      },
      {
        "choice": "因為 B、E 都是三角形第二個頂點",
        "truth": false,
        "reason": "字母位置本身不是幾何理由。"
      },
      {
        "choice": "因為兩組邊長相等",
        "truth": false,
        "reason": "題目只說比例相等。"
      },
      {
        "choice": "因為任何一組角相等都可以",
        "truth": false,
        "reason": "必須是兩組已知邊的夾角。"
      }
    ],
    "misconceptionTarget": "只看角相等，未確認是否位於兩邊之間。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "基本夾角定位。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "84ad0d9beac366b735171d2d29eaabd445bba221a8c5632668156fa9cf99feec"
  },
  {
    "questionId": "u18-s008-v004",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sas",
    "lockedSkillOrder": 8,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "△ABC 與 △ADE 共用 ∠A。若 AB=8、AC=12、AD=14、AE=21，則下列何者正確？",
    "text": "△ABC 與 △ADE 共用 ∠A。若 AB=8、AC=12、AD=14、AE=21，則下列何者正確？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "△ABC∼△AED",
      "兩三角形不相似",
      "△ABC∼△ADE",
      "兩三角形全等"
    ],
    "answerIndex": 2,
    "independentSolution": "B 對應 D、C 對應 E，兩組邊比均 4:7，夾角 A 相同，所以相似順序為 ABC 對 ADE。",
    "explanation": "AB/AD=8/14=4/7，AC/AE=12/21=4/7，且 ∠A 共用，由 SAS 得 △ABC∼△ADE。",
    "steps": [
      "比較 A 兩側的邊。",
      "化簡兩比。",
      "依邊配對寫順序。"
    ],
    "optionAnalysis": [
      {
        "choice": "△ABC∼△AED",
        "truth": false,
        "reason": "此順序會把 AB 對 AE，比例不符。"
      },
      {
        "choice": "兩三角形不相似",
        "truth": false,
        "reason": "8/14=12/21=4/7，且夾角共用。"
      },
      {
        "choice": "△ABC∼△ADE",
        "truth": true,
        "reason": "依獨立推導可得到 △ABC∼△ADE，符合所有已知條件。"
      },
      {
        "choice": "兩三角形全等",
        "truth": false,
        "reason": "邊長尺度不同。"
      }
    ],
    "misconceptionTarget": "相似順序沒有依邊配對。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "共用夾角與分數比例判定。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2769de560375b004117d9ea24a97708549c9b33d0818cd88f2f419266d80a5a8"
  },
  {
    "questionId": "u18-s008-v005",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sas",
    "lockedSkillOrder": 8,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩三角形有兩組邊比 2:3，且一組相等角不是這兩組邊的夾角。能否直接用 SAS 判定相似？",
    "text": "兩三角形有兩組邊比 2:3，且一組相等角不是這兩組邊的夾角。能否直接用 SAS 判定相似？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "能，因為已有兩邊比和一角",
      "不能",
      "能，但只能在直角三角形中",
      "一定全等"
    ],
    "answerIndex": 1,
    "independentSolution": "即使邊比相同，非夾角可能對應不同形狀；缺少充分條件，所以不能直接判定。",
    "explanation": "SAS 要求相等角是兩組成比例邊的夾角；非夾角資料屬 SSA 型態，一般不足以判定。",
    "steps": [
      "找兩組邊的共同端點。",
      "檢查相等角位置。",
      "因不是夾角而排除 SAS。"
    ],
    "optionAnalysis": [
      {
        "choice": "能，因為已有兩邊比和一角",
        "truth": false,
        "reason": "忽略夾角位置。"
      },
      {
        "choice": "不能",
        "truth": true,
        "reason": "依獨立推導可得到 不能，符合所有已知條件。"
      },
      {
        "choice": "能，但只能在直角三角形中",
        "truth": false,
        "reason": "題目未給其他足夠條件。"
      },
      {
        "choice": "一定全等",
        "truth": false,
        "reason": "邊比 2:3 已表示大小不同。"
      }
    ],
    "misconceptionTarget": "把 SAS 的位置條件省略。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "判斷反例條件，強調 SSA 不足。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "39b3deed0ee312286b56d780862048490e6350e9dbdf793e8bcc625705ff6390"
  },
  {
    "questionId": "u18-s008-v006",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sas",
    "lockedSkillOrder": 8,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "若 AB=5、AC=7、DE=15、DF=21，且 ∠A=∠D，則第一個三角形對第二個三角形的相似比為何？",
    "text": "若 AB=5、AC=7、DE=15、DF=21，且 ∠A=∠D，則第一個三角形對第二個三角形的相似比為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "1:3",
      "3:1",
      "5:7",
      "15:21"
    ],
    "answerIndex": 0,
    "independentSolution": "兩組對應邊都從第一圖到第二圖放大 3 倍，因此第一:第二=1:3。",
    "explanation": "AB:DE=5:15=1:3，AC:DF=7:21=1:3；SAS 成立，相似比為 1:3。",
    "steps": [
      "固定第一對第二方向。",
      "比較 5:15 與 7:21。",
      "化簡為 1:3。"
    ],
    "optionAnalysis": [
      {
        "choice": "1:3",
        "truth": true,
        "reason": "依獨立推導可得到 1:3，符合所有已知條件。"
      },
      {
        "choice": "3:1",
        "truth": false,
        "reason": "方向與題目相反。"
      },
      {
        "choice": "5:7",
        "truth": false,
        "reason": "這是同一三角形內兩邊的比。"
      },
      {
        "choice": "15:21",
        "truth": false,
        "reason": "未跨圖形比較，且可化簡為 5:7。"
      }
    ],
    "misconceptionTarget": "把圖內邊比或反向比當相似比。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "判定相似後讀取指定方向相似比。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3866076cc7e104524614d37da018416720455aa4cbc56bc948816a78175ffa62"
  },
  {
    "questionId": "u18-s008-v007",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sas",
    "lockedSkillOrder": 8,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "△ABC 與 △DEF 中，AB=x+1、AC=12、DE=10、DF=15，且 ∠A=∠D。若可由 SAS 判定相似，則 x 為何？",
    "text": "△ABC 與 △DEF 中，AB=x+1、AC=12、DE=10、DF=15，且 ∠A=∠D。若可由 SAS 判定相似，則 x 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "5",
      "8",
      "7",
      "9"
    ],
    "answerIndex": 2,
    "independentSolution": "SAS 要求 A 周圍兩邊同比；DE 的 10 對應 AB=8，因此 x=7。",
    "explanation": "AC/DF=12/15=4/5，所以 AB/DE 也應為 4/5；(x+1)/10=4/5，x+1=8，x=7。",
    "steps": [
      "求已知邊比 4/5。",
      "列 (x+1)/10=4/5。",
      "解 x=7。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "把 x+1 直接等於 6。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "求得 AB=8 後忘記減 1。"
      },
      {
        "choice": "7",
        "truth": true,
        "reason": "依獨立推導可得到 7，符合所有已知條件。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "把比例方向用成 12/15=10/(x-1)。"
      }
    ],
    "misconceptionTarget": "求得線段長後未還原代數未知數。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 110,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "含代數邊長的 SAS 充分條件反求。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0550612c8da947fc9e8e3b082ce010c67882c88e85668748c0e1fb6f5ff91a01"
  },
  {
    "questionId": "u18-s008-v008",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sas",
    "lockedSkillOrder": 8,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "已知 ∠P=∠X，PQ=9、PR=12、XY=15、XZ=20。若 △PQR∼△XYZ，則 QR:YZ 為何？",
    "text": "已知 ∠P=∠X，PQ=9、PR=12、XY=15、XZ=20。若 △PQR∼△XYZ，則 QR:YZ 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "4:5",
      "9:12",
      "5:3",
      "3:5"
    ],
    "answerIndex": 3,
    "independentSolution": "相似比 PQR:XYZ 已由 9:15 確定為 3:5，所以 QR:YZ=3:5。",
    "explanation": "PQ/XY=9/15=3/5，PR/XZ=12/20=3/5；由 SAS 相似，第三組對應邊 QR:YZ 亦為 3:5。",
    "steps": [
      "驗證兩組邊比。",
      "確認夾角 P↔X。",
      "延伸到第三組邊。"
    ],
    "optionAnalysis": [
      {
        "choice": "4:5",
        "truth": false,
        "reason": "這是 PR:XZ=12:20 化簡錯誤，正確也是 3:5。"
      },
      {
        "choice": "9:12",
        "truth": false,
        "reason": "同一三角形內邊比。"
      },
      {
        "choice": "5:3",
        "truth": false,
        "reason": "方向與題目相反。"
      },
      {
        "choice": "3:5",
        "truth": true,
        "reason": "依獨立推導可得到 3:5，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "判定後忘記所有對應邊共享同一相似比。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "先判定，再推未知第三組邊比。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f29ec3f9f9e97cec578fb90600d54d8d4b750c202159101ba1fea6940c6698fe"
  },
  {
    "questionId": "u18-s008-v009",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sas",
    "lockedSkillOrder": 8,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "某兩三角形資料為邊 4、6 與 10、15，且各自標示的相等角位於長度 4 和 6、10 和 15 之間。若另一邊分別為 7 與 18，兩三角形是否相似？",
    "text": "某兩三角形資料為邊 4、6 與 10、15，且各自標示的相等角位於長度 4 和 6、10 和 15 之間。若另一邊分別為 7 與 18，兩三角形是否相似？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "資料矛盾，不可能同時成立",
      "兩三角形相似，因為前兩邊與夾角符合 SAS",
      "兩三角形不相似，但所有測量都可能正確",
      "兩三角形全等"
    ],
    "answerIndex": 0,
    "independentSolution": "小第三邊 7 乘放大倍率 5/2 得 17.5；與題給 18 不同，因此至少一筆測量或角度標示錯誤。",
    "explanation": "前兩組邊比 4/10=6/15=2/5，且夾角相等，SAS 必推出相似；因此第三邊 7 應對 17.5，而非 18。整組資料互相矛盾。",
    "steps": [
      "由前兩邊與夾角使用 SAS。",
      "以相似比 2:5 推得第三邊應為 17.5。",
      "比較題給 18，判定資料不可能同時成立。"
    ],
    "optionAnalysis": [
      {
        "choice": "資料矛盾，不可能同時成立",
        "truth": true,
        "reason": "依獨立推導可得到 資料矛盾，不可能同時成立，符合所有已知條件。"
      },
      {
        "choice": "兩三角形相似，因為前兩邊與夾角符合 SAS",
        "truth": false,
        "reason": "若相似，大三角形第三邊應為 17.5，不是 18。"
      },
      {
        "choice": "兩三角形不相似，但所有測量都可能正確",
        "truth": false,
        "reason": "前兩邊與夾角若正確就必相似，因此不能同時保留第三邊 18。"
      },
      {
        "choice": "兩三角形全等",
        "truth": false,
        "reason": "對應邊比例 2:5，不可能全等。"
      }
    ],
    "misconceptionTarget": "只使用足以判定的部分資料，沒有核對額外測量是否相容。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 130,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題目要求判斷整組資料是否能同時成立；不能忽略第三邊的矛盾。",
    "difficultyReason": "SAS 充分條件與額外測量數據一致性審核。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4df8bca7f8ab79c81734650412ef7334ca5f0d420200c905a822d8c4eddcaf18"
  },
  {
    "questionId": "u18-s008-v010",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sas",
    "lockedSkillOrder": 8,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "機械臂圖紙中，兩支連桿在接點形成相同的 60° 夾角。小型機的兩桿長 18 cm、24 cm，大型機對應兩桿長 30 cm、40 cm。下列判斷何者正確？",
    "text": "機械臂圖紙中，兩支連桿在接點形成相同的 60° 夾角。小型機的兩桿長 18 cm、24 cm，大型機對應兩桿長 30 cm、40 cm。下列判斷何者正確？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "不相似，因為四條連桿長都不同",
      "相似比小:大=2:3",
      "兩結構由 SAS 相似，相似比小:大=3:5",
      "只能判定全等"
    ],
    "answerIndex": 2,
    "independentSolution": "大結構是小結構的 5/3 倍；兩組邊倍率相同且接點夹角相等，因此相似。",
    "explanation": "18/30=24/40=3/5，且夾角均 60°，由 SAS 相似，小:大相似比 3:5。",
    "steps": [
      "比較兩組連桿。",
      "核對夾角是共同接點的角。",
      "寫指定方向比。"
    ],
    "optionAnalysis": [
      {
        "choice": "不相似，因為四條連桿長都不同",
        "truth": false,
        "reason": "相似允許大小不同。"
      },
      {
        "choice": "相似比小:大=2:3",
        "truth": false,
        "reason": "18:30=3:5，不是 2:3。"
      },
      {
        "choice": "兩結構由 SAS 相似，相似比小:大=3:5",
        "truth": true,
        "reason": "依獨立推導可得到 兩結構由 SAS 相似，相似比小:大=3:5，符合所有已知條件。"
      },
      {
        "choice": "只能判定全等",
        "truth": false,
        "reason": "邊長不相等，且條件是比例。"
      }
    ],
    "misconceptionTarget": "工程結構邊長不同就誤判為不相似。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "連桿均以 cm 表示，比例無單位。",
    "ambiguityAndBoundaryAudit": "兩支連桿在同一接點形成的 60° 明確為夾角。",
    "difficultyReason": "從設計規格驗證 SAS 與縮放比。",
    "literacyContextNecessity": "機械連桿的接點角必須是兩支已知連桿的夾角，這是縮放設計能否沿用的核心。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "461d3955799d62fe3ad6879ff143a01c69ccfccab8a01b62e9a45691b3cc7e85"
  },
  {
    "questionId": "u18-s008-v011",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sas",
    "lockedSkillOrder": 8,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "地圖上兩條道路從交叉口 O 分開，夾角與實地相同。圖上 OA=3 cm、OB=4.5 cm；實地對應距離 OA'=1.2 km、OB'=1.8 km。此資料是否支持圖形相似？",
    "text": "地圖上兩條道路從交叉口 O 分開，夾角與實地相同。圖上 OA=3 cm、OB=4.5 cm；實地對應距離 OA'=1.2 km、OB'=1.8 km。此資料是否支持圖形相似？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "不支持，因為 cm 與 km 不能比較",
      "支持，相似比為 1:4",
      "不支持，因為只知道一組角",
      "支持，兩組邊比皆為 1:40000 且夾角相等"
    ],
    "answerIndex": 3,
    "independentSolution": "120000/3=40000、180000/4.5=40000，兩個實地距離都是圖上 40000 倍，且夹角相同。",
    "explanation": "1.2 km=120000 cm、1.8 km=180000 cm；3:120000=4.5:180000=1:40000，夹角相等，支持 SAS。",
    "steps": [
      "統一實地距離為 cm。",
      "計算兩組圖上:實地比。",
      "結合交叉口夹角。"
    ],
    "optionAnalysis": [
      {
        "choice": "不支持，因為 cm 與 km 不能比較",
        "truth": false,
        "reason": "統一單位後即可比較。"
      },
      {
        "choice": "支持，相似比為 1:4",
        "truth": false,
        "reason": "忽略 1 km=100000 cm。"
      },
      {
        "choice": "不支持，因為只知道一組角",
        "truth": false,
        "reason": "SAS 還給了兩組邊比例。"
      },
      {
        "choice": "支持，兩組邊比皆為 1:40000 且夾角相等",
        "truth": true,
        "reason": "依獨立推導可得到 支持，兩組邊比皆為 1:40000 且夾角相等，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "跨單位比較時漏做十萬倍換算。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "1 km=100000 cm；圖上:實地=1:40000。",
    "ambiguityAndBoundaryAudit": "圖上與實地的 O、A、B 對應明確，夹角由道路交叉口保持。",
    "difficultyReason": "跨單位規格審核與 SAS 結合。",
    "literacyContextNecessity": "地圖比例尺驗證必須同時核對兩條道路距離與交叉角，單位換算不可省略。",
    "visualMode": "figure-supported",
    "figureId": "u18-sas-q011",
    "drawingSpecReference": "figures/u18/u18-sas-q011.svg",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "35ba3acd6942ba7c2a2532bd7244a632e3b64b572681eb22b914f243ea68989e"
  },
  {
    "questionId": "u18-s008-v012",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sas",
    "lockedSkillOrder": 8,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "木工師傅量得兩個三角支架各有兩邊成 4:7 的比例，且標註一組相等角。為了確認能否套用同一裁切模板，還必須確認什麼？",
    "text": "木工師傅量得兩個三角支架各有兩邊成 4:7 的比例，且標註一組相等角。為了確認能否套用同一裁切模板，還必須確認什麼？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "兩支架面積是否相等",
      "相等角是否為那兩組成比例邊的夾角",
      "兩支架周長是否相等",
      "第三邊是否完全等長"
    ],
    "answerIndex": 1,
    "independentSolution": "若角不是夹角，可能出現不同形状支架；確認夹角位置後，才可保證模板形状相同。",
    "explanation": "兩邊比加一角只有在該角是兩邊夾角時才構成 SAS；否則資料不足。",
    "steps": [
      "圈出兩組成比例邊。",
      "找它們的共同端點。",
      "核對相等角是否位於該端點。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩支架面積是否相等",
        "truth": false,
        "reason": "相似模板不要求面積相等。"
      },
      {
        "choice": "相等角是否為那兩組成比例邊的夾角",
        "truth": true,
        "reason": "依獨立推導可得到 相等角是否為那兩組成比例邊的夾角，符合所有已知條件。"
      },
      {
        "choice": "兩支架周長是否相等",
        "truth": false,
        "reason": "大小可以不同。"
      },
      {
        "choice": "第三邊是否完全等長",
        "truth": false,
        "reason": "SAS 不需要第三邊等長。"
      }
    ],
    "misconceptionTarget": "只记住兩邊一角而漏掉角的位置。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "本題為條件判斷，無換算。",
    "ambiguityAndBoundaryAudit": "『各有兩邊成 4:7 的比例』指兩支架之間的兩組對應邊比相同。",
    "difficultyReason": "在制造决策中识別 SAS 的缺失條件。",
    "literacyContextNecessity": "裁切模板能否共用取決於支架形狀是否由 SAS 唯一確定，夾角位置是必要製造條件。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "13c7f4a7f40e19ce405ded24a3e0f812108bc6aebff0947307775fb31f53f14d"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u18-s008-cr001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sas",
    "lockedSkillOrder": 8,
    "itemType": "constructed-response",
    "prompt": "△ABC中AB=6、AC=9、∠A=50°；△DEF中DE=10、DF=15、∠D=50°。證明兩三角形相似並寫出對應。",
    "requiredWork": "必須確認成比例的兩邊夾住已知相等角。",
    "standardSolution": "AB/DE=6/10=3/5，AC/DF=9/15=3/5，且∠A=∠D=50°為這兩組邊的夾角，所以依SAS相似，△ABC∼△DEF；A↔D、B↔E、C↔F。",
    "alternativeMethod": "可用大對小倍率10/6=15/9=5/3，再配合夾角50°。",
    "reasoningSteps": [
      "比較兩組夾角旁邊。",
      "化簡兩組邊比。",
      "確認夾角相等。",
      "下SAS結論並寫對應。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "兩組邊比、夾角與相似記號全部正確。"
      },
      {
        "score": 2,
        "criteria": "判定與比值正確，但未明說角為夾角或對應略有缺漏。"
      },
      {
        "score": 1,
        "criteria": "只比出一組邊或只看到角相等。"
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
    "unitAndNotationRules": "邊長單位一致；角度保留°；比例方向需一致。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "核對∠A確實位於AB與AC之間、∠D位於DE與DF之間，SAS條件完整。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "5b15473e551c615ed7d8c9e29d97ecd121c43574216cc610067a5af7bb7d41ad"
  },
  {
    "questionId": "u18-s008-cr002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sas",
    "lockedSkillOrder": 8,
    "itemType": "constructed-response",
    "prompt": "兩三角形各有一角60°。第一個三角形該角兩旁邊長為4、7；第二個為8、13。判斷能否用SAS證明相似，並說明。",
    "requiredWork": "比較夾角兩側邊的比例，不能只看到一邊倍增。",
    "standardSolution": "雖然夾角都是60°，但4/8=1/2，而7/13≠1/2，所以兩組夾邊不成比例，不能用SAS判定相似；資料也不足以改用其他相似判定。",
    "alternativeMethod": "若兩邊同比，第二條邊應為14而不是13；由此直接指出不符合SAS。",
    "reasoningSteps": [
      "確認角是夾角。",
      "比較4：8與7：13。",
      "指出比例不等。",
      "結論為不能由SAS證明。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確算出兩比例不等，並說明不能用SAS且資料不足。"
      },
      {
        "score": 2,
        "criteria": "結論正確但只以近似敘述比例不同，或漏掉資料不足說明。"
      },
      {
        "score": 1,
        "criteria": "只因角相等就說相似，或只比較4與8。"
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
    "unitAndNotationRules": "邊長只需同一單位；判定題不得虛構第三邊或其他角。",
    "answerOnlyPolicy": "只寫『不相似』而沒有比例證據，給1分；題目嚴格只能得出『不能由SAS證明』，不可過度斷言所有情況下不相似。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "比較1/2與7/13，確認不等；並審核結論用語為『不能用SAS證明』而非無條件宣稱不相似。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "2d2dc3a44b648987fe3cb4caab55b19e0323953e221a6e0816eb40b725795908"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u18-s008-v001-semantic-review-r1",
    "questionId": "u18-s008-v001",
    "unitId": "u18",
    "skillId": "similarity-sas",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "d100fb8ca563a429172882b02e84e314be9a727c35bcc24e35e2edb9072beb41",
    "independentSolution": "由字母順序 Side-Angle-Side 可知角在兩邊之間，必須是共同端點形成的夾角。",
    "derivedAnswer": "兩組成比例邊的夾角",
    "storedAnswer": "兩組成比例邊的夾角",
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
      "scope": "只使用國中會考範圍內的「SAS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "直接辨認 SAS 的位置條件。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：由字母順序 Side-Angle-Side 可知角在兩邊之間，必須是共同端點形成的夾角。 四個選項逐一核對後，只有「兩組成比例邊的夾角」符合；主要排除點是「把任何已知相等角都當成 SAS 的角。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s008-v002-semantic-review-r1",
    "questionId": "u18-s008-v002",
    "unitId": "u18",
    "skillId": "similarity-sas",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "bf03037da072322a4717b4cfefa606279182d1ee98d14ba65d951247f86f3eae",
    "independentSolution": "A 周圍的兩邊 6、9 與 D 周圍的 10、15 同比放大 5/3，夾角又相等，故相似。",
    "derivedAnswer": "兩三角形可由 SAS 判定相似",
    "storedAnswer": "兩三角形可由 SAS 判定相似",
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
      "scope": "只使用國中會考範圍內的「SAS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "數值比例直接且夾角明示。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：A 周圍的兩邊 6、9 與 D 周圍的 10、15 同比放大 5/3，夾角又相等，故相似。 四個選項逐一核對後，只有「兩三角形可由 SAS 判定相似」符合；主要排除點是「把相似邊比例誤認為邊必須相等。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s008-v003-semantic-review-r1",
    "questionId": "u18-s008-v003",
    "unitId": "u18",
    "skillId": "similarity-sas",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "84ad0d9beac366b735171d2d29eaabd445bba221a8c5632668156fa9cf99feec",
    "independentSolution": "AB 與 BC 相交於 B，DE 與 EF 相交於 E，故 ∠B、∠E 正好是夾角。",
    "derivedAnswer": "∠B 與 ∠E 分別是 AB、BC 和 DE、EF 的夾角",
    "storedAnswer": "∠B 與 ∠E 分別是 AB、BC 和 DE、EF 的夾角",
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
      "scope": "只使用國中會考範圍內的「SAS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "基本夾角定位。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：AB 與 BC 相交於 B，DE 與 EF 相交於 E，故 ∠B、∠E 正好是夾角。 四個選項逐一核對後，只有「∠B 與 ∠E 分別是 AB、BC 和 DE、EF 的夾角」符合；主要排除點是「只看角相等，未確認是否位於兩邊之間。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s008-v004-semantic-review-r1",
    "questionId": "u18-s008-v004",
    "unitId": "u18",
    "skillId": "similarity-sas",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "2769de560375b004117d9ea24a97708549c9b33d0818cd88f2f419266d80a5a8",
    "independentSolution": "B 對應 D、C 對應 E，兩組邊比均 4:7，夾角 A 相同，所以相似順序為 ABC 對 ADE。",
    "derivedAnswer": "△ABC∼△ADE",
    "storedAnswer": "△ABC∼△ADE",
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
      "scope": "只使用國中會考範圍內的「SAS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "共用夾角與分數比例判定。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：B 對應 D、C 對應 E，兩組邊比均 4:7，夾角 A 相同，所以相似順序為 ABC 對 ADE。 四個選項逐一核對後，只有「△ABC∼△ADE」符合；主要排除點是「相似順序沒有依邊配對。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s008-v005-semantic-review-r1",
    "questionId": "u18-s008-v005",
    "unitId": "u18",
    "skillId": "similarity-sas",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "39b3deed0ee312286b56d780862048490e6350e9dbdf793e8bcc625705ff6390",
    "independentSolution": "即使邊比相同，非夾角可能對應不同形狀；缺少充分條件，所以不能直接判定。",
    "derivedAnswer": "不能",
    "storedAnswer": "不能",
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
      "scope": "只使用國中會考範圍內的「SAS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "判斷反例條件，強調 SSA 不足。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：即使邊比相同，非夾角可能對應不同形狀；缺少充分條件，所以不能直接判定。 四個選項逐一核對後，只有「不能」符合；主要排除點是「把 SAS 的位置條件省略。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s008-v006-semantic-review-r1",
    "questionId": "u18-s008-v006",
    "unitId": "u18",
    "skillId": "similarity-sas",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "3866076cc7e104524614d37da018416720455aa4cbc56bc948816a78175ffa62",
    "independentSolution": "兩組對應邊都從第一圖到第二圖放大 3 倍，因此第一:第二=1:3。",
    "derivedAnswer": "1:3",
    "storedAnswer": "1:3",
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
      "scope": "只使用國中會考範圍內的「SAS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "判定相似後讀取指定方向相似比。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：兩組對應邊都從第一圖到第二圖放大 3 倍，因此第一:第二=1:3。 四個選項逐一核對後，只有「1:3」符合；主要排除點是「把圖內邊比或反向比當相似比。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s008-v007-semantic-review-r1",
    "questionId": "u18-s008-v007",
    "unitId": "u18",
    "skillId": "similarity-sas",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "0550612c8da947fc9e8e3b082ce010c67882c88e85668748c0e1fb6f5ff91a01",
    "independentSolution": "SAS 要求 A 周圍兩邊同比；DE 的 10 對應 AB=8，因此 x=7。",
    "derivedAnswer": "7",
    "storedAnswer": "7",
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
      "scope": "只使用國中會考範圍內的「SAS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "含代數邊長的 SAS 充分條件反求。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：SAS 要求 A 周圍兩邊同比；DE 的 10 對應 AB=8，因此 x=7。 四個選項逐一核對後，只有「7」符合；主要排除點是「求得線段長後未還原代數未知數。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s008-v008-semantic-review-r1",
    "questionId": "u18-s008-v008",
    "unitId": "u18",
    "skillId": "similarity-sas",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "f29ec3f9f9e97cec578fb90600d54d8d4b750c202159101ba1fea6940c6698fe",
    "independentSolution": "相似比 PQR:XYZ 已由 9:15 確定為 3:5，所以 QR:YZ=3:5。",
    "derivedAnswer": "3:5",
    "storedAnswer": "3:5",
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
      "scope": "只使用國中會考範圍內的「SAS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "先判定，再推未知第三組邊比。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：相似比 PQR:XYZ 已由 9:15 確定為 3:5，所以 QR:YZ=3:5。 四個選項逐一核對後，只有「3:5」符合；主要排除點是「判定後忘記所有對應邊共享同一相似比。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s008-v009-semantic-review-r1",
    "questionId": "u18-s008-v009",
    "unitId": "u18",
    "skillId": "similarity-sas",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "4df8bca7f8ab79c81734650412ef7334ca5f0d420200c905a822d8c4eddcaf18",
    "independentSolution": "小第三邊 7 乘放大倍率 5/2 得 17.5；與題給 18 不同，因此至少一筆測量或角度標示錯誤。",
    "derivedAnswer": "資料矛盾，不可能同時成立",
    "storedAnswer": "資料矛盾，不可能同時成立",
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
      "boundary": "題目要求判斷整組資料是否能同時成立；不能忽略第三邊的矛盾。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「SAS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "SAS 充分條件與額外測量數據一致性審核。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：小第三邊 7 乘放大倍率 5/2 得 17.5；與題給 18 不同，因此至少一筆測量或角度標示錯誤。 四個選項逐一核對後，只有「資料矛盾，不可能同時成立」符合；主要排除點是「只使用足以判定的部分資料，沒有核對額外測量是否相容。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s008-v010-semantic-review-r1",
    "questionId": "u18-s008-v010",
    "unitId": "u18",
    "skillId": "similarity-sas",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "461d3955799d62fe3ad6879ff143a01c69ccfccab8a01b62e9a45691b3cc7e85",
    "independentSolution": "大結構是小結構的 5/3 倍；兩組邊倍率相同且接點夹角相等，因此相似。",
    "derivedAnswer": "兩結構由 SAS 相似，相似比小:大=3:5",
    "storedAnswer": "兩結構由 SAS 相似，相似比小:大=3:5",
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
      "boundary": "兩支連桿在同一接點形成的 60° 明確為夾角。",
      "units": "連桿均以 cm 表示，比例無單位。",
      "scope": "只使用國中會考範圍內的「SAS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "從設計規格驗證 SAS 與縮放比。",
    "literacyNecessityReview": "機械連桿的接點角必須是兩支已知連桿的夾角，這是縮放設計能否沿用的核心。",
    "reviewerNote": "重新由已知條件獨立計算：大結構是小結構的 5/3 倍；兩組邊倍率相同且接點夹角相等，因此相似。 四個選項逐一核對後，只有「兩結構由 SAS 相似，相似比小:大=3:5」符合；主要排除點是「工程結構邊長不同就誤判為不相似。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s008-v011-semantic-review-r1",
    "questionId": "u18-s008-v011",
    "unitId": "u18",
    "skillId": "similarity-sas",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "35ba3acd6942ba7c2a2532bd7244a632e3b64b572681eb22b914f243ea68989e",
    "independentSolution": "120000/3=40000、180000/4.5=40000，兩個實地距離都是圖上 40000 倍，且夹角相同。",
    "derivedAnswer": "支持，兩組邊比皆為 1:40000 且夾角相等",
    "storedAnswer": "支持，兩組邊比皆為 1:40000 且夾角相等",
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
      "boundary": "圖上與實地的 O、A、B 對應明確，夹角由道路交叉口保持。",
      "units": "1 km=100000 cm；圖上:實地=1:40000。",
      "scope": "只使用國中會考範圍內的「SAS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "跨單位規格審核與 SAS 結合。",
    "literacyNecessityReview": "地圖比例尺驗證必須同時核對兩條道路距離與交叉角，單位換算不可省略。",
    "reviewerNote": "重新由已知條件獨立計算：120000/3=40000、180000/4.5=40000，兩個實地距離都是圖上 40000 倍，且夹角相同。 四個選項逐一核對後，只有「支持，兩組邊比皆為 1:40000 且夾角相等」符合；主要排除點是「跨單位比較時漏做十萬倍換算。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s008-v012-semantic-review-r1",
    "questionId": "u18-s008-v012",
    "unitId": "u18",
    "skillId": "similarity-sas",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "13c7f4a7f40e19ce405ded24a3e0f812108bc6aebff0947307775fb31f53f14d",
    "independentSolution": "若角不是夹角，可能出現不同形状支架；確認夹角位置後，才可保證模板形状相同。",
    "derivedAnswer": "相等角是否為那兩組成比例邊的夾角",
    "storedAnswer": "相等角是否為那兩組成比例邊的夾角",
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
      "boundary": "『各有兩邊成 4:7 的比例』指兩支架之間的兩組對應邊比相同。",
      "units": "本題為條件判斷，無換算。",
      "scope": "只使用國中會考範圍內的「SAS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "在制造决策中识別 SAS 的缺失條件。",
    "literacyNecessityReview": "裁切模板能否共用取決於支架形狀是否由 SAS 唯一確定，夾角位置是必要製造條件。",
    "reviewerNote": "重新由已知條件獨立計算：若角不是夹角，可能出現不同形状支架；確認夹角位置後，才可保證模板形状相同。 四個選項逐一核對後，只有「相等角是否為那兩組成比例邊的夾角」符合；主要排除點是「只记住兩邊一角而漏掉角的位置。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u18-sas-q011",
    "unitId": "u18",
    "skillId": "similarity-sas",
    "svgPath": "figures/u18/u18-sas-q011.svg",
    "canvas": {
      "width": 640,
      "height": 420,
      "viewBox": "0 0 640 420"
    },
    "title": "道路交叉角與兩側距離",
    "altText": "地圖與實地各有一個共同交叉角，夾角兩側分別標示 3 公分、4.5 公分與 1.2 公里、1.8 公里。",
    "drawingSpec": {
      "purpose": "讓學生核對夾角兩側的兩組距離是否成比例。",
      "coordinateSystem": "SVG origin at upper-left; x increases rightward and y downward.",
      "exactGeometry": {
        "O": [
          85,
          315
        ],
        "A": [
          265,
          110
        ],
        "B": [
          300,
          315
        ],
        "Oprime": [
          360,
          315
        ],
        "Aprime": [
          520,
          120
        ],
        "Bprime": [
          590,
          315
        ]
      },
      "labels": {
        "OA": "3 cm",
        "OB": "4.5 cm",
        "O'A'": "1.2 km",
        "O'B'": "1.8 km"
      },
      "lineRules": {
        "visible": [
          "OA",
          "OB",
          "O'A'",
          "O'B'"
        ],
        "hidden": []
      },
      "symbolsAndMarks": {
        "equalAngleArcs": [
          "AOB",
          "A'O'B'"
        ]
      },
      "scalePolicy": "not-to-scale",
      "visualInferenceWarning": "圖形不按比例；只能依標示與題目條件推理。",
      "mobileConstraints": "At 320 CSS px width, primary labels must remain at least 9 px apparent height and no label may overlap a segment.",
      "accessibility": {
        "title": "道路交叉角與兩側距離",
        "description": "左側為地圖上從 O 出發的兩道路 OA、OB，右側為實地從 O' 出發的 OA'、OB'；兩夾角以相同角弧標記。",
        "altText": "地圖與實地各有一個共同交叉角，夾角兩側分別標示 3 公分、4.5 公分與 1.2 公里、1.8 公里。"
      }
    },
    "svgAssertions": [
      "id=\"map-oa\"",
      "id=\"site-oa\"",
      "id=\"angle-o\"",
      "1.2 km"
    ],
    "figureReview": {
      "decision": "pass",
      "reviewedAt": "2026-07-12",
      "geometryCheck": "pass",
      "mobileReadability": "pass",
      "answerLeakageCheck": "pass",
      "reviewNote": "角弧一致、四段標示位置清楚；圖形長短不按數值比例，避免以視覺倍率代替單位換算。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "ca043aa9aa6ea758d75bb5d9a9f35d6eb16dcff21754a100347abb09295311a6"
  }
];

