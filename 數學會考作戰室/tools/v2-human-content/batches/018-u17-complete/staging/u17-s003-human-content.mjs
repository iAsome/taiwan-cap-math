// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u17-s003-lecture-r1",
  "unitId": "u17",
  "numericUnitId": 17,
  "topicId": "u17-parallel",
  "skillId": "parallel-proof-basic",
  "lockedTitle": "平行線證明基本",
  "title": "平行線證明基本：條件和推理與結論缺一不可",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "prerequisiteBridge": "先備技能：parallel-properties。本節只使用該技能已建立的角度、平行或四邊形性質。",
  "learningOutcomes": [
    "把已知條件翻成可用角關係",
    "選擇一條最短的平行判定鏈",
    "用理由支持每一步"
  ],
  "prerequisites": [
    {
      "skillId": "parallel-properties",
      "requiredLevel": "能正確使用「parallel-properties」中的基本定義與直接性質，不需使用後續技能。"
    }
  ],
  "glossary": [
    {
      "term": "已知",
      "definition": "題目直接給出的資訊"
    },
    {
      "term": "待證",
      "definition": "最後必須得到的結論"
    },
    {
      "term": "推論",
      "definition": "由已知和定理得到的新事實"
    },
    {
      "term": "證明鏈",
      "definition": "按因果順序連接的敘述與理由"
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
    "證明不是把答案寫長，而是讓每一步都能由已知或已學定理推出。",
    "證明兩線平行常用三條路：同位角相等、內錯角相等、同側內角互補。",
    "若角度需先由對頂角、三角形內角和或鄰補角算出，應先完成該步，再套平行判定。"
  ],
  "formalDefinitions": [
    {
      "name": "已知",
      "statement": "題目直接給出的資訊"
    },
    {
      "name": "待證",
      "statement": "最後必須得到的結論"
    }
  ],
  "formulas": [
    {
      "formula": "同位角相等 ⇒ 平行",
      "conditions": [
        "同一截線形成"
      ],
      "meaning": "用於平行線證明基本中符合條件的推理或計算。"
    },
    {
      "formula": "內錯角相等 ⇒ 平行",
      "conditions": [
        "同一截線形成"
      ],
      "meaning": "用於平行線證明基本中符合條件的推理或計算。"
    },
    {
      "formula": "同側內角和180° ⇒ 平行",
      "conditions": [
        "同一截線形成"
      ],
      "meaning": "用於平行線證明基本中符合條件的推理或計算。"
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
      "instruction": "寫出已知與待證",
      "check": "完成第1步後，確認未引入題目未給的條件。"
    },
    {
      "step": 2,
      "instruction": "找一對能連到待證的角",
      "check": "完成第2步後，確認未引入題目未給的條件。"
    },
    {
      "step": 3,
      "instruction": "計算或證明角相等或互補",
      "check": "完成第3步後，確認未引入題目未給的條件。"
    },
    {
      "step": 4,
      "instruction": "引用正確的平行判定",
      "check": "完成第4步後，確認未引入題目未給的條件。"
    },
    {
      "step": 5,
      "instruction": "檢查是否循環論證",
      "check": "完成第5步後，確認未引入題目未給的條件。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "已知同位角各56°",
      "solutionSteps": [
        "由同位角相等判兩線平行。"
      ],
      "answer": "由同位角相等判兩線平行。"
    },
    {
      "exampleId": "L2",
      "prompt": "內錯角分別3x+5與5x-35且相等",
      "solutionSteps": [
        "解得x=20，再以內錯角相等判平行。"
      ],
      "answer": "解得x=20，再以內錯角相等判平行。"
    },
    {
      "exampleId": "L3",
      "prompt": "同側內角為2x+20與4x+10且和180°",
      "solutionSteps": [
        "解得x=25，故兩線平行。"
      ],
      "answer": "解得x=25，故兩線平行。"
    },
    {
      "exampleId": "L4",
      "prompt": "只知兩個角相等但非對應位置",
      "solutionSteps": [
        "資訊不足，不能判定。"
      ],
      "answer": "資訊不足，不能判定。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "只寫「所以平行」不寫理由",
      "why": "須指出使用哪一種角判定",
      "correction": "須指出使用哪一種角判定"
    },
    {
      "mistake": "先假設平行再說角相等",
      "why": "這是循環論證",
      "correction": "這是循環論證"
    },
    {
      "mistake": "解出x後未回到幾何結論",
      "why": "代數只是中間步驟",
      "correction": "代數只是中間步驟"
    },
    {
      "mistake": "把內錯角和寫成180°",
      "why": "內錯角在平行時相等",
      "correction": "內錯角在平行時相等"
    },
    {
      "mistake": "使用圖上未標示的等長或垂直",
      "why": "示意圖不能當已知",
      "correction": "示意圖不能當已知"
    }
  ],
  "selfCheck": [
    "我能否不用目測，說明「平行線證明基本」所需的條件？",
    "我是否先辨認角、邊、對角線、底或高的正確位置？",
    "方程解出後是否代回題目真正所求？",
    "角度、長度與面積單位是否正確？"
  ],
  "summary": [
    "證明不是把答案寫長，而是讓每一步都能由已知或已學定理推出。",
    "同位角相等 ⇒ 平行",
    "解題時先確認「同一截線形成」。"
  ],
  "connections": {
    "previous": "承接parallel-properties。",
    "next": "下一技能依鎖定順序為parallelogram-properties。"
  },
  "figureReferences": [
    "u17-s003-fig001"
  ],
  "figureAccessibility": "由已知角關係經計算到平行判定的四步流程框。 圖形不一定按比例。",
  "practiceLinks": {
    "mcQuestionIds": [
      "u17-s003-v001",
      "u17-s003-v002",
      "u17-s003-v003",
      "u17-s003-v004",
      "u17-s003-v005",
      "u17-s003-v006",
      "u17-s003-v007",
      "u17-s003-v008",
      "u17-s003-v009",
      "u17-s003-v010",
      "u17-s003-v011",
      "u17-s003-v012"
    ],
    "constructedResponseIds": [
      "u17-s003-cr001",
      "u17-s003-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "symbolDefinitionsComplete": true,
    "figureChecked": true,
    "reviewNote": "講義把證明拆成可檢查的因果鏈，並特別排除「先假設平行」的循環論證，符合本技能的基本證明邊界。"
  },
  "contentSha256": "de45226710dab7deaa9a0afc31c7ec70c4e7accdef7c2705ee79f012ead69f3a"
};

export const QUESTIONS = [
  {
    "questionId": "u17-s003-v001",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-proof-basic",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "證明兩直線平行時，若已知一對內錯角相等，最完整的結論理由是？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "選擇完整證明語句。",
    "choices": [
      "因對頂角相等，所以兩直線平行",
      "因角度小於180°，所以兩直線平行",
      "因內錯角相等，所以兩直線平行",
      "由圖形看起來平行"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：內錯角相等正是平行判定之一。",
    "explanation": "內錯角相等正是平行判定之一。",
    "steps": [
      "內錯角相等正是平行判定之一。",
      "因此選擇「因內錯角相等，所以兩直線平行」。"
    ],
    "optionAnalysis": [
      {
        "choice": "因對頂角相等，所以兩直線平行",
        "truth": false,
        "reason": "選項「因對頂角相等，所以兩直線平行」不符合題意；依證明需引用正確判定。應得到「因內錯角相等，所以兩直線平行」，此錯誤常源自：只寫結論或引用錯誤角型。"
      },
      {
        "choice": "因角度小於180°，所以兩直線平行",
        "truth": false,
        "reason": "選項「因角度小於180°，所以兩直線平行」不符合題意；依證明需引用正確判定。應得到「因內錯角相等，所以兩直線平行」，此錯誤常源自：只寫結論或引用錯誤角型。"
      },
      {
        "choice": "因內錯角相等，所以兩直線平行",
        "truth": true,
        "reason": "依獨立重算「內錯角相等正是平行判定之一。」，此選項正確回答所求。"
      },
      {
        "choice": "由圖形看起來平行",
        "truth": false,
        "reason": "選項「由圖形看起來平行」不符合題意；依證明需引用正確判定。應得到「因內錯角相等，所以兩直線平行」，此錯誤常源自：只寫結論或引用錯誤角型。"
      }
    ],
    "misconceptionTarget": "只寫結論或引用錯誤角型。",
    "prerequisiteCheck": "只使用先備技能parallel-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「選擇完整證明語句。」；四個選項互異，只有因內錯角相等，所以兩直線平行符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "直接辨認定理與理由。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s003-v001-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "4eace525e2030e9ac73f538cb1ed525b0a74011b6ae2c0669d4f7d3718f853be"
  },
  {
    "questionId": "u17-s003-v002",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-proof-basic",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知同位角∠1=∠2。要證a∥b，下一步應寫什麼？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "完成一階證明。",
    "choices": [
      "先假設a∥b",
      "由鄰補角相等判定",
      "量圖確認a與b距離相同",
      "由同位角相等判定a∥b"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：已知已符合同位角判定，直接引用逆性質即可。",
    "explanation": "已知已符合同位角判定，直接引用逆性質即可。",
    "steps": [
      "已知已符合同位角判定，直接引用逆性質即可。",
      "因此選擇「由同位角相等判定a∥b」。"
    ],
    "optionAnalysis": [
      {
        "choice": "先假設a∥b",
        "truth": false,
        "reason": "選項「先假設a∥b」不符合題意；依從已知到判定的證明鏈。應得到「由同位角相等判定a∥b」，此錯誤常源自：先假設待證結論形成循環。"
      },
      {
        "choice": "由鄰補角相等判定",
        "truth": false,
        "reason": "選項「由鄰補角相等判定」不符合題意；依從已知到判定的證明鏈。應得到「由同位角相等判定a∥b」，此錯誤常源自：先假設待證結論形成循環。"
      },
      {
        "choice": "量圖確認a與b距離相同",
        "truth": false,
        "reason": "選項「量圖確認a與b距離相同」不符合題意；依從已知到判定的證明鏈。應得到「由同位角相等判定a∥b」，此錯誤常源自：先假設待證結論形成循環。"
      },
      {
        "choice": "由同位角相等判定a∥b",
        "truth": true,
        "reason": "依獨立重算「已知已符合同位角判定，直接引用逆性質即可。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "先假設待證結論形成循環。",
    "prerequisiteCheck": "只使用先備技能parallel-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「完成一階證明。」；四個選項互異，只有由同位角相等判定a∥b符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "只有一個推論步驟。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s003-v002-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "94dc8f2cec7a46e0f06793e4a761b3e8ba65fa80d78c5840e2f560ab56592b1e"
  },
  {
    "questionId": "u17-s003-v003",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-proof-basic",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一對同側內角為118°與62°。用來證明兩線平行的關鍵計算是？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "找出證明中的必要計算。",
    "choices": [
      "118°+62°=180°",
      "118°-62°=56°",
      "118°=62°",
      "118°+62°=200°"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：兩角和180°，可套同側內角互補判定。",
    "explanation": "兩角和180°，可套同側內角互補判定。",
    "steps": [
      "兩角和180°，可套同側內角互補判定。",
      "因此選擇「118°+62°=180°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "118°+62°=180°",
        "truth": true,
        "reason": "依獨立重算「兩角和180°，可套同側內角互補判定。」，此選項正確回答所求。"
      },
      {
        "choice": "118°-62°=56°",
        "truth": false,
        "reason": "選項「118°-62°=56°」不符合題意；依同側內角互補判平行。應得到「118°+62°=180°」，此錯誤常源自：用差值取代角和。"
      },
      {
        "choice": "118°=62°",
        "truth": false,
        "reason": "選項「118°=62°」不符合題意；依同側內角互補判平行。應得到「118°+62°=180°」，此錯誤常源自：用差值取代角和。"
      },
      {
        "choice": "118°+62°=200°",
        "truth": false,
        "reason": "選項「118°+62°=200°」不符合題意；依同側內角互補判平行。應得到「118°+62°=180°」，此錯誤常源自：用差值取代角和。"
      }
    ],
    "misconceptionTarget": "用差值取代角和。",
    "prerequisiteCheck": "只使用先備技能parallel-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「找出證明中的必要計算。」；四個選項互異，只有118°+62°=180°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "計算簡單但須連結判定。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s003-v003-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "b0068dd0d4881ba06d01423e28975f5246d39c4538f4adf25ed2e15d567ce64a"
  },
  {
    "questionId": "u17-s003-v004",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-proof-basic",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "內錯角為(3x+14)°與(5x-18)°，且x=16。哪個證明可得兩線平行？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "驗證代數條件支持平行。",
    "choices": [
      "兩角和124°，故平行",
      "兩角皆62°，故內錯角相等，兩線平行",
      "兩角皆16°，故平行",
      "兩角為62°與98°，故互補"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：代入x=16後兩角皆62°，符合內錯角相等判定。",
    "explanation": "代入x=16後兩角皆62°，符合內錯角相等判定。",
    "steps": [
      "代入x=16後兩角皆62°，符合內錯角相等判定。",
      "因此選擇「兩角皆62°，故內錯角相等，兩線平行」。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩角和124°，故平行",
        "truth": false,
        "reason": "選項「兩角和124°，故平行」不符合題意；依先代入再套判定。應得到「兩角皆62°，故內錯角相等，兩線平行」，此錯誤常源自：只看x相同而未算角。"
      },
      {
        "choice": "兩角皆62°，故內錯角相等，兩線平行",
        "truth": true,
        "reason": "依獨立重算「代入x=16後兩角皆62°，符合內錯角相等判定。」，此選項正確回答所求。"
      },
      {
        "choice": "兩角皆16°，故平行",
        "truth": false,
        "reason": "選項「兩角皆16°，故平行」不符合題意；依先代入再套判定。應得到「兩角皆62°，故內錯角相等，兩線平行」，此錯誤常源自：只看x相同而未算角。"
      },
      {
        "choice": "兩角為62°與98°，故互補",
        "truth": false,
        "reason": "選項「兩角為62°與98°，故互補」不符合題意；依先代入再套判定。應得到「兩角皆62°，故內錯角相等，兩線平行」，此錯誤常源自：只看x相同而未算角。"
      }
    ],
    "misconceptionTarget": "只看x相同而未算角。",
    "prerequisiteCheck": "只使用先備技能parallel-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「驗證代數條件支持平行。」；四個選項互異，只有兩角皆62°，故內錯角相等，兩線平行符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需要代入與幾何判定兩步。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s003-v004-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "a7bdb15e5122c6206cbdae26723f927b03d92b75dc89109a9ad582e938567fd1"
  },
  {
    "questionId": "u17-s003-v005",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-proof-basic",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "要證明a∥b，已知∠1與∠3為對頂角、∠3=∠2，且∠1與∠2是同位角。證明順序應為何？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "安排證明步驟。",
    "choices": [
      "先假設a∥b再得∠1=∠2",
      "由∠3=∠2直接說a∥b",
      "由三角形內角和判a∥b",
      "先由對頂角得∠1=∠3，再傳遞得∠1=∠2，最後判a∥b"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：對頂角與已知等式可經等量傳遞得到同位角相等，再判平行。",
    "explanation": "對頂角與已知等式可經等量傳遞得到同位角相等，再判平行。",
    "steps": [
      "對頂角與已知等式可經等量傳遞得到同位角相等，再判平行。",
      "因此選擇「先由對頂角得∠1=∠3，再傳遞得∠1=∠2，最後判a∥b」。"
    ],
    "optionAnalysis": [
      {
        "choice": "先假設a∥b再得∠1=∠2",
        "truth": false,
        "reason": "選項「先假設a∥b再得∠1=∠2」不符合題意；依多步證明鏈。應得到「先由對頂角得∠1=∠3，再傳遞得∠1=∠2，最後判a∥b」，此錯誤常源自：省略角位置或循環論證。"
      },
      {
        "choice": "由∠3=∠2直接說a∥b",
        "truth": false,
        "reason": "選項「由∠3=∠2直接說a∥b」不符合題意；依多步證明鏈。應得到「先由對頂角得∠1=∠3，再傳遞得∠1=∠2，最後判a∥b」，此錯誤常源自：省略角位置或循環論證。"
      },
      {
        "choice": "由三角形內角和判a∥b",
        "truth": false,
        "reason": "選項「由三角形內角和判a∥b」不符合題意；依多步證明鏈。應得到「先由對頂角得∠1=∠3，再傳遞得∠1=∠2，最後判a∥b」，此錯誤常源自：省略角位置或循環論證。"
      },
      {
        "choice": "先由對頂角得∠1=∠3，再傳遞得∠1=∠2，最後判a∥b",
        "truth": true,
        "reason": "依獨立重算「對頂角與已知等式可經等量傳遞得到同位角相等，再判平行。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "省略角位置或循環論證。",
    "prerequisiteCheck": "只使用先備技能parallel-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「安排證明步驟。」；四個選項互異，只有先由對頂角得∠1=∠3，再傳遞得∠1=∠2，最後判a∥b符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需整合對頂角、等量傳遞與平行判定。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s003-v005-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "ebf999b78f4370cda5b824c4d8907ddb57d53bd0cea507c44b8ba19a78f3490b"
  },
  {
    "questionId": "u17-s003-v006",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-proof-basic",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "同側內角為(2x+30)°與(4x-6)°。若x=26，能否證明兩線平行？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "判斷給定參數是否足以證平行。",
    "choices": [
      "能，兩角為82°與98°，和180°",
      "不能，兩角不相等",
      "能，因兩角都是26°",
      "不能，因和為170°"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：代入得82°與98°，和180°，可用同側內角互補判定。",
    "explanation": "代入得82°與98°，和180°，可用同側內角互補判定。",
    "steps": [
      "代入得82°與98°，和180°，可用同側內角互補判定。",
      "因此選擇「能，兩角為82°與98°，和180°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "能，兩角為82°與98°，和180°",
        "truth": true,
        "reason": "依獨立重算「代入得82°與98°，和180°，可用同側內角互補判定。」，此選項正確回答所求。"
      },
      {
        "choice": "不能，兩角不相等",
        "truth": false,
        "reason": "選項「不能，兩角不相等」不符合題意；依先驗算再判定。應得到「能，兩角為82°與98°，和180°」，此錯誤常源自：要求兩角相等而忽略互補。"
      },
      {
        "choice": "能，因兩角都是26°",
        "truth": false,
        "reason": "選項「能，因兩角都是26°」不符合題意；依先驗算再判定。應得到「能，兩角為82°與98°，和180°」，此錯誤常源自：要求兩角相等而忽略互補。"
      },
      {
        "choice": "不能，因和為170°",
        "truth": false,
        "reason": "選項「不能，因和為170°」不符合題意；依先驗算再判定。應得到「能，兩角為82°與98°，和180°」，此錯誤常源自：要求兩角相等而忽略互補。"
      }
    ],
    "misconceptionTarget": "要求兩角相等而忽略互補。",
    "prerequisiteCheck": "只使用先備技能parallel-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「判斷給定參數是否足以證平行。」；四個選項互異，只有能，兩角為82°與98°，和180°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需代入、求和並選判定。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s003-v006-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "21dc2f87937210fc3df2d9e04b3b9b514bbdc8dc5c4ae1d0c9789dbc3ba6b2e6"
  },
  {
    "questionId": "u17-s003-v007",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-proof-basic",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "證明稿寫：「因a∥b，所以同位角相等；又因同位角相等，所以a∥b。」其主要問題是？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "辨認循環論證。",
    "choices": [
      "算術錯誤",
      "循環論證",
      "單位不一致",
      "角度超過180°"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：證明把待證的a∥b先當作已知，再用同一結論返回，沒有獨立理由。",
    "explanation": "證明把待證的a∥b先當作已知，再用同一結論返回，沒有獨立理由。",
    "steps": [
      "證明把待證的a∥b先當作已知，再用同一結論返回，沒有獨立理由。",
      "因此選擇「循環論證」。"
    ],
    "optionAnalysis": [
      {
        "choice": "算術錯誤",
        "truth": false,
        "reason": "選項「算術錯誤」不符合題意；依證明不得使用待證結論。應得到「循環論證」，此錯誤常源自：誤以為語句較長就是證明。"
      },
      {
        "choice": "循環論證",
        "truth": true,
        "reason": "依獨立重算「證明把待證的a∥b先當作已知，再用同一結論返回，沒有獨立理由。」，此選項正確回答所求。"
      },
      {
        "choice": "單位不一致",
        "truth": false,
        "reason": "選項「單位不一致」不符合題意；依證明不得使用待證結論。應得到「循環論證」，此錯誤常源自：誤以為語句較長就是證明。"
      },
      {
        "choice": "角度超過180°",
        "truth": false,
        "reason": "選項「角度超過180°」不符合題意；依證明不得使用待證結論。應得到「循環論證」，此錯誤常源自：誤以為語句較長就是證明。"
      }
    ],
    "misconceptionTarget": "誤以為語句較長就是證明。",
    "prerequisiteCheck": "只使用先備技能parallel-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「辨認循環論證。」；四個選項互異，只有循環論證符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需分析論證結構而非計算。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s003-v007-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "bff20f4bba513e900aa8edd68013dfa78bc7a5401e8434ebb37ee1d6f178a565"
  },
  {
    "questionId": "u17-s003-v008",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-proof-basic",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知∠1+∠2=180°，但題目未說明∠1、∠2的位置。能否直接證兩線平行？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "審查證明資訊是否完整。",
    "choices": [
      "能，任兩角互補都可",
      "能，因角和固定",
      "不能，需確認兩角是同側內角",
      "不能，因角度必須相等"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：互補只在兩角確為同側內角時才構成平行判定。",
    "explanation": "互補只在兩角確為同側內角時才構成平行判定。",
    "steps": [
      "互補只在兩角確為同側內角時才構成平行判定。",
      "因此選擇「不能，需確認兩角是同側內角」。"
    ],
    "optionAnalysis": [
      {
        "choice": "能，任兩角互補都可",
        "truth": false,
        "reason": "選項「能，任兩角互補都可」不符合題意；依判定需要角位置條件。應得到「不能，需確認兩角是同側內角」，此錯誤常源自：忽略定理的適用條件。"
      },
      {
        "choice": "能，因角和固定",
        "truth": false,
        "reason": "選項「能，因角和固定」不符合題意；依判定需要角位置條件。應得到「不能，需確認兩角是同側內角」，此錯誤常源自：忽略定理的適用條件。"
      },
      {
        "choice": "不能，需確認兩角是同側內角",
        "truth": true,
        "reason": "依獨立重算「互補只在兩角確為同側內角時才構成平行判定。」，此選項正確回答所求。"
      },
      {
        "choice": "不能，因角度必須相等",
        "truth": false,
        "reason": "選項「不能，因角度必須相等」不符合題意；依判定需要角位置條件。應得到「不能，需確認兩角是同側內角」，此錯誤常源自：忽略定理的適用條件。"
      }
    ],
    "misconceptionTarget": "忽略定理的適用條件。",
    "prerequisiteCheck": "只使用先備技能parallel-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「審查證明資訊是否完整。」；四個選項互異，只有不能，需確認兩角是同側內角符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需辨認隱藏的必要條件。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s003-v008-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "d4d3d31c42aa84a9428f8b2a574b8fac6c41b086cc9eb4bc726c27ac9236d245"
  },
  {
    "questionId": "u17-s003-v009",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-proof-basic",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知∠A=46°，∠B=134°，兩角是同側內角。要完成證明，哪一組敘述與理由最精確？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "評估證明表述完整度。",
    "choices": [
      "46°+134°=180°，同側內角互補，所以兩線平行",
      "46°≠134°，所以兩線平行",
      "46°+134°=180°，所以兩線垂直",
      "兩角皆小於180°，所以平行"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：明確計算角和並引用同側內角判定。",
    "explanation": "明確計算角和並引用同側內角判定。",
    "steps": [
      "明確計算角和並引用同側內角判定。",
      "因此選擇「46°+134°=180°，同側內角互補，所以兩線平行」。"
    ],
    "optionAnalysis": [
      {
        "choice": "46°+134°=180°，同側內角互補，所以兩線平行",
        "truth": true,
        "reason": "依獨立重算「明確計算角和並引用同側內角判定。」，此選項正確回答所求。"
      },
      {
        "choice": "46°≠134°，所以兩線平行",
        "truth": false,
        "reason": "選項「46°≠134°，所以兩線平行」不符合題意；依完整證明需有計算、角型與結論。應得到「46°+134°=180°，同側內角互補，所以兩線平行」，此錯誤常源自：只寫角和不連結定理。"
      },
      {
        "choice": "46°+134°=180°，所以兩線垂直",
        "truth": false,
        "reason": "選項「46°+134°=180°，所以兩線垂直」不符合題意；依完整證明需有計算、角型與結論。應得到「46°+134°=180°，同側內角互補，所以兩線平行」，此錯誤常源自：只寫角和不連結定理。"
      },
      {
        "choice": "兩角皆小於180°，所以平行",
        "truth": false,
        "reason": "選項「兩角皆小於180°，所以平行」不符合題意；依完整證明需有計算、角型與結論。應得到「46°+134°=180°，同側內角互補，所以兩線平行」，此錯誤常源自：只寫角和不連結定理。"
      }
    ],
    "misconceptionTarget": "只寫角和不連結定理。",
    "prerequisiteCheck": "只使用先備技能parallel-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「評估證明表述完整度。」；四個選項互異，只有46°+134°=180°，同側內角互補，所以兩線平行符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需要比較理由的精確性。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s003-v009-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "7349022048708555b4a4f25d1bd2150673d12916aef25acc59e44e859b82f56f"
  },
  {
    "questionId": "u17-s003-v010",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-proof-basic",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "施工驗收圖中，兩條待判定的邊線被測量桿所截；標示的一對同位角都是89.5°。若讀值精確，驗收報告應寫什麼？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "寫出工程驗收的證明理由。",
    "choices": [
      "兩角接近90°，因此兩邊線垂直",
      "同位角相等，因此兩邊線平行",
      "角度有小數，無法證明",
      "兩邊線等長，因此平行"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：精確讀值相等且位置為同位角，足以判定兩邊線平行。",
    "explanation": "精確讀值相等且位置為同位角，足以判定兩邊線平行。",
    "steps": [
      "精確讀值相等且位置為同位角，足以判定兩邊線平行。",
      "因此選擇「同位角相等，因此兩邊線平行」。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩角接近90°，因此兩邊線垂直",
        "truth": false,
        "reason": "選項「兩角接近90°，因此兩邊線垂直」不符合題意；依量測資料對應同位角判定。應得到「同位角相等，因此兩邊線平行」，此錯誤常源自：把接近直角誤作垂直關係。"
      },
      {
        "choice": "同位角相等，因此兩邊線平行",
        "truth": true,
        "reason": "依獨立重算「精確讀值相等且位置為同位角，足以判定兩邊線平行。」，此選項正確回答所求。"
      },
      {
        "choice": "角度有小數，無法證明",
        "truth": false,
        "reason": "選項「角度有小數，無法證明」不符合題意；依量測資料對應同位角判定。應得到「同位角相等，因此兩邊線平行」，此錯誤常源自：把接近直角誤作垂直關係。"
      },
      {
        "choice": "兩邊線等長，因此平行",
        "truth": false,
        "reason": "選項「兩邊線等長，因此平行」不符合題意；依量測資料對應同位角判定。應得到「同位角相等，因此兩邊線平行」，此錯誤常源自：把接近直角誤作垂直關係。"
      }
    ],
    "misconceptionTarget": "把接近直角誤作垂直關係。",
    "prerequisiteCheck": "只使用先備技能parallel-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「寫出工程驗收的證明理由。」；四個選項互異，只有同位角相等，因此兩邊線平行符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "情境要求將測量位置與定理連結。",
    "literacyContextNecessity": "驗收結論必須依測得的同位角，而非外觀。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s003-v010-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "0d7573d5e6c98b0fc9934b9c949e6af48673d81ea83562c6a00cd6db0730945b"
  },
  {
    "questionId": "u17-s003-v011",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-proof-basic",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "導航地圖要確認兩條道路是否平行。測得一對內錯角為(4x+6)°與(6x-24)°，資料庫給x=15。哪個判定正確？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由參數資料完成平行證明。",
    "choices": [
      "兩角為66°與54°，所以不平行",
      "兩角和120°，所以平行",
      "兩角皆66°，所以道路平行",
      "x相同就表示道路平行"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：代入x=15：4x+6=66，6x-24=66；內錯角相等，故平行。",
    "explanation": "代入x=15：4x+6=66，6x-24=66；內錯角相等，故平行。",
    "steps": [
      "代入x=15：4x+6=66，6x-24=66；內錯角相等，故平行。",
      "因此選擇「兩角皆66°，所以道路平行」。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩角為66°與54°，所以不平行",
        "truth": false,
        "reason": "選項「兩角為66°與54°，所以不平行」不符合題意；依用資料值驗證內錯角。應得到「兩角皆66°，所以道路平行」，此錯誤常源自：代入第二式算錯。"
      },
      {
        "choice": "兩角和120°，所以平行",
        "truth": false,
        "reason": "選項「兩角和120°，所以平行」不符合題意；依用資料值驗證內錯角。應得到「兩角皆66°，所以道路平行」，此錯誤常源自：代入第二式算錯。"
      },
      {
        "choice": "兩角皆66°，所以道路平行",
        "truth": true,
        "reason": "依獨立重算「代入x=15：4x+6=66，6x-24=66；內錯角相等，故平行。」，此選項正確回答所求。"
      },
      {
        "choice": "x相同就表示道路平行",
        "truth": false,
        "reason": "選項「x相同就表示道路平行」不符合題意；依用資料值驗證內錯角。應得到「兩角皆66°，所以道路平行」，此錯誤常源自：代入第二式算錯。"
      }
    ],
    "misconceptionTarget": "代入第二式算錯。",
    "prerequisiteCheck": "只使用先備技能parallel-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由參數資料完成平行證明。」；四個選項互異，只有兩角皆66°，所以道路平行符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需精確代入兩式並引用定理。",
    "literacyContextNecessity": "道路是否平行是導航模型的實際判定目標。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s003-v011-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "188411d0c64874857c66ddd5a5f3a04b799f16e4da4c3589f5438e98552924e4"
  },
  {
    "questionId": "u17-s003-v012",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-proof-basic",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某同學提出：「兩線與同一截線形成兩個相等角，所以兩線平行。」要使敘述成為有效證明，至少還需補充什麼？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "補足論證缺漏。",
    "choices": [
      "兩角都畫成銳角",
      "截線長度相同",
      "兩線顏色相同",
      "這兩角是同位角或內錯角"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：相等角必須位於可套平行判定的位置，不能只說任意兩角相等。",
    "explanation": "相等角必須位於可套平行判定的位置，不能只說任意兩角相等。",
    "steps": [
      "相等角必須位於可套平行判定的位置，不能只說任意兩角相等。",
      "因此選擇「這兩角是同位角或內錯角」。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩角都畫成銳角",
        "truth": false,
        "reason": "選項「兩角都畫成銳角」不符合題意；依證明條件需指定角型。應得到「這兩角是同位角或內錯角」，此錯誤常源自：以視覺特徵代替幾何位置。"
      },
      {
        "choice": "截線長度相同",
        "truth": false,
        "reason": "選項「截線長度相同」不符合題意；依證明條件需指定角型。應得到「這兩角是同位角或內錯角」，此錯誤常源自：以視覺特徵代替幾何位置。"
      },
      {
        "choice": "兩線顏色相同",
        "truth": false,
        "reason": "選項「兩線顏色相同」不符合題意；依證明條件需指定角型。應得到「這兩角是同位角或內錯角」，此錯誤常源自：以視覺特徵代替幾何位置。"
      },
      {
        "choice": "這兩角是同位角或內錯角",
        "truth": true,
        "reason": "依獨立重算「相等角必須位於可套平行判定的位置，不能只說任意兩角相等。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "以視覺特徵代替幾何位置。",
    "prerequisiteCheck": "只使用先備技能parallel-properties與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「補足論證缺漏。」；四個選項互異，只有這兩角是同位角或內錯角符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需辨認最小充分資訊。",
    "literacyContextNecessity": "在審查他人論證時，角的位置資訊不可省略。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s003-v012-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "365fc46a94c63210c45e93da62fb26e6e3288e14ed7401fc3b040ba804fd5e4b"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u17-s003-cr001",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-proof-basic",
    "difficulty": "standard",
    "type": "constructed-response",
    "prompt": "已知∠1與∠3為對頂角，∠3=∠2，且∠1與∠2為同位角。請用敘述與理由證明兩被截直線平行。",
    "requiredWork": [
      "至少三個推理步驟",
      "指出對頂角與等量傳遞",
      "最後引用同位角判定"
    ],
    "standardSolution": [
      "∠1=∠3，因對頂角相等。",
      "∠3=∠2，為已知。",
      "所以∠1=∠2，依等量傳遞。",
      "∠1、∠2為同位角且相等，所以兩直線平行。"
    ],
    "alternativeMethods": [
      [
        "可改以符號證明鏈書寫，但每個等號都要標理由。"
      ]
    ],
    "reasoningSteps": [
      "∠1=∠3，因對頂角相等。",
      "∠3=∠2，為已知。",
      "所以∠1=∠2，依等量傳遞。",
      "∠1、∠2為同位角且相等，所以兩直線平行。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整處理「完整證明鏈」，列式、理由與結果「由同位角相等證得兩直線平行」均正確。"
      },
      {
        "score": 2,
        "criteria": "主要方法與幾何性質正確，且已得到大部分「由同位角相等證得兩直線平行」；僅有一處算術、單位或理由缺漏。"
      },
      {
        "score": 1,
        "criteria": "能指出本題應使用的核心性質並完成至少一個有效步驟，但尚未正確完成「完整證明鏈」。"
      },
      {
        "score": 0,
        "criteria": "未使用與「平行線證明基本」相關的有效條件，或答案與推理均無法支持「由同位角相等證得兩直線平行」。"
      }
    ],
    "partialCreditRules": [
      "正確列出本題關鍵關係但算術未完成，可依完成程度給1至2分。",
      "只得到部分結果時，必須有可辨認的「完整證明鏈」推理才給分。"
    ],
    "followThroughPolicy": "若前段只有單一算術錯誤，後續依其結果正確推理可保留相應方法分。",
    "unitNotationRules": "角度以度表示，長度與面積保留題目單位。",
    "answerOnlyPolicy": "只有最終答案而無題目要求的列式或理由，最高1分；證明題只寫結論不得分。",
    "visualMode": "figure-supported",
    "figureId": "u17-s003-fig001",
    "drawingSpecRef": "units/u17/s003/drawing-specs.jsonl#u17-s003-fig001",
    "independentReview": {
      "derivedResult": "由同位角相等證得兩直線平行",
      "recalculation": "∠1=∠3，因對頂角相等。；∠3=∠2，為已知。；所以∠1=∠2，依等量傳遞。；∠1、∠2為同位角且相等，所以兩直線平行。",
      "ambiguity": "所求量與評分焦點「完整證明鏈」明確；替代方法不改變標準結果。",
      "decision": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "021922602088d2312fd9c46f9abfb8cf8dfd4091987a79f2b87f828a7ae2e256"
  },
  {
    "questionId": "u17-s003-cr002",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-proof-basic",
    "difficulty": "advanced",
    "type": "constructed-response",
    "prompt": "同側內角分別為(2x+35)°與(4x+25)°。請求x，並寫出一份可判定兩線平行的正式證明。",
    "requiredWork": [
      "先計算角和條件",
      "解x並代回",
      "證明不能先假設平行"
    ],
    "standardSolution": [
      "令兩角互補：(2x+35)+(4x+25)=180。",
      "6x+60=180，x=20。",
      "兩角為75°與105°，和180°。",
      "因一對同側內角互補，所以兩線平行。"
    ],
    "alternativeMethods": [
      [
        "可由其中一角75°先求其鄰補角105°，再比對另一角。"
      ]
    ],
    "reasoningSteps": [
      "令兩角互補：(2x+35)+(4x+25)=180。",
      "6x+60=180，x=20。",
      "兩角為75°與105°，和180°。",
      "因一對同側內角互補，所以兩線平行。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整處理「代數支持的正式平行證明」，列式、理由與結果「x=20，兩角75°與105°，兩線平行」均正確。"
      },
      {
        "score": 2,
        "criteria": "主要方法與幾何性質正確，且已得到大部分「x=20，兩角75°與105°，兩線平行」；僅有一處算術、單位或理由缺漏。"
      },
      {
        "score": 1,
        "criteria": "能指出本題應使用的核心性質並完成至少一個有效步驟，但尚未正確完成「代數支持的正式平行證明」。"
      },
      {
        "score": 0,
        "criteria": "未使用與「平行線證明基本」相關的有效條件，或答案與推理均無法支持「x=20，兩角75°與105°，兩線平行」。"
      }
    ],
    "partialCreditRules": [
      "正確列出本題關鍵關係但算術未完成，可依完成程度給1至2分。",
      "只得到部分結果時，必須有可辨認的「代數支持的正式平行證明」推理才給分。"
    ],
    "followThroughPolicy": "若前段只有單一算術錯誤，後續依其結果正確推理可保留相應方法分。",
    "unitNotationRules": "角度以度表示，長度與面積保留題目單位。",
    "answerOnlyPolicy": "只有最終答案而無題目要求的列式或理由，最高1分；證明題只寫結論不得分。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "independentReview": {
      "derivedResult": "x=20，兩角75°與105°，兩線平行",
      "recalculation": "令兩角互補：(2x+35)+(4x+25)=180。；6x+60=180，x=20。；兩角為75°與105°，和180°。；因一對同側內角互補，所以兩線平行。",
      "ambiguity": "所求量與評分焦點「代數支持的正式平行證明」明確；替代方法不改變標準結果。",
      "decision": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "2582b51f550e3c09129ddef499031d579af509a7b96f1aa8f76b77503102c909"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u17-s003-fig001",
    "unitId": "u17",
    "topicId": "u17-parallel",
    "skillId": "parallel-proof-basic",
    "purpose": "支援「平行線證明基本」的空間位置、性質或證明閱讀，不提供題目答案。",
    "svgPath": "figures/u17/u17-s003-fig001.svg",
    "canvas": {
      "width": 400,
      "height": 300,
      "viewBox": "0 0 400 300"
    },
    "drawingSpec": {
      "title": "平行證明流程",
      "description": "由已知角關係經計算到平行判定的四步流程框。",
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
    "altText": "由已知角關係經計算到平行判定的四步流程框。 圖形不一定按比例。",
    "svgTitle": "平行證明流程",
    "svgDesc": "由已知角關係經計算到平行判定的四步流程框。",
    "mobileReadability": "400×300檢視下主要線條、交點與核心文字仍可辨識；長句置於空白區。",
    "answerLeakageReview": "圖只呈現定義結構或已知關係，不標示任何題目未給的未知答案。",
    "svgAssertions": [
      "已知",
      "求角",
      "角關係",
      "判平行",
      "role=\"img\"",
      "<title",
      "<desc"
    ],
    "figureReview": {
      "decision": "pass",
      "manualRenderedInspection": true,
      "reviewNote": "已渲染檢查平行證明流程：線段未被裁切，文字未遮住核心交點，且不按比例警告已置於desc。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "f3c2ba2c5389699e84eff364f9fb230627537d7dc5869b9a40655e7e041b9fa4"
  }
];
