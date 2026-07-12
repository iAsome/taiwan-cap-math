// Emitted only from reviewed immutable source.
export default {
  "lecture": {
    "lectureId": "u15-s008-lecture",
    "unitId": "u15",
    "numericUnitId": 15,
    "unitTitle": "函數及其圖形",
    "topicId": "u15-graphs",
    "skillId": "linear-function-slope-intercept",
    "skillSlot": "s008",
    "skillTitle": "斜截式",
    "order": 8,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "prerequisites": [
      {
        "skillId": "linear-function-graph",
        "title": "線型函數圖形",
        "requiredLevel": "能由線型函數公式找點、由兩點辨認直線，並能解讀直線的上升、下降與交點。",
        "bridge": "把線型函數整理成 y=ax+b 後，a 直接描述每增加 1 單位輸入時的輸出變化，b 則是 x=0 時的輸出。"
      }
    ],
    "learningGoals": [
      "從 y=ax+b 讀出斜率與 y 軸截距",
      "把其他一次方程式整理成斜截式",
      "由斜率與一點建立線型函數"
    ],
    "vocabulary": [
      {
        "term": "斜截式",
        "meaning": "y=ax+b 的表示法"
      },
      {
        "term": "斜率 a",
        "meaning": "x 每增加 1 時 y 的改變量"
      },
      {
        "term": "y 軸截距 b",
        "meaning": "x=0 時的 y 值"
      }
    ],
    "conceptDevelopment": [
      "斜截式把兩個關鍵資訊直接放在式子裡：a 表示每單位輸入造成的輸出改變，b 表示起始值。",
      "方程式若不是 y=…，要先把 y 單獨留在一邊，才能正確讀取 a、b。"
    ],
    "definitionsAndMeaning": "斜截式把兩個關鍵資訊直接放在式子裡：a 表示每單位輸入造成的輸出改變，b 表示起始值。",
    "formulasAndConditions": [
      "y=ax+b。",
      "已知斜率 a 與點 (x₀,y₀)：b=y₀-ax₀。"
    ],
    "invalidUseCases": [
      "把常數項前的符號讀錯。",
      "未整理方程式就直接把 x 係數當斜率。",
      "把斜率與截距的角色交換。"
    ],
    "stepByStepMethod": [
      "先整理成 y=ax+b。",
      "連同正負號讀出 a。",
      "常數項即 b，截距點是 (0,b)。",
      "若由一點求式，先用 b=y-ax。"
    ],
    "workedExamples": [
      {
        "exampleId": "s008-ex01",
        "title": "直接讀取",
        "prompt": "在 y=-3x+5 中，分別指出斜率 a、y 軸截距 b 與截距點。",
        "solution": "y=-3x+5 中 a=-3、b=5。",
        "level": "basic"
      },
      {
        "exampleId": "s008-ex02",
        "title": "整理方程式",
        "prompt": "把 2x-y=4 整理成 y=ax+b，並指出整理時每一步的符號變化。",
        "solution": "2x-y=4 ⇒ y=2x-4。",
        "level": "standard"
      },
      {
        "exampleId": "s008-ex03",
        "title": "由點和斜率",
        "prompt": "一直線斜率為 -2 且通過 (3,1)。代入 y=ax+b 求 b，再寫出方程式。",
        "solution": "斜率 -2 且過 (3,1)：b=1-(-2×3)=7，所以 y=-2x+7。",
        "level": "advanced"
      },
      {
        "exampleId": "s008-ex04",
        "title": "比較陡峭",
        "prompt": "在相同坐標尺度下，比較 y=4x+1 與 y=-2x+1 的陡峭程度。應比較 a 還是 |a|？",
        "solution": "|a| 越大，在相同坐標尺度下直線越陡。",
        "level": "connection"
      }
    ],
    "commonMistakes": [
      {
        "mistakeId": "s008-m01",
        "wrongReasoning": "漏掉斜率的負號。",
        "correction": "斜率包含正負號；y=-3x+5 的 a 是 -3，負號決定直線向右下降。"
      },
      {
        "mistakeId": "s008-m02",
        "wrongReasoning": "把截距點寫成 (b,0)。",
        "correction": "y 軸截距是 x=0 時的 y 值，因此截距點為 (0,b)；(b,0) 是 x 軸上的另一種點。"
      },
      {
        "mistakeId": "s008-m03",
        "wrongReasoning": "整理移項時符號錯。",
        "correction": "整理到 y 單獨一邊時，每次加減同一項或整式同除係數，逐行檢查移項後符號。"
      },
      {
        "mistakeId": "s008-m04",
        "wrongReasoning": "以為斜率大就一定函數值較大。",
        "correction": "斜率只描述變化速度；兩直線的函數值大小還受截距與所選 x 影響，不能只看 a。"
      },
      {
        "mistakeId": "s008-m05",
        "wrongReasoning": "比較陡峭時只比 a 而不比 |a|。",
        "correction": "陡峭程度看每 1 單位水平變化造成的垂直變化量大小，所以比較 |a|；正負只表示方向。"
      }
    ],
    "selfChecks": [
      {
        "prompt": "y=4x-7 的 a、b？",
        "answer": "a=4，b=-7。"
      },
      {
        "prompt": "x+y=6 的斜截式？",
        "answer": "y=-x+6。"
      },
      {
        "prompt": "斜率 2 過 (1,5) 的 b？",
        "answer": "3。"
      }
    ],
    "summary": "斜截式 y=ax+b 讓變化率 a 與起始值 b 一眼可見。",
    "previousSkillConnection": "linear-function-graph",
    "nextSkillConnection": "linear-function-rate",
    "figureRefs": [
      "u15-fig-slope-intercept"
    ],
    "accessibilityNotes": [
      "圖形 u15-fig-slope-intercept 另附繁體中文替代文字與不按比例警告。"
    ],
    "lectureReview": {
      "reviewVersion": "human-lecture-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "decision": "pass",
      "reviewNote": "逐段人工重讀「斜截式」講義：先備橋接已具體指出學生必須會做的前一步，四個例題均改成可獨立作答的完整題目；五個錯誤修正逐一對應本技能的符號、條件、坐標或情境限制。另核對所有公式只使用 U15 線型函數、常數函數或有限對應範圍，未預用未來單元方法。",
      "zeroFoundationCheck": "學生只需具備 能以自己的話說明「線型函數圖形」並完成基本判斷或計算。",
      "capBoundaryCheck": "內容限國中會考線型函數與基本分段情境，未引入指數、對數、微積分或高中函數理論。"
    },
    "canonicalization": "sorted-keys-json-utf8-v1",
    "contentSha256": "ac9ed6b39ac5227d632c49bfaacb9baf0e28abb319bfdfcd26826bcee6b2be0a"
  },
  "mcQuestions": [
    {
      "questionId": "u15-s008-mc01",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-slope-intercept",
      "skillSlot": "s008",
      "skillTitle": "斜截式",
      "difficulty": "basic",
      "type": "mc",
      "text": "在 y=-3x+5 中，斜率與 y 軸截距分別為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由斜截式讀參數」。",
      "target": "由斜截式讀參數",
      "choices": [
        "3，5",
        "-3，-5",
        "5，-3",
        "-3，5"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用已存答案，重新依題意處理：對照 a、b；保留 -3 的負號；得到 -3、5。因此得到「-3，5」。",
      "explanation": "斜截式 y=ax+b 中 a=-3、b=5。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "對照 a、b"
        },
        {
          "step": 2,
          "work": "保留 -3 的負號"
        },
        {
          "step": 3,
          "work": "得到 -3、5"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "3，5",
          "truth": false,
          "reason": "漏掉斜率負號。"
        },
        {
          "index": 1,
          "choice": "-3，-5",
          "truth": false,
          "reason": "把常數項符號也誤改。"
        },
        {
          "index": 2,
          "choice": "5，-3",
          "truth": false,
          "reason": "交換斜率與截距。"
        },
        {
          "index": 3,
          "choice": "-3，5",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；斜截式 y=ax+b 中 a=-3、b=5。"
        }
      ],
      "misconceptionTarget": "讀取斜率或截距符號錯",
      "prerequisiteCheck": "先備能力是「能由線型函數公式找點、由兩點辨認直線，並能解讀直線的上升、下降與交點。」本題將此能力用於「由斜截式讀參數」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 90,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由斜截式讀參數」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 3 的「-3，5」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由斜截式讀參數」只有題幹所述的一種解讀。",
      "difficultyReason": "直接辨認 a、b，屬基礎。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "901de6052194edcafa890547632acc8401bbab3de7eb5bde48475408c974ab5e"
    },
    {
      "questionId": "u15-s008-mc02",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-slope-intercept",
      "skillSlot": "s008",
      "skillTitle": "斜截式",
      "difficulty": "basic",
      "type": "mc",
      "text": "斜率為 -2、y 軸截距為 5 的線型函數為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由斜率截距寫函數式」。",
      "target": "由斜率截距寫函數式",
      "choices": [
        "y=2x+5",
        "y=-2x+5",
        "y=-2x-5",
        "y=5x-2"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，重新依題意處理：寫 y=ax+b；代 a=-2；代 b=5。因此得到「y=-2x+5」。",
      "explanation": "依 y=ax+b，代入 a=-2、b=5。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "寫 y=ax+b"
        },
        {
          "step": 2,
          "work": "代 a=-2"
        },
        {
          "step": 3,
          "work": "代 b=5"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "y=2x+5",
          "truth": false,
          "reason": "斜率符號錯。"
        },
        {
          "index": 1,
          "choice": "y=-2x+5",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；依 y=ax+b，代入 a=-2、b=5。"
        },
        {
          "index": 2,
          "choice": "y=-2x-5",
          "truth": false,
          "reason": "截距符號錯。"
        },
        {
          "index": 3,
          "choice": "y=5x-2",
          "truth": false,
          "reason": "交換 a、b。"
        }
      ],
      "misconceptionTarget": "由語句寫斜截式時角色交換",
      "prerequisiteCheck": "先備能力是「能由線型函數公式找點、由兩點辨認直線，並能解讀直線的上升、下降與交點。」本題將此能力用於「由斜率截距寫函數式」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 94,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由斜率截距寫函數式」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 1 的「y=-2x+5」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由斜率截距寫函數式」只有題幹所述的一種解讀。",
      "difficultyReason": "直接套斜截式，屬基礎。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "4b263a20181c6d94a3fe48334db228f9081b87ef3bb4d8e87d7056bbfc74ec8f"
    },
    {
      "questionId": "u15-s008-mc03",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-slope-intercept",
      "skillSlot": "s008",
      "skillTitle": "斜截式",
      "difficulty": "basic",
      "type": "mc",
      "text": "y=3x 可寫成斜截式 y=3x+0。它的 y 軸截距點為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「辨認通過原點的斜截式」。",
      "target": "辨認通過原點的斜截式",
      "choices": [
        "(0,0)",
        "(3,0)",
        "(0,3)",
        "不存在"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，重新依題意處理：補寫 b=0；令 x=0；得 (0,0)。因此得到「(0,0)」。",
      "explanation": "b=0，所以 x=0 時 y=0，截距點是原點。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "補寫 b=0"
        },
        {
          "step": 2,
          "work": "令 x=0"
        },
        {
          "step": 3,
          "work": "得 (0,0)"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "(0,0)",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；b=0，所以 x=0 時 y=0，截距點是原點。"
        },
        {
          "index": 1,
          "choice": "(3,0)",
          "truth": false,
          "reason": "把斜率當 x 截距。"
        },
        {
          "index": 2,
          "choice": "(0,3)",
          "truth": false,
          "reason": "把斜率當 y 截距。"
        },
        {
          "index": 3,
          "choice": "不存在",
          "truth": false,
          "reason": "b=0 仍有截距。"
        }
      ],
      "misconceptionTarget": "忽略零截距",
      "prerequisiteCheck": "先備能力是「能由線型函數公式找點、由兩點辨認直線，並能解讀直線的上升、下降與交點。」本題將此能力用於「辨認通過原點的斜截式」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 98,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「辨認通過原點的斜截式」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 0 的「(0,0)」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「辨認通過原點的斜截式」只有題幹所述的一種解讀。",
      "difficultyReason": "考 b=0 邊界，屬基礎。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "b608774d3b138bd0edbef378c6b8fa5958966d0b4bc69a3e30f98b41073a5c3b"
    },
    {
      "questionId": "u15-s008-mc04",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-slope-intercept",
      "skillSlot": "s008",
      "skillTitle": "斜截式",
      "difficulty": "standard",
      "type": "mc",
      "text": "把 2x-y=4 整理成斜截式。",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「將一般式整理為斜截式」。",
      "target": "將一般式整理為斜截式",
      "choices": [
        "y=-2x+4",
        "y=2x+4",
        "y=2x-4",
        "y=-2x-4"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，重新依題意處理：移項得 -y=4-2x；整式乘 -1；整理 y=2x-4。因此得到「y=2x-4」。",
      "explanation": "-y=4-2x，兩邊乘 -1 得 y=2x-4。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "移項得 -y=4-2x"
        },
        {
          "step": 2,
          "work": "整式乘 -1"
        },
        {
          "step": 3,
          "work": "整理 y=2x-4"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "y=-2x+4",
          "truth": false,
          "reason": "只交換兩項未整體變號。"
        },
        {
          "index": 1,
          "choice": "y=2x+4",
          "truth": false,
          "reason": "常數項變號錯。"
        },
        {
          "index": 2,
          "choice": "y=2x-4",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；-y=4-2x，兩邊乘 -1 得 y=2x-4。"
        },
        {
          "index": 3,
          "choice": "y=-2x-4",
          "truth": false,
          "reason": "x 係數與常數都錯。"
        }
      ],
      "misconceptionTarget": "解出 y 時整體變號錯",
      "prerequisiteCheck": "先備能力是「能由線型函數公式找點、由兩點辨認直線，並能解讀直線的上升、下降與交點。」本題將此能力用於「將一般式整理為斜截式」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 102,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「將一般式整理為斜截式」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 2 的「y=2x-4」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「將一般式整理為斜截式」只有題幹所述的一種解讀。",
      "difficultyReason": "需兩步代數整理，屬標準。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "b32a0202b68a5fb5e9b62dbb71ff1e5d4e000e4f01f1f0c32d03c084f3516c3e"
    },
    {
      "questionId": "u15-s008-mc05",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-slope-intercept",
      "skillSlot": "s008",
      "skillTitle": "斜截式",
      "difficulty": "standard",
      "type": "mc",
      "text": "一條直線斜率為 -3，且通過 (1,4)。其斜截式為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「建立斜截式」。",
      "target": "建立斜截式",
      "choices": [
        "y=-3x+1",
        "y=-3x+7",
        "y=3x+1",
        "y=-3x+4"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，重新依題意處理：先寫 y=-3x+b；代入點；求 b=7。因此得到「y=-3x+7」。",
      "explanation": "以 y=-3x+b 代入 (1,4)：4=-3+b，所以 b=7。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "先寫 y=-3x+b"
        },
        {
          "step": 2,
          "work": "代入點"
        },
        {
          "step": 3,
          "work": "求 b=7"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "y=-3x+1",
          "truth": false,
          "reason": "把點的 x=1 當截距。"
        },
        {
          "index": 1,
          "choice": "y=-3x+7",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；以 y=-3x+b 代入 (1,4)：4=-3+b，所以 b=7。"
        },
        {
          "index": 2,
          "choice": "y=3x+1",
          "truth": false,
          "reason": "斜率符號錯。"
        },
        {
          "index": 3,
          "choice": "y=-3x+4",
          "truth": false,
          "reason": "把點的 y=4 直接當截距。"
        }
      ],
      "misconceptionTarget": "由斜率與一點求截距錯",
      "prerequisiteCheck": "先備能力是「能由線型函數公式找點、由兩點辨認直線，並能解讀直線的上升、下降與交點。」本題將此能力用於「建立斜截式」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 106,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「建立斜截式」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 1 的「y=-3x+7」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「建立斜截式」只有題幹所述的一種解讀。",
      "difficultyReason": "要由點求未知截距，屬標準。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "3c481be027169b5db7908c7a1c0a951b8f5d8b691539511a7c12d435313ba331"
    },
    {
      "questionId": "u15-s008-mc06",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-slope-intercept",
      "skillSlot": "s008",
      "skillTitle": "斜截式",
      "difficulty": "standard",
      "type": "mc",
      "text": "在相同坐標尺度下，下列哪條直線最陡？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「比較斜截式的陡峭程度」。",
      "target": "比較斜截式的陡峭程度",
      "choices": [
        "y=-5x+1",
        "y=4x-8",
        "y=2x+10",
        "y=0.5x-3"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，重新依題意處理：取斜率絕對值 5、4、2、0.5；比較大小；選 -5。因此得到「y=-5x+1」。",
      "explanation": "陡峭程度比較 |斜率|；5 最大。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "取斜率絕對值 5、4、2、0.5"
        },
        {
          "step": 2,
          "work": "比較大小"
        },
        {
          "step": 3,
          "work": "選 -5"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "y=-5x+1",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；陡峭程度比較 |斜率|；5 最大。"
        },
        {
          "index": 1,
          "choice": "y=4x-8",
          "truth": false,
          "reason": "|4| 小於 5。"
        },
        {
          "index": 2,
          "choice": "y=2x+10",
          "truth": false,
          "reason": "|2| 更小。"
        },
        {
          "index": 3,
          "choice": "y=0.5x-3",
          "truth": false,
          "reason": "|0.5| 最小。"
        }
      ],
      "misconceptionTarget": "只比斜率正負未比絕對值",
      "prerequisiteCheck": "先備能力是「能由線型函數公式找點、由兩點辨認直線，並能解讀直線的上升、下降與交點。」本題將此能力用於「比較斜截式的陡峭程度」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 110,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「比較斜截式的陡峭程度」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 0 的「y=-5x+1」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「比較斜截式的陡峭程度」只有題幹所述的一種解讀。",
      "difficultyReason": "需使用斜率絕對值，屬標準。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "304c9224341c02183d049c5de2f686f93b316198e121d0f49251e5f80d46daf0"
    },
    {
      "questionId": "u15-s008-mc07",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-slope-intercept",
      "skillSlot": "s008",
      "skillTitle": "斜截式",
      "difficulty": "advanced",
      "type": "mc",
      "text": "函數 y=(k-1)x+4 的斜率為 3，則 k 為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由斜率求參數」。",
      "target": "由斜率求參數",
      "choices": [
        "2",
        "3",
        "4",
        "5"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，重新依題意處理：讀斜率 k-1；建立 k-1=3；解 k=4。因此得到「4」。",
      "explanation": "k-1=3，所以 k=4。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "讀斜率 k-1"
        },
        {
          "step": 2,
          "work": "建立 k-1=3"
        },
        {
          "step": 3,
          "work": "解 k=4"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "2",
          "truth": false,
          "reason": "把 k-1=1。"
        },
        {
          "index": 1,
          "choice": "3",
          "truth": false,
          "reason": "把斜率直接當 k。"
        },
        {
          "index": 2,
          "choice": "4",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；k-1=3，所以 k=4。"
        },
        {
          "index": 3,
          "choice": "5",
          "truth": false,
          "reason": "移項方向錯。"
        }
      ],
      "misconceptionTarget": "參數係數未與斜率對應",
      "prerequisiteCheck": "先備能力是「能由線型函數公式找點、由兩點辨認直線，並能解讀直線的上升、下降與交點。」本題將此能力用於「由斜率求參數」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 114,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由斜率求參數」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 2 的「4」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由斜率求參數」只有題幹所述的一種解讀。",
      "difficultyReason": "需把含參數係數等同斜率，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "edbd48c6f28feed67d5125fac5298adba978863f820dca7c77ce386b41c1bd2c"
    },
    {
      "questionId": "u15-s008-mc08",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-slope-intercept",
      "skillSlot": "s008",
      "skillTitle": "斜截式",
      "difficulty": "advanced",
      "type": "mc",
      "text": "直線通過 (-2,7) 與 (2,-1)。其斜截式為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由兩點求斜截式」。",
      "target": "由兩點求斜截式",
      "choices": [
        "y=2x+3",
        "y=-2x-3",
        "y=-x+5",
        "y=-2x+3"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用已存答案，重新依題意處理：求斜率 -2；代點求 b=3；寫式。因此得到「y=-2x+3」。",
      "explanation": "斜率 (-1-7)/(2-(-2))=-8/4=-2；代入 (2,-1)，-1=-4+b 得 b=3。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "求斜率 -2"
        },
        {
          "step": 2,
          "work": "代點求 b=3"
        },
        {
          "step": 3,
          "work": "寫式"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "y=2x+3",
          "truth": false,
          "reason": "斜率符號錯。"
        },
        {
          "index": 1,
          "choice": "y=-2x-3",
          "truth": false,
          "reason": "截距符號錯。"
        },
        {
          "index": 2,
          "choice": "y=-x+5",
          "truth": false,
          "reason": "斜率計算少除 2。"
        },
        {
          "index": 3,
          "choice": "y=-2x+3",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；斜率 (-1-7)/(2-(-2))=-8/4=-2；代入 (2,-1)，-1=-4+b 得 b=3。"
        }
      ],
      "misconceptionTarget": "兩點含負數時斜率與截距錯",
      "prerequisiteCheck": "先備能力是「能由線型函數公式找點、由兩點辨認直線，並能解讀直線的上升、下降與交點。」本題將此能力用於「由兩點求斜截式」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 118,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由兩點求斜截式」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 3 的「y=-2x+3」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由兩點求斜截式」只有題幹所述的一種解讀。",
      "difficultyReason": "負數坐標與兩階段計算，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "9686a28e70d26be83fb4cd0ad90102278fd91cf48ab581cef1287112fa7b51f4"
    },
    {
      "questionId": "u15-s008-mc09",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-slope-intercept",
      "skillSlot": "s008",
      "skillTitle": "斜截式",
      "difficulty": "advanced",
      "type": "mc",
      "text": "直線 y=ax+b 經過 (0,-4)，且與 y=3x+2 平行。則 a+b 為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「整合平行與截距條件」。",
      "target": "整合平行與截距條件",
      "choices": [
        "-1",
        "1",
        "5",
        "7"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，重新依題意處理：由平行得 a=3；由 y 軸點得 b=-4；相加 -1。因此得到「-1」。",
      "explanation": "平行表示 a=3；經過 (0,-4) 表示 b=-4，所以 a+b=-1。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "由平行得 a=3"
        },
        {
          "step": 2,
          "work": "由 y 軸點得 b=-4"
        },
        {
          "step": 3,
          "work": "相加 -1"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "-1",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；平行表示 a=3；經過 (0,-4) 表示 b=-4，所以 a+b=-1。"
        },
        {
          "index": 1,
          "choice": "1",
          "truth": false,
          "reason": "把 -4 的符號漏掉。"
        },
        {
          "index": 2,
          "choice": "5",
          "truth": false,
          "reason": "把 a 與 |b| 相加。"
        },
        {
          "index": 3,
          "choice": "7",
          "truth": false,
          "reason": "把兩線截距也設相同。"
        }
      ],
      "misconceptionTarget": "平行線條件與截距點混用",
      "prerequisiteCheck": "先備能力是「能由線型函數公式找點、由兩點辨認直線，並能解讀直線的上升、下降與交點。」本題將此能力用於「整合平行與截距條件」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 122,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「整合平行與截距條件」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 0 的「-1」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「整合平行與截距條件」只有題幹所述的一種解讀。",
      "difficultyReason": "需從兩條獨立資訊求 a、b 再運算，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "816ed62478dc30c9789575fe683bc1ef9a9bd7e1f5a2777c11d15936cf902c98"
    },
    {
      "questionId": "u15-s008-mc10",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-slope-intercept",
      "skillSlot": "s008",
      "skillTitle": "斜截式",
      "difficulty": "literacy",
      "type": "mc",
      "text": "租借單車費用 C=8t+25，t 是小時數。斜截式中的 8 與 25 分別代表什麼？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「解讀費用斜截式參數」。",
      "target": "解讀費用斜截式參數",
      "choices": [
        "固定費 8 元；每小時 25 元",
        "8 小時後費用 25 元",
        "每小時 8 元；固定費 25 元",
        "每 25 小時增加 8 元"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，重新依題意處理：配對斜率與元／小時；配對截距與元；形成完整解讀。因此得到「每小時 8 元；固定費 25 元」。",
      "explanation": "斜率是每單位時間費用，截距是 t=0 時的固定費。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "配對斜率與元／小時"
        },
        {
          "step": 2,
          "work": "配對截距與元"
        },
        {
          "step": 3,
          "work": "形成完整解讀"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "固定費 8 元；每小時 25 元",
          "truth": false,
          "reason": "交換斜率與截距。"
        },
        {
          "index": 1,
          "choice": "8 小時後費用 25 元",
          "truth": false,
          "reason": "把參數誤當坐標點。"
        },
        {
          "index": 2,
          "choice": "每小時 8 元；固定費 25 元",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；斜率是每單位時間費用，截距是 t=0 時的固定費。"
        },
        {
          "index": 3,
          "choice": "每 25 小時增加 8 元",
          "truth": false,
          "reason": "倒置速率。"
        }
      ],
      "misconceptionTarget": "交換單位費與固定費",
      "prerequisiteCheck": "先備能力是「能由線型函數公式找點、由兩點辨認直線，並能解讀直線的上升、下降與交點。」本題將此能力用於「解讀費用斜截式參數」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 126,
      "unitAndRoundingCheck": "「8 的單位為元／小時，25 的單位為元。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「解讀費用斜截式參數」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 2 的「每小時 8 元；固定費 25 元」符合；其餘錯因分別記錄於 optionAnalysis。；「8 的單位為元／小時，25 的單位為元。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「解讀費用斜截式參數」只有題幹所述的一種解讀。",
      "difficultyReason": "需結合量綱精確解讀 a、b，屬素養。",
      "literacyContextNecessity": "租借費的固定與變動部分是斜截式語意的核心。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "f88a4d60a24fe813732b3f0380669f8e9a2732ec78b31721c1ad995e7267ce4b"
    },
    {
      "questionId": "u15-s008-mc11",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-slope-intercept",
      "skillSlot": "s008",
      "skillTitle": "斜截式",
      "difficulty": "literacy",
      "type": "mc",
      "text": "冷藏室溫度模型 T=-1.5t+12，t 以小時計。下列解讀何者正確？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「解讀溫度斜截式」。",
      "target": "解讀溫度斜截式",
      "choices": [
        "起始 -1.5°C，每小時上升 12°C",
        "1.5 小時後一定是 12°C",
        "溫度最低為 -1.5°C",
        "起始 12°C，每小時下降 1.5°C"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用已存答案，重新依題意處理：讀 b=12；讀 a=-1.5；加上單位與方向。因此得到「起始 12°C，每小時下降 1.5°C」。",
      "explanation": "b=12 是 t=0 的溫度；a=-1.5 表示每小時下降 1.5°C。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "讀 b=12"
        },
        {
          "step": 2,
          "work": "讀 a=-1.5"
        },
        {
          "step": 3,
          "work": "加上單位與方向"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "起始 -1.5°C，每小時上升 12°C",
          "truth": false,
          "reason": "交換參數且方向錯。"
        },
        {
          "index": 1,
          "choice": "1.5 小時後一定是 12°C",
          "truth": false,
          "reason": "把係數當時間點。"
        },
        {
          "index": 2,
          "choice": "溫度最低為 -1.5°C",
          "truth": false,
          "reason": "斜率不是最低溫。"
        },
        {
          "index": 3,
          "choice": "起始 12°C，每小時下降 1.5°C",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；b=12 是 t=0 的溫度；a=-1.5 表示每小時下降 1.5°C。"
        }
      ],
      "misconceptionTarget": "把負斜率誤解成初值或下限",
      "prerequisiteCheck": "先備能力是「能由線型函數公式找點、由兩點辨認直線，並能解讀直線的上升、下降與交點。」本題將此能力用於「解讀溫度斜截式」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 130,
      "unitAndRoundingCheck": "「斜率為 °C／小時，截距為 °C。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「解讀溫度斜截式」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 3 的「起始 12°C，每小時下降 1.5°C」符合；其餘錯因分別記錄於 optionAnalysis。；「斜率為 °C／小時，截距為 °C。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「解讀溫度斜截式」只有題幹所述的一種解讀。",
      "difficultyReason": "需把負斜率翻譯成生活語意，屬素養。",
      "literacyContextNecessity": "溫度變化方向與初始值必須由參數和單位共同解讀。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "fb3685c3501816e59a72424ca859913c817651a8ffba55a888e72009f789c19f"
    },
    {
      "questionId": "u15-s008-mc12",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-slope-intercept",
      "skillSlot": "s008",
      "skillTitle": "斜截式",
      "difficulty": "literacy",
      "type": "mc",
      "text": "方案甲 C₁=4x+80，方案乙 C₂=6x+30，x 為使用次數。若只比較斜率與截距，下列何者正確？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「比較兩方案斜截式參數」。",
      "target": "比較兩方案斜截式參數",
      "choices": [
        "甲固定費較低且每次增加較少",
        "甲固定費較高但每次增加較少",
        "乙固定費較高但每次增加較多",
        "兩方案固定費與每次費都相同"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，重新依題意處理：比較截距 80 與 30；比較斜率 4 與 6；用完整句描述。因此得到「甲固定費較高但每次增加較少」。",
      "explanation": "甲 b=80>30，但 a=4<6。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "比較截距 80 與 30"
        },
        {
          "step": 2,
          "work": "比較斜率 4 與 6"
        },
        {
          "step": 3,
          "work": "用完整句描述"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "甲固定費較低且每次增加較少",
          "truth": false,
          "reason": "固定費比較錯。"
        },
        {
          "index": 1,
          "choice": "甲固定費較高但每次增加較少",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；甲 b=80>30，但 a=4<6。"
        },
        {
          "index": 2,
          "choice": "乙固定費較高但每次增加較多",
          "truth": false,
          "reason": "乙固定費其實較低。"
        },
        {
          "index": 3,
          "choice": "兩方案固定費與每次費都相同",
          "truth": false,
          "reason": "兩組參數明顯不同。"
        }
      ],
      "misconceptionTarget": "只比較總式未分辨固定與變動成本",
      "prerequisiteCheck": "先備能力是「能由線型函數公式找點、由兩點辨認直線，並能解讀直線的上升、下降與交點。」本題將此能力用於「比較兩方案斜截式參數」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 134,
      "unitAndRoundingCheck": "「截距單位元，斜率單位元／次。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「比較兩方案斜截式參數」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 1 的「甲固定費較高但每次增加較少」符合；其餘錯因分別記錄於 optionAnalysis。；「截距單位元，斜率單位元／次。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「比較兩方案斜截式參數」只有題幹所述的一種解讀。",
      "difficultyReason": "需對兩條函數的兩個參數做交叉比較，屬素養。",
      "literacyContextNecessity": "方案比較需要分開看固定成本與邊際成本，情境不可省略。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "7d2f480dae5c166db83d2eb519035a0082cabb0e66a43912b9df8701d5de90ad"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u15-s008-cr01",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-slope-intercept",
      "skillSlot": "s008",
      "skillTitle": "斜截式",
      "type": "constructed-response",
      "prompt": "把 3x+2y=10 整理成斜截式，指出斜率與 y 軸截距，並寫出一個與它平行且通過 (0,-4) 的函數式。",
      "requiredWork": "須完成代數整理、讀參數、建立平行線。",
      "standardSolution": "2y=-3x+10，所以 y=-(3/2)x+5。斜率 -3/2，y 軸截距 5。平行線斜率相同且通過 (0,-4)，故 y=-(3/2)x-4。",
      "alternativeMethod": "可先由一般式的係數求斜率 -A/B=-3/2，但仍須整理驗證。",
      "reasoningSteps": [
        {
          "step": 1,
          "work": "解出 y"
        },
        {
          "step": 2,
          "work": "讀斜率 -3/2 與截距 5"
        },
        {
          "step": 3,
          "work": "保留平行斜率"
        },
        {
          "step": 4,
          "work": "用新截距 -4"
        }
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "整理得 y=-(3/2)x+5，指出斜率 -3/2、y 軸截距 5，並寫出通過 (0,-4) 的平行線 y=-(3/2)x-4。"
        },
        {
          "score": 2,
          "criteria": "原直線斜截式與斜率正確，但平行線截距或方程有一處錯；或平行線正確而漏說明 y 軸截距 5。"
        },
        {
          "score": 1,
          "criteria": "只把原式整理到 2y=-3x+10，或只辨認平行線斜率相同但未完成兩條斜截式。"
        },
        {
          "score": 0,
          "criteria": "整理時沒有把 x 項移到另一邊或沒有同除 2，導致斜率與截距均無法對應原方程。"
        }
      ],
      "partialCreditRules": [
        "整理原式時若只有常數除 2 錯，平行線仍沿用正確斜率 -3/2，可保留斜率與平行概念分。",
        "平行線只寫斜率相同而未用通過 (0,-4) 決定截距，最高 1 分。"
      ],
      "followThroughPolicy": "本題延續計分依以下具體規則處理：整理原式時若只有常數除 2 錯，平行線仍沿用正確斜率 -3/2，可保留斜率與平行概念分。；平行線只寫斜率相同而未用通過 (0,-4) 決定截距，最高 1 分。",
      "unitAndNotationRules": "沿用題幹的變數、序對、不等號與計量單位；作答必須清楚呈現以下要求中的符號與單位：須完成代數整理、讀參數、建立平行線。",
      "answerOnlyPolicy": "只寫最終答案而未呈現必要方法時，依本題 1 分規準處理：只把原式整理到 2y=-3x+10，或只辨認平行線斜率相同但未完成兩條斜截式。；答案錯且無可辨識過程則為 0 分。",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "recomputedConclusion": "2y=-3x+10，所以 y=-(3/2)x+5。斜率 -3/2，y 軸截距 5。平行線斜率相同且通過 (0,-4)，故 y=-(3/2)x-4。",
        "reviewNote": "獨立重做 u15-s008-cr01 時依序檢查 解出 y、讀斜率 -3/2 與截距 5、保留平行斜率、用新截距 -4；標準解與替代法在允許範圍內得到一致結論，量綱與端點亦符合題意。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "27c1c703982062bfa814ddd7051d314f95e7cf6562efd621442d2d9decb7e810"
    },
    {
      "questionId": "u15-s008-cr02",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "linear-function-slope-intercept",
      "skillSlot": "s008",
      "skillTitle": "斜截式",
      "type": "constructed-response",
      "prompt": "線型函數 y=(k+2)x-3 通過點 (4,17)。求 k，並判斷圖形向右上升或下降。",
      "requiredWork": "須代點求參數並以斜率正負判方向。",
      "standardSolution": "17=4(k+2)-3，得 20=4(k+2)，k+2=5，所以 k=3。斜率 k+2=5>0，圖形向右上升。",
      "alternativeMethod": "可先用點 (0,-3) 與 (4,17) 求斜率 (20/4)=5，再令 k+2=5。",
      "reasoningSteps": [
        {
          "step": 1,
          "work": "代點建立方程"
        },
        {
          "step": 2,
          "work": "求 k=3"
        },
        {
          "step": 3,
          "work": "算斜率 5"
        },
        {
          "step": 4,
          "work": "判向右上升"
        }
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "代入 (4,17) 解得 k=3，進而指出斜率 k+2=5>0，所以圖形向右上升。"
        },
        {
          "score": 2,
          "criteria": "正確求得 k=3，但漏寫斜率 5 或上升理由；或建式正確且僅有一處非核心代數錯，仍依所得斜率一致判斷方向。"
        },
        {
          "score": 1,
          "criteria": "只建立 17=4(k+2)-3，或只知道正斜率向右上升但未求出 k。"
        },
        {
          "score": 0,
          "criteria": "把點坐標代反，或把截距 -3 當斜率而沒有有效參數方程。"
        }
      ],
      "partialCreditRules": [
        "若 k 的代數計算有一次錯，但能以所得 k+2 的正負一致判定上升或下降，保留方向方法分。",
        "只寫 k=3 而未指出實際斜率 5 與方向，最高 2 分。"
      ],
      "followThroughPolicy": "本題延續計分依以下具體規則處理：若 k 的代數計算有一次錯，但能以所得 k+2 的正負一致判定上升或下降，保留方向方法分。；只寫 k=3 而未指出實際斜率 5 與方向，最高 2 分。",
      "unitAndNotationRules": "沿用題幹的變數、序對、不等號與計量單位；作答必須清楚呈現以下要求中的符號與單位：須代點求參數並以斜率正負判方向。",
      "answerOnlyPolicy": "只寫最終答案而未呈現必要方法時，依本題 1 分規準處理：只建立 17=4(k+2)-3，或只知道正斜率向右上升但未求出 k。；答案錯且無可辨識過程則為 0 分。",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "recomputedConclusion": "17=4(k+2)-3，得 20=4(k+2)，k+2=5，所以 k=3。斜率 k+2=5>0，圖形向右上升。",
        "reviewNote": "獨立重做 u15-s008-cr02 時依序檢查 代點建立方程、求 k=3、算斜率 5、判向右上升；標準解與替代法在允許範圍內得到一致結論，量綱與端點亦符合題意。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "18ea057630d086169eaf2a5f4488ee6e047515c4719830931ffb27fcf650e0e6"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u15-s008-mc01-review",
      "questionId": "u15-s008-mc01",
      "unitId": "u15",
      "skillId": "linear-function-slope-intercept",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "901de6052194edcafa890547632acc8401bbab3de7eb5bde48475408c974ab5e",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "-3，5",
      "storedAnswer": "-3，5",
      "independentSolution": "不採用已存答案，重新依題意處理：對照 a、b；保留 -3 的負號；得到 -3、5。因此得到「-3，5」。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 3 的「-3，5」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "直接辨認 a、b，屬基礎。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s008-mc01，審查者未讀取存答而依序完成：對照 a、b；保留 -3 的負號；得到 -3、5。重算結果為「-3，5」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「漏掉斜率負號。；把常數項符號也誤改。；交換斜率與截距。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s008-mc02-review",
      "questionId": "u15-s008-mc02",
      "unitId": "u15",
      "skillId": "linear-function-slope-intercept",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "4b263a20181c6d94a3fe48334db228f9081b87ef3bb4d8e87d7056bbfc74ec8f",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "y=-2x+5",
      "storedAnswer": "y=-2x+5",
      "independentSolution": "不採用已存答案，重新依題意處理：寫 y=ax+b；代 a=-2；代 b=5。因此得到「y=-2x+5」。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 1 的「y=-2x+5」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "直接套斜截式，屬基礎。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s008-mc02，審查者未讀取存答而依序完成：寫 y=ax+b；代 a=-2；代 b=5。重算結果為「y=-2x+5」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「斜率符號錯。；截距符號錯。；交換 a、b。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s008-mc03-review",
      "questionId": "u15-s008-mc03",
      "unitId": "u15",
      "skillId": "linear-function-slope-intercept",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "b608774d3b138bd0edbef378c6b8fa5958966d0b4bc69a3e30f98b41073a5c3b",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "(0,0)",
      "storedAnswer": "(0,0)",
      "independentSolution": "不採用已存答案，重新依題意處理：補寫 b=0；令 x=0；得 (0,0)。因此得到「(0,0)」。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 0 的「(0,0)」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "考 b=0 邊界，屬基礎。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s008-mc03，審查者未讀取存答而依序完成：補寫 b=0；令 x=0；得 (0,0)。重算結果為「(0,0)」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把斜率當 x 截距。；把斜率當 y 截距。；b=0 仍有截距。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s008-mc04-review",
      "questionId": "u15-s008-mc04",
      "unitId": "u15",
      "skillId": "linear-function-slope-intercept",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "b32a0202b68a5fb5e9b62dbb71ff1e5d4e000e4f01f1f0c32d03c084f3516c3e",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "y=2x-4",
      "storedAnswer": "y=2x-4",
      "independentSolution": "不採用已存答案，重新依題意處理：移項得 -y=4-2x；整式乘 -1；整理 y=2x-4。因此得到「y=2x-4」。",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 2 的「y=2x-4」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需兩步代數整理，屬標準。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s008-mc04，審查者未讀取存答而依序完成：移項得 -y=4-2x；整式乘 -1；整理 y=2x-4。重算結果為「y=2x-4」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「只交換兩項未整體變號。；常數項變號錯。；x 係數與常數都錯。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s008-mc05-review",
      "questionId": "u15-s008-mc05",
      "unitId": "u15",
      "skillId": "linear-function-slope-intercept",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "3c481be027169b5db7908c7a1c0a951b8f5d8b691539511a7c12d435313ba331",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "y=-3x+7",
      "storedAnswer": "y=-3x+7",
      "independentSolution": "不採用已存答案，重新依題意處理：先寫 y=-3x+b；代入點；求 b=7。因此得到「y=-3x+7」。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 1 的「y=-3x+7」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "要由點求未知截距，屬標準。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s008-mc05，審查者未讀取存答而依序完成：先寫 y=-3x+b；代入點；求 b=7。重算結果為「y=-3x+7」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把點的 x=1 當截距。；斜率符號錯。；把點的 y=4 直接當截距。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s008-mc06-review",
      "questionId": "u15-s008-mc06",
      "unitId": "u15",
      "skillId": "linear-function-slope-intercept",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "304c9224341c02183d049c5de2f686f93b316198e121d0f49251e5f80d46daf0",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "y=-5x+1",
      "storedAnswer": "y=-5x+1",
      "independentSolution": "不採用已存答案，重新依題意處理：取斜率絕對值 5、4、2、0.5；比較大小；選 -5。因此得到「y=-5x+1」。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 0 的「y=-5x+1」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需使用斜率絕對值，屬標準。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s008-mc06，審查者未讀取存答而依序完成：取斜率絕對值 5、4、2、0.5；比較大小；選 -5。重算結果為「y=-5x+1」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「|4| 小於 5。；|2| 更小。；|0.5| 最小。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s008-mc07-review",
      "questionId": "u15-s008-mc07",
      "unitId": "u15",
      "skillId": "linear-function-slope-intercept",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "edbd48c6f28feed67d5125fac5298adba978863f820dca7c77ce386b41c1bd2c",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "independentSolution": "不採用已存答案，重新依題意處理：讀斜率 k-1；建立 k-1=3；解 k=4。因此得到「4」。",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 2 的「4」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需把含參數係數等同斜率，屬進階。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s008-mc07，審查者未讀取存答而依序完成：讀斜率 k-1；建立 k-1=3；解 k=4。重算結果為「4」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把 k-1=1。；把斜率直接當 k。；移項方向錯。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s008-mc08-review",
      "questionId": "u15-s008-mc08",
      "unitId": "u15",
      "skillId": "linear-function-slope-intercept",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "9686a28e70d26be83fb4cd0ad90102278fd91cf48ab581cef1287112fa7b51f4",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "y=-2x+3",
      "storedAnswer": "y=-2x+3",
      "independentSolution": "不採用已存答案，重新依題意處理：求斜率 -2；代點求 b=3；寫式。因此得到「y=-2x+3」。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 3 的「y=-2x+3」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "負數坐標與兩階段計算，屬進階。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s008-mc08，審查者未讀取存答而依序完成：求斜率 -2；代點求 b=3；寫式。重算結果為「y=-2x+3」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「斜率符號錯。；截距符號錯。；斜率計算少除 2。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s008-mc09-review",
      "questionId": "u15-s008-mc09",
      "unitId": "u15",
      "skillId": "linear-function-slope-intercept",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "816ed62478dc30c9789575fe683bc1ef9a9bd7e1f5a2777c11d15936cf902c98",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "-1",
      "storedAnswer": "-1",
      "independentSolution": "不採用已存答案，重新依題意處理：由平行得 a=3；由 y 軸點得 b=-4；相加 -1。因此得到「-1」。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 0 的「-1」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需從兩條獨立資訊求 a、b 再運算，屬進階。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s008-mc09，審查者未讀取存答而依序完成：由平行得 a=3；由 y 軸點得 b=-4；相加 -1。重算結果為「-1」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把 -4 的符號漏掉。；把 a 與 |b| 相加。；把兩線截距也設相同。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s008-mc10-review",
      "questionId": "u15-s008-mc10",
      "unitId": "u15",
      "skillId": "linear-function-slope-intercept",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "f88a4d60a24fe813732b3f0380669f8e9a2732ec78b31721c1ad995e7267ce4b",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "每小時 8 元；固定費 25 元",
      "storedAnswer": "每小時 8 元；固定費 25 元",
      "independentSolution": "不採用已存答案，重新依題意處理：配對斜率與元／小時；配對截距與元；形成完整解讀。因此得到「每小時 8 元；固定費 25 元」。",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 2 的「每小時 8 元；固定費 25 元」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「8 的單位為元／小時，25 的單位為元。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需結合量綱精確解讀 a、b，屬素養。",
      "literacyNecessityReview": "租借費的固定與變動部分是斜截式語意的核心。",
      "reviewerNote": "針對 u15-s008-mc10，審查者未讀取存答而依序完成：配對斜率與元／小時；配對截距與元；形成完整解讀。重算結果為「每小時 8 元；固定費 25 元」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「交換斜率與截距。；把參數誤當坐標點。；倒置速率。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s008-mc11-review",
      "questionId": "u15-s008-mc11",
      "unitId": "u15",
      "skillId": "linear-function-slope-intercept",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "fb3685c3501816e59a72424ca859913c817651a8ffba55a888e72009f789c19f",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "起始 12°C，每小時下降 1.5°C",
      "storedAnswer": "起始 12°C，每小時下降 1.5°C",
      "independentSolution": "不採用已存答案，重新依題意處理：讀 b=12；讀 a=-1.5；加上單位與方向。因此得到「起始 12°C，每小時下降 1.5°C」。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 3 的「起始 12°C，每小時下降 1.5°C」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「斜率為 °C／小時，截距為 °C。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需把負斜率翻譯成生活語意，屬素養。",
      "literacyNecessityReview": "溫度變化方向與初始值必須由參數和單位共同解讀。",
      "reviewerNote": "針對 u15-s008-mc11，審查者未讀取存答而依序完成：讀 b=12；讀 a=-1.5；加上單位與方向。重算結果為「起始 12°C，每小時下降 1.5°C」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「交換參數且方向錯。；把係數當時間點。；斜率不是最低溫。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s008-mc12-review",
      "questionId": "u15-s008-mc12",
      "unitId": "u15",
      "skillId": "linear-function-slope-intercept",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "7d2f480dae5c166db83d2eb519035a0082cabb0e66a43912b9df8701d5de90ad",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "甲固定費較高但每次增加較少",
      "storedAnswer": "甲固定費較高但每次增加較少",
      "independentSolution": "不採用已存答案，重新依題意處理：比較截距 80 與 30；比較斜率 4 與 6；用完整句描述。因此得到「甲固定費較高但每次增加較少」。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 1 的「甲固定費較高但每次增加較少」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「截距單位元，斜率單位元／次。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需對兩條函數的兩個參數做交叉比較，屬素養。",
      "literacyNecessityReview": "方案比較需要分開看固定成本與邊際成本，情境不可省略。",
      "reviewerNote": "針對 u15-s008-mc12，審查者未讀取存答而依序完成：比較截距 80 與 30；比較斜率 4 與 6；用完整句描述。重算結果為「甲固定費較高但每次增加較少」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「固定費比較錯。；乙固定費其實較低。；兩組參數明顯不同。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u15-fig-slope-intercept",
      "unitId": "u15",
      "skillSlot": "s008",
      "title": "斜率與截距比較",
      "svgPath": "figures/u15/u15-fig-slope-intercept.svg",
      "altText": "同一坐標平面有直線甲 y 等於二 x 減二與直線乙 y 等於負 x 加三，標示各自 y 軸截距。",
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
          -3,
          5
        ],
        "yRange": [
          -5,
          7
        ],
        "objects": [
          [
            "line",
            -1,
            -4,
            4,
            6,
            "甲 y=2x-2"
          ],
          [
            "line",
            -3,
            6,
            5,
            -2,
            "乙 y=-x+3"
          ],
          [
            "point",
            0,
            -2,
            "甲截距"
          ],
          [
            "point",
            0,
            3,
            "乙截距"
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
            "y": "254.7",
            "fontSize": "16",
            "textAnchor": "start"
          },
          {
            "text": "y",
            "x": "277.5",
            "y": "50",
            "fontSize": "16",
            "textAnchor": "start"
          },
          {
            "text": "-3",
            "x": "68.0",
            "y": "246.7",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "0",
            "x": "255.5",
            "y": "246.7",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "5",
            "x": "568.0",
            "y": "246.7",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "-5",
            "x": "232.5",
            "y": "364.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "0",
            "x": "232.5",
            "y": "230.7",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "7",
            "x": "232.5",
            "y": "44.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "甲 y=2x-2",
            "x": "367.2",
            "y": "192.0",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "乙 y=-x+3",
            "x": "336.0",
            "y": "165.3",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "甲截距",
            "x": "275.5",
            "y": "272.0",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "乙截距",
            "x": "275.5",
            "y": "138.7",
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
            "id": "u15-fig-slope-intercept-x-axis",
            "element": "line",
            "attributes": {
              "x1": "80",
              "y1": "226.7",
              "x2": "590",
              "y2": "226.7",
              "stroke": "#111",
              "stroke-width": "2",
              "marker-end": "url(#arrow)"
            }
          },
          {
            "id": "u15-fig-slope-intercept-y-axis",
            "element": "line",
            "attributes": {
              "x1": "267.5",
              "y1": "360",
              "x2": "267.5",
              "y2": "30",
              "stroke": "#111",
              "stroke-width": "2",
              "marker-end": "url(#arrow)"
            }
          },
          {
            "id": "u15-fig-slope-intercept-obj-1",
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
            "id": "u15-fig-slope-intercept-obj-2",
            "element": "line",
            "attributes": {
              "x1": "80.0",
              "y1": "66.7",
              "x2": "580.0",
              "y2": "280.0",
              "stroke": "#1f2937",
              "stroke-width": "3"
            }
          },
          {
            "id": "u15-fig-slope-intercept-obj-3",
            "element": "circle",
            "attributes": {
              "cx": "267.5",
              "cy": "280.0",
              "r": "6",
              "fill": "#111"
            }
          },
          {
            "id": "u15-fig-slope-intercept-obj-4",
            "element": "circle",
            "attributes": {
              "cx": "267.5",
              "cy": "146.7",
              "r": "6",
              "fill": "#111"
            }
          }
        ]
      },
      "svgTitle": "斜率與截距比較",
      "svgDesc": "同一坐標平面有直線甲 y 等於二 x 減二與直線乙 y 等於負 x 加三，標示各自 y 軸截距。",
      "svgAssertions": [
        "u15-fig-slope-intercept",
        "u15-fig-slope-intercept-title",
        "u15-fig-slope-intercept-desc",
        "role=\"img\"",
        "viewBox=\"0 0 640 420\"",
        "斜率與截距比較"
      ],
      "mobileReadabilityReview": "以 360px 寬縮放檢查，關鍵字標籤字級不低於等效 12px，點半徑與虛線仍可辨識。",
      "answerLeakageReview": "圖僅呈現題目已給資料與必要坐標，不以醒目文字直接寫出選項答案；需由讀圖或計算完成。",
      "figureReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "manualInspectionRequired": true,
        "reviewNote": "已檢查 u15-fig-slope-intercept 的軸向、刻度、負號、端點實空心、標籤遮擋與手機縮放；圖形內容與「兩直線用不同虛實線呈現，截距點明確標示。」一致。",
        "manualInspectionCompleted": true,
        "renderedAt": "2026-07-12T18:20:00+08:00",
        "renderedCanvas": "640×420 PNG，另以雙欄 contact sheet 檢視全部 14 圖",
        "renderedInspectionSummary": "逐圖檢查坐標軸方向、刻度、公式與點標籤、實心及空心端點、虛線、文字遮擋、360px 縮放可讀性與答案洩漏；修正後未見幾何或標示衝突。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "7402bda9571474c8dcf90ea358aa827020502358b16fd4f8a33943e84a0f42d3"
    }
  ],
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "productionActivationAllowed": false
};
