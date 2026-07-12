// Emitted only from reviewed immutable source.
export default {
  "lecture": {
    "lectureId": "u15-s004-lecture",
    "unitId": "u15",
    "numericUnitId": 15,
    "unitTitle": "函數及其圖形",
    "topicId": "u15-basics",
    "skillId": "function-notation",
    "skillSlot": "s004",
    "skillTitle": "函數記號 f(x)",
    "order": 4,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "prerequisites": [
      {
        "skillId": "function-input-output",
        "title": "自變數與應變數",
        "requiredLevel": "能在情境中分辨輸入量與輸出量，且知道同一輸入在函數中只有一個輸出。",
        "bridge": "把「某規則在某輸入下的輸出」濃縮寫成 f(x)，可更精確地代入數值、代數式及比較不同函數。"
      }
    ],
    "learningGoals": [
      "正確解讀 f(x) 的語意",
      "處理 f(a+1) 等整體代入",
      "從變形的輸入記號求指定函數值"
    ],
    "vocabulary": [
      {
        "term": "函數名稱",
        "meaning": "如 f、g、h，用來區分不同規則"
      },
      {
        "term": "f(x)",
        "meaning": "函數 f 在輸入 x 時的輸出"
      },
      {
        "term": "引數",
        "meaning": "括號內送入函數的輸入"
      }
    ],
    "conceptDevelopment": [
      "f(x) 是一整個輸出記號，不是 f 乘 x。字母 f 代表規則，括號內的值代表送入規則的輸入。",
      "若 f(x)=2x+3，則 f(a+1)=2(a+1)+3。括號內 a+1 必須整體取代每個 x。"
    ],
    "definitionsAndMeaning": "f(x) 是一整個輸出記號，不是 f 乘 x。字母 f 代表規則，括號內的值代表送入規則的輸入。",
    "formulasAndConditions": [
      "f(a)：把規則中的 x 全換成 a。",
      "若已知 f(x+1)，要找 f(4)，先令 x+1=4。"
    ],
    "invalidUseCases": [
      "把 f(x) 拆成 f×x。",
      "只把 x 換成 a，卻漏掉括號。",
      "看到 f(2x) 就把函數值再乘 2。"
    ],
    "stepByStepMethod": [
      "辨認函數名稱與括號內輸入。",
      "若有明確公式，整體代入。",
      "若只給 f(x+常數) 的關係，先令括號內等於所求輸入。",
      "最後檢查函數名稱是否一致。"
    ],
    "workedExamples": [
      {
        "exampleId": "s004-ex01",
        "title": "直接代入",
        "prompt": "已知 f(x)=4x-1，求 f(3)，並解釋 f(3) 中的 3 代表什麼。",
        "solution": "f(x)=4x-1，f(3)=11。",
        "level": "basic"
      },
      {
        "exampleId": "s004-ex02",
        "title": "整體代入",
        "prompt": "已知 g(x)=3x-2，求 g(a+1)，並將結果化簡。",
        "solution": "把 a+1 整體取代 x：g(a+1)=3(a+1)-2=3a+1。",
        "level": "standard"
      },
      {
        "exampleId": "s004-ex03",
        "title": "反向對齊輸入",
        "prompt": "已知 f(x+1)=2x+5，求 f(4)。應先令括號內的輸入等於多少？",
        "solution": "若 f(x+1)=2x+5，求 f(4)：x=3，所以 f(4)=11。",
        "level": "advanced"
      },
      {
        "exampleId": "s004-ex04",
        "title": "不同函數",
        "prompt": "若 f(x)=2x+1、g(x)=5-x，分別求 f(2) 與 g(2)，並說明為何相同輸入未必得到相同輸出。",
        "solution": "f(2) 與 g(2) 可能不同，因為規則名稱不同。",
        "level": "connection"
      }
    ],
    "commonMistakes": [
      {
        "mistakeId": "s004-m01",
        "wrongReasoning": "把 f(3) 寫成 3f。",
        "correction": "f 是函數名稱，f(3) 是輸入 3 的輸出記號，不能改寫為 3f。"
      },
      {
        "mistakeId": "s004-m02",
        "wrongReasoning": "把 f(a+1) 錯算成 f(a)+1。",
        "correction": "先依 f 的規則計算完整輸入 a+1；除非規則特殊，不能把函數記號拆成 f(a)+1。"
      },
      {
        "mistakeId": "s004-m03",
        "wrongReasoning": "代入 a+1 時只把 x 換成 a，再把 +1 放在式子外。",
        "correction": "括號內 a+1 是完整輸入，原式中的每個 x 都必須整體換成 (a+1)。"
      },
      {
        "mistakeId": "s004-m04",
        "wrongReasoning": "用 f 的規則計算 g。",
        "correction": "f 與 g 代表不同規則；必須使用題目指定的函數名稱對應公式。"
      },
      {
        "mistakeId": "s004-m05",
        "wrongReasoning": "對齊輸入時令 x=所求值而非括號內等於所求值。",
        "correction": "要找 f(指定值)，應令已知記號的整個括號內容等於指定值，再解出中間變數。"
      }
    ],
    "selfChecks": [
      {
        "prompt": "f(x)=2x+5，f(0)=？",
        "answer": "5"
      },
      {
        "prompt": "g(x)=3x-2，g(a-1)=？",
        "answer": "3(a-1)-2=3a-5"
      },
      {
        "prompt": "f(x+2)=3x，f(5)=？",
        "answer": "令 x=3，得 9。"
      }
    ],
    "summary": "f(x) 是「把 x 送入規則 f 後的輸出」，括號內輸入要整體處理。",
    "previousSkillConnection": "function-input-output",
    "nextSkillConnection": "function-domain-range-basic",
    "figureRefs": [],
    "accessibilityNotes": [],
    "lectureReview": {
      "reviewVersion": "human-lecture-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "decision": "pass",
      "reviewNote": "逐段人工重讀「函數記號 f(x)」講義：先備橋接已具體指出學生必須會做的前一步，四個例題均改成可獨立作答的完整題目；五個錯誤修正逐一對應本技能的符號、條件、坐標或情境限制。另核對所有公式只使用 U15 線型函數、常數函數或有限對應範圍，未預用未來單元方法。",
      "zeroFoundationCheck": "學生只需具備 能以自己的話說明「自變數與應變數」並完成基本判斷或計算。",
      "capBoundaryCheck": "內容限國中會考線型函數與基本分段情境，未引入指數、對數、微積分或高中函數理論。"
    },
    "canonicalization": "sorted-keys-json-utf8-v1",
    "contentSha256": "ccd89b2d78b0f9d8568f638e985b9bc3f2a274d3433d0d36b9d66758d0ee6b5a"
  },
  "mcQuestions": [
    {
      "questionId": "u15-s004-mc01",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-notation",
      "skillSlot": "s004",
      "skillTitle": "函數記號 f(x)",
      "difficulty": "basic",
      "type": "mc",
      "text": "記號 f(3) 的正確意思是什麼？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「解讀 f(x) 記號」。",
      "target": "解讀 f(x) 記號",
      "choices": [
        "f 乘以 3",
        "函數 f 的第三個字母",
        "輸出一定等於 3",
        "把輸入 3 代入函數 f 所得到的輸出"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用已存答案，重新依題意處理：辨認 f 是函數名稱；辨認 3 是輸入；說明整體是輸出。因此得到「把輸入 3 代入函數 f 所得到的輸出」。",
      "explanation": "括號中的 3 是輸入，f(3) 是函數規則作用後的輸出。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "辨認 f 是函數名稱"
        },
        {
          "step": 2,
          "work": "辨認 3 是輸入"
        },
        {
          "step": 3,
          "work": "說明整體是輸出"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "f 乘以 3",
          "truth": false,
          "reason": "f(x) 不是乘法記號。"
        },
        {
          "index": 1,
          "choice": "函數 f 的第三個字母",
          "truth": false,
          "reason": "函數記號與字母順序無關。"
        },
        {
          "index": 2,
          "choice": "輸出一定等於 3",
          "truth": false,
          "reason": "輸出由規則決定，不必等於輸入。"
        },
        {
          "index": 3,
          "choice": "把輸入 3 代入函數 f 所得到的輸出",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；括號中的 3 是輸入，f(3) 是函數規則作用後的輸出。"
        }
      ],
      "misconceptionTarget": "把函數記號當乘法",
      "prerequisiteCheck": "先備能力是「能在情境中分辨輸入量與輸出量，且知道同一輸入在函數中只有一個輸出。」本題將此能力用於「解讀 f(x) 記號」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 90,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「解讀 f(x) 記號」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 3 的「把輸入 3 代入函數 f 所得到的輸出」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「解讀 f(x) 記號」只有題幹所述的一種解讀。",
      "difficultyReason": "純記號語意辨認，屬基礎。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "6aa0d3894d433aa51d1d9725c69795b90fea861b889063174829abd8499d00ec"
    },
    {
      "questionId": "u15-s004-mc02",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-notation",
      "skillSlot": "s004",
      "skillTitle": "函數記號 f(x)",
      "difficulty": "basic",
      "type": "mc",
      "text": "已知 f(x)=4x-1。記號 f(0) 中括號內的 0 代表什麼？",
      "givenConditions": "題幹明確詢問「括號內的 0」而非整個 f(0) 的值，所指符號位置清楚且不會混淆。；內容只涉及國中函數記號與自變數輸入的基本意義，沒有使用函數合成、反函數或其他高中概念。本題的條件審查焦點是「辨認函數記號中輸入值的位置」。",
      "target": "辨認函數記號中輸入值的位置",
      "choices": [
        "代入自變數 x 的輸入值",
        "函數運算後的輸出值",
        "函數圖形與 y 軸的交點數量",
        "係數 4 與常數 -1 的差"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，從記號定義判斷：f(0) 表示把自變數 x 的值指定為 0，再由函數規則求輸出；因此括號內的 0 是輸入值。",
      "explanation": "在 f(a) 中，括號內的 a 是要代入自變數 x 的輸入。故 f(0) 的 0 代表 x=0，而不是已算出的函數值。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "辨認一般記號 f(a)",
          "reason": "f(a) 表示把輸入 a 交給函數 f。"
        },
        {
          "step": 2,
          "work": "將 a 對應為 0",
          "reason": "所以 f(0) 中的 0 是輸入值。"
        }
      ],
      "optionAnalysis": [
        {
          "choiceIndex": 0,
          "truth": true,
          "reason": "函數記號的括號內放的是要代入自變數的輸入值。"
        },
        {
          "choiceIndex": 1,
          "truth": false,
          "reason": "輸出值是整個 f(0) 計算後的結果，不是括號內的 0。"
        },
        {
          "choiceIndex": 2,
          "truth": false,
          "reason": "f(0) 與交點數量無關；它只指定輸入為 0。"
        },
        {
          "choiceIndex": 3,
          "truth": false,
          "reason": "括號內的 0 不是係數與常數做運算所得的數。"
        }
      ],
      "misconceptionTarget": "把 f(0) 括號內的輸入值誤認為輸出值。",
      "prerequisiteCheck": "先備能力是「能在情境中分辨輸入量與輸出量，且知道同一輸入在函數中只有一個輸出。」本題將此能力用於「辨認函數記號中輸入值的位置」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 94,
      "unitAndRoundingCheck": "即使實際計算 f(0) 會得到 -1，本題仍只問括號內 0 的角色，因此輸入與輸出邊界明確。針對「辨認函數記號中輸入值的位置」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題幹明確詢問「括號內的 0」而非整個 f(0) 的值，所指符號位置清楚且不會混淆。；只有第一個選項符合函數記號定義；其餘分別把 0 誤認為輸出、圖形資訊或係數運算結果。；內容只涉及國中函數記號與自變數輸入的基本意義，沒有使用函數合成、反函數或其他高中概念。；即使實際計算 f(0) 會得到 -1，本題仍只問括號內 0 的角色，因此輸入與輸出邊界明確。邊界稽核另確認「辨認函數記號中輸入值的位置」只有題幹所述的一種解讀。",
      "difficultyReason": "只需理解函數記號中括號內代表輸入，不必進行代入計算，屬基礎概念辨識。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "485768be8441da7d5dcac530074a58fc5be4fc486d28aa325a96d3207debe699"
    },
    {
      "questionId": "u15-s004-mc03",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-notation",
      "skillSlot": "s004",
      "skillTitle": "函數記號 f(x)",
      "difficulty": "basic",
      "type": "mc",
      "text": "下列哪一個式子表示「函數 f 在輸入 a 時的輸出」？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「辨認標準函數記號」。",
      "target": "辨認標準函數記號",
      "choices": [
        "fa",
        "f(a)",
        "a(f)",
        "f+a"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，重新依題意處理：找函數名稱 f；把輸入 a 放入括號；得到 f(a)。因此得到「f(a)」。",
      "explanation": "標準函數記號是函數名稱後接括號，括號內放輸入。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "找函數名稱 f"
        },
        {
          "step": 2,
          "work": "把輸入 a 放入括號"
        },
        {
          "step": 3,
          "work": "得到 f(a)"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "fa",
          "truth": false,
          "reason": "fa 通常表示乘積。"
        },
        {
          "index": 1,
          "choice": "f(a)",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；標準函數記號是函數名稱後接括號，括號內放輸入。"
        },
        {
          "index": 2,
          "choice": "a(f)",
          "truth": false,
          "reason": "a(f) 不是此處的標準記號。"
        },
        {
          "index": 3,
          "choice": "f+a",
          "truth": false,
          "reason": "加法不代表函數作用。"
        }
      ],
      "misconceptionTarget": "混淆函數記號與代數運算",
      "prerequisiteCheck": "先備能力是「能在情境中分辨輸入量與輸出量，且知道同一輸入在函數中只有一個輸出。」本題將此能力用於「辨認標準函數記號」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 98,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「辨認標準函數記號」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 1 的「f(a)」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「辨認標準函數記號」只有題幹所述的一種解讀。",
      "difficultyReason": "記號辨認，屬基礎。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "c75ea72a5fb1a05ed4d1d09a907b06c34691ace7c9963e1c603176344cced34d"
    },
    {
      "questionId": "u15-s004-mc04",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-notation",
      "skillSlot": "s004",
      "skillTitle": "函數記號 f(x)",
      "difficulty": "standard",
      "type": "mc",
      "text": "f(x)=2x+5，則 f(a+1) 等於下列何者？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「處理 f(a+1) 的代入」。",
      "target": "處理 f(a+1) 的代入",
      "choices": [
        "2a+1+5",
        "f(a)+1",
        "2(a+1)+5",
        "2a+5"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，重新依題意處理：圈住輸入 a+1；整體取代每個 x；保留原式運算結構。因此得到「2(a+1)+5」。",
      "explanation": "括號內 a+1 要整體取代 x，所以得到 2(a+1)+5。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "圈住輸入 a+1"
        },
        {
          "step": 2,
          "work": "整體取代每個 x"
        },
        {
          "step": 3,
          "work": "保留原式運算結構"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "2a+1+5",
          "truth": false,
          "reason": "漏把 1 乘以 2。"
        },
        {
          "index": 1,
          "choice": "f(a)+1",
          "truth": false,
          "reason": "函數一般不滿足 f(a+1)=f(a)+1。"
        },
        {
          "index": 2,
          "choice": "2(a+1)+5",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；括號內 a+1 要整體取代 x，所以得到 2(a+1)+5。"
        },
        {
          "index": 3,
          "choice": "2a+5",
          "truth": false,
          "reason": "完全漏掉輸入中的 +1。"
        }
      ],
      "misconceptionTarget": "未整體代入複合輸入",
      "prerequisiteCheck": "先備能力是「能在情境中分辨輸入量與輸出量，且知道同一輸入在函數中只有一個輸出。」本題將此能力用於「處理 f(a+1) 的代入」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 102,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「處理 f(a+1) 的代入」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 2 的「2(a+1)+5」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「處理 f(a+1) 的代入」只有題幹所述的一種解讀。",
      "difficultyReason": "需要維持括號結構，屬標準。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "118eded22d83a736c32daf9cd0ce123ad6a9c7595dce730220f9244edb420dfc"
    },
    {
      "questionId": "u15-s004-mc05",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-notation",
      "skillSlot": "s004",
      "skillTitle": "函數記號 f(x)",
      "difficulty": "standard",
      "type": "mc",
      "text": "g(x)=3x-2。則 g(-m) 為何？",
      "givenConditions": "函數規則與代數輸入 -m 都完整給定，m 不需指定數值；等式應對所有允許的 m 成立。本題的條件審查焦點是「計算含字母輸入的函數記號」。",
      "target": "計算含字母輸入的函數記號",
      "choices": [
        "-3m-2",
        "3m-2",
        "-3m+2",
        "3m+2"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，把完整輸入 -m 代入 x：g(-m)=3(-m)-2=-3m-2，因此答案為選項 0。",
      "explanation": "括號內 -m 整體取代 x，3×(-m)=-3m，常數項仍是 -2。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "g(-m)=3(-m)-2",
          "reason": "整體代入 -m。"
        },
        {
          "step": 2,
          "work": "3(-m)=-3m",
          "reason": "處理乘法符號。"
        },
        {
          "step": 3,
          "work": "g(-m)=-3m-2",
          "reason": "保留常數項。"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "-3m-2",
          "truth": true,
          "reason": "完整代入 -m 並保留常數 -2，結果正確。"
        },
        {
          "index": 1,
          "choice": "3m-2",
          "truth": false,
          "reason": "忽略輸入 -m 的負號。"
        },
        {
          "index": 2,
          "choice": "-3m+2",
          "truth": false,
          "reason": "乘法符號正確，但把原常數 -2 改成 +2。"
        },
        {
          "index": 3,
          "choice": "3m+2",
          "truth": false,
          "reason": "同時忽略輸入負號並改錯常數項符號。"
        }
      ],
      "misconceptionTarget": "字母負輸入未整體代入，或任意改變常數項符號。",
      "prerequisiteCheck": "先備能力是「能在情境中分辨輸入量與輸出量，且知道同一輸入在函數中只有一個輸出。」本題將此能力用於「計算含字母輸入的函數記號」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 106,
      "unitAndRoundingCheck": "負號分別屬於輸入 -m 與常數 -2，括號已清楚區分；本題無單位與近似。針對「計算含字母輸入的函數記號」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "函數規則與代數輸入 -m 都完整給定，m 不需指定數值；等式應對所有允許的 m 成立。；代入後只能得到 -3m-2；其他三式分別改錯輸入負號、常數負號或兩者皆錯。；負號分別屬於輸入 -m 與常數 -2，括號已清楚區分；本題無單位與近似。邊界稽核另確認「計算含字母輸入的函數記號」只有題幹所述的一種解讀。",
      "difficultyReason": "需把代數式 -m 當完整輸入並保留兩個負號角色，屬標準。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "83c0ac3bbab382a07a9bd2ca99203ada27aea80e05249a36847b438ba0b56d9c"
    },
    {
      "questionId": "u15-s004-mc06",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-notation",
      "skillSlot": "s004",
      "skillTitle": "函數記號 f(x)",
      "difficulty": "standard",
      "type": "mc",
      "text": "f(x)=3x+1，若 f(k)=13，則 k 為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由 f(k) 反求輸入」。",
      "target": "由 f(k) 反求輸入",
      "choices": [
        "3",
        "4",
        "12",
        "14"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，重新依題意處理：把 f(k) 展開；建立 3k+1=13；解得 4。因此得到「4」。",
      "explanation": "3k+1=13，得 3k=12，所以 k=4。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "把 f(k) 展開"
        },
        {
          "step": 2,
          "work": "建立 3k+1=13"
        },
        {
          "step": 3,
          "work": "解得 4"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "3",
          "truth": false,
          "reason": "把 13-1 後誤除以 4。"
        },
        {
          "index": 1,
          "choice": "4",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；3k+1=13，得 3k=12，所以 k=4。"
        },
        {
          "index": 2,
          "choice": "12",
          "truth": false,
          "reason": "只減常數未除係數。"
        },
        {
          "index": 3,
          "choice": "14",
          "truth": false,
          "reason": "把 +1 移項方向錯。"
        }
      ],
      "misconceptionTarget": "無法把函數記號展成方程式",
      "prerequisiteCheck": "先備能力是「能在情境中分辨輸入量與輸出量，且知道同一輸入在函數中只有一個輸出。」本題將此能力用於「由 f(k) 反求輸入」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 110,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由 f(k) 反求輸入」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 1 的「4」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由 f(k) 反求輸入」只有題幹所述的一種解讀。",
      "difficultyReason": "函數記號與一元一次方程式結合，屬標準。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "2d7dd651ec571d7f84d9245ca43f32c33c1ebaf1d04c73e8288beb49eb928340"
    },
    {
      "questionId": "u15-s004-mc07",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-notation",
      "skillSlot": "s004",
      "skillTitle": "函數記號 f(x)",
      "difficulty": "advanced",
      "type": "mc",
      "text": "已知 f(x+1)=2x+5，則 f(4) 為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由平移輸入關係求函數值」。",
      "target": "由平移輸入關係求函數值",
      "choices": [
        "9",
        "12",
        "11",
        "13"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，重新依題意處理：令 x+1=4；求 x=3；代右式得 11。因此得到「11」。",
      "explanation": "要讓括號內輸入 x+1=4，得 x=3；所以 f(4)=2×3+5=11。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "令 x+1=4"
        },
        {
          "step": 2,
          "work": "求 x=3"
        },
        {
          "step": 3,
          "work": "代右式得 11"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "9",
          "truth": false,
          "reason": "直接把 x=2 代入。"
        },
        {
          "index": 1,
          "choice": "12",
          "truth": false,
          "reason": "把 x=4 直接代右式得 13 或算錯。"
        },
        {
          "index": 2,
          "choice": "11",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；要讓括號內輸入 x+1=4，得 x=3；所以 f(4)=2×3+5=11。"
        },
        {
          "index": 3,
          "choice": "13",
          "truth": false,
          "reason": "直接以 x=4 代入右式。"
        }
      ],
      "misconceptionTarget": "未先對齊函數輸入",
      "prerequisiteCheck": "先備能力是「能在情境中分辨輸入量與輸出量，且知道同一輸入在函數中只有一個輸出。」本題將此能力用於「由平移輸入關係求函數值」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 114,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由平移輸入關係求函數值」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 2 的「11」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由平移輸入關係求函數值」只有題幹所述的一種解讀。",
      "difficultyReason": "需反向對齊括號內輸入，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "216bdfafc511a3fdffc708ae911c19765f45e822fbb7b611846d15ff92270899"
    },
    {
      "questionId": "u15-s004-mc08",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-notation",
      "skillSlot": "s004",
      "skillTitle": "函數記號 f(x)",
      "difficulty": "advanced",
      "type": "mc",
      "text": "已知 f(2x)=6x-1，則 f(6) 為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由倍數輸入關係求值」。",
      "target": "由倍數輸入關係求值",
      "choices": [
        "11",
        "18",
        "35",
        "17"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用已存答案，重新依題意處理：令 2x=6；求 x=3；算 18-1。因此得到「17」。",
      "explanation": "令 2x=6，得 x=3；代入右式 6×3-1=17。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "令 2x=6"
        },
        {
          "step": 2,
          "work": "求 x=3"
        },
        {
          "step": 3,
          "work": "算 18-1"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "11",
          "truth": false,
          "reason": "把 x=2 代入。"
        },
        {
          "index": 1,
          "choice": "18",
          "truth": false,
          "reason": "漏減 1。"
        },
        {
          "index": 2,
          "choice": "35",
          "truth": false,
          "reason": "把 6 直接代入右式。"
        },
        {
          "index": 3,
          "choice": "17",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；令 2x=6，得 x=3；代入右式 6×3-1=17。"
        }
      ],
      "misconceptionTarget": "把函數輸入與右側變數混為同值",
      "prerequisiteCheck": "先備能力是「能在情境中分辨輸入量與輸出量，且知道同一輸入在函數中只有一個輸出。」本題將此能力用於「由倍數輸入關係求值」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 118,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由倍數輸入關係求值」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 3 的「17」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由倍數輸入關係求值」只有題幹所述的一種解讀。",
      "difficultyReason": "要解輸入對齊方程再計算，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "766bd9e68705586e9cf4b0f5945d23d89fa1b2352cdf0a7d5f919e47aadabff0"
    },
    {
      "questionId": "u15-s004-mc09",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-notation",
      "skillSlot": "s004",
      "skillTitle": "函數記號 f(x)",
      "difficulty": "advanced",
      "type": "mc",
      "text": "p(t)=4t-3。下列 p(2a-1)-p(a) 的化簡結果何者正確？",
      "givenConditions": "a 保持任意代數值，題目要求的是恆等化簡；兩個函數值都使用同一線型規則 p(t)=4t-3。本題的條件審查焦點是「化簡含代數式的函數值」。",
      "target": "化簡含代數式的函數值",
      "choices": [
        "4a",
        "4a-4",
        "8a-7",
        "4a+2"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，先算 p(2a-1)=4(2a-1)-3=8a-7，再算 p(a)=4a-3；相減得 (8a-7)-(4a-3)=4a-4，所以答案為選項 1。",
      "explanation": "兩個函數值要分開代入，再用括號相減：8a-7-4a+3=4a-4。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "p(2a-1)=8a-7",
          "reason": "完整代入第一個輸入。"
        },
        {
          "step": 2,
          "work": "p(a)=4a-3",
          "reason": "計算第二個函數值。"
        },
        {
          "step": 3,
          "work": "(8a-7)-(4a-3)=4a-4",
          "reason": "減去整個第二式並合併。"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "4a",
          "truth": false,
          "reason": "相減時把常數 -7 與 -3 錯誤全部消去。"
        },
        {
          "index": 1,
          "choice": "4a-4",
          "truth": true,
          "reason": "兩次代入與減去括號均正確，合併得 4a-4。"
        },
        {
          "index": 2,
          "choice": "8a-7",
          "truth": false,
          "reason": "只算 p(2a-1)，漏掉減去 p(a)。"
        },
        {
          "index": 3,
          "choice": "4a+2",
          "truth": false,
          "reason": "展開減去 (4a-3) 時常數符號合併錯誤。"
        }
      ],
      "misconceptionTarget": "把函數值之差錯拆，或漏掉減號作用於整個 p(a)。",
      "prerequisiteCheck": "先備能力是「能在情境中分辨輸入量與輸出量，且知道同一輸入在函數中只有一個輸出。」本題將此能力用於「化簡含代數式的函數值」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 122,
      "unitAndRoundingCheck": "減號位於兩個完整函數值之間，解答以括號明示其作用範圍，並確認本題不涉及任何計量單位。針對「化簡含代數式的函數值」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "a 保持任意代數值，題目要求的是恆等化簡；兩個函數值都使用同一線型規則 p(t)=4t-3。；完整展開唯一得到 4a-4；8a-7 是漏算第二項，4a 與 4a+2 都來自常數項相減錯誤。；減號位於兩個完整函數值之間，解答以括號明示其作用範圍，並確認本題不涉及任何計量單位。邊界稽核另確認「化簡含代數式的函數值」只有題幹所述的一種解讀。",
      "difficultyReason": "需完成兩個代數輸入的求值，再處理整式相減與合併，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "6283a355904c55bf6cd84ac0988b4c4f949382f4432460a28cef3225f011e4e9"
    },
    {
      "questionId": "u15-s004-mc10",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-notation",
      "skillSlot": "s004",
      "skillTitle": "函數記號 f(x)",
      "difficulty": "literacy",
      "type": "mc",
      "text": "溫度感測器顯示校正函數 T(c)=c+0.4，其中 c 是實際攝氏溫度。若 c=20，T(20) 代表什麼？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「解釋校正函數記號」。",
      "target": "解釋校正函數記號",
      "choices": [
        "顯示 20°C 時實際 20.4°C",
        "每 20 秒升高 0.4°C",
        "實際 20°C 時顯示 20.4°C",
        "實際溫度與顯示溫度相乘"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，重新依題意處理：辨認輸入實際溫度；代入算 20.4；用完整句解釋輸出。因此得到「實際 20°C 時顯示 20.4°C」。",
      "explanation": "輸入 c 是實際溫度，T(c) 是顯示值，因此 T(20)=20.4°C。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "辨認輸入實際溫度"
        },
        {
          "step": 2,
          "work": "代入算 20.4"
        },
        {
          "step": 3,
          "work": "用完整句解釋輸出"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "顯示 20°C 時實際 20.4°C",
          "truth": false,
          "reason": "顛倒輸入與輸出。"
        },
        {
          "index": 1,
          "choice": "每 20 秒升高 0.4°C",
          "truth": false,
          "reason": "題目沒有時間變數。"
        },
        {
          "index": 2,
          "choice": "實際 20°C 時顯示 20.4°C",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；輸入 c 是實際溫度，T(c) 是顯示值，因此 T(20)=20.4°C。"
        },
        {
          "index": 3,
          "choice": "實際溫度與顯示溫度相乘",
          "truth": false,
          "reason": "函數記號不是乘法。"
        }
      ],
      "misconceptionTarget": "只算數值未理解函數方向",
      "prerequisiteCheck": "先備能力是「能在情境中分辨輸入量與輸出量，且知道同一輸入在函數中只有一個輸出。」本題將此能力用於「解釋校正函數記號」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 126,
      "unitAndRoundingCheck": "「輸入輸出皆為 °C，保留一位小數。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「解釋校正函數記號」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 2 的「實際 20°C 時顯示 20.4°C」符合；其餘錯因分別記錄於 optionAnalysis。；「輸入輸出皆為 °C，保留一位小數。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「解釋校正函數記號」只有題幹所述的一種解讀。",
      "difficultyReason": "需同時代入與解釋記號，屬素養。",
      "literacyContextNecessity": "校正前後的方向決定 T(20) 的語意，情境不可省略。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "242401550237dbdcc85ee0a8597ef7441b0252f999c62d8f93e33957f7099327"
    },
    {
      "questionId": "u15-s004-mc11",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-notation",
      "skillSlot": "s004",
      "skillTitle": "函數記號 f(x)",
      "difficulty": "literacy",
      "type": "mc",
      "text": "商店折價函數 C(p)=0.8p-30，p 是原價（元），適用 p≥200。C(500) 為何？",
      "givenConditions": "題目以「先打八折，再折抵 30 元；500 元符合適用門檻。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「用函數記號解讀雙重折扣」。",
      "target": "用函數記號解讀雙重折扣",
      "choices": [
        "370",
        "430 元",
        "400 元",
        "370 元"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用已存答案，重新依題意處理：確認 500 符合 p≥200；計算八折 400；再減 30 得 370。因此得到「370 元」。",
      "explanation": "C(500)=0.8×500-30=400-30=370 元。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "確認 500 符合 p≥200"
        },
        {
          "step": 2,
          "work": "計算八折 400"
        },
        {
          "step": 3,
          "work": "再減 30 得 370"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "370",
          "truth": false,
          "reason": "數值雖對但缺少情境單位，在完整選項中不如「370 元」。"
        },
        {
          "index": 1,
          "choice": "430 元",
          "truth": false,
          "reason": "把減 30 當加 30。"
        },
        {
          "index": 2,
          "choice": "400 元",
          "truth": false,
          "reason": "只做八折，漏優惠券。"
        },
        {
          "index": 3,
          "choice": "370 元",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；C(500)=0.8×500-30=400-30=370 元。"
        }
      ],
      "misconceptionTarget": "漏掉固定折抵或單位",
      "prerequisiteCheck": "先備能力是「能在情境中分辨輸入量與輸出量，且知道同一輸入在函數中只有一個輸出。」本題將此能力用於「用函數記號解讀雙重折扣」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 130,
      "unitAndRoundingCheck": "「答案以元表示。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「用函數記號解讀雙重折扣」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「先打八折，再折抵 30 元；500 元符合適用門檻。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 3 的「370 元」符合；其餘錯因分別記錄於 optionAnalysis。；「答案以元表示。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「用函數記號解讀雙重折扣」只有題幹所述的一種解讀。",
      "difficultyReason": "需處理百分比、固定折抵與門檻，屬素養。",
      "literacyContextNecessity": "折扣順序與適用門檻是計算 C(p) 的必要資訊。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "40c747d546503d293c37331562e623db44b3e9494acbc39de24f204bf7546af4"
    },
    {
      "questionId": "u15-s004-mc12",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-notation",
      "skillSlot": "s004",
      "skillTitle": "函數記號 f(x)",
      "difficulty": "literacy",
      "type": "mc",
      "text": "公車資訊顯示「預估剩餘距離」D(t)=12-2t（公里），0≤t≤6，t 為出發後小時數。D(4)=4 的正確解讀是什麼？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「解讀距離模型中的函數值」。",
      "target": "解讀距離模型中的函數值",
      "choices": [
        "出發 4 小時後，模型預估剩餘 4 公里",
        "還要 4 小時才出發",
        "出發 4 公里後剩 4 小時",
        "每 4 小時行 2 公里"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，重新依題意處理：讀取 t 的意義；計算 D(4)=4；配回輸入輸出單位。因此得到「出發 4 小時後，模型預估剩餘 4 公里」。",
      "explanation": "D 的輸入是時間，輸出是剩餘距離；代入 4 得 4 公里。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "讀取 t 的意義"
        },
        {
          "step": 2,
          "work": "計算 D(4)=4"
        },
        {
          "step": 3,
          "work": "配回輸入輸出單位"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "出發 4 小時後，模型預估剩餘 4 公里",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；D 的輸入是時間，輸出是剩餘距離；代入 4 得 4 公里。"
        },
        {
          "index": 1,
          "choice": "還要 4 小時才出發",
          "truth": false,
          "reason": "把輸出 4 誤當時間。"
        },
        {
          "index": 2,
          "choice": "出發 4 公里後剩 4 小時",
          "truth": false,
          "reason": "顛倒公里與小時。"
        },
        {
          "index": 3,
          "choice": "每 4 小時行 2 公里",
          "truth": false,
          "reason": "把係數 -2 的意義錯讀。"
        }
      ],
      "misconceptionTarget": "忽略函數記號中的單位方向",
      "prerequisiteCheck": "先備能力是「能在情境中分辨輸入量與輸出量，且知道同一輸入在函數中只有一個輸出。」本題將此能力用於「解讀距離模型中的函數值」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 134,
      "unitAndRoundingCheck": "「t 以小時，D 以公里。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「解讀距離模型中的函數值」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 0 的「出發 4 小時後，模型預估剩餘 4 公里」符合；其餘錯因分別記錄於 optionAnalysis。；「t 以小時，D 以公里。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「解讀距離模型中的函數值」只有題幹所述的一種解讀。",
      "difficultyReason": "重點在精確語意與單位，不只是代入，屬素養。",
      "literacyContextNecessity": "同樣的數字 4 同時出現在輸入與輸出，必須靠單位與記號區分。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "030bf5ace5e5c8977ae17a3ad476c5a6e3a971ff4f3fa1815135aae302beee8c"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u15-s004-cr01",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-notation",
      "skillSlot": "s004",
      "skillTitle": "函數記號 f(x)",
      "type": "constructed-response",
      "prompt": "已知 f(x+2)=3x-1。求 f(8)，再以新的字母 u 寫出 f(u) 的一般式。",
      "requiredWork": "須先對齊輸入求值，再做變數代換導出一般式。",
      "standardSolution": "求 f(8)：令 x+2=8，x=6，所以 f(8)=18-1=17。一般地令 u=x+2，則 x=u-2，因此 f(u)=3(u-2)-1=3u-7。",
      "alternativeMethod": "可先把原式中的 x 改寫成「輸入減 2」：f(輸入)=3(輸入-2)-1，再代入 8。",
      "reasoningSteps": [
        {
          "step": 1,
          "work": "對齊 x+2=8"
        },
        {
          "step": 2,
          "work": "算 f(8)=17"
        },
        {
          "step": 3,
          "work": "令 u=x+2"
        },
        {
          "step": 4,
          "work": "化為 f(u)=3u-7"
        }
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "令 x+2=8 求得 f(8)=17，並令 u=x+2 得 x=u-2、f(u)=3u-7；數值求值與一般式皆完整。"
        },
        {
          "score": 2,
          "criteria": "兩個方法方向正確，但其中一個只有單一代數運算錯；或 f(8)=17 正確而一般式推導少寫一個代換步驟。"
        },
        {
          "score": 1,
          "criteria": "只正確完成 f(8)=17，或只寫出 x=u-2 而未得到 f(u)=3u-7；只列答案無輸入對齊過程亦最高 1 分。"
        },
        {
          "score": 0,
          "criteria": "直接把 x=8 代入右式得到錯誤 f(8)，且沒有令括號內輸入等於指定值的有效步驟。"
        }
      ],
      "partialCreditRules": [
        "f(8) 與一般式是兩個可獨立計分部分；前者錯不自動取消後者的正確輸入代換。",
        "若只把 u=x+2 寫出而未解成 x=u-2，不能取得一般式完整分。"
      ],
      "followThroughPolicy": "本題延續計分依以下具體規則處理：f(8) 與一般式是兩個可獨立計分部分；前者錯不自動取消後者的正確輸入代換。；若只把 u=x+2 寫出而未解成 x=u-2，不能取得一般式完整分。",
      "unitAndNotationRules": "沿用題幹的變數、序對、不等號與計量單位；作答必須清楚呈現以下要求中的符號與單位：須先對齊輸入求值，再做變數代換導出一般式。",
      "answerOnlyPolicy": "只寫最終答案而未呈現必要方法時，依本題 1 分規準處理：只正確完成 f(8)=17，或只寫出 x=u-2 而未得到 f(u)=3u-7；只列答案無輸入對齊過程亦最高 1 分。；答案錯且無可辨識過程則為 0 分。",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "recomputedConclusion": "求 f(8)：令 x+2=8，x=6，所以 f(8)=18-1=17。一般地令 u=x+2，則 x=u-2，因此 f(u)=3(u-2)-1=3u-7。",
        "reviewNote": "獨立重做 u15-s004-cr01 時依序檢查 對齊 x+2=8、算 f(8)=17、令 u=x+2、化為 f(u)=3u-7；標準解與替代法在允許範圍內得到一致結論，量綱與端點亦符合題意。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "5f4f9d5aeb5ec51c69e78d92acfd7973913667d7725939b87704133b215f3577"
    },
    {
      "questionId": "u15-s004-cr02",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-notation",
      "skillSlot": "s004",
      "skillTitle": "函數記號 f(x)",
      "type": "constructed-response",
      "prompt": "p(t)=4t-3。分別化簡 p(a+2) 與 p(a)+2，並說明為何兩式一般不相等。",
      "requiredWork": "須把 a+2 整體代入 p，另行計算 p(a)+2，再以代數差或一個數值反例比較。",
      "standardSolution": "p(a+2)=4(a+2)-3=4a+5；p(a)+2=(4a-3)+2=4a-1。兩式相差 6，因此對所有 a 都不相等。",
      "alternativeMethod": "取 a=0：p(2)=5，而 p(0)+2=-1；一個反例已足以否定「兩式相等」。",
      "reasoningSteps": [
        {
          "step": 1,
          "work": "整體代入 a+2，得 p(a+2)=4a+5"
        },
        {
          "step": 2,
          "work": "先算 p(a)=4a-3，再加 2 得 4a-1"
        },
        {
          "step": 3,
          "work": "比較兩式差為 6"
        },
        {
          "step": 4,
          "work": "說明函數不能任意拆成 p(a)+2"
        }
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確得到 p(a+2)=4a+5 與 p(a)+2=4a-1，並以兩式相差 6 或有效一般比較說明它們不相等。"
        },
        {
          "score": 2,
          "criteria": "兩式代入概念正確但一處常數運算錯，且仍有合理比較；或兩式皆正確但漏寫不相等的明確理由。"
        },
        {
          "score": 1,
          "criteria": "只正確算出其中一式，或只用 a=0 提出有效反例但未完成一般化簡；只有兩個答案無比較亦最高此級。"
        },
        {
          "score": 0,
          "criteria": "把 p(a+2) 直接當成 p(a)+2，且沒有任何可辨認的完整輸入代入步驟。"
        }
      ],
      "partialCreditRules": [
        "若第一式展開常數錯一處，但第二式與比較方法獨立正確，可保留第二部分與方法分。",
        "只舉 a=0 的有效反例可證明不恆等，但未完成題目要求的兩式一般化簡，最高 2 分。"
      ],
      "followThroughPolicy": "本題延續計分依以下具體規則處理：若第一式展開常數錯一處，但第二式與比較方法獨立正確，可保留第二部分與方法分。；只舉 a=0 的有效反例可證明不恆等，但未完成題目要求的兩式一般化簡，最高 2 分。",
      "unitAndNotationRules": "沿用題幹的變數、序對、不等號與計量單位；作答必須清楚呈現以下要求中的符號與單位：須把 a+2 整體代入 p，另行計算 p(a)+2，再以代數差或一個數值反例比較。",
      "answerOnlyPolicy": "只寫最終答案而未呈現必要方法時，依本題 1 分規準處理：只正確算出其中一式，或只用 a=0 提出有效反例但未完成一般化簡；只有兩個答案無比較亦最高此級。；答案錯且無可辨識過程則為 0 分。",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "recomputedConclusion": "p(a+2)=4a+5，p(a)+2=4a-1，兩式恆差 6，故一般不相等。",
        "reviewNote": "獨立重做以 a+2 整體取代 t，得到 4a+5；另由 p(a)=4a-3 再加 2 得 4a-1。代數差為 6，取 a=0 也分別為 5 與 -1。兩種方法一致，評分規準分辨代入、第二式與比較三個得分點，且全題只用線型函數。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "34c62a18334633826a91b2988ccf81fdc796cd873babd85d84ae77a2ce5754f1"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u15-s004-mc01-review",
      "questionId": "u15-s004-mc01",
      "unitId": "u15",
      "skillId": "function-notation",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "6aa0d3894d433aa51d1d9725c69795b90fea861b889063174829abd8499d00ec",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "把輸入 3 代入函數 f 所得到的輸出",
      "storedAnswer": "把輸入 3 代入函數 f 所得到的輸出",
      "independentSolution": "不採用已存答案，重新依題意處理：辨認 f 是函數名稱；辨認 3 是輸入；說明整體是輸出。因此得到「把輸入 3 代入函數 f 所得到的輸出」。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 3 的「把輸入 3 代入函數 f 所得到的輸出」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "純記號語意辨認，屬基礎。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s004-mc01，審查者未讀取存答而依序完成：辨認 f 是函數名稱；辨認 3 是輸入；說明整體是輸出。重算結果為「把輸入 3 代入函數 f 所得到的輸出」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「f(x) 不是乘法記號。；函數記號與字母順序無關。；輸出由規則決定，不必等於輸入。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s004-mc02-review",
      "questionId": "u15-s004-mc02",
      "unitId": "u15",
      "skillId": "function-notation",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "485768be8441da7d5dcac530074a58fc5be4fc486d28aa325a96d3207debe699",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "代入自變數 x 的輸入值",
      "storedAnswer": "代入自變數 x 的輸入值",
      "independentSolution": "不採用已存答案，從記號定義判斷：f(0) 表示把自變數 x 的值指定為 0，再由函數規則求輸出；因此括號內的 0 是輸入值。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "wording": "題幹明確詢問「括號內的 0」而非整個 f(0) 的值，所指符號位置清楚且不會混淆。",
        "choiceUniqueness": "只有第一個選項符合函數記號定義；其餘分別把 0 誤認為輸出、圖形資訊或係數運算結果。",
        "scope": "內容只涉及國中函數記號與自變數輸入的基本意義，沒有使用函數合成、反函數或其他高中概念。",
        "boundary": "即使實際計算 f(0) 會得到 -1，本題仍只問括號內 0 的角色，因此輸入與輸出邊界明確。"
      },
      "difficultyReason": "此題不要求計算 f(0)，而是檢查學生能否辨認括號內數值是函數的輸入位置，符合記號技能的基礎層次。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "獨立依定義檢查：f(a) 的括號內 a 表示要代入自變數的輸入，所以 f(0) 中的 0 是 x 的指定值。選項 0 正確；選項 1 混淆整個函數值，選項 2 無關圖形交點，選項 3 則誤作係數與常數運算。題目從原先的單次代入改成記號角色辨識，與函數值技能的計算題不再近似。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s004-mc03-review",
      "questionId": "u15-s004-mc03",
      "unitId": "u15",
      "skillId": "function-notation",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "c75ea72a5fb1a05ed4d1d09a907b06c34691ace7c9963e1c603176344cced34d",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "f(a)",
      "storedAnswer": "f(a)",
      "independentSolution": "不採用已存答案，重新依題意處理：找函數名稱 f；把輸入 a 放入括號；得到 f(a)。因此得到「f(a)」。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 1 的「f(a)」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "記號辨認，屬基礎。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s004-mc03，審查者未讀取存答而依序完成：找函數名稱 f；把輸入 a 放入括號；得到 f(a)。重算結果為「f(a)」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「fa 通常表示乘積。；a(f) 不是此處的標準記號。；加法不代表函數作用。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s004-mc04-review",
      "questionId": "u15-s004-mc04",
      "unitId": "u15",
      "skillId": "function-notation",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "118eded22d83a736c32daf9cd0ce123ad6a9c7595dce730220f9244edb420dfc",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "2(a+1)+5",
      "storedAnswer": "2(a+1)+5",
      "independentSolution": "不採用已存答案，重新依題意處理：圈住輸入 a+1；整體取代每個 x；保留原式運算結構。因此得到「2(a+1)+5」。",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 2 的「2(a+1)+5」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需要維持括號結構，屬標準。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s004-mc04，審查者未讀取存答而依序完成：圈住輸入 a+1；整體取代每個 x；保留原式運算結構。重算結果為「2(a+1)+5」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「漏把 1 乘以 2。；函數一般不滿足 f(a+1)=f(a)+1。；完全漏掉輸入中的 +1。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s004-mc05-review",
      "questionId": "u15-s004-mc05",
      "unitId": "u15",
      "skillId": "function-notation",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "83c0ac3bbab382a07a9bd2ca99203ada27aea80e05249a36847b438ba0b56d9c",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "-3m-2",
      "storedAnswer": "-3m-2",
      "independentSolution": "不採用已存答案，把完整輸入 -m 代入 x：g(-m)=3(-m)-2=-3m-2，因此答案為選項 0。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "函數規則與代數輸入 -m 都完整給定，m 不需指定數值；等式應對所有允許的 m 成立。",
        "choiceUniqueness": "代入後只能得到 -3m-2；其他三式分別改錯輸入負號、常數負號或兩者皆錯。",
        "languageAndUnits": "負號分別屬於輸入 -m 與常數 -2，括號已清楚區分；本題無單位與近似。"
      },
      "difficultyReason": "要求處理含字母的負輸入，不是單純數值代入，並需保留原常數項，符合標準。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "獨立代入得到 g(-m)=3(-m)-2=-3m-2。選項 0 唯一；其餘三項恰對應忽略輸入負號、改錯常數負號或同時犯兩錯。題目從平方規則改成線型規則，仍測試整體代數輸入與符號控制。負號屬於整個輸入 -m，應先把 x 完整替換成括號內的 -m，再依乘法規則化簡。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s004-mc06-review",
      "questionId": "u15-s004-mc06",
      "unitId": "u15",
      "skillId": "function-notation",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "2d7dd651ec571d7f84d9245ca43f32c33c1ebaf1d04c73e8288beb49eb928340",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "independentSolution": "不採用已存答案，重新依題意處理：把 f(k) 展開；建立 3k+1=13；解得 4。因此得到「4」。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 1 的「4」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "函數記號與一元一次方程式結合，屬標準。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s004-mc06，審查者未讀取存答而依序完成：把 f(k) 展開；建立 3k+1=13；解得 4。重算結果為「4」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把 13-1 後誤除以 4。；只減常數未除係數。；把 +1 移項方向錯。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s004-mc07-review",
      "questionId": "u15-s004-mc07",
      "unitId": "u15",
      "skillId": "function-notation",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "216bdfafc511a3fdffc708ae911c19765f45e822fbb7b611846d15ff92270899",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "11",
      "storedAnswer": "11",
      "independentSolution": "不採用已存答案，重新依題意處理：令 x+1=4；求 x=3；代右式得 11。因此得到「11」。",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 2 的「11」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需反向對齊括號內輸入，屬進階。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s004-mc07，審查者未讀取存答而依序完成：令 x+1=4；求 x=3；代右式得 11。重算結果為「11」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「直接把 x=2 代入。；把 x=4 直接代右式得 13 或算錯。；直接以 x=4 代入右式。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s004-mc08-review",
      "questionId": "u15-s004-mc08",
      "unitId": "u15",
      "skillId": "function-notation",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "766bd9e68705586e9cf4b0f5945d23d89fa1b2352cdf0a7d5f919e47aadabff0",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "17",
      "storedAnswer": "17",
      "independentSolution": "不採用已存答案，重新依題意處理：令 2x=6；求 x=3；算 18-1。因此得到「17」。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 3 的「17」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "要解輸入對齊方程再計算，屬進階。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s004-mc08，審查者未讀取存答而依序完成：令 2x=6；求 x=3；算 18-1。重算結果為「17」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把 x=2 代入。；漏減 1。；把 6 直接代入右式。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s004-mc09-review",
      "questionId": "u15-s004-mc09",
      "unitId": "u15",
      "skillId": "function-notation",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "6283a355904c55bf6cd84ac0988b4c4f949382f4432460a28cef3225f011e4e9",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "4a-4",
      "storedAnswer": "4a-4",
      "independentSolution": "不採用已存答案，先算 p(2a-1)=4(2a-1)-3=8a-7，再算 p(a)=4a-3；相減得 (8a-7)-(4a-3)=4a-4，所以答案為選項 1。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "a 保持任意代數值，題目要求的是恆等化簡；兩個函數值都使用同一線型規則 p(t)=4t-3。",
        "choiceUniqueness": "完整展開唯一得到 4a-4；8a-7 是漏算第二項，4a 與 4a+2 都來自常數項相減錯誤。",
        "languageAndUnits": "減號位於兩個完整函數值之間，解答以括號明示其作用範圍，並確認本題不涉及任何計量單位。"
      },
      "difficultyReason": "同時要求整體代入、兩次函數求值與整式相減，運算與記號層次較多，符合進階。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "獨立計算 p(2a-1)=8a-7、p(a)=4a-3，故差為 8a-7-(4a-3)=4a-4。選項 1 唯一；另外三項分別漏算第二函數值或錯合併常數。題目已改為純線型規則，仍保留高階函數記號運算。兩個函數值相減時第二個式子必須整體加括號，否則常數項的符號會被錯誤保留。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s004-mc10-review",
      "questionId": "u15-s004-mc10",
      "unitId": "u15",
      "skillId": "function-notation",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "242401550237dbdcc85ee0a8597ef7441b0252f999c62d8f93e33957f7099327",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "實際 20°C 時顯示 20.4°C",
      "storedAnswer": "實際 20°C 時顯示 20.4°C",
      "independentSolution": "不採用已存答案，重新依題意處理：辨認輸入實際溫度；代入算 20.4；用完整句解釋輸出。因此得到「實際 20°C 時顯示 20.4°C」。",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 2 的「實際 20°C 時顯示 20.4°C」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「輸入輸出皆為 °C，保留一位小數。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需同時代入與解釋記號，屬素養。",
      "literacyNecessityReview": "校正前後的方向決定 T(20) 的語意，情境不可省略。",
      "reviewerNote": "針對 u15-s004-mc10，審查者未讀取存答而依序完成：辨認輸入實際溫度；代入算 20.4；用完整句解釋輸出。重算結果為「實際 20°C 時顯示 20.4°C」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「顛倒輸入與輸出。；題目沒有時間變數。；函數記號不是乘法。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s004-mc11-review",
      "questionId": "u15-s004-mc11",
      "unitId": "u15",
      "skillId": "function-notation",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "40c747d546503d293c37331562e623db44b3e9494acbc39de24f204bf7546af4",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "370 元",
      "storedAnswer": "370 元",
      "independentSolution": "不採用已存答案，重新依題意處理：確認 500 符合 p≥200；計算八折 400；再減 30 得 370。因此得到「370 元」。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「先打八折，再折抵 30 元；500 元符合適用門檻。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 3 的「370 元」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「答案以元表示。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需處理百分比、固定折抵與門檻，屬素養。",
      "literacyNecessityReview": "折扣順序與適用門檻是計算 C(p) 的必要資訊。",
      "reviewerNote": "針對 u15-s004-mc11，審查者未讀取存答而依序完成：確認 500 符合 p≥200；計算八折 400；再減 30 得 370。重算結果為「370 元」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「數值雖對但缺少情境單位，在完整選項中不如「370 元」。；把減 30 當加 30。；只做八折，漏優惠券。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s004-mc12-review",
      "questionId": "u15-s004-mc12",
      "unitId": "u15",
      "skillId": "function-notation",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "030bf5ace5e5c8977ae17a3ad476c5a6e3a971ff4f3fa1815135aae302beee8c",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "出發 4 小時後，模型預估剩餘 4 公里",
      "storedAnswer": "出發 4 小時後，模型預估剩餘 4 公里",
      "independentSolution": "不採用已存答案，重新依題意處理：讀取 t 的意義；計算 D(4)=4；配回輸入輸出單位。因此得到「出發 4 小時後，模型預估剩餘 4 公里」。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 0 的「出發 4 小時後，模型預估剩餘 4 公里」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「t 以小時，D 以公里。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "重點在精確語意與單位，不只是代入，屬素養。",
      "literacyNecessityReview": "同樣的數字 4 同時出現在輸入與輸出，必須靠單位與記號區分。",
      "reviewerNote": "針對 u15-s004-mc12，審查者未讀取存答而依序完成：讀取 t 的意義；計算 D(4)=4；配回輸入輸出單位。重算結果為「出發 4 小時後，模型預估剩餘 4 公里」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把輸出 4 誤當時間。；顛倒公里與小時。；把係數 -2 的意義錯讀。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [],
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "productionActivationAllowed": false
};
