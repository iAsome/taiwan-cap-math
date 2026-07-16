// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u17-s018-lecture-r1",
  "unitId": "u17",
  "numericUnitId": 17,
  "topicId": "u17-proof",
  "skillId": "quadrilateral-proof-basic",
  "lockedTitle": "四邊形證明基本",
  "title": "四邊形證明基本：用定義和判定與全等建立可靠證明",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "prerequisiteBridge": "先備技能：quadrilateral-literacy。本節只使用該技能已建立的角度、平行或四邊形性質。",
  "learningOutcomes": [
    "依目標選擇平行四邊形或特殊四邊形判定",
    "以全等或角關係補足條件",
    "寫出不循環的證明"
  ],
  "prerequisites": [
    {
      "skillId": "quadrilateral-literacy",
      "requiredLevel": "能正確使用「quadrilateral-literacy」中的基本定義與直接性質，不需使用後續技能。"
    }
  ],
  "glossary": [
    {
      "term": "判定定理",
      "definition": "由足夠條件確認圖形類型的定理"
    },
    {
      "term": "充分條件",
      "definition": "條件成立即可保證結論"
    },
    {
      "term": "全等三角形",
      "definition": "形狀與大小完全相同的三角形"
    },
    {
      "term": "輔助線",
      "definition": "為推理而新增且合法的線段"
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
    "證明四邊形通常先問「要證成哪一類」，再倒推最容易取得的判定條件。",
    "平行四邊形常用判定：兩組對邊分別平行、兩組對邊分別等長、一組對邊平行且等長、兩對角線互相平分。",
    "要證矩形可在平行四邊形上再證一角90°或對角線等長；要證菱形可再證一組鄰邊等長或對角線垂直。"
  ],
  "formalDefinitions": [
    {
      "name": "判定定理",
      "statement": "由足夠條件確認圖形類型的定理"
    },
    {
      "name": "充分條件",
      "statement": "條件成立即可保證結論"
    }
  ],
  "formulas": [
    {
      "formula": "兩組對邊分別等長 ⇒ 平行四邊形",
      "conditions": [
        "四邊形頂點依序"
      ],
      "meaning": "用於四邊形證明基本中符合條件的推理或計算。"
    },
    {
      "formula": "對角線互相平分 ⇒ 平行四邊形",
      "conditions": [
        "兩對角線交於同一點"
      ],
      "meaning": "用於四邊形證明基本中符合條件的推理或計算。"
    },
    {
      "formula": "平行四邊形且一角90° ⇒ 矩形",
      "conditions": [
        "矩形判定"
      ],
      "meaning": "用於四邊形證明基本中符合條件的推理或計算。"
    },
    {
      "formula": "平行四邊形且鄰邊等長 ⇒ 菱形",
      "conditions": [
        "菱形判定"
      ],
      "meaning": "用於四邊形證明基本中符合條件的推理或計算。"
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
      "instruction": "明確寫已知與待證",
      "check": "完成第1步後，確認未引入題目未給的條件。"
    },
    {
      "step": 2,
      "instruction": "選一條判定定理作目標",
      "check": "完成第2步後，確認未引入題目未給的條件。"
    },
    {
      "step": 3,
      "instruction": "從已知推得該定理所需條件",
      "check": "完成第3步後，確認未引入題目未給的條件。"
    },
    {
      "step": 4,
      "instruction": "逐步寫敘述與理由",
      "check": "完成第4步後，確認未引入題目未給的條件。"
    },
    {
      "step": 5,
      "instruction": "最後引用判定並檢查未使用結論本身",
      "check": "完成第5步後，確認未引入題目未給的條件。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "AB=CD且BC=AD",
      "solutionSteps": [
        "兩組對邊分別等長，故ABCD為平行四邊形。"
      ],
      "answer": "兩組對邊分別等長，故ABCD為平行四邊形。"
    },
    {
      "exampleId": "L2",
      "prompt": "AO=OC且BO=OD",
      "solutionSteps": [
        "對角線互相平分，故為平行四邊形。"
      ],
      "answer": "對角線互相平分，故為平行四邊形。"
    },
    {
      "exampleId": "L3",
      "prompt": "已證平行四邊形且∠A=90°",
      "solutionSteps": [
        "故為矩形。"
      ],
      "answer": "故為矩形。"
    },
    {
      "exampleId": "L4",
      "prompt": "已證平行四邊形且AB=BC",
      "solutionSteps": [
        "故為菱形。"
      ],
      "answer": "故為菱形。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "只列條件不說套哪個判定",
      "why": "最後要引用明確定理",
      "correction": "最後要引用明確定理"
    },
    {
      "mistake": "用待證結論推出中間步驟",
      "why": "形成循環論證",
      "correction": "形成循環論證"
    },
    {
      "mistake": "一組對邊等長就判平行四邊形",
      "why": "條件不足",
      "correction": "條件不足"
    },
    {
      "mistake": "把矩形判定與性質方向混淆",
      "why": "證明時要確認使用的是逆向充分條件",
      "correction": "證明時要確認使用的是逆向充分條件"
    },
    {
      "mistake": "全等對應邊配錯",
      "why": "頂點順序與對應關係須一致",
      "correction": "頂點順序與對應關係須一致"
    }
  ],
  "selfCheck": [
    "我能否不用目測，說明「四邊形證明基本」所需的條件？",
    "我是否先辨認角、邊、對角線、底或高的正確位置？",
    "方程解出後是否代回題目真正所求？",
    "角度、長度與面積單位是否正確？"
  ],
  "summary": [
    "證明四邊形通常先問「要證成哪一類」，再倒推最容易取得的判定條件。",
    "兩組對邊分別等長 ⇒ 平行四邊形",
    "解題時先確認「四邊形頂點依序」。"
  ],
  "connections": {
    "previous": "承接quadrilateral-literacy。",
    "next": "本單元最後技能，供跨單元整合。"
  },
  "figureReferences": [
    "u17-s018-fig001"
  ],
  "figureAccessibility": "四邊形ABCD的兩對角線交於O，標示AO=OC、BO=OD與直角，供分階段證明使用。 圖形不一定按比例。",
  "practiceLinks": {
    "mcQuestionIds": [
      "u17-s018-v001",
      "u17-s018-v002",
      "u17-s018-v003",
      "u17-s018-v004",
      "u17-s018-v005",
      "u17-s018-v006",
      "u17-s018-v007",
      "u17-s018-v008",
      "u17-s018-v009",
      "u17-s018-v010",
      "u17-s018-v011",
      "u17-s018-v012"
    ],
    "constructedResponseIds": [
      "u17-s018-cr001",
      "u17-s018-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "symbolDefinitionsComplete": true,
    "figureChecked": true,
    "reviewNote": "講義以倒推判定條件為主軸，涵蓋平行四邊形、矩形與菱形的基礎證明，未引入高中向量或解析幾何。"
  },
  "contentSha256": "68bae663308a610e17188350dbd004e30211ba5065c460acb78ca2999fccd1c3"
};

export const QUESTIONS = [
  {
    "questionId": "u17-s018-v001",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-proof",
    "skillId": "quadrilateral-proof-basic",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "四邊形ABCD中，若AB∥CD且BC∥AD，可直接證明ABCD為何？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "用定義完成證明。",
    "choices": [
      "矩形",
      "平行四邊形",
      "菱形",
      "正方形"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：兩組對邊分別平行符合平行四邊形定義。",
    "explanation": "兩組對邊分別平行符合平行四邊形定義。",
    "steps": [
      "兩組對邊分別平行符合平行四邊形定義。",
      "因此選擇「平行四邊形」。"
    ],
    "optionAnalysis": [
      {
        "choice": "矩形",
        "truth": false,
        "reason": "選項「矩形」不符合題意；依平行四邊形定義判定。應得到「平行四邊形」，此錯誤常源自：過度分類為特殊四邊形。"
      },
      {
        "choice": "平行四邊形",
        "truth": true,
        "reason": "依獨立重算「兩組對邊分別平行符合平行四邊形定義。」，此選項正確回答所求。"
      },
      {
        "choice": "菱形",
        "truth": false,
        "reason": "選項「菱形」不符合題意；依平行四邊形定義判定。應得到「平行四邊形」，此錯誤常源自：過度分類為特殊四邊形。"
      },
      {
        "choice": "正方形",
        "truth": false,
        "reason": "選項「正方形」不符合題意；依平行四邊形定義判定。應得到「平行四邊形」，此錯誤常源自：過度分類為特殊四邊形。"
      }
    ],
    "misconceptionTarget": "過度分類為特殊四邊形。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-literacy與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「用定義完成證明。」；四個選項互異，只有平行四邊形符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "直接判定。",
    "literacyContextNecessity": null,
    "visualMode": "figure-supported",
    "figureId": "u17-s018-fig001",
    "drawingSpecRef": "units/u17/s018/drawing-specs.jsonl#u17-s018-fig001",
    "semanticReviewId": "u17-s018-v001-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "35326c397aa92b80cab8440302a24b64821d839180f52addc032e7861c3b227d"
  },
  {
    "questionId": "u17-s018-v002",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-proof",
    "skillId": "quadrilateral-proof-basic",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "四邊形ABCD中，若AB=CD且BC=AD，可判定為何？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "使用邊長判定。",
    "choices": [
      "矩形",
      "菱形",
      "平行四邊形",
      "梯形但非平行四邊形"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：兩組對邊分別等長是平行四邊形判定。",
    "explanation": "兩組對邊分別等長是平行四邊形判定。",
    "steps": [
      "兩組對邊分別等長是平行四邊形判定。",
      "因此選擇「平行四邊形」。"
    ],
    "optionAnalysis": [
      {
        "choice": "矩形",
        "truth": false,
        "reason": "選項「矩形」不符合題意；依兩組對邊等長判定。應得到「平行四邊形」，此錯誤常源自：以為需四邊全等。"
      },
      {
        "choice": "菱形",
        "truth": false,
        "reason": "選項「菱形」不符合題意；依兩組對邊等長判定。應得到「平行四邊形」，此錯誤常源自：以為需四邊全等。"
      },
      {
        "choice": "平行四邊形",
        "truth": true,
        "reason": "依獨立重算「兩組對邊分別等長是平行四邊形判定。」，此選項正確回答所求。"
      },
      {
        "choice": "梯形但非平行四邊形",
        "truth": false,
        "reason": "選項「梯形但非平行四邊形」不符合題意；依兩組對邊等長判定。應得到「平行四邊形」，此錯誤常源自：以為需四邊全等。"
      }
    ],
    "misconceptionTarget": "以為需四邊全等。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-literacy與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「使用邊長判定。」；四個選項互異，只有平行四邊形符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "基本判定。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s018-v002-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "36f653d01d032ea5b4cfc7fc4e7731c482881361fe0b63d69e8a8ba31a6fce68"
  },
  {
    "questionId": "u17-s018-v003",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-proof",
    "skillId": "quadrilateral-proof-basic",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "四邊形對角線交於O，AO=OC且BO=OD，可判定為何？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "使用對角線判定。",
    "choices": [
      "矩形",
      "菱形",
      "無法判定",
      "平行四邊形"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：兩條對角線互相平分，故為平行四邊形。",
    "explanation": "兩條對角線互相平分，故為平行四邊形。",
    "steps": [
      "兩條對角線互相平分，故為平行四邊形。",
      "因此選擇「平行四邊形」。"
    ],
    "optionAnalysis": [
      {
        "choice": "矩形",
        "truth": false,
        "reason": "選項「矩形」不符合題意；依對角線判定。應得到「平行四邊形」，此錯誤常源自：過度判為矩形。"
      },
      {
        "choice": "菱形",
        "truth": false,
        "reason": "選項「菱形」不符合題意；依對角線判定。應得到「平行四邊形」，此錯誤常源自：過度判為矩形。"
      },
      {
        "choice": "無法判定",
        "truth": false,
        "reason": "選項「無法判定」不符合題意；依對角線判定。應得到「平行四邊形」，此錯誤常源自：過度判為矩形。"
      },
      {
        "choice": "平行四邊形",
        "truth": true,
        "reason": "依獨立重算「兩條對角線互相平分，故為平行四邊形。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "過度判為矩形。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-literacy與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「使用對角線判定。」；四個選項互異，只有平行四邊形符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "基本逆性質。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s018-v003-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "dd9e421f3747706e288ec2e43cfbf4bc0cca02a2c2da8a8fe4411cc00ab38ec1"
  },
  {
    "questionId": "u17-s018-v004",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-proof",
    "skillId": "quadrilateral-proof-basic",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知ABCD為平行四邊形且∠A=90°，可進一步證明它是？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由附加角證特殊圖形。",
    "choices": [
      "矩形",
      "菱形",
      "梯形",
      "只能是一般平行四邊形"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：平行四邊形有一角為直角，可判為矩形。",
    "explanation": "平行四邊形有一角為直角，可判為矩形。",
    "steps": [
      "平行四邊形有一角為直角，可判為矩形。",
      "因此選擇「矩形」。"
    ],
    "optionAnalysis": [
      {
        "choice": "矩形",
        "truth": true,
        "reason": "依獨立重算「平行四邊形有一角為直角，可判為矩形。」，此選項正確回答所求。"
      },
      {
        "choice": "菱形",
        "truth": false,
        "reason": "選項「菱形」不符合題意；依矩形判定。應得到「矩形」，此錯誤常源自：誤認一角直角就四邊等長。"
      },
      {
        "choice": "梯形",
        "truth": false,
        "reason": "選項「梯形」不符合題意；依矩形判定。應得到「矩形」，此錯誤常源自：誤認一角直角就四邊等長。"
      },
      {
        "choice": "只能是一般平行四邊形",
        "truth": false,
        "reason": "選項「只能是一般平行四邊形」不符合題意；依矩形判定。應得到「矩形」，此錯誤常源自：誤認一角直角就四邊等長。"
      }
    ],
    "misconceptionTarget": "誤認一角直角就四邊等長。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-literacy與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由附加角證特殊圖形。」；四個選項互異，只有矩形符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "標準判定。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s018-v004-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "ad21031fb58457532c4461213f80ae3214c4eb6b0848b729a14731beb2be7b59"
  },
  {
    "questionId": "u17-s018-v005",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-proof",
    "skillId": "quadrilateral-proof-basic",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知ABCD為平行四邊形且AB=BC，可證明它是？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由附加邊長證菱形。",
    "choices": [
      "矩形",
      "梯形",
      "菱形",
      "只能是一般平行四邊形"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：平行四邊形對邊等長，再加鄰邊AB=BC，可得四邊等長，故為菱形。",
    "explanation": "平行四邊形對邊等長，再加鄰邊AB=BC，可得四邊等長，故為菱形。",
    "steps": [
      "平行四邊形對邊等長，再加鄰邊AB=BC，可得四邊等長，故為菱形。",
      "因此選擇「菱形」。"
    ],
    "optionAnalysis": [
      {
        "choice": "矩形",
        "truth": false,
        "reason": "選項「矩形」不符合題意；依菱形判定。應得到「菱形」，此錯誤常源自：只看到一組鄰邊等長而未連結對邊。"
      },
      {
        "choice": "梯形",
        "truth": false,
        "reason": "選項「梯形」不符合題意；依菱形判定。應得到「菱形」，此錯誤常源自：只看到一組鄰邊等長而未連結對邊。"
      },
      {
        "choice": "菱形",
        "truth": true,
        "reason": "依獨立重算「平行四邊形對邊等長，再加鄰邊AB=BC，可得四邊等長，故為菱形。」，此選項正確回答所求。"
      },
      {
        "choice": "只能是一般平行四邊形",
        "truth": false,
        "reason": "選項「只能是一般平行四邊形」不符合題意；依菱形判定。應得到「菱形」，此錯誤常源自：只看到一組鄰邊等長而未連結對邊。"
      }
    ],
    "misconceptionTarget": "只看到一組鄰邊等長而未連結對邊。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-literacy與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由附加邊長證菱形。」；四個選項互異，只有菱形符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需補足推理鏈。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s018-v005-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "e29e6bf31224da29b4e903283a77886161a455448ad28f156f5866a593275d6d"
  },
  {
    "questionId": "u17-s018-v006",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-proof",
    "skillId": "quadrilateral-proof-basic",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "要證平行四邊形ABCD是正方形，下列哪組附加條件足夠？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "選擇充分條件。",
    "choices": [
      "只有一角90°",
      "只有AB=BC",
      "只有對角線互相平分",
      "一角90°且AB=BC"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：一角90°使其為矩形，鄰邊等長使其為菱形；同時成立即正方形。",
    "explanation": "一角90°使其為矩形，鄰邊等長使其為菱形；同時成立即正方形。",
    "steps": [
      "一角90°使其為矩形，鄰邊等長使其為菱形；同時成立即正方形。",
      "因此選擇「一角90°且AB=BC」。"
    ],
    "optionAnalysis": [
      {
        "choice": "只有一角90°",
        "truth": false,
        "reason": "選項「只有一角90°」不符合題意；依正方形的雙重判定。應得到「一角90°且AB=BC」，此錯誤常源自：只證成矩形或菱形就停止。"
      },
      {
        "choice": "只有AB=BC",
        "truth": false,
        "reason": "選項「只有AB=BC」不符合題意；依正方形的雙重判定。應得到「一角90°且AB=BC」，此錯誤常源自：只證成矩形或菱形就停止。"
      },
      {
        "choice": "只有對角線互相平分",
        "truth": false,
        "reason": "選項「只有對角線互相平分」不符合題意；依正方形的雙重判定。應得到「一角90°且AB=BC」，此錯誤常源自：只證成矩形或菱形就停止。"
      },
      {
        "choice": "一角90°且AB=BC",
        "truth": true,
        "reason": "依獨立重算「一角90°使其為矩形，鄰邊等長使其為菱形；同時成立即正方形。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "只證成矩形或菱形就停止。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-literacy與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「選擇充分條件。」；四個選項互異，只有一角90°且AB=BC符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需合併兩類判定。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s018-v006-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "13eccacff93afef5b89bf240b4994c72210d1182768bee8a18de2b1dbba61a4e"
  },
  {
    "questionId": "u17-s018-v007",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-proof",
    "skillId": "quadrilateral-proof-basic",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "證明稿：「因ABCD是矩形，所以AC=BD；又因AC=BD，所以ABCD是矩形。」主要錯誤為何？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "審查證明結構。",
    "choices": [
      "循環論證",
      "單位錯誤",
      "角度和錯誤",
      "矩形沒有對角線"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：先用待證矩形性質，再由同一資訊返回矩形，沒有獨立條件。",
    "explanation": "先用待證矩形性質，再由同一資訊返回矩形，沒有獨立條件。",
    "steps": [
      "先用待證矩形性質，再由同一資訊返回矩形，沒有獨立條件。",
      "因此選擇「循環論證」。"
    ],
    "optionAnalysis": [
      {
        "choice": "循環論證",
        "truth": true,
        "reason": "依獨立重算「先用待證矩形性質，再由同一資訊返回矩形，沒有獨立條件。」，此選項正確回答所求。"
      },
      {
        "choice": "單位錯誤",
        "truth": false,
        "reason": "選項「單位錯誤」不符合題意；依禁止循環論證。應得到「循環論證」，此錯誤常源自：以雙向敘述誤當證明。"
      },
      {
        "choice": "角度和錯誤",
        "truth": false,
        "reason": "選項「角度和錯誤」不符合題意；依禁止循環論證。應得到「循環論證」，此錯誤常源自：以雙向敘述誤當證明。"
      },
      {
        "choice": "矩形沒有對角線",
        "truth": false,
        "reason": "選項「矩形沒有對角線」不符合題意；依禁止循環論證。應得到「循環論證」，此錯誤常源自：以雙向敘述誤當證明。"
      }
    ],
    "misconceptionTarget": "以雙向敘述誤當證明。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-literacy與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「審查證明結構。」；四個選項互異，只有循環論證符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需辨認邏輯錯誤。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s018-v007-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "ef2924f89ea528d2b7a4cb166e6975eb21f683f0f2e438ef617b933b459db49a"
  },
  {
    "questionId": "u17-s018-v008",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-proof",
    "skillId": "quadrilateral-proof-basic",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "只知道四邊形一組對邊平行，另一組對邊等長，能否判定為平行四邊形？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "分析資訊是否充分。",
    "choices": [
      "能，已有平行與等長",
      "不能，兩條資訊不在同一組且不足",
      "能，任何一平行一等長都可",
      "不能，因平行四邊形不能有等長邊"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：一組對邊平行且同一組等長才是判定；分屬不同組時不足。",
    "explanation": "一組對邊平行且同一組等長才是判定；分屬不同組時不足。",
    "steps": [
      "一組對邊平行且同一組等長才是判定；分屬不同組時不足。",
      "因此選擇「不能，兩條資訊不在同一組且不足」。"
    ],
    "optionAnalysis": [
      {
        "choice": "能，已有平行與等長",
        "truth": false,
        "reason": "選項「能，已有平行與等長」不符合題意；依判定條件的配對。應得到「不能，兩條資訊不在同一組且不足」，此錯誤常源自：忽略「同一組」限制。"
      },
      {
        "choice": "不能，兩條資訊不在同一組且不足",
        "truth": true,
        "reason": "依獨立重算「一組對邊平行且同一組等長才是判定；分屬不同組時不足。」，此選項正確回答所求。"
      },
      {
        "choice": "能，任何一平行一等長都可",
        "truth": false,
        "reason": "選項「能，任何一平行一等長都可」不符合題意；依判定條件的配對。應得到「不能，兩條資訊不在同一組且不足」，此錯誤常源自：忽略「同一組」限制。"
      },
      {
        "choice": "不能，因平行四邊形不能有等長邊",
        "truth": false,
        "reason": "選項「不能，因平行四邊形不能有等長邊」不符合題意；依判定條件的配對。應得到「不能，兩條資訊不在同一組且不足」，此錯誤常源自：忽略「同一組」限制。"
      }
    ],
    "misconceptionTarget": "忽略「同一組」限制。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-literacy與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「分析資訊是否充分。」；四個選項互異，只有不能，兩條資訊不在同一組且不足符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需精確配對條件。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s018-v008-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "fa10b1abdeb20f8469ed3157a42661918c0c474f52f5a99b37362fbfdba2726e"
  },
  {
    "questionId": "u17-s018-v009",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-proof",
    "skillId": "quadrilateral-proof-basic",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "四邊形ABCD中，對角線交於O。已知AO=OC，但未給BO與OD關係。能否用對角線判定平行四邊形？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "找出缺少的證明條件。",
    "choices": [
      "能，一條對角線被平分已足夠",
      "能，因O是AC中點",
      "不能，因對角線不可相交",
      "不能，還需BO=OD"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：兩條對角線都需互相平分，只有AC被平分不足。",
    "explanation": "兩條對角線都需互相平分，只有AC被平分不足。",
    "steps": [
      "兩條對角線都需互相平分，只有AC被平分不足。",
      "因此選擇「不能，還需BO=OD」。"
    ],
    "optionAnalysis": [
      {
        "choice": "能，一條對角線被平分已足夠",
        "truth": false,
        "reason": "選項「能，一條對角線被平分已足夠」不符合題意；依完整對角線判定。應得到「不能，還需BO=OD」，此錯誤常源自：把部分條件當完整條件。"
      },
      {
        "choice": "能，因O是AC中點",
        "truth": false,
        "reason": "選項「能，因O是AC中點」不符合題意；依完整對角線判定。應得到「不能，還需BO=OD」，此錯誤常源自：把部分條件當完整條件。"
      },
      {
        "choice": "不能，因對角線不可相交",
        "truth": false,
        "reason": "選項「不能，因對角線不可相交」不符合題意；依完整對角線判定。應得到「不能，還需BO=OD」，此錯誤常源自：把部分條件當完整條件。"
      },
      {
        "choice": "不能，還需BO=OD",
        "truth": true,
        "reason": "依獨立重算「兩條對角線都需互相平分，只有AC被平分不足。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "把部分條件當完整條件。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-literacy與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「找出缺少的證明條件。」；四個選項互異，只有不能，還需BO=OD符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需理解「互相」二字。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s018-v009-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "6ccaab9c30ef6372e1ed34a921ca8ed9c295dfd80b2ea1e14b54aa171a70f124"
  },
  {
    "questionId": "u17-s018-v010",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-proof",
    "skillId": "quadrilateral-proof-basic",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "施工圖標示四邊形鋼框AB=CD、BC=AD。驗收員要證明外框為平行四邊形，最精確的理由是？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "撰寫驗收理由。",
    "choices": [
      "兩組對邊分別等長，所以是平行四邊形",
      "四邊看起來對稱，所以是平行四邊形",
      "有兩條等長邊，所以是矩形",
      "對角線可能相交，所以是平行四邊形"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：已知正好符合兩組對邊分別等長的判定。",
    "explanation": "已知正好符合兩組對邊分別等長的判定。",
    "steps": [
      "已知正好符合兩組對邊分別等長的判定。",
      "因此選擇「兩組對邊分別等長，所以是平行四邊形」。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩組對邊分別等長，所以是平行四邊形",
        "truth": true,
        "reason": "依獨立重算「已知正好符合兩組對邊分別等長的判定。」，此選項正確回答所求。"
      },
      {
        "choice": "四邊看起來對稱，所以是平行四邊形",
        "truth": false,
        "reason": "選項「四邊看起來對稱，所以是平行四邊形」不符合題意；依工程證明引用判定。應得到「兩組對邊分別等長，所以是平行四邊形」，此錯誤常源自：以外觀或可能性代替已知。"
      },
      {
        "choice": "有兩條等長邊，所以是矩形",
        "truth": false,
        "reason": "選項「有兩條等長邊，所以是矩形」不符合題意；依工程證明引用判定。應得到「兩組對邊分別等長，所以是平行四邊形」，此錯誤常源自：以外觀或可能性代替已知。"
      },
      {
        "choice": "對角線可能相交，所以是平行四邊形",
        "truth": false,
        "reason": "選項「對角線可能相交，所以是平行四邊形」不符合題意；依工程證明引用判定。應得到「兩組對邊分別等長，所以是平行四邊形」，此錯誤常源自：以外觀或可能性代替已知。"
      }
    ],
    "misconceptionTarget": "以外觀或可能性代替已知。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-literacy與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「撰寫驗收理由。」；四個選項互異，只有兩組對邊分別等長，所以是平行四邊形符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "情境要求選擇正式證據。",
    "literacyContextNecessity": "驗收報告必須由標示尺寸支持結論。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s018-v010-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "761454642a9be3b142b3d763f0b2e4c2f8c67d93a6a4e3f7aa3b9be98b474caa"
  },
  {
    "questionId": "u17-s018-v011",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-proof",
    "skillId": "quadrilateral-proof-basic",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個四邊形支架的對角線交點O滿足AO=OC、BO=OD，另量得AC=BD。可證明支架為何？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由對角線資料證矩形。",
    "choices": [
      "只能證平行四邊形",
      "矩形",
      "菱形",
      "正方形"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：前兩式先證平行四邊形；平行四邊形對角線等長可再判為矩形。",
    "explanation": "前兩式先證平行四邊形；平行四邊形對角線等長可再判為矩形。",
    "steps": [
      "前兩式先證平行四邊形；平行四邊形對角線等長可再判為矩形。",
      "因此選擇「矩形」。"
    ],
    "optionAnalysis": [
      {
        "choice": "只能證平行四邊形",
        "truth": false,
        "reason": "選項「只能證平行四邊形」不符合題意；依兩階段特殊四邊形證明。應得到「矩形」，此錯誤常源自：只停在第一階段或誤判菱形。"
      },
      {
        "choice": "矩形",
        "truth": true,
        "reason": "依獨立重算「前兩式先證平行四邊形；平行四邊形對角線等長可再判為矩形。」，此選項正確回答所求。"
      },
      {
        "choice": "菱形",
        "truth": false,
        "reason": "選項「菱形」不符合題意；依兩階段特殊四邊形證明。應得到「矩形」，此錯誤常源自：只停在第一階段或誤判菱形。"
      },
      {
        "choice": "正方形",
        "truth": false,
        "reason": "選項「正方形」不符合題意；依兩階段特殊四邊形證明。應得到「矩形」，此錯誤常源自：只停在第一階段或誤判菱形。"
      }
    ],
    "misconceptionTarget": "只停在第一階段或誤判菱形。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-literacy與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由對角線資料證矩形。」；四個選項互異，只有矩形符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需連續使用兩個判定。",
    "literacyContextNecessity": "支架量測資料分別負責平行四邊形與矩形判定。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s018-v011-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "b1f5b6d49c79ef8217e815cd760204a9284e8de595fa377a14f6e40d46ac1b56"
  },
  {
    "questionId": "u17-s018-v012",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-proof",
    "skillId": "quadrilateral-proof-basic",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某證明要說明平行四邊形ABCD為菱形。已知對角線AC⊥BD。最合理的證明結論是？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "選擇正確特殊判定。",
    "choices": [
      "對角線等長，因此為菱形",
      "一角90°，因此為菱形",
      "平行四邊形若對角線互相垂直，則ABCD為菱形",
      "四角相等，因此為菱形"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：在已知是平行四邊形的前提下，對角線垂直是菱形判定之一。",
    "explanation": "在已知是平行四邊形的前提下，對角線垂直是菱形判定之一。",
    "steps": [
      "在已知是平行四邊形的前提下，對角線垂直是菱形判定之一。",
      "因此選擇「平行四邊形若對角線互相垂直，則ABCD為菱形」。"
    ],
    "optionAnalysis": [
      {
        "choice": "對角線等長，因此為菱形",
        "truth": false,
        "reason": "選項「對角線等長，因此為菱形」不符合題意；依菱形的對角線判定。應得到「平行四邊形若對角線互相垂直，則ABCD為菱形」，此錯誤常源自：混入矩形的等長性質。"
      },
      {
        "choice": "一角90°，因此為菱形",
        "truth": false,
        "reason": "選項「一角90°，因此為菱形」不符合題意；依菱形的對角線判定。應得到「平行四邊形若對角線互相垂直，則ABCD為菱形」，此錯誤常源自：混入矩形的等長性質。"
      },
      {
        "choice": "平行四邊形若對角線互相垂直，則ABCD為菱形",
        "truth": true,
        "reason": "依獨立重算「在已知是平行四邊形的前提下，對角線垂直是菱形判定之一。」，此選項正確回答所求。"
      },
      {
        "choice": "四角相等，因此為菱形",
        "truth": false,
        "reason": "選項「四角相等，因此為菱形」不符合題意；依菱形的對角線判定。應得到「平行四邊形若對角線互相垂直，則ABCD為菱形」，此錯誤常源自：混入矩形的等長性質。"
      }
    ],
    "misconceptionTarget": "混入矩形的等長性質。",
    "prerequisiteCheck": "只使用先備技能quadrilateral-literacy與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「選擇正確特殊判定。」；四個選項互異，只有平行四邊形若對角線互相垂直，則ABCD為菱形符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需注意前提已是平行四邊形。",
    "literacyContextNecessity": "證明目標與已知垂直資料直接對應。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s018-v012-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "fa0aa0aafcceab4f5478f25964d950a48887162b9253d144c10c2541697dc8ac"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u17-s018-cr001",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-proof",
    "skillId": "quadrilateral-proof-basic",
    "difficulty": "standard",
    "type": "constructed-response",
    "prompt": "四邊形ABCD中，AB=CD、BC=AD。請證明ABCD為平行四邊形；若再知∠A=90°，證明它是矩形。",
    "requiredWork": [
      "先引用兩組對邊等長判定",
      "得到平行四邊形",
      "再引用一角直角的矩形判定"
    ],
    "standardSolution": [
      "AB=CD且BC=AD，兩組對邊分別等長。",
      "所以ABCD為平行四邊形。",
      "又∠A=90°，平行四邊形有一個直角，因此ABCD為矩形。"
    ],
    "alternativeMethods": [
      [
        "可畫對角線並以SSS證兩三角形全等，再推平行；但直接使用判定較精簡。"
      ]
    ],
    "reasoningSteps": [
      "AB=CD且BC=AD，兩組對邊分別等長。",
      "所以ABCD為平行四邊形。",
      "又∠A=90°，平行四邊形有一個直角，因此ABCD為矩形。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整處理「兩階段四邊形證明」，列式、理由與結果「ABCD為矩形」均正確。"
      },
      {
        "score": 2,
        "criteria": "主要方法與幾何性質正確，且已得到大部分「ABCD為矩形」；僅有一處算術、單位或理由缺漏。"
      },
      {
        "score": 1,
        "criteria": "能指出本題應使用的核心性質並完成至少一個有效步驟，但尚未正確完成「兩階段四邊形證明」。"
      },
      {
        "score": 0,
        "criteria": "未使用與「四邊形證明基本」相關的有效條件，或答案與推理均無法支持「ABCD為矩形」。"
      }
    ],
    "partialCreditRules": [
      "正確列出本題關鍵關係但算術未完成，可依完成程度給1至2分。",
      "只得到部分結果時，必須有可辨認的「兩階段四邊形證明」推理才給分。"
    ],
    "followThroughPolicy": "若前段只有單一算術錯誤，後續依其結果正確推理可保留相應方法分。",
    "unitNotationRules": "角度以度表示，長度與面積保留題目單位。",
    "answerOnlyPolicy": "只有最終答案而無題目要求的列式或理由，最高1分；證明題只寫結論不得分。",
    "visualMode": "figure-supported",
    "figureId": "u17-s018-fig001",
    "drawingSpecRef": "units/u17/s018/drawing-specs.jsonl#u17-s018-fig001",
    "independentReview": {
      "derivedResult": "ABCD為矩形",
      "recalculation": "AB=CD且BC=AD，兩組對邊分別等長。；所以ABCD為平行四邊形。；又∠A=90°，平行四邊形有一個直角，因此ABCD為矩形。",
      "ambiguity": "所求量與評分焦點「兩階段四邊形證明」明確；替代方法不改變標準結果。",
      "decision": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "3568bcca3b45ce34c3470e2279beb4acfd2a2f26dcafe1877fd69a7c61e17b00"
  },
  {
    "questionId": "u17-s018-cr002",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-proof",
    "skillId": "quadrilateral-proof-basic",
    "difficulty": "advanced",
    "type": "constructed-response",
    "prompt": "四邊形ABCD的對角線AC、BD交於O，AO=OC、BO=OD且AC⊥BD。請證明ABCD為菱形。",
    "requiredWork": [
      "由互相平分先證平行四邊形",
      "再用對角線垂直判菱形",
      "避免直接由垂直下結論"
    ],
    "standardSolution": [
      "AO=OC且BO=OD，所以兩對角線互相平分。",
      "因此ABCD為平行四邊形。",
      "又AC⊥BD；平行四邊形若對角線互相垂直，則為菱形，故ABCD為菱形。"
    ],
    "alternativeMethods": [
      [
        "也可由四個直角三角形的全等推得四邊等長，再用菱形定義。"
      ]
    ],
    "reasoningSteps": [
      "AO=OC且BO=OD，所以兩對角線互相平分。",
      "因此ABCD為平行四邊形。",
      "又AC⊥BD；平行四邊形若對角線互相垂直，則為菱形，故ABCD為菱形。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整處理「對角線資料的分階段證明」，列式、理由與結果「ABCD為菱形」均正確。"
      },
      {
        "score": 2,
        "criteria": "主要方法與幾何性質正確，且已得到大部分「ABCD為菱形」；僅有一處算術、單位或理由缺漏。"
      },
      {
        "score": 1,
        "criteria": "能指出本題應使用的核心性質並完成至少一個有效步驟，但尚未正確完成「對角線資料的分階段證明」。"
      },
      {
        "score": 0,
        "criteria": "未使用與「四邊形證明基本」相關的有效條件，或答案與推理均無法支持「ABCD為菱形」。"
      }
    ],
    "partialCreditRules": [
      "正確列出本題關鍵關係但算術未完成，可依完成程度給1至2分。",
      "只得到部分結果時，必須有可辨認的「對角線資料的分階段證明」推理才給分。"
    ],
    "followThroughPolicy": "若前段只有單一算術錯誤，後續依其結果正確推理可保留相應方法分。",
    "unitNotationRules": "角度以度表示，長度與面積保留題目單位。",
    "answerOnlyPolicy": "只有最終答案而無題目要求的列式或理由，最高1分；證明題只寫結論不得分。",
    "visualMode": "figure-supported",
    "figureId": "u17-s018-fig001",
    "drawingSpecRef": "units/u17/s018/drawing-specs.jsonl#u17-s018-fig001",
    "independentReview": {
      "derivedResult": "ABCD為菱形",
      "recalculation": "AO=OC且BO=OD，所以兩對角線互相平分。；因此ABCD為平行四邊形。；又AC⊥BD；平行四邊形若對角線互相垂直，則為菱形，故ABCD為菱形。",
      "ambiguity": "所求量與評分焦點「對角線資料的分階段證明」明確；替代方法不改變標準結果。",
      "decision": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "3d1bbffcff072bce9df9318c6e6841169a8f79a0afacae9b6ea268a13b32e54f"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u17-s018-fig001",
    "unitId": "u17",
    "topicId": "u17-proof",
    "skillId": "quadrilateral-proof-basic",
    "purpose": "支援「四邊形證明基本」的空間位置、性質或證明閱讀，不提供題目答案。",
    "svgPath": "figures/u17/u17-s018-fig001.svg",
    "canvas": {
      "width": 400,
      "height": 300,
      "viewBox": "0 0 400 300"
    },
    "drawingSpec": {
      "title": "四邊形證明資料圖",
      "description": "四邊形ABCD的兩對角線交於O，標示AO=OC、BO=OD與直角，供分階段證明使用。",
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
    "altText": "四邊形ABCD的兩對角線交於O，標示AO=OC、BO=OD與直角，供分階段證明使用。 圖形不一定按比例。",
    "svgTitle": "四邊形證明資料圖",
    "svgDesc": "四邊形ABCD的兩對角線交於O，標示AO=OC、BO=OD與直角，供分階段證明使用。",
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
      "reviewNote": "已渲染檢查四邊形證明資料圖：線段未被裁切，文字未遮住核心交點，且不按比例警告已置於desc。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "ec2fffd6b6d8285af3f0b77fd1082e1aa7218cf815743bb140657362f6348311"
  }
];
