// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u02-s001-lecture-r1",
  "unitId": "u02",
  "topicId": "u02-factors",
  "skillId": "fraction-factor-multiple",
  "title": "因數與倍數：從整除關係理解分組和排列與週期",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能用整除判斷因數與倍數。",
    "能分清「a 是 b 的因數」與「b 是 a 的倍數」。",
    "能列出有限範圍內的因數與倍數。",
    "能把平均分組與等長切割翻成整除條件。"
  ],
  "prerequisites": [],
  "glossary": [
    {
      "term": "因數",
      "definition": "能把某整數整除的整數。"
    },
    {
      "term": "倍數",
      "definition": "某整數乘上一個整數所得的數。"
    },
    {
      "term": "整除",
      "definition": "除法的商是整數且餘數為0。"
    },
    {
      "term": "共同倍數",
      "definition": "同時是兩個或多個數的倍數。"
    }
  ],
  "notation": [
    {
      "symbol": "a∣b",
      "meaning": "a 能整除 b，也就是 a 是 b 的因數。"
    },
    {
      "symbol": "b=ak",
      "meaning": "b 是 a 的倍數，k 為整數。"
    }
  ],
  "conceptNarrative": [
    "因數與倍數描述同一個乘法事實的兩個方向，例如6×4=24，因此6是24的因數，24是6的倍數。",
    "因數通常在固定正整數下數量有限；倍數則可持續乘1、2、3而有無限多個。",
    "平均分且不剩，表示組數或每組大小必須整除總量。",
    "0 是每個非零整數的倍數，但0不能作為除數，因此不把0當成正整數的因數。"
  ],
  "formalDefinitions": [
    {
      "name": "因數",
      "statement": "若 b÷a 為整數，則 a 是 b 的因數。"
    },
    {
      "name": "倍數",
      "statement": "若 b=a×k，k 為整數，則 b 是 a 的倍數。"
    },
    {
      "name": "整除",
      "statement": "除法餘數為0的關係。"
    }
  ],
  "formulas": [
    {
      "formula": "b=a×k",
      "conditions": [
        "a、b、k皆為整數"
      ],
      "meaning": "連結因數與倍數。"
    }
  ],
  "nonApplicableCases": [
    "只因一個數較小，不能判定它是因數。",
    "除數為0的式子沒有定義。",
    "題目若限定正因數，不納入負因數。",
    "平均分配若允許剩餘，就不再是整除問題。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先找出誰是總量。",
      "check": "題目問因數、倍數、組數或每組大小？"
    },
    {
      "step": 2,
      "instruction": "把文字改寫成除法或乘法。",
      "check": "是否能寫成總量=每組×組數？"
    },
    {
      "step": 3,
      "instruction": "檢查餘數。",
      "check": "商是否為整數？"
    },
    {
      "step": 4,
      "instruction": "處理範圍限制。",
      "check": "是否要求小於、介於或最多？"
    },
    {
      "step": 5,
      "instruction": "用原情境驗算。",
      "check": "分組後是否真的不剩？"
    }
  ],
  "workedExamples": [
    {
      "prompt": "判斷 9 是否為 63 的因數。",
      "solutionSteps": [
        "計算 63÷9，得到商 7、餘數 0。",
        "因為商 7 是整數且沒有餘數，所以 9 能整除 63。",
        "再以 9×7=63 回代，確認 9 是 63 的因數。"
      ],
      "answer": "9 是 63 的因數。",
      "why": "用總數除以候選因數，63÷9=7，商是整數且沒有餘數，因此 9 能整除 63。等價地，63=9×7，也直接顯示 9 是 63 的因數，兩種檢查結果一致。"
    },
    {
      "prompt": "列出 16 的所有正因數。",
      "solutionSteps": [
        "從 1 開始成對尋找乘積為 16 的正整數，得到 1×16、2×8、4×4。",
        "檢查到 √16=4 即可停止，因為之後只會重複前面的因數對。",
        "整理各因數且去除重複的 4，依序得到 1、2、4、8、16。"
      ],
      "answer": "1、2、4、8、16。",
      "why": "成對尋找乘積為 16 的正整數：1×16、2×8、4×4。把每一對兩側整理且不重複，即得全部正因數；檢查到 √16=4 就足以確認沒有遺漏。"
    },
    {
      "prompt": "找出小於 40 的 7 的正倍數。",
      "solutionSteps": [
        "依序計算 7×1、7×2、7×3、7×4、7×5，得到 7、14、21、28、35。",
        "下一個正倍數是 7×6=42，已不符合小於 40。",
        "因此在 35 停止，符合範圍的正倍數共有 7、14、21、28、35。"
      ],
      "answer": "7、14、21、28、35。",
      "why": "正倍數依序由 7×1、7×2、7×3、7×4、7×5 取得；下一個 7×6=42 已不符合小於 40，所以必須在 35 停止。這樣從最小正倍數逐一列舉，可確保沒有跳過任何符合範圍的數。"
    },
    {
      "prompt": "60 顆球平均分成每袋 12 顆，可裝幾袋？",
      "solutionSteps": [
        "用總球數除以每袋球數，列式為 60÷12。",
        "計算得 60÷12=5，所以可裝 5 袋。",
        "以 12×5=60 驗算，確認全部裝完且沒有剩餘。"
      ],
      "answer": "可裝 5 袋。",
      "why": "平均分袋的關係是總數＝每袋數×袋數，所以袋數為 60÷12=5。商為整數且 12×5=60，證明全部球正好裝完而沒有剩餘，因此五袋的結論可直接回代驗證。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把所有小於原數的數都當因數。",
      "why": "忽略整除條件。",
      "correction": "逐一做除法檢查餘數。"
    },
    {
      "mistake": "把因數與倍數方向說反。",
      "why": "未從乘法等式判讀角色。",
      "correction": "由 a×k=b 判定a是b因數、b是a倍數。"
    },
    {
      "mistake": "認為0是每個數的因數。",
      "why": "把0是倍數的性質混到因數。",
      "correction": "記住不能除以0。"
    },
    {
      "mistake": "列因數時漏掉原數本身。",
      "why": "以為因數一定更小。",
      "correction": "正整數本身永遠是最大正因數。"
    },
    {
      "mistake": "列倍數時包含不是整數倍的數。",
      "why": "只看接近。",
      "correction": "每項都應能寫成原數×整數。"
    },
    {
      "mistake": "分組題未檢查是否有剩。",
      "why": "只做近似除法。",
      "correction": "題目說平均且不剩時，商必須是整數。"
    }
  ],
  "selfCheck": [
    "我是否分清因數與倍數方向？",
    "除法是否沒有餘數？",
    "是否處理正因數或範圍限制？",
    "0 是否被錯放到除數位置？",
    "答案能否放回分組情境驗算？"
  ],
  "summary": [
    "因數與倍數是同一乘法關係的兩個方向。",
    "整除是判斷核心。",
    "因數有限，倍數通常無限。",
    "平均分、不剩與等長切割常轉成整除。"
  ],
  "connections": {
    "previous": "本節為 U02 起點，使用 U01 的整數整除與乘法觀念。",
    "next": [
      "質數與合數會依正因數個數分類。",
      "GCD與LCM會建立在共同因數、共同倍數上。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u02-s001-v001",
      "u02-s001-v002",
      "u02-s001-v003",
      "u02-s001-v004",
      "u02-s001-v005",
      "u02-s001-v006",
      "u02-s001-v007",
      "u02-s001-v008",
      "u02-s001-v009",
      "u02-s001-v010",
      "u02-s001-v011",
      "u02-s001-v012"
    ],
    "constructedResponseIds": [
      "u02-s001-cr001",
      "u02-s001-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐題檢查整除方向、0的角色、正因數邊界與四個例題的餘數；16的因數配對、7的倍數範圍和60÷12均乘回原數驗證。",
    "reviewVersion": "human-lecture-review-r3.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "f7fa6121de25c6c300c5e1cf20c5a9f79ac5fcf4a6ff795846d2c26e2e4207ad",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u02-s001-v001",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個數是 24 的因數？",
    "choices": [
      "6",
      "10",
      "14",
      "18"
    ],
    "answerIndex": 0,
    "explanation": "因數必須能整除原數。24÷6=4，商是整數，所以 6 是 24 的因數；24 分別除以 10、14、18 都有餘數，三者不能整除 24，因此唯一答案是 6，也符合整除的定義。",
    "steps": [
      "先用 24 分別除以四個選項。",
      "確認 24÷6=4，商為整數且沒有餘數。",
      "排除除後有餘數的 10、14、18，選 6。"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": true,
        "reason": "24÷6=4，確實整除。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "24÷10 有餘數。"
      },
      {
        "choice": "14",
        "truth": false,
        "reason": "24÷14 有餘數。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "24÷18 有餘數。"
      }
    ],
    "commonMistake": "只看選項是否小於 24，沒有檢查整除。",
    "concept": "因數必須能把原數整除。",
    "tags": [
      "數與量",
      "因數與倍數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "辨認單一因數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ef52c1230234a6a786a1d4b17141838628395d0cbf740cf313d7d76cce91b339",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v002",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個數是 8 的倍數？",
    "choices": [
      "30",
      "40",
      "54",
      "62"
    ],
    "answerIndex": 1,
    "explanation": "判斷 8 的倍數，要看該數能否寫成 8 乘正整數。40=8×5，符合倍數定義；30、54、62 除以 8 都有餘數，即使它們是偶數也不一定是 8 的倍數，關鍵是能否整除。",
    "steps": [
      "逐一檢查選項能否被 8 整除。",
      "把 40 寫成 8×5，確認它是 8 的整數倍。",
      "排除除以 8 有餘數的其餘選項。"
    ],
    "optionAnalysis": [
      {
        "choice": "30",
        "truth": false,
        "reason": "30÷8 有餘數。"
      },
      {
        "choice": "40",
        "truth": true,
        "reason": "40=8×5，成立。"
      },
      {
        "choice": "54",
        "truth": false,
        "reason": "54÷8 有餘數。"
      },
      {
        "choice": "62",
        "truth": false,
        "reason": "62÷8 有餘數。"
      }
    ],
    "commonMistake": "看到三十、五十四、六十二都是偶數，就誤以為偶數必為八的倍數。",
    "concept": "倍數可寫成原數乘整數。",
    "tags": [
      "數與量",
      "因數與倍數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "辨認倍數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6290bd3e7a2304a9242d88d4421790de55cb112741d8637e4ad8ec5cb06f1265",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v003",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 7 是 n 的因數，下列哪一個可能是 n？",
    "choices": [
      "30",
      "32",
      "35",
      "38"
    ],
    "answerIndex": 2,
    "explanation": "「7 是 n 的因數」表示 n 可被 7 整除，也就是 n 必須是 7 的倍數。四個選項中只有 35=7×5；30、32、38 都不能被 7 整除，所以 n 可能是 35，而對應的正整數商為 5。",
    "steps": [
      "把條件翻成 n=7×正整數。",
      "檢查四個選項是否能被 7 整除。",
      "確認 35=7×5，故選 35。"
    ],
    "optionAnalysis": [
      {
        "choice": "30",
        "truth": false,
        "reason": "30 不是 7 的倍數。"
      },
      {
        "choice": "32",
        "truth": false,
        "reason": "32 不是 7 的倍數。"
      },
      {
        "choice": "35",
        "truth": true,
        "reason": "35=7×5。"
      },
      {
        "choice": "38",
        "truth": false,
        "reason": "38 不是 7 的倍數。"
      }
    ],
    "commonMistake": "把「7 是 n 的因數」反讀成「n 是 7 的因數」。",
    "concept": "因數與倍數是方向相反的關係。",
    "tags": [
      "數與量",
      "因數與倍數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "判讀因數敘述。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7e816b3af6e5c041c8755edcc3d75928c51d97ef871c9c9440d0dcdb2de12fbe",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v004",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "36 的所有正因數中，最大的是哪一個？",
    "choices": [
      "1",
      "6",
      "18",
      "36"
    ],
    "answerIndex": 3,
    "explanation": "任何正整數都能整除自己，因為 36÷36=1，所以 36 是自己的正因數。正因數不可能大於原正整數，而選項 1、6、18 雖也是因數卻都較小，因此最大正因數是 36。",
    "steps": [
      "確認 36÷36=1，沒有餘數。",
      "利用正因數不大於原正整數的性質判斷上界。",
      "比較選項後選出最大的正因數 36。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "1 是最小正因數。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "6 是因數但不是最大。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "18 是因數但仍小於 36。"
      },
      {
        "choice": "36",
        "truth": true,
        "reason": "36 是本身，也是最大正因數。"
      }
    ],
    "commonMistake": "誤以為因數一定小於原數，因而排除原數三十六本身。",
    "concept": "正整數的最大正因數是本身。",
    "tags": [
      "數與量",
      "因數與倍數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "掌握因數的邊界。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a0eba197a0b266364869d6d9939d3a401d9634fbe163b9daaae863e192de6d86",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v005",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "關於正整數的因數與倍數，下列哪一個敘述正確？",
    "choices": [
      "1 是每個正整數的因數",
      "0 是每個正整數的因數",
      "每個正整數都有無限多個正因數",
      "12 是 5 的倍數"
    ],
    "answerIndex": 0,
    "explanation": "任一正整數 n 都可寫成 1×n，因此 1 能整除每個正整數。0 不能作除數；固定正整數的正因數個數有限；12÷5 也不是整數，所以只有「1 是每個正整數的因數」正確。",
    "steps": [
      "以任意正整數 n 寫出 n=1×n。",
      "用除數不能為 0 與因數個數有限排除中間兩項。",
      "檢查 12÷5 有餘數，確認只有第一項成立。"
    ],
    "optionAnalysis": [
      {
        "choice": "1 是每個正整數的因數",
        "truth": true,
        "reason": "n÷1=n，對每個正整數都成立。"
      },
      {
        "choice": "0 是每個正整數的因數",
        "truth": false,
        "reason": "因數判斷需要作除法，而除以 0 沒有定義。"
      },
      {
        "choice": "每個正整數都有無限多個正因數",
        "truth": false,
        "reason": "每個固定正整數只有有限個正因數。"
      },
      {
        "choice": "12 是 5 的倍數",
        "truth": false,
        "reason": "12÷5 不是整數，所以 12 不是 5 的倍數。"
      }
    ],
    "commonMistake": "忽略因數定義中的整除條件，或把 0 當成可作除數。",
    "concept": "因數與倍數必須以整除關係判斷。",
    "tags": [
      "數與量",
      "因數與倍數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "用正整數範圍內的定義判斷因數與倍數性質。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b73c6ec446372171de13d911701033d4da4985c4db94866221a7cac81ea26a00",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v006",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "小於 50 的正整數中，同時是 6 和 9 的倍數者有幾個？",
    "choices": [
      "1 個",
      "2 個",
      "3 個",
      "4 個"
    ],
    "answerIndex": 1,
    "explanation": "6 和 9 的共同倍數是最小公倍數 18 的倍數。依序列出 18、36、54，題目限制小於 50，所以只能保留 18、36，共有 2 個；54 已超出範圍，不能列入計數。",
    "steps": [
      "先求 6、9 的最小公倍數為 18。",
      "列出小於 50 的 18 倍數：18、36。",
      "排除 54 後計數，得到 2 個。"
    ],
    "optionAnalysis": [
      {
        "choice": "1 個",
        "truth": false,
        "reason": "只算 18，漏掉 36。"
      },
      {
        "choice": "2 個",
        "truth": true,
        "reason": "18、36 共 2 個。"
      },
      {
        "choice": "3 個",
        "truth": false,
        "reason": "第三個 54 已超過 50。"
      },
      {
        "choice": "4 個",
        "truth": false,
        "reason": "沒有第四個符合者。"
      }
    ],
    "commonMistake": "列倍數時漏列或把超出範圍的數算入。",
    "concept": "共同倍數可由最小共同週期依序列出。",
    "tags": [
      "數與量",
      "因數與倍數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "計數共同倍數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6d37fe70e0eb2cd643eea999a2b8ba55de1b557f801c7ed5ec65792de5e6f7c0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v007",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某正整數 n 滿足：6 是 n 的因數、n 是 54 的因數，且 n>10。下列哪一個可能是 n？",
    "choices": [
      "12",
      "15",
      "18",
      "24"
    ],
    "answerIndex": 2,
    "explanation": "6 是 n 的因數，故 n 必須是 6 的倍數；n 又是 54 的因數，且大於 10。逐項檢查，18=6×3 且 54÷18=3，三個條件全符合；其餘選項至少違反一項，因此只能選 18。",
    "steps": [
      "先從 6 是 n 的因數得知 n 是 6 的倍數。",
      "再檢查 n 是否整除 54 且 n>10。",
      "確認只有 18 同時滿足三個條件。"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": false,
        "reason": "12 不是 54 的因數。"
      },
      {
        "choice": "15",
        "truth": false,
        "reason": "15 不是 6 的倍數。"
      },
      {
        "choice": "18",
        "truth": true,
        "reason": "18=6×3 且 54÷18=3。"
      },
      {
        "choice": "24",
        "truth": false,
        "reason": "24 不是 54 的因數。"
      }
    ],
    "commonMistake": "只檢查六的倍數或五十四的因數其中一項，沒有取條件交集。",
    "concept": "複合條件必須同時滿足因數與倍數關係。",
    "tags": [
      "數與量",
      "因數與倍數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "交集式判斷。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "164beb81cc15f632c0da6f949ed56a1929bee5a1d31598a5f8fa41a54503bb2d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v008",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個正整數有且只有 6 個正因數。下列哪一個數符合？",
    "choices": [
      "16",
      "24",
      "25",
      "20"
    ],
    "answerIndex": 3,
    "explanation": "20 的正因數成對列為 1、2、4、5、10、20，正好 6 個。相較之下，16 有 5 個、24 有 8 個、25 有 3 個正因數，因此只有 20 符合「有且只有 6 個」，而且列舉沒有遺漏或重複。",
    "steps": [
      "完整列出 20 的正因數並確認不重複。",
      "計數得到 1、2、4、5、10、20 共 6 個。",
      "檢查其他選項的因數個數後確認答案唯一。"
    ],
    "optionAnalysis": [
      {
        "choice": "16",
        "truth": false,
        "reason": "16 有 5 個正因數。"
      },
      {
        "choice": "24",
        "truth": false,
        "reason": "24 有 8 個正因數。"
      },
      {
        "choice": "25",
        "truth": false,
        "reason": "25 有 3 個正因數。"
      },
      {
        "choice": "20",
        "truth": true,
        "reason": "20 有 6 個正因數。"
      }
    ],
    "commonMistake": "只列出二十的部分因數便停止，沒有成對檢查直到全部列完。",
    "concept": "判斷因數個數時必須完整列舉。",
    "tags": [
      "數與量",
      "因數與倍數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "由因數個數辨認整數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "319c8b895caf00075dad3306f3939f1ebdef8d4a5b20b876b94debb80bf10404",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v009",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "介於 40 與 70 之間的整數中，同時以 5 和 6 為因數的數是哪一個？",
    "choices": [
      "60",
      "50",
      "54",
      "65"
    ],
    "answerIndex": 0,
    "explanation": "同時以 5、6 為因數，表示所求數是 5 與 6 的共同倍數，也就是 30 的倍數。介於 40、70 之間的 30 倍數只有 60，且 60÷5=12、60÷6=10，兩條件都成立，所以答案具有唯一性。",
    "steps": [
      "求出 5、6 的最小公倍數為 30。",
      "列出 40 與 70 之間的 30 倍數。",
      "驗算 60 可同時被 5、6 整除。"
    ],
    "optionAnalysis": [
      {
        "choice": "60",
        "truth": true,
        "reason": "60=5×12=6×10。"
      },
      {
        "choice": "50",
        "truth": false,
        "reason": "50 不能被 6 整除。"
      },
      {
        "choice": "54",
        "truth": false,
        "reason": "54 不能被 5 整除。"
      },
      {
        "choice": "65",
        "truth": false,
        "reason": "65 不能被 6 整除。"
      }
    ],
    "commonMistake": "把「以 5 和 6 為因數」只檢查其中一個。",
    "concept": "同時含兩個因數就是兩者共同倍數。",
    "tags": [
      "數與量",
      "因數與倍數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "在區間中找共同倍數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8a58968eda788a12eb9f84a8947d4bea1df7f62f4ba5349e791c78181dcf984a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v010",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "老師有 72 張卡片，要平均分成若干組，每組張數相同且不剩。下列哪一個組數不可行？",
    "choices": [
      "6 組",
      "10 組",
      "8 組",
      "12 組"
    ],
    "answerIndex": 1,
    "explanation": "要平均分組且不剩，組數必須整除 72。72÷6=12、72÷8=9、72÷12=6 都是整數；72÷10=7 餘 2，會剩兩張卡片，因此只有 10 組不可行，無法滿足題意所說的平均且完全分完。",
    "steps": [
      "把每個候選組數當作 72 的除數。",
      "計算 72÷10=7 餘 2，發現不能平均分完。",
      "確認 6、8、12 組皆可整除 72。"
    ],
    "optionAnalysis": [
      {
        "choice": "6 組",
        "truth": false,
        "reason": "72÷6=12，可行。"
      },
      {
        "choice": "10 組",
        "truth": true,
        "reason": "72÷10=7 餘 2，不可行。"
      },
      {
        "choice": "8 組",
        "truth": false,
        "reason": "72÷8=9，可行。"
      },
      {
        "choice": "12 組",
        "truth": false,
        "reason": "72÷12=6，可行。"
      }
    ],
    "commonMistake": "把接近整數的商也當成平均分配。",
    "concept": "平均分組要求組數整除總數。",
    "tags": [
      "數與量",
      "因數與倍數",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "用因數判斷分組可行性。",
    "literacyContextNecessity": "「平均分且不剩」決定了必須檢查組數是否為 72 的因數；刪除情境就無法判定所問的分組條件。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "70fb00c1498d6b00ce6b9cd9c798698a3fd86e15538addb019c15e4e6cea26f9",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v011",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一條 96 公分的緞帶要剪成等長且每段為整數公分。下列哪一個長度可以完全剪完？",
    "choices": [
      "5 公分",
      "7 公分",
      "8 公分",
      "10 公分"
    ],
    "answerIndex": 2,
    "explanation": "每段等長且完全剪完，段長必須是 96 的因數。96÷8=12，能剪成 12 段且沒有剩餘；96 除以 5、7、10 都有餘數，所以可行的段長是 8 公分，並非只要是整數長度就可以。",
    "steps": [
      "把每個候選段長拿來除總長 96 公分。",
      "確認 96÷8=12，商為整數且無餘數。",
      "排除除後有餘數的 5、7、10 公分。"
    ],
    "optionAnalysis": [
      {
        "choice": "5 公分",
        "truth": false,
        "reason": "96÷5 有餘數。"
      },
      {
        "choice": "7 公分",
        "truth": false,
        "reason": "96÷7 有餘數。"
      },
      {
        "choice": "8 公分",
        "truth": true,
        "reason": "96÷8=12。"
      },
      {
        "choice": "10 公分",
        "truth": false,
        "reason": "96÷10 有餘數。"
      }
    ],
    "commonMistake": "只看候選段長小於九十六公分，沒有檢查能否完全整除總長。",
    "concept": "等長剪裁的段長必須整除總長。",
    "tags": [
      "數與量",
      "因數與倍數",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "用因數決定切割長度。",
    "literacyContextNecessity": "緞帶總長、整數公分與完全剪完三項資料共同限定整除關係，情境不可刪除。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b97ed0bf80c55704b819e7ebb098a8ad4a00ac60eaa108dc2981b5f57d3f1da2",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v012",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某展場每 14 個座位編成一區。若共有 196 個座位且全部編完，總區數是多少？",
    "choices": [
      "12 區",
      "13 區",
      "15 區",
      "14 區"
    ],
    "answerIndex": 3,
    "explanation": "總區數要用總座位數除以每區座位數，196÷14=14。再以 14 區×每區 14 個座位=196 驗算，全部座位正好編完，因此答案是 14 區，且不會有空位或額外座位。",
    "steps": [
      "辨認總量 196 與每區 14 個座位。",
      "計算 196÷14=14，得到區數。",
      "用 14×14=196 驗證沒有剩餘座位。"
    ],
    "optionAnalysis": [
      {
        "choice": "12 區",
        "truth": false,
        "reason": "14×12=168，少 28。"
      },
      {
        "choice": "13 區",
        "truth": false,
        "reason": "14×13=182，少 14。"
      },
      {
        "choice": "15 區",
        "truth": false,
        "reason": "14×15=210，超過。"
      },
      {
        "choice": "14 區",
        "truth": true,
        "reason": "14×14=196。"
      }
    ],
    "commonMistake": "把每區座位數誤當成區數，不做除法驗證。",
    "concept": "已知倍數與每份大小，可用除法求倍數倍數。",
    "tags": [
      "數與量",
      "因數與倍數",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "由倍數關係求分組數。",
    "literacyContextNecessity": "每區 14 席和總席數 196 是求區數的必要資料，必須依實際編區條件相除。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f82e11de5fbecaa367c09a0ff47085f68644b71afce66ae681bbee0ec6fd0d38",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u02-s001-cr001",
    "unitId": "u02",
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "列出 48 的所有正因數，並說明你如何確認沒有遺漏。",
    "requiredWork": [
      "以因數配對方式列出。",
      "因數由小到大且不重複。",
      "說明檢查到平方根即可。"
    ],
    "fullCreditSolution": [
      "先成對找乘積為 48 的正整數：1×48、2×24、3×16、4×12、6×8。",
      "整理兩側且不重複，正因數為 1、2、3、4、6、8、12、16、24、48。",
      "因為只需檢查不超過 √48 的整數，5、7 都不能整除，而所有較小因數的配對商均已列入，所以沒有遺漏。"
    ],
    "alternativeSolutions": [
      "也可逐一用48除以1到6，記錄無餘數者及對應商。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "十個正因數完整且說明配對/平方根檢查。"
      },
      {
        "score": 2,
        "criteria": "因數只漏一個或說明不完整。"
      },
      {
        "score": 1,
        "criteria": "列出至少五個正確因數並顯示整除概念。"
      },
      {
        "score": 0,
        "criteria": "多數數字不能整除48或未作答。"
      }
    ],
    "scoringNotes": [
      "負因數不在本題要求。",
      "順序不影響得分，但不得重複。"
    ],
    "commonErrors": [
      "漏掉48本身。",
      "把5列為因數。",
      "只列較小一側。"
    ],
    "independentReview": {
      "derivedResult": "1、2、3、4、6、8、12、16、24、48。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "3f0f2d238bb83f2a0c5e57584d5bce4e9a6051fc716be4c2317b900373fd9cff",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-cr002",
    "unitId": "u02",
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "正整數 n 小於 80，且 6、8 都是 n 的因數。列出所有可能的 n，並解釋。",
    "requiredWork": [
      "n必須同時是6與8的倍數。",
      "列出所有小於80的可能值。",
      "說明為何沒有其他值。"
    ],
    "fullCreditSolution": [
      "6、8 都是 n 的因數，表示 n 必須同時是 6、8 的倍數；兩數最小公倍數為 24。",
      "因此所有可能 n 都是 24 的正倍數，依序為 24、48、72、96。",
      "套用 n<80 的嚴格範圍，排除 96，故所有可能值恰為 24、48、72。"
    ],
    "alternativeSolutions": [
      "可分別列6與8的倍數後取交集。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "列出24、48、72並正確說明共同倍數。"
      },
      {
        "score": 2,
        "criteria": "答案完整但理由簡略，或漏一個值。"
      },
      {
        "score": 1,
        "criteria": "知道要找共同倍數並得到至少一個正確值。"
      },
      {
        "score": 0,
        "criteria": "把6、8的因數當候選或全部錯誤。"
      }
    ],
    "scoringNotes": [
      "80不包含在範圍。",
      "若寫0不計，因題目要求正整數。"
    ],
    "commonErrors": [
      "把最小值十四誤當成唯一答案，沒有繼續逐一列出其倍數。",
      "只列出二十四而漏掉同樣符合條件的其他整數。",
      "把上界九十六也列入，忽略題目要求必須小於九十六。"
    ],
    "independentReview": {
      "derivedResult": "n=24、48、72。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "962df39efd4e3763d35efeb844eb2b5417193173443ace42cca388cdfb93c4e3",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
