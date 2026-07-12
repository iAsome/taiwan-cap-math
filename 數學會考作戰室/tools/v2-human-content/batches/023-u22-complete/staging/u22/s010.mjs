// Emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u22-s010-lecture-r1",
    "unitId": "u22",
    "numericUnitId": 22,
    "topicId": "u22-probability",
    "skillId": "probability-basic",
    "lockedSkillOrder": 10,
    "title": "古典機率：在所有基本結果等可能時，以有利結果數除以全部結果數。",
    "originalLockedTitle": "古典機率",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能辨認有限等可能樣本空間。",
      "能用有利結果數除以全部結果數。",
      "能處理重複標籤與聯集重疊。",
      "能檢查機率介於0與1。"
    ],
    "prerequisiteSkillIds": [
      "box-plot-compare"
    ],
    "prerequisiteBridge": "使用整數、分數、倍數與樣本空間計數能力。",
    "glossary": [
      {
        "term": "隨機試驗",
        "definition": "結果事前不確定但可能結果可描述的過程。"
      },
      {
        "term": "樣本空間",
        "definition": "所有可能基本結果的集合。"
      },
      {
        "term": "事件",
        "definition": "樣本空間中符合指定條件的結果集合。"
      },
      {
        "term": "古典機率",
        "definition": "基本結果等可能時，以計數比求事件機率。"
      }
    ],
    "notation": [
      {
        "symbol": "P(A)",
        "meaning": "事件A的機率。"
      },
      {
        "symbol": "P(A)=有利結果數/全部等可能結果數",
        "meaning": "古典機率公式。"
      },
      {
        "symbol": "0≤P(A)≤1",
        "meaning": "機率範圍。"
      }
    ],
    "conceptNarrative": [
      "公式能直接用的前提是基本結果等可能，例如公平骰的每一面、同樣卡片的每一張。",
      "事件名稱不一定等可能；袋中1紅4藍時，紅與藍雖只有兩類，機率不是各1/2。",
      "兩顆可區分骰子的基本結果是36個有序配對；點數和只是由多個配對合成的事件。",
      "「A或B」若有重疊結果，計數時要扣除重複，例如3的倍數或5的倍數。",
      "算完後用0到1範圍與餘事檢查合理性。"
    ],
    "formalDefinitions": [
      {
        "name": "有利結果",
        "statement": "符合事件條件的基本結果。"
      },
      {
        "name": "等可能",
        "statement": "每個基本結果發生機會相同。"
      }
    ],
    "formulas": [
      {
        "formula": "P(A)=n(A)/n(S)",
        "conditions": [
          "S有限且所有基本結果等可能。"
        ],
        "meaning": "S有限且所有基本結果等可能。"
      },
      {
        "formula": "n(A∪B)=n(A)+n(B)-n(A∩B)",
        "conditions": [
          "兩條件有重疊時。"
        ],
        "meaning": "兩條件有重疊時。"
      }
    ],
    "nonApplicableCases": [
      "基本結果不等可能時不能只數事件種類。",
      "分母必須是完整樣本空間。",
      "有序結果不能隨意合併。",
      "分數選項若要求最簡形式需約分，但等值分數不能同時作不同選項。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "定義試驗",
        "check": "說清楚一次試驗記錄什麼。"
      },
      {
        "step": 2,
        "instruction": "列樣本空間",
        "check": "確認完整與等可能。"
      },
      {
        "step": 3,
        "instruction": "列有利結果",
        "check": "處理端點、順序與重疊。"
      },
      {
        "step": 4,
        "instruction": "作比值",
        "check": "有利除全部。"
      },
      {
        "step": 5,
        "instruction": "驗算",
        "check": "範圍、約分與餘事。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "公平骰出偶數",
        "solutionSteps": [
          "3/6=1/2。"
        ],
        "answer": "3/6=1/2。"
      },
      {
        "exampleId": "L2",
        "prompt": "1到20選3或5的倍數",
        "solutionSteps": [
          "6+4-1=9個，機率9/20。"
        ],
        "answer": "6+4-1=9個，機率9/20。"
      },
      {
        "exampleId": "L3",
        "prompt": "兩骰和7",
        "solutionSteps": [
          "6個有序配對，機率6/36=1/6。"
        ],
        "answer": "6個有序配對，機率6/36=1/6。"
      },
      {
        "exampleId": "L4",
        "prompt": "A、A、B、C、C、C卡片抽C",
        "solutionSteps": [
          "3張C除6張=1/2。"
        ],
        "answer": "3張C除6張=1/2。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "看到兩類就各1/2",
        "why": "先看每類包含多少基本結果。",
        "correction": "先看每類包含多少基本結果。"
      },
      {
        "mistake": "把有利結果數當分母",
        "why": "分母是全部結果。",
        "correction": "分母是全部結果。"
      },
      {
        "mistake": "聯集直接相加",
        "why": "先扣交集。",
        "correction": "先扣交集。"
      },
      {
        "mistake": "把(1,6)與(6,1)合併",
        "why": "若骰子可區分，順序不同。",
        "correction": "若骰子可區分，順序不同。"
      }
    ],
    "selfCheck": [
      "基本結果真的等可能嗎？",
      "樣本空間是否完整？",
      "端點與順序是否處理？",
      "重疊是否扣除？",
      "答案是否介於0與1？"
    ],
    "summary": [
      "古典機率是等可能計數比。",
      "基本結果層級要選對。",
      "事件類別不必等可能。",
      "重疊與順序是常見失分點。"
    ],
    "connections": {
      "previous": "使用整數、分數、倍數與樣本空間計數能力。",
      "next": [
        "下一技能以1減事件機率求餘事。",
        "後續樹狀圖處理多階段試驗。"
      ]
    },
    "figureReferences": [],
    "figureAccessibility": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u22-s010-v001",
        "u22-s010-v002",
        "u22-s010-v003",
        "u22-s010-v004",
        "u22-s010-v005",
        "u22-s010-v006",
        "u22-s010-v007",
        "u22-s010-v008",
        "u22-s010-v009",
        "u22-s010-v010",
        "u22-s010-v011",
        "u22-s010-v012"
      ],
      "constructedResponseIds": [
        "u22-s010-cr001",
        "u22-s010-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "skillSpecificReviewEvidence": "逐題獨立列舉公平骰、卡片與聯集樣本；修正一題將33/100誤寫成1/3的草稿答案，確認所有分數與列舉相符。",
      "futureKnowledgeCheck": "pass; all methods use this skill or declared prerequisites only",
      "contentBoundary": "在所有基本結果等可能時，以有利結果數除以全部結果數。",
      "reviewVersion": "human-lecture-review-u22-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "a7c9c7c38f28a7c5e5e29d201806bcd22d35672c251033f43a7632e11dc1efef"
  },
  "mcQuestions": [
    {
      "questionId": "u22-s010-v001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-basic",
      "lockedSkillOrder": 10,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "擲一顆公平六面骰一次，出現偶數的機率為何？",
      "text": "擲一顆公平六面骰一次，出現偶數的機率為何？",
      "givenConditions": [],
      "target": "計算公平骰單一事件機率",
      "choices": [
        "1/3",
        "1/2",
        "2/3",
        "1/6"
      ],
      "answerIndex": 1,
      "independentSolution": "樣本點1到6等可能，偶數為2、4、6，共3個，所以機率3/6=1/2。",
      "explanation": "樣本點1到6等可能，偶數為2、4、6，共3個，所以機率3/6=1/2。",
      "steps": [
        "列6個等可能結果。",
        "數出3個有利結果。",
        "約分。"
      ],
      "optionAnalysis": [
        {
          "choice": "1/3",
          "truth": false,
          "reason": "只算到2個偶數。"
        },
        {
          "choice": "1/2",
          "truth": true,
          "reason": "正確。獨立重算：樣本點1到6等可能，偶數為2、4、6，共3個，所以機率3/6=1/2。"
        },
        {
          "choice": "2/3",
          "truth": false,
          "reason": "把奇數與偶數數量顛倒。"
        },
        {
          "choice": "1/6",
          "truth": false,
          "reason": "只算一個有利點數。"
        }
      ],
      "misconceptionTarget": "分母不用全部結果數。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "骰子公平且六面標號1至6。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：計算公平骰單一事件機率",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "計算公平骰單一事件機率",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "e9555f134c196a0350e5526fcda353d282ec799005a7e6bccc1258ec1d4e6afa"
    },
    {
      "questionId": "u22-s010-v002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-basic",
      "lockedSkillOrder": 10,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "從編號1到10的十張同樣卡片中隨機抽一張，抽到大於7的機率是多少？",
      "text": "從編號1到10的十張同樣卡片中隨機抽一張，抽到大於7的機率是多少？",
      "givenConditions": [],
      "target": "以卡片計數求機率",
      "choices": [
        "3/10",
        "7/10",
        "1/10",
        "3/7"
      ],
      "answerIndex": 0,
      "independentSolution": "大於7的是8、9、10，共3張；全部10張等可能，所以3/10。",
      "explanation": "大於7的是8、9、10，共3張；全部10張等可能，所以3/10。",
      "steps": [
        "列有利編號。",
        "有利3、全部10。"
      ],
      "optionAnalysis": [
        {
          "choice": "3/10",
          "truth": true,
          "reason": "正確。獨立重算：大於7的是8、9、10，共3張；全部10張等可能，所以3/10。"
        },
        {
          "choice": "7/10",
          "truth": false,
          "reason": "把不大於7算成有利。"
        },
        {
          "choice": "1/10",
          "truth": false,
          "reason": "只算10。"
        },
        {
          "choice": "3/7",
          "truth": false,
          "reason": "分母錯用不利結果數。"
        }
      ],
      "misconceptionTarget": "把條件「大於」讀成「大於等於」。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "卡片材質與抽法使每張等可能。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：以卡片計數求機率",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "以卡片計數求機率",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "40e112f0d4a1d83576eb9e83af7978de2865524141059d1e2e4221df73c7db1d"
    },
    {
      "questionId": "u22-s010-v003",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-basic",
      "lockedSkillOrder": 10,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "一個等分成8格的公平轉盤，其中3格塗藍色。指針停在藍色的機率為何？",
      "text": "一個等分成8格的公平轉盤，其中3格塗藍色。指針停在藍色的機率為何？",
      "givenConditions": [],
      "target": "由等面積轉盤求機率",
      "choices": [
        "1/8",
        "5/8",
        "3/8",
        "3/5"
      ],
      "answerIndex": 2,
      "independentSolution": "8個等面積區域等可能，藍色3格，所以機率3/8。",
      "explanation": "8個等面積區域等可能，藍色3格，所以機率3/8。",
      "steps": [
        "確認等分與公平。",
        "有利3格、全部8格。"
      ],
      "optionAnalysis": [
        {
          "choice": "1/8",
          "truth": false,
          "reason": "只看一個藍格。"
        },
        {
          "choice": "5/8",
          "truth": false,
          "reason": "算到非藍色。"
        },
        {
          "choice": "3/8",
          "truth": true,
          "reason": "正確。獨立重算：8個等面積區域等可能，藍色3格，所以機率3/8。"
        },
        {
          "choice": "3/5",
          "truth": false,
          "reason": "分母錯用非藍格數。"
        }
      ],
      "misconceptionTarget": "只看顏色種類而非區域數。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "題目明定等分且公平。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：由等面積轉盤求機率",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "由等面積轉盤求機率",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "38fb51e86ae3ad96e333ffef567af0e666710f1a14e39556cba953b3af6e09a3"
    },
    {
      "questionId": "u22-s010-v004",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-basic",
      "lockedSkillOrder": 10,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "擲兩顆可區分的公平六面骰，點數和為7的機率是多少？",
      "text": "擲兩顆可區分的公平六面骰，點數和為7的機率是多少？",
      "givenConditions": [],
      "target": "計算兩骰點數和機率",
      "choices": [
        "5/36",
        "7/36",
        "1/12",
        "1/6"
      ],
      "answerIndex": 3,
      "independentSolution": "共有36個等可能有序結果。和為7的有(1,6)、(2,5)、(3,4)、(4,3)、(5,2)、(6,1)，共6個，機率6/36=1/6。",
      "explanation": "共有36個等可能有序結果。和為7的有(1,6)、(2,5)、(3,4)、(4,3)、(5,2)、(6,1)，共6個，機率6/36=1/6。",
      "steps": [
        "建立36個有序結果。",
        "列出6組和為7。",
        "約分。"
      ],
      "optionAnalysis": [
        {
          "choice": "5/36",
          "truth": false,
          "reason": "漏掉一組有序配對。"
        },
        {
          "choice": "7/36",
          "truth": false,
          "reason": "多算一組。"
        },
        {
          "choice": "1/12",
          "truth": false,
          "reason": "把6個有利結果除以72。"
        },
        {
          "choice": "1/6",
          "truth": true,
          "reason": "正確。獨立重算：共有36個等可能有序結果。和為7的有(1,6)、(2,5)、(3,4)、(4,3)、(5,2)、(6,1)，共6個，機率6/36=1/6。"
        }
      ],
      "misconceptionTarget": "把(1,6)與(6,1)視為同一結果。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "兩骰可區分且獨立公平。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：計算兩骰點數和機率",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "計算兩骰點數和機率",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "d4aa7235dc033478911d054bde5236ffd99a7f9a3bb852354eb69c0119c1b7e2"
    },
    {
      "questionId": "u22-s010-v005",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-basic",
      "lockedSkillOrder": 10,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "袋中有同樣大小的紅球4顆、白球3顆、黑球1顆，隨機抽1顆。抽到非紅球的機率為何？",
      "text": "袋中有同樣大小的紅球4顆、白球3顆、黑球1顆，隨機抽1顆。抽到非紅球的機率為何？",
      "givenConditions": [],
      "target": "計算聯合類別事件",
      "choices": [
        "5/8",
        "3/8",
        "1/2",
        "2/3"
      ],
      "answerIndex": 2,
      "independentSolution": "非紅球共有3+1=4顆，總數8顆，機率4/8=1/2。",
      "explanation": "非紅球共有3+1=4顆，總數8顆，機率4/8=1/2。",
      "steps": [
        "合併白球與黑球。",
        "有利4、全部8。",
        "約分。"
      ],
      "optionAnalysis": [
        {
          "choice": "5/8",
          "truth": false,
          "reason": "把五個結果誤判有利。"
        },
        {
          "choice": "3/8",
          "truth": false,
          "reason": "漏掉一個有利結果。"
        },
        {
          "choice": "1/2",
          "truth": true,
          "reason": "正確。獨立重算：非紅球共有3+1=4顆，總數8顆，機率4/8=1/2。"
        },
        {
          "choice": "2/3",
          "truth": false,
          "reason": "分母錯用6或分類錯誤。"
        }
      ],
      "misconceptionTarget": "非紅球只想到其中一種顏色。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "球除顏色外抽取機會相同。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：計算聯合類別事件",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "計算聯合類別事件",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "da9104f19c13d8101f3a45bab9c73ea9e92e1be5a709cc5b5c05065bfdf731f4"
    },
    {
      "questionId": "u22-s010-v006",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-basic",
      "lockedSkillOrder": 10,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "從0到9十個數字中等可能選一個，選到質數的機率為何？",
      "text": "從0到9十個數字中等可能選一個，選到質數的機率為何？",
      "givenConditions": [],
      "target": "結合數的分類與機率",
      "choices": [
        "2/5",
        "1/2",
        "3/10",
        "4/9"
      ],
      "answerIndex": 0,
      "independentSolution": "0到9中的質數為2、3、5、7，共4個；全部10個，所以4/10=2/5。",
      "explanation": "0到9中的質數為2、3、5、7，共4個；全部10個，所以4/10=2/5。",
      "steps": [
        "列出質數2、3、5、7。",
        "除以10並約分。"
      ],
      "optionAnalysis": [
        {
          "choice": "2/5",
          "truth": true,
          "reason": "正確。獨立重算：0到9中的質數為2、3、5、7，共4個；全部10個，所以4/10=2/5。"
        },
        {
          "choice": "1/2",
          "truth": false,
          "reason": "把1算成質數。"
        },
        {
          "choice": "3/10",
          "truth": false,
          "reason": "漏掉一個質數。"
        },
        {
          "choice": "4/9",
          "truth": false,
          "reason": "把0排除出樣本空間。"
        }
      ],
      "misconceptionTarget": "把1當質數或忽略0仍是樣本結果。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "每個數字0至9等可能。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：結合數的分類與機率",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "結合數的分類與機率",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "1397f2d876704ca29421dcaa80234aa9a81181aab93bd27b4a3c1b657b0bc34d"
    },
    {
      "questionId": "u22-s010-v007",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-basic",
      "lockedSkillOrder": 10,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "從1到20等可能選一個整數，選到「3的倍數或5的倍數」的機率為何？",
      "text": "從1到20等可能選一個整數，選到「3的倍數或5的倍數」的機率為何？",
      "givenConditions": [],
      "target": "計算有重疊條件的古典機率",
      "choices": [
        "10/20",
        "9/20",
        "8/20",
        "1/2"
      ],
      "answerIndex": 1,
      "independentSolution": "3的倍數有3、6、9、12、15、18共6個；5的倍數有5、10、15、20共4個；15重複一次，所以有利6+4-1=9個，機率9/20。",
      "explanation": "3的倍數有3、6、9、12、15、18共6個；5的倍數有5、10、15、20共4個；15重複一次，所以有利6+4-1=9個，機率9/20。",
      "steps": [
        "分別列兩類。",
        "扣除重複15。",
        "除以20。"
      ],
      "optionAnalysis": [
        {
          "choice": "10/20",
          "truth": false,
          "reason": "把15重複計數。"
        },
        {
          "choice": "9/20",
          "truth": true,
          "reason": "正確。獨立重算：3的倍數有3、6、9、12、15、18共6個；5的倍數有5、10、15、20共4個；15重複一次，所以有利6+4-1=9個，機率9/20。"
        },
        {
          "choice": "8/20",
          "truth": false,
          "reason": "漏掉20或18。"
        },
        {
          "choice": "1/2",
          "truth": false,
          "reason": "誤認有10個有利數。"
        }
      ],
      "misconceptionTarget": "「或」事件直接相加而未扣交集。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "整數1到20含端點且等可能。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：計算有重疊條件的古典機率",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "計算有重疊條件的古典機率",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "6f3a784650446330af043753f93826313c69828f3ba57107179b6b4cc4cc4d3e"
    },
    {
      "questionId": "u22-s010-v008",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-basic",
      "lockedSkillOrder": 10,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "一副自製卡片寫有 A、A、B、C、C、C，任抽一張。抽到字母C的機率是多少？",
      "text": "一副自製卡片寫有 A、A、B、C、C、C，任抽一張。抽到字母C的機率是多少？",
      "givenConditions": [],
      "target": "辨識重複標籤的基本結果",
      "choices": [
        "1/3",
        "3/5",
        "2/3",
        "1/2"
      ],
      "answerIndex": 3,
      "independentSolution": "共有6張實體卡片等可能，其中3張為C，故3/6=1/2。",
      "explanation": "共有6張實體卡片等可能，其中3張為C，故3/6=1/2。",
      "steps": [
        "以卡片張數作樣本點。",
        "C有3張。"
      ],
      "optionAnalysis": [
        {
          "choice": "1/3",
          "truth": false,
          "reason": "以三種字母種類為分母。"
        },
        {
          "choice": "3/5",
          "truth": false,
          "reason": "漏算總卡片一張。"
        },
        {
          "choice": "2/3",
          "truth": false,
          "reason": "把非A當成C。"
        },
        {
          "choice": "1/2",
          "truth": true,
          "reason": "正確。獨立重算：共有6張實體卡片等可能，其中3張為C，故3/6=1/2。"
        }
      ],
      "misconceptionTarget": "把不同標籤種類當成等可能結果。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "每張實體卡片同樣大小。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：辨識重複標籤的基本結果",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "辨識重複標籤的基本結果",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "44a02a86106a4a85a5798b7836074711c8edb89269e3bff5e963cc1bc151b46a"
    },
    {
      "questionId": "u22-s010-v009",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-basic",
      "lockedSkillOrder": 10,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某事件A在有限等可能樣本空間中有12個有利結果，且P(A)=3/8。樣本空間共有多少個結果？",
      "text": "某事件A在有限等可能樣本空間中有12個有利結果，且P(A)=3/8。樣本空間共有多少個結果？",
      "givenConditions": [],
      "target": "由機率反求樣本空間大小",
      "choices": [
        "32",
        "18",
        "24",
        "96"
      ],
      "answerIndex": 0,
      "independentSolution": "12/N=3/8，交叉相乘96=3N，所以N=32。",
      "explanation": "12/N=3/8，交叉相乘96=3N，所以N=32。",
      "steps": [
        "設全部結果N。",
        "列12/N=3/8。",
        "解N=32。"
      ],
      "optionAnalysis": [
        {
          "choice": "32",
          "truth": true,
          "reason": "正確。獨立重算：12/N=3/8，交叉相乘96=3N，所以N=32。"
        },
        {
          "choice": "18",
          "truth": false,
          "reason": "把12乘3/2。"
        },
        {
          "choice": "24",
          "truth": false,
          "reason": "把3/8誤看成1/2。"
        },
        {
          "choice": "96",
          "truth": false,
          "reason": "把12乘8。"
        }
      ],
      "misconceptionTarget": "分子分母比例反推錯誤。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "N為正整數且32使12/32=3/8。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：由機率反求樣本空間大小",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "由機率反求樣本空間大小",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "10cd03b3eacb29ff8c2c5c204f8caa46698f3e0f7aa268263a5f5628fdd3038b"
    },
    {
      "questionId": "u22-s010-v010",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-basic",
      "lockedSkillOrder": 10,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "抽獎箱有50張同樣票，其中8張中獎。每張票只抽一次且隨機。單次中獎機率為何？",
      "text": "抽獎箱有50張同樣票，其中8張中獎。每張票只抽一次且隨機。單次中獎機率為何？",
      "givenConditions": [],
      "target": "在抽獎情境求單次機率",
      "choices": [
        "8/42",
        "4/25",
        "1/8",
        "42/50"
      ],
      "answerIndex": 1,
      "independentSolution": "中獎票8張、總票50張，所以8/50=4/25。",
      "explanation": "中獎票8張、總票50張，所以8/50=4/25。",
      "steps": [
        "有利8。",
        "全部50。",
        "約分。"
      ],
      "optionAnalysis": [
        {
          "choice": "8/42",
          "truth": false,
          "reason": "把未中獎張數作分母。"
        },
        {
          "choice": "4/25",
          "truth": true,
          "reason": "正確。獨立重算：中獎票8張、總票50張，所以8/50=4/25。"
        },
        {
          "choice": "1/8",
          "truth": false,
          "reason": "把中獎票數當分母。"
        },
        {
          "choice": "42/50",
          "truth": false,
          "reason": "算成未中獎機率。"
        }
      ],
      "misconceptionTarget": "把未中獎數當樣本空間。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "estimatedTimeSec": 180,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "僅討論第一次抽取，尚無不放回影響。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：在抽獎情境求單次機率",
      "literacyContextNecessity": "抽獎規則的公平性需先由中獎票占比量化。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "在抽獎情境求單次機率",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "389c89fe804948b946ca7028f493c9e99ec347864f76d437e36eabe22b45c6ae"
    },
    {
      "questionId": "u22-s010-v011",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-basic",
      "lockedSkillOrder": 10,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某公車到站時間在整點後0到9分鐘十個整數分鐘中等可能。等候不超過3分鐘的機率為何？",
      "text": "某公車到站時間在整點後0到9分鐘十個整數分鐘中等可能。等候不超過3分鐘的機率為何？",
      "givenConditions": [],
      "target": "處理含0的離散情境",
      "choices": [
        "3/10",
        "4/9",
        "3/5",
        "2/5"
      ],
      "answerIndex": 3,
      "independentSolution": "不超過3包含0、1、2、3，共4個結果；全部10個，所以4/10=2/5。",
      "explanation": "不超過3包含0、1、2、3，共4個結果；全部10個，所以4/10=2/5。",
      "steps": [
        "列出含0的有利結果。",
        "除以10並約分。"
      ],
      "optionAnalysis": [
        {
          "choice": "3/10",
          "truth": false,
          "reason": "漏算0分鐘。"
        },
        {
          "choice": "4/9",
          "truth": false,
          "reason": "把0排除且分母用9。"
        },
        {
          "choice": "3/5",
          "truth": false,
          "reason": "把4到9分鐘算有利。"
        },
        {
          "choice": "2/5",
          "truth": true,
          "reason": "正確。獨立重算：不超過3包含0、1、2、3，共4個結果；全部10個，所以4/10=2/5。"
        }
      ],
      "misconceptionTarget": "忽略0也是可能的等待時間。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "estimatedTimeSec": 180,
      "unitCheck": "時間以整數分鐘表示，機率無單位。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "題目明定整數分鐘且十個值等可能。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：處理含0的離散情境",
      "literacyContextNecessity": "班次資訊轉成等待風險，端點0與3都具實際意義。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "處理含0的離散情境",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "e60d184e1cbdc5e76e44820fe8fd7dd7ec493ad794881d48cd6433e4a0e9d139"
    },
    {
      "questionId": "u22-s010-v012",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-basic",
      "lockedSkillOrder": 10,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "品質抽查從編號1到100的產品中等可能抽1件。若編號為4或6的倍數就進一步檢驗，抽中的機率是多少？",
      "text": "品質抽查從編號1到100的產品中等可能抽1件。若編號為4或6的倍數就進一步檢驗，抽中的機率是多少？",
      "givenConditions": [],
      "target": "在編號規則中計算聯集機率",
      "choices": [
        "1/3",
        "41/100",
        "33/100",
        "25/100"
      ],
      "answerIndex": 2,
      "independentSolution": "4的倍數25個，6的倍數16個，兩者共同的12倍數8個，所以有利25+16-8=33個，機率33/100。",
      "explanation": "4的倍數25個，6的倍數16個，兩者共同的12倍數8個，所以有利25+16-8=33個，機率33/100。",
      "steps": [
        "數4倍數25。",
        "數6倍數16。",
        "扣12倍數8。",
        "得33/100。"
      ],
      "optionAnalysis": [
        {
          "choice": "1/3",
          "truth": false,
          "reason": "33/100接近但不等於1/3。"
        },
        {
          "choice": "41/100",
          "truth": false,
          "reason": "把4與6的倍數直接相加，未扣重複。"
        },
        {
          "choice": "33/100",
          "truth": true,
          "reason": "正確。獨立重算：4的倍數25個，6的倍數16個，兩者共同的12倍數8個，所以有利25+16-8=33個，機率33/100。"
        },
        {
          "choice": "25/100",
          "truth": false,
          "reason": "只計4的倍數。"
        }
      ],
      "misconceptionTarget": "容斥計數後又錯誤約分。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "estimatedTimeSec": 180,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "100÷6取整為16，100÷12取整為8。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：在編號規則中計算聯集機率",
      "literacyContextNecessity": "抽查規則直接決定工作量，聯集重疊不能重複計件。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "在編號規則中計算聯集機率",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "d6f0d2159bddd04848e3b18587062961616857d9530d0f6148c8de2a53738f40"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u22-s010-cr001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-basic",
      "lockedSkillOrder": 10,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "一顆公平六面骰擲一次。求點數為質數的機率，並列出樣本空間與有利結果。",
      "requiredWork": [
        "列出1到6。",
        "辨認質數2、3、5。",
        "以有利結果數除以總結果數。"
      ],
      "standardSolution": [
        "樣本空間S={1,2,3,4,5,6}，共有6個等可能結果。",
        "質數事件A={2,3,5}，有3個結果。",
        "P(A)=3/6=1/2。"
      ],
      "reasoningSteps": [
        "樣本空間S={1,2,3,4,5,6}，共有6個等可能結果。",
        "質數事件A={2,3,5}，有3個結果。",
        "P(A)=3/6=1/2。"
      ],
      "alternativeMethods": [
        "可用補事件排除1、4、6，但仍須說明公平骰使六結果等可能。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "樣本空間、有利集合與1/2全部正確，並提到等可能。"
        },
        {
          "score": 2,
          "criteria": "答案1/2正確但集合或等可能說明缺一項。"
        },
        {
          "score": 1,
          "criteria": "能列出2、3、5並建立3/6。"
        },
        {
          "score": 0,
          "criteria": "把1當質數或分母不用6。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "若答案未約分但寫3/6，視為正確；只有答案1/2且無過程，依答案-only規則最高1分。",
      "unitNotationRules": "無特殊單位；分數須可辨識且機率介於0與1。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "把1列為質數。",
        "只列有利結果不列全部結果。",
        "以點數和當分母。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "independentReview": {
        "recomputedResult": "樣本空間S={1,2,3,4,5,6}，共有6個等可能結果。；質數事件A={2,3,5}，有3個結果。；P(A)=3/6=1/2。",
        "alternativeMethodCheck": "可用補事件排除1、4、6，但仍須說明公平骰使六結果等可能。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "e060eb591e5866495d79342f9b5b70e174b2d62d9bcc36f25864ba3966da60e5"
    },
    {
      "questionId": "u22-s010-cr002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-basic",
      "lockedSkillOrder": 10,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "袋中有4顆紅球、3顆藍球、1顆綠球，球除顏色外相同。隨機取一球。求「不是藍球」的機率，並說明為何可直接用顆數計算。",
      "requiredWork": [
        "算總球數。",
        "數出非藍球。",
        "說明每顆球等可能被抽到。"
      ],
      "standardSolution": [
        "總球數=4+3+1=8。",
        "非藍球共有紅4加綠1，共5顆。",
        "每顆球被抽到機會相同，所以機率=5/8。"
      ],
      "reasoningSteps": [
        "總球數=4+3+1=8。",
        "非藍球共有紅4加綠1，共5顆。",
        "每顆球被抽到機會相同，所以機率=5/8。"
      ],
      "alternativeMethods": [
        "可用餘事：1-3/8=5/8。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "總數8、非藍5、機率5/8與等可能理由全部完整。"
        },
        {
          "score": 2,
          "criteria": "5/8正確但等可能或計數說明缺一項。"
        },
        {
          "score": 1,
          "criteria": "能寫出5/8或1-3/8。"
        },
        {
          "score": 0,
          "criteria": "以顏色種類2/3計算。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "使用餘事法可獲同等分數；若只寫5/8無說明，最高1分。",
      "unitNotationRules": "球數是計數，機率無單位。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "把三種顏色視為各1/3。",
        "總數漏掉綠球。",
        "把不是藍寫成只有紅。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "independentReview": {
        "recomputedResult": "總球數=4+3+1=8。；非藍球共有紅4加綠1，共5顆。；每顆球被抽到機會相同，所以機率=5/8。",
        "alternativeMethodCheck": "可用餘事：1-3/8=5/8。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "8c44d5cc3876cf7c0f930f73b05a70a8e7b2f4825f856999246fe0cc0634ef47"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u22-s010-v001",
      "unitId": "u22",
      "skillId": "probability-basic",
      "contentSha256": "e9555f134c196a0350e5526fcda353d282ec799005a7e6bccc1258ec1d4e6afa",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "樣本點1到6等可能，偶數為2、4、6，共3個，所以機率3/6=1/2。",
      "derivedAnswer": "1/2",
      "storedAnswer": "1/2",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「1/2」；其餘選項逐項排除：「1/3」：只算到2個偶數。；「2/3」：把奇數與偶數數量顛倒。；「1/6」：只算一個有利點數。",
        "undefinedSymbol": "題幹術語均已在「古典機率」講義定義；實際目標為「計算公平骰單一事件機率」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "骰子公平且六面標號1至6。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「分母不用全部結果數。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：計算公平骰單一事件機率",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「擲一顆公平六面骰一次，出現偶數的機率為何？」；獨立解法「樣本點1到6等可能，偶數為2、4、6，共3個，所以機率3/6=1/2。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s010-v002",
      "unitId": "u22",
      "skillId": "probability-basic",
      "contentSha256": "40e112f0d4a1d83576eb9e83af7978de2865524141059d1e2e4221df73c7db1d",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "大於7的是8、9、10，共3張；全部10張等可能，所以3/10。",
      "derivedAnswer": "3/10",
      "storedAnswer": "3/10",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「3/10」；其餘選項逐項排除：「7/10」：把不大於7算成有利。；「1/10」：只算10。；「3/7」：分母錯用不利結果數。",
        "undefinedSymbol": "題幹術語均已在「古典機率」講義定義；實際目標為「以卡片計數求機率」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "卡片材質與抽法使每張等可能。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把條件「大於」讀成「大於等於」。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：以卡片計數求機率",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「從編號1到10的十張同樣卡片中隨機抽一張，抽到大於7的機率是多少？」；獨立解法「大於7的是8、9、10，共3張；全部10張等可能，所以3/10。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s010-v003",
      "unitId": "u22",
      "skillId": "probability-basic",
      "contentSha256": "38fb51e86ae3ad96e333ffef567af0e666710f1a14e39556cba953b3af6e09a3",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "8個等面積區域等可能，藍色3格，所以機率3/8。",
      "derivedAnswer": "3/8",
      "storedAnswer": "3/8",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「3/8」；其餘選項逐項排除：「1/8」：只看一個藍格。；「5/8」：算到非藍色。；「3/5」：分母錯用非藍格數。",
        "undefinedSymbol": "題幹術語均已在「古典機率」講義定義；實際目標為「由等面積轉盤求機率」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "題目明定等分且公平。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「只看顏色種類而非區域數。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：由等面積轉盤求機率",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一個等分成8格的公平轉盤，其中3格塗藍色。指針停在藍色的機率為何？」；獨立解法「8個等面積區域等可能，藍色3格，所以機率3/8。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s010-v004",
      "unitId": "u22",
      "skillId": "probability-basic",
      "contentSha256": "d4aa7235dc033478911d054bde5236ffd99a7f9a3bb852354eb69c0119c1b7e2",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "共有36個等可能有序結果。和為7的有(1,6)、(2,5)、(3,4)、(4,3)、(5,2)、(6,1)，共6個，機率6/36=1/6。",
      "derivedAnswer": "1/6",
      "storedAnswer": "1/6",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「1/6」；其餘選項逐項排除：「5/36」：漏掉一組有序配對。；「7/36」：多算一組。；「1/12」：把6個有利結果除以72。",
        "undefinedSymbol": "題幹術語均已在「古典機率」講義定義；實際目標為「計算兩骰點數和機率」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "兩骰可區分且獨立公平。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把(1,6)與(6,1)視為同一結果。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：計算兩骰點數和機率",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「擲兩顆可區分的公平六面骰，點數和為7的機率是多少？」；獨立解法「共有36個等可能有序結果。和為7的有(1,6)、(2,5)、(3,4)、(4,3)、(5,2)、(6,1)，共6個，機率6/36=1/6。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s010-v005",
      "unitId": "u22",
      "skillId": "probability-basic",
      "contentSha256": "da9104f19c13d8101f3a45bab9c73ea9e92e1be5a709cc5b5c05065bfdf731f4",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "非紅球共有3+1=4顆，總數8顆，機率4/8=1/2。",
      "derivedAnswer": "1/2",
      "storedAnswer": "1/2",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「1/2」；其餘選項逐項排除：「5/8」：把五個結果誤判有利。；「3/8」：漏掉一個有利結果。；「2/3」：分母錯用6或分類錯誤。",
        "undefinedSymbol": "題幹術語均已在「古典機率」講義定義；實際目標為「計算聯合類別事件」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "球除顏色外抽取機會相同。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「非紅球只想到其中一種顏色。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：計算聯合類別事件",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「袋中有同樣大小的紅球4顆、白球3顆、黑球1顆，隨機抽1顆。抽到非紅球的機率為何？」；獨立解法「非紅球共有3+1=4顆，總數8顆，機率4/8=1/2。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s010-v006",
      "unitId": "u22",
      "skillId": "probability-basic",
      "contentSha256": "1397f2d876704ca29421dcaa80234aa9a81181aab93bd27b4a3c1b657b0bc34d",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "0到9中的質數為2、3、5、7，共4個；全部10個，所以4/10=2/5。",
      "derivedAnswer": "2/5",
      "storedAnswer": "2/5",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「2/5」；其餘選項逐項排除：「1/2」：把1算成質數。；「3/10」：漏掉一個質數。；「4/9」：把0排除出樣本空間。",
        "undefinedSymbol": "題幹術語均已在「古典機率」講義定義；實際目標為「結合數的分類與機率」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "每個數字0至9等可能。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把1當質數或忽略0仍是樣本結果。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：結合數的分類與機率",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「從0到9十個數字中等可能選一個，選到質數的機率為何？」；獨立解法「0到9中的質數為2、3、5、7，共4個；全部10個，所以4/10=2/5。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s010-v007",
      "unitId": "u22",
      "skillId": "probability-basic",
      "contentSha256": "6f3a784650446330af043753f93826313c69828f3ba57107179b6b4cc4cc4d3e",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "3的倍數有3、6、9、12、15、18共6個；5的倍數有5、10、15、20共4個；15重複一次，所以有利6+4-1=9個，機率9/20。",
      "derivedAnswer": "9/20",
      "storedAnswer": "9/20",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「9/20」；其餘選項逐項排除：「10/20」：把15重複計數。；「8/20」：漏掉20或18。；「1/2」：誤認有10個有利數。",
        "undefinedSymbol": "題幹術語均已在「古典機率」講義定義；實際目標為「計算有重疊條件的古典機率」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "整數1到20含端點且等可能。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「「或」事件直接相加而未扣交集。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：計算有重疊條件的古典機率",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「從1到20等可能選一個整數，選到「3的倍數或5的倍數」的機率為何？」；獨立解法「3的倍數有3、6、9、12、15、18共6個；5的倍數有5、10、15、20共4個；15重複一次，所以有利6+4-1=9個，機率9/20。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s010-v008",
      "unitId": "u22",
      "skillId": "probability-basic",
      "contentSha256": "44a02a86106a4a85a5798b7836074711c8edb89269e3bff5e963cc1bc151b46a",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "共有6張實體卡片等可能，其中3張為C，故3/6=1/2。",
      "derivedAnswer": "1/2",
      "storedAnswer": "1/2",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「1/2」；其餘選項逐項排除：「1/3」：以三種字母種類為分母。；「3/5」：漏算總卡片一張。；「2/3」：把非A當成C。",
        "undefinedSymbol": "題幹術語均已在「古典機率」講義定義；實際目標為「辨識重複標籤的基本結果」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "每張實體卡片同樣大小。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把不同標籤種類當成等可能結果。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：辨識重複標籤的基本結果",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一副自製卡片寫有 A、A、B、C、C、C，任抽一張。抽到字母C的機率是多少？」；獨立解法「共有6張實體卡片等可能，其中3張為C，故3/6=1/2。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s010-v009",
      "unitId": "u22",
      "skillId": "probability-basic",
      "contentSha256": "10cd03b3eacb29ff8c2c5c204f8caa46698f3e0f7aa268263a5f5628fdd3038b",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "12/N=3/8，交叉相乘96=3N，所以N=32。",
      "derivedAnswer": "32",
      "storedAnswer": "32",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「32」；其餘選項逐項排除：「18」：把12乘3/2。；「24」：把3/8誤看成1/2。；「96」：把12乘8。",
        "undefinedSymbol": "題幹術語均已在「古典機率」講義定義；實際目標為「由機率反求樣本空間大小」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "N為正整數且32使12/32=3/8。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「分子分母比例反推錯誤。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：由機率反求樣本空間大小",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某事件A在有限等可能樣本空間中有12個有利結果，且P(A)=3/8。樣本空間共有多少個結果？」；獨立解法「12/N=3/8，交叉相乘96=3N，所以N=32。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s010-v010",
      "unitId": "u22",
      "skillId": "probability-basic",
      "contentSha256": "389c89fe804948b946ca7028f493c9e99ec347864f76d437e36eabe22b45c6ae",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "中獎票8張、總票50張，所以8/50=4/25。",
      "derivedAnswer": "4/25",
      "storedAnswer": "4/25",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「4/25」；其餘選項逐項排除：「8/42」：把未中獎張數作分母。；「1/8」：把中獎票數當分母。；「42/50」：算成未中獎機率。",
        "undefinedSymbol": "題幹術語均已在「古典機率」講義定義；實際目標為「在抽獎情境求單次機率」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "僅討論第一次抽取，尚無不放回影響。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把未中獎數當樣本空間。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：在抽獎情境求單次機率",
      "literacyContextNecessity": "抽獎規則的公平性需先由中獎票占比量化。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「抽獎箱有50張同樣票，其中8張中獎。每張票只抽一次且隨機。單次中獎機率為何？」；獨立解法「中獎票8張、總票50張，所以8/50=4/25。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s010-v011",
      "unitId": "u22",
      "skillId": "probability-basic",
      "contentSha256": "e60d184e1cbdc5e76e44820fe8fd7dd7ec493ad794881d48cd6433e4a0e9d139",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "不超過3包含0、1、2、3，共4個結果；全部10個，所以4/10=2/5。",
      "derivedAnswer": "2/5",
      "storedAnswer": "2/5",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「2/5」；其餘選項逐項排除：「3/10」：漏算0分鐘。；「4/9」：把0排除且分母用9。；「3/5」：把4到9分鐘算有利。",
        "undefinedSymbol": "題幹術語均已在「古典機率」講義定義；實際目標為「處理含0的離散情境」。",
        "unitConflict": "時間以整數分鐘表示，機率無單位。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "題目明定整數分鐘且十個值等可能。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「忽略0也是可能的等待時間。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：處理含0的離散情境",
      "literacyContextNecessity": "班次資訊轉成等待風險，端點0與3都具實際意義。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某公車到站時間在整點後0到9分鐘十個整數分鐘中等可能。等候不超過3分鐘的機率為何？」；獨立解法「不超過3包含0、1、2、3，共4個結果；全部10個，所以4/10=2/5。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s010-v012",
      "unitId": "u22",
      "skillId": "probability-basic",
      "contentSha256": "d6f0d2159bddd04848e3b18587062961616857d9530d0f6148c8de2a53738f40",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "4的倍數25個，6的倍數16個，兩者共同的12倍數8個，所以有利25+16-8=33個，機率33/100。",
      "derivedAnswer": "33/100",
      "storedAnswer": "33/100",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「33/100」；其餘選項逐項排除：「1/3」：33/100接近但不等於1/3。；「41/100」：把4與6的倍數直接相加，未扣重複。；「25/100」：只計4的倍數。",
        "undefinedSymbol": "題幹術語均已在「古典機率」講義定義；實際目標為「在編號規則中計算聯集機率」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "100÷6取整為16，100÷12取整為8。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「容斥計數後又錯誤約分。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：在編號規則中計算聯集機率",
      "literacyContextNecessity": "抽查規則直接決定工作量，聯集重疊不能重複計件。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「品質抽查從編號1到100的產品中等可能抽1件。若編號為4或6的倍數就進一步檢驗，抽中的機率是多少？」；獨立解法「4的倍數25個，6的倍數16個，兩者共同的12倍數8個，所以有利25+16-8=33個，機率33/100。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    }
  ],
  "drawingSpecs": []
};
