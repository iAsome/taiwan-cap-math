// Deterministically emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u10-s008-lecture-r1",
    "unitId": "u10",
    "numericUnitId": 10,
    "topicId": "u10-operations",
    "skillId": "binomial-multiply-basic",
    "lockedTitle": "二項式乘法",
    "title": "二項式乘法：四個乘積項完整配對",
    "audience": "臺灣國中零基礎至會考滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能用雙重分配或表格完成二項式乘法。",
      "能合併兩個中間同類項。",
      "能處理係數、負號及不同文字。"
    ],
    "prerequisites": [
      "monomial-polynomial-distribute"
    ],
    "prerequisiteBridge": "先備技能 monomial-polynomial-distribute 已建立下一步所需概念；本節專注於逐項分配後合併中間同類項。",
    "glossary": [
      {
        "term": "二項式",
        "definition": "化簡後恰有兩個非零項的多項式。"
      },
      {
        "term": "雙重分配",
        "definition": "第一括號每一項分別乘第二括號每一項。"
      },
      {
        "term": "中間項",
        "definition": "展開後常由兩個一次乘積合併而成。"
      }
    ],
    "notation": [
      {
        "symbol": "(a+b)(c+d)",
        "meaning": "展開為 ac+ad+bc+bd。"
      }
    ],
    "conceptNarrative": [
      "二項式乘二項式共有二乘二的四個配對：第一括號每一項都要分別乘第二括號兩項。四個乘積通常形成首項平方、兩個交叉項與常數乘積；先完整列出再合併同類項，可以避免只乘首首、尾尾而漏掉中間項。使用表格法時四格也必須逐格填滿，負號要隨項帶入。",
      "中間項係數來自兩個交叉乘積的係數和，不可只抄其中一個。例如 (3x-2)(2x+5) 的交叉項為十五 x 與負四 x，合併後是十一 x；尾項負二乘五為負十，與交叉項的符號判斷分開。",
      "含參數的恆等式可展開後比較同次項係數。求得參數後應至少再用另一個係數驗證，避免某一條件只給出候選值。情境題中的面積、總價仍依長乘寬或單價乘數量建立乘法，展開式最後要保留合適單位與可行範圍。"
    ],
    "formalDefinitions": [
      {
        "name": "二項式乘法",
        "statement": "由分配律重複兩次得到四個乘積。"
      }
    ],
    "formulas": [
      {
        "formula": "(a+b)(c+d)=ac+ad+bc+bd",
        "conditions": [
          "四項均須存在或因係數為 0 消失"
        ],
        "meaning": "一般二項式展開。"
      }
    ],
    "nonApplicableCases": [
      "不能只算 ac+bd。",
      "不能把 (a+b)(c+d) 當成 a+b+c+d。",
      "中間項不同類時不能強行合併。",
      "若括號內有三項，需使用更一般的逐項分配。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "固定第一括號第一項，乘遍第二括號。",
        "check": "完成此步後，確認內容仍符合「逐項分配後合併中間同類項」。"
      },
      {
        "step": 2,
        "instruction": "換第一括號第二項，再乘遍第二括號。",
        "check": "完成此步後，確認內容仍符合「逐項分配後合併中間同類項」。"
      },
      {
        "step": 3,
        "instruction": "寫出四個乘積並檢查符號。",
        "check": "完成此步後，確認內容仍符合「逐項分配後合併中間同類項」。"
      },
      {
        "step": 4,
        "instruction": "合併同類項。",
        "check": "完成此步後，確認內容仍符合「逐項分配後合併中間同類項」。"
      },
      {
        "step": 5,
        "instruction": "以常數項乘積與首項乘積快速檢查。",
        "check": "完成此步後，確認內容仍符合「逐項分配後合併中間同類項」。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "展開 (x+3)(x+4)。",
        "solutionSteps": [
          "列出 x²、4x、3x、12。",
          "合併交叉項 4x+3x。"
        ],
        "answer": "x²+7x+12。",
        "why": "四個乘積對應完整二乘二配對，七 x 不是直接把三與四放進公式，而是兩個交叉項的和；常數十二則由三乘四得到。"
      },
      {
        "exampleId": "L2",
        "prompt": "展開 (2x-1)(x+5)。",
        "solutionSteps": [
          "列出 2x²、10x、-x、-5。",
          "合併一次項為 9x。"
        ],
        "answer": "2x²+9x-5。",
        "why": "負一要分別乘 x 與五，產生負 x、負五；十 x 與負 x 合併為九 x，若忽略負號就會錯成十一 x，常數也會錯成正五，且交叉項沒有完整核對。"
      },
      {
        "exampleId": "L3",
        "prompt": "展開 (x+2y)(x-y)。",
        "solutionSteps": [
          "列出 x²、-xy、2xy、-2y²。",
          "合併兩個 xy 項。"
        ],
        "answer": "x²+xy-2y²。",
        "why": "x、y 是不同文字，但兩個交叉乘積都含相同的 xy，所以係數負一與正二可合併為正一；首尾平方項仍各自保留。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "只乘首首與尾尾",
        "why": "漏掉交叉乘積",
        "correction": "必須完成 2×2 四格。"
      },
      {
        "mistake": "常數項符號錯",
        "why": "尾項乘法符號未檢查",
        "correction": "先獨立算兩常數乘積。"
      },
      {
        "mistake": "中間項係數只取一個",
        "why": "漏掉另一交叉項",
        "correction": "兩個交叉乘積都寫出再合併。"
      },
      {
        "mistake": "展開兩個整式相減時只改第二式首項符號",
        "why": "忽略減號作用於整個括號",
        "correction": "先把第二個展開式加括號，再將每一項都變號後合併。"
      }
    ],
    "selfCheck": [
      "我是否能用雙重分配或表格完成二項式乘法？",
      "我是否能合併兩個中間同類項？",
      "我是否能處理係數、負號及不同文字？",
      "我是否檢查了負號、括號、指數與題目所問的量？"
    ],
    "summary": [
      "二項式乘法有四個逐項乘積。",
      "中間項通常由交叉項合併。",
      "首項與常數項可作快速檢查。",
      "負號必須逐次判定。"
    ],
    "connections": {
      "previous": "上一技能 單項式乘多項式 提供本節所需工具。",
      "next": [
        "下一節把兩個相同二項式的乘法整理成和的平方公式。"
      ]
    },
    "figureReferences": [],
    "accessibility": {
      "figureAltTextsRequired": false,
      "textOnlyPath": "所有公式與圖形關係均在正文以文字完整說明。"
    },
    "practiceLinks": {
      "mcQuestionIds": [
        "u10-s008-v001",
        "u10-s008-v002",
        "u10-s008-v003",
        "u10-s008-v004",
        "u10-s008-v005",
        "u10-s008-v006",
        "u10-s008-v007",
        "u10-s008-v008",
        "u10-s008-v009",
        "u10-s008-v010",
        "u10-s008-v011",
        "u10-s008-v012"
      ],
      "constructedResponseIds": [
        "u10-s008-cr001",
        "u10-s008-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP only",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段重讀「二項式乘法：四個乘積項完整配對」：定義、3 個例題、錯誤推理與下一技能銜接均針對 binomial-multiply-basic；另逐項檢查負號、係數、指數、括號和條件。",
      "reviewVersion": "human-lecture-review-u10-r1",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "4849bb102e9f840eec3cd9e23b36a67c4f28cb4cd05bb7395139b78d1cab9bf0"
  },
  "mcQuestions": [
    {
      "questionId": "u10-s008-v001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (x+2)(x+3)。",
      "givenConditions": [],
      "target": "基本正二項式乘法",
      "choices": [
        "x²+5",
        "x²+6x+6",
        "2x²+5x+6",
        "x²+5x+6"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "四項展開 x²+3x+2x+6=x²+5x+6。",
        "derivedChoice": "x²+5x+6",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "交叉項合併為 5x。 兩個二項式相乘共有四個配對，先得 x 二次方、三 x、二 x 與六，再把兩個一次同類項合併為五 x，首尾項都不能漏掉。",
      "steps": [
        "四項展開 x²+3x+2x+6=x²+5x+6。",
        "寫出 x²+3x+2x+6。",
        "合併中間項得到 x²+5x+6。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²+5",
          "truth": false,
          "reason": "漏交叉項。"
        },
        {
          "choice": "x²+6x+6",
          "truth": false,
          "reason": "中間係數錯。"
        },
        {
          "choice": "2x²+5x+6",
          "truth": false,
          "reason": "首項重複計算。"
        },
        {
          "choice": "x²+5x+6",
          "truth": true,
          "reason": "x²+5x+6 正確。"
        }
      ],
      "misconceptionTarget": "漏掉交叉乘積 只乘首項與末項而漏掉兩個交叉乘積。",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「基本正二項式乘法」且四個選項以同一表示層級作答；逐項重算後只有「x²+5x+6」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：基本正二項式乘法，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v001-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c2f34e4b7ad4216cc0940a34c8ec562d34df9d9a081a970e68e0359c7cbfac16"
    },
    {
      "questionId": "u10-s008-v002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "某學生用面積模型展開 (x−4)(x+1)：他列出 x²、x、−4x 三個區塊，卻漏掉一個常數區塊。漏掉的區塊面積應記為何？",
      "givenConditions": [
        "兩邊分別為x−4與x+1",
        "四個乘積區塊需全部保留"
      ],
      "target": "找出二項式乘法中遺漏的常數乘積",
      "choices": [
        "4",
        "−4",
        "−3",
        "1"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "常數區塊來自 (−4)×1，因此是 −4；完整展開為 x²+x−4x−4=x²−3x−4。",
        "derivedChoice": "−4",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "只計算兩個常數項的乘積，並保留負號。 面積模型四格對應每個前項與後項的配對，漏格來自負四乘一，所以記為負四；它是有號代數面積，用來表示完整展開式的常數項。",
      "steps": [
        "找出常數項−4與1。",
        "計算(−4)×1=−4。",
        "核對完整四個乘積。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "4忽略負號。"
        },
        {
          "choice": "−4",
          "truth": true,
          "reason": "常數乘積為−4。"
        },
        {
          "choice": "−3",
          "truth": false,
          "reason": "−3是合併後x項係數。"
        },
        {
          "choice": "1",
          "truth": false,
          "reason": "1只抄第二括號常數。"
        }
      ],
      "misconceptionTarget": "漏乘常數項或丟失負號。 忽略負四的符號，把漏格面積只寫成正四。",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹明確指定常數區塊。",
      "boundaryAudit": "題幹明確指定常數區塊。",
      "difficultyReason": "基礎：定位面積模型中的遺漏乘積。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v002-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8f3de3ed1c10ec402651d82ad89afae5d94e27dcdde14759a6a6afef2208e8c0"
    },
    {
      "questionId": "u10-s008-v003",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (2x+1)(x+5)。",
      "givenConditions": [],
      "target": "含係數二項式",
      "choices": [
        "2x²+11x+5",
        "2x²+6x+5",
        "2x²+10x+1",
        "3x²+6x+5"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "2x²+10x+x+5=2x²+11x+5。",
        "derivedChoice": "2x²+11x+5",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "完成四個乘積再合併。 四個乘積是二 x 二次方、十 x、x 與五；中間兩項同為一次項，係數十加一成十一，因此完整結果為二 x 二次方加十一 x 加五。",
      "steps": [
        "2x²+10x+x+5=2x²+11x+5。",
        "列出四個乘積 2x²、10x、x、5。",
        "合併 10x+x 得 11x。"
      ],
      "optionAnalysis": [
        {
          "choice": "2x²+11x+5",
          "truth": true,
          "reason": "2x²+11x+5 正確。"
        },
        {
          "choice": "2x²+6x+5",
          "truth": false,
          "reason": "中間項漏 5x。"
        },
        {
          "choice": "2x²+10x+1",
          "truth": false,
          "reason": "只乘外項。"
        },
        {
          "choice": "3x²+6x+5",
          "truth": false,
          "reason": "首項係數錯。"
        }
      ],
      "misconceptionTarget": "交叉項只算一個 漏掉一乘 x 的交叉項，將中間係數只寫成十。",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「含係數二項式」且四個選項以同一表示層級作答；逐項重算後只有「2x²+11x+5」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：含係數二項式，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v003-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9ff6b5594b0de87001e94e98220eb884cd6a863c1cd19dd57e8780a4e216940d"
    },
    {
      "questionId": "u10-s008-v004",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (3x-2)(2x+5)。",
      "givenConditions": [],
      "target": "雙係數二項式",
      "choices": [
        "6x²+19x-10",
        "5x²+11x-10",
        "6x²+11x-10",
        "6x²+11x+10"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "6x²+15x-4x-10=6x²+11x-10。",
        "derivedChoice": "6x²+11x-10",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "首項、交叉項和常數符號逐一核對。 首項乘積為六 x 二次方，交叉乘積十五 x 與負四 x 合併成十一 x，常數負二乘五為負十；四格符號逐一核對後答案唯一。",
      "steps": [
        "6x²+15x-4x-10=6x²+11x-10。",
        "展開成 6x²+15x-4x-10。",
        "合併交叉項為 11x，得 6x²+11x-10。"
      ],
      "optionAnalysis": [
        {
          "choice": "6x²+19x-10",
          "truth": false,
          "reason": "把 -4x 當 +4x。"
        },
        {
          "choice": "5x²+11x-10",
          "truth": false,
          "reason": "首項係數相加。"
        },
        {
          "choice": "6x²+11x-10",
          "truth": true,
          "reason": "首項、交叉項和常數符號逐一核對。"
        },
        {
          "choice": "6x²+11x+10",
          "truth": false,
          "reason": "常數負負判錯。"
        }
      ],
      "misconceptionTarget": "中間項或尾項符號錯 把負二乘五寫成正十，或交叉項十五與四相加。",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「雙係數二項式」且四個選項以同一表示層級作答；逐項重算後只有「6x²+11x-10」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：雙係數二項式，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v004-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "07078f7b251a13c5cc446a58bbbef32049ef936e1f763264e30e3b580566834a"
    },
    {
      "questionId": "u10-s008-v005",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (x+2y)(x-3y)。",
      "givenConditions": [],
      "target": "含兩文字二項式",
      "choices": [
        "x²-6y²",
        "x²-xy-6y²",
        "x²+5xy-6y²",
        "x²-5xy+6y²"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "x²-3xy+2xy-6y²=x²-xy-6y²。",
        "derivedChoice": "x²-xy-6y²",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "xy 交叉項可合併。 四個乘積為 x 二次方、負三 xy、正二 xy、負六 y 二次方；兩個 xy 項係數負三加二為負一，所以中間項是負 xy，四個配對完整。",
      "steps": [
        "x²-3xy+2xy-6y²=x²-xy-6y²。",
        "列出 x²-3xy+2xy-6y²。",
        "合併同類項得到 x²-xy-6y²。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²-6y²",
          "truth": false,
          "reason": "漏 xy 中間項。"
        },
        {
          "choice": "x²-xy-6y²",
          "truth": true,
          "reason": "x²-xy-6y² 正確。"
        },
        {
          "choice": "x²+5xy-6y²",
          "truth": false,
          "reason": "中間項係數錯。"
        },
        {
          "choice": "x²-5xy+6y²",
          "truth": false,
          "reason": "中間與尾符號錯。"
        }
      ],
      "misconceptionTarget": "雙文字交叉項合併錯 把負三 xy 與正二 xy 合併成正五 xy。",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「含兩文字二項式」且四個選項以同一表示層級作答；逐項重算後只有「x²-xy-6y²」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：含兩文字二項式，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v005-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "30c37d18af4b56d8bc9a5a57883315ff5ee64bf550345cdf5420e6eaff077981"
    },
    {
      "questionId": "u10-s008-v006",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 (x+a)(x+4)=x²+9x+20，則 a 為何？",
      "givenConditions": [],
      "target": "由展開式反求參數",
      "choices": [
        "4",
        "9",
        "16",
        "5"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "展開左式 x²+(a+4)x+4a。比較常數 4a=20 得 a=5，且 a+4=9。",
        "derivedChoice": "5",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "用兩個係數交叉驗證。 左式展開後一次項係數為 a 加四、常數為四 a；由常數二十先得 a 為五，再檢查一次項係數五加四確為九，兩條件一致。",
      "steps": [
        "展開左式 x²+(a+4)x+4a。",
        "比較常數 4a=20 得 a=5，且 a+4=9。",
        "代回 a=5，同時驗證 a+4=9 與 4a=20。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "常數變 16。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "把中間係數直接當 a。"
        },
        {
          "choice": "16",
          "truth": false,
          "reason": "誤用 4²。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "a=5 正確。"
        }
      ],
      "misconceptionTarget": "只比較中間項或常數項錯 只看一次項九便回答九，未扣除另一交叉係數四。",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由展開式反求參數」且四個選項以同一表示層級作答；逐項重算後只有「5」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：由展開式反求參數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v006-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0bb1abd565641c3bc0bea8f83c9b5b988559be0601d051e857708a24cb123700"
    },
    {
      "questionId": "u10-s008-v007",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (x+1)(x+2)-(x-1)(x-2)。",
      "givenConditions": [],
      "target": "兩乘積相減",
      "choices": [
        "2x²+4",
        "4x",
        "6x",
        "2x"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "第一式 x²+3x+2；第二式 x²-3x+2；相減得 6x。",
        "derivedChoice": "6x",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "兩個二次式的平方項與常數抵消。 兩個乘積各自展開後，第二個整式前的減號要作用到全部三項；二次項與常數項相消，一次項三 x 減負三 x 得六 x。",
      "steps": [
        "第一式 x²+3x+2。",
        "第二式 x²-3x+2。",
        "相減得 6x。"
      ],
      "optionAnalysis": [
        {
          "choice": "2x²+4",
          "truth": false,
          "reason": "把兩式相加。"
        },
        {
          "choice": "4x",
          "truth": false,
          "reason": "少算一組 3x。"
        },
        {
          "choice": "6x",
          "truth": true,
          "reason": "6x 正確。"
        },
        {
          "choice": "2x",
          "truth": false,
          "reason": "係數差錯。"
        }
      ],
      "misconceptionTarget": "展開後相減時未逐項變號 只減第二式首項，沒有把括號前負號分配到所有項。",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「兩乘積相減」且四個選項以同一表示層級作答；逐項重算後只有「6x」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：兩乘積相減，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v007-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "727303159d074e6cf45537617058c135ca6fa903205cbc53bc918c666786262e"
    },
    {
      "questionId": "u10-s008-v008",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "(2x+m)(x-3) 的 x 項係數為 1，則 m 為何？",
      "givenConditions": [],
      "target": "由中間項求參數",
      "choices": [
        "7",
        "-7",
        "-5",
        "5"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "展開 2x²+(m-6)x-3m。令 m-6=1，得 m=7。",
        "derivedChoice": "7",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "只比較一次項係數。 交叉項來自二 x 乘負三的負六 x 與 m 乘 x 的 m x，所以一次項係數是 m 減六；令它等於一，解得 m 為七，代回仍為一。",
      "steps": [
        "展開 2x²+(m-6)x-3m。",
        "令 m-6=1，得 m=7。",
        "由 m-6=1 得 m=7，再代回一次項係數驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "7",
          "truth": true,
          "reason": "m=7 正確。"
        },
        {
          "choice": "-7",
          "truth": false,
          "reason": "m-6=-13。"
        },
        {
          "choice": "-5",
          "truth": false,
          "reason": "m-6=-11。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "m-6=-1。"
        }
      ],
      "misconceptionTarget": "中間項係數由兩交叉項組成 把一次項係數寫成 m 加六，忽略負三的符號。",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由中間項求參數」且四個選項以同一表示層級作答；逐項重算後只有「7」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：由中間項求參數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v008-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "53b0e849361b3082ab6cc459353fb8f3ae847a500ae857289afb15583da227b9"
    },
    {
      "questionId": "u10-s008-v009",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 (ax+2)(3x-1) 的 x² 項係數為 12，常數項為何？",
      "givenConditions": [],
      "target": "由首項資訊判尾項",
      "choices": [
        "-2",
        "-8",
        "2",
        "8"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "x² 係數 3a=12 得 a=4；常數只由 2×(-1)=-2，與 a 無關。",
        "derivedChoice": "-2",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "先確認常數項來自尾尾乘積。 二次項係數三 a 等於十二可求 a 為四，但常數項只由兩括號的常數二與負一相乘，固定為負二，與 a 的數值無關。",
      "steps": [
        "x² 係數 3a=12 得 a=4。",
        "常數只由 2×(-1)=-2，與 a 無關。",
        "辨認常數乘積 2×(-1)。"
      ],
      "optionAnalysis": [
        {
          "choice": "-2",
          "truth": true,
          "reason": "-2 正確。"
        },
        {
          "choice": "-8",
          "truth": false,
          "reason": "把 a 代入常數。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "漏負號。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "把 2×4。"
        }
      ],
      "misconceptionTarget": "把首項參數誤帶入常數項 把求得的 a 乘入常數項，誤算成負八。",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由首項資訊判尾項」且四個選項以同一表示層級作答；逐項重算後只有「-2」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：由首項資訊判尾項，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v009-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5185418fb1308e1f48632601c4d3d74def051803039cb8ce001d15e2c9811419"
    },
    {
      "questionId": "u10-s008-v010",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "長方形長 (x+5) 公尺、寬 (x+2) 公尺，面積為何？",
      "givenConditions": [],
      "target": "長方形面積二項式",
      "choices": [
        "x²+10x+7 平方公尺",
        "2x²+7x+10 平方公尺",
        "x²+7x+10 平方公尺",
        "x²+3x+10 平方公尺"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "面積=(x+5)(x+2)=x²+7x+10。",
        "derivedChoice": "x²+7x+10 平方公尺",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "兩邊長相乘並合併交叉項。 面積是兩邊長相乘，四個乘積為 x 二次方、二 x、五 x 與十；一次項合併成七 x，結果使用平方公尺而不是公尺。",
      "steps": [
        "面積=(x+5)(x+2)=x²+7x+10。",
        "展開 (x+5)(x+2)。",
        "合併得 x²+7x+10 平方公尺。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²+10x+7 平方公尺",
          "truth": false,
          "reason": "中間係數誤用 5×2。"
        },
        {
          "choice": "2x²+7x+10 平方公尺",
          "truth": false,
          "reason": "首項重複。"
        },
        {
          "choice": "x²+7x+10 平方公尺",
          "truth": true,
          "reason": "兩邊長相乘並合併交叉項。"
        },
        {
          "choice": "x²+3x+10 平方公尺",
          "truth": false,
          "reason": "把 5-2 當中間係數。"
        }
      ],
      "misconceptionTarget": "面積展開中間項錯 只把兩邊長相加，或漏掉交叉項而得到錯誤面積。",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "公尺×公尺=平方公尺。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「長方形面積二項式」且四個選項以同一表示層級作答；逐項重算後只有「x²+7x+10 平方公尺」成立。",
      "boundaryAudit": "x>-2 可使兩邊為正；若 x 表示長度通常 x≥0。",
      "difficultyReason": "素養：長方形面積二項式，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "幾何邊長決定兩個二項式相乘，平方公尺單位不可由純代數題得知。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v010-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "bc31492d5171e86c0b399882c61eb30e539c94cfb1f36cc77fa036ae13aca2c8"
    },
    {
      "questionId": "u10-s008-v011",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一個商品每件售價 (x+20) 元，售出 (x-5) 件。總銷售額為何？",
      "givenConditions": [],
      "target": "銷售額模型",
      "choices": [
        "x²+15x+100 元",
        "x²+25x-100 元",
        "x²-15x-100 元",
        "x²+15x-100 元"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "銷售額=(x+20)(x-5)=x²+15x-100。",
        "derivedChoice": "x²+15x-100 元",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "單價乘件數，常數項 20×(-5) 為負。 總銷售額為單價乘件數，展開後交叉項是負五 x 加二十 x，合併為十五 x，常數二十乘負五為負一百；情境可行時需有 x 至少為五。",
      "steps": [
        "銷售額=(x+20)(x-5)=x²+15x-100。",
        "列出四個乘積並合併一次項。",
        "得到 x²+15x-100 元。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²+15x+100 元",
          "truth": false,
          "reason": "尾項符號錯。"
        },
        {
          "choice": "x²+25x-100 元",
          "truth": false,
          "reason": "中間項錯。"
        },
        {
          "choice": "x²-15x-100 元",
          "truth": false,
          "reason": "中間符號錯。"
        },
        {
          "choice": "x²+15x-100 元",
          "truth": true,
          "reason": "x²+15x-100 正確。"
        }
      ],
      "misconceptionTarget": "單價與數量乘法的尾項符號錯 常數正負相乘寫成正一百，或把交叉項係數相加成二十五。",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "元/件乘件數得到元。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「銷售額模型」且四個選項以同一表示層級作答；逐項重算後只有「x²+15x-100 元」成立。",
      "boundaryAudit": "件數 x-5 應為非負整數，因此 x≥5。",
      "difficultyReason": "素養：銷售額模型，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「每件售價×售出件數」是情境必要乘法，並需保留元。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v011-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "cb8b2ea85fdf8a1bd468de7edb8ba8468a805f57a9bd1f222f341157e7c607c5"
    },
    {
      "questionId": "u10-s008-v012",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "某矩形花圃原邊長為 (x+1) 與 (x+4) 公尺。面積模型的 x 項係數是多少？",
      "givenConditions": [],
      "target": "由面積模型讀係數",
      "choices": [
        "4",
        "5",
        "6",
        "8"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "展開為 x²+5x+4，所以 x 項係數 5。",
        "derivedChoice": "5",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "交叉面積 x·4 與 1·x 合成 5x。 兩邊長相乘時交叉項四 x 與一 x 都屬一次項，合併後係數為五；常數四與二次項係數一不是題目所問的 x 項係數。",
      "steps": [
        "展開為 x²+5x+4，所以 x 項係數 5。",
        "展開為 x²+4x+x+4。",
        "合併一次項，讀得 x 項係數 5。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "只取一邊常數。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "5 正確。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "把常數相乘後加 2。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "把兩常數相乘。"
        }
      ],
      "misconceptionTarget": "只計一個交叉區域 只取其中一個交叉係數四，漏加另一個一。",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "展開式各項合計表示平方公尺。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由面積模型讀係數」且四個選項以同一表示層級作答；逐項重算後只有「5」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：由面積模型讀係數，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "兩邊增加量各形成一個交叉面積，係數 5 有幾何來源。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v012-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8acc23bce58dc58213acc9ed33c16111c45b8fe50f2bba68f9a5157657965bbf"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u10-s008-cr001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "standard",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (2x-3)(x+4)，並用四個乘積說明。",
      "requiredWork": [
        "列出四個逐項乘積。",
        "合併中間同類項。"
      ],
      "standardSolution": [
        "2x·x=2x²，2x·4=8x，(-3)·x=-3x，(-3)·4=-12。",
        "合併得 2x²+5x-12。",
        "四個配對沒有遺漏，兩個交叉項八 x 與負三 x 合併成五 x，常數為負十二；代入 x=1 時原式 (-1)(5)=-5，結果二加五減十二也為負五。"
      ],
      "alternativeMethods": [
        "可用 2×2 表格，每格填一個乘積。"
      ],
      "reasoningSteps": [
        "2x·x=2x²，2x·4=8x，(-3)·x=-3x，(-3)·4=-12。",
        "合併得 2x²+5x-12。",
        "合併同類項後以 x=1 代回原式與展開式，確認兩邊同為 -5。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "四乘積與結果全對。"
        },
        {
          "score": 2,
          "criteria": "四格方法正確但一格或合併錯。"
        },
        {
          "score": 1,
          "criteria": "至少兩個乘積正確且看出需逐項相乘。"
        },
        {
          "score": 0,
          "criteria": "只算首尾或無作答。"
        }
      ],
      "partialCreditRules": [
        "若結果正確但未列四乘積，最高 2 分。"
      ],
      "followThroughPolicy": "某一乘積早期錯，後續合併一致可給 2 分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫答案最高 2 分。",
      "commonErrorTargets": [
        "只乘首項與末項，漏掉八 x 或負三 x 其中一個交叉乘積。",
        "把負三乘正四寫成正十二，或將八 x 與負三 x 合併成十一 x。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立重算中間係數 8-3=5。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "69e7dc2afe4aeadc8ccbc659a353d57672a423d2adba2ff86bef92d69dba1597"
    },
    {
      "questionId": "u10-s008-cr002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "advanced",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 (x+a)(2x-3)=2x²+7x-15，求 a，並以兩個係數驗證。",
      "requiredWork": [
        "展開含 a 的乘積。",
        "比較 x 項與常數項。"
      ],
      "standardSolution": [
        "左式=2x²+(2a-3)x-3a。",
        "比較常數 -3a=-15 得 a=5。",
        "再驗 x 項 2a-3=10-3=7，符合。",
        "由常數條件得到 a=5 後，首項係數固定為二、一次項係數也驗得七；因此三個係數都與右式一致，a=5 是唯一符合完整恆等式的值。"
      ],
      "alternativeMethods": [
        "可先由常數項求 a，再用中間項檢查。"
      ],
      "reasoningSteps": [
        "左式=2x²+(2a-3)x-3a。",
        "比較常數 -3a=-15 得 a=5。",
        "再驗 x 項 2a-3=10-3=7，符合。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "a=5 且兩係數驗證完整。"
        },
        {
          "score": 2,
          "criteria": "a 正確但只比較一個係數。"
        },
        {
          "score": 1,
          "criteria": "正確展開含 a 的式子但求解錯。"
        },
        {
          "score": 0,
          "criteria": "未建立係數關係。"
        }
      ],
      "partialCreditRules": [
        "只由 x 項求出 a=5 也可，但需驗常數才滿分。"
      ],
      "followThroughPolicy": "若展開中間係數寫 2a+3，後續一致，最多 1 分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫 a=5，最高 2 分。",
      "commonErrorTargets": [
        "將一次項係數誤寫成二 a 加三，忽略三前面的負號。",
        "只由首項二 x² 判定 a，沒有利用常數或一次項係數求出並驗證 a=5。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立代回 (x+5)(2x-3)=2x²+7x-15。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4eabcfdef6e79e5e18af64659d23322bf2fe8ebd40b4ab7c62ea6880618055ec"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u10-s008-v001-review",
      "questionId": "u10-s008-v001",
      "questionContentSha256": "c2f34e4b7ad4216cc0940a34c8ec562d34df9d9a081a970e68e0359c7cbfac16",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "四項展開 x²+3x+2x+6=x²+5x+6。",
      "derivedAnswer": "x²+5x+6",
      "storedAnswer": "x²+5x+6",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²+5：漏交叉項。；x²+6x+6：中間係數錯。；2x²+5x+6：首項重複計算。；x²+5x+6：x²+5x+6 正確。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「漏掉交叉乘積」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：基本正二項式乘法，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 (x+2)(x+3)。」獨立重算：四項展開 x²+3x+2x+6=x²+5x+6。 正解「x²+5x+6」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "971efbfab9caa1802fa1ec800a54088b9d0b2bb3e63f8a8e6edd81d2b4e70d47"
    },
    {
      "reviewId": "u10-s008-v002-review",
      "questionId": "u10-s008-v002",
      "questionContentSha256": "8f3de3ed1c10ec402651d82ad89afae5d94e27dcdde14759a6a6afef2208e8c0",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "常數區塊來自 (−4)×1，因此是 −4；完整展開為 x²+x−4x−4=x²−3x−4。",
      "derivedAnswer": "−4",
      "storedAnswer": "−4",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回後只有「−4」成立；其他三項分別因：4忽略負號。；−3是合併後x項係數。；1只抄第二括號常數。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "題幹明確指定常數區塊。",
        "alternateReading": "題幹明確要求「找出二項式乘法中遺漏的常數乘積」，沒有第二種合理所求。"
      },
      "difficultyReason": "基礎：定位面積模型中的遺漏乘積。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "u10-s008-v002 中央修訂後獨立重算：常數區塊來自 (−4)×1，因此是 −4；完整展開為 x²+x−4x−4=x²−3x−4。 四個選項逐項核對，唯一正解為「−4」；其餘選項排除理由為：4忽略負號。；−3是合併後x項係數。；1只抄第二括號常數。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "ab3514f13fdec1b99f29e1bec86c98e780ec499fb0136ba0625db63366bc8d22"
    },
    {
      "reviewId": "u10-s008-v003-review",
      "questionId": "u10-s008-v003",
      "questionContentSha256": "9ff6b5594b0de87001e94e98220eb884cd6a863c1cd19dd57e8780a4e216940d",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "2x²+10x+x+5=2x²+11x+5。",
      "derivedAnswer": "2x²+11x+5",
      "storedAnswer": "2x²+11x+5",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2x²+11x+5：2x²+11x+5 正確。；2x²+6x+5：中間項漏 5x。；2x²+10x+1：只乘外項。；3x²+6x+5：首項係數錯。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「交叉項只算一個」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：含係數二項式，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 (2x+1)(x+5)。」獨立重算：2x²+10x+x+5=2x²+11x+5。 正解「2x²+11x+5」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "05160673a921916b6a34426c152a4a9885abbefc8ee87e5f78f9dfb11584d0eb"
    },
    {
      "reviewId": "u10-s008-v004-review",
      "questionId": "u10-s008-v004",
      "questionContentSha256": "07078f7b251a13c5cc446a58bbbef32049ef936e1f763264e30e3b580566834a",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "6x²+15x-4x-10=6x²+11x-10。",
      "derivedAnswer": "6x²+11x-10",
      "storedAnswer": "6x²+11x-10",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：6x²+19x-10：把 -4x 當 +4x。；5x²+11x-10：首項係數相加。；6x²+11x-10：首項、交叉項和常數符號逐一核對。；6x²+11x+10：常數負負判錯。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「中間項或尾項符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：雙係數二項式，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 (3x-2)(2x+5)。」獨立重算：6x²+15x-4x-10=6x²+11x-10。 正解「6x²+11x-10」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "64777316da72ea89521c2b2e56e084afccaea42cc8ab880d422d19d8ecfffa46"
    },
    {
      "reviewId": "u10-s008-v005-review",
      "questionId": "u10-s008-v005",
      "questionContentSha256": "30c37d18af4b56d8bc9a5a57883315ff5ee64bf550345cdf5420e6eaff077981",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "x²-3xy+2xy-6y²=x²-xy-6y²。",
      "derivedAnswer": "x²-xy-6y²",
      "storedAnswer": "x²-xy-6y²",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²-6y²：漏 xy 中間項。；x²-xy-6y²：x²-xy-6y² 正確。；x²+5xy-6y²：中間項係數錯。；x²-5xy+6y²：中間與尾符號錯。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「雙文字交叉項合併錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：含兩文字二項式，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 (x+2y)(x-3y)。」獨立重算：x²-3xy+2xy-6y²=x²-xy-6y²。 正解「x²-xy-6y²」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "324add69ca85e5be3b7fbce622310cc64e4e7502a19f3350342a547834d6b0ab"
    },
    {
      "reviewId": "u10-s008-v006-review",
      "questionId": "u10-s008-v006",
      "questionContentSha256": "0bb1abd565641c3bc0bea8f83c9b5b988559be0601d051e857708a24cb123700",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "展開左式 x²+(a+4)x+4a。比較常數 4a=20 得 a=5，且 a+4=9。",
      "derivedAnswer": "5",
      "storedAnswer": "5",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4：常數變 16。；9：把中間係數直接當 a。；16：誤用 4²。；5：a=5 正確。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只比較中間項或常數項錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：由展開式反求參數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 (x+a)(x+4)=x²+9x+20，則 a 為何？」獨立重算：展開左式 x²+(a+4)x+4a。比較常數 4a=20 得 a=5，且 a+4=9。 正解「5」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "3a6eecb6c3854528a4258a56c6c442e35d6c4c415b02f85a2368991fa2655197"
    },
    {
      "reviewId": "u10-s008-v007-review",
      "questionId": "u10-s008-v007",
      "questionContentSha256": "727303159d074e6cf45537617058c135ca6fa903205cbc53bc918c666786262e",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "第一式 x²+3x+2；第二式 x²-3x+2；相減得 6x。",
      "derivedAnswer": "6x",
      "storedAnswer": "6x",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2x²+4：把兩式相加。；4x：少算一組 3x。；6x：6x 正確。；2x：係數差錯。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「展開後相減時未逐項變號」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：兩乘積相減，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 (x+1)(x+2)-(x-1)(x-2)。」獨立重算：第一式 x²+3x+2；第二式 x²-3x+2；相減得 6x。 正解「6x」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "a81a2c084ea61e88a9068df9307b384fa50473d829b6c714e667b0aac08d12b7"
    },
    {
      "reviewId": "u10-s008-v008-review",
      "questionId": "u10-s008-v008",
      "questionContentSha256": "53b0e849361b3082ab6cc459353fb8f3ae847a500ae857289afb15583da227b9",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "展開 2x²+(m-6)x-3m。令 m-6=1，得 m=7。",
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
        "secondCorrectAnswer": "逐一檢查四選項：7：m=7 正確。；-7：m-6=-13。；-5：m-6=-11。；5：m-6=-1。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「中間項係數由兩交叉項組成」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：由中間項求參數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「(2x+m)(x-3) 的 x 項係數為 1，則 m 為何？」獨立重算：展開 2x²+(m-6)x-3m。令 m-6=1，得 m=7。 正解「7」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "54d49524da3ccb79ce743b391614fba0e4fbb69639043dc6a2410424196eed49"
    },
    {
      "reviewId": "u10-s008-v009-review",
      "questionId": "u10-s008-v009",
      "questionContentSha256": "5185418fb1308e1f48632601c4d3d74def051803039cb8ce001d15e2c9811419",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "x² 係數 3a=12 得 a=4；常數只由 2×(-1)=-2，與 a 無關。",
      "derivedAnswer": "-2",
      "storedAnswer": "-2",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-2：-2 正確。；-8：把 a 代入常數。；2：漏負號。；8：把 2×4。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「把首項參數誤帶入常數項」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：由首項資訊判尾項，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 (ax+2)(3x-1) 的 x² 項係數為 12，常數項為何？」獨立重算：x² 係數 3a=12 得 a=4；常數只由 2×(-1)=-2，與 a 無關。 正解「-2」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "a0bee2ac8e306af5a9e99ed86f58415780b07d4448e63238ba14a39555be717d"
    },
    {
      "reviewId": "u10-s008-v010-review",
      "questionId": "u10-s008-v010",
      "questionContentSha256": "bc31492d5171e86c0b399882c61eb30e539c94cfb1f36cc77fa036ae13aca2c8",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "面積=(x+5)(x+2)=x²+7x+10。",
      "derivedAnswer": "x²+7x+10 平方公尺",
      "storedAnswer": "x²+7x+10 平方公尺",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²+10x+7 平方公尺：中間係數誤用 5×2。；2x²+7x+10 平方公尺：首項重複。；x²+7x+10 平方公尺：兩邊長相乘並合併交叉項。；x²+3x+10 平方公尺：把 5-2 當中間係數。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "公尺×公尺=平方公尺。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "x>-2 可使兩邊為正；若 x 表示長度通常 x≥0。",
        "alternateReading": "常見誤讀「面積展開中間項錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：長方形面積二項式，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "幾何邊長決定兩個二項式相乘，平方公尺單位不可由純代數題得知。",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「長方形長 (x+5) 公尺、寬 (x+2) 公尺，面積為何？」獨立重算：面積=(x+5)(x+2)=x²+7x+10。 正解「x²+7x+10 平方公尺」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "f51d752d44683d1e73d78f2f817888bde0c3dc957ffcc17686ec94502ec3b4f1"
    },
    {
      "reviewId": "u10-s008-v011-review",
      "questionId": "u10-s008-v011",
      "questionContentSha256": "cb8b2ea85fdf8a1bd468de7edb8ba8468a805f57a9bd1f222f341157e7c607c5",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "銷售額=(x+20)(x-5)=x²+15x-100。",
      "derivedAnswer": "x²+15x-100 元",
      "storedAnswer": "x²+15x-100 元",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²+15x+100 元：尾項符號錯。；x²+25x-100 元：中間項錯。；x²-15x-100 元：中間符號錯。；x²+15x-100 元：x²+15x-100 正確。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "元/件乘件數得到元。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "件數 x-5 應為非負整數，因此 x≥5。",
        "alternateReading": "常見誤讀「單價與數量乘法的尾項符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：銷售額模型，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「每件售價×售出件數」是情境必要乘法，並需保留元。",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一個商品每件售價 (x+20) 元，售出 (x-5) 件。總銷售額為何？」獨立重算：銷售額=(x+20)(x-5)=x²+15x-100。 正解「x²+15x-100 元」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "dad4a21a46c9562b4850ec4858167272c00924558969e1edf0d7bc119908208e"
    },
    {
      "reviewId": "u10-s008-v012-review",
      "questionId": "u10-s008-v012",
      "questionContentSha256": "8acc23bce58dc58213acc9ed33c16111c45b8fe50f2bba68f9a5157657965bbf",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "展開為 x²+5x+4，所以 x 項係數 5。",
      "derivedAnswer": "5",
      "storedAnswer": "5",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4：只取一邊常數。；5：5 正確。；6：把常數相乘後加 2。；8：把兩常數相乘。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "展開式各項合計表示平方公尺。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只計一個交叉區域」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：由面積模型讀係數，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "兩邊增加量各形成一個交叉面積，係數 5 有幾何來源。",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某矩形花圃原邊長為 (x+1) 與 (x+4) 公尺。面積模型的 x 項係數是多少？」獨立重算：展開為 x²+5x+4，所以 x 項係數 5。 正解「5」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "6024e91481bd91a6fc18bb511e40242b098622944eef5aa6b65e8e410f37bdc0"
    }
  ],
  "drawingSpecs": []
};
