export const QUESTIONS = [
  {
    "questionId": "u09-s001-v001",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "data-table-reading",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下表為某班三組植樹棵數：甲組12、乙組15、丙組18。全班共植幾棵？",
    "choices": [
      "45",
      "42",
      "48",
      "33"
    ],
    "answerIndex": 0,
    "explanation": "甲組12棵、乙組15棵、丙組18棵，12+15+18=45棵。42與33都不是三組棵數的正確總和；48則是把丙組18誤讀成21後，算成12+15+21=48。",
    "steps": [
      "確認三組棵數分別為12、15、18。",
      "三組相加：12+15+18。",
      "全班共45棵。"
    ],
    "commonMistake": "加總時漏掉某一組，或把不同列的數字混在一起加",
    "concept": "資料表以行列整理數值，讀表時先認欄位標題與列名，再依題意找對應儲存格或加總列欄",
    "tags": [
      "統計",
      "資料表判讀",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s001-v002",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "data-table-reading",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某商店週銷售表：週一80元、週二95元、週三70元。週一比週三多賣多少元？",
    "choices": [
      "15",
      "10",
      "25",
      "20"
    ],
    "answerIndex": 1,
    "explanation": "週一80元、週三70元，80−70=10元。15是誤算週二95元與週一80元的差；25是拿週二95元減週三70元；20也不是80與70的差。題目指定比較週一與週三，因此只使用80與70。",
    "steps": [
      "週一銷售80元，週三70元。",
      "求週一減週三。",
      "80−70=10元。"
    ],
    "commonMistake": "題目指定兩列比較，卻拿其他天的數字相減",
    "concept": "資料表以行列整理數值，讀表時先認欄位標題與列名，再依題意找對應儲存格或加總列欄",
    "tags": [
      "統計",
      "資料表判讀",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s001-v003",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "data-table-reading",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下表為四科成績：國文82、英文76、數學88、自然74。最高分是哪一科？",
    "choices": [
      "國文",
      "英文",
      "數學",
      "自然"
    ],
    "answerIndex": 2,
    "explanation": "四科中88最高，對應數學。82是國文分數但非最高；76是英文，比88小。找最大值要在整張表的數字裡比較，不能只看第一列就下結論。",
    "steps": [
      "列出四科分數82、76、88、74。",
      "比較四個數取最大。",
      "88最大，是數學。"
    ],
    "commonMistake": "只掃第一列就以為國文最高，沒比完四個分數",
    "concept": "資料表以行列整理數值，讀表時先認欄位標題與列名，再依題意找對應儲存格或加總列欄",
    "tags": [
      "統計",
      "資料表判讀",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s001-v004",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "data-table-reading",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某社團男女人數表：男生24人、女生36人。女生比男生多幾人？",
    "choices": [
      "10",
      "14",
      "16",
      "12"
    ],
    "answerIndex": 3,
    "explanation": "女生36人、男生24人，36−24=12人。10與14都是減法計算錯誤；16則不是36與24的差。題目問女生比男生多多少，所以用女生人數減男生人數，答案單位仍是人。",
    "steps": [
      "男生24人，女生36人。",
      "女生減男生。",
      "36−24=12人。"
    ],
    "commonMistake": "用少減多得到負數卻沒取絕對值，或加總代替相減",
    "concept": "資料表以行列整理數值，讀表時先認欄位標題與列名，再依題意找對應儲存格或加總列欄",
    "tags": [
      "統計",
      "資料表判讀",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s001-v005",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "data-table-reading",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下表為五個月用水量（度）：3月45、4月52、5月38、6月41、7月44。平均每月約幾度？",
    "choices": [
      "44",
      "42",
      "46",
      "48"
    ],
    "answerIndex": 0,
    "explanation": "五個月用水量相加為45+52+38+41+44=220度，220÷5=44度。42、46、48都不是220除以5的結果；這題必須把五個月份全部計入，不能只取部分月份估算。",
    "steps": [
      "五個月相加得220度。",
      "個數為5個月。",
      "220÷5=44度。"
    ],
    "commonMistake": "沒先加總五個月用水量就直接除以5",
    "concept": "資料表以行列整理數值，讀表時先認欄位標題與列名，再依題意找對應儲存格或加總列欄",
    "tags": [
      "統計",
      "資料表判讀",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s001-v006",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "data-table-reading",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班午餐種類票數：飯類120票、麵類95票、其他35票。飯類占總票數百分之幾？",
    "choices": [
      "50",
      "48",
      "52",
      "55"
    ],
    "answerIndex": 1,
    "explanation": "飯類120票、麵類95票、其他35票，總票數是120+95+35=250票。飯類占比為120÷250×100=48%。50、52與55都不是以250為總票數算出的正確百分比；若漏掉其他35票，120÷215×100約為55.8%，仍不是52%。",
    "steps": [
      "總票數250票。",
      "飯類120票。",
      "120÷250×100=48%。"
    ],
    "commonMistake": "分母用部分量或漏加其他類別，百分比基準錯誤",
    "concept": "資料表以行列整理數值，讀表時先認欄位標題與列名，再依題意找對應儲存格或加總列欄",
    "tags": [
      "統計",
      "資料表判讀",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s001-v007",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "data-table-reading",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下表為兩班數學段考平均：A班78、B班84。B班比A班高幾分？",
    "choices": [
      "4",
      "8",
      "6",
      "10"
    ],
    "answerIndex": 2,
    "explanation": "B班平均84分，A班平均78分，題目問兩班平均相差幾分，所以直接算84−78=6。4與10都不是由84和78相減得到；這題比較的是兩個平均值的差，不需要再除以班級人數。",
    "steps": [
      "A班平均78分。",
      "B班平均84分。",
      "84−78=6分。"
    ],
    "commonMistake": "把班級平均又除以人數，或加兩班平均當差值",
    "concept": "資料表以行列整理數值，讀表時先認欄位標題與列名，再依題意找對應儲存格或加總列欄",
    "tags": [
      "統計",
      "資料表判讀",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s001-v008",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "data-table-reading",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某店商品庫存表：A品30件、B品25件、C品45件。C品比A、B平均庫存多多少件？",
    "choices": [
      "15",
      "20",
      "22",
      "18"
    ],
    "answerIndex": 3,
    "explanation": "先算A品30件與B品25件的平均庫存(30+25)÷2=27.5件，再用C品45件減去27.5得17.5，約18件。15只拿C減A；20只拿C減B；22則把A、B平均或差量算錯，沒有先求平均庫存。",
    "steps": [
      "A、B庫存平均(30+25)÷2=27.5。",
      "C品45件。",
      "45−27.5=17.5，約18件。"
    ],
    "commonMistake": "只跟A或B單一比較，沒先算A、B的平均庫存",
    "concept": "資料表以行列整理數值，讀表時先認欄位標題與列名，再依題意找對應儲存格或加總列欄",
    "tags": [
      "統計",
      "資料表判讀",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s001-v009",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "data-table-reading",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下表為六天氣溫（℃）：18、22、20、25、19、21。全距是多少？",
    "choices": [
      "7",
      "5",
      "6",
      "8"
    ],
    "answerIndex": 0,
    "explanation": "六天氣溫中最高是25℃、最低是18℃，全距為25−18=7℃。5是25與20的差，不是最大值與最小值的差；6與8都不是25減18的結果。",
    "steps": [
      "六天中最高25、最低18。",
      "全距=最大−最小。",
      "25−18=7℃。"
    ],
    "commonMistake": "全距用相鄰兩天溫差代替最大減最小",
    "concept": "資料表以行列整理數值，讀表時先認欄位標題與列名，再依題意找對應儲存格或加總列欄",
    "tags": [
      "統計",
      "資料表判讀",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s001-v010",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "data-table-reading",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某調查表：支持120人、反對80人、無意見40人。支持比反對多百分之幾？（以反對為基準）",
    "choices": [
      "40",
      "50",
      "60",
      "75"
    ],
    "answerIndex": 1,
    "explanation": "支持比反對多40人，以反對80為基準，40÷80×100=50%。40是把差當百分比；60、75則基準或差值算錯。增加率要清楚基準量是誰，分母不能換成其他數字。",
    "steps": [
      "支持120、反對80，差40人。",
      "基準是反對80人。",
      "40÷80×100=50%。"
    ],
    "commonMistake": "增加率基準搞錯，用總人數或支持人數當分母",
    "concept": "資料表以行列整理數值，讀表時先認欄位標題與列名，再依題意找對應儲存格或加總列欄",
    "tags": [
      "統計",
      "資料表判讀",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s001-v011",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "data-table-reading",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下表為兩年營業額（萬元）：2023年320、2024年380。2024比2023成長百分之幾？",
    "choices": [
      "15",
      "20",
      "18.75",
      "25"
    ],
    "answerIndex": 2,
    "explanation": "營業額由320萬增加到380萬，增加60萬；以2023年的320萬為基準，60÷320×100=18.75%。15、20與25都不是依這個基準算出的成長率。",
    "steps": [
      "成長額380−320=60萬。",
      "基準年2023為320萬。",
      "60÷320×100=18.75%。"
    ],
    "commonMistake": "成長率用2024當分母，或直接用380÷320是這類資料題中很常見的錯誤想法",
    "concept": "資料表以行列整理數值，讀表時先認欄位標題與列名，再依題意找對應儲存格或加總列欄",
    "tags": [
      "統計",
      "資料表判讀",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s001-v012",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "data-table-reading",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某校三個年級學生數：七年級420、八年級380、九年級400。海報寫「全校超過1200人」，這樣合理嗎？",
    "choices": [
      "合理，可四捨五入",
      "合理，總和1200",
      "不合理，應先算平均",
      "不合理，總和正好1200"
    ],
    "answerIndex": 3,
    "explanation": "三級相加420+380+400=1200，剛好1200並非超過1200，說「超過」不實。「合理，總和1200」忽略用字；四捨五入無從說起。讀表後要對照文字敘述是否一致。",
    "steps": [
      "三個年級相加420+380+400。",
      "總和為1200人。",
      "1200並非超過1200，敘述不合理。"
    ],
    "commonMistake": "只會加總數字，沒檢查「超過」等語意是否與計算結果一致",
    "concept": "資料表以行列整理數值，讀表時先認欄位標題與列名，再依題意找對應儲存格或加總列欄",
    "tags": [
      "統計",
      "資料表判讀",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u09-s002-v001",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "frequency-table",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班35位同學身高次數表：150−154有8人、155−159有12人、160−164有10人、165−169有5人。總人數多少？",
    "choices": [
      "35",
      "30",
      "40",
      "33"
    ],
    "answerIndex": 0,
    "explanation": "各組次數相加8+12+10+5=35人。錯選30是漏加某一組次數，40則多加一組，33則把四組次數加總算錯。各組次數都要相加，漏組就會少算。",
    "steps": [
      "列出四組次數8、12、10、5。",
      "四組相加。",
      "總人數35人。"
    ],
    "commonMistake": "加總次數時漏掉某一組別的人數",
    "concept": "次數分配表記錄各組資料出現幾次，可從表中讀出總次數、最多組別與累計次數",
    "tags": [
      "統計",
      "次數分配表",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s002-v002",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "frequency-table",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某測驗分數次數表：60−69分3次、70−79分7次、80−89分15次、90−99分5次。哪個區間人數最多？",
    "choices": [
      "70−79分",
      "80−89分",
      "90−99分",
      "60−69分"
    ],
    "answerIndex": 1,
    "explanation": "各組次數15最大，對應80−89分。70−79是7次；90−99是5次；60−69只有3次。找最多人數要比較各組次數，不是比區間大小。90−99只有5次，不是15次。60−69只有3次更少。",
    "steps": [
      "讀出各組次數3、7、15、5。",
      "15最大。",
      "80−89分人數最多。"
    ],
    "commonMistake": "以分數區間高低代替次數多寡來判斷",
    "concept": "次數分配表記錄各組資料出現幾次，可從表中讀出總次數、最多組別與累計次數",
    "tags": [
      "統計",
      "次數分配表",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s002-v003",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "frequency-table",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班體重次數表：40−44有6人、45−49有10人、50−54有8人、55−59有4人。45公斤以上有多少人？",
    "choices": [
      "18",
      "24",
      "22",
      "14"
    ],
    "answerIndex": 2,
    "explanation": "45公斤以上包含45−49、50−54與55−59三組，10+8+4=22人。18漏加55−59的4人；24誤把40−44的6人算入又漏掉55−59的4人；14只加45−49與55−59，漏掉50−54的8人。",
    "steps": [
      "45以上含45−49、50−54、55−59。",
      "10+8+4=22。",
      "共22人。"
    ],
    "commonMistake": "「以上」範圍搞錯，漏加或多加某一組",
    "concept": "次數分配表記錄各組資料出現幾次，可從表中讀出總次數、最多組別與累計次數",
    "tags": [
      "統計",
      "次數分配表",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s002-v004",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "frequency-table",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某校圖書借閱次數表：0次20人、1次35人、2次25人、3次10人、4次5人。借閱至少1次的有幾人？",
    "choices": [
      "95",
      "55",
      "70",
      "75"
    ],
    "answerIndex": 3,
    "explanation": "至少借閱1次包含1、2、3、4次四組，35+25+10+5=75人。95誤把0次的20人也算入；55只加0次與1次兩組；70漏加4次的5人。",
    "steps": [
      "至少1次不含0次組。",
      "35+25+10+5=75。",
      "共75人。"
    ],
    "commonMistake": "「至少1次」仍把0次組別加進去是這類資料題中很常見的錯誤想法",
    "concept": "次數分配表記錄各組資料出現幾次，可從表中讀出總次數、最多組別與累計次數",
    "tags": [
      "統計",
      "次數分配表",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s002-v005",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "frequency-table",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班數學成績次數表：50−59有2人、60−69有5人、70−79有18人、80−89有10人、90−99有3人。未滿70分有多少人？",
    "choices": [
      "7",
      "5",
      "10",
      "2"
    ],
    "answerIndex": 0,
    "explanation": "未滿70分只包含50−59與60−69，2+5=7人。5只算60−69，漏掉50−59的2人。2只算50−59，漏掉60−69的5人。10不是這兩組次數的總和。「未滿70分」不含70分本身，和「70分以下」若含70分的說法不同，本題要用未滿70分讀表。",
    "steps": [
      "未滿70分只含50−59、60−69。",
      "2+5=7人。",
      "共7人。"
    ],
    "commonMistake": "把「70分以下」和「未滿70分」混用，或漏加其中一組",
    "concept": "次數分配表記錄各組資料出現幾次，可從表中讀出總次數、最多組別與累計次數",
    "tags": [
      "統計",
      "次數分配表",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s002-v006",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "frequency-table",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某調查最愛水果次數表：蘋果18、香蕉12、橘子8、其他7。蘋果占百分之幾？",
    "choices": [
      "36",
      "40",
      "45",
      "50"
    ],
    "answerIndex": 1,
    "explanation": "總次數18+12+8+7=45，蘋果18次，18÷45×100=40%。36是18÷50誤用錯誤分母50；45把總次數45當成百分比本身；50是18÷36之類亂除。算占比時分母要用全部45次，分子是蘋果18次。",
    "steps": [
      "總次數45次。",
      "蘋果18次。",
      "18÷45×100=40%。"
    ],
    "commonMistake": "分母用錯誤的總次數，百分比基準不對",
    "concept": "次數分配表記錄各組資料出現幾次，可從表中讀出總次數、最多組別與累計次數",
    "tags": [
      "統計",
      "次數分配表",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s002-v007",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "frequency-table",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班每日運動分鐘次數表：0−10有4人、11−20有9人、21−30有14人、31−40有8人。21分鐘以上有多少人？",
    "choices": [
      "18",
      "26",
      "22",
      "14"
    ],
    "answerIndex": 2,
    "explanation": "21分鐘以上包含21−30與31−40兩組，14+8=22人。18把31−40的8人誤換成0−10的4人；26在正確兩組之外又多加0−10的4人；14只計21−30，漏掉31−40。",
    "steps": [
      "21以上含21−30、31−40。",
      "14+8=22。",
      "共22人。"
    ],
    "commonMistake": "邊界組別判斷錯誤，少加或多加一組",
    "concept": "次數分配表記錄各組資料出現幾次，可從表中讀出總次數、最多組別與累計次數",
    "tags": [
      "統計",
      "次數分配表",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s002-v008",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "frequency-table",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班寵物次數表：沒有12人、貓8人、狗15人、其他5人。有養寵物的人占百分之幾？",
    "choices": [
      "60",
      "65",
      "55",
      "70"
    ],
    "answerIndex": 3,
    "explanation": "有養寵物者共有8+15+5=28人，全班共有12+8+15+5=40人，因此28÷40×100=70%。60、65與55都不是28除以40的結果；分子只能計入有養寵物的28人，分母要用全班40人。",
    "steps": [
      "有寵物28人，總40人。",
      "28÷40×100。",
      "占70%。"
    ],
    "commonMistake": "沒養寵物的人數也加進分子，或分母只用部分組",
    "concept": "次數分配表記錄各組資料出現幾次，可從表中讀出總次數、最多組別與累計次數",
    "tags": [
      "統計",
      "次數分配表",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s002-v009",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "frequency-table",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班零用錢次數表：99元以下8人、100−199元15人、200−299元12人、300元以上5人。未滿200元有多少人？",
    "choices": [
      "23",
      "35",
      "40",
      "27"
    ],
    "answerIndex": 0,
    "explanation": "未滿200元包含99元以下與100−199元，8+15=23人。35誤把200−299元的12人也算入。40把全部組別都加進去。27不是8與15的總和。各組區間互不重疊，讀「未滿200元」只取低於200的兩組。",
    "steps": [
      "未滿200元含99以下、100−199。",
      "8+15=23人。",
      "共23人。"
    ],
    "commonMistake": "未滿200元卻把200−299元那組也算進去",
    "concept": "次數分配表記錄各組資料出現幾次，可從表中讀出總次數、最多組別與累計次數",
    "tags": [
      "統計",
      "次數分配表",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s002-v010",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "frequency-table",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班最愛科目次數表：國文6、英文9、數學15、自然8、社會7。數學比英文多幾人？",
    "choices": [
      "8",
      "6",
      "4",
      "10"
    ],
    "answerIndex": 1,
    "explanation": "數學15人、英文9人，15−9=6人。8是把社會科7人當成比較對象後算15−7；4與10都不是數學15人減英文9人的結果。",
    "steps": [
      "數學15人，英文9人。",
      "15−9=6。",
      "多6人。"
    ],
    "commonMistake": "比較兩組次數時加總代替相減，或拿錯組別",
    "concept": "次數分配表記錄各組資料出現幾次，可從表中讀出總次數、最多組別與累計次數",
    "tags": [
      "統計",
      "次數分配表",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s002-v011",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "frequency-table",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班睡眠時數次數表：5以下2人、6有8人、7有12人、8有10人、9以上3人。睡7小時或以上的有幾人？",
    "choices": [
      "22",
      "30",
      "25",
      "15"
    ],
    "answerIndex": 2,
    "explanation": "睡7小時或以上包含7小時12人、8小時10人與9小時以上3人，合計12+10+3=25人。22漏加9小時以上3人；30誤加6小時8人並漏掉9小時以上3人；15只加7小時與9小時以上兩組。",
    "steps": [
      "7或以上含7、8、9以上。",
      "12+10+3=25。",
      "共25人。"
    ],
    "commonMistake": "「或以上」漏加較高組別，或誤含較低組別",
    "concept": "次數分配表記錄各組資料出現幾次，可從表中讀出總次數、最多組別與累計次數",
    "tags": [
      "統計",
      "次數分配表",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s002-v012",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "frequency-table",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班鞋號次數表：36有3人、37有7人、38有11人、39有6人、40有3人。若報告寫「多數同學穿38號」，合理嗎？",
    "choices": [
      "不合理，應看平均",
      "不合理，38不是中位",
      "合理，因38在中間",
      "合理，38號人數最多"
    ],
    "answerIndex": 3,
    "explanation": "各組次數11最大，對應38號，說多數穿38合理。「應看平均」與「38在中間」都不是判斷多數的標準；次數最多即代表人數最多的組別。",
    "steps": [
      "讀出各組次數3、7、11、6、3。",
      "11最大對應38號。",
      "多數穿38號合理。"
    ],
    "commonMistake": "以組別位置或平均代替次數最多來判斷多數",
    "concept": "次數分配表記錄各組資料出現幾次，可從表中讀出總次數、最多組別與累計次數",
    "tags": [
      "統計",
      "次數分配表",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u09-s003-v001",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "bar-chart-text",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長條圖資料：A班40人、B班55人、C班35人。三班合計多少人？",
    "choices": [
      "130",
      "120",
      "140",
      "125"
    ],
    "answerIndex": 0,
    "explanation": "A班40人、B班55人、C班35人，40+55+35=130人。120、125與140都不是三班人數的正確總和；120少算10人、125少算5人、140多算10人，都是加法計算錯誤。",
    "steps": [
      "讀出A40、B55、C35。",
      "三數相加。",
      "合計130人。"
    ],
    "commonMistake": "加總各類別時漏掉某一班的人數",
    "concept": "長條圖以文字描述各類別數量，讀圖時比較柱高對應的數值，可求總量、差量或最多類別",
    "tags": [
      "統計",
      "長條圖資料判讀",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s003-v002",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "bar-chart-text",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長條圖資料：週一售120件、週二售95件、週三售110件。週一比週二多幾件？",
    "choices": [
      "15",
      "25",
      "30",
      "20"
    ],
    "answerIndex": 1,
    "explanation": "週一120件、週二95件，120−95=25件。15是誤用週三110件減週二95件；30與20也不是120減95的結果。長條圖比較指定兩類時，只使用週一120件與週二95件，週三資料不列入本題運算。",
    "steps": [
      "週一120件，週二95件。",
      "120−95=25。",
      "多25件。"
    ],
    "commonMistake": "比較時拿錯類別相減，或加總代替相減",
    "concept": "長條圖以文字描述各類別數量，讀圖時比較柱高對應的數值，可求總量、差量或最多類別",
    "tags": [
      "統計",
      "長條圖資料判讀",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s003-v003",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "bar-chart-text",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長條圖資料：蘋果汁80杯、柳橙汁65杯、葡萄汁45杯、其他30杯。哪種銷量最高？",
    "choices": [
      "柳橙汁",
      "葡萄汁",
      "蘋果汁",
      "其他"
    ],
    "answerIndex": 2,
    "explanation": "四種銷量依序為80、65、45、30杯，其中80最大，所以蘋果汁銷量最高。柳橙汁65杯、葡萄汁45杯與其他30杯都低於80杯；選其他飲料表示沒有完整比較四個數值。",
    "steps": [
      "讀出四類銷量80、65、45、30。",
      "80最大。",
      "蘋果汁銷量最高。"
    ],
    "commonMistake": "只看第一類或最後一類，沒比較全部數值",
    "concept": "長條圖以文字描述各類別數量，讀圖時比較柱高對應的數值，可求總量、差量或最多類別",
    "tags": [
      "統計",
      "長條圖資料判讀",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s003-v004",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "bar-chart-text",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長條圖資料：一月15萬、二月18萬、三月22萬、四月20萬。二月到三月成長多少萬？",
    "choices": [
      "3",
      "5",
      "2",
      "4"
    ],
    "answerIndex": 3,
    "explanation": "二月18萬、三月22萬，22−18=4萬。3、5與2都不是22減18的結果；題目指定比較二月到三月，因此一月與四月的資料不應代入本題。",
    "steps": [
      "二月18萬，三月22萬。",
      "22−18=4。",
      "成長4萬。"
    ],
    "commonMistake": "成長量用錯月份相減，或拿四月代替三月",
    "concept": "長條圖以文字描述各類別數量，讀圖時比較柱高對應的數值，可求總量、差量或最多類別",
    "tags": [
      "統計",
      "長條圖資料判讀",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s003-v005",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "bar-chart-text",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長條圖資料：籃球社30人、足球社25人、排球社20人、桌球社15人。球類社團共多少人？",
    "choices": [
      "90",
      "75",
      "85",
      "70"
    ],
    "answerIndex": 0,
    "explanation": "四個社團共有30+25+20+15=90人。75漏加桌球社15人；70只加籃球、足球與桌球三組，漏掉排球社20人；85不是四組人數的正確總和。",
    "steps": [
      "四社人數30、25、20、15。",
      "全部相加。",
      "共90人。"
    ],
    "commonMistake": "加總社團人數時漏掉某一類別",
    "concept": "長條圖以文字描述各類別數量，讀圖時比較柱高對應的數值，可求總量、差量或最多類別",
    "tags": [
      "統計",
      "長條圖資料判讀",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s003-v006",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "bar-chart-text",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長條圖資料：國文85分、英文78分、數學92分、自然88分。數學比英文高幾分？",
    "choices": [
      "10",
      "14",
      "12",
      "16"
    ],
    "answerIndex": 1,
    "explanation": "題目只比較數學與英文，所以算92−78=14分。10、12、16都不是這兩科分數的差。這題是兩類差量，不是把國文85、自然88也加進去算總分。",
    "steps": [
      "數學92分，英文78分。",
      "92−78=14。",
      "高14分。"
    ],
    "commonMistake": "比較兩科時拿錯科目分數相減",
    "concept": "長條圖以文字描述各類別數量，讀圖時比較柱高對應的數值，可求總量、差量或最多類別",
    "tags": [
      "統計",
      "長條圖資料判讀",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s003-v007",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "bar-chart-text",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長條圖資料：東區50戶、西區42戶、南區38戶、北區45戶。最多與最少相差幾戶？",
    "choices": [
      "10",
      "15",
      "12",
      "8"
    ],
    "answerIndex": 2,
    "explanation": "東區50戶最多、南區38戶最少，最多與最少相差50−38=12戶。8是東區50減西區42，只比較到次高值；10與15都不是最大值50減最小值38的結果。",
    "steps": [
      "最多50，最少38。",
      "50−38=12。",
      "相差12戶。"
    ],
    "commonMistake": "沒先找最大最小，直接用任意兩區相減",
    "concept": "長條圖以文字描述各類別數量，讀圖時比較柱高對應的數值，可求總量、差量或最多類別",
    "tags": [
      "統計",
      "長條圖資料判讀",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s003-v008",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "bar-chart-text",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長條圖資料：春假旅遊：北部120人、中部85人、南部95人、東部40人。南部占全部百分之幾？",
    "choices": [
      "26",
      "30",
      "25",
      "28"
    ],
    "answerIndex": 3,
    "explanation": "四區總人數為120+85+95+40=340人，南部有95人，95÷340×100約為27.9%，四捨五入得28%。所以26、30與25都不是95占340的正確百分比。",
    "steps": [
      "總人340人。",
      "南部95人。",
      "95÷340×100≈28%。"
    ],
    "commonMistake": "百分比分母不是四區人數總和",
    "concept": "長條圖以文字描述各類別數量，讀圖時比較柱高對應的數值，可求總量、差量或最多類別",
    "tags": [
      "統計",
      "長條圖資料判讀",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s003-v009",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "bar-chart-text",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長條圖資料：1月200元、2月240元、3月180元、4月220元。平均每月支出多少元？",
    "choices": [
      "210",
      "200",
      "220",
      "215"
    ],
    "answerIndex": 0,
    "explanation": "四個月200+240+180+220=840元，840÷4=210元。200只拿一月數字。220只拿四月數字。215是840÷4除法算錯。月平均要把四個月都列入，加總840元後再除以4，不能只取其中一個月。",
    "steps": [
      "四個月加總840元。",
      "除以4個月。",
      "平均210元。"
    ],
    "commonMistake": "沒加總四個月就直接取某一月或估算",
    "concept": "長條圖以文字描述各類別數量，讀圖時比較柱高對應的數值，可求總量、差量或最多類別",
    "tags": [
      "統計",
      "長條圖資料判讀",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s003-v010",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "bar-chart-text",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長條圖資料：紅茶60杯、綠茶45杯、奶茶55杯、咖啡40杯。奶茶比紅茶少幾杯？",
    "choices": [
      "10",
      "5",
      "15",
      "20"
    ],
    "answerIndex": 1,
    "explanation": "紅茶60杯、奶茶55杯，奶茶比紅茶少60−55=5杯。10是誤用奶茶55減綠茶45；15是奶茶55減咖啡40；20是紅茶60減咖啡40，三者都拿錯比較對象。",
    "steps": [
      "紅茶60杯，奶茶55杯。",
      "60−55=5。",
      "奶茶少5杯。"
    ],
    "commonMistake": "少幾杯的方向搞反，用少減多",
    "concept": "長條圖以文字描述各類別數量，讀圖時比較柱高對應的數值，可求總量、差量或最多類別",
    "tags": [
      "統計",
      "長條圖資料判讀",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s003-v011",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "bar-chart-text",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長條圖資料：五年級120人、六年級135人、七年級128人。若海報只畫六年級柱最高並寫「全校大多數」，合理嗎？",
    "choices": [
      "合理，六年級人最多",
      "合理，柱最高即多數",
      "不合理，只比三個年級且未必占多數",
      "不合理，應看平均"
    ],
    "answerIndex": 2,
    "explanation": "六年級135在這三個年級中最多，但海報說「全校大多數」範圍超出資料，且未含其他年級。柱最高只代表這三組中最多，不能推論全校。",
    "steps": [
      "資料只有三個年級。",
      "六年級135在三組中最多。",
      "不能推論全校大多數。"
    ],
    "commonMistake": "把部分類別的最高誤當成整體大多數",
    "concept": "長條圖以文字描述各類別數量，讀圖時比較柱高對應的數值，可求總量、差量或最多類別",
    "tags": [
      "統計",
      "長條圖資料判讀",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s003-v012",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "bar-chart-text",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長條圖資料：甲店日銷300元、乙店250元、丙店280元。老闆說「平均至少290元」，這說法成立嗎？",
    "choices": [
      "成立，丙店接近290",
      "成立，甲店超過290",
      "不成立，應看中位",
      "不成立，平均約277元"
    ],
    "answerIndex": 3,
    "explanation": "三店平均(300+250+280)÷3≈276.7元，不到290元。甲店300雖超過290，但題目問三店平均不是單店最高。丙店280也沒接近290，平均約277元。277元仍低於290元門檻。250元是乙店單店不是三店平均。",
    "steps": [
      "三店加總830元。",
      "830÷3≈277元。",
      "不到290，說法不成立。"
    ],
    "commonMistake": "用單一類別最高代替整體平均來判斷",
    "concept": "長條圖以文字描述各類別數量，讀圖時比較柱高對應的數值，可求總量、差量或最多類別",
    "tags": [
      "統計",
      "長條圖資料判讀",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u09-s004-v001",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "line-chart-text",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "折線圖資料：1月10度、2月12度、3月15度、4月13度。3月比1月高幾度？",
    "choices": [
      "5",
      "3",
      "2",
      "4"
    ],
    "answerIndex": 0,
    "explanation": "3月15度、1月10度，3月比1月高15−10=5度。3是誤算3月與2月的差；2是2月與1月的差；而4不是15減10的結果。",
    "steps": [
      "3月15度，1月10度。",
      "15−10=5。",
      "高5度。"
    ],
    "commonMistake": "比較時拿錯月份或只比相鄰兩點",
    "concept": "折線圖以文字描述各時間點數值，可觀察升降趨勢、相鄰差量與期間總變化",
    "tags": [
      "統計",
      "折線圖資料判讀",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s004-v002",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "line-chart-text",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "折線圖資料：週一售50件、週二55件、週三48件、週四52件。週二到週三變化多少件？",
    "choices": [
      "7",
      "−7",
      "3",
      "−3"
    ],
    "answerIndex": 1,
    "explanation": "週二55件到週三48件，變化量用後值減前值，48−55=−7件，表示減少7件。7把相減方向顛倒；3與−3都不是48減55的結果。",
    "steps": [
      "週二55，週三48。",
      "48−55=−7。",
      "減少7件。"
    ],
    "commonMistake": "相鄰變化方向搞反，用前期減後期",
    "concept": "折線圖以文字描述各時間點數值，可觀察升降趨勢、相鄰差量與期間總變化",
    "tags": [
      "統計",
      "折線圖資料判讀",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s004-v003",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "line-chart-text",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "折線圖資料：6時20人、8時35人、10時42人、12時38人。哪個時段人數最多？",
    "choices": [
      "8時",
      "12時",
      "10時",
      "6時"
    ],
    "answerIndex": 2,
    "explanation": "比較20、35、42、38，42最大，10時最多。8時是35。12時是38。6時是20，都不是最高。要在6、8、10、12四個時點中找最大人數42。折線圖找最高點時，要在題幹列出的所有時點中比較人數。",
    "steps": [
      "讀出20、35、42、38。",
      "42最大。",
      "10時人數最多。"
    ],
    "commonMistake": "只看起點或終點，沒比較全部時點",
    "concept": "折線圖以文字描述各時間點數值，可觀察升降趨勢、相鄰差量與期間總變化",
    "tags": [
      "統計",
      "折線圖資料判讀",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s004-v004",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "line-chart-text",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "折線圖資料：第1週80元、第2週90元、第3週85元、第4週95元。四週平均支出多少？",
    "choices": [
      "85",
      "90",
      "88",
      "87.5"
    ],
    "answerIndex": 3,
    "explanation": "四週80+90+85+95=350元，350÷4=87.5元。85只取第3週。90只取第2週。88是350÷4除法算錯。四週金額都要列入，加總350元後再除以4週，不能只取其中一週數字來計算。",
    "steps": [
      "四週加總350元。",
      "除以4週。",
      "平均87.5元。"
    ],
    "commonMistake": "沒加總四週就直接取某一週當平均",
    "concept": "折線圖以文字描述各時間點數值，可觀察升降趨勢、相鄰差量與期間總變化",
    "tags": [
      "統計",
      "折線圖資料判讀",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s004-v005",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "line-chart-text",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "折線圖資料：1月200元、2月220元、3月240元、4月260元。1月到4月共增加多少元？",
    "choices": [
      "60",
      "40",
      "80",
      "50"
    ],
    "answerIndex": 0,
    "explanation": "1月為200元、4月為260元，期間共增加260−200=60元。40只計算1月到3月的增加量；80與50都不是4月260減1月200的結果。",
    "steps": [
      "1月200，4月260。",
      "260−200=60。",
      "共增加60元。"
    ],
    "commonMistake": "期間變化只算相鄰一段，沒用終點減起點",
    "concept": "折線圖以文字描述各時間點數值，可觀察升降趨勢、相鄰差量與期間總變化",
    "tags": [
      "統計",
      "折線圖資料判讀",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s004-v006",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "line-chart-text",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "折線圖資料：週一95分、週二88分、週三92分、週四90分。最高與最低差幾分？",
    "choices": [
      "5",
      "7",
      "8",
      "4"
    ],
    "answerIndex": 1,
    "explanation": "四天中最高是95分、最低是88分，最高與最低相差95−88=7分。5是95減週四90；4是週三92減最低88；8不是95減88的結果。",
    "steps": [
      "最高95，最低88。",
      "95−88=7。",
      "差7分。"
    ],
    "commonMistake": "全距用相鄰兩點差代替最大減最小",
    "concept": "折線圖以文字描述各時間點數值，可觀察升降趨勢、相鄰差量與期間總變化",
    "tags": [
      "統計",
      "折線圖資料判讀",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s004-v007",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "line-chart-text",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "折線圖資料：上午8時30人、10時45人、12時50人、下午2時40人。12時比10時多幾人？",
    "choices": [
      "10",
      "3",
      "5",
      "8"
    ],
    "answerIndex": 2,
    "explanation": "比較12時與10時的人數：12時有50人、10時有45人，因此50−45=5人。10是誤拿12時50人與下午2時40人相減；3與8都不是50減45的結果。",
    "steps": [
      "12時50人，10時45人。",
      "50−45=5。",
      "多5人。"
    ],
    "commonMistake": "相鄰比較拿錯時點，或加總代替相減",
    "concept": "折線圖以文字描述各時間點數值，可觀察升降趨勢、相鄰差量與期間總變化",
    "tags": [
      "統計",
      "折線圖資料判讀",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s004-v008",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "line-chart-text",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "折線圖資料：1月15件、2月18件、3月22件、4月19件、5月25件。哪兩個相鄰月份增幅最大？",
    "choices": [
      "3月到4月",
      "2月到3月",
      "1月到2月",
      "4月到5月"
    ],
    "answerIndex": 3,
    "explanation": "相鄰增幅：1→2增3、2→3增4、3→4減3、4→5增6，4到5月增6最大。錯選3到4月是下降不是增幅，1到2月只增3件，2到3月只增4件。須逐段算相鄰差，下降段不能當增幅最大。",
    "steps": [
      "算各相鄰差：3、4、−3、6。",
      "6最大。",
      "4月到5月增幅最大。"
    ],
    "commonMistake": "只看終點高低，沒算相鄰兩點差量",
    "concept": "折線圖以文字描述各時間點數值，可觀察升降趨勢、相鄰差量與期間總變化",
    "tags": [
      "統計",
      "折線圖資料判讀",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s004-v009",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "line-chart-text",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "折線圖資料：週一至週五讀書分鐘：30、45、40、50、35。五天共讀幾分鐘？",
    "choices": [
      "200",
      "180",
      "210",
      "190"
    ],
    "answerIndex": 0,
    "explanation": "五天讀書時間合計為30+45+40+50+35=200分鐘。180、210與190都不是這五個數的正確總和；題目要求五天合計，五天數值缺一不可。",
    "steps": [
      "五天30、45、40、50、35。",
      "全部相加。",
      "共200分鐘。"
    ],
    "commonMistake": "加總各時點時漏掉某一天是這類資料題中很常見的錯誤想法",
    "concept": "折線圖以文字描述各時間點數值，可觀察升降趨勢、相鄰差量與期間總變化",
    "tags": [
      "統計",
      "折線圖資料判讀",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s004-v010",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "line-chart-text",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "折線圖資料：1月100、2月120、3月110、4月130、5月125。3月比2月多還是少？",
    "choices": [
      "多10",
      "少10",
      "一樣",
      "少5"
    ],
    "answerIndex": 1,
    "explanation": "2月120件、3月110件，110−120=−10件，3月少10件。「多10」方向反了。少5則差值不是10。相鄰兩月用後月3月110減前月2月120。相鄰兩月比較時用後月減前月，正負號代表增加或減少。",
    "steps": [
      "2月120，3月110。",
      "110−120=−10。",
      "3月少10。"
    ],
    "commonMistake": "升降判斷方向搞反，或用絕對值忽略增減",
    "concept": "折線圖以文字描述各時間點數值，可觀察升降趨勢、相鄰差量與期間總變化",
    "tags": [
      "統計",
      "折線圖資料判讀",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s004-v011",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "line-chart-text",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "折線圖資料：六個月體重：48、49、51、50、52、53公斤。若只報「持續上升」，合理嗎？",
    "choices": [
      "合理，終點比起點高",
      "合理，整體趨勢向上",
      "不合理，中間有下降",
      "不合理，應看平均"
    ],
    "answerIndex": 2,
    "explanation": "3到4月50比51少，並非每段都上升。終點53高於起點48不能說明每段上升；整體向上忽略了中間下降。折線圖判斷趨勢要逐段看相鄰變化。",
    "steps": [
      "逐段看變化。",
      "3到4月有下降。",
      "「持續上升」不成立。"
    ],
    "commonMistake": "只看起點終點，忽略中間曾下降",
    "concept": "折線圖以文字描述各時間點數值，可觀察升降趨勢、相鄰差量與期間總變化",
    "tags": [
      "統計",
      "折線圖資料判讀",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s004-v012",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "line-chart-text",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "折線圖資料：四週測驗：70、75、72、78分。老師說「每週都進步」，這說法合理嗎？",
    "choices": [
      "合理，第4週最高",
      "合理，平均有上升",
      "不合理，應看總和",
      "不合理，第3週比第2週低"
    ],
    "answerIndex": 3,
    "explanation": "第2週75、第3週72，第3週退步3分，並非每週進步。第4週78最高只代表最後一週；平均上升也不能代表每週都進步。文字要對照各段變化。",
    "steps": [
      "比較相鄰週次。",
      "第3週72低於第2週75。",
      "「每週都進步」不成立。"
    ],
    "commonMistake": "用最高或平均代替逐段檢查是否進步",
    "concept": "折線圖以文字描述各時間點數值，可觀察升降趨勢、相鄰差量與期間總變化",
    "tags": [
      "統計",
      "折線圖資料判讀",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u09-s005-v001",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "pie-chart-percent",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "圓形圖百分比：蘋果40%、香蕉30%、橘子20%、其他10%。蘋果比香蕉多百分之幾？",
    "choices": [
      "10",
      "30",
      "40",
      "70"
    ],
    "answerIndex": 0,
    "explanation": "蘋果占40%、香蕉占30%，題目問蘋果比香蕉多幾個百分點，所以算40−30=10。30和40都只是單一類別的占比；70則把兩類相加，和「多多少」的語意不同。",
    "steps": [
      "蘋果40%，香蕉30%。",
      "40−30=10。",
      "多10個百分點。"
    ],
    "commonMistake": "把占比本身當差值，或把兩部分占比相加",
    "concept": "圓形圖以百分比表示各部分占整體比例，全部百分比相加為100，可換算實際數量",
    "tags": [
      "統計",
      "圓形圖百分比",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s005-v002",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "pie-chart-percent",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "圓形圖百分比：步行25%、單車35%、公車30%、其他10%。單車占多少？",
    "choices": [
      "25",
      "35",
      "30",
      "65"
    ],
    "answerIndex": 1,
    "explanation": "圓形圖文字直接讀出單車占35%。25是步行占比；30是公車占比；65則把35與30兩類相加。65把公車30%也加進單車。這題只問單車占比，直接讀35%即可。",
    "steps": [
      "找單車對應百分比。",
      "單車35%。",
      "占35%。"
    ],
    "commonMistake": "把其他類別占比誤當成題目所問類別",
    "concept": "圓形圖以百分比表示各部分占整體比例，全部百分比相加為100，可換算實際數量",
    "tags": [
      "統計",
      "圓形圖百分比",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s005-v003",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "pie-chart-percent",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "圓形圖百分比：國文30%、英文25%、數學25%、自然20%。國文與英文合計占百分之幾？",
    "choices": [
      "50",
      "45",
      "55",
      "60"
    ],
    "answerIndex": 2,
    "explanation": "國文30%加英文25%，30+25=55%。50漏加5個百分點。45只算國文30%加自然20%。60多加5。要把國文30%與英文25%兩項百分比相加。兩項占比相加時，要把題目指定的兩個百分比直接相加。",
    "steps": [
      "國文30%，英文25%。",
      "30+25=55。",
      "合計55%。"
    ],
    "commonMistake": "合計占比漏加某一類，或加了不相關類別",
    "concept": "圓形圖以百分比表示各部分占整體比例，全部百分比相加為100，可換算實際數量",
    "tags": [
      "統計",
      "圓形圖百分比",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s005-v004",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "pie-chart-percent",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "圓形圖百分比：A占45%、B占30%、C占25%。若總數200人，A有多少人？",
    "choices": [
      "80",
      "100",
      "45",
      "90"
    ],
    "answerIndex": 3,
    "explanation": "A占45%，200×45%=90人。80是200×40%誤算。100是200×50%。45把占比45%當成人數。人數要用總人數200乘45%，不能把45%當90以外的數。由占比求人數時，用總人數乘上該項百分比，不能把占比當人數。",
    "steps": [
      "總數200人，A占45%。",
      "200×0.45=90。",
      "A有90人。"
    ],
    "commonMistake": "百分比換算時直接用占比數字當人數",
    "concept": "圓形圖以百分比表示各部分占整體比例，全部百分比相加為100，可換算實際數量",
    "tags": [
      "統計",
      "圓形圖百分比",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s005-v005",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "pie-chart-percent",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "圓形圖百分比：紅40%、藍35%、綠15%、黃10%。藍比綠多百分之幾？（以綠為基準）",
    "choices": [
      "133",
      "20",
      "35",
      "15"
    ],
    "answerIndex": 0,
    "explanation": "藍35%、綠15%，差20個百分點。以綠15%為基準，增加率20÷15×100≈133%。20是差值不是增加率。35、15是占比本身。增加率要把差值除以基準占比，不能把差值本身當增加率。",
    "steps": [
      "藍35%，綠15%，差20。",
      "基準綠15%。",
      "20÷15×100≈133%。"
    ],
    "commonMistake": "增加率基準搞錯，用百分點差當增加率",
    "concept": "圓形圖以百分比表示各部分占整體比例，全部百分比相加為100，可換算實際數量",
    "tags": [
      "統計",
      "圓形圖百分比",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s005-v006",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "pie-chart-percent",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "圓形圖百分比：東30%、西25%、南25%、北20%。南與北合計占多少？",
    "choices": [
      "50",
      "45",
      "40",
      "55"
    ],
    "answerIndex": 1,
    "explanation": "南25%加北20%，25+20=45%。50多加了5。40少加5。55誤加東區30%。題目只問南、北兩區，不能把東30%或西25%也加進去。這題只問南區與北區，不能把東區或西區的占比也加進去。",
    "steps": [
      "南25%，北20%。",
      "25+20=45。",
      "合計45%。"
    ],
    "commonMistake": "合計占比加了不相關區域是這類資料題中很常見的錯誤想法",
    "concept": "圓形圖以百分比表示各部分占整體比例，全部百分比相加為100，可換算實際數量",
    "tags": [
      "統計",
      "圓形圖百分比",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s005-v007",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "pie-chart-percent",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "圓形圖百分比：飯50%、麵30%、其他20%。總票400票，麵類有多少票？",
    "choices": [
      "150",
      "200",
      "120",
      "80"
    ],
    "answerIndex": 2,
    "explanation": "麵類30%，400×30%=120票。150像400×37.5%。200像400×50%。80則占比用錯。總票400乘30%得120票，不能用150或200推算。由總票數與占比求票數時，用總票數乘上該類占比即可，不能把占比當票數。",
    "steps": [
      "總票400，麵30%。",
      "400×0.3=120。",
      "麵類120票。"
    ],
    "commonMistake": "換算時拿錯類別的占比是這類資料題中很常見的錯誤想法",
    "concept": "圓形圖以百分比表示各部分占整體比例，全部百分比相加為100，可換算實際數量",
    "tags": [
      "統計",
      "圓形圖百分比",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s005-v008",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "pie-chart-percent",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "圓形圖百分比：甲35%、乙25%、丙20%、丁20%。甲比乙多多少百分點？",
    "choices": [
      "35",
      "25",
      "60",
      "10"
    ],
    "answerIndex": 3,
    "explanation": "甲35減乙25，35−25=10個百分點。35是甲占比本身；25是乙占比；60是35+25。百分點差就是兩占比相減。兩部分占比直接相減得百分點差，不是把占比相加。",
    "steps": [
      "甲35%，乙25%。",
      "35−25=10。",
      "多10個百分點。"
    ],
    "commonMistake": "把占比本身當差值是這類資料題中很常見的錯誤想法",
    "concept": "圓形圖以百分比表示各部分占整體比例，全部百分比相加為100，可換算實際數量",
    "tags": [
      "統計",
      "圓形圖百分比",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s005-v009",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "pie-chart-percent",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "圓形圖百分比：春30%、夏25%、秋25%、冬20%。若夏季120人，全部約多少人？",
    "choices": [
      "480",
      "400",
      "600",
      "360"
    ],
    "answerIndex": 0,
    "explanation": "夏季120人占25%，總人120÷25%=480人。400像120÷30%。600像120÷20%。360是計算錯。480人不是400人或600人。反推總人數要用120除以25%，不能用30%或20%當分母。120除以30%得400，不是480。120除以20%得600，也不是480。",
    "steps": [
      "夏25%是120人。",
      "120÷0.25=480。",
      "全部約480人。"
    ],
    "commonMistake": "已知部分反推總數時除以錯誤占比",
    "concept": "圓形圖以百分比表示各部分占整體比例，全部百分比相加為100，可換算實際數量",
    "tags": [
      "統計",
      "圓形圖百分比",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s005-v010",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "pie-chart-percent",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "圓形圖百分比：A占50%、B占30%、C占20%。C比A少多少百分點？",
    "choices": [
      "20",
      "30",
      "50",
      "70"
    ],
    "answerIndex": 1,
    "explanation": "A占50%、C占20%，50−20=30個百分點。錯選20是把C占比當差值，50是A占比本身，70則把A、C占比相加而不是相減。兩部分占比直接相減得百分點差，不是把占比相加。",
    "steps": [
      "A50%，C20%。",
      "50−20=30。",
      "少30個百分點。"
    ],
    "commonMistake": "少幾個百分點方向搞反，用小減大",
    "concept": "圓形圖以百分比表示各部分占整體比例，全部百分比相加為100，可換算實際數量",
    "tags": [
      "統計",
      "圓形圖百分比",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s005-v011",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "pie-chart-percent",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "圓形圖百分比：支持60%、反對25%、無意見15%。若只報「超過七成支持」，合理嗎？",
    "choices": [
      "合理，60%是多數",
      "合理，60%過半",
      "不合理，60%不到70%",
      "不合理，應看反對"
    ],
    "answerIndex": 2,
    "explanation": "支持占60%，不到70%，說「超過七成」不成立。60%雖是多數，但未達70%；無意見15%不影響這個判斷。圓形圖讀占比後要對照題幹文字是否成立。",
    "steps": [
      "支持占60%。",
      "60%小於70%。",
      "「超過七成」不成立。"
    ],
    "commonMistake": "把過半或多數誤當成題目所說的七成",
    "concept": "圓形圖以百分比表示各部分占整體比例，全部百分比相加為100，可換算實際數量",
    "tags": [
      "統計",
      "圓形圖百分比",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s005-v012",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-data-display",
    "skillId": "pie-chart-percent",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "圓形圖百分比：三類占50%、30%、20%。商家把30%那區放大畫成看起來占一半，這會造成什麼問題？",
    "choices": [
      "改變實際百分比",
      "使總和超過100%",
      "使平均數改變",
      "誇大該類占比的視覺印象"
    ],
    "answerIndex": 3,
    "explanation": "放大區塊會讓30%看起來比實際大，造成視覺誤導。實際百分比仍是30%不變；總和仍100%；平均數不受圖形大小影響。圓形圖面積比例應與百分比一致。",
    "steps": [
      "實際占比仍是30%。",
      "放大只改變視覺。",
      "會誇大該類占比印象。"
    ],
    "commonMistake": "以為改變圖形大小會改變實際百分比",
    "concept": "圓形圖以百分比表示各部分占整體比例，全部百分比相加為100，可換算實際數量",
    "tags": [
      "統計",
      "圓形圖百分比",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u09-s006-v001",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mean-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班5人身高（cm）：150、155、160、158、162。平均身高多少？",
    "choices": [
      "157",
      "155",
      "160",
      "158"
    ],
    "answerIndex": 0,
    "explanation": "五人身高總和為150+155+160+158+162=785公分，因此785÷5=157公分。155、160與158都只是其中一人的身高，不是五人的平均身高。",
    "steps": [
      "五數加總785。",
      "除以5人。",
      "平均157cm。"
    ],
    "commonMistake": "沒加總全部資料就直接除以個數",
    "concept": "算術平均數等於所有資料加總後除以個數，會考常求平均或已知平均反推缺失值",
    "tags": [
      "統計",
      "算術平均數",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s006-v002",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mean-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "小華4天讀書分鐘：30、45、40、50。平均每天讀幾分鐘？",
    "choices": [
      "40",
      "41.25",
      "42",
      "43"
    ],
    "answerIndex": 1,
    "explanation": "四天讀書時間合計為30+45+40+50=165分鐘，165÷4=41.25分鐘。40、42與43都不是165除以4的結果；平均必須先加總四天再除以4。",
    "steps": [
      "四天加總165分鐘。",
      "除以4天。",
      "平均41.25分鐘。"
    ],
    "commonMistake": "平均時漏加某一天的分鐘數",
    "concept": "算術平均數等於所有資料加總後除以個數，會考常求平均或已知平均反推缺失值",
    "tags": [
      "統計",
      "算術平均數",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s006-v003",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mean-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三數平均為12，其中兩數為10、14，第三數是多少？",
    "choices": [
      "10",
      "14",
      "12",
      "16"
    ],
    "answerIndex": 2,
    "explanation": "三數平均為12，所以總和是12×3=36；第三數為36−10−14=12。10與14是已知的兩個數，16會使總和變成40、平均變成13又三分之一，不符合題意。",
    "steps": [
      "三數和12×3=36。",
      "36−10−14=12。",
      "第三數12。"
    ],
    "commonMistake": "反推缺失值時沒先用平均乘個數得總和",
    "concept": "算術平均數等於所有資料加總後除以個數，會考常求平均或已知平均反推缺失值",
    "tags": [
      "統計",
      "算術平均數",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s006-v004",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mean-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班段考平均80分，共30人，總分是多少？",
    "choices": [
      "800",
      "240",
      "2000",
      "2400"
    ],
    "answerIndex": 3,
    "explanation": "平均80分、共有30人，總分為80×30=2400分。800是80×10；2000是80×25；240則不是80乘30的結果。已知平均與人數求總分時要用乘法。",
    "steps": [
      "平均80分，30人。",
      "80×30=2400。",
      "總分2400。"
    ],
    "commonMistake": "已知平均求總和時除以個數而非乘以",
    "concept": "算術平均數等於所有資料加總後除以個數，會考常求平均或已知平均反推缺失值",
    "tags": [
      "統計",
      "算術平均數",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s006-v005",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mean-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "五個數：8、10、12、14、x，平均為12，求x。",
    "choices": [
      "16",
      "14",
      "12",
      "18"
    ],
    "answerIndex": 0,
    "explanation": "五數平均12，總和60。已知8、10、12、14，x=60−8−10−12−14=16。14是已知數之一不是未知數。12是平均本身。18則總和會超過60與平均12矛盾。反推未知數時，總和必須符合平均乘個數，超過就矛盾。",
    "steps": [
      "五數和12×5=60。",
      "減去8、10、12、14得16。",
      "x=16。"
    ],
    "commonMistake": "反推未知數時漏減某一已知數",
    "concept": "算術平均數等於所有資料加總後除以個數，會考常求平均或已知平均反推缺失值",
    "tags": [
      "統計",
      "算術平均數",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s006-v006",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mean-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某店四天營業額平均2500元，四天共多少元？",
    "choices": [
      "2500",
      "10000",
      "7500",
      "5000"
    ],
    "answerIndex": 1,
    "explanation": "四天平均2500元，總額2500×4=10000元。2500是平均本身不是四天總額。7500像2500×3天。5000則天數用錯。四天總額要用平均2500乘4天。多天總額等於日平均乘天數，不能把平均本身當總額。",
    "steps": [
      "平均2500元，4天。",
      "2500×4=10000。",
      "共10000元。"
    ],
    "commonMistake": "把平均數誤當成總額是這類資料題中很常見的錯誤想法",
    "concept": "算術平均數等於所有資料加總後除以個數，會考常求平均或已知平均反推缺失值",
    "tags": [
      "統計",
      "算術平均數",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s006-v007",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mean-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "六個數平均15，總和是多少？",
    "choices": [
      "15",
      "75",
      "90",
      "60"
    ],
    "answerIndex": 2,
    "explanation": "六個數平均15，總和15×6=90。15是平均數本身。75像15×5只乘5個數。60則個數用錯。反推總和時，平均要乘正確的資料個數，不能只乘部分個數。",
    "steps": [
      "平均15，6個數。",
      "15×6=90。",
      "總和90。"
    ],
    "commonMistake": "總和計算時個數用錯是這類資料題中很常見的錯誤想法",
    "concept": "算術平均數等於所有資料加總後除以個數，會考常求平均或已知平均反推缺失值",
    "tags": [
      "統計",
      "算術平均數",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s006-v008",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mean-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班男女生平均身高：男生10人平均165cm、女生15人平均160cm。全班平均約多少？",
    "choices": [
      "165",
      "160",
      "163",
      "162"
    ],
    "answerIndex": 3,
    "explanation": "男生10人共1650、女生15人共2400，全班25人總4050，4050÷25=162公分。165是男生平均；160是女生平均；163是計算錯。全班平均要用兩組總身高除以全班人數。",
    "steps": [
      "男生1650，女生2400。",
      "合4050，25人。",
      "全班平均162cm。"
    ],
    "commonMistake": "分組平均直接對兩平均數求平均",
    "concept": "算術平均數等於所有資料加總後除以個數，會考常求平均或已知平均反推缺失值",
    "tags": [
      "統計",
      "算術平均數",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s006-v009",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mean-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "四數平均18，若加入第五數22，新平均多少？",
    "choices": [
      "18.8",
      "20",
      "19",
      "18"
    ],
    "answerIndex": 0,
    "explanation": "原四個數的總和為18×4=72，加入22後總和為94，共有5個數，所以94÷5=18.8。18是尚未加入新數前的平均；19是把18.8錯誤取整；20不是94除以5的結果。",
    "steps": [
      "原四數和18×4=72。",
      "加22得94，5個數。",
      "新平均18.8。"
    ],
    "commonMistake": "加入新數後沒重算總和，直接對兩平均求平均",
    "concept": "算術平均數等於所有資料加總後除以個數，會考常求平均或已知平均反推缺失值",
    "tags": [
      "統計",
      "算術平均數",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s006-v010",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mean-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某生五次測驗：70、80、85、90、75。若去掉最低分，新平均多少？",
    "choices": [
      "80",
      "82.5",
      "85",
      "83"
    ],
    "answerIndex": 1,
    "explanation": "去掉最低70分後，80+85+90+75=330，330÷4=82.5。80只取其中一次分數。85、83則加總或除法算錯。去掉70這個極值後，要把剩下四次分數加總再除以4，不能直接沿用五次的平均。",
    "steps": [
      "去掉最低70。",
      "剩330分，4次。",
      "新平均82.5。"
    ],
    "commonMistake": "去掉極值後沒重算，仍用原五數平均",
    "concept": "算術平均數等於所有資料加總後除以個數，會考常求平均或已知平均反推缺失值",
    "tags": [
      "統計",
      "算術平均數",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s006-v011",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mean-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班平均75分，小明的80分加入後全班平均變76分，全班原幾人？",
    "choices": [
      "5",
      "3",
      "4",
      "6"
    ],
    "answerIndex": 2,
    "explanation": "設原有n人，75n+80=76(n+1)，解得n=4。檢查其餘人數：原5人時新平均455÷6約75.83；原3人時305÷4=76.25；原6人時530÷7約75.71，只有原4人時380÷5=76。",
    "steps": [
      "設原n人，75n+80=76(n+1)。",
      "解得n=4。",
      "原4人。"
    ],
    "commonMistake": "加入新資料後平均變化列式錯誤",
    "concept": "算術平均數等於所有資料加總後除以個數，會考常求平均或已知平均反推缺失值",
    "tags": [
      "統計",
      "算術平均數",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s006-v012",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mean-basic",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "報告只寫「本班平均85分」但沒說幾人考，讀者能確定總分嗎？",
    "choices": [
      "能，平均就是總分",
      "能，用85乘1",
      "不能，缺最高最低",
      "不能，缺人數無法算總分"
    ],
    "answerIndex": 3,
    "explanation": "只有平均 85 分、沒有人數，無法反推總分，因為總分等於平均乘人數，人數不同總分就不同。讀者不能只憑平均數就確定總分。",
    "steps": [
      "總分=平均×人數。",
      "缺人數。",
      "無法確定總分。"
    ],
    "commonMistake": "以為知道平均就能確定總分，忽略人數",
    "concept": "算術平均數等於所有資料加總後除以個數，會考常求平均或已知平均反推缺失值",
    "tags": [
      "統計",
      "算術平均數",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u09-s007-v001",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "median-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "資料：12、15、18、20、25。中位數是多少？",
    "choices": [
      "18",
      "15",
      "20",
      "17"
    ],
    "answerIndex": 0,
    "explanation": "五個數12、15、18、20、25已由小到大排列，共5筆資料，正中央第3個是18，所以中位數為18。15與20位在中央兩側；17既不是中央值，五數平均也同樣是18。",
    "steps": [
      "由小到大：12、15、18、20、25。",
      "第3個是18。",
      "中位數18。"
    ],
    "commonMistake": "奇數個資料沒取正中央，取了平均",
    "concept": "中位數是資料由小到大排序後位於中間的數值，偶數個取中間兩數平均",
    "tags": [
      "統計",
      "中位數",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s007-v002",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "median-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "資料：8、10、12、14。中位數是多少？",
    "choices": [
      "10",
      "11",
      "12",
      "13"
    ],
    "answerIndex": 1,
    "explanation": "四個數8、10、12、14已排好序，偶數個取中間10與12平均，(10+12)÷2=11。10或12只取其中一個中間數。13則不是10與12的平均。偶數個資料取中位數時，要把中間兩數平均，不能只取其中一個。",
    "steps": [
      "排序8、10、12、14。",
      "中間兩數10、12。",
      "平均11。"
    ],
    "commonMistake": "偶數個資料只取一個中間數，沒取兩數平均",
    "concept": "中位數是資料由小到大排序後位於中間的數值，偶數個取中間兩數平均",
    "tags": [
      "統計",
      "中位數",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s007-v003",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "median-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "資料：5、3、8、6、4。中位數是多少？",
    "choices": [
      "4",
      "6",
      "5",
      "8"
    ],
    "answerIndex": 2,
    "explanation": "先把5、3、8、6、4排成3、4、5、6、8。五個資料正中央第3個是5，中位數是5。4與6是中央左右兩側。8是最大值不能當中位數。求中位數前要先排序，奇數個資料取正中央那個數。",
    "steps": [
      "排序3、4、5、6、8。",
      "第3個是5。",
      "中位數5。"
    ],
    "commonMistake": "沒排序就直接取中間位置的原始數",
    "concept": "中位數是資料由小到大排序後位於中間的數值，偶數個取中間兩數平均",
    "tags": [
      "統計",
      "中位數",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s007-v004",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "median-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "六人得分：70、85、90、75、80、95。中位數是多少？",
    "choices": [
      "80",
      "85",
      "77.5",
      "82.5"
    ],
    "answerIndex": 3,
    "explanation": "六人70、75、80、85、90、95已排序，偶數個取80與85平均，(80+85)÷2=82.5。80或85只取其中一個。77.5像用70與85錯位平均。偶數個資料的中位數是中間兩數的平均，不是只取其中一個。",
    "steps": [
      "排序70、75、80、85、90、95。",
      "中間80、85。",
      "平均82.5。"
    ],
    "commonMistake": "偶數個資料中間兩數取錯位置",
    "concept": "中位數是資料由小到大排序後位於中間的數值，偶數個取中間兩數平均",
    "tags": [
      "統計",
      "中位數",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s007-v005",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "median-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "資料：2、2、2、2、2。中位數是多少？",
    "choices": [
      "2",
      "0",
      "10",
      "4"
    ],
    "answerIndex": 0,
    "explanation": "五個2全部相同，排序後正中央仍是2，中位數就是2。0、10、4都不在這組分數中，不能拿來當中位數。全部相同時中位數仍取正中央那個2。",
    "steps": [
      "五個都是2。",
      "排序後中間是2。",
      "中位數2。"
    ],
    "commonMistake": "全部相同時以為中位數不是該數值",
    "concept": "中位數是資料由小到大排序後位於中間的數值，偶數個取中間兩數平均",
    "tags": [
      "統計",
      "中位數",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s007-v006",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "median-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "七數：10、20、30、40、50、60、70。中位數是多少？",
    "choices": [
      "30",
      "40",
      "50",
      "35"
    ],
    "answerIndex": 1,
    "explanation": "七個數10、20、30、40、50、60、70已排序，奇數個資料取第4個，也就是40。30是第3個、50是第5個。35則像把30與40平均，但七個數不需這樣算。奇數個資料的中位數是正中央那個數，不必把相鄰兩數再平均。",
    "steps": [
      "七數已排序。",
      "第4個是40。",
      "中位數40。"
    ],
    "commonMistake": "奇數個資料誤對中間兩數求平均",
    "concept": "中位數是資料由小到大排序後位於中間的數值，偶數個取中間兩數平均",
    "tags": [
      "統計",
      "中位數",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s007-v007",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "median-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "資料：15、25、35、45。若加入50，中位數變多少？",
    "choices": [
      "30",
      "40",
      "35",
      "32.5"
    ],
    "answerIndex": 2,
    "explanation": "原四個數15、25、35、45的中位數是(25+35)÷2=30。加入50後排成15、25、35、45、50，正中央第3個是35。30是加入前的中位數；40與32.5都不是新資料的中位數。",
    "steps": [
      "加入50後排序。",
      "五數正中央35。",
      "新中位數35。"
    ],
    "commonMistake": "加入新資料後沒重新排序找中位",
    "concept": "中位數是資料由小到大排序後位於中間的數值，偶數個取中間兩數平均",
    "tags": [
      "統計",
      "中位數",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s007-v008",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "median-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "五人身高：160、165、170、155、168。中位數是多少？",
    "choices": [
      "160",
      "168",
      "166.5",
      "165"
    ],
    "answerIndex": 3,
    "explanation": "身高155、160、165、168、170已排序，五人奇數個，正中央第3個是165。160是第2個、168是第4個。166.5像把160與168平均，不是本題中位。奇數個資料的中位數是正中央那個數，不是兩側數字的平均。",
    "steps": [
      "排序155、160、165、168、170。",
      "第3個165。",
      "中位數165。"
    ],
    "commonMistake": "沒排序就取原始順序的中間值",
    "concept": "中位數是資料由小到大排序後位於中間的數值，偶數個取中間兩數平均",
    "tags": [
      "統計",
      "中位數",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s007-v009",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "median-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "八個數：3、7、11、15、19、23、27、31。中位數是多少？",
    "choices": [
      "17",
      "15",
      "19",
      "16"
    ],
    "answerIndex": 0,
    "explanation": "八個數3、7、11、15、19、23、27、31已排序，偶數個取第4、5兩數15與19平均，(15+19)÷2=17。15或19只取單一個。16不是15與19的平均。偶數個資料的中位數是中間兩數的平均，不能只取單一個。",
    "steps": [
      "中間兩數15、19。",
      "(15+19)÷2=17。",
      "中位數17。"
    ],
    "commonMistake": "偶數個資料中間兩數位置數錯",
    "concept": "中位數是資料由小到大排序後位於中間的數值，偶數個取中間兩數平均",
    "tags": [
      "統計",
      "中位數",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s007-v010",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "median-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "資料：100、200、300、400、500、600。中位數與平均數是否相同？",
    "choices": [
      "不同，中位大",
      "相同，都是350",
      "不同，平均大",
      "無法比較"
    ],
    "answerIndex": 1,
    "explanation": "100、200、300、400、500、600成等差數列，偶數個取中間300與400平均得中位350，算術平均也是350。若只取300或400其中一個，不能代表中位數。350同時是中位數與平均數。",
    "steps": [
      "平均350。",
      "中位(300+400)÷2=350。",
      "兩者相同。"
    ],
    "commonMistake": "沒計算就假設中位與平均一定不同",
    "concept": "中位數是資料由小到大排序後位於中間的數值，偶數個取中間兩數平均",
    "tags": [
      "統計",
      "中位數",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s007-v011",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "median-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班15人成績中位數78分。能否由此確定有7人低於78、7人高於78？",
    "choices": [
      "能，正好各半",
      "能，至少7人低於",
      "不能，中位只表中央位置",
      "不能，缺平均"
    ],
    "answerIndex": 2,
    "explanation": "15 人成績的中位 78 只表示排序後第 8 個是 78，不能確定恰有 7 人低於 78、7 人高於 78，因為同分會讓兩側人數改變。把中位當成固定兩側各半會誤判。",
    "steps": [
      "中位是排序中央的值。",
      "同分可能都在78。",
      "不能確定嚴格各半。"
    ],
    "commonMistake": "以為中位兩側人數一定各半且嚴格高低",
    "concept": "中位數是資料由小到大排序後位於中間的數值，偶數個取中間兩數平均",
    "tags": [
      "統計",
      "中位數",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s007-v012",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "median-basic",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "報告寫「中位薪資5萬」但少數人薪資極高，這指標比平均更能代表一般員工嗎？",
    "choices": [
      "不能，中位等於平均",
      "較不能，中位較高",
      "不能，應看眾數",
      "較能，不受極端值影響"
    ],
    "answerIndex": 3,
    "explanation": "少數極端高薪會把平均拉高，中位薪資 5 萬較不受這些極端值影響，更能代表一般員工水準。中位不等於平均；眾數則是另一種指標，不能代替這題的比較。",
    "steps": [
      "極端值拉高平均。",
      "中位較不受影響。",
      "較能代表一般員工。"
    ],
    "commonMistake": "以為中位與平均在任何資料都相同",
    "concept": "中位數是資料由小到大排序後位於中間的數值，偶數個取中間兩數平均",
    "tags": [
      "統計",
      "中位數",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u09-s008-v001",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mode-range-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "資料：3、5、5、7、9。眾數是多少？",
    "choices": [
      "5",
      "3",
      "7",
      "9"
    ],
    "answerIndex": 0,
    "explanation": "3、5、5、7、9中，5出現2次最多，眾數是5。3、7、9各只出現1次，次數較少不能當眾數。眾數要看哪個數出現最多次，不是看最大或最小的數。",
    "steps": [
      "數出各數次數。",
      "5出現2次最多。",
      "眾數5。"
    ],
    "commonMistake": "沒數次數就取最大或最小值當眾數",
    "concept": "眾數是出現次數最多的數值，全距是最大值減最小值，兩者描述資料集中與分散程度",
    "tags": [
      "統計",
      "眾數與全距",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s008-v002",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mode-range-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "五次測驗分數10、15、20、25、30。全距是多少？",
    "choices": [
      "15",
      "20",
      "25",
      "10"
    ],
    "answerIndex": 1,
    "explanation": "五次分數中最大值是30、最小值是10，全距為30−10=20。15是用30減15，誤把第二小的15當成最小值；10是只算20−10；25不是30與10的差。",
    "steps": [
      "最大30，最小10。",
      "30−10=20。",
      "全距20。"
    ],
    "commonMistake": "全距用相鄰兩數差代替最大減最小",
    "concept": "眾數是出現次數最多的數值，全距是最大值減最小值，兩者描述資料集中與分散程度",
    "tags": [
      "統計",
      "眾數與全距",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s008-v003",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mode-range-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "資料：2、4、4、6、4、8。眾數是多少？",
    "choices": [
      "2",
      "6",
      "4",
      "8"
    ],
    "answerIndex": 2,
    "explanation": "2、4、4、6、4、8中，4出現3次最多，眾數是4。2、6、8次數較少。6雖在中間位置但只出現1次。眾數要數出現次數，不能因為某數排在資料中間就當眾數。",
    "steps": [
      "4出現3次。",
      "其他次數較少。",
      "眾數4。"
    ],
    "commonMistake": "眾數取錯，沒完整數出現次數",
    "concept": "眾數是出現次數最多的數值，全距是最大值減最小值，兩者描述資料集中與分散程度",
    "tags": [
      "統計",
      "眾數與全距",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s008-v004",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mode-range-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某次測驗分數12、18、15、22、9。全距是多少？",
    "choices": [
      "10",
      "15",
      "7",
      "13"
    ],
    "answerIndex": 3,
    "explanation": "這組分數中最大值是22、最小值是9，全距為22−9=13。10是用22減12；7是用22減15，兩者都沒有使用最小值9；15不是22與9的差。",
    "steps": [
      "最大22，最小9。",
      "22−9=13。",
      "全距13。"
    ],
    "commonMistake": "沒找最大最小就用任意兩數相減",
    "concept": "眾數是出現次數最多的數值，全距是最大值減最小值，兩者描述資料集中與分散程度",
    "tags": [
      "統計",
      "眾數與全距",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s008-v005",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mode-range-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "鞋店售出尺碼5、5、8、8、10。眾數有幾個？",
    "choices": [
      "2",
      "1",
      "0",
      "3"
    ],
    "answerIndex": 0,
    "explanation": "尺碼5、5、8、8、10中，5和8都出現2次同為眾數，所以有2個眾數。10只出現1次。1個或3個都不符合實際次數分布。有兩個數出現次數相同且最多時，就有兩個眾數。",
    "steps": [
      "5出現2次，8出現2次。",
      "同為最多。",
      "有2個眾數。"
    ],
    "commonMistake": "以為眾數只能有一個是這類資料題中很常見的錯誤想法",
    "concept": "眾數是出現次數最多的數值，全距是最大值減最小值，兩者描述資料集中與分散程度",
    "tags": [
      "統計",
      "眾數與全距",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s008-v006",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mode-range-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "等差數列100、105、110、115、120。全距是多少？",
    "choices": [
      "15",
      "20",
      "10",
      "25"
    ],
    "answerIndex": 1,
    "explanation": "資料中最大值是120、最小值是100，全距為120−100=20。15是只算115−100；10是只算110−100，兩者都沒有使用最大值120；25不是120與100的差。",
    "steps": [
      "最大120，最小100。",
      "120−100=20。",
      "全距20。"
    ],
    "commonMistake": "等差資料誤用公差代替全距",
    "concept": "眾數是出現次數最多的數值，全距是最大值減最小值，兩者描述資料集中與分散程度",
    "tags": [
      "統計",
      "眾數與全距",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s008-v007",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mode-range-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "資料：7、3、7、5、7、9。眾數是多少？",
    "choices": [
      "3",
      "5",
      "7",
      "9"
    ],
    "answerIndex": 2,
    "explanation": "資料中7出現3次，3、5、9各只出現1次，因此出現次數最多的是7，眾數為7。3、5與9的出現次數都少於7，不能作為這組資料的眾數。",
    "steps": [
      "7出現3次。",
      "其他各1次。",
      "眾數7。"
    ],
    "commonMistake": "眾數取第一個或最後一個出現的數",
    "concept": "眾數是出現次數最多的數值，全距是最大值減最小值，兩者描述資料集中與分散程度",
    "tags": [
      "統計",
      "眾數與全距",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s008-v008",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mode-range-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "資料：45、52、38、61、55。全距是多少？",
    "choices": [
      "17",
      "20",
      "15",
      "23"
    ],
    "answerIndex": 3,
    "explanation": "資料中最大值是61、最小值是38，全距為61−38=23。17是用55減38，誤把55當成最大值；20與15都不是61減38的結果。",
    "steps": [
      "最大61，最小38。",
      "61−38=23。",
      "全距23。"
    ],
    "commonMistake": "全距計算時最大或最小找錯",
    "concept": "眾數是出現次數最多的數值，全距是最大值減最小值，兩者描述資料集中與分散程度",
    "tags": [
      "統計",
      "眾數與全距",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s008-v009",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mode-range-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "五個數1、2、3、4、5各出現一次。眾數是多少？",
    "choices": [
      "無眾數",
      "3",
      "1",
      "5"
    ],
    "answerIndex": 0,
    "explanation": "資料中的1、2、3、4、5各出現1次，沒有任何一個數的出現次數高於其他數，所以沒有眾數。3是中位數；1與5分別是最小值與最大值，都不是眾數。",
    "steps": [
      "各數都只出現1次。",
      "沒有最多。",
      "無眾數。"
    ],
    "commonMistake": "全部不同時硬選一個數當眾數",
    "concept": "眾數是出現次數最多的數值，全距是最大值減最小值，兩者描述資料集中與分散程度",
    "tags": [
      "統計",
      "眾數與全距",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s008-v010",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mode-range-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "等差數列20、25、30、35、40。全距是多少？",
    "choices": [
      "0",
      "20",
      "10",
      "5"
    ],
    "answerIndex": 1,
    "explanation": "資料中最大值是40、最小值是20，全距為40−20=20。10是只算30−20；5是只算25−20，兩者都只比較部分資料；0表示沒有差距，與最大值40和最小值20不符。",
    "steps": [
      "最大40，最小20。",
      "40−20=20。",
      "全距20。"
    ],
    "commonMistake": "把公差或部分兩數的差誤當成整組資料的全距",
    "concept": "眾數是出現次數最多的數值，全距是最大值減最小值，兩者描述資料集中與分散程度",
    "tags": [
      "統計",
      "眾數與全距",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s008-v011",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mode-range-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班鞋號：36、37、37、38、39、37。眾數與全距各是多少？",
    "choices": [
      "36；3",
      "37；4",
      "37；3",
      "38；3"
    ],
    "answerIndex": 2,
    "explanation": "鞋號資料中37出現3次最多，所以眾數是37；最大值39、最小值36，全距為39−36=3。「36；3」把最小值36誤當眾數；「37；4」把全距算錯；「38；3」把只出現1次的38誤當眾數。",
    "steps": [
      "37出現3次最多。",
      "最大39最小36。",
      "眾數37，全距3。"
    ],
    "commonMistake": "眾數與全距計算混淆，或次數數錯",
    "concept": "眾數是出現次數最多的數值，全距是最大值減最小值，兩者描述資料集中與分散程度",
    "tags": [
      "統計",
      "眾數與全距",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s008-v012",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "mode-range-basic",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "報告只給全距10卻說「資料非常分散」，合理嗎？",
    "choices": [
      "合理，全距大就分散",
      "不合理，全距小",
      "合理，全距代表分散",
      "不一定，要看資料尺度"
    ],
    "answerIndex": 3,
    "explanation": "全距 10 只表示最大與最小相差 10，不能單靠全距就說「非常分散」，還要看資料個數與分布。全距小也可能資料集中，敘述過度推論。",
    "steps": [
      "全距要相對尺度。",
      "10在不同範圍意義不同。",
      "不能只看數字。"
    ],
    "commonMistake": "不看資料尺度就論斷分散程度",
    "concept": "眾數是出現次數最多的數值，全距是最大值減最小值，兩者描述資料集中與分散程度",
    "tags": [
      "統計",
      "眾數與全距",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u09-s009-v001",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "weighted-average-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某生三科成績：國文80（權重2）、數學90（權重3）、英文70（權重1）。加權平均多少？",
    "choices": [
      "83.33",
      "80",
      "85",
      "82"
    ],
    "answerIndex": 0,
    "explanation": "加權和80×2+90×3+70×1=500，權重和6，500÷6≈83.33分。80是三科(80+90+70)÷3簡單平均。85、82則加權乘法算錯。各項要先乘權重再相加，最後除以權重總和6，不能把三科分數直接平均。",
    "steps": [
      "加權和500。",
      "權重和6。",
      "500÷6≈83.33。"
    ],
    "commonMistake": "加權平均用簡單平均代替，忽略權重",
    "concept": "加權平均依各項權重計算，加權總和除以權重總和，常用於不同人數或分數的班級平均",
    "tags": [
      "統計",
      "加權平均",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s009-v002",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "weighted-average-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "A班20人平均75、B班30人平均85。兩班合計平均多少？",
    "choices": [
      "80",
      "81",
      "82",
      "79"
    ],
    "answerIndex": 1,
    "explanation": "A班20人共1500、B班30人共2550，合4050分、50人，4050÷50=81分。80是(75+85)÷2誤把兩班平均直接平均。82、79是4050÷50算錯。合班平均要用兩班總分相加，再除以總人數，不是兩班平均再平均。",
    "steps": [
      "A總1500，B總2550。",
      "合4050，50人。",
      "平均81。"
    ],
    "commonMistake": "兩班平均直接求平均，沒考慮人數權重",
    "concept": "加權平均依各項權重計算，加權總和除以權重總和，常用於不同人數或分數的班級平均",
    "tags": [
      "統計",
      "加權平均",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s009-v003",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "weighted-average-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "商品混合：A品2公斤每公斤50元、B品3公斤每公斤40元。平均單價多少？",
    "choices": [
      "45",
      "46",
      "44",
      "42"
    ],
    "answerIndex": 2,
    "explanation": "總價2×50+3×40=220元，總重5公斤，220÷5=44元/公斤。45是(50+40)÷2兩單價直接平均；46、42是220÷5算錯。45未把2公斤與3公斤重量納入。混合單價要用總價220除以總重5公斤。",
    "steps": [
      "總價220元。",
      "總重5公斤。",
      "平均44元/公斤。"
    ],
    "commonMistake": "混合平均用兩單價直接求平均",
    "concept": "加權平均依各項權重計算，加權總和除以權重總和，常用於不同人數或分數的班級平均",
    "tags": [
      "統計",
      "加權平均",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s009-v004",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "weighted-average-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三項評分：作業80（占30%）、段考90（占50%）、態度70（占20%）。總評多少？",
    "choices": [
      "84",
      "85",
      "82",
      "83"
    ],
    "answerIndex": 3,
    "explanation": "三項加權分數為80×30%+90×50%+70×20%=24+45+14=83分。84、85與82都不是24、45、14的正確總和；總評必須先將每項分數乘占比，再把三項結果相加。",
    "steps": [
      "24+45+14=83。",
      "權重和100%。",
      "總評83分。"
    ],
    "commonMistake": "加權比例用錯或加權和計算錯",
    "concept": "加權平均依各項權重計算，加權總和除以權重總和，常用於不同人數或分數的班級平均",
    "tags": [
      "統計",
      "加權平均",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s009-v005",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "weighted-average-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某店上午售100件平均50元、下午售200件平均60元。全天平均售價多少？",
    "choices": [
      "56.67",
      "55",
      "57",
      "58"
    ],
    "answerIndex": 0,
    "explanation": "上午100×50=5000、下午200×60=12000，合17000元、300件，17000÷300≈56.67元。55是(50+60)÷2兩時段平均誤算。57、58是除法錯。混合平均要用總價除以總件數，不能把兩時段單價直接平均。",
    "steps": [
      "上午5000，下午12000。",
      "合17000，300件。",
      "平均≈56.67元。"
    ],
    "commonMistake": "全天平均用兩時段平均直接求平均",
    "concept": "加權平均依各項權重計算，加權總和除以權重總和，常用於不同人數或分數的班級平均",
    "tags": [
      "統計",
      "加權平均",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s009-v006",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "weighted-average-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "男生15人平均170cm、女生25人平均160cm。全班平均身高多少？",
    "choices": [
      "165",
      "163.75",
      "162",
      "164"
    ],
    "answerIndex": 1,
    "explanation": "男2550、女4000，合6550公分、40人，6550÷40=163.75公分。165是(170+160)÷2誤算。162、164是計算錯。全班平均要用兩性總身高6550除以40人，不能把男女平均170與160直接平均，因兩班人數不同。",
    "steps": [
      "男2550，女4000。",
      "合6550，40人。",
      "平均163.75cm。"
    ],
    "commonMistake": "分組平均直接對兩組平均求平均",
    "concept": "加權平均依各項權重計算，加權總和除以權重總和，常用於不同人數或分數的班級平均",
    "tags": [
      "統計",
      "加權平均",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s009-v007",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "weighted-average-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三種肥料混合：甲2包每包10元、乙3包每包8元、丙1包每包12元。平均每包多少？",
    "choices": [
      "10",
      "9",
      "9.33",
      "8.67"
    ],
    "answerIndex": 2,
    "explanation": "三種肥料總價為2×10+3×8+1×12=56元，共有2+3+1=6包，所以平均每包56÷6約為9.33元。10只是甲肥料的單價；9與8.67都不是56除以6的結果。",
    "steps": [
      "總價56元。",
      "6包。",
      "平均≈9.33元/包。"
    ],
    "commonMistake": "平均每包用各單價直接求平均",
    "concept": "加權平均依各項權重計算，加權總和除以權重總和，常用於不同人數或分數的班級平均",
    "tags": [
      "統計",
      "加權平均",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s009-v008",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "weighted-average-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩組測驗：甲組4人平均70、乙組6人平均80。合計平均多少？",
    "choices": [
      "75",
      "77",
      "74",
      "76"
    ],
    "answerIndex": 3,
    "explanation": "甲組4×70=280、乙組6×80=480，合760分、10人，760÷10=76分。75是(70+80)÷2兩組平均誤算。77、74是760÷10算錯。合計要用總分760除10人。合組平均要用兩組總分相加，再除以總人數，不能把兩組平均直接平均。",
    "steps": [
      "甲280，乙480。",
      "合760，10人。",
      "平均76。"
    ],
    "commonMistake": "兩組平均直接求平均，沒考慮人數",
    "concept": "加權平均依各項權重計算，加權總和除以權重總和，常用於不同人數或分數的班級平均",
    "tags": [
      "統計",
      "加權平均",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s009-v009",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "weighted-average-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三科占比：平時20%、段考50%、期末30%。平時85、段考90、期末80，總成績多少？",
    "choices": [
      "86",
      "85",
      "87",
      "84"
    ],
    "answerIndex": 0,
    "explanation": "三項加權後分數為85×20%+90×50%+80×30%=17+45+24=86分。85是平時成績本身，不是加權後的總成績；87與84都不是17、45、24的正確總和。",
    "steps": [
      "17+45+24=86。",
      "占比和100%。",
      "總成績86。"
    ],
    "commonMistake": "占比權重計算漏乘某一項是這類資料題中很常見的錯誤想法",
    "concept": "加權平均依各項權重計算，加權總和除以權重總和，常用於不同人數或分數的班級平均",
    "tags": [
      "統計",
      "加權平均",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s009-v010",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "weighted-average-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "混合堅果：花生300g每g2元、杏仁200g每g5元。平均每克多少元？",
    "choices": [
      "3.5",
      "3.2",
      "3",
      "2.8"
    ],
    "answerIndex": 1,
    "explanation": "花生300×2=600元、杏仁200×5=1000元，總價1600元、500g，1600÷500=3.2元/g。3.5是(2+5)÷2兩單價平均。3、2.8是1600÷500算錯。混合單價要用總價除以總重量，不能把兩種單價直接平均，也不能只除錯分母。",
    "steps": [
      "總價1600元。",
      "總重500g。",
      "平均3.2元/g。"
    ],
    "commonMistake": "混合平均用兩單價直接求平均",
    "concept": "加權平均依各項權重計算，加權總和除以權重總和，常用於不同人數或分數的班級平均",
    "tags": [
      "統計",
      "加權平均",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s009-v011",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "weighted-average-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某生加權平均85，三科權重2、3、1，國文80、數學90，英文多少？",
    "choices": [
      "85",
      "82",
      "80",
      "78"
    ],
    "answerIndex": 2,
    "explanation": "加權總和85×(2+3+1)=510，國文80×2+數學90×3=430，英文510−430=80分。85是加權平均本身。82、78是反推減法算錯。先算已知兩科加權和430。反推未知科目時，先用加權總和減已知兩科的加權和。",
    "steps": [
      "加權和510。",
      "已用430。",
      "英文80。"
    ],
    "commonMistake": "反推未知項時沒先算加權總和",
    "concept": "加權平均依各項權重計算，加權總和除以權重總和，常用於不同人數或分數的班級平均",
    "tags": [
      "統計",
      "加權平均",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s009-v012",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "weighted-average-basic",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "報告只寫「加權平均85分」但沒列各項權重，讀者能重算嗎？",
    "choices": [
      "能，85就是答案",
      "能，用簡單平均",
      "不能，缺最高最低",
      "不能，缺權重無法重算"
    ],
    "answerIndex": 3,
    "explanation": "報告只給出加權平均 85 分，沒有附上各項成績與權重，外界無法重算。同一平均可能對應不同權重組合，缺少權重資訊就無法自行計算確認。",
    "steps": [
      "加權平均需各項與權重。",
      "缺權重。",
      "無法重算。"
    ],
    "commonMistake": "以為知道加權平均就能反推各項分數",
    "concept": "加權平均依各項權重計算，加權總和除以權重總和，常用於不同人數或分數的班級平均",
    "tags": [
      "統計",
      "加權平均",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u09-s010-v001",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "data-comparison-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "A班30人平均78分、B班30人平均82分。哪一班的平均分數較高？",
    "choices": [
      "B班",
      "A班",
      "相同",
      "無法比較"
    ],
    "answerIndex": 0,
    "explanation": "題目只比較兩班的平均分數。A班平均78分，B班平均82分，82大於78，所以B班平均分數較高。兩班人數資料不影響這個平均高低比較；「相同」與「無法比較」都不符合已知數值。",
    "steps": [
      "確認題目比較的是平均分數。",
      "比較78分與82分。",
      "82較高，所以B班平均較高。"
    ],
    "commonMistake": "把比較平均高低誤解成比較總分或整體分布",
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位",
    "tags": [
      "統計",
      "資料比較與判斷",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s010-v002",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "data-comparison-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "甲組資料：10、12、14、16、100。乙組：20、22、24、26、28。哪組較不受極端值影響？",
    "choices": [
      "甲組",
      "乙組",
      "相同",
      "無法判斷"
    ],
    "answerIndex": 1,
    "explanation": "比較兩組資料誰較不受極端值影響，應看中位數或分布是否均勻。甲組有100這個極端高分，會拉高平均；乙組20到28分布平均，較穩定。選甲組是忽略100對平均的拉扯。",
    "steps": [
      "甲組含極端值100。",
      "乙組數值分布均勻。",
      "乙組較不受極端值影響。"
    ],
    "commonMistake": "有極端值時仍只用平均比較兩組",
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位",
    "tags": [
      "統計",
      "資料比較與判斷",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s010-v003",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "data-comparison-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班男生平均165cm、女生平均160cm，男生比女生高5cm。若男生10人、女生30人，全班平均身高？",
    "choices": [
      "162.5",
      "163",
      "161.25",
      "160"
    ],
    "answerIndex": 2,
    "explanation": "比較對象是全班平均身高，不能對男165、女160直接求平均，因男生10人、女生30人權重不同。男總1650、女總4800，合6450除以40人得161.25cm。162.5是把165與160直接平均，忽略人數。",
    "steps": [
      "男生總身高1650cm。",
      "女生總身高4800cm。",
      "全班40人，平均161.25cm。"
    ],
    "commonMistake": "人數不同時對兩組平均直接求平均",
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位",
    "tags": [
      "統計",
      "資料比較與判斷",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s010-v004",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "data-comparison-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩班段考：A班平均75全距40、B班平均75全距10。哪班成績較一致？",
    "choices": [
      "A班",
      "相同",
      "無法比",
      "B班"
    ],
    "answerIndex": 3,
    "explanation": "兩班平均都是75，比較的是成績一致程度，應看全距。A班全距40、B班全距10，B班分數較集中。選A班是把較分散當較一致；平均相同不代表分布相同，不能過度推論。",
    "steps": [
      "兩班平均皆75分。",
      "B班全距10較小。",
      "B班成績較一致。"
    ],
    "commonMistake": "平均相同就以為兩組分布也相同",
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位",
    "tags": [
      "統計",
      "資料比較與判斷",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s010-v005",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "data-comparison-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "商店A平均單價50元售200件、商店B平均60元售100件。哪店總營業額較高？",
    "choices": [
      "A店",
      "B店",
      "相同",
      "無法比"
    ],
    "answerIndex": 0,
    "explanation": "比較總營業額，要用平均乘件數。A店50×200=10000元，B店60×100=6000元，A店較高。B店單價高但件數少，只看平均60會誤判。比較總量時統計量應選總額而非單純平均。",
    "steps": [
      "A店總額10000元。",
      "B店總額6000元。",
      "A店總營業額較高。"
    ],
    "commonMistake": "比較總營業額只看平均單價忽略件數",
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位",
    "tags": [
      "統計",
      "資料比較與判斷",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s010-v006",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "data-comparison-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩組資料平均都是20，甲全距50、乙全距5。哪組資料較分散？",
    "choices": [
      "乙組",
      "甲組",
      "相同",
      "無法比"
    ],
    "answerIndex": 1,
    "explanation": "兩組平均都是20，比較分散程度用全距。甲組全距50、乙組全距5，甲組較分散。選乙組是把較集中誤當較分散；平均相同不能推論全距也相同。",
    "steps": [
      "兩組平均都是20。",
      "甲組全距50較大。",
      "甲組資料較分散。"
    ],
    "commonMistake": "平均相同就以為分散程度也相同",
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位",
    "tags": [
      "統計",
      "資料比較與判斷",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s010-v007",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "data-comparison-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "A班中位數80、B班中位數75。若兩班各有極端高分，哪個指標較適合比整體？",
    "choices": [
      "平均數",
      "全距",
      "中位數",
      "眾數"
    ],
    "answerIndex": 2,
    "explanation": "題意是有極端高分時，比較兩班整體水準應選中位數。平均會被少數高分拉高；全距只描述差距大小；眾數在成績資料不一定存在。A班中位80、B班中位75仍可直接比中位。",
    "steps": [
      "兩班都有極端高分。",
      "平均易受極端值影響。",
      "中位數較適合比整體。"
    ],
    "commonMistake": "有極端值時仍用平均比較整體水準",
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位",
    "tags": [
      "統計",
      "資料比較與判斷",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s010-v008",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "data-comparison-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "小明3次測驗平均85分，小華10次測驗平均80分。只憑這些資料，能斷定小明的真實能力較高嗎？",
    "choices": [
      "能，平均高5分就足夠",
      "能，考3次代表效率較高",
      "不能，必須先把兩人的分數相加",
      "不能，測驗次數與各次條件不足"
    ],
    "answerIndex": 3,
    "explanation": "目前只知道小明3次平均85分、小華10次平均80分，測驗次數不同，也不知道各次試題難度與成績分布。這些資料只能說已觀察到的平均不同，不能直接斷定真實能力高低，所以資料不足以斷定。",
    "steps": [
      "確認已知資料只有次數與平均。",
      "注意測驗次數及試題條件可能不同。",
      "不能由兩個平均直接斷定真實能力。"
    ],
    "commonMistake": "只看到平均高低就推論真實能力一定較高",
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位",
    "tags": [
      "統計",
      "資料比較與判斷",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s010-v009",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "data-comparison-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩城市平均氣溫都是25℃，A城市全距15℃、B城市全距5℃。哪個城市的氣溫變化範圍較大？",
    "choices": [
      "A城市",
      "B城市",
      "相同",
      "無法比"
    ],
    "answerIndex": 0,
    "explanation": "兩地平均值同為25℃。比較資料起伏幅度時應看全距；A城市為15℃，B城市為5℃，15大於5，因此A城市的分布範圍較廣。平均相同不代表全距相同。",
    "steps": [
      "確認題目比較氣溫變化範圍。",
      "比較全距15℃與5℃。",
      "A城市全距較大。"
    ],
    "commonMistake": "把全距誤當成平均或直接解讀為日夜溫差",
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位",
    "tags": [
      "統計",
      "資料比較與判斷",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s010-v010",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "data-comparison-context",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "A組：2、4、6、8、10。B組：5、5、5、5、5。哪組平均與中位相同？",
    "choices": [
      "A組",
      "B組",
      "兩組都相同",
      "兩組都不同"
    ],
    "answerIndex": 2,
    "explanation": "A組2、4、6、8、10，總和30，平均6；排序後正中央中位數也是6。B組五個5，平均5、中位數5。兩組都是平均與中位數相同，應選兩組都相同。只選B組會忽略A組平均6與中位6也相等；只選A組同樣不完整。",
    "steps": [
      "A組平均6、中位6。",
      "B組平均5、中位5。",
      "兩組平均與中位都相同。"
    ],
    "commonMistake": "只驗一組就算完，沒把A組與B組的平均和中位都列出來比",
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位",
    "tags": [
      "統計",
      "資料比較與判斷",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s010-v011",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "data-comparison-context",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班數學平均70、英文平均85。能說英文一定比數學簡單嗎？",
    "choices": [
      "能，85大於70",
      "不能，科目難度不能直接比",
      "能，平均較高",
      "不能，缺人數"
    ],
    "answerIndex": 1,
    "explanation": "比較數學與英文平均70與85，不能推論英文較簡單。兩科試題難度、評分方式不同，分數高只代表該科這次平均較高。把85大於70當成英文較簡單，是把分數差誤當難度差，屬過度推論。",
    "steps": [
      "兩科評分標準不同。",
      "分數高不等於較簡單。",
      "不能直接論科目難度。"
    ],
    "commonMistake": "跨科直接比平均就論哪科比較簡單",
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位",
    "tags": [
      "統計",
      "資料比較與判斷",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s010-v012",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "data-comparison-context",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若把兩班視為同類學生的抽樣資料，A班20人、B班5人，兩班平均都是80。哪一班的樣本平均通常較穩定？",
    "choices": [
      "B班",
      "相同",
      "無法比",
      "A班"
    ],
    "answerIndex": 3,
    "explanation": "在抽樣條件相近時，資料筆數越多，平均值通常越不容易被單一極端值大幅改變。A班有20人、B班只有5人，因此前者的估計較穩；這不表示A班每位學生都更接近80分。",
    "steps": [
      "確認比較的是樣本平均的穩定程度。",
      "A班20人，B班5人。",
      "抽樣條件相近時，樣本較大的A班通常較穩定。"
    ],
    "commonMistake": "把樣本平均較穩定誤解成每位學生都接近平均",
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位",
    "tags": [
      "統計",
      "資料比較與判斷",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u09-s011-v001",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "misleading-statistics-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某圖縱軸從90開始而非0，柱高差看起來很大但實際分數差5分。這會造成什麼？",
    "choices": [
      "誇大視覺差異",
      "改變實際分數",
      "使平均變高",
      "使全距變0"
    ],
    "answerIndex": 0,
    "explanation": "縱軸從90開始而非0，柱高看起來差很多，但實際分數只差5分，這是截斷縱軸造成的視覺誇大。實際分數、平均、全距都不會因此改變。把截斷縱軸當成會改分數本身，就忽略了數值其實沒變。",
    "steps": [
      "實際分數仍差5分。",
      "縱軸截斷放大柱高差。",
      "造成誇大視覺差異。"
    ],
    "commonMistake": "以為截斷縱軸會改變實際分數或平均",
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文",
    "tags": [
      "統計",
      "統計圖表與誤導",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s011-v002",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "misleading-statistics-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "5人薪資：3、4、4、5、100萬。老闆對外說平均23.2萬代表一般員工，合理嗎？",
    "choices": [
      "合理，平均代表全部",
      "不合理，受極端值影響",
      "合理，23.2是中位",
      "不合理，應看全距"
    ],
    "answerIndex": 1,
    "explanation": "5人薪資3、4、4、5、100萬，平均23.2萬被100萬極端值拉高，不能代表一般3到5萬的員工。樣本只有5人且分布極不均，用平均描述「一般員工」會誤導。中位數是4萬，較接近多數人。",
    "steps": [
      "100萬是極端高薪。",
      "平均23.2被拉高。",
      "不能代表一般員工。"
    ],
    "commonMistake": "有極端值時仍用平均代表一般水準",
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文",
    "tags": [
      "統計",
      "統計圖表與誤導",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s011-v003",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "misleading-statistics-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "調查只問到店顧客滿意度，便說「全體顧客都滿意」，問題是？",
    "choices": [
      "平均計算錯",
      "中位數誤用",
      "樣本偏差，未含未到店者",
      "全距太大"
    ],
    "answerIndex": 2,
    "explanation": "樣本只包含到店顧客，未包含未到店者，樣本有偏差，不能推論全體100%顧客都滿意。樣本數與選取方式會限制結論範圍，不能超出調查對象。這題重點在調查對象，不在平均或中位計算。",
    "steps": [
      "樣本只有到店顧客。",
      "未包含未到店者。",
      "不能推論全體都滿意。"
    ],
    "commonMistake": "調查對象有偏差仍推論到全部母體",
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文",
    "tags": [
      "統計",
      "統計圖表與誤導",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s011-v004",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "misleading-statistics-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某產品廣告寫「9成使用者推薦」，但只調查10人且9人是員工。主要問題？",
    "choices": [
      "平均計算錯",
      "中位數誤用",
      "全距不足",
      "樣本太小且有偏差"
    ],
    "answerIndex": 3,
    "explanation": "樣本只有10人，且9人是公司員工，樣本太小又有偏差，90%滿意不能代表一般使用者。即使9÷10=90%計算正確，樣本選取已限制結論。小樣本百分比不能隨意推論到全部使用者。",
    "steps": [
      "樣本僅10人。",
      "9人是員工有偏差。",
      "不能代表一般使用者。"
    ],
    "commonMistake": "百分比正確就忽略樣本大小與組成",
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文",
    "tags": [
      "統計",
      "統計圖表與誤導",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s011-v005",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "misleading-statistics-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "折線圖只秀最近3天上升段，便說業績大幅成長。主要問題？",
    "choices": [
      "選取有利區間誤導",
      "平均算錯",
      "中位誤用",
      "眾數不存在"
    ],
    "answerIndex": 0,
    "explanation": "只挑最近3天上升就說業績大幅成長，是選取有利區間造成誤導。若看完整期間可能先降後升，趨勢不能只看片段。這是時間範圍選取造成的偏差，不是平均或中位計算錯誤。",
    "steps": [
      "只取最近3天。",
      "忽略前期走勢。",
      "選取區間造成誤導。"
    ],
    "commonMistake": "只看短期趨勢就論長期成長",
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文",
    "tags": [
      "統計",
      "統計圖表與誤導",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s011-v006",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "misleading-statistics-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "圓形圖資料顯示20%區塊被放大繪成接近一半面積，這會造成什麼問題？",
    "choices": [
      "改變實際占比",
      "視覺誇大占比印象",
      "使平均改變",
      "使總和超過100%"
    ],
    "answerIndex": 1,
    "explanation": "圓形圖資料顯示20%區塊被放大繪製，視覺上面積接近一半，但實際占比仍占20%。百分比數字不變，問題在圖形面積與百分比不成比例。讀統計圖要看數值，不能只看面積大小。",
    "steps": [
      "實際占比仍20%。",
      "面積被放大繪製。",
      "視覺誇大占比印象。"
    ],
    "commonMistake": "以為改變圖形大小會改變實際百分比",
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文",
    "tags": [
      "統計",
      "統計圖表與誤導",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s011-v007",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "misleading-statistics-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某長條圖顯示甲、乙數值分別為20與18，但甲柱寬度畫成乙柱的3倍。主要會造成哪種誤導？",
    "choices": [
      "改變甲的實際數值",
      "使兩項總和超過100%",
      "讓甲看起來遠高於乙",
      "使平均數自動增加"
    ],
    "answerIndex": 2,
    "explanation": "甲的數值20只比乙的18多2，但把甲柱畫得寬3倍，會放大甲柱的視覺面積，使差距看起來遠大於實際的2。柱寬不會改變原始數值、總和或平均，問題在圖形比例與資料不一致。",
    "steps": [
      "先比較實際數值20與18。",
      "再檢查兩柱寬度是否一致。",
      "甲柱過寬會誇大兩者的視覺差距。"
    ],
    "commonMistake": "只看長條面積大小而沒有對照實際數值",
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文",
    "tags": [
      "統計",
      "統計圖表與誤導",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s011-v008",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "misleading-statistics-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班20人中18人60分、2人100分，平均64分。用平均64分代表大多數學生，合理嗎？",
    "choices": [
      "合理，64就是多數人的分數",
      "合理，平均一定代表每個人",
      "不合理，只要看全距即可",
      "不合理，受少數高分拉高"
    ],
    "answerIndex": 3,
    "explanation": "全班總分為18×60+2×100=1280分，平均1280÷20=64分。18人都是60分、2人是100分，64分雖然計算正確，卻高於18名學生的60分，因此用平均代表大多數會受少數100分拉高而誤導；全距也只能描述差距，不能代表多數人的分數。",
    "steps": [
      "計算總分1280分。",
      "平均為1280÷20=64分。",
      "多數是60分，平均受兩個100分拉高。"
    ],
    "commonMistake": "平均計算正確就以為一定能代表大多數人的水準",
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文",
    "tags": [
      "統計",
      "統計圖表與誤導",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s011-v009",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "misleading-statistics-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "報告寫「本產品銷量成長200%」，但去年只賣1件、今年3件。問題是？",
    "choices": [
      "基數太小，比例誇大",
      "成長率算錯",
      "應用中位數",
      "缺全距"
    ],
    "answerIndex": 0,
    "explanation": "基數只有1件，成長到3件，(3−1)÷1=200%，比例看起來很大但絕對量只多2件。小基數時百分比容易誇大印象，要同時看實際件數。200%計算沒錯，問題在解讀方式。",
    "steps": [
      "基數僅1件。",
      "絕對量只增2件。",
      "200%比例易誇大印象。"
    ],
    "commonMistake": "成長率很大就忽略基數太小的問題",
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文",
    "tags": [
      "統計",
      "統計圖表與誤導",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s011-v010",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "misleading-statistics-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩班平均都是75，A班全距5、B班全距50。只報平均不報全距會？",
    "choices": [
      "使A班平均降低",
      "隱藏兩班成績分散程度的差異",
      "使B班平均提高",
      "證明兩班中位數相同"
    ],
    "answerIndex": 1,
    "explanation": "比較兩班資料可見，A班與B班平均都為75分，但A班全距5分、B班全距50分，代表兩班分散程度明顯不同。若只報平均，讀者看不到B班較分散的情況，因此會隱藏兩班成績分散程度的差異；平均本身並未改變。",
    "steps": [
      "確認兩班平均同為75分。",
      "比較全距5分與50分。",
      "只報平均會隱藏分散程度差異。"
    ],
    "commonMistake": "平均相同就以為兩組分布也相同",
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文",
    "tags": [
      "統計",
      "統計圖表與誤導",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s011-v011",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "misleading-statistics-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某民調「52%支持」但只問100人且誤差可能±10%。能說「過半支持」嗎？",
    "choices": [
      "能，52大於50",
      "能，過半就是支持",
      "不能確定，在誤差範圍內",
      "不能，缺中位數"
    ],
    "answerIndex": 2,
    "explanation": "52%±10%表示真實支持率可能在42%到62%之間，不一定超過50%過半。樣本100人時誤差範圍仍可能讓結果低於50%，不能只看52>50就說穩定過半。民調報告要同時看樣本數與誤差。",
    "steps": [
      "52%±10%。",
      "可能低至42%。",
      "不能確定真正過半。"
    ],
    "commonMistake": "忽略誤差範圍就斷言過半支持",
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文",
    "tags": [
      "統計",
      "統計圖表與誤導",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s011-v012",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "misleading-statistics-basic",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "商家調查6人，其中4人滿意，廣告只寫「近7成滿意」卻不標示受訪人數。主要問題是什麼？",
    "choices": [
      "4÷6的百分比算錯",
      "應改用平均數表示",
      "滿意比例一定低於六成",
      "樣本太小且隱藏受訪人數"
    ],
    "answerIndex": 3,
    "explanation": "先算滿意比例，4÷6約為66.7%，寫成「近7成」在數值上可以視為近似，真正問題是樣本只有6人，且廣告沒有標示受訪人數。小樣本比例容易大幅波動，隱藏分母會讓讀者高估結論的代表性。",
    "steps": [
      "計算4÷6約為66.7%。",
      "辨認樣本只有6人。",
      "主要問題是樣本太小且未標示分母。"
    ],
    "commonMistake": "只看百分比表面大小而忽略樣本數與分母",
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文",
    "tags": [
      "統計",
      "統計圖表與誤導",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  {
    "questionId": "u09-s012-v001",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "statistics-literacy-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某市報告「平均房價500萬創新高」，但未說樣本區域與調查時間。讀者首先應質疑什麼？",
    "choices": [
      "樣本是否代表全市",
      "平均是否算錯",
      "中位是否存在",
      "全距是否為0"
    ],
    "answerIndex": 0,
    "explanation": "平均房價 500 萬若沒說調查區域與時間，讀者無法判斷樣本是否代表自己關心的範圍。先確認調查範圍與期間，才能解讀平均。",
    "steps": [
      "缺區域與時間。",
      "樣本可能不具代表。",
      "首先質疑樣本。"
    ],
    "commonMistake": "看到平均數字就不質疑資料來源",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策",
    "tags": [
      "統計",
      "統計素養情境題",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s012-v002",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "statistics-literacy-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "10人成績為8人70分、2人95分。若要描述這一組成績的一般水準，哪個指標較適合？",
    "choices": [
      "平均數75",
      "中位數70",
      "全距25",
      "最高分95"
    ],
    "answerIndex": 1,
    "explanation": "這組資料中有8人70分、2人95分，排序後第5與第6個數都是70，所以中位數為70。平均數為(8×70+2×95)÷10=75，會受到兩個95分拉高；要描述一般水準時，中位數70較貼近多數人的成績。",
    "steps": [
      "排序後第5與第6個數都是70。",
      "中位數為70，平均數為75。",
      "中位數較能描述多數人的一般水準。"
    ],
    "commonMistake": "有少數高分時仍只用平均描述一般水準",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策",
    "tags": [
      "統計",
      "統計素養情境題",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s012-v003",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "statistics-literacy-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "新聞寫「某區案件數上升50%」，但去年2件、今年3件。讀者應如何解讀？",
    "choices": [
      "案件數已大幅惡化",
      "只要百分比正確就可信",
      "基數小，應同時看增加1件",
      "應改用眾數判斷"
    ],
    "answerIndex": 2,
    "explanation": "案件數由2件增加到3件，增加1件；增加率為(3−2)÷2×100%=50%。50%的數值沒有算錯，但基數只有2件，容易造成變化很大的印象，解讀時必須同時說明實際只增加1件。",
    "steps": [
      "先算絕對增加量為1件。",
      "再算增加率為50%。",
      "基數很小時要同時呈現件數與百分比。"
    ],
    "commonMistake": "只看到50%的比例就忽略實際只增加1件",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策",
    "tags": [
      "統計",
      "統計素養情境題",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s012-v004",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "statistics-literacy-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班要決定是否加課，調查顯示60%支持，但只問了5人。班導應？",
    "choices": [
      "立刻加課",
      "用平均決定",
      "看中位數",
      "擴大樣本再決定"
    ],
    "answerIndex": 3,
    "explanation": "只問5人卻要代表全班，樣本太小，60%支持不能當成全班結論。班導應擴大調查或說明樣本限制。小樣本百分比不能隨意推論到全部同學。",
    "steps": [
      "只問5人。",
      "樣本太小。",
      "應擴大樣本再決定。"
    ],
    "commonMistake": "樣本太小就依比例做重大決定",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策",
    "tags": [
      "統計",
      "統計素養情境題",
      "基礎概念"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s012-v005",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "statistics-literacy-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩商店平均評價都是4.5星，A有200則評論、B有10則。若其他條件相近，哪一店的平均評價通常較穩定？",
    "choices": [
      "A店",
      "B店",
      "相同",
      "無法比"
    ],
    "answerIndex": 0,
    "explanation": "在評論來源與抽樣方式相近的前提下，A店有200則評論，B店只有10則；資料較多時，平均星等通常較不容易被少數極端評價大幅改變，所以A店的平均較穩定。但評論數多不代表店家品質一定較好。",
    "steps": [
      "確認兩店平均同為4.5星。",
      "比較評論數200則與10則。",
      "其他條件相近時，A店平均通常較穩定。"
    ],
    "commonMistake": "把評論數較多直接推論成店家品質一定較好",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策",
    "tags": [
      "統計",
      "統計素養情境題",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s012-v006",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "statistics-literacy-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某生五次成績：60、65、70、75、95。要報告「一般水準」，較適合報哪個？",
    "choices": [
      "平均數73",
      "中位數70",
      "全距35",
      "眾數無"
    ],
    "answerIndex": 1,
    "explanation": "五次成績 60、65、70、75、95，中位 70 代表中間水準，不受 95 這次極高分拉高。平均 73 會被 95 抬高；全距只描述差距；五數各不相同也沒有眾數。",
    "steps": [
      "有95極端高分。",
      "中位70較穩。",
      "中位數較適合。"
    ],
    "commonMistake": "有極端值時仍報平均當一般水準",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策",
    "tags": [
      "統計",
      "統計素養情境題",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s012-v007",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "statistics-literacy-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "社團選活動時間，12人偏好：上午4、下午5、晚上3。哪個時段較適合？",
    "choices": [
      "上午",
      "晚上",
      "下午",
      "平均"
    ],
    "answerIndex": 2,
    "explanation": "上午4人、下午5人、晚上3人，下午最多，較適合當活動時段。上午、晚上人數較少；不能對人數做平均來選時段。這題要比較哪個時段人數最多。",
    "steps": [
      "下午5人最多。",
      "上午4、晚上3。",
      "下午較適合。"
    ],
    "commonMistake": "類別偏好用平均或中位代替眾數",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策",
    "tags": [
      "統計",
      "統計素養情境題",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s012-v008",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "statistics-literacy-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "A校平均由30分升到45分，B校由80分升到90分。只比較進步率時，哪個敘述最合理？",
    "choices": [
      "A校教學一定較好",
      "B校教學一定較好",
      "兩校進步率完全相同",
      "A校進步率較高，但不能單憑比例判定教學成效"
    ],
    "answerIndex": 3,
    "explanation": "A校增加15分，進步率為15÷30×100%=50%；B校增加10分，進步率為10÷80×100%=12.5%。A校的比例較高，但兩校起點、試題難度與評分條件可能不同，不能只靠進步率斷定哪校教學成效一定較好。",
    "steps": [
      "A校進步率為50%。",
      "B校進步率為12.5%。",
      "比例可比較，但教學成效還需考慮其他條件。"
    ],
    "commonMistake": "看到進步率較高就斷定教學成效一定較好",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策",
    "tags": [
      "統計",
      "統計素養情境題",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s012-v009",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "statistics-literacy-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班30人，平均80但中位60。老師說「大多數同學80分以上」，合理嗎？",
    "choices": [
      "不合理，中位60表示至少一半不高於60",
      "合理，平均數一定代表多數",
      "合理，平均80表示每人都是80",
      "不合理，但只因沒有全距"
    ],
    "answerIndex": 0,
    "explanation": "依中位數定義，30人的中位數為60，表示排序後至少有15筆資料不高於60，因此不能由平均80推出「大多數同學80分以上」。平均80可能受到少數高分拉高；平均不等於每人的分數，缺少全距也不是否定原說法的主要理由。",
    "steps": [
      "中位數60表示至少15筆資料不高於60。",
      "平均80不代表每人或多數人都是80。",
      "老師的「大多數80分以上」不成立。"
    ],
    "commonMistake": "把平均數直接當成大多數人的實際分數",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策",
    "tags": [
      "統計",
      "統計素養情境題",
      "應用"
    ],
    "estimatedTimeSec": 45
  },
  {
    "questionId": "u09-s012-v010",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "statistics-literacy-context",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "問卷只提供「同意」與「非常同意」兩種回答，結果90%選擇同意類。主要問題是什麼？",
    "choices": [
      "平均數算錯",
      "回答設計有誘導",
      "中位數使用錯誤",
      "全距資料不足"
    ],
    "answerIndex": 1,
    "explanation": "可選回答只有「同意」與「非常同意」，受訪者無法表達反對或中立，問卷設計會把回答推向同意方向。因此90%只能反映受限制的作答方式，不能當成完整的意見分布。",
    "steps": [
      "檢查問卷提供哪些回答。",
      "發現沒有反對或中立回答。",
      "判斷回答設計具有誘導性。"
    ],
    "commonMistake": "只看90%的比例而忽略可選回答是否完整",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策",
    "tags": [
      "統計",
      "統計素養情境題",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s012-v011",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "statistics-literacy-context",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某生前四次成績為50、55、60、65分，每次增加5分；第五次因題目特別簡單得90分。若依前四次趨勢設定下次目標，哪個較合理？",
    "choices": [
      "90",
      "85",
      "70左右",
      "50"
    ],
    "answerIndex": 2,
    "explanation": "前四次成績依序50、55、60、65分，每次增加5分，依這個趨勢下一次約為70分。第五次90分已明確說明受到題目特別簡單影響，不宜直接當成一般表現；85與90都偏離前四次趨勢，50則忽略持續進步。",
    "steps": [
      "前四次每次增加5分。",
      "依趨勢65+5=70分。",
      "特殊的90分不作為一般趨勢基準。"
    ],
    "commonMistake": "把特殊條件造成的單次高分直接當成一般趨勢",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策",
    "tags": [
      "統計",
      "統計素養情境題",
      "應用"
    ],
    "estimatedTimeSec": 75
  },
  {
    "questionId": "u09-s012-v012",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-central-tendency",
    "skillId": "statistics-literacy-context",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "閱讀統計報告時，下列何者最優先？",
    "choices": [
      "圖形顏色是否好看",
      "數字是否很大",
      "報告頁數多少",
      "資料來源與樣本是否可靠"
    ],
    "answerIndex": 3,
    "explanation": "閱讀統計報告時，最優先應確認資料來源與樣本是否可靠。只看圖形顏色是否好看、數字是否很大或報告頁數多少，都無法代替先查資料來源與樣本。",
    "steps": [
      "確認資料來源與發布者。",
      "檢查樣本數與抽樣方式。",
      "再判斷圖表呈現與結論是否合理。"
    ],
    "commonMistake": "只看數字大小或視覺效果就接受結論",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策",
    "tags": [
      "統計",
      "統計素養情境題",
      "素養"
    ],
    "estimatedTimeSec": 90
  }
];

export default QUESTIONS;
