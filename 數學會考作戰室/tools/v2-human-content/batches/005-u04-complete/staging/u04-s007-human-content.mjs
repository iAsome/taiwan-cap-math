// SERIALIZATION OF REVIEWED CHATGPT_HUMAN_AUTHORED_R1 CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u04-s007-lecture-r1",
  "unitId": "u04",
  "numericUnitId": 4,
  "topicId": "u04-system-methods",
  "skillId": "system-special-cases",
  "lockedSkillTitle": "無解與唯一解與無限多解",
  "title": "無解與唯一解與無限多解：看消去後留下什麼",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "exactSkillIdentity": {
    "unitTitle": "二元一次聯立方程式",
    "skillTitle": "無解與唯一解與無限多解",
    "scope": "由消去後的結果判斷聯立方程式解的型態。"
  },
  "prerequisiteBridge": "先備技能 system-elimination-scaling 已建立必要基礎；本節將其用於「由消去後的結果判斷聯立方程式解的型態。」",
  "learningGoals": [
    "能由正常的一元等式判斷唯一解。",
    "能由 0=非 0 判斷無解。",
    "能由 0=0 判斷無限多解。",
    "能用係數比例判斷參數造成的解型態。"
  ],
  "vocabulary": [
    {
      "term": "唯一解",
      "definition": "只有一組有序數對同時滿足兩式。"
    },
    {
      "term": "無解",
      "definition": "沒有任何有序數對同時滿足兩式。"
    },
    {
      "term": "無限多解",
      "definition": "兩式實際代表同一條件，所有一式的解都滿足另一式。"
    },
    {
      "term": "矛盾式",
      "definition": "例如 0=5，永遠不成立。"
    },
    {
      "term": "恆等式",
      "definition": "例如 0=0，永遠成立。"
    }
  ],
  "notation": [
    {
      "symbol": "0=非0",
      "meaning": "代表條件互相矛盾。"
    },
    {
      "symbol": "0=0",
      "meaning": "代表一式是另一式的倍數，沒有新增限制。"
    }
  ],
  "conceptDevelopment": [
    "消去後若得到 x=某數或 y=某數，通常能再求另一未知數，為唯一解。",
    "若所有未知數都消失卻得到錯誤等式，例如 0=4，表示兩個條件不可能同時成立。",
    "若得到 0=0，表示兩式等價，只剩一個獨立條件，因此有無限多組解。"
  ],
  "definitions": [
    {
      "name": "獨立條件",
      "statement": "不能由另一方程式整體乘倍數得到的條件。"
    },
    {
      "name": "相依條件",
      "statement": "一式是另一式的非零倍數。"
    }
  ],
  "formulas": [
    {
      "formula": "a₁/a₂=b₁/b₂≠c₁/c₂",
      "conditions": [
        "分母係數非 0 時。"
      ],
      "meaning": "未知數係數成比例但常數不成比例，無解。"
    },
    {
      "formula": "a₁/a₂=b₁/b₂=c₁/c₂",
      "conditions": [
        "分母係數非 0 時。"
      ],
      "meaning": "整式成比例，無限多解。"
    }
  ],
  "invalidUseCases": [
    "不能看到未知數消失就一律說無解。",
    "0=0 不是解為 x=0、y=0。",
    "比例判斷須包含常數項，不能只比 x 係數。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "先以消去法處理",
      "check": "必要時倍數放大。"
    },
    {
      "step": 2,
      "instruction": "觀察結果",
      "check": "是否仍有未知數。"
    },
    {
      "step": 3,
      "instruction": "正常一元式",
      "check": "判唯一解並回代。"
    },
    {
      "step": 4,
      "instruction": "矛盾式 0=k，k≠0",
      "check": "判無解。"
    },
    {
      "step": 5,
      "instruction": "恆等式 0=0",
      "check": "判無限多解。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "判斷x＋y＝3與x－y＝1的解型態。",
      "solutionSteps": [
        "兩式相加得2x＝4，所以x＝2。",
        "代回x＋y＝3得到y＝1。",
        "將(2,1)代回兩式皆成立。"
      ],
      "answer": "唯一解(2,1)。",
      "why": "消去後留下係數不為零的一元方程式，因此x有唯一值；再代回原式，y也只有一個值。兩式提供彼此獨立的限制，最後只有有序數對(2,1)同時成立，所以分類為唯一解。"
    },
    {
      "exampleId": "L2",
      "prompt": "判斷x＋y＝3與2x＋2y＝8的解型態。",
      "solutionSteps": [
        "將第一式乘2，得到2x＋2y＝6。",
        "與第二式相減得到0＝2。",
        "0不可能等於2，因此不存在共同數對。"
      ],
      "answer": "無解。",
      "why": "兩式左邊的未知數係數成相同比例，但右邊常數沒有同率放大。同一個2x＋2y不可能既等於六又等於八，消去後的矛盾式零等於二證明兩條件無法同時滿足。"
    },
    {
      "exampleId": "L3",
      "prompt": "判斷x＋y＝3與2x＋2y＝6的解型態。",
      "solutionSteps": [
        "把第一式乘2，逐項得到第二式。",
        "兩式相減形成0＝0，第二式沒有新增限制。",
        "保留x＋y＝3描述共同解，例如(1,2)與(2,1)。"
      ],
      "answer": "無限多解。",
      "why": "第二式只是第一式的兩倍，兩個方程式代表同一條限制，所以消去後成為恆等式。共同解不是任意數對，而是所有滿足x＋y＝3的數對；這樣的數對有無限多組。"
    },
    {
      "exampleId": "L4",
      "prompt": "判斷kx＋y＝2與2x＋2y＝5在何時無解。",
      "solutionSteps": [
        "由y係數判斷第二式須是第一式的2倍，故需2k＝2。",
        "解得k＝1，此時第一式乘2為2x＋2y＝4。",
        "它與第二式2x＋2y＝5衝突，所以k＝1時無解。"
      ],
      "answer": "k＝1時無解。",
      "why": "無解需要未知數係數成比例而常數不成比例。y係數已固定為兩倍，令x係數也成兩倍可得k等於一；但第一式右邊放大後是四，不是第二式的五，因此消去產生矛盾。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把 0=0 解讀成 x=y=0",
      "correction": "它表示方程式重複，並未固定 x、y。"
    },
    {
      "mistake": "把 0=5 當成 x=5",
      "correction": "未知數已消失，這是矛盾。"
    },
    {
      "mistake": "只看一個係數比例",
      "correction": "必須比較 x、y 與常數。"
    },
    {
      "mistake": "未化簡就判斷",
      "correction": "先整理到相同排列再比較。"
    }
  ],
  "selfCheck": [
    {
      "prompt": "消去得 3x=6 是哪型？",
      "answer": "唯一解。"
    },
    {
      "prompt": "消去得 0=-7 呢？",
      "answer": "無解。"
    },
    {
      "prompt": "消去得 0=0 呢？",
      "answer": "無限多解。"
    },
    {
      "prompt": "無限多解代表每個數對都可以嗎？",
      "answer": "不是；必須滿足剩下的那一個方程式。"
    }
  ],
  "summary": [
    "正常一元式通常代表唯一解。",
    "0=非0 代表無解。",
    "0=0 代表無限多解。",
    "比例判斷要包含常數項。"
  ],
  "connections": {
    "previous": "先備技能 system-elimination-scaling 已建立必要基礎；本節將其用於「由消去後的結果判斷聯立方程式解的型態。」",
    "next": "下一技能「情境列聯立方程式」會延伸目前能力。"
  },
  "figureReferences": [],
  "accessibilityNote": "本講義不需要圖形；所有關係均以文字、等式與逐步運算完整呈現，避擴音前使用 U05 坐標圖形。",
  "lectureReview": {
    "decision": "pass",
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "capBoundary": "pass",
    "skillSpecificEvidence": "分別獨立推導三種解型態，確認 0=0 並非所有數對而是所有滿足共同方程式的數對；參數例只在國中比例與消去範圍。",
    "reviewNote": "分別獨立推導三種解型態，確認 0=0 並非所有數對而是所有滿足共同方程式的數對；參數例只在國中比例與消去範圍。",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "fbff61cd7df1d2b24ebb14d7011e8889f6ccbbe3c407f8858cb355996287117d",
  "concept": "二元一次聯立方程式消去一個未知數後，結果可分成三類。若留下可解的一元方程式，回代後通常得到唯一解；若未知數全消失而形成零等於非零常數的矛盾式，代表兩個條件無法同時成立，所以無解；若形成零等於零的恆等式，代表兩式相依，只剩一個原方程式限制，因此有無限多解。無限多解不是所有數對都可用，仍須滿足保留的方程式。",
  "method": [
    {
      "step": 1,
      "instruction": "先整理兩式的未知數排列，必要時整式乘倍數後消去一個未知數。",
      "check": "加減運算涵蓋等號左右每一項，消去結果沒有符號錯誤。"
    },
    {
      "step": 2,
      "instruction": "觀察消去結果是否仍含未知數，並區分正常一元式、矛盾式與恆等式。",
      "check": "不要把0＝非0與0＝0混為同一型態。"
    },
    {
      "step": 3,
      "instruction": "若留下ax＝b且a不為零，求出x並回代求y，判定唯一解。",
      "check": "所得有序數對要同時代回兩個原方程式。"
    },
    {
      "step": 4,
      "instruction": "若得到0＝非零常數，指出條件彼此矛盾，判定沒有共同解。",
      "check": "未知數已消失，不能把右邊常數當成未知數的值。"
    },
    {
      "step": 5,
      "instruction": "若得到0＝0，保留任一原方程式描述共同解，判定有無限多解。",
      "check": "不得宣稱任意數對都成立，解仍受保留方程式限制。"
    }
  ]
};

export const QUESTIONS = [
  {
    "questionId": "u04-s007-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "消去後得到 3x=12，這組聯立方程式通常屬於哪一型？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由正常一元式判唯一解",
    "choices": [
      "無解",
      "無限多解",
      "唯一解",
      "無法分類"
    ],
    "answerIndex": 2,
    "independentSolution": "3x=12 得 x=4，通常再由原式唯一求 y。",
    "explanation": "消去後得到3x＝12，表示x可唯一解為四；在一般的二元一次聯立方程式中，再把x＝4代回含y的原式，就能唯一求出y。因此這不是矛盾式或恆等式，而是具有唯一一組有序數對的情形。",
    "steps": [
      "辨認3x＝12仍含未知數，既不是0＝非0也不是0＝0。",
      "兩邊同除以3，求得唯一的x＝4。",
      "將x＝4代回含y的原式，判定可得到唯一數對。"
    ],
    "optionAnalysis": [
      {
        "choice": "無解",
        "truth": false,
        "reason": "3x=12 可解。"
      },
      {
        "choice": "無限多解",
        "truth": false,
        "reason": "結果不是 0=0。"
      },
      {
        "choice": "唯一解",
        "truth": true,
        "reason": "正常一元方程式提供確定未知數值。"
      },
      {
        "choice": "無法分類",
        "truth": false,
        "reason": "可先求 x=4 再回代。"
      }
    ],
    "misconceptionTarget": "看到只剩一元就以為缺資料",
    "prerequisiteCheck": "只需先備 system-elimination-scaling，並使用本技能「無解與唯一解與無限多解」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由正常一元式判唯一解」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "最基本解型辨認。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "7e32af112cebcaeeccb6856558d1b4744d51e3aa7bc89ecd9a5ca1c7f3a419b4",
    "commonMistake": "看到消去後只剩一個未知數，就誤認為資料不足或有無限多解。"
  },
  {
    "questionId": "u04-s007-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "消去後得到 0=5，解的型態為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "辨認矛盾式",
    "choices": [
      "無解",
      "唯一解",
      "無限多解",
      "x=5"
    ],
    "answerIndex": 0,
    "independentSolution": "0 不可能等於 5，因此沒有數對能同時滿足原兩式。",
    "explanation": "消去所有未知數後得到0＝5，左邊永遠是零，右邊卻是非零常數，任何x、y都不可能使這個等式成立。這表示原來兩個條件彼此衝突，所以聯立方程式沒有共同解。",
    "steps": [
      "確認消去結果不含任何未知數。",
      "判斷0與5不相等，因此0＝5是永遠不成立的矛盾式。",
      "把矛盾結果翻回原聯立方程式，結論為無解。"
    ],
    "optionAnalysis": [
      {
        "choice": "無解",
        "truth": true,
        "reason": "0=5 永遠不成立。"
      },
      {
        "choice": "唯一解",
        "truth": false,
        "reason": "沒有未知數可解且等式錯誤。"
      },
      {
        "choice": "無限多解",
        "truth": false,
        "reason": "0=5 不是恆等式。"
      },
      {
        "choice": "x=5",
        "truth": false,
        "reason": "x 已被消去。"
      }
    ],
    "misconceptionTarget": "把常數 5 當未知數值",
    "prerequisiteCheck": "只需先備 system-elimination-scaling，並使用本技能「無解與唯一解與無限多解」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「辨認矛盾式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "直接定義題。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "622264588d004cd35004061a503fb77662d0c4d5f1c97e84e6b5fb5ccb03e3f5",
    "commonMistake": "把等號右邊的五誤當成x的值，忽略未知數早已全部消去。"
  },
  {
    "questionId": "u04-s007-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "消去後得到 0=0，最正確的解釋是？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "辨認恆等式與範圍",
    "choices": [
      "唯一解 (0,0)",
      "無解",
      "所有數對都是解",
      "無限多解"
    ],
    "answerIndex": 3,
    "independentSolution": "0=0 表示兩式相依，只剩一個獨立方程式，因此其所有解形成無限多組共同解。",
    "explanation": "消去後出現0＝0，表示兩個方程式其實是同一個條件的倍數改寫，第二式沒有增加限制。仍須保留任一原方程式，所以不是所有數對都可用；滿足該原式的數對有無限多組。",
    "steps": [
      "確認0＝0是恆真等式，而不是固定x或y為零。",
      "判定兩個原方程式相依，只留下其中一式的限制。",
      "說明所有滿足保留方程式的數對皆為共同解，因此有無限多解。"
    ],
    "optionAnalysis": [
      {
        "choice": "唯一解 (0,0)",
        "truth": false,
        "reason": "0=0 未固定 x、y。"
      },
      {
        "choice": "無解",
        "truth": false,
        "reason": "0=0 永遠成立，不是矛盾。"
      },
      {
        "choice": "所有數對都是解",
        "truth": false,
        "reason": "仍需滿足剩下的原方程式。"
      },
      {
        "choice": "無限多解",
        "truth": true,
        "reason": "兩式重複同一條件，留下無限多組共同解。"
      }
    ],
    "misconceptionTarget": "把 0=0 解成 x=y=0 或所有數對",
    "prerequisiteCheck": "只需先備 system-elimination-scaling，並使用本技能「無解與唯一解與無限多解」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「辨認恆等式與範圍」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "定義但含邊界澄清。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "2ff0907a2c4aa9170dd15dda71fb189588d4102d1aaca0f1166953b56d962274",
    "commonMistake": "把零等於零解讀成唯一數對零零，或誤說任意數對都能滿足。"
  },
  {
    "questionId": "u04-s007-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "x+y=3 與 2x+2y=6 的解型態為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由整式倍數判無限多解",
    "choices": [
      "唯一解",
      "無限多解",
      "無解",
      "只有 (1,2)"
    ],
    "answerIndex": 1,
    "independentSolution": "第二式是第一式的 2 倍；相減得 0=0。",
    "explanation": "把第一式x＋y＝3整式乘二，正好得到第二式2x＋2y＝6，所以兩式描述同一條件。消去時會得到0＝0；例如(1,2)與(2,1)都成立，且還有其他數對，因此解有無限多組。",
    "steps": [
      "將第一式每一項乘2，得到2x＋2y＝6。",
      "與第二式逐項比較，確認未知數係數和常數完全相同。",
      "以消去結果0＝0判定兩式相依，結論為無限多解。"
    ],
    "optionAnalysis": [
      {
        "choice": "唯一解",
        "truth": false,
        "reason": "第二式未增加新限制。"
      },
      {
        "choice": "無限多解",
        "truth": true,
        "reason": "兩式等價。"
      },
      {
        "choice": "無解",
        "truth": false,
        "reason": "兩式相容。"
      },
      {
        "choice": "只有 (1,2)",
        "truth": false,
        "reason": "(1,2) 只是其中一組。"
      }
    ],
    "misconceptionTarget": "只找到一組就停止",
    "prerequisiteCheck": "只需先備 system-elimination-scaling，並使用本技能「無解與唯一解與無限多解」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由整式倍數判無限多解」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需比較三項比例。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "7c6c454b7e342858d5041106ce3f4202fccdf6eb3a83cef24b67f62e55c82c07",
    "commonMistake": "只找到一組符合的數對就停止，沒有檢查第二式是否只是第一式的倍數。"
  },
  {
    "questionId": "u04-s007-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "把第一式整式乘 2 後，左邊與第二式完全相同，但右邊分別為 6 與 8。此聯立的解型態為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由常數比例不符判無解",
    "choices": [
      "唯一解",
      "無限多解",
      "只有 (0,4)",
      "無解"
    ],
    "answerIndex": 3,
    "independentSolution": "第一式乘 2 應為 2x+2y=6，卻要求等於 8；消去得 0=2。",
    "explanation": "第一式乘二後，左邊雖與第二式完全相同，右邊卻一個要求等於六、另一個要求等於八。同一個代數式不能同時等於兩個不同常數；兩式相減得到0＝2，因此沒有共同解。",
    "steps": [
      "把第一式整式乘2，使左邊與第二式對齊。",
      "比較右邊常數6與8，確認比例不一致。",
      "兩式相減得到0＝2的矛盾式，判定聯立方程式無解。"
    ],
    "optionAnalysis": [
      {
        "choice": "唯一解",
        "truth": false,
        "reason": "係數相同方向但常數矛盾。"
      },
      {
        "choice": "無限多解",
        "truth": false,
        "reason": "常數 8 不是 6。"
      },
      {
        "choice": "只有 (0,4)",
        "truth": false,
        "reason": "該數對不滿足第一式。"
      },
      {
        "choice": "無解",
        "truth": true,
        "reason": "兩條平行限制互相矛盾。"
      }
    ],
    "misconceptionTarget": "只看未知數係數相同比例就判無限多",
    "prerequisiteCheck": "只需先備 system-elimination-scaling，並使用本技能「無解與唯一解與無限多解」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由常數比例不符判無解」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "標準比例辨認。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "56c91c6dec89ee22e993eece3af76e650a486ca26a5d2bafa465d80dc65d24c9",
    "commonMistake": "只比較未知數係數的比例相同，就直接判成無限多解而漏看常數。"
  },
  {
    "questionId": "u04-s007-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "x+y=5 與 x-y=1 的解型態為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "實際求解確認唯一型",
    "choices": [
      "無解",
      "唯一解",
      "無限多解",
      "所有 x+y=5 的解"
    ],
    "answerIndex": 1,
    "independentSolution": "相加得 2x=6，x=3，再得 y=2。",
    "explanation": "兩式相加時y與-y抵消，得到2x＝6，所以x＝3；把三代回x＋y＝5，得到y＝2。這組(3,2)同時滿足兩式，而且消去後出現正常的一元方程式，因此解唯一。",
    "steps": [
      "將x＋y＝5與x－y＝1逐項相加，得到2x＝6。",
      "解得x＝3，再代回第一式求得y＝2。",
      "把(3,2)代回兩式，確認皆成立並判定唯一解。"
    ],
    "optionAnalysis": [
      {
        "choice": "無解",
        "truth": false,
        "reason": "兩式可求共同解。"
      },
      {
        "choice": "唯一解",
        "truth": true,
        "reason": "共同解唯一為 (3,2)。"
      },
      {
        "choice": "無限多解",
        "truth": false,
        "reason": "兩式不成比例。"
      },
      {
        "choice": "所有 x+y=5 的解",
        "truth": false,
        "reason": "第二式會進一步篩選。"
      }
    ],
    "misconceptionTarget": "只憑外觀分類",
    "prerequisiteCheck": "只需先備 system-elimination-scaling，並使用本技能「無解與唯一解與無限多解」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「實際求解確認唯一型」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需完成簡短運算。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "72351ef51ebbc053559a1c74bfb0910f498e7159d5886220ff74faa41461c186",
    "commonMistake": "只由兩式外觀猜測解型態，沒有實際消去與代回確認共同解。"
  },
  {
    "questionId": "u04-s007-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "kx+y=2 與 2x+2y=5 在 k 為何值時無解？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "參數造成無解",
    "choices": [
      "0",
      "2",
      "1",
      "5/2"
    ],
    "answerIndex": 2,
    "independentSolution": "k=1 時第一式×2 為 2x+2y=4，與第二式 2x+2y=5 矛盾。",
    "explanation": "要產生無解，兩式的x、y係數必須成同一比例，但常數不能同率放大。第二式的y係數二是第一式y係數一的兩倍，因此需有2k＝2，得到k＝1；此時第一式乘二的右邊是四，與第二式右邊五衝突。",
    "steps": [
      "由y係數1與2確定第二式相對第一式的倍數為2。",
      "令x係數也符合比例，列2k＝2並求得k＝1。",
      "比較放大後常數4與5，得到矛盾式0＝1，確認無解。"
    ],
    "optionAnalysis": [
      {
        "choice": "0",
        "truth": false,
        "reason": "可得 y=2 與 2x+4=5，有唯一解。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "係數比不一致，通常唯一解。"
      },
      {
        "choice": "1",
        "truth": true,
        "reason": "k=1 時消去得到 0=1。"
      },
      {
        "choice": "5/2",
        "truth": false,
        "reason": "係數不成比例。"
      }
    ],
    "misconceptionTarget": "只令某一係數相同",
    "prerequisiteCheck": "只需先備 system-elimination-scaling，並使用本技能「無解與唯一解與無限多解」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「參數造成無解」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需同時匹配兩個未知數係數。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "82b43546967bc692f5da25797367d5afaf958694a05bd359e9b43515bea54703",
    "commonMistake": "只讓x係數相同，卻未同時核對y係數與右邊常數的比例。"
  },
  {
    "questionId": "u04-s007-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "kx+2y=4 與 3x+6y=12 在 k 為何值時無限多解？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "參數造成整式等價",
    "choices": [
      "1",
      "3",
      "6",
      "2"
    ],
    "answerIndex": 0,
    "independentSolution": "第二式常數與 y 係數都是第一式的 3 倍，因此 x 係數也需 3k=3，得 k=1。",
    "explanation": "第二式的y係數六和常數十二，都是第一式相對項二與四的三倍。要讓兩式完全等價，x係數也必須同樣放大三倍，因此3k＝3，解得k＝1；此時第一式乘三正好就是第二式。",
    "steps": [
      "比較y係數6÷2與常數12÷4，確認共同倍數都是3。",
      "要求x係數也同率放大，列出3k＝3。",
      "解得k＝1並將第一式乘3，逐項核對等於第二式。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": true,
        "reason": "k=1 時第一式乘 3 完全等於第二式。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "第一式×3 得 9x+6y。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "x 係數比例錯誤。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "第一式×3 得 6x+6y。"
      }
    ],
    "misconceptionTarget": "只比較常數或 y 係數",
    "prerequisiteCheck": "只需先備 system-elimination-scaling，並使用本技能「無解與唯一解與無限多解」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「參數造成整式等價」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "三項比例綜合。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "357a6c141ab3f683877ea8d1b8922a974c4be17cb3042e1e27524553a27476c6",
    "commonMistake": "只看到常數與y係數都是三倍，就忘記x係數也必須維持同一比例。"
  },
  {
    "questionId": "u04-s007-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "方程式 ax+by=c 與 2ax+2by=2c，在 a、b 不同時為 0 的前提下，解型態為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "抽象係數下判斷相依",
    "choices": [
      "唯一解",
      "無限多解",
      "無解",
      "視 c 正負決定"
    ],
    "answerIndex": 1,
    "independentSolution": "第二式是第一式整式乘 2，兩式解集合相同。",
    "explanation": "第二式的x項、y項與常數，分別都是第一式相對項的兩倍，所以第二式沒有提供新的獨立限制。在a、b不會同時為零的前提下，第一式描述一條含無限多個數對的關係，兩式共同解也有無限多組。",
    "steps": [
      "逐項比較ax、by、c與2ax、2by、2c的係數。",
      "確認第二式是第一式整式乘2，消去後得到0＝0。",
      "利用a、b不全為零的條件，判定保留方程式有無限多組數對解。"
    ],
    "optionAnalysis": [
      {
        "choice": "唯一解",
        "truth": false,
        "reason": "第二式只是重複條件。"
      },
      {
        "choice": "無限多解",
        "truth": true,
        "reason": "第二式沒有新增獨立條件。"
      },
      {
        "choice": "無解",
        "truth": false,
        "reason": "兩式完全相容。"
      },
      {
        "choice": "視 c 正負決定",
        "truth": false,
        "reason": "倍數關係與 c 正負無關。"
      }
    ],
    "misconceptionTarget": "參數形式讓人誤以為不確定",
    "prerequisiteCheck": "只需先備 system-elimination-scaling，並使用本技能「無解與唯一解與無限多解」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「抽象係數下判斷相依」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "從具體數字提升到一般關係。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "a7c2a2071dd557051be488445de351fea90fde57b020412d17e52d71f26d8dbc",
    "commonMistake": "看到字母參數就認為解型態不確定，忽略完整的兩倍關係已成立。"
  },
  {
    "questionId": "u04-s007-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "兩份會員方案紀錄為 100+20x=y 與 200+40x=2y。這兩條紀錄提供幾個獨立條件？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "辨認重複的方案資料",
    "choices": [
      "2 個",
      "0 個",
      "1 個",
      "視 x 大小而定"
    ],
    "answerIndex": 2,
    "independentSolution": "第一式乘 2 正好得到第二式，所以只有一個獨立條件。",
    "explanation": "把100＋20x＝y的每一項乘二，可得200＋40x＝2y，恰與第二條紀錄相同。兩列雖然數字外觀不同，實際只重複同一個關係，所以只能算一個獨立條件，不能據此唯一決定x、y。",
    "steps": [
      "將第一條紀錄左右每一項同乘2。",
      "逐項比對得到200＋40x＝2y，與第二條完全一致。",
      "判定第二條未增加限制，因此獨立條件只有1個。"
    ],
    "optionAnalysis": [
      {
        "choice": "2 個",
        "truth": false,
        "reason": "第二式是第一式兩倍。"
      },
      {
        "choice": "0 個",
        "truth": false,
        "reason": "第一式仍提供一個條件。"
      },
      {
        "choice": "1 個",
        "truth": true,
        "reason": "第二條只是第一條的等價改寫。"
      },
      {
        "choice": "視 x 大小而定",
        "truth": false,
        "reason": "倍數關係與 x 值無關。"
      }
    ],
    "misconceptionTarget": "看到兩列資料就認為有兩個條件",
    "prerequisiteCheck": "只需先備 system-elimination-scaling，並使用本技能「無解與唯一解與無限多解」。",
    "estimatedTimeSec": 90,
    "unitCheck": "兩式均為元的等量關係。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「辨認重複的方案資料」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "固定費與單位費都同倍放大是必要判斷。",
    "literacyContextNecessity": "方案金額結構決定兩式相依，情境幫助理解重複資料。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "972c04e8e69e98b38a8329ce2d824320744c28fffc1b861d76606c8f6017c6fe",
    "commonMistake": "看到報表有兩列就直接算成兩個條件，沒有檢查是否為等價倍數。"
  },
  {
    "questionId": "u04-s007-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "品質檢查規則 A：x+y=10；規則 B：2x+2y=25。是否可能有產品同時通過？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "把無解解釋回品質情境",
    "choices": [
      "不可能",
      "一定有一組",
      "有無限多組",
      "只有 x=y=5"
    ],
    "answerIndex": 0,
    "independentSolution": "規則 A 乘 2 得 2x+2y=20，與 B 要求 25 衝突。",
    "explanation": "把規則A的x＋y＝10整式乘二，會得到2x＋2y＝20；規則B卻要求同一個左式等於二十五。兩規則相減形成0＝5的矛盾，因此不存在任何產品資料能同時通過兩項檢查。",
    "steps": [
      "把規則A乘2，寫成2x＋2y＝20。",
      "與規則B的2x＋2y＝25比較，發現常數不一致。",
      "相減得到0＝5，判定兩項品質規則不可能同時成立。"
    ],
    "optionAnalysis": [
      {
        "choice": "不可能",
        "truth": true,
        "reason": "消去後得到 0=5。"
      },
      {
        "choice": "一定有一組",
        "truth": false,
        "reason": "兩規則相互矛盾。"
      },
      {
        "choice": "有無限多組",
        "truth": false,
        "reason": "常數比例不符。"
      },
      {
        "choice": "只有 x=y=5",
        "truth": false,
        "reason": "代入 B 得 20≠25。"
      }
    ],
    "misconceptionTarget": "把 x=y=5 當作直覺答案",
    "prerequisiteCheck": "只需先備 system-elimination-scaling，並使用本技能「無解與唯一解與無限多解」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「把無解解釋回品質情境」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "規則衝突是情境核心。",
    "literacyContextNecessity": "兩個品質門檻共同造成矛盾，移除任一則不再無解。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "0c7c86cd7df30dad042df2bef77338bc5b2c6b97ef6417e6e7217b290f477e67",
    "commonMistake": "憑總數十直覺選x等於y等於五，卻沒有代入第二條規則驗證。"
  },
  {
    "questionId": "u04-s007-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "某表格的兩欄條件消去後得到 0=0。下列哪個報告敘述最精確？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "將無限多解寫成準確報告",
    "choices": [
      "所有填入值都合法",
      "資料一定錯誤",
      "只有填 0 才合法",
      "兩欄資料重複同一限制，仍需滿足其中一欄"
    ],
    "answerIndex": 3,
    "independentSolution": "0=0 說明兩條件相依，不是沒有限制；可保留任一原式描述所有共同解。",
    "explanation": "消去後得到0＝0，表示兩欄條件彼此相依，其中一欄只是另一欄的等價改寫。這不代表所有填入值都合法；刪除重複欄後，資料仍必須滿足保留下來的原限制，所以精確報告應指出條件重複且有無限多組可行值。",
    "steps": [
      "辨認0＝0為恆等式，排除資料矛盾的解讀。",
      "回看原條件，確認仍有一個方程式限制填入值。",
      "報告兩欄重複同一限制，且可行值須滿足任一保留欄。"
    ],
    "optionAnalysis": [
      {
        "choice": "所有填入值都合法",
        "truth": false,
        "reason": "仍受原限制。"
      },
      {
        "choice": "資料一定錯誤",
        "truth": false,
        "reason": "0=0 代表相容。"
      },
      {
        "choice": "只有填 0 才合法",
        "truth": false,
        "reason": "沒有固定為 0。"
      },
      {
        "choice": "兩欄資料重複同一限制，仍需滿足其中一欄",
        "truth": true,
        "reason": "相依條件可刪一欄，但不能刪掉全部限制。"
      }
    ],
    "misconceptionTarget": "把無限多解誤寫為任意值",
    "prerequisiteCheck": "只需先備 system-elimination-scaling，並使用本技能「無解與唯一解與無限多解」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「將無限多解寫成準確報告」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "資料審查語境迫使說明限制仍存在。",
    "literacyContextNecessity": "表格重複欄的解釋是數學結論的一部分，不是裝飾。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "414c064bfa6a4a13a692a9e863c8ba49efd1fdfbd2e2b305f89d57597cc27dfe",
    "commonMistake": "把無限多解誤寫成完全沒有限制，認為任意資料都能填入。"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u04-s007-cr001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "standard",
    "itemType": "constructed-response",
    "prompt": "判斷下列三組聯立方程式的解型態並說明消去結果：A. x+y=3、x-y=1；B. x+y=3、2x+2y=6；C. x+y=3、2x+2y=8。",
    "requiredWork": [
      "三組分別寫唯一解、無解或無限多解。",
      "至少展示關鍵消去式。"
    ],
    "standardSolution": [
      "A兩式相加得2x＝4，所以x＝2；代回x＋y＝3得y＝1，故A有唯一解(2,1)。",
      "B把第一式乘二，正好得到第二式；兩式相減為0＝0，只保留一個獨立條件，故有無限多解。",
      "C把第一式乘二得到2x＋2y＝6，卻與第二式要求等於八衝突；相減為0＝2，故無解。",
      "三種消去結果依序是正常一元式、恆等式與矛盾式，分別對應唯一解、無限多解與無解。"
    ],
    "alternativeMethods": [
      "可用整式比例說明 B 完全成比例、C 常數不成比例。"
    ],
    "reasoningSteps": [
      "對A相加消去y，求出有序數對並代回確認。",
      "對B比較第二式與第一式兩倍，辨認0＝0的恆等結果。",
      "對C比較相同未知數係數下的不同常數，辨認0＝2的矛盾。",
      "將三種消去結果明確翻譯成各自的解型態。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三類與理由全部正確。"
      },
      {
        "score": 2,
        "criteria": "三類正確但一項理由不完整。"
      },
      {
        "score": 1,
        "criteria": "至少一類及其消去理由正確。"
      },
      {
        "score": 0,
        "criteria": "混淆 0=0 與 0=非0，且無有效分類。"
      }
    ],
    "partialCreditRules": [
      "每組一分。"
    ],
    "followThroughPolicy": "若 A 數對算錯但明確判唯一解，A 可給半分並計入總分判斷。",
    "unitNotationRules": "本題無單位。",
    "answerOnlyPolicy": "只寫三類無理由，最高 2 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "A唯一解、B無限多解、C無解。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立完成三組消去，確認 B 與 C 僅常數不同卻導致不同型態。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "4620bd6522c65ec0b84a3546ce6288dee4d693041f36703eea80f6134e278b7c",
    "commonErrors": [
      "把B的0＝0誤當成唯一解(0,0)，忘記原方程式仍限制共同解。",
      "只看B與C的未知數係數成比例，沒有比較常數而把兩者都判成無限多解。"
    ]
  },
  {
    "questionId": "u04-s007-cr002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "advanced",
    "itemType": "constructed-response",
    "prompt": "對聯立 kx+2y=4、3x+6y=12，分別求 k 使其有無限多解或無解；其餘 k 的解型態為何？",
    "requiredWork": [
      "比較整式比例。",
      "三種參數範圍都要說明。"
    ],
    "standardSolution": [
      "第二式的y係數六與常數十二，都是第一式相對項二與四的三倍；兩式完全等價還需x係數滿足3k＝3。",
      "解3k＝3得k＝1。此時第一式乘三正好等於第二式，消去得到0＝0，所以有無限多解。",
      "若要無解，未知數係數必須成比例而常數比例不同；但本題y係數與常數的比例已固定同為三，不存在這樣的k。",
      "當k不等於一時，x係數比例不同，消去後可求得唯一的x並回代求y，因此其餘k皆為唯一解。"
    ],
    "alternativeMethods": [
      "可用消去：第一式乘 3 後與第二式相減，得到 (3k-3)x=0，再分 k=1 與 k≠1。"
    ],
    "reasoningSteps": [
      "由y係數與常數先確定固定比例為3。",
      "令x係數維持同一比例，求出無限多解所需的k。",
      "檢查常數比例無法單獨破壞，說明無解參數集合為空。",
      "對其餘k用係數不成比例判定為唯一解。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整得到 k=1 無限多解、無 k 無解、其餘唯一解。"
      },
      {
        "score": 2,
        "criteria": "主要分類正確但“無解不存在”理由略少。"
      },
      {
        "score": 1,
        "criteria": "只正確得到 k=1 無限多解。"
      },
      {
        "score": 0,
        "criteria": "誤稱 k≠1 無解或只給單一數值無分類。"
      }
    ],
    "partialCreditRules": [
      "無限多解一分，無解分析一分，其餘唯一解一分。"
    ],
    "followThroughPolicy": "若把 3k=3 解錯，但分類邏輯完整可給 2 分。",
    "unitNotationRules": "k 無單位；“沒有 k”須明確寫出。",
    "answerOnlyPolicy": "只答 k=1 最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "k=1 無限多解；不存在無解參數；k≠1 唯一解。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立以消去式 (3k-3)x=0 與原 y 係數檢查，確認無矛盾參數。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "6d15ac56ef04b664e4d963dbf3bb31773f7ecb36189157be4887f8dec0f017e4",
    "commonErrors": [
      "只解出k等於一便停止，沒有回答是否存在無解參數與其餘參數的型態。",
      "誤以為任意不等於一的k都會造成矛盾，忽略係數不成比例通常產生唯一解。"
    ]
  }
];

export const DRAWING_SPECS = [];
