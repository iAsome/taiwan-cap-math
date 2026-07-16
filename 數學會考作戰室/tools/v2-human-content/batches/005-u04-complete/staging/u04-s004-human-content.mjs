// SERIALIZATION OF REVIEWED CHATGPT_HUMAN_AUTHORED_R1 CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u04-s004-lecture-r1",
  "unitId": "u04",
  "numericUnitId": 4,
  "topicId": "u04-system-methods",
  "skillId": "system-substitution-method",
  "lockedSkillTitle": "代入消去法",
  "title": "代入消去法：先把一個未知數換成另一個式子",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "exactSkillIdentity": {
    "unitTitle": "二元一次聯立方程式",
    "skillTitle": "代入消去法",
    "scope": "先由一式表示一個未知數，再代入另一式消去。"
  },
  "prerequisiteBridge": "先備技能 system-solution-meaning 已建立必要基礎；本節將其用於「先由一式表示一個未知數，再代入另一式消去。」",
  "learningGoals": [
    "能選擇容易孤立未知數的方程式。",
    "能正確代入並使用括號。",
    "能解出第一個未知數後回代。",
    "能將結果代回原兩式檢驗。"
  ],
  "vocabulary": [
    {
      "term": "孤立未知數",
      "definition": "把一個未知數單獨留在等號一側。"
    },
    {
      "term": "代入消去",
      "definition": "用等值式取代未知數，使方程式只剩一元。"
    },
    {
      "term": "回代",
      "definition": "把已求得的值代回較簡單的原式。"
    },
    {
      "term": "等值變形",
      "definition": "對等式兩邊做相同運算，保持解不變。"
    }
  ],
  "notation": [
    {
      "symbol": "y=…",
      "meaning": "表示 y 可由另一個式子取代。"
    },
    {
      "symbol": "x=…",
      "meaning": "亦可選擇孤立 x。"
    }
  ],
  "conceptDevelopment": [
    "代入法不是把一個未知數刪掉，而是用與它相等的式子完整取代。",
    "若代入的式子有兩項以上，必須加括號再乘係數。",
    "選擇係數為 1 或 -1 的未知數通常最省步驟。"
  ],
  "definitions": [
    {
      "name": "代入消去法",
      "statement": "先由一式表示一個未知數，再代入另一式，將二元問題化為一元。"
    }
  ],
  "formulas": [
    {
      "formula": "若 y=f(x)，則另一式中的每個 y 都以 f(x) 取代",
      "conditions": [
        "替換要完整且保持括號。"
      ],
      "meaning": "將未知數 y 消去。"
    }
  ],
  "invalidUseCases": [
    "不能只把代入式中的第一項乘上外部係數。",
    "求出 x 後仍需回代求 y。",
    "回代最好使用原本較簡單的式子，不可改寫成不等值式。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "選式並孤立未知數",
      "check": "優先找係數 ±1。"
    },
    {
      "step": 2,
      "instruction": "完整代入另一式",
      "check": "多項式要加括號。"
    },
    {
      "step": 3,
      "instruction": "解一元一次方程式",
      "check": "整理同類項。"
    },
    {
      "step": 4,
      "instruction": "回代求另一未知數",
      "check": "選最簡單的式子。"
    },
    {
      "step": 5,
      "instruction": "代回兩個原式",
      "check": "確認同時成立。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u04-s004-example-a",
      "prompt": "用代入法解 y=3x-2、x+y=10。",
      "solutionSteps": [
        "代入得 x+(3x-2)=10，整理為 4x=12。",
        "求得 x=3，再回代 y=3×3-2=7。"
      ],
      "answer": "(x,y)=(3,7)。",
      "why": "第一式已將 y 孤立，直接取代第二式的 y 最簡潔。求得三後回代得到七，驗算 3+7=10 且 3×3-2=7，兩式一致，也證明代入沒有遺漏常數負二。"
    },
    {
      "exampleId": "u04-s004-example-b",
      "prompt": "用代入法解 x=8-3y、2x+y=6。",
      "solutionSteps": [
        "代入得 2(8-3y)+y=6，展開為 16-5y=6。",
        "求得 y=2，再回代 x=8-3×2=2。"
      ],
      "answer": "(x,y)=(2,2)。",
      "why": "用括號保留 8-3y，外部二須同時乘八與負三 y。解得 y=2 後回代 x=2，並可核對 2×2+2=6，避免漏乘錯誤；第一式也有 2=8-6，兩式驗算皆通過。"
    },
    {
      "exampleId": "u04-s004-example-c",
      "prompt": "用代入法解 2x+y=9、3x-y=6。",
      "solutionSteps": [
        "由第一式得 y=9-2x，代入第二式為 3x-(9-2x)=6。",
        "整理 5x=15 得 x=3，再求 y=3。"
      ],
      "answer": "(x,y)=(3,3)。",
      "why": "第一式的 y 係數為一，孤立後代入能避免分數。第二式的負 y 使括號前出現負號，完整變號後才得到 5x-9=6 與正確解。"
    },
    {
      "exampleId": "u04-s004-example-d",
      "prompt": "判斷 y=x+4、2x-2y=-8 的解型態。",
      "solutionSteps": [
        "代入得到 2x-2(x+4)=-8。",
        "展開為 2x-2x-8=-8，即 -8=-8。"
      ],
      "answer": "兩式重合，有無限多解。",
      "why": "代入後未知數完全抵消並得到恆等式，表示第二式其實是 y=x+4 的等價形式。每個符合第一式的數對也符合第二式，因此不是唯一解。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "取代未知數時漏掉替換式的一部分。",
      "why": "沒有把等量式視為完整整體。",
      "correction": "用括號包住整個替換式後再代入。"
    },
    {
      "mistake": "括號外係數只乘第一項。",
      "why": "分配律沒有作用到括號內所有項。",
      "correction": "逐項寫出外係數與每一項的乘積。"
    },
    {
      "mistake": "孤立未知數時移項符號錯誤。",
      "why": "只背口訣而未維持等式平衡。",
      "correction": "明寫等式兩邊同加、同減或同除的運算。"
    },
    {
      "mistake": "求出一個未知數就停止。",
      "why": "忘記聯立方程式的解是一組有序數對。",
      "correction": "把第一個結果回代原式求出另一個未知數。"
    },
    {
      "mistake": "只代回剛整理的一元式檢查。",
      "why": "相同的整理錯誤可能無法被發現。",
      "correction": "完整數對須分別回到兩個原方程式驗算。"
    },
    {
      "mistake": "未知數消去就一律判定無解。",
      "why": "沒有區分恆等式與不可能等式。",
      "correction": "結果永真表示無限多解，矛盾才表示無解。"
    }
  ],
  "selfCheck": [
    {
      "prompt": "y=2x-1 適合代入哪裡？",
      "answer": "代入另一式所有 y 的位置。"
    },
    {
      "prompt": "3(x+2) 展開為何？",
      "answer": "3x+6。"
    },
    {
      "prompt": "求出 x 後是否完成？",
      "answer": "否，還要回代求 y。"
    },
    {
      "prompt": "最後怎麼檢查？",
      "answer": "代回兩個原式。"
    }
  ],
  "summary": [
    "先孤立，再完整代入。",
    "括號與分配律是關鍵。",
    "求出一個未知數後要回代並雙式檢驗。"
  ],
  "connections": {
    "previous": "先備技能 system-solution-meaning 已建立必要基礎；本節將其用於「先由一式表示一個未知數，再代入另一式消去。」",
    "next": "下一技能「加減消去法」會延伸目前能力。"
  },
  "figureReferences": [],
  "accessibilityNote": "本講義不需要圖形；所有關係均以文字、等式與逐步運算完整呈現，避擴音前使用 U05 坐標圖形。",
  "lectureReview": {
    "decision": "pass",
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "capBoundary": "pass",
    "skillSpecificEvidence": "逐步重算四個示例，分數解與負數解均代回成立；特別加入 2(x-3) 的錯誤診斷，避免只背流程。",
    "reviewNote": "逐步重算四個示例，分數解與負數解均代回成立；特別加入 2(x-3) 的錯誤診斷，避免只背流程。",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "b1c460e5495758d47dc43de1e48ce43d55ade3a68133e86bc14188c9a9ab709c",
  "conceptNarrative": [
    "代入消去法利用等量替換：若一式已寫成 y=某個 x 的式子，就能在另一式中用整個式子取代 y。取代後只剩一種未知數，聯立問題便化成一元一次方程式。",
    "代入的核心不是把兩式接在一起，而是替換另一式中該未知數的每一處。替換式若含加減或多項，應加括號保留整體；括號外係數必須依分配律乘到每一項。",
    "解出第一個未知數後，須回代任一原式求另一個未知數，最後把完整有序數對代回兩式。若代入化簡成恆等式，兩式可能重合；若化成矛盾式，則沒有共同解。",
    "選擇代入來源時，優先使用已孤立的未知數，或係數為一、負一而容易孤立的式子，可減少分數與符號錯誤。費用、配方與裝置規則也遵循相同的等量替換原理。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "觀察兩式，選擇已孤立或最容易孤立的一個未知數。",
      "check": "選擇能減少分數與負號，且等價變形沒有改變原式。"
    },
    {
      "step": 2,
      "instruction": "把該未知數完整表示成另一未知數的式子，標明括號範圍。",
      "check": "等號兩邊做了相同運算，待代入的整個式子沒有缺項。"
    },
    {
      "step": 3,
      "instruction": "在另一方程式中以括號完整取代對應未知數，並展開合併。",
      "check": "每一處都已替換，括號外係數按分配律乘到每一項。"
    },
    {
      "step": 4,
      "instruction": "解所得一元一次方程式，再回代原式求第二個未知數。",
      "check": "兩個未知數都有確定值，分數與負號計算已約分整理。"
    },
    {
      "step": 5,
      "instruction": "將完整有序數對代回兩個原方程式，並辨識恆等或矛盾情形。",
      "check": "兩式左右皆相等；若未知數消去，也依結果判斷解的型態。"
    }
  ]
};

export const QUESTIONS = [
  {
    "questionId": "u04-s004-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "解聯立方程式 y=x+1、2x+y=7，x 為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "直接代入求第一個未知數",
    "choices": [
      "1",
      "3",
      "6",
      "2"
    ],
    "answerIndex": 3,
    "independentSolution": "代入 y=x+1：2x+(x+1)=7，3x=6，x=2。",
    "explanation": "第一式已把 y 表成 x+1，可直接代入第二式的 y，得到 2x+(x+1)=7。去括號並合併為 3x+1=7，所以 3x=6，求得 x=2；代入時整個 x+1 要取代 y。回代第一式可得 y=3，兩式也都能成立。",
    "steps": [
      "以 x+1 完整取代第二式中的 y。",
      "整理 2x+x+1=7，得到 3x=6。",
      "兩邊同除以三，求得 x=2。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "只由 y=x+1 猜值。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "把 2x+x 合併成 2x。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "解 3x=6 後未除 3。"
      },
      {
        "choice": "2",
        "truth": true,
        "reason": "代入後一元式解得 x=2。"
      }
    ],
    "misconceptionTarget": "只把 y 換成 x 而漏掉常數一，沒有代入完整的 x+1。",
    "prerequisiteCheck": "只需先備 system-solution-meaning，並使用本技能「代入消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「直接代入求第一個未知數」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "係數 1 的直接代入。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "023da4590fbd89c4471f5fdc63a475ddd21fb8eeca00d0aad1680a30e0654202"
  },
  {
    "questionId": "u04-s004-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "在聯立方程式 y=x+1、2x+y=7 中，已求得 x=2，則 y 為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "回代求第二個未知數",
    "choices": [
      "3",
      "1",
      "2",
      "4"
    ],
    "answerIndex": 0,
    "independentSolution": "由 y=x+1，代入 x=2 得 y=3。",
    "explanation": "已知 x=2，代回較直接的第一式 y=x+1，可得 y=2+1=3。聯立方程式的解須包含兩個未知數的值，所以求出 x 後仍要回代求 y，並可代回第二式驗得 4+3=7。",
    "steps": [
      "把已求得的 x=2 代回 y=x+1。",
      "計算 y=2+1=3。",
      "以 2×2+3=7 檢查第二式。"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": true,
        "reason": "2+1=3。"
      },
      {
        "choice": "1",
        "truth": false,
        "reason": "把 y=x-1。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "直接抄 x。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "把 1 當成乘數。"
      }
    ],
    "misconceptionTarget": "得到 x=2 就停止，忘記聯立方程式還需要求出另一個未知數 y。",
    "prerequisiteCheck": "只需先備 system-solution-meaning，並使用本技能「代入消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「回代求第二個未知數」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "單一步驟回代。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "7f19382b6d35825cfd006865498f3da73c6d5e1bb5aa5248f49e41091b11f279"
  },
  {
    "questionId": "u04-s004-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "代入 3(x-2) 時，正確展開為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "正確展開代入括號",
    "choices": [
      "3x-2",
      "3x-6",
      "x-6",
      "3x+6"
    ],
    "answerIndex": 1,
    "independentSolution": "分配律：3×x+3×(-2)=3x-6。",
    "explanation": "依分配律，括號外的三必須分別乘括號內的 x 與負二，因此 3(x-2)=3×x+3×(-2)=3x-6。不能只乘第一項，常數項也受括號外係數作用。任取一個 x 值代入前後兩式，結果都會相同。",
    "steps": [
      "把外部係數三分配給括號內每一項。",
      "計算 3×x=3x 與 3×(-2)=-6。",
      "合併寫成 3x-6。"
    ],
    "optionAnalysis": [
      {
        "choice": "3x-2",
        "truth": false,
        "reason": "只把 3 乘 x。"
      },
      {
        "choice": "3x-6",
        "truth": true,
        "reason": "3 同時乘 x 與 -2。"
      },
      {
        "choice": "x-6",
        "truth": false,
        "reason": "只把 3 乘常數。"
      },
      {
        "choice": "3x+6",
        "truth": false,
        "reason": "負號錯誤。"
      }
    ],
    "misconceptionTarget": "只把三乘到 x，卻原封不動留下負二而寫成 3x-2。",
    "prerequisiteCheck": "只需先備 system-solution-meaning，並使用本技能「代入消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「正確展開代入括號」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "代入法最基本的括號技能。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "d1691402c2badcdb6cdd44e3b7e72fb0a02f116ceba7437f8e46a833033375aa"
  },
  {
    "questionId": "u04-s004-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "學生解聯立方程式 x=y+4、x+2y=1，先把 x=y+4 代入第二式。下列哪一個代入後的方程式正確？",
    "givenConditions": [
      "第一式已表示 x",
      "第二式為 x+2y=1"
    ],
    "target": "判斷正確代入式",
    "choices": [
      "y+4+2=1",
      "x+2(x−4)=1",
      "(y+4)+2y=1",
      "(y+4)+2y=0"
    ],
    "answerIndex": 2,
    "independentSolution": "用第一式的 y+4 完整取代第二式中的 x，得到 (y+4)+2y=1。",
    "explanation": "第一式說明 x 與 y+4 完全相等，因此第二式 x+2y=1 中的 x 應整個換成 y+4，得到 (y+4)+2y=1。括號保留代入範圍，再合併即可求 y。其餘 2y 與右邊一都不能因代入而改變。",
    "steps": [
      "辨認第一式已孤立 x=y+4。",
      "在第二式中以 (y+4) 完整取代 x。",
      "保留其餘 2y 與右邊一，得到 (y+4)+2y=1。"
    ],
    "optionAnalysis": [
      {
        "choice": "y+4+2=1",
        "truth": false,
        "reason": "遺漏了 2y 中的 y。"
      },
      {
        "choice": "x+2(x−4)=1",
        "truth": false,
        "reason": "沒有依題意直接以 y+4 取代 x。"
      },
      {
        "choice": "(y+4)+2y=1",
        "truth": true,
        "reason": "完整替換 x 且其餘項不變。"
      },
      {
        "choice": "(y+4)+2y=0",
        "truth": false,
        "reason": "擅自改變等號右邊。"
      }
    ],
    "misconceptionTarget": "把 y+4 拆開代到不同位置，或遺漏第二式原有的 2y 項。",
    "prerequisiteCheck": "只需先備 system-solution-meaning，並使用本技能「代入消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "代入方向已指定，只有一式與原聯立方程式等價。",
    "boundaryAudit": "代入方向已指定，只有一式與原聯立方程式等價。",
    "difficultyReason": "標準：辨認替換對象並保持等式其餘部分不變。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "f4f5f9bd7b3286caa1d32845714a6618eaab62e1228e056321bd7092f388542e"
  },
  {
    "questionId": "u04-s004-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "解 2x-y=5、y=3x-7，x 為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "處理負係數前的代入括號",
    "choices": [
      "2",
      "6",
      "-2",
      "12"
    ],
    "answerIndex": 0,
    "independentSolution": "2x-(3x-7)=5，2x-3x+7=5，-x=-2，x=2。",
    "explanation": "將 y=3x-7 代入 2x-y=5，得到 2x-(3x-7)=5。去括號後為 2x-3x+7=5，即 -x=-2，所以 x=2；負號須分配到括號內兩項。再由 y=6-7=-1，代回可驗得 4-(-1)=5，且第二式也有負一等於負一，解值正確。",
    "steps": [
      "用 (3x-7) 取代 y，寫成 2x-(3x-7)=5。",
      "去括號並合併，得到 -x+7=5。",
      "整理為 -x=-2，求得 x=2。"
    ],
    "optionAnalysis": [
      {
        "choice": "2",
        "truth": true,
        "reason": "代入後 -x+7=5，故 x=2。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "把 -y 代成 +(3x-7)。"
      },
      {
        "choice": "-2",
        "truth": false,
        "reason": "最後符號錯。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "把常數相加後未解係數。"
      }
    ],
    "misconceptionTarget": "去除 y 前的減號時只改 3x 的符號，沒有把負七變為正七。",
    "prerequisiteCheck": "只需先備 system-solution-meaning，並使用本技能「代入消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「處理負係數前的代入括號」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需正確分配負號。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "1d985de90fc6ca0f442237ee4d78cf4671b77ce126bf2f01c376dd7c2d38e8e6"
  },
  {
    "questionId": "u04-s004-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "解 x=5-2y、3x+y=8，y 為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "得到分數解的代入法",
    "choices": [
      "5/7",
      "-7/5",
      "7/5",
      "7"
    ],
    "answerIndex": 2,
    "independentSolution": "3(5-2y)+y=8，15-5y=8，-5y=-7，y=7/5。",
    "explanation": "把 x=5-2y 代入 3x+y=8，得到 3(5-2y)+y=8。完整展開為 15-6y+y=8，合併成 -5y=-7，兩邊同除以負五，所以 y=7/5。外部三若漏乘負二 y，就不可能得到正確的負五 y，分配律是本題關鍵。",
    "steps": [
      "以 (5-2y) 取代 x，得到 3(5-2y)+y=8。",
      "展開合併為 15-5y=8，再得 -5y=-7。",
      "除以 -5，求得 y=7/5。"
    ],
    "optionAnalysis": [
      {
        "choice": "5/7",
        "truth": false,
        "reason": "顛倒分子分母。"
      },
      {
        "choice": "-7/5",
        "truth": false,
        "reason": "移項符號錯。"
      },
      {
        "choice": "7/5",
        "truth": true,
        "reason": "代入 y=7/5 可使一元式成立。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "漏除係數 5。"
      }
    ],
    "misconceptionTarget": "分配三時只乘常數五，漏乘負二 y，導致 y 的係數錯誤。",
    "prerequisiteCheck": "只需先備 system-solution-meaning，並使用本技能「代入消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「得到分數解的代入法」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需要完整係數整理與分數。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "f89d47b42d0d4421ca9275dd2d18b5f7f1bf7dfbad6226d6ac109cb11901bf62"
  },
  {
    "questionId": "u04-s004-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "解 y=2x-3、4x-2y=6，解的型態為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "用代入法辨認相依方程式",
    "choices": [
      "唯一解 (0,-3)",
      "無解",
      "唯一解 (3,3)",
      "無限多解"
    ],
    "answerIndex": 3,
    "independentSolution": "代入得 4x-2(2x-3)=6，即 4x-4x+6=6，得到 0=0。",
    "explanation": "把 y=2x-3 代入第二式，得到 4x-2(2x-3)=6，化簡為 4x-4x+6=6，也就是 6=6。恆等式表示兩式其實描述同一直線，因此有無限多組共同解。每個符合第一式的 x、y 都會自動滿足第二式。",
    "steps": [
      "以 (2x-3) 取代第二式的 y。",
      "展開得到 4x-4x+6=6。",
      "辨認結果為恆等式 6=6，判定有無限多解。"
    ],
    "optionAnalysis": [
      {
        "choice": "唯一解 (0,-3)",
        "truth": false,
        "reason": "只任取一組就誤認唯一。"
      },
      {
        "choice": "無解",
        "truth": false,
        "reason": "代入後不是矛盾。"
      },
      {
        "choice": "唯一解 (3,3)",
        "truth": false,
        "reason": "此組雖成立但不是唯一。"
      },
      {
        "choice": "無限多解",
        "truth": true,
        "reason": "代入後得到恆等式 0=0。"
      }
    ],
    "misconceptionTarget": "看到 x 項消去就宣稱無解，沒有區分恆等式與矛盾式。",
    "prerequisiteCheck": "只需先備 system-solution-meaning，並使用本技能「代入消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「用代入法辨認相依方程式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "融合代入與特殊解型。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "eb57e32fa5c481d562f45b4234e9352cc123770c80318948004fd2b601f7a39a"
  },
  {
    "questionId": "u04-s004-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "聯立 x=ay+1、2x-4y=2 在 a 為何值時有無限多解？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "判斷參數使兩式等價",
    "choices": [
      "1",
      "2",
      "3",
      "-2"
    ],
    "answerIndex": 1,
    "independentSolution": "代入得 2(ay+1)-4y=2，即 (2a-4)y=0。要對所有 y 都成立，需 2a-4=0，所以 a=2。",
    "explanation": "第二式 2x-4y=2 兩邊同除以二可寫成 x-2y=1，也就是 x=2y+1。要與第一式 x=ay+1 完全相同，y 的係數必須相等，因此 a=2，此時兩式重合而有無限多解。",
    "steps": [
      "將 2x-4y=2 兩邊同除以二。",
      "整理成 x=2y+1。",
      "與 x=ay+1 比較 y 係數，得到 a=2。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "代入得 -2y=0，只得 y=0。"
      },
      {
        "choice": "2",
        "truth": true,
        "reason": "a=2 時兩方程式完全相依。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "代入得 2y=0，只得 y=0。"
      },
      {
        "choice": "-2",
        "truth": false,
        "reason": "代入得 -8y=0，只得 y=0。"
      }
    ],
    "misconceptionTarget": "只比較常數一相同就判定重合，忽略 y 的係數也必須完全一致。",
    "prerequisiteCheck": "只需先備 system-solution-meaning，並使用本技能「代入消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「判斷參數使兩式等價」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需區分「有一解」與「對所有第一式解成立」。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "b6f13c7047dbbcf1dec9f3ae354ee10661c16b744ceb27f83be57b0857137c4d"
  },
  {
    "questionId": "u04-s004-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "解 y=(x+4)/3、2x+y=8，x 為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "處理分式表示的未知數",
    "choices": [
      "4/7",
      "12/7",
      "20/7",
      "7/20"
    ],
    "answerIndex": 2,
    "independentSolution": "代入得 2x+(x+4)/3=8；乘 3 得 6x+x+4=24，7x=20，x=20/7。",
    "explanation": "把 y=(x+4)/3 代入 2x+y=8，得到 2x+(x+4)/3=8。等式兩邊同乘三為 6x+x+4=24，故 7x=20，最後求得 x=20/7。分母三作用在整個 x+4，清除分母時等式內每一項都必須同乘三，解值確定。",
    "steps": [
      "以 (x+4)/3 取代 y。",
      "等式兩邊同乘三，化為 6x+x+4=24。",
      "整理得 7x=20，所以 x=20/7。"
    ],
    "optionAnalysis": [
      {
        "choice": "4/7",
        "truth": false,
        "reason": "漏掉 2x 的貢獻。"
      },
      {
        "choice": "12/7",
        "truth": false,
        "reason": "常數移項錯。"
      },
      {
        "choice": "20/7",
        "truth": true,
        "reason": "一元式整理後唯一得到 20/7。"
      },
      {
        "choice": "7/20",
        "truth": false,
        "reason": "顛倒分數。"
      }
    ],
    "misconceptionTarget": "清除分母時只把三乘到分式，沒有讓等式中的其他項同乘三。",
    "prerequisiteCheck": "只需先備 system-solution-meaning，並使用本技能「代入消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「處理分式表示的未知數」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需結合代入與去分母。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "26664708206421bf1ddb673a4753ce0065361be7e8fdf9b499e8677737482e1e"
  },
  {
    "questionId": "u04-s004-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "方案 A 的費用 y=50x+100，某次帳單又滿足 y=400。使用次數 x 是多少？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由線性費用模型反求使用量",
    "choices": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answerIndex": 1,
    "independentSolution": "將 y=400 代入 400=50x+100，50x=300，x=6。",
    "explanation": "帳單條件 y=400 可直接代入費用式 y=50x+100，得到 400=50x+100。扣除固定費一百元後 50x=300，再除以每次五十元，求得使用六次。回算六次的變動費三百元，加固定費後正好四百元。",
    "steps": [
      "用帳單金額四百取代費用式中的 y。",
      "兩邊同減固定費一百，得到 50x=300。",
      "兩邊同除以五十，求得 x=6。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "只計 400÷50。"
      },
      {
        "choice": "6",
        "truth": true,
        "reason": "50×6+100=400。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "把固定費加到右邊。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "忽略固定費後直接除。"
      }
    ],
    "misconceptionTarget": "直接用四百除以五十，忘記先扣除不隨次數改變的固定費。",
    "prerequisiteCheck": "只需先備 system-solution-meaning，並使用本技能「代入消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "元=元/次×次+元，單位一致。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由線性費用模型反求使用量」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "方案文字決定代入式中的固定項。",
    "literacyContextNecessity": "固定費 100 與每次 50 都是求使用次數的必要資料。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "6a84abdac24c9b83cd0739af8492bb8822ae6b45891f50f35d6d58272229e287"
  },
  {
    "questionId": "u04-s004-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "感測器轉換式為 y=2x-5，警示規則為 x+y=16。警示發生時 x 為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "整合兩條裝置規則",
    "choices": [
      "5",
      "11",
      "21/2",
      "7"
    ],
    "answerIndex": 3,
    "independentSolution": "代入 y=2x-5：x+2x-5=16，3x=21，x=7。",
    "explanation": "把轉換式 y=2x-5 代入警示規則 x+y=16，可得 x+(2x-5)=16。合併為 3x-5=16，兩邊同加五得 3x=21，所以警示發生時 x=7。此時 y=9，且 7+9=16，兩條裝置規則都同時成立，警示輸入唯一確定。",
    "steps": [
      "以 (2x-5) 取代警示式中的 y。",
      "合併為 3x-5=16，再整理成 3x=21。",
      "兩邊同除以三，求得 x=7。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "直接令 y=5。"
      },
      {
        "choice": "11",
        "truth": false,
        "reason": "把 -5 移項方向錯。"
      },
      {
        "choice": "21/2",
        "truth": false,
        "reason": "未合併 x 項。"
      },
      {
        "choice": "7",
        "truth": true,
        "reason": "x=7 時 y=9，且 7+9=16。"
      }
    ],
    "misconceptionTarget": "分開處理兩條規則，沒有把同一時刻的 y 表示式代入共同條件。",
    "prerequisiteCheck": "只需先備 system-solution-meaning，並使用本技能「代入消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「整合兩條裝置規則」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "兩條規則都對 x 有限制，情境必要。",
    "literacyContextNecessity": "轉換式與警示總和規則共同決定警示輸入。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "8d51f5bab505cfefb33790d4ddd4035b155eb0990ba39be10bffcc94492d0da4"
  },
  {
    "questionId": "u04-s004-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "配方紀錄寫「B 用量 y 比 A 用量 x 多 2 克」，且總用量為 14 克。用代入法解得 A 用量多少？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由配方差額與總量求用量",
    "choices": [
      "6 克",
      "8 克",
      "7 克",
      "4 克"
    ],
    "answerIndex": 0,
    "independentSolution": "y=x+2，x+y=14；代入得 x+x+2=14，2x=12，x=6。",
    "explanation": "B 比 A 多二公克，應寫成 y=x+2；總用量則是 x+y=14。代入後 x+(x+2)=14，得到 2x+2=14，故 2x=12，A 用量 x=6 公克。B 為八公克，六加八正好十四，且 B 確實比 A 多二公克，方向無誤。",
    "steps": [
      "把「B 比 A 多二」翻成 y=x+2。",
      "代入總量式，得到 x+(x+2)=14。",
      "整理 2x=12，求得 A 用量六公克。"
    ],
    "optionAnalysis": [
      {
        "choice": "6 克",
        "truth": true,
        "reason": "A 6 克、B 8 克，合計 14 克且相差 2 克。"
      },
      {
        "choice": "8 克",
        "truth": false,
        "reason": "這是 B 用量。"
      },
      {
        "choice": "7 克",
        "truth": false,
        "reason": "直接平均而忽略差 2。"
      },
      {
        "choice": "4 克",
        "truth": false,
        "reason": "把差額重複扣除。"
      }
    ],
    "misconceptionTarget": "把較多與較少方向顛倒，錯寫成 x=y+2 或 y=x-2。",
    "prerequisiteCheck": "只需先備 system-solution-meaning，並使用本技能「代入消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "兩未知數與總量均為克。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由配方差額與總量求用量」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "配方中的差 2 與總量 14 是兩個必要條件。",
    "literacyContextNecessity": "若移除差額或總量，A 用量無法唯一確定。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "b94a749eeb4da7f5101f6911d70023efd74debf0c6fbac78082ca456c910ea2c"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u04-s004-cr001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "standard",
    "itemType": "constructed-response",
    "prompt": "用代入消去法解 y=2x-1、3x+y=14，並代回兩式檢驗。",
    "requiredWork": [
      "必須展示代入、回代與雙式檢驗。"
    ],
    "standardSolution": [
      "第一式已孤立 y，將 y=2x-1 代入 3x+y=14，得到 3x+(2x-1)=14。",
      "合併同類項得 5x-1=14，所以 5x=15、x=3；回代第一式得 y=2×3-1=5。",
      "檢驗第一式：5=2×3-1；檢驗第二式：3×3+5=14。兩式均成立，解為 (3,5)，所以代入、回代與有序數對順序都一致。"
    ],
    "alternativeMethods": [
      "可由第二式寫 y=14-3x，再與 y=2x-1 相等。"
    ],
    "reasoningSteps": [
      "選擇已表示成 y=2x-1 的第一式作為代入來源。",
      "用整個 2x-1 取代第二式的 y，解出 x 後回代求 y。",
      "將所得有序數對分別代入兩個原方程式，核對左右相等。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整得到 (3,5) 並驗證。"
      },
      {
        "score": 2,
        "criteria": "答案正確且主要步驟完整，但漏一式檢驗。"
      },
      {
        "score": 1,
        "criteria": "正確完成代入並求出 x，回代錯誤。"
      },
      {
        "score": 0,
        "criteria": "沒有形成一元式或答案不滿足原式。"
      }
    ],
    "partialCreditRules": [
      "代入與求 x 一分，求 y 一分，驗證一分。"
    ],
    "followThroughPolicy": "若 x 因算術錯但回代與檢驗依自身結果一致，可保留後續方法分；錯誤檢驗不得判定通過。",
    "unitNotationRules": "本題無單位；答案寫 (x,y)=(3,5)。",
    "answerOnlyPolicy": "只答 (3,5) 最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "(3,5)。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立重算 5x-1=14，x=3，回代 y=5，兩式均成立。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "b047cd448a1ee870e1cb54a2670092470c4fbb5e668ec5923cc130a333aaae62",
    "commonErrors": [
      "代入第二式時漏掉括號或常數負一，錯寫成 3x+2x=14。",
      "解出 x=3 就停止，沒有回代求出共同解所需的 y。",
      "只用代入後的一元式檢查，沒有回到兩個原方程式完成驗證。"
    ]
  },
  {
    "questionId": "u04-s004-cr002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "advanced",
    "itemType": "constructed-response",
    "prompt": "用代入法解 x=5-2y、3x+y=8。另指出把 3(5-2y) 寫成 15-2y 的錯誤。",
    "requiredWork": [
      "給分數解。",
      "說明分配律錯誤。"
    ],
    "standardSolution": [
      "把 x=5-2y 代入 3x+y=8，應寫成 3(5-2y)+y=8；分配律給出 15-6y+y=8。",
      "合併為 15-5y=8，故 -5y=-7、y=7/5；再回代 x=5-2×(7/5)=11/5。",
      "所以解為 (11/5,7/5)。把 3(5-2y) 寫成 15-2y 的錯誤，是三只乘到五而未乘括號內的 -2y；正確分配後兩項都必須帶有係數三。"
    ],
    "alternativeMethods": [
      "可先由 x=5-2y 代入；或由第二式 y=8-3x 再代入第一式。"
    ],
    "reasoningSteps": [
      "以括號保留 5-2y 的完整範圍，代入另一個方程式。",
      "用分配律把三乘到括號內兩項，再合併 y 項並求出 y。",
      "回代求 x，最後指出錯誤展開違反分配律的確切位置。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "(11/5,7/5) 與錯誤診斷完整。"
      },
      {
        "score": 2,
        "criteria": "答案正確但診斷不完整，或一處化簡小錯。"
      },
      {
        "score": 1,
        "criteria": "正確寫出 15-6y+y=8，後續有算術錯。"
      },
      {
        "score": 0,
        "criteria": "採用 15-2y 且未識別錯誤。"
      }
    ],
    "partialCreditRules": [
      "解題兩分，錯誤分析一分。"
    ],
    "followThroughPolicy": "若分配律正確但分數約分錯誤，後續依結果回代可給 2 分。",
    "unitNotationRules": "分數可寫 11/5、7/5；不可用未經說明的近似小數替代。",
    "answerOnlyPolicy": "只答數對最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "x=11/5、y=7/5。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "重新代入兩原式分別得到 11/5=5-14/5 與 33/5+7/5=8。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "26421dde86e18d8ca921d440739ffaed6236ba6cbc3e5a5461664d46e6a2de74",
    "commonErrors": [
      "只把括號外的三乘到五，將 3(5-2y) 錯展開為 15-2y。",
      "由 -5y=-7 求 y 時只消去一個負號，得到錯誤的負七分之五。",
      "回代計算 x 時把 2×(7/5) 誤寫成 7/5，漏掉係數二。"
    ]
  }
];

export const DRAWING_SPECS = [];
