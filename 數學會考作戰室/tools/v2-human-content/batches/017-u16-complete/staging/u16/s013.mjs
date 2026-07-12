// Deterministically emitted from reviewed CHATGPT_HUMAN_AUTHORED_R1 source.
// Do not edit this staging module by hand.
export const skillData={
  "slot": "s013",
  "lecture": {
    "lectureId": "u16-s013-lecture-r1",
    "unitId": "u16",
    "numericUnitId": 16,
    "topicId": "u16-properties",
    "skillId": "angle-sum-exterior",
    "skillOrder": 13,
    "originalLockedTitle": "外角定理",
    "title": "外角定理：一個外角等於兩個不相鄰內角和",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能辨認三角形某頂點的內角、外角與兩個不相鄰內角。",
      "能由鄰補角與三角形內角和推導外角定理。",
      "能使用外角定理求未知角並檢查角度範圍。",
      "能分辨『一個三角形外角』與『多邊形外角和』。"
    ],
    "prerequisiteBridge": "已知三角形內角和為 180°，也知道一直線上的鄰補角和為 180°。把兩個 180° 等式相減，就得到外角定理。",
    "prerequisites": [
      {
        "skillId": "triangle-inequality",
        "requiredLevel": "能使用先備技能「三角形邊長關係」的核心定義與基本運算，並能說明其與本節的連結。"
      }
    ],
    "glossary": [
      {
        "term": "外角",
        "definition": "延長三角形一邊後，延長線與相鄰邊形成且與該頂點內角鄰補的角。"
      },
      {
        "term": "相鄰內角",
        "definition": "與該外角共用一邊、和外角成一直線的三角形內角。"
      },
      {
        "term": "不相鄰內角",
        "definition": "三角形另外兩個頂點的內角。"
      },
      {
        "term": "鄰補角",
        "definition": "共用一邊且另兩邊成一直線的兩角，和為 180°。"
      },
      {
        "term": "外角定理",
        "definition": "三角形一外角等於兩個不相鄰內角之和。"
      }
    ],
    "notation": [
      {
        "symbol": "∠ACD",
        "meaning": "若 BC 延長至 D，這是 C 點的外角。"
      },
      {
        "symbol": "∠ACD=∠A+∠B",
        "meaning": "C 點外角等於兩個不相鄰內角 A、B 的和。"
      },
      {
        "symbol": "∠ACB+∠ACD=180°",
        "meaning": "C 點內角與其相鄰外角為鄰補角。"
      }
    ],
    "conceptNarrative": [
      "△ABC 中把 BC 延長到 D，∠ACB 與 ∠ACD 共用 CA，另一邊 CB、CD 成一直線，所以兩角和 180°。",
      "三角形內角和給 ∠A+∠B+∠ACB=180°。兩式都等於 180°，消去 ∠ACB，得到 ∠ACD=∠A+∠B。",
      "外角一定大於任何一個不相鄰內角，因為它是兩個正內角的和。",
      "同一頂點可沿另一邊延長得到另一個外角；兩者角度相同，皆與該頂點內角互補。",
      "題目若畫多個延長線，要先確認所求角與哪個內角鄰補，再找正確的兩個不相鄰內角。"
    ],
    "formalDefinitions": [
      {
        "name": "三角形外角定理",
        "statement": "三角形的一個外角等於與它不相鄰的兩個內角之和。"
      },
      {
        "name": "外角大小性質",
        "statement": "三角形任一外角大於任一個與它不相鄰的內角。"
      }
    ],
    "formulas": [
      {
        "formula": "外角=兩個不相鄰內角和",
        "conditions": [
          "外角由三角形一邊延長形成"
        ],
        "meaning": "快速求角。"
      },
      {
        "formula": "外角+相鄰內角=180°",
        "conditions": [
          "兩角為鄰補角"
        ],
        "meaning": "另一種求外角或內角的方法。"
      }
    ],
    "nonApplicableCases": [
      "與外角相鄰的內角不能列入兩個不相鄰內角和。",
      "圖外任意角不一定是三角形外角，必須由一邊延長形成。",
      "外角定理不是『三個外角和 180°』。",
      "角度若算出 0°、負數或不小於 180°，通常表示對應或計算錯誤。",
      "多邊形外角和 360° 是另一技能，不可直接套在單一三角形外角題。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "找出被延長的三角形邊與外角頂點。",
        "check": "外角是否與一個內角成鄰補？"
      },
      {
        "step": 2,
        "instruction": "圈出相鄰內角。",
        "check": "它不可放入外角定理的兩角和。"
      },
      {
        "step": 3,
        "instruction": "找另外兩個頂點的內角。",
        "check": "它們才是不相鄰內角。"
      },
      {
        "step": 4,
        "instruction": "建立外角=兩不相鄰內角和。",
        "check": "代數式是否漏掉其中一角？"
      },
      {
        "step": 5,
        "instruction": "用外角與相鄰內角和 180° 驗算。",
        "check": "所得內外角是否互補？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "三角形兩個不相鄰內角為 45°、68°，求相對外角。",
        "solutionSteps": [
          "外角等於兩不相鄰內角和。",
          "45°+68°=113°。"
        ],
        "answer": "113°。"
      },
      {
        "exampleId": "L2",
        "prompt": "外角為 125°，其中一個不相鄰內角為 47°，求另一個。",
        "solutionSteps": [
          "另一角=125°−47°。"
        ],
        "answer": "78°。"
      },
      {
        "exampleId": "L3",
        "prompt": "C 點外角為 140°，求 C 點內角。",
        "solutionSteps": [
          "內角與外角鄰補。",
          "180°−140°=40°。"
        ],
        "answer": "40°。"
      },
      {
        "exampleId": "L4",
        "prompt": "外角為 3x+10°，兩個不相鄰內角為 x+20°、x+30°，求 x。",
        "solutionSteps": [
          "3x+10=(x+20)+(x+30)。",
          "3x+10=2x+50。"
        ],
        "answer": "x=40。"
      },
      {
        "exampleId": "L5",
        "prompt": "某外角為 70°，一個不相鄰內角為 75°，條件可能嗎？",
        "solutionSteps": [
          "外角應大於每個不相鄰內角。",
          "70°<75°，矛盾。"
        ],
        "answer": "不可能。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把相鄰內角加進外角定理。",
        "why": "只看靠近外角。",
        "correction": "不相鄰內角在另外兩個頂點。"
      },
      {
        "mistake": "外角和相鄰內角相等。",
        "why": "誤認對頂角。",
        "correction": "它們是鄰補角，和為 180°。"
      },
      {
        "mistake": "外角減去兩個內角。",
        "why": "公式方向混亂。",
        "correction": "先寫外角=內角1+內角2。"
      },
      {
        "mistake": "把延長線外的任意角都叫外角。",
        "why": "未檢查一邊是否延長。",
        "correction": "外角的一邊必須是三角形邊的延長線。"
      },
      {
        "mistake": "算出外角小於某不相鄰內角仍接受。",
        "why": "未做大小檢查。",
        "correction": "外角是兩正角和，必大於其中每一個。"
      },
      {
        "mistake": "混用多邊形外角和 360°。",
        "why": "見到外角就套同一公式。",
        "correction": "本技能處理單一三角形頂點外角。"
      }
    ],
    "selfCheck": [
      "我能指出外角的相鄰內角嗎？",
      "兩個不相鄰內角是否在另外兩個頂點？",
      "外角是否等於它們的和？",
      "內外角相加是否為 180°？",
      "結果是否大於每個不相鄰內角且小於 180°？"
    ],
    "summary": [
      "三角形一外角等於兩個不相鄰內角和。",
      "外角與相鄰內角互補。",
      "外角大於任一個不相鄰內角。",
      "先辨認位置，再代公式。"
    ],
    "connections": {
      "previous": "使用三角形內角和與基本不等式檢查。",
      "next": [
        "邊角關係會比較三角形內角大小。",
        "多邊形外角和會改用行走轉向觀點。"
      ]
    },
    "figureReferences": [
      "u16-fig-013-exterior-angle"
    ],
    "accessibilityNotes": [
      "u16-fig-013-exterior-angle 的替代文字與結構描述收錄於本技能 drawing-specs.jsonl。"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u16-s013-v001",
        "u16-s013-v002",
        "u16-s013-v003",
        "u16-s013-v004",
        "u16-s013-v005",
        "u16-s013-v006",
        "u16-s013-v007",
        "u16-s013-v008",
        "u16-s013-v009",
        "u16-s013-v010",
        "u16-s013-v011",
        "u16-s013-v012"
      ],
      "constructedResponseIds": [
        "u16-s013-cr001",
        "u16-s013-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "針對「外角定理」逐段核對定義、適用條件與反例；重新演算5個例題，確認未使用後續單元才引入的平行線或四邊形定理，並檢查圖形標記不取代文字條件。",
      "reviewVersion": "human-lecture-review-u16-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "eb1ba2fd2dbd25a27e5e07b2d3bf6e81aab5792fde302ca761d1df212f4d196c"
  },
  "mcQuestions": [
    {
      "questionId": "u16-s013-v001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "angle-sum-exterior",
      "skillOrder": 13,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-013-exterior-angle",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "三角形的一個外角所對的兩個內角為 48°、67°，此外角是多少度？",
      "givenConditions": [
        "外角由三角形一邊延長形成"
      ],
      "target": "用外角定理求角",
      "choices": [
        "19°",
        "65°",
        "115°",
        "180°"
      ],
      "answerIndex": 2,
      "independentSolution": "48+67=115，所以外角為 115°。",
      "explanation": "外角等於兩個不相鄰內角和，48°+67°=115°。 辨認兩個遠內角。 相加得到外角。",
      "steps": [
        "辨認兩個遠內角。",
        "相加得到外角。"
      ],
      "optionAnalysis": [
        {
          "choice": "19°",
          "truth": false,
          "reason": "誤作兩內角相減。"
        },
        {
          "choice": "65°",
          "truth": false,
          "reason": "誤用 180°−48°−67° 求第三內角。"
        },
        {
          "choice": "115°",
          "truth": true,
          "reason": "外角等於兩個不相鄰內角和，48°+67°=115°。"
        },
        {
          "choice": "180°",
          "truth": false,
          "reason": "誤認外角固定為平角。"
        }
      ],
      "misconceptionTarget": "把第三個內角加入外角定理。",
      "prerequisiteCheck": "已知角的加法。",
      "estimatedTimeSec": "65",
      "unitAndRoundingCheck": "角度精確，不需取近似。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "指定的是延長邊形成的外角，遠內角唯一。",
      "difficultyReason": "基礎題，直接套用外角定理。",
      "literacyContextNecessity": null,
      "authoringIntent": "計算外角。",
      "tags": [
        "空間與形狀",
        "外角定理",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "11ee93790326dcbf2934718288171ed34a4f65d5144658d74259bbed316e2efb"
    },
    {
      "questionId": "u16-s013-v002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "angle-sum-exterior",
      "skillOrder": 13,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "三角形某外角為 132°，其中一個遠內角為 57°，另一個遠內角為多少度？",
      "givenConditions": [
        "外角等於兩個遠內角和"
      ],
      "target": "由外角反求遠內角",
      "choices": [
        "57°",
        "75°",
        "123°",
        "189°"
      ],
      "answerIndex": 1,
      "independentSolution": "x=132−57=75。",
      "explanation": "另一遠內角為 132°−57°=75°。 寫成 57°+x=132°。 相減求 x。",
      "steps": [
        "寫成 57°+x=132°。",
        "相減求 x。"
      ],
      "optionAnalysis": [
        {
          "choice": "57°",
          "truth": false,
          "reason": "誤認兩個遠內角相等。"
        },
        {
          "choice": "75°",
          "truth": true,
          "reason": "另一遠內角為 132°−57°=75°。"
        },
        {
          "choice": "123°",
          "truth": false,
          "reason": "把 180°−57° 當答案。"
        },
        {
          "choice": "189°",
          "truth": false,
          "reason": "將兩角相加而非相減。"
        }
      ],
      "misconceptionTarget": "把外角與相鄰內角混淆。",
      "prerequisiteCheck": "會解一元一次式。",
      "estimatedTimeSec": "65",
      "unitAndRoundingCheck": "角度精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "兩遠內角皆為三角形內角，75° 合理且唯一。",
      "difficultyReason": "基礎題，單步反算。",
      "literacyContextNecessity": null,
      "authoringIntent": "反求遠內角。",
      "tags": [
        "空間與形狀",
        "外角定理",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "48d5fa917501e7134b70784aef8ae2b3a96a76b4033c20a6c805bbd721b3d7b0"
    },
    {
      "questionId": "u16-s013-v003",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "angle-sum-exterior",
      "skillOrder": 13,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "關於三角形的一個外角與兩個不相鄰內角，下列哪一個關係正確？",
      "givenConditions": [
        "考慮同一頂點的外角",
        "比較另外兩個不相鄰內角"
      ],
      "target": "辨認三角形外角定理",
      "choices": [
        "外角等於相鄰內角",
        "外角等於三個內角的和",
        "外角一定是鈍角",
        "外角等於兩個不相鄰內角的和"
      ],
      "answerIndex": 3,
      "independentSolution": "設相鄰內角為A，另外兩個內角為B、C。由A+B+C=180°且外角+A=180°，相減得外角=B+C。",
      "explanation": "用三角形內角和與線性對角的180°關係推導外角定理。",
      "steps": [
        "寫出三角形內角和A+B+C=180°。",
        "寫出外角+A=180°。",
        "兩式相減得到外角=B+C。"
      ],
      "optionAnalysis": [
        {
          "choice": "外角等於相鄰內角",
          "truth": false,
          "reason": "外角與相鄰內角互補，不一定相等。"
        },
        {
          "choice": "外角等於三個內角的和",
          "truth": false,
          "reason": "三個內角和是180°，不是外角的一般值。"
        },
        {
          "choice": "外角一定是鈍角",
          "truth": false,
          "reason": "外角不一定是鈍角。"
        },
        {
          "choice": "外角等於兩個不相鄰內角的和",
          "truth": true,
          "reason": "外角等於兩個不相鄰內角和。"
        }
      ],
      "misconceptionTarget": "把外角與相鄰內角混淆，或誤以為外角型態固定。",
      "prerequisiteCheck": "認識三角形內角。",
      "estimatedTimeSec": "60",
      "unitAndRoundingCheck": "無單位計算。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題幹限定同一三角形的一個外角及兩個不相鄰內角，關係唯一。",
      "difficultyReason": "基礎：由三角形內角和推導並辨認外角定理。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認定理。",
      "tags": [
        "空間與形狀",
        "外角定理",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "27ae532eb03f51983f1a018e3d389239a555f4593d994c20229ac5619f198ab7"
    },
    {
      "questionId": "u16-s013-v004",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "angle-sum-exterior",
      "skillOrder": 13,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-013-exterior-angle",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "三角形的一個外角為 (4x+8)°，兩個遠內角為 (x+20)°、(2x+18)°。x 為多少？",
      "givenConditions": [
        "所有角皆為正角"
      ],
      "target": "列式求參數",
      "choices": [
        "10",
        "30",
        "22",
        "46"
      ],
      "answerIndex": 1,
      "independentSolution": "移項得 x=30；此時外角 128°，遠內角 50°、78°，相加吻合。",
      "explanation": "4x+8=(x+20)+(2x+18)，故 x=30。 依外角定理列式。 化簡 4x+8=3x+38。 求得 x=30。",
      "steps": [
        "依外角定理列式。",
        "化簡 4x+8=3x+38。",
        "求得 x=30。"
      ],
      "optionAnalysis": [
        {
          "choice": "10",
          "truth": false,
          "reason": "把常數移項錯誤。"
        },
        {
          "choice": "30",
          "truth": true,
          "reason": "4x+8=(x+20)+(2x+18)，故 x=30。"
        },
        {
          "choice": "22",
          "truth": false,
          "reason": "只比較部分係數。"
        },
        {
          "choice": "46",
          "truth": false,
          "reason": "將兩遠內角相減。"
        }
      ],
      "misconceptionTarget": "漏加其中一個常數。",
      "prerequisiteCheck": "會解一元一次方程式。",
      "estimatedTimeSec": "95",
      "unitAndRoundingCheck": "角度代回皆為正且精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "代回後兩遠內角和等於外角，且第三內角為 52°。",
      "difficultyReason": "標準題，需列式並驗證角度合理性。",
      "literacyContextNecessity": null,
      "authoringIntent": "以代數運用外角定理。",
      "tags": [
        "空間與形狀",
        "外角定理",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "46c9a76dc43bd0ed011b75bb01c1cacce299aeecc3935b9b34bf90a76f1512bc"
    },
    {
      "questionId": "u16-s013-v005",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "angle-sum-exterior",
      "skillOrder": 13,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "等腰三角形頂角為 44°，延長一腰與底邊交點外側形成外角。該外角為多少度？",
      "givenConditions": [
        "兩底角相等"
      ],
      "target": "結合等腰性質與外角",
      "choices": [
        "112°",
        "68°",
        "88°",
        "136°"
      ],
      "answerIndex": 0,
      "independentSolution": "底角為 68°，指定外角為 112°；亦可用遠內角 44°+68°。",
      "explanation": "底角=(180°−44°)÷2=68°；相鄰外角=180°−68°=112°。 先求底角。 利用線性對角互補求外角。",
      "steps": [
        "先求底角。",
        "利用線性對角互補求外角。"
      ],
      "optionAnalysis": [
        {
          "choice": "112°",
          "truth": true,
          "reason": "底角=(180°−44°)÷2=68°；相鄰外角=180°−68°=112°。"
        },
        {
          "choice": "68°",
          "truth": false,
          "reason": "只算底角，未求其補角。"
        },
        {
          "choice": "88°",
          "truth": false,
          "reason": "誤把兩底角相加當指定外角。"
        },
        {
          "choice": "136°",
          "truth": false,
          "reason": "用 180°−44°。"
        }
      ],
      "misconceptionTarget": "分不清頂角處與底角處外角。",
      "prerequisiteCheck": "已會等腰三角形底角。",
      "estimatedTimeSec": "90",
      "unitAndRoundingCheck": "角度精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題幹明定外角位於底角頂點，兩種算法一致。",
      "difficultyReason": "標準題，需串聯等腰與外角性質。",
      "literacyContextNecessity": null,
      "authoringIntent": "兩步求外角。",
      "tags": [
        "空間與形狀",
        "外角定理",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "671bd7454f7245ed643c6a01b8176b2d5acf462fe549ee4563518d7063a5f4e7"
    },
    {
      "questionId": "u16-s013-v006",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "angle-sum-exterior",
      "skillOrder": 13,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "三角形 ABC 中，延長 BC 至 D。若 ∠A=3x°、∠B=(x+12)°、∠ACD=104°，則 ∠A 為多少度？",
      "givenConditions": [
        "B、C、D 共線，D 在 C 的外側"
      ],
      "target": "利用外角方程求指定角",
      "choices": [
        "23°",
        "58°",
        "69°",
        "81°"
      ],
      "answerIndex": 2,
      "independentSolution": "遠內角 A、B 的和為 104°，解得 x=23，再得 A=69°。",
      "explanation": "3x+(x+12)=104，4x=92，x=23，故 ∠A=69°。 列 3x+x+12=104。 求 x=23。 計算 3x=69。",
      "steps": [
        "列 3x+x+12=104。",
        "求 x=23。",
        "計算 3x=69。"
      ],
      "optionAnalysis": [
        {
          "choice": "23°",
          "truth": false,
          "reason": "求得 x 後未乘 3。"
        },
        {
          "choice": "58°",
          "truth": false,
          "reason": "誤將 104−46。"
        },
        {
          "choice": "69°",
          "truth": true,
          "reason": "3x+(x+12)=104，4x=92，x=23，故 ∠A=69°。"
        },
        {
          "choice": "81°",
          "truth": false,
          "reason": "把常數移項方向弄反。"
        }
      ],
      "misconceptionTarget": "把參數值當成所求角。",
      "prerequisiteCheck": "會依頂點辨識角。",
      "estimatedTimeSec": "100",
      "unitAndRoundingCheck": "所有角為度且為正。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "代回 B=35°，69+35=104，第三內角 76°。",
      "difficultyReason": "標準題，列式後仍須回答正確目標。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨識所求量。",
      "tags": [
        "空間與形狀",
        "外角定理",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "ab5d827839572cef30316056b8ddcbe068fc17a9ba269057c61b6e8b6f055423"
    },
    {
      "questionId": "u16-s013-v007",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "angle-sum-exterior",
      "skillOrder": 13,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "某三角形三個頂點各取一個外角。若前兩個外角為 121°、146°，第三個外角是多少度？",
      "givenConditions": [
        "三個外角均按同一方向選取"
      ],
      "target": "連結三角形外角和",
      "choices": [
        "87°",
        "267°",
        "273°",
        "93°"
      ],
      "answerIndex": 3,
      "independentSolution": "121+146=267，360−267=93。",
      "explanation": "三角形一組外角和為 360°，第三角=360°−121°−146°=93°。 確認每頂點取同向一個外角。 以 360° 減去已知兩角。",
      "steps": [
        "確認每頂點取同向一個外角。",
        "以 360° 減去已知兩角。"
      ],
      "optionAnalysis": [
        {
          "choice": "87°",
          "truth": false,
          "reason": "算成 360−121−152。"
        },
        {
          "choice": "267°",
          "truth": false,
          "reason": "只相加已知兩角。"
        },
        {
          "choice": "273°",
          "truth": false,
          "reason": "用 540° 減已知角。"
        },
        {
          "choice": "93°",
          "truth": true,
          "reason": "三角形一組外角和為 360°，第三角=360°−121°−146°=93°。"
        }
      ],
      "misconceptionTarget": "把三角形內角和 180° 用在外角和。",
      "prerequisiteCheck": "會做角度加減。",
      "estimatedTimeSec": "105",
      "unitAndRoundingCheck": "角度精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題幹指定同向外角，避免一頂點兩個外角的歧義。",
      "difficultyReason": "進階題，需辨認外角和而非單點外角定理。",
      "literacyContextNecessity": null,
      "authoringIntent": "跨接外角定理與外角和。",
      "tags": [
        "空間與形狀",
        "外角定理",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "72c41567578634cb70b1db6efbf1ad8fa3c8b48f5c25950a28048cb4a9bbac9f"
    },
    {
      "questionId": "u16-s013-v008",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "angle-sum-exterior",
      "skillOrder": 13,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "三角形 ABC 在 C 點的外角為 150°。若 ∠A 比 ∠B 大 18°，則較大的遠內角是多少度？",
      "givenConditions": [
        "∠A、∠B 為此外角的遠內角"
      ],
      "target": "由和與差求兩角",
      "choices": [
        "66°",
        "84°",
        "75°",
        "168°"
      ],
      "answerIndex": 1,
      "independentSolution": "(150+18)÷2=84，較大遠內角是 84°。",
      "explanation": "設 B=y，A=y+18，2y+18=150，y=66，故 A=84°。 設較小角。 利用遠內角和為 150°。 求較大角。",
      "steps": [
        "設較小角。",
        "利用遠內角和為 150°。",
        "求較大角。"
      ],
      "optionAnalysis": [
        {
          "choice": "66°",
          "truth": false,
          "reason": "選到較小角。"
        },
        {
          "choice": "84°",
          "truth": true,
          "reason": "設 B=y，A=y+18，2y+18=150，y=66，故 A=84°。"
        },
        {
          "choice": "75°",
          "truth": false,
          "reason": "只取平均，忽略差。"
        },
        {
          "choice": "168°",
          "truth": false,
          "reason": "將和與差直接相加。"
        }
      ],
      "misconceptionTarget": "只把外角平均分配。",
      "prerequisiteCheck": "會解和差問題。",
      "estimatedTimeSec": "110",
      "unitAndRoundingCheck": "角度精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "84°與66°均為正，和為150°；相鄰內角為30°。",
      "difficultyReason": "進階題，外角定理後需解和差。",
      "literacyContextNecessity": null,
      "authoringIntent": "處理角度和差。",
      "tags": [
        "空間與形狀",
        "外角定理",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "5192affa910ce415f8830a30e65d21ddd7e73c06711bb51a2a38b9881e6467bf"
    },
    {
      "questionId": "u16-s013-v009",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "angle-sum-exterior",
      "skillOrder": 13,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "一名學生說：『因為 ∠A+∠B=∠ACD，所以 ∠ACD 一定大於 ∠A，也一定大於 ∠B。』哪項評析最正確？",
      "givenConditions": [
        "A、B 是三角形在 C 點外角的兩個遠內角"
      ],
      "target": "判斷由外角定理衍生的不等關係",
      "choices": [
        "只保證大於較小的遠內角",
        "只有銳角三角形才正確",
        "說法正確，因兩個遠內角皆為正角",
        "說法錯誤，外角可能小於遠內角"
      ],
      "answerIndex": 2,
      "independentSolution": "若 E=A+B 且 A,B>0，則 E>A 且 E>B，原說法正確。",
      "explanation": "外角等於兩個正的遠內角之和，所以必分別大於每一個遠內角。 用外角定理寫成和。 利用三角形內角皆大於0°。",
      "steps": [
        "用外角定理寫成和。",
        "利用三角形內角皆大於0°。"
      ],
      "optionAnalysis": [
        {
          "choice": "只保證大於較小的遠內角",
          "truth": false,
          "reason": "正數相加會大於每一個加數。"
        },
        {
          "choice": "只有銳角三角形才正確",
          "truth": false,
          "reason": "定理對所有非退化三角形成立。"
        },
        {
          "choice": "說法正確，因兩個遠內角皆為正角",
          "truth": true,
          "reason": "外角等於兩個正的遠內角之和，所以必分別大於每一個遠內角。"
        },
        {
          "choice": "說法錯誤，外角可能小於遠內角",
          "truth": false,
          "reason": "外角是兩個正遠內角之和。"
        }
      ],
      "misconceptionTarget": "只背公式而未理解正角帶來的不等關係。",
      "prerequisiteCheck": "理解非退化三角形內角為正。",
      "estimatedTimeSec": "115",
      "unitAndRoundingCheck": "無近似。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "限非退化三角形，正角條件已隱含在三角形定義。",
      "difficultyReason": "進階題，要求從定理推出一般性結論。",
      "literacyContextNecessity": null,
      "authoringIntent": "審查幾何論證。",
      "tags": [
        "空間與形狀",
        "外角定理",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "c91600d27b57f14bef90cdd81e1907da93fe93069c9bdec7858286a02586b59c"
    },
    {
      "questionId": "u16-s013-v010",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "angle-sum-exterior",
      "skillOrder": 13,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-013-exterior-angle",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "屋頂支架形成三角形，施工圖標示頂端兩個遠內角為 38°、52°。工人要把底邊延長線與斜桿間的外角量到多少，才能符合設計？",
      "givenConditions": [
        "支架接點視為理想線段交會"
      ],
      "target": "將外角定理用於施工角度",
      "choices": [
        "14°",
        "52°",
        "128°",
        "90°"
      ],
      "answerIndex": 3,
      "independentSolution": "38+52=90，因此應量到直角 90°。",
      "explanation": "指定外角=38°+52°=90°。 辨識施工圖中的兩個遠內角。 相加得到外角。",
      "steps": [
        "辨識施工圖中的兩個遠內角。",
        "相加得到外角。"
      ],
      "optionAnalysis": [
        {
          "choice": "14°",
          "truth": false,
          "reason": "誤作 52−38。"
        },
        {
          "choice": "52°",
          "truth": false,
          "reason": "只取一個遠內角。"
        },
        {
          "choice": "128°",
          "truth": false,
          "reason": "把 180−52 當指定外角。"
        },
        {
          "choice": "90°",
          "truth": true,
          "reason": "指定外角=38°+52°=90°。"
        }
      ],
      "misconceptionTarget": "被實物方位干擾而取錯角。",
      "prerequisiteCheck": "會辨識三角形外角。",
      "estimatedTimeSec": "100",
      "unitAndRoundingCheck": "角度以度表示，設計值精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "情境指定延長線與斜桿之間外角，無另一個反角。",
      "difficultyReason": "素養題，需把支架語言翻成外角模型。",
      "literacyContextNecessity": "施工者實際量測的是外部接合角，情境不可刪除；刪除後便失去延長線與斜桿的角度辨識。",
      "authoringIntent": "解讀施工角度。",
      "tags": [
        "空間與形狀",
        "外角定理",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "427fa2420faabdab0a69845724dbce99163927af9e701b2ac3519d3b3caaefdb"
    },
    {
      "questionId": "u16-s013-v011",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "angle-sum-exterior",
      "skillOrder": 13,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "步道在三角形花圃的一個頂點沿邊界延長。該處外轉角為 126°，其中一個不相鄰內角為 49°。為標示另一個不相鄰內角，應寫多少度？",
      "givenConditions": [
        "外轉角取小於180°者"
      ],
      "target": "從實際轉角反求角度",
      "choices": [
        "77°",
        "49°",
        "103°",
        "175°"
      ],
      "answerIndex": 0,
      "independentSolution": "126−49=77，且49+77=126。",
      "explanation": "另一遠內角=126°−49°=77°。 將外轉角視為三角形外角。 相減求另一遠內角。",
      "steps": [
        "將外轉角視為三角形外角。",
        "相減求另一遠內角。"
      ],
      "optionAnalysis": [
        {
          "choice": "77°",
          "truth": true,
          "reason": "另一遠內角=126°−49°=77°。"
        },
        {
          "choice": "49°",
          "truth": false,
          "reason": "誤認兩角相等。"
        },
        {
          "choice": "103°",
          "truth": false,
          "reason": "算成 180−77。"
        },
        {
          "choice": "175°",
          "truth": false,
          "reason": "將126與49相加。"
        }
      ],
      "misconceptionTarget": "把轉角與相鄰內角互補關係用錯頂點。",
      "prerequisiteCheck": "會從情境辨認外角。",
      "estimatedTimeSec": "105",
      "unitAndRoundingCheck": "角度精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "外轉角限定小於180°，排除取234°反角。",
      "difficultyReason": "素養題，必須將步道轉向語言轉成外角定理。",
      "literacyContextNecessity": "『外轉角』決定要使用延長邊形成的角；沒有步道方向資訊會有反角歧義，因此情境具必要性。",
      "authoringIntent": "步道角度標示。",
      "tags": [
        "空間與形狀",
        "外角定理",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "e9def1ddb6ff938ed642829738dd2322b9a985eab80dff7e111127a51aa418d9"
    },
    {
      "questionId": "u16-s013-v012",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "angle-sum-exterior",
      "skillOrder": 13,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-013-exterior-angle",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "三角形警示牌的右下角內角為 64°，把底框向右延長後，外角比頂角大 35°。若左下角為 51°，下列判斷何者正確？",
      "givenConditions": [
        "外角位於右下角",
        "所有標示皆宣稱為精確值"
      ],
      "target": "檢查多項角度標示是否相容",
      "choices": [
        "條件互相矛盾，沒有符合的三角形",
        "頂角為65°，所有條件相符",
        "頂角為81°，所有條件相符",
        "右下外角為100°，所有條件相符"
      ],
      "answerIndex": 0,
      "independentSolution": "所有基本角度關係無法同時滿足，因此不存在符合全部標示的三角形。",
      "explanation": "內角和給頂角65°；右下外角為116°，兩者相差51°而非35°，資料不相容。 由三內角和算頂角65°。 由線性對角算外角116°。 檢查116°−65°=51°，與35°衝突。",
      "steps": [
        "由三內角和算頂角65°。",
        "由線性對角算外角116°。",
        "檢查116°−65°=51°，與35°衝突。"
      ],
      "optionAnalysis": [
        {
          "choice": "條件互相矛盾，沒有符合的三角形",
          "truth": true,
          "reason": "內角和給頂角65°；右下外角為116°，兩者相差51°而非35°，資料不相容。"
        },
        {
          "choice": "頂角為65°，所有條件相符",
          "truth": false,
          "reason": "由內角和得65°，但外角與頂角實際相差51°。"
        },
        {
          "choice": "頂角為81°，所有條件相符",
          "truth": false,
          "reason": "81°來自116°−35°，卻使三內角和為196°。"
        },
        {
          "choice": "右下外角為100°，所有條件相符",
          "truth": false,
          "reason": "右下內角64°的相鄰外角應為116°。"
        }
      ],
      "misconceptionTarget": "只算出一個角就停止，未核對附加條件。",
      "prerequisiteCheck": "會用內角和、補角與外角定理。",
      "estimatedTimeSec": "130",
      "unitAndRoundingCheck": "角度皆為精確值，不能以量測誤差解釋。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題幹明示精確標示，故矛盾必須判為無解。",
      "difficultyReason": "素養題，要求像審圖者一樣交叉核對資料，而非只做單一步驟。",
      "literacyContextNecessity": "實務圖面可能含互相矛盾的標示，必須整體核對；刪除情境會弱化資料審核的任務意義。",
      "authoringIntent": "檢查警示牌圖面資料。",
      "tags": [
        "空間與形狀",
        "外角定理",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "9ce7db71cb67a6e1b58871ec4db387d32e67bc9b6b322e97c0c6dd3d09d4fb86"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u16-s013-cr001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "angle-sum-exterior",
      "skillOrder": 13,
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-013-exterior-angle",
      "prompt": "△ABC 中延長 BC 至 D。已知 ∠A=(2x+10)°、∠B=(x+20)°、外角 ∠ACD=120°。求x與三個內角。",
      "requiredWork": [
        "用外角定理列式。",
        "求x。",
        "求C的內角並驗算三角和。"
      ],
      "fullCreditSolution": [
        "(2x+10)+(x+20)=120，3x+30=120，x=30。",
        "∠A=70°、∠B=50°。",
        "∠C=180°−120°=60°，驗算70+50+60=180。"
      ],
      "alternativeSolutions": [
        "可先由C=60°，再用三內角和列(2x+10)+(x+20)+60=180。"
      ],
      "reasoningSteps": [
        "(2x+10)+(x+20)=120，3x+30=120，x=30。",
        "∠A=70°、∠B=50°。",
        "∠C=180°−120°=60°，驗算70+50+60=180。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "x=30且三內角70°、50°、60°完整，外角與內角和雙重驗算。"
        },
        {
          "score": 2,
          "criteria": "列式與x正確，但漏一內角或單一角算術錯。"
        },
        {
          "score": 1,
          "criteria": "能正確使用外角定理列式，未完成全部答案。"
        },
        {
          "score": 0,
          "criteria": "把外角當第三內角、方程錯誤或無有效作答。"
        }
      ],
      "partialCreditRules": [
        "列式與x正確，但漏一內角或單一角算術錯。",
        "能正確使用外角定理列式，未完成全部答案。"
      ],
      "followThroughPolicy": "若x算錯但後續依自己x一致計算且C=60正確，最高2分。",
      "unitAndNotationRules": "x無單位；所有角度附°；∠ACD是外角。",
      "answerOnlyPolicy": "只寫x=30最多1分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "把120°加入三內角和。",
        "漏加常數10或20。"
      ],
      "independentReview": {
        "derivedResult": "x=30；A=70°、B=50°、C=60°。",
        "ambiguity": "D在BC延長方向明確，∠ACD與C內角互補。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "b8c594851766badaeb9590561fc531e370cc12c39d1f315c7485d6e1ce56646e"
    },
    {
      "questionId": "u16-s013-cr002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "angle-sum-exterior",
      "skillOrder": 13,
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "證明三角形的一個外角大於任一個與它不相鄰的內角。",
      "requiredWork": [
        "寫出外角等於兩遠內角和。",
        "使用三角形內角皆為正。",
        "分別比較兩個遠內角。"
      ],
      "fullCreditSolution": [
        "設外角E的兩個遠內角為A、B。由外角定理E=A+B。",
        "因A>0、B>0，所以E=A+B>A，且E=A+B>B。",
        "故外角大於任一遠內角。"
      ],
      "alternativeSolutions": [
        "可用反證：若E≤A，配合E=A+B會推出B≤0，違反三角形內角為正。"
      ],
      "reasoningSteps": [
        "設外角E的兩個遠內角為A、B。由外角定理E=A+B。",
        "因A>0、B>0，所以E=A+B>A，且E=A+B>B。",
        "故外角大於任一遠內角。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "由E=A+B與正角完整推出兩個嚴格不等式。"
        },
        {
          "score": 2,
          "criteria": "核心證明正確，但只明寫其中一個比較，另一個以『同理』省略。"
        },
        {
          "score": 1,
          "criteria": "只陳述外角定理或只舉數值例子。"
        },
        {
          "score": 0,
          "criteria": "把相鄰內角當遠內角、使用錯誤不等式或無證明。"
        }
      ],
      "partialCreditRules": [
        "核心證明正確，但只明寫其中一個比較，另一個以『同理』省略。",
        "只陳述外角定理或只舉數值例子。"
      ],
      "followThroughPolicy": "若只證E>A但未處理B，最高2分。",
      "unitAndNotationRules": "角可用字母代表角度量；嚴格大於符號不可寫成≥。",
      "answerOnlyPolicy": "只寫結論無推理，0分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "忽略內角正值條件。",
        "誤說外角大於相鄰內角。"
      ],
      "independentReview": {
        "derivedResult": "E=A+B且A,B>0，所以E>A、E>B。",
        "ambiguity": "討論非退化三角形，內角嚴格為正。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "862647defb8ce8c9380655f6e9c3e42d08b2a7d9d55800233e5bdc43472f2065"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u16-s013-v001",
      "unitId": "u16",
      "skillId": "angle-sum-exterior",
      "contentSha256": "11ee93790326dcbf2934718288171ed34a4f65d5144658d74259bbed316e2efb",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "48+67=115，所以外角為 115°。",
      "derivedAnswer": "115°",
      "storedAnswer": "115°",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「115°」；另外三個選項逐一排除：「19°」：誤作兩內角相減。；「65°」：誤用 180°−48°−67° 求第三內角。；「180°」：誤認外角固定為平角。",
        "undefinedSymbol": "題幹符號與詞語已在「外角定理」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度精確，不需取近似。",
        "roundingConflict": "依精確資料獨立推導為「115°」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "指定的是延長邊形成的外角，遠內角唯一。",
        "alternateReading": "若採常見誤讀「把第三個內角加入外角定理。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，直接套用外角定理。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "已知角的加法。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「用外角定理求角」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形的一個外角所對的兩個內角為 48°、67°，此外角是多少度？」獨立重算：48+67=115，所以外角為 115°。 正確選項「115°」。四選項核對：19°=假，誤作兩內角相減。；65°=假，誤用 180°−48°−67° 求第三內角。；115°=真，外角等於兩個不相鄰內角和，48°+67°=115°。；180°=假，誤認外角固定為平角。 邊界：指定的是延長邊形成的外角，遠內角唯一。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s013-v002",
      "unitId": "u16",
      "skillId": "angle-sum-exterior",
      "contentSha256": "48d5fa917501e7134b70784aef8ae2b3a96a76b4033c20a6c805bbd721b3d7b0",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "x=132−57=75。",
      "derivedAnswer": "75°",
      "storedAnswer": "75°",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「75°」；另外三個選項逐一排除：「57°」：誤認兩個遠內角相等。；「123°」：把 180°−57° 當答案。；「189°」：將兩角相加而非相減。",
        "undefinedSymbol": "題幹符號與詞語已在「外角定理」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度精確。",
        "roundingConflict": "依精確資料獨立推導為「75°」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "兩遠內角皆為三角形內角，75° 合理且唯一。",
        "alternateReading": "若採常見誤讀「把外角與相鄰內角混淆。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，單步反算。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會解一元一次式。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「由外角反求遠內角」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形某外角為 132°，其中一個遠內角為 57°，另一個遠內角為多少度？」獨立重算：x=132−57=75。 正確選項「75°」。四選項核對：57°=假，誤認兩個遠內角相等。；75°=真，另一遠內角為 132°−57°=75°。；123°=假，把 180°−57° 當答案。；189°=假，將兩角相加而非相減。 邊界：兩遠內角皆為三角形內角，75° 合理且唯一。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s013-v003",
      "unitId": "u16",
      "skillId": "angle-sum-exterior",
      "contentSha256": "27ae532eb03f51983f1a018e3d389239a555f4593d994c20229ac5619f198ab7",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "設相鄰內角為A，另外兩個內角為B、C。由A+B+C=180°且外角+A=180°，相減得外角=B+C。",
      "derivedAnswer": "外角等於兩個不相鄰內角的和",
      "storedAnswer": "外角等於兩個不相鄰內角的和",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回後只有「外角等於兩個不相鄰內角的和」成立；其他三項分別因：外角與相鄰內角互補，不一定相等。；三個內角和是180°，不是外角的一般值。；外角不一定是鈍角。",
        "undefinedSymbol": "題幹符號與詞語已在「外角定理」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無單位計算。",
        "roundingConflict": "依精確資料獨立推導為「外角等於兩個不相鄰內角的和」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題幹限定同一三角形的一個外角及兩個不相鄰內角，關係唯一。",
        "alternateReading": "題幹明確要求「辨認三角形外角定理」，沒有第二種合理所求。"
      },
      "difficultyReason": "基礎：由三角形內角和推導並辨認外角定理。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "認識三角形內角。",
      "languageCheck": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "u16-s013-v003 中央修訂後獨立重算：設相鄰內角為A，另外兩個內角為B、C。由A+B+C=180°且外角+A=180°，相減得外角=B+C。 四個選項逐項核對，唯一正解為「外角等於兩個不相鄰內角的和」；其餘選項排除理由為：外角與相鄰內角互補，不一定相等。；三個內角和是180°，不是外角的一般值。；外角不一定是鈍角。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s013-v004",
      "unitId": "u16",
      "skillId": "angle-sum-exterior",
      "contentSha256": "46c9a76dc43bd0ed011b75bb01c1cacce299aeecc3935b9b34bf90a76f1512bc",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "移項得 x=30；此時外角 128°，遠內角 50°、78°，相加吻合。",
      "derivedAnswer": "30",
      "storedAnswer": "30",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「30」；另外三個選項逐一排除：「10」：把常數移項錯誤。；「22」：只比較部分係數。；「46」：將兩遠內角相減。",
        "undefinedSymbol": "題幹符號與詞語已在「外角定理」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度代回皆為正且精確。",
        "roundingConflict": "依精確資料獨立推導為「30」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "代回後兩遠內角和等於外角，且第三內角為 52°。",
        "alternateReading": "若採常見誤讀「漏加其中一個常數。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，需列式並驗證角度合理性。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會解一元一次方程式。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「列式求參數」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形的一個外角為 (4x+8)°，兩個遠內角為 (x+20)°、(2x+18)°。x 為多少？」獨立重算：移項得 x=30；此時外角 128°，遠內角 50°、78°，相加吻合。 正確選項「30」。四選項核對：10=假，把常數移項錯誤。；30=真，4x+8=(x+20)+(2x+18)，故 x=30。；22=假，只比較部分係數。；46=假，將兩遠內角相減。 邊界：代回後兩遠內角和等於外角，且第三內角為 52°。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s013-v005",
      "unitId": "u16",
      "skillId": "angle-sum-exterior",
      "contentSha256": "671bd7454f7245ed643c6a01b8176b2d5acf462fe549ee4563518d7063a5f4e7",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "底角為 68°，指定外角為 112°；亦可用遠內角 44°+68°。",
      "derivedAnswer": "112°",
      "storedAnswer": "112°",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「112°」；另外三個選項逐一排除：「68°」：只算底角，未求其補角。；「88°」：誤把兩底角相加當指定外角。；「136°」：用 180°−44°。",
        "undefinedSymbol": "題幹符號與詞語已在「外角定理」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度精確。",
        "roundingConflict": "依精確資料獨立推導為「112°」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題幹明定外角位於底角頂點，兩種算法一致。",
        "alternateReading": "若採常見誤讀「分不清頂角處與底角處外角。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，需串聯等腰與外角性質。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "已會等腰三角形底角。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「結合等腰性質與外角」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等腰三角形頂角為 44°，延長一腰與底邊交點外側形成外角。該外角為多少度？」獨立重算：底角為 68°，指定外角為 112°；亦可用遠內角 44°+68°。 正確選項「112°」。四選項核對：112°=真，底角=(180°−44°)÷2=68°；相鄰外角=180°−68°=112°。；68°=假，只算底角，未求其補角。；88°=假，誤把兩底角相加當指定外角。；136°=假，用 180°−44°。 邊界：題幹明定外角位於底角頂點，兩種算法一致。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s013-v006",
      "unitId": "u16",
      "skillId": "angle-sum-exterior",
      "contentSha256": "ab5d827839572cef30316056b8ddcbe068fc17a9ba269057c61b6e8b6f055423",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "遠內角 A、B 的和為 104°，解得 x=23，再得 A=69°。",
      "derivedAnswer": "69°",
      "storedAnswer": "69°",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「69°」；另外三個選項逐一排除：「23°」：求得 x 後未乘 3。；「58°」：誤將 104−46。；「81°」：把常數移項方向弄反。",
        "undefinedSymbol": "題幹符號與詞語已在「外角定理」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "所有角為度且為正。",
        "roundingConflict": "依精確資料獨立推導為「69°」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "代回 B=35°，69+35=104，第三內角 76°。",
        "alternateReading": "若採常見誤讀「把參數值當成所求角。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，列式後仍須回答正確目標。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會依頂點辨識角。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「利用外角方程求指定角」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形 ABC 中，延長 BC 至 D。若 ∠A=3x°、∠B=(x+12)°、∠ACD=104°，則 ∠A 為多少度？」獨立重算：遠內角 A、B 的和為 104°，解得 x=23，再得 A=69°。 正確選項「69°」。四選項核對：23°=假，求得 x 後未乘 3。；58°=假，誤將 104−46。；69°=真，3x+(x+12)=104，4x=92，x=23，故 ∠A=69°。；81°=假，把常數移項方向弄反。 邊界：代回 B=35°，69+35=104，第三內角 76°。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s013-v007",
      "unitId": "u16",
      "skillId": "angle-sum-exterior",
      "contentSha256": "72c41567578634cb70b1db6efbf1ad8fa3c8b48f5c25950a28048cb4a9bbac9f",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "121+146=267，360−267=93。",
      "derivedAnswer": "93°",
      "storedAnswer": "93°",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「93°」；另外三個選項逐一排除：「87°」：算成 360−121−152。；「267°」：只相加已知兩角。；「273°」：用 540° 減已知角。",
        "undefinedSymbol": "題幹符號與詞語已在「外角定理」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度精確。",
        "roundingConflict": "依精確資料獨立推導為「93°」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題幹指定同向外角，避免一頂點兩個外角的歧義。",
        "alternateReading": "若採常見誤讀「把三角形內角和 180° 用在外角和。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，需辨認外角和而非單點外角定理。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會做角度加減。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「連結三角形外角和」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某三角形三個頂點各取一個外角。若前兩個外角為 121°、146°，第三個外角是多少度？」獨立重算：121+146=267，360−267=93。 正確選項「93°」。四選項核對：87°=假，算成 360−121−152。；267°=假，只相加已知兩角。；273°=假，用 540° 減已知角。；93°=真，三角形一組外角和為 360°，第三角=360°−121°−146°=93°。 邊界：題幹指定同向外角，避免一頂點兩個外角的歧義。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s013-v008",
      "unitId": "u16",
      "skillId": "angle-sum-exterior",
      "contentSha256": "5192affa910ce415f8830a30e65d21ddd7e73c06711bb51a2a38b9881e6467bf",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "(150+18)÷2=84，較大遠內角是 84°。",
      "derivedAnswer": "84°",
      "storedAnswer": "84°",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「84°」；另外三個選項逐一排除：「66°」：選到較小角。；「75°」：只取平均，忽略差。；「168°」：將和與差直接相加。",
        "undefinedSymbol": "題幹符號與詞語已在「外角定理」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度精確。",
        "roundingConflict": "依精確資料獨立推導為「84°」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "84°與66°均為正，和為150°；相鄰內角為30°。",
        "alternateReading": "若採常見誤讀「只把外角平均分配。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，外角定理後需解和差。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會解和差問題。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「由和與差求兩角」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形 ABC 在 C 點的外角為 150°。若 ∠A 比 ∠B 大 18°，則較大的遠內角是多少度？」獨立重算：(150+18)÷2=84，較大遠內角是 84°。 正確選項「84°」。四選項核對：66°=假，選到較小角。；84°=真，設 B=y，A=y+18，2y+18=150，y=66，故 A=84°。；75°=假，只取平均，忽略差。；168°=假，將和與差直接相加。 邊界：84°與66°均為正，和為150°；相鄰內角為30°。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s013-v009",
      "unitId": "u16",
      "skillId": "angle-sum-exterior",
      "contentSha256": "c91600d27b57f14bef90cdd81e1907da93fe93069c9bdec7858286a02586b59c",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "若 E=A+B 且 A,B>0，則 E>A 且 E>B，原說法正確。",
      "derivedAnswer": "說法正確，因兩個遠內角皆為正角",
      "storedAnswer": "說法正確，因兩個遠內角皆為正角",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「說法正確，因兩個遠內角皆為正角」；另外三個選項逐一排除：「只保證大於較小的遠內角」：正數相加會大於每一個加數。；「只有銳角三角形才正確」：定理對所有非退化三角形成立。；「說法錯誤，外角可能小於遠內角」：外角是兩個正遠內角之和。",
        "undefinedSymbol": "題幹符號與詞語已在「外角定理」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無近似。",
        "roundingConflict": "依精確資料獨立推導為「說法正確，因兩個遠內角皆為正角」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "限非退化三角形，正角條件已隱含在三角形定義。",
        "alternateReading": "若採常見誤讀「只背公式而未理解正角帶來的不等關係。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，要求從定理推出一般性結論。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "理解非退化三角形內角為正。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「判斷由外角定理衍生的不等關係」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一名學生說：『因為 ∠A+∠B=∠ACD，所以 ∠ACD 一定大於 ∠A，也一定大於 ∠B。』哪項評析最正確？」獨立重算：若 E=A+B 且 A,B>0，則 E>A 且 E>B，原說法正確。 正確選項「說法正確，因兩個遠內角皆為正角」。四選項核對：只保證大於較小的遠內角=假，正數相加會大於每一個加數。；只有銳角三角形才正確=假，定理對所有非退化三角形成立。；說法正確，因兩個遠內角皆為正角=真，外角等於兩個正的遠內角之和，所以必分別大於每一個遠內角。；說法錯誤，外角可能小於遠內角=假，外角是兩個正遠內角之和。 邊界：限非退化三角形，正角條件已隱含在三角形定義。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s013-v010",
      "unitId": "u16",
      "skillId": "angle-sum-exterior",
      "contentSha256": "427fa2420faabdab0a69845724dbce99163927af9e701b2ac3519d3b3caaefdb",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "38+52=90，因此應量到直角 90°。",
      "derivedAnswer": "90°",
      "storedAnswer": "90°",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「90°」；另外三個選項逐一排除：「14°」：誤作 52−38。；「52°」：只取一個遠內角。；「128°」：把 180−52 當指定外角。",
        "undefinedSymbol": "題幹符號與詞語已在「外角定理」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度以度表示，設計值精確。",
        "roundingConflict": "依精確資料獨立推導為「90°」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "情境指定延長線與斜桿之間外角，無另一個反角。",
        "alternateReading": "若採常見誤讀「被實物方位干擾而取錯角。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，需把支架語言翻成外角模型。",
      "literacyContextNecessity": "施工者實際量測的是外部接合角，情境不可刪除；刪除後便失去延長線與斜桿的角度辨識。",
      "prerequisiteCheck": "會辨識三角形外角。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「將外角定理用於施工角度」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「屋頂支架形成三角形，施工圖標示頂端兩個遠內角為 38°、52°。工人要把底邊延長線與斜桿間的外角量到多少，才能符合設計？」獨立重算：38+52=90，因此應量到直角 90°。 正確選項「90°」。四選項核對：14°=假，誤作 52−38。；52°=假，只取一個遠內角。；128°=假，把 180−52 當指定外角。；90°=真，指定外角=38°+52°=90°。 邊界：情境指定延長線與斜桿之間外角，無另一個反角。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s013-v011",
      "unitId": "u16",
      "skillId": "angle-sum-exterior",
      "contentSha256": "e9def1ddb6ff938ed642829738dd2322b9a985eab80dff7e111127a51aa418d9",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "126−49=77，且49+77=126。",
      "derivedAnswer": "77°",
      "storedAnswer": "77°",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「77°」；另外三個選項逐一排除：「49°」：誤認兩角相等。；「103°」：算成 180−77。；「175°」：將126與49相加。",
        "undefinedSymbol": "題幹符號與詞語已在「外角定理」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度精確。",
        "roundingConflict": "依精確資料獨立推導為「77°」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "外轉角限定小於180°，排除取234°反角。",
        "alternateReading": "若採常見誤讀「把轉角與相鄰內角互補關係用錯頂點。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，必須將步道轉向語言轉成外角定理。",
      "literacyContextNecessity": "『外轉角』決定要使用延長邊形成的角；沒有步道方向資訊會有反角歧義，因此情境具必要性。",
      "prerequisiteCheck": "會從情境辨認外角。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「從實際轉角反求角度」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「步道在三角形花圃的一個頂點沿邊界延長。該處外轉角為 126°，其中一個不相鄰內角為 49°。為標示另一個不相鄰內角，應寫多少度？」獨立重算：126−49=77，且49+77=126。 正確選項「77°」。四選項核對：77°=真，另一遠內角=126°−49°=77°。；49°=假，誤認兩角相等。；103°=假，算成 180−77。；175°=假，將126與49相加。 邊界：外轉角限定小於180°，排除取234°反角。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s013-v012",
      "unitId": "u16",
      "skillId": "angle-sum-exterior",
      "contentSha256": "9ce7db71cb67a6e1b58871ec4db387d32e67bc9b6b322e97c0c6dd3d09d4fb86",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "所有基本角度關係無法同時滿足，因此不存在符合全部標示的三角形。",
      "derivedAnswer": "條件互相矛盾，沒有符合的三角形",
      "storedAnswer": "條件互相矛盾，沒有符合的三角形",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「條件互相矛盾，沒有符合的三角形」；另外三個選項逐一排除：「頂角為65°，所有條件相符」：由內角和得65°，但外角與頂角實際相差51°。；「頂角為81°，所有條件相符」：81°來自116°−35°，卻使三內角和為196°。；「右下外角為100°，所有條件相符」：右下內角64°的相鄰外角應為116°。",
        "undefinedSymbol": "題幹符號與詞語已在「外角定理」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度皆為精確值，不能以量測誤差解釋。",
        "roundingConflict": "依精確資料獨立推導為「條件互相矛盾，沒有符合的三角形」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題幹明示精確標示，故矛盾必須判為無解。",
        "alternateReading": "若採常見誤讀「只算出一個角就停止，未核對附加條件。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，要求像審圖者一樣交叉核對資料，而非只做單一步驟。",
      "literacyContextNecessity": "實務圖面可能含互相矛盾的標示，必須整體核對；刪除情境會弱化資料審核的任務意義。",
      "prerequisiteCheck": "會用內角和、補角與外角定理。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「檢查多項角度標示是否相容」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形警示牌的右下角內角為 64°，把底框向右延長後，外角比頂角大 35°。若左下角為 51°，下列判斷何者正確？」獨立重算：所有基本角度關係無法同時滿足，因此不存在符合全部標示的三角形。 正確選項「條件互相矛盾，沒有符合的三角形」。四選項核對：條件互相矛盾，沒有符合的三角形=真，內角和給頂角65°；右下外角為116°，兩者相差51°而非35°，資料不相容。；頂角為65°，所有條件相符=假，由內角和得65°，但外角與頂角實際相差51°。；頂角為81°，所有條件相符=假，81°來自116°−35°，卻使三內角和為196°。；右下外角為100°，所有條件相符=假，右下內角64°的相鄰外角應為116°。 邊界：題幹明示精確標示，故矛盾必須判為無解。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u16-fig-013-exterior-angle",
      "unitId": "u16",
      "slot": "s013",
      "title": "三角形外角與兩個遠內角",
      "altText": "三角形ABC的底邊BC向右延長至D，在C處標外角弧，A與B處標兩個遠內角。",
      "svgPath": "figures/u16/u16-fig-013-exterior-angle.svg",
      "drawingSpec": {
        "canvas": {
          "width": 360,
          "height": 240,
          "viewBox": "0 0 360 240"
        },
        "coordinateSystem": "左上角為(0,0)，x向右、y向下。",
        "geometry": "A(155,45)、B(55,180)、C(255,180)，延長至D(335,180)附箭頭；A、B角弧與C外角弧。",
        "visibleLineRules": "主要邊線使用2.5px黑色實線；輔助線使用1.5px虛線；弧線不得遮住頂點標籤。",
        "hiddenLineRules": "平面圖無隱藏邊；未畫出的延長線不得由視覺自行推定。",
        "labels": "頂點標於線外；外角文字位於C右上；遠內角置三角形內左側。",
        "tickMarksAndSymbols": "相等邊以同數量短刻痕表示；直角以小正方形；相等角以同型圓弧。",
        "units": "示意圖無長度單位，題目另有數值時以題幹為準。",
        "arrows": "只在延長線或行進方向使用箭頭。",
        "toScale": false,
        "notToScaleWarning": "圖形不按比例，請依標記與題目條件判斷。",
        "mobileLayout": "360×240畫布；最小文字14px；標籤與線段保持至少6px間距。",
        "answerLeakageControl": "圖中只呈現已知結構與定義標記，不標示題目所求數值或正確選項。"
      },
      "svgAssertions": [
        "外角</text>",
        "遠內角",
        "L335 180",
        "A</text>"
      ],
      "figureReview": {
        "decision": "pass",
        "mobileReadability": "360px寬預覽下，頂點、刻痕、直角符號與延長線箭頭仍可辨識。",
        "answerLeakage": "未顯示任何題目答案；只保留概念所需結構。",
        "geometryCheck": "已依列出的座標逐項核對端點、交點、刻痕與文字位置。",
        "reviewNote": "三角形外角與兩個遠內角已逐線檢查：A(155,45)、B(55,180)、C(255,180)，延長至D(335,180)附箭頭；A、B角弧與C外角弧。；標籤配置為頂點標於線外；外角文字位於C右上；遠內角置三角形內左側。，未依視覺比例暗示未給定量。",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "9f7752da9340f1c389e63c3333c32833f3fef2c986111306ab032f6b2480fe91"
    }
  ]
};
export default skillData;
