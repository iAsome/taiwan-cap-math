// Deterministically emitted from reviewed CHATGPT_HUMAN_AUTHORED_R1 source.
// Do not edit this staging module by hand.
export const skillData={
  "slot": "s002",
  "lecture": {
    "lectureId": "u16-s002-lecture-r1",
    "unitId": "u16",
    "numericUnitId": 16,
    "topicId": "u16-congruence",
    "skillId": "triangle-congruence-proof",
    "skillOrder": 2,
    "originalLockedTitle": "全等證明",
    "title": "全等證明：把已知條件排成可檢查的理由鏈",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能以『已知、推得、判定、結論』的順序寫出三角形全等證明。",
      "能辨認共用邊、對頂角、角平分線、中點等隱含可用條件。",
      "能正確指定全等判定並按對應順序寫全等式。",
      "能由全等三角形的對應部分相等推出邊長或角度結論。"
    ],
    "prerequisiteBridge": "已知有效全等判定後，本技能進一步練習把題目中的資料轉成邏輯理由。證明不是把結論重寫一次，而是讓每一步都能追溯到已知、定義或已證定理。",
    "prerequisites": [
      {
        "skillId": "triangle-congruence",
        "requiredLevel": "能使用先備技能「全等判定」的核心定義與基本運算，並能說明其與本節的連結。"
      }
    ],
    "glossary": [
      {
        "term": "證明",
        "definition": "用已知條件與已成立定理，逐步推出結論的論證。"
      },
      {
        "term": "共用邊",
        "definition": "同一條線段同時屬於兩個三角形，因此與自己相等。"
      },
      {
        "term": "對頂角",
        "definition": "兩直線相交時，位置相對的兩角相等。"
      },
      {
        "term": "中點",
        "definition": "把一條線段分成兩段相等線段的點。"
      },
      {
        "term": "CPCTC",
        "definition": "全等三角形的對應部分相等；國中可直接寫『全等三角形對應邊或對應角相等』。"
      }
    ],
    "notation": [
      {
        "symbol": "AB=AB",
        "meaning": "同一條共用邊與自己相等。"
      },
      {
        "symbol": "M 為 AB 中點",
        "meaning": "AM=MB。"
      },
      {
        "symbol": "∠1=∠2",
        "meaning": "需附理由，例如角平分線、對頂角或已知。"
      },
      {
        "symbol": "∴",
        "meaning": "因此，用來標示由前述理由推出的結論。"
      }
    ],
    "conceptNarrative": [
      "一份可靠證明先列出可以使用的事實，再選擇判定條件；不能先宣稱全等，再拿全等當理由補條件。",
      "題目常把一項條件藏在定義裡。例如 M 是 AB 中點，就能得到 AM=MB；AD 是角平分線，就能得到兩個角相等。",
      "共用邊不需題目另外寫出，但仍須在證明中明確列為『共用邊』。",
      "全等式的順序必須與三組對應資料一致，否則即使判定種類正確，結論仍可能對錯邊或對錯角。",
      "完成全等後，才能用對應部分相等求未知量。"
    ],
    "formalDefinitions": [
      {
        "name": "直接證明框架",
        "statement": "先由已知與定義取得三組足夠條件，再套用全等判定，最後由對應部分相等得到目標。"
      },
      {
        "name": "中點定義",
        "statement": "若 M 為 AB 中點，則 A、M、B 共線且 AM=MB。"
      },
      {
        "name": "角平分線定義",
        "statement": "若 AD 平分 ∠BAC，則 ∠BAD=∠DAC。"
      }
    ],
    "formulas": [
      {
        "formula": "三組條件 ⇒ △1≅△2 ⇒ 對應部分相等",
        "conditions": [
          "三組條件確實符合有效判定",
          "全等式順序正確"
        ],
        "meaning": "全等證明的基本邏輯鏈。"
      }
    ],
    "nonApplicableCases": [
      "不能把待證結論當作已知條件。",
      "不能只寫『看圖可知』而不給定理或定義。",
      "不能在尚未證明全等前使用『對應邊相等』。",
      "若只有 AAA 或一般 SSA，證明鏈仍不足。",
      "圖上看似中點或垂直，若無標記或文字條件，不能擅自使用。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "圈出待證的兩個三角形。",
        "check": "兩三角形是否真的包含題目所給條件？"
      },
      {
        "step": 2,
        "instruction": "把文字條件翻成邊角等式。",
        "check": "中點、平分線、垂直等定義是否已展開？"
      },
      {
        "step": 3,
        "instruction": "尋找共用邊、對頂角或直角。",
        "check": "每個隱含條件是否能寫出正確理由？"
      },
      {
        "step": 4,
        "instruction": "排列三組資料並辨認判定。",
        "check": "是否為 SSS、SAS、ASA、AAS 或 RHS？"
      },
      {
        "step": 5,
        "instruction": "依對應順序寫全等式。",
        "check": "每個位置與已列資料一致嗎？"
      },
      {
        "step": 6,
        "instruction": "用全等三角形對應部分相等收尾。",
        "check": "最後推出的量是否正是題目所求？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "AD 平分 ∠BAC，且 AB=AC。證明 △ABD≅△ACD。",
        "solutionSteps": [
          "AB=AC（已知）。",
          "∠BAD=∠CAD（角平分線定義）。",
          "AD=AD（共用邊）。",
          "兩邊及夾角相等。"
        ],
        "answer": "△ABD≅△ACD（SAS）。"
      },
      {
        "exampleId": "L2",
        "prompt": "M 是 AB 中點，CM⊥AB。證明 △AMC≅△BMC。",
        "solutionSteps": [
          "AM=MB（中點定義）。",
          "∠AMC=∠BMC=90°（垂直）。",
          "CM=CM（共用邊）。"
        ],
        "answer": "△AMC≅△BMC（SAS）。"
      },
      {
        "exampleId": "L3",
        "prompt": "兩直線 AB 與 CD 交於 O，且 AO=BO、CO=DO。證明 △AOC≅△BOD。",
        "solutionSteps": [
          "AO=BO、CO=DO（已知）。",
          "∠AOC=∠BOD（對頂角）。",
          "兩邊及夾角相等。"
        ],
        "answer": "△AOC≅△BOD（SAS）。"
      },
      {
        "exampleId": "L4",
        "prompt": "已證 △PQR≅△XYZ，且 PQ=7、∠R=48°。求 XY 與 ∠Z。",
        "solutionSteps": [
          "全等式給 P↔X、Q↔Y、R↔Z。",
          "PQ 對應 XY，∠R 對應 ∠Z。"
        ],
        "answer": "XY=7，∠Z=48°。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把『要證明 AB=AC』先列成 AB=AC。",
        "why": "循環論證。",
        "correction": "只能使用題目已知、定義或先前已證結果。"
      },
      {
        "mistake": "只寫三組等式，不寫理由。",
        "why": "讀者無法確認來源。",
        "correction": "每一行附上已知、共用邊、對頂角或定義。"
      },
      {
        "mistake": "看見共用線段卻漏寫。",
        "why": "以為顯而易見不必記錄。",
        "correction": "證明中仍需明列 AB=AB（共用邊）。"
      },
      {
        "mistake": "判定寫 SAS，但角不是夾角。",
        "why": "只計數未檢查位置。",
        "correction": "標出兩條已知邊共同端點，夾角必在該點。"
      },
      {
        "mistake": "全等式順序與資料不一致。",
        "why": "未先配對頂點。",
        "correction": "用每組相等邊的端點交會決定對應頂點。"
      },
      {
        "mistake": "全等後推出非對應量相等。",
        "why": "忽略全等式位置。",
        "correction": "按第一對第一、第二對第二、第三對第三讀取。"
      }
    ],
    "selfCheck": [
      "我的每個等式都有合法來源嗎？",
      "是否不小心使用了待證結論？",
      "我有把中點、角平分線或垂直展開嗎？",
      "全等式順序是否與三組資料一致？",
      "最後一步是否明確寫出對應部分相等？"
    ],
    "summary": [
      "證明要形成由已知到結論的單向理由鏈。",
      "定義、共用邊與對頂角常提供關鍵條件。",
      "判定種類與全等式順序都必須正確。",
      "證明全等後，才可使用對應部分相等。"
    ],
    "connections": {
      "previous": "使用上一技能的全等判定清單。",
      "next": [
        "等腰與等邊三角形的性質可由拆成兩個三角形後證明全等。",
        "後續幾何證明會反覆使用同一理由鏈結構。"
      ]
    },
    "figureReferences": [
      "u16-fig-002-congruence-proof"
    ],
    "accessibilityNotes": [
      "u16-fig-002-congruence-proof 的替代文字與結構描述收錄於本技能 drawing-specs.jsonl。"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u16-s002-v001",
        "u16-s002-v002",
        "u16-s002-v003",
        "u16-s002-v004",
        "u16-s002-v005",
        "u16-s002-v006",
        "u16-s002-v007",
        "u16-s002-v008",
        "u16-s002-v009",
        "u16-s002-v010",
        "u16-s002-v011",
        "u16-s002-v012"
      ],
      "constructedResponseIds": [
        "u16-s002-cr001",
        "u16-s002-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "針對「全等證明」逐段核對定義、適用條件與反例；重新演算4個例題，確認未使用後續單元才引入的平行線或四邊形定理，並檢查圖形標記不取代文字條件。",
      "reviewVersion": "human-lecture-review-u16-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "5c8efbca69c89a13750bb88a957cdc857618ef186685696d66fe14f7dabc4dd7"
  },
  "mcQuestions": [
    {
      "questionId": "u16-s002-v001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence-proof",
      "skillOrder": 2,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "在證明 △ABD≅△ACD 時，已知 AB=AC 且 AD 平分 ∠BAC。還缺少哪一項最自然的條件？",
      "givenConditions": [
        "D 為兩三角形共同頂點"
      ],
      "target": "補出 SAS 的第三項",
      "choices": [
        "BD=CD",
        "∠B=∠C",
        "AD=AD（共用邊）",
        "AB=AD"
      ],
      "answerIndex": 2,
      "independentSolution": "AB=AC、∠BAD=∠CAD、AD=AD 三項依序是邊、夾角、邊，因此可證 △ABD≅△ACD。",
      "explanation": "AD 是兩三角形的同一條邊，與自己相等；配合兩腰及夾角可用 SAS。 由角平分線得 ∠BAD=∠CAD。 列 AB=AC。 補 AD=AD（共用邊），形成 SAS。",
      "steps": [
        "由角平分線得 ∠BAD=∠CAD。",
        "列 AB=AC。",
        "補 AD=AD（共用邊），形成 SAS。"
      ],
      "optionAnalysis": [
        {
          "choice": "BD=CD",
          "truth": false,
          "reason": "若另有此條件可用 SSS，但題目未給。"
        },
        {
          "choice": "∠B=∠C",
          "truth": false,
          "reason": "這通常是證明全等後才可推出，不能先用。"
        },
        {
          "choice": "AD=AD（共用邊）",
          "truth": true,
          "reason": "AD 是兩三角形的同一條邊，與自己相等；配合兩腰及夾角可用 SAS。"
        },
        {
          "choice": "AB=AD",
          "truth": false,
          "reason": "沒有任何已知或定義支持。"
        }
      ],
      "misconceptionTarget": "漏寫共用邊或把待證底角相等先當條件。",
      "prerequisiteCheck": "已會 SAS 與角平分線定義。",
      "estimatedTimeSec": "80",
      "unitAndRoundingCheck": "純等量證明，沒有單位或近似。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "D 是否在 BC 上不影響這三項 SAS；題目只問最自然缺項。",
      "difficultyReason": "基礎題，辨認共用邊。",
      "literacyContextNecessity": null,
      "authoringIntent": "補足全等證明的合法理由。",
      "tags": [
        "空間與形狀",
        "全等證明",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "413311dad62c43ada5263c0cf9d7e9401ff8bbb14723666765e6e502fc78d414"
    },
    {
      "questionId": "u16-s002-v002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence-proof",
      "skillOrder": 2,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "M 是 AB 的中點。下列哪一項可由『中點』定義直接得到？",
      "givenConditions": [
        "M 位於線段 AB 上"
      ],
      "target": "展開中點定義",
      "choices": [
        "CM⊥AB",
        "∠AMC=∠BMC",
        "AM=MB",
        "AC=BC"
      ],
      "answerIndex": 2,
      "independentSolution": "中點定義唯一能直接提供的是 AM=MB（另有共線）；其餘選項需要額外條件。",
      "explanation": "中點把線段分成兩段相等線段，所以 AM=MB。 讀取 M 是 AB 中點。 依定義寫出 A、M、B 共線且 AM=MB。",
      "steps": [
        "讀取 M 是 AB 中點。",
        "依定義寫出 A、M、B 共線且 AM=MB。"
      ],
      "optionAnalysis": [
        {
          "choice": "CM⊥AB",
          "truth": false,
          "reason": "中點不保證任何外加線段垂直。"
        },
        {
          "choice": "∠AMC=∠BMC",
          "truth": false,
          "reason": "沒有垂直或平分角條件。"
        },
        {
          "choice": "AM=MB",
          "truth": true,
          "reason": "中點把線段分成兩段相等線段，所以 AM=MB。"
        },
        {
          "choice": "AC=BC",
          "truth": false,
          "reason": "中點只描述 AB 的分段。"
        }
      ],
      "misconceptionTarget": "把圖上的中央位置誤認為垂直或對稱。",
      "prerequisiteCheck": "知道線段與中點概念。",
      "estimatedTimeSec": "60",
      "unitAndRoundingCheck": "線段等長不需單位換算。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目用『直接得到』排除需要其他定理的結論。",
      "difficultyReason": "基礎題，展開定義。",
      "literacyContextNecessity": null,
      "authoringIntent": "識別證明中的隱含條件。",
      "tags": [
        "空間與形狀",
        "全等證明",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "8969e548a7f55c316fb7b53329ce0541e5e2ae3c606530f7612a2472d079cc37"
    },
    {
      "questionId": "u16-s002-v003",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence-proof",
      "skillOrder": 2,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-002-congruence-proof",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "兩直線 AC 與 BD 交於 O。證明 △AOB 與 △COD 時，下列哪一組角可由對頂角直接判定相等？",
      "givenConditions": [
        "A、O、C 共線",
        "B、O、D 共線"
      ],
      "target": "找出對頂角",
      "choices": [
        "∠ABO=∠CDO",
        "∠AOB=∠COD",
        "∠BAO=∠DCO",
        "∠AOB=∠AOD"
      ],
      "answerIndex": 1,
      "independentSolution": "兩角的邊分別成兩組反向射線，因此是對頂角，必相等。",
      "explanation": "由兩相交直線形成，∠AOB 與 ∠COD 位於相對位置，是對頂角。 確認 OA、OC 為反向射線。 確認 OB、OD 為反向射線。 相對的兩角相等。",
      "steps": [
        "確認 OA、OC 為反向射線。",
        "確認 OB、OD 為反向射線。",
        "相對的兩角相等。"
      ],
      "optionAnalysis": [
        {
          "choice": "∠ABO=∠CDO",
          "truth": false,
          "reason": "這兩角位於不同頂點，未必相等。"
        },
        {
          "choice": "∠AOB=∠COD",
          "truth": true,
          "reason": "由兩相交直線形成，∠AOB 與 ∠COD 位於相對位置，是對頂角。"
        },
        {
          "choice": "∠BAO=∠DCO",
          "truth": false,
          "reason": "沒有平行或其他條件。"
        },
        {
          "choice": "∠AOB=∠AOD",
          "truth": false,
          "reason": "兩角共邊且通常為鄰補角，不是對頂角。"
        }
      ],
      "misconceptionTarget": "把鄰補角或不同頂點角誤認為對頂角。",
      "prerequisiteCheck": "會辨認相交直線與角。",
      "estimatedTimeSec": "70",
      "unitAndRoundingCheck": "角度關係為精確相等，不含單位衝突。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "共線關係已明示，排除圖形未按比例的疑慮。",
      "difficultyReason": "基礎題，直接辨認證明理由。",
      "literacyContextNecessity": null,
      "authoringIntent": "使用對頂角作證明條件。",
      "tags": [
        "空間與形狀",
        "全等證明",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "7f09c2b2cee528fb559b1b379729203cdb3e2909c9da5bb2f71d73dd0031e24d"
    },
    {
      "questionId": "u16-s002-v004",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence-proof",
      "skillOrder": 2,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "證明中已列出 AB=DE（已知）、BC=EF（已知）、AC=DF（已知）。下一行最合適的是哪一項？",
      "givenConditions": [
        "頂點配對由三組邊的共同端點決定"
      ],
      "target": "完成 SSS 證明",
      "choices": [
        "△ABC≅△DEF（SSS）",
        "△ABC≅△DFE（SSS）",
        "∠A=∠D，所以 △ABC≅△DEF",
        "AB+BC=DE+EF，所以全等"
      ],
      "answerIndex": 0,
      "independentSolution": "共同端點配對為 A-D、B-E、C-F；三邊全對應相等，所以 △ABC≅△DEF。",
      "explanation": "三組對應邊按 AB-DE、BC-EF、AC-DF 一致配對，故以 SSS 全等。 由 AB-DE 與 AC-DF 得 A 對 D。 由 AB-DE 得 B 對 E。 剩餘 C 對 F，寫全等式。",
      "steps": [
        "由 AB-DE 與 AC-DF 得 A 對 D。",
        "由 AB-DE 得 B 對 E。",
        "剩餘 C 對 F，寫全等式。"
      ],
      "optionAnalysis": [
        {
          "choice": "△ABC≅△DEF（SSS）",
          "truth": true,
          "reason": "三組對應邊按 AB-DE、BC-EF、AC-DF 一致配對，故以 SSS 全等。"
        },
        {
          "choice": "△ABC≅△DFE（SSS）",
          "truth": false,
          "reason": "此順序會使 AB 對應 DF，與已列條件不符。"
        },
        {
          "choice": "∠A=∠D，所以 △ABC≅△DEF",
          "truth": false,
          "reason": "應先由 SSS 得全等，不能先假設角相等。"
        },
        {
          "choice": "AB+BC=DE+EF，所以全等",
          "truth": false,
          "reason": "兩邊和相同不是全等判定。"
        }
      ],
      "misconceptionTarget": "判定正確但全等式順序錯誤。",
      "prerequisiteCheck": "已會 SSS 與頂點配對。",
      "estimatedTimeSec": "100",
      "unitAndRoundingCheck": "沒有數值與單位；等式皆精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "三組條件足夠，不需另加角資料；只有一個符合全部端點的排列。",
      "difficultyReason": "標準題，需同時判定與校對全等式順序。",
      "literacyContextNecessity": null,
      "authoringIntent": "把證明條件組成合法結論。",
      "tags": [
        "空間與形狀",
        "全等證明",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "bd22feb0c232e1f882247574597c171d5ad3b0de9bb7bc0269e18490f6f83cac"
    },
    {
      "questionId": "u16-s002-v005",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence-proof",
      "skillOrder": 2,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "已知 AD 平分 ∠BAC、AB=AC。某同學寫：①∠BAD=∠CAD；②AD=AD；③△ABD≅△ACD（SAS）。此證明缺少哪一行？",
      "givenConditions": [
        "D 在 BC 上"
      ],
      "target": "找出證明鏈遺漏條件",
      "choices": [
        "BD=CD（全等三角形對應邊相等）",
        "AB=AC（已知）",
        "∠ADB=∠ADC（對頂角）",
        "∠B=∠C（等腰三角形底角相等）"
      ],
      "answerIndex": 1,
      "independentSolution": "三項應為 AB=AC、∠BAD=∠CAD、AD=AD；題目已有的已知邊被漏寫。",
      "explanation": "SAS 需要兩組邊與夾角；現有 AD 共用與夾角相等，還須列 AB=AC。 檢查 SAS 三項。 角兩旁的邊是 AB、AD 與 AC、AD。 補上 AB=AC。",
      "steps": [
        "檢查 SAS 三項。",
        "角兩旁的邊是 AB、AD 與 AC、AD。",
        "補上 AB=AC。"
      ],
      "optionAnalysis": [
        {
          "choice": "BD=CD（全等三角形對應邊相等）",
          "truth": false,
          "reason": "這是全等後的結論，不能補在判定前。"
        },
        {
          "choice": "AB=AC（已知）",
          "truth": true,
          "reason": "SAS 需要兩組邊與夾角；現有 AD 共用與夾角相等，還須列 AB=AC。"
        },
        {
          "choice": "∠ADB=∠ADC（對頂角）",
          "truth": false,
          "reason": "兩角不是對頂角；且未證明垂直。"
        },
        {
          "choice": "∠B=∠C（等腰三角形底角相等）",
          "truth": false,
          "reason": "雖可成立，但以它證全等不如直接使用已知邊，且會偏離 SAS。"
        }
      ],
      "misconceptionTarget": "跳過已知條件或用全等後結論倒推。",
      "prerequisiteCheck": "會檢查 SAS 的邊角位置。",
      "estimatedTimeSec": "110",
      "unitAndRoundingCheck": "純證明，不涉及測量誤差。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "雖然等腰底角性質可推出其他角，但題目問此 SAS 證明缺行，答案唯一。",
      "difficultyReason": "標準題，需逆向檢查證明所需三項。",
      "literacyContextNecessity": null,
      "authoringIntent": "診斷不完整證明。",
      "tags": [
        "空間與形狀",
        "全等證明",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "308815e7dd328ad7b4e7ece539557ce1d69dde59a199a85543ae22f3cdb09d49"
    },
    {
      "questionId": "u16-s002-v006",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence-proof",
      "skillOrder": 2,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "若 △ABC≅△DEF，欲證明 AC=DF，最後一步應寫哪一個理由？",
      "givenConditions": [
        "全等式順序已正確"
      ],
      "target": "選擇全等後的收尾理由",
      "choices": [
        "SSS 判定",
        "三角形內角和為 180°",
        "同一線段與自己相等",
        "全等三角形的對應邊相等"
      ],
      "answerIndex": 3,
      "independentSolution": "既然 △ABC≅△DEF 已成立，對應邊 AC、DF 必相等，無需重新判定。",
      "explanation": "全等式中 A 對 D、C 對 F，因此 AC 與 DF 是對應邊。 由全等式找出 AC 對應 DF。 引用全等三角形對應部分相等。",
      "steps": [
        "由全等式找出 AC 對應 DF。",
        "引用全等三角形對應部分相等。"
      ],
      "optionAnalysis": [
        {
          "choice": "SSS 判定",
          "truth": false,
          "reason": "SSS 用來證明全等，不是由全等推出邊等長的理由。"
        },
        {
          "choice": "三角形內角和為 180°",
          "truth": false,
          "reason": "與邊長相等無直接關係。"
        },
        {
          "choice": "同一線段與自己相等",
          "truth": false,
          "reason": "AC 與 DF 不是同一條線段。"
        },
        {
          "choice": "全等三角形的對應邊相等",
          "truth": true,
          "reason": "全等式中 A 對 D、C 對 F，因此 AC 與 DF 是對應邊。"
        }
      ],
      "misconceptionTarget": "把全等判定與全等後性質混用。",
      "prerequisiteCheck": "會讀取對應邊。",
      "estimatedTimeSec": "80",
      "unitAndRoundingCheck": "邊長相等為精確結論，無單位或四捨五入。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目已給全等，不需再證；四個理由只有一個能直接推出目標。",
      "difficultyReason": "標準題，區分證明階段。",
      "literacyContextNecessity": null,
      "authoringIntent": "選擇 CPCTC 收尾。",
      "tags": [
        "空間與形狀",
        "全等證明",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "add7adb6c3de5953ca7e42fe1f95a47433241df7333854c80d92050af50bc590"
    },
    {
      "questionId": "u16-s002-v007",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence-proof",
      "skillOrder": 2,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "下列哪一段論證有循環論證的問題？",
      "givenConditions": [
        "目標是證明 △ABC 為等腰三角形"
      ],
      "target": "辨認把待證結論當理由",
      "choices": [
        "先假設 AB=AC，再由等邊對等角得到 ∠B=∠C，故 AB=AC",
        "由 ∠B=∠C，依等角對等邊得 AB=AC",
        "作 AD 為 ∠A 的角平分線，證兩小三角形全等後得 AB=AC",
        "由量得 AB=5、AC=5，所以 AB=AC"
      ],
      "answerIndex": 0,
      "independentSolution": "該段以 AB=AC 作前提又以 AB=AC 作結論，論證依賴自身，屬循環。",
      "explanation": "第一段一開始就假設了要證明的 AB=AC，後面再得到同一結論，沒有建立新依據。 標出待證結論 AB=AC。 檢查每段是否在結論前已使用 AB=AC。",
      "steps": [
        "標出待證結論 AB=AC。",
        "檢查每段是否在結論前已使用 AB=AC。"
      ],
      "optionAnalysis": [
        {
          "choice": "先假設 AB=AC，再由等邊對等角得到 ∠B=∠C，故 AB=AC",
          "truth": true,
          "reason": "第一段一開始就假設了要證明的 AB=AC，後面再得到同一結論，沒有建立新依據。"
        },
        {
          "choice": "由 ∠B=∠C，依等角對等邊得 AB=AC",
          "truth": false,
          "reason": "若 ∠B=∠C 是已知，這是合法逆性質。"
        },
        {
          "choice": "作 AD 為 ∠A 的角平分線，證兩小三角形全等後得 AB=AC",
          "truth": false,
          "reason": "若有足夠其他條件，推理方向可合法。"
        },
        {
          "choice": "由量得 AB=5、AC=5，所以 AB=AC",
          "truth": false,
          "reason": "若量值是題目已知，結論直接成立。"
        }
      ],
      "misconceptionTarget": "認為寫得較長就算證明。",
      "prerequisiteCheck": "知道證明只能使用已知與已證結果。",
      "estimatedTimeSec": "130",
      "unitAndRoundingCheck": "邏輯判斷不含量值近似。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "其他選項是否完整取決於其已知，但都沒有明顯把目標先當前提；題目要求辨認循環本身。",
      "difficultyReason": "進階題，分析證明結構而非計算。",
      "literacyContextNecessity": null,
      "authoringIntent": "偵測循環論證。",
      "tags": [
        "空間與形狀",
        "全等證明",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "e7b3160f1db2589309d3282bfd38a743dd0cdf508b5c2cc0839435bc3dc96f3d"
    },
    {
      "questionId": "u16-s002-v008",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence-proof",
      "skillOrder": 2,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-002-congruence-proof",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "已知 O 是 AC、BD 的交點，AO=CO、BO=DO。要證明 AB=CD，最精簡的證明順序為何？",
      "givenConditions": [
        "A、O、C 共線",
        "B、O、D 共線"
      ],
      "target": "安排全等證明與對應結論",
      "choices": [
        "先假設 AB=CD，再以 SSS 證全等",
        "先以 SAS 證 △AOB≅△COD，再由對應邊相等得 AB=CD",
        "由 AO=CO、BO=DO 直接得 AB=CD",
        "先證 ∠A=∠C，再用 AAA 證全等"
      ],
      "answerIndex": 1,
      "independentSolution": "兩邊及夾角先建立全等，才可合法推出第三組對應邊 AB=CD。",
      "explanation": "AO=CO、BO=DO，加上 ∠AOB=∠COD（對頂角）形成 SAS；全等後 AB、CD 對應。 列 AO=CO、BO=DO。 用對頂角得 ∠AOB=∠COD。 SAS 證全等。 由對應邊相等收尾。",
      "steps": [
        "列 AO=CO、BO=DO。",
        "用對頂角得 ∠AOB=∠COD。",
        "SAS 證全等。",
        "由對應邊相等收尾。"
      ],
      "optionAnalysis": [
        {
          "choice": "先假設 AB=CD，再以 SSS 證全等",
          "truth": false,
          "reason": "把待證結論當條件。"
        },
        {
          "choice": "先以 SAS 證 △AOB≅△COD，再由對應邊相等得 AB=CD",
          "truth": true,
          "reason": "AO=CO、BO=DO，加上 ∠AOB=∠COD（對頂角）形成 SAS；全等後 AB、CD 對應。"
        },
        {
          "choice": "由 AO=CO、BO=DO 直接得 AB=CD",
          "truth": false,
          "reason": "兩組分段相等不足以直接推出第三邊。"
        },
        {
          "choice": "先證 ∠A=∠C，再用 AAA 證全等",
          "truth": false,
          "reason": "AAA 不能判全等，且角 A、C 未知。"
        }
      ],
      "misconceptionTarget": "跳過全等中介或先使用待證邊。",
      "prerequisiteCheck": "會用對頂角與 SAS。",
      "estimatedTimeSec": "140",
      "unitAndRoundingCheck": "純幾何證明，未涉及單位。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "O 位於兩線交點已給，對頂角理由充分；全等式順序 A-O-B 對 C-O-D 唯一。",
      "difficultyReason": "進階題，需規劃多步理由鏈。",
      "literacyContextNecessity": null,
      "authoringIntent": "排序完整證明。",
      "tags": [
        "空間與形狀",
        "全等證明",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "3f1cc33c929b9288e698650cf6505a53ff03cb503b1d4c56383257709359c79d"
    },
    {
      "questionId": "u16-s002-v009",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence-proof",
      "skillOrder": 2,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "某證明列出 ∠A=∠D、∠B=∠E、∠C=∠F，接著寫 △ABC≅△DEF（AAA）。審查結果應為何？",
      "givenConditions": [
        "沒有任何邊長相等資料"
      ],
      "target": "評估證明判定是否合法",
      "choices": [
        "成立，因為三組角全部相等",
        "成立，但應把理由改寫成 SSS",
        "不成立，因為三角形不可能有三組對應角相等",
        "不成立；AAA 只能證明形狀相似，不能證明全等"
      ],
      "answerIndex": 3,
      "independentSolution": "若把 △ABC 放大 2 倍，三角不變但邊長改變，故不全等，證明失敗。",
      "explanation": "三組角相等只確定形狀；不同大小的相似三角形是反例。 辨認現有資料是 AAA。 提出同比例放大或縮小反例。",
      "steps": [
        "辨認現有資料是 AAA。",
        "提出同比例放大或縮小反例。"
      ],
      "optionAnalysis": [
        {
          "choice": "成立，因為三組角全部相等",
          "truth": false,
          "reason": "角度不固定尺度。"
        },
        {
          "choice": "成立，但應把理由改寫成 SSS",
          "truth": false,
          "reason": "沒有三邊資料，不能改成 SSS。"
        },
        {
          "choice": "不成立，因為三角形不可能有三組對應角相等",
          "truth": false,
          "reason": "相似三角形可有三組角相等。"
        },
        {
          "choice": "不成立；AAA 只能證明形狀相似，不能證明全等",
          "truth": true,
          "reason": "三組角相等只確定形狀；不同大小的相似三角形是反例。"
        }
      ],
      "misconceptionTarget": "以資料數量三項誤判為充分。",
      "prerequisiteCheck": "知道全等與相似差異。",
      "estimatedTimeSec": "120",
      "unitAndRoundingCheck": "角度均為精確關係，沒有測量容差。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "即使三角和使第三組角由前兩組推出，仍完全沒有尺度資料。",
      "difficultyReason": "進階題，需用反例審查錯誤證明。",
      "literacyContextNecessity": null,
      "authoringIntent": "批判無效 AAA 證明。",
      "tags": [
        "空間與形狀",
        "全等證明",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "bdeea84560e92e35b9c4d788dc47b046389a6c4c2f42c74a78eba67505da92c7"
    },
    {
      "questionId": "u16-s002-v010",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence-proof",
      "skillOrder": 2,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "工地以兩條交叉鋼索 AC、BD 在 O 點固定，量得 AO=CO、BO=DO。工程師要證明連桿 AB 與 CD 等長，還需要引用哪個現場幾何事實？",
      "givenConditions": [
        "鋼索視為直線段並在 O 相交"
      ],
      "target": "補出可用 SAS 的角條件",
      "choices": [
        "AB 與 CD 看起來平行",
        "O 到四個端點距離都相等",
        "∠AOB 與 ∠COD 是對頂角，所以相等",
        "∠A 與 ∠C 都是銳角"
      ],
      "answerIndex": 2,
      "independentSolution": "鋼索 AC 與 BD 相交，OA/OC、OB/OD 分別為反向射線，故 ∠AOB=∠COD；SAS 完成證明。",
      "explanation": "交叉鋼索形成對頂角，配合兩組分段等長，可用 SAS 證兩小三角形全等。 把 AO=CO、BO=DO 視為兩邊。 由交叉直線取得夾角相等。 SAS 後推出 AB=CD。",
      "steps": [
        "把 AO=CO、BO=DO 視為兩邊。",
        "由交叉直線取得夾角相等。",
        "SAS 後推出 AB=CD。"
      ],
      "optionAnalysis": [
        {
          "choice": "AB 與 CD 看起來平行",
          "truth": false,
          "reason": "外觀或照片不能作證。"
        },
        {
          "choice": "O 到四個端點距離都相等",
          "truth": false,
          "reason": "已知只給兩組，不能擴張。"
        },
        {
          "choice": "∠AOB 與 ∠COD 是對頂角，所以相等",
          "truth": true,
          "reason": "交叉鋼索形成對頂角，配合兩組分段等長，可用 SAS 證兩小三角形全等。"
        },
        {
          "choice": "∠A 與 ∠C 都是銳角",
          "truth": false,
          "reason": "都是銳角不代表相等。"
        }
      ],
      "misconceptionTarget": "用照片外觀代替對頂角定理。",
      "prerequisiteCheck": "能把交叉構件抽象成兩直線。",
      "estimatedTimeSec": "130",
      "unitAndRoundingCheck": "所有長度只比較相等，角相等為理想幾何條件；未涉及施工誤差容差。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "現場『固定在 O 點相交』提供對頂角，若鋼索彎曲則模型不適用，題目已假設直線段。",
      "difficultyReason": "素養題，現場結構資訊是補足證明的核心。",
      "literacyContextNecessity": "鋼索相交的配置決定夾角理由，不能刪除情境。",
      "authoringIntent": "把交叉鋼索轉為對頂角。",
      "tags": [
        "空間與形狀",
        "全等證明",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "bdaae3789912dea36548b2eab62cdda7bdd9b52c19748d31f4c8eaa780444982"
    },
    {
      "questionId": "u16-s002-v011",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence-proof",
      "skillOrder": 2,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-002-congruence-proof",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "一份品質報告用『左右看起來對稱』證明橋架左右兩個三角形全等。下列改寫何者最符合正式證明？",
      "givenConditions": [
        "左右半架共用中央支柱 AD",
        "兩側斜桿 AB=AC",
        "AD 平分頂角 A"
      ],
      "target": "用可驗證條件取代外觀",
      "choices": [
        "列出 AB=AC、AD=AD、∠BAD=∠CAD，再以 SAS 判定",
        "保留『看起來對稱』並附照片",
        "只寫左右面積相等",
        "只寫兩側周長相等"
      ],
      "answerIndex": 0,
      "independentSolution": "AB=AC（規格）、AD=AD（共用）、∠BAD=∠CAD（角平分）足以證左右半架全等。",
      "explanation": "兩側有一組斜桿等長、共用支柱與夾角平分，三項可檢驗且符合 SAS。 將工程條件翻成邊角等式。 確認 ∠BAD、∠CAD 是 AB/AD 與 AC/AD 的夾角。 以 SAS 寫全等。",
      "steps": [
        "將工程條件翻成邊角等式。",
        "確認 ∠BAD、∠CAD 是 AB/AD 與 AC/AD 的夾角。",
        "以 SAS 寫全等。"
      ],
      "optionAnalysis": [
        {
          "choice": "列出 AB=AC、AD=AD、∠BAD=∠CAD，再以 SAS 判定",
          "truth": true,
          "reason": "兩側有一組斜桿等長、共用支柱與夾角平分，三項可檢驗且符合 SAS。"
        },
        {
          "choice": "保留『看起來對稱』並附照片",
          "truth": false,
          "reason": "照片不提供精確全等條件。"
        },
        {
          "choice": "只寫左右面積相等",
          "truth": false,
          "reason": "面積相等不能保證全等。"
        },
        {
          "choice": "只寫兩側周長相等",
          "truth": false,
          "reason": "周長相等也不能保證全等。"
        }
      ],
      "misconceptionTarget": "以視覺對稱、面積或周長代替充分判定。",
      "prerequisiteCheck": "會用 SAS 寫完整理由鏈。",
      "estimatedTimeSec": "150",
      "unitAndRoundingCheck": "長度與角度只用相等關係，未要求測量誤差；模型採理想尺寸。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目明示三項工程條件，沒有額外使用垂直或中點假設。",
      "difficultyReason": "素養題，需把品質語句改成可稽核證明。",
      "literacyContextNecessity": "品質報告的可驗證性依賴列出的實際規格條件。",
      "authoringIntent": "正式化工程全等證明。",
      "tags": [
        "空間與形狀",
        "全等證明",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "ed785ec15698146669d078a668bf87d3046c958dc475fc0c7ef270f407e1f420"
    },
    {
      "questionId": "u16-s002-v012",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence-proof",
      "skillOrder": 2,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "兩塊地籍三角區域已證 △ABC≅△DEF。報告要把『BC 邊界長度等於 EF』寫成一步結論，最適合的理由是哪一項？",
      "givenConditions": [
        "B 對 E、C 對 F"
      ],
      "target": "選擇報告中的直接依據",
      "choices": [
        "兩區域面積相等",
        "兩區域周長相等",
        "地圖比例尺相同",
        "全等三角形的對應邊相等"
      ],
      "answerIndex": 3,
      "independentSolution": "BC 的端點對應 E、F，因此 BC↔EF；全等即給 BC=EF。",
      "explanation": "全等式已把 BC 與 EF 配為對應邊，可直接推出相等。 讀出 B-E、C-F 的端點對應。 引用全等三角形對應邊相等。",
      "steps": [
        "讀出 B-E、C-F 的端點對應。",
        "引用全等三角形對應邊相等。"
      ],
      "optionAnalysis": [
        {
          "choice": "兩區域面積相等",
          "truth": false,
          "reason": "面積相等不直接指定哪兩邊等長。"
        },
        {
          "choice": "兩區域周長相等",
          "truth": false,
          "reason": "周長相等仍不能單獨推出某一對邊相等。"
        },
        {
          "choice": "地圖比例尺相同",
          "truth": false,
          "reason": "比例尺相同只保證量測尺度一致，不保證實際邊長相等。"
        },
        {
          "choice": "全等三角形的對應邊相等",
          "truth": true,
          "reason": "全等式已把 BC 與 EF 配為對應邊，可直接推出相等。"
        }
      ],
      "misconceptionTarget": "改用較弱的面積、周長或比例尺資訊。",
      "prerequisiteCheck": "能由全等式找對應邊。",
      "estimatedTimeSec": "110",
      "unitAndRoundingCheck": "若長度需數值，兩者使用同一實際單位；本題只證相等。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "地籍圖可能旋轉或翻轉不影響全等對應；已明示頂點配對。",
      "difficultyReason": "素養題，要求選擇最直接、最強的報告理由。",
      "literacyContextNecessity": "邊界管理需確定特定兩邊等長，不能只用面積或周長。",
      "authoringIntent": "把全等結果寫成邊界結論。",
      "tags": [
        "空間與形狀",
        "全等證明",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "10d48248ebc3d76b674a87fbc5e525d54a91988380eb87ab2a14aba87f2e1915"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u16-s002-cr001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence-proof",
      "skillOrder": 2,
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-002-congruence-proof",
      "prompt": "在四邊形 ABCD 中，對角線 AC 將圖形分成 △ABC 與 △CDA。已知 AB=CD、BC=DA。證明 △ABC≅△CDA，並寫出一組可推出的對應角相等。",
      "requiredWork": [
        "列出兩組已知等邊。",
        "指出共同邊AC。",
        "用SSS完成全等證明。",
        "寫出一組對應角。"
      ],
      "fullCreditSolution": [
        "AB=CD、BC=DA（已知），AC=CA（共同邊）。",
        "三組對應邊相等，故 △ABC≅△CDA（SSS）。",
        "因此例如 ∠BAC=∠DCA，或∠ABC=∠CDA。"
      ],
      "alternativeSolutions": [
        "全等式也可寫 △CBA≅△ADC，只要對應順序一致。"
      ],
      "reasoningSteps": [
        "AB=CD、BC=DA（已知），AC=CA（共同邊）。",
        "三組對應邊相等，故 △ABC≅△CDA（SSS）。",
        "因此例如 ∠BAC=∠DCA，或∠ABC=∠CDA。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "三個等邊理由完整、SSS正確、全等式順序正確，且推出一組真正對應角。"
        },
        {
          "score": 2,
          "criteria": "證明核心正確，但漏寫共同邊理由、或對應角標記有一處輕微錯誤。"
        },
        {
          "score": 1,
          "criteria": "只列三組邊或只寫SSS，未完成全等式與角結論。"
        },
        {
          "score": 0,
          "criteria": "使用錯誤判定、對應全錯，或無證明。"
        }
      ],
      "partialCreditRules": [
        "證明核心正確，但漏寫共同邊理由、或對應角標記有一處輕微錯誤。",
        "只列三組邊或只寫SSS，未完成全等式與角結論。"
      ],
      "followThroughPolicy": "若全等式頂點順序錯，但三邊配對與角結論依同一正確對應書寫，可給2分；若後續角依錯誤順序，最多1分。",
      "unitAndNotationRules": "線段相等使用=；三角形全等使用≅；角名中頂點字母需置中。",
      "answerOnlyPolicy": "只寫『SSS所以全等』而未列共同邊，最多1分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "漏掉AC=CA。",
        "把∠ABC對到∠DC A以外的角。"
      ],
      "independentReview": {
        "derivedResult": "△ABC≅△CDA（SSS），可得∠BAC=∠DCA。",
        "ambiguity": "未限制四邊形凸凹，但三邊資料與共同邊仍足以作局部三角形全等判定。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "6eb41a51ec5820f0ec6a051ec88a5d406b3f75b688f9a41cde1a5931ef3fcc27"
    },
    {
      "questionId": "u16-s002-cr002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence-proof",
      "skillOrder": 2,
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "已知 △ABC≅△PQR，且對應順序如全等式。AB=3x+1、PQ=16；∠C=2y+5°、∠R=65°。求 x、y，並說明使用哪些全等後性質。",
      "requiredWork": [
        "依全等式辨認AB↔PQ、∠C↔∠R。",
        "分別列方程式。",
        "解出x、y並驗算。"
      ],
      "fullCreditSolution": [
        "全等三角形對應邊相等：3x+1=16，得x=5。",
        "對應角相等：2y+5=65，得y=30。",
        "代回AB=16、∠C=65°，與對應量一致。"
      ],
      "alternativeSolutions": [
        "可直接由差值計算：x=(16−1)÷3；y=(65−5)÷2。"
      ],
      "reasoningSteps": [
        "全等三角形對應邊相等：3x+1=16，得x=5。",
        "對應角相等：2y+5=65，得y=30。",
        "代回AB=16、∠C=65°，與對應量一致。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "兩個對應關係與方程式正確，得x=5、y=30並說明全等後對應邊角相等。"
        },
        {
          "score": 2,
          "criteria": "兩值中一值正確，另一值僅有單一算術錯誤，且對應關係皆正確。"
        },
        {
          "score": 1,
          "criteria": "能建立至少一個正確對應方程式並解出其值。"
        },
        {
          "score": 0,
          "criteria": "全等式對應讀錯、兩式皆錯或無作答。"
        }
      ],
      "partialCreditRules": [
        "兩值中一值正確，另一值僅有單一算術錯誤，且對應關係皆正確。",
        "能建立至少一個正確對應方程式並解出其值。"
      ],
      "followThroughPolicy": "若前一步把常數抄錯，但後續解方程一致且另一題完整，依正確部分給1至2分；不能因錯值給滿分。",
      "unitAndNotationRules": "x、y無單位；角度量需保留°，邊長式與16使用同一長度單位。",
      "answerOnlyPolicy": "只寫x=5、y=30但無對應理由，最多1分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "把AB對到QR。",
        "解2y+5=65時忘記除2。"
      ],
      "independentReview": {
        "derivedResult": "x=5，y=30。",
        "ambiguity": "全等式明定A↔P、B↔Q、C↔R，沒有其他配對解讀。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "0574204180d7d50ece910f7c532c3626d4d5aa6794c6c0991deaf339f4cfcd07"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u16-s002-v001",
      "unitId": "u16",
      "skillId": "triangle-congruence-proof",
      "contentSha256": "413311dad62c43ada5263c0cf9d7e9401ff8bbb14723666765e6e502fc78d414",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "AB=AC、∠BAD=∠CAD、AD=AD 三項依序是邊、夾角、邊，因此可證 △ABD≅△ACD。",
      "derivedAnswer": "AD=AD（共用邊）",
      "storedAnswer": "AD=AD（共用邊）",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「AD=AD（共用邊）」；另外三個選項逐一排除：「BD=CD」：若另有此條件可用 SSS，但題目未給。；「∠B=∠C」：這通常是證明全等後才可推出，不能先用。；「AB=AD」：沒有任何已知或定義支持。",
        "undefinedSymbol": "題幹符號與詞語已在「全等證明」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "純等量證明，沒有單位或近似。",
        "roundingConflict": "依精確資料獨立推導為「AD=AD（共用邊）」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "D 是否在 BC 上不影響這三項 SAS；題目只問最自然缺項。",
        "alternateReading": "若採常見誤讀「漏寫共用邊或把待證底角相等先當條件。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，辨認共用邊。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "已會 SAS 與角平分線定義。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「補出 SAS 的第三項」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「在證明 △ABD≅△ACD 時，已知 AB=AC 且 AD 平分 ∠BAC。還缺少哪一項最自然的條件？」獨立重算：AB=AC、∠BAD=∠CAD、AD=AD 三項依序是邊、夾角、邊，因此可證 △ABD≅△ACD。 正確選項「AD=AD（共用邊）」。四選項核對：BD=CD=假，若另有此條件可用 SSS，但題目未給。；∠B=∠C=假，這通常是證明全等後才可推出，不能先用。；AD=AD（共用邊）=真，AD 是兩三角形的同一條邊，與自己相等；配合兩腰及夾角可用 SAS。；AB=AD=假，沒有任何已知或定義支持。 邊界：D 是否在 BC 上不影響這三項 SAS；題目只問最自然缺項。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s002-v002",
      "unitId": "u16",
      "skillId": "triangle-congruence-proof",
      "contentSha256": "8969e548a7f55c316fb7b53329ce0541e5e2ae3c606530f7612a2472d079cc37",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "中點定義唯一能直接提供的是 AM=MB（另有共線）；其餘選項需要額外條件。",
      "derivedAnswer": "AM=MB",
      "storedAnswer": "AM=MB",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「AM=MB」；另外三個選項逐一排除：「CM⊥AB」：中點不保證任何外加線段垂直。；「∠AMC=∠BMC」：沒有垂直或平分角條件。；「AC=BC」：中點只描述 AB 的分段。",
        "undefinedSymbol": "題幹符號與詞語已在「全等證明」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "線段等長不需單位換算。",
        "roundingConflict": "依精確資料獨立推導為「AM=MB」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目用『直接得到』排除需要其他定理的結論。",
        "alternateReading": "若採常見誤讀「把圖上的中央位置誤認為垂直或對稱。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，展開定義。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "知道線段與中點概念。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「展開中點定義」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「M 是 AB 的中點。下列哪一項可由『中點』定義直接得到？」獨立重算：中點定義唯一能直接提供的是 AM=MB（另有共線）；其餘選項需要額外條件。 正確選項「AM=MB」。四選項核對：CM⊥AB=假，中點不保證任何外加線段垂直。；∠AMC=∠BMC=假，沒有垂直或平分角條件。；AM=MB=真，中點把線段分成兩段相等線段，所以 AM=MB。；AC=BC=假，中點只描述 AB 的分段。 邊界：題目用『直接得到』排除需要其他定理的結論。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s002-v003",
      "unitId": "u16",
      "skillId": "triangle-congruence-proof",
      "contentSha256": "7f09c2b2cee528fb559b1b379729203cdb3e2909c9da5bb2f71d73dd0031e24d",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "兩角的邊分別成兩組反向射線，因此是對頂角，必相等。",
      "derivedAnswer": "∠AOB=∠COD",
      "storedAnswer": "∠AOB=∠COD",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「∠AOB=∠COD」；另外三個選項逐一排除：「∠ABO=∠CDO」：這兩角位於不同頂點，未必相等。；「∠BAO=∠DCO」：沒有平行或其他條件。；「∠AOB=∠AOD」：兩角共邊且通常為鄰補角，不是對頂角。",
        "undefinedSymbol": "題幹符號與詞語已在「全等證明」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度關係為精確相等，不含單位衝突。",
        "roundingConflict": "依精確資料獨立推導為「∠AOB=∠COD」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "共線關係已明示，排除圖形未按比例的疑慮。",
        "alternateReading": "若採常見誤讀「把鄰補角或不同頂點角誤認為對頂角。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，直接辨認證明理由。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會辨認相交直線與角。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「找出對頂角」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩直線 AC 與 BD 交於 O。證明 △AOB 與 △COD 時，下列哪一組角可由對頂角直接判定相等？」獨立重算：兩角的邊分別成兩組反向射線，因此是對頂角，必相等。 正確選項「∠AOB=∠COD」。四選項核對：∠ABO=∠CDO=假，這兩角位於不同頂點，未必相等。；∠AOB=∠COD=真，由兩相交直線形成，∠AOB 與 ∠COD 位於相對位置，是對頂角。；∠BAO=∠DCO=假，沒有平行或其他條件。；∠AOB=∠AOD=假，兩角共邊且通常為鄰補角，不是對頂角。 邊界：共線關係已明示，排除圖形未按比例的疑慮。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s002-v004",
      "unitId": "u16",
      "skillId": "triangle-congruence-proof",
      "contentSha256": "bd22feb0c232e1f882247574597c171d5ad3b0de9bb7bc0269e18490f6f83cac",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "共同端點配對為 A-D、B-E、C-F；三邊全對應相等，所以 △ABC≅△DEF。",
      "derivedAnswer": "△ABC≅△DEF（SSS）",
      "storedAnswer": "△ABC≅△DEF（SSS）",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「△ABC≅△DEF（SSS）」；另外三個選項逐一排除：「△ABC≅△DFE（SSS）」：此順序會使 AB 對應 DF，與已列條件不符。；「∠A=∠D，所以 △ABC≅△DEF」：應先由 SSS 得全等，不能先假設角相等。；「AB+BC=DE+EF，所以全等」：兩邊和相同不是全等判定。",
        "undefinedSymbol": "題幹符號與詞語已在「全等證明」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "沒有數值與單位；等式皆精確。",
        "roundingConflict": "依精確資料獨立推導為「△ABC≅△DEF（SSS）」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "三組條件足夠，不需另加角資料；只有一個符合全部端點的排列。",
        "alternateReading": "若採常見誤讀「判定正確但全等式順序錯誤。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，需同時判定與校對全等式順序。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "已會 SSS 與頂點配對。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「完成 SSS 證明」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「證明中已列出 AB=DE（已知）、BC=EF（已知）、AC=DF（已知）。下一行最合適的是哪一項？」獨立重算：共同端點配對為 A-D、B-E、C-F；三邊全對應相等，所以 △ABC≅△DEF。 正確選項「△ABC≅△DEF（SSS）」。四選項核對：△ABC≅△DEF（SSS）=真，三組對應邊按 AB-DE、BC-EF、AC-DF 一致配對，故以 SSS 全等。；△ABC≅△DFE（SSS）=假，此順序會使 AB 對應 DF，與已列條件不符。；∠A=∠D，所以 △ABC≅△DEF=假，應先由 SSS 得全等，不能先假設角相等。；AB+BC=DE+EF，所以全等=假，兩邊和相同不是全等判定。 邊界：三組條件足夠，不需另加角資料；只有一個符合全部端點的排列。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s002-v005",
      "unitId": "u16",
      "skillId": "triangle-congruence-proof",
      "contentSha256": "308815e7dd328ad7b4e7ece539557ce1d69dde59a199a85543ae22f3cdb09d49",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "三項應為 AB=AC、∠BAD=∠CAD、AD=AD；題目已有的已知邊被漏寫。",
      "derivedAnswer": "AB=AC（已知）",
      "storedAnswer": "AB=AC（已知）",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「AB=AC（已知）」；另外三個選項逐一排除：「BD=CD（全等三角形對應邊相等）」：這是全等後的結論，不能補在判定前。；「∠ADB=∠ADC（對頂角）」：兩角不是對頂角；且未證明垂直。；「∠B=∠C（等腰三角形底角相等）」：雖可成立，但以它證全等不如直接使用已知邊，且會偏離 SAS。",
        "undefinedSymbol": "題幹符號與詞語已在「全等證明」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "純證明，不涉及測量誤差。",
        "roundingConflict": "依精確資料獨立推導為「AB=AC（已知）」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "雖然等腰底角性質可推出其他角，但題目問此 SAS 證明缺行，答案唯一。",
        "alternateReading": "若採常見誤讀「跳過已知條件或用全等後結論倒推。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，需逆向檢查證明所需三項。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會檢查 SAS 的邊角位置。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「找出證明鏈遺漏條件」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已知 AD 平分 ∠BAC、AB=AC。某同學寫：①∠BAD=∠CAD；②AD=AD；③△ABD≅△ACD（SAS）。此證明缺少哪一行？」獨立重算：三項應為 AB=AC、∠BAD=∠CAD、AD=AD；題目已有的已知邊被漏寫。 正確選項「AB=AC（已知）」。四選項核對：BD=CD（全等三角形對應邊相等）=假，這是全等後的結論，不能補在判定前。；AB=AC（已知）=真，SAS 需要兩組邊與夾角；現有 AD 共用與夾角相等，還須列 AB=AC。；∠ADB=∠ADC（對頂角）=假，兩角不是對頂角；且未證明垂直。；∠B=∠C（等腰三角形底角相等）=假，雖可成立，但以它證全等不如直接使用已知邊，且會偏離 SAS。 邊界：雖然等腰底角性質可推出其他角，但題目問此 SAS 證明缺行，答案唯一。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s002-v006",
      "unitId": "u16",
      "skillId": "triangle-congruence-proof",
      "contentSha256": "add7adb6c3de5953ca7e42fe1f95a47433241df7333854c80d92050af50bc590",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "既然 △ABC≅△DEF 已成立，對應邊 AC、DF 必相等，無需重新判定。",
      "derivedAnswer": "全等三角形的對應邊相等",
      "storedAnswer": "全等三角形的對應邊相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「全等三角形的對應邊相等」；另外三個選項逐一排除：「SSS 判定」：SSS 用來證明全等，不是由全等推出邊等長的理由。；「三角形內角和為 180°」：與邊長相等無直接關係。；「同一線段與自己相等」：AC 與 DF 不是同一條線段。",
        "undefinedSymbol": "題幹符號與詞語已在「全等證明」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "邊長相等為精確結論，無單位或四捨五入。",
        "roundingConflict": "依精確資料獨立推導為「全等三角形的對應邊相等」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目已給全等，不需再證；四個理由只有一個能直接推出目標。",
        "alternateReading": "若採常見誤讀「把全等判定與全等後性質混用。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，區分證明階段。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會讀取對應邊。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「選擇全等後的收尾理由」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 △ABC≅△DEF，欲證明 AC=DF，最後一步應寫哪一個理由？」獨立重算：既然 △ABC≅△DEF 已成立，對應邊 AC、DF 必相等，無需重新判定。 正確選項「全等三角形的對應邊相等」。四選項核對：SSS 判定=假，SSS 用來證明全等，不是由全等推出邊等長的理由。；三角形內角和為 180°=假，與邊長相等無直接關係。；同一線段與自己相等=假，AC 與 DF 不是同一條線段。；全等三角形的對應邊相等=真，全等式中 A 對 D、C 對 F，因此 AC 與 DF 是對應邊。 邊界：題目已給全等，不需再證；四個理由只有一個能直接推出目標。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s002-v007",
      "unitId": "u16",
      "skillId": "triangle-congruence-proof",
      "contentSha256": "e7b3160f1db2589309d3282bfd38a743dd0cdf508b5c2cc0839435bc3dc96f3d",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "該段以 AB=AC 作前提又以 AB=AC 作結論，論證依賴自身，屬循環。",
      "derivedAnswer": "先假設 AB=AC，再由等邊對等角得到 ∠B=∠C，故 AB=AC",
      "storedAnswer": "先假設 AB=AC，再由等邊對等角得到 ∠B=∠C，故 AB=AC",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「先假設 AB=AC，再由等邊對等角得到 ∠B=∠C，故 AB=AC」；另外三個選項逐一排除：「由 ∠B=∠C，依等角對等邊得 AB=AC」：若 ∠B=∠C 是已知，這是合法逆性質。；「作 AD 為 ∠A 的角平分線，證兩小三角形全等後得 AB=AC」：若有足夠其他條件，推理方向可合法。；「由量得 AB=5、AC=5，所以 AB=AC」：若量值是題目已知，結論直接成立。",
        "undefinedSymbol": "題幹符號與詞語已在「全等證明」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "邏輯判斷不含量值近似。",
        "roundingConflict": "依精確資料獨立推導為「先假設 AB=AC，再由等邊對等角得到 ∠B=∠C，故 AB=AC」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "其他選項是否完整取決於其已知，但都沒有明顯把目標先當前提；題目要求辨認循環本身。",
        "alternateReading": "若採常見誤讀「認為寫得較長就算證明。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，分析證明結構而非計算。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "知道證明只能使用已知與已證結果。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「辨認把待證結論當理由」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「下列哪一段論證有循環論證的問題？」獨立重算：該段以 AB=AC 作前提又以 AB=AC 作結論，論證依賴自身，屬循環。 正確選項「先假設 AB=AC，再由等邊對等角得到 ∠B=∠C，故 AB=AC」。四選項核對：先假設 AB=AC，再由等邊對等角得到 ∠B=∠C，故 AB=AC=真，第一段一開始就假設了要證明的 AB=AC，後面再得到同一結論，沒有建立新依據。；由 ∠B=∠C，依等角對等邊得 AB=AC=假，若 ∠B=∠C 是已知，這是合法逆性質。；作 AD 為 ∠A 的角平分線，證兩小三角形全等後得 AB=AC=假，若有足夠其他條件，推理方向可合法。；由量得 AB=5、AC=5，所以 AB=AC=假，若量值是題目已知，結論直接成立。 邊界：其他選項是否完整取決於其已知，但都沒有明顯把目標先當前提；題目要求辨認循環本身。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s002-v008",
      "unitId": "u16",
      "skillId": "triangle-congruence-proof",
      "contentSha256": "3f1cc33c929b9288e698650cf6505a53ff03cb503b1d4c56383257709359c79d",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "兩邊及夾角先建立全等，才可合法推出第三組對應邊 AB=CD。",
      "derivedAnswer": "先以 SAS 證 △AOB≅△COD，再由對應邊相等得 AB=CD",
      "storedAnswer": "先以 SAS 證 △AOB≅△COD，再由對應邊相等得 AB=CD",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「先以 SAS 證 △AOB≅△COD，再由對應邊相等得 AB=CD」；另外三個選項逐一排除：「先假設 AB=CD，再以 SSS 證全等」：把待證結論當條件。；「由 AO=CO、BO=DO 直接得 AB=CD」：兩組分段相等不足以直接推出第三邊。；「先證 ∠A=∠C，再用 AAA 證全等」：AAA 不能判全等，且角 A、C 未知。",
        "undefinedSymbol": "題幹符號與詞語已在「全等證明」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "純幾何證明，未涉及單位。",
        "roundingConflict": "依精確資料獨立推導為「先以 SAS 證 △AOB≅△COD，再由對應邊相等得 AB=CD」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "O 位於兩線交點已給，對頂角理由充分；全等式順序 A-O-B 對 C-O-D 唯一。",
        "alternateReading": "若採常見誤讀「跳過全等中介或先使用待證邊。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，需規劃多步理由鏈。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會用對頂角與 SAS。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「安排全等證明與對應結論」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已知 O 是 AC、BD 的交點，AO=CO、BO=DO。要證明 AB=CD，最精簡的證明順序為何？」獨立重算：兩邊及夾角先建立全等，才可合法推出第三組對應邊 AB=CD。 正確選項「先以 SAS 證 △AOB≅△COD，再由對應邊相等得 AB=CD」。四選項核對：先假設 AB=CD，再以 SSS 證全等=假，把待證結論當條件。；先以 SAS 證 △AOB≅△COD，再由對應邊相等得 AB=CD=真，AO=CO、BO=DO，加上 ∠AOB=∠COD（對頂角）形成 SAS；全等後 AB、CD 對應。；由 AO=CO、BO=DO 直接得 AB=CD=假，兩組分段相等不足以直接推出第三邊。；先證 ∠A=∠C，再用 AAA 證全等=假，AAA 不能判全等，且角 A、C 未知。 邊界：O 位於兩線交點已給，對頂角理由充分；全等式順序 A-O-B 對 C-O-D 唯一。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s002-v009",
      "unitId": "u16",
      "skillId": "triangle-congruence-proof",
      "contentSha256": "bdeea84560e92e35b9c4d788dc47b046389a6c4c2f42c74a78eba67505da92c7",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "若把 △ABC 放大 2 倍，三角不變但邊長改變，故不全等，證明失敗。",
      "derivedAnswer": "不成立；AAA 只能證明形狀相似，不能證明全等",
      "storedAnswer": "不成立；AAA 只能證明形狀相似，不能證明全等",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「不成立；AAA 只能證明形狀相似，不能證明全等」；另外三個選項逐一排除：「成立，因為三組角全部相等」：角度不固定尺度。；「成立，但應把理由改寫成 SSS」：沒有三邊資料，不能改成 SSS。；「不成立，因為三角形不可能有三組對應角相等」：相似三角形可有三組角相等。",
        "undefinedSymbol": "題幹符號與詞語已在「全等證明」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度均為精確關係，沒有測量容差。",
        "roundingConflict": "依精確資料獨立推導為「不成立；AAA 只能證明形狀相似，不能證明全等」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "即使三角和使第三組角由前兩組推出，仍完全沒有尺度資料。",
        "alternateReading": "若採常見誤讀「以資料數量三項誤判為充分。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，需用反例審查錯誤證明。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "知道全等與相似差異。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「評估證明判定是否合法」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某證明列出 ∠A=∠D、∠B=∠E、∠C=∠F，接著寫 △ABC≅△DEF（AAA）。審查結果應為何？」獨立重算：若把 △ABC 放大 2 倍，三角不變但邊長改變，故不全等，證明失敗。 正確選項「不成立；AAA 只能證明形狀相似，不能證明全等」。四選項核對：成立，因為三組角全部相等=假，角度不固定尺度。；成立，但應把理由改寫成 SSS=假，沒有三邊資料，不能改成 SSS。；不成立，因為三角形不可能有三組對應角相等=假，相似三角形可有三組角相等。；不成立；AAA 只能證明形狀相似，不能證明全等=真，三組角相等只確定形狀；不同大小的相似三角形是反例。 邊界：即使三角和使第三組角由前兩組推出，仍完全沒有尺度資料。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s002-v010",
      "unitId": "u16",
      "skillId": "triangle-congruence-proof",
      "contentSha256": "bdaae3789912dea36548b2eab62cdda7bdd9b52c19748d31f4c8eaa780444982",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "鋼索 AC 與 BD 相交，OA/OC、OB/OD 分別為反向射線，故 ∠AOB=∠COD；SAS 完成證明。",
      "derivedAnswer": "∠AOB 與 ∠COD 是對頂角，所以相等",
      "storedAnswer": "∠AOB 與 ∠COD 是對頂角，所以相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「∠AOB 與 ∠COD 是對頂角，所以相等」；另外三個選項逐一排除：「AB 與 CD 看起來平行」：外觀或照片不能作證。；「O 到四個端點距離都相等」：已知只給兩組，不能擴張。；「∠A 與 ∠C 都是銳角」：都是銳角不代表相等。",
        "undefinedSymbol": "題幹符號與詞語已在「全等證明」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "所有長度只比較相等，角相等為理想幾何條件；未涉及施工誤差容差。",
        "roundingConflict": "依精確資料獨立推導為「∠AOB 與 ∠COD 是對頂角，所以相等」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "現場『固定在 O 點相交』提供對頂角，若鋼索彎曲則模型不適用，題目已假設直線段。",
        "alternateReading": "若採常見誤讀「用照片外觀代替對頂角定理。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，現場結構資訊是補足證明的核心。",
      "literacyContextNecessity": "鋼索相交的配置決定夾角理由，不能刪除情境。",
      "prerequisiteCheck": "能把交叉構件抽象成兩直線。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「補出可用 SAS 的角條件」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「工地以兩條交叉鋼索 AC、BD 在 O 點固定，量得 AO=CO、BO=DO。工程師要證明連桿 AB 與 CD 等長，還需要引用哪個現場幾何事實？」獨立重算：鋼索 AC 與 BD 相交，OA/OC、OB/OD 分別為反向射線，故 ∠AOB=∠COD；SAS 完成證明。 正確選項「∠AOB 與 ∠COD 是對頂角，所以相等」。四選項核對：AB 與 CD 看起來平行=假，外觀或照片不能作證。；O 到四個端點距離都相等=假，已知只給兩組，不能擴張。；∠AOB 與 ∠COD 是對頂角，所以相等=真，交叉鋼索形成對頂角，配合兩組分段等長，可用 SAS 證兩小三角形全等。；∠A 與 ∠C 都是銳角=假，都是銳角不代表相等。 邊界：現場『固定在 O 點相交』提供對頂角，若鋼索彎曲則模型不適用，題目已假設直線段。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s002-v011",
      "unitId": "u16",
      "skillId": "triangle-congruence-proof",
      "contentSha256": "ed785ec15698146669d078a668bf87d3046c958dc475fc0c7ef270f407e1f420",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "AB=AC（規格）、AD=AD（共用）、∠BAD=∠CAD（角平分）足以證左右半架全等。",
      "derivedAnswer": "列出 AB=AC、AD=AD、∠BAD=∠CAD，再以 SAS 判定",
      "storedAnswer": "列出 AB=AC、AD=AD、∠BAD=∠CAD，再以 SAS 判定",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「列出 AB=AC、AD=AD、∠BAD=∠CAD，再以 SAS 判定」；另外三個選項逐一排除：「保留『看起來對稱』並附照片」：照片不提供精確全等條件。；「只寫左右面積相等」：面積相等不能保證全等。；「只寫兩側周長相等」：周長相等也不能保證全等。",
        "undefinedSymbol": "題幹符號與詞語已在「全等證明」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "長度與角度只用相等關係，未要求測量誤差；模型採理想尺寸。",
        "roundingConflict": "依精確資料獨立推導為「列出 AB=AC、AD=AD、∠BAD=∠CAD，再以 SAS 判定」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目明示三項工程條件，沒有額外使用垂直或中點假設。",
        "alternateReading": "若採常見誤讀「以視覺對稱、面積或周長代替充分判定。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，需把品質語句改成可稽核證明。",
      "literacyContextNecessity": "品質報告的可驗證性依賴列出的實際規格條件。",
      "prerequisiteCheck": "會用 SAS 寫完整理由鏈。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「用可驗證條件取代外觀」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一份品質報告用『左右看起來對稱』證明橋架左右兩個三角形全等。下列改寫何者最符合正式證明？」獨立重算：AB=AC（規格）、AD=AD（共用）、∠BAD=∠CAD（角平分）足以證左右半架全等。 正確選項「列出 AB=AC、AD=AD、∠BAD=∠CAD，再以 SAS 判定」。四選項核對：列出 AB=AC、AD=AD、∠BAD=∠CAD，再以 SAS 判定=真，兩側有一組斜桿等長、共用支柱與夾角平分，三項可檢驗且符合 SAS。；保留『看起來對稱』並附照片=假，照片不提供精確全等條件。；只寫左右面積相等=假，面積相等不能保證全等。；只寫兩側周長相等=假，周長相等也不能保證全等。 邊界：題目明示三項工程條件，沒有額外使用垂直或中點假設。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s002-v012",
      "unitId": "u16",
      "skillId": "triangle-congruence-proof",
      "contentSha256": "10d48248ebc3d76b674a87fbc5e525d54a91988380eb87ab2a14aba87f2e1915",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "BC 的端點對應 E、F，因此 BC↔EF；全等即給 BC=EF。",
      "derivedAnswer": "全等三角形的對應邊相等",
      "storedAnswer": "全等三角形的對應邊相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「全等三角形的對應邊相等」；另外三個選項逐一排除：「兩區域面積相等」：面積相等不直接指定哪兩邊等長。；「兩區域周長相等」：周長相等仍不能單獨推出某一對邊相等。；「地圖比例尺相同」：比例尺相同只保證量測尺度一致，不保證實際邊長相等。",
        "undefinedSymbol": "題幹符號與詞語已在「全等證明」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "若長度需數值，兩者使用同一實際單位；本題只證相等。",
        "roundingConflict": "依精確資料獨立推導為「全等三角形的對應邊相等」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "地籍圖可能旋轉或翻轉不影響全等對應；已明示頂點配對。",
        "alternateReading": "若採常見誤讀「改用較弱的面積、周長或比例尺資訊。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，要求選擇最直接、最強的報告理由。",
      "literacyContextNecessity": "邊界管理需確定特定兩邊等長，不能只用面積或周長。",
      "prerequisiteCheck": "能由全等式找對應邊。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「選擇報告中的直接依據」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩塊地籍三角區域已證 △ABC≅△DEF。報告要把『BC 邊界長度等於 EF』寫成一步結論，最適合的理由是哪一項？」獨立重算：BC 的端點對應 E、F，因此 BC↔EF；全等即給 BC=EF。 正確選項「全等三角形的對應邊相等」。四選項核對：兩區域面積相等=假，面積相等不直接指定哪兩邊等長。；兩區域周長相等=假，周長相等仍不能單獨推出某一對邊相等。；地圖比例尺相同=假，比例尺相同只保證量測尺度一致，不保證實際邊長相等。；全等三角形的對應邊相等=真，全等式已把 BC 與 EF 配為對應邊，可直接推出相等。 邊界：地籍圖可能旋轉或翻轉不影響全等對應；已明示頂點配對。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u16-fig-002-congruence-proof",
      "unitId": "u16",
      "slot": "s002",
      "title": "由共同對角線建立全等證明",
      "altText": "四邊形ABCD畫出對角線AC，形成兩個共享AC的三角形；兩組外邊以刻痕配對。",
      "svgPath": "figures/u16/u16-fig-002-congruence-proof.svg",
      "drawingSpec": {
        "canvas": {
          "width": 360,
          "height": 240,
          "viewBox": "0 0 360 240"
        },
        "coordinateSystem": "左上角為(0,0)，x向右、y向下。",
        "geometry": "四邊形頂點A(60,55)、B(290,70)、C(310,185)、D(75,195)，對角線AC；AB與CD單刻痕，BC與DA雙刻痕。",
        "visibleLineRules": "主要邊線使用2.5px黑色實線；輔助線使用1.5px虛線；弧線不得遮住頂點標籤。",
        "hiddenLineRules": "平面圖無隱藏邊；未畫出的延長線不得由視覺自行推定。",
        "labels": "頂點依四邊形環繞順序標A、B、C、D；共同邊文字置於對角線下方。",
        "tickMarksAndSymbols": "相等邊以同數量短刻痕表示；直角以小正方形；相等角以同型圓弧。",
        "units": "示意圖無長度單位，題目另有數值時以題幹為準。",
        "arrows": "只在延長線或行進方向使用箭頭。",
        "toScale": false,
        "notToScaleWarning": "圖形不按比例，請依標記與題目條件判斷。",
        "mobileLayout": "360×240畫布；最小文字14px；標籤與線段保持至少6px間距。",
        "answerLeakageControl": "圖中只呈現已知結構與定義標記，不標示題目所求數值或正確選項。"
      },
      "svgAssertions": [
        "M60 55 L310 185",
        "共同邊 AC",
        "A</text>",
        "D</text>"
      ],
      "figureReview": {
        "decision": "pass",
        "mobileReadability": "360px寬預覽下，頂點、刻痕、直角符號與延長線箭頭仍可辨識。",
        "answerLeakage": "未顯示任何題目答案；只保留概念所需結構。",
        "geometryCheck": "已依列出的座標逐項核對端點、交點、刻痕與文字位置。",
        "reviewNote": "由共同對角線建立全等證明已逐線檢查：四邊形頂點A(60,55)、B(290,70)、C(310,185)、D(75,195)，對角線AC；AB與CD單刻痕，BC與DA雙刻痕。；標籤配置為頂點依四邊形環繞順序標A、B、C、D；共同邊文字置於對角線下方。，未依視覺比例暗示未給定量。",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "f0b0e935a532420d386626b7f34ddb04c43af06c8543048a873ba65e2a6b4ea9"
    }
  ]
};
export default skillData;
