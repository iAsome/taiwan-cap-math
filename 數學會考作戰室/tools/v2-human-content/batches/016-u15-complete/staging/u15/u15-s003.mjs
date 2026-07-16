// Emitted only from reviewed immutable source.
export default {
  "lecture": {
    "lectureId": "u15-s003-lecture",
    "unitId": "u15",
    "numericUnitId": 15,
    "unitTitle": "函數及其圖形",
    "topicId": "u15-basics",
    "skillId": "function-input-output",
    "skillSlot": "s003",
    "skillTitle": "自變數與應變數",
    "order": 3,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "prerequisites": [
      {
        "skillId": "function-value",
        "title": "函數值",
        "requiredLevel": "能依公式或表格求指定輸入的函數值，並理解輸入先給定、輸出由規則決定。",
        "bridge": "上一節已實際完成輸入到輸出的計算；本節為這兩個角色命名，並依情境判斷誰能自由選取、誰會隨之改變。"
      }
    ],
    "learningGoals": [
      "辨認自變數與應變數",
      "依情境選定合理輸入和輸出",
      "理解輸出由輸入決定但不一定反向唯一"
    ],
    "vocabulary": [
      {
        "term": "自變數",
        "meaning": "可先選取或控制的輸入量"
      },
      {
        "term": "應變數",
        "meaning": "隨自變數改變而決定的輸出量"
      },
      {
        "term": "變數",
        "meaning": "可以取不同值的量"
      }
    ],
    "conceptDevelopment": [
      "在「購買盒數決定總價」中，盒數先決定，因此是自變數；總價依盒數改變，是應變數。判斷時要問：哪一個量先給定？哪一個量由它算出？",
      "應變數可以在不同輸入下出現相同值。例如 y=4 時，不論 x 取 1、2 或 3，輸出都為 4；每個 x 仍只有一個 y，所以仍是函數。"
    ],
    "definitionsAndMeaning": "在「購買盒數決定總價」中，盒數先決定，因此是自變數；總價依盒數改變，是應變數。判斷時要問：哪一個量先給定？哪一個量由它算出？",
    "formulasAndConditions": [
      "常用寫法：y=f(x)，x 是自變數，y 是應變數。",
      "單位必須跟著變數，例如時間 t（分鐘）、距離 d（公尺）。"
    ],
    "invalidUseCases": [
      "把文字中先出現的量一定當自變數。",
      "因為兩個輸入同輸出就否定函數。",
      "忽略情境的可行範圍。"
    ],
    "stepByStepMethod": [
      "找出情境中的兩個會變動的量。",
      "判斷哪個量可以先指定。",
      "確認另一量能由前者唯一決定。",
      "寫清楚變數名稱、意義與單位。"
    ],
    "workedExamples": [
      {
        "exampleId": "s003-ex01",
        "title": "固定單價",
        "prompt": "一本筆記本 35 元，買 x 本的總價為 y 元。寫出 y 與 x 的關係，並判斷自變數和應變數。",
        "solution": "每本 35 元，買 x 本，總價 y=35x；x 是自變數，y 是應變數。",
        "level": "basic"
      },
      {
        "exampleId": "s003-ex02",
        "title": "固定速度",
        "prompt": "某人以每分鐘 80 公尺等速行走，經過 t 分鐘的距離為 d 公尺。寫出函數式並判斷兩個變數的角色。",
        "solution": "以每分鐘 80 公尺行走，時間 t 決定距離 d=80t。",
        "level": "standard"
      },
      {
        "exampleId": "s003-ex03",
        "title": "圓周長",
        "prompt": "圓的半徑為 r、圓周長為 C，且 C=2πr。若把 r 作為可選取的量，哪一個是應變數？",
        "solution": "半徑 r 決定圓周長 C=2πr。",
        "level": "advanced"
      },
      {
        "exampleId": "s003-ex04",
        "title": "非反向唯一",
        "prompt": "把學生當輸入、出生月份當輸出時是函數。若交換方向，把月份當輸入，為何通常不再是函數？",
        "solution": "學生→出生月份是函數，但月份→學生通常不是函數。",
        "level": "connection"
      }
    ],
    "commonMistakes": [
      {
        "mistakeId": "s003-m01",
        "wrongReasoning": "把應變數當成原因量。",
        "correction": "先問哪個量可被設定或觀察為輸入，再判斷另一量是否由它唯一決定，不以「原因」字面猜測。"
      },
      {
        "mistakeId": "s003-m02",
        "wrongReasoning": "只看字母 x、y，不看題意。",
        "correction": "字母名稱可以互換；必須依題意看誰先給定、誰由公式或規則算出。"
      },
      {
        "mistakeId": "s003-m03",
        "wrongReasoning": "漏寫單位導致解讀不完整。",
        "correction": "變數名稱後標出單位，例如 t（分鐘）、d（公尺），才能正確解讀變化率。"
      },
      {
        "mistakeId": "s003-m04",
        "wrongReasoning": "認為輸出必須隨輸入每次都改變。",
        "correction": "函數允許不同輸入有相同輸出；只要每個輸入各自唯一即可。"
      },
      {
        "mistakeId": "s003-m05",
        "wrongReasoning": "擅自把不允許的負值放進情境。",
        "correction": "先寫情境可行範圍，例如時間與數量通常不得為負，再使用公式。"
      }
    ],
    "selfChecks": [
      {
        "prompt": "固定寬 5 公分，長決定面積。自變數是？",
        "answer": "長。"
      },
      {
        "prompt": "時間決定剩餘電量。應變數是？",
        "answer": "剩餘電量。"
      },
      {
        "prompt": "不同時間可有相同溫度嗎？",
        "answer": "可以，函數不要求輸出皆不同。"
      }
    ],
    "summary": "先給定的是自變數，由它唯一決定的是應變數。",
    "previousSkillConnection": "function-value",
    "nextSkillConnection": "function-notation",
    "figureRefs": [],
    "accessibilityNotes": [],
    "lectureReview": {
      "reviewVersion": "human-lecture-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "decision": "pass",
      "reviewNote": "逐段人工重讀「自變數與應變數」講義：先備橋接已具體指出學生必須會做的前一步，四個例題均改成可獨立作答的完整題目；五個錯誤修正逐一對應本技能的符號、條件、坐標或情境限制。另核對所有公式只使用 U15 線型函數、常數函數或有限對應範圍，未預用未來單元方法。",
      "zeroFoundationCheck": "學生只需具備 能以自己的話說明「函數值」並完成基本判斷或計算。",
      "capBoundaryCheck": "內容限國中會考線型函數與基本分段情境，未引入指數、對數、微積分或高中函數理論。"
    },
    "canonicalization": "sorted-keys-json-utf8-v1",
    "contentSha256": "38928a9226e979f23859d77560260271ecf56c20d95e1149fb12b5d995a93615"
  },
  "mcQuestions": [
    {
      "questionId": "u15-s003-mc01",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-input-output",
      "skillSlot": "s003",
      "skillTitle": "自變數與應變數",
      "difficulty": "basic",
      "type": "mc",
      "text": "小明以固定速度行走，行走距離 d 由時間 t 決定。哪一個是自變數？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「辨認自變數」。",
      "target": "辨認自變數",
      "choices": [
        "距離 d",
        "速度與距離的乘積",
        "時間 t",
        "路線名稱"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，重新依題意處理：找出先給定的量；確認距離由它決定；選時間 t。因此得到「時間 t」。",
      "explanation": "題意說時間先給定，距離隨時間決定，所以 t 是自變數。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "找出先給定的量"
        },
        {
          "step": 2,
          "work": "確認距離由它決定"
        },
        {
          "step": 3,
          "work": "選時間 t"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "距離 d",
          "truth": false,
          "reason": "距離是應變數。"
        },
        {
          "index": 1,
          "choice": "速度與距離的乘積",
          "truth": false,
          "reason": "不是題目定義的變數。"
        },
        {
          "index": 2,
          "choice": "時間 t",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；題意說時間先給定，距離隨時間決定，所以 t 是自變數。"
        },
        {
          "index": 3,
          "choice": "路線名稱",
          "truth": false,
          "reason": "路線名稱不是此函數中的數量。"
        }
      ],
      "misconceptionTarget": "把結果量誤當輸入量",
      "prerequisiteCheck": "先備能力是「能依公式或表格求指定輸入的函數值，並理解輸入先給定、輸出由規則決定。」本題將此能力用於「辨認自變數」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 90,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「辨認自變數」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 2 的「時間 t」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「辨認自變數」只有題幹所述的一種解讀。",
      "difficultyReason": "直接由「由時間決定」辨認，屬基礎。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "fe03a17d3613ab1ad59c2f6fe9346483dca29bf20d5d3da00f117a65c019ee6f"
    },
    {
      "questionId": "u15-s003-mc02",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-input-output",
      "skillSlot": "s003",
      "skillTitle": "自變數與應變數",
      "difficulty": "basic",
      "type": "mc",
      "text": "在 y=5x+2 中，若 x 可自由選取而 y 依公式算出，下列何者正確？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由公式辨認輸入與輸出」。",
      "target": "由公式辨認輸入與輸出",
      "choices": [
        "y 是自變數，x 是應變數",
        "x、y 都不是變數",
        "常數 2 是自變數",
        "x 是自變數，y 是應變數"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用已存答案，重新依題意處理：確認可先選 x；由公式計算 y；判定角色。因此得到「x 是自變數，y 是應變數」。",
      "explanation": "x 先被選取，y 由 x 唯一算出，因此 x 是自變數、y 是應變數。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "確認可先選 x"
        },
        {
          "step": 2,
          "work": "由公式計算 y"
        },
        {
          "step": 3,
          "work": "判定角色"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "y 是自變數，x 是應變數",
          "truth": false,
          "reason": "顛倒輸入與輸出。"
        },
        {
          "index": 1,
          "choice": "x、y 都不是變數",
          "truth": false,
          "reason": "x、y 可取不同值，確為變數。"
        },
        {
          "index": 2,
          "choice": "常數 2 是自變數",
          "truth": false,
          "reason": "2 是固定常數。"
        },
        {
          "index": 3,
          "choice": "x 是自變數，y 是應變數",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；x 先被選取，y 由 x 唯一算出，因此 x 是自變數、y 是應變數。"
        }
      ],
      "misconceptionTarget": "只按字母位置猜變數角色",
      "prerequisiteCheck": "先備能力是「能依公式或表格求指定輸入的函數值，並理解輸入先給定、輸出由規則決定。」本題將此能力用於「由公式辨認輸入與輸出」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 94,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由公式辨認輸入與輸出」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 3 的「x 是自變數，y 是應變數」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由公式辨認輸入與輸出」只有題幹所述的一種解讀。",
      "difficultyReason": "一次式中的角色辨認，屬基礎。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "fc4dd270e2cc7d920af84b65b68823ef2cb0331b04f8c35b70fd7efce9f8871f"
    },
    {
      "questionId": "u15-s003-mc03",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-input-output",
      "skillSlot": "s003",
      "skillTitle": "自變數與應變數",
      "difficulty": "basic",
      "type": "mc",
      "text": "圓周長 C=2πr。若研究不同半徑的圓，應把哪個量當應變數？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「辨認幾何情境的應變數」。",
      "target": "辨認幾何情境的應變數",
      "choices": [
        "圓周長 C",
        "半徑 r",
        "圓周率 π",
        "數字 2"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，重新依題意處理：找可控制的半徑；看公式中 C 由 r 決定；選 C。因此得到「圓周長 C」。",
      "explanation": "半徑先決定，圓周長隨半徑改變，所以 C 是應變數。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "找可控制的半徑"
        },
        {
          "step": 2,
          "work": "看公式中 C 由 r 決定"
        },
        {
          "step": 3,
          "work": "選 C"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "圓周長 C",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；半徑先決定，圓周長隨半徑改變，所以 C 是應變數。"
        },
        {
          "index": 1,
          "choice": "半徑 r",
          "truth": false,
          "reason": "半徑是自變數。"
        },
        {
          "index": 2,
          "choice": "圓周率 π",
          "truth": false,
          "reason": "π 是常數。"
        },
        {
          "index": 3,
          "choice": "數字 2",
          "truth": false,
          "reason": "2 是固定係數。"
        }
      ],
      "misconceptionTarget": "把公式中的任一符號都當變數",
      "prerequisiteCheck": "先備能力是「能依公式或表格求指定輸入的函數值，並理解輸入先給定、輸出由規則決定。」本題將此能力用於「辨認幾何情境的應變數」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 98,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「辨認幾何情境的應變數」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 0 的「圓周長 C」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「辨認幾何情境的應變數」只有題幹所述的一種解讀。",
      "difficultyReason": "只需辨認固定量與變動量，屬基礎。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "bc1265620a503d9e8dfcdba484c25a345cf1c62406e4184732642a90c57544ae"
    },
    {
      "questionId": "u15-s003-mc04",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-input-output",
      "skillSlot": "s003",
      "skillTitle": "自變數與應變數",
      "difficulty": "standard",
      "type": "mc",
      "text": "每本筆記本 28 元。買 x 本的總價為 y=28x。下列對變數與單位的描述何者正確？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「辨認自應變數與單位」。",
      "target": "辨認自應變數與單位",
      "choices": [
        "x 是元數，y 是本數",
        "x 是本數，y 是元數",
        "x、y 的單位都為元",
        "x 的單位是元／本，y 的單位是本"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，重新依題意處理：由 28x 解讀單價乘本數；確定 x 單位為本；確定 y 單位為元。因此得到「x 是本數，y 是元數」。",
      "explanation": "輸入 x 表示購買本數，輸出 y 表示總價元數，28 的單位為元／本。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "由 28x 解讀單價乘本數"
        },
        {
          "step": 2,
          "work": "確定 x 單位為本"
        },
        {
          "step": 3,
          "work": "確定 y 單位為元"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "x 是元數，y 是本數",
          "truth": false,
          "reason": "把輸入輸出單位顛倒。"
        },
        {
          "index": 1,
          "choice": "x 是本數，y 是元數",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；輸入 x 表示購買本數，輸出 y 表示總價元數，28 的單位為元／本。"
        },
        {
          "index": 2,
          "choice": "x、y 的單位都為元",
          "truth": false,
          "reason": "本數不是元。"
        },
        {
          "index": 3,
          "choice": "x 的單位是元／本，y 的單位是本",
          "truth": false,
          "reason": "元／本是係數 28 的單位。"
        }
      ],
      "misconceptionTarget": "忽略變數單位",
      "prerequisiteCheck": "先備能力是「能依公式或表格求指定輸入的函數值，並理解輸入先給定、輸出由規則決定。」本題將此能力用於「辨認自應變數與單位」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 102,
      "unitAndRoundingCheck": "「x 以本計，y 以元計。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「辨認自應變數與單位」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 1 的「x 是本數，y 是元數」符合；其餘錯因分別記錄於 optionAnalysis。；「x 以本計，y 以元計。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「辨認自應變數與單位」只有題幹所述的一種解讀。",
      "difficultyReason": "需同時解讀角色與量綱，屬標準。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "33fb9fab86f6be723301e3e453f79147ce941e2bfcd85659bf8d94858f95030e"
    },
    {
      "questionId": "u15-s003-mc05",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-input-output",
      "skillSlot": "s003",
      "skillTitle": "自變數與應變數",
      "difficulty": "standard",
      "type": "mc",
      "text": "固定寬為 4 公分的長方形，長為 x 公分，面積 A=4x。若 x 從 3 增加到 5，哪個量是應變數且改變多少？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「解讀變數角色與改變量」。",
      "target": "解讀變數角色與改變量",
      "choices": [
        "長 x，增加 8 公分",
        "面積 A，增加 2 平方公分",
        "寬，增加 2 公分",
        "面積 A，增加 8 平方公分"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用已存答案，重新依題意處理：辨認 A 是應變數；算兩個面積；相減得 8。因此得到「面積 A，增加 8 平方公分」。",
      "explanation": "面積由長決定；A(5)-A(3)=20-12=8 平方公分。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "辨認 A 是應變數"
        },
        {
          "step": 2,
          "work": "算兩個面積"
        },
        {
          "step": 3,
          "work": "相減得 8"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "長 x，增加 8 公分",
          "truth": false,
          "reason": "長是自變數且只增加 2。"
        },
        {
          "index": 1,
          "choice": "面積 A，增加 2 平方公分",
          "truth": false,
          "reason": "只看 x 的改變量，未乘固定寬。"
        },
        {
          "index": 2,
          "choice": "寬，增加 2 公分",
          "truth": false,
          "reason": "寬固定不變。"
        },
        {
          "index": 3,
          "choice": "面積 A，增加 8 平方公分",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；面積由長決定；A(5)-A(3)=20-12=8 平方公分。"
        }
      ],
      "misconceptionTarget": "只辨認變數未計算輸出改變",
      "prerequisiteCheck": "先備能力是「能依公式或表格求指定輸入的函數值，並理解輸入先給定、輸出由規則決定。」本題將此能力用於「解讀變數角色與改變量」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 106,
      "unitAndRoundingCheck": "「長以公分、面積以平方公分。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「解讀變數角色與改變量」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 3 的「面積 A，增加 8 平方公分」符合；其餘錯因分別記錄於 optionAnalysis。；「長以公分、面積以平方公分。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「解讀變數角色與改變量」只有題幹所述的一種解讀。",
      "difficultyReason": "需把角色判定與函數值差結合，屬標準。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "eb15646326e991869bcf1ab400042358d6e36fb22cc2daa7e4d4e87a42f642df"
    },
    {
      "questionId": "u15-s003-mc06",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-input-output",
      "skillSlot": "s003",
      "skillTitle": "自變數與應變數",
      "difficulty": "standard",
      "type": "mc",
      "text": "某函數表中，輸入 x 為 1、2、3、4，輸出 y 為 6、6、8、8。有人說「y 有重複，所以 y 不能是應變數」。此說法如何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「評估關於應變數的敘述」。",
      "target": "評估關於應變數的敘述",
      "choices": [
        "錯，應變數可在不同輸入下取相同值",
        "對，應變數的值必須全部不同",
        "對，重複輸出表示沒有自變數",
        "無法判斷，因為沒有公式"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，重新依題意處理：逐列確認唯一輸出；辨認重複是不同輸入間發生；否定錯誤主張。因此得到「錯，應變數可在不同輸入下取相同值」。",
      "explanation": "每個 x 仍各有一個 y；不同 x 共用輸出不影響 y 作為應變數。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "逐列確認唯一輸出"
        },
        {
          "step": 2,
          "work": "辨認重複是不同輸入間發生"
        },
        {
          "step": 3,
          "work": "否定錯誤主張"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "錯，應變數可在不同輸入下取相同值",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；每個 x 仍各有一個 y；不同 x 共用輸出不影響 y 作為應變數。"
        },
        {
          "index": 1,
          "choice": "對，應變數的值必須全部不同",
          "truth": false,
          "reason": "把函數誤認為一對一。"
        },
        {
          "index": 2,
          "choice": "對，重複輸出表示沒有自變數",
          "truth": false,
          "reason": "重複輸出不會消除自變數。"
        },
        {
          "index": 3,
          "choice": "無法判斷，因為沒有公式",
          "truth": false,
          "reason": "函數表已足以判斷。"
        }
      ],
      "misconceptionTarget": "誤以為應變數必須隨每次輸入改變",
      "prerequisiteCheck": "先備能力是「能依公式或表格求指定輸入的函數值，並理解輸入先給定、輸出由規則決定。」本題將此能力用於「評估關於應變數的敘述」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 110,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「評估關於應變數的敘述」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 0 的「錯，應變數可在不同輸入下取相同值」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「評估關於應變數的敘述」只有題幹所述的一種解讀。",
      "difficultyReason": "需分析一個錯誤主張，屬標準。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "27592af4cdd4c0f81e3845b40f170ef7bd4c7180078ea0f6d38415d01e944d36"
    },
    {
      "questionId": "u15-s003-mc07",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-input-output",
      "skillSlot": "s003",
      "skillTitle": "自變數與應變數",
      "difficulty": "advanced",
      "type": "mc",
      "text": "關係資料為 (-2,4)、(0,1)、(3,4)，其中第一坐標是輸入 x、第二坐標是輸出 y。若反過來把 y 當輸入、x 當輸出，為何不成函數？",
      "givenConditions": "三個序對與原、反向的坐標角色都明示；審查只對資料中實際出現的 y 值 1、4 判斷。本題的條件審查焦點是「分析交換自應變數後的函數性」。",
      "target": "分析交換自應變數後的函數性",
      "choices": [
        "因為 y=1 沒有對應值",
        "因為 y=4 會對應 x=-2 與 x=3",
        "因為 x 含有負數",
        "因為原關係有三個序對"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，反向讀三個序對：輸入 y=4 時，可得到 x=-2 或 x=3 兩個不同輸出；同一輸入不唯一，因此反向關係不是函數，答案為選項 1。",
      "explanation": "原關係允許不同 x 共用 y=4；但反向後 y=4 成為一個輸入，卻對應兩個 x，所以違反函數唯一性。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "交換輸入與輸出角色",
          "reason": "檢查反向關係。"
        },
        {
          "step": 2,
          "work": "固定反向輸入 y=4",
          "reason": "它在資料中出現兩次。"
        },
        {
          "step": 3,
          "work": "讀得 x=-2 與 x=3",
          "reason": "同一輸入有兩個輸出，故非函數。"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "因為 y=1 沒有對應值",
          "truth": false,
          "reason": "原序對 (0,1) 反向後正是 1→0。"
        },
        {
          "index": 1,
          "choice": "因為 y=4 會對應 x=-2 與 x=3",
          "truth": true,
          "reason": "反向輸入 4 具有兩個不同輸出，直接違反唯一性。"
        },
        {
          "index": 2,
          "choice": "因為 x 含有負數",
          "truth": false,
          "reason": "負數可作為合法輸入或輸出，不會自動破壞函數。"
        },
        {
          "index": 3,
          "choice": "因為原關係有三個序對",
          "truth": false,
          "reason": "序對數量不是判定函數的條件，關鍵是每個輸入的輸出數。"
        }
      ],
      "misconceptionTarget": "以為原關係是函數就能保證反向也是函數。",
      "prerequisiteCheck": "先備能力是「能依公式或表格求指定輸入的函數值，並理解輸入先給定、輸出由規則決定。」本題將此能力用於「分析交換自應變數後的函數性」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 114,
      "unitAndRoundingCheck": "「反過來」已具體解釋為 y 當輸入、x 當輸出，序對無單位且負號位置清楚。針對「分析交換自應變數後的函數性」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "三個序對與原、反向的坐標角色都明示；審查只對資料中實際出現的 y 值 1、4 判斷。；反向後 4→-2 與 4→3 明確形成兩輸出；y=1 有輸出 0，負數與序對數量都不是否定理由。；「反過來」已具體解釋為 y 當輸入、x 當輸出，序對無單位且負號位置清楚。邊界稽核另確認「分析交換自應變數後的函數性」只有題幹所述的一種解讀。",
      "difficultyReason": "需交換輸入輸出角色，找出多對一反向成一對多的關鍵值，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "94f0d1b1dc4a3ece6995129b54182c6487410e2762b59236efcf43a9ff1f7134"
    },
    {
      "questionId": "u15-s003-mc08",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-input-output",
      "skillSlot": "s003",
      "skillTitle": "自變數與應變數",
      "difficulty": "advanced",
      "type": "mc",
      "text": "固定周長 20 公分的長方形，以長 x 表示寬 y。若 x 的允許範圍為 0<x<10，則 y 與 x 的關係為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 0<x<10 保證長與寬皆為正。本題的條件審查焦點是「建立自應變數關係並解式」。",
      "target": "建立自應變數關係並解式",
      "choices": [
        "y=20-x，y 是自變數",
        "y=10+x，x 是自變數",
        "y=10-x，x 是自變數",
        "y=20-2x，x 是應變數"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，重新依題意處理：由周長式 2x+2y=20；化簡求 y；確認 x 的角色。因此得到「y=10-x，x 是自變數」。",
      "explanation": "2x+2y=20，化簡 x+y=10，所以 y=10-x；題目以 x 選長，故 x 是自變數。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "由周長式 2x+2y=20"
        },
        {
          "step": 2,
          "work": "化簡求 y"
        },
        {
          "step": 3,
          "work": "確認 x 的角色"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "y=20-x，y 是自變數",
          "truth": false,
          "reason": "漏除以 2。"
        },
        {
          "index": 1,
          "choice": "y=10+x，x 是自變數",
          "truth": false,
          "reason": "移項符號錯。"
        },
        {
          "index": 2,
          "choice": "y=10-x，x 是自變數",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；2x+2y=20，化簡 x+y=10，所以 y=10-x；題目以 x 選長，故 x 是自變數。"
        },
        {
          "index": 3,
          "choice": "y=20-2x，x 是應變數",
          "truth": false,
          "reason": "雖式子接近但角色與係數皆錯。"
        }
      ],
      "misconceptionTarget": "從情境建立關係式時係數錯誤",
      "prerequisiteCheck": "先備能力是「能依公式或表格求指定輸入的函數值，並理解輸入先給定、輸出由規則決定。」本題將此能力用於「建立自應變數關係並解式」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 118,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「建立自應變數關係並解式」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 0<x<10 保證長與寬皆為正。；四選項逐一代回或依定義檢查，只有索引 2 的「y=10-x，x 是自變數」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「建立自應變數關係並解式」只有題幹所述的一種解讀。",
      "difficultyReason": "需由幾何限制建式並辨認角色，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "73ed273d371ba65402400a0fed50c3ffe86552d6413bfcf4315b4fdcedc65ddf"
    },
    {
      "questionId": "u15-s003-mc09",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-input-output",
      "skillSlot": "s003",
      "skillTitle": "自變數與應變數",
      "difficulty": "advanced",
      "type": "mc",
      "text": "某觀測以「日期」為輸入、同一株植物當天中午量得的高度為輸出。若每一天只記錄一次，此資料是否能視為函數？",
      "givenConditions": "題目以「同一株植物、每天中午、每日期只保留一筆紀錄。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「評估實驗資料中的自應變數」。",
      "target": "評估實驗資料中的自應變數",
      "choices": [
        "可以，每個日期有唯一一筆高度",
        "不可以，因為植物高度可能不增加",
        "不可以，因為高度可能與前一天相同",
        "不可以，因為測量會有誤差"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，重新依題意處理：固定輸入為日期；確認每日期只記一次；區分函數性與資料品質。因此得到「可以，每個日期有唯一一筆高度」。",
      "explanation": "函數只要求每個日期對應一個記錄值，不要求單調或無誤差。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "固定輸入為日期"
        },
        {
          "step": 2,
          "work": "確認每日期只記一次"
        },
        {
          "step": 3,
          "work": "區分函數性與資料品質"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "可以，每個日期有唯一一筆高度",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；函數只要求每個日期對應一個記錄值，不要求單調或無誤差。"
        },
        {
          "index": 1,
          "choice": "不可以，因為植物高度可能不增加",
          "truth": false,
          "reason": "是否增加與函數性無關。"
        },
        {
          "index": 2,
          "choice": "不可以，因為高度可能與前一天相同",
          "truth": false,
          "reason": "相同輸出允許。"
        },
        {
          "index": 3,
          "choice": "不可以，因為測量會有誤差",
          "truth": false,
          "reason": "測量誤差影響準確度，不必然破壞唯一紀錄。"
        }
      ],
      "misconceptionTarget": "把單調性或精確度當函數必要條件",
      "prerequisiteCheck": "先備能力是「能依公式或表格求指定輸入的函數值，並理解輸入先給定、輸出由規則決定。」本題將此能力用於「評估實驗資料中的自應變數」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 122,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「評估實驗資料中的自應變數」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「同一株植物、每天中午、每日期只保留一筆紀錄。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 0 的「可以，每個日期有唯一一筆高度」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「評估實驗資料中的自應變數」只有題幹所述的一種解讀。",
      "difficultyReason": "需分離模型唯一性與測量品質，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "cf7c75662dd975426a812cdab2eff37acdc7d4fc7a245ea0345ab53cff022620"
    },
    {
      "questionId": "u15-s003-mc10",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-input-output",
      "skillSlot": "s003",
      "skillTitle": "自變數與應變數",
      "difficulty": "literacy",
      "type": "mc",
      "text": "水箱以固定速率排水，紀錄「排水時間 t（分鐘）」與「剩餘水量 V（公升）」。哪一個敘述最完整？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「在排水模型中辨認變數與界限」。",
      "target": "在排水模型中辨認變數與界限",
      "choices": [
        "V 是自變數，t 是應變數，因為先看到水量",
        "t 是自變數，V 是應變數，且 V 的合理值不可小於 0",
        "t、V 可任意交換，不影響模型",
        "V 一定是負數，因為水量在減少"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，重新依題意處理：由過程辨認時間先行；判定 V 隨 t 改變；加入非負限制。因此得到「t 是自變數，V 是應變數，且 V 的合理值不可小於 0」。",
      "explanation": "時間先決定，剩餘水量隨時間變；實際剩餘量不能為負。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "由過程辨認時間先行"
        },
        {
          "step": 2,
          "work": "判定 V 隨 t 改變"
        },
        {
          "step": 3,
          "work": "加入非負限制"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "V 是自變數，t 是應變數，因為先看到水量",
          "truth": false,
          "reason": "文字順序不能決定變數角色。"
        },
        {
          "index": 1,
          "choice": "t 是自變數，V 是應變數，且 V 的合理值不可小於 0",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；時間先決定，剩餘水量隨時間變；實際剩餘量不能為負。"
        },
        {
          "index": 2,
          "choice": "t、V 可任意交換，不影響模型",
          "truth": false,
          "reason": "交換後未必能唯一反求。"
        },
        {
          "index": 3,
          "choice": "V 一定是負數，因為水量在減少",
          "truth": false,
          "reason": "下降代表變化率負，不代表量本身必負。"
        }
      ],
      "misconceptionTarget": "混淆負變化率與負數量",
      "prerequisiteCheck": "先備能力是「能依公式或表格求指定輸入的函數值，並理解輸入先給定、輸出由規則決定。」本題將此能力用於「在排水模型中辨認變數與界限」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 126,
      "unitAndRoundingCheck": "「t 為分鐘，V 為公升。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「在排水模型中辨認變數與界限」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 1 的「t 是自變數，V 是應變數，且 V 的合理值不可小於 0」符合；其餘錯因分別記錄於 optionAnalysis。；「t 為分鐘，V 為公升。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「在排水模型中辨認變數與界限」只有題幹所述的一種解讀。",
      "difficultyReason": "需同時處理變數角色與現實邊界，屬素養。",
      "literacyContextNecessity": "水量非負是模型可行範圍的必要條件。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "ffef4a3e1a46d32700806c4f88e158b553e2ccaec975631c3df24b2faa9feac0"
    },
    {
      "questionId": "u15-s003-mc11",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-input-output",
      "skillSlot": "s003",
      "skillTitle": "自變數與應變數",
      "difficulty": "literacy",
      "type": "mc",
      "text": "某行動網路方案以每月使用量 x（GB）決定費用 C（元）。若 0≤x≤20 時 C=399，哪個說法正確？",
      "givenConditions": "題目以「只討論 0 至 20 GB 的級距。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「解讀固定費率方案中的變數角色」。",
      "target": "解讀固定費率方案中的變數角色",
      "choices": [
        "C 必須隨 x 增加才算應變數",
        "因為 C 固定，所以 x 不是變數",
        "x 是自變數；即使 C 不變，仍可形成函數",
        "C 是自變數，因為它寫在等號左邊"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，重新依題意處理：辨認方案以用量決定費用；檢查每個 x 的輸出唯一；接受常數函數。因此得到「x 是自變數；即使 C 不變，仍可形成函數」。",
      "explanation": "使用量可先給定，每個使用量都得到唯一費用 399；常數輸出仍是函數。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "辨認方案以用量決定費用"
        },
        {
          "step": 2,
          "work": "檢查每個 x 的輸出唯一"
        },
        {
          "step": 3,
          "work": "接受常數函數"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "C 必須隨 x 增加才算應變數",
          "truth": false,
          "reason": "應變數可在一段範圍保持不變。"
        },
        {
          "index": 1,
          "choice": "因為 C 固定，所以 x 不是變數",
          "truth": false,
          "reason": "x 仍可取 0 到 20 的不同值。"
        },
        {
          "index": 2,
          "choice": "x 是自變數；即使 C 不變，仍可形成函數",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；使用量可先給定，每個使用量都得到唯一費用 399；常數輸出仍是函數。"
        },
        {
          "index": 3,
          "choice": "C 是自變數，因為它寫在等號左邊",
          "truth": false,
          "reason": "等號位置不決定因果角色。"
        }
      ],
      "misconceptionTarget": "誤認輸出必須變動",
      "prerequisiteCheck": "先備能力是「能依公式或表格求指定輸入的函數值，並理解輸入先給定、輸出由規則決定。」本題將此能力用於「解讀固定費率方案中的變數角色」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 130,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「解讀固定費率方案中的變數角色」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「只討論 0 至 20 GB 的級距。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 2 的「x 是自變數；即使 C 不變，仍可形成函數」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「解讀固定費率方案中的變數角色」只有題幹所述的一種解讀。",
      "difficultyReason": "需抵抗日常語意中「應變」必須改變的誤解，屬素養。",
      "literacyContextNecessity": "固定月租級距使「輸出不變仍是函數」成為必要情境判讀。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "00a0abe860b61aff95f60f97649414c251b6ed7e347b0a2487e1b88019552278"
    },
    {
      "questionId": "u15-s003-mc12",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-input-output",
      "skillSlot": "s003",
      "skillTitle": "自變數與應變數",
      "difficulty": "literacy",
      "type": "mc",
      "text": "公車離站後，以經過時間 t（分鐘）決定離站距離 d（公里）。資料顯示交通壅塞時有些分鐘距離不變。下列何者仍成立？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「解讀距離時間資料中的平台區段」。",
      "target": "解讀距離時間資料中的平台區段",
      "choices": [
        "距離不變的分鐘表示不是函數",
        "每個距離都必須只對應一個時間",
        "時間必須由距離唯一決定",
        "只要每個時間有唯一距離，d 仍是 t 的函數"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用已存答案，重新依題意處理：以時間為輸入逐點檢查；允許停等造成同距離；確認唯一輸出。因此得到「只要每個時間有唯一距離，d 仍是 t 的函數」。",
      "explanation": "停等時不同時間可對應相同距離，這是多對一，仍符合函數。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "以時間為輸入逐點檢查"
        },
        {
          "step": 2,
          "work": "允許停等造成同距離"
        },
        {
          "step": 3,
          "work": "確認唯一輸出"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "距離不變的分鐘表示不是函數",
          "truth": false,
          "reason": "函數不要求嚴格增加。"
        },
        {
          "index": 1,
          "choice": "每個距離都必須只對應一個時間",
          "truth": false,
          "reason": "同一距離可在停等期間對應多個時間。"
        },
        {
          "index": 2,
          "choice": "時間必須由距離唯一決定",
          "truth": false,
          "reason": "反向唯一不是原函數要求。"
        },
        {
          "index": 3,
          "choice": "只要每個時間有唯一距離，d 仍是 t 的函數",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；停等時不同時間可對應相同距離，這是多對一，仍符合函數。"
        }
      ],
      "misconceptionTarget": "把停等平台誤認為非函數",
      "prerequisiteCheck": "先備能力是「能依公式或表格求指定輸入的函數值，並理解輸入先給定、輸出由規則決定。」本題將此能力用於「解讀距離時間資料中的平台區段」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 134,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「解讀距離時間資料中的平台區段」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 3 的「只要每個時間有唯一距離，d 仍是 t 的函數」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「解讀距離時間資料中的平台區段」只有題幹所述的一種解讀。",
      "difficultyReason": "需將交通現象轉為函數唯一性，屬素養。",
      "literacyContextNecessity": "壅塞停等使圖形出現水平段，情境是判斷多對一的核心。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "242cbf4177d6ea98f62e2002dcd3a2d75c1cecbefbdb1fca0f3dab2b0f2e6a44"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u15-s003-cr01",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-input-output",
      "skillSlot": "s003",
      "skillTitle": "自變數與應變數",
      "type": "constructed-response",
      "prompt": "固定單價 45 元的餐盒，購買 x 盒的總價為 y。請定義自變數與應變數、寫出單位與函數式，並說明為何反向「總價→盒數」在此定義域 x 為非負整數時也可唯一決定。",
      "requiredWork": "須完整寫出變數角色、單位、式子及反向唯一性的理由。",
      "standardSolution": "x 是餐盒數（盒），為自變數；y 是總價（元），為應變數；y=45x，x∈{0,1,2,…}。因不同非負整數 x 會得到不同的 45x，所以給定合法總價可反求唯一 x=y/45。",
      "alternativeMethod": "可列出 0→0、1→45、2→90 等表格，看出輸出不重複。",
      "reasoningSteps": [
        {
          "step": 1,
          "work": "定義 x 與 y"
        },
        {
          "step": 2,
          "work": "寫單位與 y=45x"
        },
        {
          "step": 3,
          "work": "限制 x 為非負整數"
        },
        {
          "step": 4,
          "work": "說明反向一對一"
        }
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "清楚定義 x 為盒數、y 為總價，附上盒與元，寫 y=45x、x 為非負整數，並以輸出不重複或 y/45 說明合法總價可反求唯一盒數。"
        },
        {
          "score": 2,
          "criteria": "正確寫出變數角色、單位與 y=45x，但反向唯一性的理由不完整；或漏寫 x 的非負整數限制。"
        },
        {
          "score": 1,
          "criteria": "只寫出 y=45x，或只辨認自變數與應變數，未同時處理單位、定義域和反向說明。"
        },
        {
          "score": 0,
          "criteria": "交換 x、y 的角色且模型錯誤，或沒有呈現固定單價與總價之間的有效函數關係。"
        }
      ],
      "partialCreditRules": [
        "模型 y=45x 正確但未寫單位或非負整數限制，各屬不同缺漏，兩者皆漏時最高 1 分。",
        "反向說明只對 45 的倍數等合法總價成立；若主張任意金額都可反求盒數，完整度降一級。"
      ],
      "followThroughPolicy": "本題延續計分依以下具體規則處理：模型 y=45x 正確但未寫單位或非負整數限制，各屬不同缺漏，兩者皆漏時最高 1 分。；反向說明只對 45 的倍數等合法總價成立；若主張任意金額都可反求盒數，完整度降一級。",
      "unitAndNotationRules": "沿用題幹的變數、序對、不等號與計量單位；作答必須清楚呈現以下要求中的符號與單位：須完整寫出變數角色、單位、式子及反向唯一性的理由。",
      "answerOnlyPolicy": "只寫最終答案而未呈現必要方法時，依本題 1 分規準處理：只寫出 y=45x，或只辨認自變數與應變數，未同時處理單位、定義域和反向說明。；答案錯且無可辨識過程則為 0 分。",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "recomputedConclusion": "x 是餐盒數（盒），為自變數；y 是總價（元），為應變數；y=45x，x∈{0,1,2,…}。因不同非負整數 x 會得到不同的 45x，所以給定合法總價可反求唯一 x=y/45。",
        "reviewNote": "獨立重做 u15-s003-cr01 時依序檢查 定義 x 與 y、寫單位與 y=45x、限制 x 為非負整數、說明反向一對一；標準解與替代法在允許範圍內得到一致結論，量綱與端點亦符合題意。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "8603fea2370106971211375076583b48d4bb999c7aa828741c858f52e8887c4f"
    },
    {
      "questionId": "u15-s003-cr02",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-basics",
      "skillId": "function-input-output",
      "skillSlot": "s003",
      "skillTitle": "自變數與應變數",
      "type": "constructed-response",
      "prompt": "水箱起始 120 公升，每分鐘排出 8 公升。以時間 t 為輸入、剩餘水量 V 為輸出。寫出模型與合理定義域，並解釋為何不能把模型延伸到負水量。",
      "requiredWork": "須建式、找排空時刻並寫出情境定義域。",
      "standardSolution": "V=120-8t。排空時 120-8t=0，得 t=15，因此合理定義域 0≤t≤15，值域 0≤V≤120。超過 15 分鐘公式會給負水量，但實際水箱不可能有負水。",
      "alternativeMethod": "可由每分鐘列減 8 的表格，直到第 15 分鐘為 0，據此界定範圍。",
      "reasoningSteps": [
        {
          "step": 1,
          "work": "辨認 t 自變數、V 應變數"
        },
        {
          "step": 2,
          "work": "建立 V=120-8t"
        },
        {
          "step": 3,
          "work": "求 t=15"
        },
        {
          "step": 4,
          "work": "解釋非負限制"
        }
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "寫出 V=120-8t，指出 t 為分鐘、V 為公升，解得排空時 t=15，並給 0≤t≤15、0≤V≤120 及負水量不合理的說明。"
        },
        {
          "score": 2,
          "criteria": "模型與 t=15 正確，且能限制 0≤t≤15，但漏寫值域或單位；或只有一處端點符號書寫錯。"
        },
        {
          "score": 1,
          "criteria": "只寫出 V=120-8t，或知道 15 分鐘排空但未建立合理定義域與不能延伸的理由。"
        },
        {
          "score": 0,
          "criteria": "把水量寫成隨時間增加，或接受 t>15 後的負水量而沒有任何情境邊界判斷。"
        }
      ],
      "partialCreditRules": [
        "若排空方程正確但 t=15 算錯，後續定義域以錯值一致書寫，可保留模型與邊界方法分，最高 2 分。",
        "只寫 t≥0 而未限制 t≤15，未處理負水量核心，最高 1 分。"
      ],
      "followThroughPolicy": "本題延續計分依以下具體規則處理：若排空方程正確但 t=15 算錯，後續定義域以錯值一致書寫，可保留模型與邊界方法分，最高 2 分。；只寫 t≥0 而未限制 t≤15，未處理負水量核心，最高 1 分。",
      "unitAndNotationRules": "沿用題幹的變數、序對、不等號與計量單位；作答必須清楚呈現以下要求中的符號與單位：須建式、找排空時刻並寫出情境定義域。",
      "answerOnlyPolicy": "只寫最終答案而未呈現必要方法時，依本題 1 分規準處理：只寫出 V=120-8t，或知道 15 分鐘排空但未建立合理定義域與不能延伸的理由。；答案錯且無可辨識過程則為 0 分。",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "recomputedConclusion": "V=120-8t。排空時 120-8t=0，得 t=15，因此合理定義域 0≤t≤15，值域 0≤V≤120。超過 15 分鐘公式會給負水量，但實際水箱不可能有負水。",
        "reviewNote": "獨立重做 u15-s003-cr02 時依序檢查 辨認 t 自變數、V 應變數、建立 V=120-8t、求 t=15、解釋非負限制；標準解與替代法在允許範圍內得到一致結論，量綱與端點亦符合題意。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "518fc7ef2757d8be9d1862da46d7c814499995b0223486b315255b2457756af4"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u15-s003-mc01-review",
      "questionId": "u15-s003-mc01",
      "unitId": "u15",
      "skillId": "function-input-output",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "fe03a17d3613ab1ad59c2f6fe9346483dca29bf20d5d3da00f117a65c019ee6f",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "時間 t",
      "storedAnswer": "時間 t",
      "independentSolution": "不採用已存答案，重新依題意處理：找出先給定的量；確認距離由它決定；選時間 t。因此得到「時間 t」。",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 2 的「時間 t」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "直接由「由時間決定」辨認，屬基礎。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s003-mc01，審查者未讀取存答而依序完成：找出先給定的量；確認距離由它決定；選時間 t。重算結果為「時間 t」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「距離是應變數。；不是題目定義的變數。；路線名稱不是此函數中的數量。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s003-mc02-review",
      "questionId": "u15-s003-mc02",
      "unitId": "u15",
      "skillId": "function-input-output",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "fc4dd270e2cc7d920af84b65b68823ef2cb0331b04f8c35b70fd7efce9f8871f",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "x 是自變數，y 是應變數",
      "storedAnswer": "x 是自變數，y 是應變數",
      "independentSolution": "不採用已存答案，重新依題意處理：確認可先選 x；由公式計算 y；判定角色。因此得到「x 是自變數，y 是應變數」。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 3 的「x 是自變數，y 是應變數」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "一次式中的角色辨認，屬基礎。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s003-mc02，審查者未讀取存答而依序完成：確認可先選 x；由公式計算 y；判定角色。重算結果為「x 是自變數，y 是應變數」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「顛倒輸入與輸出。；x、y 可取不同值，確為變數。；2 是固定常數。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s003-mc03-review",
      "questionId": "u15-s003-mc03",
      "unitId": "u15",
      "skillId": "function-input-output",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "bc1265620a503d9e8dfcdba484c25a345cf1c62406e4184732642a90c57544ae",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "圓周長 C",
      "storedAnswer": "圓周長 C",
      "independentSolution": "不採用已存答案，重新依題意處理：找可控制的半徑；看公式中 C 由 r 決定；選 C。因此得到「圓周長 C」。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 0 的「圓周長 C」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "只需辨認固定量與變動量，屬基礎。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s003-mc03，審查者未讀取存答而依序完成：找可控制的半徑；看公式中 C 由 r 決定；選 C。重算結果為「圓周長 C」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「半徑是自變數。；π 是常數。；2 是固定係數。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s003-mc04-review",
      "questionId": "u15-s003-mc04",
      "unitId": "u15",
      "skillId": "function-input-output",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "33fb9fab86f6be723301e3e453f79147ce941e2bfcd85659bf8d94858f95030e",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "x 是本數，y 是元數",
      "storedAnswer": "x 是本數，y 是元數",
      "independentSolution": "不採用已存答案，重新依題意處理：由 28x 解讀單價乘本數；確定 x 單位為本；確定 y 單位為元。因此得到「x 是本數，y 是元數」。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 1 的「x 是本數，y 是元數」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「x 以本計，y 以元計。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需同時解讀角色與量綱，屬標準。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s003-mc04，審查者未讀取存答而依序完成：由 28x 解讀單價乘本數；確定 x 單位為本；確定 y 單位為元。重算結果為「x 是本數，y 是元數」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把輸入輸出單位顛倒。；本數不是元。；元／本是係數 28 的單位。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s003-mc05-review",
      "questionId": "u15-s003-mc05",
      "unitId": "u15",
      "skillId": "function-input-output",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "eb15646326e991869bcf1ab400042358d6e36fb22cc2daa7e4d4e87a42f642df",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "面積 A，增加 8 平方公分",
      "storedAnswer": "面積 A，增加 8 平方公分",
      "independentSolution": "不採用已存答案，重新依題意處理：辨認 A 是應變數；算兩個面積；相減得 8。因此得到「面積 A，增加 8 平方公分」。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 3 的「面積 A，增加 8 平方公分」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「長以公分、面積以平方公分。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需把角色判定與函數值差結合，屬標準。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s003-mc05，審查者未讀取存答而依序完成：辨認 A 是應變數；算兩個面積；相減得 8。重算結果為「面積 A，增加 8 平方公分」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「長是自變數且只增加 2。；只看 x 的改變量，未乘固定寬。；寬固定不變。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s003-mc06-review",
      "questionId": "u15-s003-mc06",
      "unitId": "u15",
      "skillId": "function-input-output",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "27592af4cdd4c0f81e3845b40f170ef7bd4c7180078ea0f6d38415d01e944d36",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "錯，應變數可在不同輸入下取相同值",
      "storedAnswer": "錯，應變數可在不同輸入下取相同值",
      "independentSolution": "不採用已存答案，重新依題意處理：逐列確認唯一輸出；辨認重複是不同輸入間發生；否定錯誤主張。因此得到「錯，應變數可在不同輸入下取相同值」。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 0 的「錯，應變數可在不同輸入下取相同值」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需分析一個錯誤主張，屬標準。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s003-mc06，審查者未讀取存答而依序完成：逐列確認唯一輸出；辨認重複是不同輸入間發生；否定錯誤主張。重算結果為「錯，應變數可在不同輸入下取相同值」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把函數誤認為一對一。；重複輸出不會消除自變數。；函數表已足以判斷。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s003-mc07-review",
      "questionId": "u15-s003-mc07",
      "unitId": "u15",
      "skillId": "function-input-output",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "94f0d1b1dc4a3ece6995129b54182c6487410e2762b59236efcf43a9ff1f7134",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "因為 y=4 會對應 x=-2 與 x=3",
      "storedAnswer": "因為 y=4 會對應 x=-2 與 x=3",
      "independentSolution": "不採用已存答案，反向讀三個序對：輸入 y=4 時，可得到 x=-2 或 x=3 兩個不同輸出；同一輸入不唯一，因此反向關係不是函數，答案為選項 1。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "三個序對與原、反向的坐標角色都明示；審查只對資料中實際出現的 y 值 1、4 判斷。",
        "choiceUniqueness": "反向後 4→-2 與 4→3 明確形成兩輸出；y=1 有輸出 0，負數與序對數量都不是否定理由。",
        "languageAndUnits": "「反過來」已具體解釋為 y 當輸入、x 當輸出，序對無單位且負號位置清楚。"
      },
      "difficultyReason": "必須理解關係方向、交換坐標角色並辨認多對一在反向成為一對多，符合進階。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "獨立把三個序對反向讀成 4→-2、1→0、4→3，立即看出輸入 4 有兩個不同輸出。選項 1 唯一；選項 0 與資料矛盾，負數和序對數量也不影響函數性。題目用有限資料取代非線型平方例子，仍完整測試反向唯一性。檢查函數時必須以反向後的第一坐標作為輸入，不能仍沿用原序對的輸入方向判斷。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s003-mc08-review",
      "questionId": "u15-s003-mc08",
      "unitId": "u15",
      "skillId": "function-input-output",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "73ed273d371ba65402400a0fed50c3ffe86552d6413bfcf4315b4fdcedc65ddf",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "y=10-x，x 是自變數",
      "storedAnswer": "y=10-x，x 是自變數",
      "independentSolution": "不採用已存答案，重新依題意處理：由周長式 2x+2y=20；化簡求 y；確認 x 的角色。因此得到「y=10-x，x 是自變數」。",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 0<x<10 保證長與寬皆為正。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 2 的「y=10-x，x 是自變數」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需由幾何限制建式並辨認角色，屬進階。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s003-mc08，審查者未讀取存答而依序完成：由周長式 2x+2y=20；化簡求 y；確認 x 的角色。重算結果為「y=10-x，x 是自變數」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「漏除以 2。；移項符號錯。；雖式子接近但角色與係數皆錯。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s003-mc09-review",
      "questionId": "u15-s003-mc09",
      "unitId": "u15",
      "skillId": "function-input-output",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "cf7c75662dd975426a812cdab2eff37acdc7d4fc7a245ea0345ab53cff022620",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "可以，每個日期有唯一一筆高度",
      "storedAnswer": "可以，每個日期有唯一一筆高度",
      "independentSolution": "不採用已存答案，重新依題意處理：固定輸入為日期；確認每日期只記一次；區分函數性與資料品質。因此得到「可以，每個日期有唯一一筆高度」。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「同一株植物、每天中午、每日期只保留一筆紀錄。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 0 的「可以，每個日期有唯一一筆高度」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需分離模型唯一性與測量品質，屬進階。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s003-mc09，審查者未讀取存答而依序完成：固定輸入為日期；確認每日期只記一次；區分函數性與資料品質。重算結果為「可以，每個日期有唯一一筆高度」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「是否增加與函數性無關。；相同輸出允許。；測量誤差影響準確度，不必然破壞唯一紀錄。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s003-mc10-review",
      "questionId": "u15-s003-mc10",
      "unitId": "u15",
      "skillId": "function-input-output",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "ffef4a3e1a46d32700806c4f88e158b553e2ccaec975631c3df24b2faa9feac0",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "t 是自變數，V 是應變數，且 V 的合理值不可小於 0",
      "storedAnswer": "t 是自變數，V 是應變數，且 V 的合理值不可小於 0",
      "independentSolution": "不採用已存答案，重新依題意處理：由過程辨認時間先行；判定 V 隨 t 改變；加入非負限制。因此得到「t 是自變數，V 是應變數，且 V 的合理值不可小於 0」。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 1 的「t 是自變數，V 是應變數，且 V 的合理值不可小於 0」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「t 為分鐘，V 為公升。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需同時處理變數角色與現實邊界，屬素養。",
      "literacyNecessityReview": "水量非負是模型可行範圍的必要條件。",
      "reviewerNote": "針對 u15-s003-mc10，審查者未讀取存答而依序完成：由過程辨認時間先行；判定 V 隨 t 改變；加入非負限制。重算結果為「t 是自變數，V 是應變數，且 V 的合理值不可小於 0」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「文字順序不能決定變數角色。；交換後未必能唯一反求。；下降代表變化率負，不代表量本身必負。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s003-mc11-review",
      "questionId": "u15-s003-mc11",
      "unitId": "u15",
      "skillId": "function-input-output",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "00a0abe860b61aff95f60f97649414c251b6ed7e347b0a2487e1b88019552278",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "x 是自變數；即使 C 不變，仍可形成函數",
      "storedAnswer": "x 是自變數；即使 C 不變，仍可形成函數",
      "independentSolution": "不採用已存答案，重新依題意處理：辨認方案以用量決定費用；檢查每個 x 的輸出唯一；接受常數函數。因此得到「x 是自變數；即使 C 不變，仍可形成函數」。",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「只討論 0 至 20 GB 的級距。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 2 的「x 是自變數；即使 C 不變，仍可形成函數」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需抵抗日常語意中「應變」必須改變的誤解，屬素養。",
      "literacyNecessityReview": "固定月租級距使「輸出不變仍是函數」成為必要情境判讀。",
      "reviewerNote": "針對 u15-s003-mc11，審查者未讀取存答而依序完成：辨認方案以用量決定費用；檢查每個 x 的輸出唯一；接受常數函數。重算結果為「x 是自變數；即使 C 不變，仍可形成函數」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「應變數可在一段範圍保持不變。；x 仍可取 0 到 20 的不同值。；等號位置不決定因果角色。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s003-mc12-review",
      "questionId": "u15-s003-mc12",
      "unitId": "u15",
      "skillId": "function-input-output",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "242cbf4177d6ea98f62e2002dcd3a2d75c1cecbefbdb1fca0f3dab2b0f2e6a44",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "只要每個時間有唯一距離，d 仍是 t 的函數",
      "storedAnswer": "只要每個時間有唯一距離，d 仍是 t 的函數",
      "independentSolution": "不採用已存答案，重新依題意處理：以時間為輸入逐點檢查；允許停等造成同距離；確認唯一輸出。因此得到「只要每個時間有唯一距離，d 仍是 t 的函數」。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 3 的「只要每個時間有唯一距離，d 仍是 t 的函數」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需將交通現象轉為函數唯一性，屬素養。",
      "literacyNecessityReview": "壅塞停等使圖形出現水平段，情境是判斷多對一的核心。",
      "reviewerNote": "針對 u15-s003-mc12，審查者未讀取存答而依序完成：以時間為輸入逐點檢查；允許停等造成同距離；確認唯一輸出。重算結果為「只要每個時間有唯一距離，d 仍是 t 的函數」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「函數不要求嚴格增加。；同一距離可在停等期間對應多個時間。；反向唯一不是原函數要求。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [],
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "productionActivationAllowed": false
};
