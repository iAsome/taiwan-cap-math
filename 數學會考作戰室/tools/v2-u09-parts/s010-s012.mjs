export const U09_PART_S010_S012 = [
  {
    "questionId": "u09-s010-v001",
    "skillId": "data-comparison-context",
    "topicId": "u09-central-tendency",
    "difficulty": "basic",
    "title": "資料比較與判斷",
    "text": "A班30人平均78、B班30人平均82。哪班整體表現較好？",
    "choices": [
      "B班",
      "A班",
      "相同",
      "無法比較"
    ],
    "answerIndex": 0,
    "explanation": "比較對象是A班與B班段考平均，兩班各30人，樣本數相同，平均78與82可直接比。82大於78，B班整體表現較好。選A班是把較低平均當較好；選相同忽略8分差距。",
    "steps": [
      "確認兩班都是30人。",
      "比較平均78與82。",
      "B班平均較高，整體較好。"
    ],
    "commonMistake": "人數不同時直接比平均，沒先確認樣本數",
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位"
  },
  {
    "questionId": "u09-s010-v002",
    "skillId": "data-comparison-context",
    "topicId": "u09-central-tendency",
    "difficulty": "basic",
    "title": "資料比較與判斷",
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
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位"
  },
  {
    "questionId": "u09-s010-v003",
    "skillId": "data-comparison-context",
    "topicId": "u09-central-tendency",
    "difficulty": "basic",
    "title": "資料比較與判斷",
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
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位"
  },
  {
    "questionId": "u09-s010-v004",
    "skillId": "data-comparison-context",
    "topicId": "u09-central-tendency",
    "difficulty": "basic",
    "title": "資料比較與判斷",
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
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位"
  },
  {
    "questionId": "u09-s010-v005",
    "skillId": "data-comparison-context",
    "topicId": "u09-central-tendency",
    "difficulty": "standard",
    "title": "資料比較與判斷",
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
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位"
  },
  {
    "questionId": "u09-s010-v006",
    "skillId": "data-comparison-context",
    "topicId": "u09-central-tendency",
    "difficulty": "standard",
    "title": "資料比較與判斷",
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
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位"
  },
  {
    "questionId": "u09-s010-v007",
    "skillId": "data-comparison-context",
    "topicId": "u09-central-tendency",
    "difficulty": "standard",
    "title": "資料比較與判斷",
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
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位"
  },
  {
    "questionId": "u09-s010-v008",
    "skillId": "data-comparison-context",
    "topicId": "u09-central-tendency",
    "difficulty": "standard",
    "title": "資料比較與判斷",
    "text": "小明平均85、小華平均80，但小明只考3次、小華考10次。能直接說小明較厲害嗎？",
    "choices": [
      "能，85大於80",
      "能，平均較高",
      "不能，缺中位數",
      "不能，樣本數不同"
    ],
    "answerIndex": 3,
    "explanation": "比較小明與小華誰較厲害，不能只看平均，還要看樣本數。小明只考3次得85、小華考10次得80，3次資料易受偶然高分影響，樣本太小不能過度推論。選「能，85大於80」忽略考試次數差異。",
    "steps": [
      "小明3次，小華10次。",
      "樣本數差異很大。",
      "不能直接論誰較厲害。"
    ],
    "commonMistake": "忽略樣本數差異就直接比較平均",
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位"
  },
  {
    "questionId": "u09-s010-v009",
    "skillId": "data-comparison-context",
    "topicId": "u09-central-tendency",
    "difficulty": "standard",
    "title": "資料比較與判斷",
    "text": "兩城市平均氣溫都是25℃，A全距15℃、B全距5℃。哪城市日夜溫差較大？",
    "choices": [
      "A城市",
      "B城市",
      "相同",
      "無法比"
    ],
    "answerIndex": 0,
    "explanation": "比較兩城市日夜溫差，平均都是25℃時應看全距。A城市全距15℃、B城市5℃，A日夜溫差較大。選B城市是把較小全距誤當較大溫差；平均相同不代表溫差相同。",
    "steps": [
      "兩城平均皆25℃。",
      "A城全距15℃較大。",
      "A城日夜溫差較大。"
    ],
    "commonMistake": "平均相同就以為溫差也相同",
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位"
  },
  {
    "questionId": "u09-s010-v010",
    "skillId": "data-comparison-context",
    "topicId": "u09-central-tendency",
    "difficulty": "advanced",
    "title": "資料比較與判斷",
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
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位"
  },
  {
    "questionId": "u09-s010-v011",
    "skillId": "data-comparison-context",
    "topicId": "u09-central-tendency",
    "difficulty": "advanced",
    "title": "資料比較與判斷",
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
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位"
  },
  {
    "questionId": "u09-s010-v012",
    "skillId": "data-comparison-context",
    "topicId": "u09-central-tendency",
    "difficulty": "literacy",
    "title": "資料比較與判斷",
    "text": "兩班平均都是80，但A班20人、B班5人。哪班平均較可靠？",
    "choices": [
      "B班",
      "相同",
      "無法比",
      "A班"
    ],
    "answerIndex": 3,
    "explanation": "兩班平均都是80，比較哪班平均較可靠要看樣本數。A班20人、B班5人，樣本越大平均越不易被個別值牽動，A班較可靠。選B班是忽略5人樣本太小；平均相同不代表可靠度相同。",
    "steps": [
      "A班20人，B班5人。",
      "樣本數大較穩定。",
      "A班平均較可靠。"
    ],
    "commonMistake": "忽略樣本數大小就論平均可靠度",
    "concept": "比較兩組資料時需選適當指標，平均、中位、全距各有用途，並注意樣本數與單位"
  },
  {
    "questionId": "u09-s011-v001",
    "skillId": "misleading-statistics-basic",
    "topicId": "u09-central-tendency",
    "difficulty": "basic",
    "title": "統計圖表與誤導",
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
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文"
  },
  {
    "questionId": "u09-s011-v002",
    "skillId": "misleading-statistics-basic",
    "topicId": "u09-central-tendency",
    "difficulty": "basic",
    "title": "統計圖表與誤導",
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
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文"
  },
  {
    "questionId": "u09-s011-v003",
    "skillId": "misleading-statistics-basic",
    "topicId": "u09-central-tendency",
    "difficulty": "basic",
    "title": "統計圖表與誤導",
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
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文"
  },
  {
    "questionId": "u09-s011-v004",
    "skillId": "misleading-statistics-basic",
    "topicId": "u09-central-tendency",
    "difficulty": "basic",
    "title": "統計圖表與誤導",
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
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文"
  },
  {
    "questionId": "u09-s011-v005",
    "skillId": "misleading-statistics-basic",
    "topicId": "u09-central-tendency",
    "difficulty": "standard",
    "title": "統計圖表與誤導",
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
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文"
  },
  {
    "questionId": "u09-s011-v006",
    "skillId": "misleading-statistics-basic",
    "topicId": "u09-central-tendency",
    "difficulty": "standard",
    "title": "統計圖表與誤導",
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
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文"
  },
  {
    "questionId": "u09-s011-v007",
    "skillId": "misleading-statistics-basic",
    "topicId": "u09-central-tendency",
    "difficulty": "standard",
    "title": "統計圖表與誤導",
    "text": "圓形圖三類50%、30%、20%，把20%區放大畫成接近40%，會誤導什麼？",
    "choices": [
      "改變實際50%",
      "使總和超過100%",
      "以為該類占比更大",
      "使平均改變"
    ],
    "answerIndex": 2,
    "explanation": "20%區塊被放大繪製後，視覺上像占接近40%，但實際百分比仍是20%。數字沒變，讀者卻可能以為該類占比更大。這是面積與百分比不成比例造成的視覺誤導，不是平均或總和改變。",
    "steps": [
      "實際占比仍20%。",
      "面積看起來更大。",
      "以為占比更大。"
    ],
    "commonMistake": "只看扇形面積大小就論占比",
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文"
  },
  {
    "questionId": "u09-s011-v008",
    "skillId": "misleading-statistics-basic",
    "topicId": "u09-central-tendency",
    "difficulty": "standard",
    "title": "統計圖表與誤導",
    "text": "某班平均80分，但20人中18人60分以下、2人100分。用平均代表大多數合理嗎？",
    "choices": [
      "合理",
      "合理，80是中位",
      "不合理，應看全距",
      "不合理，受少數高分拉高"
    ],
    "answerIndex": 3,
    "explanation": "20人中18人60分以下，僅2人100分，平均80被少數高分拉高，不能代表大多數學生。樣本20人雖不算極小，但分布嚴重偏斜時平均易誤導。中位數較接近多數人的分數水準。",
    "steps": [
      "18人低於60分。",
      "平均80被100分拉高。",
      "平均不能代表多數人。"
    ],
    "commonMistake": "有極端高分時仍用平均代表大多數",
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文"
  },
  {
    "questionId": "u09-s011-v009",
    "skillId": "misleading-statistics-basic",
    "topicId": "u09-central-tendency",
    "difficulty": "standard",
    "title": "統計圖表與誤導",
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
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文"
  },
  {
    "questionId": "u09-s011-v010",
    "skillId": "misleading-statistics-basic",
    "topicId": "u09-central-tendency",
    "difficulty": "advanced",
    "title": "統計圖表與誤導",
    "text": "兩班平均都是75，A班全距5、B班全距50。只報平均不報全距會？",
    "choices": [
      "誤判兩班分散程度相同",
      "隱藏成績分散差異",
      "使平均改變",
      "使中位改變"
    ],
    "answerIndex": 1,
    "explanation": "兩班平均都是75，但A班全距5、B班全距50，分散程度差很多。只報平均會讓人以為兩班表現相近，其實B班成績較分散。報告應同時提供全距或分布資訊，避免隱藏分散差異。",
    "steps": [
      "兩班平均皆75。",
      "B班全距50較分散。",
      "只報平均易誤判。"
    ],
    "commonMistake": "平均相同就以為兩組分布也相同",
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文"
  },
  {
    "questionId": "u09-s011-v011",
    "skillId": "misleading-statistics-basic",
    "topicId": "u09-central-tendency",
    "difficulty": "advanced",
    "title": "統計圖表與誤導",
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
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文"
  },
  {
    "questionId": "u09-s011-v012",
    "skillId": "misleading-statistics-basic",
    "topicId": "u09-central-tendency",
    "difficulty": "literacy",
    "title": "統計圖表與誤導",
    "text": "商家把「6人中4人滿意」寫成「近7成滿意」並放大字體，主要問題？",
    "choices": [
      "誇大比例且強調視覺",
      "比例算錯",
      "應用平均",
      "文字誇大且樣本太小"
    ],
    "answerIndex": 3,
    "explanation": "6人中4人滿意是4÷6≈66.7%，不到70%七成，且樣本只有6人。放大字體又寫「近7成」，同時有文字誇大比例與樣本太小的問題。66.7%不能隨意說成近7成，小樣本也不宜過度推論。",
    "steps": [
      "4÷6≈66.7%。",
      "未達70%且樣本6人。",
      "文字與字體誇大比例。"
    ],
    "commonMistake": "比例近似就四捨五入成更有利的數字",
    "concept": "統計呈現可能因截斷縱軸、選用指標或樣本偏差而誤導，讀者要對照數值與上下文"
  },
  {
    "questionId": "u09-s012-v001",
    "skillId": "statistics-literacy-context",
    "topicId": "u09-central-tendency",
    "difficulty": "basic",
    "title": "統計素養情境題",
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
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策"
  },
  {
    "questionId": "u09-s012-v002",
    "skillId": "statistics-literacy-context",
    "topicId": "u09-central-tendency",
    "difficulty": "basic",
    "title": "統計素養情境題",
    "text": "班級要選代表參加數學競賽，10人成績有8人70分、2人95分。選代表較適合用哪個指標？",
    "choices": [
      "平均數74",
      "中位數70",
      "全距25",
      "眾數95"
    ],
    "answerIndex": 1,
    "explanation": "10 人中有 8 人 70 分、2 人 95 分，中位 70 較代表多數人；平均 74 會被 95 拉高。全距、眾數都不能像中位這樣反映一般水準。8人70分，中位70較代表多數。",
    "steps": [
      "8人70分，2人95分。",
      "中位70代表多數。",
      "中位數較適合。"
    ],
    "commonMistake": "有少數高分時用平均選代表",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策"
  },
  {
    "questionId": "u09-s012-v003",
    "skillId": "statistics-literacy-context",
    "topicId": "u09-central-tendency",
    "difficulty": "basic",
    "title": "統計素養情境題",
    "text": "新聞寫「某區犯罪率上升50%」，但該區去年2件、今年3件。讀者應如何解讀？",
    "choices": [
      "犯罪確實大增",
      "應看平均",
      "基數小，比例誇大",
      "應看眾數"
    ],
    "answerIndex": 2,
    "explanation": "去年 2 件、今年 3 件，增加 1 件，增加率 50% 聽起來很大，但基期件數很少，百分比容易被放大。小樣本的高百分比要謹慎解讀。",
    "steps": [
      "2件到3件。",
      "基數小比例誇大。",
      "配合絕對量解讀。"
    ],
    "commonMistake": "成長率大就認為問題嚴重是這類資料題中很常見的錯誤想法",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策"
  },
  {
    "questionId": "u09-s012-v004",
    "skillId": "statistics-literacy-context",
    "topicId": "u09-central-tendency",
    "difficulty": "basic",
    "title": "統計素養情境題",
    "text": "某班要決定是否加課，調查顯示60%支持，但只問了5人。班導應？",
    "choices": [
      "立刻加課",
      "用平均決定",
      "看中位數",
      "擴大樣本再決定"
    ],
    "answerIndex": 3,
    "explanation": "只問 5 人卻要代表全班，樣本太小，60% 支持不能當成全班結論。班導應擴大調查或說明樣本限制。5人樣本太小，60%可能是3人支持，應擴大樣本。",
    "steps": [
      "只問5人。",
      "樣本太小。",
      "應擴大樣本再決定。"
    ],
    "commonMistake": "樣本太小就依比例做重大決定",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策"
  },
  {
    "questionId": "u09-s012-v005",
    "skillId": "statistics-literacy-context",
    "topicId": "u09-central-tendency",
    "difficulty": "standard",
    "title": "統計素養情境題",
    "text": "兩商店平均評價都是4.5星，A有200則評論、B有10則。選購時較可信哪店？",
    "choices": [
      "A店",
      "B店",
      "相同",
      "無法比"
    ],
    "answerIndex": 0,
    "explanation": "兩店平均都是 4.5 星，但 A 有 200 則、B 只有 10 則，樣本多的 A 較可信。評論數太少時，平均星等波動大。200則評論比10則可靠，A店較可信。B樣本小易受個別影響；平均相同；樣本大通常較穩定。",
    "steps": [
      "A有200則，B有10則。",
      "樣本大較可靠。",
      "A店較可信。"
    ],
    "commonMistake": "平均相同就認為可信度也相同",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策"
  },
  {
    "questionId": "u09-s012-v006",
    "skillId": "statistics-literacy-context",
    "topicId": "u09-central-tendency",
    "difficulty": "standard",
    "title": "統計素養情境題",
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
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策"
  },
  {
    "questionId": "u09-s012-v007",
    "skillId": "statistics-literacy-context",
    "topicId": "u09-central-tendency",
    "difficulty": "standard",
    "title": "統計素養情境題",
    "text": "社團選活動時間，12人偏好：上午4、下午5、晚上3。哪個時段較適合？",
    "choices": [
      "上午",
      "晚上",
      "下午",
      "平均"
    ],
    "answerIndex": 2,
    "explanation": "上午 4 人、下午 5 人、晚上 3 人，下午最多，較適合當活動時段。上午、晚上人數較少；不能對人數做平均來選時段。比較三時段人數，下午5人最多，眾數是下午。",
    "steps": [
      "下午5人最多。",
      "上午4、晚上3。",
      "下午較適合。"
    ],
    "commonMistake": "類別偏好用平均或中位代替眾數",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策"
  },
  {
    "questionId": "u09-s012-v008",
    "skillId": "statistics-literacy-context",
    "topicId": "u09-central-tendency",
    "difficulty": "standard",
    "title": "統計素養情境題",
    "text": "某報告比較兩校「進步率」，但A校基期平均30、B校基期平均80。直接比進步率合理嗎？",
    "choices": [
      "合理，進步率可直接比",
      "不合理，應看全距",
      "合理，百分比已標準化",
      "不一定，基期水準差大"
    ],
    "answerIndex": 3,
    "explanation": "A 校基期平均 30、B 校基期平均 80，基期不同，進步率不能直接比。應先看兩校起點與評分標準是否相同。基期30與80差很大，同樣進步10%意義不同。",
    "steps": [
      "基期30與80差大。",
      "同進步率意義不同。",
      "不一定合理。"
    ],
    "commonMistake": "進步率相同就忽略基期水準差異",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策"
  },
  {
    "questionId": "u09-s012-v009",
    "skillId": "statistics-literacy-context",
    "topicId": "u09-central-tendency",
    "difficulty": "standard",
    "title": "統計素養情境題",
    "text": "某班30人，平均80但中位60。老師說「大多數同學80分以上」，合理嗎？",
    "choices": [
      "不合理，中位60表示一半約60",
      "合理，平均80",
      "合理，80是平均",
      "不合理，缺全距"
    ],
    "answerIndex": 0,
    "explanation": "平均 80 但中位 60，表示有一半左右在 60 附近，不能說大多數 80 分以上。老師把平均當成多數人分數是過度推論。中位60表示約一半在60附近，不可能大多數80以上。",
    "steps": [
      "中位60。",
      "約一半在60附近。",
      "「大多數80以上」不合理。"
    ],
    "commonMistake": "平均高就以為大多數都高是這類資料題中很常見的錯誤想法",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策"
  },
  {
    "questionId": "u09-s012-v010",
    "skillId": "statistics-literacy-context",
    "topicId": "u09-central-tendency",
    "difficulty": "advanced",
    "title": "統計素養情境題",
    "text": "調查問「你是否同意加強管制？」未提供反對的回答，結果90%同意。問題是？",
    "choices": [
      "平均算錯",
      "問題設計有誘導",
      "中位誤用",
      "全距不足"
    ],
    "answerIndex": 1,
    "explanation": "問卷只讓受訪者回答同意，沒有提供反對或中立的回答，屬誘導式問法，90% 同意不能代表真實意見分布。問法缺少反對的回答可能誘導90%同意，問題設計有偏差。",
    "steps": [
      "缺反對的回答。",
      "可能誘導同意。",
      "問題設計有偏差。"
    ],
    "commonMistake": "只看百分比不檢查問卷設計",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策"
  },
  {
    "questionId": "u09-s012-v011",
    "skillId": "statistics-literacy-context",
    "topicId": "u09-central-tendency",
    "difficulty": "advanced",
    "title": "統計素養情境題",
    "text": "某生想改善成績，五次：50、55、60、65、90。下次目標訂多少較務實？",
    "choices": [
      "90",
      "85",
      "70左右",
      "50"
    ],
    "answerIndex": 2,
    "explanation": "成績 50、55、60、65、90，前四次穩定上升，90 是突波；下次訂 70 左右較務實，不要直接用 90 當目標。前四次穩定上升50到65，90可能是偶然，目標70左右較務實。",
    "steps": [
      "前四次50到65。",
      "90可能是偶然。",
      "目標70左右較務實。"
    ],
    "commonMistake": "用單次最高分訂目標是這類資料題中很常見的錯誤想法",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策"
  },
  {
    "questionId": "u09-s012-v012",
    "skillId": "statistics-literacy-context",
    "topicId": "u09-central-tendency",
    "difficulty": "literacy",
    "title": "統計素養情境題",
    "text": "閱讀統計報告時，下列何者最優先？",
    "choices": [
      "圖形顏色是否好看",
      "數字是否很大",
      "報告頁數多少",
      "資料來源與樣本是否可靠"
    ],
    "answerIndex": 3,
    "explanation": "閱讀統計報告時，先確認資料來源、樣本與單位是否合理，再談數字大小。沒有脈絡的數字最容易被誤解。閱讀統計報告時，要先確認資料來源與樣本是否可靠，而不是被圖形顏色、數字大小或頁數多寡誤導。",
    "steps": [
      "先看來源與樣本。",
      "是否可靠。",
      "最優先。"
    ],
    "commonMistake": "只看數字大小或視覺效果就接受結論",
    "concept": "統計素養要求綜合判斷資料來源、指標選用、呈現方式與結論是否合理，並在情境中做決策"
  }
];

export const U09_LECTURES_S010_S012 = [
  {
    "skillId": "data-comparison-context",
    "topicId": "u09-central-tendency",
    "title": "資料比較與判斷",
    "concept": "比較兩組資料要選適當指標：平均看整體水準、中位適合有極端值、全距看分散程度。人數或樣本數不同時，不能對兩組平均直接求平均。跨科或跨組比較要注意評分標準與資料筆數，避免過度解讀。",
    "formula": "",
    "stepGuide": [
      "確認兩組資料的樣本數與單位。",
      "選適當指標：平均、中位或全距。",
      "人數不同用總和÷總人數。",
      "有極端值優先考慮中位。",
      "避免跨科或樣本差異大時過度解讀。"
    ],
    "examples": [
      {
        "question": "A班25人平均80、B班25人平均85，哪班較好？",
        "explanation": "人數相同，平均85較高，B班較好。人數相同時可直接比較平均數。讀表時要把題目要求的全部資料都列入計算，再對照單位與題意。"
      },
      {
        "question": "兩組平均都是50，甲全距30、乙全距8，哪組較分散？",
        "explanation": "全距30大於8，甲組較分散。平均相同時可用全距比較分散程度。讀表時要把題目要求的全部資料都列入計算，再對照單位與題意。"
      }
    ],
    "commonMistakes": [
      "人數不同時對兩平均直接求平均。",
      "有極端值仍只用平均。",
      "比較總量只看平均忽略數量。",
      "忽略樣本數就論可靠度。"
    ]
  },
  {
    "skillId": "misleading-statistics-basic",
    "topicId": "u09-central-tendency",
    "title": "統計圖表與誤導",
    "concept": "統計呈現可能誤導：截斷縱軸誇大差異、柱高不成比例、只選有利區間、樣本偏差或太小、用平均代表有極端值的資料。讀統計要對照實際數值、樣本大小、誤差範圍，並選適當指標。會考常以生活情境出題，要能把資料整理與指標計算結合判斷。",
    "formula": "",
    "stepGuide": [
      "檢查縱軸起點與比例是否正確。",
      "對照實際數值而非只看視覺。",
      "注意樣本大小與組成是否偏差。",
      "有極端值時質疑平均能否代表多數。",
      "百分比要配合絕對量與誤差看。"
    ],
    "examples": [
      {
        "question": "縱軸從90開始的長條圖，實際差5分看起來差很多，為什麼？",
        "explanation": "截斷縱軸誇大視覺差異，實際分數差5不變。讀圖要注意縱軸起點。讀表時要把題目要求的全部資料都列入計算，再對照單位與題意。"
      },
      {
        "question": "5人薪資3、4、4、5、100萬，平均23.2能代表一般員工嗎？",
        "explanation": "100萬極端值拉高平均，一般員工3到5萬，平均23.2不能代表大多數。讀表時要把題目要求的全部資料都列入計算，再對照單位與題意。"
      }
    ],
    "commonMistakes": [
      "截斷縱軸誇大視覺差異。",
      "有極端值仍用平均代表多數。",
      "樣本偏差仍推論全體。",
      "忽略誤差就論過半。"
    ]
  },
  {
    "skillId": "statistics-literacy-context",
    "topicId": "u09-central-tendency",
    "title": "統計素養情境題",
    "concept": "統計素養要求在真實情境中綜合判斷：資料來源與樣本是否可靠、指標是否適當、呈現是否誤導、結論是否合理。決策前要考慮樣本大小、基期水準、問卷設計，並選適合的指標。會考素養題常考質疑、解讀與決策。",
    "formula": "",
    "stepGuide": [
      "先問資料從哪來、樣本是否代表。",
      "選適合指標：平均、中位或眾數。",
      "注意基數小、樣本小、誤差大。",
      "檢查問卷與呈現是否中立。",
      "結合情境做合理決策。"
    ],
    "examples": [
      {
        "question": "平均80、中位60，能說大多數80以上嗎？",
        "explanation": "中位60表示約一半在60附近，平均80可能被少數高分拉高，不能說大多數80以上。讀表時要把題目要求的全部資料都列入計算，再對照單位與題意。"
      },
      {
        "question": "5人調查60%支持，能直接決定加課嗎？",
        "explanation": "5人樣本太小，60%可能只是3人支持，應擴大樣本再決定。重大決策前樣本數要足夠，比例才有參考價值，不能憑小樣本就做班級決策。"
      }
    ],
    "commonMistakes": [
      "不質疑資料來源就接受。",
      "有極端值仍用平均代表多數。",
      "樣本太小就做重大決定。",
      "只看比例忽略問卷設計。"
    ]
  }
];
