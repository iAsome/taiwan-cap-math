// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u23-s009-lecture-r1",
  "unitId": "u23",
  "numericUnitId": 23,
  "topicId": "u23-measure",
  "skillId": "prism-surface-area",
  "title": "柱體表面積：分清兩個底面與側面帶",
  "lockedSkillTitle": "柱體表面積",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能由展開圖推導直柱體表面積公式。",
    "能計算角柱與圓柱的側面積和總表面積。",
    "能處理無蓋、開口或貼合面不計的情況。",
    "能正確使用平方單位並檢查公式中的周長與面積。"
  ],
  "prerequisites": [
    {
      "skillId": "cross-section-solid",
      "requiredLevel": "能辨認柱體有兩個全等底面與固定高度。",
      "bridge": "截面告訴底面形狀不變；表面積把兩底面與沿底面周界展開的側面全部加總。"
    }
  ],
  "glossary": [
    {
      "term": "表面積",
      "definition": "立體所有外露表面的面積總和。"
    },
    {
      "term": "側面積",
      "definition": "不含底面的所有側面面積總和。"
    },
    {
      "term": "底面積B",
      "definition": "其中一個底面的面積。"
    },
    {
      "term": "底面周長P",
      "definition": "底面邊界一周的長度。"
    }
  ],
  "notation": [
    {
      "symbol": "B",
      "meaning": "單一底面面積。"
    },
    {
      "symbol": "P",
      "meaning": "單一底面周長。"
    },
    {
      "symbol": "h",
      "meaning": "直柱體的高。"
    },
    {
      "symbol": "S",
      "meaning": "總表面積。"
    }
  ],
  "conceptNarrative": [
    "直柱體沿側稜剪開後，所有側面可排成一條長方形帶；這條帶的長等於底面周長P，寬等於高h。",
    "因此側面積為Ph。完整封閉柱體還有兩個全等底面，各面積B，所以總表面積S=2B+Ph。",
    "長方體也可由三組全等相對面得到S=2(lw+lh+wh)。圓柱則B=πr²、P=2πr。",
    "題目若說無蓋、無底、貼合或挖去，必須先判斷哪些面真正外露，不能機械套完整公式。"
  ],
  "formalDefinitions": [
    {
      "name": "直柱體側面積",
      "statement": "底面周長乘高，即Ph。"
    },
    {
      "name": "完整直柱體表面積",
      "statement": "兩底面積加側面積，即S=2B+Ph。"
    }
  ],
  "formulas": [
    {
      "formula": "S側=Ph",
      "conditions": [
        "直柱體",
        "側面沿高度展開"
      ],
      "meaning": "所有側面長方形寬度總和為底面周長。"
    },
    {
      "formula": "S總=2B+Ph",
      "conditions": [
        "兩底面都封閉且外露"
      ],
      "meaning": "加上兩個全等底面。"
    },
    {
      "formula": "長方體S=2(lw+lh+wh)",
      "conditions": [
        "長、寬、高互相垂直"
      ],
      "meaning": "三組相對長方形各兩個。"
    },
    {
      "formula": "圓柱S=2πr²+2πrh",
      "conditions": [
        "完整直圓柱"
      ],
      "meaning": "兩底圓加曲側面。"
    }
  ],
  "nonApplicableCases": [
    "斜柱體側面積不一定能直接用Ph。",
    "無蓋容器不能加兩個底面。",
    "貼在桌面的底面若題目問外露面積，通常不計。",
    "表面積單位必須是平方單位，不可寫成立方單位。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "列出所有外露面。",
      "check": "有蓋、無蓋、貼合或開口？"
    },
    {
      "step": 2,
      "instruction": "計算單一底面積B與周長P。",
      "check": "B用平方公式，P用邊界長度。"
    },
    {
      "step": 3,
      "instruction": "計算側面積Ph。",
      "check": "h是否為垂直高？"
    },
    {
      "step": 4,
      "instruction": "按外露底面數加B。",
      "check": "是0個、1個還是2個底面？"
    },
    {
      "step": 5,
      "instruction": "檢查平方單位與合理大小。",
      "check": "答案是否大於每個單面面積？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "長方體長4、寬3、高2公分，表面積多少？",
      "solutionSteps": [
        "2(4×3+4×2+3×2)=2(12+8+6)。"
      ],
      "answer": "52平方公分。"
    },
    {
      "exampleId": "L2",
      "prompt": "底面周長18公分、底面積20平方公分、高5公分的直角柱，總表面積多少？",
      "solutionSteps": [
        "側面積18×5=90。",
        "兩底面40。"
      ],
      "answer": "130平方公分。"
    },
    {
      "exampleId": "L3",
      "prompt": "半徑3、高4公分的完整圓柱表面積？",
      "solutionSteps": [
        "兩底面2π×9=18π。",
        "側面2π×3×4=24π。"
      ],
      "answer": "42π平方公分。"
    },
    {
      "exampleId": "L4",
      "prompt": "同一圓柱若無上蓋，外表面積多少？",
      "solutionSteps": [
        "只保留下底面9π與側面24π。"
      ],
      "answer": "33π平方公分。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "用底面積B乘高算側面積。",
      "why": "B×h是體積。",
      "correction": "側面帶的長是周長P，所以用Ph。"
    },
    {
      "mistake": "完整柱體只加一個底面。",
      "why": "漏掉上底或下底。",
      "correction": "先數外露底面數。"
    },
    {
      "mistake": "無蓋容器仍套2B+Ph。",
      "why": "未刪除上底。",
      "correction": "改用B+Ph。"
    },
    {
      "mistake": "圓柱側面積寫πr²h。",
      "why": "把底面積當展開長。",
      "correction": "側面長方形邊為2πr與h。"
    },
    {
      "mistake": "表面積寫立方公分。",
      "why": "混淆面積與體積。",
      "correction": "所有表面積用平方單位。"
    },
    {
      "mistake": "組合黏合面也算外露。",
      "why": "沒有先判斷可見表面。",
      "correction": "接合後內部面要扣除。"
    }
  ],
  "selfCheck": [
    "我是否先列外露面？",
    "B與P是否分清？",
    "側面積是否為Ph？",
    "底面加了幾個？",
    "答案是否用平方單位？"
  ],
  "summary": [
    "直柱體側面積為Ph。",
    "完整表面積為2B+Ph。",
    "圓柱用B=πr²與P=2πr。",
    "開口與貼合情況必須依外露面調整。"
  ],
  "connections": {
    "previous": "由截面和柱體結構進入外表面的量化。",
    "next": [
      "柱體體積會改用B乘h。",
      "由展開圖求表面積會直接加總各面。"
    ]
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u23-s009-v001",
      "u23-s009-v002",
      "u23-s009-v003",
      "u23-s009-v004",
      "u23-s009-v005",
      "u23-s009-v006",
      "u23-s009-v007",
      "u23-s009-v008",
      "u23-s009-v009",
      "u23-s009-v010",
      "u23-s009-v011",
      "u23-s009-v012"
    ],
    "constructedResponseIds": [
      "u23-s009-cr001",
      "u23-s009-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "分別以長方體、一般角柱、完整圓柱與無蓋圓柱重算，檢查B與P角色、底面數和平方單位；開口條件已獨立處理。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
  "contentSha256": "a31be93c7392900773a10a80a01c0ca8e3a8fedf745d5182d30382a65f07a9b5"
};

export const QUESTIONS = [
  {
    "prompt": "一個長方體長 6 公分、寬 4 公分、高 3 公分，其表面積是多少？",
    "text": "一個長方體長 6 公分、寬 4 公分、高 3 公分，其表面積是多少？",
    "choices": [
      "108 平方公分",
      "72 平方公分",
      "54 平方公分",
      "144 平方公分"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：算三種相鄰邊乘積；將和乘以2。所得結果是「108 平方公分」。",
    "explanation": "六個面分成三組：6×4、6×3、4×3，各有兩個，所以表面積為 2(24+18+12)=108 平方公分。",
    "steps": [
      "算三種相鄰邊乘積",
      "將和乘以2"
    ],
    "optionAnalysis": [
      {
        "choice": "108 平方公分",
        "truth": true,
        "reason": "正確計入六個面。"
      },
      {
        "choice": "72 平方公分",
        "truth": false,
        "reason": "誤把體積72當表面積。"
      },
      {
        "choice": "54 平方公分",
        "truth": false,
        "reason": "只加三個面的面積。"
      },
      {
        "choice": "144 平方公分",
        "truth": false,
        "reason": "把部分乘積重複加錯。"
      }
    ],
    "misconceptionTarget": "把長方體表面積誤認成體積。",
    "authoringIntent": "計算完整長方體表面積。",
    "difficulty": "basic",
    "givenConditions": [
      "長6公分",
      "寬4公分",
      "高3公分",
      "六面皆外露"
    ],
    "target": "總表面積",
    "difficultyReason": "基礎：直接辨認長方體六面並套用 2(lw+lh+wh)。",
    "prerequisiteCheck": "已會辨認柱體的底面與側面。",
    "estimatedTimeSec": 90,
    "unitCheck": "長度單位相同，答案用平方公分。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "六面皆外露，沒有開口或貼合面。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s009-v001",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "prism-surface-area",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "柱體表面積",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "bd8637e08f7ab73bd1454465eca244df89219db8b524e0699009cddd1494fa31"
  },
  {
    "prompt": "一直角柱的底面周長為 14 公分，高為 5 公分，側面積是多少？",
    "text": "一直角柱的底面周長為 14 公分，高為 5 公分，側面積是多少？",
    "choices": [
      "19 平方公分",
      "35 平方公分",
      "140 平方公分",
      "70 平方公分"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：使用側面積=底面周長×高；14×5=70。所得結果是「70 平方公分」。",
    "explanation": "直柱體側面展開成長為底面周長14、寬為高5的長方形，側面積=14×5=70平方公分。",
    "steps": [
      "使用側面積=底面周長×高",
      "14×5=70"
    ],
    "optionAnalysis": [
      {
        "choice": "19 平方公分",
        "truth": false,
        "reason": "把周長與高相加。"
      },
      {
        "choice": "35 平方公分",
        "truth": false,
        "reason": "只乘一半周長。"
      },
      {
        "choice": "140 平方公分",
        "truth": false,
        "reason": "多乘2。"
      },
      {
        "choice": "70 平方公分",
        "truth": true,
        "reason": "依獨立計算「14×5=70」，此選項符合所求「側面積」。"
      }
    ],
    "misconceptionTarget": "把側面積公式中的底面周長誤當底面積。",
    "authoringIntent": "由底面周長與高求側面積。",
    "difficulty": "basic",
    "givenConditions": [
      "直角柱",
      "底面周長14公分",
      "高5公分"
    ],
    "target": "側面積",
    "difficultyReason": "基礎：只需一次 Ph 計算。",
    "prerequisiteCheck": "已理解直柱體側面可展開為長方形帶。",
    "estimatedTimeSec": 90,
    "unitCheck": "公分乘公分得平方公分。 所求「側面積」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "題目只問側面積，不含兩底面。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s009-v002",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "prism-surface-area",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "柱體表面積",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "b21f206d485362d843192b5610fc0827c421747d2fea9e0a77846c94c188d89a"
  },
  {
    "prompt": "半徑 2 公分、高 7 公分的完整圓柱，其表面積為何？",
    "text": "半徑 2 公分、高 7 公分的完整圓柱，其表面積為何？",
    "choices": [
      "28π 平方公分",
      "36π 平方公分",
      "32π 平方公分",
      "56π 平方公分"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：算兩底面8π；算側面28π；相加得36π。所得結果是「36π 平方公分」。",
    "explanation": "兩個底面積為2πr²=8π，側面積為2πrh=28π，合計36π平方公分。",
    "steps": [
      "算兩底面8π",
      "算側面28π",
      "相加得36π"
    ],
    "optionAnalysis": [
      {
        "choice": "28π 平方公分",
        "truth": false,
        "reason": "只算側面。"
      },
      {
        "choice": "36π 平方公分",
        "truth": true,
        "reason": "依獨立計算「相加得36π」，此選項符合所求「圓柱總表面積」。"
      },
      {
        "choice": "32π 平方公分",
        "truth": false,
        "reason": "漏算一個底面。"
      },
      {
        "choice": "56π 平方公分",
        "truth": false,
        "reason": "把側面積再乘2。"
      }
    ],
    "misconceptionTarget": "漏掉圓柱的一個或兩個底面。",
    "authoringIntent": "計算完整圓柱表面積。",
    "difficulty": "basic",
    "givenConditions": [
      "半徑2公分",
      "高7公分",
      "上下底皆封閉"
    ],
    "target": "圓柱總表面積",
    "difficultyReason": "基礎：直接代入完整圓柱表面積公式。",
    "prerequisiteCheck": "已會圓柱底面與曲側面的結構。",
    "estimatedTimeSec": 90,
    "unitCheck": "保留π，單位為平方公分。",
    "roundingCheck": "以π精確表示。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "完整表示兩底面都存在。 題幹已完整限制「圓柱總表面積」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s009-v003",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "prism-surface-area",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "柱體表面積",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "f9121d194bfcc00a7e886d2522d28d0035c291cc37f0010068caedcc64796ac0"
  },
  {
    "prompt": "一個無上蓋的正方形底直角柱容器，底面邊長 4 公分、高 6 公分。製作外殼至少需要多少平方公分材料？",
    "text": "一個無上蓋的正方形底直角柱容器，底面邊長 4 公分、高 6 公分。製作外殼至少需要多少平方公分材料？",
    "choices": [
      "64",
      "80",
      "112",
      "96"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：算一個底面16；算側面96；無上蓋不加第二底面。所得結果是「112」。",
    "explanation": "底面積=4²=16；四個側面總面積=底面周長×高=(4×4)×6=96。無上蓋，所以材料面積=16+96=112平方公分。",
    "steps": [
      "算一個底面16",
      "算側面96",
      "無上蓋不加第二底面"
    ],
    "optionAnalysis": [
      {
        "choice": "64",
        "truth": false,
        "reason": "只算四側面中的部分。"
      },
      {
        "choice": "80",
        "truth": false,
        "reason": "誤把底面周長加側面。"
      },
      {
        "choice": "112",
        "truth": true,
        "reason": "依獨立計算「無上蓋不加第二底面」，此選項符合所求「外殼材料面積」。"
      },
      {
        "choice": "96",
        "truth": false,
        "reason": "只算側面，漏底。"
      }
    ],
    "misconceptionTarget": "無蓋容器仍套完整柱體公式或漏掉底面。",
    "authoringIntent": "辨認外露面後計算無蓋容器材料。",
    "difficulty": "standard",
    "givenConditions": [
      "正方形底邊長4公分",
      "高6公分",
      "無上蓋",
      "忽略接縫"
    ],
    "target": "外殼材料面積",
    "difficultyReason": "標準：先依開口條件調整公式，再分別求底面與側面。",
    "prerequisiteCheck": "已會完整柱體表面積並能辨認外露面。",
    "estimatedTimeSec": 90,
    "unitCheck": "各面均以平方公分計。 所求「外殼材料面積」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "『無上蓋』明確排除上底，底與四側面均計。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s009-v004",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "prism-surface-area",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "柱體表面積",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "48be0466eeccba0989d5c3f9e695a7b127e8cbafa9a4130062acaaabc082e5d9"
  },
  {
    "prompt": "一個三角柱的底面是邊長 3、4、5 公分的直角三角形，柱高 10 公分。其總表面積是多少？",
    "text": "一個三角柱的底面是邊長 3、4、5 公分的直角三角形，柱高 10 公分。其總表面積是多少？",
    "choices": [
      "120 平方公分",
      "132 平方公分",
      "126 平方公分",
      "150 平方公分"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：求底面積6；求底面周長12；側面120；加兩底面12。所得結果是「132 平方公分」。",
    "explanation": "底面積=3×4÷2=6，兩底面共12；底面周長=3+4+5=12，側面積=12×10=120，總表面積132平方公分。",
    "steps": [
      "求底面積6",
      "求底面周長12",
      "側面120",
      "加兩底面12"
    ],
    "optionAnalysis": [
      {
        "choice": "120 平方公分",
        "truth": false,
        "reason": "只算側面。"
      },
      {
        "choice": "132 平方公分",
        "truth": true,
        "reason": "依獨立計算「加兩底面12」，此選項符合所求「總表面積」。"
      },
      {
        "choice": "126 平方公分",
        "truth": false,
        "reason": "漏一個底面。"
      },
      {
        "choice": "150 平方公分",
        "truth": false,
        "reason": "把兩底面誤算成30。"
      }
    ],
    "misconceptionTarget": "混淆底面積與底面周長在公式中的角色。",
    "authoringIntent": "計算三角柱總表面積。",
    "difficulty": "standard",
    "givenConditions": [
      "底面為3-4-5直角三角形",
      "柱高10公分",
      "完整封閉"
    ],
    "target": "總表面積",
    "difficultyReason": "標準：必須同時計算三角形面積與周長。",
    "prerequisiteCheck": "已會三角形面積與柱體側面展開。",
    "estimatedTimeSec": 90,
    "unitCheck": "所有邊長以公分，答案平方公分。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "3、4為直角邊，5為斜邊，資料足夠。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s009-v005",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "prism-surface-area",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "柱體表面積",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "7f53d9f85e7c743618d423c88e012340b300d5c3057191c8c66abef3b52744c9"
  },
  {
    "prompt": "一個圓柱形紙筒只有曲側面，沒有上、下底。若底面直徑 8 公分、高 15 公分，紙張面積是多少？",
    "text": "一個圓柱形紙筒只有曲側面，沒有上、下底。若底面直徑 8 公分、高 15 公分，紙張面積是多少？",
    "choices": [
      "120π 平方公分",
      "60π 平方公分",
      "180π 平方公分",
      "240π 平方公分"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：用直徑求圓周8π；乘高15。所得結果是「120π 平方公分」。",
    "explanation": "只有曲側面，展開長為圓周πd=8π，寬為高15，所以面積=8π×15=120π平方公分。",
    "steps": [
      "用直徑求圓周8π",
      "乘高15"
    ],
    "optionAnalysis": [
      {
        "choice": "120π 平方公分",
        "truth": true,
        "reason": "依獨立計算「乘高15」，此選項符合所求「曲側面紙張面積」。"
      },
      {
        "choice": "60π 平方公分",
        "truth": false,
        "reason": "把半徑4乘高再乘π，少一倍。"
      },
      {
        "choice": "180π 平方公分",
        "truth": false,
        "reason": "誤加一個底面60π。"
      },
      {
        "choice": "240π 平方公分",
        "truth": false,
        "reason": "把圓周多乘2。"
      }
    ],
    "misconceptionTarget": "看到圓柱就加入底面，忽略紙筒沒有底。",
    "authoringIntent": "計算只有曲側面的圓柱紙筒。",
    "difficulty": "standard",
    "givenConditions": [
      "直徑8公分",
      "高15公分",
      "沒有上下底"
    ],
    "target": "曲側面紙張面積",
    "difficultyReason": "標準：需由直徑求圓周並依結構排除底面。",
    "prerequisiteCheck": "已會圓周長與圓柱側面積。",
    "estimatedTimeSec": 90,
    "unitCheck": "πd與h相乘，單位平方公分。",
    "roundingCheck": "保留π。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "『只有曲側面』排除底圓。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s009-v006",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "prism-surface-area",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "柱體表面積",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "dfed566b7071bf0c2b032bbb79035f066f64afc614b617bcb787cc293fe7886a"
  },
  {
    "prompt": "一個完整直角柱的底面積為 24 平方公分、底面周長為 22 公分，總表面積為 158 平方公分。柱高是多少？",
    "text": "一個完整直角柱的底面積為 24 平方公分、底面周長為 22 公分，總表面積為 158 平方公分。柱高是多少？",
    "choices": [
      "4 公分",
      "6 公分",
      "5 公分",
      "7 公分"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：扣除兩底面48；側面積110；110÷22=5。所得結果是「5 公分」。",
    "explanation": "158=2×24+22h，所以22h=110，h=5公分。",
    "steps": [
      "扣除兩底面48",
      "側面積110",
      "110÷22=5"
    ],
    "optionAnalysis": [
      {
        "choice": "4 公分",
        "truth": false,
        "reason": "把158÷22近似成7。"
      },
      {
        "choice": "6 公分",
        "truth": false,
        "reason": "只扣一個底面後計算。"
      },
      {
        "choice": "5 公分",
        "truth": true,
        "reason": "依獨立計算「110÷22=5」，此選項符合所求「柱高」。"
      },
      {
        "choice": "7 公分",
        "truth": false,
        "reason": "沒有扣底面。"
      }
    ],
    "misconceptionTarget": "反求高度時未先扣除兩個底面。",
    "authoringIntent": "由總表面積反求柱高。",
    "difficulty": "advanced",
    "givenConditions": [
      "完整直角柱",
      "底面積24平方公分",
      "底面周長22公分",
      "總表面積158平方公分"
    ],
    "target": "柱高",
    "difficultyReason": "進階：由 S=2B+Ph 建立一次方程並反求未知量。",
    "prerequisiteCheck": "已會完整柱體表面積公式與一元一次方程。",
    "estimatedTimeSec": 90,
    "unitCheck": "158與48皆為平方公分，差除以公分得到公分。",
    "roundingCheck": "整除，不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "兩底面皆外露，公式唯一。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s009-v007",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "prism-surface-area",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "柱體表面積",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "ce50a93280264f479d4cb921fcdadaa502fd4e8ef369de08b3dcfe7aacaed7ad"
  },
  {
    "prompt": "一個完整長方體的底面長 6 公分、寬 4 公分，高為 h 公分；總表面積為 148 平方公分。h 是多少？",
    "text": "一個完整長方體的底面長 6 公分、寬 4 公分，高為 h 公分；總表面積為 148 平方公分。h 是多少？",
    "choices": [
      "3 公分",
      "4 公分",
      "6 公分",
      "5 公分"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：建立148=48+20h；解得h=5。所得結果是「5 公分」。",
    "explanation": "148=2(6×4+6h+4h)=48+20h，所以20h=100，h=5公分。",
    "steps": [
      "建立148=48+20h",
      "解得h=5"
    ],
    "optionAnalysis": [
      {
        "choice": "3 公分",
        "truth": false,
        "reason": "代入h=3後，總表面積不等於148。"
      },
      {
        "choice": "4 公分",
        "truth": false,
        "reason": "代入h=4後，總表面積不等於148。"
      },
      {
        "choice": "6 公分",
        "truth": false,
        "reason": "代入h=6後，總表面積不等於148。"
      },
      {
        "choice": "5 公分",
        "truth": true,
        "reason": "2(6×4+6×5+4×5)=148。"
      }
    ],
    "misconceptionTarget": "把體積6×4×h與表面積方程混淆。",
    "authoringIntent": "由長方體表面積反求未知高度。",
    "difficulty": "advanced",
    "givenConditions": [
      "底面6×4公分",
      "完整長方體",
      "總表面積148平方公分"
    ],
    "target": "高度h",
    "difficultyReason": "進階：需從原總面積扣除成對的內部接合面。",
    "prerequisiteCheck": "已會單一正方體表面積與外露面概念。",
    "estimatedTimeSec": 90,
    "unitCheck": "平方公分方程解出的h為公分。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "h為正，線性方程唯一解5。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s009-v008",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "prism-surface-area",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "柱體表面積",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "9cfb01c184fb06f806c4115461bec63724140b190884b9e72d10f94c233b501a"
  },
  {
    "prompt": "某直圓柱的高等於底面半徑。若總表面積為 36π 平方公分，半徑是多少？",
    "text": "某直圓柱的高等於底面半徑。若總表面積為 36π 平方公分，半徑是多少？",
    "choices": [
      "2 公分",
      "4 公分",
      "3 公分",
      "6 公分"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：建立4πr²=36π；得到r²=9；半徑取正值r=3。所得結果是「3 公分」。",
    "explanation": "令半徑為r，高也為r。總表面積=2πr²+2πr·r=4πr²=36π，所以r²=9，r=3公分。",
    "steps": [
      "建立4πr²=36π",
      "得到r²=9",
      "半徑取正值r=3"
    ],
    "optionAnalysis": [
      {
        "choice": "2 公分",
        "truth": false,
        "reason": "代入得16π，不是36π。"
      },
      {
        "choice": "4 公分",
        "truth": false,
        "reason": "代入得64π。"
      },
      {
        "choice": "3 公分",
        "truth": true,
        "reason": "代入4π×9=36π。"
      },
      {
        "choice": "6 公分",
        "truth": false,
        "reason": "代入得144π。"
      }
    ],
    "misconceptionTarget": "未檢查代入後是否與選項相符。",
    "authoringIntent": "檢查公式與選項的一致性。",
    "difficulty": "advanced",
    "givenConditions": [
      "直圓柱",
      "h=r",
      "總表面積54π平方公分"
    ],
    "target": "半徑",
    "difficultyReason": "進階：需代數化條件並檢核選項。",
    "prerequisiteCheck": "已會圓柱表面積與平方根。",
    "estimatedTimeSec": 90,
    "unitCheck": "半徑單位為公分。 所求「半徑」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "保留根式。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "半徑取正值；36π使唯一正解為3公分。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s009-v009",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "prism-surface-area",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "柱體表面積",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "58d10a7f6d0f653e6dbc162e8f3f5c9eb662c1743db1f22ef728b40aeb2ced10"
  },
  {
    "prompt": "一間工坊製作沒有上蓋的長方體收納盒，內部長 30 公分、寬 20 公分、高 12 公分，材料厚度忽略不計。若每平方公分材料成本 0.08 元，單盒材料成本是多少？",
    "text": "一間工坊製作沒有上蓋的長方體收納盒，內部長 30 公分、寬 20 公分、高 12 公分，材料厚度忽略不計。若每平方公分材料成本 0.08 元，單盒材料成本是多少？",
    "choices": [
      "76.8 元",
      "144 元",
      "120 元",
      "105.6 元"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：辨認底與四側面；面積1800平方公分；乘0.08元/平方公分得144元。所得結果是「144 元」。",
    "explanation": "無上蓋盒面積=底30×20+兩個30×12+兩個20×12=600+720+480=1800平方公分。成本=1800×0.08=144元。",
    "steps": [
      "辨認底與四側面",
      "面積1800平方公分",
      "乘0.08元/平方公分得144元"
    ],
    "optionAnalysis": [
      {
        "choice": "76.8 元",
        "truth": false,
        "reason": "只計部分面積。"
      },
      {
        "choice": "144 元",
        "truth": true,
        "reason": "1800×0.08=144。"
      },
      {
        "choice": "120 元",
        "truth": false,
        "reason": "面積或單價乘法錯誤。"
      },
      {
        "choice": "105.6 元",
        "truth": false,
        "reason": "漏算一組側面。"
      }
    ],
    "misconceptionTarget": "只算部分側面或成本小數乘法錯誤。",
    "authoringIntent": "把開口盒面積轉成材料成本。",
    "difficulty": "literacy",
    "givenConditions": [
      "無上蓋",
      "長30公分",
      "寬20公分",
      "高12公分",
      "每平方公分0.08元"
    ],
    "target": "單盒材料成本",
    "difficultyReason": "素養：情境中的開口條件與單價都影響決策。",
    "prerequisiteCheck": "已會無蓋長方體表面積與小數乘法。",
    "estimatedTimeSec": 90,
    "unitCheck": "平方公分乘元/平方公分得元。",
    "roundingCheck": "成本可精確到分。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "材料厚度忽略，使用內部尺寸亦作板面尺寸；無上蓋只計五面。",
    "literacyContextNecessity": "材料成本必須先判斷實際使用的五個面，情境不可刪除。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s009-v010",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "prism-surface-area",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "柱體表面積",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "09bbe723a4f3040255b9f7151327833adea4c8cb8302e119dff7dabf571e534b"
  },
  {
    "prompt": "水塔外形為完整封閉圓柱，半徑 2 公尺、高 5 公尺。若只粉刷外部曲側面與上底，不粉刷底部，需粉刷的面積是多少？",
    "text": "水塔外形為完整封閉圓柱，半徑 2 公尺、高 5 公尺。若只粉刷外部曲側面與上底，不粉刷底部，需粉刷的面積是多少？",
    "choices": [
      "20π 平方公尺",
      "36π 平方公尺",
      "28π 平方公尺",
      "24π 平方公尺"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：算曲側面20π；加上底4π；底部不計。所得結果是「24π 平方公尺」。",
    "explanation": "曲側面=2πrh=2π×2×5=20π；上底=πr²=4π；合計24π平方公尺。",
    "steps": [
      "算曲側面20π",
      "加上底4π",
      "底部不計"
    ],
    "optionAnalysis": [
      {
        "choice": "20π 平方公尺",
        "truth": false,
        "reason": "漏上底。"
      },
      {
        "choice": "36π 平方公尺",
        "truth": false,
        "reason": "將側面多算。"
      },
      {
        "choice": "28π 平方公尺",
        "truth": false,
        "reason": "多算一個底面。"
      },
      {
        "choice": "24π 平方公尺",
        "truth": true,
        "reason": "依獨立計算「底部不計」，此選項符合所求「粉刷面積」。"
      }
    ],
    "misconceptionTarget": "看到完整圓柱就把不粉刷的底部也算入。",
    "authoringIntent": "依施工範圍計算粉刷面積。",
    "difficulty": "literacy",
    "givenConditions": [
      "圓柱半徑2公尺",
      "高5公尺",
      "粉刷曲側面與上底",
      "底部不粉刷"
    ],
    "target": "粉刷面積",
    "difficultyReason": "素養：施工範圍決定外露面集合，不能直接套完整表面積。",
    "prerequisiteCheck": "已會圓柱各部分面積。 本題只再使用先備「cross-section-solid」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "答案為平方公尺。 所求「粉刷面積」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "保留π。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "粉刷範圍列舉明確。 題幹已完整限制「粉刷面積」的範圍與取值方向。",
    "literacyContextNecessity": "是否粉刷某一面直接改變材料需求，情境條件不可刪除。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s009-v011",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "prism-surface-area",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "柱體表面積",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "7cd41af4c6521b68d35e8cc0b50af529a539e6c1cf5503e6e38d236c1a068594"
  },
  {
    "prompt": "一家公司要在正方形底直角柱紙盒的四個側面印刷，盒底邊長 8 公分、高 15 公分；上、下底不印。若印刷廠以每 100 平方公分為一個計價單位，不足一單位仍算一單位，至少計幾個單位？",
    "text": "一家公司要在正方形底直角柱紙盒的四個側面印刷，盒底邊長 8 公分、高 15 公分；上、下底不印。若印刷廠以每 100 平方公分為一個計價單位，不足一單位仍算一單位，至少計幾個單位？",
    "choices": [
      "5 個",
      "4 個",
      "6 個",
      "7 個"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：側面積480；除以100得4.8；向上取整為5。所得結果是「5 個」。",
    "explanation": "四側面積=底面周長×高=(4×8)×15=480平方公分。480÷100=4.8，不足一單位仍算一單位，所以計5個單位。",
    "steps": [
      "側面積480",
      "除以100得4.8",
      "向上取整為5"
    ],
    "optionAnalysis": [
      {
        "choice": "5 個",
        "truth": true,
        "reason": "依獨立計算「向上取整為5」，此選項符合所求「計價單位數」。"
      },
      {
        "choice": "4 個",
        "truth": false,
        "reason": "忽略不足單位要進位。"
      },
      {
        "choice": "6 個",
        "truth": false,
        "reason": "多進一個單位。"
      },
      {
        "choice": "7 個",
        "truth": false,
        "reason": "誤把底面也計入。"
      }
    ],
    "misconceptionTarget": "計價時把4.8四捨五入或捨去，而非向上取整。",
    "authoringIntent": "由印刷面積判斷計價單位。",
    "difficulty": "literacy",
    "givenConditions": [
      "正方形底邊8公分",
      "高15公分",
      "只印四側面",
      "每100平方公分一單位",
      "不足仍算一單位"
    ],
    "target": "計價單位數",
    "difficultyReason": "素養：除計算側面積外，還要依實際計價規則向上取整。",
    "prerequisiteCheck": "已會側面積與商數解讀。 本題只再使用先備「cross-section-solid」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "平方公分除以平方公分/單位得到單位數。",
    "roundingCheck": "依規則向上取整，不是四捨五入。",
    "ambiguityBoundaryAudit": "計價規則明確排除一般四捨五入。",
    "literacyContextNecessity": "印刷只涵蓋四個側面，且每100平方公分不足一單位仍進位；兩項計價規則共同決定最後整數單位數。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s009-v012",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "prism-surface-area",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "柱體表面積",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "77d40bf34609331aab629a0f646a52ba7d29712cfb06ef8a246c1aa7c28ed532"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "prompt": "一個直三角柱的底面是直角三角形，兩股3公分與4公分，斜邊5公分，柱高10公分。求總表面積。",
    "requiredWork": [
      "求底面積B。",
      "求底面周長P。",
      "用2B+Ph。"
    ],
    "fullCreditSolution": [
      "B=3×4÷2=6平方公分。",
      "P=3+4+5=12公分。",
      "側面積Ph=12×10=120平方公分。",
      "總表面積2×6+120=132平方公分。"
    ],
    "alternativeSolutions": [
      "可分別算三個長方形側面30、40、50，再加兩個三角形12。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確求B=6、P=12、側面120並得132平方公分。"
      },
      {
        "score": 2,
        "criteria": "方法正確但一個算術小錯，或答案正確但步驟少一項。"
      },
      {
        "score": 1,
        "criteria": "能正確求底面積或側面積其中一部分，且知道要加兩底面。"
      },
      {
        "score": 0,
        "criteria": "用B×h作表面積且未計側面，或無合理步驟。"
      }
    ],
    "partialCreditRules": [
      "方法正確但一個算術小錯，或答案正確但步驟少一項。",
      "能正確求底面積或側面積其中一部分，且知道要加兩底面。"
    ],
    "followThroughPolicy": "若斜邊或周長相加算錯，但後續用Ph一致，保留方法分；底面積另行計分。",
    "unitNotationRules": "所有長度公分，面積平方公分；P不可寫平方公分。",
    "answerOnlyPolicy": "只寫132平方公分無過程最多2分。",
    "difficulty": "standard",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "independentReview": {
      "derivedResult": "132平方公分。",
      "ambiguityAndBoundary": "三角形為3-4-5，底面資料完整。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "questionId": "u23-s009-cr001",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "prism-surface-area",
    "type": "constructed-response",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "b562509f2a3cea4bd225e755db43d1ccc8a2bdb64e6b51e8c6755d422ee364df"
  },
  {
    "prompt": "一個半徑5公分、高12公分的直圓柱容器無上蓋，底面外側與曲側面都要塗漆。求塗漆面積。",
    "requiredWork": [
      "辨認只有一個底面外露。",
      "計算πr²。",
      "計算2πrh並相加。"
    ],
    "fullCreditSolution": [
      "底面積π×5²=25π平方公分。",
      "側面積2π×5×12=120π平方公分。",
      "塗漆面積=25π+120π=145π平方公分。"
    ],
    "alternativeSolutions": [
      "可由展開圖的一個圓和一個10π×12長方形計算。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確辨認無上蓋只加一底面，並得145π平方公分。"
      },
      {
        "score": 2,
        "criteria": "列式正確但有一個算術錯，或答案正確未明說開口處理。"
      },
      {
        "score": 1,
        "criteria": "只算對底面25π或側面120π，或誤加第二底面但其餘正確。"
      },
      {
        "score": 0,
        "criteria": "使用體積公式或單位完全錯誤。"
      }
    ],
    "partialCreditRules": [
      "列式正確但有一個算術錯，或答案正確未明說開口處理。",
      "只算對底面25π或側面120π，或誤加第二底面但其餘正確。"
    ],
    "followThroughPolicy": "若誤把無上蓋當完整圓柱得到170π，側面與單底面計算正確可得1分。",
    "unitNotationRules": "塗漆面積用平方公分，π保留精確。",
    "answerOnlyPolicy": "只寫145π而無單位或理由最多2分。",
    "difficulty": "advanced",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "independentReview": {
      "derivedResult": "145π平方公分。",
      "ambiguityAndBoundary": "題目明示底面外側與曲側面，不計開口。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "questionId": "u23-s009-cr002",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "prism-surface-area",
    "type": "constructed-response",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "a9c0a33f56bcc4f0b0f33671b13a158c50f2f62b8b93a9f6b7a7e8fb0f330a48"
  }
];

export const DRAWING_SPECS = [];
