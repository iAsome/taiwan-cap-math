// Deterministically emitted from reviewed CHATGPT_HUMAN_AUTHORED_R1 source.
// Do not edit this staging module by hand.
export const skillData={
  "slot": "s005",
  "lecture": {
    "lectureId": "u16-s005-lecture-r1",
    "unitId": "u16",
    "numericUnitId": 16,
    "topicId": "u16-congruence",
    "skillId": "triangle-asa-aas",
    "skillOrder": 5,
    "originalLockedTitle": "ASA 與 AAS",
    "title": "ASA 與 AAS：兩角確定形狀再用一邊固定大小",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能辨認兩角及夾邊相等的 ASA 判定。",
      "能辨認兩角及非夾邊相等的 AAS 判定。",
      "能利用三角形內角和補出第三角後完成判定。",
      "能正確判斷一組邊資料如何固定原本僅由角決定的大小。"
    ],
    "prerequisiteBridge": "SSS 與 SAS 以邊資料鎖定三角形。本技能改從角出發：兩角決定第三角與形狀，但還需一組邊長固定尺度。",
    "prerequisites": [
      {
        "skillId": "triangle-sss-sas",
        "requiredLevel": "能使用先備技能「SSS 與 SAS」的核心定義與基本運算，並能說明其與本節的連結。"
      }
    ],
    "glossary": [
      {
        "term": "ASA",
        "definition": "Angle-Side-Angle，兩組對應角及其夾邊分別相等。"
      },
      {
        "term": "AAS",
        "definition": "Angle-Angle-Side，兩組對應角及一組非夾邊分別相等。"
      },
      {
        "term": "夾邊",
        "definition": "連接兩個指定角頂點的邊。"
      },
      {
        "term": "非夾邊",
        "definition": "不是兩個指定角之間的那條邊。"
      },
      {
        "term": "尺度",
        "definition": "圖形的實際大小；同角度三角形仍可有不同尺度。"
      }
    ],
    "notation": [
      {
        "symbol": "∠A=∠D、AB=DE、∠B=∠E",
        "meaning": "邊 AB、DE 夾在兩已知角之間，為 ASA。"
      },
      {
        "symbol": "∠A=∠D、∠B=∠E、AC=DF",
        "meaning": "AC、DF 不是兩已知角的夾邊，為 AAS。"
      },
      {
        "symbol": "∠C=180°−∠A−∠B",
        "meaning": "利用三角形內角和求第三角。"
      }
    ],
    "conceptNarrative": [
      "兩個角一旦固定，第三角也由內角和 180° 決定，因此三角形的形狀已固定。",
      "若沒有任何邊長，三角形仍可等比例放大或縮小，所以 AAA 不能判定全等。",
      "加入一組對應邊相等便固定尺度。若該邊夾在兩已知角之間，是 ASA；若不是，是 AAS。",
      "某些題目只直接給一對角，但可由直角、對頂角、平行線或內角和得到另一對角。",
      "ASA 與 AAS 都是有效判定，不必強行把 AAS 改名為 ASA；但可先求第三角再選最清楚的理由。"
    ],
    "formalDefinitions": [
      {
        "name": "ASA 全等判定",
        "statement": "兩組對應角及其夾邊分別相等，則兩三角形全等。"
      },
      {
        "name": "AAS 全等判定",
        "statement": "兩組對應角及一組對應非夾邊分別相等，則兩三角形全等。"
      }
    ],
    "formulas": [
      {
        "formula": "∠A=∠D、AB=DE、∠B=∠E ⇒ △ABC≅△DEF",
        "conditions": [
          "AB、DE 為兩已知角的夾邊"
        ],
        "meaning": "ASA。"
      },
      {
        "formula": "∠A=∠D、∠B=∠E、BC=EF ⇒ △ABC≅△DEF",
        "conditions": [
          "BC、EF 為非夾邊"
        ],
        "meaning": "AAS。"
      }
    ],
    "nonApplicableCases": [
      "只有兩角或三角相等但沒有邊長時，只能確定相似。",
      "角的對應若配錯，即使數值相同也會寫錯全等式。",
      "把已知邊誤認為夾邊會混淆 ASA 與 AAS，但不影響其有效性時仍應正確命名。",
      "若三個角資料和不等於 180°，題目條件無法形成三角形。",
      "不可由圖形外觀推測未標示角相等。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "標出兩組已知或可推得的相等角。",
        "check": "理由是已知、直角、對頂角、平行線或內角和？"
      },
      {
        "step": 2,
        "instruction": "找出兩角頂點之間的邊。",
        "check": "該邊就是夾邊。"
      },
      {
        "step": 3,
        "instruction": "比較題目給的相等邊位置。",
        "check": "是夾邊則 ASA，否則 AAS。"
      },
      {
        "step": 4,
        "instruction": "必要時用內角和補第三角。",
        "check": "180° 減去兩角是否計算正確？"
      },
      {
        "step": 5,
        "instruction": "按角與邊對應寫全等式。",
        "check": "每個頂點位置是否一致？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "∠A=∠D、AB=DE、∠B=∠E，判定 △ABC 與 △DEF。",
        "solutionSteps": [
          "AB 與 DE 分別連接兩個已知角的頂點。",
          "兩角及夾邊相等。"
        ],
        "answer": "△ABC≅△DEF（ASA）。"
      },
      {
        "exampleId": "L2",
        "prompt": "∠A=∠D、∠B=∠E、AC=DF，判定。",
        "solutionSteps": [
          "兩角已相等。",
          "AC、DF 不是 A-B 與 D-E 之間的夾邊。"
        ],
        "answer": "可用 AAS。"
      },
      {
        "exampleId": "L3",
        "prompt": "△ABC 與 △DEF 中，∠A=50°、∠B=70°、∠D=50°、∠E=70°，且 BC=EF。",
        "solutionSteps": [
          "兩組角分別相等。",
          "BC、EF 為非夾邊。"
        ],
        "answer": "兩三角形全等（AAS）。"
      },
      {
        "exampleId": "L4",
        "prompt": "兩直角三角形另有一銳角相等，且兩直角頂點間對應股相等，如何判定？",
        "solutionSteps": [
          "兩直角相等，另一組銳角相等。",
          "給定股連接兩已知角的頂點。"
        ],
        "answer": "可用 ASA。"
      },
      {
        "exampleId": "L5",
        "prompt": "已知 ∠A=∠D、∠B=∠E，但沒有邊長，能否判定全等？",
        "solutionSteps": [
          "可由內角和得第三角相等。",
          "仍只有 AAA，大小未固定。"
        ],
        "answer": "不能判定全等。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "兩角相等就判全等。",
        "why": "忘了相似三角形可不同大小。",
        "correction": "ASA 或 AAS 都還需要一組對應邊。"
      },
      {
        "mistake": "把所有兩角一邊題都寫 ASA。",
        "why": "未辨認夾邊。",
        "correction": "先連接兩已知角頂點，再看已知邊是否就是那一邊。"
      },
      {
        "mistake": "內角和補角時計算成 360°。",
        "why": "混用多邊形或周角。",
        "correction": "單一三角形內角和固定為 180°。"
      },
      {
        "mistake": "角相同但頂點配對錯誤。",
        "why": "只看數值。",
        "correction": "同時利用已知邊端點確認對應。"
      },
      {
        "mistake": "把 AAS 認為無效。",
        "why": "誤以為只有課本列出的 SSS、SAS、ASA。",
        "correction": "兩角已決定第三角，所以任一對應邊都能固定大小。"
      },
      {
        "mistake": "由圖猜某兩角相等。",
        "why": "忽略圖不按比例。",
        "correction": "每組角相等必須有文字、符號或定理理由。"
      }
    ],
    "selfCheck": [
      "我能指出兩已知角的夾邊嗎？",
      "是否至少有一組對應邊相等？",
      "我能用 180° 補出第三角嗎？",
      "我是否正確區分 ASA 與 AAS？",
      "全等式的角與邊對應一致嗎？"
    ],
    "summary": [
      "兩角決定三角形形狀，一邊固定大小。",
      "兩角加夾邊是 ASA；兩角加非夾邊是 AAS。",
      "AAA 仍不足以判定全等。",
      "角的來源與頂點對應都要寫清楚。"
    ],
    "connections": {
      "previous": "承接 SSS、SAS 的判定與對應方法。",
      "next": [
        "等腰三角形底角相等可用 ASA 或 SAS 證明。",
        "後續幾何證明常由角度關係補足 AAS。"
      ]
    },
    "figureReferences": [
      "u16-fig-005-asa-aas"
    ],
    "accessibilityNotes": [
      "u16-fig-005-asa-aas 的替代文字與結構描述收錄於本技能 drawing-specs.jsonl。"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u16-s005-v001",
        "u16-s005-v002",
        "u16-s005-v003",
        "u16-s005-v004",
        "u16-s005-v005",
        "u16-s005-v006",
        "u16-s005-v007",
        "u16-s005-v008",
        "u16-s005-v009",
        "u16-s005-v010",
        "u16-s005-v011",
        "u16-s005-v012"
      ],
      "constructedResponseIds": [
        "u16-s005-cr001",
        "u16-s005-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "針對「ASA 與 AAS」逐段核對定義、適用條件與反例；重新演算5個例題，確認未使用後續單元才引入的平行線或四邊形定理，並檢查圖形標記不取代文字條件。",
      "reviewVersion": "human-lecture-review-u16-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "eead0ff25a020636e02e8f4240f553762729d99c00fdd9ab6f29a1c318ec6519"
  },
  "mcQuestions": [
    {
      "questionId": "u16-s005-v001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-asa-aas",
      "skillOrder": 5,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "兩三角形有兩組對應角及其夾邊分別相等，應使用哪個判定？",
      "givenConditions": [
        "兩角與中間那條邊相等"
      ],
      "target": "辨認 ASA",
      "choices": [
        "AAS",
        "SAS",
        "AAA",
        "ASA"
      ],
      "answerIndex": 3,
      "independentSolution": "題目明示邊位於兩角之間，資料順序 A-S-A，故 ASA。",
      "explanation": "Angle-Side-Angle 對應兩角與夾邊。 確認兩角。 找兩角之間的邊。 套 ASA。",
      "steps": [
        "確認兩角。",
        "找兩角之間的邊。",
        "套 ASA。"
      ],
      "optionAnalysis": [
        {
          "choice": "AAS",
          "truth": false,
          "reason": "已知邊是夾邊，不是非夾邊。"
        },
        {
          "choice": "SAS",
          "truth": false,
          "reason": "只給一組邊。"
        },
        {
          "choice": "AAA",
          "truth": false,
          "reason": "多了一組邊，且 AAA 不是全等判定。"
        },
        {
          "choice": "ASA",
          "truth": true,
          "reason": "Angle-Side-Angle 對應兩角與夾邊。"
        }
      ],
      "misconceptionTarget": "不辨認夾邊而混淆 ASA、AAS。",
      "prerequisiteCheck": "知道角與邊的基本名稱。",
      "estimatedTimeSec": "50",
      "unitAndRoundingCheck": "無量值與單位。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "夾邊已明示，無位置歧義。",
      "difficultyReason": "基礎題，直接辨認判定。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認 ASA。",
      "tags": [
        "空間與形狀",
        "ASA 與 AAS",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "8ae927d94b11cbaa9b5a1b19640848f117b40e35fb06a429a98742709da5ca33"
    },
    {
      "questionId": "u16-s005-v002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-asa-aas",
      "skillOrder": 5,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "∠A=∠D、∠B=∠E、AC=DF。這組資料屬於哪一種判定？",
      "givenConditions": [
        "AC、DF 不是兩已知角 A-B、D-E 之間的邊"
      ],
      "target": "辨認 AAS",
      "choices": [
        "ASA",
        "SSS",
        "AAS",
        "AAA"
      ],
      "answerIndex": 2,
      "independentSolution": "兩組角固定形狀，非夾邊相等固定尺度，符合 AAS。",
      "explanation": "兩角相等且給的是非夾邊 AC、DF，所以是 AAS。 找 A、B 間夾邊 AB。 比較給定邊 AC。 不是夾邊，判為 AAS。",
      "steps": [
        "找 A、B 間夾邊 AB。",
        "比較給定邊 AC。",
        "不是夾邊，判為 AAS。"
      ],
      "optionAnalysis": [
        {
          "choice": "ASA",
          "truth": false,
          "reason": "夾邊應是 AB、DE。"
        },
        {
          "choice": "SSS",
          "truth": false,
          "reason": "只有一組邊。"
        },
        {
          "choice": "AAS",
          "truth": true,
          "reason": "兩角相等且給的是非夾邊 AC、DF，所以是 AAS。"
        },
        {
          "choice": "AAA",
          "truth": false,
          "reason": "題目包含一組邊。"
        }
      ],
      "misconceptionTarget": "只要兩角一邊就一律稱 ASA。",
      "prerequisiteCheck": "會辨認夾邊。",
      "estimatedTimeSec": "65",
      "unitAndRoundingCheck": "等角等邊皆精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "端點對應明示，AC、DF 唯一屬非夾邊。",
      "difficultyReason": "基礎題，辨認資料位置。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認 AAS。",
      "tags": [
        "空間與形狀",
        "ASA 與 AAS",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "2b816f6ab9e4ce9820b1c42e45f643a56844b33852b32753fedd294bd395d105"
    },
    {
      "questionId": "u16-s005-v003",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-asa-aas",
      "skillOrder": 5,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "△ABC 中 ∠A=50°、∠B=70°，則 ∠C 為多少？",
      "givenConditions": [
        "三角形內角和為 180°"
      ],
      "target": "補出第三角",
      "choices": [
        "50°",
        "70°",
        "120°",
        "60°"
      ],
      "answerIndex": 3,
      "independentSolution": "三角形三內角和 180°，故剩餘角為 60°。",
      "explanation": "∠C=180°−50°−70°=60°。 先算 50°+70°=120°。 180°−120°=60°。",
      "steps": [
        "先算 50°+70°=120°。",
        "180°−120°=60°。"
      ],
      "optionAnalysis": [
        {
          "choice": "50°",
          "truth": false,
          "reason": "把第三角誤設成與 ∠A 相等。"
        },
        {
          "choice": "70°",
          "truth": false,
          "reason": "把第三角誤設成與 ∠B 相等。"
        },
        {
          "choice": "120°",
          "truth": false,
          "reason": "只把兩已知角相加，沒有用 180° 減。"
        },
        {
          "choice": "60°",
          "truth": true,
          "reason": "∠C=180°−50°−70°=60°。"
        }
      ],
      "misconceptionTarget": "把已知角和當成未知角。",
      "prerequisiteCheck": "會做角度加減。",
      "estimatedTimeSec": "55",
      "unitAndRoundingCheck": "角度皆精確到整度，無四捨五入。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "50+70<180，三角形角度資料可成立。",
      "difficultyReason": "基礎題，單一步驟內角和。",
      "literacyContextNecessity": null,
      "authoringIntent": "用內角和補角。",
      "tags": [
        "空間與形狀",
        "ASA 與 AAS",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "20dfe1047d1f1d318f94d7d432dda4e4b6c186fe65bafe30500423ec27148372"
    },
    {
      "questionId": "u16-s005-v004",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-asa-aas",
      "skillOrder": 5,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "∠A=∠D、AB=DE、∠B=∠E。可得到哪個結論？",
      "givenConditions": [
        "AB、DE 為兩已知角的夾邊"
      ],
      "target": "套用 ASA",
      "choices": [
        "△ABC≅△DFE（ASA）",
        "只能判定相似",
        "△ABC≅△DEF（ASA）",
        "不能判定，因缺第三角"
      ],
      "answerIndex": 2,
      "independentSolution": "∠A-D、∠B-E，夾邊 AB-DE，符合 ASA；剩餘 C-F。",
      "explanation": "兩角及夾邊相等，且頂點順序 A-D、B-E、C-F，ASA 全等。 核對 AB 連接已知角 A、B。 核對 DE 連接 D、E。 按對應寫全等式。",
      "steps": [
        "核對 AB 連接已知角 A、B。",
        "核對 DE 連接 D、E。",
        "按對應寫全等式。"
      ],
      "optionAnalysis": [
        {
          "choice": "△ABC≅△DFE（ASA）",
          "truth": false,
          "reason": "此排列使 B 對 F，與 ∠B=∠E 不符。"
        },
        {
          "choice": "只能判定相似",
          "truth": false,
          "reason": "一組邊已固定大小。"
        },
        {
          "choice": "△ABC≅△DEF（ASA）",
          "truth": true,
          "reason": "兩角及夾邊相等，且頂點順序 A-D、B-E、C-F，ASA 全等。"
        },
        {
          "choice": "不能判定，因缺第三角",
          "truth": false,
          "reason": "第三角可由內角和決定，不需另給。"
        }
      ],
      "misconceptionTarget": "忽略一組邊已足以固定尺度。",
      "prerequisiteCheck": "會用 ASA 與頂點配對。",
      "estimatedTimeSec": "85",
      "unitAndRoundingCheck": "無數值單位。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "第三角自動相等但不需先算；全等式順序唯一。",
      "difficultyReason": "標準題，判定並寫正確全等式。",
      "literacyContextNecessity": null,
      "authoringIntent": "運用 ASA。",
      "tags": [
        "空間與形狀",
        "ASA 與 AAS",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "946402a0bd80954d5aeff72387f61e950e82c9ffd26fee14b70d6dad15f58f26"
    },
    {
      "questionId": "u16-s005-v005",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-asa-aas",
      "skillOrder": 5,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "兩個三角形各有一個直角與一個 35° 角，且兩個直角頂點與 35° 頂點之間的邊相等。最直接的判定是什麼？",
      "givenConditions": [
        "給定邊夾在兩個已知角之間"
      ],
      "target": "辨認 ASA",
      "choices": [
        "AAS",
        "ASA",
        "RHS",
        "AAA"
      ],
      "answerIndex": 1,
      "independentSolution": "兩組角與中間邊均對應相等，ASA 足夠。",
      "explanation": "90°、35° 兩角及其夾邊分別相等，符合 ASA。 配對直角與 35° 角。 確認給定邊連接兩角頂點。",
      "steps": [
        "配對直角與 35° 角。",
        "確認給定邊連接兩角頂點。"
      ],
      "optionAnalysis": [
        {
          "choice": "AAS",
          "truth": false,
          "reason": "給定邊是夾邊。"
        },
        {
          "choice": "ASA",
          "truth": true,
          "reason": "90°、35° 兩角及其夾邊分別相等，符合 ASA。"
        },
        {
          "choice": "RHS",
          "truth": false,
          "reason": "未給斜邊與一股的對應資料。"
        },
        {
          "choice": "AAA",
          "truth": false,
          "reason": "有一組邊且可判全等。"
        }
      ],
      "misconceptionTarget": "見直角就不分資料直接選 RHS。",
      "prerequisiteCheck": "知道直角只是角資料之一。",
      "estimatedTimeSec": "95",
      "unitAndRoundingCheck": "角度與長度分別比較同類量，無單位混算。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "第三角為 55°，資料一致；不需斜邊。",
      "difficultyReason": "標準題，需在 ASA 與 RHS 中選最直接判定。",
      "literacyContextNecessity": null,
      "authoringIntent": "用 ASA 處理直角情形。",
      "tags": [
        "空間與形狀",
        "ASA 與 AAS",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "49f5a1fbc04534078a862c613d5c40e247971f0d8b8fa967d72b730649e8a09b"
    },
    {
      "questionId": "u16-s005-v006",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-asa-aas",
      "skillOrder": 5,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "若兩三角形只有 ∠A=∠D、∠B=∠E，沒有任何邊長資料，下列何者正確？",
      "givenConditions": [
        "兩三角形皆為非退化三角形"
      ],
      "target": "辨認 AAA 限制",
      "choices": [
        "只能保證第三角相等與形狀相似，不能判定全等",
        "可用 AAS",
        "可用 ASA",
        "一定不相似"
      ],
      "answerIndex": 0,
      "independentSolution": "兩角決定形狀，沒有邊長固定大小，所以不能判全等。",
      "explanation": "第三角由 180° 自動相等，但尺度仍可任意放大縮小。 由兩角相等得第三角相等。 檢查沒有任何邊資料。 結論為相似而非全等。",
      "steps": [
        "由兩角相等得第三角相等。",
        "檢查沒有任何邊資料。",
        "結論為相似而非全等。"
      ],
      "optionAnalysis": [
        {
          "choice": "只能保證第三角相等與形狀相似，不能判定全等",
          "truth": true,
          "reason": "第三角由 180° 自動相等，但尺度仍可任意放大縮小。"
        },
        {
          "choice": "可用 AAS",
          "truth": false,
          "reason": "AAS 還需一組邊。"
        },
        {
          "choice": "可用 ASA",
          "truth": false,
          "reason": "ASA 也需一組邊。"
        },
        {
          "choice": "一定不相似",
          "truth": false,
          "reason": "兩角相等已足以相似。"
        }
      ],
      "misconceptionTarget": "以為第三角補出後三組角就可全等。",
      "prerequisiteCheck": "知道全等需固定尺度。",
      "estimatedTimeSec": "90",
      "unitAndRoundingCheck": "無單位或近似。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目明示沒有邊長，排除隱含尺度。",
      "difficultyReason": "標準題，理解兩角充分於相似但不足於全等。",
      "literacyContextNecessity": null,
      "authoringIntent": "排除 AAA。",
      "tags": [
        "空間與形狀",
        "ASA 與 AAS",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "65a02e72dcfd2d61a72bc600c611b3344b85aeeb145232e1c018f1a83eaba95a"
    },
    {
      "questionId": "u16-s005-v007",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-asa-aas",
      "skillOrder": 5,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "已知 ∠A=∠D、∠C=∠F、BC=EF。若要正確寫全等式，應為哪一個？",
      "givenConditions": [
        "BC 對應 EF"
      ],
      "target": "由兩角與非夾邊配對頂點",
      "choices": [
        "△ABC≅△DFE",
        "△ABC≅△FDE",
        "△ABC≅△DEF",
        "△ABC≅△EFD"
      ],
      "answerIndex": 2,
      "independentSolution": "A↔D、B↔E、C↔F，故 △ABC≅△DEF（AAS）。",
      "explanation": "角條件給 A-D、C-F，剩餘 B-E；邊 BC 正好對 EF。 先固定 A-D、C-F。 剩餘頂點 B-E。 按 ABC 對 DEF 書寫。",
      "steps": [
        "先固定 A-D、C-F。",
        "剩餘頂點 B-E。",
        "按 ABC 對 DEF 書寫。"
      ],
      "optionAnalysis": [
        {
          "choice": "△ABC≅△DFE",
          "truth": false,
          "reason": "此式 B 對 F、C 對 E，與 BC-EF 雖端點集合相同，但 ∠C 應對 ∠E 而非 ∠F。"
        },
        {
          "choice": "△ABC≅△FDE",
          "truth": false,
          "reason": "A 應對 D，不是 F。"
        },
        {
          "choice": "△ABC≅△DEF",
          "truth": true,
          "reason": "角條件給 A-D、C-F，剩餘 B-E；邊 BC 正好對 EF。"
        },
        {
          "choice": "△ABC≅△EFD",
          "truth": false,
          "reason": "A 與 D 的對應被破壞。"
        }
      ],
      "misconceptionTarget": "只用邊的端點集合，忽略角頂點定向。",
      "prerequisiteCheck": "會綜合角與邊配對。",
      "estimatedTimeSec": "115",
      "unitAndRoundingCheck": "純符號證明，無單位。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "角配對已固定方向，排除交換 E、F 的另一排列。",
      "difficultyReason": "進階題，從多項條件重建唯一對應。",
      "literacyContextNecessity": null,
      "authoringIntent": "校對 AAS 全等式。",
      "tags": [
        "空間與形狀",
        "ASA 與 AAS",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "718aceda26c29e5ea57304f179cef7d2c8c498a1ae31b2303bcc9ef014f4c833"
    },
    {
      "questionId": "u16-s005-v008",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-asa-aas",
      "skillOrder": 5,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "△ABC 與 △DEF 中，∠A=∠D、∠B=∠E，且 BC=EF。若 ∠C=65°，則 ∠F 為多少？",
      "givenConditions": [
        "兩三角形可由 AAS 判定全等"
      ],
      "target": "由全等讀取對應角",
      "choices": [
        "50°",
        "65°",
        "115°",
        "無法判斷"
      ],
      "answerIndex": 1,
      "independentSolution": "A-D、B-E，故 C-F；全等對應角相等，∠F=65°。",
      "explanation": "兩角與非夾邊相等使 △ABC≅△DEF，C 對 F，所以角度相同。 用 AAS 證全等。 依剩餘頂點得 C-F。 讀出 ∠F=∠C。",
      "steps": [
        "用 AAS 證全等。",
        "依剩餘頂點得 C-F。",
        "讀出 ∠F=∠C。"
      ],
      "optionAnalysis": [
        {
          "choice": "50°",
          "truth": false,
          "reason": "沒有資料支持。"
        },
        {
          "choice": "65°",
          "truth": true,
          "reason": "兩角與非夾邊相等使 △ABC≅△DEF，C 對 F，所以角度相同。"
        },
        {
          "choice": "115°",
          "truth": false,
          "reason": "把內外角互補誤用。"
        },
        {
          "choice": "無法判斷",
          "truth": false,
          "reason": "AAS 已確定 C 對 F。"
        }
      ],
      "misconceptionTarget": "只看到未直接給第三角就認為未知。",
      "prerequisiteCheck": "會先判全等再用對應角。",
      "estimatedTimeSec": "110",
      "unitAndRoundingCheck": "角度為精確整度，無近似。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "65° 介於 0°與180°；其餘角資料雖未列數值不影響對應結論。",
      "difficultyReason": "進階題，兩階段推理。",
      "literacyContextNecessity": null,
      "authoringIntent": "由 AAS 推對應角。",
      "tags": [
        "空間與形狀",
        "ASA 與 AAS",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "981e731eedcf035a1222d29037bfc4cf4d6bff50be6417ee7aa9ac3ba71d4c1c"
    },
    {
      "questionId": "u16-s005-v009",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-asa-aas",
      "skillOrder": 5,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "兩三角形的角分別為 30°、70°、80°，且各自最短邊都長 4。能否判定全等？",
      "givenConditions": [
        "最短邊都對最小角 30°"
      ],
      "target": "由角排序確認對應邊後使用 AAS/ASA",
      "choices": [
        "不能，因只知道 AAA",
        "不能，因不知道哪一邊對應",
        "能，但理由是 SSS",
        "能，三角對應相等且一組對應邊相等"
      ],
      "answerIndex": 3,
      "independentSolution": "最短邊的位置由最小角唯一決定，因此長 4 的邊是對應邊；AAS 或 ASA 可完成全等。",
      "explanation": "三角相同，且最短邊均對 30° 並相等為 4，故一組對應邊固定尺度。 按角度 30、70、80 配對頂點。 最短邊對 30°，兩圖該邊皆 4。 使用兩角一邊判全等。",
      "steps": [
        "按角度 30、70、80 配對頂點。",
        "最短邊對 30°，兩圖該邊皆 4。",
        "使用兩角一邊判全等。"
      ],
      "optionAnalysis": [
        {
          "choice": "不能，因只知道 AAA",
          "truth": false,
          "reason": "另有一組對應最短邊長 4。"
        },
        {
          "choice": "不能，因不知道哪一邊對應",
          "truth": false,
          "reason": "最短邊必對 30°，對應唯一。"
        },
        {
          "choice": "能，但理由是 SSS",
          "truth": false,
          "reason": "只知道一組邊，不是 SSS。"
        },
        {
          "choice": "能，三角對應相等且一組對應邊相等",
          "truth": true,
          "reason": "三角相同，且最短邊均對 30° 並相等為 4，故一組對應邊固定尺度。"
        }
      ],
      "misconceptionTarget": "認為只要題幹先提三角就是 AAA，忽略後續邊資料。",
      "prerequisiteCheck": "會用大角對大邊確定邊的位置。",
      "estimatedTimeSec": "140",
      "unitAndRoundingCheck": "長度同單位且精確；角和 180°。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "若有等角可能最短邊不唯一，但本題三角互異，對應明確。",
      "difficultyReason": "進階題，需跨用邊角關係確認一組邊的對應。",
      "literacyContextNecessity": null,
      "authoringIntent": "從角排序建立 AAS。",
      "tags": [
        "空間與形狀",
        "ASA 與 AAS",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "6e15816f47a851f1b95ad7a839d0479c3afaf03a2ffa6b19198b689572efc35f"
    },
    {
      "questionId": "u16-s005-v010",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-asa-aas",
      "skillOrder": 5,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "測量員在河兩岸建立兩個三角測量圖，量得兩圖各有 90°、42° 兩角，且連接這兩角頂點的基線都為 25 公尺。兩圖是否全等？",
      "givenConditions": [
        "基線正是兩已知角的夾邊"
      ],
      "target": "用測量資料判定",
      "choices": [
        "是，可用 ASA 判定全等",
        "否，因第三角未量",
        "是，但只能用 SSS",
        "否，因兩圖可能大小不同"
      ],
      "answerIndex": 0,
      "independentSolution": "兩圖的角度形狀相同且同一對應夾邊長 25，故大小也相同。",
      "explanation": "兩角 90°、42° 與夾邊 25 公尺逐一相等，ASA。 將測量值配對。 確認基線連接兩已知角。 套用 ASA。",
      "steps": [
        "將測量值配對。",
        "確認基線連接兩已知角。",
        "套用 ASA。"
      ],
      "optionAnalysis": [
        {
          "choice": "是，可用 ASA 判定全等",
          "truth": true,
          "reason": "兩角 90°、42° 與夾邊 25 公尺逐一相等，ASA。"
        },
        {
          "choice": "否，因第三角未量",
          "truth": false,
          "reason": "第三角由內角和自動為 48°。"
        },
        {
          "choice": "是，但只能用 SSS",
          "truth": false,
          "reason": "沒有三組邊。"
        },
        {
          "choice": "否，因兩圖可能大小不同",
          "truth": false,
          "reason": "25 公尺夾邊已固定尺度。"
        }
      ],
      "misconceptionTarget": "忽略基線是夾邊，誤判仍可縮放。",
      "prerequisiteCheck": "會把測量基線辨認為夾邊。",
      "estimatedTimeSec": "120",
      "unitAndRoundingCheck": "兩基線皆公尺，角度皆度；數值按題目視為精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "第三角 48° 合法；河岸方向不同不影響全等。",
      "difficultyReason": "素養題，基線與角度是三角測量能否複製的核心。",
      "literacyContextNecessity": "情境中的基線位置決定 ASA，而非可刪除的裝飾。",
      "authoringIntent": "以 ASA 檢核測量圖。",
      "tags": [
        "空間與形狀",
        "ASA 與 AAS",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "4980be9b3139d5f2d65ebbd2af0ad5b5cadecbf28e63d0963b89d8e485a3b305"
    },
    {
      "questionId": "u16-s005-v011",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-asa-aas",
      "skillOrder": 5,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "兩個零件孔位形成三角形。檢驗表只列出兩個角各為 45°、65°，以及一條長 20 毫米的邊，但沒有說明這條邊位於哪兩個角之間。下列審查意見何者最佳？",
      "givenConditions": [
        "兩零件的資料表格式相同但邊的位置未標"
      ],
      "target": "判斷資訊是否足以建立對應",
      "choices": [
        "需補明 20 毫米邊的端點或對應位置，否則無法確認兩零件用的是同一組對應邊",
        "不需補充，任何一邊 20 都一定全等",
        "只要角和 110° 就能全等",
        "把 20 改成 25 就可解決"
      ],
      "answerIndex": 0,
      "independentSolution": "45°、65°、70° 的各對邊比例不同；20 若放在不同邊，整體尺度不同，不能比較。",
      "explanation": "兩角一邊可判全等的前提是該邊在兩圖中互相對應；未標端點時可能是夾邊或不同非夾邊。 先算第三角 70°，三角皆不同。 辨認三條邊分別對不同角。 要求標明 20 邊位置。",
      "steps": [
        "先算第三角 70°，三角皆不同。",
        "辨認三條邊分別對不同角。",
        "要求標明 20 邊位置。"
      ],
      "optionAnalysis": [
        {
          "choice": "需補明 20 毫米邊的端點或對應位置，否則無法確認兩零件用的是同一組對應邊",
          "truth": true,
          "reason": "兩角一邊可判全等的前提是該邊在兩圖中互相對應；未標端點時可能是夾邊或不同非夾邊。"
        },
        {
          "choice": "不需補充，任何一邊 20 都一定全等",
          "truth": false,
          "reason": "在三角不等時，不同位置的 20 邊會給不同尺度。"
        },
        {
          "choice": "只要角和 110° 就能全等",
          "truth": false,
          "reason": "兩角無邊位置仍不足以固定同一對應。"
        },
        {
          "choice": "把 20 改成 25 就可解決",
          "truth": false,
          "reason": "長度數值不是問題，位置標示才是。"
        }
      ],
      "misconceptionTarget": "只看『兩角一邊』數量，不核對對應位置。",
      "prerequisiteCheck": "會理解 ASA/AAS 需對應邊。",
      "estimatedTimeSec": "150",
      "unitAndRoundingCheck": "20 毫米單位一致，問題不是換算或精度。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "三角互異使三邊位置不等價；若等邊或等腰情形可能有對稱，但本題無。",
      "difficultyReason": "素養題，品質資料的標註完整性直接影響判定。",
      "literacyContextNecessity": "零件是否可互換取決於 20 毫米邊的實際端點，情境必要。",
      "authoringIntent": "審查孔位規格。",
      "tags": [
        "空間與形狀",
        "ASA 與 AAS",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "05ffc9d31d0c4b69a9b71d9604a1d7efec5a1a765d25261984ea83ccef11213b"
    },
    {
      "questionId": "u16-s005-v012",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-asa-aas",
      "skillOrder": 5,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "兩幅地圖三角區域各標出兩角 55°、75°。第一幅在 55°與75°頂點間的邊長 10 公里；第二幅標示 10 公里的邊卻對著 55°。兩區域必定全等嗎？",
      "givenConditions": [
        "第一幅 10 公里為兩已知角夾邊",
        "第二幅 10 公里為 55° 的對邊"
      ],
      "target": "檢查相同數值是否位於對應邊",
      "choices": [
        "必定全等，因都是兩角一邊",
        "不必然全等，因兩幅的 10 公里邊不是同一對應位置",
        "必定全等，因第三角都 50°",
        "必定不可能形成三角形"
      ],
      "answerIndex": 1,
      "independentSolution": "同一相似形中對 55° 的邊比對 50° 的邊長；若兩者都被設為 10，兩圖尺度不同，故不必然全等。",
      "explanation": "兩圖角組相同，但把相同長度放在不同對邊會得到不同縮放尺度。 補第三角 50°。 第一幅 10 邊對 50°。 第二幅 10 邊對 55°。 非對應邊相等不能直接判全等。",
      "steps": [
        "補第三角 50°。",
        "第一幅 10 邊對 50°。",
        "第二幅 10 邊對 55°。",
        "非對應邊相等不能直接判全等。"
      ],
      "optionAnalysis": [
        {
          "choice": "必定全等，因都是兩角一邊",
          "truth": false,
          "reason": "邊必須互相對應。"
        },
        {
          "choice": "不必然全等，因兩幅的 10 公里邊不是同一對應位置",
          "truth": true,
          "reason": "兩圖角組相同，但把相同長度放在不同對邊會得到不同縮放尺度。"
        },
        {
          "choice": "必定全等，因第三角都 50°",
          "truth": false,
          "reason": "AAA 仍需同一對應邊固定尺度。"
        },
        {
          "choice": "必定不可能形成三角形",
          "truth": false,
          "reason": "55+75+50=180，可形成。"
        }
      ],
      "misconceptionTarget": "只看數值相同，忽略邊的幾何位置。",
      "prerequisiteCheck": "會由角辨認對邊與夾邊。",
      "estimatedTimeSec": "160",
      "unitAndRoundingCheck": "兩長度都公里且精確，無換算；差異來自位置。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "『不必然』比『一定不全等』精確：特殊數值不會改變互異角下的邊比例，但結論核心是資料不能作同一對應判定。",
      "difficultyReason": "素養題，需審查地圖標示位置。",
      "literacyContextNecessity": "地圖測量必須將同一對應邊比較，情境不可刪除。",
      "authoringIntent": "辨認非對應尺度資料。",
      "tags": [
        "空間與形狀",
        "ASA 與 AAS",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "68a17a51e38a997abe1d512c6f4e6c5699be9b01135d929006a079155c2e26c4"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u16-s005-cr001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-asa-aas",
      "skillOrder": 5,
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-005-asa-aas",
      "prompt": "△ABC 與 △DEF 中，∠A=∠D、∠B=∠E、AB=DE。證明兩三角形全等，並判定這是ASA還是AAS。",
      "requiredWork": [
        "確認AB、DE分別位於兩已知角之間。",
        "寫出全等式。",
        "說明判定名稱。"
      ],
      "fullCreditSolution": [
        "AB是∠A與∠B的夾邊；DE是∠D與∠E的夾邊。",
        "兩角及其夾邊相等，所以△ABC≅△DEF（ASA）。"
      ],
      "alternativeSolutions": [
        "亦可先由第三角相等改寫成其他等價判定，但最直接是ASA。"
      ],
      "reasoningSteps": [
        "AB是∠A與∠B的夾邊；DE是∠D與∠E的夾邊。",
        "兩角及其夾邊相等，所以△ABC≅△DEF（ASA）。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確指出夾邊、寫全等式並判為ASA。"
        },
        {
          "score": 2,
          "criteria": "全等結論與ASA正確，但未清楚說明AB是夾邊。"
        },
        {
          "score": 1,
          "criteria": "只寫兩角一邊所以全等，未分ASA/AAS或順序不完整。"
        },
        {
          "score": 0,
          "criteria": "判為SAS/SSS，或認為AAA足夠全等。"
        }
      ],
      "partialCreditRules": [
        "全等結論與ASA正確，但未清楚說明AB是夾邊。",
        "只寫兩角一邊所以全等，未分ASA/AAS或順序不完整。"
      ],
      "followThroughPolicy": "若把ASA誤寫AAS但完整辨認AB位於兩角之間，概念文字與名稱矛盾，最高2分。",
      "unitAndNotationRules": "全等式頂點順序A↔D、B↔E、C↔F。",
      "answerOnlyPolicy": "只寫『ASA』無證明，最多1分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "把角的公共邊與夾邊概念混淆。",
        "以AAA代替全等判定。"
      ],
      "independentReview": {
        "derivedResult": "△ABC≅△DEF（ASA）。",
        "ambiguity": "兩已知角及線段AB/DE的相對位置明確。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "7459749e81abd5f6e9e8d55c59c3d402abd8e6f9cb75b84bf0559901b15ef9ad"
    },
    {
      "questionId": "u16-s005-cr002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-asa-aas",
      "skillOrder": 5,
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "△PQR 與 △XYZ 中，∠P=∠X=45°、∠Q=∠Y=70°、PR=XZ=8 cm。證明全等並求∠R與∠Z。",
      "requiredWork": [
        "先由內角和求第三角。",
        "辨認PR/XZ不是兩已知角P、Q之夾邊。",
        "使用AAS。"
      ],
      "fullCreditSolution": [
        "∠R=180°−45°−70°=65°，同理∠Z=65°。",
        "PR與XZ是對應邊，配合∠P=∠X、∠Q=∠Y，屬AAS，故△PQR≅△XYZ。"
      ],
      "alternativeSolutions": [
        "可先以AAS證全等，再由對應角相等與內角和求R、Z。"
      ],
      "reasoningSteps": [
        "∠R=180°−45°−70°=65°，同理∠Z=65°。",
        "PR與XZ是對應邊，配合∠P=∠X、∠Q=∠Y，屬AAS，故△PQR≅△XYZ。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "算得R=Z=65°、正確辨認AAS、全等式順序正確。"
        },
        {
          "score": 2,
          "criteria": "角度與全等正確，但ASA/AAS名稱誤寫或夾邊說明不足。"
        },
        {
          "score": 1,
          "criteria": "只求出65°或只完成全等判定。"
        },
        {
          "score": 0,
          "criteria": "把第三角算錯且無有效全等理由，或使用AAA。"
        }
      ],
      "partialCreditRules": [
        "角度與全等正確，但ASA/AAS名稱誤寫或夾邊說明不足。",
        "只求出65°或只完成全等判定。"
      ],
      "followThroughPolicy": "若第三角單一算術錯但仍正確指出兩角與非夾邊構成AAS，可給2分。",
      "unitAndNotationRules": "角度須附°，PR與XZ單位cm；全等式P↔X、Q↔Y、R↔Z。",
      "answerOnlyPolicy": "只答65°最多1分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "把PR誤認為P、Q之間的夾邊。",
        "45+70後忘記由180扣除。"
      ],
      "independentReview": {
        "derivedResult": "∠R=∠Z=65°，△PQR≅△XYZ（AAS）。",
        "ambiguity": "PR連接P與R，確非P、Q兩已知角的夾邊PQ。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "8e3d1e9550156e71ca7aab95021ed0a6751fa52f35b70a3bdc0825fe2754cf33"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u16-s005-v001",
      "unitId": "u16",
      "skillId": "triangle-asa-aas",
      "contentSha256": "8ae927d94b11cbaa9b5a1b19640848f117b40e35fb06a429a98742709da5ca33",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "題目明示邊位於兩角之間，資料順序 A-S-A，故 ASA。",
      "derivedAnswer": "ASA",
      "storedAnswer": "ASA",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「ASA」；另外三個選項逐一排除：「AAS」：已知邊是夾邊，不是非夾邊。；「SAS」：只給一組邊。；「AAA」：多了一組邊，且 AAA 不是全等判定。",
        "undefinedSymbol": "題幹符號與詞語已在「ASA 與 AAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無量值與單位。",
        "roundingConflict": "依精確資料獨立推導為「ASA」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "夾邊已明示，無位置歧義。",
        "alternateReading": "若採常見誤讀「不辨認夾邊而混淆 ASA、AAS。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，直接辨認判定。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "知道角與邊的基本名稱。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「辨認 ASA」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩三角形有兩組對應角及其夾邊分別相等，應使用哪個判定？」獨立重算：題目明示邊位於兩角之間，資料順序 A-S-A，故 ASA。 正確選項「ASA」。四選項核對：AAS=假，已知邊是夾邊，不是非夾邊。；SAS=假，只給一組邊。；AAA=假，多了一組邊，且 AAA 不是全等判定。；ASA=真，Angle-Side-Angle 對應兩角與夾邊。 邊界：夾邊已明示，無位置歧義。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s005-v002",
      "unitId": "u16",
      "skillId": "triangle-asa-aas",
      "contentSha256": "2b816f6ab9e4ce9820b1c42e45f643a56844b33852b32753fedd294bd395d105",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "兩組角固定形狀，非夾邊相等固定尺度，符合 AAS。",
      "derivedAnswer": "AAS",
      "storedAnswer": "AAS",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「AAS」；另外三個選項逐一排除：「ASA」：夾邊應是 AB、DE。；「SSS」：只有一組邊。；「AAA」：題目包含一組邊。",
        "undefinedSymbol": "題幹符號與詞語已在「ASA 與 AAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "等角等邊皆精確。",
        "roundingConflict": "依精確資料獨立推導為「AAS」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "端點對應明示，AC、DF 唯一屬非夾邊。",
        "alternateReading": "若採常見誤讀「只要兩角一邊就一律稱 ASA。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，辨認資料位置。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會辨認夾邊。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「辨認 AAS」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「∠A=∠D、∠B=∠E、AC=DF。這組資料屬於哪一種判定？」獨立重算：兩組角固定形狀，非夾邊相等固定尺度，符合 AAS。 正確選項「AAS」。四選項核對：ASA=假，夾邊應是 AB、DE。；SSS=假，只有一組邊。；AAS=真，兩角相等且給的是非夾邊 AC、DF，所以是 AAS。；AAA=假，題目包含一組邊。 邊界：端點對應明示，AC、DF 唯一屬非夾邊。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s005-v003",
      "unitId": "u16",
      "skillId": "triangle-asa-aas",
      "contentSha256": "20dfe1047d1f1d318f94d7d432dda4e4b6c186fe65bafe30500423ec27148372",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "三角形三內角和 180°，故剩餘角為 60°。",
      "derivedAnswer": "60°",
      "storedAnswer": "60°",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「60°」；另外三個選項逐一排除：「50°」：把第三角誤設成與 ∠A 相等。；「70°」：把第三角誤設成與 ∠B 相等。；「120°」：只把兩已知角相加，沒有用 180° 減。",
        "undefinedSymbol": "題幹符號與詞語已在「ASA 與 AAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度皆精確到整度，無四捨五入。",
        "roundingConflict": "依精確資料獨立推導為「60°」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "50+70<180，三角形角度資料可成立。",
        "alternateReading": "若採常見誤讀「把已知角和當成未知角。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，單一步驟內角和。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會做角度加減。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「補出第三角」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「△ABC 中 ∠A=50°、∠B=70°，則 ∠C 為多少？」獨立重算：三角形三內角和 180°，故剩餘角為 60°。 正確選項「60°」。四選項核對：50°=假，把第三角誤設成與 ∠A 相等。；70°=假，把第三角誤設成與 ∠B 相等。；120°=假，只把兩已知角相加，沒有用 180° 減。；60°=真，∠C=180°−50°−70°=60°。 邊界：50+70<180，三角形角度資料可成立。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s005-v004",
      "unitId": "u16",
      "skillId": "triangle-asa-aas",
      "contentSha256": "946402a0bd80954d5aeff72387f61e950e82c9ffd26fee14b70d6dad15f58f26",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "∠A-D、∠B-E，夾邊 AB-DE，符合 ASA；剩餘 C-F。",
      "derivedAnswer": "△ABC≅△DEF（ASA）",
      "storedAnswer": "△ABC≅△DEF（ASA）",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「△ABC≅△DEF（ASA）」；另外三個選項逐一排除：「△ABC≅△DFE（ASA）」：此排列使 B 對 F，與 ∠B=∠E 不符。；「只能判定相似」：一組邊已固定大小。；「不能判定，因缺第三角」：第三角可由內角和決定，不需另給。",
        "undefinedSymbol": "題幹符號與詞語已在「ASA 與 AAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無數值單位。",
        "roundingConflict": "依精確資料獨立推導為「△ABC≅△DEF（ASA）」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "第三角自動相等但不需先算；全等式順序唯一。",
        "alternateReading": "若採常見誤讀「忽略一組邊已足以固定尺度。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，判定並寫正確全等式。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會用 ASA 與頂點配對。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「套用 ASA」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「∠A=∠D、AB=DE、∠B=∠E。可得到哪個結論？」獨立重算：∠A-D、∠B-E，夾邊 AB-DE，符合 ASA；剩餘 C-F。 正確選項「△ABC≅△DEF（ASA）」。四選項核對：△ABC≅△DFE（ASA）=假，此排列使 B 對 F，與 ∠B=∠E 不符。；只能判定相似=假，一組邊已固定大小。；△ABC≅△DEF（ASA）=真，兩角及夾邊相等，且頂點順序 A-D、B-E、C-F，ASA 全等。；不能判定，因缺第三角=假，第三角可由內角和決定，不需另給。 邊界：第三角自動相等但不需先算；全等式順序唯一。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s005-v005",
      "unitId": "u16",
      "skillId": "triangle-asa-aas",
      "contentSha256": "49f5a1fbc04534078a862c613d5c40e247971f0d8b8fa967d72b730649e8a09b",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "兩組角與中間邊均對應相等，ASA 足夠。",
      "derivedAnswer": "ASA",
      "storedAnswer": "ASA",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「ASA」；另外三個選項逐一排除：「AAS」：給定邊是夾邊。；「RHS」：未給斜邊與一股的對應資料。；「AAA」：有一組邊且可判全等。",
        "undefinedSymbol": "題幹符號與詞語已在「ASA 與 AAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度與長度分別比較同類量，無單位混算。",
        "roundingConflict": "依精確資料獨立推導為「ASA」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "第三角為 55°，資料一致；不需斜邊。",
        "alternateReading": "若採常見誤讀「見直角就不分資料直接選 RHS。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，需在 ASA 與 RHS 中選最直接判定。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "知道直角只是角資料之一。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「辨認 ASA」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩個三角形各有一個直角與一個 35° 角，且兩個直角頂點與 35° 頂點之間的邊相等。最直接的判定是什麼？」獨立重算：兩組角與中間邊均對應相等，ASA 足夠。 正確選項「ASA」。四選項核對：AAS=假，給定邊是夾邊。；ASA=真，90°、35° 兩角及其夾邊分別相等，符合 ASA。；RHS=假，未給斜邊與一股的對應資料。；AAA=假，有一組邊且可判全等。 邊界：第三角為 55°，資料一致；不需斜邊。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s005-v006",
      "unitId": "u16",
      "skillId": "triangle-asa-aas",
      "contentSha256": "65a02e72dcfd2d61a72bc600c611b3344b85aeeb145232e1c018f1a83eaba95a",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "兩角決定形狀，沒有邊長固定大小，所以不能判全等。",
      "derivedAnswer": "只能保證第三角相等與形狀相似，不能判定全等",
      "storedAnswer": "只能保證第三角相等與形狀相似，不能判定全等",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「只能保證第三角相等與形狀相似，不能判定全等」；另外三個選項逐一排除：「可用 AAS」：AAS 還需一組邊。；「可用 ASA」：ASA 也需一組邊。；「一定不相似」：兩角相等已足以相似。",
        "undefinedSymbol": "題幹符號與詞語已在「ASA 與 AAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無單位或近似。",
        "roundingConflict": "依精確資料獨立推導為「只能保證第三角相等與形狀相似，不能判定全等」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目明示沒有邊長，排除隱含尺度。",
        "alternateReading": "若採常見誤讀「以為第三角補出後三組角就可全等。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，理解兩角充分於相似但不足於全等。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "知道全等需固定尺度。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「辨認 AAA 限制」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若兩三角形只有 ∠A=∠D、∠B=∠E，沒有任何邊長資料，下列何者正確？」獨立重算：兩角決定形狀，沒有邊長固定大小，所以不能判全等。 正確選項「只能保證第三角相等與形狀相似，不能判定全等」。四選項核對：只能保證第三角相等與形狀相似，不能判定全等=真，第三角由 180° 自動相等，但尺度仍可任意放大縮小。；可用 AAS=假，AAS 還需一組邊。；可用 ASA=假，ASA 也需一組邊。；一定不相似=假，兩角相等已足以相似。 邊界：題目明示沒有邊長，排除隱含尺度。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s005-v007",
      "unitId": "u16",
      "skillId": "triangle-asa-aas",
      "contentSha256": "718aceda26c29e5ea57304f179cef7d2c8c498a1ae31b2303bcc9ef014f4c833",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "A↔D、B↔E、C↔F，故 △ABC≅△DEF（AAS）。",
      "derivedAnswer": "△ABC≅△DEF",
      "storedAnswer": "△ABC≅△DEF",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「△ABC≅△DEF」；另外三個選項逐一排除：「△ABC≅△DFE」：此式 B 對 F、C 對 E，與 BC-EF 雖端點集合相同，但 ∠C 應對 ∠E 而非 ∠F。；「△ABC≅△FDE」：A 應對 D，不是 F。；「△ABC≅△EFD」：A 與 D 的對應被破壞。",
        "undefinedSymbol": "題幹符號與詞語已在「ASA 與 AAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "純符號證明，無單位。",
        "roundingConflict": "依精確資料獨立推導為「△ABC≅△DEF」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "角配對已固定方向，排除交換 E、F 的另一排列。",
        "alternateReading": "若採常見誤讀「只用邊的端點集合，忽略角頂點定向。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，從多項條件重建唯一對應。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會綜合角與邊配對。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「由兩角與非夾邊配對頂點」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已知 ∠A=∠D、∠C=∠F、BC=EF。若要正確寫全等式，應為哪一個？」獨立重算：A↔D、B↔E、C↔F，故 △ABC≅△DEF（AAS）。 正確選項「△ABC≅△DEF」。四選項核對：△ABC≅△DFE=假，此式 B 對 F、C 對 E，與 BC-EF 雖端點集合相同，但 ∠C 應對 ∠E 而非 ∠F。；△ABC≅△FDE=假，A 應對 D，不是 F。；△ABC≅△DEF=真，角條件給 A-D、C-F，剩餘 B-E；邊 BC 正好對 EF。；△ABC≅△EFD=假，A 與 D 的對應被破壞。 邊界：角配對已固定方向，排除交換 E、F 的另一排列。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s005-v008",
      "unitId": "u16",
      "skillId": "triangle-asa-aas",
      "contentSha256": "981e731eedcf035a1222d29037bfc4cf4d6bff50be6417ee7aa9ac3ba71d4c1c",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "A-D、B-E，故 C-F；全等對應角相等，∠F=65°。",
      "derivedAnswer": "65°",
      "storedAnswer": "65°",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「65°」；另外三個選項逐一排除：「50°」：沒有資料支持。；「115°」：把內外角互補誤用。；「無法判斷」：AAS 已確定 C 對 F。",
        "undefinedSymbol": "題幹符號與詞語已在「ASA 與 AAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度為精確整度，無近似。",
        "roundingConflict": "依精確資料獨立推導為「65°」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "65° 介於 0°與180°；其餘角資料雖未列數值不影響對應結論。",
        "alternateReading": "若採常見誤讀「只看到未直接給第三角就認為未知。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，兩階段推理。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會先判全等再用對應角。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「由全等讀取對應角」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「△ABC 與 △DEF 中，∠A=∠D、∠B=∠E，且 BC=EF。若 ∠C=65°，則 ∠F 為多少？」獨立重算：A-D、B-E，故 C-F；全等對應角相等，∠F=65°。 正確選項「65°」。四選項核對：50°=假，沒有資料支持。；65°=真，兩角與非夾邊相等使 △ABC≅△DEF，C 對 F，所以角度相同。；115°=假，把內外角互補誤用。；無法判斷=假，AAS 已確定 C 對 F。 邊界：65° 介於 0°與180°；其餘角資料雖未列數值不影響對應結論。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s005-v009",
      "unitId": "u16",
      "skillId": "triangle-asa-aas",
      "contentSha256": "6e15816f47a851f1b95ad7a839d0479c3afaf03a2ffa6b19198b689572efc35f",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "最短邊的位置由最小角唯一決定，因此長 4 的邊是對應邊；AAS 或 ASA 可完成全等。",
      "derivedAnswer": "能，三角對應相等且一組對應邊相等",
      "storedAnswer": "能，三角對應相等且一組對應邊相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「能，三角對應相等且一組對應邊相等」；另外三個選項逐一排除：「不能，因只知道 AAA」：另有一組對應最短邊長 4。；「不能，因不知道哪一邊對應」：最短邊必對 30°，對應唯一。；「能，但理由是 SSS」：只知道一組邊，不是 SSS。",
        "undefinedSymbol": "題幹符號與詞語已在「ASA 與 AAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "長度同單位且精確；角和 180°。",
        "roundingConflict": "依精確資料獨立推導為「能，三角對應相等且一組對應邊相等」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "若有等角可能最短邊不唯一，但本題三角互異，對應明確。",
        "alternateReading": "若採常見誤讀「認為只要題幹先提三角就是 AAA，忽略後續邊資料。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，需跨用邊角關係確認一組邊的對應。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會用大角對大邊確定邊的位置。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「由角排序確認對應邊後使用 AAS/ASA」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩三角形的角分別為 30°、70°、80°，且各自最短邊都長 4。能否判定全等？」獨立重算：最短邊的位置由最小角唯一決定，因此長 4 的邊是對應邊；AAS 或 ASA 可完成全等。 正確選項「能，三角對應相等且一組對應邊相等」。四選項核對：不能，因只知道 AAA=假，另有一組對應最短邊長 4。；不能，因不知道哪一邊對應=假，最短邊必對 30°，對應唯一。；能，但理由是 SSS=假，只知道一組邊，不是 SSS。；能，三角對應相等且一組對應邊相等=真，三角相同，且最短邊均對 30° 並相等為 4，故一組對應邊固定尺度。 邊界：若有等角可能最短邊不唯一，但本題三角互異，對應明確。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s005-v010",
      "unitId": "u16",
      "skillId": "triangle-asa-aas",
      "contentSha256": "4980be9b3139d5f2d65ebbd2af0ad5b5cadecbf28e63d0963b89d8e485a3b305",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "兩圖的角度形狀相同且同一對應夾邊長 25，故大小也相同。",
      "derivedAnswer": "是，可用 ASA 判定全等",
      "storedAnswer": "是，可用 ASA 判定全等",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「是，可用 ASA 判定全等」；另外三個選項逐一排除：「否，因第三角未量」：第三角由內角和自動為 48°。；「是，但只能用 SSS」：沒有三組邊。；「否，因兩圖可能大小不同」：25 公尺夾邊已固定尺度。",
        "undefinedSymbol": "題幹符號與詞語已在「ASA 與 AAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "兩基線皆公尺，角度皆度；數值按題目視為精確。",
        "roundingConflict": "依精確資料獨立推導為「是，可用 ASA 判定全等」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "第三角 48° 合法；河岸方向不同不影響全等。",
        "alternateReading": "若採常見誤讀「忽略基線是夾邊，誤判仍可縮放。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，基線與角度是三角測量能否複製的核心。",
      "literacyContextNecessity": "情境中的基線位置決定 ASA，而非可刪除的裝飾。",
      "prerequisiteCheck": "會把測量基線辨認為夾邊。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「用測量資料判定」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「測量員在河兩岸建立兩個三角測量圖，量得兩圖各有 90°、42° 兩角，且連接這兩角頂點的基線都為 25 公尺。兩圖是否全等？」獨立重算：兩圖的角度形狀相同且同一對應夾邊長 25，故大小也相同。 正確選項「是，可用 ASA 判定全等」。四選項核對：是，可用 ASA 判定全等=真，兩角 90°、42° 與夾邊 25 公尺逐一相等，ASA。；否，因第三角未量=假，第三角由內角和自動為 48°。；是，但只能用 SSS=假，沒有三組邊。；否，因兩圖可能大小不同=假，25 公尺夾邊已固定尺度。 邊界：第三角 48° 合法；河岸方向不同不影響全等。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s005-v011",
      "unitId": "u16",
      "skillId": "triangle-asa-aas",
      "contentSha256": "05ffc9d31d0c4b69a9b71d9604a1d7efec5a1a765d25261984ea83ccef11213b",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "45°、65°、70° 的各對邊比例不同；20 若放在不同邊，整體尺度不同，不能比較。",
      "derivedAnswer": "需補明 20 毫米邊的端點或對應位置，否則無法確認兩零件用的是同一組對應邊",
      "storedAnswer": "需補明 20 毫米邊的端點或對應位置，否則無法確認兩零件用的是同一組對應邊",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「需補明 20 毫米邊的端點或對應位置，否則無法確認兩零件用的是同一組對應邊」；另外三個選項逐一排除：「不需補充，任何一邊 20 都一定全等」：在三角不等時，不同位置的 20 邊會給不同尺度。；「只要角和 110° 就能全等」：兩角無邊位置仍不足以固定同一對應。；「把 20 改成 25 就可解決」：長度數值不是問題，位置標示才是。",
        "undefinedSymbol": "題幹符號與詞語已在「ASA 與 AAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "20 毫米單位一致，問題不是換算或精度。",
        "roundingConflict": "依精確資料獨立推導為「需補明 20 毫米邊的端點或對應位置，否則無法確認兩零件用的是同一組對應邊」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "三角互異使三邊位置不等價；若等邊或等腰情形可能有對稱，但本題無。",
        "alternateReading": "若採常見誤讀「只看『兩角一邊』數量，不核對對應位置。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，品質資料的標註完整性直接影響判定。",
      "literacyContextNecessity": "零件是否可互換取決於 20 毫米邊的實際端點，情境必要。",
      "prerequisiteCheck": "會理解 ASA/AAS 需對應邊。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「判斷資訊是否足以建立對應」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩個零件孔位形成三角形。檢驗表只列出兩個角各為 45°、65°，以及一條長 20 毫米的邊，但沒有說明這條邊位於哪兩個角之間。下列審查意見何者最佳？」獨立重算：45°、65°、70° 的各對邊比例不同；20 若放在不同邊，整體尺度不同，不能比較。 正確選項「需補明 20 毫米邊的端點或對應位置，否則無法確認兩零件用的是同一組對應邊」。四選項核對：需補明 20 毫米邊的端點或對應位置，否則無法確認兩零件用的是同一組對應邊=真，兩角一邊可判全等的前提是該邊在兩圖中互相對應；未標端點時可能是夾邊或不同非夾邊。；不需補充，任何一邊 20 都一定全等=假，在三角不等時，不同位置的 20 邊會給不同尺度。；只要角和 110° 就能全等=假，兩角無邊位置仍不足以固定同一對應。；把 20 改成 25 就可解決=假，長度數值不是問題，位置標示才是。 邊界：三角互異使三邊位置不等價；若等邊或等腰情形可能有對稱，但本題無。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s005-v012",
      "unitId": "u16",
      "skillId": "triangle-asa-aas",
      "contentSha256": "68a17a51e38a997abe1d512c6f4e6c5699be9b01135d929006a079155c2e26c4",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "同一相似形中對 55° 的邊比對 50° 的邊長；若兩者都被設為 10，兩圖尺度不同，故不必然全等。",
      "derivedAnswer": "不必然全等，因兩幅的 10 公里邊不是同一對應位置",
      "storedAnswer": "不必然全等，因兩幅的 10 公里邊不是同一對應位置",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「不必然全等，因兩幅的 10 公里邊不是同一對應位置」；另外三個選項逐一排除：「必定全等，因都是兩角一邊」：邊必須互相對應。；「必定全等，因第三角都 50°」：AAA 仍需同一對應邊固定尺度。；「必定不可能形成三角形」：55+75+50=180，可形成。",
        "undefinedSymbol": "題幹符號與詞語已在「ASA 與 AAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "兩長度都公里且精確，無換算；差異來自位置。",
        "roundingConflict": "依精確資料獨立推導為「不必然全等，因兩幅的 10 公里邊不是同一對應位置」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "『不必然』比『一定不全等』精確：特殊數值不會改變互異角下的邊比例，但結論核心是資料不能作同一對應判定。",
        "alternateReading": "若採常見誤讀「只看數值相同，忽略邊的幾何位置。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，需審查地圖標示位置。",
      "literacyContextNecessity": "地圖測量必須將同一對應邊比較，情境不可刪除。",
      "prerequisiteCheck": "會由角辨認對邊與夾邊。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「檢查相同數值是否位於對應邊」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩幅地圖三角區域各標出兩角 55°、75°。第一幅在 55°與75°頂點間的邊長 10 公里；第二幅標示 10 公里的邊卻對著 55°。兩區域必定全等嗎？」獨立重算：同一相似形中對 55° 的邊比對 50° 的邊長；若兩者都被設為 10，兩圖尺度不同，故不必然全等。 正確選項「不必然全等，因兩幅的 10 公里邊不是同一對應位置」。四選項核對：必定全等，因都是兩角一邊=假，邊必須互相對應。；不必然全等，因兩幅的 10 公里邊不是同一對應位置=真，兩圖角組相同，但把相同長度放在不同對邊會得到不同縮放尺度。；必定全等，因第三角都 50°=假，AAA 仍需同一對應邊固定尺度。；必定不可能形成三角形=假，55+75+50=180，可形成。 邊界：『不必然』比『一定不全等』精確：特殊數值不會改變互異角下的邊比例，但結論核心是資料不能作同一對應判定。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u16-fig-005-asa-aas",
      "unitId": "u16",
      "slot": "s005",
      "title": "ASA與AAS中已知邊的位置",
      "altText": "左圖兩個已知角夾著底邊，表示ASA；右圖兩個已知角位於頂角與左下角，已知邊在右側，表示AAS。",
      "svgPath": "figures/u16/u16-fig-005-asa-aas.svg",
      "drawingSpec": {
        "canvas": {
          "width": 360,
          "height": 240,
          "viewBox": "0 0 360 240"
        },
        "coordinateSystem": "左上角為(0,0)，x向右、y向下。",
        "geometry": "左圖底兩端各一角弧且底邊雙刻痕；右圖左底與頂角各一弧，右腰雙刻痕。",
        "visibleLineRules": "主要邊線使用2.5px黑色實線；輔助線使用1.5px虛線；弧線不得遮住頂點標籤。",
        "hiddenLineRules": "平面圖無隱藏邊；未畫出的延長線不得由視覺自行推定。",
        "labels": "兩判定文字置底，角弧不遮頂點。",
        "tickMarksAndSymbols": "相等邊以同數量短刻痕表示；直角以小正方形；相等角以同型圓弧。",
        "units": "示意圖無長度單位，題目另有數值時以題幹為準。",
        "arrows": "只在延長線或行進方向使用箭頭。",
        "toScale": false,
        "notToScaleWarning": "圖形不按比例，請依標記與題目條件判斷。",
        "mobileLayout": "360×240畫布；最小文字14px；標籤與線段保持至少6px間距。",
        "answerLeakageControl": "圖中只呈現已知結構與定義標記，不標示題目所求數值或正確選項。"
      },
      "svgAssertions": [
        "ASA：夾邊",
        "AAS：非夾邊",
        "A28 28",
        "M312 116"
      ],
      "figureReview": {
        "decision": "pass",
        "mobileReadability": "360px寬預覽下，頂點、刻痕、直角符號與延長線箭頭仍可辨識。",
        "answerLeakage": "未顯示任何題目答案；只保留概念所需結構。",
        "geometryCheck": "已依列出的座標逐項核對端點、交點、刻痕與文字位置。",
        "reviewNote": "ASA與AAS中已知邊的位置已逐線檢查：左圖底兩端各一角弧且底邊雙刻痕；右圖左底與頂角各一弧，右腰雙刻痕。；標籤配置為兩判定文字置底，角弧不遮頂點。，未依視覺比例暗示未給定量。",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "cd889e078ed28648cc8a151e190a72b7bc11608276335495d13d5b954037e4e4"
    }
  ]
};
export default skillData;
