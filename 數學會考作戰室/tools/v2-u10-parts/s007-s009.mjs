export const U10_PART_S007_S009 = [
  {
    "questionId": "u10-s007-v001",
    "skillId": "binomial-multiply-basic",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "basic",
    "text": "(x + 2)(x + 3) 展開後為何？",
    "choices": [
      "x² + 5x + 6",
      "x² + 6x + 5",
      "2x² + 5x + 6",
      "x² + 5x − 6"
    ],
    "answerIndex": 0,
    "explanation": "先用x乘第二個括號，得到x²+3x；再用2乘第二個括號，得到2x+6。一次項3x與2x相加為5x，常數6保留，所以可得x²+5x+6。x²+6x+5同時把一次項與常數算錯；2x²+5x+6則把x·x誤寫成2x²。",
    "steps": [
      "x 乘 x + 3：x² + 3x。",
      "2 乘 x + 3：2x + 6。",
      "合併同類項：x² + 5x + 6。"
    ],
    "commonMistake": "一次項 3x 加 2x 誤寫成 6x，或常數 6 與 5 位置對調。",
    "concept": "二項式乘二項式先用分配律每一項分別相乘，再把同次項係數合併；注意正負號與係數相乘，最後整理成降冪排列的多項式"
  },
  {
    "questionId": "u10-s007-v002",
    "skillId": "binomial-multiply-basic",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "basic",
    "text": "(x − 1)(x + 4) 展開後為何？",
    "choices": [
      "x² + 5x − 4",
      "x² + 3x − 4",
      "x² − 3x − 4",
      "x² + 4x − 1"
    ],
    "answerIndex": 1,
    "explanation": "依分配律，x乘(x+4)得x²+4x；−1乘(x+4)得−x−4。合併4x與−x得到3x，常數為−4，整理後得到x²+3x−4。x²+5x−4把−x誤當成+x；x²−3x−4把正確的一次項+3x寫成−3x，正負號相反，兩者相差6x；x²+4x−1則沒有完成一次項合併，也把常數乘積算錯。",
    "steps": [
      "x 乘 x + 4：x² + 4x。",
      "−1 乘 x + 4：−x − 4。",
      "合併：x² + 3x − 4。"
    ],
    "commonMistake": "−1 乘 x 得 −x，卻當 +x 去跟 4x 相加，一次項變 5x。",
    "concept": "二項式乘二項式先用分配律每一項分別相乘，再把同次項係數合併；注意正負號與係數相乘，最後整理成降冪排列的多項式"
  },
  {
    "questionId": "u10-s007-v003",
    "skillId": "binomial-multiply-basic",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "basic",
    "text": "(2x + 1)(x + 2) 展開後為何？",
    "choices": [
      "2x² + 3x + 2",
      "3x² + 5x + 2",
      "2x² + 5x + 2",
      "2x² + 4x + 1"
    ],
    "answerIndex": 2,
    "explanation": "2x 乘 (x+2) 得 2x²+4x；1 乘 (x+2) 得 x+2。把 4x 加 x 是 5x，常數 2 保留，整理 2x²+5x+2。2x²+3x+2 是 4x+x 只加出 3x 少加 1x；3x²+5x+2 則 2x·x 的係數 2 漏乘，第一項誤寫成 3x² 不是 2x²。首項 2x 乘 x 時係數 2 要算進去不能漏。",
    "steps": [
      "2x 乘 x + 2：2x² + 4x。",
      "1 乘 x + 2：x + 2。",
      "合併：2x² + 5x + 2。"
    ],
    "commonMistake": "4x 與 x 合併只寫 3x 少 1，或 2x·x 係數漏乘寫成 3x²。",
    "concept": "二項式乘二項式先用分配律每一項分別相乘，再把同次項係數合併；注意正負號與係數相乘，最後整理成降冪排列的多項式"
  },
  {
    "questionId": "u10-s007-v004",
    "skillId": "binomial-multiply-basic",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "basic",
    "text": "(x − 3)(x − 2) 展開後為何？",
    "choices": [
      "x² − 5x − 6",
      "x² + 5x + 6",
      "x² − 6x + 5",
      "x² − 5x + 6"
    ],
    "answerIndex": 3,
    "explanation": "x 乘 (x−2) 得 x²−2x；−3 乘 (x−2) 得 −3x+6。把 −2x 與 −3x 合併 −5x，常數 +6 保留，得 x²−5x+6。x²−5x−6 是把 −3·(−2) 算成 −6 常數符號錯；x²+5x+6 則兩個一次項符號都弄反，−2x−3x 變 +5x。兩個負號相乘常數才會變正。",
    "steps": [
      "x 乘 x − 2：x² − 2x。",
      "−3 乘 x − 2：−3x + 6。",
      "合併：x² − 5x + 6。"
    ],
    "commonMistake": "−3 乘 −2 常數項算成 −6 符號錯，或 −2x−3x 符號全反變 +5x。",
    "concept": "二項式乘二項式先用分配律每一項分別相乘，再把同次項係數合併；注意正負號與係數相乘，最後整理成降冪排列的多項式"
  },
  {
    "questionId": "u10-s007-v005",
    "skillId": "binomial-multiply-basic",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "(3x + 2)(x − 1) 展開後為何？",
    "choices": [
      "3x² − x − 2",
      "3x² + x − 2",
      "3x² − 5x − 2",
      "4x² − x − 2"
    ],
    "answerIndex": 0,
    "explanation": "3x 乘 (x−1) 得 3x²−3x；2 乘 (x−1) 得 2x−2。把 −3x 加 2x 是 −x，常數 −2 保留，整理 3x²−x−2。3x²+x−2 是把 −3x+2x 算成 +x 符號反了；3x²−5x−2 則 2x 與 −3x 加總算成 −5x，多減了一次 2x。一次項 −3x 加 2x 合併後是 −x 不是 +x，也不能把 2x 當 −2x 去加。",
    "steps": [
      "3x 乘 x − 1：3x² − 3x。",
      "2 乘 x − 1：2x − 2。",
      "合併：3x² − x − 2。"
    ],
    "commonMistake": "−3x+2x 合併符號弄反寫 +x，或 2x 與 −3x 加總誤算 −5x。",
    "concept": "二項式乘二項式先用分配律每一項分別相乘，再把同次項係數合併；注意正負號與係數相乘，最後整理成降冪排列的多項式"
  },
  {
    "questionId": "u10-s007-v006",
    "skillId": "binomial-multiply-basic",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "(x + 5)(2x − 1) 展開後為何？",
    "choices": [
      "2x² + 10x − 5",
      "2x² + 9x − 5",
      "3x² + 9x − 5",
      "2x² + 9x + 5"
    ],
    "answerIndex": 1,
    "explanation": "x 乘 (2x−1) 得 2x²−x；5 乘 (2x−1) 得 10x−5。把 −x 加 10x 是 9x，常數 −5 保留，得 2x²+9x−5。2x²+10x−5 是把 −x+10x 當 10x 漏減 1x；2x²+9x+5 則 5·(−1) 常數符號寫成 +5，負號漏看。5 乘 (2x−1) 要分別算出 10x 與 −5，−x+10x 合併是 9x 不是 10x，常數 5×(−1)=−5 不能寫 +5。",
    "steps": [
      "x 乘 2x − 1：2x² − x。",
      "5 乘 2x − 1：10x − 5。",
      "合併：2x² + 9x − 5。"
    ],
    "commonMistake": "−x+10x 只保留 10x 漏減 1，或 5 乘 −1 常數項符號寫反。",
    "concept": "二項式乘二項式先用分配律每一項分別相乘，再把同次項係數合併；注意正負號與係數相乘，最後整理成降冪排列的多項式"
  },
  {
    "questionId": "u10-s007-v007",
    "skillId": "binomial-multiply-basic",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "(x − 4)(x + 7) 展開後為何？",
    "choices": [
      "x² − 3x − 28",
      "x² + 11x − 28",
      "x² + 3x − 28",
      "x² + 3x + 28"
    ],
    "answerIndex": 2,
    "explanation": "x 乘 (x+7) 得 x²+7x；−4 乘 (x+7) 得 −4x−28。把 7x 與 −4x 合併 3x，常數 −28 保留，整理 x²+3x−28。x²−3x−28 是把 −4x 當 +4x 去跟 7x 相減；x²+11x−28 則 7x−(−4x) 誤算成 11x，符號處理錯。7x 減 4x 合併得 3x 不是 11x，常數 (−4)×7=−28 不能寫成 +28 或漏算。",
    "steps": [
      "x 乘 x + 7：x² + 7x。",
      "−4 乘 x + 7：−4x − 28。",
      "合併：x² + 3x − 28。"
    ],
    "commonMistake": "−4 乘 x 得 −4x，卻當 +4x 跟 7x 相減，一次項變 −3x 而不是 3x。",
    "concept": "二項式乘二項式先用分配律每一項分別相乘，再把同次項係數合併；注意正負號與係數相乘，最後整理成降冪排列的多項式"
  },
  {
    "questionId": "u10-s007-v008",
    "skillId": "binomial-multiply-basic",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "(2x − 3)(x + 1) 展開後為何？",
    "choices": [
      "2x² + x − 3",
      "2x² − 5x − 3",
      "3x² − x − 3",
      "2x² − x − 3"
    ],
    "answerIndex": 3,
    "explanation": "2x 乘 (x+1) 得 2x²+2x；−3 乘 (x+1) 得 −3x−3。把 2x 與 −3x 合併 −x，常數 −3 保留，得 2x²−x−3。2x²+x−3 是把 −3x 當 +x 去加 2x 符號反了；2x²−5x−3 則 2x−3x 算成 −5x，多減一次 2x 少加 4x。2x 與 −3x 合併只少 1x 得 −x，不是 −5x 也不是 +x，常數項 (−3)×1=−3。",
    "steps": [
      "2x 乘 x + 1：2x² + 2x。",
      "−3 乘 x + 1：−3x − 3。",
      "合併：2x² − x − 3。"
    ],
    "commonMistake": "2x−3x 合併算成 −5x 多減，或 −3x 符號弄反變 +x 得 2x²+x−3。",
    "concept": "二項式乘二項式先用分配律每一項分別相乘，再把同次項係數合併；注意正負號與係數相乘，最後整理成降冪排列的多項式"
  },
  {
    "questionId": "u10-s007-v009",
    "skillId": "binomial-multiply-basic",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "(x + 6)(x − 1) 展開後為何？",
    "choices": [
      "x² + 5x − 6",
      "x² + 7x − 6",
      "x² − 5x − 6",
      "x² + 5x + 6"
    ],
    "answerIndex": 0,
    "explanation": "x 乘 (x−1) 得 x²−x；6 乘 (x−1) 得 6x−6。把 −x 加 6x 是 5x，常數 −6 保留，整理 x²+5x−6。x²+7x−6 是把 −x+6x 算成 7x 多加了 1x；x²−5x−6 則 6x 符號弄反變 −6x 去跟 −x 合併，一次項變 −5x。6 乘 (x−1) 常數是 −6 不是 +6，−x+6x 合併是 5x 不是 7x。",
    "steps": [
      "x 乘 x − 1：x² − x。",
      "6 乘 x − 1：6x − 6。",
      "合併：x² + 5x − 6。"
    ],
    "commonMistake": "−x+6x 加總寫 7x 多 1，或 6 乘 (x−1) 常數項符號弄反變 +6。",
    "concept": "二項式乘二項式先用分配律每一項分別相乘，再把同次項係數合併；注意正負號與係數相乘，最後整理成降冪排列的多項式"
  },
  {
    "questionId": "u10-s007-v010",
    "skillId": "binomial-multiply-basic",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "advanced",
    "text": "(3x − 1)(2x + 3) 展開後為何？",
    "choices": [
      "6x² + 11x − 3",
      "6x² + 7x − 3",
      "5x² + 7x − 3",
      "6x² + 7x + 3"
    ],
    "answerIndex": 1,
    "explanation": "3x 乘 (2x+3) 得 6x²+9x；−1 乘 (2x+3) 得 −2x−3。把 9x 與 −2x 合併 7x，常數 −3 保留，整理 6x²+7x−3。6x²+11x−3 是把 9x−2x 算成 11x 多加了 2x；6x²+7x+3 則常數項來自 (−1)×3=−3，漏掉 −1 的負號而寫成 +3。−1 乘 3 得 −3 常數不能寫 +3，一次項 9x−2x=7x。",
    "steps": [
      "3x 乘 2x + 3：6x² + 9x。",
      "−1 乘 2x + 3：−2x − 3。",
      "合併：6x² + 7x − 3。"
    ],
    "commonMistake": "9x−2x 合併寫 11x 多加了 2，或 −1 乘 3 常數項符號寫反。",
    "concept": "二項式乘二項式先用分配律每一項分別相乘，再把同次項係數合併；注意正負號與係數相乘，最後整理成降冪排列的多項式"
  },
  {
    "questionId": "u10-s007-v011",
    "skillId": "binomial-multiply-basic",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "advanced",
    "text": "(x − 2)(3x + 4) 展開後為何？",
    "choices": [
      "3x² + 2x − 8",
      "4x² − 2x − 8",
      "3x² − 2x − 8",
      "3x² − 6x − 8"
    ],
    "answerIndex": 2,
    "explanation": "x 乘 (3x+4) 得 3x²+4x；−2 乘 (3x+4) 得 −6x−8。把 4x 與 −6x 合併 −2x，常數 −8 保留，得 3x²−2x−8。3x²+2x−8 是把 −6x 當 +2x 去加 4x 符號反了；3x²−6x−8 則 4x−6x 只減一次得 −6x，漏加 4x。−2 乘 (3x+4) 得 −6x−8，常數項 (−2)×4=−8 不能寫成 +8，4x 加 (−6x) 合併是 −2x 不是 −6x。",
    "steps": [
      "x 乘 3x + 4：3x² + 4x。",
      "−2 乘 3x + 4：−6x − 8。",
      "合併：3x² − 2x − 8。"
    ],
    "commonMistake": "4x−6x 合併只寫 −6x 漏加 4x，或 −2·3x 符號弄反變 +6x。",
    "concept": "二項式乘二項式先用分配律每一項分別相乘，再把同次項係數合併；注意正負號與係數相乘，最後整理成降冪排列的多項式"
  },
  {
    "questionId": "u10-s007-v012",
    "skillId": "binomial-multiply-basic",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "literacy",
    "text": "一長方形長 (x + 2) 公分、寬 (x + 3) 公分，面積展開後為何？",
    "choices": [
      "x² + 5x + 5",
      "2x² + 5x + 6",
      "x² + 6x + 5",
      "x² + 5x + 6"
    ],
    "answerIndex": 3,
    "explanation": "長方形面積等於長乘寬，也就是 (x+2)(x+3)。x 乘 (x+3) 得 x²+3x，2 乘 (x+3) 得 2x+6，3x+2x=5x，常數 2×3=6，面積 x²+5x+6。x²+5x+5 常數 2×3 漏算成 5；x²+6x+5 則一次項與常數對調，6 與 5 位置錯。2 乘 (x+3) 得 2x+6 不能漏算。",
    "steps": [
      "面積 = 長 × 寬 = (x + 2)(x + 3)。",
      "分配律展開：x² + 3x + 2x + 6。",
      "合併得 x² + 5x + 6。"
    ],
    "commonMistake": "長乘寬展開常數 2×3 漏算成 5，或 3x+2x 與常數 6 位置對調。",
    "concept": "二項式乘二項式先用分配律每一項分別相乘，再把同次項係數合併；注意正負號與係數相乘，最後整理成降冪排列的多項式"
  },
  {
    "questionId": "u10-s008-v001",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "basic",
    "text": "(x + 3)² 展開後為何？",
    "choices": [
      "x² + 6x + 9",
      "x² + 9",
      "x² + 3x + 9",
      "x² + 6x + 6"
    ],
    "answerIndex": 0,
    "explanation": "(x+3)² 可寫成 (x+3)(x+3)：x²+3x+3x+9，兩段 3x 加起來 6x，整理 x²+6x+9。x²+9 是漏掉兩段 3x 中間項；x²+3x+9 則只保留一段 3x，忘了 2·x·3=6x 前面還要乘 2。分配律兩段 3x 加總才是 6x 不是 3x，2·x·3 要乘 2。2·x·3 要乘 2 得 6x。",
    "steps": [
      "寫成 (x + 3)(x + 3)。",
      "展開：x² + 3x + 3x + 9。",
      "合併一次項：x² + 6x + 9。"
    ],
    "commonMistake": "展開只寫 x²+9 漏中間項，或 2·x·3 只算一次得 3x 漏乘 2。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s008-v002",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "basic",
    "text": "(2x + 1)² 展開後為何？",
    "choices": [
      "4x² + 2x + 1",
      "4x² + 4x + 1",
      "2x² + 4x + 1",
      "4x² + 4x + 2"
    ],
    "answerIndex": 1,
    "explanation": "在(2x+1)²中，首項(2x)²=4x²，中間項2×2x×1=4x，末項1²=1，因此得到4x²+4x+1。4x²+2x+1把中間項少算2x；2x²+4x+1沒有把係數2平方；4x²+4x+2則把1²誤算成2。計算整個2x的平方時，係數2與x都要平方。",
    "steps": [
      "第一項平方：(2x)² = 4x²。",
      "中間項 2·2x·1 = 4x。",
      "第二項平方：1² = 1，合併 4x² + 4x + 1。"
    ],
    "commonMistake": "2·2x·1 只寫 2x 漏乘 2，或 (2x)² 只算 2x² 沒把 2 平方。首項 4x² 不是 2x²。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s008-v003",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "basic",
    "text": "若 (x + 5)² = x² + □ + 25，□ 應填何式？",
    "choices": [
      "5x",
      "25x",
      "10x",
      "10"
    ],
    "answerIndex": 2,
    "explanation": "完全平方和公式為(a+b)²=a²+2ab+b²。這裡a=x、b=5，中間項是2×x×5=10x，所以空格應填10x。5x少乘了公式中的2；25x把常數平方誤當一次項；10則缺少未知數x，三者都不符合展開式。",
    "steps": [
      "把a設為x、b設為5。",
      "計算交叉項2ab=2×x×5。",
      "空格填入10x。"
    ],
    "commonMistake": "只計算x×5而漏乘2，會把中間項錯寫成5x。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s008-v004",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "basic",
    "text": "小安把 (3x + 2)² 寫成 9x² + 6x + 4，哪一項需要修正？",
    "choices": [
      "首項應改為 6x²",
      "常數項應改為 2",
      "中間項應改為 9x",
      "中間項應改為 12x"
    ],
    "answerIndex": 3,
    "explanation": "先檢查三個部分：(3x)²=9x²，2²=4，兩者都已寫對；中間項應是2×3x×2=12x，因此原式中的6x要改成12x。其餘三種修改反而會破壞正確的首項或常數項。",
    "steps": [
      "確認首項平方是9x²。",
      "確認常數平方是4。",
      "把中間的6x修正為12x。"
    ],
    "commonMistake": "只算3x×2而漏掉公式中的2，會得到錯誤的6x。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s008-v005",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "若 x² + 14x + 49 = (x + k)²，則 k 為何？",
    "choices": [
      "7",
      "14",
      "49",
      "2"
    ],
    "answerIndex": 0,
    "explanation": "把(x+k)²展開成x²+2kx+k²，再與x²+14x+49比較。由一次項係數可得2k=14，所以k=7；同時7²=49，也符合常數項。14只是一次項係數，49是k²，2則無法同時滿足兩個條件，因此只有7符合。",
    "steps": [
      "寫出x²+2kx+k²。",
      "由2k=14求出k=7。",
      "確認k²與49一致。"
    ],
    "commonMistake": "把14直接當成k，忽略一次項係數其實是2k。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s008-v006",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "展開 (4x + 1)² 時，x 項的係數是多少？",
    "choices": [
      "4",
      "8",
      "16",
      "2"
    ],
    "answerIndex": 1,
    "explanation": "在(4x+1)²中，a=4x、b=1，中間項為2ab=2×4x×1=8x，因此x項係數是8。4只算了4x×1而少乘2；16屬於首項平方的係數；2只是公式中的固定倍數，還沒有乘上4。因此只有8符合展開後的一次項。",
    "steps": [
      "辨認a=4x、b=1。",
      "求出交叉項為8x。",
      "讀出x項係數8。"
    ],
    "commonMistake": "把公式中的2單獨當成係數，或只算4x×1而得到4。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s008-v007",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "化簡 (x + 2)² − x²，所得式子為何？",
    "choices": [
      "2x + 4",
      "x² + 4x + 4",
      "4x + 4",
      "4x"
    ],
    "answerIndex": 2,
    "explanation": "先展開(x+2)²=x²+4x+4，再減去原式後面的x²。兩個二次項互相抵消，只留下4x+4。2x+4少算一半交叉項；x²+4x+4尚未完成減法；4x則漏掉常數4，所以化簡後必須同時保留一次項與常數項。",
    "steps": [
      "先將平方展開成三項。",
      "把後面的x²整項減去。",
      "相消二次項後留下4x+4。"
    ],
    "commonMistake": "展開平方後忘記減去原來的x²，會保留多餘的二次項。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s008-v008",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "正方形邊長由 5x 增加為 5x + 2，面積增加多少？",
    "choices": [
      "10x + 4",
      "25x² + 4",
      "20x",
      "20x + 4"
    ],
    "answerIndex": 3,
    "explanation": "新正方形面積為(5x+2)²=25x²+20x+4，原面積為(5x)²=25x²。兩者相減後，25x²互相抵消，面積增加20x+4。20x漏掉2²形成的4；25x²+4則沒有計入兩塊交叉區域，因此都不是完整的增加量。",
    "steps": [
      "列出新正方形面積(5x+2)²。",
      "列出原正方形面積25x²。",
      "兩面積相減得到20x+4。"
    ],
    "commonMistake": "只看到邊長增加2就寫20x，會漏掉2²形成的常數4。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s008-v009",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "已知 (x + a)² 展開後 x 項係數為 2，則 a 為何？",
    "choices": [
      "1",
      "2",
      "−1",
      "4"
    ],
    "answerIndex": 0,
    "explanation": "由(x+a)²=x²+2ax+a²可知，x項係數是2a。題目給定係數為2，因此列式2a=2，解得a=1。若a=2，中間項會是4x；若a=−1，中間項會是−2x；a=4時係數更會變成8，所以只有1符合題意。",
    "steps": [
      "從公式讀出x項係數2a。",
      "建立方程式2a=2。",
      "解得a=1。"
    ],
    "commonMistake": "把x項係數直接當成a，會忽略公式中的倍數2。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s008-v010",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "advanced",
    "text": "下列哪一式平方後等於 4x² + 12x + 9？",
    "choices": [
      "(2x + 9)²",
      "(2x + 3)²",
      "(4x + 3)²",
      "(2x + 6)²"
    ],
    "answerIndex": 1,
    "explanation": "4x²表示第一項應是2x，9表示第二項應是3。用完全平方和計算，中間項2×2x×3=12x，正好符合原式，因此對應(2x+3)²。其他式子的首項、常數項或中間項都不一致。",
    "steps": [
      "由4x²判斷第一項為2x。",
      "由9判斷第二項為3。",
      "檢查中間項12x並寫成(2x+3)²。"
    ],
    "commonMistake": "只看首項平方而忽略常數與中間項，會挑到外形相近的錯誤式子。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s008-v011",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "advanced",
    "text": "若 (x + 4)² = x² + 8x + c，則 c 為何？",
    "choices": [
      "8",
      "12",
      "16",
      "20"
    ],
    "answerIndex": 2,
    "explanation": "展開(x+4)²可得x²+2×x×4+4²，也就是x²+8x+16。題目已經給出x²與8x，所以剩下的常數c必須是16。8是一次項的係數；12與20都不是4的平方，無法補成完整展開式。",
    "steps": [
      "把常數4平方。",
      "得到常數項16。",
      "因此c=16。"
    ],
    "commonMistake": "把中間項係數8誤當常數c，會忽略末項必須是4²。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s008-v012",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "literacy",
    "text": "一正方形邊長 (x + 4) 公分，面積展開後為何？",
    "choices": [
      "x² + 4x + 16",
      "x² + 16",
      "x² + 8x + 8",
      "x² + 8x + 16"
    ],
    "answerIndex": 3,
    "explanation": "正方形面積等於邊長平方，也就是 (x+4)²。第一項 x²，中間 2·x·4=8x，末項 4²=16，面積 x²+8x+16。x²+4x+16 是 2·x·4 只算 4x 漏乘 2；x²+8x+8 則 4² 算成 8 不是 16，常數平方錯。邊長平方跟代數展開是一回事。",
    "steps": [
      "面積 = 邊長² = (x + 4)²。",
      "套用公式：x² + 2·x·4 + 16。",
      "整理得 x² + 8x + 16。"
    ],
    "commonMistake": "邊長平方展開 2·x·4 只寫 4x 漏乘 2，或 4² 算成 8 不是 16。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s009-v001",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "basic",
    "text": "(x − 2)² 展開後為何？",
    "choices": [
      "x² − 4x + 4",
      "x² + 4x + 4",
      "x² − 4",
      "x² − 2x + 4"
    ],
    "answerIndex": 0,
    "explanation": "(x−2)² 第一項 x²，中間 −2·x·2=−4x，末項 (−2)²=4，整理 x²−4x+4。x²+4x+4 中間項符號弄反變 +4x；x²−2x+4 則 −2·x·2 只算 x·2=2x 漏乘 2，且符號也可能錯。減號平方中間項仍是負的。一次項只有 −2x 不是 −4x。",
    "steps": [
      "第一項 x²。",
      "中間項 −2·x·2 = −4x。",
      "常數 2² = 4，整理成 x² − 4x + 4。"
    ],
    "commonMistake": "−2·x·2 中間項符號寫 +4x，或只算 x·2=2x 漏乘 2。中間項符號最易反。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  },
  {
    "questionId": "u10-s009-v002",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "basic",
    "text": "(x − 5)² 展開後為何？",
    "choices": [
      "x² − 5x + 25",
      "x² − 10x + 25",
      "x² + 10x + 25",
      "x² − 25"
    ],
    "answerIndex": 1,
    "explanation": "把(x−5)²寫成(x−5)(x−5)，展開得到x²−5x−5x+25，兩個一次項合併為−10x，所以得到x²−10x+25。x²−5x+25只保留一個−5x；x²+10x+25把一次項符號寫反；x²−25漏掉一次項，也把常數符號寫錯。",
    "steps": [
      "x² 是第一項。",
      "−2·x·5 = −10x。",
      "5² = 25，整理成 x² − 10x + 25。"
    ],
    "commonMistake": "−2·x·5 只寫 5x 漏乘 2，或中間項符號弄反寫 +10x。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  },
  {
    "questionId": "u10-s009-v003",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "basic",
    "text": "小華把 (2x − 1)² 寫成 4x² − 2x + 1，哪一項需要修正？",
    "choices": [
      "首項應改為 2x²",
      "常數項應改為 −1",
      "中間項應改為 −4x",
      "中間項應改為 4x"
    ],
    "answerIndex": 2,
    "explanation": "首項(2x)²=4x²，常數項1²=1，這兩項都正確。中間項要計算−2×2x×1=−4x，因此原來的−2x應改為−4x。正4x的符號不符減法平方，其他修改也會破壞正確項。",
    "steps": [
      "確認首項平方為4x²。",
      "確認常數平方為1。",
      "把中間的−2x修正為−4x。"
    ],
    "commonMistake": "只算2x×1而漏掉前面的倍數2，會把中間項寫成−2x。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  },
  {
    "questionId": "u10-s009-v004",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "basic",
    "text": "若 (x − 7)² = x² + □ + 49，□ 應填何式？",
    "choices": [
      "−7x",
      "14x",
      "−49x",
      "−14x"
    ],
    "answerIndex": 3,
    "explanation": "利用(a−b)²=a²−2ab+b²，令a=x、b=7，交叉部分是−2×x×7=−14x，所以空格應填−14x。−7x少乘2；14x符號相反；−49x把常數平方誤放到一次項。完整展開應同時保留x²、−14x與49，三個部分的次數也要正確。",
    "steps": [
      "令a=x、b=7。",
      "計算−2ab=−2×x×7。",
      "空格填入−14x。"
    ],
    "commonMistake": "只計算x×7或忽略減號，會寫成−7x或14x。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  },
  {
    "questionId": "u10-s009-v005",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "若 x² − 12x + 36 = (x − k)²，則 k 為何？",
    "choices": [
      "6",
      "12",
      "36",
      "3"
    ],
    "answerIndex": 0,
    "explanation": "展開(x−k)²可得x²−2kx+k²。比較一次項係數，−2k=−12，所以k=6；再檢查6²=36，也符合常數項。12只是一次項係數的絕對值，36是k的平方，3無法符合兩個條件。",
    "steps": [
      "寫出x²−2kx+k²。",
      "由−2k=−12求得k=6。",
      "確認k²等於36。"
    ],
    "commonMistake": "把12直接當成k，忽略一次項係數是−2k。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  },
  {
    "questionId": "u10-s009-v006",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "展開 (x − 1)² 時，x 項的係數是多少？",
    "choices": [
      "−1",
      "−2",
      "1",
      "2"
    ],
    "answerIndex": 1,
    "explanation": "(x−1)²=x²−2×x×1+1²，所以一次項是−2x，x項係數為−2。−1少乘公式中的2；1與2都忽略減號。係數必須同時考慮倍數與正負號，不能只看括號中的1，否則會把一次項的大小或方向判斷錯誤。",
    "steps": [
      "辨認a=x、b=1。",
      "求出交叉部分為−2x。",
      "讀出x項係數−2。"
    ],
    "commonMistake": "只把括號中的−1當係數，沒有計算−2×x×1。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  },
  {
    "questionId": "u10-s009-v007",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "化簡 (4x − 3)² − 16x²，所得式子為何？",
    "choices": [
      "−12x + 9",
      "16x² − 24x + 9",
      "−24x + 9",
      "24x + 9"
    ],
    "answerIndex": 2,
    "explanation": "先展開(4x−3)²=16x²−24x+9，再減去16x²，兩個二次項互相抵消，留下−24x+9。−12x+9少乘2；保留16x²表示尚未完成減法；24x+9把一次項符號寫反。完成相消後不應再出現二次項。",
    "steps": [
      "先展開平方成三項。",
      "減去後面的16x²。",
      "二次項相消後留下−24x+9。"
    ],
    "commonMistake": "展開後忘記減去16x²，或把−24x的負號改成正號。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  },
  {
    "questionId": "u10-s009-v008",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "若 x > 10，正方形邊長由 x 縮短為 x − 10，面積減少多少？",
    "choices": [
      "20x + 100",
      "x² − 20x + 100",
      "10x − 100",
      "20x − 100"
    ],
    "answerIndex": 3,
    "explanation": "原面積是x²，新面積是(x−10)²=x²−20x+100。面積減少量要用原面積減新面積，得到x²−(x²−20x+100)=20x−100。20x+100把括號前的減號分配錯；新面積本身也不能直接當成減少量。",
    "steps": [
      "列出原面積x²。",
      "展開新面積(x−10)²。",
      "用原面積減新面積得到20x−100。"
    ],
    "commonMistake": "把新面積本身當成減少量，沒有計算原面積與新面積的差。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  },
  {
    "questionId": "u10-s009-v009",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "已知 (x − a)² 展開後 x 項係數為 −20，則 a 為何？",
    "choices": [
      "10",
      "20",
      "−10",
      "5"
    ],
    "answerIndex": 0,
    "explanation": "(x−a)²=x²−2ax+a²，所以x項係數是−2a。題目給定係數−20，可列−2a=−20，解得a=10。a=20會產生−40x；a=−10會產生20x；a=5只會產生−10x。代回後可確認常數項是100，整個展開也與條件一致。",
    "steps": [
      "從公式讀出x項係數−2a。",
      "建立方程式−2a=−20。",
      "解得a=10。"
    ],
    "commonMistake": "把−20直接當成a，忽略一次項係數還包含−2。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  },
  {
    "questionId": "u10-s009-v010",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "advanced",
    "text": "下列哪一式平方後等於 x² − 8x + 16？",
    "choices": [
      "(x − 8)²",
      "(x − 4)²",
      "(x + 4)²",
      "(x − 2)²"
    ],
    "answerIndex": 1,
    "explanation": "首項x²表示第一項是x，常數16表示第二項的絕對值是4。因為一次項是−8x，所以括號中要使用減號，且−2×x×4=−8x，因此對應(x−4)²。其他三個式子的中間項或常數都不符合。",
    "steps": [
      "由x²判斷第一項為x。",
      "由16判斷第二項大小為4。",
      "用−8x確認括號是x−4。"
    ],
    "commonMistake": "只看常數16，沒有利用一次項的符號與係數判斷括號。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  },
  {
    "questionId": "u10-s009-v011",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "advanced",
    "text": "若 (2x − 5)² = 4x² − 20x + c，則 c 為何？",
    "choices": [
      "10",
      "20",
      "25",
      "−25"
    ],
    "answerIndex": 2,
    "explanation": "展開(2x−5)²時，首項是(2x)²=4x²，交叉部分是−2×2x×5=−20x，常數項是5²=25。題目已列出前兩項，因此c必須等於25。10與20不是5的平方，−25的符號也不符，因為負數平方後仍為正數。",
    "steps": [
      "把常數5平方。",
      "得到常數項25。",
      "因此c=25。"
    ],
    "commonMistake": "把交叉部分的係數20當成常數，或因括號有減號而寫成−25。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  },
  {
    "questionId": "u10-s009-v012",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "literacy",
    "text": "一正方形邊長 (x − 3) 公分，面積展開後為何？",
    "choices": [
      "x² − 3x + 9",
      "x² + 6x + 9",
      "x² − 9",
      "x² − 6x + 9"
    ],
    "answerIndex": 3,
    "explanation": "正方形面積等於邊長平方，也就是 (x−3)²。第一項 x²，中間 −2·x·3=−6x，末項 3²=9，面積 x²−6x+9。x²−3x+9 是 −2·x·3 只算 x·3=3x 漏乘 2；x²+6x+9 則中間項符號弄反變 +6x，跟 (x+3)² 搞混。邊長 x−3 平方中間是 −6x。",
    "steps": [
      "面積 = 邊長² = (x − 3)²。",
      "套用公式：x² − 2·x·3 + 9。",
      "整理得 x² − 6x + 9。"
    ],
    "commonMistake": "−2·x·3 只寫 3x 漏乘 2，或中間項符號弄反寫 +6x。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  }
]

export const U10_LECTURES_S007_S009 = [
  {
    "skillId": "binomial-multiply-basic",
    "topicId": "u10-multiplication-formulas",
    "title": "二項式乘二項式 — 分配律展開, 四項合併, 正負號",
    "concept": "二項式乘二項式沒有捷徑時，用分配律讓第一個括號的每一項去乘第二個括號的每一項，通常會得到四項，再把同次項係數合併。展開後應整理成降冪排列的多項式。計算時要特別注意負號：某一項乘負數時，被乘的每一項符號都要改變。會考常考整數係數與 x 的組合，也可能以長方形面積「長乘寬」出現。",
    "formula": "(A + B)(C + D) = AC + AD + BC + BD",
    "stepGuide": [
      "確認兩個都是二項式，寫成 (A + B)(C + D) 的形式。",
      "用第一項 A 乘整個第二括號，再用第二項 B 乘整個第二括號。",
      "得到四項後，找出同次數的項合併係數。",
      "檢查二次項、一次項、常數項的符號是否正確。",
      "最後按 x 的次數由高到低排列。"
    ],
    "examples": [
      {
        "prompt": "(x + 1)(x + 4) 怎麼展開？",
        "answer": "x² + 5x + 4",
        "why": "用分配律讓第一個括號的兩項各乘第二個括號，得到x²+4x+x+4。中間兩項4x與x是同類項，合併為5x，因此答案是x²+5x+4；四個乘積都不能遺漏。"
      },
      {
        "prompt": "(2x − 1)(x + 3) 怎麼展開？",
        "answer": "2x² + 5x − 3",
        "why": "先用2x與−1分別乘第二個括號，展開為2x²+6x−x−3。再合併6x−x=5x，最後得到2x²+5x−3；負號必須同時帶入−x與−3。每一個乘積都要保留，最後才合併同類項。"
      }
    ],
    "commonMistakes": [
      "只乘兩項就停，漏掉外項或內項。",
      "乘以負數時沒有把括號內每一項都變號。",
      "合併同類項時係數加減算錯。",
      "面積題忘記長乘寬，只把邊長的數字相加。"
    ]
  },
  {
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "title": "完全平方和 — (a+b)², 中間項 2ab, 三項都要寫到",
    "concept": "(a + b)² 展開等於 a² + 2ab + b²，不是 a² + b²。中間項 2ab 來自兩次交叉相乘合併，會考最常錯在漏掉這一項。若 a 或 b 本身帶係數，平方時係數也要平方，中間項的 2 不能忘。正方形面積「邊長平方」也常出現這個公式，展開後要依次數由高到低排列三項。",
    "formula": "(a + b)² = a² + 2ab + b²",
    "stepGuide": [
      "確認型式是 (某式 + 某式)²，兩項中間是加號。",
      "第一項平方得 a²，最後一項平方得 b²。",
      "中間項寫 2 × 第一項 × 第二項。",
      "三項合併，按次數由高到低排列。",
      "若是面積題，先寫邊長平方再展開。"
    ],
    "examples": [
      {
        "prompt": "(x + 6)² 展開？",
        "answer": "x² + 12x + 36",
        "why": "套用(a+b)²=a²+2ab+b²。第一項是x²，中間項為2×x×6=12x，末項為6²=36，所以完整展開是x²+12x+36；不能只寫兩個平方而漏掉中間項。這個中間項來自兩次交叉相乘，是判斷完全平方展開是否完整的關鍵。"
      },
      {
        "prompt": "(3x + 1)² 展開？",
        "answer": "9x² + 6x + 1",
        "why": "把a視為3x、b視為1。先算(3x)²=9x²，再算中間項2×3x×1=6x，最後1²=1，合併得到9x²+6x+1；係數3也必須一起平方。三項都算完後再依次數由高到低排列，不能漏掉任何一項。"
      }
    ],
    "commonMistakes": [
      "把 (a + b)² 寫成 a² + b²，漏掉中間項 2ab。",
      "中間項只寫 ab，忘記前面的係數 2。",
      "帶係數的項平方時，係數沒有平方。",
      "正方形面積只加兩個平方項，沒有交叉項。"
    ]
  },
  {
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "title": "完全平方差 — (a−b)², 中間項 −2ab, 常數項仍為正",
    "concept": "(a − b)² 展開等於 a² − 2ab + b²。與 (a + b)² 的差別在中間項是減 2ab，不是加。最後一項 b² 仍然是正數，因為任何數的平方都不為負。帶係數時 (3x − 2)² 要算 (3x)²、−2·3x·2、2² 三項，符號逐步檢查。正方形邊長帶減號時，面積仍要完整展開三項，不可只寫兩個平方相減。",
    "formula": "(a − b)² = a² − 2ab + b²",
    "stepGuide": [
      "確認括號內兩項中間是減號，整體有平方。",
      "第一項平方得 a²。",
      "中間項寫 −2 × 第一項 × 第二項，符號是減。",
      "第二項平方得 b²，仍是正數。",
      "三項合併後按降冪排列。"
    ],
    "examples": [
      {
        "prompt": "(x − 6)² 展開？",
        "answer": "x² − 12x + 36",
        "why": "套用(a−b)²=a²−2ab+b²。第一項為x²，中間項是−2×x×6=−12x，末項6²=36，因此答案是x²−12x+36；最後一項仍是正數。減號只影響中間項，常數平方仍為正數，三項都必須完整寫出。"
      },
      {
        "prompt": "(3x − 1)² 展開？",
        "answer": "9x² − 6x + 1",
        "why": "把a視為3x、b視為1。第一項(3x)²=9x²，中間項−2×3x×1=−6x，末項1²=1，所以展開為9x²−6x+1；不能把末項誤寫成負1。減號只出現在中間項前，平方後的常數項仍然是正數。"
      }
    ],
    "commonMistakes": [
      "中間項寫成 +2ab，與 (a + b)² 搞混。",
      "中間項只寫 −ab，漏乘係數 2。",
      "以為 b² 會因減號變成 −b²。",
      "帶係數的項平方時，係數沒有平方。"
    ]
  }
];
