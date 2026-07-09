export const U04_PART_S012_S014 = [
  {
    "questionId": "u04-s012-v001",
    "skillId": "system-rate-problem",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "小華先以每小時 x km 的速度走 2 小時，再以每小時 y km 的速度走 3 小時，兩段路程相加共 19 km。應列哪一式？",
    "choices": [
      "2x + 3y = 19",
      "x + y = 19",
      "5(x + y) = 19",
      "2x + 3y = 5"
    ],
    "answerIndex": 0,
    "explanation": "每段路程都是速率乘時間：第一段 2x km、第二段 3y km，相加得 19 km，所以 2x + 3y = 19。x + y = 19 把兩段時間都當 1 小時；5(x + y) = 19 則誤把速率先相加。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "確認 x、y 分別代表兩段不同的速率（km/h）。",
      "第一段路程 = 2 × x，第二段路程 = 3 × y。",
      "總路程 19 km 表示兩段相加：2x + 3y = 19。"
    ],
    "commonMistake": "把 2 小時與 3 小時的時間直接加在未知數上，列成 x + y = 19。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t"
  },
  {
    "questionId": "u04-s012-v002",
    "skillId": "system-rate-problem",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "甲以 4 km/h、乙以 6 km/h 同向而行 2 小時，乙比甲多走 4 km。下列哪一個算式正確？",
    "choices": [
      "6 + 4 = 4",
      "(6 − 4) × 2 = 4",
      "4 × 6 = 4",
      "6 − 4 = 2"
    ],
    "answerIndex": 1,
    "explanation": "同向時路程差 = (較快 − 較慢) × 時間 = (6 − 4) × 2 = 4 km。6 + 4 = 4 把速率相加而非相減；6 − 4 = 2 只算速率差，漏乘 2 小時。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "同向追及：路程差 = 速率差 × 時間。",
      "速率差 = 6 − 4 = 2 km/h。",
      "2 小時內多走 2 × 2 = 4 km，算式為 (6 − 4) × 2 = 4。"
    ],
    "commonMistake": "同向問題卻把兩車速率相加，誤以為 6 + 4 能表示路程差。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t"
  },
  {
    "questionId": "u04-s012-v003",
    "skillId": "system-rate-problem",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "船在靜水中的速率為每小時 x km，水流速率為 2 km/h，則順流而下的實際速率為？",
    "choices": [
      "x − 2",
      "x × 2",
      "x + 2",
      "2 − x"
    ],
    "answerIndex": 2,
    "explanation": "順流時水流協助前進，實際速率 = 靜水速率 + 水流速率 = x + 2。x − 2 是逆流速率；x × 2 把兩速率相乘，意義不對。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "順流：船速與水流同方向，速率相加。",
      "靜水速率 x km/h，水流 2 km/h。",
      "順流速率 = x + 2 km/h。"
    ],
    "commonMistake": "順逆流搞反，把順流寫成 x − 2。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t"
  },
  {
    "questionId": "u04-s012-v004",
    "skillId": "system-rate-problem",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "A 車 60 km/h、B 車 80 km/h 相向而行，2 小時後相遇。兩地相距多少 km？",
    "choices": [
      "140 km",
      "240 km",
      "160 km",
      "280 km"
    ],
    "answerIndex": 3,
    "explanation": "相向相遇：總路程 = (60 + 80) × 2 = 140 × 2 = 280 km。140 km 只算速率之和漏乘時間；160 km 是 80 × 2，只算一車路程。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "相向時兩車共同走完全程，速率要相加。",
      "合速率 = 60 + 80 = 140 km/h。",
      "2 小時共走 140 × 2 = 280 km，即兩地距離。"
    ],
    "commonMistake": "算出速率之和 140 就當答案，忘記再乘 2 小時。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t"
  },
  {
    "questionId": "u04-s012-v005",
    "skillId": "system-rate-problem",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "志明先以 x km/h 步行 2 小時，再以 y km/h 騎腳踏車 1 小時，全程 14 km。已知 x = 4，求 y。",
    "choices": [
      "6",
      "4",
      "8",
      "10"
    ],
    "answerIndex": 0,
    "explanation": "步行 4 × 2 = 8 km，剩 14 − 8 = 6 km 由腳踏車完成。騎 1 小時，所以 y = 6 km/h。選 4 是把步行速率誤當騎車速率；選 8 則把 6 km 當成 2 小時的總距。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "列式 2x + y = 14，以 x = 4 得 8 + y = 14。",
      "解得 y = 6。",
      "也可分段：步行 8 km，腳踏車需走 6 km、1 小時，速率 6 km/h。"
    ],
    "commonMistake": "算出剩餘 6 km 後，又除以 2 小時，誤得 y = 3 或混淆兩段時間。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t"
  },
  {
    "questionId": "u04-s012-v006",
    "skillId": "system-rate-problem",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "快車 90 km/h、慢車 60 km/h 同向行駛 3 小時，快車比慢車多走多少 km？",
    "choices": [
      "30 km",
      "90 km",
      "150 km",
      "60 km"
    ],
    "answerIndex": 1,
    "explanation": "同向路程差 = (90 − 60) × 3 = 30 × 3 = 90 km。30 km 只算速率差漏乘 3 小時；150 km 是把兩車路程相加 270 再減 120 時算錯。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "同向：先求速率差 90 − 60 = 30 km/h。",
      "時間 3 小時，路程差 = 30 × 3。",
      "快車比慢車多走 90 km。"
    ],
    "commonMistake": "算出速率差 30 km/h 就直接選 30 km，沒有乘 3 小時。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t"
  },
  {
    "questionId": "u04-s012-v007",
    "skillId": "system-rate-problem",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "某生以 x km/h 走 2 小時、以 y km/h 走 3 小時，總路程 25 km，即 2x + 3y = 25。若 x = 5，求 y。",
    "choices": [
      "4",
      "3",
      "5",
      "6"
    ],
    "answerIndex": 2,
    "explanation": "已知步行速率 x = 5 km/h，帶入 2x + 3y = 25 得 10 + 3y = 25，移項後 3y = 15，所以騎車速率 y = 5 km/h。選 4 是把 15 誤除以 4；選 3 則在移項時減法出錯。回代 2×5 + 3×5 = 25 km，兩段路程加總與題目一致。",
    "steps": [
      "把 x = 5 帶入 2x + 3y = 25。",
      "10 + 3y = 25，移項得 3y = 15。",
      "y = 5 km/h。"
    ],
    "commonMistake": "2 × 5 算成 15，導致 3y = 10 而得到非整數答案。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t"
  },
  {
    "questionId": "u04-s012-v008",
    "skillId": "system-rate-problem",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "去程以 x km/h 走 2 小時，回程以 y km/h 走 3 小時，兩段路程相等，即 2x = 3y。若 2x = 24，求 x。",
    "choices": [
      "10",
      "8",
      "15",
      "12"
    ],
    "answerIndex": 3,
    "explanation": "2x = 24 直接得 x = 12 km/h。不需要先求 y。選 8 是把 24 除以 3（回程時間）；選 10 則在 24 ÷ 2 時算錯。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "題目已給 2x = 24，兩段路程相等。",
      "兩邊同除以 2：x = 12。",
      "x 是去程速率 12 km/h。"
    ],
    "commonMistake": "明明可以直接由 2x = 24 求 x，卻先去算 y 再回代，中途算錯。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t"
  },
  {
    "questionId": "u04-s012-v009",
    "skillId": "system-rate-problem",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "兩車相向而行 3 小時共走 270 km，速率之和 x + y = 90。若甲車 x = 50 km/h，求乙車速率 y。",
    "choices": [
      "40",
      "50",
      "30",
      "45"
    ],
    "answerIndex": 0,
    "explanation": "相向而行時合速率為 x + y = 90 km/h。甲車 x = 50 時，乙車 y = 90 − 50 = 40 km/h。也可驗算 (50 + 40) × 3 = 270 km，與題目總路程吻合。選 50 是誤以為兩車速率相同；選 30 則把 90 − 50 算成 30。",
    "steps": [
      "相向 3 小時走 270 km，合速率 270 ÷ 3 = 90 km/h。",
      "即 x + y = 90。",
      "x = 50 時，y = 90 − 50 = 40 km/h。"
    ],
    "commonMistake": "用 270 ÷ 50 去除以甲車速率，誤求乙車時間而非速率。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t"
  },
  {
    "questionId": "u04-s012-v010",
    "skillId": "system-rate-problem",
    "topicId": "u04-system-apps",
    "difficulty": "advanced",
    "text": "步行 1.5 小時、騎車 2 小時共走 21 km，列式 1.5x + 2y = 21。若步行速率 x = 6 km/h，求騎車速率 y。",
    "choices": [
      "4",
      "6",
      "8",
      "5"
    ],
    "answerIndex": 1,
    "explanation": "以 x = 6 帶入 1.5x + 2y = 21，先算 1.5 × 6 = 9 km，再得 9 + 2y = 21，2y = 12，所以騎車速率 y = 6 km/h。選 4 是把 12 誤除以 3；選 5 則在 1.5 × 6 時算成 7.5 而非 9。回代 1.5×6 + 2×6 = 21 km，兩段路程加總正確。請再核對一次計算與題意。",
    "steps": [
      "以 x = 6：1.5 × 6 + 2y = 21。",
      "9 + 2y = 21，2y = 12。",
      "y = 6 km/h。"
    ],
    "commonMistake": "1.5 × 6 算成 6 或 8，導致後續 2y 的值全錯。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t"
  },
  {
    "questionId": "u04-s012-v011",
    "skillId": "system-rate-problem",
    "topicId": "u04-system-apps",
    "difficulty": "advanced",
    "text": "汽車以 x km/h 開 10 小時，機車以 y km/h 開 5 小時，兩段總里程 200 km，即 10x + 5y = 200。若 x = 12，求 y。",
    "choices": [
      "14",
      "18",
      "16",
      "20"
    ],
    "answerIndex": 2,
    "explanation": "以 x = 12 帶入 10x + 5y = 200，先算汽車段 10 × 12 = 120 km，再得 120 + 5y = 200，5y = 80，所以機車速率 y = 16 km/h。選 14 是把 80 誤除以 6；選 18 則 120 + 5×18 = 210 超過 200 km。回代 10×12 + 5×16 = 200 km，兩段里程加總符合題意。請再核對一次計算與題意。",
    "steps": [
      "以 x = 12：10 × 12 + 5y = 200。",
      "120 + 5y = 200，5y = 80。",
      "y = 16 km/h。"
    ],
    "commonMistake": "10 × 12 算成 100，使 5y = 100 而誤得 y = 20。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t"
  },
  {
    "questionId": "u04-s012-v012",
    "skillId": "system-rate-problem",
    "topicId": "u04-system-apps",
    "difficulty": "literacy",
    "text": "校慶義賣時，去程搭巴士以 x km/h 行駛 1 小時共 60 km；回程改搭機車，以 y km/h 行駛 1.5 小時也走 60 km。求回程速率 y。",
    "choices": [
      "45",
      "50",
      "42",
      "40"
    ],
    "answerIndex": 3,
    "explanation": "回程路程 60 km、時間 1.5 小時，y = 60 ÷ 1.5 = 40 km/h。選 45 是把 60 除以 1.33 左右；選 50 則誤以為去程速率就是回程速率。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "回程與去程路程相同，都是 60 km。",
      "機車行駛 1.5 小時，速率 y = 60 ÷ 1.5。",
      "y = 40 km/h。"
    ],
    "commonMistake": "看到去程 1 小時走 60 km 就寫 y = 60，忽略回程花了 1.5 小時。",
    "concept": "路程=速率×時間：各段 s=vt 相加得總路程；相向相遇為 (v1+v2)t，同向追及為 |v1−v2|t"
  },
  {
    "questionId": "u04-s013-v001",
    "skillId": "system-mixture-basic",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "40% 糖水 x g 與 20% 糖水 y g 混合成 300 g、濃度 30% 的糖水。求 40% 糖水的重量 x。",
    "choices": [
      "150 g",
      "100 g",
      "200 g",
      "120 g"
    ],
    "answerIndex": 0,
    "explanation": "混合題要同時守恆總量與溶質。列 x + y = 300 與 0.4x + 0.2y = 90（30% × 300）。以 y = 300 − x 代入得 0.2x + 60 = 90，x = 150 g。選 100 g 只滿足總量卻溶質不足；選 200 g 則溶質過多。回代 x = 150、y = 150 時溶質 60 + 30 = 90 g，濃度確為 30%。",
    "steps": [
      "總量守恆：x + y = 300。",
      "溶質守恆：0.4x + 0.2y = 0.3 × 300 = 90。",
      "解聯立得 x = 150 g。"
    ],
    "commonMistake": "把 40% 與 20% 直接平均成 30%，沒有考慮兩種溶液的量不同。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量"
  },
  {
    "questionId": "u04-s013-v002",
    "skillId": "system-mixture-basic",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "已有 5% 糖水 200 g，欲再加入 15% 糖水，使混合後總量 400 g、濃度 10%。需加入 15% 糖水多少 g？",
    "choices": [
      "100 g",
      "200 g",
      "150 g",
      "50 g"
    ],
    "answerIndex": 1,
    "explanation": "原有溶質 0.05 × 200 = 10 g，混合後需 0.1 × 400 = 40 g，缺 30 g 溶質。30 ÷ 0.15 = 200 g 的 15% 糖水。選 100 g 只使總溶質 25 g；選 150 g 則總量只有 350 g。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "原有 5% 糖水 200 g 含糖 10 g。",
      "400 g、10% 需溶質 40 g，還缺 30 g。",
      "30 g 溶質 ÷ 15% = 200 g 的 15% 糖水。"
    ],
    "commonMistake": "用 400 − 200 = 200 碰巧對，卻沒驗溶質，下一題換數字就會錯。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量"
  },
  {
    "questionId": "u04-s013-v003",
    "skillId": "system-mixture-basic",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "A 型米 30 元/kg、B 型米 50 元/kg 混合 10 kg，均價 38 元/kg。求 A 型米的重量 x。",
    "choices": [
      "4 kg",
      "5 kg",
      "6 kg",
      "8 kg"
    ],
    "answerIndex": 2,
    "explanation": "均價混合題列 x + y = 10 與 30x + 50y = 380（38 × 10）。以 y = 10 − x 代入得 30x + 500 − 50x = 380，移項 −20x = −120，所以 A 型米 x = 6 kg。選 4 kg 則總價 392 元超過 380 元；選 5 kg 則均價變成 40 元/kg。回代 x = 6、y = 4 時總價 180 + 200 = 380 元成立。",
    "steps": [
      "總重量 x + y = 10 kg。",
      "總價 30x + 50y = 380 元。",
      "解聯立得 x = 6 kg。"
    ],
    "commonMistake": "把 30 與 50 直接平均成 40，沒有列總價守恆式。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量"
  },
  {
    "questionId": "u04-s013-v004",
    "skillId": "system-mixture-basic",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "純果汁 x L 與 20% 果汁 y L 混合成 5 L，混合後果汁含量為 84%。求純果汁 x。（純果汁視為 100%）",
    "choices": [
      "2 L",
      "3 L",
      "1 L",
      "4 L"
    ],
    "answerIndex": 3,
    "explanation": "純果汁視為 100%，列 x + y = 5 與 x + 0.2y = 4.2（84% × 5）。以 y = 5 − x 代入得 x + 1 − 0.2x = 4.2，0.8x = 3.2，所以純果汁 x = 4 L。選 2 L 只算 40% 果汁量；選 1 L 則混合後濃度不到 84%。回代 x = 4、y = 1 時果汁量 4 + 0.2 = 4.2 L，占 5 L 的 84%。請再核對一次計算與題意。",
    "steps": [
      "總量 x + y = 5 L。",
      "混合後需 4.2 L 果汁：x + 0.2(5 − x) = 4.2。",
      "0.8x = 3.2，x = 4 L。"
    ],
    "commonMistake": "把 84% 當成 84 L，或忘記 20% 果汁裡只有 0.2y L 是純果汁。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量"
  },
  {
    "questionId": "u04-s013-v005",
    "skillId": "system-mixture-basic",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "30% 鹽水 x mL 與 50% 鹽水 y mL 混合成 200 mL、濃度 40% 的鹽水。求 30% 鹽水的體積 x。",
    "choices": [
      "100 mL",
      "80 mL",
      "120 mL",
      "60 mL"
    ],
    "answerIndex": 0,
    "explanation": "鹽水混合列 x + y = 200 與 0.3x + 0.5y = 80（40% × 200）。以 y = 200 − x 代入得 0.3x + 100 − 0.5x = 80，移項 −0.2x = −20，所以 30% 鹽水 x = 100 mL。選 80 mL 則溶質只有 72 g；選 120 mL 則混合濃度超過 40%。回代 x = 100、y = 100 時溶質 30 + 50 = 80 g，濃度為 40%。請再核對一次計算與題意。",
    "steps": [
      "總量 x + y = 200 mL。",
      "溶質 0.3x + 0.5y = 80 g。",
      "解聯立得 x = 100 mL。"
    ],
    "commonMistake": "把 30% 與 50% 直接平均成 40%，忽略兩種鹽水的量必須各別計算。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量"
  },
  {
    "questionId": "u04-s013-v006",
    "skillId": "system-mixture-basic",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "紅豆 x kg、綠豆 y kg 共 20 kg，紅豆 40 元/kg、綠豆 30 元/kg，總價 680 元。列式 40x + 30y = 680 且 x + y = 20，求紅豆 x。",
    "choices": [
      "10 kg",
      "8 kg",
      "12 kg",
      "6 kg"
    ],
    "answerIndex": 1,
    "explanation": "紅豆綠豆混合列 x + y = 20 與 40x + 30y = 680。以 y = 20 − x 代入得 40x + 600 − 30x = 680，移項 10x = 80，所以紅豆 x = 8 kg。選 10 kg 則總價 700 元超過 680 元；選 12 kg 則超過 20 kg 總重。回代 x = 8、y = 12 時總價 320 + 360 = 680 元，總重 20 kg 也成立。",
    "steps": [
      "總重量 x + y = 20 kg。",
      "總價 40x + 30y = 680 元。",
      "解聯立得 x = 8 kg。"
    ],
    "commonMistake": "680 ÷ 20 = 34 就當均價，卻沒有再分紅豆、綠豆各多少 kg。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量"
  },
  {
    "questionId": "u04-s013-v007",
    "skillId": "system-mixture-basic",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "10% 糖漿 100 g 中加入純糖 x g，混合後總重 150 g、濃度 20%。求加入的純糖 x。",
    "choices": [
      "20 g",
      "15 g",
      "25 g",
      "10 g"
    ],
    "answerIndex": 2,
    "explanation": "原有 10% 糖漿 100 g 含糖 10 g。混合後 150 g、20% 需糖 30 g，故加入純糖 x = 30 − 10 = 25 g。也可列 10 + x = 0.2 × 150 驗算。選 15 g 只使糖量 25 g 不足 30 g；選 20 g 則濃度約 18.7% 不到 20%。回代加入 25 g 純糖後總重 150 g、含糖 30 g，濃度確為 20%。",
    "steps": [
      "10% 糖漿 100 g 含糖 10 g。",
      "150 g、20% 需糖 30 g。",
      "加入純糖 x = 30 − 10 = 25 g。"
    ],
    "commonMistake": "把 20% 直接乘 100 g 而非混合後的 150 g，誤以為只需加 10 g。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量"
  },
  {
    "questionId": "u04-s013-v008",
    "skillId": "system-mixture-basic",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "25% 鹽水 x mL 與 45% 鹽水 y mL 混合成 500 mL、濃度 35% 的鹽水。求 45% 鹽水的體積 y。",
    "choices": [
      "200 mL",
      "300 mL",
      "150 mL",
      "250 mL"
    ],
    "answerIndex": 3,
    "explanation": "混合列 x + y = 500 與 0.25x + 0.45y = 175（35% × 500）。以 x = 500 − y 代入得 125 + 0.2y = 175，0.2y = 50，所以 45% 鹽水 y = 250 mL。選 150 mL 則溶質不足 175 g；選 200 mL 則混合濃度約 33% 不到 35%。回代 y = 250 時溶質 62.5 + 112.5 = 175 g，混合濃度為 35%。請再核對一次計算與題意。",
    "steps": [
      "總量 x + y = 500 mL。",
      "溶質 0.25x + 0.45y = 175 g。",
      "解得 y = 250 mL。"
    ],
    "commonMistake": "濃度差 10% 就猜各半 250 mL，卻沒有驗溶質是否為 175 g。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量"
  },
  {
    "questionId": "u04-s013-v009",
    "skillId": "system-mixture-basic",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "銅 x kg、鋅 y kg 共 12 kg，銅每 kg 200 元、鋅每 kg 80 元，總價 1680 元。列式 200x + 80y = 1680 且 x + y = 12，求銅 x。",
    "choices": [
      "6 kg",
      "8 kg",
      "4 kg",
      "10 kg"
    ],
    "answerIndex": 0,
    "explanation": "銅鋅混合列 x + y = 12 與 200x + 80y = 1680。以 y = 12 − x 代入得 200x + 960 − 80x = 1680，移項 120x = 720，所以銅 x = 6 kg。選 8 kg 則總價 1920 元超過 1680 元；選 4 kg 則總價只有 1440 元。回代 x = 6、y = 6 時總價 1200 + 480 = 1680 元，總重 12 kg 成立。",
    "steps": [
      "總重量 x + y = 12 kg。",
      "總價 200x + 80y = 1680 元。",
      "解聯立得 x = 6 kg。"
    ],
    "commonMistake": "1680 ÷ 12 = 140 當均價後就不再列兩式，無法分出銅、鋅各幾 kg。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量"
  },
  {
    "questionId": "u04-s013-v010",
    "skillId": "system-mixture-basic",
    "topicId": "u04-system-apps",
    "difficulty": "advanced",
    "text": "40% 鹽水 x mL 與 60% 鹽水 y mL 混合成 500 mL、濃度 48% 的鹽水。求 40% 鹽水的體積 x。",
    "choices": [
      "250 mL",
      "300 mL",
      "200 mL",
      "350 mL"
    ],
    "answerIndex": 1,
    "explanation": "混合問題列 x + y = 500 與 0.4x + 0.6y = 240（48% × 500）。以 y = 500 − x 代入得 0.4x + 300 − 0.6x = 240，移項 −0.2x = −60，所以 40% 鹽水 x = 300 mL。選 250 mL 則混合濃度約 46%；選 200 mL 則濃度只有 44%。回代 x = 300、y = 200 時溶質 120 + 120 = 240 g，混合濃度為 48%。請再核對一次計算與題意。",
    "steps": [
      "總量 x + y = 500 mL。",
      "溶質 0.4x + 0.6y = 240 g。",
      "解聯立得 x = 300 mL。"
    ],
    "commonMistake": "48% 剛好在 40% 與 60% 中間，就猜 x = y = 250 mL，沒有驗算溶質。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量"
  },
  {
    "questionId": "u04-s013-v011",
    "skillId": "system-mixture-basic",
    "topicId": "u04-system-apps",
    "difficulty": "advanced",
    "text": "A 料 50 元/kg、B 料 70 元/kg 混合 8 kg，總價 460 元（均價 57.5 元/kg）。求 B 料重量 y。",
    "choices": [
      "4 kg",
      "5 kg",
      "3 kg",
      "2 kg"
    ],
    "answerIndex": 2,
    "explanation": "A、B 料混合列 x + y = 8 與 50x + 70y = 460。以 x = 8 − y 代入得 400 + 20y = 460，20y = 60，所以 B 料 y = 3 kg。選 4 kg 則總價 480 元超過 460 元；選 5 kg 則超過 8 kg 總重。回代 y = 3、x = 5 時總價 250 + 210 = 460 元，總重 8 kg 也吻合。請再核對一次計算與題意。",
    "steps": [
      "總重量 x + y = 8 kg。",
      "總價 50x + 70y = 460 元。",
      "解聯立得 y = 3 kg。"
    ],
    "commonMistake": "均價 57.5 與 50、70 的距離不同，不能憑感覺猜 4 kg 或 4.5 kg。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量"
  },
  {
    "questionId": "u04-s013-v012",
    "skillId": "system-mixture-basic",
    "topicId": "u04-system-apps",
    "difficulty": "literacy",
    "text": "手作飲料店要調 400 mL、濃度 22% 的果茶，已有 30% 與 10% 兩種茶底。需取 30% 茶底多少 mL？",
    "choices": [
      "160 mL",
      "200 mL",
      "180 mL",
      "240 mL"
    ],
    "answerIndex": 3,
    "explanation": "設 30% 茶底取 x mL、10% 取 (400 − x) mL。溶質守恆 0.3x + 0.1(400 − x) = 88（22% × 400），化簡 0.2x = 48，所以 x = 240 mL。選 160 mL 則混合濃度只有 18%；選 200 mL 則濃度 20% 仍不足 22%。回代 240 mL 的 30% 與 160 mL 的 10% 混合，溶質 72 + 16 = 88 g，濃度 22%。請再核對一次計算與題意。",
    "steps": [
      "總量 x + (400 − x) = 400 mL。",
      "溶質 0.3x + 0.1(400 − x) = 88 g。",
      "0.2x = 48，x = 240 mL 的 30% 茶底。"
    ],
    "commonMistake": "22% 接近 30% 與 10% 的平均，就各取 200 mL，沒有驗混合濃度。",
    "concept": "混合題：總量 x+y=混合量，溶質 0.4x+0.2y=目標量；只做會考基本濃度或均價，濃度要乘溶液量"
  },
  {
    "questionId": "u04-s014-v001",
    "skillId": "system-literacy-context",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "某自助餐葷菜每份 x 元、素菜每份 y 元。小陳買 20 葷 15 素共 1150 元，小玲買 25 葷 10 素共 1350 元。求葷菜單價 x。",
    "choices": [
      "50",
      "45",
      "55",
      "40"
    ],
    "answerIndex": 0,
    "explanation": "列 20x + 15y = 1150 與 25x + 10y = 1350。第一式 ×2 減第二式：15x = 950，x = 50 元。選 45 無法同時滿足兩筆消費；選 55 則第一筆金額超過 1150 元。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "設葷 x 元、素 y 元，列 20x + 15y = 1150。",
      "第二筆 25x + 10y = 1350。",
      "消去 y 解得 x = 50 元。"
    ],
    "commonMistake": "1150 ÷ 35 ≈ 33 就當平均單價，沒有把葷、素分開列兩式。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解"
  },
  {
    "questionId": "u04-s014-v002",
    "skillId": "system-literacy-context",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "租車方案：前 2 小時固定 x 元，之後每小時 y 元。租 3 小時 150 元、租 4 小時 230 元。求前 2 小時費用 x。",
    "choices": [
      "60",
      "70",
      "80",
      "50"
    ],
    "answerIndex": 1,
    "explanation": "3 小時 = x + y = 150；4 小時 = x + 2y = 230。相減得 y = 80，回代 x = 70 元。選 60 則 3 小時只要 140 元；選 80 則 4 小時變成 240 元。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "前 2 小時 x 元，第 3 小時起每小時 y 元。",
      "租 3 小時：x + y = 150；租 4 小時：x + 2y = 230。",
      "相減得 y = 80，x = 70 元。"
    ],
    "commonMistake": "把 4 小時誤寫成 x + 4y，多算一個前 2 小時以外的時數。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解"
  },
  {
    "questionId": "u04-s014-v003",
    "skillId": "system-literacy-context",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "電信方案 A 月租 x 元、通話每分鐘 y 元；方案 B 月租 (x + 100) 元、通話每分鐘 (y − 2) 元。若通話 30 分鐘兩方案總價相同，應列哪一式？",
    "choices": [
      "x = y",
      "30x = 30y",
      "x + 30y = x + 100 + 30(y − 2)",
      "x + y = 100"
    ],
    "answerIndex": 2,
    "explanation": "A 方案 30 分鐘總價 x + 30y；B 方案 x + 100 + 30(y − 2)。兩者相等即 x + 30y = x + 100 + 30(y − 2)。x = y 忽略月租差 100 元；x + y = 100 則通話費完全沒列入。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "A 方案：月租 x 加 30 分鐘通話費 30y。",
      "B 方案：月租 x + 100 加 30 分鐘通話費 30(y − 2)。",
      "總價相同：x + 30y = x + 100 + 30(y − 2)。"
    ],
    "commonMistake": "只看通話單價差 2 元，忘記 B 方案月租多 100 元也要寫進式子。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解"
  },
  {
    "questionId": "u04-s014-v004",
    "skillId": "system-literacy-context",
    "topicId": "u04-system-apps",
    "difficulty": "basic",
    "text": "文具店：2 支筆 3 本筆記本共 88 元，4 支筆 1 本筆記本共 96 元。設每支筆 x 元，求 x。",
    "choices": [
      "18",
      "22",
      "16",
      "20"
    ],
    "answerIndex": 3,
    "explanation": "列 2x + 3y = 88 與 4x + y = 96。由第二式 y = 96 − 4x，以第一式 2x + 288 − 12x = 88，x = 20 元。選 18 則第二筆只有 90 元；選 22 超過 96 元。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "設筆 x 元、筆記本 y 元。",
      "列 2x + 3y = 88 與 4x + y = 96。",
      "解聯立得 x = 20 元。"
    ],
    "commonMistake": "88 + 96 直接除以 6 當平均，沒有區分筆與筆記本的數量。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解"
  },
  {
    "questionId": "u04-s014-v005",
    "skillId": "system-literacy-context",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "游泳課會員每次 x 元、非會員每次 y 元。5 次會員加 3 次非會員共 520 元，3 次會員加 5 次非會員共 440 元。求會員單次 x。",
    "choices": [
      "80",
      "70",
      "90",
      "60"
    ],
    "answerIndex": 0,
    "explanation": "游泳課列 5x + 3y = 520 與 3x + 5y = 440。兩式相加得 8x + 8y = 960，即 x + y = 120。代回第一式 5x + 360 − 3x = 520，2x = 160，所以會員單次 x = 80 元。選 70 則第一筆只有 490 元不足 520 元。回代 x = 80、y = 40 時兩筆消費 520 元與 440 元都成立。",
    "steps": [
      "會員 x 元、非會員 y 元。",
      "列 5x + 3y = 520 與 3x + 5y = 440。",
      "解聯立得 x = 80 元。"
    ],
    "commonMistake": "520 − 440 = 80 就當會員與非會員差價，忽略兩筆購買次數組合不同。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解"
  },
  {
    "questionId": "u04-s014-v006",
    "skillId": "system-literacy-context",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "停車場：前 1 小時 x 元，之後每小時 y 元。停 4 小時 200 元、停 6 小時 280 元。求首小時費用 x。",
    "choices": [
      "60",
      "80",
      "100",
      "40"
    ],
    "answerIndex": 1,
    "explanation": "停車首小時 x 元、之後每小時 y 元。停 4 小時列 x + 3y = 200；停 6 小時列 x + 5y = 280。兩式相減 2y = 80，y = 40，回代 x = 80 元。選 60 則 4 小時只要 180 元不足 200 元；選 100 則 6 小時超過 280 元。回代 x = 80、y = 40 時兩種停車時間的總價都符合題意。",
    "steps": [
      "首小時 x 元，第 2 小時起每小時 y 元。",
      "4 小時：x + 3y = 200；6 小時：x + 5y = 280。",
      "相減得 y = 40，x = 80 元。"
    ],
    "commonMistake": "280 ÷ 6 ≈ 47 當平均時薪，沒有考慮首小時計費方式不同。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解"
  },
  {
    "questionId": "u04-s014-v007",
    "skillId": "system-literacy-context",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "某旅館平日房 x 元、假日房 y 元。平 3 日假 2 日共 1700 元，平 2 日假 3 日共 1800 元。求平日房價 x。",
    "choices": [
      "350",
      "450",
      "400",
      "300"
    ],
    "answerIndex": 2,
    "explanation": "住宿費問題中，列 3x + 2y = 1700 與 2x + 3y = 1800。第一式 ×3 減第二式 ×2：5x = 5100，x = 400 元。選 350 則第一組只有 1650 元；選 450 則第二組超過 1800 元。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "平日 x 元、假日 y 元。",
      "列 3x + 2y = 1700 與 2x + 3y = 1800。",
      "消去 y 解得 x = 400 元。"
    ],
    "commonMistake": "1700 與 1800 差 100 就猜 x 比 y 少 100，沒有完整列式。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解"
  },
  {
    "questionId": "u04-s014-v008",
    "skillId": "system-literacy-context",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "早餐店蛋餅每份 x 元、飯糰每個 y 元。買 3 蛋餅 2 飯糰 110 元，買 2 蛋餅 4 飯糰 100 元。求蛋餅 x。",
    "choices": [
      "25",
      "35",
      "20",
      "30"
    ],
    "answerIndex": 3,
    "explanation": "早餐選購時，列 3x + 2y = 110 與 2x + 4y = 100。第一式 ×2 減第二式：4x = 120，x = 30 元。選 25 則第一筆只有 95 元；選 35 則第二筆超過 100 元。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "蛋餅 x 元、飯糰 y 元。",
      "列 3x + 2y = 110 與 2x + 4y = 100。",
      "解聯立得 x = 30 元。"
    ],
    "commonMistake": "110 − 100 = 10 就當 1 蛋餅比 2 飯糰貴 10 元，沒有把數量差寫清楚。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解"
  },
  {
    "questionId": "u04-s014-v009",
    "skillId": "system-literacy-context",
    "topicId": "u04-system-apps",
    "difficulty": "standard",
    "text": "夏令營小班 x 人、大班 y 人。2 個小班 1 個大班共 70 人，1 個小班 3 個大班共 95 人。求小班人數 x。",
    "choices": [
      "25",
      "20",
      "30",
      "35"
    ],
    "answerIndex": 0,
    "explanation": "列 2x + y = 70 與 x + 3y = 95。第一式 ×3 減第二式：5x = 125，x = 25 人。選 20 則第一組只有 65 人；選 30 則第二組超過 95 人。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "小班 x 人、大班 y 人。",
      "列 2x + y = 70 與 x + 3y = 95。",
      "消去 y 解得 x = 25 人。"
    ],
    "commonMistake": "70 與 95 相減得 25 就當 x，碰巧對卻說不出為什麼是 2 個小班與 1 個大班的差。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解"
  },
  {
    "questionId": "u04-s014-v010",
    "skillId": "system-literacy-context",
    "topicId": "u04-system-apps",
    "difficulty": "advanced",
    "text": "學校社團活動：A 活動每次 x 點、B 活動每次 y 點。完成 3A + 2B 得 17 點，2A + 4B 得 22 點。求 A 活動 x。",
    "choices": [
      "4",
      "3",
      "5",
      "2"
    ],
    "answerIndex": 1,
    "explanation": "園遊活動得分題中，列 3x + 2y = 17 與 2x + 4y = 22。第一式 ×2 減第二式：4x = 12，x = 3 點。選 4 則第一組超過 17 點；選 2 則第二組只有 18 點。 完成計算後可代回題目條件再確認一次。",
    "steps": [
      "A 活動 x 點、B 活動 y 點。",
      "列 3x + 2y = 17 與 2x + 4y = 22。",
      "消去 y 解得 x = 3 點。"
    ],
    "commonMistake": "17 + 22 = 39 除以 5 當平均點數，沒有把 A、B 活動次數分開。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解"
  },
  {
    "questionId": "u04-s014-v011",
    "skillId": "system-literacy-context",
    "topicId": "u04-system-apps",
    "difficulty": "advanced",
    "text": "服飾店 S 號 x 件、L 號 y 件共 50 件，S 號每件 120 元、L 號每件 180 元，總價 7500 元。求 S 號件數 x。",
    "choices": [
      "20",
      "30",
      "25",
      "35"
    ],
    "answerIndex": 2,
    "explanation": "服飾店列 x + y = 50 與 120x + 180y = 7500。以 y = 50 − x 代入得 120x + 9000 − 180x = 7500，移項 −60x = −1500，所以 S 號 x = 25 件。選 20 件則總價 7800 元超過 7500 元；選 30 件則總價只有 7200 元。回代 x = 25、y = 25 時總價 3000 + 4500 = 7500 元，件數 50 件也對。",
    "steps": [
      "S 號 x 件、L 號 y 件，x + y = 50。",
      "總價 120x + 180y = 7500 元。",
      "解聯立得 x = 25 件。"
    ],
    "commonMistake": "7500 ÷ 50 = 150 當平均單價後就不再列兩式，無法分出 S、L 各幾件。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解"
  },
  {
    "questionId": "u04-s014-v012",
    "skillId": "system-literacy-context",
    "topicId": "u04-system-apps",
    "difficulty": "literacy",
    "text": "園遊會飲料每杯 x 元、點心每份 y 元。班 A 賣 40 杯飲 30 份點心收 3500 元，班 B 賣 30 杯飲 40 份點心收 3400 元。求飲料 x。",
    "choices": [
      "45",
      "55",
      "40",
      "50"
    ],
    "answerIndex": 3,
    "explanation": "園遊會列 40x + 30y = 3500 與 30x + 40y = 3400。第一式 ×4 減第二式 ×3 得 70x = 3500，所以飲料 x = 50 元。選 45 則班 A 只有 3350 元不足 3500 元；選 55 則班 B 超過 3400 元。回代 x = 50、y = 30 時班 A 收 3500 元、班 B 收 3400 元，兩式同時成立。",
    "steps": [
      "飲料 x 元、點心 y 元。",
      "列 40x + 30y = 3500 與 30x + 40y = 3400。",
      "消去 y 解得 x = 50 元。"
    ],
    "commonMistake": "3500 與 3400 差 100 就猜 x 比 y 多 10 元，沒有考慮兩班銷量組合不同。",
    "concept": "素養題從生活表格或情境提取兩個獨立數量關係，仍列二元一次聯立方程式求解"
  }
];

export const U04_LECTURES_S012_S014 = [
  {
    "skillId": "system-rate-problem",
    "topicId": "u04-system-apps",
    "title": "速率與行程問題",
    "concept": "行程應用題的核心是路程等於速率乘時間。分段行走時，各段 s = vt 相加才是總路程；兩車相向時合速率相加，同向追及時用速率差。順流加水速、逆流減水速。列聯立式前，先統一 km 與 h 的單位，並確認題目問的是列式還是求值。",
    "formula": "s = vt；總路程 = 各段路程和；相向 (v₁ + v₂)t；同向 |v₁ − v₂|t",
    "stepGuide": [
      "讀題判斷是分段、相向、同向或順逆流",
      "設未知速率或時間，標明各段對應的 t",
      "依 s = vt 列各段路程並加總或求差",
      "必要時再列第二式（如速率和、路程相等）",
      "解聯立後檢查單位與題意（km/h 配 h）"
    ],
    "examples": [
      {
        "question": "甲、乙從相距 120 km 的兩地相向開車，甲 50 km/h、乙 70 km/h，幾小時後相遇？",
        "explanation": "相向時每小時兩車共走 50 + 70 = 120 km，恰好 1 小時走完全程。不要只用 120 ÷ 50 算甲車單獨的時間，乙車也在同時前進，必須用合速率 120 km/h 去除以距離。"
      },
      {
        "question": "靜水速率 12 km/h、水流 3 km/h，順流走 2 小時共走多遠？",
        "explanation": "順流速率 12 + 3 = 15 km/h，2 小時走 15 × 2 = 30 km。逆流才用 12 − 3，順流一定要把兩速率相加；若誤用 12 − 3 當順流，2 小時路程會少算 6 km，這是順逆流最容易搞反的地方。"
      }
    ],
    "commonMistakes": [
      "時間用分鐘、速率用 km/h 卻沒換算",
      "相向問題誤用速率相減",
      "同向追及卻把兩車路程相加",
      "求路程差時漏乘時間 t"
    ]
  },
  {
    "skillId": "system-mixture-basic",
    "topicId": "u04-system-apps",
    "title": "基礎混合問題",
    "concept": "國中混合題靠兩條守恆律：總量守恆（x + y = 混合量）與溶質或總價守恆。濃度 30% 的 200 g 含糖 0.3 × 200 g，不可把 30 直接相加。均價問題則用單價乘重量求總價。會考只做二元一次聯立，不做高中交叉法。解題後要檢查單位與未知數的意義是否與題目一致。",
    "formula": "x + y = 總量；c₁x + c₂y = 混合後溶質（或總價）",
    "stepGuide": [
      "設兩種來源的量 x、y，標明單位（g、mL、kg）",
      "列總量守恆 x + y = 混合後總量",
      "把濃度化成小數，列溶質守恆（或總價守恆）",
      "解聯立方程式",
      "檢查 x、y 是否為非負且符合題意"
    ],
    "examples": [
      {
        "question": "20% 鹽水 100 g 與 50% 鹽水混合成 300 g、濃度 25%，需取 50% 鹽水多少 g？",
        "explanation": "混合題先算目標鹽量，再扣掉已有低濃度鹽水的溶質，剩下溶質除以高濃度百分比，就得到要加入的溶液重量。本例需 75 g 鹽、已有 20 g，缺 55 g，故取 110 g 的 50% 鹽水，總量 300 g 才會是 25% 濃度。"
      },
      {
        "question": "30 元/kg 的 A 米 4 kg 與 50 元/kg 的 B 米混合 10 kg，求均價。",
        "explanation": "A 米 120 元，還需 B 米 6 kg 湊滿 10 kg。B 米 300 元，總價 420 元，均價 42 元/kg。均價不是 (30 + 50) ÷ 2，要看兩種米各幾 kg，這就是總價守恆列聯立的典型用法。"
      }
    ],
    "commonMistakes": [
      "濃度百分比未乘溶液量",
      "只列總量式、漏列溶質式",
      "把兩濃度直接平均",
      "解出負的重量仍當答案"
    ]
  },
  {
    "skillId": "system-literacy-context",
    "topicId": "u04-system-apps",
    "title": "聯立方程式素養題",
    "concept": "素養題文字較長，但解法仍是設兩個未知數、找兩條獨立關係、列二元一次聯立。表格資料要對準列與欄；租車、電信、停車等分段計費，須把「前幾小時固定費」與「之後每單位費用」分開寫。解完後回頭看題目問的是哪一個未知數，並檢查答案是否合理。",
    "formula": "依情境列兩式 → 加減消去或帶入 → 回應題意",
    "stepGuide": [
      "讀懂情境，設 x、y 並寫清代表什麼",
      "從第一段敘述或表格列第一式",
      "從第二段獨立資料列第二式",
      "解聯立方程式",
      "依題意寫出所求未知數並檢查合理性"
    ],
    "examples": [
      {
        "question": "電影票：成人 a 元、學生 s 元。某班 8 成人 12 學生共 920 元，另一班 10 成人 10 學生共 900 元。如何求 a？",
        "explanation": "列 8a + 12s = 920 與 10a + 10s = 900。兩式都含 a、s，可消去 s 求 a。不要只用 920 ÷ 20 當平均票價，成人與學生票價不同，必須分開列兩個未知數再解聯立。"
      },
      {
        "question": "某方案前 10 通免費，之後每通 2 元；另一方案每通 1.5 元。通話 20 通時兩方案同價，如何列式？",
        "explanation": "第一方案 20 通費用 10 × 2 = 20 元（前 10 通免費）；第二方案 20 × 1.5 = 30 元。兩方案不同價時不能硬列相等式，這題示範的是先把各段費用分段算清楚再比較。"
      }
    ],
    "commonMistakes": [
      "只讀表格一行就急著列式",
      "兩式其實相同、無法解",
      "分段計費時超時時數算錯",
      "解完 x 卻回答 y"
    ]
  }
];
