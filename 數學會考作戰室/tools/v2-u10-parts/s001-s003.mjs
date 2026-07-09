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
    "explanation": "3x² 只有一項，是單項式。x + 1 與 x² + y² 各有兩項，屬多項式。x − y 也是兩項相減，不是單項式。判斷時數出「加減號分開的項數」，只有一項才是單項式。",
    "steps": [
      "單項式只能有一項。",
      "3x² 沒有加減號分出的第二項。",
      "因此 3x² 是單項式。"
    ],
    "commonMistake": "把 x − y 當成單項式，忽略減號其實分出兩項。",
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
    "explanation": "係數是未知數前面的數，含正負號，所以 −5x³ 的係數是 −5。3 是次數不是係數。x³ 是文字部分。−5x³ 是整個單項式，不是係數這個概念。",
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
    "explanation": "次數是各字母指數相加：x 的指數 2 加 y 的指數 1，得 3。2 只算 x 的指數。4 是係數。1 只算 y 的指數，都沒把全部指數加總。次數與係數要分開看，勿把項數當次數。",
    "steps": [
      "x 的指數是 2。",
      "y 的指數是 1。",
      "次數 2 + 1 = 3。"
    ],
    "commonMistake": "次數只取某一字母指數，指數相加錯誤。",
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
    "explanation": "同類項字母與各字母次數都要相同。2ab 與 −5ba 字母都是 a、b 且次數各 1，是同類項。3x 與 3x² 次數不同。x + y 與 x − y 是多項式不是單項比對。5 與 5x 字母部分不同。",
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
    "explanation": "單獨的常數可寫成 7x⁰，視為單項式且次數 0。「沒有未知數就不是」是誤解。次數 1 或一定要有 x 都不符合定義。會考常把 7、−3 這類常數當單項式處理。",
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
    "explanation": "多項式的次數取最高次項的次數。x³ 的次數是 3，比 x 的 1 與常數 1 的 0 都高，所以整式次數是 3。1、2、0 分別對應 x、x²、常數項，都不是最高次。",
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
    "explanation": "x 項是 −2x，係數含符號為 −2。3 是 x² 的係數。5 是常數項。2 漏了負號。讀多項式時要把每一項的係數連正負號一起寫。次數與係數要分開看，勿把項數當次數。",
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
    "explanation": "國中多項式各項係數為常數，未知數指數為非負整數。2x² − 3x 符合。5/x、1/(x+1) 分母含未知數。√x 指數不是整數，都不算多項式。次數與係數要分開看，勿把項數當次數。",
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
    "explanation": "4a²b 與 2ba² 字母 a、b 次數都是 2 與 1，只是書寫順序不同，屬同類項，可合併係數。說不是同類項或次數不同，都是沒看出 ba² 就是 a²b。次數與係數要分開看，勿把項數當次數。",
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
    "explanation": "正方形面積是邊長乘邊長，x × x = x²。2x 是兩倍邊長。4x 像周長四倍誤用。x + x 是兩邊相加不是面積。面積要用乘法，次數會變成 2。次數與係數要分開看，勿把項數當次數。",
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
    "explanation": "把 a、b、c 的指數相加：2 + 3 + 1 = 6。3 只算 b 的指數。5 漏算 c。2 只算 a。多字母單項式次數是全部指數和，不是係數 3。次數與係數要分開看，勿把項數當次數。",
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
    "explanation": "0 可視為係數 0 的單項式，次數為 0。「不是單項式」與「係數不存在」都不對。0 單獨寫是單項式，也可以出現在多項式中，但本身仍是次數 0 的單項式。",
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
    "explanation": "代入 x = 2：3×2 + 1 = 6 + 1 = 7。5 可能是 2+3 順序錯。6 只算 3×2 忘加 1。8 可能把 1 當成乘 2。先乘除後加減，別漏常數項。代入後依運算順序化簡，可得 7。代入時依運算順序先乘除後加減，並把常數項一併算進去。",
    "steps": [
      "把 x 換成 2。",
      "算 3×2 = 6。",
      "6 + 1 = 7。"
    ],
    "commonMistake": "代入後先加 1 再乘 3，運算順序弄錯。",
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
    "explanation": "代入 x = −1：(−1)² + 2×(−1) = 1 − 2 = −1。1 可能把 (−1)² 算成 −1。3 是符號全弄反。−3 是 2x 算成 +2。負數平方是正數，要加括號。代入後依運算順序化簡，可得 −1。代入時依運算順序先乘除後加減，並把常數項一併算進去。",
    "steps": [
      "x = −1 代入。",
      "(−1)² = 1，2x = −2。",
      "1 + (−2) = −1。"
    ],
    "commonMistake": "1 可能把 (−1)² 算成 −1，代入時依運算順序先乘除後加減，並把常數項一併算進去。",
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
    "explanation": "2×3 − (−2) = 6 + 2 = 8。4 可能把 −b 當成減 2 得 4。0 是減號處理全錯。−1 是 2a 也算錯。減去負數要變加法。代入後依運算順序化簡，可得 8。代入時依運算順序先乘除後加減，並把常數項一併算進去。",
    "steps": [
      "a=3，b=−2 代入。",
      "2a = 6。",
      "6 − (−2) = 8。"
    ],
    "commonMistake": "4 可能把 −b 當成減 2 得 4；0 是減號處理全錯。",
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
    "explanation": "x = 0 時，含 x 的項都是 0，只剩常數 4。0 是把整式都當 0。−4 可能只算 −3×0 又減常數。1 是亂加減。代入 0 時先看哪些項會消失。代入後依運算順序化簡，可得 4。",
    "steps": [
      "x = 0 代入。",
      "5×0 與 −3×0 都是 0。",
      "整式值 = 4。"
    ],
    "commonMistake": "x = 0 時以為整式必為 0，忽略常數項 4。",
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
    "explanation": "代入得 (3+1)(3−2) = 4×1 = 4。2 可能只算 x−2。6 可能只算 x+1 又加錯。10 是把兩括號相加。要先各自算括號內，再相乘。代入後依運算順序化簡，可得 4。代入時依運算順序先乘除後加減，並把常數項一併算進去。",
    "steps": [
      "x = 3 代入。",
      "左括號 4，右括號 1。",
      "4 × 1 = 4。"
    ],
    "commonMistake": "兩括號直接相加而非相乘，(x+1)(x−2) 算成 4。",
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
    "explanation": "(−2)³ − (−2) = −8 + 2 = −6。6 是符號全反。−4 可能 y³ 算錯。0 是兩項以為相等。奇次方保留負號，減 y 要連括號。代入後依運算順序化簡，可得 −6。代入時依運算順序先乘除後加減，並把常數項一併算進去。",
    "steps": [
      "y = −2。",
      "(−2)³ = −8。",
      "−8 − (−2) = −6。"
    ],
    "commonMistake": "6 是符號全反，代入時依運算順序先乘除後加減，並把常數項一併算進去。",
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
    "explanation": "將 x=1/2 代入 4x+3，先算 4×1/2=2，再加上 3 得 5。若得 4 通常是忘加常數 3，或把 4×(1/2) 誤算成 4；得 2 則只算了 4x 這一段，沒有把後面的 +3 一併完成。分數代入時要先完成乘法，再加減常數項。",
    "steps": [
      "x = 1/2 代入。",
      "4 × 1/2 = 2。",
      "2 + 3 = 5。"
    ],
    "commonMistake": "分數代入時 4×(1/2) 算錯，或只算 4x 而漏加常數 3。",
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
    "explanation": "3×50 + 10 = 150 + 10 = 160 元。150 是忘加手續費 10。60 可能 3+10 再乘。140 是減 10 而非加。文字題先列式再代入。代入後依運算順序化簡，可得 160。代入時依運算順序先乘除後加減，並把常數項一併算進去。",
    "steps": [
      "總價 3x + 10。",
      "x = 50 代入。",
      "150 + 10 = 160。"
    ],
    "commonMistake": "150 是忘加手續費 10，代入時依運算順序先乘除後加減，並把常數項一併算進去。",
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
    "explanation": "2×9 − (−3) − 1 = 18 + 3 − 1 = 20。8 可能 x² 算成 3。14 是 −x 符號錯。−20 是平方與減號全錯。分步代入再合併最穩。代入後依運算順序化簡，可得 20。代入時依運算順序先乘除後加減，並把常數項一併算進去。",
    "steps": [
      "x = −3，x² = 9。",
      "2×9 = 18，−x = 3。",
      "18 + 3 − 1 = 20。"
    ],
    "commonMistake": "8 可能 x² 算成 3，代入時依運算順序先乘除後加減，並把常數項一併算進去。",
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
    "explanation": "2² + 2×(−1) = 4 − 2 = 2。3 可能 mn 算成 +1。4 是忘加 mn。0 是 m² 也算錯。多未知數要逐一替換，mn 是相乘不是相加。代入後依運算順序化簡，可得 2。代入時依運算順序先乘除後加減，並把常數項一併算進去。",
    "steps": [
      "m=2，n=−1。",
      "m² = 4，mn = −2。",
      "4 + (−2) = 2。"
    ],
    "commonMistake": "多未知數要逐一替換，mn 是相乘不是相加。",
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
    "explanation": "−(4)² + 5 = −16 + 5 = −11。11 是忘負號在前。−21 可能 4² 算 16 又多減。21 是符號全反。−x² 表示先平方再取負，不是 (−x)²。代入後依運算順序化簡，可得 −11。代入時依運算順序先乘除後加減，並把常數項一併算進去。",
    "steps": [
      "x = 4。",
      "x² = 16，−x² = −16。",
      "−16 + 5 = −11。"
    ],
    "commonMistake": "11 是忘負號在前；−21 可能 4² 算 16 又多減。",
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
    "explanation": "f(2) = 2² − 3×2 = 4 − 6 = −2。2 可能 4−6 符號反。10 是 4+6。−10 是平方算錯。函數記號 f(2) 就是把 x 換成 2 的意思。代入後依運算順序化簡，可得 −2。代入時依運算順序先乘除後加減，並把常數項一併算進去。",
    "steps": [
      "f(2) 表示 x = 2。",
      "算 4 − 6。",
      "得 −2。"
    ],
    "commonMistake": "函數記號 f(2) 就是把 x 換成 2 的意思。",
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
    "explanation": "3x 與 5x 是同類項，係數 3+5=8，得 8x。8x² 次數弄錯。15x 是 3×5 誤乘。15x² 係數與次數都錯。同類項係數加減後，最簡式為 8x。合併時只改係數，字相同、次方相同才算同類項。",
    "steps": [
      "3x 與 5x 是同類項。",
      "係數 3 + 5 = 8。",
      "寫成 8x。"
    ],
    "commonMistake": "同類項係數誤用乘法 3×5，沒有相加。",
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
    "explanation": "y 的係數 7 − 2 + 1 = 6，得 6y。5y 是漏算最後的 +y。4y 是減 2 又漏 +1。9y 是全部相加。單獨 y 的係數是 1。同類項係數加減後，最簡式為 6y。合併時只改係數，字相同、次方相同才算同類項。",
    "steps": [
      "三項都是 y 的同類項。",
      "係數 7 − 2 + 1。",
      "得 6y。"
    ],
    "commonMistake": "5y 是漏算最後的 +y，合併時只改係數，字相同、次方相同才算同類項。",
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
    "explanation": "a² 項：4−2=2 得 2a²。a 項：3+1=4 得 4a。2a²+2a 是 a 項少加。6a² 是把係數相加而非相減。6a²+2a 兩種錯都有。要分組合併。同類項係數加減後，最簡式為 2a² + 4a。合併時只改係數，字相同、次方相同才算同類項。",
    "steps": [
      "a² 項 4 − 2 = 2。",
      "a 項 3 + 1 = 4。",
      "寫 2a² + 4a。"
    ],
    "commonMistake": "不同次項混在一起加，4a² 與 3a 直接相加。",
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
    "explanation": "x 項 −5−2=−7x。常數 3+7=10。−3x+10 是 x 項只減 5 沒減 2。−7x+4 是常數只加 3。−3x+4 兩處都錯。含常數要分 x 項與常數項。同類項係數加減後，最簡式為 −7x + 10。合併時只改係數，字相同、次方相同才算同類項。",
    "steps": [
      "合併 x 項 −5 − 2。",
      "合併常數 3 + 7。",
      "得 −7x + 10。"
    ],
    "commonMistake": "−3x+10 是 x 項只減 5 沒減 2，合併時只改係數，字相同、次方相同才算同類項。",
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
    "explanation": "ba 與 ab 只是字母順序不同，仍代表同一個乘積，所以 2ab、5ba、−ab 可以合併。係數為 2+5−1=6，因此化簡為 6ab。7ab 是忘記減掉最後的 ab；6a²b² 則把同類項合併誤當成字母相乘。",
    "steps": [
      "ba 與 ab 同類。",
      "係數 2 + 5 − 1。",
      "得 6ab。"
    ],
    "commonMistake": "看到 ba 就以為和 ab 不同類，導致少合併 5ba 這一項。",
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
    "explanation": "x²：3−5=−2x²。x：−1+4=3x。常數 2。2x² 是 x² 符號反。−5x 是 x 項算成 −1−4。8x² 是 3+5。要依次數分組。同類項係數加減後，最簡式為 −2x² + 3x + 2。合併時只改係數，字相同、次方相同才算同類項。",
    "steps": [
      "x² 項 3 − 5 = −2。",
      "x 項 −1 + 4 = 3。",
      "常數 2，寫 −2x² + 3x + 2。"
    ],
    "commonMistake": "2x² 是 x² 符號反，合併時只改係數，字相同、次方相同才算同類項。",
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
    "explanation": "m 項 6+2=8m。n 項 −4+1=−3n。8m−5n 是 n 項符號錯。4m 是 m 項相減。10m 是 m 係數亂加。不同字母不能合併。同類項係數加減後，最簡式為 8m − 3n。合併時只改係數，字相同、次方相同才算同類項。",
    "steps": [
      "合併 m：6 + 2 = 8。",
      "合併 n：−4 + 1 = −3。",
      "得 8m − 3n。"
    ],
    "commonMistake": "8m−5n 是 n 項符號錯，合併時只改係數，字相同、次方相同才算同類項。",
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
    "explanation": "x²：1−2=−x²。x：3+1=4x。常數 1−4=−3。x²+4x 是 x² 符號反。−x²+2x 是 x 少加。−3x² 是 x² 係數相減方向錯。同類項係數加減後，最簡式為 −x² + 4x − 3。合併時只改係數，字相同、次方相同才算同類項。",
    "steps": [
      "x² 1 − 2 = −1。",
      "x 3 + 1 = 4。",
      "常數 1 − 4 = −3。"
    ],
    "commonMistake": "常數 1 − 4 算成 3 而非 −3，去括號變號錯。",
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
    "explanation": "周長 2(長+寬)=2(2x+1+x)=2(3x+1)=6x+2。2x²+x 像面積。4x+2 是少乘 2。3x+1 只加長寬沒乘 2。周長要記得乘 2。同類項係數加減後，最簡式為 6x + 2。合併時只改係數，字相同、次方相同才算同類項。",
    "steps": [
      "長+寬 = 3x + 1。",
      "周長 = 2(3x+1)。",
      "展開得 6x + 2。"
    ],
    "commonMistake": "周長公式忘乘 2，只算長加寬得 3x+1。",
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
    "explanation": "−(3x−2)=−3x+2，再加 5x 得 2x+2。8x−2 是括號前負號沒分配到 −2。2x−2 是 +2 變 −2。8x+2 是符號全錯。同類項係數加減後，最簡式為 2x + 2。合併時只改係數，字相同、次方相同才算同類項。",
    "steps": [
      "−(3x−2) = −3x + 2。",
      "加 5x：2x + 2。",
      "整理得 2x + 2。"
    ],
    "commonMistake": "8x−2 是括號前負號沒分配到 −2；2x−2 是 +2 變 −2。",
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
    "explanation": "0.5 + 1.5 = 2，得 2x。2x² 是次數錯。0.65x 是小數相乘。2.25x 是 0.5×1.5。小數係數仍要相加。同類項係數加減後，最簡式為 2x。合併時只改係數，字相同、次方相同才算同類項。",
    "steps": [
      "兩項都是 x 的同類項。",
      "0.5 + 1.5 = 2。",
      "寫 2x。"
    ],
    "commonMistake": "小數係數誤用乘法 0.5×1.5，沒有相加。",
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
    "explanation": "p²q 項 4+1=5p²q。pq² 項 −2pq² 沒同類可合。3p²q 是 4+1 算成 3。含 +pq² 是把 pq² 符號弄反。pq² 與 p²q 字母次數不同，不能合併。同類項係數加減後，最簡式為 5p²q − 2pq²。合併時只改係數，字相同、次方相同才算同類項。",
    "steps": [
      "4p²q 與 p²q 同類，得 5p²q。",
      "−2pq² 無同類。",
      "寫 5p²q − 2pq²。"
    ],
    "commonMistake": "p²q 與 pq² 當同類項合併，指數位置搞混。",
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
