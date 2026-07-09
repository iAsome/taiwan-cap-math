export const U05_PART_S007_S009 = [
  {
    "questionId": "u05-s007-v001",
    "skillId": "coordinate-rectangle-area",
    "topicId": "u05-coordinate-ops",
    "difficulty": "basic",
    "text": "頂點 (1,1)、(4,1)、(4,3)、(1,3) 圍成長方形，面積為何？",
    "choices": [
      "6",
      "8",
      "12",
      "4"
    ],
    "answerIndex": 0,
    "explanation": "寬 = |4−1| = 3，高 = |3−1| = 2，面積 = 3×2 = 6。邊平行坐標軸的長方形，寬高用坐標差絕對值。12 是周長 2×(3+3)；8 把邊長相加，不是相乘。面積是寬乘高，四頂點圍成的長方形面積為 6。",
    "steps": [
      "x 方向寬 = |4−1| = 3。",
      "y 方向高 = |3−1| = 2。",
      "面積 = 3×2 = 6。"
    ],
    "commonMistake": "面積用周長公式，面積是寬乘高不是相加。",
    "concept": "邊平行坐標軸的長方形：寬 = 水平距離 |x2-x1|，高 = 鉛直距離 |y2-y1|，面積 = 寬 × 高"
  },
  {
    "questionId": "u05-s007-v002",
    "skillId": "coordinate-rectangle-area",
    "topicId": "u05-coordinate-ops",
    "difficulty": "basic",
    "text": "A(0,0)、B(5,0)、C(5,2)、D(0,2) 圍成的長方形面積？",
    "choices": [
      "7",
      "10",
      "5",
      "14"
    ],
    "answerIndex": 1,
    "explanation": "底在 x 軸，寬 5、高 2，面積 = 5×2 = 10。先讀水平寬，再讀鉛直高，最後相乘。7 是 5+2 兩邊相加；5 只寫寬，沒乘高。四頂點圍成長方形，寬高相乘得面積 10。",
    "steps": [
      "底在 x 軸，寬 = 5。",
      "高 = 2。",
      "面積 = 5×2 = 10。"
    ],
    "commonMistake": "寬高相加當面積，面積是寬乘高不是相加。",
    "concept": "邊平行坐標軸的長方形：寬 = 水平距離 |x2-x1|，高 = 鉛直距離 |y2-y1|，面積 = 寬 × 高"
  },
  {
    "questionId": "u05-s007-v003",
    "skillId": "coordinate-rectangle-area",
    "topicId": "u05-coordinate-ops",
    "difficulty": "basic",
    "text": "平行 x 軸的邊長 4、平行 y 軸的邊長 6，面積？",
    "choices": [
      "20",
      "10",
      "24",
      "12"
    ],
    "answerIndex": 2,
    "explanation": "平行 x 軸的邊長 4、平行 y 軸的邊長 6，面積 = 4×6 = 24。題目已給寬高，直接相乘即可。20 是周長 2×(4+6)；10 是 4+6 相加。周長與面積公式不同，本題面積 24。",
    "steps": [
      "寬 = 4。",
      "高 = 6。",
      "面積 = 4×6 = 24。"
    ],
    "commonMistake": "周長與面積公式混淆，面積是寬乘高不是相加。",
    "concept": "邊平行坐標軸的長方形：寬 = 水平距離 |x2-x1|，高 = 鉛直距離 |y2-y1|，面積 = 寬 × 高"
  },
  {
    "questionId": "u05-s007-v004",
    "skillId": "coordinate-rectangle-area",
    "topicId": "u05-coordinate-ops",
    "difficulty": "basic",
    "text": "(-2,1) 與 (3,1) 為底，高 4，長方形面積？",
    "choices": [
      "12",
      "8",
      "5",
      "20"
    ],
    "answerIndex": 3,
    "explanation": "底寬 |3−(−2)| = 5，高 4，面積 = 5×4 = 20。底在水平線上，寬要取坐標差絕對值。12 可能是 5+4+3 相加；8 把底寬算成 4−2=2 再乘 4。含負數仍要取差，長方形面積為 20 平方單位。",
    "steps": [
      "底寬 |3−(−2)| = 5。",
      "高 = 4。",
      "面積 = 5×4 = 20。"
    ],
    "commonMistake": "底寬算成 3-2=1，面積是寬乘高不是相加。",
    "concept": "邊平行坐標軸的長方形：寬 = 水平距離 |x2-x1|，高 = 鉛直距離 |y2-y1|，面積 = 寬 × 高"
  },
  {
    "questionId": "u05-s007-v005",
    "skillId": "coordinate-rectangle-area",
    "topicId": "u05-coordinate-ops",
    "difficulty": "standard",
    "text": "頂點 (2,3) 與 (2,7) 為一邊，另一邊水平長 3，面積？",
    "choices": [
      "12",
      "9",
      "10",
      "21"
    ],
    "answerIndex": 0,
    "explanation": "鉛直邊 |7−3| = 4，水平邊 3，面積 = 3×4 = 12。邊長是坐標差，不是坐標本身。21 是把坐標 3 和 7 直接相乘；10 是 3+4+3 之類相加。先定兩邊再相乘，長方形面積 12。",
    "steps": [
      "鉛直邊 |7−3| = 4。",
      "水平邊 = 3。",
      "面積 = 3×4 = 12。"
    ],
    "commonMistake": "邊長用坐標值而非差，面積是寬乘高不是相加。",
    "concept": "邊平行坐標軸的長方形：寬 = 水平距離 |x2-x1|，高 = 鉛直距離 |y2-y1|，面積 = 寬 × 高"
  },
  {
    "questionId": "u05-s007-v006",
    "skillId": "coordinate-rectangle-area",
    "topicId": "u05-coordinate-ops",
    "difficulty": "standard",
    "text": "長方形四頂點 x 範圍 1 到 5、y 範圍 -1 到 2，面積？",
    "choices": [
      "16",
      "12",
      "8",
      "6"
    ],
    "answerIndex": 1,
    "explanation": "寬 |5−1| = 4，高 |2−(−1)| = 3，面積 = 4×3 = 12。y 含負數時，高仍用坐標差絕對值。16 把高算成 4；8 和 6 是把寬高相加。先由 x、y 範圍定寬高，再相乘，長方形面積為 12 平方單位。",
    "steps": [
      "寬 |5−1| = 4。",
      "高 |2−(−1)| = 3。",
      "面積 = 4×3 = 12。"
    ],
    "commonMistake": "y 含負數時高算錯，面積是寬乘高不是相加。",
    "concept": "邊平行坐標軸的長方形：寬 = 水平距離 |x2-x1|，高 = 鉛直距離 |y2-y1|，面積 = 寬 × 高"
  },
  {
    "questionId": "u05-s007-v007",
    "skillId": "coordinate-rectangle-area",
    "topicId": "u05-coordinate-ops",
    "difficulty": "standard",
    "text": "A(1,2)、B(4,2)、C(4,5)、D(1,5) 圍成長方形，周長為何？",
    "choices": [
      "16",
      "9",
      "12",
      "15"
    ],
    "answerIndex": 2,
    "explanation": "四頂點圍成正方形，寬 |4−1| = 3，高 |5−2| = 3，周長 = 2×(3+3) = 12。這題求周長，要先加寬高再乘 2。9 只加一組邊長；16 是 3×3 面積，不是周長。正方形四邊等長，本題周長為 12。",
    "steps": [
      "寬 = 3，高 = 3。",
      "周長 = 2×(寬+高)。",
      "2×(3+3) = 12。"
    ],
    "commonMistake": "周長只加一組寬高，或把面積公式 3×3 當周長。",
    "concept": "邊平行坐標軸的長方形：寬 = 水平距離 |x2-x1|，高 = 鉛直距離 |y2-y1|，面積 = 寬 × 高"
  },
  {
    "questionId": "u05-s007-v008",
    "skillId": "coordinate-rectangle-area",
    "topicId": "u05-coordinate-ops",
    "difficulty": "standard",
    "text": "原點與 (3,0)、(3,4)、(0,4) 圍成的長方形面積？",
    "choices": [
      "7",
      "14",
      "6",
      "12"
    ],
    "answerIndex": 3,
    "explanation": "寬 3、高 4，面積 = 3×4 = 12。含原點的長方形，寬高仍可沿 x、y 軸讀出，原點在頂點上不影響讀法。7 是 3+4 相加；14 是周長 2×(3+4)。面積與周長公式不同，本題求面積 12。",
    "steps": [
      "寬沿 x 軸 = 3。",
      "高沿 y 軸 = 4。",
      "面積 = 3×4 = 12。"
    ],
    "commonMistake": "含原點時寬高算錯，面積是寬乘高不是相加。",
    "concept": "邊平行坐標軸的長方形：寬 = 水平距離 |x2-x1|，高 = 鉛直距離 |y2-y1|，面積 = 寬 × 高"
  },
  {
    "questionId": "u05-s007-v009",
    "skillId": "coordinate-rectangle-area",
    "topicId": "u05-coordinate-ops",
    "difficulty": "standard",
    "text": "長方形一頂點 (2,-1)，對角頂點 (6,3)，面積？",
    "choices": [
      "16",
      "8",
      "12",
      "20"
    ],
    "answerIndex": 0,
    "explanation": "對角頂點 (2,−1) 與 (6,3)，寬 |6−2| = 4，高 |3−(−1)| = 4，面積 = 4×4 = 16。先由對角坐標相減取絕對值定寬高。8 是 4+4 相加；12 把高算成 3。相減要取絕對值，長方形面積為 16 平方單位。",
    "steps": [
      "寬 |6−2| = 4。",
      "高 |3−(−1)| = 4。",
      "面積 = 4×4 = 16。"
    ],
    "commonMistake": "對角坐標相減忘絕對值，面積是寬乘高不是相加。",
    "concept": "邊平行坐標軸的長方形：寬 = 水平距離 |x2-x1|，高 = 鉛直距離 |y2-y1|，面積 = 寬 × 高"
  },
  {
    "questionId": "u05-s007-v010",
    "skillId": "coordinate-rectangle-area",
    "topicId": "u05-coordinate-ops",
    "difficulty": "advanced",
    "text": "正方形頂點 (0,0)、(3,0)、(3,3)、(0,3)，面積？",
    "choices": [
      "6",
      "9",
      "12",
      "3"
    ],
    "answerIndex": 1,
    "explanation": "四個頂點形成邊長 3 的正方形，所以面積是 3×3 = 9。邊長由相鄰頂點坐標差決定。6 是把兩邊長相加，12 是正方形周長，3 則只寫邊長，都不是面積。",
    "steps": [
      "邊長 = 3。",
      "正方形面積 = 3×3。",
      "面積 = 9。"
    ],
    "commonMistake": "正方形面積用 4×邊長，面積是寬乘高不是相加。",
    "concept": "邊平行坐標軸的長方形：寬 = 水平距離 |x2-x1|，高 = 鉛直距離 |y2-y1|，面積 = 寬 × 高"
  },
  {
    "questionId": "u05-s007-v011",
    "skillId": "coordinate-rectangle-area",
    "topicId": "u05-coordinate-ops",
    "difficulty": "advanced",
    "text": "長 5 寬 2 的長方形，若長邊改沿 y 軸，面積是否改變？",
    "choices": [
      "變成 7",
      "變成 5",
      "不變，仍為 10",
      "無法判斷"
    ],
    "answerIndex": 2,
    "explanation": "長 5、寬 2，面積 = 5×2 = 10，長邊改沿 y 軸只改方向不改邊長，面積不變。旋轉不改變邊長，所以面積不變。7 是 5+2 相加；5 只寫長邊。方向不影響數值。",
    "steps": [
      "長方形面積由長乘寬決定。",
      "長邊改沿 y 軸只改方向，不改長度。",
      "面積仍為 5×2 = 10。"
    ],
    "commonMistake": "邊轉向就以為面積變，面積是寬乘高不是相加。",
    "concept": "邊平行坐標軸的長方形：寬 = 水平距離 |x2-x1|，高 = 鉛直距離 |y2-y1|，面積 = 寬 × 高"
  },
  {
    "questionId": "u05-s007-v012",
    "skillId": "coordinate-rectangle-area",
    "topicId": "u05-coordinate-ops",
    "difficulty": "literacy",
    "text": "某長方形在坐標平面上，x 從 -1 到 2，y 從 0 到 5，面積？",
    "choices": [
      "8",
      "10",
      "12",
      "15"
    ],
    "answerIndex": 3,
    "explanation": "寬 = |2 − (−1)| = 3，高 = |5 − 0| = 5，面積 = 3 × 5 = 15。邊平行坐標軸的長方形，寬高取坐標差絕對值再相乘。含負數的 x 邊界仍要取差再取絕對值。8 是把 3 和 5 相加；10 是把寬算成 2 再乘 5。",
    "steps": [
      "x 從 -1 到 2，寬 = |2 − (−1)| = 3。",
      "y 從 0 到 5，高 = 5。",
      "面積 = 3 × 5 = 15。"
    ],
    "commonMistake": "x 含 -1 時寬算成 2-1=1，面積是寬乘高不是相加。",
    "concept": "邊平行坐標軸的長方形：寬 = 水平距離 |x2-x1|，高 = 鉛直距離 |y2-y1|，面積 = 寬 × 高"
  },
  {
    "questionId": "u05-s008-v001",
    "skillId": "coordinate-linear-equation-graph",
    "topicId": "u05-linear-graph",
    "difficulty": "basic",
    "text": "方程式 2x + y = 6 的圖形為何？",
    "choices": [
      "直線",
      "拋物線",
      "圓",
      "點"
    ],
    "answerIndex": 0,
    "explanation": "二元一次方程式的圖形是直線。選拋物線須二次式。選圓須 x²+y² 形式。選點則只有一解。「拋物線」沒有把坐標代回方程式檢查。",
    "steps": [
      "看方程式次數。",
      "x、y 各一次 → 二元一次。",
      "圖形是直線。"
    ],
    "commonMistake": "一次方程式圖形說成曲線，水平線是 y 等於常數，垂直線是 x 等於常數，描點時先找截距較快。",
    "concept": "二元一次方程式 ax+by=c 的圖形是直線；常用 x=0 求 y 截距、y=0 求 x 截距來描點"
  },
  {
    "questionId": "u05-s008-v002",
    "skillId": "coordinate-linear-equation-graph",
    "topicId": "u05-linear-graph",
    "difficulty": "basic",
    "text": "下列哪一組 (x, y) 是方程式 2x + y = 7 的解？",
    "choices": [
      "(2, 4)",
      "(1, 5)",
      "(3, 1)",
      "(0, 7)"
    ],
    "answerIndex": 1,
    "explanation": "把 (1, 5) 帶入 2x + y：左邊 2×1 + 5 = 7，與右邊相等，所以 (1, 5) 在直線 2x + y = 7 上。(2, 4) 得 2×2 + 4 = 8 ≠ 7。(3, 1) 雖也成立但 (1, 5) 是第一個正確解。任選一組坐標帶入 2x + y。帶入 (0, 7) 後等式不成立。",
    "steps": [
      "任選一組坐標帶入 2x + y。",
      "計算左邊是否等於 7。",
      "(1, 5) 帶入後 2+5=7，成立。"
    ],
    "commonMistake": "只檢查 x 或 y 其中一個數字，沒有把整組帶入方程式。",
    "concept": "二元一次方程式 ax+by=c 的圖形是直線；常用 x=0 求 y 截距、y=0 求 x 截距來描點"
  },
  {
    "questionId": "u05-s008-v003",
    "skillId": "coordinate-linear-equation-graph",
    "topicId": "u05-linear-graph",
    "difficulty": "basic",
    "text": "x + y = 4 中，x = 0 時 y 為何？",
    "choices": [
      "0",
      "-4",
      "4",
      "1"
    ],
    "answerIndex": 2,
    "explanation": "x = 0 帶入：0 + y = 4，y = 4。令 x = 0 可求 y 截距，也就是直線與 y 軸交點的 y 值。0 是 x 的值不是 y；1 是把 4 亂除得到的。這類題就是代 x 為零，本題 y 截距數值是 4。",
    "steps": [
      "在方程式中令 x = 0，求直線與 y 軸的交點。",
      "y = 4。",
      "得截距 (0, 4)。"
    ],
    "commonMistake": "x=0 時仍寫 y=0，二元一次方程式 ax+by=c 的圖形是直線。",
    "concept": "二元一次方程式 ax+by=c 的圖形是直線；常用 x=0 求 y 截距、y=0 求 x 截距來描點"
  },
  {
    "questionId": "u05-s008-v004",
    "skillId": "coordinate-linear-equation-graph",
    "topicId": "u05-linear-graph",
    "difficulty": "basic",
    "text": "2x - y = 8 中，y = 0 時 x 為何？",
    "choices": [
      "8",
      "0",
      "-4",
      "4"
    ],
    "answerIndex": 3,
    "explanation": "y = 0 帶入：2x = 8，x = 4。令 y = 0 可求 x 截距，也就是直線與 x 軸交點的 x 值。8 是直接抄常數項；0 是 y 的值不是 x。這類題就是代 y 為零，本題 x 截距數值是 4。",
    "steps": [
      "在方程式中令 y = 0，求直線與 x 軸的交點。",
      "2x = 8。",
      "x = 4。"
    ],
    "commonMistake": "y=0 時 x 也寫 0，二元一次方程式 ax+by=c 的圖形是直線。",
    "concept": "二元一次方程式 ax+by=c 的圖形是直線；常用 x=0 求 y 截距、y=0 求 x 截距來描點"
  },
  {
    "questionId": "u05-s008-v005",
    "skillId": "coordinate-linear-equation-graph",
    "topicId": "u05-linear-graph",
    "difficulty": "standard",
    "text": "y = -2x + 5 在 y 軸上的截距為何？",
    "choices": [
      "5",
      "-2",
      "0",
      "2"
    ],
    "answerIndex": 0,
    "explanation": "x = 0 時 y = 5，即 y 截距 5。y 截距看 x = 0 時的 y 值，也就是直線與 y 軸交點的高度。−2 是 x 的係數；0 是 x 截距時誤把 y 當 0。把 x 代成 0 就能讀出 y 截距，本題為 5。",
    "steps": [
      "把 x = 0 帶入方程式，求 y 的值。",
      "y = 5。",
      "y 截距 5。"
    ],
    "commonMistake": "y 截距與 x 係數混淆，水平線是 y 等於常數，垂直線是 x 等於常數，描點時先找截距較快。",
    "concept": "二元一次方程式 ax+by=c 的圖形是直線；常用 x=0 求 y 截距、y=0 求 x 截距來描點"
  },
  {
    "questionId": "u05-s008-v006",
    "skillId": "coordinate-linear-equation-graph",
    "topicId": "u05-linear-graph",
    "difficulty": "standard",
    "text": "下列哪條直線必過原點？",
    "choices": [
      "y = x + 2",
      "y = 3x",
      "x + y = 1",
      "y = 5"
    ],
    "answerIndex": 1,
    "explanation": "y = 3x 在 x=0 時 y=0，過原點。y = x+2 在 x=0 時 y=2。x+y=1 不過原點。y = 5 是水平線，也不過原點。判斷是否過原點，把 (0,0) 帶入方程式即可。二元一次方程式 ax+by=c 的圖形是直線。",
    "steps": [
      "原點 (0,0) 帶入。",
      "y=3x：0=0 成立。",
      "過原點。"
    ],
    "commonMistake": "有 x 項就以為必過原點，水平線是 y 等於常數，垂直線是 x 等於常數，描點時先找截距較快。",
    "concept": "二元一次方程式 ax+by=c 的圖形是直線；常用 x=0 求 y 截距、y=0 求 x 截距來描點"
  },
  {
    "questionId": "u05-s008-v007",
    "skillId": "coordinate-linear-equation-graph",
    "topicId": "u05-linear-graph",
    "difficulty": "standard",
    "text": "3x + 2y = 12 的 x 截距為何？",
    "choices": [
      "6",
      "12",
      "4",
      "2"
    ],
    "answerIndex": 2,
    "explanation": "x 截距：令 y=0，3x=12，x=4。6 來自y 截距 12÷2。12 是常數項。二元一次方程式 ax+by=c 的圖形是直線。常用 x=0 求 y 截距、y=0 求 x 截距來描點。在方程式中令 y = 0，求直線與 x 軸的交點。",
    "steps": [
      "在方程式中令 y = 0，求直線與 x 軸的交點。",
      "3x = 12。",
      "x 截距 4。"
    ],
    "commonMistake": "x 截距與 y 截距搞混，水平線是 y 等於常數，垂直線是 x 等於常數，描點時先找截距較快。",
    "concept": "二元一次方程式 ax+by=c 的圖形是直線；常用 x=0 求 y 截距、y=0 求 x 截距來描點"
  },
  {
    "questionId": "u05-s008-v008",
    "skillId": "coordinate-linear-equation-graph",
    "topicId": "u05-linear-graph",
    "difficulty": "standard",
    "text": "y = 4 的圖形為何？",
    "choices": [
      "平行 y 軸的直線",
      "過原點的直線",
      "拋物線",
      "平行 x 軸的直線"
    ],
    "answerIndex": 3,
    "explanation": "y = 4 表示 y 恒為 4，是平行 x 軸的直線。平行 y 軸是 x = 常數。線上任意點的 y 坐標都是 4。二元一次方程式 ax+by=c 的圖形是直線。常用 x=0 求 y 截距、y=0 求 x 截距來描點。",
    "steps": [
      "y 固定為 4。",
      "x 任意。",
      "平行 x 軸。"
    ],
    "commonMistake": "y=常數說成平行 y 軸，水平線是 y 等於常數，垂直線是 x 等於常數，描點時先找截距較快。",
    "concept": "二元一次方程式 ax+by=c 的圖形是直線；常用 x=0 求 y 截距、y=0 求 x 截距來描點"
  },
  {
    "questionId": "u05-s008-v009",
    "skillId": "coordinate-linear-equation-graph",
    "topicId": "u05-linear-graph",
    "difficulty": "standard",
    "text": "x = -1 的圖形為何？",
    "choices": [
      "平行 y 軸的直線",
      "平行 x 軸的直線",
      "斜線",
      "圓"
    ],
    "answerIndex": 0,
    "explanation": "x = -1 表示 x 恒為 -1，是平行 y 軸的直線。線上任意點的 x 坐標都是 -1。二元一次方程式 ax+by=c 的圖形是直線。常用 x=0 求 y 截距、y=0 求 x 截距來描點。",
    "steps": [
      "x 固定 -1。",
      "y 任意。",
      "平行 y 軸。"
    ],
    "commonMistake": "x=常數說成平行 x 軸，水平線是 y 等於常數，垂直線是 x 等於常數，描點時先找截距較快。",
    "concept": "二元一次方程式 ax+by=c 的圖形是直線；常用 x=0 求 y 截距、y=0 求 x 截距來描點"
  },
  {
    "questionId": "u05-s008-v010",
    "skillId": "coordinate-linear-equation-graph",
    "topicId": "u05-linear-graph",
    "difficulty": "advanced",
    "text": "2x + 4y = 8 化簡後 y 截距？",
    "choices": [
      "4",
      "2",
      "8",
      "1"
    ],
    "answerIndex": 1,
    "explanation": "y 截距：x=0，4y=8，y=2。4 來自 x 截距。8 是原常數未化簡。先化簡再令 x=0 求 y 截距。二元一次方程式 ax+by=c 的圖形是直線。常用 x=0 求 y 截距、y=0 求 x 截距來描點。",
    "steps": [
      "x = 0。",
      "4y = 8。",
      "y 截距 2。"
    ],
    "commonMistake": "未化簡就讀常數 8，水平線是 y 等於常數，垂直線是 x 等於常數，描點時先找截距較快。",
    "concept": "二元一次方程式 ax+by=c 的圖形是直線；常用 x=0 求 y 截距、y=0 求 x 截距來描點"
  },
  {
    "questionId": "u05-s008-v011",
    "skillId": "coordinate-linear-equation-graph",
    "topicId": "u05-linear-graph",
    "difficulty": "advanced",
    "text": "y = x - 3 與 y = -x + 5 的圖形是否相交？",
    "choices": [
      "不會，平行",
      "重合",
      "會，x 的係數不同",
      "無法判斷"
    ],
    "answerIndex": 2,
    "explanation": "y = x - 3 中 x 的係數是 1，y = -x + 5 中 x 的係數是 -1，係數不同表示兩直線方向不一，必交於一點。平行須 x 係數相同且常數項不同。這兩式係數不同所以一定會交會。",
    "steps": [
      "讀 y = x - 3，x 係數 1。",
      "讀 y = -x + 5，x 係數 -1。",
      "係數不同 → 會相交。"
    ],
    "commonMistake": "看到都是一次式就說平行，沒比較 x 的係數。",
    "concept": "二元一次方程式 ax+by=c 的圖形是直線；常用 x=0 求 y 截距、y=0 求 x 截距來描點"
  },
  {
    "questionId": "u05-s008-v012",
    "skillId": "coordinate-linear-equation-graph",
    "topicId": "u05-linear-graph",
    "difficulty": "literacy",
    "text": "直線 x + y = 6 與 x - y = 2 的交點坐標為何？",
    "choices": [
      "(2, 4)",
      "(3, 3)",
      "(6, 0)",
      "(4, 2)"
    ],
    "answerIndex": 3,
    "explanation": "先兩式相加消去 y：2x = 8，x = 4；代入 x + y = 6 得 y = 2，交點 (4, 2)。解聯立方程式時，交點須同時滿足兩式，不可只代一條線。(2, 4) 代進 x − y = 2 得到 −2 ≠ 2；(3, 3) 代進第二式得 0 ≠ 2。",
    "steps": [
      "列 x + y = 6 與 x − y = 2。",
      "兩式相加得 2x = 8，x = 4。",
      "代入得 y = 2，交點 (4, 2)。"
    ],
    "commonMistake": "只解第一式就隨便配 y，交點須同時滿足兩式。",
    "concept": "二元一次方程式 ax+by=c 的圖形是直線；常用 x=0 求 y 截距、y=0 求 x 截距來描點"
  },
  {
    "questionId": "u05-s009-v001",
    "skillId": "coordinate-point-on-line",
    "topicId": "u05-linear-graph",
    "difficulty": "basic",
    "text": "點 (2, 3) 是否在 y = x + 1 上？",
    "choices": [
      "在",
      "不在",
      "無法判斷",
      "只在 x 軸"
    ],
    "answerIndex": 0,
    "explanation": "把 x=2 帶入 y=x+1 得 y=3，與點的 y 坐標相同，所以在直線上。若算成 y=2 就會誤判不在。與 (2,3) 的 y 相同，在線上。帶入 x=2，求出另一未知數。判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上。",
    "steps": [
      "帶入 x=2，求出另一未知數，求出另一未知數。",
      "y 為 3。",
      "與 (2,3) 的 y 相同，在線上。"
    ],
    "commonMistake": "只比 x 不比 y，將坐標帶入方程式，兩邊相等則在線上。",
    "concept": "判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上"
  },
  {
    "questionId": "u05-s009-v002",
    "skillId": "coordinate-point-on-line",
    "topicId": "u05-linear-graph",
    "difficulty": "basic",
    "text": "點 (3, 1) 是否在 2x + y = 6 上？",
    "choices": [
      "在",
      "不在",
      "在 y 軸",
      "在原點"
    ],
    "answerIndex": 1,
    "explanation": "左邊 2×3+1=7 ≠ 6，等式不成立，所以不在直線上。7≠6，不在線上。「在」可能是 2+3 算成 5 而非 7。帶入 x=3,y=1，求出另一未知數。判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上。",
    "steps": [
      "帶入 x=3,y=1，求出另一未知數，求出另一未知數。",
      "2×3+1=7。",
      "7≠6，不在線上。"
    ],
    "commonMistake": "帶入只算一項，將坐標帶入方程式，兩邊相等則在線上。",
    "concept": "判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上"
  },
  {
    "questionId": "u05-s009-v003",
    "skillId": "coordinate-point-on-line",
    "topicId": "u05-linear-graph",
    "difficulty": "basic",
    "text": "直線 y = 2x - 1 上，x = 4 時的點坐標？",
    "choices": [
      "(4, 8)",
      "(7, 4)",
      "(4, 7)",
      "(4, -1)"
    ],
    "answerIndex": 2,
    "explanation": "x=4 時 y=2×4-1=7，點為 (4,7)。(4,8) 是 2×4 忘減 1。(7,4) 是 x、y 對調。(7, 4) 與 (4, 7) 數字相同但 x、y 對調，位置不同。寫成 (4, 8) 時，y 應是 7 而不是 8。寫成 (4, -1) 時，y 應是 7 而不是 -1。判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上。",
    "steps": [
      "x=4 帶入 y=2x-1。",
      "y=7。",
      "點 (4,7)。"
    ],
    "commonMistake": "只算 2×4 忘減常數，將坐標帶入方程式，兩邊相等則在線上。",
    "concept": "判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上"
  },
  {
    "questionId": "u05-s009-v004",
    "skillId": "coordinate-point-on-line",
    "topicId": "u05-linear-graph",
    "difficulty": "basic",
    "text": "下列哪一點在 x + y = 5 上？",
    "choices": [
      "(1, 1)",
      "(5, 5)",
      "(0, 0)",
      "(2, 3)"
    ],
    "answerIndex": 3,
    "explanation": "(2,3)：2+3=5 成立。逐點檢查 x+y。在直線上。等式兩邊相等，表示該點在直線上。帶入 (1, 1) 後等式不成立。帶入 (5, 5) 後等式不成立。判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上。",
    "steps": [
      "逐點檢查 x+y。",
      "(2,3)：2+3=5。",
      "等式兩邊相等，表示該點在直線上。"
    ],
    "commonMistake": "只看 x 或只看 y，將坐標帶入方程式，兩邊相等則在線上。",
    "concept": "判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上"
  },
  {
    "questionId": "u05-s009-v005",
    "skillId": "coordinate-point-on-line",
    "topicId": "u05-linear-graph",
    "difficulty": "standard",
    "text": "點 (0, -2) 是否在 y = 3x - 2 上？",
    "choices": [
      "在",
      "不在",
      "在 x 軸",
      "在 y 軸"
    ],
    "answerIndex": 0,
    "explanation": "x=0 時右式 3×0-2=-2，與 y=-2 相同，所以在線上。選不在是常數項符號看錯。與給定 y 相同，在線上。把 x = 0 帶入方程式，求 y 的值。判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上。",
    "steps": [
      "把 x = 0 帶入方程式，求 y 的值。",
      "y=3×0-2=-2。",
      "與給定 y 相同，在線上。"
    ],
    "commonMistake": "x=0 時仍用 x 係數乘錯，將坐標帶入方程式，兩邊相等則在線上。",
    "concept": "判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上"
  },
  {
    "questionId": "u05-s009-v006",
    "skillId": "coordinate-point-on-line",
    "topicId": "u05-linear-graph",
    "difficulty": "standard",
    "text": "k 為何值時 (2, k) 在 y = x + 3 上？",
    "choices": [
      "3",
      "5",
      "2",
      "1"
    ],
    "answerIndex": 1,
    "explanation": "x=2 時 y=2+3=5，所以 k=5。把已知 x 代入直線式 y=x+3 可求 y 坐標。3 是直接抄常數項；2 是把 x 坐標當答案。未知數 k 要由方程式解出，把 x=2 代入後即可得 k = 5。",
    "steps": [
      "x=2 帶入 y=x+3。",
      "y=5。",
      "由帶入結果得 k = 5。"
    ],
    "commonMistake": "k 取成 x 或常數項，將坐標帶入方程式，兩邊相等則在線上。",
    "concept": "判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上"
  },
  {
    "questionId": "u05-s009-v007",
    "skillId": "coordinate-point-on-line",
    "topicId": "u05-linear-graph",
    "difficulty": "standard",
    "text": "點 (-1, 4) 是否在 y = -2x + 2 上？",
    "choices": [
      "不在",
      "在原點",
      "在",
      "在 y 軸"
    ],
    "answerIndex": 2,
    "explanation": "右式 -2×(-1)+2=4，與 y=4 相同，所以在線上。選不在是負號運算錯誤。判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上。",
    "steps": [
      "x=-1 帶入。",
      "-2×(-1)+2=4。",
      "y=4，在線上。"
    ],
    "commonMistake": "-2×(-1) 算成 -2，將坐標帶入方程式，兩邊相等則在線上。",
    "concept": "判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上"
  },
  {
    "questionId": "u05-s009-v008",
    "skillId": "coordinate-point-on-line",
    "topicId": "u05-linear-graph",
    "difficulty": "standard",
    "text": "直線 3x - y = 6 上，y = 0 時的 x 為何？",
    "choices": [
      "3",
      "6",
      "0",
      "2"
    ],
    "answerIndex": 3,
    "explanation": "y=0 時 3x=6，x=2，點 (2,0) 在線上。令 y = 0 可求直線與 x 軸交點的 x 坐標。6 是直接抄常數；3 是 6÷2 算錯。交點坐標要同時滿足方程式，把 y=0 代入後即可得 x = 2。",
    "steps": [
      "在方程式中令 y = 0，求直線與 x 軸的交點。",
      "3x=6。",
      "x=2。"
    ],
    "commonMistake": "y=0 時 x 也寫 0，將坐標帶入方程式，兩邊相等則在線上。",
    "concept": "判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上"
  },
  {
    "questionId": "u05-s009-v009",
    "skillId": "coordinate-point-on-line",
    "topicId": "u05-linear-graph",
    "difficulty": "standard",
    "text": "下列哪一點不在 y = 5 上？",
    "choices": [
      "(2, 4)",
      "(0, 5)",
      "(3, 5)",
      "(-1, 5)"
    ],
    "answerIndex": 0,
    "explanation": "y=5 上所有點 y 坐標必為 5。(2,4) 的 y=4≠5，不在線上。其餘 y 皆為 5。檢查各點 y。帶入 (0, 5) 後等式不成立。帶入 (3, 5) 後等式不成立。判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上。",
    "steps": [
      "y=5 表示 y 恒 5。",
      "檢查各點 y。",
      "(2,4) 的 y=4 不符。"
    ],
    "commonMistake": "水平線只看 x，將坐標帶入方程式，兩邊相等則在線上。",
    "concept": "判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上"
  },
  {
    "questionId": "u05-s009-v010",
    "skillId": "coordinate-point-on-line",
    "topicId": "u05-linear-graph",
    "difficulty": "advanced",
    "text": "點 (a, 3) 在 2x + y = 9 上，a 為何？",
    "choices": [
      "6",
      "3",
      "9",
      "2"
    ],
    "answerIndex": 1,
    "explanation": "點 (a, 3) 在 2x+y=9 上，把 y=3 代入後 2a+3=9，整理成 2a=6，所以 a=3。6 是移項後的中間結果，不是 a。9 是等式右邊常數，不是未知數 a。把已知 y 代入一次方程式，可解出 a = 3。",
    "steps": [
      "y=3 帶入。",
      "2a+3=9。",
      "a=3。"
    ],
    "commonMistake": "a 直接寫成右式 9，將坐標帶入方程式，兩邊相等則在線上。",
    "concept": "判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上"
  },
  {
    "questionId": "u05-s009-v011",
    "skillId": "coordinate-point-on-line",
    "topicId": "u05-linear-graph",
    "difficulty": "advanced",
    "text": "若 (1, b) 與 (3, 7) 都在 y = 2x + 1 上，b 為何？",
    "choices": [
      "5",
      "7",
      "3",
      "1"
    ],
    "answerIndex": 2,
    "explanation": "x=1 時 y=2×1+1=3，所以 b=3。代回 (3,7) 後 2×3+1=7 也成立，表示第二點也在同一條線上。5 是常數項加錯；7 是直接抄 y 坐標。兩點都在 y=2x+1 上，用 x=1 這組條件可求出 b 的值為 3。",
    "steps": [
      "x=1 帶入 y=2x+1。",
      "b=3。",
      "代回 (3,7) 得 7，成立。"
    ],
    "commonMistake": "b 取成 7 因看到 7，將坐標帶入方程式，兩邊相等則在線上。",
    "concept": "判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上"
  },
  {
    "questionId": "u05-s009-v012",
    "skillId": "coordinate-point-on-line",
    "topicId": "u05-linear-graph",
    "difficulty": "literacy",
    "text": "判斷點是否在直線上的第一步為何？",
    "choices": [
      "先畫坐標平面",
      "先比 x 係數",
      "先求截距",
      "將 x、y 帶入方程式"
    ],
    "answerIndex": 3,
    "explanation": "要檢查某點在不在給定直線上，應先把該點的 x、y 帶入方程式看等式是否成立，例如直線 x + y = 5，點 (2, 3) 帶入得 2 + 3 = 5 成立即在線上。先畫圖或先求截距都不能直接回答「這一點在不在線上」。",
    "steps": [
      "讀點的坐標。",
      "帶入直線方程式，求出另一未知數。",
      "檢查等式是否成立。"
    ],
    "commonMistake": "未帶入坐標就憑圖形印象判斷在不在線上。",
    "concept": "判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上"
  }
];

export const U05_LECTURES_S007_S009 = [
  {
    "skillId": "coordinate-rectangle-area",
    "topicId": "u05-coordinate-ops",
    "title": "坐標平面上的長方形面積",
    "concept": "邊平行坐標軸的長方形，可用頂點坐標求寬高：水平邊長為 x 坐標差的絕對值，鉛直邊長為 y 坐標差的絕對值，面積 = 寬 × 高。先確認四點確實圍成長方形（兩組平行邊），再分別算寬高，不要把坐標值直接相乘。",
    "formula": "面積 = |x2-x1| × |y2-y1|",
    "stepGuide": [
      "確認邊平行坐標軸。",
      "算水平寬 |x 差|。",
      "算鉛直高 |y 差|。",
      "寬×高得面積。",
      "含負坐標用絕對值。"
    ],
    "examples": [
      {
        "question": "(0,0)(3,0)(3,4)(0,4) 面積？",
        "explanation": "寬 3、高 4，面積 12。不要算成 3+4=7，那是半周長概念不是面積。練習時先方向、後數字，寫成有序數對。寬高取坐標差絕對值，面積 = 寬 × 高。"
      },
      {
        "question": "x 從 -2 到 1，y 從 0 到 3？",
        "explanation": "寬 |1-(-2)|=3，高 3，面積 9。x 含負數時寬仍用絕對值差。練習時先方向、後數字，寫成有序數對。寬高取坐標差絕對值，面積 = 寬 × 高。"
      }
    ],
    "commonMistakes": [
      "面積用周長",
      "寬高相加",
      "坐標值直接乘",
      "負坐標不算絕對值"
    ]
  },
  {
    "skillId": "coordinate-linear-equation-graph",
    "topicId": "u05-linear-graph",
    "title": "二元一次方程式圖形",
    "concept": "二元一次方程式 ax+by=c 的圖形是直線。描點常用截距法：令 x=0 得 y 截距，令 y=0 得 x 截距。y=常數 是平行 x 軸的直線，x=常數 是平行 y 軸的直線。x 的係數 k 表示 x 每增 1 時 y 的變化量，k>0 向右上，k<0 向右下。 y 等於常數是水平線，x 等於常數是垂直線；截距法可快速描出直線。",
    "formula": "ax + by = c → 直線；y = 常數 → 水平線；x = 常數 → 垂直線",
    "stepGuide": [
      "確認是一次方程式。",
      "令 x=0 求 y 截距。",
      "令 y=0 求 x 截距。",
      "兩點連線。",
      "判平行 y 軸：x=常數。"
    ],
    "examples": [
      {
        "question": "x+y=5 的兩截距？",
        "explanation": "x=0 得 y=5。y=0 得 x=5。兩截距分別是 (0,5) 與 (5,0)，不要寫成截距都是 5 而忽略在哪條軸。練習時先方向、後數字，寫成有序數對。令 x=0 或 y=0 可求截距。"
      },
      {
        "question": "y=-x 過原點嗎？",
        "explanation": "x=0 時 y=0，帶入成立，過原點。係數 -1 只表x 的係數，不影響是否過原點。練習時先方向、後數字，寫成有序數對。令 x=0 或 y=0 可求截距。"
      }
    ],
    "commonMistakes": [
      "一次式圖形非直線",
      "x/y 截距搞混",
      "y=常數平行 y 軸",
      "x 的係數正負看反"
    ]
  },
  {
    "skillId": "coordinate-point-on-line",
    "topicId": "u05-linear-graph",
    "title": "點在直線上的判斷",
    "concept": "要判斷點 (x₀, y₀) 是否在直線 ax+by=c 上，把 x₀、y₀ 帶入方程式，若左邊等於右邊則在線上，否則不在。已知 x 求 y 或已知 y 求 x 也是同一原理。會考常給參數 a、b、k，先帶入再解一次方程式。 帶入時 x、y 順序不可對調；同一條直線上可有無限多組解。",
    "formula": "點 (x₀,y₀) 在線上 ⟺ 帶入後等式成立",
    "stepGuide": [
      "讀點坐標。",
      "帶入方程式左邊。",
      "計算是否等於右邊。",
      "相等 → 在線上。",
      "不等 → 不在。"
    ],
    "examples": [
      {
        "question": "(2,1) 在 x-y=1 上嗎？",
        "explanation": "2-1=1 成立，所以在線上。若只檢查 x=2 就下結論，可能忽略 y 也要符合。練習時先方向、後數字，寫成有序數對。把 x、y 帶入方程式，看等式是否成立。"
      },
      {
        "question": "(0,k) 在 y=2x+3 上，k=?",
        "explanation": "x=0 時 y=3，所以 k=3。不要寫 k=0 因為 x 為 0。練習時先方向、後數字，寫成有序數對。逐步寫出 x、y 的變化，再檢查正負。把 x、y 帶入方程式，看等式是否成立。"
      }
    ],
    "commonMistakes": [
      "只帶 x 不帶 y",
      "符號運算錯",
      "未驗證就猜",
      "參數與坐標混淆"
    ]
  }
];
