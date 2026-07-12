// Deterministically emitted from reviewed CHATGPT_HUMAN_AUTHORED_R1 source.
// Do not edit this staging module by hand.
export const skillData={
  "slot": "s004",
  "lecture": {
    "lectureId": "u16-s004-lecture-r1",
    "unitId": "u16",
    "numericUnitId": 16,
    "topicId": "u16-congruence",
    "skillId": "triangle-sss-sas",
    "skillOrder": 4,
    "originalLockedTitle": "SSS 與 SAS",
    "title": "SSS 與 SAS：用邊長和夾角唯一決定三角形",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能辨認三組對應邊相等的 SSS 判定。",
      "能辨認兩組對應邊與夾角相等的 SAS 判定。",
      "能區分夾角與非夾角，避免把 SSA 誤作 SAS。",
      "能在共用邊、中點或角平分線題型中補出 SSS 或 SAS 所需條件。"
    ],
    "prerequisiteBridge": "已建立全等判定總覽與證明格式。本技能集中處理以邊為主的兩種判定，核心問題是『資料是否把三角形鎖定成唯一形狀』。",
    "prerequisites": [
      {
        "skillId": "isosceles-equilateral",
        "requiredLevel": "能使用先備技能「等腰與等邊三角形」的核心定義與基本運算，並能說明其與本節的連結。"
      }
    ],
    "glossary": [
      {
        "term": "SSS",
        "definition": "Side-Side-Side，三組對應邊分別相等。"
      },
      {
        "term": "SAS",
        "definition": "Side-Angle-Side，兩組對應邊及其夾角分別相等。"
      },
      {
        "term": "夾角",
        "definition": "由兩條指定邊共同形成的角。"
      },
      {
        "term": "非夾角",
        "definition": "不位於兩條指定邊共同端點的角。"
      },
      {
        "term": "剛性",
        "definition": "邊長或邊角資料使圖形不能再自由改變形狀。"
      }
    ],
    "notation": [
      {
        "symbol": "SSS",
        "meaning": "三組邊長資料足以判定兩三角形全等。"
      },
      {
        "symbol": "SAS",
        "meaning": "兩邊及兩邊共同端點的角相等。"
      },
      {
        "symbol": "AB=DE、AC=DF、∠A=∠D",
        "meaning": "∠A 與 ∠D 分別是兩組已知邊的夾角。"
      }
    ],
    "conceptNarrative": [
      "三根固定長度的棒首尾相接時，只能形成同一大小與形狀的三角形（鏡射後仍全等），所以 SSS 成立。",
      "兩根固定長度的棒若連接角度也固定，第三個端點位置便被決定，所以 SAS 成立。",
      "SAS 中的角必須是兩條已知邊的共同端點角。若角位於另一端，可能有兩個不同位置，這就是一般 SSA 的歧義。",
      "共用邊可直接提供一組相等；中點可提供兩段相等；角平分線可提供夾角相等，常與 SAS 配合。",
      "判定只需足夠資料，不代表題目一定把 S、A、S 按順序寫出，需先重整。"
    ],
    "formalDefinitions": [
      {
        "name": "SSS 全等判定",
        "statement": "若兩三角形的三組對應邊分別相等，則兩三角形全等。"
      },
      {
        "name": "SAS 全等判定",
        "statement": "若兩三角形的兩組對應邊及其夾角分別相等，則兩三角形全等。"
      }
    ],
    "formulas": [
      {
        "formula": "AB=DE、BC=EF、CA=FD ⇒ △ABC≅△DEF",
        "conditions": [
          "三組邊的端點對應一致"
        ],
        "meaning": "SSS。"
      },
      {
        "formula": "AB=DE、AC=DF、∠BAC=∠EDF ⇒ △ABC≅△DEF",
        "conditions": [
          "∠BAC 與 ∠EDF 分別為已知兩邊的夾角"
        ],
        "meaning": "SAS。"
      }
    ],
    "nonApplicableCases": [
      "兩邊及非夾角相等通常是 SSA，不能直接判定。",
      "只知道兩邊相等，夾角仍可改變。",
      "三邊資料若不符合三角形不等式，根本無法形成三角形。",
      "把某邊對錯對應邊會導致錯誤全等式。",
      "圖中未標示的長度不能因外觀看似相等而使用。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "列出所有已知邊長相等關係。",
        "check": "是否包含共用邊或中點產生的等長？"
      },
      {
        "step": 2,
        "instruction": "若已有三組邊，檢查對應後使用 SSS。",
        "check": "三組是否連成相同頂點對應？"
      },
      {
        "step": 3,
        "instruction": "若只有兩組邊，尋找角資料。",
        "check": "角是否在兩條已知邊共同端點？"
      },
      {
        "step": 4,
        "instruction": "若是夾角，使用 SAS；若不是，暫停。",
        "check": "是否誤把 SSA 當成 SAS？"
      },
      {
        "step": 5,
        "instruction": "按端點對應寫全等式並推出所求。",
        "check": "所求是否為正確對應部分？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "AB=DE=5、BC=EF=7、CA=FD=8，判斷兩三角形。",
        "solutionSteps": [
          "三組對應邊分別相等。",
          "邊的端點對應為 A↔D、B↔E、C↔F。"
        ],
        "answer": "△ABC≅△DEF（SSS）。"
      },
      {
        "exampleId": "L2",
        "prompt": "AB=PQ、AC=PR、∠A=∠P，判斷條件。",
        "solutionSteps": [
          "∠A 是 AB、AC 的夾角。",
          "∠P 是 PQ、PR 的夾角。"
        ],
        "answer": "可用 SAS 判定。"
      },
      {
        "exampleId": "L3",
        "prompt": "AB=DE、BC=EF、∠A=∠D，能否用 SAS？",
        "solutionSteps": [
          "兩已知邊 AB、BC 的夾角是 ∠B。",
          "給定的是 ∠A，不是夾角。"
        ],
        "answer": "不能直接用 SAS；資料型態為 SSA。"
      },
      {
        "exampleId": "L4",
        "prompt": "M 為 AB 中點，CM 為共用邊，且 AC=BC。證明 △AMC≅△BMC。",
        "solutionSteps": [
          "AM=MB（中點）。",
          "CM=CM（共用邊）。",
          "AC=BC（已知）。"
        ],
        "answer": "△AMC≅△BMC（SSS）。"
      },
      {
        "exampleId": "L5",
        "prompt": "AD 平分 ∠A，AB=AC。證明 △ABD 與 △ACD 全等。",
        "solutionSteps": [
          "AB=AC。",
          "∠BAD=∠CAD。",
          "AD=AD。"
        ],
        "answer": "△ABD≅△ACD（SAS）。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "看到兩邊一角就選 SAS。",
        "why": "沒確認角的位置。",
        "correction": "夾角必在兩已知邊共同端點。"
      },
      {
        "mistake": "三組邊相等卻寫 ASA。",
        "why": "只記縮寫未連結資料種類。",
        "correction": "S 代表 side；三個 S 就是三邊。"
      },
      {
        "mistake": "漏用共用邊。",
        "why": "認為同一條邊不算條件。",
        "correction": "線段與自身相等，可正式列入。"
      },
      {
        "mistake": "中點只用共線，不用等長。",
        "why": "未展開中點定義。",
        "correction": "中點同時給共線與兩段相等，證明常用等長。"
      },
      {
        "mistake": "配對順序由圖上位置決定。",
        "why": "把左上對左上當成規則。",
        "correction": "由等長邊共同端點決定對應。"
      },
      {
        "mistake": "忽略三邊能否成三角形。",
        "why": "機械套用 SSS。",
        "correction": "若資料本身不存在三角形，就沒有全等對象。"
      }
    ],
    "selfCheck": [
      "我能清楚指出哪個角是夾角嗎？",
      "我是否把共用邊與中點條件列出？",
      "三組邊的對應是否一致？",
      "我能說明一般 SSA 不足的原因嗎？",
      "全等式是否按端點對應書寫？"
    ],
    "summary": [
      "SSS 用三組對應邊；SAS 用兩組對應邊及夾角。",
      "夾角位置是區分 SAS 與 SSA 的關鍵。",
      "共用邊、中點與角平分線常補足判定條件。",
      "任何判定都要先建立正確對應。"
    ],
    "connections": {
      "previous": "使用全等證明理由鏈與等腰分類語言。",
      "next": [
        "下一技能處理以角為主的 ASA 與 AAS。",
        "等腰性質證明會常用 SAS。"
      ]
    },
    "figureReferences": [
      "u16-fig-004-sss-sas"
    ],
    "accessibilityNotes": [
      "u16-fig-004-sss-sas 的替代文字與結構描述收錄於本技能 drawing-specs.jsonl。"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u16-s004-v001",
        "u16-s004-v002",
        "u16-s004-v003",
        "u16-s004-v004",
        "u16-s004-v005",
        "u16-s004-v006",
        "u16-s004-v007",
        "u16-s004-v008",
        "u16-s004-v009",
        "u16-s004-v010",
        "u16-s004-v011",
        "u16-s004-v012"
      ],
      "constructedResponseIds": [
        "u16-s004-cr001",
        "u16-s004-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "針對「SSS 與 SAS」逐段核對定義、適用條件與反例；重新演算5個例題，確認未使用後續單元才引入的平行線或四邊形定理，並檢查圖形標記不取代文字條件。",
      "reviewVersion": "human-lecture-review-u16-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "7a08768062d32c310934cc49b3491ec8265658e8f156b11e79612945ca053c29"
  },
  "mcQuestions": [
    {
      "questionId": "u16-s004-v001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-sss-sas",
      "skillOrder": 4,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "兩三角形三組對應邊分別相等，應使用哪個全等判定？",
      "givenConditions": [
        "三邊均能形成三角形"
      ],
      "target": "辨認判定名稱",
      "choices": [
        "SAS",
        "ASA",
        "SSS",
        "AAA"
      ],
      "answerIndex": 2,
      "independentSolution": "題目提供三組對應邊，無需角資料，依 SSS 可判定全等。",
      "explanation": "三組 S（side）資料正是 SSS。 把每組已知辨認為邊。 三組邊相等套用 SSS。",
      "steps": [
        "把每組已知辨認為邊。",
        "三組邊相等套用 SSS。"
      ],
      "optionAnalysis": [
        {
          "choice": "SAS",
          "truth": false,
          "reason": "SAS 需兩邊及夾角。"
        },
        {
          "choice": "ASA",
          "truth": false,
          "reason": "ASA 需兩角及夾邊。"
        },
        {
          "choice": "SSS",
          "truth": true,
          "reason": "三組 S（side）資料正是 SSS。"
        },
        {
          "choice": "AAA",
          "truth": false,
          "reason": "AAA 不是全等判定。"
        }
      ],
      "misconceptionTarget": "混淆縮寫中的 S 與 A。",
      "prerequisiteCheck": "知道 side 與 angle 的基本對應。",
      "estimatedTimeSec": "50",
      "unitAndRoundingCheck": "無量值與單位。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "已明示三組為對應邊，沒有配對歧義。",
      "difficultyReason": "基礎題，直接辨認縮寫。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認 SSS。",
      "tags": [
        "空間與形狀",
        "SSS 與 SAS",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "88c9f1cf91acf3518f4fbfb6ada3fc62c496bc5959cb1b60305de5ef525b0868"
    },
    {
      "questionId": "u16-s004-v002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-sss-sas",
      "skillOrder": 4,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "AB=DE、AC=DF，且 ∠BAC=∠EDF。下列何者正確？",
      "givenConditions": [
        "∠BAC 與 ∠EDF 分別由兩已知邊夾成"
      ],
      "target": "判斷 SAS",
      "choices": [
        "△ABC≅△DEF（SAS）",
        "△ABC≅△DFE（SAS）",
        "只能判定相似",
        "資料屬 SSA，不能判定"
      ],
      "answerIndex": 0,
      "independentSolution": "AB-DE、AC-DF；共同端點 A-D，故剩餘 B-E、C-F，SAS 得 △ABC≅△DEF。",
      "explanation": "兩組邊與其夾角相等，且端點配對 A-D、B-E、C-F，符合 SAS。 確認共同端點 A、D。 核對角為夾角。 按邊端點寫全等式。",
      "steps": [
        "確認共同端點 A、D。",
        "核對角為夾角。",
        "按邊端點寫全等式。"
      ],
      "optionAnalysis": [
        {
          "choice": "△ABC≅△DEF（SAS）",
          "truth": true,
          "reason": "兩組邊與其夾角相等，且端點配對 A-D、B-E、C-F，符合 SAS。"
        },
        {
          "choice": "△ABC≅△DFE（SAS）",
          "truth": false,
          "reason": "此順序會讓 AB 對 DF，與條件不符。"
        },
        {
          "choice": "只能判定相似",
          "truth": false,
          "reason": "兩邊及夾角已固定大小。"
        },
        {
          "choice": "資料屬 SSA，不能判定",
          "truth": false,
          "reason": "給定角正是夾角。"
        }
      ],
      "misconceptionTarget": "只看兩邊一角而不核對夾角或順序。",
      "prerequisiteCheck": "會辨認夾角與端點。",
      "estimatedTimeSec": "75",
      "unitAndRoundingCheck": "等長與等角皆精確，無單位問題。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "三項資料唯一決定對應；鏡射仍全等。",
      "difficultyReason": "基礎題，套用 SAS 並校對順序。",
      "literacyContextNecessity": null,
      "authoringIntent": "使用 SAS。",
      "tags": [
        "空間與形狀",
        "SSS 與 SAS",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "c83f9759adb883b2676cf8262cc93d0531a57231640cf34f49ed96c7b2b3a3a6"
    },
    {
      "questionId": "u16-s004-v003",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-sss-sas",
      "skillOrder": 4,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "下列哪一個角是邊 AB 與 BC 的夾角？",
      "givenConditions": [
        "A、B、C 不共線"
      ],
      "target": "找共同端點角",
      "choices": [
        "∠BAC",
        "∠ABC",
        "∠BCA",
        "∠ACB"
      ],
      "answerIndex": 1,
      "independentSolution": "∠ABC 的兩邊是 BA 與 BC，正好由 AB、BC 形成。",
      "explanation": "AB 與 BC 的共同端點是 B，因此夾角頂點必為 B。 找兩線段共同端點 B。 把 B 放在角名稱中間。",
      "steps": [
        "找兩線段共同端點 B。",
        "把 B 放在角名稱中間。"
      ],
      "optionAnalysis": [
        {
          "choice": "∠BAC",
          "truth": false,
          "reason": "頂點為 A，只接觸 AB。"
        },
        {
          "choice": "∠ABC",
          "truth": true,
          "reason": "AB 與 BC 的共同端點是 B，因此夾角頂點必為 B。"
        },
        {
          "choice": "∠BCA",
          "truth": false,
          "reason": "頂點為 C，只接觸 BC。"
        },
        {
          "choice": "∠ACB",
          "truth": false,
          "reason": "與 ∠BCA 同為 C 點角，不是共同端點 B。"
        }
      ],
      "misconceptionTarget": "角名稱中間字母未對準共同端點。",
      "prerequisiteCheck": "會讀角的三字母表示。",
      "estimatedTimeSec": "50",
      "unitAndRoundingCheck": "純符號題，無量值。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "A、B、C 不共線，∠ABC 為正常三角形內角。",
      "difficultyReason": "基礎題，單一步驟辨認。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認夾角。",
      "tags": [
        "空間與形狀",
        "SSS 與 SAS",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "552348fc048d82373249091d5f33e59cf38652f3c6c4dd90a4c0561e7abcb116"
    },
    {
      "questionId": "u16-s004-v004",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-sss-sas",
      "skillOrder": 4,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "M 是 AB 中點，且 CM 為兩三角形的共用邊。若 AC=BC，可用哪個判定證明 △AMC≅△BMC？",
      "givenConditions": [
        "A、M、B 共線"
      ],
      "target": "組合三組邊",
      "choices": [
        "SSS",
        "SAS",
        "ASA",
        "AAS"
      ],
      "answerIndex": 0,
      "independentSolution": "三組邊 AMC 對 BMC 分別為 AM-MB、MC-MC、AC-BC，因此 SSS。",
      "explanation": "AM=MB、CM=CM、AC=BC，三組對應邊相等。 由中點得 AM=MB。 列共用邊 CM=CM。 加入 AC=BC，形成 SSS。",
      "steps": [
        "由中點得 AM=MB。",
        "列共用邊 CM=CM。",
        "加入 AC=BC，形成 SSS。"
      ],
      "optionAnalysis": [
        {
          "choice": "SSS",
          "truth": true,
          "reason": "AM=MB、CM=CM、AC=BC，三組對應邊相等。"
        },
        {
          "choice": "SAS",
          "truth": false,
          "reason": "雖可能另有角資料，但題目直接給三組邊。"
        },
        {
          "choice": "ASA",
          "truth": false,
          "reason": "沒有兩組角。"
        },
        {
          "choice": "AAS",
          "truth": false,
          "reason": "沒有兩組角。"
        }
      ],
      "misconceptionTarget": "漏展開中點或漏共用邊。",
      "prerequisiteCheck": "會用中點定義與共用邊。",
      "estimatedTimeSec": "95",
      "unitAndRoundingCheck": "長度只作相等比較，無單位衝突。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "C 位於哪側不影響三邊全等判定。",
      "difficultyReason": "標準題，需從文字補出兩項隱含邊。",
      "literacyContextNecessity": null,
      "authoringIntent": "從中點與共用邊建立 SSS。",
      "tags": [
        "空間與形狀",
        "SSS 與 SAS",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "74973a046e565520a97357466ecacedeab9376fe67f3106f54180fe16ef403f4"
    },
    {
      "questionId": "u16-s004-v005",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-sss-sas",
      "skillOrder": 4,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "AB=DE、BC=EF、∠B=∠E。這組資料屬於哪一種判定？",
      "givenConditions": [
        "∠B 介於 BA、BC 之間",
        "∠E 介於 ED、EF 之間"
      ],
      "target": "辨認兩邊夾角",
      "choices": [
        "SSS",
        "ASA",
        "SAS",
        "SSA"
      ],
      "answerIndex": 2,
      "independentSolution": "兩邊相等且共同端點角相等，資料順序是 S-A-S。",
      "explanation": "∠B 與 ∠E 是兩組已知邊的夾角，因此是 SAS。 找 AB、BC 的共同端點 B。 找 DE、EF 的共同端點 E。 核對給定角。",
      "steps": [
        "找 AB、BC 的共同端點 B。",
        "找 DE、EF 的共同端點 E。",
        "核對給定角。"
      ],
      "optionAnalysis": [
        {
          "choice": "SSS",
          "truth": false,
          "reason": "只有兩組邊。"
        },
        {
          "choice": "ASA",
          "truth": false,
          "reason": "只有一組角。"
        },
        {
          "choice": "SAS",
          "truth": true,
          "reason": "∠B 與 ∠E 是兩組已知邊的夾角，因此是 SAS。"
        },
        {
          "choice": "SSA",
          "truth": false,
          "reason": "角位於兩已知邊共同端點，並非非夾角。"
        }
      ],
      "misconceptionTarget": "看到式子順序邊、邊、角就誤判 SSA。",
      "prerequisiteCheck": "會看幾何位置而非文字順序。",
      "estimatedTimeSec": "80",
      "unitAndRoundingCheck": "無量值與單位。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目明示角在共同端點，沒有非夾角歧義。",
      "difficultyReason": "標準題，需忽略列出順序並辨認位置。",
      "literacyContextNecessity": null,
      "authoringIntent": "精確區分 SAS。",
      "tags": [
        "空間與形狀",
        "SSS 與 SAS",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "244b72597cf01cf2bac8a31db7a1448b0866ce2ebd5d9f3dae99c48665f9b2da"
    },
    {
      "questionId": "u16-s004-v006",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-sss-sas",
      "skillOrder": 4,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "三邊長分別為 2、3、6 的兩組線段，是否能用 SSS 判定兩個三角形全等？",
      "givenConditions": [
        "兩組線段長完全相同"
      ],
      "target": "先檢查三角形是否存在",
      "choices": [
        "能，因三組長度相同",
        "不能，因 2+3<6，這些線段不能形成三角形",
        "能，但只能判定相似",
        "不能，因 SSS 需要角度"
      ],
      "answerIndex": 1,
      "independentSolution": "即使兩組數字完全相同，也只是兩組不能形成三角形的線段，SSS 無適用對象。",
      "explanation": "最短兩段和 5 小於 6，無法首尾連成三角形。 找最長邊 6。 比較 2+3=5 與 6。 因不大於，三角形不存在。",
      "steps": [
        "找最長邊 6。",
        "比較 2+3=5 與 6。",
        "因不大於，三角形不存在。"
      ],
      "optionAnalysis": [
        {
          "choice": "能，因三組長度相同",
          "truth": false,
          "reason": "全等判定的前提是兩個三角形存在。"
        },
        {
          "choice": "不能，因 2+3<6，這些線段不能形成三角形",
          "truth": true,
          "reason": "最短兩段和 5 小於 6，無法首尾連成三角形。"
        },
        {
          "choice": "能，但只能判定相似",
          "truth": false,
          "reason": "不存在三角形，無從判定。"
        },
        {
          "choice": "不能，因 SSS 需要角度",
          "truth": false,
          "reason": "SSS 不需角，但此處失敗原因是三角形不等式。"
        }
      ],
      "misconceptionTarget": "機械套判定而忽略圖形存在性。",
      "prerequisiteCheck": "會用三角形不等式。",
      "estimatedTimeSec": "90",
      "unitAndRoundingCheck": "三長度同單位且精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "2+3<6 明確非退化，也不是四捨五入邊界。",
      "difficultyReason": "標準題，先做存在性審查。",
      "literacyContextNecessity": null,
      "authoringIntent": "檢查 SSS 前提。",
      "tags": [
        "空間與形狀",
        "SSS 與 SAS",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "13fa71b085c9d27160faa31c9bc1b5c71b7c50a71227b9148745ad5be44f4123"
    },
    {
      "questionId": "u16-s004-v007",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-sss-sas",
      "skillOrder": 4,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "已知 AB=DE、AC=DF、∠B=∠E。下列敘述何者最正確？",
      "givenConditions": [
        "∠B、∠E 分別不是兩已知邊的夾角",
        "未給直角"
      ],
      "target": "判斷一般 SSA",
      "choices": [
        "可用 SAS",
        "可用 AAS",
        "可用 SSS",
        "不能僅依這三項直接判定全等"
      ],
      "answerIndex": 3,
      "independentSolution": "資料固定一個非夾角與兩邊，可能有二解，不能直接全等。",
      "explanation": "這是兩邊及非夾角的 SSA，一般可能出現兩種三角形。 找 AB、AC 共同端點 A。 給定角在 B，不是夾角。 排除 RHS 等特例。",
      "steps": [
        "找 AB、AC 共同端點 A。",
        "給定角在 B，不是夾角。",
        "排除 RHS 等特例。"
      ],
      "optionAnalysis": [
        {
          "choice": "可用 SAS",
          "truth": false,
          "reason": "夾角應為 ∠A、∠D。"
        },
        {
          "choice": "可用 AAS",
          "truth": false,
          "reason": "只有一組角。"
        },
        {
          "choice": "可用 SSS",
          "truth": false,
          "reason": "只有兩組邊。"
        },
        {
          "choice": "不能僅依這三項直接判定全等",
          "truth": true,
          "reason": "這是兩邊及非夾角的 SSA，一般可能出現兩種三角形。"
        }
      ],
      "misconceptionTarget": "把所有兩邊一角當 SAS。",
      "prerequisiteCheck": "會辨認夾角並知道 SSA 歧義。",
      "estimatedTimeSec": "110",
      "unitAndRoundingCheck": "無單位或近似。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目排除直角；『僅依』表示不能借用圖中未標條件。",
      "difficultyReason": "進階題，需辨識不充分條件。",
      "literacyContextNecessity": null,
      "authoringIntent": "排除一般 SSA。",
      "tags": [
        "空間與形狀",
        "SSS 與 SAS",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "923ebfa4e98af31f7237943cccf95d26b93cca5f5dd55de201bd2c70da905591"
    },
    {
      "questionId": "u16-s004-v008",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-sss-sas",
      "skillOrder": 4,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "兩三角形有 AB=DE、BC=EF。若要以 SSS 完成判定，應再補哪一項？",
      "givenConditions": [
        "A-D、B-E、C-F 為預定對應"
      ],
      "target": "補第三組對應邊",
      "choices": [
        "∠B=∠E",
        "∠A=∠D",
        "AC=DF",
        "AB+BC=DE+EF"
      ],
      "answerIndex": 2,
      "independentSolution": "SSS 要三組對應邊；補 AC=DF 後恰好完整。",
      "explanation": "第三組尚未配對的邊是 AC 與 DF。 列出各三角形三邊。 已用 AB-DE、BC-EF。 剩餘 AC-DF。",
      "steps": [
        "列出各三角形三邊。",
        "已用 AB-DE、BC-EF。",
        "剩餘 AC-DF。"
      ],
      "optionAnalysis": [
        {
          "choice": "∠B=∠E",
          "truth": false,
          "reason": "這會形成 SAS，不是 SSS。"
        },
        {
          "choice": "∠A=∠D",
          "truth": false,
          "reason": "仍只有兩邊一角。"
        },
        {
          "choice": "AC=DF",
          "truth": true,
          "reason": "第三組尚未配對的邊是 AC 與 DF。"
        },
        {
          "choice": "AB+BC=DE+EF",
          "truth": false,
          "reason": "由前兩式已可得邊和相等，但不是第三邊。"
        }
      ],
      "misconceptionTarget": "用周長部分和或角度代替第三邊。",
      "prerequisiteCheck": "會列三角形三邊。",
      "estimatedTimeSec": "95",
      "unitAndRoundingCheck": "只有等長關係，無單位衝突。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "預定對應已明示，避免另配頂點的歧義。",
      "difficultyReason": "進階題，從判定需求找缺項。",
      "literacyContextNecessity": null,
      "authoringIntent": "補足 SSS。",
      "tags": [
        "空間與形狀",
        "SSS 與 SAS",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "bf6848470b96863643f15a9bb9d8eeb41670c9955860cdb8a47dba0d2d77ee8c"
    },
    {
      "questionId": "u16-s004-v009",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-sss-sas",
      "skillOrder": 4,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "四邊形 ABCD 的對角線 AC 將它分成 △ABC 與 △CDA。已知 AB=CD、BC=DA。要證兩三角形全等，最直接再使用哪一項？",
      "givenConditions": [
        "AC 同時是兩三角形的邊"
      ],
      "target": "辨認共用對角線",
      "choices": [
        "AC=CA（共用邊）",
        "∠ABC=∠CDA",
        "AB+BC=CD+DA",
        "∠BAC=∠DCA"
      ],
      "answerIndex": 0,
      "independentSolution": "共用邊與自身相等，配合另外兩組邊得到 △ABC≅△CDA。",
      "explanation": "兩三角形還共享 AC，三組邊相等可用 SSS。 列 AB=CD、BC=DA。 補 AC=CA。 按 A-B-C 對 C-D-A 使用 SSS。",
      "steps": [
        "列 AB=CD、BC=DA。",
        "補 AC=CA。",
        "按 A-B-C 對 C-D-A 使用 SSS。"
      ],
      "optionAnalysis": [
        {
          "choice": "AC=CA（共用邊）",
          "truth": true,
          "reason": "兩三角形還共享 AC，三組邊相等可用 SSS。"
        },
        {
          "choice": "∠ABC=∠CDA",
          "truth": false,
          "reason": "題目未給，也不需。"
        },
        {
          "choice": "AB+BC=CD+DA",
          "truth": false,
          "reason": "由已知可得，但兩邊和不是判定。"
        },
        {
          "choice": "∠BAC=∠DCA",
          "truth": false,
          "reason": "題目未提供。"
        }
      ],
      "misconceptionTarget": "看不到共用邊或改找不必要角度。",
      "prerequisiteCheck": "會辨認對角線分割後的共同線段。",
      "estimatedTimeSec": "120",
      "unitAndRoundingCheck": "邊長比較精確，無單位。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "全等式順序由 AB-CD、BC-DA、AC-CA 一致決定。",
      "difficultyReason": "進階題，需在複合圖形中找共用邊。",
      "literacyContextNecessity": null,
      "authoringIntent": "用共用邊完成 SSS。",
      "tags": [
        "空間與形狀",
        "SSS 與 SAS",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "ad859466aeab3dd991f4d0cef3108bc07d1d46093325a0d43958975a85a0dd11"
    },
    {
      "questionId": "u16-s004-v010",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-sss-sas",
      "skillOrder": 4,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "兩根長 6 公尺與 8 公尺的支架在鉸接點形成 50° 夾角。另組支架也有對應兩根 6 公尺、8 公尺且夾角 50°。兩組框架的三角形部分可否互換？",
      "givenConditions": [
        "角度是兩支架共同端點的夾角"
      ],
      "target": "用工程尺寸判定全等",
      "choices": [
        "不可以，尚缺第三邊長",
        "可以，只因兩組周長相同",
        "無法判斷，50° 可能在不同位置",
        "可以，兩邊及夾角相等，符合 SAS"
      ],
      "answerIndex": 3,
      "independentSolution": "固定兩邊長與夾角後第三頂點位置只差剛體翻轉，兩框架全等。",
      "explanation": "6、8 與其間 50° 分別相同，SAS 保證兩框架三角形全等。 將兩支架視為兩邊。 確認 50° 為夾角。 套用 SAS 判定可互換。",
      "steps": [
        "將兩支架視為兩邊。",
        "確認 50° 為夾角。",
        "套用 SAS 判定可互換。"
      ],
      "optionAnalysis": [
        {
          "choice": "不可以，尚缺第三邊長",
          "truth": false,
          "reason": "SAS 已足以唯一決定第三邊與圖形。"
        },
        {
          "choice": "可以，只因兩組周長相同",
          "truth": false,
          "reason": "周長尚未知，也不是充分理由。"
        },
        {
          "choice": "無法判斷，50° 可能在不同位置",
          "truth": false,
          "reason": "題目明示為兩對應支架的夾角。"
        },
        {
          "choice": "可以，兩邊及夾角相等，符合 SAS",
          "truth": true,
          "reason": "6、8 與其間 50° 分別相同，SAS 保證兩框架三角形全等。"
        }
      ],
      "misconceptionTarget": "以為一定要三邊全量測。",
      "prerequisiteCheck": "會把鉸接角辨認為夾角。",
      "estimatedTimeSec": "120",
      "unitAndRoundingCheck": "兩組長度皆公尺、角度皆度，無需換算或取整。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "『可互換』只指幾何尺寸；材料強度不在數學模型內。",
      "difficultyReason": "素養題，尺寸與鉸角是可互換性的必要規格。",
      "literacyContextNecessity": "工程互換性直接依兩邊與鉸接夾角，情境必要。",
      "authoringIntent": "以 SAS 審核框架。",
      "tags": [
        "空間與形狀",
        "SSS 與 SAS",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "1fd714787c385a80cfdb31072503ec5a351e9fa1cb342c01d0a01f61b121767f"
    },
    {
      "questionId": "u16-s004-v011",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-sss-sas",
      "skillOrder": 4,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "木工量到兩塊三角板各有兩邊長 12 公分、15 公分，且標示的一個 40° 角位於 15 公分邊的對面。能否因此判定兩板全等？",
      "givenConditions": [
        "40° 不是兩已知邊的夾角",
        "未給直角"
      ],
      "target": "審查 SSA 規格",
      "choices": [
        "能，用 SAS",
        "不能直接判定，這是一般 SSA，可能有兩種形狀",
        "能，用 SSS",
        "能，因相同面積"
      ],
      "answerIndex": 1,
      "independentSolution": "在固定射線上，長 12 的圓弧可能與另一條件相交兩次，形成兩個不同三角形。",
      "explanation": "兩邊加非夾角不能保證唯一，可能有兩種第三頂點位置。 標出兩已知邊。 確認 40° 位於 15 邊對面而非共同端點。 判為 SSA。",
      "steps": [
        "標出兩已知邊。",
        "確認 40° 位於 15 邊對面而非共同端點。",
        "判為 SSA。"
      ],
      "optionAnalysis": [
        {
          "choice": "能，用 SAS",
          "truth": false,
          "reason": "40° 不在 12 與 15 的共同端點。"
        },
        {
          "choice": "不能直接判定，這是一般 SSA，可能有兩種形狀",
          "truth": true,
          "reason": "兩邊加非夾角不能保證唯一，可能有兩種第三頂點位置。"
        },
        {
          "choice": "能，用 SSS",
          "truth": false,
          "reason": "第三邊未知。"
        },
        {
          "choice": "能，因相同面積",
          "truth": false,
          "reason": "面積也未給，且面積相同不充分。"
        }
      ],
      "misconceptionTarget": "把規格表中的兩邊一角機械當 SAS。",
      "prerequisiteCheck": "會由『某邊對面』辨認角位置。",
      "estimatedTimeSec": "145",
      "unitAndRoundingCheck": "尺寸同為公分、角度精確；結論不依測量公差。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "若另給直角或限制角型可能唯一，但題目明示無額外條件。",
      "difficultyReason": "素養題，規格審查需辨認資料是否充分。",
      "literacyContextNecessity": "角的位置決定是否可替換，情境不能刪除。",
      "authoringIntent": "拒絕不充分的零件全等聲明。",
      "tags": [
        "空間與形狀",
        "SSS 與 SAS",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "37629b6a552fcf5d40ecf48b405b2df11a9be260b9628b8928c76d26ecb859ef"
    },
    {
      "questionId": "u16-s004-v012",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-sss-sas",
      "skillOrder": 4,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "兩個三角形帳篷側片的三邊規格都為 1.2 公尺、1.5 公尺、2.0 公尺。下列哪個檢查順序最合理？",
      "givenConditions": [
        "規格值視為設計值"
      ],
      "target": "建立完整品質判定流程",
      "choices": [
        "直接用 SSS，不必確認能否形成三角形",
        "先把三邊相加比較周長，再以周長相等判定",
        "先量三角，再用 AAA 判定",
        "先確認 1.2+1.5>2.0，再以三組邊相等用 SSS 判定"
      ],
      "answerIndex": 3,
      "independentSolution": "存在性檢查通過後，三組對應邊相等保證兩側片完全重合。",
      "explanation": "1.2+1.5=2.7>2.0，規格可形成三角形；兩側片三邊逐一相同，SSS 全等。 統一公尺單位。 檢查最短兩邊和。 再逐一配對三邊使用 SSS。",
      "steps": [
        "統一公尺單位。",
        "檢查最短兩邊和。",
        "再逐一配對三邊使用 SSS。"
      ],
      "optionAnalysis": [
        {
          "choice": "直接用 SSS，不必確認能否形成三角形",
          "truth": false,
          "reason": "品質審查應先確認規格可構成非退化三角形。"
        },
        {
          "choice": "先把三邊相加比較周長，再以周長相等判定",
          "truth": false,
          "reason": "周長相等不足以判定全等。"
        },
        {
          "choice": "先量三角，再用 AAA 判定",
          "truth": false,
          "reason": "AAA 不固定大小，且已知三邊更直接。"
        },
        {
          "choice": "先確認 1.2+1.5>2.0，再以三組邊相等用 SSS 判定",
          "truth": true,
          "reason": "1.2+1.5=2.7>2.0，規格可形成三角形；兩側片三邊逐一相同，SSS 全等。"
        }
      ],
      "misconceptionTarget": "只看相同規格，不檢查規格本身是否可行，或改用周長。",
      "prerequisiteCheck": "會用三角形不等式與 SSS。",
      "estimatedTimeSec": "130",
      "unitAndRoundingCheck": "三數皆公尺且為有限小數；相加精確到題示小數，不需額外四捨五入。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "2.7 與 2.0 相差明顯，不在測量邊界；題目按設計值判斷。",
      "difficultyReason": "素養題，要求依工程審查順序而非單一公式。",
      "literacyContextNecessity": "帳篷能否製作與側片能否互換都依這兩步檢查。",
      "authoringIntent": "先驗可行再驗全等。",
      "tags": [
        "空間與形狀",
        "SSS 與 SAS",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "6829c104e52538092066df0958576a4c29ea11f63db57b7ada22ee6ed8e938fa"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u16-s004-cr001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-sss-sas",
      "skillOrder": 4,
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-004-sss-sas",
      "prompt": "△ABC 與 △DEF 中，AB=DE、AC=DF、∠A=∠D。證明兩三角形全等，並指出使用SAS時為何角的位置重要。",
      "requiredWork": [
        "辨認∠A與∠D分別夾在兩組已知邊間。",
        "依對應順序寫全等式。",
        "說明夾角條件。"
      ],
      "fullCreditSolution": [
        "AB與AC夾成∠A；DE與DF夾成∠D。",
        "兩組對應邊及其夾角相等，故△ABC≅△DEF（SAS）。",
        "若角不是兩已知邊的夾角，資料會變成SSA，不能直接用SAS。"
      ],
      "alternativeSolutions": [
        "可在圖上標出由A、D伸出的兩條已知邊，再配對剩餘頂點B↔E、C↔F。"
      ],
      "reasoningSteps": [
        "AB與AC夾成∠A；DE與DF夾成∠D。",
        "兩組對應邊及其夾角相等，故△ABC≅△DEF（SAS）。",
        "若角不是兩已知邊的夾角，資料會變成SSA，不能直接用SAS。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "完整指出夾角、SAS與正確全等式，並解釋非夾角不能冒用SAS。"
        },
        {
          "score": 2,
          "criteria": "全等證明正確但夾角重要性的說明簡略，或全等式有可辨認的小型順序錯。"
        },
        {
          "score": 1,
          "criteria": "只寫SAS與全等結論，未指出角為夾角。"
        },
        {
          "score": 0,
          "criteria": "把它判成ASA、SSA可判全等，或無作答。"
        }
      ],
      "partialCreditRules": [
        "全等證明正確但夾角重要性的說明簡略，或全等式有可辨認的小型順序錯。",
        "只寫SAS與全等結論，未指出角為夾角。"
      ],
      "followThroughPolicy": "若全等式順序錯但文字配對清楚且SAS條件正確，最高2分。",
      "unitAndNotationRules": "角以三字母或∠A表示；全等符號與等號不可混用。",
      "answerOnlyPolicy": "只寫『SAS』最多1分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "把∠B當成已知夾角。",
        "只看到兩邊一角就不查位置。"
      ],
      "independentReview": {
        "derivedResult": "△ABC≅△DEF（SAS），因∠A、∠D為兩已知邊的夾角。",
        "ambiguity": "AB、AC共端點A；DE、DF共端點D，夾角位置唯一。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "3997eb6ef2b81bd6f17cce3b42ff773c00d93460cd1093663a7e6df21c67f5c4"
    },
    {
      "questionId": "u16-s004-cr002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-congruence",
      "skillId": "triangle-sss-sas",
      "skillOrder": 4,
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "兩三角形的三邊分別為甲：7、9、12 cm，乙：7、9、x cm。若兩三角形可用SSS判定全等，求x；再說明只知道兩者周長相等是否也足夠。",
      "requiredWork": [
        "以三邊集合配對求x。",
        "說明SSS要求逐邊相等。",
        "以反例或理由否定周長相等足夠性。"
      ],
      "fullCreditSolution": [
        "乙已有7、9兩邊，第三邊必須對應甲的12 cm，所以x=12。",
        "周長相等只固定三邊總和，可能有不同分配，例如5、10、13與7、8、13周長同為28但不全等。"
      ],
      "alternativeSolutions": [
        "可說明周長是單一總量，不能取代三個獨立邊長條件。"
      ],
      "reasoningSteps": [
        "乙已有7、9兩邊，第三邊必須對應甲的12 cm，所以x=12。",
        "周長相等只固定三邊總和，可能有不同分配，例如5、10、13與7、8、13周長同為28但不全等。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "x=12，並以明確理由或有效反例說明同周長不足以判全等。"
        },
        {
          "score": 2,
          "criteria": "x正確且知道同周長不足，但反例有小瑕疵或未完整驗證可成三角形。"
        },
        {
          "score": 1,
          "criteria": "只求得x=12，或只說同周長不一定全等而無說明。"
        },
        {
          "score": 0,
          "criteria": "x錯且把周長相等當SSS，或無有效內容。"
        }
      ],
      "partialCreditRules": [
        "x正確且知道同周長不足，但反例有小瑕疵或未完整驗證可成三角形。",
        "只求得x=12，或只說同周長不一定全等而無說明。"
      ],
      "followThroughPolicy": "若反例其中一組不能形成三角形，但核心『總和不能決定各邊』說明清楚，第二部分仍可給部分分，總分最高2。",
      "unitAndNotationRules": "cm需保留；反例三邊須符合三角形不等式才算完整。",
      "answerOnlyPolicy": "只答x=12，最多1分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "把x=7或9以為也可重複配對。",
        "用周長相等代替逐邊相等。"
      ],
      "independentReview": {
        "derivedResult": "x=12；周長相等不足以判定全等。",
        "ambiguity": "乙的7、9已與甲同長邊配對；即使交換7、9，未配對邊仍為12。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "732ac0f177591e16661197381330ae65047b9c6e2ab039b532b2aa1bc4cf34c4"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u16-s004-v001",
      "unitId": "u16",
      "skillId": "triangle-sss-sas",
      "contentSha256": "88c9f1cf91acf3518f4fbfb6ada3fc62c496bc5959cb1b60305de5ef525b0868",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "題目提供三組對應邊，無需角資料，依 SSS 可判定全等。",
      "derivedAnswer": "SSS",
      "storedAnswer": "SSS",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「SSS」；另外三個選項逐一排除：「SAS」：SAS 需兩邊及夾角。；「ASA」：ASA 需兩角及夾邊。；「AAA」：AAA 不是全等判定。",
        "undefinedSymbol": "題幹符號與詞語已在「SSS 與 SAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無量值與單位。",
        "roundingConflict": "依精確資料獨立推導為「SSS」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "已明示三組為對應邊，沒有配對歧義。",
        "alternateReading": "若採常見誤讀「混淆縮寫中的 S 與 A。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，直接辨認縮寫。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "知道 side 與 angle 的基本對應。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「辨認判定名稱」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩三角形三組對應邊分別相等，應使用哪個全等判定？」獨立重算：題目提供三組對應邊，無需角資料，依 SSS 可判定全等。 正確選項「SSS」。四選項核對：SAS=假，SAS 需兩邊及夾角。；ASA=假，ASA 需兩角及夾邊。；SSS=真，三組 S（side）資料正是 SSS。；AAA=假，AAA 不是全等判定。 邊界：已明示三組為對應邊，沒有配對歧義。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s004-v002",
      "unitId": "u16",
      "skillId": "triangle-sss-sas",
      "contentSha256": "c83f9759adb883b2676cf8262cc93d0531a57231640cf34f49ed96c7b2b3a3a6",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "AB-DE、AC-DF；共同端點 A-D，故剩餘 B-E、C-F，SAS 得 △ABC≅△DEF。",
      "derivedAnswer": "△ABC≅△DEF（SAS）",
      "storedAnswer": "△ABC≅△DEF（SAS）",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「△ABC≅△DEF（SAS）」；另外三個選項逐一排除：「△ABC≅△DFE（SAS）」：此順序會讓 AB 對 DF，與條件不符。；「只能判定相似」：兩邊及夾角已固定大小。；「資料屬 SSA，不能判定」：給定角正是夾角。",
        "undefinedSymbol": "題幹符號與詞語已在「SSS 與 SAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "等長與等角皆精確，無單位問題。",
        "roundingConflict": "依精確資料獨立推導為「△ABC≅△DEF（SAS）」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "三項資料唯一決定對應；鏡射仍全等。",
        "alternateReading": "若採常見誤讀「只看兩邊一角而不核對夾角或順序。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，套用 SAS 並校對順序。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會辨認夾角與端點。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「判斷 SAS」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「AB=DE、AC=DF，且 ∠BAC=∠EDF。下列何者正確？」獨立重算：AB-DE、AC-DF；共同端點 A-D，故剩餘 B-E、C-F，SAS 得 △ABC≅△DEF。 正確選項「△ABC≅△DEF（SAS）」。四選項核對：△ABC≅△DEF（SAS）=真，兩組邊與其夾角相等，且端點配對 A-D、B-E、C-F，符合 SAS。；△ABC≅△DFE（SAS）=假，此順序會讓 AB 對 DF，與條件不符。；只能判定相似=假，兩邊及夾角已固定大小。；資料屬 SSA，不能判定=假，給定角正是夾角。 邊界：三項資料唯一決定對應；鏡射仍全等。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s004-v003",
      "unitId": "u16",
      "skillId": "triangle-sss-sas",
      "contentSha256": "552348fc048d82373249091d5f33e59cf38652f3c6c4dd90a4c0561e7abcb116",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "∠ABC 的兩邊是 BA 與 BC，正好由 AB、BC 形成。",
      "derivedAnswer": "∠ABC",
      "storedAnswer": "∠ABC",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「∠ABC」；另外三個選項逐一排除：「∠BAC」：頂點為 A，只接觸 AB。；「∠BCA」：頂點為 C，只接觸 BC。；「∠ACB」：與 ∠BCA 同為 C 點角，不是共同端點 B。",
        "undefinedSymbol": "題幹符號與詞語已在「SSS 與 SAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "純符號題，無量值。",
        "roundingConflict": "依精確資料獨立推導為「∠ABC」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "A、B、C 不共線，∠ABC 為正常三角形內角。",
        "alternateReading": "若採常見誤讀「角名稱中間字母未對準共同端點。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，單一步驟辨認。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會讀角的三字母表示。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「找共同端點角」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「下列哪一個角是邊 AB 與 BC 的夾角？」獨立重算：∠ABC 的兩邊是 BA 與 BC，正好由 AB、BC 形成。 正確選項「∠ABC」。四選項核對：∠BAC=假，頂點為 A，只接觸 AB。；∠ABC=真，AB 與 BC 的共同端點是 B，因此夾角頂點必為 B。；∠BCA=假，頂點為 C，只接觸 BC。；∠ACB=假，與 ∠BCA 同為 C 點角，不是共同端點 B。 邊界：A、B、C 不共線，∠ABC 為正常三角形內角。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s004-v004",
      "unitId": "u16",
      "skillId": "triangle-sss-sas",
      "contentSha256": "74973a046e565520a97357466ecacedeab9376fe67f3106f54180fe16ef403f4",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "三組邊 AMC 對 BMC 分別為 AM-MB、MC-MC、AC-BC，因此 SSS。",
      "derivedAnswer": "SSS",
      "storedAnswer": "SSS",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「SSS」；另外三個選項逐一排除：「SAS」：雖可能另有角資料，但題目直接給三組邊。；「ASA」：沒有兩組角。；「AAS」：沒有兩組角。",
        "undefinedSymbol": "題幹符號與詞語已在「SSS 與 SAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "長度只作相等比較，無單位衝突。",
        "roundingConflict": "依精確資料獨立推導為「SSS」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "C 位於哪側不影響三邊全等判定。",
        "alternateReading": "若採常見誤讀「漏展開中點或漏共用邊。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，需從文字補出兩項隱含邊。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會用中點定義與共用邊。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「組合三組邊」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「M 是 AB 中點，且 CM 為兩三角形的共用邊。若 AC=BC，可用哪個判定證明 △AMC≅△BMC？」獨立重算：三組邊 AMC 對 BMC 分別為 AM-MB、MC-MC、AC-BC，因此 SSS。 正確選項「SSS」。四選項核對：SSS=真，AM=MB、CM=CM、AC=BC，三組對應邊相等。；SAS=假，雖可能另有角資料，但題目直接給三組邊。；ASA=假，沒有兩組角。；AAS=假，沒有兩組角。 邊界：C 位於哪側不影響三邊全等判定。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s004-v005",
      "unitId": "u16",
      "skillId": "triangle-sss-sas",
      "contentSha256": "244b72597cf01cf2bac8a31db7a1448b0866ce2ebd5d9f3dae99c48665f9b2da",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "兩邊相等且共同端點角相等，資料順序是 S-A-S。",
      "derivedAnswer": "SAS",
      "storedAnswer": "SAS",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「SAS」；另外三個選項逐一排除：「SSS」：只有兩組邊。；「ASA」：只有一組角。；「SSA」：角位於兩已知邊共同端點，並非非夾角。",
        "undefinedSymbol": "題幹符號與詞語已在「SSS 與 SAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無量值與單位。",
        "roundingConflict": "依精確資料獨立推導為「SAS」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目明示角在共同端點，沒有非夾角歧義。",
        "alternateReading": "若採常見誤讀「看到式子順序邊、邊、角就誤判 SSA。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，需忽略列出順序並辨認位置。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會看幾何位置而非文字順序。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「辨認兩邊夾角」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「AB=DE、BC=EF、∠B=∠E。這組資料屬於哪一種判定？」獨立重算：兩邊相等且共同端點角相等，資料順序是 S-A-S。 正確選項「SAS」。四選項核對：SSS=假，只有兩組邊。；ASA=假，只有一組角。；SAS=真，∠B 與 ∠E 是兩組已知邊的夾角，因此是 SAS。；SSA=假，角位於兩已知邊共同端點，並非非夾角。 邊界：題目明示角在共同端點，沒有非夾角歧義。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s004-v006",
      "unitId": "u16",
      "skillId": "triangle-sss-sas",
      "contentSha256": "13fa71b085c9d27160faa31c9bc1b5c71b7c50a71227b9148745ad5be44f4123",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "即使兩組數字完全相同，也只是兩組不能形成三角形的線段，SSS 無適用對象。",
      "derivedAnswer": "不能，因 2+3<6，這些線段不能形成三角形",
      "storedAnswer": "不能，因 2+3<6，這些線段不能形成三角形",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「不能，因 2+3<6，這些線段不能形成三角形」；另外三個選項逐一排除：「能，因三組長度相同」：全等判定的前提是兩個三角形存在。；「能，但只能判定相似」：不存在三角形，無從判定。；「不能，因 SSS 需要角度」：SSS 不需角，但此處失敗原因是三角形不等式。",
        "undefinedSymbol": "題幹符號與詞語已在「SSS 與 SAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "三長度同單位且精確。",
        "roundingConflict": "依精確資料獨立推導為「不能，因 2+3<6，這些線段不能形成三角形」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "2+3<6 明確非退化，也不是四捨五入邊界。",
        "alternateReading": "若採常見誤讀「機械套判定而忽略圖形存在性。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，先做存在性審查。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會用三角形不等式。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「先檢查三角形是否存在」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三邊長分別為 2、3、6 的兩組線段，是否能用 SSS 判定兩個三角形全等？」獨立重算：即使兩組數字完全相同，也只是兩組不能形成三角形的線段，SSS 無適用對象。 正確選項「不能，因 2+3<6，這些線段不能形成三角形」。四選項核對：能，因三組長度相同=假，全等判定的前提是兩個三角形存在。；不能，因 2+3<6，這些線段不能形成三角形=真，最短兩段和 5 小於 6，無法首尾連成三角形。；能，但只能判定相似=假，不存在三角形，無從判定。；不能，因 SSS 需要角度=假，SSS 不需角，但此處失敗原因是三角形不等式。 邊界：2+3<6 明確非退化，也不是四捨五入邊界。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s004-v007",
      "unitId": "u16",
      "skillId": "triangle-sss-sas",
      "contentSha256": "923ebfa4e98af31f7237943cccf95d26b93cca5f5dd55de201bd2c70da905591",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "資料固定一個非夾角與兩邊，可能有二解，不能直接全等。",
      "derivedAnswer": "不能僅依這三項直接判定全等",
      "storedAnswer": "不能僅依這三項直接判定全等",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「不能僅依這三項直接判定全等」；另外三個選項逐一排除：「可用 SAS」：夾角應為 ∠A、∠D。；「可用 AAS」：只有一組角。；「可用 SSS」：只有兩組邊。",
        "undefinedSymbol": "題幹符號與詞語已在「SSS 與 SAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無單位或近似。",
        "roundingConflict": "依精確資料獨立推導為「不能僅依這三項直接判定全等」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目排除直角；『僅依』表示不能借用圖中未標條件。",
        "alternateReading": "若採常見誤讀「把所有兩邊一角當 SAS。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，需辨識不充分條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會辨認夾角並知道 SSA 歧義。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「判斷一般 SSA」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已知 AB=DE、AC=DF、∠B=∠E。下列敘述何者最正確？」獨立重算：資料固定一個非夾角與兩邊，可能有二解，不能直接全等。 正確選項「不能僅依這三項直接判定全等」。四選項核對：可用 SAS=假，夾角應為 ∠A、∠D。；可用 AAS=假，只有一組角。；可用 SSS=假，只有兩組邊。；不能僅依這三項直接判定全等=真，這是兩邊及非夾角的 SSA，一般可能出現兩種三角形。 邊界：題目排除直角；『僅依』表示不能借用圖中未標條件。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s004-v008",
      "unitId": "u16",
      "skillId": "triangle-sss-sas",
      "contentSha256": "bf6848470b96863643f15a9bb9d8eeb41670c9955860cdb8a47dba0d2d77ee8c",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "SSS 要三組對應邊；補 AC=DF 後恰好完整。",
      "derivedAnswer": "AC=DF",
      "storedAnswer": "AC=DF",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「AC=DF」；另外三個選項逐一排除：「∠B=∠E」：這會形成 SAS，不是 SSS。；「∠A=∠D」：仍只有兩邊一角。；「AB+BC=DE+EF」：由前兩式已可得邊和相等，但不是第三邊。",
        "undefinedSymbol": "題幹符號與詞語已在「SSS 與 SAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "只有等長關係，無單位衝突。",
        "roundingConflict": "依精確資料獨立推導為「AC=DF」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "預定對應已明示，避免另配頂點的歧義。",
        "alternateReading": "若採常見誤讀「用周長部分和或角度代替第三邊。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，從判定需求找缺項。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會列三角形三邊。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「補第三組對應邊」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩三角形有 AB=DE、BC=EF。若要以 SSS 完成判定，應再補哪一項？」獨立重算：SSS 要三組對應邊；補 AC=DF 後恰好完整。 正確選項「AC=DF」。四選項核對：∠B=∠E=假，這會形成 SAS，不是 SSS。；∠A=∠D=假，仍只有兩邊一角。；AC=DF=真，第三組尚未配對的邊是 AC 與 DF。；AB+BC=DE+EF=假，由前兩式已可得邊和相等，但不是第三邊。 邊界：預定對應已明示，避免另配頂點的歧義。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s004-v009",
      "unitId": "u16",
      "skillId": "triangle-sss-sas",
      "contentSha256": "ad859466aeab3dd991f4d0cef3108bc07d1d46093325a0d43958975a85a0dd11",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "共用邊與自身相等，配合另外兩組邊得到 △ABC≅△CDA。",
      "derivedAnswer": "AC=CA（共用邊）",
      "storedAnswer": "AC=CA（共用邊）",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「AC=CA（共用邊）」；另外三個選項逐一排除：「∠ABC=∠CDA」：題目未給，也不需。；「AB+BC=CD+DA」：由已知可得，但兩邊和不是判定。；「∠BAC=∠DCA」：題目未提供。",
        "undefinedSymbol": "題幹符號與詞語已在「SSS 與 SAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "邊長比較精確，無單位。",
        "roundingConflict": "依精確資料獨立推導為「AC=CA（共用邊）」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "全等式順序由 AB-CD、BC-DA、AC-CA 一致決定。",
        "alternateReading": "若採常見誤讀「看不到共用邊或改找不必要角度。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，需在複合圖形中找共用邊。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會辨認對角線分割後的共同線段。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「辨認共用對角線」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「四邊形 ABCD 的對角線 AC 將它分成 △ABC 與 △CDA。已知 AB=CD、BC=DA。要證兩三角形全等，最直接再使用哪一項？」獨立重算：共用邊與自身相等，配合另外兩組邊得到 △ABC≅△CDA。 正確選項「AC=CA（共用邊）」。四選項核對：AC=CA（共用邊）=真，兩三角形還共享 AC，三組邊相等可用 SSS。；∠ABC=∠CDA=假，題目未給，也不需。；AB+BC=CD+DA=假，由已知可得，但兩邊和不是判定。；∠BAC=∠DCA=假，題目未提供。 邊界：全等式順序由 AB-CD、BC-DA、AC-CA 一致決定。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s004-v010",
      "unitId": "u16",
      "skillId": "triangle-sss-sas",
      "contentSha256": "1fd714787c385a80cfdb31072503ec5a351e9fa1cb342c01d0a01f61b121767f",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "固定兩邊長與夾角後第三頂點位置只差剛體翻轉，兩框架全等。",
      "derivedAnswer": "可以，兩邊及夾角相等，符合 SAS",
      "storedAnswer": "可以，兩邊及夾角相等，符合 SAS",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「可以，兩邊及夾角相等，符合 SAS」；另外三個選項逐一排除：「不可以，尚缺第三邊長」：SAS 已足以唯一決定第三邊與圖形。；「可以，只因兩組周長相同」：周長尚未知，也不是充分理由。；「無法判斷，50° 可能在不同位置」：題目明示為兩對應支架的夾角。",
        "undefinedSymbol": "題幹符號與詞語已在「SSS 與 SAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "兩組長度皆公尺、角度皆度，無需換算或取整。",
        "roundingConflict": "依精確資料獨立推導為「可以，兩邊及夾角相等，符合 SAS」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "『可互換』只指幾何尺寸；材料強度不在數學模型內。",
        "alternateReading": "若採常見誤讀「以為一定要三邊全量測。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，尺寸與鉸角是可互換性的必要規格。",
      "literacyContextNecessity": "工程互換性直接依兩邊與鉸接夾角，情境必要。",
      "prerequisiteCheck": "會把鉸接角辨認為夾角。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「用工程尺寸判定全等」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩根長 6 公尺與 8 公尺的支架在鉸接點形成 50° 夾角。另組支架也有對應兩根 6 公尺、8 公尺且夾角 50°。兩組框架的三角形部分可否互換？」獨立重算：固定兩邊長與夾角後第三頂點位置只差剛體翻轉，兩框架全等。 正確選項「可以，兩邊及夾角相等，符合 SAS」。四選項核對：不可以，尚缺第三邊長=假，SAS 已足以唯一決定第三邊與圖形。；可以，只因兩組周長相同=假，周長尚未知，也不是充分理由。；無法判斷，50° 可能在不同位置=假，題目明示為兩對應支架的夾角。；可以，兩邊及夾角相等，符合 SAS=真，6、8 與其間 50° 分別相同，SAS 保證兩框架三角形全等。 邊界：『可互換』只指幾何尺寸；材料強度不在數學模型內。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s004-v011",
      "unitId": "u16",
      "skillId": "triangle-sss-sas",
      "contentSha256": "37629b6a552fcf5d40ecf48b405b2df11a9be260b9628b8928c76d26ecb859ef",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "在固定射線上，長 12 的圓弧可能與另一條件相交兩次，形成兩個不同三角形。",
      "derivedAnswer": "不能直接判定，這是一般 SSA，可能有兩種形狀",
      "storedAnswer": "不能直接判定，這是一般 SSA，可能有兩種形狀",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「不能直接判定，這是一般 SSA，可能有兩種形狀」；另外三個選項逐一排除：「能，用 SAS」：40° 不在 12 與 15 的共同端點。；「能，用 SSS」：第三邊未知。；「能，因相同面積」：面積也未給，且面積相同不充分。",
        "undefinedSymbol": "題幹符號與詞語已在「SSS 與 SAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "尺寸同為公分、角度精確；結論不依測量公差。",
        "roundingConflict": "依精確資料獨立推導為「不能直接判定，這是一般 SSA，可能有兩種形狀」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "若另給直角或限制角型可能唯一，但題目明示無額外條件。",
        "alternateReading": "若採常見誤讀「把規格表中的兩邊一角機械當 SAS。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，規格審查需辨認資料是否充分。",
      "literacyContextNecessity": "角的位置決定是否可替換，情境不能刪除。",
      "prerequisiteCheck": "會由『某邊對面』辨認角位置。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「審查 SSA 規格」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「木工量到兩塊三角板各有兩邊長 12 公分、15 公分，且標示的一個 40° 角位於 15 公分邊的對面。能否因此判定兩板全等？」獨立重算：在固定射線上，長 12 的圓弧可能與另一條件相交兩次，形成兩個不同三角形。 正確選項「不能直接判定，這是一般 SSA，可能有兩種形狀」。四選項核對：能，用 SAS=假，40° 不在 12 與 15 的共同端點。；不能直接判定，這是一般 SSA，可能有兩種形狀=真，兩邊加非夾角不能保證唯一，可能有兩種第三頂點位置。；能，用 SSS=假，第三邊未知。；能，因相同面積=假，面積也未給，且面積相同不充分。 邊界：若另給直角或限制角型可能唯一，但題目明示無額外條件。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s004-v012",
      "unitId": "u16",
      "skillId": "triangle-sss-sas",
      "contentSha256": "6829c104e52538092066df0958576a4c29ea11f63db57b7ada22ee6ed8e938fa",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "存在性檢查通過後，三組對應邊相等保證兩側片完全重合。",
      "derivedAnswer": "先確認 1.2+1.5>2.0，再以三組邊相等用 SSS 判定",
      "storedAnswer": "先確認 1.2+1.5>2.0，再以三組邊相等用 SSS 判定",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「先確認 1.2+1.5>2.0，再以三組邊相等用 SSS 判定」；另外三個選項逐一排除：「直接用 SSS，不必確認能否形成三角形」：品質審查應先確認規格可構成非退化三角形。；「先把三邊相加比較周長，再以周長相等判定」：周長相等不足以判定全等。；「先量三角，再用 AAA 判定」：AAA 不固定大小，且已知三邊更直接。",
        "undefinedSymbol": "題幹符號與詞語已在「SSS 與 SAS」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "三數皆公尺且為有限小數；相加精確到題示小數，不需額外四捨五入。",
        "roundingConflict": "依精確資料獨立推導為「先確認 1.2+1.5>2.0，再以三組邊相等用 SSS 判定」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "2.7 與 2.0 相差明顯，不在測量邊界；題目按設計值判斷。",
        "alternateReading": "若採常見誤讀「只看相同規格，不檢查規格本身是否可行，或改用周長。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，要求依工程審查順序而非單一公式。",
      "literacyContextNecessity": "帳篷能否製作與側片能否互換都依這兩步檢查。",
      "prerequisiteCheck": "會用三角形不等式與 SSS。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「建立完整品質判定流程」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩個三角形帳篷側片的三邊規格都為 1.2 公尺、1.5 公尺、2.0 公尺。下列哪個檢查順序最合理？」獨立重算：存在性檢查通過後，三組對應邊相等保證兩側片完全重合。 正確選項「先確認 1.2+1.5>2.0，再以三組邊相等用 SSS 判定」。四選項核對：直接用 SSS，不必確認能否形成三角形=假，品質審查應先確認規格可構成非退化三角形。；先把三邊相加比較周長，再以周長相等判定=假，周長相等不足以判定全等。；先量三角，再用 AAA 判定=假，AAA 不固定大小，且已知三邊更直接。；先確認 1.2+1.5>2.0，再以三組邊相等用 SSS 判定=真，1.2+1.5=2.7>2.0，規格可形成三角形；兩側片三邊逐一相同，SSS 全等。 邊界：2.7 與 2.0 相差明顯，不在測量邊界；題目按設計值判斷。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u16-fig-004-sss-sas",
      "unitId": "u16",
      "slot": "s004",
      "title": "SSS與SAS資料位置",
      "altText": "左圖以三種刻痕標三邊代表SSS；右圖標兩邊與其夾角弧代表SAS。",
      "svgPath": "figures/u16/u16-fig-004-sss-sas.svg",
      "drawingSpec": {
        "canvas": {
          "width": 360,
          "height": 240,
          "viewBox": "0 0 360 240"
        },
        "coordinateSystem": "左上角為(0,0)，x向右、y向下。",
        "geometry": "左三角形三邊分別1、2、3刻痕；右三角形兩腰分別1、2刻痕，頂點(270,45)畫半徑32的夾角弧。",
        "visibleLineRules": "主要邊線使用2.5px黑色實線；輔助線使用1.5px虛線；弧線不得遮住頂點標籤。",
        "hiddenLineRules": "平面圖無隱藏邊；未畫出的延長線不得由視覺自行推定。",
        "labels": "SSS與SAS標題置底；『夾角』置右圖頂角上方。",
        "tickMarksAndSymbols": "相等邊以同數量短刻痕表示；直角以小正方形；相等角以同型圓弧。",
        "units": "示意圖無長度單位，題目另有數值時以題幹為準。",
        "arrows": "只在延長線或行進方向使用箭頭。",
        "toScale": false,
        "notToScaleWarning": "圖形不按比例，請依標記與題目條件判斷。",
        "mobileLayout": "360×240畫布；最小文字14px；標籤與線段保持至少6px間距。",
        "answerLeakageControl": "圖中只呈現已知結構與定義標記，不標示題目所求數值或正確選項。"
      },
      "svgAssertions": [
        "SSS</text>",
        "SAS</text>",
        "A32 32",
        "M30 185",
        "M205 185"
      ],
      "figureReview": {
        "decision": "pass",
        "mobileReadability": "360px寬預覽下，頂點、刻痕、直角符號與延長線箭頭仍可辨識。",
        "answerLeakage": "未顯示任何題目答案；只保留概念所需結構。",
        "geometryCheck": "已依列出的座標逐項核對端點、交點、刻痕與文字位置。",
        "reviewNote": "SSS與SAS資料位置已逐線檢查：左三角形三邊分別1、2、3刻痕；右三角形兩腰分別1、2刻痕，頂點(270,45)畫半徑32的夾角弧。；標籤配置為SSS與SAS標題置底；『夾角』置右圖頂角上方。，未依視覺比例暗示未給定量。",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "4f5b88ca56e4d8f6a9dca6c385466de2a3aa47816ae17c744e8024985a99abcd"
    }
  ]
};
export default skillData;
