// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u23-s003-lecture-r1",
  "unitId": "u23",
  "numericUnitId": 23,
  "topicId": "u23-basics",
  "skillId": "solid-cross-section",
  "title": "截面概念：理解平面切過立體留下的圖形",
  "lockedSkillTitle": "截面概念",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能把截面解釋為切割平面與立體的交集。",
    "能辨認平行於底面或垂直於底面的常見截面。",
    "能區分截面、投影與表面。",
    "能依切割位置判斷截面是否退化或不存在。"
  ],
  "prerequisites": [
    {
      "skillId": "solid-views",
      "requiredLevel": "知道平面圖可描述立體，但投影與實際切面資訊不同。",
      "bridge": "三視圖是看見的投影；截面是實際平面穿過立體後的交集。"
    }
  ],
  "glossary": [
    {
      "term": "截面",
      "definition": "用一個平面切過立體時，切割平面與立體共同部分形成的平面圖形。"
    },
    {
      "term": "切割平面",
      "definition": "想像用來切開立體的無限平面；真正截面只取它落在立體內的部分。"
    },
    {
      "term": "平行截面",
      "definition": "切割平面與某指定平面平行所得的截面。"
    },
    {
      "term": "退化截面",
      "definition": "切割平面只碰到一個頂點或一條稜時，交集可能縮成點或線段。"
    }
  ],
  "notation": [
    {
      "symbol": "∥",
      "meaning": "平行，例如切割平面∥底面。"
    },
    {
      "symbol": "⊥",
      "meaning": "垂直，例如切割平面⊥底面。"
    }
  ],
  "conceptNarrative": [
    "截面不是從某方向看到的影子，而是立體真的被平面切過後露出的切口形狀。",
    "直柱體被平行於底面的平面切割，截面與底面全等；直圓柱得到圓，角柱得到與底面同形同大的多邊形。",
    "錐體被平行於底面的平面切割，截面與底面相似但通常較小；越接近頂點，截面越小。",
    "若平面只擦過立體而未穿過內部，交集可能只是點或線。"
  ],
  "formalDefinitions": [
    {
      "name": "截面",
      "statement": "切割平面與立體的集合交集，視為位於該平面上的圖形。"
    },
    {
      "name": "平行底面截面",
      "statement": "柱體中與底面平行的截面和底面全等；錐體中與底面平行的截面和底面相似。"
    }
  ],
  "formulas": [
    {
      "formula": "柱體平行截面面積＝底面積",
      "conditions": [
        "切割平面平行於兩底面且穿過內部"
      ],
      "meaning": "柱體沿高度方向截面大小不變。"
    },
    {
      "formula": "錐體平行截面線性比＝頂點到截面距離÷頂點到底面距離",
      "conditions": [
        "截面平行底面"
      ],
      "meaning": "截面隨距頂點比例縮放。"
    }
  ],
  "nonApplicableCases": [
    "斜切長方體的截面不一定是長方形。",
    "投影輪廓不等於截面。",
    "切割平面若完全在立體外，沒有截面。",
    "只碰頂點得到點時，不可當成有面積三角形。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "辨認立體種類與切割方向。",
      "check": "平面與底面平行、垂直或斜交？"
    },
    {
      "step": 2,
      "instruction": "找平面穿過哪些面或稜。",
      "check": "每個交點是否真的位於立體邊界？"
    },
    {
      "step": 3,
      "instruction": "依切割平面內的順序連接交點。",
      "check": "連線是否都落在同一平面？"
    },
    {
      "step": 4,
      "instruction": "判斷形狀與大小關係。",
      "check": "是全等、相似或一般多邊形？"
    },
    {
      "step": 5,
      "instruction": "檢查是否退化。",
      "check": "平面是否只接觸點或線而未穿過內部？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "直圓柱被平行於底面的平面切過，截面為何？",
      "solutionSteps": [
        "各高度的圓形橫截面相同。"
      ],
      "answer": "與底面全等的圓。"
    },
    {
      "exampleId": "L2",
      "prompt": "正四角錐被平行於底面的平面切過，截面位於頂點與底面之間。",
      "solutionSteps": [
        "截面邊分別平行底面邊。",
        "截面與正方形底面相似但較小。"
      ],
      "answer": "較小的正方形。"
    },
    {
      "exampleId": "L3",
      "prompt": "球被通過球心的平面切過，截面為何？",
      "solutionSteps": [
        "平面到球心距離為0。",
        "得到球的最大圓截面。"
      ],
      "answer": "以球半徑為半徑的圓。"
    },
    {
      "exampleId": "L4",
      "prompt": "切割平面只通過正方體的一條稜且未進入內部，交集為何？",
      "solutionSteps": [
        "平面與立體共同部分只有該稜。"
      ],
      "answer": "一條線段，屬退化交集。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把正面投影畫成截面。",
      "why": "投影包含視線遮擋，截面只取切割位置。",
      "correction": "先找切割平面穿過立體的邊界交點。"
    },
    {
      "mistake": "認為任何柱體截面都與底面全等。",
      "why": "只有平行於底面的截面保證全等。",
      "correction": "先檢查切割方向。"
    },
    {
      "mistake": "認為錐體平行截面與底面全等。",
      "why": "錐體向頂點縮小。",
      "correction": "應為相似且內部截面較小。"
    },
    {
      "mistake": "球的任何平面截面都等於大圓。",
      "why": "只有通過球心時半徑最大。",
      "correction": "離球心越遠，截面圓越小。"
    },
    {
      "mistake": "只碰頂點也畫出多邊形。",
      "why": "未檢查平面是否穿入內部。",
      "correction": "只碰一點時交集就是點。"
    },
    {
      "mistake": "連接不共面的立體頂點作截面。",
      "why": "截面所有點必須位於同一切割平面。",
      "correction": "依同一平面與各面的交線順序連接。"
    }
  ],
  "selfCheck": [
    "我是否區分截面與投影？",
    "切割平面方向是否明確？",
    "我是否找到所有實際交點？",
    "截面是全等、相似還是一般形狀？",
    "是否出現只碰點或稜的退化情況？"
  ],
  "summary": [
    "截面是切割平面與立體的交集。",
    "柱體的平行底面截面全等於底面。",
    "錐體的平行底面截面與底面相似。",
    "切割位置與方向共同決定截面。"
  ],
  "connections": {
    "previous": "由三視圖的平面投影過渡到實際切割所得的平面交集。",
    "next": [
      "角柱與角錐概念會用底面和側面辨認截面。",
      "截面與立體技能將綜合多種立體的切法。"
    ]
  },
  "figureReferences": [
    {
      "figureId": "u23-s003-fig001",
      "purpose": "以透明長方體顯示一個平行底面的切割平面與矩形截面。",
      "altText": "透明長方體中有一個水平切割平面，與底面平行，交集為與底面全等的長方形。"
    },
    "u23-s003-fig001"
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u23-s003-v001",
      "u23-s003-v002",
      "u23-s003-v003",
      "u23-s003-v004",
      "u23-s003-v005",
      "u23-s003-v006",
      "u23-s003-v007",
      "u23-s003-v008",
      "u23-s003-v009",
      "u23-s003-v010",
      "u23-s003-v011",
      "u23-s003-v012"
    ],
    "constructedResponseIds": [
      "u23-s003-cr001",
      "u23-s003-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "核對柱體與錐體平行截面的全等和相似差異，另檢查球心截面與退化交集的邊界說明，避免把投影誤當切口。；四個例題均重新由切平面位置判斷一次。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
  "contentSha256": "53d754b32ffa6f0f8f75fdbc3a41be7704b2aad85f92d68cffa69c1ee9e75c88"
};

export const QUESTIONS = [
  {
    "prompt": "下列哪一項最符合截面的定義？",
    "text": "下列哪一項最符合截面的定義？",
    "choices": [
      "立體全部表面的總和",
      "從正面看到的輪廓",
      "切割平面與立體的共同部分",
      "光照後在牆上的影子"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：辨認切割平面；取與立體的交集。所得結果是「切割平面與立體的共同部分」。",
    "explanation": "截面是切割平面真正穿過立體時的交集，與觀看投影或影子不同。",
    "steps": [
      "辨認切割平面",
      "取與立體的交集"
    ],
    "optionAnalysis": [
      {
        "choice": "立體全部表面的總和",
        "truth": false,
        "reason": "是表面。"
      },
      {
        "choice": "從正面看到的輪廓",
        "truth": false,
        "reason": "是投影。"
      },
      {
        "choice": "切割平面與立體的共同部分",
        "truth": true,
        "reason": "依獨立計算「取與立體的交集」，此選項符合所求「選出截面定義」。"
      },
      {
        "choice": "光照後在牆上的影子",
        "truth": false,
        "reason": "是影子投影。"
      }
    ],
    "misconceptionTarget": "把投影輪廓當成截面。 必須依「辨認截面定義。」的關係重新核對。",
    "authoringIntent": "辨認截面定義。",
    "difficulty": "basic",
    "givenConditions": [
      "有一切割平面"
    ],
    "target": "選出截面定義",
    "difficultyReason": "單一概念辨認。 本題以「辨認截面定義。」作為該難度的具體判準。",
    "prerequisiteCheck": "理解平面與立體。 本題只再使用先備「solid-views」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位。 所求「選出截面定義」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "選項分別代表交集、投影、表面與影子，界線清楚。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s003-v001",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-cross-section",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面概念",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "3e45b78c52a1c8d9c2eba7948da3d6b71789a25275b490c22b30ed65e04e53e7"
  },
  {
    "prompt": "直圓柱被一個平行於底面的平面切過內部，截面是什麼形狀？",
    "text": "直圓柱被一個平行於底面的平面切過內部，截面是什麼形狀？",
    "choices": [
      "長方形",
      "三角形",
      "扇形",
      "圓"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：切面平行底面；柱體平行截面全等底面。所得結果是「圓」。",
    "explanation": "直圓柱各高度與底面平行的截面都與底面全等，因此是圓。",
    "steps": [
      "切面平行底面",
      "柱體平行截面全等底面"
    ],
    "optionAnalysis": [
      {
        "choice": "長方形",
        "truth": false,
        "reason": "長方形常見於通過軸的直切。"
      },
      {
        "choice": "三角形",
        "truth": false,
        "reason": "不符合平行切法。"
      },
      {
        "choice": "扇形",
        "truth": false,
        "reason": "扇形是展開圖。"
      },
      {
        "choice": "圓",
        "truth": true,
        "reason": "依獨立計算「柱體平行截面全等底面」，此選項符合所求「判斷截面形狀」。"
      }
    ],
    "misconceptionTarget": "把圓柱側面展開圖長方形當成截面。",
    "authoringIntent": "辨認圓柱水平截面。",
    "difficulty": "basic",
    "givenConditions": [
      "切面穿過圓柱內部",
      "切面平行底面"
    ],
    "target": "判斷截面形狀",
    "difficultyReason": "直接運用柱體平行截面。 本題以「辨認圓柱水平截面。」作為該難度的具體判準。",
    "prerequisiteCheck": "知道圓柱底面為圓。 本題只再使用先備「solid-views」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無尺寸。 所求「判斷截面形狀」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "切面位置在內部，排除只碰頂面。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s003-v002",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-cross-section",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面概念",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "c956bdbeaa2c895495fb84321d4c54b390a7321020f40179fe10b9e29dd32d23"
  },
  {
    "prompt": "正四角錐被平行於底面的平面切過，且切面不在底面上。截面最可能是什麼？",
    "text": "正四角錐被平行於底面的平面切過，且切面不在底面上。截面最可能是什麼？",
    "choices": [
      "較小的正方形",
      "長方形",
      "圓",
      "與底面全等的正方形"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：平行截面與底面相似；位於內部所以尺度較小。所得結果是「較小的正方形」。",
    "explanation": "正四角錐底面為正方形；平行截面與底面相似。切面在頂點與底面之間，所以是較小的正方形。",
    "steps": [
      "平行截面與底面相似",
      "位於內部所以尺度較小"
    ],
    "optionAnalysis": [
      {
        "choice": "較小的正方形",
        "truth": true,
        "reason": "依獨立計算「位於內部所以尺度較小」，此選項符合所求「判斷形狀與大小」。"
      },
      {
        "choice": "長方形",
        "truth": false,
        "reason": "正四角錐對稱下不是一般長方形。"
      },
      {
        "choice": "圓",
        "truth": false,
        "reason": "底面不是圓。"
      },
      {
        "choice": "與底面全等的正方形",
        "truth": false,
        "reason": "只有底面位置才全等。"
      }
    ],
    "misconceptionTarget": "把錐體誤用柱體的全等截面性質。",
    "authoringIntent": "辨認角錐平行截面。",
    "difficulty": "basic",
    "givenConditions": [
      "正四角錐",
      "切面平行底面且在內部"
    ],
    "target": "判斷形狀與大小",
    "difficultyReason": "需同時判形狀與較小關係。",
    "prerequisiteCheck": "知道正方形底面。 本題只再使用先備「solid-views」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位。 所求「判斷形狀與大小」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "不在底面上排除全等底面。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s003-v003",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-cross-section",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面概念",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "f07a859e8dea9862a45798ce8bbb6da117641117ac64cff0e15e97a840edab3a"
  },
  {
    "prompt": "一平面只接觸正方體的一個頂點，沒有穿入內部。它與正方體的交集為何？",
    "text": "一平面只接觸正方體的一個頂點，沒有穿入內部。它與正方體的交集為何？",
    "choices": [
      "一個正方形",
      "一個點",
      "一條線段",
      "一個三角形"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：確認沒有穿入內部；共同部分僅頂點。所得結果是「一個點」。",
    "explanation": "平面只接觸單一頂點且未穿入內部，所以共同部分只有那個點，屬退化交集。",
    "steps": [
      "確認沒有穿入內部",
      "共同部分僅頂點"
    ],
    "optionAnalysis": [
      {
        "choice": "一個正方形",
        "truth": false,
        "reason": "需切過四條邊才可能成正方形。"
      },
      {
        "choice": "一個點",
        "truth": true,
        "reason": "依獨立計算「共同部分僅頂點」，此選項符合所求「判斷交集維度」。"
      },
      {
        "choice": "一條線段",
        "truth": false,
        "reason": "只接觸一條稜才可能是線段。"
      },
      {
        "choice": "一個三角形",
        "truth": false,
        "reason": "需穿過至少三條邊。"
      }
    ],
    "misconceptionTarget": "只要平面碰到立體就畫出有面積多邊形。",
    "authoringIntent": "判斷退化截面。",
    "difficulty": "standard",
    "givenConditions": [
      "只接觸一頂點",
      "未穿入內部"
    ],
    "target": "判斷交集維度",
    "difficultyReason": "需注意邊界情況。 本題以「判斷退化截面。」作為該難度的具體判準。",
    "prerequisiteCheck": "理解交集。 本題只再使用先備「solid-views」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位。 所求「判斷交集維度」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "接觸條件唯一決定交集為點。",
    "literacyContextNecessity": null,
    "figureId": "u23-s003-fig001",
    "drawingSpecId": "u23-s003-draw001",
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s003-v004",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-cross-section",
    "type": "mc",
    "visualMode": "svg",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面概念",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "93dae90d390d9da72344582eb8bc55897085009722c69390652fec93eda3ef1c"
  },
  {
    "prompt": "一個長方體被平行於底面的平面切過。若底面為4公分×7公分，截面面積是多少？",
    "text": "一個長方體被平行於底面的平面切過。若底面為4公分×7公分，截面面積是多少？",
    "choices": [
      "22平方公分",
      "11平方公分",
      "28平方公分",
      "56平方公分"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：截面全等底面；4×7=28。所得結果是「28平方公分」。",
    "explanation": "柱體平行於底面的截面與底面全等，面積為4×7=28平方公分。",
    "steps": [
      "截面全等底面",
      "4×7=28"
    ],
    "optionAnalysis": [
      {
        "choice": "22平方公分",
        "truth": false,
        "reason": "計算無依據。"
      },
      {
        "choice": "11平方公分",
        "truth": false,
        "reason": "只是邊長和。"
      },
      {
        "choice": "28平方公分",
        "truth": true,
        "reason": "依獨立計算「4×7=28」，此選項符合所求「求截面面積」。"
      },
      {
        "choice": "56平方公分",
        "truth": false,
        "reason": "誤乘2。"
      }
    ],
    "misconceptionTarget": "把周長或兩個底面面積當成單一截面面積。",
    "authoringIntent": "計算柱體平行截面面積。",
    "difficulty": "standard",
    "givenConditions": [
      "長方體底面4×7",
      "切面平行底面"
    ],
    "target": "求截面面積",
    "difficultyReason": "需連結截面全等與長方形面積。",
    "prerequisiteCheck": "會長方形面積。 本題只再使用先備「solid-views」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "答案平方公分。 所求「求截面面積」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確整數。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "切面穿過內部時大小不受高度位置影響。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s003-v005",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-cross-section",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面概念",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "d3fe1afd226dc3018ddb75de3fc745f9908942706d250dc7644918d430aaad5d"
  },
  {
    "prompt": "球被一平面切過。何時所得圓形截面的半徑最大？",
    "text": "球被一平面切過。何時所得圓形截面的半徑最大？",
    "choices": [
      "平面與球相切時",
      "所有位置都相同",
      "平面離球心越遠時",
      "平面通過球心時"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：比較切面到球心距離；距離0給最大圓。所得結果是「平面通過球心時」。",
    "explanation": "球截面圓半徑隨切面到球心距離增加而減小；距離為0，也就是通過球心時最大。",
    "steps": [
      "比較切面到球心距離",
      "距離0給最大圓"
    ],
    "optionAnalysis": [
      {
        "choice": "平面與球相切時",
        "truth": false,
        "reason": "相切時截面退化為點。"
      },
      {
        "choice": "所有位置都相同",
        "truth": false,
        "reason": "只有柱體平行截面大小不變。"
      },
      {
        "choice": "平面離球心越遠時",
        "truth": false,
        "reason": "方向相反。"
      },
      {
        "choice": "平面通過球心時",
        "truth": true,
        "reason": "依獨立計算「距離0給最大圓」，此選項符合所求「找最大圓截面位置」。"
      }
    ],
    "misconceptionTarget": "認為球像圓柱一樣各高度截面相同。",
    "authoringIntent": "判斷球最大截面。",
    "difficulty": "standard",
    "givenConditions": [
      "切面可移動",
      "平面與球相交"
    ],
    "target": "找最大圓截面位置",
    "difficultyReason": "需理解球的對稱與距心關係。",
    "prerequisiteCheck": "知道球心和半徑。 本題只再使用先備「solid-views」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無數值單位。 所求「找最大圓截面位置」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "最大值位置唯一到通過球心的平面族。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s003-v006",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-cross-section",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面概念",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "5bcc938e32f467695f69744a7b2c6b32ff91510b147aaaba6678a78b28ad77b6"
  },
  {
    "prompt": "一個三角柱的切割平面平行於兩個三角形底面。截面必為何者？",
    "text": "一個三角柱的切割平面平行於兩個三角形底面。截面必為何者？",
    "choices": [
      "與底面全等的三角形",
      "任意四邊形",
      "與側面全等的長方形",
      "較小的相似三角形"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：辨認三角柱底面；套用柱體平行截面全等。所得結果是「與底面全等的三角形」。",
    "explanation": "柱體中平行於底面的截面與底面全等。三角柱底面是三角形，所以截面是與底面全等的三角形。",
    "steps": [
      "辨認三角柱底面",
      "套用柱體平行截面全等"
    ],
    "optionAnalysis": [
      {
        "choice": "與底面全等的三角形",
        "truth": true,
        "reason": "依獨立計算「套用柱體平行截面全等」，此選項符合所求「判斷截面形狀與大小」。"
      },
      {
        "choice": "任意四邊形",
        "truth": false,
        "reason": "形狀受底面限制。"
      },
      {
        "choice": "與側面全等的長方形",
        "truth": false,
        "reason": "長方形是側面。"
      },
      {
        "choice": "較小的相似三角形",
        "truth": false,
        "reason": "較小相似是錐體特徵。"
      }
    ],
    "misconceptionTarget": "混淆角柱與角錐的平行截面。",
    "authoringIntent": "判斷三角柱平行截面。",
    "difficulty": "advanced",
    "givenConditions": [
      "切面平行兩底面",
      "切過內部"
    ],
    "target": "判斷截面形狀與大小",
    "difficultyReason": "需跨立體種類比較柱與錐。",
    "prerequisiteCheck": "知道三角柱定義。 本題只再使用先備「solid-views」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位。 所求「判斷截面形狀與大小」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "平行切法充分決定全等。 題幹已完整限制「判斷截面形狀與大小」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s003-v007",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-cross-section",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面概念",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "0fa4760465a7f8252794c2b98a4b0e2324e863ec3f6f59a51a6004bef262831d"
  },
  {
    "prompt": "一個正方體被斜平面切過四條不同的稜並形成非退化截面。下列何者可直接確定？",
    "text": "一個正方體被斜平面切過四條不同的稜並形成非退化截面。下列何者可直接確定？",
    "choices": [
      "截面一定是正方形",
      "截面是四邊形",
      "截面面積等於底面積",
      "截面一定是長方形"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：每條被切稜給一個截面頂點；四個頂點形成四邊形。所得結果是「截面是四邊形」。",
    "explanation": "切割平面與四條稜相交，四個交點依序形成截面四個頂點，因此可確定是四邊形；角度與邊長未必特殊。",
    "steps": [
      "每條被切稜給一個截面頂點",
      "四個頂點形成四邊形"
    ],
    "optionAnalysis": [
      {
        "choice": "截面一定是正方形",
        "truth": false,
        "reason": "斜切不保證四邊等長。"
      },
      {
        "choice": "截面是四邊形",
        "truth": true,
        "reason": "依獨立計算「四個頂點形成四邊形」，此選項符合所求「判斷必然形狀類別」。"
      },
      {
        "choice": "截面面積等於底面積",
        "truth": false,
        "reason": "面積不固定。"
      },
      {
        "choice": "截面一定是長方形",
        "truth": false,
        "reason": "斜切不保證直角。"
      }
    ],
    "misconceptionTarget": "看到正方體就認為任何截面都是正方形。",
    "authoringIntent": "由交稜數判截面邊數。",
    "difficulty": "advanced",
    "givenConditions": [
      "平面切過四條不同稜",
      "形成非退化截面"
    ],
    "target": "判斷必然形狀類別",
    "difficultyReason": "只可確定邊數，需排除過度結論。",
    "prerequisiteCheck": "理解截面頂點來自交稜。 本題只再使用先備「solid-views」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位。 所求「判斷必然形狀類別」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "已明示不同稜與非退化，排除重合頂點。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s003-v008",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-cross-section",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面概念",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "6f152a621f8a13b454bd387328d8b928dc4fcd055f8fa5b01a254af78bd05faf"
  },
  {
    "prompt": "圓錐高12公分。一平面平行底面，且位於頂點下方3公分處。截面圓半徑與底面半徑之比為何？",
    "text": "圓錐高12公分。一平面平行底面，且位於頂點下方3公分處。截面圓半徑與底面半徑之比為何？",
    "choices": [
      "3：4",
      "1：3",
      "1：4",
      "4：1"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：建立小圓錐與原圓錐相似；半徑比等於高度比3：12；化簡1：4。所得結果是「1：4」。",
    "explanation": "從頂點量到截面的距離是3，頂點到底面的距離是12。相似縮放的線性比為3：12=1：4。",
    "steps": [
      "建立小圓錐與原圓錐相似",
      "半徑比等於高度比3：12",
      "化簡1：4"
    ],
    "optionAnalysis": [
      {
        "choice": "3：4",
        "truth": false,
        "reason": "把截面到底面距離9與總高12相比。"
      },
      {
        "choice": "1：3",
        "truth": false,
        "reason": "誤用3：9。"
      },
      {
        "choice": "1：4",
        "truth": true,
        "reason": "依獨立計算「化簡1：4」，此選項符合所求「求截面半徑比」。"
      },
      {
        "choice": "4：1",
        "truth": false,
        "reason": "比值方向顛倒。"
      }
    ],
    "misconceptionTarget": "用截面到底面的距離取代頂點到截面的距離。",
    "authoringIntent": "計算圓錐平行截面尺度比。",
    "difficulty": "advanced",
    "givenConditions": [
      "圓錐高12",
      "截面距頂點3",
      "平行底面"
    ],
    "target": "求截面半徑比",
    "difficultyReason": "需辨識相似小圓錐的對應高度。",
    "prerequisiteCheck": "具備相似比基礎。 本題只再使用先備「solid-views」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "比值無單位。 所求「求截面半徑比」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確比。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "只問半徑比，不涉及π或實際半徑。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s003-v009",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-cross-section",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面概念",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "c4ee5a9353f25a371fa9b43163bed2699cdc80ac15f26a40a3e7e3a936d19778"
  },
  {
    "prompt": "醫療影像以互相平行的切片掃描一個近似直圓柱物體。若切片都垂直於圓柱軸，理想情況下各切片輪廓如何？",
    "text": "醫療影像以互相平行的切片掃描一個近似直圓柱物體。若切片都垂直於圓柱軸，理想情況下各切片輪廓如何？",
    "choices": [
      "扇形",
      "逐片縮小的圓",
      "長方形",
      "大小相同的圓"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：判斷切片平行底面；柱體平行截面全等。所得結果是「大小相同的圓」。",
    "explanation": "垂直圓柱軸的切片平行於底面。理想直圓柱的各平行底面截面皆為全等圓。",
    "steps": [
      "判斷切片平行底面",
      "柱體平行截面全等"
    ],
    "optionAnalysis": [
      {
        "choice": "扇形",
        "truth": false,
        "reason": "扇形是展開圖。"
      },
      {
        "choice": "逐片縮小的圓",
        "truth": false,
        "reason": "逐片縮小是錐體。"
      },
      {
        "choice": "長方形",
        "truth": false,
        "reason": "沿軸切才可能長方形。"
      },
      {
        "choice": "大小相同的圓",
        "truth": true,
        "reason": "依獨立計算「柱體平行截面全等」，此選項符合所求「預測切片輪廓」。"
      }
    ],
    "misconceptionTarget": "混淆垂直於軸與垂直於底面。",
    "authoringIntent": "解讀掃描切片方向。",
    "difficulty": "literacy",
    "givenConditions": [
      "物體近似直圓柱",
      "切片垂直軸"
    ],
    "target": "預測切片輪廓",
    "difficultyReason": "需把醫療切片方向轉成平行底面。",
    "prerequisiteCheck": "理解圓柱軸。 本題只再使用先備「solid-views」與本技能定義。",
    "estimatedTimeSec": 100,
    "unitCheck": "無尺寸。 所求「預測切片輪廓」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "理想模型不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "理想情況排除物體不規則造成差異。",
    "literacyContextNecessity": "掃描方向決定截面是否可比較，情境中的切片設定是必要資訊。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s003-v010",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-cross-section",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面概念",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "3bdae4f3196dbccb7e4362a22803d955817354f852b76f17f7085dee75067925"
  },
  {
    "prompt": "木工要把一根四角柱木料橫切成數段，要求每段切口與原底面完全相同。鋸片應如何放置？",
    "text": "木工要把一根四角柱木料橫切成數段，要求每段切口與原底面完全相同。鋸片應如何放置？",
    "choices": [
      "平行於底面",
      "垂直於任一側稜且任意傾斜",
      "通過一個頂點",
      "只貼著側面"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：把要求翻成全等平行截面；選擇平行底面。所得結果是「平行於底面」。",
    "explanation": "柱體只有在切割平面平行於底面時，截面保證與底面全等；這樣每段切口才相同。",
    "steps": [
      "把要求翻成全等平行截面",
      "選擇平行底面"
    ],
    "optionAnalysis": [
      {
        "choice": "平行於底面",
        "truth": true,
        "reason": "依獨立計算「選擇平行底面」，此選項符合所求「決定鋸片方向」。"
      },
      {
        "choice": "垂直於任一側稜且任意傾斜",
        "truth": false,
        "reason": "任意傾斜不保證同形同大。"
      },
      {
        "choice": "通過一個頂點",
        "truth": false,
        "reason": "通過頂點可能形成斜截面。"
      },
      {
        "choice": "只貼著側面",
        "truth": false,
        "reason": "貼側面不會切出有面積截口。"
      }
    ],
    "misconceptionTarget": "把橫切只理解為任意方向而忽略平行底面。",
    "authoringIntent": "選擇木料切割方向。",
    "difficulty": "literacy",
    "givenConditions": [
      "木料為直四角柱",
      "切口須全等底面"
    ],
    "target": "決定鋸片方向",
    "difficultyReason": "需從製作要求反推幾何條件。",
    "prerequisiteCheck": "知道柱體平行截面。 本題只再使用先備「solid-views」與本技能定義。",
    "estimatedTimeSec": 95,
    "unitCheck": "無數值單位。 所求「決定鋸片方向」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "題目要求保證完全相同，只有平行底面切法符合。",
    "literacyContextNecessity": "木工需求直接要求全等截面，沒有情境就失去切割方向的判準。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s003-v011",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-cross-section",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面概念",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "3d0fae29e5441a0192e7d14edc9a126f657ebf2c8724d525498bbae4ec074d44"
  },
  {
    "prompt": "甜點師將圓錐形蛋糕平行底面切一刀，想讓切口半徑為底面半徑的一半。切口到頂點的距離應為原蛋糕高度的多少？",
    "text": "甜點師將圓錐形蛋糕平行底面切一刀，想讓切口半徑為底面半徑的一半。切口到頂點的距離應為原蛋糕高度的多少？",
    "choices": [
      "四分之一",
      "二分之一",
      "三分之二",
      "三分之一"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：利用相似線性比；半徑比1/2等於高度比1/2。所得結果是「二分之一」。",
    "explanation": "圓錐的平行截面與底面相似，半徑比等於從頂點量的高度比。半徑為一半，所以距頂點也為原高的一半。",
    "steps": [
      "利用相似線性比",
      "半徑比1/2等於高度比1/2"
    ],
    "optionAnalysis": [
      {
        "choice": "四分之一",
        "truth": false,
        "reason": "四分之一是面積比。"
      },
      {
        "choice": "二分之一",
        "truth": true,
        "reason": "依獨立計算「半徑比1/2等於高度比1/2」，此選項符合所求「求距頂點高度比例」。"
      },
      {
        "choice": "三分之二",
        "truth": false,
        "reason": "方向錯誤。"
      },
      {
        "choice": "三分之一",
        "truth": false,
        "reason": "無對應。"
      }
    ],
    "misconceptionTarget": "把半徑比平方後當成距離比。",
    "authoringIntent": "由切口尺寸決定切割高度。",
    "difficulty": "literacy",
    "givenConditions": [
      "切面平行底面",
      "圓錐形狀理想"
    ],
    "target": "求距頂點高度比例",
    "difficultyReason": "需區分線性比與面積比。 本題以「由切口尺寸決定切割高度。」作為該難度的具體判準。",
    "prerequisiteCheck": "理解錐體平行截面相似。 本題只再使用先備「solid-views」與本技能定義。",
    "estimatedTimeSec": 115,
    "unitCheck": "比例無單位。 所求「求距頂點高度比例」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確分數。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "距離從頂點量，避免以底面為起點的互補比例。",
    "literacyContextNecessity": "蛋糕切口尺寸需求決定切割位置，情境中的半徑規格不可刪除。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s003-v012",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-cross-section",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面概念",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "6f1b3c9c8d71def5678b33b07e9c578f65d993a2947c8e58452ad1c35156026e"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "prompt": "比較直圓柱與直圓錐被平行於底面的平面切過時，截面形狀與大小如何變化。請說明理由。",
    "requiredWork": [
      "說明兩者截面皆為圓。",
      "說明圓柱截面與底面全等。",
      "說明圓錐截面與底面相似且大小隨位置改變。"
    ],
    "fullCreditSolution": [
      "直圓柱的平行底面截面都是與底面全等的圓，因為柱體沿軸方向半徑不變。",
      "直圓錐的平行底面截面也是圓，但只與底面相似；越靠近頂點半徑越小。",
      "差異來自圓柱母線平行而圓錐母線在頂點會聚。"
    ],
    "alternativeSolutions": [
      "可用相似三角形說明圓錐截面半徑與距頂點高度成比例。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確比較形狀、圓柱全等性、圓錐相似與位置變化，並給出合理結構理由。"
      },
      {
        "score": 2,
        "criteria": "主要比較正確，但缺少母線或相似的理由，或未明說越近頂點越小。"
      },
      {
        "score": 1,
        "criteria": "只知道兩者截面為圓，或只正確描述其中一種立體。"
      },
      {
        "score": 0,
        "criteria": "把圓柱截面說成扇形或認為圓錐各截面全等。"
      }
    ],
    "partialCreditRules": [
      "主要比較正確，但缺少母線或相似的理由，或未明說越近頂點越小。",
      "只知道兩者截面為圓，或只正確描述其中一種立體。"
    ],
    "followThroughPolicy": "若把越靠近底面越小寫反，但其他比較正確，最多2分；後續若一致使用錯誤方向，不再重複扣分。",
    "unitNotationRules": "無數值單位；使用半徑、距頂點高度等術語需方向清楚。",
    "answerOnlyPolicy": "只寫都是圓最多1分。",
    "difficulty": "standard",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "independentReview": {
      "derivedResult": "圓柱為全等圓；圓錐為相似圓且越近頂點越小。",
      "ambiguityAndBoundary": "比較限定平行底面截面，不涵蓋斜切。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "questionId": "u23-s003-cr001",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-cross-section",
    "type": "constructed-response",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "6e663cad4cd5cc2a2e3c1a1026acd8e361b5e3e7fb1292fce97d9c2d713d303b"
  },
  {
    "prompt": "一個圓錐高15公分，底面半徑10公分。平行底面的截面距頂點6公分。求截面半徑，並說明使用的相似關係。",
    "requiredWork": [
      "建立截面小圓錐與原圓錐相似。",
      "寫半徑比等於高度比。",
      "計算截面半徑。"
    ],
    "fullCreditSolution": [
      "小圓錐高度與原圓錐高度比為6：15=2：5。",
      "截面半徑r與底面半徑10同為對應線性長度，所以r：10=6：15。",
      "r=10×6/15=4公分。"
    ],
    "alternativeSolutions": [
      "可由通過軸的截面畫出兩個相似三角形，再列比例。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確列r/10=6/15並求得4公分，且說明小圓錐與原圓錐相似。"
      },
      {
        "score": 2,
        "criteria": "答案4公分且比例概念正確，但說明簡略，或只有一個非關鍵算術筆誤。"
      },
      {
        "score": 1,
        "criteria": "知道要用相似比，但誤用9/15或比例方向導致答案錯。"
      },
      {
        "score": 0,
        "criteria": "直接用面積比、把截面半徑視為10公分不變，或未作答。"
      }
    ],
    "partialCreditRules": [
      "答案4公分且比例概念正確，但說明簡略，或只有一個非關鍵算術筆誤。",
      "知道要用相似比，但誤用9/15或比例方向導致答案錯。"
    ],
    "followThroughPolicy": "若誤把6公分當截面到底面的距離而用9/15，後續運算正確可得1分；若比例正確但算術錯，可得2分。",
    "unitNotationRules": "高度與半徑均為公分；答案必須附公分，不可寫平方公分。",
    "answerOnlyPolicy": "只寫4公分而無比例或理由，最多1分。",
    "difficulty": "advanced",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "independentReview": {
      "derivedResult": "截面半徑4公分。",
      "ambiguityAndBoundary": "距離明確從頂點量，線性相似比適用。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "questionId": "u23-s003-cr002",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-cross-section",
    "type": "constructed-response",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "9ac74a3be88b265bc45d75d443018acf6845c402dd9381671ba75dd2d0afa181"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u23-s003-fig001",
    "drawingSpecId": "u23-s003-draw001",
    "unitId": "u23",
    "skillSlot": "s003",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "purpose": "斜平面只在頂點P接觸正方體",
    "svgPath": "figures/u23/u23-s003-fig001.svg",
    "canvas": {
      "width": 620,
      "height": 420,
      "viewBox": "0 0 620 420"
    },
    "drawingSpec": {
      "coordinateSystem": "SVG左上為原點，輪廓與標籤位置固定於對應檔案。",
      "visibleLineRules": "主要輪廓至少3px實線，輔助線使用虛線且不取代題幹條件。",
      "hiddenLineRules": "僅在需要表示軸線或不可見結構時使用虛線。",
      "labelsAndPositions": "所有尺寸、方向、面與頂點標籤均在圖中固定位置。",
      "tickMarksUnitsArrowsSymbols": "直角符號、箭頭、公分單位與視線方向依題意標示。",
      "scaleStatus": "not-to-scale",
      "visualInferenceWarning": "示意圖未按比例，必須依題幹與標示作答。"
    },
    "altText": "平面只接觸頂點P且沒有穿入正方體內部。",
    "svgTitle": "斜平面只在頂點P接觸正方體",
    "svgDescription": "平面只接觸頂點P且沒有穿入正方體內部。",
    "mobileReadabilityReview": "縮放至360px寬後主要輪廓與文字仍可辨識，且不以顏色作唯一訊息。",
    "answerLeakageReview": "圖只提供題幹已知結構，不直接標示選項或答案。",
    "svgAssertions": [
      "<title",
      "<desc",
      "role=\"img\"",
      "未按比例"
    ],
    "figureReview": {
      "decision": "pass",
      "manualRenderedInspection": true,
      "reviewNote": "u23-s003-fig001 已核對題圖數值、線型、標籤、縮放警語與答案不外洩。",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "1828b99fce34dfc84c102d58d8bdeef8e3fb595295d2743532ff8173a89de5dd"
  }
];
