// SERIALIZATION OF REVIEWED CHATGPT_HUMAN_AUTHORED_R1 CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u04-s005-lecture-r1",
  "unitId": "u04",
  "numericUnitId": 4,
  "topicId": "u04-system-methods",
  "skillId": "system-elimination-method",
  "lockedSkillTitle": "加減消去法",
  "title": "加減消去法：讓同一未知數的係數抵消",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "exactSkillIdentity": {
    "unitTitle": "二元一次聯立方程式",
    "skillTitle": "加減消去法",
    "scope": "利用係數相同相減或係數相反相加，消去一個未知數。"
  },
  "prerequisiteBridge": "先備技能 system-substitution-method 已建立必要基礎；本節將其用於「利用係數相同相減或係數相反相加，消去一個未知數。」",
  "learningGoals": [
    "能辨認相同係數要相減、相反係數要相加。",
    "能整列相加減，包含常數項。",
    "能解出一元後回代。",
    "能診斷整列減法的符號錯誤。"
  ],
  "vocabulary": [
    {
      "term": "消去",
      "definition": "運算後某未知數的係數變成 0。"
    },
    {
      "term": "同係數",
      "definition": "兩式中某未知數係數相同。"
    },
    {
      "term": "相反係數",
      "definition": "係數互為相反數。"
    },
    {
      "term": "整列運算",
      "definition": "方程式左右所有對應項一起相加或相減。"
    }
  ],
  "notation": [
    {
      "symbol": "①−②",
      "meaning": "第一式的每一項減第二式對應項。"
    },
    {
      "symbol": "①+②",
      "meaning": "兩式逐項相加。"
    }
  ],
  "conceptDevelopment": [
    "若 y 的係數相同，兩式相減可使 y-y=0；若係數為 3 與 -3，兩式相加可使 3y+(-3y)=0。",
    "減去整個第二式時，第二式每一項都要變號。",
    "消去只是將二元化成一元，得到一個值後仍要回代。"
  ],
  "definitions": [
    {
      "name": "加減消去法",
      "statement": "把兩個等式逐項相加或相減，使一個未知數消失。"
    }
  ],
  "formulas": [
    {
      "formula": "(ax+by=c)−(dx+by=e) ⇒ (a-d)x=c-e",
      "conditions": [
        "y 係數相同。"
      ],
      "meaning": "相減消去 y。"
    },
    {
      "formula": "(ax+by=c)+(dx-by=e) ⇒ (a+d)x=c+e",
      "conditions": [
        "y 係數相反。"
      ],
      "meaning": "相加消去 y。"
    }
  ],
  "invalidUseCases": [
    "不能只減左邊不減右邊。",
    "不能把「減第二式」只作用在第二式第一項。",
    "係數既不相同也不相反時，需先使用下一技能的倍數放大。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "對齊同類項",
      "check": "x、y、常數排成同欄。"
    },
    {
      "step": 2,
      "instruction": "選擇要消去的未知數",
      "check": "觀察係數關係。"
    },
    {
      "step": 3,
      "instruction": "決定相加或相減",
      "check": "相反相加、相同相減。"
    },
    {
      "step": 4,
      "instruction": "逐項運算",
      "check": "常數也要一起。"
    },
    {
      "step": 5,
      "instruction": "解一元並回代",
      "check": "最後雙式檢驗。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u04-s005-example-a",
      "prompt": "用加減法解 x+y=9、x-y=3。",
      "solutionSteps": [
        "兩式相加消去 y，得到 2x=12，所以 x=6。",
        "回代 x+y=9，求得 y=3。"
      ],
      "answer": "(x,y)=(6,3)。",
      "why": "y 的係數一與負一互為相反數，相加後正好抵消。求得 x=6 後回代得到 y=3，驗算差額 6-3=3，兩式都成立，總和 6+3=9 也同步通過。"
    },
    {
      "exampleId": "u04-s005-example-b",
      "prompt": "用加減法解 3x+2y=18、3x-y=9。",
      "solutionSteps": [
        "第一式減第二式，得到 3y=9，所以 y=3。",
        "代入 3x-y=9，得到 3x=12，所以 x=4。"
      ],
      "answer": "(x,y)=(4,3)。",
      "why": "兩式 x 係數相同，以整式相減可直接消去 x。第二式的負 y 被減後成正 y，因此共有三個 y；回代後所得四與三通過兩式。"
    },
    {
      "exampleId": "u04-s005-example-c",
      "prompt": "用加減法解 2x+3y=13、4x-y=5。",
      "solutionSteps": [
        "第一式乘二得 4x+6y=26，再減第二式得 7y=21。",
        "求得 y=3，代入第一式得 2x=4，所以 x=2。"
      ],
      "answer": "(x,y)=(2,3)。",
      "why": "先把第一式整體乘二，使 x 係數同為四，再相減即可消去 x。倍乘包含右邊十三，所得二十六不可漏；回代證實兩式皆成立。"
    },
    {
      "exampleId": "u04-s005-example-d",
      "prompt": "判斷 x+2y=7、2x+4y=14 的解型態。",
      "solutionSteps": [
        "把第一式乘二，得到 2x+4y=14。",
        "與第二式相減得到 0=0。"
      ],
      "answer": "兩式等價，有無限多解。",
      "why": "第二式就是第一式的兩倍，沒有提供新的獨立限制。消去後出現永遠成立的 0=0，所以每個符合第一式的數對都同時符合第二式。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "相反係數選相減而無法消去。",
      "why": "背誦口訣卻未計算係數結果。",
      "correction": "先試算係數的和或差，選擇會得到零者。"
    },
    {
      "mistake": "倍乘時只乘準備消去的項。",
      "why": "破壞等式原本的相等關係。",
      "correction": "等式左邊每一項與右邊常數都同乘。"
    },
    {
      "mistake": "整式相減時第二式沒有全部變號。",
      "why": "減號的作用範圍未用括號標示。",
      "correction": "先加括號，再把第二式各項及常數逐一相減。"
    },
    {
      "mistake": "消去後忘記除以剩餘未知數係數。",
      "why": "把 ax=b 直接讀成 x=b。",
      "correction": "等式兩邊同除以非零係數 a。"
    },
    {
      "mistake": "得到一個未知數便停止。",
      "why": "沒有完成聯立解所需的兩個分量。",
      "correction": "回代任一原式求第二個未知數並寫成有序數對。"
    },
    {
      "mistake": "消去得到 0=0 就寫成唯一解零。",
      "why": "誤把恆等式當作未知數值。",
      "correction": "0=0 表示資訊重複，應判斷為無限多解。"
    }
  ],
  "selfCheck": [
    {
      "prompt": "y 係數 2 與 -2 應相加還相減？",
      "answer": "相加。"
    },
    {
      "prompt": "x 係數皆為 3 應如何消去？",
      "answer": "兩式相減。"
    },
    {
      "prompt": "①−② 時第二式的 -y 會怎樣？",
      "answer": "減去 -y 變成 +y。"
    },
    {
      "prompt": "消去後下一步？",
      "answer": "解一元並回代。"
    }
  ],
  "summary": [
    "相反係數相加，相同係數相減。",
    "整個方程式逐項運算。",
    "消去後回代並檢驗。"
  ],
  "connections": {
    "previous": "先備技能 system-substitution-method 已建立必要基礎；本節將其用於「利用係數相同相減或係數相反相加，消去一個未知數。」",
    "next": "下一技能「係數放大後消去」會延伸目前能力。"
  },
  "figureReferences": [],
  "accessibilityNote": "本講義不需要圖形；所有關係均以文字、等式與逐步運算完整呈現，避擴音前使用 U05 坐標圖形。",
  "lectureReview": {
    "decision": "pass",
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "capBoundary": "pass",
    "skillSpecificEvidence": "重新逐欄核算相加與整式相減示例，包含分數結果；所有符號與常數運算正確，且明確區分本節直接消去與下一節倍數放大。",
    "reviewNote": "重新逐欄核算相加與整式相減示例，包含分數結果；所有符號與常數運算正確，且明確區分本節直接消去與下一節倍數放大。",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "bb9de2a55fd497c7181c5afc825a92a4cc33a3dae22acbfe8099fe9decb2ea6f",
  "conceptNarrative": [
    "加減消去法把兩個等式逐項相加或相減，安排某個未知數的係數合成零。相反係數用相加，相同係數用相減；真正判準是運算後係數是否為零，不是死背口訣。",
    "若係數尚未相同或相反，可以先將某一式或兩式整體乘適當非零數。整體倍乘時，等號左邊每一項與右邊常數都要同乘，不能只改準備消去的那一項。",
    "兩式相減時應把第二式放入括號，減號要分配到其中每一項與右邊常數。消去後得到一元一次方程式，解出一個未知數，再回代原式求出另一個未知數。",
    "若消去後得到 0=0，兩式可能是同一限制的倍數而有無限多解；若得到 0 等於非零常數，則兩式互相矛盾而無解。完整回驗可確認符號、倍乘與回代都正確。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "將兩式的同類項與等號右邊常數上下對齊。",
      "check": "x 項、y 項及常數各在同一欄，缺項以零係數理解。"
    },
    {
      "step": 2,
      "instruction": "選擇要消去的未知數，比較其係數是否相同、相反或需先倍乘。",
      "check": "所選運算會讓目標係數合成零，且計算量較簡潔。"
    },
    {
      "step": 3,
      "instruction": "需要倍乘時處理整個等式，再逐項相加或以括號整式相減。",
      "check": "每一項和右邊常數都接受相同倍乘或加減，符號無遺漏。"
    },
    {
      "step": 4,
      "instruction": "解消去後的一元方程式，並回代任一原式求另一未知數。",
      "check": "未知數係數已正確除去，答案形成完整有序數對。"
    },
    {
      "step": 5,
      "instruction": "把有序數對代回兩式；若所有未知數消失，依恆等或矛盾判斷型態。",
      "check": "兩式左右相等，或特殊解型態有明確的等式證據。"
    }
  ]
};

export const QUESTIONS = [
  {
    "questionId": "u04-s005-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "解 x+y=7、x-y=1，將兩式相加會得到什麼？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "辨認相反係數相加",
    "choices": [
      "2x=8",
      "2y=8",
      "x=6",
      "0=8"
    ],
    "answerIndex": 0,
    "independentSolution": "逐項相加：(x+x)+(y-y)=7+1，得 2x=8。",
    "explanation": "兩式中 y 的係數分別為正一與負一，逐項相加時 y+(-y)=0，因此 y 被消去；x+x=2x，右邊 7+1=8，所以得到 2x=8。相反係數應使用相加。等號左右的三個欄位都必須逐項處理。",
    "steps": [
      "把兩式的 x 項、y 項與常數上下對齊。",
      "逐項相加，利用 y-y=0 消去 y。",
      "合併 x+x 與 7+1，得到 2x=8。"
    ],
    "optionAnalysis": [
      {
        "choice": "2x=8",
        "truth": true,
        "reason": "y+(-y)=0，x+x=2x。"
      },
      {
        "choice": "2y=8",
        "truth": false,
        "reason": "相加時 y 會相消。"
      },
      {
        "choice": "x=6",
        "truth": false,
        "reason": "x 項相加應為 2x。"
      },
      {
        "choice": "0=8",
        "truth": false,
        "reason": "x 不會相消。"
      }
    ],
    "misconceptionTarget": "看到 y 的符號不同反而選相減，使兩個 y 項無法抵消。",
    "prerequisiteCheck": "只需先備 system-substitution-method，並使用本技能「加減消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「辨認相反係數相加」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "最直接的消去步驟。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "e21ca4a47971e9dc9199b24b9ecff35667b229323af3ee421830d2419185b2ab"
  },
  {
    "questionId": "u04-s005-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "2x+y=9 與 x+y=5 相減，若用第一式減第二式，結果為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "使用相同係數相減",
    "choices": [
      "x=14",
      "3x=4",
      "x=4",
      "y=4"
    ],
    "answerIndex": 2,
    "independentSolution": "(2x-x)+(y-y)=9-5，得 x=4。",
    "explanation": "依指定順序用第一式減第二式：(2x+y)-(x+y)=9-5。左邊為 2x-x+y-y=x，右邊為四，因此得到 x=4；減法必須作用於第二式的每一項。用括號可以清楚保留整式相減的範圍。",
    "steps": [
      "用括號寫成 (2x+y)-(x+y)=9-5。",
      "逐項相減，合併為 x+0=4。",
      "寫出消去 y 後的結果 x=4。"
    ],
    "optionAnalysis": [
      {
        "choice": "x=14",
        "truth": false,
        "reason": "右邊錯用加法。"
      },
      {
        "choice": "3x=4",
        "truth": false,
        "reason": "x-x 計算錯。"
      },
      {
        "choice": "x=4",
        "truth": true,
        "reason": "逐項相減後只剩 x=4。"
      },
      {
        "choice": "y=4",
        "truth": false,
        "reason": "相同的 y 係數會消去。"
      }
    ],
    "misconceptionTarget": "只相減右邊常數或只處理 y 項，沒有把整個第二式逐項相減。",
    "prerequisiteCheck": "只需先備 system-substitution-method，並使用本技能「加減消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「使用相同係數相減」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "一步整列相減。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "cbf2b443ca47f663c263645bd20abc17375a302cfd423a906aef1890815f59a5"
  },
  {
    "questionId": "u04-s005-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "若兩式中 y 的係數分別為 3 與 -3，應用哪種運算消去 y？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "選擇加或減",
    "choices": [
      "兩式相減",
      "兩式相加",
      "只把第一式乘 3",
      "只看常數決定"
    ],
    "answerIndex": 1,
    "independentSolution": "3y+(-3y)=0，所以應相加。",
    "explanation": "y 的兩個係數三與負三互為相反數，相加後 3y+(-3y)=0，正好消去 y。因此應把兩式相加；若相減，係數會變成六而不是零，無法達成消去目的。",
    "steps": [
      "比較 y 係數三與負三的符號及大小。",
      "計算兩係數的和 3+(-3)=0。",
      "選擇兩式相加以消去 y。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩式相減",
        "truth": false,
        "reason": "會得到 6y。"
      },
      {
        "choice": "兩式相加",
        "truth": true,
        "reason": "相反數相加為 0。"
      },
      {
        "choice": "只把第一式乘 3",
        "truth": false,
        "reason": "不會使係數抵消。"
      },
      {
        "choice": "只看常數決定",
        "truth": false,
        "reason": "消去由未知數係數決定。"
      }
    ],
    "misconceptionTarget": "死背相同相加、相反相減的錯誤口訣，未實際檢查係數和是否為零。",
    "prerequisiteCheck": "只需先備 system-substitution-method，並使用本技能「加減消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「選擇加或減」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "只需係數判斷。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "4975d92e53508c47ed8a5fac5164cd6b974eaaa19d3afcc90fe8a7c5f92bf7be"
  },
  {
    "questionId": "u04-s005-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "解題者要用加減消去法處理 3x−2y=4、x+2y=8。兩式相加後得到 4x=12。下列哪一個後續步驟正確？",
    "givenConditions": [
      "兩式相加已消去 y",
      "所得等式為 4x=12"
    ],
    "target": "判斷消去後的正確處理",
    "choices": [
      "x=12−4",
      "x=12×4",
      "x=12÷3",
      "x=12÷4"
    ],
    "answerIndex": 3,
    "independentSolution": "由 4x=12，等號兩邊同除以 4，得到 x=3；因此應寫 x=12÷4。",
    "explanation": "兩式相加得到 4x=12 後，為保持等式成立，左右兩邊都要同除以 x 的係數四，所以 x=12÷4=3。不能用減四或乘四取代，因為目標是解除四與 x 的乘法。",
    "steps": [
      "從消去後的一元式 4x=12 出發。",
      "在等式左右兩邊同除以四。",
      "化簡得到 x=12÷4=3。"
    ],
    "optionAnalysis": [
      {
        "choice": "x=12−4",
        "truth": false,
        "reason": "減去4不是等量除法。"
      },
      {
        "choice": "x=12×4",
        "truth": false,
        "reason": "乘4會使左邊成為16x。"
      },
      {
        "choice": "x=12÷3",
        "truth": false,
        "reason": "除以3把常數誤當係數。"
      },
      {
        "choice": "x=12÷4",
        "truth": true,
        "reason": "兩邊同除以4，得到x=3。"
      }
    ],
    "misconceptionTarget": "消去另一未知數後忘記除以 x 的係數，或把除法誤作減法。",
    "prerequisiteCheck": "只需先備 system-substitution-method，並使用本技能「加減消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "題幹已明示消去結果，只考後續等量運算。",
    "boundaryAudit": "題幹已明示消去結果，只考後續等量運算。",
    "difficultyReason": "標準：重點是消去後的等量處理。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "832f708dd8c9778fa123018cf2c285d7c65cede6effccf73acd07b7445dbf6ec"
  },
  {
    "questionId": "u04-s005-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "要消去聯立方程式 4x+y=11、2x+y=7 中的 x，並規定最後使用「第一式減去處理後的第二式」。第二式應先做哪一個處理？",
    "givenConditions": [
      "第一式的 x 係數為4",
      "第二式的 x 係數為2"
    ],
    "target": "選擇建立相同 x 係數的方法",
    "choices": [
      "第二式除以2",
      "第二式乘以2",
      "第二式乘以−2",
      "第二式只把 x 項乘以2"
    ],
    "answerIndex": 1,
    "independentSolution": "第二式整體乘以 2 得 4x+2y=14，第一式再減去此式即可消去 x。",
    "explanation": "第一式的 x 係數為四，第二式為二；因最後規定第一式減處理後的第二式，須先把第二式整式乘二，使其成為 4x+2y=14。相減時 4x-4x 才會等於零。",
    "steps": [
      "比較兩式 x 係數四與二。",
      "將第二式每一項及右邊七都乘二。",
      "再以第一式減新第二式，使 x 項抵消。"
    ],
    "optionAnalysis": [
      {
        "choice": "第二式除以2",
        "truth": false,
        "reason": "除以2後x係數為1。"
      },
      {
        "choice": "第二式乘以2",
        "truth": true,
        "reason": "整式乘2後x係數成為4。"
      },
      {
        "choice": "第二式乘以−2",
        "truth": false,
        "reason": "乘−2適合相加，不符指定相減。"
      },
      {
        "choice": "第二式只把 x 項乘以2",
        "truth": false,
        "reason": "只乘x項會破壞等式。"
      }
    ],
    "misconceptionTarget": "只把第二式的 2x 乘二，卻沒有同步處理 y 項與等號右邊。",
    "prerequisiteCheck": "只需先備 system-substitution-method，並使用本技能「加減消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "題幹明定相減策略，只有整式乘2符合。",
    "boundaryAudit": "題幹明定相減策略，只有整式乘2符合。",
    "difficultyReason": "標準：先設計消去策略，再對整式作等量倍乘。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "760f2efd05c1d92e04133b81bf10c30de16fa36fa923422d119ec0b2c3f3fd70"
  },
  {
    "questionId": "u04-s005-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "計算 (x+y=5)−(x-2y=1) 的左邊，正確為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "處理整列減法符號",
    "choices": [
      "-y",
      "y",
      "2y",
      "3y"
    ],
    "answerIndex": 3,
    "independentSolution": "x+y-(x-2y)=x+y-x+2y=3y。",
    "explanation": "左邊是 (x+y)-(x-2y)。去除第二個括號時，每一項都要變號，得到 x+y-x+2y；x 項抵消，y+2y=3y。因此整式相減後的左邊是 3y。關鍵是減去負 2y 會轉成加 2y，而不是維持負號。",
    "steps": [
      "把第二式完整放入減號後的括號。",
      "去括號，將 x-2y 改成 -x+2y。",
      "合併 x-x=0 與 y+2y=3y。"
    ],
    "optionAnalysis": [
      {
        "choice": "-y",
        "truth": false,
        "reason": "未把減號分配到 -2y。"
      },
      {
        "choice": "y",
        "truth": false,
        "reason": "漏掉第二式的 2y。"
      },
      {
        "choice": "2y",
        "truth": false,
        "reason": "把 y+2y 合併錯。"
      },
      {
        "choice": "3y",
        "truth": true,
        "reason": "y-(-2y)=3y。"
      }
    ],
    "misconceptionTarget": "減號只作用到第二式的 x，沒有把 -2y 的符號改成正 2y。",
    "prerequisiteCheck": "只需先備 system-substitution-method，並使用本技能「加減消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「處理整列減法符號」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "專門診斷符號。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "10ebff37c28826ab1e7a07ec9ab503e8185808385339fb3ea9b52c3ba1c63ac8"
  },
  {
    "questionId": "u04-s005-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "解 5x+3y=1、5x-2y=16，y 為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "含負結果的整列相減",
    "choices": [
      "-3",
      "3",
      "-5",
      "15"
    ],
    "answerIndex": 0,
    "independentSolution": "第一式減第二式：5y=1-16=-15，所以 y=-3。",
    "explanation": "兩式 x 係數相同，用第一式減第二式可消去 x：(5x+3y)-(5x-2y)=1-16。左邊成 5y，右邊為 -15，所以 5y=-15，求得 y=-3。相減順序在左右兩邊必須一致，不能只顛倒常數。",
    "steps": [
      "選擇第一式減第二式以消去 5x。",
      "整式相減得到 3y-(-2y)=1-16。",
      "化為 5y=-15，兩邊除以五得 y=-3。"
    ],
    "optionAnalysis": [
      {
        "choice": "-3",
        "truth": true,
        "reason": "5(-3)=-15。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "忽略相減順序造成負號。"
      },
      {
        "choice": "-5",
        "truth": false,
        "reason": "把 5y=-15 解錯。"
      },
      {
        "choice": "15",
        "truth": false,
        "reason": "未除係數且符號錯。"
      }
    ],
    "misconceptionTarget": "把右邊 1-16 的順序顛倒，或把減去負 2y 算成減 2y。",
    "prerequisiteCheck": "只需先備 system-substitution-method，並使用本技能「加減消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「含負結果的整列相減」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需保持指定相減方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "c6388dbd8f34f17a34d5dc05649b455c09c27bf1f2ecf1e4c7675f28dc61ab95"
  },
  {
    "questionId": "u04-s005-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "解 -2x+4y=10、2x+y=5，y 為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "處理負係數消去",
    "choices": [
      "1",
      "5",
      "3",
      "-3"
    ],
    "answerIndex": 2,
    "independentSolution": "兩式相加得 5y=15，y=3。",
    "explanation": "兩式 x 係數為負二與正二，互為相反數，所以直接相加。x 項消去後得到 4y+y=10+5，即 5y=15，兩邊同除以五，求得 y=3。把 y=3 回代第二式可再求得 x=1，驗算前後一致。",
    "steps": [
      "辨認 -2x 與 2x 相加可抵消。",
      "將兩式逐項相加，得到 5y=15。",
      "兩邊同除以五，求得 y=3。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "把 4y+y 誤成 4y。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "未除以 5。"
      },
      {
        "choice": "3",
        "truth": true,
        "reason": "代入 y=3 可由第二式求 x=1。"
      },
      {
        "choice": "-3",
        "truth": false,
        "reason": "相加後符號誤判。"
      }
    ],
    "misconceptionTarget": "一看到負係數就選相減，沒有檢查相加後係數才會成為零。",
    "prerequisiteCheck": "只需先備 system-substitution-method，並使用本技能「加減消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「處理負係數消去」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需判斷相反係數。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "6970057c33fa1d35beffc6ba7e8d4245e9ff807f8709f886bbeb2232d2155095"
  },
  {
    "questionId": "u04-s005-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "若用 ①−② 消去 x，①為 3x-2y=7，②為 3x+5y=-7，得到的 y 為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "同時處理兩處負號",
    "choices": [
      "2",
      "-14/3",
      "14/7",
      "-2"
    ],
    "answerIndex": 3,
    "independentSolution": "①−②：-7y=7-(-7)=14，所以 y=-2。",
    "explanation": "依 ①−② 計算，(3x-2y)-(3x+5y)=7-(-7)。左邊化為 -7y，右邊因減負七而為十四，所以 -7y=14，兩邊除以負七得到 y=-2。整式減法中的兩個負號都須保留到合併完成。",
    "steps": [
      "以括號寫出第一式減第二式。",
      "合併左邊為 -2y-5y=-7y，右邊為十四。",
      "解 -7y=14，得到 y=-2。"
    ],
    "optionAnalysis": [
      {
        "choice": "2",
        "truth": false,
        "reason": "右邊或 y 係數符號顛倒。"
      },
      {
        "choice": "-14/3",
        "truth": false,
        "reason": "把 -7y 誤為 -3y。"
      },
      {
        "choice": "14/7",
        "truth": false,
        "reason": "漏負號。"
      },
      {
        "choice": "-2",
        "truth": true,
        "reason": "-7(-2)=14。"
      }
    ],
    "misconceptionTarget": "把 7-(-7) 算成零，或漏改第二式正 5y 前的整式減號。",
    "prerequisiteCheck": "只需先備 system-substitution-method，並使用本技能「加減消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「同時處理兩處負號」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "雙重符號負荷較高。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "79e2794cee9dc6f2c907f1ac1476a14276d5ad55a4dba6bc1f20e7cbdd63c6d2"
  },
  {
    "questionId": "u04-s005-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "兩種餐盒營養資料滿足 x+y=10、20x+20y=200。這兩式用加減消去後會顯示什麼？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "辨認資料欄位重複",
    "choices": [
      "第二式是第一式的 20 倍",
      "唯一解 x=5,y=5",
      "無解",
      "x+y=0"
    ],
    "answerIndex": 0,
    "independentSolution": "第二式除以 20 即 x+y=10；相減得到 0=0。",
    "explanation": "第一式 x+y=10 的左右兩邊同乘二十，正好得到 20x+20y=200，所以第二式只是第一式的二十倍。兩式相減會得到 0=0，代表資訊重複，不能據此唯一求出 x、y。",
    "steps": [
      "把第一式的每一項與右邊同乘二十。",
      "確認所得式與第二式完全相同。",
      "消去後得到恆等式，判定第二式為第一式的二十倍。"
    ],
    "optionAnalysis": [
      {
        "choice": "第二式是第一式的 20 倍",
        "truth": true,
        "reason": "20x+20y=200 正是 20(x+y=10)。"
      },
      {
        "choice": "唯一解 x=5,y=5",
        "truth": false,
        "reason": "兩式沒有第二個獨立條件。"
      },
      {
        "choice": "無解",
        "truth": false,
        "reason": "兩式完全相容。"
      },
      {
        "choice": "x+y=0",
        "truth": false,
        "reason": "消去不會改變原總量。"
      }
    ],
    "misconceptionTarget": "看到有兩個方程式便假設一定有唯一解，未檢查兩式是否只是倍數。",
    "prerequisiteCheck": "只需先備 system-substitution-method，並使用本技能「加減消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "第二式為總營養單位，除以每盒 20 後與盒數式等價。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「辨認資料欄位重複」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "營養欄若每盒貢獻相同，第二式不增加資訊。",
    "literacyContextNecessity": "兩條資料看似不同但數學上相依，這是表格判讀的必要情境。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "74a6508f31bc34822d1ddda858fa4f5fbb44d055dc51e6897a7201239b0966d6"
  },
  {
    "questionId": "u04-s005-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "兩臺機器產量記錄為 x+y=30 與 x-y=6。用加減消去後，機器 x 的產量為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由總量與差額求產量",
    "choices": [
      "12",
      "24",
      "18",
      "36"
    ],
    "answerIndex": 2,
    "independentSolution": "兩式相加得 2x=36，x=18。",
    "explanation": "兩式中的 y 係數互為相反數，逐項相加可得 2x=36。等式兩邊同除以二，求得 x=18；再代回 x+y=30 可得 y=12，總量與差額都能吻合。十八加十二為三十，十八減十二為六，雙重驗證無誤。",
    "steps": [
      "將 x+y=30 與 x-y=6 相加，消去 y。",
      "得到 2x=36，兩邊同除以二。",
      "求得 x=18，並代回檢查總量。"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": false,
        "reason": "這是 y 的產量。"
      },
      {
        "choice": "24",
        "truth": false,
        "reason": "把 30-6。"
      },
      {
        "choice": "18",
        "truth": true,
        "reason": "18+12=30 且 18-12=6。"
      },
      {
        "choice": "36",
        "truth": false,
        "reason": "未除以 2。"
      }
    ],
    "misconceptionTarget": "直接把差額六加到總量三十，沒有先除以兩份來求單一產量。",
    "prerequisiteCheck": "只需先備 system-substitution-method，並使用本技能「加減消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "所有產量以件為同一單位。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由總量與差額求產量」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "機器情境的總量與差額皆必要。",
    "literacyContextNecessity": "若缺少總量或差額，x 不能唯一確定。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "555bfc2863e10d30e2b9893ded4f03ff46d1ab7b819768d684a138ea6079f58e"
  },
  {
    "questionId": "u04-s005-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "倉儲盤點有大箱 x 個、小箱 y 個：每箱都貼 1 張標籤，共 40 張；大箱另多貼 2 張警示標籤，共有警示標籤 30 張。若方程式為 x+y=40、2x=30，x 為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "從盤點規則求箱數",
    "choices": [
      "10",
      "15",
      "20",
      "30"
    ],
    "answerIndex": 1,
    "independentSolution": "第二式直接給 2x=30，x=15；再可得 y=25。",
    "explanation": "第二式已只含 x，由 2x=30 兩邊同除以二，可直接得到大箱數 x=15。再代入 x+y=40，得 y=25；十五加二十五確為四十，且兩倍十五是三十張警示標籤。",
    "steps": [
      "先解只有一個未知數的 2x=30。",
      "兩邊同除以二，求得 x=15。",
      "代回總箱數式驗得 y=25，並核對兩類標籤。"
    ],
    "optionAnalysis": [
      {
        "choice": "10",
        "truth": false,
        "reason": "把 30 除以 3。"
      },
      {
        "choice": "15",
        "truth": true,
        "reason": "15 個大箱共貼 30 張警示標籤。"
      },
      {
        "choice": "20",
        "truth": false,
        "reason": "只將總箱數平均。"
      },
      {
        "choice": "30",
        "truth": false,
        "reason": "把警示張數當箱數。"
      }
    ],
    "misconceptionTarget": "把總標籤四十張直接當成大箱數，沒有區分兩種標籤所代表的方程式。",
    "prerequisiteCheck": "只需先備 system-substitution-method，並使用本技能「加減消去法」。",
    "estimatedTimeSec": 90,
    "unitCheck": "張/箱×箱=張。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「從盤點規則求箱數」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "警示標籤只由大箱貢獻，情境決定係數。",
    "literacyContextNecessity": "大箱每個 2 張警示標籤是求 x 的必要資訊。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "d3bfb7d59f39b8a67f8b3e126333d66ceb5d8ad7c25a9ff9e94f1cdad7559075"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u04-s005-cr001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "standard",
    "itemType": "constructed-response",
    "prompt": "用加減消去法解 4x+y=11、2x+y=7，並說明為何選相減。",
    "requiredWork": [
      "展示整列相減與回代。"
    ],
    "standardSolution": [
      "兩式的 y 係數同為一，因此用第一式減第二式可直接消去 y：(4x+y)-(2x+y)=11-7。",
      "整理得 2x=4，所以 x=2；代入較簡單的第二式 2x+y=7，得到 4+y=7，因此 y=3。",
      "解為 (2,3)。回驗第一式 4×2+3=11，第二式 2×2+3=7，兩式均成立。"
    ],
    "alternativeMethods": [
      "也可用第二式減第一式得到 -2x=-4。"
    ],
    "reasoningSteps": [
      "比較係數，選擇以整式相減讓相同的 y 係數抵消。",
      "解消去後的一元方程式求 x，再代回任一原式求 y。",
      "將有序數對代回兩個原方程式，確認選擇與運算都正確。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "答案、選法理由與步驟完整。"
      },
      {
        "score": 2,
        "criteria": "答案正確但未說明為何相減。"
      },
      {
        "score": 1,
        "criteria": "正確得到 2x=4，回代錯誤。"
      },
      {
        "score": 0,
        "criteria": "相加後未能消去且無有效修正。"
      }
    ],
    "partialCreditRules": [
      "選擇與消去一分，求 x 一分，回代一分。"
    ],
    "followThroughPolicy": "相減順序相反不扣分，只要符號一致。",
    "unitNotationRules": "本題無單位。",
    "answerOnlyPolicy": "只答 (2,3) 最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "(2,3)。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立重算兩式相減與回代，確認 8+3=11、4+3=7。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "8e8e6c068065ccf03d3ea53513357e20a485f076c0b4b4ac07b0daee41212763",
    "commonErrors": [
      "y 係數相同卻選擇相加，得到 2y 而沒有達到消去目的。",
      "第一式減第二式時只減左邊，忘記右邊也要計算 11-7。",
      "求得 x=2 後未回代求 y，交出的答案不是完整有序數對。"
    ]
  },
  {
    "questionId": "u04-s005-cr002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "advanced",
    "itemType": "constructed-response",
    "prompt": "學生將 (3x-2y=7)−(3x+5y=-7) 寫成 3y=0。請找出錯誤並求正確的 y。",
    "requiredWork": [
      "必須展示去括號。",
      "說明右邊減負數。"
    ],
    "standardSolution": [
      "依題意整式相減：(3x-2y)-(3x+5y)=7-(-7)，第二式左右兩邊都在減號作用範圍內。",
      "左邊為 3x-2y-3x-5y=-7y，右邊為十四，因此 -7y=14，求得 y=-2。",
      "原作答 3y=0 有兩個錯誤：未將減號分配到第二式的 5y，且把 7-(-7) 錯算為零。"
    ],
    "alternativeMethods": [
      "可將第二式整體乘 -1 後與第一式相加。"
    ],
    "reasoningSteps": [
      "用括號完整表示第一式減第二式，避免第二式各項漏變號。",
      "分別合併左邊未知數項與右邊常數，得到 -7y=14。",
      "解出 y=-2，並逐項對照錯誤算式說明兩個符號錯誤。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "指出兩處關鍵錯誤並得 y=-2。"
      },
      {
        "score": 2,
        "criteria": "得到 y=-2 且指出至少一處錯誤。"
      },
      {
        "score": 1,
        "criteria": "正確寫出 -7y=14 但最後除法錯，或只指出符號錯誤。"
      },
      {
        "score": 0,
        "criteria": "接受 3y=0 或沒有有效整式相減。"
      }
    ],
    "partialCreditRules": [
      "正確運算兩分，錯誤解釋一分。"
    ],
    "followThroughPolicy": "若只選擇相反順序得到 7y=-14，同樣滿分。",
    "unitNotationRules": "本題無單位；負號必須清楚。",
    "answerOnlyPolicy": "只答 y=-2 最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "y=-2。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立按兩種相減順序核對，均得到 y=-2。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "400e5cb3a4a46a35acc79f051d171f0dd72d9cad2749db99fdc9f272d7e88ad0",
    "commonErrors": [
      "減去第二式時只改 3x 的符號，沒有把正 5y 改成負 5y。",
      "把右邊 7-(-7) 當作 7-7，忽略減去負數等於加上正數。",
      "由 -7y=14 除以七而非負七，造成答案符號再次顛倒。"
    ]
  }
];

export const DRAWING_SPECS = [];
