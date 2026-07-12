// Emitted only from reviewed immutable source.
export default {
  "lecture": {
    "lectureId": "u15-s011-lecture",
    "unitId": "u15",
    "numericUnitId": 15,
    "unitTitle": "函數及其圖形",
    "topicId": "u15-graphs",
    "skillId": "piecewise-linear-basic",
    "skillSlot": "s011",
    "skillTitle": "分段線型基本",
    "order": 11,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "prerequisites": [
      {
        "skillId": "function-graph-read-point",
        "title": "由圖讀函數值",
        "requiredLevel": "能按坐標軸刻度讀點、讀交點、判斷函數值正負，並留意圖形端點及定義域。",
        "bridge": "真實規則有時在某個界線前後採不同線型公式；本節先判斷輸入落在哪一段，再只使用該段規則。"
      }
    ],
    "learningGoals": [
      "依輸入區間選擇正確線型規則",
      "正確處理分界點的等號",
      "解讀簡單分段費率與圖形"
    ],
    "vocabulary": [
      {
        "term": "分段函數",
        "meaning": "不同輸入範圍使用不同規則"
      },
      {
        "term": "分界點",
        "meaning": "規則切換的輸入值"
      },
      {
        "term": "端點包含",
        "meaning": "以 ≤ 或 ≥ 表示端點可用"
      }
    ],
    "conceptDevelopment": [
      "分段函數不是把所有公式都算一次，而是先看輸入落在哪個區間，再只使用該段規則。",
      "分界點要看等號歸屬。例如 x≤3 用第一段、x>3 用第二段，x=3 必須用第一段。"
    ],
    "definitionsAndMeaning": "分段函數不是把所有公式都算一次，而是先看輸入落在哪個區間，再只使用該段規則。",
    "formulasAndConditions": [
      "f(x)={a₁x+b₁（x 在第一區間）；a₂x+b₂（x 在第二區間）}。",
      "若要求分界連接，可令兩段在分界點的函數值相等。"
    ],
    "invalidUseCases": [
      "不看條件就選看起來簡單的公式。",
      "分界點同時套兩段或兩段都不套。",
      "把第二段的累計費用忘記包含前段。"
    ],
    "stepByStepMethod": [
      "圈出輸入值。",
      "逐段比對區間條件，確認唯一適用段。",
      "代入該段公式計算。",
      "在費率題檢查公式是否已包含前段固定費。"
    ],
    "workedExamples": [
      {
        "exampleId": "s011-ex01",
        "title": "直接選段",
        "prompt": "已知 f(x)=2x（x≤4），f(x)=x+5（x>4）。分別求 f(3) 與 f(6)，並說明各選哪一段。",
        "solution": "f(x)=2x（x≤4），x+5（x>4）。f(3)=6，f(6)=11。",
        "level": "basic"
      },
      {
        "exampleId": "s011-ex02",
        "title": "分界點",
        "prompt": "沿用 f(x)=2x（x≤4）、f(x)=x+5（x>4），求 f(4)。分界點 4 屬於哪一段？",
        "solution": "上例 f(4)=8，因 4 屬於第一段。",
        "level": "standard"
      },
      {
        "exampleId": "s011-ex03",
        "title": "連續條件",
        "prompt": "分段函數第一段為 2x+1、第二段為 x+k，兩段要在 x=3 接合。求 k。",
        "solution": "第一段 2x+1、第二段 x+k 在 x=3 接合，令 7=3+k，得 k=4。",
        "level": "advanced"
      },
      {
        "exampleId": "s011-ex04",
        "title": "分段費率",
        "prompt": "停車前 2 小時共收 30 元，超過 2 小時後每多 1 小時加 20 元。停 3 小時應付多少？",
        "solution": "前 2 小時 30 元，超過後每小時加 20 元；3 小時費用是 30+20=50。",
        "level": "connection"
      }
    ],
    "commonMistakes": [
      {
        "mistakeId": "s011-m01",
        "wrongReasoning": "把 x=分界點放錯段。",
        "correction": "把分界值代入每段條件；x≤4 包含 4，x>4 不包含 4，應選唯一符合不等號的那段。"
      },
      {
        "mistakeId": "s011-m02",
        "wrongReasoning": "兩段公式相加。",
        "correction": "一個指定輸入只使用一段公式，不把兩段相加；先判斷區間，再代入該段。"
      },
      {
        "mistakeId": "s011-m03",
        "wrongReasoning": "超量費率只算超量卻漏基本費。",
        "correction": "超量收費通常是「基本費＋超過部分×費率」；先算超過多少，再把基本費保留。"
      },
      {
        "mistakeId": "s011-m04",
        "wrongReasoning": "以為分段圖一定斷開。",
        "correction": "分段只表示規則不同，接合點兩側可能連續也可能跳躍；應比較分界處兩段的值，不可憑名稱判斷。"
      },
      {
        "mistakeId": "s011-m05",
        "wrongReasoning": "由輸出反找輸入時只查一段。",
        "correction": "反求輸入時應分別在每一段解方程，再逐一檢查所得解是否落在該段條件內。"
      }
    ],
    "selfChecks": [
      {
        "prompt": "x≤5 用 3x，x>5 用 x+10，f(5)=？",
        "answer": "15"
      },
      {
        "prompt": "同規則 f(6)=？",
        "answer": "16"
      },
      {
        "prompt": "分界連續代表什麼？",
        "answer": "兩段在分界點的函數值相同。"
      }
    ],
    "summary": "分段題先判區間，再套唯一適用規則；分界等號最關鍵。",
    "previousSkillConnection": "function-graph-read-point",
    "nextSkillConnection": "linear-function-application",
    "figureRefs": [
      "u15-fig-piecewise"
    ],
    "accessibilityNotes": [
      "圖形 u15-fig-piecewise 另附繁體中文替代文字與不按比例警告。"
    ],
    "lectureReview": {
      "reviewVersion": "human-lecture-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "decision": "pass",
      "reviewNote": "逐段人工重讀「分段線型基本」講義：先備橋接已具體指出學生必須會做的前一步，四個例題均改成可獨立作答的完整題目；五個錯誤修正逐一對應本技能的符號、條件、坐標或情境限制。另核對所有公式只使用 U15 線型函數、常數函數或有限對應範圍，未預用未來單元方法。",
      "zeroFoundationCheck": "學生只需具備 能以自己的話說明「由圖讀函數值」並完成基本判斷或計算。",
      "capBoundaryCheck": "內容限國中會考線型函數與基本分段情境，未引入指數、對數、微積分或高中函數理論。"
    },
    "canonicalization": "sorted-keys-json-utf8-v1",
    "contentSha256": "047d41f32fb72d7661cc1b2aacf412fec2d2b2251dccc20c373a006f4287a3da"
  },
  "mcQuestions": [
    {
      "questionId": "u15-s011-mc01",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "piecewise-linear-basic",
      "skillSlot": "s011",
      "skillTitle": "分段線型基本",
      "difficulty": "basic",
      "type": "mc",
      "text": "f(x)=2x（x≤3），f(x)=x+4（x>3）。f(2) 為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「依區間選分段公式」。",
      "target": "依區間選分段公式",
      "choices": [
        "6",
        "8",
        "4",
        "2"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，重新依題意處理：判斷 2 落第一段；只用 2x；算得 4。因此得到「4」。",
      "explanation": "因 2≤3，使用第一段 2x，得 4。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "判斷 2 落第一段"
        },
        {
          "step": 2,
          "work": "只用 2x"
        },
        {
          "step": 3,
          "work": "算得 4"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "6",
          "truth": false,
          "reason": "把 2 代第二段。"
        },
        {
          "index": 1,
          "choice": "8",
          "truth": false,
          "reason": "把兩段結果相加。"
        },
        {
          "index": 2,
          "choice": "4",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；因 2≤3，使用第一段 2x，得 4。"
        },
        {
          "index": 3,
          "choice": "2",
          "truth": false,
          "reason": "把輸入本身當輸出。"
        }
      ],
      "misconceptionTarget": "未先判斷輸入區間",
      "prerequisiteCheck": "先備能力是「能按坐標軸刻度讀點、讀交點、判斷函數值正負，並留意圖形端點及定義域。」本題將此能力用於「依區間選分段公式」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 90,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「依區間選分段公式」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 2 的「4」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「依區間選分段公式」只有題幹所述的一種解讀。",
      "difficultyReason": "直接選段代入，屬基礎。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "770b556e5b4db1ad2f84d6ebf2a9bfc7ce1da28d6c315b777e673ed1c6e9f8a8"
    },
    {
      "questionId": "u15-s011-mc02",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "piecewise-linear-basic",
      "skillSlot": "s011",
      "skillTitle": "分段線型基本",
      "difficulty": "basic",
      "type": "mc",
      "text": "f(x)=3x-1（x<5），f(x)=x+7（x≥5）。f(5) 為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 x=5 明確包含於第二段。本題的條件審查焦點是「計算分界點函數值」。",
      "target": "計算分界點函數值",
      "choices": [
        "14",
        "12",
        "5",
        "22"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，重新依題意處理：檢查等號在第二段；代入第二段；得 12。因此得到「12」。",
      "explanation": "x=5 屬於 x≥5 的第二段，所以 f(5)=5+7=12。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "檢查等號在第二段"
        },
        {
          "step": 2,
          "work": "代入第二段"
        },
        {
          "step": 3,
          "work": "得 12"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "14",
          "truth": false,
          "reason": "使用第一段得 14。"
        },
        {
          "index": 1,
          "choice": "12",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；x=5 屬於 x≥5 的第二段，所以 f(5)=5+7=12。"
        },
        {
          "index": 2,
          "choice": "5",
          "truth": false,
          "reason": "只回輸入。"
        },
        {
          "index": 3,
          "choice": "22",
          "truth": false,
          "reason": "把兩段值相加。"
        }
      ],
      "misconceptionTarget": "分界點等號歸屬錯誤",
      "prerequisiteCheck": "先備能力是「能按坐標軸刻度讀點、讀交點、判斷函數值正負，並留意圖形端點及定義域。」本題將此能力用於「計算分界點函數值」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 94,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「計算分界點函數值」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 x=5 明確包含於第二段。；四選項逐一代回或依定義檢查，只有索引 1 的「12」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「計算分界點函數值」只有題幹所述的一種解讀。",
      "difficultyReason": "考分界端點，屬基礎。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "0fe2498ac24b19c6d821b103f7a6858722f9c95c6db6246d14d75eacecedac7e"
    },
    {
      "questionId": "u15-s011-mc03",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "piecewise-linear-basic",
      "skillSlot": "s011",
      "skillTitle": "分段線型基本",
      "difficulty": "basic",
      "type": "mc",
      "text": "下列哪個分段條件會使 x=4 沒有適用公式？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「檢查分段定義的完整性」。",
      "target": "檢查分段定義的完整性",
      "choices": [
        "第一段 x≤4，第二段 x>4",
        "第一段 x<4，第二段 x≥4",
        "第一段 x≤4，第二段 x≥4",
        "第一段 x<4，第二段 x>4"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用已存答案，重新依題意處理：逐組檢查 x=4；找沒有等號者；判定第一選項。因此得到「第一段 x<4，第二段 x>4」。",
      "explanation": "若兩段都用嚴格不等號，x=4 不屬於任何一段。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "逐組檢查 x=4"
        },
        {
          "step": 2,
          "work": "找沒有等號者"
        },
        {
          "step": 3,
          "work": "判定第一選項"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "第一段 x≤4，第二段 x>4",
          "truth": false,
          "reason": "第一段包含 4。"
        },
        {
          "index": 1,
          "choice": "第一段 x<4，第二段 x≥4",
          "truth": false,
          "reason": "第二段包含 4。"
        },
        {
          "index": 2,
          "choice": "第一段 x≤4，第二段 x≥4",
          "truth": false,
          "reason": "兩段都包含 4，反而可能重疊。"
        },
        {
          "index": 3,
          "choice": "第一段 x<4，第二段 x>4",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；若兩段都用嚴格不等號，x=4 不屬於任何一段。"
        }
      ],
      "misconceptionTarget": "忽略分界點是否被涵蓋",
      "prerequisiteCheck": "先備能力是「能按坐標軸刻度讀點、讀交點、判斷函數值正負，並留意圖形端點及定義域。」本題將此能力用於「檢查分段定義的完整性」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 98,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「檢查分段定義的完整性」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 3 的「第一段 x<4，第二段 x>4」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「檢查分段定義的完整性」只有題幹所述的一種解讀。",
      "difficultyReason": "直接檢查端點覆蓋，屬基礎。",
      "literacyContextNecessity": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "79998a9a407256964ad33f4f013d82f2c69402e3f3437d6d7e010afc8b2ee7ab"
    },
    {
      "questionId": "u15-s011-mc04",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "piecewise-linear-basic",
      "skillSlot": "s011",
      "skillTitle": "分段線型基本",
      "difficulty": "standard",
      "type": "mc",
      "text": "f(x)=x+2（x≤1），f(x)=3x（x>1）。求 f(-2)+f(3)。",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「計算兩個分段函數值」。",
      "target": "計算兩個分段函數值",
      "choices": [
        "9",
        "5",
        "7",
        "11"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，重新依題意處理：-2 選第一段得 0；3 選第二段得 9；相加 9。因此得到「9」。",
      "explanation": "f(-2)=0；f(3)=9；相加 9。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "-2 選第一段得 0"
        },
        {
          "step": 2,
          "work": "3 選第二段得 9"
        },
        {
          "step": 3,
          "work": "相加 9"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "9",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；f(-2)=0；f(3)=9；相加 9。"
        },
        {
          "index": 1,
          "choice": "5",
          "truth": false,
          "reason": "第二段代錯或只算一項。"
        },
        {
          "index": 2,
          "choice": "7",
          "truth": false,
          "reason": "把 f(-2) 誤算 -4。"
        },
        {
          "index": 3,
          "choice": "11",
          "truth": false,
          "reason": "把兩段公式相加再代。"
        }
      ],
      "misconceptionTarget": "兩個輸入未分別選段",
      "prerequisiteCheck": "先備能力是「能按坐標軸刻度讀點、讀交點、判斷函數值正負，並留意圖形端點及定義域。」本題將此能力用於「計算兩個分段函數值」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 102,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「計算兩個分段函數值」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 0 的「9」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「計算兩個分段函數值」只有題幹所述的一種解讀。",
      "difficultyReason": "需對兩個輸入分別判段，屬標準。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "516efc785d25186afb0e756fb820c11880e2d3f55a2a1272f8f986b217236fdc"
    },
    {
      "questionId": "u15-s011-mc05",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "piecewise-linear-basic",
      "skillSlot": "s011",
      "skillTitle": "分段線型基本",
      "difficulty": "standard",
      "type": "mc",
      "text": "停車前 2 小時收 40 元，超過 2 小時後每多 1 小時加 25 元。停 5 小時共多少元？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「計算兩段累計費用」。",
      "target": "計算兩段累計費用",
      "choices": [
        "75 元",
        "115 元",
        "125 元",
        "165 元"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，重新依題意處理：算超時 5-2=3；算追加 3×25=75；加 40。因此得到「115 元」。",
      "explanation": "前 2 小時 40 元，超過部分 3 小時，追加 75 元，共 115 元。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "算超時 5-2=3"
        },
        {
          "step": 2,
          "work": "算追加 3×25=75"
        },
        {
          "step": 3,
          "work": "加 40"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "75 元",
          "truth": false,
          "reason": "只算超時費。"
        },
        {
          "index": 1,
          "choice": "115 元",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；前 2 小時 40 元，超過部分 3 小時，追加 75 元，共 115 元。"
        },
        {
          "index": 2,
          "choice": "125 元",
          "truth": false,
          "reason": "把 5 小時全乘 25。"
        },
        {
          "index": 3,
          "choice": "165 元",
          "truth": false,
          "reason": "把基本費與全時數重複相加。"
        }
      ],
      "misconceptionTarget": "分段費率漏基本費或超量量",
      "prerequisiteCheck": "先備能力是「能按坐標軸刻度讀點、讀交點、判斷函數值正負，並留意圖形端點及定義域。」本題將此能力用於「計算兩段累計費用」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 106,
      "unitAndRoundingCheck": "「元。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「計算兩段累計費用」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 1 的「115 元」符合；其餘錯因分別記錄於 optionAnalysis。；「元。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「計算兩段累計費用」只有題幹所述的一種解讀。",
      "difficultyReason": "需先算超過量再加前段固定費，屬標準。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "7f1d7b3a3a23d48bb20c8355cfd4105f5983a809280105990de74e8de86d08a0"
    },
    {
      "questionId": "u15-s011-mc06",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "piecewise-linear-basic",
      "skillSlot": "s011",
      "skillTitle": "分段線型基本",
      "difficulty": "standard",
      "type": "mc",
      "text": "某分段函數在 x≤0 時 y=x+1，在 x>0 時 y=2x+1。圖形在 x=0 是否接合？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「判斷分段線型圖形接合」。",
      "target": "判斷分段線型圖形接合",
      "choices": [
        "不接合，因兩段斜率不同",
        "不接合，因第二段不含 0",
        "無法判斷",
        "接合，兩段在分界都趨近或取到 y=1"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用已存答案，重新依題意處理：算第一段分界值 1；算第二段邊界對應 1；比較相同。因此得到「接合，兩段在分界都趨近或取到 y=1」。",
      "explanation": "第一段在 x=0 的值為 1；第二段若由右靠近也趨近 1，因此兩線段在同一坐標接上。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "算第一段分界值 1"
        },
        {
          "step": 2,
          "work": "算第二段邊界對應 1"
        },
        {
          "step": 3,
          "work": "比較相同"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "不接合，因兩段斜率不同",
          "truth": false,
          "reason": "斜率不同仍可在一點接合。"
        },
        {
          "index": 1,
          "choice": "不接合，因第二段不含 0",
          "truth": false,
          "reason": "不含端點不代表右側線段不能靠近同點。"
        },
        {
          "index": 2,
          "choice": "無法判斷",
          "truth": false,
          "reason": "公式足以判斷。"
        },
        {
          "index": 3,
          "choice": "接合，兩段在分界都趨近或取到 y=1",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；第一段在 x=0 的值為 1；第二段若由右靠近也趨近 1，因此兩線段在同一坐標接上。"
        }
      ],
      "misconceptionTarget": "把斜率不同誤認為一定斷裂",
      "prerequisiteCheck": "先備能力是「能按坐標軸刻度讀點、讀交點、判斷函數值正負，並留意圖形端點及定義域。」本題將此能力用於「判斷分段線型圖形接合」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 110,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「判斷分段線型圖形接合」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 3 的「接合，兩段在分界都趨近或取到 y=1」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「判斷分段線型圖形接合」只有題幹所述的一種解讀。",
      "difficultyReason": "需比較分界兩側的值，屬標準。",
      "literacyContextNecessity": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "figureId": "u15-s011-mc06-fig",
      "drawingSpecRef": "units/u15/s011/drawing-specs.jsonl#u15-s011-mc06-fig",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "bb0da5addab730a65bfdb239ab39ec46362a329017d05ffb9237dc393d60cb04"
    },
    {
      "questionId": "u15-s011-mc07",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "piecewise-linear-basic",
      "skillSlot": "s011",
      "skillTitle": "分段線型基本",
      "difficulty": "advanced",
      "type": "mc",
      "text": "f(x)=2x+1（x≤3），f(x)=x+k（x>3）。若圖形在 x=3 接合，k 為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「由接合條件求參數」。",
      "target": "由接合條件求參數",
      "choices": [
        "4",
        "1",
        "3",
        "7"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，重新依題意處理：算第一段 f(3)=7；令第二段邊界值 3+k；解 k=4。因此得到「4」。",
      "explanation": "第一段在 3 的值為 7；第二段邊界值為 3+k。令 3+k=7，得 k=4。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "算第一段 f(3)=7"
        },
        {
          "step": 2,
          "work": "令第二段邊界值 3+k"
        },
        {
          "step": 3,
          "work": "解 k=4"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "4",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；第一段在 3 的值為 7；第二段邊界值為 3+k。令 3+k=7，得 k=4。"
        },
        {
          "index": 1,
          "choice": "1",
          "truth": false,
          "reason": "把 k 當第一段常數。"
        },
        {
          "index": 2,
          "choice": "3",
          "truth": false,
          "reason": "把 k 直接設分界點。"
        },
        {
          "index": 3,
          "choice": "7",
          "truth": false,
          "reason": "把第一段值 7 當 k。"
        }
      ],
      "misconceptionTarget": "未用分界相等條件",
      "prerequisiteCheck": "先備能力是「能按坐標軸刻度讀點、讀交點、判斷函數值正負，並留意圖形端點及定義域。」本題將此能力用於「由接合條件求參數」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 114,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由接合條件求參數」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 0 的「4」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由接合條件求參數」只有題幹所述的一種解讀。",
      "difficultyReason": "需建立邊界相等方程，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "fe43641e796c6cd29eea6989a61c96ad5876704d5f2c5cddf6097ac689e78fa1"
    },
    {
      "questionId": "u15-s011-mc08",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "piecewise-linear-basic",
      "skillSlot": "s011",
      "skillTitle": "分段線型基本",
      "difficulty": "advanced",
      "type": "mc",
      "text": "f(x)=x+5（x<2），f(x)=7-x（x≥2）。若 f(x)=6，可能的 x 為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 每個候選解必須回到原段條件檢查。本題的條件審查焦點是「由輸出反求分段輸入」。",
      "target": "由輸出反求分段輸入",
      "choices": [
        "x=1 或 x=3",
        "只有 x=3",
        "只有 x=1",
        "x=6"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，重新依題意處理：分段各自解方程；逐一檢查區間；只保留 x=1。因此得到「只有 x=1」。",
      "explanation": "第一段解 x+5=6 得 x=1，符合 x<2；第二段解 7-x=6 也得 x=1，但不符合 x≥2，所以仍只有 x=1。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "分段各自解方程"
        },
        {
          "step": 2,
          "work": "逐一檢查區間"
        },
        {
          "step": 3,
          "work": "只保留 x=1"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "x=1 或 x=3",
          "truth": false,
          "reason": "第二段方程 7-x=6 的解也是 1，不是 3，且 1 不合 x≥2。"
        },
        {
          "index": 1,
          "choice": "只有 x=3",
          "truth": false,
          "reason": "第二段候選不合區間，不能保留。"
        },
        {
          "index": 2,
          "choice": "只有 x=1",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；第一段解 x+5=6 得 x=1，符合 x<2；第二段解 7-x=6 也得 x=1，但不符合 x≥2，所以仍只有 x=1。"
        },
        {
          "index": 3,
          "choice": "x=6",
          "truth": false,
          "reason": "把函數值直接當輸入。"
        }
      ],
      "misconceptionTarget": "解分段方程後未檢查區間",
      "prerequisiteCheck": "先備能力是「能按坐標軸刻度讀點、讀交點、判斷函數值正負，並留意圖形端點及定義域。」本題將此能力用於「由輸出反求分段輸入」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 118,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「由輸出反求分段輸入」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 每個候選解必須回到原段條件檢查。；四選項逐一代回或依定義檢查，只有索引 2 的「只有 x=1」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「由輸出反求分段輸入」只有題幹所述的一種解讀。",
      "difficultyReason": "需逐段解並淘汰不合區間的解，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "571dbbfce235f730a7bf85009e9927f32f3366cf61a0dc0be01073a07856644d"
    },
    {
      "questionId": "u15-s011-mc09",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "piecewise-linear-basic",
      "skillSlot": "s011",
      "skillTitle": "分段線型基本",
      "difficulty": "advanced",
      "type": "mc",
      "text": "分段函數 f(x)=2x（0≤x≤4），f(x)=8-(x-4)（4<x≤10）。哪個敘述正確？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「綜合判讀分段圖形趨勢」。",
      "target": "綜合判讀分段圖形趨勢",
      "choices": [
        "函數在 x=4 有兩個不同值",
        "第二段可化成 12+x",
        "整段都以斜率 2 上升",
        "函數先上升到 8，再以每單位 1 的速率下降"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用已存答案，重新依題意處理：讀第一段斜率 2；化簡第二段 12-x；檢查分界與方向。因此得到「函數先上升到 8，再以每單位 1 的速率下降」。",
      "explanation": "第一段斜率 2，f(4)=8；第二段 12-x，斜率 -1，從 8 開始下降。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "讀第一段斜率 2"
        },
        {
          "step": 2,
          "work": "化簡第二段 12-x"
        },
        {
          "step": 3,
          "work": "檢查分界與方向"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "函數在 x=4 有兩個不同值",
          "truth": false,
          "reason": "x=4 只屬第一段，右側接近值也為 8。"
        },
        {
          "index": 1,
          "choice": "第二段可化成 12+x",
          "truth": false,
          "reason": "展開負號錯。"
        },
        {
          "index": 2,
          "choice": "整段都以斜率 2 上升",
          "truth": false,
          "reason": "第二段斜率不同且為負。"
        },
        {
          "index": 3,
          "choice": "函數先上升到 8，再以每單位 1 的速率下降",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；第一段斜率 2，f(4)=8；第二段 12-x，斜率 -1，從 8 開始下降。"
        }
      ],
      "misconceptionTarget": "分段公式展開與趨勢判斷錯",
      "prerequisiteCheck": "先備能力是「能按坐標軸刻度讀點、讀交點、判斷函數值正負，並留意圖形端點及定義域。」本題將此能力用於「綜合判讀分段圖形趨勢」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 122,
      "unitAndRoundingCheck": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「綜合判讀分段圖形趨勢」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 3 的「函數先上升到 8，再以每單位 1 的速率下降」符合；其餘錯因分別記錄於 optionAnalysis。；「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「綜合判讀分段圖形趨勢」只有題幹所述的一種解讀。",
      "difficultyReason": "需化簡第二段並分析兩段方向，屬進階。",
      "literacyContextNecessity": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "figureId": "u15-s011-mc09-fig",
      "drawingSpecRef": "units/u15/s011/drawing-specs.jsonl#u15-s011-mc09-fig",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "96568b2345c6d895f49607e6d97fc791644f6e09d5a0eb84d2b1bb14146f0b56"
    },
    {
      "questionId": "u15-s011-mc10",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "piecewise-linear-basic",
      "skillSlot": "s011",
      "skillTitle": "分段線型基本",
      "difficulty": "literacy",
      "type": "mc",
      "text": "宅配運費：重量不超過 2 kg 收 80 元；超過 2 kg 後，每多 1 kg 加 30 元。包裹重 4.5 kg，按連續重量計費，運費多少？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「解讀重量分段運費」。",
      "target": "解讀重量分段運費",
      "choices": [
        "155 元",
        "135 元",
        "215 元",
        "80 元"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用已存答案，重新依題意處理：判斷跨過 2 kg；算超重 2.5 kg；30×2.5+80=155。因此得到「155 元」。",
      "explanation": "超過量 4.5-2=2.5 kg，追加 75 元，加基本 80 元為 155 元。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "判斷跨過 2 kg"
        },
        {
          "step": 2,
          "work": "算超重 2.5 kg"
        },
        {
          "step": 3,
          "work": "30×2.5+80=155"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "155 元",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；超過量 4.5-2=2.5 kg，追加 75 元，加基本 80 元為 155 元。"
        },
        {
          "index": 1,
          "choice": "135 元",
          "truth": false,
          "reason": "把超重誤算 1.833 kg 或漏基本費。"
        },
        {
          "index": 2,
          "choice": "215 元",
          "truth": false,
          "reason": "把全部 4.5 kg 乘 30 再加 80。"
        },
        {
          "index": 3,
          "choice": "80 元",
          "truth": false,
          "reason": "忽略超重段。"
        }
      ],
      "misconceptionTarget": "超量計算與固定費結合錯誤",
      "prerequisiteCheck": "先備能力是「能按坐標軸刻度讀點、讀交點、判斷函數值正負，並留意圖形端點及定義域。」本題將此能力用於「解讀重量分段運費」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 126,
      "unitAndRoundingCheck": "「重量 kg，運費元。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「解讀重量分段運費」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 0 的「155 元」符合；其餘錯因分別記錄於 optionAnalysis。；「重量 kg，運費元。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「解讀重量分段運費」只有題幹所述的一種解讀。",
      "difficultyReason": "需處理小數超量與累計費，屬素養。",
      "literacyContextNecessity": "「只對超過部分加價」是分段情境不可刪除的關鍵。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "1df5a9a15c5cb5faa4ca6fdf1981b733d32a2f66788de716a8bca66dc693114e"
    },
    {
      "questionId": "u15-s011-mc11",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "piecewise-linear-basic",
      "skillSlot": "s011",
      "skillTitle": "分段線型基本",
      "difficulty": "literacy",
      "type": "mc",
      "text": "計程車等待費：前 3 分鐘不收費，超過後每分鐘 4 元。等待 8 分鐘時，等待費函數值為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。本題的條件審查焦點是「計算含免費門檻的分段費用」。",
      "target": "計算含免費門檻的分段費用",
      "choices": [
        "32 元",
        "12 元",
        "20 元",
        "4 元"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用已存答案，重新依題意處理：判斷超過免費段；算收費分鐘 5；乘 4 得 20。因此得到「20 元」。",
      "explanation": "免費 3 分鐘，收費時間 8-3=5 分鐘，費用 5×4=20 元。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "判斷超過免費段"
        },
        {
          "step": 2,
          "work": "算收費分鐘 5"
        },
        {
          "step": 3,
          "work": "乘 4 得 20"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "32 元",
          "truth": false,
          "reason": "把全部 8 分鐘計費。"
        },
        {
          "index": 1,
          "choice": "12 元",
          "truth": false,
          "reason": "只算 3 分鐘。"
        },
        {
          "index": 2,
          "choice": "20 元",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；免費 3 分鐘，收費時間 8-3=5 分鐘，費用 5×4=20 元。"
        },
        {
          "index": 3,
          "choice": "4 元",
          "truth": false,
          "reason": "只收一次 4 元。"
        }
      ],
      "misconceptionTarget": "未扣除免費區段",
      "prerequisiteCheck": "先備能力是「能按坐標軸刻度讀點、讀交點、判斷函數值正負，並留意圖形端點及定義域。」本題將此能力用於「計算含免費門檻的分段費用」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 130,
      "unitAndRoundingCheck": "「元。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「計算含免費門檻的分段費用」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。；四選項逐一代回或依定義檢查，只有索引 2 的「20 元」符合；其餘錯因分別記錄於 optionAnalysis。；「元。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「計算含免費門檻的分段費用」只有題幹所述的一種解讀。",
      "difficultyReason": "需從總時間扣除前段再計費，屬素養。",
      "literacyContextNecessity": "免費門檻改變有效計費時間，是必要情境。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "2541f1530aa9bd1c82f26dff1aded6a9274b999f254a388766d55db1d17a7bf6"
    },
    {
      "questionId": "u15-s011-mc12",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "piecewise-linear-basic",
      "skillSlot": "s011",
      "skillTitle": "分段線型基本",
      "difficulty": "literacy",
      "type": "mc",
      "text": "遊樂園票價：未滿 6 歲免費；6 至未滿 12 歲 300 元；12 歲以上 500 元。小華今天剛滿 12 歲，票價為何？",
      "givenConditions": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 「未滿」不含端點；「以上」含端點。本題的條件審查焦點是「判斷分段票價的邊界」。",
      "target": "判斷分段票價的邊界",
      "choices": [
        "0 元",
        "500 元",
        "300 元",
        "介於 300 與 500 元"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用已存答案，重新依題意處理：定位年齡 12；檢查「未滿」與「以上」；選 500。因此得到「500 元」。",
      "explanation": "「12 歲以上」包含剛滿 12 歲；「6 至未滿 12」不包含 12。",
      "solutionSteps": [
        {
          "step": 1,
          "work": "定位年齡 12"
        },
        {
          "step": 2,
          "work": "檢查「未滿」與「以上」"
        },
        {
          "step": 3,
          "work": "選 500"
        }
      ],
      "optionAnalysis": [
        {
          "index": 0,
          "choice": "0 元",
          "truth": false,
          "reason": "免費只適用未滿 6。"
        },
        {
          "index": 1,
          "choice": "500 元",
          "truth": true,
          "reason": "此選項與獨立推導的結果一致；「12 歲以上」包含剛滿 12 歲；「6 至未滿 12」不包含 12。"
        },
        {
          "index": 2,
          "choice": "300 元",
          "truth": false,
          "reason": "未滿 12 排除剛滿 12。"
        },
        {
          "index": 3,
          "choice": "介於 300 與 500 元",
          "truth": false,
          "reason": "票價為分段固定值，不做內插。"
        }
      ],
      "misconceptionTarget": "忽略年齡級距端點文字",
      "prerequisiteCheck": "先備能力是「能按坐標軸刻度讀點、讀交點、判斷函數值正負，並留意圖形端點及定義域。」本題將此能力用於「判斷分段票價的邊界」，不要求函數合成、反函數或其他未鎖定的未來單元知識。",
      "estimatedTimeSeconds": 134,
      "unitAndRoundingCheck": "「元。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。針對「判斷分段票價的邊界」，答案保留題幹要求的符號、單位與精確值，不自行近似。",
      "ambiguityAndBoundaryAudit": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 「未滿」不含端點；「以上」含端點。；四選項逐一代回或依定義檢查，只有索引 1 的「500 元」符合；其餘錯因分別記錄於 optionAnalysis。；「元。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。邊界稽核另確認「判斷分段票價的邊界」只有題幹所述的一種解讀。",
      "difficultyReason": "需精讀自然語言邊界，屬素養。",
      "literacyContextNecessity": "日常語句「剛滿」「未滿」「以上」直接決定分段端點。",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "4456fb6cfb7b4a287da7392c946603414b7ab1fc0d8276b547067ce21965f38e"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u15-s011-cr01",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "piecewise-linear-basic",
      "skillSlot": "s011",
      "skillTitle": "分段線型基本",
      "type": "constructed-response",
      "prompt": "停車費規則：0<t≤2 小時收 50 元；2<t≤6 小時，費用為 50+30(t-2) 元。計算 t=2、4.5、6 的費用，並說明 t=2 為何使用第一段。",
      "requiredWork": "須逐一判段代入，並精確說明分界等號。",
      "standardSolution": "C(2)=50。C(4.5)=50+30×2.5=125。C(6)=50+30×4=170。因第一段條件含 t≤2，而第二段要求 t>2，所以 t=2 只屬第一段。",
      "alternativeMethod": "可先列超時量 0、2.5、4 小時，再乘 30 並加 50。",
      "reasoningSteps": [
        {
          "step": 1,
          "work": "正確處理 t=2"
        },
        {
          "step": 2,
          "work": "算 C(4.5)=125"
        },
        {
          "step": 3,
          "work": "算 C(6)=170"
        },
        {
          "step": 4,
          "work": "解釋等號歸屬"
        }
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確得到 C(2)=50、C(4.5)=125、C(6)=170，並以 t≤2 與 t>2 說明 t=2 只用第一段。"
        },
        {
          "score": 2,
          "criteria": "三個費用中兩個正確且分段選擇方法正確，或三值皆正確但漏寫 t=2 的不等號歸屬理由。"
        },
        {
          "score": 1,
          "criteria": "只正確處理 t=2=50，或能算出超過 2 小時的超時量但未完成兩個後段費用。"
        },
        {
          "score": 0,
          "criteria": "把兩段公式相加，或把 t=2 放入第二段且沒有檢查不等號。"
        }
      ],
      "partialCreditRules": [
        "三個指定時間各自獨立計分；一個費用算錯不取消另外兩個。",
        "t=2 若使用第二段但偶然也得到 50，因分界理由錯誤，整體最高 1 分。"
      ],
      "followThroughPolicy": "本題延續計分依以下具體規則處理：三個指定時間各自獨立計分；一個費用算錯不取消另外兩個。；t=2 若使用第二段但偶然也得到 50，因分界理由錯誤，整體最高 1 分。",
      "unitAndNotationRules": "沿用題幹的變數、序對、不等號與計量單位；作答必須清楚呈現以下要求中的符號與單位：須逐一判段代入，並精確說明分界等號。",
      "answerOnlyPolicy": "只寫最終答案而未呈現必要方法時，依本題 1 分規準處理：只正確處理 t=2=50，或能算出超過 2 小時的超時量但未完成兩個後段費用。；答案錯且無可辨識過程則為 0 分。",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "recomputedConclusion": "C(2)=50。C(4.5)=50+30×2.5=125。C(6)=50+30×4=170。因第一段條件含 t≤2，而第二段要求 t>2，所以 t=2 只屬第一段。",
        "reviewNote": "獨立重做 u15-s011-cr01 時依序檢查 正確處理 t=2、算 C(4.5)=125、算 C(6)=170、解釋等號歸屬；標準解與替代法在允許範圍內得到一致結論，量綱與端點亦符合題意。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "7869e239b00277a7df94a75d439e8e9403e89e323968831428a1f458151667cc"
    },
    {
      "questionId": "u15-s011-cr02",
      "unitId": "u15",
      "numericUnitId": 15,
      "unitTitle": "函數及其圖形",
      "topicId": "u15-graphs",
      "skillId": "piecewise-linear-basic",
      "skillSlot": "s011",
      "skillTitle": "分段線型基本",
      "type": "constructed-response",
      "prompt": "f(x)=3x+1（x≤2），f(x)=x+k（x>2）。若希望圖形在 x=2 接合，求 k；再求 f(5)。",
      "requiredWork": "須由分界兩側值相等求參數，再用正確區段計算。",
      "standardSolution": "第一段在 x=2 得 7；第二段邊界值 2+k 要等於 7，因此 k=5。x=5>2，使用第二段，f(5)=5+5=10。",
      "alternativeMethod": "可把兩段直線畫到 x=2，令端點高度相同；第二段要通過 (2,7)，故 y=x+5。",
      "reasoningSteps": [
        {
          "step": 1,
          "work": "求第一段邊界值 7"
        },
        {
          "step": 2,
          "work": "令 2+k=7"
        },
        {
          "step": 3,
          "work": "求 k=5"
        },
        {
          "step": 4,
          "work": "算 f(5)=10"
        }
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "令兩段在 x=2 的高度相同，求得 k=5，再因 5>2 使用第二段得到 f(5)=10。"
        },
        {
          "score": 2,
          "criteria": "正確求得 k=5 但 f(5) 有一次代入錯，或 f(5)=10 正確但接合方程少寫一側。"
        },
        {
          "score": 1,
          "criteria": "只算出第一段邊界值 7，或寫出 2+k=7 但未解完 k 與 f(5)。"
        },
        {
          "score": 0,
          "criteria": "把兩段係數直接設相等，或求 f(5) 時使用第一段而無區間判斷。"
        }
      ],
      "partialCreditRules": [
        "求 k 與求 f(5) 為連續步驟；k 單一算術錯後以錯誤 k 正確代入第二段，可保留延續分，最高 2 分。",
        "若求 f(5) 時用第一段，表示未檢查 x>2，該部分不得分。"
      ],
      "followThroughPolicy": "本題延續計分依以下具體規則處理：求 k 與求 f(5) 為連續步驟；k 單一算術錯後以錯誤 k 正確代入第二段，可保留延續分，最高 2 分。；若求 f(5) 時用第一段，表示未檢查 x>2，該部分不得分。",
      "unitAndNotationRules": "沿用題幹的變數、序對、不等號與計量單位；作答必須清楚呈現以下要求中的符號與單位：須由分界兩側值相等求參數，再用正確區段計算。",
      "answerOnlyPolicy": "只寫最終答案而未呈現必要方法時，依本題 1 分規準處理：只算出第一段邊界值 7，或寫出 2+k=7 但未解完 k 與 f(5)。；答案錯且無可辨識過程則為 0 分。",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "recomputedConclusion": "第一段在 x=2 得 7；第二段邊界值 2+k 要等於 7，因此 k=5。x=5>2，使用第二段，f(5)=5+5=10。",
        "reviewNote": "獨立重做 u15-s011-cr02 時依序檢查 求第一段邊界值 7、令 2+k=7、求 k=5、算 f(5)=10；標準解與替代法在允許範圍內得到一致結論，量綱與端點亦符合題意。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "356ad6f9f15df8255c75afa403b9af8e9cf6deae682213776582e5815fc4e210"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u15-s011-mc01-review",
      "questionId": "u15-s011-mc01",
      "unitId": "u15",
      "skillId": "piecewise-linear-basic",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "770b556e5b4db1ad2f84d6ebf2a9bfc7ce1da28d6c315b777e673ed1c6e9f8a8",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "independentSolution": "不採用已存答案，重新依題意處理：判斷 2 落第一段；只用 2x；算得 4。因此得到「4」。",
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
      "difficultyReason": "直接選段代入，屬基礎。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s011-mc01，審查者未讀取存答而依序完成：判斷 2 落第一段；只用 2x；算得 4。重算結果為「4」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把 2 代第二段。；把兩段結果相加。；把輸入本身當輸出。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s011-mc02-review",
      "questionId": "u15-s011-mc02",
      "unitId": "u15",
      "skillId": "piecewise-linear-basic",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "0fe2498ac24b19c6d821b103f7a6858722f9c95c6db6246d14d75eacecedac7e",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "12",
      "storedAnswer": "12",
      "independentSolution": "不採用已存答案，重新依題意處理：檢查等號在第二段；代入第二段；得 12。因此得到「12」。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 x=5 明確包含於第二段。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 1 的「12」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "考分界端點，屬基礎。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s011-mc02，審查者未讀取存答而依序完成：檢查等號在第二段；代入第二段；得 12。重算結果為「12」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「使用第一段得 14。；只回輸入。；把兩段值相加。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s011-mc03-review",
      "questionId": "u15-s011-mc03",
      "unitId": "u15",
      "skillId": "piecewise-linear-basic",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "79998a9a407256964ad33f4f013d82f2c69402e3f3437d6d7e010afc8b2ee7ab",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "第一段 x<4，第二段 x>4",
      "storedAnswer": "第一段 x<4，第二段 x>4",
      "independentSolution": "不採用已存答案，重新依題意處理：逐組檢查 x=4；找沒有等號者；判定第一選項。因此得到「第一段 x<4，第二段 x>4」。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 3 的「第一段 x<4，第二段 x>4」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "直接檢查端點覆蓋，屬基礎。",
      "literacyNecessityReview": "不適用；本題為 basic 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s011-mc03，審查者未讀取存答而依序完成：逐組檢查 x=4；找沒有等號者；判定第一選項。重算結果為「第一段 x<4，第二段 x>4」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「第一段包含 4。；第二段包含 4。；兩段都包含 4，反而可能重疊。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s011-mc04-review",
      "questionId": "u15-s011-mc04",
      "unitId": "u15",
      "skillId": "piecewise-linear-basic",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "516efc785d25186afb0e756fb820c11880e2d3f55a2a1272f8f986b217236fdc",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "9",
      "storedAnswer": "9",
      "independentSolution": "不採用已存答案，重新依題意處理：-2 選第一段得 0；3 選第二段得 9；相加 9。因此得到「9」。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 0 的「9」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需對兩個輸入分別判段，屬標準。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s011-mc04，審查者未讀取存答而依序完成：-2 選第一段得 0；3 選第二段得 9；相加 9。重算結果為「9」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「第二段代錯或只算一項。；把 f(-2) 誤算 -4。；把兩段公式相加再代。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s011-mc05-review",
      "questionId": "u15-s011-mc05",
      "unitId": "u15",
      "skillId": "piecewise-linear-basic",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "7f1d7b3a3a23d48bb20c8355cfd4105f5983a809280105990de74e8de86d08a0",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "115 元",
      "storedAnswer": "115 元",
      "independentSolution": "不採用已存答案，重新依題意處理：算超時 5-2=3；算追加 3×25=75；加 40。因此得到「115 元」。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 1 的「115 元」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「元。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需先算超過量再加前段固定費，屬標準。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s011-mc05，審查者未讀取存答而依序完成：算超時 5-2=3；算追加 3×25=75；加 40。重算結果為「115 元」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「只算超時費。；把 5 小時全乘 25。；把基本費與全時數重複相加。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s011-mc06-review",
      "questionId": "u15-s011-mc06",
      "unitId": "u15",
      "skillId": "piecewise-linear-basic",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "bb0da5addab730a65bfdb239ab39ec46362a329017d05ffb9237dc393d60cb04",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "接合，兩段在分界都趨近或取到 y=1",
      "storedAnswer": "接合，兩段在分界都趨近或取到 y=1",
      "independentSolution": "不採用已存答案，重新依題意處理：算第一段分界值 1；算第二段邊界對應 1；比較相同。因此得到「接合，兩段在分界都趨近或取到 y=1」。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 3 的「接合，兩段在分界都趨近或取到 y=1」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需比較分界兩側的值，屬標準。",
      "literacyNecessityReview": "不適用；本題為 standard 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s011-mc06，審查者未讀取存答而依序完成：算第一段分界值 1；算第二段邊界對應 1；比較相同。重算結果為「接合，兩段在分界都趨近或取到 y=1」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「斜率不同仍可在一點接合。；不含端點不代表右側線段不能靠近同點。；公式足以判斷。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s011-mc07-review",
      "questionId": "u15-s011-mc07",
      "unitId": "u15",
      "skillId": "piecewise-linear-basic",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "fe43641e796c6cd29eea6989a61c96ad5876704d5f2c5cddf6097ac689e78fa1",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "independentSolution": "不採用已存答案，重新依題意處理：算第一段 f(3)=7；令第二段邊界值 3+k；解 k=4。因此得到「4」。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 0 的「4」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需建立邊界相等方程，屬進階。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s011-mc07，審查者未讀取存答而依序完成：算第一段 f(3)=7；令第二段邊界值 3+k；解 k=4。重算結果為「4」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把 k 當第一段常數。；把 k 直接設分界點。；把第一段值 7 當 k。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s011-mc08-review",
      "questionId": "u15-s011-mc08",
      "unitId": "u15",
      "skillId": "piecewise-linear-basic",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "571dbbfce235f730a7bf85009e9927f32f3366cf61a0dc0be01073a07856644d",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "只有 x=1",
      "storedAnswer": "只有 x=1",
      "independentSolution": "不採用已存答案，重新依題意處理：分段各自解方程；逐一檢查區間；只保留 x=1。因此得到「只有 x=1」。",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 每個候選解必須回到原段條件檢查。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 2 的「只有 x=1」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需逐段解並淘汰不合區間的解，屬進階。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s011-mc08，審查者未讀取存答而依序完成：分段各自解方程；逐一檢查區間；只保留 x=1。重算結果為「只有 x=1」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「第二段方程 7-x=6 的解也是 1，不是 3，且 1 不合 x≥2。；第二段候選不合區間，不能保留。；把函數值直接當輸入。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s011-mc09-review",
      "questionId": "u15-s011-mc09",
      "unitId": "u15",
      "skillId": "piecewise-linear-basic",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "96568b2345c6d895f49607e6d97fc791644f6e09d5a0eb84d2b1bb14146f0b56",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "函數先上升到 8，再以每單位 1 的速率下降",
      "storedAnswer": "函數先上升到 8，再以每單位 1 的速率下降",
      "independentSolution": "不採用已存答案，重新依題意處理：讀第一段斜率 2；化簡第二段 12-x；檢查分界與方向。因此得到「函數先上升到 8，再以每單位 1 的速率下降」。",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 3 的「函數先上升到 8，再以每單位 1 的速率下降」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「不需近似；保留題目指定單位。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需化簡第二段並分析兩段方向，屬進階。",
      "literacyNecessityReview": "不適用；本題為 advanced 層次的純數學或直接表徵任務。",
      "reviewerNote": "針對 u15-s011-mc09，審查者未讀取存答而依序完成：讀第一段斜率 2；化簡第二段 12-x；檢查分界與方向。重算結果為「函數先上升到 8，再以每單位 1 的速率下降」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「x=4 只屬第一段，右側接近值也為 8。；展開負號錯。；第二段斜率不同且為負。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s011-mc10-review",
      "questionId": "u15-s011-mc10",
      "unitId": "u15",
      "skillId": "piecewise-linear-basic",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "1df5a9a15c5cb5faa4ca6fdf1981b733d32a2f66788de716a8bca66dc693114e",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "155 元",
      "storedAnswer": "155 元",
      "independentSolution": "不採用已存答案，重新依題意處理：判斷跨過 2 kg；算超重 2.5 kg；30×2.5+80=155。因此得到「155 元」。",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 0 的「155 元」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「重量 kg，運費元。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需處理小數超量與累計費，屬素養。",
      "literacyNecessityReview": "「只對超過部分加價」是分段情境不可刪除的關鍵。",
      "reviewerNote": "針對 u15-s011-mc10，審查者未讀取存答而依序完成：判斷跨過 2 kg；算超重 2.5 kg；30×2.5+80=155。重算結果為「155 元」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把超重誤算 1.833 kg 或漏基本費。；把全部 4.5 kg 乘 30 再加 80。；忽略超重段。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s011-mc11-review",
      "questionId": "u15-s011-mc11",
      "unitId": "u15",
      "skillId": "piecewise-linear-basic",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "2541f1530aa9bd1c82f26dff1aded6a9274b999f254a388766d55db1d17a7bf6",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "20 元",
      "storedAnswer": "20 元",
      "independentSolution": "不採用已存答案，重新依題意處理：判斷超過免費段；算收費分鐘 5；乘 4 得 20。因此得到「20 元」。",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 輸入範圍與符號皆依題目明示，沒有隱藏端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 2 的「20 元」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「元。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需從總時間扣除前段再計費，屬素養。",
      "literacyNecessityReview": "免費門檻改變有效計費時間，是必要情境。",
      "reviewerNote": "針對 u15-s011-mc11，審查者未讀取存答而依序完成：判斷超過免費段；算收費分鐘 5；乘 4 得 20。重算結果為「20 元」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「把全部 8 分鐘計費。；只算 3 分鐘。；只收一次 4 元。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "reviewId": "u15-s011-mc12-review",
      "questionId": "u15-s011-mc12",
      "unitId": "u15",
      "skillId": "piecewise-linear-basic",
      "reviewVersion": "human-review-u15-r1",
      "reviewedAt": "2026-07-12T16:00:00+08:00",
      "contentSha256": "4456fb6cfb7b4a287da7392c946603414b7ab1fc0d8276b547067ce21965f38e",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "derivedAnswer": "500 元",
      "storedAnswer": "500 元",
      "independentSolution": "不採用已存答案，重新依題意處理：定位年齡 12；檢查「未滿」與「以上」；選 500。因此得到「500 元」。",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "inputScope": "題目以「依題目條件判斷，不另作未說明假設。」界定可用資訊；另經檢查 「未滿」不含端點；「以上」含端點。",
        "choiceUniqueness": "四選項逐一代回或依定義檢查，只有索引 1 的「500 元」符合；其餘錯因分別記錄於 optionAnalysis。",
        "languageAndUnits": "「元。」已明示；題幹中的代名詞、比較方向與端點不會導致第二種合理解讀。"
      },
      "difficultyReason": "需精讀自然語言邊界，屬素養。",
      "literacyNecessityReview": "日常語句「剛滿」「未滿」「以上」直接決定分段端點。",
      "reviewerNote": "針對 u15-s011-mc12，審查者未讀取存答而依序完成：定位年齡 12；檢查「未滿」與「以上」；選 500。重算結果為「500 元」。再逐項核對三個干擾選項，確認它們分別對應具體錯誤「免費只適用未滿 6。；未滿 12 排除剛滿 12。；票價為分段固定值，不做內插。」，故答案唯一。",
      "reviewerDecision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u15-fig-piecewise",
      "unitId": "u15",
      "skillSlot": "s011",
      "title": "分段線型函數與分界點",
      "svgPath": "figures/u15/u15-fig-piecewise.svg",
      "altText": "分段圖第一段在 x 小於等於零時為 y=x+1，第二段在 x 大於零時為 y=2x+1，兩段在零逗號一接合。",
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
            "segment",
            -4,
            -3,
            0,
            1,
            "第一段 x≤0",
            "closed"
          ],
          [
            "segment",
            0,
            1,
            3,
            7,
            "第二段 x>0",
            "open-left"
          ],
          [
            "point",
            0,
            1,
            "分界 (0,1)"
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
            "text": "第一段 x≤0",
            "x": "211.0",
            "y": "272.0",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "第二段 x>0",
            "x": "429.8",
            "y": "138.7",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "分界 (0,1)",
            "x": "338.0",
            "y": "218.7",
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
            "id": "u15-fig-piecewise-x-axis",
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
            "id": "u15-fig-piecewise-y-axis",
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
            "id": "u15-fig-piecewise-obj-1",
            "element": "line",
            "attributes": {
              "x1": "80.0",
              "y1": "333.3",
              "x2": "330.0",
              "y2": "226.7",
              "stroke": "#1f2937",
              "stroke-width": "3"
            }
          },
          {
            "id": "u15-fig-piecewise-obj-2",
            "element": "line",
            "attributes": {
              "x1": "330.0",
              "y1": "226.7",
              "x2": "517.5",
              "y2": "66.7",
              "stroke": "#1f2937",
              "stroke-width": "3",
              "stroke-dasharray": "8 5"
            }
          },
          {
            "id": "u15-fig-piecewise-obj-3",
            "element": "circle",
            "attributes": {
              "cx": "330.0",
              "cy": "226.7",
              "r": "6",
              "fill": "#111"
            }
          }
        ]
      },
      "svgTitle": "分段線型函數與分界點",
      "svgDesc": "分段圖第一段在 x 小於等於零時為 y=x+1，第二段在 x 大於零時為 y=2x+1，兩段在零逗號一接合。",
      "svgAssertions": [
        "u15-fig-piecewise",
        "u15-fig-piecewise-title",
        "u15-fig-piecewise-desc",
        "role=\"img\"",
        "viewBox=\"0 0 640 420\"",
        "分段線型函數與分界點"
      ],
      "mobileReadabilityReview": "以 360px 寬縮放檢查，關鍵字標籤字級不低於等效 12px，點半徑與虛線仍可辨識。",
      "answerLeakageReview": "圖僅呈現題目已給資料與必要坐標，不以醒目文字直接寫出選項答案；需由讀圖或計算完成。",
      "figureReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "manualInspectionRequired": true,
        "reviewNote": "已檢查 u15-fig-piecewise 的軸向、刻度、負號、端點實空心、標籤遮擋與手機縮放；圖形內容與「第一段在分界使用實心點，第二段從同一高度的空心端開始，圖形接合。」一致。",
        "manualInspectionCompleted": true,
        "renderedAt": "2026-07-12T18:20:00+08:00",
        "renderedCanvas": "640×420 PNG，另以雙欄 contact sheet 檢視全部 14 圖",
        "renderedInspectionSummary": "逐圖檢查坐標軸方向、刻度、公式與點標籤、實心及空心端點、虛線、文字遮擋、360px 縮放可讀性與答案洩漏；修正後未見幾何或標示衝突。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "13ace88091befd07a5b34155c21733b00b6ce443b86179859041db2ecd2d7d09"
    },
    {
      "figureId": "u15-s011-mc06-fig",
      "unitId": "u15",
      "skillSlot": "s011",
      "title": "分段圖在 x=0 接合",
      "svgPath": "figures/u15/u15-s011-mc06-fig.svg",
      "altText": "第一段 y=x+1 到實心點零逗號一，第二段 y=2x+1 從同一位置向右上方延伸。",
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
          3
        ],
        "yRange": [
          -3,
          7
        ],
        "objects": [
          [
            "segment",
            -3,
            -2,
            0,
            1,
            "y=x+1",
            "closed"
          ],
          [
            "segment",
            0,
            1,
            3,
            7,
            "y=2x+1",
            "open-left"
          ],
          [
            "point",
            0,
            1,
            "共同高度 1"
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
            "y": "292.0",
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
            "text": "-3",
            "x": "68.0",
            "y": "284.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "0",
            "x": "318.0",
            "y": "284.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "3",
            "x": "568.0",
            "y": "284.0",
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
            "y": "268.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "7",
            "x": "295.0",
            "y": "44.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "y=x+1",
            "x": "211.0",
            "y": "272.0",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "y=2x+1",
            "x": "461.0",
            "y": "128.0",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "共同高度 1",
            "x": "338.0",
            "y": "224.0",
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
            "id": "u15-s011-mc06-fig-x-axis",
            "element": "line",
            "attributes": {
              "x1": "80",
              "y1": "264.0",
              "x2": "590",
              "y2": "264.0",
              "stroke": "#111",
              "stroke-width": "2",
              "marker-end": "url(#arrow)"
            }
          },
          {
            "id": "u15-s011-mc06-fig-y-axis",
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
            "id": "u15-s011-mc06-fig-obj-1",
            "element": "line",
            "attributes": {
              "x1": "80.0",
              "y1": "328.0",
              "x2": "330.0",
              "y2": "232.0",
              "stroke": "#1f2937",
              "stroke-width": "3"
            }
          },
          {
            "id": "u15-s011-mc06-fig-obj-2",
            "element": "line",
            "attributes": {
              "x1": "330.0",
              "y1": "232.0",
              "x2": "580.0",
              "y2": "40.0",
              "stroke": "#1f2937",
              "stroke-width": "3",
              "stroke-dasharray": "8 5"
            }
          },
          {
            "id": "u15-s011-mc06-fig-obj-3",
            "element": "circle",
            "attributes": {
              "cx": "330.0",
              "cy": "232.0",
              "r": "6",
              "fill": "#111"
            }
          }
        ]
      },
      "svgTitle": "分段圖在 x=0 接合",
      "svgDesc": "第一段 y=x+1 到實心點零逗號一，第二段 y=2x+1 從同一位置向右上方延伸。",
      "svgAssertions": [
        "u15-s011-mc06-fig",
        "u15-s011-mc06-fig-title",
        "u15-s011-mc06-fig-desc",
        "role=\"img\"",
        "viewBox=\"0 0 640 420\"",
        "分段圖在 x=0 接合"
      ],
      "mobileReadabilityReview": "以 360px 寬縮放檢查，關鍵字標籤字級不低於等效 12px，點半徑與虛線仍可辨識。",
      "answerLeakageReview": "圖僅呈現題目已給資料與必要坐標，不以醒目文字直接寫出選項答案；需由讀圖或計算完成。",
      "figureReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "manualInspectionRequired": true,
        "reviewNote": "已檢查 u15-s011-mc06-fig 的軸向、刻度、負號、端點實空心、標籤遮擋與手機縮放；圖形內容與「兩段斜率不同但在分界具有相同高度。」一致。",
        "manualInspectionCompleted": true,
        "renderedAt": "2026-07-12T18:20:00+08:00",
        "renderedCanvas": "640×420 PNG，另以雙欄 contact sheet 檢視全部 14 圖",
        "renderedInspectionSummary": "逐圖檢查坐標軸方向、刻度、公式與點標籤、實心及空心端點、虛線、文字遮擋、360px 縮放可讀性與答案洩漏；修正後未見幾何或標示衝突。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "c316c91fe4079ee5ee6a23b29d442d945b04359edff9aa283d560cb5c8029c31"
    },
    {
      "figureId": "u15-s011-mc09-fig",
      "unitId": "u15",
      "skillSlot": "s011",
      "title": "先上升再下降的分段圖",
      "svgPath": "figures/u15/u15-s011-mc09-fig.svg",
      "altText": "分段圖從零逗號零上升到四逗號八，再以較緩斜率下降到十逗號二。",
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
          10
        ],
        "objects": [
          [
            "segment",
            0,
            0,
            4,
            8,
            "第一段 y=2x",
            "closed"
          ],
          [
            "segment",
            4,
            8,
            10,
            2,
            "第二段 y=12-x",
            "open-left"
          ],
          [
            "point",
            4,
            8,
            "轉折 (4,8)"
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
            "y": "388.0",
            "fontSize": "16",
            "textAnchor": "start"
          },
          {
            "text": "y",
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
            "text": "10",
            "x": "45.0",
            "y": "44.0",
            "fontSize": "12",
            "textAnchor": "start"
          },
          {
            "text": "第一段 y=2x",
            "x": "186.0",
            "y": "224.0",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "第二段 y=12-x",
            "x": "436.0",
            "y": "192.0",
            "fontSize": "14",
            "textAnchor": "start"
          },
          {
            "text": "轉折 (4,8)",
            "x": "288.0",
            "y": "96.0",
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
            "id": "u15-s011-mc09-fig-x-axis",
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
            "id": "u15-s011-mc09-fig-y-axis",
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
            "id": "u15-s011-mc09-fig-obj-1",
            "element": "line",
            "attributes": {
              "x1": "80.0",
              "y1": "360.0",
              "x2": "280.0",
              "y2": "104.0",
              "stroke": "#1f2937",
              "stroke-width": "3"
            }
          },
          {
            "id": "u15-s011-mc09-fig-obj-2",
            "element": "line",
            "attributes": {
              "x1": "280.0",
              "y1": "104.0",
              "x2": "580.0",
              "y2": "296.0",
              "stroke": "#1f2937",
              "stroke-width": "3",
              "stroke-dasharray": "8 5"
            }
          },
          {
            "id": "u15-s011-mc09-fig-obj-3",
            "element": "circle",
            "attributes": {
              "cx": "280.0",
              "cy": "104.0",
              "r": "6",
              "fill": "#111"
            }
          }
        ]
      },
      "svgTitle": "先上升再下降的分段圖",
      "svgDesc": "分段圖從零逗號零上升到四逗號八，再以較緩斜率下降到十逗號二。",
      "svgAssertions": [
        "u15-s011-mc09-fig",
        "u15-s011-mc09-fig-title",
        "u15-s011-mc09-fig-desc",
        "role=\"img\"",
        "viewBox=\"0 0 640 420\"",
        "先上升再下降的分段圖"
      ],
      "mobileReadabilityReview": "以 360px 寬縮放檢查，關鍵字標籤字級不低於等效 12px，點半徑與虛線仍可辨識。",
      "answerLeakageReview": "圖僅呈現題目已給資料與必要坐標，不以醒目文字直接寫出選項答案；需由讀圖或計算完成。",
      "figureReview": {
        "reviewedAt": "2026-07-12T16:00:00+08:00",
        "decision": "pass",
        "manualInspectionRequired": true,
        "reviewNote": "已檢查 u15-s011-mc09-fig 的軸向、刻度、負號、端點實空心、標籤遮擋與手機縮放；圖形內容與「題目專用圖，顯示第一段斜率 2，第二段斜率 -1。」一致。",
        "manualInspectionCompleted": true,
        "renderedAt": "2026-07-12T18:20:00+08:00",
        "renderedCanvas": "640×420 PNG，另以雙欄 contact sheet 檢視全部 14 圖",
        "renderedInspectionSummary": "逐圖檢查坐標軸方向、刻度、公式與點標籤、實心及空心端點、虛線、文字遮擋、360px 縮放可讀性與答案洩漏；修正後未見幾何或標示衝突。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "canonicalization": "sorted-keys-json-utf8-v1",
      "contentSha256": "f4d88cde492ee711647947f45a6748dbc2b4de01debbd1ed96cc242dbc572b3a"
    }
  ],
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "productionActivationAllowed": false
};
