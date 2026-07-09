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
    "explanation": "兩個括號相乘後合併同類項，x·x = x²，x·3 = 3x，2·x = 2x，2·3 = 6，合併 3x + 2x = 5x，整理成 x² + 5x + 6，x² + 6x + 5 把常數項與一次項係數對調，得 x² + 5x + 6。2x² + 5x + 6 把第一項當成 2x²；x² + 5x − 6 常數項符號錯，都是分配律或合併時出錯。",
    "steps": [
      "x 乘 x + 3：x² + 3x。",
      "2 乘 x + 3：2x + 6。",
      "合併同類項：x² + 5x + 6。"
    ],
    "commonMistake": "只乘兩項就停，漏掉外項或內項，合併一次項時係數加錯。",
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
    "explanation": "兩個括號相乘後合併同類項，x·x = x²，x·4 = 4x，(−1)·x = −x，(−1)·4 = −4，合併 4x − x = 3x，整理成 x² + 3x − 4，x² + 5x − 4 把 −x 當 +x，得 x² + 3x − 4。x² − 3x − 4 一次項符號反了；x² + 4x − 1 常數與一次項係數都錯，顯示去括號時負號沒帶到每一項。",
    "steps": [
      "x 乘 x + 4：x² + 4x。",
      "−1 乘 x + 4：−x − 4。",
      "合併：x² + 3x − 4。"
    ],
    "commonMistake": "乘以 −1 時只變第一項符號，漏把 +4 也改成 −4。",
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
    "explanation": "就「(2x + 1)(x + 2) 展開後為何」而言，兩個括號相乘後合併同類項，2x·x = 2x²，2x·2 = 4x，1·x = x，1·2 = 2，合併 4x + x = 5x，整理成 2x² + 5x + 2，3x² + 5x + 2 把 2x 與 x 的乘積搞成 3x²，得 2x² + 5x + 2。2x² + 3x + 2 少加一次項；2x² + 4x + 1 漏加 1·x 這一項，分配律沒乘完整。",
    "steps": [
      "2x 乘 x + 2：2x² + 4x。",
      "1 乘 x + 2：x + 2。",
      "合併：2x² + 5x + 2。"
    ],
    "commonMistake": "2x² + 3x + 2 少加一次項；3x² + 5x + 2 把 2x 與 x 的乘積搞成 3x²。",
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
    "explanation": "兩個括號相乘後合併同類項，x·x = x²，x·(−2) = −2x，(−3)·x = −3x，(−3)·(−2) = 6，合併 −2x − 3x = −5x，整理成 x² − 5x + 6，x² − 5x − 6 把 (−3)(−2) 算成 −6，得 x² − 5x + 6。x² + 5x + 6 一次項符號全反；x² − 6x + 5 常數與一次項係數對調，都是負負得正或合併時出錯。",
    "steps": [
      "x 乘 x − 2：x² − 2x。",
      "−3 乘 x − 2：−3x + 6。",
      "合併：x² − 5x + 6。"
    ],
    "commonMistake": "兩個負數相乘得正數 6，卻寫成 −6 當常數項。",
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
    "explanation": "就「(3x + 2)(x − 1) 展開後為何」而言，兩個括號相乘後合併同類項，3x·x = 3x²，3x·(−1) = −3x，2·x = 2x，2·(−1) = −2，合併 −3x + 2x = −x，整理成 3x² − x − 2，3x² + x − 2 把 −3x 當 +3x，4x² − x − 2 把 3x 與 x 係數直接相加成 4x²，沒有正確做項乘項，得 3x² − x − 2。3x² − 5x − 2 一次項合併錯。",
    "steps": [
      "3x 乘 x − 1：3x² − 3x。",
      "2 乘 x − 1：2x − 2。",
      "合併：3x² − x − 2。"
    ],
    "commonMistake": "3x 乘 −1 得 −3x，卻寫成 +3x，一次項符號整個反了。",
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
    "explanation": "就「(x + 5)(2x − 1) 展開後為何」而言，兩個括號相乘後合併同類項，x·2x = 2x²，x·(−1) = −x，5·2x = 10x，5·(−1) = −5，合併 −x + 10x = 9x，整理成 2x² + 9x − 5，3x² + 9x − 5 把 x·2x 算成 3x²，得 2x² + 9x − 5。2x² + 10x − 5 漏加 x·(−1)；2x² + 9x + 5 常數項符號錯，5 乘 −1 應得 −5。計算時每一項係數與正負號都要算清楚。",
    "steps": [
      "x 乘 2x − 1：2x² − x。",
      "5 乘 2x − 1：10x − 5。",
      "合併：2x² + 9x − 5。"
    ],
    "commonMistake": "2x² + 10x − 5 漏加 x·(−1)；2x² + 9x + 5 常數項符號錯，5 乘 −1 應得 −5，化簡時粗心漏項或算錯係數就容易選錯。",
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
    "explanation": "就「(x − 4)(x + 7) 展開後為何」而言，兩個括號相乘後合併同類項，x·x = x²，x·7 = 7x，(−4)·x = −4x，(−4)·7 = −28，合併 7x − 4x = 3x，整理成 x² + 3x − 28，x² − 3x − 28 把 7x 也變負，得 x² + 3x − 28。x² + 11x − 28 把係數相加而非相減；x² + 3x + 28 常數項符號錯，(−4)(7) 應為 −28。",
    "steps": [
      "x 乘 x + 7：x² + 7x。",
      "−4 乘 x + 7：−4x − 28。",
      "合併：x² + 3x − 28。"
    ],
    "commonMistake": "一次項 7x 與 −4x 合併時減法搞反，寫成 −11x 或 −3x。",
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
    "explanation": "就「(2x − 3)(x + 1) 展開後為何」而言，兩個括號相乘後合併同類項，2x·x = 2x²，2x·1 = 2x，(−3)·x = −3x，(−3)·1 = −3，合併 2x − 3x = −x，整理成 2x² − x − 3，2x² + x − 3 把 −3x 當 +3x，3x² − x − 3 把 2x·x 算成 3x²，係數相乘與項乘項混淆，得 2x² − x − 3。2x² − 5x − 3 一次項合併錯。",
    "steps": [
      "2x 乘 x + 1：2x² + 2x。",
      "−3 乘 x + 1：−3x − 3。",
      "合併：2x² − x − 3。"
    ],
    "commonMistake": "2x 與 −3x 合併寫成 +x，一次項正負判斷錯誤。",
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
    "explanation": "就「(x + 6)(x − 1) 展開後為何」而言，兩個括號相乘後合併同類項，x·x = x²，x·(−1) = −x，6·x = 6x，6·(−1) = −6，合併 −x + 6x = 5x，整理成 x² + 5x − 6，x² + 7x − 6 把 −x 當 +x 再加，得 x² + 5x − 6。x² − 5x − 6 一次項符號反；x² + 5x + 6 常數項符號錯，6 乘 −1 應得 −6 不是 +6。",
    "steps": [
      "x 乘 x − 1：x² − x。",
      "6 乘 x − 1：6x − 6。",
      "合併：x² + 5x − 6。"
    ],
    "commonMistake": "6 乘 −1 寫成 +6，常數項正負號與分配律結果不符。",
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
    "explanation": "就「(3x − 1)(2x + 3) 展開後為何」而言，兩個括號相乘後合併同類項，3x·2x = 6x²，3x·3 = 9x，(−1)·2x = −2x，(−1)·3 = −3，合併 9x − 2x = 7x，整理成 6x² + 7x − 3，6x² + 11x − 3 把 9x 與 −2x 加成 11x，得 6x² + 7x − 3。5x² + 7x − 3 二次項係數錯；6x² + 7x + 3 常數項符號錯，(−1)(3) 應為 −3。計算時每一項係數與正負號都要算清楚。",
    "steps": [
      "3x 乘 2x + 3：6x² + 9x。",
      "−1 乘 2x + 3：−2x − 3。",
      "合併：6x² + 7x − 3。"
    ],
    "commonMistake": "5x² + 7x − 3 二次項係數錯；6x² + 7x + 3 常數項符號錯，(−1)(3) 應為 −3。",
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
    "explanation": "就「(x − 2)(3x + 4) 展開後為何」而言，兩個括號相乘後合併同類項，x·3x = 3x²，x·4 = 4x，(−2)·3x = −6x，(−2)·4 = −8，合併 4x − 6x = −2x，整理成 3x² − 2x − 8，3x² − 6x − 8 沒合併 4x 與 −6x，直接留 −6x，得 3x² − 2x − 8。3x² + 2x − 8 一次項符號反；4x² − 2x − 8 二次項係數錯。",
    "steps": [
      "x 乘 3x + 4：3x² + 4x。",
      "−2 乘 3x + 4：−6x − 8。",
      "合併：3x² − 2x − 8。"
    ],
    "commonMistake": "4x 與 −6x 合併時算成 +2x 或忘記合併只留 −6x。",
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
    "explanation": "長方形面積等於長乘寬，(x + 2)(x + 3) 展開得 x² + 5x + 6。x² + 5x + 5 常數項少 1。x² + 6x + 5 一次項與常數對調，都是沒把面積公式與分配律展開連在一起。2x² + 5x + 6 把長寬直接相加當係數。",
    "steps": [
      "面積 = 長 × 寬 = (x + 2)(x + 3)。",
      "分配律展開：x² + 3x + 2x + 6。",
      "合併得 x² + 5x + 6。"
    ],
    "commonMistake": "面積題只把長寬的常數 2 與 3 相加，沒做完整的二項式乘法。",
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
    "explanation": "就「(x + 3)² 展開後為何」而言，用完全平方和公式展開，(x + 3)² = (x + 3)(x + 3) = x² + 3x + 3x + 9 = x² + 6x + 9，x² + 3x + 9 只加一次 3x，得 x² + 6x + 9。x² + 9 漏掉中間項 2·x·3 = 6x；x² + 6x + 6 常數項 3² 算成 6，都是完全平方公式展開不完整。",
    "steps": [
      "寫成 (x + 3)(x + 3)。",
      "展開：x² + 3x + 3x + 9。",
      "合併一次項：x² + 6x + 9。"
    ],
    "commonMistake": "x² + 9 漏掉中間項 2·x·3 = 6x；x² + 6x + 6 常數項 3² 算成 6，都是完全平方公式展開不完整。",
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
    "explanation": "就「(2x + 1)² 展開後為何」而言，用完全平方和公式展開，(2x)² = 4x²，2·2x·1 = 4x，1² = 1，整理成 4x² + 4x + 1，2x² + 4x + 1 把 (2x)² 算成 2x²，4x² + 4x + 2 常數項 1² 算成 2，係數平方與中間項係數都要仔細算，得 4x² + 4x + 1。4x² + 2x + 1 中間項只寫 2x 沒乘 2。",
    "steps": [
      "第一項平方：(2x)² = 4x²。",
      "中間項 2·2x·1 = 4x。",
      "第二項平方：1² = 1，合併 4x² + 4x + 1。"
    ],
    "commonMistake": "4x² + 2x + 1 中間項只寫 2x 沒乘 2，化簡時粗心漏項或算錯係數就容易選錯。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s008-v003",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "basic",
    "text": "(x + 5)² 展開後為何？",
    "choices": [
      "x² + 10x + 10",
      "x² + 25",
      "x² + 10x + 25",
      "x² + 5x + 25"
    ],
    "answerIndex": 2,
    "explanation": "就「(x + 5)² 展開後為何」而言，用完全平方和公式展開，x² + 2·x·5 + 5² = x² + 10x + 25，x² + 10x + 10 把 5² 算成 10，得 x² + 10x + 25。x² + 25 漏中間項 10x；x² + 5x + 25 中間項只寫 5x 沒乘 2，完全平方公式。計算時每一項係數與正負號都要算清楚。",
    "steps": [
      "x² 是第一項平方。",
      "2·x·5 = 10x 是中間項。",
      "5² = 25，寫成 x² + 10x + 25。"
    ],
    "commonMistake": "x² + 25 漏中間項 10x；x² + 5x + 25 中間項只寫 5x 沒乘 2，完全平方公式。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s008-v004",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "basic",
    "text": "(3x + 2)² 展開後為何？",
    "choices": [
      "9x² + 6x + 4",
      "6x² + 12x + 4",
      "9x² + 12x + 2",
      "9x² + 12x + 4"
    ],
    "answerIndex": 3,
    "explanation": "用完全平方和公式展開，(3x)² = 9x²，2·3x·2 = 12x，2² = 4，整理成 9x² + 12x + 4，9x² + 6x + 4 中間項只乘一次 3x·2，得 9x² + 12x + 4。6x² + 12x + 4 二次項係數錯；9x² + 12x + 2 常數項 2² 算成 2，都是公式三項中某一項計算漏步。",
    "steps": [
      "(3x)² = 9x²。",
      "2·3x·2 = 12x。",
      "2² = 4，整理成 9x² + 12x + 4。"
    ],
    "commonMistake": "6x² + 12x + 4 二次項係數錯；9x² + 12x + 2 常數項 2² 算成 2，都是公式三項中某一項計算漏步。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s008-v005",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "(x + 7)² 展開後為何？",
    "choices": [
      "x² + 14x + 49",
      "x² + 7x + 49",
      "x² + 49",
      "x² + 14x + 14"
    ],
    "answerIndex": 0,
    "explanation": "就「(x + 7)² 展開後為何」而言，用完全平方和公式展開，x² + 2·x·7 + 7² = x² + 14x + 49，得 x² + 14x + 49。x² + 7x + 49 中間項少乘 2；x² + 49 完全漏掉一次項。計算時每一項係數與正負號都要算清楚。",
    "steps": [
      "第一項 x² 不變。",
      "中間項 2·x·7 = 14x。",
      "常數 7² = 49，整理成 x² + 14x + 49。"
    ],
    "commonMistake": "x² + 7x + 49 中間項少乘 2；x² + 49 完全漏掉一次項。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s008-v006",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "(4x + 1)² 展開後為何？",
    "choices": [
      "16x² + 4x + 1",
      "16x² + 8x + 1",
      "8x² + 8x + 1",
      "16x² + 8x + 2"
    ],
    "answerIndex": 1,
    "explanation": "就「(4x + 1)² 展開後為何」而言，用完全平方和公式展開，(4x)² = 16x²，2·4x·1 = 8x，1² = 1，整理成 16x² + 8x + 1，8x² + 8x + 1 二次項係數沒平方，得 16x² + 8x + 1。16x² + 4x + 1 中間項只寫 4x；16x² + 8x + 2 常數項錯，1² 仍是 1 不是 2。計算時每一項係數與正負號都要算清楚。",
    "steps": [
      "(4x)² = 16x²。",
      "2·4x·1 = 8x。",
      "1² = 1，合併 16x² + 8x + 1。"
    ],
    "commonMistake": "16x² + 4x + 1 中間項只寫 4x；16x² + 8x + 2 常數項錯，1² 仍是 1 不是 2。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s008-v007",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "(x + 2)² 展開後為何？",
    "choices": [
      "x² + 2x + 4",
      "x² + 4",
      "x² + 4x + 4",
      "x² + 4x + 2"
    ],
    "answerIndex": 2,
    "explanation": "就「(x + 2)² 展開後為何」而言，用完全平方和公式展開，x² + 2·x·2 + 2² = x² + 4x + 4，x² + 4x + 2 常數 2² 算成 2，完全平方展開三項都要到位，得 x² + 4x + 4。x² + 2x + 4 中間項只寫 x·2；x² + 4 漏掉一次項。",
    "steps": [
      "x² 是第一項。",
      "2·x·2 = 4x 是中間項。",
      "2² = 4，整理成 x² + 4x + 4。"
    ],
    "commonMistake": "x² + 2x + 4 中間項只寫 x·2；x² + 4 漏掉一次項，化簡時粗心漏項或算錯係數就容易選錯。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s008-v008",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "(5x + 2)² 展開後為何？",
    "choices": [
      "25x² + 10x + 4",
      "10x² + 20x + 4",
      "25x² + 20x + 2",
      "25x² + 20x + 4"
    ],
    "answerIndex": 3,
    "explanation": "就「(5x + 2)² 展開後為何」而言，用完全平方和公式展開，(5x)² = 25x²，2·5x·2 = 20x，2² = 4，整理成 25x² + 20x + 4，25x² + 20x + 2 常數項 2² 算成 2，得 25x² + 20x + 4。25x² + 10x + 4 中間項只寫 5x·2；10x² + 20x + 4 二次項係數錯。計算時每一項係數與正負號都要算清楚。",
    "steps": [
      "(5x)² = 25x²。",
      "2·5x·2 = 20x。",
      "2² = 4，整理成 25x² + 20x + 4。"
    ],
    "commonMistake": "5x 與 2 的中間項只寫 10x，忘記公式前面還有係數 2。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s008-v009",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "(x + 1)² 展開後為何？",
    "choices": [
      "x² + 2x + 1",
      "x² + 1",
      "x² + x + 1",
      "x² + 2x + 2"
    ],
    "answerIndex": 0,
    "explanation": "就「(x + 1)² 展開後為何」而言，用完全平方和公式展開，x² + 2·x·1 + 1² = x² + 2x + 1，x² + 2x + 2 常數 1² 算成 2，最簡單的完全平方也要寫出三項，得 x² + 2x + 1。x² + 1 漏中間項 2x；x² + x + 1 中間項少乘 2。",
    "steps": [
      "x² 是第一項平方。",
      "2·x·1 = 2x。",
      "1² = 1，整理成 x² + 2x + 1。"
    ],
    "commonMistake": "x² + 1 漏中間項 2x；x² + x + 1 中間項少乘 2，化簡時粗心漏項或算錯係數就容易選錯。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s008-v010",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "advanced",
    "text": "(2x + 3)² 展開後為何？",
    "choices": [
      "4x² + 6x + 9",
      "4x² + 12x + 9",
      "2x² + 12x + 9",
      "4x² + 12x + 6"
    ],
    "answerIndex": 1,
    "explanation": "就「(2x + 3)² 展開後為何」而言，用完全平方和公式展開，(2x)² = 4x²，2·2x·3 = 12x，3² = 9，整理成 4x² + 12x + 9，4x² + 12x + 6 常數 3² 算成 6，每一項都要按公式算，得 4x² + 12x + 9。4x² + 6x + 9 中間項只寫 2x·3；2x² + 12x + 9 二次項錯。計算時每一項係數與正負號都要算清楚。",
    "steps": [
      "(2x)² = 4x²。",
      "2·2x·3 = 12x。",
      "3² = 9，整理成 4x² + 12x + 9。"
    ],
    "commonMistake": "2x 與 3 相乘得 6x，卻忘記中間項還要再乘 2。",
    "concept": "(a + b)² = a² + 2ab + b²，展開時要有中間項 2ab，不可只寫 a² + b²；代入文字或代數式時逐步計算"
  },
  {
    "questionId": "u10-s008-v011",
    "skillId": "square-sum-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "advanced",
    "text": "(x + 4)² 展開後為何？",
    "choices": [
      "x² + 4x + 16",
      "x² + 16",
      "x² + 8x + 16",
      "x² + 8x + 8"
    ],
    "answerIndex": 2,
    "explanation": "就「(x + 4)² 展開後為何」而言，用完全平方和公式展開，x² + 2·x·4 + 4² = x² + 8x + 16，x² + 8x + 8 常數 4² 算成 8，得 x² + 8x + 16。x² + 4x + 16 中間項少乘 2；x² + 16 漏一次項。計算時每一項係數與正負號都要算清楚。",
    "steps": [
      "x² 保留。",
      "2·x·4 = 8x。",
      "4² = 16，整理成 x² + 8x + 16。"
    ],
    "commonMistake": "x² + 4x + 16 中間項少乘 2；x² + 16 漏一次項，化簡時粗心漏項或算錯係數就容易選錯。",
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
    "explanation": "就「一正方形邊長 (x + 4) 公分，面積展開後為何」而言，用完全平方和公式展開，x² + 8x + 8 常數 4² 算成 8，面積題要套用 (a + b)² 完整三項，得 x² + 8x + 16。正方形面積是邊長平方，(x + 4)² = x² + 8x + 16；x² + 4x + 16 中間項只寫 x·4。",
    "steps": [
      "面積 = 邊長² = (x + 4)²。",
      "套用公式：x² + 2·x·4 + 16。",
      "整理得 x² + 8x + 16。"
    ],
    "commonMistake": "正方形面積只寫 x² + 4²，漏掉邊長相乘產生的 8x。",
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
    "explanation": "就「(x − 2)² 展開後為何」而言，用完全平方差公式展開，(x − 2)² = x² − 2·x·2 + 2² = x² − 4x + 4，得 x² − 4x + 4。x² + 4x + 4 中間項符號錯，減號平方不是加 4x；x² − 4 漏中間項。計算時每一項係數與正負號都要算清楚。",
    "steps": [
      "第一項 x²。",
      "中間項 −2·x·2 = −4x。",
      "常數 2² = 4，整理成 x² − 4x + 4。"
    ],
    "commonMistake": "(x − 2)² 中間項寫成 +4x，把減號平方的符號弄反。",
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
    "explanation": "用完全平方差公式展開，x² − 2·x·5 + 5² = x² − 10x + 25，x² + 10x + 25 中間項變加號，得 x² − 10x + 25。x² − 5x + 25 中間項少乘 2；x² − 25 漏一次項，減號平方公式與加號平方差在中間項符號上完全不同。",
    "steps": [
      "x² 是第一項。",
      "−2·x·5 = −10x。",
      "5² = 25，整理成 x² − 10x + 25。"
    ],
    "commonMistake": "x² − 5x + 25 中間項少乘 2；x² − 25 漏一次項，減號平方公式與加號平方差在中間項符號上完全不同。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  },
  {
    "questionId": "u10-s009-v003",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "basic",
    "text": "(2x − 1)² 展開後為何？",
    "choices": [
      "4x² − 2x + 1",
      "2x² − 4x + 1",
      "4x² − 4x + 1",
      "4x² + 4x + 1"
    ],
    "answerIndex": 2,
    "explanation": "就「(2x − 1)² 展開後為何」而言，用完全平方差公式展開，(2x)² − 2·2x·1 + 1² = 4x² − 4x + 1，得 4x² − 4x + 1。4x² − 2x + 1 中間項只寫 2x·1；2x² − 4x + 1 二次項係數錯。計算時每一項係數與正負號都要算清楚。",
    "steps": [
      "(2x)² = 4x²。",
      "−2·2x·1 = −4x。",
      "1² = 1，整理成 4x² − 4x + 1。"
    ],
    "commonMistake": "看到減號就以為整式變負，卻把中間項寫成 +4x。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  },
  {
    "questionId": "u10-s009-v004",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "basic",
    "text": "(x − 7)² 展開後為何？",
    "choices": [
      "x² − 7x + 49",
      "x² + 14x + 49",
      "x² − 49",
      "x² − 14x + 49"
    ],
    "answerIndex": 3,
    "explanation": "就「(x − 7)² 展開後為何」而言，用完全平方差公式展開，x² − 2·x·7 + 7² = x² − 14x + 49，得 x² − 14x + 49。x² − 7x + 49 中間項少乘 2；x² + 14x + 49 符號全反。計算時每一項係數與正負號都要算清楚。",
    "steps": [
      "x² 保留。",
      "−2·x·7 = −14x。",
      "7² = 49，整理成 x² − 14x + 49。"
    ],
    "commonMistake": "最後一項 7² 寫成 −49，誤以為減號會讓平方變負。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  },
  {
    "questionId": "u10-s009-v005",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "(3x − 2)² 展開後為何？",
    "choices": [
      "9x² − 12x + 4",
      "9x² − 6x + 4",
      "9x² + 12x + 4",
      "6x² − 12x + 4"
    ],
    "answerIndex": 0,
    "explanation": "就「(3x − 2)² 展開後為何」而言，用完全平方差公式展開，(3x)² − 2·3x·2 + 2² = 9x² − 12x + 4，6x² − 12x + 4 二次項係數沒平方，三項都要按 (a − b)² 逐步計算，得 9x² − 12x + 4。9x² − 6x + 4 中間項只寫 3x·2；9x² + 12x + 4 中間項符號錯。",
    "steps": [
      "(3x)² = 9x²。",
      "−2·3x·2 = −12x。",
      "2² = 4，整理成 9x² − 12x + 4。"
    ],
    "commonMistake": "3x 與 2 的中間項寫 −6x，漏掉公式前面的係數 2。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  },
  {
    "questionId": "u10-s009-v006",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "(x − 1)² 展開後為何？",
    "choices": [
      "x² − x + 1",
      "x² − 2x + 1",
      "x² − 1",
      "x² + 2x + 1"
    ],
    "answerIndex": 1,
    "explanation": "就「(x − 1)² 展開後為何」而言，用完全平方差公式展開，x² − 2·x·1 + 1² = x² − 2x + 1，得 x² − 2x + 1。x² − x + 1 中間項少乘 2；x² − 1 漏一次項。計算時每一項係數與正負號都要算清楚。",
    "steps": [
      "x² 是第一項。",
      "−2·x·1 = −2x。",
      "1² = 1，整理成 x² − 2x + 1。"
    ],
    "commonMistake": "x² + 2x + 1 是 (x + 1)² 的展開，加減號搞混是最常見錯誤。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  },
  {
    "questionId": "u10-s009-v007",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "(4x − 3)² 展開後為何？",
    "choices": [
      "16x² − 12x + 9",
      "16x² + 24x + 9",
      "16x² − 24x + 9",
      "8x² − 24x + 9"
    ],
    "answerIndex": 2,
    "explanation": "就「(4x − 3)² 展開後為何」而言，用完全平方差公式展開，(4x)² − 2·4x·3 + 3² = 16x² − 24x + 9，16x² + 24x + 9 中間項變正，得 16x² − 24x + 9。16x² − 12x + 9 中間項只寫 4x·3；8x² − 24x + 9 二次項係數錯，減號平方每一項都要仔細算。",
    "steps": [
      "(4x)² = 16x²。",
      "−2·4x·3 = −24x。",
      "3² = 9，整理成 16x² − 24x + 9。"
    ],
    "commonMistake": "16x² − 12x + 9 中間項只寫 4x·3；8x² − 24x + 9 二次項係數錯，減號平方每一項都要仔細算。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  },
  {
    "questionId": "u10-s009-v008",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "(x − 10)² 展開後為何？",
    "choices": [
      "x² − 10x + 100",
      "x² + 20x + 100",
      "x² − 100",
      "x² − 20x + 100"
    ],
    "answerIndex": 3,
    "explanation": "就「(x − 10)² 展開後為何」而言，用完全平方差公式展開，x² − 2·x·10 + 10² = x² − 20x + 100，得 x² − 20x + 100。x² − 10x + 100 中間項少乘 2；x² + 20x + 100 符號反。計算時每一項係數與正負號都要算清楚。每一步乘法或合併都要寫清楚，避免算錯係數與符號。",
    "steps": [
      "x² 保留。",
      "−2·x·10 = −20x。",
      "10² = 100，整理成 x² − 20x + 100。"
    ],
    "commonMistake": "中間項只寫 −10x，沒有把 2·x·10 完整算出。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  },
  {
    "questionId": "u10-s009-v009",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "standard",
    "text": "(5x − 2)² 展開後為何？",
    "choices": [
      "25x² − 20x + 4",
      "25x² − 10x + 4",
      "25x² + 20x + 4",
      "10x² − 20x + 4"
    ],
    "answerIndex": 0,
    "explanation": "就「(5x − 2)² 展開後為何」而言，用完全平方差公式展開，(5x)² − 2·5x·2 + 2² = 25x² − 20x + 4，得 25x² − 20x + 4。25x² − 10x + 4 中間項只寫 5x·2；25x² + 20x + 4 中間項符號錯。計算時每一項係數與正負號都要算清楚。",
    "steps": [
      "(5x)² = 25x²。",
      "−2·5x·2 = −20x。",
      "2² = 4，整理成 25x² − 20x + 4。"
    ],
    "commonMistake": "10x² − 20x + 4 二次項係數錯，帶係數的減號平方更要小心。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  },
  {
    "questionId": "u10-s009-v010",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "advanced",
    "text": "(x − 4)² 展開後為何？",
    "choices": [
      "x² − 4x + 16",
      "x² − 8x + 16",
      "x² + 8x + 16",
      "x² − 16"
    ],
    "answerIndex": 1,
    "explanation": "就「(x − 4)² 展開後為何」而言，用完全平方差公式展開，x² − 2·x·4 + 4² = x² − 8x + 16，得 x² − 8x + 16。x² − 4x + 16 中間項少乘 2；x² + 8x + 16 是 (x + 4)²。計算時每一項係數與正負號都要算清楚。每一步乘法或合併都要寫清楚，避免算錯係數與符號。",
    "steps": [
      "x² 是第一項。",
      "−2·x·4 = −8x。",
      "4² = 16，整理成 x² − 8x + 16。"
    ],
    "commonMistake": "常數項 4² 寫成 −16，誤以為減號會傳到平方項。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  },
  {
    "questionId": "u10-s009-v011",
    "skillId": "square-difference-formula",
    "topicId": "u10-multiplication-formulas",
    "difficulty": "advanced",
    "text": "(2x − 5)² 展開後為何？",
    "choices": [
      "4x² − 10x + 25",
      "4x² + 20x + 25",
      "4x² − 20x + 25",
      "4x² − 25"
    ],
    "answerIndex": 2,
    "explanation": "就「(2x − 5)² 展開後為何」而言，用完全平方差公式展開，(2x)² − 2·2x·5 + 5² = 4x² − 20x + 25，得 4x² − 20x + 25。4x² − 10x + 25 中間項只寫 2x·5；4x² + 20x + 25 中間項符號反。計算時每一項係數與正負號都要算清楚。",
    "steps": [
      "(2x)² = 4x²。",
      "−2·2x·5 = −20x。",
      "5² = 25，整理成 4x² − 20x + 25。"
    ],
    "commonMistake": "4x² − 25 漏一次項，完全平方差三項結構固定。",
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
    "explanation": "就「一正方形邊長 (x − 3) 公分，面積展開後為何」而言，用完全平方差公式展開，面積 = (x − 3)² = x² − 6x + 9，得 x² − 6x + 9。x² − 3x + 9 中間項少乘 2；x² + 6x + 9 是邊長 (x + 3) 的面積。計算時每一項係數與正負號都要算清楚。",
    "steps": [
      "面積 = 邊長² = (x − 3)²。",
      "套用公式：x² − 2·x·3 + 9。",
      "整理得 x² − 6x + 9。"
    ],
    "commonMistake": "正方形面積題看到減號就只寫 x² − 9，漏中間項。",
    "concept": "(a − b)² = a² − 2ab + b²，中間項是減 2ab 不是加；最後一項 b² 仍是正數，展開後三項符號要逐步檢查"
  }
];

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
        "why": "x² + 4x + x + 4，合併一次項得 x² + 5x + 4。"
      },
      {
        "prompt": "(2x − 1)(x + 3) 怎麼展開？",
        "answer": "2x² + 5x − 3",
        "why": "2x² + 6x − x − 3，合併 6x − x = 5x。"
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
        "why": "x² + 2·x·6 + 6² = x² + 12x + 36。"
      },
      {
        "prompt": "(3x + 1)² 展開？",
        "answer": "9x² + 6x + 1",
        "why": "(3x)² = 9x²，2·3x·1 = 6x，1² = 1。"
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
        "why": "x² − 2·x·6 + 6² = x² − 12x + 36。"
      },
      {
        "prompt": "(3x − 1)² 展開？",
        "answer": "9x² − 6x + 1",
        "why": "(3x)² = 9x²，−2·3x·1 = −6x，1² = 1。"
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
