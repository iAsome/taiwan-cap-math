// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u23-s008-lecture-r1",
  "unitId": "u23",
  "numericUnitId": 23,
  "topicId": "u23-basics",
  "skillId": "cross-section-solid",
  "title": "截面與立體：由切法推回立體結構",
  "lockedSkillTitle": "截面與立體",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能綜合判斷角柱、角錐、圓柱、圓錐與球的常見截面。",
    "能由一系列平行截面的變化推測立體。",
    "能判斷通過軸或中心的截面。",
    "能說明相同截面不一定唯一決定立體。"
  ],
  "prerequisites": [
    {
      "skillId": "solid-cone-concept",
      "requiredLevel": "能辨認角柱、角錐、圓柱與圓錐的底面、高與軸。",
      "bridge": "已知單一立體結構後，現在比較不同立體在相同切法下的截面差異。"
    }
  ],
  "glossary": [
    {
      "term": "軸截面",
      "definition": "切割平面通過旋轉體的軸所得的截面。"
    },
    {
      "term": "中心截面",
      "definition": "切割平面通過球心或立體中心所得的截面。"
    },
    {
      "term": "截面序列",
      "definition": "多個互相平行的切片依位置排列所得的形狀或大小變化。"
    },
    {
      "term": "反推",
      "definition": "由截面資訊判斷可能的立體，但需保留不唯一性。"
    }
  ],
  "notation": [
    {
      "symbol": "A(t)",
      "meaning": "切片位置t處的截面面積，用來描述大小隨位置變化。"
    },
    {
      "symbol": "∼",
      "meaning": "相似，表示形狀相同但大小可不同。"
    }
  ],
  "conceptNarrative": [
    "柱體的平行底面截面大小不變；錐體的平行底面截面形狀相似但隨靠近頂點縮小。",
    "直圓柱通過軸的截面是長方形；直圓錐通過軸的截面是等腰三角形；球的任何非退化平面截面都是圓。",
    "正方體或長方體的截面可能是三角形、四邊形，甚至更多邊形，取決於切過多少條稜，不能只看原立體面的形狀。",
    "由截面反推立體時要謹慎：一個圓截面可能來自圓柱、圓錐、球或其他立體，需結合切片位置與變化。"
  ],
  "formalDefinitions": [
    {
      "name": "軸截面",
      "statement": "含旋轉軸的切割平面與立體的交集。"
    },
    {
      "name": "截面反推原則",
      "statement": "單一截面通常只提供必要線索；多位置、方向與尺寸變化才能提高判定力。"
    }
  ],
  "formulas": [
    {
      "formula": "圓柱平行截面A(t)=πr²",
      "conditions": [
        "切面平行底面",
        "半徑固定"
      ],
      "meaning": "截面面積不隨高度改變。"
    },
    {
      "formula": "圓錐平行截面A(t)與距頂點長度平方成正比",
      "conditions": [
        "切面平行底面"
      ],
      "meaning": "線性尺度成比例，面積比為線性比平方。"
    },
    {
      "formula": "球截面半徑²=R²-d²",
      "conditions": [
        "切面距球心d",
        "球半徑R"
      ],
      "meaning": "離球心越遠，圓截面越小。"
    }
  ],
  "nonApplicableCases": [
    "看到圓截面不能立刻判為圓柱。",
    "通過圓柱軸的截面只有在直圓柱時為長方形。",
    "切過正方體四條稜只保證四邊形，不保證正方形。",
    "一系列截面大小不變也可能來自其他等截面柱體，需看截面形狀。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先辨認切割方向與是否通過軸或中心。",
      "check": "平行底面、垂直底面或斜切？"
    },
    {
      "step": 2,
      "instruction": "列出候選立體的典型截面。",
      "check": "柱體大小不變、錐體縮放、球先增後減？"
    },
    {
      "step": 3,
      "instruction": "比較形狀與尺寸變化。",
      "check": "只有形狀相同還是大小也相同？"
    },
    {
      "step": 4,
      "instruction": "排除不符合邊界的候選。",
      "check": "頂點處是否縮成點，球面端點是否縮成點？"
    },
    {
      "step": 5,
      "instruction": "說明是否唯一。",
      "check": "是否還有其他立體可產生同一截面資訊？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "直圓柱通過軸的截面為何？",
      "solutionSteps": [
        "平面切到兩條母線與兩條底面直徑。"
      ],
      "answer": "長方形。"
    },
    {
      "exampleId": "L2",
      "prompt": "直圓錐通過軸的截面為何？",
      "solutionSteps": [
        "兩條母線會聚於頂點，底邊是底圓直徑。"
      ],
      "answer": "等腰三角形。"
    },
    {
      "exampleId": "L3",
      "prompt": "球的平行切片從一端移到另一端，大小如何變化？",
      "solutionSteps": [
        "端點處退化為點。",
        "靠近球心圓變大，過球心後再變小。"
      ],
      "answer": "由0增至最大圓，再減至0。"
    },
    {
      "exampleId": "L4",
      "prompt": "只知道某截面是圓，能否確定原立體為球？",
      "solutionSteps": [
        "圓柱、圓錐與球均可能有圓截面。"
      ],
      "answer": "不能。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "單一圓截面就判定球。",
      "why": "多種旋轉體都有圓截面。",
      "correction": "加入切片方向與大小變化。"
    },
    {
      "mistake": "圓錐平行截面大小不變。",
      "why": "誤用柱體性質。",
      "correction": "離頂點越遠線性尺度越大。"
    },
    {
      "mistake": "球的所有截面圓同大。",
      "why": "忽略切面到球心距離。",
      "correction": "通過球心才最大。"
    },
    {
      "mistake": "軸截面和側面展開圖混淆。",
      "why": "一個是切口，一個是攤平曲面。",
      "correction": "軸截面位於立體內部平面。"
    },
    {
      "mistake": "正方體截面只能是正方形。",
      "why": "切法可斜穿不同稜。",
      "correction": "依交稜數與交點位置判斷。"
    },
    {
      "mistake": "由截面反推時忽略不唯一。",
      "why": "資訊不足仍下唯一結論。",
      "correction": "列出其他可行立體並說明缺少條件。"
    }
  ],
  "selfCheck": [
    "我是否確認切片方向？",
    "是否區分軸截面與展開圖？",
    "截面大小是否隨位置變化？",
    "我是否檢查球心或頂點的邊界？",
    "反推結論是否承認可能不唯一？"
  ],
  "summary": [
    "柱體平行截面不變，錐體平行截面相似縮放。",
    "圓柱軸截面為長方形，圓錐軸截面為等腰三角形。",
    "球截面皆為圓但大小由距心決定。",
    "單一截面常不足以唯一決定立體。"
  ],
  "connections": {
    "previous": "整合前面各立體概念與截面定義，進行比較與反推。",
    "next": [
      "柱體表面積與體積將量化這些底面和高度。",
      "立體幾何素養題會以切片資料判讀實物。"
    ]
  },
  "figureReferences": [
    {
      "figureId": "u23-s008-fig001",
      "purpose": "並列直圓柱與直圓錐的軸截面。",
      "altText": "左側直圓柱被通過軸的平面切出長方形，右側直圓錐被通過軸的平面切出等腰三角形。"
    }
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u23-s008-v001",
      "u23-s008-v002",
      "u23-s008-v003",
      "u23-s008-v004",
      "u23-s008-v005",
      "u23-s008-v006",
      "u23-s008-v007",
      "u23-s008-v008",
      "u23-s008-v009",
      "u23-s008-v010",
      "u23-s008-v011",
      "u23-s008-v012"
    ],
    "constructedResponseIds": [
      "u23-s008-cr001",
      "u23-s008-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐一核對圓柱與圓錐軸截面、球切片的先增後減、正方體斜截面的非唯一形狀，並在反推敘述中保留資訊不足的限制。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
  "contentSha256": "87c235ae5fcce96608c52b72bb8aeda3c284bf0085a9b1ac487c30b162fe95a3"
};

export const QUESTIONS = [
  {
    "prompt": "直圓柱被通過軸的平面切開，截面通常為何？",
    "text": "直圓柱被通過軸的平面切開，截面通常為何？",
    "choices": [
      "梯形",
      "圓",
      "扇形",
      "長方形"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：辨認軸截面；四邊由母線與直徑組成。所得結果是「長方形」。",
    "explanation": "通過軸的平面切到兩條平行母線與兩個底面直徑，形成長方形。",
    "steps": [
      "辨認軸截面",
      "四邊由母線與直徑組成"
    ],
    "optionAnalysis": [
      {
        "choice": "梯形",
        "truth": false,
        "reason": "直圓柱不形成梯形。"
      },
      {
        "choice": "圓",
        "truth": false,
        "reason": "平行底面切才是圓。"
      },
      {
        "choice": "扇形",
        "truth": false,
        "reason": "扇形是展開圖。"
      },
      {
        "choice": "長方形",
        "truth": true,
        "reason": "依獨立計算「四邊由母線與直徑組成」，此選項符合所求「判斷截面形狀」。"
      }
    ],
    "misconceptionTarget": "把軸截面當成平行底面截面。",
    "authoringIntent": "辨認圓柱軸截面。",
    "difficulty": "basic",
    "givenConditions": [
      "直圓柱",
      "切面通過軸"
    ],
    "target": "判斷截面形狀",
    "difficultyReason": "概念直接判讀。 本題以「辨認圓柱軸截面。」作為該難度的具體判準。",
    "prerequisiteCheck": "理解軸。 本題只再使用先備「solid-cone-concept」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位。 所求「判斷截面形狀」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "直圓柱條件保證母線平行且等長。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s008-v001",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "cross-section-solid",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面與立體",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "b2559a54189afd62287d1d6656ffa6269422c37c1e41900bf0ddbdfd5bccc9af"
  },
  {
    "prompt": "直圓錐被通過軸的平面切開，截面通常為何？",
    "text": "直圓錐被通過軸的平面切開，截面通常為何？",
    "choices": [
      "圓",
      "等腰三角形",
      "長方形",
      "扇形"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：軸截面含頂點；底邊為直徑。所得結果是「等腰三角形」。",
    "explanation": "平面通過頂點與底面直徑，兩條母線等長，所以截面為等腰三角形。",
    "steps": [
      "軸截面含頂點",
      "底邊為直徑"
    ],
    "optionAnalysis": [
      {
        "choice": "圓",
        "truth": false,
        "reason": "平行底面截面才是圓。"
      },
      {
        "choice": "等腰三角形",
        "truth": true,
        "reason": "依獨立計算「底邊為直徑」，此選項符合所求「判斷截面形狀」。"
      },
      {
        "choice": "長方形",
        "truth": false,
        "reason": "屬圓柱軸截面。"
      },
      {
        "choice": "扇形",
        "truth": false,
        "reason": "扇形是側面展開。"
      }
    ],
    "misconceptionTarget": "混淆圓錐軸截面與側面展開圖。",
    "authoringIntent": "辨認圓錐軸截面。",
    "difficulty": "basic",
    "givenConditions": [
      "直圓錐",
      "通過軸"
    ],
    "target": "判斷截面形狀",
    "difficultyReason": "單一結構辨認。 本題以「辨認圓錐軸截面。」作為該難度的具體判準。",
    "prerequisiteCheck": "知道母線。 本題只再使用先備「solid-cone-concept」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位。 所求「判斷截面形狀」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "通過軸必通過頂點與圓心。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s008-v002",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "cross-section-solid",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面與立體",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "f68a9a5bd574c1e868856ddfd71367e9f9b28d6c7adfc88537e0704cd3e8550a"
  },
  {
    "prompt": "球被任一穿過內部的平面切過，非退化截面是什麼形狀？",
    "text": "球被任一穿過內部的平面切過，非退化截面是什麼形狀？",
    "choices": [
      "圓",
      "正方形",
      "橢圓",
      "三角形"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：切面穿過內部；利用球對稱。所得結果是「圓」。",
    "explanation": "球對任意方向都具旋轉對稱，平面截面是圓；只有相切時退化為點。",
    "steps": [
      "切面穿過內部",
      "利用球對稱"
    ],
    "optionAnalysis": [
      {
        "choice": "圓",
        "truth": true,
        "reason": "依獨立計算「利用球對稱」，此選項符合所求「判斷截面形狀」。"
      },
      {
        "choice": "正方形",
        "truth": false,
        "reason": "不可能。"
      },
      {
        "choice": "橢圓",
        "truth": false,
        "reason": "球的平面截面不是橢圓。"
      },
      {
        "choice": "三角形",
        "truth": false,
        "reason": "不可能。"
      }
    ],
    "misconceptionTarget": "把球的透視圖橢圓外觀當成實際截面。",
    "authoringIntent": "辨認球的平面截面。",
    "difficulty": "basic",
    "givenConditions": [
      "平面穿過球內部"
    ],
    "target": "判斷截面形狀",
    "difficultyReason": "需要區分透視畫法。 本題以「辨認球的平面截面。」作為該難度的具體判準。",
    "prerequisiteCheck": "知道球。 本題只再使用先備「solid-cone-concept」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位。 所求「判斷截面形狀」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "非退化排除相切點。 題幹已完整限制「判斷截面形狀」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s008-v003",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "cross-section-solid",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面與立體",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "3db94be4aa8dea0fc84ffdab2952e62dba8926fcf76baee8e170d28c42e33600"
  },
  {
    "prompt": "一系列互相平行的圓形截面大小完全相同。下列哪一立體最符合這項特徵？",
    "text": "一系列互相平行的圓形截面大小完全相同。下列哪一立體最符合這項特徵？",
    "choices": [
      "圓錐",
      "球",
      "直圓柱",
      "角錐"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：比較截面序列；找大小不變者。所得結果是「直圓柱」。",
    "explanation": "直圓柱沿軸方向的平行底面截面都是同半徑圓。圓錐與球的截面大小會變化。",
    "steps": [
      "比較截面序列",
      "找大小不變者"
    ],
    "optionAnalysis": [
      {
        "choice": "圓錐",
        "truth": false,
        "reason": "會逐漸縮放。"
      },
      {
        "choice": "球",
        "truth": false,
        "reason": "先增後減。"
      },
      {
        "choice": "直圓柱",
        "truth": true,
        "reason": "依獨立計算「找大小不變者」，此選項符合所求「判斷最符合立體」。"
      },
      {
        "choice": "角錐",
        "truth": false,
        "reason": "底面不是圓且會縮放。"
      }
    ],
    "misconceptionTarget": "只看截面是圓而忽略大小是否變化。",
    "authoringIntent": "由截面序列辨認圓柱。",
    "difficulty": "standard",
    "givenConditions": [
      "切片互相平行",
      "截面均為等大圓"
    ],
    "target": "判斷最符合立體",
    "difficultyReason": "需綜合形狀與變化。 本題以「由截面序列辨認圓柱。」作為該難度的具體判準。",
    "prerequisiteCheck": "理解各立體截面。 本題只再使用先備「solid-cone-concept」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位。 所求「判斷最符合立體」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "最符合而非唯一數學分類，候選中只有圓柱。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s008-v004",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "cross-section-solid",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面與立體",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "e3502bc8a92cc516c20a84892971ceb7b65aae0910cde2131991287964329627"
  },
  {
    "prompt": "球的平行切片從一端移向另一端，截面半徑如何變化？",
    "text": "球的平行切片從一端移向另一端，截面半徑如何變化？",
    "choices": [
      "先增大至球心最大，再減小",
      "始終不變",
      "單調增大",
      "單調減小"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：端點半徑0；球心截面最大；利用對稱。所得結果是「先增大至球心最大，再減小」。",
    "explanation": "在兩端相切時半徑為0，靠近球心時增大，通過球心達球半徑，之後對稱減小。",
    "steps": [
      "端點半徑0",
      "球心截面最大",
      "利用對稱"
    ],
    "optionAnalysis": [
      {
        "choice": "先增大至球心最大，再減小",
        "truth": true,
        "reason": "依獨立計算「利用對稱」，此選項符合所求「判斷半徑變化」。"
      },
      {
        "choice": "始終不變",
        "truth": false,
        "reason": "是圓柱情形。"
      },
      {
        "choice": "單調增大",
        "truth": false,
        "reason": "忽略過球心後變小。"
      },
      {
        "choice": "單調減小",
        "truth": false,
        "reason": "忽略前半段。"
      }
    ],
    "misconceptionTarget": "認為球各截面等大或只看一半路徑。",
    "authoringIntent": "描述球截面序列。",
    "difficulty": "standard",
    "givenConditions": [
      "切片方向固定",
      "從一端到另一端"
    ],
    "target": "判斷半徑變化",
    "difficultyReason": "需處理完整區間。 本題以「描述球截面序列。」作為該難度的具體判準。",
    "prerequisiteCheck": "理解球心最大截面。 本題只再使用先備「solid-cone-concept」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無數值。 所求「判斷半徑變化」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "起訖點均為相切位置。 題幹已完整限制「判斷半徑變化」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s008-v005",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "cross-section-solid",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面與立體",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "1b0567646cc9da0611e264d460fab640ed0d8f3f67a32a41ab5a08dc9427abd6"
  },
  {
    "prompt": "只知道某立體有一個圓形截面，下列判斷何者正確？",
    "text": "只知道某立體有一個圓形截面，下列判斷何者正確？",
    "choices": [
      "一定是球",
      "一定是圓柱",
      "不能唯一判定，圓柱、圓錐或球都可能",
      "一定是圓錐"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：列出多個可行例；判定不唯一。所得結果是「不能唯一判定，圓柱、圓錐或球都可能」。",
    "explanation": "單一圓截面可能來自圓柱平行底面切、圓錐平行底面切或球的任意非退化切面，所以資訊不足。",
    "steps": [
      "列出多個可行例",
      "判定不唯一"
    ],
    "optionAnalysis": [
      {
        "choice": "一定是球",
        "truth": false,
        "reason": "過度唯一。"
      },
      {
        "choice": "一定是圓柱",
        "truth": false,
        "reason": "忽略其他立體。"
      },
      {
        "choice": "不能唯一判定，圓柱、圓錐或球都可能",
        "truth": true,
        "reason": "依獨立計算「判定不唯一」，此選項符合所求「判斷是否唯一」。"
      },
      {
        "choice": "一定是圓錐",
        "truth": false,
        "reason": "忽略其他立體。"
      }
    ],
    "misconceptionTarget": "由單一截面過度推論原立體。",
    "authoringIntent": "判斷反推資訊充分性。",
    "difficulty": "standard",
    "givenConditions": [
      "僅知一個圓截面"
    ],
    "target": "判斷是否唯一",
    "difficultyReason": "需提出反例排除唯一。 本題以「判斷反推資訊充分性。」作為該難度的具體判準。",
    "prerequisiteCheck": "懂多種截面。 本題只再使用先備「solid-cone-concept」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位。 所求「判斷是否唯一」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "未提供切面方向與尺寸序列。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s008-v006",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "cross-section-solid",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面與立體",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "bb9008f2e5951cda294ab1f4e5f1e3d10ba54d64ec2c687a5322d746ba69007a"
  },
  {
    "prompt": "一正方體的截面平面切過6條不同的稜，且每條只交一點。截面最多直接可判為何種多邊形？",
    "text": "一正方體的截面平面切過6條不同的稜，且每條只交一點。截面最多直接可判為何種多邊形？",
    "choices": [
      "四邊形",
      "五邊形",
      "八邊形",
      "六邊形"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：每條交稜提供一頂點；6頂點形成六邊形。所得結果是「六邊形」。",
    "explanation": "截面邊界的頂點來自切割平面與稜的交點。切過6條不同稜形成6個交點，因此截面為六邊形。",
    "steps": [
      "每條交稜提供一頂點",
      "6頂點形成六邊形"
    ],
    "optionAnalysis": [
      {
        "choice": "四邊形",
        "truth": false,
        "reason": "少數兩點。"
      },
      {
        "choice": "五邊形",
        "truth": false,
        "reason": "少一點。"
      },
      {
        "choice": "八邊形",
        "truth": false,
        "reason": "超過已知交點。"
      },
      {
        "choice": "六邊形",
        "truth": true,
        "reason": "依獨立計算「6頂點形成六邊形」，此選項符合所求「判斷截面多邊形」。"
      }
    ],
    "misconceptionTarget": "認為正方體截面最多四邊形。",
    "authoringIntent": "由交稜數判截面邊數。",
    "difficulty": "advanced",
    "givenConditions": [
      "6條不同稜",
      "各交一次",
      "非退化"
    ],
    "target": "判斷截面多邊形",
    "difficultyReason": "需抽象交點與邊界。 本題以「由交稜數判截面邊數。」作為該難度的具體判準。",
    "prerequisiteCheck": "理解截面構成。 本題只再使用先備「solid-cone-concept」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位。 所求「判斷截面多邊形」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "條件排除截面沿稜重合。 題幹已完整限制「判斷截面多邊形」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s008-v007",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "cross-section-solid",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面與立體",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "58a69cc44e54103f2a511f81457689e1f2872b529135348b4c35565da91726b9"
  },
  {
    "prompt": "半徑10公分的球，一平面距球心6公分。截面半徑為何？",
    "text": "半徑10公分的球，一平面距球心6公分。截面半徑為何？",
    "choices": [
      "4公分",
      "8公分",
      "√136公分",
      "16公分"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：列x²+6²=10²；求x=8。所得結果是「8公分」。",
    "explanation": "球半徑、距心6與截面半徑x形成直角三角形。x²=10²−6²=64，所以x=8公分。",
    "steps": [
      "列x²+6²=10²",
      "求x=8"
    ],
    "optionAnalysis": [
      {
        "choice": "4公分",
        "truth": false,
        "reason": "直接相減。"
      },
      {
        "choice": "8公分",
        "truth": true,
        "reason": "依獨立計算「求x=8」，此選項符合所求「求截面半徑」。"
      },
      {
        "choice": "√136公分",
        "truth": false,
        "reason": "誤用平方和。"
      },
      {
        "choice": "16公分",
        "truth": false,
        "reason": "此選項無法符合所求「求截面半徑」；錯誤來源會是：直接用R−d當截面半徑。"
      }
    ],
    "misconceptionTarget": "直接用R−d當截面半徑。",
    "authoringIntent": "計算球的偏心截面。",
    "difficulty": "advanced",
    "givenConditions": [
      "R=10",
      "d=6"
    ],
    "target": "求截面半徑",
    "difficultyReason": "需建立立體中的直角關係。",
    "prerequisiteCheck": "會畢氏定理。 本題只再使用先備「solid-cone-concept」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "答案公分。 所求「求截面半徑」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確整數。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "d<R，截面存在。 題幹已完整限制「求截面半徑」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s008-v008",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "cross-section-solid",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面與立體",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "7ffa5b290242ce9385285dd42d5f02422be444aa366f3736f7739b695d759ab4"
  },
  {
    "prompt": "圓錐從頂點往底面作平行切片，距頂點高度比為1：2時，兩截面面積比為何？",
    "text": "圓錐從頂點往底面作平行切片，距頂點高度比為1：2時，兩截面面積比為何？",
    "choices": [
      "1：2",
      "1：4",
      "2：1",
      "1：8"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：線性比1:2；面積比平方。所得結果是「1：4」。",
    "explanation": "平行截面線性尺度比等於距頂點高度比1：2，面積比為平方，即1²：2²=1：4。",
    "steps": [
      "線性比1:2",
      "面積比平方"
    ],
    "optionAnalysis": [
      {
        "choice": "1：2",
        "truth": false,
        "reason": "把線性比當面積比。"
      },
      {
        "choice": "1：4",
        "truth": true,
        "reason": "依獨立計算「面積比平方」，此選項符合所求「求面積比」。"
      },
      {
        "choice": "2：1",
        "truth": false,
        "reason": "方向反。"
      },
      {
        "choice": "1：8",
        "truth": false,
        "reason": "誤用立方。"
      }
    ],
    "misconceptionTarget": "把截面面積比當線性比或體積比。",
    "authoringIntent": "比較圓錐不同截面面積。",
    "difficulty": "advanced",
    "givenConditions": [
      "兩切面平行底面",
      "距頂點比1:2"
    ],
    "target": "求面積比",
    "difficultyReason": "需從相似線性比升平方。 本題以「比較圓錐不同截面面積。」作為該難度的具體判準。",
    "prerequisiteCheck": "具備相似與面積比。 本題只再使用先備「solid-cone-concept」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "比值無單位。 所求「求面積比」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "兩截面均在同一圓錐內。 題幹已完整限制「求面積比」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s008-v009",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "cross-section-solid",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面與立體",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "d0ce957168325ffb92fa5b0f94a379d9f87314fd5fabb5964f2b1d590004ef0d"
  },
  {
    "prompt": "醫院以等距水平切片掃描近似球形物體，影像圓面積先增後減。最大切片應位於何處？",
    "text": "醫院以等距水平切片掃描近似球形物體，影像圓面積先增後減。最大切片應位於何處？",
    "choices": [
      "任一位置都相同",
      "靠近最上端",
      "靠近最下端",
      "通過球心"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：半徑最大位置；面積隨半徑平方增加。所得結果是「通過球心」。",
    "explanation": "球的截面在通過球心時半徑最大，因此面積也最大。",
    "steps": [
      "半徑最大位置",
      "面積隨半徑平方增加"
    ],
    "optionAnalysis": [
      {
        "choice": "任一位置都相同",
        "truth": false,
        "reason": "圓柱才可能不變。"
      },
      {
        "choice": "靠近最上端",
        "truth": false,
        "reason": "上端接近點。"
      },
      {
        "choice": "靠近最下端",
        "truth": false,
        "reason": "下端接近點。"
      },
      {
        "choice": "通過球心",
        "truth": true,
        "reason": "依獨立計算「面積隨半徑平方增加」，此選項符合所求「找最大影像位置」。"
      }
    ],
    "misconceptionTarget": "把球與圓柱切片混淆。 必須依「判讀球形掃描最大切片。」的關係重新核對。",
    "authoringIntent": "判讀球形掃描最大切片。",
    "difficulty": "literacy",
    "givenConditions": [
      "物體近似球",
      "水平等距切片"
    ],
    "target": "找最大影像位置",
    "difficultyReason": "需把影像序列連回球心。 本題以「判讀球形掃描最大切片。」作為該難度的具體判準。",
    "prerequisiteCheck": "理解球截面。 本題只再使用先備「solid-cone-concept」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位。 所求「找最大影像位置」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "近似球模型下最大切面通過中心。",
    "literacyContextNecessity": "等距水平切片的面積變化用來定位球心；最大圓截面只會在切平面通過球心時出現，影像序列不可刪除。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s008-v010",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "cross-section-solid",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面與立體",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "346cd39a62ff385919596e67faeacbb64a8555ed9f769fd082e07cb4fa6567df"
  },
  {
    "prompt": "工廠檢查圓錐形零件，從頂端向底部等距切片。若切片半徑沒有逐漸增加，最合理的判斷是什麼？",
    "text": "工廠檢查圓錐形零件，從頂端向底部等距切片。若切片半徑沒有逐漸增加，最合理的判斷是什麼？",
    "choices": [
      "零件仍必為理想圓錐",
      "零件一定是球",
      "切片方向或零件形狀可能有誤",
      "切片面積應完全相同"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：建立理想趨勢；觀察不符即檢查模型或切法。所得結果是「切片方向或零件形狀可能有誤」。",
    "explanation": "理想圓錐的平行底面切片半徑與距頂點成比例增大。若未出現趨勢，可能切片不平行或零件不符模型。",
    "steps": [
      "建立理想趨勢",
      "觀察不符即檢查模型或切法"
    ],
    "optionAnalysis": [
      {
        "choice": "零件仍必為理想圓錐",
        "truth": false,
        "reason": "與理論矛盾。"
      },
      {
        "choice": "零件一定是球",
        "truth": false,
        "reason": "沒有足夠證據判球。"
      },
      {
        "choice": "切片方向或零件形狀可能有誤",
        "truth": true,
        "reason": "依獨立計算「觀察不符即檢查模型或切法」，此選項符合所求「判斷異常原因」。"
      },
      {
        "choice": "切片面積應完全相同",
        "truth": false,
        "reason": "是圓柱特徵。"
      }
    ],
    "misconceptionTarget": "看到圓形切片就忽略尺寸趨勢。",
    "authoringIntent": "用截面序列做品質判定。",
    "difficulty": "literacy",
    "givenConditions": [
      "目標為理想圓錐",
      "等距切片"
    ],
    "target": "判斷異常原因",
    "difficultyReason": "需以數學模型檢驗製程。 本題以「用截面序列做品質判定。」作為該難度的具體判準。",
    "prerequisiteCheck": "理解圓錐縮放。 本題只再使用先備「solid-cone-concept」與本技能定義。",
    "estimatedTimeSec": 100,
    "unitCheck": "無單位。 所求「判斷異常原因」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "可能原因以或表示，未過度確定。",
    "literacyContextNecessity": "品質檢查依切片趨勢判定模型偏差，情境直接使用數學性質。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s008-v011",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "cross-section-solid",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面與立體",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "771fa7484715ed0bb841cccf8fc7d79a4d6dc50958748092fea3a36154e990a9"
  },
  {
    "prompt": "設計師想做一個沿高度每一片水平截面都同樣大的圓形收納盒。下列外形最適合？",
    "text": "設計師想做一個沿高度每一片水平截面都同樣大的圓形收納盒。下列外形最適合？",
    "choices": [
      "直圓柱",
      "球",
      "圓錐",
      "半球"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：把需求翻成等截面；比較候選。所得結果是「直圓柱」。",
    "explanation": "直圓柱的水平截面在各高度都是相同半徑的圓；其餘外形截面大小會變化。",
    "steps": [
      "把需求翻成等截面",
      "比較候選"
    ],
    "optionAnalysis": [
      {
        "choice": "直圓柱",
        "truth": true,
        "reason": "依獨立計算「比較候選」，此選項符合所求「選擇外形」。"
      },
      {
        "choice": "球",
        "truth": false,
        "reason": "先增後減。"
      },
      {
        "choice": "圓錐",
        "truth": false,
        "reason": "截面逐漸改變。"
      },
      {
        "choice": "半球",
        "truth": false,
        "reason": "由最大圓縮到點。"
      }
    ],
    "misconceptionTarget": "只因外形圓滑就選球。 必須依「依收納需求選立體。」的關係重新核對。",
    "authoringIntent": "依收納需求選立體。",
    "difficulty": "literacy",
    "givenConditions": [
      "水平截面需等大圓"
    ],
    "target": "選擇外形",
    "difficultyReason": "需用截面穩定性滿足層板規格。",
    "prerequisiteCheck": "理解柱體。 本題只再使用先備「solid-cone-concept」與本技能定義。",
    "estimatedTimeSec": 80,
    "unitCheck": "無尺寸。 所求「選擇外形」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "候選中直圓柱唯一滿足全高度等截面。",
    "literacyContextNecessity": "收納盒要求沿高度每片水平截面皆為同樣大的圓，這個使用需求直接排除圓錐與球而選出圓柱。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s008-v012",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "cross-section-solid",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "截面與立體",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "f58be8d3c59d95245de3d99d54abbb6ad7edf64655d1344e2ca40b8ef6a61eae"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "prompt": "比較直圓柱、直圓錐與球被互相平行的水平平面依高度切片時，截面大小如何變化。",
    "requiredWork": [
      "分別描述三種立體。",
      "說明圓柱不變、圓錐單向變化、球先增後減。",
      "指出截面形狀均可能為圓。"
    ],
    "fullCreditSolution": [
      "直圓柱若切片平行底面，各截面都是半徑相同的圓，大小不變。",
      "直圓錐由頂點往底面切，圓截面從退化點逐漸放大，半徑與距頂點高度成比例。",
      "球由一端到另一端切，圓截面先由點增大，到球心達最大，再縮小為點。"
    ],
    "alternativeSolutions": [
      "可用截面面積圖形描述：圓柱為常數，圓錐隨距頂點平方增加，球對球心對稱。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三種變化均正確，並指出共同圓形與關鍵邊界。"
      },
      {
        "score": 2,
        "criteria": "三者主要判斷正確但少一個邊界或理由。"
      },
      {
        "score": 1,
        "criteria": "至少正確比較兩種立體，或只說出形狀皆為圓。"
      },
      {
        "score": 0,
        "criteria": "把三者都說成等大圓或混淆截面與展開圖。"
      }
    ],
    "partialCreditRules": [
      "三者主要判斷正確但少一個邊界或理由。",
      "至少正確比較兩種立體，或只說出形狀皆為圓。"
    ],
    "followThroughPolicy": "若圓錐方向由底面往頂點描述，大小遞減仍算正確；只要方向明確不扣分。",
    "unitNotationRules": "無數值單位；大小可用半徑或面積描述，但不可混成相同量。",
    "answerOnlyPolicy": "只列圓、圓、圓而無大小變化最多1分。",
    "difficulty": "standard",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "independentReview": {
      "derivedResult": "圓柱不變；圓錐由頂點到基底增大；球先增後減。",
      "ambiguityAndBoundary": "切片均平行於指定底面或固定方向。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "questionId": "u23-s008-cr001",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "cross-section-solid",
    "type": "constructed-response",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "4bd832d7bfd6abd5c9235db86cd208d78ef585d71ae6c8bd54a805ac642fd942"
  },
  {
    "prompt": "一個球半徑13公分，一平面距球心5公分。求圓形截面半徑，並比較它與通過球心截面的大小。",
    "requiredWork": [
      "建立球心、截面圓心與截面圓周點的直角三角形。",
      "用R²=d²+r²。",
      "比較與最大截面半徑13。"
    ],
    "fullCreditSolution": [
      "球半徑13為斜邊，球心到切面距離5為一股，截面半徑x為另一股。",
      "x²=13²−5²=169−25=144，所以x=12公分。",
      "通過球心時截面半徑為13公分，因此本截面較小。"
    ],
    "alternativeSolutions": [
      "可用5、12、13直角三角形直接辨認。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確建立直角三角形，求得12公分並比較小於最大截面13公分。"
      },
      {
        "score": 2,
        "criteria": "答案12公分與比較正確，但幾何理由簡略，或有一個可辨認算術小錯。"
      },
      {
        "score": 1,
        "criteria": "知道使用平方差或知道通過球心截面最大，完成一部分。"
      },
      {
        "score": 0,
        "criteria": "直接13−5=8且無修正，或認為所有球截面同大。"
      }
    ],
    "partialCreditRules": [
      "答案12公分與比較正確，但幾何理由簡略，或有一個可辨認算術小錯。",
      "知道使用平方差或知道通過球心截面最大，完成一部分。"
    ],
    "followThroughPolicy": "若列式正確但開根錯，可得2分；若比較方向正確但數值錯，保留比較分。",
    "unitNotationRules": "所有長度用公分，最後不可用平方公分。",
    "answerOnlyPolicy": "只寫12公分而無推理最多1分。",
    "difficulty": "advanced",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "independentReview": {
      "derivedResult": "截面半徑12公分，較通過球心的13公分小。",
      "ambiguityAndBoundary": "切面距離5小於球半徑13，存在非退化圓截面。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "questionId": "u23-s008-cr002",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "cross-section-solid",
    "type": "constructed-response",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "e93ba315b3d8da0648e967fd61a0d33da780a480c29d0b42a00f4db498fe18b6"
  }
];

export const DRAWING_SPECS = [];
