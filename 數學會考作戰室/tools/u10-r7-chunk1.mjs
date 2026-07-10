// U10-R7 chunk 1 — hand-written per-question copy
export const U10_R7_CHUNK = {
  "polynomial-terms#0": {
    explanation: "單項式整個式子只能由一項組成，中間不能有加減把它拆成兩塊。3x² 只有一個乘積項；x + 1 中間有加號，其實是兩項；x − y 被減號分成 x 與 y 兩項，都不是單項式。",
    commonMistake: "看到 x − y 只有兩個字母就以為是一項，沒注意到減號已把式子拆成兩項。"
  },
  "polynomial-terms#1": {
    explanation: "單項式 −5x³ 的係數是 x³ 前面那個含正負號的數字，也就是 −5。3 是 x 的次數不是係數；−5x³ 是整個單項式本身，不是係數這個概念。",
    commonMistake: "係數只寫 5 而漏掉負號，或把次數 3 當成係數。"
  },
  "polynomial-terms#2": {
    explanation: "4x²y 中 x 的指數是 2、y 的指數是 1（y 沒寫指數就是 1）。單項式次數要把各字母指數全部加起來：2 + 1 = 3。只拿 2 是忘了把 y 的指數也算進去。",
    commonMistake: "次數只取 x 的指數 2，沒把 y 的隱含指數 1 加進去。"
  },
  "polynomial-terms#3": {
    explanation: "同類項要看各字母次數是否完全相同。2ab 與 −5ba 只是 a、b 書寫順序不同，都是 a¹b¹，所以是同類項。3x 是 x¹，3x² 是 x²，次數不同；5 與 5x 一個沒有 x、一個有 x，也不能配對。",
    commonMistake: "只看係數或只看字母個數，沒比對各字母次數是否相同。"
  },
  "polynomial-terms#4": {
    explanation: "常數 7 可以看成 7·x⁰，x 的指數 0 代表次數為 0，所以 7 是合法的單項式。「不可以，沒有未知數」忽略了 x⁰ 這種寫法；「次數為 1」則把指數搞錯了。",
    commonMistake: "以為單項式一定要有 x，忽略常數項也是單項式。"
  },
  "polynomial-terms#5": {
    explanation: "多項式 2x³ − x + 1 各項次數分別是 3、1、0，整式的次數取最高次那一項，也就是 x³ 的 3。若答 1 是把 −x 的次數當成整式次數；答 0 則誤用常數項 1 的次數。",
    commonMistake: "用項數或常數項次數當整式次數，沒找最高次項。"
  },
  "polynomial-terms#6": {
    explanation: "在 3x² − 2x + 5 這個三項式裡，x 的一次項是 −2x，係數要把前面的 −2 整個算進去才算對。3 是 x² 項的係數；5 是常數項；2 則漏看了 −2x 前面的負號，只取絕對值。",
    commonMistake: "x 項係數只寫 2，去括號變號錯或漏看減號。"
  },
  "polynomial-terms#7": {
    explanation: "多項式要求各項指數都是非負整數，且分母不能含未知數。5/x 與 1/(x+1) 分母有 x；√x 指數是 1/2 不是整數。2x² − 3x 兩項都符合，才是多項式。",
    commonMistake: "把分式或根號式也當多項式，沒檢查指數與分母。"
  },
  "polynomial-terms#8": {
    explanation: "4a²b 與 −2ba² 比對：a 都是 2 次、b 都是 1 次，字母順序不同不影響判斷，兩者同類，係數 4 與 −2 可以合併。「不是同類項」是沒比對指數就下結論。",
    commonMistake: "字母順序不同就判斷不是同類項，沒比對各字母次數。"
  },
  "polynomial-terms#9": {
    explanation: "正方形面積 = 邊長 × 邊長，邊長 x 公分時面積是 x × x = x²。2x 是兩條邊相加（周長的一半概念）；4x 是周長 4 倍邊長；x + x 也只是兩邊相加不是相乘。",
    commonMistake: "周長與面積公式混淆，把 4x 或 2x 當面積。"
  },
  "polynomial-terms#10": {
    explanation: "−3a²b³c 這個單項式裡，a 指數 2、b 指數 3、c 指數 1，次數規則是把三者全部相加：2 + 3 + 1 = 6。5 可能只加了 a、b 兩個指數就停；3 則只看了 b 的指數，沒把 a 和 c 也算進去。",
    commonMistake: "多字母次數只加兩個指數，指數相加錯。"
  },
  "polynomial-terms#11": {
    explanation: "0 可寫成 0·x⁰，係數是 0、次數也是 0，所以 0 是次數為 0 的單項式。「0 不是單項式」忽略了這個定義；「0 一定是多項式」則把單項式與多項式的層級搞混了。",
    commonMistake: "以為 0 什麼都不是，忽略 0 也是合法單項式。"
  },
  "polynomial-evaluation#0": {
    explanation: "把 x = 2 放進 3x + 1，先算乘法 3×2 = 6，再把常數 1 加上去得 7。5 則把 2+1 先加後乘，違反先乘後加；6 則只算了 3×2 這一段，後面的 +1 完全漏掉，少加常數。",
    commonMistake: "只算出 3×2=6 就停住，忘記把常數 1 加進去。"
  },
  "polynomial-evaluation#1": {
    explanation: "x 取負一時，平方項 (−1)² 等於正一，一次項 2x 等於負二，兩段合併正一加負二等於負一。若只留平方結果一就漏加一次項；若把一次項當正二去加則得三，正負方向整個弄錯了。",
    commonMistake: "平方算完 1 就直接當答案，沒把 2x = −2 這一段加進去。"
  },
  "polynomial-evaluation#2": {
    explanation: "a 取三、b 取負二，先算 2a 得六，再算六減負二變六加二得八。四是把減 b 當減正二；零則把減 b 算成加負二，正負方向整個反了，少加四。",
    commonMistake: "減去負數 b 時沒變加，把 6 − (−2) 誤算成 6 − 2 = 4。"
  },
  "polynomial-evaluation#3": {
    explanation: "x 取零時，五次方項與一次項都含 x，乘出來全是零，整式只剩常數四。零是把含 x 的項硬算成非零；負四則把最後常數四的符號弄反，正負搞錯了。",
    commonMistake: "x=0 時仍硬算 5x² 或 −3x 得到非零，沒看出兩項都歸零。"
  },
  "polynomial-evaluation#4": {
    explanation: "x = 3 時，左括號 x + 1 = 4、右括號 x − 2 = 1，兩個括號相乘 4 × 1 = 4。2 則只算完一個括號就停，漏乘另一個；6 則把 4 + 2 或 4 + 1 當成乘法，加減與相乘搞混了，結果不是 4。",
    commonMistake: "只算出 x+1=4 就當最終值，忘了還要乘上 x−2=1。"
  },
  "polynomial-evaluation#5": {
    explanation: "y 取負二時，三次方 (−2)³ 等於負八，再減 y 變負八減負二等於負八加二得負六。六是把負六整體變號；負四則減 y 時沒把減負變加，少加二，正負方向弄錯了。",
    commonMistake: "奇次方保留負號後，減 y 時沒把 −(−2) 變成 +2。"
  },
  "polynomial-evaluation#6": {
    explanation: "x 取二分之一，先算四乘二分之一得二，再加常數三得五。四是把四 x 誤當四或漏加常數；二則只算乘法段，常數三整段漏加，最後少加三。",
    commonMistake: "4×1/2 算完 2 就停，漏加後面的常數 3，最後少加了 3。"
  },
  "polynomial-evaluation#7": {
    explanation: "總價先算三件乘五十得一百五十，再加上固定手續費十元，合計一百六十元。一百五十只算商品價漏加手續費；六十則可能漏乘三件或誤減手續費，兩段都算錯。",
    commonMistake: "3×50 算完 150 就當總價，忘記加上固定手續費 10 元。"
  },
  "polynomial-evaluation#8": {
    explanation: "x 取負三時，平方得九、二倍平方得十八，負 x 變負負得正三，最後十八加三減一等於二十。八是漏算負 x 那段；十四則把負 x 仍當負三去減，負號沒翻過來。",
    commonMistake: "x 為負時把 −x 仍當 −3，沒有先算出 −x = 3 再加回去。"
  },
  "polynomial-evaluation#9": {
    explanation: "m 取二、n 取負一，平方段得四，乘積段 mn 得負二，兩段相加四加負二得二。三是把 mn 算成正一變四加一；四則只算平方段，乘積段整段漏掉，少加一項。",
    commonMistake: "m² 算完 4 就停，沒把 mn = −2 加進去，整段 mn 漏算。"
  },
  "polynomial-evaluation#10": {
    explanation: "x 取四時，平方得十六，前面負號變負十六，再加五得負十一。十一是把負平方當正十六去加五；二十一则連負號都漏掉變十六加五，正負整個搞錯了。",
    commonMistake: "−x² 前面的負號漏看，把 −16+5 誤算成 16+5=21 或 11。"
  },
  "polynomial-evaluation#11": {
    explanation: "函數在 x 取二時，平方得四、三倍一次項得負六，相減得負二。二是把四減六只取絕對值；十則把減三 x 當加六去加四，正負整個反了，減法變加法。",
    commonMistake: "4 − 6 算成 +2，把負號結果誤取成正值。"
  },
  "like-terms-combine#0": {
    explanation: "3x 與 5x 字母部分都是 x，屬同類項，係數直接相加 3 + 5 = 8，寫成 8x。8x² 是把指數也加在一起；15x 則誤用 3×5 相乘，同類項合併應加係數不應乘。",
    commonMistake: "同類項合併時把係數 3 和 5 相乘得 15，而不是相加。"
  },
  "like-terms-combine#1": {
    explanation: "三項都是 y 的同類項，單獨寫 y 時係數視為一，合併七減二加一得六 y。五 y 是漏算單獨 y 那項的加一；四 y 則把減二 y 的符號弄錯，正負方向整個搞錯了。",
    commonMistake: "單獨的 y 係數當 0 或漏加，7−2 只算成 5 得 5y。"
  },
  "like-terms-combine#2": {
    explanation: "平方項四減二係數得二，一次項三加一係數得四，整理後二 a 平方加四 a。二 a 平方加二 a 是一次項漏加一；六 a 平方加四 a 則平方項誤用四加二，正負搞錯了。",
    commonMistake: "a 項 3+a 只保留 3 沒加 1，或 a² 項 4−2 誤算成 4+2 得 6a²。"
  },
  "like-terms-combine#3": {
    explanation: "x 項負五減二係數得負七，常數三加七得十，整理後負七 x 加十。負三 x 加十是把負五減二算成負三；負七 x 加四則常數合併錯，三加七漏算成四。",
    commonMistake: "合併 x 項時 −5−2 算成 −3，或常數 3+7 漏加算成 4。"
  },
  "like-terms-combine#4": {
    explanation: "ba 與 ab 同類，三項係數二加五減一得六 ab。七 ab 是減 ab 那項的減一漏掉只算二加五；六 a 平方 b 平方則把指數也加在一起，同類項合併只加係數不加指數。",
    commonMistake: "ba 與 ab 視為不同類，或 −ab 的係數 −1 漏算變成 2+5=7。"
  },
  "like-terms-combine#5": {
    explanation: "平方項三減五得負二，一次項負一加四得三，常數二保留，整理負二 x 平方加三 x 加二。二 x 平方加三 x 加二是平方項正負反了；負二 x 平方減五 x 加二則一次項算錯。",
    commonMistake: "x² 項 3−5 算成 +2 得 2x²，或 x 一次項 −1+4 符號弄錯得 −5x。"
  },
  "like-terms-combine#6": {
    explanation: "m 項六加二得八 m，n 項負四加一得負三 n，分組合併後得八 m 減三 n。八 m 減五 n 是 n 項負四加一算成負五；四 m 減三 n 則 m 項漏加二 m，少加一項。",
    commonMistake: "n 項 −4n+n 算成 −5n 少加 1，或 m 項 6+2 漏加算成 4m 少加。"
  },
  "like-terms-combine#7": {
    explanation: "平方項一減二係數得負一，一次項三加一得四，常數一減四得負三，整理負 x 平方加四 x 減三。x 平方加四 x 減三是平方項正負反了；負 x 平方加二 x 減三則一次項少加一。",
    commonMistake: "x² 項 1−2 算成 +1 得 x²，或 x 項 3+1 只保留 3 漏加得 2x。"
  },
  "like-terms-combine#8": {
    explanation: "長加寬得三 x 加一，周長乘二展開得六 x 加二。二 x 平方加 x 是把長乘寬當周長算面積；四 x 加二則周長公式漏乘二或漏加寬，長寬概念整個搞混了。",
    commonMistake: "用長×寬算面積 2x²+x，或周長公式漏乘 2 得 4x+2。"
  },
  "like-terms-combine#9": {
    explanation: "括號前負號要分配到每一項，展開得負三 x 加二，再加五 x 得二 x 加二。八 x 減二是括號內常數沒變正二；二 x 減二則常數二符號弄反，正負搞錯了。",
    commonMistake: "−(3x−2) 只變 3x 的符號，括號內 −2 沒變 +2，常數漏分配。"
  },
  "like-terms-combine#10": {
    explanation: "零點五 x 與一點五 x 是同類項，小數係數直接相加得一點五加零點五得二 x。二 x 平方是把指數也加；零點六五 x 則小數對位錯，二點二五 x 則誤用相乘而非相加。",
    commonMistake: "小數係數 0.5+1.5 對位錯算成 0.65，或誤乘得 2.25x。"
  },
  "like-terms-combine#11": {
    explanation: "四 p 平方 q 與 p 平方 q 同類，係數四加一得五 p 平方 q；負二 pq 平方無同類保留。三 p 平方 q 是四加一算成三少加一；五 p 平方 q 加 pq 平方則把減號弄反變加，符號搞錯了。",
    commonMistake: "p²q 與 pq² 字母次數不同卻硬合併，或 4+1 算成 3 得 3p²q。"
  },
};
