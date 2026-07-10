export const U10_PART_S001_S003 = [
  {
    "questionId": "u10-s001-v001",
    "skillId": "polynomial-terms",
    "topicId": "u10-polynomial-basics",
    "difficulty": "basic",
    "text": "下列哪一個是單項式？",
    "choices": [
      "3x²",
      "x + 1",
      "x − y",
      "x² + y²"
    ],
    "answerIndex": 0,
    "explanation": "單項式整個式子只能由一項組成，中間不能有加減把它拆成兩塊。3x² 只有一個乘積項；x + 1 中間有加號，其實是兩項；x − y 被減號分成 x 與 y 兩項，都不是單項式。",
    "steps": [
      "單項式只能有一項。",
      "3x² 沒有加減號分出的第二項。",
      "因此 3x² 是單項式。"
    ],
    "commonMistake": "看到 x − y 只有兩個字母就以為是一項，沒注意到減號已把式子拆成兩項。",
    "concept": "單項式、多項式、係數、次數、同類項的定義與辨識"
  },
  {
    "questionId": "u10-s001-v002",
    "skillId": "polynomial-terms",
    "topicId": "u10-polynomial-basics",
    "difficulty": "basic",
    "text": "單項式 −5x³ 的係數是多少？",
    "choices": [
      "3",
      "−5",
      "x³",
      "−5x³"
    ],
    "answerIndex": 1,
    "explanation": "單項式 −5x³ 的係數是 x³ 前面那個含正負號的數字，也就是 −5。3 是 x 的次數不是係數；−5x³ 是整個單項式本身，不是係數這個概念。",
    "steps": [
      "找 x³ 前面的數。",
      "含符號寫 −5。",
      "係數是 −5。"
    ],
    "commonMistake": "係數只寫 5 而漏掉負號，或把次數 3 當成係數。",
    "concept": "單項式、多項式、係數、次數、同類項的定義與辨識"
  },
  {
    "questionId": "u10-s001-v003",
    "skillId": "polynomial-terms",
    "topicId": "u10-polynomial-basics",
    "difficulty": "basic",
    "text": "單項式 4x²y 的次數是多少？",
    "choices": [
      "2",
      "4",
      "3",
      "1"
    ],
    "answerIndex": 2,
    "explanation": "4x²y 中 x 的指數是 2、y 的指數是 1（y 沒寫指數就是 1）。單項式次數要把各字母指數全部加起來：2 + 1 = 3。只拿 2 是忘了把 y 的指數也算進去。",
    "steps": [
      "x 的指數是 2。",
      "y 的指數是 1。",
      "次數 2 + 1 = 3。"
    ],
    "commonMistake": "次數只取 x 的指數 2，沒把 y 的隱含指數 1 加進去。",
    "concept": "單項式、多項式、係數、次數、同類項的定義與辨識"
  },
  {
    "questionId": "u10-s001-v004",
    "skillId": "polynomial-terms",
    "topicId": "u10-polynomial-basics",
    "difficulty": "basic",
    "text": "下列哪兩個是同類項？",
    "choices": [
      "3x 與 3x²",
      "x + y 與 x − y",
      "5 與 5x",
      "2ab 與 −5ba"
    ],
    "answerIndex": 3,
    "explanation": "同類項要看各字母次數是否完全相同。2ab 與 −5ba 只是 a、b 書寫順序不同，都是 a¹b¹，所以是同類項。3x 是 x¹，3x² 是 x²，次數不同；5 與 5x 一個沒有 x、一個有 x，也不能配對。",
    "steps": [
      "比對字母種類與次數。",
      "2ab 與 −5ba 都是 a¹b¹。",
      "兩者是同類項。"
    ],
    "commonMistake": "只看係數或只看字母個數，沒比對各字母次數是否相同。",
    "concept": "單項式、多項式、係數、次數、同類項的定義與辨識"
  },
  {
    "questionId": "u10-s001-v005",
    "skillId": "polynomial-terms",
    "topicId": "u10-polynomial-basics",
    "difficulty": "standard",
    "text": "常數 7 可以視為單項式嗎？",
    "choices": [
      "可以，次數為 0",
      "不可以，沒有未知數",
      "可以，次數為 1",
      "不可以，必須有 x"
    ],
    "answerIndex": 0,
    "explanation": "常數 7 可以看成 7·x⁰，x 的指數 0 代表次數為 0，所以 7 是合法的單項式。「不可以，沒有未知數」忽略了 x⁰ 這種寫法；「次數為 1」則把指數搞錯了。",
    "steps": [
      "常數可看成 x⁰ 的係數。",
      "指數 0 表示次數 0。",
      "7 是次數 0 的單項式。"
    ],
    "commonMistake": "以為單項式一定要有 x，忽略常數項也是單項式。",
    "concept": "單項式、多項式、係數、次數、同類項的定義與辨識"
  },
  {
    "questionId": "u10-s001-v006",
    "skillId": "polynomial-terms",
    "topicId": "u10-polynomial-basics",
    "difficulty": "standard",
    "text": "多項式 2x³ − x + 1 的次數是多少？",
    "choices": [
      "1",
      "3",
      "2",
      "0"
    ],
    "answerIndex": 1,
    "explanation": "多項式 2x³ − x + 1 各項次數分別是 3、1、0，整式的次數取最高次那一項，也就是 x³ 的 3。若答 1 是把 −x 的次數當成整式次數；答 0 則誤用常數項 1 的次數。",
    "steps": [
      "找出各項次數：3、1、0。",
      "最高次是 x³ 的 3。",
      "多項式次數為 3。"
    ],
    "commonMistake": "用項數或常數項次數當整式次數，沒找最高次項。",
    "concept": "單項式、多項式、係數、次數、同類項的定義與辨識"
  },
  {
    "questionId": "u10-s001-v007",
    "skillId": "polynomial-terms",
    "topicId": "u10-polynomial-basics",
    "difficulty": "standard",
    "text": "多項式 3x² − 2x + 5 中，x 這一項的係數是多少？",
    "choices": [
      "3",
      "5",
      "−2",
      "2"
    ],
    "answerIndex": 2,
    "explanation": "在 3x² − 2x + 5 這個三項式裡，x 的一次項是 −2x，係數要把前面的 −2 整個算進去才算對。3 是 x² 項的係數；5 是常數項；2 則漏看了 −2x 前面的負號，只取絕對值。",
    "steps": [
      "找含 x 且 x 的指數為 1 的項。",
      "該項是 −2x。",
      "係數是 −2。"
    ],
    "commonMistake": "x 項係數只寫 2，去括號變號錯或漏看減號。",
    "concept": "單項式、多項式、係數、次數、同類項的定義與辨識"
  },
  {
    "questionId": "u10-s001-v008",
    "skillId": "polynomial-terms",
    "topicId": "u10-polynomial-basics",
    "difficulty": "standard",
    "text": "下列哪一個是多項式？",
    "choices": [
      "5/x",
      "√x",
      "1/(x+1)",
      "2x² − 3x"
    ],
    "answerIndex": 3,
    "explanation": "多項式要求各項指數都是非負整數，且分母不能含未知數。5/x 與 1/(x+1) 分母有 x；√x 指數是 1/2 不是整數。2x² − 3x 兩項都符合，才是多項式。",
    "steps": [
      "檢查是否分母有未知數。",
      "檢查指數是否為非負整數。",
      "2x² − 3x 符合，是多項式。"
    ],
    "commonMistake": "把分式或根號式也當多項式，沒檢查指數與分母。",
    "concept": "單項式、多項式、係數、次數、同類項的定義與辨識"
  },
  {
    "questionId": "u10-s001-v009",
    "skillId": "polynomial-terms",
    "topicId": "u10-polynomial-basics",
    "difficulty": "standard",
    "text": "化簡前式 4a²b − 2ba²，下列敘述何者正確？",
    "choices": [
      "是同類項，可合併係數",
      "不是同類項",
      "只能合併 a 項",
      "次數不同不能比"
    ],
    "answerIndex": 0,
    "explanation": "4a²b 與 −2ba² 比對：a 都是 2 次、b 都是 1 次，字母順序不同不影響判斷，兩者同類，係數 4 與 −2 可以合併。「不是同類項」是沒比對指數就下結論。",
    "steps": [
      "比對 a 的次數與 b 的次數。",
      "兩項都是 a²b¹。",
      "是同類項，可合併係數。"
    ],
    "commonMistake": "字母順序不同就判斷不是同類項，沒比對各字母次數。",
    "concept": "單項式、多項式、係數、次數、同類項的定義與辨識"
  },
  {
    "questionId": "u10-s001-v010",
    "skillId": "polynomial-terms",
    "topicId": "u10-polynomial-basics",
    "difficulty": "advanced",
    "text": "正方形邊長 x 公分，面積以 x 表示，下列何者正確？",
    "choices": [
      "2x",
      "x²",
      "4x",
      "x + x"
    ],
    "answerIndex": 1,
    "explanation": "正方形面積 = 邊長 × 邊長，邊長 x 公分時面積是 x × x = x²。2x 是兩條邊相加（周長的一半概念）；4x 是周長 4 倍邊長；x + x 也只是兩邊相加不是相乘。",
    "steps": [
      "面積 = 邊長 × 邊長。",
      "代入 x × x。",
      "寫成 x²。"
    ],
    "commonMistake": "周長與面積公式混淆，把 4x 或 2x 當面積。",
    "concept": "單項式、多項式、係數、次數、同類項的定義與辨識"
  },
  {
    "questionId": "u10-s001-v011",
    "skillId": "polynomial-terms",
    "topicId": "u10-polynomial-basics",
    "difficulty": "advanced",
    "text": "單項式 −3a²b³c 的次數是多少？",
    "choices": [
      "3",
      "5",
      "6",
      "2"
    ],
    "answerIndex": 2,
    "explanation": "−3a²b³c 這個單項式裡，a 指數 2、b 指數 3、c 指數 1，次數規則是把三者全部相加：2 + 3 + 1 = 6。5 可能只加了 a、b 兩個指數就停；3 則只看了 b 的指數，沒把 a 和 c 也算進去。",
    "steps": [
      "a 指數 2，b 指數 3，c 指數 1。",
      "全部相加 2+3+1。",
      "次數是 6。"
    ],
    "commonMistake": "多字母次數只加兩個指數，指數相加錯。",
    "concept": "單項式、多項式、係數、次數、同類項的定義與辨識"
  },
  {
    "questionId": "u10-s001-v012",
    "skillId": "polynomial-terms",
    "topicId": "u10-polynomial-basics",
    "difficulty": "literacy",
    "text": "下列關於 0 的敘述，何者正確？",
    "choices": [
      "0 不是單項式",
      "0 的係數不存在",
      "0 一定是多項式",
      "0 是次數為 0 的單項式"
    ],
    "answerIndex": 3,
    "explanation": "0 可寫成 0·x⁰，係數是 0、次數也是 0，所以 0 是次數為 0 的單項式。「0 不是單項式」忽略了這個定義；「0 一定是多項式」則把單項式與多項式的層級搞混了。",
    "steps": [
      "0 可寫成 0·x⁰。",
      "係數 0，次數 0。",
      "0 是次數 0 的單項式。"
    ],
    "commonMistake": "以為 0 什麼都不是，忽略 0 也是合法單項式。",
    "concept": "單項式、多項式、係數、次數、同類項的定義與辨識"
  },
  {
    "questionId": "u10-s002-v001",
    "skillId": "polynomial-evaluation",
    "topicId": "u10-polynomial-basics",
    "difficulty": "basic",
    "text": "當 x = 2 時，3x + 1 的值是多少？",
    "choices": [
      "7",
      "5",
      "6",
      "8"
    ],
    "answerIndex": 0,
    "explanation": "把 x = 2 放進 3x + 1，先算乘法 3×2 = 6，再把常數 1 加上去得 7。5 則把 2+1 先加後乘，違反先乘後加；6 則只算了 3×2 這一段，後面的 +1 完全漏掉，少加常數。",
    "steps": [
      "把 x 換成 2。",
      "算 3×2 = 6。",
      "6 + 1 = 7。"
    ],
    "commonMistake": "只算出 3×2=6 就停住，忘記把常數 1 加進去。",
    "concept": "將數值代入代數式中的未知數，依運算順序求出數值"
  },
  {
    "questionId": "u10-s002-v002",
    "skillId": "polynomial-evaluation",
    "topicId": "u10-polynomial-basics",
    "difficulty": "basic",
    "text": "當 x = −1 時，x² + 2x 的值是多少？",
    "choices": [
      "1",
      "−1",
      "3",
      "−3"
    ],
    "answerIndex": 1,
    "explanation": "x 取負一時，平方項 (−1)² 等於正一，一次項 2x 等於負二，兩段合併正一加負二等於負一。若只留平方結果一就漏加一次項；若把一次項當正二去加則得三，正負方向整個弄錯了。",
    "steps": [
      "x = −1 代入。",
      "(−1)² = 1，2x = −2。",
      "1 + (−2) = −1。"
    ],
    "commonMistake": "平方算完 1 就直接當答案，沒把 2x = −2 這一段加進去。",
    "concept": "將數值代入代數式中的未知數，依運算順序求出數值"
  },
  {
    "questionId": "u10-s002-v003",
    "skillId": "polynomial-evaluation",
    "topicId": "u10-polynomial-basics",
    "difficulty": "basic",
    "text": "當 a = 3、b = −2 時，2a − b 的值是多少？",
    "choices": [
      "4",
      "0",
      "8",
      "−1"
    ],
    "answerIndex": 2,
    "explanation": "a 取三、b 取負二，先算 2a 得六，再算六減負二變六加二得八。四是把減 b 當減正二；零則把減 b 算成加負二，正負方向整個反了，少加四。",
    "steps": [
      "a=3，b=−2 代入。",
      "2a = 6。",
      "6 − (−2) = 8。"
    ],
    "commonMistake": "減去負數 b 時沒變加，把 6 − (−2) 誤算成 6 − 2 = 4。",
    "concept": "將數值代入代數式中的未知數，依運算順序求出數值"
  },
  {
    "questionId": "u10-s002-v004",
    "skillId": "polynomial-evaluation",
    "topicId": "u10-polynomial-basics",
    "difficulty": "basic",
    "text": "當 x = 0 時，5x² − 3x + 4 的值是多少？",
    "choices": [
      "0",
      "−4",
      "1",
      "4"
    ],
    "answerIndex": 3,
    "explanation": "x 取零時，五次方項與一次項都含 x，乘出來全是零，整式只剩常數四。零是把含 x 的項硬算成非零；負四則把最後常數四的符號弄反，正負搞錯了。",
    "steps": [
      "x = 0 代入。",
      "5×0 與 −3×0 都是 0。",
      "整式值 = 4。"
    ],
    "commonMistake": "x=0 時仍硬算 5x² 或 −3x 得到非零，沒看出兩項都歸零。",
    "concept": "將數值代入代數式中的未知數，依運算順序求出數值"
  },
  {
    "questionId": "u10-s002-v005",
    "skillId": "polynomial-evaluation",
    "topicId": "u10-polynomial-basics",
    "difficulty": "standard",
    "text": "當 x = 3 時，(x + 1)(x − 2) 的值是多少？",
    "choices": [
      "4",
      "2",
      "6",
      "10"
    ],
    "answerIndex": 0,
    "explanation": "x = 3 時，左括號 x + 1 = 4、右括號 x − 2 = 1，兩個括號相乘 4 × 1 = 4。2 則只算完一個括號就停，漏乘另一個；6 則把 4 + 2 或 4 + 1 當成乘法，加減與相乘搞混了，結果不是 4。",
    "steps": [
      "x = 3 代入。",
      "左括號 4，右括號 1。",
      "4 × 1 = 4。"
    ],
    "commonMistake": "只算出 x+1=4 就當最終值，忘了還要乘上 x−2=1。",
    "concept": "將數值代入代數式中的未知數，依運算順序求出數值"
  },
  {
    "questionId": "u10-s002-v006",
    "skillId": "polynomial-evaluation",
    "topicId": "u10-polynomial-basics",
    "difficulty": "standard",
    "text": "當 y = −2 時，y³ − y 的值是多少？",
    "choices": [
      "6",
      "−6",
      "−4",
      "0"
    ],
    "answerIndex": 1,
    "explanation": "y 取負二時，三次方 (−2)³ 等於負八，再減 y 變負八減負二等於負八加二得負六。六是把負六整體變號；負四則減 y 時沒把減負變加，少加二，正負方向弄錯了。",
    "steps": [
      "y = −2。",
      "(−2)³ = −8。",
      "−8 − (−2) = −6。"
    ],
    "commonMistake": "奇次方保留負號後，減 y 時沒把 −(−2) 變成 +2。",
    "concept": "將數值代入代數式中的未知數，依運算順序求出數值"
  },
  {
    "questionId": "u10-s002-v007",
    "skillId": "polynomial-evaluation",
    "topicId": "u10-polynomial-basics",
    "difficulty": "standard",
    "text": "當 x = 1/2 時，4x + 3 的值是多少？",
    "choices": [
      "4",
      "7",
      "5",
      "2"
    ],
    "answerIndex": 2,
    "explanation": "x 取二分之一，先算四乘二分之一得二，再加常數三得五。四是把四 x 誤當四或漏加常數；二則只算乘法段，常數三整段漏加，最後少加三。",
    "steps": [
      "x = 1/2 代入。",
      "4 × 1/2 = 2。",
      "2 + 3 = 5。"
    ],
    "commonMistake": "4×1/2 算完 2 就停，漏加後面的常數 3，最後少加了 3。",
    "concept": "將數值代入代數式中的未知數，依運算順序求出數值"
  },
  {
    "questionId": "u10-s002-v008",
    "skillId": "polynomial-evaluation",
    "topicId": "u10-polynomial-basics",
    "difficulty": "standard",
    "text": "某商店每件 x 元，買 3 件再加手續費 10 元，總價代數式為 3x + 10。若 x = 50，總價多少元？",
    "choices": [
      "150",
      "60",
      "140",
      "160"
    ],
    "answerIndex": 3,
    "explanation": "總價先算三件乘五十得一百五十，再加上固定手續費十元，合計一百六十元。一百五十只算商品價漏加手續費；六十則可能漏乘三件或誤減手續費，兩段都算錯。",
    "steps": [
      "總價 3x + 10。",
      "x = 50 代入。",
      "150 + 10 = 160。"
    ],
    "commonMistake": "3×50 算完 150 就當總價，忘記加上固定手續費 10 元。",
    "concept": "將數值代入代數式中的未知數，依運算順序求出數值"
  },
  {
    "questionId": "u10-s002-v009",
    "skillId": "polynomial-evaluation",
    "topicId": "u10-polynomial-basics",
    "difficulty": "standard",
    "text": "當 x = −3 時，2x² − x − 1 的值是多少？",
    "choices": [
      "20",
      "8",
      "14",
      "−20"
    ],
    "answerIndex": 0,
    "explanation": "x 取負三時，平方得九、二倍平方得十八，負 x 變負負得正三，最後十八加三減一等於二十。八是漏算負 x 那段；十四則把負 x 仍當負三去減，負號沒翻過來。",
    "steps": [
      "x = −3，x² = 9。",
      "2×9 = 18，−x = 3。",
      "18 + 3 − 1 = 20。"
    ],
    "commonMistake": "x 為負時把 −x 仍當 −3，沒有先算出 −x = 3 再加回去。",
    "concept": "將數值代入代數式中的未知數，依運算順序求出數值"
  },
  {
    "questionId": "u10-s002-v010",
    "skillId": "polynomial-evaluation",
    "topicId": "u10-polynomial-basics",
    "difficulty": "advanced",
    "text": "當 m = 2、n = −1 時，m² + mn 的值是多少？",
    "choices": [
      "3",
      "2",
      "4",
      "0"
    ],
    "answerIndex": 1,
    "explanation": "m 取二、n 取負一，平方段得四，乘積段 mn 得負二，兩段相加四加負二得二。三是把 mn 算成正一變四加一；四則只算平方段，乘積段整段漏掉，少加一項。",
    "steps": [
      "m=2，n=−1。",
      "m² = 4，mn = −2。",
      "4 + (−2) = 2。"
    ],
    "commonMistake": "m² 算完 4 就停，沒把 mn = −2 加進去，整段 mn 漏算。",
    "concept": "將數值代入代數式中的未知數，依運算順序求出數值"
  },
  {
    "questionId": "u10-s002-v011",
    "skillId": "polynomial-evaluation",
    "topicId": "u10-polynomial-basics",
    "difficulty": "advanced",
    "text": "當 x = 4 時，−x² + 5 的值是多少？",
    "choices": [
      "11",
      "−21",
      "−11",
      "21"
    ],
    "answerIndex": 2,
    "explanation": "x 取四時，平方得十六，前面負號變負十六，再加五得負十一。十一是把負平方當正十六去加五；二十一则連負號都漏掉變十六加五，正負整個搞錯了。",
    "steps": [
      "x = 4。",
      "x² = 16，−x² = −16。",
      "−16 + 5 = −11。"
    ],
    "commonMistake": "−x² 前面的負號漏看，把 −16+5 誤算成 16+5=21 或 11。",
    "concept": "將數值代入代數式中的未知數，依運算順序求出數值"
  },
  {
    "questionId": "u10-s002-v012",
    "skillId": "polynomial-evaluation",
    "topicId": "u10-polynomial-basics",
    "difficulty": "literacy",
    "text": "已知 f(x) = x² − 3x，求 f(2) 的值。",
    "choices": [
      "2",
      "10",
      "−10",
      "−2"
    ],
    "answerIndex": 3,
    "explanation": "函數在 x 取二時，平方得四、三倍一次項得負六，相減得負二。二是把四減六只取絕對值；十則把減三 x 當加六去加四，正負整個反了，減法變加法。",
    "steps": [
      "f(2) 表示 x = 2。",
      "算 4 − 6。",
      "得 −2。"
    ],
    "commonMistake": "4 − 6 算成 +2，把負號結果誤取成正值。",
    "concept": "將數值代入代數式中的未知數，依運算順序求出數值"
  },
  {
    "questionId": "u10-s003-v001",
    "skillId": "like-terms-combine",
    "topicId": "u10-polynomial-basics",
    "difficulty": "basic",
    "text": "化簡 3x + 5x。",
    "choices": [
      "8x",
      "8x²",
      "15x",
      "15x²"
    ],
    "answerIndex": 0,
    "explanation": "3x 與 5x 字母部分都是 x，屬同類項，係數直接相加 3 + 5 = 8，寫成 8x。8x² 是把指數也加在一起；15x 則誤用 3×5 相乘，同類項合併應加係數不應乘。",
    "steps": [
      "3x 與 5x 是同類項。",
      "係數 3 + 5 = 8。",
      "寫成 8x。"
    ],
    "commonMistake": "同類項合併時把係數 3 和 5 相乘得 15，而不是相加。",
    "concept": "合併同類項：係數相加減，字母部分不變"
  },
  {
    "questionId": "u10-s003-v002",
    "skillId": "like-terms-combine",
    "topicId": "u10-polynomial-basics",
    "difficulty": "basic",
    "text": "化簡 7y − 2y + y。",
    "choices": [
      "5y",
      "6y",
      "4y",
      "9y"
    ],
    "answerIndex": 1,
    "explanation": "三項都是 y 的同類項，單獨寫 y 時係數視為一，合併七減二加一得六 y。五 y 是漏算單獨 y 那項的加一；四 y 則把減二 y 的符號弄錯，正負方向整個搞錯了。",
    "steps": [
      "三項都是 y 的同類項。",
      "係數 7 − 2 + 1。",
      "得 6y。"
    ],
    "commonMistake": "單獨的 y 係數當 0 或漏加，7−2 只算成 5 得 5y。",
    "concept": "合併同類項：係數相加減，字母部分不變"
  },
  {
    "questionId": "u10-s003-v003",
    "skillId": "like-terms-combine",
    "topicId": "u10-polynomial-basics",
    "difficulty": "basic",
    "text": "化簡 4a² + 3a − 2a² + a。",
    "choices": [
      "2a² + 2a",
      "6a² + 4a",
      "2a² + 4a",
      "6a² + 2a"
    ],
    "answerIndex": 2,
    "explanation": "平方項四減二係數得二，一次項三加一係數得四，整理後二 a 平方加四 a。二 a 平方加二 a 是一次項漏加一；六 a 平方加四 a 則平方項誤用四加二，正負搞錯了。",
    "steps": [
      "a² 項 4 − 2 = 2。",
      "a 項 3 + 1 = 4。",
      "寫 2a² + 4a。"
    ],
    "commonMistake": "a 項 3+a 只保留 3 沒加 1，或 a² 項 4−2 誤算成 4+2 得 6a²。",
    "concept": "合併同類項：係數相加減，字母部分不變"
  },
  {
    "questionId": "u10-s003-v004",
    "skillId": "like-terms-combine",
    "topicId": "u10-polynomial-basics",
    "difficulty": "basic",
    "text": "化簡 −5x + 3 − 2x + 7。",
    "choices": [
      "−3x + 10",
      "−7x + 4",
      "−3x + 4",
      "−7x + 10"
    ],
    "answerIndex": 3,
    "explanation": "x 項負五減二係數得負七，常數三加七得十，整理後負七 x 加十。負三 x 加十是把負五減二算成負三；負七 x 加四則常數合併錯，三加七漏算成四。",
    "steps": [
      "合併 x 項 −5 − 2。",
      "合併常數 3 + 7。",
      "得 −7x + 10。"
    ],
    "commonMistake": "合併 x 項時 −5−2 算成 −3，或常數 3+7 漏加算成 4。",
    "concept": "合併同類項：係數相加減，字母部分不變"
  },
  {
    "questionId": "u10-s003-v005",
    "skillId": "like-terms-combine",
    "topicId": "u10-polynomial-basics",
    "difficulty": "standard",
    "text": "化簡 2ab + 5ba − ab。",
    "choices": [
      "6ab",
      "7ab",
      "6a²b²",
      "8ab"
    ],
    "answerIndex": 0,
    "explanation": "ba 與 ab 同類，三項係數二加五減一得六 ab。七 ab 是減 ab 那項的減一漏掉只算二加五；六 a 平方 b 平方則把指數也加在一起，同類項合併只加係數不加指數。",
    "steps": [
      "ba 與 ab 同類。",
      "係數 2 + 5 − 1。",
      "得 6ab。"
    ],
    "commonMistake": "ba 與 ab 視為不同類，或 −ab 的係數 −1 漏算變成 2+5=7。",
    "concept": "合併同類項：係數相加減，字母部分不變"
  },
  {
    "questionId": "u10-s003-v006",
    "skillId": "like-terms-combine",
    "topicId": "u10-polynomial-basics",
    "difficulty": "standard",
    "text": "化簡 3x² − x + 2 − 5x² + 4x。",
    "choices": [
      "2x² + 3x + 2",
      "−2x² + 3x + 2",
      "−2x² − 5x + 2",
      "8x² + 3x + 2"
    ],
    "answerIndex": 1,
    "explanation": "平方項三減五得負二，一次項負一加四得三，常數二保留，整理負二 x 平方加三 x 加二。二 x 平方加三 x 加二是平方項正負反了；負二 x 平方減五 x 加二則一次項算錯。",
    "steps": [
      "x² 項 3 − 5 = −2。",
      "x 項 −1 + 4 = 3。",
      "常數 2，寫 −2x² + 3x + 2。"
    ],
    "commonMistake": "x² 項 3−5 算成 +2 得 2x²，或 x 一次項 −1+4 符號弄錯得 −5x。",
    "concept": "合併同類項：係數相加減，字母部分不變"
  },
  {
    "questionId": "u10-s003-v007",
    "skillId": "like-terms-combine",
    "topicId": "u10-polynomial-basics",
    "difficulty": "standard",
    "text": "下列化簡何者正確？原式 6m − 4n + 2m + n",
    "choices": [
      "8m − 5n",
      "4m − 3n",
      "8m − 3n",
      "10m − 3n"
    ],
    "answerIndex": 2,
    "explanation": "m 項六加二得八 m，n 項負四加一得負三 n，分組合併後得八 m 減三 n。八 m 減五 n 是 n 項負四加一算成負五；四 m 減三 n 則 m 項漏加二 m，少加一項。",
    "steps": [
      "合併 m：6 + 2 = 8。",
      "合併 n：−4 + 1 = −3。",
      "得 8m − 3n。"
    ],
    "commonMistake": "n 項 −4n+n 算成 −5n 少加 1，或 m 項 6+2 漏加算成 4m 少加。",
    "concept": "合併同類項：係數相加減，字母部分不變"
  },
  {
    "questionId": "u10-s003-v008",
    "skillId": "like-terms-combine",
    "topicId": "u10-polynomial-basics",
    "difficulty": "standard",
    "text": "化簡 x² + 3x + 1 − 2x² + x − 4。",
    "choices": [
      "x² + 4x − 3",
      "−x² + 2x − 3",
      "−3x² + 4x − 3",
      "−x² + 4x − 3"
    ],
    "answerIndex": 3,
    "explanation": "平方項一減二係數得負一，一次項三加一得四，常數一減四得負三，整理負 x 平方加四 x 減三。x 平方加四 x 減三是平方項正負反了；負 x 平方加二 x 減三則一次項少加一。",
    "steps": [
      "x² 1 − 2 = −1。",
      "x 3 + 1 = 4。",
      "常數 1 − 4 = −3。"
    ],
    "commonMistake": "x² 項 1−2 算成 +1 得 x²，或 x 項 3+1 只保留 3 漏加得 2x。",
    "concept": "合併同類項：係數相加減，字母部分不變"
  },
  {
    "questionId": "u10-s003-v009",
    "skillId": "like-terms-combine",
    "topicId": "u10-polynomial-basics",
    "difficulty": "standard",
    "text": "長方形長 (2x+1)、寬 x，周長化簡後為何？",
    "choices": [
      "6x + 2",
      "2x² + x",
      "4x + 2",
      "3x + 1"
    ],
    "answerIndex": 0,
    "explanation": "長加寬得三 x 加一，周長乘二展開得六 x 加二。二 x 平方加 x 是把長乘寬當周長算面積；四 x 加二則周長公式漏乘二或漏加寬，長寬概念整個搞混了。",
    "steps": [
      "長+寬 = 3x + 1。",
      "周長 = 2(3x+1)。",
      "展開得 6x + 2。"
    ],
    "commonMistake": "用長×寬算面積 2x²+x，或周長公式漏乘 2 得 4x+2。",
    "concept": "合併同類項：係數相加減，字母部分不變"
  },
  {
    "questionId": "u10-s003-v010",
    "skillId": "like-terms-combine",
    "topicId": "u10-polynomial-basics",
    "difficulty": "advanced",
    "text": "化簡 −(3x − 2) + 5x。（先展開再合併）",
    "choices": [
      "8x − 2",
      "2x + 2",
      "2x − 2",
      "8x + 2"
    ],
    "answerIndex": 1,
    "explanation": "括號前負號要分配到每一項，展開得負三 x 加二，再加五 x 得二 x 加二。八 x 減二是括號內常數沒變正二；二 x 減二則常數二符號弄反，正負搞錯了。",
    "steps": [
      "−(3x−2) = −3x + 2。",
      "加 5x：2x + 2。",
      "整理得 2x + 2。"
    ],
    "commonMistake": "−(3x−2) 只變 3x 的符號，括號內 −2 沒變 +2，常數漏分配。",
    "concept": "合併同類項：係數相加減，字母部分不變"
  },
  {
    "questionId": "u10-s003-v011",
    "skillId": "like-terms-combine",
    "topicId": "u10-polynomial-basics",
    "difficulty": "advanced",
    "text": "化簡 0.5x + 1.5x。",
    "choices": [
      "2x²",
      "0.65x",
      "2x",
      "2.25x"
    ],
    "answerIndex": 2,
    "explanation": "零點五 x 與一點五 x 是同類項，小數係數直接相加得一點五加零點五得二 x。二 x 平方是把指數也加；零點六五 x 則小數對位錯，二點二五 x 則誤用相乘而非相加。",
    "steps": [
      "兩項都是 x 的同類項。",
      "0.5 + 1.5 = 2。",
      "寫 2x。"
    ],
    "commonMistake": "小數係數 0.5+1.5 對位錯算成 0.65，或誤乘得 2.25x。",
    "concept": "合併同類項：係數相加減，字母部分不變"
  },
  {
    "questionId": "u10-s003-v012",
    "skillId": "like-terms-combine",
    "topicId": "u10-polynomial-basics",
    "difficulty": "literacy",
    "text": "化簡 4p²q − 2pq² + p²q。",
    "choices": [
      "3p²q − 2pq²",
      "5p²q + pq²",
      "3p²q + pq²",
      "5p²q − 2pq²"
    ],
    "answerIndex": 3,
    "explanation": "四 p 平方 q 與 p 平方 q 同類，係數四加一得五 p 平方 q；負二 pq 平方無同類保留。三 p 平方 q 是四加一算成三少加一；五 p 平方 q 加 pq 平方則把減號弄反變加，符號搞錯了。",
    "steps": [
      "4p²q 與 p²q 同類，得 5p²q。",
      "−2pq² 無同類。",
      "寫 5p²q − 2pq²。"
    ],
    "commonMistake": "p²q 與 pq² 字母次數不同卻硬合併，或 4+1 算成 3 得 3p²q。",
    "concept": "合併同類項：係數相加減，字母部分不變"
  }
];

export const U10_LECTURES_S001_S003 = [
  {
    "skillId": "polynomial-terms",
    "topicId": "u10-polynomial-basics",
    "title": "單項式與多項式 — 係數、次數、同類項辨識",
    "concept": "單項式只有一項，多項式有兩項以上；係數是未知數前的數含正負號，常數也可視為次數 0 的單項式。單項式次數為各字母指數之和，多項式次數取最高次項。同類項的字母與各字母次數完全相同，係數可以不同，字母順序不影響判定。",
    "formula": "單項式次數 = 各字母指數之和；多項式次數 = 最高次項次數",
    "stepGuide": [
      "先數項數：一項是單項式，兩項以上是多項式。",
      "找係數時連正負號一起寫，常數項的係數就是它本身。",
      "單項式次數把每個字母指數全部相加。",
      "多項式次數看最高次項，不是項數也不是常數。",
      "判斷同類項要比對每個字母的次數，書寫順序可忽略。"
    ],
    "examples": [
      {
        "prompt": "單項式 −4xy² 的係數與次數各是多少？",
        "answer": "係數 −4，次數 3",
        "why": "係數是 −4；x 指數 1 加 y 指數 2 得次數 3。"
      },
      {
        "prompt": "3x² 與 −5x² 是否同類項？",
        "answer": "是",
        "why": "兩項都是 x²，字母與次數相同，係數不同仍可稱同類項。"
      }
    ],
    "commonMistakes": [
      "係數漏寫負號，把 −3x 的係數寫成 3。",
      "多字母次數只加部分指數，指數相加錯。",
      "字母順序不同就說不是同類項。",
      "把分式或根號式誤判為多項式。"
    ]
  },
  {
    "skillId": "polynomial-evaluation",
    "topicId": "u10-polynomial-basics",
    "title": "代入求值 — 代數式、多未知數、負數與分數代入",
    "concept": "代入求值是把未知數換成给定數字，再依運算順序計算。負數與分數代入時要加括號，避免平方與乘除順序出錯。文字題先依題意列出代數式，再代入數值。多未知數則分別替換後合併，減去負數要改為加法。",
    "formula": "將未知數以括號代入原式，先乘方、再乘除、後加減",
    "stepGuide": [
      "確認要代入哪個未知數、代入什麼數。",
      "負數與分數用括號包住再代入。",
      "依先乘方、再乘除、後加減計算。",
      "減去負數時改成加正數。",
      "最後整理成最簡數值，並回頭看題意是否合理。"
    ],
    "examples": [
      {
        "prompt": "x = −2 時，求 x² − 3x 的值。",
        "answer": "10",
        "why": "(−2)² − 3×(−2) = 4 + 6 = 10，平方與減 x 都要加括號。"
      },
      {
        "prompt": "x = 5 時，2x + 7 的值？",
        "answer": "17",
        "why": "2×5 + 7 = 10 + 7 = 17，先乘 2 再加 7。"
      }
    ],
    "commonMistakes": [
      "負數代入沒括號，(−1)² 算成 −1。",
      "−x² 與 (−x)² 混淆，平方前後負號位置不同。",
      "減去負數沒變加，2a − b 在 b 為負時算錯。",
      "文字題列式後忘加常數項或手續費。"
    ]
  },
  {
    "skillId": "like-terms-combine",
    "topicId": "u10-polynomial-basics",
    "title": "同類項合併 — 係數加減、分組整理、去括號後合併",
    "concept": "合併同類項時，字母與各字母次數保持不變，只把係數加或減。遇到多項式先依相同字母組合分組，常數項也要單獨合併。若有括號，先用分配律去括號再合併。不同字母或次數不同的項不能硬合併，書寫順序不影響同類判定。",
    "formula": "同類項合併：係數相加減，字母部分不變",
    "stepGuide": [
      "找出所有同類項，依 x²、x、常數等分組。",
      "每組只合併係數，字母部分照寫。",
      "單獨出現的字母係數視為 1 或 −1。",
      "有括號時先去括號，注意負號分配。",
      "依次數由高到低寫出最簡結果。"
    ],
    "examples": [
      {
        "prompt": "化簡 5a − 2a + 3。",
        "answer": "3a + 3",
        "why": "a 項係數 5−2=3，常數 3 保留，不同類不動。"
      },
      {
        "prompt": "化簡 2x² − x² + 4x − x。",
        "answer": "x² + 3x",
        "why": "x² 得 1x²，x 得 3x，分組後再寫。"
      }
    ],
    "commonMistakes": [
      "同類項係數誤用乘法而非加減。",
      "p²q 與 pq² 當同類項，指數位置搞混。",
      "去括號變號錯，−(3x−2) 的 +2 沒變號。",
      "常數與 x 項混在一起合併。"
    ]
  }
];
