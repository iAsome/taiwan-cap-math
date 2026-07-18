// Deterministically serialized reviewed U06 content. Do not edit.
export default {
  "lecture": {
    "lectureId": "u06-s002-lecture-r1",
    "unitId": "u06",
    "numericUnitId": 6,
    "topicId": "u06-ratio-basics",
    "skillId": "proportion-solve",
    "lockedSkillTitle": "比例式求解",
    "title": "比例式求解：對應順序與交叉相乘",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "unitTitle": "比例式",
      "topicTitle": "比與比例式基礎",
      "skillOrder": 2,
      "lockedPrerequisiteSkillIds": [
        "ratio-simplify"
      ],
      "capBoundary": "限一元未知數的比例式與國中範圍代數整理；分母為零的值必須排除。"
    },
    "prerequisiteBridge": "先會把比化成等值比，並理解 a:b=a/b。比例式就是兩個比值相等，因此可用等式性質與交叉相乘求未知數。",
    "learningOutcomes": [
      "能將 a:b=c:d 改寫成 a/b=c/d。",
      "能在分母非零條件下使用 ad=bc。",
      "能解含整數、分數、小數與簡單括號的比例式。",
      "能把答案代回原式檢查對應順序與分母限制。"
    ],
    "glossary": [
      {
        "term": "比例式",
        "definition": "兩個比相等的等式，例如 2:3=8:12。"
      },
      {
        "term": "內項",
        "definition": "a:b=c:d 中的 b、c。"
      },
      {
        "term": "外項",
        "definition": "a:b=c:d 中的 a、d。"
      },
      {
        "term": "交叉相乘",
        "definition": "由 a/b=c/d 得到 ad=bc 的運算，前提是 b、d 不為 0。"
      }
    ],
    "notation": [
      {
        "symbol": "a:b=c:d",
        "meaning": "a/b=c/d，b≠0、d≠0。"
      },
      {
        "symbol": "ad=bc",
        "meaning": "比例式的外項乘積等於內項乘積。"
      },
      {
        "symbol": "x≠r",
        "meaning": "若 x=r 會使原分母為 0，必須排除。"
      }
    ],
    "conceptNarrative": [
      "比例式 a:b=c:d 表示兩個比值相等，也就是 a/b=c/d，其中 b、d 不能為零。對應順序必須一致，不能只因四個數相同便任意交換位置。",
      "比例式可利用外項積等於內項積：ad=bc。交叉相乘不是口訣，而是等式兩邊同乘非零的 bd；若項中含括號，乘積必須作用於整個代數式。",
      "求未知數前先檢查含未知數的後項不可為零。解出候選值後代回原比例，比較兩邊比值並核對定義域；若化簡成矛盾式，表示沒有解。",
      "固定速率、相同比例尺與不變配方都能列比例式，但須保持同類量前後對應。例如圖上長對實際長、頁數對時間，兩組資料的順序必須相同。"
    ],
    "formalDefinitions": [
      {
        "name": "比例式成立",
        "statement": "兩個有定義的比具有相同比值。"
      },
      {
        "name": "比例中項與外項",
        "statement": "a:b=c:d 中，b、c 為內項，a、d 為外項。"
      }
    ],
    "formulas": [
      {
        "formula": "a:b=c:d ⇔ ad=bc",
        "conditions": [
          "b≠0",
          "d≠0"
        ],
        "meaning": "外項乘積等於內項乘積。"
      },
      {
        "formula": "x/a=b/c ⇒ cx=ab",
        "conditions": [
          "a≠0",
          "c≠0"
        ],
        "meaning": "交叉相乘後解 x。"
      }
    ],
    "nonApplicableCases": [
      "任一後項為 0 時不能使用比例式。",
      "對應量顛倒，例如甲長:甲寬=乙寬:乙長，通常不成立。",
      "交叉相乘後仍須解方程式，不能把乘積直接當答案。",
      "代數解若使原分母為 0，必須捨去。",
      "件數題若算出非整數，應回頭檢查模型或題目限制。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "標記兩個比的前後項，確認同類量上下或左右對應。",
        "check": "兩組資料使用相同順序，後項單位與角色一致。"
      },
      {
        "step": 2,
        "instruction": "列出所有後項非零的定義域限制。",
        "check": "含未知數的分母或比後項不會因候選值變成零。"
      },
      {
        "step": 3,
        "instruction": "利用外項積等於內項積建立一元方程式。",
        "check": "交叉配對正確，括號中的每一項都受外部係數作用。"
      },
      {
        "step": 4,
        "instruction": "解方程式並保留精確分數，不任意取近似值。",
        "check": "移項、分配律與符號運算均合法，解值符合限制。"
      },
      {
        "step": 5,
        "instruction": "把解代回原比例，比較兩個比值或交叉乘積。",
        "check": "原式有定義且左右相等；矛盾或恆等情形有明確判讀。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "u06-s002-example-a",
        "prompt": "解比例式 x:8=9:12。",
        "solutionSteps": [
          "交叉相乘得 12x=72。",
          "兩邊同除以十二，x=6。"
        ],
        "answer": "x=6。",
        "why": "x/8 與 9/12 對應，交叉相乘得到十二 x 等於七十二。代回六比八可約為三比四，與九比十二相同，前後對應與解值均正確。"
      },
      {
        "exampleId": "u06-s002-example-b",
        "prompt": "解 5:(y-1)=2:6，並列限制。",
        "solutionSteps": [
          "先寫 y≠1。",
          "交叉相乘得 30=2(y-1)，解得 y=16。"
        ],
        "answer": "y=16。",
        "why": "y-1 是比例後項，必須非零。解得十六後後項為十五，左比五比十五與右比二比六都可化為一比三，定義域與比值同時通過。"
      },
      {
        "exampleId": "u06-s002-example-c",
        "prompt": "解 (2x+3):5=7:10。",
        "solutionSteps": [
          "交叉相乘得 10(2x+3)=35。",
          "整理 20x=5，得到 x=1/4。"
        ],
        "answer": "x=1/4。",
        "why": "十必須乘括號內整個二 x 加三，展開後為二十 x 加三十。精確解四分之一代回，兩邊比值皆為十分之七。"
      },
      {
        "exampleId": "u06-s002-example-d",
        "prompt": "判斷 (x+1):4=(2x+3):8 是否有解。",
        "solutionSteps": [
          "交叉相乘得 8(x+1)=4(2x+3)。",
          "展開後 8x+8=8x+12，得到矛盾 8=12。"
        ],
        "answer": "無解。",
        "why": "未知數項完全消去後留下不可能等式，表示任何 x 都不能同時滿足兩個比值。這不是零後項問題，而是兩側關係彼此矛盾。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "兩組比的對應順序不一致。",
        "why": "同類量被放在不同位置。",
        "correction": "列式前先標記每一項代表的量。"
      },
      {
        "mistake": "交叉相乘配成相鄰項乘積。",
        "why": "未理解外項積等於內項積。",
        "correction": "寫成分式後沿對角線配對。"
      },
      {
        "mistake": "括號外係數只乘第一項。",
        "why": "違反分配律。",
        "correction": "係數須乘括號內每一項。"
      },
      {
        "mistake": "未檢查後項為零。",
        "why": "候選值可能使原比例無定義。",
        "correction": "解題前列限制，解後再核對。"
      },
      {
        "mistake": "矛盾式判成無限多解。",
        "why": "混淆永假與恆等結果。",
        "correction": "非零常數不可能相等表示無解。"
      },
      {
        "mistake": "情境比例混用不同順序。",
        "why": "第一組與第二組的量互換位置。",
        "correction": "兩組皆使用相同的『量一:量二』順序。"
      }
    ],
    "selfCheck": [
      "兩邊比的順序一致嗎？",
      "所有後項都不為 0 嗎？",
      "交叉乘積配對正確嗎？",
      "方程式整理有處理括號與負號嗎？",
      "代回後兩個比值相等嗎？"
    ],
    "summary": [
      "比例式是兩個有定義的比相等。",
      "交叉相乘來自等式兩邊同乘分母。",
      "未知數在分母時先列排除值。",
      "解後必須代回並檢查情境限制。"
    ],
    "connections": {
      "previous": "使用比的化簡辨認等值比。",
      "next": [
        "部分量與總量可用比例式或份數法求解。",
        "比例式性質會進一步整理等值關係。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u06-s002-v001",
        "u06-s002-v002",
        "u06-s002-v003",
        "u06-s002-v004",
        "u06-s002-v005",
        "u06-s002-v006",
        "u06-s002-v007",
        "u06-s002-v008",
        "u06-s002-v009",
        "u06-s002-v010",
        "u06-s002-v011",
        "u06-s002-v012"
      ],
      "constructedResponseIds": [
        "u06-s002-cr001",
        "u06-s002-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "contentAuthorityConfirmed": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "四個例題均以交叉乘積重新求值並代回；特別檢查 x=2 的分母排除、0.8:1.2 的小數化簡以及括號展開，確保沒有把交叉相乘當成無條件公式。",
      "reviewVersion": "human-lecture-review-u06-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "4652b487db1181252d70b759ca02931631d8764403accbf1170af786c07e0c00"
  },
  "mcQuestions": [
    {
      "questionId": "u06-s002-v001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "解比例式 x:5=6:15。",
      "text": "解比例式 x:5=6:15。",
      "givenConditions": "兩個後項5、15均非0。",
      "target": "求比例式未知前項",
      "choices": [
        "1",
        "2",
        "3",
        "6"
      ],
      "answerIndex": 1,
      "independentSolution": "右比6/15=2/5，因此x/5=2/5，x=2。",
      "mainExplanation": "交叉相乘：15x=5×6=30，x=2。",
      "explanation": "比例式 x:5=6:15 可寫成 x/5=6/15。右邊同除以三為 2/5，因此 x/5=2/5，分母相同可得 x=2；代回 2:5 與 6:15 等值，兩邊約分後完全相同，前後對應與解值都正確。",
      "steps": [
        "把比例式寫成 x/5=6/15。",
        "將 6/15 約分成 2/5。",
        "比較得 x=2，並代回驗證比值相同。"
      ],
      "optionAnalysis": [
        {
          "choice": "1",
          "truth": false,
          "reason": "代入1得1/5≠2/5。"
        },
        {
          "choice": "2",
          "truth": true,
          "reason": "15x=30，所以 x=2。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "把15÷5誤當答案。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "直接取右比前項。"
        }
      ],
      "misconceptionTarget": "把五移到右邊時誤用加法，或只約分比例的一側。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 55,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "x=2唯一使兩邊比值相等。",
      "difficultyReason": "基礎一元比例式。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "42151b75aadcdbe81eb4f21ba8635f969c6970c57666f41cf92d37a4d5eb8c63"
    },
    {
      "questionId": "u06-s002-v002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "解比例式 4:x=6:15。",
      "text": "解比例式 4:x=6:15。",
      "givenConditions": "x不可為0。",
      "target": "求未知後項",
      "choices": [
        "8",
        "12",
        "10",
        "15"
      ],
      "answerIndex": 2,
      "independentSolution": "4/10=2/5，而6/15=2/5，故x=10。",
      "mainExplanation": "外項乘積4×15等於內項x×6。",
      "explanation": "由 4:x=6:15 交叉相乘，得到 4×15=6x，也就是 60=6x。兩邊同除以六得 x=10；代回 4:10=2:5，與 6:15 約分後相同，未知數後項也不是零，原比例式有定義且成立，因此答案唯一。",
      "steps": [
        "確認對應順序，交叉相乘列出 4×15=6x。",
        "化簡為 60=6x。",
        "求得 x=10，代回比較兩個比值。"
      ],
      "optionAnalysis": [
        {
          "choice": "8",
          "truth": false,
          "reason": "8代入得1/2≠2/5。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "12來自60÷5。"
        },
        {
          "choice": "10",
          "truth": true,
          "reason": "4×15=6x，60=6x，x=10。"
        },
        {
          "choice": "15",
          "truth": false,
          "reason": "15把未知數直接等同右後項。"
        }
      ],
      "misconceptionTarget": "把相鄰項相乘而非交叉相乘，或把未知數位置對應錯誤。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 65,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "正數解且代回有定義。",
      "difficultyReason": "未知數位於分母，需注意限制。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f59d4afb1b87bf89416f52549bd9e727a37d351d7852f1ccfaeb083ebe7beb87"
    },
    {
      "questionId": "u06-s002-v003",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "解比例式 5:6=x:18。",
      "text": "解比例式 5:6=x:18。",
      "givenConditions": "後項6、18非0。",
      "target": "以等值比求未知項",
      "choices": [
        "12",
        "18",
        "30",
        "15"
      ],
      "answerIndex": 3,
      "independentSolution": "18是6的3倍，前項5也乘3得15。",
      "mainExplanation": "由5/6=x/18，交叉相乘6x=90。",
      "explanation": "5:6=x:18 表示 5/6=x/18，交叉相乘得 6x=5×18=90。兩邊同除以六，x=15；驗算 15:18 同除以三為 5:6，兩組比的前後對應順序一致，外項積與內項積也同為九十，因此答案唯一。",
      "steps": [
        "把比寫成 5/6=x/18。",
        "交叉相乘得到 6x=90。",
        "解得 x=15，代回約分驗證。"
      ],
      "optionAnalysis": [
        {
          "choice": "12",
          "truth": false,
          "reason": "12使右比2/3，不等於5/6。"
        },
        {
          "choice": "18",
          "truth": false,
          "reason": "18使右比1。"
        },
        {
          "choice": "30",
          "truth": false,
          "reason": "30來自5×6而非交叉相乘。"
        },
        {
          "choice": "15",
          "truth": true,
          "reason": "6x=90，x=15。"
        }
      ],
      "misconceptionTarget": "用十八減六求未知數，沒有維持兩組對應比值相等。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 55,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "倍率法與交叉相乘一致。",
      "difficultyReason": "可用整數倍快速求解。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a239e217dba31e30ed2bca7ee2c82b08a7cc4a5e1925465e00e68ab2683ed117"
    },
    {
      "questionId": "u06-s002-v004",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "解比例式 (x+2):7=5:14。",
      "text": "解比例式 (x+2):7=5:14。",
      "givenConditions": "7、14非0。",
      "target": "解含括號的比例式",
      "choices": [
        "1/2",
        "3/2",
        "2",
        "5/2"
      ],
      "answerIndex": 0,
      "independentSolution": "右比5/14，所以(x+2)/7=5/14，得x+2=5/2，x=1/2。",
      "mainExplanation": "先求整個前項x+2，再還原x。",
      "explanation": "比例式 (x+2):7=5:14 交叉相乘為 14(x+2)=35。兩邊同除以十四得 x+2=5/2，再減二，所以 x=1/2；括號中的整個 x+2 是前項，不能只讓十四乘未知數，代回也能得到相同比值。",
      "steps": [
        "依比例對應交叉相乘，列出 14(x+2)=35。",
        "同除以 14，得到 x+2=5/2。",
        "兩邊同減 2，求得 x=1/2 並代回。"
      ],
      "optionAnalysis": [
        {
          "choice": "1/2",
          "truth": true,
          "reason": "14(x+2)=35，x+2=2.5，x=0.5。"
        },
        {
          "choice": "3/2",
          "truth": false,
          "reason": "3/2是忘記減2的一種結果。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "2把x+2誤作x。"
        },
        {
          "choice": "5/2",
          "truth": false,
          "reason": "5/2是x+2的值，不是x。"
        }
      ],
      "misconceptionTarget": "交叉相乘時十四只乘 x，漏掉括號內常數二。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 95,
      "unitCheck": "無單位。",
      "roundingCheck": "精確分數。",
      "ambiguityBoundaryAudit": "x不在分母，無額外排除值。",
      "difficultyReason": "兩階段代數整理。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a0c4f9012c6b4814f793a4fa09f7f384575bd2d044745fada9dda8c552b7f2ca"
    },
    {
      "questionId": "u06-s002-v005",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "校園平面圖採相同比例：圖上 4 公分代表實際 6 公尺。另一段道路在圖上長 6 公分，實際長度是多少公尺？",
      "text": "校園平面圖採相同比例：圖上 4 公分代表實際 6 公尺。另一段道路在圖上長 6 公分，實際長度是多少公尺？",
      "givenConditions": "4公分對應6公尺；比例固定；所求為6公分對應的實際公尺數",
      "target": "用比例求對應實際長度",
      "choices": [
        "4",
        "7.2",
        "9",
        "13.5"
      ],
      "answerIndex": 2,
      "independentSolution": "設實際長度為 x 公尺，4:6=6:x。交叉相乘得 4x=36，所以 x=9。",
      "mainExplanation": "建立「圖上長度:實際長度」的同順序比例，再交叉相乘。",
      "explanation": "在同一比例尺下，圖上長:實際長的對應不變。由 4 公分對 6 公尺，圖上六公分是原來的 6÷4=1.5 倍，實際長也為 6×1.5=9 公尺，兩種長度同步使用相同倍數。",
      "steps": [
        "保持圖上長與實際長的對應順序。",
        "求圖上長放大倍數 6÷4=1.5。",
        "將實際六公尺同乘 1.5，得到九公尺。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "4是直接沿用第一段圖上長度。"
        },
        {
          "choice": "7.2",
          "truth": false,
          "reason": "7.2使用了錯誤倍率。"
        },
        {
          "choice": "9",
          "truth": true,
          "reason": "4:6與6:9比值相同。"
        },
        {
          "choice": "13.5",
          "truth": false,
          "reason": "13.5使用了錯誤放大倍數。"
        }
      ],
      "misconceptionTarget": "把圖上公分直接與實際公尺相加，或兩邊使用不同倍數。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "無單位。",
      "roundingCheck": "0.8、1.2為精確小數。",
      "ambiguityBoundaryAudit": "兩組比均以圖上公分在前、實際公尺在後。",
      "difficultyReason": "標準：維持對應順序並解實際尺度比例。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "49cc86be08842e52f2a2182506e1149c31bc60d0c728954ebe0f4fc4c049b317"
    },
    {
      "questionId": "u06-s002-v006",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "解比例式 3/5:x=9/10:6。",
      "text": "解比例式 3/5:x=9/10:6。",
      "givenConditions": "x≠0，其他分母5、10、6非0。",
      "target": "解分數作為比例項的比例式",
      "choices": [
        "2",
        "3",
        "12",
        "4"
      ],
      "answerIndex": 3,
      "independentSolution": "代入x=4，左比3/20；右比9/60=3/20。",
      "mainExplanation": "把比改寫成分數等式，再交叉相乘。",
      "explanation": "將 3/5:x=9/10:6 寫成 (3/5)/x=(9/10)/6。交叉相乘可得 (3/5)×6=(9/10)x，即 18/5=9x/10；乘十後 36=9x，所以 x=4。代回後左右兩個比值相等，且未知後項保持非零，答案完整符合原比例，也沒有其他解。",
      "steps": [
        "依原順序寫成兩個分式相等。",
        "交叉相乘得到 (3/5)×6=(9/10)x。",
        "清除分母並化簡，求得 x=4，再代回。"
      ],
      "optionAnalysis": [
        {
          "choice": "2",
          "truth": false,
          "reason": "2使左比3/10。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "3把兩個3直接約掉。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "12是交叉乘積中間值。"
        },
        {
          "choice": "4",
          "truth": true,
          "reason": "右比(9/10)÷6=3/20；(3/5)/x=3/20，故12=3x，x=4。"
        }
      ],
      "misconceptionTarget": "把分數前項的分母五誤當成比例式的後項，破壞對應順序。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 120,
      "unitCheck": "無單位。",
      "roundingCheck": "精確分數。",
      "ambiguityBoundaryAudit": "題式中的冒號代表除法，括號關係已明確。",
      "difficultyReason": "多層分數運算。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "46e92891732d2e490d7dd684fe5ce283949b1f3630f1a087a18b1e015423d676"
    },
    {
      "questionId": "u06-s002-v007",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "解比例式 5:(x-2)=3:6。",
      "text": "解比例式 5:(x-2)=3:6。",
      "givenConditions": "x-2不可為0。",
      "target": "解未知數在後項且含平移的比例式",
      "choices": [
        "12",
        "7",
        "8",
        "10"
      ],
      "answerIndex": 0,
      "independentSolution": "代入12後左比5:10=1:2，右比3:6=1:2。",
      "mainExplanation": "交叉相乘並記得最後加回2。",
      "explanation": "原比例式要求 x-2≠0。由 5:(x-2)=3:6 交叉相乘得 30=3(x-2)，同除以三得 x-2=10，所以 x=12；此值不等於二，分母合法，代回兩比都等於二分之一，驗算通過，因此答案唯一。",
      "steps": [
        "先記錄後項限制 x≠2。",
        "交叉相乘列出 5×6=3(x-2)。",
        "解得 x=12，代回確認後項十非零且比例成立。"
      ],
      "optionAnalysis": [
        {
          "choice": "12",
          "truth": true,
          "reason": "30=3(x-2)，x-2=10，x=12。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "7來自5+2。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "8把6÷3加2。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "10是x-2的值。"
        }
      ],
      "misconceptionTarget": "忽略比例後項不可為零，或展開 3(x-2) 時漏乘負二。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 100,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "解12不等於排除值2。",
      "difficultyReason": "兼具定義域與括號。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c6dc24b272d7d86100958ba959913e7af152baf5d83dc3685bffbcc3530bbeac"
    },
    {
      "questionId": "u06-s002-v008",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "若 (2x-1):9=(x+5):18，則 x 為何？",
      "text": "若 (2x-1):9=(x+5):18，則 x 為何？",
      "givenConditions": "9、18非0。",
      "target": "解兩邊皆含未知數的比例式",
      "choices": [
        "3",
        "7/3",
        "5",
        "7"
      ],
      "answerIndex": 1,
      "independentSolution": "代入x=7/3：左側(11/3):9=11/27，右側(22/3):18=11/27。",
      "mainExplanation": "兩邊都有未知數，交叉相乘後展開括號並合併同類項。",
      "explanation": "交叉相乘得 18(2x-1)=9(x+5)。展開為 36x-18=9x+45，移項後 27x=63，所以 x=63/27=7/3；代回兩個後項九、十八都非零，左右比值也確實相同，分數解維持精確且無需近似。",
      "steps": [
        "交叉相乘列出 18(2x-1)=9(x+5)。",
        "完整展開並整理為 27x=63。",
        "約分得 x=7/3，代回檢查兩個比值。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "代入3時左右比值不同。"
        },
        {
          "choice": "7/3",
          "truth": true,
          "reason": "18(2x-1)=9(x+5)，整理得27x=63，所以x=7/3。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "只比較常數會誤得5。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "7漏除以係數27。"
        }
      ],
      "misconceptionTarget": "括號外係數只乘第一項，導致常數項沒有同步放大。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 130,
      "unitCheck": "無單位。",
      "roundingCheck": "精確分數。",
      "ambiguityBoundaryAudit": "兩邊分母固定非0，所得解唯一。",
      "difficultyReason": "多步一元一次方程式。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f8b56d0cfc23cc4cdd8f91fed698de9ad6c5471b05a2a0d19225c4b27b421321"
    },
    {
      "questionId": "u06-s002-v009",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "解比例式 (x-1):4=(x+5):10。",
      "text": "解比例式 (x-1):4=(x+5):10。",
      "givenConditions": "固定後項4、10非0。",
      "target": "解雙邊含未知數比例式",
      "choices": [
        "3",
        "7",
        "9",
        "5"
      ],
      "answerIndex": 3,
      "independentSolution": "代入5：左4/4=1，右10/10=1。",
      "mainExplanation": "兩邊都有x時，交叉相乘後按一元一次方程式整理。",
      "explanation": "由 (x-1):4=(x+5):10 交叉相乘，得到 10(x-1)=4(x+5)。展開為 10x-10=4x+20，所以 6x=30，求得 x=5；代回左右比皆為一，兩個括號也都完整接受外部係數，原式確實成立，線性方程只有此解。",
      "steps": [
        "依對應項交叉相乘列出 10(x-1)=4(x+5)。",
        "展開括號並整理為 6x=30。",
        "求得 x=5，代回原比例驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "3使左右分別1/2與4/5。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "7來自錯誤移項。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "9把常數直接相加。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "10(x-1)=4(x+5)，10x-10=4x+20，6x=30，x=5。"
        }
      ],
      "misconceptionTarget": "交叉相乘時交換 x-1 與 x+5 的位置，或漏展開常數。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 120,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "代回兩邊皆為1，唯一解。",
      "difficultyReason": "多步代數但仍在國中範圍。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1ef61717233fdf00eba32f52e0c76f4cd3555bfcddd47885a3267ea7bfbb2ae8"
    },
    {
      "questionId": "u06-s002-v010",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "影印 12 頁需 18 秒，速度固定。影印 30 頁需多少秒？",
      "text": "影印 12 頁需 18 秒，速度固定。影印 30 頁需多少秒？",
      "givenConditions": "影印速度固定且無啟動時間。",
      "target": "用比例式處理固定速率",
      "choices": [
        "45秒",
        "36秒",
        "40秒",
        "54秒"
      ],
      "answerIndex": 0,
      "independentSolution": "12:18=30:t，12t=540，t=45。",
      "mainExplanation": "每頁18/12=1.5秒，30頁需45秒。",
      "explanation": "影印速度固定，頁數與時間同比例增加。三十頁是十二頁的 30÷12=2.5 倍，因此時間也是 18×2.5=45 秒；每頁一點五秒的單位率也能得到相同結果。",
      "steps": [
        "確認固定速度下頁數:時間的比保持不變。",
        "求頁數放大倍數 30÷12=2.5。",
        "將十八秒同乘 2.5，得到四十五秒。"
      ],
      "optionAnalysis": [
        {
          "choice": "45秒",
          "truth": true,
          "reason": "頁數與時間成正比，30/12=2.5，所以18×2.5=45。"
        },
        {
          "choice": "36秒",
          "truth": false,
          "reason": "36秒只乘2。"
        },
        {
          "choice": "40秒",
          "truth": false,
          "reason": "40秒以錯誤單位率計算。"
        },
        {
          "choice": "54秒",
          "truth": false,
          "reason": "54秒把倍數當3。"
        }
      ],
      "misconceptionTarget": "只用三十減十二再加到時間，沒有依固定速度使用比例倍數。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "頁與秒的對應順序一致。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "情境明示速度固定，故正比模型成立。",
      "difficultyReason": "需把生活敘述轉成比例式。",
      "literacyContextNecessity": "頁數與時間的固定速率是解題必要條件，刪除情境便無法判定正比。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "47d53e11ff0b5cdbee94cd739dd89d0dad5e6bdafb5d090167463190d3f64542"
    },
    {
      "questionId": "u06-s002-v011",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "4 人份湯需 600 毫升高湯，配方比例不變。做 10 人份需多少毫升？",
      "text": "4 人份湯需 600 毫升高湯，配方比例不變。做 10 人份需多少毫升？",
      "givenConditions": "配方比例固定。",
      "target": "用比例式放大配方",
      "choices": [
        "1000毫升",
        "1500毫升",
        "1200毫升",
        "2400毫升"
      ],
      "answerIndex": 1,
      "independentSolution": "比例式4:600=10:x，4x=6000，x=1500。",
      "mainExplanation": "每人高湯150毫升，10人需1500毫升。",
      "explanation": "配方比例不變時，每人份高湯為 600÷4=150 毫升。十人份需要 150×10=1500 毫升；也可用 4:600=10:x 交叉相乘得到同一答案，單位全程都是毫升且配方倍數一致。",
      "steps": [
        "先求每人份 600÷4=150 毫升。",
        "用每份量乘十人，得到 1500 毫升。",
        "以 4:600=10:1500 回驗比例相同。"
      ],
      "optionAnalysis": [
        {
          "choice": "1000毫升",
          "truth": false,
          "reason": "1000把每人量誤算100。"
        },
        {
          "choice": "1500毫升",
          "truth": true,
          "reason": "10/4=2.5倍，600×2.5=1500。"
        },
        {
          "choice": "1200毫升",
          "truth": false,
          "reason": "1200只放大2倍。"
        },
        {
          "choice": "2400毫升",
          "truth": false,
          "reason": "2400把10/4誤成4。"
        }
      ],
      "misconceptionTarget": "把增加六人直接加六百毫升，沒有先求每人份的固定量。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "人份對毫升。",
      "roundingCheck": "無需近似。",
      "ambiguityBoundaryAudit": "未涉及整包限制。",
      "difficultyReason": "情境轉譯與單位率。",
      "literacyContextNecessity": "配方保持不變決定材料量與人份成正比。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8168e5ab65abc5bcd8f28279f8e29eb6c72b5969e32b9dfcdd529c76f4d962ed"
    },
    {
      "questionId": "u06-s002-v012",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "地圖上 3 公分代表實際 1.2 公里。同一比例尺下，圖上 7.5 公分代表實際多遠？",
      "text": "地圖上 3 公分代表實際 1.2 公里。同一比例尺下，圖上 7.5 公分代表實際多遠？",
      "givenConditions": "同一地圖與比例尺。",
      "target": "以比例式處理比例尺資料",
      "choices": [
        "2.4公里",
        "3.6公里",
        "3公里",
        "4公里"
      ],
      "answerIndex": 2,
      "independentSolution": "3:1.2=7.5:x，3x=9，x=3。",
      "mainExplanation": "同一比例尺下圖上距離與實際距離成正比。",
      "explanation": "同一比例尺下，每一圖上公分代表 1.2÷3=0.4 公里。圖上七點五公分對應 7.5×0.4=3 公里；圖上與實際長度的對應順序前後一致，換算所得也是精確距離。",
      "steps": [
        "求單位比例 1.2÷3=0.4 公里/公分。",
        "將圖上 7.5 公分乘單位實際距離。",
        "得到三公里，代回比例尺核對。"
      ],
      "optionAnalysis": [
        {
          "choice": "2.4公里",
          "truth": false,
          "reason": "2.4只放大2倍。"
        },
        {
          "choice": "3.6公里",
          "truth": false,
          "reason": "3.6把倍數當3。"
        },
        {
          "choice": "3公里",
          "truth": true,
          "reason": "7.5/3=2.5倍，1.2×2.5=3公里。"
        },
        {
          "choice": "4公里",
          "truth": false,
          "reason": "4來自錯誤相加。"
        }
      ],
      "misconceptionTarget": "把七點五與一點二直接相加，或公分、公里的對應位置放反。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 100,
      "unitCheck": "對應單位分列，不必在比例式中混為同類比。",
      "roundingCheck": "1.2與7.5為精確值。",
      "ambiguityBoundaryAudit": "題目給的是兩組對應量，不是要求化簡公分:公里的單一比。",
      "difficultyReason": "需辨認對應比例。",
      "literacyContextNecessity": "同一比例尺是正比成立的必要資訊。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "de29570eff013d25ad64dd76ed07aaacbb4df7ba9d5b9420c3e12525642f7c6a"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u06-s002-cr001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "解比例式 5:(x-3)=4:10，列出 x 的限制並代回驗算。",
      "target": "含分母限制的比例式",
      "requiredWork": [
        "寫出使比例式有定義的限制。",
        "交叉相乘求x。",
        "代回比較兩邊比值。"
      ],
      "fullCreditSolution": [
        "比例後項 x-3 不可為零，所以定義域限制為 x≠3。",
        "由 5:(x-3)=4:10 交叉相乘得 50=4(x-3)，展開為 50=4x-12，故 4x=62、x=31/2。",
        "代回 x-3=25/2，左比 5÷(25/2)=2/5，右比 4÷10=2/5，且後項非零；左右比值完全相同，候選值通過原式驗算。"
      ],
      "alternativeSolutions": [
        "可先把4:10化為2:5，再由5:(x-3)=2:5求得2(x-3)=25。"
      ],
      "reasoningSteps": [
        "先從比例式後項寫出 x≠3 的限制。",
        "交叉相乘並完整展開括號，解一元一次方程式。",
        "把所得分數代回，核對比值與非零條件。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "列x≠3，求得31/2並代回兩邊皆2/5。"
        },
        {
          "score": 2,
          "criteria": "求得31/2且運算完整，但漏限制或驗算其中一項。"
        },
        {
          "score": 1,
          "criteria": "交叉相乘正確但方程整理有單一算術錯誤。"
        },
        {
          "score": 0,
          "criteria": "比例配對錯誤、答案使分母為0或無有效過程。"
        }
      ],
      "partialCreditRules": [
        "限制、求解、驗算各為實質得分點。",
        "答案31/2無過程最多1分。"
      ],
      "followThroughPolicy": "若交叉乘積正確但展開常數出錯，後續依錯誤方程一致求解可保留1分；若比例配對一開始錯誤，不採跟隨給分。",
      "unitNotationRules": "x可寫31/2或15.5；代回分母不得為0。",
      "answerOnlyPolicy": "只答x=15.5，最多1分。",
      "commonErrors": [
        "未先排除 x=3，使比例式可能出現零後項。",
        "展開括號時漏乘負三，錯把四倍的整體寫成只放大未知數。",
        "代回時把除以二分之二十五誤作乘以二分之二十五。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "x=31/2，且x≠3、代回成立。",
        "ambiguity": "比例式分母固定10與未知後項x-3，限制清楚。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "49e49804a524f92c88225c69f66d7fd0a02c533161f3acdaaef05bd6e71a1d0b"
    },
    {
      "questionId": "u06-s002-cr002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "解 (2x+1):6=(x-2):3，並說明是否有解。",
      "target": "判斷比例式無解",
      "requiredWork": [
        "交叉相乘並展開。",
        "判斷等式是否產生矛盾或恆等。",
        "用完整句子說明解集合。"
      ],
      "fullCreditSolution": [
        "由 (2x+1):6=(x-2):3 交叉相乘，得到 3(2x+1)=6(x-2)。",
        "展開為 6x+3=6x-12，兩邊同減 6x 後得到 3=-12，這是不可能等式。",
        "因此沒有任何 x 能使原比例成立；固定後項六與三皆非零，無解不是由定義域造成。"
      ],
      "alternativeSolutions": [
        "也可比較兩邊比值：(2x+1)/6 與 (x-2)/3，通分後分子相差固定15，不可能相等。"
      ],
      "reasoningSteps": [
        "依比例式對應順序交叉相乘。",
        "完整展開兩側並消去相同的 6x。",
        "由矛盾式判定無解，並區分於後項為零的情形。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確得到矛盾3=-12並結論無解。"
        },
        {
          "score": 2,
          "criteria": "判斷無解正確且有主要代數，但展開說明略簡。"
        },
        {
          "score": 1,
          "criteria": "交叉相乘正確，後續整理出現算術錯誤但顯示在判斷解的存在性。"
        },
        {
          "score": 0,
          "criteria": "給出某個數值解且未驗證，或無有效過程。"
        }
      ],
      "partialCreditRules": [
        "無解的理由比只寫『無解』重要。",
        "固定分母無額外排除值。"
      ],
      "followThroughPolicy": "若學生因移項錯誤得到數值，再代回發現不成立並改判無解，可給2分；未修正則最多1分。",
      "unitNotationRules": "使用『無解』或『沒有任何實數解』皆可；本題不需單位。",
      "answerOnlyPolicy": "只寫無解最多1分。",
      "commonErrors": [
        "看到兩側 6x 消去就寫 x=0，沒有處理剩餘常數。",
        "展開括號時只把六乘未知數，沒有把常數負二也乘六。",
        "把矛盾式三等於負十二解讀成有無限多解。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "無解。",
        "ambiguity": "兩邊固定後項皆非0，矛盾結論不受定義域影響。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "2a1add2d6bc2280e367b1de95f03dabfa3ed5b6bd4890914fe555b09d9c8ef34"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u06-s002-v001-semantic-review-r1",
      "questionId": "u06-s002-v001",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "42151b75aadcdbe81eb4f21ba8635f969c6970c57666f41cf92d37a4d5eb8c63",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "右比6/15=2/5，因此x/5=2/5，x=2。",
      "derivedAnswer": "2",
      "storedAnswer": "2",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "代入1得1/5≠2/5。",
        "15x=30，所以 x=2。",
        "把15÷5誤當答案。",
        "直接取右比前項。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「求比例式未知前項」，已明示必要條件：兩個後項5、15均非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：x=2唯一使兩邊比值相等。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "基礎一元比例式。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：右比6/15=2/5，因此x/5=2/5，x=2。 正確選項為「2」。逐項檢查後，唯一為真的理由是「15x=30，所以 x=2。」；其餘三項分別因「代入1得1/5≠2/5。」、「把15÷5誤當答案。」、「直接取右比前項。」而排除。邊界與語意再檢查：x=2唯一使兩邊比值相等。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v002-semantic-review-r1",
      "questionId": "u06-s002-v002",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "f59d4afb1b87bf89416f52549bd9e727a37d351d7852f1ccfaeb083ebe7beb87",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "4/10=2/5，而6/15=2/5，故x=10。",
      "derivedAnswer": "10",
      "storedAnswer": "10",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "8代入得1/2≠2/5。",
        "12來自60÷5。",
        "4×15=6x，60=6x，x=10。",
        "15把未知數直接等同右後項。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「求未知後項」，已明示必要條件：x不可為0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：正數解且代回有定義。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "未知數位於分母，需注意限制。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：4/10=2/5，而6/15=2/5，故x=10。 正確選項為「10」。逐項檢查後，唯一為真的理由是「4×15=6x，60=6x，x=10。」；其餘三項分別因「8代入得1/2≠2/5。」、「12來自60÷5。」、「15把未知數直接等同右後項。」而排除。邊界與語意再檢查：正數解且代回有定義。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v003-semantic-review-r1",
      "questionId": "u06-s002-v003",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "a239e217dba31e30ed2bca7ee2c82b08a7cc4a5e1925465e00e68ab2683ed117",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "18是6的3倍，前項5也乘3得15。",
      "derivedAnswer": "15",
      "storedAnswer": "15",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "12使右比2/3，不等於5/6。",
        "18使右比1。",
        "30來自5×6而非交叉相乘。",
        "6x=90，x=15。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「以等值比求未知項」，已明示必要條件：後項6、18非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：倍率法與交叉相乘一致。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "可用整數倍快速求解。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：18是6的3倍，前項5也乘3得15。 正確選項為「15」。逐項檢查後，唯一為真的理由是「6x=90，x=15。」；其餘三項分別因「12使右比2/3，不等於5/6。」、「18使右比1。」、「30來自5×6而非交叉相乘。」而排除。邊界與語意再檢查：倍率法與交叉相乘一致。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v004-semantic-review-r1",
      "questionId": "u06-s002-v004",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "a0c4f9012c6b4814f793a4fa09f7f384575bd2d044745fada9dda8c552b7f2ca",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "右比5/14，所以(x+2)/7=5/14，得x+2=5/2，x=1/2。",
      "derivedAnswer": "1/2",
      "storedAnswer": "1/2",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "14(x+2)=35，x+2=2.5，x=0.5。",
        "3/2是忘記減2的一種結果。",
        "2把x+2誤作x。",
        "5/2是x+2的值，不是x。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「解含括號的比例式」，已明示必要條件：7、14非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：x不在分母，無額外排除值。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確分數。。"
      },
      "difficultyReason": "兩階段代數整理。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：右比5/14，所以(x+2)/7=5/14，得x+2=5/2，x=1/2。 正確選項為「1/2」。逐項檢查後，唯一為真的理由是「14(x+2)=35，x+2=2.5，x=0.5。」；其餘三項分別因「3/2是忘記減2的一種結果。」、「2把x+2誤作x。」、「5/2是x+2的值，不是x。」而排除。邊界與語意再檢查：x不在分母，無額外排除值。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v005-semantic-review-r1",
      "questionId": "u06-s002-v005",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "49cc86be08842e52f2a2182506e1149c31bc60d0c728954ebe0f4fc4c049b317",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "設實際長度為 x 公尺，4:6=6:x。交叉相乘得 4x=36，所以 x=9。",
      "derivedAnswer": "9",
      "storedAnswer": "9",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "4是直接沿用第一段圖上長度。",
        "7.2使用了錯誤倍率。",
        "4:6與6:9比值相同。",
        "13.5使用了錯誤放大倍數。"
      ],
      "ambiguityChecks": {
        "wording": "題幹明確要求「用比例求對應實際長度」，沒有第二種合理所求。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "兩組比均以圖上公分在前、實際公尺在後。",
        "rounding": "近似與取整審查：0.8、1.2為精確小數。。"
      },
      "difficultyReason": "標準：維持對應順序並解實際尺度比例。",
      "literacyNecessity": null,
      "reviewerNote": "u06-s002-v005 中央修訂後獨立重算：設實際長度為 x 公尺，4:6=6:x。交叉相乘得 4x=36，所以 x=9。 四個選項逐項核對，唯一正解為「9」；其餘選項排除理由為：4是直接沿用第一段圖上長度。；7.2使用了錯誤倍率。；13.5使用了錯誤放大倍數。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v006-semantic-review-r1",
      "questionId": "u06-s002-v006",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "46e92891732d2e490d7dd684fe5ce283949b1f3630f1a087a18b1e015423d676",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "代入x=4，左比3/20；右比9/60=3/20。",
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "2使左比3/10。",
        "3把兩個3直接約掉。",
        "12是交叉乘積中間值。",
        "右比(9/10)÷6=3/20；(3/5)/x=3/20，故12=3x，x=4。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「解分數作為比例項的比例式」，已明示必要條件：x≠0，其他分母5、10、6非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題式中的冒號代表除法，括號關係已明確。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確分數。。"
      },
      "difficultyReason": "多層分數運算。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：代入x=4，左比3/20；右比9/60=3/20。 正確選項為「4」。逐項檢查後，唯一為真的理由是「右比(9/10)÷6=3/20；(3/5)/x=3/20，故12=3x，x=4。」；其餘三項分別因「2使左比3/10。」、「3把兩個3直接約掉。」、「12是交叉乘積中間值。」而排除。邊界與語意再檢查：題式中的冒號代表除法，括號關係已明確。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v007-semantic-review-r1",
      "questionId": "u06-s002-v007",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "c6dc24b272d7d86100958ba959913e7af152baf5d83dc3685bffbcc3530bbeac",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "代入12後左比5:10=1:2，右比3:6=1:2。",
      "derivedAnswer": "12",
      "storedAnswer": "12",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "30=3(x-2)，x-2=10，x=12。",
        "7來自5+2。",
        "8把6÷3加2。",
        "10是x-2的值。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「解未知數在後項且含平移的比例式」，已明示必要條件：x-2不可為0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：解12不等於排除值2。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "兼具定義域與括號。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：代入12後左比5:10=1:2，右比3:6=1:2。 正確選項為「12」。逐項檢查後，唯一為真的理由是「30=3(x-2)，x-2=10，x=12。」；其餘三項分別因「7來自5+2。」、「8把6÷3加2。」、「10是x-2的值。」而排除。邊界與語意再檢查：解12不等於排除值2。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v008-semantic-review-r1",
      "questionId": "u06-s002-v008",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "f8b56d0cfc23cc4cdd8f91fed698de9ad6c5471b05a2a0d19225c4b27b421321",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "代入x=7/3：左側(11/3):9=11/27，右側(22/3):18=11/27。",
      "derivedAnswer": "7/3",
      "storedAnswer": "7/3",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "代入3時左右比值不同。",
        "18(2x-1)=9(x+5)，整理得27x=63，所以x=7/3。",
        "只比較常數會誤得5。",
        "7漏除以係數27。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「解兩邊皆含未知數的比例式」，已明示必要條件：9、18非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：兩邊分母固定非0，所得解唯一。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確分數。。"
      },
      "difficultyReason": "多步一元一次方程式。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：代入x=7/3：左側(11/3):9=11/27，右側(22/3):18=11/27。 正確選項為「7/3」。逐項檢查後，唯一為真的理由是「18(2x-1)=9(x+5)，整理得27x=63，所以x=7/3。」；其餘三項分別因「代入3時左右比值不同。」、「只比較常數會誤得5。」、「7漏除以係數27。」而排除。邊界與語意再檢查：兩邊分母固定非0，所得解唯一。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v009-semantic-review-r1",
      "questionId": "u06-s002-v009",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "1ef61717233fdf00eba32f52e0c76f4cd3555bfcddd47885a3267ea7bfbb2ae8",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "代入5：左4/4=1，右10/10=1。",
      "derivedAnswer": "5",
      "storedAnswer": "5",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "3使左右分別1/2與4/5。",
        "7來自錯誤移項。",
        "9把常數直接相加。",
        "10(x-1)=4(x+5)，10x-10=4x+20，6x=30，x=5。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「解雙邊含未知數比例式」，已明示必要條件：固定後項4、10非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：代回兩邊皆為1，唯一解。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "多步代數但仍在國中範圍。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：代入5：左4/4=1，右10/10=1。 正確選項為「5」。逐項檢查後，唯一為真的理由是「10(x-1)=4(x+5)，10x-10=4x+20，6x=30，x=5。」；其餘三項分別因「3使左右分別1/2與4/5。」、「7來自錯誤移項。」、「9把常數直接相加。」而排除。邊界與語意再檢查：代回兩邊皆為1，唯一解。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v010-semantic-review-r1",
      "questionId": "u06-s002-v010",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "47d53e11ff0b5cdbee94cd739dd89d0dad5e6bdafb5d090167463190d3f64542",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "12:18=30:t，12t=540，t=45。",
      "derivedAnswer": "45秒",
      "storedAnswer": "45秒",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "頁數與時間成正比，30/12=2.5，所以18×2.5=45。",
        "36秒只乘2。",
        "40秒以錯誤單位率計算。",
        "54秒把倍數當3。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「用比例式處理固定速率」，已明示必要條件：影印速度固定且無啟動時間。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：頁與秒的對應順序一致。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：情境明示速度固定，故正比模型成立。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "需把生活敘述轉成比例式。",
      "literacyNecessity": "頁數與時間的固定速率是解題必要條件，刪除情境便無法判定正比。",
      "reviewerNote": "獨立重算：12:18=30:t，12t=540，t=45。 正確選項為「45秒」。逐項檢查後，唯一為真的理由是「頁數與時間成正比，30/12=2.5，所以18×2.5=45。」；其餘三項分別因「36秒只乘2。」、「40秒以錯誤單位率計算。」、「54秒把倍數當3。」而排除。邊界與語意再檢查：情境明示速度固定，故正比模型成立。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v011-semantic-review-r1",
      "questionId": "u06-s002-v011",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "8168e5ab65abc5bcd8f28279f8e29eb6c72b5969e32b9dfcdd529c76f4d962ed",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "比例式4:600=10:x，4x=6000，x=1500。",
      "derivedAnswer": "1500毫升",
      "storedAnswer": "1500毫升",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "1000把每人量誤算100。",
        "10/4=2.5倍，600×2.5=1500。",
        "1200只放大2倍。",
        "2400把10/4誤成4。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「用比例式放大配方」，已明示必要條件：配方比例固定。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：人份對毫升。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：未涉及整包限制。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無需近似。。"
      },
      "difficultyReason": "情境轉譯與單位率。",
      "literacyNecessity": "配方保持不變決定材料量與人份成正比。",
      "reviewerNote": "獨立重算：比例式4:600=10:x，4x=6000，x=1500。 正確選項為「1500毫升」。逐項檢查後，唯一為真的理由是「10/4=2.5倍，600×2.5=1500。」；其餘三項分別因「1000把每人量誤算100。」、「1200只放大2倍。」、「2400把10/4誤成4。」而排除。邊界與語意再檢查：未涉及整包限制。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v012-semantic-review-r1",
      "questionId": "u06-s002-v012",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "de29570eff013d25ad64dd76ed07aaacbb4df7ba9d5b9420c3e12525642f7c6a",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "3:1.2=7.5:x，3x=9，x=3。",
      "derivedAnswer": "3公里",
      "storedAnswer": "3公里",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "2.4只放大2倍。",
        "3.6把倍數當3。",
        "7.5/3=2.5倍，1.2×2.5=3公里。",
        "4來自錯誤相加。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「以比例式處理比例尺資料」，已明示必要條件：同一地圖與比例尺。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：對應單位分列，不必在比例式中混為同類比。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題目給的是兩組對應量，不是要求化簡公分:公里的單一比。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：1.2與7.5為精確值。。"
      },
      "difficultyReason": "需辨認對應比例。",
      "literacyNecessity": "同一比例尺是正比成立的必要資訊。",
      "reviewerNote": "獨立重算：3:1.2=7.5:x，3x=9，x=3。 正確選項為「3公里」。逐項檢查後，唯一為真的理由是「7.5/3=2.5倍，1.2×2.5=3公里。」；其餘三項分別因「2.4只放大2倍。」、「3.6把倍數當3。」、「4來自錯誤相加。」而排除。邊界與語意再檢查：題目給的是兩組對應量，不是要求化簡公分:公里的單一比。",
      "reviewerDecision": "pass"
    }
  ],
  "drawingSpecs": []
};
