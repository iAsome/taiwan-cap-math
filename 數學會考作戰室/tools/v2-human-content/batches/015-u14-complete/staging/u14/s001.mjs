// Generated only from reviewed immutable source. Do not hand edit.
export default {
  "lecture": {
    "lectureId": "u14-s001-lecture-r1",
    "unitId": "u14",
    "numericUnitId": 14,
    "topicId": "u14-sequences",
    "skillId": "sequence-pattern",
    "lockedTitle": "數列規律",
    "title": "數列規律：從相鄰變化找出可驗證的規則",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能辨認數列的項與項數。",
      "能用相鄰差、相鄰比、交錯與圖形數量尋找規律。",
      "能區分「符合前幾項」與「規則已被唯一確定」。",
      "能依明確規則延伸或回推數列。"
    ],
    "prerequisiteBridge": [],
    "glossary": [
      {
        "term": "數列",
        "definition": "依一定順序排成的一串數。"
      },
      {
        "term": "項",
        "definition": "數列中的每一個數。"
      },
      {
        "term": "第 n 項",
        "definition": "排在第 n 個位置的項，記作 a_n。"
      },
      {
        "term": "規律",
        "definition": "能一致產生各項的明確方法。"
      }
    ],
    "notation": [
      {
        "symbol": "a_n",
        "meaning": "數列的第 n 項。"
      },
      {
        "symbol": "a_{n+1}-a_n",
        "meaning": "相鄰兩項的差。"
      },
      {
        "symbol": "a_{n+1}÷a_n",
        "meaning": "前項非零時的相鄰比。"
      }
    ],
    "conceptNarrative": [
      "觀察數列先看位置，再看數值如何改變；不能只因兩次變化相同就急著下結論。",
      "最常見的規律包括固定加減、固定乘除、差值本身有規律、奇偶項分開以及圖形數量隨階段改變。",
      "有限個已知項通常可能符合不只一種規則，因此題目必須提供「依此規律」或足夠圖形結構，才可延伸。",
      "找到規律後要回代已知各項檢查，不能只驗一個位置。"
    ],
    "formalDefinitions": [
      {
        "name": "數列",
        "statement": "依序排列並可用位置編號的數。"
      },
      {
        "name": "相鄰差",
        "statement": "後一項減前一項所得的數。"
      },
      {
        "name": "交錯規律",
        "statement": "奇數位置與偶數位置分別依不同規則變化。"
      }
    ],
    "formulas": [
      {
        "formula": "a_{n+1}=a_n+d",
        "conditions": [
          "每一步都增加同一數 d"
        ],
        "meaning": "固定差的遞推表示。"
      },
      {
        "formula": "a_{n+1}=r a_n",
        "conditions": [
          "每一步都乘同一數 r，且所需除法有意義"
        ],
        "meaning": "固定比的遞推表示。"
      }
    ],
    "nonApplicableCases": [
      "只看數值大小而忽略位置，無法判定第幾項。",
      "相鄰差不固定時，不能套等差公式。",
      "含有 0 時直接用除法找比，可能沒有定義。",
      "交錯數列不能把所有項當成單一路徑。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "列出位置 n 與項 a_n",
        "check": "避免把項值當項數。"
      },
      {
        "step": 2,
        "instruction": "先算相鄰差",
        "check": "檢查是否固定或差值另有規律。"
      },
      {
        "step": 3,
        "instruction": "再看相鄰比與奇偶位置",
        "check": "前項為0時不要硬除。"
      },
      {
        "step": 4,
        "instruction": "把候選規則套回所有已知項",
        "check": "每一項都要符合。"
      },
      {
        "step": 5,
        "instruction": "依同一規則求目標項",
        "check": "最後檢查位置是否正確。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "2，5，8，11，… 的下一項",
        "reasoning": "相鄰差皆為3。",
        "solutionSteps": [
          "相鄰差皆為3。",
          "11+3=14。"
        ],
        "answer": "14"
      },
      {
        "exampleId": "L2",
        "prompt": "1，4，9，16，… 的第6項",
        "reasoning": "各項為位置的平方。",
        "solutionSteps": [
          "各項為位置的平方。",
          "a_6=6^2=36。"
        ],
        "answer": "36"
      },
      {
        "exampleId": "L3",
        "prompt": "3，-3，3，-3，… 的第9項",
        "reasoning": "奇數項為3，偶數項為-3。",
        "solutionSteps": [
          "奇數項為3，偶數項為-3。",
          "9為奇數。"
        ],
        "answer": "3"
      },
      {
        "exampleId": "L4",
        "prompt": "1，2，4，7，11，… 的下一項",
        "reasoning": "差依序為1、2、3、4。",
        "solutionSteps": [
          "差依序為1、2、3、4。",
          "下一次加5，11+5=16。"
        ],
        "answer": "16"
      }
    ],
    "difficultyConnections": {
      "basic": "能辨認定義與完成單一步驟。",
      "standard": "能在多個表示間轉換並處理兩至三步推理。",
      "advanced": "能整合位置、條件、反推或代數驗證。",
      "literacy": "能從表格、圖形或實際單位中選擇模型並檢查邊界。"
    },
    "commonMistakes": [
      {
        "mistake": "只看最後兩項的差",
        "why": "短暫相同不代表全程固定。",
        "correction": "檢查所有相鄰差。"
      },
      {
        "mistake": "把第 n 項和項值 n 混為一談",
        "why": "位置與數值是不同量。",
        "correction": "先寫位置表。"
      },
      {
        "mistake": "看到倍增就把首項也乘一次",
        "why": "第1項尚未經過變化。",
        "correction": "從第1項到第n項只有n-1次變化。"
      },
      {
        "mistake": "忽略交錯符號",
        "why": "奇偶位置的規則不同。",
        "correction": "分列奇數項與偶數項。"
      },
      {
        "mistake": "前項為0仍計算相鄰比",
        "why": "除以0沒有定義。",
        "correction": "改看差或圖形結構。"
      },
      {
        "mistake": "只用候選規則驗一項",
        "why": "錯誤規則可能碰巧命中。",
        "correction": "回代全部已知項。"
      }
    ],
    "selfCheck": [
      "我有標出每一項的位置嗎？",
      "相鄰差或相鄰比是否對所有項都成立？",
      "是否需要把奇數項與偶數項分開？",
      "規則是否能解釋全部已知資訊？",
      "求出的項是否在正確位置？"
    ],
    "summary": [
      "數列同時包含順序與數值。",
      "找規律要檢查差、比、差的規律與交錯結構。",
      "有限項不必然唯一決定規則，必須依題目給定結構。",
      "任何候選規則都要回代驗證。"
    ],
    "connections": {
      "previous": "本技能為 U14 起點，使用整數、分數、指數與代數代入能力。",
      "next": [
        "固定差將發展成等差數列第 n 項。",
        "固定比將發展成等比數列。"
      ]
    },
    "figureReferences": [
      "u14-fig-s001-dot-cards"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u14-s001-v001",
        "u14-s001-v002",
        "u14-s001-v003",
        "u14-s001-v004",
        "u14-s001-v005",
        "u14-s001-v006",
        "u14-s001-v007",
        "u14-s001-v008",
        "u14-s001-v009",
        "u14-s001-v010",
        "u14-s001-v011",
        "u14-s001-v012"
      ],
      "constructedResponseIds": [
        "u14-s001-cr001",
        "u14-s001-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "capBoundary": "pass",
      "undefinedSymbolAudit": "pass",
      "futureKnowledgeLeakage": "pass",
      "examplesNotCopiedFromQuestionBank": true,
      "reviewVersion": "human-lecture-review-r4.0",
      "reviewedAt": "2026-07-12",
      "reviewNote": "逐段檢查「數列規律」的定義、符號、適用條件與六類常見錯誤；四個例題均以不同數值與推理路徑重算，並確認未直接複製本技能題庫題幹。"
    },
    "contentSha256": "e7d62a4af54904ffcdcb3a823dae2caadb3d31c6dbda5dbb5bf61b53c072bbb3"
  },
  "mcQuestions": [
    {
      "questionId": "u14-s001-v001",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "sequence-pattern",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "數列 4，7，10，13，… 依相同規律排列，下一項是多少？",
      "givenConditions": [
        "前四項4、7、10、13"
      ],
      "target": "求下一項",
      "choices": [
        "16",
        "14",
        "15",
        "17"
      ],
      "answerIndex": 0,
      "independentSolution": "相鄰差為7-4=3、10-7=3、13-10=3；因此下一項為13+3=16。",
      "mainExplanation": "依題意依序處理：計算所有相鄰差皆為3。；將最後一項13加3。，所以唯一正確選項是「16」。",
      "steps": [
        "計算所有相鄰差皆為3。",
        "將最後一項13加3。"
      ],
      "optionAnalysis": [
        {
          "choice": "16",
          "truth": true,
          "reason": "每次增加3，所以13+3=16。"
        },
        {
          "choice": "14",
          "truth": false,
          "reason": "14只增加1，與前面固定增加3不符。"
        },
        {
          "choice": "15",
          "truth": false,
          "reason": "15只增加2，與公差3不符。"
        },
        {
          "choice": "17",
          "truth": false,
          "reason": "17增加4，破壞相鄰差。"
        }
      ],
      "misconceptionTarget": "只看最後兩項附近的數，沒有維持固定差。",
      "prerequisiteSkillIds": [],
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "題目明示依相同規律；答案為精確整數，無單位與四捨五入問題。",
      "difficultyReason": "基礎：只需檢查固定相鄰差並做一次加法。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認固定增加規律並延伸一項。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "04cb91ef7aee916ac03b4f8956ed527b7c49bc0671969a3a55e9696fd87429f3"
    },
    {
      "questionId": "u14-s001-v002",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "sequence-pattern",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "一張紙反覆對折，每完成一次，紙的層數變成原來的2倍。完成第1次後有2層，第2次後有4層，第3次後有8層。完成第5次後有幾層？",
      "givenConditions": [
        "每次對折後層數乘2",
        "第1次後為2層"
      ],
      "target": "把倍增規律延伸到指定次數",
      "choices": [
        "24",
        "32",
        "16",
        "10"
      ],
      "answerIndex": 1,
      "independentSolution": "層數依序為2、4、8、16、32，所以第5次完成後有32層。",
      "mainExplanation": "從第3次的8層繼續乘2兩次：8×2=16，16×2=32。；完整檢查：層數依序為2、4、8、16、32，所以第5次完成後有32層。",
      "steps": [
        "列出第4次層數16。",
        "再乘2得到第5次32。"
      ],
      "optionAnalysis": [
        {
          "choice": "24",
          "truth": false,
          "reason": "24把後兩次錯當各加8。"
        },
        {
          "choice": "32",
          "truth": true,
          "reason": "第5次為32層。"
        },
        {
          "choice": "16",
          "truth": false,
          "reason": "16是第4次。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "10把每次乘2誤作加2。"
        }
      ],
      "misconceptionTarget": "把操作次數與項次混淆或乘2誤作加2。",
      "prerequisiteSkillIds": [],
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "第1次後層數已明示，無起始偏移。",
      "difficultyReason": "基礎：連結操作次數與倍增項次。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認倍增規律。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "68d85f2ed260331a3a70ebe9240a169eaacb7b89d98fe6d3b9481bd50e1ff112"
    },
    {
      "questionId": "u14-s001-v003",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "sequence-pattern",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "數列 1，4，9，16，… 的下一項是多少？",
      "givenConditions": [
        "第1至第4項"
      ],
      "target": "求第5項",
      "choices": [
        "20",
        "24",
        "25",
        "32"
      ],
      "answerIndex": 2,
      "independentSolution": "將項數與項值配對：1→1²、2→2²、3→3²、4→4²，因此第5項為5²=25。",
      "mainExplanation": "依題意依序處理：辨認平方數列。；計算5²。，所以唯一正確選項是「25」。",
      "steps": [
        "辨認平方數列。",
        "計算5²。"
      ],
      "optionAnalysis": [
        {
          "choice": "20",
          "truth": false,
          "reason": "20是把前一項加4，未注意差值逐次增加。"
        },
        {
          "choice": "24",
          "truth": false,
          "reason": "24是把16加8，沒有對應平方規律。"
        },
        {
          "choice": "25",
          "truth": true,
          "reason": "各項依序是1²、2²、3²、4²，下一項是5²=25。"
        },
        {
          "choice": "32",
          "truth": false,
          "reason": "32是把16乘2，只符合最後一步猜測。"
        }
      ],
      "misconceptionTarget": "把最後一次差7當成固定差。",
      "prerequisiteSkillIds": [],
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "規律由項次平方明確指定於解讀；答案精確。",
      "difficultyReason": "基礎：熟悉前五個平方數並對應項次。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認平方數規律。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "6d9531bc5689fc370a5ead30423d6fd7fbad5c517e1de0e7524f2cc22fd538c0"
    },
    {
      "questionId": "u14-s001-v004",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "sequence-pattern",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "數列 3，6，11，18，27，… 的下一項是多少？",
      "givenConditions": [
        "五個已知項"
      ],
      "target": "求下一項",
      "choices": [
        "34",
        "36",
        "40",
        "38"
      ],
      "answerIndex": 3,
      "independentSolution": "先算差：3、5、7、9，這些差每次增加2；下一差是11，故下一項27+11=38。",
      "mainExplanation": "依題意依序處理：列出一階差。；延伸差值規律後加回。，所以唯一正確選項是「38」。",
      "steps": [
        "列出一階差。",
        "延伸差值規律後加回。"
      ],
      "optionAnalysis": [
        {
          "choice": "34",
          "truth": false,
          "reason": "34是沿用最初差7或錯讀差值。"
        },
        {
          "choice": "36",
          "truth": false,
          "reason": "36是沿用差9，忽略差值本身增加2。"
        },
        {
          "choice": "40",
          "truth": false,
          "reason": "40是下一次加13，多跳一個奇數差。"
        },
        {
          "choice": "38",
          "truth": true,
          "reason": "相鄰差依序為3、5、7、9，下一差為11，所以27+11=38。"
        }
      ],
      "misconceptionTarget": "只看原數列增加，未分析差值的規律。",
      "prerequisiteSkillIds": [],
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "差值規律由完整四段一致支持；不把有限項宣稱為唯一一般規則，只依題目所示規律延伸。",
      "difficultyReason": "標準：需要建立相鄰差數列並再延伸一次。",
      "literacyContextNecessity": null,
      "authoringIntent": "使用差值數列找二階規律。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8f332b128f07c55f753265d41d68439c26043ffa9a5ed17013a31698a4b40c2e"
    },
    {
      "questionId": "u14-s001-v005",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "sequence-pattern",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "數列 2，-2，2，-2，… 依交錯規律排列，第 15 項是多少？",
      "givenConditions": [
        "交錯數列前四項"
      ],
      "target": "求第15項",
      "choices": [
        "-2",
        "2",
        "0",
        "15"
      ],
      "answerIndex": 1,
      "independentSolution": "第1、3項都是2，第2、4項都是-2；奇數位置取2。15為奇數，故a_15=2。",
      "mainExplanation": "依題意依序處理：分開觀察奇數項與偶數項。；判斷15的奇偶。，所以唯一正確選項是「2」。",
      "steps": [
        "分開觀察奇數項與偶數項。",
        "判斷15的奇偶。"
      ],
      "optionAnalysis": [
        {
          "choice": "-2",
          "truth": false,
          "reason": "-2屬於偶數項。"
        },
        {
          "choice": "2",
          "truth": true,
          "reason": "奇數項為2，15是奇數，所以第15項為2。"
        },
        {
          "choice": "0",
          "truth": false,
          "reason": "0不是此交錯規律中的項。"
        },
        {
          "choice": "15",
          "truth": false,
          "reason": "15是項次，不是項值。"
        }
      ],
      "misconceptionTarget": "把第15項的「15」誤當答案，或忽略交錯。",
      "prerequisiteSkillIds": [],
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "項次15為正整數；符號交錯明確，沒有相鄰比除以0問題。",
      "difficultyReason": "標準：需先分離兩個子數列，再用項次奇偶判斷。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認奇偶位置交錯。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "787f89c5a4b6273500ab8bad7b768992fbf55736a46efca64d64cb052df90621"
    },
    {
      "questionId": "u14-s001-v006",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "sequence-pattern",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "某數列從1開始，相鄰兩項的差依序為1、2、3、4、…。已知前五項是1、2、4、7、11，第六項是多少？",
      "givenConditions": [
        "相鄰差依序增加1",
        "第五項為11"
      ],
      "target": "利用差分規律求下一項",
      "choices": [
        "14",
        "15",
        "16",
        "17"
      ],
      "answerIndex": 2,
      "independentSolution": "前四個差為1、2、3、4，下一個差應為5，所以第六項為11+5=16。",
      "mainExplanation": "先確認差分序列，再把下一個差5加到第五項。；完整檢查：前四個差為1、2、3、4，下一個差應為5，所以第六項為11+5=16。",
      "steps": [
        "計算相鄰差1、2、3、4。",
        "下一個差為5。",
        "11+5=16。"
      ],
      "optionAnalysis": [
        {
          "choice": "14",
          "truth": false,
          "reason": "14仍加3。"
        },
        {
          "choice": "15",
          "truth": false,
          "reason": "15重複加4。"
        },
        {
          "choice": "16",
          "truth": true,
          "reason": "下一差5所以得到16。"
        },
        {
          "choice": "17",
          "truth": false,
          "reason": "17把下一差看成6。"
        }
      ],
      "misconceptionTarget": "只看項值猜規律，沒有核對相鄰差。",
      "prerequisiteSkillIds": [],
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "差分規律已明示。",
      "difficultyReason": "標準：由差分規律求下一項。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認逐次增加的相鄰差。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f49dbd0b60fee79f613367791a0b4a6746d622323b4ed4978823d505dfadfb17"
    },
    {
      "questionId": "u14-s001-v007",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "sequence-pattern",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "某數列首項為 5，之後依序加上 1、3、5、7、… 等連續奇數。此數列第 6 項是多少？",
      "givenConditions": [
        "首項5",
        "依序加入連續奇數"
      ],
      "target": "求第6項",
      "choices": [
        "21",
        "25",
        "35",
        "30"
      ],
      "answerIndex": 3,
      "independentSolution": "第6項=a_1+(1+3+5+7+9)=5+25=30。也可逐項得5、6、9、14、21、30。",
      "mainExplanation": "依題意依序處理：數出n-1=5次增加。；加總前5個奇數並加首項。，所以唯一正確選項是「30」。",
      "steps": [
        "數出n-1=5次增加。",
        "加總前5個奇數並加首項。"
      ],
      "optionAnalysis": [
        {
          "choice": "21",
          "truth": false,
          "reason": "21只是第5項，少做一次變化。"
        },
        {
          "choice": "25",
          "truth": false,
          "reason": "25是只算增量和，忘記首項5。"
        },
        {
          "choice": "35",
          "truth": false,
          "reason": "35是多加入下一個奇數11。"
        },
        {
          "choice": "30",
          "truth": true,
          "reason": "從第1項到第6項需加入前5個奇數1、3、5、7、9，總和25，5+25=30。"
        }
      ],
      "misconceptionTarget": "把第6項誤認為要加6個奇數。",
      "prerequisiteSkillIds": [],
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "增加次數為5而非6；所有數值為整數。",
      "difficultyReason": "進階：同時考查步數n-1與奇數增量累積。",
      "literacyContextNecessity": null,
      "authoringIntent": "處理增量本身為奇數列的規律。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0c43976a77f9314d820edcf6bf6e12d7bd4aa394cc1c0d3d2ea45c78ab92b1f0"
    },
    {
      "questionId": "u14-s001-v008",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "sequence-pattern",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "數列 1，1，2，3，5，8，… 中，每一項（自第 3 項起）是前兩項的和。第 7 項是多少？",
      "givenConditions": [
        "前六項",
        "自第3項起為前兩項和"
      ],
      "target": "求第7項",
      "choices": [
        "13",
        "10",
        "11",
        "16"
      ],
      "answerIndex": 0,
      "independentSolution": "依規則a_7=a_6+a_5=8+5=13。前面2=1+1、3=1+2、5=2+3、8=3+5皆一致。",
      "mainExplanation": "依題意依序處理：確認遞推規則。；取第5與第6項相加。，所以唯一正確選項是「13」。",
      "steps": [
        "確認遞推規則。",
        "取第5與第6項相加。"
      ],
      "optionAnalysis": [
        {
          "choice": "13",
          "truth": true,
          "reason": "第7項=第5項5+第6項8=13。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "10是把第6項8加第3項2。"
        },
        {
          "choice": "11",
          "truth": false,
          "reason": "11是把8加3，取錯前兩項。"
        },
        {
          "choice": "16",
          "truth": false,
          "reason": "16是把8加自己，誤作倍增。"
        }
      ],
      "misconceptionTarget": "把「前兩項」誤解成最前面的兩項。",
      "prerequisiteSkillIds": [],
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "規則已明示，不涉及唯一性猜測。",
      "difficultyReason": "進階：規律不是固定差或固定比，需正確辨認遞推位置。",
      "literacyContextNecessity": null,
      "authoringIntent": "理解依賴前兩項的遞推數列。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b4dcebef1fbe3aa9f7509bed20c294453aa8afa0333e1585497002727957e395"
    },
    {
      "questionId": "u14-s001-v009",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "sequence-pattern",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "數列 0，2，6，12，20，… 的第 n 項可寫成 n²-n。第 8 項是多少？",
      "givenConditions": [
        "通項a_n=n²-n"
      ],
      "target": "求a_8",
      "choices": [
        "48",
        "60",
        "56",
        "64"
      ],
      "answerIndex": 2,
      "independentSolution": "題目已給通項a_n=n²-n，故a_8=8²-8=64-8=56；代n=1得0也與首項吻合。",
      "mainExplanation": "依題意依序處理：將8代入n。；先算平方再相減。，所以唯一正確選項是「56」。",
      "steps": [
        "將8代入n。",
        "先算平方再相減。"
      ],
      "optionAnalysis": [
        {
          "choice": "48",
          "truth": false,
          "reason": "48是算8×6，未依公式。"
        },
        {
          "choice": "60",
          "truth": false,
          "reason": "60是64-4，減錯項數。"
        },
        {
          "choice": "56",
          "truth": true,
          "reason": "代入n=8：8²-8=64-8=56。"
        },
        {
          "choice": "64",
          "truth": false,
          "reason": "64只算8²，漏減8。"
        }
      ],
      "misconceptionTarget": "忽略公式中的-n或運算順序。",
      "prerequisiteSkillIds": [],
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "n=8為正整數；平方先於減法，無負號歧義。",
      "difficultyReason": "進階：需正確處理含平方與減法的通項並做首項合理性檢查。",
      "literacyContextNecessity": null,
      "authoringIntent": "由已知通項求遠項。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8aab2b5fd62631839e63d814d5803339e1abad78ff0dcd19ed900d1c891aeb0b"
    },
    {
      "questionId": "u14-s001-v010",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "sequence-pattern",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u14-fig-s001-dot-cards",
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "圖卡依序排列：第 1 張有 3 個圓點，第 2 張有 5 個，第 3 張有 7 個，第 4 張有 9 個；每張都比前一張多 2 個。第 12 張有幾個圓點？",
      "givenConditions": [
        "第1至第4張點數",
        "每張多2點"
      ],
      "target": "求第12張點數",
      "choices": [
        "23",
        "24",
        "27",
        "25"
      ],
      "answerIndex": 3,
      "independentSolution": "由第1張到第12張有11次增加，每次多2點，所以3+11×2=25。圖中的排列只用來確認每階段新增2點，不可用視覺長度猜測。",
      "mainExplanation": "依題意依序處理：從圖與敘述確認固定增量2。；計算11次增加。，所以唯一正確選項是「25」。",
      "steps": [
        "從圖與敘述確認固定增量2。",
        "計算11次增加。"
      ],
      "optionAnalysis": [
        {
          "choice": "23",
          "truth": false,
          "reason": "23是只增加10次。"
        },
        {
          "choice": "24",
          "truth": false,
          "reason": "24把首項或公差處理錯。"
        },
        {
          "choice": "27",
          "truth": false,
          "reason": "27是增加12次，多走一步。"
        },
        {
          "choice": "25",
          "truth": true,
          "reason": "形成首項3、公差2的數列，a_12=3+11×2=25。"
        }
      ],
      "misconceptionTarget": "把張數12直接乘2再忽略首張。",
      "prerequisiteSkillIds": [],
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "estimatedTimeSec": 120,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "圖不按比例，僅依可數圓點與明示增量；答案單位為個。",
      "difficultyReason": "素養：需把圖卡編號轉成項次並由視覺結構與文字共同建模。",
      "literacyContextNecessity": "圖卡情境不可刪除，因為圓點排列用來確認每階段新增兩點而非其他數值規律。",
      "authoringIntent": "從圖像階段辨認線性點數規律。",
      "figureDrawingSpecRef": "units/u14/s001/drawing-specs.jsonl#u14-fig-s001-dot-cards",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d66dd4e580e480c0572bb058a9aa5f3e9ecb88229d31ca0ff79ce66f4edbc0b9"
    },
    {
      "questionId": "u14-s001-v011",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "sequence-pattern",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "一項節水計畫第 1 週節省 50 公升，之後每週比前一週多節省 15 公升。第 8 週節省多少公升？",
      "givenConditions": [
        "首週50公升",
        "每週多15公升"
      ],
      "target": "第8週單次節省量",
      "choices": [
        "155",
        "140",
        "160",
        "170"
      ],
      "answerIndex": 0,
      "independentSolution": "每週節省量形成等差數列：a_1=50、d=15，a_8=50+(8-1)15=155。",
      "mainExplanation": "依題意依序處理：辨認逐週單次量。；使用7次固定增加。，所以唯一正確選項是「155」。",
      "steps": [
        "辨認逐週單次量。",
        "使用7次固定增加。"
      ],
      "optionAnalysis": [
        {
          "choice": "155",
          "truth": true,
          "reason": "第8週經過7次增加，50+7×15=155公升。"
        },
        {
          "choice": "140",
          "truth": false,
          "reason": "140是只加6次。"
        },
        {
          "choice": "160",
          "truth": false,
          "reason": "160把每週增量誤作約16。"
        },
        {
          "choice": "170",
          "truth": false,
          "reason": "170是加8次，多算一次。"
        }
      ],
      "misconceptionTarget": "把第8週與8週累積量混淆。",
      "prerequisiteSkillIds": [],
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "公升單位一致；不要求累加前8週。",
      "difficultyReason": "素養：要辨認題目問第8週單次節省量，而不是前8週總量。",
      "literacyContextNecessity": "節水情境提供單位與「每週比前週多」的建模條件，刪除後會失去單次量與累積量的判讀要求。",
      "authoringIntent": "在節水資料中求單週量。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "148942fdc994e5edf555e497c76f49afd690b951f7109eaff986e414e8d95a56"
    },
    {
      "questionId": "u14-s001-v012",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "sequence-pattern",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "一排置物櫃的編號依序為 101、104、107、110、…。照此規律，第 20 個置物櫃的編號是多少？",
      "givenConditions": [
        "前四個編號"
      ],
      "target": "第20個的編號",
      "choices": [
        "157",
        "158",
        "160",
        "161"
      ],
      "answerIndex": 1,
      "independentSolution": "編號形成首項101、公差3的數列，a_20=101+(20-1)×3=101+57=158。",
      "mainExplanation": "依題意依序處理：把櫃序視為項次。；計算19個間隔。，所以唯一正確選項是「158」。",
      "steps": [
        "把櫃序視為項次。",
        "計算19個間隔。"
      ],
      "optionAnalysis": [
        {
          "choice": "157",
          "truth": false,
          "reason": "157是乘加計算錯1。"
        },
        {
          "choice": "158",
          "truth": true,
          "reason": "每次增加3，從第1個到第20個增加19次：101+19×3=158。"
        },
        {
          "choice": "160",
          "truth": false,
          "reason": "160是把20次都加上3。"
        },
        {
          "choice": "161",
          "truth": false,
          "reason": "161是多增加一次。"
        }
      ],
      "misconceptionTarget": "直接用20×3再加101，沒有扣除首項位置。",
      "prerequisiteSkillIds": [],
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "編號是標籤而非數量單位；規律固定增加3。",
      "difficultyReason": "素養：需分清「第20個」是位置，而158才是編號值。",
      "literacyContextNecessity": "置物櫃編號情境讓項次與項值是不同種類的數，不能刪除而不改變測量能力。",
      "authoringIntent": "由實際編號規律求指定位置。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f15e08f672da94b5a66c384abeb2acc74337a7d4912305cb7840915038eb9def"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u14-s001-cr001",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "sequence-pattern",
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "數列 2，6，12，20，30，… 的相鄰差依序有何規律？請依此求下一項，並說明為何不是等差數列。",
      "requiredWork": [
        "列出至少四個相鄰差。",
        "描述差值本身的規律。",
        "求出下一項並說明非等差原因。"
      ],
      "fullCreditSolution": [
        "相鄰差為4、6、8、10。",
        "差值每次增加2，所以下一個差為12。",
        "下一項為30+12=42。",
        "因相鄰差並非固定同一數，所以原數列不是等差數列。"
      ],
      "alternativeSolutions": [
        "也可辨認第n項為n(n+1)，直接算第6項6×7=42，再以差值不固定說明非等差。"
      ],
      "reasoningSteps": [
        "相鄰差為4、6、8、10。",
        "差值每次增加2，所以下一個差為12。",
        "下一項為30+12=42。",
        "因相鄰差並非固定同一數，所以原數列不是等差數列。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "完整列出4、6、8、10，正確延伸差12得到42，並明確指出公差不固定。"
        },
        {
          "score": 2,
          "criteria": "答案42且有差值規律，但非等差說明不完整；或一處小算錯但方法正確。"
        },
        {
          "score": 1,
          "criteria": "看出差值增加2或寫出部分正確差值，但未完成下一項與分類。"
        },
        {
          "score": 0,
          "criteria": "把數列當固定公差、答案與推理均無法支持。"
        }
      ],
      "partialCreditRules": [
        "若只漏列一個差但其餘規律與42正確，最多扣1分。",
        "只寫42沒有任何規律證據，不超過1分。"
      ],
      "followThroughPolicy": "若前面某一個差值抄錯，但後續一致依「差值每次加2」推得下一項，保留方法分，最終數值依錯誤追隨評分。",
      "unitAndNotationRules": "純數列無單位；「差」需使用後項減前項。",
      "answerOnlyPolicy": "只答42給1分；只答「不是等差」不給分，除非有差值證據。",
      "commonErrors": [
        "把最後差10當固定公差。",
        "把下一差寫成11而非12。"
      ],
      "figureDrawingSpecRef": null,
      "independentReview": {
        "derivedResult": "相鄰差4、6、8、10，下一項42，非等差。",
        "ambiguity": "規律與要求明確，答案唯一。",
        "unitBoundaryCheck": "純數列無單位；「差」需使用後項減前項。",
        "decision": "pass",
        "reviewNote": "獨立依題目條件重新推導，得到「相鄰差4、6、8、10，下一項42，非等差。」。評分規準逐分對應本題必要步驟，並已檢查錯誤追隨與只寫答案的處理。"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2a6dc384d73b506e92e9ea75e1752734ba80e2151ac8e023b4f65f823f1875b8"
    },
    {
      "questionId": "u14-s001-cr002",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "sequence-pattern",
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "數列 1，4，9，16，25，… 依項次平方排列。請寫出第 n 項公式，並求第 30 項。",
      "requiredWork": [
        "指出各項與項次的平方關係。",
        "寫出a_n。",
        "計算a_30。"
      ],
      "fullCreditSolution": [
        "第1至第5項分別為1²、2²、3²、4²、5²。",
        "因此a_n=n²。",
        "a_30=30²=900。"
      ],
      "alternativeSolutions": [
        "也可由相鄰差3、5、7、9辨認為平方數列，但仍需寫a_n=n²。"
      ],
      "reasoningSteps": [
        "第1至第5項分別為1²、2²、3²、4²、5²。",
        "因此a_n=n²。",
        "a_30=30²=900。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確寫a_n=n²並計算900，且有至少一項規律說明。"
        },
        {
          "score": 2,
          "criteria": "公式正確但30²算錯，或只給900並能清楚說明平方規律。"
        },
        {
          "score": 1,
          "criteria": "只辨認平方數但未寫通項或未完成第30項。"
        },
        {
          "score": 0,
          "criteria": "公式與答案均不符合已知項。"
        }
      ],
      "partialCreditRules": [
        "公式n²為核心；若公式正確而算術錯，仍可得2分。"
      ],
      "followThroughPolicy": "若把30²算錯，後續沒有其他步驟，依公式正確保留2分。",
      "unitAndNotationRules": "無單位；n須為正整數。",
      "answerOnlyPolicy": "只答900但無公式，最多1分。",
      "commonErrors": [
        "寫a_n=(n+1)²造成整體錯位。",
        "把30²算成60。"
      ],
      "figureDrawingSpecRef": null,
      "independentReview": {
        "derivedResult": "a_n=n²，a_30=900。",
        "ambiguity": "題目明示平方排列，無規則多義性。",
        "unitBoundaryCheck": "無單位；n須為正整數。",
        "decision": "pass",
        "reviewNote": "獨立依題目條件重新推導，得到「a_n=n²，a_30=900。」。評分規準逐分對應本題必要步驟，並已檢查錯誤追隨與只寫答案的處理。"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "83e97681d95abbb38b24ac7bbe1e1704935aecdd6db1821f1713019b98a0c06d"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u14-s001-v001",
      "unitId": "u14",
      "skillId": "sequence-pattern",
      "contentSha256": "04cb91ef7aee916ac03b4f8956ed527b7c49bc0671969a3a55e9696fd87429f3",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "相鄰差為7-4=3、10-7=3、13-10=3；因此下一項為13+3=16。",
      "derivedAnswer": "16",
      "storedAnswer": "16",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「16」符合。其餘三項各自違反：14只增加1，與前面固定增加3不符。；15只增加2，與公差3不符。；17增加4，破壞相鄰差。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列規律」講義中定義；本題目標為「求下一項」。",
        "unitConflict": "題目明示依相同規律；答案為精確整數，無單位與四捨五入問題。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「16」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：題目明示依相同規律；答案為精確整數，無單位與四捨五入問題。",
        "alternateReading": "最可能的誤讀是「只看最後兩項附近的數，沒有維持固定差。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：只需檢查固定相鄰差並做一次加法。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「數列 4，7，10，13，… 依相同規律排列，下一項是多少？」獨立重算為：相鄰差為7-4=3、10-7=3、13-10=3；因此下一項為13+3=16。 四選項逐項核對後唯一正解為「16」；邊界檢查：題目明示依相同規律；答案為精確整數，無單位與四捨五入問題。",
      "reviewContentSha256": "48c00d265ef9ff6231ccdf1e0aa4bdee4b4091e56027acd8d3a6fef569db3e70"
    },
    {
      "questionId": "u14-s001-v002",
      "unitId": "u14",
      "skillId": "sequence-pattern",
      "contentSha256": "68d85f2ed260331a3a70ebe9240a169eaacb7b89d98fe6d3b9481bd50e1ff112",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "層數依序為2、4、8、16、32，所以第5次完成後有32層。",
      "derivedAnswer": "32",
      "storedAnswer": "32",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回後只有「32」成立；其他三項分別因：24把後兩次錯當各加8。；16是第4次。；10把每次乘2誤作加2。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列規律」講義中定義；本題目標為「求下一項」。",
        "unitConflict": "各已知項非0，相鄰比有定義；不使用等比級數。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「32」，沒有近似取整導致第二答案。",
        "domainBoundary": "第1次後層數已明示，無起始偏移。；項次、間隔、正負號與會考範圍均已逐項核對。",
        "alternateReading": "題幹明確要求「把倍增規律延伸到指定次數」，沒有第二種合理所求。"
      },
      "difficultyReason": "基礎：連結操作次數與倍增項次。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "languageCheck": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "u14-s001-v002 中央修訂後獨立重算：層數依序為2、4、8、16、32，所以第5次完成後有32層。 四個選項逐項核對，唯一正解為「32」；其餘選項排除理由為：24把後兩次錯當各加8。；16是第4次。；10把每次乘2誤作加2。",
      "reviewContentSha256": "76be8b718afcd1710ca108d7733e6d3ca7e013946401d94d3e01e83c37cb0174"
    },
    {
      "questionId": "u14-s001-v003",
      "unitId": "u14",
      "skillId": "sequence-pattern",
      "contentSha256": "6d9531bc5689fc370a5ead30423d6fd7fbad5c517e1de0e7524f2cc22fd538c0",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "將項數與項值配對：1→1²、2→2²、3→3²、4→4²，因此第5項為5²=25。",
      "derivedAnswer": "25",
      "storedAnswer": "25",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「25」符合。其餘三項各自違反：20是把前一項加4，未注意差值逐次增加。；24是把16加8，沒有對應平方規律。；32是把16乘2，只符合最後一步猜測。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列規律」講義中定義；本題目標為「求第5項」。",
        "unitConflict": "規律由項次平方明確指定於解讀；答案精確。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「25」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：規律由項次平方明確指定於解讀；答案精確。",
        "alternateReading": "最可能的誤讀是「把最後一次差7當成固定差。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：熟悉前五個平方數並對應項次。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「數列 1，4，9，16，… 的下一項是多少？」獨立重算為：將項數與項值配對：1→1²、2→2²、3→3²、4→4²，因此第5項為5²=25。 四選項逐項核對後唯一正解為「25」；邊界檢查：規律由項次平方明確指定於解讀；答案精確。",
      "reviewContentSha256": "29731dfec22bed37aa9a2b96479c92fb63feb0a54cf57d463a4fb570b2ee892e"
    },
    {
      "questionId": "u14-s001-v004",
      "unitId": "u14",
      "skillId": "sequence-pattern",
      "contentSha256": "8f332b128f07c55f753265d41d68439c26043ffa9a5ed17013a31698a4b40c2e",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "先算差：3、5、7、9，這些差每次增加2；下一差是11，故下一項27+11=38。",
      "derivedAnswer": "38",
      "storedAnswer": "38",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「38」符合。其餘三項各自違反：34是沿用最初差7或錯讀差值。；36是沿用差9，忽略差值本身增加2。；40是下一次加13，多跳一個奇數差。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列規律」講義中定義；本題目標為「求下一項」。",
        "unitConflict": "差值規律由完整四段一致支持；不把有限項宣稱為唯一一般規則，只依題目所示規律延伸。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「38」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：差值規律由完整四段一致支持；不把有限項宣稱為唯一一般規則，只依題目所示規律延伸。",
        "alternateReading": "最可能的誤讀是「只看原數列增加，未分析差值的規律。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：需要建立相鄰差數列並再延伸一次。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「數列 3，6，11，18，27，… 的下一項是多少？」獨立重算為：先算差：3、5、7、9，這些差每次增加2；下一差是11，故下一項27+11=38。 四選項逐項核對後唯一正解為「38」；邊界檢查：差值規律由完整四段一致支持；不把有限項宣稱為唯一一般規則，只依題目所示規律延伸。",
      "reviewContentSha256": "59235707efb81f0a3c7c3ef2754440bedd4381f9e47d08bf31f66170dfc932ea"
    },
    {
      "questionId": "u14-s001-v005",
      "unitId": "u14",
      "skillId": "sequence-pattern",
      "contentSha256": "787f89c5a4b6273500ab8bad7b768992fbf55736a46efca64d64cb052df90621",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "第1、3項都是2，第2、4項都是-2；奇數位置取2。15為奇數，故a_15=2。",
      "derivedAnswer": "2",
      "storedAnswer": "2",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「2」符合。其餘三項各自違反：-2屬於偶數項。；0不是此交錯規律中的項。；15是項次，不是項值。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列規律」講義中定義；本題目標為「求第15項」。",
        "unitConflict": "項次15為正整數；符號交錯明確，沒有相鄰比除以0問題。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「2」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：項次15為正整數；符號交錯明確，沒有相鄰比除以0問題。",
        "alternateReading": "最可能的誤讀是「把第15項的「15」誤當答案，或忽略交錯。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：需先分離兩個子數列，再用項次奇偶判斷。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「數列 2，-2，2，-2，… 依交錯規律排列，第 15 項是多少？」獨立重算為：第1、3項都是2，第2、4項都是-2；奇數位置取2。15為奇數，故a_15=2。 四選項逐項核對後唯一正解為「2」；邊界檢查：項次15為正整數；符號交錯明確，沒有相鄰比除以0問題。",
      "reviewContentSha256": "c559f3bbb8813765b40607af26c0435268a4b7ee7ba4cf6bfaf5d6e626185d14"
    },
    {
      "questionId": "u14-s001-v006",
      "unitId": "u14",
      "skillId": "sequence-pattern",
      "contentSha256": "f49dbd0b60fee79f613367791a0b4a6746d622323b4ed4978823d505dfadfb17",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "前四個差為1、2、3、4，下一個差應為5，所以第六項為11+5=16。",
      "derivedAnswer": "16",
      "storedAnswer": "16",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回後只有「16」成立；其他三項分別因：14仍加3。；15重複加4。；17把下一差看成6。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列規律」講義中定義；本題目標為「求下一項」。",
        "unitConflict": "差值序列為連續正整數；答案為精確值。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「16」，沒有近似取整導致第二答案。",
        "domainBoundary": "差分規律已明示。；項次、間隔、正負號與會考範圍均已逐項核對。",
        "alternateReading": "題幹明確要求「利用差分規律求下一項」，沒有第二種合理所求。"
      },
      "difficultyReason": "標準：由差分規律求下一項。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "languageCheck": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "u14-s001-v006 中央修訂後獨立重算：前四個差為1、2、3、4，下一個差應為5，所以第六項為11+5=16。 四個選項逐項核對，唯一正解為「16」；其餘選項排除理由為：14仍加3。；15重複加4。；17把下一差看成6。",
      "reviewContentSha256": "a8ca1a1cf443315e770a7ccedffd690073be49dbc616f3e3ee91df85495d1a2e"
    },
    {
      "questionId": "u14-s001-v007",
      "unitId": "u14",
      "skillId": "sequence-pattern",
      "contentSha256": "0c43976a77f9314d820edcf6bf6e12d7bd4aa394cc1c0d3d2ea45c78ab92b1f0",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "第6項=a_1+(1+3+5+7+9)=5+25=30。也可逐項得5、6、9、14、21、30。",
      "derivedAnswer": "30",
      "storedAnswer": "30",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「30」符合。其餘三項各自違反：21只是第5項，少做一次變化。；25是只算增量和，忘記首項5。；35是多加入下一個奇數11。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列規律」講義中定義；本題目標為「求第6項」。",
        "unitConflict": "增加次數為5而非6；所有數值為整數。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「30」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：增加次數為5而非6；所有數值為整數。",
        "alternateReading": "最可能的誤讀是「把第6項誤認為要加6個奇數。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：同時考查步數n-1與奇數增量累積。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某數列首項為 5，之後依序加上 1、3、5、7、… 等連續奇數。此數列第 6 項是多少？」獨立重算為：第6項=a_1+(1+3+5+7+9)=5+25=30。也可逐項得5、6、9、14、21、30。 四選項逐項核對後唯一正解為「30」；邊界檢查：增加次數為5而非6；所有數值為整數。",
      "reviewContentSha256": "dceb32b286ba92e42e2b084a583e6ba288a7a602c3cf49d4fc83e798c20e3e4c"
    },
    {
      "questionId": "u14-s001-v008",
      "unitId": "u14",
      "skillId": "sequence-pattern",
      "contentSha256": "b4dcebef1fbe3aa9f7509bed20c294453aa8afa0333e1585497002727957e395",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "依規則a_7=a_6+a_5=8+5=13。前面2=1+1、3=1+2、5=2+3、8=3+5皆一致。",
      "derivedAnswer": "13",
      "storedAnswer": "13",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「13」符合。其餘三項各自違反：10是把第6項8加第3項2。；11是把8加3，取錯前兩項。；16是把8加自己，誤作倍增。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列規律」講義中定義；本題目標為「求第7項」。",
        "unitConflict": "規則已明示，不涉及唯一性猜測。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「13」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：規則已明示，不涉及唯一性猜測。",
        "alternateReading": "最可能的誤讀是「把「前兩項」誤解成最前面的兩項。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：規律不是固定差或固定比，需正確辨認遞推位置。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「數列 1，1，2，3，5，8，… 中，每一項（自第 3 項起）是前兩項的和。第 7 項是多少？」獨立重算為：依規則a_7=a_6+a_5=8+5=13。前面2=1+1、3=1+2、5=2+3、8=3+5皆一致。 四選項逐項核對後唯一正解為「13」；邊界檢查：規則已明示，不涉及唯一性猜測。",
      "reviewContentSha256": "f90c6e09f30e3b62f182c7a751cf51a2f3324f32239459281db215fb8228bade"
    },
    {
      "questionId": "u14-s001-v009",
      "unitId": "u14",
      "skillId": "sequence-pattern",
      "contentSha256": "8aab2b5fd62631839e63d814d5803339e1abad78ff0dcd19ed900d1c891aeb0b",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "題目已給通項a_n=n²-n，故a_8=8²-8=64-8=56；代n=1得0也與首項吻合。",
      "derivedAnswer": "56",
      "storedAnswer": "56",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「56」符合。其餘三項各自違反：48是算8×6，未依公式。；60是64-4，減錯項數。；64只算8²，漏減8。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列規律」講義中定義；本題目標為「求a_8」。",
        "unitConflict": "n=8為正整數；平方先於減法，無負號歧義。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「56」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：n=8為正整數；平方先於減法，無負號歧義。",
        "alternateReading": "最可能的誤讀是「忽略公式中的-n或運算順序。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：需正確處理含平方與減法的通項並做首項合理性檢查。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「數列 0，2，6，12，20，… 的第 n 項可寫成 n²-n。第 8 項是多少？」獨立重算為：題目已給通項a_n=n²-n，故a_8=8²-8=64-8=56；代n=1得0也與首項吻合。 四選項逐項核對後唯一正解為「56」；邊界檢查：n=8為正整數；平方先於減法，無負號歧義。",
      "reviewContentSha256": "fd894c87eb563ce8459d314a43ebf460de2368782d3101263742151bc3bdcc13"
    },
    {
      "questionId": "u14-s001-v010",
      "unitId": "u14",
      "skillId": "sequence-pattern",
      "contentSha256": "d66dd4e580e480c0572bb058a9aa5f3e9ecb88229d31ca0ff79ce66f4edbc0b9",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "由第1張到第12張有11次增加，每次多2點，所以3+11×2=25。圖中的排列只用來確認每階段新增2點，不可用視覺長度猜測。",
      "derivedAnswer": "25",
      "storedAnswer": "25",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「25」符合。其餘三項各自違反：23是只增加10次。；24把首項或公差處理錯。；27是增加12次，多走一步。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列規律」講義中定義；本題目標為「求第12張點數」。",
        "unitConflict": "圖不按比例，僅依可數圓點與明示增量；答案單位為個。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「25」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：圖不按比例，僅依可數圓點與明示增量；答案單位為個。",
        "alternateReading": "最可能的誤讀是「把張數12直接乘2再忽略首張。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：需把圖卡編號轉成項次並由視覺結構與文字共同建模。",
      "literacyContextNecessity": "圖卡情境不可刪除，因為圓點排列用來確認每階段新增兩點而非其他數值規律。",
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「圖卡依序排列：第 1 張有 3 個圓點，第 2 張有 5 個，第 3 張有 7 個，第 4 張有 9 個；每張都比前一張多 2 個。第 12 張有幾個圓點？」獨立重算為：由第1張到第12張有11次增加，每次多2點，所以3+11×2=25。圖中的排列只用來確認每階段新增2點，不可用視覺長度猜測。 四選項逐項核對後唯一正解為「25」；邊界檢查：圖不按比例，僅依可數圓點與明示增量；答案單位為個。",
      "reviewContentSha256": "565725ea4227195a469497e95d67e3c413b76afcf52384a258a5f207bc0f3b11"
    },
    {
      "questionId": "u14-s001-v011",
      "unitId": "u14",
      "skillId": "sequence-pattern",
      "contentSha256": "148942fdc994e5edf555e497c76f49afd690b951f7109eaff986e414e8d95a56",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "每週節省量形成等差數列：a_1=50、d=15，a_8=50+(8-1)15=155。",
      "derivedAnswer": "155",
      "storedAnswer": "155",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「155」符合。其餘三項各自違反：140是只加6次。；160把每週增量誤作約16。；170是加8次，多算一次。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列規律」講義中定義；本題目標為「第8週單次節省量」。",
        "unitConflict": "公升單位一致；不要求累加前8週。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「155」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：公升單位一致；不要求累加前8週。",
        "alternateReading": "最可能的誤讀是「把第8週與8週累積量混淆。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：要辨認題目問第8週單次節省量，而不是前8週總量。",
      "literacyContextNecessity": "節水情境提供單位與「每週比前週多」的建模條件，刪除後會失去單次量與累積量的判讀要求。",
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一項節水計畫第 1 週節省 50 公升，之後每週比前一週多節省 15 公升。第 8 週節省多少公升？」獨立重算為：每週節省量形成等差數列：a_1=50、d=15，a_8=50+(8-1)15=155。 四選項逐項核對後唯一正解為「155」；邊界檢查：公升單位一致；不要求累加前8週。",
      "reviewContentSha256": "474843ad77a55c4b809c32b8876cf0c65735bf206e26126cc20689e29d9cd246"
    },
    {
      "questionId": "u14-s001-v012",
      "unitId": "u14",
      "skillId": "sequence-pattern",
      "contentSha256": "f15e08f672da94b5a66c384abeb2acc74337a7d4912305cb7840915038eb9def",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "編號形成首項101、公差3的數列，a_20=101+(20-1)×3=101+57=158。",
      "derivedAnswer": "158",
      "storedAnswer": "158",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「158」符合。其餘三項各自違反：157是乘加計算錯1。；160是把20次都加上3。；161是多增加一次。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列規律」講義中定義；本題目標為「第20個的編號」。",
        "unitConflict": "編號是標籤而非數量單位；規律固定增加3。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「158」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：編號是標籤而非數量單位；規律固定增加3。",
        "alternateReading": "最可能的誤讀是「直接用20×3再加101，沒有扣除首項位置。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：需分清「第20個」是位置，而158才是編號值。",
      "literacyContextNecessity": "置物櫃編號情境讓項次與項值是不同種類的數，不能刪除而不改變測量能力。",
      "prerequisiteCheck": "本技能為單元起始，僅需既有整數、分數與代數基礎。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一排置物櫃的編號依序為 101、104、107、110、…。照此規律，第 20 個置物櫃的編號是多少？」獨立重算為：編號形成首項101、公差3的數列，a_20=101+(20-1)×3=101+57=158。 四選項逐項核對後唯一正解為「158」；邊界檢查：編號是標籤而非數量單位；規律固定增加3。",
      "reviewContentSha256": "e9e78e8bbe8b9d8f43f5ce3549e373c7e85c711c791daba34579558b87ad7b6b"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u14-fig-s001-dot-cards",
      "unitId": "u14",
      "skillId": "sequence-pattern",
      "svgPath": "figures/u14/u14-fig-s001-dot-cards.svg",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "canvas": "720×220",
      "viewBox": "0 0 720 220",
      "altText": "四張圖卡依序標示第1張到第4張，卡內圓點數分別為3、5、7、9，視覺上每張增加兩個圓點。",
      "drawingSpec": {
        "canvas": "720×220",
        "viewBox": "0 0 720 220",
        "coordinates": "四卡外框約位於x=35、205、375、535；圓點半徑7。",
        "visibleLines": "黑色卡框與外框，無隱藏線。",
        "hiddenLines": "無。",
        "labels": "第1張至第4張置於各卡上方。",
        "ticksUnitsArrows": "無刻度、無單位、無箭頭。",
        "scale": "不按實際尺寸比例；僅圓點個數可計數。",
        "warning": "不得由卡片寬度推論規律，只依圓點數與題幹。",
        "mobile": "720寬畫布在手機縮放後標籤仍至少22px原始字級。",
        "answerLeakage": "只顯示前四張，不顯示第12張或公式。"
      },
      "svgAssertions": [
        "第1張",
        "第4張",
        "circle",
        "viewBox=\"0 0 720 220\""
      ],
      "figureReview": {
        "decision": "pass",
        "mobileReadability": "pass",
        "answerLeakage": "pass",
        "geometryTokenCheck": "pass",
        "manualVisualInspection": "pass",
        "reviewNote": "u14-fig-s001-dot-cards 已渲染為PNG並人工核對標籤、座標、可數元素、手機縮放可讀性與答案洩漏；所有可見元素均落在畫布安全邊界內。"
      },
      "contentSha256": "17e24d0ec2956077b3aeb6d6729078ae91ea9aa56d79d782812a27677dd32632"
    }
  ]
};
