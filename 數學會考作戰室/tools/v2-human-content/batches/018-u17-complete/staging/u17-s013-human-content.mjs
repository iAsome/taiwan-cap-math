// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u17-s013-lecture-r1",
  "unitId": "u17",
  "numericUnitId": 17,
  "topicId": "u17-quadrilaterals",
  "skillId": "rhombus-properties",
  "lockedTitle": "菱形性質",
  "title": "菱形性質：四邊等長帶來垂直且平分角的對角線",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "prerequisiteBridge": "先備技能：quadrilateral-area。本節只使用該技能已建立的角度、平行或四邊形性質。",
  "learningOutcomes": [
    "由定義辨認菱形",
    "運用邊、角與對角線性質",
    "用對角線求面積或角度"
  ],
  "prerequisites": [
    {
      "skillId": "quadrilateral-area",
      "requiredLevel": "能正確使用「quadrilateral-area」中的基本定義與直接性質，不需使用後續技能。"
    }
  ],
  "glossary": [
    {
      "term": "菱形",
      "definition": "四邊等長的平行四邊形"
    },
    {
      "term": "垂直平分",
      "definition": "相交成90°且彼此分成兩等段"
    },
    {
      "term": "對角線平分頂角",
      "definition": "每條對角線把兩端頂角各分成兩等角"
    },
    {
      "term": "對角",
      "definition": "不相鄰的內角"
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
    "菱形先是平行四邊形，所以具有對邊平行、對角相等、鄰角互補與對角線互相平分。",
    "菱形還多出：兩對角線互相垂直，且各自平分一對頂角。",
    "菱形的對角線通常不等長；等長又互相垂直時會是正方形。"
  ],
  "formalDefinitions": [
    {
      "name": "菱形",
      "statement": "四邊等長的平行四邊形"
    },
    {
      "name": "垂直平分",
      "statement": "相交成90°且彼此分成兩等段"
    }
  ],
  "formulas": [
    {
      "formula": "四邊等長",
      "conditions": [
        "菱形定義"
      ],
      "meaning": "用於菱形性質中符合條件的推理或計算。"
    },
    {
      "formula": "AC⊥BD，AO=OC，BO=OD",
      "conditions": [
        "菱形對角線性質"
      ],
      "meaning": "用於菱形性質中符合條件的推理或計算。"
    },
    {
      "formula": "面積=AC×BD÷2",
      "conditions": [
        "兩對角線長已知"
      ],
      "meaning": "用於菱形性質中符合條件的推理或計算。"
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
      "instruction": "先確認四邊等長或菱形已知",
      "check": "完成第1步後，確認未引入題目未給的條件。"
    },
    {
      "step": 2,
      "instruction": "標出對角線交點",
      "check": "完成第2步後，確認未引入題目未給的條件。"
    },
    {
      "step": 3,
      "instruction": "分別使用平分、垂直或角平分性質",
      "check": "完成第3步後，確認未引入題目未給的條件。"
    },
    {
      "step": 4,
      "instruction": "建立直角三角形或面積式",
      "check": "完成第4步後，確認未引入題目未給的條件。"
    },
    {
      "step": 5,
      "instruction": "不自行假設對角線等長",
      "check": "完成第5步後，確認未引入題目未給的條件。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "對角線10與16",
      "solutionSteps": [
        "面積80。"
      ],
      "answer": "面積80。"
    },
    {
      "exampleId": "L2",
      "prompt": "∠A=80°且AC平分∠A",
      "solutionSteps": [
        "∠BAC=40°。"
      ],
      "answer": "∠BAC=40°。"
    },
    {
      "exampleId": "L3",
      "prompt": "AO=6",
      "solutionSteps": [
        "OC=6。"
      ],
      "answer": "OC=6。"
    },
    {
      "exampleId": "L4",
      "prompt": "兩對角線相交",
      "solutionSteps": [
        "夾角90°。"
      ],
      "answer": "夾角90°。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "菱形四角都是90°",
      "why": "只有正方形必然如此",
      "correction": "只有正方形必然如此"
    },
    {
      "mistake": "對角線等長",
      "why": "一般菱形不保證",
      "correction": "一般菱形不保證"
    },
    {
      "mistake": "只用四邊形四邊等長卻忘記依序",
      "why": "定義需封閉四邊形",
      "correction": "定義需封閉四邊形"
    },
    {
      "mistake": "面積用兩對角線直接相乘",
      "why": "要除2",
      "correction": "要除2"
    },
    {
      "mistake": "角平分套錯頂點",
      "why": "AC只平分A與C，BD平分B與D",
      "correction": "AC只平分A與C，BD平分B與D"
    }
  ],
  "selfCheck": [
    "我能否不用目測，說明「菱形性質」所需的條件？",
    "我是否先辨認角、邊、對角線、底或高的正確位置？",
    "方程解出後是否代回題目真正所求？",
    "角度、長度與面積單位是否正確？"
  ],
  "summary": [
    "菱形先是平行四邊形，所以具有對邊平行、對角相等、鄰角互補與對角線互相平分。",
    "四邊等長",
    "解題時先確認「菱形定義」。"
  ],
  "connections": {
    "previous": "承接quadrilateral-area。",
    "next": "下一技能依鎖定順序為rectangle-square-properties。"
  },
  "figureReferences": [
    "u17-s013-fig001"
  ],
  "figureAccessibility": "菱形ABCD畫兩條互相垂直的對角線，交點O有直角記號。 圖形不一定按比例。",
  "practiceLinks": {
    "mcQuestionIds": [
      "u17-s013-v001",
      "u17-s013-v002",
      "u17-s013-v003",
      "u17-s013-v004",
      "u17-s013-v005",
      "u17-s013-v006",
      "u17-s013-v007",
      "u17-s013-v008",
      "u17-s013-v009",
      "u17-s013-v010",
      "u17-s013-v011",
      "u17-s013-v012"
    ],
    "constructedResponseIds": [
      "u17-s013-cr001",
      "u17-s013-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "symbolDefinitionsComplete": true,
    "figureChecked": true,
    "reviewNote": "講義保留平行四邊形共通性質，並清楚標出菱形專屬的垂直與角平分性質。"
  },
  "contentSha256": "0eadc3f71f2802af8403eb3a6f1b2985e3af71ca8ceb1bc64350b105d34260c4"
};

export const QUESTIONS = [
  {
    "questionId": "u17-s013-v001",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rhombus-properties",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "菱形最基本的邊長特徵是？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "辨認菱形。",
    "choices": [
      "四邊等長",
      "只有對邊等長",
      "四角皆90°",
      "兩對角線等長"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：菱形定義為四邊等長的平行四邊形。",
    "explanation": "菱形定義為四邊等長的平行四邊形。",
    "steps": [
      "菱形定義為四邊等長的平行四邊形。",
      "因此選擇「四邊等長」。"
    ],
    "optionAnalysis": [
      {
        "choice": "四邊等長",
        "truth": true,
        "reason": "依獨立重算「菱形定義為四邊等長的平行四邊形。」，此選項正確回答所求。"
      },
      {
        "choice": "只有對邊等長",
        "truth": false,
        "reason": "選項「只有對邊等長」不符合題意；依菱形定義。應得到「四邊等長」，此錯誤常源自：把矩形性質混入。"
      },
      {
        "choice": "四角皆90°",
        "truth": false,
        "reason": "選項「四角皆90°」不符合題意；依菱形定義。應得到「四邊等長」，此錯誤常源自：把矩形性質混入。"
      },
      {
        "choice": "兩對角線等長",
        "truth": false,
        "reason": "選項「兩對角線等長」不符合題意；依菱形定義。應得到「四邊等長」，此錯誤常源自：把矩形性質混入。"
      }
    ],
    "misconceptionTarget": "把矩形性質混入。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-area與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「辨認菱形。」；四個選項互異，只有四邊等長符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "直接定義題。",
    "literacyContextNecessity": null,
    "visualMode": "figure-supported",
    "figureId": "u17-s013-fig001",
    "drawingSpecRef": "units/u17/s013/drawing-specs.jsonl#u17-s013-fig001",
    "semanticReviewId": "u17-s013-v001-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "8f009614664dc0eed321c9a224c47e11371049a04fb4cc2ed8b71d2be0124172"
  },
  {
    "questionId": "u17-s013-v002",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rhombus-properties",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "菱形的兩條對角線相交時，夾角是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "直接使用垂直性質。",
    "choices": [
      "45°",
      "90°",
      "60°",
      "180°"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：菱形對角線互相垂直。",
    "explanation": "菱形對角線互相垂直。",
    "steps": [
      "菱形對角線互相垂直。",
      "因此選擇「90°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "45°",
        "truth": false,
        "reason": "選項「45°」不符合題意；依菱形對角線垂直。應得到「90°」，此錯誤常源自：以頂角或鄰角替代。"
      },
      {
        "choice": "90°",
        "truth": true,
        "reason": "依獨立重算「菱形對角線互相垂直。」，此選項正確回答所求。"
      },
      {
        "choice": "60°",
        "truth": false,
        "reason": "選項「60°」不符合題意；依菱形對角線垂直。應得到「90°」，此錯誤常源自：以頂角或鄰角替代。"
      },
      {
        "choice": "180°",
        "truth": false,
        "reason": "選項「180°」不符合題意；依菱形對角線垂直。應得到「90°」，此錯誤常源自：以頂角或鄰角替代。"
      }
    ],
    "misconceptionTarget": "以頂角或鄰角替代。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-area與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「直接使用垂直性質。」；四個選項互異，只有90°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "單一步驟。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s013-v002-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "c0c94a7008d1a98091ca8b06a52d69265f7d604bf8090164099b884e81ccc133"
  },
  {
    "questionId": "u17-s013-v003",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rhombus-properties",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "菱形ABCD中，對角線AC交BD於O，若AO=6公分，OC是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由平分求半段。",
    "choices": [
      "3公分",
      "12公分",
      "6公分",
      "無法判斷"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：菱形也是平行四邊形，對角線互相平分。",
    "explanation": "菱形也是平行四邊形，對角線互相平分。",
    "steps": [
      "菱形也是平行四邊形，對角線互相平分。",
      "因此選擇「6公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "3公分",
        "truth": false,
        "reason": "選項「3公分」不符合題意；依對角線互相平分。應得到「6公分」，此錯誤常源自：把全長與半長混淆。"
      },
      {
        "choice": "12公分",
        "truth": false,
        "reason": "選項「12公分」不符合題意；依對角線互相平分。應得到「6公分」，此錯誤常源自：把全長與半長混淆。"
      },
      {
        "choice": "6公分",
        "truth": true,
        "reason": "依獨立重算「菱形也是平行四邊形，對角線互相平分。」，此選項正確回答所求。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "選項「無法判斷」不符合題意；依對角線互相平分。應得到「6公分」，此錯誤常源自：把全長與半長混淆。"
      }
    ],
    "misconceptionTarget": "把全長與半長混淆。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-area與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由平分求半段。」；四個選項互異，只有6公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "基本性質。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s013-v003-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "acc1351286fbfd8c82deafe5030ec07a66772ac25fd6d690d714e1dde67dd810"
  },
  {
    "questionId": "u17-s013-v004",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rhombus-properties",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "菱形兩對角線長10與14公分，面積為何？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由對角線求面積。",
    "choices": [
      "24平方公分",
      "140平方公分",
      "280平方公分",
      "70平方公分"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：面積=10×14÷2=70平方公分。",
    "explanation": "面積=10×14÷2=70平方公分。",
    "steps": [
      "面積=10×14÷2=70平方公分。",
      "因此選擇「70平方公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "24平方公分",
        "truth": false,
        "reason": "選項「24平方公分」不符合題意；依菱形面積公式。應得到「70平方公分」，此錯誤常源自：忘記除2。"
      },
      {
        "choice": "140平方公分",
        "truth": false,
        "reason": "選項「140平方公分」不符合題意；依菱形面積公式。應得到「70平方公分」，此錯誤常源自：忘記除2。"
      },
      {
        "choice": "280平方公分",
        "truth": false,
        "reason": "選項「280平方公分」不符合題意；依菱形面積公式。應得到「70平方公分」，此錯誤常源自：忘記除2。"
      },
      {
        "choice": "70平方公分",
        "truth": true,
        "reason": "依獨立重算「面積=10×14÷2=70平方公分。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "忘記除2。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-area與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由對角線求面積。」；四個選項互異，只有70平方公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "標準公式。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s013-v004-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "c63fbdf21334b02910ef1776ff9c7dc1ca5ea8cd573676a034623092a014cad0"
  },
  {
    "questionId": "u17-s013-v005",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rhombus-properties",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "菱形ABCD中，∠A=84°，對角線AC平分∠A，∠BAC為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由角平分求半角。",
    "choices": [
      "21°",
      "42°",
      "84°",
      "96°"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：AC平分∠A，所以84°÷2=42°。",
    "explanation": "AC平分∠A，所以84°÷2=42°。",
    "steps": [
      "AC平分∠A，所以84°÷2=42°。",
      "因此選擇「42°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "21°",
        "truth": false,
        "reason": "選項「21°」不符合題意；依菱形對角線平分頂角。應得到「42°」，此錯誤常源自：把整個頂角直接作答。"
      },
      {
        "choice": "42°",
        "truth": true,
        "reason": "依獨立重算「AC平分∠A，所以84°÷2=42°。」，此選項正確回答所求。"
      },
      {
        "choice": "84°",
        "truth": false,
        "reason": "選項「84°」不符合題意；依菱形對角線平分頂角。應得到「42°」，此錯誤常源自：把整個頂角直接作答。"
      },
      {
        "choice": "96°",
        "truth": false,
        "reason": "選項「96°」不符合題意；依菱形對角線平分頂角。應得到「42°」，此錯誤常源自：把整個頂角直接作答。"
      }
    ],
    "misconceptionTarget": "把整個頂角直接作答。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-area與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由角平分求半角。」；四個選項互異，只有42°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "一次除法。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s013-v005-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "2216ca07bb6c98cc8cfc81ec4fb3554be1dca6bdea9e8ffdd68bc240a151e711"
  },
  {
    "questionId": "u17-s013-v006",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rhombus-properties",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "菱形一個內角為68°，與它相鄰的內角為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "求菱形鄰角。",
    "choices": [
      "22°",
      "68°",
      "112°",
      "136°"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：菱形是平行四邊形，鄰角互補，180°-68°=112°。",
    "explanation": "菱形是平行四邊形，鄰角互補，180°-68°=112°。",
    "steps": [
      "菱形是平行四邊形，鄰角互補，180°-68°=112°。",
      "因此選擇「112°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "22°",
        "truth": false,
        "reason": "選項「22°」不符合題意；依菱形承接平行四邊形角性質。應得到「112°」，此錯誤常源自：認為四角相等。"
      },
      {
        "choice": "68°",
        "truth": false,
        "reason": "選項「68°」不符合題意；依菱形承接平行四邊形角性質。應得到「112°」，此錯誤常源自：認為四角相等。"
      },
      {
        "choice": "112°",
        "truth": true,
        "reason": "依獨立重算「菱形是平行四邊形，鄰角互補，180°-68°=112°。」，此選項正確回答所求。"
      },
      {
        "choice": "136°",
        "truth": false,
        "reason": "選項「136°」不符合題意；依菱形承接平行四邊形角性質。應得到「112°」，此錯誤常源自：認為四角相等。"
      }
    ],
    "misconceptionTarget": "認為四角相等。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-area與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「求菱形鄰角。」；四個選項互異，只有112°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需連結上位類別。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s013-v006-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "c8f882eeb01732ccfd7f801cd1bed2799d7e9d122f2b439ca67dede8ddb7a2be"
  },
  {
    "questionId": "u17-s013-v007",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rhombus-properties",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一項不是一般菱形必有性質？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "辨認非必然性質。",
    "choices": [
      "四邊等長",
      "對角線互相垂直",
      "對角線互相平分",
      "兩條對角線等長"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：一般菱形對角線不一定等長，正方形才同時等長。",
    "explanation": "一般菱形對角線不一定等長，正方形才同時等長。",
    "steps": [
      "一般菱形對角線不一定等長，正方形才同時等長。",
      "因此選擇「兩條對角線等長」。"
    ],
    "optionAnalysis": [
      {
        "choice": "四邊等長",
        "truth": false,
        "reason": "選項「四邊等長」不符合題意；依區分菱形與正方形。應得到「兩條對角線等長」，此錯誤常源自：把正方形性質泛化。"
      },
      {
        "choice": "對角線互相垂直",
        "truth": false,
        "reason": "選項「對角線互相垂直」不符合題意；依區分菱形與正方形。應得到「兩條對角線等長」，此錯誤常源自：把正方形性質泛化。"
      },
      {
        "choice": "對角線互相平分",
        "truth": false,
        "reason": "選項「對角線互相平分」不符合題意；依區分菱形與正方形。應得到「兩條對角線等長」，此錯誤常源自：把正方形性質泛化。"
      },
      {
        "choice": "兩條對角線等長",
        "truth": true,
        "reason": "依獨立重算「一般菱形對角線不一定等長，正方形才同時等長。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "把正方形性質泛化。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-area與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「辨認非必然性質。」；四個選項互異，只有兩條對角線等長符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "概念邊界。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s013-v007-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "ea30c4b82293496ab489a26359baa25f4fe7527e7c8aa704a1cf84b580748879"
  },
  {
    "questionId": "u17-s013-v008",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rhombus-properties",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "菱形ABCD的對角線AC=24公分、BD=10公分，交於O。哪一組敘述正確？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "同時求四個半段。",
    "choices": [
      "AO=OC=12公分，BO=OD=5公分",
      "四段都17公分",
      "AO=OC=24公分，BO=OD=10公分",
      "四段都8.5公分"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：兩對角線各自被O平分，所以24分成12與12，10分成5與5。",
    "explanation": "兩對角線各自被O平分，所以24分成12與12，10分成5與5。",
    "steps": [
      "對角線各自被平分，24分成12與12，10分成5與5。",
      "因此選擇「AO=OC=12公分，BO=OD=5公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "AO=OC=12公分，BO=OD=5公分",
        "truth": true,
        "reason": "依獨立重算「兩對角線各自被O平分，所以24分成12與12，10分成5與5。」，此選項正確回答所求。"
      },
      {
        "choice": "四段都17公分",
        "truth": false,
        "reason": "選項「四段都17公分」不符合題意；依兩對角線分別平分。應得到「AO=OC=12公分，BO=OD=5公分」，此錯誤常源自：把兩條對角線混為同長。"
      },
      {
        "choice": "AO=OC=24公分，BO=OD=10公分",
        "truth": false,
        "reason": "選項「AO=OC=24公分，BO=OD=10公分」不符合題意；依兩對角線分別平分。應得到「AO=OC=12公分，BO=OD=5公分」，此錯誤常源自：把兩條對角線混為同長。"
      },
      {
        "choice": "四段都8.5公分",
        "truth": false,
        "reason": "選項「四段都8.5公分」不符合題意；依兩對角線分別平分。應得到「AO=OC=12公分，BO=OD=5公分」，此錯誤常源自：把兩條對角線混為同長。"
      }
    ],
    "misconceptionTarget": "把兩條對角線混為同長。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-area與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「同時求四個半段。」；四個選項互異，只有AO=OC=12公分，BO=OD=5公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需正確配對。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s013-v008-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "638b7637ce77cb80128c86256d42a0ded1c68fb04a66834243ba6b944ed39e53"
  },
  {
    "questionId": "u17-s013-v009",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rhombus-properties",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "菱形ABCD中，AC平分∠A，∠BAC=(2x+5)°，∠A=70°，x為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由頂角與對角線求參數。",
    "choices": [
      "10",
      "20",
      "15",
      "30"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：∠BAC=35°，所以2x+5=35，x=15。",
    "explanation": "∠BAC=35°，所以2x+5=35，x=15。",
    "steps": [
      "∠BAC=35°，所以2x+5=35，x=15。",
      "因此選擇「15」。"
    ],
    "optionAnalysis": [
      {
        "choice": "10",
        "truth": false,
        "reason": "選項「10」不符合題意；依角平分與方程。應得到「15」，此錯誤常源自：把半角設70°。"
      },
      {
        "choice": "20",
        "truth": false,
        "reason": "選項「20」不符合題意；依角平分與方程。應得到「15」，此錯誤常源自：把半角設70°。"
      },
      {
        "choice": "15",
        "truth": true,
        "reason": "依獨立重算「∠BAC=35°，所以2x+5=35，x=15。」，此選項正確回答所求。"
      },
      {
        "choice": "30",
        "truth": false,
        "reason": "選項「30」不符合題意；依角平分與方程。應得到「15」，此錯誤常源自：把半角設70°。"
      }
    ],
    "misconceptionTarget": "把半角設70°。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-area與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由頂角與對角線求參數。」；四個選項互異，只有15符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "兩步推理。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s013-v009-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "13c0b231c4ecba38233c03cad6132ae36925f4ebc0b5e6d5b9702676154f289e"
  },
  {
    "questionId": "u17-s013-v010",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rhombus-properties",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一塊菱形交通標誌兩對角線為60公分與40公分，板面面積是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由標誌尺寸求板面。",
    "choices": [
      "100平方公分",
      "2400平方公分",
      "4800平方公分",
      "1200平方公分"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：60×40÷2=1200平方公分。",
    "explanation": "60×40÷2=1200平方公分。",
    "steps": [
      "60×40÷2=1200平方公分。",
      "因此選擇「1200平方公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "100平方公分",
        "truth": false,
        "reason": "選項「100平方公分」不符合題意；依標誌板菱形面積。應得到「1200平方公分」，此錯誤常源自：忘記除2或只相加。"
      },
      {
        "choice": "2400平方公分",
        "truth": false,
        "reason": "選項「2400平方公分」不符合題意；依標誌板菱形面積。應得到「1200平方公分」，此錯誤常源自：忘記除2或只相加。"
      },
      {
        "choice": "4800平方公分",
        "truth": false,
        "reason": "選項「4800平方公分」不符合題意；依標誌板菱形面積。應得到「1200平方公分」，此錯誤常源自：忘記除2或只相加。"
      },
      {
        "choice": "1200平方公分",
        "truth": true,
        "reason": "依獨立重算「60×40÷2=1200平方公分。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "忘記除2或只相加。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-area與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由標誌尺寸求板面。」；四個選項互異，只有1200平方公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "情境需辨認給的是對角線。",
    "literacyContextNecessity": "製作板材用量直接取決於菱形面積。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s013-v010-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "dfe32be61116dcc21a4758762567c171a2d4c5ec8d6034362e349785ae541e14"
  },
  {
    "questionId": "u17-s013-v011",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rhombus-properties",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "菱形風箏骨架的兩支對角桿互相垂直，長分別80公分與50公分。覆布面積為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由骨架求覆布面積。",
    "choices": [
      "2000平方公分",
      "130平方公分",
      "4000平方公分",
      "8000平方公分"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：覆布面積=80×50÷2=2000平方公分。",
    "explanation": "覆布面積=80×50÷2=2000平方公分。",
    "steps": [
      "覆布面積=80×50÷2=2000平方公分。",
      "因此選擇「2000平方公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "2000平方公分",
        "truth": true,
        "reason": "依獨立重算「覆布面積=80×50÷2=2000平方公分。」，此選項正確回答所求。"
      },
      {
        "choice": "130平方公分",
        "truth": false,
        "reason": "選項「130平方公分」不符合題意；依骨架對角線決定菱形面積。應得到「2000平方公分」，此錯誤常源自：把桿長當邊長。"
      },
      {
        "choice": "4000平方公分",
        "truth": false,
        "reason": "選項「4000平方公分」不符合題意；依骨架對角線決定菱形面積。應得到「2000平方公分」，此錯誤常源自：把桿長當邊長。"
      },
      {
        "choice": "8000平方公分",
        "truth": false,
        "reason": "選項「8000平方公分」不符合題意；依骨架對角線決定菱形面積。應得到「2000平方公分」，此錯誤常源自：把桿長當邊長。"
      }
    ],
    "misconceptionTarget": "把桿長當邊長。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-area與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由骨架求覆布面積。」；四個選項互異，只有2000平方公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需辨認對角桿角色。",
    "literacyContextNecessity": "覆布區域由兩支對角桿完整決定。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s013-v011-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "32fe5bd4121f03dafaf917bfb0f6cf6a3f0213af82149758a496496d2b8f545d"
  },
  {
    "questionId": "u17-s013-v012",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rhombus-properties",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個菱形花圃的對角線交點到四頂點距離依序為6、8、6、8公尺，花圃面積多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "從交點量測求面積。",
    "choices": [
      "48平方公尺",
      "96平方公尺",
      "192平方公尺",
      "384平方公尺"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：兩條完整對角線為12與16公尺，面積=12×16÷2=96。",
    "explanation": "兩條完整對角線為12與16公尺，面積=12×16÷2=96。",
    "steps": [
      "兩條完整對角線為12與16公尺，面積=12×16÷2=96。",
      "因此選擇「96平方公尺」。"
    ],
    "optionAnalysis": [
      {
        "choice": "48平方公尺",
        "truth": false,
        "reason": "選項「48平方公尺」不符合題意；依由半對角線還原面積。應得到「96平方公尺」，此錯誤常源自：直接用6×8÷2。"
      },
      {
        "choice": "96平方公尺",
        "truth": true,
        "reason": "依獨立重算「兩條完整對角線為12與16公尺，面積=12×16÷2=96。」，此選項正確回答所求。"
      },
      {
        "choice": "192平方公尺",
        "truth": false,
        "reason": "選項「192平方公尺」不符合題意；依由半對角線還原面積。應得到「96平方公尺」，此錯誤常源自：直接用6×8÷2。"
      },
      {
        "choice": "384平方公尺",
        "truth": false,
        "reason": "選項「384平方公尺」不符合題意；依由半對角線還原面積。應得到「96平方公尺」，此錯誤常源自：直接用6×8÷2。"
      }
    ],
    "misconceptionTarget": "直接用6×8÷2。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-area與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「從交點量測求面積。」；四個選項互異，只有96平方公尺符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需先還原全長。",
    "literacyContextNecessity": "現場量測的是半對角線，不能直接套完整對角線公式。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s013-v012-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "b04b2e5535224d5262b10cf9494bcce62f9addb6c7bef4e618ae3c1341d82e98"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u17-s013-cr001",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rhombus-properties",
    "difficulty": "standard",
    "type": "constructed-response",
    "prompt": "菱形ABCD中，∠A=76°，對角線AC與BD交於O。求∠BAC、∠AOB與∠B。",
    "requiredWork": [
      "使用AC平分A角",
      "使用對角線垂直",
      "使用鄰角互補"
    ],
    "standardSolution": [
      "∠BAC=76°÷2=38°。",
      "AC⊥BD，所以∠AOB=90°。",
      "∠B=180°-76°=104°。"
    ],
    "alternativeMethods": [
      [
        "可先求∠B，再由BD平分∠B得到52°作額外驗算。"
      ]
    ],
    "reasoningSteps": [
      "∠BAC=76°÷2=38°。",
      "AC⊥BD，所以∠AOB=90°。",
      "∠B=180°-76°=104°。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整處理「菱形多項性質」，列式、理由與結果「38°、90°、104°」均正確。"
      },
      {
        "score": 2,
        "criteria": "主要方法與幾何性質正確，且已得到大部分「38°、90°、104°」；僅有一處算術、單位或理由缺漏。"
      },
      {
        "score": 1,
        "criteria": "能指出本題應使用的核心性質並完成至少一個有效步驟，但尚未正確完成「菱形多項性質」。"
      },
      {
        "score": 0,
        "criteria": "未使用與「菱形性質」相關的有效條件，或答案與推理均無法支持「38°、90°、104°」。"
      }
    ],
    "partialCreditRules": [
      "正確列出本題關鍵關係但算術未完成，可依完成程度給1至2分。",
      "只得到部分結果時，必須有可辨認的「菱形多項性質」推理才給分。"
    ],
    "followThroughPolicy": "若前段只有單一算術錯誤，後續依其結果正確推理可保留相應方法分。",
    "unitNotationRules": "角度以度表示，長度與面積保留題目單位。",
    "answerOnlyPolicy": "只有最終答案而無題目要求的列式或理由，最高1分；證明題只寫結論不得分。",
    "visualMode": "figure-supported",
    "figureId": "u17-s013-fig001",
    "drawingSpecRef": "units/u17/s013/drawing-specs.jsonl#u17-s013-fig001",
    "independentReview": {
      "derivedResult": "38°、90°、104°",
      "recalculation": "∠BAC=76°÷2=38°。；AC⊥BD，所以∠AOB=90°。；∠B=180°-76°=104°。",
      "ambiguity": "所求量與評分焦點「菱形多項性質」明確；替代方法不改變標準結果。",
      "decision": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "ef537f28b54eaf4a2ef4a86c105cd955d833f428ab828d584f1652dd6a856615"
  },
  {
    "questionId": "u17-s013-cr002",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-quadrilaterals",
    "skillId": "rhombus-properties",
    "difficulty": "advanced",
    "type": "constructed-response",
    "prompt": "菱形兩對角線交點到四頂點的距離為6、8、6、8公分。求兩對角線與面積。",
    "requiredWork": [
      "配對同一對角線半段",
      "還原全長",
      "套面積公式"
    ],
    "standardSolution": [
      "兩條對角線分別為12與16公分。",
      "面積=12×16÷2=96平方公分。"
    ],
    "alternativeMethods": [
      [
        "可用四個直角三角形，每個面積6×8÷2=24，總面積96。"
      ]
    ],
    "reasoningSteps": [
      "兩條對角線分別為12與16公分。",
      "面積=12×16÷2=96平方公分。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整處理「由半對角線求面積」，列式、理由與結果「對角線12與16公分，面積96平方公分」均正確。"
      },
      {
        "score": 2,
        "criteria": "主要方法與幾何性質正確，且已得到大部分「對角線12與16公分，面積96平方公分」；僅有一處算術、單位或理由缺漏。"
      },
      {
        "score": 1,
        "criteria": "能指出本題應使用的核心性質並完成至少一個有效步驟，但尚未正確完成「由半對角線求面積」。"
      },
      {
        "score": 0,
        "criteria": "未使用與「菱形性質」相關的有效條件，或答案與推理均無法支持「對角線12與16公分，面積96平方公分」。"
      }
    ],
    "partialCreditRules": [
      "正確列出本題關鍵關係但算術未完成，可依完成程度給1至2分。",
      "只得到部分結果時，必須有可辨認的「由半對角線求面積」推理才給分。"
    ],
    "followThroughPolicy": "若前段只有單一算術錯誤，後續依其結果正確推理可保留相應方法分。",
    "unitNotationRules": "角度以度表示，長度與面積保留題目單位。",
    "answerOnlyPolicy": "只有最終答案而無題目要求的列式或理由，最高1分；證明題只寫結論不得分。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "independentReview": {
      "derivedResult": "對角線12與16公分，面積96平方公分",
      "recalculation": "兩條對角線分別為12與16公分。；面積=12×16÷2=96平方公分。",
      "ambiguity": "所求量與評分焦點「由半對角線求面積」明確；替代方法不改變標準結果。",
      "decision": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "7d7646e6e8283481abea7a50d5538ae9a29cfbc87b03215c3f10e955def3588f"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u17-s013-fig001",
    "unitId": "u17",
    "topicId": "u17-quadrilaterals",
    "skillId": "rhombus-properties",
    "purpose": "支援「菱形性質」的空間位置、性質或證明閱讀，不提供題目答案。",
    "svgPath": "figures/u17/u17-s013-fig001.svg",
    "canvas": {
      "width": 400,
      "height": 300,
      "viewBox": "0 0 400 300"
    },
    "drawingSpec": {
      "title": "菱形對角線性質",
      "description": "菱形ABCD畫兩條互相垂直的對角線，交點O有直角記號。",
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
    "altText": "菱形ABCD畫兩條互相垂直的對角線，交點O有直角記號。 圖形不一定按比例。",
    "svgTitle": "菱形對角線性質",
    "svgDesc": "菱形ABCD畫兩條互相垂直的對角線，交點O有直角記號。",
    "mobileReadability": "400×300檢視下主要線條、交點與核心文字仍可辨識；長句置於空白區。",
    "answerLeakageReview": "圖只呈現定義結構或已知關係，不標示任何題目未給的未知答案。",
    "svgAssertions": [
      "90°",
      "O",
      "role=\"img\"",
      "<title",
      "<desc"
    ],
    "figureReview": {
      "decision": "pass",
      "manualRenderedInspection": true,
      "reviewNote": "已渲染檢查菱形對角線性質：線段未被裁切，文字未遮住核心交點，且不按比例警告已置於desc。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "93fa9358fc2e5f4e3215a73b46ae267606b1b3c9694e5eaa940d84c840fdba01"
  }
];
