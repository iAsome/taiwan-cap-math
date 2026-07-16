// SERIALIZATION OF REVIEWED CHATGPT_HUMAN_AUTHORED_R1 CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u04-s008-lecture-r1",
  "unitId": "u04",
  "numericUnitId": 4,
  "topicId": "u04-system-apps",
  "skillId": "system-word-setup-basic",
  "lockedSkillTitle": "情境列聯立方程式",
  "title": "情境列聯立方程式：先定義未知數，再翻譯兩個條件",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "exactSkillIdentity": {
    "unitTitle": "二元一次聯立方程式",
    "skillTitle": "情境列聯立方程式",
    "scope": "定義兩個未知數，將兩個獨立條件翻成兩個一次方程式。"
  },
  "prerequisiteBridge": "先備技能 system-special-cases 已建立必要基礎；本節將其用於「定義兩個未知數，將兩個獨立條件翻成兩個一次方程式。」",
  "learningGoals": [
    "能清楚定義 x、y 及其單位。",
    "能從總數、總價、差額或倍數關係列式。",
    "能辨認兩個方程式是否提供獨立條件。",
    "能在解後把數值翻回情境並檢查合理性。"
  ],
  "vocabulary": [
    {
      "term": "設未知數",
      "definition": "指定字母代表的量與單位。"
    },
    {
      "term": "數量關係",
      "definition": "描述件數、人數、長度等的等式。"
    },
    {
      "term": "總量",
      "definition": "各部分相加後的整體。"
    },
    {
      "term": "限制條件",
      "definition": "答案在情境中必須符合的範圍，例如非負整數。"
    }
  ],
  "notation": [
    {
      "symbol": "設 x 為甲的數量",
      "meaning": "必須同時說明單位。"
    },
    {
      "symbol": "x+y=T",
      "meaning": "兩部分總數為 T。"
    },
    {
      "symbol": "ax+by=M",
      "meaning": "單價乘數量後的總金額。"
    }
  ],
  "conceptDevelopment": [
    "文字題最重要的不是立刻計算，而是先說清楚字母代表什麼。",
    "每個句子可能提供一個等量關係；把單位相同的量放在同一方程式。",
    "解出後要檢查是否符合人數、件數或金額的限制。"
  ],
  "definitions": [
    {
      "name": "數學模型",
      "statement": "用未知數與方程式表示情境關係。"
    },
    {
      "name": "獨立條件",
      "statement": "能進一步限制未知數，而不是同一句話的重複。"
    }
  ],
  "formulas": [
    {
      "formula": "部分一+部分二=總量",
      "conditions": [
        "兩部分互不重疊且涵蓋全部。"
      ],
      "meaning": "建立總數式。"
    },
    {
      "formula": "單價一×數量一+單價二×數量二=總價",
      "conditions": [
        "價格與數量單位相容。"
      ],
      "meaning": "建立金額式。"
    }
  ],
  "invalidUseCases": [
    "未定義 x、y 就列式會使式子意義不明。",
    "不同單位不可直接相加。",
    "題目問數量時，負數或非整數通常不合理。",
    "兩個完全相同的方程式不足以唯一決定兩未知數。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "讀題並列出兩個未知量",
      "check": "附上單位。"
    },
    {
      "step": 2,
      "instruction": "找第一個等量關係",
      "check": "常是總數或總長。"
    },
    {
      "step": 3,
      "instruction": "找第二個獨立關係",
      "check": "常是總價、差額或倍數。"
    },
    {
      "step": 4,
      "instruction": "列聯立並求解",
      "check": "選適當方法。"
    },
    {
      "step": 5,
      "instruction": "回到情境檢查",
      "check": "單位、整數性、範圍。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "兩數和為18，差為4，求兩數。",
      "solutionSteps": [
        "設較大數x、較小數y，列x＋y＝18與x－y＝4。",
        "兩式相加得2x＝22，所以x＝11。",
        "代回總和式得y＝7，並核對差為4。"
      ],
      "answer": "兩數為11與7。",
      "why": "總和與差額是兩個獨立條件，且較大數減較小數的方向已由變數定義固定。相加可直接消去y，求得較大數後再回代；十一加七為十八、十一減七為四，完整符合題意。"
    },
    {
      "exampleId": "L2",
      "prompt": "甲乙共有30人，甲比乙多6人，求兩邊人數。",
      "solutionSteps": [
        "設甲x人、乙y人，列x＋y＝30與x－y＝6。",
        "相加得2x＝36，所以x＝18。",
        "代回得y＝12，檢查兩數皆為非負整數。"
      ],
      "answer": "甲18人、乙12人。",
      "why": "「共有」提供總數式，「甲比乙多」決定差額式的順序。兩式相加後甲有十八人，乙由總數得十二人；十八比十二多六且合計三十，答案與人數整數限制一致。"
    },
    {
      "exampleId": "L3",
      "prompt": "兩種筆共12枝，單價10元與15元，總價150元，求各幾枝。",
      "solutionSteps": [
        "設十元筆x枝、十五元筆y枝，列x＋y＝12。",
        "依單價乘數量列10x＋15y＝150。",
        "由第一式乘10後相減得5y＝30，所以y＝6、x＝6。"
      ],
      "answer": "兩種筆各6枝。",
      "why": "枝數總和與金額總和的單位不同，必須分成兩式；金額式中每種單價要乘自己的枝數。解得各六枝後，總數為十二，總價六十加九十為一百五十，兩項條件都成立。"
    },
    {
      "exampleId": "L4",
      "prompt": "檢查模型x＋y＝20與2x＋2y＝40能否唯一求解。",
      "solutionSteps": [
        "把第一式整式乘2，得到2x＋2y＝40。",
        "第二式與第一式完全等價，只提供一個獨立條件。",
        "列出(0,20)與(10,10)兩組不同解，證明不能唯一求值。"
      ],
      "answer": "不能唯一決定x、y。",
      "why": "方程式的數量不等於獨立資訊的數量。第二式只是第一式的兩倍，消去後得到零等於零；所有滿足x＋y＝20的數對都同時符合兩式，因此仍需另一個不相依的數量條件。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "只寫 x、y 不說代表什麼",
      "correction": "答案無法和情境對應。"
    },
    {
      "mistake": "總價式漏乘單價",
      "correction": "金額應為單價乘數量。"
    },
    {
      "mistake": "把「甲比乙多 5」寫成 x+y=5",
      "correction": "正確關係是 x-y=5 或 x=y+5。"
    },
    {
      "mistake": "解出負件數仍接受",
      "correction": "需做情境合理性檢查。"
    }
  ],
  "selfCheck": [
    {
      "prompt": "「共 40 個」通常列什麼？",
      "answer": "x+y=40。"
    },
    {
      "prompt": "「甲比乙少 3」如何列？",
      "answer": "y-x=3 或 x=y-3。"
    },
    {
      "prompt": "總價式每項單位？",
      "answer": "元/件×件=元。"
    },
    {
      "prompt": "最後為何要檢查？",
      "answer": "代數解可能不符合情境限制。"
    }
  ],
  "summary": [
    "先定義未知數與單位。",
    "兩個方程式要來自兩個獨立條件。",
    "解後檢查整數、非負與單位。"
  ],
  "connections": {
    "previous": "先備技能 system-special-cases 已建立必要基礎；本節將其用於「定義兩個未知數，將兩個獨立條件翻成兩個一次方程式。」",
    "next": "下一技能「雞兔同籠問題」會延伸目前能力。"
  },
  "figureReferences": [],
  "accessibilityNote": "本講義不需要圖形；所有關係均以文字、等式與逐步運算完整呈現，避擴音前使用 U05 坐標圖形。",
  "lectureReview": {
    "decision": "pass",
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "capBoundary": "pass",
    "skillSpecificEvidence": "所有例題均先定義未知數再列式，並加入相依方程式的反例；未將特定雞兔、票價或速率技巧混入本節核心。",
    "reviewNote": "所有例題均先定義未知數再列式，並加入相依方程式的反例；未將特定雞兔、票價或速率技巧混入本節核心。",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "f6c3b17e1cf2a5f2249488b86224678cbbe7de3607bf92192bec3dc5ef7f3d7f",
  "concept": "文字情境要先定義兩個未知數的意義與單位，再把每一條可量化資訊翻成等量關係。總數通常由各部分相加，差額要依「誰比誰多」決定減法方向，總價或總熱量則是每單位數值乘數量後加總。兩個方程式必須提供獨立限制，若第二式只是第一式的倍數，仍無法唯一求解。最後還要檢查人數、件數等離散量是否為非負整數，以及等號左右單位是否一致。",
  "method": [
    {
      "step": 1,
      "instruction": "圈出題目要找的兩個量，設為x、y並寫清楚各自名稱與單位。",
      "check": "變數定義固定，後續沒有交換兩者角色。"
    },
    {
      "step": 2,
      "instruction": "找出第一個可量化條件，通常是總數、總長或總時間，列成等式。",
      "check": "等號左右表示相同種類的量，單位一致。"
    },
    {
      "step": 3,
      "instruction": "找第二個獨立條件，依差額、倍數、單價乘數量或其他守恆關係列式。",
      "check": "第二式不是第一式的等價倍數，也不是無關敘述。"
    },
    {
      "step": 4,
      "instruction": "用代入或加減消去法解聯立方程式，完整保留變數對應。",
      "check": "每步等式運算正確，所得數值代回兩式皆成立。"
    },
    {
      "step": 5,
      "instruction": "把數值翻回原情境，檢查單位、非負性、整數性與合理範圍。",
      "check": "答案回應正確物件，沒有擅自四捨五入不可分割的數量。"
    }
  ]
};

export const QUESTIONS = [
  {
    "questionId": "u04-s008-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "兩數和為 20。設較大數為 x、較小數為 y，哪個方程式正確？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "把總和文字列成方程式",
    "choices": [
      "x-y=20",
      "xy=20",
      "x=20y",
      "x+y=20"
    ],
    "answerIndex": 3,
    "independentSolution": "「和」表示兩數相加，故 x+y=20。",
    "explanation": "題目已定義較大數為x、較小數為y，而「兩數和為二十」中的和表示把兩個數相加。因此等量關係是x＋y＝20；差、乘積或倍數都不是這句文字提供的條件。",
    "steps": [
      "依題意固定x代表較大數、y代表較小數。",
      "把關鍵詞「和」翻譯為兩個未知數相加。",
      "令相加結果等於20，寫成x＋y＝20。"
    ],
    "optionAnalysis": [
      {
        "choice": "x-y=20",
        "truth": false,
        "reason": "這表示兩數差為 20。"
      },
      {
        "choice": "xy=20",
        "truth": false,
        "reason": "這表示乘積為 20。"
      },
      {
        "choice": "x=20y",
        "truth": false,
        "reason": "這表示倍數關係。"
      },
      {
        "choice": "x+y=20",
        "truth": true,
        "reason": "x 與 y 的總和正是 20。"
      }
    ],
    "misconceptionTarget": "把和、差、積混淆",
    "prerequisiteCheck": "只需先備 system-special-cases，並使用本技能「情境列聯立方程式」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「把總和文字列成方程式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "單一條件直接翻譯。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "f2fa986f71a703f7b2fcf1201a77fd90b6f7d09dc6c22e64bced187e60536622",
    "commonMistake": "把「和」誤讀成差或乘積，列出與題意不同的運算關係。"
  },
  {
    "questionId": "u04-s008-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "甲乙共有 30 人，甲比乙多 6 人。設甲 x 人、乙 y 人，第二個方程式應為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "把「多 6」列為差式",
    "choices": [
      "x+y=6",
      "x-y=6",
      "y-x=6",
      "x=6y"
    ],
    "answerIndex": 1,
    "independentSolution": "甲比乙多 6 表示甲減乙等於 6。",
    "explanation": "甲有x人、乙有y人，「甲比乙多六人」表示從甲的人數減去乙的人數，差正好是六，所以第二式為x－y＝6。若寫成y－x＝6，語意會反成乙比甲多六人。",
    "steps": [
      "確認比較主體甲對應x，被比較的乙對應y。",
      "把「甲比乙多」寫成甲減乙，即x－y。",
      "令人數差等於6，得到x－y＝6。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+y=6",
        "truth": false,
        "reason": "把差額寫成總和。"
      },
      {
        "choice": "x-y=6",
        "truth": true,
        "reason": "x 比 y 大 6，故 x-y=6。"
      },
      {
        "choice": "y-x=6",
        "truth": false,
        "reason": "這表示乙比甲多。"
      },
      {
        "choice": "x=6y",
        "truth": false,
        "reason": "誤寫成倍數。"
      }
    ],
    "misconceptionTarget": "比較順序顛倒",
    "prerequisiteCheck": "只需先備 system-special-cases，並使用本技能「情境列聯立方程式」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「把「多 6」列為差式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需讀懂方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "9739c05c8f9fe4c7320eece5d4c92f3b9100222b7ab58ce289ad8b1a6d397637",
    "commonMistake": "比較順序顛倒，把甲比乙多六人寫成y減x等於六。"
  },
  {
    "questionId": "u04-s008-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "兩種筆共 12 枝，設甲種 x 枝、乙種 y 枝，總數式為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "列總數量式",
    "choices": [
      "x+y=12",
      "12x+y=1",
      "x-y=12",
      "xy=12"
    ],
    "answerIndex": 0,
    "independentSolution": "兩類筆合起來的枝數就是 x+y。",
    "explanation": "甲種筆有x枝、乙種筆有y枝，兩類互不重複且合計十二枝，所以總數由各類數量相加，得到x＋y＝12。十二是總枝數，不應放在未知數前當係數，也不是兩種筆數量的乘積。",
    "steps": [
      "列出甲種筆x枝與乙種筆y枝兩個部分。",
      "用加法合併兩類筆的枝數，形成x＋y。",
      "把總枝數12放在等號右邊，寫成x＋y＝12。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+y=12",
        "truth": true,
        "reason": "兩種筆數量相加為 12。"
      },
      {
        "choice": "12x+y=1",
        "truth": false,
        "reason": "係數與總數位置錯誤。"
      },
      {
        "choice": "x-y=12",
        "truth": false,
        "reason": "不是差額條件。"
      },
      {
        "choice": "xy=12",
        "truth": false,
        "reason": "不是乘積條件。"
      }
    ],
    "misconceptionTarget": "把總數當係數",
    "prerequisiteCheck": "只需先備 system-special-cases，並使用本技能「情境列聯立方程式」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「列總數量式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "最基礎建模。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "3507bb5001200f7ca7256b4d547e0dd1e42fc2ff3cdf8eebbf90b117ba45cce7",
    "commonMistake": "把總數十二誤放成未知數係數，或用相乘代替兩類數量相加。"
  },
  {
    "questionId": "u04-s008-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "兩數和 18、差 4，設較大數 x、較小數 y，正確聯立為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "同時列兩項數字關係",
    "choices": [
      "x+y=4，x-y=18",
      "x-y=18，y-x=4",
      "x+y=18，x-y=4",
      "xy=18，x/y=4"
    ],
    "answerIndex": 2,
    "independentSolution": "總和對應 x+y=18，較大減較小對應 x-y=4。",
    "explanation": "較大數x與較小數y的總和是十八，所以第一式為x＋y＝18；較大數減較小數的差是四，所以第二式為x－y＝4。兩個常數各自對應不同語句，不能把和與差對調。",
    "steps": [
      "把「兩數和十八」翻譯成x＋y＝18。",
      "依較大減較小，把「差四」翻譯成x－y＝4。",
      "逐句回讀，核對總和與差額的常數沒有交換。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+y=4，x-y=18",
        "truth": false,
        "reason": "把和與差對調。"
      },
      {
        "choice": "x-y=18，y-x=4",
        "truth": false,
        "reason": "兩式都描述差且互相矛盾。"
      },
      {
        "choice": "x+y=18，x-y=4",
        "truth": true,
        "reason": "兩式逐字對應題目兩條件。"
      },
      {
        "choice": "xy=18，x/y=4",
        "truth": false,
        "reason": "誤把和差寫成積比。"
      }
    ],
    "misconceptionTarget": "將兩個常數對調",
    "prerequisiteCheck": "只需先備 system-special-cases，並使用本技能「情境列聯立方程式」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「同時列兩項數字關係」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需要完整聯立。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "35b36c4ccf4ed475f6de4167685ccd0bddc16a34a057177d90816901b322d7be",
    "commonMistake": "把十八與四對調，或將較大減較小的方向寫反。"
  },
  {
    "questionId": "u04-s008-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "成人票 x 張、學生票 y 張，共 50 張；票價分別 200、120 元，收入 7600 元。收入式為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "列加權總價式",
    "choices": [
      "200x+120y=7600",
      "x+y=7600",
      "200+120=x+y",
      "320xy=7600"
    ],
    "answerIndex": 0,
    "independentSolution": "成人票款 200x，學生票款 120y，相加為總收入。",
    "explanation": "成人票每張二百元且售x張，票款是200x元；學生票每張一百二十元且售y張，票款是120y元。兩類收入相加等於總收入七千六百元，因此收入式為200x＋120y＝7600。",
    "steps": [
      "用成人票單價200乘張數x，得到成人票款200x。",
      "用學生票單價120乘張數y，得到學生票款120y。",
      "合併兩類票款並令其等於7600，完成收入方程式。"
    ],
    "optionAnalysis": [
      {
        "choice": "200x+120y=7600",
        "truth": true,
        "reason": "兩類票款相加正好 7600 元。"
      },
      {
        "choice": "x+y=7600",
        "truth": false,
        "reason": "人數與金額單位混淆。"
      },
      {
        "choice": "200+120=x+y",
        "truth": false,
        "reason": "單價相加不等於張數。"
      },
      {
        "choice": "320xy=7600",
        "truth": false,
        "reason": "錯誤相乘。"
      }
    ],
    "misconceptionTarget": "漏乘單價或交叉配對",
    "prerequisiteCheck": "只需先備 system-special-cases，並使用本技能「情境列聯立方程式」。",
    "estimatedTimeSec": 90,
    "unitCheck": "元/張×張=元。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「列加權總價式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需要單位分析。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "34c9865046f1898164605af1678e6a41475eddf7ff99f04d30370c576c6c251f",
    "commonMistake": "只把兩個單價相加，或把票價與另一票種的張數交叉配對。"
  },
  {
    "questionId": "u04-s008-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "「甲數是乙數的 2 倍再多 3」設甲 x、乙 y，應列何式？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "翻譯倍數加常數關係",
    "choices": [
      "y=2x+3",
      "x=2(y+3)",
      "x+y=5",
      "x=2y+3"
    ],
    "answerIndex": 3,
    "independentSolution": "先取乙的 2 倍 2y，再多 3，得到甲 x。",
    "explanation": "甲數是乙數的二倍再多三，先以乙數y乘二得到2y，再加三，結果才等於甲數x，所以列式為x＝2y＋3。「再多三」不在乘二的括號內，也不能顛倒甲乙角色。",
    "steps": [
      "固定甲數為x、乙數為y，避免交換變數角色。",
      "先取乙數的2倍，寫成2y。",
      "在2y之後再加3，令結果等於x，得到x＝2y＋3。"
    ],
    "optionAnalysis": [
      {
        "choice": "y=2x+3",
        "truth": false,
        "reason": "變數角色顛倒。"
      },
      {
        "choice": "x=2(y+3)",
        "truth": false,
        "reason": "把“多 3”也乘 2。"
      },
      {
        "choice": "x+y=5",
        "truth": false,
        "reason": "誤把倍數與差額變總和。"
      },
      {
        "choice": "x=2y+3",
        "truth": true,
        "reason": "2y+3 正好對應「乙的 2 倍再多 3」。"
      }
    ],
    "misconceptionTarget": "括號層次錯誤",
    "prerequisiteCheck": "只需先備 system-special-cases，並使用本技能「情境列聯立方程式」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「翻譯倍數加常數關係」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "含兩層關係。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "38d0d54ce795f6f379b9bbf6bc13fa210f97f881f1ee68d721fb05bb9166acdd",
    "commonMistake": "把「再多三」也放進兩倍內，錯寫成二乘以y加三的整體。"
  },
  {
    "questionId": "u04-s008-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "已知 x+y=20、2x+2y=40，能否唯一求 x、y？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "辨認無效的重複建模條件",
    "choices": [
      "能，x=y=10",
      "不能，兩式相依",
      "能，x=20,y=0",
      "不能，因為兩式矛盾"
    ],
    "answerIndex": 1,
    "independentSolution": "第二式是第一式的 2 倍，只提供一個獨立條件。",
    "explanation": "第二式2x＋2y＝40正是第一式x＋y＝20整式乘二的結果，兩式只重複同一個總和條件。像(10,10)與(20,0)都滿足，因此不能唯一求出x、y；但兩式相容，不是矛盾。",
    "steps": [
      "將第一式x＋y＝20整式乘2。",
      "核對所得2x＋2y＝40與第二式完全相同。",
      "列舉兩組不同解並判定兩式相依，無法唯一求值。"
    ],
    "optionAnalysis": [
      {
        "choice": "能，x=y=10",
        "truth": false,
        "reason": "10,10 只是一組可能。"
      },
      {
        "choice": "不能，兩式相依",
        "truth": true,
        "reason": "第二式沒有增加新限制。"
      },
      {
        "choice": "能，x=20,y=0",
        "truth": false,
        "reason": "也是一組可能但不唯一。"
      },
      {
        "choice": "不能，因為兩式矛盾",
        "truth": false,
        "reason": "兩式完全相容而非矛盾。"
      }
    ],
    "misconceptionTarget": "只因有兩式就認為可解",
    "prerequisiteCheck": "只需先備 system-special-cases，並使用本技能「情境列聯立方程式」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「辨認無效的重複建模條件」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "建模質量判斷。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "31d916a42e9a685d4393c1b887fac36c7a471f1fb53555c450ebae7936c368e2",
    "commonMistake": "只因題面列了兩個方程式，就認為一定提供兩個獨立條件。"
  },
  {
    "questionId": "u04-s008-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "某題設 x、y 為兩種商品件數，解得 x=4.5、y=7.5。下列判斷最合理？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "檢查模型解的情境可行性",
    "choices": [
      "直接接受 4.5 件商品",
      "一定是計算錯誤",
      "代數解存在，但不符合件數必須為整數的情境",
      "把答案四捨五入成 5、8"
    ],
    "answerIndex": 2,
    "independentSolution": "聯立方程式可有小數解，但商品件數模型另有整數限制。",
    "explanation": "方程式本身可能正確解出x＝4.5、y＝7.5，但題目把兩個未知數定義為商品件數，件數在一般情境中必須是非負整數。不能直接接受半件，也不能任意四捨五入；應判定代數解存在但情境不可行，並回查資料或模型。",
    "steps": [
      "先區分代數方程式是否有解與答案是否符合情境。",
      "由單位「件」確認x、y應為非負整數。",
      "發現4.5與7.5不符合整數限制，拒絕擅自四捨五入。"
    ],
    "optionAnalysis": [
      {
        "choice": "直接接受 4.5 件商品",
        "truth": false,
        "reason": "件數通常不可為小數。"
      },
      {
        "choice": "一定是計算錯誤",
        "truth": false,
        "reason": "也可能題目資料本身不合理。"
      },
      {
        "choice": "代數解存在，但不符合件數必須為整數的情境",
        "truth": true,
        "reason": "小數件數違反離散數量限制。"
      },
      {
        "choice": "把答案四捨五入成 5、8",
        "truth": false,
        "reason": "四捨五入後通常不再滿足原式。"
      }
    ],
    "misconceptionTarget": "認為方程式解必然可用",
    "prerequisiteCheck": "只需先備 system-special-cases，並使用本技能「情境列聯立方程式」。",
    "estimatedTimeSec": 90,
    "unitCheck": "件數應為非負整數。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「檢查模型解的情境可行性」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "整合代數與限制。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "c8537a6a268b98e514366359b9481baf4f337d325a5bb5923507df02e28f9d0c",
    "commonMistake": "認為算出代數解就一定可用，或把小數件數任意取整而不再驗算。"
  },
  {
    "questionId": "u04-s008-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "若 x 表示甲班人數、y 表示乙班人數，哪一組方程式最可能有單位錯誤？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "用單位分析篩選錯誤模型",
    "choices": [
      "x+y=60 人",
      "x-y=4 人",
      "x+y=500 元",
      "200x+100y=8000 元"
    ],
    "answerIndex": 2,
    "independentSolution": "x+y 的單位是人，不可直接等於 500 元。",
    "explanation": "x、y都代表人數，所以x＋y與x－y的單位仍是人；若乘上每人票價，才會得到元。選項x＋y＝500元把人數直接等同金額，等號左右量綱不同，因此是最明顯的單位錯誤。",
    "steps": [
      "標記x與y的單位皆為人。",
      "判斷x＋y或x－y仍表示人數，而單價乘人數才表示金額。",
      "逐項比較等號左右單位，找出人數等於元的錯誤式。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+y=60 人",
        "truth": false,
        "reason": "左右都是人數。"
      },
      {
        "choice": "x-y=4 人",
        "truth": false,
        "reason": "左右都是人數差。"
      },
      {
        "choice": "x+y=500 元",
        "truth": true,
        "reason": "人數總和不可能直接等於金額。"
      },
      {
        "choice": "200x+100y=8000 元",
        "truth": false,
        "reason": "人數乘票價得到金額。"
      }
    ],
    "misconceptionTarget": "只看數字與字母不看單位",
    "prerequisiteCheck": "只需先備 system-special-cases，並使用本技能「情境列聯立方程式」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「用單位分析篩選錯誤模型」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需同時理解變數與量綱。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "4cfdb63ad69ba1f1056fd311f7cf084405f8503977be401f15322589cf81c916",
    "commonMistake": "只檢查數字與字母的形式，沒有核對等號左右是否為同一種量。"
  },
  {
    "questionId": "u04-s008-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "社團報名表顯示：總人數 42；線上報名比現場報名多 8 人。設線上 x 人、現場 y 人，正確聯立為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "從報名統計建模",
    "choices": [
      "x+y=42，x-y=8",
      "x+y=8，x-y=42",
      "x+y=42，y-x=8",
      "42x+8y=0"
    ],
    "answerIndex": 0,
    "independentSolution": "總人數形成和式，線上較多形成 x-y=8。",
    "explanation": "線上報名x人與現場報名y人合計四十二人，先得x＋y＝42；線上比現場多八人，依比較方向得到x－y＝8。兩式分別描述總數與差額，常數與減法方向都不能互換。",
    "steps": [
      "把兩類報名人數相加，列出x＋y＝42。",
      "依線上比現場多8人，列出x－y＝8。",
      "回讀變數定義，核對總數42與差額8各在正確方程式。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+y=42，x-y=8",
        "truth": true,
        "reason": "兩式分別對應總數 42 與線上多 8。"
      },
      {
        "choice": "x+y=8，x-y=42",
        "truth": false,
        "reason": "把總數與差額對調。"
      },
      {
        "choice": "x+y=42，y-x=8",
        "truth": false,
        "reason": "比較方向相反。"
      },
      {
        "choice": "42x+8y=0",
        "truth": false,
        "reason": "沒有對應題意。"
      }
    ],
    "misconceptionTarget": "忽略“線上較多”的方向",
    "prerequisiteCheck": "只需先備 system-special-cases，並使用本技能「情境列聯立方程式」。",
    "estimatedTimeSec": 90,
    "unitCheck": "所有數量均為人。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「從報名統計建模」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "報名方式分類與差額是必要資料。",
    "literacyContextNecessity": "若去掉總人數或差額，報名人數無法唯一確定。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "8785f8cdedd54a6d59e7f1813f5837ff81cbc13264a06ce230e9957725222c55",
    "commonMistake": "把總人數與差額交換，或把線上較多錯寫成y減x等於八。"
  },
  {
    "questionId": "u04-s008-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "餐盒表格中，A 每盒 500 大卡、B 每盒 350 大卡。學校買 10 盒，共 4250 大卡。設 A 為 x 盒、B 為 y 盒，哪個模型正確？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "從營養表建立模型",
    "choices": [
      "x+y=4250，500x+350y=10",
      "x+y=10，500x+350y=4250",
      "500+350=x+y，x+y=10",
      "xy=10，850xy=4250"
    ],
    "answerIndex": 1,
    "independentSolution": "盒數總和為 10；各盒熱量乘盒數後加總 4250。",
    "explanation": "A、B兩種餐盒的盒數分別是x、y，總共十盒，所以x＋y＝10。A每盒五百大卡貢獻500x，B每盒三百五十大卡貢獻350y，總熱量四千二百五十大卡，因此第二式為500x＋350y＝4250。",
    "steps": [
      "以盒數守恆列出x＋y＝10。",
      "分別以每盒熱量乘盒數，得到500x與350y。",
      "將兩類熱量相加等於4250，並核對兩式單位。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+y=4250，500x+350y=10",
        "truth": false,
        "reason": "總盒數與總熱量對調。"
      },
      {
        "choice": "x+y=10，500x+350y=4250",
        "truth": true,
        "reason": "兩式分別守恆盒數與總熱量。"
      },
      {
        "choice": "500+350=x+y，x+y=10",
        "truth": false,
        "reason": "未乘盒數。"
      },
      {
        "choice": "xy=10，850xy=4250",
        "truth": false,
        "reason": "錯誤使用乘積。"
      }
    ],
    "misconceptionTarget": "把每盒資料直接相加",
    "prerequisiteCheck": "只需先備 system-special-cases，並使用本技能「情境列聯立方程式」。",
    "estimatedTimeSec": 90,
    "unitCheck": "大卡/盒×盒=大卡。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「從營養表建立模型」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "熱量欄不可刪除，它決定第二式。",
    "literacyContextNecessity": "盒數與每盒熱量共同決定採購組合。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "7b25aead99a922f52867bb96a8611eeeb0a8e1acb2a3555e420ed816d9d3571c",
    "commonMistake": "直接相加每盒熱量而漏乘盒數，或把總盒數與總熱量對調。"
  },
  {
    "questionId": "u04-s008-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "停車場紀錄只有「汽車與機車共 60 輛」及「今天晴天」。哪項判斷正確？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "辨認無關資訊與條件不足",
    "choices": [
      "可列 x+y=60、x-y=晴天",
      "可唯一求出各 30 輛",
      "晴天代表 x>y，因此可解",
      "資訊不足，晴天不能形成第二個數量方程式"
    ],
    "answerIndex": 3,
    "independentSolution": "只有總輛數一個數量條件；天氣資料與兩種車輛數量無明確等量關係。",
    "explanation": "「汽車與機車共六十輛」只能形成一個數量方程式x＋y＝60。「今天晴天」沒有說明天氣與兩類車輛數量之間的等量關係，不能強行列成第二式，所以資訊不足，無法唯一決定各自輛數。",
    "steps": [
      "由總輛數建立唯一可用的方程式x＋y＝60。",
      "檢查天氣敘述是否含x、y的數量或等量關係。",
      "確認晴天是無關資訊，判定缺少第二個獨立方程式。"
    ],
    "optionAnalysis": [
      {
        "choice": "可列 x+y=60、x-y=晴天",
        "truth": false,
        "reason": "天氣不是數值關係。"
      },
      {
        "choice": "可唯一求出各 30 輛",
        "truth": false,
        "reason": "沒有說明兩者相等。"
      },
      {
        "choice": "晴天代表 x>y，因此可解",
        "truth": false,
        "reason": "即使有不等關係也不能唯一確定。"
      },
      {
        "choice": "資訊不足，晴天不能形成第二個數量方程式",
        "truth": true,
        "reason": "只有 x+y=60，不能唯一決定兩變數。"
      }
    ],
    "misconceptionTarget": "看到兩句話就強行列兩式",
    "prerequisiteCheck": "只需先備 system-special-cases，並使用本技能「情境列聯立方程式」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「辨認無關資訊與條件不足」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "素養閱讀在於篩選必要資料。",
    "literacyContextNecessity": "天氣句是刻意的無關資訊，必須判斷其不能成為方程式。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "bb5886e38a45b5f4972cbce807d130b1b250cf7207b3a843cf0cc940ca17c8f2",
    "commonMistake": "看到題目有兩句話便各列一式，將沒有數量關係的天氣硬套進模型。"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u04-s008-cr001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "standard",
    "itemType": "constructed-response",
    "prompt": "甲、乙兩班共 68 人，甲班比乙班多 8 人。設未知數、列聯立方程式並求兩班人數。",
    "requiredWork": [
      "變數定義附單位。",
      "兩式與答案均要寫。"
    ],
    "standardSolution": [
      "設甲班有x人、乙班有y人，並註明x、y應為非負整數。總人數條件給出x＋y＝68。",
      "甲班比乙班多八人，依比較方向列出x－y＝8。",
      "兩式相加得2x＝76，所以x＝38；代回x＋y＝68，得到y＝30。",
      "檢驗：38＋30＝68且38－30＝8，因此甲班38人、乙班30人。"
    ],
    "alternativeMethods": [
      "可寫 x=y+8 代入 x+y=68。"
    ],
    "reasoningSteps": [
      "定義兩個未知數及其人數單位。",
      "分別把總數與甲比乙多的差額翻成兩個獨立方程式。",
      "用相加消去y，求x後回代求y。",
      "回到情境核對總人數、差額與非負整數限制。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "定義、兩式與 38/30 人完整。"
      },
      {
        "score": 2,
        "criteria": "答案正確但變數定義或一式說明略缺。"
      },
      {
        "score": 1,
        "criteria": "正確列出兩式但計算錯誤。"
      },
      {
        "score": 0,
        "criteria": "無法將總數和差額轉成方程式。"
      }
    ],
    "partialCreditRules": [
      "列式兩分，求解與單位一分。"
    ],
    "followThroughPolicy": "若列式正確但算術錯，後續依其值檢查差額可給 2 分。",
    "unitNotationRules": "人數必須為非負整數並寫“人”。",
    "answerOnlyPolicy": "只答 38、30 最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "甲 38 人、乙 30 人。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立代回總數 68、差 8。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "1d84b1f647b7e6d7d779b0b1f10c797dac523dec71ba8b4490d1c8e6bae2196c",
    "commonErrors": [
      "把甲比乙多八人寫成y減x等於八，導致兩班答案對調或出現負差。",
      "只報三十八與三十而未說明各自所屬班級，也沒有代回總數與差額。"
    ]
  },
  {
    "questionId": "u04-s008-cr002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "advanced",
    "itemType": "constructed-response",
    "prompt": "停車場只知道汽車與機車共 60 輛。說明為何不能唯一求各自數量，並提出一項可形成第二個獨立方程式的合理資料與方程式。",
    "requiredWork": [
      "說明一式兩未知數。",
      "提出具體新增資料並列式。"
    ],
    "standardSolution": [
      "設汽車x輛、機車y輛，目前只有x＋y＝60；一個方程式無法唯一決定兩個未知數。",
      "例如(x,y)＝(0,60)、(20,40)與(60,0)都滿足總輛數，足以證明解不唯一。",
      "可增加「總輪數一百八十個」這項合理資料，因汽車四輪、機車二輪，可列4x＋2y＝180。",
      "新式與x＋y＝60並不相依；聯立可得x＝30、y＝30，且輪數與輛數均符合非負整數情境。"
    ],
    "alternativeMethods": [
      "也可提出停車費總收入、佔用面積等，只要每類貢獻不同且數值明確。"
    ],
    "reasoningSteps": [
      "以不同非負整數數對證明單一總數方程式有多組解。",
      "提出會讓兩類物件貢獻不同的可量化資料。",
      "把新增資料寫成單位一致的第二個獨立方程式。",
      "解示例模型並核對資料確實可行且能唯一決定兩數。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "清楚說明不足並提出有效獨立條件及方程式。"
      },
      {
        "score": 2,
        "criteria": "不足說明正確，新增資料合理但方程式有小缺漏。"
      },
      {
        "score": 1,
        "criteria": "只說明“資料不足”或只寫一個可用方程式。"
      },
      {
        "score": 0,
        "criteria": "強行假設各 30 或新增無關資料。"
      }
    ],
    "partialCreditRules": [
      "不足分析一分，新增資料一分，正確方程式一分。"
    ],
    "followThroughPolicy": "若新增輪數數值導致無可行解，但方程式結構正確，最高 2 分。",
    "unitNotationRules": "新增資料的單位須與方程式一致。",
    "answerOnlyPolicy": "只寫“不能”無解釋，最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "一個總數方程式不足；例如加總輪數式可補足。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立檢查示例 4x+2y=180 與 x+y=60 可解 x=30、y=30，資料可行且獨立。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "d5328375d2ec2144e8db1d16579b9de2ca6eb0c46bb4e9a3be7359f509cf9f68",
    "commonErrors": [
      "直接假設汽車與機車各三十輛，沒有題目條件支持兩類數量相等。",
      "提出晴天或顏色等無關資訊，卻未建立可量化且獨立的第二個方程式。"
    ]
  }
];

export const DRAWING_SPECS = [];
