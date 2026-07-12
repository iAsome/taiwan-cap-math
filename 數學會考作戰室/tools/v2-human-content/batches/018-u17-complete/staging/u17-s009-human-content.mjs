// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u17-s009-lecture-r1",
  "unitId": "u17",
  "numericUnitId": 17,
  "topicId": "u17-parallel",
  "skillId": "parallelogram-diagonal",
  "lockedTitle": "平行四邊形對角線",
  "title": "平行四邊形對角線：交點把每條對角線分成兩等段",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "prerequisiteBridge": "先備技能：parallelogram-opposite-sides。本節只使用該技能已建立的角度、平行或四邊形性質。",
  "learningOutcomes": [
    "辨認兩條對角線",
    "運用對角線互相平分",
    "由對角線互相平分判定平行四邊形"
  ],
  "prerequisites": [
    {
      "skillId": "parallelogram-opposite-sides",
      "requiredLevel": "能正確使用「parallelogram-opposite-sides」中的基本定義與直接性質，不需使用後續技能。"
    }
  ],
  "glossary": [
    {
      "term": "對角線",
      "definition": "連接一對不相鄰頂點的線段"
    },
    {
      "term": "互相平分",
      "definition": "交點同時是兩條線段的中點"
    },
    {
      "term": "中點",
      "definition": "把線段分成兩段等長的點"
    },
    {
      "term": "交點O",
      "definition": "常用來表示兩對角線交點"
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
    "ABCD的對角線是AC與BD，不是四條邊。",
    "在平行四邊形中，若AC與BD交於O，則AO=OC且BO=OD。一般情況下不保證AC=BD，也不保證互相垂直。",
    "反過來，若一個四邊形的兩條對角線互相平分，可判定它是平行四邊形。"
  ],
  "formalDefinitions": [
    {
      "name": "對角線",
      "statement": "連接一對不相鄰頂點的線段"
    },
    {
      "name": "互相平分",
      "statement": "交點同時是兩條線段的中點"
    }
  ],
  "formulas": [
    {
      "formula": "AO=OC，BO=OD",
      "conditions": [
        "平行四邊形對角線互相平分"
      ],
      "meaning": "用於平行四邊形對角線中符合條件的推理或計算。"
    },
    {
      "formula": "AO=OC且BO=OD ⇒ ABCD為平行四邊形",
      "conditions": [
        "O為兩對角線交點"
      ],
      "meaning": "用於平行四邊形對角線中符合條件的推理或計算。"
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
      "instruction": "畫出AC與BD並標交點O",
      "check": "完成第1步後，確認未引入題目未給的條件。"
    },
    {
      "step": 2,
      "instruction": "配對同一條對角線上的兩段",
      "check": "完成第2步後，確認未引入題目未給的條件。"
    },
    {
      "step": 3,
      "instruction": "只使用互相平分，不自行加上垂直或等長",
      "check": "完成第3步後，確認未引入題目未給的條件。"
    },
    {
      "step": 4,
      "instruction": "建立方程",
      "check": "完成第4步後，確認未引入題目未給的條件。"
    },
    {
      "step": 5,
      "instruction": "需要時用逆性質判定",
      "check": "完成第5步後，確認未引入題目未給的條件。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "AO=7",
      "solutionSteps": [
        "OC=7，AC=14。"
      ],
      "answer": "OC=7，AC=14。"
    },
    {
      "exampleId": "L2",
      "prompt": "BO=3x-2、OD=x+8",
      "solutionSteps": [
        "令相等得x=5。"
      ],
      "answer": "令相等得x=5。"
    },
    {
      "exampleId": "L3",
      "prompt": "AC=18",
      "solutionSteps": [
        "AO=OC=9。"
      ],
      "answer": "AO=OC=9。"
    },
    {
      "exampleId": "L4",
      "prompt": "AO=OC且BO=OD",
      "solutionSteps": [
        "可判ABCD為平行四邊形。"
      ],
      "answer": "可判ABCD為平行四邊形。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把AO與BO設相等",
      "why": "它們在不同對角線上",
      "correction": "它們在不同對角線上"
    },
    {
      "mistake": "認為兩對角線一定等長",
      "why": "矩形才必有此附加性質",
      "correction": "矩形才必有此附加性質"
    },
    {
      "mistake": "認為一定垂直",
      "why": "菱形才必有此附加性質",
      "correction": "菱形才必有此附加性質"
    },
    {
      "mistake": "只知AO=OC就判平行四邊形",
      "why": "還需另一條也被平分",
      "correction": "還需另一條也被平分"
    },
    {
      "mistake": "忘記全長是兩段相加",
      "why": "AC=AO+OC",
      "correction": "AC=AO+OC"
    }
  ],
  "selfCheck": [
    "我能否不用目測，說明「平行四邊形對角線」所需的條件？",
    "我是否先辨認角、邊、對角線、底或高的正確位置？",
    "方程解出後是否代回題目真正所求？",
    "角度、長度與面積單位是否正確？"
  ],
  "summary": [
    "ABCD的對角線是AC與BD，不是四條邊。",
    "AO=OC，BO=OD",
    "解題時先確認「平行四邊形對角線互相平分」。"
  ],
  "connections": {
    "previous": "承接parallelogram-opposite-sides。",
    "next": "下一技能依鎖定順序為parallel-lines-distance。"
  },
  "figureReferences": [
    "u17-s009-fig001"
  ],
  "figureAccessibility": "平行四邊形ABCD畫出AC與BD，交點O，半段用刻線配對。 圖形不一定按比例。",
  "practiceLinks": {
    "mcQuestionIds": [
      "u17-s009-v001",
      "u17-s009-v002",
      "u17-s009-v003",
      "u17-s009-v004",
      "u17-s009-v005",
      "u17-s009-v006",
      "u17-s009-v007",
      "u17-s009-v008",
      "u17-s009-v009",
      "u17-s009-v010",
      "u17-s009-v011",
      "u17-s009-v012"
    ],
    "constructedResponseIds": [
      "u17-s009-cr001",
      "u17-s009-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "symbolDefinitionsComplete": true,
    "figureChecked": true,
    "reviewNote": "講義明確區隔「互相平分」與「等長、垂直」三種不同的對角線性質。"
  },
  "contentSha256": "3c3e4cdbedc7184a162a73ffec65b45c7af296ba9763d63823afe626a47dd3db"
};

export const QUESTIONS = [
  {
    "questionId": "u17-s009-v001",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallelogram-diagonal",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "平行四邊形ABCD的對角線是哪兩條？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "辨認對角線。",
    "choices": [
      "AC與BD",
      "AB與CD",
      "AD與BC",
      "AO與BO"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：對角線連接不相鄰頂點，因此為AC與BD。",
    "explanation": "對角線連接不相鄰頂點，因此為AC與BD。",
    "steps": [
      "對角線連接不相鄰頂點，因此為AC與BD。",
      "因此選擇「AC與BD」。"
    ],
    "optionAnalysis": [
      {
        "choice": "AC與BD",
        "truth": true,
        "reason": "依獨立重算「對角線連接不相鄰頂點，因此為AC與BD。」，此選項正確回答所求。"
      },
      {
        "choice": "AB與CD",
        "truth": false,
        "reason": "選項「AB與CD」不符合題意；依對角線定義。應得到「AC與BD」，此錯誤常源自：把對邊或半段當對角線。"
      },
      {
        "choice": "AD與BC",
        "truth": false,
        "reason": "選項「AD與BC」不符合題意；依對角線定義。應得到「AC與BD」，此錯誤常源自：把對邊或半段當對角線。"
      },
      {
        "choice": "AO與BO",
        "truth": false,
        "reason": "選項「AO與BO」不符合題意；依對角線定義。應得到「AC與BD」，此錯誤常源自：把對邊或半段當對角線。"
      }
    ],
    "misconceptionTarget": "把對邊或半段當對角線。",
    "prerequisiteCheck": "只使用先備技能parallelogram-opposite-sides與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「辨認對角線。」；四個選項互異，只有AC與BD符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "直接定義題。",
    "literacyContextNecessity": null,
    "visualMode": "figure-supported",
    "figureId": "u17-s009-fig001",
    "drawingSpecRef": "units/u17/s009/drawing-specs.jsonl#u17-s009-fig001",
    "semanticReviewId": "u17-s009-v001-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "1900df2b2314561af5e4c489c26b8107850d56d1d4e886c3f552edc882471b92"
  },
  {
    "questionId": "u17-s009-v002",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallelogram-diagonal",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "平行四邊形對角線交於O，若AO=5公分，OC為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "直接使用平分性質。",
    "choices": [
      "10公分",
      "5公分",
      "2.5公分",
      "無法判斷"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：對角線互相平分，AO=OC。",
    "explanation": "對角線互相平分，AO=OC。",
    "steps": [
      "對角線互相平分，AO=OC。",
      "因此選擇「5公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "10公分",
        "truth": false,
        "reason": "選項「10公分」不符合題意；依對角線互相平分。應得到「5公分」，此錯誤常源自：把全長當半長。"
      },
      {
        "choice": "5公分",
        "truth": true,
        "reason": "依獨立重算「對角線互相平分，AO=OC。」，此選項正確回答所求。"
      },
      {
        "choice": "2.5公分",
        "truth": false,
        "reason": "選項「2.5公分」不符合題意；依對角線互相平分。應得到「5公分」，此錯誤常源自：把全長當半長。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "選項「無法判斷」不符合題意；依對角線互相平分。應得到「5公分」，此錯誤常源自：把全長當半長。"
      }
    ],
    "misconceptionTarget": "把全長當半長。",
    "prerequisiteCheck": "只使用先備技能parallelogram-opposite-sides與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「直接使用平分性質。」；四個選項互異，只有5公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "單一步驟。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s009-v002-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "10ffb28703318576737874dfdcc1ef1f1df59bc4faaa87a8f4d5379750691137"
  },
  {
    "questionId": "u17-s009-v003",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallelogram-diagonal",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若平行四邊形中AO=7公分，則AC為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由半段求全長。",
    "choices": [
      "3.5公分",
      "7公分",
      "14公分",
      "21公分"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：AO=OC=7，所以AC=14公分。",
    "explanation": "AO=OC=7，所以AC=14公分。",
    "steps": [
      "AO=OC=7，所以AC=14公分。",
      "因此選擇「14公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "3.5公分",
        "truth": false,
        "reason": "選項「3.5公分」不符合題意；依對角線半段與全長。應得到「14公分」，此錯誤常源自：忘記加另一半。"
      },
      {
        "choice": "7公分",
        "truth": false,
        "reason": "選項「7公分」不符合題意；依對角線半段與全長。應得到「14公分」，此錯誤常源自：忘記加另一半。"
      },
      {
        "choice": "14公分",
        "truth": true,
        "reason": "依獨立重算「AO=OC=7，所以AC=14公分。」，此選項正確回答所求。"
      },
      {
        "choice": "21公分",
        "truth": false,
        "reason": "選項「21公分」不符合題意；依對角線半段與全長。應得到「14公分」，此錯誤常源自：忘記加另一半。"
      }
    ],
    "misconceptionTarget": "忘記加另一半。",
    "prerequisiteCheck": "只使用先備技能parallelogram-opposite-sides與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由半段求全長。」；四個選項互異，只有14公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "一次加法。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s009-v003-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "9b66bebf170e1632410268ff21852dd3e3d75aa30370b346a47f1776362bb0d6"
  },
  {
    "questionId": "u17-s009-v004",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallelogram-diagonal",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "平行四邊形中BO=3x-1、OD=x+9，x為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由平分性質解方程。",
    "choices": [
      "4",
      "6",
      "10",
      "5"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：BO=OD，3x-1=x+9，2x=10，x=5。",
    "explanation": "BO=OD，3x-1=x+9，2x=10，x=5。",
    "steps": [
      "BO=OD，3x-1=x+9，2x=10，x=5。",
      "因此選擇「5」。"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": false,
        "reason": "選項「4」不符合題意；依對角線互相平分。應得到「5」，此錯誤常源自：錯配不同對角線的半段。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "選項「6」不符合題意；依對角線互相平分。應得到「5」，此錯誤常源自：錯配不同對角線的半段。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "選項「10」不符合題意；依對角線互相平分。應得到「5」，此錯誤常源自：錯配不同對角線的半段。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "依獨立重算「BO=OD，3x-1=x+9，2x=10，x=5。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "錯配不同對角線的半段。",
    "prerequisiteCheck": "只使用先備技能parallelogram-opposite-sides與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由平分性質解方程。」；四個選項互異，只有5符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "標準代數。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s009-v004-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "82f1da043774d3b7661b93bd15aef36a92f51745174e1c6867b0bac164f10645"
  },
  {
    "questionId": "u17-s009-v005",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallelogram-diagonal",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "平行四邊形對角線AC=24公分，AO是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由全長求半長。",
    "choices": [
      "6公分",
      "12公分",
      "24公分",
      "48公分"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：O是AC中點，所以AO=24÷2=12公分。",
    "explanation": "O是AC中點，所以AO=24÷2=12公分。",
    "steps": [
      "O是AC中點，所以AO=24÷2=12公分。",
      "因此選擇「12公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "6公分",
        "truth": false,
        "reason": "選項「6公分」不符合題意；依對角線交點為中點。應得到「12公分」，此錯誤常源自：把半段誤為全長。"
      },
      {
        "choice": "12公分",
        "truth": true,
        "reason": "依獨立重算「O是AC中點，所以AO=24÷2=12公分。」，此選項正確回答所求。"
      },
      {
        "choice": "24公分",
        "truth": false,
        "reason": "選項「24公分」不符合題意；依對角線交點為中點。應得到「12公分」，此錯誤常源自：把半段誤為全長。"
      },
      {
        "choice": "48公分",
        "truth": false,
        "reason": "選項「48公分」不符合題意；依對角線交點為中點。應得到「12公分」，此錯誤常源自：把半段誤為全長。"
      }
    ],
    "misconceptionTarget": "把半段誤為全長。",
    "prerequisiteCheck": "只使用先備技能parallelogram-opposite-sides與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由全長求半長。」；四個選項互異，只有12公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "直接除2。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s009-v005-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "256b6905e2e7fab707bf2aab4a559a17e2179b516cb1e8c06968a3a333c48857"
  },
  {
    "questionId": "u17-s009-v006",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallelogram-diagonal",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "四邊形ABCD的對角線AC、BD交於O，且AO=OC、BO=OD。可判定ABCD為何？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由對角線判圖形。",
    "choices": [
      "矩形",
      "菱形",
      "平行四邊形",
      "梯形但不一定平行四邊形"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：兩條對角線互相平分，可判定四邊形為平行四邊形。",
    "explanation": "兩條對角線互相平分，可判定四邊形為平行四邊形。",
    "steps": [
      "兩條對角線互相平分，可判定四邊形為平行四邊形。",
      "因此選擇「平行四邊形」。"
    ],
    "optionAnalysis": [
      {
        "choice": "矩形",
        "truth": false,
        "reason": "選項「矩形」不符合題意；依對角線判定。應得到「平行四邊形」，此錯誤常源自：把一般判定過度提升為矩形或菱形。"
      },
      {
        "choice": "菱形",
        "truth": false,
        "reason": "選項「菱形」不符合題意；依對角線判定。應得到「平行四邊形」，此錯誤常源自：把一般判定過度提升為矩形或菱形。"
      },
      {
        "choice": "平行四邊形",
        "truth": true,
        "reason": "依獨立重算「兩條對角線互相平分，可判定四邊形為平行四邊形。」，此選項正確回答所求。"
      },
      {
        "choice": "梯形但不一定平行四邊形",
        "truth": false,
        "reason": "選項「梯形但不一定平行四邊形」不符合題意；依對角線判定。應得到「平行四邊形」，此錯誤常源自：把一般判定過度提升為矩形或菱形。"
      }
    ],
    "misconceptionTarget": "把一般判定過度提升為矩形或菱形。",
    "prerequisiteCheck": "只使用先備技能parallelogram-opposite-sides與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由對角線判圖形。」；四個選項互異，只有平行四邊形符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需使用逆性質。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s009-v006-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "753a25b9d47e9c65afd1697964324c26ec8dae89f61c5bb7225b485ae57f755c"
  },
  {
    "questionId": "u17-s009-v007",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallelogram-diagonal",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一項不是一般平行四邊形對角線必有的性質？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "辨認不必然性質。",
    "choices": [
      "每條對角線被交點平分",
      "AO=OC",
      "BO=OD",
      "兩條對角線互相垂直"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：一般平行四邊形只保證互相平分，不保證垂直。",
    "explanation": "一般平行四邊形只保證互相平分，不保證垂直。",
    "steps": [
      "一般平行四邊形只保證互相平分，不保證垂直。",
      "因此選擇「兩條對角線互相垂直」。"
    ],
    "optionAnalysis": [
      {
        "choice": "每條對角線被交點平分",
        "truth": false,
        "reason": "選項「每條對角線被交點平分」不符合題意；依區分一般與菱形性質。應得到「兩條對角線互相垂直」，此錯誤常源自：把菱形性質套用。"
      },
      {
        "choice": "AO=OC",
        "truth": false,
        "reason": "選項「AO=OC」不符合題意；依區分一般與菱形性質。應得到「兩條對角線互相垂直」，此錯誤常源自：把菱形性質套用。"
      },
      {
        "choice": "BO=OD",
        "truth": false,
        "reason": "選項「BO=OD」不符合題意；依區分一般與菱形性質。應得到「兩條對角線互相垂直」，此錯誤常源自：把菱形性質套用。"
      },
      {
        "choice": "兩條對角線互相垂直",
        "truth": true,
        "reason": "依獨立重算「一般平行四邊形只保證互相平分，不保證垂直。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "把菱形性質套用。",
    "prerequisiteCheck": "只使用先備技能parallelogram-opposite-sides與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「辨認不必然性質。」；四個選項互異，只有兩條對角線互相垂直符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "概念邊界。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s009-v007-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "0247137c502c9ec43eebe15f9611dda2545abf2717a34326d783726bf3236613"
  },
  {
    "questionId": "u17-s009-v008",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallelogram-diagonal",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "平行四邊形中AO=2x+4、OC=5x-14，AC長多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "解方程後求整條對角線。",
    "choices": [
      "32",
      "6",
      "16",
      "64"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：2x+4=5x-14，x=6；AO=OC=16，所以AC=32。",
    "explanation": "2x+4=5x-14，x=6；AO=OC=16，所以AC=32。",
    "steps": [
      "2x+4=5x-14，x=6；AO=16，AC=32。",
      "因此選擇「32」。"
    ],
    "optionAnalysis": [
      {
        "choice": "32",
        "truth": true,
        "reason": "依獨立重算「2x+4=5x-14，x=6；AO=OC=16，所以AC=32。」，此選項正確回答所求。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "選項「6」不符合題意；依對角線半段相等。應得到「32」，此錯誤常源自：只算x或全長加錯。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "選項「16」不符合題意；依對角線半段相等。應得到「32」，此錯誤常源自：只算x或全長加錯。"
      },
      {
        "choice": "64",
        "truth": false,
        "reason": "選項「64」不符合題意；依對角線半段相等。應得到「32」，此錯誤常源自：只算x或全長加錯。"
      }
    ],
    "misconceptionTarget": "只算x或全長加錯。",
    "prerequisiteCheck": "只使用先備技能parallelogram-opposite-sides與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「解方程後求整條對角線。」；四個選項互異，只有32符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需代回並加倍。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s009-v008-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "3592c641ea6d7c6d6bfa40b557b4dd1d4a69084a8f681e684247d39a5d22d9f9"
  },
  {
    "questionId": "u17-s009-v009",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallelogram-diagonal",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "平行四邊形的對角線AC=18公分、BD=26公分，交於O。依序列出AO、OC、BO、OD，哪一組正確？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "同時處理兩條對角線。",
    "choices": [
      "18、18、26、26公分",
      "9、13、9、13公分",
      "9、9、13、13公分",
      "4.5、4.5、6.5、6.5公分"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：O分別平分AC與BD，所以AO=OC=9公分，BO=OD=13公分。",
    "explanation": "O分別平分AC與BD，所以AO=OC=9公分，BO=OD=13公分。",
    "steps": [
      "每條對角線各被平分，產生兩段9與兩段13。",
      "因此選擇「9、9、13、13公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "18、18、26、26公分",
        "truth": false,
        "reason": "選項「18、18、26、26公分」不符合題意；依兩條對角線分別平分。應得到「9、9、13、13公分」，此錯誤常源自：把兩條對角線彼此比較或再除一次。"
      },
      {
        "choice": "9、13、9、13公分",
        "truth": false,
        "reason": "選項「9、13、9、13公分」不符合題意；依兩條對角線分別平分。應得到「9、9、13、13公分」，此錯誤常源自：把兩條對角線彼此比較或再除一次。"
      },
      {
        "choice": "9、9、13、13公分",
        "truth": true,
        "reason": "依獨立重算「O分別平分AC與BD，所以AO=OC=9公分，BO=OD=13公分。」，此選項正確回答所求。"
      },
      {
        "choice": "4.5、4.5、6.5、6.5公分",
        "truth": false,
        "reason": "選項「4.5、4.5、6.5、6.5公分」不符合題意；依兩條對角線分別平分。應得到「9、9、13、13公分」，此錯誤常源自：把兩條對角線彼此比較或再除一次。"
      }
    ],
    "misconceptionTarget": "把兩條對角線彼此比較或再除一次。",
    "prerequisiteCheck": "只使用先備技能parallelogram-opposite-sides與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「同時處理兩條對角線。」；四個選項互異，只有9、9、13、13公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需配對半長。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s009-v009-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "a0daaef11f60dfaafb214fd91ebfe02ae05ba59a1b724833dd0c65aac5adfd56"
  },
  {
    "questionId": "u17-s009-v010",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallelogram-diagonal",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "平行四邊形窗框的兩條對角線交於O。量得AO=38公分，整條AC應為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由量測半段推整體尺寸。",
    "choices": [
      "19公分",
      "38公分",
      "152公分",
      "76公分"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：O為中點，AC=2×38=76公分。",
    "explanation": "O為中點，AC=2×38=76公分。",
    "steps": [
      "O為中點，AC=2×38=76公分。",
      "因此選擇「76公分」。"
    ],
    "optionAnalysis": [
      {
        "choice": "19公分",
        "truth": false,
        "reason": "選項「19公分」不符合題意；依窗框對角線互相平分。應得到「76公分」，此錯誤常源自：把半段當全長。"
      },
      {
        "choice": "38公分",
        "truth": false,
        "reason": "選項「38公分」不符合題意；依窗框對角線互相平分。應得到「76公分」，此錯誤常源自：把半段當全長。"
      },
      {
        "choice": "152公分",
        "truth": false,
        "reason": "選項「152公分」不符合題意；依窗框對角線互相平分。應得到「76公分」，此錯誤常源自：把半段當全長。"
      },
      {
        "choice": "76公分",
        "truth": true,
        "reason": "依獨立重算「O為中點，AC=2×38=76公分。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "把半段當全長。",
    "prerequisiteCheck": "只使用先備技能parallelogram-opposite-sides與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由量測半段推整體尺寸。」；四個選項互異，只有76公分符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "情境需辨認量測位置。",
    "literacyContextNecessity": "實際量測只取得半段，必須用平分性質還原全長。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s009-v010-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "3bc1b896a87651c23434fdad1bf0b60a21817054d46d9f1ad0c2770d762cbe2d"
  },
  {
    "questionId": "u17-s009-v011",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallelogram-diagonal",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "四邊形支架的兩對角線交於O，檢測資料為AO=OC=45公分、BO=OD=30公分。最直接可確認什麼？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "依檢測資料分類外框。",
    "choices": [
      "支架外框是平行四邊形",
      "支架一定是矩形",
      "兩對角線互相垂直",
      "四邊都等長"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：兩對角線互相平分，足以判外框為平行四邊形；其他性質未給。",
    "explanation": "兩對角線互相平分，足以判外框為平行四邊形；其他性質未給。",
    "steps": [
      "兩對角線互相平分，足以判外框為平行四邊形；其他性質未給。",
      "因此選擇「支架外框是平行四邊形」。"
    ],
    "optionAnalysis": [
      {
        "choice": "支架外框是平行四邊形",
        "truth": true,
        "reason": "依獨立重算「兩對角線互相平分，足以判外框為平行四邊形；其他性質未給。」，此選項正確回答所求。"
      },
      {
        "choice": "支架一定是矩形",
        "truth": false,
        "reason": "選項「支架一定是矩形」不符合題意；依對角線判定的工程應用。應得到「支架外框是平行四邊形」，此錯誤常源自：過度判為矩形或菱形。"
      },
      {
        "choice": "兩對角線互相垂直",
        "truth": false,
        "reason": "選項「兩對角線互相垂直」不符合題意；依對角線判定的工程應用。應得到「支架外框是平行四邊形」，此錯誤常源自：過度判為矩形或菱形。"
      },
      {
        "choice": "四邊都等長",
        "truth": false,
        "reason": "選項「四邊都等長」不符合題意；依對角線判定的工程應用。應得到「支架外框是平行四邊形」，此錯誤常源自：過度判為矩形或菱形。"
      }
    ],
    "misconceptionTarget": "過度判為矩形或菱形。",
    "prerequisiteCheck": "只使用先備技能parallelogram-opposite-sides與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「依檢測資料分類外框。」；四個選項互異，只有支架外框是平行四邊形符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需區分可證與不可證。",
    "literacyContextNecessity": "檢測數據就是外框判定的必要依據。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s009-v011-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "23af282b8b2f8958f9c80da01c7d1692599b0d84da7a16354d53b63eb74c0de4"
  },
  {
    "questionId": "u17-s009-v012",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallelogram-diagonal",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個平行四邊形舞台的對角線BD長20公尺，交點O到B的距離標示為(3x-2)公尺。x為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由全長與標示式求參數。",
    "choices": [
      "2",
      "4",
      "6",
      "8"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：BO=BD÷2=10，所以3x-2=10，x=4。",
    "explanation": "BO=BD÷2=10，所以3x-2=10，x=4。",
    "steps": [
      "BO=BD÷2=10，所以3x-2=10，x=4。",
      "因此選擇「4」。"
    ],
    "optionAnalysis": [
      {
        "choice": "2",
        "truth": false,
        "reason": "選項「2」不符合題意；依對角線半長與方程。應得到「4」，此錯誤常源自：把BO設為20。"
      },
      {
        "choice": "4",
        "truth": true,
        "reason": "依獨立重算「BO=BD÷2=10，所以3x-2=10，x=4。」，此選項正確回答所求。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "選項「6」不符合題意；依對角線半長與方程。應得到「4」，此錯誤常源自：把BO設為20。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "選項「8」不符合題意；依對角線半長與方程。應得到「4」，此錯誤常源自：把BO設為20。"
      }
    ],
    "misconceptionTarget": "把BO設為20。",
    "prerequisiteCheck": "只使用先備技能parallelogram-opposite-sides與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由全長與標示式求參數。」；四個選項互異，只有4符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需先除2再解方程。",
    "literacyContextNecessity": "舞台測量標示的是半條對角線，位置資訊不可刪除。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s009-v012-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "4ac59cd799e63bfe39447732f0a04f2465cb9ab9834c6c99f35b534b8bc002b1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u17-s009-cr001",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallelogram-diagonal",
    "difficulty": "standard",
    "type": "constructed-response",
    "prompt": "平行四邊形ABCD的對角線交於O，AO=2x+7、OC=5x-20、BO=9。求x、AC與BD。",
    "requiredWork": [
      "用AO=OC",
      "求AC",
      "用BO=OD求BD"
    ],
    "standardSolution": [
      "2x+7=5x-20，x=9。",
      "AO=OC=25，所以AC=50。",
      "BO=OD=9，所以BD=18。"
    ],
    "alternativeMethods": [
      [
        "可先直接寫AC=2AO、BD=2BO，再代入。"
      ]
    ],
    "reasoningSteps": [
      "2x+7=5x-20，x=9。",
      "AO=OC=25，所以AC=50。",
      "BO=OD=9，所以BD=18。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整處理「兩對角線互相平分」，列式、理由與結果「x=9，AC=50，BD=18」均正確。"
      },
      {
        "score": 2,
        "criteria": "主要方法與幾何性質正確，且已得到大部分「x=9，AC=50，BD=18」；僅有一處算術、單位或理由缺漏。"
      },
      {
        "score": 1,
        "criteria": "能指出本題應使用的核心性質並完成至少一個有效步驟，但尚未正確完成「兩對角線互相平分」。"
      },
      {
        "score": 0,
        "criteria": "未使用與「平行四邊形對角線」相關的有效條件，或答案與推理均無法支持「x=9，AC=50，BD=18」。"
      }
    ],
    "partialCreditRules": [
      "正確列出本題關鍵關係但算術未完成，可依完成程度給1至2分。",
      "只得到部分結果時，必須有可辨認的「兩對角線互相平分」推理才給分。"
    ],
    "followThroughPolicy": "若前段只有單一算術錯誤，後續依其結果正確推理可保留相應方法分。",
    "unitNotationRules": "角度以度表示，長度與面積保留題目單位。",
    "answerOnlyPolicy": "只有最終答案而無題目要求的列式或理由，最高1分；證明題只寫結論不得分。",
    "visualMode": "figure-supported",
    "figureId": "u17-s009-fig001",
    "drawingSpecRef": "units/u17/s009/drawing-specs.jsonl#u17-s009-fig001",
    "independentReview": {
      "derivedResult": "x=9，AC=50，BD=18",
      "recalculation": "2x+7=5x-20，x=9。；AO=OC=25，所以AC=50。；BO=OD=9，所以BD=18。",
      "ambiguity": "所求量與評分焦點「兩對角線互相平分」明確；替代方法不改變標準結果。",
      "decision": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "9265c5c070eae99c5c20f294a6fce051a7d1c1d77f102b154087174f148e6d49"
  },
  {
    "questionId": "u17-s009-cr002",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallelogram-diagonal",
    "difficulty": "advanced",
    "type": "constructed-response",
    "prompt": "四邊形的對角線交於O，量得AO=OC=12、BO=OD=7。請證明此四邊形為平行四邊形，並指出尚不能證明它是矩形的原因。",
    "requiredWork": [
      "引用對角線互相平分判定",
      "得到平行四邊形",
      "說明缺少對角線等長或直角條件"
    ],
    "standardSolution": [
      "AO=OC且BO=OD，故兩對角線互相平分。",
      "依判定，此四邊形為平行四邊形。",
      "AC=24、BD=14並不等長，也未給直角，因此不能證為矩形。"
    ],
    "alternativeMethods": [
      [
        "可只說缺少「平行四邊形對角線等長」的矩形判定條件。"
      ]
    ],
    "reasoningSteps": [
      "AO=OC且BO=OD，故兩對角線互相平分。",
      "依判定，此四邊形為平行四邊形。",
      "AC=24、BD=14並不等長，也未給直角，因此不能證為矩形。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整處理「證明邊界與資料解讀」，列式、理由與結果「可證平行四邊形，不能證矩形」均正確。"
      },
      {
        "score": 2,
        "criteria": "主要方法與幾何性質正確，且已得到大部分「可證平行四邊形，不能證矩形」；僅有一處算術、單位或理由缺漏。"
      },
      {
        "score": 1,
        "criteria": "能指出本題應使用的核心性質並完成至少一個有效步驟，但尚未正確完成「證明邊界與資料解讀」。"
      },
      {
        "score": 0,
        "criteria": "未使用與「平行四邊形對角線」相關的有效條件，或答案與推理均無法支持「可證平行四邊形，不能證矩形」。"
      }
    ],
    "partialCreditRules": [
      "正確列出本題關鍵關係但算術未完成，可依完成程度給1至2分。",
      "只得到部分結果時，必須有可辨認的「證明邊界與資料解讀」推理才給分。"
    ],
    "followThroughPolicy": "若前段只有單一算術錯誤，後續依其結果正確推理可保留相應方法分。",
    "unitNotationRules": "角度以度表示，長度與面積保留題目單位。",
    "answerOnlyPolicy": "只有最終答案而無題目要求的列式或理由，最高1分；證明題只寫結論不得分。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "independentReview": {
      "derivedResult": "可證平行四邊形，不能證矩形",
      "recalculation": "AO=OC且BO=OD，故兩對角線互相平分。；依判定，此四邊形為平行四邊形。；AC=24、BD=14並不等長，也未給直角，因此不能證為矩形。",
      "ambiguity": "所求量與評分焦點「證明邊界與資料解讀」明確；替代方法不改變標準結果。",
      "decision": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "332cc39b2d4977558ea4b0b184862aa263c204e8872ffae9b1d2242d95733340"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u17-s009-fig001",
    "unitId": "u17",
    "topicId": "u17-parallel",
    "skillId": "parallelogram-diagonal",
    "purpose": "支援「平行四邊形對角線」的空間位置、性質或證明閱讀，不提供題目答案。",
    "svgPath": "figures/u17/u17-s009-fig001.svg",
    "canvas": {
      "width": 400,
      "height": 300,
      "viewBox": "0 0 400 300"
    },
    "drawingSpec": {
      "title": "平行四邊形對角線互相平分",
      "description": "平行四邊形ABCD畫出AC與BD，交點O，半段用刻線配對。",
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
    "altText": "平行四邊形ABCD畫出AC與BD，交點O，半段用刻線配對。 圖形不一定按比例。",
    "svgTitle": "平行四邊形對角線互相平分",
    "svgDesc": "平行四邊形ABCD畫出AC與BD，交點O，半段用刻線配對。",
    "mobileReadability": "400×300檢視下主要線條、交點與核心文字仍可辨識；長句置於空白區。",
    "answerLeakageReview": "圖只呈現定義結構或已知關係，不標示任何題目未給的未知答案。",
    "svgAssertions": [
      "O",
      "AO=OC",
      "BO=OD",
      "role=\"img\"",
      "<title",
      "<desc"
    ],
    "figureReview": {
      "decision": "pass",
      "manualRenderedInspection": true,
      "reviewNote": "已渲染檢查平行四邊形對角線互相平分：線段未被裁切，文字未遮住核心交點，且不按比例警告已置於desc。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "0a6d500bba0996da7be255a9850f919f38e967d9f1497a33dd65a13d1e885bca"
  }
];
