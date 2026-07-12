// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u23-s004-lecture-r1",
  "unitId": "u23",
  "numericUnitId": 23,
  "topicId": "u23-basics",
  "skillId": "solid-prism-concept",
  "title": "角柱概念：由底面邊數掌握面稜和頂點",
  "lockedSkillTitle": "角柱概念",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能依兩個全等且平行的多邊形底面辨認角柱。",
    "能由n角柱推得面數、稜數與頂點數。",
    "能區分直角柱與斜角柱以及底面與側面。",
    "能把實物抽象為角柱模型並說明限制。"
  ],
  "prerequisites": [
    {
      "skillId": "solid-cross-section",
      "requiredLevel": "能辨認柱體平行底面截面與底面全等。",
      "bridge": "角柱正是沿某方向保持同一多邊形截面的柱體。"
    }
  ],
  "glossary": [
    {
      "term": "角柱",
      "definition": "有兩個全等且互相平行的多邊形作底面，對應頂點以平行線段連接形成側面的立體。"
    },
    {
      "term": "n角柱",
      "definition": "底面為n邊形的角柱，例如三角柱、五角柱。"
    },
    {
      "term": "側稜",
      "definition": "連接兩底面對應頂點的稜。"
    },
    {
      "term": "直角柱",
      "definition": "側稜垂直於底面的角柱；其側面為長方形。"
    }
  ],
  "notation": [
    {
      "symbol": "n",
      "meaning": "底面多邊形的邊數，n為大於或等於3的整數。"
    },
    {
      "symbol": "F,E,V",
      "meaning": "分別表示面數、稜數與頂點數。"
    }
  ],
  "conceptNarrative": [
    "角柱名稱由底面形狀決定，不是由側面決定。三角柱有兩個三角形底面，四角柱有兩個四邊形底面。",
    "n角柱有上下兩個n邊形底面；每一條底邊對應一個側面，所以有n個側面。",
    "兩底面各有n個頂點，共2n個頂點；底面稜共2n條，再加n條側稜，共3n條稜；總面數n+2。",
    "直角柱的高等於側稜長；斜角柱的側稜不垂直底面，因此側稜長一般不等於兩底面垂直距離。"
  ],
  "formalDefinitions": [
    {
      "name": "n角柱",
      "statement": "兩底面為全等平行n邊形，側面依序連接對應邊。"
    },
    {
      "name": "角柱的高",
      "statement": "兩個平行底面之間的垂直距離。"
    }
  ],
  "formulas": [
    {
      "formula": "V=2n",
      "conditions": [
        "n角柱"
      ],
      "meaning": "兩底面各有n個頂點。"
    },
    {
      "formula": "E=3n",
      "conditions": [
        "n角柱"
      ],
      "meaning": "兩底面稜2n加側稜n。"
    },
    {
      "formula": "F=n+2",
      "conditions": [
        "n角柱"
      ],
      "meaning": "n個側面加2個底面。"
    },
    {
      "formula": "V-E+F=2",
      "conditions": [
        "凸角柱"
      ],
      "meaning": "可作為計數驗算。"
    }
  ],
  "nonApplicableCases": [
    "圓柱底面是圓，不稱n角柱。",
    "只看到很多長方形側面，仍須確認有兩個全等平行底面。",
    "斜角柱的高不能直接用側稜長。",
    "底面為凹多邊形時仍可成柱體，但會考主要處理凸多邊形角柱。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "找兩個互相平行且全等的面。",
      "check": "它們是否可作底面？"
    },
    {
      "step": 2,
      "instruction": "數底面邊數n。",
      "check": "立體名稱是否為n角柱？"
    },
    {
      "step": 3,
      "instruction": "分類面與稜。",
      "check": "側面n個、底面2個、側稜n條？"
    },
    {
      "step": 4,
      "instruction": "套用2n、3n、n+2。",
      "check": "n是否為至少3的整數？"
    },
    {
      "step": 5,
      "instruction": "用歐拉關係或直接重數驗算。",
      "check": "V-E+F是否為2？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "五角柱有多少頂點、稜與面？",
      "solutionSteps": [
        "n=5。",
        "頂點2n=10，稜3n=15，面n+2=7。"
      ],
      "answer": "10個頂點、15條稜、7個面。"
    },
    {
      "exampleId": "L2",
      "prompt": "一個角柱有18條稜，底面是幾邊形？",
      "solutionSteps": [
        "3n=18。",
        "n=6。"
      ],
      "answer": "六邊形，為六角柱。"
    },
    {
      "exampleId": "L3",
      "prompt": "三角柱有幾個側面？",
      "solutionSteps": [
        "底面三角形有3條邊。",
        "每條底邊對應一個側面。"
      ],
      "answer": "3個側面。"
    },
    {
      "exampleId": "L4",
      "prompt": "斜四角柱側稜長8公分，能否直接說高為8公分？",
      "solutionSteps": [
        "高是兩底面垂直距離。",
        "斜側稜不垂直底面。"
      ],
      "answer": "不能。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "以最大的側面作底面命名。",
      "why": "角柱底面是那一對全等平行多邊形。",
      "correction": "先找成對底面再數邊。"
    },
    {
      "mistake": "n角柱有n個面。",
      "why": "漏掉兩個底面。",
      "correction": "總面數為n+2。"
    },
    {
      "mistake": "稜數算成2n。",
      "why": "只數兩底面邊，漏掉側稜。",
      "correction": "加上n條側稜得3n。"
    },
    {
      "mistake": "頂點數算成n。",
      "why": "只數一個底面。",
      "correction": "兩底面各n個，共2n。"
    },
    {
      "mistake": "把圓柱稱為無限角柱並套公式。",
      "why": "國中角柱定義要求多邊形底面。",
      "correction": "圓柱另行處理。"
    },
    {
      "mistake": "斜角柱把側稜當高。",
      "why": "高必須垂直底面。",
      "correction": "作兩底面間的垂線段。"
    }
  ],
  "selfCheck": [
    "我是否先找出兩個全等平行底面？",
    "n代表底面邊數嗎？",
    "面數是否加上兩底面？",
    "稜數是否包含側稜？",
    "斜角柱是否把垂直高與側稜分開？"
  ],
  "summary": [
    "角柱由兩個全等平行多邊形底面與側面組成。",
    "n角柱有2n個頂點、3n條稜、n+2個面。",
    "名稱由底面邊數決定。",
    "高是底面間垂直距離。"
  ],
  "connections": {
    "previous": "承接柱體平行截面全等底面的觀念，建立角柱的結構與計數。",
    "next": [
      "角錐會只有一個底面並把側面會聚到頂點。",
      "柱體表面積與體積會使用底面和高。"
    ]
  },
  "figureReferences": [
    "u23-s004-fig001"
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u23-s004-v001",
      "u23-s004-v002",
      "u23-s004-v003",
      "u23-s004-v004",
      "u23-s004-v005",
      "u23-s004-v006",
      "u23-s004-v007",
      "u23-s004-v008",
      "u23-s004-v009",
      "u23-s004-v010",
      "u23-s004-v011",
      "u23-s004-v012"
    ],
    "constructedResponseIds": [
      "u23-s004-cr001",
      "u23-s004-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "以五角柱與18稜反推例題驗算三個公式，並特別檢查斜角柱的側稜和高不混用；所有計數亦通過V−E+F=2。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
  "contentSha256": "91bc9501d53598d8000b2d41689d1549359b3544c9cff320bdea5604d3d8224d"
};

export const QUESTIONS = [
  {
    "prompt": "三角柱有幾個底面？",
    "text": "三角柱有幾個底面？",
    "choices": [
      "5個",
      "1個",
      "3個",
      "2個"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：套用角柱定義。所得結果是「2個」。",
    "explanation": "任何角柱都有兩個全等且平行的底面，因此三角柱有2個三角形底面。",
    "steps": [
      "套用角柱定義"
    ],
    "optionAnalysis": [
      {
        "choice": "5個",
        "truth": false,
        "reason": "5是總面數。"
      },
      {
        "choice": "1個",
        "truth": false,
        "reason": "角錐才只有一底面。"
      },
      {
        "choice": "3個",
        "truth": false,
        "reason": "3是側面數。"
      },
      {
        "choice": "2個",
        "truth": true,
        "reason": "依獨立計算「套用角柱定義」，此選項符合所求「求底面數」。"
      }
    ],
    "misconceptionTarget": "把側面數或總面數當底面數。",
    "authoringIntent": "辨認角柱底面數。",
    "difficulty": "basic",
    "givenConditions": [
      "立體為三角柱"
    ],
    "target": "求底面數",
    "difficultyReason": "定義直接判讀。 本題以「辨認角柱底面數。」作為該難度的具體判準。",
    "prerequisiteCheck": "知道三角形。 本題只再使用先備「solid-cross-section」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "單位為個。 所求「求底面數」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "角柱封閉且兩底面皆計入。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s004-v001",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-prism-concept",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "角柱概念",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "a64e4206d5663b4f7dcd0b690266b827e194c06bd956aac990f8162454862d54"
  },
  {
    "prompt": "四角柱共有多少個頂點？",
    "text": "四角柱共有多少個頂點？",
    "choices": [
      "8個",
      "4個",
      "12個",
      "6個"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：n=4；頂點2n=8。所得結果是「8個」。",
    "explanation": "四角柱每個底面4個頂點，兩底面共2×4=8個。",
    "steps": [
      "n=4",
      "頂點2n=8"
    ],
    "optionAnalysis": [
      {
        "choice": "8個",
        "truth": true,
        "reason": "依獨立計算「頂點2n=8」，此選項符合所求「求頂點數」。"
      },
      {
        "choice": "4個",
        "truth": false,
        "reason": "只數一底面。"
      },
      {
        "choice": "12個",
        "truth": false,
        "reason": "12是稜數。"
      },
      {
        "choice": "6個",
        "truth": false,
        "reason": "無此計數。"
      }
    ],
    "misconceptionTarget": "只數一個底面的頂點。 必須依「計算四角柱頂點數。」的關係重新核對。",
    "authoringIntent": "計算四角柱頂點數。",
    "difficulty": "basic",
    "givenConditions": [
      "n=4"
    ],
    "target": "求頂點數",
    "difficultyReason": "單一公式。 本題以「計算四角柱頂點數。」作為該難度的具體判準。",
    "prerequisiteCheck": "能乘2。 本題只再使用先備「solid-cross-section」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "單位為個。 所求「求頂點數」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "四角柱定義明確。 題幹已完整限制「求頂點數」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s004-v002",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-prism-concept",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "角柱概念",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "e0f8b7302e046eaee864f7f864e238376c1487e0b2af71d7ed207c4b33d52e61"
  },
  {
    "prompt": "五角柱有多少個側面？",
    "text": "五角柱有多少個側面？",
    "choices": [
      "2個",
      "5個",
      "7個",
      "10個"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，從五角柱的底面五邊形出發：每一條底邊向另一底面延伸成一個四邊形側面，因此共有5個側面。",
    "explanation": "底面五邊形有5條邊，每條底邊對應一個側面，所以有5個側面。",
    "steps": [
      "底面邊數5",
      "側面數等於n"
    ],
    "optionAnalysis": [
      {
        "choice": "2個",
        "truth": false,
        "reason": "2是底面數。"
      },
      {
        "choice": "5個",
        "truth": true,
        "reason": "依獨立計算「側面數等於n」，此選項符合所求「求側面數」。"
      },
      {
        "choice": "7個",
        "truth": false,
        "reason": "7是總面數。"
      },
      {
        "choice": "10個",
        "truth": false,
        "reason": "10是頂點數。"
      }
    ],
    "misconceptionTarget": "把總面數n+2當側面數。",
    "authoringIntent": "計算角柱側面數。",
    "difficulty": "basic",
    "givenConditions": [
      "n=5"
    ],
    "target": "求側面數",
    "difficultyReason": "直接對應底邊。 本題以「計算角柱側面數。」作為該難度的具體判準。",
    "prerequisiteCheck": "知道五邊形。 本題只再使用先備「solid-cross-section」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "單位為個。 所求「求側面數」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "側面不含兩底面。 題幹已完整限制「求側面數」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s004-v003",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-prism-concept",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "角柱概念",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "c89cf63bfb54d398c7e93ea743f29e5cab2e29e04b477294c15846b5158c58a6"
  },
  {
    "prompt": "某角柱共有 18 條稜。它的底面是幾邊形？",
    "text": "某角柱共有 18 條稜。它的底面是幾邊形？",
    "choices": [
      "四邊形",
      "五邊形",
      "六邊形",
      "九邊形"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：使用稜數3n；18÷3=6。所得結果是「六邊形」。",
    "explanation": "n角柱有上下底共2n條底稜，加n條側稜，共3n條。3n=18，所以n=6，底面為六邊形。",
    "steps": [
      "使用稜數3n",
      "18÷3=6"
    ],
    "optionAnalysis": [
      {
        "choice": "四邊形",
        "truth": false,
        "reason": "四邊形角柱的稜數不是18。"
      },
      {
        "choice": "五邊形",
        "truth": false,
        "reason": "五邊形角柱的稜數不是18。"
      },
      {
        "choice": "六邊形",
        "truth": true,
        "reason": "n角柱有3n條稜，18=3×6。"
      },
      {
        "choice": "九邊形",
        "truth": false,
        "reason": "九邊形角柱的稜數不是18。"
      }
    ],
    "misconceptionTarget": "把18除以2，只計上下底稜而漏側稜。",
    "authoringIntent": "由角柱稜數反推底面邊數。",
    "difficulty": "standard",
    "givenConditions": [
      "角柱",
      "總稜數18"
    ],
    "target": "底面邊數",
    "difficultyReason": "需理解3n來源。 本題以「由角柱稜數反推底面邊數。」作為該難度的具體判準。",
    "prerequisiteCheck": "能分類稜。 本題只再使用先備「solid-cross-section」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "邊數為無單位正整數。 所求「底面邊數」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "依角柱結構3n=18，n唯一為6。",
    "literacyContextNecessity": null,
    "figureId": "u23-s004-fig001",
    "drawingSpecId": "u23-s004-draw001",
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s004-v004",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-prism-concept",
    "type": "mc",
    "visualMode": "svg",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "角柱概念",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "34e7694013002ce820f48b9d281347930422a4afc4e26226c6882597171574e2"
  },
  {
    "prompt": "一個角柱有14個頂點，它的底面是幾邊形？",
    "text": "一個角柱有14個頂點，它的底面是幾邊形？",
    "choices": [
      "六邊形",
      "十四邊形",
      "十二邊形",
      "七邊形"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：列2n=14；n=7。所得結果是「七邊形」。",
    "explanation": "角柱頂點數2n=14，所以n=7，底面為七邊形。",
    "steps": [
      "列2n=14",
      "n=7"
    ],
    "optionAnalysis": [
      {
        "choice": "六邊形",
        "truth": false,
        "reason": "會只有12頂點。"
      },
      {
        "choice": "十四邊形",
        "truth": false,
        "reason": "未除以2。"
      },
      {
        "choice": "十二邊形",
        "truth": false,
        "reason": "無對應。"
      },
      {
        "choice": "七邊形",
        "truth": true,
        "reason": "依獨立計算「n=7」，此選項符合所求「求底面邊數」。"
      }
    ],
    "misconceptionTarget": "把總頂點數直接當底面邊數。",
    "authoringIntent": "由頂點數反推底面。",
    "difficulty": "standard",
    "givenConditions": [
      "角柱有14頂點"
    ],
    "target": "求底面邊數",
    "difficultyReason": "反用公式。 本題以「由頂點數反推底面。」作為該難度的具體判準。",
    "prerequisiteCheck": "會解簡單方程。 本題只再使用先備「solid-cross-section」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無長度單位。 所求「求底面邊數」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "n=7為合法多邊形邊數。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s004-v005",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-prism-concept",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "角柱概念",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "5c6b3f8196d49c3d1852f4d080118179343147b861cf49f424f0f0c9100253b9"
  },
  {
    "prompt": "下列哪一項是角柱的必要特徵？",
    "text": "下列哪一項是角柱的必要特徵？",
    "choices": [
      "有兩個全等且平行的多邊形底面",
      "所有側面都必為正方形",
      "只有一個底面",
      "所有稜等長"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：檢查角柱定義。所得結果是「有兩個全等且平行的多邊形底面」。",
    "explanation": "角柱的核心定義是兩個全等且平行的多邊形底面；側面形狀與稜長不必全相同。",
    "steps": [
      "檢查角柱定義"
    ],
    "optionAnalysis": [
      {
        "choice": "有兩個全等且平行的多邊形底面",
        "truth": true,
        "reason": "依獨立計算「檢查角柱定義」，此選項符合所求「選出定義性特徵」。"
      },
      {
        "choice": "所有側面都必為正方形",
        "truth": false,
        "reason": "直角柱側面也未必正方形。"
      },
      {
        "choice": "只有一個底面",
        "truth": false,
        "reason": "是角錐特徵。"
      },
      {
        "choice": "所有稜等長",
        "truth": false,
        "reason": "一般角柱不需等稜。"
      }
    ],
    "misconceptionTarget": "只憑側面是長方形判角柱或要求所有稜等長。",
    "authoringIntent": "辨認角柱必要條件。",
    "difficulty": "standard",
    "givenConditions": [
      "一般角柱"
    ],
    "target": "選出定義性特徵",
    "difficultyReason": "需區分必要與非必要性質。",
    "prerequisiteCheck": "理解全等和平行。 本題只再使用先備「solid-cross-section」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位。 所求「選出定義性特徵」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "選項二完整且不過度限制。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s004-v006",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-prism-concept",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "角柱概念",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "be227e23c654293ebc77c91ef94ec1ceef7e26d2a235b3a1c8c4ac335ea2553f"
  },
  {
    "prompt": "一個角柱有9個面，則它有多少條稜？",
    "text": "一個角柱有9個面，則它有多少條稜？",
    "choices": [
      "18條",
      "21條",
      "24條",
      "27條"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：n+2=9得n=7；3n=21。所得結果是「21條」。",
    "explanation": "面數n+2=9，所以n=7。稜數3n=21。",
    "steps": [
      "n+2=9得n=7",
      "3n=21"
    ],
    "optionAnalysis": [
      {
        "choice": "18條",
        "truth": false,
        "reason": "把n=6。"
      },
      {
        "choice": "21條",
        "truth": true,
        "reason": "依獨立計算「3n=21」，此選項符合所求「求稜數」。"
      },
      {
        "choice": "24條",
        "truth": false,
        "reason": "此選項無法符合所求「求稜數」；錯誤來源會是：未先由總面數扣除兩底面。"
      },
      {
        "choice": "27條",
        "truth": false,
        "reason": "把面數9直接乘3。"
      }
    ],
    "misconceptionTarget": "未先由總面數扣除兩底面。",
    "authoringIntent": "由面數跨公式求稜數。",
    "difficulty": "advanced",
    "givenConditions": [
      "凸角柱",
      "總面數9"
    ],
    "target": "求稜數",
    "difficultyReason": "需兩步反推n再計算。 本題以「由面數跨公式求稜數。」作為該難度的具體判準。",
    "prerequisiteCheck": "熟悉兩個公式。 本題只再使用先備「solid-cross-section」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "單位為條。 所求「求稜數」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "n=7符合角柱底面至少三邊。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s004-v007",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-prism-concept",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "角柱概念",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "04c355b8613b9d7533c3c7d92381faeb6ffeed3a180ddaa9b652b85527eb79d1"
  },
  {
    "prompt": "某角柱有24條稜。它共有多少個面？",
    "text": "某角柱有24條稜。它共有多少個面？",
    "choices": [
      "6個",
      "8個",
      "10個",
      "12個"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：n=24÷3=8；F=8+2=10。所得結果是「10個」。",
    "explanation": "3n=24得n=8，總面數n+2=10。",
    "steps": [
      "n=24÷3=8",
      "F=8+2=10"
    ],
    "optionAnalysis": [
      {
        "choice": "6個",
        "truth": false,
        "reason": "漏掉4面。"
      },
      {
        "choice": "8個",
        "truth": false,
        "reason": "只給側面數。"
      },
      {
        "choice": "10個",
        "truth": true,
        "reason": "依獨立計算「F=8+2=10」，此選項符合所求「求總面數」。"
      },
      {
        "choice": "12個",
        "truth": false,
        "reason": "誤加4。"
      }
    ],
    "misconceptionTarget": "把稜數除2而不是除3。 必須依「由稜數求面數。」的關係重新核對。",
    "authoringIntent": "由稜數求面數。",
    "difficulty": "advanced",
    "givenConditions": [
      "總稜數24"
    ],
    "target": "求總面數",
    "difficultyReason": "跨兩個結構公式。 本題以「由稜數求面數。」作為該難度的具體判準。",
    "prerequisiteCheck": "會整數除法。 本題只再使用先備「solid-cross-section」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "單位為個。 所求「求總面數」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "24可被3整除，得到合法n。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s004-v008",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-prism-concept",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "角柱概念",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "bc21cf54c34f1594cdb0dff1fd120e448a852313b871bf7b80a00508fe95ca46"
  },
  {
    "prompt": "斜五角柱的一條側稜長10公分。下列何者一定正確？",
    "text": "斜五角柱的一條側稜長10公分。下列何者一定正確？",
    "choices": [
      "角柱高也是10公分",
      "底面周長為50公分",
      "所有稜都10公分",
      "角柱高小於10公分"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：區分側稜與垂直高；垂線段短於斜線段。所得結果是「角柱高小於10公分」。",
    "explanation": "高是兩平行底面間的垂直距離。題目明說斜角柱，側稜不是垂線，因此高小於10公分。",
    "steps": [
      "區分側稜與垂直高",
      "垂線段短於斜線段"
    ],
    "optionAnalysis": [
      {
        "choice": "角柱高也是10公分",
        "truth": false,
        "reason": "斜角柱側稜不等於高。"
      },
      {
        "choice": "底面周長為50公分",
        "truth": false,
        "reason": "無底邊資料。"
      },
      {
        "choice": "所有稜都10公分",
        "truth": false,
        "reason": "未給其他稜長。"
      },
      {
        "choice": "角柱高小於10公分",
        "truth": true,
        "reason": "依獨立計算「垂線段短於斜線段」，此選項符合所求「判斷必然關係」。"
      }
    ],
    "misconceptionTarget": "把斜側稜直接當高。 必須依「比較斜角柱高與側稜。」的關係重新核對。",
    "authoringIntent": "比較斜角柱高與側稜。",
    "difficulty": "advanced",
    "givenConditions": [
      "斜角柱",
      "側稜10公分"
    ],
    "target": "判斷必然關係",
    "difficultyReason": "需理解垂線段最短。 本題以「比較斜角柱高與側稜。」作為該難度的具體判準。",
    "prerequisiteCheck": "具備垂線概念。 本題只再使用先備「solid-cross-section」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "長度單位公分一致。 所求「判斷必然關係」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "斜角柱排除相等情形。 題幹已完整限制「判斷必然關係」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s004-v009",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-prism-concept",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "角柱概念",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "ef6fd2b629408357d5d5852592b88bd9f692b945a3c6916d23aef31df17c718e"
  },
  {
    "prompt": "建築師設計一座截面始終為正六邊形、上下兩端全等且平行的直立塔體。最適合的幾何模型是什麼？",
    "text": "建築師設計一座截面始終為正六邊形、上下兩端全等且平行的直立塔體。最適合的幾何模型是什麼？",
    "choices": [
      "六角柱",
      "六角錐",
      "圓柱",
      "正方體"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：辨認底面六邊形；確認兩底面全等平行。所得結果是「六角柱」。",
    "explanation": "上下兩端是全等平行正六邊形，而且沿高度截面不變，符合六角柱。",
    "steps": [
      "辨認底面六邊形",
      "確認兩底面全等平行"
    ],
    "optionAnalysis": [
      {
        "choice": "六角柱",
        "truth": true,
        "reason": "依獨立計算「確認兩底面全等平行」，此選項符合所求「選擇立體模型」。"
      },
      {
        "choice": "六角錐",
        "truth": false,
        "reason": "角錐會收斂到頂點。"
      },
      {
        "choice": "圓柱",
        "truth": false,
        "reason": "底面應為圓。"
      },
      {
        "choice": "正方體",
        "truth": false,
        "reason": "底面為正方形。"
      }
    ],
    "misconceptionTarget": "只因塔形想像而選角錐，忽略截面不變。",
    "authoringIntent": "把建築描述辨認為六角柱。",
    "difficulty": "literacy",
    "givenConditions": [
      "上下端正六邊形",
      "全等且平行",
      "直立"
    ],
    "target": "選擇立體模型",
    "difficultyReason": "需從結構語句抽象模型。 本題以「把建築描述辨認為六角柱。」作為該難度的具體判準。",
    "prerequisiteCheck": "理解角柱定義。 本題只再使用先備「solid-cross-section」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無尺寸。 所求「選擇立體模型」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "截面始終相同排除錐體。 題幹已完整限制「選擇立體模型」的範圍與取值方向。",
    "literacyContextNecessity": "上下端全等且平行、截面始終相同，正是判定角柱而非角錐的必要建模條件。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s004-v010",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-prism-concept",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "角柱概念",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "f9eed4f3d8f8df8f2f00cdfef51f92d22c50eae59c2635830c459b5aaf9577ab"
  },
  {
    "prompt": "一個三角柱形透明展示盒，需要在每一條稜貼一條保護條。應準備幾條？",
    "text": "一個三角柱形透明展示盒，需要在每一條稜貼一條保護條。應準備幾條？",
    "choices": [
      "5條",
      "9條",
      "6條",
      "12條"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：底面稜6條；側稜3條；共9條。所得結果是「9條」。",
    "explanation": "三角柱n=3，總稜數3n=9，因此需9條保護條。",
    "steps": [
      "底面稜6條",
      "側稜3條",
      "共9條"
    ],
    "optionAnalysis": [
      {
        "choice": "5條",
        "truth": false,
        "reason": "5是總面數。"
      },
      {
        "choice": "9條",
        "truth": true,
        "reason": "依獨立計算「共9條」，此選項符合所求「求保護條數」。"
      },
      {
        "choice": "6條",
        "truth": false,
        "reason": "只數底面稜。"
      },
      {
        "choice": "12條",
        "truth": false,
        "reason": "此選項無法符合所求「求保護條數」；錯誤來源會是：只沿兩個三角形邊貼，漏掉連接兩底面的稜。"
      }
    ],
    "misconceptionTarget": "只沿兩個三角形邊貼，漏掉連接兩底面的稜。",
    "authoringIntent": "由實物需求計算三角柱稜數。",
    "difficulty": "literacy",
    "givenConditions": [
      "每條稜貼一條",
      "展示盒為三角柱"
    ],
    "target": "求保護條數",
    "difficultyReason": "需將材料數對應總稜數。 本題以「由實物需求計算三角柱稜數。」作為該難度的具體判準。",
    "prerequisiteCheck": "知道3n。 本題只再使用先備「solid-cross-section」與本技能定義。",
    "estimatedTimeSec": 95,
    "unitCheck": "單位為條。 所求「求保護條數」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "一條稜對應一條保護條，無接長資訊。",
    "literacyContextNecessity": "保護條數直接由稜的完整分類決定，實物目的使計數有意義。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s004-v011",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-prism-concept",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "角柱概念",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "0cf1c5b1d5b7902df94cfd8480e1490d19fd74f9d398a343b72066796101fd50"
  },
  {
    "prompt": "工廠製作八角柱形零件，每個面都要貼一張識別標籤。每個零件需幾張標籤？",
    "text": "工廠製作八角柱形零件，每個面都要貼一張識別標籤。每個零件需幾張標籤？",
    "choices": [
      "8張",
      "16張",
      "10張",
      "24張"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：n=8；總面數n+2=10。所得結果是「10張」。",
    "explanation": "八角柱有8個側面和2個底面，共10個面，所以需10張。",
    "steps": [
      "n=8",
      "總面數n+2=10"
    ],
    "optionAnalysis": [
      {
        "choice": "8張",
        "truth": false,
        "reason": "只標側面。"
      },
      {
        "choice": "16張",
        "truth": false,
        "reason": "是頂點數。"
      },
      {
        "choice": "10張",
        "truth": true,
        "reason": "依獨立計算「總面數n+2=10」，此選項符合所求「求標籤張數」。"
      },
      {
        "choice": "24張",
        "truth": false,
        "reason": "是稜數。"
      }
    ],
    "misconceptionTarget": "忽略上下底面也需要標籤。",
    "authoringIntent": "以面數計算標籤需求。",
    "difficulty": "literacy",
    "givenConditions": [
      "每面一張",
      "零件為八角柱"
    ],
    "target": "求標籤張數",
    "difficultyReason": "需辨認總面數而非側面數。",
    "prerequisiteCheck": "熟悉n+2。 本題只再使用先備「solid-cross-section」與本技能定義。",
    "estimatedTimeSec": 80,
    "unitCheck": "單位為張。 所求「求標籤張數」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "題目明說每個面，包含兩底面。",
    "literacyContextNecessity": "每個面各貼一張的規則，把八角柱的面數直接轉成標籤總數，刪除情境便沒有計數目標。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s004-v012",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-prism-concept",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "角柱概念",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "ffc9cb8fbafe7b46e63c37de31c274e92a7902582796c198176eecbdc985e8b1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "prompt": "請推導n角柱的頂點數、稜數與面數公式，並用五角柱驗算。",
    "requiredWork": [
      "分類兩個底面與側面。",
      "推導V=2n、E=3n、F=n+2。",
      "代入n=5。"
    ],
    "fullCreditSolution": [
      "兩底面各有n個頂點，所以V=2n。",
      "兩底面共有2n條底面稜，另有n條側稜，所以E=3n。",
      "有n個側面與2個底面，所以F=n+2。",
      "五角柱n=5，故V=10、E=15、F=7，且10−15+7=2。"
    ],
    "alternativeSolutions": [
      "可畫出兩個n邊形並逐一配對頂點、邊與側面。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三個公式皆正確且說明來源，五角柱代入得到10、15、7並完成合理驗算。"
      },
      {
        "score": 2,
        "criteria": "三公式正確但推導或驗算略缺，或只有一個非核心計數筆誤。"
      },
      {
        "score": 1,
        "criteria": "至少正確推導兩項，或五角柱三個數中有兩個正確。"
      },
      {
        "score": 0,
        "criteria": "公式多數錯誤且無結構分類。"
      }
    ],
    "partialCreditRules": [
      "三公式正確但推導或驗算略缺，或只有一個非核心計數筆誤。",
      "至少正確推導兩項，或五角柱三個數中有兩個正確。"
    ],
    "followThroughPolicy": "若公式推導正確但五角柱算術錯，保留推導分；若先誤設n但後續一致，依能否清楚分類給1分。",
    "unitNotationRules": "頂點、稜、面分別使用個、條、個；n為底面邊數。",
    "answerOnlyPolicy": "只寫三公式而無推導與驗算，最多2分。",
    "difficulty": "standard",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "independentReview": {
      "derivedResult": "V=2n、E=3n、F=n+2；五角柱為10、15、7。",
      "ambiguityAndBoundary": "公式適用於角柱，未套到圓柱。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "questionId": "u23-s004-cr001",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-prism-concept",
    "type": "constructed-response",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "735685ffb47a4e00dac9a02e97b2c13d39f9c89238ac7f1f7fd162daa3cb110a"
  },
  {
    "prompt": "某角柱共有30條稜。求它的名稱、頂點數與面數，並說明斜角柱時為何不能由側稜長直接得到高。",
    "requiredWork": [
      "由3n=30求n。",
      "求頂點與面數。",
      "區分側稜和垂直高。"
    ],
    "fullCreditSolution": [
      "3n=30，所以n=10，為十角柱。",
      "頂點數2n=20，面數n+2=12。",
      "斜角柱的側稜斜向連接兩底面；高是兩平行底面間的垂直距離，通常短於側稜，因此不能直接相等。"
    ],
    "alternativeSolutions": [
      "可用V−E+F=20−30+12=2驗算。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確得十角柱、20頂點、12面，並清楚說明高是垂直距離而非斜側稜。"
      },
      {
        "score": 2,
        "criteria": "三個計數結果正確但高度說明簡略，或計數有一個小錯但方法正確。"
      },
      {
        "score": 1,
        "criteria": "能由30條稜求n=10，或能正確說明斜角柱高的意義。"
      },
      {
        "score": 0,
        "criteria": "把30當底面邊數且無修正，亦把側稜必定當高。"
      }
    ],
    "partialCreditRules": [
      "三個計數結果正確但高度說明簡略，或計數有一個小錯但方法正確。",
      "能由30條稜求n=10，或能正確說明斜角柱高的意義。"
    ],
    "followThroughPolicy": "若3n=30列式正確但除法誤算，後續公式一致可得1至2分；高度概念另行給分。",
    "unitNotationRules": "長度若提及應使用同一單位；本題主要計數不需實際長度。",
    "answerOnlyPolicy": "只給十角柱、20、12而無任何推理最多2分。",
    "difficulty": "advanced",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "independentReview": {
      "derivedResult": "十角柱，20個頂點，12個面；斜側稜不等於垂直高。",
      "ambiguityAndBoundary": "30可整除3，得到合法n=10；高度說明不需數值。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "questionId": "u23-s004-cr002",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-prism-concept",
    "type": "constructed-response",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "c39c7d989b263e350cf31e391a1b173aceee780ceb6423118eced0e0d3fd01a5"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u23-s004-fig001",
    "drawingSpecId": "u23-s004-draw001",
    "unitId": "u23",
    "skillSlot": "s004",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "purpose": "六角柱結構示意",
    "svgPath": "figures/u23/u23-s004-fig001.svg",
    "canvas": {
      "width": 700,
      "height": 420,
      "viewBox": "0 0 700 420"
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
    "altText": "上下兩個全等平行六邊形由六條側稜連接。",
    "svgTitle": "六角柱結構示意",
    "svgDescription": "上下兩個全等平行六邊形由六條側稜連接。",
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
      "reviewNote": "u23-s004-fig001 已核對題圖數值、線型、標籤、縮放警語與答案不外洩。",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "b670463d739f6a5f8cd95b2c1fa8ae79b6f02f93557cad561b7529ef538fbbaf"
  }
];
