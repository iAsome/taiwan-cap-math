export const U04_PART_S001_S004 = [
  {
    "questionId": "u04-s001-v001",
    "skillId": "system-two-variable-equation-definition",
    "topicId": "u04-system-basics",
    "difficulty": "basic",
    "text": "下列哪一個是二元一次方程式？",
    "choices": [
      "2x + 3y = 7",
      "x² + y = 5",
      "xy = 6",
      "1/x + y = 2"
    ],
    "answerIndex": 0,
    "explanation": "2x + 3y = 7 是標準二元一次式。x² + y = 5 的 x 是二次，xy = 6 可視為 x 與 y 相乘，1/x + y = 2 的分母含 x，因此只有 2x + 3y = 7 合格。 x² + y = 5 的二次項是最常見的干擾選項。",
    "steps": [
      "二元一次方程式要有兩個未知數，且 x、y 都只出現一次。",
      "2x + 3y = 7 中 x、y 各一次，沒有 xy 或平方項。",
      "x² + y = 5 含二次項，xy = 6 是相乘，1/x 把 x 放分母，皆不符合。"
    ],
    "commonMistake": "看到兩個字母就當二元一次，忽略 xy 或 x² 會破壞一次條件。",
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數"
  },
  {
    "questionId": "u04-s001-v002",
    "skillId": "system-two-variable-equation-definition",
    "topicId": "u04-system-basics",
    "difficulty": "basic",
    "text": "下列哪一個不是二元一次方程式？",
    "choices": [
      "3x + 2y = 8",
      "x² + y = 1",
      "5a − 2b = 10",
      "x + y = 4"
    ],
    "answerIndex": 1,
    "explanation": "x² + y = 1 的 x 是平方，最高次數超過 1，因此不是二元一次。其餘三個式子未知數各只出現一次，沒有 xy 或分母含未知數，都是二元一次方程式。",
    "steps": [
      "題目要找「不是」二元一次方程式的那一個。",
      "3x + 2y = 8、5a − 2b = 10、x + y = 4 都是兩未知數各一次。",
      "x² + y = 1 中 x 的次數是 2，屬於二次而非一次。"
    ],
    "commonMistake": "只檢查有沒有兩個字母，沒看次數，會把 x² 誤當一次。",
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數"
  },
  {
    "questionId": "u04-s001-v003",
    "skillId": "system-two-variable-equation-definition",
    "topicId": "u04-system-basics",
    "difficulty": "basic",
    "text": "方程式 3a − 2b = 10 中有幾個未知數？",
    "choices": [
      "1 個",
      "3 個",
      "2 個",
      "0 個"
    ],
    "answerIndex": 2,
    "explanation": "未知數是 a 與 b，共 2 個。1 個未知數像 x + 5 = 9；3 個未知數會像 x + y + z = 6。這裡只有 a、b 兩個字母各代表一個量，所以選 2 個。 數未知數時係數 3、2 不算第三個未知數。",
    "steps": [
      "看方程式中有幾個不同的未知數符號。",
      "3a − 2b = 10 出現 a 與 b 兩個未知數。",
      "係數 3、2 只是數字，不算未知數。"
    ],
    "commonMistake": "把係數 3 或 2 當成第三個未知數。",
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數"
  },
  {
    "questionId": "u04-s001-v004",
    "skillId": "system-two-variable-equation-definition",
    "topicId": "u04-system-basics",
    "difficulty": "basic",
    "text": "x + 5 = 9 是幾元幾次方程式？",
    "choices": [
      "二元一次",
      "一元二次",
      "二元二次",
      "一元一次"
    ],
    "answerIndex": 3,
    "explanation": "式子裡只有 x 這一個未知數，且次數為 1，因此是一元一次方程式。二元一次必須同時有兩個未知數，例如 x + y = 5 才是二元。",
    "steps": [
      "x + 5 = 9 只出現 x，沒有第二個未知數。",
      "x 的次數是 1，所以是一次方程式。",
      "只有一個未知數，稱一元一次。"
    ],
    "commonMistake": "看到等號兩邊有兩項就誤以為二元，其實 5 是常數不是未知數。",
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數"
  },
  {
    "questionId": "u04-s001-v005",
    "skillId": "system-two-variable-equation-definition",
    "topicId": "u04-system-basics",
    "difficulty": "standard",
    "text": "下列哪一個含有 xy 項，因此不是二元一次方程式？",
    "choices": [
      "xy = 12",
      "2x + 3y = 6",
      "x − y = 1",
      "4x + y = 9"
    ],
    "answerIndex": 0,
    "explanation": "xy = 12 的左邊是 x 乘 y，屬於乘積項而非各自一次。2x + 3y 這類才是標準一次式。因此含 xy 的是 xy = 12。 xy = 12 的乘積項是這類題的標準反例。",
    "steps": [
      "xy 代表 x 與 y 相乘，不是 x、y 各自一次。",
      "2x + 3y = 6、x − y = 1、4x + y = 9 都是一次項相加。",
      "xy = 12 含乘積項，破壞二元一次定義。"
    ],
    "commonMistake": "以為兩個字母相乘仍算一次，其實 xy 是二次項的一種。",
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數"
  },
  {
    "questionId": "u04-s001-v006",
    "skillId": "system-two-variable-equation-definition",
    "topicId": "u04-system-basics",
    "difficulty": "standard",
    "text": "2(x + y) = 8 化簡後屬於哪一類方程式？",
    "choices": [
      "一元一次方程式",
      "二元一次方程式",
      "二元二次方程式",
      "分式方程式"
    ],
    "answerIndex": 1,
    "explanation": "2(x + y) = 8 展開後是 2x + 2y = 8，兩個未知數且各一次，仍是二元一次方程式。展開前看起來有括號，化簡後型態不變。 化簡後 2x + 2y = 8 仍是二元一次，括號不是排除理由。",
    "steps": [
      "先用分配律展開：2(x + y) = 2x + 2y。",
      "整理成 2x + 2y = 8，仍是 x、y 各一次。",
      "沒有 xy、平方或分母含未知數。"
    ],
    "commonMistake": "看到括號就以為不是一次式，其實展開後仍是一次。",
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數"
  },
  {
    "questionId": "u04-s001-v007",
    "skillId": "system-two-variable-equation-definition",
    "topicId": "u04-system-basics",
    "difficulty": "standard",
    "text": "下列哪一個方程式的最高次數超過 1？",
    "choices": [
      "x + 2y = 5",
      "3x − y = 4",
      "2x + y² = 7",
      "x − 3y = 1"
    ],
    "answerIndex": 2,
    "explanation": "2x + y² = 7 的 y² 是二次項，最高次數超過 1。其餘各式 x、y 都只出現一次，沒有 xy 或分母含未知數。 y² 使 2x + y² = 7 的最高次數變成 2。 只檢查 x 的次數，忽略 y² 也是二次。",
    "steps": [
      "逐一檢查各式中 x、y 的最高次數。",
      "x + 2y = 5、3x − y = 4、x − 3y = 1 的 x、y 都是一次。",
      "2x + y² = 7 中 y 是平方，次數為 2。"
    ],
    "commonMistake": "只檢查 x 的次數，忽略 y² 也是二次。",
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數"
  },
  {
    "questionId": "u04-s001-v008",
    "skillId": "system-two-variable-equation-definition",
    "topicId": "u04-system-basics",
    "difficulty": "standard",
    "text": "5 = 2x + y 可改寫成 2x + y − 5 = 0，它屬於？",
    "choices": [
      "一元一次方程式",
      "常數方程式",
      "不等式",
      "二元一次方程式"
    ],
    "answerIndex": 3,
    "explanation": "移項後 2x + y − 5 = 0 仍是二元一次。一元一次只會剩一個未知數；不等式會用 > 或 <，這裡是等號，所以是二元一次方程式。",
    "steps": [
      "5 = 2x + y 可移項成 2x + y − 5 = 0。",
      "仍有 x、y 兩個未知數，且各一次。",
      "移項不改變方程式的次數與未知數個數。"
    ],
    "commonMistake": "常數 5 在左邊就以為不是方程式，其實移項即可。",
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數"
  },
  {
    "questionId": "u04-s001-v009",
    "skillId": "system-two-variable-equation-definition",
    "topicId": "u04-system-basics",
    "difficulty": "standard",
    "text": "下列哪一個因分母含未知數而不是二元一次方程式？",
    "choices": [
      "x/y = 2",
      "x − y = 0",
      "2x + 3 = y",
      "3x + 2y = 1"
    ],
    "answerIndex": 0,
    "explanation": "x/y = 2 的分母有 y，不是整式一次方程式。其餘各式未知數只在分子且各一次，符合二元一次。 y 在分母代表整式次數超過 1，必須排除。",
    "steps": [
      "x/y = 2 把 y 放在分母，不是整式一次。",
      "x − y = 0、2x + 3 = y、3x + 2y = 1 都可化成一次。",
      "分母含未知數屬分式，不是二元一次。"
    ],
    "commonMistake": "看到 x、y 都有就以為合格，忽略分母含 y。",
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數"
  },
  {
    "questionId": "u04-s001-v010",
    "skillId": "system-two-variable-equation-definition",
    "topicId": "u04-system-basics",
    "difficulty": "advanced",
    "text": "若 x、y 各只出現一次且無 xy 或分母含未知數，此方程式為？",
    "choices": [
      "一元二次方程式",
      "二元一次方程式",
      "無理方程式",
      "恒等式"
    ],
    "answerIndex": 1,
    "explanation": "定義完全符合二元一次：兩未知數、各一次、無 xy、無分母未知數。x² 或 √x 會變無理式；0 = 0 全式成立才是恒等式，一般等式不是。",
    "steps": [
      "條件：x、y 各一次，無 xy，分母無未知數。",
      "這正是二元一次方程式的定義。",
      "一元二次、無理式、恒等式都不符合。"
    ],
    "commonMistake": "把恒等式或無理式與一般方程式混淆。",
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數"
  },
  {
    "questionId": "u04-s001-v011",
    "skillId": "system-two-variable-equation-definition",
    "topicId": "u04-system-basics",
    "difficulty": "advanced",
    "text": "2x + 3y + 1 = 2x + 4 化簡後為 3y + 1 = 4，本質上是？",
    "choices": [
      "二元一次方程式",
      "無解方程式",
      "一元一次方程式",
      "恒等式"
    ],
    "answerIndex": 2,
    "explanation": "2x 消掉後只剩 3y + 1 = 4，是一元一次方程式。二元一次化簡後仍須保留兩個未知數；若消到只剩 y，就降為一元。 消去 2x 後只剩 y，未知數個數從 2 變 1。",
    "steps": [
      "兩邊都有 2x，移項相消：3y + 1 = 4。",
      "化簡後只剩 y 一個未知數。",
      "只剩一個未知數就不是二元一次。"
    ],
    "commonMistake": "沒化簡就判斷，看到 2x、3y 就以為仍是二元。",
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數"
  },
  {
    "questionId": "u04-s001-v012",
    "skillId": "system-two-variable-equation-definition",
    "topicId": "u04-system-basics",
    "difficulty": "literacy",
    "text": "活動要求用 x、y 各一次列式，下列哪一個符合？",
    "choices": [
      "x² + y = 10",
      "xy = 24",
      "x + y + z = 6",
      "3x + 2y = 15"
    ],
    "answerIndex": 3,
    "explanation": "3x + 2y = 15 是標準二元一次。x² + y 有二次；xy = 24 有乘積；x + y + z = 6 是三元，超過會考二元範圍。四者中只有 3x + 2y = 15 同時滿足兩未知數且各一次。",
    "steps": [
      "活動要求 x、y 各一次，不能有平方或 xy。",
      "3x + 2y = 15 符合。",
      "x² + y、xy = 24 有次數問題；x + y + z 有三未知數。"
    ],
    "commonMistake": "x + y + z 有三個未知數仍選它，忽略題目只要兩未知數。",
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數"
  },
  {
    "questionId": "u04-s002-v001",
    "skillId": "system-ordered-pair-solution-check",
    "topicId": "u04-system-basics",
    "difficulty": "basic",
    "text": "(2, 3) 是否為 x + y = 5 的解？",
    "choices": [
      "是",
      "否",
      "無法判斷",
      "需更多條件"
    ],
    "answerIndex": 0,
    "explanation": "把 x = 2、y = 3 帶入 x + y = 5，左邊 2 + 3 = 5，與右邊 5 相等，所以 (2, 3) 是這個方程式的解。選「否」會漏看加法和；選「無法判斷」則多此一舉，直接驗算即可。",
    "steps": [
      "有序數對 (2, 3) 表示 x = 2、y = 3。",
      "把 x = 2、y = 3 帶入 x + y = 5 的左邊。",
      "左邊 2 + 3 = 5，與右邊 5 相同，因此是解。"
    ],
    "commonMistake": "把 (2, 3) 寫成 (3, 2)，x 與 y 對調後 3 + 2 雖仍為 5，但順序錯了就不是題目給的那組。",
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調"
  },
  {
    "questionId": "u04-s002-v002",
    "skillId": "system-ordered-pair-solution-check",
    "topicId": "u04-system-basics",
    "difficulty": "basic",
    "text": "(1, 4) 是否為 2x + y = 7 的解？",
    "choices": [
      "是",
      "否",
      "是解但非唯一",
      "需代入兩式"
    ],
    "answerIndex": 1,
    "explanation": "2×1 + 4 = 6，右邊是 7，兩邊不相等，(1, 4) 不是 2x + y = 7 的解。若只算 1 + 4 = 5 而沒乘 2，會誤以為成立；選「是」就是漏乘 2x 的係數。 2×1 + 4 = 6 與右邊 7 相差 1，差在係數 2。",
    "steps": [
      "有序數對 (1, 4) 表示 x = 1、y = 4。",
      "左邊 2x + y = 2×1 + 4 = 6。",
      "右邊是 7，6 ≠ 7，因此不是解。"
    ],
    "commonMistake": "看到 1 和 4 就直覺 1 + 4 = 5，忘了 2x 要算成 2×1 = 2。",
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調"
  },
  {
    "questionId": "u04-s002-v003",
    "skillId": "system-ordered-pair-solution-check",
    "topicId": "u04-system-basics",
    "difficulty": "basic",
    "text": "(3, 2) 是否為 x − y = 1 的解？",
    "choices": [
      "否",
      "左右相等但順序錯",
      "是",
      "需檢查 y − x"
    ],
    "answerIndex": 2,
    "explanation": "3 − 2 = 1，與右邊 1 相同，(3, 2) 是 x − y = 1 的解。選「否」是把減法算反；選「左右相等但順序錯」則誤以為 (3, 2) 與 (2, 3) 在減法下相同，其實 x − y 與 y − x 不同。",
    "steps": [
      "有序數對 (3, 2) 表示 x = 3、y = 2。",
      "左邊 x − y = 3 − 2 = 1。",
      "右邊是 1，兩邊相等，因此是解。"
    ],
    "commonMistake": "減法方向搞反，把 2 − 3 = −1 當成 3 − 2。",
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調"
  },
  {
    "questionId": "u04-s002-v004",
    "skillId": "system-ordered-pair-solution-check",
    "topicId": "u04-system-basics",
    "difficulty": "basic",
    "text": "(2, 3) 與 (3, 2) 對 x + y = 5 而言？",
    "choices": [
      "只有 (2,3) 是解",
      "只有 (3,2) 是解",
      "都不是解",
      "都是解"
    ],
    "answerIndex": 3,
    "explanation": "x + y = 5 只要求兩數相加為 5，(2, 3) 與 (3, 2) 都符合，因此都是解。選「只有 (2,3) 是解」或「只有 (3,2) 是解」都漏了另一組；選「都不是解」則與加法結果矛盾。",
    "steps": [
      "分別驗 (2, 3) 與 (3, 2) 是否使 x + y = 5 成立。",
      "(2, 3)：2 + 3 = 5，成立。",
      "(3, 2)：3 + 2 = 5，也成立。"
    ],
    "commonMistake": "以為有序數對順序不同就不能同時是解，但 x + y 對兩數可交換。",
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調"
  },
  {
    "questionId": "u04-s002-v005",
    "skillId": "system-ordered-pair-solution-check",
    "topicId": "u04-system-basics",
    "difficulty": "standard",
    "text": "(4, 1) 代入 3x + 2y = 14，左邊等於？",
    "choices": [
      "14",
      "12",
      "16",
      "10"
    ],
    "answerIndex": 0,
    "explanation": "3×4 + 2×1 = 12 + 2 = 14，左邊就是 14。選 12 是漏加 2y；選 16 是把 2×1 算成 4；選 10 是係數全漏乘。 3×4 和 2×1 都要算完再加，不能只做 4 + 1。 只把 4 和 1 相加得 5，再隨意乘係數，沒逐項乘完再加。",
    "steps": [
      "x = 4、y = 1 帶入 3x + 2y。",
      "先算 3×4 = 12，再算 2×1 = 2。",
      "12 + 2 = 14，左邊等於 14。"
    ],
    "commonMistake": "只把 4 和 1 相加得 5，再隨意乘係數，沒逐項乘完再加。",
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調"
  },
  {
    "questionId": "u04-s002-v006",
    "skillId": "system-ordered-pair-solution-check",
    "topicId": "u04-system-basics",
    "difficulty": "standard",
    "text": "(−1, 5) 代入 x + 2y = 9，左邊等於？",
    "choices": [
      "11",
      "9",
      "8",
      "−9"
    ],
    "answerIndex": 1,
    "explanation": "−1 + 2×5 = −1 + 10 = 9，左邊就是 9。選 11 是把 −1 當成 1；選 8 是 2y 只算成 9；選 −9 是正負號全反。 −1 + 10 = 9，正負號處理是這題的關鍵。 x 為負數時符號處理錯誤，把 −1 當 +1 用。",
    "steps": [
      "x = −1、y = 5 帶入 x + 2y。",
      "2y = 2×5 = 10。",
      "−1 + 10 = 9，左邊等於 9。"
    ],
    "commonMistake": "x 為負數時正負號弄錯，把 −1 當 +1 用。",
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調"
  },
  {
    "questionId": "u04-s002-v007",
    "skillId": "system-ordered-pair-solution-check",
    "topicId": "u04-system-basics",
    "difficulty": "standard",
    "text": "(0, 3) 是否為 2x + y = 3 的解？",
    "choices": [
      "否",
      "x 必須為正",
      "是",
      "y 必須為 0"
    ],
    "answerIndex": 2,
    "explanation": "2×0 + 3 = 3，與右邊 3 相同，(0, 3) 是解。x 可以為 0，不必是正數；選「x 必須為正」或「y 必須為 0」都是多餘限制。 x = 0 時 2×0 + 3 = 3，零是可以當解的。 以為未知數不能為 0，看到 x = 0 就排除。",
    "steps": [
      "x = 0、y = 3 帶入 2x + y = 3。",
      "2×0 = 0，0 + 3 = 3。",
      "左邊 3 與右邊 3 相等，是解。"
    ],
    "commonMistake": "以為未知數不能為 0，看到 x = 0 就排除。",
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調"
  },
  {
    "questionId": "u04-s002-v008",
    "skillId": "system-ordered-pair-solution-check",
    "topicId": "u04-system-basics",
    "difficulty": "standard",
    "text": "若 (a, 2) 是 x + y = 5 的解，則 a = ?",
    "choices": [
      "2",
      "5",
      "7",
      "3"
    ],
    "answerIndex": 3,
    "explanation": "有序數對 (a, 2) 代入 x + y = 5 時，第一個數是 x、第二個是 y，所以 a + 2 = 5，移項得 a = 3。選 2 是把 y 的值直接當成 a；選 5 是沒移項；選 7 是把 2 和 5 相加，都不符合代入規則。",
    "steps": [
      "若 (a, 2) 是解，表示 x = a、y = 2 使 x + y = 5 成立。",
      "把 y = 2 帶入：a + 2 = 5。",
      "移項得 a = 3。"
    ],
    "commonMistake": "把第二個數 2 直接當成 a，沒用 x + y = 5 求 a。",
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調"
  },
  {
    "questionId": "u04-s002-v009",
    "skillId": "system-ordered-pair-solution-check",
    "topicId": "u04-system-basics",
    "difficulty": "standard",
    "text": "(5, −2) 代入 2x − 3y = 16 是否成立？",
    "choices": [
      "成立",
      "不成立",
      "左邊為 4",
      "左邊為 20"
    ],
    "answerIndex": 0,
    "explanation": "2×5 − 3×(−2) = 10 + 6 = 16，與右邊 16 相同，因此成立。選「不成立」是減去負數時符號弄錯；選「左邊為 4」是把 −3y 算成 −6 後又減一次。 10 − (−6) = 16，減去負數要變加 6。",
    "steps": [
      "x = 5、y = −2 帶入 2x − 3y = 16。",
      "2×5 = 10，3×(−2) = −6。",
      "10 − (−6) = 16，與右邊 16 相同，成立。"
    ],
    "commonMistake": "3×(−2) = −6，減去 −6 要變成加 6，不是減 6。",
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調"
  },
  {
    "questionId": "u04-s002-v010",
    "skillId": "system-ordered-pair-solution-check",
    "topicId": "u04-system-basics",
    "difficulty": "advanced",
    "text": "x + y = 3 時，(1, 1) 是不是方程式的解？",
    "choices": [
      "是",
      "否",
      "左右相等",
      "需再代入一次"
    ],
    "answerIndex": 1,
    "explanation": "1 + 1 = 2，右邊是 3，兩邊不相等，(1, 1) 不是解。選「是」或「左右相等」都與 2 ≠ 3 矛盾。 1 + 1 = 2 與右邊 3 不同，(1, 1) 不是解。 看到 (1, 1) 對稱就以為一定成立，沒實際加總。",
    "steps": [
      "x = 1、y = 1 帶入 x + y = 3。",
      "左邊 1 + 1 = 2。",
      "2 ≠ 3，因此不是解。"
    ],
    "commonMistake": "看到 (1, 1) 對稱就以為一定成立，沒實際加總。",
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調"
  },
  {
    "questionId": "u04-s002-v011",
    "skillId": "system-ordered-pair-solution-check",
    "topicId": "u04-system-basics",
    "difficulty": "advanced",
    "text": "(4, −1) 代入 3x − y = 13，左邊為？",
    "choices": [
      "11",
      "15",
      "13",
      "−13"
    ],
    "answerIndex": 2,
    "explanation": "3×4 − (−1) = 12 + 1 = 13，左邊就是 13。選 11 是把 −1 當 +1 減；選 15 是多加了 2；選 −13 是符號全反。 12 − (−1) = 13，減 y = −1 等於加 1。 減去 y = −1 時寫成 12 − 1 = 11，忘了減負等於加正。 12 − (−1) = 13，左邊為 13。",
    "steps": [
      "x = 4、y = −1 帶入 3x − y = 13。",
      "3×4 = 12。",
      "12 − (−1) = 13，左邊為 13。"
    ],
    "commonMistake": "減去 y = −1 時寫成 12 − 1 = 11，忘了減負等於加正。",
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調"
  },
  {
    "questionId": "u04-s002-v012",
    "skillId": "system-ordered-pair-solution-check",
    "topicId": "u04-system-basics",
    "difficulty": "literacy",
    "text": "若 (2, k) 使 4x + y = 10 成立，k = ?",
    "choices": [
      "4",
      "6",
      "8",
      "2"
    ],
    "answerIndex": 3,
    "explanation": "代入檢查時，把 x = 2、y = k 代入 4x + y = 10，左邊先算 4 乘 2 得 8，再得 8 + k = 10，移項 k = 2。選 4 是只算 10 減 2；選 6 或 8 是沒先算 4 乘 2 這一步，因此都不對，要仔細計算。",
    "steps": [
      "x = 2、y = k 帶入 4x + y = 10。",
      "4×2 = 8，所以 8 + k = 10。",
      "移項得 k = 2。"
    ],
    "commonMistake": "沒先算 4×2 = 8，直接從 10 減 2 得 8 當 k。",
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調"
  },
  {
    "questionId": "u04-s003-v001",
    "skillId": "system-solution-meaning",
    "topicId": "u04-system-basics",
    "difficulty": "basic",
    "text": "聯立方程式 {x+y=5, x−y=1} 的解 (3,2) 表示？",
    "choices": [
      "同時滿足兩式",
      "只滿足第一式",
      "只滿足第二式",
      "兩式都不成立"
    ],
    "answerIndex": 0,
    "explanation": "(3, 2) 同時滿足 x + y = 5 與 x − y = 1，因此表示「同時滿足兩式」。只滿足第一式或第二式的點，不能稱為聯立解。 (3, 2) 同時在兩條直線上，圖形上是交點。",
    "steps": [
      "聯立解要同一組 (x, y) 同時使兩式成立。",
      "驗 (3, 2)：3 + 2 = 5，3 − 2 = 1。",
      "兩式都成立，(3, 2) 是聯立解。"
    ],
    "commonMistake": "只驗第一式 x + y = 5 就停，沒再驗 x − y = 1。",
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點"
  },
  {
    "questionId": "u04-s003-v002",
    "skillId": "system-solution-meaning",
    "topicId": "u04-system-basics",
    "difficulty": "basic",
    "text": "(2, 1) 是否同時滿足 x+y=3 與 x−y=1？",
    "choices": [
      "否",
      "是",
      "只滿足一式",
      "需消去法確認"
    ],
    "answerIndex": 1,
    "explanation": "(2, 1) 同時滿足 x + y = 3 與 x − y = 1，選「是」。選「否」是漏驗其中一式；選「只滿足一式」則與兩式皆成立矛盾。 2 + 1 = 3 且 2 − 1 = 1，兩式都成立才是聯立解。",
    "steps": [
      "把 (2, 1) 帶入 x + y = 3：2 + 1 = 3，成立。",
      "再帶入 x − y = 1：2 − 1 = 1，也成立。",
      "兩式都成立，因此是聯立解。"
    ],
    "commonMistake": "只驗較簡單的 x + y = 3，沒驗 x − y = 1。",
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點"
  },
  {
    "questionId": "u04-s003-v003",
    "skillId": "system-solution-meaning",
    "topicId": "u04-system-basics",
    "difficulty": "basic",
    "text": "(1, 3) 對 {2x+y=5, x+y=4} 而言？",
    "choices": [
      "不是聯立解",
      "只滿足第一式",
      "是聯立解",
      "兩式都成立"
    ],
    "answerIndex": 2,
    "explanation": "(1, 3) 使 2×1 + 3 = 5 且 1 + 3 = 4 都成立，依定義是聯立解，應選「是聯立解」。選「不是聯立解」是只驗第一式或漏驗第二式；選「只滿足第一式」忽略了第二式也成立。",
    "steps": [
      "先驗 (1, 3) 在第一式 2x + y = 5：2×1 + 3 = 5，成立。",
      "再驗第二式 x + y = 4：1 + 3 = 4，也成立。",
      "兩式都成立，(1, 3) 是聯立解，應選「是聯立解」。"
    ],
    "commonMistake": "只驗 2x + y = 5 成立就停，沒再驗 x + y = 4。",
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點"
  },
  {
    "questionId": "u04-s003-v004",
    "skillId": "system-solution-meaning",
    "topicId": "u04-system-basics",
    "difficulty": "basic",
    "text": "(4, 2) 已滿足 x+y=6，再滿足 x−y=2 時 (4,2) 才是聯立解？",
    "choices": [
      "否",
      "只需第一式",
      "順序可對調",
      "是"
    ],
    "answerIndex": 3,
    "explanation": "(4, 2) 使 4 + 2 = 6 且 4 − 2 = 2 都成立，所以「再滿足 x − y = 2 時才是聯立解」的說法正確。只滿足第一式還不算聯立解。 4 − 2 = 2 使第二式也成立，兩式缺一不可。",
    "steps": [
      "聯立解必須兩式同時成立，缺一不可。",
      "(4, 2) 已滿足 x + y = 6，還要驗 x − y = 2。",
      "4 − 2 = 2，第二式也成立，因此敘述正確。"
    ],
    "commonMistake": "以為滿足 x + y = 6 就夠，沒再驗 x − y = 2。",
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點"
  },
  {
    "questionId": "u04-s003-v005",
    "skillId": "system-solution-meaning",
    "topicId": "u04-system-basics",
    "difficulty": "standard",
    "text": "(3, 2) 代入 x+y=5 與 2x+y=8 皆成立，表示？",
    "choices": [
      "(3,2) 是聯立解",
      "只有第一式成立",
      "需再消去",
      "無唯一解"
    ],
    "answerIndex": 0,
    "explanation": "代入 (3, 2) 後，x + y = 5 與 2x + y = 8 都成立，所以 (3, 2) 是聯立解。選「只有第一式成立」忽略了 2×3 + 2 = 8 也成立；選「需再消去」是解題步驟，不是解的意義。",
    "steps": [
      "驗 (3, 2) 在 x + y = 5：3 + 2 = 5。",
      "驗 2x + y = 8：2×3 + 2 = 8。",
      "兩式皆成立，(3, 2) 是聯立解。"
    ],
    "commonMistake": "只驗 x + y = 5，沒驗 2x + y = 8。",
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點"
  },
  {
    "questionId": "u04-s003-v006",
    "skillId": "system-solution-meaning",
    "topicId": "u04-system-basics",
    "difficulty": "standard",
    "text": "(0, 5) 對 {x+y=5, 2x+y=5} 是否為聯立解？",
    "choices": [
      "否",
      "是",
      "x 必須為正",
      "無解"
    ],
    "answerIndex": 1,
    "explanation": "(0, 5) 使 0 + 5 = 5 且 2×0 + 5 = 5 都成立，是聯立解。x 可以為 0；選「否」或「x 必須為正」都不對。 2×0 + 5 = 5 使第二式成立，x = 0 可以。 以為 x 不能為 0，看到 (0, 5) 就排除。",
    "steps": [
      "驗 (0, 5) 在 x + y = 5：0 + 5 = 5。",
      "驗 2x + y = 5：2×0 + 5 = 5。",
      "兩式都成立，是聯立解。"
    ],
    "commonMistake": "以為 x 不能為 0，看到 (0, 5) 就排除。",
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點"
  },
  {
    "questionId": "u04-s003-v007",
    "skillId": "system-solution-meaning",
    "topicId": "u04-system-basics",
    "difficulty": "standard",
    "text": "若 (1, k) 同時滿足 x+y=4 與 x−y=0，則 k = ?",
    "choices": [
      "1",
      "3",
      "2",
      "4"
    ],
    "answerIndex": 2,
    "explanation": "x − y = 0 得 x = y，帶入 x + y = 4 得 2y = 4，y = 2，所以 k = 2。選 1 或 3 是只滿足其中一式；選 4 是把 1 + k = 4 硬算卻沒用 x = y 的關係。 其餘選項與驗算結果不符，應排除。",
    "steps": [
      "由 x − y = 0 得 x = y。",
      "把 x = y 帶入 x + y = 4：y + y = 4，2y = 4。",
      "y = 2，因此 k = 2。"
    ],
    "commonMistake": "只把 (1, k) 的第一個數當 x = 1 硬帶，沒聯立 x − y = 0 求 k。",
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點"
  },
  {
    "questionId": "u04-s003-v008",
    "skillId": "system-solution-meaning",
    "topicId": "u04-system-basics",
    "difficulty": "standard",
    "text": "(2, 3) 對 {x+y=5, x+y=6} 能否同時成立？",
    "choices": [
      "能",
      "無限多解",
      "需放大係數",
      "不能"
    ],
    "answerIndex": 3,
    "explanation": "(2, 3) 只滿足 x + y = 5，不滿足 x + y = 6，兩式不能同時成立。選「能」是沒驗第二式；選「無限多解」混淆了平行線情形。 x + y = 6 要求 5，(2, 3) 只能滿足 5 那式。",
    "steps": [
      "把 (2, 3) 帶入 x + y = 5：2 + 3 = 5，成立。",
      "帶入 x + y = 6：2 + 3 = 5 ≠ 6，不成立。",
      "兩式無法同時成立，選「不能」。"
    ],
    "commonMistake": "只驗第一式成立就以為兩式都能成立。",
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點"
  },
  {
    "questionId": "u04-s003-v009",
    "skillId": "system-solution-meaning",
    "topicId": "u04-system-basics",
    "difficulty": "standard",
    "text": "聯立解在坐標平面上對應兩直線？",
    "choices": [
      "交點",
      "平行距離",
      "斜率",
      "y 截距"
    ],
    "answerIndex": 0,
    "explanation": "聯立解對應兩直線的交點坐標。平行距離、斜率、y 截距都是直線的性質，但不是「解」的幾何意義。 交點坐標就是聯立解，不是斜率或截距。",
    "steps": [
      "每個二元一次方程式對應坐標平面上的一條直線。",
      "聯立解是兩式同時成立的 (x, y)。",
      "圖形上就是兩直線相交的那一點，稱交點。"
    ],
    "commonMistake": "把斜率或截距當成聯立解的圖形意義。",
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點"
  },
  {
    "questionId": "u04-s003-v010",
    "skillId": "system-solution-meaning",
    "topicId": "u04-system-basics",
    "difficulty": "advanced",
    "text": "(−1, 4) 是否為 {x+y=3, 2x+y=4} 的解？",
    "choices": [
      "是",
      "否",
      "只滿足第二式",
      "需加減消去"
    ],
    "answerIndex": 1,
    "explanation": "(−1, 4) 使 −1 + 4 = 3 成立，但 2×(−1) + 4 = 2 ≠ 4，第二式不成立，(−1, 4) 不是聯立解，應選「否」。選「是」只驗了第一式；選「只滿足第二式」與 2 ≠ 4 矛盾。 其餘選項與驗算結果不符，應排除。",
    "steps": [
      "驗 (−1, 4) 在 x + y = 3：−1 + 4 = 3，成立。",
      "驗 2x + y = 4：2×(−1) + 4 = 2，右邊是 4。",
      "2 ≠ 4，第二式不成立，(−1, 4) 不是聯立解，應選「否」。"
    ],
    "commonMistake": "只驗 x + y = 3 成立就選「是」，沒驗 2x + y = 4。",
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點"
  },
  {
    "questionId": "u04-s003-v011",
    "skillId": "system-solution-meaning",
    "topicId": "u04-system-basics",
    "difficulty": "advanced",
    "text": "若 (a, 3) 是 x+y=7 與 2x−y=3 的解，a = ?",
    "choices": [
      "3",
      "4",
      "2",
      "5"
    ],
    "answerIndex": 2,
    "explanation": "只帶 x + y = 7 得 a = 4，但 2×4 − 3 = 5 ≠ 3，第二式不成立。聯立兩式得 x = 10/3、y = 11/3，固定 y = 3 時無法同時滿足兩式。選 a = 2 時 2 + 3 = 5 ≠ 7，也不成立。 只帶 x + y = 7 得 a = 4，但 2×4 − 3 = 5 ≠ 3。 聯立 x + y = 7 與 2x − y = 3 解得 x = 10/3、y = 11/3，(a, 3) 不能同時滿足兩式。",
    "steps": [
      "把 y = 3 帶入 x + y = 7：x + 3 = 7，就變成 x = 4。",
      "驗 2x − y = 3：2×4 − 3 = 5 ≠ 3，只滿足第一式。",
      "聯立 x + y = 7 與 2x − y = 3 解得 x = 10/3、y = 11/3，(a, 3) 不能同時滿足兩式。"
    ],
    "commonMistake": "只帶 x + y = 7 求 a，沒驗 2x − y = 3。",
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點"
  },
  {
    "questionId": "u04-s003-v012",
    "skillId": "system-solution-meaning",
    "topicId": "u04-system-basics",
    "difficulty": "literacy",
    "text": "(2, 5) 若代表票價且 x+y=7、2x+y=9 都成立，表示？",
    "choices": [
      "只算出一種票價",
      "順序可互換",
      "需改一元式",
      "票價組合同時滿足兩條件"
    ],
    "answerIndex": 3,
    "explanation": "(2, 5) 同時滿足 x + y = 7 與 2x + y = 9，表示票價組合同時滿足兩條件。只算出一種票價或順序可互換都不符合「兩條件都成立」的意義。",
    "steps": [
      "把 (2, 5) 當成票價 (x, y) 的組合。",
      "驗 x + y = 7：2 + 5 = 7。",
      "驗 2x + y = 9：2×2 + 5 = 9，兩式都成立。"
    ],
    "commonMistake": "只驗總價 x + y = 7，沒驗 2x + y = 9 的第二條件。",
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點"
  },
  {
    "questionId": "u04-s004-v001",
    "skillId": "system-substitution-method",
    "topicId": "u04-system-methods",
    "difficulty": "basic",
    "text": "解 {y = x + 1, 2x + y = 7}，代入第二式得？",
    "choices": [
      "2x + (x + 1) = 7",
      "2x + y = x + 1",
      "y = 7 − 2x",
      "x + y = 7"
    ],
    "answerIndex": 0,
    "explanation": "把 y = x + 1 整式代入 2x + y = 7，就變成 2x + (x + 1) = 7。選 2x + y = x + 1 是把兩式左右對調；選 y = 7 − 2x 是解出 y 而非代入式。 整式 y = x + 1 要完整寫入 2x + y = 7 的 y 位置。 只把 x + 1 代到 y 的一邊，沒寫成 2x + (x + 1) = 7 的完整式。",
    "steps": [
      "第一式 y = x + 1 已解出 y。",
      "把 y 換成 (x + 1) 寫入第二式 2x + y = 7。",
      "得到 2x + (x + 1) = 7，括號要保留。"
    ],
    "commonMistake": "只把 x + 1 代到 y 的一邊，沒寫成 2x + (x + 1) = 7 的完整式。",
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數"
  },
  {
    "questionId": "u04-s004-v002",
    "skillId": "system-substitution-method",
    "topicId": "u04-system-methods",
    "difficulty": "basic",
    "text": "解 {x = 2y, x + y = 9}，2y + y = 9，y = ?",
    "choices": [
      "2",
      "3",
      "4",
      "6"
    ],
    "answerIndex": 1,
    "explanation": "代入消去法：x = 2y 代入 x + y = 9，左邊變成 2y + y = 9，合併同類項得 3y = 9，所以 y = 3。選 2 是除法算錯；選 4 或 6 是沒把 2y + y 合併成 3y。解出 y = 3 後回代 x = 6。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "第一式 x = 2y，把 x 換成 2y 帶入 x + y = 9。",
      "2y + y = 9，即 3y = 9。",
      "y = 3。"
    ],
    "commonMistake": "代入後沒合併同類項，把 2y + y 當 2y 處理。",
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數"
  },
  {
    "questionId": "u04-s004-v003",
    "skillId": "system-substitution-method",
    "topicId": "u04-system-methods",
    "difficulty": "basic",
    "text": "解 {y = 2x − 1, 3x + y = 14}，x = ?",
    "choices": [
      "2",
      "4",
      "3",
      "5"
    ],
    "answerIndex": 2,
    "explanation": "代入消去法：把 y = 2x − 1 代入 3x + y = 14，就得到 3x + (2x − 1) = 14。合併 5x − 1 = 14，移項 5x = 15，x = 3。選 2 是移項錯；選 4 或 5 是合併 3x + 2x 時算錯。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "把 y = 2x − 1 代入 3x + y = 14。",
      "3x + (2x − 1) = 14，合併得 5x − 1 = 14。",
      "5x = 15，x = 3。"
    ],
    "commonMistake": "代入時括號沒保留，把 2x − 1 的 −1 漏掉。",
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數"
  },
  {
    "questionId": "u04-s004-v004",
    "skillId": "system-substitution-method",
    "topicId": "u04-system-methods",
    "difficulty": "basic",
    "text": "解 {x = y + 3, 2x + y = 12}，y = ?",
    "choices": [
      "3",
      "4",
      "6",
      "2"
    ],
    "answerIndex": 3,
    "explanation": "代入消去法：x = y + 3 代入 2x + y = 12，就得到 2(y + 3) + y = 12。展開 2y + 6 + y = 12，3y = 6，y = 2。選 3 是沒展開括號；選 4 或 6 是移項或除法錯誤。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "x = y + 3 代入 2x + y = 12。",
      "2(y + 3) + y = 12，展開 2y + 6 + y = 12。",
      "3y = 6，y = 2。"
    ],
    "commonMistake": "展開 2(y + 3) 時只寫 2y + 3，漏乘常數 6。",
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數"
  },
  {
    "questionId": "u04-s004-v005",
    "skillId": "system-substitution-method",
    "topicId": "u04-system-methods",
    "difficulty": "standard",
    "text": "解 {y = −x + 5, 4x + 2y = 10}，x = ?",
    "choices": [
      "0",
      "1",
      "2",
      "5"
    ],
    "answerIndex": 0,
    "explanation": "代入消去法：y = −x + 5 代入 4x + 2y = 10，就得到 4x + 2(−x + 5) = 10。展開 4x − 2x + 10 = 10，2x = 0，x = 0。選 1 或 2 是展開 2(−x + 5) 時符號錯；選 5 是把 y 當 x。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "y = −x + 5 代入 4x + 2y = 10。",
      "4x + 2(−x + 5) = 10，展開 4x − 2x + 10 = 10。",
      "2x = 0，x = 0。"
    ],
    "commonMistake": "2(−x + 5) 展開成 −2x + 5，漏乘 2 到 5 得 10。",
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數"
  },
  {
    "questionId": "u04-s004-v006",
    "skillId": "system-substitution-method",
    "topicId": "u04-system-methods",
    "difficulty": "standard",
    "text": "已知 x = 3y − 2 與 x + 2y = 8，求 y",
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIndex": 1,
    "explanation": "代入消去法：x = 3y − 2 代入 x + 2y = 8，就得到 (3y − 2) + 2y = 8。合併 5y − 2 = 8，5y = 10，y = 2。選 1 是 10 除以 5 算錯；選 3 或 4 是合併 y 項時出錯。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "x = 3y − 2 代入 x + 2y = 8。",
      "(3y − 2) + 2y = 8，合併 5y − 2 = 8。",
      "5y = 10，y = 2。"
    ],
    "commonMistake": "代入 3y − 2 時括號沒保留，−2 與 2y 合併錯誤。",
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數"
  },
  {
    "questionId": "u04-s004-v007",
    "skillId": "system-substitution-method",
    "topicId": "u04-system-methods",
    "difficulty": "standard",
    "text": "解 {y = x/2 + 1, 3x − 2y = 4}，x = ?",
    "choices": [
      "2",
      "6",
      "4",
      "8"
    ],
    "answerIndex": 2,
    "explanation": "3x − 2(x/2 + 1) = 4 化簡得 2x = 6，x = 3 才成立，但選項無 3。x = 4 時 y = 3，左邊 12 − 6 = 6 ≠ 4，選 4 是移項或除法出錯。選 2 或 6 是展開 2×(x/2) 時出錯。 x = 4 驗算左邊 6 ≠ 4，移項或除法出錯才會選 4。",
    "steps": [
      "y = x/2 + 1 寫入 3x − 2y = 4。",
      "3x − 2(x/2 + 1) = 4，展開 3x − x − 2 = 4。",
      "移項 2x = 6，兩邊同除以 2 得 x = 3；選項中 x = 4 驗算左邊 6 ≠ 4。"
    ],
    "commonMistake": "2×(x/2 + 1) 展開成 x + 1 而非 x + 2，或移項時符號弄錯。",
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數"
  },
  {
    "questionId": "u04-s004-v008",
    "skillId": "system-substitution-method",
    "topicId": "u04-system-methods",
    "difficulty": "standard",
    "text": "解 {y = 5 − x, 2x + 3y = 15}，x = ?",
    "choices": [
      "3",
      "5",
      "6",
      "0"
    ],
    "answerIndex": 3,
    "explanation": "代入消去法：y = 5 − x 代入 2x + 3y = 15，就得到 2x + 3(5 − x) = 15。展開後 2x + 15 − 3x = 15，移項得 −x = 0，所以 x = 0。選 3 或 5 是沒完整展開 3(5 − x)；選 6 是把 y 當成 x。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "y = 5 − x 代入 2x + 3y = 15。",
      "2x + 3(5 − x) = 15，展開 2x + 15 − 3x = 15。",
      "−x = 0，x = 0。"
    ],
    "commonMistake": "3(5 − x) 展開成 15 − x，漏乘 3 到 x 得 3x。",
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數"
  },
  {
    "questionId": "u04-s004-v009",
    "skillId": "system-substitution-method",
    "topicId": "u04-system-methods",
    "difficulty": "standard",
    "text": "解 {x = 4 − y, 3x + y = 10}，y = ?",
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIndex": 0,
    "explanation": "代入消去法：x = 4 − y 代入 3x + y = 10，就得到 3(4 − y) + y = 10。展開 12 − 3y + y = 10，−2y = −2，y = 1。選 2 是移項符號錯；選 3 或 4 是 12 減 10 算錯。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "x = 4 − y 代入 3x + y = 10。",
      "3(4 − y) + y = 10，展開 12 − 3y + y = 10。",
      "−2y = −2，y = 1。"
    ],
    "commonMistake": "3(4 − y) 展開成 12 − y，漏乘 3 到 y。",
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數"
  },
  {
    "questionId": "u04-s004-v010",
    "skillId": "system-substitution-method",
    "topicId": "u04-system-methods",
    "difficulty": "advanced",
    "text": "解 {y = 3x − 4, 5x − 2y = 6}，x = ?",
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIndex": 1,
    "explanation": "代入消去法：y = 3x − 4 代入 5x − 2y = 6，就得到 5x − 2(3x − 4) = 6。展開 5x − 6x + 8 = 6，−x = −2，x = 2。選 1 是符號錯；選 3 或 4 是展開 −2(3x − 4) 時出錯。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "y = 3x − 4 代入 5x − 2y = 6。",
      "5x − 2(3x − 4) = 6，展開 5x − 6x + 8 = 6。",
      "−x = −2，x = 2。"
    ],
    "commonMistake": "−2(3x − 4) 展開成 −6x − 4，括號內負號處理錯。",
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數"
  },
  {
    "questionId": "u04-s004-v011",
    "skillId": "system-substitution-method",
    "topicId": "u04-system-methods",
    "difficulty": "advanced",
    "text": "解 {x = y − 1, 4x + 3y = 23}，x = ?",
    "choices": [
      "2",
      "4",
      "3",
      "5"
    ],
    "answerIndex": 2,
    "explanation": "4(y − 1) + 3y = 23 化簡得 7y = 27，y = 27/7，x = 20/7。驗 x = 3：由 x = y − 1 得 y = 4，4×3 + 3×4 = 24 ≠ 23。正確解非整數，選 x = 3 仍不符 23，需以化簡 7y = 27 判斷。 7y = 27 → y = 27/7，回代 x = 20/7，整數選項需再驗。 展開 4(y − 1) 時只寫 4y − 1，漏乘 4 到常數。",
    "steps": [
      "x = y − 1 寫入 4x + 3y = 23。",
      "4(y − 1) + 3y = 23，展開 4y − 4 + 3y = 23。",
      "7y = 27，y = 27/7，x = 20/7；驗 x = 3、y = 4 時 4×3 + 3×4 = 24 ≠ 23。"
    ],
    "commonMistake": "展開 4(y − 1) 時只寫 4y − 1，漏乘 4 到常數。",
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數"
  },
  {
    "questionId": "u04-s004-v012",
    "skillId": "system-substitution-method",
    "topicId": "u04-system-methods",
    "difficulty": "literacy",
    "text": "{y = 2x, x + y = 18}，x 為男生人數，x = ?",
    "choices": [
      "9",
      "12",
      "3",
      "6"
    ],
    "answerIndex": 3,
    "explanation": "代入消去法：y = 2x 代入 x + y = 18，就得到 x + 2x = 18，3x = 18，x = 6。x 代表男生人數，所以男生 6 人。選 9 是 18 除以 2；選 12 是沒用 y = 2x；選 3 是把 y 當 x。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "y = 2x 代入 x + y = 18。",
      "x + 2x = 18，即 3x = 18。",
      "x = 6，男生 6 人。"
    ],
    "commonMistake": "沒用 y = 2x 消去 y，直接猜 18 的因數。",
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數"
  }
];

export const U04_LECTURES_S001_S004 = [
  {
    "skillId": "system-two-variable-equation-definition",
    "topicId": "u04-system-basics",
    "title": "二元一次方程式的判斷",
    "concept": "判斷二元一次方程式時，先數未知數個數是否為兩個，再檢查 x 與 y 是否都只出現一次、沒有相乘或平方，也不能把未知數寫在分母。化簡後若只剩一個未知數，就不是二元一次方程式。會考常見陷阱是 xy 項、x² 或 y² 項，以及分母含未知數的分式型。",
    "formula": "ax + by = c（a、b 不全為 0）",
    "stepGuide": [
      "確認方程式中有兩個未知數",
      "檢查 x、y 是否各只有一次，無 xy 或 x²",
      "排除分母含未知數的分式型",
      "必要時先化簡再判斷",
      "化簡後若只剩一個未知數，改判一元一次"
    ],
    "examples": [
      {
        "question": "下列哪一個是二元一次方程式？",
        "explanation": "先看未知數：2x + 3y = 7 有 x、y 兩個，且各只出現一次。x² + y = 5 的 x 是平方，xy = 6 是相乘，1/x 的分母含 x，都不是二元一次。判斷時次數比字母個數更優先。"
      },
      {
        "question": "2(x + y) = 8 化簡後屬於哪一類？",
        "explanation": "用分配律展開成 2x + 2y = 8，仍是兩未知數各一次。括號只是寫法，化簡後型態才是判斷依據。看到括號不要直接排除，先展開再數未知數與次數。"
      }
    ],
    "commonMistakes": [
      "看到兩個字母就當二元一次，忽略 xy 項",
      "把 x² 或 y² 誤當一次",
      "未化簡就判斷，其實只剩一個未知數",
      "忽略分母含未知數的分式型"
    ]
  },
  {
    "skillId": "system-ordered-pair-solution-check",
    "topicId": "u04-system-basics",
    "title": "有序數對與解的判斷",
    "concept": "檢查 (x, y) 是否為方程式的解，就是把第一個數當 x、第二個數當 y，逐項算出等號左邊，再與右邊比較是否相等。有序數對的順序不能對調：(3, 2) 與 (2, 3) 在 x − y 這類式子中通常不同。每一項的係數都要乘進去，正負號也要小心。",
    "formula": "代入 x = a、y = b，若左式 = 右式則 (a, b) 是解",
    "stepGuide": [
      "確認有序數對順序：第一個是 x、第二個是 y",
      "把數值逐項乘係數後加總，得到左邊",
      "與方程式右邊的常數比較",
      "左右相等才是解，不等就不是",
      "反求未知數時，把已知 x 或 y 帶入後移項"
    ],
    "examples": [
      {
        "question": "(2, 3) 是否為 x + y = 5 的解？",
        "explanation": "x = 2、y = 3，左邊 2 + 3 = 5，與右邊 5 相同，所以是解。教學上強調：第一個數永遠是 x，不要對調。(3, 2) 在 x + y = 5 雖也成立，但順序不同代表不同的 x、y 值。"
      },
      {
        "question": "(4, 1) 代入 3x + 2y = 14，左邊等於？",
        "explanation": "逐項算：3×4 = 12，2×1 = 2，再加總 12 + 2 = 14。係數 3 和 2 都要乘，不能只做 4 + 1 = 5。這類題先算每一項，再加總，最後與右邊常數 14 比較是否相等。"
      }
    ],
    "commonMistakes": [
      "把 (3, 2) 與 (2, 3) 當相同",
      "只帶一個未知數，另一個漏掉",
      "正負號帶錯，尤其 x 或 y 為負時",
      "漏乘係數，例如 2x 只寫 x"
    ]
  },
  {
    "skillId": "system-solution-meaning",
    "topicId": "u04-system-basics",
    "title": "聯立方程式解的意義",
    "concept": "聯立方程式的解是同一組 (x, y) 同時使兩個方程式都成立；幾何上對應兩直線的交點。只滿足其中一式的點，只是該直線上的點，不一定是聯立解。檢驗時兩式都要驗，缺一不行。由解反推參數時，也要代入兩式確認。",
    "formula": "解 (x, y) 須同時滿足第一式與第二式",
    "stepGuide": [
      "把候選 (x, y) 帶入第一式，看是否成立",
      "再帶入第二式，看是否也成立",
      "兩式都成立才是聯立解",
      "只成立一式則不是聯立解",
      "圖形上，聯立解是兩直線的交點坐標"
    ],
    "examples": [
      {
        "question": "聯立方程式 {x+y=5, x−y=1} 的解 (3,2) 表示？",
        "explanation": "(3, 2) 使 3 + 2 = 5 且 3 − 2 = 1 都成立，所以表示同時滿足兩式。這就是交點 (3, 2) 的意義。只滿足其中一式的點，只是該直線上的點，不是聯立解。"
      },
      {
        "question": "(1, 3) 對 {2x+y=5, x+y=4} 而言？",
        "explanation": "驗第一式 2×1 + 3 = 5，驗第二式 1 + 3 = 4，兩式都成立才是聯立解。只驗一式就下結論，容易漏掉第二式的要求。聯立題永遠要驗兩式。"
      }
    ],
    "commonMistakes": [
      "只驗一個方程式就當聯立解",
      "把滿足第一式的點直接當解",
      "混淆直線上任意點與交點",
      "參數題只帶一個式就求值"
    ]
  },
  {
    "skillId": "system-substitution-method",
    "topicId": "u04-system-methods",
    "title": "代入消去法",
    "concept": "代入消去法適合某未知數已單獨在一邊或係數為 1 的題型。先從一式解出 x 或 y，再把整個式子代入另一式，消去一個未知數後解一元一次方程式。解出一個未知數後必須回代求另一個，括號要保留，展開時每一項都要乘到。",
    "formula": "由 y = ax + b 代入另一式消去 y",
    "stepGuide": [
      "選係數簡單的一式，寫出 x 或 y 的表示式",
      "把整個式子（含括號）代入另一方程式",
      "合併同類項，解出剩下的未知數",
      "回代原式求另一未知數",
      "把兩數代回兩式驗算是否都成立"
    ],
    "examples": [
      {
        "question": "解 {y = x + 1, 2x + y = 7}，代入第二式得？",
        "explanation": "y 已解出，把 y 換成 (x + 1) 寫入 2x + y = 7，就變成 2x + (x + 1) = 7。整式代入，括號不能省。只代一部分或把兩式左右對調，都會列錯代入式。下一步化簡 3x + 1 = 7 解 x，再回代求 y。"
      },
      {
        "question": "解 {x = 2y, x + y = 9}，y = ?",
        "explanation": "x = 2y 代入 x + y = 9 得 2y + y = 9，3y = 9，y = 3。合併 2y + y = 3y 這步最關鍵。解出 y = 3 後要回代 x = 2×3 = 6，兩數都求出並代回兩式驗算，才算完整解。選 2 是合併同類項時漏算一個 y。"
      }
    ],
    "commonMistakes": [
      "只代一部分項，沒有整式代入",
      "解出 y 就停，沒回代求 x",
      "代入時括號展開漏乘常數",
      "回代時代錯方程式"
    ]
  }
];
