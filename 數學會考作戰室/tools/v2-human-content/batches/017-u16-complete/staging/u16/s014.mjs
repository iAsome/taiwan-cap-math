// Deterministically emitted from reviewed CHATGPT_HUMAN_AUTHORED_R1 source.
// Do not edit this staging module by hand.
export const skillData={
  "slot": "s014",
  "lecture": {
    "lectureId": "u16-s014-lecture-r1",
    "unitId": "u16",
    "numericUnitId": 16,
    "topicId": "u16-properties",
    "skillId": "triangle-side-angle-relation",
    "skillOrder": 14,
    "originalLockedTitle": "邊角關係",
    "title": "邊角關係：大邊對大角與大角對大邊",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能在同一三角形內比較邊長與其對角大小。",
      "能由邊長排序寫出對角排序，或由角排序寫出對邊排序。",
      "能利用等邊對等角處理相等情形。",
      "能避免把相鄰角或相鄰邊誤認為對應對象。"
    ],
    "prerequisiteBridge": "等腰三角形已建立『等邊對等角、等角對等邊』。本技能將相等關係擴展為大小關係：較長的邊正對較大的角，反之亦然。",
    "prerequisites": [
      {
        "skillId": "angle-sum-exterior",
        "requiredLevel": "能使用先備技能「外角定理」的核心定義與基本運算，並能說明其與本節的連結。"
      }
    ],
    "glossary": [
      {
        "term": "對角",
        "definition": "一條邊不相接的那個頂點角。"
      },
      {
        "term": "對邊",
        "definition": "一個角不相接的那條邊。"
      },
      {
        "term": "大邊對大角",
        "definition": "同一三角形中，較長邊的對角較大。"
      },
      {
        "term": "大角對大邊",
        "definition": "同一三角形中，較大角的對邊較長。"
      },
      {
        "term": "排序",
        "definition": "依大到小或小到大排列三邊或三角。"
      }
    ],
    "notation": [
      {
        "symbol": "BC 對 ∠A",
        "meaning": "邊 BC 不接觸 A，故為 ∠A 的對邊。"
      },
      {
        "symbol": "AB>AC ⇒ ∠C>∠B",
        "meaning": "AB 對 ∠C，AC 對 ∠B。"
      },
      {
        "symbol": "∠A=∠B ⇒ BC=AC",
        "meaning": "等角對等邊。"
      }
    ],
    "conceptNarrative": [
      "在 △ABC 中，邊 BC 的對角是 ∠A，CA 的對角是 ∠B，AB 的對角是 ∠C；先建立這三組配對，排序才不會錯。",
      "若一邊變長而另外兩邊固定，張開的對角會變大；因此長邊與大角一一對應。",
      "三邊大小完全決定三角大小順序；反過來，三角排序也決定三邊排序。",
      "相等情形與等腰性質一致：兩邊相等則其對角相等，兩角相等則其對邊相等。",
      "此性質只在同一個三角形內直接使用；比較不同三角形需額外條件。"
    ],
    "formalDefinitions": [
      {
        "name": "邊角大小定理",
        "statement": "同一三角形中，較大的邊所對的角較大，較大的角所對的邊較大。"
      },
      {
        "name": "等量情形",
        "statement": "同一三角形中，等邊對等角，等角對等邊。"
      }
    ],
    "formulas": [
      {
        "formula": "a>b ⇔ ∠A>∠B",
        "conditions": [
          "a、b 分別為同一三角形中 ∠A、∠B 的對邊"
        ],
        "meaning": "邊與對角大小同序。"
      },
      {
        "formula": "最長邊 ↔ 最大角",
        "conditions": [
          "同一三角形"
        ],
        "meaning": "快速配對極值。"
      }
    ],
    "nonApplicableCases": [
      "不能把邊的相鄰角當成對角。",
      "不能只因一邊在圖上畫得長就判定角較大。",
      "不同三角形的邊角不能直接用此定理跨圖比較。",
      "外角不是三角形的內角排序對象，需先轉成內角。",
      "角度和必須為 180°；若資料矛盾，不能強行排序。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "寫出對應表：BC↔∠A、CA↔∠B、AB↔∠C。",
        "check": "每條邊是否配到不接觸它的角？"
      },
      {
        "step": 2,
        "instruction": "依題目把已知邊或角排序。",
        "check": "要求由大到小還是由小到大？"
      },
      {
        "step": 3,
        "instruction": "把每一項換成其對角或對邊。",
        "check": "排序方向保持不變。"
      },
      {
        "step": 4,
        "instruction": "處理相等資料。",
        "check": "相等邊是否對相等角？"
      },
      {
        "step": 5,
        "instruction": "用三角形內角和或不等式檢查。",
        "check": "最大角是否可能達 180°？最短兩邊是否能形成三角形？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "△ABC 中 AB=5、BC=7、CA=9，將三角由大到小排列。",
        "solutionSteps": [
          "CA 最長，對 ∠B。",
          "BC 次長，對 ∠A。",
          "AB 最短，對 ∠C。"
        ],
        "answer": "∠B>∠A>∠C。"
      },
      {
        "exampleId": "L2",
        "prompt": "∠A=80°、∠B=60°、∠C=40°，排列三邊。",
        "solutionSteps": [
          "最大角 A 對 BC。",
          "B 對 CA，C 對 AB。"
        ],
        "answer": "BC>CA>AB。"
      },
      {
        "exampleId": "L3",
        "prompt": "若 AB=AC，邊角關係給出什麼？",
        "solutionSteps": [
          "AB 對 ∠C，AC 對 ∠B。",
          "相等邊對相等角。"
        ],
        "answer": "∠B=∠C。"
      },
      {
        "exampleId": "L4",
        "prompt": "若 ∠A>∠C，哪一邊較長？",
        "solutionSteps": [
          "∠A 對 BC。",
          "∠C 對 AB。"
        ],
        "answer": "BC>AB。"
      },
      {
        "exampleId": "L5",
        "prompt": "三邊為 x+1、x+3、2x，且 x=4，最大角對哪邊？",
        "solutionSteps": [
          "邊長為 5、7、8。",
          "最大角對長 8 的邊。"
        ],
        "answer": "對應 2x 那條邊的角最大。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "邊 AB 配 ∠A。",
        "why": "以相同字母誤配。",
        "correction": "AB 的對角是不含 A、B 的 ∠C。"
      },
      {
        "mistake": "長邊對小角。",
        "why": "把反比直覺帶入。",
        "correction": "在三角形內是同序：長邊對大角。"
      },
      {
        "mistake": "只看圖形外觀排序。",
        "why": "圖未必按比例。",
        "correction": "使用數值、等號或已證不等式。"
      },
      {
        "mistake": "跨不同三角形比較。",
        "why": "忽略『同一三角形』條件。",
        "correction": "若跨圖需全等、相似或其他定理。"
      },
      {
        "mistake": "等邊卻排成嚴格大小。",
        "why": "未保留等號。",
        "correction": "相等邊對相等角，排序應使用等號。"
      },
      {
        "mistake": "最大角配到相鄰邊。",
        "why": "未畫對邊。",
        "correction": "從角頂點看，對面不接觸的邊才是對邊。"
      }
    ],
    "selfCheck": [
      "我能列出三組邊與對角配對嗎？",
      "排序方向是否和題目一致？",
      "長邊是否對大角？",
      "相等資料是否保留等號？",
      "這些量是否都在同一三角形內？"
    ],
    "summary": [
      "同一三角形中，大邊對大角，大角對大邊。",
      "邊 BC、CA、AB 分別對角 A、B、C。",
      "相等情形就是等腰三角形的等邊對等角。",
      "先配對再排序，不依圖形外觀。"
    ],
    "connections": {
      "previous": "利用外角與內角關係取得角度資訊。",
      "next": [
        "多邊形外角和處理沿邊轉向。",
        "素養題會把邊角排序用在結構安全與測距。"
      ]
    },
    "figureReferences": [
      "u16-fig-014-side-angle"
    ],
    "accessibilityNotes": [
      "u16-fig-014-side-angle 的替代文字與結構描述收錄於本技能 drawing-specs.jsonl。"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u16-s014-v001",
        "u16-s014-v002",
        "u16-s014-v003",
        "u16-s014-v004",
        "u16-s014-v005",
        "u16-s014-v006",
        "u16-s014-v007",
        "u16-s014-v008",
        "u16-s014-v009",
        "u16-s014-v010",
        "u16-s014-v011",
        "u16-s014-v012"
      ],
      "constructedResponseIds": [
        "u16-s014-cr001",
        "u16-s014-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "針對「邊角關係」逐段核對定義、適用條件與反例；重新演算5個例題，確認未使用後續單元才引入的平行線或四邊形定理，並檢查圖形標記不取代文字條件。",
      "reviewVersion": "human-lecture-review-u16-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "8cc77b3cb6d75d349585deba89241fce5d353da71e0868d581eecd4dda240f80"
  },
  "mcQuestions": [
    {
      "questionId": "u16-s014-v001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-side-angle-relation",
      "skillOrder": 14,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-014-side-angle",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "三角形三邊長分別為 5、7、9，最大角的對邊長是多少？",
      "givenConditions": [
        "三邊可形成三角形"
      ],
      "target": "由邊長排序判斷最大角對邊",
      "choices": [
        "5",
        "7",
        "9",
        "21"
      ],
      "answerIndex": 2,
      "independentSolution": "9為最長邊，因此其對角最大。",
      "explanation": "同一三角形中，最大角對最長邊，所以對邊長為9。 比較三邊長。 選最長邊9。",
      "steps": [
        "比較三邊長。",
        "選最長邊9。"
      ],
      "optionAnalysis": [
        {
          "choice": "5",
          "truth": false,
          "reason": "最短邊對最小角。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "中間邊對中間角。"
        },
        {
          "choice": "9",
          "truth": true,
          "reason": "同一三角形中，最大角對最長邊，所以對邊長為9。"
        },
        {
          "choice": "21",
          "truth": false,
          "reason": "把周長當成邊長。"
        }
      ],
      "misconceptionTarget": "把角的大小與相鄰邊混淆。",
      "prerequisiteCheck": "會比較數的大小。",
      "estimatedTimeSec": "60",
      "unitAndRoundingCheck": "邊長同單位且精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目只問對邊長，不需知道角的度數。",
      "difficultyReason": "基礎題，直接使用最大邊對最大角。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認邊角對應。",
      "tags": [
        "空間與形狀",
        "邊角關係",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "ba0993e11a0abc5eaa18899e138a49fe3e2bfc7b7e8ab5094fab170134c69fe3"
    },
    {
      "questionId": "u16-s014-v002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-side-angle-relation",
      "skillOrder": 14,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "在 △ABC 中，AB=8、BC=11、CA=6。下列哪個角最大？",
      "givenConditions": [
        "三邊長單位相同"
      ],
      "target": "依對邊找最大角",
      "choices": [
        "∠B",
        "∠C",
        "三角相等",
        "∠A"
      ],
      "answerIndex": 3,
      "independentSolution": "BC對A且為最長，所以最大角是A。",
      "explanation": "最長邊 BC=11 對著 ∠A，因此 ∠A 最大。 列出各角對邊。 找最長邊BC。",
      "steps": [
        "列出各角對邊。",
        "找最長邊BC。"
      ],
      "optionAnalysis": [
        {
          "choice": "∠B",
          "truth": false,
          "reason": "∠B 對邊 AC=6，反而最小。"
        },
        {
          "choice": "∠C",
          "truth": false,
          "reason": "∠C 對邊 AB=8，不是最長。"
        },
        {
          "choice": "三角相等",
          "truth": false,
          "reason": "三邊不相等。"
        },
        {
          "choice": "∠A",
          "truth": true,
          "reason": "最長邊 BC=11 對著 ∠A，因此 ∠A 最大。"
        }
      ],
      "misconceptionTarget": "把含有最長邊的頂點當成最大角。",
      "prerequisiteCheck": "理解角與對邊。",
      "estimatedTimeSec": "65",
      "unitAndRoundingCheck": "長度精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "頂點與對邊對應明確，只有A符合。",
      "difficultyReason": "基礎題，重點是對邊而非鄰邊。",
      "literacyContextNecessity": null,
      "authoringIntent": "判斷最大角。",
      "tags": [
        "空間與形狀",
        "邊角關係",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "93aa0fca4cb6fe25f02f327a77ad1bdcb4251883521e092269af84c4db93d407"
    },
    {
      "questionId": "u16-s014-v003",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-side-angle-relation",
      "skillOrder": 14,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "在 △PQR 中，∠P=42°、∠Q=71°、∠R=67°。哪一邊最長？",
      "givenConditions": [
        "三角形內角和已符合180°"
      ],
      "target": "由角排序判斷邊長",
      "choices": [
        "PQ",
        "PR",
        "QR",
        "三邊等長"
      ],
      "answerIndex": 1,
      "independentSolution": "71°最大，所以PR最長。",
      "explanation": "最大角是∠Q=71°，其對邊PR最長。 比較三角。 找∠Q的對邊PR。",
      "steps": [
        "比較三角。",
        "找∠Q的對邊PR。"
      ],
      "optionAnalysis": [
        {
          "choice": "PQ",
          "truth": false,
          "reason": "PQ對∠R=67°，不是最大角。"
        },
        {
          "choice": "PR",
          "truth": true,
          "reason": "最大角是∠Q=71°，其對邊PR最長。"
        },
        {
          "choice": "QR",
          "truth": false,
          "reason": "QR對∠P=42°，最短。"
        },
        {
          "choice": "三邊等長",
          "truth": false,
          "reason": "三角不相等。"
        }
      ],
      "misconceptionTarget": "把角的兩條鄰邊之一誤當對邊。",
      "prerequisiteCheck": "能辨認對邊。",
      "estimatedTimeSec": "65",
      "unitAndRoundingCheck": "角度精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "三角和為180°且大小互異。",
      "difficultyReason": "基礎題，由最大角找最長邊。",
      "literacyContextNecessity": null,
      "authoringIntent": "反向運用邊角關係。",
      "tags": [
        "空間與形狀",
        "邊角關係",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "ee39b2f36b4f2ed42479fc2d312ade7cc33f63391724ec16458db0610bd65f6a"
    },
    {
      "questionId": "u16-s014-v004",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-side-angle-relation",
      "skillOrder": 14,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "在 △ABC 中，AB=2x+1、AC=3x−2、BC=x+5，且 x=4。三角由小到大的關係為何？",
      "givenConditions": [
        "代入後三邊可形成三角形"
      ],
      "target": "先代值再依對邊排序角",
      "choices": [
        "∠C＜∠B＜∠A",
        "∠A＜∠C＜∠B",
        "∠A=∠C＜∠B",
        "∠B＜∠A=∠C"
      ],
      "answerIndex": 2,
      "independentSolution": "AB=BC=9<AC=10，故∠A=∠C<∠B。",
      "explanation": "代入得AB=9、AC=10、BC=9；AC最長，所以∠B最大，AB=BC，所以∠C=∠A。 代入三個邊長。 依長邊對大角、等邊對等角排序。",
      "steps": [
        "代入三個邊長。",
        "依長邊對大角、等邊對等角排序。"
      ],
      "optionAnalysis": [
        {
          "choice": "∠C＜∠B＜∠A",
          "truth": false,
          "reason": "忽略AB與BC代入後相等。"
        },
        {
          "choice": "∠A＜∠C＜∠B",
          "truth": false,
          "reason": "相等邊所對角應相等。"
        },
        {
          "choice": "∠A=∠C＜∠B",
          "truth": true,
          "reason": "代入得AB=9、AC=10、BC=9；AC最長，所以∠B最大，AB=BC，所以∠C=∠A。"
        },
        {
          "choice": "∠B＜∠A=∠C",
          "truth": false,
          "reason": "把最長邊所對角排成最小。"
        }
      ],
      "misconceptionTarget": "代入後仍假設三邊互異。",
      "prerequisiteCheck": "會代入代數式。",
      "estimatedTimeSec": "95",
      "unitAndRoundingCheck": "邊長精確且同單位。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "相等關係與嚴格大小均已顯示，答案唯一。",
      "difficultyReason": "標準題，代值後需辨認等腰結構。",
      "literacyContextNecessity": null,
      "authoringIntent": "代數化邊角排序。",
      "tags": [
        "空間與形狀",
        "邊角關係",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "c1feafd41e49faf5efd8f4e738d5945cb69fffdd1779876024545bc3c591fcfc"
    },
    {
      "questionId": "u16-s014-v005",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-side-angle-relation",
      "skillOrder": 14,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "在 △ABC 中，∠A＞∠B，且 AB=7、AC=9。下列哪項一定成立？",
      "givenConditions": [
        "三角形非退化"
      ],
      "target": "把角不等式轉成對邊不等式",
      "choices": [
        "BC＞AC",
        "BC＜AC",
        "AB＞BC",
        "AB=AC"
      ],
      "answerIndex": 0,
      "independentSolution": "A>B即BC>AC，所以必有BC>AC。",
      "explanation": "∠A的對邊BC大於∠B的對邊AC，因此BC>AC=9。 找A與B的對邊。 同向轉換大小關係。",
      "steps": [
        "找A與B的對邊。",
        "同向轉換大小關係。"
      ],
      "optionAnalysis": [
        {
          "choice": "BC＞AC",
          "truth": true,
          "reason": "∠A的對邊BC大於∠B的對邊AC，因此BC>AC=9。"
        },
        {
          "choice": "BC＜AC",
          "truth": false,
          "reason": "與A>B的對邊關係相反。"
        },
        {
          "choice": "AB＞BC",
          "truth": false,
          "reason": "A>B無法推出AB與BC此關係。"
        },
        {
          "choice": "AB=AC",
          "truth": false,
          "reason": "已知7與9不相等。"
        }
      ],
      "misconceptionTarget": "把角的鄰邊拿來比較。",
      "prerequisiteCheck": "理解對邊映射。",
      "estimatedTimeSec": "85",
      "unitAndRoundingCheck": "長度同單位。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "只主張由已知必然推出的關係。",
      "difficultyReason": "標準題，需把符號關係精確映射。",
      "literacyContextNecessity": null,
      "authoringIntent": "由角比較邊。",
      "tags": [
        "空間與形狀",
        "邊角關係",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "e349d47250f4bb604de1ed4aee5d2fc363dc38b520dc642fd05e5cf4c7cb4a69"
    },
    {
      "questionId": "u16-s014-v006",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-side-angle-relation",
      "skillOrder": 14,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "三角形的三邊 a、b、c 分別對角 A、B、C。若 a＜c＜b，下列哪個角度順序正確？",
      "givenConditions": [
        "a、b、c 均為正邊長"
      ],
      "target": "使用一般符號排序",
      "choices": [
        "A＜B＜C",
        "B＜C＜A",
        "A＜C＜B",
        "C＜A＜B"
      ],
      "answerIndex": 2,
      "independentSolution": "a<c<b 對應 A<C<B。",
      "explanation": "同一三角形中邊越長對角越大，順序保持為A<C<B。 逐邊對應角。 保留不等號方向。",
      "steps": [
        "逐邊對應角。",
        "保留不等號方向。"
      ],
      "optionAnalysis": [
        {
          "choice": "A＜B＜C",
          "truth": false,
          "reason": "把b、c順序抄錯。"
        },
        {
          "choice": "B＜C＜A",
          "truth": false,
          "reason": "反向排序。"
        },
        {
          "choice": "A＜C＜B",
          "truth": true,
          "reason": "同一三角形中邊越長對角越大，順序保持為A<C<B。"
        },
        {
          "choice": "C＜A＜B",
          "truth": false,
          "reason": "交換a與c的對角。"
        }
      ],
      "misconceptionTarget": "以字母表順序取代大小關係。",
      "prerequisiteCheck": "認識標準對邊記號。",
      "estimatedTimeSec": "80",
      "unitAndRoundingCheck": "無單位換算。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "三邊互異，角序唯一。",
      "difficultyReason": "標準題，抽象符號而非具體數值。",
      "literacyContextNecessity": null,
      "authoringIntent": "一般化邊角關係。",
      "tags": [
        "空間與形狀",
        "邊角關係",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "498735e9aeace3e92a4ee4ff614c52fc00d0c939d3f71834fa828125435189e9"
    },
    {
      "questionId": "u16-s014-v007",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-side-angle-relation",
      "skillOrder": 14,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "在 △ABC 中，AB=13、AC=10，且 ∠B＞∠C。邊 BC 的整數長度可能有幾種？",
      "givenConditions": [
        "BC為正整數",
        "三邊形成非退化三角形"
      ],
      "target": "先檢查固定邊與角序是否相容",
      "choices": [
        "3",
        "0",
        "9",
        "12"
      ],
      "answerIndex": 1,
      "independentSolution": "固定兩邊已迫使B<C，故整數BC的可能數為0。",
      "explanation": "∠B的對邊AC=10，∠C的對邊AB=13；必有∠B<∠C，與題設相反，所以沒有任何BC。 找B、C的對邊。 由10<13推出B<C。 判定條件矛盾。",
      "steps": [
        "找B、C的對邊。",
        "由10<13推出B<C。",
        "判定條件矛盾。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "誤以為BC只要大於10即可。"
        },
        {
          "choice": "0",
          "truth": true,
          "reason": "∠B的對邊AC=10，∠C的對邊AB=13；必有∠B<∠C，與題設相反，所以沒有任何BC。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "只用三角形不等式計數。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "把不可能的角序忽略後列舉。"
        }
      ],
      "misconceptionTarget": "看到未知邊就急著列三角形不等式。",
      "prerequisiteCheck": "已會邊角對應。",
      "estimatedTimeSec": "110",
      "unitAndRoundingCheck": "長度整數條件不影響矛盾判定。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "矛盾與BC取值無關，0種唯一。",
      "difficultyReason": "進階題，以無關未知量測試先做一致性檢查。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認不可能條件。",
      "tags": [
        "空間與形狀",
        "邊角關係",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "553562f8cf8d763a5fac0009a5fb92de79261e7dc7e00ce2326daddc1e344e13"
    },
    {
      "questionId": "u16-s014-v008",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-side-angle-relation",
      "skillOrder": 14,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "△ABC 中，∠A、∠B、∠C 的比為 2：3：4。下列邊長關係何者正確？",
      "givenConditions": [
        "三角形內角皆為正"
      ],
      "target": "由角比判斷邊序",
      "choices": [
        "AB＜CA＜BC",
        "BC＜AB＜CA",
        "CA＜BC＜AB",
        "BC＜CA＜AB"
      ],
      "answerIndex": 3,
      "independentSolution": "角序2<3<4，故邊序BC<CA<AB。",
      "explanation": "A<B<C，所以其對邊 BC<CA<AB。 由正比例判斷A<B<C。 映射到對邊a=BC、b=CA、c=AB。",
      "steps": [
        "由正比例判斷A<B<C。",
        "映射到對邊a=BC、b=CA、c=AB。"
      ],
      "optionAnalysis": [
        {
          "choice": "AB＜CA＜BC",
          "truth": false,
          "reason": "完全反向。"
        },
        {
          "choice": "BC＜AB＜CA",
          "truth": false,
          "reason": "把B、C對邊交換。"
        },
        {
          "choice": "CA＜BC＜AB",
          "truth": false,
          "reason": "把最小兩邊交換。"
        },
        {
          "choice": "BC＜CA＜AB",
          "truth": true,
          "reason": "A<B<C，所以其對邊 BC<CA<AB。"
        }
      ],
      "misconceptionTarget": "角標與邊的字母對應混淆。",
      "prerequisiteCheck": "會比較正比。",
      "estimatedTimeSec": "105",
      "unitAndRoundingCheck": "不需實際算角度。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "比值正且總和可縮放為180°，角序唯一。",
      "difficultyReason": "進階題，需用標準對邊記號轉換。",
      "literacyContextNecessity": null,
      "authoringIntent": "比值與邊序整合。",
      "tags": [
        "空間與形狀",
        "邊角關係",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "418a9271882c61396a51e6c0c09743769a4d4212d0220fa5acaa64dcabeea5e8"
    },
    {
      "questionId": "u16-s014-v009",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-side-angle-relation",
      "skillOrder": 14,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "某三角形中，最長邊長為 12，另外兩邊為 9、x；且 x 所對的角是唯一最小角。若 x 為正整數，x 可能有幾個值？",
      "givenConditions": [
        "12為唯一最長邊",
        "x所對角為唯一最小角",
        "三角形非退化"
      ],
      "target": "交集邊角排序與三角形不等式",
      "choices": [
        "5",
        "3",
        "8",
        "6"
      ],
      "answerIndex": 0,
      "independentSolution": "3<x<9，正整數有5個。",
      "explanation": "x為唯一最短邊，所以x<9；又9+x>12，所以x>3。整數4、5、6、7、8共5個。 由最小角得x<9。 由不等式得x>3。 列出4至8。",
      "steps": [
        "由最小角得x<9。",
        "由不等式得x>3。",
        "列出4至8。"
      ],
      "optionAnalysis": [
        {
          "choice": "5",
          "truth": true,
          "reason": "x為唯一最短邊，所以x<9；又9+x>12，所以x>3。整數4、5、6、7、8共5個。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "只記得下界3，未列整數。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "把x=1到8全算入。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "把x=9也納入，但此時最小角不唯一。"
        }
      ],
      "misconceptionTarget": "把『唯一最小』忽略而納入相等邊。",
      "prerequisiteCheck": "會解嚴格不等式。",
      "estimatedTimeSec": "125",
      "unitAndRoundingCheck": "長度同單位且x為正整數。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "端點3、9均不可取，列舉完整。",
      "difficultyReason": "進階題，需取兩個嚴格條件的交集。",
      "literacyContextNecessity": null,
      "authoringIntent": "結合角序與可成三角形範圍。",
      "tags": [
        "空間與形狀",
        "邊角關係",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "055fe9303e8f97705d680e14619b2388913f216e6ff487bfbce037f1caf4f1d1"
    },
    {
      "questionId": "u16-s014-v010",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-side-angle-relation",
      "skillOrder": 14,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-014-side-angle",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "吊橋的三條拉索在平面圖上形成三角形，長度依序為 18 m、24 m、30 m。哪一條拉索所對的開口角最大？",
      "givenConditions": [
        "忽略拉索粗細",
        "三長度構成三角形"
      ],
      "target": "從工程長度判斷角度風險",
      "choices": [
        "30 m 拉索",
        "18 m 拉索",
        "24 m 拉索",
        "三個角一樣大"
      ],
      "answerIndex": 0,
      "independentSolution": "同一三角形內，30 m邊對最大角。",
      "explanation": "30 m 是最長邊，所對開口角最大。 比較拉索長度。 把最長拉索對應到其相對頂點。",
      "steps": [
        "比較拉索長度。",
        "把最長拉索對應到其相對頂點。"
      ],
      "optionAnalysis": [
        {
          "choice": "30 m 拉索",
          "truth": true,
          "reason": "30 m 是最長邊，所對開口角最大。"
        },
        {
          "choice": "18 m 拉索",
          "truth": false,
          "reason": "最短邊對最小角。"
        },
        {
          "choice": "24 m 拉索",
          "truth": false,
          "reason": "中間邊對中間角。"
        },
        {
          "choice": "三個角一樣大",
          "truth": false,
          "reason": "三邊不等長。"
        }
      ],
      "misconceptionTarget": "以拉索所在端點當成其對角。",
      "prerequisiteCheck": "會辨識平面三角形。",
      "estimatedTimeSec": "90",
      "unitAndRoundingCheck": "單位一致。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "只比較大小，不需依圖比例量角。",
      "difficultyReason": "素養題，工程圖需以邊長資料判斷開口角。",
      "literacyContextNecessity": "拉索長度是可量測資料，而工程關注的是對面開口角；情境建立兩種量之間的轉換。",
      "authoringIntent": "判斷支架開口。",
      "tags": [
        "空間與形狀",
        "邊角關係",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "ebac91961057812e0c8adb0e1d9ee66c28eb51ae02d2e9eac878914421d5efa7"
    },
    {
      "questionId": "u16-s014-v011",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-side-angle-relation",
      "skillOrder": 14,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "登山路線三個基地 A、B、C 形成三角形。已知 AB=4.8 km、BC=6.1 km、CA=5.5 km。若救援中心位於最大內角的頂點，應設在哪一點？",
      "givenConditions": [
        "道路距離以直線模型處理"
      ],
      "target": "由最長路段找其對角頂點",
      "choices": [
        "B",
        "A",
        "C",
        "任一點皆可"
      ],
      "answerIndex": 1,
      "independentSolution": "6.1最大且為BC，所以最大角在A。",
      "explanation": "最長邊BC=6.1 km 對著A，因此A為最大內角頂點。 比較三段距離。 找BC的對面頂點A。",
      "steps": [
        "比較三段距離。",
        "找BC的對面頂點A。"
      ],
      "optionAnalysis": [
        {
          "choice": "B",
          "truth": false,
          "reason": "B的對邊CA=5.5，不最長。"
        },
        {
          "choice": "A",
          "truth": true,
          "reason": "最長邊BC=6.1 km 對著A，因此A為最大內角頂點。"
        },
        {
          "choice": "C",
          "truth": false,
          "reason": "C的對邊AB=4.8，最短。"
        },
        {
          "choice": "任一點皆可",
          "truth": false,
          "reason": "三邊不相等，最大角唯一。"
        }
      ],
      "misconceptionTarget": "把最長路段的端點當答案。",
      "prerequisiteCheck": "能從地名辨認對面頂點。",
      "estimatedTimeSec": "100",
      "unitAndRoundingCheck": "距離同為km且不需四捨五入。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "資料大小互異，最大角唯一。",
      "difficultyReason": "素養題，需把路線資料轉成幾何對邊。",
      "literacyContextNecessity": "基地名稱與路段端點是判定『對面頂點』的必要資訊，不能只保留三個裸數。",
      "authoringIntent": "選救援中心位置。",
      "tags": [
        "空間與形狀",
        "邊角關係",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "2957e61b0929bfb9c19eac23357aebc3148a9984c5810646b83a74783b7c39ea"
    },
    {
      "questionId": "u16-s014-v012",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-side-angle-relation",
      "skillOrder": 14,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "三角形遮雨棚的三個角中，設計師要求角 X 最大。量得 X 的對邊為 2.4 m，另兩邊為 2.1 m 與 2.6 m。對此設計應如何判斷？",
      "givenConditions": [
        "量測值視為精確到題示位數"
      ],
      "target": "以邊角關係查核設計要求",
      "choices": [
        "符合，因2.4 m大於2.1 m",
        "符合，角X名稱已標為最大",
        "無法判斷，必須量三個角",
        "不符合，2.6 m 的對角才最大"
      ],
      "answerIndex": 3,
      "independentSolution": "因2.4<2.6，X不可能是最大角。",
      "explanation": "2.6 m是最長邊，其對角最大；X對邊2.4 m不是最長。 比較三邊。 檢查X的對邊是否最長。",
      "steps": [
        "比較三邊。",
        "檢查X的對邊是否最長。"
      ],
      "optionAnalysis": [
        {
          "choice": "符合，因2.4 m大於2.1 m",
          "truth": false,
          "reason": "忽略尚有2.6 m。"
        },
        {
          "choice": "符合，角X名稱已標為最大",
          "truth": false,
          "reason": "標示不能取代邊長關係。"
        },
        {
          "choice": "無法判斷，必須量三個角",
          "truth": false,
          "reason": "由三邊排序即可判斷角序。"
        },
        {
          "choice": "不符合，2.6 m 的對角才最大",
          "truth": true,
          "reason": "2.6 m是最長邊，其對角最大；X對邊2.4 m不是最長。"
        }
      ],
      "misconceptionTarget": "只與一條邊比較而忽略第三邊。",
      "prerequisiteCheck": "理解最長邊對最大角。",
      "estimatedTimeSec": "110",
      "unitAndRoundingCheck": "單位皆m；給定精確值差0.2 m。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "三長度可成三角形且最長邊唯一。",
      "difficultyReason": "素養題，要求依量測數據驗收設計。",
      "literacyContextNecessity": "『設計要求』與『實測邊長』的衝突是任務核心，情境不能刪除而不改變審核意義。",
      "authoringIntent": "查核遮雨棚規格。",
      "tags": [
        "空間與形狀",
        "邊角關係",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "f14ee28e174a8b2b3356388298123b6c3e7754001098daa40de7b14d0d24f835"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u16-s014-cr001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-side-angle-relation",
      "skillOrder": 14,
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-014-side-angle",
      "prompt": "△ABC 中，AB=9 cm、BC=12 cm、CA=15 cm。將三個內角由小到大排列，並逐一寫出角與對邊的配對。",
      "requiredWork": [
        "列出A↔BC、B↔CA、C↔AB。",
        "比較9、12、15。",
        "排列角。"
      ],
      "fullCreditSolution": [
        "∠A對BC=12，∠B對CA=15，∠C對AB=9。",
        "因9<12<15，所以∠C<∠A<∠B。"
      ],
      "alternativeSolutions": [
        "可先按邊AB<BC<CA，再把每邊替換成其對角。"
      ],
      "reasoningSteps": [
        "∠A對BC=12，∠B對CA=15，∠C對AB=9。",
        "因9<12<15，所以∠C<∠A<∠B。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "三組對邊配對正確，角序∠C<∠A<∠B正確。"
        },
        {
          "score": 2,
          "criteria": "角序正確但配對說明漏一組，或配對全對而序列有單一抄寫錯。"
        },
        {
          "score": 1,
          "criteria": "知道最長邊對最大角並辨認至少最大角B。"
        },
        {
          "score": 0,
          "criteria": "把端點角當對角、完全反向或無作答。"
        }
      ],
      "partialCreditRules": [
        "角序正確但配對說明漏一組，或配對全對而序列有單一抄寫錯。",
        "知道最長邊對最大角並辨認至少最大角B。"
      ],
      "followThroughPolicy": "若只錯一個邊長抄寫但依其資料一致排序，最高2分。",
      "unitAndNotationRules": "長度cm；角序使用嚴格不等號。",
      "answerOnlyPolicy": "只寫最大角B最多1分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "把AB的端點A或B當成其對角。",
        "邊序直接照抄成同字母角序。"
      ],
      "independentReview": {
        "derivedResult": "∠C<∠A<∠B。",
        "ambiguity": "三邊互異，因此三角大小也互異。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "9dd915138cd90b13f2bbab01360eec6f3f557dddef488cebf8b16231d45ab0b4"
    },
    {
      "questionId": "u16-s014-cr002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-side-angle-relation",
      "skillOrder": 14,
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "某三角形中，兩角 A、B 滿足 A>B，且其對邊長分別為 a=2x+3、b=5x−6。若x為整數且三邊均為正，求由A>B可推出的x範圍；說明是否能只靠這項資料決定x。",
      "requiredWork": [
        "把A>B轉成a>b。",
        "解2x+3>5x−6。",
        "處理邊長正值。",
        "說明不唯一。"
      ],
      "fullCreditSolution": [
        "A>B所以a>b：2x+3>5x−6，得9>3x，即x<3。",
        "b=5x−6>0，得x>6/5；x為整數，所以x=2。",
        "在已給正值與整數條件下其實可唯一決定x=2；仍需第三邊資料才能判定完整三角形是否存在。"
      ],
      "alternativeSolutions": [
        "也可先列整數使b正：x≥2，再與x<3交集。"
      ],
      "reasoningSteps": [
        "A>B所以a>b：2x+3>5x−6，得9>3x，即x<3。",
        "b=5x−6>0，得x>6/5；x為整數，所以x=2。",
        "在已給正值與整數條件下其實可唯一決定x=2；仍需第三邊資料才能判定完整三角形是否存在。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確轉換與解不等式，結合正邊和整數得x=2，並指出第三邊仍影響三角形存在。"
        },
        {
          "score": 2,
          "criteria": "得x=2但漏說第三邊存在性，或範圍方法正確有單一端點表述錯。"
        },
        {
          "score": 1,
          "criteria": "只解出x<3或只用正值列x≥2。"
        },
        {
          "score": 0,
          "criteria": "不等號方向反轉、認為A>B推a<b，或無有效作答。"
        }
      ],
      "partialCreditRules": [
        "得x=2但漏說第三邊存在性，或範圍方法正確有單一端點表述錯。",
        "只解出x<3或只用正值列x≥2。"
      ],
      "followThroughPolicy": "若不等式算術錯但邊角方向與正值交集方法正確，最高2分。",
      "unitAndNotationRules": "x無單位；邊長式需大於0；整數條件不可漏。",
      "answerOnlyPolicy": "只寫x=2無推理，最多1分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "忘記b必為正。",
        "錯說有第三邊前完全不能得到x。"
      ],
      "independentReview": {
        "derivedResult": "由條件得整數x=2；但第三邊未知，尚不能確認實際三角形存在。",
        "ambiguity": "題目將『三邊均為正』視為含a、b正值，不代表已自動滿足三角形不等式。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "3bca168d04b7cc9549e7912977151b7f9ea0ad7e5a71e5223c2c774ac4f2045f"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u16-s014-v001",
      "unitId": "u16",
      "skillId": "triangle-side-angle-relation",
      "contentSha256": "ba0993e11a0abc5eaa18899e138a49fe3e2bfc7b7e8ab5094fab170134c69fe3",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "9為最長邊，因此其對角最大。",
      "derivedAnswer": "9",
      "storedAnswer": "9",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「9」；另外三個選項逐一排除：「5」：最短邊對最小角。；「7」：中間邊對中間角。；「21」：把周長當成邊長。",
        "undefinedSymbol": "題幹符號與詞語已在「邊角關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "邊長同單位且精確。",
        "roundingConflict": "依精確資料獨立推導為「9」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目只問對邊長，不需知道角的度數。",
        "alternateReading": "若採常見誤讀「把角的大小與相鄰邊混淆。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，直接使用最大邊對最大角。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會比較數的大小。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「由邊長排序判斷最大角對邊」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形三邊長分別為 5、7、9，最大角的對邊長是多少？」獨立重算：9為最長邊，因此其對角最大。 正確選項「9」。四選項核對：5=假，最短邊對最小角。；7=假，中間邊對中間角。；9=真，同一三角形中，最大角對最長邊，所以對邊長為9。；21=假，把周長當成邊長。 邊界：題目只問對邊長，不需知道角的度數。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s014-v002",
      "unitId": "u16",
      "skillId": "triangle-side-angle-relation",
      "contentSha256": "93aa0fca4cb6fe25f02f327a77ad1bdcb4251883521e092269af84c4db93d407",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "BC對A且為最長，所以最大角是A。",
      "derivedAnswer": "∠A",
      "storedAnswer": "∠A",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「∠A」；另外三個選項逐一排除：「∠B」：∠B 對邊 AC=6，反而最小。；「∠C」：∠C 對邊 AB=8，不是最長。；「三角相等」：三邊不相等。",
        "undefinedSymbol": "題幹符號與詞語已在「邊角關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "長度精確。",
        "roundingConflict": "依精確資料獨立推導為「∠A」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "頂點與對邊對應明確，只有A符合。",
        "alternateReading": "若採常見誤讀「把含有最長邊的頂點當成最大角。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，重點是對邊而非鄰邊。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "理解角與對邊。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「依對邊找最大角」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「在 △ABC 中，AB=8、BC=11、CA=6。下列哪個角最大？」獨立重算：BC對A且為最長，所以最大角是A。 正確選項「∠A」。四選項核對：∠B=假，∠B 對邊 AC=6，反而最小。；∠C=假，∠C 對邊 AB=8，不是最長。；三角相等=假，三邊不相等。；∠A=真，最長邊 BC=11 對著 ∠A，因此 ∠A 最大。 邊界：頂點與對邊對應明確，只有A符合。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s014-v003",
      "unitId": "u16",
      "skillId": "triangle-side-angle-relation",
      "contentSha256": "ee39b2f36b4f2ed42479fc2d312ade7cc33f63391724ec16458db0610bd65f6a",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "71°最大，所以PR最長。",
      "derivedAnswer": "PR",
      "storedAnswer": "PR",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「PR」；另外三個選項逐一排除：「PQ」：PQ對∠R=67°，不是最大角。；「QR」：QR對∠P=42°，最短。；「三邊等長」：三角不相等。",
        "undefinedSymbol": "題幹符號與詞語已在「邊角關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度精確。",
        "roundingConflict": "依精確資料獨立推導為「PR」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "三角和為180°且大小互異。",
        "alternateReading": "若採常見誤讀「把角的兩條鄰邊之一誤當對邊。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，由最大角找最長邊。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "能辨認對邊。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「由角排序判斷邊長」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「在 △PQR 中，∠P=42°、∠Q=71°、∠R=67°。哪一邊最長？」獨立重算：71°最大，所以PR最長。 正確選項「PR」。四選項核對：PQ=假，PQ對∠R=67°，不是最大角。；PR=真，最大角是∠Q=71°，其對邊PR最長。；QR=假，QR對∠P=42°，最短。；三邊等長=假，三角不相等。 邊界：三角和為180°且大小互異。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s014-v004",
      "unitId": "u16",
      "skillId": "triangle-side-angle-relation",
      "contentSha256": "c1feafd41e49faf5efd8f4e738d5945cb69fffdd1779876024545bc3c591fcfc",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "AB=BC=9<AC=10，故∠A=∠C<∠B。",
      "derivedAnswer": "∠A=∠C＜∠B",
      "storedAnswer": "∠A=∠C＜∠B",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「∠A=∠C＜∠B」；另外三個選項逐一排除：「∠C＜∠B＜∠A」：忽略AB與BC代入後相等。；「∠A＜∠C＜∠B」：相等邊所對角應相等。；「∠B＜∠A=∠C」：把最長邊所對角排成最小。",
        "undefinedSymbol": "題幹符號與詞語已在「邊角關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "邊長精確且同單位。",
        "roundingConflict": "依精確資料獨立推導為「∠A=∠C＜∠B」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "相等關係與嚴格大小均已顯示，答案唯一。",
        "alternateReading": "若採常見誤讀「代入後仍假設三邊互異。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，代值後需辨認等腰結構。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會代入代數式。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「先代值再依對邊排序角」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「在 △ABC 中，AB=2x+1、AC=3x−2、BC=x+5，且 x=4。三角由小到大的關係為何？」獨立重算：AB=BC=9<AC=10，故∠A=∠C<∠B。 正確選項「∠A=∠C＜∠B」。四選項核對：∠C＜∠B＜∠A=假，忽略AB與BC代入後相等。；∠A＜∠C＜∠B=假，相等邊所對角應相等。；∠A=∠C＜∠B=真，代入得AB=9、AC=10、BC=9；AC最長，所以∠B最大，AB=BC，所以∠C=∠A。；∠B＜∠A=∠C=假，把最長邊所對角排成最小。 邊界：相等關係與嚴格大小均已顯示，答案唯一。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s014-v005",
      "unitId": "u16",
      "skillId": "triangle-side-angle-relation",
      "contentSha256": "e349d47250f4bb604de1ed4aee5d2fc363dc38b520dc642fd05e5cf4c7cb4a69",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "A>B即BC>AC，所以必有BC>AC。",
      "derivedAnswer": "BC＞AC",
      "storedAnswer": "BC＞AC",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「BC＞AC」；另外三個選項逐一排除：「BC＜AC」：與A>B的對邊關係相反。；「AB＞BC」：A>B無法推出AB與BC此關係。；「AB=AC」：已知7與9不相等。",
        "undefinedSymbol": "題幹符號與詞語已在「邊角關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "長度同單位。",
        "roundingConflict": "依精確資料獨立推導為「BC＞AC」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "只主張由已知必然推出的關係。",
        "alternateReading": "若採常見誤讀「把角的鄰邊拿來比較。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，需把符號關係精確映射。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "理解對邊映射。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「把角不等式轉成對邊不等式」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「在 △ABC 中，∠A＞∠B，且 AB=7、AC=9。下列哪項一定成立？」獨立重算：A>B即BC>AC，所以必有BC>AC。 正確選項「BC＞AC」。四選項核對：BC＞AC=真，∠A的對邊BC大於∠B的對邊AC，因此BC>AC=9。；BC＜AC=假，與A>B的對邊關係相反。；AB＞BC=假，A>B無法推出AB與BC此關係。；AB=AC=假，已知7與9不相等。 邊界：只主張由已知必然推出的關係。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s014-v006",
      "unitId": "u16",
      "skillId": "triangle-side-angle-relation",
      "contentSha256": "498735e9aeace3e92a4ee4ff614c52fc00d0c939d3f71834fa828125435189e9",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "a<c<b 對應 A<C<B。",
      "derivedAnswer": "A＜C＜B",
      "storedAnswer": "A＜C＜B",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「A＜C＜B」；另外三個選項逐一排除：「A＜B＜C」：把b、c順序抄錯。；「B＜C＜A」：反向排序。；「C＜A＜B」：交換a與c的對角。",
        "undefinedSymbol": "題幹符號與詞語已在「邊角關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無單位換算。",
        "roundingConflict": "依精確資料獨立推導為「A＜C＜B」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "三邊互異，角序唯一。",
        "alternateReading": "若採常見誤讀「以字母表順序取代大小關係。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，抽象符號而非具體數值。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "認識標準對邊記號。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「使用一般符號排序」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形的三邊 a、b、c 分別對角 A、B、C。若 a＜c＜b，下列哪個角度順序正確？」獨立重算：a<c<b 對應 A<C<B。 正確選項「A＜C＜B」。四選項核對：A＜B＜C=假，把b、c順序抄錯。；B＜C＜A=假，反向排序。；A＜C＜B=真，同一三角形中邊越長對角越大，順序保持為A<C<B。；C＜A＜B=假，交換a與c的對角。 邊界：三邊互異，角序唯一。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s014-v007",
      "unitId": "u16",
      "skillId": "triangle-side-angle-relation",
      "contentSha256": "553562f8cf8d763a5fac0009a5fb92de79261e7dc7e00ce2326daddc1e344e13",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "固定兩邊已迫使B<C，故整數BC的可能數為0。",
      "derivedAnswer": "0",
      "storedAnswer": "0",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「0」；另外三個選項逐一排除：「3」：誤以為BC只要大於10即可。；「9」：只用三角形不等式計數。；「12」：把不可能的角序忽略後列舉。",
        "undefinedSymbol": "題幹符號與詞語已在「邊角關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "長度整數條件不影響矛盾判定。",
        "roundingConflict": "依精確資料獨立推導為「0」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "矛盾與BC取值無關，0種唯一。",
        "alternateReading": "若採常見誤讀「看到未知邊就急著列三角形不等式。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，以無關未知量測試先做一致性檢查。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "已會邊角對應。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「先檢查固定邊與角序是否相容」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「在 △ABC 中，AB=13、AC=10，且 ∠B＞∠C。邊 BC 的整數長度可能有幾種？」獨立重算：固定兩邊已迫使B<C，故整數BC的可能數為0。 正確選項「0」。四選項核對：3=假，誤以為BC只要大於10即可。；0=真，∠B的對邊AC=10，∠C的對邊AB=13；必有∠B<∠C，與題設相反，所以沒有任何BC。；9=假，只用三角形不等式計數。；12=假，把不可能的角序忽略後列舉。 邊界：矛盾與BC取值無關，0種唯一。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s014-v008",
      "unitId": "u16",
      "skillId": "triangle-side-angle-relation",
      "contentSha256": "418a9271882c61396a51e6c0c09743769a4d4212d0220fa5acaa64dcabeea5e8",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "角序2<3<4，故邊序BC<CA<AB。",
      "derivedAnswer": "BC＜CA＜AB",
      "storedAnswer": "BC＜CA＜AB",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「BC＜CA＜AB」；另外三個選項逐一排除：「AB＜CA＜BC」：完全反向。；「BC＜AB＜CA」：把B、C對邊交換。；「CA＜BC＜AB」：把最小兩邊交換。",
        "undefinedSymbol": "題幹符號與詞語已在「邊角關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "不需實際算角度。",
        "roundingConflict": "依精確資料獨立推導為「BC＜CA＜AB」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "比值正且總和可縮放為180°，角序唯一。",
        "alternateReading": "若採常見誤讀「角標與邊的字母對應混淆。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，需用標準對邊記號轉換。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會比較正比。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「由角比判斷邊序」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「△ABC 中，∠A、∠B、∠C 的比為 2：3：4。下列邊長關係何者正確？」獨立重算：角序2<3<4，故邊序BC<CA<AB。 正確選項「BC＜CA＜AB」。四選項核對：AB＜CA＜BC=假，完全反向。；BC＜AB＜CA=假，把B、C對邊交換。；CA＜BC＜AB=假，把最小兩邊交換。；BC＜CA＜AB=真，A<B<C，所以其對邊 BC<CA<AB。 邊界：比值正且總和可縮放為180°，角序唯一。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s014-v009",
      "unitId": "u16",
      "skillId": "triangle-side-angle-relation",
      "contentSha256": "055fe9303e8f97705d680e14619b2388913f216e6ff487bfbce037f1caf4f1d1",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "3<x<9，正整數有5個。",
      "derivedAnswer": "5",
      "storedAnswer": "5",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「5」；另外三個選項逐一排除：「3」：只記得下界3，未列整數。；「8」：把x=1到8全算入。；「6」：把x=9也納入，但此時最小角不唯一。",
        "undefinedSymbol": "題幹符號與詞語已在「邊角關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "長度同單位且x為正整數。",
        "roundingConflict": "依精確資料獨立推導為「5」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "端點3、9均不可取，列舉完整。",
        "alternateReading": "若採常見誤讀「把『唯一最小』忽略而納入相等邊。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，需取兩個嚴格條件的交集。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會解嚴格不等式。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「交集邊角排序與三角形不等式」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某三角形中，最長邊長為 12，另外兩邊為 9、x；且 x 所對的角是唯一最小角。若 x 為正整數，x 可能有幾個值？」獨立重算：3<x<9，正整數有5個。 正確選項「5」。四選項核對：5=真，x為唯一最短邊，所以x<9；又9+x>12，所以x>3。整數4、5、6、7、8共5個。；3=假，只記得下界3，未列整數。；8=假，把x=1到8全算入。；6=假，把x=9也納入，但此時最小角不唯一。 邊界：端點3、9均不可取，列舉完整。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s014-v010",
      "unitId": "u16",
      "skillId": "triangle-side-angle-relation",
      "contentSha256": "ebac91961057812e0c8adb0e1d9ee66c28eb51ae02d2e9eac878914421d5efa7",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "同一三角形內，30 m邊對最大角。",
      "derivedAnswer": "30 m 拉索",
      "storedAnswer": "30 m 拉索",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「30 m 拉索」；另外三個選項逐一排除：「18 m 拉索」：最短邊對最小角。；「24 m 拉索」：中間邊對中間角。；「三個角一樣大」：三邊不等長。",
        "undefinedSymbol": "題幹符號與詞語已在「邊角關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "單位一致。",
        "roundingConflict": "依精確資料獨立推導為「30 m 拉索」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "只比較大小，不需依圖比例量角。",
        "alternateReading": "若採常見誤讀「以拉索所在端點當成其對角。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，工程圖需以邊長資料判斷開口角。",
      "literacyContextNecessity": "拉索長度是可量測資料，而工程關注的是對面開口角；情境建立兩種量之間的轉換。",
      "prerequisiteCheck": "會辨識平面三角形。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「從工程長度判斷角度風險」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「吊橋的三條拉索在平面圖上形成三角形，長度依序為 18 m、24 m、30 m。哪一條拉索所對的開口角最大？」獨立重算：同一三角形內，30 m邊對最大角。 正確選項「30 m 拉索」。四選項核對：30 m 拉索=真，30 m 是最長邊，所對開口角最大。；18 m 拉索=假，最短邊對最小角。；24 m 拉索=假，中間邊對中間角。；三個角一樣大=假，三邊不等長。 邊界：只比較大小，不需依圖比例量角。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s014-v011",
      "unitId": "u16",
      "skillId": "triangle-side-angle-relation",
      "contentSha256": "2957e61b0929bfb9c19eac23357aebc3148a9984c5810646b83a74783b7c39ea",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "6.1最大且為BC，所以最大角在A。",
      "derivedAnswer": "A",
      "storedAnswer": "A",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「A」；另外三個選項逐一排除：「B」：B的對邊CA=5.5，不最長。；「C」：C的對邊AB=4.8，最短。；「任一點皆可」：三邊不相等，最大角唯一。",
        "undefinedSymbol": "題幹符號與詞語已在「邊角關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "距離同為km且不需四捨五入。",
        "roundingConflict": "依精確資料獨立推導為「A」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "資料大小互異，最大角唯一。",
        "alternateReading": "若採常見誤讀「把最長路段的端點當答案。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，需把路線資料轉成幾何對邊。",
      "literacyContextNecessity": "基地名稱與路段端點是判定『對面頂點』的必要資訊，不能只保留三個裸數。",
      "prerequisiteCheck": "能從地名辨認對面頂點。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「由最長路段找其對角頂點」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「登山路線三個基地 A、B、C 形成三角形。已知 AB=4.8 km、BC=6.1 km、CA=5.5 km。若救援中心位於最大內角的頂點，應設在哪一點？」獨立重算：6.1最大且為BC，所以最大角在A。 正確選項「A」。四選項核對：B=假，B的對邊CA=5.5，不最長。；A=真，最長邊BC=6.1 km 對著A，因此A為最大內角頂點。；C=假，C的對邊AB=4.8，最短。；任一點皆可=假，三邊不相等，最大角唯一。 邊界：資料大小互異，最大角唯一。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s014-v012",
      "unitId": "u16",
      "skillId": "triangle-side-angle-relation",
      "contentSha256": "f14ee28e174a8b2b3356388298123b6c3e7754001098daa40de7b14d0d24f835",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "因2.4<2.6，X不可能是最大角。",
      "derivedAnswer": "不符合，2.6 m 的對角才最大",
      "storedAnswer": "不符合，2.6 m 的對角才最大",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「不符合，2.6 m 的對角才最大」；另外三個選項逐一排除：「符合，因2.4 m大於2.1 m」：忽略尚有2.6 m。；「符合，角X名稱已標為最大」：標示不能取代邊長關係。；「無法判斷，必須量三個角」：由三邊排序即可判斷角序。",
        "undefinedSymbol": "題幹符號與詞語已在「邊角關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "單位皆m；給定精確值差0.2 m。",
        "roundingConflict": "依精確資料獨立推導為「不符合，2.6 m 的對角才最大」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "三長度可成三角形且最長邊唯一。",
        "alternateReading": "若採常見誤讀「只與一條邊比較而忽略第三邊。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，要求依量測數據驗收設計。",
      "literacyContextNecessity": "『設計要求』與『實測邊長』的衝突是任務核心，情境不能刪除而不改變審核意義。",
      "prerequisiteCheck": "理解最長邊對最大角。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「以邊角關係查核設計要求」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形遮雨棚的三個角中，設計師要求角 X 最大。量得 X 的對邊為 2.4 m，另兩邊為 2.1 m 與 2.6 m。對此設計應如何判斷？」獨立重算：因2.4<2.6，X不可能是最大角。 正確選項「不符合，2.6 m 的對角才最大」。四選項核對：符合，因2.4 m大於2.1 m=假，忽略尚有2.6 m。；符合，角X名稱已標為最大=假，標示不能取代邊長關係。；無法判斷，必須量三個角=假，由三邊排序即可判斷角序。；不符合，2.6 m 的對角才最大=真，2.6 m是最長邊，其對角最大；X對邊2.4 m不是最長。 邊界：三長度可成三角形且最長邊唯一。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u16-fig-014-side-angle",
      "unitId": "u16",
      "slot": "s014",
      "title": "同一三角形中長邊對大角",
      "altText": "不等邊三角形三邊分別以短、中、長三種線寬輔助標記，對面三角以一、二、三道弧表示大小順序。",
      "svgPath": "figures/u16/u16-fig-014-side-angle.svg",
      "drawingSpec": {
        "canvas": {
          "width": 360,
          "height": 240,
          "viewBox": "0 0 360 240"
        },
        "coordinateSystem": "左上角為(0,0)，x向右、y向下。",
        "geometry": "三角形頂點(45,185)、(125,55)、(315,185)；左腰3px、底4px、右腰5px；三角弧數依對邊長排序。",
        "visibleLineRules": "主要邊線使用2.5px黑色實線；輔助線使用1.5px虛線；弧線不得遮住頂點標籤。",
        "hiddenLineRules": "平面圖無隱藏邊；未畫出的延長線不得由視覺自行推定。",
        "labels": "邊長類別靠近相應邊；總結文字置頂。",
        "tickMarksAndSymbols": "相等邊以同數量短刻痕表示；直角以小正方形；相等角以同型圓弧。",
        "units": "示意圖無長度單位，題目另有數值時以題幹為準。",
        "arrows": "只在延長線或行進方向使用箭頭。",
        "toScale": false,
        "notToScaleWarning": "圖形不按比例，請依標記與題目條件判斷。",
        "mobileLayout": "360×240畫布；最小文字14px；標籤與線段保持至少6px間距。",
        "answerLeakageControl": "圖中只呈現已知結構與定義標記，不標示題目所求數值或正確選項。"
      },
      "svgAssertions": [
        "角大小看對邊",
        "stroke-width=\"5\"",
        "A38 38",
        "短邊"
      ],
      "figureReview": {
        "decision": "pass",
        "mobileReadability": "360px寬預覽下，頂點、刻痕、直角符號與延長線箭頭仍可辨識。",
        "answerLeakage": "未顯示任何題目答案；只保留概念所需結構。",
        "geometryCheck": "已依列出的座標逐項核對端點、交點、刻痕與文字位置。",
        "reviewNote": "同一三角形中長邊對大角已逐線檢查：三角形頂點(45,185)、(125,55)、(315,185)；左腰3px、底4px、右腰5px；三角弧數依對邊長排序。；標籤配置為邊長類別靠近相應邊；總結文字置頂。，未依視覺比例暗示未給定量。",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "36c174fd43f717fba0768b47b55f27063b18801a0b54a83eb5399b5953de68a7"
    }
  ]
};
export default skillData;
