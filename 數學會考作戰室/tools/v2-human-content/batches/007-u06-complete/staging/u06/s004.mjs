// Deterministically serialized reviewed U06 content. Do not edit.
export default {
  "lecture": {
    "lectureId": "u06-s004-lecture-r1",
    "unitId": "u06",
    "numericUnitId": 6,
    "topicId": "u06-ratio-basics",
    "skillId": "proportion-property",
    "lockedSkillTitle": "比例式性質",
    "title": "比例式性質：乘積不變與合法變形",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "unitTitle": "比例式",
      "topicTitle": "比與比例式基礎",
      "skillOrder": 4,
      "lockedPrerequisiteSkillIds": [
        "ratio-part-total"
      ],
      "capBoundary": "使用國中比例式的交叉乘積、倒比與和比等可由代數驗證的變形；不延伸至高中的複雜比例定理。"
    },
    "prerequisiteBridge": "已會解 a:b=c:d。現在不只求單一未知數，而是理解哪些變形必然保留等值，哪些只是看起來對稱卻不成立。",
    "learningOutcomes": [
      "能由 a:b=c:d 推得 ad=bc，反向使用時確認分母非零。",
      "能判斷同時倒比、交換內項等合法變形。",
      "能證明 (a+b):b=(c+d):d 等和比性質。",
      "能用反例辨認只改一邊或亂加減的錯誤。"
    ],
    "glossary": [
      {
        "term": "外項乘積",
        "definition": "a:b=c:d 中 a×d。"
      },
      {
        "term": "內項乘積",
        "definition": "a:b=c:d 中 b×c。"
      },
      {
        "term": "倒比",
        "definition": "同時交換每個比的前項與後項。"
      },
      {
        "term": "和比",
        "definition": "由原比例把前後項的和與其中一項比較，例如 (a+b):b。"
      }
    ],
    "notation": [
      {
        "symbol": "a:b=c:d",
        "meaning": "a/b=c/d，b、d≠0。"
      },
      {
        "symbol": "b:a=d:c",
        "meaning": "原比例兩邊同時倒比，需 a、c≠0。"
      },
      {
        "symbol": "(a+b):b=(c+d):d",
        "meaning": "兩邊都把 1 加到原比值上所得的和比。"
      }
    ],
    "conceptNarrative": [
      "比例式的核心是同一比值 k。若 a/b=c/d=k，則 a=kb、c=kd。",
      "外項乘積等於內項乘積可用來判斷四個數能否排成比例，也可求未知數。",
      "兩邊同時倒數會保留相等，但若原分子為 0，倒比會出現 0 作後項，必須額外限制。",
      "和比性質不是把四項任意相加，而是兩邊做同一代數操作：a/b+1=c/d+1。",
      "只交換一個比、只在一邊加數或交叉相加，都沒有一般保證。"
    ],
    "formalDefinitions": [
      {
        "name": "比例式基本性質",
        "statement": "當 b、d≠0 時，a:b=c:d 當且僅當 ad=bc。"
      },
      {
        "name": "合法比例變形",
        "statement": "由等式兩邊進行同一可逆運算，且不破壞分母非零條件所得的比例。"
      }
    ],
    "formulas": [
      {
        "formula": "a:b=c:d ⇒ ad=bc",
        "conditions": [
          "b≠0",
          "d≠0"
        ],
        "meaning": "外項積等於內項積。"
      },
      {
        "formula": "a:b=c:d ⇒ b:a=d:c",
        "conditions": [
          "a≠0",
          "b≠0",
          "c≠0",
          "d≠0"
        ],
        "meaning": "同時倒比。"
      },
      {
        "formula": "a:b=c:d ⇒ (a+b):b=(c+d):d",
        "conditions": [
          "b≠0",
          "d≠0"
        ],
        "meaning": "和比性質。"
      }
    ],
    "nonApplicableCases": [
      "只把左邊 a:b 倒成 b:a，右邊不變。",
      "由 a/b=c/d 推成 (a+c)/(b+d)=a/b 雖有時成立，但不能在未檢查分母與結構下機械套用。",
      "原分子為 0 時直接倒比會使後項為 0。",
      "交叉乘積相等但原比例分母為 0，仍不能宣稱原比例有定義。",
      "把 a:b=c:d 誤推成 a+c=b+d。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "先寫所有後項非零條件。",
        "check": "變形後是否出現新的後項？"
      },
      {
        "step": 2,
        "instruction": "把比例式改寫成分數等式或共同比值 k。",
        "check": "每項角色是否清楚？"
      },
      {
        "step": 3,
        "instruction": "對等式兩邊做相同運算。",
        "check": "倒數、加 1 或乘除是否兩邊同步？"
      },
      {
        "step": 4,
        "instruction": "還原成比的形式。",
        "check": "新比例的順序與分母是否合法？"
      },
      {
        "step": 5,
        "instruction": "可用一組具體數代入反查。",
        "check": "若命題宣稱必然成立，是否能被反例推翻？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "已知 6:9=10:15，驗證乘積性質。",
        "solutionSteps": [
          "外項積 6×15=90。",
          "內項積 9×10=90，兩者相等。"
        ],
        "answer": "比例式符合基本性質。"
      },
      {
        "exampleId": "L2",
        "prompt": "若 a:b=3:4，求 (a+b):b。",
        "solutionSteps": [
          "令 a=3k、b=4k。",
          "(a+b):b=7k:4k=7:4。"
        ],
        "answer": "7:4。"
      },
      {
        "exampleId": "L3",
        "prompt": "由 2:5=8:20 寫出同時倒比。",
        "solutionSteps": [
          "兩邊前後項同時交換。",
          "得到 5:2=20:8，兩邊比值皆 2.5。"
        ],
        "answer": "5:2=20:8。"
      },
      {
        "exampleId": "L4",
        "prompt": "已知 a:b=c:d=2:7，求 (b-a):b。",
        "solutionSteps": [
          "令 a=2k、b=7k。",
          "(b-a):b=5k:7k=5:7。"
        ],
        "answer": "5:7。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "外項認成 a、c。",
        "why": "只看同一列位置。",
        "correction": "a、d 在比例式兩端，才是外項。"
      },
      {
        "mistake": "只倒左比。",
        "why": "沒有對等式兩邊做相同操作。",
        "correction": "左右兩比同步倒比。"
      },
      {
        "mistake": "0:3=0:5 後寫 3:0=5:0。",
        "why": "倒比後後項為 0。",
        "correction": "倒比需原前項非零。"
      },
      {
        "mistake": "由 a:b=c:d 推 a+b=c+d。",
        "why": "比例相同不代表總量相同。",
        "correction": "令 a=kb、c=kd 檢查。"
      },
      {
        "mistake": "和比時寫 (a+b):a=(c+d):d。",
        "why": "左右分母角色不一致。",
        "correction": "同一變形應對應相同位置。"
      },
      {
        "mistake": "只看交叉積，忽略原後項為 0。",
        "why": "乘積等式可能有意義，但比例式本身沒有。",
        "correction": "先檢查定義域。"
      }
    ],
    "selfCheck": [
      "原比例與新比例的後項都非零嗎？",
      "外項與內項辨認正確嗎？",
      "運算是否同步作用在等式兩邊？",
      "可以用共同比值 k 證明嗎？",
      "隨機代入等值比能通過嗎？"
    ],
    "summary": [
      "比例式的基本性質是 ad=bc，但分母非零不可省略。",
      "同時倒比與和比可由等式同操作證明。",
      "任何變形都要保持對應順序與定義域。",
      "可用共同比值 k 或具體反例檢查命題。"
    ],
    "connections": {
      "previous": "由部分量模型理解 a=mk、b=nk。",
      "next": [
        "正比可視為 y:x 固定。",
        "反比則改為 xy 固定。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u06-s004-v001",
        "u06-s004-v002",
        "u06-s004-v003",
        "u06-s004-v004",
        "u06-s004-v005",
        "u06-s004-v006",
        "u06-s004-v007",
        "u06-s004-v008",
        "u06-s004-v009",
        "u06-s004-v010",
        "u06-s004-v011",
        "u06-s004-v012"
      ],
      "constructedResponseIds": [
        "u06-s004-cr001",
        "u06-s004-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "contentAuthorityConfirmed": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐式以共同比值 k 與具體數 2:5=8:20 雙重驗證倒比、和比與差比；另檢查 0 作原分子時倒比失效，避免把交叉乘積條件誤當成無條件定義。",
      "reviewVersion": "human-lecture-review-u06-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "9cf201d81b909fc6364b94ee239622960a1e9fa0d458504a92e994f9dc8134ec"
  },
  "mcQuestions": [
    {
      "questionId": "u06-s004-v001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "若 3:5=12:20，外項乘積是多少？",
      "text": "若 3:5=12:20，外項乘積是多少？",
      "givenConditions": "後項5、20非0。",
      "target": "辨認外項乘積",
      "choices": [
        "36",
        "100",
        "240",
        "60"
      ],
      "answerIndex": 3,
      "independentSolution": "內項5×12也等於60，交叉驗證。",
      "mainExplanation": "比例式兩端的3、20是外項。",
      "explanation": "比例式兩端的3、20是外項。",
      "steps": [
        "辨認外項3與20",
        "相乘得60"
      ],
      "optionAnalysis": [
        {
          "choice": "36",
          "truth": false,
          "reason": "36是3×12。"
        },
        {
          "choice": "100",
          "truth": false,
          "reason": "100是5×20。"
        },
        {
          "choice": "240",
          "truth": false,
          "reason": "240是12×20。"
        },
        {
          "choice": "60",
          "truth": true,
          "reason": "外項為3與20，乘積3×20=60。"
        }
      ],
      "misconceptionTarget": "把同側兩數誤認為外項。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 50,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "外項定義唯一。",
      "difficultyReason": "基本名詞與計算。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "033b77958d8366ba23eba5cfe4a9cb5a4a669a56ba5d4b845b07efc07f471758"
    },
    {
      "questionId": "u06-s004-v002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "下列哪一個比例式成立？",
      "text": "下列哪一個比例式成立？",
      "givenConditions": "各後項皆非0。",
      "target": "用乘積性質判比例",
      "choices": [
        "4:6=10:15",
        "2:3=8:15",
        "5:7=15:20",
        "6:9=14:18"
      ],
      "answerIndex": 0,
      "independentSolution": "4/6=2/3，10/15=2/3。",
      "mainExplanation": "用外項積等於內項積逐一檢查。",
      "explanation": "用外項積等於內項積逐一檢查。",
      "steps": [
        "檢查四個交叉積",
        "只有4:6=10:15相等"
      ],
      "optionAnalysis": [
        {
          "choice": "4:6=10:15",
          "truth": true,
          "reason": "4×15=60，6×10=60。"
        },
        {
          "choice": "2:3=8:15",
          "truth": false,
          "reason": "2×15=30但3×8=24。"
        },
        {
          "choice": "5:7=15:20",
          "truth": false,
          "reason": "5×20=100但7×15=105。"
        },
        {
          "choice": "6:9=14:18",
          "truth": false,
          "reason": "6×18=108但9×14=126。"
        }
      ],
      "misconceptionTarget": "只看數字大致成倍。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 75,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "四選項均有定義。",
      "difficultyReason": "需逐項驗證。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8db3d808ebe06006ce1f43bece1c7be813e3f02360e8a2c879dcf67b2e93941a"
    },
    {
      "questionId": "u06-s004-v003",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "若 a:b=2:7，則 (a+b):b 等於何者？",
      "text": "若 a:b=2:7，則 (a+b):b 等於何者？",
      "givenConditions": "b非0且份數正。",
      "target": "應用和比性質",
      "choices": [
        "2:9",
        "9:7",
        "7:9",
        "5:7"
      ],
      "answerIndex": 1,
      "independentSolution": "(a+b)/b=a/b+1=2/7+1=9/7。",
      "mainExplanation": "使用份數或兩邊比值加1。",
      "explanation": "使用份數或兩邊比值加1。",
      "steps": [
        "a=2k,b=7k",
        "a+b=9k",
        "得到9:7"
      ],
      "optionAnalysis": [
        {
          "choice": "2:9",
          "truth": false,
          "reason": "2:9是a:(a+b)。"
        },
        {
          "choice": "9:7",
          "truth": true,
          "reason": "令a=2k、b=7k，(a+b):b=9k:7k=9:7。"
        },
        {
          "choice": "7:9",
          "truth": false,
          "reason": "7:9是b:(a+b)。"
        },
        {
          "choice": "5:7",
          "truth": false,
          "reason": "5:7錯把相加當相減。"
        }
      ],
      "misconceptionTarget": "把所求順序看錯。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 70,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "所求明確為和對b。",
      "difficultyReason": "基礎合法變形。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1efb68abf6d5df19fa667a40cdcbd97cb4735fce2f4ba8b33431ac09acd2da32"
    },
    {
      "questionId": "u06-s004-v004",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "已知 a:b=c:d，且 a、b、c、d 均非 0。下列哪一式必成立？",
      "text": "已知 a:b=c:d，且 a、b、c、d 均非 0。下列哪一式必成立？",
      "givenConditions": "四項均非0，倒比有定義。",
      "target": "判斷必然成立的比例變形",
      "choices": [
        "a:c=b:d",
        "a+b=c+d",
        "b:a=d:c",
        "a-b=c-d"
      ],
      "answerIndex": 2,
      "independentSolution": "令a=2,b=3,c=4,d=6驗證正確式；其餘不必成立。",
      "mainExplanation": "由a/b=c/d取倒數得b/a=d/c。",
      "explanation": "由a/b=c/d取倒數得b/a=d/c。",
      "steps": [
        "所有項非0可取倒數",
        "得到b:a=d:c"
      ],
      "optionAnalysis": [
        {
          "choice": "a:c=b:d",
          "truth": false,
          "reason": "a:c=b:d 並非由原式一般推出。"
        },
        {
          "choice": "a+b=c+d",
          "truth": false,
          "reason": "相同比值不代表兩組總量相等。"
        },
        {
          "choice": "b:a=d:c",
          "truth": true,
          "reason": "原比例兩邊同時倒比，仍相等。"
        },
        {
          "choice": "a-b=c-d",
          "truth": false,
          "reason": "相同比值不代表差相等。"
        }
      ],
      "misconceptionTarget": "把比例相等誤認為各項可任意配對。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "題幹明示非0排除倒比定義問題。",
      "difficultyReason": "需要理解條件而非只算數字。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "367a1b60750c39efca0d619d06b2c6434ac95c4afda72b844a5ec130cf93a80b"
    },
    {
      "questionId": "u06-s004-v005",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "若 6:x=9:15，利用比例式性質求 x。",
      "text": "若 6:x=9:15，利用比例式性質求 x。",
      "givenConditions": "x≠0。",
      "target": "用基本性質求未知數",
      "choices": [
        "10",
        "4",
        "12",
        "22.5"
      ],
      "answerIndex": 0,
      "independentSolution": "6:10=3:5，9:15=3:5。",
      "mainExplanation": "由外項積等於內項積求未知數。",
      "explanation": "由外項積等於內項積求未知數。",
      "steps": [
        "90=9x",
        "x=10"
      ],
      "optionAnalysis": [
        {
          "choice": "10",
          "truth": true,
          "reason": "外項積6×15=90，內項積9x，所以x=10。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "4把15-9當倍率。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "12把6+6。"
        },
        {
          "choice": "22.5",
          "truth": false,
          "reason": "22.5把90÷4。"
        }
      ],
      "misconceptionTarget": "外內項辨認錯誤。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 70,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "正解不違反後項非0。",
      "difficultyReason": "標準交叉乘積。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "208aa649c733ed1f96122f383700c26f674bc1dc92fc0a971ccfab1eeb169142"
    },
    {
      "questionId": "u06-s004-v006",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "若 a:b=3:8，則 (b-a):b 為何？",
      "text": "若 a:b=3:8，則 (b-a):b 為何？",
      "givenConditions": "b非0且b>a。",
      "target": "應用差比性質",
      "choices": [
        "3:5",
        "5:8",
        "5:3",
        "11:8"
      ],
      "answerIndex": 1,
      "independentSolution": "(b-a)/b=1-a/b=1-3/8=5/8。",
      "mainExplanation": "差比使用同一份量，8k-3k=5k。",
      "explanation": "差比使用同一份量，8k-3k=5k。",
      "steps": [
        "a=3k,b=8k",
        "b-a=5k",
        "比5:8"
      ],
      "optionAnalysis": [
        {
          "choice": "3:5",
          "truth": false,
          "reason": "3:5是a:(b-a)。"
        },
        {
          "choice": "5:8",
          "truth": true,
          "reason": "令a=3k、b=8k，b-a=5k。"
        },
        {
          "choice": "5:3",
          "truth": false,
          "reason": "5:3是(b-a):a。"
        },
        {
          "choice": "11:8",
          "truth": false,
          "reason": "11:8是和比。"
        }
      ],
      "misconceptionTarget": "把差比與和比混淆。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 85,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "因3<8，差為正。",
      "difficultyReason": "需正確判讀代數表達。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "763dc93c45bce2f450f8c3a54f1965cb2fdf8de49217e53a240f2ca41191cb04"
    },
    {
      "questionId": "u06-s004-v007",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "若 a:b=c:d 且 b、d≠0，以下推論何者不一定成立？",
      "text": "若 a:b=c:d 且 b、d≠0，以下推論何者不一定成立？",
      "givenConditions": "各選項附帶必要非0條件。",
      "target": "辨認不成立的推論",
      "choices": [
        "ad=bc",
        "(a+b):b=(c+d):d",
        "a+c=b+d",
        "a:c=b:d（當c、d非0）"
      ],
      "answerIndex": 2,
      "independentSolution": "反例足以證明『不一定』。",
      "mainExplanation": "用反例2:3=4:6，但2+4=6、3+6=9，不相等。",
      "explanation": "用反例2:3=4:6，但2+4=6、3+6=9，不相等。",
      "steps": [
        "選取等值比2:3=4:6",
        "檢查各推論",
        "總和等式失敗"
      ],
      "optionAnalysis": [
        {
          "choice": "ad=bc",
          "truth": false,
          "reason": "ad=bc是基本性質。"
        },
        {
          "choice": "(a+b):b=(c+d):d",
          "truth": false,
          "reason": "兩邊比值同加1，必成立。"
        },
        {
          "choice": "a+c=b+d",
          "truth": true,
          "reason": "比例相同不保證兩組總和相等。"
        },
        {
          "choice": "a:c=b:d（當c、d非0）",
          "truth": false,
          "reason": "由ad=bc可重排為a/c=b/d，需c、d非0。"
        }
      ],
      "misconceptionTarget": "把比例相等誤解成和相等。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 120,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "題目問不一定成立，只有一個反例型選項。",
      "difficultyReason": "需要反例與條件審查。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1bdf4567346b549f283708e9966a32da6e483e5c834b10c3081d45180eaf0bd9"
    },
    {
      "questionId": "u06-s004-v008",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "已知 a:b=4:9，且 a+b=52。下列哪個等式可直接用來求 b？",
      "text": "已知 a:b=4:9，且 a+b=52。下列哪個等式可直接用來求 b？",
      "givenConditions": "a、b為正且b非0。",
      "target": "結合比例性質與總和",
      "choices": [
        "4(52-b)=9b",
        "b=52×4/9",
        "4+b=9+52",
        "4b=9(52-b)"
      ],
      "answerIndex": 3,
      "independentSolution": "解得468-9b=4b，b=36，a=16，比例4:9。",
      "mainExplanation": "把總和條件轉成a=52-b，再用交叉乘積。",
      "explanation": "把總和條件轉成a=52-b，再用交叉乘積。",
      "steps": [
        "a=52-b",
        "(52-b):b=4:9",
        "9(52-b)=4b"
      ],
      "optionAnalysis": [
        {
          "choice": "4(52-b)=9b",
          "truth": false,
          "reason": "此式把4與9位置對調。"
        },
        {
          "choice": "b=52×4/9",
          "truth": false,
          "reason": "52不是a，不能直接乘4/9。"
        },
        {
          "choice": "4+b=9+52",
          "truth": false,
          "reason": "比例不給和的加法等式。"
        },
        {
          "choice": "4b=9(52-b)",
          "truth": true,
          "reason": "a=52-b，代入a:b=4:9得(52-b)/b=4/9，故9(52-b)=4b。"
        }
      ],
      "misconceptionTarget": "代入總和時把a、b對應顛倒。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 130,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "正確式與4b=9(52-b)只差等式左右交換。",
      "difficultyReason": "高階建模式選擇。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "80616999a3b54eb4cfe6524c90d655730e4fc3e3273c3de5734e93aa59307389"
    },
    {
      "questionId": "u06-s004-v009",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "若正數 x:y=5:12，且 xy=540，則 x+y 為何？",
      "text": "若正數 x:y=5:12，且 xy=540，則 x+y 為何？",
      "givenConditions": "x、y明示為正數。",
      "target": "比例與乘積的複合推理",
      "choices": [
        "17",
        "51",
        "34",
        "68"
      ],
      "answerIndex": 1,
      "independentSolution": "15×36=540，且15:36=5:12，和51。",
      "mainExplanation": "比例給共同倍數，乘積再決定k；正值條件選k=3。",
      "explanation": "比例給共同倍數，乘積再決定k；正值條件選k=3。",
      "steps": [
        "x=5k,y=12k",
        "60k²=540",
        "k=3",
        "x+y=51"
      ],
      "optionAnalysis": [
        {
          "choice": "17",
          "truth": false,
          "reason": "17是5+12未乘k。"
        },
        {
          "choice": "51",
          "truth": true,
          "reason": "令x=5k、y=12k，60k²=540，k²=9；正數故k=3，和51。"
        },
        {
          "choice": "34",
          "truth": false,
          "reason": "34是k=2。"
        },
        {
          "choice": "68",
          "truth": false,
          "reason": "68是k=4。"
        }
      ],
      "misconceptionTarget": "忽略k平方或正值條件。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 140,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "正數條件排除k=-3。",
      "difficultyReason": "需要兩條件決定倍數。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "cbd7e007fa9e6342c1edf20fdf3c2d889dd6ee0f2c0c11bac6965f908645aeb6"
    },
    {
      "questionId": "u06-s004-v010",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "某設計將長:寬固定為 16:9。若寬為 27 公分，長為多少？",
      "text": "某設計將長:寬固定為 16:9。若寬為 27 公分，長為多少？",
      "givenConditions": "長寬比例固定。",
      "target": "在螢幕比例情境使用性質",
      "choices": [
        "36公分",
        "43公分",
        "48公分",
        "54公分"
      ],
      "answerIndex": 2,
      "independentSolution": "48:27同除3得16:9。",
      "mainExplanation": "寬27是9的3倍，長16也乘3。",
      "explanation": "寬27是9的3倍，長16也乘3。",
      "steps": [
        "列16:9=x:27",
        "交叉相乘或倍率",
        "x=48"
      ],
      "optionAnalysis": [
        {
          "choice": "36公分",
          "truth": false,
          "reason": "36對應12:9。"
        },
        {
          "choice": "43公分",
          "truth": false,
          "reason": "43是錯誤加法。"
        },
        {
          "choice": "48公分",
          "truth": true,
          "reason": "16:9=x:27，9x=432，x=48。"
        },
        {
          "choice": "54公分",
          "truth": false,
          "reason": "54把27乘2。"
        }
      ],
      "misconceptionTarget": "把長寬順序顛倒。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 85,
      "unitCheck": "公分對公分。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "情境中長對長、寬對寬。",
      "difficultyReason": "需要維持對應方向。",
      "literacyContextNecessity": "16:9 的設計規格決定比例式排序，情境具有必要性。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c7b9d92087395b4c5dab85b1bc9d3854244bb6c84eb7502b38a2204b0b7fc4b3"
    },
    {
      "questionId": "u06-s004-v011",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "照片原長寬比 3:2。若長邊由 15 公分放大為 24 公分且不變形，短邊應為多少？",
      "text": "照片原長寬比 3:2。若長邊由 15 公分放大為 24 公分且不變形，短邊應為多少？",
      "givenConditions": "照片不裁切且不變形。",
      "target": "用等值比例維持形狀",
      "choices": [
        "10公分",
        "12公分",
        "18公分",
        "16公分"
      ],
      "answerIndex": 3,
      "independentSolution": "24:16=3:2。",
      "mainExplanation": "不變形表示長寬比保持3:2。",
      "explanation": "不變形表示長寬比保持3:2。",
      "steps": [
        "24:x=3:2",
        "3x=48",
        "x=16"
      ],
      "optionAnalysis": [
        {
          "choice": "10公分",
          "truth": false,
          "reason": "10是未放大。"
        },
        {
          "choice": "12公分",
          "truth": false,
          "reason": "12把24除2。"
        },
        {
          "choice": "18公分",
          "truth": false,
          "reason": "18把短邊當3/4長。"
        },
        {
          "choice": "16公分",
          "truth": true,
          "reason": "15:10=3:2；放大倍率24/15=1.6，短邊10×1.6=16。"
        }
      ],
      "misconceptionTarget": "只放大一邊或把比例倒置。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 95,
      "unitCheck": "公分。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "不變形是比例保持的必要條件。",
      "difficultyReason": "生活中的相似縮放。",
      "literacyContextNecessity": "若刪除『不變形』便無法保證短邊按相同比例變化。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c20e0738905f7ba175c6f41284b63877dfd8e9f6b39a952ea6011464d077d66a"
    },
    {
      "questionId": "u06-s004-v012",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "某調飲標示濃縮液:水=2:7。先倒入 350 毫升水，應加入多少濃縮液？",
      "text": "某調飲標示濃縮液:水=2:7。先倒入 350 毫升水，應加入多少濃縮液？",
      "givenConditions": "350毫升是水，不是總飲料量。",
      "target": "用比例式依標示配方",
      "choices": [
        "100毫升",
        "50毫升",
        "140毫升",
        "175毫升"
      ],
      "answerIndex": 0,
      "independentSolution": "100:350同除50得2:7。",
      "mainExplanation": "水350對應7份，每份50，濃縮液2份100。",
      "explanation": "水350對應7份，每份50，濃縮液2份100。",
      "steps": [
        "350÷7=50",
        "50×2=100"
      ],
      "optionAnalysis": [
        {
          "choice": "100毫升",
          "truth": true,
          "reason": "2:7=x:350，7x=700，x=100。"
        },
        {
          "choice": "50毫升",
          "truth": false,
          "reason": "50把350÷7但未乘2。"
        },
        {
          "choice": "140毫升",
          "truth": false,
          "reason": "140使用2/5。"
        },
        {
          "choice": "175毫升",
          "truth": false,
          "reason": "175把水減半。"
        }
      ],
      "misconceptionTarget": "把總量與水量混淆。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "毫升。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "題幹明確指出水的量。",
      "difficultyReason": "配方語意判讀。",
      "literacyContextNecessity": "標示中的前後項角色決定350對應7份。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ecde2db1933cb8082064901ecc00ee2a8e38100acc11473a9788bcbd9706d2e9"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u06-s004-cr001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "已知 a:b=3:7，證明 (a+b):b=10:7。",
      "target": "證明和比性質",
      "requiredWork": [
        "以共同倍數或分數等式表示。",
        "完成合法變形。",
        "指出b不可為0。"
      ],
      "fullCreditSolution": [
        "因a:b=3:7，可令a=3k、b=7k，且k≠0。",
        "a+b=10k，所以(a+b):b=10k:7k=10:7。",
        "或由a/b=3/7，兩邊加1得(a+b)/b=10/7。"
      ],
      "alternativeSolutions": [
        "直接用和比性質，但須說明其來自兩邊同加1。"
      ],
      "reasoningSteps": [
        "因a:b=3:7，可令a=3k、b=7k，且k≠0。",
        "a+b=10k，所以(a+b):b=10k:7k=10:7。",
        "或由a/b=3/7，兩邊加1得(a+b)/b=10/7。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "用k或分數等式完整證明10:7並處理b≠0。"
        },
        {
          "score": 2,
          "criteria": "推導正確但未明說非零條件。"
        },
        {
          "score": 1,
          "criteria": "只代入一組具體數驗證，未證明一般情形。"
        },
        {
          "score": 0,
          "criteria": "把a+b寫成3+7的實際量而無共同倍數概念，或結論錯。"
        }
      ],
      "partialCreditRules": [
        "具體例子只能支持理解，不能作一般證明。",
        "使用k時不要求討論k的符號，只需比有定義。"
      ],
      "followThroughPolicy": "若設a=3k、b=7k正確但把10k:7k約錯，可給1分。",
      "unitNotationRules": "符號a、b需保持一致；比號或分數表示均可。",
      "answerOnlyPolicy": "只寫10:7最多1分。",
      "commonErrors": [
        "把a固定等於3。",
        "只加左邊比值。",
        "漏掉b非0。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "(a+b):b=10:7。",
        "ambiguity": "命題條件足以推出，無需知道a、b實值。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "19dbc403006fb511495e448be07d65cc0dd3927cee294ed4c2367c672684d08b"
    },
    {
      "questionId": "u06-s004-cr002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "判斷命題：若 a:b=c:d，則 a+c=b+d。若不一定成立，給一個反例並說明。",
      "target": "以反例審查比例推論",
      "requiredWork": [
        "判斷命題真假。",
        "給出有定義的比例反例。",
        "核對比例成立但結論失敗。"
      ],
      "fullCreditSolution": [
        "命題不一定成立。",
        "取a=2、b=3、c=4、d=6，則2:3=4:6。",
        "但a+c=6，而b+d=9，兩者不等，所以反例成立。"
      ],
      "alternativeSolutions": [
        "可選任何兩個等值但倍率不同的比，例如1:2=3:6。"
      ],
      "reasoningSteps": [
        "命題不一定成立。",
        "取a=2、b=3、c=4、d=6，則2:3=4:6。",
        "但a+c=6，而b+d=9，兩者不等，所以反例成立。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "明確判假，給有效反例並同時驗證比例與和不等。"
        },
        {
          "score": 2,
          "criteria": "反例有效但只驗證其中一項或說明略簡。"
        },
        {
          "score": 1,
          "criteria": "知道不一定成立，但反例數值有小錯或未完整核對。"
        },
        {
          "score": 0,
          "criteria": "判為必成立，或反例本身比例不成立。"
        }
      ],
      "partialCreditRules": [
        "反例後項不得為0。",
        "不同有效反例同等給分。"
      ],
      "followThroughPolicy": "若反例比例因單一算術筆誤未成立，但論述方法清楚，最多1分；若自行修正則依最終版本評分。",
      "unitNotationRules": "使用比號或分數皆可，需清楚指派a、b、c、d。",
      "answerOnlyPolicy": "只寫『不一定』最多1分。",
      "commonErrors": [
        "只驗證一組成立案例。",
        "反例後項為0。",
        "未檢查比例本身。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "命題為假；例2:3=4:6但6≠9。",
        "ambiguity": "反例充分且在比例式定義域內。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "a815411e12ff6e55ba67313c8de8814147eaa7c20219d9b13072abb3fc27fed2"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u06-s004-v001-semantic-review-r1",
      "questionId": "u06-s004-v001",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "033b77958d8366ba23eba5cfe4a9cb5a4a669a56ba5d4b845b07efc07f471758",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "內項5×12也等於60，交叉驗證。",
      "derivedAnswer": "60",
      "storedAnswer": "60",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "36是3×12。",
        "100是5×20。",
        "240是12×20。",
        "外項為3與20，乘積3×20=60。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「辨認外項乘積」，已明示必要條件：後項5、20非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：外項定義唯一。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "基本名詞與計算。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：內項5×12也等於60，交叉驗證。 正確選項為「60」。逐項檢查後，唯一為真的理由是「外項為3與20，乘積3×20=60。」；其餘三項分別因「36是3×12。」、「100是5×20。」、「240是12×20。」而排除。邊界與語意再檢查：外項定義唯一。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v002-semantic-review-r1",
      "questionId": "u06-s004-v002",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "8db3d808ebe06006ce1f43bece1c7be813e3f02360e8a2c879dcf67b2e93941a",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "4/6=2/3，10/15=2/3。",
      "derivedAnswer": "4:6=10:15",
      "storedAnswer": "4:6=10:15",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "4×15=60，6×10=60。",
        "2×15=30但3×8=24。",
        "5×20=100但7×15=105。",
        "6×18=108但9×14=126。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「用乘積性質判比例」，已明示必要條件：各後項皆非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：四選項均有定義。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "需逐項驗證。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：4/6=2/3，10/15=2/3。 正確選項為「4:6=10:15」。逐項檢查後，唯一為真的理由是「4×15=60，6×10=60。」；其餘三項分別因「2×15=30但3×8=24。」、「5×20=100但7×15=105。」、「6×18=108但9×14=126。」而排除。邊界與語意再檢查：四選項均有定義。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v003-semantic-review-r1",
      "questionId": "u06-s004-v003",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "1efb68abf6d5df19fa667a40cdcbd97cb4735fce2f4ba8b33431ac09acd2da32",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(a+b)/b=a/b+1=2/7+1=9/7。",
      "derivedAnswer": "9:7",
      "storedAnswer": "9:7",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "2:9是a:(a+b)。",
        "令a=2k、b=7k，(a+b):b=9k:7k=9:7。",
        "7:9是b:(a+b)。",
        "5:7錯把相加當相減。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「應用和比性質」，已明示必要條件：b非0且份數正。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：所求明確為和對b。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "基礎合法變形。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：(a+b)/b=a/b+1=2/7+1=9/7。 正確選項為「9:7」。逐項檢查後，唯一為真的理由是「令a=2k、b=7k，(a+b):b=9k:7k=9:7。」；其餘三項分別因「2:9是a:(a+b)。」、「7:9是b:(a+b)。」、「5:7錯把相加當相減。」而排除。邊界與語意再檢查：所求明確為和對b。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v004-semantic-review-r1",
      "questionId": "u06-s004-v004",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "367a1b60750c39efca0d619d06b2c6434ac95c4afda72b844a5ec130cf93a80b",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "令a=2,b=3,c=4,d=6驗證正確式；其餘不必成立。",
      "derivedAnswer": "b:a=d:c",
      "storedAnswer": "b:a=d:c",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "a:c=b:d 並非由原式一般推出。",
        "相同比值不代表兩組總量相等。",
        "原比例兩邊同時倒比，仍相等。",
        "相同比值不代表差相等。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「判斷必然成立的比例變形」，已明示必要條件：四項均非0，倒比有定義。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題幹明示非0排除倒比定義問題。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "需要理解條件而非只算數字。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：令a=2,b=3,c=4,d=6驗證正確式；其餘不必成立。 正確選項為「b:a=d:c」。逐項檢查後，唯一為真的理由是「原比例兩邊同時倒比，仍相等。」；其餘三項分別因「a:c=b:d 並非由原式一般推出。」、「相同比值不代表兩組總量相等。」、「相同比值不代表差相等。」而排除。邊界與語意再檢查：題幹明示非0排除倒比定義問題。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v005-semantic-review-r1",
      "questionId": "u06-s004-v005",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "208aa649c733ed1f96122f383700c26f674bc1dc92fc0a971ccfab1eeb169142",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "6:10=3:5，9:15=3:5。",
      "derivedAnswer": "10",
      "storedAnswer": "10",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "外項積6×15=90，內項積9x，所以x=10。",
        "4把15-9當倍率。",
        "12把6+6。",
        "22.5把90÷4。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「用基本性質求未知數」，已明示必要條件：x≠0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：正解不違反後項非0。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "標準交叉乘積。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：6:10=3:5，9:15=3:5。 正確選項為「10」。逐項檢查後，唯一為真的理由是「外項積6×15=90，內項積9x，所以x=10。」；其餘三項分別因「4把15-9當倍率。」、「12把6+6。」、「22.5把90÷4。」而排除。邊界與語意再檢查：正解不違反後項非0。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v006-semantic-review-r1",
      "questionId": "u06-s004-v006",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "763dc93c45bce2f450f8c3a54f1965cb2fdf8de49217e53a240f2ca41191cb04",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(b-a)/b=1-a/b=1-3/8=5/8。",
      "derivedAnswer": "5:8",
      "storedAnswer": "5:8",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "3:5是a:(b-a)。",
        "令a=3k、b=8k，b-a=5k。",
        "5:3是(b-a):a。",
        "11:8是和比。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「應用差比性質」，已明示必要條件：b非0且b>a。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：因3<8，差為正。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "需正確判讀代數表達。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：(b-a)/b=1-a/b=1-3/8=5/8。 正確選項為「5:8」。逐項檢查後，唯一為真的理由是「令a=3k、b=8k，b-a=5k。」；其餘三項分別因「3:5是a:(b-a)。」、「5:3是(b-a):a。」、「11:8是和比。」而排除。邊界與語意再檢查：因3<8，差為正。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v007-semantic-review-r1",
      "questionId": "u06-s004-v007",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "1bdf4567346b549f283708e9966a32da6e483e5c834b10c3081d45180eaf0bd9",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "反例足以證明『不一定』。",
      "derivedAnswer": "a+c=b+d",
      "storedAnswer": "a+c=b+d",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "ad=bc是基本性質。",
        "兩邊比值同加1，必成立。",
        "比例相同不保證兩組總和相等。",
        "由ad=bc可重排為a/c=b/d，需c、d非0。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「辨認不成立的推論」，已明示必要條件：各選項附帶必要非0條件。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題目問不一定成立，只有一個反例型選項。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "需要反例與條件審查。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：反例足以證明『不一定』。 正確選項為「a+c=b+d」。逐項檢查後，唯一為真的理由是「比例相同不保證兩組總和相等。」；其餘三項分別因「ad=bc是基本性質。」、「兩邊比值同加1，必成立。」、「由ad=bc可重排為a/c=b/d，需c、d非0。」而排除。邊界與語意再檢查：題目問不一定成立，只有一個反例型選項。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v008-semantic-review-r1",
      "questionId": "u06-s004-v008",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "80616999a3b54eb4cfe6524c90d655730e4fc3e3273c3de5734e93aa59307389",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "解得468-9b=4b，b=36，a=16，比例4:9。",
      "derivedAnswer": "4b=9(52-b)",
      "storedAnswer": "4b=9(52-b)",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "此式把4與9位置對調。",
        "52不是a，不能直接乘4/9。",
        "比例不給和的加法等式。",
        "a=52-b，代入a:b=4:9得(52-b)/b=4/9，故9(52-b)=4b。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「結合比例性質與總和」，已明示必要條件：a、b為正且b非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：正確式與4b=9(52-b)只差等式左右交換。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "高階建模式選擇。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：解得468-9b=4b，b=36，a=16，比例4:9。 正確選項為「4b=9(52-b)」。逐項檢查後，唯一為真的理由是「a=52-b，代入a:b=4:9得(52-b)/b=4/9，故9(52-b)=4b。」；其餘三項分別因「此式把4與9位置對調。」、「52不是a，不能直接乘4/9。」、「比例不給和的加法等式。」而排除。邊界與語意再檢查：正確式與4b=9(52-b)只差等式左右交換。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v009-semantic-review-r1",
      "questionId": "u06-s004-v009",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "cbd7e007fa9e6342c1edf20fdf3c2d889dd6ee0f2c0c11bac6965f908645aeb6",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "15×36=540，且15:36=5:12，和51。",
      "derivedAnswer": "51",
      "storedAnswer": "51",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "17是5+12未乘k。",
        "令x=5k、y=12k，60k²=540，k²=9；正數故k=3，和51。",
        "34是k=2。",
        "68是k=4。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「比例與乘積的複合推理」，已明示必要條件：x、y明示為正數。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：正數條件排除k=-3。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "需要兩條件決定倍數。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：15×36=540，且15:36=5:12，和51。 正確選項為「51」。逐項檢查後，唯一為真的理由是「令x=5k、y=12k，60k²=540，k²=9；正數故k=3，和51。」；其餘三項分別因「17是5+12未乘k。」、「34是k=2。」、「68是k=4。」而排除。邊界與語意再檢查：正數條件排除k=-3。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v010-semantic-review-r1",
      "questionId": "u06-s004-v010",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "c7b9d92087395b4c5dab85b1bc9d3854244bb6c84eb7502b38a2204b0b7fc4b3",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "48:27同除3得16:9。",
      "derivedAnswer": "48公分",
      "storedAnswer": "48公分",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "36對應12:9。",
        "43是錯誤加法。",
        "16:9=x:27，9x=432，x=48。",
        "54把27乘2。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「在螢幕比例情境使用性質」，已明示必要條件：長寬比例固定。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公分對公分。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：情境中長對長、寬對寬。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "需要維持對應方向。",
      "literacyNecessity": "16:9 的設計規格決定比例式排序，情境具有必要性。",
      "reviewerNote": "獨立重算：48:27同除3得16:9。 正確選項為「48公分」。逐項檢查後，唯一為真的理由是「16:9=x:27，9x=432，x=48。」；其餘三項分別因「36對應12:9。」、「43是錯誤加法。」、「54把27乘2。」而排除。邊界與語意再檢查：情境中長對長、寬對寬。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v011-semantic-review-r1",
      "questionId": "u06-s004-v011",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "c20e0738905f7ba175c6f41284b63877dfd8e9f6b39a952ea6011464d077d66a",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "24:16=3:2。",
      "derivedAnswer": "16公分",
      "storedAnswer": "16公分",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "10是未放大。",
        "12把24除2。",
        "18把短邊當3/4長。",
        "15:10=3:2；放大倍率24/15=1.6，短邊10×1.6=16。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「用等值比例維持形狀」，已明示必要條件：照片不裁切且不變形。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公分。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：不變形是比例保持的必要條件。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "生活中的相似縮放。",
      "literacyNecessity": "若刪除『不變形』便無法保證短邊按相同比例變化。",
      "reviewerNote": "獨立重算：24:16=3:2。 正確選項為「16公分」。逐項檢查後，唯一為真的理由是「15:10=3:2；放大倍率24/15=1.6，短邊10×1.6=16。」；其餘三項分別因「10是未放大。」、「12把24除2。」、「18把短邊當3/4長。」而排除。邊界與語意再檢查：不變形是比例保持的必要條件。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v012-semantic-review-r1",
      "questionId": "u06-s004-v012",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "ecde2db1933cb8082064901ecc00ee2a8e38100acc11473a9788bcbd9706d2e9",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "100:350同除50得2:7。",
      "derivedAnswer": "100毫升",
      "storedAnswer": "100毫升",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "2:7=x:350，7x=700，x=100。",
        "50把350÷7但未乘2。",
        "140使用2/5。",
        "175把水減半。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「用比例式依標示配方」，已明示必要條件：350毫升是水，不是總飲料量。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：毫升。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題幹明確指出水的量。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "配方語意判讀。",
      "literacyNecessity": "標示中的前後項角色決定350對應7份。",
      "reviewerNote": "獨立重算：100:350同除50得2:7。 正確選項為「100毫升」。逐項檢查後，唯一為真的理由是「2:7=x:350，7x=700，x=100。」；其餘三項分別因「50把350÷7但未乘2。」、「140使用2/5。」、「175把水減半。」而排除。邊界與語意再檢查：題幹明確指出水的量。",
      "reviewerDecision": "pass"
    }
  ],
  "drawingSpecs": []
};
