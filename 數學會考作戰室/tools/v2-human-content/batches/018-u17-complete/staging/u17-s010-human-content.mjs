// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u17-s010-lecture-r1",
  "unitId": "u17",
  "numericUnitId": 17,
  "topicId": "u17-parallel",
  "skillId": "parallel-lines-distance",
  "lockedTitle": "平行線距離",
  "title": "平行線距離：最短距離必須沿共同垂線量",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "prerequisiteBridge": "先備技能：parallelogram-diagonal。本節只使用該技能已建立的角度、平行或四邊形性質。",
  "learningOutcomes": [
    "理解點到直線的距離是垂線段長",
    "理解兩平行線間距處處相等",
    "用底乘高處理平行線間面積"
  ],
  "prerequisites": [
    {
      "skillId": "parallelogram-diagonal",
      "requiredLevel": "能正確使用「parallelogram-diagonal」中的基本定義與直接性質，不需使用後續技能。"
    }
  ],
  "glossary": [
    {
      "term": "點到直線距離",
      "definition": "點到該直線的垂線段長"
    },
    {
      "term": "平行線距離",
      "definition": "任一共同垂線段的長"
    },
    {
      "term": "共同垂線",
      "definition": "同時垂直於兩平行線的線段"
    },
    {
      "term": "斜線段",
      "definition": "連接兩線但不垂直，通常較長"
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
    "距離指最短長度，因此必須沿垂直方向量。",
    "兩條平行線之間的共同垂線段都等長，這使得同底等高的三角形或平行四邊形面積容易比較。",
    "連接兩平行線的斜線段雖跨過兩線，但不是兩線距離。"
  ],
  "formalDefinitions": [
    {
      "name": "點到直線距離",
      "statement": "點到該直線的垂線段長"
    },
    {
      "name": "平行線距離",
      "statement": "任一共同垂線段的長"
    }
  ],
  "formulas": [
    {
      "formula": "d=垂線段長",
      "conditions": [
        "求點到線或兩平行線距離"
      ],
      "meaning": "用於平行線距離中符合條件的推理或計算。"
    },
    {
      "formula": "平行四邊形面積=底×平行線距離",
      "conditions": [
        "底位於其中一條平行線"
      ],
      "meaning": "用於平行線距離中符合條件的推理或計算。"
    },
    {
      "formula": "三角形面積=底×平行線距離÷2",
      "conditions": [
        "頂點位於另一條平行線"
      ],
      "meaning": "用於平行線距離中符合條件的推理或計算。"
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
      "instruction": "找出兩條平行線",
      "check": "完成第1步後，確認未引入題目未給的條件。"
    },
    {
      "step": 2,
      "instruction": "作或辨認共同垂線",
      "check": "完成第2步後，確認未引入題目未給的條件。"
    },
    {
      "step": 3,
      "instruction": "讀取垂線段長",
      "check": "完成第3步後，確認未引入題目未給的條件。"
    },
    {
      "step": 4,
      "instruction": "統一單位",
      "check": "完成第4步後，確認未引入題目未給的條件。"
    },
    {
      "step": 5,
      "instruction": "需要時把距離當作高代入面積",
      "check": "完成第5步後，確認未引入題目未給的條件。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "共同垂線長6公分",
      "solutionSteps": [
        "兩平行線距離6公分。"
      ],
      "answer": "兩平行線距離6公分。"
    },
    {
      "exampleId": "L2",
      "prompt": "斜線段長10、垂線段長8",
      "solutionSteps": [
        "距離是8。"
      ],
      "answer": "距離是8。"
    },
    {
      "exampleId": "L3",
      "prompt": "底12、距離5的平行四邊形",
      "solutionSteps": [
        "面積60。"
      ],
      "answer": "面積60。"
    },
    {
      "exampleId": "L4",
      "prompt": "同底且頂點在同一平行線上的三角形",
      "solutionSteps": [
        "面積相等。"
      ],
      "answer": "面積相等。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把任意連線當距離",
      "why": "距離必須垂直",
      "correction": "距離必須垂直"
    },
    {
      "mistake": "沿平行線方向量",
      "why": "那不是兩線間隔",
      "correction": "那不是兩線間隔"
    },
    {
      "mistake": "面積高取斜邊",
      "why": "高要垂直於底",
      "correction": "高要垂直於底"
    },
    {
      "mistake": "單位未統一",
      "why": "先換成相同長度單位",
      "correction": "先換成相同長度單位"
    },
    {
      "mistake": "把三角形面積忘記除2",
      "why": "平行四邊形才是底乘高",
      "correction": "平行四邊形才是底乘高"
    }
  ],
  "selfCheck": [
    "我能否不用目測，說明「平行線距離」所需的條件？",
    "我是否先辨認角、邊、對角線、底或高的正確位置？",
    "方程解出後是否代回題目真正所求？",
    "角度、長度與面積單位是否正確？"
  ],
  "summary": [
    "距離指最短長度，因此必須沿垂直方向量。",
    "d=垂線段長",
    "解題時先確認「求點到線或兩平行線距離」。"
  ],
  "connections": {
    "previous": "承接parallelogram-diagonal。",
    "next": "下一技能依鎖定順序為special-quadrilateral。"
  },
  "figureReferences": [
    "u17-s010-fig001"
  ],
  "figureAccessibility": "兩條水平平行線間畫一條垂直線段d與一條較長斜線段s，垂足有直角記號。 圖形不一定按比例。",
  "practiceLinks": {
    "mcQuestionIds": [
      "u17-s010-v001",
      "u17-s010-v002",
      "u17-s010-v003",
      "u17-s010-v004",
      "u17-s010-v005",
      "u17-s010-v006",
      "u17-s010-v007",
      "u17-s010-v008",
      "u17-s010-v009",
      "u17-s010-v010",
      "u17-s010-v011",
      "u17-s010-v012"
    ],
    "constructedResponseIds": [
      "u17-s010-cr001",
      "u17-s010-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "symbolDefinitionsComplete": true,
    "figureChecked": true,
    "reviewNote": "內容以最短距離定義為核心，連結共同垂線與面積中的高，沒有引入座標距離公式。"
  },
  "contentSha256": "aeb110705288d0b7332ca1bb1862c743ef2e5a2610aefe2c2d9793be3edaadce"
};

export const QUESTIONS = [
  {
    "questionId": "u17-s010-v001",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-lines-distance",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "點到直線的距離是下列哪一段的長？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "辨認距離定義。",
    "choices": [
      "任意連接線段",
      "點到直線的垂線段",
      "與直線平行的線段",
      "最長連接線段"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：距離定義為最短的垂線段長。",
    "explanation": "距離定義為最短的垂線段長。",
    "steps": [
      "距離定義為最短的垂線段長。",
      "因此選擇「點到直線的垂線段」。"
    ],
    "optionAnalysis": [
      {
        "choice": "任意連接線段",
        "truth": false,
        "reason": "選項「任意連接線段」不符合題意；依點到直線距離。應得到「點到直線的垂線段」，此錯誤常源自：把任意斜線段當距離。"
      },
      {
        "choice": "點到直線的垂線段",
        "truth": true,
        "reason": "依獨立重算「距離定義為最短的垂線段長。」，此選項正確回答所求。"
      },
      {
        "choice": "與直線平行的線段",
        "truth": false,
        "reason": "選項「與直線平行的線段」不符合題意；依點到直線距離。應得到「點到直線的垂線段」，此錯誤常源自：把任意斜線段當距離。"
      },
      {
        "choice": "最長連接線段",
        "truth": false,
        "reason": "選項「最長連接線段」不符合題意；依點到直線距離。應得到「點到直線的垂線段」，此錯誤常源自：把任意斜線段當距離。"
      }
    ],
    "misconceptionTarget": "把任意斜線段當距離。",
    "prerequisiteCheck": "只使用先備技能parallelogram-diagonal與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「辨認距離定義。」；四個選項互異，只有點到直線的垂線段符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "直接概念題。",
    "literacyContextNecessity": null,
    "visualMode": "figure-supported",
    "figureId": "u17-s010-fig001",
    "drawingSpecRef": "units/u17/s010/drawing-specs.jsonl#u17-s010-fig001",
    "semanticReviewId": "u17-s010-v001-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "ddd64c0886bd678352a3cdf7014d5b27dea6f77bf594b20df4d5dbf0231c43b9"
  },
  {
    "questionId": "u17-s010-v002",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-lines-distance",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩平行線間有一條共同垂線長8公分，兩線距離是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "直接讀取距離。",
    "choices": [
      "4公分",
      "16公分",
      "8公分",
      "無法判斷"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：共同垂線段長就是平行線距離。",
    "explanation": "共同垂線段長就是平行線距離。",
    "steps": [
      "共同垂線段長就是平行線距離。",
      "因此選擇「8公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "4公分",
        "truth": false,
        "reason": "選項「4公分」不符合題意；依平行線距離。應得到「8公分」，此錯誤常源自：將距離加倍或減半。"
      },
      {
        "choice": "16公分",
        "truth": false,
        "reason": "選項「16公分」不符合題意；依平行線距離。應得到「8公分」，此錯誤常源自：將距離加倍或減半。"
      },
      {
        "choice": "8公分",
        "truth": true,
        "reason": "依獨立重算「共同垂線段長就是平行線距離。」，此選項正確回答所求。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "選項「無法判斷」不符合題意；依平行線距離。應得到「8公分」，此錯誤常源自：將距離加倍或減半。"
      }
    ],
    "misconceptionTarget": "將距離加倍或減半。",
    "prerequisiteCheck": "只使用先備技能parallelogram-diagonal與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「直接讀取距離。」；四個選項互異，只有8公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "單一步驟。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s010-v002-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "cea45988556e7159914c6cd27bd5f695effb7b97e34c58740b7a31c5dcd95742"
  },
  {
    "questionId": "u17-s010-v003",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-lines-distance",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "連接兩平行線的垂線段長6公分，另一條斜線段長10公分。兩線距離為何？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "區分距離與斜連線。",
    "choices": [
      "4公分",
      "8公分",
      "10公分",
      "6公分"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：距離取垂直且最短的6公分，不取斜線段。",
    "explanation": "距離取垂直且最短的6公分，不取斜線段。",
    "steps": [
      "距離取垂直且最短的6公分，不取斜線段。",
      "因此選擇「6公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "4公分",
        "truth": false,
        "reason": "選項「4公分」不符合題意；依最短垂線段。應得到「6公分」，此錯誤常源自：選較明顯的斜線長。"
      },
      {
        "choice": "8公分",
        "truth": false,
        "reason": "選項「8公分」不符合題意；依最短垂線段。應得到「6公分」，此錯誤常源自：選較明顯的斜線長。"
      },
      {
        "choice": "10公分",
        "truth": false,
        "reason": "選項「10公分」不符合題意；依最短垂線段。應得到「6公分」，此錯誤常源自：選較明顯的斜線長。"
      },
      {
        "choice": "6公分",
        "truth": true,
        "reason": "依獨立重算「距離取垂直且最短的6公分，不取斜線段。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "選較明顯的斜線長。",
    "prerequisiteCheck": "只使用先備技能parallelogram-diagonal與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「區分距離與斜連線。」；四個選項互異，只有6公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需辨認定義。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s010-v003-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "adbae7ce47704895afa9970924bbfd80dd1b42f28598d411c00607934261b939"
  },
  {
    "questionId": "u17-s010-v004",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-lines-distance",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "平行四邊形底12公分，位於兩平行底邊間的距離5公分，面積是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "用距離求面積。",
    "choices": [
      "60平方公分",
      "17平方公分",
      "30平方公分",
      "120平方公分"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：面積=底×高=12×5=60平方公分。",
    "explanation": "面積=底×高=12×5=60平方公分。",
    "steps": [
      "面積=底×高=12×5=60平方公分。",
      "因此選擇「60平方公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "60平方公分",
        "truth": true,
        "reason": "依獨立重算「面積=底×高=12×5=60平方公分。」，此選項正確回答所求。"
      },
      {
        "choice": "17平方公分",
        "truth": false,
        "reason": "選項「17平方公分」不符合題意；依平行線距離就是對應高。應得到「60平方公分」，此錯誤常源自：把三角形公式除2。"
      },
      {
        "choice": "30平方公分",
        "truth": false,
        "reason": "選項「30平方公分」不符合題意；依平行線距離就是對應高。應得到「60平方公分」，此錯誤常源自：把三角形公式除2。"
      },
      {
        "choice": "120平方公分",
        "truth": false,
        "reason": "選項「120平方公分」不符合題意；依平行線距離就是對應高。應得到「60平方公分」，此錯誤常源自：把三角形公式除2。"
      }
    ],
    "misconceptionTarget": "把三角形公式除2。",
    "prerequisiteCheck": "只使用先備技能parallelogram-diagonal與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「用距離求面積。」；四個選項互異，只有60平方公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "標準公式應用。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s010-v004-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "f67346d1abed82562e68896a3acc265da718bc222ea551eceac5c2d2ee39cfe2"
  },
  {
    "questionId": "u17-s010-v005",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-lines-distance",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三角形底邊長14公分，頂點在與底邊平行且相距9公分的直線上，面積是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由平行線資訊求三角形面積。",
    "choices": [
      "23平方公分",
      "126平方公分",
      "63平方公分",
      "252平方公分"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：高為平行線距離9，面積=14×9÷2=63。",
    "explanation": "高為平行線距離9，面積=14×9÷2=63。",
    "steps": [
      "高為平行線距離9，面積=14×9÷2=63。",
      "因此選擇「63平方公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "23平方公分",
        "truth": false,
        "reason": "選項「23平方公分」不符合題意；依平行線距離作三角形高。應得到「63平方公分」，此錯誤常源自：忘記除2。"
      },
      {
        "choice": "126平方公分",
        "truth": false,
        "reason": "選項「126平方公分」不符合題意；依平行線距離作三角形高。應得到「63平方公分」，此錯誤常源自：忘記除2。"
      },
      {
        "choice": "63平方公分",
        "truth": true,
        "reason": "依獨立重算「高為平行線距離9，面積=14×9÷2=63。」，此選項正確回答所求。"
      },
      {
        "choice": "252平方公分",
        "truth": false,
        "reason": "選項「252平方公分」不符合題意；依平行線距離作三角形高。應得到「63平方公分」，此錯誤常源自：忘記除2。"
      }
    ],
    "misconceptionTarget": "忘記除2。",
    "prerequisiteCheck": "只使用先備技能parallelogram-diagonal與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由平行線資訊求三角形面積。」；四個選項互異，只有63平方公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需把距離轉成高。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s010-v005-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "79b496208b2e8fac5f02aaedbd93e28bdfe0e0d910ae050dc424ed09d79a14be"
  },
  {
    "questionId": "u17-s010-v006",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-lines-distance",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩平行線距離為(3x+1)公分，某共同垂線段長19公分，x為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由距離式解參數。",
    "choices": [
      "5",
      "7",
      "18",
      "6"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：3x+1=19，x=6。",
    "explanation": "3x+1=19，x=6。",
    "steps": [
      "3x+1=19，x=6。",
      "因此選擇「6」。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "選項「5」不符合題意；依所有共同垂線段等長。應得到「6」，此錯誤常源自：把19當x。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "選項「7」不符合題意；依所有共同垂線段等長。應得到「6」，此錯誤常源自：把19當x。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "選項「18」不符合題意；依所有共同垂線段等長。應得到「6」，此錯誤常源自：把19當x。"
      },
      {
        "choice": "6",
        "truth": true,
        "reason": "依獨立重算「3x+1=19，x=6。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "把19當x。",
    "prerequisiteCheck": "只使用先備技能parallelogram-diagonal與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由距離式解參數。」；四個選項互異，只有6符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "一次方程。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s010-v006-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "936cdfc4c5039f31103ddbc33df42f5c4b014bfaaaf78876f078a79b12073d94"
  },
  {
    "questionId": "u17-s010-v007",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-lines-distance",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "同底的兩個三角形，其頂點都在與底邊平行的同一直線上。兩三角形面積關係為何？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由平行線距離比較面積。",
    "choices": [
      "相等",
      "第一個較大",
      "第二個較大",
      "無法比較"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：兩者底相同，高都是兩平行線距離，所以面積相等。",
    "explanation": "兩者底相同，高都是兩平行線距離，所以面積相等。",
    "steps": [
      "兩者底相同，高都是兩平行線距離，所以面積相等。",
      "因此選擇「相等」。"
    ],
    "optionAnalysis": [
      {
        "choice": "相等",
        "truth": true,
        "reason": "依獨立重算「兩者底相同，高都是兩平行線距離，所以面積相等。」，此選項正確回答所求。"
      },
      {
        "choice": "第一個較大",
        "truth": false,
        "reason": "選項「第一個較大」不符合題意；依同底等高三角形面積相等。應得到「相等」，此錯誤常源自：以頂點水平位置判大小。"
      },
      {
        "choice": "第二個較大",
        "truth": false,
        "reason": "選項「第二個較大」不符合題意；依同底等高三角形面積相等。應得到「相等」，此錯誤常源自：以頂點水平位置判大小。"
      },
      {
        "choice": "無法比較",
        "truth": false,
        "reason": "選項「無法比較」不符合題意；依同底等高三角形面積相等。應得到「相等」，此錯誤常源自：以頂點水平位置判大小。"
      }
    ],
    "misconceptionTarget": "以頂點水平位置判大小。",
    "prerequisiteCheck": "只使用先備技能parallelogram-diagonal與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由平行線距離比較面積。」；四個選項互異，只有相等符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需理解高不受斜移影響。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s010-v007-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "2a8d65feb425855166f27a5d9477225f87bab2a9c9f4ae3476a2cc549d7741ff"
  },
  {
    "questionId": "u17-s010-v008",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-lines-distance",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩平行線距離為7公分，一條跨線斜段長25公分。下列何者必正確？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "比較垂線與斜線長。",
    "choices": [
      "斜段就是距離7公分",
      "斜段長大於等於7公分",
      "斜段必垂直兩線",
      "兩線距離25公分"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：垂線段是最短距離，任何跨線線段長不小於7公分。",
    "explanation": "垂線段是最短距離，任何跨線線段長不小於7公分。",
    "steps": [
      "垂線段是最短距離，任何跨線線段長不小於7公分。",
      "因此選擇「斜段長大於等於7公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "斜段就是距離7公分",
        "truth": false,
        "reason": "選項「斜段就是距離7公分」不符合題意；依最短距離性質。應得到「斜段長大於等於7公分」，此錯誤常源自：把給定斜段當距離。"
      },
      {
        "choice": "斜段長大於等於7公分",
        "truth": true,
        "reason": "依獨立重算「垂線段是最短距離，任何跨線線段長不小於7公分。」，此選項正確回答所求。"
      },
      {
        "choice": "斜段必垂直兩線",
        "truth": false,
        "reason": "選項「斜段必垂直兩線」不符合題意；依最短距離性質。應得到「斜段長大於等於7公分」，此錯誤常源自：把給定斜段當距離。"
      },
      {
        "choice": "兩線距離25公分",
        "truth": false,
        "reason": "選項「兩線距離25公分」不符合題意；依最短距離性質。應得到「斜段長大於等於7公分」，此錯誤常源自：把給定斜段當距離。"
      }
    ],
    "misconceptionTarget": "把給定斜段當距離。",
    "prerequisiteCheck": "只使用先備技能parallelogram-diagonal與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「比較垂線與斜線長。」；四個選項互異，只有斜段長大於等於7公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需使用最短性質而非只套公式。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s010-v008-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "4c5b63c07dbe85887752b1ea39ab8117c5eb76d61fe1b30a9151c6afc977a105"
  },
  {
    "questionId": "u17-s010-v009",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-lines-distance",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "平行四邊形面積96平方公分，底16公分，兩底所在平行線距離是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由面積反求高。",
    "choices": [
      "3公分",
      "8公分",
      "12公分",
      "6公分"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：96=16×h，h=6公分。",
    "explanation": "96=16×h，h=6公分。",
    "steps": [
      "96=16×h，h=6公分。",
      "因此選擇「6公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "3公分",
        "truth": false,
        "reason": "選項「3公分」不符合題意；依反求平行線距離。應得到「6公分」，此錯誤常源自：多除或少除2。"
      },
      {
        "choice": "8公分",
        "truth": false,
        "reason": "選項「8公分」不符合題意；依反求平行線距離。應得到「6公分」，此錯誤常源自：多除或少除2。"
      },
      {
        "choice": "12公分",
        "truth": false,
        "reason": "選項「12公分」不符合題意；依反求平行線距離。應得到「6公分」，此錯誤常源自：多除或少除2。"
      },
      {
        "choice": "6公分",
        "truth": true,
        "reason": "依獨立重算「96=16×h，h=6公分。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "多除或少除2。",
    "prerequisiteCheck": "只使用先備技能parallelogram-diagonal與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由面積反求高。」；四個選項互異，只有6公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "反用公式。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s010-v009-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "3e36fc9fd83ac8726a335b541235a3d1e391d1d122146bd3fe6c005b9b584651"
  },
  {
    "questionId": "u17-s010-v010",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-lines-distance",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩條平行道路邊界相距3.5公尺，工程圖上一條斜穿線長4.2公尺。道路寬度應記多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "判讀工程寬度。",
    "choices": [
      "3.5公尺",
      "0.7公尺",
      "4.2公尺",
      "7.7公尺"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：道路寬度是邊界間的垂直距離3.5公尺，不是斜穿線。",
    "explanation": "道路寬度是邊界間的垂直距離3.5公尺，不是斜穿線。",
    "steps": [
      "道路寬度是邊界間的垂直距離3.5公尺，不是斜穿線。",
      "因此選擇「3.5公尺」。"
    ],
    "optionAnalysis": [
      {
        "choice": "3.5公尺",
        "truth": true,
        "reason": "依獨立重算「道路寬度是邊界間的垂直距離3.5公尺，不是斜穿線。」，此選項正確回答所求。"
      },
      {
        "choice": "0.7公尺",
        "truth": false,
        "reason": "選項「0.7公尺」不符合題意；依實際寬度採最短垂距。應得到「3.5公尺」，此錯誤常源自：以較長斜線當寬度。"
      },
      {
        "choice": "4.2公尺",
        "truth": false,
        "reason": "選項「4.2公尺」不符合題意；依實際寬度採最短垂距。應得到「3.5公尺」，此錯誤常源自：以較長斜線當寬度。"
      },
      {
        "choice": "7.7公尺",
        "truth": false,
        "reason": "選項「7.7公尺」不符合題意；依實際寬度採最短垂距。應得到「3.5公尺」，此錯誤常源自：以較長斜線當寬度。"
      }
    ],
    "misconceptionTarget": "以較長斜線當寬度。",
    "prerequisiteCheck": "只使用先備技能parallelogram-diagonal與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「判讀工程寬度。」；四個選項互異，只有3.5公尺符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需從多個量測值選有效者。",
    "literacyContextNecessity": "道路寬度定義就是兩平行邊界的垂直距離。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s010-v010-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "48afbc02d5694704c3c14e98bc66cf86ca1fdcd053baf3a328dfd2110e8ddeac"
  },
  {
    "questionId": "u17-s010-v011",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-lines-distance",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩條平行輸水管中心線相距1.2公尺。每隔5公尺裝一根與兩管垂直的連桿，每根連桿跨越中心線的有效長度是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "區分沿線間隔與橫向距離。",
    "choices": [
      "3.8公尺",
      "1.2公尺",
      "5公尺",
      "6.2公尺"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：連桿垂直兩平行中心線，因此其跨越長就是距離1.2公尺。",
    "explanation": "連桿垂直兩平行中心線，因此其跨越長就是距離1.2公尺。",
    "steps": [
      "連桿垂直兩平行中心線，因此其跨越長就是距離1.2公尺。",
      "因此選擇「1.2公尺」。"
    ],
    "optionAnalysis": [
      {
        "choice": "3.8公尺",
        "truth": false,
        "reason": "選項「3.8公尺」不符合題意；依共同垂線段長。應得到「1.2公尺」，此錯誤常源自：把安裝間隔5公尺當跨距。"
      },
      {
        "choice": "1.2公尺",
        "truth": true,
        "reason": "依獨立重算「連桿垂直兩平行中心線，因此其跨越長就是距離1.2公尺。」，此選項正確回答所求。"
      },
      {
        "choice": "5公尺",
        "truth": false,
        "reason": "選項「5公尺」不符合題意；依共同垂線段長。應得到「1.2公尺」，此錯誤常源自：把安裝間隔5公尺當跨距。"
      },
      {
        "choice": "6.2公尺",
        "truth": false,
        "reason": "選項「6.2公尺」不符合題意；依共同垂線段長。應得到「1.2公尺」，此錯誤常源自：把安裝間隔5公尺當跨距。"
      }
    ],
    "misconceptionTarget": "把安裝間隔5公尺當跨距。",
    "prerequisiteCheck": "只使用先備技能parallelogram-diagonal與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「區分沿線間隔與橫向距離。」；四個選項互異，只有1.2公尺符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "情境有兩個不同方向的長度。",
    "literacyContextNecessity": "必須辨認5公尺是沿管間隔，不是兩管距離。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s010-v011-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "26160c361c0980fa6425fa0eeee789029787f120aad76329054f3a7545b0a7e7"
  },
  {
    "questionId": "u17-s010-v012",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-lines-distance",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一塊三角形廣告布的底邊在下方導軌上，頂點可沿與導軌平行且相距2.4公尺的上方導軌移動。若底長3公尺，布面積會如何？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "分析可移動頂點的面積。",
    "choices": [
      "隨頂點位置改變",
      "固定為7.2平方公尺",
      "固定為3.6平方公尺",
      "無法計算"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：高始終是2.4公尺，面積=3×2.4÷2=3.6平方公尺。",
    "explanation": "高始終是2.4公尺，面積=3×2.4÷2=3.6平方公尺。",
    "steps": [
      "高始終是2.4公尺，面積=3×2.4÷2=3.6平方公尺。",
      "因此選擇「固定為3.6平方公尺」。"
    ],
    "optionAnalysis": [
      {
        "choice": "隨頂點位置改變",
        "truth": false,
        "reason": "選項「隨頂點位置改變」不符合題意；依平行線間距固定使同底三角形等面積。應得到「固定為3.6平方公尺」，此錯誤常源自：以頂點左右移動誤判高改變。"
      },
      {
        "choice": "固定為7.2平方公尺",
        "truth": false,
        "reason": "選項「固定為7.2平方公尺」不符合題意；依平行線間距固定使同底三角形等面積。應得到「固定為3.6平方公尺」，此錯誤常源自：以頂點左右移動誤判高改變。"
      },
      {
        "choice": "固定為3.6平方公尺",
        "truth": true,
        "reason": "依獨立重算「高始終是2.4公尺，面積=3×2.4÷2=3.6平方公尺。」，此選項正確回答所求。"
      },
      {
        "choice": "無法計算",
        "truth": false,
        "reason": "選項「無法計算」不符合題意；依平行線間距固定使同底三角形等面積。應得到「固定為3.6平方公尺」，此錯誤常源自：以頂點左右移動誤判高改變。"
      }
    ],
    "misconceptionTarget": "以頂點左右移動誤判高改變。",
    "prerequisiteCheck": "只使用先備技能parallelogram-diagonal與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「分析可移動頂點的面積。」；四個選項互異，只有固定為3.6平方公尺符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需理解位置變動但垂距不變。",
    "literacyContextNecessity": "導軌平行與可移動條件是面積不變的原因。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s010-v012-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "624e8db45a3ddcc88d9a569dfc3217ca4656baa7d017af36487318f5721b167b"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u17-s010-cr001",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-lines-distance",
    "difficulty": "standard",
    "type": "constructed-response",
    "prompt": "兩平行線距離6公分。以其中一線上的12公分線段為底，另一線上任取一點作三角形頂點。求三角形面積，並說明頂點移動時面積是否改變。",
    "requiredWork": [
      "以距離作高",
      "求面積",
      "解釋平行線距離固定"
    ],
    "standardSolution": [
      "高為6公分。",
      "面積=12×6÷2=36平方公分。",
      "頂點沿另一平行線移動時，高仍為6，所以面積不變。"
    ],
    "alternativeMethods": [
      [
        "可用同底等高三角形面積相等說明。"
      ]
    ],
    "reasoningSteps": [
      "高為6公分。",
      "面積=12×6÷2=36平方公分。",
      "頂點沿另一平行線移動時，高仍為6，所以面積不變。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整處理「平行線距離與等面積」，列式、理由與結果「36平方公分且保持不變」均正確。"
      },
      {
        "score": 2,
        "criteria": "主要方法與幾何性質正確，且已得到大部分「36平方公分且保持不變」；僅有一處算術、單位或理由缺漏。"
      },
      {
        "score": 1,
        "criteria": "能指出本題應使用的核心性質並完成至少一個有效步驟，但尚未正確完成「平行線距離與等面積」。"
      },
      {
        "score": 0,
        "criteria": "未使用與「平行線距離」相關的有效條件，或答案與推理均無法支持「36平方公分且保持不變」。"
      }
    ],
    "partialCreditRules": [
      "正確列出本題關鍵關係但算術未完成，可依完成程度給1至2分。",
      "只得到部分結果時，必須有可辨認的「平行線距離與等面積」推理才給分。"
    ],
    "followThroughPolicy": "若前段只有單一算術錯誤，後續依其結果正確推理可保留相應方法分。",
    "unitNotationRules": "角度以度表示，長度與面積保留題目單位。",
    "answerOnlyPolicy": "只有最終答案而無題目要求的列式或理由，最高1分；證明題只寫結論不得分。",
    "visualMode": "figure-supported",
    "figureId": "u17-s010-fig001",
    "drawingSpecRef": "units/u17/s010/drawing-specs.jsonl#u17-s010-fig001",
    "independentReview": {
      "derivedResult": "36平方公分且保持不變",
      "recalculation": "高為6公分。；面積=12×6÷2=36平方公分。；頂點沿另一平行線移動時，高仍為6，所以面積不變。",
      "ambiguity": "所求量與評分焦點「平行線距離與等面積」明確；替代方法不改變標準結果。",
      "decision": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "2e5a89257d11f965fa46f2ea0ec0a39842f8a1b7594acdb9d209bcc4d382f233"
  },
  {
    "questionId": "u17-s010-cr002",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-lines-distance",
    "difficulty": "advanced",
    "type": "constructed-response",
    "prompt": "兩平行線間一條垂線段長8公分、一條斜線段長10公分。說明哪一個是兩線距離；若以底15公分作平行四邊形，求面積。",
    "requiredWork": [
      "指出垂線段才是距離",
      "說明最短性",
      "求面積"
    ],
    "standardSolution": [
      "距離是8公分，因距離沿共同垂線且最短。",
      "10公分斜段不是距離。",
      "面積=15×8=120平方公分。"
    ],
    "alternativeMethods": [
      [
        "可用直角三角形中斜邊大於直角邊輔助說明10較長。"
      ]
    ],
    "reasoningSteps": [
      "距離是8公分，因距離沿共同垂線且最短。",
      "10公分斜段不是距離。",
      "面積=15×8=120平方公分。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整處理「距離定義與面積」，列式、理由與結果「距離8公分，面積120平方公分」均正確。"
      },
      {
        "score": 2,
        "criteria": "主要方法與幾何性質正確，且已得到大部分「距離8公分，面積120平方公分」；僅有一處算術、單位或理由缺漏。"
      },
      {
        "score": 1,
        "criteria": "能指出本題應使用的核心性質並完成至少一個有效步驟，但尚未正確完成「距離定義與面積」。"
      },
      {
        "score": 0,
        "criteria": "未使用與「平行線距離」相關的有效條件，或答案與推理均無法支持「距離8公分，面積120平方公分」。"
      }
    ],
    "partialCreditRules": [
      "正確列出本題關鍵關係但算術未完成，可依完成程度給1至2分。",
      "只得到部分結果時，必須有可辨認的「距離定義與面積」推理才給分。"
    ],
    "followThroughPolicy": "若前段只有單一算術錯誤，後續依其結果正確推理可保留相應方法分。",
    "unitNotationRules": "角度以度表示，長度與面積保留題目單位。",
    "answerOnlyPolicy": "只有最終答案而無題目要求的列式或理由，最高1分；證明題只寫結論不得分。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "independentReview": {
      "derivedResult": "距離8公分，面積120平方公分",
      "recalculation": "距離是8公分，因距離沿共同垂線且最短。；10公分斜段不是距離。；面積=15×8=120平方公分。",
      "ambiguity": "所求量與評分焦點「距離定義與面積」明確；替代方法不改變標準結果。",
      "decision": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "3a66f120908296dcbf2587ac00638c21af775843db6c758c8f82accbe90e9922"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u17-s010-fig001",
    "unitId": "u17",
    "topicId": "u17-parallel",
    "skillId": "parallel-lines-distance",
    "purpose": "支援「平行線距離」的空間位置、性質或證明閱讀，不提供題目答案。",
    "svgPath": "figures/u17/u17-s010-fig001.svg",
    "canvas": {
      "width": 400,
      "height": 300,
      "viewBox": "0 0 400 300"
    },
    "drawingSpec": {
      "title": "平行線間的垂直距離",
      "description": "兩條水平平行線間畫一條垂直線段d與一條較長斜線段s，垂足有直角記號。",
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
    "altText": "兩條水平平行線間畫一條垂直線段d與一條較長斜線段s，垂足有直角記號。 圖形不一定按比例。",
    "svgTitle": "平行線間的垂直距離",
    "svgDesc": "兩條水平平行線間畫一條垂直線段d與一條較長斜線段s，垂足有直角記號。",
    "mobileReadability": "400×300檢視下主要線條、交點與核心文字仍可辨識；長句置於空白區。",
    "answerLeakageReview": "圖只呈現定義結構或已知關係，不標示任何題目未給的未知答案。",
    "svgAssertions": [
      "d",
      "s",
      "距離取垂線段",
      "role=\"img\"",
      "<title",
      "<desc"
    ],
    "figureReview": {
      "decision": "pass",
      "manualRenderedInspection": true,
      "reviewNote": "已渲染檢查平行線間的垂直距離：線段未被裁切，文字未遮住核心交點，且不按比例警告已置於desc。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "3b08fbdcadcc8b531a89ff51ba7dbcd3bfc91e262933c2cb052b94a55891411b"
  }
];
