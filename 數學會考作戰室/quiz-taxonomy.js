window.QUIZ_TAXONOMY = {
  "g7-1-c1": {
    source: "使用者提供：翰林大滿貫數學複習講義分類；公開網頁僅能查證書籍存在與章節層級，未公開完整題型表。",
    sections: [
      {
        title: "正負數、數線與絕對值",
        topics: [
          {
            id: "signed-number-concept",
            title: "正負數的概念",
            template({ r, ri, mc }) {
              const n = ri(r, 3, 18);
              return mc(r, 1, 1, `某地氣溫比 0°C 低 ${n}°C，若用正負數表示，應記為何者？`, `-${n}°C`, [`+${n}°C`, "0°C", `${n * 2}°C`], [`「低於 0」要用負數表示。`, `比 0°C 低 ${n}°C，就是 0-${n}=-${n}，所以記為 -${n}°C。`], "正數表示高於基準，負數表示低於基準。", "不要只看到「低」就把數字變小；重點是方向要用負號。")
            }
          },
          {
            id: "opposite-number-concept",
            title: "相反數的概念",
            template({ r, ri, mc }) {
              const n = ri(r, 4, 24);
              return mc(r, 1, 1, `${-n} 的相反數是多少？`, n, [-n, 0, n + 1], [`相反數是在數線上到 0 距離相同、方向相反的數。`, `${-n} 的相反數是 ${n}。`], "a 的相反數是 -a。", "相反數不是倒數，也不是絕對值；它只改變方向。")
            }
          },
          {
            id: "absolute-value-concept",
            title: "絕對值的概念",
            template({ r, ri, mc }) {
              const n = ri(r, 3, 20);
              return mc(r, 1, 1, `數線上代表 ${-n} 的點到原點的距離是多少？`, n, [-n, 0, n * 2], [`絕對值表示數線上到原點的距離。`, `距離不會是負的，所以 |${-n}|=${n}。`], "絕對值是距離，因此結果一定大於或等於 0。", "不要把 |−a| 寫成 −a；絕對值符號會把距離轉成非負數。")
            }
          },
          {
            id: "opposite-and-absolute-evaluation",
            title: "相反數與絕對值的求值",
            template({ r, ri, mc }) {
              const a = ri(r, 3, 12), b = ri(r, 2, 10);
              const ans = a + b;
              return mc(r, 1, 2, `計算 -(${-a}) + |${-b}| 的值。`, ans, [a - b, -a + b, -ans], [`-(${-a}) 是 ${-a} 的相反數，所以等於 ${a}。`, `|${-b}|=${b}，因此 ${a}+${b}=${ans}。`], "先處理相反數與絕對值，再做加減。", "外面的負號和絕對值符號功能不同，不能混在一起看。")
            }
          },
          {
            id: "absolute-value-position",
            title: "絕對值與數線上點的位置",
            template({ r, ri, mc }) {
              const d = ri(r, 2, 14);
              return mc(r, 1, 2, `若數線上一點 P 到原點的距離為 ${d}，則 P 可能代表哪些數？`, `${-d} 或 ${d}`, [`只有 ${d}`, `只有 ${-d}`, `${-d} 或 0`], [`到原點距離為 ${d}，表示 |x|=${d}。`, `數線上左右兩邊各有一點，所以 x=${-d} 或 ${d}。`], "|x|=d 表示 x 到 0 的距離是 d，通常有左右兩個位置。", "題目問距離，不是方向；除非題目指定在原點右側或左側。")
            }
          }
        ]
      },
      {
        title: "數的四則運算與數線上兩點間的距離",
        topics: [
          {
            id: "integer-arithmetic",
            title: "數的四則運算",
            template({ r, ri, mc }) {
              const a = ri(r, 4, 16), b = ri(r, 2, 9), c = ri(r, 2, 6);
              const ans = -a + b * c;
              return mc(r, 1, 2, `計算 ${-a} + ${b} × ${c} 的值。`, ans, [-a + b + c, a + b * c, -a - b * c], [`先乘除後加減：${b}×${c}=${b * c}。`, `${-a}+${b * c}=${ans}。`], "四則運算先乘除、後加減。", "不要從左到右直接算成 (-a+b)×c。")
            }
          },
          {
            id: "distributive-law",
            title: "分配律的運用",
            template({ r, ri, mc }) {
              const k = ri(r, 2, 8), a = ri(r, 5, 14), b = ri(r, 1, 5);
              const ans = k * (a - b);
              return mc(r, 1, 2, `利用分配律計算 ${k}×(${a}-${b}) 的值。`, ans, [k * a - b, k + a - b, k * (a + b)], [`分配律：${k}×(${a}-${b})=${k}×${a}-${k}×${b}。`, `${k * a}-${k * b}=${ans}。`], "a(b-c)=ab-ac。", "分配時括號內每一項都要乘到，不是只乘第一項。")
            }
          },
          {
            id: "commutative-associative-law",
            title: "交換律、結合律的應用",
            template({ r, ri, mc }) {
              const a = ri(r, 3, 15), b = ri(r, 4, 18), c = ri(r, 2, 12);
              const ans = b + c;
              return mc(r, 1, 2, `計算 ${-a} + ${b} + ${a} + ${c} 的值。`, ans, [b - c, a + b + c, -a + b + c], [`利用交換律與結合律，把 ${-a} 和 ${a} 先配對。`, `${-a}+${a}=0，所以原式=${b}+${c}=${ans}。`], "加法可以交換、結合，先湊相反數常可簡化。", "看到四個數不要急著照順序算，先找能湊 0 的一對。")
            }
          },
          {
            id: "operation-order",
            title: "依運算規則求值",
            template({ r, ri, mc }) {
              const a = ri(r, 4, 12), b = ri(r, 2, 5), c = ri(r, 3, 8), d = ri(r, 1, 6);
              const ans = a - b * c + d;
              return mc(r, 1, 2, `計算 ${a} - ${b} × ${c} + ${d} 的值。`, ans, [(a - b) * c + d, a - b * (c + d), a + b * c + d], [`先算乘法：${b}×${c}=${b * c}。`, `${a}-${b * c}+${d}=${ans}。`], "有括號先括號；沒有括號時先乘除後加減。", "減號後面接乘法時，不要把前面的減法先算掉。")
            }
          },
          {
            id: "absolute-difference-distance",
            title: "｜a-b｜幾何意義的應用",
            template({ r, ri, mc }) {
              const a = -ri(r, 2, 12), b = ri(r, 3, 15);
              const ans = Math.abs(a - b);
              return mc(r, 1, 2, `數線上 A(${a})、B(${b})，線段 AB 的長度是多少？`, ans, [Math.abs(a) + Math.abs(b) + 1, b - Math.abs(a), Math.abs(a + b)], [`數線上兩點距離為 |a-b|。`, `AB=|${a}-${b}|=|${a - b}|=${ans}。`], "數線上兩點 a、b 的距離是 |a-b|。", "距離一定非負；不要把 a-b 的負值直接當答案。")
            }
          },
          {
            id: "arithmetic-application",
            title: "四則運算的應用",
            template({ r, ri, mc }) {
              const start = ri(r, 5, 18), down = ri(r, 7, 20), up = ri(r, 3, 12);
              const ans = start - down + up;
              return mc(r, 1, 2, `某電梯原在 ${start} 樓，先下降 ${down} 層，再上升 ${up} 層，最後在第幾樓？`, ans, [start + down + up, start - down - up, down - start + up], [`下降記為減，上升記為加。`, `${start}-${down}+${up}=${ans}。`], "把情境中的方向轉成正負號，再依序運算。", "不要只把所有數字相加；下降代表負向改變。")
            }
          }
        ]
      },
      {
        title: "指數記法、指數律與科學記號",
        topics: [
          {
            id: "exponent-arithmetic",
            title: "含有指數的四則運算",
            template({ r, ri, mc }) {
              const a = ri(r, 2, 5), b = ri(r, 2, 4);
              const ans = a ** 2 - b ** 3;
              return mc(r, 2, 2, `計算 ${a}^2 - ${b}^3 的值。`, ans, [a * 2 - b * 3, a ** 2 + b ** 3, a ** 3 - b ** 2], [`先算指數：${a}^2=${a ** 2}，${b}^3=${b ** 3}。`, `${a ** 2}-${b ** 3}=${ans}。`], "指數要先算，再處理乘除與加減。", "a^2 不是 2a；b^3 不是 3b。")
            }
          },
          {
            id: "exponent-law-calculation",
            title: "利用指數律做計算",
            template({ r, ri, mc }) {
              const base = ri(r, 2, 5), m = ri(r, 3, 6), n = ri(r, 2, 5), k = ri(r, 1, Math.min(m, n));
              const exp = m + n - k;
              return mc(r, 2, 2, `${base}^${m} × ${base}^${n} ÷ ${base}^${k} 可化為何者？`, `${base}^${exp}`, [`${base}^${m + n + k}`, `${base}^${m * n - k}`, `${base}^${m + n}`], [`同底數相乘指數相加，同底數相除指數相減。`, `${base}^${m}×${base}^${n}÷${base}^${k}=${base}^(${m}+${n}-${k})=${base}^${exp}。`], "同底數：乘法加指數，除法減指數。", "不要把底數相乘，也不要把指數相乘。")
            }
          },
          {
            id: "exponent-size-comparison",
            title: "利用指數律比較數的大小",
            template({ r, ri, mc }) {
              const a = ri(r, 3, 6), leftExp = ri(r, 2, 4), rightExp = leftExp + ri(r, 1, 3);
              return mc(r, 2, 2, `比較 ${a}^${leftExp} 與 ${a}^${rightExp} 的大小。`, `${a}^${leftExp} < ${a}^${rightExp}`, [`${a}^${leftExp} > ${a}^${rightExp}`, `${a}^${leftExp} = ${a}^${rightExp}`, `無法比較`], [`底數 ${a}>1，指數越大，值越大。`, `因為 ${leftExp}<${rightExp}，所以 ${a}^${leftExp}<${a}^${rightExp}。`], "底數大於 1 時，同底數比大小可直接比較指數。", "這個規則不適用於底數為 0、1 或負數的所有情況；本題底數大於 1。")
            }
          },
          {
            id: "scientific-notation",
            title: "科學記號表示法",
            template({ r, ri, mc }) {
              const coef = ri(r, 12, 98) / 10, exp = ri(r, 3, 6);
              const normal = Math.round(coef * 10 ** exp);
              const correct = `${coef}×10^${exp}`;
              return mc(r, 2, 2, `${normal.toLocaleString("zh-TW")} 用科學記號表示為何？`, correct, [`${coef}×10^${exp + 1}`, `${coef * 10}×10^${exp - 1}`, `${coef}×10^${exp - 1}`], [`科學記號需寫成 a×10^n，其中 1≤a<10。`, `${normal.toLocaleString("zh-TW")} 的小數點左移 ${exp} 位，得到 ${coef}，所以是 ${correct}。`], "科學記號的係數必須大於等於 1 且小於 10。", "係數不能寫成 10 以上；例如 35×10^2 不是標準科學記號。")
            }
          },
          {
            id: "scientific-notation-digits",
            title: "科學記號與位數的判別",
            template({ r, ri, mc }) {
              const coef = ri(r, 2, 9), exp = ri(r, 4, 8), digits = exp + 1;
              return mc(r, 2, 2, `${coef}×10^${exp} 是幾位整數？`, `${digits} 位`, [`${exp} 位`, `${digits + 1} 位`, `${coef + exp} 位`], [`a×10^n 且 1≤a<10 時，整數位數是 n+1。`, `所以 ${coef}×10^${exp} 是 ${exp}+1=${digits} 位整數。`], "科學記號 a×10^n 的整數位數為 n+1（n 為非負整數）。", "指數 n 不是位數；位數比 n 多 1。")
            }
          },
          {
            id: "scientific-notation-comparison",
            title: "科學記號與數的比較大小",
            template({ r, ri, mc }) {
              const a = ri(r, 11, 49) / 10, b = ri(r, 51, 99) / 10, exp = ri(r, 3, 6);
              return mc(r, 2, 2, `比較 ${a}×10^${exp} 與 ${b}×10^${exp} 的大小。`, `${a}×10^${exp} < ${b}×10^${exp}`, [`${a}×10^${exp} > ${b}×10^${exp}`, `${a}×10^${exp} = ${b}×10^${exp}`, `無法比較`], [`兩數的 10 的次方相同，只要比較前面的係數。`, `因為 ${a}<${b}，所以 ${a}×10^${exp}<${b}×10^${exp}。`], "科學記號比大小：先比 10 的指數；指數相同時比係數。", "不要把係數和指數混在一起加總比較。")
            }
          }
        ]
      }
    ]
  }
};
