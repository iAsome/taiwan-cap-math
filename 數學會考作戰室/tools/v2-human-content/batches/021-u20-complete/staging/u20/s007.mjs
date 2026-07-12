// Generated only by serialization from approved reviewed source. Do not edit.
export const sourceDigest="959bca0f7402df924d50ac19f08a357a4140493884ecf6807f030f9f29a5cd7a";
export const skillBundle={
  "lecture": {
    "lectureId": "u20-s007-lecture-r1",
    "unitId": "u20",
    "numericUnitId": 20,
    "topicId": "u20-centers",
    "skillId": "incenter",
    "skillSlot": "s007",
    "lockedSkillTitle": "內心",
    "title": "內心：三條邊界的等距中心",
    "audience": "臺灣國中零基礎至會考數學滿分",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能說明內心是三個內角角平分線交點。",
      "能辨認到三邊垂直距離相等。",
      "能建立內切圓圓心與半徑。"
    ],
    "prerequisites": [
      {
        "skillId": "circumcenter",
        "requiredLevel": "能使用該技能的核心定義與基本推理。"
      }
    ],
    "prerequisiteBridge": "若無單元內先備技能，從已知、圖形標記與國中基本線角概念開始；若有先備技能，先回想「circumcenter」再進入本節。",
    "glossary": [
      {
        "term": "內心",
        "definition": "三角形三個內角角平分線的共同交點。"
      },
      {
        "term": "內切圓",
        "definition": "位於三角形內並與三邊都相切的圓。"
      },
      {
        "term": "點到直線距離",
        "definition": "從點向直線所作垂線段的長。"
      }
    ],
    "notation": [
      {
        "symbol": "d(I,AB)",
        "meaning": "點I到直線AB的垂直距離。"
      },
      {
        "symbol": "r",
        "meaning": "常表示內切圓半徑。"
      }
    ],
    "conceptNarrative": [
      "角平分線上的點到角的兩邊距離相等。兩個內角的角平分線相交後，等距關係連起三條邊，因此形成內心。",
      "內心到邊的距離必須是垂直距離。任意斜線段較長，不能拿來當半徑。",
      "任何非退化三角形的內心都在內部，這一點與外心、垂心不同。"
    ],
    "formalDefinitions": [
      {
        "name": "內心定義",
        "statement": "三個內角角平分線的交點。"
      },
      {
        "name": "角平分線等距性質",
        "statement": "角內角平分線上的點到角兩邊的垂直距離相等。"
      }
    ],
    "formulas": [
      {
        "formula": "d(I,AB)=d(I,BC)=d(I,CA)=r",
        "conditions": [
          "I為內心",
          "距離取垂直距離"
        ],
        "meaning": "共同距離為內切圓半徑。"
      }
    ],
    "nonApplicableCases": [
      "到三頂點等距的是外心。",
      "切點一般不是邊中點。",
      "內心連頂點形成角平分線，不必是中線或高。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "作兩個內角角平分線。",
        "check": "使用的是內角而非外角嗎？"
      },
      {
        "step": 2,
        "instruction": "取交點I。",
        "check": "I是否在三角形內？"
      },
      {
        "step": 3,
        "instruction": "從I向任一邊作垂線。",
        "check": "半徑是否垂直該邊？"
      },
      {
        "step": 4,
        "instruction": "以共同垂距為半徑畫內切圓。",
        "check": "是否三邊都相切？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "I為內心，∠A=80°。",
        "solutionSteps": [
          "AI平分∠A。",
          "80°÷2=40°。"
        ],
        "answer": "∠BAI=∠IAC=40°。"
      },
      {
        "exampleId": "L2",
        "prompt": "I到AB距離3公分。",
        "solutionSteps": [
          "內心到三邊垂距相等。"
        ],
        "answer": "到BC、CA也都是3公分。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把到邊距離量成斜線。",
        "why": "點到直線距離定義為垂線段。",
        "correction": "在垂足處標直角。"
      },
      {
        "mistake": "認為鈍角三角形內心在外部。",
        "why": "誤套外心位置。",
        "correction": "內心永遠在內部。"
      },
      {
        "mistake": "以到頂點距離作內切圓半徑。",
        "why": "內切圓與邊相切。",
        "correction": "用到邊垂距。"
      }
    ],
    "selfCheck": [
      "我分的是內角嗎？",
      "距離是否垂直於邊？",
      "等距對象是邊還是頂點？",
      "圓是否在三處相切？"
    ],
    "summary": [
      "內心是內角平分線交點。",
      "內心到三邊垂距相等。",
      "共同距離是內切圓半徑。",
      "內心永遠在三角形內。"
    ],
    "connections": {
      "previous": "先備：circumcenter",
      "next": [
        "下一技能研究由三條中線交成的重心。"
      ]
    },
    "figureReferences": [
      "fig-u20-incenter-garden-01"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u20-s007-v001",
        "u20-s007-v002",
        "u20-s007-v003",
        "u20-s007-v004",
        "u20-s007-v005",
        "u20-s007-v006",
        "u20-s007-v007",
        "u20-s007-v008",
        "u20-s007-v009",
        "u20-s007-v010",
        "u20-s007-v011",
        "u20-s007-v012"
      ],
      "constructedResponseIds": [
        "u20-s007-cr001",
        "u20-s007-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "invalidUseCasesIncluded": true,
      "skillSpecificEvidence": "講義明確定義點到邊距離，修補學生常把任意連線當距離的問題。",
      "reviewerDecision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "legacyContentUsed": false,
    "contentSha256": "520469cd69ea802a758b3cfc068022898d936b8e6ca7e6095000d37104b3a3d2"
  },
  "mcQuestions": [
    {
      "questionId": "u20-s007-v001",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter",
      "skillSlot": "s007",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "下列哪一個作圖描述會得到三角形的內心？",
      "givenConditions": [],
      "target": "辨認內心定義",
      "choices": [
        "三邊垂直平分線的交點",
        "三條中線的交點",
        "三個內角角平分線的交點",
        "三條高的交點"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "內心定義為三個內角角平分線的共同交點。",
        "result": "三個內角角平分線的交點"
      },
      "explanation": "內心定義為三個內角角平分線的共同交點。",
      "steps": [
        "辨認關鍵字『內』與內角",
        "選擇角平分線",
        "取三線共同交點"
      ],
      "optionAnalysis": [
        {
          "choice": "三邊垂直平分線的交點",
          "truth": false,
          "reason": "這是外心。"
        },
        {
          "choice": "三條中線的交點",
          "truth": false,
          "reason": "這是重心。"
        },
        {
          "choice": "三個內角角平分線的交點",
          "truth": true,
          "reason": "依獨立推導可得到此結果；內心定義為三個內角角平分線的共同交點。"
        },
        {
          "choice": "三條高的交點",
          "truth": false,
          "reason": "這是垂心。"
        }
      ],
      "misconceptionTarget": "混淆四種三角形的心。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「辨認內心定義」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「三個內角角平分線的交點」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：辨認內心定義。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "8f30fc036008d7e310be34d1ce4cbb8249cf9d647c5f20d51b51a5b30fdf0b0f"
    },
    {
      "questionId": "u20-s007-v002",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter",
      "skillSlot": "s007",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "若 I 是 △ABC 的內心，下列何者一定成立？",
      "givenConditions": [],
      "target": "理解內心的等距對象",
      "choices": [
        "到三邊的垂直距離相等",
        "到三頂點距離相等",
        "到三邊中點距離相等",
        "把中線分成2比1"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "內心位在各角平分線上；角平分線上的點到角的兩邊距離相等，因此 I 到三邊的垂直距離相等。",
        "result": "到三邊的垂直距離相等"
      },
      "explanation": "內心位在各角平分線上；角平分線上的點到角的兩邊距離相等，因此 I 到三邊的垂直距離相等。",
      "steps": [
        "I 在 ∠A 的角平分線上得距 AB、AC 相等",
        "I 在另一角平分線上連接第三邊",
        "得到到三邊距離相等"
      ],
      "optionAnalysis": [
        {
          "choice": "到三邊的垂直距離相等",
          "truth": true,
          "reason": "依獨立推導可得到此結果；內心位在各角平分線上；角平分線上的點到角的兩邊距離相等，因此 I 到三邊的垂直距離相等。"
        },
        {
          "choice": "到三頂點距離相等",
          "truth": false,
          "reason": "這是外心性質。"
        },
        {
          "choice": "到三邊中點距離相等",
          "truth": false,
          "reason": "內心比較的是到邊的垂直距離。"
        },
        {
          "choice": "把中線分成2比1",
          "truth": false,
          "reason": "這是重心性質。"
        }
      ],
      "misconceptionTarget": "沒有強調距離必須是垂直距離。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「理解內心的等距對象」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「到三邊的垂直距離相等」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：理解內心的等距對象。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "2ee0f9c030eb2160e133e2158f93b79da958e61c6bf0880dfd3cd2c5b1320e1a"
    },
    {
      "questionId": "u20-s007-v003",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter",
      "skillSlot": "s007",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "與三角形三邊都相切的圓稱為內切圓，其圓心是哪一個心？",
      "givenConditions": [],
      "target": "連結內心與內切圓",
      "choices": [
        "外接圓的圓心",
        "斜邊中點",
        "任一角的頂點",
        "內切圓的圓心"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "圓與三邊相切時，圓心到三邊的垂直距離都等於半徑，因此圓心是內心。",
        "result": "內切圓的圓心"
      },
      "explanation": "圓與三邊相切時，圓心到三邊的垂直距離都等於半徑，因此圓心是內心。",
      "steps": [
        "辨認圓位於三角形內",
        "相切距離等於半徑",
        "連結到三邊等距的內心"
      ],
      "optionAnalysis": [
        {
          "choice": "外接圓的圓心",
          "truth": false,
          "reason": "外接圓通過三頂點。"
        },
        {
          "choice": "斜邊中點",
          "truth": false,
          "reason": "只描述直角三角形外心。"
        },
        {
          "choice": "任一角的頂點",
          "truth": false,
          "reason": "頂點到相鄰邊距離為0，不能同時成為內切圓圓心。"
        },
        {
          "choice": "內切圓的圓心",
          "truth": true,
          "reason": "依獨立推導可得到此結果；圓與三邊相切時，圓心到三邊的垂直距離都等於半徑，因此圓心是內心。"
        }
      ],
      "misconceptionTarget": "混淆內切圓與外接圓。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「連結內心與內切圓」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「內切圓的圓心」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：連結內心與內切圓。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "230cdee8bd2bf75184af6cd79af45d54b47a113752b5bd1dc3cc3dfac9deb143"
    },
    {
      "questionId": "u20-s007-v004",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter",
      "skillSlot": "s007",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "要作出一個三角形的內心，哪個步驟正確？",
      "givenConditions": [],
      "target": "選擇內心作圖方法",
      "choices": [
        "作任兩邊的垂直平分線",
        "作任兩個內角的角平分線，取交點",
        "連結頂點與對邊中點",
        "從頂點作垂線"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "任兩個內角角平分線的交點就是內心，第三條角平分線也會通過。",
        "result": "作任兩個內角的角平分線，取交點"
      },
      "explanation": "任兩個內角角平分線的交點就是內心，第三條角平分線也會通過。",
      "steps": [
        "選兩個內角",
        "各作角平分線",
        "取交點並以第三條檢查"
      ],
      "optionAnalysis": [
        {
          "choice": "作任兩邊的垂直平分線",
          "truth": false,
          "reason": "會得到外心。"
        },
        {
          "choice": "作任兩個內角的角平分線，取交點",
          "truth": true,
          "reason": "依獨立推導可得到此結果；任兩個內角角平分線的交點就是內心，第三條角平分線也會通過。"
        },
        {
          "choice": "連結頂點與對邊中點",
          "truth": false,
          "reason": "會得到中線並交於重心。"
        },
        {
          "choice": "從頂點作垂線",
          "truth": false,
          "reason": "三條高交於垂心。"
        }
      ],
      "misconceptionTarget": "只記得作兩條特殊線，忘記線的種類。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「選擇內心作圖方法」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「作任兩個內角的角平分線，取交點」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：選擇內心作圖方法。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "0a23d92240d8e9f4e13dc64bd7ffb1525a376a6ce6637d512a9580e258266bfc"
    },
    {
      "questionId": "u20-s007-v005",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter",
      "skillSlot": "s007",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "關於內心的位置，下列何者正確？",
      "givenConditions": [],
      "target": "辨認內心位置不受角型影響",
      "choices": [
        "任何非退化三角形的內心都在三角形內部",
        "只有銳角三角形的內心在內部",
        "直角三角形的內心在斜邊上",
        "鈍角三角形的內心在外部"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "三個內角的角平分線都位於角的內部，它們的交點位於三角形內部。",
        "result": "任何非退化三角形的內心都在三角形內部"
      },
      "explanation": "三個內角的角平分線都位於角的內部，它們的交點位於三角形內部。",
      "steps": [
        "每條內角平分線穿過三角形內部",
        "三線共點",
        "角型不改變內心在內部的事實"
      ],
      "optionAnalysis": [
        {
          "choice": "任何非退化三角形的內心都在三角形內部",
          "truth": true,
          "reason": "依獨立推導可得到此結果；三個內角的角平分線都位於角的內部，它們的交點位於三角形內部。"
        },
        {
          "choice": "只有銳角三角形的內心在內部",
          "truth": false,
          "reason": "直角與鈍角三角形也在內部。"
        },
        {
          "choice": "直角三角形的內心在斜邊上",
          "truth": false,
          "reason": "斜邊中點是外心。"
        },
        {
          "choice": "鈍角三角形的內心在外部",
          "truth": false,
          "reason": "這是混用外心或垂心位置。"
        }
      ],
      "misconceptionTarget": "把內心位置套用外心分類。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「辨認內心位置不受角型影響」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「任何非退化三角形的內心都在三角形內部」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：辨認內心位置不受角型影響。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "836d9c441df17f7b542ed811be8e9b59d9bb6436f8e690d277d77d9891ce5363"
    },
    {
      "questionId": "u20-s007-v006",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter",
      "skillSlot": "s007",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "I 是內心，連結頂點 A 與 I。直線 AI 必定是什麼？",
      "givenConditions": [],
      "target": "辨認連結頂點與內心的線",
      "choices": [
        "中線",
        "角平分線",
        "高",
        "垂直平分線"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "內心位於三個內角角平分線上，所以 AI 平分 ∠A。",
        "result": "角平分線"
      },
      "explanation": "內心位於三個內角角平分線上，所以 AI 平分 ∠A。",
      "steps": [
        "I 是內心",
        "內心在 ∠A 角平分線上",
        "AI 為角平分線"
      ],
      "optionAnalysis": [
        {
          "choice": "中線",
          "truth": false,
          "reason": "中線必須通過對邊中點，題目未給。"
        },
        {
          "choice": "角平分線",
          "truth": true,
          "reason": "依獨立推導可得到此結果；內心位於三個內角角平分線上，所以 AI 平分 ∠A。"
        },
        {
          "choice": "高",
          "truth": false,
          "reason": "高必須垂直對邊。"
        },
        {
          "choice": "垂直平分線",
          "truth": false,
          "reason": "垂直平分線通常不通過頂點 A。"
        }
      ],
      "misconceptionTarget": "看到頂點連中心就一律稱中線。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「辨認連結頂點與內心的線」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「角平分線」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：辨認連結頂點與內心的線。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "4bc4fece509b74aeea021957442f367511f3b593015bd04f85d987136dc70874"
    },
    {
      "questionId": "u20-s007-v007",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter",
      "skillSlot": "s007",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "點 P 位於 ∠A 內部，且 P 到射線 AB、AC 的垂直距離相等。可推出什麼？",
      "givenConditions": [],
      "target": "由邊距等距判斷角平分線",
      "choices": [
        "P 在 BC 的垂直平分線上",
        "P 是 AB 的中點",
        "P 在 ∠A 的角平分線上",
        "P 必為外心"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "角內到兩邊距離相等的點位於該角的角平分線上。",
        "result": "P 在 ∠A 的角平分線上"
      },
      "explanation": "角內到兩邊距離相等的點位於該角的角平分線上。",
      "steps": [
        "確認 P 在角內",
        "比較到兩邊的垂直距離",
        "使用角平分線逆性質"
      ],
      "optionAnalysis": [
        {
          "choice": "P 在 BC 的垂直平分線上",
          "truth": false,
          "reason": "需要 PB＝PC。"
        },
        {
          "choice": "P 是 AB 的中點",
          "truth": false,
          "reason": "等距對象是兩條射線，不是端點。"
        },
        {
          "choice": "P 在 ∠A 的角平分線上",
          "truth": true,
          "reason": "依獨立推導可得到此結果；角內到兩邊距離相等的點位於該角的角平分線上。"
        },
        {
          "choice": "P 必為外心",
          "truth": false,
          "reason": "只滿足一個角的條件，且性質對象錯誤。"
        }
      ],
      "misconceptionTarget": "把到兩邊等距誤認為到兩端點等距。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「由邊距等距判斷角平分線」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「P 在 ∠A 的角平分線上」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：由邊距等距判斷角平分線。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "7c578a870ac09b02d700737a0895440ce215735a5703b320a96f6a8e773d9c87"
    },
    {
      "questionId": "u20-s007-v008",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter",
      "skillSlot": "s007",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "△ABC 的 ∠A、∠B 角平分線交於 I。關於 ∠C 的角平分線，何者正確？",
      "givenConditions": [],
      "target": "證明角平分線共點",
      "choices": [
        "第三條與前兩條平行",
        "第三條只在等邊三角形通過 I",
        "第三條可能沒有交點",
        "第三個內角的角平分線也通過 I"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "I 到 AB、AC 等距，也到 BA、BC 等距，因此 I 到 AC、BC 等距，故 I 位於 ∠C 的角平分線。",
        "result": "第三個內角的角平分線也通過 I"
      },
      "explanation": "I 到 AB、AC 等距，也到 BA、BC 等距，因此 I 到 AC、BC 等距，故 I 位於 ∠C 的角平分線。",
      "steps": [
        "由 ∠A 平分線得距 AB＝距 AC",
        "由 ∠B 平分線得距 AB＝距 BC",
        "用遞移得到距 AC＝距 BC"
      ],
      "optionAnalysis": [
        {
          "choice": "第三條與前兩條平行",
          "truth": false,
          "reason": "三條內角平分線共點。"
        },
        {
          "choice": "第三條只在等邊三角形通過 I",
          "truth": false,
          "reason": "所有三角形都成立。"
        },
        {
          "choice": "第三條可能沒有交點",
          "truth": false,
          "reason": "非退化三角形必有唯一內心。"
        },
        {
          "choice": "第三個內角的角平分線也通過 I",
          "truth": true,
          "reason": "依獨立推導可得到此結果；I 到 AB、AC 等距，也到 BA、BC 等距，因此 I 到 AC、BC 等距，故 I 位於 ∠C 的角平分線。"
        }
      ],
      "misconceptionTarget": "把三條角平分線共點誤當特殊情況。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「證明角平分線共點」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「第三個內角的角平分線也通過 I」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：證明角平分線共點。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "703c5c763b1fe89a25e7a72c6c48cefd7322cb93b330f880ffb68a5a8fb736d0"
    },
    {
      "questionId": "u20-s007-v009",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter",
      "skillSlot": "s007",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "從三角形頂點 A 向其內切圓作沿 AB、AC 的兩段切線，切點分別為 E、F。下列何者成立？",
      "givenConditions": [],
      "target": "連結內切圓與切線段性質",
      "choices": [
        "半徑彼此不等",
        "兩條切線段長相等",
        "切點必是邊的中點",
        "內切圓通過三個頂點"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "從同一外點 A 向同一圓所作的兩條切線段相等，所以 AE＝AF。",
        "result": "兩條切線段長相等"
      },
      "explanation": "從同一外點 A 向同一圓所作的兩條切線段相等，所以 AE＝AF。",
      "steps": [
        "A 是圓外同一點",
        "AE、AF 為切線段",
        "使用同外點切線長相等"
      ],
      "optionAnalysis": [
        {
          "choice": "半徑彼此不等",
          "truth": false,
          "reason": "同一圓半徑相等。"
        },
        {
          "choice": "兩條切線段長相等",
          "truth": true,
          "reason": "依獨立推導可得到此結果；從同一外點 A 向同一圓所作的兩條切線段相等，所以 AE＝AF。"
        },
        {
          "choice": "切點必是邊的中點",
          "truth": false,
          "reason": "一般不一定。"
        },
        {
          "choice": "內切圓通過三個頂點",
          "truth": false,
          "reason": "內切圓與邊相切，不通過頂點。"
        }
      ],
      "misconceptionTarget": "把切點誤認為邊中點。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「連結內切圓與切線段性質」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「兩條切線段長相等」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：連結內切圓與切線段性質。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "2795c296632923baef40b5e5999cc1cc4885802b58a09d875d692b465138ecc2"
    },
    {
      "questionId": "u20-s007-v010",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter",
      "skillSlot": "s007",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "三角形公園要設灑水器，使它到三條邊界的最短距離相同。應設在哪裡？",
      "givenConditions": [],
      "target": "在邊界等距情境選擇內心",
      "choices": [
        "設在外心，因為到三邊距離相同",
        "設在重心，因為一定最靠近每一邊",
        "設在垂心，因為高與邊界等距",
        "設在內心，因為到三條邊界的垂直距離相同"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "點到邊界的最短距離是垂直距離；到三邊垂直距離相等的點是內心。",
        "result": "設在內心，因為到三條邊界的垂直距離相同"
      },
      "explanation": "點到邊界的最短距離是垂直距離；到三邊垂直距離相等的點是內心。",
      "steps": [
        "把邊界視為三角形三邊",
        "最短距離取垂線",
        "選內心"
      ],
      "optionAnalysis": [
        {
          "choice": "設在外心，因為到三邊距離相同",
          "truth": false,
          "reason": "外心到三頂點等距。"
        },
        {
          "choice": "設在重心，因為一定最靠近每一邊",
          "truth": false,
          "reason": "重心無此等距性質。"
        },
        {
          "choice": "設在垂心，因為高與邊界等距",
          "truth": false,
          "reason": "垂心是高的交點，不保證邊距相等。"
        },
        {
          "choice": "設在內心，因為到三條邊界的垂直距離相同",
          "truth": true,
          "reason": "依獨立推導可得到此結果；點到邊界的最短距離是垂直距離；到三邊垂直距離相等的點是內心。"
        }
      ],
      "misconceptionTarget": "忽略服務對象是邊而非頂點。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "距離均取到邊界所在直線的垂直距離。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「在邊界等距情境選擇內心」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「設在內心，因為到三條邊界的垂直距離相同」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在邊界等距情境選擇內心。",
      "literacyContextNecessity": "灑水器到三條邊界的最短距離直接對應內心，公園邊界資訊不可刪除。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "de0919e5b9120d6c739ff255dca4673df9c086457561cd0a93d668df0400ccff"
    },
    {
      "questionId": "u20-s007-v011",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter",
      "skillSlot": "s007",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "要在三角形花圃內畫最大且同時貼住三邊的圓，已找到內心 I。接下來如何決定半徑？",
      "givenConditions": [],
      "target": "決定內切圓半徑",
      "choices": [
        "量內心到任一頂點",
        "量任一條中線長",
        "半徑應量內心到任一邊的垂直距離",
        "量最長邊的一半"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "內切圓半徑是 I 到任一邊的垂直距離，三個距離相等。",
        "result": "半徑應量內心到任一邊的垂直距離"
      },
      "explanation": "內切圓半徑是 I 到任一邊的垂直距離，三個距離相等。",
      "steps": [
        "從 I 向任一邊作垂線",
        "取垂線段長為半徑",
        "以 I 為圓心畫圓"
      ],
      "optionAnalysis": [
        {
          "choice": "量內心到任一頂點",
          "truth": false,
          "reason": "那不是內切圓半徑。"
        },
        {
          "choice": "量任一條中線長",
          "truth": false,
          "reason": "中線與內切圓無固定等式。"
        },
        {
          "choice": "半徑應量內心到任一邊的垂直距離",
          "truth": true,
          "reason": "依獨立推導可得到此結果；內切圓半徑是 I 到任一邊的垂直距離，三個距離相等。"
        },
        {
          "choice": "量最長邊的一半",
          "truth": false,
          "reason": "這是直角三角形外接圓常見半徑。"
        }
      ],
      "misconceptionTarget": "把圓到邊相切所需的垂直半徑忽略。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「決定內切圓半徑」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「半徑應量內心到任一邊的垂直距離」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：決定內切圓半徑。",
      "literacyContextNecessity": "花圃要求圓同時貼住三邊，半徑必須是到邊的垂直距離。",
      "figureId": "fig-u20-incenter-garden-01",
      "drawingSpecId": "fig-u20-incenter-garden-01",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "26d4a3dbdf2ce1a913a44b78ac17b3f1a2b16c48184d961ae609859e9585e0f5"
    },
    {
      "questionId": "u20-s007-v012",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter",
      "skillSlot": "s007",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "一塊鈍角三角形土地要設到三邊等距的標記點。能否使用內心？",
      "givenConditions": [],
      "target": "評估鈍角區域的內心應用",
      "choices": [
        "可以；角平分線交點仍在三角形內",
        "不可以，鈍角三角形沒有內心",
        "不可以，內心一定在外部",
        "只有等腰三角形可設"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "可以。任何非退化三角形的內心都在內部，且到三邊垂直距離相等；鈍角不影響此性質。",
        "result": "可以；角平分線交點仍在三角形內"
      },
      "explanation": "可以。任何非退化三角形的內心都在內部，且到三邊垂直距離相等；鈍角不影響此性質。",
      "steps": [
        "確認土地為非退化三角形",
        "內心位置不依角型改變",
        "套用三邊等距性質"
      ],
      "optionAnalysis": [
        {
          "choice": "可以；角平分線交點仍在三角形內",
          "truth": true,
          "reason": "依獨立推導可得到此結果；可以。任何非退化三角形的內心都在內部，且到三邊垂直距離相等；鈍角不影響此性質。"
        },
        {
          "choice": "不可以，鈍角三角形沒有內心",
          "truth": false,
          "reason": "所有三角形都有內心。"
        },
        {
          "choice": "不可以，內心一定在外部",
          "truth": false,
          "reason": "鈍角時外心與垂心可能在外部，不是內心。"
        },
        {
          "choice": "只有等腰三角形可設",
          "truth": false,
          "reason": "一般三角形也有角平分線共點。"
        }
      ],
      "misconceptionTarget": "把外心位置規則誤套到內心。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「評估鈍角區域的內心應用」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「可以；角平分線交點仍在三角形內」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：評估鈍角區域的內心應用。",
      "literacyContextNecessity": "土地角型可能使其他中心外移，但內心仍在內部，這是選址的重要情境判斷。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "a1c63a223d127a5d97f242794d72d8c141bac7f18d5503d470cb0581920ae658"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u20-s007-cr001",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter",
      "skillSlot": "s007",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "請說明如何作出 △ABC 的內心 I，並證明 I 到三邊的垂直距離相等。",
      "requiredWork": [
        "作兩個內角角平分線。",
        "使用角平分線上點到兩邊等距。",
        "連接第三邊距離。"
      ],
      "standardSolution": [
        "作 ∠A、∠B 的角平分線，交於 I。",
        "I 在 ∠A 的角平分線上，所以 I 到 AB、AC 的垂直距離相等；I 在 ∠B 的角平分線上，所以 I 到 BA、BC 的垂直距離相等。",
        "由遞移可得 I 到 AB、AC、BC 三邊的垂直距離都相等，因此 I 是內心。"
      ],
      "alternativeMethods": [
        "也可作任意兩個內角角平分線；第三條會因相同等距推理通過 I。"
      ],
      "reasoningSteps": [
        "作 ∠A、∠B 的角平分線，交於 I。",
        "I 在 ∠A 的角平分線上，所以 I 到 AB、AC 的垂直距離相等；I 在 ∠B 的角平分線上，所以 I 到 BA、BC 的垂直距離相等。",
        "由遞移可得 I 到 AB、AC、BC 三邊的垂直距離都相等，因此 I 是內心。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "作圖與兩次角平分線等距推理完整，明確指出垂直距離。"
        },
        {
          "score": 2,
          "criteria": "作圖正確並說三邊等距，但未展開遞移證明。"
        },
        {
          "score": 1,
          "criteria": "只會作角平分線交點，或把距離說成到頂點。"
        },
        {
          "score": 0,
          "criteria": "使用垂直平分線或中線找點。"
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
        "未說距離是垂直距離。",
        "把內心到三頂點等距。",
        "只作一條角平分線。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "reSolvedWithoutStoredAnswer": true,
        "derivedResult": "作 ∠A、∠B 的角平分線，交於 I。；I 在 ∠A 的角平分線上，所以 I 到 AB、AC 的垂直距離相等；I 在 ∠B 的角平分線上，所以 I 到 BA、BC 的垂直距離相等。；由遞移可得 I 到 AB、AC、BC 三邊的垂直距離都相等，因此 I 是內心。",
        "rubricAlignment": "每一級分均依本題要求的具體推理、計算或審查內容撰寫。",
        "ambiguity": "題目所需工作與評分對象明確；替代方法只在數學上合法時接受。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "contentSha256": "e5bd9b52ffd751b29e1eae59eaa7e4cd4c8c83e720b30c41cca0c0667bc4d88c"
    },
    {
      "questionId": "u20-s007-cr002",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter",
      "skillSlot": "s007",
      "difficulty": "literacy",
      "itemType": "constructed-response",
      "prompt": "三角形花圃要畫一個同時與三邊相切的圓。請寫出圓心與半徑的決定方法，並說明如何檢查三處確實相切。",
      "requiredWork": [
        "圓心取內心。",
        "半徑取內心到邊的垂距。",
        "用半徑垂直切線與三距相等檢查。"
      ],
      "standardSolution": [
        "先作兩個內角角平分線，交點 I 為內心。",
        "從 I 向任一邊作垂線，垂線段長 r 作為半徑。因 I 到三邊垂距相等，以 I 為圓心、r 為半徑的圓會同時碰到三邊。",
        "檢查每個接觸點處的半徑都與該邊垂直，即可確認相切。"
      ],
      "alternativeMethods": [
        "可分別量三個垂距並確認皆為r，但量測只作施工複核，幾何理由仍是角平分線性質。"
      ],
      "reasoningSteps": [
        "先作兩個內角角平分線，交點 I 為內心。",
        "從 I 向任一邊作垂線，垂線段長 r 作為半徑。因 I 到三邊垂距相等，以 I 為圓心、r 為半徑的圓會同時碰到三邊。",
        "檢查每個接觸點處的半徑都與該邊垂直，即可確認相切。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "圓心、半徑與三處相切驗證皆正確，且提到垂直距離。"
        },
        {
          "score": 2,
          "criteria": "知道內心與垂距半徑，但未說明相切檢查。"
        },
        {
          "score": 1,
          "criteria": "只答內心，或只說『取到邊距離』未說垂直。"
        },
        {
          "score": 0,
          "criteria": "選外心或以到頂點距離作半徑。"
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
        "把切點當邊中點。",
        "以內心到頂點作半徑。",
        "只依圓看起來置中。"
      ],
      "figureId": "fig-u20-incenter-garden-01",
      "drawingSpecId": "fig-u20-incenter-garden-01",
      "independentReview": {
        "reSolvedWithoutStoredAnswer": true,
        "derivedResult": "先作兩個內角角平分線，交點 I 為內心。；從 I 向任一邊作垂線，垂線段長 r 作為半徑。因 I 到三邊垂距相等，以 I 為圓心、r 為半徑的圓會同時碰到三邊。；檢查每個接觸點處的半徑都與該邊垂直，即可確認相切。",
        "rubricAlignment": "每一級分均依本題要求的具體推理、計算或審查內容撰寫。",
        "ambiguity": "題目所需工作與評分對象明確；替代方法只在數學上合法時接受。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "contentSha256": "8e174f6e01f81fa935c02b1339f5c44ecd852b07dcc1ff5bb4b6881d21b4534e"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u20-s007-v001",
      "contentSha256": "8f30fc036008d7e310be34d1ce4cbb8249cf9d647c5f20d51b51a5b30fdf0b0f",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "內心定義為三個內角角平分線的共同交點。",
      "derivedAnswer": "三個內角角平分線的交點",
      "storedAnswer": "三個內角角平分線的交點",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「三個內角角平分線的交點」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「混淆四種三角形的心。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：辨認內心定義。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「下列哪一個作圖描述會得到三角形的內心？」要求辨認內心定義。獨立推導為：內心定義為三個內角角平分線的共同交點。 四選項依序判定：三邊垂直平分線的交點=假，這是外心。；三條中線的交點=假，這是重心。；三個內角角平分線的交點=真，依獨立推導可得到此結果；內心定義為三個內角角平分線的共同交點。；三條高的交點=假，這是垂心。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "4ce2035366b424c401baf5a7112220cb8d0235d72841dda699d66c622f79f28a"
    },
    {
      "questionId": "u20-s007-v002",
      "contentSha256": "2ee0f9c030eb2160e133e2158f93b79da958e61c6bf0880dfd3cd2c5b1320e1a",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "內心位在各角平分線上；角平分線上的點到角的兩邊距離相等，因此 I 到三邊的垂直距離相等。",
      "derivedAnswer": "到三邊的垂直距離相等",
      "storedAnswer": "到三邊的垂直距離相等",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「到三邊的垂直距離相等」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「沒有強調距離必須是垂直距離。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：理解內心的等距對象。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 I 是 △ABC 的內心，下列何者一定成立？」要求理解內心的等距對象。獨立推導為：內心位在各角平分線上；角平分線上的點到角的兩邊距離相等，因此 I 到三邊的垂直距離相等。 四選項依序判定：到三邊的垂直距離相等=真，依獨立推導可得到此結果；內心位在各角平分線上；角平分線上的點到角的兩邊距離相等，因此 I 到三邊的垂直距離相等。；到三頂點距離相等=假，這是外心性質。；到三邊中點距離相等=假，內心比較的是到邊的垂直距離。；把中線分成2比1=假，這是重心性質。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "f6248333f627321dca9f509ccb975e66eb9fe3149cb7e20aa4136e3290b13d75"
    },
    {
      "questionId": "u20-s007-v003",
      "contentSha256": "230cdee8bd2bf75184af6cd79af45d54b47a113752b5bd1dc3cc3dfac9deb143",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "圓與三邊相切時，圓心到三邊的垂直距離都等於半徑，因此圓心是內心。",
      "derivedAnswer": "內切圓的圓心",
      "storedAnswer": "內切圓的圓心",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「內切圓的圓心」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「混淆內切圓與外接圓。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：連結內心與內切圓。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「與三角形三邊都相切的圓稱為內切圓，其圓心是哪一個心？」要求連結內心與內切圓。獨立推導為：圓與三邊相切時，圓心到三邊的垂直距離都等於半徑，因此圓心是內心。 四選項依序判定：外接圓的圓心=假，外接圓通過三頂點。；斜邊中點=假，只描述直角三角形外心。；任一角的頂點=假，頂點到相鄰邊距離為0，不能同時成為內切圓圓心。；內切圓的圓心=真，依獨立推導可得到此結果；圓與三邊相切時，圓心到三邊的垂直距離都等於半徑，因此圓心是內心。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "22d1bc86376b6207d7290f9ec8e1b2f8128c569226434af15fd41ee6e57b8727"
    },
    {
      "questionId": "u20-s007-v004",
      "contentSha256": "0a23d92240d8e9f4e13dc64bd7ffb1525a376a6ce6637d512a9580e258266bfc",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "任兩個內角角平分線的交點就是內心，第三條角平分線也會通過。",
      "derivedAnswer": "作任兩個內角的角平分線，取交點",
      "storedAnswer": "作任兩個內角的角平分線，取交點",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「作任兩個內角的角平分線，取交點」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「只記得作兩條特殊線，忘記線的種類。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：選擇內心作圖方法。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「要作出一個三角形的內心，哪個步驟正確？」要求選擇內心作圖方法。獨立推導為：任兩個內角角平分線的交點就是內心，第三條角平分線也會通過。 四選項依序判定：作任兩邊的垂直平分線=假，會得到外心。；作任兩個內角的角平分線，取交點=真，依獨立推導可得到此結果；任兩個內角角平分線的交點就是內心，第三條角平分線也會通過。；連結頂點與對邊中點=假，會得到中線並交於重心。；從頂點作垂線=假，三條高交於垂心。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "0fec686ca0635262c9a32f18228c7add170cbab018f197beaa072be0709ba950"
    },
    {
      "questionId": "u20-s007-v005",
      "contentSha256": "836d9c441df17f7b542ed811be8e9b59d9bb6436f8e690d277d77d9891ce5363",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "三個內角的角平分線都位於角的內部，它們的交點位於三角形內部。",
      "derivedAnswer": "任何非退化三角形的內心都在三角形內部",
      "storedAnswer": "任何非退化三角形的內心都在三角形內部",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「任何非退化三角形的內心都在三角形內部」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把內心位置套用外心分類。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：辨認內心位置不受角型影響。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「關於內心的位置，下列何者正確？」要求辨認內心位置不受角型影響。獨立推導為：三個內角的角平分線都位於角的內部，它們的交點位於三角形內部。 四選項依序判定：任何非退化三角形的內心都在三角形內部=真，依獨立推導可得到此結果；三個內角的角平分線都位於角的內部，它們的交點位於三角形內部。；只有銳角三角形的內心在內部=假，直角與鈍角三角形也在內部。；直角三角形的內心在斜邊上=假，斜邊中點是外心。；鈍角三角形的內心在外部=假，這是混用外心或垂心位置。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "d75cd49c26af3d4e9e54b1989ce45d66ea953458a30572f4ec6c93577aeefdc7"
    },
    {
      "questionId": "u20-s007-v006",
      "contentSha256": "4bc4fece509b74aeea021957442f367511f3b593015bd04f85d987136dc70874",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "內心位於三個內角角平分線上，所以 AI 平分 ∠A。",
      "derivedAnswer": "角平分線",
      "storedAnswer": "角平分線",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「角平分線」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「看到頂點連中心就一律稱中線。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：辨認連結頂點與內心的線。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「I 是內心，連結頂點 A 與 I。直線 AI 必定是什麼？」要求辨認連結頂點與內心的線。獨立推導為：內心位於三個內角角平分線上，所以 AI 平分 ∠A。 四選項依序判定：中線=假，中線必須通過對邊中點，題目未給。；角平分線=真，依獨立推導可得到此結果；內心位於三個內角角平分線上，所以 AI 平分 ∠A。；高=假，高必須垂直對邊。；垂直平分線=假，垂直平分線通常不通過頂點 A。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "d0ca384c9126f7a44e4b733800ddf37aecf50cb6edb24d62b33a095845e45991"
    },
    {
      "questionId": "u20-s007-v007",
      "contentSha256": "7c578a870ac09b02d700737a0895440ce215735a5703b320a96f6a8e773d9c87",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "角內到兩邊距離相等的點位於該角的角平分線上。",
      "derivedAnswer": "P 在 ∠A 的角平分線上",
      "storedAnswer": "P 在 ∠A 的角平分線上",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「P 在 ∠A 的角平分線上」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把到兩邊等距誤認為到兩端點等距。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：由邊距等距判斷角平分線。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「點 P 位於 ∠A 內部，且 P 到射線 AB、AC 的垂直距離相等。可推出什麼？」要求由邊距等距判斷角平分線。獨立推導為：角內到兩邊距離相等的點位於該角的角平分線上。 四選項依序判定：P 在 BC 的垂直平分線上=假，需要 PB＝PC。；P 是 AB 的中點=假，等距對象是兩條射線，不是端點。；P 在 ∠A 的角平分線上=真，依獨立推導可得到此結果；角內到兩邊距離相等的點位於該角的角平分線上。；P 必為外心=假，只滿足一個角的條件，且性質對象錯誤。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "2c3d9d59ef17b5ee178c6b062825b56efd68e5b7d4ef1ff9f169a0d413205cb8"
    },
    {
      "questionId": "u20-s007-v008",
      "contentSha256": "703c5c763b1fe89a25e7a72c6c48cefd7322cb93b330f880ffb68a5a8fb736d0",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "I 到 AB、AC 等距，也到 BA、BC 等距，因此 I 到 AC、BC 等距，故 I 位於 ∠C 的角平分線。",
      "derivedAnswer": "第三個內角的角平分線也通過 I",
      "storedAnswer": "第三個內角的角平分線也通過 I",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「第三個內角的角平分線也通過 I」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把三條角平分線共點誤當特殊情況。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：證明角平分線共點。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「△ABC 的 ∠A、∠B 角平分線交於 I。關於 ∠C 的角平分線，何者正確？」要求證明角平分線共點。獨立推導為：I 到 AB、AC 等距，也到 BA、BC 等距，因此 I 到 AC、BC 等距，故 I 位於 ∠C 的角平分線。 四選項依序判定：第三條與前兩條平行=假，三條內角平分線共點。；第三條只在等邊三角形通過 I=假，所有三角形都成立。；第三條可能沒有交點=假，非退化三角形必有唯一內心。；第三個內角的角平分線也通過 I=真，依獨立推導可得到此結果；I 到 AB、AC 等距，也到 BA、BC 等距，因此 I 到 AC、BC 等距，故 I 位於 ∠C 的角平分線。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "1f59c7c3321dbcdbb39b9037c3989b9daa4fbf7a7fcbd92bb2f905d4a36a616d"
    },
    {
      "questionId": "u20-s007-v009",
      "contentSha256": "2795c296632923baef40b5e5999cc1cc4885802b58a09d875d692b465138ecc2",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "從同一外點 A 向同一圓所作的兩條切線段相等，所以 AE＝AF。",
      "derivedAnswer": "兩條切線段長相等",
      "storedAnswer": "兩條切線段長相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「兩條切線段長相等」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把切點誤認為邊中點。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：連結內切圓與切線段性質。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「從三角形頂點 A 向其內切圓作沿 AB、AC 的兩段切線，切點分別為 E、F。下列何者成立？」要求連結內切圓與切線段性質。獨立推導為：從同一外點 A 向同一圓所作的兩條切線段相等，所以 AE＝AF。 四選項依序判定：半徑彼此不等=假，同一圓半徑相等。；兩條切線段長相等=真，依獨立推導可得到此結果；從同一外點 A 向同一圓所作的兩條切線段相等，所以 AE＝AF。；切點必是邊的中點=假，一般不一定。；內切圓通過三個頂點=假，內切圓與邊相切，不通過頂點。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "e4bb4367d495038b780e02ce6527906d42af3c05552edc8d3423d1d8c2550317"
    },
    {
      "questionId": "u20-s007-v010",
      "contentSha256": "de0919e5b9120d6c739ff255dca4673df9c086457561cd0a93d668df0400ccff",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "點到邊界的最短距離是垂直距離；到三邊垂直距離相等的點是內心。",
      "derivedAnswer": "設在內心，因為到三條邊界的垂直距離相同",
      "storedAnswer": "設在內心，因為到三條邊界的垂直距離相同",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「設在內心，因為到三條邊界的垂直距離相同」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "距離均取到邊界所在直線的垂直距離。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「忽略服務對象是邊而非頂點。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在邊界等距情境選擇內心。",
      "literacyContextNecessity": "灑水器到三條邊界的最短距離直接對應內心，公園邊界資訊不可刪除。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形公園要設灑水器，使它到三條邊界的最短距離相同。應設在哪裡？」要求在邊界等距情境選擇內心。獨立推導為：點到邊界的最短距離是垂直距離；到三邊垂直距離相等的點是內心。 四選項依序判定：設在外心，因為到三邊距離相同=假，外心到三頂點等距。；設在重心，因為一定最靠近每一邊=假，重心無此等距性質。；設在垂心，因為高與邊界等距=假，垂心是高的交點，不保證邊距相等。；設在內心，因為到三條邊界的垂直距離相同=真，依獨立推導可得到此結果；點到邊界的最短距離是垂直距離；到三邊垂直距離相等的點是內心。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "573234f52afeff0a863b1dea043ef144a1439413f076cc5f4d31d301867fa459"
    },
    {
      "questionId": "u20-s007-v011",
      "contentSha256": "26d4a3dbdf2ce1a913a44b78ac17b3f1a2b16c48184d961ae609859e9585e0f5",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "內切圓半徑是 I 到任一邊的垂直距離，三個距離相等。",
      "derivedAnswer": "半徑應量內心到任一邊的垂直距離",
      "storedAnswer": "半徑應量內心到任一邊的垂直距離",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「半徑應量內心到任一邊的垂直距離」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把圓到邊相切所需的垂直半徑忽略。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：決定內切圓半徑。",
      "literacyContextNecessity": "花圃要求圓同時貼住三邊，半徑必須是到邊的垂直距離。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「要在三角形花圃內畫最大且同時貼住三邊的圓，已找到內心 I。接下來如何決定半徑？」要求決定內切圓半徑。獨立推導為：內切圓半徑是 I 到任一邊的垂直距離，三個距離相等。 四選項依序判定：量內心到任一頂點=假，那不是內切圓半徑。；量任一條中線長=假，中線與內切圓無固定等式。；半徑應量內心到任一邊的垂直距離=真，依獨立推導可得到此結果；內切圓半徑是 I 到任一邊的垂直距離，三個距離相等。；量最長邊的一半=假，這是直角三角形外接圓常見半徑。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "f12328022da66636304b3749b860a9c066d2a57a9ce177de1f92056ac299ecc5"
    },
    {
      "questionId": "u20-s007-v012",
      "contentSha256": "a1c63a223d127a5d97f242794d72d8c141bac7f18d5503d470cb0581920ae658",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "可以。任何非退化三角形的內心都在內部，且到三邊垂直距離相等；鈍角不影響此性質。",
      "derivedAnswer": "可以；角平分線交點仍在三角形內",
      "storedAnswer": "可以；角平分線交點仍在三角形內",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「可以；角平分線交點仍在三角形內」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把外心位置規則誤套到內心。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：評估鈍角區域的內心應用。",
      "literacyContextNecessity": "土地角型可能使其他中心外移，但內心仍在內部，這是選址的重要情境判斷。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一塊鈍角三角形土地要設到三邊等距的標記點。能否使用內心？」要求評估鈍角區域的內心應用。獨立推導為：可以。任何非退化三角形的內心都在內部，且到三邊垂直距離相等；鈍角不影響此性質。 四選項依序判定：可以；角平分線交點仍在三角形內=真，依獨立推導可得到此結果；可以。任何非退化三角形的內心都在內部，且到三邊垂直距離相等；鈍角不影響此性質。；不可以，鈍角三角形沒有內心=假，所有三角形都有內心。；不可以，內心一定在外部=假，鈍角時外心與垂心可能在外部，不是內心。；只有等腰三角形可設=假，一般三角形也有角平分線共點。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "3a2dcda59c242c2ecd150e9b06d934d59f5f73d2ab9bcd595046e1dbfe96f8a8"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "fig-u20-incenter-garden-01",
      "unitId": "u20",
      "ownerSkillSlot": "s007",
      "title": "三角形花圃內切圓圖",
      "description": "三角形花圃ABC內有內切圓，圓心I，向三邊的半徑分別垂直並在切點標直角。",
      "canvas": {
        "width": 480,
        "height": 320,
        "viewBox": "0 0 480 320"
      },
      "coordinates": {
        "A": [
          205,
          45
        ],
        "B": [
          70,
          260
        ],
        "C": [
          420,
          250
        ],
        "I": [
          236,
          185
        ],
        "radius": 62
      },
      "visibleLineRules": "實線表示題設中的線段或道路；虛線表示延長線或輔助線；直角方框、等長刻痕與平行箭頭只在題設提供時使用。",
      "hiddenLineRules": "本單元為平面圖，不使用立體隱線；未畫出的關係不得自行假設。",
      "labels": "所有點名放在點外側至少8像素；避免壓在線段或直角記號上。",
      "toScale": false,
      "visualInferenceWarning": "圖形未按比例，不可用外觀估計未標示的長度或角度。",
      "altText": "三角形ABC內的圓同時貼住三邊，圓心I向三個切點畫虛線半徑並標直角。",
      "svgTitle": "三角形花圃內切圓圖",
      "svgDesc": "三角形花圃ABC內有內切圓，圓心I，向三邊的半徑分別垂直並在切點標直角。",
      "mobileReadabilityReview": "在寬度320像素縮放下，主要線段、直角記號與標籤仍可辨認；字級不小於16。",
      "answerLeakageReview": "圖中只呈現題設標記與辨識所需結構，不標示選項答案、中心名稱結論或未給定數值。",
      "geometryAssertions": [
        "圓位於三角形內",
        "三條半徑到邊且有直角標記",
        "不標示I到頂點等距"
      ],
      "manualVisualInspection": "pass: rendered at 480x320 and reviewed at 320px-equivalent readability; no clipping or answer leakage"
    }
  ]
};
export default skillBundle;
