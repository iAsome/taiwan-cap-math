// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u17-s014-lecture-r1",
  "unitId": "u17",
  "numericUnitId": 17,
  "topicId": "u17-quadrilaterals",
  "skillId": "rectangle-square-properties",
  "lockedTitle": "矩形與正方形",
  "title": "矩形與正方形：共通的直角，額外的等邊",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "prerequisiteBridge": "先備技能：rhombus-properties。本節只使用該技能已建立的角度、平行或四邊形性質。",
  "learningOutcomes": [
    "比較矩形與正方形性質",
    "運用矩形對角線等長且互相平分",
    "綜合正方形的矩形與菱形性質"
  ],
  "prerequisites": [
    {
      "skillId": "rhombus-properties",
      "requiredLevel": "能正確使用「rhombus-properties」中的基本定義與直接性質，不需使用後續技能。"
    }
  ],
  "glossary": [
    {
      "term": "矩形",
      "definition": "四個內角皆為90°的平行四邊形"
    },
    {
      "term": "正方形",
      "definition": "四角皆90°且四邊等長的四邊形"
    },
    {
      "term": "對角線等長",
      "definition": "兩條對角線總長相等"
    },
    {
      "term": "中心",
      "definition": "兩對角線交點"
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
    "矩形的四個角都是90°，對角線互相平分且等長，但一般不垂直。",
    "正方形同時是矩形和菱形，因此對角線等長、互相垂直、互相平分，也平分頂角。",
    "判斷附加性質時要分清矩形共有與正方形專有。"
  ],
  "formalDefinitions": [
    {
      "name": "矩形",
      "statement": "四個內角皆為90°的平行四邊形"
    },
    {
      "name": "正方形",
      "statement": "四角皆90°且四邊等長的四邊形"
    }
  ],
  "formulas": [
    {
      "formula": "AC=BD 且互相平分",
      "conditions": [
        "矩形對角線"
      ],
      "meaning": "用於矩形與正方形中符合條件的推理或計算。"
    },
    {
      "formula": "正方形面積=邊長²",
      "conditions": [
        "四邊等長且有直角"
      ],
      "meaning": "用於矩形與正方形中符合條件的推理或計算。"
    },
    {
      "formula": "正方形對角線性質=等長、垂直、互相平分、平分頂角",
      "conditions": [
        "同時承接矩形與菱形"
      ],
      "meaning": "用於矩形與正方形中符合條件的推理或計算。"
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
      "instruction": "先判定矩形或正方形",
      "check": "完成第1步後，確認未引入題目未給的條件。"
    },
    {
      "step": 2,
      "instruction": "列出共通平行四邊形性質",
      "check": "完成第2步後，確認未引入題目未給的條件。"
    },
    {
      "step": 3,
      "instruction": "加入矩形的直角與對角線等長",
      "check": "完成第3步後，確認未引入題目未給的條件。"
    },
    {
      "step": 4,
      "instruction": "正方形再加入四邊等長與垂直對角線",
      "check": "完成第4步後，確認未引入題目未給的條件。"
    },
    {
      "step": 5,
      "instruction": "只使用題目允許的性質",
      "check": "完成第5步後，確認未引入題目未給的條件。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "矩形對角線AC=13",
      "solutionSteps": [
        "BD=13。"
      ],
      "answer": "BD=13。"
    },
    {
      "exampleId": "L2",
      "prompt": "矩形長8寬5",
      "solutionSteps": [
        "面積40，周長26。"
      ],
      "answer": "面積40，周長26。"
    },
    {
      "exampleId": "L3",
      "prompt": "正方形邊7",
      "solutionSteps": [
        "面積49。"
      ],
      "answer": "面積49。"
    },
    {
      "exampleId": "L4",
      "prompt": "正方形一角被對角線平分",
      "solutionSteps": [
        "每半45°。"
      ],
      "answer": "每半45°。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "矩形對角線必垂直",
      "why": "一般矩形不成立",
      "correction": "一般矩形不成立"
    },
    {
      "mistake": "正方形不是菱形",
      "why": "正方形四邊等長",
      "correction": "正方形四邊等長"
    },
    {
      "mistake": "矩形四邊等長",
      "why": "只有對邊等長",
      "correction": "只有對邊等長"
    },
    {
      "mistake": "對角線交點到四頂點距離不同",
      "why": "矩形中四段相等",
      "correction": "矩形中四段相等"
    },
    {
      "mistake": "邊長與面積單位混淆",
      "why": "面積用平方單位",
      "correction": "面積用平方單位"
    }
  ],
  "selfCheck": [
    "我能否不用目測，說明「矩形與正方形」所需的條件？",
    "我是否先辨認角、邊、對角線、底或高的正確位置？",
    "方程解出後是否代回題目真正所求？",
    "角度、長度與面積單位是否正確？"
  ],
  "summary": [
    "矩形的四個角都是90°，對角線互相平分且等長，但一般不垂直。",
    "AC=BD 且互相平分",
    "解題時先確認「矩形對角線」。"
  ],
  "connections": {
    "previous": "承接rhombus-properties。",
    "next": "下一技能依鎖定順序為trapezoid-area。"
  },
  "figureReferences": [
    "u17-s014-fig001"
  ],
  "figureAccessibility": "左側矩形標示等長對角線，右側正方形標示等長且垂直對角線。 圖形不一定按比例。",
  "practiceLinks": {
    "mcQuestionIds": [
      "u17-s014-v001",
      "u17-s014-v002",
      "u17-s014-v003",
      "u17-s014-v004",
      "u17-s014-v005",
      "u17-s014-v006",
      "u17-s014-v007",
      "u17-s014-v008",
      "u17-s014-v009",
      "u17-s014-v010",
      "u17-s014-v011",
      "u17-s014-v012"
    ],
    "constructedResponseIds": [
      "u17-s014-cr001",
      "u17-s014-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "symbolDefinitionsComplete": true,
    "figureChecked": true,
    "reviewNote": "內容以性質集合比較矩形與正方形，避免把矩形與菱形的對角線特徵混用。"
  },
  "contentSha256": "fd7328863f98e55c5a940f01e086c91fe0dcc8a726052bc737bd725275ade209"
};

export const QUESTIONS = [
  {
    "questionId": "u17-s014-v001",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rectangle-square-properties",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "矩形的每一個內角是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "直接辨認矩形角。",
    "choices": [
      "45°",
      "90°",
      "60°",
      "120°"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：矩形定義保證四個直角。",
    "explanation": "矩形定義保證四個直角。",
    "steps": [
      "矩形定義保證四個直角。",
      "因此選擇「90°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "45°",
        "truth": false,
        "reason": "選項「45°」不符合題意；依矩形直角性質。應得到「90°」，此錯誤常源自：與正方形對角線半角混淆。"
      },
      {
        "choice": "90°",
        "truth": true,
        "reason": "依獨立重算「矩形定義保證四個直角。」，此選項正確回答所求。"
      },
      {
        "choice": "60°",
        "truth": false,
        "reason": "選項「60°」不符合題意；依矩形直角性質。應得到「90°」，此錯誤常源自：與正方形對角線半角混淆。"
      },
      {
        "choice": "120°",
        "truth": false,
        "reason": "選項「120°」不符合題意；依矩形直角性質。應得到「90°」，此錯誤常源自：與正方形對角線半角混淆。"
      }
    ],
    "misconceptionTarget": "與正方形對角線半角混淆。",
    "prerequisiteCheck": "只使用先備技能rhombus-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「直接辨認矩形角。」；四個選項互異，只有90°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "基本定義。",
    "literacyContextNecessity": null,
    "visualMode": "figure-supported",
    "figureId": "u17-s014-fig001",
    "drawingSpecRef": "units/u17/s014/drawing-specs.jsonl#u17-s014-fig001",
    "semanticReviewId": "u17-s014-v001-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "f3613f7a6c710c188c360efe619d6c1267c865e023e53e7e5b5aab553a2b08a8"
  },
  {
    "questionId": "u17-s014-v002",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rectangle-square-properties",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "矩形兩條對角線的長度關係為何？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "辨認對角線性質。",
    "choices": [
      "互相垂直但不等長",
      "一條是另一條兩倍",
      "相等",
      "無固定關係"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：矩形對角線等長且互相平分。",
    "explanation": "矩形對角線等長且互相平分。",
    "steps": [
      "矩形對角線等長且互相平分。",
      "因此選擇「相等」。"
    ],
    "optionAnalysis": [
      {
        "choice": "互相垂直但不等長",
        "truth": false,
        "reason": "選項「互相垂直但不等長」不符合題意；依矩形對角線等長。應得到「相等」，此錯誤常源自：把菱形的垂直性質混入。"
      },
      {
        "choice": "一條是另一條兩倍",
        "truth": false,
        "reason": "選項「一條是另一條兩倍」不符合題意；依矩形對角線等長。應得到「相等」，此錯誤常源自：把菱形的垂直性質混入。"
      },
      {
        "choice": "相等",
        "truth": true,
        "reason": "依獨立重算「矩形對角線等長且互相平分。」，此選項正確回答所求。"
      },
      {
        "choice": "無固定關係",
        "truth": false,
        "reason": "選項「無固定關係」不符合題意；依矩形對角線等長。應得到「相等」，此錯誤常源自：把菱形的垂直性質混入。"
      }
    ],
    "misconceptionTarget": "把菱形的垂直性質混入。",
    "prerequisiteCheck": "只使用先備技能rhombus-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「辨認對角線性質。」；四個選項互異，只有相等符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "直接性質題。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s014-v002-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "bde151611963faba83d09c1fa9031b96492a25517264ac7b713fe510b8ef343f"
  },
  {
    "questionId": "u17-s014-v003",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rectangle-square-properties",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "正方形邊長6公分，面積是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "直接求面積。",
    "choices": [
      "12平方公分",
      "24平方公分",
      "42平方公分",
      "36平方公分"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：正方形面積=6²=36平方公分。",
    "explanation": "正方形面積=6²=36平方公分。",
    "steps": [
      "正方形面積=6²=36平方公分。",
      "因此選擇「36平方公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "12平方公分",
        "truth": false,
        "reason": "選項「12平方公分」不符合題意；依正方形面積。應得到「36平方公分」，此錯誤常源自：把周長或邊長和當面積。"
      },
      {
        "choice": "24平方公分",
        "truth": false,
        "reason": "選項「24平方公分」不符合題意；依正方形面積。應得到「36平方公分」，此錯誤常源自：把周長或邊長和當面積。"
      },
      {
        "choice": "42平方公分",
        "truth": false,
        "reason": "選項「42平方公分」不符合題意；依正方形面積。應得到「36平方公分」，此錯誤常源自：把周長或邊長和當面積。"
      },
      {
        "choice": "36平方公分",
        "truth": true,
        "reason": "依獨立重算「正方形面積=6²=36平方公分。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "把周長或邊長和當面積。",
    "prerequisiteCheck": "只使用先備技能rhombus-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「直接求面積。」；四個選項互異，只有36平方公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "基本公式。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s014-v003-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "940a3cb2c6448cbe110c6253900cebec8f8ce2d19ddaab81329358a2c817fb7e"
  },
  {
    "questionId": "u17-s014-v004",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rectangle-square-properties",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "矩形長9公分、寬4公分，周長是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "求矩形外框長。",
    "choices": [
      "26公分",
      "13公分",
      "36公分",
      "72公分"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：周長=2(9+4)=26公分。",
    "explanation": "周長=2(9+4)=26公分。",
    "steps": [
      "周長=2(9+4)=26公分。",
      "因此選擇「26公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "26公分",
        "truth": true,
        "reason": "依獨立重算「周長=2(9+4)=26公分。」，此選項正確回答所求。"
      },
      {
        "choice": "13公分",
        "truth": false,
        "reason": "選項「13公分」不符合題意；依矩形周長。應得到「26公分」，此錯誤常源自：把面積當周長。"
      },
      {
        "choice": "36公分",
        "truth": false,
        "reason": "選項「36公分」不符合題意；依矩形周長。應得到「26公分」，此錯誤常源自：把面積當周長。"
      },
      {
        "choice": "72公分",
        "truth": false,
        "reason": "選項「72公分」不符合題意；依矩形周長。應得到「26公分」，此錯誤常源自：把面積當周長。"
      }
    ],
    "misconceptionTarget": "把面積當周長。",
    "prerequisiteCheck": "只使用先備技能rhombus-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「求矩形外框長。」；四個選項互異，只有26公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "標準公式。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s014-v004-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "a4895f71c1225ff18db1e923ce9347560799adfc17f4755f1b3f2713348c4346"
  },
  {
    "questionId": "u17-s014-v005",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rectangle-square-properties",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "矩形ABCD的對角線AC=15公分，BD是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由一對角線求另一條。",
    "choices": [
      "7.5公分",
      "30公分",
      "15公分",
      "無法判斷"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：矩形兩對角線等長，所以BD=15公分。",
    "explanation": "矩形兩對角線等長，所以BD=15公分。",
    "steps": [
      "矩形兩對角線等長，所以BD=15公分。",
      "因此選擇「15公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "7.5公分",
        "truth": false,
        "reason": "選項「7.5公分」不符合題意；依矩形對角線等長。應得到「15公分」，此錯誤常源自：把交點半段與整條混淆。"
      },
      {
        "choice": "30公分",
        "truth": false,
        "reason": "選項「30公分」不符合題意；依矩形對角線等長。應得到「15公分」，此錯誤常源自：把交點半段與整條混淆。"
      },
      {
        "choice": "15公分",
        "truth": true,
        "reason": "依獨立重算「矩形兩對角線等長，所以BD=15公分。」，此選項正確回答所求。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "選項「無法判斷」不符合題意；依矩形對角線等長。應得到「15公分」，此錯誤常源自：把交點半段與整條混淆。"
      }
    ],
    "misconceptionTarget": "把交點半段與整條混淆。",
    "prerequisiteCheck": "只使用先備技能rhombus-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由一對角線求另一條。」；四個選項互異，只有15公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "單一步驟。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s014-v005-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "21b204462127eda142aedd1f562246b01e27ace9158984a8c0ec6563e0013849"
  },
  {
    "questionId": "u17-s014-v006",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rectangle-square-properties",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "矩形對角線交於O，AC=20公分，AO為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由全對角線求半段。",
    "choices": [
      "5公分",
      "20公分",
      "40公分",
      "10公分"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：矩形也是平行四邊形，O平分AC，所以AO=10公分。",
    "explanation": "矩形也是平行四邊形，O平分AC，所以AO=10公分。",
    "steps": [
      "矩形也是平行四邊形，O平分AC，所以AO=10公分。",
      "因此選擇「10公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "5公分",
        "truth": false,
        "reason": "選項「5公分」不符合題意；依對角線互相平分。應得到「10公分」，此錯誤常源自：只用等長而忘記平分。"
      },
      {
        "choice": "20公分",
        "truth": false,
        "reason": "選項「20公分」不符合題意；依對角線互相平分。應得到「10公分」，此錯誤常源自：只用等長而忘記平分。"
      },
      {
        "choice": "40公分",
        "truth": false,
        "reason": "選項「40公分」不符合題意；依對角線互相平分。應得到「10公分」，此錯誤常源自：只用等長而忘記平分。"
      },
      {
        "choice": "10公分",
        "truth": true,
        "reason": "依獨立重算「矩形也是平行四邊形，O平分AC，所以AO=10公分。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "只用等長而忘記平分。",
    "prerequisiteCheck": "只使用先備技能rhombus-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由全對角線求半段。」；四個選項互異，只有10公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需連結平行四邊形性質。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s014-v006-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "ca2a21e19982d68d270eac12add4bcf3b0fb52e68ee5360d7020114b9ee04c4a"
  },
  {
    "questionId": "u17-s014-v007",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rectangle-square-properties",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一項是正方形有、一般矩形不一定有的性質？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "比較兩類圖形。",
    "choices": [
      "兩對角線互相垂直",
      "兩對角線等長",
      "四個角皆90°",
      "對邊平行"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：正方形也是菱形，對角線垂直；一般矩形不一定。",
    "explanation": "正方形也是菱形，對角線垂直；一般矩形不一定。",
    "steps": [
      "正方形也是菱形，對角線垂直；一般矩形不一定。",
      "因此選擇「兩對角線互相垂直」。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩對角線互相垂直",
        "truth": true,
        "reason": "依獨立重算「正方形也是菱形，對角線垂直；一般矩形不一定。」，此選項正確回答所求。"
      },
      {
        "choice": "兩對角線等長",
        "truth": false,
        "reason": "選項「兩對角線等長」不符合題意；依區分正方形附加性質。應得到「兩對角線互相垂直」，此錯誤常源自：把共通性質當差異。"
      },
      {
        "choice": "四個角皆90°",
        "truth": false,
        "reason": "選項「四個角皆90°」不符合題意；依區分正方形附加性質。應得到「兩對角線互相垂直」，此錯誤常源自：把共通性質當差異。"
      },
      {
        "choice": "對邊平行",
        "truth": false,
        "reason": "選項「對邊平行」不符合題意；依區分正方形附加性質。應得到「兩對角線互相垂直」，此錯誤常源自：把共通性質當差異。"
      }
    ],
    "misconceptionTarget": "把共通性質當差異。",
    "prerequisiteCheck": "只使用先備技能rhombus-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「比較兩類圖形。」；四個選項互異，只有兩對角線互相垂直符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "概念辨析。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s014-v007-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "02e1dcbeb9c0a9408366a3db40939c8d38d518320277d817307769cb38cef67a"
  },
  {
    "questionId": "u17-s014-v008",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rectangle-square-properties",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "矩形長比寬多3公分，周長30公分。長是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由周長與差求尺寸。",
    "choices": [
      "6公分",
      "9公分",
      "12公分",
      "15公分"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：長+寬=15；設寬x、長x+3，2x+3=15，x=6，長9。",
    "explanation": "長+寬=15；設寬x、長x+3，2x+3=15，x=6，長9。",
    "steps": [
      "長+寬=15；設寬x、長x+3，2x+3=15，x=6，長9。",
      "因此選擇「9公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "6公分",
        "truth": false,
        "reason": "選項「6公分」不符合題意；依周長與邊差。應得到「9公分」，此錯誤常源自：把30分給一長一寬。"
      },
      {
        "choice": "9公分",
        "truth": true,
        "reason": "依獨立重算「長+寬=15；設寬x、長x+3，2x+3=15，x=6，長9。」，此選項正確回答所求。"
      },
      {
        "choice": "12公分",
        "truth": false,
        "reason": "選項「12公分」不符合題意；依周長與邊差。應得到「9公分」，此錯誤常源自：把30分給一長一寬。"
      },
      {
        "choice": "15公分",
        "truth": false,
        "reason": "選項「15公分」不符合題意；依周長與邊差。應得到「9公分」，此錯誤常源自：把30分給一長一寬。"
      }
    ],
    "misconceptionTarget": "把30分給一長一寬。",
    "prerequisiteCheck": "只使用先備技能rhombus-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由周長與差求尺寸。」；四個選項互異，只有9公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需設未知數。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s014-v008-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "f3f0df6c9d9e8fb65289f824c53ce7350e3c1829e11327367ab929fae3756f1f"
  },
  {
    "questionId": "u17-s014-v009",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rectangle-square-properties",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "正方形周長48公分，面積是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "兩階段求面積。",
    "choices": [
      "12平方公分",
      "48平方公分",
      "576平方公分",
      "144平方公分"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：邊長=48÷4=12，面積=12²=144平方公分。",
    "explanation": "邊長=48÷4=12，面積=12²=144平方公分。",
    "steps": [
      "邊長=48÷4=12，面積=12²=144平方公分。",
      "因此選擇「144平方公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "12平方公分",
        "truth": false,
        "reason": "選項「12平方公分」不符合題意；依周長反求邊再求面積。應得到「144平方公分」，此錯誤常源自：直接把周長平方。"
      },
      {
        "choice": "48平方公分",
        "truth": false,
        "reason": "選項「48平方公分」不符合題意；依周長反求邊再求面積。應得到「144平方公分」，此錯誤常源自：直接把周長平方。"
      },
      {
        "choice": "576平方公分",
        "truth": false,
        "reason": "選項「576平方公分」不符合題意；依周長反求邊再求面積。應得到「144平方公分」，此錯誤常源自：直接把周長平方。"
      },
      {
        "choice": "144平方公分",
        "truth": true,
        "reason": "依獨立重算「邊長=48÷4=12，面積=12²=144平方公分。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "直接把周長平方。",
    "prerequisiteCheck": "只使用先備技能rhombus-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「兩階段求面積。」；四個選項互異，只有144平方公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需先還原邊長。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s014-v009-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "bfaa242f9a1a15c42798d3a8438b9531afe29de63db07572d40f593eaf7e186a"
  },
  {
    "questionId": "u17-s014-v010",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rectangle-square-properties",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一扇矩形窗長1.5公尺、寬1.2公尺，玻璃面積是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由窗戶尺寸求玻璃量。",
    "choices": [
      "1.8平方公尺",
      "2.7平方公尺",
      "5.4平方公尺",
      "0.3平方公尺"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：面積=1.5×1.2=1.8平方公尺。",
    "explanation": "面積=1.5×1.2=1.8平方公尺。",
    "steps": [
      "面積=1.5×1.2=1.8平方公尺。",
      "因此選擇「1.8平方公尺」。"
    ],
    "optionAnalysis": [
      {
        "choice": "1.8平方公尺",
        "truth": true,
        "reason": "依獨立重算「面積=1.5×1.2=1.8平方公尺。」，此選項正確回答所求。"
      },
      {
        "choice": "2.7平方公尺",
        "truth": false,
        "reason": "選項「2.7平方公尺」不符合題意；依矩形玻璃面積。應得到「1.8平方公尺」，此錯誤常源自：求成周長或相減。"
      },
      {
        "choice": "5.4平方公尺",
        "truth": false,
        "reason": "選項「5.4平方公尺」不符合題意；依矩形玻璃面積。應得到「1.8平方公尺」，此錯誤常源自：求成周長或相減。"
      },
      {
        "choice": "0.3平方公尺",
        "truth": false,
        "reason": "選項「0.3平方公尺」不符合題意；依矩形玻璃面積。應得到「1.8平方公尺」，此錯誤常源自：求成周長或相減。"
      }
    ],
    "misconceptionTarget": "求成周長或相減。",
    "prerequisiteCheck": "只使用先備技能rhombus-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由窗戶尺寸求玻璃量。」；四個選項互異，只有1.8平方公尺符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "小數乘法與單位。",
    "literacyContextNecessity": "玻璃材料覆蓋整個矩形面。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s014-v010-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "450553ed1fe014df2e0d948424e7c93fd14a2dcf38298ae84230e8e721f30fdc"
  },
  {
    "questionId": "u17-s014-v011",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rectangle-square-properties",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "正方形地磚邊長30公分，一箱有20片。忽略縫隙，可鋪多少平方公尺？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "計算整箱鋪設面積。",
    "choices": [
      "0.18平方公尺",
      "1.8平方公尺",
      "6平方公尺",
      "18000平方公尺"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：每片面積900平方公分=0.09平方公尺；20片共1.8平方公尺。",
    "explanation": "每片面積900平方公分=0.09平方公尺；20片共1.8平方公尺。",
    "steps": [
      "每片面積900平方公分=0.09平方公尺；20片共1.8平方公尺。",
      "因此選擇「1.8平方公尺」。"
    ],
    "optionAnalysis": [
      {
        "choice": "0.18平方公尺",
        "truth": false,
        "reason": "選項「0.18平方公尺」不符合題意；依正方形面積與單位換算。應得到「1.8平方公尺」，此錯誤常源自：把30公分直接當0.3平方公尺後漏平方換算。"
      },
      {
        "choice": "1.8平方公尺",
        "truth": true,
        "reason": "依獨立重算「每片面積900平方公分=0.09平方公尺；20片共1.8平方公尺。」，此選項正確回答所求。"
      },
      {
        "choice": "6平方公尺",
        "truth": false,
        "reason": "選項「6平方公尺」不符合題意；依正方形面積與單位換算。應得到「1.8平方公尺」，此錯誤常源自：把30公分直接當0.3平方公尺後漏平方換算。"
      },
      {
        "choice": "18000平方公尺",
        "truth": false,
        "reason": "選項「18000平方公尺」不符合題意；依正方形面積與單位換算。應得到「1.8平方公尺」，此錯誤常源自：把30公分直接當0.3平方公尺後漏平方換算。"
      }
    ],
    "misconceptionTarget": "把30公分直接當0.3平方公尺後漏平方換算。",
    "prerequisiteCheck": "只使用先備技能rhombus-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「計算整箱鋪設面積。」；四個選項互異，只有1.8平方公尺符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需平方單位換算與乘片數。",
    "literacyContextNecessity": "地磚片數與公分到公尺換算都是必要資訊。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s014-v011-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "a7d0e5277b735eac42d21528150dfbce0b5784cbf5a4f1a55db24707ad7869bc"
  },
  {
    "questionId": "u17-s014-v012",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rectangle-square-properties",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "矩形顯示器對角線交點到一個頂點為17公分。另一條完整對角線長多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由中心到頂點推完整另一對角線。",
    "choices": [
      "17公分",
      "68公分",
      "34公分",
      "289公分"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：交點平分兩條等長對角線；半對角線17，所以完整對角線34公分。",
    "explanation": "交點平分兩條等長對角線；半對角線17，所以完整對角線34公分。",
    "steps": [
      "交點平分兩條等長對角線；半對角線17，所以完整對角線34公分。",
      "因此選擇「34公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "17公分",
        "truth": false,
        "reason": "選項「17公分」不符合題意；依矩形對角線等長且互相平分。應得到「34公分」，此錯誤常源自：只使用其中一項性質。"
      },
      {
        "choice": "68公分",
        "truth": false,
        "reason": "選項「68公分」不符合題意；依矩形對角線等長且互相平分。應得到「34公分」，此錯誤常源自：只使用其中一項性質。"
      },
      {
        "choice": "34公分",
        "truth": true,
        "reason": "依獨立重算「交點平分兩條等長對角線；半對角線17，所以完整對角線34公分。」，此選項正確回答所求。"
      },
      {
        "choice": "289公分",
        "truth": false,
        "reason": "選項「289公分」不符合題意；依矩形對角線等長且互相平分。應得到「34公分」，此錯誤常源自：只使用其中一項性質。"
      }
    ],
    "misconceptionTarget": "只使用其中一項性質。",
    "prerequisiteCheck": "只使用先備技能rhombus-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由中心到頂點推完整另一對角線。」；四個選項互異，只有34公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需整合等長與平分。",
    "literacyContextNecessity": "螢幕量測從中心到角，必須還原整條對角線。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s014-v012-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "52914d9822ac7116d1a2b23770cb2637f5a48aa2cd14e92e5cc238af6a089146"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u17-s014-cr001",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rectangle-square-properties",
    "difficulty": "standard",
    "type": "constructed-response",
    "prompt": "矩形ABCD對角線交於O，AC=26公分。求BD、AO、BO，並寫理由。",
    "requiredWork": [
      "用對角線等長",
      "用互相平分",
      "列三個結果"
    ],
    "standardSolution": [
      "BD=AC=26公分。",
      "AO=AC÷2=13公分。",
      "BO=BD÷2=13公分。"
    ],
    "alternativeMethods": [
      [
        "可說矩形中O到四頂點等距，皆為13公分。"
      ]
    ],
    "reasoningSteps": [
      "BD=AC=26公分。",
      "AO=AC÷2=13公分。",
      "BO=BD÷2=13公分。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整處理「矩形對角線兩性質」，列式、理由與結果「BD=26公分，AO=BO=13公分」均正確。"
      },
      {
        "score": 2,
        "criteria": "主要方法與幾何性質正確，且已得到大部分「BD=26公分，AO=BO=13公分」；僅有一處算術、單位或理由缺漏。"
      },
      {
        "score": 1,
        "criteria": "能指出本題應使用的核心性質並完成至少一個有效步驟，但尚未正確完成「矩形對角線兩性質」。"
      },
      {
        "score": 0,
        "criteria": "未使用與「矩形與正方形」相關的有效條件，或答案與推理均無法支持「BD=26公分，AO=BO=13公分」。"
      }
    ],
    "partialCreditRules": [
      "正確列出本題關鍵關係但算術未完成，可依完成程度給1至2分。",
      "只得到部分結果時，必須有可辨認的「矩形對角線兩性質」推理才給分。"
    ],
    "followThroughPolicy": "若前段只有單一算術錯誤，後續依其結果正確推理可保留相應方法分。",
    "unitNotationRules": "角度以度表示，長度與面積保留題目單位。",
    "answerOnlyPolicy": "只有最終答案而無題目要求的列式或理由，最高1分；證明題只寫結論不得分。",
    "visualMode": "figure-supported",
    "figureId": "u17-s014-fig001",
    "drawingSpecRef": "units/u17/s014/drawing-specs.jsonl#u17-s014-fig001",
    "independentReview": {
      "derivedResult": "BD=26公分，AO=BO=13公分",
      "recalculation": "BD=AC=26公分。；AO=AC÷2=13公分。；BO=BD÷2=13公分。",
      "ambiguity": "所求量與評分焦點「矩形對角線兩性質」明確；替代方法不改變標準結果。",
      "decision": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "98ea2ac5098ba1f48cf1d78ff8cb54891189df1a2091e55b99137b293c607c74"
  },
  {
    "questionId": "u17-s014-cr002",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rectangle-square-properties",
    "difficulty": "advanced",
    "type": "constructed-response",
    "prompt": "正方形周長40公分。求邊長、面積；再說明其對角線為何同時等長且垂直。",
    "requiredWork": [
      "由周長求邊",
      "求面積",
      "以矩形與菱形包含關係說明對角線"
    ],
    "standardSolution": [
      "邊長=40÷4=10公分。",
      "面積=10²=100平方公分。",
      "正方形是矩形，所以對角線等長；也是菱形，所以對角線垂直。"
    ],
    "alternativeMethods": [
      [
        "可直接列正方形完整對角線性質，但需指出來源。"
      ]
    ],
    "reasoningSteps": [
      "邊長=40÷4=10公分。",
      "面積=10²=100平方公分。",
      "正方形是矩形，所以對角線等長；也是菱形，所以對角線垂直。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整處理「正方形綜合性質」，列式、理由與結果「邊長10公分，面積100平方公分」均正確。"
      },
      {
        "score": 2,
        "criteria": "主要方法與幾何性質正確，且已得到大部分「邊長10公分，面積100平方公分」；僅有一處算術、單位或理由缺漏。"
      },
      {
        "score": 1,
        "criteria": "能指出本題應使用的核心性質並完成至少一個有效步驟，但尚未正確完成「正方形綜合性質」。"
      },
      {
        "score": 0,
        "criteria": "未使用與「矩形與正方形」相關的有效條件，或答案與推理均無法支持「邊長10公分，面積100平方公分」。"
      }
    ],
    "partialCreditRules": [
      "正確列出本題關鍵關係但算術未完成，可依完成程度給1至2分。",
      "只得到部分結果時，必須有可辨認的「正方形綜合性質」推理才給分。"
    ],
    "followThroughPolicy": "若前段只有單一算術錯誤，後續依其結果正確推理可保留相應方法分。",
    "unitNotationRules": "角度以度表示，長度與面積保留題目單位。",
    "answerOnlyPolicy": "只有最終答案而無題目要求的列式或理由，最高1分；證明題只寫結論不得分。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "independentReview": {
      "derivedResult": "邊長10公分，面積100平方公分",
      "recalculation": "邊長=40÷4=10公分。；面積=10²=100平方公分。；正方形是矩形，所以對角線等長；也是菱形，所以對角線垂直。",
      "ambiguity": "所求量與評分焦點「正方形綜合性質」明確；替代方法不改變標準結果。",
      "decision": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "6b504d874a466b51fff2e13cdb85b20d319027cde01061dd63ceed36b593b979"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u17-s014-fig001",
    "unitId": "u17",
    "topicId": "u17-quadrilaterals",
    "skillId": "rectangle-square-properties",
    "purpose": "支援「矩形與正方形」的空間位置、性質或證明閱讀，不提供題目答案。",
    "svgPath": "figures/u17/u17-s014-fig001.svg",
    "canvas": {
      "width": 400,
      "height": 300,
      "viewBox": "0 0 400 300"
    },
    "drawingSpec": {
      "title": "矩形與正方形比較",
      "description": "左側矩形標示等長對角線，右側正方形標示等長且垂直對角線。",
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
    "altText": "左側矩形標示等長對角線，右側正方形標示等長且垂直對角線。 圖形不一定按比例。",
    "svgTitle": "矩形與正方形比較",
    "svgDesc": "左側矩形標示等長對角線，右側正方形標示等長且垂直對角線。",
    "mobileReadability": "400×300檢視下主要線條、交點與核心文字仍可辨識；長句置於空白區。",
    "answerLeakageReview": "圖只呈現定義結構或已知關係，不標示任何題目未給的未知答案。",
    "svgAssertions": [
      "矩形",
      "正方形",
      "等長且垂直",
      "role=\"img\"",
      "<title",
      "<desc"
    ],
    "figureReview": {
      "decision": "pass",
      "manualRenderedInspection": true,
      "reviewNote": "已渲染檢查矩形與正方形比較：線段未被裁切，文字未遮住核心交點，且不按比例警告已置於desc。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "c1b9141346189b6dcef7ec8aa8bdf4eb7af5c3c3386019e0ed6ea18d6b3470f3"
  }
];
