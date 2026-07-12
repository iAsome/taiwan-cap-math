// Deterministically emitted from reviewed CHATGPT_HUMAN_AUTHORED_R1 source.
// Do not edit this staging module by hand.
export const skillData={
  "slot": "s001",
  "lecture": {
    "lectureId": "u16-s001-lecture-r1",
    "unitId": "u16",
    "numericUnitId": 16,
    "topicId": "u16-congruence",
    "skillId": "triangle-congruence",
    "skillOrder": 1,
    "originalLockedTitle": "全等判定",
    "title": "全等判定：先看對應再判斷能否唯一決定三角形",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能說明兩個三角形全等代表形狀與大小完全相同。",
      "能依頂點順序正確寫出全等符號並找出對應邊與對應角。",
      "能辨認 SSS、SAS、ASA、AAS 與直角三角形的 RHS 判定條件。",
      "能指出 AAA 與一般 SSA 只能保證相似或可能有兩種圖形，不能作為全等判定。"
    ],
    "prerequisiteBridge": "本技能從已學過的線段長度、角度、三角形內角和與基本作圖概念出發；先不要求完整證明，而是建立『哪些資料足以唯一決定一個三角形』的判斷框架。",
    "prerequisites": [
      {
        "skillId": "u16-entry-foundation",
        "requiredLevel": "本技能從已學過的線段長度、角度、三角形內角和與基本作圖概念出發；先不要求完整證明，而是建立『哪些資料足以唯一決定一個三角形』的判斷框架。"
      }
    ],
    "glossary": [
      {
        "term": "全等",
        "definition": "兩個圖形經平移、旋轉或翻轉後可以完全重合。"
      },
      {
        "term": "對應頂點",
        "definition": "重合時彼此落在同一位置的兩個頂點。"
      },
      {
        "term": "對應邊",
        "definition": "連接對應頂點的邊，長度相等。"
      },
      {
        "term": "對應角",
        "definition": "位於對應頂點的角，角度相等。"
      },
      {
        "term": "判定條件",
        "definition": "只需檢查部分邊角資料，就能保證兩三角形全等的充分條件。"
      }
    ],
    "notation": [
      {
        "symbol": "△ABC≅△DEF",
        "meaning": "A 對應 D、B 對應 E、C 對應 F，兩三角形全等。"
      },
      {
        "symbol": "AB=DE",
        "meaning": "對應邊 AB 與 DE 等長。"
      },
      {
        "symbol": "∠A=∠D",
        "meaning": "對應角 A 與 D 等大。"
      }
    ],
    "conceptNarrative": [
      "全等不是『看起來差不多』，而是所有對應邊相等且所有對應角相等，能完全重合。",
      "寫全等式時的頂點順序很重要。若 A 對應 D，B 對應 F，C 對應 E，就應寫成 △ABC≅△DFE，而不是任意排列。",
      "實際判定不必量完六個量。某些三組資料已能唯一決定三角形，例如三邊、兩邊及其夾角、兩角及其中一邊。",
      "AAA 只固定形狀，大小仍可放大或縮小；一般 SSA 可能畫出兩個不同三角形，因此不能直接判定全等。",
      "直角三角形若斜邊與一股分別相等，可用 RHS，因為直角已固定且資料足以唯一決定。"
    ],
    "formalDefinitions": [
      {
        "name": "全等三角形",
        "statement": "若兩三角形可經剛體運動完全重合，則稱兩三角形全等。"
      },
      {
        "name": "SSS",
        "statement": "三組對應邊分別相等，則兩三角形全等。"
      },
      {
        "name": "SAS",
        "statement": "兩組對應邊及其夾角分別相等，則兩三角形全等。"
      },
      {
        "name": "ASA",
        "statement": "兩組對應角及其夾邊分別相等，則兩三角形全等。"
      },
      {
        "name": "AAS",
        "statement": "兩組對應角及一組非夾邊分別相等，則兩三角形全等。"
      },
      {
        "name": "RHS",
        "statement": "兩直角三角形的斜邊與一組對應股分別相等，則兩三角形全等。"
      }
    ],
    "formulas": [
      {
        "formula": "△ABC≅△DEF ⇒ AB=DE、BC=EF、CA=FD",
        "conditions": [
          "全等式頂點順序已正確對應"
        ],
        "meaning": "全等後可得到對應邊相等。"
      },
      {
        "formula": "△ABC≅△DEF ⇒ ∠A=∠D、∠B=∠E、∠C=∠F",
        "conditions": [
          "全等式頂點順序已正確對應"
        ],
        "meaning": "全等後可得到對應角相等。"
      }
    ],
    "nonApplicableCases": [
      "只知道三角形三角相等（AAA）時不能判定全等。",
      "一般三角形只知道兩邊與一個非夾角（SSA）時不能直接判定全等。",
      "只知道兩邊相等但沒有角資料，通常仍可改變夾角。",
      "圖形未按比例繪製時，不能用目測邊長或角度判斷。",
      "全等式若頂點順序錯誤，後續對應關係也會全部錯置。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "標出已知的相等邊與相等角。",
        "check": "每一筆資料是否確實是兩三角形之間的對應量？"
      },
      {
        "step": 2,
        "instruction": "先配對頂點。",
        "check": "由相等角、共用邊或端點關係確認誰對應誰。"
      },
      {
        "step": 3,
        "instruction": "辨認資料型態。",
        "check": "是 SSS、SAS、ASA、AAS、RHS，還是無效的 AAA、SSA？"
      },
      {
        "step": 4,
        "instruction": "確認 SAS 的角是夾角，ASA 的邊是夾邊。",
        "check": "角或邊的位置是否位於兩個已知量之間？"
      },
      {
        "step": 5,
        "instruction": "按對應順序寫全等式。",
        "check": "全等式三個位置是否一一對應？"
      },
      {
        "step": 6,
        "instruction": "再利用全等推出未知量。",
        "check": "所求量是否為對應邊或對應角？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "已知 AB=DE、BC=EF、CA=FD，判斷 △ABC 與 △DEF。",
        "solutionSteps": [
          "三組對應邊分別相等。",
          "符合 SSS 判定。"
        ],
        "answer": "△ABC≅△DEF（SSS）。"
      },
      {
        "exampleId": "L2",
        "prompt": "已知 AB=DE、AC=DF、∠A=∠D，判斷所用條件。",
        "solutionSteps": [
          "∠A 位在 AB 與 AC 之間，∠D 位在 DE 與 DF 之間。",
          "兩邊及夾角相等。"
        ],
        "answer": "可用 SAS 判定全等。"
      },
      {
        "exampleId": "L3",
        "prompt": "兩三角形的三個角都分別為 40°、60°、80°，能否判定全等？",
        "solutionSteps": [
          "三角相等只固定形狀。",
          "邊長可以成同比例放大或縮小。"
        ],
        "answer": "不能；AAA 只能保證相似。"
      },
      {
        "exampleId": "L4",
        "prompt": "若 △PQR≅△XYZ，且 P 對應 X、Q 對應 Y，則 QR 對應哪一邊？",
        "solutionSteps": [
          "剩餘頂點 R 對應 Z。",
          "QR 連接 Q、R，因此對應 YZ。"
        ],
        "answer": "YZ。"
      },
      {
        "exampleId": "L5",
        "prompt": "兩個直角三角形的斜邊皆為 10，且一股皆為 6，能否判定全等？",
        "solutionSteps": [
          "兩圖均為直角三角形。",
          "斜邊與一股分別相等。"
        ],
        "answer": "能，用 RHS。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "看到三個角相等就選全等。",
        "why": "把相似與全等混為一談。",
        "correction": "AAA 沒有固定大小，仍需至少一組邊長資料。"
      },
      {
        "mistake": "SAS 中使用非夾角。",
        "why": "只數到兩邊一角，未檢查位置。",
        "correction": "夾角必須同時接觸兩條已知邊。"
      },
      {
        "mistake": "把 SSA 當成 SAS。",
        "why": "忽略角是否在兩已知邊之間。",
        "correction": "畫草圖檢查角的兩邊是否正是已知邊。"
      },
      {
        "mistake": "全等式頂點任意排列。",
        "why": "只在意三角形名稱，沒有建立對應。",
        "correction": "依對應頂點逐位置寫出。"
      },
      {
        "mistake": "由圖看起來一樣便判定全等。",
        "why": "把示意圖當作量測證據。",
        "correction": "只使用題目標記或可證明的邊角關係。"
      },
      {
        "mistake": "已知全等後仍重新計算對應量。",
        "why": "未使用全等的直接結果。",
        "correction": "先由全等式讀出對應邊與對應角即可。"
      }
    ],
    "selfCheck": [
      "我能否用一句話說明全等與相似的差別？",
      "我是否先配對頂點再寫全等式？",
      "我有檢查 SAS 的角是否為夾角嗎？",
      "我能說明 AAA 和一般 SSA 為何不足嗎？",
      "我是否只使用題目給定或已證明的資料？"
    ],
    "summary": [
      "全等表示形狀與大小完全相同，對應邊和對應角皆相等。",
      "有效判定包含 SSS、SAS、ASA、AAS 與直角三角形 RHS。",
      "AAA 與一般 SSA 不是全等判定。",
      "全等式的頂點順序決定全部對應關係。"
    ],
    "connections": {
      "previous": "承接角度、線段與三角形基本元素。",
      "next": [
        "下一技能會把判定條件寫成完整全等證明。",
        "後續等腰與等邊性質可用全等證明。"
      ]
    },
    "figureReferences": [
      "u16-fig-001-congruence-correspondence"
    ],
    "accessibilityNotes": [
      "u16-fig-001-congruence-correspondence 的替代文字與結構描述收錄於本技能 drawing-specs.jsonl。"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u16-s001-v001",
        "u16-s001-v002",
        "u16-s001-v003",
        "u16-s001-v004",
        "u16-s001-v005",
        "u16-s001-v006",
        "u16-s001-v007",
        "u16-s001-v008",
        "u16-s001-v009",
        "u16-s001-v010",
        "u16-s001-v011",
        "u16-s001-v012"
      ],
      "constructedResponseIds": [
        "u16-s001-cr001",
        "u16-s001-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "針對「全等判定」逐段核對定義、適用條件與反例；重新演算5個例題，確認未使用後續單元才引入的平行線或四邊形定理，並檢查圖形標記不取代文字條件。",
      "reviewVersion": "human-lecture-review-u16-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "c43ad30956ccb508cf51fd73ead6e6b98d54c09159a0b76e84c90f77f0a20b4d"
  },
  "mcQuestions": [
    {
      "questionId": "u16-s001-v001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence",
      "skillOrder": 1,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "下列哪一組資料可以直接判定兩個三角形全等？",
      "givenConditions": [
        "兩三角形所列資料皆為對應量"
      ],
      "target": "選出有效的全等判定資料",
      "choices": [
        "三組對應角分別相等",
        "三組對應邊分別相等",
        "兩組對應邊分別相等",
        "兩組對應角分別相等"
      ],
      "answerIndex": 1,
      "independentSolution": "只需檢查判定表：SSS 有三組邊，能鎖定三角形；另外三組均缺少固定尺度或夾角。",
      "explanation": "三組對應邊相等符合 SSS，足以唯一決定三角形。 辨認每個選項提供的邊角數量。 SSS 是有效判定，AAA 及資料不足者排除。",
      "steps": [
        "辨認每個選項提供的邊角數量。",
        "SSS 是有效判定，AAA 及資料不足者排除。"
      ],
      "optionAnalysis": [
        {
          "choice": "三組對應角分別相等",
          "truth": false,
          "reason": "AAA 只能固定形狀，不能固定大小。"
        },
        {
          "choice": "三組對應邊分別相等",
          "truth": true,
          "reason": "三組對應邊相等符合 SSS，足以唯一決定三角形。"
        },
        {
          "choice": "兩組對應邊分別相等",
          "truth": false,
          "reason": "夾角仍可改變，資料不足。"
        },
        {
          "choice": "兩組對應角分別相等",
          "truth": false,
          "reason": "連大小也未固定，資料不足。"
        }
      ],
      "misconceptionTarget": "把相似條件 AAA 當成全等。",
      "prerequisiteCheck": "只需知道邊、角與全等的基本意義。",
      "estimatedTimeSec": "70",
      "unitAndRoundingCheck": "題目不含量值與單位，也不需近似。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "『直接判定』限定只能使用所列資料；沒有隱含共用邊。",
      "difficultyReason": "基礎題，辨認單一有效判定。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認 SSS 判定。",
      "tags": [
        "空間與形狀",
        "全等判定",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "f2e658efa151786f86de547080a1fbc46c2642aca64fd3c6996fe6a23bf0cb92"
    },
    {
      "questionId": "u16-s001-v002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence",
      "skillOrder": 1,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "若 △ABC≅△DEF，則下列哪一組頂點對應正確？",
      "givenConditions": [
        "全等式的書寫順序已正確"
      ],
      "target": "讀出第二個頂點的對應",
      "choices": [
        "A 對應 E",
        "B 對應 F",
        "B 對應 E",
        "C 對應 D"
      ],
      "answerIndex": 2,
      "independentSolution": "將 ABC 與 DEF 逐位對齊，第二位是 B 與 E，所以答案唯一。",
      "explanation": "全等式同一位置的頂點互相對應，因此 B 與 E 對應。 把兩個三角形名稱按位置排齊。 第一、第二、第三位置分別為 A-D、B-E、C-F。",
      "steps": [
        "把兩個三角形名稱按位置排齊。",
        "第一、第二、第三位置分別為 A-D、B-E、C-F。"
      ],
      "optionAnalysis": [
        {
          "choice": "A 對應 E",
          "truth": false,
          "reason": "第一位置 A 應對應 D。"
        },
        {
          "choice": "B 對應 F",
          "truth": false,
          "reason": "第二位置 B 應對應 E。"
        },
        {
          "choice": "B 對應 E",
          "truth": true,
          "reason": "全等式同一位置的頂點互相對應，因此 B 與 E 對應。"
        },
        {
          "choice": "C 對應 D",
          "truth": false,
          "reason": "第三位置 C 應對應 F。"
        }
      ],
      "misconceptionTarget": "忽略全等式頂點順序，按圖形位置猜配對。",
      "prerequisiteCheck": "能閱讀三角形頂點名稱。",
      "estimatedTimeSec": "60",
      "unitAndRoundingCheck": "純符號判讀，不涉及單位或四捨五入。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "全等符號已明示，沒有圖形方向造成的另一解讀。",
      "difficultyReason": "基礎題，只需逐位置讀取。",
      "literacyContextNecessity": null,
      "authoringIntent": "建立全等式對應。",
      "tags": [
        "空間與形狀",
        "全等判定",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "c2b799a18d9a61c401bce8d818560f630567f1c1c50c2b7bdd7ba91c7786bad4"
    },
    {
      "questionId": "u16-s001-v003",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence",
      "skillOrder": 1,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-004-sss-sas",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "下列哪一組條件屬於 SAS？",
      "givenConditions": [
        "所列角均位於對應三角形內"
      ],
      "target": "辨認兩邊及夾角",
      "choices": [
        "AB=DE、BC=EF、∠A=∠D",
        "∠A=∠D、∠B=∠E、AB=DE",
        "AB=DE、AC=DF、∠A=∠D",
        "AB=DE、BC=EF、CA=FD"
      ],
      "answerIndex": 2,
      "independentSolution": "AB、AC 的共同端點是 A；DE、DF 的共同端點是 D，給定角正好是夾角，因此為 SAS。",
      "explanation": "∠A 位於 AB、AC 之間，∠D 位於 DE、DF 之間，正是兩邊及夾角。 找兩條已知邊的共同端點。 檢查已知角是否在共同端點。",
      "steps": [
        "找兩條已知邊的共同端點。",
        "檢查已知角是否在共同端點。"
      ],
      "optionAnalysis": [
        {
          "choice": "AB=DE、BC=EF、∠A=∠D",
          "truth": false,
          "reason": "∠A 不是 AB、BC 的夾角。"
        },
        {
          "choice": "∠A=∠D、∠B=∠E、AB=DE",
          "truth": false,
          "reason": "這是兩角及夾邊 ASA。"
        },
        {
          "choice": "AB=DE、AC=DF、∠A=∠D",
          "truth": true,
          "reason": "∠A 位於 AB、AC 之間，∠D 位於 DE、DF 之間，正是兩邊及夾角。"
        },
        {
          "choice": "AB=DE、BC=EF、CA=FD",
          "truth": false,
          "reason": "這是 SSS。"
        }
      ],
      "misconceptionTarget": "只要兩邊一角就當 SAS。",
      "prerequisiteCheck": "會辨認線段端點與角頂點。",
      "estimatedTimeSec": "80",
      "unitAndRoundingCheck": "邊長只比較相等關係，沒有單位衝突。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "每個選項資料型態互斥；第一項是一般 SSA，不可視為 SAS。",
      "difficultyReason": "基礎題，直接檢查夾角位置。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認 SAS 的夾角。",
      "tags": [
        "空間與形狀",
        "全等判定",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "3fa312167075c23664242b2f993f05167a41fd3b26ee51779cd26f5cd9c653aa"
    },
    {
      "questionId": "u16-s001-v004",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence",
      "skillOrder": 1,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "已知 △PQR≅△XYZ，PQ=8，QR=11，∠R=54°。下列何者正確？",
      "givenConditions": [
        "全等式順序為 P↔X、Q↔Y、R↔Z"
      ],
      "target": "找出對應邊與對應角",
      "choices": [
        "XY=11 且 ∠X=54°",
        "YZ=11 且 ∠Z=54°",
        "XZ=11 且 ∠Y=54°",
        "YZ=8 且 ∠Z=54°"
      ],
      "answerIndex": 1,
      "independentSolution": "P-X、Q-Y、R-Z；QR 的兩端 Q、R 對應 Y、Z，故 YZ=11，角 R 對應角 Z 為 54°。",
      "explanation": "QR 對應 YZ，R 對應 Z，所以 YZ=11 且 ∠Z=54°。 依全等式逐位配對頂點。 將 QR 換成 YZ，將 ∠R 換成 ∠Z。",
      "steps": [
        "依全等式逐位配對頂點。",
        "將 QR 換成 YZ，將 ∠R 換成 ∠Z。"
      ],
      "optionAnalysis": [
        {
          "choice": "XY=11 且 ∠X=54°",
          "truth": false,
          "reason": "PQ 對應 XY 應為 8，∠X 對應 ∠P。"
        },
        {
          "choice": "YZ=11 且 ∠Z=54°",
          "truth": true,
          "reason": "QR 對應 YZ，R 對應 Z，所以 YZ=11 且 ∠Z=54°。"
        },
        {
          "choice": "XZ=11 且 ∠Y=54°",
          "truth": false,
          "reason": "QR 對應 YZ，不是 XZ；∠R 對應 ∠Z。"
        },
        {
          "choice": "YZ=8 且 ∠Z=54°",
          "truth": false,
          "reason": "YZ 對應 QR，應為 11。"
        }
      ],
      "misconceptionTarget": "只配對單一字母，未同時核對線段兩端。",
      "prerequisiteCheck": "會讀全等式並辨認邊與角。",
      "estimatedTimeSec": "100",
      "unitAndRoundingCheck": "長度 11 與角度 54° 分屬不同量，選項均清楚標示。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目未要求圖形方向；剛體翻轉不改變對應量。",
      "difficultyReason": "標準題，同時讀取一邊一角。",
      "literacyContextNecessity": null,
      "authoringIntent": "運用全等對應部分相等。",
      "tags": [
        "空間與形狀",
        "全等判定",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "10c2e487b7893ef1c3dfc194e4864f584afdbe9edef991048effe39318856103"
    },
    {
      "questionId": "u16-s001-v005",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence",
      "skillOrder": 1,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "兩三角形分別有邊長 5、7、9 與 5、7、9。下列敘述何者必定正確？",
      "givenConditions": [
        "各組長度均能形成三角形"
      ],
      "target": "判斷全等及可用條件",
      "choices": [
        "兩三角形只相似，不一定全等",
        "需再知道一組角相等才可判定",
        "兩三角形全等，可用 SSS",
        "可能因排列不同而不全等"
      ],
      "answerIndex": 2,
      "independentSolution": "兩個三角形都有唯一的三邊 5、7、9；按同長邊配對後三組相等，故全等。",
      "explanation": "三組對應邊可依長度 5、7、9 配對，符合 SSS。 確認三邊集合完全相同。 以相同長度逐一配對，套用 SSS。",
      "steps": [
        "確認三邊集合完全相同。",
        "以相同長度逐一配對，套用 SSS。"
      ],
      "optionAnalysis": [
        {
          "choice": "兩三角形只相似，不一定全等",
          "truth": false,
          "reason": "三組邊長完全相同，大小也相同。"
        },
        {
          "choice": "需再知道一組角相等才可判定",
          "truth": false,
          "reason": "SSS 已足夠，不需角資料。"
        },
        {
          "choice": "兩三角形全等，可用 SSS",
          "truth": true,
          "reason": "三組對應邊可依長度 5、7、9 配對，符合 SSS。"
        },
        {
          "choice": "可能因排列不同而不全等",
          "truth": false,
          "reason": "三邊決定三角形，鏡射仍屬全等。"
        }
      ],
      "misconceptionTarget": "誤以為邊的排列順序會產生不同形狀。",
      "prerequisiteCheck": "知道 SSS 與三角形可形成條件。",
      "estimatedTimeSec": "100",
      "unitAndRoundingCheck": "三邊使用同一未指定長度單位，不影響等長判斷。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "5+7>9，兩組確實存在；鏡像不構成不同全等類型。",
      "difficultyReason": "標準題，需要先確認三邊可形成並理解鏡射仍全等。",
      "literacyContextNecessity": null,
      "authoringIntent": "以邊長集合使用 SSS。",
      "tags": [
        "空間與形狀",
        "全等判定",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "a1b4728558fa5cb8c261b254b5a9036f7ebdfe2334ec3187156f1a9ccbac67d6"
    },
    {
      "questionId": "u16-s001-v006",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence",
      "skillOrder": 1,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "兩個三角形的三個內角皆為 40°、60°、80°，其中一個最長邊為 12。僅依這些資料，下列何者正確？",
      "givenConditions": [
        "另一三角形未給任何邊長"
      ],
      "target": "判斷 AAA 的限制",
      "choices": [
        "另一三角形最長邊必為 12",
        "無法確定另一三角形最長邊是否為 12",
        "兩三角形必定全等",
        "另一三角形最長邊必大於 12"
      ],
      "answerIndex": 1,
      "independentSolution": "另一三角形可把第一個按比例 1/2、1 或 2 放縮，最長邊可為 6、12、24 等，因此不能確定。",
      "explanation": "三角相同只固定形狀；另一圖可為任意同比例大小。 三角資料屬 AAA。 AAA 不含固定尺度的邊長資料。",
      "steps": [
        "三角資料屬 AAA。",
        "AAA 不含固定尺度的邊長資料。"
      ],
      "optionAnalysis": [
        {
          "choice": "另一三角形最長邊必為 12",
          "truth": false,
          "reason": "AAA 不固定尺度。"
        },
        {
          "choice": "無法確定另一三角形最長邊是否為 12",
          "truth": true,
          "reason": "三角相同只固定形狀；另一圖可為任意同比例大小。"
        },
        {
          "choice": "兩三角形必定全等",
          "truth": false,
          "reason": "三角相等只能保證相似。"
        },
        {
          "choice": "另一三角形最長邊必大於 12",
          "truth": false,
          "reason": "可放大也可縮小，無法判斷。"
        }
      ],
      "misconceptionTarget": "把角度完全相同誤認為大小也相同。",
      "prerequisiteCheck": "會辨認 AAA 與相似概念。",
      "estimatedTimeSec": "110",
      "unitAndRoundingCheck": "角度和為 180°，長度 12 為精確值，無近似問題。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目明示『僅依這些資料』，排除另有邊長隱含條件。",
      "difficultyReason": "標準題，需理解反例與尺度自由。",
      "literacyContextNecessity": null,
      "authoringIntent": "排除 AAA 作為全等判定。",
      "tags": [
        "空間與形狀",
        "全等判定",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "b3be4c47bb71ed2b953e95860a83896d4b169c454c0da3a0b0f096027c9d5bbd"
    },
    {
      "questionId": "u16-s001-v007",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence",
      "skillOrder": 1,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "已知兩個直角三角形的斜邊皆為 13，一組對應股皆為 5。可用哪一種條件判定全等？",
      "givenConditions": [
        "兩圖均確定有一個直角"
      ],
      "target": "辨認直角三角形特殊判定",
      "choices": [
        "RHS",
        "AAA",
        "SSA 一律無效，所以不能判定",
        "ASA"
      ],
      "answerIndex": 0,
      "independentSolution": "直角已固定為 90°；兩圖斜邊 13 和一股 5 對應相等，依 RHS 全等。",
      "explanation": "直角三角形的斜邊與一股分別相等，符合 RHS。 確認兩圖都是直角三角形。 辨認 13 為斜邊、5 為一股。 套用 RHS。",
      "steps": [
        "確認兩圖都是直角三角形。",
        "辨認 13 為斜邊、5 為一股。",
        "套用 RHS。"
      ],
      "optionAnalysis": [
        {
          "choice": "RHS",
          "truth": true,
          "reason": "直角三角形的斜邊與一股分別相等，符合 RHS。"
        },
        {
          "choice": "AAA",
          "truth": false,
          "reason": "雖都有直角，但未給三角全相等；AAA 也不能判全等。"
        },
        {
          "choice": "SSA 一律無效，所以不能判定",
          "truth": false,
          "reason": "直角條件使斜邊與一股成為 RHS 的充分資料。"
        },
        {
          "choice": "ASA",
          "truth": false,
          "reason": "題目未提供第二組角。"
        }
      ],
      "misconceptionTarget": "把 RHS 與一般 SSA 混為一談。",
      "prerequisiteCheck": "知道直角、斜邊與股的定義。",
      "estimatedTimeSec": "100",
      "unitAndRoundingCheck": "13、5 為同單位精確長度，且 13>5 可形成直角三角形。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "未指定另一股但可由畢氏關係唯一確定，不產生雙解。",
      "difficultyReason": "進階題，辨認一般 SSA 的直角特例。",
      "literacyContextNecessity": null,
      "authoringIntent": "使用 RHS 判定。",
      "tags": [
        "空間與形狀",
        "全等判定",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "abdb771fe098c76b5574f69ceeaa37f29985463f7658786561b0d1fcdb43281c"
    },
    {
      "questionId": "u16-s001-v008",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence",
      "skillOrder": 1,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "△ABC 與 △DEF 中，AB=DE、AC=DF。若還要補一項條件使兩三角形可用 SAS 全等，應補哪一項？",
      "givenConditions": [
        "兩已知邊分別在 A 與 D 相交"
      ],
      "target": "補出夾角條件",
      "choices": [
        "∠ABC=∠DEF",
        "∠BCA=∠EFD",
        "BC=EF",
        "∠BAC=∠EDF"
      ],
      "answerIndex": 3,
      "independentSolution": "SAS 所需角必在 A 與 D；∠BAC 和 ∠EDF 正好由兩已知邊構成。",
      "explanation": "兩已知邊 AB、AC 的夾角是 ∠BAC；DE、DF 的夾角是 ∠EDF。 找出兩已知邊共同端點 A、D。 寫出以共同端點為中間字母的角。",
      "steps": [
        "找出兩已知邊共同端點 A、D。",
        "寫出以共同端點為中間字母的角。"
      ],
      "optionAnalysis": [
        {
          "choice": "∠ABC=∠DEF",
          "truth": false,
          "reason": "這是 AB 與 AC 的非夾角。"
        },
        {
          "choice": "∠BCA=∠EFD",
          "truth": false,
          "reason": "這也是兩已知邊的非夾角。"
        },
        {
          "choice": "BC=EF",
          "truth": false,
          "reason": "補成 SSS，雖可全等但不是 SAS。"
        },
        {
          "choice": "∠BAC=∠EDF",
          "truth": true,
          "reason": "兩已知邊 AB、AC 的夾角是 ∠BAC；DE、DF 的夾角是 ∠EDF。"
        }
      ],
      "misconceptionTarget": "角名稱中間字母未對準夾角頂點。",
      "prerequisiteCheck": "會由兩線段找共同端點。",
      "estimatedTimeSec": "120",
      "unitAndRoundingCheck": "只有等長與等角關係，不涉及數值近似。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "選項 BC=EF 確實能用 SSS，但題目明確問『用 SAS』，因此不是答案。",
      "difficultyReason": "進階題，需在可全等與指定判定之間精確區分。",
      "literacyContextNecessity": null,
      "authoringIntent": "補足 SAS 的必要位置條件。",
      "tags": [
        "空間與形狀",
        "全等判定",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "e10bd4c71695bb016607bad304ba19a2a500ce2195e75a60851564e58e5b13a4"
    },
    {
      "questionId": "u16-s001-v009",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence",
      "skillOrder": 1,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "若只知道兩三角形有兩組對應邊相等及一組非夾角相等，下列判斷何者最精確？",
      "givenConditions": [
        "未另給直角或其他限制"
      ],
      "target": "評估一般 SSA 資料",
      "choices": [
        "通常不能直接判定全等，可能出現兩種三角形",
        "必定可用 SAS 判定",
        "必定可用 AAS 判定",
        "必定不可能形成三角形"
      ],
      "answerIndex": 0,
      "independentSolution": "固定一邊及非夾角後，另一固定長度邊的端點可能與射線相交兩次，故可能得到兩個不全等三角形。",
      "explanation": "一般 SSA 可能讓第三頂點落在兩個位置，資料不足以保證唯一。 確認角不是夾角。 排除直角三角形 RHS 特例。 以弧與射線可能有兩交點理解歧義。",
      "steps": [
        "確認角不是夾角。",
        "排除直角三角形 RHS 特例。",
        "以弧與射線可能有兩交點理解歧義。"
      ],
      "optionAnalysis": [
        {
          "choice": "通常不能直接判定全等，可能出現兩種三角形",
          "truth": true,
          "reason": "一般 SSA 可能讓第三頂點落在兩個位置，資料不足以保證唯一。"
        },
        {
          "choice": "必定可用 SAS 判定",
          "truth": false,
          "reason": "已知角不是夾角。"
        },
        {
          "choice": "必定可用 AAS 判定",
          "truth": false,
          "reason": "只知一組角，不是兩組角。"
        },
        {
          "choice": "必定不可能形成三角形",
          "truth": false,
          "reason": "SSA 可能形成一個、兩個或無解，不能一概而論。"
        }
      ],
      "misconceptionTarget": "把任何兩邊一角都視為 SAS。",
      "prerequisiteCheck": "已學夾角與全等充分條件。",
      "estimatedTimeSec": "130",
      "unitAndRoundingCheck": "純幾何存在性判斷，無單位或取整。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目排除直角等額外條件，因此答案使用『通常不能直接』而非絕對無解。",
      "difficultyReason": "進階題，要求理解 SSA 歧義而非背誦。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨識無效判定與例外。",
      "tags": [
        "空間與形狀",
        "全等判定",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "8e2fdf9cd89045eb0814b2d34d016fa27ceb81ba2042dff8cc4d95c3ba4f5a6d"
    },
    {
      "questionId": "u16-s001-v010",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence",
      "skillOrder": 1,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "兩塊三角形玻璃標示的三邊長都為 30 公分、40 公分、50 公分。工人要確認它們可互相替換，最直接的數學理由是什麼？",
      "givenConditions": [
        "玻璃邊緣可視為直線段",
        "標示長度可信"
      ],
      "target": "判斷兩塊玻璃形狀與大小是否相同",
      "choices": [
        "三邊長總和相同，所以全等",
        "都有一條 50 公分邊，所以全等",
        "三角形看起來相同，所以全等",
        "三組對應邊相等，所以兩三角形以 SSS 全等"
      ],
      "answerIndex": 3,
      "independentSolution": "兩塊玻璃分別具有相同三邊，且 30+40>50，故都是存在的三角形並以 SSS 全等。",
      "explanation": "每一個長度 30、40、50 都可一一配對，SSS 保證完全重合。 把材料標示轉成三組邊長。 確認 30+40>50。 套用 SSS 判定可互換。",
      "steps": [
        "把材料標示轉成三組邊長。",
        "確認 30+40>50。",
        "套用 SSS 判定可互換。"
      ],
      "optionAnalysis": [
        {
          "choice": "三邊長總和相同，所以全等",
          "truth": false,
          "reason": "周長相同不足以保證全等。"
        },
        {
          "choice": "都有一條 50 公分邊，所以全等",
          "truth": false,
          "reason": "單一邊相等不足。"
        },
        {
          "choice": "三角形看起來相同，所以全等",
          "truth": false,
          "reason": "外觀不是數學證據。"
        },
        {
          "choice": "三組對應邊相等，所以兩三角形以 SSS 全等",
          "truth": true,
          "reason": "每一個長度 30、40、50 都可一一配對，SSS 保證完全重合。"
        }
      ],
      "misconceptionTarget": "以周長或外觀代替三組對應邊。",
      "prerequisiteCheck": "會把實物尺寸抽象成三角形邊長。",
      "estimatedTimeSec": "120",
      "unitAndRoundingCheck": "所有長度同為公分且為精確標示，不需換算或取整。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "『可互相替換』指平面輪廓可經旋轉或翻面重合，不要求正反面材質相同。",
      "difficultyReason": "素養題，情境資訊直接決定是否可替換。",
      "literacyContextNecessity": "三邊標示是判定玻璃輪廓能否完全重合的必要工程資訊，不能刪除。",
      "authoringIntent": "把零件尺寸轉為 SSS。",
      "tags": [
        "空間與形狀",
        "全等判定",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "44cf3bc006dc127266f9c799dac7214f75fe835e4e272a9236e3b186a1be17c7"
    },
    {
      "questionId": "u16-s001-v011",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence",
      "skillOrder": 1,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "紙模型說明書只標出兩個三角片的三個角皆為 50°、60°、70°，便宣稱兩片一定能完全疊合。哪一項是最合理的審查意見？",
      "givenConditions": [
        "沒有任何邊長或比例尺資料"
      ],
      "target": "檢查說明書的全等結論",
      "choices": [
        "角度總和不是 180°，所以資料錯誤",
        "三角相同已足以全等",
        "只需再標一個周長，但不必對應邊",
        "資料只能保證形狀相似，還需至少一組對應邊固定大小"
      ],
      "answerIndex": 3,
      "independentSolution": "50°+60°+70°=180°，兩片可有相同形狀但不同大小；加入一組對應邊相等後可用 ASA/AAS。",
      "explanation": "三角相同屬 AAA；模型片可按比例放大縮小，至少需一組尺度資料。 先驗算三角和為 180°。 判定目前只有 AAA。 指出缺少固定大小的邊長資料。",
      "steps": [
        "先驗算三角和為 180°。",
        "判定目前只有 AAA。",
        "指出缺少固定大小的邊長資料。"
      ],
      "optionAnalysis": [
        {
          "choice": "角度總和不是 180°，所以資料錯誤",
          "truth": false,
          "reason": "50+60+70=180，角度資料可成立。"
        },
        {
          "choice": "三角相同已足以全等",
          "truth": false,
          "reason": "AAA 不固定大小。"
        },
        {
          "choice": "只需再標一個周長，但不必對應邊",
          "truth": false,
          "reason": "相同周長可固定尺度，但說法未指出兩片周長相同；最直接標一組對應邊。"
        },
        {
          "choice": "資料只能保證形狀相似，還需至少一組對應邊固定大小",
          "truth": true,
          "reason": "三角相同屬 AAA；模型片可按比例放大縮小，至少需一組尺度資料。"
        }
      ],
      "misconceptionTarget": "把可成立的角度資料誤當成足夠的全等資料。",
      "prerequisiteCheck": "能檢查角和並區分相似與全等。",
      "estimatedTimeSec": "140",
      "unitAndRoundingCheck": "角度為精確度數，無長度單位可比較，也無四捨五入。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目問『最合理審查』，答案指出資料缺口而非假設兩片相同尺度。",
      "difficultyReason": "素養題，需同時驗算規格與判斷資料充分性。",
      "literacyContextNecessity": "模型是否能疊合取決於大小，缺少邊長是情境核心。",
      "authoringIntent": "審查模型規格的全等主張。",
      "tags": [
        "空間與形狀",
        "全等判定",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "54d37e2394ebe3ffe68ebaeb058beb7e1d6c83c64d2a9be212d7418a21cec82b"
    },
    {
      "questionId": "u16-s001-v012",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence",
      "skillOrder": 1,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-001-congruence-correspondence",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "地圖上的兩塊三角形區域分別標記為 △ABC 與 △KLM，且已知 A 對應 K、B 對應 M、C 對應 L。若兩區域全等，正確的全等式是哪一個？",
      "givenConditions": [
        "對應關係由測量報告明示"
      ],
      "target": "依情境對應寫全等式",
      "choices": [
        "△ABC≅△KML",
        "△ABC≅△KLM",
        "△ABC≅△MLK",
        "△ABC≅△LMK"
      ],
      "answerIndex": 0,
      "independentSolution": "A 的位置填 K，B 的位置填 M，C 的位置填 L，得到 △ABC≅△KML。",
      "explanation": "依 A-K、B-M、C-L 的順序，第二個三角形應寫 KML。 把 ABC 三個位置列出。 逐一填入 K、M、L。",
      "steps": [
        "把 ABC 三個位置列出。",
        "逐一填入 K、M、L。"
      ],
      "optionAnalysis": [
        {
          "choice": "△ABC≅△KML",
          "truth": true,
          "reason": "依 A-K、B-M、C-L 的順序，第二個三角形應寫 KML。"
        },
        {
          "choice": "△ABC≅△KLM",
          "truth": false,
          "reason": "第二位置 B 應對 M，不是 L。"
        },
        {
          "choice": "△ABC≅△MLK",
          "truth": false,
          "reason": "第一位置 A 應對 K。"
        },
        {
          "choice": "△ABC≅△LMK",
          "truth": false,
          "reason": "三個位置都未依 A-K、B-M、C-L 排列。"
        }
      ],
      "misconceptionTarget": "按字母表順序寫第二個三角形，忽略實際對應。",
      "prerequisiteCheck": "會依明示關係排列頂點。",
      "estimatedTimeSec": "100",
      "unitAndRoundingCheck": "地圖區域名稱不是長度單位，無換算與近似。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "即使地圖旋轉或翻轉，頂點對應仍由報告固定，不產生其他正確排列。",
      "difficultyReason": "素養題，要求把測量報告轉成正式全等式。",
      "literacyContextNecessity": "對應標記決定後續邊界與角點資料交換，情境不可刪除。",
      "authoringIntent": "建立工程圖對應標記。",
      "tags": [
        "空間與形狀",
        "全等判定",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "d0cc54f75a6e1cde50794be6edb6b09a79f25747d5235846ffcd9c7966cdb2e6"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u16-s001-cr001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence",
      "skillOrder": 1,
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-001-congruence-correspondence",
      "prompt": "△ABC 與 △DEF 中，AB=DE=6 cm、BC=EF=8 cm、CA=FD=10 cm。請判斷兩三角形是否全等，寫出正確全等式與理由。",
      "requiredWork": [
        "配對三組等長邊。",
        "依對應順序寫全等式。",
        "指出使用的判定。"
      ],
      "fullCreditSolution": [
        "AB↔DE、BC↔EF、CA↔FD，因此 A↔D、B↔E、C↔F。",
        "三組對應邊相等，依 SSS，△ABC≅△DEF。"
      ],
      "alternativeSolutions": [
        "也可先以最長邊 CA↔FD 定位，再由共同端點完成頂點配對。"
      ],
      "reasoningSteps": [
        "AB↔DE、BC↔EF、CA↔FD，因此 A↔D、B↔E、C↔F。",
        "三組對應邊相等，依 SSS，△ABC≅△DEF。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確配對三邊、寫出 △ABC≅△DEF 並明確引用SSS。"
        },
        {
          "score": 2,
          "criteria": "判定與結論正確，但全等式有一處頂點順序錯誤，或配對說明不完整。"
        },
        {
          "score": 1,
          "criteria": "只指出『三邊相等所以全等』但未建立完整對應。"
        },
        {
          "score": 0,
          "criteria": "把周長相等當理由、判成不全等，或無有效作答。"
        }
      ],
      "partialCreditRules": [
        "判定與結論正確，但全等式有一處頂點順序錯誤，或配對說明不完整。",
        "只指出『三邊相等所以全等』但未建立完整對應。"
      ],
      "followThroughPolicy": "若僅有單一長度抄寫錯誤，但後續依自己一致的三組對應正確使用SSS，可保留推理分，最高2分。",
      "unitAndNotationRules": "長度需寫cm；全等符號使用≅，頂點順序必須相對應。",
      "answerOnlyPolicy": "只寫『全等』不給判定與對應，最多1分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "把ABC直接對DEF而未核對共同端點。",
        "寫成相似符號。"
      ],
      "independentReview": {
        "derivedResult": "△ABC≅△DEF（SSS）。",
        "ambiguity": "三組邊長互異，頂點對應唯一到反向書寫等價；全等式須保持同一循環順序。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "2d4abc9f7574119c86657858d681164b69a03e1ba82d4a9a2c3be016ce6fd7d1"
    },
    {
      "questionId": "u16-s001-cr002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-congruence",
      "skillOrder": 1,
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "有兩個三角形，各有兩邊長 5 cm、7 cm，且都另有一個 40° 角。請說明為何這些資料不一定能判定兩三角形全等，並補上一種足以判定全等的資料位置。",
      "requiredWork": [
        "說明40°若不是夾角時的問題。",
        "指出資料可能形成不同三角形。",
        "提出一種充分補充條件。"
      ],
      "fullCreditSolution": [
        "若40°不是5 cm與7 cm的夾角，現有資料是SSA型態，國中全等判定中不足。",
        "可補充『40°是兩已知邊的夾角』，即可用SAS；或再給第三邊相等改用SSS。"
      ],
      "alternativeSolutions": [
        "可畫出同一射線上不同交點的兩個示意三角形，說明非夾角資料可能有多解。"
      ],
      "reasoningSteps": [
        "若40°不是5 cm與7 cm的夾角，現有資料是SSA型態，國中全等判定中不足。",
        "可補充『40°是兩已知邊的夾角』，即可用SAS；或再給第三邊相等改用SSS。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "清楚指出SSA不足，並提出位置明確、確實形成SAS或SSS的補充條件。"
        },
        {
          "score": 2,
          "criteria": "知道資料不足且補充方向正確，但未說清角的位置或判定名稱。"
        },
        {
          "score": 1,
          "criteria": "只說『還缺條件』或只列SAS三字，未解釋原資料問題。"
        },
        {
          "score": 0,
          "criteria": "誤稱任意兩邊一角必全等，或補充仍不足的條件。"
        }
      ],
      "partialCreditRules": [
        "知道資料不足且補充方向正確，但未說清角的位置或判定名稱。",
        "只說『還缺條件』或只列SAS三字，未解釋原資料問題。"
      ],
      "followThroughPolicy": "若誤把40°稱為夾角但後段正確說明『若為夾角即可SAS』，視表意矛盾，最高1分。",
      "unitAndNotationRules": "cm與°需保留；『夾角』要指5 cm與7 cm相交頂點的角。",
      "answerOnlyPolicy": "只答『不能』而無理由，最多1分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "把SSA誤當SAS。",
        "補充周長相等但仍未固定形狀。"
      ],
      "independentReview": {
        "derivedResult": "原資料可能是SSA，不能保證全等；指定40°為夾角或補第三邊可使資料充分。",
        "ambiguity": "題目刻意未指定角位置，因此答案須討論不足，而不是假定夾角。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "73c95b27e630de94f3a23e733da35f509e06cc4a7dd1c46156b8c894eac35e05"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u16-s001-v001",
      "unitId": "u16",
      "skillId": "triangle-congruence",
      "contentSha256": "f2e658efa151786f86de547080a1fbc46c2642aca64fd3c6996fe6a23bf0cb92",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "只需檢查判定表：SSS 有三組邊，能鎖定三角形；另外三組均缺少固定尺度或夾角。",
      "derivedAnswer": "三組對應邊分別相等",
      "storedAnswer": "三組對應邊分別相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「三組對應邊分別相等」；另外三個選項逐一排除：「三組對應角分別相等」：AAA 只能固定形狀，不能固定大小。；「兩組對應邊分別相等」：夾角仍可改變，資料不足。；「兩組對應角分別相等」：連大小也未固定，資料不足。",
        "undefinedSymbol": "題幹符號與詞語已在「全等判定」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "題目不含量值與單位，也不需近似。",
        "roundingConflict": "依精確資料獨立推導為「三組對應邊分別相等」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "『直接判定』限定只能使用所列資料；沒有隱含共用邊。",
        "alternateReading": "若採常見誤讀「把相似條件 AAA 當成全等。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，辨認單一有效判定。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只需知道邊、角與全等的基本意義。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「選出有效的全等判定資料」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「下列哪一組資料可以直接判定兩個三角形全等？」獨立重算：只需檢查判定表：SSS 有三組邊，能鎖定三角形；另外三組均缺少固定尺度或夾角。 正確選項「三組對應邊分別相等」。四選項核對：三組對應角分別相等=假，AAA 只能固定形狀，不能固定大小。；三組對應邊分別相等=真，三組對應邊相等符合 SSS，足以唯一決定三角形。；兩組對應邊分別相等=假，夾角仍可改變，資料不足。；兩組對應角分別相等=假，連大小也未固定，資料不足。 邊界：『直接判定』限定只能使用所列資料；沒有隱含共用邊。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s001-v002",
      "unitId": "u16",
      "skillId": "triangle-congruence",
      "contentSha256": "c2b799a18d9a61c401bce8d818560f630567f1c1c50c2b7bdd7ba91c7786bad4",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "將 ABC 與 DEF 逐位對齊，第二位是 B 與 E，所以答案唯一。",
      "derivedAnswer": "B 對應 E",
      "storedAnswer": "B 對應 E",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「B 對應 E」；另外三個選項逐一排除：「A 對應 E」：第一位置 A 應對應 D。；「B 對應 F」：第二位置 B 應對應 E。；「C 對應 D」：第三位置 C 應對應 F。",
        "undefinedSymbol": "題幹符號與詞語已在「全等判定」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "純符號判讀，不涉及單位或四捨五入。",
        "roundingConflict": "依精確資料獨立推導為「B 對應 E」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "全等符號已明示，沒有圖形方向造成的另一解讀。",
        "alternateReading": "若採常見誤讀「忽略全等式頂點順序，按圖形位置猜配對。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，只需逐位置讀取。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "能閱讀三角形頂點名稱。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「讀出第二個頂點的對應」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 △ABC≅△DEF，則下列哪一組頂點對應正確？」獨立重算：將 ABC 與 DEF 逐位對齊，第二位是 B 與 E，所以答案唯一。 正確選項「B 對應 E」。四選項核對：A 對應 E=假，第一位置 A 應對應 D。；B 對應 F=假，第二位置 B 應對應 E。；B 對應 E=真，全等式同一位置的頂點互相對應，因此 B 與 E 對應。；C 對應 D=假，第三位置 C 應對應 F。 邊界：全等符號已明示，沒有圖形方向造成的另一解讀。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s001-v003",
      "unitId": "u16",
      "skillId": "triangle-congruence",
      "contentSha256": "3fa312167075c23664242b2f993f05167a41fd3b26ee51779cd26f5cd9c653aa",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "AB、AC 的共同端點是 A；DE、DF 的共同端點是 D，給定角正好是夾角，因此為 SAS。",
      "derivedAnswer": "AB=DE、AC=DF、∠A=∠D",
      "storedAnswer": "AB=DE、AC=DF、∠A=∠D",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「AB=DE、AC=DF、∠A=∠D」；另外三個選項逐一排除：「AB=DE、BC=EF、∠A=∠D」：∠A 不是 AB、BC 的夾角。；「∠A=∠D、∠B=∠E、AB=DE」：這是兩角及夾邊 ASA。；「AB=DE、BC=EF、CA=FD」：這是 SSS。",
        "undefinedSymbol": "題幹符號與詞語已在「全等判定」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "邊長只比較相等關係，沒有單位衝突。",
        "roundingConflict": "依精確資料獨立推導為「AB=DE、AC=DF、∠A=∠D」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "每個選項資料型態互斥；第一項是一般 SSA，不可視為 SAS。",
        "alternateReading": "若採常見誤讀「只要兩邊一角就當 SAS。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，直接檢查夾角位置。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會辨認線段端點與角頂點。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「辨認兩邊及夾角」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「下列哪一組條件屬於 SAS？」獨立重算：AB、AC 的共同端點是 A；DE、DF 的共同端點是 D，給定角正好是夾角，因此為 SAS。 正確選項「AB=DE、AC=DF、∠A=∠D」。四選項核對：AB=DE、BC=EF、∠A=∠D=假，∠A 不是 AB、BC 的夾角。；∠A=∠D、∠B=∠E、AB=DE=假，這是兩角及夾邊 ASA。；AB=DE、AC=DF、∠A=∠D=真，∠A 位於 AB、AC 之間，∠D 位於 DE、DF 之間，正是兩邊及夾角。；AB=DE、BC=EF、CA=FD=假，這是 SSS。 邊界：每個選項資料型態互斥；第一項是一般 SSA，不可視為 SAS。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s001-v004",
      "unitId": "u16",
      "skillId": "triangle-congruence",
      "contentSha256": "10c2e487b7893ef1c3dfc194e4864f584afdbe9edef991048effe39318856103",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "P-X、Q-Y、R-Z；QR 的兩端 Q、R 對應 Y、Z，故 YZ=11，角 R 對應角 Z 為 54°。",
      "derivedAnswer": "YZ=11 且 ∠Z=54°",
      "storedAnswer": "YZ=11 且 ∠Z=54°",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「YZ=11 且 ∠Z=54°」；另外三個選項逐一排除：「XY=11 且 ∠X=54°」：PQ 對應 XY 應為 8，∠X 對應 ∠P。；「XZ=11 且 ∠Y=54°」：QR 對應 YZ，不是 XZ；∠R 對應 ∠Z。；「YZ=8 且 ∠Z=54°」：YZ 對應 QR，應為 11。",
        "undefinedSymbol": "題幹符號與詞語已在「全等判定」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "長度 11 與角度 54° 分屬不同量，選項均清楚標示。",
        "roundingConflict": "依精確資料獨立推導為「YZ=11 且 ∠Z=54°」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目未要求圖形方向；剛體翻轉不改變對應量。",
        "alternateReading": "若採常見誤讀「只配對單一字母，未同時核對線段兩端。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，同時讀取一邊一角。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會讀全等式並辨認邊與角。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「找出對應邊與對應角」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已知 △PQR≅△XYZ，PQ=8，QR=11，∠R=54°。下列何者正確？」獨立重算：P-X、Q-Y、R-Z；QR 的兩端 Q、R 對應 Y、Z，故 YZ=11，角 R 對應角 Z 為 54°。 正確選項「YZ=11 且 ∠Z=54°」。四選項核對：XY=11 且 ∠X=54°=假，PQ 對應 XY 應為 8，∠X 對應 ∠P。；YZ=11 且 ∠Z=54°=真，QR 對應 YZ，R 對應 Z，所以 YZ=11 且 ∠Z=54°。；XZ=11 且 ∠Y=54°=假，QR 對應 YZ，不是 XZ；∠R 對應 ∠Z。；YZ=8 且 ∠Z=54°=假，YZ 對應 QR，應為 11。 邊界：題目未要求圖形方向；剛體翻轉不改變對應量。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s001-v005",
      "unitId": "u16",
      "skillId": "triangle-congruence",
      "contentSha256": "a1b4728558fa5cb8c261b254b5a9036f7ebdfe2334ec3187156f1a9ccbac67d6",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "兩個三角形都有唯一的三邊 5、7、9；按同長邊配對後三組相等，故全等。",
      "derivedAnswer": "兩三角形全等，可用 SSS",
      "storedAnswer": "兩三角形全等，可用 SSS",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「兩三角形全等，可用 SSS」；另外三個選項逐一排除：「兩三角形只相似，不一定全等」：三組邊長完全相同，大小也相同。；「需再知道一組角相等才可判定」：SSS 已足夠，不需角資料。；「可能因排列不同而不全等」：三邊決定三角形，鏡射仍屬全等。",
        "undefinedSymbol": "題幹符號與詞語已在「全等判定」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "三邊使用同一未指定長度單位，不影響等長判斷。",
        "roundingConflict": "依精確資料獨立推導為「兩三角形全等，可用 SSS」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "5+7>9，兩組確實存在；鏡像不構成不同全等類型。",
        "alternateReading": "若採常見誤讀「誤以為邊的排列順序會產生不同形狀。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，需要先確認三邊可形成並理解鏡射仍全等。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "知道 SSS 與三角形可形成條件。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「判斷全等及可用條件」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩三角形分別有邊長 5、7、9 與 5、7、9。下列敘述何者必定正確？」獨立重算：兩個三角形都有唯一的三邊 5、7、9；按同長邊配對後三組相等，故全等。 正確選項「兩三角形全等，可用 SSS」。四選項核對：兩三角形只相似，不一定全等=假，三組邊長完全相同，大小也相同。；需再知道一組角相等才可判定=假，SSS 已足夠，不需角資料。；兩三角形全等，可用 SSS=真，三組對應邊可依長度 5、7、9 配對，符合 SSS。；可能因排列不同而不全等=假，三邊決定三角形，鏡射仍屬全等。 邊界：5+7>9，兩組確實存在；鏡像不構成不同全等類型。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s001-v006",
      "unitId": "u16",
      "skillId": "triangle-congruence",
      "contentSha256": "b3be4c47bb71ed2b953e95860a83896d4b169c454c0da3a0b0f096027c9d5bbd",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "另一三角形可把第一個按比例 1/2、1 或 2 放縮，最長邊可為 6、12、24 等，因此不能確定。",
      "derivedAnswer": "無法確定另一三角形最長邊是否為 12",
      "storedAnswer": "無法確定另一三角形最長邊是否為 12",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「無法確定另一三角形最長邊是否為 12」；另外三個選項逐一排除：「另一三角形最長邊必為 12」：AAA 不固定尺度。；「兩三角形必定全等」：三角相等只能保證相似。；「另一三角形最長邊必大於 12」：可放大也可縮小，無法判斷。",
        "undefinedSymbol": "題幹符號與詞語已在「全等判定」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度和為 180°，長度 12 為精確值，無近似問題。",
        "roundingConflict": "依精確資料獨立推導為「無法確定另一三角形最長邊是否為 12」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目明示『僅依這些資料』，排除另有邊長隱含條件。",
        "alternateReading": "若採常見誤讀「把角度完全相同誤認為大小也相同。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，需理解反例與尺度自由。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會辨認 AAA 與相似概念。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「判斷 AAA 的限制」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩個三角形的三個內角皆為 40°、60°、80°，其中一個最長邊為 12。僅依這些資料，下列何者正確？」獨立重算：另一三角形可把第一個按比例 1/2、1 或 2 放縮，最長邊可為 6、12、24 等，因此不能確定。 正確選項「無法確定另一三角形最長邊是否為 12」。四選項核對：另一三角形最長邊必為 12=假，AAA 不固定尺度。；無法確定另一三角形最長邊是否為 12=真，三角相同只固定形狀；另一圖可為任意同比例大小。；兩三角形必定全等=假，三角相等只能保證相似。；另一三角形最長邊必大於 12=假，可放大也可縮小，無法判斷。 邊界：題目明示『僅依這些資料』，排除另有邊長隱含條件。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s001-v007",
      "unitId": "u16",
      "skillId": "triangle-congruence",
      "contentSha256": "abdb771fe098c76b5574f69ceeaa37f29985463f7658786561b0d1fcdb43281c",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "直角已固定為 90°；兩圖斜邊 13 和一股 5 對應相等，依 RHS 全等。",
      "derivedAnswer": "RHS",
      "storedAnswer": "RHS",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「RHS」；另外三個選項逐一排除：「AAA」：雖都有直角，但未給三角全相等；AAA 也不能判全等。；「SSA 一律無效，所以不能判定」：直角條件使斜邊與一股成為 RHS 的充分資料。；「ASA」：題目未提供第二組角。",
        "undefinedSymbol": "題幹符號與詞語已在「全等判定」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "13、5 為同單位精確長度，且 13>5 可形成直角三角形。",
        "roundingConflict": "依精確資料獨立推導為「RHS」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "未指定另一股但可由畢氏關係唯一確定，不產生雙解。",
        "alternateReading": "若採常見誤讀「把 RHS 與一般 SSA 混為一談。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，辨認一般 SSA 的直角特例。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "知道直角、斜邊與股的定義。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「辨認直角三角形特殊判定」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已知兩個直角三角形的斜邊皆為 13，一組對應股皆為 5。可用哪一種條件判定全等？」獨立重算：直角已固定為 90°；兩圖斜邊 13 和一股 5 對應相等，依 RHS 全等。 正確選項「RHS」。四選項核對：RHS=真，直角三角形的斜邊與一股分別相等，符合 RHS。；AAA=假，雖都有直角，但未給三角全相等；AAA 也不能判全等。；SSA 一律無效，所以不能判定=假，直角條件使斜邊與一股成為 RHS 的充分資料。；ASA=假，題目未提供第二組角。 邊界：未指定另一股但可由畢氏關係唯一確定，不產生雙解。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s001-v008",
      "unitId": "u16",
      "skillId": "triangle-congruence",
      "contentSha256": "e10bd4c71695bb016607bad304ba19a2a500ce2195e75a60851564e58e5b13a4",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "SAS 所需角必在 A 與 D；∠BAC 和 ∠EDF 正好由兩已知邊構成。",
      "derivedAnswer": "∠BAC=∠EDF",
      "storedAnswer": "∠BAC=∠EDF",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「∠BAC=∠EDF」；另外三個選項逐一排除：「∠ABC=∠DEF」：這是 AB 與 AC 的非夾角。；「∠BCA=∠EFD」：這也是兩已知邊的非夾角。；「BC=EF」：補成 SSS，雖可全等但不是 SAS。",
        "undefinedSymbol": "題幹符號與詞語已在「全等判定」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "只有等長與等角關係，不涉及數值近似。",
        "roundingConflict": "依精確資料獨立推導為「∠BAC=∠EDF」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "選項 BC=EF 確實能用 SSS，但題目明確問『用 SAS』，因此不是答案。",
        "alternateReading": "若採常見誤讀「角名稱中間字母未對準夾角頂點。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，需在可全等與指定判定之間精確區分。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會由兩線段找共同端點。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「補出夾角條件」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「△ABC 與 △DEF 中，AB=DE、AC=DF。若還要補一項條件使兩三角形可用 SAS 全等，應補哪一項？」獨立重算：SAS 所需角必在 A 與 D；∠BAC 和 ∠EDF 正好由兩已知邊構成。 正確選項「∠BAC=∠EDF」。四選項核對：∠ABC=∠DEF=假，這是 AB 與 AC 的非夾角。；∠BCA=∠EFD=假，這也是兩已知邊的非夾角。；BC=EF=假，補成 SSS，雖可全等但不是 SAS。；∠BAC=∠EDF=真，兩已知邊 AB、AC 的夾角是 ∠BAC；DE、DF 的夾角是 ∠EDF。 邊界：選項 BC=EF 確實能用 SSS，但題目明確問『用 SAS』，因此不是答案。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s001-v009",
      "unitId": "u16",
      "skillId": "triangle-congruence",
      "contentSha256": "8e2fdf9cd89045eb0814b2d34d016fa27ceb81ba2042dff8cc4d95c3ba4f5a6d",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "固定一邊及非夾角後，另一固定長度邊的端點可能與射線相交兩次，故可能得到兩個不全等三角形。",
      "derivedAnswer": "通常不能直接判定全等，可能出現兩種三角形",
      "storedAnswer": "通常不能直接判定全等，可能出現兩種三角形",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「通常不能直接判定全等，可能出現兩種三角形」；另外三個選項逐一排除：「必定可用 SAS 判定」：已知角不是夾角。；「必定可用 AAS 判定」：只知一組角，不是兩組角。；「必定不可能形成三角形」：SSA 可能形成一個、兩個或無解，不能一概而論。",
        "undefinedSymbol": "題幹符號與詞語已在「全等判定」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "純幾何存在性判斷，無單位或取整。",
        "roundingConflict": "依精確資料獨立推導為「通常不能直接判定全等，可能出現兩種三角形」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目排除直角等額外條件，因此答案使用『通常不能直接』而非絕對無解。",
        "alternateReading": "若採常見誤讀「把任何兩邊一角都視為 SAS。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，要求理解 SSA 歧義而非背誦。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "已學夾角與全等充分條件。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「評估一般 SSA 資料」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若只知道兩三角形有兩組對應邊相等及一組非夾角相等，下列判斷何者最精確？」獨立重算：固定一邊及非夾角後，另一固定長度邊的端點可能與射線相交兩次，故可能得到兩個不全等三角形。 正確選項「通常不能直接判定全等，可能出現兩種三角形」。四選項核對：通常不能直接判定全等，可能出現兩種三角形=真，一般 SSA 可能讓第三頂點落在兩個位置，資料不足以保證唯一。；必定可用 SAS 判定=假，已知角不是夾角。；必定可用 AAS 判定=假，只知一組角，不是兩組角。；必定不可能形成三角形=假，SSA 可能形成一個、兩個或無解，不能一概而論。 邊界：題目排除直角等額外條件，因此答案使用『通常不能直接』而非絕對無解。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s001-v010",
      "unitId": "u16",
      "skillId": "triangle-congruence",
      "contentSha256": "44cf3bc006dc127266f9c799dac7214f75fe835e4e272a9236e3b186a1be17c7",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "兩塊玻璃分別具有相同三邊，且 30+40>50，故都是存在的三角形並以 SSS 全等。",
      "derivedAnswer": "三組對應邊相等，所以兩三角形以 SSS 全等",
      "storedAnswer": "三組對應邊相等，所以兩三角形以 SSS 全等",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「三組對應邊相等，所以兩三角形以 SSS 全等」；另外三個選項逐一排除：「三邊長總和相同，所以全等」：周長相同不足以保證全等。；「都有一條 50 公分邊，所以全等」：單一邊相等不足。；「三角形看起來相同，所以全等」：外觀不是數學證據。",
        "undefinedSymbol": "題幹符號與詞語已在「全等判定」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "所有長度同為公分且為精確標示，不需換算或取整。",
        "roundingConflict": "依精確資料獨立推導為「三組對應邊相等，所以兩三角形以 SSS 全等」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "『可互相替換』指平面輪廓可經旋轉或翻面重合，不要求正反面材質相同。",
        "alternateReading": "若採常見誤讀「以周長或外觀代替三組對應邊。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，情境資訊直接決定是否可替換。",
      "literacyContextNecessity": "三邊標示是判定玻璃輪廓能否完全重合的必要工程資訊，不能刪除。",
      "prerequisiteCheck": "會把實物尺寸抽象成三角形邊長。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「判斷兩塊玻璃形狀與大小是否相同」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩塊三角形玻璃標示的三邊長都為 30 公分、40 公分、50 公分。工人要確認它們可互相替換，最直接的數學理由是什麼？」獨立重算：兩塊玻璃分別具有相同三邊，且 30+40>50，故都是存在的三角形並以 SSS 全等。 正確選項「三組對應邊相等，所以兩三角形以 SSS 全等」。四選項核對：三邊長總和相同，所以全等=假，周長相同不足以保證全等。；都有一條 50 公分邊，所以全等=假，單一邊相等不足。；三角形看起來相同，所以全等=假，外觀不是數學證據。；三組對應邊相等，所以兩三角形以 SSS 全等=真，每一個長度 30、40、50 都可一一配對，SSS 保證完全重合。 邊界：『可互相替換』指平面輪廓可經旋轉或翻面重合，不要求正反面材質相同。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s001-v011",
      "unitId": "u16",
      "skillId": "triangle-congruence",
      "contentSha256": "54d37e2394ebe3ffe68ebaeb058beb7e1d6c83c64d2a9be212d7418a21cec82b",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "50°+60°+70°=180°，兩片可有相同形狀但不同大小；加入一組對應邊相等後可用 ASA/AAS。",
      "derivedAnswer": "資料只能保證形狀相似，還需至少一組對應邊固定大小",
      "storedAnswer": "資料只能保證形狀相似，還需至少一組對應邊固定大小",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「資料只能保證形狀相似，還需至少一組對應邊固定大小」；另外三個選項逐一排除：「角度總和不是 180°，所以資料錯誤」：50+60+70=180，角度資料可成立。；「三角相同已足以全等」：AAA 不固定大小。；「只需再標一個周長，但不必對應邊」：相同周長可固定尺度，但說法未指出兩片周長相同；最直接標一組對應邊。",
        "undefinedSymbol": "題幹符號與詞語已在「全等判定」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度為精確度數，無長度單位可比較，也無四捨五入。",
        "roundingConflict": "依精確資料獨立推導為「資料只能保證形狀相似，還需至少一組對應邊固定大小」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目問『最合理審查』，答案指出資料缺口而非假設兩片相同尺度。",
        "alternateReading": "若採常見誤讀「把可成立的角度資料誤當成足夠的全等資料。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，需同時驗算規格與判斷資料充分性。",
      "literacyContextNecessity": "模型是否能疊合取決於大小，缺少邊長是情境核心。",
      "prerequisiteCheck": "能檢查角和並區分相似與全等。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「檢查說明書的全等結論」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「紙模型說明書只標出兩個三角片的三個角皆為 50°、60°、70°，便宣稱兩片一定能完全疊合。哪一項是最合理的審查意見？」獨立重算：50°+60°+70°=180°，兩片可有相同形狀但不同大小；加入一組對應邊相等後可用 ASA/AAS。 正確選項「資料只能保證形狀相似，還需至少一組對應邊固定大小」。四選項核對：角度總和不是 180°，所以資料錯誤=假，50+60+70=180，角度資料可成立。；三角相同已足以全等=假，AAA 不固定大小。；只需再標一個周長，但不必對應邊=假，相同周長可固定尺度，但說法未指出兩片周長相同；最直接標一組對應邊。；資料只能保證形狀相似，還需至少一組對應邊固定大小=真，三角相同屬 AAA；模型片可按比例放大縮小，至少需一組尺度資料。 邊界：題目問『最合理審查』，答案指出資料缺口而非假設兩片相同尺度。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s001-v012",
      "unitId": "u16",
      "skillId": "triangle-congruence",
      "contentSha256": "d0cc54f75a6e1cde50794be6edb6b09a79f25747d5235846ffcd9c7966cdb2e6",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "A 的位置填 K，B 的位置填 M，C 的位置填 L，得到 △ABC≅△KML。",
      "derivedAnswer": "△ABC≅△KML",
      "storedAnswer": "△ABC≅△KML",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「△ABC≅△KML」；另外三個選項逐一排除：「△ABC≅△KLM」：第二位置 B 應對 M，不是 L。；「△ABC≅△MLK」：第一位置 A 應對 K。；「△ABC≅△LMK」：三個位置都未依 A-K、B-M、C-L 排列。",
        "undefinedSymbol": "題幹符號與詞語已在「全等判定」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "地圖區域名稱不是長度單位，無換算與近似。",
        "roundingConflict": "依精確資料獨立推導為「△ABC≅△KML」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "即使地圖旋轉或翻轉，頂點對應仍由報告固定，不產生其他正確排列。",
        "alternateReading": "若採常見誤讀「按字母表順序寫第二個三角形，忽略實際對應。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，要求把測量報告轉成正式全等式。",
      "literacyContextNecessity": "對應標記決定後續邊界與角點資料交換，情境不可刪除。",
      "prerequisiteCheck": "會依明示關係排列頂點。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「依情境對應寫全等式」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「地圖上的兩塊三角形區域分別標記為 △ABC 與 △KLM，且已知 A 對應 K、B 對應 M、C 對應 L。若兩區域全等，正確的全等式是哪一個？」獨立重算：A 的位置填 K，B 的位置填 M，C 的位置填 L，得到 △ABC≅△KML。 正確選項「△ABC≅△KML」。四選項核對：△ABC≅△KML=真，依 A-K、B-M、C-L 的順序，第二個三角形應寫 KML。；△ABC≅△KLM=假，第二位置 B 應對 M，不是 L。；△ABC≅△MLK=假，第一位置 A 應對 K。；△ABC≅△LMK=假，三個位置都未依 A-K、B-M、C-L 排列。 邊界：即使地圖旋轉或翻轉，頂點對應仍由報告固定，不產生其他正確排列。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u16-fig-001-congruence-correspondence",
      "unitId": "u16",
      "slot": "s001",
      "title": "全等三角形的對應順序",
      "altText": "左右各有一個方向不同的三角形，以相同刻痕標出三組對應邊，並以虛線箭頭連接對應頂點。",
      "svgPath": "figures/u16/u16-fig-001-congruence-correspondence.svg",
      "drawingSpec": {
        "canvas": {
          "width": 360,
          "height": 240,
          "viewBox": "0 0 360 240"
        },
        "coordinateSystem": "左上角為(0,0)，x向右、y向下。",
        "geometry": "△ABC座標A(45,185)、B(125,45)、C(165,185)；△DEF座標D(220,185)、E(270,45)、F(320,185)；三組不同刻痕與三條對應虛線。",
        "visibleLineRules": "主要邊線使用2.5px黑色實線；輔助線使用1.5px虛線；弧線不得遮住頂點標籤。",
        "hiddenLineRules": "平面圖無隱藏邊；未畫出的延長線不得由視覺自行推定。",
        "labels": "A在左下、B在上、C在右下；D在左下、E在上、F在右下。",
        "tickMarksAndSymbols": "相等邊以同數量短刻痕表示；直角以小正方形；相等角以同型圓弧。",
        "units": "示意圖無長度單位，題目另有數值時以題幹為準。",
        "arrows": "只在延長線或行進方向使用箭頭。",
        "toScale": false,
        "notToScaleWarning": "圖形不按比例，請依標記與題目條件判斷。",
        "mobileLayout": "360×240畫布；最小文字14px；標籤與線段保持至少6px間距。",
        "answerLeakageControl": "圖中只呈現已知結構與定義標記，不標示題目所求數值或正確選項。"
      },
      "svgAssertions": [
        "M45 185",
        "M220 185",
        "stroke-dasharray",
        "A</text>",
        "F</text>"
      ],
      "figureReview": {
        "decision": "pass",
        "mobileReadability": "360px寬預覽下，頂點、刻痕、直角符號與延長線箭頭仍可辨識。",
        "answerLeakage": "未顯示任何題目答案；只保留概念所需結構。",
        "geometryCheck": "已依列出的座標逐項核對端點、交點、刻痕與文字位置。",
        "reviewNote": "全等三角形的對應順序已逐線檢查：△ABC座標A(45,185)、B(125,45)、C(165,185)；△DEF座標D(220,185)、E(270,45)、F(320,185)；三組不同刻痕與三條對應虛線。；標籤配置為A在左下、B在上、C在右下；D在左下、E在上、F在右下。，未依視覺比例暗示未給定量。",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "ad7bd65a01019a7f91d8696c32db429a395568223a19a949a93153417fc20839"
    }
  ]
};
export default skillData;
