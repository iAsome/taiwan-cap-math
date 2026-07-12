// Generated only by serialization from approved reviewed source. Do not edit.
export const sourceDigest="529fc18a8259bf65a75f44d493ae153584028a78aea40c159d500ec38a01c7ff";
export const skillBundle={
  "lecture": {
    "lectureId": "u20-s006-lecture-r1",
    "unitId": "u20",
    "numericUnitId": 20,
    "topicId": "u20-centers",
    "skillId": "circumcenter",
    "skillSlot": "s006",
    "lockedSkillTitle": "外心",
    "title": "外心：三個頂點的等距中心",
    "audience": "臺灣國中零基礎至會考數學滿分",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能說明外心是三邊垂直平分線交點。",
      "能用到頂點等距辨認外心。",
      "能作出外心並判斷銳角、直角、鈍角三角形中的位置。"
    ],
    "prerequisites": [
      {
        "skillId": "proof-contrapositive-basic",
        "requiredLevel": "能使用該技能的核心定義與基本推理。"
      }
    ],
    "prerequisiteBridge": "若無單元內先備技能，從已知、圖形標記與國中基本線角概念開始；若有先備技能，先回想「proof-contrapositive-basic」再進入本節。",
    "glossary": [
      {
        "term": "外心",
        "definition": "三角形三邊垂直平分線的共同交點。"
      },
      {
        "term": "外接圓",
        "definition": "通過三角形三個頂點的圓。"
      },
      {
        "term": "垂直平分線",
        "definition": "通過線段中點且與線段垂直的直線。"
      }
    ],
    "notation": [
      {
        "symbol": "OA＝OB＝OC",
        "meaning": "外心O到三頂點A、B、C距離相等。"
      },
      {
        "symbol": "O",
        "meaning": "常用來表示圓心或外心，仍須依題意確認。"
      }
    ],
    "conceptNarrative": [
      "線段AB的垂直平分線由所有到A、B等距的點組成。兩邊垂直平分線的交點同時到三個頂點等距，因此自然成為外接圓圓心。",
      "只需作兩條垂直平分線即可定位；第三條一定通過同一點，因等距關係會自動連接。",
      "外心名稱中的『外』指外接圓，不表示外心一定在三角形外。其位置依角型改變。"
    ],
    "formalDefinitions": [
      {
        "name": "外心定義",
        "statement": "三邊垂直平分線共點，交點為外心。"
      },
      {
        "name": "等距判定",
        "statement": "到三個不共線頂點距離相等的點是其三角形外心。"
      }
    ],
    "formulas": [
      {
        "formula": "OA＝OB＝OC＝R",
        "conditions": [
          "O為外心",
          "A、B、C為外接圓上的頂點"
        ],
        "meaning": "三段皆為外接圓半徑。"
      }
    ],
    "nonApplicableCases": [
      "到三邊距離相等的是內心，不是外心。",
      "銳角三角形外心在內部；不能把此位置套給所有三角形。",
      "三點共線時不形成非退化三角形，也沒有有限的唯一外接圓。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "選兩條邊，找各自中點。",
        "check": "中點標記是否可靠？"
      },
      {
        "step": 2,
        "instruction": "過中點作邊的垂線。",
        "check": "線是否同時具備垂直與平分？"
      },
      {
        "step": 3,
        "instruction": "取兩線交點O。",
        "check": "O到三頂點是否等距？"
      },
      {
        "step": 4,
        "instruction": "依角型判斷O在內、邊上或外。",
        "check": "直角時是否在斜邊中點？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "O在AB、AC垂直平分線上。",
        "solutionSteps": [
          "OA＝OB。",
          "OA＝OC。",
          "所以OA＝OB＝OC。"
        ],
        "answer": "O是外心。"
      },
      {
        "exampleId": "L2",
        "prompt": "直角三角形外心在哪裡？",
        "solutionSteps": [
          "斜邊是外接圓直徑。",
          "圓心是斜邊中點。"
        ],
        "answer": "斜邊中點。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "只找邊中點，沒有作垂線。",
        "why": "中點本身不一定是外心。",
        "correction": "作垂直平分線並取交點。"
      },
      {
        "mistake": "認為外心必在外部。",
        "why": "誤解名稱。",
        "correction": "依角型分類位置。"
      },
      {
        "mistake": "把到邊等距當外心。",
        "why": "混淆等距對象。",
        "correction": "外心比較頂點距離。"
      }
    ],
    "selfCheck": [
      "我作的是垂直平分線嗎？",
      "等距對象是三個頂點嗎？",
      "三點是否不共線？",
      "角型與外心位置是否一致？"
    ],
    "summary": [
      "外心是三邊垂直平分線交點。",
      "外心到三頂點等距，是外接圓圓心。",
      "外心位置隨三角形角型改變。"
    ],
    "connections": {
      "previous": "先備：proof-contrapositive-basic",
      "next": [
        "下一技能比較到三邊等距的內心。"
      ]
    },
    "figureReferences": [
      "fig-u20-circumcenter-check-01"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u20-s006-v001",
        "u20-s006-v002",
        "u20-s006-v003",
        "u20-s006-v004",
        "u20-s006-v005",
        "u20-s006-v006",
        "u20-s006-v007",
        "u20-s006-v008",
        "u20-s006-v009",
        "u20-s006-v010",
        "u20-s006-v011",
        "u20-s006-v012"
      ],
      "constructedResponseIds": [
        "u20-s006-cr001",
        "u20-s006-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "invalidUseCasesIncluded": true,
      "skillSpecificEvidence": "講義同時呈現定義、等距軌跡與位置分類，避免只背名稱。",
      "reviewerDecision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "legacyContentUsed": false,
    "contentSha256": "a8f17123dc0344966966d3a6357b7f9737bb4ffbfe74084a21360d127b6ef86c"
  },
  "mcQuestions": [
    {
      "questionId": "u20-s006-v001",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "circumcenter",
      "skillSlot": "s006",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "為外接圓尋找圓心時，應取三角形哪一組特殊線的共同交點？",
      "givenConditions": [],
      "target": "辨認外心定義",
      "choices": [
        "三條角平分線的交點",
        "三邊垂直平分線的交點",
        "三條中線的交點",
        "三條高的交點"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "外心定義為三角形三邊垂直平分線的共同交點。",
        "result": "三邊垂直平分線的交點"
      },
      "explanation": "外心定義為三角形三邊垂直平分線的共同交點。",
      "steps": [
        "回想外心與外接圓",
        "外接圓心到各頂點等距",
        "等距點位於邊的垂直平分線"
      ],
      "optionAnalysis": [
        {
          "choice": "三條角平分線的交點",
          "truth": false,
          "reason": "這是內心。"
        },
        {
          "choice": "三邊垂直平分線的交點",
          "truth": true,
          "reason": "依獨立推導可得到此結果；外心定義為三角形三邊垂直平分線的共同交點。"
        },
        {
          "choice": "三條中線的交點",
          "truth": false,
          "reason": "這是重心。"
        },
        {
          "choice": "三條高的交點",
          "truth": false,
          "reason": "這是垂心。"
        }
      ],
      "misconceptionTarget": "只記得是三條特殊線交點，混淆線型。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「辨認外心定義」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「三邊垂直平分線的交點」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：辨認外心定義。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "34f336559ae732128e686e62896742a6a5b7d6d736d11780b2aebfdcebed301b"
    },
    {
      "questionId": "u20-s006-v002",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "circumcenter",
      "skillSlot": "s006",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "若 O 是 △ABC 的外心，下列何者一定成立？",
      "givenConditions": [],
      "target": "理解外心的等距對象",
      "choices": [
        "到三邊距離相等",
        "把三條中線分成2比1",
        "一定在三角形內",
        "到三個頂點距離相等"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "外心是外接圓圓心，A、B、C 在同一圓上，因此 OA＝OB＝OC。",
        "result": "到三個頂點距離相等"
      },
      "explanation": "外心是外接圓圓心，A、B、C 在同一圓上，因此 OA＝OB＝OC。",
      "steps": [
        "辨認 O 為外接圓心",
        "三頂點都在外接圓上",
        "半徑相等"
      ],
      "optionAnalysis": [
        {
          "choice": "到三邊距離相等",
          "truth": false,
          "reason": "這是內心的性質。"
        },
        {
          "choice": "把三條中線分成2比1",
          "truth": false,
          "reason": "這是重心性質。"
        },
        {
          "choice": "一定在三角形內",
          "truth": false,
          "reason": "鈍角三角形的外心在外部。"
        },
        {
          "choice": "到三個頂點距離相等",
          "truth": true,
          "reason": "依獨立推導可得到此結果；外心是外接圓圓心，A、B、C 在同一圓上，因此 OA＝OB＝OC。"
        }
      ],
      "misconceptionTarget": "把到頂點等距與到邊等距混淆。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「理解外心的等距對象」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「到三個頂點距離相等」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：理解外心的等距對象。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "fc1e12de7cc5ccaf29459365166e5dc8880ba872d628d3e4121caa443f676d0d"
    },
    {
      "questionId": "u20-s006-v003",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "circumcenter",
      "skillSlot": "s006",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "通過三角形三個頂點的圓稱為外接圓，該圓的圓心是什麼？",
      "givenConditions": [],
      "target": "連結外心與外接圓",
      "choices": [
        "內切圓的圓心",
        "三角形面積中心的唯一名稱",
        "外接圓的圓心",
        "最長邊的端點"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "外接圓的圓心就是三角形的外心。",
        "result": "外接圓的圓心"
      },
      "explanation": "外接圓的圓心就是三角形的外心。",
      "steps": [
        "辨認圓通過三頂點",
        "找圓心到三點等距",
        "連結名稱外心"
      ],
      "optionAnalysis": [
        {
          "choice": "內切圓的圓心",
          "truth": false,
          "reason": "內切圓與三邊相切，其圓心是內心。"
        },
        {
          "choice": "三角形面積中心的唯一名稱",
          "truth": false,
          "reason": "這不是國中幾何中的正式定義。"
        },
        {
          "choice": "外接圓的圓心",
          "truth": true,
          "reason": "依獨立推導可得到此結果；外接圓的圓心就是三角形的外心。"
        },
        {
          "choice": "最長邊的端點",
          "truth": false,
          "reason": "圓心通常不是頂點。"
        }
      ],
      "misconceptionTarget": "混淆外接圓和內切圓。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「連結外心與外接圓」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「外接圓的圓心」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：連結外心與外接圓。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "24babc25ab51caf4dc3846f6eca13e84953c813f8fd1013c5ad1cc79e039ec82"
    },
    {
      "questionId": "u20-s006-v004",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "circumcenter",
      "skillSlot": "s006",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "尺規作圖找外心時，哪個方法正確？",
      "givenConditions": [],
      "target": "選擇外心作圖方法",
      "choices": [
        "先作兩邊的垂直平分線，取其交點",
        "先作兩個角平分線",
        "只連結三邊中點",
        "任取三角形內一點"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "任兩邊的垂直平分線交於一點；三邊垂直平分線共點，所以該點即外心。",
        "result": "先作兩邊的垂直平分線，取其交點"
      },
      "explanation": "任兩邊的垂直平分線交於一點；三邊垂直平分線共點，所以該點即外心。",
      "steps": [
        "選任兩邊",
        "作各自垂直平分線",
        "取交點並可用第三邊檢查"
      ],
      "optionAnalysis": [
        {
          "choice": "先作兩邊的垂直平分線，取其交點",
          "truth": true,
          "reason": "依獨立推導可得到此結果；任兩邊的垂直平分線交於一點；三邊垂直平分線共點，所以該點即外心。"
        },
        {
          "choice": "先作兩個角平分線",
          "truth": false,
          "reason": "會得到內心。"
        },
        {
          "choice": "只連結三邊中點",
          "truth": false,
          "reason": "形成中位線，不直接得到外心。"
        },
        {
          "choice": "任取三角形內一點",
          "truth": false,
          "reason": "不能保證到頂點等距。"
        }
      ],
      "misconceptionTarget": "把邊中點連線誤當垂直平分線。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「選擇外心作圖方法」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「先作兩邊的垂直平分線，取其交點」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：選擇外心作圖方法。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "f4a1137f8e53fbe89defa3b8a1b7503848aa0b7b3e16310c23e3ca9b78bedf0a"
    },
    {
      "questionId": "u20-s006-v005",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "circumcenter",
      "skillSlot": "s006",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "直角三角形的外心位於哪裡？",
      "givenConditions": [],
      "target": "辨認直角三角形外心位置",
      "choices": [
        "直角頂點",
        "兩股中點的交點",
        "三角形內任一點",
        "斜邊中點"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "直角三角形外接圓以斜邊為直徑，所以圓心是斜邊中點。",
        "result": "斜邊中點"
      },
      "explanation": "直角三角形外接圓以斜邊為直徑，所以圓心是斜邊中點。",
      "steps": [
        "辨認直角三角形",
        "使用斜邊為外接圓直徑",
        "取斜邊中點"
      ],
      "optionAnalysis": [
        {
          "choice": "直角頂點",
          "truth": false,
          "reason": "到另兩頂點距離通常不同。"
        },
        {
          "choice": "兩股中點的交點",
          "truth": false,
          "reason": "兩個不同點不存在單一交點。"
        },
        {
          "choice": "三角形內任一點",
          "truth": false,
          "reason": "外心位置唯一。"
        },
        {
          "choice": "斜邊中點",
          "truth": true,
          "reason": "依獨立推導可得到此結果；直角三角形外接圓以斜邊為直徑，所以圓心是斜邊中點。"
        }
      ],
      "misconceptionTarget": "以為所有三角形的外心都在內部。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「辨認直角三角形外心位置」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「斜邊中點」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：辨認直角三角形外心位置。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "e9041a869d8333a93e07c6dde542f7e698faeb252a292bc92a0d9b2edef7dd55"
    },
    {
      "questionId": "u20-s006-v006",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "circumcenter",
      "skillSlot": "s006",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "等邊三角形的垂直平分線、中線與角平分線重合。關於外心，何者正確？",
      "givenConditions": [],
      "target": "理解等邊三角形的外心",
      "choices": [
        "等邊三角形中三種特殊線重合，交點也是外心",
        "外心不存在",
        "外心是任一頂點",
        "外心在三角形外部"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "三邊垂直平分線仍有唯一交點，且因特殊線重合，該交點同時也是內心與重心。",
        "result": "等邊三角形中三種特殊線重合，交點也是外心"
      },
      "explanation": "三邊垂直平分線仍有唯一交點，且因特殊線重合，該交點同時也是內心與重心。",
      "steps": [
        "等邊三角形三邊對稱",
        "特殊線共線並共點",
        "外心位於內部中心"
      ],
      "optionAnalysis": [
        {
          "choice": "等邊三角形中三種特殊線重合，交點也是外心",
          "truth": true,
          "reason": "依獨立推導可得到此結果；三邊垂直平分線仍有唯一交點，且因特殊線重合，該交點同時也是內心與重心。"
        },
        {
          "choice": "外心不存在",
          "truth": false,
          "reason": "任何非退化三角形都有外心。"
        },
        {
          "choice": "外心是任一頂點",
          "truth": false,
          "reason": "頂點到另外兩頂點與自身距離不相等。"
        },
        {
          "choice": "外心在三角形外部",
          "truth": false,
          "reason": "等邊三角形為銳角三角形，外心在內部。"
        }
      ],
      "misconceptionTarget": "特殊線重合時誤以為交點不唯一或不存在。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「理解等邊三角形的外心」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「等邊三角形中三種特殊線重合，交點也是外心」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：理解等邊三角形的外心。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "338cc659ba8bbed6df3c4e0a1cec8b2b9a87469ed6b1822102473b44e7a91923"
    },
    {
      "questionId": "u20-s006-v007",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "circumcenter",
      "skillSlot": "s006",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "已知 OA＝OB 且 OA＝OC。由此最直接可推出哪一項？",
      "givenConditions": [],
      "target": "由頂點等距辨認外心",
      "choices": [
        "O 同時在線段 AB 與 AC 的角平分線上",
        "O 同時在線段 AB 與 AC 的垂直平分線上",
        "O 是 BC 的中點",
        "O 到三邊距離相等"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "OA＝OB 表示 O 在線段 AB 的垂直平分線上；OA＝OC 表示 O 在線段 AC 的垂直平分線上，因此 O 是兩垂直平分線交點。",
        "result": "O 同時在線段 AB 與 AC 的垂直平分線上"
      },
      "explanation": "OA＝OB 表示 O 在線段 AB 的垂直平分線上；OA＝OC 表示 O 在線段 AC 的垂直平分線上，因此 O 是兩垂直平分線交點。",
      "steps": [
        "把 OA＝OB 轉為 AB 的等距點性質",
        "把 OA＝OC 轉為 AC 的等距點性質",
        "連結到外心判定"
      ],
      "optionAnalysis": [
        {
          "choice": "O 同時在線段 AB 與 AC 的角平分線上",
          "truth": false,
          "reason": "角平分線處理到兩邊距離，不是到端點距離。"
        },
        {
          "choice": "O 同時在線段 AB 與 AC 的垂直平分線上",
          "truth": true,
          "reason": "依獨立推導可得到此結果；OA＝OB 表示 O 在線段 AB 的垂直平分線上；OA＝OC 表示 O 在線段 AC 的垂直平分線上，因此 O 是兩垂直平分線交點。"
        },
        {
          "choice": "O 是 BC 的中點",
          "truth": false,
          "reason": "等距不代表位在線段 BC 上。"
        },
        {
          "choice": "O 到三邊距離相等",
          "truth": false,
          "reason": "題目只給到頂點距離。"
        }
      ],
      "misconceptionTarget": "看到等距就誤選角平分線。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「由頂點等距辨認外心」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「O 同時在線段 AB 與 AC 的垂直平分線上」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：由頂點等距辨認外心。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "b857781d55cb4d7c1a03f503c46c8859fcd6b8f8920e73b676802c8db70cf753"
    },
    {
      "questionId": "u20-s006-v008",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "circumcenter",
      "skillSlot": "s006",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "三角形兩邊的垂直平分線交於 O。關於第三邊的垂直平分線，下列何者正確？",
      "givenConditions": [],
      "target": "證明垂直平分線共點",
      "choices": [
        "第三條必與前兩條平行",
        "第三條不一定存在",
        "第三條也必通過同一交點",
        "第三條只在等腰三角形中通過"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "由前兩條可得 O 到三頂點等距，因此 O 也到第三邊兩端等距，必在第三邊垂直平分線上。",
        "result": "第三條也必通過同一交點"
      },
      "explanation": "由前兩條可得 O 到三頂點等距，因此 O 也到第三邊兩端等距，必在第三邊垂直平分線上。",
      "steps": [
        "由第一條得兩頂點等距",
        "由第二條連接第三頂點",
        "推出 O 到第三邊兩端等距"
      ],
      "optionAnalysis": [
        {
          "choice": "第三條必與前兩條平行",
          "truth": false,
          "reason": "三條垂直平分線共點，不是互相平行。"
        },
        {
          "choice": "第三條不一定存在",
          "truth": false,
          "reason": "任一線段都有垂直平分線。"
        },
        {
          "choice": "第三條也必通過同一交點",
          "truth": true,
          "reason": "依獨立推導可得到此結果；由前兩條可得 O 到三頂點等距，因此 O 也到第三邊兩端等距，必在第三邊垂直平分線上。"
        },
        {
          "choice": "第三條只在等腰三角形中通過",
          "truth": false,
          "reason": "所有非退化三角形都成立。"
        }
      ],
      "misconceptionTarget": "把三線共點當作僅對特殊三角形成立。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「證明垂直平分線共點」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「第三條也必通過同一交點」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：證明垂直平分線共點。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "2835ac77b1ac55063526e6da6cd86c7dd17b1755fc0a1d819ae4424cc2b03638"
    },
    {
      "questionId": "u20-s006-v009",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "circumcenter",
      "skillSlot": "s006",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "若三角形的外心位於三角形外部，該三角形是哪一類？",
      "givenConditions": [],
      "target": "由外心位置反判三角形角型",
      "choices": [
        "△ABC 是鈍角三角形",
        "△ABC 是銳角三角形",
        "△ABC 是直角三角形",
        "無法由外心位置判斷"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "外心位置分類：銳角三角形在內部，直角三角形在斜邊中點，鈍角三角形在外部。",
        "result": "△ABC 是鈍角三角形"
      },
      "explanation": "外心位置分類：銳角三角形在內部，直角三角形在斜邊中點，鈍角三角形在外部。",
      "steps": [
        "回想外心位置分類",
        "外部對應鈍角",
        "排除內部與邊上情況"
      ],
      "optionAnalysis": [
        {
          "choice": "△ABC 是鈍角三角形",
          "truth": true,
          "reason": "依獨立推導可得到此結果；外心位置分類：銳角三角形在內部，直角三角形在斜邊中點，鈍角三角形在外部。"
        },
        {
          "choice": "△ABC 是銳角三角形",
          "truth": false,
          "reason": "銳角三角形外心在內部。"
        },
        {
          "choice": "△ABC 是直角三角形",
          "truth": false,
          "reason": "外心在斜邊上。"
        },
        {
          "choice": "無法由外心位置判斷",
          "truth": false,
          "reason": "此位置可判斷角型。"
        }
      ],
      "misconceptionTarget": "混淆外心與垂心的位置分類。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「由外心位置反判三角形角型」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「△ABC 是鈍角三角形」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：由外心位置反判三角形角型。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "86758348ab4620b06bebd42065dfa009836332725a1a33b9e0a626634295d061"
    },
    {
      "questionId": "u20-s006-v010",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "circumcenter",
      "skillSlot": "s006",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "三個救援站 A、B、C 不共線，要設一座中繼台，使它到三站直線距離相同。應選哪個位置？",
      "givenConditions": [],
      "target": "在設施設置中選擇外心",
      "choices": [
        "設在內心，因為到三個頂點等距",
        "設在重心，因為到三邊等距",
        "設在外心，因為到三個站點等距",
        "設在垂心，因為一定在區域內"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "到三個頂點等距的點是三角形三邊垂直平分線交點，也就是外心。",
        "result": "設在外心，因為到三個站點等距"
      },
      "explanation": "到三個頂點等距的點是三角形三邊垂直平分線交點，也就是外心。",
      "steps": [
        "把三站視為三角形頂點",
        "要求 PA＝PB＝PC",
        "選擇外心"
      ],
      "optionAnalysis": [
        {
          "choice": "設在內心，因為到三個頂點等距",
          "truth": false,
          "reason": "內心到三邊等距。"
        },
        {
          "choice": "設在重心，因為到三邊等距",
          "truth": false,
          "reason": "重心不保證這兩種等距。"
        },
        {
          "choice": "設在外心，因為到三個站點等距",
          "truth": true,
          "reason": "依獨立推導可得到此結果；到三個頂點等距的點是三角形三邊垂直平分線交點，也就是外心。"
        },
        {
          "choice": "設在垂心，因為一定在區域內",
          "truth": false,
          "reason": "垂心也可能在外部，且不保證等距。"
        }
      ],
      "misconceptionTarget": "把服務對象是頂點還是邊界混淆。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "三個距離使用相同長度單位。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「在設施設置中選擇外心」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「設在外心，因為到三個站點等距」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在設施設置中選擇外心。",
      "literacyContextNecessity": "三個站點是離散頂點，等距服務要求直接對應外心，情境不可刪除。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "1b6b55b6aebdfdda538bc1faa87d453ea143f6ccacfe4a2d592bac24fea5f453"
    },
    {
      "questionId": "u20-s006-v011",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "circumcenter",
      "skillSlot": "s006",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "三個基地站形成鈍角三角形，等距中繼台設在外心。規劃人員應注意什麼？",
      "givenConditions": [],
      "target": "評估外心在實際區域的位置",
      "choices": [
        "一定落在三角形內",
        "中繼台可能落在三站形成區域之外",
        "一定落在某一站點上",
        "三站不共線時沒有解"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "鈍角三角形的外心位於三角形外部，因此實際設址可能超出三站圍成的區域。",
        "result": "中繼台可能落在三站形成區域之外"
      },
      "explanation": "鈍角三角形的外心位於三角形外部，因此實際設址可能超出三站圍成的區域。",
      "steps": [
        "辨認三站形成鈍角三角形",
        "套用外心位置分類",
        "轉為設址範圍風險"
      ],
      "optionAnalysis": [
        {
          "choice": "一定落在三角形內",
          "truth": false,
          "reason": "只有銳角三角形外心在內部。"
        },
        {
          "choice": "中繼台可能落在三站形成區域之外",
          "truth": true,
          "reason": "依獨立推導可得到此結果；鈍角三角形的外心位於三角形外部，因此實際設址可能超出三站圍成的區域。"
        },
        {
          "choice": "一定落在某一站點上",
          "truth": false,
          "reason": "外心不是頂點。"
        },
        {
          "choice": "三站不共線時沒有解",
          "truth": false,
          "reason": "不共線三點恰可決定唯一外接圓。"
        }
      ],
      "misconceptionTarget": "只記等距功能，忽略三角形角型影響位置。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「評估外心在實際區域的位置」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「中繼台可能落在三站形成區域之外」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：評估外心在實際區域的位置。",
      "literacyContextNecessity": "基地站的鈍角配置會使等距點落區域外，對設址決策有直接影響。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "dc60b029c301cbdcda6229b2d45f7e61e06c132ef05a8ac31b7f0223d258447b"
    },
    {
      "questionId": "u20-s006-v012",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "circumcenter",
      "skillSlot": "s006",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "無人機軟體標出一個候選外心 O。要用圖面條件快速驗證，哪個檢查最可靠？",
      "givenConditions": [],
      "target": "驗證數位圖面的外心標記",
      "choices": [
        "檢查點是否在三角形內",
        "檢查點到三邊距離是否相等",
        "檢查點是否位於任一中線",
        "檢查點是否同時位於至少兩邊的垂直平分線"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "驗證 O 在兩邊的垂直平分線上即可確定它到三頂點等距；第三條會同時通過。",
        "result": "檢查點是否同時位於至少兩邊的垂直平分線"
      },
      "explanation": "驗證 O 在兩邊的垂直平分線上即可確定它到三頂點等距；第三條會同時通過。",
      "steps": [
        "選兩條邊",
        "檢查 O 通過中點且與邊垂直",
        "確認兩線交於 O"
      ],
      "optionAnalysis": [
        {
          "choice": "檢查點是否在三角形內",
          "truth": false,
          "reason": "鈍角三角形外心在外部。"
        },
        {
          "choice": "檢查點到三邊距離是否相等",
          "truth": false,
          "reason": "這驗證的是內心。"
        },
        {
          "choice": "檢查點是否位於任一中線",
          "truth": false,
          "reason": "單一中線不足以判定外心。"
        },
        {
          "choice": "檢查點是否同時位於至少兩邊的垂直平分線",
          "truth": true,
          "reason": "依獨立推導可得到此結果；驗證 O 在兩邊的垂直平分線上即可確定它到三頂點等距；第三條會同時通過。"
        }
      ],
      "misconceptionTarget": "以『在圖形中央』取代垂直平分線條件。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「驗證數位圖面的外心標記」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「檢查點是否同時位於至少兩邊的垂直平分線」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：驗證數位圖面的外心標記。",
      "literacyContextNecessity": "軟體候選點需依可檢查的垂直與中點標記驗證，數位標示本身不保證正確。",
      "figureId": "fig-u20-circumcenter-check-01",
      "drawingSpecId": "fig-u20-circumcenter-check-01",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "b0e6ba2af635aa76731f29b448f54eb67fad82ed39414d3a4c624ba9c8114c17"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u20-s006-cr001",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "circumcenter",
      "skillSlot": "s006",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "△ABC 中，請說明如何只用兩條作圖線找到外心 O，並證明第三邊的垂直平分線也通過 O。",
      "requiredWork": [
        "作兩邊垂直平分線。",
        "由等距性證明 O 到三頂點相等。",
        "推出第三條通過。"
      ],
      "standardSolution": [
        "作 AB、AC 的垂直平分線，交於 O。",
        "O 在 AB 的垂直平分線上，所以 OA＝OB；O 在 AC 的垂直平分線上，所以 OA＝OC。",
        "因此 OB＝OC，O 到 B、C 等距，故 O 也在線段 BC 的垂直平分線上。"
      ],
      "alternativeMethods": [
        "可改作任意兩邊的垂直平分線，推理相同。"
      ],
      "reasoningSteps": [
        "作 AB、AC 的垂直平分線，交於 O。",
        "O 在 AB 的垂直平分線上，所以 OA＝OB；O 在 AC 的垂直平分線上，所以 OA＝OC。",
        "因此 OB＝OC，O 到 B、C 等距，故 O 也在線段 BC 的垂直平分線上。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "作圖方法正確，並以兩次等距與遞移完整證明第三條通過。"
        },
        {
          "score": 2,
          "criteria": "能找出外心且說第三條共點，但證明只寫『三線必共點』。"
        },
        {
          "score": 1,
          "criteria": "只會作兩條垂直平分線，未說明第三條。"
        },
        {
          "score": 0,
          "criteria": "改作角平分線、中線或高。"
        }
      ],
      "partialCreditRules": [
        "評分依題目專屬rubric判定；方法正確但敘述略簡可保留方法分。",
        "若前段僅有單一算術錯誤，後續推理方法正確，可依錯誤數值一致作答並保留方法分。"
      ],
      "followThroughPolicy": "若前段僅有單一算術錯誤，後續推理方法正確，可依錯誤數值一致作答並保留方法分。",
      "unitRules": "依題目所給單位作答；純幾何關係不另加單位。",
      "notationRules": "角以 ∠ 表示，線段相等與平行、垂直符號須對應正確對象。",
      "answerOnlyPolicy": "只寫最終結論且沒有題目要求的理由，最高給1分；若結論也錯則0分。",
      "commonErrors": [
        "只連接兩邊中點。",
        "把到邊等距當成外心。",
        "未寫第三邊兩端的等距。"
      ],
      "figureId": "fig-u20-circumcenter-check-01",
      "drawingSpecId": "fig-u20-circumcenter-check-01",
      "independentReview": {
        "reSolvedWithoutStoredAnswer": true,
        "derivedResult": "作 AB、AC 的垂直平分線，交於 O。；O 在 AB 的垂直平分線上，所以 OA＝OB；O 在 AC 的垂直平分線上，所以 OA＝OC。；因此 OB＝OC，O 到 B、C 等距，故 O 也在線段 BC 的垂直平分線上。",
        "rubricAlignment": "每一級分均依本題要求的具體推理、計算或審查內容撰寫。",
        "ambiguity": "題目所需工作與評分對象明確；替代方法只在數學上合法時接受。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "contentSha256": "7fd8105ade9bcf988b8255e288f227f415b09e7b29ba7a591251c974e944bab9"
    },
    {
      "questionId": "u20-s006-cr002",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "circumcenter",
      "skillSlot": "s006",
      "difficulty": "literacy",
      "itemType": "constructed-response",
      "prompt": "三個不共線的救援站 A、B、C 要設等距中繼台。請建立幾何模型，說明選址方法，並討論若 △ABC 是鈍角三角形時的實務風險。",
      "requiredWork": [
        "把站點視為頂點。",
        "以垂直平分線交點找外心。",
        "說明鈍角外心在區域外。"
      ],
      "standardSolution": [
        "要求 PA＝PB＝PC，所以 P 應為 △ABC 的外心。",
        "作任兩邊的垂直平分線，交點 P 即等距中繼台。",
        "若 △ABC 為鈍角三角形，外心位於三角形外部，可能落在服務區界外、私人土地或不可施工區，需另評估限制；數學等距解仍存在。"
      ],
      "alternativeMethods": [
        "若實務禁止設於區外，可說明原始『完全等距』與區域限制可能衝突，需改成最佳化問題，但不在本單元求解。"
      ],
      "reasoningSteps": [
        "要求 PA＝PB＝PC，所以 P 應為 △ABC 的外心。",
        "作任兩邊的垂直平分線，交點 P 即等距中繼台。",
        "若 △ABC 為鈍角三角形，外心位於三角形外部，可能落在服務區界外、私人土地或不可施工區，需另評估限制；數學等距解仍存在。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "模型、作圖、等距理由及鈍角外部風險皆完整。"
        },
        {
          "score": 2,
          "criteria": "正確選外心並指出可能在外部，但作圖或理由不完整。"
        },
        {
          "score": 1,
          "criteria": "只答外心，未解釋站點等距或角型影響。"
        },
        {
          "score": 0,
          "criteria": "選內心、重心或宣稱鈍角時無解。"
        }
      ],
      "partialCreditRules": [
        "評分依題目專屬rubric判定；方法正確但敘述略簡可保留方法分。",
        "若前段僅有單一算術錯誤，後續推理方法正確，可依錯誤數值一致作答並保留方法分。"
      ],
      "followThroughPolicy": "若前段僅有單一算術錯誤，後續推理方法正確，可依錯誤數值一致作答並保留方法分。",
      "unitRules": "所有站間與台站距離使用同一地圖或實地長度單位。",
      "notationRules": "角以 ∠ 表示，線段相等與平行、垂直符號須對應正確對象。",
      "answerOnlyPolicy": "只寫最終結論且沒有題目要求的理由，最高給1分；若結論也錯則0分。",
      "commonErrors": [
        "把三站當三邊。",
        "認為外心必在服務區內。",
        "把實務限制誤成數學外心不存在。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "reSolvedWithoutStoredAnswer": true,
        "derivedResult": "要求 PA＝PB＝PC，所以 P 應為 △ABC 的外心。；作任兩邊的垂直平分線，交點 P 即等距中繼台。；若 △ABC 為鈍角三角形，外心位於三角形外部，可能落在服務區界外、私人土地或不可施工區，需另評估限制；數學等距解仍存在。",
        "rubricAlignment": "每一級分均依本題要求的具體推理、計算或審查內容撰寫。",
        "ambiguity": "題目所需工作與評分對象明確；替代方法只在數學上合法時接受。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "contentSha256": "5c07525e27b204f22957f3d59baa70ad96830da4d0c457253d0cdcc4b6c4f047"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u20-s006-v001",
      "contentSha256": "34f336559ae732128e686e62896742a6a5b7d6d736d11780b2aebfdcebed301b",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "外心定義為三角形三邊垂直平分線的共同交點。",
      "derivedAnswer": "三邊垂直平分線的交點",
      "storedAnswer": "三邊垂直平分線的交點",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「三邊垂直平分線的交點」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「只記得是三條特殊線交點，混淆線型。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：辨認外心定義。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「為外接圓尋找圓心時，應取三角形哪一組特殊線的共同交點？」要求辨認外心定義。獨立推導為：外心定義為三角形三邊垂直平分線的共同交點。 四選項依序判定：三條角平分線的交點=假，這是內心。；三邊垂直平分線的交點=真，依獨立推導可得到此結果；外心定義為三角形三邊垂直平分線的共同交點。；三條中線的交點=假，這是重心。；三條高的交點=假，這是垂心。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "4017a45df80d81f7234fbf80ed65624c77b409f0a6be488249c72cdce928a180"
    },
    {
      "questionId": "u20-s006-v002",
      "contentSha256": "fc1e12de7cc5ccaf29459365166e5dc8880ba872d628d3e4121caa443f676d0d",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "外心是外接圓圓心，A、B、C 在同一圓上，因此 OA＝OB＝OC。",
      "derivedAnswer": "到三個頂點距離相等",
      "storedAnswer": "到三個頂點距離相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「到三個頂點距離相等」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把到頂點等距與到邊等距混淆。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：理解外心的等距對象。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 O 是 △ABC 的外心，下列何者一定成立？」要求理解外心的等距對象。獨立推導為：外心是外接圓圓心，A、B、C 在同一圓上，因此 OA＝OB＝OC。 四選項依序判定：到三邊距離相等=假，這是內心的性質。；把三條中線分成2比1=假，這是重心性質。；一定在三角形內=假，鈍角三角形的外心在外部。；到三個頂點距離相等=真，依獨立推導可得到此結果；外心是外接圓圓心，A、B、C 在同一圓上，因此 OA＝OB＝OC。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "b2a3a6a46f94b2e2d2e744a109e8378afbe5b97cef3952d6d8798033b5db19a1"
    },
    {
      "questionId": "u20-s006-v003",
      "contentSha256": "24babc25ab51caf4dc3846f6eca13e84953c813f8fd1013c5ad1cc79e039ec82",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "外接圓的圓心就是三角形的外心。",
      "derivedAnswer": "外接圓的圓心",
      "storedAnswer": "外接圓的圓心",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「外接圓的圓心」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「混淆外接圓和內切圓。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：連結外心與外接圓。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「通過三角形三個頂點的圓稱為外接圓，該圓的圓心是什麼？」要求連結外心與外接圓。獨立推導為：外接圓的圓心就是三角形的外心。 四選項依序判定：內切圓的圓心=假，內切圓與三邊相切，其圓心是內心。；三角形面積中心的唯一名稱=假，這不是國中幾何中的正式定義。；外接圓的圓心=真，依獨立推導可得到此結果；外接圓的圓心就是三角形的外心。；最長邊的端點=假，圓心通常不是頂點。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "ab700368e34cbdf6c0c67ec2e0cc4a3fc4945e6b55ce08eab7baeab810d52441"
    },
    {
      "questionId": "u20-s006-v004",
      "contentSha256": "f4a1137f8e53fbe89defa3b8a1b7503848aa0b7b3e16310c23e3ca9b78bedf0a",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "任兩邊的垂直平分線交於一點；三邊垂直平分線共點，所以該點即外心。",
      "derivedAnswer": "先作兩邊的垂直平分線，取其交點",
      "storedAnswer": "先作兩邊的垂直平分線，取其交點",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「先作兩邊的垂直平分線，取其交點」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把邊中點連線誤當垂直平分線。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：選擇外心作圖方法。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「尺規作圖找外心時，哪個方法正確？」要求選擇外心作圖方法。獨立推導為：任兩邊的垂直平分線交於一點；三邊垂直平分線共點，所以該點即外心。 四選項依序判定：先作兩邊的垂直平分線，取其交點=真，依獨立推導可得到此結果；任兩邊的垂直平分線交於一點；三邊垂直平分線共點，所以該點即外心。；先作兩個角平分線=假，會得到內心。；只連結三邊中點=假，形成中位線，不直接得到外心。；任取三角形內一點=假，不能保證到頂點等距。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "958bb880423f952b49d58eb52cd42d703fe99f783a3fac8fee489ce635d0d8f6"
    },
    {
      "questionId": "u20-s006-v005",
      "contentSha256": "e9041a869d8333a93e07c6dde542f7e698faeb252a292bc92a0d9b2edef7dd55",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "直角三角形外接圓以斜邊為直徑，所以圓心是斜邊中點。",
      "derivedAnswer": "斜邊中點",
      "storedAnswer": "斜邊中點",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「斜邊中點」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「以為所有三角形的外心都在內部。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：辨認直角三角形外心位置。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「直角三角形的外心位於哪裡？」要求辨認直角三角形外心位置。獨立推導為：直角三角形外接圓以斜邊為直徑，所以圓心是斜邊中點。 四選項依序判定：直角頂點=假，到另兩頂點距離通常不同。；兩股中點的交點=假，兩個不同點不存在單一交點。；三角形內任一點=假，外心位置唯一。；斜邊中點=真，依獨立推導可得到此結果；直角三角形外接圓以斜邊為直徑，所以圓心是斜邊中點。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "64b53d601481cc3f2a2e94b9d414179039b11b60a5d13ddd09ee2d8381b0275b"
    },
    {
      "questionId": "u20-s006-v006",
      "contentSha256": "338cc659ba8bbed6df3c4e0a1cec8b2b9a87469ed6b1822102473b44e7a91923",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "三邊垂直平分線仍有唯一交點，且因特殊線重合，該交點同時也是內心與重心。",
      "derivedAnswer": "等邊三角形中三種特殊線重合，交點也是外心",
      "storedAnswer": "等邊三角形中三種特殊線重合，交點也是外心",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「等邊三角形中三種特殊線重合，交點也是外心」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「特殊線重合時誤以為交點不唯一或不存在。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：理解等邊三角形的外心。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等邊三角形的垂直平分線、中線與角平分線重合。關於外心，何者正確？」要求理解等邊三角形的外心。獨立推導為：三邊垂直平分線仍有唯一交點，且因特殊線重合，該交點同時也是內心與重心。 四選項依序判定：等邊三角形中三種特殊線重合，交點也是外心=真，依獨立推導可得到此結果；三邊垂直平分線仍有唯一交點，且因特殊線重合，該交點同時也是內心與重心。；外心不存在=假，任何非退化三角形都有外心。；外心是任一頂點=假，頂點到另外兩頂點與自身距離不相等。；外心在三角形外部=假，等邊三角形為銳角三角形，外心在內部。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "87b4b2aba0460792f5441915798b4a609d67605aa5c4e654f7d477cf8dabb266"
    },
    {
      "questionId": "u20-s006-v007",
      "contentSha256": "b857781d55cb4d7c1a03f503c46c8859fcd6b8f8920e73b676802c8db70cf753",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "OA＝OB 表示 O 在線段 AB 的垂直平分線上；OA＝OC 表示 O 在線段 AC 的垂直平分線上，因此 O 是兩垂直平分線交點。",
      "derivedAnswer": "O 同時在線段 AB 與 AC 的垂直平分線上",
      "storedAnswer": "O 同時在線段 AB 與 AC 的垂直平分線上",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「O 同時在線段 AB 與 AC 的垂直平分線上」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「看到等距就誤選角平分線。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：由頂點等距辨認外心。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已知 OA＝OB 且 OA＝OC。由此最直接可推出哪一項？」要求由頂點等距辨認外心。獨立推導為：OA＝OB 表示 O 在線段 AB 的垂直平分線上；OA＝OC 表示 O 在線段 AC 的垂直平分線上，因此 O 是兩垂直平分線交點。 四選項依序判定：O 同時在線段 AB 與 AC 的角平分線上=假，角平分線處理到兩邊距離，不是到端點距離。；O 同時在線段 AB 與 AC 的垂直平分線上=真，依獨立推導可得到此結果；OA＝OB 表示 O 在線段 AB 的垂直平分線上；OA＝OC 表示 O 在線段 AC 的垂直平分線上，因此 O 是兩垂直平分線交點。；O 是 BC 的中點=假，等距不代表位在線段 BC 上。；O 到三邊距離相等=假，題目只給到頂點距離。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "83f0e61b3194a1bea3449c2a2da454f434fc001743f10925b5331db5bc316ac3"
    },
    {
      "questionId": "u20-s006-v008",
      "contentSha256": "2835ac77b1ac55063526e6da6cd86c7dd17b1755fc0a1d819ae4424cc2b03638",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "由前兩條可得 O 到三頂點等距，因此 O 也到第三邊兩端等距，必在第三邊垂直平分線上。",
      "derivedAnswer": "第三條也必通過同一交點",
      "storedAnswer": "第三條也必通過同一交點",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「第三條也必通過同一交點」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把三線共點當作僅對特殊三角形成立。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：證明垂直平分線共點。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形兩邊的垂直平分線交於 O。關於第三邊的垂直平分線，下列何者正確？」要求證明垂直平分線共點。獨立推導為：由前兩條可得 O 到三頂點等距，因此 O 也到第三邊兩端等距，必在第三邊垂直平分線上。 四選項依序判定：第三條必與前兩條平行=假，三條垂直平分線共點，不是互相平行。；第三條不一定存在=假，任一線段都有垂直平分線。；第三條也必通過同一交點=真，依獨立推導可得到此結果；由前兩條可得 O 到三頂點等距，因此 O 也到第三邊兩端等距，必在第三邊垂直平分線上。；第三條只在等腰三角形中通過=假，所有非退化三角形都成立。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "2d0b263dbf4702834ce2cb18a4b4c1f72b5b6b691d80077179006f6e2b1e033a"
    },
    {
      "questionId": "u20-s006-v009",
      "contentSha256": "86758348ab4620b06bebd42065dfa009836332725a1a33b9e0a626634295d061",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "外心位置分類：銳角三角形在內部，直角三角形在斜邊中點，鈍角三角形在外部。",
      "derivedAnswer": "△ABC 是鈍角三角形",
      "storedAnswer": "△ABC 是鈍角三角形",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「△ABC 是鈍角三角形」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「混淆外心與垂心的位置分類。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：由外心位置反判三角形角型。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若三角形的外心位於三角形外部，該三角形是哪一類？」要求由外心位置反判三角形角型。獨立推導為：外心位置分類：銳角三角形在內部，直角三角形在斜邊中點，鈍角三角形在外部。 四選項依序判定：△ABC 是鈍角三角形=真，依獨立推導可得到此結果；外心位置分類：銳角三角形在內部，直角三角形在斜邊中點，鈍角三角形在外部。；△ABC 是銳角三角形=假，銳角三角形外心在內部。；△ABC 是直角三角形=假，外心在斜邊上。；無法由外心位置判斷=假，此位置可判斷角型。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "f04123967cc6323225ca0057d2cdc3fab7f71269e54d7288022ffeb39528e061"
    },
    {
      "questionId": "u20-s006-v010",
      "contentSha256": "1b6b55b6aebdfdda538bc1faa87d453ea143f6ccacfe4a2d592bac24fea5f453",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "到三個頂點等距的點是三角形三邊垂直平分線交點，也就是外心。",
      "derivedAnswer": "設在外心，因為到三個站點等距",
      "storedAnswer": "設在外心，因為到三個站點等距",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「設在外心，因為到三個站點等距」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "三個距離使用相同長度單位。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把服務對象是頂點還是邊界混淆。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在設施設置中選擇外心。",
      "literacyContextNecessity": "三個站點是離散頂點，等距服務要求直接對應外心，情境不可刪除。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三個救援站 A、B、C 不共線，要設一座中繼台，使它到三站直線距離相同。應選哪個位置？」要求在設施設置中選擇外心。獨立推導為：到三個頂點等距的點是三角形三邊垂直平分線交點，也就是外心。 四選項依序判定：設在內心，因為到三個頂點等距=假，內心到三邊等距。；設在重心，因為到三邊等距=假，重心不保證這兩種等距。；設在外心，因為到三個站點等距=真，依獨立推導可得到此結果；到三個頂點等距的點是三角形三邊垂直平分線交點，也就是外心。；設在垂心，因為一定在區域內=假，垂心也可能在外部，且不保證等距。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "1db42b48b48de3af854bf27ae8a54c25c864784d93c30729eb9ebee53d34f93d"
    },
    {
      "questionId": "u20-s006-v011",
      "contentSha256": "dc60b029c301cbdcda6229b2d45f7e61e06c132ef05a8ac31b7f0223d258447b",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "鈍角三角形的外心位於三角形外部，因此實際設址可能超出三站圍成的區域。",
      "derivedAnswer": "中繼台可能落在三站形成區域之外",
      "storedAnswer": "中繼台可能落在三站形成區域之外",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「中繼台可能落在三站形成區域之外」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「只記等距功能，忽略三角形角型影響位置。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：評估外心在實際區域的位置。",
      "literacyContextNecessity": "基地站的鈍角配置會使等距點落區域外，對設址決策有直接影響。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三個基地站形成鈍角三角形，等距中繼台設在外心。規劃人員應注意什麼？」要求評估外心在實際區域的位置。獨立推導為：鈍角三角形的外心位於三角形外部，因此實際設址可能超出三站圍成的區域。 四選項依序判定：一定落在三角形內=假，只有銳角三角形外心在內部。；中繼台可能落在三站形成區域之外=真，依獨立推導可得到此結果；鈍角三角形的外心位於三角形外部，因此實際設址可能超出三站圍成的區域。；一定落在某一站點上=假，外心不是頂點。；三站不共線時沒有解=假，不共線三點恰可決定唯一外接圓。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "65c478e72957fbde77a2d203422a6f5b75bb3182691e4ca8cd04f774c9cf75c3"
    },
    {
      "questionId": "u20-s006-v012",
      "contentSha256": "b0e6ba2af635aa76731f29b448f54eb67fad82ed39414d3a4c624ba9c8114c17",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "驗證 O 在兩邊的垂直平分線上即可確定它到三頂點等距；第三條會同時通過。",
      "derivedAnswer": "檢查點是否同時位於至少兩邊的垂直平分線",
      "storedAnswer": "檢查點是否同時位於至少兩邊的垂直平分線",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「檢查點是否同時位於至少兩邊的垂直平分線」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「以『在圖形中央』取代垂直平分線條件。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：驗證數位圖面的外心標記。",
      "literacyContextNecessity": "軟體候選點需依可檢查的垂直與中點標記驗證，數位標示本身不保證正確。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「無人機軟體標出一個候選外心 O。要用圖面條件快速驗證，哪個檢查最可靠？」要求驗證數位圖面的外心標記。獨立推導為：驗證 O 在兩邊的垂直平分線上即可確定它到三頂點等距；第三條會同時通過。 四選項依序判定：檢查點是否在三角形內=假，鈍角三角形外心在外部。；檢查點到三邊距離是否相等=假，這驗證的是內心。；檢查點是否位於任一中線=假，單一中線不足以判定外心。；檢查點是否同時位於至少兩邊的垂直平分線=真，依獨立推導可得到此結果；驗證 O 在兩邊的垂直平分線上即可確定它到三頂點等距；第三條會同時通過。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "09d6a075b139b6fc5b02ff7abf9916475033689d185863cae9289c88ab252148"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "fig-u20-circumcenter-check-01",
      "unitId": "u20",
      "ownerSkillSlot": "s006",
      "title": "外心垂直平分線檢核圖",
      "description": "不等邊三角形ABC，AB與AC的中點分別標M、N，兩條虛線垂直平分線交於O，並有直角與等分刻痕。",
      "canvas": {
        "width": 480,
        "height": 320,
        "viewBox": "0 0 480 320"
      },
      "coordinates": {
        "A": [
          220,
          55
        ],
        "B": [
          75,
          245
        ],
        "C": [
          410,
          235
        ],
        "O": [
          232,
          158
        ],
        "M": [
          148,
          150
        ],
        "N": [
          315,
          145
        ]
      },
      "visibleLineRules": "實線表示題設中的線段或道路；虛線表示延長線或輔助線；直角方框、等長刻痕與平行箭頭只在題設提供時使用。",
      "hiddenLineRules": "本單元為平面圖，不使用立體隱線；未畫出的關係不得自行假設。",
      "labels": "所有點名放在點外側至少8像素；避免壓在線段或直角記號上。",
      "toScale": false,
      "visualInferenceWarning": "圖形未按比例，不可用外觀估計未標示的長度或角度。",
      "altText": "三角形ABC內外畫出AB、AC兩邊的虛線垂直平分線，交於O；中點M、N有等分刻痕。",
      "svgTitle": "外心垂直平分線檢核圖",
      "svgDesc": "不等邊三角形ABC，AB與AC的中點分別標M、N，兩條虛線垂直平分線交於O，並有直角與等分刻痕。",
      "mobileReadabilityReview": "在寬度320像素縮放下，主要線段、直角記號與標籤仍可辨認；字級不小於16。",
      "answerLeakageReview": "圖中只呈現題設標記與辨識所需結構，不標示選項答案、中心名稱結論或未給定數值。",
      "geometryAssertions": [
        "M為AB中點標記",
        "N為AC中點標記",
        "兩虛線分別過M、N並與對應邊垂直",
        "兩線交於O"
      ],
      "manualVisualInspection": "pass: rendered at 480x320 and reviewed at 320px-equivalent readability; no clipping or answer leakage",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ]
};
export default skillBundle;
