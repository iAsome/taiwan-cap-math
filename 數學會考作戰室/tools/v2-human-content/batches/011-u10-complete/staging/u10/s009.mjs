// Deterministically emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u10-s009-lecture-r1",
    "unitId": "u10",
    "numericUnitId": 10,
    "topicId": "u10-formulas",
    "skillId": "square-sum-formula",
    "lockedTitle": "和的平方公式",
    "title": "和的平方公式：中間項是兩倍乘積",
    "audience": "臺灣國中零基礎至會考滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能由二項式乘法推導和的平方公式。",
      "能辨認 a、b 並正確寫出 2ab。",
      "能用公式展開、求值與解讀正方形面積。"
    ],
    "prerequisites": [
      "binomial-multiply-basic"
    ],
    "prerequisiteBridge": "先備技能 binomial-multiply-basic 已建立下一步所需概念；本節專注於理解並運用 (a+b)²=a²+2ab+b²。",
    "glossary": [
      {
        "term": "完全平方",
        "definition": "某個式子乘自身所得的平方。"
      },
      {
        "term": "兩倍乘積",
        "definition": "公式中間項 2ab，來自兩個相同交叉乘積。"
      },
      {
        "term": "平方項",
        "definition": "a² 與 b²。"
      }
    ],
    "notation": [
      {
        "symbol": "(a+b)²",
        "meaning": "(a+b)(a+b)，不是 a²+b²。"
      }
    ],
    "conceptNarrative": [
      "和的平方公式來自 (a+b)(a+b) 的四個乘積：a²、ab、ab、b²，合併後為 a²+2ab+b²。中間項不是額外規定，而是兩個相同交叉乘積的總和；套用公式時要先清楚圈出完整的 a、b，若 a 是 2x 或 x+y，平方與乘積都要把它視為整體。",
      "係數也屬於被平方的整體，例如 (2x+3)² 的首項是 (2x)²=4x²，而中間項是 2·2x·3=12x。含參數時，首平方往往只決定參數的絕對值，中間項的正負與係數才能選出唯一符號，最後再用尾平方驗證。",
      "面積模型把邊長 a+b 的正方形分成 a² 大正方形、兩個 ab 長方形與 b² 小正方形，完整呈現公式三部分。圖形不按比例時只能使用標示尺寸，不能量圖猜值；替代文字與長描述也應提供相同分割關係，但未知區保留問號以避免答案洩漏。"
    ],
    "formalDefinitions": [
      {
        "name": "和的平方公式",
        "statement": "(a+b)²=a²+2ab+b²。"
      }
    ],
    "formulas": [
      {
        "formula": "(a+b)²=a²+2ab+b²",
        "conditions": [
          "a、b 可為數或符合範圍的代數式"
        ],
        "meaning": "中間項符號為正。"
      }
    ],
    "nonApplicableCases": [
      "不能省略 2ab。",
      "(a+b)² 不等於 a²+b²。",
      "若括號內是三項，不能直接套二項公式。",
      "a、b 本身若為多項式，平方與乘積仍須完整計算。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "辨認括號中的第一部分 a 與第二部分 b。",
        "check": "完成此步後，確認內容仍符合「理解並運用 (a+b)²=a²+2ab+b²」。"
      },
      {
        "step": 2,
        "instruction": "算 a²。",
        "check": "完成此步後，確認內容仍符合「理解並運用 (a+b)²=a²+2ab+b²」。"
      },
      {
        "step": 3,
        "instruction": "算 2ab 並保留正號。",
        "check": "完成此步後，確認內容仍符合「理解並運用 (a+b)²=a²+2ab+b²」。"
      },
      {
        "step": 4,
        "instruction": "算 b²。",
        "check": "完成此步後，確認內容仍符合「理解並運用 (a+b)²=a²+2ab+b²」。"
      },
      {
        "step": 5,
        "instruction": "合併可能的同類項並驗查首尾平方。",
        "check": "完成此步後，確認內容仍符合「理解並運用 (a+b)²=a²+2ab+b²」。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "展開 (x+5)²。",
        "solutionSteps": [
          "首平方為 x²。",
          "中間項為 2·x·5=10x，尾平方為 25。"
        ],
        "answer": "x²+10x+25。",
        "why": "把平方寫成兩個相同括號即可看見五 x 會出現兩次，所以中間係數是十；只寫首尾平方會漏掉兩個交叉乘積。"
      },
      {
        "exampleId": "L2",
        "prompt": "展開 (2x+3)²。",
        "solutionSteps": [
          "(2x)²=4x²。",
          "2(2x)(3)=12x，3²=9。"
        ],
        "answer": "4x²+12x+9。",
        "why": "第一部分是完整的二 x，係數二也要平方；中間項同時包含公式前面的二、係數二與常數三，三個因數缺一不可。"
      },
      {
        "exampleId": "L3",
        "prompt": "利用公式計算 103²。",
        "solutionSteps": [
          "改寫為 (100+3)²。",
          "計算 10000+600+9。"
        ],
        "answer": "10609。",
        "why": "把一百零三拆成接近整數的一百加三，可直接套和平方；中間六百來自兩倍乘積，不可只算一百平方加三平方。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "寫成 a²+b²",
        "why": "漏掉兩個交叉乘積",
        "correction": "由 (a+b)(a+b) 重展一次。"
      },
      {
        "mistake": "把 (2x)² 寫成 2x²",
        "why": "係數沒有平方",
        "correction": "(2x)²=4x²。"
      },
      {
        "mistake": "中間項寫 ab",
        "why": "漏掉兩個相同交叉項",
        "correction": "固定記為 2ab。"
      },
      {
        "mistake": "由首平方相同就判兩個展開式完全相同",
        "why": "首平方無法單獨決定中間項符號",
        "correction": "再比較 2ab 的係數與正負，並用尾平方完成驗證。"
      }
    ],
    "selfCheck": [
      "我是否能由二項式乘法推導和的平方公式？",
      "我是否能辨認 a、b 並正確寫出 2ab？",
      "我是否能用公式展開、求值與解讀正方形面積？",
      "我是否檢查了負號、括號、指數與題目所問的量？"
    ],
    "summary": [
      "和的平方等於首平方加兩倍乘積加尾平方。",
      "中間項一定是 +2ab。",
      "係數與文字都要平方。",
      "可用面積或雙重分配驗證公式。"
    ],
    "connections": {
      "previous": "上一技能 二項式乘法 提供本節所需工具。",
      "next": [
        "下一節只改成差，但尾平方仍為正，中間項改為負。"
      ]
    },
    "figureReferences": [
      "u10-fig-square-sum-area"
    ],
    "accessibility": {
      "figureAltTextsRequired": true,
      "textOnlyPath": "所有公式與圖形關係均在正文以文字完整說明。"
    },
    "practiceLinks": {
      "mcQuestionIds": [
        "u10-s009-v001",
        "u10-s009-v002",
        "u10-s009-v003",
        "u10-s009-v004",
        "u10-s009-v005",
        "u10-s009-v006",
        "u10-s009-v007",
        "u10-s009-v008",
        "u10-s009-v009",
        "u10-s009-v010",
        "u10-s009-v011",
        "u10-s009-v012"
      ],
      "constructedResponseIds": [
        "u10-s009-cr001",
        "u10-s009-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP only",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段重讀「和的平方公式：中間項是兩倍乘積」：定義、3 個例題、錯誤推理與下一技能銜接均針對 square-sum-formula；另逐項檢查負號、係數、指數、括號和條件。",
      "reviewVersion": "human-lecture-review-u10-r1",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "32f7962a4b14e5191495136c48e72c5330123e704738848f80a187fa51161f04"
  },
  "mcQuestions": [
    {
      "questionId": "u10-s009-v001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-sum-formula",
      "skillSlot": "s009",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "邊長為 x+3 的正方形分成一個 x×x 正方形、兩個 x×3 長方形與一個 3×3 正方形。兩個長方形的總面積是多少？",
      "givenConditions": [
        "正方形邊長x+3",
        "兩個長方形尺寸皆為x×3"
      ],
      "target": "由幾何分割辨認和的平方中間項",
      "choices": [
        "6x",
        "3x",
        "x²+6x",
        "9"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "每個長方形面積為3x，兩個合計6x；這正是 (x+3)² 展開式的中間項。",
        "derivedChoice": "6x",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "先求一個 x×3 長方形面積，再乘以2。 每個長方形邊長為 x 與三，面積是三 x；兩個全等長方形合計二乘三 x 等於六 x，正好對應和平方公式中的兩個交叉區域。",
      "steps": [
        "求一個x×3長方形面積3x。",
        "兩個相同長方形合計6x。",
        "確認兩個長方形各為 3x，合計 6x。"
      ],
      "optionAnalysis": [
        {
          "choice": "6x",
          "truth": true,
          "reason": "兩個3x區塊合計6x。"
        },
        {
          "choice": "3x",
          "truth": false,
          "reason": "3x只算一個長方形。"
        },
        {
          "choice": "x²+6x",
          "truth": false,
          "reason": "x²+6x多算中央正方形。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "9是小正方形面積。"
        }
      ],
      "misconceptionTarget": "只計一個交叉區塊，忘記中間項有兩份。 只計一個長方形得三 x，或把兩區面積誤寫成 x 二次方。",
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "只問兩個長方形的合計。",
      "boundaryAudit": "只問兩個長方形的合計。",
      "difficultyReason": "基礎：用幾何分割理解和的平方中間項。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s009-v001-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "594ddd5849fcde82d1443755690fa96f54a24438e07153a20d6c1d28a0cfe58c"
    },
    {
      "questionId": "u10-s009-v002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-sum-formula",
      "skillSlot": "s009",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "下列哪一個等於 (a+b)²？",
      "givenConditions": [],
      "target": "辨認和平方公式",
      "choices": [
        "a²+b²",
        "a²+ab+b²",
        "2a²+2b²",
        "a²+2ab+b²"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "由 (a+b)(a+b) 展開得 a²+2ab+b²。",
        "derivedChoice": "a²+2ab+b²",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "兩個交叉項合為 2ab。 和的平方是兩個相同二項式相乘，四個乘積為 a 二次方、ab、ab、b 二次方；兩個交叉項合併成二 ab，不能省略。",
      "steps": [
        "由 (a+b)(a+b) 展開得 a²+2ab+b²。",
        "寫成 (a+b)(a+b)。",
        "展開並合併得到 a²+2ab+b²。"
      ],
      "optionAnalysis": [
        {
          "choice": "a²+b²",
          "truth": false,
          "reason": "漏兩個交叉項。"
        },
        {
          "choice": "a²+ab+b²",
          "truth": false,
          "reason": "只保留一個交叉項。"
        },
        {
          "choice": "2a²+2b²",
          "truth": false,
          "reason": "把平方項都乘 2。"
        },
        {
          "choice": "a²+2ab+b²",
          "truth": true,
          "reason": "公式正確。"
        }
      ],
      "misconceptionTarget": "公式中間項係數錯 只平方首尾兩項而漏掉兩個交叉乘積二 ab。",
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「辨認和平方公式」且四個選項以同一表示層級作答；逐項重算後只有「a²+2ab+b²」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：辨認和平方公式，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s009-v002-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f43ee7e65d72bdc7d43361bfc4e05e0e1f8bb4ee1a13aab8f938136341497a83"
    },
    {
      "questionId": "u10-s009-v003",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-sum-formula",
      "skillSlot": "s009",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (2x+1)²。",
      "givenConditions": [],
      "target": "含係數和平方",
      "choices": [
        "2x²+4x+1",
        "4x²+4x+1",
        "4x²+2x+1",
        "4x²+1"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "(2x)²+2(2x)(1)+1²=4x²+4x+1。",
        "derivedChoice": "4x²+4x+1",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "首項係數也要平方。 將第一部分視為二 x、第二部分為一，首平方是四 x 二次方，中間兩倍乘積是四 x，尾平方是一；三項缺一不可。",
      "steps": [
        "(2x)²+2(2x)(1)+1²=4x²+4x+1。",
        "計算 (2x)²=4x² 與 2(2x)(1)=4x。",
        "加上 1²，得 4x²+4x+1。"
      ],
      "optionAnalysis": [
        {
          "choice": "2x²+4x+1",
          "truth": false,
          "reason": "首項係數未平方。"
        },
        {
          "choice": "4x²+4x+1",
          "truth": true,
          "reason": "首項係數也要平方。"
        },
        {
          "choice": "4x²+2x+1",
          "truth": false,
          "reason": "中間項漏乘 2。"
        },
        {
          "choice": "4x²+1",
          "truth": false,
          "reason": "漏中間項。"
        }
      ],
      "misconceptionTarget": "係數平方或中間項錯 把二 x 的平方寫成二 x 二次方，或漏掉中間四 x。",
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「含係數和平方」且四個選項以同一表示層級作答；逐項重算後只有「4x²+4x+1」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：含係數和平方，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s009-v003-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "dc934ffe02f1fd736e5c70333b2c010280bf5e3cbe98fb6f1e75ff7363f2746d"
    },
    {
      "questionId": "u10-s009-v004",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-sum-formula",
      "skillSlot": "s009",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "在 (3x+4)² 的展開式中，x 項係數是多少？",
      "givenConditions": [],
      "target": "由和平方讀取中間係數",
      "choices": [
        "12",
        "9",
        "24",
        "16"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "(3x+4)²=9x²+24x+16，所以 x 項係數為 24。",
        "derivedChoice": "24",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "本題只要求讀取展開後的一次項係數。 中間項由二乘三 x 乘四得到二十四 x，因此 x 項係數是二十四；九與十六分別是首項、尾項平方的係數或常數。",
      "steps": [
        "(3x+4)²=9x²+24x+16，所以 x 項係數為 24。",
        "辨認 a=3x、b=4。",
        "計算 2ab=2·3x·4=24x，讀得係數 24。"
      ],
      "optionAnalysis": [
        {
          "choice": "12",
          "truth": false,
          "reason": "只算一個交叉乘積 3×4。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "9 是二次項係數。"
        },
        {
          "choice": "24",
          "truth": true,
          "reason": "兩個交叉乘積合為 24x，正確。"
        },
        {
          "choice": "16",
          "truth": false,
          "reason": "16 是常數項。"
        }
      ],
      "misconceptionTarget": "展開後把不同項的係數混淆 只計一次交叉乘積十二 x，忘記公式中的兩倍。",
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由和平方讀取中間係數」且四個選項以同一表示層級作答；逐項重算後只有「24」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：由和平方讀取中間係數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s009-v004-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "41229d57da52f74fd09e58db97fdafd825cc4740c7352f9882ab94300d8850be"
    },
    {
      "questionId": "u10-s009-v005",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-sum-formula",
      "skillSlot": "s009",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 (x+k)²=x²+14x+49，則 k 為何？",
      "givenConditions": [],
      "target": "由展開式反求尾數",
      "choices": [
        "5",
        "6",
        "14",
        "7"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "比較中間項 2k=14 得 k=7，且 k²=49 驗證。",
        "derivedChoice": "7",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "同時用中間與常數項確認。 展開式中間項為二 k x，與十四 x 比較得 k 為七；尾項 k 二次方也等於四十九，兩個係數條件共同排除負七或十四。",
      "steps": [
        "比較中間項 2k=14 得 k=7，且 k²=49 驗證。",
        "列 2k=14 得 k=7。",
        "用 k²=49 驗證常數項。"
      ],
      "optionAnalysis": [
        {
          "choice": "5",
          "truth": false,
          "reason": "中間項為 10x。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "中間項為 12x。"
        },
        {
          "choice": "14",
          "truth": false,
          "reason": "把 2k 直接當 k。"
        },
        {
          "choice": "7",
          "truth": true,
          "reason": "k=7 正確。"
        }
      ],
      "misconceptionTarget": "反向比較公式係數錯 把十四直接當 k，沒有解二 k 等於十四並檢查尾平方。",
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由展開式反求尾數」且四個選項以同一表示層級作答；逐項重算後只有「7」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：由展開式反求尾數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s009-v005-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "629e5a0074a229cd1f2a1b8dd368ea2802968754c5f3b2ef045f7d81ce8f47d8"
    },
    {
      "questionId": "u10-s009-v006",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-sum-formula",
      "skillSlot": "s009",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "計算 102²。",
      "givenConditions": [],
      "target": "和平方數值心算",
      "choices": [
        "10404",
        "10204",
        "10004",
        "10400"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "102²=(100+2)²=10000+400+4=10404。",
        "derivedChoice": "10404",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "用基準 100 套和平方。 把一百零二視為一百加二，平方後包含一萬、兩倍乘積四百與尾平方四，合計一萬零四百零四；中間四百不可漏。",
      "steps": [
        "102²=(100+2)²=10000+400+4=10404。",
        "套用 (100+2)²。",
        "相加 10000+400+4=10404。"
      ],
      "optionAnalysis": [
        {
          "choice": "10404",
          "truth": true,
          "reason": "10404 正確。"
        },
        {
          "choice": "10204",
          "truth": false,
          "reason": "漏兩倍乘積的一部分。"
        },
        {
          "choice": "10004",
          "truth": false,
          "reason": "完全漏中間項。"
        },
        {
          "choice": "10400",
          "truth": false,
          "reason": "漏尾平方 4。"
        }
      ],
      "misconceptionTarget": "心算時漏中間項或尾平方 只平方一百與二，得到一萬零四而漏掉兩倍乘積。",
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「和平方數值心算」且四個選項以同一表示層級作答；逐項重算後只有「10404」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：和平方數值心算，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s009-v006-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "20bf0cff21410a66a97e6c5e127b890b46534246839f84816ccb7e163612af81"
    },
    {
      "questionId": "u10-s009-v007",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-sum-formula",
      "skillSlot": "s009",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (x+2)²+(x-2)²。",
      "givenConditions": [],
      "target": "兩平方和化簡",
      "choices": [
        "2x²+8x+8",
        "2x²+8",
        "x²+4",
        "2x²-8"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "兩式分別為 x²±4x+4，相加時一次項抵消，得 2x²+8。",
        "derivedChoice": "2x²+8",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "同時運用和平方與差平方。 兩個平方分別展開為 x 二次方加四 x 加四，以及 x 二次方減四 x 加四；相加時一次項互相抵消，二次項與常數各加倍。",
      "steps": [
        "兩式分別為 x²±4x+4，相加時一次項抵消，得 2x²+8。",
        "逐式展開後上下對齊同類項。",
        "合併得 2x²+8。"
      ],
      "optionAnalysis": [
        {
          "choice": "2x²+8x+8",
          "truth": false,
          "reason": "一次項誤相加。"
        },
        {
          "choice": "2x²+8",
          "truth": true,
          "reason": "2x²+8 正確。"
        },
        {
          "choice": "x²+4",
          "truth": false,
          "reason": "只算一式。"
        },
        {
          "choice": "2x²-8",
          "truth": false,
          "reason": "常數符號錯。"
        }
      ],
      "misconceptionTarget": "展開後未看到中間項抵消 把兩個一次項同號相加成八 x，沒有注意一正一負。",
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「兩平方和化簡」且四個選項以同一表示層級作答；逐項重算後只有「2x²+8」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：兩平方和化簡，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s009-v007-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0d70144efa5d3a89d19aaf9d51ee1835747cba348ed24decf82dc2022b80c5c8"
    },
    {
      "questionId": "u10-s009-v008",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-sum-formula",
      "skillSlot": "s009",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 (ax+2)²=9x²+12x+4，則 a 為何？",
      "givenConditions": [],
      "target": "由完整公式決定係數符號",
      "choices": [
        "-3",
        "2",
        "3",
        "6"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "a²=9 且 4a=12，第二條給 a=3，並符合 a²=9。",
        "derivedChoice": "3",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "須同時檢查首項與中間項，排除 a=-3。 首平方只給 a 等於正負三，還不能決定符號；中間項為四 a x，與正十二 x 比較得 a 為正三，並同時符合首平方九。",
      "steps": [
        "a²=9 且 4a=12，第二條給 a=3，並符合 a²=9。",
        "由 a²=9 得候選 ±3。",
        "用 4a=12 篩選出 a=3。"
      ],
      "optionAnalysis": [
        {
          "choice": "-3",
          "truth": false,
          "reason": "a=-3 會使中間項 -12x。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "a=2 首項與中間項皆不符。"
        },
        {
          "choice": "3",
          "truth": true,
          "reason": "a=3 正確。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "a=6 首項 36x²。"
        }
      ],
      "misconceptionTarget": "只由平方項得到正負兩解而未查中間項 只用 a 二次方等於九，誤認正負三都符合完整展開式。",
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由完整公式決定係數符號」且四個選項以同一表示層級作答；逐項重算後只有「3」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：由完整公式決定係數符號，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s009-v008-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "63311aacec4bdfe1134579ab72a9aa9155539f98edab45a36df6e45f072e3bad"
    },
    {
      "questionId": "u10-s009-v009",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-sum-formula",
      "skillSlot": "s009",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "(x+y+2)² 可把哪一個整體視為公式中的 a？",
      "givenConditions": [],
      "target": "整體代換辨認",
      "choices": [
        "x",
        "y",
        "x+y",
        "2x+2y"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "將 x+y 視為整體 A，式子為 (A+2)²。",
        "derivedChoice": "x+y",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "公式中的 a 可以是一個完整多項式。 公式允許把一個多項式視為整體，令 A 等於 x 加 y，原式就成為 A 加二的平方；展開後再把 A 換回 x 加 y。",
      "steps": [
        "將 x+y 視為整體 A，式子為 (A+2)²。",
        "設 A=x+y。",
        "改寫為 (A+2)²，故公式中的 a 是 x+y。"
      ],
      "optionAnalysis": [
        {
          "choice": "x",
          "truth": false,
          "reason": "只取 x 會漏 y。"
        },
        {
          "choice": "y",
          "truth": false,
          "reason": "只取 y 會漏 x。"
        },
        {
          "choice": "x+y",
          "truth": true,
          "reason": "x+y 正確。"
        },
        {
          "choice": "2x+2y",
          "truth": false,
          "reason": "這是展開後部分，不是原括號第一整體。"
        }
      ],
      "misconceptionTarget": "不會把多項式視為公式整體 只把 x 視為第一部分，忽略 y 與 x 同屬括號前半。",
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「整體代換辨認」且四個選項以同一表示層級作答；逐項重算後只有「x+y」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：整體代換辨認，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s009-v009-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "46e9b73a06ef77e4ed7002e303c3d96f42c46a9eb8456ef108122211e5da649c"
    },
    {
      "questionId": "u10-s009-v010",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-sum-formula",
      "skillSlot": "s009",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "正方形邊長由 x 公尺增加 4 公尺，新面積為何？",
      "givenConditions": [],
      "target": "邊長增加後的新面積",
      "choices": [
        "x²+4x+16 平方公尺",
        "x²+8x+16 平方公尺",
        "x²+16 平方公尺",
        "2x²+8x+16 平方公尺"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "新邊長 x+4，所以面積 (x+4)²=x²+8x+16。",
        "derivedChoice": "x²+8x+16 平方公尺",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "增加後整條邊平方，中間項對應兩條 4x 長方形。 每邊增加四後新邊長是 x 加四，面積為整個邊長平方；新增面積含兩個四 x 長方形共八 x，以及四乘四的小正方形十六。",
      "steps": [
        "新邊長 x+4，所以面積 (x+4)²=x²+8x+16。",
        "列新面積 (x+4)²。",
        "展開為 x²+8x+16 平方公尺。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²+4x+16 平方公尺",
          "truth": false,
          "reason": "中間項漏一倍。"
        },
        {
          "choice": "x²+8x+16 平方公尺",
          "truth": true,
          "reason": "增加後整條邊平方，中間項對應兩條 4x 長方形。"
        },
        {
          "choice": "x²+16 平方公尺",
          "truth": false,
          "reason": "漏兩個交叉區域。"
        },
        {
          "choice": "2x²+8x+16 平方公尺",
          "truth": false,
          "reason": "首面積重複。"
        }
      ],
      "misconceptionTarget": "把邊長增加量直接加到面積 只加一條四 x 區域，將中間項誤寫成四 x。",
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "邊長為公尺，面積為平方公尺。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「邊長增加後的新面積」且四個選項以同一表示層級作答；逐項重算後只有「x²+8x+16 平方公尺」成立。",
      "boundaryAudit": "x>0。",
      "difficultyReason": "素養：邊長增加後的新面積，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "邊長增加與正方形面積的幾何關係決定使用和平方，並產生平方單位。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s009-v010-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5e77c879eb2f957d229a50801c68680a6cf790f7b1c4e24c887948bcfd1a09d2"
    },
    {
      "questionId": "u10-s009-v011",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-sum-formula",
      "skillSlot": "s009",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一個 50 公分見方的正方形展示板，每邊再加長 3 公分。新面積是多少？",
      "givenConditions": [],
      "target": "具體尺寸和平方",
      "choices": [
        "2809 平方公分",
        "2509 平方公分",
        "2650 平方公分",
        "2800 平方公分"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "新邊長 53，面積 53²=(50+3)²=2500+300+9=2809。",
        "derivedChoice": "2809 平方公分",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "用和平方精確計算。 每邊由五十增加三後是五十三公分，新面積為五十三平方；用和平方計算包含二千五百、三百與九，合計二千八百零九平方公分。",
      "steps": [
        "新邊長 53，面積 53²=(50+3)²=2500+300+9=2809。",
        "寫成 (50+3)²。",
        "計算 2500+300+9=2809 平方公分。"
      ],
      "optionAnalysis": [
        {
          "choice": "2809 平方公分",
          "truth": true,
          "reason": "2809 正確。"
        },
        {
          "choice": "2509 平方公分",
          "truth": false,
          "reason": "漏大部分增加面積。"
        },
        {
          "choice": "2650 平方公分",
          "truth": false,
          "reason": "只加兩條 50×3。"
        },
        {
          "choice": "2800 平方公分",
          "truth": false,
          "reason": "漏 3²。"
        }
      ],
      "misconceptionTarget": "新增面積組成不完整 只把原面積加九，忽略沿兩邊增加的兩個長方形區域。",
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "公分×公分=平方公分。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「具體尺寸和平方」且四個選項以同一表示層級作答；逐項重算後只有「2809 平方公分」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：具體尺寸和平方，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "展示板加長每邊後需先求新邊長再求面積，不能只加 3。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s009-v011-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7ee56e139d3a5fe3eebbac57bb51bc4b99f93ec35fca454831e94f6d4184dab8"
    },
    {
      "questionId": "u10-s009-v012",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-sum-formula",
      "skillSlot": "s009",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "圖中大正方形邊長為 x+3，由 x²、兩個 3x 長方形與一個小正方形組成。小正方形面積為何？",
      "givenConditions": [],
      "target": "用面積圖理解尾平方",
      "choices": [
        "3",
        "6",
        "x²",
        "9"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "小正方形邊長為 3，所以面積 3²=9。",
        "derivedChoice": "9",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "面積分割正好對應 (x+3)²=x²+6x+9。 圖中右下小正方形的水平與垂直邊都對應分段長三，因此面積為三乘三等於九；問號只遮住未知面積，尺寸標示沒有直接洩漏答案。",
      "steps": [
        "小正方形邊長為 3，所以面積 3²=9。",
        "由圖讀出小正方形兩邊皆為 3。",
        "計算 3×3=9，並確認面積不是長度。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "把邊長當面積。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "把兩條邊相加。"
        },
        {
          "choice": "x²",
          "truth": false,
          "reason": "這是大區塊面積。"
        },
        {
          "choice": "9",
          "truth": true,
          "reason": "9 正確。"
        }
      ],
      "misconceptionTarget": "把小正方形邊長 3 誤作面積 把邊長三直接當面積三，或把兩邊相加成六。",
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "邊長以抽象長度單位表示，面積為平方單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「用面積圖理解尾平方」且四個選項以同一表示層級作答；逐項重算後只有「9」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：用面積圖理解尾平方，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "圖中的區塊位置與邊長標示是判斷小正方形面積的必要資訊。",
      "visualMode": "svg",
      "figureId": "u10-fig-square-sum-area",
      "drawingSpecId": "u10-fig-square-sum-area",
      "semanticReviewRef": "u10-s009-v012-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "142f8ce756ff2e658c67fab40361dbd00191e0725000bb1a740aa5a3e6a2dabd"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u10-s009-cr001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-sum-formula",
      "skillSlot": "s009",
      "difficulty": "standard",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (3x+2)²，並說明中間項為什麼是 12x。",
      "requiredWork": [
        "辨認 a=3x、b=2。",
        "分別算 a²、2ab、b²。"
      ],
      "standardSolution": [
        "(3x+2)²=(3x)²+2(3x)(2)+2²。",
        "=9x²+12x+4。",
        "中間項來自兩個相同交叉乘積 6x+6x。",
        "把平方寫成 (3x+2)(3x+2) 時，兩個交叉乘積都是六 x，合計正十二 x；首平方九 x²與尾平方四也同時保留，故展開式完整。"
      ],
      "alternativeMethods": [
        "可直接展開 (3x+2)(3x+2) 顯示四個乘積。"
      ],
      "reasoningSteps": [
        "(3x+2)²=(3x)²+2(3x)(2)+2²。",
        "=9x²+12x+4。",
        "中間項來自兩個相同交叉乘積 6x+6x。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "結果與中間項來源完整。"
        },
        {
          "score": 2,
          "criteria": "結果正確但未解釋 12x。"
        },
        {
          "score": 1,
          "criteria": "首尾平方正確但中間項錯。"
        },
        {
          "score": 0,
          "criteria": "寫成 9x²+4。"
        }
      ],
      "partialCreditRules": [
        "中間項解釋以 2ab 或兩個 6x 皆可。"
      ],
      "followThroughPolicy": "若只把 12x 算成 6x，其餘正確，給 1 分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫 9x²+12x+4，最高 2 分。",
      "commonErrorTargets": [
        "只平方三 x 與二而寫成 9x²+4，完全漏掉兩個交叉乘積。",
        "只算一個交叉乘積六 x，沒有乘二形成中間項十二 x。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立雙重分配確認 9x²+6x+6x+4。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e8ecd0642a2b8ec49d02f56ca724b966b7fdd077f1d06de2d029cff1d41ffb02"
    },
    {
      "questionId": "u10-s009-cr002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-sum-formula",
      "skillSlot": "s009",
      "difficulty": "advanced",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "已知 (ax+3)²=4x²+12x+9。求 a，並說明為何 a=-2 不可。",
      "requiredWork": [
        "由首項平方取得候選。",
        "用中間項判定符號。"
      ],
      "standardSolution": [
        "a²=4，所以 a=±2。",
        "中間項 2(ax)(3)=6ax 必須等於 12x，故 a=2。",
        "若 a=-2，中間項會是 -12x，不符合。",
        "首平方條件只限制 a 的絕對值為二，中間項的正號才決定 a 必須為正二；代回 a=2 後三項為 4x²、12x、9，與右式逐項相同。"
      ],
      "alternativeMethods": [
        "可直接比較 6a=12 得 a=2，再檢查 a²=4。"
      ],
      "reasoningSteps": [
        "a²=4，所以 a=±2。",
        "中間項 2(ax)(3)=6ax 必須等於 12x，故 a=2。",
        "若 a=-2，中間項會是 -12x，不符合。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "a=2 且明確排除 -2。"
        },
        {
          "score": 2,
          "criteria": "a=2 正確但未說明排除。"
        },
        {
          "score": 1,
          "criteria": "只得到 ±2。"
        },
        {
          "score": 0,
          "criteria": "給 -2 或其他值且無合理方法。"
        }
      ],
      "partialCreditRules": [
        "只比較中間項可得到正解，但需檢查首尾才滿分。"
      ],
      "followThroughPolicy": "若先寫 ±2，後續未完成，給 1 分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫 a=2，最高 2 分。",
      "commonErrorTargets": [
        "由 a²=4 直接只取 a=2，沒有說明為何負二也是首平方候選。",
        "忽略中間項符號，誤認 a=-2 也能產生正十二 x。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立比較首項、中間項與常數均吻合。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3f0f366130b18d1933da23a12ca6a95b6cc8582dc058d7cb696b6b6546c8c24e"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u10-s009-v001-review",
      "questionId": "u10-s009-v001",
      "questionContentSha256": "594ddd5849fcde82d1443755690fa96f54a24438e07153a20d6c1d28a0cfe58c",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "每個長方形面積為3x，兩個合計6x；這正是 (x+3)² 展開式的中間項。",
      "derivedAnswer": "6x",
      "storedAnswer": "6x",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回後只有「6x」成立；其他三項分別因：3x只算一個長方形。；x²+6x多算中央正方形。；9是小正方形面積。",
        "undefinedSymbol": "題幹用語均在「和的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "只問兩個長方形的合計。",
        "alternateReading": "題幹明確要求「由幾何分割辨認和的平方中間項」，沒有第二種合理所求。"
      },
      "difficultyReason": "基礎：用幾何分割理解和的平方中間項。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "u10-s009-v001 中央修訂後獨立重算：每個長方形面積為3x，兩個合計6x；這正是 (x+3)² 展開式的中間項。 四個選項逐項核對，唯一正解為「6x」；其餘選項排除理由為：3x只算一個長方形。；x²+6x多算中央正方形。；9是小正方形面積。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "b2b1da4e6c39c0cafec19f9f92ccdc072e2b295f6af8c913adf042b7626e0aa9"
    },
    {
      "reviewId": "u10-s009-v002-review",
      "questionId": "u10-s009-v002",
      "questionContentSha256": "f43ee7e65d72bdc7d43361bfc4e05e0e1f8bb4ee1a13aab8f938136341497a83",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "由 (a+b)(a+b) 展開得 a²+2ab+b²。",
      "derivedAnswer": "a²+2ab+b²",
      "storedAnswer": "a²+2ab+b²",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：a²+b²：漏兩個交叉項。；a²+ab+b²：只保留一個交叉項。；2a²+2b²：把平方項都乘 2。；a²+2ab+b²：公式正確。",
        "undefinedSymbol": "題幹用語均在「和的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「公式中間項係數錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：辨認和平方公式，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「下列哪一個等於 (a+b)²？」獨立重算：由 (a+b)(a+b) 展開得 a²+2ab+b²。 正解「a²+2ab+b²」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "ddec4733ce23d5a70142568bfef1d13810d103a3840d93c910de8a0bd77097f3"
    },
    {
      "reviewId": "u10-s009-v003-review",
      "questionId": "u10-s009-v003",
      "questionContentSha256": "dc934ffe02f1fd736e5c70333b2c010280bf5e3cbe98fb6f1e75ff7363f2746d",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(2x)²+2(2x)(1)+1²=4x²+4x+1。",
      "derivedAnswer": "4x²+4x+1",
      "storedAnswer": "4x²+4x+1",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2x²+4x+1：首項係數未平方。；4x²+4x+1：首項係數也要平方。；4x²+2x+1：中間項漏乘 2。；4x²+1：漏中間項。",
        "undefinedSymbol": "題幹用語均在「和的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「係數平方或中間項錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：含係數和平方，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 (2x+1)²。」獨立重算：(2x)²+2(2x)(1)+1²=4x²+4x+1。 正解「4x²+4x+1」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "feec58ba0e19d38ba8cdf3cf3f1418b77e0e1f6d5a361292eae53b6f21f9d80a"
    },
    {
      "reviewId": "u10-s009-v004-review",
      "questionId": "u10-s009-v004",
      "questionContentSha256": "41229d57da52f74fd09e58db97fdafd825cc4740c7352f9882ab94300d8850be",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(3x+4)²=9x²+24x+16，所以 x 項係數為 24。",
      "derivedAnswer": "24",
      "storedAnswer": "24",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：12：只算一個交叉乘積 3×4。；9：9 是二次項係數。；24：兩個交叉乘積合為 24x，正確。；16：16 是常數項。",
        "undefinedSymbol": "題幹用語均在「和的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「展開後把不同項的係數混淆」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：由和平方讀取中間係數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「在 (3x+4)² 的展開式中，x 項係數是多少？」獨立重算：(3x+4)²=9x²+24x+16，所以 x 項係數為 24。 正解「24」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "ee8f6f0df644f851691a0561a787bebbf9ccccc844f04a0da5570129e78bd89b"
    },
    {
      "reviewId": "u10-s009-v005-review",
      "questionId": "u10-s009-v005",
      "questionContentSha256": "629e5a0074a229cd1f2a1b8dd368ea2802968754c5f3b2ef045f7d81ce8f47d8",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "比較中間項 2k=14 得 k=7，且 k²=49 驗證。",
      "derivedAnswer": "7",
      "storedAnswer": "7",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：5：中間項為 10x。；6：中間項為 12x。；14：把 2k 直接當 k。；7：k=7 正確。",
        "undefinedSymbol": "題幹用語均在「和的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「反向比較公式係數錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：由展開式反求尾數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 (x+k)²=x²+14x+49，則 k 為何？」獨立重算：比較中間項 2k=14 得 k=7，且 k²=49 驗證。 正解「7」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "5ab2db0b0d12ccd21c97272685752c659d3c1c5a625fd16546c422c3565ea7cc"
    },
    {
      "reviewId": "u10-s009-v006-review",
      "questionId": "u10-s009-v006",
      "questionContentSha256": "20bf0cff21410a66a97e6c5e127b890b46534246839f84816ccb7e163612af81",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "102²=(100+2)²=10000+400+4=10404。",
      "derivedAnswer": "10404",
      "storedAnswer": "10404",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：10404：10404 正確。；10204：漏兩倍乘積的一部分。；10004：完全漏中間項。；10400：漏尾平方 4。",
        "undefinedSymbol": "題幹用語均在「和的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「心算時漏中間項或尾平方」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：和平方數值心算，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「計算 102²。」獨立重算：102²=(100+2)²=10000+400+4=10404。 正解「10404」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "4d2f788b753379ed776c0357317d7745df27e5012052d1531aa25f72e1bb9b77"
    },
    {
      "reviewId": "u10-s009-v007-review",
      "questionId": "u10-s009-v007",
      "questionContentSha256": "0d70144efa5d3a89d19aaf9d51ee1835747cba348ed24decf82dc2022b80c5c8",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "兩式分別為 x²±4x+4，相加時一次項抵消，得 2x²+8。",
      "derivedAnswer": "2x²+8",
      "storedAnswer": "2x²+8",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2x²+8x+8：一次項誤相加。；2x²+8：2x²+8 正確。；x²+4：只算一式。；2x²-8：常數符號錯。",
        "undefinedSymbol": "題幹用語均在「和的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「展開後未看到中間項抵消」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：兩平方和化簡，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 (x+2)²+(x-2)²。」獨立重算：兩式分別為 x²±4x+4，相加時一次項抵消，得 2x²+8。 正解「2x²+8」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "88228891db3acce3d62f6351f4e7cc082db7193ac4424713747b8d03a8703e41"
    },
    {
      "reviewId": "u10-s009-v008-review",
      "questionId": "u10-s009-v008",
      "questionContentSha256": "63311aacec4bdfe1134579ab72a9aa9155539f98edab45a36df6e45f072e3bad",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "a²=9 且 4a=12，第二條給 a=3，並符合 a²=9。",
      "derivedAnswer": "3",
      "storedAnswer": "3",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-3：a=-3 會使中間項 -12x。；2：a=2 首項與中間項皆不符。；3：a=3 正確。；6：a=6 首項 36x²。",
        "undefinedSymbol": "題幹用語均在「和的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只由平方項得到正負兩解而未查中間項」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：由完整公式決定係數符號，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 (ax+2)²=9x²+12x+4，則 a 為何？」獨立重算：a²=9 且 4a=12，第二條給 a=3，並符合 a²=9。 正解「3」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "699d7808227087d30a45e85f4c5287bc6d125ada4e2f3c77a4022ac9c09af4bc"
    },
    {
      "reviewId": "u10-s009-v009-review",
      "questionId": "u10-s009-v009",
      "questionContentSha256": "46e9b73a06ef77e4ed7002e303c3d96f42c46a9eb8456ef108122211e5da649c",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "將 x+y 視為整體 A，式子為 (A+2)²。",
      "derivedAnswer": "x+y",
      "storedAnswer": "x+y",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x：只取 x 會漏 y。；y：只取 y 會漏 x。；x+y：x+y 正確。；2x+2y：這是展開後部分，不是原括號第一整體。",
        "undefinedSymbol": "題幹用語均在「和的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「不會把多項式視為公式整體」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：整體代換辨認，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「(x+y+2)² 可把哪一個整體視為公式中的 a？」獨立重算：將 x+y 視為整體 A，式子為 (A+2)²。 正解「x+y」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "c04e9a421aa6f06018b5ce88c89d0f87b465f2d829e69555df3ff711d1f80f26"
    },
    {
      "reviewId": "u10-s009-v010-review",
      "questionId": "u10-s009-v010",
      "questionContentSha256": "5e77c879eb2f957d229a50801c68680a6cf790f7b1c4e24c887948bcfd1a09d2",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "新邊長 x+4，所以面積 (x+4)²=x²+8x+16。",
      "derivedAnswer": "x²+8x+16 平方公尺",
      "storedAnswer": "x²+8x+16 平方公尺",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²+4x+16 平方公尺：中間項漏一倍。；x²+8x+16 平方公尺：增加後整條邊平方，中間項對應兩條 4x 長方形。；x²+16 平方公尺：漏兩個交叉區域。；2x²+8x+16 平方公尺：首面積重複。",
        "undefinedSymbol": "題幹用語均在「和的平方公式」講義定義。",
        "unitConflict": "邊長為公尺，面積為平方公尺。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "x>0。",
        "alternateReading": "常見誤讀「把邊長增加量直接加到面積」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：邊長增加後的新面積，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "邊長增加與正方形面積的幾何關係決定使用和平方，並產生平方單位。",
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「正方形邊長由 x 公尺增加 4 公尺，新面積為何？」獨立重算：新邊長 x+4，所以面積 (x+4)²=x²+8x+16。 正解「x²+8x+16 平方公尺」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "49d1a7e46492fa3adc1a91a3183e32f8717381cf3d24a718c79c4983135d0a07"
    },
    {
      "reviewId": "u10-s009-v011-review",
      "questionId": "u10-s009-v011",
      "questionContentSha256": "7ee56e139d3a5fe3eebbac57bb51bc4b99f93ec35fca454831e94f6d4184dab8",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "新邊長 53，面積 53²=(50+3)²=2500+300+9=2809。",
      "derivedAnswer": "2809 平方公分",
      "storedAnswer": "2809 平方公分",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2809 平方公分：2809 正確。；2509 平方公分：漏大部分增加面積。；2650 平方公分：只加兩條 50×3。；2800 平方公分：漏 3²。",
        "undefinedSymbol": "題幹用語均在「和的平方公式」講義定義。",
        "unitConflict": "公分×公分=平方公分。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「新增面積組成不完整」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：具體尺寸和平方，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "展示板加長每邊後需先求新邊長再求面積，不能只加 3。",
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一個 50 公分見方的正方形展示板，每邊再加長 3 公分。新面積是多少？」獨立重算：新邊長 53，面積 53²=(50+3)²=2500+300+9=2809。 正解「2809 平方公分」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "26bf8fcae2a74bbbbdd28fb23771e0a90d9fbb483ffd6af82640a47a5702a6fd"
    },
    {
      "reviewId": "u10-s009-v012-review",
      "questionId": "u10-s009-v012",
      "questionContentSha256": "142f8ce756ff2e658c67fab40361dbd00191e0725000bb1a740aa5a3e6a2dabd",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "小正方形邊長為 3，所以面積 3²=9。",
      "derivedAnswer": "9",
      "storedAnswer": "9",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：3：把邊長當面積。；6：把兩條邊相加。；x²：這是大區塊面積。；9：9 正確。",
        "undefinedSymbol": "題幹用語均在「和的平方公式」講義定義。",
        "unitConflict": "邊長以抽象長度單位表示，面積為平方單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「把小正方形邊長 3 誤作面積」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：用面積圖理解尾平方，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "圖中的區塊位置與邊長標示是判斷小正方形面積的必要資訊。",
      "prerequisiteCheck": "使用先備技能：binomial-multiply-basic；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「圖中大正方形邊長為 x+3，由 x²、兩個 3x 長方形與一個小正方形組成。小正方形面積為何？」獨立重算：小正方形邊長為 3，所以面積 3²=9。 正解「9」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "8803818886978f0072f4b6bad8677f054fd16f5e40f778f00a0fdabd56df0eab"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u10-fig-square-sum-area",
      "unitId": "u10",
      "skillId": "square-sum-formula",
      "skillSlot": "s009",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "canvas": {
        "width": "360",
        "height": "360"
      },
      "viewBox": "0 0 360 360",
      "drawingSpecification": "一個大正方形以水平與垂直分割線分成一個 x 乘 x 區域、兩個寬 3 的長方形，以及右下角邊長 3 的小正方形。",
      "exactCoordinates": [
        "outer rect (40,40,280,280)",
        "vertical split x=260",
        "horizontal split y=260"
      ],
      "visibleLineRules": "外框使用 3px 實線；內部分割或內框依圖使用 2px 實線或虛線。",
      "hiddenLineRules": "本單元平面圖無隱藏線。",
      "labelsAndPositions": [
        "top segments x and 3",
        "left segments x and 3",
        "areas x², 3x, 3x, ?"
      ],
      "tickMarks": "無刻度；尺寸以文字標示。",
      "units": "依圖標示公尺，或使用抽象長度單位。",
      "arrowsAndSymbols": "尺寸線端點使用簡單箭頭；未使用角度符號。",
      "toScale": false,
      "visualInferenceWarning": "圖形不按比例，禁止由視覺長短推測代數值。",
      "altText": "邊長 x+3 的正方形分成 x²、兩個 3x 區域和一個未知小正方形。",
      "svgTitle": "邊長 x+3 的正方形面積分割",
      "svgDesc": "一個大正方形以水平與垂直分割線分成一個 x 乘 x 區域、兩個寬 3 的長方形，以及右下角邊長 3 的小正方形。",
      "mobileReadabilityReview": "在 360px 寬度下主要標籤字級至少 18px，線條與文字不重疊。",
      "answerLeakageReview": "圖僅提供題幹已知尺寸或未知區域，不直接標示正確選項或完整答案。",
      "geometryTokenAssertions": [
        "SVG 含唯一 title 與 desc。",
        "viewBox 與畫布尺寸已宣告。",
        "所有文字標籤位於 viewBox 內。",
        "外框閉合，分割線端點落在外框。"
      ],
      "questionReferences": [
        "u10-s009-v012"
      ],
      "svgPath": "figures/u10/u10-fig-square-sum-area.svg",
      "contentSha256": "2ec3aebf629c5e9af16c35bc61d61cd21704f5d56415e3bd15a82e34115c90c8"
    }
  ]
};
