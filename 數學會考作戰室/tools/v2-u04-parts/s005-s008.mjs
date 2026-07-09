export const U04_PART_S005_S008 = [
  {
    "questionId": "u04-s005-v001",
    "skillId": "system-elimination-method",
    "topicId": "u04-system-methods",
    "difficulty": "basic",
    "text": "解 {x + y = 7, x − y = 3}，相加得 2x = 10，x = ?",
    "choices": [
      "5",
      "4",
      "3",
      "7"
    ],
    "answerIndex": 0,
    "explanation": "兩式 y 係數 +1 與 −1 互為相反，相加可消去 y，就變成 2x = 10，兩邊同除以 2 得 x = 5。選 4 的人可能把 10 誤當 x，忘了還要除以 2。回代第一式得 y=2，兩式都成立才算解完。",
    "steps": [
      "觀察 y 係數 +1、−1 互為相反，決定兩式相加",
      "相加：2x = 10",
      "兩邊除以 2，就變成 x = 5",
      "回代第一式得 y = 2 作驗算"
    ],
    "commonMistake": "相加後直接把 10 當 x，漏除係數 2。",
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代"
  },
  {
    "questionId": "u04-s005-v002",
    "skillId": "system-elimination-method",
    "topicId": "u04-system-methods",
    "difficulty": "basic",
    "text": "解 {2x + y = 8, x − y = 1}，相加消 y，x = ?",
    "choices": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answerIndex": 1,
    "explanation": "y 係數 +1 與 −1 相加會消去，3x = 9，所以 x = 3。選 2 可能是把 9 當 x 又少除一次，或相減而非相加。回代後 y=2，帶入第一式 2(3)+2=8 可驗算。相加消 y 是最省事的作法，不必先解 y。",
    "steps": [
      "確認 y 係數為 +1 與 −1，選相加消 y",
      "兩式相加：3x = 9",
      "解得 x = 3",
      "回代第二式得 y = 2"
    ],
    "commonMistake": "y 係數已相反卻用相減，反而把 y 係數變成 2。",
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代"
  },
  {
    "questionId": "u04-s005-v003",
    "skillId": "system-elimination-method",
    "topicId": "u04-system-methods",
    "difficulty": "basic",
    "text": "解 {3x + 2y = 12, 3x − 2y = 4}，相減得 4y = 8，y = ?",
    "choices": [
      "1",
      "3",
      "2",
      "4"
    ],
    "answerIndex": 2,
    "explanation": "兩式 x 係數都是 3，相減消 x 得 4y = 8，y = 2。選 1 常是把 8 除以 4 時算成 1，或相減常數 12−4 算錯。回代後 3x+4=12，x=8/3，整組解合理。相減時注意常數也要跟著減。",
    "steps": [
      "x 係數同為 3，用第一式減第二式消 x",
      "常數相減：12 − 4 = 8，就變成 4y = 8",
      "兩邊除以 4，y = 2",
      "回代任一式可求 x"
    ],
    "commonMistake": "相減時常數 12−4 算成 6 而非 8，導致 y 值錯誤。",
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代"
  },
  {
    "questionId": "u04-s005-v004",
    "skillId": "system-elimination-method",
    "topicId": "u04-system-methods",
    "difficulty": "basic",
    "text": "已知 x + 2y = 9 且 x − 2y = 1，兩式相加求 x",
    "choices": [
      "4",
      "6",
      "9",
      "5"
    ],
    "answerIndex": 3,
    "explanation": "2y 與 −2y 相加消去，2x = 10，x = 5。選 4 可能是只心算 10 的一半附近亂猜，或相減而非相加。回代 x=5 得 5+2y=9，y=2，兩式皆成立。2y 與 −2y 相加會完全消去。",
    "steps": [
      "2y 與 −2y 係數相反，兩式相加消 y",
      "相加得 2x = 10",
      "x = 5",
      "回代得 y = 2 驗算"
    ],
    "commonMistake": "看到 2x = 10 就選 4，心算除法不精確。",
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代"
  },
  {
    "questionId": "u04-s005-v005",
    "skillId": "system-elimination-method",
    "topicId": "u04-system-methods",
    "difficulty": "standard",
    "text": "加減消去：4x + y = 11 與 2x − y = 1，求 x",
    "choices": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answerIndex": 0,
    "explanation": "這組聯立方程式 y 係數 +1 與 −1，兩式相加消去 y 得 6x = 12，x = 2。選 1 可能是 12÷6 心算成 1，或消去 y 時符號弄錯。回代 y = 3 時 4(2) + 3 = 11，驗算無誤。完成計算後可代回題目條件再確認一次。",
    "steps": [
      "y 係數 +1、−1，兩式相加",
      "得 6x = 12",
      "x = 2",
      "回代第二式：2(2) − y = 1，y = 3"
    ],
    "commonMistake": "6x = 12 時把 x 算成 1，除法 12÷6 搞混。",
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代"
  },
  {
    "questionId": "u04-s005-v006",
    "skillId": "system-elimination-method",
    "topicId": "u04-system-methods",
    "difficulty": "standard",
    "text": "解 {5x + 3y = 19, 2x + 3y = 10}，相減得 3x = 9，x = ?",
    "choices": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answerIndex": 1,
    "explanation": "3y 係數相同，第一式減第二式消 y，3x = 9，x = 3。選 2 可能是相減方向反了變 −3x = 9，或常數 19−10 算錯。回代 2(3)+3y=10 得 y=1，第二式也成立。3y 相同時用相減比相加更快。",
    "steps": [
      "3y 係數相同，第一式減第二式",
      "5x − 2x = 3x，19 − 10 = 9",
      "3x = 9，x = 3",
      "回代第二式求 y = 1"
    ],
    "commonMistake": "用第二式減第一式得 −3x = −9 雖可解，但中間符號易搞混。",
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代"
  },
  {
    "questionId": "u04-s005-v007",
    "skillId": "system-elimination-method",
    "topicId": "u04-system-methods",
    "difficulty": "standard",
    "text": "解 {x + y = 10, 2x + 3y = 25}，y = ?",
    "choices": [
      "4",
      "6",
      "5",
      "3"
    ],
    "answerIndex": 2,
    "explanation": "第一式得 x = 10 − y，帶入第二式：2(10−y)+3y = 25，整理得 y = 5。也可用消去：第一式乘 2 再減第二式得 y = 5。選 4 常是只消 x 卻沒算完 y。回代 y=5 得 x=5，兩式左邊都等於 25。",
    "steps": [
      "第一式乘 2：2x + 2y = 20",
      "減第二式消 x：−y = −5",
      "y = 5",
      "回代第一式得 x = 5"
    ],
    "commonMistake": "消去 x 後得到 −y = −5 卻寫 y = −5，正負號弄反。",
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代"
  },
  {
    "questionId": "u04-s005-v008",
    "skillId": "system-elimination-method",
    "topicId": "u04-system-methods",
    "difficulty": "standard",
    "text": "解 {3x + 4y = 18, x + 4y = 10}，相減得 2x = 8，x = ?",
    "choices": [
      "2",
      "3",
      "6",
      "4"
    ],
    "answerIndex": 3,
    "explanation": "4y 係數相同，第一式減第二式消 y，2x = 8，x = 4。選 2 可能是 8÷2 心算錯，或用第二式減第一式符號搞混。回代 x=4 得 4+4y=10，y=1.5，兩式可驗。4y 係數相同，相減只留 x 項。",
    "steps": [
      "4y 係數相同，第一式減第二式",
      "3x − x = 2x，18 − 10 = 8",
      "2x = 8，x = 4",
      "回代第二式：4 + 4y = 10，y = 1.5"
    ],
    "commonMistake": "相減常數 18−10 算成 6，就變成 x = 3 而誤選。",
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代"
  },
  {
    "questionId": "u04-s005-v009",
    "skillId": "system-elimination-method",
    "topicId": "u04-system-methods",
    "difficulty": "standard",
    "text": "解 {2x + 5y = 16, 2x − y = 4}，相減得 6y = 12，y = ?",
    "choices": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answerIndex": 0,
    "explanation": "2x 係數相同，第一式減第二式消 x，6y = 12，y = 2。選 1 可能是 12÷6 算錯，或相減時 5y−(−y) 算成 4y。回代 y=2 得 2x+10=16，x=3，驗算通過。5y 減 (−y) 要算成 6y 不是 4y，這是相減符號最容易錯的地方。",
    "steps": [
      "2x 係數相同，第一式減第二式消 x",
      "5y − (−y) = 6y，16 − 4 = 12",
      "6y = 12，y = 2",
      "回代第二式求 x = 3"
    ],
    "commonMistake": "5y 減 (−y) 算成 4y 而非 6y，漏看減號。",
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代"
  },
  {
    "questionId": "u04-s005-v010",
    "skillId": "system-elimination-method",
    "topicId": "u04-system-methods",
    "difficulty": "advanced",
    "text": "聯立 7x − 2y = 8 與 3x + 2y = 12，相加後 x = ?",
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIndex": 1,
    "explanation": "−2y 與 +2y 相加消 y，10x = 20，x = 2。選 1 可能是 20÷10 心算錯，或常數 8+12 算成 18。回代 x=2 得 6+2y=12，y=3，兩式成立。−2y 與 +2y 相加是最典型消去，常數 8+12=20 也要一起算清楚。",
    "steps": [
      "−2y 與 +2y 相反，兩式相加消 y",
      "7x + 3x = 10x，8 + 12 = 20",
      "10x = 20，x = 2",
      "回代第二式：6 + 2y = 12，y = 3"
    ],
    "commonMistake": "常數 8 + 12 算成 19 或 21，x 跟著錯。",
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代"
  },
  {
    "questionId": "u04-s005-v011",
    "skillId": "system-elimination-method",
    "topicId": "u04-system-methods",
    "difficulty": "advanced",
    "text": "用加減消去解 x + 3y = 11 與 2x − 3y = 4，x = ?",
    "choices": [
      "4",
      "3",
      "5",
      "6"
    ],
    "answerIndex": 2,
    "explanation": "3y 與 −3y 相加消 y，3x = 15，x = 5。選 4 可能是 15÷3 心算錯，或相減而非相加。回代 x=5 得 5+3y=11，y=2，可再驗第二式。3y 與 −3y 相加後只剩 x 項，15÷3 得 5 不是 3 或 4，要除完。",
    "steps": [
      "3y 與 −3y 係數相反，兩式相加",
      "x + 2x = 3x，11 + 4 = 15",
      "3x = 15，x = 5",
      "回代第一式：5 + 3y = 11，y = 2"
    ],
    "commonMistake": "看到 3x = 15 就選 3，把 15 當分子分母搞反。",
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代"
  },
  {
    "questionId": "u04-s005-v012",
    "skillId": "system-elimination-method",
    "topicId": "u04-system-methods",
    "difficulty": "literacy",
    "text": "全糖 x 元、微糖 y 元，x + y = 50 且 x − y = 10，x = ?",
    "choices": [
      "20",
      "40",
      "25",
      "30"
    ],
    "answerIndex": 3,
    "explanation": "兩杯價格相加 50、相差 10，相加消 y 得 2x = 60，x = 30 為全糖價。選 25 可能是把 50 與 10 直接平均，忽略相差關係。回代 x=30 得 y=20，兩價相加確實 50 元。",
    "steps": [
      "全糖加微糖 50 元：x + y = 50",
      "全糖比微糖貴 10 元：x − y = 10",
      "兩式相加消 y：2x = 60",
      "x = 30，微糖 y = 20"
    ],
    "commonMistake": "看到和 50、差 10 就猜 x = 25，沒真正消去。",
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代"
  },
  {
    "questionId": "u04-s006-v001",
    "skillId": "system-elimination-scaling",
    "topicId": "u04-system-methods",
    "difficulty": "basic",
    "text": "解 {2x + 3y = 12, 3x + 2y = 13}，第一式乘 3、第二式乘 2 可消去？",
    "choices": [
      "x",
      "y",
      "常數項",
      "無法消去"
    ],
    "answerIndex": 0,
    "explanation": "第一式乘 3 得 6x+9y，第二式乘 2 得 6x+4y，x 係數都變 6 可相減消 x。選 y 是倍數配錯，兩式乘後 y 係數 9 與 4 仍不同。相減後解 y，再回代可求 x 的完整解。",
    "steps": [
      "第一式全式乘 3：6x + 9y = 36",
      "第二式全式乘 2：6x + 4y = 26",
      "x 係數同為 6，可相減消 x",
      "相減後解 y，再回代求 x"
    ],
    "commonMistake": "只把含 x 的項乘倍數，常數 12 漏乘 3。",
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘"
  },
  {
    "questionId": "u04-s006-v002",
    "skillId": "system-elimination-scaling",
    "topicId": "u04-system-methods",
    "difficulty": "basic",
    "text": "解 {x + 2y = 7, 3x + 4y = 15}，第一式乘 3 再減第二式，x = ?",
    "choices": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answerIndex": 1,
    "explanation": "第一式乘 3 得 3x+6y=21，減第二式消 y 得 −x=−6，x=1。選 2 可能是 21−15 直接當 x，或只乘 x 項沒乘 2y 與 7。回代 x=1 得 1+2y=7，y=3，兩式皆成立。第一式乘 3 時右邊 7 也要變 21。",
    "steps": [
      "第一式乘 3：3x + 6y = 21",
      "減第二式 3x + 4y = 15",
      "消 y 後 −x = −6",
      "x = 1，回代第一式 y = 3"
    ],
    "commonMistake": "第一式乘 3 時右邊 7 漏乘，變 3x+6y=7 導致 x 全錯。",
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘"
  },
  {
    "questionId": "u04-s006-v003",
    "skillId": "system-elimination-scaling",
    "topicId": "u04-system-methods",
    "difficulty": "basic",
    "text": "解 {2x + y = 5, 4x + 3y = 11}，第一式乘 2 再減第二式，y = ?",
    "choices": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answerIndex": 2,
    "explanation": "第一式乘 2 得 4x+2y=10，減第二式消 x 得 −y=−1，y=1。選 2 可能是 10−11 符號弄反得 y=2，或只乘 2x 漏乘 y。回代 y=1 得 2x+1=5，x=2，驗算第二式。第一式乘 2 後 4x 係數才能對齊。",
    "steps": [
      "第一式全式乘 2：4x + 2y = 10",
      "減第二式 4x + 3y = 11",
      "消 x 得 −y = −1",
      "y = 1，回代第一式 x = 2"
    ],
    "commonMistake": "10 − 11 寫成 y = 1 卻選 2，正負號處理錯誤。",
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘"
  },
  {
    "questionId": "u04-s006-v004",
    "skillId": "system-elimination-scaling",
    "topicId": "u04-system-methods",
    "difficulty": "basic",
    "text": "解 {3x + 2y = 8, 2x + 5y = 9}，x = ?",
    "choices": [
      "1",
      "3",
      "4",
      "2"
    ],
    "answerIndex": 3,
    "explanation": "消 y：第一式乘 5、第二式乘 2，相減得 11x=22，x=2。選 1 可能是只消 x 一次就停，或倍數配錯。回代 x=2 得 6+2y=8，y=1，兩式成立。消 y 時常選兩式 y 係數最小公倍數。",
    "steps": [
      "第一式乘 5：15x + 10y = 40",
      "第二式乘 2：4x + 10y = 18",
      "相減消 y：11x = 22",
      "x = 2，回代求 y = 1"
    ],
    "commonMistake": "兩式乘不同倍數時只乘左邊，右邊 8、9 沒跟著乘。",
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘"
  },
  {
    "questionId": "u04-s006-v005",
    "skillId": "system-elimination-scaling",
    "topicId": "u04-system-methods",
    "difficulty": "standard",
    "text": "解 {x/2 + y = 4, x + 3y = 10}，第一式乘 2 後消 x，y = ?",
    "choices": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answerIndex": 0,
    "explanation": "第一式乘 2 去分母得 x+2y=8，減第二式消 x 得 −y=−2，y=2。選 1 可能是 x/2 只乘 2 變 x 卻漏乘 y 項。回代 y=2 得 x+4=8，x=4，帶入第二式驗算。有分母時先乘去分母再消元。",
    "steps": [
      "第一式兩邊乘 2：x + 2y = 8",
      "減第二式 x + 3y = 10",
      "消 x 得 −y = −2",
      "y = 2，回代得 x = 4"
    ],
    "commonMistake": "x/2 乘 2 變 x，但 y 項沒動、右邊 4 漏乘 2。",
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘"
  },
  {
    "questionId": "u04-s006-v006",
    "skillId": "system-elimination-scaling",
    "topicId": "u04-system-methods",
    "difficulty": "standard",
    "text": "解 {4x + 3y = 18, 2x + y = 8}，第二式乘 2 再相減，y = ?",
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIndex": 1,
    "explanation": "第二式乘 2 得 4x+2y=16，減第一式消 x 得 −y=−2，y=2。選 1 可能是 16−18 算成 −2 卻寫 y=1。回代 y=2 得 2x+2=8，x=3，兩式皆成立。第二式乘 2 後 4x 才能與第一式對齊。",
    "steps": [
      "第二式乘 2：4x + 2y = 16",
      "第一式減之：4x+3y − (4x+2y) = 18−16",
      "得 y = 2",
      "回代第二式 x = 3"
    ],
    "commonMistake": "第二式乘 2 時右邊 8 寫成 16 卻左邊 2x 只變 4x、y 沒乘 2。",
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘"
  },
  {
    "questionId": "u04-s006-v007",
    "skillId": "system-elimination-scaling",
    "topicId": "u04-system-methods",
    "difficulty": "standard",
    "text": "解 {5x + 2y = 16, 3x + 4y = 18}，消 y 後 x = ?",
    "choices": [
      "1",
      "3",
      "2",
      "4"
    ],
    "answerIndex": 2,
    "explanation": "第一式乘 2、第二式乘 1 後 y 係數皆 4，相減得 7x=14，x=2。選 3 可能是倍數只乘一邊，或 14÷7 算錯。回代 x=2 得 10+2y=16，y=3，驗算通過。消 y 後只剩 x 的一次式。",
    "steps": [
      "第一式乘 2：10x + 4y = 32",
      "減第二式 3x + 4y = 18",
      "消 y 得 7x = 14",
      "x = 2，回代求 y = 3"
    ],
    "commonMistake": "消 y 時第一式只乘 2x 係數，2y 沒變成 4y。",
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘"
  },
  {
    "questionId": "u04-s006-v008",
    "skillId": "system-elimination-scaling",
    "topicId": "u04-system-methods",
    "difficulty": "standard",
    "text": "解 {2x + 3y = 7, 5x + 7y = 16}，消 x 後 y = ?",
    "choices": [
      "2",
      "0",
      "1",
      "3"
    ],
    "answerIndex": 3,
    "explanation": "第一式乘 5、第二式乘 2 後 x 係數皆 10，相減得 y=3。選 1 常是常數 35−32 算錯，或只乘一邊沒整式乘倍。回代 y=3 得 2x+9=7，x=−1，第二式也成立。",
    "steps": [
      "第一式乘 5：10x + 15y = 35",
      "第二式乘 2：10x + 14y = 32",
      "相減消 x：y = 3",
      "回代第二式 5x + 21 = 16，就變成 x = −1 驗算成立"
    ],
    "commonMistake": "10x+15y 減 10x+14y 算成 y=3 卻選錯選項，或常數 35−32 算錯。",
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘"
  },
  {
    "questionId": "u04-s006-v009",
    "skillId": "system-elimination-scaling",
    "topicId": "u04-system-methods",
    "difficulty": "standard",
    "text": "解 {x + y/2 = 5, 2x + y = 12}，第一式乘 2 得 2x + y = 10，與第二式相減？",
    "choices": [
      "0 = 2，無解",
      "y = 2",
      "x = 4",
      "無限多解"
    ],
    "answerIndex": 0,
    "explanation": "第一式乘 2 後與第二式相減，左邊全消、右邊 10−12=−2，就變成 0=−2 即無解。選 y=2 是硬解下去，忽略矛盾。左右兩式化簡後矛盾，圖形為平行線無交點。",
    "steps": [
      "第一式乘 2：2x + y = 10",
      "減第二式 2x + y = 12",
      "未知數全消，就變成 0 = −2",
      "矛盾，聯立無解"
    ],
    "commonMistake": "看到 0=−2 仍硬求 x、y，沒判斷無解。",
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘"
  },
  {
    "questionId": "u04-s006-v010",
    "skillId": "system-elimination-scaling",
    "topicId": "u04-system-methods",
    "difficulty": "advanced",
    "text": "{3x + 4y = 20, 6x + 8y = 40}，第二式是第一式的幾倍？",
    "choices": [
      "3 倍",
      "2 倍",
      "相同",
      "無關"
    ],
    "answerIndex": 1,
    "explanation": "第二式每項係數都是第一式的 2 倍，6=2×3、8=2×4、40=2×20，所以是 2 倍。選 3 倍是倍數看錯。兩式成比例且常數也成比例，消去後會得 0=0。",
    "steps": [
      "比較 x 係數：6 ÷ 3 = 2",
      "比較 y 係數：8 ÷ 4 = 2",
      "比較常數：40 ÷ 20 = 2",
      "三項倍數一致，第二式 = 2×第一式"
    ],
    "commonMistake": "只看 6 與 3 以為 3 倍，沒檢查 y 與常數是否同倍。",
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘"
  },
  {
    "questionId": "u04-s006-v011",
    "skillId": "system-elimination-scaling",
    "topicId": "u04-system-methods",
    "difficulty": "advanced",
    "text": "{2x − 3y = 1, 4x − 6y = 5}，消去後得 0 = 3，表示？",
    "choices": [
      "唯一解",
      "無限多解",
      "無解",
      "計算錯誤"
    ],
    "answerIndex": 2,
    "explanation": "第二式是第一式 2 倍但常數 5≠2×1，消去後 0=3 矛盾，兩直線平行不重合，無解。選無限多解是忽略常數不成比例。係數成比例但常數不成比例，是典型的平行無解型。",
    "steps": [
      "第二式係數是第一式 2 倍",
      "常數 5 ≠ 2×1=2，比例不一致",
      "消去未知數後得 0 = 3",
      "矛盾 → 無解"
    ],
    "commonMistake": "看到係數成比例就判無限多解，沒比常數項。",
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘"
  },
  {
    "questionId": "u04-s006-v012",
    "skillId": "system-elimination-scaling",
    "topicId": "u04-system-methods",
    "difficulty": "literacy",
    "text": "2 斤蘋果 3 斤香蕉 120 元，4 斤蘋果 6 斤香蕉 240 元，兩式關係？",
    "choices": [
      "可求唯一單價",
      "無解",
      "需代入法",
      "第二式是第一式的 2 倍"
    ],
    "answerIndex": 3,
    "explanation": "第二組斤數與金額都是第一組的 2 倍，兩式其實同一關係，無法求唯一單價。選「可求唯一單價」是沒看出兩式成比例。兩式等價只有一條關係，單價無法唯一決定。",
    "steps": [
      "設蘋果 x 元/斤、香蕉 y 元/斤",
      "第一式：2x + 3y = 120",
      "第二式：4x + 6y = 240",
      "240=2×120 且 4=2×2、6=2×3，第二式是第一式 2 倍"
    ],
    "commonMistake": "有兩組數字就以為能解單價，沒檢查兩式是否獨立。",
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘"
  },
  {
    "questionId": "u04-s007-v001",
    "skillId": "system-special-cases",
    "topicId": "u04-system-methods",
    "difficulty": "basic",
    "text": "消去後得 0 = 0，聯立方程式？",
    "choices": [
      "無限多解",
      "無解",
      "唯一解",
      "需再代入"
    ],
    "answerIndex": 0,
    "explanation": "未知數全消去且 0=0 恒成立，兩式其實同一條直線，有無限多組解。選無解是把 0=0 誤當 0=5 那種矛盾型。幾何上兩直線重合，交點有無限多個。",
    "steps": [
      "加減消去後未知數係數全消",
      "剩下 0 = 0",
      "0=0 對任意 x、y 都成立",
      "判定無限多解"
    ],
    "commonMistake": "看到 0=0 以為算錯，硬再消一次。",
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解"
  },
  {
    "questionId": "u04-s007-v002",
    "skillId": "system-special-cases",
    "topicId": "u04-system-methods",
    "difficulty": "basic",
    "text": "消去後得 0 = 5，聯立方程式？",
    "choices": [
      "無限多解",
      "無解",
      "唯一解",
      "x = 5"
    ],
    "answerIndex": 1,
    "explanation": "未知數消去後得 0=5 矛盾，兩直線平行不重合，無解。選 x=5 是把常數 5 誤當未知數的值。幾何上兩直線平行，沒有任何交點。",
    "steps": [
      "消去未知數後只剩常數",
      "0 = 5 不可能成立",
      "兩式代表平行線",
      "判定無解"
    ],
    "commonMistake": "0=5 仍寫 x=5 或 y=5，把常數當未知數。",
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解"
  },
  {
    "questionId": "u04-s007-v003",
    "skillId": "system-special-cases",
    "topicId": "u04-system-methods",
    "difficulty": "basic",
    "text": "{x + y = 3, 2x + 2y = 6} 兩式關係？",
    "choices": [
      "平行，無解",
      "相交，唯一解",
      "同一直線，無限多解",
      "需加減消去"
    ],
    "answerIndex": 2,
    "explanation": "第二式除以 2 就是 x+y=3，與第一式完全相同，兩直線重合，無限多解。選平行無解是沒化簡第二式。任取滿足 x+y=3 的點都是解，不只一組。",
    "steps": [
      "觀察第二式 2x+2y=6",
      "兩邊除以 2 得 x+y=3",
      "與第一式完全相同",
      "重合 → 無限多解"
    ],
    "commonMistake": "看到係數 2 就以為是不同直線，沒化簡。",
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解"
  },
  {
    "questionId": "u04-s007-v004",
    "skillId": "system-special-cases",
    "topicId": "u04-system-methods",
    "difficulty": "basic",
    "text": "{x − y = 2, 2x − 2y = 5} 兩式關係？",
    "choices": [
      "重合，無限多解",
      "唯一解",
      "需代入法",
      "平行不重合，無解"
    ],
    "answerIndex": 3,
    "explanation": "第二式 x 係數是第一式 2 倍，但 5≠2×2，兩直線斜率相同截距不同，平行不重合，無解。選重合是沒比常數。斜率相同但截距不同，圖形永不相交。",
    "steps": [
      "第二式 x、y 係數是第一式 2 倍",
      "常數 5 ≠ 2×2=4",
      "斜率同、截距不同",
      "平行不重合 → 無解"
    ],
    "commonMistake": "係數成比例就判重合，忽略常數 5 與 4 不同。",
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解"
  },
  {
    "questionId": "u04-s007-v005",
    "skillId": "system-special-cases",
    "topicId": "u04-system-methods",
    "difficulty": "standard",
    "text": "{2x + y = 4, x − y = 2} 消去後得唯一解，x = ?",
    "choices": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answerIndex": 0,
    "explanation": "y 係數 +1 與 −1 相加消 y，3x=6，x=2，這是相交唯一解型。選 1 可能是 6÷3 心算錯。回代 y=0 時兩式左邊都等於 4，唯一解成立。這題是標準相交唯一解，不是特殊型態。",
    "steps": [
      "兩式相加消 y：3x = 6",
      "x = 2",
      "回代第二式 y = 0",
      "兩式皆成立，唯一解"
    ],
    "commonMistake": "消去後 3x=6 卻選 x=1，除法粗心。",
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解"
  },
  {
    "questionId": "u04-s007-v006",
    "skillId": "system-special-cases",
    "topicId": "u04-system-methods",
    "difficulty": "standard",
    "text": "{3x + 6y = 9, x + 2y = 3} 化簡後？",
    "choices": [
      "無解",
      "兩式相同，無限多解",
      "x = 3",
      "y = 0"
    ],
    "answerIndex": 1,
    "explanation": "第一式除以 3 得 x+2y=3，與第二式相同，無限多解。選 x=3 是只解一個特殊點，忽略整體型態。任取滿足 x+2y=3 的點都同時滿足兩式。",
    "steps": [
      "第一式兩邊除以 3",
      "得 x + 2y = 3",
      "與第二式完全相同",
      "判定無限多解"
    ],
    "commonMistake": "沒化簡第一式就硬消，浪費時間還可能算錯。",
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解"
  },
  {
    "questionId": "u04-s007-v007",
    "skillId": "system-special-cases",
    "topicId": "u04-system-methods",
    "difficulty": "standard",
    "text": "{4x + 2y = 10, 2x + y = 6} 代入得 10 = 12，表示？",
    "choices": [
      "無限多解",
      "x = 2",
      "無解",
      "y = 1"
    ],
    "answerIndex": 2,
    "explanation": "由第二式 2x+y=6 得 4x+2y=12，帶入第一式左邊應 12 卻寫 10，矛盾無解。選 x=2 是忽略 10≠12。兩式左邊成比例但右邊不成比例，必無解。",
    "steps": [
      "第二式乘 2 得 4x + 2y = 12",
      "第一式左邊也是 4x + 2y = 10",
      "10 ≠ 12 矛盾",
      "判定無解"
    ],
    "commonMistake": "10=12 仍硬解 x=2，沒看出平行矛盾。",
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解"
  },
  {
    "questionId": "u04-s007-v008",
    "skillId": "system-special-cases",
    "topicId": "u04-system-methods",
    "difficulty": "standard",
    "text": "兩式代表平行線，交點個數？",
    "choices": [
      "1 個",
      "無限多",
      "2 個",
      "0 個"
    ],
    "answerIndex": 3,
    "explanation": "平行線永不相交，交點 0 個，對應聯立無解。選 1 個是相交唯一解的情況，搞混型態。平行線沒有交點，聯立自然無解。",
    "steps": [
      "平行線斜率相同、截距不同",
      "平面上永不相交",
      "交點個數 = 0",
      "聯立方程式無解"
    ],
    "commonMistake": "平行與重合搞混，重合才有無限多交點。",
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解"
  },
  {
    "questionId": "u04-s007-v009",
    "skillId": "system-special-cases",
    "topicId": "u04-system-methods",
    "difficulty": "standard",
    "text": "{x + 2y = 4, 2x + 4y = 8} 的解？",
    "choices": [
      "無限多組",
      "無解",
      "(0,2)",
      "(4,0)"
    ],
    "answerIndex": 0,
    "explanation": "第二式是第一式 2 倍，兩式重合，解有無限多組。(0,2) 只是其中一組，不是全部解。(2,1) 也符合，可見解不唯一。第二式係數全為第一式 2 倍且常數也是。",
    "steps": [
      "第二式除以 2 得 x+2y=4",
      "與第一式相同",
      "直線上每一點都是解",
      "無限多組"
    ],
    "commonMistake": "只找一個點 (0,2) 就停，沒判斷整體型態。",
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解"
  },
  {
    "questionId": "u04-s007-v010",
    "skillId": "system-special-cases",
    "topicId": "u04-system-methods",
    "difficulty": "advanced",
    "text": "{5x − y = 3, 10x − 2y = 8} 消去 y 得 0 = 2，表示？",
    "choices": [
      "無限多解",
      "無解",
      "x = 1",
      "y = 2"
    ],
    "answerIndex": 1,
    "explanation": "第二式係數是第一式 2 倍，但 8≠2×3=6，消去後 0=2 矛盾，無解。選無限多解是沒比常數 8 與 6。係數成 2 倍但常數 8≠6，屬平行無解。",
    "steps": [
      "第二式 = 2×第一式 的 x、y 係數",
      "常數 8 ≠ 2×3",
      "消 y 後 0 = 2",
      "矛盾 → 無解"
    ],
    "commonMistake": "0=2 看成 0=0 而判無限多解。",
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解"
  },
  {
    "questionId": "u04-s007-v011",
    "skillId": "system-special-cases",
    "topicId": "u04-system-methods",
    "difficulty": "advanced",
    "text": "{x + y = 1, 3x + 3y = 3} 的解的型態？",
    "choices": [
      "無解",
      "唯一解 (0,1)",
      "無限多解",
      "唯一解 (1,0)"
    ],
    "answerIndex": 2,
    "explanation": "第二式除以 3 得 x+y=1，與第一式相同，無限多解。(1,0) 只是其中一組，不是唯一解。(0,1) 也符合，不能當唯一解。第二式除以 3 就與第一式完全相同。",
    "steps": [
      "第二式除以 3：x + y = 1",
      "與第一式相同",
      "直線重合",
      "無限多解"
    ],
    "commonMistake": "隨便找 (1,0) 符合就判唯一解。",
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解"
  },
  {
    "questionId": "u04-s007-v012",
    "skillId": "system-special-cases",
    "topicId": "u04-system-methods",
    "difficulty": "literacy",
    "text": "消去後得到 3x = 3，聯立方程式？",
    "choices": [
      "無解",
      "無限多解",
      "需再檢查 y",
      "有唯一解 x = 1"
    ],
    "answerIndex": 3,
    "explanation": "消去 y 後得 3x=3，x=1，還要回代求 y，整體是唯一解型。選需再檢查 y 方向對但選項要選最完整描述。還需回代求 y，但 x 已唯一確定為 1。",
    "steps": [
      "消去後 3x = 3",
      "x = 1",
      "回代任一式求 y",
      "有唯一一組 (x,y)，選有唯一解 x=1"
    ],
    "commonMistake": "得到 x=1 就停，沒回代求 y 以確認唯一解。",
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解"
  },
  {
    "questionId": "u04-s008-v001",
    "skillId": "system-word-setup-basic",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "蘋果 x 元、香蕉 y 元，3 蘋果 2 香蕉 70 元，列式？",
    "choices": [
      "3x + 2y = 70",
      "3x + 2y = 5",
      "x + y = 70",
      "2x + 3y = 70"
    ],
    "answerIndex": 0,
    "explanation": "單價乘數量：3 個蘋果 3x、2 根香蕉 2y，總價 70 即 3x+2y=70。選 x+y=70 是把總價當總數。右邊 70 是總價元數，不是件數 5。3 與 2 是數量，要當係數乘在單價上。",
    "steps": [
      "設 x 為蘋果單價、y 為香蕉單價",
      "3 蘋果花 3x 元",
      "2 香蕉花 2y 元",
      "總價 70：3x + 2y = 70"
    ],
    "commonMistake": "把 3+2=5 當右邊常數，寫成 3x+2y=5。",
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式"
  },
  {
    "questionId": "u04-s008-v002",
    "skillId": "system-word-setup-basic",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "男生 x 人、女生 y 人，全班 40 人，列式？",
    "choices": [
      "x − y = 40",
      "x + y = 40",
      "2x + y = 40",
      "x + 2y = 40"
    ],
    "answerIndex": 1,
    "explanation": "全班人數 = 男生 + 女生，x+y=40。選 x−y=40 是把「共 40 人」誤當「相差 40 人」。這只是人數式，還需另一條件才能解 x、y。「共多少人」永遠用加法不是減法。",
    "steps": [
      "設 x 男生、y 女生",
      "「共 40 人」表示相加",
      "列式 x + y = 40",
      "另需第二條件才能解"
    ],
    "commonMistake": "看到 40 就寫 x−y=40，正負關係搞反。",
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式"
  },
  {
    "questionId": "u04-s008-v003",
    "skillId": "system-word-setup-basic",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "長 x cm、寬 y cm，周長 30 cm，列式？",
    "choices": [
      "x + y = 30",
      "xy = 30",
      "2x + 2y = 30",
      "x − y = 30"
    ],
    "answerIndex": 2,
    "explanation": "周長 = 2×長 + 2×寬 = 2x+2y=30。選 x+y=30 是忘記周長要算四邊，只加長寬一次。也可化簡為 x+y=15，但原式 2x+2y=30 最直接。周長公式要記得長寬各出現兩次。",
    "steps": [
      "設 x 長、y 寬（cm）",
      "周長 = 2x + 2y",
      "周長 30 cm",
      "列式 2x + 2y = 30"
    ],
    "commonMistake": "周長只寫 x+y=30，漏乘 2。",
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式"
  },
  {
    "questionId": "u04-s008-v004",
    "skillId": "system-word-setup-basic",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "x 為 2 的倍數、y 為 5 的倍數，兩數和 21，列式？",
    "choices": [
      "2x + 5y = 21",
      "x + y = 7",
      "2x = 5y",
      "x + y = 21"
    ],
    "answerIndex": 3,
    "explanation": "x、y 本身就是那兩個數，和 21 直接 x+y=21。選 2x+5y=21 是把 x、y 當倍數個數而非數本身。倍數性質通常另列如 x=2a，和式仍用 x+y。題目中的 x、y 就是那兩個數本身。",
    "steps": [
      "x 是 2 的倍數那個數、y 是 5 的倍數那個數",
      "「和 21」表示相加",
      "列式 x + y = 21",
      "倍數條件另用 x=2a 等方式處理"
    ],
    "commonMistake": "把「2 的倍數」寫成係數 2x，未知數意義搞混。",
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式"
  },
  {
    "questionId": "u04-s008-v005",
    "skillId": "system-word-setup-basic",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "成人票 x 元、兒童票 y 元，各 1 張共 350 元，列式？",
    "choices": [
      "x + y = 350",
      "2x + y = 350",
      "x + 2y = 350",
      "x − y = 350"
    ],
    "answerIndex": 0,
    "explanation": "各 1 張：一張成人 x 加一張兒童 y，共 350 元，x+y=350。選 2x+y 是多寫一張成人。還需另一購買組合才能解兩種票價。各一張票就是 x 加 y 各一次。",
    "steps": [
      "設 x 成人票價、y 兒童票價",
      "各買 1 張",
      "金額相加 350",
      "x + y = 350"
    ],
    "commonMistake": "「各 1 張」看成 2 張成人，寫 2x+y=350。",
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式"
  },
  {
    "questionId": "u04-s008-v006",
    "skillId": "system-word-setup-basic",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "甲數 x、乙數 y，甲比乙多 5，列式？",
    "choices": [
      "x + y = 5",
      "x − y = 5",
      "x = 5y",
      "y − x = 5"
    ],
    "answerIndex": 1,
    "explanation": "甲比乙多 5：x 比 y 大 5，x−y=5。選 y−x=5 是「多 5」正負寫反。還需知道兩數和或其他條件才能解出 x、y。「甲比乙多」一定是 x 減 y 為正，差與和是不同關係。",
    "steps": [
      "設甲數 x、乙數 y",
      "「甲比乙多 5」→ x 大、y 小",
      "差值 5：x − y = 5",
      "需另一式才能解兩數"
    ],
    "commonMistake": "「甲多 5」寫成 x+y=5，把差當和。",
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式"
  },
  {
    "questionId": "u04-s008-v007",
    "skillId": "system-word-setup-basic",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "大杯 x 元、小杯 y 元，2 大 3 小 190 元，列式？",
    "choices": [
      "x + y = 190",
      "3x + 2y = 190",
      "2x + 3y = 190",
      "2x + 3y = 5"
    ],
    "answerIndex": 2,
    "explanation": "2 大杯 2x、3 小杯 3y，總 190 元：2x+3y=190。選 3x+2y 是把大小杯數量對調。右邊 190 是總金額，不是杯數 5。大杯 2 杯係數 2 乘在 x 上，小杯 3 杯係數 3 乘在 y 上。",
    "steps": [
      "設大杯 x 元、小杯 y 元",
      "2 大杯 = 2x",
      "3 小杯 = 3y",
      "2x + 3y = 190"
    ],
    "commonMistake": "2 大 3 小寫成 3x+2y，係數與杯數對調。",
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式"
  },
  {
    "questionId": "u04-s008-v008",
    "skillId": "system-word-setup-basic",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "紅球 x 顆、藍球 y 顆，紅比藍多 3 且共 15 顆，第二式？",
    "choices": [
      "x − y = 15",
      "x = 3y",
      "2x + y = 15",
      "x + y = 15"
    ],
    "answerIndex": 3,
    "explanation": "共 15 顆是總數關係 x+y=15；第一式應是 x−y=3。題問第二式指總數那條。選 x−y=15 把 15 當差值。第一式應寫 x−y=3 表紅比藍多 3 顆。總數 15 顆用 x+y，不是 x−y。",
    "steps": [
      "紅比藍多 3：x − y = 3（第一式）",
      "共 15 顆：總數相加",
      "第二式 x + y = 15",
      "兩式獨立可解"
    ],
    "commonMistake": "「共 15」寫成 x−y=15，和與差搞混。",
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式"
  },
  {
    "questionId": "u04-s008-v009",
    "skillId": "system-word-setup-basic",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "速率 x km/h、時間 y h，路程 120 km，列式？",
    "choices": [
      "xy = 120",
      "x + y = 120",
      "x − y = 120",
      "x/y = 120"
    ],
    "answerIndex": 0,
    "explanation": "路程 = 速率 × 時間，120 km 即 xy=120。選 x+y=120 是把乘法關係誤當加法。這是乘法關係，不是把速率時間相加。路程公式 s=vt 在國中常寫 xy=k 形式。",
    "steps": [
      "設速率 x km/h、時間 y h",
      "路程公式 s = vt",
      "120 = x × y",
      "列式 xy = 120"
    ],
    "commonMistake": "路程寫 x+y=120，忘記速率要乘時間。",
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式"
  },
  {
    "questionId": "u04-s008-v010",
    "skillId": "system-word-setup-basic",
    "topicId": "u04-system-apps",
    "difficulty": "advanced",
    "text": "筆 x 元、本 y 元，3 筆 4 本 86 元，列式？",
    "choices": [
      "x + y = 86",
      "3x + 4y = 86",
      "4x + 3y = 86",
      "3x + 4y = 7"
    ],
    "answerIndex": 1,
    "explanation": "3 枝筆 3x、4 本 4y，共 86 元：3x+4y=86。選 4x+3y 是筆與本數量對調。右邊 86 是總價，不是 3+4=7 件數。3 筆 4 本各乘單價再加總，係數不能弄反，這是總價列式。",
    "steps": [
      "設筆 x 元、本 y 元",
      "3 筆 = 3x",
      "4 本 = 4y",
      "3x + 4y = 86"
    ],
    "commonMistake": "3 筆 4 本寫成 4x+3y，係數弄反。",
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式"
  },
  {
    "questionId": "u04-s008-v011",
    "skillId": "system-word-setup-basic",
    "topicId": "u04-system-apps",
    "difficulty": "advanced",
    "text": "兩數和 50 且差 10，兩式？",
    "choices": [
      "x + y = 10",
      "x − y = 50",
      "x + y = 50 且 x − y = 10",
      "2x + y = 50"
    ],
    "answerIndex": 2,
    "explanation": "和 50 寫 x+y=50，差 10 寫 x−y=10，兩條獨立式。選 x+y=10 只寫和且常數錯。兩式分別對應和與差，缺一不可。和與差要分開寫成兩條式子。",
    "steps": [
      "設兩數 x、y",
      "和 50：x + y = 50",
      "差 10：x − y = 10",
      "兩式聯立可解"
    ],
    "commonMistake": "和 50、差 10 只寫一式，或常數 50 與 10 對調。",
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式"
  },
  {
    "questionId": "u04-s008-v012",
    "skillId": "system-word-setup-basic",
    "topicId": "u04-system-apps",
    "difficulty": "literacy",
    "text": "平日 x 元、假日 y 元，2 平日 1 假日 2500 元，列式？",
    "choices": [
      "x + y = 2500",
      "x + 2y = 2500",
      "2x + y = 3",
      "2x + y = 2500"
    ],
    "answerIndex": 3,
    "explanation": "2 個平日 2x、1 個假日 y，共 2500：2x+y=2500。選 x+y=2500 是沒乘平日天數 2。右邊 2500 是總房價，不是天數 3。2 平日要寫 2x 不能漏乘，1 假日只寫 y 即可，這是住宿費列式。",
    "steps": [
      "設平日 x 元、假日 y 元",
      "2 平日 = 2x",
      "1 假日 = y",
      "2x + y = 2500"
    ],
    "commonMistake": "2 平日 1 假日寫 x+y=2500，漏乘 2。",
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式"
  }
];

export const U04_LECTURES_S005_S008 = [
  {
    "skillId": "system-elimination-method",
    "topicId": "u04-system-methods",
    "title": "加減消去法",
    "concept": "加減消去法的核心，是讓 x 或 y 的係數變成相同或相反，再透過兩式相加或相減把其中一個未知數消掉。係數相同就相減、係數相反就相加；消去後解一元一次式，最後一定要回代另一式求第二個未知數，並用兩式都驗算一次。",
    "formula": "兩式 ± 消去一未知數 → 解一元 → 回代",
    "stepGuide": [
      "把兩式 x、y 係數上下對齊，常數項也要對齊",
      "選擇消 x 或消 y，看哪個係數已相同或相反",
      "係數相反就相加、係數相同就相減",
      "解出剩下的未知數",
      "回代任一式求另一未知數，兩式都驗算"
    ],
    "examples": [
      {
        "question": "解 {x + y = 9, x − y = 1}",
        "explanation": "y 係數 +1 與 −1 相反，兩式相加消 y 得 2x = 10，x = 5；回代第一式 y = 4。這題不用乘倍數，直接加就消掉，最後記得回代驗算另一未知數。"
      },
      {
        "question": "解 {x + 4y = 10, x − 4y = 2}",
        "explanation": "4y 與 −4y 係數相反，相加消 y 得 2x = 12，x = 6；回代第一式 6 + 4y = 10，y = 1。係數已相反時不必先乘倍數，消去後一定要回代求另一未知數。"
      }
    ],
    "commonMistakes": [
      "該相加卻相減，y 係數反而變大",
      "消去後只寫 x 或 y 一個就交卷",
      "常數項加減時正負號弄錯",
      "回代時帶錯式子，驗算不通過"
    ]
  },
  {
    "skillId": "system-elimination-scaling",
    "topicId": "u04-system-methods",
    "title": "係數放大後消去",
    "concept": "當 x 或 y 的係數不成比例、無法直接加減消去時，先把其中一式或兩式同乘一個倍數，使某未知數係數相等或相反。重點是整式兩邊每一項都要乘，含常數項；消去後若只剩 0=0 或 0=常數，要立刻判斷無限多解或無解。",
    "formula": "m×(式1) ± n×(式2) 消去未知數",
    "stepGuide": [
      "觀察 x、y 係數，判斷需消哪個未知數",
      "找最小倍數使該未知數係數相同或相反",
      "整式兩邊同乘倍數，分母也要處理",
      "加減消去後解一元或判特殊型態",
      "回代求另一未知數並驗算"
    ],
    "examples": [
      {
        "question": "解 {2x + 3y = 11, 3x + 5y = 18}",
        "explanation": "消 x：第一式乘 3、第二式乘 2，就變成 6x+9y=33 與 6x+10y=36，相減 y=3，再回代 x=1。記得 11×3=33、18×2=36，常數每一項都要乘，整式兩邊同乘不能漏任何一項喔。"
      },
      {
        "question": "解 {x/3 + y = 2, 2x + y = 7}",
        "explanation": "第一式有分母，兩邊乘 3 得 x+3y=6，再與第二式相減消 y：x−2x=6−7，−x=−1，x=1。去分母是放大係數的常見第一步，乘倍數時右邊常數也要一起乘。"
      }
    ],
    "commonMistakes": [
      "只乘含 x 的項，常數項漏乘",
      "兩邊只乘一邊，等式不成立",
      "倍數選錯，消不乾淨",
      "消去後 0=常數 仍硬解 x"
    ]
  },
  {
    "skillId": "system-special-cases",
    "topicId": "u04-system-methods",
    "title": "無解、唯一解、無限多解",
    "concept": "加減消去後若未知數全消、只剩常數，就要判斷解的型態：0=0 表示兩式等價、圖形重合，有無限多解；0=非零常數表示矛盾、兩直線平行，無解。若仍剩一個一次未知數，則有唯一解，解出後回代即可。幾何上相交一點、平行無交點、重合無限交點。",
    "formula": "0=0 → 無限多解；0=k(k≠0) → 無解",
    "stepGuide": [
      "照常加減消去或放大係數消去",
      "觀察消去後是否還有未知數",
      "只剩 0=0 → 無限多解",
      "只剩 0=常數(≠0) → 無解",
      "有一未知數一次式 → 唯一解，解出並回代"
    ],
    "examples": [
      {
        "question": "{2x + 4y = 6, x + 2y = 3} 有幾組解？",
        "explanation": "第一式除以 2 得 x+2y=3，與第二式完全相同，兩直線重合，解有無限多組，不是只有 (3,0) 一組。看到成比例就要檢查常數是否也成比例。"
      },
      {
        "question": "{x + y = 4, 2x + 2y = 10} 能否解出 x？",
        "explanation": "第二式係數是第一式 2 倍，但 10≠2×4=8，消去後 0=2 矛盾，兩直線平行，無解，不能硬寫 x 的值。係數成比例但常數不成比例就是無解。"
      }
    ],
    "commonMistakes": [
      "0=0 仍硬解出 x=0",
      "0=5 說成唯一解 x=5",
      "沒化簡就判斷，其實兩式相同",
      "平行與重合搞混"
    ]
  },
  {
    "skillId": "system-word-setup-basic",
    "topicId": "u04-system-apps",
    "title": "情境列聯立方程式",
    "concept": "應用題列聯立式，第一步是設 x、y 並寫清楚各代表什麼（單價、人數、長寬等）。接著從題目找兩條獨立關係：總數、總價、相差、周長、路程等，各列一式。單位要一致，兩個條件不可寫在同一式，否則無法解出唯一答案。",
    "formula": "設未知數 → 兩條獨立關係 → 聯立",
    "stepGuide": [
      "讀題設 x、y 並註明單位與意義",
      "找出第一條數量或金額關係列式",
      "找出第二條不同關系列第二式",
      "檢查係數是否對應題中數量",
      "確認兩式獨立、次數皆為一次"
    ],
    "examples": [
      {
        "question": "小華買 2 瓶果汁、3 片吐司共 95 元；設果汁 x 元、吐司 y 元，怎麼列？",
        "explanation": "單價乘數量：2 瓶果汁 2x、3 片吐司 3y，總價 95，列 2x+3y=95。還需要另一組購買或總數條件才能解單價，一條式無法求出 x 與 y 兩個未知數的值。"
      },
      {
        "question": "長方形長比寬多 4 cm，周長 36 cm，怎麼列兩式？",
        "explanation": "設長 x、寬 y：長比寬多 4 → x−y=4；周長 36 → 2x+2y=36。和與差、周長是兩條不同關係，不可合在同一式，各列一式才能聯立求解兩未知數。"
      }
    ],
    "commonMistakes": [
      "沒說明 x、y 各代表什麼",
      "總價與總數寫成同一式",
      "數量與係數對調（3 蘋果 2 香蕉寫 2x+3y 沒錯，但 2 蘋果 3 香蕉不能寫反）",
      "「多 5」正負寫成 y−x=5"
    ]
  }
];
