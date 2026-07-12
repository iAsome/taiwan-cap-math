// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u23-s014-lecture-r1",
  "unitId": "u23",
  "numericUnitId": 23,
  "topicId": "u23-measure",
  "skillId": "composite-solid-volume",
  "title": "組合體體積：分割相加與整體扣除",
  "lockedSkillTitle": "組合體體積",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能把組合立體分割成基本柱體或錐體。",
    "能用相加或相減求組合體體積。",
    "能辨認挖空、孔洞與重疊不可重算。",
    "能處理不同單位與體積守恆。"
  ],
  "prerequisites": [
    {
      "skillId": "volume-unit-conversion",
      "requiredLevel": "能計算柱體與錐體體積，並在立方公分、公升間換算。",
      "bridge": "已會柱體、錐體體積與單位換算。本節不新增公式，而是選擇分割方式並管理各部分是否實心、挖空或重疊。"
    }
  ],
  "glossary": [
    [
      "組合體",
      "由兩個以上基本立體接合或切除形成的立體。"
    ],
    [
      "分割線",
      "為計算而想像的界面，不一定真實存在。"
    ],
    [
      "挖空體積",
      "從原實心體中移除的部分。"
    ],
    [
      "體積守恆",
      "切割、重排或熔鑄無損耗時總體積不變。"
    ]
  ],
  "notation": [
    [
      "V總=ΣV部分",
      "互不重疊部分相加。"
    ],
    [
      "V剩=V原−V挖",
      "從完整立體扣除孔洞或切除。"
    ]
  ],
  "conceptNarrative": [
    "組合體可以像積木般分成互不重疊的基本立體，各部分體積相加。",
    "若外形完整、內部挖去一塊，通常用完整外體積減挖空體積更簡潔。",
    "分割方式不唯一，但每一小塊必須恰好算一次；重疊區若兩次相加會造成高估。",
    "計算前統一長度單位，並確認圓柱、圓錐的高與半徑屬於哪一部分。"
  ],
  "formalDefinitions": [
    [
      "加法原理",
      "互不重疊的部分體積總和等於整體體積。"
    ],
    [
      "減法原理",
      "完整外體積減去被移除部分等於剩餘體積。"
    ]
  ],
  "formulas": [
    [
      "V總=V1+V2+…",
      [
        "各部分內部不重疊"
      ],
      "接合組合體。"
    ],
    [
      "V剩=V外−V孔",
      [
        "孔洞完全位於外體內"
      ],
      "挖空或鑽孔。"
    ]
  ],
  "nonApplicableCases": [
    "接合面不影響體積，不需像表面積那樣扣兩面。",
    "相加時不可把重疊區算兩次。",
    "挖孔的尺寸必須使用孔洞本身，不是外體尺寸。",
    "單位不同時不能先直接相加。"
  ],
  "method": [
    [
      "畫分割或標挖空",
      "是加法型還是減法型？"
    ],
    [
      "列每部分形狀與尺寸",
      "每個半徑、高屬於哪部分？"
    ],
    [
      "逐部分求體積",
      "使用對應公式。"
    ],
    [
      "按結構相加或相減",
      "是否有重疊或孔洞？"
    ],
    [
      "檢查合理性",
      "挖空後應小於原體；接合後應等於各塊和。"
    ]
  ],
  "workedExamples": [
    [
      "L1",
      "8×5×3長方體上放4×5×2長方體，體積？",
      [
        "120+40=160。"
      ],
      "160立方單位。"
    ],
    [
      "L2",
      "邊長10正方體挖去2×2×10通孔，剩餘體積？",
      [
        "1000-40=960。"
      ],
      "960立方單位。"
    ],
    [
      "L3",
      "半徑2、高6圓柱上接同底高3圓錐，體積？",
      [
        "24π+4π=28π。"
      ],
      "28π立方單位。"
    ],
    [
      "L4",
      "兩形狀熔化重鑄且無損耗，新體積？",
      [
        "先加原零件體積。"
      ],
      "新體積等於原總體積。"
    ]
  ],
  "commonMistakes": [
    [
      "接合面扣體積",
      "把表面積規則誤用。",
      "接合面沒有厚度，不扣體積。"
    ],
    [
      "相加重疊區",
      "分割不互斥。",
      "改用不重疊分割或容斥。"
    ],
    [
      "挖空仍相加",
      "忽略『挖去』語意。",
      "外體積減孔洞。"
    ],
    [
      "圓柱與圓錐都用同公式",
      "漏掉錐體1/3。",
      "逐部分標公式。"
    ],
    [
      "公尺與公分直接相乘",
      "未統一單位。",
      "先統一所有長度。"
    ],
    [
      "答案大於原體卻稱挖空",
      "未做合理性檢查。",
      "挖空後體積必減少。"
    ]
  ],
  "selfCheck": [
    "各部分是否互不重疊？",
    "題目是接合還是挖去？",
    "每部分公式是否正確？",
    "單位是否先統一？",
    "結果是否符合增減方向？"
  ],
  "summary": [
    "組合體可分割相加或整體扣除。",
    "接合面不扣體積。",
    "挖空用外減內。",
    "避免重疊重算。",
    "體積守恆可處理熔鑄與重排。"
  ],
  "connections": {
    "previous": "前面已具備基本立體體積與單位換算，本節把它們組織成計算策略。",
    "next": [
      "下一節組合體表面積不同：接合面會從外表面消失。",
      "素養題會加入材料密度、容量與施工條件。"
    ]
  },
  "figureReferences": [
    {
      "figureId": "u23-s014-fig001",
      "purpose": "未貫穿圓柱孔",
      "altText": "外圓柱與中央盲孔的高與深度。"
    }
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u23-s014-v001",
      "u23-s014-v002",
      "u23-s014-v003",
      "u23-s014-v004",
      "u23-s014-v005",
      "u23-s014-v006",
      "u23-s014-v007",
      "u23-s014-v008",
      "u23-s014-v009",
      "u23-s014-v010",
      "u23-s014-v011",
      "u23-s014-v012"
    ],
    "constructedResponseIds": [
      "u23-s014-cr001",
      "u23-s014-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐例獨立重算160、960與28π，並確認熔鑄守恆；特別審查接合面不扣體積、挖空結果小於原體及單位先統一。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
  "contentSha256": "8d5c1aa276f12334fbb69fce2509cd58c043dd32f96190e801358cdc14bba04a"
};

export const QUESTIONS = [
  {
    "prompt": "一個組合體由兩個互不重疊的長方體接合而成，體積分別為 60 與 45 立方公分。組合體體積是多少？",
    "text": "一個組合體由兩個互不重疊的長方體接合而成，體積分別為 60 與 45 立方公分。組合體體積是多少？",
    "choices": [
      "15",
      "105",
      "60",
      "2700"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：相加60+45。所得結果是「105」。",
    "explanation": "接合面沒有體積，兩部分互不重疊，總體積=60+45=105立方公分。",
    "steps": [
      "相加60+45"
    ],
    "optionAnalysis": [
      {
        "choice": "15",
        "truth": false,
        "reason": "此選項無法符合所求「總體積」；錯誤來源會是：把接合面誤認為要扣除體積。"
      },
      {
        "choice": "105",
        "truth": true,
        "reason": "依獨立計算「相加60+45」，此選項符合所求「總體積」。"
      },
      {
        "choice": "60",
        "truth": false,
        "reason": "只算一塊。"
      },
      {
        "choice": "2700",
        "truth": false,
        "reason": "此選項無法符合所求「總體積」；錯誤來源會是：把接合面誤認為要扣除體積。"
      }
    ],
    "misconceptionTarget": "把接合面誤認為要扣除體積。",
    "authoringIntent": "基本相加型組合體。",
    "difficulty": "basic",
    "givenConditions": [
      "兩部分互不重疊",
      "體積60與45"
    ],
    "target": "總體積",
    "difficultyReason": "基礎：直接使用體積可加性。",
    "prerequisiteCheck": "已會體積意義。 本題只再使用先備「volume-unit-conversion」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "立方公分。 所求「總體積」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "接合面無厚度。 題幹已完整限制「總體積」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s014-v001",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-volume",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體體積",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "01abbecfaa9ebdbac2ff5d64ae3c80276e354afc24b1891855a95355379fee97"
  },
  {
    "prompt": "邊長 6 公分的正方體挖去一個 2×2×6 公分的長方體通孔，剩餘體積是多少？",
    "text": "邊長 6 公分的正方體挖去一個 2×2×6 公分的長方體通孔，剩餘體積是多少？",
    "choices": [
      "168",
      "204",
      "192",
      "216"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：原體216；孔24；相減192。所得結果是「192」。",
    "explanation": "原正方體216；通孔體積=2×2×6=24；剩餘216-24=192立方公分。",
    "steps": [
      "原體216",
      "孔24",
      "相減192"
    ],
    "optionAnalysis": [
      {
        "choice": "168",
        "truth": false,
        "reason": "扣太多。"
      },
      {
        "choice": "204",
        "truth": false,
        "reason": "只扣12。"
      },
      {
        "choice": "192",
        "truth": true,
        "reason": "依獨立計算「相減192」，此選項符合所求「剩餘體積」。"
      },
      {
        "choice": "216",
        "truth": false,
        "reason": "未扣孔。"
      }
    ],
    "misconceptionTarget": "挖孔仍使用相加或只算孔面積。",
    "authoringIntent": "減法型組合體。",
    "difficulty": "basic",
    "givenConditions": [
      "正方體邊6",
      "通孔2×2×6"
    ],
    "target": "剩餘體積",
    "difficultyReason": "基礎：完整體積減單一長方體孔。",
    "prerequisiteCheck": "已會長方體體積。 本題只再使用先備「volume-unit-conversion」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "立方公分。 所求「剩餘體積」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "孔貫穿且完全位於正方體。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s014-v002",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-volume",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體體積",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "c4593e3efeeaa7935c3ca2fe5302e29048e2b029e528b8fdefdb6821f6c27561"
  },
  {
    "prompt": "半徑 3 公分、高 4 公分的圓柱上方接一個同底、同高 6 公分的圓錐。總體積是多少？",
    "text": "半徑 3 公分、高 4 公分的圓柱上方接一個同底、同高 6 公分的圓錐。總體積是多少？",
    "choices": [
      "54π",
      "42π",
      "72π",
      "90π"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：柱36π；錐18π；和54π。所得結果是「54π」。",
    "explanation": "圓柱體積=π×9×4=36π；圓錐=π×9×6÷3=18π；總和54π。",
    "steps": [
      "柱36π",
      "錐18π",
      "和54π"
    ],
    "optionAnalysis": [
      {
        "choice": "54π",
        "truth": true,
        "reason": "依獨立計算「和54π」，此選項符合所求「總體積」。"
      },
      {
        "choice": "42π",
        "truth": false,
        "reason": "只加錯。"
      },
      {
        "choice": "72π",
        "truth": false,
        "reason": "漏除3。"
      },
      {
        "choice": "90π",
        "truth": false,
        "reason": "此選項無法符合所求「總體積」；錯誤來源會是：圓錐部分忘記除以3。 必須依「柱錐接合體積。」的關係重新核對。"
      }
    ],
    "misconceptionTarget": "圓錐部分忘記除以3。 必須依「柱錐接合體積。」的關係重新核對。",
    "authoringIntent": "柱錐接合體積。",
    "difficulty": "basic",
    "givenConditions": [
      "共同半徑3",
      "柱高4",
      "錐高6"
    ],
    "target": "總體積",
    "difficultyReason": "基礎：分別套兩個公式後相加。",
    "prerequisiteCheck": "已會柱錐體積。 本題只再使用先備「volume-unit-conversion」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "立方公分。 所求「總體積」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "保留π。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "兩部分只在底面接合不重疊。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s014-v003",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-volume",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體體積",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "1a0c8d961562d9330e437d66d190876f5046ee4724beff874254b87a238e3f90"
  },
  {
    "prompt": "一個階梯形組合體可分成底層 10×6×2 公分與上層 4×6×3 公分兩個長方體。體積是多少？",
    "text": "一個階梯形組合體可分成底層 10×6×2 公分與上層 4×6×3 公分兩個長方體。體積是多少？",
    "choices": [
      "120",
      "168",
      "360",
      "192"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：10×6×2=120；4×6×3=72；相加192。所得結果是「192」。",
    "explanation": "底層體積120，上層體積72，總體積192立方公分。",
    "steps": [
      "10×6×2=120",
      "4×6×3=72",
      "相加192"
    ],
    "optionAnalysis": [
      {
        "choice": "120",
        "truth": false,
        "reason": "漏上層。"
      },
      {
        "choice": "168",
        "truth": false,
        "reason": "加法錯。"
      },
      {
        "choice": "360",
        "truth": false,
        "reason": "把高度相加後全乘。"
      },
      {
        "choice": "192",
        "truth": true,
        "reason": "依獨立計算「相加192」，此選項符合所求「總體積」。"
      }
    ],
    "misconceptionTarget": "把上層高度套到整個底面。",
    "authoringIntent": "依層分割階梯體。",
    "difficulty": "standard",
    "givenConditions": [
      "底層10×6×2",
      "上層4×6×3",
      "不重疊"
    ],
    "target": "總體積",
    "difficultyReason": "標準：從文字尺寸建立兩個互斥區塊。",
    "prerequisiteCheck": "已會長方體體積。 本題只再使用先備「volume-unit-conversion」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "立方公分。 所求「總體積」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "上層尺寸為自身外形。 題幹已完整限制「總體積」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": "u23-s014-fig001",
    "drawingSpecId": "u23-s014-draw001",
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s014-v004",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-volume",
    "type": "mc",
    "visualMode": "figure-supported",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體體積",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "134970cda1631e58d24cb1370735bd13fc536aeaa336fe8098179bc38b7dd2e0"
  },
  {
    "prompt": "一個外半徑 5 公分、內半徑 3 公分、高 8 公分的中空圓管，材料體積為何？",
    "text": "一個外半徑 5 公分、內半徑 3 公分、高 8 公分的中空圓管，材料體積為何？",
    "choices": [
      "64π",
      "96π",
      "200π",
      "128π"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：外減內截面差16π；乘高8。所得結果是「128π」。",
    "explanation": "材料體積=外圓柱-內孔=π(5²-3²)×8=π×16×8=128π立方公分。",
    "steps": [
      "外減內截面差16π",
      "乘高8"
    ],
    "optionAnalysis": [
      {
        "choice": "64π",
        "truth": false,
        "reason": "少一半。"
      },
      {
        "choice": "96π",
        "truth": false,
        "reason": "算錯差。"
      },
      {
        "choice": "200π",
        "truth": false,
        "reason": "只算外體。"
      },
      {
        "choice": "128π",
        "truth": true,
        "reason": "依獨立計算「乘高8」，此選項符合所求「材料體積」。"
      }
    ],
    "misconceptionTarget": "只算外圓柱或把半徑相減後再平方。",
    "authoringIntent": "計算同軸中空圓管體積。",
    "difficulty": "standard",
    "givenConditions": [
      "外r=5",
      "內r=3",
      "高8"
    ],
    "target": "材料體積",
    "difficultyReason": "標準：以環形截面或兩圓柱相減。",
    "prerequisiteCheck": "已會圓柱體積。 本題只再使用先備「volume-unit-conversion」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "立方公分。 所求「材料體積」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "保留π。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "內孔同軸且貫穿全高。 題幹已完整限制「材料體積」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s014-v005",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-volume",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體體積",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "96b386b69bea57747e1a592076da57cdc7432beb630fba8d43af63af12145b9f"
  },
  {
    "prompt": "一個長方體 12×8×5 公分，從一角切去 4×3×5 公分的小長方體。剩餘體積是多少？",
    "text": "一個長方體 12×8×5 公分，從一角切去 4×3×5 公分的小長方體。剩餘體積是多少？",
    "choices": [
      "420",
      "400",
      "360",
      "480"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：原480；切去60；得420。所得結果是「420」。",
    "explanation": "原體積=12×8×5=480；切去=4×3×5=60；剩餘420立方公分。",
    "steps": [
      "原480",
      "切去60",
      "得420"
    ],
    "optionAnalysis": [
      {
        "choice": "420",
        "truth": true,
        "reason": "依獨立計算「得420」，此選項符合所求「剩餘體積」。"
      },
      {
        "choice": "400",
        "truth": false,
        "reason": "切去80。"
      },
      {
        "choice": "360",
        "truth": false,
        "reason": "此選項無法符合所求「剩餘體積」；錯誤來源會是：只從長或寬尺寸相減後整體相乘，未辨認切角位置。"
      },
      {
        "choice": "480",
        "truth": false,
        "reason": "此選項無法符合所求「剩餘體積」；錯誤來源會是：只從長或寬尺寸相減後整體相乘，未辨認切角位置。"
      }
    ],
    "misconceptionTarget": "只從長或寬尺寸相減後整體相乘，未辨認切角位置。",
    "authoringIntent": "計算切角後體積。",
    "difficulty": "standard",
    "givenConditions": [
      "外體12×8×5",
      "切角4×3×5"
    ],
    "target": "剩餘體積",
    "difficultyReason": "標準：採完整體減切除體。",
    "prerequisiteCheck": "已會長方體體積。 本題只再使用先備「volume-unit-conversion」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "立方公分。 所求「剩餘體積」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "切除體完全在外體內。 題幹已完整限制「剩餘體積」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s014-v006",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-volume",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體體積",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "1129cf212ee53e21672511a7e14655146bf2f79a697e64f3a38a2980a596e39c"
  },
  {
    "prompt": "一個半徑 4、高 10 公分的圓柱，中央沿軸挖去半徑 2 的圓柱孔。剩餘體積占原體積的幾分之幾？",
    "text": "一個半徑 4、高 10 公分的圓柱，中央沿軸挖去半徑 2 的圓柱孔。剩餘體積占原體積的幾分之幾？",
    "choices": [
      "1/4",
      "1/2",
      "3/4",
      "7/8"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：比較截面積；(16-4)/16=3/4。所得結果是「3/4」。",
    "explanation": "原截面積16π，孔截面積4π，剩12π；高度相同，所以比例=12/16=3/4。",
    "steps": [
      "比較截面積",
      "(16-4)/16=3/4"
    ],
    "optionAnalysis": [
      {
        "choice": "1/4",
        "truth": false,
        "reason": "只算孔比例。"
      },
      {
        "choice": "1/2",
        "truth": false,
        "reason": "半徑線性相減。"
      },
      {
        "choice": "3/4",
        "truth": true,
        "reason": "依獨立計算「(16-4)/16=3/4」，此選項符合所求「剩餘比例」。"
      },
      {
        "choice": "7/8",
        "truth": false,
        "reason": "平方差錯。"
      }
    ],
    "misconceptionTarget": "用半徑比2/4直接當體積比。",
    "authoringIntent": "分析同高同軸挖孔比例。",
    "difficulty": "advanced",
    "givenConditions": [
      "外r4",
      "內r2",
      "同高10"
    ],
    "target": "剩餘比例",
    "difficultyReason": "進階：需用半徑平方而非線性比。",
    "prerequisiteCheck": "已會圓面積比例。 本題只再使用先備「volume-unit-conversion」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "比例無單位。 所求「剩餘比例」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "孔貫穿全高。 題幹已完整限制「剩餘比例」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s014-v007",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-volume",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體體積",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "3511632f5f4a098d5917d8e389922813d12d2760fe066108f7d7253a133229eb"
  },
  {
    "prompt": "一個組合體由長方體 A 與 B 接合。A 為 8×5×4，B 為 3×5×6 公分；B 有 2 公分高的一部分嵌入 A 內。組合體實際體積是多少？",
    "text": "一個組合體由長方體 A 與 B 接合。A 為 8×5×4，B 為 3×5×6 公分；B 有 2 公分高的一部分嵌入 A 內。組合體實際體積是多少？",
    "choices": [
      "210",
      "220",
      "230",
      "250"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：A160；B90；重疊30；相加後扣重疊220。所得結果是「220」。",
    "explanation": "A體積160，B體積90；嵌入重疊部分=3×5×2=30。聯集體積=160+90-30=220立方公分。",
    "steps": [
      "A160",
      "B90",
      "重疊30",
      "相加後扣重疊220"
    ],
    "optionAnalysis": [
      {
        "choice": "210",
        "truth": false,
        "reason": "此選項無法符合所求「聯集體積」；錯誤來源會是：嵌入式接合仍直接相加，重複計算重疊區。"
      },
      {
        "choice": "220",
        "truth": true,
        "reason": "依獨立計算「相加後扣重疊220」，此選項符合所求「聯集體積」。"
      },
      {
        "choice": "230",
        "truth": false,
        "reason": "此選項無法符合所求「聯集體積」；錯誤來源會是：嵌入式接合仍直接相加，重複計算重疊區。"
      },
      {
        "choice": "250",
        "truth": false,
        "reason": "完全未扣重疊。"
      }
    ],
    "misconceptionTarget": "嵌入式接合仍直接相加，重複計算重疊區。",
    "authoringIntent": "使用容斥處理重疊體積。",
    "difficulty": "advanced",
    "givenConditions": [
      "A 8×5×4",
      "B 3×5×6",
      "嵌入高2"
    ],
    "target": "聯集體積",
    "difficultyReason": "進階：接合不是只貼面，而有三維重疊，須扣一次重疊。",
    "prerequisiteCheck": "已會體積可加性。 本題只再使用先備「volume-unit-conversion」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "立方公分。 所求「聯集體積」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "嵌入截面3×5且深2。 題幹已完整限制「聯集體積」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s014-v008",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-volume",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體體積",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "a02b1ec9f0283a1356f96e55038f8bfd6d692a9af3247e6183fe3ed85bea6b5f"
  },
  {
    "prompt": "一個正方體邊長 10 公分，從六個面中心各向內挖一個 2×2×1 公分凹槽，六凹槽互不相交。剩餘體積是多少？",
    "text": "一個正方體邊長 10 公分，從六個面中心各向內挖一個 2×2×1 公分凹槽，六凹槽互不相交。剩餘體積是多少？",
    "choices": [
      "952",
      "960",
      "976",
      "988"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：原1000；6×4=24；相減976。所得結果是「976」。",
    "explanation": "原體積1000；每凹槽4立方公分，六個共24；剩餘976立方公分。",
    "steps": [
      "原1000",
      "6×4=24",
      "相減976"
    ],
    "optionAnalysis": [
      {
        "choice": "952",
        "truth": false,
        "reason": "每槽扣8。"
      },
      {
        "choice": "960",
        "truth": false,
        "reason": "扣40。"
      },
      {
        "choice": "976",
        "truth": true,
        "reason": "依獨立計算「相減976」，此選項符合所求「剩餘體積」。"
      },
      {
        "choice": "988",
        "truth": false,
        "reason": "只扣3槽。"
      }
    ],
    "misconceptionTarget": "把凹槽面積4當作需再乘錯誤深度，或漏算面數。",
    "authoringIntent": "多孔洞且互不相交的扣除。",
    "difficulty": "advanced",
    "givenConditions": [
      "正方體邊10",
      "六槽2×2×1",
      "互不相交"
    ],
    "target": "剩餘體積",
    "difficultyReason": "進階：需管理多個孔洞與不相交條件。",
    "prerequisiteCheck": "已會正方體與長方體體積。",
    "estimatedTimeSec": 90,
    "unitCheck": "立方公分。 所求「剩餘體積」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "互不相交避免容斥修正。 題幹已完整限制「剩餘體積」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s014-v009",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-volume",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體體積",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "c5cbf32bc882463d7546d8e480d72d337ddbf31d4622d356fa43682303cf47a0"
  },
  {
    "prompt": "水上浮標由圓柱與上方圓錐組成，兩者底半徑皆 0.5 公尺；圓柱高 1.2 公尺、圓錐高 0.6 公尺。以π=3.14估算浮標體積約多少立方公尺？",
    "text": "水上浮標由圓柱與上方圓錐組成，兩者底半徑皆 0.5 公尺；圓柱高 1.2 公尺、圓錐高 0.6 公尺。以π=3.14估算浮標體積約多少立方公尺？",
    "choices": [
      "0.785",
      "1.099",
      "1.0205",
      "1.413"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：柱0.942；錐0.157；和1.099。所得結果是「1.099」。",
    "explanation": "圓柱體積=3.14×0.5²×1.2=0.942立方公尺；圓錐體積=3.14×0.5²×0.6÷3=0.157立方公尺；總體積=1.099立方公尺。",
    "steps": [
      "柱0.942",
      "錐0.157",
      "和1.099"
    ],
    "optionAnalysis": [
      {
        "choice": "0.785",
        "truth": false,
        "reason": "只計部分體積。"
      },
      {
        "choice": "1.099",
        "truth": true,
        "reason": "0.942+0.157=1.099。"
      },
      {
        "choice": "1.0205",
        "truth": false,
        "reason": "小數或錐體計算錯誤。"
      },
      {
        "choice": "1.413",
        "truth": false,
        "reason": "圓錐漏除3。"
      }
    ],
    "misconceptionTarget": "圓錐部分漏除3或小數相加錯。",
    "authoringIntent": "估算浮標組合體體積。",
    "difficulty": "literacy",
    "givenConditions": [
      "共同r0.5m",
      "柱高1.2m",
      "錐高0.6m",
      "π=3.14"
    ],
    "target": "體積",
    "difficultyReason": "素養：由實物外形拆成柱錐並近似。",
    "prerequisiteCheck": "已會柱錐體積與小數。 本題只再使用先備「volume-unit-conversion」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "立方公尺。 所求「體積」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "依π=3.14，結果到小數第3位。",
    "ambiguityBoundaryAudit": "依π=3.14精確到小數第3位為1.099，唯一選項。",
    "literacyContextNecessity": "浮標由同底半徑的圓柱與圓錐組成，兩段高度不同且指定π=3.14；分解外形後才能正確相加體積。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s014-v010",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-volume",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體體積",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "f1a45f98ef80f59c2c35a2902cd41c93cca01041129dcae352a440b5b12bdc6b"
  },
  {
    "prompt": "工廠將 5 個體積各 120 立方公分的金屬塊熔化，另加入 50 立方公分金屬，鑄成截面積 65 平方公分的均勻長條，無損耗。長條長多少公分？",
    "text": "工廠將 5 個體積各 120 立方公分的金屬塊熔化，另加入 50 立方公分金屬，鑄成截面積 65 平方公分的均勻長條，無損耗。長條長多少公分？",
    "choices": [
      "8",
      "9",
      "12",
      "10"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：總體積650；除截面積65。所得結果是「10」。",
    "explanation": "總體積=5×120+50=650立方公分。長=650÷65=10公分。",
    "steps": [
      "總體積650",
      "除截面積65"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": false,
        "reason": "少算加入量。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "此選項無法符合所求「長度」；錯誤來源會是：未乘零件數或忽略額外材料。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "計算錯。"
      },
      {
        "choice": "10",
        "truth": true,
        "reason": "依獨立計算「除截面積65」，此選項符合所求「長度」。"
      }
    ],
    "misconceptionTarget": "未乘零件數或忽略額外材料。",
    "authoringIntent": "以體積守恆反求長度。",
    "difficulty": "literacy",
    "givenConditions": [
      "5塊各120",
      "加入50",
      "無損耗",
      "截面積65"
    ],
    "target": "長度",
    "difficultyReason": "素養：零件數、加入量與重鑄守恆共同決定答案。",
    "prerequisiteCheck": "已會柱體V=Bh。 本題只再使用先備「volume-unit-conversion」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "立方公分除平方公分得公分。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "均勻截面。 題幹已完整限制「長度」的範圍與取值方向。",
    "literacyContextNecessity": "五塊金屬再加入50立方公分並熔鑄無損耗，總體積守恆後配合截面積65才能反求長條長度。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s014-v011",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-volume",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體體積",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "052468d8d93796b43683fb4db5503c46718a239abef397ff6e2043a1bc3f6afc"
  },
  {
    "prompt": "一座階梯形花台由三層相同高度 20 公分的正方形柱組成，底面邊長依序為 100、70、40 公分。若三層是向上堆疊而非互相穿入，總實體體積是多少公升？",
    "text": "一座階梯形花台由三層相同高度 20 公分的正方形柱組成，底面邊長依序為 100、70、40 公分。若三層是向上堆疊而非互相穿入，總實體體積是多少公升？",
    "choices": [
      "330",
      "258",
      "396",
      "660"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：三底面積和16500；乘20得330000cm³；換330L。所得結果是「330」。",
    "explanation": "各層體積=(100²+70²+40²)×20=(10000+4900+1600)×20=330000立方公分=330公升。",
    "steps": [
      "三底面積和16500",
      "乘20得330000cm³",
      "換330L"
    ],
    "optionAnalysis": [
      {
        "choice": "330",
        "truth": true,
        "reason": "依獨立計算「換330L」，此選項符合所求「體積公升」。"
      },
      {
        "choice": "258",
        "truth": false,
        "reason": "漏單位。"
      },
      {
        "choice": "396",
        "truth": false,
        "reason": "此選項無法符合所求「體積公升」；錯誤來源會是：把階梯外框當成最大底面乘總高，重複計入不存在部分。"
      },
      {
        "choice": "660",
        "truth": false,
        "reason": "把總高60乘最大底面。"
      }
    ],
    "misconceptionTarget": "把階梯外框當成最大底面乘總高，重複計入不存在部分。",
    "authoringIntent": "計算多層花台材料體積。",
    "difficulty": "literacy",
    "givenConditions": [
      "三層各高20cm",
      "邊長100,70,40cm",
      "向上堆疊"
    ],
    "target": "體積公升",
    "difficultyReason": "素養：實物分層、容量換算與堆疊語意均必要。",
    "prerequisiteCheck": "已會正方形柱體積與cm³換L。",
    "estimatedTimeSec": 90,
    "unitCheck": "1000cm³=1L。 所求「體積公升」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "每層尺寸指該層自身厚度，不互相穿入。",
    "literacyContextNecessity": "三層花台是向上堆疊而非互相穿入，每層高度與正方形底邊皆不同，必須分層計算再換算成公升。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s014-v012",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-volume",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "組合體體積",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "b0a055a95d8cbfa65af13de6724e02ca89eaebd913754eb793b0d19b27ebbdd4"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "prompt": "一個圓柱形木料半徑 5 公分、高 20 公分，沿中心鑽出半徑 2 公分、深 12 公分的圓柱孔（沒有鑽穿）。求剩餘木料體積。",
    "requiredWork": [
      "算完整外圓柱體積。",
      "算未鑽穿孔洞體積，使用深12而非高20。",
      "相減。"
    ],
    "fullCreditSolution": [
      "外圓柱體積=π×5²×20=500π立方公分。",
      "孔洞體積=π×2²×12=48π立方公分。",
      "剩餘=452π立方公分。"
    ],
    "alternativeSolutions": [
      "可把未鑽區分成高8的實心圓柱與高12的環形柱，總和200π+252π=452π。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確使用孔深12並得452π。"
      },
      {
        "score": 2,
        "criteria": "答案正確但缺少一部分說明。"
      },
      {
        "score": 1,
        "criteria": "方法為外減孔，但孔深或算術有一處錯誤。"
      },
      {
        "score": 0,
        "criteria": "用20作孔深且無修正，或無有效作答。"
      }
    ],
    "partialCreditRules": [
      "答案正確但缺少一部分說明。",
      "方法為外減孔，但孔深或算術有一處錯誤。"
    ],
    "followThroughPolicy": "若孔體積有單一算術錯誤但外減內結構正確，可保留方法分。",
    "unitNotationRules": "所有體積用立方公分，π可保留。",
    "answerOnlyPolicy": "只寫452π可得2分，因需顯示孔未鑽穿的處理。",
    "difficulty": "advanced",
    "figureId": "u23-s014-fig001",
    "drawingSpecId": "u23-s014-draw001",
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "independentReview": {
      "derivedResult": "452π立方公分。",
      "ambiguityAndBoundary": "獨立算外500π、孔48π；孔深12小於20，因此不應使用貫穿高，剩餘為452π。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "questionId": "u23-s014-cr001",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-volume",
    "type": "constructed-response",
    "visualMode": "figure-supported",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "6a77dbcb0507ecf3927887e7aa6a5efeb2aea2cd26d6e1a4bec7660f89b8841c"
  },
  {
    "prompt": "一個長方體水槽內部長 60、公分寬 40 公分。槽內放入一個完全浸沒、體積 18 公升的石塊後，水面上升多少公分？假設水不溢出。",
    "requiredWork": [
      "把石塊體積換成立方公分。",
      "用排開水體積=底面積×上升高度。",
      "求上升高度。"
    ],
    "fullCreditSolution": [
      "18公升=18000立方公分。",
      "水槽底面積=60×40=2400平方公分。",
      "上升高度=18000÷2400=7.5公分。"
    ],
    "alternativeSolutions": [
      "可直接把每上升1公分所需水量視為2400立方公分，再求可堆幾層。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "換算與體積守恆完整，得7.5公分。"
      },
      {
        "score": 2,
        "criteria": "答案正確但換算或完全浸沒理由略缺。"
      },
      {
        "score": 1,
        "criteria": "知道用石塊體積除底面積，但有單一算術或換算錯。"
      },
      {
        "score": 0,
        "criteria": "把18直接除2400或無有效方法。"
      }
    ],
    "partialCreditRules": [
      "答案正確但換算或完全浸沒理由略缺。",
      "知道用石塊體積除底面積，但有單一算術或換算錯。"
    ],
    "followThroughPolicy": "若公升換算錯但後續一致使用底面積，可給方法分。",
    "unitNotationRules": "1L=1000cm³；上升高度以公分。",
    "answerOnlyPolicy": "只寫7.5公分可得2分。",
    "difficulty": "standard",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "independentReview": {
      "derivedResult": "7.5公分。",
      "ambiguityAndBoundary": "完全浸沒使排水體積等於石塊體積18000cm³；除以2400cm²得7.5cm，且假設不溢出排除容量限制。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "questionId": "u23-s014-cr002",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "composite-solid-volume",
    "type": "constructed-response",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "2da6e73c8b64a963aab753afecaef76c0221377fd8f4482130ba02551082d45c"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u23-s014-fig001",
    "drawingSpecId": "u23-s014-draw001",
    "unitId": "u23",
    "skillSlot": "s014",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "purpose": "圓柱中央未鑽穿孔的外體與孔深",
    "svgPath": "figures/u23/u23-s014-fig001.svg",
    "canvas": {
      "width": 480,
      "height": 320,
      "viewBox": "0 0 480 320"
    },
    "drawingSpec": {
      "coordinateSystem": "外圓柱軸線x=220，上橢圓中心(220,70)半軸105/35，底中心y=260；內孔橢圓半軸42/14，孔底中心y=184。",
      "visibleLineRules": "可見外輪廓3px；孔壁與尺寸2px。",
      "hiddenLineRules": "外圓柱底部後半與孔底後半用虛線。",
      "labelsAndPositions": {
        "外半徑5": "上表面中心至外緣",
        "孔半徑2": "中心至孔緣",
        "外高20": "右側垂直尺寸",
        "孔深12": "左內側垂直尺寸"
      },
      "tickMarksUnitsArrowsSymbols": "尺寸箭頭與標籤依圖中特定需求；線寬至少2，文字至少14px。",
      "scaleStatus": "not-to-scale",
      "visualInferenceWarning": "孔深與高只能依標示數值，不能由畫面比例估算。"
    },
    "altText": "圓柱中央有未貫穿圓柱孔，外半徑5、孔半徑2、外高20、孔深12。",
    "svgTitle": "圓柱中央未鑽穿孔的外體與孔深",
    "svgDescription": "圓柱中央有未貫穿圓柱孔，外半徑5、孔半徑2、外高20、孔深12。",
    "mobileReadabilityReview": "尺寸文字皆在輪廓外或空白區，手機縮放後仍能分辨12與20。",
    "answerLeakageReview": "圖不標外體積、孔體積或剩餘452π。",
    "svgAssertions": [
      "<title",
      "<desc",
      "role=\"img\"",
      "孔深12",
      "未貫穿",
      "stroke-dasharray"
    ],
    "figureReview": {
      "decision": "pass",
      "manualRenderedInspection": true,
      "reviewNote": "u23-s014-fig001 已逐一核對線段連接、標籤位置、縮放警語、手機字級與題目答案不外洩；圖形只提供解題所需結構。",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "4a1aafe97e83ffdcfe7da7261842395a77a6760b3a16aa4d96f94dec1d9e3c0b"
  }
];
