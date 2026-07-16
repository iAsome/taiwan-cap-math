// Deterministically emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u10-s002-lecture-r1",
    "unitId": "u10",
    "numericUnitId": 10,
    "topicId": "u10-concepts",
    "skillId": "polynomial-evaluation",
    "lockedTitle": "多項式代入求值",
    "title": "多項式代入求值：先完整替換再計算",
    "audience": "臺灣國中零基礎至會考滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能將同一未知數的每一處都代入指定值。",
      "代入負數時能使用括號保留符號。",
      "能依指數、乘除、加減順序求出精確值。"
    ],
    "prerequisites": [
      "polynomial-terms"
    ],
    "prerequisiteBridge": "先備技能 polynomial-terms 已建立下一步所需概念；本節專注於將指定數值完整代入並依運算順序求值。",
    "glossary": [
      {
        "term": "代入",
        "definition": "用指定的數替換式中每一個同名未知數。"
      },
      {
        "term": "求值",
        "definition": "代入後完成運算得到數值。"
      },
      {
        "term": "運算順序",
        "definition": "先括號與次方，再乘除，最後加減。"
      }
    ],
    "notation": [
      {
        "symbol": "P(x)",
        "meaning": "表示多項式 P 在未知數 x 下的式子。"
      },
      {
        "symbol": "P(-2)",
        "meaning": "把 P(x) 中每個 x 都換成 -2。"
      }
    ],
    "conceptNarrative": [
      "代入不是只替換一個 x，而是所有 x 都要替換。",
      "代入負數務必加括號，例如 x² 在 x=-3 時是 (-3)²=9，不是 -3²=-9。",
      "同一式中可能同時有 x²、x 與常數，應分項計算再合併。",
      "若情境限制 x 的意義，例如長度不能為負，代數上可求值但解釋時仍要檢查情境範圍。",
      "多項式求值的核心是完整替換而非心算猜值：先圈出同名未知數的每一次出現，以括號代入指定數，特別讓負數成為次方的完整底數；再按次方、乘除、加減的順序分項計算，最後把各項依原符號合併。若含兩個未知數，須依名稱分別代入；若結果具有金額、溫度或面積意義，還要核對固定量、每單位變化量與答案單位是否一致。"
    ],
    "formalDefinitions": [
      {
        "name": "多項式的值",
        "statement": "指定未知數後，多項式依運算順序算得的數。"
      }
    ],
    "formulas": [
      {
        "formula": "P(a)",
        "conditions": [
          "將 P(x) 的每一個 x 替換為 a"
        ],
        "meaning": "a 必須符合題目給定或情境限制。"
      }
    ],
    "nonApplicableCases": [
      "不能把 x² 直接替換成 a；應替換成 a²。",
      "負數代入不加括號容易錯誤。",
      "不能先隨意合併不同次方項。",
      "題目若有兩個未知數，必須分別按指定值代入。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "圈出式中所有未知數。",
        "check": "完成此步後，確認內容仍符合「將指定數值完整代入並依運算順序求值」。"
      },
      {
        "step": 2,
        "instruction": "每一處都以括號替換成指定值。",
        "check": "完成此步後，確認內容仍符合「將指定數值完整代入並依運算順序求值」。"
      },
      {
        "step": 3,
        "instruction": "先算次方。",
        "check": "完成此步後，確認內容仍符合「將指定數值完整代入並依運算順序求值」。"
      },
      {
        "step": 4,
        "instruction": "再算各項乘法。",
        "check": "完成此步後，確認內容仍符合「將指定數值完整代入並依運算順序求值」。"
      },
      {
        "step": 5,
        "instruction": "最後依正負號加減並檢查情境單位。",
        "check": "完成此步後，確認內容仍符合「將指定數值完整代入並依運算順序求值」。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "P(x)=2x²-3x+1，求 P(2)。",
        "solutionSteps": [
          "2(2²)-3(2)+1=8-6+1。"
        ],
        "answer": "3。",
        "why": "同一個二必須代入二次項與一次項兩處，且平方只作用在代入值上。先算 2²，再乘外面的係數二，接著計算 -3×2，最後合併常數，可維持原式每一項的運算層級。"
      },
      {
        "exampleId": "L2",
        "prompt": "Q(x)=-x²+4x，求 Q(-3)。",
        "solutionSteps": [
          "-(-3)²+4(-3)=-9-12。"
        ],
        "answer": "-21。",
        "why": "原式的負號在平方運算之外，所以應先算 (-3)²=9，再取相反數成 -9；另一項 4(-3)=-12。把負數代入時保留括號，才能分辨外部負號與平方底數。"
      },
      {
        "exampleId": "L3",
        "prompt": "R(a,b)=2a-b，a=-1、b=5。",
        "solutionSteps": [
          "2(-1)-5=-2-5。"
        ],
        "answer": "-7。",
        "why": "多變數式必須依名稱逐一替換，a=-1 只進入 a 的位置，b=5 只進入 b 的位置。原式是減去 b，因此得到 -2-5 而不是 -2+5，最後結果為負七。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把 (-2)² 算成 -4",
        "why": "未把負數整體平方",
        "correction": "先寫括號，再算為 4。"
      },
      {
        "mistake": "只代入第一個 x",
        "why": "忽略同名未知數代表同一數",
        "correction": "逐一標記每個 x。"
      },
      {
        "mistake": "把 3x² 代入 x=2 算成 6²",
        "why": "把係數也放入平方",
        "correction": "3×(2²)=12。"
      },
      {
        "mistake": "算出各項後按代入順序任意相加減",
        "why": "分項值仍須服從原式各項前的正負號",
        "correction": "在代入前先標記每項符號，算完後依原順序重組。"
      }
    ],
    "selfCheck": [
      "我是否能將同一未知數的每一處都代入指定值？",
      "我是否能在代入負數時使用括號保留符號？",
      "我是否能依指數、乘除、加減順序求出精確值？",
      "我是否檢查了負號、括號、指數與題目所問的量？"
    ],
    "summary": [
      "所有同名未知數都要代入。",
      "負數代入一定加括號。",
      "先次方，再乘除，後加減。",
      "情境題最後檢查單位與可行範圍。"
    ],
    "connections": {
      "previous": "上一技能 多項式的項與係數 提供本節所需工具。",
      "next": [
        "下一節會將文字部分相同的項合併，先化簡再求值可降低計算量。"
      ]
    },
    "figureReferences": [],
    "accessibility": {
      "figureAltTextsRequired": false,
      "textOnlyPath": "所有公式與圖形關係均在正文以文字完整說明。"
    },
    "practiceLinks": {
      "mcQuestionIds": [
        "u10-s002-v001",
        "u10-s002-v002",
        "u10-s002-v003",
        "u10-s002-v004",
        "u10-s002-v005",
        "u10-s002-v006",
        "u10-s002-v007",
        "u10-s002-v008",
        "u10-s002-v009",
        "u10-s002-v010",
        "u10-s002-v011",
        "u10-s002-v012"
      ],
      "constructedResponseIds": [
        "u10-s002-cr001",
        "u10-s002-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP only",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段重讀「多項式代入求值：先完整替換再計算」：定義、3 個例題、錯誤推理與下一技能銜接均針對 polynomial-evaluation；另逐項檢查負號、係數、指數、括號和條件。",
      "reviewVersion": "human-lecture-review-u10-r1",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "3aad78eefd16132403be68a0699a2048b598acafa55f6b4de0067abe8b7f3460"
  },
  "mcQuestions": [
    {
      "questionId": "u10-s002-v001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "P(x)=3x+2，則 P(4) 為何？",
      "givenConditions": [],
      "target": "一次多項式求值",
      "choices": [
        "10",
        "14",
        "16",
        "20"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "代入 x=4：3×4+2=12+2=14。",
        "derivedChoice": "14",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "所有 x 以 4 替換後依乘法再加法計算。 將 P(4) 解讀為把式中每個 x 換成 4，得到 3×4+2；先算乘法十二，再加常數二，結果十四，代回式子可再次核對。",
      "steps": [
        "代入 x=4：3×4+2=12+2=14。",
        "以括號代入寫成 P(4)=3(4)+2，確認 x 已完整替換。",
        "依先乘後加計算 12+2=14，對應選項 14。"
      ],
      "optionAnalysis": [
        {
          "choice": "10",
          "truth": false,
          "reason": "漏加 2。"
        },
        {
          "choice": "14",
          "truth": true,
          "reason": "14 正確。"
        },
        {
          "choice": "16",
          "truth": false,
          "reason": "把 3+4+2 相加。"
        },
        {
          "choice": "20",
          "truth": false,
          "reason": "把 4² 誤用進來。"
        }
      ],
      "misconceptionTarget": "代入後漏做乘法或常數 把 3x 直接換成 34，或只代入 x 卻漏算乘法與最後的常數項。",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「一次多項式求值」且四個選項以同一表示層級作答；逐項重算後只有「14」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：一次多項式求值，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v001-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d62b8af9a1243827c27bfb00a3896a609e5f089e8427e944a41d59aeacf545ca"
    },
    {
      "questionId": "u10-s002-v002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "Q(x)=x²-5，則 Q(-3) 為何？",
      "givenConditions": [],
      "target": "負數代入平方",
      "choices": [
        "-14",
        "-4",
        "4",
        "14"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "Q(-3)=(-3)²-5=9-5=4。",
        "derivedChoice": "4",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "負數代入平方必須加括號。 代入負三時，平方的底數是整個 (-3)，所以 (-3)²=9；再減去 5 得 4，而不是先保留外面的負號算成 -9，正負號須分層判讀。",
      "steps": [
        "Q(-3)=(-3)²-5=9-5=4。",
        "完整代入為 Q(-3)=(-3)²-5，讓負號包含在平方底數內。",
        "先算平方 9，再做 9-5=4，核對唯一選項。"
      ],
      "optionAnalysis": [
        {
          "choice": "-14",
          "truth": false,
          "reason": "把 -3² 當 -9。"
        },
        {
          "choice": "-4",
          "truth": false,
          "reason": "算成 1，平方錯誤。"
        },
        {
          "choice": "4",
          "truth": true,
          "reason": "4 正確。"
        },
        {
          "choice": "14",
          "truth": false,
          "reason": "把減 5 看成加 5。"
        }
      ],
      "misconceptionTarget": "負數平方未加括號 省略負數外的括號，把 (-3)² 誤算成 -(3²)，導致平方值寫成負九。",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「負數代入平方」且四個選項以同一表示層級作答；逐項重算後只有「4」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：負數代入平方，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v002-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a8cdf2247635101017cc40f896798aac3c5ffd69ea42939271ea2e7f57c8fb3b"
    },
    {
      "questionId": "u10-s002-v003",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "R(a)=2a²-a，則 R(2) 為何？",
      "givenConditions": [],
      "target": "含平方的一次代入",
      "choices": [
        "4",
        "5",
        "8",
        "6"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "R(2)=2(2²)-2=8-2=6。",
        "derivedChoice": "6",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "先算平方，再乘係數，最後減去 a。 式中的 2 是乘在 a² 前的係數，不在平方範圍內；代入後先得 2×4=8，再減去同一個 a 值 2，結果為 6，兩處代入都不可遺漏。",
      "steps": [
        "R(2)=2(2²)-2=8-2=6。",
        "兩處 a 都代入 2，寫成 R(2)=2(2²)-2。",
        "依序算平方、乘法與減法，得到 2×4-2=6。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "只算 2a。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "把 2a² 誤算為 2a。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "漏減最後的 a。"
        },
        {
          "choice": "6",
          "truth": true,
          "reason": "2(4)-2=6，正確。"
        }
      ],
      "misconceptionTarget": "係數與平方作用範圍混淆 把係數 2 與代入值一起平方，或只替換 a² 中的 a 而漏掉末項的 a。",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「含平方的一次代入」且四個選項以同一表示層級作答；逐項重算後只有「6」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：含平方的一次代入，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v003-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "723e6e1a0c9d443ac796256ca7c630cbfae4e7f802ad016af60fb0572820c38f"
    },
    {
      "questionId": "u10-s002-v004",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 P(x)=2x²-3x+1，P(-2) 為何？",
      "givenConditions": [],
      "target": "完整代入二次多項式",
      "choices": [
        "15",
        "3",
        "-1",
        "-13"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "P(-2)=2(-2)²-3(-2)+1=8+6+1=15。",
        "derivedChoice": "15",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "分別計算二次項、一次項和常數後相加。 同一個 -2 同時代入二次項與一次項：平方後為正四，而 -3×(-2) 為正六；三項 8、6、1 相加才是 15。",
      "steps": [
        "P(-2)=2(-2)²-3(-2)+1=8+6+1=15。",
        "把兩處 x 都以 (-2) 替換，寫成 2(-2)²-3(-2)+1。",
        "分項算得 8、6、1，再相加為 15 並核對正負號。"
      ],
      "optionAnalysis": [
        {
          "choice": "15",
          "truth": true,
          "reason": "15 正確。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "漏算 -3(-2) 的正號。"
        },
        {
          "choice": "-1",
          "truth": false,
          "reason": "把平方值當負。"
        },
        {
          "choice": "-13",
          "truth": false,
          "reason": "多處符號錯誤。"
        }
      ],
      "misconceptionTarget": "負數代入兩個不同次方時符號錯誤 把 (-2)² 算成負四，或在 -3(-2) 中漏掉負負得正，使兩項符號判斷錯誤。",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「完整代入二次多項式」且四個選項以同一表示層級作答；逐項重算後只有「15」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：完整代入二次多項式，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v004-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4f987e6a4f18a8b25520d776096b3d50b7b0450d699fd0dcd26ed6c7587c1448"
    },
    {
      "questionId": "u10-s002-v005",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "A(t)=5-2t+t²，則 A(3) 為何？",
      "givenConditions": [],
      "target": "非降冪式求值",
      "choices": [
        "2",
        "5",
        "8",
        "14"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "A(3)=5-6+9=8。",
        "derivedChoice": "8",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "依原式三項求值並保留 -2t 的負號。 依原來的三項代入 t=3，常數為 5、一次項為 -2×3=-6、二次項為 3²=9；合計 5-6+9=8，原項符號須完整保留，並以三項相加順序核對答案。",
      "steps": [
        "A(3)=5-6+9=8。",
        "將兩處 t 都換成 3，得到 5-2(3)+3²。",
        "先算乘法與平方，再合併 5-6+9=8。"
      ],
      "optionAnalysis": [
        {
          "choice": "2",
          "truth": false,
          "reason": "漏加平方項。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "只算常數與一次項的絕對值。"
        },
        {
          "choice": "8",
          "truth": true,
          "reason": "8 正確。"
        },
        {
          "choice": "14",
          "truth": false,
          "reason": "把 -6 改成 +6。"
        }
      ],
      "misconceptionTarget": "忽略一次項負號 把 -2t 的負號漏掉，或按書寫順序先做 5-2 再乘 3，破壞運算順序。",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「非降冪式求值」且四個選項以同一表示層級作答；逐項重算後只有「8」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：非降冪式求值，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v005-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1619d853aa86908bd41d36ca64c673d9c64fd7a23361dfbd59818917cfbb50b9"
    },
    {
      "questionId": "u10-s002-v006",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "F(x,y)=2x²-xy+y，當 x=-1、y=3 時，F 為何？",
      "givenConditions": [],
      "target": "兩變數求值",
      "choices": [
        "-4",
        "0",
        "2",
        "8"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "2(-1)²-(-1)(3)+3=2+3+3=8。",
        "derivedChoice": "8",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "兩個未知數分別代入，-xy 中的乘積符號要重新判定。 x=-1、y=3 必須分別代入所有位置；2x²=2，而 xy=(-1)×3=-3，所以式中的 -xy 變成 -(-3)=+3，最後再加 y=3，三項合計為八。",
      "steps": [
        "2(-1)²-(-1)(3)+3=2+3+3=8。",
        "完整代入為 2(-1)²-(-1)(3)+3，保留每組括號。",
        "算得 2-(-3)+3=2+3+3=8，逐項核對符號。"
      ],
      "optionAnalysis": [
        {
          "choice": "-4",
          "truth": false,
          "reason": "把平方與乘積都算錯。"
        },
        {
          "choice": "0",
          "truth": false,
          "reason": "漏掉 y。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "把 -xy 算成 -3。"
        },
        {
          "choice": "8",
          "truth": true,
          "reason": "8 正確。"
        }
      ],
      "misconceptionTarget": "多變數代入時負號與乘積混亂 沒有先算 xy 的正負，將 -(-1)(3) 誤作負三，或把 x、y 的代入位置互換。",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「兩變數求值」且四個選項以同一表示層級作答；逐項重算後只有「8」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：兩變數求值，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v006-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "06a7a7a28d30e782a25fa47e2f673e56c35b941826249ad86674a95f305ec0e1"
    },
    {
      "questionId": "u10-s002-v007",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "P(x)=x³-3x。若 k 為正整數且 P(k)=18，下列何者是 k？",
      "givenConditions": [],
      "target": "由多項式值反查整數",
      "choices": [
        "3",
        "1",
        "2",
        "4"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "P(1)=-2，P(2)=2，P(4)=52，P(3)=27-9=18，所以 k=3。",
        "derivedChoice": "3",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "將四個候選值獨立代入，只有 3 符合。 題目已把 k 限為四個候選正整數，可逐一代入檢查；只有 k=3 時 3³-3×3=27-9=18，其餘值皆不符合，故答案唯一。",
      "steps": [
        "P(1)=-2，P(2)=2，P(4)=52，P(3)=27-9=18，所以 k=3。",
        "分別計算四個候選值的 k³-3k，不只檢查第一個看似合理者。",
        "比較結果 -2、2、18、52，確認只有 k=3 產生 18。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": true,
          "reason": "得到 18，正確。"
        },
        {
          "choice": "1",
          "truth": false,
          "reason": "得到 -2。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "得到 2。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "得到 52。"
        }
      ],
      "misconceptionTarget": "只檢查單一候選或立方計算錯誤 看到十八就猜立方根附近的數，沒有把候選值代入完整的 k³-3k 驗證。",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由多項式值反查整數」且四個選項以同一表示層級作答；逐項重算後只有「3」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：由多項式值反查整數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v007-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "76d24267f0ae854c5a9061a05a8314934cf76b62f00be61ea8dccf29161ba061"
    },
    {
      "questionId": "u10-s002-v008",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 P(x)=ax²+2x-1 且 P(2)=15，則 a 為何？",
      "givenConditions": [],
      "target": "由指定函數值求係數",
      "choices": [
        "1",
        "3",
        "2",
        "4"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "P(2)=4a+4-1=4a+3=15，所以 4a=12，a=3。",
        "derivedChoice": "3",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "先代入再解係數方程。 將 x=2 代入時 x²=4，所以 P(2)=4a+4-1；合併常數得 4a+3=15，依序移項、除以四可得 a=3；代回原式可驗得十五，也能確認參數解唯一。",
      "steps": [
        "P(2)=4a+4-1=4a+3=15，所以 4a=12，a=3。",
        "代入並化簡為 4a+3=15，先把含 a 與常數部分分清楚。",
        "兩邊減 3 得 4a=12，再除以 4 得 a=3，代回核對 P(2)=15。"
      ],
      "optionAnalysis": [
        {
          "choice": "1",
          "truth": false,
          "reason": "a=1 時 P(2)=7。"
        },
        {
          "choice": "3",
          "truth": true,
          "reason": "a=3 時 P(2)=15。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "a=2 時 P(2)=11。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "a=4 時 P(2)=19。"
        }
      ],
      "misconceptionTarget": "代入後未平方或解方程錯誤 將 ax² 代成 2a 而漏掉平方，或由 4a=12 除法錯誤而選到其他係數。",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由指定函數值求係數」且四個選項以同一表示層級作答；逐項重算後只有「3」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：由指定函數值求係數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v008-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b2f799b30f51f73a76a52cb87ca1471a73f2aeb52d8bad91973c67d2d3d790ce"
    },
    {
      "questionId": "u10-s002-v009",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "P(x)=x²+x+1。P(2)-P(-2) 為何？",
      "givenConditions": [],
      "target": "比較兩個代入值",
      "choices": [
        "-4",
        "0",
        "8",
        "4"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "P(2)=7，P(-2)=4-2+1=3，差為 4。",
        "derivedChoice": "4",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "分別代入正負 2，再依指定次序相減。 正二與負二平方都為四，但一次項分別是 +2 與 -2，因此 P(2)=7、P(-2)=3；題目指定前者減後者，差為 4。",
      "steps": [
        "P(2)=7，P(-2)=4-2+1=3，差為 4。",
        "分開計算 P(2)=4+2+1 與 P(-2)=4-2+1。",
        "依題目順序用 7-3，而非顛倒相減，得到 4。"
      ],
      "optionAnalysis": [
        {
          "choice": "-4",
          "truth": false,
          "reason": "把相減次序顛倒。"
        },
        {
          "choice": "0",
          "truth": false,
          "reason": "誤以為偶次式兩值相同。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "把兩值相加。"
        },
        {
          "choice": "4",
          "truth": true,
          "reason": "7-3=4，正確。"
        }
      ],
      "misconceptionTarget": "忽略一次項使正負代入不同 以為正負二代入後平方相同就使整個多項式值相同，忽略一次項會改變符號。",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「比較兩個代入值」且四個選項以同一表示層級作答；逐項重算後只有「4」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：比較兩個代入值，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v009-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f91bf8319146249f9bf9b4789bbd115153a5da9bb7466608ae80b6c9e371aae9"
    },
    {
      "questionId": "u10-s002-v010",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "溫度模型 T(h)=18-2h，h 表示午夜後經過小時數。h=5 時模型溫度為何？",
      "givenConditions": [],
      "target": "線性模型代入",
      "choices": [
        "8°C",
        "10°C",
        "13°C",
        "28°C"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "T(5)=18-2×5=8。",
        "derivedChoice": "8°C",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "每小時下降 2°C，5 小時共下降 10°C。 h=5 表示經過五個一小時，每小時下降 2°C，總下降量為 2×5=10°C；由初始 18°C 扣除後為 8°C，溫度單位保持不變，且符合逐時下降的模型方向。",
      "steps": [
        "T(5)=18-2×5=8。",
        "將 h=5 代入模型，寫成 T(5)=18-2×5。",
        "先算下降量 10，再做 18-10=8，保留攝氏度單位。"
      ],
      "optionAnalysis": [
        {
          "choice": "8°C",
          "truth": true,
          "reason": "18-10=8°C，正確。"
        },
        {
          "choice": "10°C",
          "truth": false,
          "reason": "少下降 2°C。"
        },
        {
          "choice": "13°C",
          "truth": false,
          "reason": "只做 18-5。"
        },
        {
          "choice": "28°C",
          "truth": false,
          "reason": "把下降當上升。"
        }
      ],
      "misconceptionTarget": "未把每小時變化乘小時數 只從十八減一次二，或把每小時下降二度誤當成五小時總共下降二度。",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "T 的單位為 °C；-2 的單位為 °C/小時。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「線性模型代入」且四個選項以同一表示層級作答；逐項重算後只有「8°C」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：線性模型代入，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "時間與降溫率決定必須把 h=5 代入，情境也提供 °C 單位。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v010-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f7e49ea5f9fa0246530cb289e0f727d1aa03f80ab05d20716cdfd52ac6cb5b8e"
    },
    {
      "questionId": "u10-s002-v011",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一張長方形紙的面積 A(x)=x(x+3)。當 x=7 公分時面積是多少？",
      "givenConditions": [],
      "target": "面積模型求值",
      "choices": [
        "49 平方公分",
        "70 平方公分",
        "73 平方公分",
        "140 平方公分"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "A(7)=7(7+3)=7×10=70 平方公分。",
        "derivedChoice": "70 平方公分",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "代入的是兩個邊長因數，乘積單位為平方公分。 x=7 時兩個邊長分別是 7 公分與 7+3=10 公分，面積須以長乘寬，故 7×10=70，單位為平方公分。",
      "steps": [
        "A(7)=7(7+3)=7×10=70 平方公分。",
        "分別代入兩個因數，得到 A(7)=7(7+3)。",
        "先算括號為 10，再乘 7 得 70 平方公分並核對面積單位。"
      ],
      "optionAnalysis": [
        {
          "choice": "49 平方公分",
          "truth": false,
          "reason": "只算 7²。"
        },
        {
          "choice": "70 平方公分",
          "truth": true,
          "reason": "70 平方公分正確。"
        },
        {
          "choice": "73 平方公分",
          "truth": false,
          "reason": "把 3 直接加到面積。"
        },
        {
          "choice": "140 平方公分",
          "truth": false,
          "reason": "多乘 2。"
        }
      ],
      "misconceptionTarget": "把面積乘法誤成加法 把兩個邊長直接相加得到十七，或只計算 x² 而漏掉括號中的加三。",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "兩邊皆以公分計，面積為平方公分。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「面積模型求值」且四個選項以同一表示層級作答；逐項重算後只有「70 平方公分」成立。",
      "boundaryAudit": "x=7 使兩邊長 7、10 皆為正。",
      "difficultyReason": "素養：面積模型求值，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "邊長情境決定兩因數及平方單位，不能刪除而保留同一題意。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v011-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "012e3893626ed8c0b26b8422b89f81ee96eda43e3566d70233e3a584dbfebf32"
    },
    {
      "questionId": "u10-s002-v012",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "活動總費用 C(n)=1200+45n。若有 32 人，總費用為何？",
      "givenConditions": [],
      "target": "成本模型代入",
      "choices": [
        "1440 元",
        "2685 元",
        "2640 元",
        "3840 元"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "C(32)=1200+45×32=1200+1440=2640。",
        "derivedChoice": "2640 元",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "固定費加上每人費用。 1200 元是不隨人數改變的固定費，45n 是每人費；三十二人的變動費為 45×32=1440 元，再加固定費得 2640 元，兩種費用缺一不可。",
      "steps": [
        "C(32)=1200+45×32=1200+1440=2640。",
        "代入 n=32，得到 C(32)=1200+45×32。",
        "先算 45×32=1440，再加 1200 得 2640 元。"
      ],
      "optionAnalysis": [
        {
          "choice": "1440 元",
          "truth": false,
          "reason": "未依每人 45 元計算。"
        },
        {
          "choice": "2685 元",
          "truth": false,
          "reason": "多計一人費用。"
        },
        {
          "choice": "2640 元",
          "truth": true,
          "reason": "1200+45×32=2640，正確。"
        },
        {
          "choice": "3840 元",
          "truth": false,
          "reason": "錯把固定費重複計算。"
        }
      ],
      "misconceptionTarget": "固定費與單位費混算 只算每人費而漏加固定費，或把固定費 1200 也乘以人數三十二。",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "1200 與 45n 均為元；n 為人數。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「成本模型代入」且四個選項以同一表示層級作答；逐項重算後只有「2640 元」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：成本模型代入，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "人數、固定費與每人費的角色決定運算和單位。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v012-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f5f27e5cc6e0136fa049d14de5c9389afe094b2c3755dd54f7714bb8df755db5"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u10-s002-cr001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "standard",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "P(x)=2x²-3x+4。計算 P(-2)，並寫出代入的完整算式。",
      "requiredWork": [
        "負數代入加括號。",
        "依運算順序求值。"
      ],
      "standardSolution": [
        "P(-2)=2(-2)²-3(-2)+4。",
        "=2×4+6+4=18。",
        "分項檢查可得二次項 2×4=8、一次項 -3×(-2)=6、常數項 4；三者相加為 18。把 -2 同時代入兩處 x 並保留括號，才能確定平方與負負得正兩個符號都正確。"
      ],
      "alternativeMethods": [
        "可先分項計算：二次項 8、一次項 6、常數 4，再相加。"
      ],
      "reasoningSteps": [
        "P(-2)=2(-2)²-3(-2)+4。",
        "=2×4+6+4=18。",
        "把分項結果 8、6、4 依原式符號重新相加，得到 18，並核對完整等號鏈。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "完整代入且答案 18。"
        },
        {
          "score": 2,
          "criteria": "方法正確但單一算術錯。"
        },
        {
          "score": 1,
          "criteria": "有代入 -2 但平方或符號處理錯。"
        },
        {
          "score": 0,
          "criteria": "未代入或答案無關。"
        }
      ],
      "partialCreditRules": [
        "若只漏寫一組括號但後續算得 18，扣 1 分。"
      ],
      "followThroughPolicy": "早期把 (-2)² 算成 -4，後續運算一致可得 1 分方法分，不給正確答案分。",
      "unitAndNotationRules": "不涉及單位；等號鏈需保持左右相等。",
      "answerOnlyPolicy": "只寫 18 且無算式，最高 1 分。",
      "commonErrorTargets": [
        "把 (-2)² 算成 -4，沒有將負二整體放入平方括號。",
        "只替換二次項中的 x，或把 -3(-2) 算成 -6，漏掉負負得正。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立重算 8+6+4=18。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7f1da9bb691ac142185310b8978ff52d81488b9def81047d777d66705206a02e"
    },
    {
      "questionId": "u10-s002-cr002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "advanced",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "已知 Q(x)=ax²-2x+1，且 Q(3)=22。求 a，並用求得的 a 驗算。",
      "requiredWork": [
        "代入 x=3 建立方程。",
        "解出 a。",
        "回代驗算 Q(3)。"
      ],
      "standardSolution": [
        "9a-6+1=22，所以 9a-5=22，9a=27，a=3。",
        "驗算：3×9-6+1=22。",
        "由 9a-5=22 解得 a=3 後，不能只寫「符合」；應把 a=3、x=3 一起代回原式，算出 3×3²-2×3+1=27-6+1=22，確實等於題設值。這也確認移項與除法沒有造成參數誤差，故解答完整且唯一。"
      ],
      "alternativeMethods": [
        "可由 Q(3) 的二次項應為 27，直接算 a=27/9=3。"
      ],
      "reasoningSteps": [
        "9a-6+1=22，所以 9a-5=22，9a=27，a=3。",
        "驗算：3×9-6+1=22。",
        "將 a=3 代回 Q(x)，再取 x=3 算得 22，完成與原條件的獨立驗算。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "方程、a=3、驗算三者完整。"
        },
        {
          "score": 2,
          "criteria": "a 正確但缺驗算，或單一書寫瑕疵。"
        },
        {
          "score": 1,
          "criteria": "正確代入形成 9a-5=22，但解算錯。"
        },
        {
          "score": 0,
          "criteria": "未形成合理方程。"
        }
      ],
      "partialCreditRules": [
        "驗算若只寫「符合」未列值，仍可得 2 分但不滿分。"
      ],
      "followThroughPolicy": "若把 -2(3) 算錯，後續正確解自己方程，可給 1 分；不得視為完全正確。",
      "unitAndNotationRules": "不涉及單位；a 為純數。",
      "answerOnlyPolicy": "只寫 a=3 無過程，最高 1 分。",
      "commonErrorTargets": [
        "把 x=3 代入 ax² 時寫成 3a，漏掉平方而建立錯誤方程。",
        "解出 a 後未回代驗算，或驗算時把參數 a 與變數 x 的兩個三混為同一因數。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立代入確認 27-6+1=22。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f0ff028fa3fddb3611cb78e4b0937d1608e957cb43d6752f21e2e0fbf8a9cbcf"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u10-s002-v001-review",
      "questionId": "u10-s002-v001",
      "questionContentSha256": "d62b8af9a1243827c27bfb00a3896a609e5f089e8427e944a41d59aeacf545ca",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "代入 x=4：3×4+2=12+2=14。",
      "derivedAnswer": "14",
      "storedAnswer": "14",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：10：漏加 2。；14：14 正確。；16：把 3+4+2 相加。；20：把 4² 誤用進來。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「代入後漏做乘法或常數」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：一次多項式求值，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「P(x)=3x+2，則 P(4) 為何？」獨立重算：代入 x=4：3×4+2=12+2=14。 正解「14」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "95ab205d44f55f717ba1e55321cc63232bdba59a62b149613f9a46ec8279dc24"
    },
    {
      "reviewId": "u10-s002-v002-review",
      "questionId": "u10-s002-v002",
      "questionContentSha256": "a8cdf2247635101017cc40f896798aac3c5ffd69ea42939271ea2e7f57c8fb3b",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "Q(-3)=(-3)²-5=9-5=4。",
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-14：把 -3² 當 -9。；-4：算成 1，平方錯誤。；4：4 正確。；14：把減 5 看成加 5。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「負數平方未加括號」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：負數代入平方，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「Q(x)=x²-5，則 Q(-3) 為何？」獨立重算：Q(-3)=(-3)²-5=9-5=4。 正解「4」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "317ac0d25ac7915a2d31d8e81ad95c09da1068d1ef9b63d3dc91ffcfb68f3aa6"
    },
    {
      "reviewId": "u10-s002-v003-review",
      "questionId": "u10-s002-v003",
      "questionContentSha256": "723e6e1a0c9d443ac796256ca7c630cbfae4e7f802ad016af60fb0572820c38f",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "R(2)=2(2²)-2=8-2=6。",
      "derivedAnswer": "6",
      "storedAnswer": "6",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4：只算 2a。；5：把 2a² 誤算為 2a。；8：漏減最後的 a。；6：2(4)-2=6，正確。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「係數與平方作用範圍混淆」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：含平方的一次代入，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「R(a)=2a²-a，則 R(2) 為何？」獨立重算：R(2)=2(2²)-2=8-2=6。 正解「6」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "1c8b5a001c6713f8b472a95e78a931f42defc0742638d069189d99e9238a40f9"
    },
    {
      "reviewId": "u10-s002-v004-review",
      "questionId": "u10-s002-v004",
      "questionContentSha256": "4f987e6a4f18a8b25520d776096b3d50b7b0450d699fd0dcd26ed6c7587c1448",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "P(-2)=2(-2)²-3(-2)+1=8+6+1=15。",
      "derivedAnswer": "15",
      "storedAnswer": "15",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：15：15 正確。；3：漏算 -3(-2) 的正號。；-1：把平方值當負。；-13：多處符號錯誤。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「負數代入兩個不同次方時符號錯誤」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：完整代入二次多項式，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 P(x)=2x²-3x+1，P(-2) 為何？」獨立重算：P(-2)=2(-2)²-3(-2)+1=8+6+1=15。 正解「15」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "1306351a65fe12caea593394c2699a6d20c499c5c5ca024f28b5c7e506b50ee4"
    },
    {
      "reviewId": "u10-s002-v005-review",
      "questionId": "u10-s002-v005",
      "questionContentSha256": "1619d853aa86908bd41d36ca64c673d9c64fd7a23361dfbd59818917cfbb50b9",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "A(3)=5-6+9=8。",
      "derivedAnswer": "8",
      "storedAnswer": "8",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2：漏加平方項。；5：只算常數與一次項的絕對值。；8：8 正確。；14：把 -6 改成 +6。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「忽略一次項負號」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：非降冪式求值，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「A(t)=5-2t+t²，則 A(3) 為何？」獨立重算：A(3)=5-6+9=8。 正解「8」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "9efb78add849dfe37f48de00d0b7a79c6ea51c7441f8786238bcc19389694b6a"
    },
    {
      "reviewId": "u10-s002-v006-review",
      "questionId": "u10-s002-v006",
      "questionContentSha256": "06a7a7a28d30e782a25fa47e2f673e56c35b941826249ad86674a95f305ec0e1",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "2(-1)²-(-1)(3)+3=2+3+3=8。",
      "derivedAnswer": "8",
      "storedAnswer": "8",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-4：把平方與乘積都算錯。；0：漏掉 y。；2：把 -xy 算成 -3。；8：8 正確。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「多變數代入時負號與乘積混亂」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：兩變數求值，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「F(x,y)=2x²-xy+y，當 x=-1、y=3 時，F 為何？」獨立重算：2(-1)²-(-1)(3)+3=2+3+3=8。 正解「8」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "f2bfb3f4087b51c413937fb15a25d24f0a81c4c873a10e5ccddbc86a2ac77c14"
    },
    {
      "reviewId": "u10-s002-v007-review",
      "questionId": "u10-s002-v007",
      "questionContentSha256": "76d24267f0ae854c5a9061a05a8314934cf76b62f00be61ea8dccf29161ba061",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "P(1)=-2，P(2)=2，P(4)=52，P(3)=27-9=18，所以 k=3。",
      "derivedAnswer": "3",
      "storedAnswer": "3",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：3：得到 18，正確。；1：得到 -2。；2：得到 2。；4：得到 52。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只檢查單一候選或立方計算錯誤」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：由多項式值反查整數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「P(x)=x³-3x。若 k 為正整數且 P(k)=18，下列何者是 k？」獨立重算：P(1)=-2，P(2)=2，P(4)=52，P(3)=27-9=18，所以 k=3。 正解「3」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "7790c60c86d4d71aaf1300682c551cf79f25e05ac4c97000d002a920bc7e3af4"
    },
    {
      "reviewId": "u10-s002-v008-review",
      "questionId": "u10-s002-v008",
      "questionContentSha256": "b2f799b30f51f73a76a52cb87ca1471a73f2aeb52d8bad91973c67d2d3d790ce",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "P(2)=4a+4-1=4a+3=15，所以 4a=12，a=3。",
      "derivedAnswer": "3",
      "storedAnswer": "3",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：1：a=1 時 P(2)=7。；3：a=3 時 P(2)=15。；2：a=2 時 P(2)=11。；4：a=4 時 P(2)=19。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「代入後未平方或解方程錯誤」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：由指定函數值求係數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 P(x)=ax²+2x-1 且 P(2)=15，則 a 為何？」獨立重算：P(2)=4a+4-1=4a+3=15，所以 4a=12，a=3。 正解「3」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "adb169745ad0a5653a383a991542852841d2e0192469af4f9b3d2473620af4fd"
    },
    {
      "reviewId": "u10-s002-v009-review",
      "questionId": "u10-s002-v009",
      "questionContentSha256": "f91bf8319146249f9bf9b4789bbd115153a5da9bb7466608ae80b6c9e371aae9",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "P(2)=7，P(-2)=4-2+1=3，差為 4。",
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
        "secondCorrectAnswer": "逐一檢查四選項：-4：把相減次序顛倒。；0：誤以為偶次式兩值相同。；8：把兩值相加。；4：7-3=4，正確。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「忽略一次項使正負代入不同」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：比較兩個代入值，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「P(x)=x²+x+1。P(2)-P(-2) 為何？」獨立重算：P(2)=7，P(-2)=4-2+1=3，差為 4。 正解「4」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "a6bc525b43cd294dc62eedcdb6a4c1ede7ebb45497d5e26cd95fd098578a0a8d"
    },
    {
      "reviewId": "u10-s002-v010-review",
      "questionId": "u10-s002-v010",
      "questionContentSha256": "f7e49ea5f9fa0246530cb289e0f727d1aa03f80ab05d20716cdfd52ac6cb5b8e",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "T(5)=18-2×5=8。",
      "derivedAnswer": "8°C",
      "storedAnswer": "8°C",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：8°C：18-10=8°C，正確。；10°C：少下降 2°C。；13°C：只做 18-5。；28°C：把下降當上升。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "T 的單位為 °C；-2 的單位為 °C/小時。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「未把每小時變化乘小時數」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：線性模型代入，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "時間與降溫率決定必須把 h=5 代入，情境也提供 °C 單位。",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「溫度模型 T(h)=18-2h，h 表示午夜後經過小時數。h=5 時模型溫度為何？」獨立重算：T(5)=18-2×5=8。 正解「8°C」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "07b858aa6bc74238359bb5617a7ab7648ddc80f8fccc7fa792ce667f82977abc"
    },
    {
      "reviewId": "u10-s002-v011-review",
      "questionId": "u10-s002-v011",
      "questionContentSha256": "012e3893626ed8c0b26b8422b89f81ee96eda43e3566d70233e3a584dbfebf32",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "A(7)=7(7+3)=7×10=70 平方公分。",
      "derivedAnswer": "70 平方公分",
      "storedAnswer": "70 平方公分",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：49 平方公分：只算 7²。；70 平方公分：70 平方公分正確。；73 平方公分：把 3 直接加到面積。；140 平方公分：多乘 2。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "兩邊皆以公分計，面積為平方公分。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "x=7 使兩邊長 7、10 皆為正。",
        "alternateReading": "常見誤讀「把面積乘法誤成加法」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：面積模型求值，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "邊長情境決定兩因數及平方單位，不能刪除而保留同一題意。",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一張長方形紙的面積 A(x)=x(x+3)。當 x=7 公分時面積是多少？」獨立重算：A(7)=7(7+3)=7×10=70 平方公分。 正解「70 平方公分」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "1b91f50456189bd1d97328fc622032067a55291ae9194c656f8c5b846f381826"
    },
    {
      "reviewId": "u10-s002-v012-review",
      "questionId": "u10-s002-v012",
      "questionContentSha256": "f5f27e5cc6e0136fa049d14de5c9389afe094b2c3755dd54f7714bb8df755db5",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "C(32)=1200+45×32=1200+1440=2640。",
      "derivedAnswer": "2640 元",
      "storedAnswer": "2640 元",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：1440 元：未依每人 45 元計算。；2685 元：多計一人費用。；2640 元：1200+45×32=2640，正確。；3840 元：錯把固定費重複計算。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "1200 與 45n 均為元；n 為人數。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「固定費與單位費混算」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：成本模型代入，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "人數、固定費與每人費的角色決定運算和單位。",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「活動總費用 C(n)=1200+45n。若有 32 人，總費用為何？」獨立重算：C(32)=1200+45×32=1200+1440=2640。 正解「2640 元」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "013260bdef9d4a646ea371720910199d3b10097e5c9f9415c83ce347f8f09fa1"
    }
  ],
  "drawingSpecs": []
};
