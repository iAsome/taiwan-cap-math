// Emitted only from reviewed immutable source.
export default {
  "lecture": {
    "lectureId": "u15-s002-lecture",
    "unitId": "u15",
    "numericUnitId": 15,
    "unitTitle": "函數及其圖形",
    "topicId": "u15-basics",
    "skillId": "function-value",
    "skillSlot": "s002",
    "skillTitle": "函數值",
    "order": 2,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "prerequisites": [
      {
        "skillId": "function-definition",
        "title": "函數定義",
        "requiredLevel": "能判斷每個合法輸入是否恰有一個輸出，並能由公式、表格或序對找出指定輸入的對應結果。",
        "bridge": "函數定義只回答「是不是函數」；本節進一步把指定輸入放入規則，算出那個輸入唯一對應的函數值。"
      }
    ],
    "learningGoals": [
      "把指定輸入正確代入函數規則",
      "分辨函數值與輸入值",
      "處理負數、括號與多步運算"
    ],
    "vocabulary": [
      {
        "term": "函數值",
        "meaning": "指定輸入後得到的輸出"
      },
      {
        "term": "代入",
        "meaning": "用指定數值取代規則中的自變數"
      },
      {
        "term": "對應值",
        "meaning": "某輸入所得到的輸出"
      }
    ],
    "conceptDevelopment": [
      "若規則是 f(x)=2x+3，當輸入 x=4 時，就把式中的 x 換成 4：f(4)=2×4+3=11。括號內的 4 是輸入，計算後的 11 才是函數值。",
      "輸入是負數時要用括號保護符號。例如 g(x)=-3x+2，則 g(-2)=-3×(-2)+2=8；若漏掉括號，容易把乘法符號算錯。"
    ],
    "definitionsAndMeaning": "若規則是 f(x)=2x+3，當輸入 x=4 時，就把式中的 x 換成 4：f(4)=2×4+3=11。括號內的 4 是輸入，計算後的 11 才是函數值。",
    "formulasAndConditions": [
      "若 f(x)=ax+b，則 f(c)=a×c+b；c 可以是正數、0 或負數，但必須符合題目定義域。",
      "先完成括號與乘法，再做加減；若題目給表格，直接找指定輸入所在列的輸出。"
    ],
    "invalidUseCases": [
      "把 f(3) 看成 f×3。",
      "代入負數時省略括號。",
      "只替換式子中的部分 x。"
    ],
    "stepByStepMethod": [
      "圈出指定輸入。",
      "把規則中的每個自變數全部換成該輸入，負數先加括號。",
      "依運算順序計算。",
      "檢查所得是輸出而不是新的輸入。"
    ],
    "workedExamples": [
      {
        "exampleId": "s002-ex01",
        "title": "一次式",
        "prompt": "已知 f(x)=3x-2，計算 f(5)，並寫出代入與運算過程。",
        "solution": "f(x)=3x-2，f(5)=15-2=13。",
        "level": "basic"
      },
      {
        "exampleId": "s002-ex02",
        "title": "負數輸入",
        "prompt": "已知 g(x)=-4x+1，求 g(-3)。負數輸入應如何放入公式？",
        "solution": "把 -3 整體代入：g(-3)=-4×(-3)+1=12+1=13。",
        "level": "standard"
      },
      {
        "exampleId": "s002-ex03",
        "title": "由表格讀值",
        "prompt": "函數表中 x=4 的同一列記錄 y=-1。求 f(4)，並說明應讀哪一欄。",
        "solution": "表中 x=4 的那一列 y=-1，所以 f(4)=-1。",
        "level": "advanced"
      },
      {
        "exampleId": "s002-ex04",
        "title": "反求輸入",
        "prompt": "已知 h(x)=2x+1 且 h(a)=9，求輸入 a。",
        "solution": "h(x)=2x+1 且 h(a)=9，則 2a+1=9，所以 a=4。",
        "level": "connection"
      }
    ],
    "commonMistakes": [
      {
        "mistakeId": "s002-m01",
        "wrongReasoning": "把 f(5) 寫成 5f。",
        "correction": "f(5) 是函數 f 在輸入 5 時的輸出，不是字母 f 與 5 相乘。"
      },
      {
        "mistakeId": "s002-m02",
        "wrongReasoning": "把 g(-3)=-4×(-3)+1 錯寫成 -4×3+1。",
        "correction": "括號內的 -3 是完整輸入；負數乘負數為正，所以乘積是 12。"
      },
      {
        "mistakeId": "s002-m03",
        "wrongReasoning": "代入後改變原有運算順序。",
        "correction": "代入只替換變數，不改變原式的括號與先乘除後加減順序。"
      },
      {
        "mistakeId": "s002-m04",
        "wrongReasoning": "把 f(a)=9 直接說 a=9。",
        "correction": "f(a)=9 表示輸出為 9，仍須把 f 的公式展開成方程後才能求 a。"
      },
      {
        "mistakeId": "s002-m05",
        "wrongReasoning": "表格讀錯列或讀成輸入。",
        "correction": "表格中先在輸入欄找指定值，再沿同一列讀輸出欄，不可把輸入值本身當答案。"
      }
    ],
    "selfChecks": [
      {
        "prompt": "f(x)=x-7，f(10)=？",
        "answer": "3"
      },
      {
        "prompt": "g(x)=-2x+1，g(-4)=？",
        "answer": "9"
      },
      {
        "prompt": "h(x)=3x，h(a)=12，a=？",
        "answer": "4"
      }
    ],
    "summary": "函數值就是指定輸入代入規則後的唯一輸出。",
    "previousSkillConnection": "function-definition",
    "nextSkillConnection": "function-input-output",
    "figureRefs": [],
    "accessibilityNotes": [],
    "lectureReview": {
      "reviewVersion": "human-lecture-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "decision": "pass",
      "reviewNote": "逐段人工重讀「函數值」講義：先備橋接已具體指出學生必須會做的前一步，四個例題均改成可獨立作答的完整題目；五個錯誤修正逐一對應本技能的符號、條件、坐標或情境限制。另核對所有公式只使用 U15 線型函數、常數函數或有限對應範圍，未預用未來單元方法。",
      "zeroFoundationCheck": "學生只需具備 能以自己的話說明「函數定義」並完成基本判斷或計算。",
      "capBoundaryCheck": "內容限國中會考線型函數與基本分段情境，未引入指數、對數、微積分或高中函數理論。"
    },
    "canonicalization": "sorted-keys-json-utf8-v1",
    "contentSha256": "c2394b3f7cb83113f42a4075d60e3b119b4c6f8416e10f5bc0daa3ac836e6b26"
  },
  "mcQuestions": [
    {
      "questionId": "u15-s002-mc01",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-value",
      "skillSlot": "s002",
      "skillTitle": "函數值",
      "difficulty": "basic",
      "type": "mc",
      "text": "f(x)=2x+3，則 f(4) 為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「計算一次函數的函數值」。",
      "target": "計算一次函數的函數值",
      "choices": [
        "8",
        "11",
        "10",
        "14"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，重新依題意處理：代入 4；先乘法得 8；加 3 得 11。因此得到「11」。",
      "explanation": "把 x=4 代入：2×4+3=11。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "代入 4"
        },
        {
          "step": 2,
          "work": "先乘法得 8"
        },
        {
          "step": 3,
          "work": "加 3 得 11"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "8",
          "truth": false,
          "reason": "只算 2×4，漏加常數。"
        },
        {
          "index": 1,
          "choice": "11",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；把 x=4 代入：2×4+3=11。"
        },
        {
          "index": 2,
          "choice": "10",
          "truth": false,
          "reason": "把 3 加成 2，或錯算 8+2。"
        },
        {
          "index": 3,
          "choice": "14",
          "truth": false,
          "reason": "誤把 2 與 3 相加後乘 4。"
        }
      ],
      "misconceptionTarget": "代入後漏算常數項",
      "prerequisiteCheck": "先備能力是「能判斷每個合法輸入是否恰有一個輸出，並能由公式、表格或序對找出指定輸入的對應結果。」本題將此能力用於「計算一次函數的函數值」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 90,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「計算一次函數的函數值」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 1 的「11」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「計算一次函數的函數值」只有題幹所述的一種解讀。",
      "difficultyReason": "單一步驟代入一次式，屬基礎。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "bf43fddf732ac282d6adf23a9402f5d72ea65cdcdde6a552ae9be531f120e3e0"
    },
    {
      "questionId": "u15-s002-mc02",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-value",
      "skillSlot": "s002",
      "skillTitle": "函數值",
      "difficulty": "basic",
      "type": "mc",
      "text": "g(x)=-3x-5，比較 g(-2) 與 g(0) 的大小，下列何者正確？",
      "givenConditions": "題目明示同一函數規則及兩個合法輸入 -2、0；比較對象是兩個輸出值，不需假設額外定義域。本題的條件審查焦點是「分別求出兩個一次函數值並比較大小」。",
      "target": "分別求出兩個一次函數值並比較大小",
      "choices": [
        "g(-2)<g(0)",
        "g(-2)=g(0)",
        "g(-2)>g(0)",
        "無法比較"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，分別計算：g(-2)=-3×(-2)-5=1，g(0)=-3×0-5=-5。因為 1>-5，所以 g(-2)>g(0)。",
      "explanation": "先各自求值：g(-2)=1、g(0)=-5；比較 1 與 -5，可得 g(-2)>g(0)。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "g(-2)=-3×(-2)-5=1",
          "reason": "以括號代入負數。"
        },
        {
          "step": 2,
          "work": "g(0)=-3×0-5=-5",
          "reason": "代入 0 時乘積為 0。"
        },
        {
          "step": 3,
          "work": "1>-5，所以 g(-2)>g(0)",
          "reason": "比較兩個函數值。"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "g(-2)<g(0)",
          "truth": false,
          "reason": "實際為 1>-5；此選項把負輸入的乘積符號判反。"
        },
        {
          "index": 1,
          "choice": "g(-2)=g(0)",
          "truth": false,
          "reason": "兩個函數值分別是 1 與 -5，並不相等。"
        },
        {
          "index": 2,
          "choice": "g(-2)>g(0)",
          "truth": true,
          "reason": "正確求得 g(-2)=1、g(0)=-5，且 1>-5。"
        },
        {
          "index": 3,
          "choice": "無法比較",
          "truth": false,
          "reason": "函數規則和兩個輸入均已給定，可以算出確定數值後比較。"
        }
      ],
      "misconceptionTarget": "只看輸入 -2<0 就誤判輸出大小，或負數代入時把負負乘法算錯。",
      "prerequisiteCheck": "先備能力是「能判斷每個合法輸入是否恰有一個輸出，並能由公式、表格或序對找出指定輸入的對應結果。」本題將此能力用於「分別求出兩個一次函數值並比較大小」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 105,
      "unitAndRoundingCheck": "「比較 g(-2) 與 g(0)」明確要求比較函數值，不是比較輸入；本題沒有計量單位或近似問題。針對「分別求出兩個一次函數值並比較大小」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目明示同一函數規則及兩個合法輸入 -2、0；比較對象是兩個輸出值，不需假設額外定義域。；獨立求得的兩值為 1 與 -5，因此只有大於關係成立；小於、等於及無法比較都與確定數值衝突。；「比較 g(-2) 與 g(0)」明確要求比較函數值，不是比較輸入；本題沒有計量單位或近似問題。邊界稽核另確認「分別求出兩個一次函數值並比較大小」只有題幹所述的一種解讀。",
      "difficultyReason": "要完成兩次短代入再比較結果，仍以基礎整數運算為主，但能力不同於單一函數值求值。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "e7b764bf13f33319214d480a46581a014f543e443a6939902d2edd88c16e873b"
    },
    {
      "questionId": "u15-s002-mc03",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-value",
      "skillSlot": "s002",
      "skillTitle": "函數值",
      "difficulty": "basic",
      "type": "mc",
      "text": "函數表如下：x=-1,0,3；f(x)=5,2,7。則 f(3) 為何？",
      "givenConditions": "題目以「表格配對順序為 (-1,5)、(0,2)、(3,7)。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由函數表讀值」。",
      "target": "由函數表讀值",
      "choices": [
        "3",
        "2",
        "5",
        "7"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用已存答案，重新依題意處理：定位輸入 3；讀同欄輸出；得到 7。因此得到「7」。",
      "explanation": "在 x=3 的欄（或列）找到對應輸出 7，因此 f(3)=7。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "定位輸入 3"
        },
        {
          "step": 2,
          "work": "讀同欄輸出"
        },
        {
          "step": 3,
          "work": "得到 7"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "3",
          "truth": false,
          "reason": "把輸入本身當函數值。"
        },
        {
          "index": 1,
          "choice": "2",
          "truth": false,
          "reason": "讀到 x=0 的輸出。"
        },
        {
          "index": 2,
          "choice": "5",
          "truth": false,
          "reason": "讀到 x=-1 的輸出。"
        },
        {
          "index": 3,
          "choice": "7",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；在 x=3 的欄（或列）找到對應輸出 7，因此 f(3)=7。"
        }
      ],
      "misconceptionTarget": "表格讀錯輸入欄",
      "prerequisiteCheck": "先備能力是「能判斷每個合法輸入是否恰有一個輸出，並能由公式、表格或序對找出指定輸入的對應結果。」本題將此能力用於「由函數表讀值」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 98,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由函數表讀值」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「表格配對順序為 (-1,5)、(0,2)、(3,7)。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 3 的「7」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由函數表讀值」只有題幹所述的一種解讀。",
      "difficultyReason": "直接由表讀取指定對應，屬基礎。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "ba8a1be4b6a0ec4a9bdc511eebc97444a8ff9a074c8de3468b2e01066eae5937"
    },
    {
      "questionId": "u15-s002-mc04",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-value",
      "skillSlot": "s002",
      "skillTitle": "函數值",
      "difficulty": "standard",
      "type": "mc",
      "text": "g(x)=-3x+2，則 g(-1)-g(1) 為何？",
      "givenConditions": "題目明確指定同一函數的兩個輸入值，並以減號固定運算順序，不存在交換次序的歧義。；只使用國中階段的函數代入、整數乘法與減去負數，未引入函數合成、反函數或其他高中延伸內容。本題的條件審查焦點是「計算兩個函數值的差」。",
      "target": "計算兩個函數值的差",
      "choices": [
        "6",
        "4",
        "5",
        "-6"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，重新依題意處理：先算 g(-1)=-3×(-1)+2=5；再算 g(1)=-3×1+2=-1；最後 5-(-1)=6，因此答案為 6。",
      "explanation": "分別代入兩個輸入值：g(-1)=5，g(1)=-1，所以 g(-1)-g(1)=5-(-1)=6。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "g(-1)=-3×(-1)+2=5",
          "reason": "先求第一個函數值。"
        },
        {
          "step": 2,
          "work": "g(1)=-3×1+2=-1",
          "reason": "再求第二個函數值。"
        },
        {
          "step": 3,
          "work": "g(-1)-g(1)=5-(-1)=6",
          "reason": "依題意求兩個函數值的差。"
        }
      ],
      "optionAnalysis": [
        {
          "choiceIndex": 0,
          "truth": true,
          "reason": "完整算出 g(-1)=5 與 g(1)=-1，並正確得到 5-(-1)=6。"
        },
        {
          "choiceIndex": 1,
          "truth": false,
          "reason": "只處理部分係數或輸入差，沒有分別求出兩個函數值。"
        },
        {
          "choiceIndex": 2,
          "truth": false,
          "reason": "只得到 g(-1)=5，漏掉題目還要求減去 g(1)。"
        },
        {
          "choiceIndex": 3,
          "truth": false,
          "reason": "把減去負數的符號處理錯誤，且將結果誤判為負數。"
        }
      ],
      "misconceptionTarget": "只計算一個函數值，或把減去負數錯當成減去正數。",
      "prerequisiteCheck": "先備能力是「能判斷每個合法輸入是否恰有一個輸出，並能由公式、表格或序對找出指定輸入的對應結果。」本題將此能力用於「計算兩個函數值的差」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 102,
      "unitAndRoundingCheck": "負輸入與減去負數都以括號明確標示，運算順序和符號邊界清楚，且本題沒有單位換算或近似值問題。針對「計算兩個函數值的差」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目明確指定同一函數的兩個輸入值，並以減號固定運算順序，不存在交換次序的歧義。；四個選項互異；只有 6 同時符合 g(-1)=5、g(1)=-1 與 5-(-1) 的計算。；只使用國中階段的函數代入、整數乘法與減去負數，未引入函數合成、反函數或其他高中延伸內容。；負輸入與減去負數都以括號明確標示，運算順序和符號邊界清楚，且本題沒有單位換算或近似值問題。邊界稽核另確認「計算兩個函數值的差」只有題幹所述的一種解讀。",
      "difficultyReason": "需先求兩個函數值，再正確處理減去負數，比單次代入多一層運算。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "33fdf83371c237d3b494e65398561315127cda31044de792950e4a0351dc7919"
    },
    {
      "questionId": "u15-s002-mc05",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-value",
      "skillSlot": "s002",
      "skillTitle": "函數值",
      "difficulty": "standard",
      "type": "mc",
      "text": "f(x)=2x-1，且 f(a)=9，則 a 為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由函數值反求輸入」。",
      "target": "由函數值反求輸入",
      "choices": [
        "4",
        "8",
        "5",
        "10"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，重新依題意處理：把 f(a)=9 改寫成 2a-1=9；移項得 2a=10；除以 2。因此得到「5」。",
      "explanation": "由 2a-1=9，得 2a=10，所以 a=5。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "把 f(a)=9 改寫成 2a-1=9"
        },
        {
          "step": 2,
          "work": "移項得 2a=10"
        },
        {
          "step": 3,
          "work": "除以 2"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "4",
          "truth": false,
          "reason": "漏把 -1 移項。"
        },
        {
          "index": 1,
          "choice": "8",
          "truth": false,
          "reason": "把輸出 9 當輸入減 1。"
        },
        {
          "index": 2,
          "choice": "5",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；由 2a-1=9，得 2a=10，所以 a=5。"
        },
        {
          "index": 3,
          "choice": "10",
          "truth": false,
          "reason": "只把 -1 移到右邊但不除 2。"
        }
      ],
      "misconceptionTarget": "把函數值等式直接當輸入",
      "prerequisiteCheck": "先備能力是「能判斷每個合法輸入是否恰有一個輸出，並能由公式、表格或序對找出指定輸入的對應結果。」本題將此能力用於「由函數值反求輸入」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 106,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由函數值反求輸入」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 2 的「5」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由函數值反求輸入」只有題幹所述的一種解讀。",
      "difficultyReason": "需建立並解一元一次方程式，屬標準。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "af53a65ea34b341e0ac8fe524512ea61069808a172bab08ad472a1bcfd183efb"
    },
    {
      "questionId": "u15-s002-mc06",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-value",
      "skillSlot": "s002",
      "skillTitle": "函數值",
      "difficulty": "standard",
      "type": "mc",
      "text": "h(x)=3x-2，則 h(2)+h(-2) 為何？",
      "givenConditions": "兩個輸入 2 與 -2 都可直接代入同一線型規則；題目只求兩個輸出的和，沒有隱含先後或範圍限制。本題的條件審查焦點是「計算兩個函數值的組合」。",
      "target": "計算兩個函數值的組合",
      "choices": [
        "0",
        "4",
        "-8",
        "-4"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用已存答案，分別計算 h(2)=3×2-2=4、h(-2)=3×(-2)-2=-8，再相加 4+(-8)=-4，因此答案為 -4。",
      "explanation": "兩個函數值要分開算：h(2)=4，h(-2)=-8，所以總和為 -4。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "h(2)=4",
          "reason": "代入正輸入 2。"
        },
        {
          "step": 2,
          "work": "h(-2)=-8",
          "reason": "代入負輸入並保留括號。"
        },
        {
          "step": 3,
          "work": "4+(-8)=-4",
          "reason": "相加兩個輸出。"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "0",
          "truth": false,
          "reason": "誤以為正負輸入的函數值一定互相抵消，忽略常數項。"
        },
        {
          "index": 1,
          "choice": "4",
          "truth": false,
          "reason": "只計算 h(2)，漏掉 h(-2)。"
        },
        {
          "index": 2,
          "choice": "-8",
          "truth": false,
          "reason": "只計算 h(-2)，沒有再加 h(2)。"
        },
        {
          "index": 3,
          "choice": "-4",
          "truth": true,
          "reason": "h(2)=4、h(-2)=-8，相加正確得到 -4。"
        }
      ],
      "misconceptionTarget": "只算一個函數值，或誤認正負輸入必使輸出抵消。",
      "prerequisiteCheck": "先備能力是「能判斷每個合法輸入是否恰有一個輸出，並能由公式、表格或序對找出指定輸入的對應結果。」本題將此能力用於「計算兩個函數值的組合」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 110,
      "unitAndRoundingCheck": "括號清楚區分 h(-2) 的負輸入與兩函數值相加；本題無單位與四捨五入問題。針對「計算兩個函數值的組合」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "兩個輸入 2 與 -2 都可直接代入同一線型規則；題目只求兩個輸出的和，沒有隱含先後或範圍限制。；h(2)=4 與 h(-2)=-8 均唯一，總和只能是 -4；其他選項各自對應只算一項或錯誤抵消。；括號清楚區分 h(-2) 的負輸入與兩函數值相加；本題無單位與四捨五入問題。邊界稽核另確認「計算兩個函數值的組合」只有題幹所述的一種解讀。",
      "difficultyReason": "需完成兩次代入再合併，且常數項使輸出不具相反數關係，屬標準。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "71e44f9e153d8cd2fe9dfae97e19932176a6fd3a1adece3070d1387976bcf67b"
    },
    {
      "questionId": "u15-s002-mc07",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-value",
      "skillSlot": "s002",
      "skillTitle": "函數值",
      "difficulty": "advanced",
      "type": "mc",
      "text": "f(t)=4t-1。若 t=2x-1，且 x=3，則 f(2x-1) 的值為何？",
      "givenConditions": "x=3 與 t=2x-1 均明示，f 的實際輸入只能由這兩條資訊算得 5，不存在其他代入順序。本題的條件審查焦點是「計算含代數輸入的函數值」。",
      "target": "計算含代數輸入的函數值",
      "choices": [
        "19",
        "11",
        "15",
        "23"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，先計算送入 f 的數：2×3-1=5；再依 f(t)=4t-1 計算 f(5)=4×5-1=19，所以答案為 19。",
      "explanation": "不能直接把 x=3 當成 f 的輸入；先得 2x-1=5，再算 f(5)=19。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "2×3-1=5",
          "reason": "先求完整輸入。"
        },
        {
          "step": 2,
          "work": "f(5)=4×5-1",
          "reason": "把 5 送入函數規則。"
        },
        {
          "step": 3,
          "work": "f(5)=19",
          "reason": "完成運算。"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "19",
          "truth": true,
          "reason": "先算輸入 5，再代入 4t-1，得到 19。"
        },
        {
          "index": 1,
          "choice": "11",
          "truth": false,
          "reason": "直接用 x=3 計算 f(3)，忽略輸入其實是 2x-1。"
        },
        {
          "index": 2,
          "choice": "15",
          "truth": false,
          "reason": "算出 4×4-1，代表把 2×3-1 誤算為 4。"
        },
        {
          "index": 3,
          "choice": "23",
          "truth": false,
          "reason": "得到輸入 6 或漏減 1，未依完整括號計算。"
        }
      ],
      "misconceptionTarget": "未先計算函數括號內的完整輸入。",
      "prerequisiteCheck": "先備能力是「能判斷每個合法輸入是否恰有一個輸出，並能由公式、表格或序對找出指定輸入的對應結果。」本題將此能力用於「計算含代數輸入的函數值」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 114,
      "unitAndRoundingCheck": "f(2x-1) 明確表示整個 2x-1 是輸入；本題無單位，括號與變數 t、x 的角色均已區分。針對「計算含代數輸入的函數值」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "x=3 與 t=2x-1 均明示，f 的實際輸入只能由這兩條資訊算得 5，不存在其他代入順序。；完整兩層代入唯一得到 19；11 是直接算 f(3)，其餘選項則來自內部輸入或常數項錯誤。；f(2x-1) 明確表示整個 2x-1 是輸入；本題無單位，括號與變數 t、x 的角色均已區分。邊界稽核另確認「計算含代數輸入的函數值」只有題幹所述的一種解讀。",
      "difficultyReason": "有「先求內部代數式，再套一次函數」的兩層結構，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "178fd954b533e939459a00b23964092155fa7477ec821699c68524e51ca216bd"
    },
    {
      "questionId": "u15-s002-mc08",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-value",
      "skillSlot": "s002",
      "skillTitle": "函數值",
      "difficulty": "advanced",
      "type": "mc",
      "text": "已知 f(x)=ax+2，且 f(3)=11。則 f(-1) 為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由一個函數值決定參數再求值」。",
      "target": "由一個函數值決定參數再求值",
      "choices": [
        "1",
        "-1",
        "3",
        "9"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，重新依題意處理：用 f(3) 建立 3a+2=11；求 a=3；代入 -1 得 -1。因此得到「-1」。",
      "explanation": "由 3a+2=11 得 a=3，所以 f(-1)=-3+2=-1。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "用 f(3) 建立 3a+2=11"
        },
        {
          "step": 2,
          "work": "求 a=3"
        },
        {
          "step": 3,
          "work": "代入 -1 得 -1"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "1",
          "truth": false,
          "reason": "把 -3+2 算成正 1。"
        },
        {
          "index": 1,
          "choice": "-1",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；由 3a+2=11 得 a=3，所以 f(-1)=-3+2=-1。"
        },
        {
          "index": 2,
          "choice": "3",
          "truth": false,
          "reason": "把 a 誤認為常數項 2。"
        },
        {
          "index": 3,
          "choice": "9",
          "truth": false,
          "reason": "直接用 11-2，未求新輸入的值。"
        }
      ],
      "misconceptionTarget": "未先由已知函數值求參數",
      "prerequisiteCheck": "先備能力是「能判斷每個合法輸入是否恰有一個輸出，並能由公式、表格或序對找出指定輸入的對應結果。」本題將此能力用於「由一個函數值決定參數再求值」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 118,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由一個函數值決定參數再求值」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 1 的「-1」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由一個函數值決定參數再求值」只有題幹所述的一種解讀。",
      "difficultyReason": "兩階段推理：先求參數再求另一函數值，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "86aa6fee050bf57050109f21459d4e165669df15718dc623ba031977d91672f0"
    },
    {
      "questionId": "u15-s002-mc09",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-value",
      "skillSlot": "s002",
      "skillTitle": "函數值",
      "difficulty": "advanced",
      "type": "mc",
      "text": "p(x)=ax-3。已知 a=-2、m=-1，有人主張 p(m)=-1。此主張是否正確？",
      "givenConditions": "參數 a 與輸入 m 的值均已指定，主張只需在這一組條件下核對，不涉及求所有參數或其他定義域。本題的條件審查焦點是「驗證指定函數值敘述」。",
      "target": "驗證指定函數值敘述",
      "choices": [
        "不正確，p(-1)=-5",
        "不正確，p(-1)=5",
        "不正確，p(-1)=1",
        "正確，因為 p(-1)=(-2)(-1)-3=-1"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用題目主張，先代 a=-2 得 p(x)=-2x-3，再代 m=-1：p(-1)=(-2)(-1)-3=2-3=-1，因此主張正確。",
      "explanation": "必須依序代入參數與輸入；兩個負數相乘為正 2，再減 3，確實得到 -1。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "p(x)=-2x-3",
          "reason": "先代入參數 a=-2。"
        },
        {
          "step": 2,
          "work": "p(-1)=(-2)(-1)-3",
          "reason": "再代入 m=-1。"
        },
        {
          "step": 3,
          "work": "p(-1)=-1",
          "reason": "重算後核對主張。"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "不正確，p(-1)=-5",
          "truth": false,
          "reason": "把兩個負數相乘錯算成 -2。"
        },
        {
          "index": 1,
          "choice": "不正確，p(-1)=5",
          "truth": false,
          "reason": "把原式的 -3 誤當成 +3。"
        },
        {
          "index": 2,
          "choice": "不正確，p(-1)=1",
          "truth": false,
          "reason": "未正確完成 2-3 的減法。"
        },
        {
          "index": 3,
          "choice": "正確，因為 p(-1)=(-2)(-1)-3=-1",
          "truth": true,
          "reason": "參數與輸入依序代入後確實得到 -1。"
        }
      ],
      "misconceptionTarget": "參數與負輸入同時代入時的符號錯誤。",
      "prerequisiteCheck": "先備能力是「能判斷每個合法輸入是否恰有一個輸出，並能由公式、表格或序對找出指定輸入的對應結果。」本題將此能力用於「驗證指定函數值敘述」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 122,
      "unitAndRoundingCheck": "題目區分參數 a、輸入 m 與函數變數 x；乘法以括號表示，本題無單位與近似。針對「驗證指定函數值敘述」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "參數 a 與輸入 m 的值均已指定，主張只需在這一組條件下核對，不涉及求所有參數或其他定義域。；正確計算 (-2)(-1)-3 只能得到 -1；三個否定選項各自給出可追溯的符號或減法錯誤。；題目區分參數 a、輸入 m 與函數變數 x；乘法以括號表示，本題無單位與近似。邊界稽核另確認「驗證指定函數值敘述」只有題幹所述的一種解讀。",
      "difficultyReason": "須先把參數代入規則，再獨立重算負輸入以驗證敘述，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "27e49349126b71a2ddd3f6af3975b30a8e1853e5a7c9161a06e594961cb09434"
    },
    {
      "questionId": "u15-s002-mc10",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-value",
      "skillSlot": "s002",
      "skillTitle": "函數值",
      "difficulty": "literacy",
      "type": "mc",
      "text": "計程車前 1 公里 85 元，之後每公里加 5 元。以 x 表示總里程（x≥1），費用 C(x)=85+5(x-1)。行駛 7 公里需多少元？",
      "givenConditions": "題目以「不考慮不足 1 公里計價細則，7 公里為整數里程。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「用函數值計算分段簡化費用」。",
      "target": "用函數值計算分段簡化費用",
      "choices": [
        "115 元",
        "90 元",
        "120 元",
        "125 元"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，重新依題意處理：判斷加價里程 6；計算 5×6=30；加基本費 85 得 115。因此得到「115 元」。",
      "explanation": "C(7)=85+5×6=115，因加價里程是 7-1=6 公里。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "判斷加價里程 6"
        },
        {
          "step": 2,
          "work": "計算 5×6=30"
        },
        {
          "step": 3,
          "work": "加基本費 85 得 115"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "115 元",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；C(7)=85+5×6=115，因加價里程是 7-1=6 公里。"
        },
        {
          "index": 1,
          "choice": "90 元",
          "truth": false,
          "reason": "只加一次 5 元。"
        },
        {
          "index": 2,
          "choice": "120 元",
          "truth": false,
          "reason": "把 7 公里全部以 5 元加在基本費上。"
        },
        {
          "index": 3,
          "choice": "125 元",
          "truth": false,
          "reason": "把前 1 公里也重複計入並多加。"
        }
      ],
      "misconceptionTarget": "未扣除已含在基本費的里程",
      "prerequisiteCheck": "先備能力是「能判斷每個合法輸入是否恰有一個輸出，並能由公式、表格或序對找出指定輸入的對應結果。」本題將此能力用於「用函數值計算分段簡化費用」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 126,
      "unitAndRoundingCheck": "「答案以元表示，無須四捨五入。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「用函數值計算分段簡化費用」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「不考慮不足 1 公里計價細則，7 公里為整數里程。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 0 的「115 元」符合；其餘錯因分別記錄於 optionAnalysis。；「答案以元表示，無須四捨五入。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「用函數值計算分段簡化費用」只有題幹所述的一種解讀。",
      "difficultyReason": "需從費率文字辨認公式中 x-1 的意義，屬素養。",
      "literacyContextNecessity": "基本里程與加價里程是費用模型不可刪除的條件。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "979c4c3cf9a1e3eb6a15fd536918048d48955ce21662cabdb915de79d96ed1c9"
    },
    {
      "questionId": "u15-s002-mc11",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-value",
      "skillSlot": "s002",
      "skillTitle": "函數值",
      "difficulty": "literacy",
      "type": "mc",
      "text": "攝氏溫度 c 轉成華氏溫度的函數為 F(c)=9c/5+32。當 c=25 時，F(25) 為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「代入單位轉換函數」。",
      "target": "代入單位轉換函數",
      "choices": [
        "45°F",
        "77°F",
        "57°F",
        "89°F"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，重新依題意處理：先算 25÷5=5；乘 9 得 45；加 32 得 77。因此得到「77°F」。",
      "explanation": "F(25)=9×25/5+32=45+32=77。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "先算 25÷5=5"
        },
        {
          "step": 2,
          "work": "乘 9 得 45"
        },
        {
          "step": 3,
          "work": "加 32 得 77"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "45°F",
          "truth": false,
          "reason": "漏掉 +32。"
        },
        {
          "index": 1,
          "choice": "77°F",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；F(25)=9×25/5+32=45+32=77。"
        },
        {
          "index": 2,
          "choice": "57°F",
          "truth": false,
          "reason": "把 45+32 錯加。"
        },
        {
          "index": 3,
          "choice": "89°F",
          "truth": false,
          "reason": "把 32 加到 45 後又多加 12。"
        }
      ],
      "misconceptionTarget": "溫標轉換運算順序錯誤",
      "prerequisiteCheck": "先備能力是「能判斷每個合法輸入是否恰有一個輸出，並能由公式、表格或序對找出指定輸入的對應結果。」本題將此能力用於「代入單位轉換函數」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 130,
      "unitAndRoundingCheck": "「輸入是 °C，輸出須標示 °F；結果為整數。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「代入單位轉換函數」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 1 的「77°F」符合；其餘錯因分別記錄於 optionAnalysis。；「輸入是 °C，輸出須標示 °F；結果為整數。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「代入單位轉換函數」只有題幹所述的一種解讀。",
      "difficultyReason": "需正確處理分數係數與單位，屬素養。",
      "literacyContextNecessity": "溫標公式與單位是題目核心，不能去除情境。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "440d71d7528a2bedc629e17b716fe18d8750afb21903c3e993fba38f99d373a8"
    },
    {
      "questionId": "u15-s002-mc12",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-value",
      "skillSlot": "s002",
      "skillTitle": "函數值",
      "difficulty": "literacy",
      "type": "mc",
      "text": "一台裝置的剩餘電量百分比模型為 B(t)=100-8t，其中 t 是使用小時數，模型只適用 0≤t≤10。使用 6 小時後模型預測剩餘多少？",
      "givenConditions": "題目以「模型以百分比表示且只保證 0 至 10 小時。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「用線型模型求函數值並檢查定義域」。",
      "target": "用線型模型求函數值並檢查定義域",
      "choices": [
        "48%",
        "60%",
        "52%",
        "92%"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，重新依題意處理：檢查 t=6 合法；計算耗電 48；由 100 減得 52。因此得到「52%」。",
      "explanation": "B(6)=100-8×6=100-48=52，且 6 在適用範圍內。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "檢查 t=6 合法"
        },
        {
          "step": 2,
          "work": "計算耗電 48"
        },
        {
          "step": 3,
          "work": "由 100 減得 52"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "48%",
          "truth": false,
          "reason": "把 100-48 算成 48。"
        },
        {
          "index": 1,
          "choice": "60%",
          "truth": false,
          "reason": "只算 8×5 或錯用 5 小時。"
        },
        {
          "index": 2,
          "choice": "52%",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；B(6)=100-8×6=100-48=52，且 6 在適用範圍內。"
        },
        {
          "index": 3,
          "choice": "92%",
          "truth": false,
          "reason": "只減一次 8。"
        }
      ],
      "misconceptionTarget": "忽略模型代入與適用範圍",
      "prerequisiteCheck": "先備能力是「能判斷每個合法輸入是否恰有一個輸出，並能由公式、表格或序對找出指定輸入的對應結果。」本題將此能力用於「用線型模型求函數值並檢查定義域」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 134,
      "unitAndRoundingCheck": "「輸出為百分比，無須四捨五入。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「用線型模型求函數值並檢查定義域」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「模型以百分比表示且只保證 0 至 10 小時。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 2 的「52%」符合；其餘錯因分別記錄於 optionAnalysis。；「輸出為百分比，無須四捨五入。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「用線型模型求函數值並檢查定義域」只有題幹所述的一種解讀。",
      "difficultyReason": "除了代入還須檢查模型範圍，屬素養。",
      "literacyContextNecessity": "適用時間範圍決定代入是否有意義，是情境必要條件。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "70a63a004765a0e50f6dfebc7c2cdb3c208889e1727c397ee2ab8774749c2969"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u15-s002-cr01",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-value",
      "skillSlot": "s002",
      "skillTitle": "函數值",
      "type": "constructed-response",
      "prompt": "f(x)=-3x+2。計算 f(-2)，並在整數集合 A={-2,-1,0,1,2} 中找出所有使 f(a)=5 的 a。",
      "requiredWork": "須以括號完成負數代入，建立或逐一檢查 f(a)=5，並確認答案屬於指定集合。",
      "standardSolution": "f(-2)=-3×(-2)+2=8。再解 -3a+2=5，得 -3a=3，所以 a=-1；-1∈A，因此 A 中所有解只有 a=-1。",
      "alternativeMethod": "可列出 A 中五個輸入的函數值 8、5、2、-1、-4，直接看出只有 a=-1 時輸出為 5。",
      "reasoningSteps": [
        {
          "step": 1,
          "work": "以括號代入 -2，求 f(-2)=8"
        },
        {
          "step": 2,
          "work": "建立 -3a+2=5"
        },
        {
          "step": 3,
          "work": "解得 a=-1"
        },
        {
          "step": 4,
          "work": "核對 -1 在 A 中且沒有其他解"
        }
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確算出 f(-2)=8，並以方程或完整列表證明 A 中只有 a=-1 使 f(a)=5；負號、集合篩選與唯一性皆清楚。"
        },
        {
          "score": 2,
          "criteria": "兩個子任務方法皆正確，但有一處非核心整數運算錯誤，或求得 a=-1 後漏寫它屬於 A／漏說明唯一性。"
        },
        {
          "score": 1,
          "criteria": "只正確完成 f(-2)=8，或能建立 -3a+2=5 但未正確解完；只有「8，-1」而無任何代入過程亦屬此級。"
        },
        {
          "score": 0,
          "criteria": "沒有把輸入代入 f(x)=-3x+2，或所得方法無法用來求 f(-2) 與 f(a)=5。"
        }
      ],
      "partialCreditRules": [
        "若 f(-2) 因單一符號錯誤算錯，但後半能獨立正確解出 a=-1，後半分數不受影響。",
        "若採逐一代入法，需列出 A 中全部五個輸出或以一次方程唯一解補足，才能取得完整找解分。"
      ],
      "followThroughPolicy": "本題延續計分依以下具體規則處理：若 f(-2) 因單一符號錯誤算錯，但後半能獨立正確解出 a=-1，後半分數不受影響。；若採逐一代入法，需列出 A 中全部五個輸出或以一次方程唯一解補足，才能取得完整找解分。",
      "unitAndNotationRules": "沿用題幹的變數、序對、不等號與計量單位；作答必須清楚呈現以下要求中的符號與單位：須以括號完成負數代入，建立或逐一檢查 f(a)=5，並確認答案屬於指定集合。",
      "answerOnlyPolicy": "只寫最終答案而未呈現必要方法時，依本題 1 分規準處理：只正確完成 f(-2)=8，或能建立 -3a+2=5 但未正確解完；只有「8，-1」而無任何代入過程亦屬此級。；答案錯且無可辨識過程則為 0 分。",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "recomputedConclusion": "f(-2)=8；解 -3a+2=5 得 a=-1，且 -1 在指定集合 A 中，故唯一解為 -1。",
        "reviewNote": "獨立重做時先以括號計算 -3×(-2)+2=8，再解一次方程 -3a+2=5 得 a=-1；逐一代入 A 亦只在 -1 得 5。標準解與替代法一致，評分規準分開處理兩個子任務，未使用二次函數。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "b22186bc952bdb280ce4d941687899635a9f003f78d751c39deeac2d1d0fca1e"
    },
    {
      "questionId": "u15-s002-cr02",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-value",
      "skillSlot": "s002",
      "skillTitle": "函數值",
      "type": "constructed-response",
      "prompt": "g(x)=mx+4，已知 g(3)=19。先求 m，再求 g(-2)，並用代回檢查 m。",
      "requiredWork": "須先由已知函數值求參數，之後計算新函數值並驗證。",
      "standardSolution": "3m+4=19，得 m=5。故 g(-2)=5(-2)+4=-6。檢查 g(3)=15+4=19，符合。",
      "alternativeMethod": "也可用兩點觀念：(0,4) 與 (3,19) 的斜率為 (19-4)/3=5，再代入 -2。",
      "reasoningSteps": [
        {
          "step": 1,
          "work": "由 g(3) 建式"
        },
        {
          "step": 2,
          "work": "求 m=5"
        },
        {
          "step": 3,
          "work": "求 g(-2)=-6"
        },
        {
          "step": 4,
          "work": "代回驗證"
        }
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "由 3m+4=19 求得 m=5，再算 g(-2)=-6，並代回 g(3)=19 完成檢查；三部分均有式子。"
        },
        {
          "score": 2,
          "criteria": "正確求得 m=5 與 g(-2)=-6，但漏掉代回檢查；或求 m 的方法正確、後續僅有一次符號錯且仍有檢查。"
        },
        {
          "score": 1,
          "criteria": "只建立 3m+4=19 或只求得 m=5，尚未正確完成 g(-2)；直接寫兩個答案而無過程也最高 1 分。"
        },
        {
          "score": 0,
          "criteria": "未由 g(3)=19 建立參數方程，或把 m 當成輸入而使後續計算無法對應題意。"
        }
      ],
      "partialCreditRules": [
        "若由 3m+4=19 解 m 時只有一次除法錯，後續以該 m 一致求 g(-2) 並代回，可保留建式與延續方法分，最高 2 分。",
        "漏做代回檢查即使 m 與 g(-2) 都正確，最高 2 分。"
      ],
      "followThroughPolicy": "本題延續計分依以下具體規則處理：若由 3m+4=19 解 m 時只有一次除法錯，後續以該 m 一致求 g(-2) 並代回，可保留建式與延續方法分，最高 2 分。；漏做代回檢查即使 m 與 g(-2) 都正確，最高 2 分。",
      "unitAndNotationRules": "沿用題幹的變數、序對、不等號與計量單位；作答必須清楚呈現以下要求中的符號與單位：須先由已知函數值求參數，之後計算新函數值並驗證。",
      "answerOnlyPolicy": "只寫最終答案而未呈現必要方法時，依本題 1 分規準處理：只建立 3m+4=19 或只求得 m=5，尚未正確完成 g(-2)；直接寫兩個答案而無過程也最高 1 分。；答案錯且無可辨識過程則為 0 分。",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "recomputedConclusion": "3m+4=19，得 m=5。故 g(-2)=5(-2)+4=-6。檢查 g(3)=15+4=19，符合。",
        "reviewNote": "獨立重做 u15-s002-cr02 時依序檢查 由 g(3) 建式、求 m=5、求 g(-2)=-6、代回驗證；標準解與替代法在允許範圍內得到一致結論，量綱與端點亦符合題意。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "5039db73384a2fe5fbc121f785820aee9c7278ce667e22fd80bef0baf635ed34"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u15-s002-mc01-review",
      "questionId": "u15-s002-mc01",
      "unitId": "u15",
      "skillId": "function-value",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "bf43fddf732ac282d6adf23a9402f5d72ea65cdcdde6a552ae9be531f120e3e0",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "11",
      "storedAnswer": "11",
      "independentSolution": "不採用已存答案，重新依題意處理：代入 4；先乘法得 8；加 3 得 11。因此得到「11」。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 1 的「11」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "單一步驟代入一次式，屬基礎。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s002-mc01，審查者未讀取存答而依序完成：代入 4；先乘法得 8；加 3 得 11。重算結果為「11」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「只算 2×4，漏加常數。；把 3 加成 2，或錯算 8+2。；誤把 2 與 3 相加後乘 4。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s002-mc02-review",
      "questionId": "u15-s002-mc02",
      "unitId": "u15",
      "skillId": "function-value",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "e7b764bf13f33319214d480a46581a014f543e443a6939902d2edd88c16e873b",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "g(-2)>g(0)",
      "storedAnswer": "g(-2)>g(0)",
      "independentSolution": "不採用已存答案，分別計算：g(-2)=-3×(-2)-5=1，g(0)=-3×0-5=-5。因為 1>-5，所以 g(-2)>g(0)。",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目明示同一函數規則及兩個合法輸入 -2、0；比較對象是兩個輸出值，不需假設額外定義域。",
        "choiceUniqueness": "獨立求得的兩值為 1 與 -5，因此只有大於關係成立；小於、等於及無法比較都與確定數值衝突。",
        "languageAndUnits": "「比較 g(-2) 與 g(0)」明確要求比較函數值，不是比較輸入；本題沒有計量單位或近似問題。"
      },
      "difficultyReason": "需各完成一次負數與零的代入，再比較兩個整數；步驟短且只使用已學運算，屬基礎層次。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "獨立重算得到 g(-2)=1、g(0)=-5，故 1>-5，選項 2 唯一正確。選項 0 多半源於只看 -2<0 或把負負乘法判錯；選項 1 與兩個確定值衝突；規則完整所以也不是無法比較。此題已由單一直接求值改成雙值比較，與同技能第一題的能力目標實質不同。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s002-mc03-review",
      "questionId": "u15-s002-mc03",
      "unitId": "u15",
      "skillId": "function-value",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "ba8a1be4b6a0ec4a9bdc511eebc97444a8ff9a074c8de3468b2e01066eae5937",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "7",
      "storedAnswer": "7",
      "independentSolution": "不採用已存答案，重新依題意處理：定位輸入 3；讀同欄輸出；得到 7。因此得到「7」。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「表格配對順序為 (-1,5)、(0,2)、(3,7)。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 3 的「7」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "直接由表讀取指定對應，屬基礎。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s002-mc03，審查者未讀取存答而依序完成：定位輸入 3；讀同欄輸出；得到 7。重算結果為「7」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把輸入本身當函數值。；讀到 x=0 的輸出。；讀到 x=-1 的輸出。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s002-mc04-review",
      "questionId": "u15-s002-mc04",
      "unitId": "u15",
      "skillId": "function-value",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "33fdf83371c237d3b494e65398561315127cda31044de792950e4a0351dc7919",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "6",
      "storedAnswer": "6",
      "independentSolution": "不採用已存答案，重新依題意處理：先算 g(-1)=-3×(-1)+2=5；再算 g(1)=-3×1+2=-1；最後 5-(-1)=6，因此答案為 6。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "wording": "題目明確指定同一函數的兩個輸入值，並以減號固定運算順序，不存在交換次序的歧義。",
        "choiceUniqueness": "四個選項互異；只有 6 同時符合 g(-1)=5、g(1)=-1 與 5-(-1) 的計算。",
        "scope": "只使用國中階段的函數代入、整數乘法與減去負數，未引入函數合成、反函數或其他高中延伸內容。",
        "boundary": "負輸入與減去負數都以括號明確標示，運算順序和符號邊界清楚，且本題沒有單位換算或近似值問題。"
      },
      "difficultyReason": "此題要求連續完成兩次函數代入與一次減負運算，運算鏈明顯不同於單一函數值題。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "獨立重算時，先由 g(-1)=-3×(-1)+2 得 5，再由 g(1)=-3×1+2 得 -1，最後計算 5-(-1)=6。四個選項逐一核對後，只有選項 0 符合；其餘分別對應未完整代入、漏算第二個函數值與符號錯誤。此題已由單次代入改為兩個函數值之差，排除與同技能基礎題僅換數字的重複。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s002-mc05-review",
      "questionId": "u15-s002-mc05",
      "unitId": "u15",
      "skillId": "function-value",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "af53a65ea34b341e0ac8fe524512ea61069808a172bab08ad472a1bcfd183efb",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "5",
      "storedAnswer": "5",
      "independentSolution": "不採用已存答案，重新依題意處理：把 f(a)=9 改寫成 2a-1=9；移項得 2a=10；除以 2。因此得到「5」。",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 2 的「5」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需建立並解一元一次方程式，屬標準。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s002-mc05，審查者未讀取存答而依序完成：把 f(a)=9 改寫成 2a-1=9；移項得 2a=10；除以 2。重算結果為「5」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「漏把 -1 移項。；把輸出 9 當輸入減 1。；只把 -1 移到右邊但不除 2。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s002-mc06-review",
      "questionId": "u15-s002-mc06",
      "unitId": "u15",
      "skillId": "function-value",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "71e44f9e153d8cd2fe9dfae97e19932176a6fd3a1adece3070d1387976bcf67b",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "-4",
      "storedAnswer": "-4",
      "independentSolution": "不採用已存答案，分別計算 h(2)=3×2-2=4、h(-2)=3×(-2)-2=-8，再相加 4+(-8)=-4，因此答案為 -4。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "兩個輸入 2 與 -2 都可直接代入同一線型規則；題目只求兩個輸出的和，沒有隱含先後或範圍限制。",
        "choiceUniqueness": "h(2)=4 與 h(-2)=-8 均唯一，總和只能是 -4；其他選項各自對應只算一項或錯誤抵消。",
        "languageAndUnits": "括號清楚區分 h(-2) 的負輸入與兩函數值相加；本題無單位與四捨五入問題。"
      },
      "difficultyReason": "同時檢查兩次函數求值、負輸入與最後相加，步驟多於單次代入，符合標準層次。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "獨立計算先得 h(2)=4，再得 h(-2)=-8，最後 4+(-8)=-4。選項 3 唯一正確；0 錯把正負輸入當成輸出必抵消，4 與 -8 都只完成半題。內容已限於一次函數，未使用二次式。常數項 -2 在兩次代入時各保留一次，因此輸入互為相反數不代表兩個函數值相加必為 0。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s002-mc07-review",
      "questionId": "u15-s002-mc07",
      "unitId": "u15",
      "skillId": "function-value",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "178fd954b533e939459a00b23964092155fa7477ec821699c68524e51ca216bd",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "19",
      "storedAnswer": "19",
      "independentSolution": "不採用已存答案，先計算送入 f 的數：2×3-1=5；再依 f(t)=4t-1 計算 f(5)=4×5-1=19，所以答案為 19。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "x=3 與 t=2x-1 均明示，f 的實際輸入只能由這兩條資訊算得 5，不存在其他代入順序。",
        "choiceUniqueness": "完整兩層代入唯一得到 19；11 是直接算 f(3)，其餘選項則來自內部輸入或常數項錯誤。",
        "languageAndUnits": "f(2x-1) 明確表示整個 2x-1 是輸入；本題無單位，括號與變數 t、x 的角色均已區分。"
      },
      "difficultyReason": "需辨認兩個變數角色並完成巢狀代入，不能直接把 x 值送入 f，符合進階難度。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "獨立重做先由 x=3 算出 t=2×3-1=5，再由 f(t)=4t-1 得 f(5)=19。選項 0 唯一；11 代表把 3 直接送入 f，15 與 23 皆不符合完整兩步。題目保留巢狀輸入能力，但改用線型規則以符合單元邊界。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s002-mc08-review",
      "questionId": "u15-s002-mc08",
      "unitId": "u15",
      "skillId": "function-value",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "86aa6fee050bf57050109f21459d4e165669df15718dc623ba031977d91672f0",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "-1",
      "storedAnswer": "-1",
      "independentSolution": "不採用已存答案，重新依題意處理：用 f(3) 建立 3a+2=11；求 a=3；代入 -1 得 -1。因此得到「-1」。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 1 的「-1」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "兩階段推理：先求參數再求另一函數值，屬進階。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s002-mc08，審查者未讀取存答而依序完成：用 f(3) 建立 3a+2=11；求 a=3；代入 -1 得 -1。重算結果為「-1」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把 -3+2 算成正 1。；把 a 誤認為常數項 2。；直接用 11-2，未求新輸入的值。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s002-mc09-review",
      "questionId": "u15-s002-mc09",
      "unitId": "u15",
      "skillId": "function-value",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "27e49349126b71a2ddd3f6af3975b30a8e1853e5a7c9161a06e594961cb09434",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "正確，因為 p(-1)=(-2)(-1)-3=-1",
      "storedAnswer": "正確，因為 p(-1)=(-2)(-1)-3=-1",
      "independentSolution": "不採用題目主張，先代 a=-2 得 p(x)=-2x-3，再代 m=-1：p(-1)=(-2)(-1)-3=2-3=-1，因此主張正確。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "參數 a 與輸入 m 的值均已指定，主張只需在這一組條件下核對，不涉及求所有參數或其他定義域。",
        "choiceUniqueness": "正確計算 (-2)(-1)-3 只能得到 -1；三個否定選項各自給出可追溯的符號或減法錯誤。",
        "languageAndUnits": "題目區分參數 a、輸入 m 與函數變數 x；乘法以括號表示，本題無單位與近似。"
      },
      "difficultyReason": "兩階段代入並驗證既有主張，要求學生不信任題目敘述而完整重算，符合進階。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "獨立核算先把 a=-2 代成 p(x)=-2x-3，再把 m=-1 代入，得到 2-3=-1。故題目主張正確，選項 3 唯一；其餘選項分別反映負負乘法、常數項與減法錯誤。已移除二次多項式，仍保留參數驗證能力。先固定參數再代入自變數的順序不可互換，否則容易把 a 與 m 的角色混在一起而得到錯誤結果。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s002-mc10-review",
      "questionId": "u15-s002-mc10",
      "unitId": "u15",
      "skillId": "function-value",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "979c4c3cf9a1e3eb6a15fd536918048d48955ce21662cabdb915de79d96ed1c9",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "115 元",
      "storedAnswer": "115 元",
      "independentSolution": "不採用已存答案，重新依題意處理：判斷加價里程 6；計算 5×6=30；加基本費 85 得 115。因此得到「115 元」。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「不考慮不足 1 公里計價細則，7 公里為整數里程。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 0 的「115 元」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「答案以元表示，無須四捨五入。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需從費率文字辨認公式中 x-1 的意義，屬素養。",
      "literacyNecessityReview": "基本里程與加價里程是費用模型不可刪除的條件。",
      "reviewerNote": "針對 u15-s002-mc10，審查者未讀取存答而依序完成：判斷加價里程 6；計算 5×6=30；加基本費 85 得 115。重算結果為「115 元」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「只加一次 5 元。；把 7 公里全部以 5 元加在基本費上。；把前 1 公里也重複計入並多加。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s002-mc11-review",
      "questionId": "u15-s002-mc11",
      "unitId": "u15",
      "skillId": "function-value",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "440d71d7528a2bedc629e17b716fe18d8750afb21903c3e993fba38f99d373a8",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "77°F",
      "storedAnswer": "77°F",
      "independentSolution": "不採用已存答案，重新依題意處理：先算 25÷5=5；乘 9 得 45；加 32 得 77。因此得到「77°F」。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 1 的「77°F」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「輸入是 °C，輸出須標示 °F；結果為整數。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需正確處理分數係數與單位，屬素養。",
      "literacyNecessityReview": "溫標公式與單位是題目核心，不能去除情境。",
      "reviewerNote": "針對 u15-s002-mc11，審查者未讀取存答而依序完成：先算 25÷5=5；乘 9 得 45；加 32 得 77。重算結果為「77°F」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「漏掉 +32。；把 45+32 錯加。；把 32 加到 45 後又多加 12。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s002-mc12-review",
      "questionId": "u15-s002-mc12",
      "unitId": "u15",
      "skillId": "function-value",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "70a63a004765a0e50f6dfebc7c2cdb3c208889e1727c397ee2ab8774749c2969",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "52%",
      "storedAnswer": "52%",
      "independentSolution": "不採用已存答案，重新依題意處理：檢查 t=6 合法；計算耗電 48；由 100 減得 52。因此得到「52%」。",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「模型以百分比表示且只保證 0 至 10 小時。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 2 的「52%」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「輸出為百分比，無須四捨五入。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "除了代入還須檢查模型範圍，屬素養。",
      "literacyNecessityReview": "適用時間範圍決定代入是否有意義，是情境必要條件。",
      "reviewerNote": "針對 u15-s002-mc12，審查者未讀取存答而依序完成：檢查 t=6 合法；計算耗電 48；由 100 減得 52。重算結果為「52%」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把 100-48 算成 48。；只算 8×5 或錯用 5 小時。；只減一次 8。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [],
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "productionActivationAllowed": false
};
