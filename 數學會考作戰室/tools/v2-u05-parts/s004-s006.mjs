export const U05_PART_S004_S006 = [
  {
    "questionId": "u05-s004-v001",
    "skillId": "coordinate-plot-description",
    "topicId": "u05-coordinate-basics",
    "difficulty": "basic",
    "text": "要在坐標平面上描點 (2, 3)，正確順序為何？",
    "choices": [
      "先向右 2 再向上 3",
      "先向上 3 再向右 2",
      "先向下 3 再向左 2",
      "先向左 2 再向下 3"
    ],
    "answerIndex": 0,
    "explanation": "首重讀題時【描點對稱】描點先沿 x 方向再沿 y 方向：x=2 向右 2，y=3 向上 3。選「先上再右」是順序顛倒，雖可能到同點但標準作法是先 x 後 y。",
    "steps": [
      "讀 x=2：沿 x 軸向右 2。",
      "再讀 y=3：沿 y 方向向上 3。",
      "標記該點。"
    ],
    "commonMistake": "先畫 y 方向再畫 x 方向，容易標錯格。",
    "concept": "依坐標描點：先沿 x 軸移動，再沿 y 軸移動；可用對稱、距原點距離等文字描述點的位置"
  },
  {
    "questionId": "u05-s004-v002",
    "skillId": "coordinate-plot-description",
    "topicId": "u05-coordinate-basics",
    "difficulty": "basic",
    "text": "點 (-3, 1) 與 (3, 1) 的關係為何？",
    "choices": [
      "關於 x 軸對稱",
      "關於 y 軸對稱",
      "關於原點對稱",
      "重合"
    ],
    "answerIndex": 1,
    "explanation": "次重判斷時【描點對稱】兩點 y 相同、x 互為相反數，關於 y 軸對稱。選關於 x 軸對稱須 y 互為相反數；選原點對稱須 x、y 都相反。",
    "steps": [
      "比較 y：皆為 1。",
      "比較 x：-3 與 3 互為相反數。",
      "關於 y 軸對稱。"
    ],
    "commonMistake": "x 相反就說關於原點對稱。",
    "concept": "依坐標描點：先沿 x 軸移動，再沿 y 軸移動；可用對稱、距原點距離等文字描述點的位置"
  },
  {
    "questionId": "u05-s004-v003",
    "skillId": "coordinate-plot-description",
    "topicId": "u05-coordinate-basics",
    "difficulty": "basic",
    "text": "點 (4, -2) 關於 x 軸的對稱點坐標為何？",
    "choices": [
      "(-4, -2)",
      "(-4, 2)",
      "(4, 2)",
      "(4, -2)"
    ],
    "answerIndex": 2,
    "explanation": "三重描點時【描點對稱】關於 x 軸對稱：x 不變、y 變號，(4, -2) → (4, 2)。選 (-4, -2) 是關於 y 軸對稱；選 (-4, 2) 是關於原點對稱。這類題不能憑印象，須把條件寫成算式再比對選項。",
    "steps": [
      "x 軸對稱：x 不變。",
      "y 變號：-2 → 2。",
      "對稱點 (4, 2)。"
    ],
    "commonMistake": "關於 x 軸對稱卻把 x 變號。",
    "concept": "依坐標描點：先沿 x 軸移動，再沿 y 軸移動；可用對稱、距原點距離等文字描述點的位置"
  },
  {
    "questionId": "u05-s004-v004",
    "skillId": "coordinate-plot-description",
    "topicId": "u05-coordinate-basics",
    "difficulty": "basic",
    "text": "點 (1, 5) 關於原點的對稱點為何？",
    "choices": [
      "(1, -5)",
      "(-1, 5)",
      "(5, 1)",
      "(-1, -5)"
    ],
    "answerIndex": 3,
    "explanation": "四重對稱時【描點對稱】關於原點對稱：x、y 都變號，(1, 5) → (-1, -5)。選 (-1, 5) 只變 x；選 (1, -5) 只變 y。易錯在只記口訣未套數字，帶入後才能排除其他選項。",
    "steps": [
      "原點對稱：x、y 皆變號。",
      "1 → -1，5 → -5。",
      "得 (-1, -5)。"
    ],
    "commonMistake": "原點對稱只變一個坐標。",
    "concept": "依坐標描點：先沿 x 軸移動，再沿 y 軸移動；可用對稱、距原點距離等文字描述點的位置"
  },
  {
    "questionId": "u05-s004-v005",
    "skillId": "coordinate-plot-description",
    "topicId": "u05-coordinate-basics",
    "difficulty": "standard",
    "text": "下列哪一點與 (2, -4) 關於 y 軸對稱？",
    "choices": [
      "(-2, -4)",
      "(-2, 4)",
      "(2, 4)",
      "(-4, 2)"
    ],
    "answerIndex": 0,
    "explanation": "五重平移時【描點對稱】y 軸對稱：y 不變、x 變號，(2, -4) → (-2, -4)。選 (-2, 4) 把 y 也變號了；選 (2, 4) 沒變 x。錯選通常是把正負方向或軸向對調，應回到定義逐項核對。",
    "steps": [
      "y 軸對稱：y 不變。",
      "x 變號：2 → -2。",
      "(-2, -4)。"
    ],
    "commonMistake": "y 軸對稱時 y 也變號。",
    "concept": "依坐標描點：先沿 x 軸移動，再沿 y 軸移動；可用對稱、距原點距離等文字描述點的位置"
  },
  {
    "questionId": "u05-s004-v006",
    "skillId": "coordinate-plot-description",
    "topicId": "u05-coordinate-basics",
    "difficulty": "standard",
    "text": "平面上 A(0, 3)、B(0, -3)，兩點關係為何？",
    "choices": [
      "關於 y 軸對稱",
      "關於 x 軸對稱",
      "關於原點對稱",
      "重合"
    ],
    "answerIndex": 1,
    "explanation": "六重測距時【描點對稱】兩點 x 皆 0、y 互為相反數 3 與 -3，關於 x 軸對稱。都在 y 軸上但 y 不同，不是 y 軸對稱。干擾項常漏看另一坐標或符號，求值後要再對照題意。",
    "steps": [
      "x 相同皆 0。",
      "y：3 與 -3 互為相反數。",
      "關於 x 軸對稱。"
    ],
    "commonMistake": "都在 y 軸上就說 y 軸對稱。",
    "concept": "依坐標描點：先沿 x 軸移動，再沿 y 軸移動；可用對稱、距原點距離等文字描述點的位置"
  },
  {
    "questionId": "u05-s004-v007",
    "skillId": "coordinate-plot-description",
    "topicId": "u05-coordinate-basics",
    "difficulty": "standard",
    "text": "點 P 到 x 軸的距離為 5，到 y 軸的距離為 2，P 可能在第幾象限？",
    "choices": [
      "只有第一象限",
      "第一或第四象限",
      "四象限皆可能",
      "只有第二象限"
    ],
    "answerIndex": 2,
    "explanation": "七重算積時【描點對稱】到 x 軸距離 5 表示 |y|=5；到 y 軸距離 2 表示 |x|=2。x=±2、y=±5 四種組合分布在四象限，皆可能。這類題不能憑印象，須把條件寫成算式再比對選項。",
    "steps": [
      "到 x 軸距離 → |y| = 5。",
      "到 y 軸距離 → |x| = 2。",
      "正負組合可落在四象限。"
    ],
    "commonMistake": "距離為正就只取第一象限。",
    "concept": "依坐標描點：先沿 x 軸移動，再沿 y 軸移動；可用對稱、距原點距離等文字描述點的位置"
  },
  {
    "questionId": "u05-s004-v008",
    "skillId": "coordinate-plot-description",
    "topicId": "u05-coordinate-basics",
    "difficulty": "standard",
    "text": "描點 (-1, -2) 時，從原點出發應如何移動？",
    "choices": [
      "左 2 下 1",
      "右 1 上 2",
      "左 1 上 2",
      "左 1 下 2"
    ],
    "answerIndex": 3,
    "explanation": "八重看線時【描點對稱】x = -1 向左 1；y = -2 向下 2。選「左 2 下 1」把 1 與 2 對調；選「左 1 上 2」把 y 正負看反。易錯在只記口訣未套數字，帶入後才能排除其他選項。",
    "steps": [
      "x 負：向左 1。",
      "y 負：向下 2。",
      "左 1、下 2。"
    ],
    "commonMistake": "負坐標的數字與方向對應錯。",
    "concept": "依坐標描點：先沿 x 軸移動，再沿 y 軸移動；可用對稱、距原點距離等文字描述點的位置"
  },
  {
    "questionId": "u05-s004-v009",
    "skillId": "coordinate-plot-description",
    "topicId": "u05-coordinate-basics",
    "difficulty": "standard",
    "text": "若點 M 與 N(3, -1) 關於原點對稱，M 的坐標為何？",
    "choices": [
      "(-3, 1)",
      "(3, 1)",
      "(-3, -1)",
      "(1, -3)"
    ],
    "answerIndex": 0,
    "explanation": "九重驗點時【描點對稱】原點對稱：x、y 都變號，(3, -1) → (-3, 1)。選 (-3, -1) 只變 x；選 (3, 1) 只變 y。錯選通常是把正負方向或軸向對調，應回到定義逐項核對。",
    "steps": [
      "原點對稱兩坐標變號。",
      "3 → -3，-1 → 1。",
      "M 為 (-3, 1)。"
    ],
    "commonMistake": "只把 x 變號就當原點對稱。",
    "concept": "依坐標描點：先沿 x 軸移動，再沿 y 軸移動；可用對稱、距原點距離等文字描述點的位置"
  },
  {
    "questionId": "u05-s004-v010",
    "skillId": "coordinate-plot-description",
    "topicId": "u05-coordinate-basics",
    "difficulty": "advanced",
    "text": "點 (5, 0) 到原點的距離為何？",
    "choices": [
      "0",
      "5",
      "25",
      "無法求"
    ],
    "answerIndex": 1,
    "explanation": "十重截距時【描點對稱】(5, 0) 在 x 軸上，到原點距離就是 |x| = 5。選 25 是算成平方；選 0 誤以為在原點。干擾項常漏看另一坐標或符號，求值後要再對照題意。",
    "steps": [
      "(5, 0) 在 x 軸。",
      "到原點距離 = |x|。",
      "|5| = 5。"
    ],
    "commonMistake": "在 x 軸上仍用 y 算距離。",
    "concept": "依坐標描點：先沿 x 軸移動，再沿 y 軸移動；可用對稱、距原點距離等文字描述點的位置"
  },
  {
    "questionId": "u05-s004-v011",
    "skillId": "coordinate-plot-description",
    "topicId": "u05-coordinate-basics",
    "difficulty": "advanced",
    "text": "A(2, 2) 與 B(2, -2) 的關係為何？",
    "choices": [
      "關於 y 軸對稱",
      "關於 y=x 對稱",
      "關於 x 軸對稱",
      "關於原點對稱"
    ],
    "answerIndex": 2,
    "explanation": "十一交點時【描點對稱】x 相同、y 互為相反數 2 與 -2，關於 x 軸對稱。選 y 軸對稱須 x 互為相反數；選原點對稱須 x、y 都相反。這類題不能憑印象，須把條件寫成算式再比對選項。",
    "steps": [
      "x 皆 2，相同。",
      "y：2 與 -2 相反。",
      "關於 x 軸對稱。"
    ],
    "commonMistake": "y 正負不同就說原點對稱。",
    "concept": "依坐標描點：先沿 x 軸移動，再沿 y 軸移動；可用對稱、距原點距離等文字描述點的位置"
  },
  {
    "questionId": "u05-s004-v012",
    "skillId": "coordinate-plot-description",
    "topicId": "u05-coordinate-basics",
    "difficulty": "literacy",
    "text": "某公園地圖以入口為原點，噴水池在 (4, 3)、涼亭在 (-4, 3)，兩點如何描述？",
    "choices": [
      "x 相同，關於 x 軸對稱",
      "關於原點對稱",
      "距原點同距離但無對稱",
      "y 相同，關於 y 軸對稱"
    ],
    "answerIndex": 3,
    "explanation": "十二素養時【描點對稱】兩點 y 皆 3、x 為 4 與 -4 互為相反數，關於 y 軸對稱。選原點對稱須 y 也相反；選 x 軸對稱須 y 相反。易錯在只記口訣未套數字，帶入後才能排除其他選項。",
    "steps": [
      "比較 y：皆 3。",
      "x：4 與 -4 相反。",
      "關於 y 軸對稱。"
    ],
    "commonMistake": "看到 4 和 -4 就說原點對稱。",
    "concept": "依坐標描點：先沿 x 軸移動，再沿 y 軸移動；可用對稱、距原點距離等文字描述點的位置"
  },
  {
    "questionId": "u05-s005-v001",
    "skillId": "coordinate-translation",
    "topicId": "u05-coordinate-ops",
    "difficulty": "basic",
    "text": "點 (2, 3) 向右平移 4 個單位，新坐標為何？",
    "choices": [
      "(6, 3)",
      "(2, 7)",
      "(-2, 3)",
      "(6, 7)"
    ],
    "answerIndex": 0,
    "explanation": "首重讀題時【坐標平移】向右平移只改 x：2 + 4 = 6，y 不變，可得 (6, 3)。選 (2, 7) 是向上平移；選 (6, 7) 是兩方向都移。錯選通常是把正負方向或軸向對調，應回到定義逐項核對。",
    "steps": [
      "向右：x 加 4。",
      "2 + 4 = 6。",
      "y 不變，(6, 3)。"
    ],
    "commonMistake": "向右平移卻改 y 坐標。",
    "concept": "平移時左右改 x、上下改 y：向右 a 則 x+a，向左 a 則 x-a；向上 b 則 y+b，向下 b 則 y-b"
  },
  {
    "questionId": "u05-s005-v002",
    "skillId": "coordinate-translation",
    "topicId": "u05-coordinate-ops",
    "difficulty": "basic",
    "text": "點 (5, -1) 向下平移 3 個單位，新坐標為何？",
    "choices": [
      "(5, 2)",
      "(5, -4)",
      "(2, -1)",
      "(8, -1)"
    ],
    "answerIndex": 1,
    "explanation": "次重判斷時【坐標平移】向下平移 y 減 3：-1 - 3 = -4，x 不變，可得 (5, -4)。選 (5, 2) 是向上；選 (2, -1) 是向左。干擾項常漏看另一坐標或符號，求值後要再對照題意。",
    "steps": [
      "向下：y 減 3。",
      "-1 - 3 = -4。",
      "x 不變，(5, -4)。"
    ],
    "commonMistake": "向下平移 y 加 3。",
    "concept": "平移時左右改 x、上下改 y：向右 a 則 x+a，向左 a 則 x-a；向上 b 則 y+b，向下 b 則 y-b"
  },
  {
    "questionId": "u05-s005-v003",
    "skillId": "coordinate-translation",
    "topicId": "u05-coordinate-ops",
    "difficulty": "basic",
    "text": "點 (-2, 4) 向左平移 5 個單位，新坐標為何？",
    "choices": [
      "(3, 4)",
      "(-2, -1)",
      "(-7, 4)",
      "(-2, 9)"
    ],
    "answerIndex": 2,
    "explanation": "三重描點時【坐標平移】向左平移 x 減 5：-2 - 5 = -7，y 不變，可得 (-7, 4)。選 (3, 4) 是向右平移 5。這類題不能憑印象，須把條件寫成算式再比對選項。",
    "steps": [
      "向左：x 減 5。",
      "-2 - 5 = -7。",
      "y 不變，(-7, 4)。"
    ],
    "commonMistake": "向左平移 x 加 5。",
    "concept": "平移時左右改 x、上下改 y：向右 a 則 x+a，向左 a 則 x-a；向上 b 則 y+b，向下 b 則 y-b"
  },
  {
    "questionId": "u05-s005-v004",
    "skillId": "coordinate-translation",
    "topicId": "u05-coordinate-ops",
    "difficulty": "basic",
    "text": "點 (1, -2) 向上平移 6 個單位，新坐標為何？",
    "choices": [
      "(7, -2)",
      "(1, -8)",
      "(-5, -2)",
      "(1, 4)"
    ],
    "answerIndex": 3,
    "explanation": "四重對稱時【坐標平移】向上平移 y 加 6：-2 + 6 = 4，x 不變，可得 (1, 4)。選 (1, -8) 是向下；選 (7, -2) 是向右。易錯在只記口訣未套數字，帶入後才能排除其他選項。",
    "steps": [
      "向上：y 加 6。",
      "-2 + 6 = 4。",
      "x 不變，(1, 4)。"
    ],
    "commonMistake": "向上平移 y 減 6。",
    "concept": "平移時左右改 x、上下改 y：向右 a 則 x+a，向左 a 則 x-a；向上 b 則 y+b，向下 b 則 y-b"
  },
  {
    "questionId": "u05-s005-v005",
    "skillId": "coordinate-translation",
    "topicId": "u05-coordinate-ops",
    "difficulty": "standard",
    "text": "(3, 1) 先向右 2 再向上 3，終點坐標為何？",
    "choices": [
      "(5, 4)",
      "(1, -2)",
      "(5, -2)",
      "(1, 4)"
    ],
    "answerIndex": 0,
    "explanation": "五重平移時【坐標平移】向右 2：x 變 5；向上 3：y 變 4，可得 (5, 4)。選 (1, 4) 是向左再向上；選 (5, -2) 是向上方向看反。錯選通常是把正負方向或軸向對調，應回到定義逐項核對。",
    "steps": [
      "x：3 + 2 = 5。",
      "y：1 + 3 = 4。",
      "終點 (5, 4)。"
    ],
    "commonMistake": "兩次平移只算一次。",
    "concept": "平移時左右改 x、上下改 y：向右 a 則 x+a，向左 a 則 x-a；向上 b 則 y+b，向下 b 則 y-b"
  },
  {
    "questionId": "u05-s005-v006",
    "skillId": "coordinate-translation",
    "topicId": "u05-coordinate-ops",
    "difficulty": "standard",
    "text": "點 A 平移後成 (0, 0)，若 A 原為 (3, -2)，平移向量为何？",
    "choices": [
      "向右 3、向下 2",
      "向左 3、向上 2",
      "向左 3、向下 2",
      "向右 3、向上 2"
    ],
    "answerIndex": 1,
    "explanation": "六重測距時【坐標平移】x 由 3 變 0：向左 3；y 由 -2 變 0：向上 2。選「向左 3、向下 2」把 y 方向看反。干擾項常漏看另一坐標或符號，求值後要再對照題意。",
    "steps": [
      "x：3 → 0，差 -3，向左 3。",
      "y：-2 → 0，差 +2，向上 2。",
      "平移：左 3、上 2。"
    ],
    "commonMistake": "y 從負到 0 仍說向下。",
    "concept": "平移時左右改 x、上下改 y：向右 a 則 x+a，向左 a 則 x-a；向上 b 則 y+b，向下 b 則 y-b"
  },
  {
    "questionId": "u05-s005-v007",
    "skillId": "coordinate-translation",
    "topicId": "u05-coordinate-ops",
    "difficulty": "standard",
    "text": "將 (4, 5) 平移後得 (-1, 5)，平移方式為何？",
    "choices": [
      "向左 5 個單位",
      "向左 5 個單位且向下",
      "向左 5 個單位（x 減 5）",
      "向下 5 個單位"
    ],
    "answerIndex": 2,
    "explanation": "七重算積時【坐標平移】y 不變，x 由 4 變 -1，差 -5，向左 5 個單位。選「向下 5」y 會變；選「向左 5 且向下」多移了 y。這類題不能憑印象，須把條件寫成算式再比對選項。",
    "steps": [
      "y 不變：只水平平移。",
      "x：4 - 5 = -1。",
      "向左 5 個單位。"
    ],
    "commonMistake": "x 差 5 就說向下 5。",
    "concept": "平移時左右改 x、上下改 y：向右 a 則 x+a，向左 a 則 x-a；向上 b 則 y+b，向下 b 則 y-b"
  },
  {
    "questionId": "u05-s005-v008",
    "skillId": "coordinate-translation",
    "topicId": "u05-coordinate-ops",
    "difficulty": "standard",
    "text": "點 P 經平移後 x 坐標不變、y 坐標增加 4，平移方向為何？",
    "choices": [
      "向右",
      "向左",
      "向下",
      "向上"
    ],
    "answerIndex": 3,
    "explanation": "八重看線時【坐標平移】x 不變、y 增加表示向上平移 4 個單位。選向下 y 會減少；選向右 x 會改變。易錯在只記口訣未套數字，帶入後才能排除其他選項。",
    "steps": [
      "x 不變 → 非左右平移。",
      "y 增加 → 向上。",
      "向上 4 個單位。"
    ],
    "commonMistake": "y 增加說成向下。",
    "concept": "平移時左右改 x、上下改 y：向右 a 則 x+a，向左 a 則 x-a；向上 b 則 y+b，向下 b 則 y-b"
  },
  {
    "questionId": "u05-s005-v009",
    "skillId": "coordinate-translation",
    "topicId": "u05-coordinate-ops",
    "difficulty": "standard",
    "text": "(-3, 2) 向右 3 再向下 5，終點為何？",
    "choices": [
      "(0, -3)",
      "(0, 7)",
      "(-6, -3)",
      "(-3, -3)"
    ],
    "answerIndex": 0,
    "explanation": "九重驗點時【坐標平移】向右 3：x 變 0；向下 5：y 變 -3，可得 (0, -3)。選 (0, 7) 是向下看反；選 (-6, -3) 是向右看反。錯選通常是把正負方向或軸向對調，應回到定義逐項核對。",
    "steps": [
      "x：-3 + 3 = 0。",
      "y：2 - 5 = -3。",
      "終點 (0, -3)。"
    ],
    "commonMistake": "負 x 向右仍減 3。",
    "concept": "平移時左右改 x、上下改 y：向右 a 則 x+a，向左 a 則 x-a；向上 b 則 y+b，向下 b 則 y-b"
  },
  {
    "questionId": "u05-s005-v010",
    "skillId": "coordinate-translation",
    "topicId": "u05-coordinate-ops",
    "difficulty": "advanced",
    "text": "平移前 (a, b)，向右 2、向上 1 後為 (5, 4)，則 (a, b) 為何？",
    "choices": [
      "(7, 5)",
      "(3, 3)",
      "(3, 5)",
      "(7, 3)"
    ],
    "answerIndex": 1,
    "explanation": "十重截距時【坐標平移】逆平移：x = 5 - 2 = 3；y = 4 - 1 = 3，原點 (3, 3)。選 (7, 5) 是又加一次平移量。干擾項常漏看另一坐標或符號，求值後要再對照題意。",
    "steps": [
      "逆推 x：5 - 2 = 3。",
      "逆推 y：4 - 1 = 3。",
      "原坐標 (3, 3)。"
    ],
    "commonMistake": "逆平移時加減方向搞反。",
    "concept": "平移時左右改 x、上下改 y：向右 a 則 x+a，向左 a 則 x-a；向上 b 則 y+b，向下 b 則 y-b"
  },
  {
    "questionId": "u05-s005-v011",
    "skillId": "coordinate-translation",
    "topicId": "u05-coordinate-ops",
    "difficulty": "advanced",
    "text": "三角形頂點 (1,1)、(3,1)、(2,3) 皆向上平移 2，哪個坐標改變？",
    "choices": [
      "只有 x",
      "x 和 y 都變",
      "只有 y",
      "都不變"
    ],
    "answerIndex": 2,
    "explanation": "十一交點時【坐標平移】向上平移只增加 y，x 不變。三頂點 y 各加 2，x 維持原值。選 x 和 y 都變是混淆平移方向。這類題不能憑印象，須把條件寫成算式再比對選項。",
    "steps": [
      "向上平移：y + 2。",
      "x 坐標不變。",
      "只有 y 改變。"
    ],
    "commonMistake": "平移圖形以為 x、y 都變。",
    "concept": "平移時左右改 x、上下改 y：向右 a 則 x+a，向左 a 則 x-a；向上 b 則 y+b，向下 b 則 y-b"
  },
  {
    "questionId": "u05-s005-v012",
    "skillId": "coordinate-translation",
    "topicId": "u05-coordinate-ops",
    "difficulty": "literacy",
    "text": "某點連續平移：先左 4 再右 1，等效為何？",
    "choices": [
      "向右 3 個單位",
      "向左 5 個單位",
      "不動",
      "向左 3 個單位"
    ],
    "answerIndex": 3,
    "explanation": "十二素養時【坐標平移】左 4 再右 1：x 共減 3，等效向左 3。選向右 3 是加減方向反；選不動是 4 與 1 相抵看錯。易錯在只記口訣未套數字，帶入後才能排除其他選項。",
    "steps": [
      "左 4：x - 4。",
      "右 1：x + 1。",
      "合計 x - 3，等效左 3。"
    ],
    "commonMistake": "連續平移代數合併算錯。",
    "concept": "平移時左右改 x、上下改 y：向右 a 則 x+a，向左 a 則 x-a；向上 b 則 y+b，向下 b 則 y-b"
  },
  {
    "questionId": "u05-s006-v001",
    "skillId": "coordinate-horizontal-vertical-distance",
    "topicId": "u05-coordinate-ops",
    "difficulty": "basic",
    "text": "A(2, 5) 與 B(7, 5) 的距離為何？",
    "choices": [
      "5",
      "3",
      "12",
      "25"
    ],
    "answerIndex": 0,
    "explanation": "首重讀題時【水平鉛直距】兩點 y 相同，在同一水平線上，距離 = |7 - 2| = 5。選 25 是算成 5²；選 12 是 7+5 相加。錯選通常是把正負方向或軸向對調，應回到定義逐項核對。",
    "steps": [
      "y 相同 → 水平距離。",
      "算 |x2 - x1| = |7-2|。",
      "距離 5。"
    ],
    "commonMistake": "水平距離用 y 坐標相減。",
    "concept": "同一水平線上兩點距離 = |x2-x1|；同一鉛直線上兩點距離 = |y2-y1|；不混用斜線距離公式"
  },
  {
    "questionId": "u05-s006-v002",
    "skillId": "coordinate-horizontal-vertical-distance",
    "topicId": "u05-coordinate-ops",
    "difficulty": "basic",
    "text": "P(1, -3) 與 Q(1, 4) 的距離為何？",
    "choices": [
      "5",
      "7",
      "1",
      "3"
    ],
    "answerIndex": 1,
    "explanation": "次重判斷時【水平鉛直距】x 相同，在同一鉛直線上，距離 = |4 - (-3)| = 7。選 5 是 4-(-3) 算錯符號；選 1 是 x 坐標。干擾項常漏看另一坐標或符號，求值後要再對照題意。",
    "steps": [
      "x 相同 → 鉛直距離。",
      "算 |y2 - y1| = |4-(-3)|。",
      "距離 7。"
    ],
    "commonMistake": "鉛直距離忘記取絕對值。",
    "concept": "同一水平線上兩點距離 = |x2-x1|；同一鉛直線上兩點距離 = |y2-y1|；不混用斜線距離公式"
  },
  {
    "questionId": "u05-s006-v003",
    "skillId": "coordinate-horizontal-vertical-distance",
    "topicId": "u05-coordinate-ops",
    "difficulty": "basic",
    "text": "水平距離 6 的兩點，x 坐標可能為 2 與何者？",
    "choices": [
      "-4",
      "6",
      "8",
      "3"
    ],
    "answerIndex": 2,
    "explanation": "三重描點時【水平鉛直距】水平距離 |x2 - 2| = 6，x2 可為 8 或 -4。選 8 是 2+6；選 -4 是 2-6 也對但題目選項中 8 正確。這類題不能憑印象，須把條件寫成算式再比對選項。",
    "steps": [
      "水平距離 = |x2 - x1|。",
      "|x2 - 2| = 6。",
      "x2 = 8 或 -4，選 8。"
    ],
    "commonMistake": "只算 x2 - x1 不取絕對值。",
    "concept": "同一水平線上兩點距離 = |x2-x1|；同一鉛直線上兩點距離 = |y2-y1|；不混用斜線距離公式"
  },
  {
    "questionId": "u05-s006-v004",
    "skillId": "coordinate-horizontal-vertical-distance",
    "topicId": "u05-coordinate-ops",
    "difficulty": "basic",
    "text": "M(-2, 1) 與 N(3, 1) 相距幾個單位？",
    "choices": [
      "4",
      "3",
      "6",
      "5"
    ],
    "answerIndex": 3,
    "explanation": "四重對稱時【水平鉛直距】y 相同，水平距離 |3 - (-2)| = 5。選 4 是 3-(-2) 少算；選 1 是 y 坐標差。易錯在只記口訣未套數字，帶入後才能排除其他選項。",
    "steps": [
      "y 皆 1，水平線。",
      "|3 - (-2)| = 5。",
      "距離 5。"
    ],
    "commonMistake": "含負 x 時距離算成 3-2=1。",
    "concept": "同一水平線上兩點距離 = |x2-x1|；同一鉛直線上兩點距離 = |y2-y1|；不混用斜線距離公式"
  },
  {
    "questionId": "u05-s006-v005",
    "skillId": "coordinate-horizontal-vertical-distance",
    "topicId": "u05-coordinate-ops",
    "difficulty": "standard",
    "text": "A(0, 4) 與 B(0, -2) 的距離為何？",
    "choices": [
      "6",
      "2",
      "4",
      "8"
    ],
    "answerIndex": 0,
    "explanation": "五重平移時【水平鉛直距】同在 y 軸上，鉛直距離 |4 - (-2)| = 6。選 2 是 |-2|；選 4 是只算 4-0。錯選通常是把正負方向或軸向對調，應回到定義逐項核對。",
    "steps": [
      "x 皆 0，在 y 軸。",
      "鉛直距離 |4-(-2)|。",
      "得 6。"
    ],
    "commonMistake": "一正一負相減忘記絕對值。",
    "concept": "同一水平線上兩點距離 = |x2-x1|；同一鉛直線上兩點距離 = |y2-y1|；不混用斜線距離公式"
  },
  {
    "questionId": "u05-s006-v006",
    "skillId": "coordinate-horizontal-vertical-distance",
    "topicId": "u05-coordinate-ops",
    "difficulty": "standard",
    "text": "下列哪組點可求水平距離？",
    "choices": [
      "(2,3) 與 (5,7)",
      "(1,4) 與 (6,4)",
      "(0,0) 與 (3,4)",
      "(-1,2) 與 (2,-1)"
    ],
    "answerIndex": 1,
    "explanation": "六重測距時【水平鉛直距】(1,4) 與 (6,4) 的 y 相同，可求水平距離 |6-1|=5。其餘 y 不同，不能直接用水平距離公式。干擾項常漏看另一坐標或符號，求值後要再對照題意。",
    "steps": [
      "水平距離需 y 相同。",
      "檢查各組 y 坐標。",
      "(1,4) 與 (6,4) 的 y 皆 4。"
    ],
    "commonMistake": "任意兩點都用 |x2-x1|。",
    "concept": "同一水平線上兩點距離 = |x2-x1|；同一鉛直線上兩點距離 = |y2-y1|；不混用斜線距離公式"
  },
  {
    "questionId": "u05-s006-v007",
    "skillId": "coordinate-horizontal-vertical-distance",
    "topicId": "u05-coordinate-ops",
    "difficulty": "standard",
    "text": "P(4, 2) 到 Q(4, -5) 的距離為何？",
    "choices": [
      "9",
      "3",
      "7",
      "1"
    ],
    "answerIndex": 2,
    "explanation": "七重算積時【水平鉛直距】x 相同，鉛直距離 |2 - (-5)| = 7。選 3 是 5-2 只算一半；選 9 是 2+5+2 亂加。這類題不能憑印象，須把條件寫成算式再比對選項。",
    "steps": [
      "x 皆 4。",
      "|y2-y1| = |2-(-5)| = 7。",
      "距離 7。"
    ],
    "commonMistake": "2 與 -5 相減得 -7 就寫 -7。",
    "concept": "同一水平線上兩點距離 = |x2-x1|；同一鉛直線上兩點距離 = |y2-y1|；不混用斜線距離公式"
  },
  {
    "questionId": "u05-s006-v008",
    "skillId": "coordinate-horizontal-vertical-distance",
    "topicId": "u05-coordinate-ops",
    "difficulty": "standard",
    "text": "同一水平線上，x 坐標 -3 與 2 的距離為何？",
    "choices": [
      "1",
      "-5",
      "6",
      "5"
    ],
    "answerIndex": 3,
    "explanation": "八重看線時【水平鉛直距】水平距離 |2 - (-3)| = 5。選 -5 忘記距離非負；選 1 是 3-2 只取部分。易錯在只記口訣未套數字，帶入後才能排除其他選項。",
    "steps": [
      "水平：|x2-x1|。",
      "|2-(-3)| = 5。",
      "距離 5。"
    ],
    "commonMistake": "距離寫成負數。",
    "concept": "同一水平線上兩點距離 = |x2-x1|；同一鉛直線上兩點距離 = |y2-y1|；不混用斜線距離公式"
  },
  {
    "questionId": "u05-s006-v009",
    "skillId": "coordinate-horizontal-vertical-distance",
    "topicId": "u05-coordinate-ops",
    "difficulty": "standard",
    "text": "A(5, 0) 與 B(-1, 0) 在 x 軸上相距？",
    "choices": [
      "6",
      "4",
      "5",
      "1"
    ],
    "answerIndex": 0,
    "explanation": "九重驗點時【水平鉛直距】都在 x 軸，y=0，水平距離 |5-(-1)| = 6。選 4 是 5-1 漏負號；選 5 是 x 坐標本身。錯選通常是把正負方向或軸向對調，應回到定義逐項核對。",
    "steps": [
      "y=0，在 x 軸。",
      "|5-(-1)| = 6。",
      "距離 6。"
    ],
    "commonMistake": "5 與 -1 距離算成 4。",
    "concept": "同一水平線上兩點距離 = |x2-x1|；同一鉛直線上兩點距離 = |y2-y1|；不混用斜線距離公式"
  },
  {
    "questionId": "u05-s006-v010",
    "skillId": "coordinate-horizontal-vertical-distance",
    "topicId": "u05-coordinate-ops",
    "difficulty": "advanced",
    "text": "鉛直距離 8 的兩點，y 坐標可能為 3 與何者？",
    "choices": [
      "11",
      "-5",
      "8",
      "5"
    ],
    "answerIndex": 1,
    "explanation": "十重截距時【水平鉛直距】|y2 - 3| = 8，y2 = 11 或 -5。選 -5 是 3-8；選 11 是 3+8 也對但選項 -5 為其中一解。干擾項常漏看另一坐標或符號，求值後要再對照題意。",
    "steps": [
      "鉛直：|y2-y1| = 8。",
      "y1 = 3。",
      "y2 = 11 或 -5。"
    ],
    "commonMistake": "只寫 y2 = 11 漏 -5。",
    "concept": "同一水平線上兩點距離 = |x2-x1|；同一鉛直線上兩點距離 = |y2-y1|；不混用斜線距離公式"
  },
  {
    "questionId": "u05-s006-v011",
    "skillId": "coordinate-horizontal-vertical-distance",
    "topicId": "u05-coordinate-ops",
    "difficulty": "advanced",
    "text": "C(2, 6) 與 D(2, 6) 的距離為何？",
    "choices": [
      "2",
      "6",
      "0",
      "12"
    ],
    "answerIndex": 2,
    "explanation": "十一交點時【水平鉛直距】兩點坐標完全相同，距離 0。選 2 或 6 是把坐標值當距離。這類題不能憑印象，須把條件寫成算式再比對選項。",
    "steps": [
      "坐標相同。",
      "水平、鉛直距離皆 0。",
      "距離 0。"
    ],
    "commonMistake": "同點距離寫成 x 或 y 值。",
    "concept": "同一水平線上兩點距離 = |x2-x1|；同一鉛直線上兩點距離 = |y2-y1|；不混用斜線距離公式"
  },
  {
    "questionId": "u05-s006-v012",
    "skillId": "coordinate-horizontal-vertical-distance",
    "topicId": "u05-coordinate-ops",
    "difficulty": "literacy",
    "text": "為何 A(1,2) 與 B(4,6) 不能直接用 |4-1| 當距離？",
    "choices": [
      "因 x 不同",
      "因距離必用根號",
      "因点在象限不同",
      "因 y 不同，不在同一水平線"
    ],
    "answerIndex": 3,
    "explanation": "十二素養時【水平鉛直距】水平距離公式只適用 y 相同的兩點。(1,2) 與 (4,6) 的 y 不同，不在同一水平線，|4-1|=3 只是水平分量不是兩點距離。",
    "steps": [
      "水平距離需 y 相同。",
      "此兩點 y：2 與 6 不同。",
      "不能直接用 |x2-x1| 當距離。"
    ],
    "commonMistake": "任意兩點距離都用 x 差。",
    "concept": "同一水平線上兩點距離 = |x2-x1|；同一鉛直線上兩點距離 = |y2-y1|；不混用斜線距離公式"
  }
];

export const U05_LECTURES_S004_S006 = [
  {
    "skillId": "coordinate-plot-description",
    "topicId": "u05-coordinate-basics",
    "title": "描點與對稱",
    "concept": "描點時先沿 x 軸方向移動到對應 x，再沿 y 方向移動到對應 y。對稱關係：關於 x 軸對稱則 y 變號；關於 y 軸對稱則 x 變號；關於原點對稱則 x、y 都變號。到坐標軸的距離等於該坐標的絕對值。會考常以文字描述對稱或距離，要先把條件翻譯成坐標正負。",
    "formula": "x 軸對稱 (a,b)→(a,-b)；y 軸對稱 (a,b)→(-a,b)；原點對稱 (a,b)→(-a,-b)",
    "stepGuide": [
      "描點：先 x 後 y。",
      "對稱：判斷對哪條軸或原點。",
      "決定哪個坐標變號。",
      "到 x 軸距離 = |y|。",
      "到 y 軸距離 = |x|。"
    ],
    "examples": [
      {
        "question": "(3, -2) 關於 y 軸對稱點？",
        "explanation": "首重讀題時【描點對稱例1】【描點對稱·例1】y 軸對稱 x 變號、y 不變，(3, -2) → (-3, -2)。常錯是把 y 也變號變成 (-3, 2)，那是先 y 軸再 x 軸的組合而非單一 y 軸對稱。錯選通常是把正負方向或軸向對調，應回到定義逐項核對。"
      },
      {
        "question": "到 x 軸距離 4 的點 y 坐標？",
        "explanation": "次重判斷時【描點對稱例2】【描點對稱·例2】到 x 軸距離為 |y|，若距離 4 則 y = 4 或 y = -4。只寫 y = 4 漏掉下方另一組解。干擾項常漏看另一坐標或符號，求值後要再對照題意。"
      }
    ],
    "commonMistakes": [
      "描點先 y 後 x",
      "原點對稱只變一軸",
      "y 軸對稱 y 也變號",
      "距離只取正半軸"
    ]
  },
  {
    "skillId": "coordinate-translation",
    "topicId": "u05-coordinate-ops",
    "title": "坐標平移",
    "concept": "平移只改變位置不改變形狀：向右 a 則 x 加 a，向左 a 則 x 減 a；向上 b 則 y 加 b，向下 b 則 y 減 b。水平平移只動 x，垂直平移只動 y。連續平移可合併成一次等效平移。已知終點求原點時要做逆平移，方向與正平移相反。干擾項常漏看另一坐標或符號，求值後要再對照題意。",
    "formula": "右移 x+a；左移 x-a；上移 y+b；下移 y-b",
    "stepGuide": [
      "判斷水平或垂直。",
      "水平改 x，垂直改 y。",
      "正方向用加，反方向用減。",
      "連續平移合併代數和。",
      "逆問題用減去平移量。"
    ],
    "examples": [
      {
        "question": "(2, 5) 左 2 下 3？",
        "explanation": "首重讀題時【坐標平移例1】【坐標平移·例1】左 2：x 變 0；下 3：y 變 2，可得 (0, 2)。向下是 y 減 3 不是加 3，5 - 3 = 2。這類題不能憑印象，須把條件寫成算式再比對選項。易錯在只記口訣未套數字，帶入後才能排除其他選項。"
      },
      {
        "question": "平移後 (4,1)→(1,1)？",
        "explanation": "次重判斷時【坐標平移例2】【坐標平移·例2】y 不變、x 由 4 變 1，差 -3，向左 3 個單位。不是向下 3，因為 y 沒有改變。易錯在只記口訣未套數字，帶入後才能排除其他選項。"
      }
    ],
    "commonMistakes": [
      "左移 x 加 a",
      "下移 y 加 b",
      "逆平移加減反",
      "平移改變 x、y 都動"
    ]
  },
  {
    "skillId": "coordinate-horizontal-vertical-distance",
    "topicId": "u05-coordinate-ops",
    "title": "水平與鉛直距離",
    "concept": "國中坐標距離分兩種：同一水平線（y 相同）的兩點，距離為 x 坐標差的絕對值；同一鉛直線（x 相同）的兩點，距離為 y 坐標差的絕對值。距離恆非負。若兩點既不同 x 也不同 y，不能直接把 x 差或 y 差當距離，會考此單元不要求斜線根號公式。",
    "formula": "水平：|x2-x1|（y 相同）；鉛直：|y2-y1|（x 相同）",
    "stepGuide": [
      "先判 y 是否相同 → 水平。",
      "或判 x 是否相同 → 鉛直。",
      "用絕對值相減。",
      "距離非負。",
      "不同 x、y 時不能直接用。"
    ],
    "examples": [
      {
        "question": "(3,1) 與 (3,8) 距離？",
        "explanation": "首重讀題時【水平鉛直距例1】【水平鉛直距·例1】x 相同，鉛直距離 |8-1| = 7。不是 |3-3|，因為 x 差為 0 不能代表鉛直距離以外的斜距。錯選通常是把正負方向或軸向對調，應回到定義逐項核對。"
      },
      {
        "question": "(-2,5) 與 (4,5) 距離？",
        "explanation": "次重判斷時【水平鉛直距例2】【水平鉛直距·例2】y 相同，水平距離 |4-(-2)| = 6。若寫 4-2=2 就漏了 -2 的負號。干擾項常漏看另一坐標或符號，求值後要再對照題意。"
      }
    ],
    "commonMistakes": [
      "距離為負",
      "任意兩點用 x 差",
      "含負坐標不算絕對值",
      "斜線硬用 x 差"
    ]
  }
];
