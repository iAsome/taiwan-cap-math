// Emitted only from reviewed immutable source.
export default {
  "lecture": {
    "lectureId": "u15-s006-lecture",
    "unitId": "u15",
    "numericUnitId": 15,
    "unitTitle": "函數及其圖形",
    "topicId": "u15-graphs",
    "skillId": "function-table-graph",
    "skillSlot": "s006",
    "skillTitle": "函數表與圖形",
    "order": 6,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "prerequisites": [
      {
        "skillId": "function-domain-range-basic",
        "title": "定義域值域基本",
        "requiredLevel": "能從公式或有限輸入集合列出對應輸出，並分清定義域與值域。",
        "bridge": "表格把每個輸入與輸出排成列；坐標圖再把每列資料寫成點 (x,y)，讓變化趨勢可視化。"
      }
    ],
    "learningGoals": [
      "在表格、序對與坐標圖之間轉換",
      "判斷點是否在函數圖形上",
      "由表格辨認線型變化"
    ],
    "vocabulary": [
      {
        "term": "坐標點",
        "meaning": "以 (x,y) 表示一組輸入與輸出"
      },
      {
        "term": "函數表",
        "meaning": "按列記錄 x 與對應 y"
      },
      {
        "term": "圖形",
        "meaning": "所有對應點在坐標平面上的集合"
      }
    ],
    "conceptDevelopment": [
      "函數表的一列 x=a、y=b 對應圖上的點 (a,b)。順序不能顛倒。把多列點標上後，可以觀察它們是否在同一直線或形成其他形狀。",
      "判斷圖形是不是 y 關於 x 的函數，可想像垂直線掃過：同一 x 不可碰到兩個不同點。"
    ],
    "definitionsAndMeaning": "函數表的一列 x=a、y=b 對應圖上的點 (a,b)。順序不能顛倒。把多列點標上後，可以觀察它們是否在同一直線或形成其他形狀。",
    "formulasAndConditions": [
      "表格列 (x,y) ↔ 坐標點 (x,y)。",
      "線型表格在 x 等距增加時，y 的差通常固定。"
    ],
    "invalidUseCases": [
      "把點寫成 (y,x)。",
      "只憑點排列整齊就說是函數。",
      "以橫線測試取代垂直線測試。"
    ],
    "stepByStepMethod": [
      "逐列把 x 放在橫坐標、y 放在縱坐標。",
      "檢查刻度與單位。",
      "判斷點是否符合規則。",
      "需要判定函數時，檢查同一 x 是否只有一個 y。"
    ],
    "workedExamples": [
      {
        "exampleId": "s006-ex01",
        "title": "表到點",
        "prompt": "函數表的一列為 x=-1、y=3。把這列資料畫成坐標點時應寫成哪個序對？",
        "solution": "x=-1、y=3 對應點 (-1,3)。",
        "level": "basic"
      },
      {
        "exampleId": "s006-ex02",
        "title": "點到表",
        "prompt": "圖上有點 (2,-4)。把它填回 x、y 函數表時，兩欄各填多少？",
        "solution": "點 (2,-4) 應記成 x=2、y=-4。",
        "level": "standard"
      },
      {
        "exampleId": "s006-ex03",
        "title": "直線趨勢",
        "prompt": "某表中 x 每增加 1，y 都增加 2。這些點在坐標平面上會呈現什麼共同趨勢？",
        "solution": "x 每增加 1，y 都增加 2，點落在斜率固定的直線上。",
        "level": "advanced"
      },
      {
        "exampleId": "s006-ex04",
        "title": "垂直線判定",
        "prompt": "一個圓形圖案可否整體視為 y 關於 x 的函數圖形？用垂直線檢驗說明。",
        "solution": "圓形在多數 x 位置有上下兩點，因此整個圓不是 y 關於 x 的函數。",
        "level": "connection"
      }
    ],
    "commonMistakes": [
      {
        "mistakeId": "s006-m01",
        "wrongReasoning": "坐標順序顛倒。",
        "correction": "序對固定先寫輸入 x、後寫輸出 y；表格 x=-1、y=3 對應的是 (-1,3)，不是 (3,-1)。"
      },
      {
        "mistakeId": "s006-m02",
        "wrongReasoning": "漏看負號。",
        "correction": "讀表或讀點時把正負號與數值一起抄下，可先對照該點位於哪個象限再檢查符號。"
      },
      {
        "mistakeId": "s006-m03",
        "wrongReasoning": "縱軸刻度不是每格 1 卻直接讀格數。",
        "correction": "先讀坐標軸標示，例如每格可能代表 2 或 5；用「格數×每格數值」取得坐標，不能把格數直接當答案。"
      },
      {
        "mistakeId": "s006-m04",
        "wrongReasoning": "把同一 x 的兩點忽略。",
        "correction": "對每個固定 x 想像畫一條垂直線；若同一條垂直線碰到兩個圖上點，該圖不是 y 關於 x 的函數。"
      },
      {
        "mistakeId": "s006-m05",
        "wrongReasoning": "把相鄰 y 差固定誤當成所有非等距 x 也可直接比較。",
        "correction": "比較平均變化要用 Δy/Δx；只有各列的 Δx 相同時，才可直接比較相鄰 y 的差。"
      }
    ],
    "selfChecks": [
      {
        "prompt": "表中 x=3、y=-2 對應哪個點？",
        "answer": "(3,-2)"
      },
      {
        "prompt": "點 (-4,1) 的輸入是？",
        "answer": "-4"
      },
      {
        "prompt": "同一 x 有兩個不同 y 的圖形是否為函數？",
        "answer": "不是。"
      }
    ],
    "summary": "表格每列就是圖上的一點；讀圖必須守住 x 在前、y 在後。",
    "previousSkillConnection": "function-domain-range-basic",
    "nextSkillConnection": "linear-function-graph",
    "figureRefs": [
      "u15-fig-table-points"
    ],
    "accessibilityNotes": [
      "圖形 u15-fig-table-points 另附繁體中文替代文字與不按比例警告。"
    ],
    "lectureReview": {
      "reviewVersion": "human-lecture-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "decision": "pass",
      "reviewNote": "逐段人工重讀「函數表與圖形」講義：先備橋接已具體指出學生必須會做的前一步，四個例題均改成可獨立作答的完整題目；五個錯誤修正逐一對應本技能的符號、條件、坐標或情境限制。另核對所有公式只使用 U15 線型函數、常數函數或有限對應範圍，未預用未來單元方法。",
      "zeroFoundationCheck": "學生只需具備 能以自己的話說明「定義域值域基本」並完成基本判斷或計算。",
      "capBoundaryCheck": "內容限國中會考線型函數與基本分段情境，未引入指數、對數、微積分或高中函數理論。"
    },
    "canonicalization": "sorted-keys-json-utf8-v1",
    "contentSha256": "604d6d07f1f34bd6c283876c16bb5b035e42230b1ad68d8e85a280c102b1daeb"
  },
  "mcQuestions": [
    {
      "questionId": "u15-s006-mc01",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "function-table-graph",
      "skillSlot": "s006",
      "skillTitle": "函數表與圖形",
      "difficulty": "basic",
      "type": "mc",
      "text": "函數表有一列 x=-2、y=3。對應到坐標平面的點為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由函數表寫坐標點」。",
      "target": "由函數表寫坐標點",
      "choices": [
        "(3,-2)",
        "(-2,3)",
        "(-2,-3)",
        "(2,3)"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，重新依題意處理：確認 x 在前；保留 x 的負號；寫成 (-2,3)。因此得到「(-2,3)」。",
      "explanation": "坐標點順序是 (x,y)，所以為 (-2,3)。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "確認 x 在前"
        },
        {
          "step": 2,
          "work": "保留 x 的負號"
        },
        {
          "step": 3,
          "work": "寫成 (-2,3)"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "(3,-2)",
          "truth": false,
          "reason": "把 x、y 顛倒。"
        },
        {
          "index": 1,
          "choice": "(-2,3)",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；坐標點順序是 (x,y)，所以為 (-2,3)。"
        },
        {
          "index": 2,
          "choice": "(-2,-3)",
          "truth": false,
          "reason": "把 y 的正號誤改。"
        },
        {
          "index": 3,
          "choice": "(2,3)",
          "truth": false,
          "reason": "漏掉 x 的負號。"
        }
      ],
      "misconceptionTarget": "坐標順序或負號錯誤",
      "prerequisiteCheck": "先備能力是「能從公式或有限輸入集合列出對應輸出，並分清定義域與值域。」本題將此能力用於「由函數表寫坐標點」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 90,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由函數表寫坐標點」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 1 的「(-2,3)」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由函數表寫坐標點」只有題幹所述的一種解讀。",
      "difficultyReason": "單列表格轉點，屬基礎。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": "u15-s006-mc01-fig",
      "drawingSpecRef": "units/u15/s006/drawing-specs.jsonl#u15-s006-mc01-fig",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "5c1b1f4286dd1617886935d14a095a9e6a074fd282b35f51e32ef85eac7348ab"
    },
    {
      "questionId": "u15-s006-mc02",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "function-table-graph",
      "skillSlot": "s006",
      "skillTitle": "函數表與圖形",
      "difficulty": "basic",
      "type": "mc",
      "text": "下列哪一點在 y=2x-1 的圖形上？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「判斷點是否在函數圖形上」。",
      "target": "判斷點是否在函數圖形上",
      "choices": [
        "(1,2)",
        "(0,1)",
        "(-1,-1)",
        "(2,3)"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用已存答案，重新依題意處理：逐點可先測 x=2；算出規則值 3；比對 y 坐標。因此得到「(2,3)」。",
      "explanation": "代入 x=2 得 y=4-1=3，所以 (2,3) 符合。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "逐點可先測 x=2"
        },
        {
          "step": 2,
          "work": "算出規則值 3"
        },
        {
          "step": 3,
          "work": "比對 y 坐標"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "(1,2)",
          "truth": false,
          "reason": "x=1 時 y=1，不是 2。"
        },
        {
          "index": 1,
          "choice": "(0,1)",
          "truth": false,
          "reason": "x=0 時 y=-1，不是 1。"
        },
        {
          "index": 2,
          "choice": "(-1,-1)",
          "truth": false,
          "reason": "x=-1 時 y=-3，不是 -1。"
        },
        {
          "index": 3,
          "choice": "(2,3)",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；代入 x=2 得 y=4-1=3，所以 (2,3) 符合。"
        }
      ],
      "misconceptionTarget": "只看坐標外觀未代入驗證",
      "prerequisiteCheck": "先備能力是「能從公式或有限輸入集合列出對應輸出，並分清定義域與值域。」本題將此能力用於「判斷點是否在函數圖形上」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 94,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「判斷點是否在函數圖形上」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 3 的「(2,3)」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「判斷點是否在函數圖形上」只有題幹所述的一種解讀。",
      "difficultyReason": "直接代入單點驗證，屬基礎。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "ada007a7472534f559e7116adee33e8265e8e8d8facc10839931330f69997c1b"
    },
    {
      "questionId": "u15-s006-mc03",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "function-table-graph",
      "skillSlot": "s006",
      "skillTitle": "函數表與圖形",
      "difficulty": "basic",
      "type": "mc",
      "text": "一張圖上同時標出點 (1,2) 與 (1,5)。若這兩點都屬於同一關係，該關係能否表示 y 是 x 的函數？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由圖上點判斷函數」。",
      "target": "由圖上點判斷函數",
      "choices": [
        "能，因為兩點都有坐標",
        "能，因為 y 值不同",
        "不能，因為同一 x=1 有兩個 y",
        "不能，因為 x 必須都是正數"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，重新依題意處理：比較兩點第一坐標；發現皆為 1；判定非函數。因此得到「不能，因為同一 x=1 有兩個 y」。",
      "explanation": "垂直線 x=1 同時通過兩點，表示輸入 1 有兩個不同輸出。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "比較兩點第一坐標"
        },
        {
          "step": 2,
          "work": "發現皆為 1"
        },
        {
          "step": 3,
          "work": "判定非函數"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "能，因為兩點都有坐標",
          "truth": false,
          "reason": "有坐標不代表符合函數。"
        },
        {
          "index": 1,
          "choice": "能，因為 y 值不同",
          "truth": false,
          "reason": "y 不同正是違規原因。"
        },
        {
          "index": 2,
          "choice": "不能，因為同一 x=1 有兩個 y",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；垂直線 x=1 同時通過兩點，表示輸入 1 有兩個不同輸出。"
        },
        {
          "index": 3,
          "choice": "不能，因為 x 必須都是正數",
          "truth": false,
          "reason": "x 的正負不是判準。"
        }
      ],
      "misconceptionTarget": "忽略垂直線測試",
      "prerequisiteCheck": "先備能力是「能從公式或有限輸入集合列出對應輸出，並分清定義域與值域。」本題將此能力用於「由圖上點判斷函數」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 98,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由圖上點判斷函數」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 2 的「不能，因為同一 x=1 有兩個 y」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由圖上點判斷函數」只有題幹所述的一種解讀。",
      "difficultyReason": "直接檢查相同 x，屬基礎。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "a9f0e8edaced6ca4b45a5d6485b5824d115c341c9c9105840e2987fd6e604d1b"
    },
    {
      "questionId": "u15-s006-mc04",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "function-table-graph",
      "skillSlot": "s006",
      "skillTitle": "函數表與圖形",
      "difficulty": "standard",
      "type": "mc",
      "text": "依 y=-x+2，當 x=-1、0、2 時，函數表中的 y 值依序為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由公式完成函數表」。",
      "target": "由公式完成函數表",
      "choices": [
        "3、2、0",
        "1、2、4",
        "-3、-2、0",
        "3、2、4"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，重新依題意處理：代入 -1 得 3；代入 0 得 2；代入 2 得 0。因此得到「3、2、0」。",
      "explanation": "代入得到 y(-1)=3、y(0)=2、y(2)=0。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "代入 -1 得 3"
        },
        {
          "step": 2,
          "work": "代入 0 得 2"
        },
        {
          "step": 3,
          "work": "代入 2 得 0"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "3、2、0",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；代入得到 y(-1)=3、y(0)=2、y(2)=0。"
        },
        {
          "index": 1,
          "choice": "1、2、4",
          "truth": false,
          "reason": "把 -x 誤作 x。"
        },
        {
          "index": 2,
          "choice": "-3、-2、0",
          "truth": false,
          "reason": "整體符號顛倒。"
        },
        {
          "index": 3,
          "choice": "3、2、4",
          "truth": false,
          "reason": "最後一值漏減 2。"
        }
      ],
      "misconceptionTarget": "建立函數表時負號代入錯",
      "prerequisiteCheck": "先備能力是「能從公式或有限輸入集合列出對應輸出，並分清定義域與值域。」本題將此能力用於「由公式完成函數表」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 102,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由公式完成函數表」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 0 的「3、2、0」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由公式完成函數表」只有題幹所述的一種解讀。",
      "difficultyReason": "三次代入並保持順序，屬標準。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "06d25f2ea04ab868349bd91ccc5d8ee1dd35efb72eb004dc994d983b86df289c"
    },
    {
      "questionId": "u15-s006-mc05",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "function-table-graph",
      "skillSlot": "s006",
      "skillTitle": "函數表與圖形",
      "difficulty": "standard",
      "type": "mc",
      "text": "函數表中 x 為 0、1、2、3，y 為 5、8、11、14。若畫成圖形，這些點有何特徵？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由函數表辨認線型圖形」。",
      "target": "由函數表辨認線型圖形",
      "choices": [
        "落在水平線上",
        "落在向右下降的直線上",
        "不可能判斷是否同一直線",
        "落在同一直線上，且 x 每增 1，y 增 3"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用已存答案，重新依題意處理：算相鄰 y 差 3；確認 x 差皆 1；判定固定斜率直線。因此得到「落在同一直線上，且 x 每增 1，y 增 3」。",
      "explanation": "相鄰 x 等距增加 1，而 y 差都為 3，因此變化率固定，點共線且向右上升。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "算相鄰 y 差 3"
        },
        {
          "step": 2,
          "work": "確認 x 差皆 1"
        },
        {
          "step": 3,
          "work": "判定固定斜率直線"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "落在水平線上",
          "truth": false,
          "reason": "y 有改變，不是水平。"
        },
        {
          "index": 1,
          "choice": "落在向右下降的直線上",
          "truth": false,
          "reason": "斜率為正，不是下降。"
        },
        {
          "index": 2,
          "choice": "不可能判斷是否同一直線",
          "truth": false,
          "reason": "完整差值足以判斷四點共線。"
        },
        {
          "index": 3,
          "choice": "落在同一直線上，且 x 每增 1，y 增 3",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；相鄰 x 等距增加 1，而 y 差都為 3，因此變化率固定，點共線且向右上升。"
        }
      ],
      "misconceptionTarget": "只看數值大小未檢查差值",
      "prerequisiteCheck": "先備能力是「能從公式或有限輸入集合列出對應輸出，並分清定義域與值域。」本題將此能力用於「由函數表辨認線型圖形」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 106,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由函數表辨認線型圖形」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 3 的「落在同一直線上，且 x 每增 1，y 增 3」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由函數表辨認線型圖形」只有題幹所述的一種解讀。",
      "difficultyReason": "需從等差變化推論共線，屬標準。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "b1f91da327af71a72804655936fedbb01a52d99c515b16dc32f46e68a85437da"
    },
    {
      "questionId": "u15-s006-mc06",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "function-table-graph",
      "skillSlot": "s006",
      "skillTitle": "函數表與圖形",
      "difficulty": "standard",
      "type": "mc",
      "text": "某圖形通過 (0,4) 與 (2,0)，且為直線。當 x=1 時，函數值為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由兩點圖形內插函數值」。",
      "target": "由兩點圖形內插函數值",
      "choices": [
        "1",
        "3",
        "2",
        "4"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，重新依題意處理：求總變化 -4/2=-2；由 (0,4) 前進 1；得 y=2。因此得到「2」。",
      "explanation": "直線兩點間 y 從 4 降到 0，x 增 2；每增 1，y 降 2，所以 x=1 時 y=2。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "求總變化 -4/2=-2"
        },
        {
          "step": 2,
          "work": "由 (0,4) 前進 1"
        },
        {
          "step": 3,
          "work": "得 y=2"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "1",
          "truth": false,
          "reason": "把變化量除錯。"
        },
        {
          "index": 1,
          "choice": "3",
          "truth": false,
          "reason": "只下降 1。"
        },
        {
          "index": 2,
          "choice": "2",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；直線兩點間 y 從 4 降到 0，x 增 2；每增 1，y 降 2，所以 x=1 時 y=2。"
        },
        {
          "index": 3,
          "choice": "4",
          "truth": false,
          "reason": "把 y 軸截距當所有函數值。"
        }
      ],
      "misconceptionTarget": "未利用直線固定變化率內插",
      "prerequisiteCheck": "先備能力是「能從公式或有限輸入集合列出對應輸出，並分清定義域與值域。」本題將此能力用於「由兩點圖形內插函數值」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 110,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由兩點圖形內插函數值」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 2 的「2」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由兩點圖形內插函數值」只有題幹所述的一種解讀。",
      "difficultyReason": "需利用直線固定變化率，屬標準。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "d4b277ffb91a56696a297d3513552586f55e8ce0c54adec7ece6434d87c105bb"
    },
    {
      "questionId": "u15-s006-mc07",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "function-table-graph",
      "skillSlot": "s006",
      "skillTitle": "函數表與圖形",
      "difficulty": "advanced",
      "type": "mc",
      "text": "四個表格中，哪一組資料不可能全部落在同一條非垂直直線上？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「辨認非線型表格」。",
      "target": "辨認非線型表格",
      "choices": [
        "x:0,1,2；y:1,4,8",
        "x:0,1,2；y:1,4,7",
        "x:-1,1,3；y:5,1,-3",
        "x:2,4,6；y:0,0,0"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，重新依題意處理：逐組算相鄰變化率；找出第一組不一致；確認其餘固定。因此得到「x:0,1,2；y:1,4,8」。",
      "explanation": "第一組 y 差為 3、4，而 x 差都為 1，變化率不固定。其他三組變化率分別固定為 3、-2、0。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "逐組算相鄰變化率"
        },
        {
          "step": 2,
          "work": "找出第一組不一致"
        },
        {
          "step": 3,
          "work": "確認其餘固定"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "x:0,1,2；y:1,4,8",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；第一組 y 差為 3、4，而 x 差都為 1，變化率不固定。其他三組變化率分別固定為 3、-2、0。"
        },
        {
          "index": 1,
          "choice": "x:0,1,2；y:1,4,7",
          "truth": false,
          "reason": "y 差均為 3，能共線。"
        },
        {
          "index": 2,
          "choice": "x:-1,1,3；y:5,1,-3",
          "truth": false,
          "reason": "每次 x 增 2、y 減 4，斜率 -2。"
        },
        {
          "index": 3,
          "choice": "x:2,4,6；y:0,0,0",
          "truth": false,
          "reason": "水平線也是非垂直直線。"
        }
      ],
      "misconceptionTarget": "只看數列近似規律未比較變化率",
      "prerequisiteCheck": "先備能力是「能從公式或有限輸入集合列出對應輸出，並分清定義域與值域。」本題將此能力用於「辨認非線型表格」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 114,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「辨認非線型表格」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 0 的「x:0,1,2；y:1,4,8」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「辨認非線型表格」只有題幹所述的一種解讀。",
      "difficultyReason": "要比較四組資料與不同 x 間距，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "ce08feac1ee96d893468150156b9f8b13f9c7a6c032bcff77519d7dbbac6109d"
    },
    {
      "questionId": "u15-s006-mc08",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "function-table-graph",
      "skillSlot": "s006",
      "skillTitle": "函數表與圖形",
      "difficulty": "advanced",
      "type": "mc",
      "text": "表格中的三點 (1,6)、(3,10)、(5,k) 在同一直線上，則 k 為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由共線條件求缺值」。",
      "target": "由共線條件求缺值",
      "choices": [
        "12",
        "14",
        "15",
        "16"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，重新依題意處理：由前兩點求斜率 2；算 x 再增 2；y 增 4 得 14。因此得到「14」。",
      "explanation": "前兩點斜率 (10-6)/(3-1)=2；x 從 3 到 5 增 2，y 應增 4，所以 k=14。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "由前兩點求斜率 2"
        },
        {
          "step": 2,
          "work": "算 x 再增 2"
        },
        {
          "step": 3,
          "work": "y 增 4 得 14"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "12",
          "truth": false,
          "reason": "只加 x 的增量 2。"
        },
        {
          "index": 1,
          "choice": "14",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；前兩點斜率 (10-6)/(3-1)=2；x 從 3 到 5 增 2，y 應增 4，所以 k=14。"
        },
        {
          "index": 2,
          "choice": "15",
          "truth": false,
          "reason": "把斜率與增量相加。"
        },
        {
          "index": 3,
          "choice": "16",
          "truth": false,
          "reason": "把 10 加 6。"
        }
      ],
      "misconceptionTarget": "未用固定斜率補表格",
      "prerequisiteCheck": "先備能力是「能從公式或有限輸入集合列出對應輸出，並分清定義域與值域。」本題將此能力用於「由共線條件求缺值」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 118,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由共線條件求缺值」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 1 的「14」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由共線條件求缺值」只有題幹所述的一種解讀。",
      "difficultyReason": "需先求變化率再外推缺值，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "99c098b4f63955bbe585b308c070adba3950ffbd96f4f8a1f93807cb745da5a5"
    },
    {
      "questionId": "u15-s006-mc09",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "function-table-graph",
      "skillSlot": "s006",
      "skillTitle": "函數表與圖形",
      "difficulty": "advanced",
      "type": "mc",
      "text": "表格 A：x=0,2,4 時 y=1,5,9；圖形 B 是通過 (0,1)、(1,4) 的直線。下列何者正確？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「比較不同表徵的函數」。",
      "target": "比較不同表徵的函數",
      "choices": [
        "A 與 B 相同，因都通過 (0,1)",
        "A 與 B 相同，因 y 都增加",
        "A 與 B 是不同函數，因斜率分別為 2 與 3",
        "無法比較表格與圖形"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，重新依題意處理：求 A 斜率 2；求 B 斜率 3；比較得不同。因此得到「A 與 B 是不同函數，因斜率分別為 2 與 3」。",
      "explanation": "A 的斜率 (5-1)/2=2；B 的斜率 (4-1)/1=3，雖截距相同仍是不同直線。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "求 A 斜率 2"
        },
        {
          "step": 2,
          "work": "求 B 斜率 3"
        },
        {
          "step": 3,
          "work": "比較得不同"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "A 與 B 相同，因都通過 (0,1)",
          "truth": false,
          "reason": "一個共通點不足以判定同一直線。"
        },
        {
          "index": 1,
          "choice": "A 與 B 相同，因 y 都增加",
          "truth": false,
          "reason": "增加方向相同不代表規則相同。"
        },
        {
          "index": 2,
          "choice": "A 與 B 是不同函數，因斜率分別為 2 與 3",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；A 的斜率 (5-1)/2=2；B 的斜率 (4-1)/1=3，雖截距相同仍是不同直線。"
        },
        {
          "index": 3,
          "choice": "無法比較表格與圖形",
          "truth": false,
          "reason": "表格與圖形可透過坐標和斜率比較。"
        }
      ],
      "misconceptionTarget": "只比單一點或趨勢未比變化率",
      "prerequisiteCheck": "先備能力是「能從公式或有限輸入集合列出對應輸出，並分清定義域與值域。」本題將此能力用於「比較不同表徵的函數」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 122,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「比較不同表徵的函數」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 2 的「A 與 B 是不同函數，因斜率分別為 2 與 3」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「比較不同表徵的函數」只有題幹所述的一種解讀。",
      "difficultyReason": "需跨表格與圖形計算斜率，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "4d803a43a80ac59738ab8f9fdf744662a15c69d56ba72c7e2ef729818232c1df"
    },
    {
      "questionId": "u15-s006-mc10",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "function-table-graph",
      "skillSlot": "s006",
      "skillTitle": "函數表與圖形",
      "difficulty": "literacy",
      "type": "mc",
      "text": "水箱圖形上有點 (4,120)，橫軸是注水時間（分鐘），縱軸是水量（公升）。此點代表什麼？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「解讀情境圖上的點」。",
      "target": "解讀情境圖上的點",
      "choices": [
        "注水 4 分鐘時水量為 120 公升",
        "水量 4 公升時用了 120 分鐘",
        "每分鐘注入 120 公升",
        "4 分鐘共增加 116 公升"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，重新依題意處理：讀橫軸單位分鐘；讀縱軸單位公升；組成情境句。因此得到「注水 4 分鐘時水量為 120 公升」。",
      "explanation": "坐標第一值讀橫軸時間，第二值讀縱軸水量。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "讀橫軸單位分鐘"
        },
        {
          "step": 2,
          "work": "讀縱軸單位公升"
        },
        {
          "step": 3,
          "work": "組成情境句"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "注水 4 分鐘時水量為 120 公升",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；坐標第一值讀橫軸時間，第二值讀縱軸水量。"
        },
        {
          "index": 1,
          "choice": "水量 4 公升時用了 120 分鐘",
          "truth": false,
          "reason": "顛倒坐標與單位。"
        },
        {
          "index": 2,
          "choice": "每分鐘注入 120 公升",
          "truth": false,
          "reason": "單一點不能直接代表每分鐘速率。"
        },
        {
          "index": 3,
          "choice": "4 分鐘共增加 116 公升",
          "truth": false,
          "reason": "不知道起始水量，不能說增加量。"
        }
      ],
      "misconceptionTarget": "把坐標點誤讀為速率或增量",
      "prerequisiteCheck": "先備能力是「能從公式或有限輸入集合列出對應輸出，並分清定義域與值域。」本題將此能力用於「解讀情境圖上的點」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 126,
      "unitAndRoundingCheck": "「第一坐標為分鐘，第二坐標為公升。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「解讀情境圖上的點」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 0 的「注水 4 分鐘時水量為 120 公升」符合；其餘錯因分別記錄於 optionAnalysis。；「第一坐標為分鐘，第二坐標為公升。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「解讀情境圖上的點」只有題幹所述的一種解讀。",
      "difficultyReason": "需將抽象點翻成完整情境，屬素養。",
      "literacyContextNecessity": "軸標與單位是坐標意義的必要部分。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "87d3089ddd443059810bc3e707029253e8f9cf68f6f296d44ba927374b1a9793"
    },
    {
      "questionId": "u15-s006-mc11",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "function-table-graph",
      "skillSlot": "s006",
      "skillTitle": "函數表與圖形",
      "difficulty": "literacy",
      "type": "mc",
      "text": "影印店表格列出張數 x 與總價 C：0→20、10→50、20→80。哪個模型符合表格？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由費用表建立線型函數」。",
      "target": "由費用表建立線型函數",
      "choices": [
        "C=5x",
        "C=3x+20",
        "C=2x+20",
        "C=3x"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，重新依題意處理：求斜率 30/10=3；讀取截距 20；寫 C=3x+20。因此得到「C=3x+20」。",
      "explanation": "每增加 10 張費用增 30 元，單價 3 元；x=0 時仍有固定費 20 元。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "求斜率 30/10=3"
        },
        {
          "step": 2,
          "work": "讀取截距 20"
        },
        {
          "step": 3,
          "work": "寫 C=3x+20"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "C=5x",
          "truth": false,
          "reason": "忽略固定費且斜率錯。"
        },
        {
          "index": 1,
          "choice": "C=3x+20",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；每增加 10 張費用增 30 元，單價 3 元；x=0 時仍有固定費 20 元。"
        },
        {
          "index": 2,
          "choice": "C=2x+20",
          "truth": false,
          "reason": "單價算成 2。"
        },
        {
          "index": 3,
          "choice": "C=3x",
          "truth": false,
          "reason": "漏掉固定費。"
        }
      ],
      "misconceptionTarget": "從表格建模時漏固定費",
      "prerequisiteCheck": "先備能力是「能從公式或有限輸入集合列出對應輸出，並分清定義域與值域。」本題將此能力用於「由費用表建立線型函數」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 130,
      "unitAndRoundingCheck": "「x 以張計，C 以元計。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由費用表建立線型函數」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 1 的「C=3x+20」符合；其餘錯因分別記錄於 optionAnalysis。；「x 以張計，C 以元計。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由費用表建立線型函數」只有題幹所述的一種解讀。",
      "difficultyReason": "需從表格提取單位費與固定費，屬素養。",
      "literacyContextNecessity": "固定開機費只能由 x=0 的表格資料讀出，是情境模型核心。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "ce8fef9c52bd834b0077949340fbbf674e60a325ee22bee380621e5bdc464700"
    },
    {
      "questionId": "u15-s006-mc12",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "function-table-graph",
      "skillSlot": "s006",
      "skillTitle": "函數表與圖形",
      "difficulty": "literacy",
      "type": "mc",
      "text": "距離—時間圖在 t=5 到 t=8 分鐘之間是一條水平線。最合理的解讀是什麼？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「解讀距離時間圖的水平段」。",
      "target": "解讀距離時間圖的水平段",
      "choices": [
        "這 3 分鐘速度固定且不為 0",
        "這 3 分鐘向反方向移動",
        "圖形不是函數",
        "這 3 分鐘位置沒有改變，可能停下來"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用已存答案，重新依題意處理：辨認橫軸時間持續增加；讀出縱軸距離不變；解釋為停留。因此得到「這 3 分鐘位置沒有改變，可能停下來」。",
      "explanation": "水平線表示時間增加但距離不變，所以變化率為 0。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "辨認橫軸時間持續增加"
        },
        {
          "step": 2,
          "work": "讀出縱軸距離不變"
        },
        {
          "step": 3,
          "work": "解釋為停留"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "這 3 分鐘速度固定且不為 0",
          "truth": false,
          "reason": "非零固定速度應有斜線。"
        },
        {
          "index": 1,
          "choice": "這 3 分鐘向反方向移動",
          "truth": false,
          "reason": "反向移動會使距離下降。"
        },
        {
          "index": 2,
          "choice": "圖形不是函數",
          "truth": false,
          "reason": "每個時間仍只有一個距離。"
        },
        {
          "index": 3,
          "choice": "這 3 分鐘位置沒有改變，可能停下來",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；水平線表示時間增加但距離不變，所以變化率為 0。"
        }
      ],
      "misconceptionTarget": "把水平段誤讀成非零速度或非函數",
      "prerequisiteCheck": "先備能力是「能從公式或有限輸入集合列出對應輸出，並分清定義域與值域。」本題將此能力用於「解讀距離時間圖的水平段」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 134,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「解讀距離時間圖的水平段」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 3 的「這 3 分鐘位置沒有改變，可能停下來」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「解讀距離時間圖的水平段」只有題幹所述的一種解讀。",
      "difficultyReason": "要把圖形形狀轉成運動狀態，屬素養。",
      "literacyContextNecessity": "水平段在移動情境中代表停留，圖形資訊不可被純公式替代。",
      "figureId": "u15-s006-mc12-fig",
      "drawingSpecRef": "units/u15/s006/drawing-specs.jsonl#u15-s006-mc12-fig",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "898a2a81bea7a46494317d69d02f705d11c2a6b40cedd5117f6ed8f61564c845"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u15-s006-cr01",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "function-table-graph",
      "skillSlot": "s006",
      "skillTitle": "函數表與圖形",
      "type": "constructed-response",
      "prompt": "表格為 x=-1,0,2,3；y=4,2,-2,-4。請把四點寫成坐標，判斷是否共線，並求其函數式。",
      "requiredWork": "須列點、證明變化率一致並寫式。",
      "standardSolution": "四點為 (-1,4),(0,2),(2,-2),(3,-4)。相鄰變化率皆為 -2；又 x=0 時 y=2，所以函數式 y=-2x+2，四點共線。",
      "alternativeMethod": "可先由 (0,2)、(2,-2) 求直線 y=-2x+2，再代入另兩點驗證。",
      "reasoningSteps": [
        {
          "step": 1,
          "work": "表格轉四點"
        },
        {
          "step": 2,
          "work": "求斜率 -2"
        },
        {
          "step": 3,
          "work": "讀截距 2"
        },
        {
          "step": 4,
          "work": "代點驗證共線"
        }
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確寫出四點 (-1,4)、(0,2)、(2,-2)、(3,-4)，以一致斜率 -2 證明共線，並得到 y=-2x+2。"
        },
        {
          "score": 2,
          "criteria": "四點與函數式正確，但共線驗證不完整；或表格轉點正確且斜率方法正確，僅一處非核心運算錯。"
        },
        {
          "score": 1,
          "criteria": "只正確把表格轉成四個坐標，或只由其中兩點求出斜率但未完成函數式與共線檢查。"
        },
        {
          "score": 0,
          "criteria": "普遍顛倒坐標成 (y,x)，或沒有使用表格中的 x、y 配對建立任何直線關係。"
        }
      ],
      "partialCreditRules": [
        "四點中僅一點因抄表錯誤，後續用其餘正確點求 y=-2x+2 並驗證，最高 2 分。",
        "只由兩點求出直線但未檢查另外兩點，不能取得「四點共線」的完整分。"
      ],
      "followThroughPolicy": "本題延續計分依以下具體規則處理：四點中僅一點因抄表錯誤，後續用其餘正確點求 y=-2x+2 並驗證，最高 2 分。；只由兩點求出直線但未檢查另外兩點，不能取得「四點共線」的完整分。",
      "unitAndNotationRules": "沿用題幹的變數、序對、不等號與計量單位；作答必須清楚呈現以下要求中的符號與單位：須列點、證明變化率一致並寫式。",
      "answerOnlyPolicy": "只寫最終答案而未呈現必要方法時，依本題 1 分規準處理：只正確把表格轉成四個坐標，或只由其中兩點求出斜率但未完成函數式與共線檢查。；答案錯且無可辨識過程則為 0 分。",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "recomputedConclusion": "四點為 (-1,4),(0,2),(2,-2),(3,-4)。相鄰變化率皆為 -2；又 x=0 時 y=2，所以函數式 y=-2x+2，四點共線。",
        "reviewNote": "獨立重做 u15-s006-cr01 時依序檢查 表格轉四點、求斜率 -2、讀截距 2、代點驗證共線；標準解與替代法在允許範圍內得到一致結論，量綱與端點亦符合題意。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "35e9028316f83bc41c7921758e693d4640acdeedf4890c47d9f5b653f157a9dd"
    },
    {
      "questionId": "u15-s006-cr02",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "function-table-graph",
      "skillSlot": "s006",
      "skillTitle": "函數表與圖形",
      "type": "constructed-response",
      "prompt": "三點 A(1,3)、B(4,9)、C(7,k) 在同一直線。求 k，並說明在圖上 C 相對於 B 的水平與垂直位移。",
      "requiredWork": "須利用相同斜率求 k，並用坐標差描述位移。",
      "standardSolution": "AB 的斜率=(9-3)/(4-1)=2。B 到 C 的水平位移為 +3，因此垂直位移應為 +6，k=9+6=15。C 在 B 的右方 3、上方 6。",
      "alternativeMethod": "可先求直線 y=2x+1，再代 x=7 得 k=15。",
      "reasoningSteps": [
        {
          "step": 1,
          "work": "求 AB 斜率 2"
        },
        {
          "step": 2,
          "work": "算 Δx=3"
        },
        {
          "step": 3,
          "work": "算 Δy=6"
        },
        {
          "step": 4,
          "work": "得 k=15 並描述位移"
        }
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "由 A、B 求斜率 2，指出 B→C 水平 +3、垂直 +6，求得 k=15，並完整描述 C 在 B 右 3、上 6。"
        },
        {
          "score": 2,
          "criteria": "正確求得 k=15，且斜率或位移推理大致完整，但漏寫水平或垂直方向其中一項。"
        },
        {
          "score": 1,
          "criteria": "只求得斜率 2，或知道水平位移 +3 應配合固定斜率但未正確完成 k。"
        },
        {
          "score": 0,
          "criteria": "未使用共線斜率，或把水平位移直接加到 y 坐標而得到無法支持的 k。"
        }
      ],
      "partialCreditRules": [
        "若斜率 2 正確但把 B→C 水平位移錯寫成 -3，後續垂直方向一致，保留斜率方法分，最高 1 分。",
        "k=15 正確但沒有寫「右 3、上 6」的位移說明，最高 2 分。"
      ],
      "followThroughPolicy": "本題延續計分依以下具體規則處理：若斜率 2 正確但把 B→C 水平位移錯寫成 -3，後續垂直方向一致，保留斜率方法分，最高 1 分。；k=15 正確但沒有寫「右 3、上 6」的位移說明，最高 2 分。",
      "unitAndNotationRules": "沿用題幹的變數、序對、不等號與計量單位；作答必須清楚呈現以下要求中的符號與單位：須利用相同斜率求 k，並用坐標差描述位移。",
      "answerOnlyPolicy": "只寫最終答案而未呈現必要方法時，依本題 1 分規準處理：只求得斜率 2，或知道水平位移 +3 應配合固定斜率但未正確完成 k。；答案錯且無可辨識過程則為 0 分。",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "recomputedConclusion": "AB 的斜率=(9-3)/(4-1)=2。B 到 C 的水平位移為 +3，因此垂直位移應為 +6，k=9+6=15。C 在 B 的右方 3、上方 6。",
        "reviewNote": "獨立重做 u15-s006-cr02 時依序檢查 求 AB 斜率 2、算 Δx=3、算 Δy=6、得 k=15 並描述位移；標準解與替代法在允許範圍內得到一致結論，量綱與端點亦符合題意。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "7a64dcf415b46bb494fddf315dc558875cab8864e388724a63dcd357933b8437"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u15-s006-mc01-review",
      "questionId": "u15-s006-mc01",
      "unitId": "u15",
      "skillId": "function-table-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "5c1b1f4286dd1617886935d14a095a9e6a074fd282b35f51e32ef85eac7348ab",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "(-2,3)",
      "storedAnswer": "(-2,3)",
      "independentSolution": "不採用已存答案，重新依題意處理：確認 x 在前；保留 x 的負號；寫成 (-2,3)。因此得到「(-2,3)」。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 1 的「(-2,3)」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "單列表格轉點，屬基礎。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s006-mc01，審查者未讀取存答而依序完成：確認 x 在前；保留 x 的負號；寫成 (-2,3)。重算結果為「(-2,3)」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把 x、y 顛倒。；把 y 的正號誤改。；漏掉 x 的負號。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s006-mc02-review",
      "questionId": "u15-s006-mc02",
      "unitId": "u15",
      "skillId": "function-table-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "ada007a7472534f559e7116adee33e8265e8e8d8facc10839931330f69997c1b",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "(2,3)",
      "storedAnswer": "(2,3)",
      "independentSolution": "不採用已存答案，重新依題意處理：逐點可先測 x=2；算出規則值 3；比對 y 坐標。因此得到「(2,3)」。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 3 的「(2,3)」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "直接代入單點驗證，屬基礎。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s006-mc02，審查者未讀取存答而依序完成：逐點可先測 x=2；算出規則值 3；比對 y 坐標。重算結果為「(2,3)」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「x=1 時 y=1，不是 2。；x=0 時 y=-1，不是 1。；x=-1 時 y=-3，不是 -1。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s006-mc03-review",
      "questionId": "u15-s006-mc03",
      "unitId": "u15",
      "skillId": "function-table-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "a9f0e8edaced6ca4b45a5d6485b5824d115c341c9c9105840e2987fd6e604d1b",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "不能，因為同一 x=1 有兩個 y",
      "storedAnswer": "不能，因為同一 x=1 有兩個 y",
      "independentSolution": "不採用已存答案，重新依題意處理：比較兩點第一坐標；發現皆為 1；判定非函數。因此得到「不能，因為同一 x=1 有兩個 y」。",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 2 的「不能，因為同一 x=1 有兩個 y」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "直接檢查相同 x，屬基礎。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s006-mc03，審查者未讀取存答而依序完成：比較兩點第一坐標；發現皆為 1；判定非函數。重算結果為「不能，因為同一 x=1 有兩個 y」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「有坐標不代表符合函數。；y 不同正是違規原因。；x 的正負不是判準。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s006-mc04-review",
      "questionId": "u15-s006-mc04",
      "unitId": "u15",
      "skillId": "function-table-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "06d25f2ea04ab868349bd91ccc5d8ee1dd35efb72eb004dc994d983b86df289c",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "3、2、0",
      "storedAnswer": "3、2、0",
      "independentSolution": "不採用已存答案，重新依題意處理：代入 -1 得 3；代入 0 得 2；代入 2 得 0。因此得到「3、2、0」。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 0 的「3、2、0」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "三次代入並保持順序，屬標準。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s006-mc04，審查者未讀取存答而依序完成：代入 -1 得 3；代入 0 得 2；代入 2 得 0。重算結果為「3、2、0」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把 -x 誤作 x。；整體符號顛倒。；最後一值漏減 2。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s006-mc05-review",
      "questionId": "u15-s006-mc05",
      "unitId": "u15",
      "skillId": "function-table-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "b1f91da327af71a72804655936fedbb01a52d99c515b16dc32f46e68a85437da",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "落在同一直線上，且 x 每增 1，y 增 3",
      "storedAnswer": "落在同一直線上，且 x 每增 1，y 增 3",
      "independentSolution": "不採用已存答案，重新依題意處理：算相鄰 y 差 3；確認 x 差皆 1；判定固定斜率直線。因此得到「落在同一直線上，且 x 每增 1，y 增 3」。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 3 的「落在同一直線上，且 x 每增 1，y 增 3」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需從等差變化推論共線，屬標準。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s006-mc05，審查者未讀取存答而依序完成：算相鄰 y 差 3；確認 x 差皆 1；判定固定斜率直線。重算結果為「落在同一直線上，且 x 每增 1，y 增 3」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「y 有改變，不是水平。；斜率為正，不是下降。；完整差值足以判斷四點共線。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s006-mc06-review",
      "questionId": "u15-s006-mc06",
      "unitId": "u15",
      "skillId": "function-table-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "d4b277ffb91a56696a297d3513552586f55e8ce0c54adec7ece6434d87c105bb",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "2",
      "storedAnswer": "2",
      "independentSolution": "不採用已存答案，重新依題意處理：求總變化 -4/2=-2；由 (0,4) 前進 1；得 y=2。因此得到「2」。",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 2 的「2」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需利用直線固定變化率，屬標準。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s006-mc06，審查者未讀取存答而依序完成：求總變化 -4/2=-2；由 (0,4) 前進 1；得 y=2。重算結果為「2」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把變化量除錯。；只下降 1。；把 y 軸截距當所有函數值。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s006-mc07-review",
      "questionId": "u15-s006-mc07",
      "unitId": "u15",
      "skillId": "function-table-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "ce08feac1ee96d893468150156b9f8b13f9c7a6c032bcff77519d7dbbac6109d",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "x:0,1,2；y:1,4,8",
      "storedAnswer": "x:0,1,2；y:1,4,8",
      "independentSolution": "不採用已存答案，重新依題意處理：逐組算相鄰變化率；找出第一組不一致；確認其餘固定。因此得到「x:0,1,2；y:1,4,8」。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 0 的「x:0,1,2；y:1,4,8」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "要比較四組資料與不同 x 間距，屬進階。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s006-mc07，審查者未讀取存答而依序完成：逐組算相鄰變化率；找出第一組不一致；確認其餘固定。重算結果為「x:0,1,2；y:1,4,8」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「y 差均為 3，能共線。；每次 x 增 2、y 減 4，斜率 -2。；水平線也是非垂直直線。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s006-mc08-review",
      "questionId": "u15-s006-mc08",
      "unitId": "u15",
      "skillId": "function-table-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "99c098b4f63955bbe585b308c070adba3950ffbd96f4f8a1f93807cb745da5a5",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "14",
      "storedAnswer": "14",
      "independentSolution": "不採用已存答案，重新依題意處理：由前兩點求斜率 2；算 x 再增 2；y 增 4 得 14。因此得到「14」。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 1 的「14」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需先求變化率再外推缺值，屬進階。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s006-mc08，審查者未讀取存答而依序完成：由前兩點求斜率 2；算 x 再增 2；y 增 4 得 14。重算結果為「14」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「只加 x 的增量 2。；把斜率與增量相加。；把 10 加 6。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s006-mc09-review",
      "questionId": "u15-s006-mc09",
      "unitId": "u15",
      "skillId": "function-table-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "4d803a43a80ac59738ab8f9fdf744662a15c69d56ba72c7e2ef729818232c1df",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "A 與 B 是不同函數，因斜率分別為 2 與 3",
      "storedAnswer": "A 與 B 是不同函數，因斜率分別為 2 與 3",
      "independentSolution": "不採用已存答案，重新依題意處理：求 A 斜率 2；求 B 斜率 3；比較得不同。因此得到「A 與 B 是不同函數，因斜率分別為 2 與 3」。",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 2 的「A 與 B 是不同函數，因斜率分別為 2 與 3」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需跨表格與圖形計算斜率，屬進階。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s006-mc09，審查者未讀取存答而依序完成：求 A 斜率 2；求 B 斜率 3；比較得不同。重算結果為「A 與 B 是不同函數，因斜率分別為 2 與 3」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「一個共通點不足以判定同一直線。；增加方向相同不代表規則相同。；表格與圖形可透過坐標和斜率比較。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s006-mc10-review",
      "questionId": "u15-s006-mc10",
      "unitId": "u15",
      "skillId": "function-table-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "87d3089ddd443059810bc3e707029253e8f9cf68f6f296d44ba927374b1a9793",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "注水 4 分鐘時水量為 120 公升",
      "storedAnswer": "注水 4 分鐘時水量為 120 公升",
      "independentSolution": "不採用已存答案，重新依題意處理：讀橫軸單位分鐘；讀縱軸單位公升；組成情境句。因此得到「注水 4 分鐘時水量為 120 公升」。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 0 的「注水 4 分鐘時水量為 120 公升」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「第一坐標為分鐘，第二坐標為公升。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需將抽象點翻成完整情境，屬素養。",
      "literacyNecessityReview": "軸標與單位是坐標意義的必要部分。",
      "reviewerNote": "針對 u15-s006-mc10，審查者未讀取存答而依序完成：讀橫軸單位分鐘；讀縱軸單位公升；組成情境句。重算結果為「注水 4 分鐘時水量為 120 公升」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「顛倒坐標與單位。；單一點不能直接代表每分鐘速率。；不知道起始水量，不能說增加量。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s006-mc11-review",
      "questionId": "u15-s006-mc11",
      "unitId": "u15",
      "skillId": "function-table-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "ce8fef9c52bd834b0077949340fbbf674e60a325ee22bee380621e5bdc464700",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "C=3x+20",
      "storedAnswer": "C=3x+20",
      "independentSolution": "不採用已存答案，重新依題意處理：求斜率 30/10=3；讀取截距 20；寫 C=3x+20。因此得到「C=3x+20」。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 1 的「C=3x+20」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「x 以張計，C 以元計。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需從表格提取單位費與固定費，屬素養。",
      "literacyNecessityReview": "固定開機費只能由 x=0 的表格資料讀出，是情境模型核心。",
      "reviewerNote": "針對 u15-s006-mc11，審查者未讀取存答而依序完成：求斜率 30/10=3；讀取截距 20；寫 C=3x+20。重算結果為「C=3x+20」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「忽略固定費且斜率錯。；單價算成 2。；漏掉固定費。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s006-mc12-review",
      "questionId": "u15-s006-mc12",
      "unitId": "u15",
      "skillId": "function-table-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "898a2a81bea7a46494317d69d02f705d11c2a6b40cedd5117f6ed8f61564c845",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "這 3 分鐘位置沒有改變，可能停下來",
      "storedAnswer": "這 3 分鐘位置沒有改變，可能停下來",
      "independentSolution": "不採用已存答案，重新依題意處理：辨認橫軸時間持續增加；讀出縱軸距離不變；解釋為停留。因此得到「這 3 分鐘位置沒有改變，可能停下來」。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 3 的「這 3 分鐘位置沒有改變，可能停下來」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "要把圖形形狀轉成運動狀態，屬素養。",
      "literacyNecessityReview": "水平段在移動情境中代表停留，圖形資訊不可被純公式替代。",
      "reviewerNote": "針對 u15-s006-mc12，審查者未讀取存答而依序完成：辨認橫軸時間持續增加；讀出縱軸距離不變；解釋為停留。重算結果為「這 3 分鐘位置沒有改變，可能停下來」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「非零固定速度應有斜線。；反向移動會使距離下降。；每個時間仍只有一個距離。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u15-fig-table-points",
      "unitId": "u15",
      "skillSlot": "s006",
      "title": "函數表與坐標點的對應",
      "svgPath": "figures/u15/u15-fig-table-points.svg",
      "altText": "左側表格列出 x 為負二、零、二，y 為三、一、負一；右側坐標平面標出三個對應點。",
      "drawingSpec": {
        "canvas": {
          "width": 640,
          "height": 420,
          "viewBox": "0 0 640 420"
        },
        "plotArea": {
          "left": 80,
          "top": 40,
          "width": 500,
          "height": 320
        },
        "xRange": [
          -4,
          4
        ],
        "yRange": [
          -3,
          5
        ],
        "objects": [
          [
            "point",
            -2,
            3,
            "A(-2,3)"
          ],
          [
            "point",
            0,
            1,
            "B(0,1)"
          ],
          [
            "point",
            2,
            -1,
            "C(2,-1)"
          ]
        ],
        "axisLabels": [
          "x",
          "y"
        ],
        "visibleLineRules": "座標軸 2px、資料線 3px、輔助線 1px 虛線；端點依條件使用實心或空心圓。",
        "hiddenLineRules": "本單元為平面函數圖，不使用隱藏線。",
        "labelRules": "標籤避開資料線至少 6px，負號、括號與單位完整顯示。",
        "tickRules": "端點、零點與題目必要坐標必須可讀；禁止依格數猜測未標示值。",
        "toScale": true,
        "visualInferenceWarning": "圖形依坐標範圍繪製，但答案必須以刻度與標示數值為準。",
        "exactLabelPositions": [
          {
            "text": "x",
            "x": "608",
            "y": "268.0",
            "fontSize": "16",
            "textAnchor": "start"
          },
          {
            "text": "y",
            "x": "340.0",
            "y": "50",
            "fontSize": "16",
            "textAnchor": "start"
          },
          {
            "text": "-4",
            "x": "68.0",
            "y": "260.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "0",
            "x": "318.0",
            "y": "260.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "4",
            "x": "568.0",
            "y": "260.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "-3",
            "x": "295.0",
            "y": "364.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "0",
            "x": "295.0",
            "y": "244.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "5",
            "x": "295.0",
            "y": "44.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "A(-2,3)",
            "x": "213.0",
            "y": "112.0",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "B(0,1)",
            "x": "338.0",
            "y": "192.0",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "C(2,-1)",
            "x": "463.0",
            "y": "272.0",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "x",
            "x": "608",
            "y": "48",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "y",
            "x": "47",
            "y": "48",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "-2",
            "x": "13",
            "y": "70",
            "fontSize": "13",
            "textAnchor": "start"
          },
          {
            "text": "3",
            "x": "45",
            "y": "70",
            "fontSize": "13",
            "textAnchor": "start"
          },
          {
            "text": "0",
            "x": "13",
            "y": "92",
            "fontSize": "13",
            "textAnchor": "start"
          },
          {
            "text": "1",
            "x": "45",
            "y": "92",
            "fontSize": "13",
            "textAnchor": "start"
          },
          {
            "text": "2",
            "x": "13",
            "y": "114",
            "fontSize": "13",
            "textAnchor": "start"
          },
          {
            "text": "-1",
            "x": "45",
            "y": "114",
            "fontSize": "13",
            "textAnchor": "start"
          },
          {
            "text": "圖形依坐標刻度繪製；線條粗細不可作為數值依據。",
            "x": "80",
            "y": "400",
            "fontSize": "12",
            "textAnchor": "start"
          }
        ],
        "exactSvgGeometry": [
          {
            "id": "u15-fig-table-points-x-axis",
            "element": "line",
            "attributes": {
              "x1": "80",
              "y1": "240.0",
              "x2": "590",
              "y2": "240.0",
              "stroke": "#111",
              "stroke-width": "2",
              "marker-end": "url(#arrow)"
            }
          },
          {
            "id": "u15-fig-table-points-y-axis",
            "element": "line",
            "attributes": {
              "x1": "330.0",
              "y1": "360",
              "x2": "330.0",
              "y2": "30",
              "stroke": "#111",
              "stroke-width": "2",
              "marker-end": "url(#arrow)"
            }
          },
          {
            "id": "u15-fig-table-points-obj-1",
            "element": "circle",
            "attributes": {
              "cx": "205.0",
              "cy": "120.0",
              "r": "6",
              "fill": "#111"
            }
          },
          {
            "id": "u15-fig-table-points-obj-2",
            "element": "circle",
            "attributes": {
              "cx": "330.0",
              "cy": "200.0",
              "r": "6",
              "fill": "#111"
            }
          },
          {
            "id": "u15-fig-table-points-obj-3",
            "element": "circle",
            "attributes": {
              "cx": "455.0",
              "cy": "280.0",
              "r": "6",
              "fill": "#111"
            }
          }
        ]
      },
      "svgTitle": "函數表與坐標點的對應",
      "svgDesc": "左側表格列出 x 為負二、零、二，y 為三、一、負一；右側坐標平面標出三個對應點。",
      "svgAssertions": [
        "u15-fig-table-points",
        "u15-fig-table-points-title",
        "u15-fig-table-points-desc",
        "role=\"img\"",
        "viewBox=\"0 0 640 420\"",
        "函數表與坐標點的對應"
      ],
      "mobileReadabilityReview": "以 360px 寬縮放檢查，關鍵字標籤字級不低於等效 12px，點半徑與虛線仍可辨識。",
      "answerLeakageReview": "圖僅呈現題目已給資料與必要坐標，不以醒目文字直接寫出選項答案；需由讀圖或計算完成。",
      "figureReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "manualInspectionRequired": true,
        "reviewNote": "已檢查 u15-fig-table-points 的軸向、刻度、負號、端點實空心、標籤遮擋與手機縮放；圖形內容與「表格每列依序成為坐標點 (x,y)，用虛線引導對應。」一致。",
        "manualInspectionCompleted": true,
        "renderedAt": "2026-07-12T18:20:00+08:00",
        "renderedCanvas": "640×420 PNG，另以雙欄 contact sheet 檢視全部 14 圖",
        "renderedInspectionSummary": "逐圖檢查坐標軸方向、刻度、公式與點標籤、實心及空心端點、虛線、文字遮擋、360px 縮放可讀性與答案洩漏；修正後未見幾何或標示衝突。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "33705f6a2d9c58972370a8a14affbba4ac6009801235a17e99a2df9e08cab579"
    },
    {
      "figureId": "u15-s006-mc01-fig",
      "unitId": "u15",
      "skillSlot": "s006",
      "title": "表格列 x=-2、y=3 的坐標位置",
      "svgPath": "figures/u15/u15-s006-mc01-fig.svg",
      "altText": "小表格列出 x 等於負二、y 等於三，坐標平面標出點負二逗號三。",
      "drawingSpec": {
        "canvas": {
          "width": 640,
          "height": 420,
          "viewBox": "0 0 640 420"
        },
        "plotArea": {
          "left": 80,
          "top": 40,
          "width": 500,
          "height": 320
        },
        "xRange": [
          -4,
          3
        ],
        "yRange": [
          -2,
          5
        ],
        "objects": [
          [
            "point",
            -2,
            3,
            "(-2,3)"
          ],
          [
            "guide",
            -2,
            3,
            "x=-2",
            "y=3"
          ]
        ],
        "axisLabels": [
          "x",
          "y"
        ],
        "visibleLineRules": "座標軸 2px、資料線 3px、輔助線 1px 虛線；端點依條件使用實心或空心圓。",
        "hiddenLineRules": "本單元為平面函數圖，不使用隱藏線。",
        "labelRules": "標籤避開資料線至少 6px，負號、括號與單位完整顯示。",
        "tickRules": "端點、零點與題目必要坐標必須可讀；禁止依格數猜測未標示值。",
        "toScale": true,
        "visualInferenceWarning": "圖形依坐標範圍繪製，但答案必須以刻度與標示數值為準。",
        "exactLabelPositions": [
          {
            "text": "x",
            "x": "608",
            "y": "296.6",
            "fontSize": "16",
            "textAnchor": "start"
          },
          {
            "text": "y",
            "x": "375.7",
            "y": "50",
            "fontSize": "16",
            "textAnchor": "start"
          },
          {
            "text": "-4",
            "x": "68.0",
            "y": "288.6",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "0",
            "x": "353.7",
            "y": "288.6",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "3",
            "x": "568.0",
            "y": "288.6",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "-2",
            "x": "330.7",
            "y": "364.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "0",
            "x": "330.7",
            "y": "272.6",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "5",
            "x": "330.7",
            "y": "44.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "(-2,3)",
            "x": "230.9",
            "y": "123.4",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "x=-2",
            "x": "214.9",
            "y": "286.6",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "y=3",
            "x": "337.7",
            "y": "126.4",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "x",
            "x": "608",
            "y": "48",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "y",
            "x": "47",
            "y": "48",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "-2",
            "x": "13",
            "y": "70",
            "fontSize": "13",
            "textAnchor": "start"
          },
          {
            "text": "3",
            "x": "45",
            "y": "70",
            "fontSize": "13",
            "textAnchor": "start"
          },
          {
            "text": "圖形依坐標刻度繪製；線條粗細不可作為數值依據。",
            "x": "80",
            "y": "400",
            "fontSize": "12",
            "textAnchor": "start"
          }
        ],
        "exactSvgGeometry": [
          {
            "id": "u15-s006-mc01-fig-x-axis",
            "element": "line",
            "attributes": {
              "x1": "80",
              "y1": "268.6",
              "x2": "590",
              "y2": "268.6",
              "stroke": "#111",
              "stroke-width": "2",
              "marker-end": "url(#arrow)"
            }
          },
          {
            "id": "u15-s006-mc01-fig-y-axis",
            "element": "line",
            "attributes": {
              "x1": "365.7",
              "y1": "360",
              "x2": "365.7",
              "y2": "30",
              "stroke": "#111",
              "stroke-width": "2",
              "marker-end": "url(#arrow)"
            }
          },
          {
            "id": "u15-s006-mc01-fig-obj-1",
            "element": "circle",
            "attributes": {
              "cx": "222.9",
              "cy": "131.4",
              "r": "6",
              "fill": "#111"
            }
          },
          {
            "id": "u15-s006-mc01-fig-obj-2-v",
            "element": "line",
            "attributes": {
              "x1": "222.9",
              "y1": "131.4",
              "x2": "222.9",
              "y2": "268.6",
              "stroke": "#6b7280",
              "stroke-dasharray": "5 4"
            }
          },
          {
            "id": "u15-s006-mc01-fig-obj-2-h",
            "element": "line",
            "attributes": {
              "x1": "222.9",
              "y1": "131.4",
              "x2": "365.7",
              "y2": "131.4",
              "stroke": "#6b7280",
              "stroke-dasharray": "5 4"
            }
          }
        ]
      },
      "svgTitle": "表格列 x=-2、y=3 的坐標位置",
      "svgDesc": "小表格列出 x 等於負二、y 等於三，坐標平面標出點負二逗號三。",
      "svgAssertions": [
        "u15-s006-mc01-fig",
        "u15-s006-mc01-fig-title",
        "u15-s006-mc01-fig-desc",
        "role=\"img\"",
        "viewBox=\"0 0 640 420\"",
        "表格列 x=-2、y=3 的坐標位置"
      ],
      "mobileReadabilityReview": "以 360px 寬縮放檢查，關鍵字標籤字級不低於等效 12px，點半徑與虛線仍可辨識。",
      "answerLeakageReview": "圖僅呈現題目已給資料與必要坐標，不以醒目文字直接寫出選項答案；需由讀圖或計算完成。",
      "figureReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "manualInspectionRequired": true,
        "reviewNote": "已檢查 u15-s006-mc01-fig 的軸向、刻度、負號、端點實空心、標籤遮擋與手機縮放；圖形內容與「題目專用圖，強調第一坐標是 x、第二坐標是 y。」一致。",
        "manualInspectionCompleted": true,
        "renderedAt": "2026-07-12T18:20:00+08:00",
        "renderedCanvas": "640×420 PNG，另以雙欄 contact sheet 檢視全部 14 圖",
        "renderedInspectionSummary": "逐圖檢查坐標軸方向、刻度、公式與點標籤、實心及空心端點、虛線、文字遮擋、360px 縮放可讀性與答案洩漏；修正後未見幾何或標示衝突。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "208d26a77ef94559936cd45d4d0ca36d945d6c41d3be81e31ae57e60bb913a97"
    },
    {
      "figureId": "u15-s006-mc12-fig",
      "unitId": "u15",
      "skillSlot": "s006",
      "title": "距離時間圖的水平區段",
      "svgPath": "figures/u15/u15-s006-mc12-fig.svg",
      "altText": "距離時間圖在五到八分鐘之間維持四百公尺，呈水平線。",
      "drawingSpec": {
        "canvas": {
          "width": 640,
          "height": 420,
          "viewBox": "0 0 640 420"
        },
        "plotArea": {
          "left": 80,
          "top": 40,
          "width": 500,
          "height": 320
        },
        "xRange": [
          0,
          10
        ],
        "yRange": [
          0,
          6
        ],
        "objects": [
          [
            "polyline",
            [
              [
                0,
                0
              ],
              [
                5,
                4
              ],
              [
                8,
                4
              ],
              [
                10,
                5
              ]
            ],
            "距離圖"
          ],
          [
            "highlight",
            5,
            4,
            8,
            4,
            "t=5 至 8"
          ]
        ],
        "axisLabels": [
          "時間（分鐘）",
          "距離（百公尺）"
        ],
        "visibleLineRules": "座標軸 2px、資料線 3px、輔助線 1px 虛線；端點依條件使用實心或空心圓。",
        "hiddenLineRules": "本單元為平面函數圖，不使用隱藏線。",
        "labelRules": "標籤避開資料線至少 6px，負號、括號與單位完整顯示。",
        "tickRules": "端點、零點與題目必要坐標必須可讀；禁止依格數猜測未標示值。",
        "toScale": true,
        "visualInferenceWarning": "圖形依坐標範圍繪製，但答案必須以刻度與標示數值為準。",
        "exactLabelPositions": [
          {
            "text": "時間（分鐘）",
            "x": "445",
            "y": "388.0",
            "fontSize": "16",
            "textAnchor": "start"
          },
          {
            "text": "距離（百公尺）",
            "x": "90.0",
            "y": "50",
            "fontSize": "16",
            "textAnchor": "start"
          },
          {
            "text": "0",
            "x": "68.0",
            "y": "380.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "10",
            "x": "568.0",
            "y": "380.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "0",
            "x": "45.0",
            "y": "364.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "6",
            "x": "45.0",
            "y": "44.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "距離圖",
            "x": "520.0",
            "y": "83.3",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "t=5 至 8",
            "x": "380.0",
            "y": "134.7",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "圖形依坐標刻度繪製；線條粗細不可作為數值依據。",
            "x": "80",
            "y": "400",
            "fontSize": "12",
            "textAnchor": "start"
          }
        ],
        "exactSvgGeometry": [
          {
            "id": "u15-s006-mc12-fig-x-axis",
            "element": "line",
            "attributes": {
              "x1": "80",
              "y1": "360.0",
              "x2": "590",
              "y2": "360.0",
              "stroke": "#111",
              "stroke-width": "2",
              "marker-end": "url(#arrow)"
            }
          },
          {
            "id": "u15-s006-mc12-fig-y-axis",
            "element": "line",
            "attributes": {
              "x1": "80.0",
              "y1": "360",
              "x2": "80.0",
              "y2": "30",
              "stroke": "#111",
              "stroke-width": "2",
              "marker-end": "url(#arrow)"
            }
          },
          {
            "id": "u15-s006-mc12-fig-obj-1",
            "element": "polyline",
            "attributes": {
              "points": "80.0,360.0 330.0,146.7 480.0,146.7 580.0,93.3",
              "fill": "none",
              "stroke": "#111",
              "stroke-width": "3"
            }
          },
          {
            "id": "u15-s006-mc12-fig-obj-2",
            "element": "line",
            "attributes": {
              "x1": "330.0",
              "y1": "146.7",
              "x2": "480.0",
              "y2": "146.7",
              "stroke": "#111",
              "stroke-width": "7"
            }
          }
        ]
      },
      "svgTitle": "距離時間圖的水平區段",
      "svgDesc": "距離時間圖在五到八分鐘之間維持四百公尺，呈水平線。",
      "svgAssertions": [
        "u15-s006-mc12-fig",
        "u15-s006-mc12-fig-title",
        "u15-s006-mc12-fig-desc",
        "role=\"img\"",
        "viewBox=\"0 0 640 420\"",
        "距離時間圖的水平區段"
      ],
      "mobileReadabilityReview": "以 360px 寬縮放檢查，關鍵字標籤字級不低於等效 12px，點半徑與虛線仍可辨識。",
      "answerLeakageReview": "圖僅呈現題目已給資料與必要坐標，不以醒目文字直接寫出選項答案；需由讀圖或計算完成。",
      "figureReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "manualInspectionRequired": true,
        "reviewNote": "已檢查 u15-s006-mc12-fig 的軸向、刻度、負號、端點實空心、標籤遮擋與手機縮放；圖形內容與「水平段表示時間增加但距離不變。」一致。",
        "manualInspectionCompleted": true,
        "renderedAt": "2026-07-12T18:20:00+08:00",
        "renderedCanvas": "640×420 PNG，另以雙欄 contact sheet 檢視全部 14 圖",
        "renderedInspectionSummary": "逐圖檢查坐標軸方向、刻度、公式與點標籤、實心及空心端點、虛線、文字遮擋、360px 縮放可讀性與答案洩漏；修正後未見幾何或標示衝突。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "f5847ff687dc740da9516f838a58bfe7d94715e7fe9c2d56b2c498857cbf2e40"
    }
  ],
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "productionActivationAllowed": false
};
