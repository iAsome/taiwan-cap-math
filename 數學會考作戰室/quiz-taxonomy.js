window.QUIZ_TAXONOMY = {
  "g7-1-c1": {
    source: "使用者提供：教育部課綱對照國一上「數與數線」三主題題型表（2026-07 更新）。",
    sections: [
      {
        title: "正負數、數線與絕對值",
        topics: [
          {
            id: "number-classification",
            title: "數的分類",
            template({ r, ri, pick, mc }) {
              const item = pick(r, [
                { q: "下列哪一個數是整數？", correct: "-7", wrong: ["1/2", "0.333…", "√2"] },
                { q: "下列哪一個數是有理數？", correct: "-3/4", wrong: ["π", "√5", "√7"] },
                { q: "下列哪一個數不是有理數？", correct: "√2", wrong: ["-5", "0", "3/8"] }
              ]);
              return mc(r, 1, 1, item.q, item.correct, item.wrong, [`先確認各選項能否寫成 p/q（q≠0）的形式。`, `${item.correct} 符合題目要求的數的分類。`], "整數、分數、有限小數與循環小數都是有理數；無法寫成兩整數比的才是無理數。", "不要把「有小數點」就當成無理數；有限小數仍是有理數。")
            }
          },
          {
            id: "number-line",
            title: "數線",
            template({ r, ri, mc, signed }) {
              const a = -ri(r, 3, 12), b = ri(r, 2, 10);
              return mc(r, 1, 1, `數線上 A 點在原點左側 ${Math.abs(a)} 單位，B 點在原點右側 ${b} 單位，則 A、B 的坐標依序為何？`, `(${signed(a)}, ${b})`, [`(${b}, ${signed(a)})`, `(${Math.abs(a)}, ${-b})`, `(${-b}, ${Math.abs(a)})`], [`原點左側為負，右側為正。`, `A 在左側 ${Math.abs(a)} 單位，坐標為 ${signed(a)}；B 在右側 ${b} 單位，坐標為 ${b}。`], "數線上左負右正；到原點的距離要配合正負方向。", "不要把距離直接當坐標；左側要加負號。")
            }
          },
          {
            id: "opposite-and-absolute-overview",
            title: "相反數與絕對值",
            template({ r, ri, mc, signed }) {
              const n = ri(r, 4, 18);
              return mc(r, 1, 1, `關於 ${signed(-n)}，下列敘述何者正確？`, `其相反數為 ${n}，絕對值為 ${n}`, [`其相反數為 ${signed(-n)}，絕對值為 ${signed(-n)}`, `其相反數為 ${n}，絕對值為 ${signed(-n)}`, `其相反數為 0，絕對值為 0`], [`相反數：到 0 距離相同、方向相反，所以 ${signed(-n)} 的相反數是 ${n}。`, `絕對值：到原點距離，所以 |${signed(-n)}|=${n}。`], "相反數改變正負；絕對值只取到原點的距離。", "絕對值結果不會是負數；相反數可能仍是負數。")
            }
          },
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
            id: "addition-operation",
            title: "加法運算",
            template({ r, ri, mc, signed }) {
              const a = -ri(r, 2, 12), b = ri(r, 1, 15);
              const ans = a + b;
              return mc(r, 1, 1, `計算 ${signed(a)} + ${signed(b)} 的值。`, signed(ans), [signed(a - b), signed(Math.abs(a) + Math.abs(b)), signed(b - a)], [`從 ${signed(a)} 出發，${b >= 0 ? `向右移 ${b} 單位` : `向左移 ${Math.abs(b)} 單位`}。`, `所以 ${signed(a)}+${signed(b)}=${signed(ans)}。`], "數線上加法：正數向右、負數向左。", "異號相加時，結果的絕對值是兩數絕對值的差。")
            }
          },
          {
            id: "subtraction-operation",
            title: "減法運算",
            template({ r, ri, mc, signed }) {
              const a = ri(r, 3, 15), b = -ri(r, 2, 10);
              const ans = a - b;
              return mc(r, 1, 1, `計算 ${a} − (${signed(b)}) 的值。`, signed(ans), [signed(a + b), signed(a - Math.abs(b)), signed(b - a)], [`減一個負數等於加它的相反數：${a}−(${signed(b)})=${a}+${Math.abs(b)}。`, `所以答案為 ${signed(ans)}。`], "a−b = a+(−b)；減負數會變加法。", "不要把減號和負號抵消成 0；−(−b)=+b。")
            }
          },
          {
            id: "multiplication-division-operation",
            title: "乘除運算",
            template({ r, ri, mc, signed }) {
              const a = -ri(r, 2, 9), b = ri(r, 2, 8), c = ri(r, 2, 6);
              const prod = a * b, quot = Math.trunc(prod / c);
              return mc(r, 1, 2, `計算 ${signed(a)} × ${b} ÷ ${c} 的值。`, signed(quot), [signed(a + b - c), signed(a * b * c), signed(Math.abs(a) * b / c)], [`先算乘法：${signed(a)}×${b}=${signed(prod)}。`, `再算除法：${signed(prod)}÷${c}=${signed(quot)}。`], "同號相乘為正，異號相乘為負；除法規則相同。", "乘除從左到右依序計算，不要跳過乘法。")
            }
          },
          {
            id: "operation-rules",
            title: "運算規律",
            template({ r, ri, mc, signed }) {
              const k = ri(r, 2, 7), a = ri(r, 3, 12), b = ri(r, 2, 9);
              const ans = k * (a + b);
              return mc(r, 1, 1, `下列哪一個算式與 ${k}×(${a}+${b}) 的值相同？`, `${k}×${a}+${k}×${b}`, [`${k}+${a}+${b}`, `${k}×${a}+${b}`, `(${k}+${a})×${b}`], [`分配律：${k}×(${a}+${b})=${k}×${a}+${k}×${b}。`, `兩式值皆為 ${ans}。`], "乘法對加法的分配律：a(b+c)=ab+ac。", "分配時括號內每一項都要乘到。")
            }
          },
          {
            id: "four-operations",
            title: "四則運算",
            template({ r, ri, mc, signed }) {
              const a = ri(r, 4, 12), b = ri(r, 2, 5), c = ri(r, 2, 6), d = ri(r, 1, 4);
              const ans = a + b * c - d;
              return mc(r, 1, 2, `計算 ${a} + ${b} × ${c} − ${d} 的值。`, signed(ans), [signed((a + b) * c - d), signed(a + b * (c - d)), signed(a - b * c + d)], [`先乘除：${b}×${c}=${b * c}。`, `再加減：${a}+${b * c}−${d}=${ans}。`], "沒有括號時先乘除、後加減。", "加減與乘除混合時，不要從左到右一路算下去。")
            }
          },
          {
            id: "distance-and-midpoint",
            title: "數線上兩點間的距離與中點坐標",
            template({ r, ri, mc, signed }) {
              const a = -ri(r, 3, 10), b = ri(r, 2, 12);
              const dist = Math.abs(a - b), mid = (a + b) / 2;
              return mc(r, 1, 2, `數線上 A(${signed(a)})、B(${b})，線段 AB 的長度與中點坐標依序為何？`, `長度 ${dist}，中點 ${signed(mid)}`, [`長度 ${Math.abs(a) + Math.abs(b)}，中點 ${signed(mid + 1)}`, `長度 ${dist}，中點 ${signed(a)}`, `長度 ${b - a}，中點 ${signed((a - b) / 2)}`], [`距離 AB=|${signed(a)}−${b}|=${dist}。`, `中點坐標 = (${signed(a)}+${b})÷2 = ${signed(mid)}。`], "距離用 |a−b|；中點是兩端點坐標的平均。", "中點不是取較大或較小的坐標；兩端點要相加再除以 2。")
            }
          },
          {
            id: "integer-arithmetic",
            title: "數的四則運算",
            template({ r, ri, mc, signed }) {
              const a = ri(r, 4, 16), b = ri(r, 2, 9), c = ri(r, 2, 6);
              const ans = -a + b * c;
              return mc(r, 1, 2, `計算 ${signed(-a)} + ${b} × ${c} 的值。`, signed(ans), [signed(-a + b + c), signed(a + b * c), signed(-a - b * c)], [`先乘除後加減：${b}×${c}=${b * c}。`, `${signed(-a)}+${b * c}=${signed(ans)}。`], "四則運算先乘除、後加減。", "不要從左到右直接算成 (-a+b)×c。")
            }
          },
          {
            id: "distributive-law",
            title: "分配律的應用",
            template({ r, ri, mc }) {
              const k = ri(r, 2, 8), a = ri(r, 5, 14), b = ri(r, 1, 5);
              const ans = k * (a - b);
              return mc(r, 1, 2, `利用分配律計算 ${k}×(${a}-${b}) 的值。`, ans, [k * a - b, k + a - b, k * (a + b)], [`分配律：${k}×(${a}-${b})=${k}×${a}-${k}×${b}。`, `${k * a}-${k * b}=${ans}。`], "a(b-c)=ab-ac。", "分配時括號內每一項都要乘到，不是只乘第一項。")
            }
          },
          {
            id: "commutative-associative-law",
            title: "交換律和結合律的應用",
            template({ r, ri, mc, signed }) {
              const a = ri(r, 3, 15), b = ri(r, 4, 18), c = ri(r, 2, 12);
              const ans = b + c;
              return mc(r, 1, 2, `計算 ${signed(-a)} + ${b} + ${a} + ${c} 的值。`, signed(ans), [signed(b - c), signed(a + b + c), signed(-a + b + c)], [`利用交換律與結合律，把 ${signed(-a)} 和 ${a} 先配對。`, `${signed(-a)}+${a}=0，所以原式=${b}+${c}=${ans}。`], "加法可以交換、結合，先湊相反數常可簡化。", "看到四個數不要急著照順序算，先找能湊 0 的一對。")
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
            title: "｜a－b｜幾何意義的應用",
            template({ r, ri, mc, signed }) {
              const a = -ri(r, 2, 12), b = ri(r, 3, 15);
              const ans = Math.abs(a - b);
              return mc(r, 1, 2, `數線上 A(${signed(a)})、B(${b})，線段 AB 的長度是多少？`, ans, [Math.abs(a) + Math.abs(b) + 1, b - Math.abs(a), Math.abs(a + b)], [`數線上兩點距離為 |a-b|。`, `AB=|${signed(a)}-${b}|=|${a - b}|=${ans}。`], "數線上兩點 a、b 的距離是 |a-b|。", "距離一定非負；不要把 a-b 的負值直接當答案。")
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
            id: "exponent-notation",
            title: "指數記法與性質",
            template({ r, ri, mc }) {
              const base = ri(r, 2, 5), exp = ri(r, 3, 5);
              const value = base ** exp;
              return mc(r, 2, 1, `${Array(exp).fill(base).join("×")} 可記成下列何者？`, `${base}^${exp}`, [`${base}×${exp}`, `${exp}^${base}`, `${base}+${exp}`], [`相同底數連乘 ${exp} 次，記為 ${base}^${exp}。`, `${base}^${exp}=${value}。`], "指數記法表示同底數的連乘次數。", "指數寫在右上角，不是把底數和指數相乘。")
            }
          },
          {
            id: "zero-negative-exponent",
            title: "a⁰與10⁻ᵐ",
            template({ r, ri, pick, mc }) {
              const item = pick(r, [
                { q: "5⁰ 的值是多少？", correct: "1", wrong: ["0", "5", "−1"] },
                { q: "10⁻² 的值是多少？", correct: "0.01", wrong: ["−100", "100", "−0.01"] },
                { q: "2⁻³ 的值是多少？", correct: "1/8", wrong: ["−8", "8", "−1/8"] }
              ]);
              return mc(r, 2, 1, item.q, item.correct, item.wrong, [`a≠0 時，a⁰=1。`, `負指數表示取倒數：10⁻²=1/10²=0.01。`], "零指數為 1（底數不為 0）；負指數表示倒數。", "10⁻² 不是 −100；負號在指數上，表示「分之一」。")
            }
          },
          {
            id: "exponent-comparison",
            title: "指數的比較大小",
            template({ r, ri, mc }) {
              const left = ri(r, 2, 4), right = ri(r, 5, 7);
              const lv = 2 ** left, rv = 3 ** 2;
              return mc(r, 2, 2, `比較 2^${left} 與 3^2 的大小。`, `2^${left} ${lv < rv ? "<" : lv > rv ? ">" : "="} 3^2`, [`2^${left} ${lv < rv ? ">" : "<"} 3^2`, `2^${left} = 3^2`, `無法比較`], [`2^${left}=${lv}，3^2=${rv}。`, `所以 2^${left} ${lv < rv ? "<" : lv > rv ? ">" : "="} 3^2。`], "底數不同時，可先算出數值再比較。", "指數較大不一定整體較大，還要看底數。")
            }
          },
          {
            id: "exponent-laws",
            title: "指數律",
            template({ r, ri, mc }) {
              const base = ri(r, 2, 5), m = ri(r, 2, 4), n = ri(r, 2, 4);
              const exp = m + n;
              return mc(r, 2, 1, `${base}^${m} × ${base}^${n} 可化簡為何者？`, `${base}^${exp}`, [`${base}^${m * n}`, `${2 * base}^${m + n}`, `${base}^${m} + ${base}^${n}`], [`同底數相乘，指數相加。`, `${base}^${m}×${base}^${n}=${base}^(${m}+${n})=${base}^${exp}。`], "同底數相乘：指數相加；同底數相除：指數相減。", "不要把底數相乘，也不要把指數相乘。")
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
          },
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
          }
        ]
      }
    ]
  },
  "g7-1-c2": {
    source: "使用者提供：教育部課綱對照國一上「標準分解式與分數運算」三主題題型表（2026-07 更新）。",
    sections: [
      {
        title: "因數和倍數與質因數分解",
        topics: [
          {
            id: "factor-and-multiple",
            title: "因數與倍數",
            template({ r, ri, pick, mc }) {
              const n = pick(r, [24, 30, 36, 48]), f = pick(r, [2, 3, 4, 6].filter(x => n % x === 0));
              return mc(r, 3, 1, `下列關於 ${n} 與 ${f} 的敘述，何者正確？`, `${f} 是 ${n} 的因數，${n} 是 ${f} 的倍數`, [`${n} 是 ${f} 的因數，${f} 是 ${n} 的倍數`, `${f} 不是 ${n} 的因數`, `${n} 與 ${f} 沒有因數倍數關係`], [`若 a 能整除 b，則 a 是 b 的因數，b 是 a 的倍數。`, `${n}÷${f}=${n / f} 為整數，所以 ${f}|${n}。`], "因數與倍數成對出現：小的是因數，大的是倍數。", "因數一定小於或等於原數（1 與自身除外仍 ≤ 原數）；倍數一定 ≥ 原數。")
            }
          },
          {
            id: "divisibility-rules",
            title: "特殊整數的倍數判別法",
            template({ r, ri, pick, mc }) {
              const item = pick(r, [
                { n: 234, rule: "9", ok: true, why: "2+3+4=9，可被 9 整除" },
                { n: 315, rule: "5", ok: true, why: "個位數是 5" },
                { n: 418, rule: "3", ok: false, why: "4+1+8=13，不能被 3 整除" }
              ]);
              return mc(r, 3, 1, `${item.n} 是否為 ${item.rule} 的倍數？`, item.ok ? "是" : "否", [item.ok ? "否" : "是", "無法判斷", "條件不足"], [`使用 ${item.rule} 的倍數判別法。`, item.why + `，所以${item.ok ? "是" : "不是"} ${item.rule} 的倍數。`], "2/5 看個位；3/9 看各位數字和；11 看奇偶位差。", "倍數判別是充分條件；不符合規則不一定不是倍數（本題已可直接判定）。")
            }
          },
          {
            id: "prime-and-composite",
            title: "質數與合數",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { q: "下列何者是質數？", correct: "29", wrong: ["1", "21", "39"] },
                { q: "下列何者是合數？", correct: "35", wrong: ["2", "13", "17"] }
              ]);
              return mc(r, 3, 1, item.q, item.correct, item.wrong, [`質數恰有 2 個正因數：1 與自己；1 不是質數。`, `${item.correct} 符合題意。`], "質數只有 1 與本身兩個正因數；合數還有其他因數。", "1 既不是質數也不是合數。")
            }
          },
          {
            id: "prime-factor",
            title: "質因數",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { n: 24, p: 2 },
                { n: 30, p: 5 },
                { n: 42, p: 7 }
              ]);
              return mc(r, 3, 1, `${item.n} 的質因數中，一定包含下列哪一個？`, `${item.p}`, [`${item.p + 1}`, `${item.p * 2}`, `${item.p + 2}`], [`把 ${item.n} 分解成質數的乘積。`, `${item.n} 含有質因數 ${item.p}。`], "質因數只能是質數，且整除原數。", "因數不一定是質數；質因數專指質數因數。")
            }
          },
          {
            id: "prime-factorization-standard",
            title: "質因數分解與標準分解式",
            template({ r, ri, pick, mc }) {
              const item = pick(r, [
                { n: 72, ans: "2^3×3^2" },
                { n: 60, ans: "2^2×3×5" },
                { n: 48, ans: "2^4×3" }
              ]);
              return mc(r, 3, 1, `${item.n} 的標準分解式為何？`, item.ans, [`2^2×3^3`, `2×${item.n / 2}`, `${item.n}`], [`用短除法或連除法分解 ${item.n}。`, `整理成 a×b×… 且各底數為質數、指數寫成次方，得 ${item.ans}。`], "標準分解式：底數為質數，相同底數合併成指數。", "2×2×2×3 不是標準式；應寫成 2³×3。")
            }
          },
          {
            id: "factor-identification-application",
            title: "因數判別的應用",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { n: 36, f: 9, groups: 4 },
                { n: 48, f: 6, groups: 8 },
                { n: 60, f: 12, groups: 5 }
              ]);
              return mc(r, 3, 2, `要把 ${item.n} 個物品平均分成若干組，每組 ${item.f} 個且全部分完，可分成幾組？`, `${item.groups}`, [`${item.f}`, `${item.n - item.f}`, `${item.groups + 1}`], [`每組 ${item.f} 個，且 ${item.f}|${item.n}。`, `${item.n}÷${item.f}=${item.groups} 組。`], "能整除的分組數 = 原數 ÷ 每組個數。", "題目已給每組個數，不是求因數個數。")
            }
          },
          {
            id: "multiple-identification-application",
            title: "倍數判別的應用",
            template({ r, ri, pick, mc }) {
              const base = ri(r, 8, 15), step = pick(r, [3, 4, 5, 6]), target = base + step * ri(r, 2, 4);
              return mc(r, 3, 2, `某數列首項 ${base}，每次加 ${step}，下列哪一個一定是此數列的項？`, `${target}`, [`${target + 1}`, `${base + step - 1}`, `${target + step}`], [`數列各項都是 ${step} 的倍數加上首項餘數的型態。`, `${base}、${base + step}、…、${target} 都在數列中。`], "等差數列中，相鄰兩項差固定；判斷是否為項可先檢查與首項的差能否被公差整除。", "不是每個比首項大的數都在數列中。")
            }
          },
          {
            id: "prime-composite-identification",
            title: "質數與合數的判別",
            template({ r, pick, mc }) {
              const n = pick(r, [51, 57, 91, 93, 87]);
              const ans = "合數";
              return mc(r, 3, 1, `${n} 是質數還是合數？`, ans, ["質數", "既不是質數也不是合數", "無法判別"], [`找 ${n} 是否有 1 與自己以外的因數。`, `${n} 可分解，所以是合數。`], "判別合數：找出一個非平凡因數即可。", "質數判別要確認沒有其他因數，不能只看個位數。")
            }
          },
          {
            id: "standard-form-application",
            title: "標準分解式的應用",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { n: 72, exp2: 3, exp3: 2, ans: 12 },
                { n: 60, exp2: 2, exp3: 1, exp5: 1, ans: 6 }
              ]);
              const wrong = item.ans + 2;
              return mc(r, 3, 2, `已知 ${item.n} 的標準分解式，其所有正因數個數為何？`, `${item.ans}`, [`${wrong}`, `${item.ans - 1}`, `${item.ans + 3}`], [`指數加 1 再相乘：因數個數 = 各指數 +1 的乘積。`, `${item.n} 的因數個數為 ${item.ans}。`], "因數個數公式：(a+1)(b+1)…，a、b 為標準分解式指數。", "不要把指數直接相加當因數個數。")
            }
          },
          {
            id: "factor-multiple-standard-form",
            title: "因數和倍數與標準分解式",
            template({ r, pick, mc }) {
              const a = 24, b = 36;
              return mc(r, 3, 2, `利用 ${a}=2^3×3、${b}=2^2×3^2 的標準分解式，${a} 與 ${b} 的最小公倍數為何？`, "72", ["144", "12", "216"], [`lcm 取各質因數的較大指數：2^max(3,2)×3^max(1,2)=2^3×3^2=72。`, `所以最小公倍數是 72。`], "lcm：各質因數取較大指數相乘。", "lcm 不是兩數相加；也不要把指數相加。")
            }
          }
        ]
      },
      {
        title: "最大公因數與最小公倍數",
        topics: [
          {
            id: "common-factor-gcd",
            title: "公因數與最大公因數",
            template({ r, pick, mc }) {
              const pair = pick(r, [[12, 18], [16, 24], [20, 30]]);
              const [a, b] = pair;
              const g = pair[0] === 12 ? 6 : pair[0] === 16 ? 8 : 10;
              return mc(r, 3, 1, `${a} 與 ${b} 的公因數中，最大的是哪一個？`, `${g}`, [`${g / 2}`, `${a}`, `${b}`], [`列出兩數因數，找共同且最大的。`, `${a} 與 ${b} 的最大公因數是 ${g}。`], "最大公因數是同時整除兩數的最大正整數。", "公因數不會比較小的那個數還大。")
            }
          },
          {
            id: "coprime-concept",
            title: "互質",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { pair: "8 與 15", ok: "互質", why: "公因數只有 1" },
                { pair: "12 與 18", ok: "不互質", why: "公因數有 1、2、3、6" }
              ]);
              return mc(r, 3, 1, `${item.pair} 是否互質？`, item.ok, [item.ok === "互質" ? "不互質" : "互質", "條件不足", "無法判斷"], [`互質指最大公因數為 1。`, item.why + `，所以${item.ok}。`], "互質 = gcd(a,b)=1，不代表兩數都是質數。", "8 與 15 互質，但 8 不是質數。")
            }
          },
          {
            id: "common-multiple-lcm",
            title: "公倍數與最小公倍數",
            template({ r, pick, mc }) {
              const pair = pick(r, [[4, 6], [6, 8], [5, 10]]);
              const [a, b] = pair;
              const l = a === 4 ? 12 : a === 6 ? 24 : 10;
              return mc(r, 3, 1, `${a} 與 ${b} 的最小公倍數是多少？`, `${l}`, [`${a * b}`, `${l / 2}`, `${l + a}`], [`公倍數同時是兩數的倍數；最小公倍數是最小的那個。`, `[${a},${b}]=${l}。`], "最小公倍數是兩數共同倍數中最小正整數。", "兩數相乘不一定是 lcm（除非互質）。")
            }
          },
          {
            id: "coprime-identification",
            title: "互質的判別",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { a: 9, b: 14, ans: "互質" },
                { a: 21, b: 35, ans: "不互質" }
              ]);
              return mc(r, 3, 1, `${item.a} 與 ${item.b} 是否互質？`, item.ans, [item.ans === "互質" ? "不互質" : "互質", "無法判斷", "條件不足"], [`求 gcd(${item.a},${item.b})。`, `gcd${item.ans === "互質" ? "=1，互質" : ">1，不互質"}。`], "互質判別：算 gcd 是否為 1。", "兩個合數也可能互質，如 8 與 9。")
            }
          },
          {
            id: "find-gcd-and-lcm",
            title: "求最大公因數與最小公倍數",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { a: 48, b: 72, g: 24, l: 144 },
                { a: 36, b: 60, g: 12, l: 180 }
              ]);
              return mc(r, 3, 2, `${item.a} 與 ${item.b} 的最大公因數與最小公倍數依序為何？`, `(${item.g}, ${item.l})`, [`(${item.l}, ${item.g})`, `(${item.g}, ${item.g * 2})`, `(${item.g / 2}, ${item.l})`], [`48=2⁴×3，72=2³×3²；gcd=2³×3=${item.g}，lcm=2⁴×3²=${item.l}。`, `所以依序為 (${item.g}, ${item.l})。`], "標準分解式：gcd 取小指數，lcm 取大指數。", "gcd 與 lcm 不可對調；且 a×b=gcd×lcm。")
            }
          },
          {
            id: "gcd-compare-size",
            title: "利用最大公因數比較大小",
            template({ r, ri, mc, frac, over }) {
              const p = ri(r, 2, 5), q = ri(r, p + 2, p + 6), s = ri(r, 3, 7);
              const left = frac(p, q), right = frac(p + 1, q + s);
              const ans = p * (q + s) < (p + 1) * q ? `${left} < ${right}` : `${left} > ${right}`;
              return mc(r, 3, 2, `比較 ${left} 與 ${right} 的大小。`, ans, [ans.includes("<") ? `${left} > ${right}` : `${left} < ${right}`, `${left} = ${right}`, `無法比較`], [`通分或交叉相乘：${p}×${q + s} 與 ${p + 1}×${q} 比較。`, `所以 ${ans.replace(" < ", " 小於 ").replace(" > ", " 大於 ")}。`], "正分數比大小可交叉相乘（分母為正時）。", "比較前先確認兩分數皆為正。")
            }
          },
          {
            id: "lcm-find-dividend",
            title: "利用最小公倍數求被除數",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { a: 4, b: 6, lcm: 12 },
                { a: 5, b: 6, lcm: 30 },
                { a: 6, b: 8, lcm: 24 }
              ]);
              return mc(r, 3, 2, `某數除以 ${item.a} 餘 0、除以 ${item.b} 餘 0，且為最小的正整數，此數為何？`, `${item.lcm}`, [`${item.lcm + item.a}`, `${item.a * item.b}`, `${item.lcm / 2}`], [`同時被 ${item.a}、${item.b} 整除 → 是 lcm 的倍數。`, `最小正解為 [${item.a},${item.b}]=${item.lcm}。`], "餘 0 即為倍數；最小共同倍數用 lcm。", "lcm 已是最小，不要再加公倍數。")
            }
          },
          {
            id: "gcd-application",
            title: "最大公因數的應用",
            template({ r, ri, pick, mc }) {
              const pair = pick(r, [[48, 72], [60, 84], [54, 81]]);
              const [a, b] = pair, g = pair[0] === 48 ? 24 : pair[0] === 60 ? 12 : 27;
              return mc(r, 3, 2, `將 ${a} 個紅球與 ${b} 個藍球分成若干組，每組紅藍數量相同且全部分完，最多幾組？`, `${g}`, [`${a / g + b / g}`, `${a + b}`, `${Math.min(a, b)}`], [`每組紅藍比相同 → 組數是 gcd。`, `gcd(${a},${b})=${g}，最多 ${g} 組。`], "『最多分組且全部分完』→ 最大公因數。", "每組球數總和不是組數。")
            }
          },
          {
            id: "lcm-application",
            title: "最小公倍數的應用",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { a: 6, b: 8, ans: 24, ctx: "兩公車分別每 6、8 分鐘一班，同時出站後至少幾分鐘再同時出站？" },
                { a: 4, b: 10, ans: 20, ctx: "甲每 4 天、乙每 10 天做一次，今天同時做，至少幾天後再同時？" }
              ]);
              return mc(r, 3, 2, item.ctx, `${item.ans}`, [`${item.a + item.b}`, `${item.a * item.b}`, `${item.ans + item.a}`], [`週期問題 → 最小公倍數。`, `[${item.a},${item.b}]=${item.ans}。`], "『同時再次』→ lcm。", "兩週期相加不是 lcm。")
            }
          },
          {
            id: "gcd-lcm-evaluation",
            title: "最大公因數與最小公倍數的求值",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { a: 30, b: 45, g: 15, l: 90 },
                { a: 28, b: 42, g: 14, l: 84 }
              ]);
              return mc(r, 3, 2, `求 ${item.a} 與 ${item.b} 的 gcd 與 lcm。`, `gcd=${item.g}，lcm=${item.l}`, [`gcd=${item.l}，lcm=${item.g}`, `gcd=${item.g}，lcm=${item.g * 2}`, `gcd=${item.g / 2}，lcm=${item.l}`], [`分解或短除法求 gcd、lcm。`, `(gcd,lcm)=(${item.g},${item.l})；檢查 ${item.a}×${item.b}=${item.g}×${item.l}。`], "算完可用 a×b=gcd×lcm 驗算。", "gcd 必須同時整除兩數；lcm 必須是兩數的倍數。")
            }
          }
        ]
      },
      {
        title: "分數的四則運算",
        topics: [
          {
            id: "fraction-basics",
            title: "分數的基本概念",
            template({ r, ri, mc, over }) {
              const q = ri(r, 3, 8);
              return mc(r, 4, 1, `把一塊蛋糕平均分成 ${q} 份，取其中 1 份，是整塊蛋糕的幾分之幾？`, over(1, q), [over(q, 1), over(1, q * 2), over(2, q)], [`平均分成 ${q} 份，每份是 ${over(1, q)}。`, `取 1 份即 ${over(1, q)}。`], "單位量 = 1÷份數；取 k 份 = k÷份數。", "分母是總份數，分子是取的份數。")
            }
          },
          {
            id: "positive-fraction-compare",
            title: "正分數大小的比較",
            template({ r, ri, mc, frac, over }) {
              const p = ri(r, 2, 5), q = ri(r, p + 2, p + 6), s = ri(r, 3, 7);
              const left = frac(p, q), right = frac(p + 1, q + s);
              const cmp = p * (q + s) < (p + 1) * q ? `${left} < ${right}` : `${left} > ${right}`;
              return mc(r, 4, 1, `比較 ${left} 與 ${right} 的大小。`, cmp, [cmp.includes("<") ? `${left} > ${right}` : `${left} < ${right}`, `${left} = ${right}`, `無法比較`], [`正分數可交叉相乘比較。`, `${p}×${q + s} 與 ${p + 1}×${q} 比較得 ${cmp}。`], "同分母比分子；同分子比分母（分母小的大）。", "交叉相乘僅適用分母為正的情況。")
            }
          },
          {
            id: "fraction-add-subtract",
            title: "分數的加減",
            template({ r, ri, mc, frac, over }) {
              const p = ri(r, 1, 4), q = ri(r, 2, 6), s = ri(r, 2, 5);
              const n = p * s + q, d = q * s;
              const ans = frac(n, d);
              return mc(r, 4, 1, `計算 ${over(p, q)} + ${over(1, s)}。`, ans, [frac(p + 1, q + s), frac(n, q + s), frac(p * s - q, q * s)], [`公分母 ${q * s}：${over(p, q)}=${over(p * s, q * s)}，${over(1, s)}=${over(q, q * s)}。`, `相加得 ${ans}。`], "異分母先通分再加减分子。", "分數相加不能分子分母各自相加。")
            }
          },
          {
            id: "fraction-multiply-divide",
            title: "分數的乘除",
            template({ r, ri, mc, frac, over }) {
              const p = ri(r, 2, 5), q = ri(r, 3, 7), s = ri(r, 2, 6), t = ri(r, 3, 8);
              const ans = frac(p * t, q * s);
              return mc(r, 4, 1, `計算 ${over(p, q)} × ${over(t, s)}。`, ans, [frac(p + t, q + s), frac(p * s, q * t), frac(p * t, q + s)], [`分數相乘：分子乘分子、分母乘分母。`, `${over(p, q)}×${over(t, s)}=${over(p * t, q * s)}=${ans}。`], "乘法先交叉約分再算更簡便。", "除法要改乘倒數，不是顛倒被除數。")
            }
          },
          {
            id: "fraction-four-operations",
            title: "分數的四則運算",
            template({ r, ri, mc, frac, over }) {
              const p = ri(r, 2, 4), q = ri(r, 3, 6), s = ri(r, 2, 5);
              const prod = p * s, ans = frac(prod + q, q);
              return mc(r, 4, 2, `計算 ${over(p, q)} × ${s} + 1。`, ans, [frac(p * s + q, q * s), frac(p + s, q), frac(prod, q * s)], [`先乘：${over(p, q)}×${s}=${frac(prod, q)}。`, `再加 1：${frac(prod, q)}+1=${ans}。`], "先乘除後加減；加 1 可寫成 +${over(q,q)} 通分。", "×${s} 只乘分子或只乘分母都不對。")
            }
          },
          {
            id: "fraction-compare-application",
            title: "分數大小的比較與應用",
            template({ r, mc, frac, over }) {
              const a = frac(3, 5), b = frac(5, 8);
              return mc(r, 4, 2, `甲吃了蛋糕的 ${a}，乙吃了 ${b}，誰吃得較多？`, "乙", ["甲", "一樣多", "無法比較"], [`3/5=0.6，5/8=0.625；或通分 24/40 與 25/40。`, `5/8 > 3/5，乙較多。`], "應用題比大小：通分、交叉相乘或換成小數。", "分母大不一定分數小，要看分子。")
            }
          },
          {
            id: "fraction-four-ops-application",
            title: "分數四則運算的應用",
            template({ r, ri, pick, mc, over }) {
              const denom = pick(r, [4, 6, 8]);
              const total = denom * ri(r, 4, 8);
              const morning = total / denom;
              const part = ri(r, 2, Math.max(2, Math.floor(morning / 2)));
              const ans = total - morning - part;
              return mc(r, 4, 2, `一桶水 ${total} 公升，上午用去 ${over(1, denom)} 桶，下午用去 ${part} 公升，剩多少公升？`, `${ans}`, [`${total - morning}`, `${total - part}`, `${ans + part}`], [`上午用 ${over(1, denom)} 桶 = ${morning} 公升。`, `剩 ${total}-${morning}-${part}=${ans} 公升。`], "分數部分先換算成實際量，再與其他量一起算。", "「用去 1/n 桶」= 用去總量的 1/n。")
            }
          }
        ]
      }
    ]
  },
  "g7-1-c3": {
    source: "使用者提供：教育部課綱對照國一上「一元一次方程式」二主題題型表（2026-07 更新）。",
    sections: [
      {
        title: "文字符號的列式與運算",
        topics: [
          {
            id: "literal-expression-setup",
            title: "文字符號的列式",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { q: "某數為 x，其 2 倍加 7 可記為？", ans: "2x + 7", wrong: ["2 + 7x", "x + 27", "2(x + 7)"] },
                { q: "某數為 x，比 15 少 4 可記為？", ans: "x − 4", wrong: ["15 − x", "x + 4", "4 − x"] }
              ]);
              return mc(r, 5, 1, item.q, item.ans, item.wrong, [`依題意把文字轉成含 x 的式子。`, `答案為 ${item.ans}。`], "先確認『倍、加、少、多』對應的運算順序。", "「比 A 少 B」通常是 x = A − B 或 x − B，要看 x 代表誰。")
            }
          },
          {
            id: "multiplication-shorthand",
            title: "乘號的簡記",
            template({ r, ri, mc }) {
              const k = ri(r, 2, 9);
              return mc(r, 5, 1, `${k} × x 的簡記式為何？`, `${k}x`, [`x${k}`, `${k} + x`, `x^${k}`], [`數與文字相乘可省略乘號，數寫在文字前。`, `${k}×x 簡記為 ${k}x。`], "國中代數中 3×x 寫成 3x；x×x 才是 x²。", "不要把 3x 寫成 x3。")
            }
          },
          {
            id: "linear-expression-concept",
            title: "一元一次式",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { correct: "3x − 5", wrong: ["x² + 1", "3/x + 2", "5"] },
                { correct: "−2x + 7", wrong: ["xy + 1", "x³ − x", "2/x"] }
              ]);
              return mc(r, 5, 1, "下列哪一個是一元一次式？", item.correct, item.wrong, [`一元一次式：只含一個未知數，且其次數為 1。`, `${item.correct} 符合。`], "一次式中 x 的指數是 1；分母含 x 的不是一次式。", "常數 5 是零次式，不是一元一次式。")
            }
          },
          {
            id: "linear-expression-operation",
            title: "一元一次式的運算",
            template({ r, ri, mc }) {
              const a = ri(r, 2, 5), b = ri(r, 1, 6), c = ri(r, 2, 4), d = ri(r, 1, 5);
              const ans = `${a + c}x + ${b + d}`;
              return mc(r, 5, 1, `計算 (${a}x + ${b}) + (${c}x + ${d})。`, ans, [`${a + c}x + ${b - d}`, `${a + c + b + d}`, `${a}x + ${c}x + ${b * d}`], [`合併 x 項：${a}x+${c}x=${a + c}x。`, `合併常數項：${b}+${d}=${b + d}。`, `得 ${ans}。`], "一次式加減：合併同類項（x 項、常數項分開）。", "不能把 x 項與常數項直接相加。")
            }
          },
          {
            id: "linear-expression-value",
            title: "一元一次式的值",
            template({ r, ri, mc, signed }) {
              const x = ri(r, 2, 8), a = ri(r, 2, 6), b = ri(r, 1, 9);
              const ans = a * x + b;
              return mc(r, 5, 1, `當 x = ${x} 時，${a}x + ${b} 的值是多少？`, `${ans}`, [`${a + x + b}`, `${a * x - b}`, `${ans + 1}`], [`代入 x=${x}：${a}×${x}+${b}=${a * x}+${b}。`, `所以值為 ${ans}。`], "求值：把未知數代成數字，依運算順序計算。", "先乘後加；不要漏乘 x。")
            }
          },
          {
            id: "linear-expression-simplify",
            title: "一元一次式的化簡",
            template({ r, ri, mc }) {
              const a = ri(r, 2, 5), b = ri(r, 1, 4), c = ri(r, 3, 8);
              const coef = a + b, ans = `${coef}x + ${c}`;
              return mc(r, 5, 1, `化簡 ${a}x + ${b}x + ${c}。`, ans, [`${a + b + c}x`, `${coef}x − ${c}`, `${a}x + ${b + c}x`], [`合併 x 項：${a}x+${b}x=${coef}x。`, `常數項 ${c} 保留，得 ${ans}。`], "化簡 = 合併同類項。", "只有同類項才能合併。")
            }
          },
          {
            id: "linear-expression-word-setup",
            title: "一元一次式的列式",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { q: "長方形長為 x 公分、寬 5 公分，周長（公分）為？", ans: "2(x + 5)", wrong: ["x + 5", "2x + 5", "x × 5"] },
                { q: "每本 x 元，買 4 本共多少元？", ans: "4x", wrong: ["x + 4", "4 + x", "x − 4"] }
              ]);
              return mc(r, 5, 2, item.q, item.ans, item.wrong, [`依題意列出含 x 的式子。`, `答案為 ${item.ans}。`], "周長、總價等情境先確認公式再代入。", "周長是兩長兩寬，不是長加寬一次。")
            }
          },
          {
            id: "linear-expression-setup-and-evaluate",
            title: "一元一次式的列式與求值",
            template({ r, ri, mc }) {
              const x = ri(r, 3, 7), w = ri(r, 2, 5);
              const perimeter = 2 * (x + w), ans = perimeter;
              return mc(r, 5, 2, `長方形長 x = ${x} 公分、寬 ${w} 公分，周長是多少公分？`, `${ans}`, [`${x + w}`, `${2 * x + w}`, `${ans + 2}`], [`周長 = 2(長+寬) = 2(${x}+${w})。`, `2×${x + w}=${ans} 公分。`], "先列 2(x+寬)，再代入已知 x 求值。", "不要只算一條長加一條寬。")
            }
          },
          {
            id: "linear-expression-application",
            title: "一元一次式的應用",
            template({ r, ri, mc }) {
              const son = ri(r, 8, 14), dad = 3 * son + 5;
              return mc(r, 5, 2, `兒子今年 ${son} 歲，爸爸年齡是兒子的 3 倍加 5 歲，爸爸幾歲？`, `${dad}`, [`${son + 5}`, `${3 * son}`, `${dad - 3}`], [`列式：爸爸 = 3×${son}+5。`, `3×${son}+5=${dad} 歲。`], "年齡題先定未知數代表誰，再寫倍數與加減關係。", "「3 倍加 5」是 3×年齡+5，不是 (年齡+5)×3。")
            }
          }
        ]
      },
      {
        title: "解一元一次方程式與應用問題",
        topics: [
          {
            id: "linear-equation-concept",
            title: "一元一次方程式",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { correct: "2x + 3 = 11", wrong: ["2x + 3", "x² = 4", "2x + 3 > 11"] },
                { correct: "5 − x = 2", wrong: ["5 − x", "x + y = 5", "1/x = 2"] }
              ]);
              return mc(r, 5, 1, "下列哪一個是一元一次方程式？", item.correct, item.wrong, [`方程式含有等號，且未知數 x 的次數為 1。`, `${item.correct} 是方程式且一次。`], "方程式 = 含等號的等量關係；一次指 x 的次數為 1。", "沒有等號的是式子，不是方程式。")
            }
          },
          {
            id: "linear-equation-solution",
            title: "一元一次方程式的解",
            template({ r, ri, mc }) {
              const x = ri(r, 2, 9), a = ri(r, 2, 5), b = ri(r, 1, 8), c = a * x + b;
              return mc(r, 5, 1, `x = ${x} 是否為方程式 ${a}x + ${b} = ${c} 的解？`, "是", ["否", "無法判斷", "條件不足"], [`代入 x=${x}：左邊 ${a}×${x}+${b}=${c}，等於右邊 ${c}。`, `所以 x=${x} 是解。`], "檢驗解：把 x 代回方程式，看兩邊是否相等。", "只算左邊或只算右邊不夠，兩邊都要比。")
            }
          },
          {
            id: "balance-and-transposition",
            title: "等量公理與移項法則",
            template({ r, ri, mc, signed }) {
              const b = ri(r, 3, 12), c = ri(r, b + 2, b + 15);
              const ans = c - b;
              return mc(r, 5, 1, `解方程式 x + ${b} = ${c}。`, `x = ${ans}`, [`x = ${ans + b}`, `x = ${c + b}`, `x = ${signed(b - c)}`], [`移項：x = ${c} − ${b}。`, `x = ${ans}。`], "移項 = 把項移到另一邊並變號。", "移項時符號要改變。")
            }
          },
          {
            id: "solve-linear-equation",
            title: "解一元一次方程式",
            template({ r, ri, mc, over }) {
              const x = ri(r, 2, 8), a = ri(r, 2, 5), b = ri(r, 1, 9), c = a * x + b;
              return mc(r, 5, 2, `解方程式 ${a}x + ${b} = ${c}。`, `x = ${x}`, [`x = ${x + 1}`, `x = ${x - 1}`, `x = ${x + b}`], [`兩邊減 ${b}：${a}x = ${c - b}。`, `兩邊除以 ${a}：x = ${over(c - b, a)} = ${x}。`], "ax+b=c：先移常數，再除以 x 的係數。", "移項或除法時別漏掉符號。")
            }
          },
          {
            id: "word-problem-steps",
            title: "解應用問題的步驟",
            template({ r, mc }) {
              return mc(r, 5, 1, "解一元一次方程式應用問題時，第一步通常要做什麼？", "設未知數並說明其代表意義", ["直接猜答案", "先把所有數字相加", "只寫算式不設未知數"], [`應用題需先把文字轉成數學語言。`, `第一步：設未知數 x（或其他）並寫清楚代表什麼。`], "應用題流程：設元 → 列式 → 解方程 → 檢查 → 答。", "沒有未知數就無法建立等量關係。")
            }
          },
          {
            id: "balance-property-concept",
            title: "等量公理的概念",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { q: "若 a = b，則 a + 3 與 b + 3 的關係為？", ans: "相等", wrong: ["a + 3 較大", "b + 3 較大", "無法比較"] },
                { q: "若 a = b 且 c ≠ 0，則 ac 與 bc 的關係為？", ans: "相等", wrong: ["ac 較大", "bc 較大", "不一定相等"] }
              ]);
              return mc(r, 5, 1, item.q, item.ans, item.wrong, [`等量公理：等式兩邊同加、同減、同乘（非 0）、同除（非 0）仍相等。`, `所以兩邊 ${item.ans}。`], "解方程的每一步都在兩邊做相同運算。", "只有同加同減同乘同除（非 0）才保持相等。")
            }
          },
          {
            id: "solution-and-parameter",
            title: "方程式的解與求值問題",
            template({ r, ri, mc }) {
              const x = ri(r, 2, 8), a = ri(r, 2, 6), c = 2 * x + a;
              return mc(r, 5, 2, `若 x = ${x} 是方程式 2x + a = ${c} 的解，則 a =？`, `${a}`, [`${a + 1}`, `${c}`, `${x + a}`], [`代入 x=${x}：2×${x}+a=${c}。`, `${2 * x}+a=${c}，所以 a=${a}。`], "已知解求參數：把解代入方程式。", "a 是待求常數，不要和 x 混淆。")
            }
          },
          {
            id: "linear-equation-word-setup",
            title: "一元一次方程式的列式",
            template({ r, ri, mc }) {
              const x = ri(r, 5, 15), ans = 2 * x - 3;
              return mc(r, 5, 2, `某數的 2 倍減 3 等於 ${ans}，設某數為 x，可列何者？`, `2x − 3 = ${ans}`, [`2(x − 3) = ${ans}`, `2x + 3 = ${ans}`, `x − 3 = ${ans}`], [`「2 倍減 3」→ 2x − 3。`, `等於 ${ans}，所以 2x − 3 = ${ans}。`], "列方程式：左邊寫代數式，右邊寫已知數。", "減 3 是整式減 3，不是只對 x 減 3 再乘 2。")
            }
          },
          {
            id: "distribution-problem",
            title: "分配問題",
            template({ r, ri, mc }) {
              const per = ri(r, 4, 7), rem = ri(r, 1, 4), people = ri(r, 5, 10);
              const total = per * people + rem;
              return mc(r, 5, 2, `糖果分給 ${people} 人，每人 ${per} 顆，最後剩 ${rem} 顆，共有幾顆？`, `${total}`, [`${per * people}`, `${total - rem}`, `${total + rem}`], [`設總數為 x：x = ${per}×${people}+${rem}。`, `x = ${total} 顆。`], "分配問題：總數 = 每人數×人數 + 剩餘（或 − 不足）。", "剩餘要加回，不足要減去。")
            }
          },
          {
            id: "water-saving-problem",
            title: "省水問題",
            template({ r, ri, pick, mc }) {
              const before = ri(r, 20, 40), rate = pick(r, [10, 20, 25]), after = before * (100 - rate) / 100;
              return mc(r, 5, 2, `原本每天用水 ${before} 公升，節省 ${rate}% 後，每天用水多少公升？`, `${after}`, [`${before + rate}`, `${before * rate / 100}`, `${after + before}`], [`節省 ${rate}% 表示用原來的 ${100 - rate}%。`, `${before}×${100 - rate}% = ${after} 公升。`], "省水 %：新用量 = 原用量×(1 − 節省率)。", "節省 20% 不是減 20 公升，是減原量的 20%。")
            }
          },
          {
            id: "shopping-problem",
            title: "購物問題",
            template({ r, ri, mc }) {
              const count = ri(r, 2, 5), change = ri(r, 5, 20), pay = 100, price = (pay - change) / count;
              return mc(r, 5, 2, `用 ${pay} 元買 ${count} 個相同物品，找 ${change} 元，每個多少元？`, `${price}`, [`${pay - change}`, `${price + 1}`, `${count * change}`], [`實付 ${pay}−${change}=${pay - change} 元。`, `${count} 個共 ${pay - change} 元，每個 ${price} 元。`], "購物：總價 = 付錢 − 找零；單價 = 總價÷數量。", "找零是退還的，要從付錢中扣掉。")
            }
          },
          {
            id: "plan-comparison-problem",
            title: "方案問題",
            template({ r, ri, mc }) {
              const baseA = 100, rateA = 2, baseB = 50, rateB = 5;
              const x = (baseA - baseB) / (rateB - rateA);
              return mc(r, 5, 2, `方案甲：月租 ${baseA} 元加每分鐘 ${rateA} 元；方案乙：月租 ${baseB} 元加每分鐘 ${rateB} 元。通話幾分鐘時兩方案費用相同？`, `${x} 分鐘`, [`${x + 5} 分鐘`, `${x - 5} 分鐘`, `${baseA} 分鐘`], [`設 x 分鐘：${baseA}+${rateA}x = ${baseB}+${rateB}x。`, `移項得 ${rateB - rateA}x = ${baseA - baseB}，x = ${x}。`], "方案相同：兩個一次式相等，解 x。", "月租與計次費要分開列。")
            }
          },
          {
            id: "discount-problem",
            title: "折扣問題",
            template({ r, ri, pick, mc }) {
              const discount = pick(r, [0.8, 0.75, 0.85]), sale = ri(r, 12, 20) * 50, original = Math.round(sale / discount);
              const label = discount === 0.8 ? "八" : discount === 0.75 ? "七五" : "八五";
              return mc(r, 5, 2, `某商品打${label}折後售價 ${sale} 元，原價多少元？`, `${original}`, [`${Math.round(sale * discount)}`, `${sale + 100}`, `${original - 50}`], [`打${label}折 = 原價×${discount} = ${sale}。`, `原價 = ${sale}÷${discount} = ${original} 元。`], "折扣：售價 = 原價×折扣率；求原價用除法。", "打八折是×0.8，不是減 80 元。")
            }
          }
        ]
      }
    ]
  },
  "g7-2-c1": {
    source: "使用者提供：教育部課綱對照國一「二元一次聯立方程式」二主題題型表（2026-07 更新；對應國一下第一單元 g7-2-c1）。",
    sections: [
      {
        title: "二元一次方程式",
        topics: [
          {
            id: "two-variable-linear-expression",
            title: "二元一次式",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { correct: "3x + 2y − 5", wrong: ["x² + y", "3/x + y", "5"] },
                { correct: "−x + 4y + 1", wrong: ["xy + 1", "x + y²", "x − y − z"] }
              ]);
              return mc(r, 6, 1, "下列哪一個是二元一次式？", item.correct, item.wrong, [`二元一次式：含 x、y，且兩者最高次數皆為 1。`, `${item.correct} 符合。`], "一次式中 x、y 的指數都是 1；不能有 xy、x² 等。", "三個未知數的不是二元一次式。")
            }
          },
          {
            id: "two-variable-expression-simplify",
            title: "二元一次式的化簡",
            template({ r, ri, mc }) {
              const a = ri(r, 2, 4), b = ri(r, 1, 5), c = ri(r, 2, 4), d = ri(r, 1, 5);
              const ans = `${a + c}x + ${b + d}y`;
              return mc(r, 6, 1, `化簡 (${a}x + ${b}y) + (${c}x + ${d}y)。`, ans, [`${a + c}x + ${b - d}y`, `${a + b}x + ${c + d}y`, `${a + c + b + d}xy`], [`合併 x 項：${a}x+${c}x=${a + c}x。`, `合併 y 項：${b}y+${d}y=${b + d}y。`, `得 ${ans}。`], "化簡時 x 項、y 項、常數項分開合併。", "xy 與 x 不是同類項。")
            }
          },
          {
            id: "two-variable-linear-equation",
            title: "二元一次方程式",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { correct: "2x + y = 7", wrong: ["2x + y", "x² + y = 7", "2x + y > 7"] },
                { correct: "x − 3y = 5", wrong: ["x − 3y", "xy = 5", "x + y + z = 5"] }
              ]);
              return mc(r, 6, 1, "下列哪一個是二元一次方程式？", item.correct, item.wrong, [`含等號，且 x、y 的次數皆為 1。`, `${item.correct} 符合。`], "二元一次方程式：兩個一次未知數 + 等號。", "沒有等號的是式子，不是方程式。")
            }
          },
          {
            id: "two-variable-equation-solution",
            title: "二元一次方程式的解",
            template({ r, ri, mc }) {
              const x = ri(r, 1, 6), y = ri(r, 1, 6), s = x + y, t = x - y;
              return mc(r, 6, 1, `(${x}, ${y}) 是否為 x + y = ${s} 的解？`, "是", ["否", "無法判斷", "條件不足"], [`代入 x=${x}、y=${y}：左邊 ${x}+${y}=${s}。`, `等於右邊 ${s}，所以是解。`], "檢驗解：把 x、y 代入方程式看是否成立。", "解是有序對 (x,y)；順序不能對調。")
            }
          },
          {
            id: "two-variable-expression-value",
            title: "二元一次式的值",
            template({ r, ri, mc }) {
              const x = ri(r, 1, 5), y = ri(r, 1, 5), a = ri(r, 2, 4), b = ri(r, 2, 4);
              const ans = a * x + b * y;
              return mc(r, 6, 1, `當 x = ${x}、y = ${y} 時，${a}x + ${b}y 的值是多少？`, `${ans}`, [`${a + b + x + y}`, `${ans + 1}`, `${a * x - b * y}`], [`代入：${a}×${x}+${b}×${y}=${a * x}+${b * y}。`, `值為 ${ans}。`], "求值時 x、y 各代入一次，注意係數。", "2x+3y 不是 (2+x)+(3+y)。")
            }
          },
          {
            id: "two-variable-expression-word-setup",
            title: "二元一次式的列式",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { q: "蘋果每顆 x 元、橘子每顆 y 元，各買 1 顆共多少元？", ans: "x + y", wrong: ["xy", "x − y", "2(x + y)"] },
                { q: "長 x 公分、寬 y 公分的長方形周長（公分）為？", ans: "2x + 2y", wrong: ["x + y", "xy", "x² + y²"] }
              ]);
              return mc(r, 6, 2, item.q, item.ans, item.wrong, [`依題意用 x、y 表示所求量。`, `答案為 ${item.ans}。`], "列式前先確認求的是和、差還是周長等一次關係。", "周長是 2x+2y，不是 x+y。")
            }
          },
          {
            id: "two-variable-expression-setup-evaluate",
            title: "二元一次式的列式與求值",
            template({ r, ri, mc }) {
              const x = ri(r, 3, 7), y = ri(r, 2, 6);
              const ans = 2 * x + y;
              return mc(r, 6, 2, `某數量為 x 的 2 倍加 y。當 x = ${x}、y = ${y} 時，此數量是多少？`, `${ans}`, [`${2 * (x + y)}`, `${x + 2 * y}`, `${ans + 1}`], [`列式：2x + y。`, `代入 x=${x}、y=${y}：2×${x}+${y}=${ans}。`], "先列式再代入求值。", "2 倍 x 再加 y 是 2x+y，不是 2(x+y)。")
            }
          },
          {
            id: "two-variable-equation-solution-evaluate",
            title: "二元一次方程式的解與求值問題",
            template({ r, ri, mc }) {
              const x = ri(r, 2, 6), y = ri(r, 1, 5), k = 2 * x + 3 * y;
              return mc(r, 6, 2, `若 (x, y) = (${x}, ${y}) 滿足 2x + 3y = ${k}，則 2x + 3y 的值為？`, `${k}`, [`${k + 1}`, `${x + y}`, `${2 * x + y}`], [`(x,y)=(${x},${y}) 代入 2x+3y。`, `2×${x}+3×${y}=${k}。`], "已知解代入方程式，左式值等於右式常數。", "解代入後應使等式成立。")
            }
          },
          {
            id: "two-variable-integer-solutions",
            title: "二元一次方程式的整數解",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { eq: "x + y = 7", pair: "(3, 4)", wrong: ["(3.5, 3.5)", "(7, 0.5)", "(2, 6.5)"] },
                { eq: "2x + y = 10", pair: "(3, 4)", wrong: ["(3, 5)", "(4, 3)", "(2.5, 5)"] }
              ]);
              return mc(r, 6, 2, `下列哪一組是 ${item.eq} 的整數解？`, item.pair, item.wrong, [`整數解：x、y 皆為整數且代入成立。`, `代入 ${item.pair} 符合 ${item.eq}。`], "整數解要同時滿足「是整數」與「代入成立」。", "代入成立但非整數，不算整數解。")
            }
          },
          {
            id: "two-variable-equation-word-application",
            title: "二元一次方程式的列式與應用",
            template({ r, mc }) {
              return mc(r, 6, 2, "甲數比乙數多 4，設甲數為 x、乙數為 y，可列何者？", `x = y + 4`, [`x = y − 4`, `x + y = 4`, `y = x + 4`], [`甲比乙多 4 → 甲 = 乙 + 4。`, `即 x = y + 4。`], "「A 比 B 多 k」→ A = B + k。", "多 4 是加在較小的那個上。")
            }
          }
        ]
      },
      {
        title: "解二元一次聯立方程式與應用問題",
        topics: [
          {
            id: "linear-system-concept",
            title: "二元一次聯立方程式",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { correct: "x + y = 5\n2x − y = 1", wrong: ["x + y = 5", "2x − y", "x + y > 5"] },
                { correct: "3x + 2y = 12\nx − y = 3", wrong: ["3x + 2y = 12", "x − y = 3\nx − y = 4", "x² + y = 3"] }
              ]);
              return mc(r, 6, 1, "下列哪一組是二元一次聯立方程式？", item.correct, item.wrong, [`聯立方程式 = 兩個以上的一次方程式共同求解。`, `需兩式皆為二元一次方程式。`], "聯立要兩個（或以上）方程式同時成立。", "單一式子或不等式不是聯立方程式。")
            }
          },
          {
            id: "linear-system-solution-concept",
            title: "二元一次聯立方程式的解",
            template({ r, ri, mc }) {
              const x = ri(r, 2, 7), y = ri(r, 1, 6);
              return mc(r, 6, 1, `若 (x, y) = (${x}, ${y}) 同時滿足兩式 x + y = ${x + y} 與 x − y = ${x - y}，則此聯立方程式的解為？`, `(${x}, ${y})`, [`(${y}, ${x})`, `(${x + 1}, ${y})`, `(${x}, ${y + 1})`], [`聯立方程式的解是同時使兩式成立的 (x,y)。`, `即 (${x}, ${y})。`], "解是有序對，需同時代入兩式都成立。", "只滿足一式不算聯立解。")
            }
          },
          {
            id: "solve-linear-system",
            title: "解二元一次聯立方程式",
            template({ r, ri, mc }) {
              const x = ri(r, 2, 8), y = ri(r, 1, 7), s = x + y, d = 2 * x - y;
              return mc(r, 6, 2, `解聯立方程式\nx + y = ${s}\n2x − y = ${d}`, `(${x}, ${y})`, [`(${y}, ${x})`, `(${x + 1}, ${y - 1})`, `(${x - 1}, ${y + 1})`], [`兩式相加消去 y：3x = ${s + d}，x = ${x}。`, `代回 x + y = ${s}，y = ${y}。`], "加減消去法：先消去一個未知數，再回代。", "解的顺序是 (x,y)，不要对调。")
            }
          },
          {
            id: "special-linear-system",
            title: "特殊型聯立方程式的解法",
            template({ r, ri, mc }) {
              const x = ri(r, 2, 7), y = ri(r, 1, 6), s = x + y;
              return mc(r, 6, 2, `解聯立方程式\ny = ${y}\nx + y = ${s}`, `(${x}, ${y})`, [`(${y}, ${x})`, `(${x}, ${s})`, `(${x + 1}, ${y})`], [`第一式已給 y = ${y}，直接代入第二式。`, `x + ${y} = ${s}，所以 x = ${x}。`], "某未知數係數為 1 或已單獨解出 → 代入法最快。", "代入後只解一次方程。")
            }
          },
          {
            id: "system-word-problem-steps",
            title: "解應用問題的步驟",
            template({ r, mc }) {
              return mc(r, 6, 1, "解二元一次聯立應用問題時，通常需要幾個獨立的等量關係式？", "2 個", ["1 個", "3 個", "不限個數"], [`兩個未知數需要兩個獨立方程式才能定解。`, `因此需要 2 個等量關係。`], "聯立應用題：2 未知數 → 2 式。", "一個關係式只能消去一個自由度，無法定解。")
            }
          },
          {
            id: "system-solution-parameter",
            title: "方程式的解與求值問題",
            template({ r, ri, mc }) {
              const x = ri(r, 2, 6), y = ri(r, 1, 5), a = ri(r, 2, 4);
              const c = a * x + y;
              return mc(r, 6, 2, `若 (x, y) = (${x}, ${y}) 是 ax + y = ${c} 的解，則 a =？`, `${a}`, [`${a + 1}`, `${x + y}`, `${c}`], [`代入 x=${x}、y=${y}：a×${x}+${y}=${c}。`, `${a * x}+${y}=${c}，所以 a=${a}。`], "已知解求係數：代入後解一次方程。", "a 是係數，不是 x 或 y。")
            }
          },
          {
            id: "system-discount-problem",
            title: "折扣問題",
            template({ r, ri, mc }) {
              const x = ri(r, 80, 120), y = ri(r, 60, 100), total = x + y;
              return mc(r, 6, 2, `兩件商品原價各 x、y 元，合買打九折後付 ${Math.round(total * 0.9)} 元，可列何者？`, `0.9(x + y) = ${Math.round(total * 0.9)}`, [`x + y = ${Math.round(total * 0.9)}`, `0.9x + y = ${Math.round(total * 0.9)}`, `x + y = ${total * 0.9}`], [`合買打九折：0.9×(x+y)。`, `0.9(${x}+${y})=0.9×${total}=${Math.round(total * 0.9)}。`], "整筆折扣：先加總再乘折扣率。", "不要只对其中一件打折。")
            }
          },
          {
            id: "system-quantity-problem",
            title: "數量問題",
            template({ r, ri, mc }) {
              const x = ri(r, 5, 12), y = ri(r, 3, 10), heads = x + y, legs = 2 * x + 4 * y;
              return mc(r, 6, 2, `雞 x 隻、兔 y 隻，共有 ${heads} 隻、${legs} 腳，可列哪一組聯立方程式？`, `x + y = ${heads}\n2x + 4y = ${legs}`, [`x + y = ${legs}\n2x + 4y = ${heads}`, `2x + 2y = ${heads}\n4x + 4y = ${legs}`, `x + 2y = ${heads}\n2x + y = ${legs}`], [`總隻數：x + y = ${heads}。`, `雞 2 腳、兔 4 腳：2x + 4y = ${legs}。`], "雞兔問題：一式數量、一式腳數。", "雞也是 2 腳，不是 1 腳。")
            }
          },
          {
            id: "system-digit-problem",
            title: "數字運算問題",
            template({ r, ri, mc }) {
              const tens = ri(r, 2, 7), ones = ri(r, 1, 8), sum = tens + ones;
              return mc(r, 6, 2, `兩位數的十位數字 x、個位數字 y，數字和為 ${sum}，可列何者？`, `x + y = ${sum}`, [`10x + y = ${sum}`, `x + 10y = ${sum}`, `xy = ${sum}`], [`數字和 = 十位 + 個位。`, `x + y = ${sum}。`], "數字和用 x+y；數值本身用 10x+y。", "不要混淆「數字和」與「兩位數的值」。")
            }
          },
          {
            id: "system-rate-problem",
            title: "速率問題",
            template({ r, ri, mc }) {
              const x = ri(r, 4, 8), y = ri(r, 3, 7), hours = 2, dist = 2 * (x + y);
              return mc(r, 6, 2, `甲乙相距 ${dist} 公里，同時相向而行，甲速 x km/h、乙速 y km/h，${hours} 小時相遇，可列何者？`, `${hours}(x + y) = ${dist}`, [`${hours}(x − y) = ${dist}`, `x + y = ${dist}`, `${hours}x = ${dist}`], [`相向而行：相對速率 x+y。`, `${hours} 小時走 ${hours}(x+y) = ${dist} 公里。`], "相向：距離 = 時間×(甲速+乙速)。", "同向或追及要用速率差，不是相加。")
            }
          }
        ]
      }
    ]
  },
  "g7-2-c2": {
    source: "使用者提供：教育部課綱對照國一「直角坐標與二元一次方程式的圖形」二主題題型表（2026-07 更新；對應國一下第二單元 g7-2-c2）。",
    sections: [
      {
        title: "直角坐標平面",
        topics: [
          {
            id: "coordinate-plane",
            title: "直角坐標平面",
            template({ r, mc }) {
              return mc(r, 7, 1, "直角坐標平面是由哪兩條互相垂直的數線所構成？", "x 軸與 y 軸", ["x 軸與 x 軸", "y 軸與 y 軸", "原點與 x 軸"], [`水平數線為 x 軸，垂直數線為 y 軸，兩者互相垂直。`, `交點為原點 O。`], "坐標平面 = x 軸 + y 軸（互相垂直）。", "原點是交點，不是構成平面的數線本身。")
            }
          },
          {
            id: "point-coordinates",
            title: "坐標平面上點的坐標",
            template({ r, ri, mc, signed }) {
              const x = ri(r, -5, 5), y = ri(r, -5, 5);
              return mc(r, 7, 1, `點 P 在 x 軸右方 ${Math.abs(x)} 單位、y 軸${y >= 0 ? "上方" : "下方"} ${Math.abs(y)} 單位，則 P 的坐標為？`, `(${signed(x)}, ${signed(y)})`, [`(${signed(y)}, ${signed(x)})`, `(${signed(-x)}, ${signed(y)})`, `(${signed(x)}, ${signed(-y)})`], [`先走 x：${signed(x)}；再走 y：${signed(y)}。`, `坐標為 (${signed(x)}, ${signed(y)})。`], "坐標 (x,y)：先 x 後 y。", "不要對調 x、y 的順序。")
            }
          },
          {
            id: "distance-to-axes",
            title: "點到兩軸的距離",
            template({ r, pick, mc, signed }) {
              const item = pick(r, [
                { x: 3, y: -4, ans: "4" },
                { x: -5, y: 2, ans: "2" },
                { x: 2, y: 6, ans: "6" }
              ]);
              return mc(r, 7, 1, `點 (${signed(item.x)}, ${signed(item.y)}) 到 x 軸的距離是多少？`, item.ans, [`${Math.abs(item.x)}`, `${signed(item.y)}`, `${Math.abs(item.x) + Math.abs(item.y)}`], [`到 x 軸的距離 = |y|。`, `|${signed(item.y)}|=${item.ans}。`], "到 x 軸距離 = |y|；到 y 軸距離 = |x|。", "到 x 軸距離不是 x 坐標。")
            }
          },
          {
            id: "point-translation",
            title: "點的平移",
            template({ r, ri, mc, signed }) {
              const x = ri(r, -3, 5), y = ri(r, -3, 5), h = ri(r, 1, 4), k = ri(r, 1, 4);
              const nx = x + h, ny = y + k;
              return mc(r, 7, 1, `點 (${signed(x)}, ${signed(y)}) 向右平移 ${h} 單位、向上平移 ${k} 單位，新坐標為？`, `(${signed(nx)}, ${signed(ny)})`, [`(${signed(x - h)}, ${signed(y + k)})`, `(${signed(nx)}, ${signed(y)})`, `(${signed(x)}, ${signed(ny)})`], [`向右 +h：x 變 ${signed(x)}+${h}=${signed(nx)}。`, `向上 +k：y 變 ${signed(y)}+${k}=${signed(ny)}。`], "平移：右加左減 x，上加下減 y。", "向上是 y 增加，不是 x 增加。")
            }
          },
          {
            id: "quadrant",
            title: "象限",
            template({ r, pick, mc, signed }) {
              const item = pick(r, [
                { p: "(-3, 4)", q: "第二象限" },
                { p: "(2, -5)", q: "第四象限" },
                { p: "(-2, -1)", q: "第三象限" }
              ]);
              return mc(r, 7, 1, `點 ${item.p} 在第幾象限？`, item.q, ["第一象限", item.q === "第二象限" ? "第四象限" : "第二象限", "不在任何象限"], [`看 x、y 的正負：${item.p}。`, `位於${item.q}。`], "象限：I(+,+)、II(−,+)、III(−,−)、IV(+,−)。", "在軸上的點不屬於任何象限。")
            }
          },
          {
            id: "point-and-axes-distances",
            title: "點與兩軸的距離",
            template({ r, mc, signed }) {
              return mc(r, 7, 1, `點 (−4, 3) 到 y 軸、x 軸的距離依序為何？`, "4、3", ["3、4", "−4、3", "4、−3"], [`到 y 軸距離 = |x| = |−4| = 4。`, `到 x 軸距離 = |y| = |3| = 3。`, `依序為 4、3。`], "到 y 軸看 |x|；到 x 軸看 |y|。", "題目問依序，先 y 軸後 x 軸要對應清楚。")
            }
          },
          {
            id: "coincident-points",
            title: "點的重合",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { same: "(2, −1) 與 (2, −1)", ans: "重合" },
                { same: "(3, 4) 與 (4, 3)", ans: "不重合" }
              ]);
              return mc(r, 7, 1, `點 ${item.same} 是否重合？`, item.ans, [item.ans === "重合" ? "不重合" : "重合", "無法判斷", "條件不足"], [`兩點重合 ⟺ x、y 坐標都相同。`, `所以${item.ans}。`], "重合：x 相同且 y 相同。", "(3,4) 與 (4,3) 只是數字相同，坐標不同。")
            }
          },
          {
            id: "point-position-identification",
            title: "點的位置的判別",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { p: "(0, 5)", ans: "在 y 軸上", wrong: ["在 x 軸上", "在第一象限", "在原點"] },
                { p: "(−3, 0)", ans: "在 x 軸上", wrong: ["在 y 軸上", "在第二象限", "在原點"] }
              ]);
              return mc(r, 7, 1, `點 ${item.p} 的位置為何？`, item.ans, item.wrong, [`x=0 在 y 軸；y=0 在 x 軸；皆 0 在原點。`, `${item.p} → ${item.ans}。`], "判別位置先看是否 x=0 或 y=0。", "在軸上的點不屬於象限。")
            }
          },
          {
            id: "polygon-area-from-points",
            title: "點所連成圖形的面積",
            template({ r, mc }) {
              return mc(r, 7, 2, `O(0,0)、A(4,0)、B(4,3) 圍成直角三角形，面積為多少？`, "6", ["12", "7", "5"], [`底 OA=4，高 AB=3（垂直 x 軸）。`, `面積 = 底×高÷2 = 4×3÷2 = 6。`], "在坐標平面上，先找底與對應高。", "矩形面積是長×寬；三角形要除以 2。")
            }
          }
        ]
      },
      {
        title: "二元一次方程式的圖形",
        topics: [
          {
            id: "linear-equation-graph",
            title: "二元一次方程式的圖形",
            template({ r, mc }) {
              return mc(r, 7, 1, "二元一次方程式 ax + by = c（a、b 不全為 0）的圖形是什麼？", "一條直線", ["一個點", "一條射線", "整個平面"], [`二元一次方程式的解有無窮多組，在平面上排成一直線。`, `圖形是一條直線。`], "ax+by=c 的圖形是直線。", "一個點只對應一組解，不足以表示整條線。")
            }
          },
          {
            id: "linear-graph-type",
            title: "二元一次方程式圖形的類型",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { eq: "x = 3", type: "平行 y 軸的直線", wrong: ["平行 x 軸的直線", "通過原點的直線", "不是直線"] },
                { eq: "y = −2", type: "平行 x 軸的直線", wrong: ["平行 y 軸的直線", "通過原點的直線", "不是直線"] }
              ]);
              return mc(r, 7, 1, `方程式 ${item.eq} 的圖形為何？`, item.type, item.wrong, [`${item.eq} 中某一未知數固定。`, `圖形是${item.type}。`], "x=常數 → 垂直線；y=常數 → 水平線。", "x=3 是垂直線，不是水平線。")
            }
          },
          {
            id: "line-through-two-points",
            title: "求過相異兩點的直線方程式",
            template({ r, mc }) {
              return mc(r, 7, 2, "過 (1, 2) 與 (3, 6) 的直線方程式為何？", "y = 2x", ["y = x + 1", "y = 3x − 1", "x + y = 3"], [`斜率 = (6−2)/(3−1) = 2。`, `y − 2 = 2(x − 1)，化簡得 y = 2x。`], "兩點決定一直線；先求斜率再寫式。", "先確認兩點不重合。")
            }
          },
          {
            id: "linear-system-graph",
            title: "二元一次聯立方程式的圖形",
            template({ r, mc }) {
              return mc(r, 7, 1, "二元一次聯立方程式的圖形解，對應到平面上是什麼？", "兩直線的交點", ["兩直線的平行距離", "其中一條直線", "原點"], [`聯立解需同時滿足兩式 → 在兩線上。`, `即兩直線的交點。`], "聯立解 = 兩線交點坐標。", "無解時兩線平行（或重合）。")
            }
          },
          {
            id: "point-on-line-evaluate",
            title: "點在直線上的求值問題",
            template({ r, ri, mc, signed }) {
              const x = ri(r, 1, 5), y = 2 * x + 1;
              return mc(r, 7, 2, `直線 y = 2x + 1 上，x = ${x} 時，y =？`, `${y}`, [`${x + 1}`, `${2 * x}`, `${y + 1}`], [`代入 x = ${x}：y = 2×${x}+1。`, `y = ${y}。`], "点在線上：把已知坐標代入方程式。", "先代入 x 求 y，不要對調。")
            }
          },
          {
            id: "line-axis-intercepts",
            title: "直線與兩軸的交點",
            template({ r, mc, signed }) {
              return mc(r, 7, 2, "直線 2x + y = 6 與 x 軸、y 軸的交點依序為何？", "(3, 0)、(0, 6)", ["(0, 3)、(6, 0)", "(6, 0)、(0, 3)", "(2, 0)、(0, 4)"], [`x 截距：令 y=0，2x=6，x=3 → (3,0)。`, `y 截距：令 x=0，y=6 → (0,6)。`], "x 截距令 y=0；y 截距令 x=0。", "交點坐標是 (x,y)，不要只寫一個數。")
            }
          },
          {
            id: "find-line-equation",
            title: "求直線方程式",
            template({ r, ri, mc, signed }) {
              const x1 = ri(r, 1, 3), y1 = ri(r, 1, 4), m = ri(r, 2, 3);
              const b = y1 - m * x1;
              const eq = b >= 0 ? `y = ${m}x + ${b}` : `y = ${m}x − ${Math.abs(b)}`;
              return mc(r, 7, 2, `斜率 ${m}，且過 (${x1}, ${y1}) 的直線方程式為何？`, eq, [`y = ${m}x + ${b + 1}`, `y = ${m + 1}x + ${b}`, `y = ${m}x`], [`代入 (${x1},${y1})：${y1}=${m}×${x1}+b，b=${b}。`, `方程式為 ${eq}。`], "y=mx+b：先代斜率 m，再用一點求 b。", "b 是 y 截距，不是 x 截距。")
            }
          },
          {
            id: "line-equation-application",
            title: "求直線方程式與應用",
            template({ r, mc }) {
              return mc(r, 7, 2, "某計程車起跳 50 元，每公里 15 元。設走 x 公里、總費 y 元，可列何者？", "y = 15x + 50", ["y = 50x + 15", "y = 15x", "y = 50x"], [`每公里 15 元 → 15x；起跳 50 元 → 常數項 50。`, `y = 15x + 50。`], "固定費 + 單價×用量 → y = kx + b。", "起跳費只收一次，不能乘 x。")
            }
          },
          {
            id: "two-lines-intersection",
            title: "兩直線相交的問題",
            template({ r, mc }) {
              return mc(r, 7, 2, "直線 x + y = 5 與 x − y = 1 的交點為何？", "(3, 2)", ["(2, 3)", "(4, 1)", "(1, 4)"], [`兩式相加：2x = 6，x = 3。`, `代回 x + y = 5，y = 2。`, `交點 (3, 2)。`], "交點 = 聯立解，可用加減消去法。", "解是有序對 (x,y)。")
            }
          },
          {
            id: "system-graph-evaluate",
            title: "聯立方程式圖形的求值問題",
            template({ r, mc }) {
              return mc(r, 7, 2, "兩直線 y = x + 1 與 y = −x + 5 的交點 x 坐標為何？", "2", ["1", "3", "4"], [`聯立 x+1 = −x+5。`, `2x = 4，x = 2。`], "圖形求交點 = 聯立解方程式。", "題目只問 x，解出 x 即可。")
            }
          },
          {
            id: "graph-quadrant-identification",
            title: "方程式圖形與象限的判別",
            template({ r, mc }) {
              return mc(r, 7, 2, "直線 y = −2x + 4 必不會通過哪一象限？", "第三象限", ["第一象限", "第二象限", "第四象限"], [`x=0 時 y=4（y 截距正）；y=0 時 x=2（x 截距正）。`, `直線連接第一、二、四象限部分，不經第三象限。`], "看 x、y 截距正負，可判斷直線經過哪些象限。", "第三象限 x、y 皆負；此線 x、y 截距皆正，不會進入第三象限。")
            }
          }
        ]
      }
    ]
  },
  "g7-2-c3": {
    source: "使用者提供：教育部課綱對照國一「比例」二主題題型表（2026-07 更新；對應國一下第三單元 g7-2-c3）。",
    sections: [
      {
        title: "比與比例式",
        topics: [
          {
            id: "ratio-and-value",
            title: "比與比值",
            template({ r, pick, mc, frac, over }) {
              const item = pick(r, [
                { ratio: "6 : 4", value: frac(3, 2), wrong: [frac(2, 3), "6", "4"] },
                { ratio: "15 : 10", value: frac(3, 2), wrong: [frac(2, 3), "15", "10"] }
              ]);
              return mc(r, 8, 1, `${item.ratio} 的比值為何？`, item.value, item.wrong, [`比值 = 前項÷後項。`, `${item.ratio} 的比值 = ${item.value}。`], "比 a:b 的比值是 a÷b。", "比值是商，不是比本身。")
            }
          },
          {
            id: "equal-ratios",
            title: "相等的比",
            template({ r, mc }) {
              return mc(r, 8, 1, "下列哪一組比與 2 : 3 相等？", "4 : 6", ["3 : 2", "4 : 5", "6 : 8"], [`2 : 3 = 4 : 6（前後項同乘 2）。`, `比值皆為 2/3。`], "相等的比：前後項同乘或同除同一非 0 數。", "3:2 是 2:3 的倒比，不相等。")
            }
          },
          {
            id: "ratio-properties",
            title: "比的性質",
            template({ r, mc }) {
              return mc(r, 8, 1, "若 a : b = 3 : 4，且 a = 15，則 b =？", "20", ["12", "16", "18"], [`a : b = 3 : 4 → a/b = 3/4。`, `15/b = 3/4，b = 20。`], "相等的比可寫成 a/b = c/d 再求解。", "不要只加減 5；要用比例關係。")
            }
          },
          {
            id: "simplest-integer-ratio",
            title: "最簡整數比",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { raw: "12 : 18", ans: "2 : 3" },
                { raw: "20 : 15", ans: "4 : 3" }
              ]);
              return mc(r, 8, 1, `${item.raw} 化成最簡整數比為何？`, item.ans, ["6 : 9", "1 : 1", "3 : 2"], [`找前後項最大公因數再同除。`, `${item.raw} → ${item.ans}。`], "最簡整數比：前後項互質。", "化簡要前後項同除，不能只除一項。")
            }
          },
          {
            id: "proportion",
            title: "比例式",
            template({ r, mc }) {
              return mc(r, 8, 1, "若 2 : 3 = 8 : x，此關係用比例式如何表示？", "2 : 3 = 8 : x", ["2 : 8 = 3 : x", "2 + 3 = 8 + x", "2 × 3 = 8 × x"], [`四個數成比例，可寫成 a : b = c : d。`, `即 2 : 3 = 8 : x。`], "比例式：兩個相等的比用等號連接。", "比例式不是把比加起來。")
            }
          },
          {
            id: "proportion-properties",
            title: "比例式的性質",
            template({ r, mc }) {
              return mc(r, 8, 1, "若 a : b = c : d，則下列何者正確？", "ad = bc", ["ab = cd", "a + d = b + c", "ac = bd"], [`比例式內項積 = 外項積。`, `ad = bc。`], "a:b=c:d ⟺ ad=bc（交叉相乘）。", "交叉相乘是外項×外項 = 內項×內項。")
            }
          },
          {
            id: "ratio-arithmetic",
            title: "比的運算",
            template({ r, mc }) {
              return mc(r, 8, 1, "將 120 元依 2 : 3 分配，較小的一份是多少元？", "48", ["60", "72", "40"], [`總份數 2+3=5；每份 120÷5=24。`, `較小的一份 2 份 = 48 元。`], "按比分配：先算總份數，再求每份。", "2:3 不是一人 2 元一人 3 元。")
            }
          },
          {
            id: "proportion-arithmetic",
            title: "比例式的運算",
            template({ r, mc }) {
              return mc(r, 8, 1, "若 3 : 4 = x : 20，則 x =？", "15", ["12", "16", "18"], [`內項積 = 外項積：4x = 3×20 = 60。`, `x = 15。`], "比例式求未知：交叉相乘。", "3:4 = x:20 中 x 是外項，不是 3+4。")
            }
          },
          {
            id: "ratio-application",
            title: "比的應用問題",
            template({ r, ri, mc, over }) {
              const total = ri(r, 5, 8) * 10, small = 2, large = 3;
              const ans = total * small / (small + large);
              return mc(r, 8, 2, `紅藍彈珠數比 ${small}:${large}，共 ${total} 顆，紅色彈珠幾顆？`, `${ans}`, [`${total - ans}`, `${total / 2}`, `${ans + 10}`], [`總份數 ${small + large}；紅色占 ${small} 份。`, `${total}×${over(small, small + large)}=${ans} 顆。`], "比的应用：總量×（該部分份數÷總份數）。", "先求總份數，再乘總量。")
            }
          },
          {
            id: "proportion-application",
            title: "比例式的應用問題",
            template({ r, pick, mc }) {
              const scale = pick(r, [50000, 100000]), cm = pick(r, [3, 4, 5]), km = cm * scale / 100000;
              return mc(r, 8, 2, `地圖比例尺 1：${scale.toLocaleString("zh-TW")}，圖上 ${cm} 公分，實際距離多少公里？`, `${km} 公里`, [`${cm * scale / 1000} 公里`, `${km * 10} 公里`, `${km / 10} 公里`], [`實際 = ${cm}×${scale} 公分 = ${cm * scale}。`, `換算成公里：${km} 公里。`], "比例尺：圖上：實際 = 1：n。", "1 公里 = 100,000 公分。")
            }
          },
          {
            id: "ratio-proportion-comprehensive",
            title: "比與比例式的綜合應用",
            template({ r, mc, frac, over }) {
              return mc(r, 8, 2, "某班男女生人數比 5 : 4，男生 25 人，全班多少人？", "45", ["36", "40", "50"], [`5 份 = 25 人 → 1 份 = 5 人。`, `全班 5+4=9 份 = 45 人。`], "已知一部分可先求每份，再求總量。", "不要只加 5+4 當人數。")
            }
          }
        ]
      },
      {
        title: "正比與反比",
        topics: [
          {
            id: "direct-proportion",
            title: "正比",
            template({ r, mc }) {
              return mc(r, 8, 1, "y 與 x 成正比，且 y/x 固定為 3，則 y 與 x 的關係為？", "y = 3x", ["y = x + 3", "y = 3/x", "xy = 3"], [`正比：y = kx，k = y/x = 3。`, `所以 y = 3x。`], "正比：y = kx（k 為常數）。", "正比是乘積關係，不是加 3。")
            }
          },
          {
            id: "inverse-proportion",
            title: "反比",
            template({ r, mc }) {
              return mc(r, 8, 1, "y 與 x 成反比，且 xy 固定為 24，則 y 與 x 的關係為？", "y = 24/x", ["y = 24x", "y = x − 24", "y = x + 24"], [`反比：xy = k，k = 24。`, `所以 y = 24/x。`], "反比：xy = k（k 為常數）。", "反比是乘積固定，不是相減固定。")
            }
          },
          {
            id: "identify-proportion-from-formula",
            title: "由式子判別正比和反比",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { f: "y = 5x", ans: "正比", wrong: ["反比", "都不是", "無法判別"] },
                { f: "y = 18/x", ans: "反比", wrong: ["正比", "都不是", "無法判別"] }
              ]);
              return mc(r, 8, 1, `式子 ${item.f} 表示 y 與 x 成何種關係？`, item.ans, item.wrong, [`正比形如 y=kx；反比形如 y=k/x 或 xy=k。`, `${item.f} → ${item.ans}。`], "y=kx → 正比；xy=k → 反比。", "y=kx+b 有常數項，一般不是正比。")
            }
          },
          {
            id: "identify-proportion-from-word",
            title: "由文字敘述判別正比和反比",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { q: "固定速度下，路程與時間的關係", ans: "正比" },
                { q: "固定工作量下，工人數與完成天數的關係", ans: "反比" }
              ]);
              return mc(r, 8, 1, item.q, item.ans, [item.ans === "正比" ? "反比" : "正比", "都不是", "無法判別"], [`分析兩量同增同減還是一增一減。`, `此為${item.ans}關係。`], "同向變化常是正比；反向變化常是反比。", "要確認其他條件（如速度、總量）固定。")
            }
          },
          {
            id: "direct-proportion-evaluate",
            title: "正比的求值問題",
            template({ r, ri, mc }) {
              const k = ri(r, 2, 6), x = ri(r, 3, 9), y = k * x;
              return mc(r, 8, 2, `y 與 x 成正比，且 x = 2 時 y = ${2 * k}，則 x = ${x} 時 y =？`, `${y}`, [`${y + k}`, `${k + x}`, `${y - 1}`], [`先求 k：y/x = ${2 * k}/2 = ${k}。`, `x = ${x} 時 y = ${k}×${x} = ${y}。`], "正比先求比例常數 k，再代入。", "k 是 y/x，不是 y−x。")
            }
          },
          {
            id: "inverse-proportion-evaluate",
            title: "反比的求值問題",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { x1: 3, y1: 8, k: 24, x2: 6, y2: 4 },
                { x1: 4, y1: 5, k: 20, x2: 10, y2: 2 }
              ]);
              return mc(r, 8, 2, `y 與 x 成反比，x = ${item.x1} 時 y = ${item.y1}，則 x = ${item.x2} 時 y =？`, `${item.y2}`, [`${item.y1}`, `${item.y2 + 1}`, `${item.k}`], [`xy = ${item.k}（固定）。`, `x = ${item.x2} 時 y = ${item.k}/${item.x2} = ${item.y2}。`], "反比：先求 xy 的固定值 k。", "x 變大時 y 變小。")
            }
          },
          {
            id: "direct-inverse-application",
            title: "正比和反比的應用問題",
            template({ r, mc }) {
              return mc(r, 8, 2, "6 人 10 天完成的工作，若效率相同，15 人需幾天？", "4", ["6", "8", "25"], [`工作量固定 → 人數×天數固定。`, `6×10 = 15×d，d = 4 天。`], "固定工作量：人數與天數反比。", "人數變多，天數應變少。")
            }
          }
        ]
      }
    ]
  },
  "g7-2-c4": {
    source: "使用者提供：教育部課綱對照國一「一元一次不等式」二主題題型表（2026-07 更新；對應國一下第四單元 g7-2-c4）。",
    sections: [
      {
        title: "一元一次不等式",
        topics: [
          {
            id: "linear-inequality-concept",
            title: "一元一次不等式",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { correct: "2x + 3 > 7", wrong: ["2x + 3 = 7", "x² > 4", "2x + 3"] },
                { correct: "−x + 5 ≤ 2", wrong: ["x + y > 1", "5 ≥ 5", "−x + 5"] }
              ]);
              return mc(r, 9, 1, "下列哪一個是一元一次不等式？", item.correct, item.wrong, [`含一個未知數 x，最高次數 1，且有不等號。`, `${item.correct} 符合。`], "一元一次不等式：一個 x、一次、有 > ≥ < ≤。", "等式或無不等號的不是不等式。")
            }
          },
          {
            id: "inequality-word-association",
            title: "不等式列式的聯想",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { word: "至少 20 元", sym: "≥", ex: "x ≥ 20" },
                { word: "不超過 50 人", sym: "≤", ex: "x ≤ 50" }
              ]);
              return mc(r, 9, 1, `「${item.word}」列式時通常用哪個不等號？`, item.sym, [item.sym === "≥" ? ">" : "<", item.sym === "≥" ? "≤" : "≥", "="], [`「至少」含等號 → ≥；「不超過」含等號 → ≤。`, `例如 ${item.ex}。`], "至少→≥；至多/不超過→≤；超過→>；未滿→<。", "「至少」要含等號，不是 >。")
            }
          },
          {
            id: "inequality-solution-concept",
            title: "一元一次不等式的解",
            template({ r, ri, mc }) {
              const x = ri(r, 2, 8);
              const ok = x + 1 > 5;
              return mc(r, 9, 1, `x = ${x} 是否為 x + 1 > 5 的解？`, ok ? "是" : "否", [ok ? "否" : "是", "無法判斷", "條件不足"], [`代入 x=${x}：左邊 ${x}+1=${x + 1}。`, `${x + 1}${ok ? ">" : "≤"}5，所以${ok ? "是" : "不是"}解。`], "解：代入後使不等式成立的 x 值。", "不是只有邊界值才算解。")
            }
          },
          {
            id: "inequality-properties",
            title: "不等式的運算性質",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { q: "若 a > b，則 a + 3 與 b + 3 的關係？", ans: "a + 3 > b + 3", wrong: ["a + 3 < b + 3", "a + 3 = b + 3", "無法比較"] },
                { q: "若 a > b，則 −2a 與 −2b 的關係？", ans: "−2a < −2b", wrong: ["−2a > −2b", "−2a = −2b", "無法比較"] }
              ]);
              return mc(r, 9, 1, item.q, item.ans, item.wrong, [`同加同減同一數，不等號方向不變。`, `同乘或同除負數，不等號要反向。`, `所以 ${item.ans}。`], "加減不變向；乘除負數要變向。", "乘以負數時立刻改不等號。")
            }
          },
          {
            id: "write-inequality",
            title: "列不等式",
            template({ r, ri, mc }) {
              const limit = ri(r, 15, 30);
              return mc(r, 9, 1, `某商品重量 x 公斤不得超過 ${limit} 公斤，可列何者？`, `x ≤ ${limit}`, [`x < ${limit}`, `x ≥ ${limit}`, `x = ${limit}`], [`「不得超過」含等號 → ≤。`, `x ≤ ${limit}。`], "列不等式前先抓關鍵字：超過、至少、不超過等。", "不得超過要含等號。")
            }
          },
          {
            id: "range-from-chart",
            title: "由圖表判別範圍",
            template({ r, mc }) {
              return mc(r, 9, 2, "某班段考成績可列為 60 ≤ x ≤ 100（x 為分數），下列哪個分數符合？", "85", ["55", "105", "45"], [`合格範圍 60 到 100（含兩端）。`, `85 在此範圍內。`], "圖表或條件給範圍時，檢查是否在界內。", "55、105 超出上下界。")
            }
          },
          {
            id: "inequality-property-application",
            title: "不等式運算性質的應用",
            template({ r, ri, mc, signed }) {
              const a = ri(r, 2, 5), b = ri(r, 1, 8), c = ri(r, 10, 20);
              const bound = (c - b) / a;
              return mc(r, 9, 2, `若 ${a}x + ${b} > ${c}，則 x 的範圍為？`, `x > ${bound}`, [`x < ${bound}`, `x ≥ ${bound}`, `x ≤ ${bound}`], [`兩邊減 ${b}：${a}x > ${c - b}。`, `兩邊除以正數 ${a}：x > ${bound}。`], "移項、除以正係數時不等號不變。", "除以負數才要變向。")
            }
          }
        ]
      },
      {
        title: "解一元一次不等式與應用問題",
        topics: [
          {
            id: "solve-linear-inequality",
            title: "解一元一次不等式",
            template({ r, ri, mc, signed }) {
              const a = ri(r, 2, 5), bound = ri(r, -2, 5), b = ri(r, 1, 8), c = -a * bound + b;
              const ans = `x ≥ ${signed(bound)}`;
              return mc(r, 9, 2, `解不等式 ${signed(-a)}x + ${b} ≤ ${signed(c)}。`, ans, [`x ≤ ${signed(bound)}`, `x > ${signed(bound)}`, `x < ${signed(bound)}`], [`兩邊減 ${b}：${signed(-a)}x ≤ ${signed(c - b)}。`, `兩邊除以 ${signed(-a)}，不等號反向，得 ${ans}。`], "乘除負數時立刻反向。", "加減不會反向。")
            }
          },
          {
            id: "inequality-solution-number-line",
            title: "一元一次不等式解的圖示",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { ineq: "x > 3", circle: "空心圓", wrong: ["實心圓", "不標點", "叉號"] },
                { ineq: "x ≤ −2", circle: "實心圓", wrong: ["空心圓", "不標點", "叉號"] }
              ]);
              return mc(r, 9, 1, `${item.ineq} 在數線上，邊界點應畫成？`, item.circle, item.wrong, [`> 或 < 不含等號 → 空心圓；≥ 或 ≤ 含等號 → 實心圓。`, `${item.ineq} 的邊界用${item.circle}。`], "嚴格不等用空心；含等號用實心。", "方向與不等號一致：> 向右，< 向左。")
            }
          },
          {
            id: "inequality-word-problem-steps",
            title: "解應用問題的步驟",
            template({ r, mc }) {
              return mc(r, 9, 1, "解一元一次不等式應用問題時，列完不等式後下一步通常為何？", "解不等式並檢查是否符合題意", ["直接猜答案", "改列方程式", "不需檢查題意"], [`流程：設元 → 列不等式 → 解不等式 → 依題意取合理解。`, `列完式後要解出 x 的範圍。`], "不等式應用也要解式 + 檢查實際意義（如整數、非負）。", "有時解是不等式，不是單一數值。")
            }
          },
          {
            id: "inequality-graph-shading",
            title: "不等式解的圖示",
            template({ r, mc, signed }) {
              return mc(r, 9, 1, "x ≥ 2 在數線上的解，應向哪一側延伸？", "向右（含 2 的實心圓）", ["向左（含 2 的實心圓）", "只標 2 一點", "向兩側延伸"], [`x ≥ 2 表示 2 及比 2 大的數。`, `在 2 畫實心圓，向右延伸。`], "≥ 向大（右）延伸；≤ 向小（左）延伸。", "含等號要畫實心圓。")
            }
          },
          {
            id: "max-min-integer-solution",
            title: "不等式的最大或最小整數解",
            template({ r, pick, mc, signed }) {
              const item = pick(r, [
                { ineq: "x < 5.5", ans: "5", kind: "最大" },
                { ineq: "x > −2.3", ans: "−2", kind: "最小" }
              ]);
              return mc(r, 9, 2, `${item.ineq} 的${item.kind}整數解為？`, item.ans, [`${Number(item.ans) + 1}`, `${Number(item.ans) - 1}`, "0"], [`先畫解的範圍，再找${item.kind}整數。`, `${item.ineq} → ${item.kind}整數解 x = ${item.ans}。`], "最大整數解：小於邊界的最大整數；最小整數解相反。", "注意是否含等號。")
            }
          },
          {
            id: "reverse-from-solution",
            title: "由不等式的解逆推求值",
            template({ r, ri, mc, signed }) {
              const bound = ri(r, 2, 8), a = ri(r, 2, 5), b = ri(r, 1, 6);
              const c = a * bound + b;
              return mc(r, 9, 2, `若 x > ${bound} 是不等式 ${a}x + ${b} > c 的解，則 c =？`, `${c}`, [`${c + 1}`, `${b}`, `${a + b}`], [`解 x > ${bound} 表示 ${a}x + ${b} > ${a}×${bound}+${b}。`, `所以 c = ${c}。`], "由解的邊界反推：代入邊界值求常數。", "x > k 的邊界 k 通常來自等號成立點。")
            }
          },
          {
            id: "interval-problem",
            title: "區間問題",
            template({ r, ri, mc }) {
              const low = ri(r, 10, 20), high = low + ri(r, 5, 15);
              return mc(r, 9, 2, `某活動年齡限制為 ${low} 歲以上（含）且未滿 ${high} 歲，設年齡 x，可列何者？`, `${low} ≤ x < ${high}`, [`${low} < x ≤ ${high}`, `x > ${high}`, `x ≤ ${low}`], [`${low} 歲以上含 → x ≥ ${low}。`, `未滿 ${high} → x < ${high}。`, `合併 ${low} ≤ x < ${high}。`], "「含」用 ≥ 或 ≤；「未滿」用 <。", "上下界不要對調。")
            }
          },
          {
            id: "inequality-shopping",
            title: "購物問題",
            template({ r, ri, mc }) {
              const price = ri(r, 80, 150), budget = ri(r, 400, 600);
              const max = Math.floor(budget / price);
              return mc(r, 9, 2, `每本 ${price} 元，預算 ${budget} 元（可花完），最多買幾本？`, `${max} 本`, [`${max + 1} 本`, `${max - 1} 本`, `${Math.floor(budget / price) + 2} 本`], [`設買 x 本：${price}x ≤ ${budget}。`, `x ≤ ${budget / price}，最多 ${max} 本。`], "購物預算：單價×數量 ≤ 預算。", "最多買幾本要取整數且符合預算。")
            }
          },
          {
            id: "inequality-distribution",
            title: "分配問題",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { total: 50, per: 6, rem: 2, ans: 8 },
                { total: 58, per: 7, rem: 3, ans: 7 }
              ]);
              return mc(r, 9, 2, `糖果 ${item.total} 顆，分給每人至少 ${item.per} 顆，最後剩 ${item.rem} 顆，最多幾人？`, `${item.ans} 人`, [`${item.ans + 1} 人`, `${item.ans - 1} 人`, `${item.per} 人`], [`設 x 人：${item.per}x + ${item.rem} ≤ ${item.total}。`, `x ≤ ${(item.total - item.rem) / item.per}，最多 ${item.ans} 人。`], "分配：總量 ≥ 每人量×人數 + 剩餘。", "「至少每人」用 ≥ 列式。")
            }
          },
          {
            id: "inequality-decision",
            title: "決策問題",
            template({ r, mc }) {
              return mc(r, 9, 2, "方案 A：月費 300 元 + 每通 2 元；方案 B：月費 500 元 + 每通 1 元。通話幾通以上 B 較省？", "200 通以上", ["100 通以上", "150 通以上", "250 通以上"], [`300+2x < 500+x（B 較省）。`, `x > 200。`, `通話 200 通以上 B 較省。`], "決策：列兩方案費用不等式再解。", "「較省」是嚴格小於還是 ≤，依題意；本題 x>200。")
            }
          }
        ]
      }
    ]
  },
  "g7-2-c6": {
    source: "使用者提供：教育部課綱對照國一「線對稱與三視圖」二主題題型表（2026-07 更新；對應國一下第六單元 g7-2-c6）。",
    sections: [
      {
        title: "簡單圖形與垂直、平分",
        topics: [
          {
            id: "figure-notation",
            title: "點、線、角、多邊形的標記與對角線",
            template({ r, mc }) {
              return mc(r, 11, 1, "連接多邊形不相鄰兩頂點的線段稱為什麼？", "對角線", ["邊", "中線", "高"], [`對角線連接不相鄰頂點。`, `例如四邊形 AC 為對角線（A、C 不相鄰）。`], "邊連相鄰頂點；對角線連不相鄰頂點。", "中線、高是三角形術語，不是多邊形對角線。")
            }
          },
          {
            id: "perpendicular",
            title: "垂直",
            template({ r, mc }) {
              return mc(r, 11, 1, "兩直線相交成直角時，兩線的關係為何？", "互相垂直", ["互相平行", "重合", "無法判斷"], [`直角 = 90°。`, `兩直線互相垂直。`], "垂直 ⟺ 夾角 90°。", "看起來像垂直仍要確認已知條件。")
            }
          },
          {
            id: "perpendicular-foot",
            title: "垂線與垂足",
            template({ r, mc }) {
              return mc(r, 11, 1, "自點 P 向直線 L 作垂線，垂線與 L 的交點稱為什麼？", "垂足", ["對稱點", "中點", "角平分線"], [`垂線與 L 的交點是垂足。`, `P 到 L 的距離即 P 到垂足的線段長。`], "垂足是垂線與被垂直直線的交點。", "垂足不一定是線段中點。")
            }
          },
          {
            id: "point-to-line-distance",
            title: "點到直線的距離",
            template({ r, mc }) {
              return mc(r, 11, 1, "點到直線的距離是指哪一段的長度？", "點到直線的垂線段長", ["點到直線上任一點的線段長", "點到原點的距離", "直線的長度"], [`距離定義為最短長度，即垂直距離。`, `點到直線的垂線段長。`], "點到直線距離 = 垂直距離。", "任意斜線段通常比垂直距離長。")
            }
          },
          {
            id: "bisection-concept",
            title: "平分",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { q: "把線段分成相等的兩部分，稱為？", ans: "平分線段" },
                { q: "把角分成相等的兩部分，稱為？", ans: "平分角" }
              ]);
              return mc(r, 11, 1, item.q, item.ans, ["延長", "垂直", "對稱"], [`平分 = 分成兩個相等的部分。`, `所以是${item.ans}。`], "平分線段 / 平分角：兩部分相等。", "平分不是任意切割。")
            }
          },
          {
            id: "perpendicular-bisector",
            title: "垂直平分線",
            template({ r, mc }) {
              return mc(r, 11, 1, "同時垂直且平分一線段的直線稱為什麼？", "垂直平分線（中垂線）", ["角平分線", "高", "中線"], [`垂直且通過中點的直線 = 垂直平分線。`, `又稱中垂線。`], "垂直平分線：⊥ 線段且過中點。", "角平分線是平分角，不是平分線段。")
            }
          },
          {
            id: "angle-bisector",
            title: "角平分線",
            template({ r, mc }) {
              return mc(r, 11, 1, "把一個角分成兩個相等角的射線稱為什麼？", "角平分線", ["垂直平分線", "對角線", "高"], [`角平分線平分成兩個相等的角。`, `角平分線上的點到兩邊距離相等。`], "角平分線：分角為兩等份。", "不要和線段的垂直平分線混淆。")
            }
          },
          {
            id: "perp-bisector-property",
            title: "中垂線的性質",
            template({ r, mc }) {
              return mc(r, 11, 2, "點 P 到 A、B 兩點距離相等，則 P 必在何者上？", "線段 AB 的垂直平分線", ["角 A 的角平分線", "直線 AB", "線段 AB 的中點"], [`到兩端等距的點在垂直平分線上。`, `P 在 AB 的中垂線上。`], "垂直平分線上的點到兩端等距；逆命題也成立。", "在 AB 上不一定到 A、B 等距（除非是中點）。")
            }
          },
          {
            id: "segment-bisection",
            title: "線段的平分",
            template({ r, ri, mc }) {
              const len = ri(r, 4, 9) * 2, half = len / 2;
              return mc(r, 11, 1, `線段 AB 長 ${len}，M 為中點，則 AM =？`, `${half}`, [`${len}`, `${half + 1}`, `${half - 1}`], [`中點把線段分成兩等份。`, `AM = ${len}÷2 = ${half}。`], "線段中點：兩段相等。", "中點不是任意分割點。")
            }
          },
          {
            id: "angle-bisection",
            title: "角的平分",
            template({ r, ri, mc }) {
              const angle = ri(r, 4, 8) * 10;
              return mc(r, 11, 1, `∠A = ${angle}°，AD 平分 ∠A，則 ∠BAD =？`, `${angle / 2}°`, [`${angle}°`, `${angle / 2 + 10}°`, `${180 - angle}°`], [`角平分線分成兩個相等角。`, `∠BAD = ${angle}°÷2 = ${angle / 2}°。`], "角平分：兩個子角相等。", "平分後每個角是原角的一半。")
            }
          },
          {
            id: "segment-count-application",
            title: "線段個數的應用",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { n: 4, ans: "6" },
                { n: 5, ans: "10" }
              ]);
              return mc(r, 11, 2, `直線上 ${item.n} 個點（任兩點可連成線段），共可連成幾條線段？`, item.ans, [`${item.n}`, `${item.n * 2}`, `${item.n + 1}`], [`n 個點線段數 = n(n−1)/2。`, `${item.n}×${item.n - 1}/2 = ${item.ans}。`], "線段計數：組合 C(n,2) = n(n−1)/2。", "不要只算 n 或 n−1。")
            }
          }
        ]
      },
      {
        title: "線對稱與三視圖",
        topics: [
          {
            id: "line-symmetric-figure",
            title: "線對稱圖形",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { fig: "等腰三角形", ans: "是", why: "頂角平分線為對稱軸" },
                { fig: "一般的不等邊三角形", ans: "否", why: "不一定有對稱軸" }
              ]);
              return mc(r, 11, 1, `${item.fig} 是否為線對稱圖形？`, item.ans, [item.ans === "是" ? "否" : "是", "無法判斷", "一定是"], [`線對稱：沿某直線對折後能完全重合。`, `${item.why}。`], "線對稱圖形沿對稱軸對折後兩半重合。", "不是所有三角形都線對稱。")
            }
          },
          {
            id: "find-symmetric-point",
            title: "找到對稱點",
            template({ r, mc, signed }) {
              return mc(r, 11, 2, "點 A(2, 5) 關於 x 軸的對稱點為何？", "(2, −5)", ["(−2, 5)", "(2, 5)", "(−2, −5)"], [`關於 x 軸對稱：x 不變，y 變號。`, `(2, 5) → (2, −5)。`], "關於 x 軸：y 變號；關於 y 軸：x 變號。", "對稱後坐標順序仍是 (x,y)。")
            }
          },
          {
            id: "polygon-diagonals-symmetry",
            title: "常見多邊形的對角線與對稱軸",
            template({ r, mc }) {
              return mc(r, 11, 2, "正方形有幾條對稱軸？", "4 條", ["2 條", "1 條", "8 條"], [`正方形：2 條連對邊中點 + 2 條連對角。`, `共 4 條對稱軸。`], "正方形對稱軸：2 條水平垂直 + 2 條對角。", "對角線本身是對稱軸，但對角線條數≠對稱軸條數（矩形只有 2 條）。")
            }
          },
          {
            id: "view-concept",
            title: "視圖",
            template({ r, mc }) {
              return mc(r, 11, 1, "從特定方向觀察立體圖形所得到的平面圖形稱為什麼？", "視圖", ["展開圖", "對稱圖", "截面"], [`視圖是從某方向看去的投影輪廓。`, `例如正視圖、俯視圖。`], "視圖 = 從某方向看立體的平面圖。", "展開圖是攤平，不是視圖。")
            }
          },
          {
            id: "three-views",
            title: "三視圖",
            template({ r, mc }) {
              return mc(r, 11, 1, "三視圖通常包含哪三個方向的視圖？", "正視圖、俯視圖、側視圖", ["正視圖、斜視圖、展開圖", "俯視圖、對稱圖、截面圖", "正視圖、後視圖、透視圖"], [`三視圖：正（前）、俯（上）、側（側面）。`, `三者配合可還原立體。`], "三視圖 = 正視 + 俯視 + 側視。", "展開圖不是三視圖之一。")
            }
          },
          {
            id: "symmetric-segment-length",
            title: "對稱線段等長的應用",
            template({ r, mc }) {
              return mc(r, 11, 2, "等腰三角形 ABC（AB=AC）關於頂角 A 的對稱軸對折，B 與 C 重合，則 BC 被對稱軸如何？", "垂直平分", ["平分成不等兩段", "不相交", "延長"], [`對稱軸是 BC 的垂直平分線。`, `對折後 B、C 重合 → 軸垂直平分 BC。`], "等腰三角形頂角平分線、底邊中線、底邊高、對稱軸四線合一。", "對稱使對應線段等長。")
            }
          },
          {
            id: "symmetric-angle-equal",
            title: "對稱角相等的應用",
            template({ r, mc }) {
              return mc(r, 11, 2, "線對稱圖形中，對稱軸兩側對應的角有何關係？", "相等", ["互補", "互餘", "無固定關係"], [`對折重合 → 對應角相等。`, `對稱角相等。`], "線對稱：對應角相等、對應邊相等。", "互補是平角關係，不是對稱關係。")
            }
          },
          {
            id: "coordinate-point-symmetry",
            title: "坐標平面上點的對稱",
            template({ r, mc, signed }) {
              return mc(r, 11, 2, "點 (−3, 2) 關於 y 軸的對稱點為何？", "(3, 2)", ["(3, −2)", "(−3, −2)", "(−3, 2)"], [`關於 y 軸：x 變號，y 不變。`, `(−3, 2) → (3, 2)。`], "關於 y 軸：x → −x；關於 x 軸：y → −y。", "不要對調 x、y。")
            }
          },
          {
            id: "draw-three-views",
            title: "繪製三視圖",
            template({ r, mc }) {
              return mc(r, 11, 2, "繪製三視圖時，正視圖與俯視圖的哪個方向長度要一致？", "左右方向（長）", ["上下方向（高）", "前後方向（寬）", "斜向長度"], [`正視圖與俯視圖的左右寬度要對齊。`, `長度方向一致才能拼合。`], "正視↔俯視：長對齊；正視↔側視：高對齊；俯視↔側視：寬對齊。", "三視圖三方向長度要互相對應。")
            }
          },
          {
            id: "different-direction-views",
            title: "不同方向的視圖",
            template({ r, mc }) {
              return mc(r, 11, 2, "由上方往下看立體所得到的視圖稱為什麼？", "俯視圖", ["正視圖", "側視圖", "展開圖"], [`俯視 = 從上往下看。`, `得到俯視圖。`], "俯視圖 = 上→下；正視圖 = 前→後；側視圖 = 側面。", "方向不同，視圖不同。")
            }
          },
          {
            id: "three-view-application",
            title: "三視圖的活用題",
            template({ r, mc }) {
              return mc(r, 11, 2, "某立體的正視圖與俯視圖都是 2×2 的正方形，最少由幾個立方塊組成？", "4 個", ["2 個", "6 個", "8 個"], [`正視、俯視皆填滿 2×2 → 至少每欄 1 個。`, `最少 4 個立方塊可達成。`], "三視圖還原：取各視圖要求的最多層數。", "最少個數不一定等於體積最大。")
            }
          }
        ]
      }
    ]
  },
  "g7-2-c5": {
    source: "使用者提供：教育部課綱對照國一「統計圖表與資料分析」二主題題型表（2026-07 更新；對應國一下第五單元 g7-2-c5）。",
    sections: [
      {
        title: "統計圖表",
        topics: [
          {
            id: "contingency-frequency-table",
            title: "列聯表與次數分配表",
            template({ r, mc }) {
              return mc(r, 10, 1, "將資料依類別交叉分類（如性別×喜好）的表格稱為什麼？", "列聯表", ["次數分配表", "累積次數分配表", "相對次數分配表"], [`兩個（或多個）類別交叉 → 列聯表。`, `單一變量各組次數 → 次數分配表。`], "列聯表：分類變量交叉；次數分配表：同一變量分組計次。", "不要混淆列聯表與次數分配表。")
            }
          },
          {
            id: "histogram-frequency-polyline",
            title: "次數分配直方圖與次數分配折線圖",
            template({ r, mc }) {
              return mc(r, 10, 1, "以長條呈現各組次數，且長條相連的統計圖為何？", "次數分配直方圖", ["圓形圖", "次數分配折線圖", "列聯表"], [`直方圖用連續長條表各組次數。`, `折線圖以折線連接各組代表點。`], "直方圖：長條相連表次數；折線圖：折線連各組。", "折線圖長條不一定相連成面積。")
            }
          },
          {
            id: "cumulative-relative-frequency",
            title: "累積次數和相對次數與累積相對次數",
            template({ r, mc, frac, over }) {
              return mc(r, 10, 1, "某組次數 8、總次數 40，該組相對次數為何？", "20%", ["8%", "32%", "25%"], [`相對次數 = 組次數÷總次數。`, `8/40 = ${frac(1, 5)} = 20%。`], "相對次數常以百分比表示；累積相對次數由小到大累加。", "相對次數不是 8/40 的分子 8。")
            }
          },
          {
            id: "cumulative-frequency-tables",
            title: "累積次數分配表和相對次數分配表與累積相對次數分配表",
            template({ r, mc }) {
              return mc(r, 10, 1, "將各組相對次數由小到大逐組累加，得到的是哪種表？", "累積相對次數分配表", ["次數分配表", "列聯表", "相對次數分配表（非累積）"], [`相對次數逐組累加 → 累積相對次數。`, `做成累積相對次數分配表。`], "三表：次數、相對次數、累積（相對）次數。", "累積表最後一組應接近 100% 或 1。")
            }
          },
          {
            id: "cumulative-frequency-polyline-charts",
            title: "累積次數分配折線圖和相對次數分配折線圖與累積相對次數分配折線圖",
            template({ r, mc }) {
              return mc(r, 10, 1, "以折線表示累積次數變化的統計圖通常稱為什麼？", "累積次數分配折線圖（ogive）", ["次數分配直方圖", "圓形圖", "列聯表"], [`橫軸為組別上界，縱軸為累積次數。`, `折線連接各累積點。`], "累積次數（或累積相對次數）常用折線圖呈現。", "直方圖表各組次數，不是累積。")
            }
          },
          {
            id: "contingency-table-interpret",
            title: "列聯表的製作與判讀",
            template({ r, mc }) {
              return mc(r, 10, 2, "列聯表中，某格 12 表示什麼？", "同時屬於該列類別與該行類別的個數", ["總人數", "該列的總和", "該行的平均"], [`列聯表每一格是交叉分類的次數。`, `12 表示符合兩個類別的個數。`], "判讀列聯表：看列標、行標的交叉。", "列總和、行總和在邊緣，不是單格。")
            }
          },
          {
            id: "pie-chart-interpret",
            title: "圓形圖的判讀",
            template({ r, mc }) {
              return mc(r, 10, 2, "圓形圖中占 25% 的項目，圓心角為多少度？", "90°", ["45°", "180°", "25°"], [`圓心角 = 百分比×360°。`, `25%×360° = 90°。`], "圓心角 = 相對次數×360°。", "25% 不是 25°。")
            }
          },
          {
            id: "histogram-interpret",
            title: "直方圖的判讀",
            template({ r, mc }) {
              return mc(r, 10, 2, "次數分配直方圖中，最高長條所在的組別表示什麼？", "該組次數最多（可能為眾數所在組）", ["平均數一定在此組", "中位數一定在此組", "總次數"], [`長條高度代表該組次數。`, `最高長條 → 次數最多的組別。`], "直方圖讀次數：看長條高度。", "最高組不一定是平均數或中位數所在組。")
            }
          },
          {
            id: "line-chart-interpret",
            title: "折線圖的判讀",
            template({ r, mc }) {
              return mc(r, 10, 2, "折線圖中折線向上傾斜表示什麼？", "隨時間（或序號）增加，數值上升", ["次數一定最多", "相對次數為 100%", "資料沒有變化"], [`折線圖常用於看變化趨勢。`, `向上表示數值增加。`], "折線圖重點在趨勢，不是單點大小。", "下降段表示數值減少。")
            }
          },
          {
            id: "cross-chart-interpret",
            title: "兩種統計圖表的交互判讀",
            template({ r, mc }) {
              return mc(r, 10, 2, "同一資料用圓形圖與長條圖呈現，下列何者一定相同？", "各類別的相對次數（比例）", ["圓心角", "長條高度單位", "圖表面積"], [`不同圖表可呈現同一資料的不同面向。`, `各類別所占比例（相對次數）應一致。`], "交互判讀：抓共同量（次數、比例）。", "圓心角與長條高度數值不同，但比例應一致。")
            }
          }
        ]
      },
      {
        title: "平均數、中位數與眾數",
        topics: [
          {
            id: "mean",
            title: "平均數",
            template({ r, ri, mc, frac, over }) {
              const a = ri(r, 5, 12), b = ri(r, 6, 14), c = ri(r, 4, 10);
              const ans = frac(a + b + c, 3);
              return mc(r, 10, 1, `資料 ${a}、${b}、${c} 的平均數為何？`, ans, [frac(a + b + c, 2), `${a + b + c}`, frac(a + b, 3)], [`平均數 = 總和÷個數。`, `(${a}+${b}+${c})÷3 = ${ans}。`], "平均數 = 總和 / 資料個數。", "不要漏除個數。")
            }
          },
          {
            id: "median",
            title: "中位數",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { data: "3、7、9", ans: "7" },
                { data: "2、8、10、12", ans: "9" }
              ]);
              return mc(r, 10, 1, `資料 ${item.data} 的中位數為何？`, item.ans, ["8", "10", "6"], [`先排序，找中間（或中間兩數平均）。`, `中位數 = ${item.ans}。`], "中位數：排序後的中間值；偶數筆取中間兩數平均。", "未排序不能直接取中間。")
            }
          },
          {
            id: "mode",
            title: "眾數",
            template({ r, mc }) {
              return mc(r, 10, 1, "資料 5、8、8、10、12 的眾數為何？", "8", ["5", "10", "12"], [`眾數 = 出現次數最多的值。`, `8 出現 2 次，最多。`], "眾數可能不只一個，也可能沒有。", "不要取最大或最小值。")
            }
          },
          {
            id: "mean-median-mode",
            title: "平均數、中位數與眾數",
            template({ r, mc }) {
              return mc(r, 10, 1, "資料 2、3、3、3、100 中，受極端值 100 影響最大的是哪一個？", "平均數", ["中位數", "眾數", "三者相同"], [`平均數會被 100 拉高。`, `中位數 = 3，眾數 = 3，較不受影響。`], "極端值對平均數影響大；中位數、眾數較穩。", "比較三量時先排序再找中位數。")
            }
          },
          {
            id: "statistics-from-chart",
            title: "由統計圖表求統計量",
            template({ r, mc }) {
              return mc(r, 10, 2, "長條圖各組次數為 4、6、10，總次數 20，第一組相對次數為何？", "20%", ["4%", "30%", "10%"], [`相對次數 = 4÷20 = 20%。`, `由圖表讀次數再換算比例。`], "從圖表讀次數，再算平均、比例等。", "相對次數 = 組次數 / 總次數。")
            }
          },
          {
            id: "identify-statistic-group",
            title: "由統計圖表判別統計量組別",
            template({ r, mc }) {
              return mc(r, 10, 2, "兩班數學平均成績：甲班 72、乙班 78，哪班整體較高？", "乙班", ["甲班", "相同", "無法比較"], [`平均數代表整體中心。`, `78 > 72，乙班較高。`], "由圖表或摘要比較平均、中位數等。", "比較前確認是同一度量（如都是平均）。")
            }
          },
          {
            id: "statistics-application",
            title: "統計量的應用",
            template({ r, ri, pick, mc, frac, over }) {
              const avg = ri(r, 8, 16), count = pick(r, [4, 5, 6]), added = avg + ri(r, 3, 8);
              const newAvg = frac(avg * count + added, count + 1);
              return mc(r, 10, 2, `${count} 筆資料平均 ${avg}，加入一筆 ${added} 後，新平均為何？`, newAvg, [avg + added, frac(avg + added, 2), frac(avg * (count + 1) + added, count + 1)], [`原總和 = ${avg}×${count}=${avg * count}。`, `新總和 ${avg * count}+${added}=${avg * count + added}，共 ${count + 1} 筆。`, `新平均 = ${newAvg}。`], "平均數應用：總和 = 平均×個數。", "不能把兩平均直接相加除以 2。")
            }
          }
        ]
      }
    ]
  },
  "g8-1-c1": {
    source: "使用者提供：教育部課綱對照國二「乘法公式與多項式」二主題題型表（2026-07 更新；對應國二上第一單元 g8-1-c1）。",
    sections: [
      {
        title: "乘法公式",
        topics: [
          {
            id: "common-multiplication-formulas",
            title: "常用的乘法公式",
            template({ r, mc }) {
              return mc(r, 12, 1, "(a + b)² 展開後為何？", "a² + 2ab + b²", ["a² + b²", "a² − 2ab + b²", "a² + ab + b²"], [`(a+b)(a+b) = a²+ab+ab+b²。`, `= a² + 2ab + b²。`], "三公式：(a±b)²、(a+b)(a−b)。", "(a+b)² 不是 a²+b²。")
            }
          },
          {
            id: "formula-evaluate",
            title: "利用乘法公式求值",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { q: "計算 103²", ans: "10609", steps: "(100+3)²=10000+600+9" },
                { q: "計算 99²", ans: "9801", steps: "(100−1)²=10000−200+1" }
              ]);
              return mc(r, 12, 1, item.q, item.ans, [`${Number(item.ans) + 100}`, `${Number(item.ans) - 50}`, `${Number(item.ans) + 10}`], [`套用平方公式。`, `${item.steps}=${item.ans}。`], "接近整十、整百的平方可改寫成 (a±b)²。", "不要直接硬乘，也不要漏中間項。")
            }
          },
          {
            id: "distributive-evaluate",
            title: "利用分配律求值",
            template({ r, mc }) {
              return mc(r, 12, 1, "計算 97 × 103。", "9991", ["10000", "9891", "9901"], [`97×103 = (100−3)(100+3) = 100²−3²。`, `= 10000−9 = 9991。`], "和×差可用平方差 a²−b²。", "不要只算 100×103−3。")
            }
          },
          {
            id: "formula-compare-size",
            title: "利用乘法公式比較大小",
            template({ r, mc }) {
              return mc(r, 12, 2, "比較 98² 與 97×99 的大小。", "98² 較大", ["97×99 較大", "兩者相等", "無法比較"], [`97×99 = (98−1)(98+1) = 98² − 1。`, `98² > 98² − 1，所以 98² 較大。`], "平方差：(n−1)(n+1)=n²−1 < n²。", "先化成同一形式再比較。")
            }
          },
          {
            id: "formula-area",
            title: "利用乘法公式求面積",
            template({ r, ri, mc }) {
              const a = ri(r, 3, 8), b = ri(r, 2, 6);
              const ans = a * a + 2 * a * b + b * b;
              return mc(r, 12, 2, `邊長 (a+b) 的正方形，a=${a}、b=${b}，面積為何？`, `${ans}`, [`${(a + b) * (a + b)}`, `${a * a + b * b}`, `${ans + 1}`], [`面積 = (a+b)² = a²+2ab+b²。`, `${a}²+2×${a}×${b}+${b}²=${ans}。`], "正方形面積 = 邊長²，可套 (a+b)²。", "不要只算 a²+b²。")
            }
          },
          {
            id: "formula-substitution",
            title: "利用乘法公式代換求值",
            template({ r, mc }) {
              return mc(r, 12, 2, "若 x + y = 5、xy = 6，則 x² + y² =？", "13", ["19", "25", "11"], [`x²+y² = (x+y)²−2xy。`, `= 25−12 = 13。`], "x²+y² = (x+y)²−2xy。", "不要誤用 (x+y)²=x²+y²。")
            }
          }
        ]
      },
      {
        title: "多項式與其四則運算",
        topics: [
          {
            id: "polynomial-meaning",
            title: "多項式的意義",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { correct: "3x² − 2x + 5", wrong: ["3/x + 2", "√x + 1", "1/(x+1)"] },
                { correct: "−x + 7", wrong: ["x² + 1/x", "5/x²", "√(x+1)"] }
              ]);
              return mc(r, 12, 1, "下列哪一個是多項式？", item.correct, item.wrong, [`多項式：係數為常數，指數為非負整數。`, `${item.correct} 符合。`], "多項式不含變數在分母或根號內。", "1/x 不是多項式。")
            }
          },
          {
            id: "polynomial-vocabulary",
            title: "多項式的相關名詞",
            template({ r, mc }) {
              return mc(r, 12, 1, "多項式 4x³ − x + 2 的次數為何？", "3", ["4", "2", "1"], [`次數 = 最高次項的指數。`, `最高次項 4x³，次數為 3。`], "次數看最高次項；係數是 x 前的數。", "4 是最高次項係數，不是次數。")
            }
          },
          {
            id: "constant-polynomial",
            title: "常數多項式",
            template({ r, mc }) {
              return mc(r, 12, 1, "多項式 −7 的次數為何？", "0", ["−7", "1", "無次數"], [`不含 x 的項視為 7x⁰。`, `常數多項式的次數為 0。`], "非零常數多項式次數為 0。", "零多項式次數另定義（或不討論）。")
            }
          },
          {
            id: "polynomial-arrangement",
            title: "多項式的排列",
            template({ r, mc }) {
              return mc(r, 12, 1, "將 2 − 3x + x² 依 x 的降冪排列為何？", "x² − 3x + 2", ["2 − 3x + x²", "x² + 3x + 2", "−3x + x² + 2"], [`降冪：次數由高到低。`, `x² − 3x + 2。`], "降冪：最高次在前；升冪相反。", "排列時係數符號要保留。")
            }
          },
          {
            id: "polynomial-add-subtract",
            title: "多項式的加減運算",
            template({ r, ri, mc }) {
              const a = ri(r, 2, 5), b = ri(r, 1, 6), c = ri(r, 2, 4), d = ri(r, 1, 5);
              const ans = `${a + c}x + ${b + d}`;
              return mc(r, 12, 1, `計算 (${a}x + ${b}) + (${c}x + ${d})。`, ans, [`${a + c}x + ${b - d}`, `${a + b}x + ${c + d}`, `${a + c + b + d}`], [`合併 x 項與常數項。`, `${a}x+${c}x=${a + c}x；${b}+${d}=${b + d}。`], "加減：對齊同類項。", "減多項式時括號內每項變號。")
            }
          },
          {
            id: "polynomial-multiply",
            title: "多項式的乘法運算",
            template({ r, ri, mc }) {
              const a = ri(r, 2, 4), b = ri(r, 1, 5), c = ri(r, 2, 4), d = ri(r, 1, 5);
              const x2 = a * c, x1 = a * d + b * c, c0 = b * d;
              const ans = `${x2}x² + ${x1}x + ${c0}`;
              return mc(r, 12, 2, `展開 (${a}x + ${b})(${c}x + ${d})。`, ans, [`${x2}x² + ${a * d}x + ${c0}`, `${x2}x² + ${b * c}x + ${c0}`, `${(a + c)}x² + ${(b + d)}x + ${c0}`], [`逐項分配：${a}x×${c}x、${a}x×${d}、${b}×${c}x、${b}×${d}。`, `合併得 ${ans}。`], "多項式乘法：每一項都要乘到。", "不要漏乘常數項。")
            }
          },
          {
            id: "polynomial-divide",
            title: "多項式的除法運算",
            template({ r, mc }) {
              return mc(r, 12, 2, "x² + 3x + 2 除以 x + 1，餘式為何？", "0", ["1", "2", "x + 1"], [`x²+3x+2 = (x+1)(x+2)。`, `整除，餘式為 0。`], "多項式除法：被除式 = 除式×商式 + 餘式。", "餘式次數要低於除式。")
            }
          },
          {
            id: "polynomial-degree-after-op",
            title: "多項式運算後的次數",
            template({ r, mc }) {
              return mc(r, 12, 1, "(2x + 1)(x² − 3) 展開後的次數為何？", "3", ["2", "4", "5"], [`最高次項 2x×x² = 2x³。`, `展開後次數為 3。`], "乘法後次數 = 各因式次數之和（通常）。", "不要只加常數次數。")
            }
          },
          {
            id: "polynomial-degree-evaluate",
            title: "多項式次數的求值問題",
            template({ r, mc }) {
              return mc(r, 12, 2, "若 x^m + 2x + 1 的次數為 3，則 m =？", "3", ["2", "4", "1"], [`次數 = 最高次項指數 = m。`, `m = 3。`], "次數由最高次項決定。", "係數為 0 的項不影響（但整項消失）。")
            }
          },
          {
            id: "equal-polynomials",
            title: "兩多項式相等的求值問題",
            template({ r, mc }) {
              return mc(r, 12, 2, "若 ax + b 與 2x + 5 為同一多項式，則 a + b =？", "7", ["10", "3", "5"], [`對應係數相等：a=2、b=5。`, `a+b=7。`], "兩多項式相等 ⟺ 同次項係數分別相等。", "要 a、b 同時滿足。")
            }
          },
          {
            id: "polynomial-multiply-divide",
            title: "多項式的乘除運算",
            template({ r, mc }) {
              return mc(r, 12, 2, "先算 (x + 2)(x − 3)，再除以 x − 3（x ≠ 3），結果為何？", "x + 2", ["x − 3", "x² − x − 6", "1"], [`(x+2)(x−3)÷(x−3) = x+2（x≠3）。`, `乘除互逆。`], "乘後再除相同因式（非 0）得原多項式。", "除式不能為 0。")
            }
          },
          {
            id: "product-coefficient",
            title: "多項式乘積的係數問題",
            template({ r, ri, mc }) {
              const p = ri(r, 2, 4), q = ri(r, 3, 6);
              return mc(r, 12, 2, `(x + ${p})(x + ${q}) 展開後 x 的係數為何？`, `${p + q}`, [`${p * q}`, `${p - q}`, `${p + q + 1}`], [`x 係數來自 ${p}x 與 ${q}x。`, `係數 = ${p}+${q} = ${p + q}。`], "找特定次項係數：展開後合併同類項。", "常數項是 p×q，不是 x 係數。")
            }
          },
          {
            id: "division-relationship",
            title: "多項式除法運算的關係式",
            template({ r, ri, mc }) {
              const p = 2, q = 3, a = 1, rem = 1;
              return mc(r, 12, 2, `x² + 5x + 7 除以 x+1，商式為 ${p}x+${q}、餘式 ${rem}，則 (商式+餘式) 的常數項為？`, `${q + rem}`, [`${p + q}`, `${rem}`, `${p + rem}`], [`商式 ${p}x+${q}，餘式 ${rem}。`, `商+餘 = ${p}x+${q + rem}，常數項 ${q + rem}。`, `驗：x²+5x+7=(x+1)(2x+3)+1。`], "被除式 = 除式×商式 + 餘式。", "餘式次數低於除式。")
            }
          },
          {
            id: "polynomial-application",
            title: "多項式運算的應用",
            template({ r, ri, mc }) {
              const w = ri(r, 2, 5);
              return mc(r, 12, 2, `長方形長 x 、寬 (x+${w})，周長的多項式為何？`, `4x + ${2 * w}`, [`2x + ${w}`, `2x + ${2 * w}`, `x + ${w}`], [`周長 = 2(長+寬) = 2(x + x+${w})。`, `= 2(2x+${w}) = 4x+${2 * w}。`], "周長 = 2(長+寬)，用多項式表示。", "周長是四邊和，不是面積。")
            }
          }
        ]
      }
    ]
  },
  "g8-1-c2": {
    source: "使用者提供：教育部課綱對照國二「平方根與畢氏定理」三主題題型表（2026-07 更新；對應國二上第二單元 g8-1-c2）。",
    sections: [
      {
        title: "平方根與近似值",
        topics: [
          { id: "sqrt-meaning", title: "平方根的意義", template({ r, mc }) { return mc(r, 13, 1, "9 的平方根（正根）為何？", "3", ["−3", "9", "81"], [`3²=9，所以 9 的正平方根為 3。`, `√9=3。`], "a 的平方根：平方等於 a 的數；√a 表非負平方根。", "√9=3，不是 ±3。") } },
          { id: "sqrt-notation", title: "平方根的表示法", template({ r, mc }) { return mc(r, 13, 1, "√16 的値為何？", "4", ["8", "±4", "2"], [`√16 表示 16 的非負平方根。`, `=4。`], "根號 √ 表示非負平方根。", "√16=4；x²=16 的解才是 ±4。") } },
          { id: "sqrt-finding-technique", title: "求平方根的技巧", template({ r, pick, mc }) { const item = pick(r, [{ n: 121, r: 11 }, { n: 144, r: 12 }]); return mc(r, 13, 1, `√${item.n} =？`, `${item.r}`, [`${item.r + 1}`, `${item.r - 1}`, `${item.n / 2}`], [`${item.n} 是完全平方數。`, `√${item.n}=${item.r}。`], "完全平方數可直接開根。", "先判斷是否為完全平方。") } },
          { id: "sqrt-a-squared-simplify", title: "√a² 與 √a² 的化簡", template({ r, mc, signed }) { return mc(r, 13, 1, "√(−5)² 的值為何？", "5", ["−5", "25", "±5"], [`(−5)²=25，√25=5。`, `√a²=|a|，所以 =5。`], "√a² = |a|。", "結果非負。") } },
          { id: "perfect-square-number", title: "完全平方數", template({ r, mc }) { return mc(r, 13, 1, "下列何者為完全平方數？", "49", ["45", "50", "48"], [`49=7²。`, `是完全平方數。`], "完全平方數 = 某整數的平方。", "接近平方數不一定是。") } },
          { id: "sqrt-compare-size", title: "平方根的比較大小", template({ r, mc }) { return mc(r, 13, 1, "比較 √5 與 √7 的大小。", "√5 < √7", ["√5 > √7", "√5 = √7", "無法比較"], [`被開方數越大，平方根越大。`, `5<7，所以 √5<√7。`], "a<b ⟹ √a<√b（a,b≥0）。", "不要只比較被開方數的差。") } },
          { id: "sqrt-approximate", title: "求 √a 的近似值", template({ r, mc }) { return mc(r, 13, 1, "√10 介於哪兩個連續整數之間？", "3 與 4", ["2 與 3", "4 與 5", "9 與 11"], [`3²=9，4²=16。`, `9<10<16，所以 √10 在 3 與 4 之間。`], "夾在 √n 與 √(n+1) 之間：找相鄰完全平方。", "先找 10 在哪兩個平方數之間。") } },
          { id: "prime-factorization-sqrt", title: "質因數分解求 √a² 的值", template({ r, mc }) { return mc(r, 13, 2, "√576 =？", "24", ["12", "48", "18"], [`576=24²。`, `或 576=2⁶×3²，√=2³×3=24。`], "先分解完全平方因數再開方。", "576 不是 2×288 直接開。") } },
          { id: "sqrt-meaning-evaluate", title: "平方根的意義與求值", template({ r, ri, mc }) { const n = ri(r, 3, 8) ** 2; return mc(r, 13, 1, `√${n} =？`, `${Math.sqrt(n)}`, [`${n / 2}`, `${Math.sqrt(n) + 1}`, `${n}`], [`${Math.sqrt(n)}²=${n}。`, `√${n}=${Math.sqrt(n)}。`], "求平方根：找平方等於被開方數的非負數。", "確認平方後還原。") } },
          { id: "compare-sqrt-a-b", title: "比較 √a 與 √b 的大小", template({ r, mc }) { return mc(r, 13, 1, "比較 √12 與 2√3 的大小。", "兩者相等", ["√12 較大", "2√3 較大", "無法比較"], [`√12=√(4×3)=2√3。`, `兩者相等。`], "化簡成最簡根式再比較。", "同類方根比係數。") } },
          { id: "decimal-approximation", title: "十分逼近法的應用", template({ r, mc }) { return mc(r, 13, 2, "以十分逼近法，√20 較接近 4.5 還是 4.4？", "4.5", ["4.4", "4.0", "5.0"], [`4.4²=19.36，4.5²=20.25。`, `20 較接近 20.25，故較接近 4.5。`], "十分逼近：試算相鄰小數平方，看較近。", "比較距離 |n²−a|。") } },
          { id: "perfect-square-evaluate", title: "完全平方數的求值問題", template({ r, mc }) { return mc(r, 13, 2, "√(16×25) =？", "20", ["41", "10", "40"], [`√(16×25)=√16×√25=4×5=20。`, `或 √(400)=20。`], "√(ab)=√a×√b（a,b≥0）。", "先分解再開方。") } }
        ]
      },
      {
        title: "根式的運算",
        topics: [
          { id: "radical-multiply", title: "乘法運算", template({ r, mc }) { return mc(r, 13, 1, "√2 × √8 =？", "4", ["√16", "√10", "16"], [`√2×√8=√16=4。`, `=4。`], "√a×√b=√(ab)。", "先合併再化簡。") } },
          { id: "radical-divide", title: "除法運算", template({ r, mc }) { return mc(r, 13, 1, "√18 ÷ √2 =？", "3", ["√9", "√16", "9"], [`√18÷√2=√9=3。`, `=3。`], "√a÷√b=√(a/b)。", "先合併再化簡。") } },
          { id: "simplest-radical-form", title: "最簡根式", template({ r, mc }) { return mc(r, 13, 1, "√50 化成最簡根式為何？", "5√2", ["25√2", "2√5", "10√5"], [`50=25×2，√50=5√2。`, `被開方數不含完全平方因數（除1）。`], "最簡根式：根號內無平方因數、分母無根號。", "25 要開出成 5。") } },
          { id: "radical-simplify", title: "根式的化簡", template({ r, mc }) { return mc(r, 13, 1, "化簡 √72。", "6√2", ["3√8", "8√2", "12√2"], [`72=36×2，√72=6√2。`, `=6√2。`], "分解完全平方因數再開方。", "不要 √72=√36+√36。") } },
          { id: "like-radicals", title: "同類方根", template({ r, mc }) { return mc(r, 13, 1, "下列哪兩個是同類方根？", "2√3 與 5√3", ["2√3 與 3√2", "√12 與 √18", "√5 與 √7"], [`同類方根：根號內相同。`, `2√3 與 5√3 皆為 √3 的倍數。`], "同類方根可合併加減。", "先化最簡再判斷。") } },
          { id: "radical-add-subtract", title: "加減運算", template({ r, mc }) { return mc(r, 13, 1, "3√2 + 5√2 =？", "8√2", ["8√4", "15√2", "8"], [`同類方根合併係數。`, `3+5=8，得 8√2。`], "同類方根：係數相加，根號部分不變。", "不同根號內不能合併。") } },
          { id: "radical-four-ops-intro", title: "四則運算", template({ r, mc }) { return mc(r, 13, 2, "2√3 × 3√2 =？", "6√6", ["5√5", "6√5", "12√6"], [`係數相乘、根號內相乘：2×3=6，√3×√2=√6。`, `=6√6。`], "根式乘法：係數×係數，根號內×根號內。", "先乘再化簡。") } },
          { id: "radical-multiply-divide", title: "根式的乘除運算", template({ r, mc }) { return mc(r, 13, 2, "√12 × √3 ÷ √2 =？", "3√2", ["6", "2√3", "3"], [`√12×√3=√36=6；6÷√2=3√2。`, `=3√2。`], "乘除從左到右，先合併根號。", "每步化簡。") } },
          { id: "radical-add-subtract-advanced", title: "根式的加減運算", template({ r, mc }) { return mc(r, 13, 2, "√48 − √12 =？", "2√3", ["√36", "2√12", "4√3"], [`√48=4√3，√12=2√3。`, `4√3−2√3=2√3。`], "先化最簡根式再合併。", "√48 不是 4√12。") } },
          { id: "rationalize-denominator", title: "利用平方差公式有理化分母", template({ r, mc }) { return mc(r, 13, 2, "1/(√5 − √3) 有理化分母後為何？", "(√5 + √3)/2", ["√5 − √3", "√5 + √3", "1/2"], [`分子分母同乘 (√5+√3)。`, `(√5+√3)/(5−3)=(√5+√3)/2。`], "分母 (√a−√b) 乘共轭 (√a+√b) 用平方差。", "分母變成有理數。") } },
          { id: "radical-four-ops-full", title: "根式的四則運算", template({ r, mc }) { return mc(r, 13, 2, "√8 + √18 − √2 =？", "4√2", ["5√2", "3√2", "6√2"], [`√8=2√2，√18=3√2。`, `2√2+3√2−√2=4√2。`], "混合運算：先化簡，再同類合併。", "先乘除後加減。") } },
          { id: "radical-compare-size", title: "根式的比較大小", template({ r, mc }) { return mc(r, 13, 2, "比較 3√2 與 2√3 的大小。", "3√2 > 2√3", ["3√2 < 2√3", "相等", "無法比較"], [`3√2=√18，2√3=√12。`, `18>12，所以 3√2>2√3。`], "比較根式：化為同根號或平方比較。", "可兩邊平方（正數）。") } },
          { id: "radical-application", title: "根式運算的應用", template({ r, mc }) { return mc(r, 13, 2, "正方形面積 50，邊長為何？", "5√2", ["25√2", "√50", "10"], [`邊長 = √50 = 5√2。`, `=5√2。`], "幾何量開方：面積→邊長用 √。", "最簡根式。") } }
        ]
      },
      {
        title: "畢氏定理",
        topics: [
          { id: "pythagorean-theorem", title: "畢氏定理", template({ r, mc }) { return mc(r, 13, 1, "直角三角形兩股 3、4，斜邊 c 滿足？", "c² = 3² + 4²", ["c² = 3² − 4²", "c = 3 + 4", "c² = 4² − 3²"], [`畢氏定理：斜邊² = 兩股²和。`, `c²=9+16=25。`], "直角三角形：c²=a²+b²。", "斜邊是最長邊。") } },
          { id: "altitude-on-hypotenuse", title: "直角三角形斜邊上的高", template({ r, mc }) { return mc(r, 13, 2, "直角三角形兩股 6、8，斜邊 10，斜邊上的高為？", "4.8", ["6", "8", "5"], [`面積 = 6×8/2 = 10×h/2。`, `24=5h，h=4.8。`], "面積法：ab/2 = ch/2。", "高垂直於斜邊。") } },
          { id: "coordinate-distance", title: "坐標平面上兩點的距離", template({ r, mc }) { return mc(r, 13, 2, "A(1, 2)、B(4, 6) 的距離為？", "5", ["7", "√7", "25"], [`Δx=3，Δy=4。`, `AB=√(3²+4²)=5。`], "距離 = √[(x₂−x₁)²+(y₂−y₁)²]。", "先算橫縱差再畢氏。") } },
          { id: "altitude-by-pythagorean", title: "利用畢氏定理求斜邊上的高", template({ r, mc }) { return mc(r, 13, 2, "直角三角形兩股 3、4，斜邊 5，求斜邊上的高。", "2.4", ["3", "4", "5"], [`面積 = 3×4÷2 = 5×h÷2。`, `6 = 2.5h，h = 2.4。`, `亦可用畢氏：先求斜邊分段再求 h。`], "斜邊上的高：ab=c·h 或面積法。", "高垂直於斜邊，不是股長。") } },
          { id: "find-side-pythagorean", title: "利用畢氏定理求邊長", template({ r, pick, mc }) { const t = pick(r, [[3,4,5],[5,12,13]]); return mc(r, 13, 2, `直角三角形兩股 ${t[0]}、${t[1]}，斜邊長？`, `${t[2]}`, [`${t[0]+t[1]}`, `${Math.abs(t[1]-t[0])}`, `${t[2]+1}`], [`c²=${t[0]}²+${t[1]}²=${t[2]}²。`, `c=${t[2]}。`], "斜邊 = √(a²+b²)。", "斜邊最長。") } },
          { id: "find-area-pythagorean", title: "利用畢氏定理求面積", template({ r, mc }) { return mc(r, 13, 2, "直角三角形斜邊 10、一股 6，三角形面積？", "24", ["30", "60", "48"], [`另一股 = √(10²−6²)=8。`, `面積 = 6×8÷2 = 24。`], "先求另一股，再用底×高÷2。", "斜邊不是底（除非作高）。") } },
          { id: "pythagorean-life-application", title: "畢氏定理在生活中的應用", template({ r, mc }) { return mc(r, 13, 2, "梯子長 5 m 靠牆，腳距牆 3 m，梯頂離地幾 m？", "4", ["2", "8", "√34"], [`梯子、牆、地面成直角三角形。`, `h=√(5²−3²)=4 m。`], "生活情境先畫直角三角形。", "斜邊是梯子長度。") } }
        ]
      }
    ]
  },
  "g8-1-c3": {
    source: "使用者提供：教育部課綱對照國二「因式分解與一元二次方程式」主題一（2026-07；對應 g8-1-c3 因式分解）。",
    sections: [{
      title: "因式分解",
      topics: [
        { id: "factor-and-multiple", title: "因式與倍式", template({ r, mc }) { return mc(r, 14, 1, "若 A×B=C，則 A、B 是 C 的什麼？", "因式", ["倍式", "公因式", "常數"], [`A×B=C → A、B 整除 C，為 C 的因式。`, `C 是 A、B 的倍式。`], "因式×因式=倍式。", "因式與倍式相對。") } },
        { id: "factorization-concept", title: "因式分解", template({ r, mc }) { return mc(r, 14, 1, "將 3x+6 寫成 3(x+2) 的過程稱為？", "因式分解", ["展開", "通分", "移項"], [`把多項式寫成因式乘積。`, `即因式分解。`], "因式分解是展開的逆運算。", "結果是乘積形式。") } },
        { id: "common-factor", title: "公因式", template({ r, mc }) { return mc(r, 14, 1, "6x² 與 9x 的公因式為何？", "3x", ["3", "x", "6x"], [`6x²=3x·2x，9x=3x·3。`, `公因式 3x。`], "公因式：同時整除各項的因式。", "要取各項都有的最大部分。") } },
        { id: "gcf-factoring", title: "利用提公因式法作因式分解", template({ r, ri, mc }) { const k = ri(r, 2, 5), a = ri(r, 2, 4), b = ri(r, 1, 6); return mc(r, 14, 1, `因式分解 ${k * a}x² + ${k * b}x。`, `${k}x(${a}x + ${b})`, [`${k}(${a}x² + ${b}x)`, `${k * a}x(x + ${b})`, `${a}x(${k}x + ${b})`], [`公因式 ${k}x。`, `提出得 ${k}x(${a}x+${b})。`], "第一步：找公因式提出。", "要提乾淨。") } },
        { id: "formula-factoring", title: "利用乘法公式作因式分解", template({ r, mc }) { return mc(r, 14, 1, "因式分解 x² − 9。", "(x + 3)(x − 3)", ["(x − 3)²", "(x + 9)(x − 9)", "(x − 3)(x − 3)"], [`x²−9 = x²−3²。`, `=(x+3)(x−3)。`], "平方差：a²−b²=(a+b)(a−b)。", "確認是平方相減。") } },
        { id: "cross-multiplication-factoring", title: "利用十字交乘法作因式分解", template({ r, ri, mc }) { const p = ri(r, 2, 5), q = ri(r, 2, 6), sum = p + q, prod = p * q; return mc(r, 14, 2, `因式分解 x² + ${sum}x + ${prod}。`, `(x + ${p})(x + ${q})`, [`(x − ${p})(x − ${q})`, `(x + ${sum})(x + ${prod})`, `(x + ${prod})(x + ${sum})`], [`找兩數和 ${sum}、積 ${prod}：${p}、${q}。`, `=(x+${p})(x+${q})。`], "x²+bx+c：找和 b、積 c 的兩數。", "符號要配合。") } },
        { id: "factor-application", title: "因式的應用與因式分解", template({ r, mc }) { return mc(r, 14, 2, "48 的因式分解（質因數）為何？", "2⁴×3", ["2³×3²", "2×24", "4×12"], [`48=16×3=2⁴×3。`, `質因數分解 2⁴×3。`], "整數因式分解指質因數分解。", "要寫成質數乘積。") } },
        { id: "multiple-application", title: "倍式的應用與因式分解", template({ r, mc }) { return mc(r, 14, 2, "若 (x+2)(x−3)=0，則 x 的可能值？", "−2 或 3", ["2 或 −3", "−2 和 3 同時", "5"], [`零乘積：x+2=0 或 x−3=0。`, `x=−2 或 3。`], "倍式為 0 → 至少一因式為 0。", "是或，不是且。") } },
        { id: "substitution-factoring", title: "式子的代換與因式分解", template({ r, mc }) { return mc(r, 14, 2, "因式分解 x⁴ − 81。", "(x² + 9)(x + 3)(x − 3)", ["(x² − 9)²", "(x + 3)⁴", "(x − 9)(x + 9)"], [`x⁴−81=(x²)²−9²。`, `=(x²+9)(x²−9)=(x²+9)(x+3)(x−3)。`], "視 x² 為 u，用平方差。", "可多次分解。") } },
        { id: "coefficient-by-factoring", title: "利用因式分解求係數", template({ r, mc }) { return mc(r, 14, 2, "若 x² + kx + 12=(x+3)(x+4)，則 k =？", "7", ["12", "3", "−7"], [`展開 (x+3)(x+4)=x²+7x+12。`, `k=7。`], "因式分解與展開互驗係數。", "中項係數是和。") } },
        { id: "standard-form-factoring", title: "利用因式分解求標準分解式", template({ r, mc }) { return mc(r, 14, 2, "360 的標準分解式為何？", "2³×3²×5", ["2²×3×5²", "36×10", "2×180"], [`360=8×45=2³×3²×5。`, `標準分解式 2³×3²×5。`], "標準分解式：質因數的乘積。", "指數寫清楚。") } },
        { id: "factoring-word-problem", title: "因式分解的應用問題", template({ r, ri, mc }) { const w = ri(r, 3, 8); return mc(r, 14, 2, `長 x、寬 (x+${w}) 的長方形面積多項式為何？`, `x² + ${w}x`, [`x² − ${w}x`, `2x + ${w}`, `x(x−${w})`], [`面積 = x(x+${w})。`, `展開 x²+${w}x。`], "幾何面積展開後可因式分解或反之。", "長×寬。") } }
      ]
    }]
  },
  "g8-1-c4": {
    source: "使用者提供：教育部課綱對照國二「因式分解與一元二次方程式」主題二～四（2026-07；對應 g8-1-c4 一元二次方程式）。",
    sections: [
      {
        title: "因式分解法解一元二次方程式",
        topics: [
          { id: "quadratic-equation-concept", title: "一元二次方程式", template({ r, mc }) { return mc(r, 15, 1, "下列哪一個是一元二次方程式？", "x² − 3x + 2 = 0", ["x² − 3x", "x + 2 = 0", "x² + y = 0"], [`最高次項 x²，且一次未知數。`, `x²−3x+2=0 符合。`], "一元二次：一個未知數、最高次 2、有等號。", "兩個未知數不是一元。") } },
          { id: "quadratic-solution", title: "一元二次方程式的解", template({ r, mc }) { return mc(r, 15, 1, "x = 2 是否為 x² − 5x + 6 = 0 的解？", "是", ["否", "無法判斷", "條件不足"], [`代入：4−10+6=0。`, `成立，是解。`], "解：代入使等式成立。", "要算完整左式。") } },
          { id: "solve-quadratic", title: "解一元二次方程式", template({ r, ri, mc }) { const p = ri(r, 2, 5), q = ri(r, 2, 6); return mc(r, 15, 2, `解 x² − ${p + q}x + ${p * q} = 0。`, `x = ${p} 或 ${q}`, [`x = −${p} 或 −${q}`, `x = ${p + q}`, `x = ${p * q}`], [`因式分解 (x−${p})(x−${q})=0。`, `x=${p} 或 ${q}。`], "整理成 =0 再因式分解或公式。", "零乘積性質。") } },
          { id: "factor-method-quadratic", title: "因式分解法解一元二次方程式", template({ r, mc }) { return mc(r, 15, 2, "解 x² − 9 = 0。", "x = 3 或 −3", ["x = 9", "x = 3", "x = −3"], [`x²−9=(x+3)(x−3)=0。`, `x=±3。`], "先移項再因式分解。", "平方差。") } },
          { id: "quadratic-identification", title: "一元二次方程式的判別", template({ r, pick, mc }) { const item = pick(r, [{ ok: "2x² + x − 1 = 0", no: "2x + 1 = 0" }, { ok: "x(x−1)=0", no: "x² + x" }]); return mc(r, 15, 1, "下列哪一個是一元二次方程式？", item.ok, [item.no, "x³ = 1", "y = x²"], [`化簡後最高次為 2 且一元。`, `${item.ok} 符合。`], "展開後判斷次數。", "=0 才是方程式。") } },
          { id: "quadratic-solution-evaluate", title: "一元二次方程式的解與求值", template({ r, mc }) { return mc(r, 15, 2, "若 x² − 4x + 3=0 的解為 1、3，則 x² − 4x + 3 在 x=1 的值？", "0", ["1", "3", "−1"], [`x=1 是解 → 代入為 0。`, `=0。`], "解代入原式得 0。", "求值與解的關係。") } },
          { id: "substitution-solve-equation", title: "式子的代換與解方程式", template({ r, mc }) { return mc(r, 15, 2, "若 y=x²，且 y=9，則 x =？", "3 或 −3", ["9", "3", "−3"], [`x²=9。`, `x=±3。`], "代換後解 simpler 方程。", "記得 ±。") } },
          { id: "equation-solution-find-equation", title: "方程式的解與求方程式", template({ r, mc }) { return mc(r, 15, 2, "解為 x=2 或 x=−1 的一元二次方程式可能為？", "(x − 2)(x + 1)=0", ["x − 2 + x + 1 = 0", "(x + 2)(x − 1)=0", "x² − 1 = 0"], [`根 2、−1 → (x−2)(x+1)=0。`, `展開 x²−x−2=0。`], "已知解寫 (x−α)(x−β)=0。", "符號要對。") } }
        ]
      },
      {
        title: "配方法與公式解",
        topics: [
          { id: "sqrt-concept-quadratic", title: "平方根的概念", template({ r, mc }) { return mc(r, 15, 1, "解 x² = 16 時，為何 x 有兩解？", "16 有 ±4 兩個平方根", ["√16=−4", "方程式只能有一解", "16 只有一個平方根"], [`x²=16 → x=±4。`, `平方根有正負。`], "x²=a（a>0）→ x=±√a。", "漏解 −4。") } },
          { id: "complete-square-form", title: "配成完全平方式", template({ r, mc }) { return mc(r, 15, 1, "x² + 6x + 9 可寫成？", "(x + 3)²", ["(x + 9)²", "(x + 3)(x − 3)", "(x + 6)²"], [`9=(6/2)²。`, `x²+6x+9=(x+3)²。`], "配完全平方：常數=(一次項系数/2)²。", "中項=2×兩數乘積。") } },
          { id: "completing-square-method", title: "配方法解一元二次方程式", template({ r, mc }) { return mc(r, 15, 2, "解 x² + 4x − 5 = 0（配方法）。", "x = 1 或 −5", ["x = −1 或 5", "x = 1 或 5", "x = −1 或 −5"], [`x²+4x+4=9 → (x+2)²=9。`, `x+2=±3，x=1 或 −5。`], "移常數→配方→開方。", "加減 (b/2)²。") } },
          { id: "quadratic-formula", title: "一元二次方程式的公式解", template({ r, mc }) { return mc(r, 15, 2, "x² − 2x − 3=0 以公式解，x =？", "3 或 −1", ["1 或 −3", "−3 或 1", "2 或 −1"], [`a=1,b=−2,c=−3。`, `x=(2±√16)/2=(2±4)/2，x=3 或 −1。`], "x=(-b±√(b²−4ac))/(2a)。", "先判 a,b,c。") } },
          { id: "discriminant-cases", title: "判別式與解的情形", template({ r, mc }) { return mc(r, 15, 2, "x² + x + 1=0 的判別式 b²−4ac 為何？正負？", "−3，小於 0，無實根", ["1，大於 0", "0，有一重根", "3，大於 0"], [`b²−4ac=1−4=−3<0。`, `無實根（國中可寫無解）。`], "D>0 兩相異實根；D=0 重根；D<0 無實根。", "先算 D。") } },
          { id: "sqrt-method-quadratic", title: "平方根概念解一元二次方程式", template({ r, mc }) { return mc(r, 15, 2, "解 x² = 25。", "x = 5 或 −5", ["x = 25", "x = 5", "x = −5"], [`x=±√25=±5。`], "x²=k（k>0）→ x=±√k。", "兩解。") } },
          { id: "discriminant-application", title: "判別式的應用", template({ r, mc }) { return mc(r, 15, 2, "x² − 4x + k=0 有相等實根，則 k =？", "4", ["0", "−4", "8"], [`D=16−4k=0。`, `k=4。`], "相等實根 ⟺ D=0。", "列 D=0 求參數。") } },
          { id: "completing-square-evaluate", title: "配方法與求值問題", template({ r, mc }) { return mc(r, 15, 2, "x² + 6x + 10 的最小值（配方法）？", "1", ["10", "−1", "9"], [`=(x+3)²+1。`, `最小值 1（x=−3）。`], "完全平方≥0，加常數得最小值。", "頂點式。") } },
          { id: "formula-evaluate", title: "公式解與求值問題", template({ r, mc }) { return mc(r, 15, 2, "2x² − 4x − 6=0 兩根之和（公式/Vieta）？", "2", ["−2", "3", "−3"], [`和=−b/a=4/2=2。`, `兩根之和 2。`], "ax²+bx+c=0 兩根和 −b/a。", "先化 a=1 或直接用公式。") } }
        ]
      },
      {
        title: "應用問題",
        topics: [
          { id: "quadratic-word-steps", title: "解應用問題的步驟", template({ r, mc }) { return mc(r, 15, 1, "解一元二次應用題時，列完方程式後通常？", "解方程式並檢查解是否合理", ["直接猜", "只寫因式分解", "不需檢查"], [`列式→解方程→檢查（如長度>0、整數）。`, `選合理解作答。`], "應用題要檢查解是否符合情境。", "負長度通常不合理。") } },
          { id: "quadratic-area-problem", title: "面積問題", template({ r, mc }) { return mc(r, 15, 2, "長比寬多 2、面積 24 的長方形，寬 x，可列？", "x(x + 2) = 24", ["x + (x + 2) = 24", "2(x + 2) = 24", "x² = 24"], [`寬 x，長 x+2，面積 x(x+2)=24。`, `即 x²+2x−24=0。`], "面積=長×寬。", "周長不是面積。") } },
          { id: "quadratic-distribution-problem", title: "分配問題", template({ r, mc }) { return mc(r, 15, 2, "某數 x 乘以比它大 3 的數得 108，可列？", "x(x + 3) = 108", ["x + (x + 3) = 108", "3x = 108", "x² = 108"], [`兩數 x 與 x+3 乘積 108。`, `x(x+3)=108。`], "連續或相差固定→用 x 表示。", "乘積列式。") } },
          { id: "quadratic-life-application", title: "生活中的應用問題", template({ r, mc }) { return mc(r, 15, 2, "球拋出後高度 h=−5t²+20t（t 秒），幾秒落地？", "4 秒", ["2 秒", "5 秒", "0 秒"], [`落地 h=0：−5t²+20t=0。`, `−5t(t−4)=0，t=0 或 4，取 4 秒。`], "應用→=0 求 t，取合理值。", "t=0 是起點。") } }
        ]
      }
    ]
  },
  "g8-2-c1": {
    source: "使用者提供：教育部課綱對照國二下「數列與級數」三主題題型表（2026-07；對應 g8-2-c1）。",
    sections: [
      {
        title: "等差數列",
        topics: [
          { id: "sequence-concept", title: "數列", template({ r, mc }) { return mc(r, 16, 1, "數列 3、7、11、15、… 的第 5 項為何？", "19", ["15", "23", "11"], [`相鄰兩項差 4，首項 3。`, `第 5 項 = 3+4×4 = 19。`], "數列依規律排列；先找相鄰差或倍率。", "不要只數到第 4 項就停。") } },
          { id: "arithmetic-sequence", title: "等差數列", template({ r, mc }) { return mc(r, 16, 1, "下列哪一組是等差數列？", "2、5、8、11", ["2、4、8、16", "1、4、9、16", "3、6、12、24"], [`等差：相鄰兩項差固定。`, `2、5、8、11 每次加 3。`], "等差數列公差 d = a₂−a₁ 固定。", "等比是相乘固定，不是相加。") } },
          { id: "arithmetic-mean", title: "等差中項", template({ r, mc }) { return mc(r, 16, 1, "4 與 10 的等差中項為何？", "7", ["6", "8", "14"], [`等差中項 = (4+10)/2 = 7。`, `插入後成等差：4、7、10。`], "三項成等差時，中項 = 兩端平均。", "等差中項不是相乘再開方。") } },
          { id: "sequence-pattern", title: "數列的規律性", template({ r, mc }) { return mc(r, 16, 1, "數列 1、4、9、16、… 的下一項為何？", "25", ["20", "24", "36"], [`各項為 1²、2²、3²、4²。`, `下一項 5² = 25。`], "先找項次 n 與數值的關係。", "不要只看相鄰差就當等差。") } },
          { id: "figural-sequence-pattern", title: "圖形數列規律性", template({ r, mc }) { return mc(r, 16, 2, "第 1 層 1 點、第 2 層 3 點、第 3 層 6 點（三角堆疊），第 4 層有幾點？", "10", ["9", "12", "7"], [`第 n 層點數 = 1+2+…+n = n(n+1)/2。`, `第 4 層 = 4×5/2 = 10。`], "圖形數列：固定部分 + 每層新增。", "先寫前幾項再找規律。") } },
          { id: "arithmetic-nth-term-and-count", title: "求等差數列的第 n 項和項數", template({ r, ri, mc }) { const a1 = ri(r, 2, 8), d = ri(r, 2, 5), n = ri(r, 5, 12), ans = a1 + (n - 1) * d; return mc(r, 16, 2, `等差數列首項 ${a1}、公差 ${d}，第 ${n} 項為何？`, `${ans}`, [`${a1 + n * d}`, `${a1 + (n - 2) * d}`, `${n * d}`], [`aₙ = a₁ + (n−1)d。`, `a_${n} = ${a1}+(${n}−1)×${d} = ${ans}。`], "第 n 項只加 n−1 次公差。", "不要把 n−1 寫成 n。") } },
          { id: "arithmetic-last-term-and-diff", title: "求等差數列的末項和公差", template({ r, mc }) { return mc(r, 16, 2, "等差數列首項 5、第 8 項 26，公差 d 為何？", "3", ["2", "4", "21"], [`26 = 5 + 7d → 7d = 21。`, `d = 3。`], "已知首項、末項、項數可反解 d。", "項數 8 表示加了 7 次公差。") } },
          { id: "arithmetic-from-general-term", title: "已知 an 一般項求首項和公差", template({ r, mc }) { return mc(r, 16, 2, "某等差數列 aₙ = 3n − 2，首項 a₁ 與公差 d 依序為何？", "1 與 3", ["−2 與 3", "1 與 −2", "3 與 1"], [`a₁ = 3×1−2 = 1。`, `a₂ = 4，d = 4−1 = 3。`], "代入 n=1 得首項；a₂−a₁ 得公差。", "常數項 −2 不是首項。") } },
          { id: "arithmetic-sign-change-term", title: "求數列開始為正或負的項", template({ r, mc }) { return mc(r, 16, 2, "等差數列首項 12、公差 −3，從第幾項開始為負？", "第 6 項", ["第 5 項", "第 4 項", "第 7 項"], [`a₅ = 12−12 = 0；a₆ = 12−15 = −3 < 0。`, `從第 6 項開始為負。`], "令 aₙ < 0 解 n，取最小整數 n。", "a₅=0 不算負。") } },
          { id: "insert-arithmetic-sequence", title: "插入等差數列並求公差", template({ r, mc }) { return mc(r, 16, 2, "在 2 與 14 之間插入 3 個數成等差數列，公差 d 為何？", "3", ["2", "4", "6"], [`共 5 項，首 2 末 14。`, `d = (14−2)/4 = 3。`], "插入 k 個數 → 總項數 k+2，d=(末−首)/(k+1)。", "分母是間隔數，不是插入個數。") } },
          { id: "arithmetic-nth-term-word", title: "求等差數列的第 n 項列的問題", template({ r, mc }) { return mc(r, 16, 2, "某班座位排成等差，第 1 排 8 席、每排多 2 席，第 10 排有幾席？", "26", ["28", "24", "20"], [`a₁=8，d=2，n=10。`, `a₁₀ = 8+9×2 = 26。`], "應用題先定 a₁、d、n 再套公式。", "第 10 排加了 9 次公差。") } },
          { id: "arithmetic-mean-evaluate", title: "等差中項的求值問題", template({ r, ri, mc }) { const a = ri(r, 2, 10), b = a + ri(r, 4, 12); const m = (a + b) / 2; return mc(r, 16, 1, `${a}、x、${b} 成等差數列，x 為何？`, `${m}`, [`${a + b}`, `${b - a}`, `${m + 1}`], [`等差中項 x = (${a}+${b})/2。`, `x = ${m}。`], "中項 = 兩端和的一半。", "不要用 b−a 當中項。") } },
          { id: "arithmetic-mean-application", title: "等差中項的應用", template({ r, mc }) { return mc(r, 16, 2, "三個數成等差，最小 6、最大 18，中間數為何？", "12", ["9", "15", "24"], [`等差中項 = (6+18)/2 = 12。`, `三數為 6、12、18。`], "三數成等差 → 中數 = 首尾平均。", "最大減最小是 2d，不是中項。") } },
          { id: "arithmetic-sequence-application", title: "等差數列的應用問題", template({ r, mc }) { return mc(r, 16, 2, "某活動第 1 天招 20 人，之後每天比前一天多 5 人，第 7 天招幾人？", "50", ["45", "55", "35"], [`等差：a₁=20，d=5，n=7。`, `a₇ = 20+6×5 = 50。`], "「每天多固定人數」→ 等差數列。", "第 7 天只加 6 次公差。") } }
        ]
      },
      {
        title: "等差級數",
        topics: [
          { id: "arithmetic-series", title: "等差級數", template({ r, mc }) { return mc(r, 16, 1, "等差數列 2、5、8、11 的前 4 項和（等差級數 S₄）為何？", "26", ["20", "11", "32"], [`S₄ = 2+5+8+11 = 26。`, `或首尾配對 (2+11)+(5+8)=26。`], "等差級數 = 等差數列前 n 項和。", "級數是和，不是某一項。") } },
          { id: "arithmetic-series-sum-formula", title: "等差級數前 n 項和公式", template({ r, mc }) { return mc(r, 16, 1, "首項 a₁、末項 aₙ，前 n 項和 Sₙ 的公式為何？", "Sₙ = n(a₁ + aₙ)/2", ["Sₙ = n(a₁ − aₙ)/2", "Sₙ = a₁ + aₙ", "Sₙ = na₁"], [`首尾配對：每對和 a₁+aₙ，共 n/2 對。`, `Sₙ = n(a₁+aₙ)/2。`], "等差級數和 = 項數×(首+末)/2。", "分子是首加末，不是首減末。") } },
          { id: "arithmetic-series-sum", title: "求等差級數和", template({ r, ri, mc }) { const a1 = ri(r, 2, 8), d = ri(r, 2, 4), n = ri(r, 4, 10), an = a1 + (n - 1) * d, sum = n * (a1 + an) / 2; return mc(r, 16, 2, `等差數列首項 ${a1}、公差 ${d}，前 ${n} 項和 S_${n} 為何？`, `${sum}`, [`${a1 + an}`, `${n * a1}`, `${sum + d}`], [`末項 a_${n} = ${an}。`, `S_${n} = ${n}×(${a1}+${an})/2 = ${sum}。`], "先求末項或直接用 Sₙ=n[2a₁+(n−1)d]/2。", "項數 n 不要少算。") } },
          { id: "arithmetic-series-max-min-sum", title: "求等差級數最大或最小的和", template({ r, mc }) { return mc(r, 16, 2, "等差數列 10、7、4、1、−2、…，前幾項和最大？", "前 4 項", ["前 3 項", "前 5 項", "前 6 項"], [`和依序 10、17、21、22、20、17…`, `第 5 項起變負，前 4 項和 22 最大。`], "正項加完、負項加入前和通常最大。", "要逐項累加比較，不是只看首項。") } },
          { id: "arithmetic-series-application", title: "等差級數的應用問題", template({ r, mc }) { return mc(r, 16, 2, "劇院第 1 排 10 席、每排多 2 席，共 10 排，總席位？", "190", ["200", "180", "100"], [`a₁=10，d=2，n=10，a₁₀=28。`, `S₁₀ = 10×(10+28)/2 = 190。`], "總量題 → 等差級數求和。", "不要只用 10×10。") } }
        ]
      },
      {
        title: "等比數列",
        topics: [
          { id: "geometric-sequence", title: "等比數列", template({ r, mc }) { return mc(r, 16, 1, "下列哪一組是等比數列？", "3、6、12、24", ["3、6、9、12", "2、5、8、11", "1、4、7、10"], [`等比：相鄰兩項比固定。`, `3、6、12、24 每次乘 2。`], "等比公比 r = a₂/a₁ 固定。", "等差是加固定，不是乘固定。") } },
          { id: "geometric-mean", title: "等比中項", template({ r, mc }) { return mc(r, 16, 1, "4 與 16 的等比中項（正數）為何？", "8", ["10", "6", "20"], [`等比中項 = ±√(4×16) = ±8。`, `取正數 8；4、8、16 成等比。`], "三項成等比 → 中項² = 兩端乘積。", "等比中項不是平均。") } },
          { id: "geometric-nth-term", title: "求等比數列第 n 項", template({ r, ri, mc }) { const a1 = ri(r, 2, 5), r0 = ri(r, 2, 3), n = ri(r, 3, 6), ans = a1 * r0 ** (n - 1); return mc(r, 16, 2, `等比數列首項 ${a1}、公比 ${r0}，第 ${n} 項為何？`, `${ans}`, [`${a1 * r0 ** n}`, `${a1 + (n - 1) * r0}`, `${ans * r0}`], [`aₙ = a₁·rⁿ⁻¹。`, `a_${n} = ${a1}×${r0}^${n - 1} = ${ans}。`], "第 n 項乘 n−1 次公比。", "不要用等差公式加公比。") } },
          { id: "geometric-term-count", title: "求等比數列的項數", template({ r, mc }) { return mc(r, 16, 2, "等比數列 3、6、12、…、384 共有幾項？", "8", ["7", "9", "6"], [`公比 2；384 = 3×2ⁿ⁻¹ → 2ⁿ⁻¹=128=2⁷。`, `n−1=7，n=8。`], "已知首末項求 n：末/首 = rⁿ⁻¹。", "指數是 n−1，不是 n。") } },
          { id: "geometric-first-term-and-ratio", title: "求等比數列首項和公比", template({ r, mc }) { return mc(r, 16, 2, "等比數列第 2 項 6、第 4 項 54，首項 a₁ 與公比 r 為何？", "2 與 3", ["3 與 2", "6 與 9", "1 與 6"], [`a₂=a₁r=6，a₄=a₁r³=54 → r²=9，r=3（取正）。`, `a₁=6/3=2。`], "列 a₁r 與 a₁r³ 消去 a₁ 求 r。", "公比通常取正（題意未限可討論 ±）。") } },
          { id: "geometric-first-term-ratio-problem", title: "求等比數列首項和公比的問題", template({ r, mc }) { return mc(r, 16, 2, "等比數列中 a₂=−6、a₃=18，則 a₁ 與 r 可能為何？", "−2 與 3", ["2 與 −3", "6 與 −3", "−6 與 1"], [`r = a₃/a₂ = 18/(−6) = −3。`, `a₁ = a₂/r = (−6)/(−3) = −2。`], "相鄰兩項相除得公比，再回代求首項。", "注意符號。") } },
          { id: "geometric-n-numbers", title: "求數個成等比數列的問題", template({ r, mc }) { return mc(r, 16, 2, "2、x、18 成等比數列，x 為何？（正數）", "6", ["9", "4", "8"], [`x² = 2×18 = 36。`, `x = 6（取正）；2、6、18 公比 3。`], "三數成等比 → 中項² = 首×末。", "有 ± 解時看題意。") } },
          { id: "geometric-mean-application", title: "求等比中項的應用", template({ r, mc }) { return mc(r, 16, 2, "某細菌每小時變為 3 倍，最初 2 個，3 小時後幾個？", "54", ["18", "6", "162"], [`等比：a₁=2，r=3。`, `3 小時後 = 2×3³ = 54。`], "倍增問題 → 等比數列 a₁rⁿ。", "指數是小時數，不是減 1 的項次（依題意）。") } },
          { id: "geometric-sequence-application", title: "等比數列的應用問題", template({ r, mc }) { return mc(r, 16, 2, "紙對折 1 次變 2 層、2 次 4 層，對折 5 次有幾層？", "32", ["16", "64", "10"], [`每次層數乘 2：2、4、8、…`, `第 5 次 = 2⁵ = 32 層。`], "每次乘固定倍 → 等比。", "對折 n 次是 2ⁿ，不是 2n。") } }
        ]
      }
    ]
  },
  "g8-2-c2": {
    source: "使用者提供：教育部課綱對照國二下「線型函數」二主題題型表（2026-07；對應 g8-2-c2）。",
    sections: [
      {
        title: "認識函數",
        topics: [
          { id: "variable-and-constant", title: "變數與常數", template({ r, mc }) { return mc(r, 17, 1, "在式子 y = 3x + 5 中，哪一個是常數？", "5", ["y", "x", "3x"], [`3 是係數，x 是變數，5 固定不變。`, `5 是常數。`], "常數：數值固定；變數：可取不同值。", "係數 3 不是常數項。") } },
          { id: "independent-dependent-variable", title: "自變數與應變數", template({ r, mc }) { return mc(r, 17, 1, "某商品總價 y 與購買數量 x 的關係 y = 25x，自變數為何？", "x", ["y", "25", "25x"], [`數量 x 可自由選取。`, `x 是自變數，y 是應變數。`], "自變數：可獨立選取；應變數：隨自變數改變。", "總價 y 通常由數量決定。") } },
          { id: "function-concept", title: "函數", template({ r, mc }) { return mc(r, 17, 1, "下列哪一個 y 與 x 的關係是函數？", "y = 2x + 1", ["x = y²", "y² = x", "x² + y² = 1"], [`每個 x 對應唯一 y。`, `y = 2x + 1 符合。`], "函數：每個自變數值對應唯一應變數值。", "一個 x 對多個 y 不是函數。") } },
          { id: "function-value-concept", title: "函數值", template({ r, mc }) { return mc(r, 17, 1, "若 f(x) = 3x − 2，則 f(4) 稱為什麼？", "x = 4 時的函數值", ["自變數", "常數項", "斜率"], [`f(4) 是把 x=4 代入得到的 y 值。`, `即 x=4 時的函數值。`], "函數值 = 代入自變數後得到的 y。", "f(4) 不是 x=4 本身。") } },
          { id: "evaluate-function-value", title: "求函數值", template({ r, ri, mc }) { const k = ri(r, 2, 8), c = ri(r, 1, 6), x = ri(r, 2, 10), ans = k * x + c; return mc(r, 17, 1, `若 f(x) = ${k}x + ${c}，求 f(${x})。`, `${ans}`, [`${k + x + c}`, `${k * x}`, `${ans + 1}`], [`代入 x=${x}：f(${x})=${k}×${x}+${c}。`, `= ${ans}。`], "求函數值：把 x 代入式子計算。", "先乘後加，注意運算順序。") } },
          { id: "equal-function-value", title: "函數值相等的求值問題", template({ r, mc }) { return mc(r, 17, 2, "若 f(x) = 2x + 3 且 f(a) = 11，則 a = ?", "4", ["5", "7", "14"], [`2a + 3 = 11 → 2a = 8。`, `a = 4。`], "f(a)=k → 列方程式解 a。", "不要只算 f(11)。") } },
          { id: "function-value-application", title: "函數值的應用", template({ r, mc }) { return mc(r, 17, 2, "計程車起跳 85 元、每公里 20 元，費用 C(k)=85+20k。走 6 公里費用？", "205 元", ["120 元", "185 元", "105 元"], [`k=6，C(6)=85+20×6。`, `= 205 元。`], "情境代入自變數求函數值。", "固定費只加一次。") } }
        ]
      },
      {
        title: "線型函數與函數圖形",
        topics: [
          { id: "function-graph", title: "函數的圖形", template({ r, mc }) { return mc(r, 17, 1, "函數 y = f(x) 的圖形上，橫坐標 x=2、縱坐標 y=5 的點記為？", "(2, 5)", ["(5, 2)", "(−2, 5)", "(2, −5)"], [`橫坐標是自變數 x=2。`, `縱坐標是函數值 y=5，點為 (2, 5)。`], "圖形點 (x, f(x))：x 橫、y 縱。", "不要顛倒 x、y 順序。") } },
          { id: "linear-function-and-graph", title: "線型函數及其圖形", template({ r, mc }) { return mc(r, 17, 1, "線型函數 y = −2x + 3 的圖形為何？", "斜率 −2 的直線", ["拋物線", "水平線 y=3 以外的曲線", "斜率 2 的直線"], [`y=mx+b，m=−2 為斜率。`, `圖形是斜率 −2 的直線。`], "線型函數 y=mx+b 圖形是直線。", "m 的正負決定升降，不是曲線。") } },
          { id: "find-linear-function", title: "求線型函數", template({ r, mc }) { return mc(r, 17, 2, "斜率 3、y 截距 −1 的線型函數為何？", "y = 3x − 1", ["y = −x + 3", "y = 3x + 1", "y = x − 3"], [`斜率 m=3，截距 b=−1。`, `y = 3x − 1。`], "y = mx + b：m 斜率、b 截距。", "截距是加在 x 項後的常數。") } },
          { id: "function-type-identification", title: "函數類型的判別", template({ r, mc }) { return mc(r, 17, 1, "下列哪一個是線型函數？", "y = 5 − 2x", ["y = x²", "y = 1/x", "y = 2ˣ"], [`x 的最高次為 1。`, `y = 5−2x 是線型函數。`], "線型函數：x 的次數為 1。", "x²、1/x、指數型都不是線型。") } },
          { id: "function-graph-identification", title: "函數圖形的判別", template({ r, mc }) { return mc(r, 17, 1, "下列哪一個圖形可能是線型函數的圖形？", "一條不垂直的直線", ["拋物線", "反比例曲線", "垂直線 x=3"], [`線型函數圖形是直線（非垂直）。`, `一條不垂直的直線符合。`], "線型函數 ↔ 斜率存在的直線。", "垂直線 x=k 不是 y 對 x 的函數。") } },
          { id: "linear-from-function-value", title: "已知函數值求線型函數", template({ r, mc }) { return mc(r, 17, 2, "線型函數 f(x)=mx+2，且 f(3)=11，則 m = ?", "3", ["2", "9", "−3"], [`3m + 2 = 11 → 3m = 9。`, `m = 3。`], "代已知 x 列式解 m。", "常數項 2 要保留。") } },
          { id: "linear-from-points", title: "已知圖形上的點求線型函數", template({ r, mc }) { return mc(r, 17, 2, "直線過 (1, 4)、(3, 10)，斜率 m 為何？", "3", ["2", "4", "6"], [`m = (10−4)/(3−1) = 6/2。`, `m = 3。`], "兩點斜率 m = (y₂−y₁)/(x₂−x₁)。", "分子分母要對應同一方向。") } },
          { id: "intersection-evaluate", title: "利用函數圖形的交點求值", template({ r, mc }) { return mc(r, 17, 2, "y = x + 2 與 y = −x + 8 的交點橫坐標 x 為何？", "3", ["2", "4", "5"], [`x + 2 = −x + 8 → 2x = 6。`, `x = 3。`], "交點：兩式 y 相等（或 x、y 同時滿足）。", "先求 x 再代回求 y。") } },
          { id: "intersection-compare", title: "利用函數圖形的交點比大小", template({ r, mc }) { return mc(r, 17, 2, "y = 2x + 1 與 y = −x + 7 相交於 x=2。當 x=0 時，哪條線的 y 較大？", "y = −x + 7", ["y = 2x + 1", "兩者相等", "無法比較"], [`x=0：2x+1=1，−x+7=7。`, `7>1，所以 y=−x+7 較大。`], "交點兩側大小可能互換；可代點或看圖。", "x=0 時不要只看斜率正負。") } },
          { id: "linear-function-application", title: "線型函數的應用問題", template({ r, ri, mc }) { const fixed = ri(r, 3, 8) * 10, rate = ri(r, 2, 6), x = ri(r, 5, 15), total = fixed + rate * x; return mc(r, 17, 2, `某服務收固定費 ${fixed} 元、每單位 ${rate} 元，使用 ${x} 單位共多少元？`, `${total} 元`, [`${(fixed + rate) * x} 元`, `${fixed + x} 元`, `${rate * x} 元`], [`費用 y = ${rate}x + ${fixed}。`, `y = ${rate}×${x}+${fixed} = ${total} 元。`], "固定費＋單價×用量 → y=mx+b。", "固定費不要乘用量。") } }
        ]
      }
    ]
  },
  "g8-2-c3": {
    source: "使用者提供：教育部課綱對照國二下「三角形的基本性質」四主題題型表（2026-07；對應 g8-2-c3；主題三「三角形全等的判別」去重）。",
    sections: [
      {
        title: "角與尺規作圖",
        topics: [
          { id: "angle-concept", title: "角", template({ r, mc }) { return mc(r, 18, 1, "角是由什麼圍成的？", "一個頂點與兩條射線", ["兩條平行線", "一條線段", "三個頂點"], [`角由一頂點與兩端射線（邊）圍成。`, `描述角的組成。`], "角 = 頂點 + 兩射線（邊）。", "線段沒有射線的延伸方向。") } },
          { id: "compass-straightedge", title: "尺規作圖", template({ r, mc }) { return mc(r, 18, 1, "尺規作圖中，圓規的主要用途為何？", "畫弧、量轉移長度", ["量角度數", "畫任意曲線", "測量面積"], [`圓規可畫等距弧、轉移線段長。`, `量角需量角器，非尺規基本用途。`], "尺規作圖：直尺（不測距）+ 圓規。", "尺規作圖不用刻度量長。") } },
          { id: "angle-basic-calculation", title: "角度的基本計算", template({ r, ri, mc }) { const a = ri(r, 20, 50), b = ri(r, 10, 30); return mc(r, 18, 1, `∠A = ${a}°、∠B = ${b}°，且兩角互不重疊，∠A + ∠B = ?`, `${a + b}°`, [`${a + b + 10}°`, `${Math.abs(a - b)}°`, `${180 - a - b}°`], [`角度可加（不重疊時）。`, `${a}°+${b}°=${a + b}°。`], "不重疊的角可以相加。", "不要誤用補角 180°。") } },
          { id: "straight-angle-calculation", title: "平角的計算", template({ r, ri, mc }) { const a = ri(r, 30, 80); return mc(r, 18, 1, `平角 180° 中，已知一角 ${a}°，另一角為何？`, `${180 - a}°`, [`${a}°`, `${90 - a}°`, `${180 + a}°`], [`平角 = 180°。`, `另一角 = 180−${a} = ${180 - a}°。`], "平角兩部分互補，和 180°。", "平角不是 360°。") } },
          { id: "complementary-supplementary", title: "餘角與補角", template({ r, mc }) { return mc(r, 18, 1, "35° 的補角為何？", "145°", ["55°", "125°", "35°"], [`補角：兩角和 180°。`, `180−35=145°。`], "補角和 180°；餘角和 90°。", "不要與餘角混淆。") } },
          { id: "vertical-angles", title: "對頂角的計算", template({ r, mc }) { return mc(r, 18, 1, "兩直線相交，一對對頂角中已知 62°，另一對頂角為何？", "62°", ["118°", "28°", "90°"], [`對頂角相等。`, `另一對對頂角也是 62°。`], "對頂角相等。", "對頂角不是補角。") } },
          { id: "reflection-angle-application", title: "反射角度的應用", template({ r, mc }) { return mc(r, 18, 2, "光線以 40° 入射角射向平面鏡，反射角為何？", "40°", ["50°", "140°", "80°"], [`反射定律：入射角 = 反射角。`, `反射角 40°。`], "反射：入射角 = 反射角（對法線）。", "入射角不是與鏡面夾角時要換算。") } }
        ]
      },
      {
        title: "三角形和多邊形的內角與外角",
        topics: [
          { id: "triangle-interior-exterior", title: "三角形的內角與外角", template({ r, mc }) { return mc(r, 18, 1, "三角形的一個外角等於什麼？", "兩不相鄰內角的和", ["三內角和", "相鄰內角", "對頂角"], [`外角定理：外角 = 兩不相鄰內角和。`, `例如外角 110° = 60°+50°。`], "外角 = 兩不相鄰內角和。", "外角不是 180°−相鄰內角（雖然數值可能相同）。") } },
          { id: "triangle-angle-calculation", title: "三角形內、外角的計算", template({ r, ri, mc }) { const a = ri(r, 40, 70), b = ri(r, 30, 60); return mc(r, 18, 1, `三角形兩內角 ${a}°、${b}°，第三角為何？`, `${180 - a - b}°`, [`${a + b}°`, `${90 - a}°`, `${180 - a}°`], [`內角和 180°。`, `第三角 = 180−${a}−${b} = ${180 - a - b}°。`], "三角形內角和 = 180°。", "不要只減一個角。") } },
          { id: "quadrilateral-angle-calculation", title: "四邊形角度的計算", template({ r, mc }) { return mc(r, 18, 2, "四邊形三內角 85°、95°、100°，第四角為何？", "80°", ["90°", "70°", "100°"], [`四邊形內角和 360°。`, `360−85−95−100=80°。`], "四邊形內角和 = 360°。", "不要用三角形 180°。") } },
          { id: "polygon-angle-variable", title: "n 邊形度數變動時計算", template({ r, mc }) { return mc(r, 18, 2, "正 n 邊形每一內角 150°，n 為何？", "12", ["10", "8", "15"], [`內角 150° → 外角 30°。`, `n = 360/30 = 12。`], "正 n 邊形：外角和 360°，n=360/外角。", "內角和公式 (n−2)×180 也可。") } },
          { id: "paper-folding-angle", title: "紙片翻摺求角度", template({ r, mc }) { return mc(r, 18, 2, "長方形紙一角沿折線翻摺，使原角 90° 的兩部分成 35° 與 x°，x 為何？", "55°", ["35°", "90°", "145°"], [`折疊後兩部分仍合為原角 90°。`, `x = 90−35 = 55°。`], "翻摺：對應部分角度守恆或互補。", "看折線是平分還是部分重疊。") } },
          { id: "figure-eight-angle", title: "利用 8 字型關係求角度", template({ r, mc }) { return mc(r, 18, 2, "8 字型中，一三角形外角 110°，其中一不相鄰內角 45°，另一內角為何？", "65°", ["45°", "55°", "135°"], [`外角 = 兩不相鄰內角和。`, `110 = 45 + x → x = 65°。`], "8 字型：對頂角相等 + 外角定理。", "先確認哪個是外角、哪兩個是不相鄰內角。") } },
          { id: "y-shape-angle", title: "利用 Y 字型關係求角度", template({ r, mc }) { return mc(r, 18, 2, "Y 字型一點發出三射線，三個角為 110°、95°、x°，x 為何？", "155°", ["75°", "205°", "85°"], [`三射線圍成周角 360°。`, `x = 360−110−95 = 155°。`], "Y 字型三個角和 360°。", "不要誤用平角 180°。") } },
          { id: "isosceles-folding", title: "等腰三角形摺疊的計算", template({ r, mc }) { return mc(r, 18, 2, "等腰三角形頂角 40°，沿底邊中垂線折疊，頂角被分成兩個角各為何？", "20° 與 20°", ["40° 與 40°", "20° 與 40°", "10° 與 10°"], [`中垂線是對稱軸，頂角被平分。`, `40÷2 = 20° 各一。`], "等腰 + 對稱折疊 → 頂角平分。", "底角折疊不一定平分頂角。") } },
          { id: "regular-polygon-angle", title: "正 n 邊形角度的計算", template({ r, mc }) { return mc(r, 18, 2, "正六邊形每一內角為何？", "120°", ["60°", "108°", "135°"], [`正六邊形外角 360/6=60°。`, `內角 = 180−60 = 120°。`], "正 n 邊形內角 = (n−2)×180/n。", "外角 = 360/n。") } }
        ]
      },
      {
        title: "三角形的全等性質與應用",
        topics: [
          { id: "polygon-congruence", title: "多邊形的全等", template({ r, mc }) { return mc(r, 18, 1, "兩多邊形全等表示什麼？", "對應邊相等、對應角相等且可完全重合", ["面積相等", "周長相等", "對應角相等即可"], [`全等：形狀大小完全相同。`, `對應邊、角都相等。`], "全等比「面積相等」更強。", "面積相等不一定全等。") } },
          { id: "triangle-congruence-criteria", title: "三角形全等的判別", template({ r, mc }) { return mc(r, 18, 1, "兩三角形：三邊對應相等，可用哪個全等條件？", "SSS", ["SAS", "ASA", "AAA"], [`三邊對應相等 → SSS。`, `可判全等。`], "SSS、SAS、ASA、AAS、RHS（直角）。", "AAA 只能相似，不能全等。") } },
          { id: "polygon-correspondence", title: "多邊形的對應關係", template({ r, mc }) { return mc(r, 18, 1, "寫 △ABC ≅ △DEF 時，頂點 A 對應誰？", "D", ["E", "F", "任意"], [`全等符號順序表示對應頂點。`, `A↔D，B↔E，C↔F。`], "全等書寫：對應頂點順序一致。", "順序錯了後面推論全錯。") } },
          { id: "triangle-congruence-application", title: "三角形全等的判別應用", template({ r, mc }) { return mc(r, 18, 2, "△ABC 中 AB=AC，D 在 BC 上且 BD=DC，可用哪條件證 △ABD ≅ △ACD？", "SSS", ["SAS", "ASA", "RHS"], [`AB=AC，BD=DC，AD 公共邊。`, `三邊對應相等 → SSS。`], "找公共邊、公共角、中線等隱藏條件。", "SSA 一般不能判全等。") } },
          { id: "perpendicular-bisector", title: "中垂線性質的應用", template({ r, mc }) { return mc(r, 18, 2, "線段 AB 的中垂線上任意一點 P，則 PA 與 PB 的關係？", "PA = PB", ["PA > PB", "PA = 2PB", "PA + PB = AB"], [`中垂線：到兩端點等距。`, `PA = PB。`], "中垂線上的點到兩端等距。", "中垂線垂直平分線段。") } },
          { id: "angle-bisector", title: "角平分線性質的應用", template({ r, mc }) { return mc(r, 18, 2, "∠A 的角平分線上點 P 到兩邊的距離關係？", "相等", ["P 到頂點距離相等", "距離比為 1:2", "無固定關係"], [`角平分線：到兩邊距離相等。`, `兩垂距相等。`], "角平分線上的點到兩邊等距。", "不是到頂點等距。") } },
          { id: "equilateral-height-area", title: "正三角形的高與面積", template({ r, mc }) { return mc(r, 18, 2, "邊長 6 的正三角形，高為何？", "3√3", ["6", "3", "6√3"], [`高 h = (√3/2)×邊長。`, `h = (√3/2)×6 = 3√3。`], "正三角形高 = (√3/2)a；面積 = (√3/4)a²。", "高不是邊長一半（那是 30-60-90 關係）。") } },
          { id: "isosceles-properties", title: "等腰三角形性質的應用", template({ r, mc }) { return mc(r, 18, 2, "等腰三角形頂角 80°，底角各為何？", "50°", ["80°", "40°", "100°"], [`兩底角相等。`, `(180−80)/2 = 50°。`], "等腰：底角相等；頂角 + 2×底角 = 180°。", "底角不是 80°。") } },
          { id: "congruence-properties-application", title: "三角形全等性質的應用", template({ r, mc }) { return mc(r, 18, 2, "已證 △ABC ≅ △DEF 且 AB=5、∠B=40°，則 DE 與 ∠E 依序為？", "5 與 40°", ["5 與 60°", "40 與 5°", "無法確定"], [`對應邊 AB=DE，對應角 ∠B=∠E。`, `DE=5，∠E=40°。`], "全等後用對應關係讀邊角。", "對應頂點順序要一致。") } }
        ]
      },
      {
        title: "三角形的邊角關係",
        topics: [
          { id: "triangle-side-angle-relation", title: "三角形的邊角關係", template({ r, mc }) { return mc(r, 18, 1, "三角形中，最長邊對什麼角？", "最大角", ["最小角", "直角", "與最大角無關"], [`大邊對大角，小邊對小角。`, `最長邊對最大角。`], "邊長與對角大小同向。", "最長邊不可能對最小角。") } },
          { id: "side-length-range", title: "求邊長的範圍", template({ r, mc }) { return mc(r, 18, 2, "三角形兩邊 5、8，第三邊 x 的範圍？", "3 < x < 13", ["x > 13", "3 < x < 8", "x > 3"], [`兩邊差 < 第三邊 < 兩邊和。`, `8−5 < x < 8+5 → 3<x<13。`], "a−b < c < a+b（a,b 為兩邊）。", "要同時有上下界。") } },
          { id: "perimeter-from-range", title: "由邊長的範圍求周長", template({ r, mc }) { return mc(r, 18, 2, "三角形兩邊 4、7，第三邊為整數，周長最小可能值？", "15", ["14", "16", "11"], [`第三邊 x：3<x<11，整數最小 x=4。`, `周長 = 4+7+4 = 15。`], "先求第三邊範圍，再取合理整數。", "周長最小不是 4+7=11。") } },
          { id: "larger-side-larger-angle", title: "大邊對大角", template({ r, mc }) { return mc(r, 18, 1, "△ABC 中 AB > AC，則 ∠C 與 ∠B 的關係？", "∠C > ∠B", ["∠C < ∠B", "∠C = ∠B", "無法比較"], [`AB 對 ∠C，AC 對 ∠B。`, `AB > AC → ∠C > ∠B。`], "大邊對大角。", "邊與對角要配對。") } },
          { id: "larger-angle-larger-side", title: "大角對大邊", template({ r, mc }) { return mc(r, 18, 1, "△ABC 中 ∠A > ∠B，則 BC 與 AC 的關係？", "BC > AC", ["BC < AC", "BC = AC", "無法比較"], [`∠A 對 BC，∠B 對 AC。`, `∠A > ∠B → BC > AC。`], "大角對大邊。", "角與對邊要配對。") } },
          { id: "side-angle-inequality-application", title: "三角形邊角不等關係的應用", template({ r, mc }) { return mc(r, 18, 2, "下列哪一組邊長不能構成三角形？", "3、4、8", ["5、5、8", "6、7、10", "4、6、9"], [`三角形：任兩邊和 > 第三邊。`, `3+4=7 不大於 8，不能構成。`], "檢查最小兩邊和是否大於最大邊。", "3+4=7 不是 >8。") } }
        ]
      }
    ]
  },
  "g8-2-c4": {
    source: "使用者提供：教育部課綱對照國二下「平行與四邊形」三主題題型表（2026-07；對應 g8-2-c4）。",
    sections: [
      {
        title: "平行線與截角性質",
        topics: [
          { id: "parallel-lines-concept", title: "平行線", template({ r, mc }) { return mc(r, 19, 1, "同一平面內兩直線永不相交，稱為？", "平行", ["垂直", "相交", "重合"], [`同一平面、無交點 → 平行。`, `記作 // 。`], "平行：同平面且無交點。", "重合有無限多交點，不是平行。") } },
          { id: "parallel-transversal-angles", title: "平行線的截角性質", template({ r, mc }) { return mc(r, 19, 1, "兩平行線被一直線所截，同位角關係為何？", "相等", ["互補", "互餘", "無固定關係"], [`平行線截角：同位角相等。`, `內錯角也相等；同側內角互補。`], "平行 + 截線 → 同位角、內錯角相等。", "不平行時不能直接用。") } },
          { id: "parallel-lines-test", title: "平行線的判別", template({ r, mc }) { return mc(r, 19, 1, "兩直線被截線所截，若一組同位角相等，則兩直線？", "平行", ["垂直", "相交", "無法判斷"], [`同位角相等 → 兩線平行。`, `平行線判別定理。`], "同位角/內錯角相等可判平行。", "同側內角互補也可判平行。") } },
          { id: "parallel-lines-properties", title: "兩直線平行的相關性質", template({ r, mc }) { return mc(r, 19, 1, "若 a // b 且 b // c，則 a 與 c 的關係？", "a // c", ["a ⊥ c", "a 與 c 相交", "無法確定"], [`平行具有遞移性。`, `a // b // c → a // c。`], "平行線的遞移性。", "需三線皆 pairwise 平行。") } },
          { id: "parallel-perpendicular-corresponding", title: "一般角的兩邊與另一角的兩邊分別平行或垂直的關係", template({ r, mc }) { return mc(r, 19, 2, "∠1 兩邊分別與 ∠2 兩邊平行，則兩角大小關係？", "相等或互補", ["一定相等", "一定互補", "無關係"], [`對應邊平行 → 角相等或互補（同向/反向）。`, `常見：同向則相等。`], "兩角對應邊平行 → 相等或互補。", "要看邊的方向是否同向。") } },
          { id: "parallel-lines-distance", title: "兩平行線間的距離處處相等", template({ r, mc }) { return mc(r, 19, 1, "兩平行線間的距離是指？", "一條線上任一點到另一條線的垂直距離", ["兩線端點距離", "任意連線長度", "斜線距離"], [`距離定義為垂直距離。`, `平行線間垂直距離處處相等。`], "平行線距離 = 垂直距離，處處相等。", "斜線長度不是距離。") } },
          { id: "transversal-angle-calculation", title: "利用平行線截角性質求角度", template({ r, mc }) { return mc(r, 19, 1, "l₁ // l₂，截線與 l₁ 交角 65°，同位角為何？", "65°", ["115°", "25°", "90°"], [`同位角相等。`, `= 65°。`], "平行線 → 同位角/內錯角相等。", "同側內角才互補。") } },
          { id: "triangle-parallel-transversal", title: "三角形與平行線截角性質", template({ r, mc }) { return mc(r, 19, 2, "△ABC 中過 B 作 AC 的平行線，∠ABC=70°，∠BAC=40°，∠ACB 為何？", "70°", ["40°", "110°", "50°"], [`平行線截角：∠ABC 與 ∠BAC 為內錯角等（依配置）。`, `或內角和：180−70−40=70°。`], "三角形 + 平行線常轉角。", "先標平行再選同位/內錯。") } },
          { id: "parallel-test-and-value", title: "平行線的判別與求值", template({ r, mc }) { return mc(r, 19, 2, "截線與兩直線成同位角 55° 與 x°，若兩線平行，x = ?", "55", ["125", "35", "145"], [`同位角相等 → x = 55。`], "判平行或已知平行 → 列角相等/互補。", "同側內角互補不是同位角。") } },
          { id: "zigzag-between-parallels", title: "兩平行線間折線角度的問題", template({ r, mc }) { return mc(r, 19, 2, "兩平行線間折線，上角 40°、下角 30°，中間尖角 x 為何？", "70°", ["110°", "10°", "50°"], [`折線角常可平移成同側角和。`, `x = 40+30 = 70°（典型鋸齒形）。`], "平行線間折線：過頂點作平行線轉角。", "方向錯會變成相減。") } },
          { id: "quadrilateral-zigzag-parallels", title: "四邊形與平行線間折線角度", template({ r, mc }) { return mc(r, 19, 2, "平行四邊形一內角 70°，鄰角為何？", "110°", ["70°", "90°", "180°"], [`平行四邊形鄰角互補。`, `180−70=110°。`], "▱ 鄰角互補、對角相等。", "對角是 70°，鄰角不是。") } },
          { id: "regular-polygon-zigzag-parallels", title: "正多邊形與平行線間折線角度", template({ r, mc }) { return mc(r, 19, 2, "正八邊形每一內角為何？", "135°", ["120°", "108°", "140°"], [`正八邊形外角 360/8=45°。`, `內角 180−45=135°。`], "正 n 邊形內角 = (n−2)×180/n。", "外角和 360°。") } },
          { id: "paper-folding-parallels", title: "利用平行線性質處理摺紙的問題", template({ r, mc }) { return mc(r, 19, 2, "長方形紙沿折線 l 摺，使一邊落在對邊延長線上，折線 l 與兩邊關係？", "l 垂直於該兩平行邊（或為對稱軸）", ["l 與邊平行", "l 任意", "l 是對角線"], [`摺紙常產生平行與對稱。`, `對折時折線常垂直於對應邊或為角平分。`], "摺紙：對稱、平行線、角平分綜合。", "依具體摺法判斷。") } }
        ]
      },
      {
        title: "平行四邊形",
        topics: [
          { id: "parallelogram-definition", title: "平行四邊形的定義", template({ r, mc }) { return mc(r, 19, 1, "兩組對邊分別平行的四邊形稱為？", "平行四邊形", ["梯形", "菱形", "箏形"], [`定義：兩組對邊分別 // 。`, `即平行四邊形。`], "▱：兩組對邊分別平行。", "一組對邊平行是梯形。") } },
          { id: "parallelogram-properties", title: "平行四邊形的性質", template({ r, mc }) { return mc(r, 19, 1, "平行四邊形對邊與對角的關係？", "對邊相等、對角相等", ["對邊相等、對角互補", "四邊都相等", "對角互補"], [`▱ 性質：對邊 // 且 =，對角相等。`, `對角線互相平分。`], "▱ 對邊等、對角等、對角線互相平分。", "鄰角互補，不是對角。") } },
          { id: "parallelogram-test", title: "平行四邊形的判別性質", template({ r, mc }) { return mc(r, 19, 1, "四邊形兩組對邊分別相等，可判斷為？", "平行四邊形", ["矩形", "菱形", "梯形"], [`兩組對邊分別相等 → ▱。`, `判別定理。`], "▱ 判別：對邊平行/相等、對角線互相平分等。", "僅一組對邊相等不足。") } },
          { id: "parallelogram-perimeter-area", title: "平行四邊形的面積與周長", template({ r, mc }) { return mc(r, 19, 1, "平行四邊形周長公式？", "兩鄰邊和 × 2", ["底 × 高", "四邊相加一次即可", "對角線和 × 2"], [`周長 = 2(a+b)。`, `面積 = 底 × 高。`], "周長 = 2(鄰邊和)；面積 = 底×高。", "面積不是斜邊×底。") } },
          { id: "parallelogram-opposite-sides", title: "平行四邊形對邊相等", template({ r, mc }) { return mc(r, 19, 1, "▱ABCD 中 AB=7，則 CD = ?", "7", ["14", "無法確定", "3.5"], [`▱ 對邊相等。`, `CD = AB = 7。`], "▱ 對邊相等。", "鄰邊不一定相等。") } },
          { id: "parallelogram-opposite-angles", title: "平行四邊形對角相等", template({ r, mc }) { return mc(r, 19, 1, "▱ABCD 中 ∠A=65°，則 ∠C = ?", "65°", ["115°", "90°", "125°"], [`對角相等。`, `∠C = ∠A = 65°。`], "▱ 對角相等；鄰角互補。", "∠B = 115° 是鄰角。") } },
          { id: "parallelogram-diagonals-bisect", title: "平行四邊形對角線互相平分", template({ r, mc }) { return mc(r, 19, 2, "▱ABCD 對角線交於 O，AO=5，則 CO = ?", "5", ["10", "2.5", "無法確定"], [`對角線互相平分。`, `CO = AO = 5。`], "▱ 對角線互相平分。", "不是只平分一條。") } },
          { id: "parallelogram-area-calculation", title: "平行四邊形面積的計算", template({ r, ri, mc }) { const b = ri(r, 4, 12), h = ri(r, 3, 8); return mc(r, 19, 2, `平行四邊形底 ${b}、高 ${h}，面積？`, `${b * h}`, [`${(b + h) * 2}`, `${b * h / 2}`, `${b + h}`], [`面積 = 底 × 高。`, `${b}×${h}=${b * h}。`], "▱ 面積 = 底×高（高垂直底）。", "斜邊不是高。") } },
          { id: "parallelogram-application", title: "平行四邊形性質的應用", template({ r, mc }) { return mc(r, 19, 2, "▱ABCD 中對角線 AC、BD 交於 O，若 BO=6，則 DO = ?", "6", ["12", "3", "無法確定"], [`對角線互相平分。`, `DO = BO = 6。`], "▱ 對角線互相平分可求未知段。", "O 是兩對角線中點。") } },
        ]
      },
      {
        title: "特殊四邊形與梯形",
        topics: [
          { id: "special-quad-diagonal-properties", title: "特殊四邊形的對角線性質", template({ r, mc }) { return mc(r, 19, 1, "矩形對角線的性質？", "相等且互相平分", ["互相垂直", "不相等", "只平分不平行"], [`矩形是 ▱，對角線互相平分且相等。`, `菱形對角線垂直平分。`], "矩形：對角線等長且互相平分。", "對角線等長 + ▱ → 矩形。") } },
          { id: "diagonal-test-special-quad", title: "利用對角線性質判別特殊四邊形", template({ r, mc }) { return mc(r, 19, 2, "四邊形對角線互相平分且相等，是什麼四邊形？", "矩形", ["菱形", "箏形", "一般梯形"], [`互相平分 → ▱；再且相等 → 矩形。`, `即矩形。`], "平分 → ▱；平分且等 → 矩形。", "垂直平分 → 菱形（在 ▱ 前提下）。") } },
          { id: "perpendicular-diagonals-area", title: "兩對角線垂直的四邊形面積", template({ r, mc }) { return mc(r, 19, 2, "菱形對角線 6、8，面積？", "24", ["48", "14", "28"], [`菱形面積 = 對角線乘積/2。`, `6×8/2=24。`], "對角線垂直四邊形：面積 = d₁d₂/2。", "不要只用邊長×邊長。") } },
          { id: "trapezoid-concept", title: "梯形", template({ r, mc }) { return mc(r, 19, 1, "梯形定義？", "一組對邊平行", ["兩組對邊平行", "四邊相等", "對角線垂直"], [`一組 // 、一組不 // 。`, `即梯形。`], "梯形：恰一組對邊平行。", "兩組都平行是 ▱。") } },
          { id: "isosceles-trapezoid", title: "等腰梯形", template({ r, mc }) { return mc(r, 19, 1, "等腰梯形的性質？", "兩腰相等、底角相等", ["對角相等", "四邊相等", "對角線垂直"], [`等腰梯形：非平行邊（腰）相等。`, `同底角相等。`], "等腰梯形：腰等、底角等。", "一般梯形腰不一定等。") } },
          { id: "special-quad-properties-test", title: "特殊四邊形的性質與判別", template({ r, mc }) { return mc(r, 19, 2, "四邊相等且四角直角的四邊形是？", "正方形", ["菱形", "矩形", "箏形"], [`四邊等 → 菱形；四角 90° → 矩形。`, `同時成立 → 正方形。`], "正方形 = 矩形 + 菱形。", "四邊等不一定直角。") } },
          { id: "rhombus-properties", title: "菱形的性質", template({ r, mc }) { return mc(r, 19, 1, "菱形對角線關係？", "互相垂直平分", ["相等", "不相交", "只平分不垂直"], [`菱形：四邊等、對角線垂直平分。`, `對角線平分頂角。`], "菱形：四邊等；對角線 ⊥ 且平分。", "對角線相等是矩形。") } },
          { id: "kite-properties", title: "箏形的性質", template({ r, mc }) { return mc(r, 19, 1, "箏形（兩組鄰邊相等）對角線性質？", "一對對角線被另一對垂直平分", ["互相平分", "相等", "無特殊關係"], [`箏形：一對對角被另一對對角線垂直平分。`, `對稱軸沿垂直平分對角線。`], "箏形：鄰邊成對相等。", "不是 ▱ 除非特殊。") } },
          { id: "rectangle-properties", title: "長方形的性質", template({ r, mc }) { return mc(r, 19, 1, "長方形四個角各為何？", "90°", ["60°", "相等即可", "互補"], [`矩形：四角直角。`, `且對邊相等、平行。`], "矩形 = ▱ + 一個直角。", "四角相等 → 矩形。") } },
          { id: "square-properties", title: "正方形的性質", template({ r, mc }) { return mc(r, 19, 1, "正方形同時具有哪些性質？", "菱形與矩形的所有性質", ["只有菱形", "只有矩形", "只有梯形"], [`正方形：四邊等 + 四角 90°。`, `兼具菱形、矩形性質。`], "正方形 = 菱形 + 矩形。", "四邊等不等於正方形。") } },
          { id: "trapezoid-angle-calculation", title: "梯形角度的計算", template({ r, mc }) { return mc(r, 19, 2, "等腰梯形下底角 70°、上底角 110°，另一下底角？", "70°", ["110°", "90°", "180°"], [`等腰梯形同底角相等。`, `另一下底角也是 70°。`], "等腰梯形：同底角相等。", "上底角都是 110°。") } },
          { id: "trapezoid-length-calculation", title: "梯形長度的計算", template({ r, mc }) { return mc(r, 19, 2, "等腰梯形下底 10、上底 6、高 4，腰長？（腰的水平投影 2）", "2√5", ["4", "6", "√20"], [`水平差 (10−6)/2=2，腰 = √(4²+2²)。`, `= √20 = 2√5。`], "等腰梯形作高得直角三角形。", "腰 ≠ 高。") } },
          { id: "trapezoid-midsegment", title: "梯形兩腰中點連線段的問題", template({ r, mc }) { return mc(r, 19, 2, "梯形上底 6、下底 14，兩腰中點連線長？", "10", ["20", "8", "7"], [`中位線 = (上底+下底)/2。`, `(6+14)/2=10。`], "梯形中位線 = (上底+下底)/2。", "不是上下底差。") } },
          { id: "trapezoid-area-calculation", title: "梯形面積的計算", template({ r, ri, mc }) { const top = ri(r, 4, 9), bottom = top + ri(r, 3, 10), h = ri(r, 3, 8), ans = (top + bottom) * h / 2; return mc(r, 19, 2, `梯形上底 ${top}、下底 ${bottom}、高 ${h}，面積？`, `${ans}`, [`${(bottom - top) * h / 2}`, `${top * bottom}`, `${ans + h}`], [`S = (上+下)×高/2。`, `(${top}+${bottom})×${h}/2=${ans}。`], "梯形面積 = (上底+下底)×高/2。", "高要垂直於底。") } }
        ]
      }
    ]
  },
  "g9-1-c1": {
    source: "使用者提供：教育部課綱對照國三上「連比與相似形」四主題題型表（2026-07；對應 g9-1-c1；「求連比」及主題四重複題型已去重）。",
    sections: [
      {
        title: "連比與連比例式",
        topics: [
          { id: "continued-ratio-concept", title: "連比", template({ r, mc }) { return mc(r, 21, 1, "a : b : c = 2 : 3 : 4 表示什麼？", "a、b、c 的比為 2:3:4", ["a+b+c=9", "a=2、b=3、c=4 一定成立", "a×b×c=24"], [`連比表示三量同時的比例關係。`, `a:b:c=2:3:4。`], "連比 a:b:c 表示三量比例。", "連比不是每量都等於比數。") } },
          { id: "continued-ratio-properties", title: "連比的性質", template({ r, mc }) { return mc(r, 21, 1, "若 a:b:c = 2:3:4，則 3a : 3b : 3c = ?", "2:3:4", ["6:9:12", "1:1:1", "2:3:4:3"], [`連比各項同乘非零常數，比值不變。`, `仍為 2:3:4。`], "連比同乘（除）非零常數，比不變。", "只能同乘同除，不能加減。") } },
          { id: "continued-proportion", title: "連比例式", template({ r, mc }) { return mc(r, 21, 1, "若 a : b = b : c，則 b 稱為 a 與 c 的？", "比例中項", ["等差中項", "等比中項", "連比中項"], [`a:b=b:c → b²=ac。`, `b 是 a、c 的比例中項。`], "連比例式 a:b=b:c ⟺ b²=ac。", "比例中項 ≠ 算術平均。") } },
          { id: "find-continued-ratio", title: "求連比", template({ r, mc }) { return mc(r, 21, 1, "a:b=2:3、b:c=3:4，則 a:b:c = ?", "2:3:4", ["2:3:3", "6:9:12", "2:4:6"], [`b 相同比 3，a:b=2:3，b:c=3:4。`, `a:b:c=2:3:4。`], "先統一中間項再寫連比。", "不能直接 a:c=2:4 忽略 b。") } },
          { id: "continued-proportion-properties", title: "連比例式的性質", template({ r, mc }) { return mc(r, 21, 1, "若 a/b = c/d，則 a/c 與 b/d 的關係？", "相等", ["互為倒數", "和相等", "無關"], [`比例式內項外項性質：ad=bc。`, `亦得 a/c = b/d（交叉比相等）。`], "a/b=c/d ⟺ ad=bc。", "內項積 = 外項積。") } },
          { id: "continued-proportion-evaluate", title: "連比例式的求值問題", template({ r, mc }) { return mc(r, 21, 2, "若 x/3 = 8/12，則 x = ?", "2", ["4", "6", "32"], [`交叉相乘：12x = 24。`, `x = 2。`], "比例式 → 交叉相乘解未知數。", "8/12 先化簡為 2/3。") } },
          { id: "continued-ratio-change", title: "求連比的變化題", template({ r, mc }) { return mc(r, 21, 2, "a:b:c=1:2:3，三量各加 2 後成 3:4:5，原 a 為何？（1 份）", "1", ["2", "3", "6"], [`加 2 後 1+2=3、2+2=4、3+2=5 → 3:4:5。`, `原 a 為 1 份 = 1。`], "連比變化：加減同量後列新連比反推。", "先假 1 份大小再驗。") } },
          { id: "continued-ratio-evaluate", title: "連比的求值問題", template({ r, mc }) { return mc(r, 21, 2, "a:b:c=2:3:5 且 a+b+c=40，則 b = ?", "12", ["8", "20", "15"], [`總份數 2+3+5=10，1 份=4。`, `b=3×4=12。`], "連比求值：先求 1 份。", "不要直接用 40÷3。") } },
          { id: "continued-ratio-application", title: "連比的應用問題", template({ r, mc }) { return mc(r, 21, 2, "三人分 360 元，比 2:3:4，第二人得？", "120 元", ["80 元", "160 元", "90 元"], [`總份 9，1 份=40。`, `第二人 3 份=120 元。`], "分配問題 → 連比 + 總量。", "第二人取中間比 3。") } }
        ]
      },
      {
        title: "比例線段",
        topics: [
          { id: "equal-height-triangle-area-ratio", title: "等高或同高三角形的面積比", template({ r, mc }) { return mc(r, 21, 1, "兩三角形等高，底 6 與 9，面積比？", "2:3", ["3:2", "6:9", "1:1"], [`等高時面積比 = 底比。`, `6:9=2:3。`], "等高：面積比 = 底邊比。", "高不同時不能比底。") } },
          { id: "parallel-proportional-segments", title: "平行線截比例線段性質", template({ r, mc }) { return mc(r, 21, 1, "△ABC 中 DE // BC，則 AD:DB 與 AE:EC 的關係？", "相等", ["互為倒數", "和為 1", "無關"], [`平行線截比例：AD/DB = AE/EC。`, `成比例。`], "平行截比例：對應段成比例。", "需 DE // BC。") } },
          { id: "parallel-proportional-application", title: "平行線截比例線段性質的應用", template({ r, mc }) { return mc(r, 21, 2, "DE // BC，AD=4、DB=6，AE=6，則 EC = ?", "9", ["4", "8", "12"], [`AD/DB = AE/EC → 4/6 = 6/EC。`, `EC = 9。`], "列比例式交叉相乘。", "對應段順序要一致。") } },
          { id: "midsegment-theorem", title: "三角形兩邊中點連線性質", template({ r, mc }) { return mc(r, 21, 1, "三角形兩邊中點連線（中位線）與第三邊關係？", "平行且等於第三邊的一半", ["垂直且相等", "平行且相等", "只有平行"], [`中位線定理：// 第三邊且 = 其 1/2。`], "中位線 // 第三邊，長 = 半。", "不是高。") } },
          { id: "equal-height-area-ratio", title: "等高三角形的面積比", template({ r, mc }) { return mc(r, 21, 2, "△ABC 與 △ABD 共邊 AB（同高），若 BC:CD=3:2，則 S△ABC:S△ABD = ?", "3:2", ["2:3", "5:2", "1:1"], [`共高 → 面積比 = 底比 BC:BD…`, `C、D 在同線，BC:CD=3:2 → 面積比 3:2。`], "同高三角形面積比 = 底比。", "確認共高。") } },
          { id: "parallel-proportional-problems", title: "平行線截比例線段的問題", template({ r, mc }) { return mc(r, 21, 2, "l₁ // l₂ // l₃ 截兩直線，左側 2:3，右側第一段 4，第二段？", "6", ["8", "9", "5"], [`平行截線成比例：2/3 = 4/x。`, `x = 6。`], "平行線截線 → 對應段成比例。", "左右截線對應。") } },
          { id: "midsegment-problems", title: "三角形兩邊中點連線的問題", template({ r, mc }) { return mc(r, 21, 2, "△ABC 中 D、E 為 AB、AC 中點，BC=12，則 DE = ?", "6", ["12", "3", "24"], [`DE 為中位線 = BC/2。`, `DE = 6。`], "中位線 = 第三邊一半。", "需確認是中點連線。") } },
          { id: "midsegment-application", title: "三角形兩邊中點連線的應用", template({ r, mc }) { return mc(r, 21, 2, "梯形上底 8、下底 16，兩腰中點連線長？（亦為中位線）", "12", ["8", "24", "10"], [`梯形中位線 = (8+16)/2 = 12。`, `= 12。`], "梯形中位線 = 兩底平均。", "也是三角形中位線應用。") } },
          { id: "two-parallels-proportional", title: "兩組平行線截比例線段的求值問題", template({ r, mc }) { return mc(r, 21, 2, "三平行線截兩橫線，橫線1 得 3、5，橫線2 第一段 6，第二段？", "10", ["8", "15", "9"], [`對應成比例 3/5 = 6/x。`, `x = 10。`], "多平行線截線 → 各段比相等。", "對應位置列比例。") } },
          { id: "parallel-proportional-word", title: "平行線截比例線段的應用", template({ r, mc }) { return mc(r, 21, 2, "路寬 6 m 的人影 2 m，樹影 10 m（同一時刻），樹高？", "30 m", ["20 m", "15 m", "5 m"], [`同一太陽角 → 相似/比例。`, `樹高/6 = 10/2 → 樹高=30 m。`], "影長問題 → 比例或相似。", "同一時刻角相等。") } }
        ]
      },
      {
        title: "相似多邊形",
        topics: [
          { id: "similar-figures", title: "相似形", template({ r, mc }) { return mc(r, 21, 1, "兩圖形相似表示什麼？", "對應角相等、對應邊成比例", ["面積相等", "全等", "周長相等"], [`相似：形狀同、大小可不同。`, `對應角等、邊成比例。`], "相似 ⟺ 對應角等 + 邊成比例。", "全等是相似比 1:1。") } },
          { id: "similar-figures-test", title: "相似形的判別", template({ r, mc }) { return mc(r, 21, 1, "兩三角形兩角對應相等，可判？", "相似（AA）", ["全等", "無法判斷", "等積"], [`AA 相似。`, `兩角等 → 第三角等 → 相似。`], "AA 可判三角形相似。", "AAA 對三角形即 AA。") } },
          { id: "triangle-similarity-properties", title: "三角形的相似性質與判別", template({ r, mc }) { return mc(r, 21, 1, "△ABC ∼ △DEF，AB=6、DE=9，相似比 k = AB:DE = ?", "2:3", ["3:2", "6:9:1", "1:1"], [`相似比 = 對應邊比。`, `6:9 = 2:3。`], "相似比 = 對應邊比（順序一致）。", "順序錯比例就反。") } },
          { id: "similar-polygon-angle-side", title: "相似多邊形的邊角關係", template({ r, mc }) { return mc(r, 21, 2, "兩相似五邊形，小者一內角 108°，大者對應角？", "108°", ["540°", "72°", "無法確定"], [`相似 → 對應角相等。`, `= 108°。`], "相似多邊形：對應角等、邊成比例。", "邊比固定，角各自相等。") } },
          { id: "similar-polygon-test", title: "相似多邊形的判別", template({ r, mc }) { return mc(r, 21, 2, "兩矩形長寬比皆 3:2，則兩矩形？", "相似", ["全等", "不一定相似", "等積"], [`對應角皆 90°，邊成比例。`, `相似。`], "矩形相似 ⟺ 長寬比相等。", "正方形都相似。") } },
          { id: "similar-polygon-application", title: "相似多邊形的應用", template({ r, mc }) { return mc(r, 21, 2, "模型與實物相似比 1:50，模型長 8 cm，實物長？", "400 cm", ["50 cm", "4 m", "800 cm"], [`實物/模型 = 50。`, `8×50=400 cm。`], "相似比 → 對應長度成比例。", "注意單位。") } },
          { id: "similar-triangle-test", title: "相似三角形的判別", template({ r, mc }) { return mc(r, 21, 1, "兩邊成比例且夾角相等，用哪個判別？", "SAS 相似", ["SSS 全等", "ASA 全等", "SSA"], [`夾角相等 + 夾邊成比例 → SAS 相似。`], "SAS、SSS、AA 判相似。", "SSA 不一般。") } },
          { id: "similar-triangle-test-application", title: "相似三角形的判別與應用", template({ r, mc }) { return mc(r, 21, 2, "△ABC 中 ∠A=∠D，AB/DE=AC/DF，可證？", "△ABC ∼ △DEF", ["△ABC ≅ △DEF", "無法證", "等積"], [`夾角 A=D，兩邊成比例 → SAS 相似。`], "先判相似再推邊角。", "全等需更強條件。") } },
          { id: "similar-segment-length", title: "利用三角形的相似性質求線段長", template({ r, mc }) { return mc(r, 21, 2, "△ABC ∼ △DEF，AB=4、DE=6、BC=6，則 EF = ?", "9", ["8", "12", "4"], [`BC/EF = AB/DE → 6/EF = 4/6。`, `EF = 9。`], "相似 → 對應邊成比例。", "對應邊要配對。") } }
        ]
      },
      {
        title: "相似三角形的應用",
        topics: [
          { id: "similar-ratio-relations", title: "相似三角形對應邊、周長、面積的比的關係", template({ r, mc }) { return mc(r, 21, 1, "相似比 2:3，周長比與面積比依序？", "2:3 與 4:9", ["2:3 與 2:3", "4:6 與 2:3", "2:3 與 8:27"], [`周長比 = k；面積比 = k²。`, `2:3 與 4:9。`], "周長比 k，面積比 k²，體積比 k³。", "面積比不是 k。") } },
          { id: "right-triangle-mother-child", title: "直角三角形的母子相似性質", template({ r, mc }) { return mc(r, 21, 2, "Rt△ABC（∠C=90°）斜邊 AB 上的高 CD，則 △ADC、△CDB 與 △ACB 的關係？", "均相似", ["全等", "無相似", "只有一對相似"], [`母子相似：斜邊高分割成兩小 Rt△ 均與原三角形相似。`], "Rt△ 斜邊高 → 三三角形相似。", "用 AA 判。") } },
          { id: "life-measurement", title: "生活中的測量問題", template({ r, mc }) { return mc(r, 21, 2, "人高 160 cm、影長 200 cm，旗杆影 600 cm，旗杆高？", "480 cm", ["320 cm", "800 cm", "960 cm"], [`同一時刻比例相同。`, `160/200 = h/600 → h=480 cm。`], "影長測高 → 比例。", "同一時刻才成立。") } },
          { id: "special-right-triangle-ratio", title: "特殊直角三角形的邊長比", template({ r, mc }) { return mc(r, 21, 1, "45°-45°-90° 三角形三邊比？", "1:1:√2", ["1:√3:2", "3:4:5", "1:2:3"], [`等腰直角三角形。`, `短直角邊:短直角邊:斜邊 = 1:1:√2。`], "45-45-90 → 1:1:√2。", "30-60-90 是 1:√3:2。") } },
          { id: "right-triangle-side-ratio", title: "直角三角形的邊長比值", template({ r, mc }) { return mc(r, 21, 2, "30°-60°-90° 三角形，短邊 5，斜邊？", "10", ["5√3", "5√2", "15"], [`短:斜 = 1:2。`, `斜邊 = 10。`], "30-60-90：1:√3:2。", "短邊對 30°。") } },
          { id: "similar-perimeter-area-ratio", title: "相似三角形的周長、面積比", template({ r, mc }) { return mc(r, 21, 2, "兩相似三角形面積比 9:16，周長比？", "3:4", ["9:16", "81:256", "4:3"], [`面積比 k²=9:16 → k=3:4。`, `周長比 = 3:4。`], "面積比開方得相似比。", "周長比 = 相似比。") } },
          { id: "similar-measurement", title: "利用三角形相似性質作測量", template({ r, mc }) { return mc(r, 21, 2, "河寬：岸邊 A 看對岸 B，作垂線取 C 使 ∠ACB=90°，D 在 AC 上 AD=2、DC=3，DE⊥AC 交 BC 延長於 E，DE=4，河寬 AB ≈ ?", "10", ["6", "8", "12"], [`△ADE ∼ △ABC（AA）。`, `DE/AB = AD/AC = 2/5 → AB=10。`], "間接測量：建相似三角形列比例。", "對應邊配對。") } },
          { id: "special-right-ratio-application", title: "特殊直角三角形邊長比的應用", template({ r, mc }) { return mc(r, 21, 2, "正方形對角線 6√2，邊長？", "6", ["6√2", "3√2", "12"], [`正方形對角線 = 邊×√2。`, `邊 = 6√2/√2 = 6。`], "正方形半對角線 → 45-45-90。", "對角線 = a√2。") } },
          { id: "triangle-similarity-application", title: "三角形相似性質的應用", template({ r, mc }) { return mc(r, 21, 2, "△ABC ∼ △DEF，相似比 1:3，△ABC 周長 12，△DEF 周長？", "36", ["24", "108", "4"], [`周長比 = 相似比 1:3。`, `12×3=36。`], "周長比 = 相似比。", "面積比是平方。") } }
        ]
      }
    ]
  },
  "g9-1-c2": {
    source: "使用者提供：教育部課綱對照國三上「圓形」三主題題型表（2026-07；對應 g9-1-c2；「點與圓的位置關係」與「點 P 與圓 O…」合併）。",
    sections: [
      {
        title: "圓、圓弧長與扇形",
        topics: [
          { id: "circle-vocabulary", title: "圓的相關名詞", template({ r, mc }) { return mc(r, 22, 1, "連接圓心與圓上一點的線段稱為？", "半徑", ["直徑", "弦", "切線"], [`圓心到圓上任意一點。`, `即半徑。`], "半徑 r；直徑 d=2r；弦、弧、扇形等名詞要分清。", "直徑是過圓心的弦。") } },
          { id: "arc-length-sector", title: "圓弧長與扇形", template({ r, mc }) { return mc(r, 22, 1, "半徑 6 的圓，60° 圓弧長？（π 取 3.14）", "6.28", ["3.14", "12.56", "18.84"], [`弧長 = θ/360 × 2πr。`, `60/360 × 2×3.14×6 = 6.28。`], "弧長 = (圓心角/360)×2πr。", "不要與扇形面積公式混淆。") } },
          { id: "sector-area-perimeter", title: "扇面的面積與周長", template({ r, mc }) { return mc(r, 22, 2, "半徑 4、圓心角 90° 的扇形面積？（π 取 3.14）", "12.56", ["6.28", "25.12", "16"], [`S = θ/360 × πr²。`, `90/360 × 3.14 × 16 = 12.56。`], "扇形面積 = (θ/360)πr²；周長含兩半徑+弧長。", "扇形周長 ≠ 弧長。") } },
          { id: "overlapping-sector", title: "扇形重疊部分的面積與周長", template({ r, mc }) { return mc(r, 22, 2, "邊長 4 的正方形內各畫一個 quarter 圓（圓心在正方形兩鄰角），葉形重疊面積常用？", "2 個 quarter 圓 − 正方形", ["正方形 − 1 圓", "2 個 quarter 圓相加", "整圓"], [`葉形 = 兩扇形 − 正方形重疊部分。`, `加減分解。`], "重疊葉形：兩扇形減去正方形（或 2 弓形）。", "先畫對稱輔助線。") } },
          { id: "rotation-sweep", title: "圖形旋轉掃過的軌跡或區域", template({ r, mc }) { return mc(r, 22, 2, "半徑 6 的扇形繞圓心掃過 60°，掃過區域面積？（π 取 3.14）", "18.84", ["37.68", "6.28", "12.56"], [`S = 60/360 × πr² = 1/6 × 3.14 × 36。`, `= 18.84。`], "繞圓心旋轉 → 扇形面積。", "角度用與弧長相同比例。") } }
        ]
      },
      {
        title: "點、直線與圓的位置關係",
        topics: [
          { id: "point-circle-position", title: "點與圓的位置關係", template({ r, mc }) { return mc(r, 22, 1, "圓 O 半徑 5，點 P 到 O 距離 3，P 在圓的？", "內部", ["圓上", "外部", "無法判斷"], [`d=3 < r=5 → 內部。`, `d=r 在圓上；d>r 在外部。`], "點與圓：比較 d 與 r。", "距離是到圓心的距離。") } },
          { id: "line-circle-position", title: "直線 L 與圓 O 的位置關係", template({ r, mc }) { return mc(r, 22, 1, "圓心到直線距離等於半徑，直線與圓？", "相切", ["相交", "相離", "無關"], [`d = r → 相切。`, `d<r 相交；d>r 相離。`], "直線與圓：比較 d 與 r。", "d 是圓心到直線的垂直距離。") } },
          { id: "tangent-properties", title: "圓的切線性質與判別性質", template({ r, mc }) { return mc(r, 22, 1, "切線與過切點的半徑關係？", "互相垂直", ["平行", "重合", "無固定關係"], [`切線性質：切線 ⊥ 半徑（切點處）。`], "切線 ⊥ 半徑（切點）。", "判切線：d=r 或 ⊥ 半徑。") } },
          { id: "external-tangent-pair", title: "過圓外一點的兩切線性質", template({ r, mc }) { return mc(r, 22, 2, "圓外一點 P 向圓引兩切線 PA、PB，則 PA 與 PB？", "等長", ["垂直", "互相平分", "不等"], [`圓外切線段等長。`, `PA = PB。`], "圓外一點兩切線段相等。", "切點處仍 ⊥ 半徑。") } },
          { id: "circumscribed-quadrilateral", title: "圓外切四邊形性質", template({ r, mc }) { return mc(r, 22, 2, "圓外切四邊形（內切圓）兩組對邊和？", "相等", ["互補", "成比例", "無關"], [`外切四邊形：AB+CD = BC+DA。`, `切線段等長推得。`], "外切四邊形：對邊和相等。", "由切線段等長。") } },
          { id: "chord-properties", title: "弦的性質", template({ r, mc }) { return mc(r, 22, 1, "同圓中，較長的弦與圓心的距離？", "較短", ["較長", "相等", "無關"], [`弦越長，弦心距越小。`, `長弦離圓心近。`], "同圓：弦長 ↑ → 弦心距 ↓。", "最長弦是直徑。") } },
          { id: "chord-distance", title: "弦心距", template({ r, mc }) { return mc(r, 22, 1, "弦心距是指？", "圓心到弦的垂直距離", ["弦的長度", "半徑", "切線長"], [`圓心作弦的垂線，垂足到弦距離。`, `即弦心距 d。`], "弦心距 = 圓心到弦的垂直距離。", "不是弦長一半（除非過圓心）。") } },
          { id: "tangent-application", title: "圓切線性質的應用", template({ r, mc }) { return mc(r, 22, 2, "PA 切圓 O 於 A，OA=5，則 PA 與 OA 的夾角？", "90°", ["45°", "180°", "0°"], [`切線 ⊥ 半徑。`, `∠OAP = 90°。`], "切點處切線 ⊥ 半徑。", "可配合勾股求切線長。") } },
          { id: "equal-tangent-segments", title: "切線段等長的應用", template({ r, mc }) { return mc(r, 22, 2, "自 P 引兩切線，切點 A、B，PA=8，則 PB = ?", "8", ["4", "16", "無法確定"], [`圓外切線段等長。`, `PB = PA = 8。`], "PA = PB（P 在圓外）。", "需 P 在圓外。") } },
          { id: "radius-chord-distance", title: "半徑、弦與弦心距的關係", template({ r, mc }) { return mc(r, 22, 2, "半徑 5，弦心距 3，弦長？", "8", ["6", "10", "4"], [`半弦 = √(5²−3²)=4。`, `弦長 = 8。`], "半弦² + d² = r²。", "弦長 = 2×半弦。") } }
        ]
      },
      {
        title: "圓心角、圓周角與弦的關係",
        topics: [
          { id: "arc-degree", title: "弧的度數", template({ r, mc }) { return mc(r, 22, 1, "圓心角 80° 所對弧的度數？", "80°", ["40°", "160°", "100°"], [`弧的度數 = 所對圓心角度數。`, `= 80°。`], "弧度數 = 圓心角度數。", "圓周角是同弧的一半。") } },
          { id: "central-angle-chord", title: "圓心角與弦的關係", template({ r, mc }) { return mc(r, 22, 1, "同圓中，相等圓心角所對的弦？", "相等", ["成比例", "垂直", "無關"], [`等圓心角 → 等弧 → 等弦。`], "同圓：等角對等弧、等弦。", "需同圓或等圓。") } },
          { id: "inscribed-angle", title: "圓周角", template({ r, mc }) { return mc(r, 22, 1, "圓周角的頂點在哪？", "圓上", ["圓心", "圓內", "圓外"], [`圓周角：頂點在圓上，兩邊為弦。`], "圓周角頂點在圓上。", "圓心角頂點在圓心。") } },
          { id: "inscribed-angle-properties", title: "圓周角的相關性質", template({ r, mc }) { return mc(r, 22, 1, "同弧所對的圓周角？", "相等", ["互補", "成 2 倍", "無關"], [`同弧圓周角相等。`], "同弧所對圓周角相等。", "不同弧一般不等。") } },
          { id: "central-inscribed-arc", title: "圓心角、圓周角與弧的度數", template({ r, mc }) { return mc(r, 22, 2, "弧 AB 所對圓心角 100°，圓周角 ACB = ?", "50°", ["100°", "200°", "80°"], [`同弧：圓心角 = 2×圓周角。`, `100 = 2×∠C → ∠C=50°。`], "同弧圓心角 = 2×圓周角。", "圓周角頂點在圓上。") } },
          { id: "semicircle-right-angle", title: "半圓所對圓周角為直角", template({ r, mc }) { return mc(r, 22, 1, "直徑 AB 所對圓周角 ∠ACB = ?", "90°", ["45°", "180°", "60°"], [`半圓（直徑）所對圓周角 90°。`, `∠ACB=90°。`], "直徑所對圓周角 = 90°。", "C 在圓上且非 A、B。") } },
          { id: "parallel-equal-arcs", title: "平行線截等弧", template({ r, mc }) { return mc(r, 22, 2, "圓中兩平行弦所截的弧？", "相等", ["互補", "成 2 倍", "無關"], [`平行弦截等弧（同側）。`], "平行弦 → 所截弧相等。", "在圓的同側。") } },
          { id: "cyclic-quadrilateral", title: "圓內接四邊形對角互補", template({ r, mc }) { return mc(r, 22, 2, "圓內接四邊形一內角 70°，對角？", "110°", ["70°", "90°", "180°"], [`內接四邊形對角互補。`, `180−70=110°。`], "圓內接四邊形：對角和 180°。", "四點共圓才可。") } },
          { id: "two-circles-intersection", title: "兩圓相交的度數問題", template({ r, mc }) { return mc(r, 22, 2, "兩圓相交於 A、B，連兩圓心 O₁、O₂ 與交點，O₁O₂ 與 AB 的關係？", "O₁O₂ 垂直平分 AB", ["O₁O₂ // AB", "O₁O₂ = AB", "無固定關係"], [`兩圓相交：連心線過公共弦中點且 ⊥ 公共弦。`], "兩圓相交 → 連心線 ⊥ 公共弦且平分。", "公共弦是兩圓交點連線。") } },
          { id: "circle-combined-geometry", title: "圓結合其他幾何性質的問題", template({ r, mc }) { return mc(r, 22, 2, "Rt△ABC 斜邊 AB 為直徑，C 在圓上，則 ∠C = ?", "90°", ["45°", "60°", "180°"], [`直徑所對圓周角 90°。`, `∠C=90°。`], "圓 + 直角三角形常見：斜邊為直徑。", "Thales 定理。") } }
        ]
      }
    ]
  },
  "g9-1-c3": {
    source: "使用者提供：教育部課綱對照國三上「推理證明與三角形的心」五主題題型表（2026-07；對應 g9-1-c3）。",
    sections: [
      {
        title: "推理證明",
        topics: [
          { id: "proof-concept", title: "證明", template({ r, mc }) { return mc(r, 23, 1, "數學證明的目的為何？", "由已知依邏輯推出結論為真", ["記憶公式", "計算數值", "畫圖"], [`證明：已知 + 理由 → 結論。`, `每步要有依據。`], "證明 = 邏輯推論鏈，不是只寫答案。", "跳步等於沒證。") } },
          { id: "geometry-proof-properties", title: "幾何證明常用的性質", template({ r, mc }) { return mc(r, 23, 1, "欲證兩角相等，常用哪種方法？", "全等或相似或同弧圓周角", ["只量角度", "假設相等", "用計算機"], [`全等→對應角等；相似→對應角等；同弧圓周角等。`], "幾何證明常用：全等、相似、平行、對稱。", "無依據不能寫相等。") } },
          { id: "algebra-proof-assumptions", title: "代數證明常用的假設", template({ r, mc }) { return mc(r, 23, 1, "代數證明中「設 x 為…」屬於？", "假設或代入未知數", ["結論", "公理", "作圖"], [`先設未知數或給定條件。`, `再列式推論。`], "代數證明：假設→列式→推論。", "假設要寫清楚範圍。") } },
          { id: "geometry-proof", title: "幾何證明", template({ r, mc }) { return mc(r, 23, 2, "證明 △ABC ≅ △DEF 後，可推出？", "對應邊、角相等", ["面積一定不等", "周長一定不等", "無新結論"], [`全等 → 對應邊角相等。`, `可進一步推長度、角度。`], "全等是幾何證明常用結論。", "對應順序要正確。") } },
          { id: "algebra-proof", title: "代數證明", template({ r, mc }) { return mc(r, 23, 2, "證明 2n 必為偶數，第一步常？", "設 n 為整數，寫 2n", ["設 n 為奇數", "直接 n=0", "畫數線"], [`2n 表示 2 的倍數。`, `故為偶數。`], "代數證明：代數式表示性質。", "反例不能當一般證明。") } },
          { id: "geometry-proof-application", title: "幾何證明與應用", template({ r, mc }) { return mc(r, 23, 2, "等腰三角形底角相等，常用證法？", "作頂角平分線（或底邊中線）證全等", ["只量角", "用 AAA 相似", "假設相等"], [`作輔助線得對稱全等。`, `底角相等。`], "等腰→對稱→全等。", "AAA 不能證全等。") } },
          { id: "construction-geometric-reasoning", title: "尺規作圖與幾何推理", template({ r, mc }) { return mc(r, 23, 2, "尺規作圖「垂直平分線」的交點，在三角形中是？", "外心（三邊中垂線交點）", ["內心", "重心", "垂心"], [`三邊垂直平分線交於外心。`, `到三頂點等距。`], "作圖與三心：中垂線→外心；角平分線→內心；中線→重心。", "垂心是三高交點。") } }
        ]
      },
      {
        title: "三角形的外心",
        topics: [
          { id: "circumcenter-meaning", title: "意義", template({ r, mc }) { return mc(r, 23, 1, "三角形的外心是什麼？", "三邊垂直平分線的交點", ["三內角平分線交點", "三中線交點", "三高交點"], [`外心 = 外接圓圓心。`, `三邊中垂線交點。`], "外心：中垂線交點，到三頂點等距。", "內心是角平分線交點。") } },
          { id: "circumcenter-construction", title: "作法", template({ r, mc }) { return mc(r, 23, 1, "作三角形外心，需作哪兩條線？", "任兩邊的垂直平分線", ["角平分線", "高", "中線"], [`兩中垂線交點即外心。`, `第三邊中垂線也過此點。`], "外心作法：≥2 邊的垂直平分線。", "中線不是中垂線。") } },
          { id: "circumcenter-position", title: "位置", template({ r, mc }) { return mc(r, 23, 1, "鈍角三角形的外心在三角形的？", "外部", ["內部", "斜邊中點", "頂點上"], [`鈍角 △：外心在形外。`, `銳角在內；直角在斜邊中點。`], "外心位置看角型：銳內、直斜中、鈍外。", "直角外心在斜邊中點。") } },
          { id: "circumcenter-properties", title: "性質", template({ r, mc }) { return mc(r, 23, 1, "外心 O 到三頂點的距離？", "相等（外接圓半徑）", ["到三邊相等", "成 2:1", "不等"], [`OA=OB=OC = R。`, `R 為外接圓半徑。`], "外心到三頂點等距。", "到三邊距離一般不等。") } },
          { id: "circumcenter-angle-calculation", title: "外心與角度的計算", template({ r, mc }) { return mc(r, 23, 2, "△ABC 外接圓，∠A=60°，同弧 BC 的圓心角 ∠BOC = ?", "120°", ["60°", "90°", "180°"], [`同弧：圓心角 = 2×圓周角。`, `∠BOC = 2×60° = 120°。`], "外心角 ∠BOC = 2∠A（同弧 BC）。", "A 是圓周角，BOC 是圓心角。") } },
          { id: "circumcenter-shared-angle", title: "兩三角形同外心的角度計算", template({ r, mc }) { return mc(r, 23, 2, "兩三角形共用外接圓（同外心），同弧所對圓周角？", "相等", ["互補", "成 2 倍", "無關"], [`同圓同弧 → 圓周角相等。`], "同外心即同圓，用圓周角性質。", "對應弧要相同。") } },
          { id: "circumcenter-isosceles-radius", title: "等腰三角形外接圓半徑的計算", template({ r, mc }) { return mc(r, 23, 2, "等腰 Rt△ 兩股 6，斜邊 6√2，外接圓半徑？", "3√2", ["6", "3", "6√2"], [`直角三角形外心在斜邊中點。`, `R = 斜邊/2 = 3√2。`], "Rt△ 外接圓 R = 斜邊/2。", "外心在斜邊中點。") } },
          { id: "circumcenter-right-area", title: "直角三角形外接圓面積的計算", template({ r, mc }) { return mc(r, 23, 2, "直角三角形斜邊 10，外接圓面積？（π 取 3.14）", "78.5", ["31.4", "157", "50"], [`R = 10/2 = 5。`, `S = πR² = 3.14×25 = 78.5。`], "先 R = 斜邊/2，再 πR²。", "R 不是斜邊。") } }
        ]
      },
      {
        title: "三角形的內心",
        topics: [
          { id: "incenter-meaning", title: "意義", template({ r, mc }) { return mc(r, 23, 1, "三角形的內心是什麼？", "三內角平分線的交點", ["中垂線交點", "中線交點", "高交點"], [`內心 = 內切圓圓心。`, `角平分線交點。`], "內心：角平分線交點，到三邊等距。", "外心是中垂線交點。") } },
          { id: "incenter-construction", title: "作法", template({ r, mc }) { return mc(r, 23, 1, "作三角形內心，需作哪兩條線？", "任兩內角的角平分線", ["垂直平分線", "中線", "高"], [`兩角平分線交點即內心。`], "內心作法：≥2 角平分線。", "中垂線是外心。") } },
          { id: "incenter-position", title: "位置", template({ r, mc }) { return mc(r, 23, 1, "任意三角形內心一定在？", "三角形內部", ["外部", "頂點上", "邊的中點"], [`內心到三邊距離正，在形內。`], "內心恒在三角形內部。", "外心可能在形外。") } },
          { id: "incenter-properties", title: "性質", template({ r, mc }) { return mc(r, 23, 1, "內心 I 到三邊的距離？", "相等（內切圓半徑 r）", ["到三頂點相等", "成 2:1", "不等"], [`I 到三邊垂距 = r。`, `r 為內切圓半徑。`], "內心到三邊等距 = 內切圓半徑。", "到頂點距離一般不等。") } },
          { id: "incenter-angle-calculation", title: "內心與角度的計算", template({ r, mc }) { return mc(r, 23, 2, "△ABC 中 ∠A=40°、∠B=60°，內心 I 處 ∠AIB = ?", "130°", ["100°", "110°", "120°"], [`∠C=80°。`, `∠AIB = 90°+∠C/2 = 130°。`], "∠AIB = 90° + ∠C/2（內心角公式）。", "或用 180−(∠A+∠B)/2。") } },
          { id: "incenter-tangent-length", title: "切線段長的計算", template({ r, mc }) { return mc(r, 23, 2, "內切圓切 AB、BC 於 D、E，BD=3，則 BE = ?", "3", ["6", "無法確定", "0"], [`從 B 引兩切線段等長。`, `BE = BD = 3。`], "同頂點到切點兩切線段相等。", "每頂點一對等長。") } },
          { id: "incenter-length-calculation", title: "內心與長度的計算", template({ r, mc }) { return mc(r, 23, 2, "△ABC 周長 24、面積 24，內切圓半徑 r = ?", "2", ["1", "4", "12"], [`S = pr，p=12。`, `24 = 12r → r=2。`], "面積 = 半周長 × r。", "r = S/p。") } },
          { id: "incenter-area-calculation", title: "內心與面積的計算", template({ r, mc }) { return mc(r, 23, 2, "△ABC 三邊 5、12、13，面積？", "30", ["60", "15", "65"], [`直角三角形 5-12-13。`, `S = 5×12/2 = 30。`], "面積可求 r 或反用 S=pr。", "半周長 p=15。") } }
        ]
      },
      {
        title: "三角形的重心",
        topics: [
          { id: "centroid-meaning", title: "意義", template({ r, mc }) { return mc(r, 23, 1, "三角形的重心是什麼？", "三中線的交點", ["角平分線交點", "中垂線交點", "高交點"], [`重心 = 三中線交點。`], "重心：中線交點。", "中線：頂點到對邊中點。") } },
          { id: "centroid-construction", title: "作法", template({ r, mc }) { return mc(r, 23, 1, "作三角形重心，需連接？", "任兩頂點與對邊中點（中線）", ["角平分線", "高", "中垂線"], [`兩中線交點即重心。`], "重心作法：≥2 中線。", "中線不是高。") } },
          { id: "centroid-position", title: "位置", template({ r, mc }) { return mc(r, 23, 1, "三角形重心一定在？", "三角形內部", ["外部", "某邊上", "頂點"], [`重心恒在形內。`], "重心恒在三角形內。", "外心可能在形外。") } },
          { id: "centroid-properties", title: "性質", template({ r, mc }) { return mc(r, 23, 1, "重心 G 將中線分成？（頂點→G : G→中點）", "2 : 1", ["1 : 1", "1 : 2", "3 : 1"], [`重心分中線 2:1（從頂點量）。`, `AG:GD=2:1。`], "重心到中線比 2:1（近頂點）。", "方向是頂點到邊中點。") } },
          { id: "centroid-length-calculation", title: "重心與長度的計算", template({ r, mc }) { return mc(r, 23, 2, "△ABC 中線 AD 長 12，AG = ?", "8", ["6", "4", "12"], [`G 分 AD 為 2:1，AG = 2/3 × AD。`, `AG = 8。`], "AG = (2/3)×AD。", "GD = (1/3)×AD。") } },
          { id: "centroid-area-calculation", title: "重心與面積的計算", template({ r, mc }) { return mc(r, 23, 2, "重心連三頂點分成 3 小三角形，面積關係？", "三者相等", ["成 2:1", "不相等", "只有兩個相等"], [`重心分形為三等積。`, `各 1/3 原面積。`], "重心分 △ 成 3 等積小三角形。", "每小三角形 = S/3。") } },
          { id: "centroid-application", title: "重心性質的應用", template({ r, mc }) { return mc(r, 23, 2, "△ABC 重心 G，BC 中點 D，若 GD=3，則 AD = ?", "9", ["6", "12", "3"], [`AG:GD=2:1，GD=3 → AG=6。`, `AD=AG+GD=9。`], "用 2:1 求整條中線。", "AD 不是 2×GD。") } }
        ]
      },
      {
        title: "特殊三角形的三心",
        topics: [
          { id: "special-isosceles-centers", title: "等腰三角形", template({ r, mc }) { return mc(r, 23, 2, "等腰三角形（非正三角形）外心一定在？", "對稱軸（底邊中垂線）上", ["任意位置", "底邊中點", "頂角頂點"], [`對稱 → 外心在軸上。`], "等腰 △ 外心、內心、重心在對稱軸上。", "可能在形內/形外。") } },
          { id: "special-right-centers", title: "直角三角形", template({ r, mc }) { return mc(r, 23, 2, "直角三角形的外心在哪？", "斜邊中點", ["直角頂點", "形內任意", "形外"], [`Rt△ 外接圓以斜邊為直徑。`, `外心在斜邊中點。`], "Rt△ 外心 = 斜邊中點。", "內心仍在形內。") } },
          { id: "special-equilateral-centers", title: "正三角形", template({ r, mc }) { return mc(r, 23, 2, "正三角形的外心、內心、重心、垂心關係？", "四心合一", ["外心=內心", "只有重心=外心", "四心皆不同"], [`正 △ 對稱 → 四心同點。`], "正三角形：四心合一。", "非正三角形一般不合一。") } },
          { id: "special-centers-problems", title: "特殊三角形三心的相關問題", template({ r, mc }) { return mc(r, 23, 2, "正三角形邊長 6，外接圓半徑 R = ?", "2√3", ["3", "6", "√3"], [`正 △ R = a/√3 = 2√3。`, `或 R = 2/3 × 高。`], "正 △ R = a/√3；r = a/(2√3)。", "四心合一時 R=2r。") } }
        ]
      }
    ]
  },
  "g9-2-c1": {
    source: "使用者提供：教育部課綱對照國三下「二次函數」二主題題型表（2026-07；對應 g9-2-c1）。",
    sections: [
      {
        title: "二次函數的圖形",
        topics: [
          { id: "quadratic-function-concept", title: "二次函數", template({ r, mc }) { return mc(r, 24, 1, "下列哪一個是二次函數？", "y = 3x² − 2x + 1", ["y = 2x + 1", "y = 1/x", "y = √x"], [`最高次項為 x²。`, `y = 3x²−2x+1 符合。`], "二次函數：y = ax²+bx+c（a≠0）。", "一次、反比例、根式不是。") } },
          { id: "quadratic-graph-forms", title: "二次函數 y = ax² 與 y = a(x - h)² + k 的圖形", template({ r, mc }) { return mc(r, 24, 1, "y = 2(x − 3)² + 1 的圖形可由 y = 2x² 如何得到？", "右移 3、上移 1", ["左移 3、上移 1", "右移 3、下移 1", "左移 1、上移 3"], [`(x−3) 右移 3；+1 上移 1。`], "y=a(x−h)²+k：頂點 (h,k)，由 y=ax² 平移。", "h>0 向右，k>0 向上。") } },
          { id: "opening-direction", title: "二次函數圖形的開口方向", template({ r, mc }) { return mc(r, 24, 1, "y = −4x² + 3 的開口方向？", "向下", ["向上", "向左", "向右"], [`a = −4 < 0。`, `開口向下。`], "a>0 向上；a<0 向下。", "看 x² 係數 a 的正負。") } },
          { id: "vertex-coordinates", title: "二次函數圖形的頂點座標", template({ r, mc }) { return mc(r, 24, 1, "y = 2(x + 1)² − 5 的頂點？", "(−1, −5)", ["(1, −5)", "(−1, 5)", "(1, 5)"], [`頂點式 y=a(x−h)²+k，頂點 (h,k)。`, `(x+1)² 即 (x−(−1))²，頂點 (−1,−5)。`], "頂點式直接讀 (h,k)。", "注意 (x+1) 的 h=−1。") } },
          { id: "axis-of-symmetry", title: "二次函數圖形的對稱軸", template({ r, mc }) { return mc(r, 24, 1, "y = −x² + 4x − 1 的對稱軸方程式？", "x = 2", ["x = −2", "x = 4", "x = −4"], [`x = −b/(2a) = −4/(−2) = 2。`], "一般式對稱軸 x = −b/(2a)。", "頂點式對稱軸 x = h。") } },
          { id: "opening-size", title: "二次函數圖形的開口大小", template({ r, mc }) { return mc(r, 24, 1, "比較 y = 3x² 與 y = x² 的開口大小。", "y = 3x² 較窄", ["y = x² 較窄", "相同", "無法比較"], [`|a| 越大開口越窄。`, `3 > 1，所以 y=3x² 較窄。`], "|a| 越大，拋物線越窄。", "a 的正負只決定方向。") } },
          { id: "graph-translation", title: "二次函數圖形的平移", template({ r, mc }) { return mc(r, 24, 2, "y = x² 向左平移 2 單位、向上平移 3 單位，新函數？", "y = (x + 2)² + 3", ["y = (x − 2)² + 3", "y = (x + 2)² − 3", "y = (x − 2)² − 3"], [`左 2 → (x+2)²；上 3 → +3。`, `y = (x+2)²+3。`], "左加右減、上加下減（對 x 與整式）。", "左移 h 為 (x+h)²。") } },
          { id: "find-quadratic-function", title: "求二次函數", template({ r, mc }) { return mc(r, 24, 2, "頂點 (2, −3)、過 (0, 1) 的二次函數？", "y = x² − 4x + 1", ["y = (x − 2)² − 3", "y = −(x − 2)² − 3", "y = 2x² − 4x"], [`設 y=a(x−2)²−3，代 (0,1)：1=4a−3 → a=1。`, `y=(x−2)²−3=x²−4x+1。`], "已知頂點用頂點式，再代點求 a。", "展開後可化一般式。") } },
          { id: "opening-size-application", title: "函數圖形開口大小的應用", template({ r, mc }) { return mc(r, 24, 2, "同一頂點的三拋物線 y=2(x−1)²+3、y=(x−1)²+3、y=−3(x−1)²+3，開口最窄？", "y = −3(x − 1)² + 3", ["y = (x − 1)² + 3", "y = 2(x − 1)² + 3", "三者相同"], [`|a| 最大者最窄：|−3|=3 最大。`], "同頂點比 |a|。", "方向不同仍比 |a|。") } },
          { id: "graph-key-features", title: "求二次函數圖形的基本要項", template({ r, mc }) { return mc(r, 24, 2, "y = −2(x − 1)² + 4 的開口、頂點、對稱軸依序？", "下；(1,4)；x=1", ["上；(1,4)；x=1", "下；(−1,4)；x=−1", "下；(1,−4)；x=1"], [`a=−2 開口下；頂點 (1,4)；對稱軸 x=1。`], "頂點式一次讀：a、頂點、對稱軸。", "(x−1) 的 h=1。") } },
          { id: "horizontal-line-intersection", title: "二次函數圖形與水平線交點", template({ r, mc }) { return mc(r, 24, 2, "y = x² 與 y = 4 有幾個交點？", "2 個", ["0 個", "1 個", "無限多"], [`x²=4 → x=±2。`, `兩交點。`], "水平線 y=k 交拋物線：解 ax²+bx+c=k。", "k 在頂點 y 值同側看開口。") } },
          { id: "quadratic-application", title: "二次函數的應用", template({ r, mc }) { return mc(r, 24, 2, "球拋出高度 h=−5t²+20t（t 秒），最高點高度？", "20 公尺", ["5 公尺", "10 公尺", "40 公尺"], [`h=−5(t²−4t)=−5(t−2)²+20。`, `最高 20 公尺（t=2）。`], "應用題配成頂點式求最大/最小。", "注意 t 的合理範圍。") } }
        ]
      },
      {
        title: "二次函數的最大值或最小值",
        topics: [
          { id: "vertex-form-max-min", title: "二次函數 y = a(x - h)² + k 的最大值或最小值", template({ r, mc }) { return mc(r, 24, 1, "y = 3(x − 1)² + 2 的最小值？", "2", ["3", "1", "−1"], [`a=3>0 開口上，最小值 k=2。`], "a>0 最小值 k；a<0 最大值 k。", "在 x=h 時取到。") } },
          { id: "vertex-position", title: "二次函數圖形的頂點位置", template({ r, mc }) { return mc(r, 24, 1, "y = −2x² + 8x − 5 的頂點橫坐標？", "2", ["−2", "4", "8"], [`x = −b/(2a) = −8/(−4) = 2。`], "頂點 x = −b/(2a) 或頂點式 h。", "再代回求 y。") } },
          { id: "quadratic-value-change", title: "二次函數值的變化", template({ r, mc }) { return mc(r, 24, 2, "y = x² 在 x>0 時，x 增大則 y？", "增大", ["減小", "不變", "先減後增"], [`a>0，x>0 在對稱軸右側遞增（對 x=0）。`, `y 增大。`], "a>0：x<h 遞減，x>h 遞增。", "看對稱軸兩側。") } },
          { id: "max-min-discrimination", title: "二次函數最大值或最小值的判別", template({ r, mc }) { return mc(r, 24, 1, "y = −x² + 6x − 1 有最大值還是最小值？", "最大值", ["最小值", "兩者皆無", "視 x 而定"], [`a=−1<0 開口下。`, `有最大值。`], "a>0 有最小；a<0 有最大。", "極值在頂點。") } },
          { id: "x-intercept-count", title: "二次函數圖形與 x 軸交點數", template({ r, mc }) { return mc(r, 24, 2, "y = x² − 4x + 4 與 x 軸有幾個交點？", "1 個", ["0 個", "2 個", "3 個"], [`x²−4x+4=(x−2)²=0，重根 x=2。`, `1 個交點（相切）。`], "令 y=0，看判別式 D=b²−4ac。", "D>0 兩交點；D=0 一交點；D<0 無。") } },
          { id: "given-max-min-evaluate", title: "已知最大、小值的求值問題", template({ r, mc }) { return mc(r, 24, 2, "y = −2(x + 3)² + 7 的最大值發生在 x = ?", "−3", ["3", "7", "−7"], [`頂點 x = h = −3 時取最大值 7。`], "頂點式：x=h 取極值 k。", "(x+3)² 的 h=−3。") } },
          { id: "given-max-min-find-function", title: "已知最大、小值求二次函數", template({ r, mc }) { return mc(r, 24, 2, "某二次函數最大值 5，在 x=2 取得，開口向下，可能為？", "y = −a(x − 2)² + 5（a>0）", ["y = a(x − 2)² + 5（a>0）", "y = −(x + 2)² + 5", "y = x² + 5"], [`最大 → a<0，頂點 (2,5)。`, `y=−a(x−2)²+5。`], "已知極值 → 頂點式 y=a(x−h)²+k。", "最大則 a<0；最小則 a>0。") } }
        ]
      }
    ]
  },
  "g9-2-c2": {
    source: "使用者提供：教育部課綱對照國三下「統計與機率」二主題題型表（2026-07；對應 g9-2-c2；「組合事件的機率」去重）。",
    sections: [
      {
        title: "四分位數與盒狀圖",
        topics: [
          { id: "quartile-concept", title: "四分位數", template({ r, mc }) { return mc(r, 20, 1, "資料排序後，第二四分位數 Q₂ 即為？", "中位數", ["平均數", "眾數", "全距"], [`Q₂ 把資料分成上下各一半的中間值。`, `即中位數。`], "Q₁、Q₂（中位數）、Q₃ 為三個四分位數。", "Q₂ 不是平均數。") } },
          { id: "ogive-quartile-group", title: "中間累積次數分配折線圖判斷 Qm（m＝1、2、3） 所在組別", template({ r, mc }) { return mc(r, 20, 2, "40 筆資料，由累積次數折線圖知 Q₂ 在第 20 次，Q₂ 落在累積次數剛超過 20 的組別，該組為？", "含第 20 次資料的那一组", ["第一組", "最後一組", "資料不足"], [`Q₂ 在第 n/2=20 次。`, `由折線圖讀累積次數達 20 的組別。`], "累積折線圖：n/4、n/2、3n/4 對應組別。", "先算四分位位置再讀圖。") } },
          { id: "range-iqr", title: "全距與四分位距", template({ r, mc }) { return mc(r, 20, 1, "Q₁=12、Q₃=28，四分位距 IQR = ?", "16", ["40", "20", "14"], [`IQR = Q₃−Q₁ = 28−12 = 16。`], "IQR = Q₃−Q₁；全距 = max−min。", "IQR 不是 Q₃+Q₁。") } },
          { id: "boxplot-concept", title: "盒狀圖", template({ r, mc }) { return mc(r, 20, 1, "盒狀圖的盒子左右邊界通常代表？", "Q₁ 與 Q₃", ["最小值與最大值", "平均數與中位數", "Q₂ 與 Q₃"], [`盒長 = Q₁ 到 Q₃，含中間 50% 資料。`, `鬚線延伸至非離群值範圍。`], "盒：Q₁～Q₃；盒內線：Q₂。", "鬚不是一定到 min/max。") } },
          { id: "quartile-boxplot-drawing", title: "求四分位數與盒狀圖的繪製", template({ r, mc }) { return mc(r, 20, 2, "資料 3、5、7、8、11、13、15（7 筆），Q₂（中位數）= ?", "8", ["7", "11", "9"], [`排序後第 4 個值。`, `Q₂ = 8。`], "奇數筆：中位數為正中間值。", "先排序再取。") } },
          { id: "quartile-group-judgment", title: "四分位數所在組別的判斷", template({ r, mc }) { return mc(r, 20, 2, "分組資料 0～10 有 8 次、10～20 有 12 次，共 20 次，Q₂ 約在第幾次？", "第 10 次", ["第 8 次", "第 12 次", "第 5 次"], [`Q₂ 在第 n/2=10 次附近。`, `落在 10～20 組（依累積次數）。`], "分組資料用累積次數找 Qm 所在組。", "先算累積次數。") } },
          { id: "single-boxplot-reading", title: "單一盒狀圖的判讀", template({ r, mc }) { return mc(r, 20, 2, "盒狀圖 Q₁=20、Q₂=30、Q₃=45，中位數為？", "30", ["20", "45", "35"], [`盒內橫線為 Q₂。`, `中位數 30。`], "盒狀圖中線 = Q₂。", "盒邊為 Q₁、Q₃。") } },
          { id: "two-boxplot-comparison", title: "兩盒狀圖的判讀與比較", template({ r, mc }) { return mc(r, 20, 2, "甲組 IQR=10、乙組 IQR=20，哪組資料較分散？", "乙組", ["甲組", "相同", "無法比較"], [`IQR 越大，中間 50% 越分散。`, `乙組較分散。`], "比分散：看 IQR 或盒長、全距。", "中心位置要用 Q₂ 比。") } }
        ]
      },
      {
        title: "機率",
        topics: [
          { id: "probability-concept", title: "機率的概念", template({ r, mc }) { return mc(r, 25, 1, "機率的值域為何？", "0 到 1 之間（含 0、1）", ["任意正數", "−1 到 1", "0 到 100"], [`0≤P(A)≤1。`, `不可能 0，必然 1。`], "機率 0～1；也可寫成百分比。", "機率可為 0，不可為負。") } },
          { id: "tree-diagram", title: "樹狀圖", template({ r, mc }) { return mc(r, 25, 1, "擲一枚硬幣再擲一顆骰子，樹狀圖共有幾個基本結果？", "12", ["6", "8", "2"], [`硬幣 2 種 × 骰子 6 種 = 12。`], "樹狀圖：各階段相乘得樣本空間大小。", "不要漏乘。") } },
          { id: "probability-methods", title: "機率的求法", template({ r, mc }) { return mc(r, 25, 1, "等可能試驗中，P(A) = ?", "A 的結果數 ÷ 全部結果數", ["全部結果數 ÷ A 的結果數", "A 的結果數 × 全部結果數", "1 − A 的結果數"], [`P(A)=n(A)/n(S)。`, `有利÷全部。`], "古典機率：有利/全部（等可能）。", "分母是樣本空間大小。") } },
          { id: "single-event-probability", title: "單一事件的機率", template({ r, mc }) { return mc(r, 25, 1, "公平骰子擲一次，出現偶數的機率？", "1/2", ["1/3", "2/3", "1/6"], [`偶數 2、4、6 共 3 種。`, `P = 3/6 = 1/2。`], "單一試驗：數有利結果。", "6 面骰共 6 種等可能。") } },
          { id: "compound-event-probability", title: "組合事件的機率", template({ r, mc }) { return mc(r, 25, 2, "擲公平硬幣兩次，至少出現一次正面的機率？", "3/4", ["1/2", "1/4", "2/3"], [`樣本空間 4 種；至少一正：正正、正反、反反除外→3 種。`, `P = 3/4。`], "組合事件：列表或 1−對立事件。", "「至少一」常用 1−全否。") } },
          { id: "simple-probability", title: "簡單的機率問題", template({ r, mc }) { return mc(r, 25, 1, "袋中 3 紅 2 白，隨機抽 1 球，抽到白球機率？", "2/5", ["3/5", "1/2", "2/3"], [`共 5 球，白球 2 顆。`, `P = 2/5。`], "簡單機率：有利球數/總球數。", "等可能才直接相除。") } },
          { id: "card-probability", title: "撲克牌的機率問題", template({ r, mc }) { return mc(r, 25, 2, "52 張撲克牌隨機抽 1 張，抽到 K 的機率？", "4/52", ["13/52", "1/13", "4/13"], [`K 有 4 張。`, `P = 4/52 = 1/13。`], "撲克牌：先數有利張數。", "約分後 1/13。") } },
          { id: "life-probability", title: "生活中的機率", template({ r, mc }) { return mc(r, 25, 2, "某班 30 人中有 12 女生，隨機點 1 人，點到女生的機率？", "2/5", ["1/3", "1/2", "3/5"], [`P = 12/30 = 2/5。`], "生活情境：有利人數/總人數。", "等可能假設每人機會相同。") } }
        ]
      }
    ]
  },
  "g9-2-c3": {
    source: "使用者提供：教育部課綱對照國三下「立體圖形」三主題題型表（2026-07；對應 g9-2-c3）。",
    sections: [
      {
        title: "空間中的線與平面",
        topics: [
          { id: "plane-plane", title: "平面與平面", template({ r, mc }) { return mc(r, 26, 1, "兩平面永不相交且無限延伸，稱為？", "平行", ["垂直", "重合", "相交"], [`同一空間內無交點 → 平行。`], "平面 // 平面：無交線或重合。", "有交線則相交。") } },
          { id: "line-plane", title: "直線與平面", template({ r, mc }) { return mc(r, 26, 1, "一直線與一平面沒有交點，關係為？", "平行", ["垂直", "相交", "重合"], [`直線 // 平面：無交點。`], "線 // 面：無交點；線 ⊥ 面：垂直相交。", "有交點則相交。") } },
          { id: "line-line", title: "直線與直線", template({ r, mc }) { return mc(r, 26, 1, "空間中兩直線既不平行也不相交，稱為？", "歪斜（異面）", ["垂直", "重合", "平行"], [`異面直線：不共面、不相交、不平行。`], "空間中兩線：平行、相交、異面。", "異面 ≠ 垂直。") } },
          { id: "space-line-plane-relations", title: "空間中線與平面間的關係", template({ r, mc }) { return mc(r, 26, 2, "一直線垂直於平面上兩相交直線，則此線與平面？", "垂直", ["平行", "僅相交", "無法確定"], [`線垂直於平面內兩相交線 → 線 ⊥ 平面。`], "線 ⊥ 面 ⟺ 線垂直平面內兩相交線。", "需兩相交線，不能只用平行線。") } },
          { id: "space-distance", title: "空間中兩點距離的計算", template({ r, mc }) { return mc(r, 26, 2, "A(1,2,3)、B(4,6,7) 的距離？", "√41", ["√29", "7", "5"], [`AB=√[(4−1)²+(6−2)²+(7−3)²]=√(9+16+16)=√41。`], "空間距離 = √[(Δx)²+(Δy)²+(Δz)²]。", "先算各軸差再畢氏。") } }
        ]
      },
      {
        title: "角柱與圓柱",
        topics: [
          { id: "prism", title: "角柱", template({ r, mc }) { return mc(r, 26, 1, "角柱的體積公式？", "底面積 × 高", ["底面積 ÷ 高", "底面周長 × 高", "底面積 × 高 ÷ 3"], [`V = Bh，B 為底面積，h 為垂直高。`], "柱體 V = 底面積 × 高。", "高要垂直底面。") } },
          { id: "cylinder", title: "圓柱", template({ r, mc }) { return mc(r, 26, 1, "圓柱底面半徑 3、高 10，體積？（π 取 3.14）", "282.6", ["94.2", "188.4", "90"], [`V = πr²h = 3.14×9×10 = 282.6。`], "圓柱 V = πr²h。", "r 是底面半徑。") } },
          { id: "net-reading", title: "展開圖的判讀", template({ r, mc }) { return mc(r, 26, 1, "長方體展開圖通常由幾個矩形組成？", "6", ["4", "8", "12"], [`上下底、前後、左右各 1 → 6 面。`], "長方體 6 面；展開圖判讀對應面。", "展開後不重疊。") } },
          { id: "net-volume-surface", title: "由展開圖求體積與表面積", template({ r, mc }) { return mc(r, 26, 2, "展開圖為底 4×3、高 5 的長方體，體積？", "60", ["35", "47", "12"], [`V = 4×3×5 = 60。`], "從展開圖讀底面與高。", "表面積 = 各面積和。") } },
          { id: "prism-cylinder-calc", title: "求柱體的體積與表面積", template({ r, mc }) { return mc(r, 26, 2, "圓柱 r=2、h=5，側面積？（π 取 3.14）", "62.8", ["31.4", "125.6", "20"], [`側面積 = 2πrh = 2×3.14×2×5 = 62.8。`], "圓柱側面積 = 2πrh。", "全表面積還要加兩底 πr²。") } }
        ]
      },
      {
        title: "角錐與圓錐",
        topics: [
          { id: "pyramid", title: "角錐", template({ r, mc }) { return mc(r, 26, 1, "與角柱同底同高的角錐，體積為角柱的？", "1/3", ["1/2", "相同", "3 倍"], [`錐體 V = Bh/3。`, `同底同高柱體的 1/3。`], "錐體 V = (1/3)×底面積×高。", "不是 1/2。") } },
          { id: "cone", title: "圓錐", template({ r, mc }) { return mc(r, 26, 1, "圓錐底面半徑 3、高 4，體積？", "12π", ["36π", "4π", "48π"], [`V = πr²h/3 = π×9×4/3 = 12π。`], "圓錐 V = πr²h/3。", "h 是垂直高，不是斜高。") } },
          { id: "pyramid-surface-area", title: "求角錐的表面積", template({ r, mc }) { return mc(r, 26, 2, "底面為邊長 6 的正方形角錐，側面為 4 個全等等腰三角形、每個面積 15，總表面積？", "96", ["60", "90", "120"], [`底面 6×6=36；側面 4×15=60。`, `總表面積 36+60=96。`], "角錐表面積 = 底面 + 各側面積和。", "逐面相加。") } },
          { id: "pyramid-surface-application", title: "角錐表面積的應用", template({ r, mc }) { return mc(r, 26, 2, "正四角錐底邊 10、側面等腰三角形高 13，側面積（4 面）？", "260", ["130", "520", "100"], [`單側面 = 10×13/2=65。`, `4 面 = 260。`], "應用：先算單側再乘面數。", "別漏底面（若求總表面積）。") } },
          { id: "cone-net-surface", title: "由展開圖求圓錐的表面積", template({ r, mc }) { return mc(r, 26, 2, "圓錐展開為半徑 10 的扇形（母線 l=10）與底圓 r=6，側面積？", "60π", ["100π", "36π", "10π"], [`側面積 = πrl = π×6×10 = 60π。`], "圓錐側面展開為扇形，面積 πrl。", "l 是母線（斜高）。") } },
          { id: "cone-surface-calculation", title: "圓錐表面積的計算", template({ r, mc }) { return mc(r, 26, 2, "圓錐 r=3、母線 l=5，全表面積？", "24π", ["15π", "9π", "30π"], [`側面 π×3×5=15π；底面 π×9=9π。`, `全表面積 24π。`], "全表面積 = πr² + πrl。", "先求 l（勾股）若只給 r、h。") } }
        ]
      }
    ]
  }
};
