export const U08_PART_S004_S006 = [
  {
    "questionId": "u08-s004-v001",
    "skillId": "triangle-angle-sum",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "三角形內角和為多少度？",
    "choices": [
      "180",
      "360",
      "90",
      "270"
    ],
    "answerIndex": 0,
    "explanation": "三角形三內角和恆為 180 度。360 是四邊形或周角；90 只是一角；270 則算錯。不論哪種三角形，三個內角相加的和恆為 180 度，不是 360 或 90。",
    "steps": [
      "任意三角形都有三個內角。",
      "三內角相加有固定規律。",
      "三角形內角和為 180 度。"
    ],
    "commonMistake": "把三角形內角和與四邊形 360 度搞混。",
    "concept": "三角形內角和一百八十度，並能由兩角求另一內角或判斷角是否合理。"
  },
  {
    "questionId": "u08-s004-v002",
    "skillId": "triangle-angle-sum",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "三角形兩角 50 與 60 度，第三角？",
    "choices": [
      "110",
      "70",
      "130",
      "40"
    ],
    "answerIndex": 1,
    "explanation": "三內角和 180 度，第三個角=180−50−60=70 度。110 是只減一個角；130 是減法方向錯；40 則少減了。180 減 50 再減 60，第三個內角是 70 度，不是 110 或 130，110 是只減一個角。",
    "steps": [
      "三角形內角和為 180 度。",
      "已知兩角 50 度與 60 度。",
      "第三個角=180−50−60=70 度。"
    ],
    "commonMistake": "只減去一個已知角，沒把兩角都扣掉。",
    "concept": "三角形內角和一百八十度，並能由兩角求另一內角或判斷角是否合理。"
  },
  {
    "questionId": "u08-s004-v003",
    "skillId": "triangle-angle-sum",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "直角三角形兩銳角和？",
    "choices": [
      "180",
      "45",
      "90",
      "60"
    ],
    "answerIndex": 2,
    "explanation": "直角三角形有一角 90 度，兩銳角和=180−90=90 度。180 是全內角和；45 是單一銳角；60 則沒依內角和算。直角占 90 度，剩下兩銳角合計也是 90 度。",
    "steps": [
      "直角三角形有一個 90 度角。",
      "其餘兩角都是銳角。",
      "兩銳角和為 90 度。"
    ],
    "commonMistake": "把兩銳角之和誤當成 180 度全內角和。",
    "concept": "三角形內角和一百八十度，並能由兩角求另一內角或判斷角是否合理。"
  },
  {
    "questionId": "u08-s004-v004",
    "skillId": "triangle-angle-sum",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "三角形可能有一個 110 度角嗎？",
    "choices": [
      "不可以",
      "只能直角",
      "只能銳角",
      "可以"
    ],
    "answerIndex": 3,
    "explanation": "110 度小於 180 度，另兩角可各 35 度湊成 180，可以存在。不可以則忽略鈍角三角形；只能直角或銳角都太狹隘。110 度小於 180 度，另兩角可各 35 度湊滿 180 度，可以存在。",
    "steps": [
      "三角形內角和必須是 180 度。",
      "110 度角小於 180，另兩角可分配 70 度。",
      "三角形可以有一個 110 度角。"
    ],
    "commonMistake": "以為三角形不能有鈍角，其實只要三內角和為 180 即可。",
    "concept": "三角形內角和一百八十度，並能由兩角求另一內角或判斷角是否合理。"
  },
  {
    "questionId": "u08-s004-v005",
    "skillId": "triangle-angle-sum",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "等腰三角形頂角 40 度，底角各？",
    "choices": [
      "70",
      "40",
      "80",
      "140"
    ],
    "answerIndex": 0,
    "explanation": "等腰三角形的兩個底角相等。先用180−40=140度求出兩底角總和，再將140平均分成兩份，得到每個底角70度。40度是頂角；80度沒有正確平分；140度則只是兩底角的總和。",
    "steps": [
      "等腰三角形兩底角相等。",
      "三內角和 180 度，頂角 40 度。",
      "兩底角各為(180−40)÷2=70 度。"
    ],
    "commonMistake": "沒把剩餘角度平分給兩個相等的底角。",
    "concept": "三角形內角和一百八十度，並能由兩角求另一內角或判斷角是否合理。"
  },
  {
    "questionId": "u08-s004-v006",
    "skillId": "triangle-angle-sum",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "三角形三內角 60、60、60，是何種三角形？",
    "choices": [
      "直角",
      "等邊",
      "鈍角",
      "不等邊"
    ],
    "answerIndex": 1,
    "explanation": "三內角都是 60 度，三邊也相等，是等邊三角形。直角要有一角 90 度；鈍角要有一角超過 90；不等邊則邊長不全等。三內角都是 60 度，三邊也相等，這是等邊三角形。",
    "steps": [
      "三內角分別為 60、60、60 度。",
      "三內角相等代表三邊也相等。",
      "這是等邊三角形。"
    ],
    "commonMistake": "只看角度相等就說等腰，忽略三角皆 60 度是等邊。",
    "concept": "三角形內角和一百八十度，並能由兩角求另一內角或判斷角是否合理。"
  },
  {
    "questionId": "u08-s004-v007",
    "skillId": "triangle-angle-sum",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "若三角形一角 90 度，另兩角比 1:2，較大銳角？",
    "choices": [
      "30",
      "90",
      "60",
      "120"
    ],
    "answerIndex": 2,
    "explanation": "兩銳角和 90 度，比 1:2 則較大角=90×2/3=60 度。30 是較小角；90 是直角；120 超過直角三角形範圍。兩銳角和 90 度，比 1:2 時較大角占三分之二，是 60 度，較小角是 30 度。",
    "steps": [
      "直角三角形兩銳角和為 90 度。",
      "兩銳角比為 1:2，共 3 份。",
      "較大銳角=90×2/3=60 度。"
    ],
    "commonMistake": "比例分配時沒以 90 度為總和，誤用 180 度。",
    "concept": "三角形內角和一百八十度，並能由兩角求另一內角或判斷角是否合理。"
  },
  {
    "questionId": "u08-s004-v008",
    "skillId": "triangle-angle-sum",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "三角形任兩內角和一定？",
    "choices": [
      "等於 180",
      "大於 180",
      "等於 90",
      "小於 180"
    ],
    "answerIndex": 3,
    "explanation": "任兩內角和必小於 180 度，因為還有第三角要分配。等於或大於 180 則第三角無空間；等於 90 也不成立。任兩內角和必小於 180 度，因為還要留度數給第三個角。",
    "steps": [
      "三角形有三個內角，總和 180 度。",
      "任取兩角，第三角仍要佔正度數。",
      "任兩內角和一定小於 180 度。"
    ],
    "commonMistake": "以為任意兩角可以湊成 180 度，忽略第三角存在。",
    "concept": "三角形內角和一百八十度，並能由兩角求另一內角或判斷角是否合理。"
  },
  {
    "questionId": "u08-s004-v009",
    "skillId": "triangle-angle-sum",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "外角等於兩遠內角和，若兩遠內角 35 與 48，外角？",
    "choices": [
      "83",
      "133",
      "48",
      "35"
    ],
    "answerIndex": 0,
    "explanation": "三角形的一個外角等於與它不相鄰的兩個內角和，因此外角=35+48=83度。選48或35都只取了一個遠內角；133度則不是依外角定理計算出的結果。",
    "steps": [
      "外角對應的兩遠內角是 35 度與 48 度。",
      "外角等於兩遠內角之和。",
      "外角=35+48=83 度。"
    ],
    "commonMistake": "把鄰內角當遠內角，或只加一個內角。",
    "concept": "三角形內角和一百八十度，並能由兩角求另一內角或判斷角是否合理。"
  },
  {
    "questionId": "u08-s004-v010",
    "skillId": "triangle-angle-sum",
    "topicId": "u08-basic-figures",
    "difficulty": "advanced",
    "text": "三角形中，最大內角至少為多少度？",
    "choices": [
      "30 度",
      "60 度",
      "90 度",
      "120 度"
    ],
    "answerIndex": 1,
    "explanation": "三角形三個內角和為180度，平均值是60度，所以最大內角不可能小於60度；正三角形的三角都恰好是60度，證明下限可以取到。因此最大內角至少為60度，不一定要達到90度或120度。",
    "steps": [
      "三個內角總和為180度。",
      "用180÷3求得三個內角的平均值是60度。",
      "最大內角不小於平均值，因此至少為60度。"
    ],
    "commonMistake": "把「至少60度」誤解成「一定大於60度」，忽略正三角形的最大角正好等於60度。",
    "concept": "三角形內角和一百八十度，並能由兩角求另一內角或判斷角是否合理。"
  },
  {
    "questionId": "u08-s004-v011",
    "skillId": "triangle-angle-sum",
    "topicId": "u08-basic-figures",
    "difficulty": "advanced",
    "text": "兩角 25 與 35，第三角是否銳角？",
    "choices": [
      "是",
      "是直角",
      "否",
      "無法判斷"
    ],
    "answerIndex": 2,
    "explanation": "第三角=180−25−35=120度，120度大於90度，所以它是鈍角，不是銳角，答案應為「否」。選「是」忽略了實際計算；「是直角」與120度不符；題目資料足夠，因此也不是無法判斷。",
    "steps": [
      "先用180−25−35計算第三個內角。",
      "第三個內角等於120度。",
      "120度大於90度，是鈍角，因此不是銳角。"
    ],
    "commonMistake": "沒有先算出第三角，就直接依兩個已知銳角猜測第三角也是銳角。",
    "concept": "三角形內角和一百八十度，並能由兩角求另一內角或判斷角是否合理。"
  },
  {
    "questionId": "u08-s004-v012",
    "skillId": "triangle-angle-sum",
    "topicId": "u08-basic-figures",
    "difficulty": "literacy",
    "text": "三角形內角可以是 30、60、100 嗎？",
    "choices": [
      "可以",
      "只能直角",
      "只能等腰",
      "不可以"
    ],
    "answerIndex": 3,
    "explanation": "先檢查三個角的總和：30+60+100=190度，並不等於三角形內角和180度，所以這組角不可能組成三角形。「只能直角」或「只能等腰」都不是判斷三角形能否成立的條件。",
    "steps": [
      "把三個內角相加。",
      "30+60+100=190 度。",
      "超過 180 度，不能構成三角形內角。"
    ],
    "commonMistake": "沒檢查三內角和是否等於 180 度。",
    "concept": "三角形內角和一百八十度，並能由兩角求另一內角或判斷角是否合理。"
  },
  {
    "questionId": "u08-s005-v001",
    "skillId": "triangle-basic-classification",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "三邊 5、5、8 的三角形屬於？",
    "choices": [
      "等腰",
      "等邊",
      "直角",
      "不等邊"
    ],
    "answerIndex": 0,
    "explanation": "有兩邊相等（5 和 5），是等腰三角形。等邊要三邊都等；直角要看角度；不等邊則三邊都不同。有兩邊都是 5 公分，依邊長分類屬於等腰三角形。",
    "steps": [
      "列出三邊長 5、5、8。",
      "有兩邊長度相等。",
      "屬於等腰三角形。"
    ],
    "commonMistake": "只看最長邊就判不等邊，忽略兩邊相等。",
    "concept": "依邊長或角度分類三角形，認識等腰、等邊、直角、鈍角、銳角三角形。"
  },
  {
    "questionId": "u08-s005-v002",
    "skillId": "triangle-basic-classification",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "三內角皆小於 90 度，是何種三角形？",
    "choices": [
      "鈍角",
      "銳角",
      "直角",
      "等腰"
    ],
    "answerIndex": 1,
    "explanation": "三內角都小於 90 度，每個角都是銳角，是銳角三角形。鈍角要有一角超過 90；直角要有一角 90；等腰是按邊分類。三個角都小於 90 度，依角分類是銳角三角形。",
    "steps": [
      "檢查三內角是否都小於 90 度。",
      "每個角都是銳角。",
      "這是銳角三角形。"
    ],
    "commonMistake": "把按邊分類的等腰與按角分類的銳角搞混。",
    "concept": "依邊長或角度分類三角形，認識等腰、等邊、直角、鈍角、銳角三角形。"
  },
  {
    "questionId": "u08-s005-v003",
    "skillId": "triangle-basic-classification",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "有一角 90 度的三角形？",
    "choices": [
      "銳角",
      "鈍角",
      "直角",
      "等邊"
    ],
    "answerIndex": 2,
    "explanation": "有一角恰好 90 度，按角分類是直角三角形。銳角三角三角都小於 90；鈍角要超過 90；等邊每角 60 度。有一個角恰好 90 度，依角分類是直角三角形。",
    "steps": [
      "找出度數為 90 度的那個角。",
      "有一角是直角。",
      "這是直角三角形。"
    ],
    "commonMistake": "把有一個直角的三角形誤稱銳角或鈍角。",
    "concept": "依邊長或角度分類三角形，認識等腰、等邊、直角、鈍角、銳角三角形。"
  },
  {
    "questionId": "u08-s005-v004",
    "skillId": "triangle-basic-classification",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "三邊 7、7、7 是？",
    "choices": [
      "等腰",
      "不等邊",
      "直角",
      "等邊"
    ],
    "answerIndex": 3,
    "explanation": "三邊都相等，是等邊三角形。等腰只要兩邊等；不等邊三邊不同；直角要看角度不是邊長。三邊都是 7，三邊相等，依邊長分類是等邊三角形。",
    "steps": [
      "比較三邊長度皆為 7。",
      "三邊長度完全相等。",
      "這是等邊三角形。"
    ],
    "commonMistake": "三邊相等卻只說等腰，沒認出等邊。",
    "concept": "依邊長或角度分類三角形，認識等腰、等邊、直角、鈍角、銳角三角形。"
  },
  {
    "questionId": "u08-s005-v005",
    "skillId": "triangle-basic-classification",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "邊長 3、4、5 的三角形類型含？",
    "choices": [
      "直角",
      "鈍角",
      "等邊",
      "無法"
    ],
    "answerIndex": 0,
    "explanation": "3²+4²=5²，符合勾股定理，是直角三角形。鈍角、等邊、無法都不對；這組邊長可構成直角三角形。3² 加 4² 等於 5²，符合勾股定理，是直角三角形。",
    "steps": [
      "檢查 3²+4² 是否等於 5²。",
      "9+16=25，成立。",
      "邊長 3、4、5 的三角形含直角三角形。"
    ],
    "commonMistake": "沒驗證三邊平方關係，憑印象判斷類型。",
    "concept": "依邊長或角度分類三角形，認識等腰、等邊、直角、鈍角、銳角三角形。"
  },
  {
    "questionId": "u08-s005-v006",
    "skillId": "triangle-basic-classification",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "最大角大於 90 度的三角形？",
    "choices": [
      "銳角",
      "鈍角",
      "直角",
      "等腰"
    ],
    "answerIndex": 1,
    "explanation": "最大角超過 90 度，按角分類是鈍角三角形。銳角三角最大角小於 90；直角最大角等於 90；等腰是按邊分。最大角超過 90 度，依角分類是鈍角三角形。",
    "steps": [
      "找出三角形中最大的那個角。",
      "最大角大於 90 度。",
      "這是鈍角三角形。"
    ],
    "commonMistake": "把鈍角三角形與按邊分類的等腰混淆。",
    "concept": "依邊長或角度分類三角形，認識等腰、等邊、直角、鈍角、銳角三角形。"
  },
  {
    "questionId": "u08-s005-v007",
    "skillId": "triangle-basic-classification",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "等腰三角形至少幾邊相等？",
    "choices": [
      "3",
      "1",
      "2",
      "0"
    ],
    "answerIndex": 2,
    "explanation": "等腰三角形定義為至少兩邊相等。3 是等邊；1 或 0 則沒有相等的邊，不是等腰。等腰三角形定義是至少有兩邊相等，不是三邊都等。",
    "steps": [
      "等腰三角形按邊的分類定義。",
      "至少要有一對邊長相等。",
      "至少 2 邊相等。"
    ],
    "commonMistake": "以為等腰一定要三邊相等，其實兩邊即可。",
    "concept": "依邊長或角度分類三角形，認識等腰、等邊、直角、鈍角、銳角三角形。"
  },
  {
    "questionId": "u08-s005-v008",
    "skillId": "triangle-basic-classification",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "不等邊三角形三邊關係？",
    "choices": [
      "至少兩邊等",
      "必為直角",
      "必為鈍角",
      "互不相等"
    ],
    "answerIndex": 3,
    "explanation": "不等邊三角形三邊長度互不相等。至少兩邊等是等腰；必為直角或鈍角則是按角亂推。不等邊三角形三邊長度互不相等，沒有任何兩邊相等。",
    "steps": [
      "不等邊三角形按邊分類。",
      "三邊長度兩兩不同。",
      "三邊互不相等。"
    ],
    "commonMistake": "把兩邊相等的等腰三角形誤稱不等邊。",
    "concept": "依邊長或角度分類三角形，認識等腰、等邊、直角、鈍角、銳角三角形。"
  },
  {
    "questionId": "u08-s005-v009",
    "skillId": "triangle-basic-classification",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "等邊三角形每個角？",
    "choices": [
      "60",
      "90",
      "45",
      "120"
    ],
    "answerIndex": 0,
    "explanation": "等邊三角形三內角相等，各為 180÷3=60 度。90 是直角；45、120 都不符合等邊性質。等邊三角形三內角相等，各是 180 除以 3，得 60 度，不是 90 或 120才對。",
    "steps": [
      "等邊三角形三內角相等。",
      "內角和 180 度平分給三角。",
      "每個角 60 度。"
    ],
    "commonMistake": "沒用內角和 180 度平分，直接猜角度。",
    "concept": "依邊長或角度分類三角形，認識等腰、等邊、直角、鈍角、銳角三角形。"
  },
  {
    "questionId": "u08-s005-v010",
    "skillId": "triangle-basic-classification",
    "topicId": "u08-basic-figures",
    "difficulty": "advanced",
    "text": "直角三角形斜邊對哪個角？",
    "choices": [
      "銳角",
      "直角",
      "鈍角",
      "頂角"
    ],
    "answerIndex": 1,
    "explanation": "斜邊是直角所對的邊，對著 90 度的角。銳角、鈍角、頂角都不是斜邊所對的角，直角三角形中斜邊最長，因此斜邊對直角。",
    "steps": [
      "直角三角形中斜邊是最長邊。",
      "斜邊所對的角是直角。",
      "斜邊對著直角。"
    ],
    "commonMistake": "把斜邊對應的角誤當成銳角或頂角。",
    "concept": "依邊長或角度分類三角形，認識等腰、等邊、直角、鈍角、銳角三角形。"
  },
  {
    "questionId": "u08-s005-v011",
    "skillId": "triangle-basic-classification",
    "topicId": "u08-basic-figures",
    "difficulty": "advanced",
    "text": "邊 6、6、10 的三角形同時是？",
    "choices": [
      "等邊",
      "直角",
      "等腰",
      "不等邊"
    ],
    "answerIndex": 2,
    "explanation": "兩邊 6 相等，是等腰三角形。等邊要三邊都等；直角要看角度；不等邊則三邊不同。有兩邊 6 相等，依邊長分類是等腰三角形。",
    "steps": [
      "比較三邊 6、6、10。",
      "有兩邊長度為 6。",
      "同時是等腰三角形。"
    ],
    "commonMistake": "看到 10 最長就判不等邊，忽略兩邊相等。",
    "concept": "依邊長或角度分類三角形，認識等腰、等邊、直角、鈍角、銳角三角形。"
  },
  {
    "questionId": "u08-s005-v012",
    "skillId": "triangle-basic-classification",
    "topicId": "u08-basic-figures",
    "difficulty": "literacy",
    "text": "三角形按角分共有幾類基本名稱常考？",
    "choices": [
      "2",
      "4",
      "5",
      "3"
    ],
    "answerIndex": 3,
    "explanation": "按角分有銳角、直角、鈍角三類。2 類太少；4 或 5 類則把其他分類混進來。按角分有銳角、直角、鈍角三類，這三種名稱最常考。",
    "steps": [
      "三角形按角大小分類。",
      "常考銳角、直角、鈍角。",
      "共有 3 類基本名稱。"
    ],
    "commonMistake": "把按邊分類的等腰、等邊也算進按角分類的類數。",
    "concept": "依邊長或角度分類三角形，認識等腰、等邊、直角、鈍角、銳角三角形。"
  },
  {
    "questionId": "u08-s006-v001",
    "skillId": "quadrilateral-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "平行四邊形對邊關係？",
    "choices": [
      "平行且相等",
      "只平行",
      "只相等",
      "垂直"
    ],
    "answerIndex": 0,
    "explanation": "平行四邊形對邊既平行又相等。只平行或只相等都不完整；垂直是鄰邊關係不是對邊。平行四邊形對邊既平行又相等，兩項性質同時成立。",
    "steps": [
      "平行四邊形有四條邊。",
      "觀察相對的兩組對邊。",
      "對邊平行且相等。"
    ],
    "commonMistake": "只記對邊平行，忘了對邊也相等。",
    "concept": "認識平行四邊形、長方形、菱形、正方形、梯形的基本性質與角、邊關係。"
  },
  {
    "questionId": "u08-s006-v002",
    "skillId": "quadrilateral-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "長方形四個角皆？",
    "choices": [
      "60 度",
      "90 度",
      "鈍角",
      "銳角"
    ],
    "answerIndex": 1,
    "explanation": "長方形定義要求四個角都是 90 度。60 度、鈍角、銳角都不符合長方形定義。長方形定義要求四個角都是 90 度，沒有例外，不是 60 或 180。",
    "steps": [
      "長方形是特殊的平行四邊形。",
      "四個內角都必須相等。",
      "每個角都是 90 度。"
    ],
    "commonMistake": "把長方形想成只有對邊相等，忽略四角皆直角。",
    "concept": "認識平行四邊形、長方形、菱形、正方形、梯形的基本性質與角、邊關係。"
  },
  {
    "questionId": "u08-s006-v003",
    "skillId": "quadrilateral-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "菱形四邊？",
    "choices": [
      "兩兩相等",
      "都不等",
      "都相等",
      "只有對邊等"
    ],
    "answerIndex": 2,
    "explanation": "菱形定義為四邊都相等。兩兩相等是一般平行四邊形；都不等或只有對邊等都不符合菱形。菱形定義是四邊都相等，不只是對邊相等。",
    "steps": [
      "菱形的邊長關係是判定重點。",
      "四條邊長度全部相同。",
      "菱形四邊都相等。"
    ],
    "commonMistake": "把只有對邊相等的平行四邊形誤當菱形。",
    "concept": "認識平行四邊形、長方形、菱形、正方形、梯形的基本性質與角、邊關係。"
  },
  {
    "questionId": "u08-s006-v004",
    "skillId": "quadrilateral-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "basic",
    "text": "正方形同時是？",
    "choices": [
      "只有梯形",
      "只有平行四邊形",
      "不是四邊形",
      "菱形且長方形"
    ],
    "answerIndex": 3,
    "explanation": "正方形四邊相等又是四角直角，同時是菱形且長方形。只有梯形、只有平行四邊形或不屬四邊形都不對。正方形四邊相等又有四角直角，同時是菱形且長方形。",
    "steps": [
      "正方形四邊相等，符合菱形。",
      "正方形四角都是 90 度，符合長方形。",
      "正方形同時是菱形且長方形。"
    ],
    "commonMistake": "只記正方形是長方形，忘了四邊相等也是菱形。",
    "concept": "認識平行四邊形、長方形、菱形、正方形、梯形的基本性質與角、邊關係。"
  },
  {
    "questionId": "u08-s006-v005",
    "skillId": "quadrilateral-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "梯形至少幾組對邊平行？",
    "choices": [
      "1",
      "2",
      "0",
      "3"
    ],
    "answerIndex": 0,
    "explanation": "梯形定義為至少一組對邊平行。2 組是平行四邊形；0 組是一般四邊形；3 組不可能。梯形定義是至少有一組對邊平行，兩組平行則是平行四邊形。",
    "steps": [
      "梯形按平行邊的數量定義。",
      "至少要有一組對邊互相平行。",
      "至少 1 組對邊平行。"
    ],
    "commonMistake": "把平行四邊形當成梯形，其實梯形只要求一組平行。",
    "concept": "認識平行四邊形、長方形、菱形、正方形、梯形的基本性質與角、邊關係。"
  },
  {
    "questionId": "u08-s006-v006",
    "skillId": "quadrilateral-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "平行四邊形對角？",
    "choices": [
      "互補",
      "相等",
      "互餘",
      "無關"
    ],
    "answerIndex": 1,
    "explanation": "平行四邊形對角相等。互補是鄰角關係；互餘是特殊情形；無關則忽略平行四邊形性質。平行四邊形對角相等，鄰角才互補。",
    "steps": [
      "平行四邊形有四個角。",
      "相對位置的兩角為對角。",
      "平行四邊形對角相等。"
    ],
    "commonMistake": "把對角相等誤當成鄰角互補。",
    "concept": "認識平行四邊形、長方形、菱形、正方形、梯形的基本性質與角、邊關係。"
  },
  {
    "questionId": "u08-s006-v007",
    "skillId": "quadrilateral-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "長方形的四個內角各是多少度？",
    "choices": [
      "都是 60 度",
      "都是 180 度",
      "都是 90 度",
      "不一定相等"
    ],
    "answerIndex": 2,
    "explanation": "長方形四個內角都是 90 度。60 度、180 度或不一定相等都不符合長方形定義。長方形四個內角都是 90 度，四角大小完全相同。",
    "steps": [
      "長方形屬於特殊的平行四邊形。",
      "四個角都必須是直角。",
      "四個內角都是 90 度。"
    ],
    "commonMistake": "以為長方形只有對邊相等，四角可以不同。",
    "concept": "認識平行四邊形、長方形、菱形、正方形、梯形的基本性質與角、邊關係。"
  },
  {
    "questionId": "u08-s006-v008",
    "skillId": "quadrilateral-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "平行四邊形鄰角？",
    "choices": [
      "相等",
      "互餘",
      "都是直角",
      "互補"
    ],
    "answerIndex": 3,
    "explanation": "平行四邊形鄰角互補，和為 180 度。相等是對角；互餘是特殊情形；都是直角則變成長方形。平行四邊形鄰角互補，相鄰兩角相加為 180 度。",
    "steps": [
      "平行四邊形中相鄰的兩角共用一邊。",
      "鄰角位於截線同側的關係類似。",
      "鄰角互補，和為 180 度。"
    ],
    "commonMistake": "把鄰角當成相等，其實相等的是對角。",
    "concept": "認識平行四邊形、長方形、菱形、正方形、梯形的基本性質與角、邊關係。"
  },
  {
    "questionId": "u08-s006-v009",
    "skillId": "quadrilateral-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "standard",
    "text": "四邊形內角和？",
    "choices": [
      "360",
      "180",
      "540",
      "90"
    ],
    "answerIndex": 0,
    "explanation": "四邊形內角和為 360 度，可用分割成兩個三角形推得。180 是三角形；540 是五邊形；90 則嚴重低估。四邊形可分成兩個三角形，內角和是 360 度。",
    "steps": [
      "四邊形可分割成兩個三角形。",
      "每個三角形內角和 180 度。",
      "四邊形內角和為 360 度。"
    ],
    "commonMistake": "把四邊形內角和誤當成三角形 180 度。",
    "concept": "認識平行四邊形、長方形、菱形、正方形、梯形的基本性質與角、邊關係。"
  },
  {
    "questionId": "u08-s006-v010",
    "skillId": "quadrilateral-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "advanced",
    "text": "正方形是平行四邊形嗎？",
    "choices": [
      "不是",
      "是",
      "只能是梯形",
      "不是四邊形"
    ],
    "answerIndex": 1,
    "explanation": "正方形對邊平行且相等，符合平行四邊形定義，是平行四邊形。不是則忽略定義；只能是梯形或不屬四邊形都錯。",
    "steps": [
      "檢查正方形對邊是否平行。",
      "對邊也相等。",
      "正方形是平行四邊形。"
    ],
    "commonMistake": "以為正方形太特殊就不算平行四邊形。",
    "concept": "認識平行四邊形、長方形、菱形、正方形、梯形的基本性質與角、邊關係。"
  },
  {
    "questionId": "u08-s006-v011",
    "skillId": "quadrilateral-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "advanced",
    "text": "下列哪個四邊形四邊都等長？",
    "choices": [
      "長方形",
      "梯形",
      "菱形",
      "一般平行四邊形"
    ],
    "answerIndex": 2,
    "explanation": "菱形四邊都等長。長方形只保證對邊等；梯形邊長不一定；一般平行四邊形只有對邊等，四邊等長是菱形的定義特徵。",
    "steps": [
      "逐一檢查哪個圖形四邊等長。",
      "長方形、梯形、平行四邊形都不保證四邊等。",
      "菱形四邊都等長。"
    ],
    "commonMistake": "把對邊相等的平行四邊形誤當四邊都等長。",
    "concept": "認識平行四邊形、長方形、菱形、正方形、梯形的基本性質與角、邊關係。"
  },
  {
    "questionId": "u08-s006-v012",
    "skillId": "quadrilateral-basic",
    "topicId": "u08-basic-figures",
    "difficulty": "literacy",
    "text": "等腰梯形非平行的兩邊稱？",
    "choices": [
      "底",
      "高",
      "對角線",
      "腰"
    ],
    "answerIndex": 3,
    "explanation": "等腰梯形中不平行的一組對邊稱為腰。底是平行的邊；高是兩底間距離；對角線是連接對頂點的線段。等腰梯形中不平行的一組對邊稱為腰，平行的稱底。",
    "steps": [
      "梯形有一組對邊平行，稱為底。",
      "另外兩條不平行的邊有專名。",
      "非平行的兩邊稱為腰。"
    ],
    "commonMistake": "把梯形的腰誤稱為底或高，混淆非平行邊與上下底。",
    "concept": "認識平行四邊形、長方形、菱形、正方形、梯形的基本性質與角、邊關係。"
  }
];

export const U08_LECTURES_S004_S006 = [
  {
    "skillId": "triangle-angle-sum",
    "topicId": "u08-basic-figures",
    "title": "三角形內角和",
    "concept": "三角形三內角和固定一百八十度，直角三角形兩銳角互餘。等腰三角形底角相等；外角等於兩遠內角和。解題先加總檢查是否合理，再列式求未知角，別把外角當內角互補，並確認每個內角都在零到一百八十度之間。",
    "formula": "",
    "stepGuide": [
      "確認是內角還是外角。",
      "內角先列三者和 180。",
      "等腰標出底角相等。",
      "外角用兩遠內角和。",
      "檢查每角在 0 到 180 之間且總和 180。"
    ],
    "examples": [
      {
        "prompt": "兩角 48、72，求另一內角。",
        "answer": "60 度",
        "why": "三角形三個內角的總和固定為180度。已知兩角是48度與72度，先求48+72=120度，再算180−120=60度，因此第三個內角為60度；三角相加也正好回到180度。"
      },
      {
        "prompt": "等腰頂角 100，底角？",
        "answer": "40 度",
        "why": "等腰三角形的兩個底角度數相等。頂角為100度時，兩底角合計180−100=80度，再把80度平均分成兩份，所以每個底角都是40度。"
      }
    ],
    "commonMistakes": [
      "內角和用 360。",
      "外角當 180 減內角。",
      "等腰底角忘平分。",
      "沒檢查三角度數和。"
    ]
  },
  {
    "skillId": "triangle-basic-classification",
    "topicId": "u08-basic-figures",
    "title": "三角形分類",
    "concept": "按邊分等腰、等邊、不等邊；按角分銳角、直角、鈍角。邊長 3、4、5 型可判直角；等邊三角每角 60 度。分類時邊與角分開判斷，別把等腰與銳角三角形混為一談，並先確認題目問的是邊長關係還是角度關係，再選名稱。",
    "formula": "",
    "stepGuide": [
      "先決定依邊還是依角分類。",
      "邊：找相等邊數量。",
      "角：看最大角或是否有 90。",
      "必要時用勾股檢查直角。",
      "寫出完整名稱再答題。"
    ],
    "examples": [
      {
        "prompt": "邊 5、12、13 含直角嗎？",
        "answer": "是",
        "why": "先用最長邊13檢查勾股關係：5²+12²=25+144=169，而13²也等於169。因為兩邊平方和等於最長邊平方，所以此三角形含有一個直角。"
      },
      {
        "prompt": "三角 40、60、80 屬？",
        "answer": "銳角三角形",
        "why": "三個內角40度、60度、80度都小於90度，而且三者相加正好是180度。因此三個角全是銳角，依角度分類應稱為銳角三角形。"
      }
    ],
    "commonMistakes": [
      "等腰與等邊不分。",
      "按角分卻只看邊。",
      "直角三角形當銳角。",
      "勾股不檢查就猜角型。"
    ]
  },
  {
    "skillId": "quadrilateral-basic",
    "topicId": "u08-basic-figures",
    "title": "四邊形基礎",
    "concept": "認識平行四邊形、長方形、菱形、正方形、梯形的名稱與基本特徵：幾組平行邊、是否四邊等長、是否四角直角。先判斷圖形類型，再對照定義，不要混用不同四邊形的性質，並分清對邊、鄰角與對角線等名詞。",
    "formula": "",
    "stepGuide": [
      "讀題確認要比較邊、角還是平行關係。",
      "寫下該圖形的定義關鍵字。",
      "對照題目條件是否符合。",
      "排除明顯不符合定義的說法。",
      "用一個簡單例子驗證判斷。"
    ],
    "examples": [
      {
        "prompt": "四邊都等長且四角直角的是哪種四邊形？",
        "answer": "正方形",
        "why": "四條邊都等長符合菱形的特徵，四個角都是直角符合長方形的特徵；能同時滿足這兩組條件的四邊形就是正方形，不能只看其中一項。"
      },
      {
        "prompt": "只有一組對邊平行的四邊形？",
        "answer": "梯形",
        "why": "依本課採用的定義，梯形只有一組對邊互相平行；平行四邊形則有兩組對邊平行。題目只給一組平行邊，因此判定為梯形。"
      }
    ],
    "commonMistakes": [
      "把平行四邊形與長方形混為一談。",
      "以為梯形有兩組平行邊。",
      "看到四邊相等就忽略是否四角直角。",
      "把正方形只當菱形或只當長方形。"
    ]
  }
];
