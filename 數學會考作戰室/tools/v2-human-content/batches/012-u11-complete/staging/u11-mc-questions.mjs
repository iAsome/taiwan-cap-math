// Deterministically emitted from reviewed source. Do not edit.
export default [
  {
    "questionId": "u11-s001-v001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-meaning",
    "lockedSkillOrder": 1,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "49 的平方根是哪些數？",
    "givenConditions": [
      "49 是正數。"
    ],
    "target": "列出所有平方後等於 49 的實數。",
    "choices": [
      "7 與 -7",
      "只有 7",
      "只有 -7",
      "49 與 -49"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：直接解 x²=49；x=7 或 x=-7，兩者平方都等於 49。 詳算檢查：因為 7²=49 且 (-7)²=49，所以 49 有兩個平方根 7 與 -7。 因此結果為「7 與 -7」。",
    "explanation": "因為 7²=49 且 (-7)²=49，所以 49 有兩個平方根 7 與 -7。",
    "steps": [
      "整理條件：49 是正數。",
      "獨立推導：不參照選項，從題幹條件重新計算：直接解 x²=49；x=7 或 x=-7，兩者平方都等於 49。 詳算檢查：因為 7²=49 且 (-7)²=49，所以 49 有兩個平方根 7 與 -7。 因此結果為「7 與 -7」。",
      "核對目標：答案「7 與 -7」確實回應「列出所有平方後等於 49 的實數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "7 與 -7",
        "truth": true,
        "reason": "此選項符合目標「列出所有平方後等於 49 的實數。」；因為 7²=49 且 (-7)²=49，所以 49 有兩個平方根 7 與 -7。"
      },
      {
        "choice": "只有 7",
        "truth": false,
        "reason": "把主平方根與全部平方根混淆。"
      },
      {
        "choice": "只有 -7",
        "truth": false,
        "reason": "漏掉正的平方根。"
      },
      {
        "choice": "49 與 -49",
        "truth": false,
        "reason": "未檢查平方後是否為 49。"
      }
    ],
    "misconceptionTarget": "把「49 的平方根」誤認為只有 √49。",
    "prerequisiteCheck": "需能使用先備技能 整數與平方運算，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "直接檢查平方根定義，屬單一步驟基礎題。；具體任務是「列出所有平方後等於 49 的實數。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根意義",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "deafc9d04b03e7fd937527b639fdcdf07e95c77376cbb790b35c62968ff103c1"
  },
  {
    "questionId": "u11-s001-v002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-meaning",
    "lockedSkillOrder": 1,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "0 的平方根共有幾個？",
    "givenConditions": [
      "被開方數為 0。"
    ],
    "target": "判斷平方根的個數。",
    "choices": [
      "0 個",
      "1 個",
      "2 個",
      "無限多個"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：設 x²=0，必有 x=0，因此只有一個解。 詳算檢查：只有 0²=0，所以 0 的平方根只有 0，共 1 個。 因此結果為「1 個」。",
    "explanation": "只有 0²=0，所以 0 的平方根只有 0，共 1 個。",
    "steps": [
      "整理條件：被開方數為 0。",
      "獨立推導：不參照選項，從題幹條件重新計算：設 x²=0，必有 x=0，因此只有一個解。 詳算檢查：只有 0²=0，所以 0 的平方根只有 0，共 1 個。 因此結果為「1 個」。",
      "核對目標：答案「1 個」確實回應「判斷平方根的個數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "0 個",
        "truth": false,
        "reason": "忽略 0²=0。"
      },
      {
        "choice": "1 個",
        "truth": true,
        "reason": "此選項符合目標「判斷平方根的個數。」；只有 0²=0，所以 0 的平方根只有 0，共 1 個。"
      },
      {
        "choice": "2 個",
        "truth": false,
        "reason": "把正數有兩個平方根的規則錯套到 0。"
      },
      {
        "choice": "無限多個",
        "truth": false,
        "reason": "未使用平方根定義。"
      }
    ],
    "misconceptionTarget": "認為每個非負數都一定有兩個不同平方根。",
    "prerequisiteCheck": "需能使用先備技能 整數與平方運算，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需要辨認 0 是正數規則的例外。；具體任務是「判斷平方根的個數。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根意義",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "0aceb1549b1e2aa38e7d4d6eca9bbf5b3f786f579a5601a6bf553dc3352979c9"
  },
  {
    "questionId": "u11-s001-v003",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-meaning",
    "lockedSkillOrder": 1,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪個等式能說明 5 是 25 的平方根？",
    "givenConditions": [
      "候選數是 5，被開方數是 25。"
    ],
    "target": "選出符合平方根定義的關係式。",
    "choices": [
      "25²=5",
      "5+5=25",
      "5²=25",
      "25÷5=25"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：計算 5×5=25，正好符合「平方後等於原數」的定義。 詳算檢查：一個數若平方後得到 25，就是 25 的平方根；5²=25。 因此結果為「5²=25」。",
    "explanation": "一個數若平方後得到 25，就是 25 的平方根；5²=25。",
    "steps": [
      "整理條件：候選數是 5，被開方數是 25。",
      "獨立推導：不參照選項，從題幹條件重新計算：計算 5×5=25，正好符合「平方後等於原數」的定義。 詳算檢查：一個數若平方後得到 25，就是 25 的平方根；5²=25。 因此結果為「5²=25」。",
      "核對目標：答案「5²=25」確實回應「選出符合平方根定義的關係式。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "25²=5",
        "truth": false,
        "reason": "平方的方向顛倒。"
      },
      {
        "choice": "5+5=25",
        "truth": false,
        "reason": "加法不能定義平方根。"
      },
      {
        "choice": "5²=25",
        "truth": true,
        "reason": "此選項符合目標「選出符合平方根定義的關係式。」；一個數若平方後得到 25，就是 25 的平方根；5²=25。"
      },
      {
        "choice": "25÷5=25",
        "truth": false,
        "reason": "等式本身不成立。"
      }
    ],
    "misconceptionTarget": "只看到 5 與 25 有關係，卻沒有檢查平方。",
    "prerequisiteCheck": "需能使用先備技能 整數與平方運算，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "以定義辨識等式，沒有複合運算。；具體任務是「選出符合平方根定義的關係式。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根意義",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "1cdfd53c7270b0e64afb5427007c6f0033a4b70007676339aa68779e30af54dd"
  },
  {
    "questionId": "u11-s001-v004",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-meaning",
    "lockedSkillOrder": 1,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 x²=81，則 x 可能是多少？",
    "givenConditions": [
      "x 為實數且平方等於 81。"
    ],
    "target": "找出方程的全部實數解。",
    "choices": [
      "只有 9",
      "只有 -9",
      "81 或 -81",
      "9 或 -9"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：將方程寫成 x²=9²，實數解為 x=±9。 詳算檢查：9²=81 且 (-9)²=81，所以 x 有兩種可能。 因此結果為「9 或 -9」。",
    "explanation": "9²=81 且 (-9)²=81，所以 x 有兩種可能。",
    "steps": [
      "整理條件：x 為實數且平方等於 81。",
      "獨立推導：不參照選項，從題幹條件重新計算：將方程寫成 x²=9²，實數解為 x=±9。 詳算檢查：9²=81 且 (-9)²=81，所以 x 有兩種可能。 因此結果為「9 或 -9」。",
      "核對目標：答案「9 或 -9」確實回應「找出方程的全部實數解。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "只有 9",
        "truth": false,
        "reason": "漏掉負數平方也為正。"
      },
      {
        "choice": "只有 -9",
        "truth": false,
        "reason": "漏掉正根。"
      },
      {
        "choice": "81 或 -81",
        "truth": false,
        "reason": "把被開方數直接當解。"
      },
      {
        "choice": "9 或 -9",
        "truth": true,
        "reason": "此選項符合目標「找出方程的全部實數解。」；9²=81 且 (-9)²=81，所以 x 有兩種可能。"
      }
    ],
    "misconceptionTarget": "解平方方程時只保留正值。",
    "prerequisiteCheck": "需能使用先備技能 整數與平方運算，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需把平方根意義轉成方程的兩個解。；具體任務是「找出方程的全部實數解。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根意義",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "43e1fecb5c600fc3299cd32660c082c9c250004a62d234ef6a5073cc475f1db1"
  },
  {
    "questionId": "u11-s001-v005",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-meaning",
    "lockedSkillOrder": 1,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列關於負數平方根的敘述何者正確？",
    "givenConditions": [
      "討論範圍明定為實數。"
    ],
    "target": "判斷負數是否有實數平方根。",
    "choices": [
      "負數在實數範圍沒有平方根",
      "每個負數都有兩個平方根",
      "每個負數只有一個平方根",
      "負數的平方根一定是負數"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：任取實數 y，y²≥0；故 y²=-4 之類的式子無實數解。 詳算檢查：實數的平方一定大於或等於 0，因此不可能平方後得到負數。 因此結果為「負數在實數範圍沒有平方根」。",
    "explanation": "實數的平方一定大於或等於 0，因此不可能平方後得到負數。",
    "steps": [
      "整理條件：討論範圍明定為實數。",
      "獨立推導：不參照選項，從題幹條件重新計算：任取實數 y，y²≥0；故 y²=-4 之類的式子無實數解。 詳算檢查：實數的平方一定大於或等於 0，因此不可能平方後得到負數。 因此結果為「負數在實數範圍沒有平方根」。",
      "核對目標：答案「負數在實數範圍沒有平方根」確實回應「判斷負數是否有實數平方根。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "負數在實數範圍沒有平方根",
        "truth": true,
        "reason": "此選項符合目標「判斷負數是否有實數平方根。」；實數的平方一定大於或等於 0，因此不可能平方後得到負數。"
      },
      {
        "choice": "每個負數都有兩個平方根",
        "truth": false,
        "reason": "任何實數的平方都不會是負數。"
      },
      {
        "choice": "每個負數只有一個平方根",
        "truth": false,
        "reason": "仍違反實數平方非負。"
      },
      {
        "choice": "負數的平方根一定是負數",
        "truth": false,
        "reason": "負數平方會變成正數。"
      }
    ],
    "misconceptionTarget": "把「負號」直覺地配給負的平方根。",
    "prerequisiteCheck": "需能使用先備技能 整數與平方運算，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需要使用平方非負的性質說明不存在。；具體任務是「判斷負數是否有實數平方根。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根意義",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "ad2863c7da97fbf15bd240030278a9bf1511c8a679c7fc5566a9fdc909065088"
  },
  {
    "questionId": "u11-s001-v006",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-meaning",
    "lockedSkillOrder": 1,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個正數 a 的兩個平方根分別為 r 與 -r。它們的和是多少？",
    "givenConditions": [
      "a>0，兩根為 r 與 -r。"
    ],
    "target": "求兩個平方根的和。",
    "choices": [
      "2r",
      "0",
      "r²",
      "a"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：兩個平方根互為相反數，相反數相加必為 0。 詳算檢查：r+(-r)=0。 因此結果為「0」。",
    "explanation": "r+(-r)=0。",
    "steps": [
      "整理條件：a>0，兩根為 r 與 -r。",
      "獨立推導：不參照選項，從題幹條件重新計算：兩個平方根互為相反數，相反數相加必為 0。 詳算檢查：r+(-r)=0。 因此結果為「0」。",
      "核對目標：答案「0」確實回應「求兩個平方根的和。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "2r",
        "truth": false,
        "reason": "把 -r 當成 r。"
      },
      {
        "choice": "0",
        "truth": true,
        "reason": "此選項符合目標「求兩個平方根的和。」；r+(-r)=0。"
      },
      {
        "choice": "r²",
        "truth": false,
        "reason": "把平方根相加誤作平方。"
      },
      {
        "choice": "a",
        "truth": false,
        "reason": "誤認兩根之和等於被開方數。"
      }
    ],
    "misconceptionTarget": "忘記兩個平方根的符號相反。",
    "prerequisiteCheck": "需能使用先備技能 整數與平方運算，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需連結平方根成對與相反數概念。；具體任務是「求兩個平方根的和。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根意義",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "0ac1724273d07520292b76aa21e27f3bb38f7856bee586a242bedcd6579f5b6c"
  },
  {
    "questionId": "u11-s001-v007",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-meaning",
    "lockedSkillOrder": 1,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 y²=2.25，則 y 的所有可能值為何？",
    "givenConditions": [
      "y 為實數，2.25=(1.5)²。"
    ],
    "target": "解含小數的平方方程。",
    "choices": [
      "只有 1.5",
      "2.25 與 -2.25",
      "1.5 與 -1.5",
      "1.25 與 -1.25"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：將 2.25 寫成 (1.5)²，所以 y=±1.5。 詳算檢查：因為 1.5²=2.25，負數 -1.5 的平方也等於 2.25。 因此結果為「1.5 與 -1.5」。",
    "explanation": "因為 1.5²=2.25，負數 -1.5 的平方也等於 2.25。",
    "steps": [
      "整理條件：y 為實數，2.25=(1.5)²。",
      "獨立推導：不參照選項，從題幹條件重新計算：將 2.25 寫成 (1.5)²，所以 y=±1.5。 詳算檢查：因為 1.5²=2.25，負數 -1.5 的平方也等於 2.25。 因此結果為「1.5 與 -1.5」。",
      "核對目標：答案「1.5 與 -1.5」確實回應「解含小數的平方方程。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "只有 1.5",
        "truth": false,
        "reason": "漏掉負根。"
      },
      {
        "choice": "2.25 與 -2.25",
        "truth": false,
        "reason": "未先求平方根。"
      },
      {
        "choice": "1.5 與 -1.5",
        "truth": true,
        "reason": "此選項符合目標「解含小數的平方方程。」；因為 1.5²=2.25，負數 -1.5 的平方也等於 2.25。"
      },
      {
        "choice": "1.25 與 -1.25",
        "truth": false,
        "reason": "平方後不是 2.25。"
      }
    ],
    "misconceptionTarget": "遇到小數平方時無法辨認平方根。",
    "prerequisiteCheck": "需能使用先備技能 整數與平方運算，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需辨認小數完全平方並保留雙根。；具體任務是「解含小數的平方方程。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根意義",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "64ec46c654896707abbe2658a148c9cd8ff0a27a544fc943be98c99bc08f4ff8"
  },
  {
    "questionId": "u11-s001-v008",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-meaning",
    "lockedSkillOrder": 1,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若正數 m 的一個平方根是 m 本身，則 m 等於多少？",
    "givenConditions": [
      "m>0 且 m²=m。"
    ],
    "target": "找出符合自我平方根條件的 m。",
    "choices": [
      "0",
      "2",
      "4",
      "1"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：由「m 是 m 的平方根」得 m²=m，解得 0 或 1，再用正數條件排除 0。 詳算檢查：條件是 m²=m，得 m(m-1)=0；因 m>0，所以 m=1。 因此結果為「1」。",
    "explanation": "條件是 m²=m，得 m(m-1)=0；因 m>0，所以 m=1。",
    "steps": [
      "整理條件：m>0 且 m²=m。",
      "獨立推導：不參照選項，從題幹條件重新計算：由「m 是 m 的平方根」得 m²=m，解得 0 或 1，再用正數條件排除 0。 詳算檢查：條件是 m²=m，得 m(m-1)=0；因 m>0，所以 m=1。 因此結果為「1」。",
      "核對目標：答案「1」確實回應「找出符合自我平方根條件的 m。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "0",
        "truth": false,
        "reason": "題目已說 m 是正數，排除 0。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "2²不等於2。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "4²不等於4。"
      },
      {
        "choice": "1",
        "truth": true,
        "reason": "此選項符合目標「找出符合自我平方根條件的 m。」；條件是 m²=m，得 m(m-1)=0；因 m>0，所以 m=1。"
      }
    ],
    "misconceptionTarget": "忽略「正數」條件而保留 0。",
    "prerequisiteCheck": "需能使用先備技能 整數與平方運算，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "結合平方根定義、因式分解與條件篩選。；具體任務是「找出符合自我平方根條件的 m。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根意義",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "067b218e5173c85ce41b1771c2b158f2d76e190b5432f8df4365f712aa218149"
  },
  {
    "questionId": "u11-s001-v009",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-meaning",
    "lockedSkillOrder": 1,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知 a>0，且 a 的兩個平方根相差 12，則 a 為何？",
    "givenConditions": [
      "a>0，兩根互為相反數，較大根減較小根為 12。"
    ],
    "target": "由兩根差反求被開方數。",
    "choices": [
      "36",
      "6",
      "72",
      "144"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：正根設為 r>0；r-(-r)=12 得 2r=12，故 r=6，再平方得 a=36。 詳算檢查：兩根是 r 與 -r，差為 2r=12，所以 r=6，a=r²=36。 因此結果為「36」。",
    "explanation": "兩根是 r 與 -r，差為 2r=12，所以 r=6，a=r²=36。",
    "steps": [
      "整理條件：a>0，兩根互為相反數，較大根減較小根為 12。",
      "獨立推導：不參照選項，從題幹條件重新計算：正根設為 r>0；r-(-r)=12 得 2r=12，故 r=6，再平方得 a=36。 詳算檢查：兩根是 r 與 -r，差為 2r=12，所以 r=6，a=r²=36。 因此結果為「36」。",
      "核對目標：答案「36」確實回應「由兩根差反求被開方數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "36",
        "truth": true,
        "reason": "此選項符合目標「由兩根差反求被開方數。」；兩根是 r 與 -r，差為 2r=12，所以 r=6，a=r²=36。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "把兩根的差直接當平方根。"
      },
      {
        "choice": "72",
        "truth": false,
        "reason": "把 12 平分後又乘 2。"
      },
      {
        "choice": "144",
        "truth": false,
        "reason": "誤把差 12 當成正平方根。"
      }
    ],
    "misconceptionTarget": "不知道兩平方根的距離是正根的兩倍。",
    "prerequisiteCheck": "需能使用先備技能 整數與平方運算，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需建立代數關係並再平方回原數。；具體任務是「由兩根差反求被開方數。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根意義",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "bf74b038946cbec9c83a91d7254a56f852564e4d8ef9193af4dc55b1ff7c2015"
  },
  {
    "questionId": "u11-s001-v010",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-meaning",
    "lockedSkillOrder": 1,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "figure",
    "figureId": "fig-u11-s001-square-area",
    "drawingSpecReference": "units/u11/s001/drawing-specs.jsonl#fig-u11-s001-square-area",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一塊正方形標示面積為 196 平方公分。若邊長取正值，邊長是多少？",
    "givenConditions": [
      "正方形面積 196 平方公分，邊長為正。"
    ],
    "target": "由面積求實際邊長。",
    "choices": [
      "±14 公分",
      "14 公分",
      "98 公分",
      "196 公分"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：正方形面積是邊長平方；解 s²=196 得 ±14，但實際長度只取 14。 詳算檢查：設邊長為 s>0，s²=196，所以 s=14 公分。 因此結果為「14 公分」。",
    "explanation": "設邊長為 s>0，s²=196，所以 s=14 公分。",
    "steps": [
      "整理條件：正方形面積 196 平方公分，邊長為正。",
      "獨立推導：不參照選項，從題幹條件重新計算：正方形面積是邊長平方；解 s²=196 得 ±14，但實際長度只取 14。 詳算檢查：設邊長為 s>0，s²=196，所以 s=14 公分。 因此結果為「14 公分」。",
      "核對目標：答案「14 公分」確實回應「由面積求實際邊長。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "±14 公分",
        "truth": false,
        "reason": "長度不能取負值。"
      },
      {
        "choice": "14 公分",
        "truth": true,
        "reason": "此選項符合目標「由面積求實際邊長。」；設邊長為 s>0，s²=196，所以 s=14 公分。"
      },
      {
        "choice": "98 公分",
        "truth": false,
        "reason": "把面積除以 2。"
      },
      {
        "choice": "196 公分",
        "truth": false,
        "reason": "把面積直接當邊長。"
      }
    ],
    "misconceptionTarget": "在幾何長度情境仍寫正負兩個值。",
    "prerequisiteCheck": "需能使用先備技能 整數與平方運算，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "平方公分開平方後為公分；答案保留長度單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需要把面積資料轉成平方方程並依情境選正根。；具體任務是「由面積求實際邊長。」。",
    "literacyContextNecessity": "面積與邊長的關係是情境不可刪除的核心。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根意義",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "64a63c9592d002ac55878196cbf826a02cc4804badb6e08ef2485a48b9cf7e71"
  },
  {
    "questionId": "u11-s001-v011",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-meaning",
    "lockedSkillOrder": 1,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某程式的「平方根」按鍵依規格只回傳非負值。輸入 324 時，畫面應顯示多少？",
    "givenConditions": [
      "程式輸入 324，輸出規則是非負平方根。"
    ],
    "target": "依規格判斷顯示值。",
    "choices": [
      "-18",
      "±18",
      "18",
      "162"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：先找 324 的兩個平方根 ±18，再依程式規格選非負的 18。 詳算檢查：18²=324，且規格只回傳非負值，所以顯示 18。 因此結果為「18」。",
    "explanation": "18²=324，且規格只回傳非負值，所以顯示 18。",
    "steps": [
      "整理條件：程式輸入 324，輸出規則是非負平方根。",
      "獨立推導：不參照選項，從題幹條件重新計算：先找 324 的兩個平方根 ±18，再依程式規格選非負的 18。 詳算檢查：18²=324，且規格只回傳非負值，所以顯示 18。 因此結果為「18」。",
      "核對目標：答案「18」確實回應「依規格判斷顯示值。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "-18",
        "truth": false,
        "reason": "規格明定只回傳非負值。"
      },
      {
        "choice": "±18",
        "truth": false,
        "reason": "畫面回傳單一非負主平方根。"
      },
      {
        "choice": "18",
        "truth": true,
        "reason": "此選項符合目標「依規格判斷顯示值。」；18²=324，且規格只回傳非負值，所以顯示 18。"
      },
      {
        "choice": "162",
        "truth": false,
        "reason": "錯把平方根當除以 2。"
      }
    ],
    "misconceptionTarget": "把所有平方根與運算按鍵的主平方根輸出混淆。",
    "prerequisiteCheck": "需能使用先備技能 整數與平方運算，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "同時解讀數學定義與軟體輸出限制。；具體任務是「依規格判斷顯示值。」。",
    "literacyContextNecessity": "「只回傳非負值」決定必須排除 -18，不能刪除。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根意義",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "ab5326c2141ba065e4db2e9be791aac9d764bbb362dafad539d1bf7901e5b32f"
  },
  {
    "questionId": "u11-s001-v012",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-meaning",
    "lockedSkillOrder": 1,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "物理表格給出速度 v 滿足 v²=400，並註明 v 表示速率。表格中的 v 應填多少？",
    "givenConditions": [
      "v²=400，v 是速率。"
    ],
    "target": "求符合情境的 v。",
    "choices": [
      "-20",
      "±20",
      "200",
      "20"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：解平方方程得到兩個候選值，再以「速率」的非負性篩成 20。 詳算檢查：由 v²=400 得 v=±20；速率不能為負，因此填 20。 因此結果為「20」。",
    "explanation": "由 v²=400 得 v=±20；速率不能為負，因此填 20。",
    "steps": [
      "整理條件：v²=400，v 是速率。",
      "獨立推導：不參照選項，從題幹條件重新計算：解平方方程得到兩個候選值，再以「速率」的非負性篩成 20。 詳算檢查：由 v²=400 得 v=±20；速率不能為負，因此填 20。 因此結果為「20」。",
      "核對目標：答案「20」確實回應「求符合情境的 v。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "-20",
        "truth": false,
        "reason": "速率是非負量。"
      },
      {
        "choice": "±20",
        "truth": false,
        "reason": "方程有兩解，但速率情境只接受非負值。"
      },
      {
        "choice": "200",
        "truth": false,
        "reason": "把平方誤當乘 2。"
      },
      {
        "choice": "20",
        "truth": true,
        "reason": "此選項符合目標「求符合情境的 v。」；由 v²=400 得 v=±20；速率不能為負，因此填 20。"
      }
    ],
    "misconceptionTarget": "只解方程而不檢查物理量限制。",
    "prerequisiteCheck": "需能使用先備技能 整數與平方運算，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需要先求雙根，再使用量的非負限制。；具體任務是「求符合情境的 v。」。",
    "literacyContextNecessity": "速率的非負性是選根的必要資訊。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根意義",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "584eccb7a7b4720c1aa862a3f05cc9e86347ce0ea74c36539d669173f0676879"
  },
  {
    "questionId": "u11-s002-v001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-simplify",
    "lockedSkillOrder": 2,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某生先把 √12 寫成 √(4×3)。完成開平方後，最簡根式為何？",
    "givenConditions": [
      "已指定平方因數分解 12=4×3。"
    ],
    "target": "依給定分解完成提出平方因數。",
    "choices": [
      "√6",
      "2√3",
      "3√2",
      "4√3"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：找最大完全平方因數 4；√(4×3)=2√3。 詳算檢查：12=4×3，所以 √12=√4×√3=2√3。 因此結果為「2√3」。",
    "explanation": "12=4×3，所以 √12=√4×√3=2√3。",
    "steps": [
      "整理條件：已指定平方因數分解 12=4×3。",
      "獨立推導：不參照選項，從題幹條件重新計算：找最大完全平方因數 4；√(4×3)=2√3。 詳算檢查：12=4×3，所以 √12=√4×√3=2√3。 因此結果為「2√3」。",
      "核對目標：答案「2√3」確實回應「依給定分解完成提出平方因數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "√6",
        "truth": false,
        "reason": "錯誤地把 12 除以 2。"
      },
      {
        "choice": "2√3",
        "truth": true,
        "reason": "此選項符合目標「依給定分解完成提出平方因數。」；12=4×3，所以 √12=√4×√3=2√3。"
      },
      {
        "choice": "3√2",
        "truth": false,
        "reason": "3√2 的平方是 18。"
      },
      {
        "choice": "4√3",
        "truth": false,
        "reason": "提出 4 時未開平方。"
      }
    ],
    "misconceptionTarget": "把完全平方因數直接提出而沒有開平方。",
    "prerequisiteCheck": "需能使用先備技能 square-root-meaning，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "提供分解步驟，只需正確開出 √4 並保留 √3。；具體任務是「依給定分解完成提出平方因數。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式化簡",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "852b99a06d91d4ac9fbf8d98f10b92ef0ab2cea2bd082c4c7b6c693573470f78"
  },
  {
    "questionId": "u11-s002-v002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-simplify",
    "lockedSkillOrder": 2,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "小明把 √72 先寫成 3√8。若要繼續化成最簡根式，下一步的結果應為何？",
    "givenConditions": [
      "已知中間式3√8與原式√72等值。"
    ],
    "target": "完成第二階段化簡。",
    "choices": [
      "3√2",
      "6√8",
      "9√2",
      "6√2"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：由√8=√(4×2)=2√2，再乘原係數3。 詳算檢查：3√8=3×2√2=6√2。 因此結果為「6√2」。",
    "explanation": "3√8=3×2√2=6√2。",
    "steps": [
      "整理條件：已知中間式3√8與原式√72等值。",
      "獨立推導：不參照選項，從題幹條件重新計算：由√8=√(4×2)=2√2，再乘原係數3。 詳算檢查：3√8=3×2√2=6√2。 因此結果為「6√2」。",
      "核對目標：答案「6√2」確實回應「完成第二階段化簡。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "3√2",
        "truth": false,
        "reason": "漏掉√8=2√2中的係數2。"
      },
      {
        "choice": "6√8",
        "truth": false,
        "reason": "沒有化簡根號內。"
      },
      {
        "choice": "9√2",
        "truth": false,
        "reason": "係數相乘錯誤。"
      },
      {
        "choice": "6√2",
        "truth": true,
        "reason": "此選項符合目標「完成第二階段化簡。」；3√8=3×2√2=6√2。"
      }
    ],
    "misconceptionTarget": "中途形式等值但尚未最簡，或漏乘係數。",
    "prerequisiteCheck": "需能使用先備技能 square-root-meaning，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "考查辨認未完成的中間步驟，而非只換一組被開方數。；具體任務是「完成第二階段化簡。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式化簡",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "e2ad17418dbc5c7ccf3b8f93b36c5b877e518dee6267c12d19ce80c2034cc4bb"
  },
  {
    "questionId": "u11-s002-v003",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-simplify",
    "lockedSkillOrder": 2,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個式子與 √200 等值，且已是最簡根式？",
    "givenConditions": [
      "候選須同時等值且最簡。"
    ],
    "target": "選出符合兩項條件的表示式。",
    "choices": [
      "10√2",
      "5√8",
      "20√5",
      "100√2"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：同時檢查等值性與最簡條件；10√2平方為200。 詳算檢查：√200=√(100×2)=10√2，且2不含平方因數。 因此結果為「10√2」。",
    "explanation": "√200=√(100×2)=10√2，且2不含平方因數。",
    "steps": [
      "整理條件：候選須同時等值且最簡。",
      "獨立推導：不參照選項，從題幹條件重新計算：同時檢查等值性與最簡條件；10√2平方為200。 詳算檢查：√200=√(100×2)=10√2，且2不含平方因數。 因此結果為「10√2」。",
      "核對目標：答案「10√2」確實回應「選出符合兩項條件的表示式。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "10√2",
        "truth": true,
        "reason": "此選項符合目標「選出符合兩項條件的表示式。」；√200=√(100×2)=10√2，且2不含平方因數。"
      },
      {
        "choice": "5√8",
        "truth": false,
        "reason": "等值但根號內仍含4。"
      },
      {
        "choice": "20√5",
        "truth": false,
        "reason": "平方後不是200。"
      },
      {
        "choice": "100√2",
        "truth": false,
        "reason": "把√100誤作100。"
      }
    ],
    "misconceptionTarget": "只檢查等值而沒有檢查是否最簡。",
    "prerequisiteCheck": "需能使用先備技能 square-root-meaning，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "從計算題改為雙條件辨識，能力焦點不同。；具體任務是「選出符合兩項條件的表示式。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式化簡",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "0424b14abe067f721654988f6fcd1463ea922e5421e354ca1d02a06c90eea0c3"
  },
  {
    "questionId": "u11-s002-v004",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-simplify",
    "lockedSkillOrder": 2,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "化簡 √180 時，若先寫成 √(36×5)，根號外與根號內應組成哪個最簡結果？",
    "givenConditions": [
      "180 已分解為 36×5。"
    ],
    "target": "由指定平方因數完成化簡。",
    "choices": [
      "3√20",
      "9√2",
      "6√5",
      "36√5"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：最大平方因數可取 36，開平方得 6，剩下 √5。 詳算檢查：180=36×5，所以 √180=6√5。 因此結果為「6√5」。",
    "explanation": "180=36×5，所以 √180=6√5。",
    "steps": [
      "整理條件：180 已分解為 36×5。",
      "獨立推導：不參照選項，從題幹條件重新計算：最大平方因數可取 36，開平方得 6，剩下 √5。 詳算檢查：180=36×5，所以 √180=6√5。 因此結果為「6√5」。",
      "核對目標：答案「6√5」確實回應「由指定平方因數完成化簡。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "3√20",
        "truth": false,
        "reason": "仍可再化簡。"
      },
      {
        "choice": "9√2",
        "truth": false,
        "reason": "平方後是 162。"
      },
      {
        "choice": "6√5",
        "truth": true,
        "reason": "此選項符合目標「由指定平方因數完成化簡。」；180=36×5，所以 √180=6√5。"
      },
      {
        "choice": "36√5",
        "truth": false,
        "reason": "√36 被錯算成 36。"
      }
    ],
    "misconceptionTarget": "只提出部分平方因數後就停止。",
    "prerequisiteCheck": "需能使用先備技能 square-root-meaning，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需辨認 √36=6 並維持剩餘因數5。；具體任務是「由指定平方因數完成化簡。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式化簡",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "a6c634eda54fe1e2a97bf9fef614738c2a20f2bde5b459559e80a8b33b867fd3"
  },
  {
    "questionId": "u11-s002-v005",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-simplify",
    "lockedSkillOrder": 2,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "3√48 化簡後是多少？",
    "givenConditions": [
      "根式前有係數 3，48=16×3。"
    ],
    "target": "化簡含外部係數的根式。",
    "choices": [
      "6√3",
      "12√6",
      "12√3",
      "144√3"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：先化簡根號，再把外面的 3 與 4 相乘。 詳算檢查：√48=√(16×3)=4√3，因此 3√48=12√3。 因此結果為「12√3」。",
    "explanation": "√48=√(16×3)=4√3，因此 3√48=12√3。",
    "steps": [
      "整理條件：根式前有係數 3，48=16×3。",
      "獨立推導：不參照選項，從題幹條件重新計算：先化簡根號，再把外面的 3 與 4 相乘。 詳算檢查：√48=√(16×3)=4√3，因此 3√48=12√3。 因此結果為「12√3」。",
      "核對目標：答案「12√3」確實回應「化簡含外部係數的根式。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "6√3",
        "truth": false,
        "reason": "漏乘原來的係數 3。"
      },
      {
        "choice": "12√6",
        "truth": false,
        "reason": "根號內剩餘因數錯。"
      },
      {
        "choice": "12√3",
        "truth": true,
        "reason": "此選項符合目標「化簡含外部係數的根式。」；√48=√(16×3)=4√3，因此 3√48=12√3。"
      },
      {
        "choice": "144√3",
        "truth": false,
        "reason": "把 √16 當 16。"
      }
    ],
    "misconceptionTarget": "化簡後忘記原有係數。",
    "prerequisiteCheck": "需能使用先備技能 square-root-meaning，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "多一步係數乘法，需維持結構。；具體任務是「化簡含外部係數的根式。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式化簡",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "e8a7562ff5d49d0811c450d4410158e043f8843e53aab4b7340df1159e9b3e67"
  },
  {
    "questionId": "u11-s002-v006",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-simplify",
    "lockedSkillOrder": 2,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "√(2⁴×3) 的最簡形式為何？",
    "givenConditions": [
      "被開方數以指數形式給出。"
    ],
    "target": "利用指數辨認完全平方因數。",
    "choices": [
      "4√3",
      "2√3",
      "8√3",
      "16√3"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：√(2⁴)=2²=4，再乘 √3。 詳算檢查：2⁴=16，√(16×3)=4√3。 因此結果為「4√3」。",
    "explanation": "2⁴=16，√(16×3)=4√3。",
    "steps": [
      "整理條件：被開方數以指數形式給出。",
      "獨立推導：不參照選項，從題幹條件重新計算：√(2⁴)=2²=4，再乘 √3。 詳算檢查：2⁴=16，√(16×3)=4√3。 因此結果為「4√3」。",
      "核對目標：答案「4√3」確實回應「利用指數辨認完全平方因數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "4√3",
        "truth": true,
        "reason": "此選項符合目標「利用指數辨認完全平方因數。」；2⁴=16，√(16×3)=4√3。"
      },
      {
        "choice": "2√3",
        "truth": false,
        "reason": "把 2⁴ 的平方根錯算成 2。"
      },
      {
        "choice": "8√3",
        "truth": false,
        "reason": "把指數除錯。"
      },
      {
        "choice": "16√3",
        "truth": false,
        "reason": "未對 16 開平方。"
      }
    ],
    "misconceptionTarget": "指數在開平方時處理錯誤。",
    "prerequisiteCheck": "需能使用先備技能 square-root-meaning，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需理解偶次方開平方的指數變化。；具體任務是「利用指數辨認完全平方因數。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式化簡",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "718092f1c83d6506596ee107d786d729e9a3fc30848b041e8c3dcb9d4debba6e"
  },
  {
    "questionId": "u11-s002-v007",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-simplify",
    "lockedSkillOrder": 2,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪個式子與 √432 等值，而且根號內已不含可提出的平方因數？",
    "givenConditions": [
      "候選式需同時符合等值與最簡兩項條件。"
    ],
    "target": "選出 √432 的等值最簡表示。",
    "choices": [
      "6√12",
      "18√2",
      "144√3",
      "12√3"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：辨認 432 的最大平方因數 144；√144=12。 詳算檢查：432=144×3，所以 √432=12√3。 因此結果為「12√3」。",
    "explanation": "432=144×3，所以 √432=12√3。",
    "steps": [
      "整理條件：候選式需同時符合等值與最簡兩項條件。",
      "獨立推導：不參照選項，從題幹條件重新計算：辨認 432 的最大平方因數 144；√144=12。 詳算檢查：432=144×3，所以 √432=12√3。 因此結果為「12√3」。",
      "核對目標：答案「12√3」確實回應「選出 √432 的等值最簡表示。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "6√12",
        "truth": false,
        "reason": "等值但根號內仍含 4。"
      },
      {
        "choice": "18√2",
        "truth": false,
        "reason": "平方後為 648。"
      },
      {
        "choice": "144√3",
        "truth": false,
        "reason": "把 √144 誤作 144。"
      },
      {
        "choice": "12√3",
        "truth": true,
        "reason": "此選項符合目標「選出 √432 的等值最簡表示。」；432=144×3，所以 √432=12√3。"
      }
    ],
    "misconceptionTarget": "只用較小平方因數而未化到底。",
    "prerequisiteCheck": "需能使用先備技能 square-root-meaning，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "要同時用平方驗證等值性並檢查最簡條件。；具體任務是「選出 √432 的等值最簡表示。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式化簡",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "f73a4873e7a1f2b70c205d946e8d28ee178eb1ebdbbf09422973417d9fcd28c3"
  },
  {
    "questionId": "u11-s002-v008",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-simplify",
    "lockedSkillOrder": 2,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "√(675) 化成最簡根式為何？",
    "givenConditions": [
      "675 含平方因數 225。"
    ],
    "target": "化簡較大被開方數。",
    "choices": [
      "5√27",
      "15√3",
      "25√3",
      "15√5"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：225=15²，故 √(225×3)=15√3。 詳算檢查：675=225×3，因此 √675=15√3。 因此結果為「15√3」。",
    "explanation": "675=225×3，因此 √675=15√3。",
    "steps": [
      "整理條件：675 含平方因數 225。",
      "獨立推導：不參照選項，從題幹條件重新計算：225=15²，故 √(225×3)=15√3。 詳算檢查：675=225×3，因此 √675=15√3。 因此結果為「15√3」。",
      "核對目標：答案「15√3」確實回應「化簡較大被開方數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "5√27",
        "truth": false,
        "reason": "尚未最簡。"
      },
      {
        "choice": "15√3",
        "truth": true,
        "reason": "此選項符合目標「化簡較大被開方數。」；675=225×3，因此 √675=15√3。"
      },
      {
        "choice": "25√3",
        "truth": false,
        "reason": "√225 不是 25。"
      },
      {
        "choice": "15√5",
        "truth": false,
        "reason": "剩餘因數判斷錯。"
      }
    ],
    "misconceptionTarget": "找到平方因數後錯算平方根。",
    "prerequisiteCheck": "需能使用先備技能 square-root-meaning，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需熟悉 15²=225 並正確分解。；具體任務是「化簡較大被開方數。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式化簡",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "1de1c483fce4678e090c5d104e1ed4d4e2c4701aac4d629fa57a590b713e86ec"
  },
  {
    "questionId": "u11-s002-v009",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-simplify",
    "lockedSkillOrder": 2,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 n=√(2³×3²×5)，則 n 的最簡根式為何？",
    "givenConditions": [
      "被開方數以質因數冪表示。"
    ],
    "target": "配對提出平方因數。",
    "choices": [
      "3√40",
      "18√10",
      "6√5",
      "6√10"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：把成對因數 2²、3² 提出，留下 2×5=10 在根號內。 詳算檢查：2³×3²×5=(2²×3²)×(2×5)，開平方後得到 2×3√10=6√10。 因此結果為「6√10」。",
    "explanation": "2³×3²×5=(2²×3²)×(2×5)，開平方後得到 2×3√10=6√10。",
    "steps": [
      "整理條件：被開方數以質因數冪表示。",
      "獨立推導：不參照選項，從題幹條件重新計算：把成對因數 2²、3² 提出，留下 2×5=10 在根號內。 詳算檢查：2³×3²×5=(2²×3²)×(2×5)，開平方後得到 2×3√10=6√10。 因此結果為「6√10」。",
      "核對目標：答案「6√10」確實回應「配對提出平方因數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "3√40",
        "truth": false,
        "reason": "等值但未最簡。"
      },
      {
        "choice": "18√10",
        "truth": false,
        "reason": "把 2³ 的全部 2 都提出。"
      },
      {
        "choice": "6√5",
        "truth": false,
        "reason": "漏掉未成對的因數 2。"
      },
      {
        "choice": "6√10",
        "truth": true,
        "reason": "此選項符合目標「配對提出平方因數。」；2³×3²×5=(2²×3²)×(2×5)，開平方後得到 2×3√10=6√10。"
      }
    ],
    "misconceptionTarget": "質因數配對時漏掉單獨因數。",
    "prerequisiteCheck": "需能使用先備技能 square-root-meaning，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需同時處理多種質因數與奇偶次方。；具體任務是「配對提出平方因數。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式化簡",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "9719e759e5477a5a53261dcbaec0cdb09cb9fcd62752eb059881a20761665b5c"
  },
  {
    "questionId": "u11-s002-v010",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-simplify",
    "lockedSkillOrder": 2,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個正方形花圃面積為 108 平方公尺。設計圖要求邊長以最簡根式表示，應寫成多少？",
    "givenConditions": [
      "正方形面積 108 平方公尺。"
    ],
    "target": "求邊長並用最簡根式表達。",
    "choices": [
      "54 公尺",
      "3√12 公尺",
      "6√3 公尺",
      "108 公尺"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：由面積求邊長，再依要求化簡：√108=6√3。 詳算檢查：邊長=√108=√(36×3)=6√3 公尺。 因此結果為「6√3 公尺」。",
    "explanation": "邊長=√108=√(36×3)=6√3 公尺。",
    "steps": [
      "整理條件：正方形面積 108 平方公尺。",
      "獨立推導：不參照選項，從題幹條件重新計算：由面積求邊長，再依要求化簡：√108=6√3。 詳算檢查：邊長=√108=√(36×3)=6√3 公尺。 因此結果為「6√3 公尺」。",
      "核對目標：答案「6√3 公尺」確實回應「求邊長並用最簡根式表達。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "54 公尺",
        "truth": false,
        "reason": "把面積除以 2。"
      },
      {
        "choice": "3√12 公尺",
        "truth": false,
        "reason": "等值但未符合最簡根式要求。"
      },
      {
        "choice": "6√3 公尺",
        "truth": true,
        "reason": "此選項符合目標「求邊長並用最簡根式表達。」；邊長=√108=√(36×3)=6√3 公尺。"
      },
      {
        "choice": "108 公尺",
        "truth": false,
        "reason": "把面積直接當邊長。"
      }
    ],
    "misconceptionTarget": "忽略題目要求的最簡根式。",
    "prerequisiteCheck": "需能使用先備技能 square-root-meaning，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "平方公尺開平方成公尺。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "包含建模與化簡兩步。；具體任務是「求邊長並用最簡根式表達。」。",
    "literacyContextNecessity": "「最簡根式」是設計圖格式要求，情境決定答案形式。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式化簡",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "fd518ecc91f745e963e680515b83572199f11be4ffc6eeefe2ec354554309ac0"
  },
  {
    "questionId": "u11-s002-v011",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-simplify",
    "lockedSkillOrder": 2,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某感測器輸出長度 √300 公分，報表規定不得使用小數且須化為最簡根式。報表應填何者？",
    "givenConditions": [
      "輸出 √300 公分，格式禁用小數。"
    ],
    "target": "轉成最簡根式。",
    "choices": [
      "30√3 公分",
      "10√3 公分",
      "5√12 公分",
      "150 公分"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：依格式不能近似；抽出 100 得 10√3。 詳算檢查：√300=√(100×3)=10√3 公分。 因此結果為「10√3 公分」。",
    "explanation": "√300=√(100×3)=10√3 公分。",
    "steps": [
      "整理條件：輸出 √300 公分，格式禁用小數。",
      "獨立推導：不參照選項，從題幹條件重新計算：依格式不能近似；抽出 100 得 10√3。 詳算檢查：√300=√(100×3)=10√3 公分。 因此結果為「10√3 公分」。",
      "核對目標：答案「10√3 公分」確實回應「轉成最簡根式。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "30√3 公分",
        "truth": false,
        "reason": "係數平方後不符。"
      },
      {
        "choice": "10√3 公分",
        "truth": true,
        "reason": "此選項符合目標「轉成最簡根式。」；√300=√(100×3)=10√3 公分。"
      },
      {
        "choice": "5√12 公分",
        "truth": false,
        "reason": "等值但未最簡。"
      },
      {
        "choice": "150 公分",
        "truth": false,
        "reason": "誤把開平方當除以 2。"
      }
    ],
    "misconceptionTarget": "把等值但未最簡的形式當作完成。",
    "prerequisiteCheck": "需能使用先備技能 square-root-meaning，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需同時遵守精確值與格式限制。；具體任務是「轉成最簡根式。」。",
    "literacyContextNecessity": "報表規定使「不能改成小數」與「必須最簡」都不可刪除。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式化簡",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "85dd7a410388c61859128bc7ade929c12a131f8ddf8943acac7defa078ab1179"
  },
  {
    "questionId": "u11-s002-v012",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-simplify",
    "lockedSkillOrder": 2,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一條方形截面木柱的截面積為 192 平方公分。工單以最簡根式記邊長，邊長應記為何？",
    "givenConditions": [
      "方形截面面積 192 平方公分。"
    ],
    "target": "求正邊長的最簡根式。",
    "choices": [
      "8√3 公分",
      "96 公分",
      "4√12 公分",
      "16√3 公分"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：正方形截面邊長平方為 192；取正根並化簡成 8√3。 詳算檢查：邊長=√192=√(64×3)=8√3 公分。 因此結果為「8√3 公分」。",
    "explanation": "邊長=√192=√(64×3)=8√3 公分。",
    "steps": [
      "整理條件：方形截面面積 192 平方公分。",
      "獨立推導：不參照選項，從題幹條件重新計算：正方形截面邊長平方為 192；取正根並化簡成 8√3。 詳算檢查：邊長=√192=√(64×3)=8√3 公分。 因此結果為「8√3 公分」。",
      "核對目標：答案「8√3 公分」確實回應「求正邊長的最簡根式。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "8√3 公分",
        "truth": true,
        "reason": "此選項符合目標「求正邊長的最簡根式。」；邊長=√192=√(64×3)=8√3 公分。"
      },
      {
        "choice": "96 公分",
        "truth": false,
        "reason": "誤用面積除以 2。"
      },
      {
        "choice": "4√12 公分",
        "truth": false,
        "reason": "等值但工單要求最簡。"
      },
      {
        "choice": "16√3 公分",
        "truth": false,
        "reason": "把 √64 錯算成 16。"
      }
    ],
    "misconceptionTarget": "忽略長度取正值或化簡要求。",
    "prerequisiteCheck": "需能使用先備技能 square-root-meaning，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "面積單位開平方後為公分。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "整合幾何關係、正根與根式化簡。；具體任務是「求正邊長的最簡根式。」。",
    "literacyContextNecessity": "木柱截面決定使用正方形面積公式與正長度。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式化簡",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "1a92f8692e44e4ea18e5a33f483faac76861e19415e09b5eae237c64388faffc"
  },
  {
    "questionId": "u11-s003-v001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-arithmetic",
    "lockedSkillOrder": 3,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "2√3+5√3 等於多少？",
    "givenConditions": [
      "兩項都是 √3 的倍數。"
    ],
    "target": "合併同類根式。",
    "choices": [
      "7√6",
      "10√3",
      "7√3",
      "3√8"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：兩項的根號部分相同，係數 2+5=7。 詳算檢查：同類根式只加係數：(2+5)√3=7√3。 因此結果為「7√3」。",
    "explanation": "同類根式只加係數：(2+5)√3=7√3。",
    "steps": [
      "整理條件：兩項都是 √3 的倍數。",
      "獨立推導：不參照選項，從題幹條件重新計算：兩項的根號部分相同，係數 2+5=7。 詳算檢查：同類根式只加係數：(2+5)√3=7√3。 因此結果為「7√3」。",
      "核對目標：答案「7√3」確實回應「合併同類根式。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "7√6",
        "truth": false,
        "reason": "把根號內數也相加。"
      },
      {
        "choice": "10√3",
        "truth": false,
        "reason": "把係數相乘。"
      },
      {
        "choice": "7√3",
        "truth": true,
        "reason": "此選項符合目標「合併同類根式。」；同類根式只加係數：(2+5)√3=7√3。"
      },
      {
        "choice": "3√8",
        "truth": false,
        "reason": "不應把兩項併入同一根號。"
      }
    ],
    "misconceptionTarget": "把 √3+√3 誤作 √6。",
    "prerequisiteCheck": "需能使用先備技能 square-root-simplify，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "直接係數相加。；具體任務是「合併同類根式。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式四則",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "7c51dc3c76747e2c957452204095d8ea515f27044a98fb432596dcf3e47624a5"
  },
  {
    "questionId": "u11-s003-v002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-arithmetic",
    "lockedSkillOrder": 3,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "√12+√27 化簡後為何？",
    "givenConditions": [
      "兩根式可化成同類根式。"
    ],
    "target": "完成化簡與加法。",
    "choices": [
      "5√3",
      "√39",
      "3√3",
      "6√3"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：先各自化簡，再合併 2√3+3√3。 詳算檢查：√12=2√3，√27=3√3，所以和為 5√3。 因此結果為「5√3」。",
    "explanation": "√12=2√3，√27=3√3，所以和為 5√3。",
    "steps": [
      "整理條件：兩根式可化成同類根式。",
      "獨立推導：不參照選項，從題幹條件重新計算：先各自化簡，再合併 2√3+3√3。 詳算檢查：√12=2√3，√27=3√3，所以和為 5√3。 因此結果為「5√3」。",
      "核對目標：答案「5√3」確實回應「完成化簡與加法。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "5√3",
        "truth": true,
        "reason": "此選項符合目標「完成化簡與加法。」；√12=2√3，√27=3√3，所以和為 5√3。"
      },
      {
        "choice": "√39",
        "truth": false,
        "reason": "根式加法不能直接加被開方數。"
      },
      {
        "choice": "3√3",
        "truth": false,
        "reason": "漏掉其中一項。"
      },
      {
        "choice": "6√3",
        "truth": false,
        "reason": "係數相加錯誤。"
      }
    ],
    "misconceptionTarget": "未先化簡就直接合併被開方數。",
    "prerequisiteCheck": "需能使用先備技能 square-root-simplify，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需先辨認同類根式。；具體任務是「完成化簡與加法。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式四則",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "56b213557166a2422027972dc3ee7ef3e9ac97ce7377d2324cb0ffe605013aeb"
  },
  {
    "questionId": "u11-s003-v003",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-arithmetic",
    "lockedSkillOrder": 3,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "√18-√8 等於多少？",
    "givenConditions": [
      "18=9×2，8=4×2。"
    ],
    "target": "計算根式差。",
    "choices": [
      "√10",
      "2√2",
      "-√2",
      "√2"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：化簡後係數為 3-2=1。 詳算檢查：√18=3√2，√8=2√2，相減得 √2。 因此結果為「√2」。",
    "explanation": "√18=3√2，√8=2√2，相減得 √2。",
    "steps": [
      "整理條件：18=9×2，8=4×2。",
      "獨立推導：不參照選項，從題幹條件重新計算：化簡後係數為 3-2=1。 詳算檢查：√18=3√2，√8=2√2，相減得 √2。 因此結果為「√2」。",
      "核對目標：答案「√2」確實回應「計算根式差。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "√10",
        "truth": false,
        "reason": "直接相減被開方數。"
      },
      {
        "choice": "2√2",
        "truth": false,
        "reason": "係數 3-2 算錯。"
      },
      {
        "choice": "-√2",
        "truth": false,
        "reason": "減法順序顛倒。"
      },
      {
        "choice": "√2",
        "truth": true,
        "reason": "此選項符合目標「計算根式差。」；√18=3√2，√8=2√2，相減得 √2。"
      }
    ],
    "misconceptionTarget": "忽略化簡造成的同類根式。",
    "prerequisiteCheck": "需能使用先備技能 square-root-simplify，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "兩步化簡後相減。；具體任務是「計算根式差。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式四則",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "f2fb739aebd24a37b56a1bf201fcf88483c229decfe1a35eba1cca7c9e11fa71"
  },
  {
    "questionId": "u11-s003-v004",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-arithmetic",
    "lockedSkillOrder": 3,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "√6×√24 等於多少？",
    "givenConditions": [
      "被開方數皆非負。"
    ],
    "target": "計算根式乘積。",
    "choices": [
      "√30",
      "12",
      "6√4",
      "24"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：被開方數相乘 6×24=144，再取非負平方根 12。 詳算檢查：√6×√24=√144=12。 因此結果為「12」。",
    "explanation": "√6×√24=√144=12。",
    "steps": [
      "整理條件：被開方數皆非負。",
      "獨立推導：不參照選項，從題幹條件重新計算：被開方數相乘 6×24=144，再取非負平方根 12。 詳算檢查：√6×√24=√144=12。 因此結果為「12」。",
      "核對目標：答案「12」確實回應「計算根式乘積。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "√30",
        "truth": false,
        "reason": "乘法時錯用加法。"
      },
      {
        "choice": "12",
        "truth": true,
        "reason": "此選項符合目標「計算根式乘積。」；√6×√24=√144=12。"
      },
      {
        "choice": "6√4",
        "truth": false,
        "reason": "等值但未算完。"
      },
      {
        "choice": "24",
        "truth": false,
        "reason": "把 √6 也當 6。"
      }
    ],
    "misconceptionTarget": "根式相乘時把被開方數相加。",
    "prerequisiteCheck": "需能使用先備技能 square-root-simplify，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需使用乘法性質並化成整數。；具體任務是「計算根式乘積。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式四則",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "f73531669e2a7eecc972df169d4a62cf131ff3b720f0868d08b27357c2bc7060"
  },
  {
    "questionId": "u11-s003-v005",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-arithmetic",
    "lockedSkillOrder": 3,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "√75÷√3 等於多少？",
    "givenConditions": [
      "分母根式不為 0。"
    ],
    "target": "求根式商。",
    "choices": [
      "√72",
      "5",
      "25",
      "5√3"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：利用 √a/√b=√(a/b)，75÷3=25。 詳算檢查：√75÷√3=√25=5。 因此結果為「5」。",
    "explanation": "√75÷√3=√25=5。",
    "steps": [
      "整理條件：分母根式不為 0。",
      "獨立推導：不參照選項，從題幹條件重新計算：利用 √a/√b=√(a/b)，75÷3=25。 詳算檢查：√75÷√3=√25=5。 因此結果為「5」。",
      "核對目標：答案「5」確實回應「求根式商。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "√72",
        "truth": false,
        "reason": "把除法當減法。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "此選項符合目標「求根式商。」；√75÷√3=√25=5。"
      },
      {
        "choice": "25",
        "truth": false,
        "reason": "忘記最後開平方。"
      },
      {
        "choice": "5√3",
        "truth": false,
        "reason": "只化簡分子未完成除法。"
      }
    ],
    "misconceptionTarget": "只處理分子，沒有約分根式。",
    "prerequisiteCheck": "需能使用先備技能 square-root-simplify，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需確認除法性質與分母條件。；具體任務是「求根式商。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式四則",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "fe06a96fa2569560f7a72f498730957f671bd38d62f1add45f599cc6965f19df"
  },
  {
    "questionId": "u11-s003-v006",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-arithmetic",
    "lockedSkillOrder": 3,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(√5+√2)(√5-√2) 等於多少？",
    "givenConditions": [
      "兩因式為 A+B 與 A-B。"
    ],
    "target": "計算根式共軛乘積。",
    "choices": [
      "7",
      "√3",
      "5-2√10+2",
      "3"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：兩因式互為共軛，交叉項抵消，結果 3。 詳算檢查：利用平方差：(√5)²-(√2)²=5-2=3。 因此結果為「3」。",
    "explanation": "利用平方差：(√5)²-(√2)²=5-2=3。",
    "steps": [
      "整理條件：兩因式為 A+B 與 A-B。",
      "獨立推導：不參照選項，從題幹條件重新計算：兩因式互為共軛，交叉項抵消，結果 3。 詳算檢查：利用平方差：(√5)²-(√2)²=5-2=3。 因此結果為「3」。",
      "核對目標：答案「3」確實回應「計算根式共軛乘積。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "7",
        "truth": false,
        "reason": "把差平方公式誤作和。"
      },
      {
        "choice": "√3",
        "truth": false,
        "reason": "錯把兩根式相減後再相乘。"
      },
      {
        "choice": "5-2√10+2",
        "truth": false,
        "reason": "展開符號錯。"
      },
      {
        "choice": "3",
        "truth": true,
        "reason": "此選項符合目標「計算根式共軛乘積。」；利用平方差：(√5)²-(√2)²=5-2=3。"
      }
    ],
    "misconceptionTarget": "沒有辨認平方差結構。",
    "prerequisiteCheck": "需能使用先備技能 square-root-simplify，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需運用乘法公式而非逐項猜測。；具體任務是「計算根式共軛乘積。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式四則",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "76acdd322ea6c05ccdfc22b6ca9f92dfa9662536007d18b63767f6627397d474"
  },
  {
    "questionId": "u11-s003-v007",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-arithmetic",
    "lockedSkillOrder": 3,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(2√3+√12)÷√3 等於多少？",
    "givenConditions": [
      "分母 √3 非 0。"
    ],
    "target": "化簡複合根式算式。",
    "choices": [
      "4",
      "2",
      "2√3",
      "6"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：先化簡同類根式：2√3+2√3=4√3，約去 √3。 詳算檢查：√12=2√3，分子為 4√3，再除以 √3 得 4。 因此結果為「4」。",
    "explanation": "√12=2√3，分子為 4√3，再除以 √3 得 4。",
    "steps": [
      "整理條件：分母 √3 非 0。",
      "獨立推導：不參照選項，從題幹條件重新計算：先化簡同類根式：2√3+2√3=4√3，約去 √3。 詳算檢查：√12=2√3，分子為 4√3，再除以 √3 得 4。 因此結果為「4」。",
      "核對目標：答案「4」確實回應「化簡複合根式算式。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": true,
        "reason": "此選項符合目標「化簡複合根式算式。」；√12=2√3，分子為 4√3，再除以 √3 得 4。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "漏掉 √12 化簡後的項。"
      },
      {
        "choice": "2√3",
        "truth": false,
        "reason": "沒有完成除法。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "把 √12 當 4√3。"
      }
    ],
    "misconceptionTarget": "運算順序不當，分子未先合併。",
    "prerequisiteCheck": "需能使用先備技能 square-root-simplify，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "含化簡、合併與除法三層。；具體任務是「化簡複合根式算式。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式四則",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "0f7042523d53e84000d2fd1bd169d8fa77954861f896fc458180d6b9fb48bf75"
  },
  {
    "questionId": "u11-s003-v008",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-arithmetic",
    "lockedSkillOrder": 3,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(√8+√18)² 等於多少？",
    "givenConditions": [
      "整個括號需要平方。"
    ],
    "target": "求化簡後根式的平方。",
    "choices": [
      "26",
      "5√2",
      "50",
      "100"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：先合併成 5√2，再計算 (5√2)²=25×2。 詳算檢查：√8+√18=2√2+3√2=5√2，平方為 25×2=50。 因此結果為「50」。",
    "explanation": "√8+√18=2√2+3√2=5√2，平方為 25×2=50。",
    "steps": [
      "整理條件：整個括號需要平方。",
      "獨立推導：不參照選項，從題幹條件重新計算：先合併成 5√2，再計算 (5√2)²=25×2。 詳算檢查：√8+√18=2√2+3√2=5√2，平方為 25×2=50。 因此結果為「50」。",
      "核對目標：答案「50」確實回應「求化簡後根式的平方。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "26",
        "truth": false,
        "reason": "漏掉兩倍乘積項。"
      },
      {
        "choice": "5√2",
        "truth": false,
        "reason": "忘記整體平方。"
      },
      {
        "choice": "50",
        "truth": true,
        "reason": "此選項符合目標「求化簡後根式的平方。」；√8+√18=2√2+3√2=5√2，平方為 25×2=50。"
      },
      {
        "choice": "100",
        "truth": false,
        "reason": "把 5√2 平方錯成 25×4。"
      }
    ],
    "misconceptionTarget": "平方和時只平方係數或漏掉根號平方。",
    "prerequisiteCheck": "需能使用先備技能 square-root-simplify，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需選擇先化簡以避免展開錯誤。；具體任務是「求化簡後根式的平方。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式四則",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "a44b33da1205bb0a08e8cc8485f2d6f821ef82421f7620b82d35e35b5d350450"
  },
  {
    "questionId": "u11-s003-v009",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-arithmetic",
    "lockedSkillOrder": 3,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 A=3√2-√8+√50，則 A 為何？",
    "givenConditions": [
      "三個根式都可化為同類根式。"
    ],
    "target": "合併含正負號的多項根式。",
    "choices": [
      "6√2",
      "7√2",
      "3√44",
      "10√2"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：三項全部化為 √2 的倍數，再按正負號合併係數。 詳算檢查：√8=2√2，√50=5√2，所以 A=(3-2+5)√2=6√2。 因此結果為「6√2」。",
    "explanation": "√8=2√2，√50=5√2，所以 A=(3-2+5)√2=6√2。",
    "steps": [
      "整理條件：三個根式都可化為同類根式。",
      "獨立推導：不參照選項，從題幹條件重新計算：三項全部化為 √2 的倍數，再按正負號合併係數。 詳算檢查：√8=2√2，√50=5√2，所以 A=(3-2+5)√2=6√2。 因此結果為「6√2」。",
      "核對目標：答案「6√2」確實回應「合併含正負號的多項根式。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "6√2",
        "truth": true,
        "reason": "此選項符合目標「合併含正負號的多項根式。」；√8=2√2，√50=5√2，所以 A=(3-2+5)√2=6√2。"
      },
      {
        "choice": "7√2",
        "truth": false,
        "reason": "係數 3-2+5 算錯。"
      },
      {
        "choice": "3√44",
        "truth": false,
        "reason": "直接處理被開方數。"
      },
      {
        "choice": "10√2",
        "truth": false,
        "reason": "忽略負號。"
      }
    ],
    "misconceptionTarget": "化簡正確但漏看中間減號。",
    "prerequisiteCheck": "需能使用先備技能 square-root-simplify，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需穩定處理三項與符號。；具體任務是「合併含正負號的多項根式。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式四則",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "428555595edab8c83a42e32ca8994edf364a1ad7175531674df186d972f674d1"
  },
  {
    "questionId": "u11-s003-v010",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-arithmetic",
    "lockedSkillOrder": 3,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "工藝圖的兩段長度分別是 3√5 公分與 2√5 公分，拼接後不重疊。總長是多少？",
    "givenConditions": [
      "兩段首尾相接且單位相同。"
    ],
    "target": "求精確總長。",
    "choices": [
      "6√5 公分",
      "5√5 公分",
      "5√10 公分",
      "√25 公分"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：情境要求加法；兩段是同類根式，係數相加。 詳算檢查：同方向拼接且不重疊，長度相加為 (3+2)√5=5√5 公分。 因此結果為「5√5 公分」。",
    "explanation": "同方向拼接且不重疊，長度相加為 (3+2)√5=5√5 公分。",
    "steps": [
      "整理條件：兩段首尾相接且單位相同。",
      "獨立推導：不參照選項，從題幹條件重新計算：情境要求加法；兩段是同類根式，係數相加。 詳算檢查：同方向拼接且不重疊，長度相加為 (3+2)√5=5√5 公分。 因此結果為「5√5 公分」。",
      "核對目標：答案「5√5 公分」確實回應「求精確總長。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "6√5 公分",
        "truth": false,
        "reason": "把係數相乘。"
      },
      {
        "choice": "5√5 公分",
        "truth": true,
        "reason": "此選項符合目標「求精確總長。」；同方向拼接且不重疊，長度相加為 (3+2)√5=5√5 公分。"
      },
      {
        "choice": "5√10 公分",
        "truth": false,
        "reason": "把根號內數相加。"
      },
      {
        "choice": "√25 公分",
        "truth": false,
        "reason": "把係數與根式錯誤合併。"
      }
    ],
    "misconceptionTarget": "沒有先判斷情境應使用加法。",
    "prerequisiteCheck": "需能使用先備技能 square-root-simplify，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "兩段皆為公分，和仍為公分。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "讀懂拼接關係後合併根式。；具體任務是「求精確總長。」。",
    "literacyContextNecessity": "「不重疊」決定總長是兩段相加。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式四則",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "dea9eaaf4e6fb9c748effd2b7a4dd1cb36ef1bf180ccd8450d592d26462ea6ae"
  },
  {
    "questionId": "u11-s003-v011",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-arithmetic",
    "lockedSkillOrder": 3,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某方形零件邊長為 √18 公分，兩個零件並排且邊緊貼，總寬為何？",
    "givenConditions": [
      "兩個相同正方形並排，無縫隙。"
    ],
    "target": "求並排總寬。",
    "choices": [
      "3√2 公分",
      "√36 公分",
      "6√2 公分",
      "2√18 平方公分"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：總寬是兩條邊相加；化簡後為 6√2 公分。 詳算檢查：每個邊長 √18=3√2 公分，兩個並排總寬為 2×3√2=6√2 公分。 因此結果為「6√2 公分」。",
    "explanation": "每個邊長 √18=3√2 公分，兩個並排總寬為 2×3√2=6√2 公分。",
    "steps": [
      "整理條件：兩個相同正方形並排，無縫隙。",
      "獨立推導：不參照選項，從題幹條件重新計算：總寬是兩條邊相加；化簡後為 6√2 公分。 詳算檢查：每個邊長 √18=3√2 公分，兩個並排總寬為 2×3√2=6√2 公分。 因此結果為「6√2 公分」。",
      "核對目標：答案「6√2 公分」確實回應「求並排總寬。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "3√2 公分",
        "truth": false,
        "reason": "只算一個零件。"
      },
      {
        "choice": "√36 公分",
        "truth": false,
        "reason": "雖等於 6，但不是正確的兩倍 √18。"
      },
      {
        "choice": "6√2 公分",
        "truth": true,
        "reason": "此選項符合目標「求並排總寬。」；每個邊長 √18=3√2 公分，兩個並排總寬為 2×3√2=6√2 公分。"
      },
      {
        "choice": "2√18 平方公分",
        "truth": false,
        "reason": "單位誤寫成面積。"
      }
    ],
    "misconceptionTarget": "數值正確方向接近但把長度單位寫成平方單位。",
    "prerequisiteCheck": "需能使用先備技能 square-root-simplify，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "邊長與總寬均為公分，不是平方公分。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "結合圖形排列、倍數與化簡。；具體任務是「求並排總寬。」。",
    "literacyContextNecessity": "並排關係決定要把邊長加兩次。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式四則",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "60b04996570cebf32b268c027d208f41ff2393e570fe798c2c94527a6c3bdc8d"
  },
  {
    "questionId": "u11-s003-v012",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-arithmetic",
    "lockedSkillOrder": 3,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個檢測值以 (√7+√3)(√7-√3) 計算。系統只接受整數，應輸入多少？",
    "givenConditions": [
      "系統公式完整給出，需輸入運算結果。"
    ],
    "target": "求符合整數格式的值。",
    "choices": [
      "10",
      "√4",
      "7-√3",
      "4"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：令 A=√7、B=√3，(A+B)(A-B)=A²-B²=4。 詳算檢查：平方差得 7-3=4，正好是整數。 因此結果為「4」。",
    "explanation": "平方差得 7-3=4，正好是整數。",
    "steps": [
      "整理條件：系統公式完整給出，需輸入運算結果。",
      "獨立推導：不參照選項，從題幹條件重新計算：令 A=√7、B=√3，(A+B)(A-B)=A²-B²=4。 詳算檢查：平方差得 7-3=4，正好是整數。 因此結果為「4」。",
      "核對目標：答案「4」確實回應「求符合整數格式的值。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "10",
        "truth": false,
        "reason": "把兩項平方相加。"
      },
      {
        "choice": "√4",
        "truth": false,
        "reason": "仍可化為整數 2，且數值也不符。"
      },
      {
        "choice": "7-√3",
        "truth": false,
        "reason": "沒有完整相乘。"
      },
      {
        "choice": "4",
        "truth": true,
        "reason": "此選項符合目標「求符合整數格式的值。」；平方差得 7-3=4，正好是整數。"
      }
    ],
    "misconceptionTarget": "不辨認共軛結構而錯誤展開。",
    "prerequisiteCheck": "需能使用先備技能 square-root-simplify，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需辨認公式結構並完成精確運算。；具體任務是「求符合整數格式的值。」。",
    "literacyContextNecessity": "系統只接受整數，要求把根式乘積化到最後。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "根式四則",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "ce0b3ea83a954a3dd5992f6b450816b7d00c7ffeb34be9d81dc803c75fbd579f"
  },
  {
    "questionId": "u11-s004-v001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-estimate",
    "lockedSkillOrder": 4,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "√20 介於哪兩個相鄰整數之間？",
    "givenConditions": [
      "20 介於 16 與 25。"
    ],
    "target": "找出平方根所在整數區間。",
    "choices": [
      "3 與 4",
      "5 與 6",
      "20 與 21",
      "4 與 5"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：比較相鄰平方：4²=16、5²=25。 詳算檢查：16<20<25，所以 4<√20<5。 因此結果為「4 與 5」。",
    "explanation": "16<20<25，所以 4<√20<5。",
    "steps": [
      "整理條件：20 介於 16 與 25。",
      "獨立推導：不參照選項，從題幹條件重新計算：比較相鄰平方：4²=16、5²=25。 詳算檢查：16<20<25，所以 4<√20<5。 因此結果為「4 與 5」。",
      "核對目標：答案「4 與 5」確實回應「找出平方根所在整數區間。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 與 4",
        "truth": false,
        "reason": "4²=16 已小於 20，區間太低。"
      },
      {
        "choice": "5 與 6",
        "truth": false,
        "reason": "5²=25 已大於 20，區間太高。"
      },
      {
        "choice": "20 與 21",
        "truth": false,
        "reason": "把原數直接當平方根。"
      },
      {
        "choice": "4 與 5",
        "truth": true,
        "reason": "此選項符合目標「找出平方根所在整數區間。」；16<20<25，所以 4<√20<5。"
      }
    ],
    "misconceptionTarget": "拿被開方數本身與整數比較。",
    "prerequisiteCheck": "需能使用先備技能 square-root-arithmetic，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "只需相鄰完全平方數。；具體任務是「找出平方根所在整數區間。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根估算",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "c9baa77bf263644e276fefad9156dfdc700f32dd810c3165756dacbabc78b8d0"
  },
  {
    "questionId": "u11-s004-v002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-estimate",
    "lockedSkillOrder": 4,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "√7 最接近下列哪個一位小數？",
    "givenConditions": [
      "要求四捨五入到小數第一位。"
    ],
    "target": "估算 √7。",
    "choices": [
      "2.4",
      "2.8",
      "2.6",
      "3.5"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：先夾在 2.6 與 2.7 間，再看 2.65²=7.0225，√7略小於2.65，故取2.6。 詳算檢查：2.6²=6.76，2.7²=7.29；√7 約 2.646，四捨五入到一位小數是 2.6。 因此結果為「2.6」。",
    "explanation": "2.6²=6.76，2.7²=7.29；√7 約 2.646，四捨五入到一位小數是 2.6。",
    "steps": [
      "整理條件：要求四捨五入到小數第一位。",
      "獨立推導：不參照選項，從題幹條件重新計算：先夾在 2.6 與 2.7 間，再看 2.65²=7.0225，√7略小於2.65，故取2.6。 詳算檢查：2.6²=6.76，2.7²=7.29；√7 約 2.646，四捨五入到一位小數是 2.6。 因此結果為「2.6」。",
      "核對目標：答案「2.6」確實回應「估算 √7。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "2.4",
        "truth": false,
        "reason": "2.4²=5.76，離 7 較遠。"
      },
      {
        "choice": "2.8",
        "truth": false,
        "reason": "2.8²=7.84，離 7 較遠。"
      },
      {
        "choice": "2.6",
        "truth": true,
        "reason": "此選項符合目標「估算 √7。」；2.6²=6.76，2.7²=7.29；√7 約 2.646，四捨五入到一位小數是 2.6。"
      },
      {
        "choice": "3.5",
        "truth": false,
        "reason": "明顯超過 √9=3。"
      }
    ],
    "misconceptionTarget": "只看 7 接近哪個整數而亂除。",
    "prerequisiteCheck": "需能使用先備技能 square-root-arithmetic，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需比較相鄰十分位平方。；具體任務是「估算 √7。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根估算",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "839080553427e95f6958e6e5bf3a723a0b06fb8018b9c12b4ce7b9b8c56f2295"
  },
  {
    "questionId": "u11-s004-v003",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-estimate",
    "lockedSkillOrder": 4,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "√50 取到小數第一位約為多少？",
    "givenConditions": [
      "要求取到小數第一位。"
    ],
    "target": "估算並四捨五入。",
    "choices": [
      "7.0",
      "7.1",
      "7.5",
      "25.0"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：7.0²=49、7.1²=50.41，且實值超過 7.05，因此四捨五入為 7.1。 詳算檢查：√50≈7.071，取到小數第一位為 7.1。 因此結果為「7.1」。",
    "explanation": "√50≈7.071，取到小數第一位為 7.1。",
    "steps": [
      "整理條件：要求取到小數第一位。",
      "獨立推導：不參照選項，從題幹條件重新計算：7.0²=49、7.1²=50.41，且實值超過 7.05，因此四捨五入為 7.1。 詳算檢查：√50≈7.071，取到小數第一位為 7.1。 因此結果為「7.1」。",
      "核對目標：答案「7.1」確實回應「估算並四捨五入。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "7.0",
        "truth": false,
        "reason": "7²=49，但四捨五入後應進位。"
      },
      {
        "choice": "7.1",
        "truth": true,
        "reason": "此選項符合目標「估算並四捨五入。」；√50≈7.071，取到小數第一位為 7.1。"
      },
      {
        "choice": "7.5",
        "truth": false,
        "reason": "7.5²=56.25，過大。"
      },
      {
        "choice": "25.0",
        "truth": false,
        "reason": "誤把開平方當除以 2。"
      }
    ],
    "misconceptionTarget": "看到 49 接近 50 就直接寫 7.0，未做四捨五入判斷。",
    "prerequisiteCheck": "需能使用先備技能 square-root-arithmetic，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需判斷進位門檻。；具體任務是「估算並四捨五入。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根估算",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "e9e2df6b1de06b2568cea8995cf69eb45188c4d7d428e8c297698dcdbe07fab0"
  },
  {
    "questionId": "u11-s004-v004",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-estimate",
    "lockedSkillOrder": 4,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪個數最接近 √130？",
    "givenConditions": [
      "候選值皆為一位小數。"
    ],
    "target": "選最接近的近似值。",
    "choices": [
      "11.4",
      "11.2",
      "11.8",
      "12.3"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：比較候選值平方，11.4 的平方與 130 差 0.04 最小。 詳算檢查：11.4²=129.96，非常接近 130，因此 √130≈11.4。 因此結果為「11.4」。",
    "explanation": "11.4²=129.96，非常接近 130，因此 √130≈11.4。",
    "steps": [
      "整理條件：候選值皆為一位小數。",
      "獨立推導：不參照選項，從題幹條件重新計算：比較候選值平方，11.4 的平方與 130 差 0.04 最小。 詳算檢查：11.4²=129.96，非常接近 130，因此 √130≈11.4。 因此結果為「11.4」。",
      "核對目標：答案「11.4」確實回應「選最接近的近似值。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "11.4",
        "truth": true,
        "reason": "此選項符合目標「選最接近的近似值。」；11.4²=129.96，非常接近 130，因此 √130≈11.4。"
      },
      {
        "choice": "11.2",
        "truth": false,
        "reason": "11.2²=125.44，偏低較多。"
      },
      {
        "choice": "11.8",
        "truth": false,
        "reason": "11.8²=139.24，偏高。"
      },
      {
        "choice": "12.3",
        "truth": false,
        "reason": "超過 √144=12。"
      }
    ],
    "misconceptionTarget": "只依整數區間猜測，未驗算候選值平方。",
    "prerequisiteCheck": "需能使用先備技能 square-root-arithmetic，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需反向平方比較誤差。；具體任務是「選最接近的近似值。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根估算",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "3abd84fdfb4d03d988b11ab31fa31457db106f8397daca8c528969ed8c5caf85"
  },
  {
    "questionId": "u11-s004-v005",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-estimate",
    "lockedSkillOrder": 4,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 6.3<√n<6.4，則下列哪個整數 n 可能符合？",
    "givenConditions": [
      "n 為整數且平方根介於兩小數。"
    ],
    "target": "反推可能的被開方數。",
    "choices": [
      "38",
      "41",
      "40",
      "42"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：因各量非負，可平方不改變不等號方向，夾出 n=40。 詳算檢查：平方後得 39.69<n<40.96，唯一整數是 40。 因此結果為「40」。",
    "explanation": "平方後得 39.69<n<40.96，唯一整數是 40。",
    "steps": [
      "整理條件：n 為整數且平方根介於兩小數。",
      "獨立推導：不參照選項，從題幹條件重新計算：因各量非負，可平方不改變不等號方向，夾出 n=40。 詳算檢查：平方後得 39.69<n<40.96，唯一整數是 40。 因此結果為「40」。",
      "核對目標：答案「40」確實回應「反推可能的被開方數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "38",
        "truth": false,
        "reason": "38<6.3²=39.69。"
      },
      {
        "choice": "41",
        "truth": false,
        "reason": "41>6.4²=40.96。"
      },
      {
        "choice": "40",
        "truth": true,
        "reason": "此選項符合目標「反推可能的被開方數。」；平方後得 39.69<n<40.96，唯一整數是 40。"
      },
      {
        "choice": "42",
        "truth": false,
        "reason": "42 更超出上界。"
      }
    ],
    "misconceptionTarget": "平方小數時把 6.3² 錯算成 12.6。",
    "prerequisiteCheck": "需能使用先備技能 square-root-arithmetic，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需將平方根區間平方並找整數。；具體任務是「反推可能的被開方數。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根估算",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "ef18ca21e4637f9383060608cb2559e511b05aa6bc3c8a1665d7f62d0d925519"
  },
  {
    "questionId": "u11-s004-v006",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-estimate",
    "lockedSkillOrder": 4,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "√85 介於 9.2 與 9.3 之間。若取到小數第一位，結果為何？",
    "givenConditions": [
      "要求四捨五入到一位小數。"
    ],
    "target": "利用中點判斷進位。",
    "choices": [
      "9.3",
      "9.2",
      "9.25",
      "8.5"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：已知在 9.2 與 9.3 間；檢查中點 9.25，平方大於 85，故實值小於中點。 詳算檢查：9.25²=85.5625>85，所以 √85<9.25，取到小數第一位為 9.2。 因此結果為「9.2」。",
    "explanation": "9.25²=85.5625>85，所以 √85<9.25，取到小數第一位為 9.2。",
    "steps": [
      "整理條件：要求四捨五入到一位小數。",
      "獨立推導：不參照選項，從題幹條件重新計算：已知在 9.2 與 9.3 間；檢查中點 9.25，平方大於 85，故實值小於中點。 詳算檢查：9.25²=85.5625>85，所以 √85<9.25，取到小數第一位為 9.2。 因此結果為「9.2」。",
      "核對目標：答案「9.2」確實回應「利用中點判斷進位。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "9.3",
        "truth": false,
        "reason": "需判斷是否達 9.25 的進位界線。"
      },
      {
        "choice": "9.2",
        "truth": true,
        "reason": "此選項符合目標「利用中點判斷進位。」；9.25²=85.5625>85，所以 √85<9.25，取到小數第一位為 9.2。"
      },
      {
        "choice": "9.25",
        "truth": false,
        "reason": "題目要求一位小數。"
      },
      {
        "choice": "8.5",
        "truth": false,
        "reason": "把被開方數除以 10。"
      }
    ],
    "misconceptionTarget": "只因較接近上界的外觀就選 9.3。",
    "prerequisiteCheck": "需能使用先備技能 square-root-arithmetic，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需精確檢查四捨五入界線。；具體任務是「利用中點判斷進位。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根估算",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "772933a46947745bb4076f2303c1478a385382d2257463275c0d0f802e65a2b7"
  },
  {
    "questionId": "u11-s004-v007",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-estimate",
    "lockedSkillOrder": 4,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知 √m 取到小數第一位是 5.7。下列哪個 m 可能是整數？",
    "givenConditions": [
      "m 為整數，近似值取到小數第一位。"
    ],
    "target": "找可能的 m 並審核唯一性。",
    "choices": [
      "32",
      "31",
      "34",
      "35"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：5.65≤√m<5.75，平方得約31.9225≤m<33.0625，整數 m 可為32或33；為保持唯一解，選項應排除33。 詳算檢查：此題原選項中 32 與 33 都會四捨五入成 5.7，因此需修正選項；修正後以 34 取代 33，唯一答案為 32。 因此結果為「32」。",
    "explanation": "此題原選項中 32 與 33 都會四捨五入成 5.7，因此需修正選項；修正後以 34 取代 33，唯一答案為 32。",
    "steps": [
      "整理條件：m 為整數，近似值取到小數第一位。",
      "獨立推導：不參照選項，從題幹條件重新計算：5.65≤√m<5.75，平方得約31.9225≤m<33.0625，整數 m 可為32或33；為保持唯一解，選項應排除33。 詳算檢查：此題原選項中 32 與 33 都會四捨五入成 5.7，因此需修正選項；修正後以 34 取代 33，唯一答案為 32。 因此結果為「32」。",
      "核對目標：答案「32」確實回應「找可能的 m 並審核唯一性。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "32",
        "truth": true,
        "reason": "此選項符合目標「找可能的 m 並審核唯一性。」；此題原選項中 32 與 33 都會四捨五入成 5.7，因此需修正選項；修正後以 34 取代 33，唯一答案為 32。"
      },
      {
        "choice": "31",
        "truth": false,
        "reason": "√31≈5.57，取一位為5.6。"
      },
      {
        "choice": "34",
        "truth": false,
        "reason": "√34≈5.83，取一位為5.8。"
      },
      {
        "choice": "35",
        "truth": false,
        "reason": "√35≈5.92，取一位為5.9。"
      }
    ],
    "misconceptionTarget": "未檢查四捨五入區間可能含多個整數。",
    "prerequisiteCheck": "需能使用先備技能 square-root-arithmetic，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "人工審核發現原草稿 32 與 33 皆成立；已把該干擾選項修為 34，使 32 成為唯一答案。",
    "difficultyReason": "高階題要求建立四捨五入區間；最終選項將由修正記錄確保唯一。；具體任務是「找可能的 m 並審核唯一性。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根估算",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "06dc916b3be4ae2b230e27101683f54c376605c55249c3defaaa8ff604b50dd5"
  },
  {
    "questionId": "u11-s004-v008",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-estimate",
    "lockedSkillOrder": 4,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 a=√48，則 a 最接近哪個整數？",
    "givenConditions": [
      "a 為正平方根。"
    ],
    "target": "判斷最近整數。",
    "choices": [
      "6",
      "8",
      "24",
      "7"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：比較 6.5²=42.25；48 大於此中點平方，因此 √48 更靠近 7。 詳算檢查：48 與 49 只差 1，而與 36 差 12，所以 √48 約 6.93，最接近 7。 因此結果為「7」。",
    "explanation": "48 與 49 只差 1，而與 36 差 12，所以 √48 約 6.93，最接近 7。",
    "steps": [
      "整理條件：a 為正平方根。",
      "獨立推導：不參照選項，從題幹條件重新計算：比較 6.5²=42.25；48 大於此中點平方，因此 √48 更靠近 7。 詳算檢查：48 與 49 只差 1，而與 36 差 12，所以 √48 約 6.93，最接近 7。 因此結果為「7」。",
      "核對目標：答案「7」確實回應「判斷最近整數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": false,
        "reason": "√48>√36=6 且更靠近7。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "√48<√49=7。"
      },
      {
        "choice": "24",
        "truth": false,
        "reason": "誤把開平方當除以2。"
      },
      {
        "choice": "7",
        "truth": true,
        "reason": "此選項符合目標「判斷最近整數。」；48 與 49 只差 1，而與 36 差 12，所以 √48 約 6.93，最接近 7。"
      }
    ],
    "misconceptionTarget": "只用下界 6 就當作最近整數。",
    "prerequisiteCheck": "需能使用先備技能 square-root-arithmetic，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需用整數中點平方判斷。；具體任務是「判斷最近整數。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根估算",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "258d71c3b2b80a9a056e893043bc555f30835eaf4cacba688c6b007f09e3991b"
  },
  {
    "questionId": "u11-s004-v009",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-estimate",
    "lockedSkillOrder": 4,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "不使用計算機，判斷 √200 的小數第一位最可能是多少？",
    "givenConditions": [
      "不得使用計算機，要求一位小數。"
    ],
    "target": "用平方比較估算。",
    "choices": [
      "14.0",
      "14.1",
      "14.2",
      "20.0"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：先知 14<√200<15，再比較 14.15²=200.2225>200，故小於14.15，四捨五入為14.1。 詳算檢查：14.1²=198.81，14.2²=201.64；實值約14.142，取一位是14.1。 因此結果為「14.1」。",
    "explanation": "14.1²=198.81，14.2²=201.64；實值約14.142，取一位是14.1。",
    "steps": [
      "整理條件：不得使用計算機，要求一位小數。",
      "獨立推導：不參照選項，從題幹條件重新計算：先知 14<√200<15，再比較 14.15²=200.2225>200，故小於14.15，四捨五入為14.1。 詳算檢查：14.1²=198.81，14.2²=201.64；實值約14.142，取一位是14.1。 因此結果為「14.1」。",
      "核對目標：答案「14.1」確實回應「用平方比較估算。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "14.0",
        "truth": false,
        "reason": "14²=196，但 √200 超過14.05。"
      },
      {
        "choice": "14.1",
        "truth": true,
        "reason": "此選項符合目標「用平方比較估算。」；14.1²=198.81，14.2²=201.64；實值約14.142，取一位是14.1。"
      },
      {
        "choice": "14.2",
        "truth": false,
        "reason": "14.2²=201.64，四捨五入偏高。"
      },
      {
        "choice": "20.0",
        "truth": false,
        "reason": "把 √200 誤估成 √400。"
      }
    ],
    "misconceptionTarget": "只找整數區間，沒有處理小數進位。",
    "prerequisiteCheck": "需能使用先備技能 square-root-arithmetic，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需手算小數平方與進位界線。；具體任務是「用平方比較估算。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根估算",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "1cbd85cda5582f9ce4c97355cb270dec04eafec289781c5254917b1b967a0593"
  },
  {
    "questionId": "u11-s004-v010",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-estimate",
    "lockedSkillOrder": 4,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "figure",
    "figureId": "fig-u11-s004-numberline-estimate",
    "drawingSpecReference": "units/u11/s004/drawing-specs.jsonl#fig-u11-s004-numberline-estimate",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個正方形廣場面積為 70 平方公尺。施工表要把邊長取到小數第一位，應填多少？",
    "givenConditions": [
      "正方形面積 70 平方公尺，邊長取一位小數。"
    ],
    "target": "估算施工邊長。",
    "choices": [
      "8.4 公尺",
      "8.3 公尺",
      "8.5 公尺",
      "35.0 公尺"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：8.35²=69.7225<70，所以 √70>8.35，應由8.3進位為8.4。 詳算檢查：邊長=√70≈8.3666，取到小數第一位為 8.4 公尺。 因此結果為「8.4 公尺」。",
    "explanation": "邊長=√70≈8.3666，取到小數第一位為 8.4 公尺。",
    "steps": [
      "整理條件：正方形面積 70 平方公尺，邊長取一位小數。",
      "獨立推導：不參照選項，從題幹條件重新計算：8.35²=69.7225<70，所以 √70>8.35，應由8.3進位為8.4。 詳算檢查：邊長=√70≈8.3666，取到小數第一位為 8.4 公尺。 因此結果為「8.4 公尺」。",
      "核對目標：答案「8.4 公尺」確實回應「估算施工邊長。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "8.4 公尺",
        "truth": true,
        "reason": "此選項符合目標「估算施工邊長。」；邊長=√70≈8.3666，取到小數第一位為 8.4 公尺。"
      },
      {
        "choice": "8.3 公尺",
        "truth": false,
        "reason": "8.3²=68.89，且實值超過8.35。"
      },
      {
        "choice": "8.5 公尺",
        "truth": false,
        "reason": "8.5²=72.25，偏高且未正確四捨五入。"
      },
      {
        "choice": "35.0 公尺",
        "truth": false,
        "reason": "誤把面積除以2。"
      }
    ],
    "misconceptionTarget": "不檢查四捨五入門檻。",
    "prerequisiteCheck": "需能使用先備技能 square-root-arithmetic，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "平方公尺開平方為公尺。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "從面積建模並按指定精度四捨五入。；具體任務是「估算施工邊長。」。",
    "literacyContextNecessity": "施工表精度要求決定答案不能留根式。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根估算",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "8db6ba17b24be29f04a8f1b84ff03b02eb811d6b35d28bdcbcc0797eeb6330d2"
  },
  {
    "questionId": "u11-s004-v011",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-estimate",
    "lockedSkillOrder": 4,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "地圖比例尺換算後，兩點直線距離是 √130 公里。導航顯示到小數第一位，應顯示多少？",
    "givenConditions": [
      "距離已換算為 √130 公里，顯示一位小數。"
    ],
    "target": "依導航格式估算。",
    "choices": [
      "11.3 公里",
      "11.5 公里",
      "65.0 公里",
      "11.4 公里"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：11.4²=129.96，與130極接近；下一位不足進位。 詳算檢查：√130≈11.401，因此顯示 11.4 公里。 因此結果為「11.4 公里」。",
    "explanation": "√130≈11.401，因此顯示 11.4 公里。",
    "steps": [
      "整理條件：距離已換算為 √130 公里，顯示一位小數。",
      "獨立推導：不參照選項，從題幹條件重新計算：11.4²=129.96，與130極接近；下一位不足進位。 詳算檢查：√130≈11.401，因此顯示 11.4 公里。 因此結果為「11.4 公里」。",
      "核對目標：答案「11.4 公里」確實回應「依導航格式估算。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "11.3 公里",
        "truth": false,
        "reason": "11.3²=127.69，低估且未達最近值。"
      },
      {
        "choice": "11.5 公里",
        "truth": false,
        "reason": "11.5²=132.25，四捨五入過高。"
      },
      {
        "choice": "65.0 公里",
        "truth": false,
        "reason": "誤把開平方當除以2。"
      },
      {
        "choice": "11.4 公里",
        "truth": true,
        "reason": "此選項符合目標「依導航格式估算。」；√130≈11.401，因此顯示 11.4 公里。"
      }
    ],
    "misconceptionTarget": "只憑 130 接近 121 或 144 而粗略取整。",
    "prerequisiteCheck": "需能使用先備技能 square-root-arithmetic，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "距離單位保持公里。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需兼顧根式估算與顯示精度。；具體任務是「依導航格式估算。」。",
    "literacyContextNecessity": "導航顯示規格決定近似位數。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根估算",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "c76c2cfbeaa0f75f53627dc1f970636a62f9bebf5ebb05bfecfc598929267517"
  },
  {
    "questionId": "u11-s004-v012",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-estimate",
    "lockedSkillOrder": 4,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一支感測器的理論值為 √2 伏特，合格顯示範圍是 1.40 至 1.42 伏特。下列判斷何者正確？",
    "givenConditions": [
      "合格範圍端點皆為正數。"
    ],
    "target": "判斷理論值是否落在規格內。",
    "choices": [
      "理論值小於1.40伏特",
      "理論值大於1.42伏特",
      "理論值在合格顯示範圍內",
      "無法用平方比較判斷"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：對正數界線平方即可夾住 √2，故在範圍內。 詳算檢查：1.40²=1.96<2，而1.42²=2.0164>2，所以1.40<√2<1.42。 因此結果為「理論值在合格顯示範圍內」。",
    "explanation": "1.40²=1.96<2，而1.42²=2.0164>2，所以1.40<√2<1.42。",
    "steps": [
      "整理條件：合格範圍端點皆為正數。",
      "獨立推導：不參照選項，從題幹條件重新計算：對正數界線平方即可夾住 √2，故在範圍內。 詳算檢查：1.40²=1.96<2，而1.42²=2.0164>2，所以1.40<√2<1.42。 因此結果為「理論值在合格顯示範圍內」。",
      "核對目標：答案「理論值在合格顯示範圍內」確實回應「判斷理論值是否落在規格內。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "理論值小於1.40伏特",
        "truth": false,
        "reason": "√2約1.414，不小於1.40。"
      },
      {
        "choice": "理論值大於1.42伏特",
        "truth": false,
        "reason": "1.42²大於2。"
      },
      {
        "choice": "理論值在合格顯示範圍內",
        "truth": true,
        "reason": "此選項符合目標「判斷理論值是否落在規格內。」；1.40²=1.96<2，而1.42²=2.0164>2，所以1.40<√2<1.42。"
      },
      {
        "choice": "無法用平方比較判斷",
        "truth": false,
        "reason": "正數範圍可安全平方比較。"
      }
    ],
    "misconceptionTarget": "認為沒有計算機就不能估平方根。",
    "prerequisiteCheck": "需能使用先備技能 square-root-arithmetic，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "電壓均以伏特表示。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "使用平方比較而非直接小數近似。；具體任務是「判斷理論值是否落在規格內。」。",
    "literacyContextNecessity": "合格範圍是判定是否通過的必要資訊。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根估算",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "764bda41f156019c9c4c75d3f1bac964d2baf1d91d45c6e68de56af6db0d8ad2"
  },
  {
    "questionId": "u11-s005-v001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-notation",
    "lockedSkillOrder": 5,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "√36 的值是多少？",
    "givenConditions": [
      "36≥0，使用主平方根記號。"
    ],
    "target": "判讀根號記號的值。",
    "choices": [
      "6",
      "-6",
      "±6",
      "18"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：先找平方後為36的數 ±6，再依 √ 的定義取非負者 6。 詳算檢查：根號符號 √36 表示 36 的非負平方根，因此值為 6。 因此結果為「6」。",
    "explanation": "根號符號 √36 表示 36 的非負平方根，因此值為 6。",
    "steps": [
      "整理條件：36≥0，使用主平方根記號。",
      "獨立推導：不參照選項，從題幹條件重新計算：先找平方後為36的數 ±6，再依 √ 的定義取非負者 6。 詳算檢查：根號符號 √36 表示 36 的非負平方根，因此值為 6。 因此結果為「6」。",
      "核對目標：答案「6」確實回應「判讀根號記號的值。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": true,
        "reason": "此選項符合目標「判讀根號記號的值。」；根號符號 √36 表示 36 的非負平方根，因此值為 6。"
      },
      {
        "choice": "-6",
        "truth": false,
        "reason": "√36 表示非負平方根。"
      },
      {
        "choice": "±6",
        "truth": false,
        "reason": "±6 是方程 x²=36 的解，不是符號 √36 的單一值。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "開平方不是除以2。"
      }
    ],
    "misconceptionTarget": "把 √a 與 a 的所有平方根混為一談。",
    "prerequisiteCheck": "需能使用先備技能 square-root-estimate，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "考查最基本的符號約定。；具體任務是「判讀根號記號的值。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根記號",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "7d95dde54b2a7e5ea2d4119f8c34738771c52b90c153b8edc32715137005cfdf"
  },
  {
    "questionId": "u11-s005-v002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-notation",
    "lockedSkillOrder": 5,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "±√25 表示哪些數？",
    "givenConditions": [
      "被開方數25非負。"
    ],
    "target": "解讀 ±√25。",
    "choices": [
      "只有5",
      "只有-5",
      "5 與 -5",
      "25與-25"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：先算主平方根 5，再展開 ± 成兩個數。 詳算檢查：√25=5，前面的 ± 表示 +5 與 -5。 因此結果為「5 與 -5」。",
    "explanation": "√25=5，前面的 ± 表示 +5 與 -5。",
    "steps": [
      "整理條件：被開方數25非負。",
      "獨立推導：不參照選項，從題幹條件重新計算：先算主平方根 5，再展開 ± 成兩個數。 詳算檢查：√25=5，前面的 ± 表示 +5 與 -5。 因此結果為「5 與 -5」。",
      "核對目標：答案「5 與 -5」確實回應「解讀 ±√25。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "只有5",
        "truth": false,
        "reason": "漏掉 ± 的負號分支。"
      },
      {
        "choice": "只有-5",
        "truth": false,
        "reason": "漏掉正號分支。"
      },
      {
        "choice": "5 與 -5",
        "truth": true,
        "reason": "此選項符合目標「解讀 ±√25。」；√25=5，前面的 ± 表示 +5 與 -5。"
      },
      {
        "choice": "25與-25",
        "truth": false,
        "reason": "未對25開平方。"
      }
    ],
    "misconceptionTarget": "忽略 ± 或把它套到被開方數。",
    "prerequisiteCheck": "需能使用先備技能 square-root-estimate，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需辨別兩個符號的角色。；具體任務是「解讀 ±√25。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根記號",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "f3aeede8386bc355ca9aef0a27c2bede24522ab8ff0d8c92b3d7fcc9956136ee"
  },
  {
    "questionId": "u11-s005-v003",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-notation",
    "lockedSkillOrder": 5,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(√9)² 等於多少？",
    "givenConditions": [
      "根號內9非負。"
    ],
    "target": "計算根式平方。",
    "choices": [
      "3",
      "9",
      "±9",
      "81"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：因9≥0，(√9)²=9。 詳算檢查：√9=3，再平方得到 9；也可用 (√a)²=a。 因此結果為「9」。",
    "explanation": "√9=3，再平方得到 9；也可用 (√a)²=a。",
    "steps": [
      "整理條件：根號內9非負。",
      "獨立推導：不參照選項，從題幹條件重新計算：因9≥0，(√9)²=9。 詳算檢查：√9=3，再平方得到 9；也可用 (√a)²=a。 因此結果為「9」。",
      "核對目標：答案「9」確實回應「計算根式平方。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": false,
        "reason": "只算根號，未做平方。"
      },
      {
        "choice": "9",
        "truth": true,
        "reason": "此選項符合目標「計算根式平方。」；√9=3，再平方得到 9；也可用 (√a)²=a。"
      },
      {
        "choice": "±9",
        "truth": false,
        "reason": "整個表達式有單一值。"
      },
      {
        "choice": "81",
        "truth": false,
        "reason": "把9再平方。"
      }
    ],
    "misconceptionTarget": "忽略括號外平方。",
    "prerequisiteCheck": "需能使用先備技能 square-root-estimate，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "直接套用基本恆等式。；具體任務是「計算根式平方。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根記號",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "c7277fdcabe64ef857736567b37455fb1603f982d9eece8c29d6b48941480f73"
  },
  {
    "questionId": "u11-s005-v004",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-notation",
    "lockedSkillOrder": 5,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "依序進行「將 -5 整體平方」與「取非負平方根」兩步，最後結果是多少？",
    "givenConditions": [
      "運算順序先平方 (-5)，再對所得正數取主平方根。"
    ],
    "target": "辨認 √(a²) 的非負結果。",
    "choices": [
      "-5",
      "±5",
      "25",
      "5"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：先平方得25，再取非負平方根5。 詳算檢查：(-5)²=25，√25=5；一般而言 √(a²)=|a|。 因此結果為「5」。",
    "explanation": "(-5)²=25，√25=5；一般而言 √(a²)=|a|。",
    "steps": [
      "整理條件：運算順序先平方 (-5)，再對所得正數取主平方根。",
      "獨立推導：不參照選項，從題幹條件重新計算：先平方得25，再取非負平方根5。 詳算檢查：(-5)²=25，√25=5；一般而言 √(a²)=|a|。 因此結果為「5」。",
      "核對目標：答案「5」確實回應「辨認 √(a²) 的非負結果。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "-5",
        "truth": false,
        "reason": "主平方根不能是負值。"
      },
      {
        "choice": "±5",
        "truth": false,
        "reason": "整個根式是單一非負值。"
      },
      {
        "choice": "25",
        "truth": false,
        "reason": "漏做最後開平方。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "此選項符合目標「辨認 √(a²) 的非負結果。」；(-5)²=25，√25=5；一般而言 √(a²)=|a|。"
      }
    ],
    "misconceptionTarget": "錯把 √(a²) 當成 a，未考慮 a 可能為負。",
    "prerequisiteCheck": "需能使用先備技能 square-root-estimate，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需理解絕對值效果。；具體任務是「辨認 √(a²) 的非負結果。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根記號",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "291ff5e50745e80cb11079786cde14c2c66aee45556aa9e9bb9dd08cbe0f97f9"
  },
  {
    "questionId": "u11-s005-v005",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-notation",
    "lockedSkillOrder": 5,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "方程 x²=17 的實數解如何表示？",
    "givenConditions": [
      "x為實數，17為正。"
    ],
    "target": "用正確記號表示全部解。",
    "choices": [
      "x=√17",
      "x=-√17",
      "x=17",
      "x=±√17"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：由平方方程取平方根時必須保留兩個符號。 詳算檢查：17>0，所以平方後為17的實數有正負兩個，寫成 x=±√17。 因此結果為「x=±√17」。",
    "explanation": "17>0，所以平方後為17的實數有正負兩個，寫成 x=±√17。",
    "steps": [
      "整理條件：x為實數，17為正。",
      "獨立推導：不參照選項，從題幹條件重新計算：由平方方程取平方根時必須保留兩個符號。 詳算檢查：17>0，所以平方後為17的實數有正負兩個，寫成 x=±√17。 因此結果為「x=±√17」。",
      "核對目標：答案「x=±√17」確實回應「用正確記號表示全部解。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "x=√17",
        "truth": false,
        "reason": "只寫正解。"
      },
      {
        "choice": "x=-√17",
        "truth": false,
        "reason": "只寫負解。"
      },
      {
        "choice": "x=17",
        "truth": false,
        "reason": "未開平方。"
      },
      {
        "choice": "x=±√17",
        "truth": true,
        "reason": "此選項符合目標「用正確記號表示全部解。」；17>0，所以平方後為17的實數有正負兩個，寫成 x=±√17。"
      }
    ],
    "misconceptionTarget": "看到根號符號就只寫非負解。",
    "prerequisiteCheck": "需能使用先備技能 square-root-estimate，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "從主平方根過渡到方程雙解。；具體任務是「用正確記號表示全部解。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根記號",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "0de1430547c59389f5e7a4869af450f11eb6dcf7cb78c0d89a066e7f56b85c37"
  },
  {
    "questionId": "u11-s005-v006",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-notation",
    "lockedSkillOrder": 5,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪個式子沒有實數意義？",
    "givenConditions": [
      "討論實數範圍。"
    ],
    "target": "辨認根號的定義域。",
    "choices": [
      "√0",
      "√(-4)",
      "√4",
      "√( (-2)² )"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：檢查被開方數；-4<0，所以在實數範圍無定義。 詳算檢查：任何實數平方都非負，因此不存在實數平方後為 -4。 因此結果為「√(-4)」。",
    "explanation": "任何實數平方都非負，因此不存在實數平方後為 -4。",
    "steps": [
      "整理條件：討論實數範圍。",
      "獨立推導：不參照選項，從題幹條件重新計算：檢查被開方數；-4<0，所以在實數範圍無定義。 詳算檢查：任何實數平方都非負，因此不存在實數平方後為 -4。 因此結果為「√(-4)」。",
      "核對目標：答案「√(-4)」確實回應「辨認根號的定義域。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "√0",
        "truth": false,
        "reason": "值為0。"
      },
      {
        "choice": "√(-4)",
        "truth": true,
        "reason": "此選項符合目標「辨認根號的定義域。」；任何實數平方都非負，因此不存在實數平方後為 -4。"
      },
      {
        "choice": "√4",
        "truth": false,
        "reason": "值為2。"
      },
      {
        "choice": "√( (-2)² )",
        "truth": false,
        "reason": "值為2。"
      }
    ],
    "misconceptionTarget": "認為根號前後的負號位置沒有差別。",
    "prerequisiteCheck": "需能使用先備技能 square-root-estimate，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需檢查被開方數符號。；具體任務是「辨認根號的定義域。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根記號",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "871a80f400149b6269f56b38059758e0db374905a5037202133bb2e98f54bc2b"
  },
  {
    "questionId": "u11-s005-v007",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-notation",
    "lockedSkillOrder": 5,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 a<0，則 √(a²) 應化為何者？",
    "givenConditions": [
      "已知a<0。"
    ],
    "target": "依條件化簡根式。",
    "choices": [
      "a",
      "±a",
      "-a",
      "a²"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：主平方根非負，而 -a>0，所以結果是 -a。 詳算檢查：√(a²)=|a|；當 a<0 時，|a|=-a。 因此結果為「-a」。",
    "explanation": "√(a²)=|a|；當 a<0 時，|a|=-a。",
    "steps": [
      "整理條件：已知a<0。",
      "獨立推導：不參照選項，從題幹條件重新計算：主平方根非負，而 -a>0，所以結果是 -a。 詳算檢查：√(a²)=|a|；當 a<0 時，|a|=-a。 因此結果為「-a」。",
      "核對目標：答案「-a」確實回應「依條件化簡根式。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "a",
        "truth": false,
        "reason": "a為負，不能等於非負主平方根。"
      },
      {
        "choice": "±a",
        "truth": false,
        "reason": "根式只有單一值。"
      },
      {
        "choice": "-a",
        "truth": true,
        "reason": "此選項符合目標「依條件化簡根式。」；√(a²)=|a|；當 a<0 時，|a|=-a。"
      },
      {
        "choice": "a²",
        "truth": false,
        "reason": "未開平方。"
      }
    ],
    "misconceptionTarget": "機械地約掉平方與根號。",
    "prerequisiteCheck": "需能使用先備技能 square-root-estimate，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需使用條件選擇絕對值分段。；具體任務是「依條件化簡根式。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根記號",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "a51c898a86615ac610b2f5f1ffc5c765483e44e30b4ebecad1a5b52d96b91697"
  },
  {
    "questionId": "u11-s005-v008",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-notation",
    "lockedSkillOrder": 5,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 √x=7，則 x 等於多少？",
    "givenConditions": [
      "√x有定義且等於7。"
    ],
    "target": "反解被開方數。",
    "choices": [
      "49",
      "7",
      "±49",
      "14"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：因兩邊非負，可平方：x=7²=49。 詳算檢查：兩邊平方得 x=49，且驗算 √49=7。 因此結果為「49」。",
    "explanation": "兩邊平方得 x=49，且驗算 √49=7。",
    "steps": [
      "整理條件：√x有定義且等於7。",
      "獨立推導：不參照選項，從題幹條件重新計算：因兩邊非負，可平方：x=7²=49。 詳算檢查：兩邊平方得 x=49，且驗算 √49=7。 因此結果為「49」。",
      "核對目標：答案「49」確實回應「反解被開方數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "49",
        "truth": true,
        "reason": "此選項符合目標「反解被開方數。」；兩邊平方得 x=49，且驗算 √49=7。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "只抄等式右側。"
      },
      {
        "choice": "±49",
        "truth": false,
        "reason": "x被根號限制為非負且等式唯一。"
      },
      {
        "choice": "14",
        "truth": false,
        "reason": "把平方誤作乘2。"
      }
    ],
    "misconceptionTarget": "把求平方根與反向平方混淆。",
    "prerequisiteCheck": "需能使用先備技能 square-root-estimate，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需要正確執行逆運算並驗算。；具體任務是「反解被開方數。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根記號",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "b5617eb8a25c7ce0628f6384f531227c2df75502e13fdb25cbe1c0beaac0a879"
  },
  {
    "questionId": "u11-s005-v009",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-notation",
    "lockedSkillOrder": 5,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列等式何者對所有實數 t 都成立？",
    "givenConditions": [
      "t可為任意實數。"
    ],
    "target": "選出恆成立的根式關係。",
    "choices": [
      "√(t²)=t",
      "(√t)²=t",
      "√(t²)=|t|",
      "√(t²)=±t"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：分 t≥0 與 t<0 檢查，均得到 |t|。 詳算檢查：t²≥0，取其非負平方根等於 t 的絕對值。 因此結果為「√(t²)=|t|」。",
    "explanation": "t²≥0，取其非負平方根等於 t 的絕對值。",
    "steps": [
      "整理條件：t可為任意實數。",
      "獨立推導：不參照選項，從題幹條件重新計算：分 t≥0 與 t<0 檢查，均得到 |t|。 詳算檢查：t²≥0，取其非負平方根等於 t 的絕對值。 因此結果為「√(t²)=|t|」。",
      "核對目標：答案「√(t²)=|t|」確實回應「選出恆成立的根式關係。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "√(t²)=t",
        "truth": false,
        "reason": "t<0時不成立。"
      },
      {
        "choice": "(√t)²=t",
        "truth": false,
        "reason": "t<0時左式在實數無定義。"
      },
      {
        "choice": "√(t²)=|t|",
        "truth": true,
        "reason": "此選項符合目標「選出恆成立的根式關係。」；t²≥0，取其非負平方根等於 t 的絕對值。"
      },
      {
        "choice": "√(t²)=±t",
        "truth": false,
        "reason": "左式是一個非負值，不是兩值。"
      }
    ],
    "misconceptionTarget": "忽略主平方根的非負性。",
    "prerequisiteCheck": "需能使用先備技能 square-root-estimate，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需要用反例排除看似相近的式子。；具體任務是「選出恆成立的根式關係。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根記號",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "18d8b0f9564fd4e183cb393971d8fbf4172618e6f0b3cfcb0d009172af42e33d"
  },
  {
    "questionId": "u11-s005-v010",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-notation",
    "lockedSkillOrder": 5,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "計算機畫面輸入「√81」後顯示 9。下列解讀何者正確？",
    "givenConditions": [
      "計算機使用標準主平方根功能。"
    ],
    "target": "解讀工具輸出。",
    "choices": [
      "81只有一個平方根",
      "方程x²=81只有解9",
      "計算機省略了錯誤的負答案",
      "計算機顯示的是81的非負平方根"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：區分函數值√81=9與方程x²=81的兩解。 詳算檢查：按鍵 √ 依慣例回傳主平方根，因此顯示9；但81的平方根仍有±9。 因此結果為「計算機顯示的是81的非負平方根」。",
    "explanation": "按鍵 √ 依慣例回傳主平方根，因此顯示9；但81的平方根仍有±9。",
    "steps": [
      "整理條件：計算機使用標準主平方根功能。",
      "獨立推導：不參照選項，從題幹條件重新計算：區分函數值√81=9與方程x²=81的兩解。 詳算檢查：按鍵 √ 依慣例回傳主平方根，因此顯示9；但81的平方根仍有±9。 因此結果為「計算機顯示的是81的非負平方根」。",
      "核對目標：答案「計算機顯示的是81的非負平方根」確實回應「解讀工具輸出。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "81只有一個平方根",
        "truth": false,
        "reason": "81另有平方根-9。"
      },
      {
        "choice": "方程x²=81只有解9",
        "truth": false,
        "reason": "還有解-9。"
      },
      {
        "choice": "計算機省略了錯誤的負答案",
        "truth": false,
        "reason": "-9不是錯誤，只是不屬於√81的單一值。"
      },
      {
        "choice": "計算機顯示的是81的非負平方根",
        "truth": true,
        "reason": "此選項符合目標「解讀工具輸出。」；按鍵 √ 依慣例回傳主平方根，因此顯示9；但81的平方根仍有±9。"
      }
    ],
    "misconceptionTarget": "把介面顯示規則誤當成平方根個數。",
    "prerequisiteCheck": "需能使用先備技能 square-root-estimate，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需連結數學記號與介面行為。；具體任務是「解讀工具輸出。」。",
    "literacyContextNecessity": "計算機只顯示單一值是理解差異的核心。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根記號",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "cb4165934154cc0e494c2df9c2ace85dc8ffd6b7efeb23fd8a1fb40b69cb5bee"
  },
  {
    "questionId": "u11-s005-v011",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-notation",
    "lockedSkillOrder": 5,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "工程規格寫「誤差 e 滿足 e²=0.04」。若 e 可正可負，應記為何者？",
    "givenConditions": [
      "e可正可負。"
    ],
    "target": "用正確記號列出兩個可能誤差。",
    "choices": [
      "e=±0.2",
      "e=0.2",
      "e=-0.2",
      "e=±0.04"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：先解平方方程得兩根，再確認規格沒有排除任一符號。 詳算檢查：0.04=(0.2)²，且誤差允許正負，所以 e=±0.2。 因此結果為「e=±0.2」。",
    "explanation": "0.04=(0.2)²，且誤差允許正負，所以 e=±0.2。",
    "steps": [
      "整理條件：e可正可負。",
      "獨立推導：不參照選項，從題幹條件重新計算：先解平方方程得兩根，再確認規格沒有排除任一符號。 詳算檢查：0.04=(0.2)²，且誤差允許正負，所以 e=±0.2。 因此結果為「e=±0.2」。",
      "核對目標：答案「e=±0.2」確實回應「用正確記號列出兩個可能誤差。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "e=±0.2",
        "truth": true,
        "reason": "此選項符合目標「用正確記號列出兩個可能誤差。」；0.04=(0.2)²，且誤差允許正負，所以 e=±0.2。"
      },
      {
        "choice": "e=0.2",
        "truth": false,
        "reason": "漏掉負誤差。"
      },
      {
        "choice": "e=-0.2",
        "truth": false,
        "reason": "漏掉正誤差。"
      },
      {
        "choice": "e=±0.04",
        "truth": false,
        "reason": "未開平方。"
      }
    ],
    "misconceptionTarget": "見到實際量就自動只取正根。",
    "prerequisiteCheck": "需能使用先備技能 square-root-estimate，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需依物理量定義決定是否保留雙根。；具體任務是「用正確記號列出兩個可能誤差。」。",
    "literacyContextNecessity": "「可正可負」決定兩個答案都必須保留。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根記號",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "baba4ac2c767f433748397887bc03ec3dfca852ff0fa7805f6fde429b9ec36fd"
  },
  {
    "questionId": "u11-s005-v012",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-notation",
    "lockedSkillOrder": 5,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "資料表欄位要求填入「邊長」，公式得到 s²=50。下列填法最合適？",
    "givenConditions": [
      "s為幾何邊長。"
    ],
    "target": "選擇符合欄位語意的記法。",
    "choices": [
      "s=±√50",
      "s=√50",
      "s=50",
      "s=-√50"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：解方程後用欄位語意排除負根。 詳算檢查：方程有±√50兩個代數解，但 s 代表邊長，所以取非負值 √50。 因此結果為「s=√50」。",
    "explanation": "方程有±√50兩個代數解，但 s 代表邊長，所以取非負值 √50。",
    "steps": [
      "整理條件：s為幾何邊長。",
      "獨立推導：不參照選項，從題幹條件重新計算：解方程後用欄位語意排除負根。 詳算檢查：方程有±√50兩個代數解，但 s 代表邊長，所以取非負值 √50。 因此結果為「s=√50」。",
      "核對目標：答案「s=√50」確實回應「選擇符合欄位語意的記法。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "s=±√50",
        "truth": false,
        "reason": "邊長不取負值。"
      },
      {
        "choice": "s=√50",
        "truth": true,
        "reason": "此選項符合目標「選擇符合欄位語意的記法。」；方程有±√50兩個代數解，但 s 代表邊長，所以取非負值 √50。"
      },
      {
        "choice": "s=50",
        "truth": false,
        "reason": "未開平方。"
      },
      {
        "choice": "s=-√50",
        "truth": false,
        "reason": "違反長度非負。"
      }
    ],
    "misconceptionTarget": "只看代數式，不檢查量的意義。",
    "prerequisiteCheck": "需能使用先備技能 square-root-estimate，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需把記號與實際量限制結合。；具體任務是「選擇符合欄位語意的記法。」。",
    "literacyContextNecessity": "「邊長」使負根不合情境。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根記號",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "33c04cf0fb735426c98fc12fe298dd2435880a8564d4caa287251af59a692971"
  },
  {
    "questionId": "u11-s006-v001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-perfect-square",
    "lockedSkillOrder": 6,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個是完全平方數？",
    "givenConditions": [
      "候選皆為正整數。"
    ],
    "target": "辨認完全平方數。",
    "choices": [
      "120",
      "144",
      "150",
      "180"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：列出附近平方：11²=121、12²=144、13²=169。 詳算檢查：144=12²，所以是完全平方數。 因此結果為「144」。",
    "explanation": "144=12²，所以是完全平方數。",
    "steps": [
      "整理條件：候選皆為正整數。",
      "獨立推導：不參照選項，從題幹條件重新計算：列出附近平方：11²=121、12²=144、13²=169。 詳算檢查：144=12²，所以是完全平方數。 因此結果為「144」。",
      "核對目標：答案「144」確實回應「辨認完全平方數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "120",
        "truth": false,
        "reason": "不存在整數平方等於120。"
      },
      {
        "choice": "144",
        "truth": true,
        "reason": "此選項符合目標「辨認完全平方數。」；144=12²，所以是完全平方數。"
      },
      {
        "choice": "150",
        "truth": false,
        "reason": "介於12²與13²之間。"
      },
      {
        "choice": "180",
        "truth": false,
        "reason": "不是整數的平方。"
      }
    ],
    "misconceptionTarget": "看到偶數就誤認為完全平方數。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-notation，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "直接使用常用平方表。；具體任務是「辨認完全平方數。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "完全平方數平方根",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "3a662367d1e0b566abaef39a5f2c90ff5182c59e8c70338679608f3f22a039d3"
  },
  {
    "questionId": "u11-s006-v002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-perfect-square",
    "lockedSkillOrder": 6,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "√225 等於多少？",
    "givenConditions": [
      "225為完全平方數。"
    ],
    "target": "求整數平方根。",
    "choices": [
      "15",
      "14",
      "25",
      "112.5"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：以15×15驗算得到225。 詳算檢查：15²=225，因此主平方根是15。 因此結果為「15」。",
    "explanation": "15²=225，因此主平方根是15。",
    "steps": [
      "整理條件：225為完全平方數。",
      "獨立推導：不參照選項，從題幹條件重新計算：以15×15驗算得到225。 詳算檢查：15²=225，因此主平方根是15。 因此結果為「15」。",
      "核對目標：答案「15」確實回應「求整數平方根。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "15",
        "truth": true,
        "reason": "此選項符合目標「求整數平方根。」；15²=225，因此主平方根是15。"
      },
      {
        "choice": "14",
        "truth": false,
        "reason": "14²=196。"
      },
      {
        "choice": "25",
        "truth": false,
        "reason": "25²=625。"
      },
      {
        "choice": "112.5",
        "truth": false,
        "reason": "開平方不是除以2。"
      }
    ],
    "misconceptionTarget": "不熟悉15的平方。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-notation，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "常用平方數直接辨認。；具體任務是「求整數平方根。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "完全平方數平方根",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "86336314536b5b452dc05520b17fca376ae619312878eeba1ed17916ad8daffd"
  },
  {
    "questionId": "u11-s006-v003",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-perfect-square",
    "lockedSkillOrder": 6,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "20² 等於多少？",
    "givenConditions": [
      "底數為20。"
    ],
    "target": "計算平方。",
    "choices": [
      "40",
      "200",
      "800",
      "400"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：2²=4，再補兩個0，得到400。 詳算檢查：20²=20×20=400。 因此結果為「400」。",
    "explanation": "20²=20×20=400。",
    "steps": [
      "整理條件：底數為20。",
      "獨立推導：不參照選項，從題幹條件重新計算：2²=4，再補兩個0，得到400。 詳算檢查：20²=20×20=400。 因此結果為「400」。",
      "核對目標：答案「400」確實回應「計算平方。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "40",
        "truth": false,
        "reason": "把平方當乘2。"
      },
      {
        "choice": "200",
        "truth": false,
        "reason": "只乘10。"
      },
      {
        "choice": "800",
        "truth": false,
        "reason": "多乘一次2。"
      },
      {
        "choice": "400",
        "truth": true,
        "reason": "此選項符合目標「計算平方。」；20²=20×20=400。"
      }
    ],
    "misconceptionTarget": "把次方符號誤解為乘以2。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-notation，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "單一步驟平方運算。；具體任務是「計算平方。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "完全平方數平方根",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "aadac16955aad5f5b92ad019609e8d64e3e9276119e7f41f2c75f066b07610f3"
  },
  {
    "questionId": "u11-s006-v004",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-perfect-square",
    "lockedSkillOrder": 6,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "小於 300 的最大完全平方數是多少？",
    "givenConditions": [
      "要求嚴格小於300。"
    ],
    "target": "找最大符合條件的完全平方數。",
    "choices": [
      "256",
      "300",
      "289",
      "324"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：找√300介於17與18之間，取17²。 詳算檢查：17²=289<300，而18²=324>300，所以最大的是289。 因此結果為「289」。",
    "explanation": "17²=289<300，而18²=324>300，所以最大的是289。",
    "steps": [
      "整理條件：要求嚴格小於300。",
      "獨立推導：不參照選項，從題幹條件重新計算：找√300介於17與18之間，取17²。 詳算檢查：17²=289<300，而18²=324>300，所以最大的是289。 因此結果為「289」。",
      "核對目標：答案「289」確實回應「找最大符合條件的完全平方數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "256",
        "truth": false,
        "reason": "是16²但不是最大。"
      },
      {
        "choice": "300",
        "truth": false,
        "reason": "不是完全平方數。"
      },
      {
        "choice": "289",
        "truth": true,
        "reason": "此選項符合目標「找最大符合條件的完全平方數。」；17²=289<300，而18²=324>300，所以最大的是289。"
      },
      {
        "choice": "324",
        "truth": false,
        "reason": "雖是18²但大於300。"
      }
    ],
    "misconceptionTarget": "只列出熟悉的16²就停止。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-notation，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需夾住平方根並選邊界。；具體任務是「找最大符合條件的完全平方數。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "完全平方數平方根",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "afba50190d389ea2125df74bc13d5de5a7a884420938adb8c5fa4c1fcb97fe91"
  },
  {
    "questionId": "u11-s006-v005",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-perfect-square",
    "lockedSkillOrder": 6,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "1 到 100（含）共有多少個正完全平方數？",
    "givenConditions": [
      "範圍含1與100，不含0。"
    ],
    "target": "計數完全平方數。",
    "choices": [
      "10 個",
      "9 個",
      "11 個",
      "100 個"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：因11²=121>100，所以整數底數1至10共10個。 詳算檢查：正完全平方數為1²到10²，共10個。 因此結果為「10 個」。",
    "explanation": "正完全平方數為1²到10²，共10個。",
    "steps": [
      "整理條件：範圍含1與100，不含0。",
      "獨立推導：不參照選項，從題幹條件重新計算：因11²=121>100，所以整數底數1至10共10個。 詳算檢查：正完全平方數為1²到10²，共10個。 因此結果為「10 個」。",
      "核對目標：答案「10 個」確實回應「計數完全平方數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "10 個",
        "truth": true,
        "reason": "此選項符合目標「計數完全平方數。」；正完全平方數為1²到10²，共10個。"
      },
      {
        "choice": "9 個",
        "truth": false,
        "reason": "漏掉100=10²。"
      },
      {
        "choice": "11 個",
        "truth": false,
        "reason": "錯把0也算入1到100。"
      },
      {
        "choice": "100 個",
        "truth": false,
        "reason": "把每個正整數都當平方數。"
      }
    ],
    "misconceptionTarget": "範圍端點處理錯誤。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-notation，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需處理包含端點與底數範圍。；具體任務是「計數完全平方數。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "完全平方數平方根",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "8e1b0f62c9bca761bf6bbdc62682abfa126e018583a4d4c8f0e23dd78e34cd41"
  },
  {
    "questionId": "u11-s006-v006",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-perfect-square",
    "lockedSkillOrder": 6,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 n 為正整數且 √n=18，則 n 為何？",
    "givenConditions": [
      "n為正整數。"
    ],
    "target": "由平方根反求完全平方數。",
    "choices": [
      "36",
      "180",
      "324",
      "18"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：兩邊平方，n=324，且√324=18。 詳算檢查：n=18²=324。 因此結果為「324」。",
    "explanation": "n=18²=324。",
    "steps": [
      "整理條件：n為正整數。",
      "獨立推導：不參照選項，從題幹條件重新計算：兩邊平方，n=324，且√324=18。 詳算檢查：n=18²=324。 因此結果為「324」。",
      "核對目標：答案「324」確實回應「由平方根反求完全平方數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "36",
        "truth": false,
        "reason": "把18平方誤作乘2。"
      },
      {
        "choice": "180",
        "truth": false,
        "reason": "只補一個0。"
      },
      {
        "choice": "324",
        "truth": true,
        "reason": "此選項符合目標「由平方根反求完全平方數。」；n=18²=324。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "沒有反向平方。"
      }
    ],
    "misconceptionTarget": "把平方根結果直接當被開方數。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-notation，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "考查平方與開平方互逆。；具體任務是「由平方根反求完全平方數。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "完全平方數平方根",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "a89e1ee1aff0ead74a05c07a0de87c602e8d767d504b2ac749bb58f3e0223ab6"
  },
  {
    "questionId": "u11-s006-v007",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-perfect-square",
    "lockedSkillOrder": 6,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "介於 500 與 700 之間的完全平方數共有幾個？",
    "givenConditions": [
      "要求嚴格介於500與700。"
    ],
    "target": "計數區間內平方數。",
    "choices": [
      "3 個",
      "4 個",
      "5 個",
      "6 個"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：先估√500介於22與23，√700介於26與27，因此底數23到26。 詳算檢查：23²=529、24²=576、25²=625、26²=676，共4個；22²與27²超出。 因此結果為「4 個」。",
    "explanation": "23²=529、24²=576、25²=625、26²=676，共4個；22²與27²超出。",
    "steps": [
      "整理條件：要求嚴格介於500與700。",
      "獨立推導：不參照選項，從題幹條件重新計算：先估√500介於22與23，√700介於26與27，因此底數23到26。 詳算檢查：23²=529、24²=576、25²=625、26²=676，共4個；22²與27²超出。 因此結果為「4 個」。",
      "核對目標：答案「4 個」確實回應「計數區間內平方數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 個",
        "truth": false,
        "reason": "漏掉26²=676。"
      },
      {
        "choice": "4 個",
        "truth": true,
        "reason": "此選項符合目標「計數區間內平方數。」；23²=529、24²=576、25²=625、26²=676，共4個；22²與27²超出。"
      },
      {
        "choice": "5 個",
        "truth": false,
        "reason": "把22²=484或27²=729誤算入。"
      },
      {
        "choice": "6 個",
        "truth": false,
        "reason": "上下界判斷錯誤。"
      }
    ],
    "misconceptionTarget": "只列值未檢查上下界。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-notation，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需同時處理兩個非平方邊界。；具體任務是「計數區間內平方數。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "完全平方數平方根",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "bc91467f2d739fed5972fe07a8f75aafedf339b7796012328eabe1aaed08fdbe"
  },
  {
    "questionId": "u11-s006-v008",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-perfect-square",
    "lockedSkillOrder": 6,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某完全平方數的平方根比 20 大且比 25 小。此完全平方數不可能是哪一個？",
    "givenConditions": [
      "平方根為整數且20<根<25。"
    ],
    "target": "找出不符合者。",
    "choices": [
      "441",
      "484",
      "576",
      "625"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：把條件平方根轉為整數底數範圍，再檢查候選。 詳算檢查：平方根需為21、22、23或24；625的平方根25不小於25。 因此結果為「625」。",
    "explanation": "平方根需為21、22、23或24；625的平方根25不小於25。",
    "steps": [
      "整理條件：平方根為整數且20<根<25。",
      "獨立推導：不參照選項，從題幹條件重新計算：把條件平方根轉為整數底數範圍，再檢查候選。 詳算檢查：平方根需為21、22、23或24；625的平方根25不小於25。 因此結果為「625」。",
      "核對目標：答案「625」確實回應「找出不符合者。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "441",
        "truth": false,
        "reason": "√441=21，符合。"
      },
      {
        "choice": "484",
        "truth": false,
        "reason": "√484=22，符合。"
      },
      {
        "choice": "576",
        "truth": false,
        "reason": "√576=24，符合。"
      },
      {
        "choice": "625",
        "truth": true,
        "reason": "此選項符合目標「找出不符合者。」；平方根需為21、22、23或24；625的平方根25不小於25。"
      }
    ],
    "misconceptionTarget": "忽略「比25小」是嚴格不等式。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-notation，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需注意嚴格邊界。；具體任務是「找出不符合者。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "完全平方數平方根",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "f35dd3769464be3d8e8a56413083667432a2169fa20962b9415a9704a98db9ad"
  },
  {
    "questionId": "u11-s006-v009",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-perfect-square",
    "lockedSkillOrder": 6,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 k² 是三位數且 k 為正整數，則 k 最小可能是多少？",
    "givenConditions": [
      "k為正整數。"
    ],
    "target": "找最小底數。",
    "choices": [
      "9",
      "11",
      "100",
      "10"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：比較9²=81與10²=100，邊界在10。 詳算檢查：最小三位數是100=10²，所以k最小為10。 因此結果為「10」。",
    "explanation": "最小三位數是100=10²，所以k最小為10。",
    "steps": [
      "整理條件：k為正整數。",
      "獨立推導：不參照選項，從題幹條件重新計算：比較9²=81與10²=100，邊界在10。 詳算檢查：最小三位數是100=10²，所以k最小為10。 因此結果為「10」。",
      "核對目標：答案「10」確實回應「找最小底數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "9",
        "truth": false,
        "reason": "9²=81仍是兩位數。"
      },
      {
        "choice": "11",
        "truth": false,
        "reason": "可行但不是最小。"
      },
      {
        "choice": "100",
        "truth": false,
        "reason": "把平方數位數套到k。"
      },
      {
        "choice": "10",
        "truth": true,
        "reason": "此選項符合目標「找最小底數。」；最小三位數是100=10²，所以k最小為10。"
      }
    ],
    "misconceptionTarget": "把「k²是三位數」誤讀成k是三位數。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-notation，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需理解數位條件作用在平方結果。；具體任務是「找最小底數。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "完全平方數平方根",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "40dfbce1bfb96d8e98f5d1514cf2744a78d3fe3176b637873ed2d2b496197a6e"
  },
  {
    "questionId": "u11-s006-v010",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-perfect-square",
    "lockedSkillOrder": 6,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "學校要把 361 名學生排成實心正方形方陣，每列人數相同。每列應有多少人？",
    "givenConditions": [
      "總人數361，排列為完整正方形。"
    ],
    "target": "求每列人數。",
    "choices": [
      "18 人",
      "19 人",
      "20 人",
      "180 人"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：設每列x人，x²=361，因人數為正取x=19。 詳算檢查：正方形方陣每列人數平方等於361，√361=19。 因此結果為「19 人」。",
    "explanation": "正方形方陣每列人數平方等於361，√361=19。",
    "steps": [
      "整理條件：總人數361，排列為完整正方形。",
      "獨立推導：不參照選項，從題幹條件重新計算：設每列x人，x²=361，因人數為正取x=19。 詳算檢查：正方形方陣每列人數平方等於361，√361=19。 因此結果為「19 人」。",
      "核對目標：答案「19 人」確實回應「求每列人數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "18 人",
        "truth": false,
        "reason": "18²=324，不足361。"
      },
      {
        "choice": "19 人",
        "truth": true,
        "reason": "此選項符合目標「求每列人數。」；正方形方陣每列人數平方等於361，√361=19。"
      },
      {
        "choice": "20 人",
        "truth": false,
        "reason": "20²=400，超過361。"
      },
      {
        "choice": "180 人",
        "truth": false,
        "reason": "誤把總數除以2。"
      }
    ],
    "misconceptionTarget": "忽略方陣的列數也等於每列人數。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-notation，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "人數以人為單位，答案須為正整數。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "把排列語意轉成完全平方。；具體任務是「求每列人數。」。",
    "literacyContextNecessity": "「實心正方形方陣」決定使用平方關係。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "完全平方數平方根",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "b8ecb4a507602d23b8e76fe9112996980dd88902e33285966f311157616e79ea"
  },
  {
    "questionId": "u11-s006-v011",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-perfect-square",
    "lockedSkillOrder": 6,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一批磁磚要鋪成 24×24 的正方形展示區，共需多少片？",
    "givenConditions": [
      "橫列與直列各24片。"
    ],
    "target": "求總磁磚數。",
    "choices": [
      "48 片",
      "96 片",
      "576 片",
      "625 片"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：24×24=(20+4)²=400+160+16=576。 詳算檢查：每邊24片，共24²=576片。 因此結果為「576 片」。",
    "explanation": "每邊24片，共24²=576片。",
    "steps": [
      "整理條件：橫列與直列各24片。",
      "獨立推導：不參照選項，從題幹條件重新計算：24×24=(20+4)²=400+160+16=576。 詳算檢查：每邊24片，共24²=576片。 因此結果為「576 片」。",
      "核對目標：答案「576 片」確實回應「求總磁磚數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "48 片",
        "truth": false,
        "reason": "把24²誤作24×2。"
      },
      {
        "choice": "96 片",
        "truth": false,
        "reason": "乘法錯誤。"
      },
      {
        "choice": "576 片",
        "truth": true,
        "reason": "此選項符合目標「求總磁磚數。」；每邊24片，共24²=576片。"
      },
      {
        "choice": "625 片",
        "truth": false,
        "reason": "誤用25²。"
      }
    ],
    "misconceptionTarget": "把平方符號當作加倍。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-notation，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "計數單位為片。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "在實物排列中計算平方。；具體任務是「求總磁磚數。」。",
    "literacyContextNecessity": "兩個方向各24片是乘法資料。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "完全平方數平方根",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "56cae2bd9711afca2ad1571d3786024518a70ee41168f591d46467a6b13338e4"
  },
  {
    "questionId": "u11-s006-v012",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-perfect-square",
    "lockedSkillOrder": 6,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "倉庫標示某正方形棧板面積為 256 平方公尺。若標示無誤，邊長應為多少公尺？",
    "givenConditions": [
      "面積256平方公尺，棧板為正方形。"
    ],
    "target": "驗證邊長。",
    "choices": [
      "16 公尺",
      "8 公尺",
      "128 公尺",
      "±16 公尺"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：16²=256，負值不適用於長度。 詳算檢查：√256=16，實際邊長為16公尺。 因此結果為「16 公尺」。",
    "explanation": "√256=16，實際邊長為16公尺。",
    "steps": [
      "整理條件：面積256平方公尺，棧板為正方形。",
      "獨立推導：不參照選項，從題幹條件重新計算：16²=256，負值不適用於長度。 詳算檢查：√256=16，實際邊長為16公尺。 因此結果為「16 公尺」。",
      "核對目標：答案「16 公尺」確實回應「驗證邊長。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "16 公尺",
        "truth": true,
        "reason": "此選項符合目標「驗證邊長。」；√256=16，實際邊長為16公尺。"
      },
      {
        "choice": "8 公尺",
        "truth": false,
        "reason": "8²=64。"
      },
      {
        "choice": "128 公尺",
        "truth": false,
        "reason": "誤用除以2。"
      },
      {
        "choice": "±16 公尺",
        "truth": false,
        "reason": "實際邊長取正值。"
      }
    ],
    "misconceptionTarget": "代數上想到雙根卻忽略幾何限制。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-notation，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "平方公尺開平方為公尺。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "結合完全平方與單位。；具體任務是「驗證邊長。」。",
    "literacyContextNecessity": "棧板幾何形狀與面積標示決定平方關係。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "完全平方數平方根",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "4d106299a5abdc1eb0a79ca269ef1c6eb2dd789ab48c6bdd5792d9d2d712761d"
  },
  {
    "questionId": "u11-s007-v001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-rationalize-simple",
    "lockedSkillOrder": 7,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "將 1/√2 分母有理化。",
    "givenConditions": [
      "分母√2非0。"
    ],
    "target": "把分母化為有理數。",
    "choices": [
      "1/2",
      "2/√2",
      "√2/2",
      "√2"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：乘以√2/√2等於1，分母變成2。 詳算檢查：分子分母同乘√2，得 √2/(√2×√2)=√2/2。 因此結果為「√2/2」。",
    "explanation": "分子分母同乘√2，得 √2/(√2×√2)=√2/2。",
    "steps": [
      "整理條件：分母√2非0。",
      "獨立推導：不參照選項，從題幹條件重新計算：乘以√2/√2等於1，分母變成2。 詳算檢查：分子分母同乘√2，得 √2/(√2×√2)=√2/2。 因此結果為「√2/2」。",
      "核對目標：答案「√2/2」確實回應「把分母化為有理數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "1/2",
        "truth": false,
        "reason": "分子未同乘√2。"
      },
      {
        "choice": "2/√2",
        "truth": false,
        "reason": "不是原式等值變形。"
      },
      {
        "choice": "√2/2",
        "truth": true,
        "reason": "此選項符合目標「把分母化為有理數。」；分子分母同乘√2，得 √2/(√2×√2)=√2/2。"
      },
      {
        "choice": "√2",
        "truth": false,
        "reason": "漏掉分母2。"
      }
    ],
    "misconceptionTarget": "只改分母而沒有等值地改分子。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-perfect-square，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "最基本單根式分母。；具體任務是「把分母化為有理數。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "分母有理化基本",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "de6bcbded08ae2df396e2c8493d274a0932fa8e66487632b291fc6c33c626d58"
  },
  {
    "questionId": "u11-s007-v002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-rationalize-simple",
    "lockedSkillOrder": 7,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "把 3/√5 分母有理化時，為保持原值，應將原式乘以下列哪一個分數？",
    "givenConditions": [
      "原式分母√5非0。"
    ],
    "target": "選出合法的等值乘數。",
    "choices": [
      "√5/5",
      "5/√5",
      "1/√5",
      "√5/√5"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：檢查乘數必須等於1，且分母√5再乘√5形成5。 詳算檢查：分子分母同乘相同的非零數，√5/√5=1，因此不改變原值並使分母成5。 因此結果為「√5/√5」。",
    "explanation": "分子分母同乘相同的非零數，√5/√5=1，因此不改變原值並使分母成5。",
    "steps": [
      "整理條件：原式分母√5非0。",
      "獨立推導：不參照選項，從題幹條件重新計算：檢查乘數必須等於1，且分母√5再乘√5形成5。 詳算檢查：分子分母同乘相同的非零數，√5/√5=1，因此不改變原值並使分母成5。 因此結果為「√5/√5」。",
      "核對目標：答案「√5/√5」確實回應「選出合法的等值乘數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "√5/5",
        "truth": false,
        "reason": "此分數不等於1，會改變原值。"
      },
      {
        "choice": "5/√5",
        "truth": false,
        "reason": "等於√5，不是1。"
      },
      {
        "choice": "1/√5",
        "truth": false,
        "reason": "不等於1且使分母更複雜。"
      },
      {
        "choice": "√5/√5",
        "truth": true,
        "reason": "此選項符合目標「選出合法的等值乘數。」；分子分母同乘相同的非零數，√5/√5=1，因此不改變原值並使分母成5。"
      }
    ],
    "misconceptionTarget": "只想到消除根號，沒有保持等值。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-perfect-square，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "考查有理化為何保持等值，而非再做一題數值替換。；具體任務是「選出合法的等值乘數。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "分母有理化基本",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "4865ef5e624c89289c2f6cd905112a62aed38cf2c089de27353c5fa84ff3730c"
  },
  {
    "questionId": "u11-s007-v003",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-rationalize-simple",
    "lockedSkillOrder": 7,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "有人把 2/√3 直接改寫成 2/3，這一步錯在哪裡？",
    "givenConditions": [
      "分母√3非0。"
    ],
    "target": "診斷錯誤並指出等值原則。",
    "choices": [
      "只改了分母，沒有讓分子同步乘以 √3",
      "分母3仍然是無理數",
      "原式不能進行有理化",
      "應把分子2改成4即可"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：比較兩式平方或小數值也會發現2/√3不等於2/3。 詳算檢查：等值分數必須分子分母同乘同一非零數；正確結果是2√3/3。 因此結果為「只改了分母，沒有讓分子同步乘以 √3」。",
    "explanation": "等值分數必須分子分母同乘同一非零數；正確結果是2√3/3。",
    "steps": [
      "整理條件：分母√3非0。",
      "獨立推導：不參照選項，從題幹條件重新計算：比較兩式平方或小數值也會發現2/√3不等於2/3。 詳算檢查：等值分數必須分子分母同乘同一非零數；正確結果是2√3/3。 因此結果為「只改了分母，沒有讓分子同步乘以 √3」。",
      "核對目標：答案「只改了分母，沒有讓分子同步乘以 √3」確實回應「診斷錯誤並指出等值原則。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "只改了分母，沒有讓分子同步乘以 √3",
        "truth": true,
        "reason": "此選項符合目標「診斷錯誤並指出等值原則。」；等值分數必須分子分母同乘同一非零數；正確結果是2√3/3。"
      },
      {
        "choice": "分母3仍然是無理數",
        "truth": false,
        "reason": "3是有理數。"
      },
      {
        "choice": "原式不能進行有理化",
        "truth": false,
        "reason": "分母為單一正根式，正可有理化。"
      },
      {
        "choice": "應把分子2改成4即可",
        "truth": false,
        "reason": "乘2不能補回同一比例。"
      }
    ],
    "misconceptionTarget": "把有理化誤解成只修改分母外觀。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-perfect-square，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "錯誤分析能力，與直接計算題不同。；具體任務是「診斷錯誤並指出等值原則。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "分母有理化基本",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "7e2fcd8b5ee90f6aa45c24cd566cb8b3788e6bb2396e89c03d86cfc599289938"
  },
  {
    "questionId": "u11-s007-v004",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-rationalize-simple",
    "lockedSkillOrder": 7,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "√3/√6 化簡並有理化後為何？",
    "givenConditions": [
      "被開方數非負且分母非0。"
    ],
    "target": "同時化簡與有理化。",
    "choices": [
      "1/√2",
      "√2/2",
      "√18/6",
      "1/2"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：先約成√(3/6)=1/√2，再同乘√2。 詳算檢查：√3/√6=1/√2，再有理化為√2/2。 因此結果為「√2/2」。",
    "explanation": "√3/√6=1/√2，再有理化為√2/2。",
    "steps": [
      "整理條件：被開方數非負且分母非0。",
      "獨立推導：不參照選項，從題幹條件重新計算：先約成√(3/6)=1/√2，再同乘√2。 詳算檢查：√3/√6=1/√2，再有理化為√2/2。 因此結果為「√2/2」。",
      "核對目標：答案「√2/2」確實回應「同時化簡與有理化。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "1/√2",
        "truth": false,
        "reason": "等值但分母仍含根式。"
      },
      {
        "choice": "√2/2",
        "truth": true,
        "reason": "此選項符合目標「同時化簡與有理化。」；√3/√6=1/√2，再有理化為√2/2。"
      },
      {
        "choice": "√18/6",
        "truth": false,
        "reason": "等值但未化到最簡。"
      },
      {
        "choice": "1/2",
        "truth": false,
        "reason": "數值不等。"
      }
    ],
    "misconceptionTarget": "停在尚未有理化或未最簡形式。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-perfect-square，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需選擇有效的先約分策略。；具體任務是「同時化簡與有理化。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "分母有理化基本",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "61f35e89872c8a8837105727d33f6087fa70e7f280b710edefdec4f973ced3f5"
  },
  {
    "questionId": "u11-s007-v005",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-rationalize-simple",
    "lockedSkillOrder": 7,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "5/(2√3) 分母有理化後為何？",
    "givenConditions": [
      "分母2√3非0。"
    ],
    "target": "處理含係數的根式分母。",
    "choices": [
      "5√3/2",
      "15/6",
      "10√3/3",
      "5√3/6"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：(5/(2√3))(√3/√3)=5√3/6。 詳算檢查：同乘√3後分母2×3=6，分子5√3。 因此結果為「5√3/6」。",
    "explanation": "同乘√3後分母2×3=6，分子5√3。",
    "steps": [
      "整理條件：分母2√3非0。",
      "獨立推導：不參照選項，從題幹條件重新計算：(5/(2√3))(√3/√3)=5√3/6。 詳算檢查：同乘√3後分母2×3=6，分子5√3。 因此結果為「5√3/6」。",
      "核對目標：答案「5√3/6」確實回應「處理含係數的根式分母。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "5√3/2",
        "truth": false,
        "reason": "漏乘分母中的√3形成3。"
      },
      {
        "choice": "15/6",
        "truth": false,
        "reason": "把√3誤作3。"
      },
      {
        "choice": "10√3/3",
        "truth": false,
        "reason": "同乘計算錯誤。"
      },
      {
        "choice": "5√3/6",
        "truth": true,
        "reason": "此選項符合目標「處理含係數的根式分母。」；同乘√3後分母2×3=6，分子5√3。"
      }
    ],
    "misconceptionTarget": "忽略分母前的係數2。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-perfect-square，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "比基本題多一個分母係數。；具體任務是「處理含係數的根式分母。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "分母有理化基本",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "d8fb336a3c3e0adf53b31cc72efe4f8b954146104531c01c7115f5d469a22682"
  },
  {
    "questionId": "u11-s007-v006",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-rationalize-simple",
    "lockedSkillOrder": 7,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "2√3/√12 的值化簡後為何？",
    "givenConditions": [
      "分母不為0。"
    ],
    "target": "選擇最簡策略求值。",
    "choices": [
      "1",
      "√3/6",
      "2",
      "√12"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：先化簡分母為2√3，直接約分。 詳算檢查：√12=2√3，所以分子分母相同，值為1。 因此結果為「1」。",
    "explanation": "√12=2√3，所以分子分母相同，值為1。",
    "steps": [
      "整理條件：分母不為0。",
      "獨立推導：不參照選項，從題幹條件重新計算：先化簡分母為2√3，直接約分。 詳算檢查：√12=2√3，所以分子分母相同，值為1。 因此結果為「1」。",
      "核對目標：答案「1」確實回應「選擇最簡策略求值。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": true,
        "reason": "此選項符合目標「選擇最簡策略求值。」；√12=2√3，所以分子分母相同，值為1。"
      },
      {
        "choice": "√3/6",
        "truth": false,
        "reason": "錯誤約分。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "把√12誤作√3。"
      },
      {
        "choice": "√12",
        "truth": false,
        "reason": "未做除法。"
      }
    ],
    "misconceptionTarget": "機械有理化而沒先看可直接化簡。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-perfect-square，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "考查有理化不一定是首選。；具體任務是「選擇最簡策略求值。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "分母有理化基本",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "19799deb37bb55071a02ed6fa0e96529b54d66957319300cb5c142f60d2384ab"
  },
  {
    "questionId": "u11-s007-v007",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-rationalize-simple",
    "lockedSkillOrder": 7,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "7/(3√7) 化簡並有理化後為何？",
    "givenConditions": [
      "分母3√7非0。"
    ],
    "target": "有理化並進一步約分。",
    "choices": [
      "7√7/3",
      "√7/3",
      "√7/21",
      "7/21"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：有理化後再約分，不能停在7√7/21。 詳算檢查：同乘√7得7√7/(3×7)，約去7後為√7/3。 因此結果為「√7/3」。",
    "explanation": "同乘√7得7√7/(3×7)，約去7後為√7/3。",
    "steps": [
      "整理條件：分母3√7非0。",
      "獨立推導：不參照選項，從題幹條件重新計算：有理化後再約分，不能停在7√7/21。 詳算檢查：同乘√7得7√7/(3×7)，約去7後為√7/3。 因此結果為「√7/3」。",
      "核對目標：答案「√7/3」確實回應「有理化並進一步約分。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "7√7/3",
        "truth": false,
        "reason": "漏除分母形成的7。"
      },
      {
        "choice": "√7/3",
        "truth": true,
        "reason": "此選項符合目標「有理化並進一步約分。」；同乘√7得7√7/(3×7)，約去7後為√7/3。"
      },
      {
        "choice": "√7/21",
        "truth": false,
        "reason": "約分方向錯。"
      },
      {
        "choice": "7/21",
        "truth": false,
        "reason": "漏掉根式。"
      }
    ],
    "misconceptionTarget": "有理化後忘記約分。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-perfect-square，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "包含兩階段化簡。；具體任務是「有理化並進一步約分。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "分母有理化基本",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "ac4dfe39b224e6c946693872a98e80334865563f008223628816496e207388b5"
  },
  {
    "questionId": "u11-s007-v008",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-rationalize-simple",
    "lockedSkillOrder": 7,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(√8)/(2√5) 有理化並化簡後為何？",
    "givenConditions": [
      "根式皆為正，分母不為0。"
    ],
    "target": "多步化簡最終形式。",
    "choices": [
      "√40/10",
      "2√10/5",
      "√10/5",
      "√10/10"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：先約去2，再有理化，可避免多餘係數。 詳算檢查：√8=2√2，原式=√2/√5；同乘√5得√10/5。 因此結果為「√10/5」。",
    "explanation": "√8=2√2，原式=√2/√5；同乘√5得√10/5。",
    "steps": [
      "整理條件：根式皆為正，分母不為0。",
      "獨立推導：不參照選項，從題幹條件重新計算：先約去2，再有理化，可避免多餘係數。 詳算檢查：√8=2√2，原式=√2/√5；同乘√5得√10/5。 因此結果為「√10/5」。",
      "核對目標：答案「√10/5」確實回應「多步化簡最終形式。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "√40/10",
        "truth": false,
        "reason": "等值但未最簡。"
      },
      {
        "choice": "2√10/5",
        "truth": false,
        "reason": "係數多一倍。"
      },
      {
        "choice": "√10/5",
        "truth": true,
        "reason": "此選項符合目標「多步化簡最終形式。」；√8=2√2，原式=√2/√5；同乘√5得√10/5。"
      },
      {
        "choice": "√10/10",
        "truth": false,
        "reason": "約分過度。"
      }
    ],
    "misconceptionTarget": "沒有先化簡導致係數錯誤。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-perfect-square，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需規劃運算順序。；具體任務是「多步化簡最終形式。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "分母有理化基本",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "05398827a4fcd28f2f753945431018fb992cb9cf1cd22458ba09398cd1179c95"
  },
  {
    "questionId": "u11-s007-v009",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-rationalize-simple",
    "lockedSkillOrder": 7,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 A=1/√2+1/√8，則 A 化簡後為何？",
    "givenConditions": [
      "兩分母均非0。"
    ],
    "target": "整合有理化與分數加法。",
    "choices": [
      "√2",
      "3√2/4",
      "2√2/3",
      "3/√10"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：分別有理化後通分：2√2/4+√2/4=3√2/4。 詳算檢查：1/√2=√2/2，1/√8=1/(2√2)=√2/4，和為3√2/4。 因此結果為「3√2/4」。",
    "explanation": "1/√2=√2/2，1/√8=1/(2√2)=√2/4，和為3√2/4。",
    "steps": [
      "整理條件：兩分母均非0。",
      "獨立推導：不參照選項，從題幹條件重新計算：分別有理化後通分：2√2/4+√2/4=3√2/4。 詳算檢查：1/√2=√2/2，1/√8=1/(2√2)=√2/4，和為3√2/4。 因此結果為「3√2/4」。",
      "核對目標：答案「3√2/4」確實回應「整合有理化與分數加法。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "√2",
        "truth": false,
        "reason": "第二項處理錯。"
      },
      {
        "choice": "3√2/4",
        "truth": true,
        "reason": "此選項符合目標「整合有理化與分數加法。」；1/√2=√2/2，1/√8=1/(2√2)=√2/4，和為3√2/4。"
      },
      {
        "choice": "2√2/3",
        "truth": false,
        "reason": "通分錯誤。"
      },
      {
        "choice": "3/√10",
        "truth": false,
        "reason": "根式分母不能直接相加。"
      }
    ],
    "misconceptionTarget": "把兩個不同分母直接相加。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-perfect-square，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需處理兩個不同根式分母。；具體任務是「整合有理化與分數加法。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "分母有理化基本",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "0341b65c28a9dc2d86f05c04d12c839dfec90bdabf3ba7037c6a1f2fe67dc8bd"
  },
  {
    "questionId": "u11-s007-v010",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-rationalize-simple",
    "lockedSkillOrder": 7,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一台機器完成一件工作的時間為 6/√3 分鐘。報表要求分母不得含根號，應填多少？",
    "givenConditions": [
      "時間公式給定且√3非0。"
    ],
    "target": "依報表格式改寫等值時間。",
    "choices": [
      "6√3 分鐘",
      "3√2 分鐘",
      "2√3 分鐘",
      "2 分鐘"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：同乘√3後約分6/3。 詳算檢查：6/√3=6√3/3=2√3 分鐘。 因此結果為「2√3 分鐘」。",
    "explanation": "6/√3=6√3/3=2√3 分鐘。",
    "steps": [
      "整理條件：時間公式給定且√3非0。",
      "獨立推導：不參照選項，從題幹條件重新計算：同乘√3後約分6/3。 詳算檢查：6/√3=6√3/3=2√3 分鐘。 因此結果為「2√3 分鐘」。",
      "核對目標：答案「2√3 分鐘」確實回應「依報表格式改寫等值時間。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "6√3 分鐘",
        "truth": false,
        "reason": "漏除分母形成的3。"
      },
      {
        "choice": "3√2 分鐘",
        "truth": false,
        "reason": "錯誤轉換根式。"
      },
      {
        "choice": "2√3 分鐘",
        "truth": true,
        "reason": "此選項符合目標「依報表格式改寫等值時間。」；6/√3=6√3/3=2√3 分鐘。"
      },
      {
        "choice": "2 分鐘",
        "truth": false,
        "reason": "漏掉√3。"
      }
    ],
    "misconceptionTarget": "完成有理化但忘記約分。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-perfect-square，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "時間單位保持分鐘。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "結合格式規範與約分。；具體任務是「依報表格式改寫等值時間。」。",
    "literacyContextNecessity": "報表明定分母不能有根號，因此必須有理化。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "分母有理化基本",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "acd9a5e937926f9df4b31b50a4cec9c1803f7315289b6f923e5f84504f751660"
  },
  {
    "questionId": "u11-s007-v011",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-rationalize-simple",
    "lockedSkillOrder": 7,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某材料單價公式為 15/(2√5) 元。財務系統接受最簡有理化形式，應輸入何者？",
    "givenConditions": [
      "分母非0，金額以精確值表示。"
    ],
    "target": "輸出最簡有理化形式。",
    "choices": [
      "15√5/2 元",
      "3/2 元",
      "15√10/10 元",
      "3√5/2 元"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：先有理化，再以5約分。 詳算檢查：15/(2√5)同乘√5得15√5/10=3√5/2。 因此結果為「3√5/2 元」。",
    "explanation": "15/(2√5)同乘√5得15√5/10=3√5/2。",
    "steps": [
      "整理條件：分母非0，金額以精確值表示。",
      "獨立推導：不參照選項，從題幹條件重新計算：先有理化，再以5約分。 詳算檢查：15/(2√5)同乘√5得15√5/10=3√5/2。 因此結果為「3√5/2 元」。",
      "核對目標：答案「3√5/2 元」確實回應「輸出最簡有理化形式。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "15√5/2 元",
        "truth": false,
        "reason": "漏除5。"
      },
      {
        "choice": "3/2 元",
        "truth": false,
        "reason": "漏掉根式。"
      },
      {
        "choice": "15√10/10 元",
        "truth": false,
        "reason": "錯乘根式。"
      },
      {
        "choice": "3√5/2 元",
        "truth": true,
        "reason": "此選項符合目標「輸出最簡有理化形式。」；15/(2√5)同乘√5得15√5/10=3√5/2。"
      }
    ],
    "misconceptionTarget": "只達成有理化，未做到最簡。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-perfect-square，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "單價仍為元。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "包含有理化與分數約簡。；具體任務是「輸出最簡有理化形式。」。",
    "literacyContextNecessity": "財務系統的輸入格式決定不能保留原式。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "分母有理化基本",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "bbd493f7f13df820ad699e9f953d1c73c70fb029d1fcc75e81b82cf928e13fd5"
  },
  {
    "questionId": "u11-s007-v012",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-rationalize-simple",
    "lockedSkillOrder": 7,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "實驗式算得速率為 √6/√15 公尺/秒，報告要求最簡且分母有理化。結果為何？",
    "givenConditions": [
      "分母根式正且不為0。"
    ],
    "target": "依報告規格化簡。",
    "choices": [
      "√10/5 公尺/秒",
      "√2/5 公尺/秒",
      "√90/15 公尺/秒",
      "2/5 公尺/秒"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：先約被開方數6/15=2/5，再有理化。 詳算檢查：√6/√15=√(2/5)=√2/√5，同乘√5得√10/5。 因此結果為「√10/5 公尺/秒」。",
    "explanation": "√6/√15=√(2/5)=√2/√5，同乘√5得√10/5。",
    "steps": [
      "整理條件：分母根式正且不為0。",
      "獨立推導：不參照選項，從題幹條件重新計算：先約被開方數6/15=2/5，再有理化。 詳算檢查：√6/√15=√(2/5)=√2/√5，同乘√5得√10/5。 因此結果為「√10/5 公尺/秒」。",
      "核對目標：答案「√10/5 公尺/秒」確實回應「依報告規格化簡。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "√10/5 公尺/秒",
        "truth": true,
        "reason": "此選項符合目標「依報告規格化簡。」；√6/√15=√(2/5)=√2/√5，同乘√5得√10/5。"
      },
      {
        "choice": "√2/5 公尺/秒",
        "truth": false,
        "reason": "根式比值化簡錯誤。"
      },
      {
        "choice": "√90/15 公尺/秒",
        "truth": false,
        "reason": "等值但未最簡。"
      },
      {
        "choice": "2/5 公尺/秒",
        "truth": false,
        "reason": "數值不等。"
      }
    ],
    "misconceptionTarget": "直接相乘後沒有化簡到最終格式。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-perfect-square，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "數值改寫不改變公尺/秒單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需在複合單位下保持等值與格式。；具體任務是「依報告規格化簡。」。",
    "literacyContextNecessity": "報告同時要求最簡與有理化，兩步都必要。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "分母有理化基本",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "ac9c055185cbd3c5108f12ed67cb3f4c279aef45a48c3c360b5ef2ed1760c0f9"
  },
  {
    "questionId": "u11-s008-v001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-comparison",
    "lockedSkillOrder": 8,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "比較 √11 與 3 的大小。",
    "givenConditions": [
      "兩數皆非負。"
    ],
    "target": "判斷大小關係。",
    "choices": [
      "√11<3",
      "√11=3",
      "無法比較",
      "√11>3"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：把3寫成√9，比較被開方數11與9。 詳算檢查：11>9=3²，所以√11>3。 因此結果為「√11>3」。",
    "explanation": "11>9=3²，所以√11>3。",
    "steps": [
      "整理條件：兩數皆非負。",
      "獨立推導：不參照選項，從題幹條件重新計算：把3寫成√9，比較被開方數11與9。 詳算檢查：11>9=3²，所以√11>3。 因此結果為「√11>3」。",
      "核對目標：答案「√11>3」確實回應「判斷大小關係。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "√11<3",
        "truth": false,
        "reason": "因11>9，平方根也應較大。"
      },
      {
        "choice": "√11=3",
        "truth": false,
        "reason": "3²=9不是11。"
      },
      {
        "choice": "無法比較",
        "truth": false,
        "reason": "兩者皆非負，可平方比較。"
      },
      {
        "choice": "√11>3",
        "truth": true,
        "reason": "此選項符合目標「判斷大小關係。」；11>9=3²，所以√11>3。"
      }
    ],
    "misconceptionTarget": "看到根式就認為不能比較。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-rationalize-simple，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "基本單調性比較。；具體任務是「判斷大小關係。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根大小比較",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "8001ba47ef1e814f80727b219cb2ecda2a31235494c4358236d81dce7e40f92f"
  },
  {
    "questionId": "u11-s008-v002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-comparison",
    "lockedSkillOrder": 8,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "因為 50>49=7²，下列哪一個推論正確？",
    "givenConditions": [
      "比較的被開方數皆非負。"
    ],
    "target": "從被開方數不等式推出根式不等式。",
    "choices": [
      "√50<7",
      "√50>7",
      "√50=7",
      "√50>49"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：把完整不等式兩邊取非負平方根。 詳算檢查：非負數開平方保持大小，因此由50>49可得√50>√49=7。 因此結果為「√50>7」。",
    "explanation": "非負數開平方保持大小，因此由50>49可得√50>√49=7。",
    "steps": [
      "整理條件：比較的被開方數皆非負。",
      "獨立推導：不參照選項，從題幹條件重新計算：把完整不等式兩邊取非負平方根。 詳算檢查：非負數開平方保持大小，因此由50>49可得√50>√49=7。 因此結果為「√50>7」。",
      "核對目標：答案「√50>7」確實回應「從被開方數不等式推出根式不等式。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "√50<7",
        "truth": false,
        "reason": "平方根在非負範圍保持大小。"
      },
      {
        "choice": "√50>7",
        "truth": true,
        "reason": "此選項符合目標「從被開方數不等式推出根式不等式。」；非負數開平方保持大小，因此由50>49可得√50>√49=7。"
      },
      {
        "choice": "√50=7",
        "truth": false,
        "reason": "50不等於49。"
      },
      {
        "choice": "√50>49",
        "truth": false,
        "reason": "√50約7.07，不大於49。"
      }
    ],
    "misconceptionTarget": "只背結論而不知道大小推論的前提。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-rationalize-simple，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "考查推論鏈而非單純換數比較。；具體任務是「從被開方數不等式推出根式不等式。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根大小比較",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "e1c14701e61fe89e8bb2f6b965e5bf82379d8fb796f0a3d64d44534b6c2389c8"
  },
  {
    "questionId": "u11-s008-v003",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-comparison",
    "lockedSkillOrder": 8,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪個最大？",
    "givenConditions": [
      "候選皆為正數。"
    ],
    "target": "找最大值。",
    "choices": [
      "3",
      "√8",
      "√10",
      "2√2"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：把所有正數寫成根式後比較8、9、10。 詳算檢查：3=√9，2√2=√8，因此√10最大。 因此結果為「√10」。",
    "explanation": "3=√9，2√2=√8，因此√10最大。",
    "steps": [
      "整理條件：候選皆為正數。",
      "獨立推導：不參照選項，從題幹條件重新計算：把所有正數寫成根式後比較8、9、10。 詳算檢查：3=√9，2√2=√8，因此√10最大。 因此結果為「√10」。",
      "核對目標：答案「√10」確實回應「找最大值。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": false,
        "reason": "3=√9，小於√10。"
      },
      {
        "choice": "√8",
        "truth": false,
        "reason": "被開方數較小。"
      },
      {
        "choice": "√10",
        "truth": true,
        "reason": "此選項符合目標「找最大值。」；3=√9，2√2=√8，因此√10最大。"
      },
      {
        "choice": "2√2",
        "truth": false,
        "reason": "平方為8，也小於√10。"
      }
    ],
    "misconceptionTarget": "只看外觀係數。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-rationalize-simple，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需做簡單等值轉換。；具體任務是「找最大值。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根大小比較",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "508957a18ff30c1fed17de958eb7c33f630986c2b45cf7dfc6c0f224c525ce4b"
  },
  {
    "questionId": "u11-s008-v004",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-comparison",
    "lockedSkillOrder": 8,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "比較 2√3 與 √13。",
    "givenConditions": [
      "兩者皆非負。"
    ],
    "target": "比較含係數根式。",
    "choices": [
      "2√3<√13",
      "2√3>√13",
      "2√3=√13",
      "符號無法決定"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：(2√3)²=12，(√13)²=13。 詳算檢查：兩者皆正，平方後分別為12與13，所以2√3<√13。 因此結果為「2√3<√13」。",
    "explanation": "兩者皆正，平方後分別為12與13，所以2√3<√13。",
    "steps": [
      "整理條件：兩者皆非負。",
      "獨立推導：不參照選項，從題幹條件重新計算：(2√3)²=12，(√13)²=13。 詳算檢查：兩者皆正，平方後分別為12與13，所以2√3<√13。 因此結果為「2√3<√13」。",
      "核對目標：答案「2√3<√13」確實回應「比較含係數根式。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "2√3<√13",
        "truth": true,
        "reason": "此選項符合目標「比較含係數根式。」；兩者皆正，平方後分別為12與13，所以2√3<√13。"
      },
      {
        "choice": "2√3>√13",
        "truth": false,
        "reason": "平方後12<13。"
      },
      {
        "choice": "2√3=√13",
        "truth": false,
        "reason": "兩者平方不等。"
      },
      {
        "choice": "符號無法決定",
        "truth": false,
        "reason": "皆為正，可平方。"
      }
    ],
    "misconceptionTarget": "只比較係數2與1。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-rationalize-simple，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需用平方消去根號。；具體任務是「比較含係數根式。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根大小比較",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "703ddc615055f64a43c88466b86541e2a22f8dfd11239b678bcf72f210261bc0"
  },
  {
    "questionId": "u11-s008-v005",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-comparison",
    "lockedSkillOrder": 8,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "不使用小數近似時，3√2 與 √17 的正確大小關係為何？",
    "givenConditions": [
      "兩個比較量皆為正數，可用平方值18與17判斷。"
    ],
    "target": "以平方比較選出正確關係。",
    "choices": [
      "3√2<√17",
      "3√2>√17",
      "兩者相等",
      "無法判斷"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：正數平方函數保持大小。 詳算檢查：平方後18>17，因此3√2>√17。 因此結果為「3√2>√17」。",
    "explanation": "平方後18>17，因此3√2>√17。",
    "steps": [
      "整理條件：兩個比較量皆為正數，可用平方值18與17判斷。",
      "獨立推導：不參照選項，從題幹條件重新計算：正數平方函數保持大小。 詳算檢查：平方後18>17，因此3√2>√17。 因此結果為「3√2>√17」。",
      "核對目標：答案「3√2>√17」確實回應「以平方比較選出正確關係。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "3√2<√17",
        "truth": false,
        "reason": "平方後18>17。"
      },
      {
        "choice": "3√2>√17",
        "truth": true,
        "reason": "此選項符合目標「以平方比較選出正確關係。」；平方後18>17，因此3√2>√17。"
      },
      {
        "choice": "兩者相等",
        "truth": false,
        "reason": "平方不相等。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "可比較平方。"
      }
    ],
    "misconceptionTarget": "估算不精確造成反向。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-rationalize-simple，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需準確平方係數。；具體任務是「以平方比較選出正確關係。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根大小比較",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "334aa43bdea1cc334de36a44de57055c89547c811077b5bb7b2ad5a46dbdc4fe"
  },
  {
    "questionId": "u11-s008-v006",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-comparison",
    "lockedSkillOrder": 8,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "比較 -√5 與 -2。",
    "givenConditions": [
      "兩數皆為負。"
    ],
    "target": "比較負根式與負整數。",
    "choices": [
      "-√5>-2",
      "-√5=-2",
      "-√5<-2",
      "無法比較"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：先比較正值，再利用乘以-1會反轉不等號。 詳算檢查：√5>2，所以取相反數後 -√5<-2。 因此結果為「-√5<-2」。",
    "explanation": "√5>2，所以取相反數後 -√5<-2。",
    "steps": [
      "整理條件：兩數皆為負。",
      "獨立推導：不參照選項，從題幹條件重新計算：先比較正值，再利用乘以-1會反轉不等號。 詳算檢查：√5>2，所以取相反數後 -√5<-2。 因此結果為「-√5<-2」。",
      "核對目標：答案「-√5<-2」確實回應「比較負根式與負整數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "-√5>-2",
        "truth": false,
        "reason": "√5>2，取負後方向反轉。"
      },
      {
        "choice": "-√5=-2",
        "truth": false,
        "reason": "5≠4。"
      },
      {
        "choice": "-√5<-2",
        "truth": true,
        "reason": "此選項符合目標「比較負根式與負整數。」；√5>2，所以取相反數後 -√5<-2。"
      },
      {
        "choice": "無法比較",
        "truth": false,
        "reason": "可由正值比較後取相反數。"
      }
    ],
    "misconceptionTarget": "忽略負號使大小方向反轉。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-rationalize-simple，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "多一層符號判斷。；具體任務是「比較負根式與負整數。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根大小比較",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "0bd774945dbf36152463e9c17c32342587d5acbc12825accd29ae6d41c3c08fc"
  },
  {
    "questionId": "u11-s008-v007",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-comparison",
    "lockedSkillOrder": 8,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列排序何者正確？",
    "givenConditions": [
      "所有數皆正。"
    ],
    "target": "排序三個根式量。",
    "choices": [
      "2√2<√7<3",
      "√7<3<2√2",
      "3<√7<2√2",
      "√7<2√2<3"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：統一寫成√7、√8、√9後排序。 詳算檢查：平方比較：√7約2.646，2√2=√8約2.828，3=√9，所以依序√7<2√2<3。 因此結果為「√7<2√2<3」。",
    "explanation": "平方比較：√7約2.646，2√2=√8約2.828，3=√9，所以依序√7<2√2<3。",
    "steps": [
      "整理條件：所有數皆正。",
      "獨立推導：不參照選項，從題幹條件重新計算：統一寫成√7、√8、√9後排序。 詳算檢查：平方比較：√7約2.646，2√2=√8約2.828，3=√9，所以依序√7<2√2<3。 因此結果為「√7<2√2<3」。",
      "核對目標：答案「√7<2√2<3」確實回應「排序三個根式量。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "2√2<√7<3",
        "truth": false,
        "reason": "平方後8>7。"
      },
      {
        "choice": "√7<3<2√2",
        "truth": false,
        "reason": "2√2約2.828<3。"
      },
      {
        "choice": "3<√7<2√2",
        "truth": false,
        "reason": "√7<3。"
      },
      {
        "choice": "√7<2√2<3",
        "truth": true,
        "reason": "此選項符合目標「排序三個根式量。」；平方比較：√7約2.646，2√2=√8約2.828，3=√9，所以依序√7<2√2<3。"
      }
    ],
    "misconceptionTarget": "未把係數移入根號。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-rationalize-simple，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需進行多項等值化。；具體任務是「排序三個根式量。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根大小比較",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "9723df011dbea3ac1f4aade11ead4043adca19dd05b038966be3b475e50bb919"
  },
  {
    "questionId": "u11-s008-v008",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-comparison",
    "lockedSkillOrder": 8,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 a>0，且 √a<5，則 a 必須滿足何者？",
    "givenConditions": [
      "已知a>0。"
    ],
    "target": "把根式不等式轉為a的範圍。",
    "choices": [
      "0<a<25",
      "a>25",
      "a<5",
      "a≤0"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：由0<√a<5平方，得到0<a<25。 詳算檢查：兩邊皆非負，平方得 a<25，再合併 a>0。 因此結果為「0<a<25」。",
    "explanation": "兩邊皆非負，平方得 a<25，再合併 a>0。",
    "steps": [
      "整理條件：已知a>0。",
      "獨立推導：不參照選項，從題幹條件重新計算：由0<√a<5平方，得到0<a<25。 詳算檢查：兩邊皆非負，平方得 a<25，再合併 a>0。 因此結果為「0<a<25」。",
      "核對目標：答案「0<a<25」確實回應「把根式不等式轉為a的範圍。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "0<a<25",
        "truth": true,
        "reason": "此選項符合目標「把根式不等式轉為a的範圍。」；兩邊皆非負，平方得 a<25，再合併 a>0。"
      },
      {
        "choice": "a>25",
        "truth": false,
        "reason": "平方不等號方向錯。"
      },
      {
        "choice": "a<5",
        "truth": false,
        "reason": "忘記5也要平方。"
      },
      {
        "choice": "a≤0",
        "truth": false,
        "reason": "與a>0矛盾。"
      }
    ],
    "misconceptionTarget": "只平方含根號的一邊。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-rationalize-simple，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需合併原條件與平方結果。；具體任務是「把根式不等式轉為a的範圍。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根大小比較",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "d4af707b5184862447a0f9a59b90962ca542b14f62337655c60a3626071e1b8b"
  },
  {
    "questionId": "u11-s008-v009",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-comparison",
    "lockedSkillOrder": 8,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "比較 √18+√8 與 7。",
    "givenConditions": [
      "兩邊均正。"
    ],
    "target": "比較根式和與整數。",
    "choices": [
      "√18+√8>7",
      "√18+√8<7",
      "兩者相等",
      "無法不用小數判斷"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：先化簡合併，再比較兩個正數的平方。 詳算檢查：√18+√8=3√2+2√2=5√2；平方為50，而7²=49，所以前者較大。 因此結果為「√18+√8>7」。",
    "explanation": "√18+√8=3√2+2√2=5√2；平方為50，而7²=49，所以前者較大。",
    "steps": [
      "整理條件：兩邊均正。",
      "獨立推導：不參照選項，從題幹條件重新計算：先化簡合併，再比較兩個正數的平方。 詳算檢查：√18+√8=3√2+2√2=5√2；平方為50，而7²=49，所以前者較大。 因此結果為「√18+√8>7」。",
      "核對目標：答案「√18+√8>7」確實回應「比較根式和與整數。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "√18+√8>7",
        "truth": true,
        "reason": "此選項符合目標「比較根式和與整數。」；√18+√8=3√2+2√2=5√2；平方為50，而7²=49，所以前者較大。"
      },
      {
        "choice": "√18+√8<7",
        "truth": false,
        "reason": "化簡後為5√2約7.07。"
      },
      {
        "choice": "兩者相等",
        "truth": false,
        "reason": "(5√2)²=50≠49。"
      },
      {
        "choice": "無法不用小數判斷",
        "truth": false,
        "reason": "可比較平方50與49。"
      }
    ],
    "misconceptionTarget": "分別粗估後誤判為相等。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-rationalize-simple，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "結合根式運算與平方比較。；具體任務是「比較根式和與整數。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根大小比較",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "6cebb9fc9809cc269f08ea949673e1cd5fc9931d7625f07499186b6166a34090"
  },
  {
    "questionId": "u11-s008-v010",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-comparison",
    "lockedSkillOrder": 8,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩種方形地磚邊長分別為 √30 公分與 5.4 公分。哪一種邊長較長？",
    "givenConditions": [
      "兩者皆為正長度。"
    ],
    "target": "選較長地磚。",
    "choices": [
      "5.4公分較長",
      "兩者相等",
      "資料不足",
      "√30 公分較長"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：兩長度皆正，平方後比較29.16與30。 詳算檢查：5.4²=29.16<30，所以5.4<√30。 因此結果為「√30 公分較長」。",
    "explanation": "5.4²=29.16<30，所以5.4<√30。",
    "steps": [
      "整理條件：兩者皆為正長度。",
      "獨立推導：不參照選項，從題幹條件重新計算：兩長度皆正，平方後比較29.16與30。 詳算檢查：5.4²=29.16<30，所以5.4<√30。 因此結果為「√30 公分較長」。",
      "核對目標：答案「√30 公分較長」確實回應「選較長地磚。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "5.4公分較長",
        "truth": false,
        "reason": "5.4²=29.16<30。"
      },
      {
        "choice": "兩者相等",
        "truth": false,
        "reason": "平方值不同。"
      },
      {
        "choice": "資料不足",
        "truth": false,
        "reason": "可平方比較。"
      },
      {
        "choice": "√30 公分較長",
        "truth": true,
        "reason": "此選項符合目標「選較長地磚。」；5.4²=29.16<30，所以5.4<√30。"
      }
    ],
    "misconceptionTarget": "認為根式一定小於相近整數。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-rationalize-simple，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "兩者單位同為公分。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需要以精確平方避免近似誤差。；具體任務是「選較長地磚。」。",
    "literacyContextNecessity": "實際採購選擇取決於長度比較。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根大小比較",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "b356fe226e0628190cd121cc320da1aa52c0048a0a2f359b37f812a200e354cf"
  },
  {
    "questionId": "u11-s008-v011",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-comparison",
    "lockedSkillOrder": 8,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "A路線長 √65 公里，B路線長 8.1 公里。導航應推薦較短的哪一條？",
    "givenConditions": [
      "兩路線長度皆正。"
    ],
    "target": "選較短路線。",
    "choices": [
      "B路線",
      "A路線",
      "兩條相同",
      "無法比較"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：不必估小數，只比較平方即可。 詳算檢查：√65<8.1，因65<8.1²=65.61，所以A較短。 因此結果為「A路線」。",
    "explanation": "√65<8.1，因65<8.1²=65.61，所以A較短。",
    "steps": [
      "整理條件：兩路線長度皆正。",
      "獨立推導：不參照選項，從題幹條件重新計算：不必估小數，只比較平方即可。 詳算檢查：√65<8.1，因65<8.1²=65.61，所以A較短。 因此結果為「A路線」。",
      "核對目標：答案「A路線」確實回應「選較短路線。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "B路線",
        "truth": false,
        "reason": "8.1²=65.61>65。"
      },
      {
        "choice": "A路線",
        "truth": true,
        "reason": "此選項符合目標「選較短路線。」；√65<8.1，因65<8.1²=65.61，所以A較短。"
      },
      {
        "choice": "兩條相同",
        "truth": false,
        "reason": "平方值不等。"
      },
      {
        "choice": "無法比較",
        "truth": false,
        "reason": "兩長度皆正，可平方。"
      }
    ],
    "misconceptionTarget": "近似把√65當8.1而判為相同。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-rationalize-simple，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "公里單位一致。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "精確比較非常接近的數。；具體任務是「選較短路線。」。",
    "literacyContextNecessity": "推薦結果直接依賴哪條較短。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根大小比較",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "83ada130d69007b6443584824d1418dca7baeb30450111f368f82557d94c6ed5"
  },
  {
    "questionId": "u11-s008-v012",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-comparison",
    "lockedSkillOrder": 8,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩支支架承載指標分別為 4√3 與 √47，數值較大者優先使用。應選哪一支？",
    "givenConditions": [
      "指標均為正值。"
    ],
    "target": "依指標選支架。",
    "choices": [
      "√47的支架",
      "兩者相等",
      "4√3 的支架",
      "不能比較不同形式"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：承載指標皆正，平方比較不改變順序。 詳算檢查：(4√3)²=48，而(√47)²=47，所以4√3較大。 因此結果為「4√3 的支架」。",
    "explanation": "(4√3)²=48，而(√47)²=47，所以4√3較大。",
    "steps": [
      "整理條件：指標均為正值。",
      "獨立推導：不參照選項，從題幹條件重新計算：承載指標皆正，平方比較不改變順序。 詳算檢查：(4√3)²=48，而(√47)²=47，所以4√3較大。 因此結果為「4√3 的支架」。",
      "核對目標：答案「4√3 的支架」確實回應「依指標選支架。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "√47的支架",
        "truth": false,
        "reason": "平方後47<48。"
      },
      {
        "choice": "兩者相等",
        "truth": false,
        "reason": "平方值不同。"
      },
      {
        "choice": "4√3 的支架",
        "truth": true,
        "reason": "此選項符合目標「依指標選支架。」；(4√3)²=48，而(√47)²=47，所以4√3較大。"
      },
      {
        "choice": "不能比較不同形式",
        "truth": false,
        "reason": "正數可平方比較。"
      }
    ],
    "misconceptionTarget": "只比較根號內47與3，忽略係數4。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-rationalize-simple，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需處理係數根式的精確比較。；具體任務是「依指標選支架。」。",
    "literacyContextNecessity": "優先使用規則使大小比較具有實際決策作用。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根大小比較",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "2b0ec1254dbe69a9191128b75f6c17ea1dc833c24053de010d89775bff97e59f"
  },
  {
    "questionId": "u11-s009-v001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-theorem",
    "lockedSkillOrder": 9,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "figure",
    "figureId": "fig-u11-s009-right-triangle",
    "drawingSpecReference": "units/u11/s009/drawing-specs.jsonl#fig-u11-s009-right-triangle",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "直角三角形兩股長為 3 與 4，斜邊長是多少？",
    "givenConditions": [
      "兩股互相垂直，長度3與4。"
    ],
    "target": "求斜邊。",
    "choices": [
      "5",
      "6",
      "7",
      "√7"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：計算9+16=25，長度取正平方根5。 詳算檢查：斜邊 c 滿足 c²=3²+4²=25，所以 c=5。 因此結果為「5」。",
    "explanation": "斜邊 c 滿足 c²=3²+4²=25，所以 c=5。",
    "steps": [
      "整理條件：兩股互相垂直，長度3與4。",
      "獨立推導：不參照選項，從題幹條件重新計算：計算9+16=25，長度取正平方根5。 詳算檢查：斜邊 c 滿足 c²=3²+4²=25，所以 c=5。 因此結果為「5」。",
      "核對目標：答案「5」確實回應「求斜邊。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": true,
        "reason": "此選項符合目標「求斜邊。」；斜邊 c 滿足 c²=3²+4²=25，所以 c=5。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "把兩股直接相加再減1沒有依據。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "直接相加。"
      },
      {
        "choice": "√7",
        "truth": false,
        "reason": "把平方和錯寫成3+4。"
      }
    ],
    "misconceptionTarget": "把畢氏定理誤寫成c=a+b。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-comparison，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目未指定實體單位，答案為長度數值。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "經典整數直角三角形。；具體任務是「求斜邊。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "63ca0eda475a56f7dd3fd1f4fc2b4b4843ca9c093a30ea60b2d8aeebb3943c5f"
  },
  {
    "questionId": "u11-s009-v002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-theorem",
    "lockedSkillOrder": 9,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩股為 5 與 12 時，下列哪一個算式正確表示斜邊的求法？",
    "givenConditions": [
      "5與12明定為兩股。"
    ],
    "target": "選出合法推導式。",
    "choices": [
      "5+12=17",
      "√(12²-5²)=√119",
      "(5+12)²=289",
      "√(5²+12²)=13"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：辨認所求是斜邊，應使用平方和再取正根。 詳算檢查：斜邊平方等於兩股平方和，所以斜邊=√(25+144)=13。 因此結果為「√(5²+12²)=13」。",
    "explanation": "斜邊平方等於兩股平方和，所以斜邊=√(25+144)=13。",
    "steps": [
      "整理條件：5與12明定為兩股。",
      "獨立推導：不參照選項，從題幹條件重新計算：辨認所求是斜邊，應使用平方和再取正根。 詳算檢查：斜邊平方等於兩股平方和，所以斜邊=√(25+144)=13。 因此結果為「√(5²+12²)=13」。",
      "核對目標：答案「√(5²+12²)=13」確實回應「選出合法推導式。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "5+12=17",
        "truth": false,
        "reason": "斜邊不是兩股直接相加。"
      },
      {
        "choice": "√(12²-5²)=√119",
        "truth": false,
        "reason": "平方差用於已知斜邊求股。"
      },
      {
        "choice": "(5+12)²=289",
        "truth": false,
        "reason": "先相加再平方不是畢氏定理。"
      },
      {
        "choice": "√(5²+12²)=13",
        "truth": true,
        "reason": "此選項符合目標「選出合法推導式。」；斜邊平方等於兩股平方和，所以斜邊=√(25+144)=13。"
      }
    ],
    "misconceptionTarget": "會算數組但不會選正確公式結構。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-comparison，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "著重公式結構辨識，避免與第一題成為純數字替換。；具體任務是「選出合法推導式。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "797021a786ad86f7b58f68cd1533c3b9311282d8f1e7c6799ce145b4bf403fd4"
  },
  {
    "questionId": "u11-s009-v003",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-theorem",
    "lockedSkillOrder": 9,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "直角三角形中，若兩股為 a、b，斜邊為 c，正確關係為何？",
    "givenConditions": [
      "c為斜邊。"
    ],
    "target": "選出定理公式。",
    "choices": [
      "a+b=c",
      "a²+b²=c²",
      "a²-b²=c²",
      "a²+b²=2c"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：辨認c是直角對邊且最長，公式為a²+b²=c²。 詳算檢查：畢氏定理指出兩股平方和等於斜邊平方。 因此結果為「a²+b²=c²」。",
    "explanation": "畢氏定理指出兩股平方和等於斜邊平方。",
    "steps": [
      "整理條件：c為斜邊。",
      "獨立推導：不參照選項，從題幹條件重新計算：辨認c是直角對邊且最長，公式為a²+b²=c²。 詳算檢查：畢氏定理指出兩股平方和等於斜邊平方。 因此結果為「a²+b²=c²」。",
      "核對目標：答案「a²+b²=c²」確實回應「選出定理公式。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "a+b=c",
        "truth": false,
        "reason": "只有退化情況才可能，非一般直角三角形。"
      },
      {
        "choice": "a²+b²=c²",
        "truth": true,
        "reason": "此選項符合目標「選出定理公式。」；畢氏定理指出兩股平方和等於斜邊平方。"
      },
      {
        "choice": "a²-b²=c²",
        "truth": false,
        "reason": "平方和符號錯。"
      },
      {
        "choice": "a²+b²=2c",
        "truth": false,
        "reason": "量綱與公式皆錯。"
      }
    ],
    "misconceptionTarget": "沒有先辨認哪一邊是斜邊。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-comparison，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "直接辨認定理。；具體任務是「選出定理公式。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "0887cebd39111e17d7f9d265e3097afab7a1aa4fcf8969d07b9786877ac1ada0"
  },
  {
    "questionId": "u11-s009-v004",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-theorem",
    "lockedSkillOrder": 9,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "直角三角形兩股長為 √7 與 3，斜邊長為何？",
    "givenConditions": [
      "兩股皆為正長度。"
    ],
    "target": "求含根式股的斜邊。",
    "choices": [
      "√10",
      "10",
      "4",
      "√16+3"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：先平方根式股得到7，再加9取正根。 詳算檢查：c²=(√7)²+3²=7+9=16，所以c=4。 因此結果為「4」。",
    "explanation": "c²=(√7)²+3²=7+9=16，所以c=4。",
    "steps": [
      "整理條件：兩股皆為正長度。",
      "獨立推導：不參照選項，從題幹條件重新計算：先平方根式股得到7，再加9取正根。 詳算檢查：c²=(√7)²+3²=7+9=16，所以c=4。 因此結果為「4」。",
      "核對目標：答案「4」確實回應「求含根式股的斜邊。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "√10",
        "truth": false,
        "reason": "只把被開方數與3相加。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "漏開平方。"
      },
      {
        "choice": "4",
        "truth": true,
        "reason": "此選項符合目標「求含根式股的斜邊。」；c²=(√7)²+3²=7+9=16，所以c=4。"
      },
      {
        "choice": "√16+3",
        "truth": false,
        "reason": "公式結構錯誤。"
      }
    ],
    "misconceptionTarget": "平方根式時仍保留根號。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-comparison，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需處理根式平方。；具體任務是「求含根式股的斜邊。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "ad12aee05e6f3deef96d7159320e20491222a0efeb59344559dbd0d92f6032d2"
  },
  {
    "questionId": "u11-s009-v005",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-theorem",
    "lockedSkillOrder": 9,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某直角三角形兩股平方和為 169，斜邊是多少？",
    "givenConditions": [
      "已知兩股平方和。"
    ],
    "target": "由平方和求斜邊。",
    "choices": [
      "169",
      "13",
      "±13",
      "84.5"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：由c²=169解得±13，再依長度取13。 詳算檢查：斜邊平方為169，所以斜邊=√169=13。 因此結果為「13」。",
    "explanation": "斜邊平方為169，所以斜邊=√169=13。",
    "steps": [
      "整理條件：已知兩股平方和。",
      "獨立推導：不參照選項，從題幹條件重新計算：由c²=169解得±13，再依長度取13。 詳算檢查：斜邊平方為169，所以斜邊=√169=13。 因此結果為「13」。",
      "核對目標：答案「13」確實回應「由平方和求斜邊。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "169",
        "truth": false,
        "reason": "漏開平方。"
      },
      {
        "choice": "13",
        "truth": true,
        "reason": "此選項符合目標「由平方和求斜邊。」；斜邊平方為169，所以斜邊=√169=13。"
      },
      {
        "choice": "±13",
        "truth": false,
        "reason": "長度只取正值。"
      },
      {
        "choice": "84.5",
        "truth": false,
        "reason": "誤用除以2。"
      }
    ],
    "misconceptionTarget": "在幾何情境保留負根。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-comparison，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需依長度條件選正根。；具體任務是「由平方和求斜邊。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "269276fe4029a0b1c0351a8d49f98db0fc31d4367544fb98c9cd2b91c40715ec"
  },
  {
    "questionId": "u11-s009-v006",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-theorem",
    "lockedSkillOrder": 9,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一直角三角形兩股皆為 6，斜邊為何？",
    "givenConditions": [
      "等腰直角三角形，兩股6。"
    ],
    "target": "求最簡根式斜邊。",
    "choices": [
      "6√2",
      "12",
      "36√2",
      "√12"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：提出36：√(36×2)=6√2。 詳算檢查：c²=6²+6²=72，所以c=√72=6√2。 因此結果為「6√2」。",
    "explanation": "c²=6²+6²=72，所以c=√72=6√2。",
    "steps": [
      "整理條件：等腰直角三角形，兩股6。",
      "獨立推導：不參照選項，從題幹條件重新計算：提出36：√(36×2)=6√2。 詳算檢查：c²=6²+6²=72，所以c=√72=6√2。 因此結果為「6√2」。",
      "核對目標：答案「6√2」確實回應「求最簡根式斜邊。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "6√2",
        "truth": true,
        "reason": "此選項符合目標「求最簡根式斜邊。」；c²=6²+6²=72，所以c=√72=6√2。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "直接相加。"
      },
      {
        "choice": "36√2",
        "truth": false,
        "reason": "平方後係數錯。"
      },
      {
        "choice": "√12",
        "truth": false,
        "reason": "未平方兩股。"
      }
    ],
    "misconceptionTarget": "畢氏計算正確但根式未化簡。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-comparison，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "結合畢氏定理與根式化簡。；具體任務是「求最簡根式斜邊。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "c6e44c072d0303c06d9ff887ee8cbe0ae182bdcaa8eabf0d5fa038253ff9d8fe"
  },
  {
    "questionId": "u11-s009-v007",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-theorem",
    "lockedSkillOrder": 9,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一直角三角形兩股長為 2√3 與 √13，斜邊長為何？",
    "givenConditions": [
      "兩股為正根式。"
    ],
    "target": "求斜邊。",
    "choices": [
      "√15",
      "25",
      "5",
      "3√5"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：平方兩股後恰為25，取正根。 詳算檢查：c²=(2√3)²+(√13)²=12+13=25，所以c=5。 因此結果為「5」。",
    "explanation": "c²=(2√3)²+(√13)²=12+13=25，所以c=5。",
    "steps": [
      "整理條件：兩股為正根式。",
      "獨立推導：不參照選項，從題幹條件重新計算：平方兩股後恰為25，取正根。 詳算檢查：c²=(2√3)²+(√13)²=12+13=25，所以c=5。 因此結果為「5」。",
      "核對目標：答案「5」確實回應「求斜邊。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "√15",
        "truth": false,
        "reason": "把兩股直接放進同一根號相加。"
      },
      {
        "choice": "25",
        "truth": false,
        "reason": "漏開平方。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "此選項符合目標「求斜邊。」；c²=(2√3)²+(√13)²=12+13=25，所以c=5。"
      },
      {
        "choice": "3√5",
        "truth": false,
        "reason": "根式化簡錯誤。"
      }
    ],
    "misconceptionTarget": "係數平方處理錯誤。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-comparison，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "兩個不同根式平方後整合。；具體任務是「求斜邊。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "ea9ba975872e7646ae08c589b8e8d29a18d8a031817e9976550f7114b9fde93a"
  },
  {
    "questionId": "u11-s009-v008",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-theorem",
    "lockedSkillOrder": 9,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "直角三角形兩股比為 3:4，且兩股平方和為 400。斜邊是多少？",
    "givenConditions": [
      "已知為直角三角形且平方和400。"
    ],
    "target": "辨認足夠資料求斜邊。",
    "choices": [
      "5",
      "25",
      "400",
      "20"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：比例資料其實不必使用；依定理直接由平方和求斜邊。 詳算檢查：兩股平方和就是斜邊平方，所以c²=400，c=20。 因此結果為「20」。",
    "explanation": "兩股平方和就是斜邊平方，所以c²=400，c=20。",
    "steps": [
      "整理條件：已知為直角三角形且平方和400。",
      "獨立推導：不參照選項，從題幹條件重新計算：比例資料其實不必使用；依定理直接由平方和求斜邊。 詳算檢查：兩股平方和就是斜邊平方，所以c²=400，c=20。 因此結果為「20」。",
      "核對目標：答案「20」確實回應「辨認足夠資料求斜邊。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "只取比例中的5。"
      },
      {
        "choice": "25",
        "truth": false,
        "reason": "把比例平方和3²+4²=25當斜邊。"
      },
      {
        "choice": "400",
        "truth": false,
        "reason": "漏開平方。"
      },
      {
        "choice": "20",
        "truth": true,
        "reason": "此選項符合目標「辨認足夠資料求斜邊。」；兩股平方和就是斜邊平方，所以c²=400，c=20。"
      }
    ],
    "misconceptionTarget": "被多餘資料干擾而重複計算。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-comparison，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "含多餘資訊，考查定理核心。；具體任務是「辨認足夠資料求斜邊。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "cc2fce87947e6f79d17090eface3e0562f8c7788480b5576cccad7ecc716caef"
  },
  {
    "questionId": "u11-s009-v009",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-theorem",
    "lockedSkillOrder": 9,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一直角三角形斜邊為 √61，兩股平方差為 11，且較長股為 a、較短股為 b。a² 為何？",
    "givenConditions": [
      "a>b>0。"
    ],
    "target": "求較長股的平方。",
    "choices": [
      "25",
      "47",
      "36",
      "61"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：聯立平方和與平方差，不需先求邊長。 詳算檢查：a²+b²=61，a²-b²=11，相加得2a²=72，所以a²=36。 因此結果為「36」。",
    "explanation": "a²+b²=61，a²-b²=11，相加得2a²=72，所以a²=36。",
    "steps": [
      "整理條件：a>b>0。",
      "獨立推導：不參照選項，從題幹條件重新計算：聯立平方和與平方差，不需先求邊長。 詳算檢查：a²+b²=61，a²-b²=11，相加得2a²=72，所以a²=36。 因此結果為「36」。",
      "核對目標：答案「36」確實回應「求較長股的平方。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "25",
        "truth": false,
        "reason": "這是b²。"
      },
      {
        "choice": "47",
        "truth": false,
        "reason": "聯立加減錯誤。"
      },
      {
        "choice": "36",
        "truth": true,
        "reason": "此選項符合目標「求較長股的平方。」；a²+b²=61，a²-b²=11，相加得2a²=72，所以a²=36。"
      },
      {
        "choice": "61",
        "truth": false,
        "reason": "把斜邊平方當單一股平方。"
      }
    ],
    "misconceptionTarget": "把平方和資料直接分配錯誤。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-comparison，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需聯立兩個平方關係。；具體任務是「求較長股的平方。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "6b420a8cf6f1b4097e96bb5e684c81c7d15b45c5a08bbaced3b0a5d7ef08bbaa"
  },
  {
    "questionId": "u11-s009-v010",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-theorem",
    "lockedSkillOrder": 9,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一塊長方形布的長、寬分別為 9 公分與 12 公分。沿對角剪開後，剪線長多少？",
    "givenConditions": [
      "矩形長9、寬12。"
    ],
    "target": "求對角線剪線。",
    "choices": [
      "21公分",
      "15 公分",
      "√21公分",
      "108公分"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：長與寬互相垂直，套用畢氏定理。 詳算檢查：對角線是直角三角形斜邊，長=√(9²+12²)=√225=15公分。 因此結果為「15 公分」。",
    "explanation": "對角線是直角三角形斜邊，長=√(9²+12²)=√225=15公分。",
    "steps": [
      "整理條件：矩形長9、寬12。",
      "獨立推導：不參照選項，從題幹條件重新計算：長與寬互相垂直，套用畢氏定理。 詳算檢查：對角線是直角三角形斜邊，長=√(9²+12²)=√225=15公分。 因此結果為「15 公分」。",
      "核對目標：答案「15 公分」確實回應「求對角線剪線。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "21公分",
        "truth": false,
        "reason": "把長寬相加。"
      },
      {
        "choice": "15 公分",
        "truth": true,
        "reason": "此選項符合目標「求對角線剪線。」；對角線是直角三角形斜邊，長=√(9²+12²)=√225=15公分。"
      },
      {
        "choice": "√21公分",
        "truth": false,
        "reason": "未平方。"
      },
      {
        "choice": "108公分",
        "truth": false,
        "reason": "把面積當對角線。"
      }
    ],
    "misconceptionTarget": "把矩形對角線與周長或面積混淆。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-comparison，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "長寬以公分，對角線也以公分。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需從矩形辨認直角三角形。；具體任務是「求對角線剪線。」。",
    "literacyContextNecessity": "剪線沿對角決定它是斜邊。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "0bcf6afb60921d026c630cbc7f11df8f26efa9f3f3b7c02ce51bab42d423f156"
  },
  {
    "questionId": "u11-s009-v011",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-theorem",
    "lockedSkillOrder": 9,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個直角轉角的兩條測量邊分別為 8 公尺、15 公尺。跨越兩端的直線拉索長多少？",
    "givenConditions": [
      "兩邊夾角90度。"
    ],
    "target": "求兩端直線距離。",
    "choices": [
      "23公尺",
      "7公尺",
      "√23公尺",
      "17 公尺"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：確認兩測量邊互相垂直後計算。 詳算檢查：拉索為斜邊，√(8²+15²)=√289=17公尺。 因此結果為「17 公尺」。",
    "explanation": "拉索為斜邊，√(8²+15²)=√289=17公尺。",
    "steps": [
      "整理條件：兩邊夾角90度。",
      "獨立推導：不參照選項，從題幹條件重新計算：確認兩測量邊互相垂直後計算。 詳算檢查：拉索為斜邊，√(8²+15²)=√289=17公尺。 因此結果為「17 公尺」。",
      "核對目標：答案「17 公尺」確實回應「求兩端直線距離。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "23公尺",
        "truth": false,
        "reason": "直接相加。"
      },
      {
        "choice": "7公尺",
        "truth": false,
        "reason": "直接相減。"
      },
      {
        "choice": "√23公尺",
        "truth": false,
        "reason": "未平方兩股。"
      },
      {
        "choice": "17 公尺",
        "truth": true,
        "reason": "此選項符合目標「求兩端直線距離。」；拉索為斜邊，√(8²+15²)=√289=17公尺。"
      }
    ],
    "misconceptionTarget": "只做長度加減。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-comparison，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "答案為公尺。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "情境需辨認斜邊。；具體任務是「求兩端直線距離。」。",
    "literacyContextNecessity": "直角轉角是使用畢氏定理的必要條件。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "f465f83841f4b7f6916cb53e31d5cabbbb1b1f8b6518b1203c1c3d89561638df"
  },
  {
    "questionId": "u11-s009-v012",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-theorem",
    "lockedSkillOrder": 9,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "figure",
    "figureId": "fig-u11-s009-square-diagonal",
    "drawingSpecReference": "units/u11/s009/drawing-specs.jsonl#fig-u11-s009-square-diagonal",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "正方形面板邊長為 10 公分，從一角到對角的線長為何？",
    "givenConditions": [
      "正方形相鄰邊垂直且各10。"
    ],
    "target": "求對角線精確值。",
    "choices": [
      "10√2 公分",
      "20公分",
      "100√2公分",
      "√20公分"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：把正方形分成兩個等腰直角三角形。 詳算檢查：對角線平方=10²+10²=200，故長=√200=10√2公分。 因此結果為「10√2 公分」。",
    "explanation": "對角線平方=10²+10²=200，故長=√200=10√2公分。",
    "steps": [
      "整理條件：正方形相鄰邊垂直且各10。",
      "獨立推導：不參照選項，從題幹條件重新計算：把正方形分成兩個等腰直角三角形。 詳算檢查：對角線平方=10²+10²=200，故長=√200=10√2公分。 因此結果為「10√2 公分」。",
      "核對目標：答案「10√2 公分」確實回應「求對角線精確值。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "10√2 公分",
        "truth": true,
        "reason": "此選項符合目標「求對角線精確值。」；對角線平方=10²+10²=200，故長=√200=10√2公分。"
      },
      {
        "choice": "20公分",
        "truth": false,
        "reason": "把兩邊相加。"
      },
      {
        "choice": "100√2公分",
        "truth": false,
        "reason": "把邊長平方留在係數。"
      },
      {
        "choice": "√20公分",
        "truth": false,
        "reason": "未平方兩股。"
      }
    ],
    "misconceptionTarget": "知道公式卻忘記化簡。",
    "prerequisiteCheck": "需能使用先備技能 sqrt-comparison，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "答案為公分。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "建立圖形關係並化簡根式。；具體任務是「求對角線精確值。」。",
    "literacyContextNecessity": "「從一角到對角」指定對角線。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "2dfb456a91c5e6b4ac7120f452ed0f6948bd1312181032f9d258b1e87ce9dcb2"
  },
  {
    "questionId": "u11-s010-v001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-application",
    "lockedSkillOrder": 10,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長方形長 6 公分、寬 8 公分，對角線長為何？",
    "givenConditions": [
      "長6寬8。"
    ],
    "target": "求對角線。",
    "choices": [
      "14公分",
      "10 公分",
      "48公分",
      "√14公分"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：矩形角為直角，對角線是斜邊。 詳算檢查：d=√(6²+8²)=√100=10公分。 因此結果為「10 公分」。",
    "explanation": "d=√(6²+8²)=√100=10公分。",
    "steps": [
      "整理條件：長6寬8。",
      "獨立推導：不參照選項，從題幹條件重新計算：矩形角為直角，對角線是斜邊。 詳算檢查：d=√(6²+8²)=√100=10公分。 因此結果為「10 公分」。",
      "核對目標：答案「10 公分」確實回應「求對角線。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "14公分",
        "truth": false,
        "reason": "把長寬相加。"
      },
      {
        "choice": "10 公分",
        "truth": true,
        "reason": "此選項符合目標「求對角線。」；d=√(6²+8²)=√100=10公分。"
      },
      {
        "choice": "48公分",
        "truth": false,
        "reason": "把面積當對角線。"
      },
      {
        "choice": "√14公分",
        "truth": false,
        "reason": "未平方。"
      }
    ],
    "misconceptionTarget": "將對角線誤認成長加寬。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-theorem，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "基本矩形應用。；具體任務是「求對角線。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理應用",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "9aeb99995025113484abfc68f3bce3fc9156c30f6903ed453531216f03633780"
  },
  {
    "questionId": "u11-s010-v002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-application",
    "lockedSkillOrder": 10,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "邊長 5 公分的正方形，其對角線長為何？",
    "givenConditions": [
      "正方形邊長5。"
    ],
    "target": "求精確對角線。",
    "choices": [
      "10公分",
      "25√2公分",
      "5√2 公分",
      "√10公分"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：等腰直角三角形斜邊為股長乘√2。 詳算檢查：d²=5²+5²=50，d=√50=5√2。 因此結果為「5√2 公分」。",
    "explanation": "d²=5²+5²=50，d=√50=5√2。",
    "steps": [
      "整理條件：正方形邊長5。",
      "獨立推導：不參照選項，從題幹條件重新計算：等腰直角三角形斜邊為股長乘√2。 詳算檢查：d²=5²+5²=50，d=√50=5√2。 因此結果為「5√2 公分」。",
      "核對目標：答案「5√2 公分」確實回應「求精確對角線。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "10公分",
        "truth": false,
        "reason": "直接相加兩邊。"
      },
      {
        "choice": "25√2公分",
        "truth": false,
        "reason": "係數未開平方。"
      },
      {
        "choice": "5√2 公分",
        "truth": true,
        "reason": "此選項符合目標「求精確對角線。」；d²=5²+5²=50，d=√50=5√2。"
      },
      {
        "choice": "√10公分",
        "truth": false,
        "reason": "未平方兩股。"
      }
    ],
    "misconceptionTarget": "錯把面積或周長代入。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-theorem，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "基本正方形應用。；具體任務是「求精確對角線。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理應用",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "3f14077057862ed7ce2422c045754d7fb708637ba9df1f7ee9b204f933c7268e"
  },
  {
    "questionId": "u11-s010-v003",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-application",
    "lockedSkillOrder": 10,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "figure",
    "figureId": "fig-u11-s010-ladder",
    "drawingSpecReference": "units/u11/s010/drawing-specs.jsonl#fig-u11-s010-ladder",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一把 10 公尺長的梯子靠牆，梯腳離牆 6 公尺。梯頂離地多高？",
    "givenConditions": [
      "牆與地面垂直，梯長10。"
    ],
    "target": "求垂直高度。",
    "choices": [
      "8 公尺",
      "4公尺",
      "16公尺",
      "√136公尺"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：梯子是斜邊，求股要用斜邊平方減另一股平方。 詳算檢查：高度²=10²-6²=64，所以高度8公尺。 因此結果為「8 公尺」。",
    "explanation": "高度²=10²-6²=64，所以高度8公尺。",
    "steps": [
      "整理條件：牆與地面垂直，梯長10。",
      "獨立推導：不參照選項，從題幹條件重新計算：梯子是斜邊，求股要用斜邊平方減另一股平方。 詳算檢查：高度²=10²-6²=64，所以高度8公尺。 因此結果為「8 公尺」。",
      "核對目標：答案「8 公尺」確實回應「求垂直高度。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "8 公尺",
        "truth": true,
        "reason": "此選項符合目標「求垂直高度。」；高度²=10²-6²=64，所以高度8公尺。"
      },
      {
        "choice": "4公尺",
        "truth": false,
        "reason": "直接相減。"
      },
      {
        "choice": "16公尺",
        "truth": false,
        "reason": "錯誤相加。"
      },
      {
        "choice": "√136公尺",
        "truth": false,
        "reason": "把斜邊與股平方相加。"
      }
    ],
    "misconceptionTarget": "把梯長與水平距離直接相減。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-theorem，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "答案為公尺。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "基本梯子模型。；具體任務是「求垂直高度。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理應用",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "4c00c347f9c614e64eff147af42f0947c2cdba2a81ff95baa6d7168e708c449e"
  },
  {
    "questionId": "u11-s010-v004",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-application",
    "lockedSkillOrder": 10,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一條斜坡水平長 12 公尺、高 5 公尺，斜坡面長多少？",
    "givenConditions": [
      "水平12、高5。"
    ],
    "target": "求斜坡長。",
    "choices": [
      "17公尺",
      "7公尺",
      "√17公尺",
      "13 公尺"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：水平與垂直方向成直角。 詳算檢查：斜坡面=√(12²+5²)=13公尺。 因此結果為「13 公尺」。",
    "explanation": "斜坡面=√(12²+5²)=13公尺。",
    "steps": [
      "整理條件：水平12、高5。",
      "獨立推導：不參照選項，從題幹條件重新計算：水平與垂直方向成直角。 詳算檢查：斜坡面=√(12²+5²)=13公尺。 因此結果為「13 公尺」。",
      "核對目標：答案「13 公尺」確實回應「求斜坡長。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "17公尺",
        "truth": false,
        "reason": "直接相加。"
      },
      {
        "choice": "7公尺",
        "truth": false,
        "reason": "直接相減。"
      },
      {
        "choice": "√17公尺",
        "truth": false,
        "reason": "未平方。"
      },
      {
        "choice": "13 公尺",
        "truth": true,
        "reason": "此選項符合目標「求斜坡長。」；斜坡面=√(12²+5²)=13公尺。"
      }
    ],
    "misconceptionTarget": "未辨認斜坡面是斜邊。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-theorem，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "標準生活模型。；具體任務是「求斜坡長。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理應用",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "9070b783dd0a9ed110c0dbf1dd606b58b1410e1b067dbb111460dd737d9044c2"
  },
  {
    "questionId": "u11-s010-v005",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-application",
    "lockedSkillOrder": 10,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "電視螢幕長 48 公分、寬 36 公分，對角線長多少？",
    "givenConditions": [
      "矩形螢幕。"
    ],
    "target": "求對角線尺寸。",
    "choices": [
      "84公分",
      "42公分",
      "60 公分",
      "1728公分"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：可提公因數12，形成3-4-5比例的36-48-60。 詳算檢查：√(48²+36²)=√3600=60公分。 因此結果為「60 公分」。",
    "explanation": "√(48²+36²)=√3600=60公分。",
    "steps": [
      "整理條件：矩形螢幕。",
      "獨立推導：不參照選項，從題幹條件重新計算：可提公因數12，形成3-4-5比例的36-48-60。 詳算檢查：√(48²+36²)=√3600=60公分。 因此結果為「60 公分」。",
      "核對目標：答案「60 公分」確實回應「求對角線尺寸。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "84公分",
        "truth": false,
        "reason": "長寬相加。"
      },
      {
        "choice": "42公分",
        "truth": false,
        "reason": "平均值錯用。"
      },
      {
        "choice": "60 公分",
        "truth": true,
        "reason": "此選項符合目標「求對角線尺寸。」；√(48²+36²)=√3600=60公分。"
      },
      {
        "choice": "1728公分",
        "truth": false,
        "reason": "面積誤用。"
      }
    ],
    "misconceptionTarget": "大數平方計算失誤。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-theorem，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需辨認倍數型畢氏數組。；具體任務是「求對角線尺寸。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理應用",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "40ca5c936dadfbcf8fdc5f80a5eae16ccf56ebb192a08e4f51beb9ac478d6179"
  },
  {
    "questionId": "u11-s010-v006",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-application",
    "lockedSkillOrder": 10,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長方形對角線為 13 公分，寬為 5 公分，長為何？",
    "givenConditions": [
      "對角線13、寬5。"
    ],
    "target": "求另一邊。",
    "choices": [
      "8公分",
      "18公分",
      "√194公分",
      "12 公分"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：對角線為斜邊，使用平方差。 詳算檢查：長²=13²-5²=144，所以長12公分。 因此結果為「12 公分」。",
    "explanation": "長²=13²-5²=144，所以長12公分。",
    "steps": [
      "整理條件：對角線13、寬5。",
      "獨立推導：不參照選項，從題幹條件重新計算：對角線為斜邊，使用平方差。 詳算檢查：長²=13²-5²=144，所以長12公分。 因此結果為「12 公分」。",
      "核對目標：答案「12 公分」確實回應「求另一邊。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "8公分",
        "truth": false,
        "reason": "直接相減。"
      },
      {
        "choice": "18公分",
        "truth": false,
        "reason": "直接相加。"
      },
      {
        "choice": "√194公分",
        "truth": false,
        "reason": "平方關係方向錯。"
      },
      {
        "choice": "12 公分",
        "truth": true,
        "reason": "此選項符合目標「求另一邊。」；長²=13²-5²=144，所以長12公分。"
      }
    ],
    "misconceptionTarget": "把斜邊與股直接做加減。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-theorem，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "反向應用畢氏定理。；具體任務是「求另一邊。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理應用",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "1bdbc99d28e6712bc0b74ed6e399212f49c35086937fa566e13a99ea3c7f6ecc"
  },
  {
    "questionId": "u11-s010-v007",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-application",
    "lockedSkillOrder": 10,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩個相鄰正方形邊長分別為 3 與 4，外框形成長 7、寬 4 的長方形。外框對角線長為何？",
    "givenConditions": [
      "兩正方形同底相鄰，較大邊決定高度。"
    ],
    "target": "求組合外框對角線。",
    "choices": [
      "5",
      "√65",
      "√41",
      "11"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：先由組合圖形求外框尺寸，再套定理。 詳算檢查：外框長為3+4=7，寬為4，對角線=√(7²+4²)=√65。 因此結果為「√65」。",
    "explanation": "外框長為3+4=7，寬為4，對角線=√(7²+4²)=√65。",
    "steps": [
      "整理條件：兩正方形同底相鄰，較大邊決定高度。",
      "獨立推導：不參照選項，從題幹條件重新計算：先由組合圖形求外框尺寸，再套定理。 詳算檢查：外框長為3+4=7，寬為4，對角線=√(7²+4²)=√65。 因此結果為「√65」。",
      "核對目標：答案「√65」確實回應「求組合外框對角線。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "只使用3與4的三角形。"
      },
      {
        "choice": "√65",
        "truth": true,
        "reason": "此選項符合目標「求組合外框對角線。」；外框長為3+4=7，寬為4，對角線=√(7²+4²)=√65。"
      },
      {
        "choice": "√41",
        "truth": false,
        "reason": "把長錯當5。"
      },
      {
        "choice": "11",
        "truth": false,
        "reason": "長寬直接相加。"
      }
    ],
    "misconceptionTarget": "直接套用3-4-5而忽略實際外框。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-theorem，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "兩階段圖形建模。；具體任務是「求組合外框對角線。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理應用",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "1a87ba4d55672ee063fa3e0f672575758159d119043abdc1ea0a42db237cdc39"
  },
  {
    "questionId": "u11-s010-v008",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-application",
    "lockedSkillOrder": 10,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一根 25 公尺纜線從地面固定點連到柱頂，固定點離柱腳 7 公尺。若柱腳與地面垂直，柱高為何？",
    "givenConditions": [
      "纜線25、水平7。"
    ],
    "target": "求柱高。",
    "choices": [
      "24 公尺",
      "18公尺",
      "26公尺",
      "√674公尺"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：纜線是斜邊，使用7-24-25畢氏數組。 詳算檢查：柱高=√(25²-7²)=√576=24公尺。 因此結果為「24 公尺」。",
    "explanation": "柱高=√(25²-7²)=√576=24公尺。",
    "steps": [
      "整理條件：纜線25、水平7。",
      "獨立推導：不參照選項，從題幹條件重新計算：纜線是斜邊，使用7-24-25畢氏數組。 詳算檢查：柱高=√(25²-7²)=√576=24公尺。 因此結果為「24 公尺」。",
      "核對目標：答案「24 公尺」確實回應「求柱高。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "24 公尺",
        "truth": true,
        "reason": "此選項符合目標「求柱高。」；柱高=√(25²-7²)=√576=24公尺。"
      },
      {
        "choice": "18公尺",
        "truth": false,
        "reason": "直接相減。"
      },
      {
        "choice": "26公尺",
        "truth": false,
        "reason": "錯誤平方差。"
      },
      {
        "choice": "√674公尺",
        "truth": false,
        "reason": "把平方相加。"
      }
    ],
    "misconceptionTarget": "斜邊位置判斷錯誤。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-theorem，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "數值較大且需判斜邊。；具體任務是「求柱高。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理應用",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "7821ac2ce04902798ec634ed1945420b6dfd3a81091aaf16b1feb11721ab7647"
  },
  {
    "questionId": "u11-s010-v009",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-application",
    "lockedSkillOrder": 10,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個長方體底面長 3、寬 4，高 12。從底面一角到正上方對角頂點的空間線段長為何？",
    "givenConditions": [
      "長寬高互相垂直。"
    ],
    "target": "求空間對角線。",
    "choices": [
      "19",
      "√19",
      "12√2",
      "13"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：連續使用兩次畢氏定理。 詳算檢查：底面對角線=5，再與高12形成直角三角形，空間線長=√(5²+12²)=13。 因此結果為「13」。",
    "explanation": "底面對角線=5，再與高12形成直角三角形，空間線長=√(5²+12²)=13。",
    "steps": [
      "整理條件：長寬高互相垂直。",
      "獨立推導：不參照選項，從題幹條件重新計算：連續使用兩次畢氏定理。 詳算檢查：底面對角線=5，再與高12形成直角三角形，空間線長=√(5²+12²)=13。 因此結果為「13」。",
      "核對目標：答案「13」確實回應「求空間對角線。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "19",
        "truth": false,
        "reason": "三邊直接相加。"
      },
      {
        "choice": "√19",
        "truth": false,
        "reason": "未平方。"
      },
      {
        "choice": "12√2",
        "truth": false,
        "reason": "錯把底面對角線當12。"
      },
      {
        "choice": "13",
        "truth": true,
        "reason": "此選項符合目標「求空間對角線。」；底面對角線=5，再與高12形成直角三角形，空間線長=√(5²+12²)=13。"
      }
    ],
    "misconceptionTarget": "一次把三邊相加或公式混淆。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-theorem，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需要兩階段畢氏推理但仍在國中延伸可理解範圍。；具體任務是「求空間對角線。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理應用",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "a32dbf27b8d748a11284e91b8e823bbf9d56f5540efd934c704f100f08ec95d5"
  },
  {
    "questionId": "u11-s010-v010",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-application",
    "lockedSkillOrder": 10,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "無障礙坡道水平投影 9 公尺、上升 1.2 公尺。坡道實際長度最接近多少？",
    "givenConditions": [
      "水平與垂直互相垂直。"
    ],
    "target": "求實際斜長近似值。",
    "choices": [
      "9.08 公尺",
      "10.2公尺",
      "7.8公尺",
      "81.44公尺"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：平方和82.44，因9.08²約82.4464，故最接近9.08。 詳算檢查：長=√(9²+1.2²)=√82.44≈9.08公尺。 因此結果為「9.08 公尺」。",
    "explanation": "長=√(9²+1.2²)=√82.44≈9.08公尺。",
    "steps": [
      "整理條件：水平與垂直互相垂直。",
      "獨立推導：不參照選項，從題幹條件重新計算：平方和82.44，因9.08²約82.4464，故最接近9.08。 詳算檢查：長=√(9²+1.2²)=√82.44≈9.08公尺。 因此結果為「9.08 公尺」。",
      "核對目標：答案「9.08 公尺」確實回應「求實際斜長近似值。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "9.08 公尺",
        "truth": true,
        "reason": "此選項符合目標「求實際斜長近似值。」；長=√(9²+1.2²)=√82.44≈9.08公尺。"
      },
      {
        "choice": "10.2公尺",
        "truth": false,
        "reason": "直接相加。"
      },
      {
        "choice": "7.8公尺",
        "truth": false,
        "reason": "直接相減。"
      },
      {
        "choice": "81.44公尺",
        "truth": false,
        "reason": "漏開平方。"
      }
    ],
    "misconceptionTarget": "只用水平長忽略上升量或直接相加。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-theorem，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "所有長度以公尺。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "含小數與近似要求。；具體任務是「求實際斜長近似值。」。",
    "literacyContextNecessity": "坡道實際長度由水平與上升共同決定。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理應用",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "a19f0f5ecb77bae669b76a08df779137c0c7482b73c0d6faed31547a501e10bb"
  },
  {
    "questionId": "u11-s010-v011",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-application",
    "lockedSkillOrder": 10,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "消防梯長 15 公尺，安全規定梯腳至少離牆 9 公尺。若剛好 9 公尺，梯頂高度為多少？",
    "givenConditions": [
      "牆地垂直，梯腳距離9。"
    ],
    "target": "求梯頂高度。",
    "choices": [
      "6公尺",
      "18公尺",
      "12 公尺",
      "√306公尺"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：安全規定提供水平股，梯長是斜邊。 詳算檢查：高度=√(15²-9²)=√144=12公尺。 因此結果為「12 公尺」。",
    "explanation": "高度=√(15²-9²)=√144=12公尺。",
    "steps": [
      "整理條件：牆地垂直，梯腳距離9。",
      "獨立推導：不參照選項，從題幹條件重新計算：安全規定提供水平股，梯長是斜邊。 詳算檢查：高度=√(15²-9²)=√144=12公尺。 因此結果為「12 公尺」。",
      "核對目標：答案「12 公尺」確實回應「求梯頂高度。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "6公尺",
        "truth": false,
        "reason": "直接相減。"
      },
      {
        "choice": "18公尺",
        "truth": false,
        "reason": "錯誤相加。"
      },
      {
        "choice": "12 公尺",
        "truth": true,
        "reason": "此選項符合目標「求梯頂高度。」；高度=√(15²-9²)=√144=12公尺。"
      },
      {
        "choice": "√306公尺",
        "truth": false,
        "reason": "平方關係方向錯。"
      }
    ],
    "misconceptionTarget": "忽略「剛好」數值或把梯子當股。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-theorem，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "答案為公尺。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需正確解讀安全規格。；具體任務是「求梯頂高度。」。",
    "literacyContextNecessity": "最低水平距離取等號，直接決定三角形尺寸。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理應用",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "04454370d1074a9ef6740b09509f954c83151f025e69535b07ec58cfe3c250ce"
  },
  {
    "questionId": "u11-s010-v012",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-application",
    "lockedSkillOrder": 10,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一張 16:9 的矩形海報寬 80 公分，高 45 公分。對角線最接近多少公分？",
    "givenConditions": [
      "矩形寬高與精度明確。"
    ],
    "target": "估算海報對角線。",
    "choices": [
      "125公分",
      "91.8 公分",
      "62.5公分",
      "89.0公分"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：先算6400+2025=8425，再估平方根。 詳算檢查：d=√(80²+45²)=√8425≈91.79，取一位小數為91.8公分。 因此結果為「91.8 公分」。",
    "explanation": "d=√(80²+45²)=√8425≈91.79，取一位小數為91.8公分。",
    "steps": [
      "整理條件：矩形寬高與精度明確。",
      "獨立推導：不參照選項，從題幹條件重新計算：先算6400+2025=8425，再估平方根。 詳算檢查：d=√(80²+45²)=√8425≈91.79，取一位小數為91.8公分。 因此結果為「91.8 公分」。",
      "核對目標：答案「91.8 公分」確實回應「估算海報對角線。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "125公分",
        "truth": false,
        "reason": "直接相加。"
      },
      {
        "choice": "91.8 公分",
        "truth": true,
        "reason": "此選項符合目標「估算海報對角線。」；d=√(80²+45²)=√8425≈91.79，取一位小數為91.8公分。"
      },
      {
        "choice": "62.5公分",
        "truth": false,
        "reason": "平均或比例誤用。"
      },
      {
        "choice": "89.0公分",
        "truth": false,
        "reason": "低估平方和。"
      }
    ],
    "misconceptionTarget": "只看寬80就粗估或把長寬相加。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-theorem，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "答案以公分且取到小數第一位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "結合比例情境、大數平方與近似。；具體任務是「估算海報對角線。」。",
    "literacyContextNecessity": "海報對角線是實際裝框尺寸需求。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理應用",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "609e01100028736413df42adbd819c76b8560850fded49b04984a0d09f5f3416"
  },
  {
    "questionId": "u11-s011-v001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "coordinate-distance-pythagorean",
    "lockedSkillOrder": 11,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "figure",
    "figureId": "fig-u11-s011-coordinate",
    "drawingSpecReference": "units/u11/s011/drawing-specs.jsonl#fig-u11-s011-coordinate",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "坐標平面上 A(0,0)、B(3,4)，AB 長為何？",
    "givenConditions": [
      "兩點坐標已知。"
    ],
    "target": "求兩點距離。",
    "choices": [
      "7",
      "1",
      "5",
      "25"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：以兩點與投影形成3-4-5直角三角形。 詳算檢查：水平差3、垂直差4，距離=√(3²+4²)=5。 因此結果為「5」。",
    "explanation": "水平差3、垂直差4，距離=√(3²+4²)=5。",
    "steps": [
      "整理條件：兩點坐標已知。",
      "獨立推導：不參照選項，從題幹條件重新計算：以兩點與投影形成3-4-5直角三角形。 詳算檢查：水平差3、垂直差4，距離=√(3²+4²)=5。 因此結果為「5」。",
      "核對目標：答案「5」確實回應「求兩點距離。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "7",
        "truth": false,
        "reason": "把水平差與垂直差相加。"
      },
      {
        "choice": "1",
        "truth": false,
        "reason": "把兩差相減。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "此選項符合目標「求兩點距離。」；水平差3、垂直差4，距離=√(3²+4²)=5。"
      },
      {
        "choice": "25",
        "truth": false,
        "reason": "漏開平方。"
      }
    ],
    "misconceptionTarget": "直接使用座標和或差。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-application，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "坐標未標單位，答案為座標單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "原點出發的基本距離。；具體任務是「求兩點距離。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "坐標平面距離",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "3cd97a678f54b1b608722de358450884ff3d5f59d2c6ab234b4762ad84432c8d"
  },
  {
    "questionId": "u11-s011-v002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "coordinate-distance-pythagorean",
    "lockedSkillOrder": 11,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩點 A(2,1) 與 B(2,8) 都在直線 x=2 上，線段 AB 的長度是多少？",
    "givenConditions": [
      "兩點同 x 坐標，只需處理垂直坐標差。"
    ],
    "target": "求同垂直線上兩點的距離。",
    "choices": [
      "10",
      "7",
      "6",
      "√53"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：水平差0，垂直差7，√(0²+7²)=7。 詳算檢查：兩點x相同，是垂直線段，距離=|8-1|=7。 因此結果為「7」。",
    "explanation": "兩點x相同，是垂直線段，距離=|8-1|=7。",
    "steps": [
      "整理條件：兩點同 x 坐標，只需處理垂直坐標差。",
      "獨立推導：不參照選項，從題幹條件重新計算：水平差0，垂直差7，√(0²+7²)=7。 詳算檢查：兩點x相同，是垂直線段，距離=|8-1|=7。 因此結果為「7」。",
      "核對目標：答案「7」確實回應「求同垂直線上兩點的距離。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "10",
        "truth": false,
        "reason": "把y坐標相加。"
      },
      {
        "choice": "7",
        "truth": true,
        "reason": "此選項符合目標「求同垂直線上兩點的距離。」；兩點x相同，是垂直線段，距離=|8-1|=7。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "差值算錯。"
      },
      {
        "choice": "√53",
        "truth": false,
        "reason": "不必要地平方完整坐標。"
      }
    ],
    "misconceptionTarget": "公式套用時把坐標本身平方。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-application，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "特殊情況可直接作差。；具體任務是「求同垂直線上兩點的距離。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "坐標平面距離",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "3da915dfe1b0f39dfabdb6798d9df42de9241c62b03d0557110afe9f153a9ab2"
  },
  {
    "questionId": "u11-s011-v003",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "coordinate-distance-pythagorean",
    "lockedSkillOrder": 11,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "在水平線 y=5 上，A 的 x 坐標為 -3，B 的 x 坐標為 4。A、B 相距多少？",
    "givenConditions": [
      "兩點同 y 坐標，且水平坐標跨過0。"
    ],
    "target": "求跨越原點的水平距離。",
    "choices": [
      "1",
      "9",
      "√41",
      "7"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：水平差7、垂直差0。 詳算檢查：y相同，水平距離=|4-(-3)|=7。 因此結果為「7」。",
    "explanation": "y相同，水平距離=|4-(-3)|=7。",
    "steps": [
      "整理條件：兩點同 y 坐標，且水平坐標跨過0。",
      "獨立推導：不參照選項，從題幹條件重新計算：水平差7、垂直差0。 詳算檢查：y相同，水平距離=|4-(-3)|=7。 因此結果為「7」。",
      "核對目標：答案「7」確實回應「求跨越原點的水平距離。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "忽略負號錯算4-3。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "把x坐標絕對值相加再加錯。"
      },
      {
        "choice": "√41",
        "truth": false,
        "reason": "把y坐標也算入。"
      },
      {
        "choice": "7",
        "truth": true,
        "reason": "此選項符合目標「求跨越原點的水平距離。」；y相同，水平距離=|4-(-3)|=7。"
      }
    ],
    "misconceptionTarget": "負坐標相減時符號錯誤。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-application，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "考查負數座標差。；具體任務是「求跨越原點的水平距離。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "坐標平面距離",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "ee7678e8e52363a256ca4607f3165541d7d397d736163043bebe188795a1009a"
  },
  {
    "questionId": "u11-s011-v004",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "coordinate-distance-pythagorean",
    "lockedSkillOrder": 11,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "A(-2,1)、B(4,9) 的距離為何？",
    "givenConditions": [
      "兩點任意位置。"
    ],
    "target": "求距離。",
    "choices": [
      "10",
      "14",
      "√20",
      "100"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：正確計算4-(-2)=6與9-1=8。 詳算檢查：Δx=6、Δy=8，距離=√(36+64)=10。 因此結果為「10」。",
    "explanation": "Δx=6、Δy=8，距離=√(36+64)=10。",
    "steps": [
      "整理條件：兩點任意位置。",
      "獨立推導：不參照選項，從題幹條件重新計算：正確計算4-(-2)=6與9-1=8。 詳算檢查：Δx=6、Δy=8，距離=√(36+64)=10。 因此結果為「10」。",
      "核對目標：答案「10」確實回應「求距離。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "10",
        "truth": true,
        "reason": "此選項符合目標「求距離。」；Δx=6、Δy=8，距離=√(36+64)=10。"
      },
      {
        "choice": "14",
        "truth": false,
        "reason": "直接相加座標差6+8。"
      },
      {
        "choice": "√20",
        "truth": false,
        "reason": "只把差相加後開根。"
      },
      {
        "choice": "100",
        "truth": false,
        "reason": "漏開平方。"
      }
    ],
    "misconceptionTarget": "負號造成水平差錯誤。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-application，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "含負坐標與6-8-10數組。；具體任務是「求距離。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "坐標平面距離",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "91b1a62afc92c10149c8010293320b783c324d5066da444085d525d656eed809"
  },
  {
    "questionId": "u11-s011-v005",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "coordinate-distance-pythagorean",
    "lockedSkillOrder": 11,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "由 A(1,-3) 直線移到 B(5,0)，水平位移為4、垂直位移為3。這段直線長多少？",
    "givenConditions": [
      "水平與垂直位移已整理為4與3。"
    ],
    "target": "由兩個位移分量求直線距離。",
    "choices": [
      "5",
      "7",
      "√13",
      "25"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：垂直差0-(-3)=3。 詳算檢查：Δx=4、Δy=3，距離=5。 因此結果為「5」。",
    "explanation": "Δx=4、Δy=3，距離=5。",
    "steps": [
      "整理條件：水平與垂直位移已整理為4與3。",
      "獨立推導：不參照選項，從題幹條件重新計算：垂直差0-(-3)=3。 詳算檢查：Δx=4、Δy=3，距離=5。 因此結果為「5」。",
      "核對目標：答案「5」確實回應「由兩個位移分量求直線距離。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": true,
        "reason": "此選項符合目標「由兩個位移分量求直線距離。」；Δx=4、Δy=3，距離=5。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "兩差直接相加。"
      },
      {
        "choice": "√13",
        "truth": false,
        "reason": "水平差錯算2。"
      },
      {
        "choice": "25",
        "truth": false,
        "reason": "漏開根。"
      }
    ],
    "misconceptionTarget": "減負數時出錯。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-application，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需正確處理負y。；具體任務是「由兩個位移分量求直線距離。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "坐標平面距離",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "12b2b2e9a56670ac476597178feed0ed8c02cf95552aa476207b1d0d93d45a17"
  },
  {
    "questionId": "u11-s011-v006",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "coordinate-distance-pythagorean",
    "lockedSkillOrder": 11,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "P(-1,-1)、Q(2,3) 的距離為何？",
    "givenConditions": [
      "兩點跨象限。"
    ],
    "target": "求直線距離。",
    "choices": [
      "3",
      "4",
      "5",
      "7"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：使用3-4-5直角三角形。 詳算檢查：Δx=3、Δy=4，距離5。 因此結果為「5」。",
    "explanation": "Δx=3、Δy=4，距離5。",
    "steps": [
      "整理條件：兩點跨象限。",
      "獨立推導：不參照選項，從題幹條件重新計算：使用3-4-5直角三角形。 詳算檢查：Δx=3、Δy=4，距離5。 因此結果為「5」。",
      "核對目標：答案「5」確實回應「求直線距離。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": false,
        "reason": "只取水平差。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "只取垂直差。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "此選項符合目標「求直線距離。」；Δx=3、Δy=4，距離5。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "兩差相加。"
      }
    ],
    "misconceptionTarget": "把曼哈頓距離當直線距離。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-application，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "標準跨象限計算。；具體任務是「求直線距離。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "坐標平面距離",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "830e633cf554ce6c2c2ea23bb78a5d638ae4a7573b3bba44c207d1006454dde8"
  },
  {
    "questionId": "u11-s011-v007",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "coordinate-distance-pythagorean",
    "lockedSkillOrder": 11,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "點 P(0,0) 到 Q(5,k) 的距離為 13，則 k 可能為何？",
    "givenConditions": [
      "k為實數坐標。"
    ],
    "target": "由距離反求坐標。",
    "choices": [
      "只有12",
      "只有-12",
      "±13",
      "12 或 -12"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：距離方程保留k的正負兩解。 詳算檢查：25+k²=169，k²=144，所以k=±12。 因此結果為「12 或 -12」。",
    "explanation": "25+k²=169，k²=144，所以k=±12。",
    "steps": [
      "整理條件：k為實數坐標。",
      "獨立推導：不參照選項，從題幹條件重新計算：距離方程保留k的正負兩解。 詳算檢查：25+k²=169，k²=144，所以k=±12。 因此結果為「12 或 -12」。",
      "核對目標：答案「12 或 -12」確實回應「由距離反求坐標。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "只有12",
        "truth": false,
        "reason": "漏掉垂直差可正可負。"
      },
      {
        "choice": "只有-12",
        "truth": false,
        "reason": "漏掉正值。"
      },
      {
        "choice": "±13",
        "truth": false,
        "reason": "未扣除水平差平方。"
      },
      {
        "choice": "12 或 -12",
        "truth": true,
        "reason": "此選項符合目標「由距離反求坐標。」；25+k²=169，k²=144，所以k=±12。"
      }
    ],
    "misconceptionTarget": "坐標變數不是長度，不能只取正根。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-application，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需區分坐標可負與距離取正。；具體任務是「由距離反求坐標。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "坐標平面距離",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "5f831bb9a01d017868f5d14f06477e7d52ea17d845ff382a3e6394f272f345c3"
  },
  {
    "questionId": "u11-s011-v008",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "coordinate-distance-pythagorean",
    "lockedSkillOrder": 11,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "A(1,2)、B(x,2) 的距離為 6，則 x 可能為何？",
    "givenConditions": [
      "兩點y相同。"
    ],
    "target": "反求水平坐標。",
    "choices": [
      "只有7",
      "7 或 -5",
      "6或-6",
      "8或-4"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：同水平線，距離條件化為絕對值方程。 詳算檢查：|x-1|=6，所以x=1±6，即7或-5。 因此結果為「7 或 -5」。",
    "explanation": "|x-1|=6，所以x=1±6，即7或-5。",
    "steps": [
      "整理條件：兩點y相同。",
      "獨立推導：不參照選項，從題幹條件重新計算：同水平線，距離條件化為絕對值方程。 詳算檢查：|x-1|=6，所以x=1±6，即7或-5。 因此結果為「7 或 -5」。",
      "核對目標：答案「7 或 -5」確實回應「反求水平坐標。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "只有7",
        "truth": false,
        "reason": "漏掉A左側的解。"
      },
      {
        "choice": "7 或 -5",
        "truth": true,
        "reason": "此選項符合目標「反求水平坐標。」；|x-1|=6，所以x=1±6，即7或-5。"
      },
      {
        "choice": "6或-6",
        "truth": false,
        "reason": "忘記以1為中心。"
      },
      {
        "choice": "8或-4",
        "truth": false,
        "reason": "距離算成7。"
      }
    ],
    "misconceptionTarget": "把距離直接當x坐標。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-application，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需處理兩個方向的解。；具體任務是「反求水平坐標。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "坐標平面距離",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "f7994f2af55b6f29dcc917475e17bac10f7c1f949fdc4c84905c2ad89451ffca"
  },
  {
    "questionId": "u11-s011-v009",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "coordinate-distance-pythagorean",
    "lockedSkillOrder": 11,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "點 R(a,0) 到 S(0,8) 的距離為 10，且 a>0。a 為何？",
    "givenConditions": [
      "a>0。"
    ],
    "target": "求軸上坐標。",
    "choices": [
      "-6",
      "6",
      "2",
      "18"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：坐標差形成兩股a與8。 詳算檢查：a²+8²=10²，a²=36；由a>0得a=6。 因此結果為「6」。",
    "explanation": "a²+8²=10²，a²=36；由a>0得a=6。",
    "steps": [
      "整理條件：a>0。",
      "獨立推導：不參照選項，從題幹條件重新計算：坐標差形成兩股a與8。 詳算檢查：a²+8²=10²，a²=36；由a>0得a=6。 因此結果為「6」。",
      "核對目標：答案「6」確實回應「求軸上坐標。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "-6",
        "truth": false,
        "reason": "已知a>0。"
      },
      {
        "choice": "6",
        "truth": true,
        "reason": "此選項符合目標「求軸上坐標。」；a²+8²=10²，a²=36；由a>0得a=6。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "直接相減10-8。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "直接相加。"
      }
    ],
    "misconceptionTarget": "忽略a的正值條件或直接做長度差。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-application，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "距離方程加條件篩選。；具體任務是「求軸上坐標。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "坐標平面距離",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "95c6c4b697b3f7e5e408c60ce2ed1053b7e5251d97dec2422122d5be40f963c3"
  },
  {
    "questionId": "u11-s011-v010",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "coordinate-distance-pythagorean",
    "lockedSkillOrder": 11,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "校園平面圖以 1 格代表 10 公尺。圖上醫務室在 (1,2)，操場入口在 (4,6)。實際直線距離是多少？",
    "givenConditions": [
      "每格10公尺。"
    ],
    "target": "求實際直線距離。",
    "choices": [
      "5公尺",
      "70公尺",
      "500公尺",
      "50 公尺"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：先用座標距離求格數，再套比例尺。 詳算檢查：圖上差為3格與4格，直線距離5格；每格10公尺，所以50公尺。 因此結果為「50 公尺」。",
    "explanation": "圖上差為3格與4格，直線距離5格；每格10公尺，所以50公尺。",
    "steps": [
      "整理條件：每格10公尺。",
      "獨立推導：不參照選項，從題幹條件重新計算：先用座標距離求格數，再套比例尺。 詳算檢查：圖上差為3格與4格，直線距離5格；每格10公尺，所以50公尺。 因此結果為「50 公尺」。",
      "核對目標：答案「50 公尺」確實回應「求實際直線距離。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "5公尺",
        "truth": false,
        "reason": "只算圖上格數未換比例。"
      },
      {
        "choice": "70公尺",
        "truth": false,
        "reason": "把水平垂直距離相加再換算。"
      },
      {
        "choice": "500公尺",
        "truth": false,
        "reason": "比例多乘10。"
      },
      {
        "choice": "50 公尺",
        "truth": true,
        "reason": "此選項符合目標「求實際直線距離。」；圖上差為3格與4格，直線距離5格；每格10公尺，所以50公尺。"
      }
    ],
    "misconceptionTarget": "忘記比例尺或使用折線距離。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-application，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "5格×10公尺/格=50公尺。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "兩階段座標與比例換算。；具體任務是「求實際直線距離。」。",
    "literacyContextNecessity": "比例尺是把圖上距離轉成實際距離的必要資訊。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "坐標平面距離",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "868cd9f0f39d2f2f0d4e7468344bb9e06150ea96c34ddc8160a3e3f20eb0f625"
  },
  {
    "questionId": "u11-s011-v011",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "coordinate-distance-pythagorean",
    "lockedSkillOrder": 11,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "機器人由座標 (−2,−1) 直線移到 (4,7)，每座標單位為 0.5 公尺。移動距離多少？",
    "givenConditions": [
      "每單位0.5公尺。"
    ],
    "target": "求機器人實際直線路程。",
    "choices": [
      "5 公尺",
      "10公尺",
      "7公尺",
      "50公尺"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：先求6-8-10，再乘單位長度。 詳算檢查：座標差6與8，圖上距離10單位，實際=10×0.5=5公尺。 因此結果為「5 公尺」。",
    "explanation": "座標差6與8，圖上距離10單位，實際=10×0.5=5公尺。",
    "steps": [
      "整理條件：每單位0.5公尺。",
      "獨立推導：不參照選項，從題幹條件重新計算：先求6-8-10，再乘單位長度。 詳算檢查：座標差6與8，圖上距離10單位，實際=10×0.5=5公尺。 因此結果為「5 公尺」。",
      "核對目標：答案「5 公尺」確實回應「求機器人實際直線路程。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "5 公尺",
        "truth": true,
        "reason": "此選項符合目標「求機器人實際直線路程。」；座標差6與8，圖上距離10單位，實際=10×0.5=5公尺。"
      },
      {
        "choice": "10公尺",
        "truth": false,
        "reason": "忘記每單位只有0.5公尺。"
      },
      {
        "choice": "7公尺",
        "truth": false,
        "reason": "使用座標差相加後換算錯。"
      },
      {
        "choice": "50公尺",
        "truth": false,
        "reason": "比例換算多十倍。"
      }
    ],
    "misconceptionTarget": "把座標單位當1公尺。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-application，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "座標單位乘0.5公尺/單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "含負坐標與尺度換算。；具體任務是「求機器人實際直線路程。」。",
    "literacyContextNecessity": "機器人的實際距離由座標尺度決定。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "坐標平面距離",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "832155269fef9b24f8cdcaa2beb931cd18bb30cf137f9a771b7ad86df3b14470"
  },
  {
    "questionId": "u11-s011-v012",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "coordinate-distance-pythagorean",
    "lockedSkillOrder": 11,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "地圖上兩站座標為 A(0,0)、B(7,1)，每單位 1 公里。規劃系統顯示直線距離到小數第一位，應顯示多少？",
    "givenConditions": [
      "每單位1公里，取一位小數。"
    ],
    "target": "求導航顯示值。",
    "choices": [
      "7.0公里",
      "8.0公里",
      "7.1 公里",
      "50.0公里"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：先求精確根式，再按顯示規格四捨五入。 詳算檢查：距離=√(7²+1²)=√50≈7.071，顯示7.1公里。 因此結果為「7.1 公里」。",
    "explanation": "距離=√(7²+1²)=√50≈7.071，顯示7.1公里。",
    "steps": [
      "整理條件：每單位1公里，取一位小數。",
      "獨立推導：不參照選項，從題幹條件重新計算：先求精確根式，再按顯示規格四捨五入。 詳算檢查：距離=√(7²+1²)=√50≈7.071，顯示7.1公里。 因此結果為「7.1 公里」。",
      "核對目標：答案「7.1 公里」確實回應「求導航顯示值。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "7.0公里",
        "truth": false,
        "reason": "√50約7.071，四捨五入應7.1。"
      },
      {
        "choice": "8.0公里",
        "truth": false,
        "reason": "把差7與1相加。"
      },
      {
        "choice": "7.1 公里",
        "truth": true,
        "reason": "此選項符合目標「求導航顯示值。」；距離=√(7²+1²)=√50≈7.071，顯示7.1公里。"
      },
      {
        "choice": "50.0公里",
        "truth": false,
        "reason": "漏開平方。"
      }
    ],
    "misconceptionTarget": "取整或把平方和直接當距離。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-application，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "座標單位等於1公里。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "整合座標距離與估算。；具體任務是「求導航顯示值。」。",
    "literacyContextNecessity": "顯示精度要求決定最後形式。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "坐標平面距離",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "3df94ee0d4335c511b54b8048d71c19e921a755e1693817812123fd8668d6f0f"
  },
  {
    "questionId": "u11-s012-v001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-find-leg",
    "lockedSkillOrder": 12,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "figure",
    "figureId": "fig-u11-s012-find-leg",
    "drawingSpecReference": "units/u11/s012/drawing-specs.jsonl#fig-u11-s012-find-leg",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "直角三角形斜邊 13，一股 5，另一股是多少？",
    "givenConditions": [
      "13為斜邊。"
    ],
    "target": "求未知股。",
    "choices": [
      "8",
      "18",
      "√194",
      "12"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：斜邊平方減已知股平方。 詳算檢查：另一股=√(13²-5²)=√144=12。 因此結果為「12」。",
    "explanation": "另一股=√(13²-5²)=√144=12。",
    "steps": [
      "整理條件：13為斜邊。",
      "獨立推導：不參照選項，從題幹條件重新計算：斜邊平方減已知股平方。 詳算檢查：另一股=√(13²-5²)=√144=12。 因此結果為「12」。",
      "核對目標：答案「12」確實回應「求未知股。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": false,
        "reason": "直接相減。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "直接相加。"
      },
      {
        "choice": "√194",
        "truth": false,
        "reason": "平方和方向錯。"
      },
      {
        "choice": "12",
        "truth": true,
        "reason": "此選項符合目標「求未知股。」；另一股=√(13²-5²)=√144=12。"
      }
    ],
    "misconceptionTarget": "把長度直接相減。",
    "prerequisiteCheck": "需能使用先備技能 coordinate-distance-pythagorean，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "基本5-12-13。；具體任務是「求未知股。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "已知斜邊求股",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "f4236101a19b349d1c039615a0e9506824f2ef10bb3bff1a91cc5f8cc73798a3"
  },
  {
    "questionId": "u11-s012-v002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-find-leg",
    "lockedSkillOrder": 12,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "直角三角形斜邊為 10、一股為 6。下列哪個算式正確表示另一股？",
    "givenConditions": [
      "10是斜邊且大於6。"
    ],
    "target": "選出完整求股算式。",
    "choices": [
      "√(10²-6²)=8",
      "10-6=4",
      "√(10²+6²)=√136",
      "10²-6²=64"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：先寫b²=100-36=64，再由b>0得b=8。 詳算檢查：斜邊平方減已知股平方得到未知股平方，再取正平方根。 因此結果為「√(10²-6²)=8」。",
    "explanation": "斜邊平方減已知股平方得到未知股平方，再取正平方根。",
    "steps": [
      "整理條件：10是斜邊且大於6。",
      "獨立推導：不參照選項，從題幹條件重新計算：先寫b²=100-36=64，再由b>0得b=8。 詳算檢查：斜邊平方減已知股平方得到未知股平方，再取正平方根。 因此結果為「√(10²-6²)=8」。",
      "核對目標：答案「√(10²-6²)=8」確實回應「選出完整求股算式。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "√(10²-6²)=8",
        "truth": true,
        "reason": "此選項符合目標「選出完整求股算式。」；斜邊平方減已知股平方得到未知股平方，再取正平方根。"
      },
      {
        "choice": "10-6=4",
        "truth": false,
        "reason": "長度不能直接相減。"
      },
      {
        "choice": "√(10²+6²)=√136",
        "truth": false,
        "reason": "求股應使用平方差。"
      },
      {
        "choice": "10²-6²=64",
        "truth": false,
        "reason": "這只得到股長平方，尚未開根。"
      }
    ],
    "misconceptionTarget": "把求股誤作長度差或忘記開平方。",
    "prerequisiteCheck": "需能使用先備技能 coordinate-distance-pythagorean，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "考查公式選擇與最後開根。；具體任務是「選出完整求股算式。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "已知斜邊求股",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "93f26f55517d6332304f115a7446f9600367f4059a630dfe81c954d587bc94cb"
  },
  {
    "questionId": "u11-s012-v003",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-find-leg",
    "lockedSkillOrder": 12,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "小安說：「斜邊 5、一股 4，所以另一股是 5-4=1。」應如何修正？",
    "givenConditions": [
      "5是斜邊。"
    ],
    "target": "診斷並修正錯誤推理。",
    "choices": [
      "應算5+4=9",
      "應算√(5²+4²)=√41",
      "應算 √(5²-4²)=3",
      "答案1正確，只缺單位"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：以驗算1²+4²=17≠25即可否定原說法，再正確計算。 詳算檢查：畢氏定理連結的是平方，未知股=√(25-16)=3。 因此結果為「應算 √(5²-4²)=3」。",
    "explanation": "畢氏定理連結的是平方，未知股=√(25-16)=3。",
    "steps": [
      "整理條件：5是斜邊。",
      "獨立推導：不參照選項，從題幹條件重新計算：以驗算1²+4²=17≠25即可否定原說法，再正確計算。 詳算檢查：畢氏定理連結的是平方，未知股=√(25-16)=3。 因此結果為「應算 √(5²-4²)=3」。",
      "核對目標：答案「應算 √(5²-4²)=3」確實回應「診斷並修正錯誤推理。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "應算5+4=9",
        "truth": false,
        "reason": "仍是直接加減邊長。"
      },
      {
        "choice": "應算√(5²+4²)=√41",
        "truth": false,
        "reason": "求股不使用平方和。"
      },
      {
        "choice": "應算 √(5²-4²)=3",
        "truth": true,
        "reason": "此選項符合目標「診斷並修正錯誤推理。」；畢氏定理連結的是平方，未知股=√(25-16)=3。"
      },
      {
        "choice": "答案1正確，只缺單位",
        "truth": false,
        "reason": "1²+4²不等於5²。"
      }
    ],
    "misconceptionTarget": "把斜邊與股直接相減。",
    "prerequisiteCheck": "需能使用先備技能 coordinate-distance-pythagorean，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "從直接數值題改為錯誤分析。；具體任務是「診斷並修正錯誤推理。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "已知斜邊求股",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "1529c835707847bd2a00fd342d91025dbed4cde5304ef7e66c565fdb2edc15a1"
  },
  {
    "questionId": "u11-s012-v004",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-find-leg",
    "lockedSkillOrder": 12,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "直角三角形斜邊 17、一股 8，另一股為何？",
    "givenConditions": [
      "17為斜邊。"
    ],
    "target": "求未知股。",
    "choices": [
      "9",
      "15",
      "25",
      "√353"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：289-64=225。 詳算檢查：√(17²-8²)=√225=15。 因此結果為「15」。",
    "explanation": "√(17²-8²)=√225=15。",
    "steps": [
      "整理條件：17為斜邊。",
      "獨立推導：不參照選項，從題幹條件重新計算：289-64=225。 詳算檢查：√(17²-8²)=√225=15。 因此結果為「15」。",
      "核對目標：答案「15」確實回應「求未知股。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "9",
        "truth": false,
        "reason": "直接相減。"
      },
      {
        "choice": "15",
        "truth": true,
        "reason": "此選項符合目標「求未知股。」；√(17²-8²)=√225=15。"
      },
      {
        "choice": "25",
        "truth": false,
        "reason": "直接相加。"
      },
      {
        "choice": "√353",
        "truth": false,
        "reason": "平方相加。"
      }
    ],
    "misconceptionTarget": "大數平方差出錯。",
    "prerequisiteCheck": "需能使用先備技能 coordinate-distance-pythagorean，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "標準8-15-17。；具體任務是「求未知股。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "已知斜邊求股",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "7141ac983b1e39e345f5cf23a22bb8722b9ef3d19221bc46ca7e650b6d2ecfbd"
  },
  {
    "questionId": "u11-s012-v005",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-find-leg",
    "lockedSkillOrder": 12,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "斜邊 25、一股 24，另一股為何？",
    "givenConditions": [
      "25為斜邊。"
    ],
    "target": "求未知股。",
    "choices": [
      "1",
      "49",
      "√1201",
      "7"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：使用相鄰大平方差。 詳算檢查：√(625-576)=√49=7。 因此結果為「7」。",
    "explanation": "√(625-576)=√49=7。",
    "steps": [
      "整理條件：25為斜邊。",
      "獨立推導：不參照選項，從題幹條件重新計算：使用相鄰大平方差。 詳算檢查：√(625-576)=√49=7。 因此結果為「7」。",
      "核對目標：答案「7」確實回應「求未知股。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "直接相減。"
      },
      {
        "choice": "49",
        "truth": false,
        "reason": "漏開平方。"
      },
      {
        "choice": "√1201",
        "truth": false,
        "reason": "平方相加。"
      },
      {
        "choice": "7",
        "truth": true,
        "reason": "此選項符合目標「求未知股。」；√(625-576)=√49=7。"
      }
    ],
    "misconceptionTarget": "直接相減25-24。",
    "prerequisiteCheck": "需能使用先備技能 coordinate-distance-pythagorean，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "平方差很小，易受直覺干擾。；具體任務是「求未知股。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "已知斜邊求股",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "ee3e4da51346ce632ef1f69f3f507e23871c338d4f717f613ced8a7079270d37"
  },
  {
    "questionId": "u11-s012-v006",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-find-leg",
    "lockedSkillOrder": 12,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "直角三角形斜邊 √41、一股 4，另一股為何？",
    "givenConditions": [
      "斜邊為正根式。"
    ],
    "target": "求未知股。",
    "choices": [
      "√37",
      "5",
      "√45",
      "1"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：斜邊平方直接為41。 詳算檢查：另一股平方=41-16=25，故長5。 因此結果為「5」。",
    "explanation": "另一股平方=41-16=25，故長5。",
    "steps": [
      "整理條件：斜邊為正根式。",
      "獨立推導：不參照選項，從題幹條件重新計算：斜邊平方直接為41。 詳算檢查：另一股平方=41-16=25，故長5。 因此結果為「5」。",
      "核對目標：答案「5」確實回應「求未知股。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "√37",
        "truth": false,
        "reason": "忘記4要平方。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "此選項符合目標「求未知股。」；另一股平方=41-16=25，故長5。"
      },
      {
        "choice": "√45",
        "truth": false,
        "reason": "錯用加法。"
      },
      {
        "choice": "1",
        "truth": false,
        "reason": "把根式近似後相減。"
      }
    ],
    "misconceptionTarget": "把√41當成41代入邊長位置後再平方。",
    "prerequisiteCheck": "需能使用先備技能 coordinate-distance-pythagorean，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "含根式斜邊但平方可簡化。；具體任務是「求未知股。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "已知斜邊求股",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "b9cb17d54c50acec0850b6e1c76c79fb5937b703346dffe2d1c3e69e75991cbb"
  },
  {
    "questionId": "u11-s012-v007",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-find-leg",
    "lockedSkillOrder": 12,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一直角三角形斜邊為 2√13，一股為 6，另一股為何？",
    "givenConditions": [
      "斜邊大於已知股。"
    ],
    "target": "含係數根式求股。",
    "choices": [
      "4",
      "2√4",
      "√10",
      "8"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：(2√13)²=52。 詳算檢查：斜邊平方52，減36得16，另一股4。 因此結果為「4」。",
    "explanation": "斜邊平方52，減36得16，另一股4。",
    "steps": [
      "整理條件：斜邊大於已知股。",
      "獨立推導：不參照選項，從題幹條件重新計算：(2√13)²=52。 詳算檢查：斜邊平方52，減36得16，另一股4。 因此結果為「4」。",
      "核對目標：答案「4」確實回應「含係數根式求股。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": true,
        "reason": "此選項符合目標「含係數根式求股。」；斜邊平方52，減36得16，另一股4。"
      },
      {
        "choice": "2√4",
        "truth": false,
        "reason": "雖等於4但未符合選項的最簡數值表達。"
      },
      {
        "choice": "√10",
        "truth": false,
        "reason": "平方計算錯。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "把平方差開根錯。"
      }
    ],
    "misconceptionTarget": "係數平方漏掉。",
    "prerequisiteCheck": "需能使用先備技能 coordinate-distance-pythagorean，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需正確平方根式斜邊。；具體任務是「含係數根式求股。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "已知斜邊求股",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "dc25cacfec1bb00b020981122db28ece52ca2731cb23cb08862107f2fd768a69"
  },
  {
    "questionId": "u11-s012-v008",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-find-leg",
    "lockedSkillOrder": 12,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "直角三角形斜邊 29，一股 20，另一股為何？",
    "givenConditions": [
      "29為斜邊。"
    ],
    "target": "高效率求未知股。",
    "choices": [
      "9",
      "√441",
      "21",
      "49"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：用平方差公式可避免大數平方。 詳算檢查：29²-20²=(29-20)(29+20)=9×49=441，開根得21。 因此結果為「21」。",
    "explanation": "29²-20²=(29-20)(29+20)=9×49=441，開根得21。",
    "steps": [
      "整理條件：29為斜邊。",
      "獨立推導：不參照選項，從題幹條件重新計算：用平方差公式可避免大數平方。 詳算檢查：29²-20²=(29-20)(29+20)=9×49=441，開根得21。 因此結果為「21」。",
      "核對目標：答案「21」確實回應「高效率求未知股。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "9",
        "truth": false,
        "reason": "直接相減。"
      },
      {
        "choice": "√441",
        "truth": false,
        "reason": "等值但題目問邊長可化為整數。"
      },
      {
        "choice": "21",
        "truth": true,
        "reason": "此選項符合目標「高效率求未知股。」；29²-20²=(29-20)(29+20)=9×49=441，開根得21。"
      },
      {
        "choice": "49",
        "truth": false,
        "reason": "把20與29相加。"
      }
    ],
    "misconceptionTarget": "計算正確但未完成開平方。",
    "prerequisiteCheck": "需能使用先備技能 coordinate-distance-pythagorean，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "可用平方差結構，數值較大。；具體任務是「高效率求未知股。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "已知斜邊求股",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "1879a1f7bab1bff6b1e45653ed2ac6a5c7499135bd955461b9a5bcb93bf8e65a"
  },
  {
    "questionId": "u11-s012-v009",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-find-leg",
    "lockedSkillOrder": 12,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某直角三角形斜邊 26，一股長是另一股的 5/12。較短股是多少？",
    "givenConditions": [
      "兩股比5:12，斜邊26。"
    ],
    "target": "求較短股。",
    "choices": [
      "10",
      "12",
      "24",
      "5"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：利用5-12-13比例，縮放2倍。 詳算檢查：兩股比5:12，斜邊對應13份；26=13×2，所以短股=5×2=10。 因此結果為「10」。",
    "explanation": "兩股比5:12，斜邊對應13份；26=13×2，所以短股=5×2=10。",
    "steps": [
      "整理條件：兩股比5:12，斜邊26。",
      "獨立推導：不參照選項，從題幹條件重新計算：利用5-12-13比例，縮放2倍。 詳算檢查：兩股比5:12，斜邊對應13份；26=13×2，所以短股=5×2=10。 因此結果為「10」。",
      "核對目標：答案「10」確實回應「求較短股。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "10",
        "truth": true,
        "reason": "此選項符合目標「求較短股。」；兩股比5:12，斜邊對應13份；26=13×2，所以短股=5×2=10。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "把比例數直接當長度。"
      },
      {
        "choice": "24",
        "truth": false,
        "reason": "這是較長股。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "只使用比例分子。"
      }
    ],
    "misconceptionTarget": "不知道比例中的13來自畢氏定理。",
    "prerequisiteCheck": "需能使用先備技能 coordinate-distance-pythagorean，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需結合比例與畢氏數組。；具體任務是「求較短股。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "已知斜邊求股",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "9d374eac4a8f2ec19ba99152435bef5e34af9805a4793f02506a86a8f62255f9"
  },
  {
    "questionId": "u11-s012-v010",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-find-leg",
    "lockedSkillOrder": 12,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一根 20 公尺長的繩索斜拉，垂直高度為 16 公尺。水平距離是多少？",
    "givenConditions": [
      "垂直與水平互相垂直。"
    ],
    "target": "求水平距離。",
    "choices": [
      "4公尺",
      "36公尺",
      "12 公尺",
      "√656公尺"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：繩索為斜邊。 詳算檢查：水平距離=√(20²-16²)=√144=12公尺。 因此結果為「12 公尺」。",
    "explanation": "水平距離=√(20²-16²)=√144=12公尺。",
    "steps": [
      "整理條件：垂直與水平互相垂直。",
      "獨立推導：不參照選項，從題幹條件重新計算：繩索為斜邊。 詳算檢查：水平距離=√(20²-16²)=√144=12公尺。 因此結果為「12 公尺」。",
      "核對目標：答案「12 公尺」確實回應「求水平距離。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "4公尺",
        "truth": false,
        "reason": "直接相減。"
      },
      {
        "choice": "36公尺",
        "truth": false,
        "reason": "直接相加。"
      },
      {
        "choice": "12 公尺",
        "truth": true,
        "reason": "此選項符合目標「求水平距離。」；水平距離=√(20²-16²)=√144=12公尺。"
      },
      {
        "choice": "√656公尺",
        "truth": false,
        "reason": "錯用加法。"
      }
    ],
    "misconceptionTarget": "未辨認斜邊或直接相減。",
    "prerequisiteCheck": "需能使用先備技能 coordinate-distance-pythagorean，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "答案為公尺。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "生活情境反向求股。；具體任務是「求水平距離。」。",
    "literacyContextNecessity": "斜拉繩索長是斜邊，不能與高度直接相減。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "已知斜邊求股",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "94e155d68e59a2aeea0286fcfe029e25a520393c6bb3c1c0a1e65c59b8a2243e"
  },
  {
    "questionId": "u11-s012-v011",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-find-leg",
    "lockedSkillOrder": 12,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個長方形看板對角線 50 公分，高 30 公分。看板寬多少？",
    "givenConditions": [
      "矩形對角線為斜邊。"
    ],
    "target": "求看板寬。",
    "choices": [
      "20公分",
      "40 公分",
      "80公分",
      "√3400公分"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：形成30-40-50直角三角形。 詳算檢查：寬=√(50²-30²)=√1600=40公分。 因此結果為「40 公分」。",
    "explanation": "寬=√(50²-30²)=√1600=40公分。",
    "steps": [
      "整理條件：矩形對角線為斜邊。",
      "獨立推導：不參照選項，從題幹條件重新計算：形成30-40-50直角三角形。 詳算檢查：寬=√(50²-30²)=√1600=40公分。 因此結果為「40 公分」。",
      "核對目標：答案「40 公分」確實回應「求看板寬。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "20公分",
        "truth": false,
        "reason": "直接相減。"
      },
      {
        "choice": "40 公分",
        "truth": true,
        "reason": "此選項符合目標「求看板寬。」；寬=√(50²-30²)=√1600=40公分。"
      },
      {
        "choice": "80公分",
        "truth": false,
        "reason": "直接相加。"
      },
      {
        "choice": "√3400公分",
        "truth": false,
        "reason": "平方差計算錯。"
      }
    ],
    "misconceptionTarget": "把對角線與高直接相減。",
    "prerequisiteCheck": "需能使用先備技能 coordinate-distance-pythagorean，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "答案為公分。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需把物件尺寸轉為求股。；具體任務是「求看板寬。」。",
    "literacyContextNecessity": "矩形直角使對角線成斜邊。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "已知斜邊求股",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "d7c9b4f59761e802ee4e555611525c73631d8cc37c597aee37ba5b7680c66895"
  },
  {
    "questionId": "u11-s012-v012",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-find-leg",
    "lockedSkillOrder": 12,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "無人機與操作者直線距離 1.3 公里，無人機高度 0.5 公里。忽略地形，水平距離是多少？",
    "givenConditions": [
      "地面視為水平，高度垂直。"
    ],
    "target": "求水平投影距離。",
    "choices": [
      "0.8公里",
      "1.8公里",
      "√1.94公里",
      "1.2 公里"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：斜距1.3為斜邊，高度0.5為一股。 詳算檢查：水平距離=√(1.3²-0.5²)=√1.44=1.2公里。 因此結果為「1.2 公里」。",
    "explanation": "水平距離=√(1.3²-0.5²)=√1.44=1.2公里。",
    "steps": [
      "整理條件：地面視為水平，高度垂直。",
      "獨立推導：不參照選項，從題幹條件重新計算：斜距1.3為斜邊，高度0.5為一股。 詳算檢查：水平距離=√(1.3²-0.5²)=√1.44=1.2公里。 因此結果為「1.2 公里」。",
      "核對目標：答案「1.2 公里」確實回應「求水平投影距離。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "0.8公里",
        "truth": false,
        "reason": "直接相減。"
      },
      {
        "choice": "1.8公里",
        "truth": false,
        "reason": "直接相加。"
      },
      {
        "choice": "√1.94公里",
        "truth": false,
        "reason": "平方相加。"
      },
      {
        "choice": "1.2 公里",
        "truth": true,
        "reason": "此選項符合目標「求水平投影距離。」；水平距離=√(1.3²-0.5²)=√1.44=1.2公里。"
      }
    ],
    "misconceptionTarget": "小數平方與斜邊判斷錯誤。",
    "prerequisiteCheck": "需能使用先備技能 coordinate-distance-pythagorean，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "全以公里計算。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "含小數單位與情境建模。；具體任務是「求水平投影距離。」。",
    "literacyContextNecessity": "「直線距離」與「高度」共同建立直角三角形。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "已知斜邊求股",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "22fcfdc0a0e2c6507f75f7973fc4df392912d0dfb11d982b46c83eff95900a04"
  },
  {
    "questionId": "u11-s013-v001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-word",
    "lockedSkillOrder": 13,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一人先向東走 3 公里，再向北走 4 公里。起點到終點的直線距離是多少？",
    "givenConditions": [
      "東3公里、北4公里。"
    ],
    "target": "求起終點距離。",
    "choices": [
      "5 公里",
      "7公里",
      "1公里",
      "25公里"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：把兩段位移視為兩股。 詳算檢查：東與北互相垂直，直線距離=√(3²+4²)=5公里。 因此結果為「5 公里」。",
    "explanation": "東與北互相垂直，直線距離=√(3²+4²)=5公里。",
    "steps": [
      "整理條件：東3公里、北4公里。",
      "獨立推導：不參照選項，從題幹條件重新計算：把兩段位移視為兩股。 詳算檢查：東與北互相垂直，直線距離=√(3²+4²)=5公里。 因此結果為「5 公里」。",
      "核對目標：答案「5 公里」確實回應「求起終點距離。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "5 公里",
        "truth": true,
        "reason": "此選項符合目標「求起終點距離。」；東與北互相垂直，直線距離=√(3²+4²)=5公里。"
      },
      {
        "choice": "7公里",
        "truth": false,
        "reason": "把路程相加。"
      },
      {
        "choice": "1公里",
        "truth": false,
        "reason": "把兩段相減。"
      },
      {
        "choice": "25公里",
        "truth": false,
        "reason": "漏開平方。"
      }
    ],
    "misconceptionTarget": "把實際走過的路程7公里當直線距離。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-find-leg，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "答案為公里。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "基本全文字方向題。；具體任務是「求起終點距離。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理文字應用",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "0ee1c97a1a10e50214f13f936abd3472db2b22fa30c477594b64d79939152c9e"
  },
  {
    "questionId": "u11-s013-v002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-word",
    "lockedSkillOrder": 13,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一棵樹在離地 6 公尺處折斷，樹梢落在離樹根 8 公尺處。折斷部分長多少？",
    "givenConditions": [
      "折點高6，樹梢距根8。"
    ],
    "target": "求折斷段。",
    "choices": [
      "14公尺",
      "10 公尺",
      "2公尺",
      "√14公尺"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：地面與樹幹垂直。 詳算檢查：折斷部分是斜邊，長=√(6²+8²)=10公尺。 因此結果為「10 公尺」。",
    "explanation": "折斷部分是斜邊，長=√(6²+8²)=10公尺。",
    "steps": [
      "整理條件：折點高6，樹梢距根8。",
      "獨立推導：不參照選項，從題幹條件重新計算：地面與樹幹垂直。 詳算檢查：折斷部分是斜邊，長=√(6²+8²)=10公尺。 因此結果為「10 公尺」。",
      "核對目標：答案「10 公尺」確實回應「求折斷段。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "14公尺",
        "truth": false,
        "reason": "把高與水平距離相加。"
      },
      {
        "choice": "10 公尺",
        "truth": true,
        "reason": "此選項符合目標「求折斷段。」；折斷部分是斜邊，長=√(6²+8²)=10公尺。"
      },
      {
        "choice": "2公尺",
        "truth": false,
        "reason": "直接相減。"
      },
      {
        "choice": "√14公尺",
        "truth": false,
        "reason": "未平方。"
      }
    ],
    "misconceptionTarget": "把折斷高度誤當整棵樹長。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-find-leg，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需從文字辨認斜邊。；具體任務是「求折斷段。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理文字應用",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "f9c2f737631cb20e28ab36728d23d6aa860a09e69912818771267429a8f10f4e"
  },
  {
    "questionId": "u11-s013-v003",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-word",
    "lockedSkillOrder": 13,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "船向南行 5 公里後再向西行 12 公里。此時船相對出發點的方位與直線距離為何？",
    "givenConditions": [
      "兩段方向為南與西。"
    ],
    "target": "同時求位移方向與大小。",
    "choices": [
      "西北方，13公里",
      "西南方，17公里",
      "東南方，7公里",
      "西南方，13 公里"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：方向由兩段位移符號判斷，大小由5-12-13直角三角形求得。 詳算檢查：南與西合成西南方；互相垂直的位移長度為√(5²+12²)=13公里。 因此結果為「西南方，13 公里」。",
    "explanation": "南與西合成西南方；互相垂直的位移長度為√(5²+12²)=13公里。",
    "steps": [
      "整理條件：兩段方向為南與西。",
      "獨立推導：不參照選項，從題幹條件重新計算：方向由兩段位移符號判斷，大小由5-12-13直角三角形求得。 詳算檢查：南與西合成西南方；互相垂直的位移長度為√(5²+12²)=13公里。 因此結果為「西南方，13 公里」。",
      "核對目標：答案「西南方，13 公里」確實回應「同時求位移方向與大小。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "西北方，13公里",
        "truth": false,
        "reason": "南北方向判錯。"
      },
      {
        "choice": "西南方，17公里",
        "truth": false,
        "reason": "把總航程當直線距離。"
      },
      {
        "choice": "東南方，7公里",
        "truth": false,
        "reason": "東西方向與距離都錯。"
      },
      {
        "choice": "西南方，13 公里",
        "truth": true,
        "reason": "此選項符合目標「同時求位移方向與大小。」；南與西合成西南方；互相垂直的位移長度為√(5²+12²)=13公里。"
      }
    ],
    "misconceptionTarget": "只算距離而忽略方位，或把航程當位移。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-find-leg，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "答案方位為西南，距離單位公里。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "增加向量方位解讀，與單純東北距離題區隔。；具體任務是「同時求位移方向與大小。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理文字應用",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "fa70ffb62e4376c13e28b7b20c546de5117f9f0ee7728363530ee2a13837a611"
  },
  {
    "questionId": "u11-s013-v004",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-word",
    "lockedSkillOrder": 13,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一根電線從 12 公尺高的桿頂接到距桿腳 5 公尺的地面固定點。電線至少多長？",
    "givenConditions": [
      "桿垂直地面。"
    ],
    "target": "求最短電線長。",
    "choices": [
      "17公尺",
      "7公尺",
      "13 公尺",
      "√60公尺"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：「至少」表示不考慮鬆弛，取直線距離。 詳算檢查：最短電線為直線斜邊，√(12²+5²)=13公尺。 因此結果為「13 公尺」。",
    "explanation": "最短電線為直線斜邊，√(12²+5²)=13公尺。",
    "steps": [
      "整理條件：桿垂直地面。",
      "獨立推導：不參照選項，從題幹條件重新計算：「至少」表示不考慮鬆弛，取直線距離。 詳算檢查：最短電線為直線斜邊，√(12²+5²)=13公尺。 因此結果為「13 公尺」。",
      "核對目標：答案「13 公尺」確實回應「求最短電線長。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "17公尺",
        "truth": false,
        "reason": "直接相加。"
      },
      {
        "choice": "7公尺",
        "truth": false,
        "reason": "直接相減。"
      },
      {
        "choice": "13 公尺",
        "truth": true,
        "reason": "此選項符合目標「求最短電線長。」；最短電線為直線斜邊，√(12²+5²)=13公尺。"
      },
      {
        "choice": "√60公尺",
        "truth": false,
        "reason": "把兩股相乘。"
      }
    ],
    "misconceptionTarget": "忽略至少與直線關係。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-find-leg，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需解讀「至少」並建模。；具體任務是「求最短電線長。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理文字應用",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "08ed712e6cf1593420ec20d8740cc32903d48f76e620587f412ee0dc5a92f401"
  },
  {
    "questionId": "u11-s013-v005",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-word",
    "lockedSkillOrder": 13,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某人從起點向北 9 公里，再向東 12 公里。若改走起終點直線，可少走多少公里？",
    "givenConditions": [
      "兩段互相垂直。"
    ],
    "target": "比較折線與直線路程。",
    "choices": [
      "15公里",
      "21公里",
      "6 公里",
      "3公里"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：先求兩種路程再相減。 詳算檢查：原路程21公里，直線距離√(9²+12²)=15公里，少走6公里。 因此結果為「6 公里」。",
    "explanation": "原路程21公里，直線距離√(9²+12²)=15公里，少走6公里。",
    "steps": [
      "整理條件：兩段互相垂直。",
      "獨立推導：不參照選項，從題幹條件重新計算：先求兩種路程再相減。 詳算檢查：原路程21公里，直線距離√(9²+12²)=15公里，少走6公里。 因此結果為「6 公里」。",
      "核對目標：答案「6 公里」確實回應「比較折線與直線路程。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "15公里",
        "truth": false,
        "reason": "這是直線距離。"
      },
      {
        "choice": "21公里",
        "truth": false,
        "reason": "這是原路程。"
      },
      {
        "choice": "6 公里",
        "truth": true,
        "reason": "此選項符合目標「比較折線與直線路程。」；原路程21公里，直線距離√(9²+12²)=15公里，少走6公里。"
      },
      {
        "choice": "3公里",
        "truth": false,
        "reason": "差值計算錯。"
      }
    ],
    "misconceptionTarget": "只求直線距離，未回答「少走」。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-find-leg，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "兩階段計算。；具體任務是「比較折線與直線路程。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理文字應用",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "c45f0e7431770093c03e051803b8a6b9eadade044ae9461de718d615eb32b6f4"
  },
  {
    "questionId": "u11-s013-v006",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-word",
    "lockedSkillOrder": 13,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個長方形房間長 15 公尺、寬 8 公尺。從一角拉直線到對角，線長多少？",
    "givenConditions": [
      "長方形15×8。"
    ],
    "target": "求角到對角距離。",
    "choices": [
      "23公尺",
      "7公尺",
      "120公尺",
      "17 公尺"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：房間相鄰牆面垂直。 詳算檢查：對角線=√(15²+8²)=17公尺。 因此結果為「17 公尺」。",
    "explanation": "對角線=√(15²+8²)=17公尺。",
    "steps": [
      "整理條件：長方形15×8。",
      "獨立推導：不參照選項，從題幹條件重新計算：房間相鄰牆面垂直。 詳算檢查：對角線=√(15²+8²)=17公尺。 因此結果為「17 公尺」。",
      "核對目標：答案「17 公尺」確實回應「求角到對角距離。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "23公尺",
        "truth": false,
        "reason": "長寬相加。"
      },
      {
        "choice": "7公尺",
        "truth": false,
        "reason": "長寬相減。"
      },
      {
        "choice": "120公尺",
        "truth": false,
        "reason": "面積誤用。"
      },
      {
        "choice": "17 公尺",
        "truth": true,
        "reason": "此選項符合目標「求角到對角距離。」；對角線=√(15²+8²)=17公尺。"
      }
    ],
    "misconceptionTarget": "把面積或周長當距離。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-find-leg，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "標準矩形文字題。；具體任務是「求角到對角距離。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理文字應用",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "485eba5d46a42f1818cda81e532937d827ce80fbb0142da8ffb50ce671e9ebcc"
  },
  {
    "questionId": "u11-s013-v007",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-word",
    "lockedSkillOrder": 13,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一人向東走 7 公里，再向北走 24 公里，接著沿原直線返回起點。全程多少公里？",
    "givenConditions": [
      "第三段直線回起點。"
    ],
    "target": "求完整路程。",
    "choices": [
      "56 公里",
      "25公里",
      "31公里",
      "49公里"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：分清折線去程與直線回程。 詳算檢查：去程31公里，返回直線√(7²+24²)=25公里，全程56公里。 因此結果為「56 公里」。",
    "explanation": "去程31公里，返回直線√(7²+24²)=25公里，全程56公里。",
    "steps": [
      "整理條件：第三段直線回起點。",
      "獨立推導：不參照選項，從題幹條件重新計算：分清折線去程與直線回程。 詳算檢查：去程31公里，返回直線√(7²+24²)=25公里，全程56公里。 因此結果為「56 公里」。",
      "核對目標：答案「56 公里」確實回應「求完整路程。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "56 公里",
        "truth": true,
        "reason": "此選項符合目標「求完整路程。」；去程31公里，返回直線√(7²+24²)=25公里，全程56公里。"
      },
      {
        "choice": "25公里",
        "truth": false,
        "reason": "只算返回直線。"
      },
      {
        "choice": "31公里",
        "truth": false,
        "reason": "只算去程折線。"
      },
      {
        "choice": "49公里",
        "truth": false,
        "reason": "加總錯誤。"
      }
    ],
    "misconceptionTarget": "只回答位移或其中一段。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-find-leg，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需整合畢氏距離與路程總和。；具體任務是「求完整路程。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理文字應用",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "5aba3618ece3ed033141a94ccb25cad012f4938db7ba05fd90eb00936c0fad19"
  },
  {
    "questionId": "u11-s013-v008",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-word",
    "lockedSkillOrder": 13,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一棵直立樹折斷後，樹梢落地點距樹根 12 公尺，折點離地 9 公尺。原樹高多少？",
    "givenConditions": [
      "樹原本直立，折點高9。"
    ],
    "target": "求原總高度。",
    "choices": [
      "15公尺",
      "24 公尺",
      "21公尺",
      "18公尺"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：先求斜邊，再加未折斷的9公尺。 詳算檢查：折斷部分長√(9²+12²)=15公尺，原高=9+15=24公尺。 因此結果為「24 公尺」。",
    "explanation": "折斷部分長√(9²+12²)=15公尺，原高=9+15=24公尺。",
    "steps": [
      "整理條件：樹原本直立，折點高9。",
      "獨立推導：不參照選項，從題幹條件重新計算：先求斜邊，再加未折斷的9公尺。 詳算檢查：折斷部分長√(9²+12²)=15公尺，原高=9+15=24公尺。 因此結果為「24 公尺」。",
      "核對目標：答案「24 公尺」確實回應「求原總高度。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "15公尺",
        "truth": false,
        "reason": "只算折斷部分。"
      },
      {
        "choice": "24 公尺",
        "truth": true,
        "reason": "此選項符合目標「求原總高度。」；折斷部分長√(9²+12²)=15公尺，原高=9+15=24公尺。"
      },
      {
        "choice": "21公尺",
        "truth": false,
        "reason": "把9與12直接相加。"
      },
      {
        "choice": "18公尺",
        "truth": false,
        "reason": "把兩段誤認相等。"
      }
    ],
    "misconceptionTarget": "只求折斷段，未還原原樹高。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-find-leg，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "兩階段文字建模。；具體任務是「求原總高度。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理文字應用",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "4c9ef75f367056c6396108d281981cf352243df402f074e8cff179193755d36d"
  },
  {
    "questionId": "u11-s013-v009",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-word",
    "lockedSkillOrder": 13,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "甲從同一點向東 8 公里，乙向北 15 公里。兩人此時相距多少？",
    "givenConditions": [
      "同時從同一點出發。"
    ],
    "target": "求兩人間距。",
    "choices": [
      "23公里",
      "7公里",
      "√120公里",
      "17 公里"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：不同人的位移方向互相垂直。 詳算檢查：兩人的位置與起點形成直角三角形，距離√(8²+15²)=17公里。 因此結果為「17 公里」。",
    "explanation": "兩人的位置與起點形成直角三角形，距離√(8²+15²)=17公里。",
    "steps": [
      "整理條件：同時從同一點出發。",
      "獨立推導：不參照選項，從題幹條件重新計算：不同人的位移方向互相垂直。 詳算檢查：兩人的位置與起點形成直角三角形，距離√(8²+15²)=17公里。 因此結果為「17 公里」。",
      "核對目標：答案「17 公里」確實回應「求兩人間距。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "23公里",
        "truth": false,
        "reason": "把兩人路程相加。"
      },
      {
        "choice": "7公里",
        "truth": false,
        "reason": "相減。"
      },
      {
        "choice": "√120公里",
        "truth": false,
        "reason": "把兩股相乘。"
      },
      {
        "choice": "17 公里",
        "truth": true,
        "reason": "此選項符合目標「求兩人間距。」；兩人的位置與起點形成直角三角形，距離√(8²+15²)=17公里。"
      }
    ],
    "misconceptionTarget": "以為不是同一人行走就不能使用畢氏定理。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-find-leg，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需在文字中重建三點關係。；具體任務是「求兩人間距。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理文字應用",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "1bdfa8176e14588f15829fd0687e8a4f6a18d40df61a3f874a5b133eca69d91a"
  },
  {
    "questionId": "u11-s013-v010",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-word",
    "lockedSkillOrder": 13,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "救援隊由基地向東 6 公里再向北 8 公里到達事故點。直升機從基地直飛，航程比地面路線少多少？",
    "givenConditions": [
      "東北方向垂直。"
    ],
    "target": "求節省航程。",
    "choices": [
      "10公里",
      "14公里",
      "4 公里",
      "2公里"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：先使用6-8-10，再比較。 詳算檢查：地面路線14公里，直飛距離10公里，少4公里。 因此結果為「4 公里」。",
    "explanation": "地面路線14公里，直飛距離10公里，少4公里。",
    "steps": [
      "整理條件：東北方向垂直。",
      "獨立推導：不參照選項，從題幹條件重新計算：先使用6-8-10，再比較。 詳算檢查：地面路線14公里，直飛距離10公里，少4公里。 因此結果為「4 公里」。",
      "核對目標：答案「4 公里」確實回應「求節省航程。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "10公里",
        "truth": false,
        "reason": "這是直飛距離。"
      },
      {
        "choice": "14公里",
        "truth": false,
        "reason": "這是地面路線。"
      },
      {
        "choice": "4 公里",
        "truth": true,
        "reason": "此選項符合目標「求節省航程。」；地面路線14公里，直飛距離10公里，少4公里。"
      },
      {
        "choice": "2公里",
        "truth": false,
        "reason": "差值錯誤。"
      }
    ],
    "misconceptionTarget": "只算其中一種路線。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-find-leg，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "答案為公里。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需解讀兩種交通路徑。；具體任務是「求節省航程。」。",
    "literacyContextNecessity": "救援決策比較的是折線與直線航程。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理文字應用",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "d4ade719ae48c9a02ad47e35cfbb91e5b61939e6e75a756a0f46e0a975dd411a"
  },
  {
    "questionId": "u11-s013-v011",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-word",
    "lockedSkillOrder": 13,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "風箏線長 26 公尺，手持點到風箏正下方的水平距離 10 公尺。忽略線的彎曲，風箏比手持點高多少？",
    "givenConditions": [
      "線拉直且垂直投影明確。"
    ],
    "target": "求高度差。",
    "choices": [
      "16公尺",
      "24 公尺",
      "28公尺",
      "√776公尺"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：線為斜邊，水平距離為一股。 詳算檢查：高度=√(26²-10²)=√576=24公尺。 因此結果為「24 公尺」。",
    "explanation": "高度=√(26²-10²)=√576=24公尺。",
    "steps": [
      "整理條件：線拉直且垂直投影明確。",
      "獨立推導：不參照選項，從題幹條件重新計算：線為斜邊，水平距離為一股。 詳算檢查：高度=√(26²-10²)=√576=24公尺。 因此結果為「24 公尺」。",
      "核對目標：答案「24 公尺」確實回應「求高度差。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "16公尺",
        "truth": false,
        "reason": "直接相減。"
      },
      {
        "choice": "24 公尺",
        "truth": true,
        "reason": "此選項符合目標「求高度差。」；高度=√(26²-10²)=√576=24公尺。"
      },
      {
        "choice": "28公尺",
        "truth": false,
        "reason": "平方差錯誤。"
      },
      {
        "choice": "√776公尺",
        "truth": false,
        "reason": "錯用平方和。"
      }
    ],
    "misconceptionTarget": "忽略「正下方」建立的垂直關係。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-find-leg，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "答案為公尺。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "情境限制決定使用直角三角形。；具體任務是「求高度差。」。",
    "literacyContextNecessity": "「忽略彎曲」使線長可視為直線斜邊。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理文字應用",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "aad5ee891c4d3b5f04434ecfeeda3686d57ae75afba40dbdee4b6f48ca62009f"
  },
  {
    "questionId": "u11-s013-v012",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-word",
    "lockedSkillOrder": 13,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "導航資料顯示車輛向東位移 20 公里、向北位移 21 公里。若回基地走直線，需行駛多少公里？",
    "givenConditions": [
      "東北分量互相垂直。"
    ],
    "target": "求直線回程。",
    "choices": [
      "29 公里",
      "41公里",
      "1公里",
      "√41公里"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：位移分量形成兩股，回基地的長度相同。 詳算檢查：回程直線距離=√(20²+21²)=√841=29公里。 因此結果為「29 公里」。",
    "explanation": "回程直線距離=√(20²+21²)=√841=29公里。",
    "steps": [
      "整理條件：東北分量互相垂直。",
      "獨立推導：不參照選項，從題幹條件重新計算：位移分量形成兩股，回基地的長度相同。 詳算檢查：回程直線距離=√(20²+21²)=√841=29公里。 因此結果為「29 公里」。",
      "核對目標：答案「29 公里」確實回應「求直線回程。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "29 公里",
        "truth": true,
        "reason": "此選項符合目標「求直線回程。」；回程直線距離=√(20²+21²)=√841=29公里。"
      },
      {
        "choice": "41公里",
        "truth": false,
        "reason": "把位移分量相加。"
      },
      {
        "choice": "1公里",
        "truth": false,
        "reason": "相減。"
      },
      {
        "choice": "√41公里",
        "truth": false,
        "reason": "未平方。"
      }
    ],
    "misconceptionTarget": "把導航分量當路線總長。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-find-leg，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "答案為公里。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "較不熟悉的20-21-29數組。；具體任務是「求直線回程。」。",
    "literacyContextNecessity": "導航提供的是垂直位移分量。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理文字應用",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "ac9223a877e21854ac60cc40fe629f2dd7cc8ba84eafd92ded1e5682528c9210"
  },
  {
    "questionId": "u11-s014-v001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "right-triangle-identify",
    "lockedSkillOrder": 14,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已驗得 6²+8²=10²。以 6、8、10 為三邊的三角形是否為直角三角形？",
    "givenConditions": [
      "三邊能成三角形，且平方關係已明確給出。"
    ],
    "target": "依平方等式套用逆命題。",
    "choices": [
      "否，因6+8≠10",
      "是",
      "否，因三邊都不同",
      "無法判斷"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：先確認6+8>10，再用最長邊平方判定。 詳算檢查：最大邊10，6²+8²=36+64=100=10²，所以是直角三角形。 因此結果為「是」。",
    "explanation": "最大邊10，6²+8²=36+64=100=10²，所以是直角三角形。",
    "steps": [
      "整理條件：三邊能成三角形，且平方關係已明確給出。",
      "獨立推導：不參照選項，從題幹條件重新計算：先確認6+8>10，再用最長邊平方判定。 詳算檢查：最大邊10，6²+8²=36+64=100=10²，所以是直角三角形。 因此結果為「是」。",
      "核對目標：答案「是」確實回應「依平方等式套用逆命題。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "否，因6+8≠10",
        "truth": false,
        "reason": "三角形判定不是邊長直接相加。"
      },
      {
        "choice": "是",
        "truth": true,
        "reason": "此選項符合目標「依平方等式套用逆命題。」；最大邊10，6²+8²=36+64=100=10²，所以是直角三角形。"
      },
      {
        "choice": "否，因三邊都不同",
        "truth": false,
        "reason": "直角三角形可三邊不同。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "三邊足以判定。"
      }
    ],
    "misconceptionTarget": "使用a+b=c而非平方關係。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-word，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "基本倍數畢氏數組。；具體任務是「依平方等式套用逆命題。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "直角三角形判定",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "2b960f8ada464f574eeabdc864ec8d1ab93ea867886776c7abfcd123c487e8b5"
  },
  {
    "questionId": "u11-s014-v002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "right-triangle-identify",
    "lockedSkillOrder": 14,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三邊 5、6、7 能構成三角形，但 5²+6²=61。它是否為直角三角形？",
    "givenConditions": [
      "最大邊為7，兩短邊平方和為61。"
    ],
    "target": "比較61與7²後判定直角性。",
    "choices": [
      "是，因5+6>7",
      "是，因三邊都是整數",
      "無法判斷",
      "否"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：先證明可成三角形，再比較兩短邊平方和與最長邊平方。 詳算檢查：最長邊7，5²+6²=61≠49，所以不是直角三角形。 因此結果為「否」。",
    "explanation": "最長邊7，5²+6²=61≠49，所以不是直角三角形。",
    "steps": [
      "整理條件：最大邊為7，兩短邊平方和為61。",
      "獨立推導：不參照選項，從題幹條件重新計算：先證明可成三角形，再比較兩短邊平方和與最長邊平方。 詳算檢查：最長邊7，5²+6²=61≠49，所以不是直角三角形。 因此結果為「否」。",
      "核對目標：答案「否」確實回應「比較61與7²後判定直角性。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "是，因5+6>7",
        "truth": false,
        "reason": "三角形不等式只能證明可成三角形。"
      },
      {
        "choice": "是，因三邊都是整數",
        "truth": false,
        "reason": "整數邊不保證直角。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "可比較平方。"
      },
      {
        "choice": "否",
        "truth": true,
        "reason": "此選項符合目標「比較61與7²後判定直角性。」；最長邊7，5²+6²=61≠49，所以不是直角三角形。"
      }
    ],
    "misconceptionTarget": "只檢查三角形不等式。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-word，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "簡單反例。；具體任務是「比較61與7²後判定直角性。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "直角三角形判定",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "18326aab90499a5b09dd06084719351ae1b188e252e635c38076f2fa195bb41d"
  },
  {
    "questionId": "u11-s014-v003",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "right-triangle-identify",
    "lockedSkillOrder": 14,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "邊長 7、24、25 的三角形，最大角是哪一種角？",
    "givenConditions": [
      "三邊可成三角形。"
    ],
    "target": "判定最大角。",
    "choices": [
      "銳角",
      "鈍角",
      "直角",
      "無法成三角形"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：最大角對最長邊25，依逆命題判定。 詳算檢查：7²+24²=49+576=625=25²，最大角為直角。 因此結果為「直角」。",
    "explanation": "7²+24²=49+576=625=25²，最大角為直角。",
    "steps": [
      "整理條件：三邊可成三角形。",
      "獨立推導：不參照選項，從題幹條件重新計算：最大角對最長邊25，依逆命題判定。 詳算檢查：7²+24²=49+576=625=25²，最大角為直角。 因此結果為「直角」。",
      "核對目標：答案「直角」確實回應「判定最大角。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "銳角",
        "truth": false,
        "reason": "平方和恰等於最長邊平方。"
      },
      {
        "choice": "鈍角",
        "truth": false,
        "reason": "不存在大於關係。"
      },
      {
        "choice": "直角",
        "truth": true,
        "reason": "此選項符合目標「判定最大角。」；7²+24²=49+576=625=25²，最大角為直角。"
      },
      {
        "choice": "無法成三角形",
        "truth": false,
        "reason": "7+24>25。"
      }
    ],
    "misconceptionTarget": "未先找最長邊。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-word，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "基本逆命題應用。；具體任務是「判定最大角。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "直角三角形判定",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "239cfda88f45f34284b71f37e041259d31f764ea6755bcac49210edf557f85fa"
  },
  {
    "questionId": "u11-s014-v004",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "right-triangle-identify",
    "lockedSkillOrder": 14,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三角形三邊為 √5、2、3，是否為直角三角形？",
    "givenConditions": [
      "邊長皆正。"
    ],
    "target": "判定含根式三邊。",
    "choices": [
      "是",
      "否，因含根式",
      "否，因√5+2<3",
      "無法判斷"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：先確認可成三角形，再比較平方。 詳算檢查：最長邊3，(√5)²+2²=5+4=9=3²，所以是。 因此結果為「是」。",
    "explanation": "最長邊3，(√5)²+2²=5+4=9=3²，所以是。",
    "steps": [
      "整理條件：邊長皆正。",
      "獨立推導：不參照選項，從題幹條件重新計算：先確認可成三角形，再比較平方。 詳算檢查：最長邊3，(√5)²+2²=5+4=9=3²，所以是。 因此結果為「是」。",
      "核對目標：答案「是」確實回應「判定含根式三邊。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "是",
        "truth": true,
        "reason": "此選項符合目標「判定含根式三邊。」；最長邊3，(√5)²+2²=5+4=9=3²，所以是。"
      },
      {
        "choice": "否，因含根式",
        "truth": false,
        "reason": "根式邊仍可平方比較。"
      },
      {
        "choice": "否，因√5+2<3",
        "truth": false,
        "reason": "實際√5+2>3。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "三邊資料足夠。"
      }
    ],
    "misconceptionTarget": "看到根式就停止判定。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-word，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需處理根式平方。；具體任務是「判定含根式三邊。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "直角三角形判定",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "89c1a3215dadca69995282d216bd5f0f49a34dfa4d03ab3cbfd2423c196e15a5"
  },
  {
    "questionId": "u11-s014-v005",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "right-triangle-identify",
    "lockedSkillOrder": 14,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某生把三邊 9、12、16 誤套成 9、12、15 的畢氏數組，因而說它是直角三角形。這個結論是否正確？",
    "givenConditions": [
      "實際最長邊是16，不可換成15。"
    ],
    "target": "糾正套用相近畢氏數組的判斷。",
    "choices": [
      "否",
      "是，因9²+12²=15²",
      "是，因9+12>16",
      "無法成三角形"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：必須使用實際最長邊16。 詳算檢查：9²+12²=225，而16²=256，不相等，所以不是直角三角形。 因此結果為「否」。",
    "explanation": "9²+12²=225，而16²=256，不相等，所以不是直角三角形。",
    "steps": [
      "整理條件：實際最長邊是16，不可換成15。",
      "獨立推導：不參照選項，從題幹條件重新計算：必須使用實際最長邊16。 詳算檢查：9²+12²=225，而16²=256，不相等，所以不是直角三角形。 因此結果為「否」。",
      "核對目標：答案「否」確實回應「糾正套用相近畢氏數組的判斷。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "否",
        "truth": true,
        "reason": "此選項符合目標「糾正套用相近畢氏數組的判斷。」；9²+12²=225，而16²=256，不相等，所以不是直角三角形。"
      },
      {
        "choice": "是，因9²+12²=15²",
        "truth": false,
        "reason": "最長邊實際是16，不是15。"
      },
      {
        "choice": "是，因9+12>16",
        "truth": false,
        "reason": "僅證明可成三角形。"
      },
      {
        "choice": "無法成三角形",
        "truth": false,
        "reason": "9+12>16，所以可成。"
      }
    ],
    "misconceptionTarget": "把熟悉的9-12-15數組硬套到不同三邊。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-word，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "干擾來自近似畢氏數組。；具體任務是「糾正套用相近畢氏數組的判斷。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "直角三角形判定",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "7e40986c2f50ba2838434851a84caa98c6e6c200287dbe1c63aa278568aa94ef"
  },
  {
    "questionId": "u11-s014-v006",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "right-triangle-identify",
    "lockedSkillOrder": 14,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若三角形邊長為 10、24、26，則直角的對邊長是多少？",
    "givenConditions": [
      "三邊10、24、26。"
    ],
    "target": "找出直角對邊。",
    "choices": [
      "10",
      "26",
      "24",
      "34"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：最大邊且平方等於其餘平方和。 詳算檢查：10²+24²=676=26²，所以26為斜邊，即直角對邊。 因此結果為「26」。",
    "explanation": "10²+24²=676=26²，所以26為斜邊，即直角對邊。",
    "steps": [
      "整理條件：三邊10、24、26。",
      "獨立推導：不參照選項，從題幹條件重新計算：最大邊且平方等於其餘平方和。 詳算檢查：10²+24²=676=26²，所以26為斜邊，即直角對邊。 因此結果為「26」。",
      "核對目標：答案「26」確實回應「找出直角對邊。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "10",
        "truth": false,
        "reason": "不是最長邊。"
      },
      {
        "choice": "26",
        "truth": true,
        "reason": "此選項符合目標「找出直角對邊。」；10²+24²=676=26²，所以26為斜邊，即直角對邊。"
      },
      {
        "choice": "24",
        "truth": false,
        "reason": "不是斜邊。"
      },
      {
        "choice": "34",
        "truth": false,
        "reason": "三邊中沒有34。"
      }
    ],
    "misconceptionTarget": "判定成功後仍選錯斜邊。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-word，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需在判定後辨認斜邊。；具體任務是「找出直角對邊。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "直角三角形判定",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "4bf9505bc6d12b6cd499d5b9d3f00158388434e33710947a24f3dfc69df4bc86"
  },
  {
    "questionId": "u11-s014-v007",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "right-triangle-identify",
    "lockedSkillOrder": 14,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三角形三邊為 x、12、13，且 x 為正整數。若它是直角三角形且13為斜邊，x 為何？",
    "givenConditions": [
      "13明定為斜邊。"
    ],
    "target": "由直角條件求邊。",
    "choices": [
      "1",
      "25",
      "√313",
      "5"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：x是邊長取正值。 詳算檢查：x²+12²=13²，x²=25，x=5。 因此結果為「5」。",
    "explanation": "x²+12²=13²，x²=25，x=5。",
    "steps": [
      "整理條件：13明定為斜邊。",
      "獨立推導：不參照選項，從題幹條件重新計算：x是邊長取正值。 詳算檢查：x²+12²=13²，x²=25，x=5。 因此結果為「5」。",
      "核對目標：答案「5」確實回應「由直角條件求邊。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "直接相減13-12。"
      },
      {
        "choice": "25",
        "truth": false,
        "reason": "漏開平方。"
      },
      {
        "choice": "√313",
        "truth": false,
        "reason": "使用平方和。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "此選項符合目標「由直角條件求邊。」；x²+12²=13²，x²=25，x=5。"
      }
    ],
    "misconceptionTarget": "把邊長直接相減。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-word，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "判定條件反向求未知。；具體任務是「由直角條件求邊。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "直角三角形判定",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "3307cb8f19e781d6d11aa61162d7680ca7d658cd77664f85e5b4e415268974f8"
  },
  {
    "questionId": "u11-s014-v008",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "right-triangle-identify",
    "lockedSkillOrder": 14,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪組三邊能構成直角三角形？",
    "givenConditions": [
      "各組皆先能成三角形。"
    ],
    "target": "從多組資料選直角三角形。",
    "choices": [
      "4、5、6",
      "6、7、8",
      "8、15、17",
      "9、10、12"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：逐組以最大邊檢查平方關係。 詳算檢查：8²+15²=64+225=289=17²。 因此結果為「8、15、17」。",
    "explanation": "8²+15²=64+225=289=17²。",
    "steps": [
      "整理條件：各組皆先能成三角形。",
      "獨立推導：不參照選項，從題幹條件重新計算：逐組以最大邊檢查平方關係。 詳算檢查：8²+15²=64+225=289=17²。 因此結果為「8、15、17」。",
      "核對目標：答案「8、15、17」確實回應「從多組資料選直角三角形。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "4、5、6",
        "truth": false,
        "reason": "16+25≠36。"
      },
      {
        "choice": "6、7、8",
        "truth": false,
        "reason": "36+49≠64。"
      },
      {
        "choice": "8、15、17",
        "truth": true,
        "reason": "此選項符合目標「從多組資料選直角三角形。」；8²+15²=64+225=289=17²。"
      },
      {
        "choice": "9、10、12",
        "truth": false,
        "reason": "81+100≠144。"
      }
    ],
    "misconceptionTarget": "只看三邊是否相近或是否為整數。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-word，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需系統排查多個候選。；具體任務是「從多組資料選直角三角形。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "直角三角形判定",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "f1b99431d7de7c237d5c5c95e4848f11e53319d73affd357e704569f30265059"
  },
  {
    "questionId": "u11-s014-v009",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "right-triangle-identify",
    "lockedSkillOrder": 14,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三邊為 2√3、√13、5 的三角形是否為直角三角形？",
    "givenConditions": [
      "三邊皆正且可成三角形。"
    ],
    "target": "判定複合根式三邊。",
    "choices": [
      "否，因根式不能作邊長",
      "否，因2√3+√13<5",
      "是",
      "無法判斷"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：平方後正好滿足逆命題。 詳算檢查：最大邊5，(2√3)²+(√13)²=12+13=25，所以是。 因此結果為「是」。",
    "explanation": "最大邊5，(2√3)²+(√13)²=12+13=25，所以是。",
    "steps": [
      "整理條件：三邊皆正且可成三角形。",
      "獨立推導：不參照選項，從題幹條件重新計算：平方後正好滿足逆命題。 詳算檢查：最大邊5，(2√3)²+(√13)²=12+13=25，所以是。 因此結果為「是」。",
      "核對目標：答案「是」確實回應「判定複合根式三邊。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "否，因根式不能作邊長",
        "truth": false,
        "reason": "正根式可作長度。"
      },
      {
        "choice": "否，因2√3+√13<5",
        "truth": false,
        "reason": "實際和大於5。"
      },
      {
        "choice": "是",
        "truth": true,
        "reason": "此選項符合目標「判定複合根式三邊。」；最大邊5，(2√3)²+(√13)²=12+13=25，所以是。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "可平方比較。"
      }
    ],
    "misconceptionTarget": "忽略係數平方或不比較最大邊。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-word，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "含兩種根式與係數。；具體任務是「判定複合根式三邊。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "直角三角形判定",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "0f9bb2318eee52d6a8d21c11a91c0f07c738a8b586a5b6f1312079397158290a"
  },
  {
    "questionId": "u11-s014-v010",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "right-triangle-identify",
    "lockedSkillOrder": 14,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "figure",
    "figureId": "fig-u11-s014-triangle-check",
    "drawingSpecReference": "units/u11/s014/drawing-specs.jsonl#fig-u11-s014-triangle-check",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "木工用三條量尺 30、40、50 公分檢查櫃角。若三端連成三角形，該角是否為直角？",
    "givenConditions": [
      "三端形成三角形，50為最長邊。"
    ],
    "target": "判斷櫃角。",
    "choices": [
      "是",
      "否，因30+40≠50",
      "否，因量尺長度不同",
      "資料不足"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：這是3-4-5的10倍。 詳算檢查：30²+40²=50²，所以兩短尺夾角為直角。 因此結果為「是」。",
    "explanation": "30²+40²=50²，所以兩短尺夾角為直角。",
    "steps": [
      "整理條件：三端形成三角形，50為最長邊。",
      "獨立推導：不參照選項，從題幹條件重新計算：這是3-4-5的10倍。 詳算檢查：30²+40²=50²，所以兩短尺夾角為直角。 因此結果為「是」。",
      "核對目標：答案「是」確實回應「判斷櫃角。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "是",
        "truth": true,
        "reason": "此選項符合目標「判斷櫃角。」；30²+40²=50²，所以兩短尺夾角為直角。"
      },
      {
        "choice": "否，因30+40≠50",
        "truth": false,
        "reason": "應比較平方而非直接加。"
      },
      {
        "choice": "否，因量尺長度不同",
        "truth": false,
        "reason": "不同長度可形成直角三角形。"
      },
      {
        "choice": "資料不足",
        "truth": false,
        "reason": "三邊足以判定。"
      }
    ],
    "misconceptionTarget": "只看長度相加或比例外觀。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-word，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "三邊同為公分。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "把逆命題用於工程檢測。；具體任務是「判斷櫃角。」。",
    "literacyContextNecessity": "木工檢查目的使三邊判定直接影響角度結論。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "直角三角形判定",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "83c90296488e54b42ea65f2a82bfe984ba8ce4ca519f692961c1918992767397"
  },
  {
    "questionId": "u11-s014-v011",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "right-triangle-identify",
    "lockedSkillOrder": 14,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "測量員得到三邊 12 公尺、16 公尺、21 公尺。報告能否寫「直角三角形」？",
    "givenConditions": [
      "測量值視為精確題目資料。"
    ],
    "target": "判斷報告結論。",
    "choices": [
      "可以，因12+16>21",
      "不能",
      "可以，因12²+16²=20²",
      "不能，因無法成三角形"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：使用實測最長邊21，不可自行替換成20。 詳算檢查：12²+16²=400，而21²=441，不相等，不能判為直角。 因此結果為「不能」。",
    "explanation": "12²+16²=400，而21²=441，不相等，不能判為直角。",
    "steps": [
      "整理條件：測量值視為精確題目資料。",
      "獨立推導：不參照選項，從題幹條件重新計算：使用實測最長邊21，不可自行替換成20。 詳算檢查：12²+16²=400，而21²=441，不相等，不能判為直角。 因此結果為「不能」。",
      "核對目標：答案「不能」確實回應「判斷報告結論。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "可以，因12+16>21",
        "truth": false,
        "reason": "只能證明可成三角形。"
      },
      {
        "choice": "不能",
        "truth": true,
        "reason": "此選項符合目標「判斷報告結論。」；12²+16²=400，而21²=441，不相等，不能判為直角。"
      },
      {
        "choice": "可以，因12²+16²=20²",
        "truth": false,
        "reason": "最長邊是21且21²不等於400。"
      },
      {
        "choice": "不能，因無法成三角形",
        "truth": false,
        "reason": "12+16>21，確實可成三角形。"
      }
    ],
    "misconceptionTarget": "把接近的12-16-20當成相同。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-word，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "所有邊長同為公尺。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需抵抗熟悉數組造成的誤判。；具體任務是「判斷報告結論。」。",
    "literacyContextNecessity": "報告用語必須由實測三邊支持。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "直角三角形判定",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "b6f11718744c267ab87a746fd8e732e39ac0cbd41dc8b916acca8b68ff468515"
  },
  {
    "questionId": "u11-s014-v012",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "right-triangle-identify",
    "lockedSkillOrder": 14,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一塊三角形支架三邊為 1.5、2、2.5 公尺。它是否含直角？",
    "givenConditions": [
      "2.5為最長邊。"
    ],
    "target": "判定支架角度。",
    "choices": [
      "否，因有小數",
      "否，因1.5+2≠2.5",
      "無法判斷",
      "是"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：可整體乘2看成3-4-5比例。 詳算檢查：1.5²+2²=2.25+4=6.25=2.5²，所以含直角。 因此結果為「是」。",
    "explanation": "1.5²+2²=2.25+4=6.25=2.5²，所以含直角。",
    "steps": [
      "整理條件：2.5為最長邊。",
      "獨立推導：不參照選項，從題幹條件重新計算：可整體乘2看成3-4-5比例。 詳算檢查：1.5²+2²=2.25+4=6.25=2.5²，所以含直角。 因此結果為「是」。",
      "核對目標：答案「是」確實回應「判定支架角度。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "否，因有小數",
        "truth": false,
        "reason": "小數邊同樣可平方。"
      },
      {
        "choice": "否，因1.5+2≠2.5",
        "truth": false,
        "reason": "判定應用平方。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "三邊足夠。"
      },
      {
        "choice": "是",
        "truth": true,
        "reason": "此選項符合目標「判定支架角度。」；1.5²+2²=2.25+4=6.25=2.5²，所以含直角。"
      }
    ],
    "misconceptionTarget": "認為只有整數邊才能使用逆命題。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-word，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "三邊同為公尺。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "小數畢氏數組。；具體任務是「判定支架角度。」。",
    "literacyContextNecessity": "支架是否含直角是結構安裝的必要判定。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "直角三角形判定",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "4ebefc1e9b1e24b68462ca30eba1a048c37649038ae0a73c19ddbe540a681b50"
  },
  {
    "questionId": "u11-s015-v001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-converse-basic",
    "lockedSkillOrder": 15,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "畢氏定理逆命題的正確敘述為何？",
    "givenConditions": [
      "已知對象為三角形。"
    ],
    "target": "辨認逆命題。",
    "choices": [
      "若是直角三角形，則兩股平方和等於斜邊平方",
      "若兩邊和大於第三邊，則是直角三角形",
      "若三角形兩短邊平方和等於最長邊平方，則此三角形為直角三角形",
      "若三邊都是整數，則是直角三角形"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：原命題：直角⇒平方關係；逆命題：平方關係⇒直角。 詳算檢查：逆命題把原定理的條件與結論交換，並必須指定最長邊。 因此結果為「若三角形兩短邊平方和等於最長邊平方，則此三角形為直角三角形」。",
    "explanation": "逆命題把原定理的條件與結論交換，並必須指定最長邊。",
    "steps": [
      "整理條件：已知對象為三角形。",
      "獨立推導：不參照選項，從題幹條件重新計算：原命題：直角⇒平方關係；逆命題：平方關係⇒直角。 詳算檢查：逆命題把原定理的條件與結論交換，並必須指定最長邊。 因此結果為「若三角形兩短邊平方和等於最長邊平方，則此三角形為直角三角形」。",
      "核對目標：答案「若三角形兩短邊平方和等於最長邊平方，則此三角形為直角三角形」確實回應「辨認逆命題。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "若是直角三角形，則兩股平方和等於斜邊平方",
        "truth": false,
        "reason": "這是原命題，不是逆命題。"
      },
      {
        "choice": "若兩邊和大於第三邊，則是直角三角形",
        "truth": false,
        "reason": "這只保證可成三角形。"
      },
      {
        "choice": "若三角形兩短邊平方和等於最長邊平方，則此三角形為直角三角形",
        "truth": true,
        "reason": "此選項符合目標「辨認逆命題。」；逆命題把原定理的條件與結論交換，並必須指定最長邊。"
      },
      {
        "choice": "若三邊都是整數，則是直角三角形",
        "truth": false,
        "reason": "整數邊不是充分條件。"
      }
    ],
    "misconceptionTarget": "把原命題與逆命題混淆。",
    "prerequisiteCheck": "需能使用先備技能 right-triangle-identify，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "基本邏輯敘述辨識。；具體任務是「辨認逆命題。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理逆命題基本",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "3db04e2c77b11cca39704231b7ff4f79791aaa947e1e0651bf44a29040953510"
  },
  {
    "questionId": "u11-s015-v002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-converse-basic",
    "lockedSkillOrder": 15,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "使用逆命題判定時，為何要先找最長邊？",
    "givenConditions": [
      "三邊長已知。"
    ],
    "target": "說明判定步驟的必要性。",
    "choices": [
      "最長邊才可能是直角的對邊",
      "因最長邊一定等於另兩邊和",
      "因最長邊不需要平方",
      "只是計算習慣，換邊也一樣"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：若把短邊當斜邊，平方關係的角色會錯。 詳算檢查：直角三角形的斜邊最長，逆命題中的等式右側應放最長邊平方。 因此結果為「最長邊才可能是直角的對邊」。",
    "explanation": "直角三角形的斜邊最長，逆命題中的等式右側應放最長邊平方。",
    "steps": [
      "整理條件：三邊長已知。",
      "獨立推導：不參照選項，從題幹條件重新計算：若把短邊當斜邊，平方關係的角色會錯。 詳算檢查：直角三角形的斜邊最長，逆命題中的等式右側應放最長邊平方。 因此結果為「最長邊才可能是直角的對邊」。",
      "核對目標：答案「最長邊才可能是直角的對邊」確實回應「說明判定步驟的必要性。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "最長邊才可能是直角的對邊",
        "truth": true,
        "reason": "此選項符合目標「說明判定步驟的必要性。」；直角三角形的斜邊最長，逆命題中的等式右側應放最長邊平方。"
      },
      {
        "choice": "因最長邊一定等於另兩邊和",
        "truth": false,
        "reason": "三角形中應小於其餘兩邊和。"
      },
      {
        "choice": "因最長邊不需要平方",
        "truth": false,
        "reason": "仍須平方。"
      },
      {
        "choice": "只是計算習慣，換邊也一樣",
        "truth": false,
        "reason": "錯配邊會得到錯誤結論。"
      }
    ],
    "misconceptionTarget": "只背公式字母，不辨認邊的角色。",
    "prerequisiteCheck": "需能使用先備技能 right-triangle-identify，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "概念理由題。；具體任務是「說明判定步驟的必要性。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理逆命題基本",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "fa34cad5f7761d92ccce06b86b42c1a5e295776b567bf1a2020fea07ca9c4683"
  },
  {
    "questionId": "u11-s015-v003",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-converse-basic",
    "lockedSkillOrder": 15,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知三角形三邊 a≤b≤c 且 a²+b²=c²，可推出什麼？",
    "givenConditions": [
      "a≤b≤c且平方關係成立。"
    ],
    "target": "指出直角位置。",
    "choices": [
      "∠A是直角",
      "∠C 是直角",
      "∠B是直角",
      "三角形是等邊三角形"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：把邊長排序與對角關係連結。 詳算檢查：c為最長邊，依逆命題，c所對的角C是直角。 因此結果為「∠C 是直角」。",
    "explanation": "c為最長邊，依逆命題，c所對的角C是直角。",
    "steps": [
      "整理條件：a≤b≤c且平方關係成立。",
      "獨立推導：不參照選項，從題幹條件重新計算：把邊長排序與對角關係連結。 詳算檢查：c為最長邊，依逆命題，c所對的角C是直角。 因此結果為「∠C 是直角」。",
      "核對目標：答案「∠C 是直角」確實回應「指出直角位置。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "∠A是直角",
        "truth": false,
        "reason": "直角應對最長邊c。"
      },
      {
        "choice": "∠C 是直角",
        "truth": true,
        "reason": "此選項符合目標「指出直角位置。」；c為最長邊，依逆命題，c所對的角C是直角。"
      },
      {
        "choice": "∠B是直角",
        "truth": false,
        "reason": "b不是等式中的斜邊角色。"
      },
      {
        "choice": "三角形是等邊三角形",
        "truth": false,
        "reason": "平方關係不代表三邊相等。"
      }
    ],
    "misconceptionTarget": "判定出直角三角形後仍找錯角。",
    "prerequisiteCheck": "需能使用先備技能 right-triangle-identify，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "直接套用逆命題。；具體任務是「指出直角位置。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理逆命題基本",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "a58b767c3190f29b256641eb8bcf8ce6a97933707bcd1accd7b1aa4f125d36d0"
  },
  {
    "questionId": "u11-s015-v004",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-converse-basic",
    "lockedSkillOrder": 15,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一項資料足以保證三角形為直角三角形？",
    "givenConditions": [
      "候選資料均描述三角形。"
    ],
    "target": "選足以保證直角的證據。",
    "choices": [
      "有一個角看起來像90°",
      "兩邊長相等",
      "三邊為5、5、8",
      "三邊為 9、40、41"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：三邊精確資料可驗證平方等式。 詳算檢查：9²+40²=81+1600=1681=41²，依逆命題可保證。 因此結果為「三邊為 9、40、41」。",
    "explanation": "9²+40²=81+1600=1681=41²，依逆命題可保證。",
    "steps": [
      "整理條件：候選資料均描述三角形。",
      "獨立推導：不參照選項，從題幹條件重新計算：三邊精確資料可驗證平方等式。 詳算檢查：9²+40²=81+1600=1681=41²，依逆命題可保證。 因此結果為「三邊為 9、40、41」。",
      "核對目標：答案「三邊為 9、40、41」確實回應「選足以保證直角的證據。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "有一個角看起來像90°",
        "truth": false,
        "reason": "外觀不是證明。"
      },
      {
        "choice": "兩邊長相等",
        "truth": false,
        "reason": "只能推出等腰。"
      },
      {
        "choice": "三邊為5、5、8",
        "truth": false,
        "reason": "25+25≠64。"
      },
      {
        "choice": "三邊為 9、40、41",
        "truth": true,
        "reason": "此選項符合目標「選足以保證直角的證據。」；9²+40²=81+1600=1681=41²，依逆命題可保證。"
      }
    ],
    "misconceptionTarget": "以視覺或對稱性代替證明。",
    "prerequisiteCheck": "需能使用先備技能 right-triangle-identify，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需分辨充分證據。；具體任務是「選足以保證直角的證據。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理逆命題基本",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "a647093214304ca89c225ad5ecd9604e7f8bf545316c8c7d3a86331ee95c7193"
  },
  {
    "questionId": "u11-s015-v005",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-converse-basic",
    "lockedSkillOrder": 15,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 p²+q²=r²，且 p、q、r 為某三角形三邊，還需知道什麼才能直接套用逆命題？",
    "givenConditions": [
      "p、q、r已能成三角形。"
    ],
    "target": "補足套用條件。",
    "choices": [
      "p=q",
      "r 是最長邊",
      "三邊都是偶數",
      "面積已知"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：逆命題的條件包括三角形與最長邊平方關係。 詳算檢查：等式中的 r 必須扮演斜邊候選，也就是最長邊。 因此結果為「r 是最長邊」。",
    "explanation": "等式中的 r 必須扮演斜邊候選，也就是最長邊。",
    "steps": [
      "整理條件：p、q、r已能成三角形。",
      "獨立推導：不參照選項，從題幹條件重新計算：逆命題的條件包括三角形與最長邊平方關係。 詳算檢查：等式中的 r 必須扮演斜邊候選，也就是最長邊。 因此結果為「r 是最長邊」。",
      "核對目標：答案「r 是最長邊」確實回應「補足套用條件。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "p=q",
        "truth": false,
        "reason": "不必等腰。"
      },
      {
        "choice": "r 是最長邊",
        "truth": true,
        "reason": "此選項符合目標「補足套用條件。」；等式中的 r 必須扮演斜邊候選，也就是最長邊。"
      },
      {
        "choice": "三邊都是偶數",
        "truth": false,
        "reason": "與逆命題無關。"
      },
      {
        "choice": "面積已知",
        "truth": false,
        "reason": "判定不需要面積。"
      }
    ],
    "misconceptionTarget": "忽略符號所代表的邊角色。",
    "prerequisiteCheck": "需能使用先備技能 right-triangle-identify，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "考查定理條件完整性。；具體任務是「補足套用條件。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理逆命題基本",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "67babcb508ac8bb9bf7ece4d63c305a276b62689ddf5f802584da3c9d5dda4c4"
  },
  {
    "questionId": "u11-s015-v006",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-converse-basic",
    "lockedSkillOrder": 15,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某三角形三邊平方為 25、144、169。依逆命題可得何結論？",
    "givenConditions": [
      "三數是同一三角形的邊平方。"
    ],
    "target": "由平方資料判定。",
    "choices": [
      "它是銳角三角形",
      "它是鈍角三角形",
      "它是直角三角形",
      "不能判斷"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：不必先開平方，也能直接比較平方資料。 詳算檢查：25+144=169，符合兩短邊平方和等於最長邊平方。 因此結果為「它是直角三角形」。",
    "explanation": "25+144=169，符合兩短邊平方和等於最長邊平方。",
    "steps": [
      "整理條件：三數是同一三角形的邊平方。",
      "獨立推導：不參照選項，從題幹條件重新計算：不必先開平方，也能直接比較平方資料。 詳算檢查：25+144=169，符合兩短邊平方和等於最長邊平方。 因此結果為「它是直角三角形」。",
      "核對目標：答案「它是直角三角形」確實回應「由平方資料判定。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "它是銳角三角形",
        "truth": false,
        "reason": "25+144恰等於169。"
      },
      {
        "choice": "它是鈍角三角形",
        "truth": false,
        "reason": "不存在平方和小於最大平方。"
      },
      {
        "choice": "它是直角三角形",
        "truth": true,
        "reason": "此選項符合目標「由平方資料判定。」；25+144=169，符合兩短邊平方和等於最長邊平方。"
      },
      {
        "choice": "不能判斷",
        "truth": false,
        "reason": "平方資料已足夠。"
      }
    ],
    "misconceptionTarget": "認為一定要知道原邊長。",
    "prerequisiteCheck": "需能使用先備技能 right-triangle-identify，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "資料形式改變但邏輯相同。；具體任務是「由平方資料判定。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理逆命題基本",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "22583ae39550394526e3f7f8908e3429ddacd890b3ce03c6a6ac03397d4fb292"
  },
  {
    "questionId": "u11-s015-v007",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-converse-basic",
    "lockedSkillOrder": 15,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "有人說：「只要 a²+b²=c²，就一定有直角。」這句話缺少哪個關鍵前提？",
    "givenConditions": [
      "評估一句不完整敘述。"
    ],
    "target": "找出缺失條件。",
    "choices": [
      "a、b、c 必須是同一個三角形的三邊，且 c 為最長邊",
      "a、b、c都必須是奇數",
      "a+b必須等於c",
      "a、b、c必須相等"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：逆命題是條件命題，不能省略「三角形三邊」與最長邊。 詳算檢查：代數等式本身不會自動建立三角形與邊角色；必須確認幾何前提。 因此結果為「a、b、c 必須是同一個三角形的三邊，且 c 為最長邊」。",
    "explanation": "代數等式本身不會自動建立三角形與邊角色；必須確認幾何前提。",
    "steps": [
      "整理條件：評估一句不完整敘述。",
      "獨立推導：不參照選項，從題幹條件重新計算：逆命題是條件命題，不能省略「三角形三邊」與最長邊。 詳算檢查：代數等式本身不會自動建立三角形與邊角色；必須確認幾何前提。 因此結果為「a、b、c 必須是同一個三角形的三邊，且 c 為最長邊」。",
      "核對目標：答案「a、b、c 必須是同一個三角形的三邊，且 c 為最長邊」確實回應「找出缺失條件。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "a、b、c 必須是同一個三角形的三邊，且 c 為最長邊",
        "truth": true,
        "reason": "此選項符合目標「找出缺失條件。」；代數等式本身不會自動建立三角形與邊角色；必須確認幾何前提。"
      },
      {
        "choice": "a、b、c都必須是奇數",
        "truth": false,
        "reason": "沒有此限制。"
      },
      {
        "choice": "a+b必須等於c",
        "truth": false,
        "reason": "這會形成退化圖形。"
      },
      {
        "choice": "a、b、c必須相等",
        "truth": false,
        "reason": "等邊三角形不是直角。"
      }
    ],
    "misconceptionTarget": "把公式當成脫離條件的萬用判定。",
    "prerequisiteCheck": "需能使用先備技能 right-triangle-identify，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需審查數學命題的邏輯完整性。；具體任務是「找出缺失條件。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理逆命題基本",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "1b30f01322e99514c02eabe97842382cd8eb8e7cb8fb65fde7ab39c4d76eecbe"
  },
  {
    "questionId": "u11-s015-v008",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-converse-basic",
    "lockedSkillOrder": 15,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三角形三邊為 a、b、c，且 c 最大。若 a²+b²=c²，以下推理何者最完整？",
    "givenConditions": [
      "c最大且平方等式成立。"
    ],
    "target": "選完整論證。",
    "choices": [
      "因等式有平方，所以三角形一定有兩個直角",
      "因c最大，所以不必檢查平方關係",
      "因a+b>c，所以一定是直角三角形",
      "由逆命題可知 c 所對的角為直角，因此此三角形是直角三角形"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：條件精確對應逆命題。 詳算檢查：完整推理應同時指出使用逆命題、直角位置與結論。 因此結果為「由逆命題可知 c 所對的角為直角，因此此三角形是直角三角形」。",
    "explanation": "完整推理應同時指出使用逆命題、直角位置與結論。",
    "steps": [
      "整理條件：c最大且平方等式成立。",
      "獨立推導：不參照選項，從題幹條件重新計算：條件精確對應逆命題。 詳算檢查：完整推理應同時指出使用逆命題、直角位置與結論。 因此結果為「由逆命題可知 c 所對的角為直角，因此此三角形是直角三角形」。",
      "核對目標：答案「由逆命題可知 c 所對的角為直角，因此此三角形是直角三角形」確實回應「選完整論證。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "因等式有平方，所以三角形一定有兩個直角",
        "truth": false,
        "reason": "三角形不可能有兩個直角。"
      },
      {
        "choice": "因c最大，所以不必檢查平方關係",
        "truth": false,
        "reason": "最長邊 alone 不足。"
      },
      {
        "choice": "因a+b>c，所以一定是直角三角形",
        "truth": false,
        "reason": "三角形不等式不足以判角。"
      },
      {
        "choice": "由逆命題可知 c 所對的角為直角，因此此三角形是直角三角形",
        "truth": true,
        "reason": "此選項符合目標「選完整論證。」；完整推理應同時指出使用逆命題、直角位置與結論。"
      }
    ],
    "misconceptionTarget": "只給結論而沒有合法依據。",
    "prerequisiteCheck": "需能使用先備技能 right-triangle-identify，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "重視證明鏈而非單一計算。；具體任務是「選完整論證。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理逆命題基本",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "6244141a0753f8811d273eae83242aa2d3a435b1bc565078fa1e47ba95dcbbf8"
  },
  {
    "questionId": "u11-s015-v009",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-converse-basic",
    "lockedSkillOrder": 15,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若一個三角形的三邊同乘正數 k 後滿足畢氏逆命題，原三角形是否也為直角三角形？",
    "givenConditions": [
      "k>0，三邊同比縮放。"
    ],
    "target": "判斷逆命題在縮放下是否保留。",
    "choices": [
      "否，縮放會改變角度",
      "只有k=1時才是",
      "無法判斷",
      "是"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：正比例縮放保留平方關係與角度。 詳算檢查：若(ka)²+(kb)²=(kc)²，除以k²（k>0）得a²+b²=c²，因此原三角形也直角。 因此結果為「是」。",
    "explanation": "若(ka)²+(kb)²=(kc)²，除以k²（k>0）得a²+b²=c²，因此原三角形也直角。",
    "steps": [
      "整理條件：k>0，三邊同比縮放。",
      "獨立推導：不參照選項，從題幹條件重新計算：正比例縮放保留平方關係與角度。 詳算檢查：若(ka)²+(kb)²=(kc)²，除以k²（k>0）得a²+b²=c²，因此原三角形也直角。 因此結果為「是」。",
      "核對目標：答案「是」確實回應「判斷逆命題在縮放下是否保留。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "否，縮放會改變角度",
        "truth": false,
        "reason": "相似縮放不改變角。"
      },
      {
        "choice": "只有k=1時才是",
        "truth": false,
        "reason": "平方等式可同除k²。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "代數可直接還原。"
      },
      {
        "choice": "是",
        "truth": true,
        "reason": "此選項符合目標「判斷逆命題在縮放下是否保留。」；若(ka)²+(kb)²=(kc)²，除以k²（k>0）得a²+b²=c²，因此原三角形也直角。"
      }
    ],
    "misconceptionTarget": "認為邊長改變就一定改變角。",
    "prerequisiteCheck": "需能使用先備技能 right-triangle-identify，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需用代數證明相似性質。；具體任務是「判斷逆命題在縮放下是否保留。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理逆命題基本",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "219783847141c6df31fc445818e96f34e6f319fa284edbfc0178ca7ea59685ca"
  },
  {
    "questionId": "u11-s015-v010",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-converse-basic",
    "lockedSkillOrder": 15,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "品管規範要求用三邊量測驗證直角。量得 0.6、0.8、1.0 公尺。正確報告為何？",
    "givenConditions": [
      "量測值視為規格中的精確值。"
    ],
    "target": "撰寫品管判定。",
    "choices": [
      "只因三邊有小數，不能判定",
      "平方關係成立，可判定為直角",
      "只因0.6+0.8>1.0，所以是直角",
      "看起來接近直角，但沒有數學證據"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：量測值形成3-4-5的0.2倍。 詳算檢查：0.6²+0.8²=0.36+0.64=1=1.0²，依逆命題判定。 因此結果為「平方關係成立，可判定為直角」。",
    "explanation": "0.6²+0.8²=0.36+0.64=1=1.0²，依逆命題判定。",
    "steps": [
      "整理條件：量測值視為規格中的精確值。",
      "獨立推導：不參照選項，從題幹條件重新計算：量測值形成3-4-5的0.2倍。 詳算檢查：0.6²+0.8²=0.36+0.64=1=1.0²，依逆命題判定。 因此結果為「平方關係成立，可判定為直角」。",
      "核對目標：答案「平方關係成立，可判定為直角」確實回應「撰寫品管判定。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "只因三邊有小數，不能判定",
        "truth": false,
        "reason": "小數不影響定理。"
      },
      {
        "choice": "平方關係成立，可判定為直角",
        "truth": true,
        "reason": "此選項符合目標「撰寫品管判定。」；0.6²+0.8²=0.36+0.64=1=1.0²，依逆命題判定。"
      },
      {
        "choice": "只因0.6+0.8>1.0，所以是直角",
        "truth": false,
        "reason": "此條件只保證成三角形。"
      },
      {
        "choice": "看起來接近直角，但沒有數學證據",
        "truth": false,
        "reason": "平方計算就是證據。"
      }
    ],
    "misconceptionTarget": "把三角形不等式當直角證據。",
    "prerequisiteCheck": "需能使用先備技能 right-triangle-identify，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "三邊同為公尺。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "將逆命題用於規範證據。；具體任務是「撰寫品管判定。」。",
    "literacyContextNecessity": "品管要求「驗證」而非目測，必須使用平方關係。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理逆命題基本",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "eaa490beb3eaab8c986f380c9906ac719e11958532e75f70e97b796e5817c93d"
  },
  {
    "questionId": "u11-s015-v011",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-converse-basic",
    "lockedSkillOrder": 15,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "施工員量得角框三邊 60、80、101 公分。能否依逆命題判為直角？",
    "givenConditions": [
      "無誤差容許資訊。"
    ],
    "target": "判斷是否能下直角結論。",
    "choices": [
      "可以，因接近60、80、100",
      "可以，因60+80>101",
      "不能，因60²+80²≠101²",
      "不能，因三邊不能成三角形"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：逆命題要求等式精確成立；題目未提供容許誤差。 詳算檢查：60²+80²=10000，而101²=10201，不相等。 因此結果為「不能，因60²+80²≠101²」。",
    "explanation": "60²+80²=10000，而101²=10201，不相等。",
    "steps": [
      "整理條件：無誤差容許資訊。",
      "獨立推導：不參照選項，從題幹條件重新計算：逆命題要求等式精確成立；題目未提供容許誤差。 詳算檢查：60²+80²=10000，而101²=10201，不相等。 因此結果為「不能，因60²+80²≠101²」。",
      "核對目標：答案「不能，因60²+80²≠101²」確實回應「判斷是否能下直角結論。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "可以，因接近60、80、100",
        "truth": false,
        "reason": "近似不等於精確成立。"
      },
      {
        "choice": "可以，因60+80>101",
        "truth": false,
        "reason": "只能證明可成三角形。"
      },
      {
        "choice": "不能，因60²+80²≠101²",
        "truth": true,
        "reason": "此選項符合目標「判斷是否能下直角結論。」；60²+80²=10000，而101²=10201，不相等。"
      },
      {
        "choice": "不能，因三邊不能成三角形",
        "truth": false,
        "reason": "60+80>101，可成三角形。"
      }
    ],
    "misconceptionTarget": "把接近畢氏數組當成相等。",
    "prerequisiteCheck": "需能使用先備技能 right-triangle-identify，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "三邊同為公分。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "強調逆命題的精確條件。；具體任務是「判斷是否能下直角結論。」。",
    "literacyContextNecessity": "施工判定需遵守規範，沒有誤差範圍就不能自行近似。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理逆命題基本",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "ab578921a243be6343145da4600613aae5a7c4fadc858ca473442ce4c573f1a2"
  },
  {
    "questionId": "u11-s015-v012",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-converse-basic",
    "lockedSkillOrder": 15,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "軟體收到三邊資料後先排序，再檢查「最小邊平方+中間邊平方=最大邊平方」。排序步驟的主要目的為何？",
    "givenConditions": [
      "軟體判定任意輸入順序。"
    ],
    "target": "說明演算法設計。",
    "choices": [
      "確保等式右側使用斜邊候選",
      "讓數字看起來整齊",
      "減少三邊總和",
      "保證任何三角形都通過"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：不排序時若錯把短邊放右側，可能做出錯誤判定。 詳算檢查：逆命題需把最大邊視為斜邊候選；排序可防止邊角色放錯。 因此結果為「確保等式右側使用斜邊候選」。",
    "explanation": "逆命題需把最大邊視為斜邊候選；排序可防止邊角色放錯。",
    "steps": [
      "整理條件：軟體判定任意輸入順序。",
      "獨立推導：不參照選項，從題幹條件重新計算：不排序時若錯把短邊放右側，可能做出錯誤判定。 詳算檢查：逆命題需把最大邊視為斜邊候選；排序可防止邊角色放錯。 因此結果為「確保等式右側使用斜邊候選」。",
      "核對目標：答案「確保等式右側使用斜邊候選」確實回應「說明演算法設計。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "確保等式右側使用斜邊候選",
        "truth": true,
        "reason": "此選項符合目標「說明演算法設計。」；逆命題需把最大邊視為斜邊候選；排序可防止邊角色放錯。"
      },
      {
        "choice": "讓數字看起來整齊",
        "truth": false,
        "reason": "不是數學目的。"
      },
      {
        "choice": "減少三邊總和",
        "truth": false,
        "reason": "排序不改變總和。"
      },
      {
        "choice": "保證任何三角形都通過",
        "truth": false,
        "reason": "排序不會改變是否成立。"
      }
    ],
    "misconceptionTarget": "以為公式中三個位置可以任意交換。",
    "prerequisiteCheck": "需能使用先備技能 right-triangle-identify，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需把幾何條件轉成可靠程序。；具體任務是「說明演算法設計。」。",
    "literacyContextNecessity": "輸入順序不固定，因此排序是防錯所必需。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "畢氏定理逆命題基本",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "bc0c3e0f74dc65b4152abf4ee25482b416421acc4fadcfa44a108a64cd5041fe"
  },
  {
    "questionId": "u11-s016-v001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-literacy",
    "skillId": "root-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一塊正方形感測板面積為 50 平方公分。其邊長的精確值為何？",
    "givenConditions": [
      "正方形面積50。"
    ],
    "target": "求精確邊長。",
    "choices": [
      "25公分",
      "10√5公分",
      "√25公分",
      "5√2 公分"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：由面積開平方並提出25。 詳算檢查：邊長=√50=5√2公分。 因此結果為「5√2 公分」。",
    "explanation": "邊長=√50=5√2公分。",
    "steps": [
      "整理條件：正方形面積50。",
      "獨立推導：不參照選項，從題幹條件重新計算：由面積開平方並提出25。 詳算檢查：邊長=√50=5√2公分。 因此結果為「5√2 公分」。",
      "核對目標：答案「5√2 公分」確實回應「求精確邊長。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "25公分",
        "truth": false,
        "reason": "把面積除以2。"
      },
      {
        "choice": "10√5公分",
        "truth": false,
        "reason": "化簡錯誤。"
      },
      {
        "choice": "√25公分",
        "truth": false,
        "reason": "被開方數錯誤。"
      },
      {
        "choice": "5√2 公分",
        "truth": true,
        "reason": "此選項符合目標「求精確邊長。」；邊長=√50=5√2公分。"
      }
    ],
    "misconceptionTarget": "面積與邊長單位或運算混淆。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-converse-basic，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "平方公分開平方為公分。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "基本情境中的根式化簡。；具體任務是「求精確邊長。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根素養題",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "3dd7723527b8c5ea7ea605e07390c4849cf6311ae605c3076728fc1517cbf6f7"
  },
  {
    "questionId": "u11-s016-v002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-literacy",
    "skillId": "root-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "表格記錄某正方形面積為 81 平方公尺。邊長欄應填多少？",
    "givenConditions": [
      "表格欄位是邊長。"
    ],
    "target": "填入正長度。",
    "choices": [
      "±9公尺",
      "40.5公尺",
      "9 公尺",
      "81公尺"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：完全平方數直接開平方。 詳算檢查：√81=9，長度取正。 因此結果為「9 公尺」。",
    "explanation": "√81=9，長度取正。",
    "steps": [
      "整理條件：表格欄位是邊長。",
      "獨立推導：不參照選項，從題幹條件重新計算：完全平方數直接開平方。 詳算檢查：√81=9，長度取正。 因此結果為「9 公尺」。",
      "核對目標：答案「9 公尺」確實回應「填入正長度。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "±9公尺",
        "truth": false,
        "reason": "實際長度不取負。"
      },
      {
        "choice": "40.5公尺",
        "truth": false,
        "reason": "誤除以2。"
      },
      {
        "choice": "9 公尺",
        "truth": true,
        "reason": "此選項符合目標「填入正長度。」；√81=9，長度取正。"
      },
      {
        "choice": "81公尺",
        "truth": false,
        "reason": "未開平方。"
      }
    ],
    "misconceptionTarget": "在實際量中保留負根。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-converse-basic，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "答案為公尺。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "完全平方的直接資料解讀。；具體任務是「填入正長度。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根素養題",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "123eb8156b321505ba7f55b6198515f465e57ad7f240440696ddf2240d3ff90a"
  },
  {
    "questionId": "u11-s016-v003",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-literacy",
    "skillId": "root-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某路徑水平 3 格、垂直 4 格，每格 2 公尺。兩端直線距離為何？",
    "givenConditions": [
      "每格2公尺。"
    ],
    "target": "求實際距離。",
    "choices": [
      "10 公尺",
      "7公尺",
      "5公尺",
      "14公尺"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：先用3-4-5，再換算每格2公尺。 詳算檢查：圖上直線距離5格，實際5×2=10公尺。 因此結果為「10 公尺」。",
    "explanation": "圖上直線距離5格，實際5×2=10公尺。",
    "steps": [
      "整理條件：每格2公尺。",
      "獨立推導：不參照選項，從題幹條件重新計算：先用3-4-5，再換算每格2公尺。 詳算檢查：圖上直線距離5格，實際5×2=10公尺。 因此結果為「10 公尺」。",
      "核對目標：答案「10 公尺」確實回應「求實際距離。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "10 公尺",
        "truth": true,
        "reason": "此選項符合目標「求實際距離。」；圖上直線距離5格，實際5×2=10公尺。"
      },
      {
        "choice": "7公尺",
        "truth": false,
        "reason": "只加格數未依直線距離。"
      },
      {
        "choice": "5公尺",
        "truth": false,
        "reason": "只算格數未乘比例。"
      },
      {
        "choice": "14公尺",
        "truth": false,
        "reason": "折線格數乘比例。"
      }
    ],
    "misconceptionTarget": "混淆折線路程與直線距離。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-converse-basic，本題未要求未來單元知識。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "格數乘公尺/格。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "基本兩階段素養題。；具體任務是「求實際距離。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根素養題",
      "basic"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "061421ddcfe8adc97ec44f63f39f9b375bc6c12ef95bb18d6d93caff4a07aada"
  },
  {
    "questionId": "u11-s016-v004",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-literacy",
    "skillId": "root-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "材料表列出兩種桿長 A=√72 公分、B=8 公分。若需較長者，應選哪一種？",
    "givenConditions": [
      "兩桿單位相同。"
    ],
    "target": "選較長材料。",
    "choices": [
      "B",
      "A",
      "兩者相同",
      "資料不足"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：正長度可比較平方。 詳算檢查：A=6√2，平方72；B平方64，所以A較長。 因此結果為「A」。",
    "explanation": "A=6√2，平方72；B平方64，所以A較長。",
    "steps": [
      "整理條件：兩桿單位相同。",
      "獨立推導：不參照選項，從題幹條件重新計算：正長度可比較平方。 詳算檢查：A=6√2，平方72；B平方64，所以A較長。 因此結果為「A」。",
      "核對目標：答案「A」確實回應「選較長材料。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "B",
        "truth": false,
        "reason": "√72約8.49>8。"
      },
      {
        "choice": "A",
        "truth": true,
        "reason": "此選項符合目標「選較長材料。」；A=6√2，平方72；B平方64，所以A較長。"
      },
      {
        "choice": "兩者相同",
        "truth": false,
        "reason": "72≠64。"
      },
      {
        "choice": "資料不足",
        "truth": false,
        "reason": "可平方比較。"
      }
    ],
    "misconceptionTarget": "看到根式就用粗估錯判。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-converse-basic，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "均為公分。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "精確比較根式與整數。；具體任務是「選較長材料。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根素養題",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "89267e3d1299377b060fb36c2df4872b0974cdcbccee98a41d36727bae415a85"
  },
  {
    "questionId": "u11-s016-v005",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-literacy",
    "skillId": "root-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "figure",
    "figureId": "fig-u11-s016-screen-diagonal",
    "drawingSpecReference": "units/u11/s016/drawing-specs.jsonl#fig-u11-s016-screen-diagonal",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "方形螢幕邊長 12 公分，保護膜對角線至少需多長？",
    "givenConditions": [
      "螢幕為正方形。"
    ],
    "target": "求最小對角覆蓋長度。",
    "choices": [
      "24公分",
      "144√2公分",
      "12√2 公分",
      "√24公分"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：「至少」表示膜沿直線覆蓋完整對角。 詳算檢查：正方形對角線=√(12²+12²)=12√2公分。 因此結果為「12√2 公分」。",
    "explanation": "正方形對角線=√(12²+12²)=12√2公分。",
    "steps": [
      "整理條件：螢幕為正方形。",
      "獨立推導：不參照選項，從題幹條件重新計算：「至少」表示膜沿直線覆蓋完整對角。 詳算檢查：正方形對角線=√(12²+12²)=12√2公分。 因此結果為「12√2 公分」。",
      "核對目標：答案「12√2 公分」確實回應「求最小對角覆蓋長度。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "24公分",
        "truth": false,
        "reason": "直接相加兩邊。"
      },
      {
        "choice": "144√2公分",
        "truth": false,
        "reason": "平方後未開根。"
      },
      {
        "choice": "12√2 公分",
        "truth": true,
        "reason": "此選項符合目標「求最小對角覆蓋長度。」；正方形對角線=√(12²+12²)=12√2公分。"
      },
      {
        "choice": "√24公分",
        "truth": false,
        "reason": "未平方。"
      }
    ],
    "misconceptionTarget": "把周長概念混入。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-converse-basic，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "答案為公分。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "標準幾何與精確根式。；具體任務是「求最小對角覆蓋長度。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根素養題",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "06ed57179b245eac775eeb682e3fc30ceb320f31279c9ef610f75696de5369f6"
  },
  {
    "questionId": "u11-s016-v006",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-literacy",
    "skillId": "root-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "檢測報告要求 √90 取到小數第一位。應填多少？",
    "givenConditions": [
      "規格要求一位小數。"
    ],
    "target": "填報近似值。",
    "choices": [
      "9.5",
      "9.4",
      "9.0",
      "45.0"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：9.45²=89.3025<90，所以實值超過進位門檻9.45。 詳算檢查：√90≈9.4868，取到一位為9.5。 因此結果為「9.5」。",
    "explanation": "√90≈9.4868，取到一位為9.5。",
    "steps": [
      "整理條件：規格要求一位小數。",
      "獨立推導：不參照選項，從題幹條件重新計算：9.45²=89.3025<90，所以實值超過進位門檻9.45。 詳算檢查：√90≈9.4868，取到一位為9.5。 因此結果為「9.5」。",
      "核對目標：答案「9.5」確實回應「填報近似值。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "9.5",
        "truth": true,
        "reason": "此選項符合目標「填報近似值。」；√90≈9.4868，取到一位為9.5。"
      },
      {
        "choice": "9.4",
        "truth": false,
        "reason": "√90約9.487，四捨五入為9.5。"
      },
      {
        "choice": "9.0",
        "truth": false,
        "reason": "只用下方完全平方81。"
      },
      {
        "choice": "45.0",
        "truth": false,
        "reason": "誤除以2。"
      }
    ],
    "misconceptionTarget": "只找整數區間未完成四捨五入。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-converse-basic，本題未要求未來單元知識。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需按精度判斷進位。；具體任務是「填報近似值。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根素養題",
      "standard"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "d5082e2c28c86175827009f0482035a7bf906f4469c08324eb6e22f7338c7db2"
  },
  {
    "questionId": "u11-s016-v007",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-literacy",
    "skillId": "root-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩個正方形面積分別為 32 與 50 平方公分。它們邊長相差多少？",
    "givenConditions": [
      "兩正方形邊長取正。"
    ],
    "target": "求邊長差。",
    "choices": [
      "18公分",
      "√2 公分",
      "2√2公分",
      "9√2公分"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：先各自開平方化簡，再求長度差。 詳算檢查：邊長分別4√2與5√2，相差√2公分。 因此結果為「√2 公分」。",
    "explanation": "邊長分別4√2與5√2，相差√2公分。",
    "steps": [
      "整理條件：兩正方形邊長取正。",
      "獨立推導：不參照選項，從題幹條件重新計算：先各自開平方化簡，再求長度差。 詳算檢查：邊長分別4√2與5√2，相差√2公分。 因此結果為「√2 公分」。",
      "核對目標：答案「√2 公分」確實回應「求邊長差。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "18公分",
        "truth": false,
        "reason": "直接相減面積。"
      },
      {
        "choice": "√2 公分",
        "truth": true,
        "reason": "此選項符合目標「求邊長差。」；邊長分別4√2與5√2，相差√2公分。"
      },
      {
        "choice": "2√2公分",
        "truth": false,
        "reason": "邊長化簡後相減錯。"
      },
      {
        "choice": "9√2公分",
        "truth": false,
        "reason": "把係數相加。"
      }
    ],
    "misconceptionTarget": "直接比較面積差或係數錯誤。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-converse-basic，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "平方公分轉為公分。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "整合兩次化簡與同類根式相減。；具體任務是「求邊長差。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根素養題",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "f7c21ef03084df579d141f1631b078f9201aa45b1eb77d06c228ea3cc52b9f68"
  },
  {
    "questionId": "u11-s016-v008",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-literacy",
    "skillId": "root-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "地圖上 A(−1,2)、B(5,10)，每單位 3 公里。A、B 實際直線距離是多少？",
    "givenConditions": [
      "每單位3公里。"
    ],
    "target": "求實際距離。",
    "choices": [
      "10公里",
      "42公里",
      "90公里",
      "30 公里"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：先用6-8-10，再乘3。 詳算檢查：座標差6與8，距離10單位，實際30公里。 因此結果為「30 公里」。",
    "explanation": "座標差6與8，距離10單位，實際30公里。",
    "steps": [
      "整理條件：每單位3公里。",
      "獨立推導：不參照選項，從題幹條件重新計算：先用6-8-10，再乘3。 詳算檢查：座標差6與8，距離10單位，實際30公里。 因此結果為「30 公里」。",
      "核對目標：答案「30 公里」確實回應「求實際距離。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "10公里",
        "truth": false,
        "reason": "只算座標單位未換比例。"
      },
      {
        "choice": "42公里",
        "truth": false,
        "reason": "把水平垂直差相加後乘3。"
      },
      {
        "choice": "90公里",
        "truth": false,
        "reason": "比例多乘一次。"
      },
      {
        "choice": "30 公里",
        "truth": true,
        "reason": "此選項符合目標「求實際距離。」；座標差6與8，距離10單位，實際30公里。"
      }
    ],
    "misconceptionTarget": "負坐標與比例換算出錯。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-converse-basic，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "10單位×3公里/單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "含跨象限和比例尺。；具體任務是「求實際距離。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根素養題",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "0e0276d28552576255520c51122b80c1abb5951a57af0f1d94118d2695e52981"
  },
  {
    "questionId": "u11-s016-v009",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-literacy",
    "skillId": "root-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個三角形三邊測得 √20、√45、√65 公分。它是否為直角三角形？",
    "givenConditions": [
      "三邊皆為正且可成三角形。"
    ],
    "target": "使用逆命題判定。",
    "choices": [
      "否，因三邊皆為根式",
      "是",
      "否，因20+45≠65",
      "無法判斷"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照選項，從題幹條件重新計算：根式邊平方後直接得到被開方數。 詳算檢查：兩短邊平方20與45，相加65，等於最長邊平方，所以是。 因此結果為「是」。",
    "explanation": "兩短邊平方20與45，相加65，等於最長邊平方，所以是。",
    "steps": [
      "整理條件：三邊皆為正且可成三角形。",
      "獨立推導：不參照選項，從題幹條件重新計算：根式邊平方後直接得到被開方數。 詳算檢查：兩短邊平方20與45，相加65，等於最長邊平方，所以是。 因此結果為「是」。",
      "核對目標：答案「是」確實回應「使用逆命題判定。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "否，因三邊皆為根式",
        "truth": false,
        "reason": "根式邊可平方。"
      },
      {
        "choice": "是",
        "truth": true,
        "reason": "此選項符合目標「使用逆命題判定。」；兩短邊平方20與45，相加65，等於最長邊平方，所以是。"
      },
      {
        "choice": "否，因20+45≠65",
        "truth": false,
        "reason": "其實20+45=65。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "平方資料直接足夠。"
      }
    ],
    "misconceptionTarget": "被形式嚇到而未做簡單平方。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-converse-basic，本題未要求未來單元知識。",
    "estimatedTimeSec": 150,
    "unitAndRoundingCheck": "三邊同為公分。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "整合根式與直角判定。；具體任務是「使用逆命題判定。」。",
    "literacyContextNecessity": null,
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根素養題",
      "advanced"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "0845433005595f4627785c5de7c929d62ab770e178fc0881f3312f27a578141a"
  },
  {
    "questionId": "u11-s016-v010",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-literacy",
    "skillId": "root-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "公園有兩條路：甲路先向東 6 公里再向北 8 公里；乙路是兩端直線但施工每公里成本為甲路的 1.3 倍。哪條路總施工成本較低？",
    "givenConditions": [
      "兩路端點相同，成本倍率明確。"
    ],
    "target": "比較總成本。",
    "choices": [
      "甲路",
      "兩者相同",
      "資料不足",
      "乙路"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照選項，從題幹條件重新計算：先由畢氏定理求乙路10，再比較14與10×1.3。 詳算檢查：甲成本以每公里1單位算為14；乙長10公里，每公里1.3單位，成本13，所以乙較低。 因此結果為「乙路」。",
    "explanation": "甲成本以每公里1單位算為14；乙長10公里，每公里1.3單位，成本13，所以乙較低。",
    "steps": [
      "整理條件：兩路端點相同，成本倍率明確。",
      "獨立推導：不參照選項，從題幹條件重新計算：先由畢氏定理求乙路10，再比較14與10×1.3。 詳算檢查：甲成本以每公里1單位算為14；乙長10公里，每公里1.3單位，成本13，所以乙較低。 因此結果為「乙路」。",
      "核對目標：答案「乙路」確實回應「比較總成本。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "甲路",
        "truth": false,
        "reason": "甲長14公里，乙長10公里；乙成本係數後為13，仍較低。"
      },
      {
        "choice": "兩者相同",
        "truth": false,
        "reason": "14與13不同。"
      },
      {
        "choice": "資料不足",
        "truth": false,
        "reason": "長度與單價倍率都已給出。"
      },
      {
        "choice": "乙路",
        "truth": true,
        "reason": "此選項符合目標「比較總成本。」；甲成本以每公里1單位算為14；乙長10公里，每公里1.3單位，成本13，所以乙較低。"
      }
    ],
    "misconceptionTarget": "只比較路長而不乘不同單價，或只比較單價。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-converse-basic，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "可用相對成本單位比較，無須實際貨幣。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需要整合距離與比例成本。；具體任務是「比較總成本。」。",
    "literacyContextNecessity": "每公里成本不同是決策不可省略的條件。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根素養題",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "a898bc037d65d1b66a0251391178082fc2df3435b16f8c9bd0e04ef601711fe6"
  },
  {
    "questionId": "u11-s016-v011",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-literacy",
    "skillId": "root-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "倉庫要搬運長 2.4 公尺的直桿通過寬 1.4 公尺、高 2.0 公尺的矩形門框。只考慮門框平面內斜放，是否可能通過？",
    "givenConditions": [
      "忽略厚度，限門框平面內。"
    ],
    "target": "判斷能否通過。",
    "choices": [
      "可能，因門框對角線約2.44公尺",
      "不可能，因桿長大於門寬",
      "不可能，因桿長大於門高",
      "一定可能，且不必計算"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照選項，從題幹條件重新計算：比較桿長與門框內最大直線距離。 詳算檢查：門框對角線=√(1.4²+2.0²)=√5.96≈2.441>2.4，所以在理想平面模型下可能。 因此結果為「可能，因門框對角線約2.44公尺」。",
    "explanation": "門框對角線=√(1.4²+2.0²)=√5.96≈2.441>2.4，所以在理想平面模型下可能。",
    "steps": [
      "整理條件：忽略厚度，限門框平面內。",
      "獨立推導：不參照選項，從題幹條件重新計算：比較桿長與門框內最大直線距離。 詳算檢查：門框對角線=√(1.4²+2.0²)=√5.96≈2.441>2.4，所以在理想平面模型下可能。 因此結果為「可能，因門框對角線約2.44公尺」。",
      "核對目標：答案「可能，因門框對角線約2.44公尺」確實回應「判斷能否通過。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "可能，因門框對角線約2.44公尺",
        "truth": true,
        "reason": "此選項符合目標「判斷能否通過。」；門框對角線=√(1.4²+2.0²)=√5.96≈2.441>2.4，所以在理想平面模型下可能。"
      },
      {
        "choice": "不可能，因桿長大於門寬",
        "truth": false,
        "reason": "可斜放，需比較對角線。"
      },
      {
        "choice": "不可能，因桿長大於門高",
        "truth": false,
        "reason": "可使用門框對角線。"
      },
      {
        "choice": "一定可能，且不必計算",
        "truth": false,
        "reason": "仍須確認對角線足夠長。"
      }
    ],
    "misconceptionTarget": "只看寬或高單一尺寸。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-converse-basic，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "所有長度以公尺。",
    "ambiguityAndBoundaryAudit": "結論限理想化平面模型，不考慮桿粗、門框厚度與轉動空間。",
    "difficultyReason": "建模條件與小數比較皆必要。；具體任務是「判斷能否通過。」。",
    "literacyContextNecessity": "「只考慮平面內」界定了可用對角線作最大長度。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根素養題",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "5cac45b0b60a5802a633717cd0c713da84ebaf242feaba5c02518f83d3f4333a"
  },
  {
    "questionId": "u11-s016-v012",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-literacy",
    "skillId": "root-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "研究表列三個估計值：√48、6.9、7.0。由小到大排序為何？",
    "givenConditions": [
      "三值皆非負。"
    ],
    "target": "排序資料表數值。",
    "choices": [
      "√48<6.9<7.0",
      "6.9<7.0<√48",
      "6.9<√48<7.0",
      "三者相等"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照選項，從題幹條件重新計算：用兩個平方界線精確夾住根式。 詳算檢查：6.9²=47.61<48<49=7²，所以6.9<√48<7。 因此結果為「6.9<√48<7.0」。",
    "explanation": "6.9²=47.61<48<49=7²，所以6.9<√48<7。",
    "steps": [
      "整理條件：三值皆非負。",
      "獨立推導：不參照選項，從題幹條件重新計算：用兩個平方界線精確夾住根式。 詳算檢查：6.9²=47.61<48<49=7²，所以6.9<√48<7。 因此結果為「6.9<√48<7.0」。",
      "核對目標：答案「6.9<√48<7.0」確實回應「排序資料表數值。」。"
    ],
    "optionAnalysis": [
      {
        "choice": "√48<6.9<7.0",
        "truth": false,
        "reason": "6.9²=47.61<48，所以6.9較小。"
      },
      {
        "choice": "6.9<7.0<√48",
        "truth": false,
        "reason": "√48<√49=7。"
      },
      {
        "choice": "6.9<√48<7.0",
        "truth": true,
        "reason": "此選項符合目標「排序資料表數值。」；6.9²=47.61<48<49=7²，所以6.9<√48<7。"
      },
      {
        "choice": "三者相等",
        "truth": false,
        "reason": "平方值不同。"
      }
    ],
    "misconceptionTarget": "只用粗略近似造成次序錯誤。",
    "prerequisiteCheck": "需能使用先備技能 pythagorean-converse-basic，本題未要求未來單元知識。",
    "estimatedTimeSec": 180,
    "unitAndRoundingCheck": "無單位衝突；若有量值已在選項保留題目單位。",
    "ambiguityAndBoundaryAudit": "題意限定於實數與國中會考範圍，條件足以得到唯一答案。",
    "difficultyReason": "需雙邊平方比較。；具體任務是「排序資料表數值。」。",
    "literacyContextNecessity": "資料排序是後續分析所需，不能只給近似相等。",
    "tags": [
      "數與量",
      "平方根與畢氏定理",
      "平方根素養題",
      "literacy"
    ],
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "oldProductionRuntimeModified": false
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "53c2aa4410c70b16f56212a9ba31cbd9065f233caf3d5bca02093f300b4a8f41"
  }
];
