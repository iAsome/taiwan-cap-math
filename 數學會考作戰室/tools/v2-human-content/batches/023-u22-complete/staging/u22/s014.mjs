// Emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u22-s014-lecture-r1",
    "unitId": "u22",
    "numericUnitId": 22,
    "topicId": "u22-probability",
    "skillId": "probability-equally-likely",
    "lockedSkillOrder": 14,
    "title": "等可能機率：先判斷基本結果是否等可能，再決定能否直接計數。",
    "originalLockedTitle": "等可能機率",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能判斷公平骰、卡片與轉盤的基本結果是否等可能。",
      "能區分事件類別與基本結果。",
      "能找出不公平映射。",
      "能設計指定標籤等可能的機制。"
    ],
    "prerequisiteSkillIds": [
      "probability-sample-space"
    ],
    "prerequisiteBridge": "承接樣本空間的完整列舉。",
    "glossary": [
      {
        "term": "公平機制",
        "definition": "對指定基本結果給予相同機會的隨機機制。"
      },
      {
        "term": "權重",
        "definition": "某事件包含的等可能基本結果數或面積比例。"
      },
      {
        "term": "映射",
        "definition": "把底層亂數結果分配到標籤事件。"
      }
    ],
    "notation": [
      {
        "symbol": "等可能事件機率=各自對應基本結果數/全部基本結果數",
        "meaning": "底層基本結果等可能。"
      },
      {
        "symbol": "轉盤機率=扇形角度/360°",
        "meaning": "均勻轉盤。"
      }
    ],
    "conceptNarrative": [
      "公平六面骰的面等可能，但「成功=1至4」「失敗=5至6」兩事件不等可能。",
      "同樣卡片每張等可能，重複標籤會讓標籤事件機率不同。",
      "轉盤區域數相同不表示等可能；要比較面積或中心角。",
      "兩骰點數和2到12雖有11種，對應配對數不同。",
      "數位亂數映射若區間長度不同，輸出標籤就不等可能。"
    ],
    "formalDefinitions": [
      {
        "name": "基本結果等可能",
        "statement": "可直接計數的前提。"
      },
      {
        "name": "事件等可能",
        "statement": "不同事件所含總權重相同。"
      }
    ],
    "formulas": [
      {
        "formula": "P(標籤)=對應底層結果數/底層結果總數",
        "conditions": [
          "底層等可能。"
        ],
        "meaning": "底層等可能。"
      },
      {
        "formula": "P(扇形)=θ/360°",
        "conditions": [
          "指針均勻。"
        ],
        "meaning": "指針均勻。"
      }
    ],
    "nonApplicableCases": [
      "不能因只有兩類就各1/2。",
      "不能因有三個標籤就各1/3。",
      "物理機制是否公平需題目明定或實驗支持。",
      "抽樣每班同額不一定使每位學生等機會。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "找底層單位",
        "check": "面、卡片、整數或角度。"
      },
      {
        "step": 2,
        "instruction": "確認底層公平",
        "check": "題目條件。"
      },
      {
        "step": 3,
        "instruction": "數每事件權重",
        "check": "重複標籤要累加。"
      },
      {
        "step": 4,
        "instruction": "比較權重",
        "check": "相同才等可能。"
      },
      {
        "step": 5,
        "instruction": "審核宣稱",
        "check": "揭露映射與假設。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "1紅4藍同樣球",
        "solutionSteps": [
          "紅1/5、藍4/5。"
        ],
        "answer": "紅1/5、藍4/5。"
      },
      {
        "exampleId": "L2",
        "prompt": "兩骰和2與7",
        "solutionSteps": [
          "1/36對6/36。"
        ],
        "answer": "1/36對6/36。"
      },
      {
        "exampleId": "L3",
        "prompt": "轉盤60°、60°、120°、120°",
        "solutionSteps": [
          "前兩等、後兩等。"
        ],
        "answer": "前兩等、後兩等。"
      },
      {
        "exampleId": "L4",
        "prompt": "亂數0至99映射50、30、20個值",
        "solutionSteps": [
          "輸出50%、30%、20%。"
        ],
        "answer": "輸出50%、30%、20%。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把事件種類數當分母",
        "why": "分母應是底層等可能結果。",
        "correction": "分母應是底層等可能結果。"
      },
      {
        "mistake": "看到公平骰就說遊戲公平",
        "why": "映射可能偏向某事件。",
        "correction": "映射可能偏向某事件。"
      },
      {
        "mistake": "忽略區間含端點的整數個數",
        "why": "逐段計數。",
        "correction": "逐段計數。"
      },
      {
        "mistake": "每班同抽2人就說每人等機會",
        "why": "班級大小不同時機率不同。",
        "correction": "班級大小不同時機率不同。"
      }
    ],
    "selfCheck": [
      "基本結果是什麼？",
      "它們是否等可能？",
      "每個事件包含多少權重？",
      "轉盤角度或映射區間是否相同？",
      "抽樣公平針對的是班級還是個人？"
    ],
    "summary": [
      "等可能要在正確層級判斷。",
      "公平底層經不均映射可產生不等輸出。",
      "事件名稱數量不決定機率。",
      "公平宣稱應可由機制驗證。"
    ],
    "connections": {
      "previous": "承接樣本空間的完整列舉。",
      "next": [
        "下一技能計算放回與不放回的兩階段機率。"
      ]
    },
    "figureReferences": [
      "fig-u22-spinner-weighted"
    ],
    "figureAccessibility": [
      {
        "figureId": "fig-u22-spinner-weighted",
        "altText": "圓形轉盤分成60度A區、120度B區、180度C區，三區面積不同。"
      }
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u22-s014-v001",
        "u22-s014-v002",
        "u22-s014-v003",
        "u22-s014-v004",
        "u22-s014-v005",
        "u22-s014-v006",
        "u22-s014-v007",
        "u22-s014-v008",
        "u22-s014-v009",
        "u22-s014-v010",
        "u22-s014-v011",
        "u22-s014-v012"
      ],
      "constructedResponseIds": [
        "u22-s014-cr001",
        "u22-s014-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "skillSpecificReviewEvidence": "逐一核對球數、骰面配對、角度與亂數區間；所有等可能判斷均回到底層實體或整數結果。",
      "futureKnowledgeCheck": "pass; all methods use this skill or declared prerequisites only",
      "contentBoundary": "先判斷基本結果是否等可能，再決定能否直接計數。",
      "reviewVersion": "human-lecture-review-u22-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "d58989b7941e4891d6fe18c607c97931a639e1c408b9be66641536c0f67e743b"
  },
  "mcQuestions": [
    {
      "questionId": "u22-s014-v001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-equally-likely",
      "lockedSkillOrder": 14,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "公平六面骰的六個點數是否等可能？",
      "text": "公平六面骰的六個點數是否等可能？",
      "givenConditions": [],
      "target": "辨識公平骰等可能性",
      "choices": [
        "否，點數越大越難出現",
        "是，每個機率皆為1/6",
        "是，每個機率皆為1/3",
        "無法討論等可能"
      ],
      "answerIndex": 1,
      "independentSolution": "公平骰定義即各面出現機會相同，六面總機率1，所以每面1/6。",
      "explanation": "公平骰定義即各面出現機會相同，六面總機率1，所以每面1/6。",
      "steps": [
        "使用公平條件。"
      ],
      "optionAnalysis": [
        {
          "choice": "否，點數越大越難出現",
          "truth": false,
          "reason": "公平骰各面對稱。"
        },
        {
          "choice": "是，每個機率皆為1/6",
          "truth": true,
          "reason": "正確。獨立重算：公平骰定義即各面出現機會相同，六面總機率1，所以每面1/6。"
        },
        {
          "choice": "是，每個機率皆為1/3",
          "truth": false,
          "reason": "六個結果分母應為6。"
        },
        {
          "choice": "無法討論等可能",
          "truth": false,
          "reason": "題目已明定公平。"
        }
      ],
      "misconceptionTarget": "把數值大小當成機率大小。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "骰子無偏且正常滾動。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：辨識公平骰等可能性",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "辨識公平骰等可能性",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "1efdf0ac1a3770f1776d6f83bf5ca9e1f7b0e0796858ca18aa6811a7dbe29c01"
    },
    {
      "questionId": "u22-s014-v002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-equally-likely",
      "lockedSkillOrder": 14,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "轉盤有兩個區域：紅色占圓面積3/4，藍色占1/4，指針均勻落在面積上。紅、藍是否等可能？",
      "text": "轉盤有兩個區域：紅色占圓面積3/4，藍色占1/4，指針均勻落在面積上。紅、藍是否等可能？",
      "givenConditions": [],
      "target": "辨識不等面積轉盤",
      "choices": [
        "是，因只有兩種顏色",
        "是，各為1/4",
        "否，紅色機率較大",
        "否，藍色機率較大"
      ],
      "answerIndex": 2,
      "independentSolution": "均勻轉盤的機率與扇形面積成比例，紅占3/4，故較可能。",
      "explanation": "均勻轉盤的機率與扇形面積成比例，紅占3/4，故較可能。",
      "steps": [
        "比較區域面積。"
      ],
      "optionAnalysis": [
        {
          "choice": "是，因只有兩種顏色",
          "truth": false,
          "reason": "種類數相同不代表面積相同。"
        },
        {
          "choice": "是，各為1/4",
          "truth": false,
          "reason": "總和不為1。"
        },
        {
          "choice": "否，紅色機率較大",
          "truth": true,
          "reason": "正確。獨立重算：均勻轉盤的機率與扇形面積成比例，紅占3/4，故較可能。"
        },
        {
          "choice": "否，藍色機率較大",
          "truth": false,
          "reason": "面積較小者機率較小。"
        }
      ],
      "misconceptionTarget": "用顏色種類數直接平均。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "指針均勻且邊界機率忽略。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：辨識不等面積轉盤",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "辨識不等面積轉盤",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "5196facf3bfb7f5532fcba9314d6e60e41fef5db0a095dd6a2021b9bd1537808"
    },
    {
      "questionId": "u22-s014-v003",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-equally-likely",
      "lockedSkillOrder": 14,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "袋中有1顆紅球與4顆藍球，球大小相同。事件「紅」與「藍」是否等可能？",
      "text": "袋中有1顆紅球與4顆藍球，球大小相同。事件「紅」與「藍」是否等可能？",
      "givenConditions": [],
      "target": "由重複標籤判斷等可能",
      "choices": [
        "否，藍色機率4/5",
        "是，因有兩種顏色",
        "否，紅色機率4/5",
        "是，各為1/5"
      ],
      "answerIndex": 0,
      "independentSolution": "每顆球等可能，藍球4顆對應4個基本結果，所以藍機率4/5。",
      "explanation": "每顆球等可能，藍球4顆對應4個基本結果，所以藍機率4/5。",
      "steps": [
        "以實體球為等可能結果。",
        "依顏色聚合。"
      ],
      "optionAnalysis": [
        {
          "choice": "否，藍色機率4/5",
          "truth": true,
          "reason": "正確。獨立重算：每顆球等可能，藍球4顆對應4個基本結果，所以藍機率4/5。"
        },
        {
          "choice": "是，因有兩種顏色",
          "truth": false,
          "reason": "顏色類別不是等數量基本結果。"
        },
        {
          "choice": "否，紅色機率4/5",
          "truth": false,
          "reason": "數量顛倒。"
        },
        {
          "choice": "是，各為1/5",
          "truth": false,
          "reason": "兩者機率總和不為1。"
        }
      ],
      "misconceptionTarget": "把事件名稱種類當作等可能樣本點。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "球除顏色外相同且充分混合。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：由重複標籤判斷等可能",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "由重複標籤判斷等可能",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "fe7b8a5ebff875b19885f14cdb985e0d7987031e9656dbe269a21bd9607f297a"
    },
    {
      "questionId": "u22-s014-v004",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-equally-likely",
      "lockedSkillOrder": 14,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "擲兩顆公平骰，點數和為2與點數和為7是否等可能？",
      "text": "擲兩顆公平骰，點數和為2與點數和為7是否等可能？",
      "givenConditions": [],
      "target": "辨識骰子和不等可能",
      "choices": [
        "是，因兩者都是一個和",
        "否，和2較可能",
        "是，各為1/11",
        "否，和7較可能"
      ],
      "answerIndex": 3,
      "independentSolution": "和2只有1個有序配對，和7有6個，所以機率分別1/36與6/36。",
      "explanation": "和2只有1個有序配對，和7有6個，所以機率分別1/36與6/36。",
      "steps": [
        "回到36個有序配對。",
        "比較對應數量。"
      ],
      "optionAnalysis": [
        {
          "choice": "是，因兩者都是一個和",
          "truth": false,
          "reason": "和不是等可能基本結果。"
        },
        {
          "choice": "否，和2較可能",
          "truth": false,
          "reason": "和2只有(1,1)。"
        },
        {
          "choice": "是，各為1/11",
          "truth": false,
          "reason": "11種和不等可能。"
        },
        {
          "choice": "否，和7較可能",
          "truth": true,
          "reason": "正確。獨立重算：和2只有1個有序配對，和7有6個，所以機率分別1/36與6/36。"
        }
      ],
      "misconceptionTarget": "把11種可能和直接平均。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "兩骰公平且可區分。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：辨識骰子和不等可能",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "辨識骰子和不等可能",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "ab55b97136039d73331c88030c69613da952ece953251d786ac7036e34e2dcb4"
    },
    {
      "questionId": "u22-s014-v005",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-equally-likely",
      "lockedSkillOrder": 14,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "一個袋中有標號1、1、2、3四張相同卡片。抽到數字1、2、3三種標籤是否等可能？",
      "text": "一個袋中有標號1、1、2、3四張相同卡片。抽到數字1、2、3三種標籤是否等可能？",
      "givenConditions": [],
      "target": "區分基本結果與事件",
      "choices": [
        "否，1的機率是1/2",
        "是，三個數字各1/3",
        "否，3的機率是1/2",
        "是，四張卡各1/4所以三標籤也等可能"
      ],
      "answerIndex": 0,
      "independentSolution": "四張卡等可能；數字1對應兩張，所以P(1)=2/4=1/2，P(2)=P(3)=1/4。",
      "explanation": "四張卡等可能；數字1對應兩張，所以P(1)=2/4=1/2，P(2)=P(3)=1/4。",
      "steps": [
        "以卡片為基本結果。",
        "聚合同標籤。"
      ],
      "optionAnalysis": [
        {
          "choice": "否，1的機率是1/2",
          "truth": true,
          "reason": "正確。獨立重算：四張卡等可能；數字1對應兩張，所以P(1)=2/4=1/2，P(2)=P(3)=1/4。"
        },
        {
          "choice": "是，三個數字各1/3",
          "truth": false,
          "reason": "忽略數字1有兩張。"
        },
        {
          "choice": "否，3的機率是1/2",
          "truth": false,
          "reason": "只有一張3。"
        },
        {
          "choice": "是，四張卡各1/4所以三標籤也等可能",
          "truth": false,
          "reason": "聚合後機率不同。"
        }
      ],
      "misconceptionTarget": "等可能卡片不代表不同標籤事件等可能。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "每張卡片物理抽取機會相同。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：區分基本結果與事件",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "區分基本結果與事件",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "a8d37aca621433c496978801af2c8cbeeaea04d6f321aa69accc6b57373b2e5e"
    },
    {
      "questionId": "u22-s014-v006",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-equally-likely",
      "lockedSkillOrder": 14,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "下列哪個機制最能讓A、B、C三個結果等可能？",
      "text": "下列哪個機制最能讓A、B、C三個結果等可能？",
      "givenConditions": [],
      "target": "設計三結果等可能機制",
      "choices": [
        "袋中放A一張、B兩張、C三張同樣卡片",
        "使用等分成三區且轉動公平的轉盤",
        "六面骰：1代表A，2、3代表B，4、5、6代表C",
        "先公平硬幣，正面A，反面再在B、C中公平選"
      ],
      "answerIndex": 1,
      "independentSolution": "等分三區且公平時三區面積相同，各為1/3。",
      "explanation": "等分三區且公平時三區面積相同，各為1/3。",
      "steps": [
        "檢查每個標籤對應的等可能基本結果數。"
      ],
      "optionAnalysis": [
        {
          "choice": "袋中放A一張、B兩張、C三張同樣卡片",
          "truth": false,
          "reason": "三標籤數量不同。"
        },
        {
          "choice": "使用等分成三區且轉動公平的轉盤",
          "truth": true,
          "reason": "正確。獨立重算：等分三區且公平時三區面積相同，各為1/3。"
        },
        {
          "choice": "六面骰：1代表A，2、3代表B，4、5、6代表C",
          "truth": false,
          "reason": "對應面數1、2、3不等。"
        },
        {
          "choice": "先公平硬幣，正面A，反面再在B、C中公平選",
          "truth": false,
          "reason": "A機率1/2，B、C各1/4。"
        }
      ],
      "misconceptionTarget": "只看機制看似隨機便認為公平。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "轉盤需物理公平且三區等面積。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：設計三結果等可能機制",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "設計三結果等可能機制",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "9c9bbfb3c069c18e9e4e924d70f3c1475180958f6308050e29881adabd257e41"
    },
    {
      "questionId": "u22-s014-v007",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-equally-likely",
      "lockedSkillOrder": 14,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某遊戲先公平擲骰：1、2、3、4算成功，5、6算失敗。成功與失敗是否等可能？",
      "text": "某遊戲先公平擲骰：1、2、3、4算成功，5、6算失敗。成功與失敗是否等可能？",
      "givenConditions": [],
      "target": "判斷聚合事件是否等可能",
      "choices": [
        "是，因只有成功失敗兩類",
        "否，失敗機率2/3",
        "否，成功機率2/3",
        "是，各為1/6"
      ],
      "answerIndex": 2,
      "independentSolution": "成功對應4面，失敗2面，所以成功4/6=2/3。",
      "explanation": "成功對應4面，失敗2面，所以成功4/6=2/3。",
      "steps": [
        "數每類對應面數。"
      ],
      "optionAnalysis": [
        {
          "choice": "是，因只有成功失敗兩類",
          "truth": false,
          "reason": "兩類包含面數不同。"
        },
        {
          "choice": "否，失敗機率2/3",
          "truth": false,
          "reason": "成功有4面。"
        },
        {
          "choice": "否，成功機率2/3",
          "truth": true,
          "reason": "正確。獨立重算：成功對應4面，失敗2面，所以成功4/6=2/3。"
        },
        {
          "choice": "是，各為1/6",
          "truth": false,
          "reason": "事件由多個面組成。"
        }
      ],
      "misconceptionTarget": "二分類就自動各半。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "骰面本身等可能。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：判斷聚合事件是否等可能",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "判斷聚合事件是否等可能",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "e22cc2e262c0c83157c545d6454b1963ed12fa69de92f07432cd967d5bb1aa65"
    },
    {
      "questionId": "u22-s014-v008",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-equally-likely",
      "lockedSkillOrder": 14,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "A、B兩張票外觀相同，但A被放入箱中3張副本、B放1張。抽到A或B是否等可能？",
      "text": "A、B兩張票外觀相同，但A被放入箱中3張副本、B放1張。抽到A或B是否等可能？",
      "givenConditions": [],
      "target": "辨識抽票機制的權重",
      "choices": [
        "是，因只有兩種票名",
        "否，B機率3/4",
        "無法計算，因票名不同",
        "否，A機率3/4"
      ],
      "answerIndex": 3,
      "independentSolution": "四張實體票等可能，A有3張，故P(A)=3/4。",
      "explanation": "四張實體票等可能，A有3張，故P(A)=3/4。",
      "steps": [
        "以實體票為基本結果。"
      ],
      "optionAnalysis": [
        {
          "choice": "是，因只有兩種票名",
          "truth": false,
          "reason": "副本數不同。"
        },
        {
          "choice": "否，B機率3/4",
          "truth": false,
          "reason": "數量顛倒。"
        },
        {
          "choice": "無法計算，因票名不同",
          "truth": false,
          "reason": "外觀相同且數量已知足以計算。"
        },
        {
          "choice": "否，A機率3/4",
          "truth": true,
          "reason": "正確。獨立重算：四張實體票等可能，A有3張，故P(A)=3/4。"
        }
      ],
      "misconceptionTarget": "忽略重複票數。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "每張票除標記外相同。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：辨識抽票機制的權重",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "辨識抽票機制的權重",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "1802c75870819631f41c92456267becb34a421413f673c7b363c0f964d60cab3"
    },
    {
      "questionId": "u22-s014-v009",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-equally-likely",
      "lockedSkillOrder": 14,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "一轉盤四區角度分別60°、60°、120°、120°，標成A、B、C、D。哪些結果等可能？",
      "text": "一轉盤四區角度分別60°、60°、120°、120°，標成A、B、C、D。哪些結果等可能？",
      "givenConditions": [],
      "target": "由幾何大小判斷等可能",
      "choices": [
        "四者都等可能",
        "A與B等可能，C與D等可能",
        "A與C等可能",
        "只有C與D不等可能"
      ],
      "answerIndex": 1,
      "independentSolution": "均勻轉盤機率與角度成比例；同角度的A、B各1/6，C、D各1/3。",
      "explanation": "均勻轉盤機率與角度成比例；同角度的A、B各1/6，C、D各1/3。",
      "steps": [
        "比較角度。",
        "同角度成對。"
      ],
      "optionAnalysis": [
        {
          "choice": "四者都等可能",
          "truth": false,
          "reason": "區域角度不同。"
        },
        {
          "choice": "A與B等可能，C與D等可能",
          "truth": true,
          "reason": "正確。獨立重算：均勻轉盤機率與角度成比例；同角度的A、B各1/6，C、D各1/3。"
        },
        {
          "choice": "A與C等可能",
          "truth": false,
          "reason": "60°與120°不同。"
        },
        {
          "choice": "只有C與D不等可能",
          "truth": false,
          "reason": "兩者同為120°。"
        }
      ],
      "misconceptionTarget": "只看區域數量。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "轉盤中心角完整合計360°。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：由幾何大小判斷等可能",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "由幾何大小判斷等可能",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "903791272ae2317c68c0f8aaddd30db0ca24bcde4c371cd5292abe343a90f5a4"
    },
    {
      "questionId": "u22-s014-v010",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-equally-likely",
      "lockedSkillOrder": 14,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "抽獎主辦方說「有頭獎、二獎、未中三種結果，所以每種機率1/3」。已知100張票中頭獎1張、二獎9張。評語何者正確？",
      "text": "抽獎主辦方說「有頭獎、二獎、未中三種結果，所以每種機率1/3」。已知100張票中頭獎1張、二獎9張。評語何者正確？",
      "givenConditions": [],
      "target": "審核抽獎等可能宣稱",
      "choices": [
        "對，結果種類有三種",
        "錯，但三類機率為10%、10%、80%",
        "無法判斷，因未說票大小",
        "錯，三類票數不同，機率為1%、9%、90%"
      ],
      "answerIndex": 3,
      "independentSolution": "基本等可能單位是100張票；三事件分別含1、9、90張。",
      "explanation": "基本等可能單位是100張票；三事件分別含1、9、90張。",
      "steps": [
        "找實體基本結果。",
        "按票數除以100。"
      ],
      "optionAnalysis": [
        {
          "choice": "對，結果種類有三種",
          "truth": false,
          "reason": "忽略每類包含的票數。"
        },
        {
          "choice": "錯，但三類機率為10%、10%、80%",
          "truth": false,
          "reason": "頭獎與二獎票數不同。"
        },
        {
          "choice": "無法判斷，因未說票大小",
          "truth": false,
          "reason": "一般同樣票且均勻抽取可由張數判斷。"
        },
        {
          "choice": "錯，三類票數不同，機率為1%、9%、90%",
          "truth": true,
          "reason": "正確。獨立重算：基本等可能單位是100張票；三事件分別含1、9、90張。"
        }
      ],
      "misconceptionTarget": "把事件類別數當成分母。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "estimatedTimeSec": 180,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "假設票外觀相同且隨機抽取。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：審核抽獎等可能宣稱",
      "literacyContextNecessity": "抽獎資訊揭露必須以票數而非獎項種類說明機率。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "審核抽獎等可能宣稱",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "4778347136817c3f2fd5f2ea8a98bb5338d03926ebf493fa1ca024d242b1c76b"
    },
    {
      "questionId": "u22-s014-v011",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-equally-likely",
      "lockedSkillOrder": 14,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某App用亂數0到99，0到49顯示A、50到79顯示B、80到99顯示C。三結果是否等可能？",
      "text": "某App用亂數0到99，0到49顯示A、50到79顯示B、80到99顯示C。三結果是否等可能？",
      "givenConditions": [],
      "target": "審核數位隨機映射",
      "choices": [
        "是，三個字母各一種",
        "否，A、B、C為50%、20%、30%",
        "否，機率分別50%、30%、20%",
        "是，各33%"
      ],
      "answerIndex": 2,
      "independentSolution": "A對應50個整數，B對應30個，C對應20個，所以不等可能。",
      "explanation": "A對應50個整數，B對應30個，C對應20個，所以不等可能。",
      "steps": [
        "計算每段含端點的整數個數。",
        "除以100。"
      ],
      "optionAnalysis": [
        {
          "choice": "是，三個字母各一種",
          "truth": false,
          "reason": "映射區間大小不同。"
        },
        {
          "choice": "否，A、B、C為50%、20%、30%",
          "truth": false,
          "reason": "B與C區間數量算反。"
        },
        {
          "choice": "否，機率分別50%、30%、20%",
          "truth": true,
          "reason": "正確。獨立重算：A對應50個整數，B對應30個，C對應20個，所以不等可能。"
        },
        {
          "choice": "是，各33%",
          "truth": false,
          "reason": "100個整數不能依此映射平均。"
        }
      ],
      "misconceptionTarget": "區間端點計數錯誤。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "estimatedTimeSec": 180,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "亂數0到99本身等可能。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：審核數位隨機映射",
      "literacyContextNecessity": "數位系統的公平性取決於底層亂數到結果的映射。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "審核數位隨機映射",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "b3ac2897e777b3132f0445fc5647a8652e760c0b4721a498c03c7f938a5b5402"
    },
    {
      "questionId": "u22-s014-v012",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-equally-likely",
      "lockedSkillOrder": 14,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "兩種抽樣法：甲從每班各抽2人；乙把全校名單混合後每人等機會抽取。若問題是「每位學生是否等可能入選」，哪個敘述正確？",
      "text": "兩種抽樣法：甲從每班各抽2人；乙把全校名單混合後每人等機會抽取。若問題是「每位學生是否等可能入選」，哪個敘述正確？",
      "givenConditions": [],
      "target": "在抽樣設計中判斷等可能",
      "choices": [
        "乙保證每位學生等機會；甲只有各班人數相同時才會如此",
        "甲一定較公平",
        "兩者永遠相同",
        "乙中大班學生個人機率較大"
      ],
      "answerIndex": 0,
      "independentSolution": "甲每班固定2人，個人入選率為2/班級人數；班級大小不同時不等。乙直接對每人等機會。",
      "explanation": "甲每班固定2人，個人入選率為2/班級人數；班級大小不同時不等。乙直接對每人等機會。",
      "steps": [
        "辨認基本抽樣單位。",
        "比較個人入選率。"
      ],
      "optionAnalysis": [
        {
          "choice": "乙保證每位學生等機會；甲只有各班人數相同時才會如此",
          "truth": true,
          "reason": "正確。獨立重算：甲每班固定2人，個人入選率為2/班級人數；班級大小不同時不等。乙直接對每人等機會。"
        },
        {
          "choice": "甲一定較公平",
          "truth": false,
          "reason": "班級大小不同時個人機率不同。"
        },
        {
          "choice": "兩者永遠相同",
          "truth": false,
          "reason": "抽樣設計不同。"
        },
        {
          "choice": "乙中大班學生個人機率較大",
          "truth": false,
          "reason": "混合名單逐人等機會。"
        }
      ],
      "misconceptionTarget": "把每班名額相同誤認每人機率相同。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "estimatedTimeSec": 180,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "未討論代表性其他面向，只問個人入選機率。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：在抽樣設計中判斷等可能",
      "literacyContextNecessity": "抽樣公平需明確說明是對班級還是對個人等機會。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "在抽樣設計中判斷等可能",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "1e7b5c8b313ad412f15bbf71a34ebe0c63086607b0c78fa54c0261c77d1efc81"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u22-s014-cr001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-equally-likely",
      "lockedSkillOrder": 14,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "轉盤分成三區，圓心角分別為60°、120°、180°，標A、B、C。判斷A、B、C是否等可能，並求轉到B的機率。",
      "requiredWork": [
        "以區域角度比較。",
        "說明不是按標籤種類平均。",
        "計算120/360。"
      ],
      "standardSolution": [
        "三區角度不同，所以A、B、C不等可能。",
        "P(B)=120°/360°=1/3。"
      ],
      "reasoningSteps": [
        "三區角度不同，所以A、B、C不等可能。",
        "P(B)=120°/360°=1/3。"
      ],
      "alternativeMethods": [
        "可化成角度比1:2:3，因此機率1/6、1/3、1/2。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "不等可能判斷、理由與1/3均正確。"
        },
        {
          "score": 2,
          "criteria": "答案1/3正確但未明確否定等可能。"
        },
        {
          "score": 1,
          "criteria": "能以120/360建立機率。"
        },
        {
          "score": 0,
          "criteria": "因三個標籤而一律判各1/3。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "若寫完整三區機率且總和1，可視為充分理由。",
      "unitNotationRules": "無特殊單位；分數須可辨識且機率介於0與1。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "按區數平均。",
        "把角度當百分率120%。",
        "分母用180。"
      ],
      "visualMode": "figure",
      "figureId": "fig-u22-spinner-weighted",
      "drawingSpecReference": "fig-u22-spinner-weighted",
      "independentReview": {
        "recomputedResult": "三區角度不同，所以A、B、C不等可能。；P(B)=120°/360°=1/3。",
        "alternativeMethodCheck": "可化成角度比1:2:3，因此機率1/6、1/3、1/2。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "92945f1817e58351329f468794c4c9391b79a748bb2adc9266c74af87e4cde04"
    },
    {
      "questionId": "u22-s014-cr002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-equally-likely",
      "lockedSkillOrder": 14,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "袋中有1顆紅球與3顆藍球。有人說「紅、藍兩種顏色，所以抽到紅球機率是1/2」。請指出錯誤，並提出一種讓兩色等可能的修改方法。",
      "requiredWork": [
        "指出基本結果是球而非顏色名稱。",
        "求原紅球機率。",
        "提出可行且不改變隨機性的修改。"
      ],
      "standardSolution": [
        "每一顆球等可能，紅球只占1顆，原機率是1/4，不是1/2。",
        "可增加2顆紅球，使紅、藍各3顆；或移除2顆藍球，使各1顆。"
      ],
      "reasoningSteps": [
        "每一顆球等可能，紅球只占1顆，原機率是1/4，不是1/2。",
        "可增加2顆紅球，使紅、藍各3顆；或移除2顆藍球，使各1顆。"
      ],
      "alternativeMethods": [
        "也可先等可能選顏色，再於該顏色中選球；但必須明確改變抽取程序。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "錯誤理由、1/4與一種有效修改全部正確。"
        },
        {
          "score": 2,
          "criteria": "原機率與理由正確，但修改描述不夠清楚。"
        },
        {
          "score": 1,
          "criteria": "能指出不是按顏色種類平均。"
        },
        {
          "score": 0,
          "criteria": "接受1/2或提出不影響比例的修改。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "任何能使選色層級或球數比例真正達1:1的方案均可滿分。",
      "unitNotationRules": "無特殊單位；分數須可辨識且機率介於0與1。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "再加一顆藍球。",
        "只把球換位置。",
        "不改程序只宣稱公平。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "independentReview": {
        "recomputedResult": "每一顆球等可能，紅球只占1顆，原機率是1/4，不是1/2。；可增加2顆紅球，使紅、藍各3顆；或移除2顆藍球，使各1顆。",
        "alternativeMethodCheck": "也可先等可能選顏色，再於該顏色中選球；但必須明確改變抽取程序。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "78423fbfe4b04dedab34a547a948ac52b797003c26aba08ea7f1e6c9325ff192"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u22-s014-v001",
      "unitId": "u22",
      "skillId": "probability-equally-likely",
      "contentSha256": "1efdf0ac1a3770f1776d6f83bf5ca9e1f7b0e0796858ca18aa6811a7dbe29c01",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "公平骰定義即各面出現機會相同，六面總機率1，所以每面1/6。",
      "derivedAnswer": "是，每個機率皆為1/6",
      "storedAnswer": "是，每個機率皆為1/6",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「是，每個機率皆為1/6」；其餘選項逐項排除：「否，點數越大越難出現」：公平骰各面對稱。；「是，每個機率皆為1/3」：六個結果分母應為6。；「無法討論等可能」：題目已明定公平。",
        "undefinedSymbol": "題幹術語均已在「等可能機率」講義定義；實際目標為「辨識公平骰等可能性」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "骰子無偏且正常滾動。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把數值大小當成機率大小。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：辨識公平骰等可能性",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「公平六面骰的六個點數是否等可能？」；獨立解法「公平骰定義即各面出現機會相同，六面總機率1，所以每面1/6。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s014-v002",
      "unitId": "u22",
      "skillId": "probability-equally-likely",
      "contentSha256": "5196facf3bfb7f5532fcba9314d6e60e41fef5db0a095dd6a2021b9bd1537808",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "均勻轉盤的機率與扇形面積成比例，紅占3/4，故較可能。",
      "derivedAnswer": "否，紅色機率較大",
      "storedAnswer": "否，紅色機率較大",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「否，紅色機率較大」；其餘選項逐項排除：「是，因只有兩種顏色」：種類數相同不代表面積相同。；「是，各為1/4」：總和不為1。；「否，藍色機率較大」：面積較小者機率較小。",
        "undefinedSymbol": "題幹術語均已在「等可能機率」講義定義；實際目標為「辨識不等面積轉盤」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "指針均勻且邊界機率忽略。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「用顏色種類數直接平均。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：辨識不等面積轉盤",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「轉盤有兩個區域：紅色占圓面積3/4，藍色占1/4，指針均勻落在面積上。紅、藍是否等可能？」；獨立解法「均勻轉盤的機率與扇形面積成比例，紅占3/4，故較可能。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s014-v003",
      "unitId": "u22",
      "skillId": "probability-equally-likely",
      "contentSha256": "fe7b8a5ebff875b19885f14cdb985e0d7987031e9656dbe269a21bd9607f297a",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "每顆球等可能，藍球4顆對應4個基本結果，所以藍機率4/5。",
      "derivedAnswer": "否，藍色機率4/5",
      "storedAnswer": "否，藍色機率4/5",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「否，藍色機率4/5」；其餘選項逐項排除：「是，因有兩種顏色」：顏色類別不是等數量基本結果。；「否，紅色機率4/5」：數量顛倒。；「是，各為1/5」：兩者機率總和不為1。",
        "undefinedSymbol": "題幹術語均已在「等可能機率」講義定義；實際目標為「由重複標籤判斷等可能」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "球除顏色外相同且充分混合。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把事件名稱種類當作等可能樣本點。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：由重複標籤判斷等可能",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「袋中有1顆紅球與4顆藍球，球大小相同。事件「紅」與「藍」是否等可能？」；獨立解法「每顆球等可能，藍球4顆對應4個基本結果，所以藍機率4/5。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s014-v004",
      "unitId": "u22",
      "skillId": "probability-equally-likely",
      "contentSha256": "ab55b97136039d73331c88030c69613da952ece953251d786ac7036e34e2dcb4",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "和2只有1個有序配對，和7有6個，所以機率分別1/36與6/36。",
      "derivedAnswer": "否，和7較可能",
      "storedAnswer": "否，和7較可能",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「否，和7較可能」；其餘選項逐項排除：「是，因兩者都是一個和」：和不是等可能基本結果。；「否，和2較可能」：和2只有(1,1)。；「是，各為1/11」：11種和不等可能。",
        "undefinedSymbol": "題幹術語均已在「等可能機率」講義定義；實際目標為「辨識骰子和不等可能」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "兩骰公平且可區分。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把11種可能和直接平均。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：辨識骰子和不等可能",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「擲兩顆公平骰，點數和為2與點數和為7是否等可能？」；獨立解法「和2只有1個有序配對，和7有6個，所以機率分別1/36與6/36。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s014-v005",
      "unitId": "u22",
      "skillId": "probability-equally-likely",
      "contentSha256": "a8d37aca621433c496978801af2c8cbeeaea04d6f321aa69accc6b57373b2e5e",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "四張卡等可能；數字1對應兩張，所以P(1)=2/4=1/2，P(2)=P(3)=1/4。",
      "derivedAnswer": "否，1的機率是1/2",
      "storedAnswer": "否，1的機率是1/2",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「否，1的機率是1/2」；其餘選項逐項排除：「是，三個數字各1/3」：忽略數字1有兩張。；「否，3的機率是1/2」：只有一張3。；「是，四張卡各1/4所以三標籤也等可能」：聚合後機率不同。",
        "undefinedSymbol": "題幹術語均已在「等可能機率」講義定義；實際目標為「區分基本結果與事件」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "每張卡片物理抽取機會相同。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「等可能卡片不代表不同標籤事件等可能。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：區分基本結果與事件",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一個袋中有標號1、1、2、3四張相同卡片。抽到數字1、2、3三種標籤是否等可能？」；獨立解法「四張卡等可能；數字1對應兩張，所以P(1)=2/4=1/2，P(2)=P(3)=1/4。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s014-v006",
      "unitId": "u22",
      "skillId": "probability-equally-likely",
      "contentSha256": "9c9bbfb3c069c18e9e4e924d70f3c1475180958f6308050e29881adabd257e41",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "等分三區且公平時三區面積相同，各為1/3。",
      "derivedAnswer": "使用等分成三區且轉動公平的轉盤",
      "storedAnswer": "使用等分成三區且轉動公平的轉盤",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「使用等分成三區且轉動公平的轉盤」；其餘選項逐項排除：「袋中放A一張、B兩張、C三張同樣卡片」：三標籤數量不同。；「六面骰：1代表A，2、3代表B，4、5、6代表C」：對應面數1、2、3不等。；「先公平硬幣，正面A，反面再在B、C中公平選」：A機率1/2，B、C各1/4。",
        "undefinedSymbol": "題幹術語均已在「等可能機率」講義定義；實際目標為「設計三結果等可能機制」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "轉盤需物理公平且三區等面積。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「只看機制看似隨機便認為公平。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：設計三結果等可能機制",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「下列哪個機制最能讓A、B、C三個結果等可能？」；獨立解法「等分三區且公平時三區面積相同，各為1/3。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s014-v007",
      "unitId": "u22",
      "skillId": "probability-equally-likely",
      "contentSha256": "e22cc2e262c0c83157c545d6454b1963ed12fa69de92f07432cd967d5bb1aa65",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "成功對應4面，失敗2面，所以成功4/6=2/3。",
      "derivedAnswer": "否，成功機率2/3",
      "storedAnswer": "否，成功機率2/3",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「否，成功機率2/3」；其餘選項逐項排除：「是，因只有成功失敗兩類」：兩類包含面數不同。；「否，失敗機率2/3」：成功有4面。；「是，各為1/6」：事件由多個面組成。",
        "undefinedSymbol": "題幹術語均已在「等可能機率」講義定義；實際目標為「判斷聚合事件是否等可能」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "骰面本身等可能。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「二分類就自動各半。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：判斷聚合事件是否等可能",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某遊戲先公平擲骰：1、2、3、4算成功，5、6算失敗。成功與失敗是否等可能？」；獨立解法「成功對應4面，失敗2面，所以成功4/6=2/3。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s014-v008",
      "unitId": "u22",
      "skillId": "probability-equally-likely",
      "contentSha256": "1802c75870819631f41c92456267becb34a421413f673c7b363c0f964d60cab3",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "四張實體票等可能，A有3張，故P(A)=3/4。",
      "derivedAnswer": "否，A機率3/4",
      "storedAnswer": "否，A機率3/4",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「否，A機率3/4」；其餘選項逐項排除：「是，因只有兩種票名」：副本數不同。；「否，B機率3/4」：數量顛倒。；「無法計算，因票名不同」：外觀相同且數量已知足以計算。",
        "undefinedSymbol": "題幹術語均已在「等可能機率」講義定義；實際目標為「辨識抽票機制的權重」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "每張票除標記外相同。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「忽略重複票數。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：辨識抽票機制的權重",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「A、B兩張票外觀相同，但A被放入箱中3張副本、B放1張。抽到A或B是否等可能？」；獨立解法「四張實體票等可能，A有3張，故P(A)=3/4。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s014-v009",
      "unitId": "u22",
      "skillId": "probability-equally-likely",
      "contentSha256": "903791272ae2317c68c0f8aaddd30db0ca24bcde4c371cd5292abe343a90f5a4",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "均勻轉盤機率與角度成比例；同角度的A、B各1/6，C、D各1/3。",
      "derivedAnswer": "A與B等可能，C與D等可能",
      "storedAnswer": "A與B等可能，C與D等可能",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「A與B等可能，C與D等可能」；其餘選項逐項排除：「四者都等可能」：區域角度不同。；「A與C等可能」：60°與120°不同。；「只有C與D不等可能」：兩者同為120°。",
        "undefinedSymbol": "題幹術語均已在「等可能機率」講義定義；實際目標為「由幾何大小判斷等可能」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "轉盤中心角完整合計360°。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「只看區域數量。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：由幾何大小判斷等可能",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一轉盤四區角度分別60°、60°、120°、120°，標成A、B、C、D。哪些結果等可能？」；獨立解法「均勻轉盤機率與角度成比例；同角度的A、B各1/6，C、D各1/3。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s014-v010",
      "unitId": "u22",
      "skillId": "probability-equally-likely",
      "contentSha256": "4778347136817c3f2fd5f2ea8a98bb5338d03926ebf493fa1ca024d242b1c76b",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "基本等可能單位是100張票；三事件分別含1、9、90張。",
      "derivedAnswer": "錯，三類票數不同，機率為1%、9%、90%",
      "storedAnswer": "錯，三類票數不同，機率為1%、9%、90%",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「錯，三類票數不同，機率為1%、9%、90%」；其餘選項逐項排除：「對，結果種類有三種」：忽略每類包含的票數。；「錯，但三類機率為10%、10%、80%」：頭獎與二獎票數不同。；「無法判斷，因未說票大小」：一般同樣票且均勻抽取可由張數判斷。",
        "undefinedSymbol": "題幹術語均已在「等可能機率」講義定義；實際目標為「審核抽獎等可能宣稱」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "假設票外觀相同且隨機抽取。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把事件類別數當成分母。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：審核抽獎等可能宣稱",
      "literacyContextNecessity": "抽獎資訊揭露必須以票數而非獎項種類說明機率。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「抽獎主辦方說「有頭獎、二獎、未中三種結果，所以每種機率1/3」。已知100張票中頭獎1張、二獎9張。評語何者正確？」；獨立解法「基本等可能單位是100張票；三事件分別含1、9、90張。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s014-v011",
      "unitId": "u22",
      "skillId": "probability-equally-likely",
      "contentSha256": "b3ac2897e777b3132f0445fc5647a8652e760c0b4721a498c03c7f938a5b5402",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "A對應50個整數，B對應30個，C對應20個，所以不等可能。",
      "derivedAnswer": "否，機率分別50%、30%、20%",
      "storedAnswer": "否，機率分別50%、30%、20%",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「否，機率分別50%、30%、20%」；其餘選項逐項排除：「是，三個字母各一種」：映射區間大小不同。；「否，A、B、C為50%、20%、30%」：B與C區間數量算反。；「是，各33%」：100個整數不能依此映射平均。",
        "undefinedSymbol": "題幹術語均已在「等可能機率」講義定義；實際目標為「審核數位隨機映射」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "亂數0到99本身等可能。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「區間端點計數錯誤。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：審核數位隨機映射",
      "literacyContextNecessity": "數位系統的公平性取決於底層亂數到結果的映射。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某App用亂數0到99，0到49顯示A、50到79顯示B、80到99顯示C。三結果是否等可能？」；獨立解法「A對應50個整數，B對應30個，C對應20個，所以不等可能。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s014-v012",
      "unitId": "u22",
      "skillId": "probability-equally-likely",
      "contentSha256": "1e7b5c8b313ad412f15bbf71a34ebe0c63086607b0c78fa54c0261c77d1efc81",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "甲每班固定2人，個人入選率為2/班級人數；班級大小不同時不等。乙直接對每人等機會。",
      "derivedAnswer": "乙保證每位學生等機會；甲只有各班人數相同時才會如此",
      "storedAnswer": "乙保證每位學生等機會；甲只有各班人數相同時才會如此",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「乙保證每位學生等機會；甲只有各班人數相同時才會如此」；其餘選項逐項排除：「甲一定較公平」：班級大小不同時個人機率不同。；「兩者永遠相同」：抽樣設計不同。；「乙中大班學生個人機率較大」：混合名單逐人等機會。",
        "undefinedSymbol": "題幹術語均已在「等可能機率」講義定義；實際目標為「在抽樣設計中判斷等可能」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "未討論代表性其他面向，只問個人入選機率。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把每班名額相同誤認每人機率相同。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：在抽樣設計中判斷等可能",
      "literacyContextNecessity": "抽樣公平需明確說明是對班級還是對個人等機會。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-sample-space。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩種抽樣法：甲從每班各抽2人；乙把全校名單混合後每人等機會抽取。若問題是「每位學生是否等可能入選」，哪個敘述正確？」；獨立解法「甲每班固定2人，個人入選率為2/班級人數；班級大小不同時不等。乙直接對每人等機會。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "fig-u22-spinner-weighted",
      "unitId": "u22",
      "skillId": "probability-equally-likely",
      "drawingPurpose": "支援辨識標籤種類不代表等可能，B區機率為120除以360。",
      "canvas": {
        "width": 520,
        "height": 430
      },
      "viewBox": "0 0 520 430",
      "coordinateSystem": "SVG pixels; origin at upper-left; x increases right and y increases down.",
      "layoutConstraints": [
        "半徑140圓",
        "三條分界半徑",
        "A 60度、B 120度、C 180度標籤",
        "固定指針",
        "角度說明"
      ],
      "visibleLineRules": "All mathematical boundaries and axes use solid black lines; helper gridlines, when present, are lighter and never encode an answer by color.",
      "hiddenLineRules": "No hidden geometric lines are needed. Dashed lines are used only for explicitly labelled statistical fences.",
      "labelsAndPositions": "Labels are placed adjacent to their corresponding points, branches, sectors or groups with at least 14 px text.",
      "tickMarksUnitsArrowsSymbols": "Axes include labelled ticks and units where applicable; tree branches show exact fractions; arrowheads do not replace numeric labels.",
      "toScale": true,
      "visualInferenceWarning": null,
      "altText": "圓形轉盤分成60度A區、120度B區、180度C區，三區面積不同。",
      "svgTitle": "支援辨識標籤種類不代表等可能，B區機率為120除以360。",
      "svgDescription": "圓形轉盤分成60度A區、120度B區、180度C區，三區面積不同。",
      "mobileReadabilityReview": "Reviewed at 360 CSS px width; minimum label size remains legible and no labels overlap critical marks.",
      "answerLeakageReview": "The figure contains only data explicitly supplied by its associated prompt or lecture example; it does not mark a multiple-choice option as correct.",
      "geometryTokenAssertions": {
        "angles": {
          "A": 60,
          "B": 120,
          "C": 180
        },
        "sum": 360,
        "probB": "1/3"
      },
      "manualVisualInspection": "pass; rendered PNG inspected for clipping, label overlap, scale consistency and mathematical placement.",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ]
};
