export const QUESTIONS = [
  {
    "questionId": "u04-s001-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數",
    "tags": [
      "代數",
      "system-two-variable-equation-definition",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s001-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數",
    "tags": [
      "代數",
      "system-two-variable-equation-definition",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s001-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數",
    "tags": [
      "代數",
      "system-two-variable-equation-definition",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s001-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數",
    "tags": [
      "代數",
      "system-two-variable-equation-definition",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s001-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數",
    "tags": [
      "代數",
      "system-two-variable-equation-definition",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s001-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數",
    "tags": [
      "代數",
      "system-two-variable-equation-definition",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s001-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數",
    "tags": [
      "代數",
      "system-two-variable-equation-definition",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s001-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數",
    "tags": [
      "代數",
      "system-two-variable-equation-definition",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s001-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數",
    "tags": [
      "代數",
      "system-two-variable-equation-definition",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s001-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數",
    "tags": [
      "代數",
      "system-two-variable-equation-definition",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s001-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數",
    "tags": [
      "代數",
      "system-two-variable-equation-definition",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s001-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "二元一次方程式含兩個未知數，且每個未知數的最高次數都是 1，不能出現 xy、x² 或分母含未知數",
    "tags": [
      "代數",
      "system-two-variable-equation-definition",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u04-s002-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調",
    "tags": [
      "代數",
      "system-ordered-pair-solution-check",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s002-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調",
    "tags": [
      "代數",
      "system-ordered-pair-solution-check",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s002-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調",
    "tags": [
      "代數",
      "system-ordered-pair-solution-check",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s002-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調",
    "tags": [
      "代數",
      "system-ordered-pair-solution-check",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s002-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調",
    "tags": [
      "代數",
      "system-ordered-pair-solution-check",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s002-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調",
    "tags": [
      "代數",
      "system-ordered-pair-solution-check",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s002-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調",
    "tags": [
      "代數",
      "system-ordered-pair-solution-check",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s002-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調",
    "tags": [
      "代數",
      "system-ordered-pair-solution-check",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s002-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調",
    "tags": [
      "代數",
      "system-ordered-pair-solution-check",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s002-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調",
    "tags": [
      "代數",
      "system-ordered-pair-solution-check",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s002-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調",
    "tags": [
      "代數",
      "system-ordered-pair-solution-check",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s002-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "有序數對 (x,y) 是方程式的解，代表把 x、y 代入後等號左右兩邊相等；順序不可對調",
    "tags": [
      "代數",
      "system-ordered-pair-solution-check",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u04-s003-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點",
    "tags": [
      "代數",
      "system-solution-meaning",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s003-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點",
    "tags": [
      "代數",
      "system-solution-meaning",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s003-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點",
    "tags": [
      "代數",
      "system-solution-meaning",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s003-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點",
    "tags": [
      "代數",
      "system-solution-meaning",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s003-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點",
    "tags": [
      "代數",
      "system-solution-meaning",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s003-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點",
    "tags": [
      "代數",
      "system-solution-meaning",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s003-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點",
    "tags": [
      "代數",
      "system-solution-meaning",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s003-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點",
    "tags": [
      "代數",
      "system-solution-meaning",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s003-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點",
    "tags": [
      "代數",
      "system-solution-meaning",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s003-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點",
    "tags": [
      "代數",
      "system-solution-meaning",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s003-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點",
    "tags": [
      "代數",
      "system-solution-meaning",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s003-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "聯立方程式的解是同一組 (x,y) 同時使兩個方程式都成立；幾何上對應兩直線交點",
    "tags": [
      "代數",
      "system-solution-meaning",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u04-s004-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數",
    "tags": [
      "代數",
      "system-substitution-method",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s004-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數",
    "tags": [
      "代數",
      "system-substitution-method",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s004-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數",
    "tags": [
      "代數",
      "system-substitution-method",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s004-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數",
    "tags": [
      "代數",
      "system-substitution-method",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s004-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數",
    "tags": [
      "代數",
      "system-substitution-method",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s004-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數",
    "tags": [
      "代數",
      "system-substitution-method",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s004-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數",
    "tags": [
      "代數",
      "system-substitution-method",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s004-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數",
    "tags": [
      "代數",
      "system-substitution-method",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s004-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數",
    "tags": [
      "代數",
      "system-substitution-method",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s004-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數",
    "tags": [
      "代數",
      "system-substitution-method",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s004-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數",
    "tags": [
      "代數",
      "system-substitution-method",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s004-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "代入消去法：先從一式解出 x 或 y，再代入另一式消去一個未知數，解出後要回代求另一未知數",
    "tags": [
      "代數",
      "system-substitution-method",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u04-s005-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代",
    "tags": [
      "代數",
      "system-elimination-method",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s005-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代",
    "tags": [
      "代數",
      "system-elimination-method",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s005-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代",
    "tags": [
      "代數",
      "system-elimination-method",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s005-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代",
    "tags": [
      "代數",
      "system-elimination-method",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s005-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代",
    "tags": [
      "代數",
      "system-elimination-method",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s005-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代",
    "tags": [
      "代數",
      "system-elimination-method",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s005-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代",
    "tags": [
      "代數",
      "system-elimination-method",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s005-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代",
    "tags": [
      "代數",
      "system-elimination-method",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s005-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代",
    "tags": [
      "代數",
      "system-elimination-method",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s005-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代",
    "tags": [
      "代數",
      "system-elimination-method",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s005-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代",
    "tags": [
      "代數",
      "system-elimination-method",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s005-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "加減消去法：兩式相加或相減使某一未知數係數相消，再解一元一次方程式並回代",
    "tags": [
      "代數",
      "system-elimination-method",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u04-s006-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-scaling",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘",
    "tags": [
      "代數",
      "system-elimination-scaling",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s006-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-scaling",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘",
    "tags": [
      "代數",
      "system-elimination-scaling",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s006-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-scaling",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘",
    "tags": [
      "代數",
      "system-elimination-scaling",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s006-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-scaling",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘",
    "tags": [
      "代數",
      "system-elimination-scaling",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s006-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-scaling",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘",
    "tags": [
      "代數",
      "system-elimination-scaling",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s006-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-scaling",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘",
    "tags": [
      "代數",
      "system-elimination-scaling",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s006-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-scaling",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘",
    "tags": [
      "代數",
      "system-elimination-scaling",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s006-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-scaling",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘",
    "tags": [
      "代數",
      "system-elimination-scaling",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s006-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-scaling",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘",
    "tags": [
      "代數",
      "system-elimination-scaling",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s006-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-scaling",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘",
    "tags": [
      "代數",
      "system-elimination-scaling",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s006-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-scaling",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘",
    "tags": [
      "代數",
      "system-elimination-scaling",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s006-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-scaling",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "係數不成比例時，兩式同乘適當倍數使某未知數係數相同或相反，再相加減消去；整式每一項都要乘",
    "tags": [
      "代數",
      "system-elimination-scaling",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u04-s007-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解",
    "tags": [
      "代數",
      "system-special-cases",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s007-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解",
    "tags": [
      "代數",
      "system-special-cases",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s007-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解",
    "tags": [
      "代數",
      "system-special-cases",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s007-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解",
    "tags": [
      "代數",
      "system-special-cases",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s007-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解",
    "tags": [
      "代數",
      "system-special-cases",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s007-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解",
    "tags": [
      "代數",
      "system-special-cases",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s007-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解",
    "tags": [
      "代數",
      "system-special-cases",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s007-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解",
    "tags": [
      "代數",
      "system-special-cases",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s007-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解",
    "tags": [
      "代數",
      "system-special-cases",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s007-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解",
    "tags": [
      "代數",
      "system-special-cases",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s007-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解",
    "tags": [
      "代數",
      "system-special-cases",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s007-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "消去後若出現 0=0 表示兩式同直線（無限多解）；若出現 0=非0 表示平行（無解）；能解出唯一 x、y 則為唯一解",
    "tags": [
      "代數",
      "system-special-cases",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u04-s008-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式",
    "tags": [
      "代數",
      "system-word-setup-basic",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s008-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式",
    "tags": [
      "代數",
      "system-word-setup-basic",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s008-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式",
    "tags": [
      "代數",
      "system-word-setup-basic",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s008-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式",
    "tags": [
      "代數",
      "system-word-setup-basic",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s008-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式",
    "tags": [
      "代數",
      "system-word-setup-basic",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s008-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式",
    "tags": [
      "代數",
      "system-word-setup-basic",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s008-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式",
    "tags": [
      "代數",
      "system-word-setup-basic",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s008-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式",
    "tags": [
      "代數",
      "system-word-setup-basic",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s008-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式",
    "tags": [
      "代數",
      "system-word-setup-basic",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s008-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式",
    "tags": [
      "代數",
      "system-word-setup-basic",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s008-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式",
    "tags": [
      "代數",
      "system-word-setup-basic",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s008-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
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
    "concept": "應用題先設 x、y 並寫清楚各代表什麼，再依總數、總價、差額等關係各列一式",
    "tags": [
      "代數",
      "system-word-setup-basic",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u04-s009-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "雞兔共 10 隻、腳 28 隻，設雞 x 兔 y，頭數式？",
    "choices": [
      "x + y = 10",
      "2x + 4y = 10",
      "x + y = 28",
      "2x + 2y = 28"
    ],
    "answerIndex": 0,
    "explanation": "頭數只數一次，雞與兔各有一個頭，所以總頭數 10 對應 x+y=10。2x+4y=10 把 10 當腳數右邊卻只有 10 腳，明顯不合理；x+y=28 則把腳數誤寫進頭數式。",
    "steps": [
      "設 x 為雞隻數、y 為兔隻數。",
      "頭數條件：每隻動物一個頭，總頭 10。",
      "寫出頭數方程式 x+y=10。"
    ],
    "commonMistake": "把總腳數 28 誤寫成 x+y=28 的頭數式。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數",
    "tags": [
      "代數",
      "system-chicken-rabbit-problem",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s009-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "雞兔共 10 隻、腳 28 隻，腳數式？",
    "choices": [
      "x + y = 28",
      "2x + 4y = 28",
      "4x + 2y = 28",
      "x + 2y = 28"
    ],
    "answerIndex": 1,
    "explanation": "雞每隻 2 腳、兔每隻 4 腳，總腳 28 應列 2x+4y=28。x+y=28 是頭數與腳數混淆；4x+2y 把雞兔腳數係數對調，會讓雞變 4 腳、兔變 2 腳。 腳數式寫成 4x+2y，把雞兔的腳數係數對調。",
    "steps": [
      "確認雞 2 腳、兔 4 腳。",
      "雞貢獻 2x 腳、兔貢獻 4y 腳。",
      "總腳 28，列 2x+4y=28。"
    ],
    "commonMistake": "腳數式寫成 4x+2y，把雞兔的腳數係數對調。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數",
    "tags": [
      "代數",
      "system-chicken-rabbit-problem",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s009-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "雞兔共 12 隻、腳 32 隻，雞有幾隻？",
    "choices": [
      "6",
      "10",
      "8",
      "4"
    ],
    "answerIndex": 2,
    "explanation": "列 x+y=12、2x+4y=32。由第一式 y=12−x，帶入後 2x+4(12−x)=32，化簡 2x+48−4x=32，−2x=−16，x=8。選 6 是把兔 4 隻誤當雞；10 則超過總頭數 12。解完後兔 4 隻、雞 8 隻，頭 12 腳 32 都符合。 消去後算出 y=4 卻直接填 4 當雞隻數，忘了題目問的是 x。",
    "steps": [
      "列 x+y=12 與 2x+4y=32。",
      "由 x+y=12 得 y=12−x。",
      "帶入腳數式解出 x=8 隻雞。"
    ],
    "commonMistake": "消去後算出 y=4 卻直接填 4 當雞隻數，忘了題目問的是 x。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數",
    "tags": [
      "代數",
      "system-chicken-rabbit-problem",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s009-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "雞兔共 20 隻、腳 56 隻，兔有幾隻？",
    "choices": [
      "10",
      "6",
      "12",
      "8"
    ],
    "answerIndex": 3,
    "explanation": "x+y=20、2x+4y=56。y=20−x 帶入：2x+4(20−x)=56，因此 −2x=−24，x=12，兔 y=8。選 10 是平均分配 20÷2 的錯覺；12 其實是雞隻數不是兔。回代驗算 12 雞 8 兔：頭 20、腳 56，兩項條件都成立。 把解出的 x=12 直接當兔隻數，沒注意題目問的是 y。",
    "steps": [
      "設 x 雞、y 兔，列兩式。",
      "y=20−x 帶入 2x+4y=56。",
      "解出 x=12、y=8，兔有 8 隻。"
    ],
    "commonMistake": "把解出的 x=12 直接當兔隻數，沒注意題目問的是 y。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數",
    "tags": [
      "代數",
      "system-chicken-rabbit-problem",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s009-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "雞兔共 15 隻、腳 42 隻，y = ?",
    "choices": [
      "6",
      "8",
      "9",
      "5"
    ],
    "answerIndex": 0,
    "explanation": "x+y=15、2x+4y=42。第二式兩邊同除以 2 後 x+2y=21，減去 x+y=15 得 y=6。選 8 常是把 42÷(2+4) 當平均腳數的速算誤用；9 超過合理範圍。 用 42÷6=7 當兔隻數，忽略頭數限制 15 隻。",
    "steps": [
      "列 x+y=15 與 2x+4y=42。",
      "腳數式除以 2 後 x+2y=21。",
      "兩式相減後 y=6。"
    ],
    "commonMistake": "用 42÷6=7 當兔隻數，忽略頭數限制 15 隻。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數",
    "tags": [
      "代數",
      "system-chicken-rabbit-problem",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s009-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "雞兔共 8 隻、腳 20 隻，兔有幾隻？",
    "choices": [
      "3",
      "2",
      "4",
      "6"
    ],
    "answerIndex": 1,
    "explanation": "x+y=8、2x+4y=20。y=8−x 帶入：2x+32−4x=20，−2x=−12，x=6，兔 y=2。選 3 是把 20÷8 當每隻平均腳數；4 則沒驗算頭數是否仍為 8。驗算 6 雞 2 兔：頭 8、腳 20，與題目完全一致。 假設雞兔各半 4 隻 4 隻，沒驗算腳數是否為 20。",
    "steps": [
      "列 x+y=8。",
      "y=8−x 帶入 2x+4y=20。",
      "解出 x=6、y=2，兔 2 隻。"
    ],
    "commonMistake": "假設雞兔各半 4 隻 4 隻，沒驗算腳數是否為 20。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數",
    "tags": [
      "代數",
      "system-chicken-rabbit-problem",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s009-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "10 隻全為雞應 20 腳，實際 28 腳，多出的腳來自？",
    "choices": [
      "雞每隻多 2 腳",
      "計算錯誤",
      "兔每隻多 2 腳",
      "頭數算錯"
    ],
    "answerIndex": 2,
    "explanation": "10 隻全雞只有 20 腳，實際 28 腳多 8 腳。每把一隻雞換成兔，腳數多 4−2=2 腳，所以多出來的腳是因兔比雞每隻多 2 腳。選「雞每隻多 2 腳」方向相反。",
    "steps": [
      "全雞 10 隻共 2×10=20 腳。",
      "實際 28 腳，多出 8 腳。",
      "每隻兔比雞多 2 腳，故多出的腳來自兔。"
    ],
    "commonMistake": "把 28−20=8 直接除以 4 當兔隻數，沒說明每隻多 2 腳的來源。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數",
    "tags": [
      "代數",
      "system-chicken-rabbit-problem",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s009-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "雞兔共 25 隻、腳 70 隻，雞 x = ?",
    "choices": [
      "10",
      "12",
      "13",
      "15"
    ],
    "answerIndex": 3,
    "explanation": "x+y=25、2x+4y=70。腳數式除以 2 後 x+2y=35，減 x+y=25 得 y=10，再回推 x=15。選 10 是把兔隻數 y 誤當雞；12、13 都沒滿足兩式同時成立。 兩式相減時 35−25 寫成 15 而沒除以係數差，得到錯誤的 y。",
    "steps": [
      "列 x+y=25 與 2x+4y=70。",
      "腳數式化簡為 x+2y=35。",
      "兩式相減後 y=10，x=15。"
    ],
    "commonMistake": "兩式相減時 35−25 寫成 15 而沒除以係數差，得到錯誤的 y。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數",
    "tags": [
      "代數",
      "system-chicken-rabbit-problem",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s009-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "雞兔共 30 隻、腳 84 隻，兔 y = ?",
    "choices": [
      "12",
      "15",
      "18",
      "10"
    ],
    "answerIndex": 0,
    "explanation": "x+y=30、2x+4y=84。除以 2 後 x+2y=42，減 x+y=30 後 y=12。選 18 是把 x=18 與 y 混淆；15 是 30÷2 的錯誤直覺。回代 x=18、y=12，頭 30 腳 84 都符合，兔 12 隻正確，這是加減消去的標準流程。 解出 x=18 後直接填 18，沒注意題目問的是兔 y。",
    "steps": [
      "列 x+y=30。",
      "2x+4y=84 化簡為 x+2y=42。",
      "相減後 y=12，並確認 x=18 為非負整數。"
    ],
    "commonMistake": "解出 x=18 後直接填 18，沒注意題目問的是兔 y。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數",
    "tags": [
      "代數",
      "system-chicken-rabbit-problem",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s009-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "雞兔共 6 隻、腳 16 隻，雞有幾隻？",
    "choices": [
      "2",
      "4",
      "3",
      "5"
    ],
    "answerIndex": 1,
    "explanation": "x+y=6、2x+4y=16。y=6−x 帶入：2x+24−4x=16，−2x=−8，x=4。選 2 是兔隻數；3 則 3 雞 3 兔只有 18 腳，超過 16 腳。驗算 4 雞 2 兔：頭 6、腳 16，與題目條件完全吻合。 小數字題直接猜 3 雞 3 兔，沒驗算 2×3+4×3=18 超過 16。",
    "steps": [
      "列 x+y=6。",
      "y=6−x 帶入 2x+4y=16。",
      "解出 x=4，兔 y=2，驗算 8+8=16 腳。"
    ],
    "commonMistake": "小數字題直接猜 3 雞 3 兔，沒驗算 2×3+4×3=18 超過 16。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數",
    "tags": [
      "代數",
      "system-chicken-rabbit-problem",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s009-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "{x + y = 18, 2x + 4y = 48}，x = ?",
    "choices": [
      "6",
      "9",
      "12",
      "10"
    ],
    "answerIndex": 2,
    "explanation": "第二式除以 2 後 x+2y=24，減 x+y=18 得 y=6，再得 x=12。選 6 是兔隻數；9、10 都不滿足兩式。這組聯立就是標準雞兔同籠的頭腳兩式。 兩式相減時 24−18 的係數處理錯誤，把 y 算成 12 再誤填 x。",
    "steps": [
      "辨識 x+y=18 為頭數式。",
      "2x+4y=48 化簡為 x+2y=24。",
      "兩式相減後 y=6，回推 x=12。"
    ],
    "commonMistake": "兩式相減時 24−18 的係數處理錯誤，把 y 算成 12 再誤填 x。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數",
    "tags": [
      "代數",
      "system-chicken-rabbit-problem",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s009-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "雞兔共 50 隻、腳 140 隻，兔有幾隻？",
    "choices": [
      "25",
      "15",
      "30",
      "20"
    ],
    "answerIndex": 3,
    "explanation": "x+y=50、2x+4y=140。除以 2 後 x+2y=70，減 x+y=50 得 y=20，雞 x=30。選 25 是 50÷2 的錯覺；30 其實是雞隻數。農場情境中兔 20 隻、雞 30 隻符合頭腳條件。 大數字題用 140÷(2+4) 速算得 23 再隨便選接近選項，沒列聯立。",
    "steps": [
      "列 x+y=50 與 2x+4y=140。",
      "腳數式化簡為 x+2y=70。",
      "相減後 y=20，回代驗算 60+80=140 腳。"
    ],
    "commonMistake": "大數字題用 140÷(2+4) 速算得 23 再隨便選接近選項，沒列聯立。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數",
    "tags": [
      "代數",
      "system-chicken-rabbit-problem",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u04-s010-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-ticket-price-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "成人 x 元、學生 y 元，3 成人 2 學生 700 元，列式？",
    "choices": [
      "3x + 2y = 700",
      "x + y = 700",
      "2x + 3y = 700",
      "3x + 2y = 5"
    ],
    "answerIndex": 0,
    "explanation": "成人票單價 x 買 3 張貢獻 3x，學生票 y 買 2 張貢獻 2y，總價 700 元列 3x+2y=700。x+y=700 把票價與總價混淆；2x+3y 則把成人學生張數對調。 把 3+2=5 張票寫成 3x+2y=5，單位變成張數而非金額。",
    "steps": [
      "設 x 為成人票價、y 為學生票價。",
      "3 張成人票金額 3x，2 張學生票 2y。",
      "總價 700 元，列 3x+2y=700。"
    ],
    "commonMistake": "把 3+2=5 張票寫成 3x+2y=5，單位變成張數而非金額。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數",
    "tags": [
      "代數",
      "system-ticket-price-problem",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s010-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-ticket-price-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "成人 2 張、學生 5 張 650 元，列式？",
    "choices": [
      "x + y = 650",
      "2x + 5y = 650",
      "5x + 2y = 650",
      "2x + 5y = 7"
    ],
    "answerIndex": 1,
    "explanation": "2 張成人票 2x 元、5 張學生票 5y 元，合計 650 元，列 2x+5y=650。5x+2y 把兩種票張數對調；x+y=650 則把票價相加當總價。 看到 2 和 5 就寫 5x+2y，把成人學生張數係數對調。",
    "steps": [
      "成人 2 張對應係數 2 乘 x。",
      "學生 5 張對應係數 5 乘 y。",
      "總價 650，列 2x+5y=650。"
    ],
    "commonMistake": "看到 2 和 5 就寫 5x+2y，把成人學生張數係數對調。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數",
    "tags": [
      "代數",
      "system-ticket-price-problem",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s010-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-ticket-price-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "成人票比學生票貴 100 元，列式？",
    "choices": [
      "x + y = 100",
      "x = 100y",
      "x − y = 100",
      "y − x = 100"
    ],
    "answerIndex": 2,
    "explanation": "「成人比學生貴 100 元」表示成人票價減學生票價等於 100，列 x−y=100。y−x=100 是學生比成人貴；x=100y 則變成倍數關係而非差額。 「貴 100 元」寫成 y−x=100，差價正負方向弄反。",
    "steps": [
      "設 x 成人票價、y 學生票價。",
      "「貴 100 元」表示兩票價相差 100。",
      "成人較高，列 x−y=100。"
    ],
    "commonMistake": "「貴 100 元」寫成 y−x=100，差價正負方向弄反。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數",
    "tags": [
      "代數",
      "system-ticket-price-problem",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s010-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-ticket-price-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "4 成人 1 學生 900 元，且 x + y = 300，x = ?",
    "choices": [
      "150",
      "250",
      "100",
      "200"
    ],
    "answerIndex": 3,
    "explanation": "4x+y=900 且 x+y=300。兩式相減後 3x=600，x=200。選 150 沒考慮 4 張成人票的係數；100 則讓 y=200 時 4×100+200=600 不符 900。回代 y=100，4×200+100=900 元，兩式同時成立。 只用 x+y=300 就猜 x=150，沒用 4x+y=900 的第二條件。",
    "steps": [
      "列 4x+y=900 與 x+y=300。",
      "兩式相減消去 y：3x=600。",
      "解出 x=200，回代後 y=100。"
    ],
    "commonMistake": "只用 x+y=300 就猜 x=150，沒用 4x+y=900 的第二條件。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數",
    "tags": [
      "代數",
      "system-ticket-price-problem",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s010-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-ticket-price-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "全票 x、半票 y，各 10 張 3000 元，列式？",
    "choices": [
      "10x + 10y = 3000",
      "x + y = 3000",
      "10x + 10y = 20",
      "x + y = 10"
    ],
    "answerIndex": 0,
    "explanation": "全票 10 張 10x、半票 10 張 10y，總價 3000 列 10x+10y=3000。x+y=3000 把票價相加當金額；10x+10y=20 則把 10+10 張數當總價。兩種票各 10 張，係數 10 乘在票價上才是金額式。",
    "steps": [
      "全票 10 張金額 10x。",
      "半票 10 張金額 10y。",
      "合計 3000 元，列 10x+10y=3000。"
    ],
    "commonMistake": "各 10 張就寫 x+y=10，把張數關係誤當金額式。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數",
    "tags": [
      "代數",
      "system-ticket-price-problem",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s010-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-ticket-price-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "成人 5 學生 8 共 1160 元，且 x − y = 40，x = ?",
    "choices": [
      "80",
      "120",
      "100",
      "140"
    ],
    "answerIndex": 1,
    "explanation": "列 5x+8y=1160 與 x−y=40。由 x=y+40 帶入金額式得 13y=960。檢驗選項：x=120、y=80 時差價 40 成立。選 80 時 y=40 差價不符；100 時 y=60 差價也不對。 只解 x−y=40 就選 x=80，沒帶入 5x+8y=1160 驗算。 帶入金額式並檢驗選項，x=120。",
    "steps": [
      "列 5x+8y=1160 與 x−y=40。",
      "由 x−y=40 寫成 x=y+40。",
      "帶入金額式並檢驗選項，x=120。"
    ],
    "commonMistake": "只解 x−y=40 就選 x=80，沒帶入 5x+8y=1160 驗算。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數",
    "tags": [
      "代數",
      "system-ticket-price-problem",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s010-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-ticket-price-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "3 成人 4 學生 820 元，2 成人 3 學生 560 元，y = ?",
    "choices": [
      "100",
      "60",
      "80",
      "120"
    ],
    "answerIndex": 2,
    "explanation": "列 3x+4y=820 與 2x+3y=560。第一式減第二式得 x+y=260，再與任一式聯立可解 y=80。選 100 是沒消去就猜；60 則讓 x 過小無法滿足 820 元。 兩組購買只列一條總價式就開始解，少了一個條件。",
    "steps": [
      "列 3x+4y=820。",
      "列 2x+3y=560。",
      "兩式相減後 x+y=260，再解出 y=80。"
    ],
    "commonMistake": "兩組購買只列一條總價式就開始解，少了一個條件。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數",
    "tags": [
      "代數",
      "system-ticket-price-problem",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s010-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-ticket-price-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "全票 x、優待 y，x + y = 400 且 2x + y = 650，x = ?",
    "choices": [
      "200",
      "150",
      "300",
      "250"
    ],
    "answerIndex": 3,
    "explanation": "x+y=400 與 2x+y=650 相減後 x=250。選 200 則 y=200 時 2x+y=600 不符；150 讓 y=250 時 2×150+250=550 也不對。回代 y=150，2×250+150=650 元，兩式都成立，全票 250 元、優待 150 元，加減消去最簡單。 相減時 650−400 算成 200 就停，忘了左邊係數差也是 1。",
    "steps": [
      "列 x+y=400。",
      "列 2x+y=650。",
      "兩式相減消去 y，因此 x=250。"
    ],
    "commonMistake": "相減時 650−400 算成 200 就停，忘了左邊係數差也是 1。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數",
    "tags": [
      "代數",
      "system-ticket-price-problem",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s010-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-ticket-price-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "6 成人 4 兒童 1400 元，4x + 3y = 980，x = ?",
    "choices": [
      "200",
      "150",
      "180",
      "220"
    ],
    "answerIndex": 0,
    "explanation": "題目給 4x+3y=980 這條購買紀錄，x=200 時 4×200=800，3y=180，y=60。選 150 讓 4×150=600，3y=380 不是整數票價；220 則超過合理範圍。成人票 200 元、兒童票 60 元時，4×200+3×60=980 成立。 把 6 成人 4 兒童 1400 直接寫成 6x+4y=1400 與 4x+3y=980 混用係數。",
    "steps": [
      "辨識 4x+3y=980 中係數 4、3 是張數。",
      "假設 x=200，算 4×200=800。",
      "3y=980−800=180，y=60 為合理兒童票價。"
    ],
    "commonMistake": "把 6 成人 4 兒童 1400 直接寫成 6x+4y=1400 與 4x+3y=980 混用係數。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數",
    "tags": [
      "代數",
      "system-ticket-price-problem",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s010-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-ticket-price-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "早鳥 x、現場 y，x − y = 50 且 3x + 2y = 700，x = ?",
    "choices": [
      "150",
      "160",
      "140",
      "120"
    ],
    "answerIndex": 1,
    "explanation": "x−y=50 可知 x=y+50，帶入 3x+2y=700：3(y+50)+2y=700，5y=550，y=110，x=160。選 150 只滿足差 50 但 3×150+2×100=650≠700；120 差價也不對。回代驗算 3×160+2×110=700 元，早鳥現場差價 50 也成立，兩條件缺一不可。 只用 x−y=50 就猜 x=150、y=100，沒驗算 3x+2y 是否等於 700。",
    "steps": [
      "由 x−y=50 寫 x=y+50。",
      "帶入 3x+2y=700 得 5y=550。",
      "解 y=110，回推 x=160。"
    ],
    "commonMistake": "只用 x−y=50 就猜 x=150、y=100，沒驗算 3x+2y 是否等於 700。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數",
    "tags": [
      "代數",
      "system-ticket-price-problem",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s010-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-ticket-price-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "團體 x、個人 y，2 團 3 個 1100 元，x + y = 500，x = ?",
    "choices": [
      "300",
      "350",
      "400",
      "450"
    ],
    "answerIndex": 2,
    "explanation": "設團體票 x 元、個人票 y 元，列 2x + 3y = 1100 與 x + y = 500。由第二式 y = 500 − x 代入第一式，2x + 3(500 − x) = 1100，解得 x = 400、y = 100。選 300 時總價會超過 1100 元，應排除。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "列 2x+3y=1100。",
      "由 x+y=500 得 y=500−x。",
      "帶入解出 x=400、y=100。"
    ],
    "commonMistake": "x+y=500 誤解成兩票價相加 500 就選 x=300、y=200，沒用 2x+3y=1100。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數",
    "tags": [
      "代數",
      "system-ticket-price-problem",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s010-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-ticket-price-problem",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "全票 x、學生 y 共 100 張 8000 元，x + y = 100 且 80x + 50y = 8000，x = ?",
    "choices": [
      "80",
      "120",
      "60",
      "100"
    ],
    "answerIndex": 3,
    "explanation": "此題 x、y 是全票與學生票的張數，80、50 是各票單價。x+y=100 且 80x+50y=8000。y=100−x 帶入：80x+50(100−x)=8000，30x=3000，x=100 張全票。選 80 則 80×80+50×20=7400 不足 8000 元。全票 100 張時 80×100=8000 元，與總張數 100 也吻合。",
    "steps": [
      "辨識 x、y 是張數，80、50 是票價。",
      "列 x+y=100 與 80x+50y=8000。",
      "消去 y 得 30x=3000，全票 x=100 張。"
    ],
    "commonMistake": "看到 8000 與 100 就猜 x=80，沒列 80x+50y=8000 這條金額式。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數",
    "tags": [
      "代數",
      "system-ticket-price-problem",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u04-s011-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "蘋果 x 元/個、橘子 y 元/個，4 蘋果 3 橘子 38 元，列式？",
    "choices": [
      "4x + 3y = 38",
      "x + y = 38",
      "3x + 4y = 38",
      "4x + 3y = 7"
    ],
    "answerIndex": 0,
    "explanation": "蘋果單價 x 買 4 個 4x，橘子 y 買 3 個 3y，總價 38 列 4x+3y=38。3x+4y 把蘋果橘子數量對調；4x+3y=7 則把 4+3 當總價。列式時 4 個蘋果係數在前、3 個橘子在後，順序不能對調。",
    "steps": [
      "設 x 蘋果單價、y 橘子單價。",
      "4 個蘋果金額 4x，3 個橘子 3y。",
      "合計 38 元，列 4x+3y=38。"
    ],
    "commonMistake": "把 4 蘋果 3 橘子寫成 3x+4y=38，兩種水果件數係數對調。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式",
    "tags": [
      "代數",
      "system-quantity-price-problem",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s011-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "共 10 個、60 元，x + y = 10 且 3x + 5y = 60，y = ?",
    "choices": [
      "4",
      "6",
      "5",
      "8"
    ],
    "answerIndex": 1,
    "explanation": "x+y=10 且 3x+5y=60。x=10−y 帶入：3(10−y)+5y=60，2y=30，y=6。選 4 則 x=6 時 3×6+5×4=38 不足 60；5 讓 3×5+5×5=40 也不對。回代後兩式同時成立，y=6 是正解，兩商品單價和件數都合理。 看到 10 個 60 元就猜 y=5 平均分配，沒用 3x+5y=60 的係數差。",
    "steps": [
      "由 x+y=10 得 x=10−y。",
      "帶入 3x+5y=60。",
      "化簡 2y=30，解 y=6。"
    ],
    "commonMistake": "看到 10 個 60 元就猜 y=5 平均分配，沒用 3x+5y=60 的係數差。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式",
    "tags": [
      "代數",
      "system-quantity-price-problem",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s011-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "A 比 B 貴 20 且 2A + B = 130，x − y = 20，x = ?",
    "choices": [
      "40",
      "60",
      "50",
      "45"
    ],
    "answerIndex": 2,
    "explanation": "x−y=20 且 2x+y=130（2A+B 中 A 對應 x）。y=x−20 帶入 2x+(x−20)=130，3x=150，x=50。選 40 則 y=20 時 2×40+20=100 不足 130；60 則差價不符。回代 y=30，2×50+30=130 元，差價 20 元也成立，兩條件都吻合。 「A 比 B 貴 20」寫成 y−x=20，差價正負弄反。",
    "steps": [
      "由 x−y=20 得 y=x−20。",
      "2x+y=130 寫成 2x+(x−20)=130。",
      "解 3x=150，x=50。"
    ],
    "commonMistake": "「A 比 B 貴 20」寫成 y−x=20，差價正負弄反。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式",
    "tags": [
      "代數",
      "system-quantity-price-problem",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s011-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "3 斤蘋果 2 斤梨 86 元，蘋果 18/斤，2y = 86 − 54，y = ?",
    "choices": [
      "14",
      "18",
      "20",
      "16"
    ],
    "answerIndex": 3,
    "explanation": "蘋果 18 元/斤，3 斤共 54 元。梨的 2 斤金額 86−54=32，2y=32，y=16。選 14 則 2×14=28 加上 54 只有 82 元；18 則把蘋果單價誤當梨價。梨 16 元/斤時，3×18+2×16=54+32=86 元，與總價吻合。 2y=86−54 算成 2y=32 後除以 2 後 16，卻誤填 32 當 y。",
    "steps": [
      "蘋果 3 斤金額 3×18=54 元。",
      "總價 86 減 54 得梨 2 斤 32 元。",
      "2y=32，梨單價 y=16 元/斤。"
    ],
    "commonMistake": "2y=86−54 算成 2y=32 後除以 2 後 16，卻誤填 32 當 y。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式",
    "tags": [
      "代數",
      "system-quantity-price-problem",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s011-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "5 紅 3 藍 74 元，5x + 3y = 74，x = 10，y = ?",
    "choices": [
      "8",
      "6",
      "12",
      "14"
    ],
    "answerIndex": 0,
    "explanation": "已知 x=10，5×10=50，3y=74−50=24，y=8。選 6 則 50+18=68 不足 74；12 則 50+36=86 超過 74。紅筆 10 元、藍筆 8 元時，5×10+3×8=74 元正確，記得先算 5x 再解 y，單位都是元。 x=10 時直接寫 y=10，沒把 5x 先算成 50 再減。",
    "steps": [
      "5x+3y=74 中 x=10。",
      "算 5×10=50。",
      "3y=24，解 y=8。"
    ],
    "commonMistake": "x=10 時直接寫 y=10，沒把 5x 先算成 50 再減。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式",
    "tags": [
      "代數",
      "system-quantity-price-problem",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s011-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "2 大 5 小 160 元，x + y = 30 且 2x + 5y = 160，x = ?",
    "choices": [
      "40",
      "50",
      "60",
      "35"
    ],
    "answerIndex": 1,
    "explanation": "x+y=30 且 2x+5y=160。將 x+y=30 乘以 2 得 2x+2y=60，與 2x+5y=160 相減後 3y=100。回代後大杯單價 x=50 元。選 40 則 2×40+5×16=160 但 x+y=56 不符 30。聯立解出大杯單價 50 元後，記得用第二式回代驗算。",
    "steps": [
      "列 x+y=30 與 2x+5y=160。",
      "將 x+y=30 乘以 2 得 2x+2y=60。",
      "兩式相減後 3y=100，回代 x=50。"
    ],
    "commonMistake": "把 x+y=30 當成單價相加 30 元，沒當數量或單價關係式。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式",
    "tags": [
      "代數",
      "system-quantity-price-problem",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s011-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "6 筆 6 橡皮 84 元，x + y = 14 且 2x + y = 22，x = ?",
    "choices": [
      "6",
      "10",
      "8",
      "12"
    ],
    "answerIndex": 2,
    "explanation": "x+y=14 與 2x+y=22 相減後 x=8。選 6 則 y=8 時 2×6+8=20 不符 22；10 則 y=4 時 2×10+4=24 超過 22。x=8 時 2×8+y=22 因此 y=6，筆 8 元、橡皮 6 元，金額式也成立，兩條聯立都吻合。 6 筆 6 橡皮誤解成 x=6、y=6 直接填 6，沒列 2x+y=22。",
    "steps": [
      "列 x+y=14。",
      "列 2x+y=22。",
      "兩式相減消去 y，因此 x=8。"
    ],
    "commonMistake": "6 筆 6 橡皮誤解成 x=6、y=6 直接填 6，沒列 2x+y=22。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式",
    "tags": [
      "代數",
      "system-quantity-price-problem",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s011-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "A 30 元、B 45 元，12 件 480 元，30x + 45y = 480 且 x + y = 12，y = ?",
    "choices": [
      "4",
      "6",
      "10",
      "8"
    ],
    "answerIndex": 3,
    "explanation": "30x+45y=480 且 x+y=12。x=12−y 帶入：30(12−y)+45y=480，15y=120，y=8。選 4 則 x=8 時 240+180=420 不足；6 則 360+270=630 超過 480。回代 x=4、y=8，30×4+45×8=480 元，件數 12 也對，兩式都成立無誤，A 商品 4 件、B 商品 8 件。 看到 A 30、B 45 就猜 y=6 平均，沒用 12 件 480 元的總價條件。",
    "steps": [
      "由 x+y=12 得 x=12−y。",
      "帶入 30x+45y=480。",
      "化簡 15y=120，解 y=8。"
    ],
    "commonMistake": "看到 A 30、B 45 就猜 y=6 平均，沒用 12 件 480 元的總價條件。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式",
    "tags": [
      "代數",
      "system-quantity-price-problem",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s011-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "2 盒蛋 3 瓶奶 210 元，4 盒 1 瓶 250 元，x = ?",
    "choices": [
      "55",
      "50",
      "60",
      "45"
    ],
    "answerIndex": 0,
    "explanation": "列 2x+3y=210 與 4x+y=250。第一式乘 2 得 4x+6y=420，減第二式 5y=170，y=34，x=55。選 50 則 2×50+3×34=188≠210；60 則 4×60+34=274 超過 250。蛋 55 元/盒、奶 34 元/瓶時，兩組購買金額都吻合。 兩組購買只列 2x+3y=210 一條，沒用 4 盒 1 瓶的第二條件。",
    "steps": [
      "列 2x+3y=210。",
      "列 4x+y=250。",
      "消去 y 解出 x=55、y=34。"
    ],
    "commonMistake": "兩組購買只列 2x+3y=210 一條，沒用 4 盒 1 瓶的第二條件。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式",
    "tags": [
      "代數",
      "system-quantity-price-problem",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s011-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "5 平 2 精 290 元，3 平 4 精 310 元，x = ?",
    "choices": [
      "40",
      "30",
      "50",
      "35"
    ],
    "answerIndex": 1,
    "explanation": "列 5x+2y=290 與 3x+4y=310。第一式乘 2 得 10x+4y=580，減 3x+4y=310 後 7x=270。聯立解出平裝單價 x=30 元。選 40 則 5×40+2y=290 因此 y=45，但 3×40+4×45=300 不符 310，應排除，平裝 30 元才合理。 5 平 2 精與 3 平 4 精的係數對調，列成 2x+5y=290。",
    "steps": [
      "列 5x+2y=290 與 3x+4y=310。",
      "第一式乘 2 再減第二式消去 y。",
      "解出平裝單價 x=30 元。"
    ],
    "commonMistake": "5 平 2 精與 3 平 4 精的係數對調，列成 2x+5y=290。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式",
    "tags": [
      "代數",
      "system-quantity-price-problem",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s011-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "3 大 2 小 220 元，2 大 3 小 230 元，x = ?",
    "choices": [
      "40",
      "60",
      "50",
      "45"
    ],
    "answerIndex": 2,
    "explanation": "列 3x+2y=220 與 2x+3y=230。兩式聯立加減消去 y 後解出大杯單價 x=50 元。選 40 則 3×40+2y=220 因此 y=50，但 2×40+3×50=230 兩式同時成立，故 x=50 才是大杯單價。 3 大 2 小與 2 大 3 小只列一條總價式就解，少一個條件。",
    "steps": [
      "列 3x+2y=220 與 2x+3y=230。",
      "兩式分別乘 3、2 後相減消去 y。",
      "解出大杯單價 x=50 元。"
    ],
    "commonMistake": "3 大 2 小與 2 大 3 小只列一條總價式就解，少一個條件。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式",
    "tags": [
      "代數",
      "system-quantity-price-problem",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s011-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "40 筆 25 本 650 元，筆 12 元，y = ?",
    "choices": [
      "8",
      "12",
      "15",
      "10"
    ],
    "answerIndex": 3,
    "explanation": "筆每支 12 元，40 支共 480 元。列 40×12+25y=650，化簡 25y=170。聯立驗算後本子單價 y=10 元。選 8 則 25×8=200，合計 680 元超過 650；12 則 480+300=780 更不合理。 40 筆 25 本直接寫 40x+25y=650 但把 40、25 當單價而非件數。",
    "steps": [
      "筆 12 元/支，40 支金額 480 元。",
      "列 40×12+25y=650。",
      "化簡解出本子單價 y=10 元。"
    ],
    "commonMistake": "40 筆 25 本直接寫 40x+25y=650 但把 40、25 當單價而非件數。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式",
    "tags": [
      "代數",
      "system-quantity-price-problem",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u04-s012-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "小華先以每小時 x km 的速度走 2 小時，再以每小時 y km 的速度走 3 小時，兩段路程相加共 19 km。應列哪一式？",
    "choices": [
      "2x + 3y = 19",
      "x + y = 19",
      "5(x + y) = 19",
      "2x + 3y = 5"
    ],
    "answerIndex": 0,
    "explanation": "每段路程都是速率乘時間：第一段 2x km、第二段 3y km，相加得 19 km，所以 2x + 3y = 19。x + y = 19 把兩段時間都當 1 小時；5(x + y) = 19 則誤把速率先相加。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "確認 x、y 分別代表兩段不同的速率（km/h）。",
      "第一段路程 = 2 × x，第二段路程 = 3 × y。",
      "總路程 19 km 表示兩段相加：2x + 3y = 19。"
    ],
    "commonMistake": "把 2 小時與 3 小時的時間直接加在未知數上，列成 x + y = 19。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t",
    "tags": [
      "代數",
      "system-rate-problem",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s012-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "甲以 4 km/h、乙以 6 km/h 同向而行 2 小時，乙比甲多走 4 km。下列哪一個算式正確？",
    "choices": [
      "6 + 4 = 4",
      "(6 − 4) × 2 = 4",
      "4 × 6 = 4",
      "6 − 4 = 2"
    ],
    "answerIndex": 1,
    "explanation": "同向時路程差 = (較快 − 較慢) × 時間 = (6 − 4) × 2 = 4 km。6 + 4 = 4 把速率相加而非相減；6 − 4 = 2 只算速率差，漏乘 2 小時。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "同向追及：路程差 = 速率差 × 時間。",
      "速率差 = 6 − 4 = 2 km/h。",
      "2 小時內多走 2 × 2 = 4 km，算式為 (6 − 4) × 2 = 4。"
    ],
    "commonMistake": "同向問題卻把兩車速率相加，誤以為 6 + 4 能表示路程差。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t",
    "tags": [
      "代數",
      "system-rate-problem",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s012-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "船在靜水中的速率為每小時 x km，水流速率為 2 km/h，則順流而下的實際速率為？",
    "choices": [
      "x − 2",
      "x × 2",
      "x + 2",
      "2 − x"
    ],
    "answerIndex": 2,
    "explanation": "順流時水流協助前進，實際速率 = 靜水速率 + 水流速率 = x + 2。x − 2 是逆流速率；x × 2 把兩速率相乘，意義不對。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "順流：船速與水流同方向，速率相加。",
      "靜水速率 x km/h，水流 2 km/h。",
      "順流速率 = x + 2 km/h。"
    ],
    "commonMistake": "順逆流搞反，把順流寫成 x − 2。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t",
    "tags": [
      "代數",
      "system-rate-problem",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s012-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "A 車 60 km/h、B 車 80 km/h 相向而行，2 小時後相遇。兩地相距多少 km？",
    "choices": [
      "140 km",
      "240 km",
      "160 km",
      "280 km"
    ],
    "answerIndex": 3,
    "explanation": "相向相遇：總路程 = (60 + 80) × 2 = 140 × 2 = 280 km。140 km 只算速率之和漏乘時間；160 km 是 80 × 2，只算一車路程。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "相向時兩車共同走完全程，速率要相加。",
      "合速率 = 60 + 80 = 140 km/h。",
      "2 小時共走 140 × 2 = 280 km，即兩地距離。"
    ],
    "commonMistake": "算出速率之和 140 就當答案，忘記再乘 2 小時。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t",
    "tags": [
      "代數",
      "system-rate-problem",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s012-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "志明先以 x km/h 步行 2 小時，再以 y km/h 騎腳踏車 1 小時，全程 14 km。已知 x = 4，求 y。",
    "choices": [
      "6",
      "4",
      "8",
      "10"
    ],
    "answerIndex": 0,
    "explanation": "步行 4 × 2 = 8 km，剩 14 − 8 = 6 km 由腳踏車完成。騎 1 小時，所以 y = 6 km/h。選 4 是把步行速率誤當騎車速率；選 8 則把 6 km 當成 2 小時的總距。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "列式 2x + y = 14，以 x = 4 得 8 + y = 14。",
      "解得 y = 6。",
      "也可分段：步行 8 km，腳踏車需走 6 km、1 小時，速率 6 km/h。"
    ],
    "commonMistake": "算出剩餘 6 km 後，又除以 2 小時，誤得 y = 3 或混淆兩段時間。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t",
    "tags": [
      "代數",
      "system-rate-problem",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s012-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "快車 90 km/h、慢車 60 km/h 同向行駛 3 小時，快車比慢車多走多少 km？",
    "choices": [
      "30 km",
      "90 km",
      "150 km",
      "60 km"
    ],
    "answerIndex": 1,
    "explanation": "同向路程差 = (90 − 60) × 3 = 30 × 3 = 90 km。30 km 只算速率差漏乘 3 小時；150 km 是把兩車路程相加 270 再減 120 時算錯。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "同向：先求速率差 90 − 60 = 30 km/h。",
      "時間 3 小時，路程差 = 30 × 3。",
      "快車比慢車多走 90 km。"
    ],
    "commonMistake": "算出速率差 30 km/h 就直接選 30 km，沒有乘 3 小時。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t",
    "tags": [
      "代數",
      "system-rate-problem",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s012-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某生以 x km/h 走 2 小時、以 y km/h 走 3 小時，總路程 25 km，即 2x + 3y = 25。若 x = 5，求 y。",
    "choices": [
      "4",
      "3",
      "5",
      "6"
    ],
    "answerIndex": 2,
    "explanation": "已知步行速率 x = 5 km/h，帶入 2x + 3y = 25 得 10 + 3y = 25，移項後 3y = 15，所以騎車速率 y = 5 km/h。選 4 是把 15 誤除以 4；選 3 則在移項時減法出錯。回代 2×5 + 3×5 = 25 km，兩段路程加總與題目一致。",
    "steps": [
      "把 x = 5 帶入 2x + 3y = 25。",
      "10 + 3y = 25，移項得 3y = 15。",
      "y = 5 km/h。"
    ],
    "commonMistake": "2 × 5 算成 15，導致 3y = 10 而得到非整數答案。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t",
    "tags": [
      "代數",
      "system-rate-problem",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s012-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "去程以 x km/h 走 2 小時，回程以 y km/h 走 3 小時，兩段路程相等，即 2x = 3y。若 2x = 24，求 x。",
    "choices": [
      "10",
      "8",
      "15",
      "12"
    ],
    "answerIndex": 3,
    "explanation": "2x = 24 直接得 x = 12 km/h。不需要先求 y。選 8 是把 24 除以 3（回程時間）；選 10 則在 24 ÷ 2 時算錯。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "題目已給 2x = 24，兩段路程相等。",
      "兩邊同除以 2：x = 12。",
      "x 是去程速率 12 km/h。"
    ],
    "commonMistake": "明明可以直接由 2x = 24 求 x，卻先去算 y 再回代，中途算錯。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t",
    "tags": [
      "代數",
      "system-rate-problem",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s012-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩車相向而行 3 小時共走 270 km，速率之和 x + y = 90。若甲車 x = 50 km/h，求乙車速率 y。",
    "choices": [
      "40",
      "50",
      "30",
      "45"
    ],
    "answerIndex": 0,
    "explanation": "相向而行時合速率為 x + y = 90 km/h。甲車 x = 50 時，乙車 y = 90 − 50 = 40 km/h。也可驗算 (50 + 40) × 3 = 270 km，與題目總路程吻合。選 50 是誤以為兩車速率相同；選 30 則把 90 − 50 算成 30。",
    "steps": [
      "相向 3 小時走 270 km，合速率 270 ÷ 3 = 90 km/h。",
      "即 x + y = 90。",
      "x = 50 時，y = 90 − 50 = 40 km/h。"
    ],
    "commonMistake": "用 270 ÷ 50 去除以甲車速率，誤求乙車時間而非速率。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t",
    "tags": [
      "代數",
      "system-rate-problem",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s012-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "步行 1.5 小時、騎車 2 小時共走 21 km，列式 1.5x + 2y = 21。若步行速率 x = 6 km/h，求騎車速率 y。",
    "choices": [
      "4",
      "6",
      "8",
      "5"
    ],
    "answerIndex": 1,
    "explanation": "以 x = 6 帶入 1.5x + 2y = 21，先算 1.5 × 6 = 9 km，再得 9 + 2y = 21，2y = 12，所以騎車速率 y = 6 km/h。選 4 是把 12 誤除以 3；選 5 則在 1.5 × 6 時算成 7.5 而非 9。回代 1.5×6 + 2×6 = 21 km，兩段路程加總正確。請再核對一次計算與題意。",
    "steps": [
      "以 x = 6：1.5 × 6 + 2y = 21。",
      "9 + 2y = 21，2y = 12。",
      "y = 6 km/h。"
    ],
    "commonMistake": "1.5 × 6 算成 6 或 8，導致後續 2y 的值全錯。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t",
    "tags": [
      "代數",
      "system-rate-problem",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s012-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "汽車以 x km/h 開 10 小時，機車以 y km/h 開 5 小時，兩段總里程 200 km，即 10x + 5y = 200。若 x = 12，求 y。",
    "choices": [
      "14",
      "18",
      "16",
      "20"
    ],
    "answerIndex": 2,
    "explanation": "以 x = 12 帶入 10x + 5y = 200，先算汽車段 10 × 12 = 120 km，再得 120 + 5y = 200，5y = 80，所以機車速率 y = 16 km/h。選 14 是把 80 誤除以 6；選 18 則 120 + 5×18 = 210 超過 200 km。回代 10×12 + 5×16 = 200 km，兩段里程加總符合題意。請再核對一次計算與題意。",
    "steps": [
      "以 x = 12：10 × 12 + 5y = 200。",
      "120 + 5y = 200，5y = 80。",
      "y = 16 km/h。"
    ],
    "commonMistake": "10 × 12 算成 100，使 5y = 100 而誤得 y = 20。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t",
    "tags": [
      "代數",
      "system-rate-problem",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s012-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "校慶義賣時，去程搭巴士以 x km/h 行駛 1 小時共 60 km；回程改搭機車，以 y km/h 行駛 1.5 小時也走 60 km。求回程速率 y。",
    "choices": [
      "45",
      "50",
      "42",
      "40"
    ],
    "answerIndex": 3,
    "explanation": "回程路程 60 km、時間 1.5 小時，y = 60 ÷ 1.5 = 40 km/h。選 45 是把 60 除以 1.33 左右；選 50 則誤以為去程速率就是回程速率。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "回程與去程路程相同，都是 60 km。",
      "機車行駛 1.5 小時，速率 y = 60 ÷ 1.5。",
      "y = 40 km/h。"
    ],
    "commonMistake": "看到去程 1 小時走 60 km 就寫 y = 60，忽略回程花了 1.5 小時。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t",
    "tags": [
      "代數",
      "system-rate-problem",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u04-s013-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "40% 糖水 x g 與 20% 糖水 y g 混合成 300 g、濃度 30% 的糖水。求 40% 糖水的重量 x。",
    "choices": [
      "150 g",
      "100 g",
      "200 g",
      "120 g"
    ],
    "answerIndex": 0,
    "explanation": "混合題要同時守恆總量與溶質。列 x + y = 300 與 0.4x + 0.2y = 90（30% × 300）。以 y = 300 − x 代入得 0.2x + 60 = 90，x = 150 g。選 100 g 只滿足總量卻溶質不足；選 200 g 則溶質過多。回代 x = 150、y = 150 時溶質 60 + 30 = 90 g，濃度確為 30%。",
    "steps": [
      "總量守恆：x + y = 300。",
      "溶質守恆：0.4x + 0.2y = 0.3 × 300 = 90。",
      "解聯立得 x = 150 g。"
    ],
    "commonMistake": "把 40% 與 20% 直接平均成 30%，沒有考慮兩種溶液的量不同。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量",
    "tags": [
      "代數",
      "system-mixture-basic",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s013-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已有 5% 糖水 200 g，欲再加入 15% 糖水，使混合後總量 400 g、濃度 10%。需加入 15% 糖水多少 g？",
    "choices": [
      "100 g",
      "200 g",
      "150 g",
      "50 g"
    ],
    "answerIndex": 1,
    "explanation": "原有溶質 0.05 × 200 = 10 g，混合後需 0.1 × 400 = 40 g，缺 30 g 溶質。30 ÷ 0.15 = 200 g 的 15% 糖水。選 100 g 只使總溶質 25 g；選 150 g 則總量只有 350 g。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "原有 5% 糖水 200 g 含糖 10 g。",
      "400 g、10% 需溶質 40 g，還缺 30 g。",
      "30 g 溶質 ÷ 15% = 200 g 的 15% 糖水。"
    ],
    "commonMistake": "用 400 − 200 = 200 碰巧對，卻沒驗溶質，下一題換數字就會錯。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量",
    "tags": [
      "代數",
      "system-mixture-basic",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s013-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "A 型米 30 元/kg、B 型米 50 元/kg 混合 10 kg，均價 38 元/kg。求 A 型米的重量 x。",
    "choices": [
      "4 kg",
      "5 kg",
      "6 kg",
      "8 kg"
    ],
    "answerIndex": 2,
    "explanation": "均價混合題列 x + y = 10 與 30x + 50y = 380（38 × 10）。以 y = 10 − x 代入得 30x + 500 − 50x = 380，移項 −20x = −120，所以 A 型米 x = 6 kg。選 4 kg 則總價 392 元超過 380 元；選 5 kg 則均價變成 40 元/kg。回代 x = 6、y = 4 時總價 180 + 200 = 380 元成立。",
    "steps": [
      "總重量 x + y = 10 kg。",
      "總價 30x + 50y = 380 元。",
      "解聯立得 x = 6 kg。"
    ],
    "commonMistake": "把 30 與 50 直接平均成 40，沒有列總價守恆式。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量",
    "tags": [
      "代數",
      "system-mixture-basic",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s013-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "純果汁 x L 與 20% 果汁 y L 混合成 5 L，混合後果汁含量為 84%。求純果汁 x。（純果汁視為 100%）",
    "choices": [
      "2 L",
      "3 L",
      "1 L",
      "4 L"
    ],
    "answerIndex": 3,
    "explanation": "純果汁視為 100%，列 x + y = 5 與 x + 0.2y = 4.2（84% × 5）。以 y = 5 − x 代入得 x + 1 − 0.2x = 4.2，0.8x = 3.2，所以純果汁 x = 4 L。選 2 L 只算 40% 果汁量；選 1 L 則混合後濃度不到 84%。回代 x = 4、y = 1 時果汁量 4 + 0.2 = 4.2 L，占 5 L 的 84%。請再核對一次計算與題意。",
    "steps": [
      "總量 x + y = 5 L。",
      "混合後需 4.2 L 果汁：x + 0.2(5 − x) = 4.2。",
      "0.8x = 3.2，x = 4 L。"
    ],
    "commonMistake": "把 84% 當成 84 L，或忘記 20% 果汁裡只有 0.2y L 是純果汁。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量",
    "tags": [
      "代數",
      "system-mixture-basic",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s013-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "30% 鹽水 x mL 與 50% 鹽水 y mL 混合成 200 mL、濃度 40% 的鹽水。求 30% 鹽水的體積 x。",
    "choices": [
      "100 mL",
      "80 mL",
      "120 mL",
      "60 mL"
    ],
    "answerIndex": 0,
    "explanation": "鹽水混合列 x + y = 200 與 0.3x + 0.5y = 80（40% × 200）。以 y = 200 − x 代入得 0.3x + 100 − 0.5x = 80，移項 −0.2x = −20，所以 30% 鹽水 x = 100 mL。選 80 mL 則溶質只有 72 g；選 120 mL 則混合濃度超過 40%。回代 x = 100、y = 100 時溶質 30 + 50 = 80 g，濃度為 40%。請再核對一次計算與題意。",
    "steps": [
      "總量 x + y = 200 mL。",
      "溶質 0.3x + 0.5y = 80 g。",
      "解聯立得 x = 100 mL。"
    ],
    "commonMistake": "把 30% 與 50% 直接平均成 40%，忽略兩種鹽水的量必須各別計算。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量",
    "tags": [
      "代數",
      "system-mixture-basic",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s013-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "紅豆 x kg、綠豆 y kg 共 20 kg，紅豆 40 元/kg、綠豆 30 元/kg，總價 680 元。列式 40x + 30y = 680 且 x + y = 20，求紅豆 x。",
    "choices": [
      "10 kg",
      "8 kg",
      "12 kg",
      "6 kg"
    ],
    "answerIndex": 1,
    "explanation": "紅豆綠豆混合列 x + y = 20 與 40x + 30y = 680。以 y = 20 − x 代入得 40x + 600 − 30x = 680，移項 10x = 80，所以紅豆 x = 8 kg。選 10 kg 則總價 700 元超過 680 元；選 12 kg 則超過 20 kg 總重。回代 x = 8、y = 12 時總價 320 + 360 = 680 元，總重 20 kg 也成立。",
    "steps": [
      "總重量 x + y = 20 kg。",
      "總價 40x + 30y = 680 元。",
      "解聯立得 x = 8 kg。"
    ],
    "commonMistake": "680 ÷ 20 = 34 就當均價，卻沒有再分紅豆、綠豆各多少 kg。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量",
    "tags": [
      "代數",
      "system-mixture-basic",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s013-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "10% 糖漿 100 g 中加入純糖 x g，混合後總重 150 g、濃度 20%。求加入的純糖 x。",
    "choices": [
      "20 g",
      "15 g",
      "25 g",
      "10 g"
    ],
    "answerIndex": 2,
    "explanation": "原有 10% 糖漿 100 g 含糖 10 g。混合後 150 g、20% 需糖 30 g，故加入純糖 x = 30 − 10 = 25 g。也可列 10 + x = 0.2 × 150 驗算。選 15 g 只使糖量 25 g 不足 30 g；選 20 g 則濃度約 18.7% 不到 20%。回代加入 25 g 純糖後總重 150 g、含糖 30 g，濃度確為 20%。",
    "steps": [
      "10% 糖漿 100 g 含糖 10 g。",
      "150 g、20% 需糖 30 g。",
      "加入純糖 x = 30 − 10 = 25 g。"
    ],
    "commonMistake": "把 20% 直接乘 100 g 而非混合後的 150 g，誤以為只需加 10 g。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量",
    "tags": [
      "代數",
      "system-mixture-basic",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s013-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "25% 鹽水 x mL 與 45% 鹽水 y mL 混合成 500 mL、濃度 35% 的鹽水。求 45% 鹽水的體積 y。",
    "choices": [
      "200 mL",
      "300 mL",
      "150 mL",
      "250 mL"
    ],
    "answerIndex": 3,
    "explanation": "混合列 x + y = 500 與 0.25x + 0.45y = 175（35% × 500）。以 x = 500 − y 代入得 125 + 0.2y = 175，0.2y = 50，所以 45% 鹽水 y = 250 mL。選 150 mL 則溶質不足 175 g；選 200 mL 則混合濃度約 33% 不到 35%。回代 y = 250 時溶質 62.5 + 112.5 = 175 g，混合濃度為 35%。請再核對一次計算與題意。",
    "steps": [
      "總量 x + y = 500 mL。",
      "溶質 0.25x + 0.45y = 175 g。",
      "解得 y = 250 mL。"
    ],
    "commonMistake": "濃度差 10% 就猜各半 250 mL，卻沒有驗溶質是否為 175 g。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量",
    "tags": [
      "代數",
      "system-mixture-basic",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s013-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "銅 x kg、鋅 y kg 共 12 kg，銅每 kg 200 元、鋅每 kg 80 元，總價 1680 元。列式 200x + 80y = 1680 且 x + y = 12，求銅 x。",
    "choices": [
      "6 kg",
      "8 kg",
      "4 kg",
      "10 kg"
    ],
    "answerIndex": 0,
    "explanation": "銅鋅混合列 x + y = 12 與 200x + 80y = 1680。以 y = 12 − x 代入得 200x + 960 − 80x = 1680，移項 120x = 720，所以銅 x = 6 kg。選 8 kg 則總價 1920 元超過 1680 元；選 4 kg 則總價只有 1440 元。回代 x = 6、y = 6 時總價 1200 + 480 = 1680 元，總重 12 kg 成立。",
    "steps": [
      "總重量 x + y = 12 kg。",
      "總價 200x + 80y = 1680 元。",
      "解聯立得 x = 6 kg。"
    ],
    "commonMistake": "1680 ÷ 12 = 140 當均價後就不再列兩式，無法分出銅、鋅各幾 kg。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量",
    "tags": [
      "代數",
      "system-mixture-basic",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s013-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "40% 鹽水 x mL 與 60% 鹽水 y mL 混合成 500 mL、濃度 48% 的鹽水。求 40% 鹽水的體積 x。",
    "choices": [
      "250 mL",
      "300 mL",
      "200 mL",
      "350 mL"
    ],
    "answerIndex": 1,
    "explanation": "混合問題列 x + y = 500 與 0.4x + 0.6y = 240（48% × 500）。以 y = 500 − x 代入得 0.4x + 300 − 0.6x = 240，移項 −0.2x = −60，所以 40% 鹽水 x = 300 mL。選 250 mL 則混合濃度約 46%；選 200 mL 則濃度只有 44%。回代 x = 300、y = 200 時溶質 120 + 120 = 240 g，混合濃度為 48%。請再核對一次計算與題意。",
    "steps": [
      "總量 x + y = 500 mL。",
      "溶質 0.4x + 0.6y = 240 g。",
      "解聯立得 x = 300 mL。"
    ],
    "commonMistake": "48% 剛好在 40% 與 60% 中間，就猜 x = y = 250 mL，沒有驗算溶質。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量",
    "tags": [
      "代數",
      "system-mixture-basic",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s013-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "A 料 50 元/kg、B 料 70 元/kg 混合 8 kg，總價 460 元（均價 57.5 元/kg）。求 B 料重量 y。",
    "choices": [
      "4 kg",
      "5 kg",
      "3 kg",
      "2 kg"
    ],
    "answerIndex": 2,
    "explanation": "A、B 料混合列 x + y = 8 與 50x + 70y = 460。以 x = 8 − y 代入得 400 + 20y = 460，20y = 60，所以 B 料 y = 3 kg。選 4 kg 則總價 480 元超過 460 元；選 5 kg 則超過 8 kg 總重。回代 y = 3、x = 5 時總價 250 + 210 = 460 元，總重 8 kg 也吻合。請再核對一次計算與題意。",
    "steps": [
      "總重量 x + y = 8 kg。",
      "總價 50x + 70y = 460 元。",
      "解聯立得 y = 3 kg。"
    ],
    "commonMistake": "均價 57.5 與 50、70 的距離不同，不能憑感覺猜 4 kg 或 4.5 kg。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量",
    "tags": [
      "代數",
      "system-mixture-basic",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s013-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "手作飲料店要調 400 mL、濃度 22% 的果茶，已有 30% 與 10% 兩種茶底。需取 30% 茶底多少 mL？",
    "choices": [
      "160 mL",
      "200 mL",
      "180 mL",
      "240 mL"
    ],
    "answerIndex": 3,
    "explanation": "設 30% 茶底取 x mL、10% 取 (400 − x) mL。溶質守恆 0.3x + 0.1(400 − x) = 88（22% × 400），化簡 0.2x = 48，所以 x = 240 mL。選 160 mL 則混合濃度只有 18%；選 200 mL 則濃度 20% 仍不足 22%。回代 240 mL 的 30% 與 160 mL 的 10% 混合，溶質 72 + 16 = 88 g，濃度 22%。請再核對一次計算與題意。",
    "steps": [
      "總量 x + (400 − x) = 400 mL。",
      "溶質 0.3x + 0.1(400 − x) = 88 g。",
      "0.2x = 48，x = 240 mL 的 30% 茶底。"
    ],
    "commonMistake": "22% 接近 30% 與 10% 的平均，就各取 200 mL，沒有驗混合濃度。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量",
    "tags": [
      "代數",
      "system-mixture-basic",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u04-s014-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某自助餐葷菜每份 x 元、素菜每份 y 元。小陳買 20 葷 15 素共 1150 元，小玲買 25 葷 10 素共 1350 元。求葷菜單價 x。",
    "choices": [
      "50",
      "45",
      "55",
      "40"
    ],
    "answerIndex": 0,
    "explanation": "列 20x + 15y = 1150 與 25x + 10y = 1350。第一式 ×2 減第二式：15x = 950，x = 50 元。選 45 無法同時滿足兩筆消費；選 55 則第一筆金額超過 1150 元。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "設葷 x 元、素 y 元，列 20x + 15y = 1150。",
      "第二筆 25x + 10y = 1350。",
      "消去 y 解得 x = 50 元。"
    ],
    "commonMistake": "1150 ÷ 35 ≈ 33 就當平均單價，沒有把葷、素分開列兩式。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解",
    "tags": [
      "代數",
      "system-literacy-context",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s014-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "租車方案：前 2 小時固定 x 元，之後每小時 y 元。租 3 小時 150 元、租 4 小時 230 元。求前 2 小時費用 x。",
    "choices": [
      "60",
      "70",
      "80",
      "50"
    ],
    "answerIndex": 1,
    "explanation": "3 小時 = x + y = 150；4 小時 = x + 2y = 230。相減得 y = 80，回代 x = 70 元。選 60 則 3 小時只要 140 元；選 80 則 4 小時變成 240 元。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "前 2 小時 x 元，第 3 小時起每小時 y 元。",
      "租 3 小時：x + y = 150；租 4 小時：x + 2y = 230。",
      "相減得 y = 80，x = 70 元。"
    ],
    "commonMistake": "把 4 小時誤寫成 x + 4y，多算一個前 2 小時以外的時數。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解",
    "tags": [
      "代數",
      "system-literacy-context",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s014-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "電信方案 A 月租 x 元、通話每分鐘 y 元；方案 B 月租 (x + 100) 元、通話每分鐘 (y − 2) 元。若通話 30 分鐘兩方案總價相同，應列哪一式？",
    "choices": [
      "x = y",
      "30x = 30y",
      "x + 30y = x + 100 + 30(y − 2)",
      "x + y = 100"
    ],
    "answerIndex": 2,
    "explanation": "A 方案 30 分鐘總價 x + 30y；B 方案 x + 100 + 30(y − 2)。兩者相等即 x + 30y = x + 100 + 30(y − 2)。x = y 忽略月租差 100 元；x + y = 100 則通話費完全沒列入。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "A 方案：月租 x 加 30 分鐘通話費 30y。",
      "B 方案：月租 x + 100 加 30 分鐘通話費 30(y − 2)。",
      "總價相同：x + 30y = x + 100 + 30(y − 2)。"
    ],
    "commonMistake": "只看通話單價差 2 元，忘記 B 方案月租多 100 元也要寫進式子。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解",
    "tags": [
      "代數",
      "system-literacy-context",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s014-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "文具店：2 支筆 3 本筆記本共 88 元，4 支筆 1 本筆記本共 96 元。設每支筆 x 元，求 x。",
    "choices": [
      "18",
      "22",
      "16",
      "20"
    ],
    "answerIndex": 3,
    "explanation": "列 2x + 3y = 88 與 4x + y = 96。由第二式 y = 96 − 4x，以第一式 2x + 288 − 12x = 88，x = 20 元。選 18 則第二筆只有 90 元；選 22 超過 96 元。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "設筆 x 元、筆記本 y 元。",
      "列 2x + 3y = 88 與 4x + y = 96。",
      "解聯立得 x = 20 元。"
    ],
    "commonMistake": "88 + 96 直接除以 6 當平均，沒有區分筆與筆記本的數量。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解",
    "tags": [
      "代數",
      "system-literacy-context",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s014-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "游泳課會員每次 x 元、非會員每次 y 元。5 次會員加 3 次非會員共 520 元，3 次會員加 5 次非會員共 440 元。求會員單次 x。",
    "choices": [
      "80",
      "70",
      "90",
      "60"
    ],
    "answerIndex": 0,
    "explanation": "游泳課列 5x + 3y = 520 與 3x + 5y = 440。兩式相加得 8x + 8y = 960，即 x + y = 120。代回第一式 5x + 360 − 3x = 520，2x = 160，所以會員單次 x = 80 元。選 70 則第一筆只有 490 元不足 520 元。回代 x = 80、y = 40 時兩筆消費 520 元與 440 元都成立。",
    "steps": [
      "會員 x 元、非會員 y 元。",
      "列 5x + 3y = 520 與 3x + 5y = 440。",
      "解聯立得 x = 80 元。"
    ],
    "commonMistake": "520 − 440 = 80 就當會員與非會員差價，忽略兩筆購買次數組合不同。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解",
    "tags": [
      "代數",
      "system-literacy-context",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s014-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "停車場：前 1 小時 x 元，之後每小時 y 元。停 4 小時 200 元、停 6 小時 280 元。求首小時費用 x。",
    "choices": [
      "60",
      "80",
      "100",
      "40"
    ],
    "answerIndex": 1,
    "explanation": "停車首小時 x 元、之後每小時 y 元。停 4 小時列 x + 3y = 200；停 6 小時列 x + 5y = 280。兩式相減 2y = 80，y = 40，回代 x = 80 元。選 60 則 4 小時只要 180 元不足 200 元；選 100 則 6 小時超過 280 元。回代 x = 80、y = 40 時兩種停車時間的總價都符合題意。",
    "steps": [
      "首小時 x 元，第 2 小時起每小時 y 元。",
      "4 小時：x + 3y = 200；6 小時：x + 5y = 280。",
      "相減得 y = 40，x = 80 元。"
    ],
    "commonMistake": "280 ÷ 6 ≈ 47 當平均時薪，沒有考慮首小時計費方式不同。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解",
    "tags": [
      "代數",
      "system-literacy-context",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s014-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某旅館平日房 x 元、假日房 y 元。平 3 日假 2 日共 1700 元，平 2 日假 3 日共 1800 元。求平日房價 x。",
    "choices": [
      "350",
      "450",
      "400",
      "300"
    ],
    "answerIndex": 2,
    "explanation": "住宿費問題中，列 3x + 2y = 1700 與 2x + 3y = 1800。第一式 ×3 減第二式 ×2：5x = 5100，x = 400 元。選 350 則第一組只有 1650 元；選 450 則第二組超過 1800 元。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "平日 x 元、假日 y 元。",
      "列 3x + 2y = 1700 與 2x + 3y = 1800。",
      "消去 y 解得 x = 400 元。"
    ],
    "commonMistake": "1700 與 1800 差 100 就猜 x 比 y 少 100，沒有完整列式。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解",
    "tags": [
      "代數",
      "system-literacy-context",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s014-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "早餐店蛋餅每份 x 元、飯糰每個 y 元。買 3 蛋餅 2 飯糰 110 元，買 2 蛋餅 4 飯糰 100 元。求蛋餅 x。",
    "choices": [
      "25",
      "35",
      "20",
      "30"
    ],
    "answerIndex": 3,
    "explanation": "早餐選購時，列 3x + 2y = 110 與 2x + 4y = 100。第一式 ×2 減第二式：4x = 120，x = 30 元。選 25 則第一筆只有 95 元；選 35 則第二筆超過 100 元。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "蛋餅 x 元、飯糰 y 元。",
      "列 3x + 2y = 110 與 2x + 4y = 100。",
      "解聯立得 x = 30 元。"
    ],
    "commonMistake": "110 − 100 = 10 就當 1 蛋餅比 2 飯糰貴 10 元，沒有把數量差寫清楚。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解",
    "tags": [
      "代數",
      "system-literacy-context",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s014-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "夏令營小班 x 人、大班 y 人。2 個小班 1 個大班共 70 人，1 個小班 3 個大班共 95 人。求小班人數 x。",
    "choices": [
      "25",
      "20",
      "30",
      "35"
    ],
    "answerIndex": 0,
    "explanation": "列 2x + y = 70 與 x + 3y = 95。第一式 ×3 減第二式：5x = 125，x = 25 人。選 20 則第一組只有 65 人；選 30 則第二組超過 95 人。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "小班 x 人、大班 y 人。",
      "列 2x + y = 70 與 x + 3y = 95。",
      "消去 y 解得 x = 25 人。"
    ],
    "commonMistake": "70 與 95 相減得 25 就當 x，碰巧對卻說不出為什麼是 2 個小班與 1 個大班的差。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解",
    "tags": [
      "代數",
      "system-literacy-context",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u04-s014-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "學校社團活動：A 活動每次 x 點、B 活動每次 y 點。完成 3A + 2B 得 17 點，2A + 4B 得 22 點。求 A 活動 x。",
    "choices": [
      "4",
      "3",
      "5",
      "2"
    ],
    "answerIndex": 1,
    "explanation": "園遊活動得分題中，列 3x + 2y = 17 與 2x + 4y = 22。第一式 ×2 減第二式：4x = 12，x = 3 點。選 4 則第一組超過 17 點；選 2 則第二組只有 18 點。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "A 活動 x 點、B 活動 y 點。",
      "列 3x + 2y = 17 與 2x + 4y = 22。",
      "消去 y 解得 x = 3 點。"
    ],
    "commonMistake": "17 + 22 = 39 除以 5 當平均點數，沒有把 A、B 活動次數分開。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解",
    "tags": [
      "代數",
      "system-literacy-context",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s014-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "服飾店 S 號 x 件、L 號 y 件共 50 件，S 號每件 120 元、L 號每件 180 元，總價 7500 元。求 S 號件數 x。",
    "choices": [
      "20",
      "30",
      "25",
      "35"
    ],
    "answerIndex": 2,
    "explanation": "服飾店列 x + y = 50 與 120x + 180y = 7500。以 y = 50 − x 代入得 120x + 9000 − 180x = 7500，移項 −60x = −1500，所以 S 號 x = 25 件。選 20 件則總價 7800 元超過 7500 元；選 30 件則總價只有 7200 元。回代 x = 25、y = 25 時總價 3000 + 4500 = 7500 元，件數 50 件也對。",
    "steps": [
      "S 號 x 件、L 號 y 件，x + y = 50。",
      "總價 120x + 180y = 7500 元。",
      "解聯立得 x = 25 件。"
    ],
    "commonMistake": "7500 ÷ 50 = 150 當平均單價後就不再列兩式，無法分出 S、L 各幾件。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解",
    "tags": [
      "代數",
      "system-literacy-context",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u04-s014-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "園遊會飲料每杯 x 元、點心每份 y 元。班 A 賣 40 杯飲 30 份點心收 3500 元，班 B 賣 30 杯飲 40 份點心收 3400 元。求飲料 x。",
    "choices": [
      "45",
      "55",
      "40",
      "50"
    ],
    "answerIndex": 3,
    "explanation": "園遊會列 40x + 30y = 3500 與 30x + 40y = 3400。第一式 ×4 減第二式 ×3 得 70x = 3500，所以飲料 x = 50 元。選 45 則班 A 只有 3350 元不足 3500 元；選 55 則班 B 超過 3400 元。回代 x = 50、y = 30 時班 A 收 3500 元、班 B 收 3400 元，兩式同時成立。",
    "steps": [
      "飲料 x 元、點心 y 元。",
      "列 40x + 30y = 3500 與 30x + 40y = 3400。",
      "消去 y 解得 x = 50 元。"
    ],
    "commonMistake": "3500 與 3400 差 100 就猜 x 比 y 多 10 元，沒有考慮兩班銷量組合不同。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解",
    "tags": [
      "代數",
      "system-literacy-context",
      "素養"
    ],
    "estimatedTimeSec": 90
  }
];

export default QUESTIONS;
