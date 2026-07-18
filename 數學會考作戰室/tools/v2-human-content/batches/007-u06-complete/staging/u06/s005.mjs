// Deterministically serialized reviewed U06 content. Do not edit.
export default {
  "lecture": {
    "lectureId": "u06-s005-lecture-r1",
    "unitId": "u06",
    "numericUnitId": 6,
    "topicId": "u06-variation",
    "skillId": "direct-variation",
    "lockedSkillTitle": "正比",
    "title": "正比：比值固定的兩量關係",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "unitTitle": "比例式",
      "topicTitle": "正比與反比",
      "skillOrder": 5,
      "lockedPrerequisiteSkillIds": [
        "proportion-property"
      ],
      "capBoundary": "處理 y=kx 的正比判斷、表格、簡單圖形敘述與生活應用；不使用高中函數形式化理論。"
    },
    "prerequisiteBridge": "比例式讓兩組資料的 y:x 相等。當所有資料都維持相同比值 k，就形成正比關係。",
    "learningOutcomes": [
      "能以 y/x 固定或 y=kx 判斷正比。",
      "能由一組非零資料求正比常數 k。",
      "能補完正比表格並解生活問題。",
      "能辨認通過原點的直線特徵，但不只靠外觀判斷。"
    ],
    "glossary": [
      {
        "term": "正比",
        "definition": "兩量的比值固定；一量乘幾倍，另一量也乘同樣倍數。"
      },
      {
        "term": "正比常數",
        "definition": "y=kx 中固定不變且不等於 0 的 k，也就是 y/x。"
      },
      {
        "term": "成對資料",
        "definition": "同一情況下相對應的 x 與 y 值。"
      },
      {
        "term": "原點",
        "definition": "座標 (0,0)。正比圖形在可延伸時通過原點。"
      }
    ],
    "notation": [
      {
        "symbol": "y∝x",
        "meaning": "y 與 x 成正比。"
      },
      {
        "symbol": "y=kx",
        "meaning": "k 為固定且非零的正比常數。"
      },
      {
        "symbol": "k=y/x",
        "meaning": "x≠0 時由一組資料求 k。"
      }
    ],
    "conceptNarrative": [
      "正比不是兩量同時增加而已，而是 y÷x 在所有成對資料中相同。",
      "若單價固定，總價=單價×數量，因此總價與數量成正比。",
      "x 變成 3 倍時，y 也變成 3 倍；x 減半時，y 也減半。",
      "y=kx 的圖形是通過原點的直線，但只看到兩點連成直線還不夠，必須確認原點或比值。",
      "k 是非零常數，可以是正數或負數；生活量通常再受非負限制。"
    ],
    "formalDefinitions": [
      {
        "name": "正比關係",
        "statement": "存在固定非零常數 k，使每一組資料都滿足 y=kx。"
      },
      {
        "name": "正比常數",
        "statement": "當 x≠0 時，固定比值 y/x。"
      }
    ],
    "formulas": [
      {
        "formula": "y=kx",
        "conditions": [
          "k 為固定非零常數"
        ],
        "meaning": "正比標準式。"
      },
      {
        "formula": "y1/x1=y2/x2",
        "conditions": [
          "x1、x2≠0"
        ],
        "meaning": "兩組正比資料的比值相同。"
      }
    ],
    "nonApplicableCases": [
      "只有一組資料無法證明所有情況皆為正比。",
      "y=x+3 雖是直線，卻不通過原點，不是正比。",
      "x、y 同時增加不代表比值固定。",
      "固定加同一數量不是固定倍數。",
      "生活情境若有基本費，總費用通常不是正比。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "先確認題目明示兩量成正比，或有足夠資料可以檢查比值。",
        "check": "不能只因兩量同增就宣稱正比。"
      },
      {
        "step": 2,
        "instruction": "選取x不為零的數對，依固定方向計算k=y÷x。",
        "check": "除法順序與y=kx一致。"
      },
      {
        "step": 3,
        "instruction": "把求得的常數寫入y=kx，必要時代入另一組資料檢查。",
        "check": "關係式沒有題目未給的固定加項。"
      },
      {
        "step": 4,
        "instruction": "求新對應值時代入已知量，保留分數或精確小數到最後。",
        "check": "單位與百分率倍率已統一。"
      },
      {
        "step": 5,
        "instruction": "用新數對重算y÷x，或列比例式交叉相乘完成驗算。",
        "check": "所有成對資料得到相同常數。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "y與x成正比，x=4時y=10，求k。",
        "solutionSteps": [
          "由正比寫k=y÷x。",
          "代入得到k=10÷4=5/2。",
          "檢查(5/2)×4=10。"
        ],
        "answer": "k=5/2。",
        "why": "正比常數的方向是y除以x，且必須使用x不為零的資料。代回y=kx得到原來的十，證明約分後的二分之五沒有顛倒，也沒有把差值誤當常數。"
      },
      {
        "exampleId": "L2",
        "prompt": "承上，x=14時求y。",
        "solutionSteps": [
          "沿用y=(5/2)x。",
          "代入x=14得y=35。",
          "驗算35÷14=5/2。"
        ],
        "answer": "35。",
        "why": "同一個正比關係中的k不可改變，因此直接把新x代入既有關係式。反算三十五除以十四仍為二分之五，確認新數對與原數對屬於同一正比。"
      },
      {
        "exampleId": "L3",
        "prompt": "資料(2,6)、(5,15)、(8,25)是否正比？",
        "solutionSteps": [
          "計算前兩組y÷x皆為3。",
          "第三組25÷8不等於3。",
          "因比值不全相同，判定不是正比。"
        ],
        "answer": "不是正比。",
        "why": "多組資料必須全部通過固定比值檢查，不能看到前兩組成立就停止。第三組乘積或差值即使看似接近也不重要，二十五除以八不是三便足以否定正比。"
      },
      {
        "exampleId": "L4",
        "prompt": "每公尺布120元且無其他費用，買x公尺付y元，寫關係式。",
        "solutionSteps": [
          "辨認固定單價120元/公尺。",
          "列總價=單價×長度。",
          "寫成y=120x並檢查x=0時y=0。"
        ],
        "answer": "y=120x。",
        "why": "沒有基本費時，每增加一公尺只增加固定的一百二十元，且零公尺對應零元，因此總價與長度的比值固定。若另有運費，關係式便會多出常數項而不再是正比。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "看到兩量同增就判正比。",
        "why": "未檢查固定比值。",
        "correction": "計算每組 y/x。"
      },
      {
        "mistake": "把 k 算成 x/y。",
        "why": "除法順序顛倒。",
        "correction": "由 y=kx 得 k=y/x。"
      },
      {
        "mistake": "把 y=3x+2 當正比。",
        "why": "忽略固定項使圖形不過原點。",
        "correction": "正比必可寫成 y=kx。"
      },
      {
        "mistake": "x=0 時用 y/x 求 k。",
        "why": "除以 0 無定義。",
        "correction": "用非零 x 的資料求 k。"
      },
      {
        "mistake": "單價固定但另有運費仍判正比。",
        "why": "基本費破壞固定比值。",
        "correction": "總價=單價×數量+運費。"
      },
      {
        "mistake": "表格只檢查一列。",
        "why": "無法保證其他資料符合。",
        "correction": "逐組算比值。"
      }
    ],
    "selfCheck": [
      "我檢查的是 y/x 而非差值嗎？",
      "正比常數在每組資料都相同嗎？",
      "關係式可寫成 y=kx 嗎？",
      "圖形若使用，是否通過原點？",
      "情境中有沒有基本費或門檻？"
    ],
    "summary": [
      "正比的本質是 y/x 固定。",
      "標準式為 y=kx。",
      "倍數變化同步，圖形為通過原點的直線。",
      "只同增、只有一組資料或有固定加項都不足以判正比。"
    ],
    "connections": {
      "previous": "比例式性質說明不同資料組的比值相等。",
      "next": [
        "反比改以乘積固定來描述。",
        "比例尺是圖上長與實際長的正比關係。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u06-s005-v001",
        "u06-s005-v002",
        "u06-s005-v003",
        "u06-s005-v004",
        "u06-s005-v005",
        "u06-s005-v006",
        "u06-s005-v007",
        "u06-s005-v008",
        "u06-s005-v009",
        "u06-s005-v010",
        "u06-s005-v011",
        "u06-s005-v012"
      ],
      "constructedResponseIds": [
        "u06-s005-cr001",
        "u06-s005-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "contentAuthorityConfirmed": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐組重算 6/2、15/5、25/8，確認第三組破壞固定比值；並以基本費反例區分線性關係與正比，所有式子皆標明 x≠0 才可用 y/x 求常數。",
      "reviewVersion": "human-lecture-review-u06-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "1a2e8e64384157200d6df7fb17bdca23d6b8ce49ee284b4711f69ad3bdd2301a"
  },
  "mcQuestions": [
    {
      "questionId": "u06-s005-v001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "direct-variation",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "y 與 x 成正比，且 x=4 時 y=12。正比常數 k 為何？",
      "text": "y 與 x 成正比，且 x=4 時 y=12。正比常數 k 為何？",
      "givenConditions": "x=4非0。",
      "target": "求正比常數",
      "choices": [
        "3",
        "1/3",
        "8",
        "16"
      ],
      "answerIndex": 0,
      "independentSolution": "檢查12=3×4。",
      "mainExplanation": "由y=kx得k=12÷4。",
      "explanation": "正比關係可寫成y=kx；因x=4不為零，所以正比常數k=y÷x=12÷4=3。代回原式得到12=3×4，與已知資料完全相符，因此答案是3，而不是把除法順序倒置成四分之一。",
      "steps": [
        "由成正比寫出y=kx。",
        "利用x不為零，計算k=12÷4=3。",
        "代回檢查3×4=12，確認常數與資料一致。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": true,
          "reason": "k=y/x=12/4=3。"
        },
        {
          "choice": "1/3",
          "truth": false,
          "reason": "1/3把除法順序顛倒。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "8是12-4。"
        },
        {
          "choice": "16",
          "truth": false,
          "reason": "16是12+4。"
        }
      ],
      "misconceptionTarget": "把正比常數誤當兩量的差，或將y÷x顛倒算成x÷y。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-property"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-property'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 50,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "單組資料加上成正比條件已足以定k。",
      "difficultyReason": "直接由一組 x、y 求正比常數，屬於單步基礎代入。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c8f3544ae44e71891ebbc7ede0ed182db99c4380b62047ef8f31cb638d172d36"
    },
    {
      "questionId": "u06-s005-v002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "direct-variation",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "y=5x。當 x=7 時，y 為何？",
      "text": "y=5x。當 x=7 時，y 為何？",
      "givenConditions": "x=7。",
      "target": "由正比式求對應值",
      "choices": [
        "12",
        "25",
        "35",
        "42"
      ],
      "answerIndex": 2,
      "independentSolution": "35/7=5，符合常數。",
      "mainExplanation": "直接代入正比關係式。",
      "explanation": "關係式已明確給出y=5x，把x=7代入便得y=5×7=35。再以35÷7=5核對，所得比值仍等於正比常數5，所以35是唯一符合關係式的選項，其他數值都無法通過代入檢查。",
      "steps": [
        "辨認正比常數為5。",
        "將x=7代入y=5x，算得y=35。",
        "用35÷7=5驗算固定比值。"
      ],
      "optionAnalysis": [
        {
          "choice": "12",
          "truth": false,
          "reason": "12是5+7。"
        },
        {
          "choice": "25",
          "truth": false,
          "reason": "25忽略x。"
        },
        {
          "choice": "35",
          "truth": true,
          "reason": "代入x=7，y=5×7=35。"
        },
        {
          "choice": "42",
          "truth": false,
          "reason": "42把係數當6。"
        }
      ],
      "misconceptionTarget": "把式中的乘法看成加法，或只使用係數5而漏掉x的數值。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-property"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-property'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 45,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "關係式完整。",
      "difficultyReason": "基礎代值。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c07e5b17e3032f62b42582e0aebcb35b738ff7ff21714a229a1acb2072d5903a"
    },
    {
      "questionId": "u06-s005-v003",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "direct-variation",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "下列哪組資料呈正比？",
      "text": "下列哪組資料呈正比？",
      "givenConditions": "各x非0。",
      "target": "從表格判斷正比",
      "choices": [
        "(2,6)、(5,14)、(8,24)",
        "(2,6)、(5,15)、(8,24)",
        "(1,4)、(2,7)、(3,10)",
        "(3,9)、(6,18)、(9,28)"
      ],
      "answerIndex": 1,
      "independentSolution": "第二組依序有6÷2=3、15÷5=3、24÷8=3，所以比值固定為3，可寫成y=3x。",
      "mainExplanation": "逐組計算y/x，只有第一組全部相同。",
      "explanation": "判斷正比要逐一檢查每個數對的y÷x。第二個選項依序得到6÷2=3、15÷5=3、24÷8=3，比值全都相同，因此可寫成y=3x。其餘選項至少有一組比值不同，不能只因數值大致同增或差值規律就判為正比。",
      "steps": [
        "依(x,y)順序計算每組y÷x。",
        "第二個選項的三個比值都是3。",
        "檢查其餘選項皆有不同比值，確認第二項唯一成立。"
      ],
      "optionAnalysis": [
        {
          "choice": "(2,6)、(5,14)、(8,24)",
          "truth": false,
          "reason": "第二組14/5≠3。"
        },
        {
          "choice": "(2,6)、(5,15)、(8,24)",
          "truth": true,
          "reason": "三組y/x皆為3。"
        },
        {
          "choice": "(1,4)、(2,7)、(3,10)",
          "truth": false,
          "reason": "差值固定3但比值不固定。"
        },
        {
          "choice": "(3,9)、(6,18)、(9,28)",
          "truth": false,
          "reason": "第三組28/9≠3。"
        }
      ],
      "misconceptionTarget": "只看數值同時增加或固定差，而沒有逐組核對y÷x是否固定。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-property"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-property'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 75,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "成對順序明確為(x,y)。",
      "difficultyReason": "多組比值檢查。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3083c252f8cda9a0ddd56d38ec2a43b4699b29b8f7286d16838c6a862a4d6c90"
    },
    {
      "questionId": "u06-s005-v004",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "direct-variation",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "y 與 x 成正比，x=6 時 y=15。當 x=14 時，y 為何？",
      "text": "y 與 x 成正比，x=6 時 y=15。當 x=14 時，y 為何？",
      "givenConditions": "x均非0。",
      "target": "由一組資料推另一組",
      "choices": [
        "21",
        "30",
        "49",
        "35"
      ],
      "answerIndex": 3,
      "independentSolution": "6:15=14:35，交叉積均210。",
      "mainExplanation": "先求固定比值，再代入新x。",
      "explanation": "先由已知數對求正比常數：k=15÷6=5/2。當x=14時，y=(5/2)×14=35。也可列6:15=14:35，兩邊交叉積都是210，驗證35符合相同比值且為唯一答案；不能把兩量的增加量當成固定差。",
      "steps": [
        "計算k=15÷6=5/2。",
        "代入x=14，得到y=(5/2)×14=35。",
        "以6×35=15×14=210驗算比例式。"
      ],
      "optionAnalysis": [
        {
          "choice": "21",
          "truth": false,
          "reason": "21使用k=1.5。"
        },
        {
          "choice": "30",
          "truth": false,
          "reason": "30只把x增加8也加到y。"
        },
        {
          "choice": "49",
          "truth": false,
          "reason": "49把14乘3.5。"
        },
        {
          "choice": "35",
          "truth": true,
          "reason": "k=15/6=5/2，y=(5/2)×14=35。"
        }
      ],
      "misconceptionTarget": "把x增加的差直接加到y，忽略正比維持的是倍數與比值。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-property"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-property'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 80,
      "unitCheck": "無單位。",
      "roundingCheck": "精確分數。",
      "ambiguityBoundaryAudit": "成正比條件明示。",
      "difficultyReason": "先由已知點求正比常數，再代入新 x，包含兩個相依步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "43fe868945f92e6c7b0eefb9fa82264525fb4a23d1971dd2a1646fb0f0a41fff"
    },
    {
      "questionId": "u06-s005-v005",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "direct-variation",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "某正比關係中，x=3 時 y=−12。當 x=−5 時，y 為何？",
      "text": "某正比關係中，x=3 時 y=−12。當 x=−5 時，y 為何？",
      "givenConditions": "x非0。",
      "target": "處理負正比常數",
      "choices": [
        "−20",
        "−8",
        "20",
        "8"
      ],
      "answerIndex": 2,
      "independentSolution": "20/(-5)=-4，與原比值相同。",
      "mainExplanation": "正比常數可為負，代入時注意符號。",
      "explanation": "由x=3、y=-12求得k=-12÷3=-4，因此關係式是y=-4x。把x=-5代入，y=(-4)×(-5)=20；負數乘負數為正。最後用20÷(-5)=-4驗算，確實維持同一正比常數，答案的符號與大小都符合題設。",
      "steps": [
        "由已知數對算得k=-4。",
        "將x=-5代入y=-4x，算得y=20。",
        "用20÷(-5)=-4檢查比值不變。"
      ],
      "optionAnalysis": [
        {
          "choice": "−20",
          "truth": false,
          "reason": "−20漏算負負得正。"
        },
        {
          "choice": "−8",
          "truth": false,
          "reason": "−8用差值。"
        },
        {
          "choice": "20",
          "truth": true,
          "reason": "k=−12/3=−4，y=−4×(−5)=20。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "8計算錯誤。"
        }
      ],
      "misconceptionTarget": "在負正比常數下漏用負負得正，或只比較數值的絕對值。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-property"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-property'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "代數範圍允許負值。",
      "difficultyReason": "符號與正比結合。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2d1e54fb9788634151918c1131d5068fe9672753417ad87489dae83462d89548"
    },
    {
      "questionId": "u06-s005-v006",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "direct-variation",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "已知 x>0、y>0 且 y 與 x 成正比；x 增加 40% 時，y 如何變化？",
      "text": "已知 x>0、y>0 且 y 與 x 成正比；x 增加 40% 時，y 如何變化？",
      "givenConditions": "x>0、y>0且正比常數固定。",
      "target": "判斷正比百分比變化",
      "choices": [
        "增加40%",
        "增加20%",
        "增加60%",
        "減少40%"
      ],
      "answerIndex": 0,
      "independentSolution": "y的新舊比為1.4。",
      "mainExplanation": "用y=kx比較變化前後。",
      "explanation": "設原來為y₁=kx₁。x增加40%後，x₂=1.4x₁，因此y₂=kx₂=1.4kx₁=1.4y₁。題幹已限制y>0，所以新值比原值多0.4y₁，語意上就是增加40%，不會出現負值大小方向的歧義，也不需要另加四十個單位。",
      "steps": [
        "把增加40%寫成x₂=1.4x₁。",
        "利用y=kx推得y₂=1.4y₁。",
        "因y₁>0，確認y增加量為0.4y₁，即增加40%。"
      ],
      "optionAnalysis": [
        {
          "choice": "增加40%",
          "truth": true,
          "reason": "正比中兩量乘相同倍率；x乘1.4，y也乘1.4。"
        },
        {
          "choice": "增加20%",
          "truth": false,
          "reason": "20%沒有依據。"
        },
        {
          "choice": "增加60%",
          "truth": false,
          "reason": "把40%重複計入。"
        },
        {
          "choice": "減少40%",
          "truth": false,
          "reason": "方向錯誤。"
        }
      ],
      "misconceptionTarget": "未把百分率轉成1.4倍，或忽略正值條件而混淆負數的增減語意。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-property"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-property'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "百分率。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "x原值非0時百分比有意義。",
      "difficultyReason": "比例變化推理。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8b0a9acbcbdfc8ad5c4dcc0d5e4c91dfb942d809a729623a05e9fbcd60576646"
    },
    {
      "questionId": "u06-s005-v007",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "direct-variation",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "正比直線經過 (0,0) 與 (4,−10)。關係式為何？",
      "text": "正比直線經過 (0,0) 與 (4,−10)。關係式為何？",
      "givenConditions": "已明示正比且含原點。",
      "target": "由點求正比關係式",
      "choices": [
        "y=(5/2)x",
        "y=−(2/5)x",
        "y=−(5/2)x+4",
        "y=−(5/2)x"
      ],
      "answerIndex": 3,
      "independentSolution": "代入x=4得y=-10，且x=0時y=0。",
      "mainExplanation": "正比式無常數項，係數由非零點求得。",
      "explanation": "正比關係必為y=kx且沒有固定加項。利用非零點(4,-10)，可得k=-10÷4=-5/2，所以關係式為y=-(5/2)x。代入原點與(4,-10)都成立，也排除符號、倒數及多加截距的選項。",
      "steps": [
        "由正比特徵寫成y=kx。",
        "用點(4,-10)算得k=-5/2。",
        "代回兩個已知點，確認y=-(5/2)x。"
      ],
      "optionAnalysis": [
        {
          "choice": "y=(5/2)x",
          "truth": false,
          "reason": "符號錯。"
        },
        {
          "choice": "y=−(2/5)x",
          "truth": false,
          "reason": "把x/y當k。"
        },
        {
          "choice": "y=−(5/2)x+4",
          "truth": false,
          "reason": "多出固定項，不再通過原點。"
        },
        {
          "choice": "y=−(5/2)x",
          "truth": true,
          "reason": "k=−10/4=−5/2。"
        }
      ],
      "misconceptionTarget": "把斜率倒置、漏掉負號，或把正比直線錯寫成含截距的一次函數。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-property"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-property'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 105,
      "unitCheck": "座標無單位。",
      "roundingCheck": "精確分數。",
      "ambiguityBoundaryAudit": "兩點足以確定此正比式。",
      "difficultyReason": "結合圖形特徵與代數。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "73ec5d2f3ef5a4bfa8b520b46bc03314565dff15a5be5c379ad10b63120ef19b"
    },
    {
      "questionId": "u06-s005-v008",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "direct-variation",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "若 y 與 x 成正比，且 x:y=4:9，則 y=18 時 x 為何？",
      "text": "若 y 與 x 成正比，且 x:y=4:9，則 y=18 時 x 為何？",
      "givenConditions": "y非0。",
      "target": "在比與正比式間轉換",
      "choices": [
        "4",
        "8",
        "13",
        "40.5"
      ],
      "answerIndex": 1,
      "independentSolution": "8:18=4:9。",
      "mainExplanation": "維持x:y=4:9，y由9份變18所以每份2。",
      "explanation": "已知x:y=4:9，當y由9份變成18時，倍率是18÷9=2，所以x也要由4份乘2成為8。用另一方法核對：x=18×(4/9)=8，且8:18約分後正是4:9，兩種算法都維持題目指定的比例方向。",
      "steps": [
        "由y=18求每一份為18÷9=2。",
        "計算x=4×2=8。",
        "把8:18約分為4:9，驗證比例方向。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "4是份數不是實量。"
        },
        {
          "choice": "8",
          "truth": true,
          "reason": "x/y=4/9，x=18×4/9=8。"
        },
        {
          "choice": "13",
          "truth": false,
          "reason": "13由18-5。"
        },
        {
          "choice": "40.5",
          "truth": false,
          "reason": "40.5把比倒置。"
        }
      ],
      "misconceptionTarget": "把x:y誤讀為y:x，或把比例中的份數4直接當作實際的x。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-property"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-property'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 95,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "給定x:y而非y:x。",
      "difficultyReason": "需要精確對應方向。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0478f704aec708d9f35e8a51459746c86bfd405b72bc7c989d6953e845e4a015"
    },
    {
      "questionId": "u06-s005-v009",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "direct-variation",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "y=kx 的資料包含 (a,18) 與 (2a,30)，且 a≠0。這可能是正比嗎？",
      "text": "y=kx 的資料包含 (a,18) 與 (2a,30)，且 a≠0。這可能是正比嗎？",
      "givenConditions": "a≠0。",
      "target": "檢查參數資料的一致性",
      "choices": [
        "可能，k=18/a",
        "可能，k=15/a",
        "僅當a=0時可能",
        "不可能"
      ],
      "answerIndex": 3,
      "independentSolution": "兩組比值18/a與15/a不同。",
      "mainExplanation": "比較倍數即可發現矛盾。",
      "explanation": "若兩點屬於同一正比關係，x從a變成2a時是加倍，y也必須從18加倍為36，但題目給的是30。等價地，兩組比值18/a與30/(2a)=15/a在a不為零時不相等，因此不存在同一個k。",
      "steps": [
        "比較兩點的x，確認由a加倍成2a。",
        "正比要求y由18加倍成36，但實際為30。",
        "再比較18/a與15/a，確定兩組常數矛盾。"
      ],
      "optionAnalysis": [
        {
          "choice": "可能，k=18/a",
          "truth": false,
          "reason": "第一組只能給k，第二組不符合。"
        },
        {
          "choice": "可能，k=15/a",
          "truth": false,
          "reason": "只符合第二組。"
        },
        {
          "choice": "僅當a=0時可能",
          "truth": false,
          "reason": "題設排除a=0。"
        },
        {
          "choice": "不可能",
          "truth": true,
          "reason": "若正比，x加倍時y應加倍為36，不會是30。"
        }
      ],
      "misconceptionTarget": "只用其中一個數對求k，沒有檢查另一數對是否維持相同比值。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-property"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-property'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 120,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "不需知道a的具體值。",
      "difficultyReason": "抽象一致性。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "83ff7c46c82296e800f9db9d34be571cb8bbd62571d4dd77188413a667233cf2"
    },
    {
      "questionId": "u06-s005-v010",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "direct-variation",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "影印店不收基本費，每張 1.8 元。影印 x 張的總價 y 元，關係式為何？",
      "text": "影印店不收基本費，每張 1.8 元。影印 x 張的總價 y 元，關係式為何？",
      "givenConditions": "單價固定且無其他費用。",
      "target": "建立固定單價正比式",
      "choices": [
        "y=x+1.8",
        "y=1.8x",
        "y=1.8/x",
        "y=1.8x+1"
      ],
      "answerIndex": 1,
      "independentSolution": "y/x=1.8固定。",
      "mainExplanation": "每增加一張增加1.8元，且0張為0元。",
      "explanation": "每張固定1.8元且沒有基本費或其他費用，影印x張的總價就是1.8×x元，因此y=1.8x。當x=0時y也為0，且x>0時y/x=1.8固定，兩項都符合正比而非含固定加項的關係。",
      "steps": [
        "辨認每張單價1.8元是固定比值。",
        "依總價=單價×張數寫成y=1.8x。",
        "以0張0元及y/x=1.8檢查正比條件。"
      ],
      "optionAnalysis": [
        {
          "choice": "y=x+1.8",
          "truth": false,
          "reason": "把單價當固定加項。"
        },
        {
          "choice": "y=1.8x",
          "truth": true,
          "reason": "固定單價且無基本費，總價=單價×張數。"
        },
        {
          "choice": "y=1.8/x",
          "truth": false,
          "reason": "誤用反比。"
        },
        {
          "choice": "y=1.8x+1",
          "truth": false,
          "reason": "虛構基本費1元。"
        }
      ],
      "misconceptionTarget": "把單價當成固定加項，或自行加入題目未給的基本費與手續費。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-property"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-property'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 75,
      "unitCheck": "元與張。",
      "roundingCheck": "1.8元為精確單價。",
      "ambiguityBoundaryAudit": "x通常為非負整數。",
      "difficultyReason": "生活建模。",
      "literacyContextNecessity": "不收基本費使圖形通過原點，是正比成立的必要條件。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b90795949f372fcc05648fa7e0a0575be5e08911cba135e9e0c358b67f89ddd4"
    },
    {
      "questionId": "u06-s005-v011",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "direct-variation",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "水龍頭流量固定為每分鐘 7.5 公升。開 16 分鐘共流出多少公升？",
      "text": "水龍頭流量固定為每分鐘 7.5 公升。開 16 分鐘共流出多少公升？",
      "givenConditions": "流量在16分鐘內固定。",
      "target": "使用流量正比",
      "choices": [
        "120公升",
        "90公升",
        "112.5公升",
        "127.5公升"
      ],
      "answerIndex": 0,
      "independentSolution": "120/16=7.5。",
      "mainExplanation": "固定流量下水量與時間成正比。",
      "explanation": "流量固定為每分鐘7.5公升，總水量與時間成正比。開16分鐘的水量是7.5×16=7.5×(10+6)=75+45=120公升；再以120÷16=7.5公升/分鐘驗算，單位率與題設一致，沒有額外的固定水量。",
      "steps": [
        "列出總量=流量×時間。",
        "計算7.5×16=120公升。",
        "用120÷16=7.5公升/分鐘反算驗證。"
      ],
      "optionAnalysis": [
        {
          "choice": "120公升",
          "truth": true,
          "reason": "總量=7.5×16=120。"
        },
        {
          "choice": "90公升",
          "truth": false,
          "reason": "90把16誤成12。"
        },
        {
          "choice": "112.5公升",
          "truth": false,
          "reason": "112.5只乘15分鐘。"
        },
        {
          "choice": "127.5公升",
          "truth": false,
          "reason": "127.5多加一分鐘。"
        }
      ],
      "misconceptionTarget": "小數乘法錯位，或誤用十五、十七分鐘而造成相鄰選項的結果。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-property"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-property'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 80,
      "unitCheck": "公升/分鐘×分鐘=公升。",
      "roundingCheck": "精確計算。",
      "ambiguityBoundaryAudit": "未考慮開關延遲。",
      "difficultyReason": "單位率應用。",
      "literacyContextNecessity": "固定流量與時間範圍是數學模型的必要資訊。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "cefff064e494dcb846311a66150504f30af1faafee9ba66541a62d22edce3e7f"
    },
    {
      "questionId": "u06-s005-v012",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "direct-variation",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "計步器顯示步數與路程成正比。2400 步走 1.8 公里，走 4 公里約需多少步？四捨五入到整步。",
      "text": "計步器顯示步數與路程成正比。2400 步走 1.8 公里，走 4 公里約需多少步？四捨五入到整步。",
      "givenConditions": "平均步幅不變。",
      "target": "正比估算與四捨五入",
      "choices": [
        "4320步",
        "5200步",
        "5333步",
        "5400步"
      ],
      "answerIndex": 2,
      "independentSolution": "5333步對應約3.99975公里。",
      "mainExplanation": "比例式2400:1.8=x:4。",
      "explanation": "平均步幅不變時，步數與路程成正比。列2400:1.8=x:4，得到x=2400×4÷1.8=5333.333…步；依題意最後才四捨五入為5333步。反算5333×1.8÷2400=3.99975公里，確實約為4公里，也符合題目要求的整步精度。",
      "steps": [
        "依步數與路程正比列2400:1.8=x:4。",
        "求得x=5333.333…步。",
        "四捨五入成5333步並反算約3.99975公里。"
      ],
      "optionAnalysis": [
        {
          "choice": "4320步",
          "truth": false,
          "reason": "倍率計算錯。"
        },
        {
          "choice": "5200步",
          "truth": false,
          "reason": "估算過低。"
        },
        {
          "choice": "5333步",
          "truth": true,
          "reason": "2400/1.8×4=5333.333…，四捨五入為5333。"
        },
        {
          "choice": "5400步",
          "truth": false,
          "reason": "把1.8近似2造成偏差。"
        }
      ],
      "misconceptionTarget": "過早把1.8近似為2，或在中途先取整導致最後步數偏離正確值。",
      "prerequisiteCheck": {
        "skillIds": [
          "proportion-property"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['proportion-property'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 115,
      "unitCheck": "步與公里。",
      "roundingCheck": "最後四捨五入到整步。",
      "ambiguityBoundaryAudit": "『約』與位數明示。",
      "difficultyReason": "素養含非整數單位率。",
      "literacyContextNecessity": "平均步幅固定是步數與路程成正比的必要假設。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2700bed75b46f72d8c3aaa9560a0dee0a74a5999446e1c13872c7883e547faf8"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u06-s005-cr001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "direct-variation",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "y 與 x 成正比，x=8時y=18。寫出關係式，並求x=20時的y。",
      "target": "由資料建立正比式",
      "requiredWork": [
        "求正比常數。",
        "寫y=kx。",
        "代入新x並驗算。"
      ],
      "fullCreditSolution": [
        "由y與x成正比可寫y=kx；利用x=8、y=18，算得k=18÷8=9/4。",
        "因此唯一的關係式為y=(9/4)x；係數也可寫成2.25，但不可增加固定項。",
        "代入x=20，得到y=(9/4)×20=45。",
        "最後計算45÷20=9/4，與原資料18÷8相同，完成獨立驗算。"
      ],
      "alternativeSolutions": [
        "可列8:18=20:y，交叉相乘得y=45，再由一組資料補寫關係式。"
      ],
      "reasoningSteps": [
        "由非零數對求正比常數k=9/4。",
        "把常數代入標準式y=kx。",
        "用新x=20求出y=45。",
        "比較新舊兩組y/x，確認比值固定。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "k=9/4、關係式正確、y=45且有驗算。"
        },
        {
          "score": 2,
          "criteria": "關係式與45正確，但漏k或驗算。"
        },
        {
          "score": 1,
          "criteria": "比例式建立正確但計算有單一錯誤。"
        },
        {
          "score": 0,
          "criteria": "使用固定差或反比乘積，且無法建立 y=kx 的正比關係。"
        }
      ],
      "partialCreditRules": [
        "關係式與求值各為核心。",
        "k寫成4/9但後續仍得到45屬矛盾，不給完整分。"
      ],
      "followThroughPolicy": "若k算術錯但後續依其k一致代入，可給1分；若使用y/x固定方向正確但約分錯，亦可給1分。",
      "unitNotationRules": "無單位；分數係數可寫2.25。",
      "answerOnlyPolicy": "只寫45最多1分，因題目還要求關係式。",
      "commonErrors": [
        "把k算成x÷y=4/9，導致關係式方向顛倒。",
        "把x增加十二誤解成y也增加十二，錯用固定差代替固定比。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "y=(9/4)x；x=20時y=45。",
        "ambiguity": "x均非0，資料足以定唯一正比式。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "b9f305da9fd325e2e36e7619b6f1ffe967bed543c14dff4eb2b756253f923e4c"
    },
    {
      "questionId": "u06-s005-cr002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "direct-variation",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "某計程方案無起跳費，行駛6公里收150元。假設車資與距離成正比，求14公里車資，並說明這個模型何時會失效。",
      "target": "正比生活模型與限制",
      "requiredWork": [
        "求每公里單價。",
        "按正比求14公里。",
        "指出至少一個破壞正比的現實條件。"
      ],
      "fullCreditSolution": [
        "題幹明示無起跳費且車資與距離成正比，所以每公里單價為150÷6=25元/公里。",
        "行駛14公里的車資是25×14=350元；也可列6:150=14:y求得相同結果。",
        "用350÷14=25元/公里反算，確認與六公里時的單價一致。",
        "若實際方案加入起跳費、等候費、夜間加成或分段費率，車資與距離的比值就不再固定，此正比模型便會失效。"
      ],
      "alternativeSolutions": [
        "可列6:150=14:x求x=350。"
      ],
      "reasoningSteps": [
        "由六公里150元算出固定單價25元/公里。",
        "以固定單價乘十四公里，求得350元。",
        "反算每公里單價以驗證正比。",
        "指出會破壞固定比值的具體現實費用。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "算得350元並具體說出起跳費等使模型失效的條件。"
        },
        {
          "score": 2,
          "criteria": "350元正確，但模型限制說明籠統。"
        },
        {
          "score": 1,
          "criteria": "正比例式正確但算術錯，或只指出有固定費而未求值。"
        },
        {
          "score": 0,
          "criteria": "把距離與車資當反比或無有效過程。"
        }
      ],
      "partialCreditRules": [
        "限制說明必須與固定比值直接相關。",
        "僅說『現實可能不同』不算具體。"
      ],
      "followThroughPolicy": "正比例式建立正確後的算術錯誤可給1分；模型限制部分可獨立給分，但總分仍依整體證據。",
      "unitNotationRules": "車資用元，距離用公里；單價為元/公里。",
      "answerOnlyPolicy": "只寫350元最多2分。",
      "commonErrors": [
        "忽略無起跳費條件，任意把固定費加到正比式。",
        "只寫現實可能不同，卻沒有指出何種費用會使每公里平均車資改變。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "350元；有固定或分段費時模型失效。",
        "ambiguity": "題目明示正比假設，同時要求辨認其邊界。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "d15d008c369c48357714190134ce57a0d8c68f31650cdf40433db4845e97bc1b"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u06-s005-v001-semantic-review-r1",
      "questionId": "u06-s005-v001",
      "unitId": "u06",
      "skillId": "direct-variation",
      "contentSha256": "c8f3544ae44e71891ebbc7ede0ed182db99c4380b62047ef8f31cb638d172d36",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "檢查12=3×4。",
      "derivedAnswer": "3",
      "storedAnswer": "3",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "k=y/x=12/4=3。",
        "1/3把除法順序顛倒。",
        "8是12-4。",
        "16是12+4。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「求正比常數」，已明示必要條件：x=4非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：單組資料加上成正比條件已足以定k。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "直接由一組 x、y 求正比常數，屬於單步基礎代入。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：檢查12=3×4。 正確選項為「3」。逐項檢查後，唯一為真的理由是「k=y/x=12/4=3。」；其餘三項分別因「1/3把除法順序顛倒。」、「8是12-4。」、「16是12+4。」而排除。邊界與語意再檢查：單組資料加上成正比條件已足以定k。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s005-v002-semantic-review-r1",
      "questionId": "u06-s005-v002",
      "unitId": "u06",
      "skillId": "direct-variation",
      "contentSha256": "c07e5b17e3032f62b42582e0aebcb35b738ff7ff21714a229a1acb2072d5903a",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "35/7=5，符合常數。",
      "derivedAnswer": "35",
      "storedAnswer": "35",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "12是5+7。",
        "25忽略x。",
        "代入x=7，y=5×7=35。",
        "42把係數當6。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由正比式求對應值」，已明示必要條件：x=7。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：關係式完整。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "基礎代值。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：35/7=5，符合常數。 正確選項為「35」。逐項檢查後，唯一為真的理由是「代入x=7，y=5×7=35。」；其餘三項分別因「12是5+7。」、「25忽略x。」、「42把係數當6。」而排除。邊界與語意再檢查：關係式完整。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s005-v003-semantic-review-r1",
      "questionId": "u06-s005-v003",
      "unitId": "u06",
      "skillId": "direct-variation",
      "contentSha256": "3083c252f8cda9a0ddd56d38ec2a43b4699b29b8f7286d16838c6a862a4d6c90",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "第二組依序有6÷2=3、15÷5=3、24÷8=3，所以比值固定為3，可寫成y=3x。",
      "derivedAnswer": "(2,6)、(5,15)、(8,24)",
      "storedAnswer": "(2,6)、(5,15)、(8,24)",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "第二組14/5≠3。",
        "三組y/x皆為3。",
        "差值固定3但比值不固定。",
        "第三組28/9≠3。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「從表格判斷正比」，已明示必要條件：各x非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：成對順序明確為(x,y)。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "多組比值檢查。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：第二組依序有6÷2=3、15÷5=3、24÷8=3，所以比值固定為3，可寫成y=3x。第一組的14÷5、第三組的各組比值、第四組的28÷9均破壞固定比值，因此第二組資料是唯一符合正比定義的選項。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s005-v004-semantic-review-r1",
      "questionId": "u06-s005-v004",
      "unitId": "u06",
      "skillId": "direct-variation",
      "contentSha256": "43fe868945f92e6c7b0eefb9fa82264525fb4a23d1971dd2a1646fb0f0a41fff",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "6:15=14:35，交叉積均210。",
      "derivedAnswer": "35",
      "storedAnswer": "35",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "21使用k=1.5。",
        "30只把x增加8也加到y。",
        "49把14乘3.5。",
        "k=15/6=5/2，y=(5/2)×14=35。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由一組資料推另一組」，已明示必要條件：x均非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：成正比條件明示。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確分數。。"
      },
      "difficultyReason": "先由已知點求正比常數，再代入新 x，包含兩個相依步驟。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：6:15=14:35，交叉積均210。 正確選項為「35」。逐項檢查後，唯一為真的理由是「k=15/6=5/2，y=(5/2)×14=35。」；其餘三項分別因「21使用k=1.5。」、「30只把x增加8也加到y。」、「49把14乘3.5。」而排除。邊界與語意再檢查：成正比條件明示。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s005-v005-semantic-review-r1",
      "questionId": "u06-s005-v005",
      "unitId": "u06",
      "skillId": "direct-variation",
      "contentSha256": "2d1e54fb9788634151918c1131d5068fe9672753417ad87489dae83462d89548",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "20/(-5)=-4，與原比值相同。",
      "derivedAnswer": "20",
      "storedAnswer": "20",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "−20漏算負負得正。",
        "−8用差值。",
        "k=−12/3=−4，y=−4×(−5)=20。",
        "8計算錯誤。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「處理負正比常數」，已明示必要條件：x非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：代數範圍允許負值。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "符號與正比結合。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：20/(-5)=-4，與原比值相同。 正確選項為「20」。逐項檢查後，唯一為真的理由是「k=−12/3=−4，y=−4×(−5)=20。」；其餘三項分別因「−20漏算負負得正。」、「−8用差值。」、「8計算錯誤。」而排除。邊界與語意再檢查：代數範圍允許負值。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s005-v006-semantic-review-r1",
      "questionId": "u06-s005-v006",
      "unitId": "u06",
      "skillId": "direct-variation",
      "contentSha256": "8b0a9acbcbdfc8ad5c4dcc0d5e4c91dfb942d809a729623a05e9fbcd60576646",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "y的新舊比為1.4。",
      "derivedAnswer": "增加40%",
      "storedAnswer": "增加40%",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "正比中兩量乘相同倍率；x乘1.4，y也乘1.4。",
        "20%沒有依據。",
        "把40%重複計入。",
        "方向錯誤。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「判斷正比百分比變化」，已明示必要條件：x>0、y>0且正比常數固定。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：百分率。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：x、y皆為正數，百分比增減的方向沒有負值歧義。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "比例變化推理。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：y的新舊比為1.4。 正確選項為「增加40%」。逐項檢查後，唯一為真的理由是「正比中兩量乘相同倍率；x乘1.4，y也乘1.4。」；其餘三項分別因「20%沒有依據。」、「把40%重複計入。」、「方向錯誤。」而排除。邊界與語意再檢查：x、y皆為正數，百分比增減的方向沒有負值歧義。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s005-v007-semantic-review-r1",
      "questionId": "u06-s005-v007",
      "unitId": "u06",
      "skillId": "direct-variation",
      "contentSha256": "73ec5d2f3ef5a4bfa8b520b46bc03314565dff15a5be5c379ad10b63120ef19b",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "代入x=4得y=-10，且x=0時y=0。",
      "derivedAnswer": "y=−(5/2)x",
      "storedAnswer": "y=−(5/2)x",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "符號錯。",
        "把x/y當k。",
        "多出固定項，不再通過原點。",
        "k=−10/4=−5/2。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由點求正比關係式」，已明示必要條件：已明示正比且含原點。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：座標無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：兩點足以確定此正比式。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確分數。。"
      },
      "difficultyReason": "結合圖形特徵與代數。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：代入x=4得y=-10，且x=0時y=0。 正確選項為「y=−(5/2)x」。逐項檢查後，唯一為真的理由是「k=−10/4=−5/2。」；其餘三項分別因「符號錯。」、「把x/y當k。」、「多出固定項，不再通過原點。」而排除。邊界與語意再檢查：兩點足以確定此正比式。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s005-v008-semantic-review-r1",
      "questionId": "u06-s005-v008",
      "unitId": "u06",
      "skillId": "direct-variation",
      "contentSha256": "0478f704aec708d9f35e8a51459746c86bfd405b72bc7c989d6953e845e4a015",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "8:18=4:9。",
      "derivedAnswer": "8",
      "storedAnswer": "8",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "4是份數不是實量。",
        "x/y=4/9，x=18×4/9=8。",
        "13由18-5。",
        "40.5把比倒置。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「在比與正比式間轉換」，已明示必要條件：y非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：給定x:y而非y:x。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "需要精確對應方向。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：8:18=4:9。 正確選項為「8」。逐項檢查後，唯一為真的理由是「x/y=4/9，x=18×4/9=8。」；其餘三項分別因「4是份數不是實量。」、「13由18-5。」、「40.5把比倒置。」而排除。邊界與語意再檢查：給定x:y而非y:x。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s005-v009-semantic-review-r1",
      "questionId": "u06-s005-v009",
      "unitId": "u06",
      "skillId": "direct-variation",
      "contentSha256": "83ff7c46c82296e800f9db9d34be571cb8bbd62571d4dd77188413a667233cf2",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "兩組比值18/a與15/a不同。",
      "derivedAnswer": "不可能",
      "storedAnswer": "不可能",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "第一組只能給k，第二組不符合。",
        "只符合第二組。",
        "題設排除a=0。",
        "若正比，x加倍時y應加倍為36，不會是30。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「檢查參數資料的一致性」，已明示必要條件：a≠0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：不需知道a的具體值。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "抽象一致性。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：兩組比值18/a與15/a不同。 正確選項為「不可能」。逐項檢查後，唯一為真的理由是「若正比，x加倍時y應加倍為36，不會是30。」；其餘三項分別因「第一組只能給k，第二組不符合。」、「只符合第二組。」、「題設排除a=0。」而排除。邊界與語意再檢查：不需知道a的具體值。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s005-v010-semantic-review-r1",
      "questionId": "u06-s005-v010",
      "unitId": "u06",
      "skillId": "direct-variation",
      "contentSha256": "b90795949f372fcc05648fa7e0a0575be5e08911cba135e9e0c358b67f89ddd4",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "y/x=1.8固定。",
      "derivedAnswer": "y=1.8x",
      "storedAnswer": "y=1.8x",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "把單價當固定加項。",
        "固定單價且無基本費，總價=單價×張數。",
        "誤用反比。",
        "虛構基本費1元。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「建立固定單價正比式」，已明示必要條件：單價固定且無其他費用。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：元與張。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：x通常為非負整數。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：1.8元為精確單價。。"
      },
      "difficultyReason": "生活建模。",
      "literacyNecessity": "不收基本費使圖形通過原點，是正比成立的必要條件。",
      "reviewerNote": "獨立重算：y/x=1.8固定。 正確選項為「y=1.8x」。逐項檢查後，唯一為真的理由是「固定單價且無基本費，總價=單價×張數。」；其餘三項分別因「把單價當固定加項。」、「誤用反比。」、「虛構基本費1元。」而排除。邊界與語意再檢查：x通常為非負整數。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s005-v011-semantic-review-r1",
      "questionId": "u06-s005-v011",
      "unitId": "u06",
      "skillId": "direct-variation",
      "contentSha256": "cefff064e494dcb846311a66150504f30af1faafee9ba66541a62d22edce3e7f",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "120/16=7.5。",
      "derivedAnswer": "120公升",
      "storedAnswer": "120公升",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "總量=7.5×16=120。",
        "90把16誤成12。",
        "112.5只乘15分鐘。",
        "127.5多加一分鐘。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「使用流量正比」，已明示必要條件：流量在16分鐘內固定。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公升/分鐘×分鐘=公升。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：未考慮開關延遲。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確計算。。"
      },
      "difficultyReason": "單位率應用。",
      "literacyNecessity": "固定流量與時間範圍是數學模型的必要資訊。",
      "reviewerNote": "獨立重算：120/16=7.5。 正確選項為「120公升」。逐項檢查後，唯一為真的理由是「總量=7.5×16=120。」；其餘三項分別因「90把16誤成12。」、「112.5只乘15分鐘。」、「127.5多加一分鐘。」而排除。邊界與語意再檢查：未考慮開關延遲。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s005-v012-semantic-review-r1",
      "questionId": "u06-s005-v012",
      "unitId": "u06",
      "skillId": "direct-variation",
      "contentSha256": "2700bed75b46f72d8c3aaa9560a0dee0a74a5999446e1c13872c7883e547faf8",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "5333步對應約3.99975公里。",
      "derivedAnswer": "5333步",
      "storedAnswer": "5333步",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "倍率計算錯。",
        "估算過低。",
        "2400/1.8×4=5333.333…，四捨五入為5333。",
        "把1.8近似2造成偏差。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「正比估算與四捨五入」，已明示必要條件：平均步幅不變。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：步與公里。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：『約』與位數明示。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：最後四捨五入到整步。。"
      },
      "difficultyReason": "素養含非整數單位率。",
      "literacyNecessity": "平均步幅固定是步數與路程成正比的必要假設。",
      "reviewerNote": "獨立重算：5333步對應約3.99975公里。 正確選項為「5333步」。逐項檢查後，唯一為真的理由是「2400/1.8×4=5333.333…，四捨五入為5333。」；其餘三項分別因「倍率計算錯。」、「估算過低。」、「把1.8近似2造成偏差。」而排除。邊界與語意再檢查：『約』與位數明示。",
      "reviewerDecision": "pass"
    }
  ],
  "drawingSpecs": []
};
