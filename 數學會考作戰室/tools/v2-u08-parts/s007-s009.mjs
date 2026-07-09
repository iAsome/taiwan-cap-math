export const U08_PART_S007_S009 = [
  {
    "questionId": "u08-s007-v001",
    "skillId": "polygon-angle-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "n 邊形內角和公式？",
    "choices": [
      "(n-2)×180",
      "n×180",
      "n×90",
      "(n-1)×180"
    ],
    "answerIndex": 0,
    "explanation": "n 邊形內角和為 (n−2)×180 度。n×180 多算一圈；n×90 沒依邊數調整；(n−1)×180 則少減一個三角形。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "從一個頂點出發畫對角線，可分割成 n−2 個三角形。",
      "每個三角形內角和 180 度。",
      "n 邊形內角和公式為 (n−2)×180。"
    ],
    "commonMistake": "直接寫 n×180，沒有減去 2 個三角形的 360 度。",
    "concept": "多邊形內角和公式與外角和三百六十度，能求正多邊形單內角或邊數。"
  },
  {
    "questionId": "u08-s007-v002",
    "skillId": "polygon-angle-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "六邊形內角和？",
    "choices": [
      "540",
      "720",
      "360",
      "900"
    ],
    "answerIndex": 1,
    "explanation": "(6−2)×180=720 度。540 是五邊形；360 是四邊形或外角和；900 則公式用錯。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "六邊形 n=6。",
      "代入 (n−2)×180。",
      "(6−2)×180=720 度。"
    ],
    "commonMistake": "邊數帶錯，用五邊形的 540 度去答。",
    "concept": "多邊形內角和公式與外角和三百六十度，能求正多邊形單內角或邊數。"
  },
  {
    "questionId": "u08-s007-v003",
    "skillId": "polygon-angle-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "正五邊形每內角？",
    "choices": [
      "120",
      "90",
      "108",
      "72"
    ],
    "answerIndex": 2,
    "explanation": "五邊形內角和 540 度，每內角=540÷5=108 度。120 是六邊形；90 是正方形；72 是外角。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "正五邊形 n=5，內角和 (5−2)×180=540。",
      "五個內角相等，各分 540 度。",
      "每內角 108 度。"
    ],
    "commonMistake": "內角和算對卻忘了除以 5，沒有求出單一內角度數。",
    "concept": "多邊形內角和公式與外角和三百六十度，能求正多邊形單內角或邊數。"
  },
  {
    "questionId": "u08-s007-v004",
    "skillId": "polygon-angle-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "多邊形外角和恆？",
    "choices": [
      "180",
      "540",
      "依邊數變",
      "360"
    ],
    "answerIndex": 3,
    "explanation": "任意多邊形外角和恆為 360 度，與邊數無關。180 是平角；540 無此定理；依邊數變則誤解外角和性質。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "沿多邊形外角走一圈。",
      "轉過的總角度固定。",
      "多邊形外角和恆 360 度。"
    ],
    "commonMistake": "以為外角和會隨邊數改變，其實任意凸多邊形外角和恆為 360 度。",
    "concept": "多邊形內角和公式與外角和三百六十度，能求正多邊形單內角或邊數。"
  },
  {
    "questionId": "u08-s007-v005",
    "skillId": "polygon-angle-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "正六邊形每外角？",
    "choices": [
      "60",
      "120",
      "90",
      "72"
    ],
    "answerIndex": 0,
    "explanation": "正六邊形外角和 360 度，每外角=360÷6=60 度。120 是內角；90、72 則邊數或內外角搞混。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "正六邊形有 6 個外角。",
      "外角和恆 360 度。",
      "每外角 360÷6=60 度。"
    ],
    "commonMistake": "把內角度數當外角，或外角和沒除以 6。",
    "concept": "多邊形內角和公式與外角和三百六十度，能求正多邊形單內角或邊數。"
  },
  {
    "questionId": "u08-s007-v006",
    "skillId": "polygon-angle-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "正 n 邊形內角 150 度，n 為何？",
    "choices": [
      "10",
      "12",
      "8",
      "6"
    ],
    "answerIndex": 1,
    "explanation": "每內角 150 度，每外角 30 度，n=360÷30=12。10、8、6 則內外角換算錯誤。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "內角 150 度，外角=180−150=30 度。",
      "正 n 邊形外角和 360 度。",
      "n=360÷30=12。"
    ],
    "commonMistake": "沒先換算外角，直接用內角去除 360。",
    "concept": "多邊形內角和公式與外角和三百六十度，能求正多邊形單內角或邊數。"
  },
  {
    "questionId": "u08-s007-v007",
    "skillId": "polygon-angle-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "八邊形內角和？",
    "choices": [
      "720",
      "900",
      "1080",
      "1260"
    ],
    "answerIndex": 2,
    "explanation": "八邊形共有八個內角，內角和公式為 (n−2)×180 度，代入 n=8 得 (8−2)×180=1080 度。720 是六邊形內角和；900 是五邊形內角和；1260 則邊數帶錯，把公式用錯邊數。",
    "steps": [
      "八邊形 n=8。",
      "代入 (n−2)×180。",
      "(8−2)×180=1080 度。"
    ],
    "commonMistake": "邊數與內角和對照表記錯，把八邊形內角和當成 720 度。",
    "concept": "多邊形內角和公式與外角和三百六十度，能求正多邊形單內角或邊數。"
  },
  {
    "questionId": "u08-s007-v008",
    "skillId": "polygon-angle-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "正三角形每外角？",
    "choices": [
      "60",
      "90",
      "180",
      "120"
    ],
    "answerIndex": 3,
    "explanation": "正三角形外角和 360 度，每外角=360÷3=120 度。60 是內角；90、180 則內外角混淆。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "正三角形 n=3。",
      "外角和 360 度平分給三個外角。",
      "每外角 120 度。"
    ],
    "commonMistake": "把正三角形 60 度內角誤當外角。",
    "concept": "多邊形內角和公式與外角和三百六十度，能求正多邊形單內角或邊數。"
  },
  {
    "questionId": "u08-s007-v009",
    "skillId": "polygon-angle-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "內角和 900 度的多邊形幾邊？",
    "choices": [
      "7",
      "6",
      "8",
      "5"
    ],
    "answerIndex": 0,
    "explanation": "設多邊形邊數為 n，內角和 900=(n−2)×180，兩邊同除以 180 得 n−2=5，再加 2 得 n=7 邊，所以內角和 900 度的是七邊形。6、8、5 則反推邊數時計算錯誤，忘了加回二。",
    "steps": [
      "設內角和 900=(n−2)×180。",
      "n−2=900÷180=5。",
      "n=5+2=7 邊。"
    ],
    "commonMistake": "反推時忘了加回 2，直接把 5 當邊數。",
    "concept": "多邊形內角和公式與外角和三百六十度，能求正多邊形單內角或邊數。"
  },
  {
    "questionId": "u08-s007-v010",
    "skillId": "polygon-angle-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "advanced",
    "text": "正四邊形內角與外角和？",
    "choices": [
      "180",
      "90",
      "360",
      "270"
    ],
    "answerIndex": 1,
    "explanation": "正四邊形每內角 90 度，每外角也是 90 度，題目所求為 90。180 是同頂點內外角互補和；360 是全部外角和；270 則計算錯誤。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "正四邊形每內角 (4−2)×180÷4=90 度。",
      "每外角 360÷4=90 度。",
      "內角與外角各為 90 度。"
    ],
    "commonMistake": "把同頂點內外角互補的 180 度誤當成單角度數。",
    "concept": "多邊形內角和公式與外角和三百六十度，能求正多邊形單內角或邊數。"
  },
  {
    "questionId": "u08-s007-v011",
    "skillId": "polygon-angle-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "advanced",
    "text": "十邊形內角和？",
    "choices": [
      "1260",
      "1080",
      "1440",
      "1620"
    ],
    "answerIndex": 2,
    "explanation": "十邊形共有十個內角，代入內角和公式 (n−2)×180，得 (10−2)×180=1440 度。1260 是九邊形內角和；1080 是八邊形內角和；1620 則邊數帶錯，把公式中的 n 代錯了。",
    "steps": [
      "十邊形 n=10。",
      "代入 (n−2)×180。",
      "(10−2)×180=1440 度。"
    ],
    "commonMistake": "邊數對照內角和時少算或多算一層。",
    "concept": "多邊形內角和公式與外角和三百六十度，能求正多邊形單內角或邊數。"
  },
  {
    "questionId": "u08-s007-v012",
    "skillId": "polygon-angle-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "literacy",
    "text": "正多邊形內角愈大，邊數通常？",
    "choices": [
      "愈少",
      "不變",
      "變 0",
      "愈多"
    ],
    "answerIndex": 3,
    "explanation": "內角愈大表示形狀愈接近平角，邊數通常愈多。愈少則內角較小；不變或變 0 都不合理。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "比較正三角形、正方形、正六邊形的內角大小。",
      "邊數增加時，每內角也變大。",
      "正多邊形內角愈大，邊數通常愈多。"
    ],
    "commonMistake": "以為邊數愈多內角愈小，方向搞反。",
    "concept": "多邊形內角和公式與外角和三百六十度，能求正多邊形單內角或邊數。"
  },
  {
    "questionId": "u08-s008-v001",
    "skillId": "perimeter-area-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "長 8 寬 5 長方形面積？",
    "choices": [
      "40",
      "26",
      "13",
      "80"
    ],
    "answerIndex": 0,
    "explanation": "長方形面積=長×寬=8×5=40。26 是周長；13 是半周長；80 則只乘長沒乘寬。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "長方形面積公式為長乘寬。",
      "代入長 8、寬 5。",
      "面積=8×5=40。"
    ],
    "commonMistake": "把面積公式與周長公式搞混。",
    "concept": "長方形、正方形、三角形、平行四邊形、梯形的周長與面積基本公式。"
  },
  {
    "questionId": "u08-s008-v002",
    "skillId": "perimeter-area-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "邊長 6 正方形周長？",
    "choices": [
      "36",
      "24",
      "12",
      "18"
    ],
    "answerIndex": 1,
    "explanation": "正方形周長=4×邊長=4×6=24。36 是面積；12 是兩條邊；18 則只乘 3。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "正方形四邊等長。",
      "周長為四邊相加。",
      "周長=4×6=24。"
    ],
    "commonMistake": "把周長當面積，用邊長平方去算。",
    "concept": "長方形、正方形、三角形、平行四邊形、梯形的周長與面積基本公式。"
  },
  {
    "questionId": "u08-s008-v003",
    "skillId": "perimeter-area-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "底 10 高 4 三角形面積？",
    "choices": [
      "40",
      "14",
      "20",
      "28"
    ],
    "answerIndex": 2,
    "explanation": "三角形面積=底×高÷2=10×4÷2=20。40 是忘記除以 2；14 是周長概念；28 則乘除順序錯。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "三角形面積需底與對應高。",
      "代入底 10、高 4。",
      "面積=10×4÷2=20。"
    ],
    "commonMistake": "算三角形面積時忘了除以 2，把底乘高的結果當成最終面積。",
    "concept": "長方形、正方形、三角形、平行四邊形、梯形的周長與面積基本公式。"
  },
  {
    "questionId": "u08-s008-v004",
    "skillId": "perimeter-area-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "底 7 高 6 平行四邊形面積？",
    "choices": [
      "21",
      "13",
      "84",
      "42"
    ],
    "answerIndex": 3,
    "explanation": "平行四邊形面積=底×高=7×6=42。21 是除以 2 多餘；13 是周長；84 則高帶錯。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "平行四邊形面積為底乘高。",
      "高必須垂直於底。",
      "面積=7×6=42。"
    ],
    "commonMistake": "把平行四邊形面積誤套三角形公式除以 2。",
    "concept": "長方形、正方形、三角形、平行四邊形、梯形的周長與面積基本公式。"
  },
  {
    "questionId": "u08-s008-v005",
    "skillId": "perimeter-area-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "上底 5 下底 9 高 4 梯形面積？",
    "choices": [
      "28",
      "56",
      "18",
      "36"
    ],
    "answerIndex": 0,
    "explanation": "梯形面積=(上底+下底)×高÷2=(5+9)×4÷2=28。56 是忘除以 2；18 只加一底；36 則高帶錯。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "梯形面積先算上底加下底。",
      "(5+9)=14。",
      "面積=14×4÷2=28。"
    ],
    "commonMistake": "梯形面積忘了除以 2，或只取一個底乘高。",
    "concept": "長方形、正方形、三角形、平行四邊形、梯形的周長與面積基本公式。"
  },
  {
    "questionId": "u08-s008-v006",
    "skillId": "perimeter-area-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "上底 4 下底 10 高 5 梯形面積？",
    "choices": [
      "70",
      "35",
      "14",
      "50"
    ],
    "answerIndex": 1,
    "explanation": "梯形面積=(4+10)×5÷2=35。70 是忘除以 2；14 只加一底；50 則漏加下底。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "上底 4 加下底 10 得 14。",
      "乘以高 5 得 70。",
      "再除以 2 得 35。"
    ],
    "commonMistake": "兩底相加後忘了除以 2，梯形面積公式少做最後一步。",
    "concept": "長方形、正方形、三角形、平行四邊形、梯形的周長與面積基本公式。"
  },
  {
    "questionId": "u08-s008-v007",
    "skillId": "perimeter-area-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "底 8 高 5 平行四邊形，四邊長為 8、8、5、5，周長？",
    "choices": [
      "40",
      "13",
      "26",
      "16"
    ],
    "answerIndex": 2,
    "explanation": "周長是四邊長度相加，8+8+5+5=26。40 是面積；13 只加兩邊；16 則只算一組對邊。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "周長與面積不同，周長看邊長。",
      "四邊分別為 8、8、5、5。",
      "周長=8+8+5+5=26。"
    ],
    "commonMistake": "題目給了底和高，就誤用面積公式算周長。",
    "concept": "長方形、正方形、三角形、平行四邊形、梯形的周長與面積基本公式。"
  },
  {
    "questionId": "u08-s008-v008",
    "skillId": "perimeter-area-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "長 12 寬 3 長方形周長？",
    "choices": [
      "36",
      "15",
      "24",
      "30"
    ],
    "answerIndex": 3,
    "explanation": "長方形周長=2×(長+寬)=2×(12+3)=30。36 是面積；15 只加長寬一次；24 則漏加倍。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "長方形周長為四邊總和。",
      "也可寫成 2×(長+寬)。",
      "周長=2×(12+3)=30。"
    ],
    "commonMistake": "把周長當面積，用長乘寬計算。",
    "concept": "長方形、正方形、三角形、平行四邊形、梯形的周長與面積基本公式。"
  },
  {
    "questionId": "u08-s008-v009",
    "skillId": "perimeter-area-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "底 8 高 8 等腰直角三角形面積？",
    "choices": [
      "32",
      "64",
      "16",
      "48"
    ],
    "answerIndex": 0,
    "explanation": "等腰直角三角形面積=底×高÷2=8×8÷2=32。64 是忘除以 2；16 則只算一半的高；48 計算錯誤。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "等腰直角三角形兩直角邊可當底和高。",
      "底 8、高 8。",
      "面積=8×8÷2=32。"
    ],
    "commonMistake": "直角三角形面積忘了除以 2，底乘高後應再取一半。",
    "concept": "長方形、正方形、三角形、平行四邊形、梯形的周長與面積基本公式。"
  },
  {
    "questionId": "u08-s008-v010",
    "skillId": "perimeter-area-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "advanced",
    "text": "邊長 10 正方形面積？",
    "choices": [
      "40",
      "100",
      "20",
      "50"
    ],
    "answerIndex": 1,
    "explanation": "正方形面積=邊長×邊長=10×10=100。40 是周長；20 只乘 2；50 則公式用錯。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "正方形面積為邊長的平方。",
      "代入邊長 10。",
      "面積=10×10=100。"
    ],
    "commonMistake": "把正方形面積當周長，用 4 倍邊長計算。",
    "concept": "長方形、正方形、三角形、平行四邊形、梯形的周長與面積基本公式。"
  },
  {
    "questionId": "u08-s008-v011",
    "skillId": "perimeter-area-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "advanced",
    "text": "長 15 寬 8 長方形周長？",
    "choices": [
      "120",
      "23",
      "46",
      "30"
    ],
    "answerIndex": 2,
    "explanation": "周長=2×(15+8)=46。120 是面積；23 只加長寬一次；30 則數字帶錯。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "長方形周長為 2×(長+寬)。",
      "15+8=23。",
      "周長=2×23=46。"
    ],
    "commonMistake": "周長只加長寬一次，忘了乘 2，長方形周長應為兩倍長加寬。",
    "concept": "長方形、正方形、三角形、平行四邊形、梯形的周長與面積基本公式。"
  },
  {
    "questionId": "u08-s008-v012",
    "skillId": "perimeter-area-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "literacy",
    "text": "底 6 高 5 與底 10 高 3 兩平行四邊形面積和？",
    "choices": [
      "30",
      "45",
      "90",
      "60"
    ],
    "answerIndex": 3,
    "explanation": "第一個面積 6×5=30，第二個 10×3=30，合計 60。30 只算一個；45、90 則其中一個算錯。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "分別算兩個平行四邊形面積。",
      "6×5=30，10×3=30。",
      "面積和=30+30=60。"
    ],
    "commonMistake": "只算一個圖形面積，忘了加第二個。",
    "concept": "長方形、正方形、三角形、平行四邊形、梯形的周長與面積基本公式。"
  },
  {
    "questionId": "u08-s009-v001",
    "skillId": "composite-area-text",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "長方形長 10 切掉右上角長 3 寬 2 小長方形，原面積 50，剩餘面積？",
    "choices": [
      "44",
      "46",
      "40",
      "6"
    ],
    "answerIndex": 0,
    "explanation": "原面積 50，切掉右上角 3×2=6，剩餘 50−6=44。46 少扣一點；40 多扣；6 只算切掉部分。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "原長方形面積已知為 50。",
      "切掉部分面積=3×2=6。",
      "剩餘面積=50−6=44。"
    ],
    "commonMistake": "只算切掉的小長方形面積，沒從原面積扣除。",
    "concept": "用文字描述分割或補成基本圖形，求組合圖形面積或周長。"
  },
  {
    "questionId": "u08-s009-v002",
    "skillId": "composite-area-text",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "L 形由 6×4 與 2×3 兩長方形組成，總面積？",
    "choices": [
      "24",
      "30",
      "18",
      "36"
    ],
    "answerIndex": 1,
    "explanation": "兩塊面積相加，6×4=24 加 2×3=6，總面積 30。24 只算大塊；18、36 則其中一塊算錯。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "L 形可拆成 6×4 與 2×3 兩長方形。",
      "分別算 24 與 6。",
      "總面積=24+6=30。"
    ],
    "commonMistake": "只看到最大外框，漏算突出的小長方形。",
    "concept": "用文字描述分割或補成基本圖形，求組合圖形面積或周長。"
  },
  {
    "questionId": "u08-s009-v003",
    "skillId": "composite-area-text",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "邊長 8 正方形中央挖邊 2 小正方形洞，面積？",
    "choices": [
      "64",
      "4",
      "60",
      "56"
    ],
    "answerIndex": 2,
    "explanation": "原正方形 8×8=64，挖洞 2×2=4，剩餘 64−4=60。64 忘扣洞；4 只算洞；56 則洞邊長帶錯。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "先算整個正方形面積 8×8=64。",
      "中央挖掉 2×2=4。",
      "剩餘面積=64−4=60。"
    ],
    "commonMistake": "只算外框面積，忘記扣除中央挖洞。",
    "concept": "用文字描述分割或補成基本圖形，求組合圖形面積或周長。"
  },
  {
    "questionId": "u08-s009-v004",
    "skillId": "composite-area-text",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "梯形上底 4 下底 8 高 5，旁貼底 4 高 5 矩形，總面積？",
    "choices": [
      "30",
      "20",
      "40",
      "50"
    ],
    "answerIndex": 3,
    "explanation": "梯形面積=(4+8)×5÷2=30，矩形 4×5=20，合計 50。30 只算梯形；20 只算矩形；40 則其中一塊錯。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "梯形面積=(4+8)×5÷2=30。",
      "旁貼矩形面積=4×5=20。",
      "總面積=30+20=50。"
    ],
    "commonMistake": "複合圖形只算其中一塊，漏加另一塊。",
    "concept": "用文字描述分割或補成基本圖形，求組合圖形面積或周長。"
  },
  {
    "questionId": "u08-s009-v005",
    "skillId": "composite-area-text",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "長 6 寬 3 長方形上方接底 6 高 4 三角形，總面積？",
    "choices": [
      "30",
      "18",
      "12",
      "42"
    ],
    "answerIndex": 0,
    "explanation": "長方形 6×3=18，三角形 6×4÷2=12，合計 30。18 只算長方形；12 只算三角形；42 則加法錯。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "下方長方形面積=6×3=18。",
      "上方三角形面積=6×4÷2=12。",
      "總面積=18+12=30。"
    ],
    "commonMistake": "複合圖形只算長方形或只算三角形其中一塊。",
    "concept": "用文字描述分割或補成基本圖形，求組合圖形面積或周長。"
  },
  {
    "questionId": "u08-s009-v006",
    "skillId": "composite-area-text",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "周長 20 正方形，四角各切去邊 1 小正方形，周長變化？",
    "choices": [
      "變 16",
      "不變仍 20",
      "變 24",
      "變 4"
    ],
    "answerIndex": 1,
    "explanation": "每角切去小正方形後，切掉的邊由新邊補回，周長不變仍 20。16 以為變短；24 以為變長；4 則只算切角數量。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "正方形原周長 20。",
      "每角切去邊 1 的小正方形，凹進去的邊會補回外圍。",
      "周長不變仍 20。"
    ],
    "commonMistake": "以為切角會縮短周長，沒注意凹邊補回外框。",
    "concept": "用文字描述分割或補成基本圖形，求組合圖形面積或周長。"
  },
  {
    "questionId": "u08-s009-v007",
    "skillId": "composite-area-text",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "長 12 寬 8 長方形去中央 4×3 長方形，面積？",
    "choices": [
      "96",
      "12",
      "84",
      "88"
    ],
    "answerIndex": 2,
    "explanation": "原長方形面積是 12×8=96，中央挖掉的長方形面積是 4×3=12，所以剩下 96−12=84。96 是忘記扣掉挖空部分；12 則只算被挖掉的小長方形。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "先算整個長方形面積：12×8=96。",
      "再算挖掉部分：4×3=12。",
      "剩下面積為 96−12=84。"
    ],
    "commonMistake": "只算外框面積，忘記把中央挖掉的部分扣除。",
    "concept": "用文字描述分割或補成基本圖形，求組合圖形面積或周長。"
  },
  {
    "questionId": "u08-s009-v008",
    "skillId": "composite-area-text",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "底 10 高 6 三角形上疊底 4 高 3 小三角，總面積？",
    "choices": [
      "30",
      "6",
      "42",
      "36"
    ],
    "answerIndex": 3,
    "explanation": "大三角形 10×6÷2=30，小三角形 4×3÷2=6，合計 36。30 只算大的；6 只算小的；42 則加法錯。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "大三角形面積=10×6÷2=30。",
      "小三角形面積=4×3÷2=6。",
      "總面積=30+6=36。"
    ],
    "commonMistake": "疊加圖形只算其中一個三角形面積。",
    "concept": "用文字描述分割或補成基本圖形，求組合圖形面積或周長。"
  },
  {
    "questionId": "u08-s009-v009",
    "skillId": "composite-area-text",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "中間 10×6 長方形兩側各接 4×3 長方形，總面積？",
    "choices": [
      "84",
      "60",
      "24",
      "72"
    ],
    "answerIndex": 0,
    "explanation": "中間 60，兩側各 12，合計 60+12+12=84。60 只算中間；24 只算兩側；72 則漏加一側。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "中間長方形面積=10×6=60。",
      "兩側各 4×3=12，共 24。",
      "總面積=60+24=84。"
    ],
    "commonMistake": "只算中間主體，漏加兩側接出的長方形。",
    "concept": "用文字描述分割或補成基本圖形，求組合圖形面積或周長。"
  },
  {
    "questionId": "u08-s009-v010",
    "skillId": "composite-area-text",
    "topicId": "u08-basic-figures",
    "difficulty": "advanced",
    "text": "階梯形三層寬 2 高 2，總高 6 寬 6，面積可用何想法？",
    "choices": [
      "只算外框",
      "分割三矩形",
      "乘 6×6",
      "當三角形"
    ],
    "answerIndex": 1,
    "explanation": "階梯形可分割成三個寬 2 高 2 的矩形逐層相加，最穩妥。只算外框會多算空白；乘 6×6 當正方形錯；當三角形公式不適用。",
    "steps": [
      "觀察階梯形每層寬 2 高 2。",
      "可分割成三個矩形。",
      "分割三矩形逐層相加最合適。"
    ],
    "commonMistake": "用最大外框 6×6 一次相乘，把階梯空白也算進去。",
    "concept": "用文字描述分割或補成基本圖形，求組合圖形面積或周長。"
  },
  {
    "questionId": "u08-s009-v011",
    "skillId": "composite-area-text",
    "topicId": "u08-basic-figures",
    "difficulty": "advanced",
    "text": "正方形邊 7 四邊各向外擴 1 形成大正方形邊 9，面積差？",
    "choices": [
      "14",
      "49",
      "32",
      "81"
    ],
    "answerIndex": 2,
    "explanation": "原面積 7×7=49，擴後 9×9=81，面積差 81−49=32。14 只算邊長差；49 和 81 是單一面積不是差。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "原正方形面積=7×7=49。",
      "擴後大正方形面積=9×9=81。",
      "面積差=81−49=32。"
    ],
    "commonMistake": "用邊長差 2 直接當面積差，沒分別算兩個正方形面積。",
    "concept": "用文字描述分割或補成基本圖形，求組合圖形面積或周長。"
  },
  {
    "questionId": "u08-s009-v012",
    "skillId": "composite-area-text",
    "topicId": "u08-basic-figures",
    "difficulty": "literacy",
    "text": "長 5 寬 4 長方形對半切兩塊，一塊面積？",
    "choices": [
      "20",
      "9",
      "8",
      "10"
    ],
    "answerIndex": 3,
    "explanation": "長方形面積 5×4=20，對半切每塊 20÷2=10。20 是整塊；9、8 則除法或原面積算錯。會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。",
    "steps": [
      "先算整個長方形面積 5×4=20。",
      "對半切成兩塊相等。",
      "一塊面積=20÷2=10。"
    ],
    "commonMistake": "對半切後仍回答整塊面積，忘了除以 2。",
    "concept": "用文字描述分割或補成基本圖形，求組合圖形面積或周長。"
  }
];

export const U08_LECTURES_S007_S009 = [
  {
    "skillId": "polygon-angle-basic",
    "topicId": "u08-basic-figures",
    "title": "多邊形角度",
    "concept": "n 邊形內角和 (n-2)×180 度，外角和恆 360 度。正多邊形每內角用內角和除以 n，或先用 180 減外角。求邊數常由外角整除 360 入手，別把內角外角公式對調。練習時宜用自己的話重述定義，並用一題簡單數字驗證，避免只靠印象選名詞。",
    "formula": "",
    "stepGuide": [
      "確認求內角和、單角或邊數。",
      "內角和用 (n-2)×180。",
      "外角和 360 求單外角。",
      "內外角互補 180。",
      "代回檢查 n 至少 3。"
    ],
    "examples": [
      {
        "prompt": "正八邊形每內角？",
        "answer": "135 度",
        "why": "外角 45，180-45=135。"
      },
      {
        "prompt": "外角各 40 度，幾邊形？",
        "answer": "9",
        "why": "360/40=9。"
      }
    ],
    "commonMistakes": [
      "內角和當 n×180。",
      "外角和隨邊數變。",
      "內角外角公式互換。",
      "求 n 忘加回 2。"
    ]
  },
  {
    "skillId": "perimeter-area-basic",
    "topicId": "u08-basic-figures",
    "title": "周長與面積",
    "concept": "長方形面積長乘寬、周長兩倍長加寬；正方形面積邊平方、周長四倍邊；三角形與梯形面積要除二；平行四邊形底乘高。先辨周長還是面積，再選公式，梯形要取上下底平均。練習時宜用自己的話重述定義，並用一題簡單數字驗證，避免只靠印象選名詞。",
    "formula": "",
    "stepGuide": [
      "圈關鍵字：周長或面積。",
      "寫對應公式並統一單位。",
      "三角形梯形記除以 2。",
      "平行四邊形周長加四邊。",
      "代值後用常識看大小。"
    ],
    "examples": [
      {
        "prompt": "長 9 寬 4 周長？",
        "answer": "26",
        "why": "2×(9+4)=26。"
      },
      {
        "prompt": "上底 3 下底 7 高 4 梯形面積？",
        "answer": "20",
        "why": "(3+7)×4÷2=20。"
      }
    ],
    "commonMistakes": [
      "周長面積公式對調。",
      "三角形梯形忘除 2。",
      "平行四邊形周長只加底高。",
      "梯形只乘高忘加底。"
    ]
  },
  {
    "skillId": "composite-area-text",
    "topicId": "u08-basic-figures",
    "title": "組合圖形面積",
    "concept": "組合圖先分割成長方形、三角形、梯形等基本形，分算再相加；挖空則大減小。周長要看外圍邊界是否因切角改變。文字題把尺寸標在草稿，別把挖空當加項。練習時宜用自己的話重述定義，並用一題簡單數字驗證，避免只靠印象選名詞。",
    "formula": "",
    "stepGuide": [
      "讀清組合或挖空關係。",
      "分割並標各塊尺寸。",
      "每塊用對公式。",
      "相加或相減得總面積。",
      "周長另數外圍邊長。"
    ],
    "examples": [
      {
        "prompt": "10×8 去 3×2 塊，面積？",
        "answer": "74",
        "why": "80-6=74。"
      },
      {
        "prompt": "兩矩形 5×4 與 2×3 合併？",
        "answer": "26",
        "why": "20+6=26。"
      }
    ],
    "commonMistakes": [
      "挖空卻加小塊面積。",
      "只算一塊就答總和。",
      "組合圖只算一塊就答。",
      "階梯不分割硬套公式。"
    ]
  }
];
