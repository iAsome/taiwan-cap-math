export default {
  "lecture": {
    "lectureId": "u13-s010-lecture-r1",
    "unitId": "u13",
    "numericUnitId": 13,
    "topicId": "u13-solving",
    "skillId": "quadratic-check-root",
    "lockedOrder": 10,
    "originalLockedTitle": "二次方程解的檢查",
    "title": "二次方程式解的代入檢查",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能把候選值代入原方程式左右兩邊。",
      "能正確處理負數平方與括號。",
      "能檢查一組所謂解是否完整且正確。",
      "能由已知根反求參數。"
    ],
    "prerequisites": [
      {
        "skillId": "quadratic-roots-count",
        "requiredLevel": "能說明前一技能的核心規則並完成基本計算，不只記答案。"
      }
    ],
    "prerequisiteBridge": "承接根個數判斷；知道可能有幾根後，進一步確認每個候選值真實成立。",
    "glossary": [
      {
        "term": "代入檢查",
        "definition": "把候選值代回原方程式，確認左右兩邊相等。"
      },
      {
        "term": "候選值",
        "definition": "可能是根、但尚未驗證的數。"
      },
      {
        "term": "驗根",
        "definition": "確認候選值使原方程式成立。"
      },
      {
        "term": "完整解集",
        "definition": "包含所有且只有真正根的答案集合。"
      }
    ],
    "notation": [
      {
        "symbol": "P(r)=0",
        "meaning": "把 x=r 代入左側多項式 P(x)，結果為 0，則 r 是根。"
      }
    ],
    "conceptNarrative": [
      "驗根應代回原方程式，而不是只代回可能已抄錯的中間式。",
      "負數代入平方時要加括號，例如 x=-2 時 x²=(-2)²=4。",
      "候選值使左式為 0 才是標準式的根；若原式左右皆非 0，只要相等也成立。",
      "檢查一組答案時，要逐個驗證，並思考是否可能漏根。",
      "已知某值是根時，可代入含參數方程式形成參數的一次方程式。"
    ],
    "formalDefinitions": [
      {
        "name": "根的檢查",
        "statement": "r 是方程式 F(x)=G(x) 的根，當且僅當 F(r)=G(r)。"
      }
    ],
    "formulas": [
      {
        "formula": "ar²+br+c=0",
        "conditions": [
          "原方程式已寫為 ax²+bx+c=0"
        ],
        "meaning": "檢查 r 是否為根。"
      }
    ],
    "nonApplicableCases": [
      "只檢查因式分解後的式子不足以排除整理時的抄寫錯誤。",
      "近似小數若題目要求精確根，不能只憑四捨五入後看似相等。",
      "驗證兩個列出的根都正確，仍不自動證明沒有第三個根；二次方程式至多兩根可作補充理由。",
      "情境限制是驗根後的第二層檢查。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "保留原方程式。",
        "check": "是否未被錯誤變形？"
      },
      {
        "step": 2,
        "instruction": "用括號代入候選值。",
        "check": "負號是否包含在平方內？"
      },
      {
        "step": 3,
        "instruction": "分別計算左右兩邊或標準式值。",
        "check": "每一步符號是否正確？"
      },
      {
        "step": 4,
        "instruction": "比較結果並判定是否為根。",
        "check": "左右是否完全相等？"
      },
      {
        "step": 5,
        "instruction": "檢查解集完整性與情境。",
        "check": "二次方程式是否已列所有根？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "檢查 x=2 是否為 x²-5x+6=0 的根。",
        "solutionSteps": [
          "代入得 4-10+6=0。"
        ],
        "answer": "是。"
      },
      {
        "exampleId": "L2",
        "prompt": "檢查 x=-3 是否為 x²+4x+3=0 的根。",
        "solutionSteps": [
          "(-3)²+4(-3)+3=9-12+3=0。"
        ],
        "answer": "是。"
      },
      {
        "exampleId": "L3",
        "prompt": "檢查 x=-2 是否為 x²+3x-10=0 的根。",
        "solutionSteps": [
          "4-6-10=-12。",
          "結果不為 0。"
        ],
        "answer": "不是。"
      },
      {
        "exampleId": "L4",
        "prompt": "若 x=3 是 x²+kx-12=0 的根，求 k。",
        "solutionSteps": [
          "代入：9+3k-12=0。",
          "3k=3。"
        ],
        "answer": "k=1。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "x=-2 時把 x² 算成 -4。",
        "why": "沒有把負數放入括號平方。",
        "correction": "寫 (-2)²=4。"
      },
      {
        "mistake": "只看候選值接近答案。",
        "why": "根必須精確成立。",
        "correction": "完整代入計算。"
      },
      {
        "mistake": "代回錯誤的中間式。",
        "why": "無法檢查先前變形。",
        "correction": "代回原題。"
      },
      {
        "mistake": "只驗一個列出的根。",
        "why": "另一個可能錯。",
        "correction": "逐一驗證全部候選。"
      },
      {
        "mistake": "標準式代入結果非 0 仍判為根。",
        "why": "判準錯誤。",
        "correction": "結果必須等於 0。"
      },
      {
        "mistake": "代數根通過就忽略長度限制。",
        "why": "驗根與情境合理性是兩層檢查。",
        "correction": "再套用定義域。"
      }
    ],
    "selfCheck": [
      "是否代回原方程式？",
      "負數是否加括號？",
      "左右是否逐項計算？",
      "所有候選都驗了嗎？",
      "情境限制是否再檢查？"
    ],
    "summary": [
      "根必須代入後使原等式成立。",
      "負數平方是驗根常見陷阱。",
      "每個候選值都需獨立驗證。",
      "已知根可反求參數。"
    ],
    "connections": {
      "previous": "承接根個數判斷；知道可能有幾根後，進一步確認每個候選值真實成立。",
      "next": [
        "下一節用公式解求得候選根後，必須以本節方法檢查。",
        "應用題還要在驗根後做情境篩選。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u13-s010-v001",
        "u13-s010-v002",
        "u13-s010-v003",
        "u13-s010-v004",
        "u13-s010-v005",
        "u13-s010-v006",
        "u13-s010-v007",
        "u13-s010-v008",
        "u13-s010-v009",
        "u13-s010-v010",
        "u13-s010-v011",
        "u13-s010-v012"
      ],
      "constructedResponseIds": [
        "u13-s010-cr001",
        "u13-s010-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "invalidUseCasesIncluded": true,
      "reviewNote": "四例均直接代回原式而非中間式；特別核對 (-3)² 的括號、x=-2 案例確實得到 -12，以及參數 k=1 代回後 9+3-12=0。",
      "reviewVersion": "human-lecture-review-u13-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "7b81078ee774e1209d74d79550c5552c84fa5dd2dc3c5ec88b2965ece8d5f0a8"
  },
  "mcQuestions": [
    {
      "questionId": "u13-s010-v001",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-check-root",
      "lockedSkillOrder": 10,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "x=2 是否為 x²-5x+6=0 的根？",
      "givenConditions": "候選值精確。",
      "target": "驗證單一候選根",
      "choices": [
        "否，因為 2²=4",
        "否，因為 2-5+6=3",
        "是",
        "無法判斷"
      ],
      "answerIndex": 2,
      "explanation": "代入 x=2；左式=0，所以是根，所以答案為「是」。",
      "steps": [
        "代入 x=2",
        "左式=0，所以是根"
      ],
      "optionAnalysis": [
        {
          "choice": "否，因為 2²=4",
          "truth": false,
          "reason": "只算一項，未算完整左式。"
        },
        {
          "choice": "否，因為 2-5+6=3",
          "truth": false,
          "reason": "把 x² 誤代成 x。"
        },
        {
          "choice": "是",
          "truth": true,
          "reason": "代入得 4-10+6=0。"
        },
        {
          "choice": "無法判斷",
          "truth": false,
          "reason": "方程式與候選值都已給定。"
        }
      ],
      "misconceptionTarget": "代入不完整",
      "prerequisiteSkillIds": [
        "quadratic-roots-count"
      ],
      "estimatedTimeSec": 45,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "結果需恰為 0。",
      "difficultyReason": "最基本驗根。",
      "literacyContextNecessity": null,
      "authoringIntent": "驗證單一候選根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e08c343a244f1506cf35a206cf6423b0a7e4aa0ce28ed0034b543fe98e58221f"
    },
    {
      "questionId": "u13-s010-v002",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-check-root",
      "lockedSkillOrder": 10,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "下列哪一個數是 2x²+x-6=0 的根？",
      "givenConditions": "四選項皆為實數。",
      "target": "找出選項中的根",
      "choices": [
        "2",
        "-2",
        "3",
        "-3"
      ],
      "answerIndex": 1,
      "explanation": "逐一代入四個候選；只有 -2 使左式為 0，所以答案為「-2」。",
      "steps": [
        "逐一代入四個候選",
        "只有 -2 使左式為 0"
      ],
      "optionAnalysis": [
        {
          "choice": "2",
          "truth": false,
          "reason": "代入得 8+2-6=4。"
        },
        {
          "choice": "-2",
          "truth": true,
          "reason": "代入 -2 得 8-2-6=0。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "代入得 18+3-6=15。"
        },
        {
          "choice": "-3",
          "truth": false,
          "reason": "代入得 18-3-6=9。"
        }
      ],
      "misconceptionTarget": "只看數值大小不代入",
      "prerequisiteSkillIds": [
        "quadratic-roots-count"
      ],
      "estimatedTimeSec": 70,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "唯一正確選項。",
      "difficultyReason": "逐項驗根。",
      "literacyContextNecessity": null,
      "authoringIntent": "找出選項中的根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8d51bedf8631be48bf5840e12c6594db3e1aa09279f6dd48deb715b9bcd5c629"
    },
    {
      "questionId": "u13-s010-v003",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-check-root",
      "lockedSkillOrder": 10,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "x=-3 是否為 x²+4x+3=0 的根？",
      "givenConditions": "候選值為 -3。",
      "target": "驗證負數根",
      "choices": [
        "否，因為 -3²=-9",
        "否，因為 9+12+3≠0",
        "無法判斷",
        "是"
      ],
      "answerIndex": 3,
      "explanation": "用括號代入 -3；計算 9-12+3=0，所以答案為「是」。",
      "steps": [
        "用括號代入 -3",
        "計算 9-12+3=0"
      ],
      "optionAnalysis": [
        {
          "choice": "否，因為 -3²=-9",
          "truth": false,
          "reason": "缺少括號，負數平方錯。"
        },
        {
          "choice": "否，因為 9+12+3≠0",
          "truth": false,
          "reason": "一次項符號錯。"
        },
        {
          "choice": "無法判斷",
          "truth": false,
          "reason": "可直接代入。"
        },
        {
          "choice": "是",
          "truth": true,
          "reason": "(-3)²+4(-3)+3=9-12+3=0。"
        }
      ],
      "misconceptionTarget": "負數平方與一次項符號錯",
      "prerequisiteSkillIds": [
        "quadratic-roots-count"
      ],
      "estimatedTimeSec": 55,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "括號必須清楚。",
      "difficultyReason": "負數代入陷阱。",
      "literacyContextNecessity": null,
      "authoringIntent": "驗證負數根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c14b0c974a1bebbca84caa5485df2e4251846a8df6846f450c7ac46d6ad06b04"
    },
    {
      "questionId": "u13-s010-v004",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-check-root",
      "lockedSkillOrder": 10,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "某同學說 x=1、x=4 是 x²-5x+4=0 的根。檢查結果為何？",
      "givenConditions": "需逐根驗證。",
      "target": "檢查一組聲稱的解",
      "choices": [
        "兩個都是根",
        "只有 1 是根",
        "只有 4 是根",
        "兩個都不是根"
      ],
      "answerIndex": 0,
      "explanation": "分別代入 1 與 4；兩次左式皆為 0，所以答案為「兩個都是根」。",
      "steps": [
        "分別代入 1 與 4",
        "兩次左式皆為 0"
      ],
      "optionAnalysis": [
        {
          "choice": "兩個都是根",
          "truth": true,
          "reason": "代入 1 得 0，代入 4 也得 0。"
        },
        {
          "choice": "只有 1 是根",
          "truth": false,
          "reason": "4 代入同樣成立。"
        },
        {
          "choice": "只有 4 是根",
          "truth": false,
          "reason": "1 代入同樣成立。"
        },
        {
          "choice": "兩個都不是根",
          "truth": false,
          "reason": "方程式可分解為 (x-1)(x-4)=0。"
        }
      ],
      "misconceptionTarget": "只驗其中一個",
      "prerequisiteSkillIds": [
        "quadratic-roots-count"
      ],
      "estimatedTimeSec": 75,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "兩根數值不同且均成立。",
      "difficultyReason": "多候選驗證。",
      "literacyContextNecessity": null,
      "authoringIntent": "檢查一組聲稱的解",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a53c701e2028f47eeab2e05970d1a51d92028bb908d3f81befb7af5920d28394"
    },
    {
      "questionId": "u13-s010-v005",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-check-root",
      "lockedSkillOrder": 10,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "x=0 是否為 x²=7x 的根？",
      "givenConditions": "原式左右形式。",
      "target": "驗證零根",
      "choices": [
        "否，因為不能除以 0",
        "是",
        "否，因為 7x 有一次項",
        "無法判斷"
      ],
      "answerIndex": 1,
      "explanation": "左邊 0²=0；右邊 7·0=0，左右相等，所以答案為「是」。",
      "steps": [
        "左邊 0²=0",
        "右邊 7·0=0，左右相等"
      ],
      "optionAnalysis": [
        {
          "choice": "否，因為不能除以 0",
          "truth": false,
          "reason": "驗根不需除以 x。"
        },
        {
          "choice": "是",
          "truth": true,
          "reason": "左右兩邊代入 0 都等於 0。"
        },
        {
          "choice": "否，因為 7x 有一次項",
          "truth": false,
          "reason": "方程式仍可有 0 根值。"
        },
        {
          "choice": "無法判斷",
          "truth": false,
          "reason": "可直接比較左右。"
        }
      ],
      "misconceptionTarget": "先除以 x 造成錯誤判斷",
      "prerequisiteSkillIds": [
        "quadratic-roots-count"
      ],
      "estimatedTimeSec": 55,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "0 可合法代入。",
      "difficultyReason": "驗根與漏根觀念連結。",
      "literacyContextNecessity": null,
      "authoringIntent": "驗證零根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0750a1c1b151b1ea283151218486870fb30bec986feae61387dd88ec7f4ef90e"
    },
    {
      "questionId": "u13-s010-v006",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-check-root",
      "lockedSkillOrder": 10,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "檢查 x=-2 是否為 x²+3x-10=0 的根，正確計算為何？",
      "givenConditions": "標準式根需左式 0。",
      "target": "選出正確驗根過程",
      "choices": [
        "(-2)²+3(-2)-10=0，所以是",
        "-2²+3(-2)-10=-20，所以不是",
        "(-2)²+3(-2)-10=-12，所以不是",
        "(-2)²+3·2-10=0，所以是"
      ],
      "answerIndex": 2,
      "explanation": "括號代入；4-6-10=-12≠0，所以答案為「(-2)²+3(-2)-10=-12，所以不是」。",
      "steps": [
        "括號代入",
        "4-6-10=-12≠0"
      ],
      "optionAnalysis": [
        {
          "choice": "(-2)²+3(-2)-10=0，所以是",
          "truth": false,
          "reason": "算術總和錯。"
        },
        {
          "choice": "-2²+3(-2)-10=-20，所以不是",
          "truth": false,
          "reason": "雖結論不是，但平方寫法錯。"
        },
        {
          "choice": "(-2)²+3(-2)-10=-12，所以不是",
          "truth": true,
          "reason": "完整代入結果 -12 不為 0。"
        },
        {
          "choice": "(-2)²+3·2-10=0，所以是",
          "truth": false,
          "reason": "一次項漏負號。"
        }
      ],
      "misconceptionTarget": "負數平方、一次項與加總錯",
      "prerequisiteSkillIds": [
        "quadratic-roots-count"
      ],
      "estimatedTimeSec": 80,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "結論與過程都需正確。",
      "difficultyReason": "評析計算過程。",
      "literacyContextNecessity": null,
      "authoringIntent": "選出正確驗根過程",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c0f6108f13b4d1116617ad9fb1956e07062c00b5aea188d8e59d262950ecdded"
    },
    {
      "questionId": "u13-s010-v007",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-check-root",
      "lockedSkillOrder": 10,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "若 x=3 是 x²+kx-12=0 的根，k 為何？",
      "givenConditions": "x=3 必須精確成立。",
      "target": "由已知根反求參數",
      "choices": [
        "1",
        "-1",
        "3",
        "4"
      ],
      "answerIndex": 0,
      "explanation": "代入 x=3；3k-3=0，得 k=1，所以答案為「1」。",
      "steps": [
        "代入 x=3",
        "3k-3=0，得 k=1"
      ],
      "optionAnalysis": [
        {
          "choice": "1",
          "truth": true,
          "reason": "代入得 9+3k-12=0。"
        },
        {
          "choice": "-1",
          "truth": false,
          "reason": "移項符號錯。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "把 3k=3 直接寫 k=3。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "把 12-9 當成 4。"
        }
      ],
      "misconceptionTarget": "代入後一次方程運算錯",
      "prerequisiteSkillIds": [
        "quadratic-roots-count"
      ],
      "estimatedTimeSec": 85,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "k 為實數。",
      "difficultyReason": "逆向驗根參數題。",
      "literacyContextNecessity": null,
      "authoringIntent": "由已知根反求參數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c2e59a09b461e1f12ab6a1f2edf6e9d077cbcd5f2aa4eb4d06b277a6938a5823"
    },
    {
      "questionId": "u13-s010-v008",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-check-root",
      "lockedSkillOrder": 10,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "若 x=-2 是 2x²+mx-6=0 的根，m 為何？",
      "givenConditions": "候選根精確。",
      "target": "由負根反求參數",
      "choices": [
        "-1",
        "2",
        "7",
        "1"
      ],
      "answerIndex": 3,
      "explanation": "代入 (-2)；8-2m-6=0 ⇒ -2m+2=0，所以答案為「1」。",
      "steps": [
        "代入 (-2)",
        "8-2m-6=0 ⇒ -2m+2=0"
      ],
      "optionAnalysis": [
        {
          "choice": "-1",
          "truth": false,
          "reason": "解 -2m+2=0 時符號錯。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "忘記除以 2。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "把常數直接相加。"
        },
        {
          "choice": "1",
          "truth": true,
          "reason": "代入得 8-2m-6=0，故 m=1。"
        }
      ],
      "misconceptionTarget": "負數乘參數符號錯",
      "prerequisiteSkillIds": [
        "quadratic-roots-count"
      ],
      "estimatedTimeSec": 90,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "m 唯一。",
      "difficultyReason": "負值代入與參數。",
      "literacyContextNecessity": null,
      "authoringIntent": "由負根反求參數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2fe814ddf0a51a162841d00d43ce77b0e8cfc6829c66eb782b2267e576e8d068"
    },
    {
      "questionId": "u13-s010-v009",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-check-root",
      "lockedSkillOrder": 10,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "已知某方程式的候選根為 2、-5。下列哪個方程式可由代入確認兩者皆為根？",
      "givenConditions": "方程式首項係數固定為 1。",
      "target": "從根驗證方程式",
      "choices": [
        "x²-3x-10=0",
        "x²+7x+10=0",
        "x²+3x-10=0",
        "x²-7x+10=0"
      ],
      "answerIndex": 2,
      "explanation": "逐一代入候選方程式；x²+3x-10 在 2 與 -5 均為 0，所以答案為「x²+3x-10=0」。",
      "steps": [
        "逐一代入候選方程式",
        "x²+3x-10 在 2 與 -5 均為 0"
      ],
      "optionAnalysis": [
        {
          "choice": "x²-3x-10=0",
          "truth": false,
          "reason": "根為 5、-2。"
        },
        {
          "choice": "x²+7x+10=0",
          "truth": false,
          "reason": "根為 -5、-2。"
        },
        {
          "choice": "x²+3x-10=0",
          "truth": true,
          "reason": "代入 2 與 -5 都得到 0。"
        },
        {
          "choice": "x²-7x+10=0",
          "truth": false,
          "reason": "根為 2、5。"
        }
      ],
      "misconceptionTarget": "根和與根積符號錯",
      "prerequisiteSkillIds": [
        "quadratic-roots-count"
      ],
      "estimatedTimeSec": 105,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "兩候選都必須成立。",
      "difficultyReason": "反向構造與代入交叉。",
      "literacyContextNecessity": null,
      "authoringIntent": "從根驗證方程式",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5a9216f317aa42cd45a1abe71e329220292b2a15cc1b783e5bbc13eda0f161a1"
    },
    {
      "questionId": "u13-s010-v010",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-check-root",
      "lockedSkillOrder": 10,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "校正報告建議 t=4，模型為 t²-9t+20=0。此建議是否通過代入檢查？",
      "givenConditions": "t 為模型參數。",
      "target": "判斷校正建議是否有效",
      "choices": [
        "不通過，因為 4²=16",
        "不通過，因為 16-9+20≠0",
        "通過，因為 4+9+20=33",
        "通過，因為 16-36+20=0"
      ],
      "answerIndex": 3,
      "explanation": "代入 t=4；4²-9·4+20=0，所以答案為「通過，因為 16-36+20=0」。",
      "steps": [
        "代入 t=4",
        "4²-9·4+20=0"
      ],
      "optionAnalysis": [
        {
          "choice": "不通過，因為 4²=16",
          "truth": false,
          "reason": "只算平方項。"
        },
        {
          "choice": "不通過，因為 16-9+20≠0",
          "truth": false,
          "reason": "把 -9t 誤作 -9。"
        },
        {
          "choice": "通過，因為 4+9+20=33",
          "truth": false,
          "reason": "結論碰巧選通過但計算完全不符合模型。"
        },
        {
          "choice": "通過，因為 16-36+20=0",
          "truth": true,
          "reason": "完整代入結果為 0。"
        }
      ],
      "misconceptionTarget": "未將係數乘候選值",
      "prerequisiteSkillIds": [
        "quadratic-roots-count"
      ],
      "estimatedTimeSec": 80,
      "unitCheck": "t 沿用校正模型的時間單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "結果精確為 0。",
      "difficultyReason": "情境報告驗證。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為報告是否可採用取決於代入模型的精確結果。",
      "authoringIntent": "判斷校正建議是否有效",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "831c01eafb8735fd3ac9efd28fd59b3e6e4d0714aea1c8864c8ac2f54b647cc7"
    },
    {
      "questionId": "u13-s010-v011",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-check-root",
      "lockedSkillOrder": 10,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "包裝寬度模型為 x²+5x-24=0，候選值為 3 與 -8。若寬度必須為正，應採用哪個？",
      "givenConditions": "x>0。",
      "target": "區分驗根與情境篩選",
      "choices": [
        "-8",
        "3",
        "3 與 -8",
        "兩個都不採用"
      ],
      "answerIndex": 1,
      "explanation": "代入 3：9+15-24=0；代入 -8：64-40-24=0；再用 x>0 留 3，所以答案為「3」。",
      "steps": [
        "代入 3：9+15-24=0；代入 -8：64-40-24=0",
        "再用 x>0 留 3"
      ],
      "optionAnalysis": [
        {
          "choice": "-8",
          "truth": false,
          "reason": "代數成立但不是正寬度。"
        },
        {
          "choice": "3",
          "truth": true,
          "reason": "兩值都通過代數驗根，但只有 3 為正。"
        },
        {
          "choice": "3 與 -8",
          "truth": false,
          "reason": "未套用幾何限制。"
        },
        {
          "choice": "兩個都不採用",
          "truth": false,
          "reason": "3 代入確實成立且為正。"
        }
      ],
      "misconceptionTarget": "以為負根不算代數根或忘記正值",
      "prerequisiteSkillIds": [
        "quadratic-roots-count"
      ],
      "estimatedTimeSec": 95,
      "unitCheck": "x 是寬度，答案沿用題目長度單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "先承認兩根代數成立，再排除 -8。",
      "difficultyReason": "雙層檢查。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為包裝寬度正值限制使驗根後仍需第二次篩選。",
      "authoringIntent": "區分驗根與情境篩選",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0573f51bfc99e35f51b17f47fd523fbaec38867fcdcbf431a6490117ce53e64c"
    },
    {
      "questionId": "u13-s010-v012",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-check-root",
      "lockedSkillOrder": 10,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "一份解題報告列 x=2、x=3 為 x²-5x+6=0 的根。審核結論為何？",
      "givenConditions": "報告聲稱兩個根。",
      "target": "審核解集的正確與完整",
      "choices": [
        "報告正確，兩值代入皆為 0",
        "報告錯誤，只有 x=2",
        "報告錯誤，只有 x=3",
        "報告錯誤，兩值都不成立"
      ],
      "answerIndex": 0,
      "explanation": "代入 2 得 0；代入 3 得 0，且二次方程式至多兩根，所以答案為「報告正確，兩值代入皆為 0」。",
      "steps": [
        "代入 2 得 0",
        "代入 3 得 0，且二次方程式至多兩根"
      ],
      "optionAnalysis": [
        {
          "choice": "報告正確，兩值代入皆為 0",
          "truth": true,
          "reason": "方程式為 (x-2)(x-3)=0。"
        },
        {
          "choice": "報告錯誤，只有 x=2",
          "truth": false,
          "reason": "x=3 也使左式為 0。"
        },
        {
          "choice": "報告錯誤，只有 x=3",
          "truth": false,
          "reason": "x=2 也成立。"
        },
        {
          "choice": "報告錯誤，兩值都不成立",
          "truth": false,
          "reason": "兩值均可直接驗證。"
        }
      ],
      "misconceptionTarget": "只驗一個值或誤判完整性",
      "prerequisiteSkillIds": [
        "quadratic-roots-count"
      ],
      "estimatedTimeSec": 90,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "逐一驗證並確認二次最多兩根。",
      "difficultyReason": "完整解集稽核。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為解題報告的可信度需由逐根代入與完整性共同確認。",
      "authoringIntent": "審核解集的正確與完整",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3542e97cea2b6bb6a78228e087186363bf63407535168b789a62cf2b342a7d49"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u13-s010-cr001",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-check-root",
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "判斷 x=3 與 x=-2 是否為方程式 x²-x-6=0 的解，必須逐一代入。",
      "requiredWork": [
        "代入 3。",
        "代入 -2。",
        "分別下結論。"
      ],
      "fullCreditSolution": [
        "x=3：3²-3-6=9-3-6=0，所以是解。",
        "x=-2：(-2)²-(-2)-6=4+2-6=0，所以也是解。"
      ],
      "alternativeSolutions": [
        "可先因式分解成 (x-3)(x+2)=0，再以代入確認。"
      ],
      "reasoningSteps": [
        "注意負數代入需括號。",
        "檢查結果是否為 0。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "兩值代入計算均正確並判定都是解。"
        },
        {
          "score": 2,
          "criteria": "兩個結論正確，但只完整展示一個代入；或一處抄寫小錯不影響判定。"
        },
        {
          "score": 1,
          "criteria": "只正確驗證其中一值。"
        },
        {
          "score": 0,
          "criteria": "未代入且判定錯。"
        }
      ],
      "partialCreditRules": [
        "負數平方必須用括號。",
        "因題目要求逐一代入，只有因式分解最多 1 分。"
      ],
      "followThroughPolicy": "若 -2 代入時把 -(-2) 寫錯，3 的驗證完整則給 1 分。",
      "unitNotationRules": [
        "x 無單位。"
      ],
      "answerOnlyPolicy": "只寫「兩個都是」而無代入，最多 1 分。",
      "commonErrors": [
        "(-2)²=-4。",
        "把等於 0 與等於原 x 混淆。"
      ],
      "independentReview": {
        "derivedResult": "x=3 與 x=-2 都是解。",
        "ambiguity": "候選值明確，逐一驗證結果唯一。",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "contentSha256": "41d66bc42f5e2e7b73bfdb109051deb3c3c93179c4e73fc3416abcf5b91aac6b"
    },
    {
      "questionId": "u13-s010-cr002",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-check-root",
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "學生聲稱 x=1/2 是 4x²-5x+1=0 的解。請驗證並判斷他的聲稱。",
      "requiredWork": [
        "以分數精確代入。",
        "通分或化簡。",
        "明確判定。"
      ],
      "fullCreditSolution": [
        "代入 x=1/2：4(1/2)²-5(1/2)+1=4·1/4-5/2+1=1-5/2+1=-1/2。",
        "結果不等於 0，所以 x=1/2 不是解。"
      ],
      "alternativeSolutions": [
        "可因式分解 4x²-5x+1=(4x-1)(x-1)，真正的根為 1/4、1，因此 1/2 不在其中。"
      ],
      "reasoningSteps": [
        "平方分數。",
        "處理係數。",
        "以是否為 0 判定。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "精確算得 -1/2，明確否定聲稱。"
        },
        {
          "score": 2,
          "criteria": "結論正確且代入架構正確，但分數化簡有輕微書寫缺漏；或用因式分解完整證明。"
        },
        {
          "score": 1,
          "criteria": "知道要代入但計算錯，仍指出判準是結果是否為 0。"
        },
        {
          "score": 0,
          "criteria": "因 1/2 看似介於根之間就判為解，或無有效檢查。"
        }
      ],
      "partialCreditRules": [
        "因題目要求驗證，因式分解後列出真根也可滿分。"
      ],
      "followThroughPolicy": "若計算得到非零但數值誤為 1/2，仍可給 2 分，前提是每步可看出只是符號算術錯。",
      "unitNotationRules": [
        "x 無單位。",
        "分數不可用粗略近似取代精確驗證。"
      ],
      "answerOnlyPolicy": "只寫「不是」無證據，最多 1 分。",
      "commonErrors": [
        "把 4(1/2)² 算成 2。",
        "以接近 0 當作等於 0。"
      ],
      "independentReview": {
        "derivedResult": "代入值為 -1/2，因此不是解。",
        "ambiguity": "方程式精確，無四捨五入歧義。",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "contentSha256": "f64c5bb428020c033307642d59f9e8238f266ff96d6b42146408faf9c1db18c7"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u13-s010-v001",
      "unitId": "u13",
      "skillId": "quadratic-check-root",
      "contentSha256": "e08c343a244f1506cf35a206cf6423b0a7e4aa0ce28ed0034b543fe98e58221f",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：逐項計算 2²、-5·2、+6；總和 0，符合標準式根定義",
      "derivedAnswer": "是",
      "storedAnswer": "是",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「x=2 是否為 x²-5x+6=0 的根？」的要求量已明示為「驗證單一候選根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：候選值精確。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：結果需恰為 0。",
        "choices": "四選項逐一代入或反算；正確項理由為「代入得 4-10+6=0。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "最基本驗根。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「x=2 是否為 x²-5x+6=0 的根？」：獨立由原始條件重算：逐項計算 2²、-5·2、+6；總和 0，符合標準式根定義。再逐項核對四個選項，只有「是」同時符合方程式與限制；結果需恰為 0。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "df8ed16e422e6fdddc6d532d503e6c67c63408552c00f84f23a2ecc2b21ef796"
    },
    {
      "questionId": "u13-s010-v002",
      "unitId": "u13",
      "skillId": "quadratic-check-root",
      "contentSha256": "8d51bedf8631be48bf5840e12c6594db3e1aa09279f6dd48deb715b9bcd5c629",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：也可因式分解 (2x-3)(x+2)=0；根為 3/2、-2，選項中只有 -2",
      "derivedAnswer": "-2",
      "storedAnswer": "-2",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「下列哪一個數是 2x²+x-6=0 的根？」的要求量已明示為「找出選項中的根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：四選項皆為實數。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：唯一正確選項。",
        "choices": "四選項逐一代入或反算；正確項理由為「代入 -2 得 8-2-6=0。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "逐項驗根。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「下列哪一個數是 2x²+x-6=0 的根？」：獨立由原始條件重算：也可因式分解 (2x-3)(x+2)=0；根為 3/2、-2，選項中只有 -2。再逐項核對四個選項，只有「-2」同時符合方程式與限制；唯一正確選項。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "e614323999c0768ac1ac57cf00edab7635245bbb293e4cb9630d9330ccd5be40"
    },
    {
      "questionId": "u13-s010-v003",
      "unitId": "u13",
      "skillId": "quadratic-check-root",
      "contentSha256": "c14b0c974a1bebbca84caa5485df2e4251846a8df6846f450c7ac46d6ad06b04",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：左式三項逐一計算；負數平方為正 9，一次項為 -12",
      "derivedAnswer": "是",
      "storedAnswer": "是",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「x=-3 是否為 x²+4x+3=0 的根？」的要求量已明示為「驗證負數根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：候選值為 -3。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：括號必須清楚。",
        "choices": "四選項逐一代入或反算；正確項理由為「(-3)²+4(-3)+3=9-12+3=0。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "負數代入陷阱。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「x=-3 是否為 x²+4x+3=0 的根？」：獨立由原始條件重算：左式三項逐一計算；負數平方為正 9，一次項為 -12。再逐項核對四個選項，只有「是」同時符合方程式與限制；括號必須清楚。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "2f0da6328c8780605e15e6aec0eea1ca822925095534f8cba95f3c544998e019"
    },
    {
      "questionId": "u13-s010-v004",
      "unitId": "u13",
      "skillId": "quadratic-check-root",
      "contentSha256": "a53c701e2028f47eeab2e05970d1a51d92028bb908d3f81befb7af5920d28394",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：因式分解確認根集合 {1,4}；二次方程式恰有這兩根",
      "derivedAnswer": "兩個都是根",
      "storedAnswer": "兩個都是根",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「某同學說 x=1、x=4 是 x²-5x+4=0 的根。檢查結果為何？」的要求量已明示為「檢查一組聲稱的解」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：需逐根驗證。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：兩根數值不同且均成立。",
        "choices": "四選項逐一代入或反算；正確項理由為「代入 1 得 0，代入 4 也得 0。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "多候選驗證。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「某同學說 x=1、x=4 是 x²-5x+4=0 的根。檢查結果為何？」：獨立由原始條件重算：因式分解確認根集合 {1,4}；二次方程式恰有這兩根。再逐項核對四個選項，只有「兩個都是根」同時符合方程式與限制；兩根數值不同且均成立。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "a6550912a087649d9004456339125fae75a7c2e104d434161e02ac8f7beb7b2a"
    },
    {
      "questionId": "u13-s010-v005",
      "unitId": "u13",
      "skillId": "quadratic-check-root",
      "contentSha256": "0750a1c1b151b1ea283151218486870fb30bec986feae61387dd88ec7f4ef90e",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：移項 x(x-7)=0；零乘積直接顯示 x=0 是根",
      "derivedAnswer": "是",
      "storedAnswer": "是",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「x=0 是否為 x²=7x 的根？」的要求量已明示為「驗證零根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：原式左右形式。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：0 可合法代入。",
        "choices": "四選項逐一代入或反算；正確項理由為「左右兩邊代入 0 都等於 0。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "驗根與漏根觀念連結。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「x=0 是否為 x²=7x 的根？」：獨立由原始條件重算：移項 x(x-7)=0；零乘積直接顯示 x=0 是根。再逐項核對四個選項，只有「是」同時符合方程式與限制；0 可合法代入。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "6caff1a4d78bf3ef0b50409a423906a4fd1d0e3b9a7b0109ccaa7d2e41b175e5"
    },
    {
      "questionId": "u13-s010-v006",
      "unitId": "u13",
      "skillId": "quadratic-check-root",
      "contentSha256": "c0f6108f13b4d1116617ad9fb1956e07062c00b5aea188d8e59d262950ecdded",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：分別算平方 4、一次項 -6、常數 -10；總和 -12，所以候選失敗",
      "derivedAnswer": "(-2)²+3(-2)-10=-12，所以不是",
      "storedAnswer": "(-2)²+3(-2)-10=-12，所以不是",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「檢查 x=-2 是否為 x²+3x-10=0 的根，正確計算為何？」的要求量已明示為「選出正確驗根過程」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：標準式根需左式 0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：結論與過程都需正確。",
        "choices": "四選項逐一代入或反算；正確項理由為「完整代入結果 -12 不為 0。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "評析計算過程。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「檢查 x=-2 是否為 x²+3x-10=0 的根，正確計算為何？」：獨立由原始條件重算：分別算平方 4、一次項 -6、常數 -10；總和 -12，所以候選失敗。再逐項核對四個選項，只有「(-2)²+3(-2)-10=-12，所以不是」同時符合方程式與限制；結論與過程都需正確。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "cca68fdaaac653c83ea538116d58f77d13cfce35df203f843f2dc5bc94e1ad5e"
    },
    {
      "questionId": "u13-s010-v007",
      "unitId": "u13",
      "skillId": "quadratic-check-root",
      "contentSha256": "c2e59a09b461e1f12ab6a1f2edf6e9d077cbcd5f2aa4eb4d06b277a6938a5823",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：以 k=1 驗證 9+3-12=0；因此條件成立且參數唯一",
      "derivedAnswer": "1",
      "storedAnswer": "1",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「若 x=3 是 x²+kx-12=0 的根，k 為何？」的要求量已明示為「由已知根反求參數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：x=3 必須精確成立。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：k 為實數。",
        "choices": "四選項逐一代入或反算；正確項理由為「代入得 9+3k-12=0。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "逆向驗根參數題。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「若 x=3 是 x²+kx-12=0 的根，k 為何？」：獨立由原始條件重算：以 k=1 驗證 9+3-12=0；因此條件成立且參數唯一。再逐項核對四個選項，只有「1」同時符合方程式與限制；k 為實數。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "1f2b2a68de6f8254a4509674b5d307ac8ebde8f686a931d879010d94a322031f"
    },
    {
      "questionId": "u13-s010-v008",
      "unitId": "u13",
      "skillId": "quadratic-check-root",
      "contentSha256": "2fe814ddf0a51a162841d00d43ce77b0e8cfc6829c66eb782b2267e576e8d068",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：-2m=-2，所以 m=1；代回原式 8-2-6=0",
      "derivedAnswer": "1",
      "storedAnswer": "1",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「若 x=-2 是 2x²+mx-6=0 的根，m 為何？」的要求量已明示為「由負根反求參數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：候選根精確。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：m 唯一。",
        "choices": "四選項逐一代入或反算；正確項理由為「代入得 8-2m-6=0，故 m=1。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "負值代入與參數。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「若 x=-2 是 2x²+mx-6=0 的根，m 為何？」：獨立由原始條件重算：-2m=-2，所以 m=1；代回原式 8-2-6=0。再逐項核對四個選項，只有「1」同時符合方程式與限制；m 唯一。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "b60a32be280bd56b1bba760140da8f4ab3cef58602a3a894215064fab45aace4"
    },
    {
      "questionId": "u13-s010-v009",
      "unitId": "u13",
      "skillId": "quadratic-check-root",
      "contentSha256": "5a9216f317aa42cd45a1abe71e329220292b2a15cc1b783e5bbc13eda0f161a1",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：由根組成 (x-2)(x+5)；展開為 x²+3x-10",
      "derivedAnswer": "x²+3x-10=0",
      "storedAnswer": "x²+3x-10=0",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「已知某方程式的候選根為 2、-5。下列哪個方程式可由代入確認兩者皆為根？」的要求量已明示為「從根驗證方程式」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：方程式首項係數固定為 1。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：兩候選都必須成立。",
        "choices": "四選項逐一代入或反算；正確項理由為「代入 2 與 -5 都得到 0。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "反向構造與代入交叉。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「已知某方程式的候選根為 2、-5。下列哪個方程式可由代入確認兩者皆為根？」：獨立由原始條件重算：由根組成 (x-2)(x+5)；展開為 x²+3x-10。再逐項核對四個選項，只有「x²+3x-10=0」同時符合方程式與限制；兩候選都必須成立。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "e0ea32e10ba417231d8f63bfd35f60410d5fb45a1bb330513b04bdbc0da56540"
    },
    {
      "questionId": "u13-s010-v010",
      "unitId": "u13",
      "skillId": "quadratic-check-root",
      "contentSha256": "831c01eafb8735fd3ac9efd28fd59b3e6e4d0714aea1c8864c8ac2f54b647cc7",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：16-36+20=0；因此建議值是模型根",
      "derivedAnswer": "通過，因為 16-36+20=0",
      "storedAnswer": "通過，因為 16-36+20=0",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「校正報告建議 t=4，模型為 t²-9t+20=0。此建議是否通過代入檢查？」的要求量已明示為「判斷校正建議是否有效」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：t 為模型參數。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：結果精確為 0。",
        "choices": "四選項逐一代入或反算；正確項理由為「完整代入結果為 0。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "t 沿用校正模型的時間單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "情境報告驗證。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為報告是否可採用取決於代入模型的精確結果。",
      "reviewerNote": "獨立重算「校正報告建議 t=4，模型為 t²-9t+20=0。此建議是否通過代入檢查？」：獨立由原始條件重算：16-36+20=0；因此建議值是模型根。再逐項核對四個選項，只有「通過，因為 16-36+20=0」同時符合方程式與限制；結果精確為 0。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "8cca146cb1f6e0957bd492ce0027dc9d48289de42e4346a3f4f54f47b67c0bd0"
    },
    {
      "questionId": "u13-s010-v011",
      "unitId": "u13",
      "skillId": "quadratic-check-root",
      "contentSha256": "0573f51bfc99e35f51b17f47fd523fbaec38867fcdcbf431a6490117ce53e64c",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：方程式分解為 (x+8)(x-3)=0；代數根完整，情境根唯一為 3",
      "derivedAnswer": "3",
      "storedAnswer": "3",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「包裝寬度模型為 x²+5x-24=0，候選值為 3 與 -8。若寬度必須為正，應採用哪個？」的要求量已明示為「區分驗根與情境篩選」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：x>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：先承認兩根代數成立，再排除 -8。",
        "choices": "四選項逐一代入或反算；正確項理由為「兩值都通過代數驗根，但只有 3 為正。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "x 是寬度，答案沿用題目長度單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "雙層檢查。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為包裝寬度正值限制使驗根後仍需第二次篩選。",
      "reviewerNote": "獨立重算「包裝寬度模型為 x²+5x-24=0，候選值為 3 與 -8。若寬度必須為正，應採用哪個？」：獨立由原始條件重算：方程式分解為 (x+8)(x-3)=0；代數根完整，情境根唯一為 3。再逐項核對四個選項，只有「3」同時符合方程式與限制；先承認兩根代數成立，再排除 -8。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "da397c121aa1de99f51b2f06d0c39c467c2ea18f49e31cc5d5d901b4a8b10286"
    },
    {
      "questionId": "u13-s010-v012",
      "unitId": "u13",
      "skillId": "quadratic-check-root",
      "contentSha256": "3542e97cea2b6bb6a78228e087186363bf63407535168b789a62cf2b342a7d49",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：因式分解直接顯示完整解集 {2,3}；報告未漏根也未多列",
      "derivedAnswer": "報告正確，兩值代入皆為 0",
      "storedAnswer": "報告正確，兩值代入皆為 0",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「一份解題報告列 x=2、x=3 為 x²-5x+6=0 的根。審核結論為何？」的要求量已明示為「審核解集的正確與完整」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：報告聲稱兩個根。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：逐一驗證並確認二次最多兩根。",
        "choices": "四選項逐一代入或反算；正確項理由為「方程式為 (x-2)(x-3)=0。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "完整解集稽核。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為解題報告的可信度需由逐根代入與完整性共同確認。",
      "reviewerNote": "獨立重算「一份解題報告列 x=2、x=3 為 x²-5x+6=0 的根。審核結論為何？」：獨立由原始條件重算：因式分解直接顯示完整解集 {2,3}；報告未漏根也未多列。再逐項核對四個選項，只有「報告正確，兩值代入皆為 0」同時符合方程式與限制；逐一驗證並確認二次最多兩根。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "c056aff5d02f99980cf4b0dfe1a5473946892e59d829ebe9b27d7101fd301f2d"
    }
  ],
  "drawingSpecs": []
};
