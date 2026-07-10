TEMPORARY REVIEW ARTIFACT.
NOT STUDENT-FACING.
NOT A RELEASE APPROVAL.
REMOVE BEFORE INTEGRATION.

### u10-s001-v001

- skillId: polynomial-terms
- difficulty: basic
- text: 下列哪一個是單項式？
- choices:
  - 0: 3x²
  - 1: x + 1
  - 2: x − y
  - 3: x² + y²
- answerIndex: 0
- correctChoice: 3x²
- explanation: 單項式整個式子只能由一項組成，中間不能有加減把它拆成兩塊。3x² 只有一個乘積項；x + 1 中間有加號，其實是兩項；x − y 被減號分成 x 與 y 兩項，都不是單項式。
- steps:
  - 單項式只能有一項。
  - 3x² 沒有加減號分出的第二項。
  - 因此 3x² 是單項式。
- commonMistake: 看到 x − y 只有兩個字母就以為是一項，沒注意到減號已把式子拆成兩項。

### u10-s001-v002

- skillId: polynomial-terms
- difficulty: basic
- text: 單項式 −5x³ 的係數是多少？
- choices:
  - 0: 3
  - 1: −5
  - 2: x³
  - 3: −5x³
- answerIndex: 1
- correctChoice: −5
- explanation: 單項式 −5x³ 的係數是 x³ 前面那個含正負號的數字，也就是 −5。3 是 x 的次數不是係數；−5x³ 是整個單項式本身，不是係數這個概念。
- steps:
  - 找 x³ 前面的數。
  - 含符號寫 −5。
  - 係數是 −5。
- commonMistake: 係數只寫 5 而漏掉負號，或把次數 3 當成係數。

### u10-s002-v001

- skillId: polynomial-evaluation
- difficulty: basic
- text: 當 x = 2 時，3x + 1 的值是多少？
- choices:
  - 0: 7
  - 1: 5
  - 2: 6
  - 3: 8
- answerIndex: 0
- correctChoice: 7
- explanation: 把 x = 2 放進 3x + 1，先算乘法 3×2 = 6，再把常數 1 加上去得 7。5 則把 2+1 先加後乘，違反先乘後加；6 則只算了 3×2 這一段，後面的 +1 完全漏掉，少加常數。
- steps:
  - 把 x 換成 2。
  - 算 3×2 = 6。
  - 6 + 1 = 7。
- commonMistake: 只算出 3×2=6 就停住，忘記把常數 1 加進去。

### u10-s002-v002

- skillId: polynomial-evaluation
- difficulty: basic
- text: 當 x = −1 時，x² + 2x 的值是多少？
- choices:
  - 0: 1
  - 1: −1
  - 2: 3
  - 3: −3
- answerIndex: 1
- correctChoice: −1
- explanation: x 取負一時，平方項 (−1)² 等於正一，一次項 2x 等於負二，兩段合併正一加負二等於負一。若只留平方結果一就漏加一次項；若把一次項當正二去加則得三，正負方向整個弄錯了。
- steps:
  - x = −1 代入。
  - (−1)² = 1，2x = −2。
  - 1 + (−2) = −1。
- commonMistake: 平方算完 1 就直接當答案，沒把 2x = −2 這一段加進去。

### u10-s003-v001

- skillId: like-terms-combine
- difficulty: basic
- text: 化簡 3x + 5x。
- choices:
  - 0: 8x
  - 1: 8x²
  - 2: 15x
  - 3: 15x²
- answerIndex: 0
- correctChoice: 8x
- explanation: 3x 與 5x 字母部分都是 x，屬同類項，係數直接相加 3 + 5 = 8，寫成 8x。8x² 是把指數也加在一起；15x 則誤用 3×5 相乘，同類項合併應加係數不應乘。
- steps:
  - 3x 與 5x 是同類項。
  - 係數 3 + 5 = 8。
  - 寫成 8x。
- commonMistake: 同類項合併時把係數 3 和 5 相乘得 15，而不是相加。

### u10-s003-v002

- skillId: like-terms-combine
- difficulty: basic
- text: 化簡 7y − 2y + y。
- choices:
  - 0: 5y
  - 1: 6y
  - 2: 4y
  - 3: 9y
- answerIndex: 1
- correctChoice: 6y
- explanation: 三項都是 y 的同類項，單獨寫 y 時係數視為一，合併七減二加一得六 y。五 y 是漏算單獨 y 那項的加一；四 y 則把減二 y 的符號弄錯，正負方向整個搞錯了。
- steps:
  - 三項都是 y 的同類項。
  - 係數 7 − 2 + 1。
  - 得 6y。
- commonMistake: 單獨的 y 係數當 0 或漏加，7−2 只算成 5 得 5y。

### u10-s004-v001

- skillId: polynomial-add-subtract
- difficulty: basic
- text: 計算 (2x + 3) + (x − 1)。
- choices:
  - 0: 3x + 2
  - 1: 3x + 4
  - 2: x + 2
  - 3: 3x − 4
- answerIndex: 0
- correctChoice: 3x + 2
- explanation: 兩個多項式相加時，括號前是加號就可以直接去掉括號，不必變號。x 的一次項 2x 與 x 是同類項，係數 2 加 1 得 3x；常數項 3 減 1 得 2，整式化簡為 3x + 2。若寫 3x + 4，是把常數 3−1 誤算成 3+1；x + 2 則 x 項只保留 2x，沒把後面括號裡的 x 加進來。
- steps:
  - 去掉括號。
  - 2x + x = 3x。
  - 3 − 1 = 2。
- commonMistake: 常數項 3 與 −1 相減時誤用加法，算成 3+1，最後寫成 3x + 4。

### u10-s004-v002

- skillId: polynomial-add-subtract
- difficulty: basic
- text: 計算 (5x − 2) − (2x − 1)。
- choices:
  - 0: 3x − 3
  - 1: 3x − 1
  - 2: 7x − 1
  - 3: 7x − 3
- answerIndex: 1
- correctChoice: 3x − 1
- explanation: 減去 (2x − 1) 時，括號前面是減號，括號內每一項都要變號，變成 5x − 2 − 2x + 1。x 的一次項 5 − 2 = 3，寫 3x；常數 −2 + 1 = −1，整理得 3x − 1。3x − 3 是把括號內 +1 仍當 −1；7x − 1 則把 5x 與 2x 相加成 7x，忘了前面是減法。
- steps:
  - −(2x−1) 變 −2x+1。
  - 5x − 2x = 3x。
  - −2 + 1 = −1。
- commonMistake: 減 (2x−1) 時括號內 +1 沒變成 −1，常數 −2−1 算成 −3，寫成 3x − 3。

### u10-s005-v001

- skillId: monomial-multiply
- difficulty: basic
- text: 計算 3x · 4x。
- choices:
  - 0: 12x²
  - 1: 7x
  - 2: 12x
  - 3: 7x²
- answerIndex: 0
- correctChoice: 12x²
- explanation: 單項式相乘，係數與係數相乘、同底指數相加。係數 3 × 4 = 12，x 的指數 1 + 1 = 2，得 12x²。7x 是把係數 3 與 4 相加；12x 則 x 指數沒加，只保留一次方；7x² 雖然指數對了，係數仍用加法。
- steps:
  - 係數 3 × 4 = 12。
  - x 指數 1 + 1 = 2。
  - 得 12x²。
- commonMistake: 單項式相乘時把係數 3 與 4 相加而非相乘，寫成 7x 或 7x²。

### u10-s005-v002

- skillId: monomial-multiply
- difficulty: basic
- text: 計算 (−2x²) · 5x³。
- choices:
  - 0: −10x⁶
  - 1: −10x⁵
  - 2: 3x⁵
  - 3: 10x⁵
- answerIndex: 1
- correctChoice: −10x⁵
- explanation: 單項式相乘，係數與係數相乘、同底指數相加。係數 (−2) × 5 = −10，負正相乘得負；x 指數 2 + 3 = 5，得 −10x⁵。−10x⁶ 是指數 2+3 多加了 1；3x⁵ 則係數 −2+5 用加法；10x⁵ 是 (−2)×5 的負號漏看，正負弄反。
- steps:
  - 係數 −2 × 5 = −10。
  - 指數 2 + 3 = 5。
  - 得 −10x⁵。
- commonMistake: 指數 2+3 算成 6，或負係數 (−2)×5 的負號漏看，寫成 10x⁵。

### u10-s006-v001

- skillId: monomial-polynomial-distribute
- difficulty: basic
- text: 計算 2(x + 3)。
- choices:
  - 0: 2x + 6
  - 1: 2x + 3
  - 2: x + 6
  - 3: 2x + 5
- answerIndex: 0
- correctChoice: 2x + 6
- explanation: 分配律要求 2 乘括號內每一項，不能只做一半。2×x = 2x，2×3 = 6，兩項都乘完得 2x + 6。2x + 3 是常數 3 沒乘 2，只乘了第一項；x + 6 則 x 沒乘 2；2x + 5 是把 3 誤算成 2+3 只加一次，分配不完整。
- steps:
  - 2 × x = 2x。
  - 2 × 3 = 6。
  - 得 2x + 6。
- commonMistake: 分配律只乘第一項 x，常數 3 沒有乘 2，寫成 2x + 3。

### u10-s006-v002

- skillId: monomial-polynomial-distribute
- difficulty: basic
- text: 計算 −3(2x − 1)。
- choices:
  - 0: −6x − 3
  - 1: −6x + 3
  - 2: 6x + 3
  - 3: −6x − 1
- answerIndex: 1
- correctChoice: −6x + 3
- explanation: −3 要分別乘以括號內 2x 和 −1 兩項，分配律不能只做一半：−3×2x = −6x，−3×(−1) = +3，負負得正，得 −6x + 3。−6x − 3 是 −1 乘 −3 沒變正；6x + 3 則 −3×2x 符號反了；−6x − 1 是 −1 沒乘 3，第二項分配漏做。
- steps:
  - −3 × 2x = −6x。
  - −3 × (−1) = 3。
  - 得 −6x + 3。
- commonMistake: −3 乘 (−1) 算成 −3 而非 +3，負負得正規則用錯，寫成 −6x − 3。

### u10-s007-v001

- skillId: binomial-multiply-basic
- difficulty: basic
- text: (x + 2)(x + 3) 展開後為何？
- choices:
  - 0: x² + 5x + 6
  - 1: x² + 6x + 5
  - 2: 2x² + 5x + 6
  - 3: x² + 5x − 6
- answerIndex: 0
- correctChoice: x² + 5x + 6
- explanation: 先用 x 去乘第二個括號，得到 x²+3x；再用 2 去乘，得到 2x+6。把兩段一次項 3x 與 2x 加起來是 5x，常數 6 直接保留，整理後 x²+5x+6。x²+6x+5 是把 3+2 誤算成 6、又把常數 6 與 5 對調；2x²+5x+6 則第一項 x·x 係數多乘，寫成 2x²。
- steps:
  - x 乘 x + 3：x² + 3x。
  - 2 乘 x + 3：2x + 6。
  - 合併同類項：x² + 5x + 6。
- commonMistake: 一次項 3x 加 2x 誤寫成 6x，或常數 6 與 5 位置對調。

### u10-s007-v002

- skillId: binomial-multiply-basic
- difficulty: basic
- text: (x − 1)(x + 4) 展開後為何？
- choices:
  - 0: x² + 5x − 4
  - 1: x² + 3x − 4
  - 2: x² − 3x − 4
  - 3: x² + 4x − 1
- answerIndex: 1
- correctChoice: x² + 3x − 4
- explanation: 依分配律，x 乘 (x+4) 得 x²+4x；−1 乘 (x+4) 得 −x−4。把 4x 與 −x 合併是 3x，常數 −4 保留，整理 x²+3x−4。x²+5x−4 是把 −1·x 當 +x 去加 4x 符號弄反；x²−3x−4 則 −1·x 的負號處理錯，變成再減 3x 而不是加 3x。一次項少 3x。
- steps:
  - x 乘 x + 4：x² + 4x。
  - −1 乘 x + 4：−x − 4。
  - 合併：x² + 3x − 4。
- commonMistake: −1 乘 x 得 −x，卻當 +x 去跟 4x 相加，一次項變 5x。

### u10-s008-v001

- skillId: square-sum-formula
- difficulty: basic
- text: (x + 3)² 展開後為何？
- choices:
  - 0: x² + 6x + 9
  - 1: x² + 9
  - 2: x² + 3x + 9
  - 3: x² + 6x + 6
- answerIndex: 0
- correctChoice: x² + 6x + 9
- explanation: (x+3)² 可寫成 (x+3)(x+3)：x²+3x+3x+9，兩段 3x 加起來 6x，整理 x²+6x+9。x²+9 是漏掉兩段 3x 中間項；x²+3x+9 則只保留一段 3x，忘了 2·x·3=6x 前面還要乘 2。分配律兩段 3x 加總才是 6x 不是 3x，2·x·3 要乘 2。2·x·3 要乘 2 得 6x。
- steps:
  - 寫成 (x + 3)(x + 3)。
  - 展開：x² + 3x + 3x + 9。
  - 合併一次項：x² + 6x + 9。
- commonMistake: 展開只寫 x²+9 漏中間項，或 2·x·3 只算一次得 3x 漏乘 2。

### u10-s008-v002

- skillId: square-sum-formula
- difficulty: basic
- text: (2x + 1)² 展開後為何？
- choices:
  - 0: 4x² + 2x + 1
  - 1: 4x² + 4x + 1
  - 2: 2x² + 4x + 1
  - 3: 4x² + 4x + 2
- answerIndex: 1
- correctChoice: 4x² + 4x + 1
- explanation: (2x+1)² 第一項 (2x)²=4x²，中間 2·2x·1=4x，末項 1²=1，整理 4x²+4x+1。4x²+2x+1 是 2·2x·1 只算 2x 漏乘 2；2x²+4x+1 則 (2x)² 係數 2 漏平方，第一項誤寫 2x² 不是 4x²。係數 2x 平方時 2 也要平方。係數 2x 平方時 2 也要平方成 4。
- steps:
  - 第一項平方：(2x)² = 4x²。
  - 中間項 2·2x·1 = 4x。
  - 第二項平方：1² = 1，合併 4x² + 4x + 1。
- commonMistake: 2·2x·1 只寫 2x 漏乘 2，或 (2x)² 只算 2x² 沒把 2 平方。首項 4x² 不是 2x²。

### u10-s009-v001

- skillId: square-difference-formula
- difficulty: basic
- text: (x − 2)² 展開後為何？
- choices:
  - 0: x² − 4x + 4
  - 1: x² + 4x + 4
  - 2: x² − 4
  - 3: x² − 2x + 4
- answerIndex: 0
- correctChoice: x² − 4x + 4
- explanation: (x−2)² 第一項 x²，中間 −2·x·2=−4x，末項 (−2)²=4，整理 x²−4x+4。x²+4x+4 中間項符號弄反變 +4x；x²−2x+4 則 −2·x·2 只算 x·2=2x 漏乘 2，且符號也可能錯。減號平方中間項仍是負的。一次項只有 −2x 不是 −4x。
- steps:
  - 第一項 x²。
  - 中間項 −2·x·2 = −4x。
  - 常數 2² = 4，整理成 x² − 4x + 4。
- commonMistake: −2·x·2 中間項符號寫 +4x，或只算 x·2=2x 漏乘 2。中間項符號最易反。

### u10-s009-v002

- skillId: square-difference-formula
- difficulty: basic
- text: (x − 5)² 展開後為何？
- choices:
  - 0: x² − 5x + 25
  - 1: x² − 10x + 25
  - 2: x² + 10x + 25
  - 3: x² − 25
- answerIndex: 1
- correctChoice: x² − 10x + 25
- explanation: (x−5)² 第一項 x²，中間 −2·x·5=−10x，末項 5²=25，整理 x²−10x+25。x²−5x+25 是 −2·x·5 只算 x·5=5x 漏乘 2；x²+10x+25 則中間項符號全反變 +10x，跟完全平方和搞混。減 5 平方中間是 −10x。減 5 平方中間是 −10x 常數 25。
- steps:
  - x² 是第一項。
  - −2·x·5 = −10x。
  - 5² = 25，整理成 x² − 10x + 25。
- commonMistake: −2·x·5 只寫 5x 漏乘 2，或中間項符號弄反寫 +10x。

### u10-s010-v001

- skillId: difference-of-squares-expand
- difficulty: basic
- text: (x + 3)(x − 3) 展開後為何？
- choices:
  - 0: x² − 9
  - 1: x² + 9
  - 2: x² − 6x + 9
  - 3: x² + 6x − 9
- answerIndex: 0
- correctChoice: x² − 9
- explanation: 左右括號一個加、一個減，底數都是 x 與 3，符合 (a+b)(a−b) 型，套用 a²−b²：先算 (x)²=x²，再算 3²=9，兩平方相減得 x²−9，中間 ±3x 會互相抵消。x²+9 是末項 9 前用了加號；x²−6x+9 則誤把式子當 (x−3)² 去展開，多算出 −6x 這一項。
- steps:
  - x 乘 x − 3：x² − 3x。
  - 3 乘 x − 3：3x − 9。
  - 合併：3x − 3x 消去，整理成 x² − 9。
- commonMistake: 平方差末項 9 前減號寫成加，或誤用 (x−3)² 完全平方式多算中間項。

### u10-s010-v002

- skillId: difference-of-squares-expand
- difficulty: basic
- text: (2x + 5)(2x − 5) 展開後為何？
- choices:
  - 0: 4x² + 25
  - 1: 4x² − 25
  - 2: 4x² − 20x + 25
  - 3: 2x² − 25
- answerIndex: 1
- correctChoice: 4x² − 25
- explanation: 看到底數相同、符號相反的配對，兩括號加減對稱、底數都是 2x 與 5，用 a²−b² 展開：第一項 (2x)²=4x²，第二項 5²=25，中間 ±10x 相消，整理 4x²−25。4x²+25 是 25 前加減弄反；4x²−20x+25 則按 (2x−5)² 算出 −20x；2x²−25 則 (2x)² 漏平方只寫 2x²。
- steps:
  - 第一項 (2x)² = 4x²。
  - 第二項 5² = 25。
  - 中間項抵消，整理成 4x² − 25。
- commonMistake: 末項 25 前面減號寫成加，或套用 (2x−5)² 多算 −20x 中間項。

### u10-s011-v001

- skillId: formula-mixed-recognition
- difficulty: basic
- text: (x + 3)² 的正確展開為何？
- choices:
  - 0: x² + 6x + 9
  - 1: x² − 6x + 9
  - 2: x² − 9
  - 3: x² + 9
- answerIndex: 0
- correctChoice: x² + 6x + 9
- explanation: 括號內是相加，屬 (a+b)² 型，套用 x²+2·x·3+3²=x²+6x+9。x²−6x+9 則中間項用了減，把 2·x·3 算成 −6x；x²−9 是把整式誤當 (x+3)(x−3) 平方差，漏了 6x；x²+9 則 2·x·3 整項漏算。加號平方的中間項 6x 不能漏掉。
- steps:
  - 型式是 (a + b)²，兩項中間為加。
  - 套用 x² + 2·x·3 + 9。
  - 得 x² + 6x + 9。
- commonMistake: 加號平方卻把 2·x·3=6x 算成 −6x，或誤套 a²−b² 漏中間項。

### u10-s011-v002

- skillId: formula-mixed-recognition
- difficulty: basic
- text: (x − 4)² 的正確展開為何？
- choices:
  - 0: x² + 8x + 16
  - 1: x² − 8x + 16
  - 2: x² − 16
  - 3: x² + 16
- answerIndex: 1
- correctChoice: x² − 8x + 16
- explanation: 減號在括號內，屬 (a−b)² 型，用 a²−2ab+b² 展開：x²−2·x·4+16=x²−8x+16。x²+8x+16 是中間 −8x 寫成 +8x；x²−16 則只算 x²−4² 漏了 2ab；x²+16 則中間 2ab 整項漏掉。減號平方的中間項係數要帶負號，減 4 的中間項固定是 −8x。
- steps:
  - 型式是 (a − b)²。
  - 中間項 −2·x·4 = −8x。
  - 得 x² − 8x + 16。
- commonMistake: 減號平方時 2·x·4=8x 的負號漏掉，變成 +8x 這一項。

### u10-s012-v001

- skillId: polynomial-literacy-context
- difficulty: basic
- text: 一塊矩形土地，東西向長 (x + 4) 公尺、南北向寬 (x + 2) 公尺，面積展開後為何？
- choices:
  - 0: x² + 6x + 8
  - 1: x² + 8x + 6
  - 2: 2x² + 6x + 8
  - 3: x² + 6x + 6
- answerIndex: 0
- correctChoice: x² + 6x + 8
- explanation: 矩形土地面積=長×寬=(x+4)(x+2)，分配律展開 x²+2x+4x+8，x 項 2x+4x 合併得 6x，整理 x²+6x+8。x²+8x+6 是 x 項合併錯、常數也弄反；2x²+6x+8 則 x² 只應一個卻多留係數 2；x²+6x+6 則常數 8 漏算。展開後記得把同類 x 項合併再寫答案。
- steps:
  - 面積 = (x + 4)(x + 2)。
  - 分配律：x² + 2x + 4x + 8。
  - 合併得 x² + 6x + 8。
- commonMistake: 展開後 x 項 2x+4x 合併成 8x 而非 6x，或常數 8 弄錯。

### u10-s012-v002

- skillId: polynomial-literacy-context
- difficulty: basic
- text: 一張紙切成邊長 (a + 3) 公分的正方形，面積展開後為何？
- choices:
  - 0: a² + 3a + 9
  - 1: a² + 6a + 9
  - 2: a² + 9
  - 3: a² + 6a + 6
- answerIndex: 1
- correctChoice: a² + 6a + 9
- explanation: 正方形面積=邊長²=(a+3)²，括號內相加，套用 (a+b)²：a²+2·a·3+9=a²+6a+9。a²+3a+9 只算一次 2ab 的一半；a²+9 則中間 6a 整項漏掉；a²+6a+6 則 3² 只算成 6 而漏平方成 9。正方形面積用邊長平方，不是邊長相加。
- steps:
  - 面積 = 邊長² = (a + 3)²。
  - a² + 2·a·3 + 9。
  - 得 a² + 6a + 9。
- commonMistake: 2·a·3=6a 只算成 3a，或中間項整段漏算只剩 a²+9。
