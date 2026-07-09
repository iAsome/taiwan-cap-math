export const U05_PART_S001_S003 = [
  {
    "questionId": "u05-s001-v001",
    "skillId": "coordinate-point-reading",
    "topicId": "u05-coordinate-basics",
    "difficulty": "basic",
    "text": "點 A 的坐標為 (3, 5)，從原點看，A 在 x 方向與 y 方向各移動幾個單位？",
    "choices": [
      "向右 3、向上 5",
      "向上 3、向右 5",
      "向左 3、向下 5",
      "向右 5、向上 3"
    ],
    "answerIndex": 0,
    "explanation": "首重讀題時【坐標讀取】坐標 (3, 5) 中，3 是 x 坐標表示左右：正數向右 3 個單位；5 是 y 坐標表示上下：正數向上 5 個單位。選「向上 3、向右 5」是把 x、y 對調；選「向右 5、向上 3」則把兩數順序弄反。",
    "steps": [
      "讀坐標 (3, 5)：第一個數 3 管左右。",
      "3 > 0，所以向右 3 個單位。",
      "第二個數 5 管上下，5 > 0 向上 5 個單位。"
    ],
    "commonMistake": "把 (3, 5) 看成先上下 3 再左右 5，忽略 x 在前、y 在後。",
    "concept": "坐標 (x, y) 中 x 表左右、y 表上下；先 x 後 y，順序不可對調，(3,5) 與 (5,3) 位置不同"
  },
  {
    "questionId": "u05-s001-v002",
    "skillId": "coordinate-point-reading",
    "topicId": "u05-coordinate-basics",
    "difficulty": "basic",
    "text": "從原點向左 4 個單位、向上 6 個單位，終點坐標為何？",
    "choices": [
      "(4, 6)",
      "(-4, 6)",
      "(-4, -6)",
      "(6, -4)"
    ],
    "answerIndex": 1,
    "explanation": "次重判斷時【坐標讀取】向左 4 個單位表示 x = -4；向上 6 個單位表示 y = 6，所以坐標是 (-4, 6)。選 (4, 6) 忽略向左要用負數；選 (-4, -6) 把向上誤當向下。",
    "steps": [
      "向左移動：x 坐標為負，x = -4。",
      "向上移動：y 坐標為正，y = 6。",
      "合起來寫成 (-4, 6)。"
    ],
    "commonMistake": "向左仍寫 x = 4，沒有在 x 坐標加負號。",
    "concept": "坐標 (x, y) 中 x 表左右、y 表上下；先 x 後 y，順序不可對調，(3,5) 與 (5,3) 位置不同"
  },
  {
    "questionId": "u05-s001-v003",
    "skillId": "coordinate-point-reading",
    "topicId": "u05-coordinate-basics",
    "difficulty": "basic",
    "text": "(2, 5) 與 (5, 2) 的差別是什麼？",
    "choices": [
      "兩點在同一象限所以相同",
      "只有 x 不同",
      "x、y 對調，位置不同",
      "只有 y 不同"
    ],
    "answerIndex": 2,
    "explanation": "三重描點時【坐標讀取】(2, 5) 表示向右 2、向上 5；(5, 2) 表示向右 5、向上 2，兩點位置不同。選「只有 x 不同」忽略 y 也變了；選「同一象限所以相同」混淆象限與坐標值。",
    "steps": [
      "(2, 5)：x=2 向右 2，y=5 向上 5。",
      "(5, 2)：x=5 向右 5，y=2 向上 2。",
      "第一、第二個數對調，位置就不同。"
    ],
    "commonMistake": "看到數字 2 和 5 都一樣，就認為兩點重合。",
    "concept": "坐標 (x, y) 中 x 表左右、y 表上下；先 x 後 y，順序不可對調，(3,5) 與 (5,3) 位置不同"
  },
  {
    "questionId": "u05-s001-v004",
    "skillId": "coordinate-point-reading",
    "topicId": "u05-coordinate-basics",
    "difficulty": "basic",
    "text": "點 P 在 x 軸右方 7 個單位、y 軸下方 2 個單位，P 的坐標為何？",
    "choices": [
      "(-7, 2)",
      "(7, 2)",
      "(-7, -2)",
      "(7, -2)"
    ],
    "answerIndex": 3,
    "explanation": "四重對稱時【坐標讀取】x 軸右方 7 個單位 → x = 7；y 軸下方 2 個單位 → y = -2，所以 P 為 (7, -2)。選 (7, 2) 把下方誤當上方；選 (-7, -2) 把右方誤當左方。易錯在只記口訣未套數字，帶入後才能排除其他選項。",
    "steps": [
      "右方 7 單位：x 為正，x = 7。",
      "下方 2 單位：y 為負，y = -2。",
      "坐標寫成 (7, -2)。"
    ],
    "commonMistake": "下方仍寫 y 為正數 2。",
    "concept": "坐標 (x, y) 中 x 表左右、y 表上下；先 x 後 y，順序不可對調，(3,5) 與 (5,3) 位置不同"
  },
  {
    "questionId": "u05-s001-v005",
    "skillId": "coordinate-point-reading",
    "topicId": "u05-coordinate-basics",
    "difficulty": "standard",
    "text": "文字描述「向右 1、向上 4」對應哪個坐標？",
    "choices": [
      "(1, 4)",
      "(4, 1)",
      "(-1, 4)",
      "(1, -4)"
    ],
    "answerIndex": 0,
    "explanation": "五重平移時【坐標讀取】向右 1 → x = 1；向上 4 → y = 4，坐標為 (1, 4)。選 (4, 1) 是典型的 x、y 對調錯誤。錯選通常是把正負方向或軸向對調，應回到定義逐項核對。",
    "steps": [
      "先寫 x：向右 1 得 x = 1。",
      "再寫 y：向上 4 得 y = 4。",
      "有序數對 (1, 4)。"
    ],
    "commonMistake": "習慣把較大數字放在前面，寫成 (4, 1)。",
    "concept": "坐標 (x, y) 中 x 表左右、y 表上下；先 x 後 y，順序不可對調，(3,5) 與 (5,3) 位置不同"
  },
  {
    "questionId": "u05-s001-v006",
    "skillId": "coordinate-point-reading",
    "topicId": "u05-coordinate-basics",
    "difficulty": "standard",
    "text": "點 Q 坐標 (-3, 2)，下列敘述何者正確？",
    "choices": [
      "Q 在原點右方 3、上方 2",
      "Q 在原點左方 3、上方 2",
      "Q 在原點左方 2、上方 3",
      "Q 在原點右方 3、下方 2"
    ],
    "answerIndex": 1,
    "explanation": "六重測距時【坐標讀取】x = -3 表示在原點左方 3 個單位；y = 2 表示在原點上方 2 個單位。選「左方 2、上方 3」把 -3 與 2 的意義對調。干擾項常漏看另一坐標或符號，求值後要再對照題意。",
    "steps": [
      "x = -3：負數在 y 軸左側，距原點 3 單位。",
      "y = 2：正數在 x 軸上方 2 單位。",
      "所以 Q 在左方 3、上方 2。"
    ],
    "commonMistake": "看到負號只記「左邊」，卻把 3 與 2 的對應方向搞混。",
    "concept": "坐標 (x, y) 中 x 表左右、y 表上下；先 x 後 y，順序不可對調，(3,5) 與 (5,3) 位置不同"
  },
  {
    "questionId": "u05-s001-v007",
    "skillId": "coordinate-point-reading",
    "topicId": "u05-coordinate-basics",
    "difficulty": "standard",
    "text": "從原點向下 5、向右 2，坐標為何？",
    "choices": [
      "(-2, 5)",
      "(5, 2)",
      "(2, -5)",
      "(-5, 2)"
    ],
    "answerIndex": 2,
    "explanation": "七重算積時【坐標讀取】向右 2 → x = 2；向下 5 → y = -5，坐標 (2, -5)。選 (5, 2) 把兩方向都弄反且對調順序。這類題不能憑印象，須把條件寫成算式再比對選項。",
    "steps": [
      "向右：x = 2。",
      "向下：y = -5。",
      "寫成 (2, -5)。"
    ],
    "commonMistake": "先寫向下 5 就把 5 放在 x 坐標。",
    "concept": "坐標 (x, y) 中 x 表左右、y 表上下；先 x 後 y，順序不可對調，(3,5) 與 (5,3) 位置不同"
  },
  {
    "questionId": "u05-s001-v008",
    "skillId": "coordinate-point-reading",
    "topicId": "u05-coordinate-basics",
    "difficulty": "standard",
    "text": "下列哪一組坐標表示「在原點左方 1、下方 3」？",
    "choices": [
      "(1, -3)",
      "(-3, -1)",
      "(-1, 3)",
      "(-1, -3)"
    ],
    "answerIndex": 3,
    "explanation": "八重看線時【坐標讀取】左方 1 → x = -1；下方 3 → y = -3，所以 (-1, -3) 正確。選 (1, -3) 忽略左方要用負 x；選 (-1, 3) 把下方誤當上方。易錯在只記口訣未套數字，帶入後才能排除其他選項。",
    "steps": [
      "左方：x 為負。",
      "下方：y 為負。",
      "(-1, -3) 同時滿足兩方向。"
    ],
    "commonMistake": "只有 x 加負號，y 仍寫正 3。",
    "concept": "坐標 (x, y) 中 x 表左右、y 表上下；先 x 後 y，順序不可對調，(3,5) 與 (5,3) 位置不同"
  },
  {
    "questionId": "u05-s001-v009",
    "skillId": "coordinate-point-reading",
    "topicId": "u05-coordinate-basics",
    "difficulty": "standard",
    "text": "點 (0, 4) 的位置如何描述？",
    "choices": [
      "在 y 軸上，原點上方 4",
      "在 x 軸上，原點右方 4",
      "在第一象限內",
      "在原點"
    ],
    "answerIndex": 0,
    "explanation": "九重驗點時【坐標讀取】x = 0 表示點在 y 軸上；y = 4 > 0 表示在原點上方 4 個單位。選「x 軸右方 4」忽略 x 已為 0；選「第一象限」忽略 x=0 不在象限內。",
    "steps": [
      "x = 0：點在 y 軸。",
      "y = 4 > 0：在 x 軸上方。",
      "位置是 y 軸正半軸上距原點 4。"
    ],
    "commonMistake": "看到 y 為正就說在第一象限，沒看 x = 0。",
    "concept": "坐標 (x, y) 中 x 表左右、y 表上下；先 x 後 y，順序不可對調，(3,5) 與 (5,3) 位置不同"
  },
  {
    "questionId": "u05-s001-v010",
    "skillId": "coordinate-point-reading",
    "topicId": "u05-coordinate-basics",
    "difficulty": "advanced",
    "text": "若點 M 由 (1, 2) 改為 (2, 1)，M 如何移動？",
    "choices": [
      "向右 1 且向上 1",
      "向右 1 且向下 1",
      "向左 1 且向下 1",
      "不動"
    ],
    "answerIndex": 1,
    "explanation": "十重截距時【坐標讀取】x 由 1 變 2：向右 1；y 由 2 變 1：向下 1。選「向上 1」把 y 變化方向看反。干擾項常漏看另一坐標或符號，求值後要再對照題意。",
    "steps": [
      "比較 x：2 - 1 = 1，向右 1。",
      "比較 y：1 - 2 = -1，向下 1。",
      "合起來：向右上改為向右下各 1。"
    ],
    "commonMistake": "y 變小仍說向上，因為沒算 y 的差。",
    "concept": "坐標 (x, y) 中 x 表左右、y 表上下；先 x 後 y，順序不可對調，(3,5) 與 (5,3) 位置不同"
  },
  {
    "questionId": "u05-s001-v011",
    "skillId": "coordinate-point-reading",
    "topicId": "u05-coordinate-basics",
    "difficulty": "advanced",
    "text": "坐標 (-2, -5) 表示從原點如何移動？",
    "choices": [
      "左 5 下 2",
      "右 2 下 5",
      "左 2 下 5",
      "左 2 上 5"
    ],
    "answerIndex": 2,
    "explanation": "十一交點時【坐標讀取】x = -2 表示向左 2；y = -5 表示向下 5。選「左 5 下 2」把 x、y 數值對調解讀。這類題不能憑印象，須把條件寫成算式再比對選項。",
    "steps": [
      "x = -2：左方 2 單位。",
      "y = -5：下方 5 單位。",
      "敘述為左 2、下 5。"
    ],
    "commonMistake": "兩個負數就寫「左 5 下 2」，數字與軸對應錯。",
    "concept": "坐標 (x, y) 中 x 表左右、y 表上下；先 x 後 y，順序不可對調，(3,5) 與 (5,3) 位置不同"
  },
  {
    "questionId": "u05-s001-v012",
    "skillId": "coordinate-point-reading",
    "topicId": "u05-coordinate-basics",
    "difficulty": "literacy",
    "text": "地圖以某路口為原點，向東為 x 正向、向北為 y 正向。某店在 (-3, 4)，代表什麼？",
    "choices": [
      "東 3 北 4",
      "西 3 南 4",
      "東 4 北 3",
      "西 3 北 4"
    ],
    "answerIndex": 3,
    "explanation": "十二素養時【坐標讀取】x = -3：向西 3；y = 4：向北 4。選「東 3」忽略負 x 代表西；選「東 4 北 3」把兩數對調。易錯在只記口訣未套數字，帶入後才能排除其他選項。",
    "steps": [
      "x 負：與東向相反，即向西 3。",
      "y 正：向北 4。",
      "文字描述：西 3、北 4。"
    ],
    "commonMistake": "負 x 仍說向東，沒對照題目 x 正向定義。",
    "concept": "坐標 (x, y) 中 x 表左右、y 表上下；先 x 後 y，順序不可對調，(3,5) 與 (5,3) 位置不同"
  },
  {
    "questionId": "u05-s002-v001",
    "skillId": "coordinate-quadrant",
    "topicId": "u05-coordinate-basics",
    "difficulty": "basic",
    "text": "點 (3, 2) 在第幾象限？",
    "choices": [
      "第一象限",
      "第二象限",
      "第三象限",
      "第四象限"
    ],
    "answerIndex": 0,
    "explanation": "首重讀題時【象限判斷】x = 3 > 0、y = 2 > 0，兩坐標同為正，符合第一象限。選第二象限是 x 正負看反；選第四象限則 y 正負看反。錯選通常是把正負方向或軸向對調，應回到定義逐項核對。",
    "steps": [
      "看 x：3 > 0 在 y 軸右側。",
      "看 y：2 > 0 在 x 軸上方。",
      "右上方即第一象限。"
    ],
    "commonMistake": "只記「右上第一」卻沒分別檢查 x、y 正負。",
    "concept": "第一象限 x>0、y>0；第二象限 x<0、y>0；第三象限 x<0、y<0；第四象限 x>0、y<0；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s002-v002",
    "skillId": "coordinate-quadrant",
    "topicId": "u05-coordinate-basics",
    "difficulty": "basic",
    "text": "點 (-4, 1) 在第幾象限？",
    "choices": [
      "第一象限",
      "第二象限",
      "第三象限",
      "第四象限"
    ],
    "answerIndex": 1,
    "explanation": "次重判斷時【象限判斷】x = -4 < 0、y = 1 > 0，左上方為第二象限。選第一象限忽略 x 為負；選第三象限則 y 正負也看錯。干擾項常漏看另一坐標或符號，求值後要再對照題意。",
    "steps": [
      "x 負：在 y 軸左側。",
      "y 正：在 x 軸上方。",
      "左上方是第二象限。"
    ],
    "commonMistake": "看到 y 為正就選第一象限，沒看 x 是否為負。",
    "concept": "第一象限 x>0、y>0；第二象限 x<0、y>0；第三象限 x<0、y<0；第四象限 x>0、y<0；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s002-v003",
    "skillId": "coordinate-quadrant",
    "topicId": "u05-coordinate-basics",
    "difficulty": "basic",
    "text": "點 (-2, -5) 在第幾象限？",
    "choices": [
      "第一象限",
      "第二象限",
      "第三象限",
      "第四象限"
    ],
    "answerIndex": 2,
    "explanation": "三重描點時【象限判斷】x = -2 < 0、y = -5 < 0，左下方為第三象限。選第四象限是把 x 正負弄反；選第二象限則 y 正負弄反。這類題不能憑印象，須把條件寫成算式再比對選項。",
    "steps": [
      "x 負、y 負：左下方。",
      "第三象限符號為 (-, -)。",
      "(-2, -5) 在第三象限。"
    ],
    "commonMistake": "兩個負號就亂猜第二或第四象限。",
    "concept": "第一象限 x>0、y>0；第二象限 x<0、y>0；第三象限 x<0、y<0；第四象限 x>0、y<0；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s002-v004",
    "skillId": "coordinate-quadrant",
    "topicId": "u05-coordinate-basics",
    "difficulty": "basic",
    "text": "點 (6, -1) 在第幾象限？",
    "choices": [
      "第一象限",
      "第二象限",
      "第三象限",
      "第四象限"
    ],
    "answerIndex": 3,
    "explanation": "四重對稱時【象限判斷】x = 6 > 0、y = -1 < 0，右下方為第四象限。選第一象限忽略 y 為負；選第三象限則 x 正負也錯。易錯在只記口訣未套數字，帶入後才能排除其他選項。",
    "steps": [
      "x 正：右側。",
      "y 負：下方。",
      "右下即第四象限。"
    ],
    "commonMistake": "x 為正就選第一象限，沒看 y 是否為負。",
    "concept": "第一象限 x>0、y>0；第二象限 x<0、y>0；第三象限 x<0、y<0；第四象限 x>0、y<0；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s002-v005",
    "skillId": "coordinate-quadrant",
    "topicId": "u05-coordinate-basics",
    "difficulty": "standard",
    "text": "下列哪一點在第二象限？",
    "choices": [
      "(-1, 4)",
      "(2, 3)",
      "(5, -2)",
      "(-3, -1)"
    ],
    "answerIndex": 0,
    "explanation": "五重平移時【象限判斷】第二象限須 x < 0 且 y > 0，(-1, 4) 符合。(2, 3) 是第一象限；(5, -2) 是第四象限；(-3, -1) 是第三象限。錯選通常是把正負方向或軸向對調，應回到定義逐項核對。",
    "steps": [
      "第二象限：x 負、y 正。",
      "逐項檢查正負號。",
      "(-1, 4) 唯一符合。"
    ],
    "commonMistake": "只看 x 為負就選，忽略 y 也要為正。",
    "concept": "第一象限 x>0、y>0；第二象限 x<0、y>0；第三象限 x<0、y<0；第四象限 x>0、y<0；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s002-v006",
    "skillId": "coordinate-quadrant",
    "topicId": "u05-coordinate-basics",
    "difficulty": "standard",
    "text": "若點 P 在第三象限，則 P 的坐標符號為何？",
    "choices": [
      "(+, +)",
      "(-, -)",
      "(-, +)",
      "(+, -)"
    ],
    "answerIndex": 1,
    "explanation": "六重測距時【象限判斷】第三象限在左下方，x 與 y 皆為負，符號 (-, -)。選 (-, +) 是第二象限；選 (+, -) 是第四象限。干擾項常漏看另一坐標或符號，求值後要再對照題意。",
    "steps": [
      "第三象限位置：左下。",
      "左 → x 負；下 → y 負。",
      "符號為 (-, -)。"
    ],
    "commonMistake": "把第三象限與第二象限的符號搞混。",
    "concept": "第一象限 x>0、y>0；第二象限 x<0、y>0；第三象限 x<0、y<0；第四象限 x>0、y<0；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s002-v007",
    "skillId": "coordinate-quadrant",
    "topicId": "u05-coordinate-basics",
    "difficulty": "standard",
    "text": "第四象限內的點，x 與 y 的正負為何？",
    "choices": [
      "x 正、y 正",
      "x 負、y 正",
      "x 正、y 負",
      "x 負、y 負"
    ],
    "answerIndex": 2,
    "explanation": "七重算積時【象限判斷】第四象限在右下方：x > 0、y < 0，即 x 正、y 負。選 x 正 y 正是第一象限；選 x 負 y 正是第二象限。這類題不能憑印象，須把條件寫成算式再比對選項。",
    "steps": [
      "第四象限在右下。",
      "右：x 正；下：y 負。",
      "選 x 正、y 負。"
    ],
    "commonMistake": "記成「右下都是正」而忽略 y 在 x 軸下方。",
    "concept": "第一象限 x>0、y>0；第二象限 x<0、y>0；第三象限 x<0、y<0；第四象限 x>0、y<0；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s002-v008",
    "skillId": "coordinate-quadrant",
    "topicId": "u05-coordinate-basics",
    "difficulty": "standard",
    "text": "點 (0, -3) 在第幾象限？",
    "choices": [
      "第一象限",
      "第二象限",
      "第三象限",
      "不屬於任何象限"
    ],
    "answerIndex": 3,
    "explanation": "八重看線時【象限判斷】x = 0 表示點在 y 軸上，不在任何象限內。選第三或第四象限是看到 y 為負就亂歸類，忘了 x = 0 的特殊性。",
    "steps": [
      "先檢查 x 是否為 0。",
      "x = 0 → 在 y 軸上。",
      "坐標軸上的點不屬於象限。"
    ],
    "commonMistake": "y 為負就歸第四象限，沒看 x = 0。",
    "concept": "第一象限 x>0、y>0；第二象限 x<0、y>0；第三象限 x<0、y<0；第四象限 x>0、y<0；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s002-v009",
    "skillId": "coordinate-quadrant",
    "topicId": "u05-coordinate-basics",
    "difficulty": "standard",
    "text": "下列哪一點在第四象限？",
    "choices": [
      "(3, -4)",
      "(1, 2)",
      "(-2, 5)",
      "(-1, -2)"
    ],
    "answerIndex": 0,
    "explanation": "九重驗點時【象限判斷】(3, -4) 的 x 正、y 負，在第四象限。(1, 2) 是第一象限；(-2, 5) 是第二象限；(-1, -2) 是第三象限。錯選通常是把正負方向或軸向對調，應回到定義逐項核對。",
    "steps": [
      "第四象限：x>0 且 y<0。",
      "逐點檢查正負。",
      "(3, -4) 符合。"
    ],
    "commonMistake": "看到 3 和 4 都較大就選 (1, 2)。",
    "concept": "第一象限 x>0、y>0；第二象限 x<0、y>0；第三象限 x<0、y<0；第四象限 x>0、y<0；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s002-v010",
    "skillId": "coordinate-quadrant",
    "topicId": "u05-coordinate-basics",
    "difficulty": "advanced",
    "text": "若 a > 0 且 b < 0，點 (a, b) 在第幾象限？",
    "choices": [
      "第一象限",
      "第四象限",
      "第二象限",
      "第三象限"
    ],
    "answerIndex": 1,
    "explanation": "十重截距時【象限判斷】a > 0 表示 x 正；b < 0 表示 y 負，右下方為第四象限。選第一象限是忽略 b < 0；選第三象限則 a 正負也錯。干擾項常漏看另一坐標或符號，求值後要再對照題意。",
    "steps": [
      "a > 0 → x 在右側。",
      "b < 0 → y 在下方。",
      "右下為第四象限。"
    ],
    "commonMistake": "字母 a、b 一正一負就猜第二象限。",
    "concept": "第一象限 x>0、y>0；第二象限 x<0、y>0；第三象限 x<0、y<0；第四象限 x>0、y<0；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s002-v011",
    "skillId": "coordinate-quadrant",
    "topicId": "u05-coordinate-basics",
    "difficulty": "advanced",
    "text": "點 Q 在 x 軸正半軸上且不是原點，Q 在第幾象限？",
    "choices": [
      "第一象限",
      "第四象限",
      "不屬於任何象限",
      "第一或第四象限"
    ],
    "answerIndex": 2,
    "explanation": "十一交點時【象限判斷】x 軸上的點 y = 0，不在任何象限內。選第一或第四象限是看到 x 正就硬歸類，忽略 y = 0 必在 x 軸上。這類題不能憑印象，須把條件寫成算式再比對選項。",
    "steps": [
      "x 軸上：y = 0。",
      "y = 0 不符合任何象限定義。",
      "Q 不屬於任何象限。"
    ],
    "commonMistake": "x 為正就歸第一象限，沒看 y 是否為 0。",
    "concept": "第一象限 x>0、y>0；第二象限 x<0、y>0；第三象限 x<0、y<0；第四象限 x>0、y<0；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s002-v012",
    "skillId": "coordinate-quadrant",
    "topicId": "u05-coordinate-basics",
    "difficulty": "literacy",
    "text": "某班討論：「(-5, 2) 在第二象限，因為 5 比 2 大。」此說法對嗎？",
    "choices": [
      "對，數字大就在第二象限",
      "對，y 為正就在第二象限",
      "錯，應看 x 是否為 0",
      "錯，應看正負而非數字大小"
    ],
    "answerIndex": 3,
    "explanation": "十二素養時【象限判斷】判斷象限只看 x、y 正負，與數字大小無關。(-5, 2) 確實在第二象限，但理由應是 x 負、y 正，不是 5 比 2 大。易錯在只記口訣未套數字，帶入後才能排除其他選項。",
    "steps": [
      "象限由正負決定，非絕對值大小。",
      "(-5, 2)：x 負 y 正 → 第二象限。",
      "「5 比 2 大」不是判斷依據。"
    ],
    "commonMistake": "用數字大小代替正負號判斷象限。",
    "concept": "第一象限 x>0、y>0；第二象限 x<0、y>0；第三象限 x<0、y<0；第四象限 x>0、y<0；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s003-v001",
    "skillId": "coordinate-axis-points",
    "topicId": "u05-coordinate-basics",
    "difficulty": "basic",
    "text": "點 (5, 0) 在哪一條軸上？",
    "choices": [
      "x 軸",
      "y 軸",
      "不在軸上",
      "在原點"
    ],
    "answerIndex": 0,
    "explanation": "首重讀題時【坐標軸點】y = 0 表示縱坐標為 0，點在 x 軸上。選 y 軸是看到 5 就誤以為 x 軸；選不在軸上則忽略 y = 0 的意義。錯選通常是把正負方向或軸向對調，應回到定義逐項核對。",
    "steps": [
      "看 y 坐標：y = 0。",
      "y = 0 → 在 x 軸上。",
      "(5, 0) 在 x 軸正半軸。"
    ],
    "commonMistake": "y = 0 仍說在 y 軸，因為第二個數是 0。",
    "concept": "x 軸上的點 y = 0；y 軸上的點 x = 0；原點 (0, 0)；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s003-v002",
    "skillId": "coordinate-axis-points",
    "topicId": "u05-coordinate-basics",
    "difficulty": "basic",
    "text": "點 (0, -4) 在哪一條軸上？",
    "choices": [
      "x 軸",
      "y 軸",
      "第一象限",
      "第四象限"
    ],
    "answerIndex": 1,
    "explanation": "次重判斷時【坐標軸點】x = 0 表示橫坐標為 0，點在 y 軸上。選 x 軸是把 0 的位置搞錯；選象限則忽略 x = 0 不在象限內。干擾項常漏看另一坐標或符號，求值後要再對照題意。",
    "steps": [
      "x = 0 → 在 y 軸。",
      "y = -4 < 0 → y 軸負半軸。",
      "不在任何象限。"
    ],
    "commonMistake": "x = 0 就說在 x 軸，搞混哪個坐標為 0。",
    "concept": "x 軸上的點 y = 0；y 軸上的點 x = 0；原點 (0, 0)；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s003-v003",
    "skillId": "coordinate-axis-points",
    "topicId": "u05-coordinate-basics",
    "difficulty": "basic",
    "text": "原點的坐標為何？",
    "choices": [
      "(1, 1)",
      "(0, 1)",
      "(0, 0)",
      "(1, 0)"
    ],
    "answerIndex": 2,
    "explanation": "三重描點時【坐標軸點】原點是 x 軸與 y 軸交點，兩坐標皆為 0，即 (0, 0)。選 (1, 0) 或 (0, 1) 只滿足一軸為 0，不是交點。這類題不能憑印象，須把條件寫成算式再比對選項。",
    "steps": [
      "原點 = 兩軸交點。",
      "交點 x = 0 且 y = 0。",
      "坐標 (0, 0)。"
    ],
    "commonMistake": "原點寫成 (1, 1) 或只寫一個 0。",
    "concept": "x 軸上的點 y = 0；y 軸上的點 x = 0；原點 (0, 0)；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s003-v004",
    "skillId": "coordinate-axis-points",
    "topicId": "u05-coordinate-basics",
    "difficulty": "basic",
    "text": "下列哪一點在 x 軸上？",
    "choices": [
      "(2, 3)",
      "(0, 5)",
      "(0, 0)",
      "(-1, 0)"
    ],
    "answerIndex": 3,
    "explanation": "四重對稱時【坐標軸點】x 軸上 y 必須為 0，(-1, 0) 符合。(0, 5) 在 y 軸；(2, 3) 在象限內；(0, 0) 是原點，也在 x 軸上但題意通常指非原點的 x 軸點，(-1, 0) 最明確。",
    "steps": [
      "x 軸條件：y = 0。",
      "檢查各點 y 坐標。",
      "(-1, 0) 的 y = 0。"
    ],
    "commonMistake": "選 (0, 0) 沒注意題目要一般 x 軸點。",
    "concept": "x 軸上的點 y = 0；y 軸上的點 x = 0；原點 (0, 0)；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s003-v005",
    "skillId": "coordinate-axis-points",
    "topicId": "u05-coordinate-basics",
    "difficulty": "standard",
    "text": "點 P(0, 7) 屬於哪一類？",
    "choices": [
      "y 軸上的點",
      "x 軸上的點",
      "第一象限的點",
      "第四象限的點"
    ],
    "answerIndex": 0,
    "explanation": "五重平移時【坐標軸點】x = 0 表示在 y 軸上，不屬於任何象限。選第一象限是看到 y 正就硬歸類；選 x 軸則 x、y 哪個為 0 搞混。錯選通常是把正負方向或軸向對調，應回到定義逐項核對。",
    "steps": [
      "x = 0 → y 軸。",
      "y = 7 > 0 → 正半軸。",
      "P 在 y 軸上，不在象限。"
    ],
    "commonMistake": "y 為正就說在第一象限，忽略 x = 0。",
    "concept": "x 軸上的點 y = 0；y 軸上的點 x = 0；原點 (0, 0)；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s003-v006",
    "skillId": "coordinate-axis-points",
    "topicId": "u05-coordinate-basics",
    "difficulty": "standard",
    "text": "若點 Q 在 x 軸負半軸上且不是原點，Q 的坐標可能為何？",
    "choices": [
      "(3, 0)",
      "(-4, 0)",
      "(0, -2)",
      "(0, 4)"
    ],
    "answerIndex": 1,
    "explanation": "六重測距時【坐標軸點】x 軸負半軸：y = 0 且 x < 0，(-4, 0) 符合。(3, 0) 在正半軸；(0, -2) 在 y 軸。干擾項常漏看另一坐標或符號，求值後要再對照題意。",
    "steps": [
      "x 軸：y = 0。",
      "負半軸：x < 0。",
      "(-4, 0) 符合兩條件。"
    ],
    "commonMistake": "x 軸負半軸寫成 (0, -4)，把 0 放錯位置。",
    "concept": "x 軸上的點 y = 0；y 軸上的點 x = 0；原點 (0, 0)；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s003-v007",
    "skillId": "coordinate-axis-points",
    "topicId": "u05-coordinate-basics",
    "difficulty": "standard",
    "text": "點 (0, 0) 在第幾象限？",
    "choices": [
      "第一象限",
      "第四象限",
      "原點，不屬於任何象限",
      "在 x 軸但不屬於象限"
    ],
    "answerIndex": 2,
    "explanation": "七重算積時【坐標軸點】原點 (0, 0) 在兩軸交點，不屬於任何象限。選「在 x 軸但不屬於象限」只對一半，原點同時也在 y 軸上。",
    "steps": [
      "(0, 0) 是原點。",
      "x = 0 且 y = 0。",
      "不屬於任何象限。"
    ],
    "commonMistake": "原點硬歸第一象限。",
    "concept": "x 軸上的點 y = 0；y 軸上的點 x = 0；原點 (0, 0)；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s003-v008",
    "skillId": "coordinate-axis-points",
    "topicId": "u05-coordinate-basics",
    "difficulty": "standard",
    "text": "下列敘述何者正確？",
    "choices": [
      "(2, 0) 在第二象限",
      "(-1, 2) 在 x 軸上",
      "(0, 0) 在第一象限",
      "(0, -3) 在 y 軸上"
    ],
    "answerIndex": 3,
    "explanation": "八重看線時【坐標軸點】(0, -3) 的 x = 0，在 y 軸上。(2, 0) 在 x 軸不在象限；(-1, 2) 在第二象限不在 x 軸；(0, 0) 是原點。易錯在只記口訣未套數字，帶入後才能排除其他選項。",
    "steps": [
      "逐項檢查 x、y 是否為 0。",
      "(0, -3)：x=0 → y 軸。",
      "此敘述正確。"
    ],
    "commonMistake": "(2, 0) 因 x 正就說在第一象限。",
    "concept": "x 軸上的點 y = 0；y 軸上的點 x = 0；原點 (0, 0)；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s003-v009",
    "skillId": "coordinate-axis-points",
    "topicId": "u05-coordinate-basics",
    "difficulty": "standard",
    "text": "從 (3, 0) 沿 y 軸方向移動會離開 x 軸嗎？",
    "choices": [
      "會，y 不再為 0",
      "不會，仍在 x 軸",
      "會，變成在 y 軸",
      "不一定"
    ],
    "answerIndex": 0,
    "explanation": "九重驗點時【坐標軸點】(3, 0) 在 x 軸上因 y = 0。沿 y 方向移動會改變 y，y 不再為 0 就離開 x 軸。選「變成在 y 軸」需 x 也變 0 才成立。錯選通常是把正負方向或軸向對調，應回到定義逐項核對。",
    "steps": [
      "(3, 0) 在 x 軸：y = 0。",
      "沿 y 方向移動改變 y。",
      "y ≠ 0 就不再在 x 軸。"
    ],
    "commonMistake": "沿 y 移動仍以為在 x 軸。",
    "concept": "x 軸上的點 y = 0；y 軸上的點 x = 0；原點 (0, 0)；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s003-v010",
    "skillId": "coordinate-axis-points",
    "topicId": "u05-coordinate-basics",
    "difficulty": "advanced",
    "text": "y 軸上除原點外的點，x 坐標必為何？",
    "choices": [
      "正數",
      "0",
      "負數",
      "任意實數"
    ],
    "answerIndex": 1,
    "explanation": "十重截距時【坐標軸點】y 軸定義為 x = 0 的所有點，除原點外 x 仍為 0。選正數或負數是把 y 坐標誤當 x 坐標。干擾項常漏看另一坐標或符號，求值後要再對照題意。",
    "steps": [
      "y 軸：x 恒為 0。",
      "原點除外，其他 y 軸點 x 仍 0。",
      "x 坐標必為 0。"
    ],
    "commonMistake": "y 軸上的點 x 可以是 ±1。",
    "concept": "x 軸上的點 y = 0；y 軸上的點 x = 0；原點 (0, 0)；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s003-v011",
    "skillId": "coordinate-axis-points",
    "topicId": "u05-coordinate-basics",
    "difficulty": "advanced",
    "text": "點 A(0, -6) 與 B(-6, 0) 的共同点為何？",
    "choices": [
      "都在第一象限",
      "x 坐標相同",
      "都在坐標軸上且不在象限",
      "y 坐標相同"
    ],
    "answerIndex": 2,
    "explanation": "十一交點時【坐標軸點】A 在 y 軸、B 在 x 軸，都在坐標軸上且不屬於任何象限。x 坐標 A 為 0、B 為 -6 不同；y 坐標也不同。這類題不能憑印象，須把條件寫成算式再比對選項。",
    "steps": [
      "A：x=0 → y 軸。",
      "B：y=0 → x 軸。",
      "兩點都在軸上、不在象限。"
    ],
    "commonMistake": "看到 -6 就猜第三象限。",
    "concept": "x 軸上的點 y = 0；y 軸上的點 x = 0；原點 (0, 0)；在坐標軸上的點不屬於任何象限"
  },
  {
    "questionId": "u05-s003-v012",
    "skillId": "coordinate-axis-points",
    "topicId": "u05-coordinate-basics",
    "difficulty": "literacy",
    "text": "某點在 x 軸上且距原點 8 個單位，其坐標可能為何？",
    "choices": [
      "(0, 8)",
      "(8, 8)",
      "(-8, 8)",
      "(8, 0)"
    ],
    "answerIndex": 3,
    "explanation": "十二素養時【坐標軸點】x 軸上 y = 0，距原點 8 單位即 |x| = 8，可能 (8, 0) 或 (-8, 0)。選 (0, 8) 是在 y 軸；選 (8, 8) 不在 x 軸。易錯在只記口訣未套數字，帶入後才能排除其他選項。",
    "steps": [
      "x 軸：y = 0。",
      "距原點 8：|x| = 8。",
      "(8, 0) 是其中一解。"
    ],
    "commonMistake": "距原點 8 寫成 (0, 8)。",
    "concept": "x 軸上的點 y = 0；y 軸上的點 x = 0；原點 (0, 0)；在坐標軸上的點不屬於任何象限"
  }
];

export const U05_LECTURES_S001_S003 = [
  {
    "skillId": "coordinate-point-reading",
    "topicId": "u05-coordinate-basics",
    "title": "坐標讀法與點的位置",
    "concept": "平面直角坐標系用有序數對 (x, y) 表示點的位置：x 描述左右（正向右、負向左），y 描述上下（正向上、負向下）。讀坐標時一定先 x 後 y，不能把 (3, 5) 與 (5, 3) 看成同一點。會考題常以文字描述「向右幾單位、向上幾單位」，要先把方向轉成正負號再寫成坐標。",
    "formula": "坐標 (x, y)：x 管左右，y 管上下",
    "stepGuide": [
      "先確認 x 軸、y 軸正方向（通常向右、向上）。",
      "讀題把「左右」換成 x、「上下」換成 y。",
      "正方向用正數，反方向用負數。",
      "先寫 x 再寫 y，組成 (x, y)。",
      "可用原點移動描述自我檢查。"
    ],
    "examples": [
      {
        "question": "點 (2, -3) 在哪裡？",
        "explanation": "首重讀題時【坐標讀取例1】【坐標讀取·例1】x = 2 表示在原點右方 2 個單位；y = -3 表示在 x 軸下方 3 個單位。描述位置時用「右 2、下 3」最清楚，不必硬說象限。"
      },
      {
        "question": "向左 5、向上 1 的坐標？",
        "explanation": "次重判斷時【坐標讀取例2】【坐標讀取·例2】向左 5 使 x = -5；向上 1 使 y = 1，所以坐標是 (-5, 1)。寫成 (5, 1) 是忘了左方要取負 x。易錯在只記口訣未套數字，帶入後才能排除其他選項。"
      }
    ],
    "commonMistakes": [
      "把 (a, b) 寫成 (b, a)",
      "向下仍寫 y 為正",
      "x = 0 仍說在象限內",
      "只看數字大小不看正負"
    ]
  },
  {
    "skillId": "coordinate-quadrant",
    "topicId": "u05-coordinate-basics",
    "title": "象限判斷",
    "concept": "坐標平面被 x 軸、y 軸分成四個象限：第一象限 (x>0, y>0) 右上；第二象限 (x<0, y>0) 左上；第三象限 (x<0, y<0) 左下；第四象限 (x>0, y<0) 右下。判斷時分別看 x、y 正負，與數字大小無關。在 x 軸、y 軸或原點上的點不屬於任何象限，這是常見陷阱。這類題不能憑印象，須把條件寫成算式再比對選項。",
    "formula": "第一 (+,+)；第二 (-,+)；第三 (-,-)；第四 (+,-)",
    "stepGuide": [
      "分別讀 x、y 的正負。",
      "對照四象限符號表。",
      "x=0 或 y=0 時改判在軸上。",
      "不要用絕對值大小判斷。",
      "畫原點與四區域輔助記憶。"
    ],
    "examples": [
      {
        "question": "(-3, -2) 在第幾象限？",
        "explanation": "首重讀題時【象限判斷例1】【象限判斷·例1】x = -3 < 0、y = -2 < 0，左下方為第三象限。判斷象限只需正負，-3 與 -2 誰的絕對值大不影響結果。錯選通常是把正負方向或軸向對調，應回到定義逐項核對。"
      },
      {
        "question": "(4, 0) 在第幾象限？",
        "explanation": "次重判斷時【象限判斷例2】【象限判斷·例2】y = 0 表示點在 x 軸上，不在任何象限內。即使 x = 4 > 0，也不能因為 x 正就歸第一或第四象限。干擾項常漏看另一坐標或符號，求值後要再對照題意。"
      }
    ],
    "commonMistakes": [
      "x=0 仍歸入象限",
      "只看 y 正負",
      "用數字大小判斷",
      "第三、四象限符號搞混"
    ]
  },
  {
    "skillId": "coordinate-axis-points",
    "topicId": "u05-coordinate-basics",
    "title": "坐標軸上的點",
    "concept": "在 x 軸上的點滿足 y = 0，在 y 軸上的點滿足 x = 0，原點 (0, 0) 是兩軸交點。這些點都不屬於任何象限，會考常設陷阱讓學生看到 x 或 y 為正就硬歸象限。判斷時先看哪個坐標為 0，再描述在正半軸或負半軸。易錯在只記口訣未套數字，帶入後才能排除其他選項。",
    "formula": "x 軸：y=0；y 軸：x=0；原點：(0,0)",
    "stepGuide": [
      "先看 x 是否為 0 → y 軸。",
      "再看 y 是否為 0 → x 軸。",
      "兩者皆 0 → 原點。",
      "軸上點不屬於象限。",
      "正負半軸看非零坐標的正負。"
    ],
    "examples": [
      {
        "question": "(-2, 0) 在哪？",
        "explanation": "首重讀題時【坐標軸點例1】【坐標軸點·例1】y = 0 表示在 x 軸上，x = -2 < 0 所以在 x 軸負半軸。這個點不在第二或第三象限，因為 y 不是正或負而是 0。這類題不能憑印象，須把條件寫成算式再比對選項。"
      },
      {
        "question": "(0, 3) 在第幾象限？",
        "explanation": "次重判斷時【坐標軸點例2】【坐標軸點·例2】x = 0 表示在 y 軸上，不屬於任何象限。即使 y = 3 > 0，也不能因為 y 正就歸第一象限。易錯在只記口訣未套數字，帶入後才能排除其他選項。"
      }
    ],
    "commonMistakes": [
      "x=0 說在 x 軸",
      "軸上點歸入象限",
      "原點寫 (1,0)",
      "距原點距離放錯軸"
    ]
  }
];
