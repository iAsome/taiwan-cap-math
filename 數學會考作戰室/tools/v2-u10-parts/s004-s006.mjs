export const U10_PART_S004_S006 = [
  {
    "questionId": "u10-s004-v001",
    "skillId": "polynomial-add-subtract",
    "topicId": "u10-polynomial-ops",
    "difficulty": "basic",
    "text": "計算 (2x + 3) + (x − 1)。",
    "choices": [
      "3x + 2",
      "3x + 4",
      "x + 2",
      "3x − 4"
    ],
    "answerIndex": 0,
    "explanation": "兩個多項式相加時，括號前是加號就可以直接去掉括號，不必變號。x 的一次項 2x 與 x 是同類項，係數 2 加 1 得 3x；常數項 3 減 1 得 2，整式化簡為 3x + 2。若寫 3x + 4，是把常數 3−1 誤算成 3+1；x + 2 則 x 項只保留 2x，沒把後面括號裡的 x 加進來。",
    "steps": [
      "去掉括號。",
      "2x + x = 3x。",
      "3 − 1 = 2。"
    ],
    "commonMistake": "常數項 3 與 −1 相減時誤用加法，算成 3+1，最後寫成 3x + 4。",
    "concept": "多項式加減：去括號後合併同類項，減法要變號"
  },
  {
    "questionId": "u10-s004-v002",
    "skillId": "polynomial-add-subtract",
    "topicId": "u10-polynomial-ops",
    "difficulty": "basic",
    "text": "計算 (5x − 2) − (2x − 1)。",
    "choices": [
      "3x − 3",
      "3x − 1",
      "7x − 1",
      "7x − 3"
    ],
    "answerIndex": 1,
    "explanation": "減去 (2x − 1) 時，括號前面是減號，括號內每一項都要變號，變成 5x − 2 − 2x + 1。x 的一次項 5 − 2 = 3，寫 3x；常數 −2 + 1 = −1，整理得 3x − 1。3x − 3 是把括號內 +1 仍當 −1；7x − 1 則把 5x 與 2x 相加成 7x，忘了前面是減法。",
    "steps": [
      "−(2x−1) 變 −2x+1。",
      "5x − 2x = 3x。",
      "−2 + 1 = −1。"
    ],
    "commonMistake": "減 (2x−1) 時括號內 +1 沒變成 −1，常數 −2−1 算成 −3，寫成 3x − 3。",
    "concept": "多項式加減：去括號後合併同類項，減法要變號"
  },
  {
    "questionId": "u10-s004-v003",
    "skillId": "polynomial-add-subtract",
    "topicId": "u10-polynomial-ops",
    "difficulty": "basic",
    "text": "計算 (3x² + x) + (x² − 2x)。",
    "choices": [
      "4x² + 3x",
      "2x² − x",
      "4x² − x",
      "4x² + x"
    ],
    "answerIndex": 2,
    "explanation": "去掉括號後，x² 的同類項係數 3 加 1 得 4，寫 4x²；x 的同類項 1 加 (−2) 得 −1，寫 −x。整式整理為 4x² − x。4x² + 3x 是把 x 項 1−2 算成 +1 再加 2；2x² − x 則 x² 只加 1，沒把第一個括號的 3 算進去。",
    "steps": [
      "x² 項 3 + 1 = 4。",
      "x 項 1 − 2 = −1。",
      "寫 4x² − x。"
    ],
    "commonMistake": "x 的一次項 1−2 算成 +1 再加 2，同類項合併錯誤，寫成 4x² + 3x。",
    "concept": "多項式加減：去括號後合併同類項，減法要變號"
  },
  {
    "questionId": "u10-s004-v004",
    "skillId": "polynomial-add-subtract",
    "topicId": "u10-polynomial-ops",
    "difficulty": "basic",
    "text": "計算 (4 − 3x) + (2x + 5)。",
    "choices": [
      "9 + x",
      "−x − 1",
      "9 − 5x",
      "9 − x"
    ],
    "answerIndex": 3,
    "explanation": "x 的一次項 −3x 與 2x 是同類項，係數 −3 加 2 得 −1，寫 −x；常數 4 加 5 得 9。習慣把常數放前面，整理為 9 − x。9 + x 是把 −3+2 誤算成 +3−2；−x − 1 則常數 4+5 誤算成 4−5，正負都弄反。",
    "steps": [
      "x 項 −3x + 2x = −x。",
      "常數 4 + 5 = 9。",
      "寫 9 − x。"
    ],
    "commonMistake": "−3x 與 2x 合併時算成 +3x − 2x，x 項符號弄反，最後寫成 9 + x。",
    "concept": "多項式加減：去括號後合併同類項，減法要變號"
  },
  {
    "questionId": "u10-s004-v005",
    "skillId": "polynomial-add-subtract",
    "topicId": "u10-polynomial-ops",
    "difficulty": "standard",
    "text": "計算 (x² + 3x + 2) − (x² − x + 1)。",
    "choices": [
      "4x + 1",
      "4x + 3",
      "2x + 1",
      "4x − 1"
    ],
    "answerIndex": 0,
    "explanation": "減去 (x² − x + 1) 時，括號前是減號，括號內每一項都要變號。x² 項 x² − x² 相消；x 項 3x − (−x) 變成 3x + x = 4x；常數 2 − 1 = 1，得 4x + 1。4x + 3 是把常數 2−(−1) 誤算成 2+1；2x + 1 則減式中 −x 變號時沒變成 +x，x 項只算 3−1。",
    "steps": [
      "x² 項相消。",
      "x：3 + 1 = 4。",
      "常數 2 − 1 = 1。"
    ],
    "commonMistake": "減式中 −x 變號時沒變成 +x，x 項只算 3−1 得 2x，寫成 2x + 1。",
    "concept": "多項式加減：去括號後合併同類項，減法要變號"
  },
  {
    "questionId": "u10-s004-v006",
    "skillId": "polynomial-add-subtract",
    "topicId": "u10-polynomial-ops",
    "difficulty": "standard",
    "text": "計算 2(3x + 1) − (x − 4)。（先展開）",
    "choices": [
      "5x − 2",
      "5x + 6",
      "6x + 6",
      "6x − 2"
    ],
    "answerIndex": 1,
    "explanation": "題目要求先展開：2(3x + 1) = 6x + 2，分配律要乘進括號內每一項。再減 (x − 4)，括號內變號得 6x + 2 − x + 4。x 項 6 − 1 = 5x，常數 2 + 4 = 6，整理得 5x + 6。5x − 2 是 −4 沒變 +4；6x + 6 則展開後沒減去後面的 x，只做了分配律。",
    "steps": [
      "展開 6x + 2。",
      "減 x 加 4。",
      "合併 5x + 6。"
    ],
    "commonMistake": "減 (x−4) 時 −4 沒有變成 +4，常數 2+4 漏加，寫成 5x − 2。",
    "concept": "多項式加減：去括號後合併同類項，減法要變號"
  },
  {
    "questionId": "u10-s004-v007",
    "skillId": "polynomial-add-subtract",
    "topicId": "u10-polynomial-ops",
    "difficulty": "standard",
    "text": "小明有 (5x+10) 元，花 (2x+3) 元，剩多少？",
    "choices": [
      "3x + 13",
      "7x + 7",
      "3x + 7",
      "3x − 7"
    ],
    "answerIndex": 2,
    "explanation": "剩錢用減法列式 (5x + 10) − (2x + 3)，花掉的錢整段放在減號後面。去括號變 5x + 10 − 2x − 3，x 項 5 − 2 = 3x，常數 10 − 3 = 7，得 3x + 7 元。3x + 13 是括號內 +3 沒變 −3，變成 10+3；7x + 7 則 x 項 5+2 而非 5−2，減法當加法。",
    "steps": [
      "列式 (5x+10) − (2x+3)。",
      "x 項 5 − 2 = 3。",
      "常數 10 − 3 = 7。"
    ],
    "commonMistake": "花錢減法時括號內 +3 沒變 −3，常數 10−3 誤算成 10+3，寫成 3x + 13。",
    "concept": "多項式加減：去括號後合併同類項，減法要變號"
  },
  {
    "questionId": "u10-s004-v008",
    "skillId": "polynomial-add-subtract",
    "topicId": "u10-polynomial-ops",
    "difficulty": "standard",
    "text": "計算 (−2x + 5) + (3x − 8)。",
    "choices": [
      "x + 13",
      "5x − 3",
      "−5x − 3",
      "x − 3"
    ],
    "answerIndex": 3,
    "explanation": "x 的一次項 −2x 與 3x 合併，係數 −2 加 3 得 1，寫 x；常數 5 加 (−8) 得 −3，整理為 x − 3。x + 13 是把 5−8 誤算成 5+8，正負弄反；5x − 3 則 x 係數 −2+3 算成 5；−5x − 3 是兩項 x 係數都取絕對值再相加。",
    "steps": [
      "x：−2 + 3 = 1。",
      "常數 5 − 8 = −3。",
      "得 x − 3。"
    ],
    "commonMistake": "常數 5 與 −8 合併時算成 5+8，正負弄反，寫成 x + 13。",
    "concept": "多項式加減：去括號後合併同類項，減法要變號"
  },
  {
    "questionId": "u10-s004-v009",
    "skillId": "polynomial-add-subtract",
    "topicId": "u10-polynomial-ops",
    "difficulty": "standard",
    "text": "計算 (4a − 3b) − (a + 2b)。",
    "choices": [
      "3a − 5b",
      "3a + b",
      "5a − 5b",
      "3a − b"
    ],
    "answerIndex": 0,
    "explanation": "減 (a + 2b) 時括號前是減號，括號內每一項都要變號，不能只做一半。a 項 4a − a = 3a；b 項 −3b − 2b = −5b，兩個 b 項都是減，得 3a − 5b。3a + b 是把 b 項 −3−2 算成 −3+2；3a − b 則只減 2b 一次；5a − 5b 是 a 項 4−1 誤算成 4+1。",
    "steps": [
      "a 項 4 − 1 = 3。",
      "b 項 −3 − 2 = −5。",
      "得 3a − 5b。"
    ],
    "commonMistake": "b 項 −3b 減 2b 時算成 −3b+2b，減號沒延續到後面的項，寫成 3a + b。",
    "concept": "多項式加減：去括號後合併同類項，減法要變號"
  },
  {
    "questionId": "u10-s004-v010",
    "skillId": "polynomial-add-subtract",
    "topicId": "u10-polynomial-ops",
    "difficulty": "advanced",
    "text": "計算 (x² + 2) − (2x² − 1)。",
    "choices": [
      "−x² + 1",
      "−x² + 3",
      "3x² + 3",
      "−3x² + 3"
    ],
    "answerIndex": 1,
    "explanation": "減 (2x² − 1) 時括號內每一項都要變號，減號要延續到括號內所有項：x² 項 x² − 2x²，係數 1 − 2 = −1，寫 −x²；常數 2 − (−1) 變成 2 + 1 = 3，得 −x² + 3。−x² + 1 是把 2−(−1) 誤算成 2−1；3x² + 3 則 x² 相減弄成 1+2 相加，最高次項符號全反。",
    "steps": [
      "x² 1 − 2 = −1。",
      "常數 2 + 1 = 3。",
      "得 −x² + 3。"
    ],
    "commonMistake": "常數 2 減 (−1) 時沒有變成 2+1，只寫 2−1，最後得 −x² + 1。",
    "concept": "多項式加減：去括號後合併同類項，減法要變號"
  },
  {
    "questionId": "u10-s004-v011",
    "skillId": "polynomial-add-subtract",
    "topicId": "u10-polynomial-ops",
    "difficulty": "advanced",
    "text": "計算 (6x − 1) + (−2x + 4) − (x − 2)。",
    "choices": [
      "3x + 1",
      "9x + 5",
      "3x + 5",
      "3x − 5"
    ],
    "answerIndex": 2,
    "explanation": "三個括號依序去括號，注意最後一個前面是減號。x 項 6 − 2 − 1 = 3x；常數 −1 + 4 + 2 = 5，得 3x + 5。3x + 1 是減 (x−2) 時 −2 沒變 +2，常數少 4；9x + 5 則最後 −x 沒減掉，6−2 變 6+2；3x − 5 是常數 −1+4−2 三項符號全反。",
    "steps": [
      "x：6 − 2 − 1 = 3。",
      "常數 −1 + 4 + 2 = 5。",
      "得 3x + 5。"
    ],
    "commonMistake": "減 (x−2) 時 −2 沒變 +2，常數 −1+4 只算成 −1，最後寫成 3x + 1。",
    "concept": "多項式加減：去括號後合併同類項，減法要變號"
  },
  {
    "questionId": "u10-s004-v012",
    "skillId": "polynomial-add-subtract",
    "topicId": "u10-polynomial-ops",
    "difficulty": "literacy",
    "text": "若 A = 2x² + x，B = x² − 3x + 1，求 A − B。",
    "choices": [
      "x² − 2x − 1",
      "3x² + 4x − 1",
      "x² + 4x + 1",
      "x² + 4x − 1"
    ],
    "answerIndex": 3,
    "explanation": "A − B 表示從 A 減去整個 B，B 的每一項都要變號，減號要延續到括號內所有項才算完整。(2x² + x) − (x² − 3x + 1) 變成 2x² + x − x² + 3x − 1。x² 項 2 − 1 = 1；x 項 1 + 3 = 4；常數 −1，得 x² + 4x − 1。x² − 2x − 1 是 1−(−3) 算成 1−3；x² + 4x + 1 則常數 +1 沒變 −1。",
    "steps": [
      "減 B 每一項變號。",
      "x²：2 − 1 = 1。",
      "x：1 + 3 = 4，常數 −1。"
    ],
    "commonMistake": "x 的一次項 1 減 (−3) 應變 1+3，若算成 1−3 就會得 x² − 2x − 1。",
    "concept": "多項式加減：去括號後合併同類項，減法要變號"
  },
  {
    "questionId": "u10-s005-v001",
    "skillId": "monomial-multiply",
    "topicId": "u10-polynomial-ops",
    "difficulty": "basic",
    "text": "計算 3x · 4x。",
    "choices": [
      "12x²",
      "7x",
      "12x",
      "7x²"
    ],
    "answerIndex": 0,
    "explanation": "單項式相乘，係數與係數相乘、同底指數相加。係數 3 × 4 = 12，x 的指數 1 + 1 = 2，得 12x²。7x 是把係數 3 與 4 相加；12x 則 x 指數沒加，只保留一次方；7x² 雖然指數對了，係數仍用加法。",
    "steps": [
      "係數 3 × 4 = 12。",
      "x 指數 1 + 1 = 2。",
      "得 12x²。"
    ],
    "commonMistake": "單項式相乘時把係數 3 與 4 相加而非相乘，寫成 7x 或 7x²。",
    "concept": "單項式相乘：係數相乘，同底數指數相加"
  },
  {
    "questionId": "u10-s005-v002",
    "skillId": "monomial-multiply",
    "topicId": "u10-polynomial-ops",
    "difficulty": "basic",
    "text": "計算 (−2x²) · 5x³。",
    "choices": [
      "−10x⁶",
      "−10x⁵",
      "3x⁵",
      "10x⁵"
    ],
    "answerIndex": 1,
    "explanation": "單項式相乘，係數與係數相乘、同底指數相加。係數 (−2) × 5 = −10，負正相乘得負；x 指數 2 + 3 = 5，得 −10x⁵。−10x⁶ 是指數 2+3 多加了 1；3x⁵ 則係數 −2+5 用加法；10x⁵ 是 (−2)×5 的負號漏看，正負弄反。",
    "steps": [
      "係數 −2 × 5 = −10。",
      "指數 2 + 3 = 5。",
      "得 −10x⁵。"
    ],
    "commonMistake": "指數 2+3 算成 6，或負係數 (−2)×5 的負號漏看，寫成 10x⁵。",
    "concept": "單項式相乘：係數相乘，同底數指數相加"
  },
  {
    "questionId": "u10-s005-v003",
    "skillId": "monomial-multiply",
    "topicId": "u10-polynomial-ops",
    "difficulty": "basic",
    "text": "計算 6a²b · (−3ab²)。",
    "choices": [
      "−18a²b²",
      "3a³b³",
      "−18a³b³",
      "−18a³b²"
    ],
    "answerIndex": 2,
    "explanation": "多字母單項式相乘，係數與係數相乘，各字母指數分別相加。係數 6 × (−3) = −18；a 指數 2 + 1 = 3，b 指數 1 + 2 = 3，得 −18a³b³。−18a²b² 是 a、b 指數沒全加；−18a³b² 則 b 指數只加 1 沒加 2；3a³b³ 是把係數 6 與 −3 相加。",
    "steps": [
      "係數 −18。",
      "a 指數 3，b 指數 3。",
      "得 −18a³b³。"
    ],
    "commonMistake": "b 的指數 1+2 只保留 1 沒加 2，字母指數合併不完整，寫成 −18a³b²。",
    "concept": "單項式相乘：係數相乘，同底數指數相加"
  },
  {
    "questionId": "u10-s005-v004",
    "skillId": "monomial-multiply",
    "topicId": "u10-polynomial-ops",
    "difficulty": "basic",
    "text": "計算 x⁴ · x²。",
    "choices": [
      "x⁸",
      "2x⁶",
      "x²",
      "x⁶"
    ],
    "answerIndex": 3,
    "explanation": "同底 x 相乘，底數不變、指數相加：4 + 2 = 6，得 x⁶。x⁸ 是把指數 4 與 2 相乘，同底相乘規則用錯；2x⁶ 則多寫係數 2；x² 是把 4−2 誤用相減，除法規則混進乘法。",
    "steps": [
      "底數都是 x。",
      "指數 4 + 2 = 6。",
      "得 x⁶。"
    ],
    "commonMistake": "同底相乘時把指數 4 與 2 相乘而非相加，寫成 x⁸。",
    "concept": "單項式相乘：係數相乘，同底數指數相加"
  },
  {
    "questionId": "u10-s005-v005",
    "skillId": "monomial-multiply",
    "topicId": "u10-polynomial-ops",
    "difficulty": "standard",
    "text": "計算 (−4y³) · (−2y)。",
    "choices": [
      "8y⁴",
      "−8y⁴",
      "6y⁴",
      "8y³"
    ],
    "answerIndex": 0,
    "explanation": "係數 (−4) × (−2) = 8，負負得正，兩個負號相乘會得正數；y 指數 3 + 1 = 4，得 8y⁴。−8y⁴ 是負負沒變正，只處理一個負號；6y⁴ 則係數 −4+(−2) 用加法；8y³ 是 y 指數 3+1 沒加，次數少 1。",
    "steps": [
      "係數 8。",
      "指數 3 + 1 = 4。",
      "得 8y⁴。"
    ],
    "commonMistake": "兩個負係數相乘仍保留一個負號，負負得正規則用錯，寫成 −8y⁴。",
    "concept": "單項式相乘：係數相乘，同底數指數相加"
  },
  {
    "questionId": "u10-s005-v006",
    "skillId": "monomial-multiply",
    "topicId": "u10-polynomial-ops",
    "difficulty": "standard",
    "text": "計算 5 · 3x²。",
    "choices": [
      "8x²",
      "15x²",
      "15x",
      "8x"
    ],
    "answerIndex": 1,
    "explanation": "常數 5 乘單項式 3x²：係數 5 × 3 = 15，x² 的指數不變仍為 2，得 15x²。8x² 是把 5+3 相加；15x 則 x² 次數掉成 x¹，指數沒保留；8x 是係數與指數都弄錯，加法與乘法混用。",
    "steps": [
      "係數 5 × 3 = 15。",
      "x² 保留。",
      "得 15x²。"
    ],
    "commonMistake": "常數乘單項式時把係數 5 與 3 相加，寫成 8x² 而非 15x²。",
    "concept": "單項式相乘：係數相乘，同底數指數相加"
  },
  {
    "questionId": "u10-s005-v007",
    "skillId": "monomial-multiply",
    "topicId": "u10-polynomial-ops",
    "difficulty": "standard",
    "text": "計算 (2x)³。（視為三個 2x 相乘）",
    "choices": [
      "6x³",
      "8x",
      "8x³",
      "2x³"
    ],
    "answerIndex": 2,
    "explanation": "(2x)³ 表示整個 2x 連乘三次，不是只把 2 乘 3：係數 2³ = 8，x 連乘三次得 x³，所以 8x³。6x³ 是把 2×3 當係數，只乘 3 沒立方；2x³ 則只把 x 立方、2 沒立方；8x 是 x 指數沒乘 3，次數不足，整體規則用錯。",
    "steps": [
      "2³ = 8。",
      "x 乘三次得 x³。",
      "得 8x³。"
    ],
    "commonMistake": "把 (2x)³ 算成 2×3·x³，係數只乘 3 沒有算 2³=8，寫成 6x³。",
    "concept": "單項式相乘：係數相乘，同底數指數相加"
  },
  {
    "questionId": "u10-s005-v008",
    "skillId": "monomial-multiply",
    "topicId": "u10-polynomial-ops",
    "difficulty": "standard",
    "text": "長方形長 2x、寬 3x，面積是多少？",
    "choices": [
      "5x",
      "6x",
      "5x²",
      "6x²"
    ],
    "answerIndex": 3,
    "explanation": "長方形面積等於長乘寬，不能把長與寬相加。列式 2x × 3x，係數 2 × 3 = 6，x 指數 1 + 1 = 2，得 6x²。5x 是把長寬 2x+3x 相加，周長與面積混淆；6x 則 x 指數沒加；5x² 是係數 2+3 相加。",
    "steps": [
      "面積 = 長 × 寬。",
      "2x × 3x。",
      "得 6x²。"
    ],
    "commonMistake": "面積題把長 2x 與寬 3x 相加，周長與面積公式混淆，寫成 5x。",
    "concept": "單項式相乘：係數相乘，同底數指數相加"
  },
  {
    "questionId": "u10-s005-v009",
    "skillId": "monomial-multiply",
    "topicId": "u10-polynomial-ops",
    "difficulty": "standard",
    "text": "計算 4m²n · 5mn³。",
    "choices": [
      "20m³n⁴",
      "20m²n³",
      "9m³n⁴",
      "20mn⁴"
    ],
    "answerIndex": 0,
    "explanation": "係數 4 × 5 = 20；m 指數 2 + 1 = 3，n 指數 1 + 3 = 4，兩個字母指數要分別相加，不能漏掉任何一個，得 20m³n⁴。20m²n³ 是 m、n 指數沒全加；9m³n⁴ 則係數 4+5 相加；20mn⁴ 是 m 指數 2+1 漏加，只保留 n 的變化。",
    "steps": [
      "係數 4×5=20。",
      "m：2+1，n：1+3。",
      "得 20m³n⁴。"
    ],
    "commonMistake": "m 的指數 2+1 只保留 2 沒加 1，多字母指數合併不完整，寫成 20m²n⁴。",
    "concept": "單項式相乘：係數相乘，同底數指數相加"
  },
  {
    "questionId": "u10-s005-v010",
    "skillId": "monomial-multiply",
    "topicId": "u10-polynomial-ops",
    "difficulty": "advanced",
    "text": "計算 (−x²) · 3x · (−2x⁴)。",
    "choices": [
      "−6x⁷",
      "6x⁷",
      "6x⁶",
      "−5x⁷"
    ],
    "answerIndex": 1,
    "explanation": "三個因式連乘，係數 (−1) × 3 × (−2) = 6，兩個負號相乘得正；x 指數 2 + 1 + 4 = 7，三個指數全部相加，得 6x⁷。−6x⁷ 是只處理其中一個負號；6x⁶ 則指數 2+1+4 少加 1；−5x⁷ 是把係數用加法 −1+3+(−2)。",
    "steps": [
      "係數 (−1)×3×(−2)=6。",
      "指數 2+1+4=7。",
      "得 6x⁷。"
    ],
    "commonMistake": "兩個負號相乘應為正，若只處理其中一個負號，就會把答案寫成 −6x⁷。",
    "concept": "單項式相乘：係數相乘，同底數指數相加"
  },
  {
    "questionId": "u10-s005-v011",
    "skillId": "monomial-multiply",
    "topicId": "u10-polynomial-ops",
    "difficulty": "advanced",
    "text": "計算 10x⁵ ÷ 2x²。（單項式除法，係數相除、指數相減）",
    "choices": [
      "5x⁷",
      "8x³",
      "5x³",
      "5x²"
    ],
    "answerIndex": 2,
    "explanation": "單項式除法：係數相除、同底指數相減，不能混用乘法的指數相加。係數 10 ÷ 2 = 5，x 指數 5 − 2 = 3，得 5x³。5x⁷ 是把指數 5−2 誤算成 5+2；8x³ 則係數 10−2 用減法；5x² 是指數只減 1，5−2 算成 2。",
    "steps": [
      "係數 10 ÷ 2 = 5。",
      "指數 5 − 2 = 3。",
      "得 5x³。"
    ],
    "commonMistake": "指數相減 5−2 算成 5+2，除法指數規則用錯，寫成 5x⁷。",
    "concept": "單項式相乘：係數相乘，同底數指數相加"
  },
  {
    "questionId": "u10-s005-v012",
    "skillId": "monomial-multiply",
    "topicId": "u10-polynomial-ops",
    "difficulty": "literacy",
    "text": "計算 (−6a³b²) · (−a²b)。",
    "choices": [
      "−6a⁵b³",
      "6a⁶b²",
      "−6a⁶b³",
      "6a⁵b³"
    ],
    "answerIndex": 3,
    "explanation": "係數 (−6) × (−1) = 6，負負得正，兩個負號相乘會得正數；a 指數 3 + 2 = 5，b 指數 2 + 1 = 3，各字母指數分別相加，得 6a⁵b³。−6a⁵b³ 是負負沒變正；6a⁶b³ 則 a 指數 3+2 算成 6；6a⁶b² 是 b 指數 2+1 漏加。",
    "steps": [
      "係數 6。",
      "a 指數 5，b 指數 3。",
      "得 6a⁵b³。"
    ],
    "commonMistake": "負係數 (−6)×(−1) 符號弄錯，負負得正規則用錯，寫成 −6a⁵b³。",
    "concept": "單項式相乘：係數相乘，同底數指數相加"
  },
  {
    "questionId": "u10-s006-v001",
    "skillId": "monomial-polynomial-distribute",
    "topicId": "u10-polynomial-ops",
    "difficulty": "basic",
    "text": "計算 2(x + 3)。",
    "choices": [
      "2x + 6",
      "2x + 3",
      "x + 6",
      "2x + 5"
    ],
    "answerIndex": 0,
    "explanation": "分配律要求 2 乘括號內每一項，不能只做一半。2×x = 2x，2×3 = 6，兩項都乘完得 2x + 6。2x + 3 是常數 3 沒乘 2，只乘了第一項；x + 6 則 x 沒乘 2；2x + 5 是把 3 誤算成 2+3 只加一次，分配不完整。",
    "steps": [
      "2 × x = 2x。",
      "2 × 3 = 6。",
      "得 2x + 6。"
    ],
    "commonMistake": "分配律只乘第一項 x，常數 3 沒有乘 2，寫成 2x + 3。",
    "concept": "單項式乘多項式：分配律，括號內每一項都要乘到"
  },
  {
    "questionId": "u10-s006-v002",
    "skillId": "monomial-polynomial-distribute",
    "topicId": "u10-polynomial-ops",
    "difficulty": "basic",
    "text": "計算 −3(2x − 1)。",
    "choices": [
      "−6x − 3",
      "−6x + 3",
      "6x + 3",
      "−6x − 1"
    ],
    "answerIndex": 1,
    "explanation": "−3 要分別乘以括號內 2x 和 −1 兩項，分配律不能只做一半：−3×2x = −6x，−3×(−1) = +3，負負得正，得 −6x + 3。−6x − 3 是 −1 乘 −3 沒變正；6x + 3 則 −3×2x 符號反了；−6x − 1 是 −1 沒乘 3，第二項分配漏做。",
    "steps": [
      "−3 × 2x = −6x。",
      "−3 × (−1) = 3。",
      "得 −6x + 3。"
    ],
    "commonMistake": "−3 乘 (−1) 算成 −3 而非 +3，負負得正規則用錯，寫成 −6x − 3。",
    "concept": "單項式乘多項式：分配律，括號內每一項都要乘到"
  },
  {
    "questionId": "u10-s006-v003",
    "skillId": "monomial-polynomial-distribute",
    "topicId": "u10-polynomial-ops",
    "difficulty": "basic",
    "text": "計算 x(x + 4)。",
    "choices": [
      "x² + 4",
      "2x + 4",
      "x² + 4x",
      "x + 4x"
    ],
    "answerIndex": 2,
    "explanation": "x 要分別乘以括號內 x 和 4 兩項，分配律兩項都要乘到：x×x = x²，x×4 = 4x，兩項都乘完得 x² + 4x。x² + 4 是 4 沒乘 x，第二項分配漏做；2x + 4 則 x×x 誤當 x+x；x + 4x 是 x² 沒算出來，只寫 x 加 4x。",
    "steps": [
      "x × x = x²。",
      "x × 4 = 4x。",
      "得 x² + 4x。"
    ],
    "commonMistake": "x 乘 4 時漏掉 x，只把 4 寫出來，最後寫成 x² + 4。",
    "concept": "單項式乘多項式：分配律，括號內每一項都要乘到"
  },
  {
    "questionId": "u10-s006-v004",
    "skillId": "monomial-polynomial-distribute",
    "topicId": "u10-polynomial-ops",
    "difficulty": "basic",
    "text": "計算 4(2x² − x + 1)。",
    "choices": [
      "8x² − x + 4",
      "6x² − 4x + 4",
      "8x² − 4x + 1",
      "8x² − 4x + 4"
    ],
    "answerIndex": 3,
    "explanation": "4 要乘括號內三項，每一項都不能漏，分配律要完整做完全部三項才算答對：4×2x² = 8x²，4×(−x) = −4x，4×1 = 4，整理得 8x² − 4x + 4。8x² − x + 4 是 −x 只乘 1 沒乘 4；6x² − 4x + 4 則 2+4 相加；8x² − 4x + 1 是常數 1 沒乘 4。",
    "steps": [
      "4×2x²=8x²。",
      "4×(−x)=−4x。",
      "4×1=4。"
    ],
    "commonMistake": "−x 項只乘 1 沒有乘 4，分配不完整，寫成 8x² − x + 4。",
    "concept": "單項式乘多項式：分配律，括號內每一項都要乘到"
  },
  {
    "questionId": "u10-s006-v005",
    "skillId": "monomial-polynomial-distribute",
    "topicId": "u10-polynomial-ops",
    "difficulty": "standard",
    "text": "計算 −2(3 − x)。",
    "choices": [
      "−6 + 2x",
      "−6 − 2x",
      "6 + 2x",
      "−6 + x"
    ],
    "answerIndex": 0,
    "explanation": "−2 要分別乘以括號內 3 和 −x 兩項，分配律兩項都要乘到：−2×3 = −6，−2×(−x) = +2x，負負得正，得 −6 + 2x。−6 − 2x 是 −x 乘 −2 沒變正；6 + 2x 則 −6 符號反了；−6 + x 是 −x 只乘 1 沒乘 2，係數分配不完整。",
    "steps": [
      "−2 × 3 = −6。",
      "−2 × (−x) = 2x。",
      "得 −6 + 2x。"
    ],
    "commonMistake": "−2 乘 (−x) 沒有變成 +2x，負負得正規則用錯，寫成 −6 − 2x。",
    "concept": "單項式乘多項式：分配律，括號內每一項都要乘到"
  },
  {
    "questionId": "u10-s006-v006",
    "skillId": "monomial-polynomial-distribute",
    "topicId": "u10-polynomial-ops",
    "difficulty": "standard",
    "text": "計算 5x(2x + 1)。",
    "choices": [
      "7x² + 5x",
      "10x² + 5x",
      "10x + 5",
      "10x² + 1"
    ],
    "answerIndex": 1,
    "explanation": "5x 要分別乘以括號內 2x 和 1 兩項，分配律兩項都要乘到才算完整：5x×2x = 10x²，係數 5×2=10、指數 1+1=2；5x×1 = 5x，兩項都乘完得 10x² + 5x。7x² + 5x 是把 5+2 相加當 x² 係數；10x + 5 則 x² 次數掉；10x² + 1 是 1 沒乘 5x。",
    "steps": [
      "5x × 2x = 10x²。",
      "5x × 1 = 5x。",
      "得 10x² + 5x。"
    ],
    "commonMistake": "5x 乘 2x 後 x 指數沒加，只保留一次方，寫成 10x + 5。",
    "concept": "單項式乘多項式：分配律，括號內每一項都要乘到"
  },
  {
    "questionId": "u10-s006-v007",
    "skillId": "monomial-polynomial-distribute",
    "topicId": "u10-polynomial-ops",
    "difficulty": "standard",
    "text": "長方形長 (x+2)、寬 3，面積展開後為何？",
    "choices": [
      "3x + 2",
      "x + 6",
      "3x + 6",
      "3x + 5"
    ],
    "answerIndex": 2,
    "explanation": "長方形面積 = 寬 × 長，列式 3(x+2)，分配律要乘進括號內每一項。3×x = 3x，3×2 = 6，得 3x + 6。3x + 2 是常數 2 沒乘 3，分配只做一半；x + 6 則 x 沒乘 3；3x + 5 是把 2 誤算成 2+3 只加一次。",
    "steps": [
      "面積 = 3(x+2)。",
      "3×x=3x，3×2=6。",
      "得 3x + 6。"
    ],
    "commonMistake": "寬 3 只乘 x 沒乘常數 2，分配律只做一半，寫成 3x + 2。",
    "concept": "單項式乘多項式：分配律，括號內每一項都要乘到"
  },
  {
    "questionId": "u10-s006-v008",
    "skillId": "monomial-polynomial-distribute",
    "topicId": "u10-polynomial-ops",
    "difficulty": "standard",
    "text": "計算 −x(4x − 3)。",
    "choices": [
      "−4x² − 3x",
      "4x² + 3x",
      "−4x + 3x",
      "−4x² + 3x"
    ],
    "answerIndex": 3,
    "explanation": "−x 要分別乘以括號內 4x 和 −3 兩項，分配律兩項都要乘到才算完整：−x×4x = −4x²，−x×(−3) = +3x，負負得正，得 −4x² + 3x。−4x² − 3x 是 −3 乘 −x 沒變正；4x² + 3x 則 −x 係數漏看；−4x + 3x 是 4x² 少一個 x，指數合併錯。",
    "steps": [
      "−x × 4x = −4x²。",
      "−x × (−3) = 3x。",
      "得 −4x² + 3x。"
    ],
    "commonMistake": "−x 乘 (−3) 時符號弄錯，負負得正規則用錯，寫成 −4x² − 3x。",
    "concept": "單項式乘多項式：分配律，括號內每一項都要乘到"
  },
  {
    "questionId": "u10-s006-v009",
    "skillId": "monomial-polynomial-distribute",
    "topicId": "u10-polynomial-ops",
    "difficulty": "standard",
    "text": "計算 2a(3a − 2b + 5)。",
    "choices": [
      "6a² − 4ab + 10a",
      "6a² − 4b + 10a",
      "5a² − 4ab + 7a",
      "6a² − 2ab + 10a"
    ],
    "answerIndex": 0,
    "explanation": "2a 要乘括號內三項，每一項都要乘到，分配律要完整做完全部三項才算答對：2a×3a = 6a²，2a×(−2b) = −4ab，2a×5 = 10a，得 6a² − 4ab + 10a。6a² − 4b + 10a 是 −2b 只乘 2 沒乘 a；6a² − 2ab + 10a 則 −2 沒全乘；5a² − 4ab + 7a 是係數相加。",
    "steps": [
      "2a×3a=6a²。",
      "2a×(−2b)=−4ab。",
      "2a×5=10a。"
    ],
    "commonMistake": "−2b 項只乘 2 沒有乘 a，分配不完整，寫成 6a² − 4b + 10a。",
    "concept": "單項式乘多項式：分配律，括號內每一項都要乘到"
  },
  {
    "questionId": "u10-s006-v010",
    "skillId": "monomial-polynomial-distribute",
    "topicId": "u10-polynomial-ops",
    "difficulty": "advanced",
    "text": "計算 −4(x² + x − 1)。",
    "choices": [
      "−4x² − 4x − 4",
      "−4x² − 4x + 4",
      "−4x² + 4x + 4",
      "−4x² − x + 4"
    ],
    "answerIndex": 1,
    "explanation": "−4 要乘括號內三項，每一項都要乘到，分配律要完整做完全部三項：−4×x² = −4x²，−4×x = −4x，−4×(−1) = +4，負負得正，得 −4x² − 4x + 4。−4x² − 4x − 4 是最後 −1×(−4) 算成 −4；−4x² + 4x + 4 則 x 項符號反了；−4x² − x + 4 是 x 只乘 1。",
    "steps": [
      "−4×x²=−4x²。",
      "−4×x=−4x。",
      "−4×(−1)=4。"
    ],
    "commonMistake": "−4 乘 (−1) 最後一項算成 −4 而非 +4，負負得正規則用錯，寫成 −4x² − 4x − 4。",
    "concept": "單項式乘多項式：分配律，括號內每一項都要乘到"
  },
  {
    "questionId": "u10-s006-v011",
    "skillId": "monomial-polynomial-distribute",
    "topicId": "u10-polynomial-ops",
    "difficulty": "advanced",
    "text": "計算 3xy(2x − y)。",
    "choices": [
      "6x²y − 3xy",
      "5x²y − 3xy²",
      "6x²y − 3xy²",
      "6xy − 3xy²"
    ],
    "answerIndex": 2,
    "explanation": "3xy 要分別乘以括號內 2x 和 −y 兩項，分配律兩項都要乘到。第一項 3xy·2x = 6x²y，x 指數 1+1=2；第二項 3xy·(−y) = −3xy²，y 指數 1+1=2，得 6x²y − 3xy²。6x²y − 3xy 是第二項少乘一個 y；5x²y − 3xy² 則把係數 3 與 2 用加法。",
    "steps": [
      "3xy×2x=6x²y。",
      "3xy×(−y)=−3xy²。",
      "寫 6x²y − 3xy²。"
    ],
    "commonMistake": "3xy 乘 −y 時 y 指數沒加 1，少乘一個 y，寫成 −3xy 而非 −3xy²。",
    "concept": "單項式乘多項式：分配律，括號內每一項都要乘到"
  },
  {
    "questionId": "u10-s006-v012",
    "skillId": "monomial-polynomial-distribute",
    "topicId": "u10-polynomial-ops",
    "difficulty": "literacy",
    "text": "計算 −(2x + 5) + 3(x − 1)。（先分配再合併）",
    "choices": [
      "x − 2",
      "5x − 8",
      "x + 2",
      "x − 8"
    ],
    "answerIndex": 3,
    "explanation": "題目要求先分配再整理，兩段都要做完整才算答對：−(2x+5) = −2x−5，3(x−1) = 3x−3，相加得 −2x−5+3x−3。x 項 −2+3 = x，常數 −5−3 = −8，整理 x − 8。x − 2 是常數 −5−3 算成 −2；5x − 8 則 x 合併成 5x；x + 2 是常數符號全反。",
    "steps": [
      "−(2x+5)=−2x−5。",
      "3(x−1)=3x−3。",
      "合併 x−8。"
    ],
    "commonMistake": "常數 −5 與 −3 合併時算成 −2 而非 −8，正負或加法弄錯，寫成 x − 2。",
    "concept": "單項式乘多項式：分配律，括號內每一項都要乘到"
  }
];

export const U10_LECTURES_S004_S006 = [
  {
    "skillId": "polynomial-add-subtract",
    "topicId": "u10-polynomial-ops",
    "title": "多項式加減 — 去括號、減法變號、合併同類項",
    "concept": "多項式加減先把括號去掉，再加減同類項。加號後的括號通常可直接去掉；減號後的括號內每一項都要變號。若括號外有係數，先用分配律展開再去括號合併。文字題列式時，增加用加、減少用減，並注意減式的括號變號。",
    "formula": "(P) + (Q) 去括號；(P) − (Q) 變 −Q 後合併",
    "stepGuide": [
      "確認是加還是減，減式整段加括號。",
      "減括號時括號內每一項符號都改變。",
      "括號外有數字時先分配律展開。",
      "依 x²、x、常數分組合併同類項。",
      "依次數由高到低寫出最簡式。"
    ],
    "examples": [
      {
        "prompt": "計算 (3x + 2) + (x − 5)。",
        "answer": "4x − 3",
        "why": "加號前的兩個括號可直接去除，得到3x+2+x−5。合併x項為4x，合併常數2−5=−3，因此結果是4x−3；x項與常數必須分組計算，不能混在一起相加。"
      },
      {
        "prompt": "計算 (4x − 1) − (2x + 3)。",
        "answer": "2x − 4",
        "why": "第二個括號前是減號，所以括號內每一項都要變號，原式成為4x−1−2x−3。合併後x項是2x，常數是−4，整理後得到2x−4；若只改第一項符號，結果就會錯。"
      }
    ],
    "commonMistakes": [
      "減括號只變第一項，後面項忘記變號。",
      "加號後括號仍變號，多改一次。",
      "常數與 x 項混在一起加減。",
      "文字題增加與減少列式方向弄反。"
    ]
  },
  {
    "skillId": "monomial-multiply",
    "topicId": "u10-polynomial-ops",
    "title": "單項式相乘 — 係數相乘、同底指數相加",
    "concept": "兩個或多個單項式相乘，先把係數相乘決定正負與大小，再把相同底數的指數相加。不同字母各自處理指數。常數與單項式相乘只動係數部分。負號個數為偶數時乘出正數，奇數時乘出負數。國中也會遇到單項式除法，係數相除、同底指數相減。",
    "formula": "a xᵐ · b xⁿ = (ab) xᵐ⁺ⁿ",
    "stepGuide": [
      "先處理係數，含正負號一起相乘。",
      "同底數字母指數相加。",
      "不同字母分別加指數，字母都保留。",
      "常數視為 x⁰ 的係數，只乘係數部分。",
      "整理係數與字母，寫成最簡單項式。"
    ],
    "examples": [
      {
        "prompt": "計算 2x³ · 4x²。",
        "answer": "8x⁵",
        "why": "先將係數相乘，2×4=8；同底數x相乘時指數相加，x³×x²=x⁵。把係數與字母部分合在一起，可得8x⁵；指數不能相乘成6，也不能把係數相加。"
      },
      {
        "prompt": "計算 (−3y²) · 2y。",
        "answer": "−6y³",
        "why": "係數−3與2相乘得到−6；y²與y相乘時，把y看成y¹，指數相加2+1=3。因此乘積是−6y³，負號不能漏掉；同底數相乘要加指數，不是把指數相乘。"
      }
    ],
    "commonMistakes": [
      "係數誤用加法，3x·4x 寫成 7x²。",
      "同底指數相乘而非相加，x⁴·x² 寫 x⁸。",
      "負係數相乘符號弄錯。",
      "多字母時只加其中一個指數。"
    ]
  },
  {
    "skillId": "monomial-polynomial-distribute",
    "topicId": "u10-polynomial-ops",
    "concept": "單項式乘多項式用分配律：括號外的單項式要乘到括號內每一項，含符號一起算。負號單項式尤其要注意第二項的符號。算完後可依需要合併同類項。文字題如長乘寬，先把代數式分配展開再化簡。",
    "formula": "a(b + c + d) = ab + ac + ad",
    "stepGuide": [
      "確認括號外是單項式、括號內是多項式。",
      "用分配律，外項乘到內的每一項。",
      "每一項相乘時係數與指數分開處理。",
      "注意負號分配，減項乘負數會變正。",
      "展開後合併同類項寫最簡式。"
    ],
    "examples": [
      {
        "prompt": "計算 3(2x − 4)。",
        "answer": "6x − 12",
        "why": "括號外的3要分別乘括號內每一項：3×2x=6x，3×(−4)=−12。兩項都完成分配後，可得6x−12，不能漏乘常數項；括號內每一項都必須被外面的3乘到。"
      },
      {
        "prompt": "計算 −2(x + 5)。",
        "answer": "−2x − 10",
        "why": "把−2分配給括號內兩項：−2×x=−2x，−2×5=−10。兩個乘積都帶負號，所以展開結果是−2x−10；不能只讓−2乘第一項，也不能把第二項誤寫成正10。"
      }
    ],
    "commonMistakes": [
      "分配律漏乘括號內某一項，常漏常數。",
      "−3×(−1) 算成 −3，去括號變號錯。",
      "−x 係數 −1 漏算，乘完符號反了。",
      "乘完沒合併同類項，答案未化簡。"
    ],
    "title": "單項式乘多項式 — 分配律、符號與同類項整理"
  }
];
