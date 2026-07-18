// Deterministically serialized reviewed U06 content. Do not edit.
export default {
  "lecture": {
    "lectureId": "u06-s003-lecture-r1",
    "unitId": "u06",
    "numericUnitId": 6,
    "topicId": "u06-ratio-basics",
    "skillId": "ratio-part-total",
    "lockedSkillTitle": "部分量與總量",
    "title": "部分量與總量：把比轉成份數",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "unitTitle": "比例式",
      "topicTitle": "比與比例式基礎",
      "skillOrder": 3,
      "lockedPrerequisiteSkillIds": [
        "proportion-solve"
      ],
      "capBoundary": "處理兩部分或多個已明確部分的份數分配；完整連比技巧不在本技能展開。"
    },
    "prerequisiteBridge": "已知兩部分的比時，可把最簡比的每一項看成相同大小的份數。比例式求解也可得到同一結果。",
    "learningOutcomes": [
      "能由 A:B=m:n 找出總份數 m+n。",
      "能由總量求各部分，也能由一部分反求總量。",
      "能分辨部分比、部分對總量的比與百分率。",
      "能處理增減一部分後的新總量與新比。"
    ],
    "glossary": [
      {
        "term": "部分量",
        "definition": "總體中的某一類數量。"
      },
      {
        "term": "總量",
        "definition": "所有互斥部分合計的數量。"
      },
      {
        "term": "份數",
        "definition": "把比的每一項看成相同大小單位後的個數。"
      },
      {
        "term": "單位份量",
        "definition": "總量除以總份數所得的每一份大小。"
      }
    ],
    "notation": [
      {
        "symbol": "A:B=m:n",
        "meaning": "A 佔 m 份、B 佔 n 份。"
      },
      {
        "symbol": "A/(A+B)=m/(m+n)",
        "meaning": "A 占總量的比例。"
      },
      {
        "symbol": "每份=總量÷(m+n)",
        "meaning": "兩部分時的單位份量。"
      }
    ],
    "conceptNarrative": [
      "部分量的比可看成份數。若甲:乙=m:n，甲占 m 份、乙占 n 份，總量對應 m+n 份；先用已知總量、部分量或差量求每份，才能得到實際數量。",
      "已知總量時，每份=總量÷總份數；已知某部分時，每份=該部分÷對應份數；已知兩部分的差時，每份=差量÷份數差。分子所對應的量必須核對清楚。",
      "若發生增加、減少或轉移，先求原來的實際量，再依題意更新。從乙移給甲時，甲增加、乙同量減少，總量不變；直接改比的數字通常會得到錯誤結果。",
      "等份圖只能呈現份數結構，不應預先標示題目的總量、每份值或答案。題文、figureId、drawing spec、altText 與 SVG 的份數必須一致，學生才可由圖獨立推理。"
    ],
    "formalDefinitions": [
      {
        "name": "份數模型",
        "statement": "A:B=m:n 表示存在同一份量 k，使 A=mk、B=nk。"
      },
      {
        "name": "部分占總量",
        "statement": "A 占總量比例為 A/(A+B)=m/(m+n)，前提是 A、B 為全部且互斥。"
      }
    ],
    "formulas": [
      {
        "formula": "A=總量×m/(m+n)",
        "conditions": [
          "A、B 為全部",
          "m+n≠0"
        ],
        "meaning": "由總量求 A。"
      },
      {
        "formula": "總量=A×(m+n)/m",
        "conditions": [
          "m≠0"
        ],
        "meaning": "由 A 反求總量。"
      }
    ],
    "nonApplicableCases": [
      "A、B 有重疊時不能直接把 A+B 當總量。",
      "只知道 A:B，沒有任何實際量時，不能求唯一的 A、B。",
      "把 A:B=2:3 誤認成 A 占總量 2/3。",
      "人數、物件數通常要求整數，非整數結果需檢查。",
      "加入新成員後仍沿用舊比，除非題目明說比例保持不變。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "確認比的前後項各代表哪個部分，畫出或寫出對應份數。",
        "check": "甲乙順序與題意一致，圖示格數和文字比完全相符。"
      },
      {
        "step": 2,
        "instruction": "判斷已知量對應總份數、單一部分份數或份數差。",
        "check": "沒有把部分量誤除以總份數，也沒有把差量當總量。"
      },
      {
        "step": 3,
        "instruction": "用已知量除以正確份數，求每一份的實際大小。",
        "check": "單位保留，每份值乘回已知份數能還原題目數值。"
      },
      {
        "step": 4,
        "instruction": "將每份乘各部分份數，變動題再依順序加減或轉移。",
        "check": "轉移前後總量守恆，增加與減少方向正確。"
      },
      {
        "step": 5,
        "instruction": "以總和、差量與最簡比至少一項回驗。",
        "check": "所有已知條件同時成立，部分量沒有顛倒。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "u06-s003-example-a",
        "prompt": "甲:乙=2:5，總量四十九，求甲與乙。",
        "solutionSteps": [
          "總份數七，每份 49÷7=7。",
          "甲 2×7=14，乙 5×7=35。"
        ],
        "answer": "甲十四、乙三十五。",
        "why": "總量四十九對應二加五共七份，每份七。兩部分相加回到四十九，十四比三十五同除以七也確實為二比五。"
      },
      {
        "exampleId": "u06-s003-example-b",
        "prompt": "甲:乙=3:8，乙比甲多二十五，求兩部分。",
        "solutionSteps": [
          "份數差 8-3=5，故每份 25÷5=5。",
          "甲 15、乙 40。"
        ],
        "answer": "甲十五、乙四十。",
        "why": "二十五只對應乙比甲多的五份，不是總量。每份五後，三份與八份分別為十五與四十，差正好二十五。"
      },
      {
        "exampleId": "u06-s003-example-c",
        "prompt": "甲:乙=4:7，甲有二十，求總量。",
        "solutionSteps": [
          "甲四份等於二十，每份五。",
          "總份數十一，所以總量 11×5=55。"
        ],
        "answer": "總量五十五。",
        "why": "甲的二十只對應四份，因此先求每份五，再乘甲乙合計十一份。若直接用二十除以十一，會把部分量錯當總量。"
      },
      {
        "exampleId": "u06-s003-example-d",
        "prompt": "A:B=4:1 的均勻混合液倒出一部分後，剩餘比為何？",
        "solutionSteps": [
          "均勻混合使倒出部分仍含 A:B=4:1。",
          "兩成分按相同倍數減少。"
        ],
        "answer": "剩餘 A:B 仍為 4:1。",
        "why": "均勻條件保證任一小份的成分比例和整體相同，倒出後兩成分同乘相同剩餘倍數，所以比值不會改變。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把比的份數直接當實際數量。",
        "why": "忽略每份大小由已知量決定。",
        "correction": "先求每份再乘份數。"
      },
      {
        "mistake": "部分量除以總份數。",
        "why": "已知量與份數對應錯誤。",
        "correction": "單一部分量只除它自己的份數。"
      },
      {
        "mistake": "差量當成總量分配。",
        "why": "沒有計算兩部分的份數差。",
        "correction": "差量除以份數差求每份。"
      },
      {
        "mistake": "增加數量直接加在比的項。",
        "why": "比項不是固定的實際數量。",
        "correction": "先還原原量，再進行加減。"
      },
      {
        "mistake": "轉移只改一個部分。",
        "why": "忽略一方增加時另一方同量減少。",
        "correction": "用總量守恆核對轉移。"
      },
      {
        "mistake": "題文份數與圖格不一致。",
        "why": "圖像會提供互相衝突的條件。",
        "correction": "逐字核對題文、alt、drawing spec 與 SVG 標籤。"
      }
    ],
    "selfCheck": [
      "所有部分真的組成全部嗎？",
      "總份數是相加而非相乘嗎？",
      "已知量對應到幾份？",
      "答案相加或相減能回到題目嗎？",
      "變動後是否重新算比？"
    ],
    "summary": [
      "比的每一項可視為相同大小的份數。",
      "總量對應總份數，部分量對應該部分份數。",
      "部分占總量要以總份數作分母。",
      "數量變動後要用新實際量重算。"
    ],
    "connections": {
      "previous": "比例式可用來求未知部分。",
      "next": [
        "比例式性質能用代數描述份數關係。",
        "正比將份量固定的關係寫成 y=kx。"
      ]
    },
    "figureReferences": [
      "u06-fig-part-total-strip-01"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u06-s003-v001",
        "u06-s003-v002",
        "u06-s003-v003",
        "u06-s003-v004",
        "u06-s003-v005",
        "u06-s003-v006",
        "u06-s003-v007",
        "u06-s003-v008",
        "u06-s003-v009",
        "u06-s003-v010",
        "u06-s003-v011",
        "u06-s003-v012"
      ],
      "constructedResponseIds": [
        "u06-s003-cr001",
        "u06-s003-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "contentAuthorityConfirmed": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "以份數法重新核對 32 人、20 顆、差 18 與加入 4 人四種模型；特別確認部分占總量的分母為總份數，且重疊集合與變動後比例均列為不可直接套用情形。",
      "reviewVersion": "human-lecture-review-u06-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "a005f56dcf5447f7b31a6b43110cb04dcbba6dc97d11f4d25df124b9923a74e2"
  },
  "mcQuestions": [
    {
      "questionId": "u06-s003-v001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-part-total",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "甲:乙=2:3，甲乙共 25 人，甲有多少人？",
      "text": "甲:乙=2:3，甲乙共 25 人，甲有多少人？",
      "givenConditions": "甲乙為全部且互斥。",
      "target": "由總量求部分量",
      "choices": [
        "5人",
        "15人",
        "10人",
        "20人"
      ],
      "answerIndex": 2,
      "independentSolution": "甲=25×2/(2+3)=10。",
      "mainExplanation": "份數法：2+3=5份，25÷5×2=10。",
      "explanation": "甲乙比為 2:3，總份數是五。二十五人平均分成五份，每份為 25÷5=5 人；甲占兩份，所以甲有 2×5=10 人，乙十五人也能核對總數與原來比例。",
      "steps": [
        "計算總份數 2+3=5。",
        "用 25÷5 求每份五人。",
        "甲占兩份，算得 2×5=10 人並核對總和。"
      ],
      "optionAnalysis": [
        {
          "choice": "5人",
          "truth": false,
          "reason": "5人是每份，不是甲。"
        },
        {
          "choice": "15人",
          "truth": false,
          "reason": "15人是乙。"
        },
        {
          "choice": "10人",
          "truth": true,
          "reason": "總份數5，每份25÷5=5，甲2份為10人。"
        },
        {
          "choice": "20人",
          "truth": false,
          "reason": "20人把甲當4份。"
        }
      ],
      "misconceptionTarget": "把甲的兩份直接當成兩人，沒有利用總量求每份大小。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-solve"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-solve'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 60,
      "unitCheck": "人數單位一致。",
      "roundingCheck": "無近似，結果為整數。",
      "ambiguityBoundaryAudit": "兩部分合計25。",
      "difficultyReason": "基礎份數分配。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a97fa46f00c6fb4627d60362959fc502cf18e169578e086f2a17b1fb61a78ee9"
    },
    {
      "questionId": "u06-s003-v002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-part-total",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "紅球:白球=4:5，共 36 顆，白球有多少顆？",
      "text": "紅球:白球=4:5，共 36 顆，白球有多少顆？",
      "givenConditions": "只有紅白兩類。",
      "target": "由總量求後一部分",
      "choices": [
        "16顆",
        "18顆",
        "25顆",
        "20顆"
      ],
      "answerIndex": 3,
      "independentSolution": "白球=36×5/9=20。",
      "mainExplanation": "36÷9=4，再乘白球份數5。",
      "explanation": "紅球與白球共有 4+5=9 份，三十六顆除以九得每份四顆。白球占五份，所以有 5×4=20 顆；紅球十六顆，兩者相加為三十六，十六比二十也可約為四比五。",
      "steps": [
        "把比的兩項相加，得到總份數九。",
        "計算每份 36÷9=4 顆。",
        "白球五份乘四，得到二十顆並驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "16顆",
          "truth": false,
          "reason": "16顆是紅球。"
        },
        {
          "choice": "18顆",
          "truth": false,
          "reason": "18顆是假設各半。"
        },
        {
          "choice": "25顆",
          "truth": false,
          "reason": "25顆把每份5誤乘5。"
        },
        {
          "choice": "20顆",
          "truth": true,
          "reason": "總份數9，每份4顆，白球5份為20顆。"
        }
      ],
      "misconceptionTarget": "用白球五份除以總數，或把紅白兩項順序交換。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-solve"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-solve'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 60,
      "unitCheck": "顆數。",
      "roundingCheck": "精確整數。",
      "ambiguityBoundaryAudit": "白球對應5份。",
      "difficultyReason": "基礎部分求值。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9b7f2f850a4dd4f207f418954faa63895eac3bcd9a9d6388867ba1ca8abbf15c"
    },
    {
      "questionId": "u06-s003-v003",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-part-total",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "果汁原液:水=1:4，總量 2.5 公升，原液多少公升？",
      "text": "果汁原液:水=1:4，總量 2.5 公升，原液多少公升？",
      "givenConditions": "原液與水構成全部。",
      "target": "由小數總量求部分",
      "choices": [
        "0.5公升",
        "0.4公升",
        "1公升",
        "2公升"
      ],
      "answerIndex": 0,
      "independentSolution": "0.5+2.0=2.5，且0.5:2.0=1:4。",
      "mainExplanation": "原液=2.5×1/(1+4)=0.5。",
      "explanation": "原液與水的比為 1:4，總份數五。總量二點五公升除以五，得到每份 0.5 公升；原液占一份，所以原液量就是 0.5 公升，水量二公升可回驗總量。",
      "steps": [
        "計算總份數 1+4=5。",
        "求每份 2.5÷5=0.5 公升。",
        "原液占一份，得到 0.5 公升並核對水量二公升。"
      ],
      "optionAnalysis": [
        {
          "choice": "0.5公升",
          "truth": true,
          "reason": "總份數5，原液占1/5，2.5÷5=0.5。"
        },
        {
          "choice": "0.4公升",
          "truth": false,
          "reason": "0.4是把4當總份數。"
        },
        {
          "choice": "1公升",
          "truth": false,
          "reason": "1是錯把原液占1/2.5。"
        },
        {
          "choice": "2公升",
          "truth": false,
          "reason": "2是水量。"
        }
      ],
      "misconceptionTarget": "把比的一直接解讀為一公升，忽略總量決定每份實際大小。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-solve"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-solve'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 70,
      "unitCheck": "公升單位一致。",
      "roundingCheck": "2.5為精確量。",
      "ambiguityBoundaryAudit": "答案需為正且小於總量。",
      "difficultyReason": "基礎小數份數。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d1cbc4e2ade655bbfd4db14c20c4820f800b57e9a4b4f4f80e3abc8a76398fb5"
    },
    {
      "questionId": "u06-s003-v004",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-part-total",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "甲:乙=3:7，甲有 18 元，兩人共有多少元？",
      "text": "甲:乙=3:7，甲有 18 元，兩人共有多少元？",
      "givenConditions": "兩人的金額為全部。",
      "target": "由一部分反求總量",
      "choices": [
        "42元",
        "60元",
        "54元",
        "72元"
      ],
      "answerIndex": 1,
      "independentSolution": "總量=18×10/3=60。",
      "mainExplanation": "由已知部分先求單位份量，再求總量。",
      "explanation": "甲的三份等於十八元，所以每份為 18÷3=6 元。乙占七份，有 7×6=42 元；甲乙總量為 18+42=60 元，且 18:42 約分為 3:7。已知部分量只能除以它自己的三份，不能除總份數十。",
      "steps": [
        "由甲三份等於十八，求每份六元。",
        "乙七份乘六，得到四十二元。",
        "相加 18+42=60 元，並核對原比。"
      ],
      "optionAnalysis": [
        {
          "choice": "42元",
          "truth": false,
          "reason": "42元是乙的金額。"
        },
        {
          "choice": "60元",
          "truth": true,
          "reason": "3份是18，每份6；總10份為60。"
        },
        {
          "choice": "54元",
          "truth": false,
          "reason": "54元把總份數當9。"
        },
        {
          "choice": "72元",
          "truth": false,
          "reason": "72元把甲加乙份數算12。"
        }
      ],
      "misconceptionTarget": "用總份數十直接除甲的十八元，誤把部分量當作總量。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-solve"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-solve'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 80,
      "unitCheck": "元。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "每份6元，結果唯一。",
      "difficultyReason": "逆向份數法。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5572a0ebd3b5c6aee39384bb57301d886a11a6311bb47b1835ace98b0559dd31"
    },
    {
      "questionId": "u06-s003-v005",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-part-total",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "甲:乙=2:5，乙比甲多 21 本書。甲有多少本？",
      "text": "甲:乙=2:5，乙比甲多 21 本書。甲有多少本？",
      "givenConditions": "乙大於甲，差為正。",
      "target": "由兩部分差求部分",
      "choices": [
        "7本",
        "21本",
        "35本",
        "14本"
      ],
      "answerIndex": 3,
      "independentSolution": "甲14、乙35，差21且比2:5。",
      "mainExplanation": "差量對應份數差5-2=3。",
      "explanation": "乙比甲多的份數為 5-2=3 份，這三份等於二十一本，因此每份為 21÷3=7 本。甲占兩份，所以甲有 2×7=14 本；乙三十五本，兩者差正好二十一本。",
      "steps": [
        "計算乙比甲多 5-2=3 份。",
        "用 21÷3 求每份七本。",
        "甲兩份乘七，得到十四本並核對差為二十一。"
      ],
      "optionAnalysis": [
        {
          "choice": "7本",
          "truth": false,
          "reason": "7本是每份。"
        },
        {
          "choice": "21本",
          "truth": false,
          "reason": "21本是差，不是甲。"
        },
        {
          "choice": "35本",
          "truth": false,
          "reason": "35本是乙。"
        },
        {
          "choice": "14本",
          "truth": true,
          "reason": "份數差3對應21，每份7，甲2份為14。"
        }
      ],
      "misconceptionTarget": "把二十一本當成總量分成七份，沒有辨認它只對應份數差。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-solve"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-solve'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 85,
      "unitCheck": "本數。",
      "roundingCheck": "精確整數。",
      "ambiguityBoundaryAudit": "比與差同時驗證。",
      "difficultyReason": "需要把差量對應份數差。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9846fa762cb03618a4d5bb2353437f263c452f558264b75dd332edc7ea03ddb0"
    },
    {
      "questionId": "u06-s003-v006",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-part-total",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "一班男生:女生=5:4，女生 16 人。全班多少人？",
      "text": "一班男生:女生=5:4，女生 16 人。全班多少人？",
      "givenConditions": "男女為全部。",
      "target": "已知後一部分求總量",
      "choices": [
        "36人",
        "20人",
        "32人",
        "40人"
      ],
      "answerIndex": 0,
      "independentSolution": "男20、女16，合36。",
      "mainExplanation": "先由女生4份求每份，再乘總份數9。",
      "explanation": "女生四份等於十六人，因此每份為 16÷4=4 人。男生五份有二十人，全班總人數為 20+16=36 人；也可用九份乘每份四人，二十比十六可回驗為五比四。",
      "steps": [
        "由女生四份等於十六，求每份四人。",
        "男生五份乘四，得到二十人。",
        "男女人數相加，得到全班三十六人。"
      ],
      "optionAnalysis": [
        {
          "choice": "36人",
          "truth": true,
          "reason": "4份是16，每份4；總9份為36。"
        },
        {
          "choice": "20人",
          "truth": false,
          "reason": "20人是男生。"
        },
        {
          "choice": "32人",
          "truth": false,
          "reason": "32人漏算一份。"
        },
        {
          "choice": "40人",
          "truth": false,
          "reason": "40人把總份數當10。"
        }
      ],
      "misconceptionTarget": "用女生十六人除總份數九，忽略十六只對應女生四份。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-solve"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-solve'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 75,
      "unitCheck": "人數。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "人數皆為整數。",
      "difficultyReason": "標準逆向份數。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "33849eb51dc4bf2d0eb9fef444628715748b1a63b44fd34abdbd79f208224235"
    },
    {
      "questionId": "u06-s003-v007",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-part-total",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "甲乙原有人數比 3:5，共 40 人。若甲增加 4 人、乙不變，新比為何？",
      "text": "甲乙原有人數比 3:5，共 40 人。若甲增加 4 人、乙不變，新比為何？",
      "givenConditions": "只有甲增加4人。",
      "target": "變動後重算比",
      "choices": [
        "3:5",
        "19:25",
        "7:5",
        "4:5"
      ],
      "answerIndex": 1,
      "independentSolution": "19+25=44，且題目只增加4人。",
      "mainExplanation": "先求原實際人數，再更新甲並化簡。",
      "explanation": "原比 3:5 共八份，四十人除以八得每份五人，所以甲十五人、乙二十五人。甲增加四人後成十九人，乙不變，新比為 19:25，已互質。",
      "steps": [
        "用 40÷(3+5) 求每份五人。",
        "算出原甲十五、乙二十五。",
        "甲加四成十九，列新比 19:25 並確認最簡。"
      ],
      "optionAnalysis": [
        {
          "choice": "3:5",
          "truth": false,
          "reason": "未更新甲人數。"
        },
        {
          "choice": "19:25",
          "truth": true,
          "reason": "原每份5，甲15、乙25；甲增4成19，新比19:25。"
        },
        {
          "choice": "7:5",
          "truth": false,
          "reason": "把增加4人誤成增加4份。"
        },
        {
          "choice": "4:5",
          "truth": false,
          "reason": "把19:25錯誤近似成4:5。"
        }
      ],
      "misconceptionTarget": "直接在比的前項三上加四，寫成七比五而忽略實際人數。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-solve"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-solve'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 105,
      "unitCheck": "人數。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "新比不要求維持原小整數結構。",
      "difficultyReason": "多步更新與化簡。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0f173daeefb59e408164a85840e139415d53c4283bdb768cf8df185d75f40925"
    },
    {
      "questionId": "u06-s003-v008",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-part-total",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "甲:乙=4:7，若從乙移 6 個給甲後兩者相等，原本共有多少個？",
      "text": "甲:乙=4:7，若從乙移 6 個給甲後兩者相等，原本共有多少個？",
      "givenConditions": "移動6個不改變總數。",
      "target": "由轉移後相等反推總量",
      "choices": [
        "33個",
        "55個",
        "44個",
        "66個"
      ],
      "answerIndex": 2,
      "independentSolution": "原為16與28，移6後皆22。",
      "mainExplanation": "移動不改變總量，但使兩者差距縮少12。",
      "explanation": "令甲=4k、乙=7k。從乙移六個給甲後相等，所以 4k+6=7k-6，整理得 3k=12、k=4。原總量為 (4+7)×4=44 個；轉移只改分配，不改四十四的總數，轉移後兩邊各二十二個。",
      "steps": [
        "依原比設甲=4k、乙=7k。",
        "列轉移後相等式 4k+6=7k-6。",
        "解得 k=4，計算總量 11×4=44。"
      ],
      "optionAnalysis": [
        {
          "choice": "33個",
          "truth": false,
          "reason": "33對應k=3，移後不相等。"
        },
        {
          "choice": "55個",
          "truth": false,
          "reason": "55對應k=5。"
        },
        {
          "choice": "44個",
          "truth": true,
          "reason": "令每份k，4k+6=7k-6，得k=4，總量11k=44。"
        },
        {
          "choice": "66個",
          "truth": false,
          "reason": "66把移動6誤當每份。"
        }
      ],
      "misconceptionTarget": "只在乙減六卻沒有在甲加六，破壞轉移前後總量不變。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-solve"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-solve'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 125,
      "unitCheck": "個數。",
      "roundingCheck": "精確整數。",
      "ambiguityBoundaryAudit": "『從乙移給甲』同時改變兩部分。",
      "difficultyReason": "進階變動方程。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c5c23488c3aee921a1861a1132e95aa6b54e4b32208a9ad24772dd66ecf76918"
    },
    {
      "questionId": "u06-s003-v009",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-part-total",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "甲:乙=3:8，甲增加 6、乙減少 4 後比為 1:2。原來甲是多少？",
      "text": "甲:乙=3:8，甲增加 6、乙減少 4 後比為 1:2。原來甲是多少？",
      "givenConditions": "甲增加6、乙減少4，兩者皆保持正數。",
      "target": "複合變動反推原量",
      "choices": [
        "24",
        "18",
        "32",
        "48"
      ],
      "answerIndex": 0,
      "independentSolution": "原甲24、乙64；變動後30:60=1:2。",
      "mainExplanation": "以共同份量k表示原數，再建立變動後比例式。",
      "explanation": "設原甲=3k、乙=8k，變動後有 (3k+6):(8k-4)=1:2。交叉相乘得 2(3k+6)=8k-4，整理為 2k=16，所以 k=8，原甲為 3×8=24。代回變動後三十比六十，確為一比二，所有變動條件一致，因此答案唯一。",
      "steps": [
        "依原比設甲=3k、乙=8k。",
        "依變動列比例 (3k+6):(8k-4)=1:2。",
        "交叉相乘解得 k=8，再求原甲二十四。"
      ],
      "optionAnalysis": [
        {
          "choice": "24",
          "truth": true,
          "reason": "令甲3k、乙8k；2(3k+6)=8k-4，得k=8，甲=24。"
        },
        {
          "choice": "18",
          "truth": false,
          "reason": "18對應k=6，變動後24:44≠1:2。"
        },
        {
          "choice": "32",
          "truth": false,
          "reason": "32不是3的倍數份量。"
        },
        {
          "choice": "48",
          "truth": false,
          "reason": "48對應k=16，新比54:124。"
        }
      ],
      "misconceptionTarget": "把增加六、減少四直接改在比的三與八上，而非實際數量。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-solve"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-solve'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 140,
      "unitCheck": "無單位。",
      "roundingCheck": "精確整數。",
      "ambiguityBoundaryAudit": "數據使份量與原量均為整數。",
      "difficultyReason": "高階方程建模。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "061ee6ad891cb0a175797f9a14db505c12ff1b2e0667be11e42e938447da8764"
    },
    {
      "questionId": "u06-s003-v010",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-part-total",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "運動社男:女=7:5，共 48 人。若今天男生請假 4 人、女生全到，出席男:女為何？",
      "text": "運動社男:女=7:5，共 48 人。若今天男生請假 4 人、女生全到，出席男:女為何？",
      "givenConditions": "男女為全部，只有男生請假4。",
      "target": "在出席情境更新部分比",
      "choices": [
        "7:5",
        "6:5",
        "4:5",
        "5:6"
      ],
      "answerIndex": 1,
      "independentSolution": "出席總44，男24女20，比6:5。",
      "mainExplanation": "先求原人數，再更新出席量。",
      "explanation": "男女人數比 7:5 共十二份，四十八人除以十二得每份四人，所以男二十八、女二十。男生請假四人後出席二十四人，新比 24:20 化簡為 6:5。",
      "steps": [
        "由 48÷12 求每份四人。",
        "算出男二十八、女二十，再將男生減四。",
        "列出席比 24:20，同除以四得 6:5。"
      ],
      "optionAnalysis": [
        {
          "choice": "7:5",
          "truth": false,
          "reason": "7:5未扣請假。"
        },
        {
          "choice": "6:5",
          "truth": true,
          "reason": "原每份4，男28女20；男出席24，24:20=6:5。"
        },
        {
          "choice": "4:5",
          "truth": false,
          "reason": "4:5把男減成16。"
        },
        {
          "choice": "5:6",
          "truth": false,
          "reason": "5:6為倒比。"
        }
      ],
      "misconceptionTarget": "把請假四人直接從比的前項七減掉，沒有先求實際人數。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-solve"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-solve'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 100,
      "unitCheck": "人數。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "題目問出席比，不是原登記比。",
      "difficultyReason": "情境變動必要。",
      "literacyContextNecessity": "請假條件直接改變部分量，必須保留情境才能解題。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0f3d2ee043c7ffefbe6d96438a1702f385440ab65bd11001f01b2ac2dc28fe37"
    },
    {
      "questionId": "u06-s003-v011",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-part-total",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "園區樹木中喬木:灌木=2:7，共 270 株。計畫移走灌木 45 株，移後喬木占剩餘總數的幾分之幾？",
      "text": "園區樹木中喬木:灌木=2:7，共 270 株。計畫移走灌木 45 株，移後喬木占剩餘總數的幾分之幾？",
      "givenConditions": "只移灌木45株。",
      "target": "變動後部分占總量",
      "choices": [
        "2/9",
        "1/4",
        "4/15",
        "4/13"
      ],
      "answerIndex": 2,
      "independentSolution": "60:165=4:11，所以喬木占總量4/(4+11)=4/15。",
      "mainExplanation": "先用比例求實際株數，再更新總量與部分率。",
      "explanation": "喬木與灌木共九份，270÷9=30 株一份，所以喬木六十、灌木二百一十。移走四十五株灌木後總數為 60+165=225，喬木占 60/225=4/15。分母必須改用移除後的剩餘總數。",
      "steps": [
        "依 2:7 分配總數，求喬木六十、灌木二百一十。",
        "灌木減四十五後為一百六十五，剩餘總數二百二十五。",
        "計算喬木占比 60/225，約分為 4/15。"
      ],
      "optionAnalysis": [
        {
          "choice": "2/9",
          "truth": false,
          "reason": "2/9是原本喬木占比。"
        },
        {
          "choice": "1/4",
          "truth": false,
          "reason": "1/4錯把剩餘總量240。"
        },
        {
          "choice": "4/15",
          "truth": true,
          "reason": "原每份30，喬木60、灌木210；移後灌木165，總225，喬木占60/225=4/15。"
        },
        {
          "choice": "4/13",
          "truth": false,
          "reason": "4/13錯誤約分。"
        }
      ],
      "misconceptionTarget": "分母仍使用原總數二百七十，沒有隨移走灌木更新剩餘總量。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-solve"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-solve'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 120,
      "unitCheck": "株數。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "剩餘總量需同步減45。",
      "difficultyReason": "兩階段比例與部分率。",
      "literacyContextNecessity": "園區管理動作改變分母，情境不可刪除。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "249e2690d2b22d26b5b3d71c3792477bf7a27f36c43bbe85dcbf858c1a8adae0"
    },
    {
      "questionId": "u06-s003-v012",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-part-total",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "飲料 A:B=3:2，共 1.5 公升。倒出 0.3 公升混合均勻飲料後，剩餘 A:B 的最簡整數比為何？",
      "text": "飲料 A:B=3:2，共 1.5 公升。倒出 0.3 公升混合均勻飲料後，剩餘 A:B 的最簡整數比為何？",
      "givenConditions": "倒出前混合均勻。",
      "target": "判斷同比例移除對比的影響",
      "choices": [
        "6:4",
        "2:3",
        "9:4",
        "3:2"
      ],
      "answerIndex": 3,
      "independentSolution": "總量減為1.2公升；均勻倒出使A、B同乘0.8，剩0.72與0.48公升，最簡整數比為3:2。",
      "mainExplanation": "倒出混合液相當於 A、B 同乘相同剩餘比例，因此比值維持3:2。",
      "explanation": "飲料已混合均勻，倒出的每一部分都含相同比例的 A 與 B，因此兩成分同乘相同的剩餘倍數。總量雖減少零點三公升，A:B 仍保持 3:2。",
      "steps": [
        "辨認倒出前飲料已混合均勻。",
        "倒出部分含 A、B 的比仍為 3:2。",
        "兩成分按相同倍數減少，所以剩餘比保持 3:2。"
      ],
      "optionAnalysis": [
        {
          "choice": "6:4",
          "truth": false,
          "reason": "6:4等值但不是最簡。"
        },
        {
          "choice": "2:3",
          "truth": false,
          "reason": "2:3為倒比。"
        },
        {
          "choice": "9:4",
          "truth": false,
          "reason": "9:4沒有依據。"
        },
        {
          "choice": "3:2",
          "truth": true,
          "reason": "混合均勻後倒出時兩成分按同一比例減少，剩餘比不變。"
        }
      ],
      "misconceptionTarget": "把零點三公升只從其中一種成分扣除，忽略混合均勻條件。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-solve"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-solve'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 110,
      "unitCheck": "公升。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "『混合均勻』保證倒出液成分比與原液相同。",
      "difficultyReason": "概念判斷而非只算份數。",
      "literacyContextNecessity": "混合均勻是比保持不變的必要條件，具有數學作用。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4cb2e7f046fbb6d10157a6098c9435c39283d93c8c334cfcaca0bdaad6148fab"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u06-s003-cr001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-part-total",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "圖示把總量平均分成五格，前兩格代表甲、後三格代表乙。若總量為 65 個，求甲、乙各有多少，並說明圖中每一格代表多少個。",
      "target": "由份數圖求部分",
      "requiredWork": [
        "由圖讀出總份數。",
        "求每份與兩部分。",
        "用總和和比值驗算。"
      ],
      "fullCreditSolution": [
        "圖中甲二份、乙三份，總份數為 2+3=5，與五個等寬格一致。",
        "每一格代表 65÷5=13 個；甲有 2×13=26 個，乙有 3×13=39 個。",
        "驗算 26+39=65，且 26:39 同除以十三為 2:3，與圖示份數相符。"
      ],
      "alternativeSolutions": [
        "可設甲=2k、乙=3k，由 5k=65 得 k=13，再求甲二十六、乙三十九。"
      ],
      "reasoningSteps": [
        "逐格讀圖，確認甲二份、乙三份、總共五份。",
        "用總量六十五除以五，求每格十三個。",
        "分別乘甲、乙份數並以總和與比值雙重驗算。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確寫出每格十三個、甲二十六個、乙三十九個，並完成總和或比值驗算。"
        },
        {
          "score": 2,
          "criteria": "甲乙兩部分皆正確，但未說明每格代表十三個或未完成驗算。"
        },
        {
          "score": 1,
          "criteria": "正確讀出五份並列出 65÷5，但後續只有一個部分量正確。"
        },
        {
          "score": 0,
          "criteria": "未依圖讀出二份與三份，或沒有可辨識的份數分配過程。"
        }
      ],
      "partialCreditRules": [
        "讀出甲二份、乙三份及每格十三個是核心評分依據。",
        "若甲乙份數對調但後續乘算一致，最多給一分。"
      ],
      "followThroughPolicy": "若每格十三的計算有單一算術錯誤，但後續仍一致乘甲二份、乙三份，可依過程給一分；讀圖份數錯誤不採跟隨。",
      "unitNotationRules": "總量與部分量以『個』表示；圖格代表等份，每格十三個是由總量六十五計算所得，不是圖上預先標示。",
      "answerOnlyPolicy": "只寫甲二十六、乙三十九而沒有每格與份數過程，最多給二分。",
      "commonErrors": [
        "把二乘三當成總份數六，沒有數出五個等寬格。",
        "把甲乙份數對調，算成甲三十九、乙二十六。",
        "直接用六十五分別乘二與三，沒有先求每格十三個。"
      ],
      "visualMode": "figure-supported",
      "figureId": "u06-fig-part-total-strip-01",
      "drawingSpecRef": "units/u06/s003/drawing-specs.jsonl#u06-fig-part-total-strip-01",
      "independentReview": {
        "derivedResult": "每格十三個，甲二十六個，乙三十九個。",
        "ambiguity": "題文、figureId、drawing spec、altText 與 SVG 均明示甲二格、乙三格、總共五格；圖未提供總量六十五或計算答案。",
        "scope": "只使用 U06 部分量與總量的份數法，不需要後續技能。",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "5c0847d8d6a71037ce794304af7394b3989a9f65ac0101bcca6bb3a550ada554"
    },
    {
      "questionId": "u06-s003-cr002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-part-total",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "甲:乙=4:9。從乙移10給甲後，新比為2:3。求原來甲、乙與總量。",
      "target": "轉移後比例反推",
      "requiredWork": [
        "以4k、9k表示原量。",
        "建立轉移後比例式。",
        "求兩部分並驗證轉移後比。"
      ],
      "fullCreditSolution": [
        "依原比設甲=4k、乙=9k。轉移十個後，甲為 4k+10、乙為 9k-10，總量保持不變。",
        "由新比列 (4k+10):(9k-10)=2:3，交叉相乘得 12k+30=18k-20，所以 k=25/3。",
        "原甲=100/3、原乙=75、總量=325/3；轉移後 130/3:65 約分為 2:3，驗算成立。"
      ],
      "alternativeSolutions": [
        "可用原差5k；轉移後差縮少20，且2:3的差為1份，再聯立總量不變求解。"
      ],
      "reasoningSteps": [
        "用共同倍數 k 表示原甲、乙。",
        "依轉移方向分別加十、減十，建立新比例式。",
        "解得 k 後求兩部分與總量，再代回新比驗算。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "建立正確比例式並得到甲100/3、乙75、總量325/3，完成驗算。"
        },
        {
          "score": 2,
          "criteria": "方程正確且k=25/3，但漏一個所求量或驗算。"
        },
        {
          "score": 1,
          "criteria": "用4k、9k表示正確，轉移式有單一符號錯誤。"
        },
        {
          "score": 0,
          "criteria": "把10當10份、總量因轉移改變或無有效過程。"
        }
      ],
      "partialCreditRules": [
        "接受分數量，題目未限定整數物件。",
        "若作答者指出若是人數情境資料不合理，且仍完成代數，可照常評分。"
      ],
      "followThroughPolicy": "方程建立正確後的算術錯誤可依錯誤k一致求三量給1至2分；若一開始把乙也加10，沒有跟隨分。",
      "unitNotationRules": "分數可寫帶分數；需清楚標示甲、乙、總量。",
      "answerOnlyPolicy": "只寫三個數且無方程最多1分。",
      "commonErrors": [
        "只在甲加十而忘記乙要減十，造成總量不守恆。",
        "把新比二比三直接套到原甲乙，忽略轉移前後不同。",
        "解得 k=25/3 後擅自取整數，改變精確答案。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "甲100/3、乙75、總325/3。",
        "ambiguity": "題目使用一般量而非人數，分數解可接受且唯一。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "8b6f5f0d07453f71f776931e9e1392a492687155ff6776230c299df3d5822a10"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u06-s003-v001-semantic-review-r1",
      "questionId": "u06-s003-v001",
      "unitId": "u06",
      "skillId": "ratio-part-total",
      "contentSha256": "a97fa46f00c6fb4627d60362959fc502cf18e169578e086f2a17b1fb61a78ee9",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "甲=25×2/(2+3)=10。",
      "derivedAnswer": "10人",
      "storedAnswer": "10人",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "5人是每份，不是甲。",
        "15人是乙。",
        "總份數5，每份25÷5=5，甲2份為10人。",
        "20人把甲當4份。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由總量求部分量」，已明示必要條件：甲乙為全部且互斥。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：人數單位一致。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：兩部分合計25。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似，結果為整數。。"
      },
      "difficultyReason": "基礎份數分配。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：甲=25×2/(2+3)=10。 正確選項為「10人」。逐項檢查後，唯一為真的理由是「總份數5，每份25÷5=5，甲2份為10人。」；其餘三項分別因「5人是每份，不是甲。」、「15人是乙。」、「20人把甲當4份。」而排除。邊界與語意再檢查：兩部分合計25。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s003-v002-semantic-review-r1",
      "questionId": "u06-s003-v002",
      "unitId": "u06",
      "skillId": "ratio-part-total",
      "contentSha256": "9b7f2f850a4dd4f207f418954faa63895eac3bcd9a9d6388867ba1ca8abbf15c",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "白球=36×5/9=20。",
      "derivedAnswer": "20顆",
      "storedAnswer": "20顆",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "16顆是紅球。",
        "18顆是假設各半。",
        "25顆把每份5誤乘5。",
        "總份數9，每份4顆，白球5份為20顆。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由總量求後一部分」，已明示必要條件：只有紅白兩類。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：顆數。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：白球對應5份。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確整數。。"
      },
      "difficultyReason": "基礎部分求值。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：白球=36×5/9=20。 正確選項為「20顆」。逐項檢查後，唯一為真的理由是「總份數9，每份4顆，白球5份為20顆。」；其餘三項分別因「16顆是紅球。」、「18顆是假設各半。」、「25顆把每份5誤乘5。」而排除。邊界與語意再檢查：白球對應5份。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s003-v003-semantic-review-r1",
      "questionId": "u06-s003-v003",
      "unitId": "u06",
      "skillId": "ratio-part-total",
      "contentSha256": "d1cbc4e2ade655bbfd4db14c20c4820f800b57e9a4b4f4f80e3abc8a76398fb5",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "0.5+2.0=2.5，且0.5:2.0=1:4。",
      "derivedAnswer": "0.5公升",
      "storedAnswer": "0.5公升",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "總份數5，原液占1/5，2.5÷5=0.5。",
        "0.4是把4當總份數。",
        "1是錯把原液占1/2.5。",
        "2是水量。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由小數總量求部分」，已明示必要條件：原液與水構成全部。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公升單位一致。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：答案需為正且小於總量。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：2.5為精確量。。"
      },
      "difficultyReason": "基礎小數份數。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：0.5+2.0=2.5，且0.5:2.0=1:4。 正確選項為「0.5公升」。逐項檢查後，唯一為真的理由是「總份數5，原液占1/5，2.5÷5=0.5。」；其餘三項分別因「0.4是把4當總份數。」、「1是錯把原液占1/2.5。」、「2是水量。」而排除。邊界與語意再檢查：答案需為正且小於總量。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s003-v004-semantic-review-r1",
      "questionId": "u06-s003-v004",
      "unitId": "u06",
      "skillId": "ratio-part-total",
      "contentSha256": "5572a0ebd3b5c6aee39384bb57301d886a11a6311bb47b1835ace98b0559dd31",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "總量=18×10/3=60。",
      "derivedAnswer": "60元",
      "storedAnswer": "60元",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "42元是乙的金額。",
        "3份是18，每份6；總10份為60。",
        "54元把總份數當9。",
        "72元把甲加乙份數算12。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由一部分反求總量」，已明示必要條件：兩人的金額為全部。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：元。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：每份6元，結果唯一。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "逆向份數法。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：總量=18×10/3=60。 正確選項為「60元」。逐項檢查後，唯一為真的理由是「3份是18，每份6；總10份為60。」；其餘三項分別因「42元是乙的金額。」、「54元把總份數當9。」、「72元把甲加乙份數算12。」而排除。邊界與語意再檢查：每份6元，結果唯一。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s003-v005-semantic-review-r1",
      "questionId": "u06-s003-v005",
      "unitId": "u06",
      "skillId": "ratio-part-total",
      "contentSha256": "9846fa762cb03618a4d5bb2353437f263c452f558264b75dd332edc7ea03ddb0",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "甲14、乙35，差21且比2:5。",
      "derivedAnswer": "14本",
      "storedAnswer": "14本",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "7本是每份。",
        "21本是差，不是甲。",
        "35本是乙。",
        "份數差3對應21，每份7，甲2份為14。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由兩部分差求部分」，已明示必要條件：乙大於甲，差為正。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：本數。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：比與差同時驗證。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確整數。。"
      },
      "difficultyReason": "需要把差量對應份數差。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：甲14、乙35，差21且比2:5。 正確選項為「14本」。逐項檢查後，唯一為真的理由是「份數差3對應21，每份7，甲2份為14。」；其餘三項分別因「7本是每份。」、「21本是差，不是甲。」、「35本是乙。」而排除。邊界與語意再檢查：比與差同時驗證。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s003-v006-semantic-review-r1",
      "questionId": "u06-s003-v006",
      "unitId": "u06",
      "skillId": "ratio-part-total",
      "contentSha256": "33849eb51dc4bf2d0eb9fef444628715748b1a63b44fd34abdbd79f208224235",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "男20、女16，合36。",
      "derivedAnswer": "36人",
      "storedAnswer": "36人",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "4份是16，每份4；總9份為36。",
        "20人是男生。",
        "32人漏算一份。",
        "40人把總份數當10。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「已知後一部分求總量」，已明示必要條件：男女為全部。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：人數。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：人數皆為整數。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "標準逆向份數。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：男20、女16，合36。 正確選項為「36人」。逐項檢查後，唯一為真的理由是「4份是16，每份4；總9份為36。」；其餘三項分別因「20人是男生。」、「32人漏算一份。」、「40人把總份數當10。」而排除。邊界與語意再檢查：人數皆為整數。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s003-v007-semantic-review-r1",
      "questionId": "u06-s003-v007",
      "unitId": "u06",
      "skillId": "ratio-part-total",
      "contentSha256": "0f173daeefb59e408164a85840e139415d53c4283bdb768cf8df185d75f40925",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "19+25=44，且題目只增加4人。",
      "derivedAnswer": "19:25",
      "storedAnswer": "19:25",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "未更新甲人數。",
        "原每份5，甲15、乙25；甲增4成19，新比19:25。",
        "把增加4人誤成增加4份。",
        "把19:25錯誤近似成4:5。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「變動後重算比」，已明示必要條件：只有甲增加4人。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：人數。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：新比不要求維持原小整數結構。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "多步更新與化簡。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：19+25=44，且題目只增加4人。 正確選項為「19:25」。逐項檢查後，唯一為真的理由是「原每份5，甲15、乙25；甲增4成19，新比19:25。」；其餘三項分別因「未更新甲人數。」、「把增加4人誤成增加4份。」、「把19:25錯誤近似成4:5。」而排除。邊界與語意再檢查：新比不要求維持原小整數結構。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s003-v008-semantic-review-r1",
      "questionId": "u06-s003-v008",
      "unitId": "u06",
      "skillId": "ratio-part-total",
      "contentSha256": "c5c23488c3aee921a1861a1132e95aa6b54e4b32208a9ad24772dd66ecf76918",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "原為16與28，移6後皆22。",
      "derivedAnswer": "44個",
      "storedAnswer": "44個",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "33對應k=3，移後不相等。",
        "55對應k=5。",
        "令每份k，4k+6=7k-6，得k=4，總量11k=44。",
        "66把移動6誤當每份。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由轉移後相等反推總量」，已明示必要條件：移動6個不改變總數。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：個數。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：『從乙移給甲』同時改變兩部分。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確整數。。"
      },
      "difficultyReason": "進階變動方程。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：原為16與28，移6後皆22。 正確選項為「44個」。逐項檢查後，唯一為真的理由是「令每份k，4k+6=7k-6，得k=4，總量11k=44。」；其餘三項分別因「33對應k=3，移後不相等。」、「55對應k=5。」、「66把移動6誤當每份。」而排除。邊界與語意再檢查：『從乙移給甲』同時改變兩部分。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s003-v009-semantic-review-r1",
      "questionId": "u06-s003-v009",
      "unitId": "u06",
      "skillId": "ratio-part-total",
      "contentSha256": "061ee6ad891cb0a175797f9a14db505c12ff1b2e0667be11e42e938447da8764",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "原甲24、乙64；變動後30:60=1:2。",
      "derivedAnswer": "24",
      "storedAnswer": "24",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "令甲3k、乙8k；2(3k+6)=8k-4，得k=8，甲=24。",
        "18對應k=6，變動後24:44≠1:2。",
        "32不是3的倍數份量。",
        "48對應k=16，新比54:124。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「複合變動反推原量」，已明示必要條件：甲增加6、乙減少4，兩者皆保持正數。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：數據使份量與原量均為整數。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確整數。。"
      },
      "difficultyReason": "高階方程建模。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：原甲24、乙64；變動後30:60=1:2。 正確選項為「24」。逐項檢查後，唯一為真的理由是「令甲3k、乙8k；2(3k+6)=8k-4，得k=8，甲=24。」；其餘三項分別因「18對應k=6，變動後24:44≠1:2。」、「32不是3的倍數份量。」、「48對應k=16，新比54:124。」而排除。邊界與語意再檢查：數據使份量與原量均為整數。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s003-v010-semantic-review-r1",
      "questionId": "u06-s003-v010",
      "unitId": "u06",
      "skillId": "ratio-part-total",
      "contentSha256": "0f3d2ee043c7ffefbe6d96438a1702f385440ab65bd11001f01b2ac2dc28fe37",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "出席總44，男24女20，比6:5。",
      "derivedAnswer": "6:5",
      "storedAnswer": "6:5",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "7:5未扣請假。",
        "原每份4，男28女20；男出席24，24:20=6:5。",
        "4:5把男減成16。",
        "5:6為倒比。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「在出席情境更新部分比」，已明示必要條件：男女為全部，只有男生請假4。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：人數。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題目問出席比，不是原登記比。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "情境變動必要。",
      "literacyNecessity": "請假條件直接改變部分量，必須保留情境才能解題。",
      "reviewerNote": "獨立重算：出席總44，男24女20，比6:5。 正確選項為「6:5」。逐項檢查後，唯一為真的理由是「原每份4，男28女20；男出席24，24:20=6:5。」；其餘三項分別因「7:5未扣請假。」、「4:5把男減成16。」、「5:6為倒比。」而排除。邊界與語意再檢查：題目問出席比，不是原登記比。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s003-v011-semantic-review-r1",
      "questionId": "u06-s003-v011",
      "unitId": "u06",
      "skillId": "ratio-part-total",
      "contentSha256": "249e2690d2b22d26b5b3d71c3792477bf7a27f36c43bbe85dcbf858c1a8adae0",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "60:165=4:11，所以喬木占總量4/(4+11)=4/15。",
      "derivedAnswer": "4/15",
      "storedAnswer": "4/15",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "2/9是原本喬木占比。",
        "1/4錯把剩餘總量240。",
        "原每份30，喬木60、灌木210；移後灌木165，總225，喬木占60/225=4/15。",
        "4/13錯誤約分。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「變動後部分占總量」，已明示必要條件：只移灌木45株。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：株數。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：剩餘總量需同步減45。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "兩階段比例與部分率。",
      "literacyNecessity": "園區管理動作改變分母，情境不可刪除。",
      "reviewerNote": "獨立重算：60:165=4:11，所以喬木占總量4/(4+11)=4/15。 正確選項為「4/15」。逐項檢查後，唯一為真的理由是「原每份30，喬木60、灌木210；移後灌木165，總225，喬木占60/225=4/15。」；其餘三項分別因「2/9是原本喬木占比。」、「1/4錯把剩餘總量240。」、「4/13錯誤約分。」而排除。邊界與語意再檢查：剩餘總量需同步減45。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s003-v012-semantic-review-r1",
      "questionId": "u06-s003-v012",
      "unitId": "u06",
      "skillId": "ratio-part-total",
      "contentSha256": "4cb2e7f046fbb6d10157a6098c9435c39283d93c8c334cfcaca0bdaad6148fab",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "總量減為1.2公升；均勻倒出使A、B同乘0.8，剩0.72與0.48公升，最簡整數比為3:2。",
      "derivedAnswer": "3:2",
      "storedAnswer": "3:2",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "6:4等值但不是最簡。",
        "2:3為倒比。",
        "9:4沒有依據。",
        "混合均勻後倒出時兩成分按同一比例減少，剩餘比不變。"
      ],
      "ambiguityChecks": {
        "wording": "題幹明確要求最簡整數比，6:4不再是第二個可接受選項。",
        "units": "總量與倒出量均以公升表示，成分比為無單位整數比。",
        "boundary": "混合均勻保證倒出液與剩餘液均維持原成分比，未加入隱藏條件。",
        "rounding": "0.72與0.48皆為精確值，化簡為3:2不涉及近似。"
      },
      "difficultyReason": "概念判斷而非只算份數。",
      "literacyNecessity": "混合均勻是比保持不變的必要條件，具有數學作用。",
      "reviewerNote": "獨立重算：總量減為1.2公升；均勻倒出使A、B同乘0.8，剩0.72與0.48公升，最簡整數比為3:2。正確選項為3:2；6:4雖等值但不符合題幹要求的最簡整數比，2:3顛倒前後項，9:4則不符合均勻移除後比值不變的條件，因此答案唯一。",
      "reviewerDecision": "pass"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u06-fig-part-total-strip-01",
      "unitId": "u06",
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-part-total",
      "purpose": "以等份長條把部分比 2：3 轉成總份數 5，協助零基礎學生避免把部分量直接誤當總量。",
      "svgPath": "figures/u06/u06-fig-part-total-strip-01.svg",
      "canvas": {
        "width": 720,
        "height": 220,
        "viewBox": "0 0 720 220"
      },
      "drawingSpec": {
        "outerRectangle": "x=60, y=70, width=600, height=80, black stroke 3",
        "partitions": [
          180,
          300,
          420,
          540
        ],
        "segmentWidth": 120,
        "topLabels": [
          {
            "text": "甲：2 份",
            "x": 180,
            "y": 50
          },
          {
            "text": "乙：3 份",
            "x": 480,
            "y": 50
          }
        ],
        "bottomLabel": {
          "text": "總量：5 份（示意圖，不按實際長度）",
          "x": 360,
          "y": 195
        },
        "insideLabels": "每格中央標示 1",
        "visibleLines": "外框及四條垂直分隔線均為實線",
        "hiddenLines": "無",
        "arrowsSymbols": "無箭頭；全圖只用等份格線",
        "scaleStatus": "not-to-scale instructional partition"
      },
      "labelsAndPositions": [
        "甲：2 份置於前兩格上方中央",
        "乙：3 份置於後三格上方中央",
        "每格以數字 1 表示一份",
        "總量說明置於圖下方"
      ],
      "ticksUnitsArrows": "分格線本身代表等份；無量測刻度或單位；無方向箭頭。",
      "toScale": false,
      "visualInferenceWarning": "本圖只表達份數關係，不可把螢幕上的實際像素長度當作題目數值。",
      "altText": "一條長方形被平均分成五格，前兩格代表甲的兩份，後三格代表乙的三份，整條代表總量五份。",
      "svgTitle": "部分量與總量的五等分長條圖",
      "svgDesc": "前兩份和後三份合成總量五份的比例示意圖。",
      "mobileReadabilityReview": "720×220 橫向畫布在 360 px 寬手機縮放後，主要標籤字級仍約 11 至 13 px，分格線不重疊。",
      "answerLeakageReview": "圖只呈現 2：3 對應五份的概念，不提供 CR 題目的總量數值或最後答案。",
      "manualVisualInspection": {
        "status": "pass-after-render",
        "inspectionNote": "以 720×220 PNG 實際轉譯檢查；白底、五格等寬、甲乙標籤、每格數字與底部警語均清楚，無裁切或重疊。"
      },
      "svgAssertions": [
        "<title id=\"title\">部分量與總量的五等分長條圖</title>",
        "width=\"600\" height=\"80\"",
        "甲：2 份",
        "乙：3 份",
        "總量：5 份"
      ],
      "figureReview": {
        "decision": "pass",
        "reviewNote": "第一次轉譯發現透明背景在深色預覽器會使黑字消失；加入白底並指定繁中字型後重新檢查，五格等寬、標籤可讀且未洩漏題目數值答案。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "04c51669ad8666198b925dc6baac0f0639779b0fc028d29aa179cb3d02611cfc"
    }
  ]
};
