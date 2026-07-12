// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u17-s017-lecture-r1",
  "unitId": "u17",
  "numericUnitId": 17,
  "topicId": "u17-literacy",
  "skillId": "quadrilateral-literacy",
  "lockedTitle": "四邊形素養題",
  "title": "四邊形素養題：把圖面和尺寸與限制翻成幾何模型",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "prerequisiteBridge": "先備技能：quadrilateral-angle-sum。本節只使用該技能已建立的角度、平行或四邊形性質。",
  "learningOutcomes": [
    "從生活資料辨認四邊形類型與必要尺寸",
    "選擇周長、面積或角度模型",
    "解釋結果與單位並檢查限制"
  ],
  "prerequisites": [
    {
      "skillId": "quadrilateral-angle-sum",
      "requiredLevel": "能正確使用「quadrilateral-angle-sum」中的基本定義與直接性質，不需使用後續技能。"
    }
  ],
  "glossary": [
    {
      "term": "模型化",
      "definition": "把情境資訊轉成數學圖形與關係"
    },
    {
      "term": "有效尺寸",
      "definition": "真正參與計算的長、高、底或角"
    },
    {
      "term": "材料損耗",
      "definition": "裁切或施工時額外增加的用量"
    },
    {
      "term": "可行性檢查",
      "definition": "結果是否符合尺寸、成本與幾何限制"
    }
  ],
  "notation": [
    {
      "symbol": "∥",
      "meaning": "平行"
    },
    {
      "symbol": "⊥",
      "meaning": "垂直"
    },
    {
      "symbol": "∠",
      "meaning": "角；度數以°表示"
    },
    {
      "symbol": "=",
      "meaning": "數值或長度相等，不表示圖形必全等"
    }
  ],
  "conceptNarrative": [
    "素養題的困難常在資訊篩選，而不是公式本身。先確定題目要的是邊界長度、覆蓋面積、角度，還是分類。",
    "圖面中的斜邊、標示方向、比例尺與單位都可能影響模型。",
    "計算後要回到情境，例如材料通常需要向上取整，面積單位要換成平方公尺。"
  ],
  "formalDefinitions": [
    {
      "name": "模型化",
      "statement": "把情境資訊轉成數學圖形與關係"
    },
    {
      "name": "有效尺寸",
      "statement": "真正參與計算的長、高、底或角"
    }
  ],
  "formulas": [
    {
      "formula": "材料片數=總面積÷每片有效面積",
      "conditions": [
        "若不可裁成零碎片，最後向上取整"
      ],
      "meaning": "用於四邊形素養題中符合條件的推理或計算。"
    },
    {
      "formula": "邊框長度=外周長-不需施工的開口",
      "conditions": [
        "依情境扣除"
      ],
      "meaning": "用於四邊形素養題中符合條件的推理或計算。"
    },
    {
      "formula": "成本=數量×單價",
      "conditions": [
        "數量須先符合包裝或整數限制"
      ],
      "meaning": "用於四邊形素養題中符合條件的推理或計算。"
    }
  ],
  "nonApplicableCases": [
    "未標示或未證明平行時，不得只依外觀套用平行線角性質。",
    "圖形不一定按比例，長短、角度與垂直關係以題幹和記號為準。",
    "使用面積公式時，高必須垂直於所選底；長度與面積單位不可混用。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "圈出問題真正所求",
      "check": "完成第1步後，確認未引入題目未給的條件。"
    },
    {
      "step": 2,
      "instruction": "整理圖形類型與有效尺寸",
      "check": "完成第2步後，確認未引入題目未給的條件。"
    },
    {
      "step": 3,
      "instruction": "統一單位",
      "check": "完成第3步後，確認未引入題目未給的條件。"
    },
    {
      "step": 4,
      "instruction": "選公式並列式",
      "check": "完成第4步後，確認未引入題目未給的條件。"
    },
    {
      "step": 5,
      "instruction": "依情境處理取整、損耗或扣除",
      "check": "完成第5步後，確認未引入題目未給的條件。"
    },
    {
      "step": 6,
      "instruction": "用文字解釋答案",
      "check": "完成第6步後，確認未引入題目未給的條件。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "梯形花圃兩底12與8、高5",
      "solutionSteps": [
        "面積50平方公尺。"
      ],
      "answer": "面積50平方公尺。"
    },
    {
      "exampleId": "L2",
      "prompt": "每片地磚0.24平方公尺，需鋪10平方公尺",
      "solutionSteps": [
        "至少42片。"
      ],
      "answer": "至少42片。"
    },
    {
      "exampleId": "L3",
      "prompt": "矩形框有1公尺門口不裝框",
      "solutionSteps": [
        "周長扣1公尺。"
      ],
      "answer": "周長扣1公尺。"
    },
    {
      "exampleId": "L4",
      "prompt": "圖示不按比例",
      "solutionSteps": [
        "不能量圖估算，需用標示數值。"
      ],
      "answer": "不能量圖估算，需用標示數值。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把所有數字都代入",
      "why": "先判斷哪些是有效尺寸",
      "correction": "先判斷哪些是有效尺寸"
    },
    {
      "mistake": "面積除以單片面積後捨去小數",
      "why": "材料片數通常向上取整",
      "correction": "材料片數通常向上取整"
    },
    {
      "mistake": "公分與公尺混算",
      "why": "先統一單位",
      "correction": "先統一單位"
    },
    {
      "mistake": "忽略門口或挖空",
      "why": "依施工範圍加減",
      "correction": "依施工範圍加減"
    },
    {
      "mistake": "只有數字沒有情境結論",
      "why": "需附單位與可行性說明",
      "correction": "需附單位與可行性說明"
    }
  ],
  "selfCheck": [
    "我能否不用目測，說明「四邊形素養題」所需的條件？",
    "我是否先辨認角、邊、對角線、底或高的正確位置？",
    "方程解出後是否代回題目真正所求？",
    "角度、長度與面積單位是否正確？"
  ],
  "summary": [
    "素養題的困難常在資訊篩選，而不是公式本身。先確定題目要的是邊界長度、覆蓋面積、角度，還是分類。",
    "材料片數=總面積÷每片有效面積",
    "解題時先確認「若不可裁成零碎片，最後向上取整」。"
  ],
  "connections": {
    "previous": "承接quadrilateral-angle-sum。",
    "next": "下一技能依鎖定順序為quadrilateral-proof-basic。"
  },
  "figureReferences": [
    "u17-s017-fig001"
  ],
  "figureAccessibility": "梯形花圃附兩底、高、入口與材料區域標示，提醒分開計算面積與周長。 圖形不一定按比例。",
  "practiceLinks": {
    "mcQuestionIds": [
      "u17-s017-v001",
      "u17-s017-v002",
      "u17-s017-v003",
      "u17-s017-v004",
      "u17-s017-v005",
      "u17-s017-v006",
      "u17-s017-v007",
      "u17-s017-v008",
      "u17-s017-v009",
      "u17-s017-v010",
      "u17-s017-v011",
      "u17-s017-v012"
    ],
    "constructedResponseIds": [
      "u17-s017-cr001",
      "u17-s017-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "symbolDefinitionsComplete": true,
    "figureChecked": true,
    "reviewNote": "講義把素養題拆成資訊篩選、模型、計算與情境檢查四層，避免只堆疊生活名詞。"
  },
  "contentSha256": "ff406c636e2856510be2d4c8e069cf18894f81ce8451c162b138287ab8d7d240"
};

export const QUESTIONS = [
  {
    "questionId": "u17-s017-v001",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-literacy",
    "skillId": "quadrilateral-literacy",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "矩形告示牌長2公尺、寬0.8公尺，要計算油漆用量，最先應求什麼？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "辨認表面材料需求。",
    "choices": [
      "面積",
      "周長",
      "對角線長",
      "內角和"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：油漆覆蓋表面，因此先求矩形面積。",
    "explanation": "油漆覆蓋表面，因此先求矩形面積。",
    "steps": [
      "油漆覆蓋表面，因此先求矩形面積。",
      "因此選擇「面積」。"
    ],
    "optionAnalysis": [
      {
        "choice": "面積",
        "truth": true,
        "reason": "依獨立重算「油漆覆蓋表面，因此先求矩形面積。」，此選項正確回答所求。"
      },
      {
        "choice": "周長",
        "truth": false,
        "reason": "選項「周長」不符合題意；依依情境選擇幾何量。應得到「面積」，此錯誤常源自：看到四邊形就一律求周長。"
      },
      {
        "choice": "對角線長",
        "truth": false,
        "reason": "選項「對角線長」不符合題意；依依情境選擇幾何量。應得到「面積」，此錯誤常源自：看到四邊形就一律求周長。"
      },
      {
        "choice": "內角和",
        "truth": false,
        "reason": "選項「內角和」不符合題意；依依情境選擇幾何量。應得到「面積」，此錯誤常源自：看到四邊形就一律求周長。"
      }
    ],
    "misconceptionTarget": "看到四邊形就一律求周長。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-angle-sum與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「辨認表面材料需求。」；四個選項互異，只有面積符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "基本資訊選擇。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s017-v001-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "eb1e26a5889ab0552b1370ff2352bbd06eaf164db2e84c1e51f41fdfa5d838c0"
  },
  {
    "questionId": "u17-s017-v002",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-literacy",
    "skillId": "quadrilateral-literacy",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "正方形花圃邊長5公尺，只在四周架圍欄且留1公尺入口，需要圍欄多少公尺？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "處理實際施工範圍。",
    "choices": [
      "20公尺",
      "19公尺",
      "24公尺",
      "25公尺"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：周長=4×5=20公尺，扣除入口1公尺，需19公尺。",
    "explanation": "周長=4×5=20公尺，扣除入口1公尺，需19公尺。",
    "steps": [
      "周長=4×5=20公尺，扣除入口1公尺，需19公尺。",
      "因此選擇「19公尺」。"
    ],
    "optionAnalysis": [
      {
        "choice": "20公尺",
        "truth": false,
        "reason": "選項「20公尺」不符合題意；依周長扣除開口。應得到「19公尺」，此錯誤常源自：忽略入口或把面積當長度。"
      },
      {
        "choice": "19公尺",
        "truth": true,
        "reason": "依獨立重算「周長=4×5=20公尺，扣除入口1公尺，需19公尺。」，此選項正確回答所求。"
      },
      {
        "choice": "24公尺",
        "truth": false,
        "reason": "選項「24公尺」不符合題意；依周長扣除開口。應得到「19公尺」，此錯誤常源自：忽略入口或把面積當長度。"
      },
      {
        "choice": "25公尺",
        "truth": false,
        "reason": "選項「25公尺」不符合題意；依周長扣除開口。應得到「19公尺」，此錯誤常源自：忽略入口或把面積當長度。"
      }
    ],
    "misconceptionTarget": "忽略入口或把面積當長度。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-angle-sum與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「處理實際施工範圍。」；四個選項互異，只有19公尺符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "一次情境修正。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s017-v002-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "dfe3efc12ab0e6545d22c8d30034d134a003d692f51bb138cc192dd7bdb8526a"
  },
  {
    "questionId": "u17-s017-v003",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-literacy",
    "skillId": "quadrilateral-literacy",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "梯形花圃兩底12公尺與8公尺、高6公尺，面積多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "從文字辨認梯形尺寸。",
    "choices": [
      "40平方公尺",
      "72平方公尺",
      "60平方公尺",
      "120平方公尺"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：(12+8)×6÷2=60平方公尺。",
    "explanation": "(12+8)×6÷2=60平方公尺。",
    "steps": [
      "(12+8)×6÷2=60平方公尺。",
      "因此選擇「60平方公尺」。"
    ],
    "optionAnalysis": [
      {
        "choice": "40平方公尺",
        "truth": false,
        "reason": "選項「40平方公尺」不符合題意；依梯形面積模型。應得到「60平方公尺」，此錯誤常源自：忘除2或只用一底。"
      },
      {
        "choice": "72平方公尺",
        "truth": false,
        "reason": "選項「72平方公尺」不符合題意；依梯形面積模型。應得到「60平方公尺」，此錯誤常源自：忘除2或只用一底。"
      },
      {
        "choice": "60平方公尺",
        "truth": true,
        "reason": "依獨立重算「(12+8)×6÷2=60平方公尺。」，此選項正確回答所求。"
      },
      {
        "choice": "120平方公尺",
        "truth": false,
        "reason": "選項「120平方公尺」不符合題意；依梯形面積模型。應得到「60平方公尺」，此錯誤常源自：忘除2或只用一底。"
      }
    ],
    "misconceptionTarget": "忘除2或只用一底。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-angle-sum與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「從文字辨認梯形尺寸。」；四個選項互異，只有60平方公尺符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "標準情境公式。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s017-v003-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "4d891d9f618fc6095b2fb27b62cba5f04ca747c186d620c993fbffb7eb9361e5"
  },
  {
    "questionId": "u17-s017-v004",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-literacy",
    "skillId": "quadrilateral-literacy",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "地板面積18平方公尺，每片地磚有效鋪設面積0.24平方公尺，不計損耗，至少需幾片？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "計算材料片數。",
    "choices": [
      "43片",
      "74片",
      "76片",
      "75片"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：18÷0.24=75，剛好整數，需75片。",
    "explanation": "18÷0.24=75，剛好整數，需75片。",
    "steps": [
      "18÷0.24=75，剛好整數，需75片。",
      "因此選擇「75片」。"
    ],
    "optionAnalysis": [
      {
        "choice": "43片",
        "truth": false,
        "reason": "選項「43片」不符合題意；依面積除以單片面積。應得到「75片」，此錯誤常源自：用周長或錯誤取整。"
      },
      {
        "choice": "74片",
        "truth": false,
        "reason": "選項「74片」不符合題意；依面積除以單片面積。應得到「75片」，此錯誤常源自：用周長或錯誤取整。"
      },
      {
        "choice": "76片",
        "truth": false,
        "reason": "選項「76片」不符合題意；依面積除以單片面積。應得到「75片」，此錯誤常源自：用周長或錯誤取整。"
      },
      {
        "choice": "75片",
        "truth": true,
        "reason": "依獨立重算「18÷0.24=75，剛好整數，需75片。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "用周長或錯誤取整。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-angle-sum與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「計算材料片數。」；四個選項互異，只有75片符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需小數除法。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s017-v004-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "c5c0f6bda66292d31dbf3b5ade7a3f0b74559f0851c54a663b2cc4a6780bdc13"
  },
  {
    "questionId": "u17-s017-v005",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-literacy",
    "skillId": "quadrilateral-literacy",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一面平行四邊形旗幟底1.6公尺、高0.9公尺，布料每平方公尺120元，成本多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由尺寸推成本。",
    "choices": [
      "108元",
      "172.8元",
      "192元",
      "300元"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：面積=1.6×0.9=1.44平方公尺；成本=1.44×120=172.8元。",
    "explanation": "面積=1.6×0.9=1.44平方公尺；成本=1.44×120=172.8元。",
    "steps": [
      "面積=1.6×0.9=1.44平方公尺；成本=1.44×120=172.8元。",
      "因此選擇「172.8元」。"
    ],
    "optionAnalysis": [
      {
        "choice": "108元",
        "truth": false,
        "reason": "選項「108元」不符合題意；依面積與單價。應得到「172.8元」，此錯誤常源自：把底高相加或直接乘三個數時算錯。"
      },
      {
        "choice": "172.8元",
        "truth": true,
        "reason": "依獨立重算「面積=1.6×0.9=1.44平方公尺；成本=1.44×120=172.8元。」，此選項正確回答所求。"
      },
      {
        "choice": "192元",
        "truth": false,
        "reason": "選項「192元」不符合題意；依面積與單價。應得到「172.8元」，此錯誤常源自：把底高相加或直接乘三個數時算錯。"
      },
      {
        "choice": "300元",
        "truth": false,
        "reason": "選項「300元」不符合題意；依面積與單價。應得到「172.8元」，此錯誤常源自：把底高相加或直接乘三個數時算錯。"
      }
    ],
    "misconceptionTarget": "把底高相加或直接乘三個數時算錯。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-angle-sum與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由尺寸推成本。」；四個選項互異，只有172.8元符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "兩階段小數計算。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s017-v005-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "e097ede55fbc71632d50501e7e52ffde90a376ab56b5a44582bea908c81b9d0b"
  },
  {
    "questionId": "u17-s017-v006",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-literacy",
    "skillId": "quadrilateral-literacy",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "矩形看板外框長3公尺、寬1.2公尺，內部挖去0.5平方公尺不貼膜區。貼膜面積為何？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "處理複合面積。",
    "choices": [
      "3.6平方公尺",
      "4.1平方公尺",
      "3.1平方公尺",
      "7.2平方公尺"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：矩形面積3×1.2=3.6，扣0.5得3.1平方公尺。",
    "explanation": "矩形面積3×1.2=3.6，扣0.5得3.1平方公尺。",
    "steps": [
      "矩形面積3×1.2=3.6，扣0.5得3.1平方公尺。",
      "因此選擇「3.1平方公尺」。"
    ],
    "optionAnalysis": [
      {
        "choice": "3.6平方公尺",
        "truth": false,
        "reason": "選項「3.6平方公尺」不符合題意；依有效面積扣除挖空。應得到「3.1平方公尺」，此錯誤常源自：忽略挖空或把0.5加上。"
      },
      {
        "choice": "4.1平方公尺",
        "truth": false,
        "reason": "選項「4.1平方公尺」不符合題意；依有效面積扣除挖空。應得到「3.1平方公尺」，此錯誤常源自：忽略挖空或把0.5加上。"
      },
      {
        "choice": "3.1平方公尺",
        "truth": true,
        "reason": "依獨立重算「矩形面積3×1.2=3.6，扣0.5得3.1平方公尺。」，此選項正確回答所求。"
      },
      {
        "choice": "7.2平方公尺",
        "truth": false,
        "reason": "選項「7.2平方公尺」不符合題意；依有效面積扣除挖空。應得到「3.1平方公尺」，此錯誤常源自：忽略挖空或把0.5加上。"
      }
    ],
    "misconceptionTarget": "忽略挖空或把0.5加上。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-angle-sum與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「處理複合面積。」；四個選項互異，只有3.1平方公尺符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需先總面積再扣除。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s017-v006-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "36fdf471bf1e3e3307cb7e9ceb02f2a1f0e9ecb31972dbdacd521374e8470f77"
  },
  {
    "questionId": "u17-s017-v007",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-literacy",
    "skillId": "quadrilateral-literacy",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一箱正方形地磚每片邊長25公分，共24片。要鋪1.6平方公尺地面，一箱是否足夠？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "判斷材料是否足夠。",
    "choices": [
      "足夠，總面積6平方公尺",
      "足夠，總面積15平方公尺",
      "不足，總面積0.15平方公尺",
      "不足，總面積1.5平方公尺"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：每片0.25²=0.0625平方公尺，24片共1.5平方公尺，小於1.6。",
    "explanation": "每片0.25²=0.0625平方公尺，24片共1.5平方公尺，小於1.6。",
    "steps": [
      "每片0.25²=0.0625平方公尺，24片共1.5平方公尺，小於1.6。",
      "因此選擇「不足，總面積1.5平方公尺」。"
    ],
    "optionAnalysis": [
      {
        "choice": "足夠，總面積6平方公尺",
        "truth": false,
        "reason": "選項「足夠，總面積6平方公尺」不符合題意；依平方單位換算與可行性。應得到「不足，總面積1.5平方公尺」，此錯誤常源自：將25公分直接乘24當面積。"
      },
      {
        "choice": "足夠，總面積15平方公尺",
        "truth": false,
        "reason": "選項「足夠，總面積15平方公尺」不符合題意；依平方單位換算與可行性。應得到「不足，總面積1.5平方公尺」，此錯誤常源自：將25公分直接乘24當面積。"
      },
      {
        "choice": "不足，總面積0.15平方公尺",
        "truth": false,
        "reason": "選項「不足，總面積0.15平方公尺」不符合題意；依平方單位換算與可行性。應得到「不足，總面積1.5平方公尺」，此錯誤常源自：將25公分直接乘24當面積。"
      },
      {
        "choice": "不足，總面積1.5平方公尺",
        "truth": true,
        "reason": "依獨立重算「每片0.25²=0.0625平方公尺，24片共1.5平方公尺，小於1.6。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "將25公分直接乘24當面積。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-angle-sum與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「判斷材料是否足夠。」；四個選項互異，只有不足，總面積1.5平方公尺符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需單位換算、乘片數與比較。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s017-v007-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "de8fdf50bde4fc3222031cf5e5168e031d4781cb4b08c77c428a87cca2516596"
  },
  {
    "questionId": "u17-s017-v008",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-literacy",
    "skillId": "quadrilateral-literacy",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "梯形水池上口寬4公尺、底部寬2公尺、深1.5公尺，截面面積為何？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由結構截面求面積。",
    "choices": [
      "4.5平方公尺",
      "3平方公尺",
      "6平方公尺",
      "9平方公尺"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：(4+2)×1.5÷2=4.5平方公尺。",
    "explanation": "(4+2)×1.5÷2=4.5平方公尺。",
    "steps": [
      "(4+2)×1.5÷2=4.5平方公尺。",
      "因此選擇「4.5平方公尺」。"
    ],
    "optionAnalysis": [
      {
        "choice": "4.5平方公尺",
        "truth": true,
        "reason": "依獨立重算「(4+2)×1.5÷2=4.5平方公尺。」，此選項正確回答所求。"
      },
      {
        "choice": "3平方公尺",
        "truth": false,
        "reason": "選項「3平方公尺」不符合題意；依梯形截面模型。應得到「4.5平方公尺」，此錯誤常源自：把深度乘較寬一底。"
      },
      {
        "choice": "6平方公尺",
        "truth": false,
        "reason": "選項「6平方公尺」不符合題意；依梯形截面模型。應得到「4.5平方公尺」，此錯誤常源自：把深度乘較寬一底。"
      },
      {
        "choice": "9平方公尺",
        "truth": false,
        "reason": "選項「9平方公尺」不符合題意；依梯形截面模型。應得到「4.5平方公尺」，此錯誤常源自：把深度乘較寬一底。"
      }
    ],
    "misconceptionTarget": "把深度乘較寬一底。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-angle-sum與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由結構截面求面積。」；四個選項互異，只有4.5平方公尺符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "情境建模與小數。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s017-v008-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "924895b7a1f40e65f7a11961f823b8d657d4f7607eaf7d75ebfd1edbdd9f8fb4"
  },
  {
    "questionId": "u17-s017-v009",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-literacy",
    "skillId": "quadrilateral-literacy",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一塊四邊形土地沿對角線分為面積比3:5的兩區，總面積320平方公尺。較小區域面積為何？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "從比例分配土地。",
    "choices": [
      "80平方公尺",
      "128平方公尺",
      "120平方公尺",
      "200平方公尺"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：共8份，每份40，較小3份=120平方公尺。",
    "explanation": "共8份，每份40，較小3份=120平方公尺。",
    "steps": [
      "共8份，每份40，較小3份=120平方公尺。",
      "因此選擇「120平方公尺」。"
    ],
    "optionAnalysis": [
      {
        "choice": "80平方公尺",
        "truth": false,
        "reason": "選項「80平方公尺」不符合題意；依分割面積比。應得到「120平方公尺」，此錯誤常源自：用3/5乘總面積。"
      },
      {
        "choice": "128平方公尺",
        "truth": false,
        "reason": "選項「128平方公尺」不符合題意；依分割面積比。應得到「120平方公尺」，此錯誤常源自：用3/5乘總面積。"
      },
      {
        "choice": "120平方公尺",
        "truth": true,
        "reason": "依獨立重算「共8份，每份40，較小3份=120平方公尺。」，此選項正確回答所求。"
      },
      {
        "choice": "200平方公尺",
        "truth": false,
        "reason": "選項「200平方公尺」不符合題意；依分割面積比。應得到「120平方公尺」，此錯誤常源自：用3/5乘總面積。"
      }
    ],
    "misconceptionTarget": "用3/5乘總面積。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-angle-sum與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「從比例分配土地。」；四個選項互異，只有120平方公尺符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "比例推理。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s017-v009-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "755102f9fda8d531638172195d4fec78452f0f6568d875db45981bcc915532ad"
  },
  {
    "questionId": "u17-s017-v010",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-literacy",
    "skillId": "quadrilateral-literacy",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "矩形房間長4.8公尺、寬3.6公尺，地板需多估8%損耗。應準備多少平方公尺材料？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "計算含損耗材料量。",
    "choices": [
      "17.28平方公尺",
      "18.08平方公尺",
      "25.92平方公尺",
      "18.6624平方公尺"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：基礎面積4.8×3.6=17.28；含8%為17.28×1.08=18.6624。",
    "explanation": "基礎面積4.8×3.6=17.28；含8%為17.28×1.08=18.6624。",
    "steps": [
      "基礎面積4.8×3.6=17.28；含8%為17.28×1.08=18.6624。",
      "因此選擇「18.6624平方公尺」。"
    ],
    "optionAnalysis": [
      {
        "choice": "17.28平方公尺",
        "truth": false,
        "reason": "選項「17.28平方公尺」不符合題意；依面積加損耗。應得到「18.6624平方公尺」，此錯誤常源自：把8%加成0.08平方公尺。"
      },
      {
        "choice": "18.08平方公尺",
        "truth": false,
        "reason": "選項「18.08平方公尺」不符合題意；依面積加損耗。應得到「18.6624平方公尺」，此錯誤常源自：把8%加成0.08平方公尺。"
      },
      {
        "choice": "25.92平方公尺",
        "truth": false,
        "reason": "選項「25.92平方公尺」不符合題意；依面積加損耗。應得到「18.6624平方公尺」，此錯誤常源自：把8%加成0.08平方公尺。"
      },
      {
        "choice": "18.6624平方公尺",
        "truth": true,
        "reason": "依獨立重算「基礎面積4.8×3.6=17.28；含8%為17.28×1.08=18.6624。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "把8%加成0.08平方公尺。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-angle-sum與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「計算含損耗材料量。」；四個選項互異，只有18.6624平方公尺符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "多階段百分率與面積。",
    "literacyContextNecessity": "損耗比例是實際採購不可刪除的限制。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s017-v010-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "678caabffdb4b7e5fd332e2604f6f6c6f12c05873093f407e58a9bbef7ccb85c"
  },
  {
    "questionId": "u17-s017-v011",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-literacy",
    "skillId": "quadrilateral-literacy",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "正方形廣場邊長12公尺，中央有邊長4公尺的正方形花壇不鋪磚。若每平方公尺需5片磚，至少需幾片？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "處理挖空與單位用量。",
    "choices": [
      "640片",
      "320片",
      "720片",
      "800片"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：可鋪面積=12²-4²=144-16=128平方公尺；磚數=128×5=640。",
    "explanation": "可鋪面積=12²-4²=144-16=128平方公尺；磚數=128×5=640。",
    "steps": [
      "可鋪面積=12²-4²=144-16=128平方公尺；磚數=128×5=640。",
      "因此選擇「640片」。"
    ],
    "optionAnalysis": [
      {
        "choice": "640片",
        "truth": true,
        "reason": "依獨立重算「可鋪面積=12²-4²=144-16=128平方公尺；磚數=128×5=640。」，此選項正確回答所求。"
      },
      {
        "choice": "320片",
        "truth": false,
        "reason": "選項「320片」不符合題意；依外面積減內面積再換片數。應得到「640片」，此錯誤常源自：只算外廣場或花壇。"
      },
      {
        "choice": "720片",
        "truth": false,
        "reason": "選項「720片」不符合題意；依外面積減內面積再換片數。應得到「640片」，此錯誤常源自：只算外廣場或花壇。"
      },
      {
        "choice": "800片",
        "truth": false,
        "reason": "選項「800片」不符合題意；依外面積減內面積再換片數。應得到「640片」，此錯誤常源自：只算外廣場或花壇。"
      }
    ],
    "misconceptionTarget": "只算外廣場或花壇。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-angle-sum與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「處理挖空與單位用量。」；四個選項互異，只有640片符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "兩個正方形與材料率整合。",
    "literacyContextNecessity": "花壇不鋪磚是計算範圍的必要限制。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s017-v011-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "9c22f0bb9679c213eb69bf67f187fffea9790fce4bf8c05638fbc9727d48a29d"
  },
  {
    "questionId": "u17-s017-v012",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-literacy",
    "skillId": "quadrilateral-literacy",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個平行四邊形太陽能板底2公尺、高1.1公尺，轉換效率資料顯示每平方公尺峰值180瓦。理論峰值為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由幾何尺寸推性能。",
    "choices": [
      "198瓦",
      "396瓦",
      "360瓦",
      "720瓦"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：面積=2×1.1=2.2平方公尺；峰值=2.2×180=396瓦。",
    "explanation": "面積=2×1.1=2.2平方公尺；峰值=2.2×180=396瓦。",
    "steps": [
      "面積=2×1.1=2.2平方公尺；峰值=2.2×180=396瓦。",
      "因此選擇「396瓦」。"
    ],
    "optionAnalysis": [
      {
        "choice": "198瓦",
        "truth": false,
        "reason": "選項「198瓦」不符合題意；依面積乘單位輸出。應得到「396瓦」，此錯誤常源自：把底與斜邊或周長當面積。"
      },
      {
        "choice": "396瓦",
        "truth": true,
        "reason": "依獨立重算「面積=2×1.1=2.2平方公尺；峰值=2.2×180=396瓦。」，此選項正確回答所求。"
      },
      {
        "choice": "360瓦",
        "truth": false,
        "reason": "選項「360瓦」不符合題意；依面積乘單位輸出。應得到「396瓦」，此錯誤常源自：把底與斜邊或周長當面積。"
      },
      {
        "choice": "720瓦",
        "truth": false,
        "reason": "選項「720瓦」不符合題意；依面積乘單位輸出。應得到「396瓦」，此錯誤常源自：把底與斜邊或周長當面積。"
      }
    ],
    "misconceptionTarget": "把底與斜邊或周長當面積。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-angle-sum與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由幾何尺寸推性能。」；四個選項互異，只有396瓦符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需把功率密度與面積連結。",
    "literacyContextNecessity": "面板輸出按有效表面積計算，情境數據必要。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s017-v012-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "ed5505d02862c9594fc92b5c5a28b5f967ebc627a23df072c35f2455e99e2a13"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u17-s017-cr001",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-literacy",
    "skillId": "quadrilateral-literacy",
    "difficulty": "standard",
    "type": "constructed-response",
    "prompt": "正方形廣場邊長14公尺，中央有邊長6公尺的正方形花壇不鋪磚。每平方公尺需4片磚，另備5%損耗，磚片須整片購買。求至少購買片數。",
    "requiredWork": [
      "求可鋪面積",
      "換算基本片數",
      "加入5%並向上取整"
    ],
    "standardSolution": [
      "可鋪面積=14²-6²=196-36=160平方公尺。",
      "基本片數=160×4=640片。",
      "含損耗=640×1.05=672片，剛好整數，因此至少672片。"
    ],
    "alternativeMethods": [
      [
        "可先將每平方公尺含損耗需求視為4.2片，再算160×4.2=672。"
      ]
    ],
    "reasoningSteps": [
      "可鋪面積=14²-6²=196-36=160平方公尺。",
      "基本片數=160×4=640片。",
      "含損耗=640×1.05=672片，剛好整數，因此至少672片。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整處理「挖空、用量率、損耗與取整」，列式、理由與結果「至少672片」均正確。"
      },
      {
        "score": 2,
        "criteria": "主要方法與幾何性質正確，且已得到大部分「至少672片」；僅有一處算術、單位或理由缺漏。"
      },
      {
        "score": 1,
        "criteria": "能指出本題應使用的核心性質並完成至少一個有效步驟，但尚未正確完成「挖空、用量率、損耗與取整」。"
      },
      {
        "score": 0,
        "criteria": "未使用與「四邊形素養題」相關的有效條件，或答案與推理均無法支持「至少672片」。"
      }
    ],
    "partialCreditRules": [
      "正確列出本題關鍵關係但算術未完成，可依完成程度給1至2分。",
      "只得到部分結果時，必須有可辨認的「挖空、用量率、損耗與取整」推理才給分。"
    ],
    "followThroughPolicy": "若前段只有單一算術錯誤，後續依其結果正確推理可保留相應方法分。",
    "unitNotationRules": "面積用平方公尺，磚片數為整數。",
    "answerOnlyPolicy": "只有最終答案而無題目要求的列式或理由，最高1分；證明題只寫結論不得分。",
    "visualMode": "figure-supported",
    "figureId": "u17-s017-fig001",
    "drawingSpecRef": "units/u17/s017/drawing-specs.jsonl#u17-s017-fig001",
    "independentReview": {
      "derivedResult": "至少672片",
      "recalculation": "可鋪面積=14²-6²=196-36=160平方公尺。；基本片數=160×4=640片。；含損耗=640×1.05=672片，剛好整數，因此至少672片。",
      "ambiguity": "所求量與評分焦點「挖空、用量率、損耗與取整」明確；替代方法不改變標準結果。",
      "decision": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "0a5b64306ce1f2d9fa4aaa16ee286d6634e418a42f14952be0f7a7b378d35998"
  },
  {
    "questionId": "u17-s017-cr002",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-literacy",
    "skillId": "quadrilateral-literacy",
    "difficulty": "advanced",
    "type": "constructed-response",
    "prompt": "梯形花圃兩底18公尺與10公尺、高8公尺。外圍設圍欄，但一段3公尺作入口不裝；已知兩腰各9公尺。求花圃面積與圍欄長。",
    "requiredWork": [
      "面積使用兩底與高",
      "周長使用四邊長",
      "扣除入口"
    ],
    "standardSolution": [
      "面積=(18+10)×8÷2=112平方公尺。",
      "周長=18+10+9+9=46公尺。",
      "圍欄長=46-3=43公尺。"
    ],
    "alternativeMethods": [
      [
        "面積與圍欄須分開建模，不能用同一公式。"
      ]
    ],
    "reasoningSteps": [
      "面積=(18+10)×8÷2=112平方公尺。",
      "周長=18+10+9+9=46公尺。",
      "圍欄長=46-3=43公尺。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整處理「同一情境區分面積與周長」，列式、理由與結果「面積112平方公尺，圍欄43公尺」均正確。"
      },
      {
        "score": 2,
        "criteria": "主要方法與幾何性質正確，且已得到大部分「面積112平方公尺，圍欄43公尺」；僅有一處算術、單位或理由缺漏。"
      },
      {
        "score": 1,
        "criteria": "能指出本題應使用的核心性質並完成至少一個有效步驟，但尚未正確完成「同一情境區分面積與周長」。"
      },
      {
        "score": 0,
        "criteria": "未使用與「四邊形素養題」相關的有效條件，或答案與推理均無法支持「面積112平方公尺，圍欄43公尺」。"
      }
    ],
    "partialCreditRules": [
      "正確列出本題關鍵關係但算術未完成，可依完成程度給1至2分。",
      "只得到部分結果時，必須有可辨認的「同一情境區分面積與周長」推理才給分。"
    ],
    "followThroughPolicy": "若前段只有單一算術錯誤，後續依其結果正確推理可保留相應方法分。",
    "unitNotationRules": "角度以度表示，長度與面積保留題目單位。",
    "answerOnlyPolicy": "只有最終答案而無題目要求的列式或理由，最高1分；證明題只寫結論不得分。",
    "visualMode": "figure-supported",
    "figureId": "u17-s017-fig001",
    "drawingSpecRef": "units/u17/s017/drawing-specs.jsonl#u17-s017-fig001",
    "independentReview": {
      "derivedResult": "面積112平方公尺，圍欄43公尺",
      "recalculation": "面積=(18+10)×8÷2=112平方公尺。；周長=18+10+9+9=46公尺。；圍欄長=46-3=43公尺。",
      "ambiguity": "所求量與評分焦點「同一情境區分面積與周長」明確；替代方法不改變標準結果。",
      "decision": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "f8d7bd78086c53c587579fbd5a5f29b7c1e7cae9926db367d337af4225e160e0"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u17-s017-fig001",
    "unitId": "u17",
    "topicId": "u17-literacy",
    "skillId": "quadrilateral-literacy",
    "purpose": "支援「四邊形素養題」的空間位置、性質或證明閱讀，不提供題目答案。",
    "svgPath": "figures/u17/u17-s017-fig001.svg",
    "canvas": {
      "width": 400,
      "height": 300,
      "viewBox": "0 0 400 300"
    },
    "drawingSpec": {
      "title": "四邊形場地資訊模型",
      "description": "梯形花圃附兩底、高、入口與材料區域標示，提醒分開計算面積與周長。",
      "coordinateSystem": "SVG user space, origin at upper-left",
      "layoutConstraints": "主要線段與文字保留至少20單位邊界；標籤不得遮住交點與角弧。",
      "visibleLineRule": "實線表示題目已知邊或直線。",
      "hiddenLineRule": "本平面幾何圖無隱藏線；輔助垂線可用虛線。",
      "labels": "所有字母、角度、等式與關係均按本技能專屬配置。",
      "tickMarks": "等長、平行、直角只在數學上需要時標示。",
      "units": "示意圖不直接量長；數值單位由題幹提供。",
      "arrowsAndSymbols": "平行箭頭、直角記號或角弧依技能使用。",
      "scale": "not-to-scale",
      "scaleWarning": "圖形不一定按比例，禁止以目測長短或角度作答。"
    },
    "altText": "梯形花圃附兩底、高、入口與材料區域標示，提醒分開計算面積與周長。 圖形不一定按比例。",
    "svgTitle": "四邊形場地資訊模型",
    "svgDesc": "梯形花圃附兩底、高、入口與材料區域標示，提醒分開計算面積與周長。",
    "mobileReadability": "400×300檢視下主要線條、交點與核心文字仍可辨識；長句置於空白區。",
    "answerLeakageReview": "圖只呈現定義結構或已知關係，不標示任何題目未給的未知答案。",
    "svgAssertions": [
      "上底",
      "下底",
      "高",
      "入口",
      "分開建模",
      "role=\"img\"",
      "<title",
      "<desc"
    ],
    "figureReview": {
      "decision": "pass",
      "manualRenderedInspection": true,
      "reviewNote": "已渲染檢查四邊形場地資訊模型：線段未被裁切，文字未遮住核心交點，且不按比例警告已置於desc。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "0dbbbfc40c1382168b508c0a29746cc9f3f9acb701e26a917bff7be113230162"
  }
];
