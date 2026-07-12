// Deterministically emitted from reviewed CHATGPT_HUMAN_AUTHORED_R1 source.
// Do not edit this staging module by hand.
export const skillData={
  "slot": "s003",
  "lecture": {
    "lectureId": "u16-s003-lecture-r1",
    "unitId": "u16",
    "numericUnitId": 16,
    "topicId": "u16-congruence",
    "skillId": "isosceles-equilateral",
    "skillOrder": 3,
    "originalLockedTitle": "等腰與等邊三角形",
    "title": "等腰與等邊三角形：從邊的定義辨認圖形",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能依相等邊的數量辨認等腰三角形與等邊三角形。",
      "能指出等腰三角形的底邊、腰、頂角與底角。",
      "能理解等邊三角形是等腰三角形的特殊情形。",
      "能由符號標記而非目測判斷相等邊。"
    ],
    "prerequisiteBridge": "先前已會用全等描述對應關係。本技能先從分類與名稱建立精確語言，下一步再證明等腰與等邊三角形的角度性質。",
    "prerequisites": [
      {
        "skillId": "triangle-congruence-proof",
        "requiredLevel": "能使用先備技能「全等證明」的核心定義與基本運算，並能說明其與本節的連結。"
      }
    ],
    "glossary": [
      {
        "term": "等腰三角形",
        "definition": "至少有兩邊相等的三角形。"
      },
      {
        "term": "腰",
        "definition": "等腰三角形中兩條相等的邊。"
      },
      {
        "term": "底邊",
        "definition": "等腰三角形中與兩腰不同的第三邊。"
      },
      {
        "term": "頂角",
        "definition": "兩腰所夾的角。"
      },
      {
        "term": "底角",
        "definition": "底邊兩端的兩個角。"
      },
      {
        "term": "等邊三角形",
        "definition": "三邊都相等的三角形。"
      }
    ],
    "notation": [
      {
        "symbol": "AB=AC",
        "meaning": "△ABC 以 AB、AC 為腰，A 為頂點，BC 為底邊。"
      },
      {
        "symbol": "AB=BC=CA",
        "meaning": "△ABC 為等邊三角形。"
      },
      {
        "symbol": "相同刻痕",
        "meaning": "圖上具有相同數量短線的邊表示等長。"
      }
    ],
    "conceptNarrative": [
      "等腰三角形的名稱由邊長條件決定，不是由圖形是否對稱或是否『看起來像屋頂』決定。",
      "若 AB=AC，兩腰在 A 相交，所以 A 是頂角頂點，BC 是底邊，B 與 C 的角是底角。",
      "等邊三角形有三邊相等，因此任選兩邊都符合等腰定義；所以等邊三角形也是等腰三角形的特殊情形。",
      "同一個等邊三角形可選不同底邊描述，但其三個角與三條邊地位完全相同。",
      "題圖未必按比例繪製，必須依等號、數值或刻痕判斷。"
    ],
    "formalDefinitions": [
      {
        "name": "等腰三角形",
        "statement": "一個三角形若至少有兩邊等長，稱為等腰三角形。"
      },
      {
        "name": "等邊三角形",
        "statement": "一個三角形若三邊皆等長，稱為等邊三角形。"
      }
    ],
    "formulas": [
      {
        "formula": "AB=AC ⇒ AB、AC 為腰，BC 為底邊",
        "conditions": [
          "△ABC 中已指定 AB=AC"
        ],
        "meaning": "由相等邊辨認各部分名稱。"
      },
      {
        "formula": "AB=BC=CA ⇒ △ABC 也是等腰三角形",
        "conditions": [
          "採用『至少兩邊相等』定義"
        ],
        "meaning": "等邊是等腰的特殊類型。"
      }
    ],
    "nonApplicableCases": [
      "只有兩角相等時可以推得等腰，但那是性質逆命題，需在下一技能正式使用。",
      "一條邊垂直另一條邊不能判斷等腰。",
      "圖形左右看似對稱但無等長資料時，不能直接判定。",
      "三邊長為 2、2、4 雖有兩邊相等，但無法形成三角形，不能稱為等腰三角形。",
      "『恰有兩邊相等』與『至少兩邊相等』定義不同；本課採國中常用的至少兩邊，因此包含等邊。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "先確認三個長度能形成三角形。",
        "check": "任兩邊和是否大於第三邊？"
      },
      {
        "step": 2,
        "instruction": "比較三邊長或刻痕。",
        "check": "有兩邊相等還是三邊全相等？"
      },
      {
        "step": 3,
        "instruction": "找兩條相等邊的共同端點。",
        "check": "該點就是頂角頂點。"
      },
      {
        "step": 4,
        "instruction": "找未被選為腰的第三邊。",
        "check": "它是底邊，兩端角是底角。"
      },
      {
        "step": 5,
        "instruction": "遇到等邊時說明其特殊性。",
        "check": "是否允許把它視為等腰？本課答案為可以。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "△ABC 中 AB=AC，指出腰、底邊、頂角與底角。",
        "solutionSteps": [
          "相等邊 AB、AC 為腰。",
          "共同端點 A 為頂角頂點，BC 為底邊。"
        ],
        "answer": "腰 AB、AC；底邊 BC；頂角 ∠A；底角 ∠B、∠C。"
      },
      {
        "exampleId": "L2",
        "prompt": "三邊長為 5、5、8 的三角形屬於哪一類？",
        "solutionSteps": [
          "5+5>8，可形成三角形。",
          "有兩邊相等。"
        ],
        "answer": "等腰三角形。"
      },
      {
        "exampleId": "L3",
        "prompt": "三邊長為 6、6、6 的三角形是否也是等腰三角形？",
        "solutionSteps": [
          "三邊全相等，所以是等邊。",
          "任取兩邊也相等，符合至少兩邊相等。"
        ],
        "answer": "是，等邊三角形是等腰三角形的特殊情形。"
      },
      {
        "exampleId": "L4",
        "prompt": "圖上 AB、BC 有相同刻痕，CA 無刻痕，哪一角是頂角？",
        "solutionSteps": [
          "相等邊 AB、BC 的共同端點是 B。",
          "頂角位於兩腰交點。"
        ],
        "answer": "∠B。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把最上方的角固定叫頂角。",
        "why": "受圖形方向影響。",
        "correction": "頂角由兩腰共同端點決定，旋轉圖形也不變。"
      },
      {
        "mistake": "把最長邊固定叫底邊。",
        "why": "以外觀代替定義。",
        "correction": "底邊是兩腰以外的第三邊，不必是最長。"
      },
      {
        "mistake": "認為等邊三角形不是等腰。",
        "why": "誤把等腰理解為恰好兩邊相等。",
        "correction": "本課採至少兩邊相等，因此等邊包含在等腰內。"
      },
      {
        "mistake": "只看圖形像不像等腰。",
        "why": "忽略示意圖可能不按比例。",
        "correction": "依等號、長度或相同刻痕判斷。"
      },
      {
        "mistake": "忽略能否形成三角形。",
        "why": "只比較相等邊。",
        "correction": "長度資料還要先通過三角形不等式。"
      },
      {
        "mistake": "把底角理解成接近紙面下方的角。",
        "why": "受方向干擾。",
        "correction": "底角是底邊兩端的角。"
      }
    ],
    "selfCheck": [
      "我能由相等邊共同端點找出頂角嗎？",
      "我能指出底邊與兩個底角嗎？",
      "我知道等邊三角形也符合等腰定義嗎？",
      "我是否先確認邊長可形成三角形？",
      "我是否避免用圖形方向判定名稱？"
    ],
    "summary": [
      "等腰三角形至少有兩邊相等；等邊三角形三邊相等。",
      "兩腰共同端點是頂角頂點，第三邊是底邊。",
      "等邊三角形是等腰三角形的特殊情形。",
      "分類必須依條件與標記，不依目測。"
    ],
    "connections": {
      "previous": "全等證明提供後續證明等腰性質的工具。",
      "next": [
        "下一組技能會精確使用 SSS、SAS、ASA、AAS。",
        "之後證明等腰三角形底角相等。"
      ]
    },
    "figureReferences": [
      "u16-fig-003-isosceles-structure"
    ],
    "accessibilityNotes": [
      "u16-fig-003-isosceles-structure 的替代文字與結構描述收錄於本技能 drawing-specs.jsonl。"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u16-s003-v001",
        "u16-s003-v002",
        "u16-s003-v003",
        "u16-s003-v004",
        "u16-s003-v005",
        "u16-s003-v006",
        "u16-s003-v007",
        "u16-s003-v008",
        "u16-s003-v009",
        "u16-s003-v010",
        "u16-s003-v011",
        "u16-s003-v012"
      ],
      "constructedResponseIds": [
        "u16-s003-cr001",
        "u16-s003-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "針對「等腰與等邊三角形」逐段核對定義、適用條件與反例；重新演算4個例題，確認未使用後續單元才引入的平行線或四邊形定理，並檢查圖形標記不取代文字條件。",
      "reviewVersion": "human-lecture-review-u16-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "0350a55e130fb9e49bd530dfbfab74b2f5be5fd94144c294db3aa33eb95383fe"
  },
  "mcQuestions": [
    {
      "questionId": "u16-s003-v001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "isosceles-equilateral",
      "skillOrder": 3,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-003-isosceles-structure",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "△ABC 中 AB=AC。下列哪一個角是頂角？",
      "givenConditions": [
        "AB、AC 為兩條相等邊"
      ],
      "target": "辨認兩腰共同端點的角",
      "choices": [
        "∠B",
        "∠A",
        "∠C",
        "無法判斷"
      ],
      "answerIndex": 1,
      "independentSolution": "頂角位於兩腰相交處，AB 與 AC 相交於 A，因此答案是 ∠A。",
      "explanation": "兩腰 AB、AC 的共同端點是 A，所以 ∠A 為頂角。 找相等邊 AB、AC。 找兩邊共同端點 A。",
      "steps": [
        "找相等邊 AB、AC。",
        "找兩邊共同端點 A。"
      ],
      "optionAnalysis": [
        {
          "choice": "∠B",
          "truth": false,
          "reason": "B 只在腰 AB 與底邊 BC 的交點，是底角。"
        },
        {
          "choice": "∠A",
          "truth": true,
          "reason": "兩腰 AB、AC 的共同端點是 A，所以 ∠A 為頂角。"
        },
        {
          "choice": "∠C",
          "truth": false,
          "reason": "C 是另一個底角。"
        },
        {
          "choice": "無法判斷",
          "truth": false,
          "reason": "相等邊已足以決定頂角位置。"
        }
      ],
      "misconceptionTarget": "把圖形上方或任意較大角叫頂角。",
      "prerequisiteCheck": "會讀線段端點與角名稱。",
      "estimatedTimeSec": "55",
      "unitAndRoundingCheck": "純位置判斷，不含單位或近似。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "三角形可旋轉，頂角仍由相等邊共同端點唯一決定。",
      "difficultyReason": "基礎題，直接辨認等腰元素。",
      "literacyContextNecessity": null,
      "authoringIntent": "找出頂角。",
      "tags": [
        "空間與形狀",
        "等腰與等邊三角形",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "26e3c263ebb575f90d4e0c5db528081ad095dd646b8ef93fb5b208b20ca879cc"
    },
    {
      "questionId": "u16-s003-v002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "isosceles-equilateral",
      "skillOrder": 3,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "若三角形三邊長為 7、7、10，則此三角形屬於哪一類？",
      "givenConditions": [
        "三邊長皆為正數"
      ],
      "target": "依邊長分類",
      "choices": [
        "等邊三角形",
        "等腰三角形",
        "不能形成三角形",
        "直角三角形"
      ],
      "answerIndex": 1,
      "independentSolution": "7+7>10，三邊可成三角形；恰有兩條邊長 7，符合等腰定義。",
      "explanation": "兩邊同為 7 且三角形不等式成立，所以是等腰三角形。 先檢查最短兩邊和 7+7>10。 再比較三邊，有兩邊相等。",
      "steps": [
        "先檢查最短兩邊和 7+7>10。",
        "再比較三邊，有兩邊相等。"
      ],
      "optionAnalysis": [
        {
          "choice": "等邊三角形",
          "truth": false,
          "reason": "只有兩邊 7 相等，第三邊為 10。"
        },
        {
          "choice": "等腰三角形",
          "truth": true,
          "reason": "兩邊同為 7 且三角形不等式成立，所以是等腰三角形。"
        },
        {
          "choice": "不能形成三角形",
          "truth": false,
          "reason": "7+7=14>10，可以形成。"
        },
        {
          "choice": "直角三角形",
          "truth": false,
          "reason": "7²+7²≠10²，且題目主要依相等邊分類。"
        }
      ],
      "misconceptionTarget": "只看兩邊相等，未先檢查能否形成三角形。",
      "prerequisiteCheck": "會比較長度並做簡單加法。",
      "estimatedTimeSec": "70",
      "unitAndRoundingCheck": "三邊視為同一長度單位，皆為精確值。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "等腰與直角分類可重疊，但此組並非直角；選項中唯一符合的是等腰。",
      "difficultyReason": "基礎題，分類前加一項可行性檢查。",
      "literacyContextNecessity": null,
      "authoringIntent": "依邊長辨認等腰。",
      "tags": [
        "空間與形狀",
        "等腰與等邊三角形",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "0f6df2c94ea070746fc59591d22667203ea19a5665251d28a3704be8e1c0b4f4"
    },
    {
      "questionId": "u16-s003-v003",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "isosceles-equilateral",
      "skillOrder": 3,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "等邊三角形是否也是等腰三角形？",
      "givenConditions": [
        "本課採『至少有兩邊相等』的等腰定義"
      ],
      "target": "判斷類別包含關係",
      "choices": [
        "不是，等腰必須恰有兩邊相等",
        "只有邊長大於 1 時才是",
        "是，因為三邊相等當然至少有兩邊相等",
        "無法判斷，需知道角度"
      ],
      "answerIndex": 2,
      "independentSolution": "三邊全相等包含至少兩邊相等的條件，因此等邊是等腰的特殊情形。",
      "explanation": "等邊三角形三邊皆相等，任取其中兩邊就符合等腰定義。 讀取等腰為至少兩邊相等。 等邊提供三邊相等。",
      "steps": [
        "讀取等腰為至少兩邊相等。",
        "等邊提供三邊相等。"
      ],
      "optionAnalysis": [
        {
          "choice": "不是，等腰必須恰有兩邊相等",
          "truth": false,
          "reason": "本課定義是至少兩邊，不排除第三邊也相等。"
        },
        {
          "choice": "只有邊長大於 1 時才是",
          "truth": false,
          "reason": "分類與邊長大小無關。"
        },
        {
          "choice": "是，因為三邊相等當然至少有兩邊相等",
          "truth": true,
          "reason": "等邊三角形三邊皆相等，任取其中兩邊就符合等腰定義。"
        },
        {
          "choice": "無法判斷，需知道角度",
          "truth": false,
          "reason": "三邊相等已足夠。"
        }
      ],
      "misconceptionTarget": "把『至少兩邊』誤解成『恰好兩邊』。",
      "prerequisiteCheck": "理解集合包含與定義。",
      "estimatedTimeSec": "55",
      "unitAndRoundingCheck": "無數值、單位或近似。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目明示採用的定義，排除教科書措辭差異。",
      "difficultyReason": "基礎題，理解特殊類型包含關係。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認等邊包含於等腰。",
      "tags": [
        "空間與形狀",
        "等腰與等邊三角形",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "387fd6c70afb5794ca6418efc08b153a3a83eb459d6a2d928b82426fd665aa0a"
    },
    {
      "questionId": "u16-s003-v004",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "isosceles-equilateral",
      "skillOrder": 3,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "△PQR 中 PQ=QR。下列哪一條是底邊？",
      "givenConditions": [
        "PQ、QR 為腰"
      ],
      "target": "辨認第三邊",
      "choices": [
        "PQ",
        "QR",
        "無法確定",
        "PR"
      ],
      "answerIndex": 3,
      "independentSolution": "PQ 與 QR 相等且共點 Q，故 PR 是未被選為腰的第三邊，即底邊。",
      "explanation": "底邊是兩條相等腰以外的第三邊 PR。 標記腰 PQ、QR。 列出剩餘邊 PR。",
      "steps": [
        "標記腰 PQ、QR。",
        "列出剩餘邊 PR。"
      ],
      "optionAnalysis": [
        {
          "choice": "PQ",
          "truth": false,
          "reason": "PQ 是兩條相等邊之一，為腰。"
        },
        {
          "choice": "QR",
          "truth": false,
          "reason": "QR 也是腰。"
        },
        {
          "choice": "無法確定",
          "truth": false,
          "reason": "兩腰已明示，第三邊唯一。"
        },
        {
          "choice": "PR",
          "truth": true,
          "reason": "底邊是兩條相等腰以外的第三邊 PR。"
        }
      ],
      "misconceptionTarget": "把最下方或最長邊才叫底邊。",
      "prerequisiteCheck": "會列三角形三邊。",
      "estimatedTimeSec": "60",
      "unitAndRoundingCheck": "純名稱判斷，不涉及單位。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "即使旋轉圖形，PR 的角色不變；沒有長度大小歧義。",
      "difficultyReason": "標準題，需從任意字母配置辨認底邊。",
      "literacyContextNecessity": null,
      "authoringIntent": "找出底邊。",
      "tags": [
        "空間與形狀",
        "等腰與等邊三角形",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "184ae736edd7a1d4764f82c0b8f409c148b45458d822aefc1954dd9805a005fa"
    },
    {
      "questionId": "u16-s003-v005",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "isosceles-equilateral",
      "skillOrder": 3,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "三角形邊長為 4、4、8。下列敘述何者正確？",
      "givenConditions": [
        "邊長為精確值"
      ],
      "target": "判斷相等邊資料是否足以形成圖形",
      "choices": [
        "不能形成一般三角形，因 4+4=8",
        "是等腰三角形，因有兩邊相等",
        "是等邊三角形",
        "是鈍角等腰三角形"
      ],
      "answerIndex": 0,
      "independentSolution": "雖有兩個 4 相等，但 4+4=8，只形成退化線段，所以不能稱為等腰三角形。",
      "explanation": "最短兩邊和等於最長邊，只能拉成一直線，不是一般三角形。 先檢查三角形不等式。 4+4 不大於 8。",
      "steps": [
        "先檢查三角形不等式。",
        "4+4 不大於 8。"
      ],
      "optionAnalysis": [
        {
          "choice": "不能形成一般三角形，因 4+4=8",
          "truth": true,
          "reason": "最短兩邊和等於最長邊，只能拉成一直線，不是一般三角形。"
        },
        {
          "choice": "是等腰三角形，因有兩邊相等",
          "truth": false,
          "reason": "等號造成退化，三點共線。"
        },
        {
          "choice": "是等邊三角形",
          "truth": false,
          "reason": "三邊並不全相等。"
        },
        {
          "choice": "是鈍角等腰三角形",
          "truth": false,
          "reason": "不存在一般三角形，不能再分類角型。"
        }
      ],
      "misconceptionTarget": "只比較相等邊，忽略三角形存在性。",
      "prerequisiteCheck": "會用任兩邊和大於第三邊。",
      "estimatedTimeSec": "90",
      "unitAndRoundingCheck": "同一長度單位且精確，不存在四捨五入使等號改變。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "本課只把非退化三角形納入分類；端點等號明確排除。",
      "difficultyReason": "標準題，結合分類與邊界條件。",
      "literacyContextNecessity": null,
      "authoringIntent": "避免對不存在的圖形分類。",
      "tags": [
        "空間與形狀",
        "等腰與等邊三角形",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "ce61cf65aca90163aed3c8463584966c91c3827782ba32a8e0e44ac411fa54c5"
    },
    {
      "questionId": "u16-s003-v006",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "isosceles-equilateral",
      "skillOrder": 3,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-003-isosceles-structure",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "圖上 AB 與 BC 有相同刻痕，AC 無刻痕。下列哪一組名稱正確？",
      "givenConditions": [
        "相同刻痕表示 AB=BC"
      ],
      "target": "辨認頂角與兩底角",
      "choices": [
        "∠A 是頂角，∠B、∠C 是底角",
        "∠C 是頂角，∠A、∠B 是底角",
        "∠B 是頂角，∠A、∠C 是底角",
        "三角形必為等邊，所以三角都是頂角"
      ],
      "answerIndex": 2,
      "independentSolution": "兩腰 AB、BC 共同端點為 B；第三邊 AC 是底邊，故底角在 A、C。",
      "explanation": "相等邊 AB、BC 在 B 相交，所以 B 是頂角頂點，AC 為底邊。 由刻痕得 AB=BC。 找共同端點 B。 底邊 AC 的兩端 A、C 為底角。",
      "steps": [
        "由刻痕得 AB=BC。",
        "找共同端點 B。",
        "底邊 AC 的兩端 A、C 為底角。"
      ],
      "optionAnalysis": [
        {
          "choice": "∠A 是頂角，∠B、∠C 是底角",
          "truth": false,
          "reason": "A 不是兩腰共同端點。"
        },
        {
          "choice": "∠C 是頂角，∠A、∠B 是底角",
          "truth": false,
          "reason": "C 只連一條腰。"
        },
        {
          "choice": "∠B 是頂角，∠A、∠C 是底角",
          "truth": true,
          "reason": "相等邊 AB、BC 在 B 相交，所以 B 是頂角頂點，AC 為底邊。"
        },
        {
          "choice": "三角形必為等邊，所以三角都是頂角",
          "truth": false,
          "reason": "只有兩邊有相同刻痕。"
        }
      ],
      "misconceptionTarget": "把刻痕當裝飾或按圖面上下判斷。",
      "prerequisiteCheck": "會解讀幾何刻痕。",
      "estimatedTimeSec": "90",
      "unitAndRoundingCheck": "圖不按比例；只依符號，不含量測與單位。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目明示 AC 無相同刻痕，不能推三邊相等。",
      "difficultyReason": "標準題，從圖形符號建立角色。",
      "literacyContextNecessity": null,
      "authoringIntent": "解讀等長刻痕。",
      "tags": [
        "空間與形狀",
        "等腰與等邊三角形",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "2539f00b1d4136f001bb4dc0f5dcecc4efceee9c4c728a9548aaa01bc2be22b1"
    },
    {
      "questionId": "u16-s003-v007",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "isosceles-equilateral",
      "skillOrder": 3,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "△ABC 為等邊三角形。若把 BC 指定為底邊，哪兩邊可稱為腰？",
      "givenConditions": [
        "等邊三角形三邊相等",
        "本題指定 BC 為底邊"
      ],
      "target": "在特殊情形中選定等腰描述",
      "choices": [
        "AB 與 BC",
        "AC 與 BC",
        "等邊三角形不能使用腰與底邊名稱",
        "AB 與 AC"
      ],
      "answerIndex": 3,
      "independentSolution": "三邊皆相等，任意指定一邊作底邊皆可；本題底邊 BC，故腰為 AB、AC。",
      "explanation": "指定 BC 為底邊後，其餘兩邊 AB、AC 由 A 相交，可作為兩腰。 接受等邊是等腰特殊情形。 排除指定底邊 BC。 剩餘 AB、AC 為腰。",
      "steps": [
        "接受等邊是等腰特殊情形。",
        "排除指定底邊 BC。",
        "剩餘 AB、AC 為腰。"
      ],
      "optionAnalysis": [
        {
          "choice": "AB 與 BC",
          "truth": false,
          "reason": "這會使 AC 成底邊，不符合題目指定。"
        },
        {
          "choice": "AC 與 BC",
          "truth": false,
          "reason": "這會使 AB 成底邊。"
        },
        {
          "choice": "等邊三角形不能使用腰與底邊名稱",
          "truth": false,
          "reason": "等邊符合等腰定義，可在指定底邊下選兩腰。"
        },
        {
          "choice": "AB 與 AC",
          "truth": true,
          "reason": "指定 BC 為底邊後，其餘兩邊 AB、AC 由 A 相交，可作為兩腰。"
        }
      ],
      "misconceptionTarget": "認為等邊沒有任何等腰描述，或忽略題目指定。",
      "prerequisiteCheck": "理解等邊的對稱與類別包含。",
      "estimatedTimeSec": "100",
      "unitAndRoundingCheck": "無單位或近似；名稱由指定角色決定。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "等邊三角形可有三種底邊選法，但題目已指定 BC，答案唯一。",
      "difficultyReason": "進階題，處理特殊類型中的非唯一描述與指定限制。",
      "literacyContextNecessity": null,
      "authoringIntent": "在等邊中建立指定的等腰角色。",
      "tags": [
        "空間與形狀",
        "等腰與等邊三角形",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "ec674b6bd30595b508d13c801b61c36cebe50bb1588e0e3ce6f14ea9187e7213"
    },
    {
      "questionId": "u16-s003-v008",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "isosceles-equilateral",
      "skillOrder": 3,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "某三角形至少有兩邊相等，且又知道三邊長彼此不同。這組條件如何判斷？",
      "givenConditions": [
        "兩句描述指同一個三角形"
      ],
      "target": "檢查分類條件的一致性",
      "choices": [
        "一定是等腰但不是等邊",
        "一定是等邊",
        "可能是任意三角形",
        "互相矛盾，不存在符合的三角形"
      ],
      "answerIndex": 3,
      "independentSolution": "一個條件要求有相等邊，另一條件排除所有相等邊，因此沒有解。",
      "explanation": "『至少兩邊相等』與『三邊彼此不同』不能同時成立。 將第一句翻成存在一對相等邊。 將第二句翻成任兩邊都不相等。 兩者否定彼此。",
      "steps": [
        "將第一句翻成存在一對相等邊。",
        "將第二句翻成任兩邊都不相等。",
        "兩者否定彼此。"
      ],
      "optionAnalysis": [
        {
          "choice": "一定是等腰但不是等邊",
          "truth": false,
          "reason": "三邊彼此不同表示沒有任何兩邊相等。"
        },
        {
          "choice": "一定是等邊",
          "truth": false,
          "reason": "等邊三邊相等，與彼此不同更矛盾。"
        },
        {
          "choice": "可能是任意三角形",
          "truth": false,
          "reason": "邏輯條件本身已矛盾。"
        },
        {
          "choice": "互相矛盾，不存在符合的三角形",
          "truth": true,
          "reason": "『至少兩邊相等』與『三邊彼此不同』不能同時成立。"
        }
      ],
      "misconceptionTarget": "把『至少』與『恰好』或『彼此不同』混淆。",
      "prerequisiteCheck": "能精確理解量詞與分類語句。",
      "estimatedTimeSec": "110",
      "unitAndRoundingCheck": "純邏輯分類，無量值。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "矛盾不依三角形不等式；即使長度未列，條件已無法同時滿足。",
      "difficultyReason": "進階題，考查定義語言一致性。",
      "literacyContextNecessity": null,
      "authoringIntent": "審查分類敘述。",
      "tags": [
        "空間與形狀",
        "等腰與等邊三角形",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "695699a6a5dae076391e6dd1406c5641a4828fd140f715143bdd83e8e0ee5c9a"
    },
    {
      "questionId": "u16-s003-v009",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "isosceles-equilateral",
      "skillOrder": 3,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "三條線段長分別為 x、x、2x−1，且 x 為正整數。若要形成等腰三角形，x 至少是多少？",
      "givenConditions": [
        "兩條 x 已相等",
        "三邊皆須為正"
      ],
      "target": "同時使用等腰分類與三角形不等式",
      "choices": [
        "x=2",
        "x=1",
        "x=3",
        "不存在"
      ],
      "answerIndex": 1,
      "independentSolution": "最小正整數 x=1；三邊 1、1、1 為等邊，且等邊是等腰特殊情形。",
      "explanation": "代 x=1 得 1、1、1，能形成等邊且依本課也屬等腰，所以最小為 1。 檢查 2x−1>0，正整數 x≥1。 三角形不等式 x+x>2x−1 恒成立。 x=1 可形成 1、1、1。",
      "steps": [
        "檢查 2x−1>0，正整數 x≥1。",
        "三角形不等式 x+x>2x−1 恒成立。",
        "x=1 可形成 1、1、1。"
      ],
      "optionAnalysis": [
        {
          "choice": "x=2",
          "truth": false,
          "reason": "可形成 2、2、3，但不是最小，x=1 已可。"
        },
        {
          "choice": "x=1",
          "truth": true,
          "reason": "代 x=1 得 1、1、1，能形成等邊且依本課也屬等腰，所以最小為 1。"
        },
        {
          "choice": "x=3",
          "truth": false,
          "reason": "可形成但不是最小值。"
        },
        {
          "choice": "不存在",
          "truth": false,
          "reason": "x=1 及其後多個正整數均可形成。"
        }
      ],
      "misconceptionTarget": "誤把等腰限定為恰好兩邊相等，排除 x=1。",
      "prerequisiteCheck": "已知等邊包含於等腰並會檢查正長度。",
      "estimatedTimeSec": "140",
      "unitAndRoundingCheck": "x 無單位，結果為整數；無近似。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目採至少兩邊相等，因此 x=1 合法；若要求恰有兩邊相等答案會不同，但題目未如此寫。",
      "difficultyReason": "進階題，結合定義邊界與代數可行性。",
      "literacyContextNecessity": null,
      "authoringIntent": "運用包含關係處理最小值。",
      "tags": [
        "空間與形狀",
        "等腰與等邊三角形",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "16095076cf7871286327a6de931643880fb7116de54e6157c5f37b56517c995e"
    },
    {
      "questionId": "u16-s003-v010",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "isosceles-equilateral",
      "skillOrder": 3,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "（修正版）三條線段長分別為 x、x、2x−1，x 為正整數，且要求『恰有兩邊相等』。x 至少是多少？",
      "givenConditions": [
        "三邊須形成非退化三角形"
      ],
      "target": "處理排除等邊後的最小整數",
      "choices": [
        "x=2",
        "x=1",
        "x=3",
        "x=0"
      ],
      "answerIndex": 0,
      "independentSolution": "x=2 時邊長 2、2、3，符合 2+2>3 且第三邊不同，故為最小。",
      "explanation": "x=1 形成等邊被排除；x=2 得 2、2、3，三角形不等式成立且恰有兩邊相等。 先排除 x=1 的等邊情形。 試下一個正整數 x=2。 2+2>3，且只有兩個 2 相等。",
      "steps": [
        "先排除 x=1 的等邊情形。",
        "試下一個正整數 x=2。",
        "2+2>3，且只有兩個 2 相等。"
      ],
      "optionAnalysis": [
        {
          "choice": "x=2",
          "truth": true,
          "reason": "x=1 形成等邊被排除；x=2 得 2、2、3，三角形不等式成立且恰有兩邊相等。"
        },
        {
          "choice": "x=1",
          "truth": false,
          "reason": "得到 1、1、1，三邊全相等，不符合恰有兩邊。"
        },
        {
          "choice": "x=3",
          "truth": false,
          "reason": "可形成但不是最小。"
        },
        {
          "choice": "x=0",
          "truth": false,
          "reason": "不是正整數且有負邊長。"
        }
      ],
      "misconceptionTarget": "忽略『恰有』造成的分類邊界改變。",
      "prerequisiteCheck": "會區分至少與恰有。",
      "estimatedTimeSec": "130",
      "unitAndRoundingCheck": "x 為正整數，所有邊長無單位且精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "x=1 明確不符恰有兩邊；x=2 首次符合，沒有漏掉介於 1 與 2 的整數。",
      "difficultyReason": "素養式語意題，文字限制直接改變答案。",
      "literacyContextNecessity": "『恰有兩邊』是產品規格式限制，不能刪除。",
      "authoringIntent": "比較規格文字對分類的影響。",
      "tags": [
        "空間與形狀",
        "等腰與等邊三角形",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "8c74f6df760a32a88469417e2f19f9fc957227c49a133ab44575bc4d534aec3c"
    },
    {
      "questionId": "u16-s003-v011",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "isosceles-equilateral",
      "skillOrder": 3,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-018-truss-literacy",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "屋頂支架兩側斜樑 AB、AC 都標示 4.5 公尺。下列哪個結論只靠這項資訊即可成立？",
      "givenConditions": [
        "A 為兩斜樑共同端點",
        "BC 為地面橫樑"
      ],
      "target": "把工程等長資訊轉成三角形分類",
      "choices": [
        "△ABC 是等腰三角形，AB、AC 為腰",
        "∠A 必為 60°",
        "BC 必為 4.5 公尺",
        "AD 必同時是高線與中線"
      ],
      "answerIndex": 0,
      "independentSolution": "只憑 AB=AC 可判定等腰及兩腰角色；角度、底邊與中央線仍需額外資料。",
      "explanation": "兩條斜樑為三角形兩邊且等長，符合等腰定義。 將斜樑視為 AB、AC。 4.5=4.5，兩邊相等。 共同端點 A 為頂角頂點。",
      "steps": [
        "將斜樑視為 AB、AC。",
        "4.5=4.5，兩邊相等。",
        "共同端點 A 為頂角頂點。"
      ],
      "optionAnalysis": [
        {
          "choice": "△ABC 是等腰三角形，AB、AC 為腰",
          "truth": true,
          "reason": "兩條斜樑為三角形兩邊且等長，符合等腰定義。"
        },
        {
          "choice": "∠A 必為 60°",
          "truth": false,
          "reason": "等腰不保證頂角 60°。"
        },
        {
          "choice": "BC 必為 4.5 公尺",
          "truth": false,
          "reason": "兩腰等長不代表底邊也等長。"
        },
        {
          "choice": "AD 必同時是高線與中線",
          "truth": false,
          "reason": "題目未給任何 AD 或其身分。"
        }
      ],
      "misconceptionTarget": "把等腰誤擴張為等邊或自動存在三線合一線段。",
      "prerequisiteCheck": "會將結構元件抽象成三角形邊。",
      "estimatedTimeSec": "100",
      "unitAndRoundingCheck": "兩長度同為公尺且同樣標稱 4.5；本題理想化不討論公差。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "需假設三樑確實形成非退化三角形，屋架情境已包含；不從示意圖推額外性質。",
      "difficultyReason": "素養題，等長規格是分類的必要資訊。",
      "literacyContextNecessity": "斜樑規格直接決定結構類型，情境不可移除。",
      "authoringIntent": "辨認屋架等腰結構。",
      "tags": [
        "空間與形狀",
        "等腰與等邊三角形",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "00c121b0bdd387c5014b536500fbb2cf6159cc7927a76b8786750e68361a6abd"
    },
    {
      "questionId": "u16-s003-v012",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "isosceles-equilateral",
      "skillOrder": 3,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "包裝設計圖中兩條等長折線在 P 點相交，第三邊為 QR。設計師把 QR 稱為『腰』。若 PQ=PR，正確修正是什麼？",
      "givenConditions": [
        "△PQR 中 PQ=PR"
      ],
      "target": "校正等腰三角形部件名稱",
      "choices": [
        "QR 與 PQ 是腰",
        "三邊都稱為腰",
        "PQ、PR 是腰，QR 是底邊",
        "P 點是底角頂點"
      ],
      "answerIndex": 2,
      "independentSolution": "設計師把第三邊誤稱腰；依定義應改為底邊，兩條折線才是腰。",
      "explanation": "相等邊 PQ、PR 為腰，未列入相等對的第三邊 QR 為底邊。 找出等長對 PQ、PR。 共同端點 P 為頂角。 剩餘邊 QR 為底邊。",
      "steps": [
        "找出等長對 PQ、PR。",
        "共同端點 P 為頂角。",
        "剩餘邊 QR 為底邊。"
      ],
      "optionAnalysis": [
        {
          "choice": "QR 與 PQ 是腰",
          "truth": false,
          "reason": "QR 未知等於 PQ。"
        },
        {
          "choice": "三邊都稱為腰",
          "truth": false,
          "reason": "只有在指定等腰描述時兩條相等邊稱腰。"
        },
        {
          "choice": "PQ、PR 是腰，QR 是底邊",
          "truth": true,
          "reason": "相等邊 PQ、PR 為腰，未列入相等對的第三邊 QR 為底邊。"
        },
        {
          "choice": "P 點是底角頂點",
          "truth": false,
          "reason": "P 是兩腰共同端點，為頂角頂點。"
        }
      ],
      "misconceptionTarget": "依紙面下方或上方稱呼，而非相等邊。",
      "prerequisiteCheck": "會由等長資訊辨認部件。",
      "estimatedTimeSec": "95",
      "unitAndRoundingCheck": "無長度數值與單位；稱謂不受比例影響。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "即使圖旋轉，PQ、PR 的角色不變；題目未給三邊全等。",
      "difficultyReason": "素養題，檢查設計文件中的幾何用語。",
      "literacyContextNecessity": "正確名稱影響後續角度與施工說明，情境具有必要性。",
      "authoringIntent": "修正圖面標註。",
      "tags": [
        "空間與形狀",
        "等腰與等邊三角形",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "656519730b925e056816ad0977ef8a9f7f748a0a0756c8f0cddca810081b0c87"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u16-s003-cr001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "isosceles-equilateral",
      "skillOrder": 3,
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "一個等腰三角形的頂角為 36°。求兩個底角，並說明為何兩角相等。",
      "requiredWork": [
        "使用等腰三角形兩腰相等對應到底角相等。",
        "使用三內角和180°。",
        "清楚列式。"
      ],
      "fullCreditSolution": [
        "等腰三角形兩底角相等。",
        "兩底角和=180°−36°=144°。",
        "每個底角=144°÷2=72°。"
      ],
      "alternativeSolutions": [
        "設每個底角為x，列36+2x=180，得x=72。"
      ],
      "reasoningSteps": [
        "等腰三角形兩底角相等。",
        "兩底角和=180°−36°=144°。",
        "每個底角=144°÷2=72°。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "說明等腰底角相等，列出180−36後平分，答案兩角各72°。"
        },
        {
          "score": 2,
          "criteria": "答案正確且有計算，但未說明相等來源；或僅有單一算術筆誤。"
        },
        {
          "score": 1,
          "criteria": "只列36+72+72=180或僅答72°，顯示部分理解。"
        },
        {
          "score": 0,
          "criteria": "把兩底角算成144°、任意拆分或無作答。"
        }
      ],
      "partialCreditRules": [
        "答案正確且有計算，但未說明相等來源；或僅有單一算術筆誤。",
        "只列36+72+72=180或僅答72°，顯示部分理解。"
      ],
      "followThroughPolicy": "若先誤抄頂角但保持『剩餘角和除2』方法，最高2分；若未使用等腰條件，最高1分。",
      "unitAndNotationRules": "角度答案須附°；需明確說『兩個底角各』72°。",
      "answerOnlyPolicy": "只寫72°而無過程，最多1分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "把頂角與底角位置混淆。",
        "180−36後未除2。"
      ],
      "independentReview": {
        "derivedResult": "兩底角各72°。",
        "ambiguity": "題目明定36°為頂角，故不存在36°作底角的另一解讀。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "c13d53a8203f5eb8da9f713a981919255fe61c0cbda861f0b80ff4397bc99e55"
    },
    {
      "questionId": "u16-s003-cr002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "isosceles-equilateral",
      "skillOrder": 3,
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "三角形三邊長為 x+2、x+2、2x−1。若周長為 27，判斷它是等腰或等邊三角形，並求三邊長。",
      "requiredWork": [
        "由周長列方程式。",
        "求x並代回三邊。",
        "檢查正長度與三角形不等式。",
        "依邊長分類。"
      ],
      "fullCreditSolution": [
        "(x+2)+(x+2)+(2x−1)=27，得4x+3=27，x=6。",
        "三邊為8、8、11，且8+8>11。",
        "恰有兩邊相等，所以是等腰但不是等邊三角形。"
      ],
      "alternativeSolutions": [
        "也可先將兩個相等邊合併為2x+4，再解周長。"
      ],
      "reasoningSteps": [
        "(x+2)+(x+2)+(2x−1)=27，得4x+3=27，x=6。",
        "三邊為8、8、11，且8+8>11。",
        "恰有兩邊相等，所以是等腰但不是等邊三角形。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "x=6、三邊8、8、11、可成三角形且分類為等腰非等邊，四部分完整。"
        },
        {
          "score": 2,
          "criteria": "方程與三邊正確，但漏做可行性檢查或分類少寫『非等邊』。"
        },
        {
          "score": 1,
          "criteria": "能正確列周長方程並求出x，後續代入或分類有錯。"
        },
        {
          "score": 0,
          "criteria": "周長式錯、邊長非正仍接受，或無有效解答。"
        }
      ],
      "partialCreditRules": [
        "方程與三邊正確，但漏做可行性檢查或分類少寫『非等邊』。",
        "能正確列周長方程並求出x，後續代入或分類有錯。"
      ],
      "followThroughPolicy": "若解方程單一算術錯誤，後續依錯誤x正確代入、檢查與分類，可給2分；若造成不能成三角形卻未察覺，最多1分。",
      "unitAndNotationRules": "題目未給單位，答案以數值表示；三邊須依原式順序或清楚列集合。",
      "answerOnlyPolicy": "只寫『等腰』或只寫三邊，最多1分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "把2x−1也當成x+2。",
        "認為有兩邊相等就一定等邊。"
      ],
      "independentReview": {
        "derivedResult": "x=6，三邊8、8、11，為等腰非等邊三角形。",
        "ambiguity": "等邊是等腰的特殊情況，但本題三邊不全等，分類表述清楚。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "d65c3b7a6efa955e349bfb2c65374308d65b24bd2b759c5a0ffefbb6d1e88410"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u16-s003-v001",
      "unitId": "u16",
      "skillId": "isosceles-equilateral",
      "contentSha256": "26e3c263ebb575f90d4e0c5db528081ad095dd646b8ef93fb5b208b20ca879cc",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "頂角位於兩腰相交處，AB 與 AC 相交於 A，因此答案是 ∠A。",
      "derivedAnswer": "∠A",
      "storedAnswer": "∠A",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「∠A」；另外三個選項逐一排除：「∠B」：B 只在腰 AB 與底邊 BC 的交點，是底角。；「∠C」：C 是另一個底角。；「無法判斷」：相等邊已足以決定頂角位置。",
        "undefinedSymbol": "題幹符號與詞語已在「等腰與等邊三角形」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "純位置判斷，不含單位或近似。",
        "roundingConflict": "依精確資料獨立推導為「∠A」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "三角形可旋轉，頂角仍由相等邊共同端點唯一決定。",
        "alternateReading": "若採常見誤讀「把圖形上方或任意較大角叫頂角。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，直接辨認等腰元素。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會讀線段端點與角名稱。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「辨認兩腰共同端點的角」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「△ABC 中 AB=AC。下列哪一個角是頂角？」獨立重算：頂角位於兩腰相交處，AB 與 AC 相交於 A，因此答案是 ∠A。 正確選項「∠A」。四選項核對：∠B=假，B 只在腰 AB 與底邊 BC 的交點，是底角。；∠A=真，兩腰 AB、AC 的共同端點是 A，所以 ∠A 為頂角。；∠C=假，C 是另一個底角。；無法判斷=假，相等邊已足以決定頂角位置。 邊界：三角形可旋轉，頂角仍由相等邊共同端點唯一決定。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s003-v002",
      "unitId": "u16",
      "skillId": "isosceles-equilateral",
      "contentSha256": "0f6df2c94ea070746fc59591d22667203ea19a5665251d28a3704be8e1c0b4f4",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "7+7>10，三邊可成三角形；恰有兩條邊長 7，符合等腰定義。",
      "derivedAnswer": "等腰三角形",
      "storedAnswer": "等腰三角形",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「等腰三角形」；另外三個選項逐一排除：「等邊三角形」：只有兩邊 7 相等，第三邊為 10。；「不能形成三角形」：7+7=14>10，可以形成。；「直角三角形」：7²+7²≠10²，且題目主要依相等邊分類。",
        "undefinedSymbol": "題幹符號與詞語已在「等腰與等邊三角形」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "三邊視為同一長度單位，皆為精確值。",
        "roundingConflict": "依精確資料獨立推導為「等腰三角形」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "等腰與直角分類可重疊，但此組並非直角；選項中唯一符合的是等腰。",
        "alternateReading": "若採常見誤讀「只看兩邊相等，未先檢查能否形成三角形。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，分類前加一項可行性檢查。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會比較長度並做簡單加法。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「依邊長分類」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若三角形三邊長為 7、7、10，則此三角形屬於哪一類？」獨立重算：7+7>10，三邊可成三角形；恰有兩條邊長 7，符合等腰定義。 正確選項「等腰三角形」。四選項核對：等邊三角形=假，只有兩邊 7 相等，第三邊為 10。；等腰三角形=真，兩邊同為 7 且三角形不等式成立，所以是等腰三角形。；不能形成三角形=假，7+7=14>10，可以形成。；直角三角形=假，7²+7²≠10²，且題目主要依相等邊分類。 邊界：等腰與直角分類可重疊，但此組並非直角；選項中唯一符合的是等腰。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s003-v003",
      "unitId": "u16",
      "skillId": "isosceles-equilateral",
      "contentSha256": "387fd6c70afb5794ca6418efc08b153a3a83eb459d6a2d928b82426fd665aa0a",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "三邊全相等包含至少兩邊相等的條件，因此等邊是等腰的特殊情形。",
      "derivedAnswer": "是，因為三邊相等當然至少有兩邊相等",
      "storedAnswer": "是，因為三邊相等當然至少有兩邊相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「是，因為三邊相等當然至少有兩邊相等」；另外三個選項逐一排除：「不是，等腰必須恰有兩邊相等」：本課定義是至少兩邊，不排除第三邊也相等。；「只有邊長大於 1 時才是」：分類與邊長大小無關。；「無法判斷，需知道角度」：三邊相等已足夠。",
        "undefinedSymbol": "題幹符號與詞語已在「等腰與等邊三角形」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無數值、單位或近似。",
        "roundingConflict": "依精確資料獨立推導為「是，因為三邊相等當然至少有兩邊相等」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目明示採用的定義，排除教科書措辭差異。",
        "alternateReading": "若採常見誤讀「把『至少兩邊』誤解成『恰好兩邊』。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，理解特殊類型包含關係。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "理解集合包含與定義。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「判斷類別包含關係」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等邊三角形是否也是等腰三角形？」獨立重算：三邊全相等包含至少兩邊相等的條件，因此等邊是等腰的特殊情形。 正確選項「是，因為三邊相等當然至少有兩邊相等」。四選項核對：不是，等腰必須恰有兩邊相等=假，本課定義是至少兩邊，不排除第三邊也相等。；只有邊長大於 1 時才是=假，分類與邊長大小無關。；是，因為三邊相等當然至少有兩邊相等=真，等邊三角形三邊皆相等，任取其中兩邊就符合等腰定義。；無法判斷，需知道角度=假，三邊相等已足夠。 邊界：題目明示採用的定義，排除教科書措辭差異。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s003-v004",
      "unitId": "u16",
      "skillId": "isosceles-equilateral",
      "contentSha256": "184ae736edd7a1d4764f82c0b8f409c148b45458d822aefc1954dd9805a005fa",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "PQ 與 QR 相等且共點 Q，故 PR 是未被選為腰的第三邊，即底邊。",
      "derivedAnswer": "PR",
      "storedAnswer": "PR",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「PR」；另外三個選項逐一排除：「PQ」：PQ 是兩條相等邊之一，為腰。；「QR」：QR 也是腰。；「無法確定」：兩腰已明示，第三邊唯一。",
        "undefinedSymbol": "題幹符號與詞語已在「等腰與等邊三角形」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "純名稱判斷，不涉及單位。",
        "roundingConflict": "依精確資料獨立推導為「PR」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "即使旋轉圖形，PR 的角色不變；沒有長度大小歧義。",
        "alternateReading": "若採常見誤讀「把最下方或最長邊才叫底邊。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，需從任意字母配置辨認底邊。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會列三角形三邊。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「辨認第三邊」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「△PQR 中 PQ=QR。下列哪一條是底邊？」獨立重算：PQ 與 QR 相等且共點 Q，故 PR 是未被選為腰的第三邊，即底邊。 正確選項「PR」。四選項核對：PQ=假，PQ 是兩條相等邊之一，為腰。；QR=假，QR 也是腰。；無法確定=假，兩腰已明示，第三邊唯一。；PR=真，底邊是兩條相等腰以外的第三邊 PR。 邊界：即使旋轉圖形，PR 的角色不變；沒有長度大小歧義。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s003-v005",
      "unitId": "u16",
      "skillId": "isosceles-equilateral",
      "contentSha256": "ce61cf65aca90163aed3c8463584966c91c3827782ba32a8e0e44ac411fa54c5",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "雖有兩個 4 相等，但 4+4=8，只形成退化線段，所以不能稱為等腰三角形。",
      "derivedAnswer": "不能形成一般三角形，因 4+4=8",
      "storedAnswer": "不能形成一般三角形，因 4+4=8",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「不能形成一般三角形，因 4+4=8」；另外三個選項逐一排除：「是等腰三角形，因有兩邊相等」：等號造成退化，三點共線。；「是等邊三角形」：三邊並不全相等。；「是鈍角等腰三角形」：不存在一般三角形，不能再分類角型。",
        "undefinedSymbol": "題幹符號與詞語已在「等腰與等邊三角形」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "同一長度單位且精確，不存在四捨五入使等號改變。",
        "roundingConflict": "依精確資料獨立推導為「不能形成一般三角形，因 4+4=8」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "本課只把非退化三角形納入分類；端點等號明確排除。",
        "alternateReading": "若採常見誤讀「只比較相等邊，忽略三角形存在性。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，結合分類與邊界條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會用任兩邊和大於第三邊。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「判斷相等邊資料是否足以形成圖形」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形邊長為 4、4、8。下列敘述何者正確？」獨立重算：雖有兩個 4 相等，但 4+4=8，只形成退化線段，所以不能稱為等腰三角形。 正確選項「不能形成一般三角形，因 4+4=8」。四選項核對：不能形成一般三角形，因 4+4=8=真，最短兩邊和等於最長邊，只能拉成一直線，不是一般三角形。；是等腰三角形，因有兩邊相等=假，等號造成退化，三點共線。；是等邊三角形=假，三邊並不全相等。；是鈍角等腰三角形=假，不存在一般三角形，不能再分類角型。 邊界：本課只把非退化三角形納入分類；端點等號明確排除。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s003-v006",
      "unitId": "u16",
      "skillId": "isosceles-equilateral",
      "contentSha256": "2539f00b1d4136f001bb4dc0f5dcecc4efceee9c4c728a9548aaa01bc2be22b1",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "兩腰 AB、BC 共同端點為 B；第三邊 AC 是底邊，故底角在 A、C。",
      "derivedAnswer": "∠B 是頂角，∠A、∠C 是底角",
      "storedAnswer": "∠B 是頂角，∠A、∠C 是底角",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「∠B 是頂角，∠A、∠C 是底角」；另外三個選項逐一排除：「∠A 是頂角，∠B、∠C 是底角」：A 不是兩腰共同端點。；「∠C 是頂角，∠A、∠B 是底角」：C 只連一條腰。；「三角形必為等邊，所以三角都是頂角」：只有兩邊有相同刻痕。",
        "undefinedSymbol": "題幹符號與詞語已在「等腰與等邊三角形」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "圖不按比例；只依符號，不含量測與單位。",
        "roundingConflict": "依精確資料獨立推導為「∠B 是頂角，∠A、∠C 是底角」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目明示 AC 無相同刻痕，不能推三邊相等。",
        "alternateReading": "若採常見誤讀「把刻痕當裝飾或按圖面上下判斷。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，從圖形符號建立角色。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會解讀幾何刻痕。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「辨認頂角與兩底角」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「圖上 AB 與 BC 有相同刻痕，AC 無刻痕。下列哪一組名稱正確？」獨立重算：兩腰 AB、BC 共同端點為 B；第三邊 AC 是底邊，故底角在 A、C。 正確選項「∠B 是頂角，∠A、∠C 是底角」。四選項核對：∠A 是頂角，∠B、∠C 是底角=假，A 不是兩腰共同端點。；∠C 是頂角，∠A、∠B 是底角=假，C 只連一條腰。；∠B 是頂角，∠A、∠C 是底角=真，相等邊 AB、BC 在 B 相交，所以 B 是頂角頂點，AC 為底邊。；三角形必為等邊，所以三角都是頂角=假，只有兩邊有相同刻痕。 邊界：題目明示 AC 無相同刻痕，不能推三邊相等。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s003-v007",
      "unitId": "u16",
      "skillId": "isosceles-equilateral",
      "contentSha256": "ec674b6bd30595b508d13c801b61c36cebe50bb1588e0e3ce6f14ea9187e7213",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "三邊皆相等，任意指定一邊作底邊皆可；本題底邊 BC，故腰為 AB、AC。",
      "derivedAnswer": "AB 與 AC",
      "storedAnswer": "AB 與 AC",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「AB 與 AC」；另外三個選項逐一排除：「AB 與 BC」：這會使 AC 成底邊，不符合題目指定。；「AC 與 BC」：這會使 AB 成底邊。；「等邊三角形不能使用腰與底邊名稱」：等邊符合等腰定義，可在指定底邊下選兩腰。",
        "undefinedSymbol": "題幹符號與詞語已在「等腰與等邊三角形」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無單位或近似；名稱由指定角色決定。",
        "roundingConflict": "依精確資料獨立推導為「AB 與 AC」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "等邊三角形可有三種底邊選法，但題目已指定 BC，答案唯一。",
        "alternateReading": "若採常見誤讀「認為等邊沒有任何等腰描述，或忽略題目指定。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，處理特殊類型中的非唯一描述與指定限制。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "理解等邊的對稱與類別包含。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「在特殊情形中選定等腰描述」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「△ABC 為等邊三角形。若把 BC 指定為底邊，哪兩邊可稱為腰？」獨立重算：三邊皆相等，任意指定一邊作底邊皆可；本題底邊 BC，故腰為 AB、AC。 正確選項「AB 與 AC」。四選項核對：AB 與 BC=假，這會使 AC 成底邊，不符合題目指定。；AC 與 BC=假，這會使 AB 成底邊。；等邊三角形不能使用腰與底邊名稱=假，等邊符合等腰定義，可在指定底邊下選兩腰。；AB 與 AC=真，指定 BC 為底邊後，其餘兩邊 AB、AC 由 A 相交，可作為兩腰。 邊界：等邊三角形可有三種底邊選法，但題目已指定 BC，答案唯一。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s003-v008",
      "unitId": "u16",
      "skillId": "isosceles-equilateral",
      "contentSha256": "695699a6a5dae076391e6dd1406c5641a4828fd140f715143bdd83e8e0ee5c9a",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "一個條件要求有相等邊，另一條件排除所有相等邊，因此沒有解。",
      "derivedAnswer": "互相矛盾，不存在符合的三角形",
      "storedAnswer": "互相矛盾，不存在符合的三角形",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「互相矛盾，不存在符合的三角形」；另外三個選項逐一排除：「一定是等腰但不是等邊」：三邊彼此不同表示沒有任何兩邊相等。；「一定是等邊」：等邊三邊相等，與彼此不同更矛盾。；「可能是任意三角形」：邏輯條件本身已矛盾。",
        "undefinedSymbol": "題幹符號與詞語已在「等腰與等邊三角形」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "純邏輯分類，無量值。",
        "roundingConflict": "依精確資料獨立推導為「互相矛盾，不存在符合的三角形」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "矛盾不依三角形不等式；即使長度未列，條件已無法同時滿足。",
        "alternateReading": "若採常見誤讀「把『至少』與『恰好』或『彼此不同』混淆。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，考查定義語言一致性。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "能精確理解量詞與分類語句。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「檢查分類條件的一致性」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某三角形至少有兩邊相等，且又知道三邊長彼此不同。這組條件如何判斷？」獨立重算：一個條件要求有相等邊，另一條件排除所有相等邊，因此沒有解。 正確選項「互相矛盾，不存在符合的三角形」。四選項核對：一定是等腰但不是等邊=假，三邊彼此不同表示沒有任何兩邊相等。；一定是等邊=假，等邊三邊相等，與彼此不同更矛盾。；可能是任意三角形=假，邏輯條件本身已矛盾。；互相矛盾，不存在符合的三角形=真，『至少兩邊相等』與『三邊彼此不同』不能同時成立。 邊界：矛盾不依三角形不等式；即使長度未列，條件已無法同時滿足。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s003-v009",
      "unitId": "u16",
      "skillId": "isosceles-equilateral",
      "contentSha256": "16095076cf7871286327a6de931643880fb7116de54e6157c5f37b56517c995e",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "最小正整數 x=1；三邊 1、1、1 為等邊，且等邊是等腰特殊情形。",
      "derivedAnswer": "x=1",
      "storedAnswer": "x=1",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「x=1」；另外三個選項逐一排除：「x=2」：可形成 2、2、3，但不是最小，x=1 已可。；「x=3」：可形成但不是最小值。；「不存在」：x=1 及其後多個正整數均可形成。",
        "undefinedSymbol": "題幹符號與詞語已在「等腰與等邊三角形」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "x 無單位，結果為整數；無近似。",
        "roundingConflict": "依精確資料獨立推導為「x=1」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目採至少兩邊相等，因此 x=1 合法；若要求恰有兩邊相等答案會不同，但題目未如此寫。",
        "alternateReading": "若採常見誤讀「誤把等腰限定為恰好兩邊相等，排除 x=1。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，結合定義邊界與代數可行性。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "已知等邊包含於等腰並會檢查正長度。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「同時使用等腰分類與三角形不等式」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三條線段長分別為 x、x、2x−1，且 x 為正整數。若要形成等腰三角形，x 至少是多少？」獨立重算：最小正整數 x=1；三邊 1、1、1 為等邊，且等邊是等腰特殊情形。 正確選項「x=1」。四選項核對：x=2=假，可形成 2、2、3，但不是最小，x=1 已可。；x=1=真，代 x=1 得 1、1、1，能形成等邊且依本課也屬等腰，所以最小為 1。；x=3=假，可形成但不是最小值。；不存在=假，x=1 及其後多個正整數均可形成。 邊界：題目採至少兩邊相等，因此 x=1 合法；若要求恰有兩邊相等答案會不同，但題目未如此寫。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s003-v010",
      "unitId": "u16",
      "skillId": "isosceles-equilateral",
      "contentSha256": "8c74f6df760a32a88469417e2f19f9fc957227c49a133ab44575bc4d534aec3c",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "x=2 時邊長 2、2、3，符合 2+2>3 且第三邊不同，故為最小。",
      "derivedAnswer": "x=2",
      "storedAnswer": "x=2",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「x=2」；另外三個選項逐一排除：「x=1」：得到 1、1、1，三邊全相等，不符合恰有兩邊。；「x=3」：可形成但不是最小。；「x=0」：不是正整數且有負邊長。",
        "undefinedSymbol": "題幹符號與詞語已在「等腰與等邊三角形」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "x 為正整數，所有邊長無單位且精確。",
        "roundingConflict": "依精確資料獨立推導為「x=2」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "x=1 明確不符恰有兩邊；x=2 首次符合，沒有漏掉介於 1 與 2 的整數。",
        "alternateReading": "若採常見誤讀「忽略『恰有』造成的分類邊界改變。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養式語意題，文字限制直接改變答案。",
      "literacyContextNecessity": "『恰有兩邊』是產品規格式限制，不能刪除。",
      "prerequisiteCheck": "會區分至少與恰有。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「處理排除等邊後的最小整數」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「（修正版）三條線段長分別為 x、x、2x−1，x 為正整數，且要求『恰有兩邊相等』。x 至少是多少？」獨立重算：x=2 時邊長 2、2、3，符合 2+2>3 且第三邊不同，故為最小。 正確選項「x=2」。四選項核對：x=2=真，x=1 形成等邊被排除；x=2 得 2、2、3，三角形不等式成立且恰有兩邊相等。；x=1=假，得到 1、1、1，三邊全相等，不符合恰有兩邊。；x=3=假，可形成但不是最小。；x=0=假，不是正整數且有負邊長。 邊界：x=1 明確不符恰有兩邊；x=2 首次符合，沒有漏掉介於 1 與 2 的整數。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s003-v011",
      "unitId": "u16",
      "skillId": "isosceles-equilateral",
      "contentSha256": "00c121b0bdd387c5014b536500fbb2cf6159cc7927a76b8786750e68361a6abd",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "只憑 AB=AC 可判定等腰及兩腰角色；角度、底邊與中央線仍需額外資料。",
      "derivedAnswer": "△ABC 是等腰三角形，AB、AC 為腰",
      "storedAnswer": "△ABC 是等腰三角形，AB、AC 為腰",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「△ABC 是等腰三角形，AB、AC 為腰」；另外三個選項逐一排除：「∠A 必為 60°」：等腰不保證頂角 60°。；「BC 必為 4.5 公尺」：兩腰等長不代表底邊也等長。；「AD 必同時是高線與中線」：題目未給任何 AD 或其身分。",
        "undefinedSymbol": "題幹符號與詞語已在「等腰與等邊三角形」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "兩長度同為公尺且同樣標稱 4.5；本題理想化不討論公差。",
        "roundingConflict": "依精確資料獨立推導為「△ABC 是等腰三角形，AB、AC 為腰」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "需假設三樑確實形成非退化三角形，屋架情境已包含；不從示意圖推額外性質。",
        "alternateReading": "若採常見誤讀「把等腰誤擴張為等邊或自動存在三線合一線段。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，等長規格是分類的必要資訊。",
      "literacyContextNecessity": "斜樑規格直接決定結構類型，情境不可移除。",
      "prerequisiteCheck": "會將結構元件抽象成三角形邊。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「把工程等長資訊轉成三角形分類」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「屋頂支架兩側斜樑 AB、AC 都標示 4.5 公尺。下列哪個結論只靠這項資訊即可成立？」獨立重算：只憑 AB=AC 可判定等腰及兩腰角色；角度、底邊與中央線仍需額外資料。 正確選項「△ABC 是等腰三角形，AB、AC 為腰」。四選項核對：△ABC 是等腰三角形，AB、AC 為腰=真，兩條斜樑為三角形兩邊且等長，符合等腰定義。；∠A 必為 60°=假，等腰不保證頂角 60°。；BC 必為 4.5 公尺=假，兩腰等長不代表底邊也等長。；AD 必同時是高線與中線=假，題目未給任何 AD 或其身分。 邊界：需假設三樑確實形成非退化三角形，屋架情境已包含；不從示意圖推額外性質。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s003-v012",
      "unitId": "u16",
      "skillId": "isosceles-equilateral",
      "contentSha256": "656519730b925e056816ad0977ef8a9f7f748a0a0756c8f0cddca810081b0c87",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "設計師把第三邊誤稱腰；依定義應改為底邊，兩條折線才是腰。",
      "derivedAnswer": "PQ、PR 是腰，QR 是底邊",
      "storedAnswer": "PQ、PR 是腰，QR 是底邊",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「PQ、PR 是腰，QR 是底邊」；另外三個選項逐一排除：「QR 與 PQ 是腰」：QR 未知等於 PQ。；「三邊都稱為腰」：只有在指定等腰描述時兩條相等邊稱腰。；「P 點是底角頂點」：P 是兩腰共同端點，為頂角頂點。",
        "undefinedSymbol": "題幹符號與詞語已在「等腰與等邊三角形」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無長度數值與單位；稱謂不受比例影響。",
        "roundingConflict": "依精確資料獨立推導為「PQ、PR 是腰，QR 是底邊」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "即使圖旋轉，PQ、PR 的角色不變；題目未給三邊全等。",
        "alternateReading": "若採常見誤讀「依紙面下方或上方稱呼，而非相等邊。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，檢查設計文件中的幾何用語。",
      "literacyContextNecessity": "正確名稱影響後續角度與施工說明，情境具有必要性。",
      "prerequisiteCheck": "會由等長資訊辨認部件。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「校正等腰三角形部件名稱」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「包裝設計圖中兩條等長折線在 P 點相交，第三邊為 QR。設計師把 QR 稱為『腰』。若 PQ=PR，正確修正是什麼？」獨立重算：設計師把第三邊誤稱腰；依定義應改為底邊，兩條折線才是腰。 正確選項「PQ、PR 是腰，QR 是底邊」。四選項核對：QR 與 PQ 是腰=假，QR 未知等於 PQ。；三邊都稱為腰=假，只有在指定等腰描述時兩條相等邊稱腰。；PQ、PR 是腰，QR 是底邊=真，相等邊 PQ、PR 為腰，未列入相等對的第三邊 QR 為底邊。；P 點是底角頂點=假，P 是兩腰共同端點，為頂角頂點。 邊界：即使圖旋轉，PQ、PR 的角色不變；題目未給三邊全等。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u16-fig-003-isosceles-structure",
      "unitId": "u16",
      "slot": "s003",
      "title": "等腰與等邊三角形的結構比較",
      "altText": "左側等腰三角形只有兩腰同刻痕，右側等邊三角形三邊皆同刻痕；兩圖下方分別標示分類。",
      "svgPath": "figures/u16/u16-fig-003-isosceles-structure.svg",
      "drawingSpec": {
        "canvas": {
          "width": 360,
          "height": 240,
          "viewBox": "0 0 360 240"
        },
        "coordinateSystem": "左上角為(0,0)，x向右、y向下。",
        "geometry": "左圖頂點(35,180)、(105,45)、(175,180)且兩腰單刻痕；右圖(215,180)、(285,59)、(345,180)且三邊單刻痕。",
        "visibleLineRules": "主要邊線使用2.5px黑色實線；輔助線使用1.5px虛線；弧線不得遮住頂點標籤。",
        "hiddenLineRules": "平面圖無隱藏邊；未畫出的延長線不得由視覺自行推定。",
        "labels": "兩分類文字位於各圖正下方，避免與邊線重疊。",
        "tickMarksAndSymbols": "相等邊以同數量短刻痕表示；直角以小正方形；相等角以同型圓弧。",
        "units": "示意圖無長度單位，題目另有數值時以題幹為準。",
        "arrows": "只在延長線或行進方向使用箭頭。",
        "toScale": false,
        "notToScaleWarning": "圖形不按比例，請依標記與題目條件判斷。",
        "mobileLayout": "360×240畫布；最小文字14px；標籤與線段保持至少6px間距。",
        "answerLeakageControl": "圖中只呈現已知結構與定義標記，不標示題目所求數值或正確選項。"
      },
      "svgAssertions": [
        "等腰：兩邊相等",
        "等邊：三邊相等",
        "M35 180",
        "M215 180"
      ],
      "figureReview": {
        "decision": "pass",
        "mobileReadability": "360px寬預覽下，頂點、刻痕、直角符號與延長線箭頭仍可辨識。",
        "answerLeakage": "未顯示任何題目答案；只保留概念所需結構。",
        "geometryCheck": "已依列出的座標逐項核對端點、交點、刻痕與文字位置。",
        "reviewNote": "等腰與等邊三角形的結構比較已逐線檢查：左圖頂點(35,180)、(105,45)、(175,180)且兩腰單刻痕；右圖(215,180)、(285,59)、(345,180)且三邊單刻痕。；標籤配置為兩分類文字位於各圖正下方，避免與邊線重疊。，未依視覺比例暗示未給定量。",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "1883061db438188b8f2c7bb2c4f9e0cd388231d8175e354d23b3d83b97484d61"
    }
  ]
};
export default skillData;
