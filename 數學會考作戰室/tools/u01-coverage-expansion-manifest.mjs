export const U01_COVERAGE_EXPANSION_REQUIRED_QUESTIONS = {
  "u01-s001-v005": {
    "questionId": "u01-s001-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-classification",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一組三個數中，恰有兩個整數，而且三個數全部都是有理數？",
    "choices": [
      "-3、0、1/2",
      "√2、0、3/4",
      "-5、√9、π",
      "0.25、-7/2、√16"
    ],
    "answerIndex": 0,
    "explanation": "第一組的 -3 與 0 是整數，1/2 雖不是整數但仍是有理數，所以恰有兩個整數且三者全為有理數。第二組含無理數 √2；第三組含 π；第四組只有 √16=4 是整數，因此都不符合兩項條件。",
    "steps": [
      "逐組先化簡可化簡的根號數。",
      "判斷每個數是否能寫成兩整數之比。",
      "再計算每組整數的個數，找出恰為兩個且全為有理數的一組。"
    ],
    "commonMistake": "只檢查整數個數而未排除 π 或 √2，會把含無理數的選項誤判為正確。",
    "concept": "整數、有理數與無理數須依定義與化簡結果分類，不能只看符號外觀",
    "tags": [
      "數與量",
      "數的分類",
      "進階"
    ],
    "estimatedTimeSec": 95
  },
  "u01-s001-v006": {
    "questionId": "u01-s001-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-classification",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某程式會先化簡每筆讀值，再把整數存入「整數欄」。下列哪一筆讀值會被存入？",
    "choices": [
      "2.5",
      "√2",
      "-3/4",
      "√9"
    ],
    "answerIndex": 3,
    "explanation": "程式先化簡讀值。√9=3，化簡後沒有小數或分數部分，因此會存入整數欄。2.5 與 -3/4 都不是整數，√2 也不能化成整數；所以只有 √9 符合程式規則。",
    "steps": [
      "先依程式規則化簡每一筆讀值。",
      "判斷化簡結果是否沒有小數或分數部分。",
      "√9 化簡為 3，因此只有它會存入整數欄。"
    ],
    "commonMistake": "看到根號就一律判定不是整數，會漏掉 √9 化簡後等於整數 3。",
    "concept": "整數、有理數與無理數須依定義與化簡結果分類，不能只看符號外觀",
    "tags": [
      "數與量",
      "數的分類",
      "素養"
    ],
    "estimatedTimeSec": 95
  },
  "u01-s002-v005": {
    "questionId": "u01-s002-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-positive-negative-meaning",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "以甲點為 0、向東為正時，乙點坐標為 -8，丙點坐標為 +3。若改以乙點為 0，並規定向西為正，丙點的新坐標為何？",
    "choices": [
      "11",
      "-11",
      "5",
      "-5"
    ],
    "answerIndex": 1,
    "explanation": "在原坐標中，丙點位於乙點東方 3-(-8)=11 單位。改以乙點為原點後，兩點的距離仍是 11 單位；但新規定向西為正，所以位於乙點東方的丙點必須記為負，新的坐標是 -11。",
    "steps": [
      "先用原坐標求丙、乙兩點的相對位置：3-(-8)=11。",
      "確認丙點在乙點東方 11 單位。",
      "新坐標規定向西為正，因此向東 11 單位記為 -11。"
    ],
    "commonMistake": "只更換原點卻沒有反轉正方向，會把丙點的新坐標誤寫成 +11。",
    "concept": "正負數表示相對於基準的方向與差量，數值大小表示離基準多遠",
    "tags": [
      "數與量",
      "正負數的意義",
      "進階"
    ],
    "estimatedTimeSec": 90
  },
  "u01-s002-v006": {
    "questionId": "u01-s002-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-positive-negative-meaning",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "工廠以標準溫度 50°C 為基準，記錄值只寫「實際溫度與標準溫度的差」。若實際溫度是 47°C，記錄值應為何？",
    "choices": [
      "-3°C",
      "3°C",
      "47°C",
      "-47°C"
    ],
    "answerIndex": 0,
    "explanation": "記錄值是實際溫度減標準溫度，所以 47-50=-3°C。負號表示實際溫度低於基準，數字 3 表示相差 3°C；47°C 是原始溫度，並不是題目要求的差值。",
    "steps": [
      "確認基準是 50°C。",
      "用實際溫度減基準：47-50。",
      "得到 -3°C，並以負號表示低於標準。"
    ],
    "commonMistake": "只抄下實際溫度 47°C 而未計算相對基準的差，會誤解紀錄欄位的意義。",
    "concept": "正負數表示相對於基準的方向與差量，數值大小表示離基準多遠",
    "tags": [
      "數與量",
      "正負數的意義",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  "u01-s003-v005": {
    "questionId": "u01-s003-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-line-position",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "數線上 A 在 B 左方 4 單位，C 在 A 右方 7 單位。若 C 的坐標為 2，則 B 的坐標為何？",
    "choices": [
      "5",
      "-9",
      "-1",
      "1"
    ],
    "answerIndex": 2,
    "explanation": "C 的坐標是 2，而 C 在 A 右方 7 單位，所以 A=2-7=-5。A 又在 B 左方 4 單位，表示 B 在 A 右方 4 單位，因此 B=-5+4=-1。代回檢查：A=-5 的確比 B=-1 左 4 單位，C=2 也比 A 右 7 單位，兩個條件都成立。",
    "steps": [
      "由 C=2 且 C 在 A 右方 7 單位，求得 A=2-7=-5。",
      "A 在 B 左方 4 單位，所以 B 在 A 右方 4 單位。",
      "計算 B=-5+4=-1，並檢查 B 確實在 A 的右側。"
    ],
    "commonMistake": "把「A 在 B 左方 4 單位」誤解成 B 也在 A 左方，會將第二段方向顛倒。",
    "concept": "數線坐標由基準、正方向與位移共同決定，右移增加、左移減少",
    "tags": [
      "數與量",
      "數線位置",
      "進階"
    ],
    "estimatedTimeSec": 90
  },
  "u01-s003-v006": {
    "questionId": "u01-s003-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-line-position",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "步道以遊客中心為 0 公里，向東為正。補給站在中心東方 4 公里，瞭望台又在補給站西方 7 公里。瞭望台的坐標為何？",
    "choices": [
      "3",
      "-3",
      "11",
      "-11"
    ],
    "answerIndex": 1,
    "explanation": "補給站坐標是 +4，從補給站向西 7 公里代表坐標減少 7，因此瞭望台為 4-7=-3 公里。負號表示它最後位於遊客中心西方，而不是把兩段路程相加成 11。",
    "steps": [
      "以遊客中心為 0，東方記正、西方記負。",
      "寫出補給站坐標 +4。",
      "再向西 7 公里，計算 4-7=-3。"
    ],
    "commonMistake": "把兩段路程 4 與 7 直接相加，會忽略方向相反而把坐標誤寫成 11。",
    "concept": "數線坐標由基準、正方向與位移共同決定，右移增加、左移減少",
    "tags": [
      "數與量",
      "數線位置",
      "素養"
    ],
    "estimatedTimeSec": 95
  },
  "u01-s004-v005": {
    "questionId": "u01-s004-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-comparison",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "數線上 a 在原點左方 7 單位，b 在 a 右方 3 單位，c 在原點左方 2 單位。下列大小關係何者正確？",
    "choices": [
      "a＞b＞c",
      "b＞c＞a",
      "c＞a＞b",
      "c＞b＞a"
    ],
    "answerIndex": 3,
    "explanation": "a 在原點左方 7 單位，所以 a=-7；b 在 a 右方 3 單位，因此 b=-4；c 在原點左方 2 單位，所以 c=-2。數線上越靠右的數越大，故 -2＞-4＞-7，也就是 c＞b＞a。其餘排列至少顛倒了一組數線位置，無法同時符合三個坐標。",
    "steps": [
      "把三個位置轉成坐標：a=-7、b=-7+3=-4、c=-2。",
      "依數線由左到右排列為 a、b、c。",
      "把位置順序改寫成大小關係 c＞b＞a。"
    ],
    "commonMistake": "把 b 向右移 3 單位誤算成向左移，會算錯 b 的坐標並排出錯誤順序。",
    "concept": "比較帶正負號的數要依數線位置，越靠右的數越大",
    "tags": [
      "數與量",
      "數的大小比較",
      "進階"
    ],
    "estimatedTimeSec": 100
  },
  "u01-s004-v006": {
    "questionId": "u01-s004-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-comparison",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "冷藏庫以目標溫度為基準，四次偏差依序為 A：-12°C、B：0°C、C：-8°C、D：+3°C。哪一次的實際溫度最低？",
    "choices": [
      "D",
      "C",
      "A",
      "B"
    ],
    "answerIndex": 2,
    "explanation": "四次紀錄使用同一個目標溫度作基準，因此偏差值越小，實際溫度越低。四個數的順序是 -12＜-8＜0＜3，最小值 -12°C 對應 A 次，所以 A 次的實際溫度最低。",
    "steps": [
      "確認四個偏差值使用相同的溫度基準。",
      "將偏差由小到大排列為 -12、-8、0、3。",
      "最小值 -12°C 對應 A 次，因此選 A。"
    ],
    "commonMistake": "只比較 12 與 8 的絕對值而忽略負號，會把 -12°C 誤認為比 -8°C 高。",
    "concept": "比較帶正負號的數要依數線位置，越靠右的數越大",
    "tags": [
      "數與量",
      "數的大小比較",
      "素養"
    ],
    "estimatedTimeSec": 95
  },
  "u01-s005-v005": {
    "questionId": "u01-s005-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 a 的相反數是 -7，而 b 的相反數等於 a，則 b 為何？",
    "choices": [
      "-7",
      "7",
      "1/7",
      "-1/7"
    ],
    "answerIndex": 0,
    "explanation": "a 的相反數是 -7，表示 a=7。接著，b 的相反數等於 a=7，因此 b 必須是 -7，才能與 7 相加為 0。1/7 與 -1/7 是倒數相關的數，並不符合相反數只改變正負號的定義。",
    "steps": [
      "由 a 的相反數是 -7，反推出 a=7。",
      "把第二個條件改寫成 b 的相反數是 7。",
      "因此 b=-7，並以 -7+7=0 驗證。"
    ],
    "commonMistake": "把相反數誤當成倒數，會在第二步選出 ±1/7，而不是只改變正負號。",
    "concept": "相反數與原數距離原點相同、方向相反，兩數相加等於零",
    "tags": [
      "數與量",
      "相反數",
      "進階"
    ],
    "estimatedTimeSec": 90
  },
  "u01-s005-v006": {
    "questionId": "u01-s005-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "河岸里程牌以碼頭為 0 公里。甲站位於 +12 公里，乙站與甲站關於碼頭對稱。乙站的坐標為何？",
    "choices": [
      "12",
      "0",
      "24",
      "-12"
    ],
    "answerIndex": 3,
    "explanation": "關於 0 對稱的兩個坐標互為相反數，距離碼頭同為 12 公里但方向相反。因此 +12 的對稱位置是 -12。24 是兩站間距離，不是乙站坐標；0 則是對稱中心。",
    "steps": [
      "確認對稱中心是坐標 0。",
      "保持到中心的距離 12 公里不變。",
      "把方向改為相反，得到乙站坐標 -12。"
    ],
    "commonMistake": "把兩站之間的總距離 24 公里當成乙站坐標，會混淆位置與兩點距離。",
    "concept": "相反數與原數距離原點相同、方向相反，兩數相加等於零",
    "tags": [
      "數與量",
      "相反數",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  "u01-s006-v005": {
    "questionId": "u01-s006-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 |a|=7 且 a＜0，下列哪一組依序表示 a、a 的相反數、|a|？",
    "choices": [
      "7、-7、7",
      "-7、7、7",
      "-7、-7、7",
      "7、7、-7"
    ],
    "answerIndex": 1,
    "explanation": "|a|=7 表示 a 到原點的距離是 7，所以 a 可能是 7 或 -7；再由 a＜0 可確定 a=-7。-7 的相反數是 7，而 |-7|=7，因此依序為 -7、7、7。第一組把 a 的符號判錯，第三組沒有改變相反數的符號，第四組還把絕對值寫成負數。",
    "steps": [
      "由 |a|=7 列出 a=7 或 a=-7。",
      "利用 a＜0 確定 a=-7。",
      "求出 a 的相反數為 7、|a|為 7，得到 -7、7、7。"
    ],
    "commonMistake": "由 |a|=7 直接取 a=7，會忽略 a＜0，連帶把三個值的順序判錯。",
    "concept": "絕對值表示到原點的距離，結果非負，並須配合原數符號判斷",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "進階"
    ],
    "estimatedTimeSec": 95
  },
  "u01-s006-v006": {
    "questionId": "u01-s006-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "恆溫箱以目標溫度為基準，感測器將高於目標記正、低於目標記負。某次偏差紀錄為 -7°C；若報表只填「偏離目標的大小」，應填多少？",
    "choices": [
      "7°C",
      "-7°C",
      "0°C",
      "14°C"
    ],
    "answerIndex": 0,
    "explanation": "偏差紀錄 -7°C 表示實際溫度位在目標值下方 7°C；報表只要偏離的大小，因此取 |-7|=7°C。-7°C 保留了方向，不是大小；0°C 表示沒有偏差，14°C 則把距離錯誤加倍，所以應填 7°C。",
    "steps": [
      "辨認 -7°C 是帶方向的偏差紀錄。",
      "報表只要大小，因此對偏差取絕對值。",
      "計算 |-7|=7°C，並確認大小不得為負。"
    ],
    "commonMistake": "直接把帶方向的偏差 -7°C 填入大小欄，會忽略絕對值結果必為非負。",
    "concept": "絕對值表示到原點的距離，結果非負，並須配合原數符號判斷",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "素養"
    ],
    "estimatedTimeSec": 95
  },
  "u01-s007-v005": {
    "questionId": "u01-s007-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-distance",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "數線上 A 點坐標為 -4。B 點與 A 點距離 6 單位，且 B＞0，則 B 點坐標為何？",
    "choices": [
      "-10",
      "10",
      "2",
      "-2"
    ],
    "answerIndex": 2,
    "explanation": "與 -4 距離 6 的位置有 -4+6=2 與 -4-6=-10。條件 B＞0 只保留 2，因此答案唯一。10 與 -2 都不滿足距離 6；若只往左或只往右找，會漏掉另一個候選位置。",
    "steps": [
      "由距離條件列出 -4±6。",
      "得到兩個候選坐標 2 與 -10。",
      "利用 B＞0 排除 -10，確定 B=2。"
    ],
    "commonMistake": "只計算 -4-6=-10 而沒有同時考慮右移 6 單位，會漏掉符合正數條件的 2。",
    "concept": "兩點距離可用坐標差的絕對值表示，距離條件常須配合位置限制",
    "tags": [
      "數與量",
      "絕對值與距離",
      "進階"
    ],
    "estimatedTimeSec": 95
  },
  "u01-s007-v006": {
    "questionId": "u01-s007-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-distance",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "包裝機設定每包 120 公克，允許誤差不超過 3 公克。下列哪個實測重量不合格？",
    "choices": [
      "118 公克",
      "116 公克",
      "121 公克",
      "123 公克"
    ],
    "answerIndex": 1,
    "explanation": "合格條件是 |實測值-120|≤3。118、121、123 與 120 的差分別為 2、1、3，都在容許範圍；116 的差是 4，超過 3 公克，因此只有 116 公克不合格。誤差剛好 3 公克仍屬合格，因為『不超過』包含等於。",
    "steps": [
      "把每個實測重量與 120 公克相減。",
      "取差的絕對值，得到偏差大小。",
      "比較偏差是否超過 3 公克，找出 116 公克。"
    ],
    "commonMistake": "把「不超過 3」誤解成必須小於 3，會把偏差剛好 3 公克的 123 公克錯判為不合格。",
    "concept": "兩點距離可用坐標差的絕對值表示，距離條件常須配合位置限制",
    "tags": [
      "數與量",
      "絕對值與距離",
      "素養"
    ],
    "estimatedTimeSec": 100
  },
  "u01-s008-v005": {
    "questionId": "u01-s008-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-addition",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知 (-18)+7+x+13=0，則 x 的相反數為何？",
    "choices": [
      "-2",
      "20",
      "-20",
      "2"
    ],
    "answerIndex": 3,
    "explanation": "先合併已知加數：(-18)+7+13=2，所以 2+x=0，得到 x=-2。題目最後問的是 x 的相反數，因此答案是 2，而不是直接選 x 本身的 -2；20 與 -20 都來自錯誤合併已知加數。",
    "steps": [
      "先計算 (-18)+7+13=2。",
      "由 2+x=0 求得 x=-2。",
      "再取 x 的相反數，得到 2。"
    ],
    "commonMistake": "求得 x=-2 後直接作答，會忘記題目問的是 x 的相反數而誤選 -2。",
    "concept": "整數加法須同時處理方向與數量，同號相加、異號相減並判斷符號",
    "tags": [
      "數與量",
      "整數加法",
      "進階"
    ],
    "estimatedTimeSec": 85
  },
  "u01-s008-v006": {
    "questionId": "u01-s008-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-addition",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "行動電源原有 60% 電量。系統用「百分點」記錄變化：上午 -18 個百分點、中午 +25 個百分點、下午 -9 個百分點。最後電量是多少？",
    "choices": [
      "76%",
      "42%",
      "58%",
      "8%"
    ],
    "answerIndex": 2,
    "explanation": "題目用百分點記錄，因此直接把各次變化加到原來的 60：60+(-18)+25+(-9)=58。負號代表耗電、正號代表充電；這裡不是把 18%、25%、9% 依當時電量做比例乘算，最後電量為 58%。",
    "steps": [
      "從初始 60% 扣除上午的 18 個百分點。",
      "再加入中午 25 個百分點並扣除下午 9 個百分點。",
      "計算 60-18+25-9=58%。"
    ],
    "commonMistake": "把充電的 +25 個百分點也當成耗電量扣除，會錯算最後電量並失去正負變化的意義。",
    "concept": "整數加法須同時處理方向與數量，同號相加、異號相減並判斷符號",
    "tags": [
      "數與量",
      "整數加法",
      "素養"
    ],
    "estimatedTimeSec": 95
  },
  "u01-s009-v005": {
    "questionId": "u01-s009-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-subtraction",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "計算 [(-3)-(-8)]-[5-(-2)] 的值。",
    "choices": [
      "-2",
      "2",
      "-12",
      "12"
    ],
    "answerIndex": 0,
    "explanation": "第一個括號為 -3+8=5，第二個括號為 5+2=7，所以原式是 5-7=-2。兩處「減去負數」都要改成加上正數；若只處理其中一處或把最後的減法改成加法，就會得到其他選項。",
    "steps": [
      "計算 (-3)-(-8)=5。",
      "計算 5-(-2)=7。",
      "再算 5-7=-2。"
    ],
    "commonMistake": "只把其中一個減負數改成加法，會使兩個括號的值錯誤而無法得到 -2。",
    "concept": "減去一個數等於加上它的相反數，再依整數加法規則計算",
    "tags": [
      "數與量",
      "整數減法",
      "進階"
    ],
    "estimatedTimeSec": 95
  },
  "u01-s009-v006": {
    "questionId": "u01-s009-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-subtraction",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "冷凍庫早上溫度為 -6°C，中午為 -2°C。從早上到中午，溫度上升了多少度？",
    "choices": [
      "-8°C",
      "-4°C",
      "8°C",
      "4°C"
    ],
    "answerIndex": 3,
    "explanation": "溫度變化量是中午減早上：-2-(-6)=-2+6=4°C，因此上升 4°C。-4°C 表示下降，8°C 是把兩個溫度的絕對值相加；題目問的是兩時刻的差。結果為正也與『上升』的敘述一致，可用來檢查方向。",
    "steps": [
      "用後來溫度減原來溫度。",
      "列式 -2-(-6)，把減負數改成加 6。",
      "得到 4°C，正值也符合題目所說的上升。"
    ],
    "commonMistake": "把兩個負溫度的絕對值 6 與 2 相加，會把實際溫差 4°C 錯算成 8°C。",
    "concept": "減去一個數等於加上它的相反數，再依整數加法規則計算",
    "tags": [
      "數與量",
      "整數減法",
      "素養"
    ],
    "estimatedTimeSec": 90
  },
  "u01-s010-v005": {
    "questionId": "u01-s010-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "計算 (-3)×(-4)÷6×(-5) 的值。",
    "choices": [
      "10",
      "-10",
      "-2",
      "2"
    ],
    "answerIndex": 1,
    "explanation": "乘除同級，依序計算：(-3)×(-4)=12，12÷6=2，2×(-5)=-10。也可先數負因數，共三個負號，所以結果應為負。依序運算與負號個數兩種方法能互相驗證，漏掉最後一個負號才會誤選 10。",
    "steps": [
      "依序計算 (-3)×(-4)=12。",
      "再算 12÷6=2。",
      "最後算 2×(-5)=-10，並核對負號個數。"
    ],
    "commonMistake": "只看到前兩個負數相乘為正，會忽略最後再乘 -5 而把結果錯寫成 10。",
    "concept": "整數乘除先依負號個數判斷正負，再計算絕對值的乘除",
    "tags": [
      "數與量",
      "整數乘除",
      "進階"
    ],
    "estimatedTimeSec": 90
  },
  "u01-s010-v006": {
    "questionId": "u01-s010-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "遊戲規則是每答錯一題記 -4 分。小明連續答錯 6 題後，系統把總扣分平均分到 3 回合紀錄，每回合應記多少分？",
    "choices": [
      "-8 分",
      "8 分",
      "-24 分",
      "24 分"
    ],
    "answerIndex": 0,
    "explanation": "六題的總變化是 6×(-4)=-24 分，再平均分到 3 回合，得到 -24÷3=-8 分。負號表示每回合都是扣分紀錄；-24 是尚未平均前的總扣分。8 分漏掉扣分方向，24 分則同時漏掉平均與負號。",
    "steps": [
      "計算 6 題的總扣分 6×(-4)=-24。",
      "將總扣分平均分成 3 回合。",
      "計算 -24÷3=-8 分。"
    ],
    "commonMistake": "算出總扣分 -24 後未再除以 3，會把整體紀錄誤當成每回合紀錄。",
    "concept": "整數乘除先依負號個數判斷正負，再計算絕對值的乘除",
    "tags": [
      "數與量",
      "整數乘除",
      "素養"
    ],
    "estimatedTimeSec": 95
  },
  "u01-s011-v005": {
    "questionId": "u01-s011-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "計算 8-[3+2×(-4)]×(-5) 的值。",
    "choices": [
      "17",
      "-1",
      "-17",
      "25"
    ],
    "answerIndex": 2,
    "explanation": "括號內先算 2×(-4)=-8，再得 3+(-8)=-5。接著依乘法優先計算 (-5)×(-5)=25，最後 8-25=-17。若把括號外的 -5 提前與 8 運算，或漏掉兩個負數相乘為正，都會破壞原式的運算順序。",
    "steps": [
      "先算括號內的乘法 2×(-4)=-8。",
      "完成括號運算 3+(-8)=-5，再算 (-5)×(-5)=25。",
      "最後計算 8-25=-17。"
    ],
    "commonMistake": "把括號外的 ×(-5) 與前面的 8 先運算，會違反括號與乘法優先順序。",
    "concept": "整數混合運算依括號、指數、乘除、加減的順序逐層計算",
    "tags": [
      "數與量",
      "整數四則混合",
      "進階"
    ],
    "estimatedTimeSec": 100
  },
  "u01-s011-v006": {
    "questionId": "u01-s011-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "會員原有 100 點。購買 3 件商品，每件扣 12 點；之後完成 2 個任務，每個任務加 5 點。最後剩多少點？",
    "choices": [
      "54 點",
      "74 點",
      "126 點",
      "66 點"
    ],
    "answerIndex": 1,
    "explanation": "商品扣點為 3×(-12)=-36，任務加點為 2×5=10，所以最後是 100-36+10=74 點。商品件數與任務個數各自對應乘法，不能先把 12 與 5 相加。54 點是把任務獎勵也當扣點，66 點則少加了一部分獎勵。",
    "steps": [
      "計算三件商品共扣 3×12=36 點。",
      "計算兩個任務共加 2×5=10 點。",
      "由 100-36+10 得到 74 點。"
    ],
    "commonMistake": "把每件扣點與每個任務加點先相加，會忽略兩種事件的次數不同而算錯。",
    "concept": "整數混合運算依括號、指數、乘除、加減的順序逐層計算",
    "tags": [
      "數與量",
      "整數四則混合",
      "素養"
    ],
    "estimatedTimeSec": 95
  },
  "u01-s012-v005": {
    "questionId": "u01-s012-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-meaning",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "計算 -2⁴+(-2)³ 的值。",
    "choices": [
      "24",
      "-8",
      "8",
      "-24"
    ],
    "answerIndex": 3,
    "explanation": "-2⁴ 的負號不在括號內，所以是 -(2⁴)=-16；(-2)³ 的底數包含負號，三次方為 -8。兩項相加得 -24。選 -8 只算了第二項，選 8 則又把負號去掉；若把第一項誤當 (-2)⁴，也會把 -16 錯成 16。",
    "steps": [
      "依括號範圍計算 -2⁴=-(2⁴)=-16。",
      "計算 (-2)³=-8。",
      "相加 -16+(-8)=-24。"
    ],
    "commonMistake": "把 -2⁴ 誤看成 (-2)⁴，會忽略負號不屬於底數而將第一項錯算成正 16。",
    "concept": "指數表示底數連乘的次數，括號會決定負號是否屬於底數",
    "tags": [
      "數與量",
      "指數意義",
      "進階"
    ],
    "estimatedTimeSec": 95
  },
  "u01-s012-v006": {
    "questionId": "u01-s012-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-meaning",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "備份系統最初有 3 個資料區塊，每完成一輪，區塊數都變為原來的 2 倍。連續完成 4 輪後，共有多少個資料區塊？",
    "choices": [
      "24 個",
      "16 個",
      "48 個",
      "81 個"
    ],
    "answerIndex": 2,
    "explanation": "每輪都變為原來的 2 倍，連續四輪的倍率是 2⁴=16。最初有 3 個資料區塊，所以最後共有 3×16=48 個。24 個是把四次加倍誤成乘以 2×4，16 個則漏掉最初的 3 個。",
    "steps": [
      "用 2⁴ 表示連續四輪各乘 2。",
      "計算 2⁴=16，得到總倍率。",
      "將初始 3 個乘以 16，得到 48 個資料區塊。"
    ],
    "commonMistake": "把四輪加倍理解成乘以 2×4=8，會把指數的連乘意義錯當普通乘法。",
    "concept": "指數表示底數連乘的次數，括號會決定負號是否屬於底數",
    "tags": [
      "數與量",
      "指數意義",
      "素養"
    ],
    "estimatedTimeSec": 100
  },
  "u01-s013-v005": {
    "questionId": "u01-s013-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-laws",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "將 (2³)²×2⁴÷2⁵ 化為以 2 為底的指數形式，結果為何？",
    "choices": [
      "2⁵",
      "2²",
      "2⁷",
      "2¹⁰"
    ],
    "answerIndex": 0,
    "explanation": "先用冪的乘方得 (2³)²=2⁶，再依同底數乘除將指數相加、相減：2^(6+4-5)=2⁵。最後底數仍維持 2，只有指數依規則改變；2¹⁰、2² 與 2⁷ 都是漏做或做錯其中一步。",
    "steps": [
      "將 (2³)² 化成 2⁶。",
      "同底數相乘，把指數 6 與 4 相加。",
      "再除以 2⁵，指數減 5，得到 2⁵。"
    ],
    "commonMistake": "把冪的乘方誤算成指數相加，會從一開始把 (2³)² 錯寫成 2⁵。",
    "concept": "同底數乘除與冪的乘方須依對應指數律化簡，底數條件不可忽略",
    "tags": [
      "數與量",
      "指數律",
      "進階"
    ],
    "estimatedTimeSec": 100
  },
  "u01-s013-v006": {
    "questionId": "u01-s013-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-laws",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某資料區塊原大小為 3² KB，之後連續 4 輪都變為前一輪的 3 倍。若以 3 為底表示最後大小，應寫成何者？",
    "choices": [
      "3⁸ KB",
      "9⁴ KB",
      "3² KB",
      "3⁶ KB"
    ],
    "answerIndex": 3,
    "explanation": "每輪乘 3，四輪共乘 3⁴；原大小是 3²，所以最後為 3²×3⁴=3^(2+4)=3⁶ KB。題目要求以 3 為底，且 9⁴=3⁸ 並不等值；3² 完全忽略成長，3⁸ 則把四輪錯當成原指數乘 4。",
    "steps": [
      "把四輪各乘 3 表示成 3⁴。",
      "將原大小 3² 與成長倍率 3⁴ 相乘。",
      "同底數指數相加，得到 3⁶ KB。"
    ],
    "commonMistake": "把四輪成長誤寫成將原指數 2 乘 4，會錯得到 3⁸ 而不是 3⁶。",
    "concept": "同底數乘除與冪的乘方須依對應指數律化簡，底數條件不可忽略",
    "tags": [
      "數與量",
      "指數律",
      "素養"
    ],
    "estimatedTimeSec": 100
  },
  "u01-s014-v005": {
    "questionId": "u01-s014-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-scientific-notation",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "計算 (6×10⁵)÷(2×10²)，並寫成標準科學記號。",
    "choices": [
      "3×10⁷",
      "3×10³",
      "3×10²",
      "12×10³"
    ],
    "answerIndex": 1,
    "explanation": "係數相除得 6÷2=3，同底數 10 相除時指數相減，10^(5-2)=10³，因此結果是 3×10³。12×10³ 的係數計算錯誤；3×10² 少減一個指數，數值只有 300，3×10⁷ 則把指數誤作相加。",
    "steps": [
      "計算係數 6÷2=3。",
      "計算 10⁵÷10²=10³。",
      "合併為 3×10³，並確認係數介於 1 與 10 之間。"
    ],
    "commonMistake": "把科學記號相除時的指數誤作相加，會將 10⁵÷10² 錯算成 10⁷。",
    "concept": "正數的科學記號為 a×10ⁿ，其中 1≤a<10，n 為整數",
    "tags": [
      "數與量",
      "科學記號",
      "進階"
    ],
    "estimatedTimeSec": 95
  },
  "u01-s014-v006": {
    "questionId": "u01-s014-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-scientific-notation",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某微粒直徑量得 0.000045 公尺。將此數寫成標準科學記號，何者正確？",
    "choices": [
      "4.5×10⁻⁵ 公尺",
      "4.5×10⁻⁴ 公尺",
      "4.5×10⁵ 公尺",
      "45×10⁻⁵ 公尺"
    ],
    "answerIndex": 0,
    "explanation": "把小數點向右移 5 位可得到係數 4.5，因此要乘 10⁻⁵ 還原原數，寫成 4.5×10⁻⁵ 公尺。45×10⁻⁵ 的係數不合標準且數值大十倍；4.5×10⁻⁴ 也大十倍，4.5×10⁵ 則把指數正負顛倒。",
    "steps": [
      "將小數點移到第一個非零數字 4 的後面。",
      "共向右移 5 位，因此指數是 -5。",
      "確認 4.5 介於 1 與 10 之間，得到標準形式。"
    ],
    "commonMistake": "只數小數點後的零而少算一位，會把 0.000045 錯寫成 4.5×10⁻⁴。",
    "concept": "正數的科學記號為 a×10ⁿ，其中 1≤a<10，n 為整數",
    "tags": [
      "數與量",
      "科學記號",
      "素養"
    ],
    "estimatedTimeSec": 95
  },
  "u01-s015-v005": {
    "questionId": "u01-s015-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-literacy",
    "skillId": "integer-literacy-context",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "潛水器原在海平面下 12 公尺，接著下降 8 公尺、上升 15 公尺，最後再下降 3 公尺。其最後位置與到海平面的距離分別為何？",
    "choices": [
      "位於 +8 公尺，距離 8 公尺",
      "位於 -38 公尺，距離 38 公尺",
      "位於 -8 公尺，距離 8 公尺",
      "位於 -2 公尺，距離 2 公尺"
    ],
    "answerIndex": 2,
    "explanation": "以海平面為 0，初始位置是 -12；下降 8 得 -20，上升 15 得 -5，再下降 3 得 -8。最後坐標為 -8 公尺，而到海平面的距離取絕對值為 8 公尺，因此位置帶負號、距離不帶負號。",
    "steps": [
      "把初始海平面下 12 公尺記為 -12。",
      "依序計算 -12-8+15-3=-8。",
      "取 |-8|=8，分別回答位置 -8 公尺與距離 8 公尺。"
    ],
    "commonMistake": "把最後位置的負號也套用到距離，會忘記距離是非負量而混淆坐標與距離。",
    "concept": "把生活情境中的基準、方向、變化與距離轉成帶正負號的算式",
    "tags": [
      "數與量",
      "整數素養題",
      "進階"
    ],
    "estimatedTimeSec": 110
  }
};
