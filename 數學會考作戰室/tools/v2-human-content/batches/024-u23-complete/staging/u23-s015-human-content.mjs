// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u23-s015-lecture-r1",
  "unitId": "u23",
  "numericUnitId": 23,
  "topicId": "u23-measure",
  "skillId": "composite-solid-surface",
  "title": "組合體表面積：只計真正外露的面",
  "lockedSkillTitle": "組合體表面積",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能計算接合組合體的外表面積。",
    "能正確扣除成對消失的接合面。",
    "能處理凹槽與孔洞新增的內表面。",
    "能區分組合體表面積與各部分表面積直接相加。"
  ],
  "prerequisites": [
    {
      "skillId": "composite-solid-volume",
      "requiredLevel": "能以分割相加或外減內計算組合體體積。",
      "bridge": "組合體體積可直接加互不重疊部分，但表面積只計外露邊界。兩立體接合後，接合面的兩份面積都從外表面消失。"
    }
  ],
  "glossary": [
    [
      "外表面積",
      "可由組合體外部接觸到的所有面積總和。"
    ],
    [
      "接合面",
      "兩立體互相貼合的區域，接合後成為內部。"
    ],
    [
      "凹槽內壁",
      "挖去材料後新露出的側面或底面。"
    ],
    [
      "通孔內壁",
      "孔洞貫穿後新增的內側表面。"
    ]
  ],
  "notation": [
    [
      "S聯=S1+S2−2A接",
      "兩立體只沿面積A接合且無重疊。"
    ],
    [
      "S剩",
      "切除或鑽孔後的外露面總和，需逐面追蹤。"
    ]
  ],
  "conceptNarrative": [
    "把兩個完整立體表面積相加時，接合區在A上有一面、在B上也有一面；接合後兩面都看不到，所以扣2A。",
    "若只是在一個立體表面挖凹槽，被挖掉的原外表面會消失，但同時增加凹槽內壁與底面，不能只用原表面積減挖口。",
    "通孔若貫穿，兩端開口從原表面消失，並新增孔的內側面。",
    "最可靠的方法是列出每個外露面；公式只是快速整理，接合形狀不規則時要回到面片追蹤。"
  ],
  "formalDefinitions": [
    [
      "面接合公式",
      "S總=S1+S2−2A接。"
    ],
    [
      "外露判準",
      "面積只在其一側為實體、另一側為外部空間時才算外表面。"
    ]
  ],
  "formulas": [
    [
      "S=S1+S2−2A",
      [
        "只以面積A貼合",
        "無三維重疊"
      ],
      "兩份接合面變內部。"
    ],
    [
      "通孔新增內側面=P孔×孔長",
      [
        "孔截面沿直線貫穿"
      ],
      "內壁展開為周長乘長度。"
    ]
  ],
  "nonApplicableCases": [
    "接合面不能只扣一份。",
    "體積接合規則不能直接套到表面積。",
    "挖洞可能新增內壁，表面積不一定單純減少。",
    "放在桌面上是否計底面要看題目問總表面積或外露可塗面積。"
  ],
  "method": [
    [
      "先畫或列外露區",
      "哪些原面被遮住？"
    ],
    [
      "算各基本立體原表面積",
      "保持單位一致。"
    ],
    [
      "處理接合面",
      "每個接合區通常扣兩份。"
    ],
    [
      "處理挖孔新增面",
      "扣開口並加內壁。"
    ],
    [
      "以面數或展開圖驗算",
      "是否漏算凹面或重算內面？"
    ]
  ],
  "workedExamples": [
    [
      "L1",
      "兩邊長2正方體以整面黏合，外表面積？",
      [
        "原共48，扣2×4。"
      ],
      "40平方單位。"
    ],
    [
      "L2",
      "3個邊長1正方體排成直線，外表面積？",
      [
        "原18面，兩個接合各消失2面，剩14面。"
      ],
      "14平方單位。"
    ],
    [
      "L3",
      "長方體表面挖淺凹槽，如何處理？",
      [
        "扣原開口面，加凹槽底與四內壁。"
      ],
      "依尺寸逐面加總。"
    ],
    [
      "L4",
      "圓柱通孔內壁？",
      [
        "孔周長乘穿透長度。"
      ],
      "2πrh平方單位。"
    ]
  ],
  "commonMistakes": [
    [
      "只扣一個接合面",
      "忘記兩物體各有一面。",
      "每個接合區扣2A。"
    ],
    [
      "接合後表面積直接相加",
      "內面仍被計入。",
      "先標遮住面。"
    ],
    [
      "凹槽只減開口",
      "漏掉新增內壁。",
      "列出底與側壁。"
    ],
    [
      "通孔把孔體積當面積",
      "維度混淆。",
      "內壁用周長×長度。"
    ],
    [
      "桌面接觸面一律不算",
      "混淆總表面積與可塗面積。",
      "依題目用途決定。"
    ],
    [
      "接合面尺寸取較大整面",
      "實際接觸只由重疊區決定。",
      "使用真正接觸區面積。"
    ]
  ],
  "selfCheck": [
    "是否只計外露面？",
    "每個接合區是否扣兩份？",
    "接觸面積是否取實際重疊區？",
    "挖孔是否增加內壁？",
    "題目是否排除桌面或底部？"
  ],
  "summary": [
    "組合體表面積不是體積規則。",
    "面接合通常扣2A。",
    "凹槽與通孔會新增內表面。",
    "先列外露面最可靠。",
    "用途條件決定哪些面計入。"
  ],
  "connections": {
    "previous": "前一節接合面對體積無影響；本節強調接合面對外表面積會成對消失。",
    "next": [
      "素養題會把外表面積轉成油漆、包膜或材料成本。",
      "包裝問題還需考慮排列方式、接觸與最小外盒。"
    ]
  },
  "figureReferences": [
    {
      "figureId": "u23-s015-fig001",
      "purpose": "方形盲孔外露面",
      "altText": "正方體上方形盲孔的孔口、內壁與底面。"
    }
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u23-s015-v001",
      "u23-s015-v002",
      "u23-s015-v003",
      "u23-s015-v004",
      "u23-s015-v005",
      "u23-s015-v006",
      "u23-s015-v007",
      "u23-s015-v008",
      "u23-s015-v009",
      "u23-s015-v010",
      "u23-s015-v011",
      "u23-s015-v012"
    ],
    "constructedResponseIds": [
      "u23-s015-cr001",
      "u23-s015-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐例核對兩正方體40、三正方體14面，並以凹槽與通孔逐面追蹤新增區域；特別確認每個接合面扣兩份而非一份。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
  "contentSha256": "fe4790bb6afd6cd27f38827229a8445659e3058fa462f819488e2dc4b7ddef19"
};

export const QUESTIONS = [
  {
    "prompt": "兩個邊長 2 公分的正方體，以一個完整面黏合。組合體外表面積是多少？",
    "text": "兩個邊長 2 公分的正方體，以一個完整面黏合。組合體外表面積是多少？",
    "choices": [
      "32",
      "36",
      "40",
      "48"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：原48；扣2×4；得40。所得結果是「40」。",
    "explanation": "兩正方體原表面積=2×6×4=48；接合面積4在兩邊各一份，扣8，得40平方公分。",
    "steps": [
      "原48",
      "扣2×4",
      "得40"
    ],
    "optionAnalysis": [
      {
        "choice": "32",
        "truth": false,
        "reason": "此選項無法符合所求「外表面積」；錯誤來源會是：只扣一份接合面。 必須依「計算兩正方體面接合外表面積。」的關係重新核對。"
      },
      {
        "choice": "36",
        "truth": false,
        "reason": "只扣一面。"
      },
      {
        "choice": "40",
        "truth": true,
        "reason": "依獨立計算「得40」，此選項符合所求「外表面積」。"
      },
      {
        "choice": "48",
        "truth": false,
        "reason": "此選項無法符合所求「外表面積」；錯誤來源會是：只扣一份接合面。 必須依「計算兩正方體面接合外表面積。」的關係重新核對。"
      }
    ],
    "misconceptionTarget": "只扣一份接合面。 必須依「計算兩正方體面接合外表面積。」的關係重新核對。",
    "authoringIntent": "計算兩正方體面接合外表面積。",
    "difficulty": "basic",
    "givenConditions": [
      "兩邊長2正方體",
      "整面黏合"
    ],
    "target": "外表面積",
    "difficultyReason": "基礎：直接套S1+S2−2A。",
    "prerequisiteCheck": "已會正方體表面積。 本題只再使用先備「composite-solid-volume」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "平方公分。 所求「外表面積」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "接合面積4。 題幹已完整限制「外表面積」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s015-v001",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-surface",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體表面積",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "02c9fc49d039ac7e03dbb4b709e3d648c1e3d0f63e460b1fe1c1e1e33c35f358"
  },
  {
    "prompt": "三個邊長 1 公分的小正方體排成一直線，每相鄰兩個以整面接合。外表面積是多少？",
    "text": "三個邊長 1 公分的小正方體排成一直線，每相鄰兩個以整面接合。外表面積是多少？",
    "choices": [
      "12",
      "18",
      "16",
      "14"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：原18；兩接合扣4；得14。所得結果是「14」。",
    "explanation": "原有3×6=18個單位面；兩個接合處各消失2面，共扣4，剩14平方公分。",
    "steps": [
      "原18",
      "兩接合扣4",
      "得14"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": false,
        "reason": "此選項無法符合所求「外表面積」；錯誤來源會是：只數接合處而未每處扣兩面。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "此選項無法符合所求「外表面積」；錯誤來源會是：只數接合處而未每處扣兩面。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "只算一個接合。"
      },
      {
        "choice": "14",
        "truth": true,
        "reason": "依獨立計算「得14」，此選項符合所求「外表面積」。"
      }
    ],
    "misconceptionTarget": "只數接合處而未每處扣兩面。",
    "authoringIntent": "計數方塊排列外表面。",
    "difficulty": "basic",
    "givenConditions": [
      "3個單位正方體直線排列",
      "2個接合"
    ],
    "target": "外表面積",
    "difficultyReason": "基礎：面數計數。 本題以「計數方塊排列外表面。」作為該難度的具體判準。",
    "prerequisiteCheck": "已會接合面成對消失。 本題只再使用先備「composite-solid-volume」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "每面1平方公分。 所求「外表面積」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "只有相鄰整面接觸。 題幹已完整限制「外表面積」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s015-v002",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-surface",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體表面積",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "be940976d40b0f85567b3b4f14cd1b5c94df22dad122b4bd67acc534d3d8e564"
  },
  {
    "prompt": "一個長方體上放一個正方體，兩者接觸面積為 9 平方公分。若原表面積分別為 80 與 54 平方公分，組合後外表面積是多少？",
    "text": "一個長方體上放一個正方體，兩者接觸面積為 9 平方公分。若原表面積分別為 80 與 54 平方公分，組合後外表面積是多少？",
    "choices": [
      "125",
      "116",
      "134",
      "143"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：相加134；扣18得116。所得結果是「116」。",
    "explanation": "組合外表面積=80+54−2×9=116平方公分。",
    "steps": [
      "相加134",
      "扣18得116"
    ],
    "optionAnalysis": [
      {
        "choice": "125",
        "truth": false,
        "reason": "只扣9。"
      },
      {
        "choice": "116",
        "truth": true,
        "reason": "依獨立計算「扣18得116」，此選項符合所求「外表面積」。"
      },
      {
        "choice": "134",
        "truth": false,
        "reason": "此選項無法符合所求「外表面積」；錯誤來源會是：接合面只扣一次或反而加上。"
      },
      {
        "choice": "143",
        "truth": false,
        "reason": "加接合面。"
      }
    ],
    "misconceptionTarget": "接合面只扣一次或反而加上。",
    "authoringIntent": "由已知表面積與接觸面求組合表面。",
    "difficulty": "basic",
    "givenConditions": [
      "原表面80與54",
      "接觸面9"
    ],
    "target": "外表面積",
    "difficultyReason": "基礎：一次接合面公式。 本題以「由已知表面積與接觸面求組合表面。」作為該難度的具體判準。",
    "prerequisiteCheck": "已會面接合。 本題只再使用先備「composite-solid-volume」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "平方公分。 所求「外表面積」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "接觸面完全遮蔽。 題幹已完整限制「外表面積」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s015-v003",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-surface",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體表面積",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "7824f70df6809c03ae198bc7d40055fefb58dc351df778dae000b8e6acf95920"
  },
  {
    "prompt": "兩個長方體以 3×4 公分的矩形面貼合，表面積分別為 94 與 76 平方公分。組合後表面積為何？",
    "text": "兩個長方體以 3×4 公分的矩形面貼合，表面積分別為 94 與 76 平方公分。組合後表面積為何？",
    "choices": [
      "146",
      "134",
      "158",
      "170"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：接合12；扣24；總146。所得結果是「146」。",
    "explanation": "接合面積12，需扣兩份24；94+76−24=146平方公分。",
    "steps": [
      "接合12",
      "扣24",
      "總146"
    ],
    "optionAnalysis": [
      {
        "choice": "146",
        "truth": true,
        "reason": "依獨立計算「總146」，此選項符合所求「外表面積」。"
      },
      {
        "choice": "134",
        "truth": false,
        "reason": "多扣36。"
      },
      {
        "choice": "158",
        "truth": false,
        "reason": "只扣12。"
      },
      {
        "choice": "170",
        "truth": false,
        "reason": "此選項無法符合所求「外表面積」；錯誤來源會是：只扣接合矩形一次。 必須依「矩形接合面計算。」的關係重新核對。"
      }
    ],
    "misconceptionTarget": "只扣接合矩形一次。 必須依「矩形接合面計算。」的關係重新核對。",
    "authoringIntent": "矩形接合面計算。",
    "difficulty": "standard",
    "givenConditions": [
      "接合3×4",
      "S1=94",
      "S2=76"
    ],
    "target": "外表面積",
    "difficultyReason": "標準：先求接合面積再成對扣除。",
    "prerequisiteCheck": "已會長方形面積。 本題只再使用先備「composite-solid-volume」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "平方公分。 所求「外表面積」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "實際接觸區即3×4。 題幹已完整限制「外表面積」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s015-v004",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-surface",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體表面積",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "3f6b99820eb669a8a905a87e0d33a6c671a91ab7da66b01397dced98280d2762"
  },
  {
    "prompt": "四個單位正方體排成 2×2 的單層方陣，外表面積是多少？",
    "text": "四個單位正方體排成 2×2 的單層方陣，外表面積是多少？",
    "choices": [
      "16",
      "12",
      "18",
      "20"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：視為2×2×1；表面積16。所得結果是「16」。",
    "explanation": "可視為2×2×1長方體，表面積=2(4+2+2)=16；或原24面，四個內部接合邊對應4個面接合，各扣2，共16。",
    "steps": [
      "視為2×2×1",
      "表面積16"
    ],
    "optionAnalysis": [
      {
        "choice": "16",
        "truth": true,
        "reason": "依獨立計算「表面積16」，此選項符合所求「外表面積」。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "漏底或頂。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "接合計數錯。"
      },
      {
        "choice": "20",
        "truth": false,
        "reason": "少扣接合。"
      }
    ],
    "misconceptionTarget": "只數上下面或錯數方陣內部接合。",
    "authoringIntent": "方塊陣列轉長方體。",
    "difficulty": "standard",
    "givenConditions": [
      "4個單位正方體",
      "2×2×1排列"
    ],
    "target": "外表面積",
    "difficultyReason": "標準：可用整體外形或接合計數交叉驗算。",
    "prerequisiteCheck": "已會長方體表面積。 本題只再使用先備「composite-solid-volume」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "平方單位。 所求「外表面積」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "正方體無間隙。 題幹已完整限制「外表面積」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": "u23-s015-fig001",
    "drawingSpecId": "u23-s015-draw001",
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s015-v005",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-surface",
    "type": "mc",
    "visualMode": "figure-supported",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體表面積",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "306d84e404adf4e89ae7d8165c97fe357f08a28e4aa0a255727537ef6cc97828"
  },
  {
    "prompt": "一個邊長 5 公分的正方體表面中央挖一個 2×2 公分、深 1 公分的方形凹槽。新外表面積比原來增加多少？",
    "text": "一個邊長 5 公分的正方體表面中央挖一個 2×2 公分、深 1 公分的方形凹槽。新外表面積比原來增加多少？",
    "choices": [
      "0",
      "8",
      "4",
      "12"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：扣開口4加底4相消；四側壁8。所得結果是「8」。",
    "explanation": "原表面失去開口4，但新增凹槽底4，兩者相消；另新增四個2×1內壁，共8平方公分，所以增加8。",
    "steps": [
      "扣開口4加底4相消",
      "四側壁8"
    ],
    "optionAnalysis": [
      {
        "choice": "0",
        "truth": false,
        "reason": "忽略內壁。"
      },
      {
        "choice": "8",
        "truth": true,
        "reason": "依獨立計算「四側壁8」，此選項符合所求「表面積增加量」。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "只算兩側。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "此選項無法符合所求「表面積增加量」；錯誤來源會是：只減開口，未加凹槽內壁與底。"
      }
    ],
    "misconceptionTarget": "只減開口，未加凹槽內壁與底。",
    "authoringIntent": "分析淺凹槽表面積變化。",
    "difficulty": "standard",
    "givenConditions": [
      "正方體表面",
      "凹槽2×2",
      "深1"
    ],
    "target": "表面積增加量",
    "difficultyReason": "標準：追蹤消失面與新增五面。",
    "prerequisiteCheck": "已會長方形面積。 本題只再使用先備「composite-solid-volume」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "平方公分。 所求「表面積增加量」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "凹槽未穿透。 題幹已完整限制「表面積增加量」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s015-v006",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-surface",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體表面積",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "50d831ad1168d640a6a16469afc0ef050d60c57568534c574f8316f28e645d89"
  },
  {
    "prompt": "一個半徑 5、高 10 公分的實心圓柱，沿軸鑽出半徑 2 公分的貫穿圓孔。與原圓柱相比，新表面積增加多少？",
    "text": "一個半徑 5、高 10 公分的實心圓柱，沿軸鑽出半徑 2 公分的貫穿圓孔。與原圓柱相比，新表面積增加多少？",
    "choices": [
      "20π",
      "24π",
      "40π",
      "32π"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：減兩開口8π；加內壁40π；淨增32π。所得結果是「32π」。",
    "explanation": "兩端各失去半徑2的圓面，共減8π；新增孔內側面=2π×2×10=40π；淨增加32π平方公分。",
    "steps": [
      "減兩開口8π",
      "加內壁40π",
      "淨增32π"
    ],
    "optionAnalysis": [
      {
        "choice": "20π",
        "truth": false,
        "reason": "只算部分內壁。"
      },
      {
        "choice": "24π",
        "truth": false,
        "reason": "此選項無法符合所求「表面積增量」；錯誤來源會是：只加通孔內壁，忘記兩端原表面開口消失。"
      },
      {
        "choice": "40π",
        "truth": false,
        "reason": "只算內壁未扣開口。"
      },
      {
        "choice": "32π",
        "truth": true,
        "reason": "依獨立計算「淨增32π」，此選項符合所求「表面積增量」。"
      }
    ],
    "misconceptionTarget": "只加通孔內壁，忘記兩端原表面開口消失。",
    "authoringIntent": "計算貫穿圓孔的表面積變化。",
    "difficulty": "advanced",
    "givenConditions": [
      "外圓柱r5 h10",
      "孔r2貫穿"
    ],
    "target": "表面積增量",
    "difficultyReason": "進階：同時處理減少的兩圓與新增內壁。",
    "prerequisiteCheck": "已會圓柱側面積。 本題只再使用先備「composite-solid-volume」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "平方公分。 所求「表面積增量」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "保留π。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "孔完全位於底面內。 題幹已完整限制「表面積增量」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s015-v007",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-surface",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體表面積",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "6ec8e0b0860d5aef14dcc3657a375e304a55043371017b4aeb0c5ee6cfcd3990"
  },
  {
    "prompt": "一個大正方體邊長 6 公分，在一個角切去邊長 2 公分的小正方體。剩餘立體的表面積如何改變？",
    "text": "一個大正方體邊長 6 公分，在一個角切去邊長 2 公分的小正方體。剩餘立體的表面積如何改變？",
    "choices": [
      "減少12平方公分",
      "增加12平方公分",
      "不變",
      "增加24平方公分"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：三舊面減12；三新面加12。所得結果是「不變」。",
    "explanation": "切角使大正方體原本三個2×2外露區消失，共12；同時露出三個新的2×2切面，也共12，因此表面積不變。",
    "steps": [
      "三舊面減12",
      "三新面加12"
    ],
    "optionAnalysis": [
      {
        "choice": "減少12平方公分",
        "truth": false,
        "reason": "只看舊面消失。"
      },
      {
        "choice": "增加12平方公分",
        "truth": false,
        "reason": "只看新面。"
      },
      {
        "choice": "不變",
        "truth": true,
        "reason": "依獨立計算「三新面加12」，此選項符合所求「表面積變化」。"
      },
      {
        "choice": "增加24平方公分",
        "truth": false,
        "reason": "此選項無法符合所求「表面積變化」；錯誤來源會是：只計切除造成的減少或新增，未成對比較。"
      }
    ],
    "misconceptionTarget": "只計切除造成的減少或新增，未成對比較。",
    "authoringIntent": "判斷角切除的表面積變化。",
    "difficulty": "advanced",
    "givenConditions": [
      "大立方體角落",
      "切去2×2×2小立方體"
    ],
    "target": "表面積變化",
    "difficultyReason": "進階：需理解切角替換三個等面積表面。",
    "prerequisiteCheck": "已會外露面追蹤。 本題只再使用先備「composite-solid-volume」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "平方公分。 所求「表面積變化」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "切除位於角，三方向尺寸相同。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s015-v008",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-surface",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體表面積",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "f5ba2059d9b6c77073f693908ca7393c002affb57fcd55ce1cf4a5701310b74b"
  },
  {
    "prompt": "三個邊長 2 公分的正方體可排成一直線或L形。兩種排法的外表面積關係為何？",
    "text": "三個邊長 2 公分的正方體可排成一直線或L形。兩種排法的外表面積關係為何？",
    "choices": [
      "直線較大8",
      "L形較大8",
      "無法判斷",
      "相等"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：每種兩接合；原72扣16得56。所得結果是「相等」。",
    "explanation": "兩種排法都有兩個整面接合，且沒有額外接觸；原總面積相同、扣除接合面數也相同，因此外表面積相等，皆56平方公分。",
    "steps": [
      "每種兩接合",
      "原72扣16得56"
    ],
    "optionAnalysis": [
      {
        "choice": "直線較大8",
        "truth": false,
        "reason": "接合數相同。"
      },
      {
        "choice": "L形較大8",
        "truth": false,
        "reason": "此選項無法符合所求「外表面積關係」；錯誤來源會是：只看外形彎折就認為表面積不同。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "資料足夠。"
      },
      {
        "choice": "相等",
        "truth": true,
        "reason": "依獨立計算「原72扣16得56」，此選項符合所求「外表面積關係」。"
      }
    ],
    "misconceptionTarget": "只看外形彎折就認為表面積不同。",
    "authoringIntent": "比較不同排列的接合面數。",
    "difficulty": "advanced",
    "givenConditions": [
      "3個邊長2正方體",
      "直線或L形",
      "均兩整面接合"
    ],
    "target": "外表面積關係",
    "difficultyReason": "進階：需以接合拓樸而非視覺大小判斷。",
    "prerequisiteCheck": "已會接合面計數。 本題只再使用先備「composite-solid-volume」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "平方公分。 所求「外表面積關係」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "L形兩端不額外接觸。 題幹已完整限制「外表面積關係」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s015-v009",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-surface",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體表面積",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "8d1d2fd71971e9b7ff67669b6bd2b31aaaffc004a4acb86dd14aa319f4f9811f"
  },
  {
    "prompt": "兩個相同紙箱外表面積各 1.2 平方公尺，將它們以 0.15 平方公尺的完整面緊密黏合後，只在外露處貼膜。需要貼膜多少平方公尺？",
    "text": "兩個相同紙箱外表面積各 1.2 平方公尺，將它們以 0.15 平方公尺的完整面緊密黏合後，只在外露處貼膜。需要貼膜多少平方公尺？",
    "choices": [
      "1.95",
      "2.25",
      "2.10",
      "2.40"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：2×1.2=2.4；扣2×0.15=0.3；得2.1。所得結果是「2.10」。",
    "explanation": "原總面積2.4；黏合面兩份不貼，扣0.30，需2.10平方公尺。",
    "steps": [
      "2×1.2=2.4",
      "扣2×0.15=0.3",
      "得2.1"
    ],
    "optionAnalysis": [
      {
        "choice": "1.95",
        "truth": false,
        "reason": "此選項無法符合所求「貼膜面積」；錯誤來源會是：只扣一個箱子的接觸面。 必須依「計算黏合包膜面積。」的關係重新核對。"
      },
      {
        "choice": "2.25",
        "truth": false,
        "reason": "只扣一份。"
      },
      {
        "choice": "2.10",
        "truth": true,
        "reason": "依獨立計算「得2.1」，此選項符合所求「貼膜面積」。"
      },
      {
        "choice": "2.40",
        "truth": false,
        "reason": "此選項無法符合所求「貼膜面積」；錯誤來源會是：只扣一個箱子的接觸面。 必須依「計算黏合包膜面積。」的關係重新核對。"
      }
    ],
    "misconceptionTarget": "只扣一個箱子的接觸面。 必須依「計算黏合包膜面積。」的關係重新核對。",
    "authoringIntent": "計算黏合包膜面積。",
    "difficulty": "literacy",
    "givenConditions": [
      "兩箱各1.2m²",
      "接合0.15m²",
      "只貼外露"
    ],
    "target": "貼膜面積",
    "difficultyReason": "素養：實際施工範圍由接合遮蔽決定。",
    "prerequisiteCheck": "已會接合公式。 本題只再使用先備「composite-solid-volume」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "平方公尺。 所求「貼膜面積」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確到0.01。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "貼合面完全重合。 題幹已完整限制「貼膜面積」的範圍與取值方向。",
    "literacyContextNecessity": "兩紙箱以0.15平方公尺完整面黏合後，該接合面在兩箱各消失一次；貼膜只算外露處的規則決定扣除兩倍。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s015-v010",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-surface",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體表面積",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "dfab469594a37858b54dfadc710564f45e4a96139841815c947ac435bd392775"
  },
  {
    "prompt": "一座由 5 個邊長 40 公分的立方體花盆模組排成十字形：中央一個，前後左右各一個，全部在同一層且只與中央整面接觸。外露表面積是多少平方公尺？",
    "text": "一座由 5 個邊長 40 公分的立方體花盆模組排成十字形：中央一個，前後左右各一個，全部在同一層且只與中央整面接觸。外露表面積是多少平方公尺？",
    "choices": [
      "3.52",
      "3.20",
      "3.84",
      "4.48"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：剩面數30-8=22；乘0.16得3.52。所得結果是「3.52」。",
    "explanation": "單面積=(0.4)²=0.16平方公尺。原有30面；4個接合各扣2面，剩22面。面積=22×0.16=3.52平方公尺。",
    "steps": [
      "剩面數30-8=22",
      "乘0.16得3.52"
    ],
    "optionAnalysis": [
      {
        "choice": "3.52",
        "truth": true,
        "reason": "22×0.16=3.52。"
      },
      {
        "choice": "3.20",
        "truth": false,
        "reason": "少算兩個外露面。"
      },
      {
        "choice": "3.84",
        "truth": false,
        "reason": "只扣3個接合。"
      },
      {
        "choice": "4.48",
        "truth": false,
        "reason": "接合面扣除不足。"
      }
    ],
    "misconceptionTarget": "公分換公尺後平方倍率或接合面數錯。",
    "authoringIntent": "模組排列外露面積與單位換算。",
    "difficulty": "literacy",
    "givenConditions": [
      "5立方體邊40cm",
      "十字同層",
      "4個接合"
    ],
    "target": "外露m²",
    "difficultyReason": "素養：模組排列、接合計數與平方單位換算均必要。",
    "prerequisiteCheck": "已會方塊表面計數。 本題只再使用先備「composite-solid-volume」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "40cm=0.4m，面積平方。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "外圍四模組彼此只碰稜或不碰，不形成面接合；共4個接合。",
    "literacyContextNecessity": "五個立方體採同層十字排列，只有中央分別與四個外側整面接觸；排列方式決定接合面數與外露面積。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s015-v011",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-surface",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體表面積",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "efab65403f6a7181ba38c3820ca08ea870750a3a342f5b19b7d017231d65614a"
  },
  {
    "prompt": "工廠在長 10、寬 8、高 6 公分的金屬塊上鑽一個截面 2×3 公分、貫穿高度 6 公分的矩形孔。若所有外表面與孔內壁都要鍍膜，總鍍膜面積是多少？",
    "text": "工廠在長 10、寬 8、高 6 公分的金屬塊上鑽一個截面 2×3 公分、貫穿高度 6 公分的矩形孔。若所有外表面與孔內壁都要鍍膜，總鍍膜面積是多少？",
    "choices": [
      "368",
      "424",
      "412",
      "392"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：原376；減兩孔口12；加內壁60；得424。所得結果是「424」。",
    "explanation": "原長方體表面積=2(80+60+48)=376。上下兩面各減孔口6，共減12；孔內壁=2(2+3)×6=60。總面積=376-12+60=424平方公分。",
    "steps": [
      "原376",
      "減兩孔口12",
      "加內壁60",
      "得424"
    ],
    "optionAnalysis": [
      {
        "choice": "368",
        "truth": false,
        "reason": "只減孔口且漏內壁。"
      },
      {
        "choice": "424",
        "truth": true,
        "reason": "376-12+60=424。"
      },
      {
        "choice": "412",
        "truth": false,
        "reason": "少算12平方公分。"
      },
      {
        "choice": "392",
        "truth": false,
        "reason": "內壁或孔口處理不完整。"
      }
    ],
    "misconceptionTarget": "只扣孔口或只加內壁，未同時處理。",
    "authoringIntent": "計算含矩形通孔的鍍膜面積。",
    "difficulty": "literacy",
    "givenConditions": [
      "外塊10×8×6",
      "孔2×3貫穿高6",
      "外面與內壁皆鍍"
    ],
    "target": "鍍膜面積",
    "difficultyReason": "素養：製程要求包含孔內壁，需完整追蹤表面。",
    "prerequisiteCheck": "已會長方體表面積與周長×長。",
    "estimatedTimeSec": 90,
    "unitCheck": "平方公分。 所求「鍍膜面積」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "孔沿高度6貫穿上下底，兩開口各2×3，內壁周長10乘6。",
    "literacyContextNecessity": "矩形孔貫穿整個高度，且外表面與孔內壁都鍍膜；必須扣除兩端孔口並加入四面內壁，條件不可省略。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s015-v012",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-surface",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體表面積",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "0d7ff0e55ceab7c6a73b6a82e64b717678fa2c844e69fa475141178126ee6c7b"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "prompt": "兩個長方體 A、B 以 A 上一個 4×3 公分區域與 B 底部完整貼合。A、B 原表面積分別為 160、94 平方公分。求組合後外表面積，並說明為什麼扣兩次接合面。",
    "requiredWork": [
      "求接合面積。",
      "從兩表面積總和扣兩份。",
      "說明兩物體各有一面被遮蔽。"
    ],
    "fullCreditSolution": [
      "接合面積=4×3=12平方公分。",
      "原總表面積=160+94=254平方公分。",
      "A的12平方公分與B的12平方公分都成為內部，所以組合外表面積=254-24=230平方公分。"
    ],
    "alternativeSolutions": [
      "可逐面列出外露面，結果同為230。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "得230並清楚解釋兩份接合面。"
      },
      {
        "score": 2,
        "criteria": "答案230且算式正確，但文字說明簡略。"
      },
      {
        "score": 1,
        "criteria": "知道要扣接合面但只扣一次，或有一處算術錯誤。"
      },
      {
        "score": 0,
        "criteria": "直接相加254或無有效作答。"
      }
    ],
    "partialCreditRules": [
      "答案230且算式正確，但文字說明簡略。",
      "知道要扣接合面但只扣一次，或有一處算術錯誤。"
    ],
    "followThroughPolicy": "若接合面積算錯但後續正確扣兩倍，可保留方法分。",
    "unitNotationRules": "面積均以平方公分。",
    "answerOnlyPolicy": "只寫230可得2分，因要求解釋。",
    "difficulty": "standard",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "independentReview": {
      "derivedResult": "230平方公分。",
      "ambiguityAndBoundary": "獨立算接合12、原和254、扣24得230；兩份遮蔽分別來自A與B，無其他接觸。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "questionId": "u23-s015-cr001",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-surface",
    "type": "constructed-response",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "7a846206b7d60a72f29b83a7995b242759c3b23bf8652a48171443415fdb8600"
  },
  {
    "prompt": "邊長 8 公分的正方體，從上表面中央向下鑽一個 2×2 公分、深 5 公分的方形孔（不貫穿）。求鑽孔後總表面積。",
    "requiredWork": [
      "求原正方體表面積。",
      "扣除上表面開口。",
      "加孔底與四個內壁。"
    ],
    "fullCreditSolution": [
      "原表面積=6×8²=384平方公分。",
      "上表面失去開口2×2=4；孔底新增4，互相抵消。",
      "四個內壁總面積=孔截面周長2(2+2)×深5=8×5=40。",
      "新表面積=384+40=424平方公分。"
    ],
    "alternativeSolutions": [
      "也可直接觀察開口與孔底同面積相消，只加四內壁40。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整追蹤開口、孔底、內壁並得424。"
      },
      {
        "score": 2,
        "criteria": "答案424且主要理由正確，但少一項面積說明。"
      },
      {
        "score": 1,
        "criteria": "知道要加內壁或減開口，但未完整處理。"
      },
      {
        "score": 0,
        "criteria": "只用原面積減孔體積或無有效作答。"
      }
    ],
    "partialCreditRules": [
      "答案424且主要理由正確，但少一項面積說明。",
      "知道要加內壁或減開口，但未完整處理。"
    ],
    "followThroughPolicy": "若原表面積有單一算術錯誤但新增40的推理正確，可保留後續分。",
    "unitNotationRules": "所有結果用平方公分；深度是內壁長度。",
    "answerOnlyPolicy": "只寫424可得2分。",
    "difficulty": "advanced",
    "figureId": "u23-s015-fig001",
    "drawingSpecId": "u23-s015-draw001",
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "independentReview": {
      "derivedResult": "424平方公分。",
      "ambiguityAndBoundary": "獨立算原384；開口4與底4抵消，周長8乘深5新增40，總424；深5<8確保不貫穿。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "questionId": "u23-s015-cr002",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-surface",
    "type": "constructed-response",
    "visualMode": "figure-supported",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "9034ef86e5b52a5ede08a20f748cb2234312278d00566f1aadefc8c178b7253a"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u23-s015-fig001",
    "drawingSpecId": "u23-s015-draw001",
    "unitId": "u23",
    "skillSlot": "s015",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "purpose": "正方體表面方形盲孔與新增內壁",
    "svgPath": "figures/u23/u23-s015-fig001.svg",
    "canvas": {
      "width": 460,
      "height": 330,
      "viewBox": "0 0 460 330"
    },
    "drawingSpec": {
      "coordinateSystem": "正方體以斜投影表示；上表面四點(100,95),(270,45),(370,105),(200,155)。孔口四點(195,93),(235,81),(260,96),(220,108)，向下約97px。",
      "visibleLineRules": "外輪廓3px，孔內壁2px。",
      "hiddenLineRules": "無需虛線；孔底可見。",
      "labelsAndPositions": {
        "邊長8": "左側面",
        "孔口2×2": "孔口上方",
        "深5": "孔右側"
      },
      "tickMarksUnitsArrowsSymbols": "尺寸箭頭與標籤依圖中特定需求；線寬至少2，文字至少14px。",
      "scaleStatus": "not-to-scale",
      "visualInferenceWarning": "不得由投影邊長估算面積；使用標示8、2、5。"
    },
    "altText": "邊長8的正方體，上表面中央有2乘2、深5且未貫穿的方形孔。",
    "svgTitle": "正方體表面方形盲孔與新增內壁",
    "svgDescription": "邊長8的正方體，上表面中央有2乘2、深5且未貫穿的方形孔。",
    "mobileReadabilityReview": "文字位於不同區域，孔口尺寸與深度不重疊。",
    "answerLeakageReview": "圖不標新增40或總表面積424。",
    "svgAssertions": [
      "<title",
      "<desc",
      "role=\"img\"",
      "孔口 2×2",
      "深 5",
      "孔未貫穿"
    ],
    "figureReview": {
      "decision": "pass",
      "manualRenderedInspection": true,
      "reviewNote": "u23-s015-fig001 已逐一核對線段連接、標籤位置、縮放警語、手機字級與題目答案不外洩；圖形只提供解題所需結構。",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "dce6f33eda3158cc674a644f171957da9d43003b4e7702e052b99f13db466970"
  }
];
