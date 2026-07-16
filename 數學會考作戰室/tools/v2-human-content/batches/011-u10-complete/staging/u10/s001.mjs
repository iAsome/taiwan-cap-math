// Deterministically emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u10-s001-lecture-r1",
    "unitId": "u10",
    "numericUnitId": 10,
    "topicId": "u10-concepts",
    "skillId": "polynomial-terms",
    "lockedTitle": "多項式的項與係數",
    "title": "多項式的項與係數：先看加減分界再讀符號",
    "audience": "臺灣國中零基礎至會考滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能以加號或減號為分界正確指出每一項。",
      "能辨認未知數項的係數、常數項與省略的 1 或 -1。",
      "能判斷含負整數指數、未知數在分母或根號內的式子不是本單元的一元多項式。"
    ],
    "prerequisites": [],
    "prerequisiteBridge": "本技能為 U10 起點，使用既有整數、分數、指數與一元式基礎。",
    "glossary": [
      {
        "term": "多項式",
        "definition": "由有限個單項式以加減連結而成，未知數的指數為非負整數。"
      },
      {
        "term": "項",
        "definition": "以最外層加號或減號分開後的每一部分，符號屬於該項。"
      },
      {
        "term": "係數",
        "definition": "某項中乘在文字部分前的數。"
      },
      {
        "term": "常數項",
        "definition": "不含未知數的項。"
      }
    ],
    "notation": [
      {
        "symbol": "3x²",
        "meaning": "係數為 3，文字部分為 x²。"
      },
      {
        "symbol": "-x",
        "meaning": "可寫成 -1x，所以係數為 -1。"
      },
      {
        "symbol": "7",
        "meaning": "常數項，也可視為 7x⁰。"
      }
    ],
    "conceptNarrative": [
      "讀一個多項式時，先把減法改看成「加上一個負項」。例如 4x²-3x+5 的三項是 4x²、-3x、5。",
      "項的正負號不能丟失；-6x 的係數是 -6，不是 6。",
      "x 前未寫數字代表係數 1，-x 代表係數 -1。",
      "本單元的一元多項式要求 x 的指數是 0、1、2 等非負整數；2/x、√x、x⁻¹ 不符合。",
      "完整判讀多項式時，可先把每個減法改寫成加上負項，再逐項標記數字係數、文字部分與指數；讀係數時包含正負號，讀項時保留完整文字部分，讀常數項時則確認完全不含未知數。若題目先給括號或不同排列，必須先化簡或搬移完整項，但不得改變項的符號；最後再檢查所有未知數指數都是非負整數，排除分母、根號與負次方的情形。"
    ],
    "formalDefinitions": [
      {
        "name": "一元多項式",
        "statement": "可寫成 aₙxⁿ+…+a₁x+a₀，其中 n 為非負整數，各係數為數。"
      },
      {
        "name": "項的判讀",
        "statement": "以最外層加減號分界，負號隨下一項。"
      }
    ],
    "formulas": [
      {
        "formula": "aₙxⁿ",
        "conditions": [
          "aₙ 為係數，n 為非負整數"
        ],
        "meaning": "描述一般單項式。"
      }
    ],
    "nonApplicableCases": [
      "不能把乘號內部拆成不同項，例如 3x² 是一項。",
      "括號尚未展開時，應先依題意決定是否需要化簡再讀項。",
      "不能把指數當係數。",
      "未知數在分母時不屬於本單元的一元多項式。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "找最外層的加減號並切分。",
        "check": "完成此步後，確認內容仍符合「辨認項、係數、常數項與多項式的基本限制」。"
      },
      {
        "step": 2,
        "instruction": "把每個減號保留在後一項前。",
        "check": "完成此步後，確認內容仍符合「辨認項、係數、常數項與多項式的基本限制」。"
      },
      {
        "step": 3,
        "instruction": "在每項中分出數字係數與文字部分。",
        "check": "完成此步後，確認內容仍符合「辨認項、係數、常數項與多項式的基本限制」。"
      },
      {
        "step": 4,
        "instruction": "確認未知數指數皆為非負整數。",
        "check": "完成此步後，確認內容仍符合「辨認項、係數、常數項與多項式的基本限制」。"
      },
      {
        "step": 5,
        "instruction": "依題目指出指定項、係數或常數項。",
        "check": "完成此步後，確認內容仍符合「辨認項、係數、常數項與多項式的基本限制」。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "指出 5x²-2x+9 的各項。",
        "solutionSteps": [
          "把減號留給下一項。",
          "依序讀出三項。"
        ],
        "answer": "5x²、-2x、9。",
        "why": "項是由最外層加減號切出的完整部分，負號必須跟著後面的文字項一起移動。把原式重寫成 5x²+(-2x)+9，可直接看出三項，也能避免把係數二或常數九誤算成額外項。"
      },
      {
        "exampleId": "L2",
        "prompt": "求 -x³+4 的 x³ 項係數。",
        "solutionSteps": [
          "-x³=-1x³。"
        ],
        "answer": "-1。",
        "why": "x³ 前沒有顯示正數時，省略的是一；原項前另有負號，所以完整數字因數是負一。將答案代回成 (-1)x³，正好恢復原來的 -x³，且不會把指數三混作係數。"
      },
      {
        "exampleId": "L3",
        "prompt": "判斷 3x²+2/x-1 是否為 x 的多項式。",
        "solutionSteps": [
          "2/x=2x⁻¹，指數 -1 不是非負整數。"
        ],
        "answer": "不是。",
        "why": "一元多項式要求未知數每一個指數都是非負整數；2/x 等同 2x⁻¹，已出現負一次方。即使其餘兩項合格，只要其中一項違反限制，整個式子就不能稱為本單元的一元多項式。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把 -4x 的係數寫成 4",
        "why": "忽略負號是該項的一部分",
        "correction": "改寫成 (-4)x。"
      },
      {
        "mistake": "把 x² 的係數寫成 2",
        "why": "混淆指數與係數",
        "correction": "係數是省略的 1，2 是指數。"
      },
      {
        "mistake": "把 3x+5 說成三項",
        "why": "把係數 3 當作獨立項",
        "correction": "項由最外層加減分界，只有 3x 和 5。"
      },
      {
        "mistake": "只看式子有幾個數字就判斷項數",
        "why": "數字可能是係數、指數或常數，並非每個數字都形成一項",
        "correction": "只用最外層加減號切分，並讓負號跟著後一項。"
      }
    ],
    "selfCheck": [
      "我是否能以加號或減號為分界正確指出每一項？",
      "我是否能辨認未知數項的係數、常數項與省略的 1 或 -1？",
      "我是否能判斷含負整數指數、未知數在分母或根號內的式子不是本單元的一元多項式？",
      "我是否檢查了負號、括號、指數與題目所問的量？"
    ],
    "summary": [
      "項以最外層加減分界，符號要跟著項。",
      "係數是乘在文字部分前的數。",
      "常數項不含未知數。",
      "一元多項式的未知數指數必須是非負整數。"
    ],
    "connections": {
      "previous": "U10 起點，銜接先前代數記號與指數運算。",
      "next": [
        "下一節把數值代入多項式，括號與負號會成為重點。"
      ]
    },
    "figureReferences": [],
    "accessibility": {
      "figureAltTextsRequired": false,
      "textOnlyPath": "所有公式與圖形關係均在正文以文字完整說明。"
    },
    "practiceLinks": {
      "mcQuestionIds": [
        "u10-s001-v001",
        "u10-s001-v002",
        "u10-s001-v003",
        "u10-s001-v004",
        "u10-s001-v005",
        "u10-s001-v006",
        "u10-s001-v007",
        "u10-s001-v008",
        "u10-s001-v009",
        "u10-s001-v010",
        "u10-s001-v011",
        "u10-s001-v012"
      ],
      "constructedResponseIds": [
        "u10-s001-cr001",
        "u10-s001-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP only",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段重讀「多項式的項與係數：先看加減分界再讀符號」：定義、3 個例題、錯誤推理與下一技能銜接均針對 polynomial-terms；另逐項檢查負號、係數、指數、括號和條件。",
      "reviewVersion": "human-lecture-review-u10-r1",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "80a1945bd02ac3331ffc84b396558fffee76d9b88464c58540126b60ada56d1d"
  },
  "mcQuestions": [
    {
      "questionId": "u10-s001-v001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-terms",
      "skillSlot": "s001",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "在單項式 -7x³ 中，x³ 的係數是多少？",
      "givenConditions": [],
      "target": "辨認負係數",
      "choices": [
        "-7",
        "7",
        "3",
        "-3"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "把 -7x³ 寫成 (-7)·x³，乘在文字部分前的數是 -7。",
        "derivedChoice": "-7",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "係數包含正負號，因此答案為 -7。 把原式視為負七乘以 x 的三次方，可知乘在文字部分前的完整數值是負七；三只表示 x 自乘的次數，不能取代係數。",
      "steps": [
        "把 -7x³ 寫成 (-7)·x³，乘在文字部分前的數是 -7。",
        "把項改寫成 (-7)·x³，讓數字因數與文字部分清楚分開。",
        "核對原式的負號仍保留在數字因數上，因此選 -7。"
      ],
      "optionAnalysis": [
        {
          "choice": "-7",
          "truth": true,
          "reason": "正確辨認係數且保留負號。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "忽略原項的負號。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "把指數 3 誤當係數。"
        },
        {
          "choice": "-3",
          "truth": false,
          "reason": "同時混淆負號與指數。"
        }
      ],
      "misconceptionTarget": "負號未隨項保留 只讀數字的絕對值而漏掉負號，或把右上角的指數三誤認為係數。",
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「辨認負係數」且四個選項以同一表示層級作答；逐項重算後只有「-7」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：辨認負係數，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s001-v001-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "884dfa4a5e0485488a9e20b2e92406f5e49f071ecbd833ff6d2b20ab17a1299b"
    },
    {
      "questionId": "u10-s001-v002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-terms",
      "skillSlot": "s001",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "多項式 4x²-3x+9 的常數項是哪一個？",
      "givenConditions": [],
      "target": "辨認常數項",
      "choices": [
        "-3",
        "9",
        "4x²",
        "-3x"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "常數項是不含 x 的項；四項資訊中只有 9 不含 x。",
        "derivedChoice": "9",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "以是否含未知數判斷，常數項為 9。 先以最外層加減號分出 4x²、-3x、9 三項，再逐項檢查是否含 x；只有 9 完全不含未知數，所以它才是常數項。",
      "steps": [
        "常數項是不含 x 的項。",
        "四項資訊中只有 9 不含 x。",
        "回到原式確認 9 本身就是一個完整項，且沒有附帶任何未知數。"
      ],
      "optionAnalysis": [
        {
          "choice": "-3",
          "truth": false,
          "reason": "-3 是 x 項的係數，不是一項。"
        },
        {
          "choice": "9",
          "truth": true,
          "reason": "9 不含未知數，正確。"
        },
        {
          "choice": "4x²",
          "truth": false,
          "reason": "4x² 含 x。"
        },
        {
          "choice": "-3x",
          "truth": false,
          "reason": "-3x 含 x。"
        }
      ],
      "misconceptionTarget": "把係數當成常數項 把一次項的係數 -3 單獨抽出，誤當成原多項式中的常數項。",
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「辨認常數項」且四個選項以同一表示層級作答；逐項重算後只有「9」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：辨認常數項，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s001-v002-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2e99983cb871720160a2dede591234a1228766d1dbd1cb50c5adf0b7255e5baf"
    },
    {
      "questionId": "u10-s001-v003",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-terms",
      "skillSlot": "s001",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "多項式 2a²-5a+1 共有幾項？",
      "givenConditions": [],
      "target": "計算項數",
      "choices": [
        "1 項",
        "2 項",
        "3 項",
        "5 項"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "以最外層加減分界，三項為 2a²、-5a、1。",
        "derivedChoice": "3 項",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "負號屬於第二項，因此共有 3 項。 項數由最外層的加減分界決定，不由係數大小決定；2a²、-5a 與常數 1 各是一項，所以一共是三項。",
      "steps": [
        "以最外層加減分界，三項為 2a²、-5a、1。",
        "把減法改讀成加上負項，得到 2a²+(-5a)+1。",
        "逐一點算這三個完整部分，確認常數 1 也必須列入。"
      ],
      "optionAnalysis": [
        {
          "choice": "1 項",
          "truth": false,
          "reason": "漏看兩個加減分界。"
        },
        {
          "choice": "2 項",
          "truth": false,
          "reason": "只計含 a 的兩項，漏常數。"
        },
        {
          "choice": "3 項",
          "truth": true,
          "reason": "三項完整，正確。"
        },
        {
          "choice": "5 項",
          "truth": false,
          "reason": "把係數 5 當成項數。"
        }
      ],
      "misconceptionTarget": "漏算常數項或把係數當項數 只計算含 a 的兩項而漏掉常數 1，或看到係數 5 就誤選五項。",
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「計算項數」且四個選項以同一表示層級作答；逐項重算後只有「3 項」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：計算項數，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s001-v003-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0691f965db660e8a619c2e18f3207c4eb8f4362f9de76ec02152b98112bd9496"
    },
    {
      "questionId": "u10-s001-v004",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-terms",
      "skillSlot": "s001",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "在 -x³+6x²-4 中，二次項是哪一個？",
      "givenConditions": [],
      "target": "辨認指定次項",
      "choices": [
        "-x³",
        "6",
        "-4",
        "6x²"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "二次項的文字部分必須是 x²，所以為 6x²。",
        "derivedChoice": "6x²",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "依指數 2 選出完整項 6x²。 二次項是未知數指數恰為二的整個項，須連同係數與符號一起寫；在原式中只有 6x² 符合，單寫 6 並不是一個項。",
      "steps": [
        "二次項的文字部分必須是 x²，所以為 6x²。",
        "比較各項的 x 指數：-x³ 為三次、6x² 為二次、-4 為常數。",
        "題目問完整的二次項，因此保留係數與 x²，寫成 6x²。"
      ],
      "optionAnalysis": [
        {
          "choice": "-x³",
          "truth": false,
          "reason": "這是三次項。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "6 只是係數，不是完整項。"
        },
        {
          "choice": "-4",
          "truth": false,
          "reason": "這是常數項。"
        },
        {
          "choice": "6x²",
          "truth": true,
          "reason": "含 x² 的完整項，正確。"
        }
      ],
      "misconceptionTarget": "只寫係數而非完整項 找到二次項後只抄它的係數 6，沒有保留文字部分 x²。",
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「辨認指定次項」且四個選項以同一表示層級作答；逐項重算後只有「6x²」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：辨認指定次項，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s001-v004-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "478eb8c9172afe0f8ea6d6cf7436ab2a0593c4c78ead1f1b2b01ef2fae541f22"
    },
    {
      "questionId": "u10-s001-v005",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-terms",
      "skillSlot": "s001",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "將 8-3x+2x² 按降冪排列後，x 項係數為何？",
      "givenConditions": [],
      "target": "讀取重排後係數",
      "choices": [
        "3",
        "-3",
        "2",
        "8"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "降冪排列為 2x²-3x+8，x 項是 -3x，係數 -3。",
        "derivedChoice": "-3",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "重新排列不改變任何項的符號。 降冪排列只改變各項的位置，不會改變原來的正負號；重排成 2x²-3x+8 後，一次項仍是 -3x，故係數為 -3。",
      "steps": [
        "降冪排列為 2x²-3x+8，x 項是 -3x，係數 -3。",
        "依指數由大到小搬移完整項，得到 2x²+(-3x)+8。",
        "從 -3x 取出數字因數並保留符號，得到係數 -3。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "漏掉負號。"
        },
        {
          "choice": "-3",
          "truth": true,
          "reason": "-3 正確。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "2 是二次項係數。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "8 是常數項。"
        }
      ],
      "misconceptionTarget": "排列時改變項的符號 移動 -3x 時把負號留在原位置，錯把一次項係數讀成正三。",
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「讀取重排後係數」且四個選項以同一表示層級作答；逐項重算後只有「-3」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：讀取重排後係數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s001-v005-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d0c0bf76c5f541474ddc5e01b4438d8e97d6db5a161f7d8b5e8aa04187558ebd"
    },
    {
      "questionId": "u10-s001-v006",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-terms",
      "skillSlot": "s001",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "下列哪一個是 x 的多項式？",
      "givenConditions": [],
      "target": "判斷多項式資格",
      "choices": [
        "2/x+1",
        "√x+2",
        "3x²-x+5",
        "x⁻¹+4"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "3x²-x+5 的 x 指數為 2、1、0，皆為非負整數。",
        "derivedChoice": "3x²-x+5",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "一元多項式不得有 x 在分母、根號內或負整數指數。 逐一檢查未知數的位置與指數：分母中的 x 等同負一次方，根號中的 x 等同二分之一次方，兩者都不合規；只有第三式各指數皆為非負整數。",
      "steps": [
        "3x²-x+5 的 x 指數為 2、1、0，皆為非負整數。",
        "把各選項中的 x 改寫成冪次形式，逐項列出其指數。",
        "排除含負指數或分數指數者，只留下指數為 2、1、0 的 3x²-x+5。"
      ],
      "optionAnalysis": [
        {
          "choice": "2/x+1",
          "truth": false,
          "reason": "含 x⁻¹，不符合。"
        },
        {
          "choice": "√x+2",
          "truth": false,
          "reason": "含 √x，不符合。"
        },
        {
          "choice": "3x²-x+5",
          "truth": true,
          "reason": "各指數皆為非負整數，正確。"
        },
        {
          "choice": "x⁻¹+4",
          "truth": false,
          "reason": "含負指數，不符合。"
        }
      ],
      "misconceptionTarget": "只看式子有加減就認為是多項式 只因式子含有加減號就稱為多項式，沒有檢查未知數是否在分母、根號或負次方。",
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「判斷多項式資格」且四個選項以同一表示層級作答；逐項重算後只有「3x²-x+5」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：判斷多項式資格，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s001-v006-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3c1d02a8210e149999d3fe16464f270316b7388b48b6332b98e351ad9dcd99d5"
    },
    {
      "questionId": "u10-s001-v007",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-terms",
      "skillSlot": "s001",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 (m-2)x²+3x-1 的二次項係數是 5，則 m 為何？",
      "givenConditions": [],
      "target": "由係數條件求參數",
      "choices": [
        "3",
        "5",
        "6",
        "7"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "二次項係數為 m-2，令 m-2=5，得 m=7。",
        "derivedChoice": "7",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "先讀出係數式，再解一元一次等式。 x² 前的整體因數是 m-2，而不是單獨的 m；依題意列 m-2=5，等式兩邊同加 2 得 m=7，代回後係數確為 5。",
      "steps": [
        "二次項係數為 m-2，令 m-2=5，得 m=7。",
        "由 (m-2)x² 讀出二次項係數為整個 m-2。",
        "解 m-2=5 得 m=7，再代回算 7-2=5 核對。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "使係數為 1。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "把 m 直接當係數。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "計算 m-2=4。"
        },
        {
          "choice": "7",
          "truth": true,
          "reason": "m=7 時係數 5，正確。"
        }
      ],
      "misconceptionTarget": "忽略係數是 m-2 把參數 m 直接視為二次項係數，忽略括號內還要減去二。",
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由係數條件求參數」且四個選項以同一表示層級作答；逐項重算後只有「7」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：由係數條件求參數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s001-v007-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "86422682e0fa112e9965b015fb51b8d659325e09087d647ad46ef79f4aea3d8d"
    },
    {
      "questionId": "u10-s001-v008",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-terms",
      "skillSlot": "s001",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "將 3x²-(2x-5) 去括號後共有幾個非零項？",
      "givenConditions": [],
      "target": "先化簡再辨認項",
      "choices": [
        "3 個",
        "2 個",
        "4 個",
        "5 個"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "去括號得 3x²-2x+5，三項次方不同，不能再合併。",
        "derivedChoice": "3 個",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "負號逐項分配後共有 3 個非零項。 括號前是減號，須把括號內兩項都變號，故原式成為 3x²-2x+5；三項的次數互不相同且係數皆非零，不能再合併。",
      "steps": [
        "去括號得 3x²-2x+5，三項次方不同，不能再合併。",
        "將 -(2x-5) 分配為 -2x+5，完整去除括號。",
        "依最外層加減分界列出 3x²、-2x、5，點算為三個非零項。"
      ],
      "optionAnalysis": [
        {
          "choice": "3 個",
          "truth": true,
          "reason": "三項完整，正確。"
        },
        {
          "choice": "2 個",
          "truth": false,
          "reason": "漏掉常數項。"
        },
        {
          "choice": "4 個",
          "truth": false,
          "reason": "把括號或係數視為額外項。"
        },
        {
          "choice": "5 個",
          "truth": false,
          "reason": "把數字 5 當項數。"
        }
      ],
      "misconceptionTarget": "去括號漏變號或誤算項數 只把 2x 變成 -2x 卻沒有把 -5 變成 +5，或把括號內數字誤算成額外項。",
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「先化簡再辨認項」且四個選項以同一表示層級作答；逐項重算後只有「3 個」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：先化簡再辨認項，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s001-v008-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c3f33d5f459e6724c6df2f9ce585ee989ee8c6cdf6b2f8454fa069c6eaac0587"
    },
    {
      "questionId": "u10-s001-v009",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-terms",
      "skillSlot": "s001",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "多項式 ax²+bx+c 中沒有 x 項，且常數項為 -4。下列條件何者正確？",
      "givenConditions": [],
      "target": "由缺項判斷係數",
      "choices": [
        "a=0，b=-4",
        "a=-4，c=0",
        "b=0，c=-4",
        "b=-4，c=0"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "沒有 x 項表示 b=0；常數項就是 c，所以 c=-4。",
        "derivedChoice": "b=0，c=-4",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "依各係數所對應的次方判讀。 在標準式 ax²+bx+c 中，b 專門乘在 x 前，缺少 x 項就表示 b=0；c 是不含 x 的常數項，所以題設同時給出 c=-4。兩項條件缺一不可。",
      "steps": [
        "沒有 x 項表示 b=0。",
        "常數項就是 c，所以 c=-4。",
        "把 a、b、c 分別對應到二次項、一次項與常數項。",
        "套用缺少一次項及常數為 -4 兩條條件，得到 b=0、c=-4。"
      ],
      "optionAnalysis": [
        {
          "choice": "a=0，b=-4",
          "truth": false,
          "reason": "這會消去二次項且 x 項仍為 -4x。"
        },
        {
          "choice": "a=-4，c=0",
          "truth": false,
          "reason": "常數項變 0。"
        },
        {
          "choice": "b=0，c=-4",
          "truth": true,
          "reason": "兩條件都符合，正確。"
        },
        {
          "choice": "b=-4，c=0",
          "truth": false,
          "reason": "x 項為 -4x 且常數 0。"
        }
      ],
      "misconceptionTarget": "把 a、b、c 對應次方弄反 沒有按 x²、x、常數的順序對應 a、b、c，將缺項條件放到錯誤係數。",
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由缺項判斷係數」且四個選項以同一表示層級作答；逐項重算後只有「b=0，c=-4」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：由缺項判斷係數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s001-v009-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a45c9e5285d666b3c33326330db7bd537fa8a583605668345d14a22e04fd8e5b"
    },
    {
      "questionId": "u10-s001-v010",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-terms",
      "skillSlot": "s001",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "計程車費用模型 C=85+5x，其中 x 是行駛公里數。係數 5 的意義是什麼？",
      "givenConditions": [],
      "target": "解釋一次項係數",
      "choices": [
        "起跳價 5 元",
        "最多行駛 5 公里",
        "總車資固定 5 元",
        "每公里增加 5 元"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "當 x 增加 1，5x 增加 5，而常數 85 不變。",
        "derivedChoice": "每公里增加 5 元",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "係數 5 表示每增加 1 公里，車資增加 5 元。 比較行駛 x 與 x+1 公里時的車資，差值為 [85+5(x+1)]-(85+5x)=5，因此 5 的情境單位是每公里五元，並非固定收費。",
      "steps": [
        "當 x 增加 1，5x 增加 5，而常數 85 不變。",
        "先辨認常數 85 是不隨公里數改變的起跳價。",
        "令公里數增加 1，比較兩次模型值，確認車資增加 5 元。"
      ],
      "optionAnalysis": [
        {
          "choice": "起跳價 5 元",
          "truth": false,
          "reason": "起跳價是常數 85。"
        },
        {
          "choice": "最多行駛 5 公里",
          "truth": false,
          "reason": "係數不表示上限。"
        },
        {
          "choice": "總車資固定 5 元",
          "truth": false,
          "reason": "總車資隨 x 改變。"
        },
        {
          "choice": "每公里增加 5 元",
          "truth": true,
          "reason": "符合變動率意義。"
        }
      ],
      "misconceptionTarget": "把係數和常數的情境意義互換 把變動率 5 與固定起跳價 85 對調，或把係數誤解為里程上限。",
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "5 的單位是元/公里；85 的單位是元。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「解釋一次項係數」且四個選項以同一表示層級作答；逐項重算後只有「每公里增加 5 元」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：解釋一次項係數，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "若刪除計程車情境，就無法判斷 5 的單位與其「每公里」意義。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s001-v010-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7550e67bc848012e4abde2a020ac1a96d6642b730b3e855e194c49a1390fbf83"
    },
    {
      "questionId": "u10-s001-v011",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-terms",
      "skillSlot": "s001",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一塊材料的面積表示為 A=3x²+7x（平方公分）。其中一次項的係數是多少？",
      "givenConditions": [],
      "target": "在有單位模型中讀係數",
      "choices": [
        "7",
        "3",
        "x",
        "10"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "一次項是 7x，其係數為 7。",
        "derivedChoice": "7",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "平方公分是整個 A 的單位，不改變代數係數判讀。 先依次方辨認一次項為 7x，再取乘在 x 前的數字 7；3 屬於二次項 3x²，整個面積的平方公分單位不會改變代數上的係數。",
      "steps": [
        "一次項是 7x，其係數為 7。",
        "按 x 的指數分類，鎖定指數為 1 的完整項 7x。",
        "從 7x 分離數字因數 7，並確認題目只問係數而非面積值。"
      ],
      "optionAnalysis": [
        {
          "choice": "7",
          "truth": true,
          "reason": "7 正確。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "3 是二次項係數。"
        },
        {
          "choice": "x",
          "truth": false,
          "reason": "x 是未知數。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "把兩係數相加，沒有依題意。"
        }
      ],
      "misconceptionTarget": "把所有係數相加 把二次項係數 3 與一次項係數 7 相加，或把未知數 x 本身當成係數。",
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "A 的單位為平方公分；係數數值依指定變數單位解讀。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「在有單位模型中讀係數」且四個選項以同一表示層級作答；逐項重算後只有「7」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：在有單位模型中讀係數，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "面積模型要求區分二次項與一次項，並維持平方公分的整體單位。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s001-v011-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0bd421f5a2352373f554246536c2dd936590548cde73a2f4ede0c3bafeccdcef"
    },
    {
      "questionId": "u10-s001-v012",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-terms",
      "skillSlot": "s001",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "倉庫庫存以 P=120-8d 表示，d 為經過天數。常數項 120 代表什麼？",
      "givenConditions": [],
      "target": "解釋常數項",
      "choices": [
        "每天賣出 120 件",
        "開始時有 120 件",
        "8 天後有 120 件",
        "最多只能賣 120 天"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "當 d=0 時 P=120，所以常數項代表起始庫存。",
        "derivedChoice": "開始時有 120 件",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "一次模型的常數項是變數為 0 時的初始量。 常數項可用變數取零來解讀：尚未經過任何一天時 d=0，模型給 P=120；因此 120 的單位是件，代表開始時的庫存量。",
      "steps": [
        "當 d=0 時 P=120，所以常數項代表起始庫存。",
        "令經過天數 d=0，代入模型得到 P=120-8×0。",
        "化簡得 P=120 件，因此選擇開始時有 120 件。"
      ],
      "optionAnalysis": [
        {
          "choice": "每天賣出 120 件",
          "truth": false,
          "reason": "120 不是每日變動量。"
        },
        {
          "choice": "開始時有 120 件",
          "truth": true,
          "reason": "d=0 時的庫存，正確。"
        },
        {
          "choice": "8 天後有 120 件",
          "truth": false,
          "reason": "沒有此條件。"
        },
        {
          "choice": "最多只能賣 120 天",
          "truth": false,
          "reason": "120 是件數，不是天數上限。"
        }
      ],
      "misconceptionTarget": "未用 d=0 解釋常數項 把常數 120 當作每日變化量、天數上限，沒有以 d=0 檢查其初始量意義。",
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "P 的單位是件，d 的單位是天；-8 表示每天減少 8 件。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「解釋常數項」且四個選項以同一表示層級作答；逐項重算後只有「開始時有 120 件」成立。",
      "boundaryAudit": "情境中 d 應為非負整數，且模型只在庫存不為負的期間有效。",
      "difficultyReason": "素養：解釋常數項，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "庫存情境使常數項具有「起始量」而非單純數字的意義。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s001-v012-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "55e223c3257f69f9bb152c93a2054a730eac624c7a1d10cfc8ffb6c39c6fcfac"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u10-s001-cr001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-terms",
      "skillSlot": "s001",
      "difficulty": "standard",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "對多項式 P(x)=-3x⁴+x²-7x+5，列出各項，並指出四次項係數、一次項係數與常數項。",
      "requiredWork": [
        "保留每項正負號。",
        "分別指出指定係數與常數項。"
      ],
      "standardSolution": [
        "各項為 -3x⁴、x²、-7x、5。",
        "四次項係數 -3，一次項係數 -7，常數項 5。",
        "以最外層加減號分界時，x² 前雖未寫數字仍有係數 1；將結果代回原式可重組成 (-3)x⁴+1x²+(-7)x+5，與題目完全一致，故三個指定值不會漏掉符號。"
      ],
      "alternativeMethods": [
        "可先改寫為 (-3)x⁴+(1)x²+(-7)x+5，再讀取。"
      ],
      "reasoningSteps": [
        "各項為 -3x⁴、x²、-7x、5。",
        "四次項係數 -3，一次項係數 -7，常數項 5。",
        "把列出的四項依原順序重新相加核對，確認四次項與一次項的負號及常數 5 均未遺失。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "四項與三個指定值全對。"
        },
        {
          "score": 2,
          "criteria": "只錯或漏一個符號/指定值。"
        },
        {
          "score": 1,
          "criteria": "能正確分出至少三項但係數判讀不完整。"
        },
        {
          "score": 0,
          "criteria": "把指數當係數或無有效作答。"
        }
      ],
      "partialCreditRules": [
        "項的順序可不同；-3x⁴ 的負號若只在項列表漏寫但後續係數寫 -3，扣 1 分。"
      ],
      "followThroughPolicy": "若早期漏一項，後續對其餘項的係數判讀正確可依完成部分給分。",
      "unitAndNotationRules": "不涉及單位；係數必須連同正負號。",
      "answerOnlyPolicy": "只寫「-3、-7、5」但未列各項，最高 2 分。",
      "commonErrorTargets": [
        "把 -3x⁴ 或 -7x 的負號留在分隔符號上，將係數錯寫成正 3 或正 7。",
        "把 x² 右上角的 2 當成係數，或因其數字係數省略而漏列這一項。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立以最外層加減分界重讀，答案唯一。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "13690ca9b73324a27828a7bcf6c5d88cd4aa9f74d5cddeea797befd7d69be44d"
    },
    {
      "questionId": "u10-s001-cr002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-terms",
      "skillSlot": "s001",
      "difficulty": "advanced",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "說明為什麼 2/x+x²-1 不是 x 的多項式，而 2+x²-1 是。",
      "requiredWork": [
        "把 2/x 改寫成冪形式。",
        "指出多項式對指數的限制。",
        "比較第二式。"
      ],
      "standardSolution": [
        "2/x=2x⁻¹，x 的指數 -1 不是非負整數，因此第一式不是本單元的一元多項式。",
        "第二式化簡為 x²+1，各 x 指數為 2、0，皆為非負整數，所以是多項式。"
      ],
      "alternativeMethods": [
        "也可直接指出未知數出現在分母違反一元多項式形式，再用第二式的有限項與非負整數指數確認。"
      ],
      "reasoningSteps": [
        "2/x=2x⁻¹，x 的指數 -1 不是非負整數，因此第一式不是本單元的一元多項式。",
        "第二式化簡為 x²+1，各 x 指數為 2、0，皆為非負整數，所以是多項式。",
        "最後逐項核對：第一式含指數 -1 而不合格；第二式只有指數 2 與 0，符合所有多項式條件。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "完整指出負指數/分母限制並正確比較兩式。"
        },
        {
          "score": 2,
          "criteria": "判斷均正確但理由只說「x 在分母」。"
        },
        {
          "score": 1,
          "criteria": "只判對其中一式或只提到指數規則。"
        },
        {
          "score": 0,
          "criteria": "兩式判斷皆錯或無理由。"
        }
      ],
      "partialCreditRules": [
        "化簡 2+x²-1 為 x²+1 非必要，但若化簡錯且不影響資格判斷，最多扣 1 分。"
      ],
      "followThroughPolicy": "若把 2+x²-1 常數算錯但仍正確說明指數 2、0 合法，可保留主要概念分。",
      "unitAndNotationRules": "不涉及單位；負指數應寫成 -1。",
      "answerOnlyPolicy": "只寫「第一個不是，第二個是」最高 1 分。",
      "commonErrorTargets": [
        "只因兩個式子都有加減號便都判成多項式，沒有檢查 2/x 中未知數位於分母。",
        "把 2+x²-1 的常數化簡錯誤連帶誤判資格；常數值改變不影響其 x 指數仍為零。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立檢查兩式所有 x 指數，判斷明確。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "51308fe00b77b2b7e8b87b1e9660f3cd6f32f15b633aed0cae51fcee9b66ca12"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u10-s001-v001-review",
      "questionId": "u10-s001-v001",
      "questionContentSha256": "884dfa4a5e0485488a9e20b2e92406f5e49f071ecbd833ff6d2b20ab17a1299b",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "把 -7x³ 寫成 (-7)·x³，乘在文字部分前的數是 -7。",
      "derivedAnswer": "-7",
      "storedAnswer": "-7",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-7：正確辨認係數且保留負號。；7：忽略原項的負號。；3：把指數 3 誤當係數。；-3：同時混淆負號與指數。",
        "undefinedSymbol": "題幹用語均在「多項式的項與係數」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「負號未隨項保留」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：辨認負係數，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「在單項式 -7x³ 中，x³ 的係數是多少？」獨立重算：把 -7x³ 寫成 (-7)·x³，乘在文字部分前的數是 -7。 正解「-7」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "b6ad1e57fdd81fbe10eec74e291eefe24a2c2e622dc975760a0865c76a777dbd"
    },
    {
      "reviewId": "u10-s001-v002-review",
      "questionId": "u10-s001-v002",
      "questionContentSha256": "2e99983cb871720160a2dede591234a1228766d1dbd1cb50c5adf0b7255e5baf",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "常數項是不含 x 的項；四項資訊中只有 9 不含 x。",
      "derivedAnswer": "9",
      "storedAnswer": "9",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-3：-3 是 x 項的係數，不是一項。；9：9 不含未知數，正確。；4x²：4x² 含 x。；-3x：-3x 含 x。",
        "undefinedSymbol": "題幹用語均在「多項式的項與係數」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「把係數當成常數項」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：辨認常數項，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「多項式 4x²-3x+9 的常數項是哪一個？」獨立重算：常數項是不含 x 的項；四項資訊中只有 9 不含 x。 正解「9」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "da32f3f565002ad131bf54a035eb55cbc764754ee1d5b12cc9d4a74fd971939a"
    },
    {
      "reviewId": "u10-s001-v003-review",
      "questionId": "u10-s001-v003",
      "questionContentSha256": "0691f965db660e8a619c2e18f3207c4eb8f4362f9de76ec02152b98112bd9496",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "以最外層加減分界，三項為 2a²、-5a、1。",
      "derivedAnswer": "3 項",
      "storedAnswer": "3 項",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：1 項：漏看兩個加減分界。；2 項：只計含 a 的兩項，漏常數。；3 項：三項完整，正確。；5 項：把係數 5 當成項數。",
        "undefinedSymbol": "題幹用語均在「多項式的項與係數」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「漏算常數項或把係數當項數」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：計算項數，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「多項式 2a²-5a+1 共有幾項？」獨立重算：以最外層加減分界，三項為 2a²、-5a、1。 正解「3 項」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "b9f6497c50f3ee6069fed20dd81aac2ea566bb71384b7b7efa10cbd6c5b51179"
    },
    {
      "reviewId": "u10-s001-v004-review",
      "questionId": "u10-s001-v004",
      "questionContentSha256": "478eb8c9172afe0f8ea6d6cf7436ab2a0593c4c78ead1f1b2b01ef2fae541f22",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "二次項的文字部分必須是 x²，所以為 6x²。",
      "derivedAnswer": "6x²",
      "storedAnswer": "6x²",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-x³：這是三次項。；6：6 只是係數，不是完整項。；-4：這是常數項。；6x²：含 x² 的完整項，正確。",
        "undefinedSymbol": "題幹用語均在「多項式的項與係數」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只寫係數而非完整項」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：辨認指定次項，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「在 -x³+6x²-4 中，二次項是哪一個？」獨立重算：二次項的文字部分必須是 x²，所以為 6x²。 正解「6x²」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "f1be0b28f17fed838829d3ac3e08faf9f29ee27e8b8313f85d81c4b4e2e1223a"
    },
    {
      "reviewId": "u10-s001-v005-review",
      "questionId": "u10-s001-v005",
      "questionContentSha256": "d0c0bf76c5f541474ddc5e01b4438d8e97d6db5a161f7d8b5e8aa04187558ebd",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "降冪排列為 2x²-3x+8，x 項是 -3x，係數 -3。",
      "derivedAnswer": "-3",
      "storedAnswer": "-3",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：3：漏掉負號。；-3：-3 正確。；2：2 是二次項係數。；8：8 是常數項。",
        "undefinedSymbol": "題幹用語均在「多項式的項與係數」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「排列時改變項的符號」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：讀取重排後係數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「將 8-3x+2x² 按降冪排列後，x 項係數為何？」獨立重算：降冪排列為 2x²-3x+8，x 項是 -3x，係數 -3。 正解「-3」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "254289a5c01d9d87edee03fc5c27fbb2c2f3c672161879e88d27fc0b624c89dd"
    },
    {
      "reviewId": "u10-s001-v006-review",
      "questionId": "u10-s001-v006",
      "questionContentSha256": "3c1d02a8210e149999d3fe16464f270316b7388b48b6332b98e351ad9dcd99d5",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "3x²-x+5 的 x 指數為 2、1、0，皆為非負整數。",
      "derivedAnswer": "3x²-x+5",
      "storedAnswer": "3x²-x+5",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2/x+1：含 x⁻¹，不符合。；√x+2：含 x^(1/2)，不符合。；3x²-x+5：各指數皆為非負整數，正確。；x⁻¹+4：含負指數，不符合。",
        "undefinedSymbol": "題幹用語均在「多項式的項與係數」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只看式子有加減就認為是多項式」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：判斷多項式資格，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「下列哪一個是 x 的多項式？」獨立重算：3x²-x+5 的 x 指數為 2、1、0，皆為非負整數。 正解「3x²-x+5」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "e714997fa4a2a166cf4d93d3839a8c6f8be09a6cc6ddfae39deded4ea8da4c9d"
    },
    {
      "reviewId": "u10-s001-v007-review",
      "questionId": "u10-s001-v007",
      "questionContentSha256": "86422682e0fa112e9965b015fb51b8d659325e09087d647ad46ef79f4aea3d8d",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "二次項係數為 m-2，令 m-2=5，得 m=7。",
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
        "secondCorrectAnswer": "逐一檢查四選項：3：使係數為 1。；5：把 m 直接當係數。；6：計算 m-2=4。；7：m=7 時係數 5，正確。",
        "undefinedSymbol": "題幹用語均在「多項式的項與係數」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「忽略係數是 m-2」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：由係數條件求參數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 (m-2)x²+3x-1 的二次項係數是 5，則 m 為何？」獨立重算：二次項係數為 m-2，令 m-2=5，得 m=7。 正解「7」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "b75faf748ddfba7e8cb5be5de5b2a16eb905a9266a61ed94814455699980e036"
    },
    {
      "reviewId": "u10-s001-v008-review",
      "questionId": "u10-s001-v008",
      "questionContentSha256": "c3f33d5f459e6724c6df2f9ce585ee989ee8c6cdf6b2f8454fa069c6eaac0587",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "去括號得 3x²-2x+5，三項次方不同，不能再合併。",
      "derivedAnswer": "3 個",
      "storedAnswer": "3 個",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：3 個：三項完整，正確。；2 個：漏掉常數項。；4 個：把括號或係數視為額外項。；5 個：把數字 5 當項數。",
        "undefinedSymbol": "題幹用語均在「多項式的項與係數」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「去括號漏變號或誤算項數」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：先化簡再辨認項，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「將 3x²-(2x-5) 去括號後共有幾個非零項？」獨立重算：去括號得 3x²-2x+5，三項次方不同，不能再合併。 正解「3 個」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "3f15cebe4d8809061ebe92180ab77154b4f6276c707e244b58b775daf3e22328"
    },
    {
      "reviewId": "u10-s001-v009-review",
      "questionId": "u10-s001-v009",
      "questionContentSha256": "a45c9e5285d666b3c33326330db7bd537fa8a583605668345d14a22e04fd8e5b",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "沒有 x 項表示 b=0；常數項就是 c，所以 c=-4。",
      "derivedAnswer": "b=0，c=-4",
      "storedAnswer": "b=0，c=-4",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：a=0，b=-4：這會消去二次項且 x 項仍為 -4x。；a=-4，c=0：常數項變 0。；b=0，c=-4：兩條件都符合，正確。；b=-4，c=0：x 項為 -4x 且常數 0。",
        "undefinedSymbol": "題幹用語均在「多項式的項與係數」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「把 a、b、c 對應次方弄反」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：由缺項判斷係數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「多項式 ax²+bx+c 中沒有 x 項，且常數項為 -4。下列條件何者正確？」獨立重算：沒有 x 項表示 b=0；常數項就是 c，所以 c=-4。 正解「b=0，c=-4」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "c25fc05fc48529a22d645e6164baaacce30c539d77ccab9aaecc78475a054d28"
    },
    {
      "reviewId": "u10-s001-v010-review",
      "questionId": "u10-s001-v010",
      "questionContentSha256": "7550e67bc848012e4abde2a020ac1a96d6642b730b3e855e194c49a1390fbf83",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "當 x 增加 1，5x 增加 5，而常數 85 不變。",
      "derivedAnswer": "每公里增加 5 元",
      "storedAnswer": "每公里增加 5 元",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：起跳價 5 元：起跳價是常數 85。；最多行駛 5 公里：係數不表示上限。；總車資固定 5 元：總車資隨 x 改變。；每公里增加 5 元：符合變動率意義。",
        "undefinedSymbol": "題幹用語均在「多項式的項與係數」講義定義。",
        "unitConflict": "5 的單位是元/公里；85 的單位是元。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「把係數和常數的情境意義互換」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：解釋一次項係數，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "若刪除計程車情境，就無法判斷 5 的單位與其「每公里」意義。",
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「計程車費用模型 C=85+5x，其中 x 是行駛公里數。係數 5 的意義是什麼？」獨立重算：當 x 增加 1，5x 增加 5，而常數 85 不變。 正解「每公里增加 5 元」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "e7ae964e901e43248df1741589e6159d92b56ab7f425a84c7c09a7d7af82806e"
    },
    {
      "reviewId": "u10-s001-v011-review",
      "questionId": "u10-s001-v011",
      "questionContentSha256": "0bd421f5a2352373f554246536c2dd936590548cde73a2f4ede0c3bafeccdcef",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "一次項是 7x，其係數為 7。",
      "derivedAnswer": "7",
      "storedAnswer": "7",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：7：7 正確。；3：3 是二次項係數。；x：x 是未知數。；10：把兩係數相加，沒有依題意。",
        "undefinedSymbol": "題幹用語均在「多項式的項與係數」講義定義。",
        "unitConflict": "A 的單位為平方公分；係數數值依指定變數單位解讀。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「把所有係數相加」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：在有單位模型中讀係數，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "面積模型要求區分二次項與一次項，並維持平方公分的整體單位。",
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一塊材料的面積表示為 A=3x²+7x（平方公分）。其中一次項的係數是多少？」獨立重算：一次項是 7x，其係數為 7。 正解「7」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "12e656157f3626f1ed7c700e9ffd65f143bf6f83921ec79c715baeb8ebce2f3a"
    },
    {
      "reviewId": "u10-s001-v012-review",
      "questionId": "u10-s001-v012",
      "questionContentSha256": "55e223c3257f69f9bb152c93a2054a730eac624c7a1d10cfc8ffb6c39c6fcfac",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "當 d=0 時 P=120，所以常數項代表起始庫存。",
      "derivedAnswer": "開始時有 120 件",
      "storedAnswer": "開始時有 120 件",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：每天賣出 120 件：120 不是每日變動量。；開始時有 120 件：d=0 時的庫存，正確。；8 天後有 120 件：沒有此條件。；最多只能賣 120 天：120 是件數，不是天數上限。",
        "undefinedSymbol": "題幹用語均在「多項式的項與係數」講義定義。",
        "unitConflict": "P 的單位是件，d 的單位是天；-8 表示每天減少 8 件。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "情境中 d 應為非負整數，且模型只在庫存不為負的期間有效。",
        "alternateReading": "常見誤讀「未用 d=0 解釋常數項」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：解釋常數項，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "庫存情境使常數項具有「起始量」而非單純數字的意義。",
      "prerequisiteCheck": "使用先備技能：既有整數與代數記號基礎；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「倉庫庫存以 P=120-8d 表示，d 為經過天數。常數項 120 代表什麼？」獨立重算：當 d=0 時 P=120，所以常數項代表起始庫存。 正解「開始時有 120 件」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "f84dcad66df2a64e5d27835ec4d489d934794ffa76ea2e2f806492c598e3bae3"
    }
  ],
  "drawingSpecs": []
};
