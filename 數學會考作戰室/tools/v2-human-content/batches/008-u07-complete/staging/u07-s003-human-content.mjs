// DETERMINISTIC SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u07-s003-lecture-r1",
  "unitId": "u07",
  "topicId": "u07-basics",
  "skillId": "inequality-transposition",
  "title": "不等式移項：把同加同減寫成可靠的簡記",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能說明移項其實是兩邊同加或同減。",
    "能整理含括號與兩邊都有 x 的不等式。",
    "能判斷先展開、合併或移項的合理順序。",
    "能避免只改符號卻漏項。"
  ],
  "prerequisites": [
    {
      "skillId": "inequality-solve-basic",
      "requiredLevel": "能用兩邊同加減與同除正數解基本不等式。"
    }
  ],
  "prerequisiteBridge": {
    "inequality-solve-basic": "能用兩邊同加減與同除正數解基本不等式。"
  },
  "glossary": [
    {
      "term": "移項",
      "definition": "把兩邊同加或同減同一項的過程，用「跨越不等號後改符號」作簡寫。"
    },
    {
      "term": "同類項",
      "definition": "未知數部分完全相同，可以合併係數的項。"
    },
    {
      "term": "展開",
      "definition": "用分配律去掉括號。"
    }
  ],
  "notation": [
    {
      "symbol": "3x−5>x+7",
      "meaning": "未知數項與常數項分布在不等號兩邊。"
    },
    {
      "symbol": "2(x+1)",
      "meaning": "需用分配律展開為 2x+2。"
    }
  ],
  "conceptNarrative": [
    "「移項變號」不是魔法規則；它是左右兩邊同時加上相反項後，省略中間步驟。",
    "兩邊都有 x 時，通常先把 x 項集中一邊、常數集中另一邊。",
    "括號存在時先正確展開，再合併同類項。",
    "哪一邊放 x 都可以，但選擇能使係數為正，通常較不易在最後遇到負數除法。",
    "移項後應能逐項還原成左右同加或同減相同式子；完成括號與同類項整理後，再以原式的邊界、內部值及外部值驗證，才能發現漏乘或符號錯誤。"
  ],
  "formalDefinitions": [
    {
      "name": "移項等價性",
      "statement": "A+B>C 等價於 A>C−B，因為兩邊同減 B。"
    },
    {
      "name": "合併同類項",
      "statement": "ax+bx=(a+b)x。"
    }
  ],
  "formulas": [
    {
      "formula": "A+B>C ⇔ A>C−B",
      "conditions": [
        "B 為同一個完整項"
      ],
      "meaning": "跨越不等號的簡記。"
    },
    {
      "formula": "k(a+b)=ka+kb",
      "conditions": [
        "k 需乘括號內每一項"
      ],
      "meaning": "先展開再整理。"
    }
  ],
  "nonApplicableCases": [
    "不能跨越不等號後忘記改加減號。",
    "乘法因子或整個括號不能當成單一加減項直接移動。",
    "移項本身不會使不等號變向；只有乘除負數才會。",
    "同類項未合併前不要直接除係數。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "有括號時先完整分配並合併同類項。",
      "check": "括號內每一項都被乘到。"
    },
    {
      "step": 2,
      "instruction": "把未知數項集中到能得到正係數的一側。",
      "check": "跨邊加減可還原成等價運算。"
    },
    {
      "step": 3,
      "instruction": "把常數集中到另一側。",
      "check": "移項只改該項加減號，不改不等號。"
    },
    {
      "step": 4,
      "instruction": "除以正係數並把結果寫成x的標準範圍。",
      "check": "交換左右書寫時維持大小語意。"
    },
    {
      "step": 5,
      "instruction": "代入邊界、內外各一值回原式驗算。",
      "check": "端點及射線方向都一致。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "解3x-5>x+7。",
      "solutionSteps": [
        "兩邊同減x得2x-5>7。",
        "兩邊同加5得2x>12。",
        "除正二得x>6並驗算。"
      ],
      "answer": "x>6。",
      "why": "先集中未知數再集中常數，每次移項都能還原成兩邊同做相同加減。除數二為正，方向保持；七代入成立而六為端點不成立，確認嚴格大於。"
    },
    {
      "exampleId": "L2",
      "prompt": "解5x+4≤2x+19。",
      "solutionSteps": [
        "兩邊同減2x得3x+4≤19。",
        "兩邊同減4得3x≤15。",
        "除正三得x≤5並驗算端點。"
      ],
      "answer": "x≤5。",
      "why": "將較小的未知數項移到左側可保留正係數，避免尚未學到的負數除法。端點五使原式左右都為二十九，因≤含等號而應納入。"
    },
    {
      "exampleId": "L3",
      "prompt": "解2(x+3)<x+10。",
      "solutionSteps": [
        "展開為2x+6<x+10。",
        "同減x與6得x<4。",
        "用3與4代回原括號式。"
      ],
      "answer": "x<4。",
      "why": "分配律必須讓二同時乘到x與三，才得到正確的二x加六。整理後端點四使兩邊相等而不符合，小於四的三成立，因此答案方向正確。"
    },
    {
      "exampleId": "L4",
      "prompt": "解7-2x≥3-x。",
      "solutionSteps": [
        "兩邊同加2x得7≥3+x。",
        "兩邊同減3得4≥x。",
        "改寫為x≤4並以4、5驗算。"
      ],
      "answer": "x≤4。",
      "why": "先把負未知數移到右側可得到正係數x，無須除以負數。四大於或等於x等價於x小於或等於四；端點四成立、五失敗，證明改寫未反向。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "移項時連不等號一起反向。",
      "why": "混淆移項與除以負數。",
      "correction": "單純同加減不變號。"
    },
    {
      "mistake": "2(x+3) 展開成 2x+3。",
      "why": "分配律漏乘常數。",
      "correction": "2 同時乘 x 和 3。"
    },
    {
      "mistake": "3x−5>x+7 移項成 3x+x>7+5。",
      "why": "x 跨越後未變成 −x。",
      "correction": "應為 3x−x>7+5。"
    },
    {
      "mistake": "把 4≥x 改寫成 x≥4。",
      "why": "交換左右卻未保持大小語意。",
      "correction": "4≥x 等價於 x≤4。"
    },
    {
      "mistake": "兩邊都有 x 就把 x 消掉。",
      "why": "未依係數相減。",
      "correction": "例如 5x−2x=3x。"
    },
    {
      "mistake": "整理後不回原式驗算。",
      "why": "無法發現括號展開或移項漏符號。",
      "correction": "代一個邊界內的數到原式。"
    }
  ],
  "selfCheck": [
    "我能把每次移項說回兩邊同加減嗎？",
    "括號是否完整展開？",
    "移項是否只改加減號而不改不等號方向？",
    "最後交換左右時是否正確讀成 x 的範圍？"
  ],
  "summary": [
    "移項是同加同減的簡記。",
    "先展開與合併，再集中 x 項和常數項。",
    "同加減不會使不等號反向。",
    "最後仍需依係數正負決定除法規則。"
  ],
  "connections": {
    "previous": "承接基本不等式解法。",
    "next": [
      "下一節將把整理後的解集畫在數線上。",
      "第五技能會專門解釋負數變號的原因。"
    ]
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u07-s003-v001",
      "u07-s003-v002",
      "u07-s003-v003",
      "u07-s003-v004",
      "u07-s003-v005",
      "u07-s003-v006",
      "u07-s003-v007",
      "u07-s003-v008",
      "u07-s003-v009",
      "u07-s003-v010",
      "u07-s003-v011",
      "u07-s003-v012"
    ],
    "constructedResponseIds": [
      "u07-s003-cr001",
      "u07-s003-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四個例題涵蓋兩邊有 x、括號分配、改寫 4≥x 與避免負係數的策略；人工逐項檢查移項符號與原式代入結果。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "71932aa6f352ac22e32c63cb3666a6c445b8b5647104f802dd29850f03d8df67"
};

export const QUESTIONS = [
  {
    "questionId": "u07-s003-v001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解不等式 2x+3>x+8，答案為何？",
    "givenConditions": "x 為實數。",
    "target": "把未知數項集中後求解",
    "choices": [
      "x>11",
      "x<5",
      "x>5",
      "x≥5"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "2x+3>x+8；扣掉共同的 x 後 x+3>8，再扣 3 得 x>5。測 x=6 成立。",
      "result": "x>5",
      "answerIndexVerified": 2
    },
    "explanation": "兩邊同減 x 得 x+3>8，再同減 3，得到 x>5。 以x=6代回左式15、右式14而成立；x=5兩邊同為13不符合嚴格大於。因此右側大於五的區間才與兩次回代一致。",
    "steps": [
      "兩邊同減 x",
      "兩邊同減 3",
      "代入6與5，核對方向及端點不含。"
    ],
    "optionAnalysis": [
      {
        "choice": "x>11",
        "truth": false,
        "reason": "把常數相加。"
      },
      {
        "choice": "x<5",
        "truth": false,
        "reason": "選項「x<5」方向錯。，與獨立解得的「x>5」不一致。"
      },
      {
        "choice": "x>5",
        "truth": true,
        "reason": "獨立重算得到「x>5」，此選項與完整解答一致。"
      },
      {
        "choice": "x≥5",
        "truth": false,
        "reason": "錯納入端點 5。"
      }
    ],
    "misconceptionTarget": "移項時未改項的加減號，或誤加等號。 也可能把兩邊同減x誤做成2x-x=2而丟失未知數。",
    "prerequisiteCheck": "需會基本同加減。",
    "estimatedTimeSec": "65",
    "unitAndRoundingCheck": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "x=5 代入兩邊皆 13，嚴格大於不成立。",
    "difficultyReason": "兩邊有 x 的基礎移項。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "8d1353e39934e3368b3ec8d0de544ecd01db8659bb558abd0d817561420634df"
  },
  {
    "questionId": "u07-s003-v002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解不等式 5x−4≤3x+10，答案為何？",
    "givenConditions": "最後係數 2>0。",
    "target": "解兩邊含未知數的正係數不等式",
    "choices": [
      "x≥7",
      "x≤3",
      "x<7",
      "x≤7"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "5x−4≤3x+10 ⇒ 2x−4≤10 ⇒ 2x≤14 ⇒ x≤7。端點代回為相等，應納入。",
      "result": "x≤7",
      "answerIndexVerified": 3
    },
    "explanation": "兩邊同減 3x 得 2x−4≤10；同加 4 得 2x≤14；除以正數 2，得 x≤7。 除數2為正所以方向保持；x=7使兩邊同為31而成立，確認端點含入。範圍外的八使左式三十六大於右式三十四，故不是解。",
    "steps": [
      "集中 x 項",
      "移常數並除正係數",
      "將x=7與8代回，驗證上界方向與端點。"
    ],
    "optionAnalysis": [
      {
        "choice": "x≥7",
        "truth": false,
        "reason": "選項「x≥7」方向錯。，與獨立解得的「x≤7」不一致。"
      },
      {
        "choice": "x≤3",
        "truth": false,
        "reason": "14÷2 算錯。"
      },
      {
        "choice": "x<7",
        "truth": false,
        "reason": "選項「x<7」漏含端點。，與獨立解得的「x≤7」不一致。"
      },
      {
        "choice": "x≤7",
        "truth": true,
        "reason": "獨立重算得到「x≤7」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "係數相減或常數移項錯誤。 還可能把五x減三x錯算成八x，或漏掉原本的等號。",
    "prerequisiteCheck": "需會合併同類項。",
    "estimatedTimeSec": "75",
    "unitAndRoundingCheck": "無單位；14÷2 精確。",
    "ambiguityAndBoundaryAudit": "x=7 代回左右皆 31，≤ 成立。",
    "difficultyReason": "三步移項與端點核對。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "1ce5a3753c848016b655e550fcb2783e9835f060285107b28ba120218f4ff2ec"
  },
  {
    "questionId": "u07-s003-v003",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "將 4x+9<21 移去左邊的 +9，正確的下一步是哪一個？",
    "givenConditions": "只要求下一步，不需完成求解。",
    "target": "理解移項的等價操作",
    "choices": [
      "4x<12",
      "4x<30",
      "4x>12",
      "x<12"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "在 4x+9<21 兩側各減 9：4x+9−9<21−9，化簡為 4x<12。",
      "result": "4x<12",
      "answerIndexVerified": 0
    },
    "explanation": "移去 +9 等同兩邊同減 9，因此右邊為 21−9=12，不等號方向不變，得到 4x<12。 完整寫成4x+9-9<21-9可看出兩邊做相同運算，沒有任何變號理由。化簡後的左邊只剩四x，右邊為十二。",
    "steps": [
      "兩邊同減 9",
      "保持 < 方向",
      "展開兩邊同減9的完整一行，再化簡成4x<12。"
    ],
    "optionAnalysis": [
      {
        "choice": "4x<12",
        "truth": true,
        "reason": "獨立重算得到「4x<12」，此選項與完整解答一致。"
      },
      {
        "choice": "4x<30",
        "truth": false,
        "reason": "把 9 加到 21。"
      },
      {
        "choice": "4x>12",
        "truth": false,
        "reason": "同減不應變號。"
      },
      {
        "choice": "x<12",
        "truth": false,
        "reason": "漏掉係數 4。"
      }
    ],
    "misconceptionTarget": "把移項簡記誤成任意改符號或漏項。 也可能只刪左邊九，卻沒有在右邊扣除同一數。",
    "prerequisiteCheck": "需會整數減法。",
    "estimatedTimeSec": "45",
    "unitAndRoundingCheck": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "移項的是完整常數項 +9，唯一等價式為 4x<12。",
    "difficultyReason": "辨認移項本質的單步題。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "6e61948b97836ada5c2d8132ade8ce2329ad1c98d9753f8be6f1915b72561fa8"
  },
  {
    "questionId": "u07-s003-v004",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "先展開括號，再解不等式 3(x+2)>2x+11。最後範圍為何？",
    "givenConditions": "必須先正確使用分配律；除數為正數。",
    "target": "在括號展開後完成移項解法",
    "choices": [
      "x<5",
      "x>5",
      "x>17",
      "x≥5"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "先展開為 3x+6>2x+11；兩邊同減 2x，再同減 6，得 x>5。",
      "result": "x>5",
      "answerIndexVerified": 1
    },
    "explanation": "先展開得 3x+6>2x+11；兩邊同減 2x，再同減 6，得到 x>5。 先展開成3x+6>2x+11，再集中同類項得x>5。x=6代入得24>23成立，x=5得21>21為假，故答案是嚴格大於5且範圍向右延伸。",
    "steps": [
      "用分配律展開",
      "集中 x 項與常數",
      "用x=6與5回代原括號式，檢查端點與方向。"
    ],
    "optionAnalysis": [
      {
        "choice": "x<5",
        "truth": false,
        "reason": "選項「x<5」方向錯。，與獨立解得的「x>5」不一致。"
      },
      {
        "choice": "x>5",
        "truth": true,
        "reason": "獨立重算得到「x>5」，此選項與完整解答一致。"
      },
      {
        "choice": "x>17",
        "truth": false,
        "reason": "把常數錯加。"
      },
      {
        "choice": "x≥5",
        "truth": false,
        "reason": "嚴格大於不含 5。"
      }
    ],
    "misconceptionTarget": "分配律漏乘 2，或端點誤含。 還可能把三分配給x卻漏乘括號內的二，導致端點錯。",
    "prerequisiteCheck": "需會分配律與移項。",
    "estimatedTimeSec": "80",
    "unitAndRoundingCheck": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "x=5 時兩邊皆 21，不符合 >。",
    "difficultyReason": "同時檢驗分配律與兩邊含未知數的整理，不是單純換數計算。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "3c494a6cd48ecd695051c46bfdf15f9b96f3d4469db8540d069b158d3851647d"
  },
  {
    "questionId": "u07-s003-v005",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解不等式 8−2x≥4−x，答案為何？",
    "givenConditions": "x 為實數。",
    "target": "策略性移項以避免負係數",
    "choices": [
      "x≥4",
      "x<4",
      "x>4",
      "x≤4"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "加 2x：8≥4+x；減 4：4≥x。語意是 x 不大於 4，即 x≤4。",
      "result": "x≤4",
      "answerIndexVerified": 3
    },
    "explanation": "兩邊同加 2x 得 8≥4+x；再同減 4 得 4≥x，改寫為 x≤4。 把4≥x按未知數在左改寫時須成x≤4；代入4成立、5失敗，驗證方向。這也排除把交換左右位置誤當成保留符號。",
    "steps": [
      "先使 x 係數為正",
      "將 4≥x 改寫為 x≤4",
      "將結果改寫成x≤4，並用4、5代入原式驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "x≥4",
        "truth": false,
        "reason": "選項「x≥4」方向相反。，與獨立解得的「x≤4」不一致。"
      },
      {
        "choice": "x<4",
        "truth": false,
        "reason": "選項「x<4」漏含端點。，與獨立解得的「x≤4」不一致。"
      },
      {
        "choice": "x>4",
        "truth": false,
        "reason": "方向與端點都錯。"
      },
      {
        "choice": "x≤4",
        "truth": true,
        "reason": "獨立重算得到「x≤4」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "將 4≥x 改寫時不等號方向錯誤。 也可能看到原式有負x就提前套用下一節的變號規則。",
    "prerequisiteCheck": "需會交換不等式左右。",
    "estimatedTimeSec": "85",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "x=4 時左右都為 0，應納入；x=5 時左 −2、右 −1，不成立。",
    "difficultyReason": "需選擇移項方向並正確改寫。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "f5e4fd01e6d75099fdb3624a9ae66d19d5c2ffde4eb441e668987a196651b53a"
  },
  {
    "questionId": "u07-s003-v006",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "下列哪一個移項過程正確？",
    "givenConditions": "四選項均為實數不等式。",
    "target": "辨識等價移項步驟",
    "choices": [
      "2x−5>9 ⇒ 2x>9+5",
      "2x−5>9 ⇒ 2x>9−5",
      "2x+5>9 ⇒ 2x>9+5",
      "2x+5>9 ⇒ 2x<9−5"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "選項 0 可還原為兩邊加 5；其餘三項無法由同一加減操作得到，因此不等價。",
      "result": "2x−5>9 ⇒ 2x>9+5",
      "answerIndexVerified": 0
    },
    "explanation": "第一項把左邊的 −5 移除，相當於兩邊同加 5，因此右邊成 9+5，且同加不改不等號。 第一個過程可展開成左右同加5，其餘選項都無法還原為同一等價運算。",
    "steps": [
      "辨認要消去的是 −5",
      "兩邊同加 5",
      "把四個箭頭各還原為兩邊同加減，判斷只有第一項等價。"
    ],
    "optionAnalysis": [
      {
        "choice": "2x−5>9 ⇒ 2x>9+5",
        "truth": true,
        "reason": "獨立重算得到「2x−5>9 ⇒ 2x>9+5」，此選項與完整解答一致。"
      },
      {
        "choice": "2x−5>9 ⇒ 2x>9−5",
        "truth": false,
        "reason": "右側應加 5。"
      },
      {
        "choice": "2x+5>9 ⇒ 2x>9+5",
        "truth": false,
        "reason": "消去 +5 應右側減 5。"
      },
      {
        "choice": "2x+5>9 ⇒ 2x<9−5",
        "truth": false,
        "reason": "除了算式錯還不應變號。"
      }
    ],
    "misconceptionTarget": "只背「移項變號」但未判斷原項符號。 還可能只背跨邊變號，沒有檢查被搬動項原本是正或負。",
    "prerequisiteCheck": "需理解同加同減。",
    "estimatedTimeSec": "70",
    "unitAndRoundingCheck": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "只有選項 0 可由左右同做同一運算得到。",
    "difficultyReason": "比較多個移項過程。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "f8c560a42c218402fa1626153ab797339d426bbfd63a8a9eac8d3c1775613cd8"
  },
  {
    "questionId": "u07-s003-v007",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解不等式 2(3x−1)≤4x+10，答案為何？",
    "givenConditions": "2 與 4 均為正，最後不變號。",
    "target": "多步展開與移項",
    "choices": [
      "x≥6",
      "x≤6",
      "x<4",
      "x≤4"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "左式為 6x−2。扣掉 4x：2x−2≤10；加 2：2x≤12；除 2：x≤6。",
      "result": "x≤6",
      "answerIndexVerified": 1
    },
    "explanation": "展開得 6x−2≤4x+10；移項得 2x≤12；除以 2，得到 x≤6。 展開得六x-2小於等於四x+10，整理得x小於等於六。x=6代入左右皆為34而成立，x=7時左40大於右38而不符合≤。",
    "steps": [
      "完整展開括號",
      "合併後除正係數",
      "以6與7代回含括號原式，檢查端點與外部值。"
    ],
    "optionAnalysis": [
      {
        "choice": "x≥6",
        "truth": false,
        "reason": "選項「x≥6」方向錯。，與獨立解得的「x≤6」不一致。"
      },
      {
        "choice": "x≤6",
        "truth": true,
        "reason": "獨立重算得到「x≤6」，此選項與完整解答一致。"
      },
      {
        "choice": "x<4",
        "truth": false,
        "reason": "端點與數值都錯。"
      },
      {
        "choice": "x≤4",
        "truth": false,
        "reason": "12÷2 不是 4。"
      }
    ],
    "misconceptionTarget": "分配律或係數相減錯誤。 也可能把六x減四x算錯，或把等號端點排除。",
    "prerequisiteCheck": "需會分配律與同類項。",
    "estimatedTimeSec": "95",
    "unitAndRoundingCheck": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "x=6 時兩邊皆 34，端點包含。",
    "difficultyReason": "需要三個代數整理步驟。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "338208b2aaff36902b7f9f602873b8b99eedc5d7335715ea5ed25636a17e9403"
  },
  {
    "questionId": "u07-s003-v008",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解不等式 5−(x−3)>2x−1，答案為何？",
    "givenConditions": "−(x−3)=−x+3。",
    "target": "處理負括號後移項",
    "choices": [
      "x>3",
      "x<9",
      "x<3",
      "x≤3"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "5−(x−3)=8−x。原式 8−x>2x−1；加 x、加 1 得 9>3x；除 3 得 3>x，即 x<3。",
      "result": "x<3",
      "answerIndexVerified": 2
    },
    "explanation": "先去括號：5−x+3>2x−1，即 8−x>2x−1。移項得 9>3x，所以 x<3。 括號前的減號使-x與+3同時出現，整理成九大於三x後得x小於三；x=2成立而x=3兩邊相等不成立，方向無誤。",
    "steps": [
      "負號分配進括號",
      "集中 x 項與常數",
      "展開後以x=2與3回代，驗證x<3。"
    ],
    "optionAnalysis": [
      {
        "choice": "x>3",
        "truth": false,
        "reason": "選項「x>3」方向錯。，與獨立解得的「x<3」不一致。"
      },
      {
        "choice": "x<9",
        "truth": false,
        "reason": "常數邊界算錯。"
      },
      {
        "choice": "x<3",
        "truth": true,
        "reason": "獨立重算得到「x<3」，此選項與完整解答一致。"
      },
      {
        "choice": "x≤3",
        "truth": false,
        "reason": "嚴格不等號不含 3。"
      }
    ],
    "misconceptionTarget": "括號前負號未改變括號內 −3 的符號。 還可能把五減括號錯展開成五減x減三，端點因而改變。",
    "prerequisiteCheck": "需會去括號與移項。",
    "estimatedTimeSec": "105",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "x=3 時左右皆 5，不符合嚴格 >；x=2 成立。",
    "difficultyReason": "負括號增加符號負荷。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "bbdffc33bcebebf38a9877ae6d43ba0b0d49d689e24c69aaa2b89b622ce7cfcb"
  },
  {
    "questionId": "u07-s003-v009",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "已知 4x+a≤2x+9 的解為 x≤2，則 a 為何？",
    "givenConditions": "係數 2>0，方向為 ≤。",
    "target": "由解集反求移項常數",
    "choices": [
      "5",
      "13",
      "−5",
      "1"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "4x+a≤2x+9 ⇒ 2x≤9−a ⇒ x≤(9−a)/2。與 x≤2 同解，故 9−a=4，a=5。",
      "result": "5",
      "answerIndexVerified": 0
    },
    "explanation": "移項得 2x≤9−a，所以 x≤(9−a)/2。解集端點為 2，因此 (9−a)/2=2，解得 a=5。 先整理一般式得二x小於等於九減a，要使上界為二，九減a必須等於四，所以a=5。代回得4x+5≤2x+9，確實同解。",
    "steps": [
      "求一般端點",
      "令端點等於 2",
      "將a=5代回原不等式重新求解，確認端點與方向。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": true,
        "reason": "a=5 時端點為 2。"
      },
      {
        "choice": "13",
        "truth": false,
        "reason": "a=13 時端點 −2。"
      },
      {
        "choice": "−5",
        "truth": false,
        "reason": "a=−5 時端點 7。"
      },
      {
        "choice": "1",
        "truth": false,
        "reason": "a=1 時端點 4。"
      }
    ],
    "misconceptionTarget": "把參數直接與端點相等，未先整理不等式。 也可能只比較常數a與端點2，沒有先求出一般解集端點。",
    "prerequisiteCheck": "需會參數方程與移項。",
    "estimatedTimeSec": "110",
    "unitAndRoundingCheck": "無單位；a 為實數。",
    "ambiguityAndBoundaryAudit": "指定解集方向與一般式一致，端點唯一決定 a。",
    "difficultyReason": "反向建模並解參數。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "e42031d95ab364b497da88f6f39e95e5a6f5397a252c0508b1ebdc443b2cd6b1"
  },
  {
    "questionId": "u07-s003-v010",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "某線上課程原價 900 元，使用折價券後價格為 900−c 元；平台規定折後價格必須低於 750 元。下列列式何者正確？",
    "givenConditions": "c 為折抵金額，通常 0≤c≤900；本題只問列式。",
    "target": "由折扣情境建立待移項不等式",
    "choices": [
      "900−c≥750",
      "900−c<750",
      "900+c<750",
      "c−900<750"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "若 c=200，折後 700 元應符合；代入 900−c<750 得 700<750 真。其他選項無法同時表達減價與嚴格上限。",
      "result": "900−c<750",
      "answerIndexVerified": 1
    },
    "explanation": "折後價格是 900−c；「低於 750」為嚴格小於，因此 900−c<750。 例如c=200時折後700低於750，代入正確式為真，亦驗證折價量須從900扣除。若列成加法，折價越多反而價格越高，不合題意。",
    "steps": [
      "辨認折後價格式",
      "將低於翻成 <",
      "以c=200測試四個列式，確認只有900-c<750符合情境。"
    ],
    "optionAnalysis": [
      {
        "choice": "900−c≥750",
        "truth": false,
        "reason": "方向錯成至少 750。"
      },
      {
        "choice": "900−c<750",
        "truth": true,
        "reason": "獨立重算得到「900−c<750」，此選項與完整解答一致。"
      },
      {
        "choice": "900+c<750",
        "truth": false,
        "reason": "折價券應減去而非加上。"
      },
      {
        "choice": "c−900<750",
        "truth": false,
        "reason": "把價格與折扣角色顛倒。"
      }
    ],
    "misconceptionTarget": "只抓「折價」卻未正確建立價格式。 還可能把折價券金額加到原價，或把低於寫成含等號。",
    "prerequisiteCheck": "需理解固定價減折扣與低於語意。",
    "estimatedTimeSec": "75",
    "unitAndRoundingCheck": "金額單位均為元。",
    "ambiguityAndBoundaryAudit": "「低於」不含 750；折後價格定義明確。",
    "difficultyReason": "情境中需先組成含未知數的價格式。",
    "literacyContextNecessity": "原價、折抵額與平台門檻共同決定式子，不能刪除情境資訊。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "42df2accc7025cb9391e5019dffb6d6c8bf447e32af873830048d2a6e10438a7"
  },
  {
    "questionId": "u07-s003-v011",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "一個儲值帳戶有 500 元，每次搭車扣 32 元。若搭 x 次後餘額至少要有 116 元，最多可搭幾次？",
    "givenConditions": "x 為非負整數；每次固定扣款。",
    "target": "用移項求最大搭乘次數",
    "choices": [
      "11 次",
      "13 次",
      "12 次",
      "14 次"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "至少留 116，最多可花 500−116=384 元；每次 32 元，384÷32=12。第 13 次會多花 32 元而低於保留額。",
      "result": "12 次",
      "answerIndexVerified": 2
    },
    "explanation": "餘額為 500−32x，條件 500−32x≥116。移項得 384≥32x，所以 x≤12，最多 12 次。 搭12次餘額116剛好符合至少；搭13次只剩84，故12是最大整數解。次數不能取小數，因此上界的整數詮釋很必要。",
    "steps": [
      "建立餘額不等式",
      "移項並除以正數 32",
      "比較12與13次的餘額，確認最大可行整數。"
    ],
    "optionAnalysis": [
      {
        "choice": "11 次",
        "truth": false,
        "reason": "11 次可行但不是最多。"
      },
      {
        "choice": "13 次",
        "truth": false,
        "reason": "13 次餘額 84 元不足。"
      },
      {
        "choice": "12 次",
        "truth": true,
        "reason": "12 次餘額 116 元，正好可行。"
      },
      {
        "choice": "14 次",
        "truth": false,
        "reason": "14 次更不足。"
      }
    ],
    "misconceptionTarget": "移項負的變動項時方向或取整錯誤。 還可能把最多可搭次數向上取整，或忘記保留額可剛好等於116。",
    "prerequisiteCheck": "需會餘額模型與整數上界。",
    "estimatedTimeSec": "100",
    "unitAndRoundingCheck": "單位皆為元與次；32×12=384 精確。",
    "ambiguityAndBoundaryAudit": "x=12 邊界成立，x=13 不成立，最大值唯一。",
    "difficultyReason": "負變動量、移項策略與最大整數驗證。",
    "literacyContextNecessity": "餘額至少限制使搭乘次數形成上界，且每次扣款不可從情境移除。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "34f61f7635c817d868c62ff7b62ecd5f2fb6624d68ff5bea077d668d6550329d"
  },
  {
    "questionId": "u07-s003-v012",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "溫室目前 28°C，冷卻設備每分鐘降 1.5°C。要使溫度低於 22°C，至少需運轉幾個完整分鐘？",
    "givenConditions": "t 為非負整數；降溫率固定。",
    "target": "含下降率的不等式移項與最小整數",
    "choices": [
      "3 分鐘",
      "4 分鐘",
      "6 分鐘",
      "5 分鐘"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "運轉 4 分鐘降 6°C，恰為 22°C，尚未低於；5 分鐘降 7.5°C，成 20.5°C。故至少 5 分鐘。",
      "result": "5 分鐘",
      "answerIndexVerified": 3
    },
    "explanation": "t 分鐘後溫度為 28−1.5t，需 28−1.5t<22。移項得 6<1.5t，所以 t>4；完整分鐘最小為 5。 四分鐘後恰22不符合低於；五分鐘後20.5才成立，因此完整分鐘至少5。時間限定為完整分鐘，不能以分數時間代替。",
    "steps": [
      "建立下降量模型",
      "解嚴格下界並取整數",
      "計算4與5分鐘後溫度，檢查嚴格門檻。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 分鐘",
        "truth": false,
        "reason": "3 分鐘仍為 23.5°C。"
      },
      {
        "choice": "4 分鐘",
        "truth": false,
        "reason": "4 分鐘剛好 22°C，不符合低於。"
      },
      {
        "choice": "6 分鐘",
        "truth": false,
        "reason": "6 分鐘可行但不是最少。"
      },
      {
        "choice": "5 分鐘",
        "truth": true,
        "reason": "5 分鐘為 20.5°C，是正確最小值。"
      }
    ],
    "misconceptionTarget": "把低於寫成 ≤，或把 t>4 回答為 4。 還可能忽略時間須為完整分鐘，或把t>4的最小整數寫成4。",
    "prerequisiteCheck": "需會小數乘法與負項移項。",
    "estimatedTimeSec": "105",
    "unitAndRoundingCheck": "溫度單位 °C、時間分鐘；不四捨五入完整分鐘。",
    "ambiguityAndBoundaryAudit": "4 分鐘端點被排除，5 分鐘首次符合。",
    "difficultyReason": "含負變動係數與嚴格整數邊界。",
    "literacyContextNecessity": "降溫率與「低於」門檻共同決定第 4、5 分鐘分界，情境數據不可替換為純計算。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "483471fb1e86374878578f18a04ec80e659a2bf6039c4cc23543306449085c23"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u07-s003-cr001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "type": "constructed-response",
    "prompt": "解不等式 5x−8>2x+13。請同時用「兩邊做相同運算」與「移項口訣」各寫一次，並說明兩種方法為何等價。",
    "requiredWork": [
      "用等價運算完成解題",
      "用移項形式重寫同一過程",
      "說明移項口訣的本質"
    ],
    "fullCreditSolution": [
      "等價運算寫法：兩邊同減2x得3x-8>13，再兩邊同加8得3x>21。",
      "因3為正，兩邊同除以3而不改方向，得到x>7。",
      "移項簡寫為5x-2x>13+8，再化簡成3x>21與x>7。",
      "把右側2x移到左側變-2x，本質是兩邊同減2x；把左側-8移到右側變+8，本質是兩邊同加8，所以兩種寫法等價。",
      "用x=8代入原式得32>29成立，x=7兩邊同為27不成立，驗證方向與嚴格端點。"
    ],
    "alternativeMethod": [
      "也可先移常數再移未知數，只要每次都可解釋成兩邊同加減同一式，最後仍為 x>7。"
    ],
    "reasoningSteps": [
      "以兩邊同減2x集中未知數。",
      "以兩邊同加8集中常數。",
      "除以正三求出x>7。",
      "把兩個移項分別還原成等價運算。",
      "以8與7回代原式驗算。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "兩種寫法均正確得到 x>7，並明確說出移項等同於兩邊同加減同一項。"
      },
      {
        "score": 2,
        "criteria": "答案與其中一種完整方法正確，另一種只有簡略式或等價說明不足。"
      },
      {
        "score": 1,
        "criteria": "可得到 3x>21 或端點 7，但移項符號或最終方向有一處錯誤。"
      },
      {
        "score": 0,
        "criteria": "未知數與常數混合整理錯誤，無法形成有效一步，或未作答。"
      }
    ],
    "partialCreditRules": "若學生只漏寫「兩邊」文字但等式鏈完整，可視為已展示等價運算；若把 13+8 算錯，保留整理方法分。",
    "followThroughPolicy": "早期算術錯誤後仍按正係數除法正確處理，可給程序分；但移項符號錯誤屬概念錯誤，不完全採跟隨給分。",
    "unitAndNotationRules": "最後接受 x>7 或 7<x；每行需維持不等式而非改寫成等號。",
    "answerOnlyPolicy": "只寫 x>7，未展示兩種方法，最多 1 分。",
    "commonErrors": [
      "把右邊的+2x移到左邊仍寫+2x，未做相反運算。",
      "把同加減項誤認為需要反向不等號，或把每一行錯寫成等號。"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "x>7；移項等價於兩邊同減 2x、同加 8。",
      "ambiguity": "題目指定兩種表達與等價說明，係數為正，不涉及變號。",
      "scope": "國中不等式移項與等價原理。",
      "reviewNote": "獨立整理 5x−2x>13+8 得 3x>21，再除正數 3 得 x>7；將兩次移項逐一還原為同減 2x 和同加 8，確認口訣未遮蔽原理。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "409edd86e240aea046a2b13fa1b7ea077e87e5341e6539775ce94dd36d987f9d"
  },
  {
    "questionId": "u07-s003-cr002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "type": "constructed-response",
    "prompt": "解 3(2x−5)≤4x+7，並指出在展開括號、移項、除法三個階段最容易出現的各一個錯誤。",
    "requiredWork": [
      "正確展開括號",
      "整理未知數與常數",
      "完成除法得到範圍",
      "列出三階段的具體錯誤"
    ],
    "fullCreditSolution": [
      "先用分配律展開3(2x-5)=6x-15，所以原式為6x-15≤4x+7。",
      "兩邊同減4x再同加15，得到2x≤22。",
      "兩邊同除以正數2，方向不變，得到x≤11。",
      "三階段常見錯誤分別是括號內-5漏乘3、移項未改加減號、除以正數2卻誤反向。",
      "邊界11使左右都為51而成立，12使左57大於右55而失敗，驗證上界。"
    ],
    "alternativeMethod": [
      "可先把 4x 移到左邊、−15 移到右邊，寫 6x−4x≤7+15，再化簡；錯誤分析只要對應三階段且具體即可。"
    ],
    "reasoningSteps": [
      "完整分配三到括號兩項。",
      "整理未知數項與常數項。",
      "除以正二求範圍。",
      "逐階段辨識不同錯誤。",
      "用11與12代入驗算。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整得到 x≤11，展開與移項正確，並列出三個分別對應括號、移項、除法的具體錯誤。"
      },
      {
        "score": 2,
        "criteria": "解題完全正確但錯誤分析只列兩項；或答案正確且一處書寫略省但三項分析完整。"
      },
      {
        "score": 1,
        "criteria": "能展開成 6x−15≤4x+7 或整理成 2x≤22，但後續有錯，且至少指出一個真正風險。"
      },
      {
        "score": 0,
        "criteria": "展開與整理均無效，且錯誤描述與題目無關。"
      }
    ],
    "partialCreditRules": "三個錯誤例不要求固定用語，但必須分別針對三個階段；解題算術錯誤可依正確程序部分給分。",
    "followThroughPolicy": "若漏乘 −5 得 6x−5≤4x+7，後續一致解答，可給移項與除法程序分，但展開概念不得給分。",
    "unitAndNotationRules": "最後範圍需保留 ≤；不需要單位。",
    "answerOnlyPolicy": "只有答案 x≤11 而無步驟與錯誤分析，最多 1 分。",
    "commonErrors": [
      "把3(2x-5)展開成6x-5，沒有讓3乘到第二項。",
      "把移項與除負數混淆，或除以正二時不必要地反轉≤。"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "x≤11。",
      "ambiguity": "括號係數與所有常數清楚；題目允許多種合理錯誤示例，但評分條件明示需分屬三階段。",
      "scope": "國中一次不等式含括號移項。",
      "reviewNote": "獨立重算 6x−15≤4x+7 ⇒ 2x≤22 ⇒ x≤11；逐階段檢查分配律的 −15、移項的 +15 和除以正 2 不變號。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "3db68bb0b31170f9cb08790771408efbffaf819175640e5ee309e4b10bd51a1a"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u07-s003-v001-semantic-r1",
    "questionId": "u07-s003-v001",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "contentSha256": "8d1353e39934e3368b3ec8d0de544ecd01db8659bb558abd0d817561420634df",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "2x+3>x+8；扣掉共同的 x 後 x+3>8，再扣 3 得 x>5。測 x=6 成立。",
    "derivedAnswer": "x>5",
    "storedAnswer": "x>5",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「把未知數項集中後求解」，給定條件「x 為實數。」足以決定唯一數學任務。",
      "boundary": "x=5 代入兩邊皆 13，嚴格大於不成立。",
      "units": "無單位與近似。",
      "scope": "本題只使用 不等式移項 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "兩邊有 x 的基礎移項。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：2x+3>x+8；扣掉共同的 x 後 x+3>8，再扣 3 得 x>5。測 x=6 成立。 所得「x>5」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：x=5 代入兩邊皆 13，嚴格大於不成立。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s003-v002-semantic-r1",
    "questionId": "u07-s003-v002",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "contentSha256": "1ce5a3753c848016b655e550fcb2783e9835f060285107b28ba120218f4ff2ec",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "5x−4≤3x+10 ⇒ 2x−4≤10 ⇒ 2x≤14 ⇒ x≤7。端點代回為相等，應納入。",
    "derivedAnswer": "x≤7",
    "storedAnswer": "x≤7",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「解兩邊含未知數的正係數不等式」，給定條件「最後係數 2>0。」足以決定唯一數學任務。",
      "boundary": "x=7 代回左右皆 31，≤ 成立。",
      "units": "無單位；14÷2 精確。",
      "scope": "本題只使用 不等式移項 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "三步移項與端點核對。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：5x−4≤3x+10 ⇒ 2x−4≤10 ⇒ 2x≤14 ⇒ x≤7。端點代回為相等，應納入。 所得「x≤7」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：x=7 代回左右皆 31，≤ 成立。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s003-v003-semantic-r1",
    "questionId": "u07-s003-v003",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "contentSha256": "6e61948b97836ada5c2d8132ade8ce2329ad1c98d9753f8be6f1915b72561fa8",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "在 4x+9<21 兩側各減 9：4x+9−9<21−9，化簡為 4x<12。",
    "derivedAnswer": "4x<12",
    "storedAnswer": "4x<12",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「理解移項的等價操作」，給定條件「只要求下一步，不需完成求解。」足以決定唯一數學任務。",
      "boundary": "移項的是完整常數項 +9，唯一等價式為 4x<12。",
      "units": "無單位與近似。",
      "scope": "本題只使用 不等式移項 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "辨認移項本質的單步題。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：在 4x+9<21 兩側各減 9：4x+9−9<21−9，化簡為 4x<12。 所得「4x<12」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：移項的是完整常數項 +9，唯一等價式為 4x<12。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s003-v004-semantic-r1",
    "questionId": "u07-s003-v004",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "contentSha256": "3c494a6cd48ecd695051c46bfdf15f9b96f3d4469db8540d069b158d3851647d",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "先展開為 3x+6>2x+11；兩邊同減 2x，再同減 6，得 x>5。",
    "derivedAnswer": "x>5",
    "storedAnswer": "x>5",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹要求先展開括號並求最後範圍，目標「在括號展開後完成移項解法」唯一。",
      "boundary": "x=5 時兩邊皆 21，不符合 >。",
      "units": "無單位與近似。",
      "scope": "本題只使用 不等式移項 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "同時檢驗分配律與兩邊含未知數的整理，不是單純換數計算。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：先展開為 3x+6>2x+11；兩邊同減 2x，再同減 6，得 x>5。 所得「x>5」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：x=5 時兩邊皆 21，不符合 >。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s003-v005-semantic-r1",
    "questionId": "u07-s003-v005",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "contentSha256": "f5e4fd01e6d75099fdb3624a9ae66d19d5c2ffde4eb441e668987a196651b53a",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "加 2x：8≥4+x；減 4：4≥x。語意是 x 不大於 4，即 x≤4。",
    "derivedAnswer": "x≤4",
    "storedAnswer": "x≤4",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「策略性移項以避免負係數」，給定條件「x 為實數。」足以決定唯一數學任務。",
      "boundary": "x=4 時左右都為 0，應納入；x=5 時左 −2、右 −1，不成立。",
      "units": "無單位。",
      "scope": "本題只使用 不等式移項 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "需選擇移項方向並正確改寫。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：加 2x：8≥4+x；減 4：4≥x。語意是 x 不大於 4，即 x≤4。 所得「x≤4」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：x=4 時左右都為 0，應納入；x=5 時左 −2、右 −1，不成立。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s003-v006-semantic-r1",
    "questionId": "u07-s003-v006",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "contentSha256": "f8c560a42c218402fa1626153ab797339d426bbfd63a8a9eac8d3c1775613cd8",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "選項 0 可還原為兩邊加 5；其餘三項無法由同一加減操作得到，因此不等價。",
    "derivedAnswer": "2x−5>9 ⇒ 2x>9+5",
    "storedAnswer": "2x−5>9 ⇒ 2x>9+5",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「辨識等價移項步驟」，給定條件「四選項均為實數不等式。」足以決定唯一數學任務。",
      "boundary": "只有選項 0 可由左右同做同一運算得到。",
      "units": "無單位與近似。",
      "scope": "本題只使用 不等式移項 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "比較多個移項過程。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：選項 0 可還原為兩邊加 5；其餘三項無法由同一加減操作得到，因此不等價。 所得「2x−5>9 ⇒ 2x>9+5」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：只有選項 0 可由左右同做同一運算得到。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s003-v007-semantic-r1",
    "questionId": "u07-s003-v007",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "contentSha256": "338208b2aaff36902b7f9f602873b8b99eedc5d7335715ea5ed25636a17e9403",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "左式為 6x−2。扣掉 4x：2x−2≤10；加 2：2x≤12；除 2：x≤6。",
    "derivedAnswer": "x≤6",
    "storedAnswer": "x≤6",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「多步展開與移項」，給定條件「2 與 4 均為正，最後不變號。」足以決定唯一數學任務。",
      "boundary": "x=6 時兩邊皆 34，端點包含。",
      "units": "無單位與近似。",
      "scope": "本題只使用 不等式移項 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "需要三個代數整理步驟。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：左式為 6x−2。扣掉 4x：2x−2≤10；加 2：2x≤12；除 2：x≤6。 所得「x≤6」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：x=6 時兩邊皆 34，端點包含。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s003-v008-semantic-r1",
    "questionId": "u07-s003-v008",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "contentSha256": "bbdffc33bcebebf38a9877ae6d43ba0b0d49d689e24c69aaa2b89b622ce7cfcb",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "5−(x−3)=8−x。原式 8−x>2x−1；加 x、加 1 得 9>3x；除 3 得 3>x，即 x<3。",
    "derivedAnswer": "x<3",
    "storedAnswer": "x<3",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「處理負括號後移項」，給定條件「−(x−3)=−x+3。」足以決定唯一數學任務。",
      "boundary": "x=3 時左右皆 5，不符合嚴格 >；x=2 成立。",
      "units": "無單位。",
      "scope": "本題只使用 不等式移項 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "負括號增加符號負荷。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：5−(x−3)=8−x。原式 8−x>2x−1；加 x、加 1 得 9>3x；除 3 得 3>x，即 x<3。 所得「x<3」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：x=3 時左右皆 5，不符合嚴格 >；x=2 成立。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s003-v009-semantic-r1",
    "questionId": "u07-s003-v009",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "contentSha256": "e42031d95ab364b497da88f6f39e95e5a6f5397a252c0508b1ebdc443b2cd6b1",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "4x+a≤2x+9 ⇒ 2x≤9−a ⇒ x≤(9−a)/2。與 x≤2 同解，故 9−a=4，a=5。",
    "derivedAnswer": "5",
    "storedAnswer": "5",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「由解集反求移項常數」，給定條件「係數 2>0，方向為 ≤。」足以決定唯一數學任務。",
      "boundary": "指定解集方向與一般式一致，端點唯一決定 a。",
      "units": "無單位；a 為實數。",
      "scope": "本題只使用 不等式移項 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "反向建模並解參數。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：4x+a≤2x+9 ⇒ 2x≤9−a ⇒ x≤(9−a)/2。與 x≤2 同解，故 9−a=4，a=5。 所得「5」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：指定解集方向與一般式一致，端點唯一決定 a。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s003-v010-semantic-r1",
    "questionId": "u07-s003-v010",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "contentSha256": "42df2accc7025cb9391e5019dffb6d6c8bf447e32af873830048d2a6e10438a7",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "若 c=200，折後 700 元應符合；代入 900−c<750 得 700<750 真。其他選項無法同時表達減價與嚴格上限。",
    "derivedAnswer": "900−c<750",
    "storedAnswer": "900−c<750",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「由折扣情境建立待移項不等式」，給定條件「c 為折抵金額，通常 0≤c≤900；本題只問列式。」足以決定唯一數學任務。",
      "boundary": "「低於」不含 750；折後價格定義明確。",
      "units": "金額單位均為元。",
      "scope": "本題只使用 不等式移項 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "情境中需先組成含未知數的價格式。",
    "literacyNecessityCheck": "原價、折抵額與平台門檻共同決定式子，不能刪除情境資訊。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：若 c=200，折後 700 元應符合；代入 900−c<750 得 700<750 真。其他選項無法同時表達減價與嚴格上限。 所得「900−c<750」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：「低於」不含 750；折後價格定義明確。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s003-v011-semantic-r1",
    "questionId": "u07-s003-v011",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "contentSha256": "34f61f7635c817d868c62ff7b62ecd5f2fb6624d68ff5bea077d668d6550329d",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "至少留 116，最多可花 500−116=384 元；每次 32 元，384÷32=12。第 13 次會多花 32 元而低於保留額。",
    "derivedAnswer": "12 次",
    "storedAnswer": "12 次",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「用移項求最大搭乘次數」，給定條件「x 為非負整數；每次固定扣款。」足以決定唯一數學任務。",
      "boundary": "x=12 邊界成立，x=13 不成立，最大值唯一。",
      "units": "單位皆為元與次；32×12=384 精確。",
      "scope": "本題只使用 不等式移項 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "負變動量、移項策略與最大整數驗證。",
    "literacyNecessityCheck": "餘額至少限制使搭乘次數形成上界，且每次扣款不可從情境移除。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：至少留 116，最多可花 500−116=384 元；每次 32 元，384÷32=12。第 13 次會多花 32 元而低於保留額。 所得「12 次」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：x=12 邊界成立，x=13 不成立，最大值唯一。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s003-v012-semantic-r1",
    "questionId": "u07-s003-v012",
    "unitId": "u07",
    "topicId": "u07-basics",
    "skillId": "inequality-transposition",
    "contentSha256": "483471fb1e86374878578f18a04ec80e659a2bf6039c4cc23543306449085c23",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "運轉 4 分鐘降 6°C，恰為 22°C，尚未低於；5 分鐘降 7.5°C，成 20.5°C。故至少 5 分鐘。",
    "derivedAnswer": "5 分鐘",
    "storedAnswer": "5 分鐘",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「含下降率的不等式移項與最小整數」，給定條件「t 為非負整數；降溫率固定。」足以決定唯一數學任務。",
      "boundary": "4 分鐘端點被排除，5 分鐘首次符合。",
      "units": "溫度單位 °C、時間分鐘；不四捨五入完整分鐘。",
      "scope": "本題只使用 不等式移項 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "含負變動係數與嚴格整數邊界。",
    "literacyNecessityCheck": "降溫率與「低於」門檻共同決定第 4、5 分鐘分界，情境數據不可替換為純計算。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：運轉 4 分鐘降 6°C，恰為 22°C，尚未低於；5 分鐘降 7.5°C，成 20.5°C。故至少 5 分鐘。 所得「5 分鐘」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：4 分鐘端點被排除，5 分鐘首次符合。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
