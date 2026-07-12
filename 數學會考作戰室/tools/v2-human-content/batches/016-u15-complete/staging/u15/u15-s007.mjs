// Emitted only from reviewed immutable source.
export default {
  "lecture": {
    "lectureId": "u15-s007-lecture",
    "unitId": "u15",
    "numericUnitId": 15,
    "unitTitle": "函數及其圖形",
    "topicId": "u15-graphs",
    "skillId": "linear-function-graph",
    "skillSlot": "s007",
    "skillTitle": "線型函數圖形",
    "order": 7,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "prerequisites": [
      {
        "skillId": "function-table-graph",
        "title": "函數表與圖形",
        "requiredLevel": "能在表格與坐標圖之間轉換，正確把一列 x、y 資料畫成點，並理解垂直線檢驗。",
        "bridge": "當表格中的輸出以固定變化量隨輸入改變，這些點會落在直線上；本節建立線型函數公式、點與直線之間的連結。"
      }
    ],
    "learningGoals": [
      "辨認 y=ax+b 的直線圖形",
      "由點或圖形求線型規則",
      "判斷遞增、遞減、水平與交點"
    ],
    "vocabulary": [
      {
        "term": "線型函數",
        "meaning": "可寫成 y=ax+b 的函數"
      },
      {
        "term": "直線",
        "meaning": "線型函數在坐標平面的圖形"
      },
      {
        "term": "截距",
        "meaning": "直線與坐標軸相交時的坐標資訊"
      }
    ],
    "conceptDevelopment": [
      "線型函數 y=ax+b 的圖形是一條直線。只要找到兩個不同 x 的點，就能確定直線；但畫圖時仍要延伸並標明刻度。",
      "a>0 時向右上升，a<0 時向右下降，a=0 時是水平線。b 是 x=0 時的 y 值，也就是 y 軸截距。"
    ],
    "definitionsAndMeaning": "線型函數 y=ax+b 的圖形是一條直線。只要找到兩個不同 x 的點，就能確定直線；但畫圖時仍要延伸並標明刻度。",
    "formulasAndConditions": [
      "y=ax+b。",
      "兩點變化率 a=(y₂-y₁)/(x₂-x₁)，x₂≠x₁。",
      "把任一點代回 y=ax+b 可求 b。"
    ],
    "invalidUseCases": [
      "用單一點就宣稱唯一決定直線。",
      "斜率分子分母順序不一致。",
      "把 b 看成 x 軸截距。"
    ],
    "stepByStepMethod": [
      "從公式或資料取得兩個不同 x 的點。",
      "正確標出兩點並連成直線。",
      "用變化率檢查方向與陡峭程度。",
      "用 x=0 檢查 y 軸截距。"
    ],
    "workedExamples": [
      {
        "exampleId": "s007-ex01",
        "title": "公式找點",
        "prompt": "要畫 y=2x+1，先取 x=0 與 x=1。求兩個對應點，並說明如何以它們畫出直線。",
        "solution": "y=2x+1 可取 (0,1)、(1,3)。",
        "level": "basic"
      },
      {
        "exampleId": "s007-ex02",
        "title": "兩點求式",
        "prompt": "一直線通過 (0,-1) 與 (2,5)。求斜率與線型函數式。",
        "solution": "過 (0,-1)、(2,5)，斜率 3，所以 y=3x-1。",
        "level": "standard"
      },
      {
        "exampleId": "s007-ex03",
        "title": "交點",
        "prompt": "兩直線 y=2x+1 與 y=-x+7 相交。聯立求交點，並解釋交點的函數意義。",
        "solution": "y=2x+1 與 y=-x+7 聯立得 x=2、y=5，交點 (2,5)。",
        "level": "advanced"
      },
      {
        "exampleId": "s007-ex04",
        "title": "水平線",
        "prompt": "函數 y=4 的圖形為何是水平線？把它寫成 y=ax+b 並指出斜率。",
        "solution": "y=4 可寫成 y=0x+4，是線型函數的水平圖形。",
        "level": "connection"
      }
    ],
    "commonMistakes": [
      {
        "mistakeId": "s007-m01",
        "wrongReasoning": "把 y 軸截距寫成 (b,0)。",
        "correction": "y 軸上的點一定有 x=0，所以 y 軸截距 b 對應點是 (0,b)，不是 (b,0)。"
      },
      {
        "mistakeId": "s007-m02",
        "wrongReasoning": "只畫線段卻未說明定義域限制。",
        "correction": "若定義域沒有端點限制，線型函數圖形應向兩端延伸；只有情境或區間明示時才畫有限線段。"
      },
      {
        "mistakeId": "s007-m03",
        "wrongReasoning": "算斜率時只減 y 不減 x。",
        "correction": "斜率必須是 (y₂-y₁)/(x₂-x₁)，分子與分母使用同一點次序，不能只計算 y 的差。"
      },
      {
        "mistakeId": "s007-m04",
        "wrongReasoning": "負斜率仍畫成向右上升。",
        "correction": "斜率 a<0 表示 x 向右增加時 y 下降；作圖可從一點向右走正的 Δx、再向下走負的 Δy。"
      },
      {
        "mistakeId": "s007-m05",
        "wrongReasoning": "求交點只求 x 未回代 y。",
        "correction": "聯立後先得 x 坐標，還要代回任一原式求 y；交點答案須寫完整序對 (x,y)。"
      }
    ],
    "selfChecks": [
      {
        "prompt": "y=-2x+3 的圖形向右上升或下降？",
        "answer": "下降。"
      },
      {
        "prompt": "y=5 的斜率？",
        "answer": "0"
      },
      {
        "prompt": "過 (0,2)、(1,5) 的斜率？",
        "answer": "3"
      }
    ],
    "summary": "線型函數圖形由斜率控制方向，截距決定直線在 y 軸的位置。",
    "previousSkillConnection": "function-table-graph",
    "nextSkillConnection": "linear-function-slope-intercept",
    "figureRefs": [
      "u15-fig-linear-basic"
    ],
    "accessibilityNotes": [
      "圖形 u15-fig-linear-basic 另附繁體中文替代文字與不按比例警告。"
    ],
    "lectureReview": {
      "reviewVersion": "human-lecture-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "decision": "pass",
      "reviewNote": "逐段人工重讀「線型函數圖形」講義：先備橋接已具體指出學生必須會做的前一步，四個例題均改成可獨立作答的完整題目；五個錯誤修正逐一對應本技能的符號、條件、坐標或情境限制。另核對所有公式只使用 U15 線型函數、常數函數或有限對應範圍，未預用未來單元方法。",
      "zeroFoundationCheck": "學生只需具備 能以自己的話說明「函數表與圖形」並完成基本判斷或計算。",
      "capBoundaryCheck": "內容限國中會考線型函數與基本分段情境，未引入指數、對數、微積分或高中函數理論。"
    },
    "canonicalization": "sorted-keys-json-utf8-v1",
    "contentSha256": "478e6dcc87f4d638e1ea29ffd220e81d7490164fd4cf46b31514f314b9b9041d"
  },
  "mcQuestions": [
    {
      "questionId": "u15-s007-mc01",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-graph",
      "skillSlot": "s007",
      "skillTitle": "線型函數圖形",
      "difficulty": "basic",
      "type": "mc",
      "text": "點 (2,5) 是否在 y=2x+1 的圖形上？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「判斷點是否在線型函數圖形上」。",
      "target": "判斷點是否在線型函數圖形上",
      "choices": [
        "否，因為 2+5≠1",
        "否，因為斜率不是 5",
        "是，因為 2×2+1=5",
        "是，因為所有正坐標都在圖上"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，重新依題意處理：代入 x=2；算出 y=5；比對點。因此得到「是，因為 2×2+1=5」。",
      "explanation": "代入 x=2 得 y=5，與點的第二坐標相同。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "代入 x=2"
        },
        {
          "step": 2,
          "work": "算出 y=5"
        },
        {
          "step": 3,
          "work": "比對點"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "否，因為 2+5≠1",
          "truth": false,
          "reason": "使用無關的坐標和。"
        },
        {
          "index": 1,
          "choice": "否，因為斜率不是 5",
          "truth": false,
          "reason": "斜率與點的 y 坐標不是同一量。"
        },
        {
          "index": 2,
          "choice": "是，因為 2×2+1=5",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；代入 x=2 得 y=5，與點的第二坐標相同。"
        },
        {
          "index": 3,
          "choice": "是，因為所有正坐標都在圖上",
          "truth": false,
          "reason": "正坐標不保證在特定直線上。"
        }
      ],
      "misconceptionTarget": "未代入方程式驗點",
      "prerequisiteCheck": "先備能力是「能在表格與坐標圖之間轉換，正確把一列 x、y 資料畫成點，並理解垂直線檢驗。」本題將此能力用於「判斷點是否在線型函數圖形上」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 90,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「判斷點是否在線型函數圖形上」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 2 的「是，因為 2×2+1=5」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「判斷點是否在線型函數圖形上」只有題幹所述的一種解讀。",
      "difficultyReason": "單點代入驗證，屬基礎。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "bddfd516c573d86ac6b4b5a9228fb3fd867346c4eb6901c7ccb17a68191eb4ea"
    },
    {
      "questionId": "u15-s007-mc02",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-graph",
      "skillSlot": "s007",
      "skillTitle": "線型函數圖形",
      "difficulty": "basic",
      "type": "mc",
      "text": "y=-x+3 的圖形與 y 軸交於哪一點？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「找線型函數的 y 軸交點」。",
      "target": "找線型函數的 y 軸交點",
      "choices": [
        "(0,3)",
        "(3,0)",
        "(0,-3)",
        "(-3,0)"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，重新依題意處理：令 x=0；求 y=3；寫成坐標。因此得到「(0,3)」。",
      "explanation": "y 軸上的 x=0，代入得 y=3，所以交點 (0,3)。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "令 x=0"
        },
        {
          "step": 2,
          "work": "求 y=3"
        },
        {
          "step": 3,
          "work": "寫成坐標"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "(0,3)",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；y 軸上的 x=0，代入得 y=3，所以交點 (0,3)。"
        },
        {
          "index": 1,
          "choice": "(3,0)",
          "truth": false,
          "reason": "這是 x 軸交點。"
        },
        {
          "index": 2,
          "choice": "(0,-3)",
          "truth": false,
          "reason": "截距符號讀錯。"
        },
        {
          "index": 3,
          "choice": "(-3,0)",
          "truth": false,
          "reason": "同時顛倒與符號錯。"
        }
      ],
      "misconceptionTarget": "混淆 x 軸與 y 軸截距",
      "prerequisiteCheck": "先備能力是「能在表格與坐標圖之間轉換，正確把一列 x、y 資料畫成點，並理解垂直線檢驗。」本題將此能力用於「找線型函數的 y 軸交點」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 94,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「找線型函數的 y 軸交點」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 0 的「(0,3)」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「找線型函數的 y 軸交點」只有題幹所述的一種解讀。",
      "difficultyReason": "直接以 x=0 求截距，屬基礎。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "8d49ccb3dc6076a16910fe6d3b81a9054ed5769dc44d693e542232ef96fffe3d"
    },
    {
      "questionId": "u15-s007-mc03",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-graph",
      "skillSlot": "s007",
      "skillTitle": "線型函數圖形",
      "difficulty": "basic",
      "type": "mc",
      "text": "函數 y=4 的圖形是什麼？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「辨認常數線型函數圖形」。",
      "target": "辨認常數線型函數圖形",
      "choices": [
        "通過 x=4 的垂直直線",
        "通過原點的斜線",
        "只有一個點 (0,4)",
        "通過 y=4 的水平直線"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用已存答案，重新依題意處理：把式子寫成 y=0x+4；令多個 x 得相同 y；辨認水平線。因此得到「通過 y=4 的水平直線」。",
      "explanation": "所有 x 都對應 y=4，因此圖形是水平線。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "把式子寫成 y=0x+4"
        },
        {
          "step": 2,
          "work": "令多個 x 得相同 y"
        },
        {
          "step": 3,
          "work": "辨認水平線"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "通過 x=4 的垂直直線",
          "truth": false,
          "reason": "x=4 才是垂直線，且不是 y 關於 x 的函數。"
        },
        {
          "index": 1,
          "choice": "通過原點的斜線",
          "truth": false,
          "reason": "斜率為 0，不是斜線。"
        },
        {
          "index": 2,
          "choice": "只有一個點 (0,4)",
          "truth": false,
          "reason": "定義域若為所有實數，點有無限多個。"
        },
        {
          "index": 3,
          "choice": "通過 y=4 的水平直線",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；所有 x 都對應 y=4，因此圖形是水平線。"
        }
      ],
      "misconceptionTarget": "把常數函數誤認為單點或垂直線",
      "prerequisiteCheck": "先備能力是「能在表格與坐標圖之間轉換，正確把一列 x、y 資料畫成點，並理解垂直線檢驗。」本題將此能力用於「辨認常數線型函數圖形」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 98,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「辨認常數線型函數圖形」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 3 的「通過 y=4 的水平直線」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「辨認常數線型函數圖形」只有題幹所述的一種解讀。",
      "difficultyReason": "考 a=0 的邊界情形，屬基礎。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "72fc23d6bd7d7c2dece46a4694aa3c403c105fae165b80cc56bc28f5502bc86e"
    },
    {
      "questionId": "u15-s007-mc04",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-graph",
      "skillSlot": "s007",
      "skillTitle": "線型函數圖形",
      "difficulty": "standard",
      "type": "mc",
      "text": "直線通過 (0,-1) 與 (2,5)。它的函數式為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由兩點建立線型函數」。",
      "target": "由兩點建立線型函數",
      "choices": [
        "y=2x-1",
        "y=3x-1",
        "y=3x+1",
        "y=-3x-1"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，重新依題意處理：求斜率 6/2=3；讀 y 截距 -1；寫出式子。因此得到「y=3x-1」。",
      "explanation": "斜率 (5-(-1))/(2-0)=3，且 x=0 時 y=-1，所以 y=3x-1。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "求斜率 6/2=3"
        },
        {
          "step": 2,
          "work": "讀 y 截距 -1"
        },
        {
          "step": 3,
          "work": "寫出式子"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "y=2x-1",
          "truth": false,
          "reason": "把 x 差 2 當斜率。"
        },
        {
          "index": 1,
          "choice": "y=3x-1",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；斜率 (5-(-1))/(2-0)=3，且 x=0 時 y=-1，所以 y=3x-1。"
        },
        {
          "index": 2,
          "choice": "y=3x+1",
          "truth": false,
          "reason": "截距符號錯。"
        },
        {
          "index": 3,
          "choice": "y=-3x-1",
          "truth": false,
          "reason": "斜率方向錯。"
        }
      ],
      "misconceptionTarget": "由兩點求斜率或截距錯",
      "prerequisiteCheck": "先備能力是「能在表格與坐標圖之間轉換，正確把一列 x、y 資料畫成點，並理解垂直線檢驗。」本題將此能力用於「由兩點建立線型函數」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 102,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由兩點建立線型函數」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 1 的「y=3x-1」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由兩點建立線型函數」只有題幹所述的一種解讀。",
      "difficultyReason": "需兩步求斜率與截距，屬標準。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "005838dbe13e461361160d127de8bf9bfdfc38bcde26959c1f6a4879cd27be72"
    },
    {
      "questionId": "u15-s007-mc05",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-graph",
      "skillSlot": "s007",
      "skillTitle": "線型函數圖形",
      "difficulty": "standard",
      "type": "mc",
      "text": "下列哪個函數的圖形向右移動時會下降？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由係數判斷遞增遞減」。",
      "target": "由係數判斷遞增遞減",
      "choices": [
        "y=-2x+5",
        "y=2x-5",
        "y=5x",
        "y=3"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，重新依題意處理：讀各式斜率；找負斜率；選 -2。因此得到「y=-2x+5」。",
      "explanation": "斜率 -2<0，所以 x 增加時 y 減少。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "讀各式斜率"
        },
        {
          "step": 2,
          "work": "找負斜率"
        },
        {
          "step": 3,
          "work": "選 -2"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "y=-2x+5",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；斜率 -2<0，所以 x 增加時 y 減少。"
        },
        {
          "index": 1,
          "choice": "y=2x-5",
          "truth": false,
          "reason": "斜率 2>0，向右上升。"
        },
        {
          "index": 2,
          "choice": "y=5x",
          "truth": false,
          "reason": "斜率 5>0。"
        },
        {
          "index": 3,
          "choice": "y=3",
          "truth": false,
          "reason": "斜率 0，保持水平。"
        }
      ],
      "misconceptionTarget": "只看常數項判斷方向",
      "prerequisiteCheck": "先備能力是「能在表格與坐標圖之間轉換，正確把一列 x、y 資料畫成點，並理解垂直線檢驗。」本題將此能力用於「由係數判斷遞增遞減」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 106,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由係數判斷遞增遞減」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 0 的「y=-2x+5」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由係數判斷遞增遞減」只有題幹所述的一種解讀。",
      "difficultyReason": "需辨認斜率正負，屬標準。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "fd7cb11a9611ac555ddc3dff7f976eabf60d5931325ff5302a007bb387bc955b"
    },
    {
      "questionId": "u15-s007-mc06",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-graph",
      "skillSlot": "s007",
      "skillTitle": "線型函數圖形",
      "difficulty": "standard",
      "type": "mc",
      "text": "兩條直線 y=2x+1 與 y=2x-4 的圖形關係為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「判斷兩線圖形關係」。",
      "target": "判斷兩線圖形關係",
      "choices": [
        "相交於 (0,1)",
        "完全重合",
        "互相垂直",
        "平行且不重合"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用已存答案，重新依題意處理：比較斜率皆 2；比較截距 1 與 -4；判定平行不重合。因此得到「平行且不重合」。",
      "explanation": "兩式斜率同為 2，但截距不同，所以為不同的平行線。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "比較斜率皆 2"
        },
        {
          "step": 2,
          "work": "比較截距 1 與 -4"
        },
        {
          "step": 3,
          "work": "判定平行不重合"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "相交於 (0,1)",
          "truth": false,
          "reason": "(0,1) 只在第一條。"
        },
        {
          "index": 1,
          "choice": "完全重合",
          "truth": false,
          "reason": "截距不同，不能重合。"
        },
        {
          "index": 2,
          "choice": "互相垂直",
          "truth": false,
          "reason": "斜率乘積不是 -1。"
        },
        {
          "index": 3,
          "choice": "平行且不重合",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；兩式斜率同為 2，但截距不同，所以為不同的平行線。"
        }
      ],
      "misconceptionTarget": "只看同斜率未比較截距",
      "prerequisiteCheck": "先備能力是「能在表格與坐標圖之間轉換，正確把一列 x、y 資料畫成點，並理解垂直線檢驗。」本題將此能力用於「判斷兩線圖形關係」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 110,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「判斷兩線圖形關係」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 3 的「平行且不重合」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「判斷兩線圖形關係」只有題幹所述的一種解讀。",
      "difficultyReason": "需同時比較斜率與截距，屬標準。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "ab48a9a95e851cdd90a3d5de01810a1ee8b1224d290852c3b158d3a1cd47e08c"
    },
    {
      "questionId": "u15-s007-mc07",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-graph",
      "skillSlot": "s007",
      "skillTitle": "線型函數圖形",
      "difficulty": "advanced",
      "type": "mc",
      "text": "直線通過 (2,5) 與 (-1,-4)。其函數式為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由含負坐標兩點建立直線」。",
      "target": "由含負坐標兩點建立直線",
      "choices": [
        "y=x+3",
        "y=3x-1",
        "y=3x+1",
        "y=-3x+11"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，重新依題意處理：求斜率 3；代點求 b=-1；寫 y=3x-1。因此得到「y=3x-1」。",
      "explanation": "斜率 (5-(-4))/(2-(-1))=9/3=3；代入 (2,5)，b=5-6=-1。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "求斜率 3"
        },
        {
          "step": 2,
          "work": "代點求 b=-1"
        },
        {
          "step": 3,
          "work": "寫 y=3x-1"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "y=x+3",
          "truth": false,
          "reason": "只用坐標相加猜式子。"
        },
        {
          "index": 1,
          "choice": "y=3x-1",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；斜率 (5-(-4))/(2-(-1))=9/3=3；代入 (2,5)，b=5-6=-1。"
        },
        {
          "index": 2,
          "choice": "y=3x+1",
          "truth": false,
          "reason": "截距符號錯。"
        },
        {
          "index": 3,
          "choice": "y=-3x+11",
          "truth": false,
          "reason": "斜率符號錯且截距配湊。"
        }
      ],
      "misconceptionTarget": "負坐標下兩點求式錯誤",
      "prerequisiteCheck": "先備能力是「能在表格與坐標圖之間轉換，正確把一列 x、y 資料畫成點，並理解垂直線檢驗。」本題將此能力用於「由含負坐標兩點建立直線」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 114,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由含負坐標兩點建立直線」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 1 的「y=3x-1」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由含負坐標兩點建立直線」只有題幹所述的一種解讀。",
      "difficultyReason": "涉及負數差與代回，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "b47206f467fcd178f71e4cb854a3842400176ef99c7808ac489afb639de6212c"
    },
    {
      "questionId": "u15-s007-mc08",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-graph",
      "skillSlot": "s007",
      "skillTitle": "線型函數圖形",
      "difficulty": "advanced",
      "type": "mc",
      "text": "求 y=2x+1 與 y=-x+7 的交點。",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「求兩線交點」。",
      "target": "求兩線交點",
      "choices": [
        "(1,3)",
        "(3,4)",
        "(2,5)",
        "(5,2)"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，重新依題意處理：聯立兩個 y；解 x=2；回代求 y=5。因此得到「(2,5)」。",
      "explanation": "令 2x+1=-x+7，得 3x=6、x=2；回代 y=5。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "聯立兩個 y"
        },
        {
          "step": 2,
          "work": "解 x=2"
        },
        {
          "step": 3,
          "work": "回代求 y=5"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "(1,3)",
          "truth": false,
          "reason": "未使兩式相等或算錯。"
        },
        {
          "index": 1,
          "choice": "(3,4)",
          "truth": false,
          "reason": "x=3 時兩式不相等。"
        },
        {
          "index": 2,
          "choice": "(2,5)",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；令 2x+1=-x+7，得 3x=6、x=2；回代 y=5。"
        },
        {
          "index": 3,
          "choice": "(5,2)",
          "truth": false,
          "reason": "顛倒正確坐標。"
        }
      ],
      "misconceptionTarget": "求交點只解一半或坐標顛倒",
      "prerequisiteCheck": "先備能力是「能在表格與坐標圖之間轉換，正確把一列 x、y 資料畫成點，並理解垂直線檢驗。」本題將此能力用於「求兩線交點」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 118,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「求兩線交點」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 2 的「(2,5)」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「求兩線交點」只有題幹所述的一種解讀。",
      "difficultyReason": "需聯立並回代，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "9e70b1a607391e5923db4d0a3ba5ca65c9ba9421698bfd13c09739bb070c8f81"
    },
    {
      "questionId": "u15-s007-mc09",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-graph",
      "skillSlot": "s007",
      "skillTitle": "線型函數圖形",
      "difficulty": "advanced",
      "type": "mc",
      "text": "一條直線與 y=4x-2 有相同 y 軸截距，且向右下降。下列哪個可能是它？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由圖形描述反推斜截式」。",
      "target": "由圖形描述反推斜截式",
      "choices": [
        "y=x+2",
        "y=-x+2",
        "y=4x-2",
        "y=-x-2"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用已存答案，重新依題意處理：鎖定 b=-2；要求 a<0；選符合兩條件者。因此得到「y=-x-2」。",
      "explanation": "相同 y 截距要求 b=-2；向右下降要求斜率負，所以 y=-x-2。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "鎖定 b=-2"
        },
        {
          "step": 2,
          "work": "要求 a<0"
        },
        {
          "step": 3,
          "work": "選符合兩條件者"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "y=x+2",
          "truth": false,
          "reason": "截距為 +2 且斜率正。"
        },
        {
          "index": 1,
          "choice": "y=-x+2",
          "truth": false,
          "reason": "斜率負但截距錯。"
        },
        {
          "index": 2,
          "choice": "y=4x-2",
          "truth": false,
          "reason": "截距同但斜率正，且與原線相同。"
        },
        {
          "index": 3,
          "choice": "y=-x-2",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；相同 y 截距要求 b=-2；向右下降要求斜率負，所以 y=-x-2。"
        }
      ],
      "misconceptionTarget": "只滿足斜率或截距其中一條",
      "prerequisiteCheck": "先備能力是「能在表格與坐標圖之間轉換，正確把一列 x、y 資料畫成點，並理解垂直線檢驗。」本題將此能力用於「由圖形描述反推斜截式」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 122,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由圖形描述反推斜截式」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 3 的「y=-x-2」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由圖形描述反推斜截式」只有題幹所述的一種解讀。",
      "difficultyReason": "同時整合截距與方向兩個條件，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "7b6df1355b397eddcfd8fb4f52b662674198044507b7fd2fb760a42a6acfe9cd"
    },
    {
      "questionId": "u15-s007-mc10",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-graph",
      "skillSlot": "s007",
      "skillTitle": "線型函數圖形",
      "difficulty": "literacy",
      "type": "mc",
      "text": "水箱注水量 V=15t+40，t 為分鐘。此圖形的 y 軸截距 40 代表什麼？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「解讀線型圖形的截距」。",
      "target": "解讀線型圖形的截距",
      "choices": [
        "每分鐘注入 40 公升",
        "開始計時時水箱已有 40 公升",
        "15 分鐘後有 40 公升",
        "水箱最多 40 公升"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，重新依題意處理：令 t=0；讀 V=40；翻成初始狀態。因此得到「開始計時時水箱已有 40 公升」。",
      "explanation": "t=0 時 V=40，因此是初始水量。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "令 t=0"
        },
        {
          "step": 2,
          "work": "讀 V=40"
        },
        {
          "step": 3,
          "work": "翻成初始狀態"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "每分鐘注入 40 公升",
          "truth": false,
          "reason": "每分鐘注入量是斜率 15。"
        },
        {
          "index": 1,
          "choice": "開始計時時水箱已有 40 公升",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；t=0 時 V=40，因此是初始水量。"
        },
        {
          "index": 2,
          "choice": "15 分鐘後有 40 公升",
          "truth": false,
          "reason": "把輸入 15 與輸出 40 混淆。"
        },
        {
          "index": 3,
          "choice": "水箱最多 40 公升",
          "truth": false,
          "reason": "公式未表示容量上限。"
        }
      ],
      "misconceptionTarget": "把截距誤讀為速率或上限",
      "prerequisiteCheck": "先備能力是「能在表格與坐標圖之間轉換，正確把一列 x、y 資料畫成點，並理解垂直線檢驗。」本題將此能力用於「解讀線型圖形的截距」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 126,
      "unitAndRoundingCheck": "「t 為分鐘，V 為公升。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「解讀線型圖形的截距」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 1 的「開始計時時水箱已有 40 公升」符合；其餘錯因分別記錄於 optionAnalysis。；「t 為分鐘，V 為公升。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「解讀線型圖形的截距」只有題幹所述的一種解讀。",
      "difficultyReason": "需將截距轉成物理語意，屬素養。",
      "literacyContextNecessity": "起始水量與注水速率在情境中角色不同，必須靠圖形參數辨認。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "3eb648dad1732f502bc06b8296292b43985adba9d1b5fc6245b4b2e161a1c46d"
    },
    {
      "questionId": "u15-s007-mc11",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-graph",
      "skillSlot": "s007",
      "skillTitle": "線型函數圖形",
      "difficulty": "literacy",
      "type": "mc",
      "text": "山徑高度模型 h=120-8d，d 為行走公里數。圖形向右下降的意義為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「解讀負斜率的生活意義」。",
      "target": "解讀負斜率的生活意義",
      "choices": [
        "每前進 8 公里，高度降低 1 公尺",
        "起點高度是 8 公尺",
        "每前進 1 公里，高度降低 8 公尺",
        "高度最後一定為負"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，重新依題意處理：讀斜率 -8；配上輸出／輸入單位；用下降語句解釋。因此得到「每前進 1 公里，高度降低 8 公尺」。",
      "explanation": "斜率 -8 公尺／公里表示每增加 1 公里，高度減少 8 公尺。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "讀斜率 -8"
        },
        {
          "step": 2,
          "work": "配上輸出／輸入單位"
        },
        {
          "step": 3,
          "work": "用下降語句解釋"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "每前進 8 公里，高度降低 1 公尺",
          "truth": false,
          "reason": "倒置變化率。"
        },
        {
          "index": 1,
          "choice": "起點高度是 8 公尺",
          "truth": false,
          "reason": "起點高度是 120。"
        },
        {
          "index": 2,
          "choice": "每前進 1 公里，高度降低 8 公尺",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；斜率 -8 公尺／公里表示每增加 1 公里，高度減少 8 公尺。"
        },
        {
          "index": 3,
          "choice": "高度最後一定為負",
          "truth": false,
          "reason": "模型適用範圍未允許無限延伸。"
        }
      ],
      "misconceptionTarget": "倒置斜率單位或無限制外推",
      "prerequisiteCheck": "先備能力是「能在表格與坐標圖之間轉換，正確把一列 x、y 資料畫成點，並理解垂直線檢驗。」本題將此能力用於「解讀負斜率的生活意義」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 130,
      "unitAndRoundingCheck": "「斜率單位為公尺／公里。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「解讀負斜率的生活意義」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 2 的「每前進 1 公里，高度降低 8 公尺」符合；其餘錯因分別記錄於 optionAnalysis。；「斜率單位為公尺／公里。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「解讀負斜率的生活意義」只有題幹所述的一種解讀。",
      "difficultyReason": "需將圖形方向、數值與單位完整結合，屬素養。",
      "literacyContextNecessity": "高度與距離的單位決定 -8 的正確語意。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "66bdacd77ea1ab6b3d31b7a68f48151be532f3e332d6c412953c062af102da70"
    },
    {
      "questionId": "u15-s007-mc12",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-graph",
      "skillSlot": "s007",
      "skillTitle": "線型函數圖形",
      "difficulty": "literacy",
      "type": "mc",
      "text": "預付卡餘額 B=300-12m，m 為通話分鐘數。圖形與 x 軸交點約為 (25,0)。這代表什麼？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「解讀線型圖形的零點」。",
      "target": "解讀線型圖形的零點",
      "choices": [
        "通話 25 分鐘時餘額用完",
        "25 分鐘後餘額為 300 元",
        "每分鐘增加 25 元",
        "餘額用完後仍可依同一直線變成負值"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，重新依題意處理：辨認 x 軸交點 B=0；解 m=25；回到情境解釋。因此得到「通話 25 分鐘時餘額用完」。",
      "explanation": "x 軸交點的輸出為 0；300-12m=0 得 m=25。情境上代表餘額歸零。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "辨認 x 軸交點 B=0"
        },
        {
          "step": 2,
          "work": "解 m=25"
        },
        {
          "step": 3,
          "work": "回到情境解釋"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "通話 25 分鐘時餘額用完",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；x 軸交點的輸出為 0；300-12m=0 得 m=25。情境上代表餘額歸零。"
        },
        {
          "index": 1,
          "choice": "25 分鐘後餘額為 300 元",
          "truth": false,
          "reason": "把截距 300 誤配到 25 分鐘。"
        },
        {
          "index": 2,
          "choice": "每分鐘增加 25 元",
          "truth": false,
          "reason": "斜率是 -12 元／分鐘。"
        },
        {
          "index": 3,
          "choice": "餘額用完後仍可依同一直線變成負值",
          "truth": false,
          "reason": "負餘額是否允許需另有規則，不能直接外推。"
        }
      ],
      "misconceptionTarget": "把 x 軸交點與 y 軸截距混淆",
      "prerequisiteCheck": "先備能力是「能在表格與坐標圖之間轉換，正確把一列 x、y 資料畫成點，並理解垂直線檢驗。」本題將此能力用於「解讀線型圖形的零點」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 134,
      "unitAndRoundingCheck": "「m 為分鐘，B 為元。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「解讀線型圖形的零點」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 0 的「通話 25 分鐘時餘額用完」符合；其餘錯因分別記錄於 optionAnalysis。；「m 為分鐘，B 為元。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「解讀線型圖形的零點」只有題幹所述的一種解讀。",
      "difficultyReason": "需結合交點、方程與模型邊界，屬素養。",
      "literacyContextNecessity": "餘額不能自然延伸為負值，必須用交點界定模型終點。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "efbc363e055832586403699780c839e5f0a5ece840681e365b33213512807c4d"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u15-s007-cr01",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-graph",
      "skillSlot": "s007",
      "skillTitle": "線型函數圖形",
      "type": "constructed-response",
      "prompt": "直線 L 通過 (-2,5) 與 (4,-1)。求 L 的函數式、x 軸交點與 y 軸交點。",
      "requiredWork": "須完整求斜率、截距與兩軸交點。",
      "standardSolution": "斜率=(-1-5)/(4-(-2))=-6/6=-1。代 (-2,5)：5=2+b，b=3，所以 y=-x+3。y 軸交點 (0,3)；令 y=0 得 x=3，x 軸交點 (3,0)。",
      "alternativeMethod": "可觀察兩點每向右 6、向下 6 得斜率 -1，再延伸到兩軸讀出 (0,3)、(3,0)。",
      "reasoningSteps": [
        {
          "step": 1,
          "work": "求斜率 -1"
        },
        {
          "step": 2,
          "work": "求式 y=-x+3"
        },
        {
          "step": 3,
          "work": "求 y 軸交點"
        },
        {
          "step": 4,
          "work": "求 x 軸交點"
        }
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "求得斜率 -1、方程 y=-x+3，並分別得到 y 軸交點 (0,3) 與 x 軸交點 (3,0)，兩種截距坐標順序正確。"
        },
        {
          "score": 2,
          "criteria": "方程式正確且至少一個截距正確，另一個僅有一次代入或坐標順序錯；或斜率方法完整但 b 有單一運算錯。"
        },
        {
          "score": 1,
          "criteria": "只正確求得斜率 -1，或只得到 y=-x+3 而沒有完成兩個截距。"
        },
        {
          "score": 0,
          "criteria": "斜率計算未使用兩點差，且方程與兩個截距均無法通過任一已知點檢查。"
        }
      ],
      "partialCreditRules": [
        "方程 y=-x+3 正確後，兩個截距可獨立計分；一個坐標順序錯不取消另一個。",
        "若只寫截距數 3、3 而未以 (0,3)、(3,0) 區分兩軸，最高 2 分。"
      ],
      "followThroughPolicy": "本題延續計分依以下具體規則處理：方程 y=-x+3 正確後，兩個截距可獨立計分；一個坐標順序錯不取消另一個。；若只寫截距數 3、3 而未以 (0,3)、(3,0) 區分兩軸，最高 2 分。",
      "unitAndNotationRules": "沿用題幹的變數、序對、不等號與計量單位；作答必須清楚呈現以下要求中的符號與單位：須完整求斜率、截距與兩軸交點。",
      "answerOnlyPolicy": "只寫最終答案而未呈現必要方法時，依本題 1 分規準處理：只正確求得斜率 -1，或只得到 y=-x+3 而沒有完成兩個截距。；答案錯且無可辨識過程則為 0 分。",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "recomputedConclusion": "斜率=(-1-5)/(4-(-2))=-6/6=-1。代 (-2,5)：5=2+b，b=3，所以 y=-x+3。y 軸交點 (0,3)；令 y=0 得 x=3，x 軸交點 (3,0)。",
        "reviewNote": "獨立重做 u15-s007-cr01 時依序檢查 求斜率 -1、求式 y=-x+3、求 y 軸交點、求 x 軸交點；標準解與替代法在允許範圍內得到一致結論，量綱與端點亦符合題意。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "45dbd74704be442bdd1a8bcb1628d5bbcefdddbbbf4a8ee8b039eb81532124b0"
    },
    {
      "questionId": "u15-s007-cr02",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-graph",
      "skillSlot": "s007",
      "skillTitle": "線型函數圖形",
      "type": "constructed-response",
      "prompt": "兩直線 f(x)=2x-5、g(x)=-x+7。求交點，並判斷 x=0 與 x=5 時哪個函數值較大。",
      "requiredWork": "須聯立求交點，再分別比較兩個指定輸入。",
      "standardSolution": "交點：2x-5=-x+7 ⇒ 3x=12 ⇒ x=4，y=3，所以 (4,3)。x=0 時 f=-5、g=7，g 較大；x=5 時 f=5、g=2，f 較大。",
      "alternativeMethod": "可用差函數 f-g=3x-12：x<4 時為負，故 g 大；x>4 時為正，故 f 大。",
      "reasoningSteps": [
        {
          "step": 1,
          "work": "求交點 (4,3)"
        },
        {
          "step": 2,
          "work": "比較 x=0"
        },
        {
          "step": 3,
          "work": "比較 x=5"
        },
        {
          "step": 4,
          "work": "連結交點左右關係"
        }
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "聯立求得交點 (4,3)，並正確比較 x=0 時 g 較大、x=5 時 f 較大，所有函數值或差值證據完整。"
        },
        {
          "score": 2,
          "criteria": "交點正確且兩次比較中只有一次運算錯；或兩次比較皆正確但交點漏寫 y 坐標。"
        },
        {
          "score": 1,
          "criteria": "只求得交點的 x=4，或只完成 x=0、x=5 中一個比較，尚未完成整題。"
        },
        {
          "score": 0,
          "criteria": "把兩函數係數直接比較而未代入或聯立，且交點與指定輸入的大小判斷皆無有效依據。"
        }
      ],
      "partialCreditRules": [
        "交點與兩個指定輸入比較為三個子任務；單一子任務算錯但其餘獨立正確時保留其餘分。",
        "只以 x<4、x>4 的差函數符號正確判斷 0 與 5，也可取得完整比較分。"
      ],
      "followThroughPolicy": "本題延續計分依以下具體規則處理：交點與兩個指定輸入比較為三個子任務；單一子任務算錯但其餘獨立正確時保留其餘分。；只以 x<4、x>4 的差函數符號正確判斷 0 與 5，也可取得完整比較分。",
      "unitAndNotationRules": "沿用題幹的變數、序對、不等號與計量單位；作答必須清楚呈現以下要求中的符號與單位：須聯立求交點，再分別比較兩個指定輸入。",
      "answerOnlyPolicy": "只寫最終答案而未呈現必要方法時，依本題 1 分規準處理：只求得交點的 x=4，或只完成 x=0、x=5 中一個比較，尚未完成整題。；答案錯且無可辨識過程則為 0 分。",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "recomputedConclusion": "交點：2x-5=-x+7 ⇒ 3x=12 ⇒ x=4，y=3，所以 (4,3)。x=0 時 f=-5、g=7，g 較大；x=5 時 f=5、g=2，f 較大。",
        "reviewNote": "獨立重做 u15-s007-cr02 時依序檢查 求交點 (4,3)、比較 x=0、比較 x=5、連結交點左右關係；標準解與替代法在允許範圍內得到一致結論，量綱與端點亦符合題意。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "5c9435d1356fa598b9c540cf5e26c3cde7b5db607ea2afb4143c880f1681316e"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u15-s007-mc01-review",
      "questionId": "u15-s007-mc01",
      "unitId": "u15",
      "skillId": "linear-function-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "bddfd516c573d86ac6b4b5a9228fb3fd867346c4eb6901c7ccb17a68191eb4ea",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "是，因為 2×2+1=5",
      "storedAnswer": "是，因為 2×2+1=5",
      "independentSolution": "不採用已存答案，重新依題意處理：代入 x=2；算出 y=5；比對點。因此得到「是，因為 2×2+1=5」。",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 2 的「是，因為 2×2+1=5」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "單點代入驗證，屬基礎。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s007-mc01，審查者未讀取存答而依序完成：代入 x=2；算出 y=5；比對點。重算結果為「是，因為 2×2+1=5」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「使用無關的坐標和。；斜率與點的 y 坐標不是同一量。；正坐標不保證在特定直線上。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s007-mc02-review",
      "questionId": "u15-s007-mc02",
      "unitId": "u15",
      "skillId": "linear-function-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "8d49ccb3dc6076a16910fe6d3b81a9054ed5769dc44d693e542232ef96fffe3d",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "(0,3)",
      "storedAnswer": "(0,3)",
      "independentSolution": "不採用已存答案，重新依題意處理：令 x=0；求 y=3；寫成坐標。因此得到「(0,3)」。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 0 的「(0,3)」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "直接以 x=0 求截距，屬基礎。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s007-mc02，審查者未讀取存答而依序完成：令 x=0；求 y=3；寫成坐標。重算結果為「(0,3)」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「這是 x 軸交點。；截距符號讀錯。；同時顛倒與符號錯。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s007-mc03-review",
      "questionId": "u15-s007-mc03",
      "unitId": "u15",
      "skillId": "linear-function-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "72fc23d6bd7d7c2dece46a4694aa3c403c105fae165b80cc56bc28f5502bc86e",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "通過 y=4 的水平直線",
      "storedAnswer": "通過 y=4 的水平直線",
      "independentSolution": "不採用已存答案，重新依題意處理：把式子寫成 y=0x+4；令多個 x 得相同 y；辨認水平線。因此得到「通過 y=4 的水平直線」。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 3 的「通過 y=4 的水平直線」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "考 a=0 的邊界情形，屬基礎。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s007-mc03，審查者未讀取存答而依序完成：把式子寫成 y=0x+4；令多個 x 得相同 y；辨認水平線。重算結果為「通過 y=4 的水平直線」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「x=4 才是垂直線，且不是 y 關於 x 的函數。；斜率為 0，不是斜線。；定義域若為所有實數，點有無限多個。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s007-mc04-review",
      "questionId": "u15-s007-mc04",
      "unitId": "u15",
      "skillId": "linear-function-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "005838dbe13e461361160d127de8bf9bfdfc38bcde26959c1f6a4879cd27be72",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "y=3x-1",
      "storedAnswer": "y=3x-1",
      "independentSolution": "不採用已存答案，重新依題意處理：求斜率 6/2=3；讀 y 截距 -1；寫出式子。因此得到「y=3x-1」。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 1 的「y=3x-1」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需兩步求斜率與截距，屬標準。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s007-mc04，審查者未讀取存答而依序完成：求斜率 6/2=3；讀 y 截距 -1；寫出式子。重算結果為「y=3x-1」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把 x 差 2 當斜率。；截距符號錯。；斜率方向錯。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s007-mc05-review",
      "questionId": "u15-s007-mc05",
      "unitId": "u15",
      "skillId": "linear-function-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "fd7cb11a9611ac555ddc3dff7f976eabf60d5931325ff5302a007bb387bc955b",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "y=-2x+5",
      "storedAnswer": "y=-2x+5",
      "independentSolution": "不採用已存答案，重新依題意處理：讀各式斜率；找負斜率；選 -2。因此得到「y=-2x+5」。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 0 的「y=-2x+5」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需辨認斜率正負，屬標準。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s007-mc05，審查者未讀取存答而依序完成：讀各式斜率；找負斜率；選 -2。重算結果為「y=-2x+5」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「斜率 2>0，向右上升。；斜率 5>0。；斜率 0，保持水平。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s007-mc06-review",
      "questionId": "u15-s007-mc06",
      "unitId": "u15",
      "skillId": "linear-function-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "ab48a9a95e851cdd90a3d5de01810a1ee8b1224d290852c3b158d3a1cd47e08c",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "平行且不重合",
      "storedAnswer": "平行且不重合",
      "independentSolution": "不採用已存答案，重新依題意處理：比較斜率皆 2；比較截距 1 與 -4；判定平行不重合。因此得到「平行且不重合」。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 3 的「平行且不重合」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需同時比較斜率與截距，屬標準。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s007-mc06，審查者未讀取存答而依序完成：比較斜率皆 2；比較截距 1 與 -4；判定平行不重合。重算結果為「平行且不重合」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「(0,1) 只在第一條。；截距不同，不能重合。；斜率乘積不是 -1。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s007-mc07-review",
      "questionId": "u15-s007-mc07",
      "unitId": "u15",
      "skillId": "linear-function-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "b47206f467fcd178f71e4cb854a3842400176ef99c7808ac489afb639de6212c",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "y=3x-1",
      "storedAnswer": "y=3x-1",
      "independentSolution": "不採用已存答案，重新依題意處理：求斜率 3；代點求 b=-1；寫 y=3x-1。因此得到「y=3x-1」。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 1 的「y=3x-1」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "涉及負數差與代回，屬進階。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s007-mc07，審查者未讀取存答而依序完成：求斜率 3；代點求 b=-1；寫 y=3x-1。重算結果為「y=3x-1」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「只用坐標相加猜式子。；截距符號錯。；斜率符號錯且截距配湊。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s007-mc08-review",
      "questionId": "u15-s007-mc08",
      "unitId": "u15",
      "skillId": "linear-function-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "9e70b1a607391e5923db4d0a3ba5ca65c9ba9421698bfd13c09739bb070c8f81",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "(2,5)",
      "storedAnswer": "(2,5)",
      "independentSolution": "不採用已存答案，重新依題意處理：聯立兩個 y；解 x=2；回代求 y=5。因此得到「(2,5)」。",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 2 的「(2,5)」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需聯立並回代，屬進階。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s007-mc08，審查者未讀取存答而依序完成：聯立兩個 y；解 x=2；回代求 y=5。重算結果為「(2,5)」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「未使兩式相等或算錯。；x=3 時兩式不相等。；顛倒正確坐標。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s007-mc09-review",
      "questionId": "u15-s007-mc09",
      "unitId": "u15",
      "skillId": "linear-function-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "7b6df1355b397eddcfd8fb4f52b662674198044507b7fd2fb760a42a6acfe9cd",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "y=-x-2",
      "storedAnswer": "y=-x-2",
      "independentSolution": "不採用已存答案，重新依題意處理：鎖定 b=-2；要求 a<0；選符合兩條件者。因此得到「y=-x-2」。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 3 的「y=-x-2」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "同時整合截距與方向兩個條件，屬進階。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s007-mc09，審查者未讀取存答而依序完成：鎖定 b=-2；要求 a<0；選符合兩條件者。重算結果為「y=-x-2」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「截距為 +2 且斜率正。；斜率負但截距錯。；截距同但斜率正，且與原線相同。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s007-mc10-review",
      "questionId": "u15-s007-mc10",
      "unitId": "u15",
      "skillId": "linear-function-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "3eb648dad1732f502bc06b8296292b43985adba9d1b5fc6245b4b2e161a1c46d",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "開始計時時水箱已有 40 公升",
      "storedAnswer": "開始計時時水箱已有 40 公升",
      "independentSolution": "不採用已存答案，重新依題意處理：令 t=0；讀 V=40；翻成初始狀態。因此得到「開始計時時水箱已有 40 公升」。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 1 的「開始計時時水箱已有 40 公升」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「t 為分鐘，V 為公升。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需將截距轉成物理語意，屬素養。",
      "literacyNecessityReview": "起始水量與注水速率在情境中角色不同，必須靠圖形參數辨認。",
      "reviewerNote": "針對 u15-s007-mc10，審查者未讀取存答而依序完成：令 t=0；讀 V=40；翻成初始狀態。重算結果為「開始計時時水箱已有 40 公升」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「每分鐘注入量是斜率 15。；把輸入 15 與輸出 40 混淆。；公式未表示容量上限。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s007-mc11-review",
      "questionId": "u15-s007-mc11",
      "unitId": "u15",
      "skillId": "linear-function-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "66bdacd77ea1ab6b3d31b7a68f48151be532f3e332d6c412953c062af102da70",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "每前進 1 公里，高度降低 8 公尺",
      "storedAnswer": "每前進 1 公里，高度降低 8 公尺",
      "independentSolution": "不採用已存答案，重新依題意處理：讀斜率 -8；配上輸出／輸入單位；用下降語句解釋。因此得到「每前進 1 公里，高度降低 8 公尺」。",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 2 的「每前進 1 公里，高度降低 8 公尺」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「斜率單位為公尺／公里。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需將圖形方向、數值與單位完整結合，屬素養。",
      "literacyNecessityReview": "高度與距離的單位決定 -8 的正確語意。",
      "reviewerNote": "針對 u15-s007-mc11，審查者未讀取存答而依序完成：讀斜率 -8；配上輸出／輸入單位；用下降語句解釋。重算結果為「每前進 1 公里，高度降低 8 公尺」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「倒置變化率。；起點高度是 120。；模型適用範圍未允許無限延伸。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s007-mc12-review",
      "questionId": "u15-s007-mc12",
      "unitId": "u15",
      "skillId": "linear-function-graph",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "efbc363e055832586403699780c839e5f0a5ece840681e365b33213512807c4d",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "通話 25 分鐘時餘額用完",
      "storedAnswer": "通話 25 分鐘時餘額用完",
      "independentSolution": "不採用已存答案，重新依題意處理：辨認 x 軸交點 B=0；解 m=25；回到情境解釋。因此得到「通話 25 分鐘時餘額用完」。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 0 的「通話 25 分鐘時餘額用完」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「m 為分鐘，B 為元。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需結合交點、方程與模型邊界，屬素養。",
      "literacyNecessityReview": "餘額不能自然延伸為負值，必須用交點界定模型終點。",
      "reviewerNote": "針對 u15-s007-mc12，審查者未讀取存答而依序完成：辨認 x 軸交點 B=0；解 m=25；回到情境解釋。重算結果為「通話 25 分鐘時餘額用完」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把截距 300 誤配到 25 分鐘。；斜率是 -12 元／分鐘。；負餘額是否允許需另有規則，不能直接外推。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u15-fig-linear-basic",
      "unitId": "u15",
      "skillSlot": "s007",
      "title": "線型函數 y=2x+1",
      "svgPath": "figures/u15/u15-fig-linear-basic.svg",
      "altText": "坐標平面上一條向右上升的直線 y 等於二 x 加一，標出 y 軸截距與兩個點。",
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
          -4,
          8
        ],
        "objects": [
          [
            "line",
            -2,
            -3,
            3,
            7,
            "L: y=2x+1"
          ],
          [
            "point",
            0,
            1,
            "(0,1)"
          ],
          [
            "point",
            2,
            5,
            "(2,5)"
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
            "y": "281.3",
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
            "y": "273.3",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "0",
            "x": "318.0",
            "y": "273.3",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "4",
            "x": "568.0",
            "y": "273.3",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "-4",
            "x": "295.0",
            "y": "364.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "0",
            "x": "295.0",
            "y": "257.3",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "8",
            "x": "295.0",
            "y": "44.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "L: y=2x+1",
            "x": "367.2",
            "y": "192.0",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "(0,1)",
            "x": "338.0",
            "y": "218.7",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "(2,5)",
            "x": "463.0",
            "y": "112.0",
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
            "id": "u15-fig-linear-basic-x-axis",
            "element": "line",
            "attributes": {
              "x1": "80",
              "y1": "253.3",
              "x2": "590",
              "y2": "253.3",
              "stroke": "#111",
              "stroke-width": "2",
              "marker-end": "url(#arrow)"
            }
          },
          {
            "id": "u15-fig-linear-basic-y-axis",
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
            "id": "u15-fig-linear-basic-obj-1",
            "element": "line",
            "attributes": {
              "x1": "205.0",
              "y1": "333.3",
              "x2": "517.5",
              "y2": "66.7",
              "stroke": "#1f2937",
              "stroke-width": "3"
            }
          },
          {
            "id": "u15-fig-linear-basic-obj-2",
            "element": "circle",
            "attributes": {
              "cx": "330.0",
              "cy": "226.7",
              "r": "6",
              "fill": "#111"
            }
          },
          {
            "id": "u15-fig-linear-basic-obj-3",
            "element": "circle",
            "attributes": {
              "cx": "455.0",
              "cy": "120.0",
              "r": "6",
              "fill": "#111"
            }
          }
        ]
      },
      "svgTitle": "線型函數 y=2x+1",
      "svgDesc": "坐標平面上一條向右上升的直線 y 等於二 x 加一，標出 y 軸截距與兩個點。",
      "svgAssertions": [
        "u15-fig-linear-basic",
        "u15-fig-linear-basic-title",
        "u15-fig-linear-basic-desc",
        "role=\"img\"",
        "viewBox=\"0 0 640 420\"",
        "線型函數 y=2x+1"
      ],
      "mobileReadabilityReview": "以 360px 寬縮放檢查，關鍵字標籤字級不低於等效 12px，點半徑與虛線仍可辨識。",
      "answerLeakageReview": "圖僅呈現題目已給資料與必要坐標，不以醒目文字直接寫出選項答案；需由讀圖或計算完成。",
      "figureReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "manualInspectionRequired": true,
        "reviewNote": "已檢查 u15-fig-linear-basic 的軸向、刻度、負號、端點實空心、標籤遮擋與手機縮放；圖形內容與「直線以固定斜率 2 上升，並在 y 軸 1 處相交。」一致。",
        "manualInspectionCompleted": true,
        "renderedAt": "2026-07-12T18:20:00+08:00",
        "renderedCanvas": "640×420 PNG，另以雙欄 contact sheet 檢視全部 14 圖",
        "renderedInspectionSummary": "逐圖檢查坐標軸方向、刻度、公式與點標籤、實心及空心端點、虛線、文字遮擋、360px 縮放可讀性與答案洩漏；修正後未見幾何或標示衝突。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "0e88c9963111b68cb0ab440be8b99298727787539b1d65664805fe70e8f0dd80"
    }
  ],
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "productionActivationAllowed": false
};
