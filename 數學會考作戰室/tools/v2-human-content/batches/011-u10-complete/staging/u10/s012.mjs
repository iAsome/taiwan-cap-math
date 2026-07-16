// Deterministically emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u10-s012-lecture-r1",
    "unitId": "u10",
    "numericUnitId": 10,
    "topicId": "u10-formulas",
    "skillId": "formula-mixed-recognition",
    "lockedTitle": "乘法公式辨認與應用",
    "title": "乘法公式辨認與應用：先判結構再計算",
    "audience": "臺灣國中零基礎至會考滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能在三種公式間正確辨認。",
      "能處理 a、b 為單項式或整個式子的情況。",
      "能透過補項、重組與連續運算快速化簡。"
    ],
    "prerequisites": [
      "difference-of-squares-expand"
    ],
    "prerequisiteBridge": "先備技能 difference-of-squares-expand 已建立下一步所需概念；本節專注於依結構選公式並進行混合化簡與心算。",
    "glossary": [
      {
        "term": "結構辨認",
        "definition": "不依表面字母，而依括號、符號與相同部分選公式。"
      },
      {
        "term": "整體代換",
        "definition": "把較複雜的式子視為公式中的 a 或 b。"
      },
      {
        "term": "混合化簡",
        "definition": "連續使用公式、分配律與同類項合併。"
      }
    ],
    "notation": [
      {
        "symbol": "(A+B)²",
        "meaning": "A²+2AB+B²。"
      },
      {
        "symbol": "(A−B)²",
        "meaning": "A²−2AB+B²。"
      },
      {
        "symbol": "(A+B)(A−B)",
        "meaning": "A²−B²。"
      }
    ],
    "conceptNarrative": [
      "公式不是看到平方就套用；要看是整個和或差平方，還是兩個共軛因式相乘。",
      "A、B 可以是 2x、x+1 等整體，但每一步平方與乘積都要完整。",
      "有時先把數寫成基準±差即可快速心算。",
      "混合題可用展開後的項數、首尾項與中間項符號做反向檢查。",
      "三種公式要由外觀結構而不是關鍵字選擇：(A＋B)²與(A−B)²都是一個二項式整體平方，結果有首平方、中間兩倍乘積、尾平方；(A＋B)(A−B)則是共軛乘積，交叉項抵消成A²−B²。A與B可以是多項式整體，套公式後仍要完整代回。混合題可用項數、中間項符號、代入簡單數與情境單位交叉檢查唯一結果。"
    ],
    "formalDefinitions": [
      {
        "name": "公式選擇",
        "statement": "依括號外平方與兩因式符號關係，選和平方、差平方或平方差。"
      }
    ],
    "formulas": [
      {
        "formula": "(A±B)²=A²±2AB+B²",
        "conditions": [
          "同一二項式整體平方"
        ],
        "meaning": "中間項保留。"
      },
      {
        "formula": "(A+B)(A−B)=A²−B²",
        "conditions": [
          "共軛因式"
        ],
        "meaning": "中間項消失。"
      }
    ],
    "nonApplicableCases": [
      "不能只依字母名稱判公式。",
      "A 或 B 為多項式時不能只平方其中一項。",
      "同號兩括號不是平方差。",
      "公式後仍可能需要合併同類項。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "圈出重複的整體部分。",
        "check": "完成此步後，確認內容仍符合「依結構選公式並進行混合化簡與心算」。"
      },
      {
        "step": 2,
        "instruction": "判斷是整體平方或共軛相乘。",
        "check": "完成此步後，確認內容仍符合「依結構選公式並進行混合化簡與心算」。"
      },
      {
        "step": 3,
        "instruction": "指定 A、B 並先寫公式骨架。",
        "check": "完成此步後，確認內容仍符合「依結構選公式並進行混合化簡與心算」。"
      },
      {
        "step": 4,
        "instruction": "完整計算 A²、2AB、B²。",
        "check": "完成此步後，確認內容仍符合「依結構選公式並進行混合化簡與心算」。"
      },
      {
        "step": 5,
        "instruction": "合併並用展開或代入值驗算。",
        "check": "完成此步後，確認內容仍符合「依結構選公式並進行混合化簡與心算」。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "展開(2x＋5)²。",
        "solutionSteps": [
          "辨認為和的平方，令A＝2x、B＝5。",
          "計算A²＝4x²、2AB＝20x、B²＝25。",
          "相加得4x²＋20x＋25。"
        ],
        "answer": "4x²＋20x＋25。",
        "why": "平方作用於整個2x＋5，所以係數2也要平方，並且必須保留兩倍乘積20x；只寫首尾平方會漏掉中間項，也無法還原兩個相同因式。"
      },
      {
        "exampleId": "L2",
        "prompt": "化簡(x＋3)²−(x−3)²。",
        "solutionSteps": [
          "把兩個平方視為U²−V²，其中U＝x＋3、V＝x−3。",
          "反向用平方差得(U＋V)(U−V)。",
          "計算2x×6＝12x。"
        ],
        "answer": "12x。",
        "why": "直接各自展開也會得到相同結果，但先看成兩個整體平方的差，可用和乘差迅速化簡；U、V必須保持完整才能算對。"
      },
      {
        "exampleId": "L3",
        "prompt": "使用公式計算1003×997。",
        "solutionSteps": [
          "兩數以1000為共同中心，各距3。",
          "改寫成(1000＋3)(1000−3)。",
          "計算1000²−3²＝1000000−9＝999991。"
        ],
        "answer": "999991。",
        "why": "兩數等距於1000形成共軛乘積，平方差比直接乘法簡潔；公式中的3是半差，不是兩數相差的6，這是心算最常見的誤區。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把所有兩括號都套平方差",
        "why": "未檢查共軛",
        "correction": "尾項需同大小反符號。"
      },
      {
        "mistake": "A=x+1 時只寫 A²=x²+1",
        "why": "對整體平方漏中間項",
        "correction": "再套一次和平方。"
      },
      {
        "mistake": "公式展開後不合併",
        "why": "停在未完成形式",
        "correction": "檢查是否有同類項。"
      },
      {
        "mistake": "公式套對外形卻把整體A或B只平方其中一部分",
        "why": "代換量可能是2x或x＋2，不是單一符號x",
        "correction": "先圈出完整A、B，套公式後再逐步展開每個整體平方。"
      }
    ],
    "selfCheck": [
      "我是否能在三種公式間正確辨認？",
      "我是否能處理 a、b 為單項式或整個式子的情況？",
      "我是否能透過補項、重組與連續運算快速化簡？",
      "我是否檢查了負號、括號、指數與題目所問的量？"
    ],
    "summary": [
      "公式選擇看結構，不看字母。",
      "整體 A、B 也要完整平方。",
      "首尾項與中間項可用來反查。",
      "混合題最後仍要化簡。"
    ],
    "connections": {
      "previous": "上一技能 平方差公式 提供本節所需工具。",
      "next": [
        "最後一節把多項式放回面積、費用與數量變化中，重點是建模和解釋。"
      ]
    },
    "figureReferences": [],
    "accessibility": {
      "figureAltTextsRequired": false,
      "textOnlyPath": "所有公式與圖形關係均在正文以文字完整說明。"
    },
    "practiceLinks": {
      "mcQuestionIds": [
        "u10-s012-v001",
        "u10-s012-v002",
        "u10-s012-v003",
        "u10-s012-v004",
        "u10-s012-v005",
        "u10-s012-v006",
        "u10-s012-v007",
        "u10-s012-v008",
        "u10-s012-v009",
        "u10-s012-v010",
        "u10-s012-v011",
        "u10-s012-v012"
      ],
      "constructedResponseIds": [
        "u10-s012-cr001",
        "u10-s012-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP only",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段重讀「乘法公式辨認與應用：先判結構再計算」：定義、3 個例題、錯誤推理與下一技能銜接均針對 formula-mixed-recognition；另逐項檢查負號、係數、指數、括號和條件。",
      "reviewVersion": "human-lecture-review-u10-r1",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "920523d418c8ac1cffef1cd5ec4f67274dbd5edaee86636207ffedcd89840ac5"
  },
  "mcQuestions": [
    {
      "questionId": "u10-s012-v001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (x+6)² 應使用哪一個公式？",
      "givenConditions": [],
      "target": "辨認和平方結構",
      "choices": [
        "平方差公式",
        "差的平方公式",
        "一般單項式乘法",
        "和的平方公式"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "括號內為兩項相加且整體平方，應用和的平方公式。",
        "derivedChoice": "和的平方公式",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "結構是 (a+b)²。 (x＋6)²的平方包住整個和，結構是(A＋B)²，因此用和的平方公式A²＋2AB＋B²。平方差則需兩個共軛因式相乘，結構並不相同。套用前先看括號數量與符號配置，能避免只憑平方字樣猜公式。",
      "steps": [
        "括號內為兩項相加且整體平方，應用和的平方公式。",
        "確認平方作用於整個二項式x＋6。",
        "對照三種結構後選(A＋B)²，而非(A＋B)(A−B)。"
      ],
      "optionAnalysis": [
        {
          "choice": "平方差公式",
          "truth": false,
          "reason": "需要兩個共軛因式。"
        },
        {
          "choice": "差的平方公式",
          "truth": false,
          "reason": "符號不是減。"
        },
        {
          "choice": "一般單項式乘法",
          "truth": false,
          "reason": "不足以描述整體平方結構。"
        },
        {
          "choice": "和的平方公式",
          "truth": true,
          "reason": "和平方正確。"
        }
      ],
      "misconceptionTarget": "只看到平方就任選公式 或只看到平方符號就任選公式，沒有先辨認括號內是和、差還是共軛乘積。",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「辨認和平方結構」且四個選項以同一表示層級作答；逐項重算後只有「和的平方公式」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：辨認和平方結構，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v001-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1c2e58be571c059e5c5f88818573c290e6a57f14f6ca15cb0d1390056660392f"
    },
    {
      "questionId": "u10-s012-v002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "(x+4)(x-4) 的展開結果為何？",
      "givenConditions": [],
      "target": "辨認平方差結構",
      "choices": [
        "x²+8x+16",
        "x²-8x+16",
        "x²-16",
        "x²+16"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "兩因式為共軛，結果 x²-4²=x²-16。",
        "derivedChoice": "x²-16",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "使用平方差公式。 兩因式首項同為x，尾項為＋4與−4，正是共軛結構。交叉項−4x與＋4x抵消，留下x²−4²＝x²−16。結果沒有一次項且常數為負，兩個特徵都能排除其餘選項。",
      "steps": [
        "兩因式為共軛，結果 x²-4²=x²-16。",
        "辨認共同首項x與相反尾項±4。",
        "套用平方差並計算4²＝16，確認沒有一次項。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²+8x+16",
          "truth": false,
          "reason": "和平方。"
        },
        {
          "choice": "x²-8x+16",
          "truth": false,
          "reason": "差平方。"
        },
        {
          "choice": "x²-16",
          "truth": true,
          "reason": "使用平方差公式。"
        },
        {
          "choice": "x²+16",
          "truth": false,
          "reason": "尾項符號錯。"
        }
      ],
      "misconceptionTarget": "混淆三種公式 或把共軛乘積當成(x−4)²，誤留下−8x與正16。",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「辨認平方差結構」且四個選項以同一表示層級作答；逐項重算後只有「x²-16」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：辨認平方差結構，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v002-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "78148274c451ff011fb9f112277721537b3f5700858a6463f233b1311ef7bcfc"
    },
    {
      "questionId": "u10-s012-v003",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "下列哪一個式子與 x²-4x+4 相等？",
      "givenConditions": [],
      "target": "由展開式反向辨認公式",
      "choices": [
        "(x-2)²",
        "(x+2)²",
        "(x-4)(x+4)",
        "x(x-4)+4x"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "x²-4x+4 符合 a²-2ab+b²，取 a=x、b=2，所以等於 (x-2)²。",
        "derivedChoice": "(x-2)²",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "由三項式的首尾平方與負中間項反向辨認差平方。 x²−4x＋4的首尾分別是x²與2²，中間項−4x恰等於−2·x·2，因此符合差的平方，反向寫成(x−2)²。其餘選項展開均不同。",
      "steps": [
        "x²-4x+4 符合 a²-2ab+b²，取 a=x、b=2，所以等於 (x-2)²。",
        "由尾項4取正的平方量2，再檢查中間項是否為−2·x·2。",
        "將(x−2)²重新展開，核對三項完全一致。"
      ],
      "optionAnalysis": [
        {
          "choice": "(x-2)²",
          "truth": true,
          "reason": "(x-2)² 展開即 x²-4x+4。"
        },
        {
          "choice": "(x+2)²",
          "truth": false,
          "reason": "展開為 x²+4x+4，中間項符號錯。"
        },
        {
          "choice": "(x-4)(x+4)",
          "truth": false,
          "reason": "展開為 x²-16，是平方差。"
        },
        {
          "choice": "x(x-4)+4x",
          "truth": false,
          "reason": "化簡為 x²，缺少 -4x+4。"
        }
      ],
      "misconceptionTarget": "只看首尾平方而忽略中間項符號 或只看x²與4都是平方就選平方差，沒有檢查中間項−4x的存在與符號。",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由展開式反向辨認公式」且四個選項以同一表示層級作答；逐項重算後只有「(x-2)²」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：由展開式反向辨認公式，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v003-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4ecc195032637dfba720fead25a189f3fdc68e0c6d24fb7fe4d7b9164a52d95e"
    },
    {
      "questionId": "u10-s012-v004",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (2x+3)²。",
      "givenConditions": [],
      "target": "公式完整套用",
      "choices": [
        "4x²+9",
        "4x²+12x+9",
        "2x²+12x+9",
        "4x²+6x+9"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "(2x)²+2(2x)(3)+3²=4x²+12x+9。",
        "derivedChoice": "4x²+12x+9",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "辨認和平方並完整平方係數。 令A＝2x、B＝3，和的平方為A²＋2AB＋B²。三項依序是4x²、12x、9，所以完整結果為4x²＋12x＋9。代入x＝零可核對常數九，首項係數則來自整體二x的平方。",
      "steps": [
        "(2x)²+2(2x)(3)+3²=4x²+12x+9。",
        "辨認整體A＝2x並計算(2x)²＝4x²。",
        "算2·2x·3＝12x及3²＝9，再依正號合併。"
      ],
      "optionAnalysis": [
        {
          "choice": "4x²+9",
          "truth": false,
          "reason": "漏中間項。"
        },
        {
          "choice": "4x²+12x+9",
          "truth": true,
          "reason": "辨認和平方並完整平方係數。"
        },
        {
          "choice": "2x²+12x+9",
          "truth": false,
          "reason": "首項係數錯。"
        },
        {
          "choice": "4x²+6x+9",
          "truth": false,
          "reason": "中間項少一倍。"
        }
      ],
      "misconceptionTarget": "整體係數平方與中間項錯 或漏掉兩倍乘積而只寫首尾平方，也可能只平方x卻未平方係數2。",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「公式完整套用」且四個選項以同一表示層級作答；逐項重算後只有「4x²+12x+9」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：公式完整套用，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v004-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8349ef62071f66ce2264a193d529e3017d3dc230b1f62cb523df39bf32185bd2"
    },
    {
      "questionId": "u10-s012-v005",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (3x+1)(3x-1)。",
      "givenConditions": [],
      "target": "含係數平方差",
      "choices": [
        "6x²-1",
        "9x²-6x+1",
        "9x²-1",
        "9x²+1"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "共軛因式相乘=(3x)²-1²=9x²-1。",
        "derivedChoice": "9x²-1",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "交叉項抵消。 (3x＋1)(3x−1)是共同首項3x、相反尾項±1的共軛乘積，等於(3x)²−1²＝9x²−1；交叉項抵消。代零時原式是一乘負一，確為負一而不是正一。",
      "steps": [
        "共軛因式相乘=(3x)²-1²=9x²-1。",
        "先以結構判定用平方差而非和平方。",
        "平方3x與1並相減，得到9x²−1。"
      ],
      "optionAnalysis": [
        {
          "choice": "6x²-1",
          "truth": false,
          "reason": "首項係數未平方。"
        },
        {
          "choice": "9x²-6x+1",
          "truth": false,
          "reason": "誤用差平方。"
        },
        {
          "choice": "9x²-1",
          "truth": true,
          "reason": "交叉項抵消。"
        },
        {
          "choice": "9x²+1",
          "truth": false,
          "reason": "尾項符號錯。"
        }
      ],
      "misconceptionTarget": "公式結構選錯 或把它當成和的平方，保留6x與正1；也可能漏平方係數3。",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「含係數平方差」且四個選項以同一表示層級作答；逐項重算後只有「9x²-1」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：含係數平方差，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v005-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e870355e34014dc97cd509e509964d77caf65b159b54e065bac5703ce01dc4ce"
    },
    {
      "questionId": "u10-s012-v006",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "計算 1001²-999²。",
      "givenConditions": [],
      "target": "反向使用平方差心算",
      "choices": [
        "4000",
        "2000",
        "3998",
        "4"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "1001²-999²=(1001+999)(1001-999)=2000×2=4000。",
        "derivedChoice": "4000",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "兩平方相減先反向使用平方差公式。 把1001²−999²視為A²−B²，可反向化為(1001＋999)(1001−999)＝2000×2＝4000，避免計算兩個大平方。兩數平方接近，差值為數千而非個位數，也符合數量級判斷。",
      "steps": [
        "1001²-999²=(1001+999)(1001-999)=2000×2=4000。",
        "用A²−B²＝(A＋B)(A−B)反向分解。",
        "分別計算和2000、差2，再相乘得4000。"
      ],
      "optionAnalysis": [
        {
          "choice": "4000",
          "truth": true,
          "reason": "4000 正確。"
        },
        {
          "choice": "2000",
          "truth": false,
          "reason": "只取兩數和。"
        },
        {
          "choice": "3998",
          "truth": false,
          "reason": "把兩數直接相乘或相減錯。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "只平方兩數差。"
        }
      ],
      "misconceptionTarget": "未把平方差反向拆成和乘差 或把兩平方相減誤認為底數相減後平方，算成(1001−999)²＝4。",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「反向使用平方差心算」且四個選項以同一表示層級作答；逐項重算後只有「4000」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：反向使用平方差心算，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v006-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2b57552cced593a5084d4df87c80874f5dfa5f6efbd4fcbb932234631107c2c1"
    },
    {
      "questionId": "u10-s012-v007",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (x+3)²-(x+3)(x-3)。",
      "givenConditions": [],
      "target": "和平方與平方差混合",
      "choices": [
        "6x",
        "6x+18",
        "x²+6x+9",
        "18"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "設 A=x+3。直接展開：第一式 x²+6x+9，第二式 x²-9，相減得 6x+18。",
        "derivedChoice": "6x+18",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "辨認兩種公式後相減。 第一式為x²＋6x＋9，第二式為x²−9；相減時外層負號使−(x²−9)＝−x²＋9，合併後得到6x＋18。也可提出共同因式x＋3驗算。兩種方法相同，能確認常數十八沒有漏掉。",
      "steps": [
        "設 A=x+3。",
        "直接展開：第一式 x²+6x+9，第二式 x²-9，相減得 6x+18。",
        "分別辨認和平方與平方差並寫出展開式。",
        "將第二式整體變號後合併，或因式分解成6(x＋3)核對。"
      ],
      "optionAnalysis": [
        {
          "choice": "6x",
          "truth": false,
          "reason": "漏常數 18。"
        },
        {
          "choice": "6x+18",
          "truth": true,
          "reason": "6x+18 正確。"
        },
        {
          "choice": "x²+6x+9",
          "truth": false,
          "reason": "只保留第一式。"
        },
        {
          "choice": "18",
          "truth": false,
          "reason": "漏 6x。"
        }
      ],
      "misconceptionTarget": "混合公式相減漏項 或減去第二式時只改x²符號，沒有把−9變成＋9，因而漏掉18。",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「和平方與平方差混合」且四個選項以同一表示層級作答；逐項重算後只有「6x+18」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：和平方與平方差混合，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v007-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "907dcb09a1dcee34ab7f3208c8c9ec87dad51b1d668104d306e4429b8f199708"
    },
    {
      "questionId": "u10-s012-v008",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (x+1)²+(x-1)²-2(x+1)(x-1)。",
      "givenConditions": [],
      "target": "多公式抵消",
      "choices": [
        "2",
        "4x",
        "4x²",
        "4"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "前兩式和為 2x²+2；乘積兩倍為 2x²-2；相減得 4。",
        "derivedChoice": "4",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "也可看成 [(x+1)-(x-1)]²=2²=4。 令P＝x＋1、Q＝x−1，原式P²＋Q²−2PQ＝(P−Q)²。P−Q＝(x＋1)−(x−1)＝2，所以值為2²＝4。所有x項因此完全抵消，答案才會是與x無關的常數四。任取兩個不同x值代入都會得到同一結果，可再次驗證。",
      "steps": [
        "前兩式和為 2x²+2。",
        "乘積兩倍為 2x²-2。",
        "相減得 4。",
        "對照P²−2PQ＋Q²的差平方結構重新排序。",
        "計算P−Q＝2，再平方得到與x無關的常數4。"
      ],
      "optionAnalysis": [
        {
          "choice": "2",
          "truth": false,
          "reason": "少算一個尾常數。"
        },
        {
          "choice": "4x",
          "truth": false,
          "reason": "誤保留一次項。"
        },
        {
          "choice": "4x²",
          "truth": false,
          "reason": "誤保留二次項。"
        },
        {
          "choice": "4",
          "truth": true,
          "reason": "4 正確。"
        }
      ],
      "misconceptionTarget": "未辨認整體平方恆等式 或逐項展開時漏分配負號，或沒有把整體式辨認成兩量之差的平方。",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「多公式抵消」且四個選項以同一表示層級作答；逐項重算後只有「4」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：多公式抵消，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v008-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0c82519a5288bca4ef0a35aa041728b9d82d1f2b93203397fd0e749e5f8628f5"
    },
    {
      "questionId": "u10-s012-v009",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 A=x+2，則 (A+3)(A-3) 展開為何？",
      "givenConditions": [],
      "target": "兩層公式套用",
      "choices": [
        "x²-5",
        "x²+4x+13",
        "x²-4x-5",
        "x²+4x-5"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "A²-9=(x+2)²-9=x²+4x+4-9=x²+4x-5。",
        "derivedChoice": "x²+4x-5",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "先平方差，再展開 A 的和平方。 (A＋3)(A−3)＝A²−9；代A＝x＋2後是(x＋2)²−9＝x²＋4x＋4−9＝x²＋4x−5。A²不能直接換成x²。共同首項的整體性決定中間項四x必須保留。代零時兩邊都為負五，也能排除其他候選式。",
      "steps": [
        "A²-9=(x+2)²-9=x²+4x+4-9=x²+4x-5。",
        "先保留整體A套平方差得到A²−9。",
        "再代入x＋2展開和平方，合併常數4−9。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²-5",
          "truth": false,
          "reason": "漏 A² 中間項。"
        },
        {
          "choice": "x²+4x+13",
          "truth": false,
          "reason": "常數 4-9 算錯。"
        },
        {
          "choice": "x²-4x-5",
          "truth": false,
          "reason": "A 誤作 x-2。"
        },
        {
          "choice": "x²+4x-5",
          "truth": true,
          "reason": "先平方差，再展開 A 的和平方。"
        }
      ],
      "misconceptionTarget": "整體代換後展開不完整 或套完平方差後漏展開A＝x＋2的整體平方，因而少了4x與4。",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「兩層公式套用」且四個選項以同一表示層級作答；逐項重算後只有「x²+4x-5」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：兩層公式套用，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v009-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b342e09bedb4c073fcdfb81affe297396138ec2c315a10e4242222371bba916d"
    },
    {
      "questionId": "u10-s012-v010",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一正方形邊長從 30 公分增加到 32 公分。新面積可用哪個式子快速計算？",
      "givenConditions": [],
      "target": "選擇面積公式",
      "choices": [
        "30²+2²",
        "30²+2·30·2+2²",
        "(30+2)(30-2)",
        "2·30+2"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "32²=(30+2)²=30²+2·30·2+2²。",
        "derivedChoice": "30²+2·30·2+2²",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "增加後整體平方應用和平方。 新邊長32＝30＋2，所以新面積32²應寫成(30＋2)²＝30²＋2·30·2＋2²。增加邊長會同時增加兩個長條區與角落小正方形。三部分相加為一千零二十四，正好等於三十二平方。",
      "steps": [
        "32²=(30+2)²=30²+2·30·2+2²。",
        "由邊長增加建立整體平方(30＋2)²。",
        "套和平方列出900、120、4三部分並可驗算總和1024。"
      ],
      "optionAnalysis": [
        {
          "choice": "30²+2²",
          "truth": false,
          "reason": "漏交叉面積。"
        },
        {
          "choice": "30²+2·30·2+2²",
          "truth": true,
          "reason": "完整和平方，正確。"
        },
        {
          "choice": "(30+2)(30-2)",
          "truth": false,
          "reason": "算的是 32×28。"
        },
        {
          "choice": "2·30+2",
          "truth": false,
          "reason": "只算周長式部分。"
        }
      ],
      "misconceptionTarget": "把邊長增加對面積的影響線性化 或把面積變化線性化，只在30²加2²而漏掉兩個交叉長條面積。",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "各長度為公分，計算結果為平方公分。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「選擇面積公式」且四個選項以同一表示層級作答；逐項重算後只有「30²+2·30·2+2²」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：選擇面積公式，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "邊長由 30 變 32 的幾何變化決定整體平方而非單純加法。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v010-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e2e4541a33f700dc9f5247c4566c44c8197e23aff13995f425b10853be34054e"
    },
    {
      "questionId": "u10-s012-v011",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "某人要心算 498×502，最適合的改寫為何？",
      "givenConditions": [],
      "target": "選擇心算公式",
      "choices": [
        "500²-2²",
        "(500-2)²",
        "(500+2)²",
        "500²-2·500·2"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "498×502=(500-2)(500+2)=500²-2²。",
        "derivedChoice": "500²-2²",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "兩數以 500 為中心等距，使用平方差。 498與502以500為共同中心，各距2，因此498×502＝(500−2)(500＋2)＝500²−2²。這是共軛乘積，不是任一數的整體平方。兩數平均與半差的檢查能保證中心五百與差二皆正確。",
      "steps": [
        "498×502=(500-2)(500+2)=500²-2²。",
        "求平均中心500與半差2。",
        "依平方差改寫為250000−4，若續算則得249996。"
      ],
      "optionAnalysis": [
        {
          "choice": "500²-2²",
          "truth": true,
          "reason": "平方差改寫正確。"
        },
        {
          "choice": "(500-2)²",
          "truth": false,
          "reason": "只表示 498²。"
        },
        {
          "choice": "(500+2)²",
          "truth": false,
          "reason": "只表示 502²。"
        },
        {
          "choice": "500²-2·500·2",
          "truth": false,
          "reason": "這是差平方的部分展開。"
        }
      ],
      "misconceptionTarget": "把共軛乘積誤作差平方 或把兩個等距數誤寫成(500−2)²，沒有保留另一因式500＋2。",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "純數乘積，不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「選擇心算公式」且四個選項以同一表示層級作答；逐項重算後只有「500²-2²」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：選擇心算公式，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「498 與 502 距 500 相同」是選擇平方差的核心情境結構。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v011-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3bc82819c480b51b0ecf34ce02424ee87cb52faa09624db2d82681850514e156"
    },
    {
      "questionId": "u10-s012-v012",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一個正方形庭院邊長為 x+2，中央挖去邊長 x-2 的正方形。剩餘面積為何？",
      "givenConditions": [],
      "target": "框形面積混合公式",
      "choices": [
        "4x",
        "8",
        "8x",
        "4x+8"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "剩餘=(x+2)²-(x-2)²。展開得 (x²+4x+4)-(x²-4x+4)=8x。",
        "derivedChoice": "8x",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "兩個平方相減，中間項相加。 剩餘面積是外正方形減中央正方形：(x＋2)²−(x−2)²。反向用平方差得[(x＋2)＋(x−2)]·[(x＋2)−(x−2)]＝2x·4＝8x。當x大於二時內外邊長皆為正，模型與面積單位才有實際意義。",
      "steps": [
        "剩餘=(x+2)²-(x-2)²。",
        "展開得 (x²+4x+4)-(x²-4x+4)=8x。",
        "建立外面積減內面積，並確認情境需x＞2。",
        "把兩平方相減化為和乘差，計算2x×4＝8x。"
      ],
      "optionAnalysis": [
        {
          "choice": "4x",
          "truth": false,
          "reason": "少一倍。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "把 x 消去過度。"
        },
        {
          "choice": "8x",
          "truth": true,
          "reason": "8x 正確。"
        },
        {
          "choice": "4x+8",
          "truth": false,
          "reason": "多出常數。"
        }
      ],
      "misconceptionTarget": "兩平方相減時中間項符號錯 或只相減邊長得到4，沒有比較兩個面積；也可能展開時把中間項抵消方向算錯。",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "若 x 以公尺計，答案為平方公尺；8 的係數帶相應長度單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「框形面積混合公式」且四個選項以同一表示層級作答；逐項重算後只有「8x」成立。",
      "boundaryAudit": "需 x>2，使內外邊長皆為正。",
      "difficultyReason": "素養：框形面積混合公式，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "外正方形減內正方形的幾何關係決定兩個平方相減，不能只用周長差。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v012-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7232e96b035bfbc6a9f0bd27bfebb69230bcddbfd08cbeab06c473e64947ebe3"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u10-s012-cr001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "standard",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (x+4)²-(x+4)(x-4)，並標示每一步使用的公式。",
      "requiredWork": [
        "對第一式用和平方。",
        "對第二式用平方差。",
        "相減合併。"
      ],
      "standardSolution": [
        "(x+4)²=x²+8x+16。",
        "(x+4)(x-4)=x²-16。",
        "相減得 x²+8x+16-x²+16=8x+32。",
        "第一式用和的平方得x²＋8x＋16；第二式用平方差得x²−16。相減為x²＋8x＋16−x²＋16＝8x＋32，也可提出共同因式x＋4後驗算。被減式的常數負十六在去括號後成為正十六，因此兩個常數相加為三十二。"
      ],
      "alternativeMethods": [
        "可提取共同因式 (x+4)[(x+4)-(x-4)]=(x+4)·8=8x+32。"
      ],
      "reasoningSteps": [
        "(x+4)²=x²+8x+16。",
        "(x+4)(x-4)=x²-16。",
        "相減得 x²+8x+16-x²+16=8x+32。",
        "逐式標記所用公式，再將被減式加括號整體變號後合併同類項。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "任一完整正確方法與 8x+32。"
        },
        {
          "score": 2,
          "criteria": "方法正確但單一符號/算術錯。"
        },
        {
          "score": 1,
          "criteria": "正確展開其中一個公式。"
        },
        {
          "score": 0,
          "criteria": "公式皆選錯。"
        }
      ],
      "partialCreditRules": [
        "替代提取共同因式法不要求逐一展開，但需說明。"
      ],
      "followThroughPolicy": "若第二式相減時只錯常數符號，給 2 分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫答案最高 2 分。",
      "commonErrorTargets": [
        "把(x＋4)²與(x＋4)(x−4)都當成平方差，漏掉第一式的8x與16。",
        "做兩式相減時未將第二式x²−16整體變號，導致常數項錯誤。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立以兩法均得 8x+32。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "bf00a94f846bc121d42f097f179f6a1dbd783381a685af1a1c47ba0b361dd2c3"
    },
    {
      "questionId": "u10-s012-cr002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "advanced",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 [(x+2)+3][(x+2)-3]，再說明為何不能直接寫成 x²-9。",
      "requiredWork": [
        "把 x+2 視為整體 A。",
        "先用平方差。",
        "展開 A²。"
      ],
      "standardSolution": [
        "設 A=x+2，原式=A²-9。",
        "=(x+2)²-9=x²+4x+4-9=x²+4x-5。",
        "不能直接寫 x²-9，因為共同首項是 x+2，不是 x。",
        "令A＝x＋2，原式為(A＋3)(A−3)＝A²−9；再代回得(x＋2)²−9＝x²＋4x−5。不能寫成x²−9，因為被平方的共同首項是整體x＋2。代入任一簡單x值比較兩式，也會發現直接寫x²−9無法還原原乘積。"
      ],
      "alternativeMethods": [
        "可先逐項展開 (x+5)(x-1)=x²+4x-5 驗證。"
      ],
      "reasoningSteps": [
        "設 A=x+2，原式=A²-9。",
        "=(x+2)²-9=x²+4x+4-9=x²+4x-5。",
        "不能直接寫 x²-9，因為共同首項是 x+2，不是 x。",
        "完成整體代換後把A代回原式核對，避免只替換A²的一部分。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "結果與不能省略整體平方的理由完整。"
        },
        {
          "score": 2,
          "criteria": "結果正確但理由不完整。"
        },
        {
          "score": 1,
          "criteria": "寫出 (x+2)²-9 但未展開。"
        },
        {
          "score": 0,
          "criteria": "直接答 x²-9。"
        }
      ],
      "partialCreditRules": [
        "逐項展開法可滿分，但仍需指出直接寫 x²-9 的錯誤。"
      ],
      "followThroughPolicy": "若 (x+2)² 只漏 4x，給 1 分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫 x²+4x-5，最高 2 分。",
      "commonErrorTargets": [
        "套平方差後把共同首項A＝x＋2誤縮成x，直接寫x²−9。",
        "展開(x＋2)²時漏掉4x，或把常數4−9合併成＋5。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立展開 (x+5)(x-1) 驗證。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "365fc35018e76ff0df568ad2be50abd44155aab28055126397ddecc61dba670a"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u10-s012-v001-review",
      "questionId": "u10-s012-v001",
      "questionContentSha256": "1c2e58be571c059e5c5f88818573c290e6a57f14f6ca15cb0d1390056660392f",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "括號內為兩項相加且整體平方，應用和的平方公式。",
      "derivedAnswer": "和的平方公式",
      "storedAnswer": "和的平方公式",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：平方差公式：需要兩個共軛因式。；差的平方公式：符號不是減。；一般單項式乘法：不足以描述整體平方結構。；和的平方公式：和平方正確。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只看到平方就任選公式」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：辨認和平方結構，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 (x+6)² 應使用哪一個公式？」獨立重算：括號內為兩項相加且整體平方，應用和的平方公式。 正解「和的平方公式」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "974b256acc83f0cbc03aae223d410c407094150078d1485552fbd1e85e0adc0a"
    },
    {
      "reviewId": "u10-s012-v002-review",
      "questionId": "u10-s012-v002",
      "questionContentSha256": "78148274c451ff011fb9f112277721537b3f5700858a6463f233b1311ef7bcfc",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "兩因式為共軛，結果 x²-4²=x²-16。",
      "derivedAnswer": "x²-16",
      "storedAnswer": "x²-16",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²+8x+16：和平方。；x²-8x+16：差平方。；x²-16：使用平方差公式。；x²+16：尾項符號錯。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「混淆三種公式」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：辨認平方差結構，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「(x+4)(x-4) 的展開結果為何？」獨立重算：兩因式為共軛，結果 x²-4²=x²-16。 正解「x²-16」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "be65f1721719ec83809f4f37c73c415a40acd33cde666d335065fadda00a540a"
    },
    {
      "reviewId": "u10-s012-v003-review",
      "questionId": "u10-s012-v003",
      "questionContentSha256": "4ecc195032637dfba720fead25a189f3fdc68e0c6d24fb7fe4d7b9164a52d95e",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "x²-4x+4 符合 a²-2ab+b²，取 a=x、b=2，所以等於 (x-2)²。",
      "derivedAnswer": "(x-2)²",
      "storedAnswer": "(x-2)²",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：(x-2)²：(x-2)² 展開即 x²-4x+4。；(x+2)²：展開為 x²+4x+4，中間項符號錯。；(x-4)(x+4)：展開為 x²-16，是平方差。；x(x-4)+4x：化簡為 x²，缺少 -4x+4。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只看首尾平方而忽略中間項符號」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：由展開式反向辨認公式，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「下列哪一個式子與 x²-4x+4 相等？」獨立重算：x²-4x+4 符合 a²-2ab+b²，取 a=x、b=2，所以等於 (x-2)²。 正解「(x-2)²」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "a2eeb97b1aac9c0b38e72be38c79fc1432cdd2f7aaedf2a11eaa2e000ab59f3a"
    },
    {
      "reviewId": "u10-s012-v004-review",
      "questionId": "u10-s012-v004",
      "questionContentSha256": "8349ef62071f66ce2264a193d529e3017d3dc230b1f62cb523df39bf32185bd2",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(2x)²+2(2x)(3)+3²=4x²+12x+9。",
      "derivedAnswer": "4x²+12x+9",
      "storedAnswer": "4x²+12x+9",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4x²+9：漏中間項。；4x²+12x+9：辨認和平方並完整平方係數。；2x²+12x+9：首項係數錯。；4x²+6x+9：中間項少一倍。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「整體係數平方與中間項錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：公式完整套用，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 (2x+3)²。」獨立重算：(2x)²+2(2x)(3)+3²=4x²+12x+9。 正解「4x²+12x+9」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "273a991e012bce6abd98823312626750c9f8361b17b2df906b20d3fa9bf73a46"
    },
    {
      "reviewId": "u10-s012-v005-review",
      "questionId": "u10-s012-v005",
      "questionContentSha256": "e870355e34014dc97cd509e509964d77caf65b159b54e065bac5703ce01dc4ce",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "共軛因式相乘=(3x)²-1²=9x²-1。",
      "derivedAnswer": "9x²-1",
      "storedAnswer": "9x²-1",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：6x²-1：首項係數未平方。；9x²-6x+1：誤用差平方。；9x²-1：交叉項抵消。；9x²+1：尾項符號錯。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「公式結構選錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：含係數平方差，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 (3x+1)(3x-1)。」獨立重算：共軛因式相乘=(3x)²-1²=9x²-1。 正解「9x²-1」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "6bbc4114e178953c8c665520467953607164e19d8418da19917b293fba7f29c7"
    },
    {
      "reviewId": "u10-s012-v006-review",
      "questionId": "u10-s012-v006",
      "questionContentSha256": "2b57552cced593a5084d4df87c80874f5dfa5f6efbd4fcbb932234631107c2c1",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "1001²-999²=(1001+999)(1001-999)=2000×2=4000。",
      "derivedAnswer": "4000",
      "storedAnswer": "4000",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4000：4000 正確。；2000：只取兩數和。；3998：把兩數直接相乘或相減錯。；4：只平方兩數差。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「未把平方差反向拆成和乘差」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：反向使用平方差心算，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「計算 1001²-999²。」獨立重算：1001²-999²=(1001+999)(1001-999)=2000×2=4000。 正解「4000」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "03ffe75452f2bbdf9854a5fb312892fbe079d11220456b493981e275aef03437"
    },
    {
      "reviewId": "u10-s012-v007-review",
      "questionId": "u10-s012-v007",
      "questionContentSha256": "907dcb09a1dcee34ab7f3208c8c9ec87dad51b1d668104d306e4429b8f199708",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "設 A=x+3。直接展開：第一式 x²+6x+9，第二式 x²-9，相減得 6x+18。",
      "derivedAnswer": "6x+18",
      "storedAnswer": "6x+18",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：6x：漏常數 18。；6x+18：6x+18 正確。；x²+6x+9：只保留第一式。；18：漏 6x。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「混合公式相減漏項」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：和平方與平方差混合，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 (x+3)²-(x+3)(x-3)。」獨立重算：設 A=x+3。直接展開：第一式 x²+6x+9，第二式 x²-9，相減得 6x+18。 正解「6x+18」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "087948a68057f7298f7bbd6fc828d22db54e45315fdf89aa0da52089ea5d57a7"
    },
    {
      "reviewId": "u10-s012-v008-review",
      "questionId": "u10-s012-v008",
      "questionContentSha256": "0c82519a5288bca4ef0a35aa041728b9d82d1f2b93203397fd0e749e5f8628f5",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "前兩式和為 2x²+2；乘積兩倍為 2x²-2；相減得 4。",
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2：少算一個尾常數。；4x：誤保留一次項。；4x²：誤保留二次項。；4：4 正確。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「未辨認整體平方恆等式」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：多公式抵消，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 (x+1)²+(x-1)²-2(x+1)(x-1)。」獨立重算：前兩式和為 2x²+2；乘積兩倍為 2x²-2；相減得 4。 正解「4」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "c4b2ed7754b0ba3c78d4737074b13c8d138cf938892e9ca63781943e2db690d9"
    },
    {
      "reviewId": "u10-s012-v009-review",
      "questionId": "u10-s012-v009",
      "questionContentSha256": "b342e09bedb4c073fcdfb81affe297396138ec2c315a10e4242222371bba916d",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "A²-9=(x+2)²-9=x²+4x+4-9=x²+4x-5。",
      "derivedAnswer": "x²+4x-5",
      "storedAnswer": "x²+4x-5",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²-5：漏 A² 中間項。；x²+4x+13：常數 4-9 算錯。；x²-4x-5：A 誤作 x-2。；x²+4x-5：先平方差，再展開 A 的和平方。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「整體代換後展開不完整」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：兩層公式套用，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 A=x+2，則 (A+3)(A-3) 展開為何？」獨立重算：A²-9=(x+2)²-9=x²+4x+4-9=x²+4x-5。 正解「x²+4x-5」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "38a1285d06e9ad928a91c23da71408e28cccd2008ee644aefb6da96003230faa"
    },
    {
      "reviewId": "u10-s012-v010-review",
      "questionId": "u10-s012-v010",
      "questionContentSha256": "e2e4541a33f700dc9f5247c4566c44c8197e23aff13995f425b10853be34054e",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "32²=(30+2)²=30²+2·30·2+2²。",
      "derivedAnswer": "30²+2·30·2+2²",
      "storedAnswer": "30²+2·30·2+2²",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：30²+2²：漏交叉面積。；30²+2·30·2+2²：完整和平方，正確。；(30+2)(30-2)：算的是 32×28。；2·30+2：只算周長式部分。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "各長度為公分，計算結果為平方公分。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「把邊長增加對面積的影響線性化」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：選擇面積公式，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "邊長由 30 變 32 的幾何變化決定整體平方而非單純加法。",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一正方形邊長從 30 公分增加到 32 公分。新面積可用哪個式子快速計算？」獨立重算：32²=(30+2)²=30²+2·30·2+2²。 正解「30²+2·30·2+2²」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "07a9948c217debb58aa30f4bad68da2870f68f0efb22d55fb2f858c8f2c5521e"
    },
    {
      "reviewId": "u10-s012-v011-review",
      "questionId": "u10-s012-v011",
      "questionContentSha256": "3bc82819c480b51b0ecf34ce02424ee87cb52faa09624db2d82681850514e156",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "498×502=(500-2)(500+2)=500²-2²。",
      "derivedAnswer": "500²-2²",
      "storedAnswer": "500²-2²",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：500²-2²：平方差改寫正確。；(500-2)²：只表示 498²。；(500+2)²：只表示 502²。；500²-2·500·2：這是差平方的部分展開。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "純數乘積，不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「把共軛乘積誤作差平方」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：選擇心算公式，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「498 與 502 距 500 相同」是選擇平方差的核心情境結構。",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某人要心算 498×502，最適合的改寫為何？」獨立重算：498×502=(500-2)(500+2)=500²-2²。 正解「500²-2²」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "0461d0ee9edb6b8174ba98fa8e896247b5db477998d945fab255e7cb51996194"
    },
    {
      "reviewId": "u10-s012-v012-review",
      "questionId": "u10-s012-v012",
      "questionContentSha256": "7232e96b035bfbc6a9f0bd27bfebb69230bcddbfd08cbeab06c473e64947ebe3",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "剩餘=(x+2)²-(x-2)²。展開得 (x²+4x+4)-(x²-4x+4)=8x。",
      "derivedAnswer": "8x",
      "storedAnswer": "8x",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4x：少一倍。；8：把 x 消去過度。；8x：8x 正確。；4x+8：多出常數。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "若 x 以公尺計，答案為平方公尺；8 的係數帶相應長度單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "需 x>2，使內外邊長皆為正。",
        "alternateReading": "常見誤讀「兩平方相減時中間項符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：框形面積混合公式，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "外正方形減內正方形的幾何關係決定兩個平方相減，不能只用周長差。",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一個正方形庭院邊長為 x+2，中央挖去邊長 x-2 的正方形。剩餘面積為何？」獨立重算：剩餘=(x+2)²-(x-2)²。展開得 (x²+4x+4)-(x²-4x+4)=8x。 正解「8x」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "0d04bd5dcffacb0712f96142129b70b11582bd29a42d72031962bbe11aff6ba7"
    }
  ],
  "drawingSpecs": []
};
