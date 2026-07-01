window.EXAM_ENGINE = (() => {
  const U = window.MATH_DATA.units;

  function rngFromSeed(seed) {
    let a = (Number(seed) || 1) >>> 0;
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  const ri = (r, min, max) => Math.floor(r() * (max - min + 1)) + min;
  const pick = (r, list) => list[ri(r, 0, list.length - 1)];
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };
  const over = (n, d) => `[[frac:${n}|${d}]]`;
  const frac = (n, d) => { const g = gcd(n, d); n /= g; d /= g; if (d < 0) { n *= -1; d *= -1; } return d === 1 ? `${n}` : over(n, d); };
  const signed = n => n < 0 ? `−${Math.abs(n)}` : `${n}`;
  const term = (coef, variable = "x") => coef === 1 ? variable : coef === -1 ? `−${variable}` : `${signed(coef)}${variable}`;
  const plus = n => n < 0 ? ` − ${Math.abs(n)}` : ` + ${n}`;
  const superscript = value => String(value).replace(/[\d-]/g, c => ({"0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","-":"⁻"}[c]));
  const sci = (coef, exp) => {
    let c = coef, e = exp;
    while (Math.abs(c) >= 10) { c /= 10; e += 1; }
    while (Math.abs(c) > 0 && Math.abs(c) < 1) { c *= 10; e -= 1; }
    return `${Number(c.toFixed(6))} × 10${superscript(e)}`;
  };
  function shuffled(r, arr) {
    const out = [...arr];
    for (let i = out.length - 1; i > 0; i--) { const j = ri(r, 0, i); [out[i], out[j]] = [out[j], out[i]]; }
    return out;
  }
  function mc(r, unitId, difficulty, text, correct, distractors, steps, tip, trap, concept) {
    const values = [];
    [correct, ...distractors].map(String).forEach(v => { if (!values.includes(v)) values.push(v); });
    let bump = 1;
    while (values.length < 4) { const fallback = `${correct} ${"′".repeat(bump++)}`; if (!values.includes(fallback)) values.push(fallback); }
    const choices = shuffled(r, values.slice(0, 4));
    return { type: "mc", unitId, difficulty, text, choices, answer: choices.indexOf(String(correct)), steps, tip, trap, concept: concept || U[unitId - 1].summary, formula: U[unitId - 1].formula };
  }
  function cr(unitId, difficulty, text, steps, answer, tip, trap, rubric, concept) {
    return { type: "cr", unitId, difficulty, text, steps, answer, tip, trap, rubric, concept: concept || U[unitId - 1].summary, formula: U[unitId - 1].formula };
  }

  const generators = [
    (r, level) => {
      const a = ri(r, 4, 8 + level), b = ri(r, 2, 5 + level), c = ri(r, 2, 4 + level);
      const ans = -a - b * c;
      return mc(r, 1, 1, `計算 ${signed(-a)} + ${b} × (${signed(-c)}) 的值。`, ans, [a - b * c, -a + b * c, a + b * c], [`先算乘法：${b} × (${signed(-c)}) = ${signed(-b * c)}。`, `再算 ${signed(-a)} + (${signed(-b * c)}) = ${signed(ans)}。`], "先判乘積正負，再做絕對值運算；可避免邊算邊掉負號。", "負數乘法算完後，外面的加號仍要保留；不要把『加負數』看成加正數。")
    },
    (r) => {
      const p = ri(r, 2, 7), q = ri(r, 2, 8), e = ri(r, 3, 6), f = -ri(r, 1, 3);
      const raw = p * q, ans = sci(raw, e + f);
      return mc(r, 2, 1, `以科學記號表示 (${p} × 10${superscript(e)})(${q} × 10${superscript(f)})。`, ans, [sci(raw, e - f), sci(p + q, e + f), sci(raw, e + f + 1)], [`係數相乘：${p}×${q}=${raw}；10 的次方相乘，指數相加：${e}+(${f})=${e + f}。`, `先得 ${raw}×10${superscript(e + f)}，再把係數調成 1 到 10，得到 ${ans}。`], "科學記號先分成『係數』與『10 的次方』兩條線計算。", "若係數乘完大於等於 10，要右移小數點並把 10 的指數加 1。")
    },
    (r) => {
      const pair = pick(r, [[48, 72], [60, 84], [72, 90], [54, 81], [96, 120]]);
      const [a, b] = pair, g = gcd(a, b), l = a * b / g;
      return mc(r, 3, 2, `將 ${a} 個紅色積木與 ${b} 個藍色積木平均分成若干組，每組兩種積木的數量都相同且全部分完。最多可分成幾組？`, g, [l, a / g + b / g, Math.min(a, b) / 2], [`『最多分組且全部分完』要找 ${a} 與 ${b} 的最大公因數。`, `最大公因數為 ${g}，所以最多分成 ${g} 組；每組有 ${a / g} 個紅色與 ${b / g} 個藍色積木。`], "『最多分組』看最大公因數；『最少同時』看最小公倍數。", "不要把每組積木數 ${a / g + b / g} 誤當成組數。")
    },
    (r) => {
      const q = pick(r, [4, 5, 6, 8]), s = pick(r, [3, 5, 7]), p = ri(r, 1, q - 1), n = p * s + q;
      const ans = frac(n, q * s);
      return mc(r, 4, 1, `計算 ${over(p, q)} + ${over(1, s)}。`, ans, [frac(p + 1, q + s), frac(p * s - q, q * s), frac(n, q + s)], [`公分母可取 ${q * s}：${over(p, q)} = ${over(p * s, q * s)}，${over(1, s)} = ${over(q, q * s)}。`, `相加得 ${over(`${p * s}+${q}`, q * s)} = ${ans}。`], "先估答案應比兩個加數都大，可快速排除過小選項。", "分數相加不能直接把分子、分母各自相加。")
    },
    (r, level) => {
      const x = ri(r, 2, 7 + level), a = ri(r, 2, 4 + level), b = ri(r, 1, 5), d = ri(r, 1, 8), c = a * (x + b) - d;
      return mc(r, 5, 2, `若 ${a}(x + ${b}) − ${d} = ${c}，則 x =？`, x, [x + b, x - 1, x + 1], [`兩邊先加 ${d}：${a}(x+${b})=${c + d}。`, `兩邊除以 ${a}：x+${b}=${over(c + d, a)}=${(c + d) / a}。`, `兩邊減 ${b}，得 x=${x}。`], "看到括號先保留整體，先把外面的常數移走，計算更乾淨。", `${a}(x+${b}) 展開時，${a} 必須同時乘到 x 與 ${b}。`)
    },
    (r) => {
      const x = ri(r, 2, 8), y = ri(r, 1, 7), s = x + y, d = 2 * x - y;
      return mc(r, 6, 2, `已知 x + y = ${s}，2x − y = ${d}，則 (x, y) 為何？`, `(${x}, ${y})`, [`(${y}, ${x})`, `(${x + 1}, ${y - 1})`, `(${x - 1}, ${y + 1})`], [`兩式相加可消去 y：3x=${s + d}，所以 x=${x}。`, `代回 x+y=${s}，得 y=${s}−${x}=${y}。`, `檢查 2(${x})−${y}=${d}，成立。`], "係數剛好相反時直接相加，是最短的消去法。", "有序對順序是 (x,y)，不能因數值相同關係而交換。")
    },
    (r) => {
      const x = ri(r, -3, 4), y = ri(r, -4, 5), c = 2 * x + y;
      const correct = `(${x}, ${y})`;
      const d1 = `(${x + 1}, ${y})`, d2 = `(${x}, ${y + 2})`, d3 = `(${x - 1}, ${y - 1})`;
      return mc(r, 7, 2, `下列哪一點在直線 2x + y = ${c} 上？`, correct, [d1, d2, d3], [`把各點的 x、y 代入左式即可判斷。`, `代入 (${x},${y})：2×(${x})+(${y})=${c}，等於右邊，所以此點在線上。`], "選項題不用先畫圖；逐點代入通常最快。", "坐標的第一個數是 x、第二個數是 y，順序不能顛倒。")
    },
    (r) => {
      const scale = pick(r, [25000, 50000, 100000]), cm = pick(r, [2, 3, 4, 5, 6]);
      const km = cm * scale / 100000;
      return mc(r, 8, 2, `地圖比例尺為 1：${scale.toLocaleString("zh-TW")}，圖上兩地距離 ${cm} 公分，實際距離是多少公里？`, `${km} 公里`, [`${cm * scale / 1000} 公里`, `${km * 10} 公里`, `${km / 10} 公里`], [`實際長度 = ${cm}×${scale}=${cm * scale} 公分。`, `1 公里 = 100,000 公分，所以 ${cm * scale}÷100,000=${km} 公里。`], "比例尺題先全程用同一單位，最後一步再換公里。", "1 公里是 100,000 公分，不是 1,000 公分。")
    },
    (r) => {
      const a = ri(r, 2, 5), bound = ri(r, -2, 5), b = ri(r, 1, 8), c = -a * bound + b;
      const ans = `x ≥ ${signed(bound)}`;
      return mc(r, 9, 2, `解不等式 ${signed(-a)}x + ${b} ≤ ${signed(c)}。`, ans, [`x ≤ ${signed(bound)}`, `x > ${signed(bound)}`, `x < ${signed(bound)}`], [`兩邊減 ${b}：${signed(-a)}x ≤ ${signed(c - b)}。`, `兩邊除以 ${signed(-a)}；因除以負數，不等號反向，得 ${ans}。`], "乘除負數的當下立刻把不等號反向，不要留到最後才想。", "加減負數不會反向；只有兩邊乘或除以負數才反向。")
    },
    (r) => {
      const avg = ri(r, 8, 16), count = pick(r, [4, 5, 6]), added = avg + ri(r, 3, 8), newAvg = frac(avg * count + added, count + 1);
      return mc(r, 10, 2, `${count} 筆資料的平均數為 ${avg}，加入一筆 ${added} 後，新的平均數是多少？`, newAvg, [avg + added, frac(avg + added, 2), frac(avg * (count + 1) + added, count + 1)], [`原資料總和 = ${avg}×${count}=${avg * count}。`, `加入後總和 ${avg * count}+${added}=${avg * count + added}，共有 ${count + 1} 筆。`, `新平均 = ${over(avg * count + added, count + 1)}=${newAvg}。`], "平均數題先把『平均×個數』還原成總和。", "不能把舊平均與新資料直接取兩數平均，因為權重不同。")
    },
    (r) => {
      const angle = ri(r, 4, 13) * 10, ans = 180 - angle;
      return mc(r, 11, 1, `兩相鄰角形成一個平角，其中一角為 ${angle}°，另一角為多少度？`, `${ans}°`, [`${180 + angle}°`, `${90 - Math.min(angle, 80)}°`, `${360 - angle}°`], [`平角為 180°，兩相鄰角互補。`, `另一角 = 180°−${angle}°=${ans}°。`], "看到一直線上的相鄰角，第一反應是和為 180°。", "繞一點一整圈才是 360°；平角是 180°。")
    },
    (r) => {
      const a = ri(r, 2, 7), b = ri(r, 1, 6);
      return mc(r, 12, 2, `展開 (${a}x + ${b})² 的結果為何？`, `${a * a}x² + ${2 * a * b}x + ${b * b}`, [`${a * a}x² + ${b * b}`, `${a * a}x² + ${a * b}x + ${b * b}`, `${a * a}x² − ${2 * a * b}x + ${b * b}`], [`套用 (A+B)²=A²+2AB+B²。`, `A=${a}x、B=${b}，所以 A²=${a * a}x²、2AB=${2 * a * b}x、B²=${b * b}。`], "中間項一定是兩項乘積的 2 倍。", "平方和公式不能漏掉 2AB；括號內是加號，中間項就是正。")
    },
    (r) => {
      const triple = pick(r, [[3,4,5], [5,12,13], [8,15,17], [7,24,25]]), k = ri(r, 1, 1 + (r() > .65 ? 1 : 0));
      const [a,b,c] = triple.map(n => n * k);
      return mc(r, 13, 2, `一直角三角形的兩股長為 ${a}、${b}，斜邊長為何？`, c, [a + b, Math.abs(b - a), c + 1], [`由畢氏定理 c²=${a}²+${b}²=${a*a}+${b*b}=${c*c}。`, `邊長取正值，所以 c=${c}。`], "常見畢氏數組 3-4-5、5-12-13、8-15-17 值得熟悉。", "斜邊是直角對面的最長邊，不可把任一邊直接放在 c。")
    },
    (r) => {
      const p = ri(r, 2, 7), q = ri(r, 2, 8), sum = p + q, prod = p * q;
      return mc(r, 14, 2, `因式分解 x² − ${sum}x + ${prod}。`, `(x − ${p})(x − ${q})`, [`(x + ${p})(x + ${q})`, `(x − ${sum})(x + ${prod})`, `(x − ${prod})(x + ${sum})`], [`找兩個數，使其和為 −${sum}、積為 ${prod}。`, `這兩數是 −${p} 與 −${q}，所以 x²−${sum}x+${prod}=(x−${p})(x−${q})。`], "首項係數為 1 時，找『和是中項係數、積是常數』的兩數。", "常數為正、中項為負，兩個括號通常都用減號。")
    },
    (r) => {
      const p = ri(r, 1, 6), q = ri(r, p + 1, p + 6), sum = p + q, prod = p * q;
      return mc(r, 15, 2, `方程式 x² − ${sum}x + ${prod}=0 的解為何？`, `x = ${p} 或 ${q}`, [`x = −${p} 或 −${q}`, `x = ${sum} 或 ${prod}`, `x = ${p + q}`], [`左式因式分解為 (x−${p})(x−${q})=0。`, `依零乘積性質，x−${p}=0 或 x−${q}=0。`, `因此 x=${p} 或 ${q}。`], "先整理成等於 0，才可使用零乘積性質。", "不能把兩個因式同時都設為 0；是『其中至少一個為 0』。")
    },
    (r, level) => {
      const a1 = ri(r, 2, 8), d = ri(r, 2, 4 + level), n = ri(r, 10, 18), ans = a1 + (n - 1) * d;
      return mc(r, 16, 2, `等差數列首項為 ${a1}、公差為 ${d}，第 ${n} 項為何？`, ans, [a1 + n * d, n * d, a1 + (n - 2) * d], [`等差第 n 項公式 aₙ=a₁+(n−1)d。`, `代入得 a_${n}=${a1}+(${n}−1)×${d}=${ans}。`], "第 1 項沒有加公差，所以第 n 項只加了 n−1 次。", "最常見錯誤是把 n−1 寫成 n。")
    },
    (r) => {
      const fixed = ri(r, 3, 8) * 10, rate = ri(r, 2, 6), x = ri(r, 8, 20), total = fixed + rate * x;
      return mc(r, 17, 2, `某計程服務收固定費 ${fixed} 元，另每公里 ${rate} 元。行駛 ${x} 公里的費用為多少？`, `${total} 元`, [`${(fixed + rate) * x} 元`, `${fixed + x} 元`, `${rate * x} 元`], [`費用函數為 y=${rate}x+${fixed}；${rate} 是每公里費，${fixed} 是固定費。`, `代入 x=${x}：y=${rate}×${x}+${fixed}=${total} 元。`], "線型計費：總價＝固定費＋單價×用量。", "固定費只收一次，不能也乘上公里數。")
    },
    (r) => {
      const good = pick(r, [[4,6,8],[5,7,9],[6,8,11],[7,9,12]]), bad1 = [2,3,6], bad2=[3,4,8], bad3=[1,5,7];
      const format = a => `${a[0]}、${a[1]}、${a[2]}`;
      return mc(r, 18, 2, `下列哪一組長度可以構成三角形？`, format(good), [format(bad1),format(bad2),format(bad3)], [`三角形任兩邊和必須大於第三邊；只需檢查兩小邊和是否大於最大邊。`, `${good[0]}+${good[1]}=${good[0]+good[1]}>${good[2]}，所以 ${format(good)} 可以構成三角形。`], "排序後檢查『最小兩邊和 > 最大邊』即可。", "若兩邊和剛好等於第三邊，會攤平成一直線，不是三角形。")
    },
    (r) => {
      const top = ri(r, 4, 9), bottom = ri(r, top + 3, top + 10), h = ri(r, 3, 8), ans = (top + bottom) * h / 2;
      return mc(r, 19, 2, `一梯形的上底 ${top}、下底 ${bottom}、高 ${h}，面積為何？`, ans, [(bottom - top) * h / 2, (top + bottom) * h, top * bottom * h / 2], [`梯形面積=${over("(上底+下底)×高", 2)}。`, `代入得 ${over(`(${top}+${bottom})×${h}`, 2)}=${ans}。`], "先把上下底相加取平均，再乘高也可以。", "高必須是兩底間的垂直距離，不是斜腰。")
    },
    (r) => {
      const q1 = ri(r, 2, 8), q3 = q1 + ri(r, 4, 10), iqr = q3 - q1;
      return mc(r, 20, 2, `某組資料的第一四分位數 Q₁=${q1}、第三四分位數 Q₃=${q3}，四分位距是多少？`, iqr, [q1 + q3, q3, Math.abs(q3 - q1) / 2], [`四分位距 IQR=Q₃−Q₁。`, `所以 IQR=${q3}−${q1}=${iqr}。`], "四分位距只看中間 50% 的跨度，因此較不受極端值影響。", "四分位距是相減，不是 Q₁ 與 Q₃ 的平均或相加。")
    },
    (r) => {
      const small = ri(r, 2, 5), large = small + ri(r, 1, 4), areaSmall = ri(r, 3, 9), ans = frac(areaSmall * large * large, small * small);
      return mc(r, 21, 3, `兩相似三角形的對應邊長比為 ${small}:${large}。若較小三角形面積為 ${areaSmall}，較大三角形面積為何？`, ans, [frac(areaSmall * large, small), frac(areaSmall * small, large), frac(areaSmall * large * large, small)], [`邊長放大倍率為 ${over(large, small)}。`, `面積倍率是邊長倍率平方，所以大面積=${areaSmall}×(${over(large, small)})²=${ans}。`], "相似題先寫倍率 k；長度用 k、面積用 k²、體積用 k³。", "不要把邊長比直接當面積比。")
    },
    (r) => {
      const central = ri(r, 3, 8) * 20, ans = central / 2;
      return mc(r, 22, 2, `同一段弧所對的圓心角為 ${central}°，則同弧所對的圓周角為多少度？`, `${ans}°`, [`${central}°`, `${central * 2}°`, `${180 - ans}°`], [`同弧所對圓心角 = 2×圓周角。`, `圓周角=${over(`${central}°`, 2)}=${ans}°。`], "先確認兩個角真的截同一段弧，再用 2 倍關係。", "圓周角頂點必須在圓上；圓內任意角不能直接套此式。")
    },
    (r) => {
      const center = pick(r, [
        ["三邊中垂線的交點", "外心", "到三個頂點等距"],
        ["三內角平分線的交點", "內心", "到三邊等距"],
        ["三條中線的交點", "重心", "將每條中線分成 2：1"],
        ["三條高的交點", "垂心", "可能位於三角形外"]
      ]);
      const others = ["外心","內心","重心","垂心"].filter(x=>x!==center[1]);
      return mc(r, 23, 2, `${center[0]}稱為三角形的什麼心？`, center[1], others, [`依定義，${center[0]}是${center[1]}。`, `${center[1]}的關鍵性質：${center[2]}。`], "四心不要只背名字；把『由哪三條線相交』與『等距或比例性質』綁在一起。", "中線、中垂線、角平分線與高是四種不同的線。")
    },
    (r) => {
      const h = ri(r, 1, 5), k = ri(r, 2, 9), a = -ri(r, 1, 3);
      return mc(r, 24, 3, `二次函數 y=${a}(x−${h})²+${k} 的最大值為何？`, k, [h, -k, a], [`此式為頂點式 y=a(x−h)²+k，頂點是 (${h},${k})。`, `因 a=${a}<0，拋物線開口向下，頂點給最大值 ${k}。`], "頂點式先看 a 的正負判斷頂點是最大還是最小。", "題目問最大『值』是 y=${k}，不是發生位置 x=${h}。")
    },
    (r) => {
      const colors = ri(r, 3, 6), target = ri(r, 1, colors - 1), total = colors + target, ans = frac(target, total);
      return mc(r, 25, 2, `袋中有 ${target} 顆紅球與 ${colors} 顆藍球，每球被抽到的機會相同。隨機抽 1 顆，抽到紅球的機率為何？`, ans, [frac(colors, total), frac(target, colors), frac(1, total)], [`所有可能共有 ${target}+${colors}=${total} 顆球。`, `有利結果為 ${target} 顆紅球，所以機率=${over(target, total)}=${ans}。`], "機率先把有利結果數寫在分子，全部等可能結果數寫在分母。", "分母是全部球數，不是另一種顏色的球數。")
    }
  ];

  function makeSolidQuestion(r) {
    return mc(r, 26, 1, "一直三角柱的底面為正三角形 ABC，側面邊 CF 垂直底面。則 ∠ABC、∠BCF 的度數依序為何？", "60°、90°", ["90°、60°", "60°、60°", "90°、90°"], ["正三角形三內角皆為 60°，所以 ∠ABC=60°。", "直角柱的側稜垂直底面，因此 CF 垂直底面內通過 C 的 BC，故 ∠BCF=90°。"], "先分辨底面內的角與側稜形成的角。", "立體圖看起來的角度不代表實際度數，必須使用正三角形與直角柱定義。")
  }
  function makePolynomialDivision(r) {
    const p = ri(r, 2, 5), q = ri(r, -4, 5), a = ri(r, 1, 4), rem = ri(r, 1, 6);
    const mid = q + a * p, constant = a * q + rem, sumConstant = q + rem;
    const poly = `${p}x² ${plus(mid)}x ${plus(constant)}`;
    const correct = `${p}x ${plus(sumConstant)}`;
    return mc(r, 12, 2, `多項式 ${poly} 除以 x+${a}，所得商式與餘式兩者之和為何？`, correct, [`${p}x ${plus(q)}`, `${p}x ${plus(rem)}`, `${p}x ${plus(sumConstant + a)}`], [`由建構式 ${poly}=(x+${a})(${p}x${plus(q)})+${rem}。`, `商式為 ${p}x${plus(q)}，餘式為 ${rem}；兩者之和為 ${correct}。`], "用『被除式＝除式×商式＋餘式』回乘檢查最快。", "題目問商式與餘式的和，不是只問餘式。")
  }
  function makeCongruenceQuestion(r) {
    const names = pick(r, [["AB","DE","∠B","∠E","BC","EF"],["PQ","XY","∠Q","∠Y","QR","YZ"]]);
    return mc(r, 18, 3, `兩三角形中已知 ${names[0]}=${names[1]}、${names[2]}=${names[3]}、${names[4]}=${names[5]}，且所給的角都是前述兩邊的夾角。可用哪一個條件判定兩三角形全等？`, "SAS（邊角邊）", ["SSS（邊邊邊）", "ASA（角邊角）", "AAA（三角相等）"], ["題目給兩組對應邊相等。", "相等角位於兩組已知邊之間，是夾角，因此使用 SAS。"], "全等條件先看已知角是不是兩已知邊的夾角。", "AAA 只能保證相似，不能保證大小相同。")
  }
  function makePolygonQuestion(r) {
    const n = pick(r, [8, 10, 12, 15]), interior = (n - 2) * 180 / n;
    return mc(r, 19, 4, `某正 n 邊形的一個內角為 ${interior}°，則 n 為何？`, n, [n - 2, n + 2, Math.max(5, n - 4)], [`正 n 邊形每個內角為 ${over("(n−2)×180°", "n")}。`, `令 ${over("(n−2)×180°", "n")}=${interior}°，解得 n=${n}。`], "也可先求外角：180°−內角，再用多邊形外角和 360° 去除以一個外角。", "內角和是 (n−2)×180°；題目給的是『一個內角』，還要平分給 n 個內角。")
  }
  function makeTriangleAngleQuestion(r) {
    const A = pick(r, [36, 40, 44]), B = pick(r, [62, 68, 72]), exterior = A + B, half = exterior / 2;
    return mc(r, 18, 4, `△ABC 中，∠A=${A}°、∠B=${B}°。延長 BC 至 D，且 CE 平分外角 ∠ACD，則 ∠ECD 為何？`, `${half}°`, [`${exterior}°`, `${180 - exterior}°`, `${90 - half}°`], [`三角形外角 ∠ACD=∠A+∠B=${A}+${B}=${exterior}°。`, `CE 平分此角，所以 ∠ECD=${over(exterior, 2)}=${half}°。`], "外角等於兩個不相鄰內角和，比先求 ∠C 再互補更快。", "角平分線要在求出整個外角後再平分。")
  }
  function makeCircleChordQuestion(r) {
    const triple = pick(r, [[5,12,13],[8,15,17],[7,24,25]]), [distance, halfChord, radius] = triple;
    return mc(r, 22, 3, `圓心 O 到弦 AB 的垂線交 AB 於 M。若半徑為 ${radius}、弦 AB=${halfChord * 2}，則 OM 為何？`, distance, [halfChord, radius - distance, radius - 1], [`圓心到弦的垂線平分弦，所以 AM=${halfChord}。`, `在直角三角形 OMA 中，OM²+${halfChord}²=${radius}²，得 OM=${distance}。`], "圓心到弦的垂線會平分弦，接著通常就是畢氏定理。", "弦長要先除以 2，不能把整條弦直接當直角三角形的一股。")
  }
  function makeParallelogramQuestion(r) {
    return mc(r, 19, 3, "平行四邊形 ABCD 的兩條對角線交於 P。關於 P 到兩組對邊的距離，下列何者必定正確？", "P 到 AB、CD 等距，且到 AD、BC 等距", ["只到 AB、CD 等距", "只到 AD、BC 等距", "四個距離一定全部相等"], ["平行四邊形以對角線交點 P 為中心作 180° 旋轉後，AB 對應 CD、AD 對應 BC。", "旋轉保持距離，因此 P 到每一組對邊的距離分別相等。"], "對角線交點的中心對稱性可一次處理兩組對邊。", "兩組距離分別相等，不代表四個距離全部相同；只有特殊平行四邊形才可能。")
  }

  function makeVolumeQuestion(r) {
    const radius = ri(r, 2, 6), height = ri(r, 4, 10), answer = radius * radius * height;
    return mc(r, 26, 2, `一圓柱的底面半徑為 ${radius}，高為 ${height}，其體積為多少？`, `${answer}π`, [`${2 * radius * height}π`, `${radius * radius + height}π`, `${answer * 2}π`], [`圓柱體積＝底面積×高。`, `V=π×${radius}²×${height}=${answer}π。`], "先求底面圓面積，再乘垂直高。", "側面積 2πrh 不是體積；體積單位要用立方單位。")
  }

  function makeCumulativeFrequencyQuestion(r) {
    const counts = [ri(r, 3, 7), ri(r, 4, 8), ri(r, 3, 7), ri(r, 2, 6)];
    const total = counts.reduce((sum, value) => sum + value, 0);
    const cutoff = pick(r, [2, 3]);
    const cumulative = counts.slice(0, cutoff).reduce((sum, value) => sum + value, 0);
    const percent = Math.round(cumulative / total * 1000) / 10;
    const previous = counts.slice(0, cutoff - 1).reduce((sum, value) => sum + value, 0);
    return mc(r, 28, 2, `某資料分成 4 組，各組次數依序為 ${counts.join("、")}。第 ${cutoff} 組的累積相對次數最接近下列何者？`, `${percent}%`, [`${Math.round(counts[cutoff - 1] / total * 1000) / 10}%`, `${Math.round(previous / total * 1000) / 10}%`, `${Math.round(cumulative / counts.slice(0, cutoff).length * 10) / 10}%`], [`總次數為 ${counts.join("+")}=${total}。`, `第 ${cutoff} 組的累積次數為 ${counts.slice(0, cutoff).join("+")}=${cumulative}。`, `累積相對次數=${over(cumulative, total)}，約為 ${percent}%。`], "『累積』要從第一組一直加到目標組。", "不要只用目標那一組的次數除以總數。")
  }

  const termQuizzes = [
    { id:"g7-all", grade:7, term:"總複習", title:"國一總複習", seed:7100, unitIds:[1,2,3,4,5,6,7,8,9,10,11], officialCodes:"N-7、A-7、G-7、D-7、S-7" },
    { id:"g7-1", grade:7, term:"上學期", title:"國一上學期總複習", seed:7101, unitIds:[1,2,3,4,5], officialCodes:"N-7-1～N-7-8、A-7-1～A-7-3" },
    { id:"g7-2", grade:7, term:"下學期", title:"國一下學期總複習", seed:7102, unitIds:[6,7,8,9,10,11], officialCodes:"N-7-9、A-7-4～A-7-8、G-7-1、D-7-1～D-7-2、S-7-1～S-7-5" },
    { id:"g8-all", grade:8, term:"總複習", title:"國二總複習", seed:8200, unitIds:[12,13,14,15,28,16,17,18,19], officialCodes:"N-8、A-8、F-8、G-8、D-8、S-8" },
    { id:"g8-1", grade:8, term:"上學期", title:"國二上學期總複習", seed:8201, unitIds:[12,13,14,15,28], officialCodes:"N-8-1～N-8-2、A-8-1～A-8-7、S-8-6、G-8-1、D-8-1" },
    { id:"g8-2", grade:8, term:"下學期", title:"國二下學期總複習", seed:8202, unitIds:[16,17,18,19], officialCodes:"N-8-3～N-8-6、F-8-1～F-8-2、S-8-1～S-8-5、S-8-7～S-8-12" },
    { id:"g9-all", grade:9, term:"總複習", title:"國三總複習", seed:9300, unitIds:[20,21,22,23,24,25,26], officialCodes:"N-9、F-9、D-9、S-9" },
    { id:"g9-1", grade:9, term:"上學期", title:"國三上學期總複習", seed:9301, unitIds:[21,22,23], officialCodes:"N-9-1、S-9-1～S-9-11" },
    { id:"g9-2", grade:9, term:"下學期", title:"國三下學期總複習", seed:9302, unitIds:[20,24,25,26], officialCodes:"F-9-1～F-9-2、D-9-1～D-9-2、S-9-12～S-9-13" }
  ].map(item => ({ ...item, scope:"term", questionCount:12, minutes:25 }));

  const chapterQuizzes = [
    { id:"g7-1-c1", grade:7, book:"1上", term:"上學期", chapter:"CH1", title:"國一上第一單元：數與數線", seed:7111, unitIds:[1,2], officialCodes:"N-7-1～N-7-3、N-7-6、N-7-8" },
    { id:"g7-1-c2", grade:7, book:"1上", term:"上學期", chapter:"CH2", title:"國一上第二單元：標準分解式與分數運算", seed:7112, unitIds:[3,4], officialCodes:"N-7-1、N-7-2、N-7-4～N-7-7" },
    { id:"g7-1-c3", grade:7, book:"1上", term:"上學期", chapter:"CH3", title:"國一上第三單元：一元一次方程式", seed:7113, unitIds:[5], officialCodes:"A-7-1～A-7-3" },
    { id:"g7-2-c1", grade:7, book:"1下", term:"下學期", chapter:"CH1", title:"國一下第一單元：二元一次聯立方程式", seed:7121, unitIds:[6], officialCodes:"A-7-4～A-7-5" },
    { id:"g7-2-c2", grade:7, book:"1下", term:"下學期", chapter:"CH2", title:"國一下第二單元：直角坐標與二元一次方程式圖形", seed:7122, unitIds:[7], officialCodes:"G-7-1、A-7-6" },
    { id:"g7-2-c3", grade:7, book:"1下", term:"下學期", chapter:"CH3", title:"國一下第三單元：比例", seed:7123, unitIds:[8], officialCodes:"N-7-9、A-7-7" },
    { id:"g7-2-c4", grade:7, book:"1下", term:"下學期", chapter:"CH4", title:"國一下第四單元：一元一次不等式", seed:7124, unitIds:[9], officialCodes:"A-7-8" },
    { id:"g7-2-c5", grade:7, book:"1下", term:"下學期", chapter:"CH5", title:"國一下第五單元：統計圖表與統計數據", seed:7125, unitIds:[10], officialCodes:"D-7-1～D-7-2" },
    { id:"g7-2-c6", grade:7, book:"1下", term:"下學期", chapter:"CH6", title:"國一下第六單元：線對稱與三視圖", seed:7126, unitIds:[11], officialCodes:"S-7-1～S-7-5" },
    { id:"g8-1-c1", grade:8, book:"2上", term:"上學期", chapter:"CH1", title:"國二上第一單元：乘法公式與多項式", seed:8211, unitIds:[12], officialCodes:"A-8-1～A-8-3" },
    { id:"g8-1-c2", grade:8, book:"2上", term:"上學期", chapter:"CH2", title:"國二上第二單元：平方根與畢氏定理", seed:8212, unitIds:[13], officialCodes:"N-8-1～N-8-2、S-8-6" },
    { id:"g8-1-c3", grade:8, book:"2上", term:"上學期", chapter:"CH3", title:"國二上第三單元：因式分解", seed:8213, unitIds:[14], officialCodes:"A-8-4～A-8-5" },
    { id:"g8-1-c4", grade:8, book:"2上", term:"上學期", chapter:"CH4", title:"國二上第四單元：一元二次方程式", seed:8214, unitIds:[15], officialCodes:"A-8-6～A-8-7" },
    { id:"g8-1-c5", grade:8, book:"2上", term:"上學期", chapter:"CH5", title:"國二上第五單元：統計資料處理", seed:8215, unitIds:[28], officialCodes:"D-8-1" },
    { id:"g8-2-c1", grade:8, book:"2下", term:"下學期", chapter:"CH1", title:"國二下第一單元：數列與級數", seed:8221, unitIds:[16], officialCodes:"N-8-3～N-8-6" },
    { id:"g8-2-c2", grade:8, book:"2下", term:"下學期", chapter:"CH2", title:"國二下第二單元：線型函數與其圖形", seed:8222, unitIds:[17], officialCodes:"F-8-1～F-8-2" },
    { id:"g8-2-c3", grade:8, book:"2下", term:"下學期", chapter:"CH3", title:"國二下第三單元：三角形的基本性質", seed:8223, unitIds:[18], officialCodes:"S-8-1～S-8-5" },
    { id:"g8-2-c4", grade:8, book:"2下", term:"下學期", chapter:"CH4", title:"國二下第四單元：平行與四邊形", seed:8224, unitIds:[19], officialCodes:"S-8-7～S-8-12" },
    { id:"g9-1-c1", grade:9, book:"3上", term:"上學期", chapter:"CH1", title:"國三上第一單元：相似形與三角比", seed:9311, unitIds:[21], officialCodes:"S-9-1～S-9-4、N-9-1" },
    { id:"g9-1-c2", grade:9, book:"3上", term:"上學期", chapter:"CH2", title:"國三上第二單元：圓形", seed:9312, unitIds:[22], officialCodes:"S-9-5～S-9-7" },
    { id:"g9-1-c3", grade:9, book:"3上", term:"上學期", chapter:"CH3", title:"國三上第三單元：推理證明與三角形的心", seed:9313, unitIds:[23], officialCodes:"S-9-8～S-9-11" },
    { id:"g9-2-c1", grade:9, book:"3下", term:"下學期", chapter:"CH1", title:"國三下第一單元：二次函數", seed:9321, unitIds:[24], officialCodes:"F-9-1～F-9-2" },
    { id:"g9-2-c2", grade:9, book:"3下", term:"下學期", chapter:"CH2", title:"國三下第二單元：統計與機率", seed:9322, unitIds:[20,25], officialCodes:"D-9-1～D-9-2" },
    { id:"g9-2-c3", grade:9, book:"3下", term:"下學期", chapter:"CH3", title:"國三下第三單元：立體圖形", seed:9323, unitIds:[26], officialCodes:"S-9-12～S-9-13" }
  ].map(item => ({ ...item, scope:"chapter", questionCount:12, minutes:25, source:"翰林國中數學解題影音網 1A～3B 章節" }));

  const quizCatalog = [...termQuizzes, ...chapterQuizzes];

  function makeQuizUnitQuestion(r, unitId, level) {
    if (unitId >= 1 && unitId <= 25) return generators[unitId - 1](r, level);
    if (unitId === 26) return r() < .5 ? makeSolidQuestion(r) : makeVolumeQuestion(r);
    if (unitId === 28) return makeCumulativeFrequencyQuestion(r);
    throw new Error(`小考單元 ${unitId} 尚未建立出題器`);
  }

  function generateQuiz(quizId, seedOverride) {
    const blueprint = quizCatalog.find(item => item.id === quizId);
    if (!blueprint) throw new Error("找不到指定的小考");
    const seed = seedOverride == null ? blueprint.seed : seedOverride;
    const r = rngFromSeed(seed);
    const targetCount = blueprint.questionCount || 12;
    const sequence = [...blueprint.unitIds];
    while (sequence.length < targetCount) sequence.push(blueprint.unitIds[(sequence.length - blueprint.unitIds.length) % blueprint.unitIds.length]);
    const orderedUnits = shuffled(r, sequence.slice(0, targetCount));
    const abilities = ["concept","procedure","application","concept","application","procedure","application","analysis","concept","application","procedure","analysis"];
    const questions = orderedUnits.map((unitId, index) => {
      const isBasic = index < Math.ceil(targetCount / 2);
      const question = makeQuizUnitQuestion(r, unitId, isBasic ? 1 : 3);
      question.ability = abilities[index % abilities.length];
      question.quizLevel = isBasic ? "基礎" : "進階";
      question.officialOrder = index + 1;
      return question;
    });
    return { kind:"quiz", id:`QUIZ-${blueprint.id}-${seed}`, quizId:blueprint.id, seed, title:blueprint.title, grade:blueprint.grade, term:blueprint.term, chapter:blueprint.chapter, scope:blueprint.scope, minutes:blueprint.minutes || 25, questionCount:targetCount, officialCodes:blueprint.officialCodes, unitIds:[...blueprint.unitIds], blueprint:"NAER-108-curriculum-grade-scope-Hanlin-term-order", questions };
  }

  function makeReadingSet(r) {
    const indicated = pick(r, [46, 57, 68]), lower = Math.round((indicated - 2) / 1.1);
    const circumference = pick(r, [200, 210, 220]), coefficient = Number((circumference * 0.0006).toFixed(3));
    const passage = `某自行車訓練器利用感測器估計騎乘速率。若輪胎每分鐘轉 x 圈、輪胎周長為 c 公分，則實際速率（公里／小時）＝x×c×0.0006。訓練器顯示的指示速率，則以「感測器量得的轉速×系統設定的輪胎周長×0.0006」計算。合格裝置需符合：實際速率不大於指示速率，且「指示速率−實際速率≤實際速率的 10%＋2」。`;
    const q23 = mc(r, 9, 4, `根據選文，當指示速率為 ${indicated} 公里／小時時，實際速率可能的範圍為何？`, `${lower}～${indicated} 公里／小時`, [`${indicated}～${Math.round(indicated * 1.1 + 2)} 公里／小時`, `${lower - 2}～${indicated - 2} 公里／小時`, `${lower}～${Math.round(indicated * 1.1)} 公里／小時`], [`設實際速率為 v。條件給 v≤${indicated}。`, `${indicated}−v≤0.1v+2，所以 ${indicated - 2}≤1.1v，得 v≥${lower}。`, `合併得 ${lower}≤v≤${indicated}。`], "把兩個法規條件分開列不等式，最後取交集。", "指示速率不得小於實際速率，因此範圍上限是指示速率。")
    const q24 = mc(r, 17, 3, `根據選文，若輪胎周長為 ${circumference} 公分、每分鐘轉 x 圈，實際速率 y（公里／小時）與 x 的關係為何？`, `y=${coefficient}x`, [`y=${circumference}x`, `y=${Number((circumference / 100000).toFixed(5))}x`, `y=${Number((circumference * 0.006).toFixed(2))}x`], [`直接代入選文公式：y=x×${circumference}×0.0006。`, `所以 y=${coefficient}x。`], "先保留單位換算係數，再把常數相乘，可避免漏掉每分鐘轉每小時。", "公分換公里與分鐘換小時要同時處理。")
    const q25 = mc(r, 17, 5, "根據選文，甲車的感測器把轉速量得比實際高；乙車換成周長較小的新輪胎，但系統仍使用原本較大的周長。兩車皆顯示 60 公里／小時，實際速率分別為 p、q，何者正確？", "p<60，q<60", ["p>60，q>60", "p>60，q<60", "p<60，q>60"], ["甲：轉速被高估，在設定周長相同時，指示速率高於實際速率，所以 p<60。", "乙：系統設定周長大於實際新輪胎周長，同轉速下指示速率高於實際速率，所以 q<60。"], "先固定乘積中的另一個因數，比較『系統使用值』與『真實值』。", "兩種故障原因不同，但都使指示計算中的乘積偏大。")
    ;[q23,q24,q25].forEach((q,i)=>{q.passageId="bike-sensor";q.passage=passage;q.setIndex=i+1;});
    return [q23,q24,q25];
  }

  function makeConstructed(r) {
    const first = ri(r, 5, 8), d = ri(r, 2, 4), stepIndex = ri(r, 8, 11), threshold = first + d * stepIndex - 1;
    const session = stepIndex + 1, week = Math.ceil(session / 2), day = session % 2 ? "星期一" : "星期四";
    const q26 = cr(16, 4,
      `【非選擇題一】機器人社團每週星期一、四進行耐久測試。第一週星期一測試 ${first} 回合，同週星期四比星期一多 ${d} 回合；之後每次測試都比前一次多 ${d} 回合。\n(1) 第二週星期四測試幾回合？\n(2) 最早在第幾週星期幾，測試回合數會超過 ${threshold} 回合？請完整說明。`,
      [`各次測試形成首項 ${first}、公差 ${d} 的等差數列。`, `第二週星期四是第 4 次：a₄=${first}+3×${d}=${first + 3*d}。`, `第 n 次回合數 aₙ=${first}+(n−1)×${d}。解 ${first}+(n−1)×${d}>${threshold}，最小整數 n=${session}。`, `第 ${session} 次為第 ${week} 週${day}。`],
      `(1) ${first + 3*d} 回合；(2) 第 ${week} 週${day}。`,
      "先把每週兩次攤平成『第 1、2、3…次』的等差數列，最後再換回星期。",
      "題目是『超過』，必須使用 >；剛好等於門檻仍不符合。",
      [["3級分","正確建立等差數列、處理嚴格不等式，並把次序轉回週次與星期。"],["2級分","策略正確但次序、嚴格不等號或週次轉換有一處瑕疵。"],["1級分","能辨認等差關係或算出部分項，但推導不完整。"],["0級分","只有答案，或未呈現可辨識策略。"]]
    );

    const [base,height,hyp,ad] = pick(r, [[15,20,25,6],[9,12,15,3],[12,16,20,6]]), scale=ad/base, ae=height*scale, de=hyp*scale, big=base*height/2, small=ad*ae/2, trap=big-small;
    const q27 = cr(21, 5,
      `【非選擇題二】如圖，直角三角形 ABC 中，∠A=90°，AB=${base}、AC=${height}。D 在 AB 上且 AD=${ad}，過 D 作 DE∥BC 交 AC 於 E。\n(1) 說明 △ADE 與 △ABC 相似的理由。\n(2) 求 DE 與四邊形 DBCE 的面積。`,
      [`因 DE∥BC，所以 ∠ADE=∠ABC、∠AED=∠ACB；再加上共同的 ∠A，故兩三角形以 AA 相似。`, `大三角形斜邊 BC=√(${base}²+${height}²)=${hyp}。`, `相似比 AD:AB=${ad}:${base}=${frac(ad,base)}，所以 DE=${hyp}×${frac(ad,base)}=${de}。`, `AE=${height}×${frac(ad,base)}=${ae}；大三角形面積=${big}，小三角形面積=${small}。`, `四邊形 DBCE 面積=${big}−${small}=${trap}。`],
      `(1) AA 相似；(2) DE=${de}，四邊形 DBCE 面積=${trap}。`,
      "證相似先寫角相等的來源；求不規則四邊形面積可用『大三角形減小三角形』。",
      "相似比方向要一致；面積比是邊長比的平方。",
      [["3級分","相似理由完整、比例方向一致，並正確求斜邊、DE 與面積差。"],["2級分","策略正確且主要推導成立，但有一處計算或理由不完整。"],["1級分","辨認平行導致相似，或只完成長度／面積其中一部分。"],["0級分","只有答案，或未呈現合理推導。"]]
    );
    q27.diagram=`<svg class="question-diagram" viewBox="0 0 360 230" role="img" aria-label="直角三角形 ABC，D 在 AB 上，DE 平行 BC"><path d="M45 190 L315 190 L45 28 Z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M153 190 L45 125" fill="none" stroke="#da735d" stroke-width="3"/><path d="M45 190 h18 v-18" fill="none" stroke="currentColor" stroke-width="2"/><text x="27" y="210">A</text><text x="318" y="210">B</text><text x="27" y="25">C</text><text x="148" y="210">D</text><text x="25" y="123">E</text></svg>`;
    q26.ability=q27.ability="application";
    return [q26,q27];
  }

  function generate(seed, level = 2) {
    const r = rngFromSeed(`${seed}`.split("").reduce((a,c)=>a*31+c.charCodeAt(0), 7) + level * 100003);
    const baseQuestions = [
      generators[5](r,level), makeSolidQuestion(r), generators[12](r,level), generators[24](r,level), generators[11](r,level),
      generators[9](r,level), makePolynomialDivision(r), generators[1](r,level), generators[14](r,level), generators[7](r,level),
      generators[0](r,level), makeCongruenceQuestion(r), generators[6](r,level), generators[23](r,level), makePolygonQuestion(r),
      makeTriangleAngleQuestion(r), generators[15](r,level), makeCircleChordQuestion(r), generators[21](r,level), generators[2](r,level),
      generators[20](r,level), makeParallelogramQuestion(r), ...makeReadingSet(r)
    ];
    const abilities = ["procedure","concept","procedure","application","procedure","application","procedure","application","concept","application","analysis","application","concept","concept","analysis","analysis","application","application","analysis","concept","application","concept","application","application","analysis"];
    baseQuestions.forEach((question, index) => { question.ability = abilities[index]; });
    const readingIds = new Set(baseQuestions.map(question => question.passageId).filter(Boolean));
    const blocks = [];
    baseQuestions.forEach(question => {
      if (!question.passageId) blocks.push([question]);
      else if (readingIds.has(question.passageId)) {
        blocks.push(baseQuestions.filter(item => item.passageId === question.passageId));
        readingIds.delete(question.passageId);
      }
    });
    const shuffledChoices = shuffled(r, blocks).flat();
    const shuffledConstructed = shuffled(r, makeConstructed(r));
    const questions = [...shuffledChoices, ...shuffledConstructed];
    questions.forEach((question, index) => { question.officialOrder = index + 1; });
    return { id:`CAP-${seed}-${level}`, seed:Number(seed), level, createdAt:new Date().toISOString(), blueprint:"115-official-10y-validated", questions };
  }

  return { generate, generateQuiz, quizCatalog };
})();
