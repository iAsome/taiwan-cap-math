export const U04_PART_S009_S011 = [
  {
    "questionId": "u04-s009-v001",
    "skillId": "system-chicken-rabbit-problem",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "雞兔共 10 隻、腳 28 隻，設雞 x 兔 y，頭數式？",
    "choices": [
      "x + y = 10",
      "2x + 4y = 10",
      "x + y = 28",
      "2x + 2y = 28"
    ],
    "answerIndex": 0,
    "explanation": "頭數只數一次，雞與兔各有一個頭，所以總頭數 10 對應 x+y=10。2x+4y=10 把 10 當腳數右邊卻只有 10 腳，明顯不合理；x+y=28 則把腳數誤寫進頭數式。",
    "steps": [
      "設 x 為雞隻數、y 為兔隻數。",
      "頭數條件：每隻動物一個頭，總頭 10。",
      "寫出頭數方程式 x+y=10。"
    ],
    "commonMistake": "把總腳數 28 誤寫成 x+y=28 的頭數式。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數"
  },
  {
    "questionId": "u04-s009-v002",
    "skillId": "system-chicken-rabbit-problem",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "雞兔共 10 隻、腳 28 隻，腳數式？",
    "choices": [
      "x + y = 28",
      "2x + 4y = 28",
      "4x + 2y = 28",
      "x + 2y = 28"
    ],
    "answerIndex": 1,
    "explanation": "雞每隻 2 腳、兔每隻 4 腳，總腳 28 應列 2x+4y=28。x+y=28 是頭數與腳數混淆；4x+2y 把雞兔腳數係數對調，會讓雞變 4 腳、兔變 2 腳。 腳數式寫成 4x+2y，把雞兔的腳數係數對調。",
    "steps": [
      "確認雞 2 腳、兔 4 腳。",
      "雞貢獻 2x 腳、兔貢獻 4y 腳。",
      "總腳 28，列 2x+4y=28。"
    ],
    "commonMistake": "腳數式寫成 4x+2y，把雞兔的腳數係數對調。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數"
  },
  {
    "questionId": "u04-s009-v003",
    "skillId": "system-chicken-rabbit-problem",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "雞兔共 12 隻、腳 32 隻，雞有幾隻？",
    "choices": [
      "6",
      "10",
      "8",
      "4"
    ],
    "answerIndex": 2,
    "explanation": "列 x+y=12、2x+4y=32。由第一式 y=12−x，帶入後 2x+4(12−x)=32，化簡 2x+48−4x=32，−2x=−16，x=8。選 6 是把兔 4 隻誤當雞；10 則超過總頭數 12。解完後兔 4 隻、雞 8 隻，頭 12 腳 32 都符合。 消去後算出 y=4 卻直接填 4 當雞隻數，忘了題目問的是 x。",
    "steps": [
      "列 x+y=12 與 2x+4y=32。",
      "由 x+y=12 得 y=12−x。",
      "帶入腳數式解出 x=8 隻雞。"
    ],
    "commonMistake": "消去後算出 y=4 卻直接填 4 當雞隻數，忘了題目問的是 x。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數"
  },
  {
    "questionId": "u04-s009-v004",
    "skillId": "system-chicken-rabbit-problem",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "雞兔共 20 隻、腳 56 隻，兔有幾隻？",
    "choices": [
      "10",
      "6",
      "12",
      "8"
    ],
    "answerIndex": 3,
    "explanation": "x+y=20、2x+4y=56。y=20−x 帶入：2x+4(20−x)=56，因此 −2x=−24，x=12，兔 y=8。選 10 是平均分配 20÷2 的錯覺；12 其實是雞隻數不是兔。回代驗算 12 雞 8 兔：頭 20、腳 56，兩項條件都成立。 把解出的 x=12 直接當兔隻數，沒注意題目問的是 y。",
    "steps": [
      "設 x 雞、y 兔，列兩式。",
      "y=20−x 帶入 2x+4y=56。",
      "解出 x=12、y=8，兔有 8 隻。"
    ],
    "commonMistake": "把解出的 x=12 直接當兔隻數，沒注意題目問的是 y。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數"
  },
  {
    "questionId": "u04-s009-v005",
    "skillId": "system-chicken-rabbit-problem",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "雞兔共 15 隻、腳 42 隻，y = ?",
    "choices": [
      "6",
      "8",
      "9",
      "5"
    ],
    "answerIndex": 0,
    "explanation": "x+y=15、2x+4y=42。第二式兩邊同除以 2 後 x+2y=21，減去 x+y=15 得 y=6。選 8 常是把 42÷(2+4) 當平均腳數的速算誤用；9 超過合理範圍。 用 42÷6=7 當兔隻數，忽略頭數限制 15 隻。",
    "steps": [
      "列 x+y=15 與 2x+4y=42。",
      "腳數式除以 2 後 x+2y=21。",
      "兩式相減後 y=6。"
    ],
    "commonMistake": "用 42÷6=7 當兔隻數，忽略頭數限制 15 隻。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數"
  },
  {
    "questionId": "u04-s009-v006",
    "skillId": "system-chicken-rabbit-problem",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "雞兔共 8 隻、腳 20 隻，兔有幾隻？",
    "choices": [
      "3",
      "2",
      "4",
      "6"
    ],
    "answerIndex": 1,
    "explanation": "x+y=8、2x+4y=20。y=8−x 帶入：2x+32−4x=20，−2x=−12，x=6，兔 y=2。選 3 是把 20÷8 當每隻平均腳數；4 則沒驗算頭數是否仍為 8。驗算 6 雞 2 兔：頭 8、腳 20，與題目完全一致。 假設雞兔各半 4 隻 4 隻，沒驗算腳數是否為 20。",
    "steps": [
      "列 x+y=8。",
      "y=8−x 帶入 2x+4y=20。",
      "解出 x=6、y=2，兔 2 隻。"
    ],
    "commonMistake": "假設雞兔各半 4 隻 4 隻，沒驗算腳數是否為 20。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數"
  },
  {
    "questionId": "u04-s009-v007",
    "skillId": "system-chicken-rabbit-problem",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "10 隻全為雞應 20 腳，實際 28 腳，多出的腳來自？",
    "choices": [
      "雞每隻多 2 腳",
      "計算錯誤",
      "兔每隻多 2 腳",
      "頭數算錯"
    ],
    "answerIndex": 2,
    "explanation": "10 隻全雞只有 20 腳，實際 28 腳多 8 腳。每把一隻雞換成兔，腳數多 4−2=2 腳，所以多出來的腳是因兔比雞每隻多 2 腳。選「雞每隻多 2 腳」方向相反。",
    "steps": [
      "全雞 10 隻共 2×10=20 腳。",
      "實際 28 腳，多出 8 腳。",
      "每隻兔比雞多 2 腳，故多出的腳來自兔。"
    ],
    "commonMistake": "把 28−20=8 直接除以 4 當兔隻數，沒說明每隻多 2 腳的來源。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數"
  },
  {
    "questionId": "u04-s009-v008",
    "skillId": "system-chicken-rabbit-problem",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "雞兔共 25 隻、腳 70 隻，雞 x = ?",
    "choices": [
      "10",
      "12",
      "13",
      "15"
    ],
    "answerIndex": 3,
    "explanation": "x+y=25、2x+4y=70。腳數式除以 2 後 x+2y=35，減 x+y=25 得 y=10，再回推 x=15。選 10 是把兔隻數 y 誤當雞；12、13 都沒滿足兩式同時成立。 兩式相減時 35−25 寫成 15 而沒除以係數差，得到錯誤的 y。",
    "steps": [
      "列 x+y=25 與 2x+4y=70。",
      "腳數式化簡為 x+2y=35。",
      "兩式相減後 y=10，x=15。"
    ],
    "commonMistake": "兩式相減時 35−25 寫成 15 而沒除以係數差，得到錯誤的 y。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數"
  },
  {
    "questionId": "u04-s009-v009",
    "skillId": "system-chicken-rabbit-problem",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "雞兔共 30 隻、腳 84 隻，兔 y = ?",
    "choices": [
      "12",
      "15",
      "18",
      "10"
    ],
    "answerIndex": 0,
    "explanation": "x+y=30、2x+4y=84。除以 2 後 x+2y=42，減 x+y=30 後 y=12。選 18 是把 x=18 與 y 混淆；15 是 30÷2 的錯誤直覺。回代 x=18、y=12，頭 30 腳 84 都符合，兔 12 隻正確，這是加減消去的標準流程。 解出 x=18 後直接填 18，沒注意題目問的是兔 y。",
    "steps": [
      "列 x+y=30。",
      "2x+4y=84 化簡為 x+2y=42。",
      "相減後 y=12，並確認 x=18 為非負整數。"
    ],
    "commonMistake": "解出 x=18 後直接填 18，沒注意題目問的是兔 y。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數"
  },
  {
    "questionId": "u04-s009-v010",
    "skillId": "system-chicken-rabbit-problem",
    "topicId": "u04-system-apps",
    "difficulty": "advanced",
    "text": "雞兔共 6 隻、腳 16 隻，雞有幾隻？",
    "choices": [
      "2",
      "4",
      "3",
      "5"
    ],
    "answerIndex": 1,
    "explanation": "x+y=6、2x+4y=16。y=6−x 帶入：2x+24−4x=16，−2x=−8，x=4。選 2 是兔隻數；3 則 3 雞 3 兔只有 18 腳，超過 16 腳。驗算 4 雞 2 兔：頭 6、腳 16，與題目條件完全吻合。 小數字題直接猜 3 雞 3 兔，沒驗算 2×3+4×3=18 超過 16。",
    "steps": [
      "列 x+y=6。",
      "y=6−x 帶入 2x+4y=16。",
      "解出 x=4，兔 y=2，驗算 8+8=16 腳。"
    ],
    "commonMistake": "小數字題直接猜 3 雞 3 兔，沒驗算 2×3+4×3=18 超過 16。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數"
  },
  {
    "questionId": "u04-s009-v011",
    "skillId": "system-chicken-rabbit-problem",
    "topicId": "u04-system-apps",
    "difficulty": "advanced",
    "text": "{x + y = 18, 2x + 4y = 48}，x = ?",
    "choices": [
      "6",
      "9",
      "12",
      "10"
    ],
    "answerIndex": 2,
    "explanation": "第二式除以 2 後 x+2y=24，減 x+y=18 得 y=6，再得 x=12。選 6 是兔隻數；9、10 都不滿足兩式。這組聯立就是標準雞兔同籠的頭腳兩式。 兩式相減時 24−18 的係數處理錯誤，把 y 算成 12 再誤填 x。",
    "steps": [
      "辨識 x+y=18 為頭數式。",
      "2x+4y=48 化簡為 x+2y=24。",
      "兩式相減後 y=6，回推 x=12。"
    ],
    "commonMistake": "兩式相減時 24−18 的係數處理錯誤，把 y 算成 12 再誤填 x。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數"
  },
  {
    "questionId": "u04-s009-v012",
    "skillId": "system-chicken-rabbit-problem",
    "topicId": "u04-system-apps",
    "difficulty": "literacy",
    "text": "雞兔共 50 隻、腳 140 隻，兔有幾隻？",
    "choices": [
      "25",
      "15",
      "30",
      "20"
    ],
    "answerIndex": 3,
    "explanation": "x+y=50、2x+4y=140。除以 2 後 x+2y=70，減 x+y=50 得 y=20，雞 x=30。選 25 是 50÷2 的錯覺；30 其實是雞隻數。農場情境中兔 20 隻、雞 30 隻符合頭腳條件。 大數字題用 140÷(2+4) 速算得 23 再隨便選接近選項，沒列聯立。",
    "steps": [
      "列 x+y=50 與 2x+4y=140。",
      "腳數式化簡為 x+2y=70。",
      "相減後 y=20，回代驗算 60+80=140 腳。"
    ],
    "commonMistake": "大數字題用 140÷(2+4) 速算得 23 再隨便選接近選項，沒列聯立。",
    "concept": "雞兔同籠：x+y 等於總頭數，2x+4y 等於總腳數；雞 2 腳、兔 4 腳，解出後要確認非負整數"
  },
  {
    "questionId": "u04-s010-v001",
    "skillId": "system-ticket-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "成人 x 元、學生 y 元，3 成人 2 學生 700 元，列式？",
    "choices": [
      "3x + 2y = 700",
      "x + y = 700",
      "2x + 3y = 700",
      "3x + 2y = 5"
    ],
    "answerIndex": 0,
    "explanation": "成人票單價 x 買 3 張貢獻 3x，學生票 y 買 2 張貢獻 2y，總價 700 元列 3x+2y=700。x+y=700 把票價與總價混淆；2x+3y 則把成人學生張數對調。 把 3+2=5 張票寫成 3x+2y=5，單位變成張數而非金額。",
    "steps": [
      "設 x 為成人票價、y 為學生票價。",
      "3 張成人票金額 3x，2 張學生票 2y。",
      "總價 700 元，列 3x+2y=700。"
    ],
    "commonMistake": "把 3+2=5 張票寫成 3x+2y=5，單位變成張數而非金額。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數"
  },
  {
    "questionId": "u04-s010-v002",
    "skillId": "system-ticket-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "成人 2 張、學生 5 張 650 元，列式？",
    "choices": [
      "x + y = 650",
      "2x + 5y = 650",
      "5x + 2y = 650",
      "2x + 5y = 7"
    ],
    "answerIndex": 1,
    "explanation": "2 張成人票 2x 元、5 張學生票 5y 元，合計 650 元，列 2x+5y=650。5x+2y 把兩種票張數對調；x+y=650 則把票價相加當總價。 看到 2 和 5 就寫 5x+2y，把成人學生張數係數對調。",
    "steps": [
      "成人 2 張對應係數 2 乘 x。",
      "學生 5 張對應係數 5 乘 y。",
      "總價 650，列 2x+5y=650。"
    ],
    "commonMistake": "看到 2 和 5 就寫 5x+2y，把成人學生張數係數對調。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數"
  },
  {
    "questionId": "u04-s010-v003",
    "skillId": "system-ticket-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "成人票比學生票貴 100 元，列式？",
    "choices": [
      "x + y = 100",
      "x = 100y",
      "x − y = 100",
      "y − x = 100"
    ],
    "answerIndex": 2,
    "explanation": "「成人比學生貴 100 元」表示成人票價減學生票價等於 100，列 x−y=100。y−x=100 是學生比成人貴；x=100y 則變成倍數關係而非差額。 「貴 100 元」寫成 y−x=100，差價正負方向弄反。",
    "steps": [
      "設 x 成人票價、y 學生票價。",
      "「貴 100 元」表示兩票價相差 100。",
      "成人較高，列 x−y=100。"
    ],
    "commonMistake": "「貴 100 元」寫成 y−x=100，差價正負方向弄反。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數"
  },
  {
    "questionId": "u04-s010-v004",
    "skillId": "system-ticket-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "4 成人 1 學生 900 元，且 x + y = 300，x = ?",
    "choices": [
      "150",
      "250",
      "100",
      "200"
    ],
    "answerIndex": 3,
    "explanation": "4x+y=900 且 x+y=300。兩式相減後 3x=600，x=200。選 150 沒考慮 4 張成人票的係數；100 則讓 y=200 時 4×100+200=600 不符 900。回代 y=100，4×200+100=900 元，兩式同時成立。 只用 x+y=300 就猜 x=150，沒用 4x+y=900 的第二條件。",
    "steps": [
      "列 4x+y=900 與 x+y=300。",
      "兩式相減消去 y：3x=600。",
      "解出 x=200，回代後 y=100。"
    ],
    "commonMistake": "只用 x+y=300 就猜 x=150，沒用 4x+y=900 的第二條件。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數"
  },
  {
    "questionId": "u04-s010-v005",
    "skillId": "system-ticket-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "全票 x、半票 y，各 10 張 3000 元，列式？",
    "choices": [
      "10x + 10y = 3000",
      "x + y = 3000",
      "10x + 10y = 20",
      "x + y = 10"
    ],
    "answerIndex": 0,
    "explanation": "全票 10 張 10x、半票 10 張 10y，總價 3000 列 10x+10y=3000。x+y=3000 把票價相加當金額；10x+10y=20 則把 10+10 張數當總價。兩種票各 10 張，係數 10 乘在票價上才是金額式。",
    "steps": [
      "全票 10 張金額 10x。",
      "半票 10 張金額 10y。",
      "合計 3000 元，列 10x+10y=3000。"
    ],
    "commonMistake": "各 10 張就寫 x+y=10，把張數關係誤當金額式。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數"
  },
  {
    "questionId": "u04-s010-v006",
    "skillId": "system-ticket-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "成人 5 學生 8 共 1160 元，且 x − y = 40，x = ?",
    "choices": [
      "80",
      "120",
      "100",
      "140"
    ],
    "answerIndex": 1,
    "explanation": "列 5x+8y=1160 與 x−y=40。由 x=y+40 帶入金額式得 13y=960。檢驗選項：x=120、y=80 時差價 40 成立。選 80 時 y=40 差價不符；100 時 y=60 差價也不對。 只解 x−y=40 就選 x=80，沒帶入 5x+8y=1160 驗算。 帶入金額式並檢驗選項，x=120。",
    "steps": [
      "列 5x+8y=1160 與 x−y=40。",
      "由 x−y=40 寫成 x=y+40。",
      "帶入金額式並檢驗選項，x=120。"
    ],
    "commonMistake": "只解 x−y=40 就選 x=80，沒帶入 5x+8y=1160 驗算。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數"
  },
  {
    "questionId": "u04-s010-v007",
    "skillId": "system-ticket-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "3 成人 4 學生 820 元，2 成人 3 學生 560 元，y = ?",
    "choices": [
      "100",
      "60",
      "80",
      "120"
    ],
    "answerIndex": 2,
    "explanation": "列 3x+4y=820 與 2x+3y=560。第一式減第二式得 x+y=260，再與任一式聯立可解 y=80。選 100 是沒消去就猜；60 則讓 x 過小無法滿足 820 元。 兩組購買只列一條總價式就開始解，少了一個條件。",
    "steps": [
      "列 3x+4y=820。",
      "列 2x+3y=560。",
      "兩式相減後 x+y=260，再解出 y=80。"
    ],
    "commonMistake": "兩組購買只列一條總價式就開始解，少了一個條件。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數"
  },
  {
    "questionId": "u04-s010-v008",
    "skillId": "system-ticket-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "全票 x、優待 y，x + y = 400 且 2x + y = 650，x = ?",
    "choices": [
      "200",
      "150",
      "300",
      "250"
    ],
    "answerIndex": 3,
    "explanation": "x+y=400 與 2x+y=650 相減後 x=250。選 200 則 y=200 時 2x+y=600 不符；150 讓 y=250 時 2×150+250=550 也不對。回代 y=150，2×250+150=650 元，兩式都成立，全票 250 元、優待 150 元，加減消去最簡單。 相減時 650−400 算成 200 就停，忘了左邊係數差也是 1。",
    "steps": [
      "列 x+y=400。",
      "列 2x+y=650。",
      "兩式相減消去 y，因此 x=250。"
    ],
    "commonMistake": "相減時 650−400 算成 200 就停，忘了左邊係數差也是 1。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數"
  },
  {
    "questionId": "u04-s010-v009",
    "skillId": "system-ticket-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "6 成人 4 兒童 1400 元，4x + 3y = 980，x = ?",
    "choices": [
      "200",
      "150",
      "180",
      "220"
    ],
    "answerIndex": 0,
    "explanation": "題目給 4x+3y=980 這條購買紀錄，x=200 時 4×200=800，3y=180，y=60。選 150 讓 4×150=600，3y=380 不是整數票價；220 則超過合理範圍。成人票 200 元、兒童票 60 元時，4×200+3×60=980 成立。 把 6 成人 4 兒童 1400 直接寫成 6x+4y=1400 與 4x+3y=980 混用係數。",
    "steps": [
      "辨識 4x+3y=980 中係數 4、3 是張數。",
      "假設 x=200，算 4×200=800。",
      "3y=980−800=180，y=60 為合理兒童票價。"
    ],
    "commonMistake": "把 6 成人 4 兒童 1400 直接寫成 6x+4y=1400 與 4x+3y=980 混用係數。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數"
  },
  {
    "questionId": "u04-s010-v010",
    "skillId": "system-ticket-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "advanced",
    "text": "早鳥 x、現場 y，x − y = 50 且 3x + 2y = 700，x = ?",
    "choices": [
      "150",
      "160",
      "140",
      "120"
    ],
    "answerIndex": 1,
    "explanation": "x−y=50 可知 x=y+50，帶入 3x+2y=700：3(y+50)+2y=700，5y=550，y=110，x=160。選 150 只滿足差 50 但 3×150+2×100=650≠700；120 差價也不對。回代驗算 3×160+2×110=700 元，早鳥現場差價 50 也成立，兩條件缺一不可。 只用 x−y=50 就猜 x=150、y=100，沒驗算 3x+2y 是否等於 700。",
    "steps": [
      "由 x−y=50 寫 x=y+50。",
      "帶入 3x+2y=700 得 5y=550。",
      "解 y=110，回推 x=160。"
    ],
    "commonMistake": "只用 x−y=50 就猜 x=150、y=100，沒驗算 3x+2y 是否等於 700。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數"
  },
  {
    "questionId": "u04-s010-v011",
    "skillId": "system-ticket-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "advanced",
    "text": "團體 x、個人 y，2 團 3 個 1100 元，x + y = 500，x = ?",
    "choices": [
      "300",
      "350",
      "400",
      "450"
    ],
    "answerIndex": 2,
    "explanation": "設團體票 x 元、個人票 y 元，列 2x + 3y = 1100 與 x + y = 500。由第二式 y = 500 − x 代入第一式，2x + 3(500 − x) = 1100，解得 x = 400、y = 100。選 300 時總價會超過 1100 元，應排除。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "列 2x+3y=1100。",
      "由 x+y=500 得 y=500−x。",
      "帶入解出 x=400、y=100。"
    ],
    "commonMistake": "x+y=500 誤解成兩票價相加 500 就選 x=300、y=200，沒用 2x+3y=1100。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數"
  },
  {
    "questionId": "u04-s010-v012",
    "skillId": "system-ticket-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "literacy",
    "text": "全票 x、學生 y 共 100 張 8000 元，x + y = 100 且 80x + 50y = 8000，x = ?",
    "choices": [
      "80",
      "120",
      "60",
      "100"
    ],
    "answerIndex": 3,
    "explanation": "此題 x、y 是全票與學生票的張數，80、50 是各票單價。x+y=100 且 80x+50y=8000。y=100−x 帶入：80x+50(100−x)=8000，30x=3000，x=100 張全票。選 80 則 80×80+50×20=7400 不足 8000 元。全票 100 張時 80×100=8000 元，與總張數 100 也吻合。",
    "steps": [
      "辨識 x、y 是張數，80、50 是票價。",
      "列 x+y=100 與 80x+50y=8000。",
      "消去 y 得 30x=3000，全票 x=100 張。"
    ],
    "commonMistake": "看到 8000 與 100 就猜 x=80，沒列 80x+50y=8000 這條金額式。",
    "concept": "票價題：張數用 x+y=總張，金額用 px+qy=總價；成人與學生票價不同，係數是各票種張數"
  },
  {
    "questionId": "u04-s011-v001",
    "skillId": "system-quantity-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "蘋果 x 元/個、橘子 y 元/個，4 蘋果 3 橘子 38 元，列式？",
    "choices": [
      "4x + 3y = 38",
      "x + y = 38",
      "3x + 4y = 38",
      "4x + 3y = 7"
    ],
    "answerIndex": 0,
    "explanation": "蘋果單價 x 買 4 個 4x，橘子 y 買 3 個 3y，總價 38 列 4x+3y=38。3x+4y 把蘋果橘子數量對調；4x+3y=7 則把 4+3 當總價。列式時 4 個蘋果係數在前、3 個橘子在後，順序不能對調。",
    "steps": [
      "設 x 蘋果單價、y 橘子單價。",
      "4 個蘋果金額 4x，3 個橘子 3y。",
      "合計 38 元，列 4x+3y=38。"
    ],
    "commonMistake": "把 4 蘋果 3 橘子寫成 3x+4y=38，兩種水果件數係數對調。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式"
  },
  {
    "questionId": "u04-s011-v002",
    "skillId": "system-quantity-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "共 10 個、60 元，x + y = 10 且 3x + 5y = 60，y = ?",
    "choices": [
      "4",
      "6",
      "5",
      "8"
    ],
    "answerIndex": 1,
    "explanation": "x+y=10 且 3x+5y=60。x=10−y 帶入：3(10−y)+5y=60，2y=30，y=6。選 4 則 x=6 時 3×6+5×4=38 不足 60；5 讓 3×5+5×5=40 也不對。回代後兩式同時成立，y=6 是正解，兩商品單價和件數都合理。 看到 10 個 60 元就猜 y=5 平均分配，沒用 3x+5y=60 的係數差。",
    "steps": [
      "由 x+y=10 得 x=10−y。",
      "帶入 3x+5y=60。",
      "化簡 2y=30，解 y=6。"
    ],
    "commonMistake": "看到 10 個 60 元就猜 y=5 平均分配，沒用 3x+5y=60 的係數差。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式"
  },
  {
    "questionId": "u04-s011-v003",
    "skillId": "system-quantity-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "A 比 B 貴 20 且 2A + B = 130，x − y = 20，x = ?",
    "choices": [
      "40",
      "60",
      "50",
      "45"
    ],
    "answerIndex": 2,
    "explanation": "x−y=20 且 2x+y=130（2A+B 中 A 對應 x）。y=x−20 帶入 2x+(x−20)=130，3x=150，x=50。選 40 則 y=20 時 2×40+20=100 不足 130；60 則差價不符。回代 y=30，2×50+30=130 元，差價 20 元也成立，兩條件都吻合。 「A 比 B 貴 20」寫成 y−x=20，差價正負弄反。",
    "steps": [
      "由 x−y=20 得 y=x−20。",
      "2x+y=130 寫成 2x+(x−20)=130。",
      "解 3x=150，x=50。"
    ],
    "commonMistake": "「A 比 B 貴 20」寫成 y−x=20，差價正負弄反。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式"
  },
  {
    "questionId": "u04-s011-v004",
    "skillId": "system-quantity-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "3 斤蘋果 2 斤梨 86 元，蘋果 18/斤，2y = 86 − 54，y = ?",
    "choices": [
      "14",
      "18",
      "20",
      "16"
    ],
    "answerIndex": 3,
    "explanation": "蘋果 18 元/斤，3 斤共 54 元。梨的 2 斤金額 86−54=32，2y=32，y=16。選 14 則 2×14=28 加上 54 只有 82 元；18 則把蘋果單價誤當梨價。梨 16 元/斤時，3×18+2×16=54+32=86 元，與總價吻合。 2y=86−54 算成 2y=32 後除以 2 後 16，卻誤填 32 當 y。",
    "steps": [
      "蘋果 3 斤金額 3×18=54 元。",
      "總價 86 減 54 得梨 2 斤 32 元。",
      "2y=32，梨單價 y=16 元/斤。"
    ],
    "commonMistake": "2y=86−54 算成 2y=32 後除以 2 後 16，卻誤填 32 當 y。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式"
  },
  {
    "questionId": "u04-s011-v005",
    "skillId": "system-quantity-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "5 紅 3 藍 74 元，5x + 3y = 74，x = 10，y = ?",
    "choices": [
      "8",
      "6",
      "12",
      "14"
    ],
    "answerIndex": 0,
    "explanation": "已知 x=10，5×10=50，3y=74−50=24，y=8。選 6 則 50+18=68 不足 74；12 則 50+36=86 超過 74。紅筆 10 元、藍筆 8 元時，5×10+3×8=74 元正確，記得先算 5x 再解 y，單位都是元。 x=10 時直接寫 y=10，沒把 5x 先算成 50 再減。",
    "steps": [
      "5x+3y=74 中 x=10。",
      "算 5×10=50。",
      "3y=24，解 y=8。"
    ],
    "commonMistake": "x=10 時直接寫 y=10，沒把 5x 先算成 50 再減。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式"
  },
  {
    "questionId": "u04-s011-v006",
    "skillId": "system-quantity-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "2 大 5 小 160 元，x + y = 30 且 2x + 5y = 160，x = ?",
    "choices": [
      "40",
      "50",
      "60",
      "35"
    ],
    "answerIndex": 1,
    "explanation": "x+y=30 且 2x+5y=160。將 x+y=30 乘以 2 得 2x+2y=60，與 2x+5y=160 相減後 3y=100。回代後大杯單價 x=50 元。選 40 則 2×40+5×16=160 但 x+y=56 不符 30。聯立解出大杯單價 50 元後，記得用第二式回代驗算。",
    "steps": [
      "列 x+y=30 與 2x+5y=160。",
      "將 x+y=30 乘以 2 得 2x+2y=60。",
      "兩式相減後 3y=100，回代 x=50。"
    ],
    "commonMistake": "把 x+y=30 當成單價相加 30 元，沒當數量或單價關係式。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式"
  },
  {
    "questionId": "u04-s011-v007",
    "skillId": "system-quantity-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "6 筆 6 橡皮 84 元，x + y = 14 且 2x + y = 22，x = ?",
    "choices": [
      "6",
      "10",
      "8",
      "12"
    ],
    "answerIndex": 2,
    "explanation": "x+y=14 與 2x+y=22 相減後 x=8。選 6 則 y=8 時 2×6+8=20 不符 22；10 則 y=4 時 2×10+4=24 超過 22。x=8 時 2×8+y=22 因此 y=6，筆 8 元、橡皮 6 元，金額式也成立，兩條聯立都吻合。 6 筆 6 橡皮誤解成 x=6、y=6 直接填 6，沒列 2x+y=22。",
    "steps": [
      "列 x+y=14。",
      "列 2x+y=22。",
      "兩式相減消去 y，因此 x=8。"
    ],
    "commonMistake": "6 筆 6 橡皮誤解成 x=6、y=6 直接填 6，沒列 2x+y=22。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式"
  },
  {
    "questionId": "u04-s011-v008",
    "skillId": "system-quantity-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "A 30 元、B 45 元，12 件 480 元，30x + 45y = 480 且 x + y = 12，y = ?",
    "choices": [
      "4",
      "6",
      "10",
      "8"
    ],
    "answerIndex": 3,
    "explanation": "30x+45y=480 且 x+y=12。x=12−y 帶入：30(12−y)+45y=480，15y=120，y=8。選 4 則 x=8 時 240+180=420 不足；6 則 360+270=630 超過 480。回代 x=4、y=8，30×4+45×8=480 元，件數 12 也對，兩式都成立無誤，A 商品 4 件、B 商品 8 件。 看到 A 30、B 45 就猜 y=6 平均，沒用 12 件 480 元的總價條件。",
    "steps": [
      "由 x+y=12 得 x=12−y。",
      "帶入 30x+45y=480。",
      "化簡 15y=120，解 y=8。"
    ],
    "commonMistake": "看到 A 30、B 45 就猜 y=6 平均，沒用 12 件 480 元的總價條件。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式"
  },
  {
    "questionId": "u04-s011-v009",
    "skillId": "system-quantity-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "2 盒蛋 3 瓶奶 210 元，4 盒 1 瓶 250 元，x = ?",
    "choices": [
      "55",
      "50",
      "60",
      "45"
    ],
    "answerIndex": 0,
    "explanation": "列 2x+3y=210 與 4x+y=250。第一式乘 2 得 4x+6y=420，減第二式 5y=170，y=34，x=55。選 50 則 2×50+3×34=188≠210；60 則 4×60+34=274 超過 250。蛋 55 元/盒、奶 34 元/瓶時，兩組購買金額都吻合。 兩組購買只列 2x+3y=210 一條，沒用 4 盒 1 瓶的第二條件。",
    "steps": [
      "列 2x+3y=210。",
      "列 4x+y=250。",
      "消去 y 解出 x=55、y=34。"
    ],
    "commonMistake": "兩組購買只列 2x+3y=210 一條，沒用 4 盒 1 瓶的第二條件。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式"
  },
  {
    "questionId": "u04-s011-v010",
    "skillId": "system-quantity-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "advanced",
    "text": "5 平 2 精 290 元，3 平 4 精 310 元，x = ?",
    "choices": [
      "40",
      "30",
      "50",
      "35"
    ],
    "answerIndex": 1,
    "explanation": "列 5x+2y=290 與 3x+4y=310。第一式乘 2 得 10x+4y=580，減 3x+4y=310 後 7x=270。聯立解出平裝單價 x=30 元。選 40 則 5×40+2y=290 因此 y=45，但 3×40+4×45=300 不符 310，應排除，平裝 30 元才合理。 5 平 2 精與 3 平 4 精的係數對調，列成 2x+5y=290。",
    "steps": [
      "列 5x+2y=290 與 3x+4y=310。",
      "第一式乘 2 再減第二式消去 y。",
      "解出平裝單價 x=30 元。"
    ],
    "commonMistake": "5 平 2 精與 3 平 4 精的係數對調，列成 2x+5y=290。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式"
  },
  {
    "questionId": "u04-s011-v011",
    "skillId": "system-quantity-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "advanced",
    "text": "3 大 2 小 220 元，2 大 3 小 230 元，x = ?",
    "choices": [
      "40",
      "60",
      "50",
      "45"
    ],
    "answerIndex": 2,
    "explanation": "列 3x+2y=220 與 2x+3y=230。兩式聯立加減消去 y 後解出大杯單價 x=50 元。選 40 則 3×40+2y=220 因此 y=50，但 2×40+3×50=230 兩式同時成立，故 x=50 才是大杯單價。 3 大 2 小與 2 大 3 小只列一條總價式就解，少一個條件。",
    "steps": [
      "列 3x+2y=220 與 2x+3y=230。",
      "兩式分別乘 3、2 後相減消去 y。",
      "解出大杯單價 x=50 元。"
    ],
    "commonMistake": "3 大 2 小與 2 大 3 小只列一條總價式就解，少一個條件。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式"
  },
  {
    "questionId": "u04-s011-v012",
    "skillId": "system-quantity-price-problem",
    "topicId": "u04-system-apps",
    "difficulty": "literacy",
    "text": "40 筆 25 本 650 元，筆 12 元，y = ?",
    "choices": [
      "8",
      "12",
      "15",
      "10"
    ],
    "answerIndex": 3,
    "explanation": "筆每支 12 元，40 支共 480 元。列 40×12+25y=650，化簡 25y=170。聯立驗算後本子單價 y=10 元。選 8 則 25×8=200，合計 680 元超過 650；12 則 480+300=780 更不合理。 40 筆 25 本直接寫 40x+25y=650 但把 40、25 當單價而非件數。",
    "steps": [
      "筆 12 元/支，40 支金額 480 元。",
      "列 40×12+25y=650。",
      "化簡解出本子單價 y=10 元。"
    ],
    "commonMistake": "40 筆 25 本直接寫 40x+25y=650 但把 40、25 當單價而非件數。",
    "concept": "兩種商品：數量關係 x+y=總件，金額關係 ax+by=總價；單價與件數要對應，兩組購買各列一式"
  }
];

export const U04_LECTURES_S009_S011 = [
  {
    "skillId": "system-chicken-rabbit-problem",
    "topicId": "u04-system-apps",
    "title": "雞兔同籠問題",
    "concept": "雞兔同籠是聯立方程式的經典應用：每隻動物各有一個頭，所以頭數式寫 x+y 等於總頭數；腳數要依種類分開，雞 2 腳、兔 4 腳，腳數式寫 2x+4y 等於總腳數。解題前先確認題目要列式還是求隻數，再用代入或加減消去；最後務必檢查解是否為非負整數，半隻或負數在情境上都不合理。",
    "formula": "x+y=頭數；2x+4y=腳數",
    "stepGuide": [
      "設 x 為雞隻數、y 為兔隻數，並在草稿標明",
      "依總頭數列頭數式 x+y=總頭",
      "依雞 2 腳、兔 4 腳列腳數式 2x+4y=總腳",
      "用代入或加減消去解聯立",
      "回代驗算頭數與腳數，確認為非負整數"
    ],
    "examples": [
      {
        "question": "籠內雞兔共 14 隻、腳 36 隻，雞有幾隻？",
        "explanation": "先列 x+y=14 與 2x+4y=36。腳數式兩邊除以 2 後 x+2y=18，減去頭數式得 y=4，再回推 x=10。最後驗算 10 雞 4 兔：頭 14、腳 20+16=36，兩項都符合，這就是雞兔同籠聯立的基本套路。"
      },
      {
        "question": "若 8 隻動物全是雞應有幾腳？實際 22 腳，這代表什麼？",
        "explanation": "8 隻全雞只有 16 腳，實際 22 腳多出 6 腳。每把一隻雞換成兔，腳數多 2 隻，所以多出 6 腳代表有 3 隻兔。這種「全雞假設」技巧可快速估算，但仍建議列聯立確認，考試時寫出 x+y 與 2x+4y 兩式最穩妥。"
      }
    ],
    "commonMistakes": [
      "腳數式係數都寫 2，忽略兔有 4 腳",
      "把總腳數寫進頭數式 x+y=腳數",
      "4x+2y 把雞兔腳數係數對調",
      "解出負數或半隻仍當答案",
      "求兔隻數卻填成雞隻數 x"
    ]
  },
  {
    "skillId": "system-ticket-price-problem",
    "topicId": "u04-system-apps",
    "title": "票價問題",
    "concept": "票價題的未知數是各票種單價，不是張數。常見兩條線索：不同購買組合的總價（係數是各票種張數），以及票價差額或總張數。列式時 3 成人 2 學生 700 元應寫 3x+2y=700，不能把 700 當成 x+y。兩式聯立後解出票價，回代時注意元、張單位一致，並用另一組購買驗算。",
    "formula": "px+qy=總價；必要時 x±y=差價或 x+y=總張",
    "stepGuide": [
      "設 x、y 為兩種票價，標明各代表哪種票",
      "找出題目中兩組不同的購買紀錄",
      "依張數列兩條總價式，張數當係數",
      "若有差價或總張數再列第三條輔助式",
      "解聯立後回代驗算兩組購買是否吻合"
    ],
    "examples": [
      {
        "question": "電影院全票 x 元、學生票 y 元，買 2 全票 3 學生票 520 元，又買 1 全票 4 學生票 380 元，求全票價。",
        "explanation": "列 2x+3y=520 與 x+4y=380。第二式乘 2 得 2x+8y=760，減第一式 5y=240，y=48。回代 x+4×48=380，x=188。用第一組驗算 2×188+3×48=520，兩組都成立，說明兩條總價式列對了，票價單位也一致。"
      },
      {
        "question": "早鳥票比現場票便宜 30 元，3 張早鳥加 2 張現場共 540 元，求現場票價。",
        "explanation": "設早鳥 x、現場 y，「早鳥便宜 30」寫 y−x=30。金額式 3x+2y=540。由 y=x+30 帶入 3x+2(x+30)=540，5x=480，x=96，y=126。現場票 126 元，差價 30 元且總價 540 元都符合，差價式與金額式要一起用。"
      }
    ],
    "commonMistakes": [
      "把總張數或總價寫成 x+y=總價",
      "成人學生票的張數係數對調",
      "差價正負寫反（貴寫成 x−y 或 y−x 弄錯）",
      "只列一組購買就開始解",
      "回代時把票種與係數對錯"
    ]
  },
  {
    "skillId": "system-quantity-price-problem",
    "topicId": "u04-system-apps",
    "title": "數量與總價問題",
    "concept": "數量與總價問題的未知數是兩種商品單價，每一組購買各列一條「單價乘數量等於總價」的方程式。兩式必須對應不同購買組合才有唯一解，4 蘋果 3 橘子不能寫成 3x+4y。已知其中一種單價時可先代換；解出後用另一組購買驗算，並確認斤、個、本等單位前後一致。",
    "formula": "單價×數量相加=總價；必要時 x+y=總件或 x−y=差價",
    "stepGuide": [
      "設 x、y 為兩商品單價，標明單位（元/個、元/斤）",
      "找出題目中兩組不同的購買組合",
      "每組各列一條 ax+by=總價",
      "用代入或加減消去解聯立",
      "回代驗算另一組購買，並檢查單價是否合理"
    ],
    "examples": [
      {
        "question": "水果攤蘋果 x 元/斤、香蕉 y 元/斤，買 2 斤蘋果 5 斤香蕉 46 元，又買 4 斤蘋果 1 斤香蕉 38 元，求蘋果單價。",
        "explanation": "列 2x+5y=46 與 4x+y=38。第二式乘 5 後 20x+5y=190，減第一式 18x=144，x=8 即可。回代 4×8+y=38，y=6。驗算 2×8+5×6=46，兩組購買都吻合，這就是兩組不同組合列聯立的標準寫法。"
      },
      {
        "question": "文具店筆 x 元、橡皮 y 元，買 3 筆 2 橡皮 26 元，已知筆 6 元，求橡皮單價。",
        "explanation": "列 3x+2y=26，已知筆價 x=6 元。先算 3×6=18，剩 2y=26−18=8，y=4 即可。橡皮 4 元。這題只需一條總價式加已知單價，不必聯立兩組購買，把已知單價直接代進去最快也最穩當，最後驗算 3×6+2×4=26 元。"
      }
    ],
    "commonMistakes": [
      "兩種商品件數係數對調（4x+3y 寫成 3x+4y）",
      "把件數當單價或把單價當件數",
      "兩式列成相同購買組合",
      "已知單價卻仍列兩條聯立，多餘繞路",
      "斤、個、本單位混用未統一"
    ]
  }
];
