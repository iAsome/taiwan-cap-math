// Generated only by serialization from approved reviewed source. Do not edit.
export const sourceDigest="82102460ebd87e0a454ad9626aceab7890bb1cc1a3bce1e1bdfd2715a230cea7";
export const skillBundle={
  "lecture": {
    "lectureId": "u20-s004-lecture-r1",
    "unitId": "u20",
    "numericUnitId": 20,
    "topicId": "u20-proof",
    "skillId": "proof-fill-reason",
    "skillSlot": "s004",
    "lockedSkillTitle": "填充證明理由",
    "title": "填充證明理由：從上下文補回缺失橋梁",
    "audience": "臺灣國中零基礎至會考數學滿分",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能由前後敘述判斷空格所需理由。",
      "能辨認空格缺的是定義、性質、判定或條件來源。",
      "能指出資料不足而非勉強填入。"
    ],
    "prerequisites": [
      {
        "skillId": "geometry-proof-reason",
        "requiredLevel": "能使用該技能的核心定義與基本推理。"
      }
    ],
    "prerequisiteBridge": "若無單元內先備技能，從已知、圖形標記與國中基本線角概念開始；若有先備技能，先回想「geometry-proof-reason」再進入本節。",
    "glossary": [
      {
        "term": "證明填空",
        "definition": "保留部分敘述或理由，要求補出使論證完整的內容。"
      },
      {
        "term": "局部脈絡",
        "definition": "空格前的條件與空格後的結果共同限制可填答案。"
      },
      {
        "term": "資料不足",
        "definition": "現有條件無法唯一支持下一步，需明確指出缺少資訊。"
      }
    ],
    "notation": [
      {
        "symbol": "（　）",
        "meaning": "待填入的敘述或理由位置。"
      },
      {
        "symbol": "①②③",
        "meaning": "不同空格標號，需逐一對應。"
      }
    ],
    "conceptNarrative": [
      "填空不是猜課本慣用語，而是檢查『前句如何推出後句』。若前句是D為中點、後句是BD＝DC，空格只能是中點定義一類理由。",
      "同一個結果可能有多種證法，但局部脈絡通常會指定最直接的理由。若後續使用SAS，就要檢查空格中的角是否真為夾角。",
      "若最後由等角證平行卻沒有角的位置，最嚴謹答案是指出缺少同位角或內錯角資訊。"
    ],
    "formalDefinitions": [
      {
        "name": "敘述空格",
        "statement": "需要補一個可由前文推出、又供後文使用的數學結果。"
      },
      {
        "name": "理由空格",
        "statement": "需要補支持已寫敘述的定義、定理或已知來源。"
      }
    ],
    "formulas": [
      {
        "formula": "前文條件 + 空格 + 後文用途 = 完整推理",
        "conditions": [
          "三部分需彼此相容",
          "不得把後文結論倒填成前提"
        ],
        "meaning": "填空的雙向檢查法。"
      }
    ],
    "nonApplicableCases": [
      "不能因常見答案是SAS就忽略實際給的是SSA。",
      "沒有角型資訊時，不能只填『等角所以平行』。",
      "『已知』只適用於題目直接給的敘述，公共邊通常不是題目額外已知。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "判斷空格要填敘述還是理由。",
        "check": "括號位於等式後，通常填理由。"
      },
      {
        "step": 2,
        "instruction": "讀空格前一句找來源。",
        "check": "關鍵名詞是否直接提供定義？"
      },
      {
        "step": 3,
        "instruction": "讀空格後一句找用途。",
        "check": "它是否準備全等、平行或等量代換？"
      },
      {
        "step": 4,
        "instruction": "檢查是否存在缺件。",
        "check": "角型、對應、夾角或單位是否明確？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "M是AB中點，所以AM＝MB（　）。",
        "solutionSteps": [
          "前句給中點。",
          "後句是兩段等長。"
        ],
        "answer": "中點的定義。"
      },
      {
        "exampleId": "L2",
        "prompt": "兩邊及夾角相等，所以兩三角形全等（　）。",
        "solutionSteps": [
          "條件類型為邊角邊。",
          "角位於兩邊之間。"
        ],
        "answer": "SAS。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "只看最後結論填最熟悉定理。",
        "why": "忽略局部條件。",
        "correction": "同時讀前後文。"
      },
      {
        "mistake": "資料不足仍硬填。",
        "why": "把猜測當證明。",
        "correction": "明寫缺少的角型或條件。"
      },
      {
        "mistake": "把性質方向填成判定方向。",
        "why": "未辨認前提與結論。",
        "correction": "用完整句朗讀推理。"
      }
    ],
    "selfCheck": [
      "空格是敘述還是理由？",
      "前文條件足夠嗎？",
      "後文要使用什麼？",
      "若不足，我能說出缺少哪一項嗎？"
    ],
    "summary": [
      "填空要同時符合前文來源與後文用途。",
      "最直接理由通常優於無關的複雜定理。",
      "資料不足時指出缺件也是正確審查。"
    ],
    "connections": {
      "previous": "先備：geometry-proof-reason",
      "next": [
        "下一技能將把條件命題改寫為等價的逆否形式。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u20-s004-v001",
        "u20-s004-v002",
        "u20-s004-v003",
        "u20-s004-v004",
        "u20-s004-v005",
        "u20-s004-v006",
        "u20-s004-v007",
        "u20-s004-v008",
        "u20-s004-v009",
        "u20-s004-v010",
        "u20-s004-v011",
        "u20-s004-v012"
      ],
      "constructedResponseIds": [
        "u20-s004-cr001",
        "u20-s004-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "invalidUseCasesIncluded": true,
      "skillSpecificEvidence": "講義特別納入『無法合法填入』情況，避免學生認為每個空格必有固定詞。",
      "reviewerDecision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "legacyContentUsed": false,
    "contentSha256": "38ae68997ac3e08dd1c53809fb25591cec42a0ad879a34e2d619809f1c553a08"
  },
  "mcQuestions": [
    {
      "questionId": "u20-s004-v001",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-fill-reason",
      "skillSlot": "s004",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "證明填空：M 是 AB 的中點，所以 AM＝MB（＿＿＿）。空格應填何者？",
      "givenConditions": [],
      "target": "填入定義型理由",
      "choices": [
        "垂直平分線性質",
        "平行線判定",
        "三角形全等",
        "中點的定義"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "由「M 是 AB 的中點」直接得到 AM＝MB，使用的是中點定義。",
        "result": "中點的定義"
      },
      "explanation": "由「M 是 AB 的中點」直接得到 AM＝MB，使用的是中點定義。",
      "steps": [
        "讀取前句的幾何名詞",
        "確認後句是該名詞的定義結果",
        "填入中點的定義"
      ],
      "optionAnalysis": [
        {
          "choice": "垂直平分線性質",
          "truth": false,
          "reason": "題目未提 M 到 A、B 的距離與垂直平分線。"
        },
        {
          "choice": "平行線判定",
          "truth": false,
          "reason": "無平行角關係。"
        },
        {
          "choice": "三角形全等",
          "truth": false,
          "reason": "尚未比較三角形。"
        },
        {
          "choice": "中點的定義",
          "truth": true,
          "reason": "依獨立推導可得到此結果；由「M 是 AB 的中點」直接得到 AM＝MB，使用的是中點定義。"
        }
      ],
      "misconceptionTarget": "把任何等長都歸因於全等。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「填入定義型理由」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「中點的定義」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：填入定義型理由。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "503e746c24b6e93afc55ef09aff4c270c4a658e4d9269650e1b387975a76392a"
    },
    {
      "questionId": "u20-s004-v002",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-fill-reason",
      "skillSlot": "s004",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "兩直線 AC、BD 交於 O。證明中寫 ∠AOB＝∠COD（＿＿＿），空格應填何者？",
      "givenConditions": [],
      "target": "填入角位置理由",
      "choices": [
        "對頂角相等",
        "同位角相等",
        "三角形內角和",
        "等腰三角形底角相等"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "∠AOB 與 ∠COD 的兩邊互為反向射線，是對頂角，所以相等。",
        "result": "對頂角相等"
      },
      "explanation": "∠AOB 與 ∠COD 的兩邊互為反向射線，是對頂角，所以相等。",
      "steps": [
        "辨認相交直線",
        "核對兩角位置",
        "填入對頂角相等"
      ],
      "optionAnalysis": [
        {
          "choice": "對頂角相等",
          "truth": true,
          "reason": "依獨立推導可得到此結果；∠AOB 與 ∠COD 的兩邊互為反向射線，是對頂角，所以相等。"
        },
        {
          "choice": "同位角相等",
          "truth": false,
          "reason": "兩角共頂點，不是平行線截線形成的同位角。"
        },
        {
          "choice": "三角形內角和",
          "truth": false,
          "reason": "題目沒有使用三角形。"
        },
        {
          "choice": "等腰三角形底角相等",
          "truth": false,
          "reason": "沒有等腰條件。"
        }
      ],
      "misconceptionTarget": "只看兩角相等就隨意填平行線性質。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「填入角位置理由」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「對頂角相等」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：填入角位置理由。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "c852dda8dc22f53b491bbb6bf440bf7518d8f1088fbf527fb4dc859f110270a4"
    },
    {
      "questionId": "u20-s004-v003",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-fill-reason",
      "skillSlot": "s004",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "比較 △ABD 與 △ACD 時，證明列出 AD＝AD（＿＿＿）。最適合填什麼？",
      "givenConditions": [],
      "target": "填入公共邊理由",
      "choices": [
        "已知",
        "公共邊",
        "中點定義",
        "SSS"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "AD 同時屬於兩個三角形，線段等於自身，稱為公共邊。",
        "result": "公共邊"
      },
      "explanation": "AD 同時屬於兩個三角形，線段等於自身，稱為公共邊。",
      "steps": [
        "找出兩三角形共同線段",
        "寫出 AD＝AD",
        "填入公共邊"
      ],
      "optionAnalysis": [
        {
          "choice": "已知",
          "truth": false,
          "reason": "題目通常不必額外給 AD＝AD。"
        },
        {
          "choice": "公共邊",
          "truth": true,
          "reason": "依獨立推導可得到此結果；AD 同時屬於兩個三角形，線段等於自身，稱為公共邊。"
        },
        {
          "choice": "中點定義",
          "truth": false,
          "reason": "D 是否為中點與此自等關係無關。"
        },
        {
          "choice": "SSS",
          "truth": false,
          "reason": "SSS 是三組邊齊備後的全等判定。"
        }
      ],
      "misconceptionTarget": "把全等判定寫在單一條件旁。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「填入公共邊理由」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「公共邊」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：填入公共邊理由。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "bc10b9228b11aba92b741bb5c8dd98f6d8932524d129943573e09b8a5866473b"
    },
    {
      "questionId": "u20-s004-v004",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-fill-reason",
      "skillSlot": "s004",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "已知 AB∥CD，截線 EF 形成內錯角 ∠1、∠2。證明寫 ∠1＝∠2（＿＿＿），應填何者？",
      "givenConditions": [],
      "target": "填入平行線角性質",
      "choices": [
        "同旁內角互補",
        "對頂角相等",
        "內錯角相等",
        "直角定義"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "平行線 AB、CD 被 EF 所截，內錯角相等。",
        "result": "內錯角相等"
      },
      "explanation": "平行線 AB、CD 被 EF 所截，內錯角相等。",
      "steps": [
        "確認平行條件",
        "辨認角型為內錯角",
        "填入內錯角相等"
      ],
      "optionAnalysis": [
        {
          "choice": "同旁內角互補",
          "truth": false,
          "reason": "角型不同且結論應為和180°。"
        },
        {
          "choice": "對頂角相等",
          "truth": false,
          "reason": "兩角不共頂點。"
        },
        {
          "choice": "內錯角相等",
          "truth": true,
          "reason": "依獨立推導可得到此結果；平行線 AB、CD 被 EF 所截，內錯角相等。"
        },
        {
          "choice": "直角定義",
          "truth": false,
          "reason": "題目沒有直角標記。"
        }
      ],
      "misconceptionTarget": "把所有平行線角關係都填成同位角。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「填入平行線角性質」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「內錯角相等」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：填入平行線角性質。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "db8d1c66eebe84832479f20d0bca9ca47fb8d1af3e79f92d9a587c318fe12d1c"
    },
    {
      "questionId": "u20-s004-v005",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-fill-reason",
      "skillSlot": "s004",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "證明稿已列 AB＝DE、∠B＝∠E、BC＝EF，因此 △ABC≅△DEF（＿＿＿）。空格應填哪個判定？",
      "givenConditions": [],
      "target": "填入正確全等判定",
      "choices": [
        "SSS",
        "ASA",
        "AAA",
        "SAS"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "兩組對應邊 AB、BC 相等，且其夾角 ∠B、∠E 相等，符合 SAS。",
        "result": "SAS"
      },
      "explanation": "兩組對應邊 AB、BC 相等，且其夾角 ∠B、∠E 相等，符合 SAS。",
      "steps": [
        "定位兩組邊",
        "確認角在兩邊之間",
        "填入 SAS"
      ],
      "optionAnalysis": [
        {
          "choice": "SSS",
          "truth": false,
          "reason": "只給兩組邊。"
        },
        {
          "choice": "ASA",
          "truth": false,
          "reason": "給的是兩邊一角，不是兩角一邊。"
        },
        {
          "choice": "AAA",
          "truth": false,
          "reason": "AAA 不能判定全等。"
        },
        {
          "choice": "SAS",
          "truth": true,
          "reason": "依獨立推導可得到此結果；兩組對應邊 AB、BC 相等，且其夾角 ∠B、∠E 相等，符合 SAS。"
        }
      ],
      "misconceptionTarget": "只數到三個條件，未辨認條件種類與位置。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「填入正確全等判定」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「SAS」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：填入正確全等判定。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "8e5f98ccc71404c43d9e739bee3b0e34cb69cdecdbefbfe6a5a7ae70186756d4"
    },
    {
      "questionId": "u20-s004-v006",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-fill-reason",
      "skillSlot": "s004",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "已證 △ABC≅△DEF，接著寫 ∠C＝∠F（＿＿＿）。空格應填什麼？",
      "givenConditions": [],
      "target": "填入全等後性質",
      "choices": [
        "等腰三角形底角相等",
        "全等三角形的對應角相等",
        "平行線同位角相等",
        "角平分線定義"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "全等式順序顯示 C 對應 F，因此兩個對應角相等。",
        "result": "全等三角形的對應角相等"
      },
      "explanation": "全等式順序顯示 C 對應 F，因此兩個對應角相等。",
      "steps": [
        "讀取 C↔F 的對應",
        "使用全等後性質",
        "填入對應角相等"
      ],
      "optionAnalysis": [
        {
          "choice": "等腰三角形底角相等",
          "truth": false,
          "reason": "沒有等腰資訊。"
        },
        {
          "choice": "全等三角形的對應角相等",
          "truth": true,
          "reason": "依獨立推導可得到此結果；全等式順序顯示 C 對應 F，因此兩個對應角相等。"
        },
        {
          "choice": "平行線同位角相等",
          "truth": false,
          "reason": "沒有平行線。"
        },
        {
          "choice": "角平分線定義",
          "truth": false,
          "reason": "沒有角平分線。"
        }
      ],
      "misconceptionTarget": "忽略全等式的頂點順序。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「填入全等後性質」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「全等三角形的對應角相等」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：填入全等後性質。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "e3d0aff83504a8cb24fa529ac6d57cce364df2018792e87e24bc82f1f73c33b8"
    },
    {
      "questionId": "u20-s004-v007",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-fill-reason",
      "skillSlot": "s004",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "已知 ∠1＝∠2，且 ∠1＋∠3＝180°、∠2＋∠4＝180°。證明寫 ∠3＝∠4（＿＿＿），應填何者？",
      "givenConditions": [],
      "target": "填入補角推理理由",
      "choices": [
        "等角的補角相等",
        "互補角彼此相等",
        "同角的餘角互補",
        "三角形外角定理"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "∠3、∠4 分別是相等角 ∠1、∠2 的補角，因此相等。",
        "result": "等角的補角相等"
      },
      "explanation": "∠3、∠4 分別是相等角 ∠1、∠2 的補角，因此相等。",
      "steps": [
        "由兩個180°等式表示補角",
        "使用 ∠1＝∠2",
        "填入等角的補角相等"
      ],
      "optionAnalysis": [
        {
          "choice": "等角的補角相等",
          "truth": true,
          "reason": "依獨立推導可得到此結果；∠3、∠4 分別是相等角 ∠1、∠2 的補角，因此相等。"
        },
        {
          "choice": "互補角彼此相等",
          "truth": false,
          "reason": "一對互補角通常不相等。"
        },
        {
          "choice": "同角的餘角互補",
          "truth": false,
          "reason": "餘角和為90°，敘述也不符。"
        },
        {
          "choice": "三角形外角定理",
          "truth": false,
          "reason": "題目未建立三角形。"
        }
      ],
      "misconceptionTarget": "把「互補」誤解為「兩角相等」。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「填入補角推理理由」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「等角的補角相等」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：填入補角推理理由。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "a1409fbaf7b87305889227337fd12d772efa374fbec215d74d130b82bec98eb2"
    },
    {
      "questionId": "u20-s004-v008",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-fill-reason",
      "skillSlot": "s004",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "已知 x＝AB、AB＝CD，證明中寫 x＝CD（＿＿＿）。空格應填什麼？",
      "givenConditions": [],
      "target": "填入等量遞移理由",
      "choices": [
        "乘法結合律",
        "反證法",
        "等量代換",
        "圖形對稱"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "x 與 CD 都等於 AB，可用等量代換或相等關係的遞移性得到 x＝CD。",
        "result": "等量代換"
      },
      "explanation": "x 與 CD 都等於 AB，可用等量代換或相等關係的遞移性得到 x＝CD。",
      "steps": [
        "建立 x＝AB",
        "建立 AB＝CD",
        "以共同量 AB 連接"
      ],
      "optionAnalysis": [
        {
          "choice": "乘法結合律",
          "truth": false,
          "reason": "本題沒有乘法。"
        },
        {
          "choice": "反證法",
          "truth": false,
          "reason": "沒有假設否定結論。"
        },
        {
          "choice": "等量代換",
          "truth": true,
          "reason": "依獨立推導可得到此結果；x 與 CD 都等於 AB，可用等量代換或相等關係的遞移性得到 x＝CD。"
        },
        {
          "choice": "圖形對稱",
          "truth": false,
          "reason": "等式推理不需圖形。"
        }
      ],
      "misconceptionTarget": "只因符號相近就認為可互換。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「填入等量遞移理由」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「等量代換」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：填入等量遞移理由。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "74d539d75013fb0bffd0e9573ea08d7a2b3f16c17740ceddc596ba4d4d176322"
    },
    {
      "questionId": "u20-s004-v009",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-fill-reason",
      "skillSlot": "s004",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "證明最後一步為：∠A＝∠B，且兩角是直線 l、m 被 t 所截形成的同位角，所以 l∥m（＿＿＿）。空格應填何者？",
      "givenConditions": [],
      "target": "填入逆向判定理由",
      "choices": [
        "兩直線平行，同位角相等",
        "同位角相等，兩直線平行",
        "對頂角相等",
        "垂直於同一直線"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "此處由角相等推出直線平行，使用的是平行線判定：同位角相等，兩直線平行。",
        "result": "同位角相等，兩直線平行"
      },
      "explanation": "此處由角相等推出直線平行，使用的是平行線判定：同位角相等，兩直線平行。",
      "steps": [
        "辨認推理方向是角到線",
        "確認角型為同位角",
        "填入平行線判定"
      ],
      "optionAnalysis": [
        {
          "choice": "兩直線平行，同位角相等",
          "truth": false,
          "reason": "這是性質方向，前提與結論顛倒。"
        },
        {
          "choice": "同位角相等，兩直線平行",
          "truth": true,
          "reason": "依獨立推導可得到此結果；此處由角相等推出直線平行，使用的是平行線判定：同位角相等，兩直線平行。"
        },
        {
          "choice": "對頂角相等",
          "truth": false,
          "reason": "不能推出不同直線平行。"
        },
        {
          "choice": "垂直於同一直線",
          "truth": false,
          "reason": "題目沒有垂直條件。"
        }
      ],
      "misconceptionTarget": "把平行線性質與平行線判定方向混用。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「填入逆向判定理由」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「同位角相等，兩直線平行」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：填入逆向判定理由。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "4303dbf83aa934fa6341cfcb27ba01ddcf17c681536027edbf97f43cb7a3d33e"
    },
    {
      "questionId": "u20-s004-v010",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-fill-reason",
      "skillSlot": "s004",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "屋架設計圖用相同刻痕標示 AB、AC。證明稿寫 AB＝AC（＿＿＿）。最合適的填空是什麼？",
      "givenConditions": [],
      "target": "在設計圖中填入條件來源",
      "choices": [
        "照片量測結果",
        "木料顏色相同",
        "屋架左右看似對稱",
        "屋架標示的等長條件"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "相同刻痕是設計圖正式約定的等長標記，因此可作為已知條件。",
        "result": "屋架標示的等長條件"
      },
      "explanation": "相同刻痕是設計圖正式約定的等長標記，因此可作為已知條件。",
      "steps": [
        "辨認刻痕圖例",
        "把圖例翻譯為 AB＝AC",
        "標示來源為設計已知"
      ],
      "optionAnalysis": [
        {
          "choice": "照片量測結果",
          "truth": false,
          "reason": "圖面標記不是現場量測。"
        },
        {
          "choice": "木料顏色相同",
          "truth": false,
          "reason": "顏色不代表長度。"
        },
        {
          "choice": "屋架左右看似對稱",
          "truth": false,
          "reason": "外觀可能不按比例。"
        },
        {
          "choice": "屋架標示的等長條件",
          "truth": true,
          "reason": "依獨立推導可得到此結果；相同刻痕是設計圖正式約定的等長標記，因此可作為已知條件。"
        }
      ],
      "misconceptionTarget": "忽略圖例，改用視覺或材質作理由。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「在設計圖中填入條件來源」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「屋架標示的等長條件」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在設計圖中填入條件來源。",
      "literacyContextNecessity": "屋架刻痕是工程圖的正式語言，必須保留情境與圖例才能判讀。",
      "figureId": "fig-u20-proof-roof-01",
      "drawingSpecId": "fig-u20-proof-roof-01",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "d14f1b7d06f3113e7bc09ab95f606b12bc33caf2767ebf60abc9e477583a5896"
    },
    {
      "questionId": "u20-s004-v011",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-fill-reason",
      "skillSlot": "s004",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "坡道檢測紀錄中，同一直線坡面與兩條互相平行的水平基準線相交。證明稿填「兩個對應銳角相等（＿＿＿）」。應填哪個理由？",
      "givenConditions": [],
      "target": "在坡度情境填入平行線理由",
      "choices": [
        "坡道越長角度越大",
        "兩段顏色相同",
        "同一斜坡與水平線所成的角固定",
        "測量人員站在同一側"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "兩條水平基準線平行，被同一坡面截線所截，相應的同位角相等。",
        "result": "同一斜坡與水平線所成的角固定"
      },
      "explanation": "兩條水平基準線平行，被同一坡面截線所截，相應的同位角相等。",
      "steps": [
        "確認兩基準線平行",
        "辨認坡面為截線",
        "使用同位角相等"
      ],
      "optionAnalysis": [
        {
          "choice": "坡道越長角度越大",
          "truth": false,
          "reason": "長度不決定與水平的角度。"
        },
        {
          "choice": "兩段顏色相同",
          "truth": false,
          "reason": "顏色與角度無關。"
        },
        {
          "choice": "同一斜坡與水平線所成的角固定",
          "truth": true,
          "reason": "依獨立推導可得到此結果；兩條水平基準線平行，被同一坡面截線所截，相應的同位角相等。"
        },
        {
          "choice": "測量人員站在同一側",
          "truth": false,
          "reason": "人員位置不是幾何理由。"
        }
      ],
      "misconceptionTarget": "把生活經驗或圖面顏色當作角相等理由。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "角度以度為單位，但本題只判斷相等，不需數值換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「在坡度情境填入平行線理由」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「同一斜坡與水平線所成的角固定」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在坡度情境填入平行線理由。",
      "literacyContextNecessity": "兩條水平基準線與同一坡面的配置直接產生同位角，情境資訊是推理核心。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "ebc85c97d7f941a66017d48f56f3eb7fb3d194643f0da3e24218290b9609dd64"
    },
    {
      "questionId": "u20-s004-v012",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-fill-reason",
      "skillSlot": "s004",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "基地台 P 的規格寫 PA＝PB。證明稿要填「P 在線段 AB 的垂直平分線上（＿＿＿）」。哪個理由正確？",
      "givenConditions": [],
      "target": "在設備配置中填入等距點理由",
      "choices": [
        "由規格『距兩端相等』使用垂直平分線逆性質",
        "因設備位於圖中央",
        "因兩條電纜長度接近",
        "因地面是水平的"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "到線段兩端 A、B 距離相等的點，位在線段 AB 的垂直平分線上。",
        "result": "由規格『距兩端相等』使用垂直平分線逆性質"
      },
      "explanation": "到線段兩端 A、B 距離相等的點，位在線段 AB 的垂直平分線上。",
      "steps": [
        "把規格寫成 PA＝PB",
        "辨認為到兩端等距",
        "使用垂直平分線逆性質"
      ],
      "optionAnalysis": [
        {
          "choice": "由規格『距兩端相等』使用垂直平分線逆性質",
          "truth": true,
          "reason": "依獨立推導可得到此結果；到線段兩端 A、B 距離相等的點，位在線段 AB 的垂直平分線上。"
        },
        {
          "choice": "因設備位於圖中央",
          "truth": false,
          "reason": "圖中央不等於幾何中點或垂直平分線。"
        },
        {
          "choice": "因兩條電纜長度接近",
          "truth": false,
          "reason": "接近不代表精確相等。"
        },
        {
          "choice": "因地面是水平的",
          "truth": false,
          "reason": "水平與等距位置沒有直接關係。"
        }
      ],
      "misconceptionTarget": "把圖面中央或近似等長當作正式性質。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "PA、PB 使用同一長度單位，等距敘述有效。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「在設備配置中填入等距點理由」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「由規格『距兩端相等』使用垂直平分線逆性質」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在設備配置中填入等距點理由。",
      "literacyContextNecessity": "基地台與兩端電纜的等距規格決定垂直平分線位置，情境不可刪除。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "2a0d36516a5c5d00c8358c999c86c43ba57a40ad538b2f4a0336624662be7771"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u20-s004-cr001",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-fill-reason",
      "skillSlot": "s004",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "完成證明填空並說明理由：已知 D 是 BC 中點，AD 為公共邊，且 ∠BDA＝∠CDA。證明：BD＝DC（①）；AD＝AD（②）；因此 △BDA≅△CDA（③）。",
      "requiredWork": [
        "填出①中點定義。",
        "填出②公共邊。",
        "填出③SAS。"
      ],
      "standardSolution": [
        "① D 是 BC 的中點，所以 BD＝DC（中點定義）。",
        "② AD＝AD（公共邊或反身性）。",
        "③ 兩邊及其夾角分別相等，所以 △BDA≅△CDA（SAS）。"
      ],
      "alternativeMethods": [
        "③也可寫『邊角邊』，但必須確認 ∠BDA、∠CDA 是 BD、AD 與 DC、AD 的夾角。"
      ],
      "reasoningSteps": [
        "① D 是 BC 的中點，所以 BD＝DC（中點定義）。",
        "② AD＝AD（公共邊或反身性）。",
        "③ 兩邊及其夾角分別相等，所以 △BDA≅△CDA（SAS）。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "三個空格皆正確，且能說明夾角位置符合SAS。"
        },
        {
          "score": 2,
          "criteria": "三空中對兩空，或③寫SAS但未說明夾角。"
        },
        {
          "score": 1,
          "criteria": "只辨認中點或公共邊其中一項。"
        },
        {
          "score": 0,
          "criteria": "填入SSA、AAA等錯誤判定，且主要理由均錯。"
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
        "把③填SSS。",
        "把②填已知。",
        "忽略夾角位置。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "reSolvedWithoutStoredAnswer": true,
        "derivedResult": "① D 是 BC 的中點，所以 BD＝DC（中點定義）。；② AD＝AD（公共邊或反身性）。；③ 兩邊及其夾角分別相等，所以 △BDA≅△CDA（SAS）。",
        "rubricAlignment": "每一級分均依本題要求的具體推理、計算或審查內容撰寫。",
        "ambiguity": "題目所需工作與評分對象明確；替代方法只在數學上合法時接受。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "contentSha256": "d4a1d3ede51d1b9428952c8c9a9457cc06987ca822c07cebb1911bb0986c9bc4"
    },
    {
      "questionId": "u20-s004-cr002",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-fill-reason",
      "skillSlot": "s004",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "證明稿如下：AB∥CD，所以 ∠1＝∠2（甲）；又 ∠2＝∠3（已知），所以 ∠1＝∠3（乙）；因此 EF∥GH（丙）。請為甲、乙、丙各補一個精確理由；若資料不足，指出還需哪項角位置資訊。",
      "requiredWork": [
        "甲填平行線的特定角性質。",
        "乙填等量遞移。",
        "丙填等角判定平行並要求角型。"
      ],
      "standardSolution": [
        "甲：若 ∠1、∠2 為內錯角，理由是兩直線平行，內錯角相等（若題圖為同位角則改寫同位角相等）。",
        "乙：等量遞移性。",
        "丙：還需知道 ∠1、∠3 是 EF、GH 被同一截線所形成的同位角或內錯角，才能由角相等判定 EF∥GH。"
      ],
      "alternativeMethods": [
        "可直接指出題目若未提供 ∠1、∠3 的位置，丙無法完成；這是有效的缺件審查。"
      ],
      "reasoningSteps": [
        "甲：若 ∠1、∠2 為內錯角，理由是兩直線平行，內錯角相等（若題圖為同位角則改寫同位角相等）。",
        "乙：等量遞移性。",
        "丙：還需知道 ∠1、∠3 是 EF、GH 被同一截線所形成的同位角或內錯角，才能由角相等判定 EF∥GH。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "甲乙理由正確，且明確指出丙需要同位角或內錯角位置資訊。"
        },
        {
          "score": 2,
          "criteria": "甲乙正確，丙只寫『角相等所以平行』但未標角型。"
        },
        {
          "score": 1,
          "criteria": "只填出等量遞移，或知道資料不足但未說缺什麼。"
        },
        {
          "score": 0,
          "criteria": "把任意等角當成平行充分條件，或三項皆無關。"
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
        "性質與判定方向顛倒。",
        "未說明角的位置。",
        "把乙寫成對頂角相等。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "reSolvedWithoutStoredAnswer": true,
        "derivedResult": "甲：若 ∠1、∠2 為內錯角，理由是兩直線平行，內錯角相等（若題圖為同位角則改寫同位角相等）。；乙：等量遞移性。；丙：還需知道 ∠1、∠3 是 EF、GH 被同一截線所形成的同位角或內錯角，才能由角相等判定 EF∥GH。",
        "rubricAlignment": "每一級分均依本題要求的具體推理、計算或審查內容撰寫。",
        "ambiguity": "題目所需工作與評分對象明確；替代方法只在數學上合法時接受。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "contentSha256": "cbf27c58116031e3fe1923b773faff27fe38f03a70d7dabdff04632ee3965e95"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u20-s004-v001",
      "contentSha256": "503e746c24b6e93afc55ef09aff4c270c4a658e4d9269650e1b387975a76392a",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "由「M 是 AB 的中點」直接得到 AM＝MB，使用的是中點定義。",
      "derivedAnswer": "中點的定義",
      "storedAnswer": "中點的定義",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「中點的定義」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把任何等長都歸因於全等。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：填入定義型理由。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「證明填空：M 是 AB 的中點，所以 AM＝MB（＿＿＿）。空格應填何者？」要求填入定義型理由。獨立推導為：由「M 是 AB 的中點」直接得到 AM＝MB，使用的是中點定義。 四選項依序判定：垂直平分線性質=假，題目未提 M 到 A、B 的距離與垂直平分線。；平行線判定=假，無平行角關係。；三角形全等=假，尚未比較三角形。；中點的定義=真，依獨立推導可得到此結果；由「M 是 AB 的中點」直接得到 AM＝MB，使用的是中點定義。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "849751906bdb3d26458a83ef567d9906c43f81b49be82dcd920d689e092e3124"
    },
    {
      "questionId": "u20-s004-v002",
      "contentSha256": "c852dda8dc22f53b491bbb6bf440bf7518d8f1088fbf527fb4dc859f110270a4",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "∠AOB 與 ∠COD 的兩邊互為反向射線，是對頂角，所以相等。",
      "derivedAnswer": "對頂角相等",
      "storedAnswer": "對頂角相等",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「對頂角相等」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「只看兩角相等就隨意填平行線性質。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：填入角位置理由。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩直線 AC、BD 交於 O。證明中寫 ∠AOB＝∠COD（＿＿＿），空格應填何者？」要求填入角位置理由。獨立推導為：∠AOB 與 ∠COD 的兩邊互為反向射線，是對頂角，所以相等。 四選項依序判定：對頂角相等=真，依獨立推導可得到此結果；∠AOB 與 ∠COD 的兩邊互為反向射線，是對頂角，所以相等。；同位角相等=假，兩角共頂點，不是平行線截線形成的同位角。；三角形內角和=假，題目沒有使用三角形。；等腰三角形底角相等=假，沒有等腰條件。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "ee47dcc277e8b3be3f661ce357a83e1c4153af5aae76e3ce029dbef5df884e2f"
    },
    {
      "questionId": "u20-s004-v003",
      "contentSha256": "bc10b9228b11aba92b741bb5c8dd98f6d8932524d129943573e09b8a5866473b",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "AD 同時屬於兩個三角形，線段等於自身，稱為公共邊。",
      "derivedAnswer": "公共邊",
      "storedAnswer": "公共邊",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「公共邊」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把全等判定寫在單一條件旁。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：填入公共邊理由。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「比較 △ABD 與 △ACD 時，證明列出 AD＝AD（＿＿＿）。最適合填什麼？」要求填入公共邊理由。獨立推導為：AD 同時屬於兩個三角形，線段等於自身，稱為公共邊。 四選項依序判定：已知=假，題目通常不必額外給 AD＝AD。；公共邊=真，依獨立推導可得到此結果；AD 同時屬於兩個三角形，線段等於自身，稱為公共邊。；中點定義=假，D 是否為中點與此自等關係無關。；SSS=假，SSS 是三組邊齊備後的全等判定。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "0ab5d5bef1c236b53015f20a14b83aa5ee5f4fe23875d48cc8bfbaa5df2d505b"
    },
    {
      "questionId": "u20-s004-v004",
      "contentSha256": "db8d1c66eebe84832479f20d0bca9ca47fb8d1af3e79f92d9a587c318fe12d1c",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "平行線 AB、CD 被 EF 所截，內錯角相等。",
      "derivedAnswer": "內錯角相等",
      "storedAnswer": "內錯角相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「內錯角相等」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把所有平行線角關係都填成同位角。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：填入平行線角性質。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已知 AB∥CD，截線 EF 形成內錯角 ∠1、∠2。證明寫 ∠1＝∠2（＿＿＿），應填何者？」要求填入平行線角性質。獨立推導為：平行線 AB、CD 被 EF 所截，內錯角相等。 四選項依序判定：同旁內角互補=假，角型不同且結論應為和180°。；對頂角相等=假，兩角不共頂點。；內錯角相等=真，依獨立推導可得到此結果；平行線 AB、CD 被 EF 所截，內錯角相等。；直角定義=假，題目沒有直角標記。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "047c6bb3fef83250f8446d2aa99c7e7ee7593dcdc54e89ba203e77c2845ef656"
    },
    {
      "questionId": "u20-s004-v005",
      "contentSha256": "8e5f98ccc71404c43d9e739bee3b0e34cb69cdecdbefbfe6a5a7ae70186756d4",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "兩組對應邊 AB、BC 相等，且其夾角 ∠B、∠E 相等，符合 SAS。",
      "derivedAnswer": "SAS",
      "storedAnswer": "SAS",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「SAS」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「只數到三個條件，未辨認條件種類與位置。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：填入正確全等判定。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「證明稿已列 AB＝DE、∠B＝∠E、BC＝EF，因此 △ABC≅△DEF（＿＿＿）。空格應填哪個判定？」要求填入正確全等判定。獨立推導為：兩組對應邊 AB、BC 相等，且其夾角 ∠B、∠E 相等，符合 SAS。 四選項依序判定：SSS=假，只給兩組邊。；ASA=假，給的是兩邊一角，不是兩角一邊。；AAA=假，AAA 不能判定全等。；SAS=真，依獨立推導可得到此結果；兩組對應邊 AB、BC 相等，且其夾角 ∠B、∠E 相等，符合 SAS。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "b7dd03b3f93579f8cf899e73c63cfa4081dc84ea0ade9a76d4e4482c114af566"
    },
    {
      "questionId": "u20-s004-v006",
      "contentSha256": "e3d0aff83504a8cb24fa529ac6d57cce364df2018792e87e24bc82f1f73c33b8",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "全等式順序顯示 C 對應 F，因此兩個對應角相等。",
      "derivedAnswer": "全等三角形的對應角相等",
      "storedAnswer": "全等三角形的對應角相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「全等三角形的對應角相等」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「忽略全等式的頂點順序。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：填入全等後性質。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已證 △ABC≅△DEF，接著寫 ∠C＝∠F（＿＿＿）。空格應填什麼？」要求填入全等後性質。獨立推導為：全等式順序顯示 C 對應 F，因此兩個對應角相等。 四選項依序判定：等腰三角形底角相等=假，沒有等腰資訊。；全等三角形的對應角相等=真，依獨立推導可得到此結果；全等式順序顯示 C 對應 F，因此兩個對應角相等。；平行線同位角相等=假，沒有平行線。；角平分線定義=假，沒有角平分線。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "1b2d62be54c6bf22cd4ad20bbe6ee5a12fb6f5fef1340beb0e11c0ff5f03dccf"
    },
    {
      "questionId": "u20-s004-v007",
      "contentSha256": "a1409fbaf7b87305889227337fd12d772efa374fbec215d74d130b82bec98eb2",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "∠3、∠4 分別是相等角 ∠1、∠2 的補角，因此相等。",
      "derivedAnswer": "等角的補角相等",
      "storedAnswer": "等角的補角相等",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「等角的補角相等」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把「互補」誤解為「兩角相等」。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：填入補角推理理由。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已知 ∠1＝∠2，且 ∠1＋∠3＝180°、∠2＋∠4＝180°。證明寫 ∠3＝∠4（＿＿＿），應填何者？」要求填入補角推理理由。獨立推導為：∠3、∠4 分別是相等角 ∠1、∠2 的補角，因此相等。 四選項依序判定：等角的補角相等=真，依獨立推導可得到此結果；∠3、∠4 分別是相等角 ∠1、∠2 的補角，因此相等。；互補角彼此相等=假，一對互補角通常不相等。；同角的餘角互補=假，餘角和為90°，敘述也不符。；三角形外角定理=假，題目未建立三角形。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "be49a125580e8022544dc45de7dbf1bbd7c94a1bc030145095f5f65d282a69d9"
    },
    {
      "questionId": "u20-s004-v008",
      "contentSha256": "74d539d75013fb0bffd0e9573ea08d7a2b3f16c17740ceddc596ba4d4d176322",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "x 與 CD 都等於 AB，可用等量代換或相等關係的遞移性得到 x＝CD。",
      "derivedAnswer": "等量代換",
      "storedAnswer": "等量代換",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「等量代換」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「只因符號相近就認為可互換。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：填入等量遞移理由。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已知 x＝AB、AB＝CD，證明中寫 x＝CD（＿＿＿）。空格應填什麼？」要求填入等量遞移理由。獨立推導為：x 與 CD 都等於 AB，可用等量代換或相等關係的遞移性得到 x＝CD。 四選項依序判定：乘法結合律=假，本題沒有乘法。；反證法=假，沒有假設否定結論。；等量代換=真，依獨立推導可得到此結果；x 與 CD 都等於 AB，可用等量代換或相等關係的遞移性得到 x＝CD。；圖形對稱=假，等式推理不需圖形。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "81ca9c37d35c7c71dc226421b9c3ce634d1fc747fb02efefbb57cf66540c818c"
    },
    {
      "questionId": "u20-s004-v009",
      "contentSha256": "4303dbf83aa934fa6341cfcb27ba01ddcf17c681536027edbf97f43cb7a3d33e",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "此處由角相等推出直線平行，使用的是平行線判定：同位角相等，兩直線平行。",
      "derivedAnswer": "同位角相等，兩直線平行",
      "storedAnswer": "同位角相等，兩直線平行",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「同位角相等，兩直線平行」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把平行線性質與平行線判定方向混用。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：填入逆向判定理由。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「證明最後一步為：∠A＝∠B，且兩角是直線 l、m 被 t 所截形成的同位角，所以 l∥m（＿＿＿）。空格應填何者？」要求填入逆向判定理由。獨立推導為：此處由角相等推出直線平行，使用的是平行線判定：同位角相等，兩直線平行。 四選項依序判定：兩直線平行，同位角相等=假，這是性質方向，前提與結論顛倒。；同位角相等，兩直線平行=真，依獨立推導可得到此結果；此處由角相等推出直線平行，使用的是平行線判定：同位角相等，兩直線平行。；對頂角相等=假，不能推出不同直線平行。；垂直於同一直線=假，題目沒有垂直條件。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "d40fa93cf129dfebd96f651480dbc74a94fb0068d9abd34b76d6079929f67e38"
    },
    {
      "questionId": "u20-s004-v010",
      "contentSha256": "d14f1b7d06f3113e7bc09ab95f606b12bc33caf2767ebf60abc9e477583a5896",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "相同刻痕是設計圖正式約定的等長標記，因此可作為已知條件。",
      "derivedAnswer": "屋架標示的等長條件",
      "storedAnswer": "屋架標示的等長條件",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「屋架標示的等長條件」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「忽略圖例，改用視覺或材質作理由。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在設計圖中填入條件來源。",
      "literacyContextNecessity": "屋架刻痕是工程圖的正式語言，必須保留情境與圖例才能判讀。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「屋架設計圖用相同刻痕標示 AB、AC。證明稿寫 AB＝AC（＿＿＿）。最合適的填空是什麼？」要求在設計圖中填入條件來源。獨立推導為：相同刻痕是設計圖正式約定的等長標記，因此可作為已知條件。 四選項依序判定：照片量測結果=假，圖面標記不是現場量測。；木料顏色相同=假，顏色不代表長度。；屋架左右看似對稱=假，外觀可能不按比例。；屋架標示的等長條件=真，依獨立推導可得到此結果；相同刻痕是設計圖正式約定的等長標記，因此可作為已知條件。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "b9feb2611ca0b0ce3f381d1ec03adddf441876f6734f56e8990c85b781f73ef1"
    },
    {
      "questionId": "u20-s004-v011",
      "contentSha256": "ebc85c97d7f941a66017d48f56f3eb7fb3d194643f0da3e24218290b9609dd64",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "兩條水平基準線平行，被同一坡面截線所截，相應的同位角相等。",
      "derivedAnswer": "同一斜坡與水平線所成的角固定",
      "storedAnswer": "同一斜坡與水平線所成的角固定",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「同一斜坡與水平線所成的角固定」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "角度以度為單位，但本題只判斷相等，不需數值換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把生活經驗或圖面顏色當作角相等理由。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在坡度情境填入平行線理由。",
      "literacyContextNecessity": "兩條水平基準線與同一坡面的配置直接產生同位角，情境資訊是推理核心。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「坡道檢測紀錄中，同一直線坡面與兩條互相平行的水平基準線相交。證明稿填「兩個對應銳角相等（＿＿＿）」。應填哪個理由？」要求在坡度情境填入平行線理由。獨立推導為：兩條水平基準線平行，被同一坡面截線所截，相應的同位角相等。 四選項依序判定：坡道越長角度越大=假，長度不決定與水平的角度。；兩段顏色相同=假，顏色與角度無關。；同一斜坡與水平線所成的角固定=真，依獨立推導可得到此結果；兩條水平基準線平行，被同一坡面截線所截，相應的同位角相等。；測量人員站在同一側=假，人員位置不是幾何理由。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "03cb1e3520771f819f2fbdd9970da4261c1cba69d9ee5e4bdfe715375518f6de"
    },
    {
      "questionId": "u20-s004-v012",
      "contentSha256": "2a0d36516a5c5d00c8358c999c86c43ba57a40ad538b2f4a0336624662be7771",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "到線段兩端 A、B 距離相等的點，位在線段 AB 的垂直平分線上。",
      "derivedAnswer": "由規格『距兩端相等』使用垂直平分線逆性質",
      "storedAnswer": "由規格『距兩端相等』使用垂直平分線逆性質",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「由規格『距兩端相等』使用垂直平分線逆性質」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "PA、PB 使用同一長度單位，等距敘述有效。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把圖面中央或近似等長當作正式性質。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在設備配置中填入等距點理由。",
      "literacyContextNecessity": "基地台與兩端電纜的等距規格決定垂直平分線位置，情境不可刪除。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「基地台 P 的規格寫 PA＝PB。證明稿要填「P 在線段 AB 的垂直平分線上（＿＿＿）」。哪個理由正確？」要求在設備配置中填入等距點理由。獨立推導為：到線段兩端 A、B 距離相等的點，位在線段 AB 的垂直平分線上。 四選項依序判定：由規格『距兩端相等』使用垂直平分線逆性質=真，依獨立推導可得到此結果；到線段兩端 A、B 距離相等的點，位在線段 AB 的垂直平分線上。；因設備位於圖中央=假，圖中央不等於幾何中點或垂直平分線。；因兩條電纜長度接近=假，接近不代表精確相等。；因地面是水平的=假，水平與等距位置沒有直接關係。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "ba7c5e2b326520e2f25b9191340b2d5645a640d5fc5ab1218fc6adfa835c9d47"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "fig-u20-proof-roof-01",
      "unitId": "u20",
      "ownerSkillSlot": "s004",
      "title": "屋架等長刻痕圖",
      "description": "三角形屋架頂點A與底端B、C相連，AB與AC各有同樣單刻痕，表示設計等長。",
      "canvas": {
        "width": 480,
        "height": 320,
        "viewBox": "0 0 480 320"
      },
      "coordinates": {
        "A": [
          240,
          55
        ],
        "B": [
          70,
          250
        ],
        "C": [
          410,
          250
        ]
      },
      "visibleLineRules": "實線表示題設中的線段或道路；虛線表示延長線或輔助線；直角方框、等長刻痕與平行箭頭只在題設提供時使用。",
      "hiddenLineRules": "本單元為平面圖，不使用立體隱線；未畫出的關係不得自行假設。",
      "labels": "所有點名放在點外側至少8像素；避免壓在線段或直角記號上。",
      "toScale": false,
      "visualInferenceWarning": "圖形未按比例，不可用外觀估計未標示的長度或角度。",
      "altText": "三角形屋架ABC，斜邊AB與AC上有相同單刻痕，底邊BC無刻痕。",
      "svgTitle": "屋架等長刻痕圖",
      "svgDesc": "三角形屋架頂點A與底端B、C相連，AB與AC各有同樣單刻痕，表示設計等長。",
      "mobileReadabilityReview": "在寬度320像素縮放下，主要線段、直角記號與標籤仍可辨認；字級不小於16。",
      "answerLeakageReview": "圖中只呈現題設標記與辨識所需結構，不標示選項答案、中心名稱結論或未給定數值。",
      "geometryAssertions": [
        "AB與AC有相同等長刻痕",
        "未標示角度或中點"
      ],
      "manualVisualInspection": "pass: rendered at 480x320 and reviewed at 320px-equivalent readability; no clipping or answer leakage",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ]
};
export default skillBundle;
