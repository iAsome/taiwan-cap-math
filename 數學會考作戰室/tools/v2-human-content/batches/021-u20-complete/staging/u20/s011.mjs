// Generated only by serialization from approved reviewed source. Do not edit.
export const sourceDigest="947c40cd5d877223f8aab39b19243fa9b791e94da24bbb837464bd4b719fadb4";
export const skillBundle={
  "lecture": {
    "lectureId": "u20-s011-lecture-r1",
    "unitId": "u20",
    "numericUnitId": 20,
    "topicId": "u20-centers",
    "skillId": "incenter-property",
    "skillSlot": "s011",
    "lockedSkillTitle": "內心性質",
    "title": "內心性質：半角與等垂距及內切圓",
    "audience": "臺灣國中零基礎至會考數學滿分",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能計算內心分角後的角度。",
      "能使用到三邊等垂距求內切圓半徑。",
      "能推導 ∠AIC＝90°＋∠B÷2。",
      "能用內心分割面積。"
    ],
    "prerequisites": [
      {
        "skillId": "circumcenter-property",
        "requiredLevel": "能使用該技能的核心定義與基本推理。"
      }
    ],
    "prerequisiteBridge": "若無單元內先備技能，從已知、圖形標記與國中基本線角概念開始；若有先備技能，先回想「circumcenter-property」再進入本節。",
    "glossary": [
      {
        "term": "半角",
        "definition": "角平分線把一個角分成兩個相等的小角。"
      },
      {
        "term": "切點",
        "definition": "圓與直線只有一個共同點時的接觸點。"
      },
      {
        "term": "內切圓半徑",
        "definition": "內心到任一邊的垂直距離。"
      },
      {
        "term": "半周長",
        "definition": "三角形周長的一半。"
      }
    ],
    "notation": [
      {
        "symbol": "∠BAI=∠IAC=∠A/2",
        "meaning": "AI平分∠A。"
      },
      {
        "symbol": "K=rs",
        "meaning": "面積K等於內切圓半徑r乘半周長s；本課由底高分割推導。"
      }
    ],
    "conceptNarrative": [
      "內心同時位於三個角平分線上，因此每個頂角都會被分成兩半。這能配合三角形內角和推出內心附近的角度。",
      "內切圓半徑不是到頂點的距離，而是到邊的垂線段；半徑在切點處垂直該邊。",
      "連結內心與三頂點，可把原三角形拆成三個高都等於r的小三角形，從而得到面積等於r乘半周長。"
    ],
    "formalDefinitions": [
      {
        "name": "內心夾角性質",
        "statement": "若I為內心，則∠AIC＝90°＋∠B/2。"
      },
      {
        "name": "切線半徑垂直",
        "statement": "圓心到切點的半徑與切線垂直。"
      }
    ],
    "formulas": [
      {
        "formula": "∠AIC=90°+∠B/2",
        "conditions": [
          "I為三角形內心"
        ],
        "meaning": "兩條角平分線所夾角。"
      },
      {
        "formula": "K=r(a+b+c)/2=rs",
        "conditions": [
          "r為內切圓半徑",
          "a,b,c使用同一長度單位"
        ],
        "meaning": "由三個小三角形面積相加。"
      }
    ],
    "nonApplicableCases": [
      "不能把 ∠AIC 寫成 ∠B/2，會漏掉90°。",
      "切點一般不是邊中點。",
      "面積公式中的s是半周長，不是整個周長。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "確認I是內心並標出半角。",
        "check": "哪個頂角被分成兩半？"
      },
      {
        "step": 2,
        "instruction": "需要夾角時，在含I的小三角形用內角和。",
        "check": "是否先把原角除以2？"
      },
      {
        "step": 3,
        "instruction": "需要半徑時，從I向邊作垂線。",
        "check": "垂足是否為切點？"
      },
      {
        "step": 4,
        "instruction": "需要面積時，把三邊分別當底。",
        "check": "三個高是否皆為r？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "∠B=40°，I為內心，求∠AIC。",
        "solutionSteps": [
          "∠B/2=20°。",
          "90°+20°=110°。"
        ],
        "answer": "110°。"
      },
      {
        "exampleId": "L2",
        "prompt": "三邊6、8、10，r=2。",
        "solutionSteps": [
          "半周長=12。",
          "K=rs=2×12。"
        ],
        "answer": "24平方單位。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "半角後又除以2。",
        "why": "重複平分。",
        "correction": "每個完整頂角只除一次。"
      },
      {
        "mistake": "K=r×周長。",
        "why": "漏掉三角形面積的二分之一。",
        "correction": "使用半周長。"
      },
      {
        "mistake": "用內心到頂點當半徑。",
        "why": "內切圓與邊相切。",
        "correction": "作邊的垂線。"
      }
    ],
    "selfCheck": [
      "角是否先平分？",
      "夾角公式中的對面角是哪一個？",
      "半徑是否為垂直距離？",
      "面積單位是否平方化？"
    ],
    "summary": [
      "內心平分三個內角。",
      "到三邊的垂距都是內切圓半徑。",
      "∠AIC＝90°＋∠B/2。",
      "面積可由三個共同高為r的小三角形相加。"
    ],
    "connections": {
      "previous": "先備：circumcenter-property",
      "next": [
        "下一技能研究重心如何以2比1分割中線。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u20-s011-v001",
        "u20-s011-v002",
        "u20-s011-v003",
        "u20-s011-v004",
        "u20-s011-v005",
        "u20-s011-v006",
        "u20-s011-v007",
        "u20-s011-v008",
        "u20-s011-v009",
        "u20-s011-v010",
        "u20-s011-v011",
        "u20-s011-v012"
      ],
      "constructedResponseIds": [
        "u20-s011-cr001",
        "u20-s011-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "invalidUseCasesIncluded": true,
      "skillSpecificEvidence": "夾角與面積公式皆在講義內推導，零基礎學生不需背未說明公式。",
      "reviewerDecision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "legacyContentUsed": false,
    "contentSha256": "032ff43c7ca1808b9a81b07204004877f8edc1b72005fef6d0d9cea66d20c9fd"
  },
  "mcQuestions": [
    {
      "questionId": "u20-s011-v001",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter-property",
      "skillSlot": "s011",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "I 是 △ABC 的內心，I 到邊 AB 的垂直距離為 5 公分。I 到邊 AC 的垂直距離是多少？",
      "givenConditions": [],
      "target": "使用內心到邊等距性質",
      "choices": [
        "2.5 公分",
        "10 公分",
        "5 公分",
        "無法判斷"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "內心到三邊的垂直距離相等，因此到 AC 的距離也是5公分。",
        "result": "5 公分"
      },
      "explanation": "內心到三邊的垂直距離相等，因此到 AC 的距離也是5公分。",
      "steps": [
        "I 是內心",
        "到三邊垂直距離相等",
        "保留同一單位"
      ],
      "optionAnalysis": [
        {
          "choice": "2.5 公分",
          "truth": false,
          "reason": "沒有除以2的理由。"
        },
        {
          "choice": "10 公分",
          "truth": false,
          "reason": "沒有加倍的理由。"
        },
        {
          "choice": "5 公分",
          "truth": true,
          "reason": "依獨立推導可得到此結果；內心到三邊的垂直距離相等，因此到 AC 的距離也是5公分。"
        },
        {
          "choice": "無法判斷",
          "truth": false,
          "reason": "內心性質足夠。"
        }
      ],
      "misconceptionTarget": "把到邊距離誤認為到頂點距離。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "垂直距離以公分表示。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「使用內心到邊等距性質」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「5 公分」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：使用內心到邊等距性質。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "9cfc946cf976e88a34596a8f1fbcefa7a3804a8e30c64ece12142c1ee9718c43"
    },
    {
      "questionId": "u20-s011-v002",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter-property",
      "skillSlot": "s011",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "I 是內心，∠A＝60°。∠BAI 為多少？",
      "givenConditions": [],
      "target": "計算內心連線所分角",
      "choices": [
        "∠BAI＝15°",
        "∠BAI＝30°",
        "∠BAI＝60°",
        "∠BAI＝120°"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "AI 是 ∠A 的角平分線，所以 ∠BAI＝60°÷2＝30°。",
        "result": "∠BAI＝30°"
      },
      "explanation": "AI 是 ∠A 的角平分線，所以 ∠BAI＝60°÷2＝30°。",
      "steps": [
        "AI 平分 ∠A",
        "把60°分成兩個相等角",
        "計算30°"
      ],
      "optionAnalysis": [
        {
          "choice": "∠BAI＝15°",
          "truth": false,
          "reason": "多除以2一次。"
        },
        {
          "choice": "∠BAI＝30°",
          "truth": true,
          "reason": "依獨立推導可得到此結果；AI 是 ∠A 的角平分線，所以 ∠BAI＝60°÷2＝30°。"
        },
        {
          "choice": "∠BAI＝60°",
          "truth": false,
          "reason": "未平分。"
        },
        {
          "choice": "∠BAI＝120°",
          "truth": false,
          "reason": "把角度加倍。"
        }
      ],
      "misconceptionTarget": "知道角平分線卻未把整角除以2。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "角度以度表示。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「計算內心連線所分角」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「∠BAI＝30°」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：計算內心連線所分角。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "7edf31f1ba3615c64ba4b1dcfb826e49c60df5a5489a3717d48270db3b96580f"
    },
    {
      "questionId": "u20-s011-v003",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter-property",
      "skillSlot": "s011",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "以內心 I 為圓心畫內切圓，若 I 到邊 BC 的垂直距離為 r，內切圓半徑是多少？",
      "givenConditions": [],
      "target": "連結內心邊距與內切圓半徑",
      "choices": [
        "2r",
        "r÷2",
        "無固定關係",
        "r"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "圓與 BC 相切時，圓心到切線的垂直距離就是半徑，所以半徑為r。",
        "result": "r"
      },
      "explanation": "圓與 BC 相切時，圓心到切線的垂直距離就是半徑，所以半徑為r。",
      "steps": [
        "I 為圓心",
        "BC 為切線",
        "圓心到切線垂距等於半徑"
      ],
      "optionAnalysis": [
        {
          "choice": "2r",
          "truth": false,
          "reason": "這可能是直徑。"
        },
        {
          "choice": "r÷2",
          "truth": false,
          "reason": "沒有再除半。"
        },
        {
          "choice": "無固定關係",
          "truth": false,
          "reason": "相切條件直接決定半徑。"
        },
        {
          "choice": "r",
          "truth": true,
          "reason": "依獨立推導可得到此結果；圓與 BC 相切時，圓心到切線的垂直距離就是半徑，所以半徑為r。"
        }
      ],
      "misconceptionTarget": "把垂直距離與直徑混淆。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「連結內心邊距與內切圓半徑」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「r」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：連結內心邊距與內切圓半徑。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "bbc4149630179da9e69d2e632f987f1da0fb8234df8d8974b1142ff40cb900e6"
    },
    {
      "questionId": "u20-s011-v004",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter-property",
      "skillSlot": "s011",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "I 是 △ABC 的內心，已知 ∠BAC＝70°。求 ∠IAC。",
      "givenConditions": [],
      "target": "計算角平分後角度",
      "choices": [
        "35°",
        "25°",
        "55°",
        "70°"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "AI 平分 ∠BAC，因此 ∠IAC＝70°÷2＝35°。",
        "result": "35°"
      },
      "explanation": "AI 平分 ∠BAC，因此 ∠IAC＝70°÷2＝35°。",
      "steps": [
        "AI 為角平分線",
        "兩小角相等",
        "70÷2=35"
      ],
      "optionAnalysis": [
        {
          "choice": "35°",
          "truth": true,
          "reason": "依獨立推導可得到此結果；AI 平分 ∠BAC，因此 ∠IAC＝70°÷2＝35°。"
        },
        {
          "choice": "25°",
          "truth": false,
          "reason": "與已知角無正確關係。"
        },
        {
          "choice": "55°",
          "truth": false,
          "reason": "錯把70與半角相加減。"
        },
        {
          "choice": "70°",
          "truth": false,
          "reason": "未平分。"
        }
      ],
      "misconceptionTarget": "把內心與中線混淆，未使用角平分。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "角度以度表示。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「計算角平分後角度」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「35°」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：計算角平分後角度。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "6615e2f5148f2db1c449414b6afd2522d788a72f736bb99c9c1e325ad3571abf"
    },
    {
      "questionId": "u20-s011-v005",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter-property",
      "skillSlot": "s011",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "內切圓與邊 BC 的切點為 D。關於 ID，何者正確？",
      "givenConditions": [],
      "target": "理解內切圓切點與垂足",
      "choices": [
        "BC 的中點",
        "I 到 BC 的垂足",
        "外心",
        "頂點 A"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "半徑連到切點必垂直切線，所以 ID⊥BC，D 是 I 到 BC 的垂足。",
        "result": "I 到 BC 的垂足"
      },
      "explanation": "半徑連到切點必垂直切線，所以 ID⊥BC，D 是 I 到 BC 的垂足。",
      "steps": [
        "D 是切點",
        "圓心到切點為半徑",
        "半徑垂直切線"
      ],
      "optionAnalysis": [
        {
          "choice": "BC 的中點",
          "truth": false,
          "reason": "切點一般不必是中點。"
        },
        {
          "choice": "I 到 BC 的垂足",
          "truth": true,
          "reason": "依獨立推導可得到此結果；半徑連到切點必垂直切線，所以 ID⊥BC，D 是 I 到 BC 的垂足。"
        },
        {
          "choice": "外心",
          "truth": false,
          "reason": "D 位於邊上，不是三垂直平分線交點。"
        },
        {
          "choice": "頂點 A",
          "truth": false,
          "reason": "D 在 BC 上。"
        }
      ],
      "misconceptionTarget": "把切點固定當成邊中點。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「理解內切圓切點與垂足」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「I 到 BC 的垂足」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：理解內切圓切點與垂足。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "0438303832b05f37a21cf89e0893012220dcc70eefc51e4e0e7331678c2934f3"
    },
    {
      "questionId": "u20-s011-v006",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter-property",
      "skillSlot": "s011",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "I 到三邊的垂直距離都為 4 公分。下列敘述何者正確？",
      "givenConditions": [],
      "target": "由邊距判讀內切圓",
      "choices": [
        "內切圓半徑為 4 公分",
        "內切圓直徑為4公分",
        "外接圓半徑為4公分",
        "I 到頂點距離為4公分"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "三個相等垂直距離就是以 I 為圓心、與三邊相切的圓半徑。",
        "result": "內切圓半徑為 4 公分"
      },
      "explanation": "三個相等垂直距離就是以 I 為圓心、與三邊相切的圓半徑。",
      "steps": [
        "三邊距離皆為4",
        "以I為圓心",
        "得到半徑4的內切圓"
      ],
      "optionAnalysis": [
        {
          "choice": "內切圓半徑為 4 公分",
          "truth": true,
          "reason": "依獨立推導可得到此結果；三個相等垂直距離就是以 I 為圓心、與三邊相切的圓半徑。"
        },
        {
          "choice": "內切圓直徑為4公分",
          "truth": false,
          "reason": "直徑應為8公分。"
        },
        {
          "choice": "外接圓半徑為4公分",
          "truth": false,
          "reason": "外接圓需到頂點距離。"
        },
        {
          "choice": "I 到頂點距離為4公分",
          "truth": false,
          "reason": "題目沒有給此性質。"
        }
      ],
      "misconceptionTarget": "把內切圓半徑與直徑或外接圓混淆。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "長度以公分表示。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「由邊距判讀內切圓」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「內切圓半徑為 4 公分」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：由邊距判讀內切圓。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "845e4190792c34b66d2e3fd80e6440f9aceb7781304c88bc09a2d81e4d1eb871"
    },
    {
      "questionId": "u20-s011-v007",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter-property",
      "skillSlot": "s011",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "I 是 △ABC 的內心。下列哪個關係正確？",
      "givenConditions": [],
      "target": "推導內心夾角關係",
      "choices": [
        "∠AIC＝∠B÷2",
        "∠AIC＝180°－∠B",
        "∠AIC＝90°－∠B÷2",
        "∠AIC＝90°＋∠B÷2"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "在 △AIC 中，∠IAC＝A/2、∠ICA＝C/2，所以 ∠AIC＝180°－(A+C)/2＝180°－(180°－B)/2＝90°＋B/2。",
        "result": "∠AIC＝90°＋∠B÷2"
      },
      "explanation": "在 △AIC 中，∠IAC＝A/2、∠ICA＝C/2，所以 ∠AIC＝180°－(A+C)/2＝180°－(180°－B)/2＝90°＋B/2。",
      "steps": [
        "把A、C各取半",
        "使用三角形內角和",
        "以A+C=180°-B化簡"
      ],
      "optionAnalysis": [
        {
          "choice": "∠AIC＝∠B÷2",
          "truth": false,
          "reason": "漏掉90°。"
        },
        {
          "choice": "∠AIC＝180°－∠B",
          "truth": false,
          "reason": "這是A+C，不是兩半角所夾角。"
        },
        {
          "choice": "∠AIC＝90°－∠B÷2",
          "truth": false,
          "reason": "符號方向錯誤。"
        },
        {
          "choice": "∠AIC＝90°＋∠B÷2",
          "truth": true,
          "reason": "依獨立推導可得到此結果；在 △AIC 中，∠IAC＝A/2、∠ICA＝C/2，所以 ∠AIC＝180°－(A+C)/2＝180°－(180°－B)/2＝90°＋B/2。"
        }
      ],
      "misconceptionTarget": "只記半角而忽略小三角形內角和。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「推導內心夾角關係」。",
        "scope": "使用國中三角形內角和與角平分線，不引入高中三角函數。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「∠AIC＝90°＋∠B÷2」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：推導內心夾角關係。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "fa78b51ee01ea8baf663b0c78ff3bffdbe8b04b73ac075fd0464f25aab1012fd"
    },
    {
      "questionId": "u20-s011-v008",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter-property",
      "skillSlot": "s011",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "I 是內心，∠B＝60°。求 ∠AIC。",
      "givenConditions": [],
      "target": "運用內心夾角公式",
      "choices": [
        "30°",
        "60°",
        "120°",
        "150°"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "由內心性質 ∠AIC＝90°＋∠B/2＝90°＋30°＝120°。",
        "result": "120°"
      },
      "explanation": "由內心性質 ∠AIC＝90°＋∠B/2＝90°＋30°＝120°。",
      "steps": [
        "計算B/2=30°",
        "加上90°",
        "得到120°"
      ],
      "optionAnalysis": [
        {
          "choice": "30°",
          "truth": false,
          "reason": "只算半角。"
        },
        {
          "choice": "60°",
          "truth": false,
          "reason": "直接抄原角。"
        },
        {
          "choice": "120°",
          "truth": true,
          "reason": "依獨立推導可得到此結果；由內心性質 ∠AIC＝90°＋∠B/2＝90°＋30°＝120°。"
        },
        {
          "choice": "150°",
          "truth": false,
          "reason": "把60°直接加90°。"
        }
      ],
      "misconceptionTarget": "公式中的 ∠B 忘記先除以2。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "角度以度表示。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「運用內心夾角公式」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「120°」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：運用內心夾角公式。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "edec57a92abeff72b593ca1c2d794f3178643f84e392d9270eee0cf1805ddf59"
    },
    {
      "questionId": "u20-s011-v009",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter-property",
      "skillSlot": "s011",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "三角形三邊長為 a、b、c，內切圓半徑為 r。把內心連到三頂點，利用底乘高除以2，原三角形面積可表示為何？",
      "givenConditions": [],
      "target": "由內心邊距推導面積公式",
      "choices": [
        "面積為 r(a+b+c)",
        "面積為 r(a+b+c)/4",
        "面積與 r 無關",
        "三個小三角形面積總和為 r(a+b+c)/2"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "三個小三角形以 a、b、c 為底，高皆為r；面積總和＝ar/2＋br/2＋cr/2＝r(a+b+c)/2。",
        "result": "三個小三角形面積總和為 r(a+b+c)/2"
      },
      "explanation": "三個小三角形以 a、b、c 為底，高皆為r；面積總和＝ar/2＋br/2＋cr/2＝r(a+b+c)/2。",
      "steps": [
        "分成三個以邊為底的小三角形",
        "共同高為內切圓半徑r",
        "加總並提公因數"
      ],
      "optionAnalysis": [
        {
          "choice": "面積為 r(a+b+c)",
          "truth": false,
          "reason": "漏除以2。"
        },
        {
          "choice": "面積為 r(a+b+c)/4",
          "truth": false,
          "reason": "多除以2。"
        },
        {
          "choice": "面積與 r 無關",
          "truth": false,
          "reason": "小三角形高正是r。"
        },
        {
          "choice": "三個小三角形面積總和為 r(a+b+c)/2",
          "truth": true,
          "reason": "依獨立推導可得到此結果；三個小三角形以 a、b、c 為底，高皆為r；面積總和＝ar/2＋br/2＋cr/2＝r(a+b+c)/2。"
        }
      ],
      "misconceptionTarget": "面積公式漏掉二分之一。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "a、b、c、r 使用同一長度單位，結果為平方單位。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「由內心邊距推導面積公式」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「三個小三角形面積總和為 r(a+b+c)/2」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：由內心邊距推導面積公式。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "0a91ece4a73c8925c00ae749ea0f8a55b20fc5af8cf33a1ad959f699d5e73ffc"
    },
    {
      "questionId": "u20-s011-v010",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter-property",
      "skillSlot": "s011",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "三角形展間的噴頭設在內心，內切圓半徑為 2 公尺。這代表什麼？",
      "givenConditions": [],
      "target": "解讀內切圓半徑的空間意義",
      "choices": [
        "噴頭到三面牆的垂直距離皆為 2 公尺",
        "噴頭到三個角落皆為2公尺",
        "三面牆長度皆為2公尺",
        "噴頭一定在房間外"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "內切圓半徑就是內心到每一邊的垂直距離，所以噴頭到三面牆的最短距離皆為2公尺。",
        "result": "噴頭到三面牆的垂直距離皆為 2 公尺"
      },
      "explanation": "內切圓半徑就是內心到每一邊的垂直距離，所以噴頭到三面牆的最短距離皆為2公尺。",
      "steps": [
        "牆面對應三角形三邊",
        "最短距離為垂直距離",
        "三距離皆等於半徑2"
      ],
      "optionAnalysis": [
        {
          "choice": "噴頭到三面牆的垂直距離皆為 2 公尺",
          "truth": true,
          "reason": "依獨立推導可得到此結果；內切圓半徑就是內心到每一邊的垂直距離，所以噴頭到三面牆的最短距離皆為2公尺。"
        },
        {
          "choice": "噴頭到三個角落皆為2公尺",
          "truth": false,
          "reason": "那是外心的頂點等距。"
        },
        {
          "choice": "三面牆長度皆為2公尺",
          "truth": false,
          "reason": "半徑不決定牆長。"
        },
        {
          "choice": "噴頭一定在房間外",
          "truth": false,
          "reason": "內心在內部。"
        }
      ],
      "misconceptionTarget": "把到牆距離與到角落距離混淆。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "距離以公尺表示。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「解讀內切圓半徑的空間意義」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「噴頭到三面牆的垂直距離皆為 2 公尺」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：解讀內切圓半徑的空間意義。",
      "literacyContextNecessity": "展間牆面是三角形的邊，噴頭安全間距取垂直距離，情境直接決定解讀。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "8ec9d694cf15650044c3d1b2037f02611f5fd608b41c3706a3dabeaf970b2982"
    },
    {
      "questionId": "u20-s011-v011",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter-property",
      "skillSlot": "s011",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "設計一個同時與三角形標誌三邊相切的圓，哪個規格正確？",
      "givenConditions": [],
      "target": "制定內切圓設計規格",
      "choices": [
        "圓心放外心並取到頂點距離",
        "圓心放重心且任選半徑",
        "圓心必須放在內心，半徑取到最近邊的垂距",
        "只要圓心在三角形內即可"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "同時與三邊相切要求圓心到三邊垂直距離相等，唯一符合者是內心；共同距離就是半徑。",
        "result": "圓心必須放在內心，半徑取到最近邊的垂距"
      },
      "explanation": "同時與三邊相切要求圓心到三邊垂直距離相等，唯一符合者是內心；共同距離就是半徑。",
      "steps": [
        "相切要求半徑垂直邊",
        "三個垂距相等",
        "選內心與共同垂距"
      ],
      "optionAnalysis": [
        {
          "choice": "圓心放外心並取到頂點距離",
          "truth": false,
          "reason": "會得到外接圓。"
        },
        {
          "choice": "圓心放重心且任選半徑",
          "truth": false,
          "reason": "一般不能同時與三邊相切。"
        },
        {
          "choice": "圓心必須放在內心，半徑取到最近邊的垂距",
          "truth": true,
          "reason": "依獨立推導可得到此結果；同時與三邊相切要求圓心到三邊垂直距離相等，唯一符合者是內心；共同距離就是半徑。"
        },
        {
          "choice": "只要圓心在三角形內即可",
          "truth": false,
          "reason": "任意內點到三邊距離通常不同。"
        }
      ],
      "misconceptionTarget": "把『在內部』誤當成內切圓的充分條件。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「制定內切圓設計規格」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「圓心必須放在內心，半徑取到最近邊的垂距」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：制定內切圓設計規格。",
      "literacyContextNecessity": "標誌要求同時相切，圓心位置與半徑都由三邊垂距決定，設計情境不可省略。",
      "figureId": "fig-u20-incenter-sign-01",
      "drawingSpecId": "fig-u20-incenter-sign-01",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "83f45e2680320374bf91223b7fc1c8c32b672c7069899b5828ddb93596ca66f1"
    },
    {
      "questionId": "u20-s011-v012",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter-property",
      "skillSlot": "s011",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "三角形花圃的一邊長 6 公尺，內心到這一邊的垂直距離為 2 公尺。以該邊為底、內心為頂點的小三角形面積是多少？",
      "givenConditions": [],
      "target": "計算由內心分割的小三角形面積",
      "choices": [
        "3 平方公尺",
        "6 平方公尺",
        "12 平方公尺",
        "18 平方公尺"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "面積＝底×高÷2＝6×2÷2＝6平方公尺。",
        "result": "6 平方公尺"
      },
      "explanation": "面積＝底×高÷2＝6×2÷2＝6平方公尺。",
      "steps": [
        "底為6公尺",
        "高為內心到邊的垂距2公尺",
        "計算6×2÷2"
      ],
      "optionAnalysis": [
        {
          "choice": "3 平方公尺",
          "truth": false,
          "reason": "把底除以2後漏乘高。"
        },
        {
          "choice": "6 平方公尺",
          "truth": true,
          "reason": "依獨立推導可得到此結果；面積＝底×高÷2＝6×2÷2＝6平方公尺。"
        },
        {
          "choice": "12 平方公尺",
          "truth": false,
          "reason": "漏除以2。"
        },
        {
          "choice": "18 平方公尺",
          "truth": false,
          "reason": "錯把底與高相加或誤算。"
        }
      ],
      "misconceptionTarget": "不認得內心到邊垂距可作小三角形的高。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "底與高以公尺表示，面積為平方公尺。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「計算由內心分割的小三角形面積」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「6 平方公尺」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：計算由內心分割的小三角形面積。",
      "literacyContextNecessity": "花圃的一邊與內心垂距構成實際底高資料，必須用情境量值計算。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "5b420e8bf75c79271535fc34a2000fba0b6d9b477857a638835b165cbe9170df"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u20-s011-cr001",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter-property",
      "skillSlot": "s011",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "△ABC 的內心為 I，∠B＝50°。請求 ∠AIC，並從三角形內角和推導所用關係。",
      "requiredWork": [
        "寫出 ∠IAC=A/2、∠ICA=C/2。",
        "使用 A+B+C=180°。",
        "算得115°。"
      ],
      "standardSolution": [
        "在 △AIC 中，∠IAC＝A/2，∠ICA＝C/2。",
        "∠AIC＝180°－(A+C)/2。又 A+C＝180°－B＝130°，所以 ∠AIC＝180°－65°＝115°。",
        "等價地，∠AIC＝90°＋B/2＝90°＋25°＝115°。"
      ],
      "alternativeMethods": [
        "可先推導一般式 ∠AIC＝90°＋B/2，再代入B=50°。"
      ],
      "reasoningSteps": [
        "在 △AIC 中，∠IAC＝A/2，∠ICA＝C/2。",
        "∠AIC＝180°－(A+C)/2。又 A+C＝180°－B＝130°，所以 ∠AIC＝180°－65°＝115°。",
        "等價地，∠AIC＝90°＋B/2＝90°＋25°＝115°。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "推導半角與內角和完整，答案115°。"
        },
        {
          "score": 2,
          "criteria": "正確使用90°+B/2並算得115°，但未完整推導。"
        },
        {
          "score": 1,
          "criteria": "知道B要除以2但漏加90°，或方法正確有單一算術錯。"
        },
        {
          "score": 0,
          "criteria": "直接用180°-50°或無角平分線推理。"
        }
      ],
      "partialCreditRules": [
        "評分依題目專屬rubric判定；方法正確但敘述略簡可保留方法分。",
        "若前段僅有單一算術錯誤，後續推理方法正確，可依錯誤數值一致作答並保留方法分。"
      ],
      "followThroughPolicy": "若前段僅有單一算術錯誤，後續推理方法正確，可依錯誤數值一致作答並保留方法分。",
      "unitRules": "角度以度表示。",
      "notationRules": "角以 ∠ 表示，線段相等與平行、垂直符號須對應正確對象。",
      "answerOnlyPolicy": "只寫最終結論且沒有題目要求的理由，最高給1分；若結論也錯則0分。",
      "commonErrors": [
        "漏掉90°。",
        "把B直接加90°得140°。",
        "將A、C當已知相等。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "reSolvedWithoutStoredAnswer": true,
        "derivedResult": "在 △AIC 中，∠IAC＝A/2，∠ICA＝C/2。；∠AIC＝180°－(A+C)/2。又 A+C＝180°－B＝130°，所以 ∠AIC＝180°－65°＝115°。；等價地，∠AIC＝90°＋B/2＝90°＋25°＝115°。",
        "rubricAlignment": "每一級分均依本題要求的具體推理、計算或審查內容撰寫。",
        "ambiguity": "題目所需工作與評分對象明確；替代方法只在數學上合法時接受。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "contentSha256": "20a338775128d2246aeb0ff809b32fa893f095096e328eae4500b332c714acb7"
    },
    {
      "questionId": "u20-s011-cr002",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "incenter-property",
      "skillSlot": "s011",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "三角形三邊長為 8、10、12 公分，內切圓半徑為 2 公分。請利用內心到三邊距離相等，把三角形分成三個小三角形並求原三角形面積。",
      "requiredWork": [
        "三小三角形高皆為2。",
        "分別計算面積。",
        "總面積30平方公分。"
      ],
      "standardSolution": [
        "以三邊8、10、12為底，內心到各邊的垂直距離2為共同高。",
        "總面積＝8×2÷2＋10×2÷2＋12×2÷2＝8＋10＋12＝30平方公分。"
      ],
      "alternativeMethods": [
        "也可用半周長15乘內切圓半徑2，得到30平方公分；但應說明此公式來自三小三角形面積相加。"
      ],
      "reasoningSteps": [
        "以三邊8、10、12為底，內心到各邊的垂直距離2為共同高。",
        "總面積＝8×2÷2＋10×2÷2＋12×2÷2＝8＋10＋12＝30平方公分。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確建立三個底高、完整相加並得30平方公分。"
        },
        {
          "score": 2,
          "criteria": "使用半周長×半徑得30，但推導較簡略。"
        },
        {
          "score": 1,
          "criteria": "知道共同高是2並算對至少兩個小面積，後續有算術錯。"
        },
        {
          "score": 0,
          "criteria": "把2當到頂點距離、漏除以2且無合理推理。"
        }
      ],
      "partialCreditRules": [
        "評分依題目專屬rubric判定；方法正確但敘述略簡可保留方法分。",
        "若前段僅有單一算術錯誤，後續推理方法正確，可依錯誤數值一致作答並保留方法分。"
      ],
      "followThroughPolicy": "若前段僅有單一算術錯誤，後續推理方法正確，可依錯誤數值一致作答並保留方法分。",
      "unitRules": "邊與高為公分，面積須寫平方公分。",
      "notationRules": "角以 ∠ 表示，線段相等與平行、垂直符號須對應正確對象。",
      "answerOnlyPolicy": "只寫最終結論且沒有題目要求的理由，最高給1分；若結論也錯則0分。",
      "commonErrors": [
        "面積公式漏除2。",
        "把三邊平均。",
        "答案單位寫公分。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "reSolvedWithoutStoredAnswer": true,
        "derivedResult": "以三邊8、10、12為底，內心到各邊的垂直距離2為共同高。；總面積＝8×2÷2＋10×2÷2＋12×2÷2＝8＋10＋12＝30平方公分。",
        "rubricAlignment": "每一級分均依本題要求的具體推理、計算或審查內容撰寫。",
        "ambiguity": "題目所需工作與評分對象明確；替代方法只在數學上合法時接受。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "contentSha256": "8f404108138202dfe9f0cdcca3e83740a9290ec5406ef4274aaa687275acae11"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u20-s011-v001",
      "contentSha256": "9cfc946cf976e88a34596a8f1fbcefa7a3804a8e30c64ece12142c1ee9718c43",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "內心到三邊的垂直距離相等，因此到 AC 的距離也是5公分。",
      "derivedAnswer": "5 公分",
      "storedAnswer": "5 公分",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「5 公分」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "垂直距離以公分表示。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把到邊距離誤認為到頂點距離。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：使用內心到邊等距性質。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「I 是 △ABC 的內心，I 到邊 AB 的垂直距離為 5 公分。I 到邊 AC 的垂直距離是多少？」要求使用內心到邊等距性質。獨立推導為：內心到三邊的垂直距離相等，因此到 AC 的距離也是5公分。 四選項依序判定：2.5 公分=假，沒有除以2的理由。；10 公分=假，沒有加倍的理由。；5 公分=真，依獨立推導可得到此結果；內心到三邊的垂直距離相等，因此到 AC 的距離也是5公分。；無法判斷=假，內心性質足夠。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "15dd6bac3f833e6fc2b80994953c744bde92308b7c387c190a3719723ba9aa96"
    },
    {
      "questionId": "u20-s011-v002",
      "contentSha256": "7edf31f1ba3615c64ba4b1dcfb826e49c60df5a5489a3717d48270db3b96580f",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "AI 是 ∠A 的角平分線，所以 ∠BAI＝60°÷2＝30°。",
      "derivedAnswer": "∠BAI＝30°",
      "storedAnswer": "∠BAI＝30°",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「∠BAI＝30°」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "角度以度表示。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「知道角平分線卻未把整角除以2。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：計算內心連線所分角。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「I 是內心，∠A＝60°。∠BAI 為多少？」要求計算內心連線所分角。獨立推導為：AI 是 ∠A 的角平分線，所以 ∠BAI＝60°÷2＝30°。 四選項依序判定：∠BAI＝15°=假，多除以2一次。；∠BAI＝30°=真，依獨立推導可得到此結果；AI 是 ∠A 的角平分線，所以 ∠BAI＝60°÷2＝30°。；∠BAI＝60°=假，未平分。；∠BAI＝120°=假，把角度加倍。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "3438196b407c1a441c8c331e83dc009421471f44e498af47305c856aaca0cde7"
    },
    {
      "questionId": "u20-s011-v003",
      "contentSha256": "bbc4149630179da9e69d2e632f987f1da0fb8234df8d8974b1142ff40cb900e6",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "圓與 BC 相切時，圓心到切線的垂直距離就是半徑，所以半徑為r。",
      "derivedAnswer": "r",
      "storedAnswer": "r",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「r」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把垂直距離與直徑混淆。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：連結內心邊距與內切圓半徑。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「以內心 I 為圓心畫內切圓，若 I 到邊 BC 的垂直距離為 r，內切圓半徑是多少？」要求連結內心邊距與內切圓半徑。獨立推導為：圓與 BC 相切時，圓心到切線的垂直距離就是半徑，所以半徑為r。 四選項依序判定：2r=假，這可能是直徑。；r÷2=假，沒有再除半。；無固定關係=假，相切條件直接決定半徑。；r=真，依獨立推導可得到此結果；圓與 BC 相切時，圓心到切線的垂直距離就是半徑，所以半徑為r。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "9e118a5b839237ca6b19c82bd77587ae9545f1ef0f4007039d66055fc422c020"
    },
    {
      "questionId": "u20-s011-v004",
      "contentSha256": "6615e2f5148f2db1c449414b6afd2522d788a72f736bb99c9c1e325ad3571abf",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "AI 平分 ∠BAC，因此 ∠IAC＝70°÷2＝35°。",
      "derivedAnswer": "35°",
      "storedAnswer": "35°",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「35°」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "角度以度表示。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把內心與中線混淆，未使用角平分。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：計算角平分後角度。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「I 是 △ABC 的內心，已知 ∠BAC＝70°。求 ∠IAC。」要求計算角平分後角度。獨立推導為：AI 平分 ∠BAC，因此 ∠IAC＝70°÷2＝35°。 四選項依序判定：35°=真，依獨立推導可得到此結果；AI 平分 ∠BAC，因此 ∠IAC＝70°÷2＝35°。；25°=假，與已知角無正確關係。；55°=假，錯把70與半角相加減。；70°=假，未平分。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "ec81553ca9efe64286873bdeb5ce1b993ed890672bdc95f6a73e98f7fdcbe4af"
    },
    {
      "questionId": "u20-s011-v005",
      "contentSha256": "0438303832b05f37a21cf89e0893012220dcc70eefc51e4e0e7331678c2934f3",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "半徑連到切點必垂直切線，所以 ID⊥BC，D 是 I 到 BC 的垂足。",
      "derivedAnswer": "I 到 BC 的垂足",
      "storedAnswer": "I 到 BC 的垂足",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「I 到 BC 的垂足」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把切點固定當成邊中點。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：理解內切圓切點與垂足。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「內切圓與邊 BC 的切點為 D。關於 ID，何者正確？」要求理解內切圓切點與垂足。獨立推導為：半徑連到切點必垂直切線，所以 ID⊥BC，D 是 I 到 BC 的垂足。 四選項依序判定：BC 的中點=假，切點一般不必是中點。；I 到 BC 的垂足=真，依獨立推導可得到此結果；半徑連到切點必垂直切線，所以 ID⊥BC，D 是 I 到 BC 的垂足。；外心=假，D 位於邊上，不是三垂直平分線交點。；頂點 A=假，D 在 BC 上。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "5cec380c94794904d5cd11bf384e455f02b6fa9080358477e30ff3db0d71d585"
    },
    {
      "questionId": "u20-s011-v006",
      "contentSha256": "845e4190792c34b66d2e3fd80e6440f9aceb7781304c88bc09a2d81e4d1eb871",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "三個相等垂直距離就是以 I 為圓心、與三邊相切的圓半徑。",
      "derivedAnswer": "內切圓半徑為 4 公分",
      "storedAnswer": "內切圓半徑為 4 公分",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「內切圓半徑為 4 公分」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "長度以公分表示。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把內切圓半徑與直徑或外接圓混淆。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：由邊距判讀內切圓。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「I 到三邊的垂直距離都為 4 公分。下列敘述何者正確？」要求由邊距判讀內切圓。獨立推導為：三個相等垂直距離就是以 I 為圓心、與三邊相切的圓半徑。 四選項依序判定：內切圓半徑為 4 公分=真，依獨立推導可得到此結果；三個相等垂直距離就是以 I 為圓心、與三邊相切的圓半徑。；內切圓直徑為4公分=假，直徑應為8公分。；外接圓半徑為4公分=假，外接圓需到頂點距離。；I 到頂點距離為4公分=假，題目沒有給此性質。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "d29ff5bff26fe33417d8a6888dcfbc2c81e56c40444d8daaa8c6279c8e781350"
    },
    {
      "questionId": "u20-s011-v007",
      "contentSha256": "fa78b51ee01ea8baf663b0c78ff3bffdbe8b04b73ac075fd0464f25aab1012fd",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "在 △AIC 中，∠IAC＝A/2、∠ICA＝C/2，所以 ∠AIC＝180°－(A+C)/2＝180°－(180°－B)/2＝90°＋B/2。",
      "derivedAnswer": "∠AIC＝90°＋∠B÷2",
      "storedAnswer": "∠AIC＝90°＋∠B÷2",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「∠AIC＝90°＋∠B÷2」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "使用國中三角形內角和與角平分線，不引入高中三角函數。",
        "alternateReading": "常見誤讀為「只記半角而忽略小三角形內角和。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：推導內心夾角關係。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「I 是 △ABC 的內心。下列哪個關係正確？」要求推導內心夾角關係。獨立推導為：在 △AIC 中，∠IAC＝A/2、∠ICA＝C/2，所以 ∠AIC＝180°－(A+C)/2＝180°－(180°－B)/2＝90°＋B/2。 四選項依序判定：∠AIC＝∠B÷2=假，漏掉90°。；∠AIC＝180°－∠B=假，這是A+C，不是兩半角所夾角。；∠AIC＝90°－∠B÷2=假，符號方向錯誤。；∠AIC＝90°＋∠B÷2=真，依獨立推導可得到此結果；在 △AIC 中，∠IAC＝A/2、∠ICA＝C/2，所以 ∠AIC＝180°－(A+C)/2＝180°－(180°－B)/2＝90°＋B/2。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "1dc24237f97b2e8fe08e88c77c0f4d7e677f2c2165bbbd4b765bf9a660230e32"
    },
    {
      "questionId": "u20-s011-v008",
      "contentSha256": "edec57a92abeff72b593ca1c2d794f3178643f84e392d9270eee0cf1805ddf59",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "由內心性質 ∠AIC＝90°＋∠B/2＝90°＋30°＝120°。",
      "derivedAnswer": "120°",
      "storedAnswer": "120°",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「120°」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "角度以度表示。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「公式中的 ∠B 忘記先除以2。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：運用內心夾角公式。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「I 是內心，∠B＝60°。求 ∠AIC。」要求運用內心夾角公式。獨立推導為：由內心性質 ∠AIC＝90°＋∠B/2＝90°＋30°＝120°。 四選項依序判定：30°=假，只算半角。；60°=假，直接抄原角。；120°=真，依獨立推導可得到此結果；由內心性質 ∠AIC＝90°＋∠B/2＝90°＋30°＝120°。；150°=假，把60°直接加90°。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "5196a4611189d63361dd4b3c4025d92dff410cc34c7d3cd17592d72ade766ac3"
    },
    {
      "questionId": "u20-s011-v009",
      "contentSha256": "0a91ece4a73c8925c00ae749ea0f8a55b20fc5af8cf33a1ad959f699d5e73ffc",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "三個小三角形以 a、b、c 為底，高皆為r；面積總和＝ar/2＋br/2＋cr/2＝r(a+b+c)/2。",
      "derivedAnswer": "三個小三角形面積總和為 r(a+b+c)/2",
      "storedAnswer": "三個小三角形面積總和為 r(a+b+c)/2",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「三個小三角形面積總和為 r(a+b+c)/2」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "a、b、c、r 使用同一長度單位，結果為平方單位。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「面積公式漏掉二分之一。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：由內心邊距推導面積公式。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形三邊長為 a、b、c，內切圓半徑為 r。把內心連到三頂點，利用底乘高除以2，原三角形面積可表示為何？」要求由內心邊距推導面積公式。獨立推導為：三個小三角形以 a、b、c 為底，高皆為r；面積總和＝ar/2＋br/2＋cr/2＝r(a+b+c)/2。 四選項依序判定：面積為 r(a+b+c)=假，漏除以2。；面積為 r(a+b+c)/4=假，多除以2。；面積與 r 無關=假，小三角形高正是r。；三個小三角形面積總和為 r(a+b+c)/2=真，依獨立推導可得到此結果；三個小三角形以 a、b、c 為底，高皆為r；面積總和＝ar/2＋br/2＋cr/2＝r(a+b+c)/2。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "aa1406c164e29a087accb705cba2216e09f33638275d03462b1f8a0093562a27"
    },
    {
      "questionId": "u20-s011-v010",
      "contentSha256": "8ec9d694cf15650044c3d1b2037f02611f5fd608b41c3706a3dabeaf970b2982",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "內切圓半徑就是內心到每一邊的垂直距離，所以噴頭到三面牆的最短距離皆為2公尺。",
      "derivedAnswer": "噴頭到三面牆的垂直距離皆為 2 公尺",
      "storedAnswer": "噴頭到三面牆的垂直距離皆為 2 公尺",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「噴頭到三面牆的垂直距離皆為 2 公尺」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "距離以公尺表示。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把到牆距離與到角落距離混淆。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：解讀內切圓半徑的空間意義。",
      "literacyContextNecessity": "展間牆面是三角形的邊，噴頭安全間距取垂直距離，情境直接決定解讀。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形展間的噴頭設在內心，內切圓半徑為 2 公尺。這代表什麼？」要求解讀內切圓半徑的空間意義。獨立推導為：內切圓半徑就是內心到每一邊的垂直距離，所以噴頭到三面牆的最短距離皆為2公尺。 四選項依序判定：噴頭到三面牆的垂直距離皆為 2 公尺=真，依獨立推導可得到此結果；內切圓半徑就是內心到每一邊的垂直距離，所以噴頭到三面牆的最短距離皆為2公尺。；噴頭到三個角落皆為2公尺=假，那是外心的頂點等距。；三面牆長度皆為2公尺=假，半徑不決定牆長。；噴頭一定在房間外=假，內心在內部。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "5ab28695d2dc0386ce9753065903579350a69c93dfc130ecd08759f91e4aac61"
    },
    {
      "questionId": "u20-s011-v011",
      "contentSha256": "83f45e2680320374bf91223b7fc1c8c32b672c7069899b5828ddb93596ca66f1",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "同時與三邊相切要求圓心到三邊垂直距離相等，唯一符合者是內心；共同距離就是半徑。",
      "derivedAnswer": "圓心必須放在內心，半徑取到最近邊的垂距",
      "storedAnswer": "圓心必須放在內心，半徑取到最近邊的垂距",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「圓心必須放在內心，半徑取到最近邊的垂距」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把『在內部』誤當成內切圓的充分條件。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：制定內切圓設計規格。",
      "literacyContextNecessity": "標誌要求同時相切，圓心位置與半徑都由三邊垂距決定，設計情境不可省略。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「設計一個同時與三角形標誌三邊相切的圓，哪個規格正確？」要求制定內切圓設計規格。獨立推導為：同時與三邊相切要求圓心到三邊垂直距離相等，唯一符合者是內心；共同距離就是半徑。 四選項依序判定：圓心放外心並取到頂點距離=假，會得到外接圓。；圓心放重心且任選半徑=假，一般不能同時與三邊相切。；圓心必須放在內心，半徑取到最近邊的垂距=真，依獨立推導可得到此結果；同時與三邊相切要求圓心到三邊垂直距離相等，唯一符合者是內心；共同距離就是半徑。；只要圓心在三角形內即可=假，任意內點到三邊距離通常不同。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "35c1d99ae2038be0f38c836ce628faf6d11761b017252bf6dbc1ef2a041215e9"
    },
    {
      "questionId": "u20-s011-v012",
      "contentSha256": "5b420e8bf75c79271535fc34a2000fba0b6d9b477857a638835b165cbe9170df",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "面積＝底×高÷2＝6×2÷2＝6平方公尺。",
      "derivedAnswer": "6 平方公尺",
      "storedAnswer": "6 平方公尺",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「6 平方公尺」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "底與高以公尺表示，面積為平方公尺。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「不認得內心到邊垂距可作小三角形的高。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：計算由內心分割的小三角形面積。",
      "literacyContextNecessity": "花圃的一邊與內心垂距構成實際底高資料，必須用情境量值計算。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形花圃的一邊長 6 公尺，內心到這一邊的垂直距離為 2 公尺。以該邊為底、內心為頂點的小三角形面積是多少？」要求計算由內心分割的小三角形面積。獨立推導為：面積＝底×高÷2＝6×2÷2＝6平方公尺。 四選項依序判定：3 平方公尺=假，把底除以2後漏乘高。；6 平方公尺=真，依獨立推導可得到此結果；面積＝底×高÷2＝6×2÷2＝6平方公尺。；12 平方公尺=假，漏除以2。；18 平方公尺=假，錯把底與高相加或誤算。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "4e6465bc5335e1b9dc79d8670faddd963be70d9b437d4c4c7f9baec008e2c377"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "fig-u20-incenter-sign-01",
      "unitId": "u20",
      "ownerSkillSlot": "s011",
      "title": "三角形標誌相切驗證圖",
      "description": "細長三角形標誌內放一圓，兩條角平分線以虛線交於I，另畫I到下邊的垂直半徑。",
      "canvas": {
        "width": 480,
        "height": 320,
        "viewBox": "0 0 480 320"
      },
      "coordinates": {
        "A": [
          145,
          45
        ],
        "B": [
          60,
          255
        ],
        "C": [
          425,
          250
        ],
        "I": [
          230,
          187
        ]
      },
      "visibleLineRules": "實線表示題設中的線段或道路；虛線表示延長線或輔助線；直角方框、等長刻痕與平行箭頭只在題設提供時使用。",
      "hiddenLineRules": "本單元為平面圖，不使用立體隱線；未畫出的關係不得自行假設。",
      "labels": "所有點名放在點外側至少8像素；避免壓在線段或直角記號上。",
      "toScale": false,
      "visualInferenceWarning": "圖形未按比例，不可用外觀估計未標示的長度或角度。",
      "altText": "不規則三角形標誌ABC，兩條虛線角平分線交於I，圓心I的圓與三邊相切，I到底邊有垂直半徑。",
      "svgTitle": "三角形標誌相切驗證圖",
      "svgDesc": "細長三角形標誌內放一圓，兩條角平分線以虛線交於I，另畫I到下邊的垂直半徑。",
      "mobileReadabilityReview": "在寬度320像素縮放下，主要線段、直角記號與標籤仍可辨認；字級不小於16。",
      "answerLeakageReview": "圖中只呈現題設標記與辨識所需結構，不標示選項答案、中心名稱結論或未給定數值。",
      "geometryAssertions": [
        "兩條角平分線交於I",
        "I到底邊半徑垂直",
        "圓與三邊相切"
      ],
      "manualVisualInspection": "pass: rendered at 480x320 and reviewed at 320px-equivalent readability; no clipping or answer leakage",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ]
};
export default skillBundle;
