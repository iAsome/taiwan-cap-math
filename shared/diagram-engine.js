window.DIAGRAM_ENGINE = (() => {
  const esc = value => String(value).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const dim = label => `<text class="diagram-dim-label" font-size="11" font-weight="700">${esc(label)}</text>`;

  function svgWrap(content, width = 360, height = 120, caption = "", cssClass = "lecture-diagram") {
    const cap = caption ? `<figcaption class="lecture-diagram-caption">${esc(caption)}</figcaption>` : "";
    return `<figure class="${cssClass}" role="img">${cap}<svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${content}</svg></figure>`;
  }

  function numberLine({ min = -5, max = 5, ticks, points = [], segments = [], caption = "數線示意" } = {}) {
    const pad = 30, w = 360, h = 90, span = max - min || 1;
    const x = v => pad + ((v - min) / span) * (w - pad * 2);
    const tickVals = ticks || (() => {
      const out = [];
      const step = span <= 12 ? 1 : Math.ceil(span / 10);
      for (let v = Math.ceil(min); v <= Math.floor(max); v += step) out.push(v);
      return out.length ? out : [min, max];
    })();
    const tickSvg = tickVals.map(v => `<line x1="${x(v)}" y1="38" x2="${x(v)}" y2="46" stroke="currentColor" stroke-width="1.5"/><text x="${x(v)}" y="68" text-anchor="middle" font-size="12">${esc(v)}</text>`).join("");
    const segSvg = (segments || []).map(s => `<line x1="${x(s.from)}" y1="42" x2="${x(s.to)}" y2="42" stroke="#2a7f62" stroke-width="3"/>${s.label ? `<text x="${x((s.from + s.to) / 2)}" y="24" text-anchor="middle" font-size="10">${esc(s.label)}</text>` : ""}`).join("");
    const pts = points.map(p => `<circle cx="${x(p.value)}" cy="42" r="5" fill="${p.color || "#e85d4c"}"/><text x="${x(p.value)}" y="28" text-anchor="middle" font-size="11" font-weight="700">${esc(p.label ?? p.value)}</text>`).join("");
    return svgWrap(`<line x1="${pad}" y1="42" x2="${w - pad}" y2="42" stroke="currentColor" stroke-width="2"/><polygon points="${w - pad},42 ${w - pad - 8},37 ${w - pad - 8},47" fill="currentColor"/><text x="${x(0)}" y="82" text-anchor="middle" font-size="10">O</text>${tickSvg}${segSvg}${pts}`, w, h, caption);
  }

  function coordinatePlane({ minX = -4, maxX = 4, minY = -3, maxY = 3, points = [], lines = [], caption = "坐標平面" } = {}) {
    const w = 360, h = 260, pad = 30;
    const sx = v => pad + ((v - minX) / (maxX - minX || 1)) * (w - pad * 2);
    const sy = v => h - pad - ((v - minY) / (maxY - minY || 1)) * (h - pad * 2);
    const grid = [];
    for (let gx = Math.ceil(minX); gx <= Math.floor(maxX); gx++) grid.push(`<line x1="${sx(gx)}" y1="${pad}" x2="${sx(gx)}" y2="${h - pad}" stroke="#d5dcd7" stroke-width="1"/>`);
    for (let gy = Math.ceil(minY); gy <= Math.floor(maxY); gy++) grid.push(`<line x1="${pad}" y1="${sy(gy)}" x2="${w - pad}" y2="${sy(gy)}" stroke="#d5dcd7" stroke-width="1"/>`);
    const axis = `<line x1="${pad}" y1="${sy(0)}" x2="${w - pad}" y2="${sy(0)}" stroke="currentColor" stroke-width="2"/><line x1="${sx(0)}" y1="${pad}" x2="${sx(0)}" y2="${h - pad}" stroke="currentColor" stroke-width="2"/>`;
    const ln = lines.map(l => `<line x1="${sx(l.x1)}" y1="${sy(l.y1)}" x2="${sx(l.x2)}" y2="${sy(l.y2)}" stroke="${l.color || "#2a7f62"}" stroke-width="2"/>`).join("");
    const pts = points.map(p => `<circle cx="${sx(p.x)}" cy="${sy(p.y)}" r="4" fill="${p.color || "#e85d4c"}"/><text x="${sx(p.x) + 6}" y="${sy(p.y) - 6}" font-size="11" font-weight="700">${esc(p.label || `(${p.x},${p.y})`)}</text>`).join("");
    return svgWrap(`${grid.join("")}${axis}${ln}${pts}`, w, h, caption);
  }

  function triangle({ a = 4, b = 3, labels = ["A", "B", "C"], sideLabels = [], angleLabels = [], caption = "三角形" } = {}) {
    const w = 320, h = 210;
    const Ax = 40, Ay = 170, Bx = 40 + a * 22, By = 170, Cx = 40, Cy = 170 - b * 22;
    const sideSvg = sideLabels.length
      ? sideLabels.map(s => {
        const map = { AB: [(Ax + Bx) / 2, Ay + 18], BC: [(Bx + Cx) / 2 - 10, (By + Cy) / 2], CA: [Ax - 22, (Ay + Cy) / 2] };
        const pos = map[s.edge] || [(Ax + Bx) / 2, Ay + 18];
        return `<text x="${pos[0]}" y="${pos[1]}" font-size="11" font-weight="700">${esc(s.label)}</text>`;
      }).join("")
      : `<text x="${(Ax + Bx) / 2}" y="${Ay + 18}" font-size="11" font-weight="700">${esc(String(a))}</text><text x="${Ax - 22}" y="${(Ay + Cy) / 2}" font-size="11" font-weight="700">${esc(String(b))}</text>`;
    const angSvg = (angleLabels || []).map(aL => `<text x="${Bx - 20}" y="${By - 8}" font-size="10">${esc(aL.label)}</text>`).join("");
    return svgWrap(`<polygon points="${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}" fill="none" stroke="currentColor" stroke-width="2"/><text x="${Ax - 8}" y="${Ay + 16}">${esc(labels[0])}</text><text x="${Bx + 4}" y="${By + 16}">${esc(labels[1])}</text><text x="${Cx - 8}" y="${Cy - 8}">${esc(labels[2])}</text>${sideSvg}${angSvg}`, w, h, caption);
  }

  function parallelLines({ caption = "平行線截角", angles = [] } = {}) {
    const w = 360, h = 170;
    const ang = angles[0]?.label ? `<text x="120" y="78" font-size="11" font-weight="700">${esc(angles[0].label)}</text>` : "";
    return svgWrap(`<line x1="30" y1="50" x2="330" y2="50" stroke="currentColor" stroke-width="2"/><line x1="30" y1="110" x2="330" y2="110" stroke="currentColor" stroke-width="2"/><line x1="80" y1="20" x2="280" y2="140" stroke="#e85d4c" stroke-width="2"/><text x="300" y="45" font-size="11">L₁</text><text x="300" y="105" font-size="11">L₂</text>${ang}`, w, h, caption);
  }

  function circle({ r = 40, rLabel = "r", center = "O", caption = "圓形" } = {}) {
    const px = Math.min(70, Math.max(25, r));
    const w = 200, h = 200, cx = 100, cy = 100;
    return svgWrap(`<circle cx="${cx}" cy="${cy}" r="${px}" fill="none" stroke="currentColor" stroke-width="2"/><line x1="${cx}" y1="${cy}" x2="${cx + px}" y2="${cy}" stroke="#e85d4c" stroke-width="1.5"/><text x="${cx - 8}" y="${cy - 10}">${esc(center)}</text><text x="${cx + px / 2 - 8}" y="${cy - 8}" font-size="11" font-weight="700">${esc(rLabel)}</text>`, w, h, caption);
  }

  function boxPlot({ min = 2, q1 = 5, med = 8, q3 = 12, max = 15, caption = "盒狀圖" } = {}) {
    const w = 360, h = 100, pad = 30, span = max - min || 1;
    const x = v => pad + ((v - min) / span) * (w - pad * 2);
    return svgWrap(`<line x1="${x(min)}" y1="50" x2="${x(max)}" y2="50" stroke="currentColor" stroke-width="1.5"/><rect x="${x(q1)}" y="35" width="${Math.max(2, x(q3) - x(q1))}" height="30" fill="none" stroke="currentColor" stroke-width="2"/><line x1="${x(med)}" y1="35" x2="${x(med)}" y2="65" stroke="#e85d4c" stroke-width="2"/><text x="${x(min)}" y="78" text-anchor="middle" font-size="10">${esc(min)}</text><text x="${x(max)}" y="78" text-anchor="middle" font-size="10">${esc(max)}</text>`, w, h, caption);
  }

  function treeDiagram({ branches = [["A", "B"], ["1", "2"]], caption = "樹狀圖" } = {}) {
    const w = 320, h = 180;
    let html = `<circle cx="40" cy="90" r="4" fill="currentColor"/>`;
    branches[0].forEach((label, i) => {
      const y = 40 + i * 50;
      html += `<line x1="44" y1="90" x2="120" y2="${y}" stroke="currentColor"/><circle cx="124" cy="${y}" r="4" fill="currentColor"/><text x="132" y="${y + 4}" font-size="11">${esc(label)}</text>`;
      if (branches[1]) branches[1].forEach((sub, j) => {
        const sy = y - 15 + j * 30;
        html += `<line x1="128" y1="${y}" x2="220" y2="${sy}" stroke="#2a7f62"/><text x="228" y="${sy + 4}" font-size="10">${esc(sub)}</text>`;
      });
    });
    return svgWrap(html, w, h, caption);
  }

  function barChart({ values = [3, 7, 5, 9], labels = ["A", "B", "C", "D"], caption = "長條圖" } = {}) {
    const w = 360, h = 200, pad = 30, max = Math.max(...values, 1);
    const bars = values.map((v, i) => {
      const bw = (w - pad * 2) / values.length * 0.6;
      const bx = pad + i * ((w - pad * 2) / values.length) + bw * 0.2;
      const bh = (v / max) * (h - pad * 2);
      return `<rect x="${bx}" y="${h - pad - bh}" width="${bw}" height="${bh}" fill="#2a7f62"/><text x="${bx + bw / 2}" y="${h - pad + 14}" text-anchor="middle" font-size="11">${esc(labels[i] ?? i + 1)}</text><text x="${bx + bw / 2}" y="${h - pad - bh - 6}" text-anchor="middle" font-size="10">${esc(v)}</text>`;
    }).join("");
    return svgWrap(`<line x1="${pad}" y1="${h - pad}" x2="${w - pad}" y2="${h - pad}" stroke="currentColor" stroke-width="2"/>${bars}`, w, h, caption);
  }

  function solidPrism({ caption = "角柱示意", heightLabel = "h", baseLabel = "a" } = {}) {
    const w = 240, h = 180;
    return svgWrap(`<polygon points="60,120 140,120 160,80 80,80" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="80,80 160,80 180,40 100,40" fill="none" stroke="currentColor" stroke-width="2"/><line x1="60" y1="120" x2="80" y2="80" stroke="currentColor" stroke-width="2"/><line x1="140" y1="120" x2="160" y2="80" stroke="currentColor" stroke-width="2"/><text x="95" y="135" font-size="11" font-weight="700">${esc(baseLabel)}</text><text x="175" y="75" font-size="11" font-weight="700">${esc(heightLabel)}</text>`, w, h, caption);
  }

  function lever({ caption = "蹺蹺板示意", leftLabel = "F₁", rightLabel = "F₂" } = {}) {
    const w = 360, h = 140;
    return svgWrap(`<polygon points="175,90 185,90 190,110 170,110" fill="currentColor"/><line x1="40" y1="90" x2="320" y2="90" stroke="currentColor" stroke-width="3"/><circle cx="80" cy="90" r="12" fill="#e85d4c"/><circle cx="260" cy="90" r="10" fill="#2a7f62"/><text x="72" y="70" font-size="11">${esc(leftLabel)}</text><text x="252" y="70" font-size="11">${esc(rightLabel)}</text>`, w, h, caption);
  }

  function circuit({ caption = "電路示意", nodes = ["甲", "乙", "丙"] } = {}) {
    const w = 360, h = 120;
    const n = nodes.slice(0, 3);
    return svgWrap(`<rect x="20" y="40" width="40" height="24" rx="4" fill="none" stroke="currentColor"/><text x="30" y="56" font-size="10">電池</text><line x1="60" y1="52" x2="100" y2="52" stroke="currentColor" stroke-width="2"/><circle cx="130" cy="52" r="14" fill="none" stroke="#e85d4c" stroke-width="2"/><text x="122" y="56" font-size="10">${esc(n[0] || "甲")}</text><line x1="144" y1="52" x2="200" y2="52" stroke="currentColor" stroke-width="2"/><circle cx="230" cy="52" r="14" fill="none" stroke="#2a7f62" stroke-width="2"/><text x="222" y="56" font-size="10">${esc(n[1] || "乙")}</text><line x1="244" y1="52" x2="300" y2="52" stroke="currentColor" stroke-width="2"/><circle cx="320" cy="52" r="14" fill="none" stroke="currentColor" stroke-width="2"/><text x="312" y="56" font-size="10">${esc(n[2] || "丙")}</text>`, w, h, caption);
  }

  function vtGraph({ caption = "v-t 圖", points = [[0, 0], [2, 10], [4, 0]], xLabel = "t", yLabel = "v" } = {}) {
    const w = 360, h = 200, pad = 36;
    const xs = points.map(p => p[0]), ys = points.map(p => p[1]);
    const maxX = Math.max(...xs, 1), maxY = Math.max(...ys, 1);
    const sx = v => pad + (v / maxX) * (w - pad * 2);
    const sy = v => h - pad - (v / maxY) * (h - pad * 2);
    const path = points.map((p, i) => `${i ? "L" : "M"}${sx(p[0])},${sy(p[1])}`).join(" ");
    return svgWrap(`<line x1="${pad}" y1="${h - pad}" x2="${w - pad}" y2="${h - pad}" stroke="currentColor" stroke-width="2"/><line x1="${pad}" y1="${pad}" x2="${pad}" y2="${h - pad}" stroke="currentColor" stroke-width="2"/><text x="${w - 30}" y="${h - pad + 16}" font-size="11">${esc(xLabel)}</text><text x="8" y="${pad + 8}" font-size="11">${esc(yLabel)}</text><path d="${path}" fill="none" stroke="#2a7f62" stroke-width="2"/>`, w, h, caption);
  }

  function scaleMap({ caption = "比例尺示意", scale = "1:50000", mapDistance = "2", realDistance = "1 km" } = {}) {
    const w = 360, h = 120;
    return svgWrap(`<rect x="40" y="40" width="200" height="40" fill="#e8f0ec" stroke="currentColor"/><text x="50" y="65" font-size="11">圖上 ${esc(mapDistance)} cm</text><line x1="40" y1="95" x2="140" y2="95" stroke="#e85d4c" stroke-width="3"/><text x="150" y="100" font-size="11" font-weight="700">${esc(scale)}</text><text x="240" y="100" font-size="11">≈ ${esc(realDistance)}</text>`, w, h, caption);
  }

  function contourMap({ caption = "等高線示意", dense = true } = {}) {
    const w = 360, h = 160;
    const lines = dense
      ? `<path d="M40,120 Q120,40 200,100 T320,60" fill="none" stroke="currentColor"/><path d="M50,110 Q130,50 210,95 T330,70" fill="none" stroke="currentColor"/><path d="M60,100 Q140,60 220,90 T340,80" fill="none" stroke="currentColor"/>`
      : `<path d="M40,100 Q160,60 320,90" fill="none" stroke="currentColor"/><path d="M40,130 Q160,100 320,120" fill="none" stroke="currentColor"/>`;
    return svgWrap(`${lines}<text x="250" y="40" font-size="10">${dense ? "密集＝坡陡" : "稀疏＝坡緩"}</text>`, w, h, caption);
  }

  function crossSection({ caption = "地層剖面示意", layers = ["沉積岩", "頁岩", "花崗岩"] } = {}) {
    const w = 360, h = 160;
    const colors = ["#d4c4a8", "#a8b8c4", "#c9a882"];
    const rects = layers.map((name, i) => {
      const y = 30 + i * 38;
      return `<rect x="60" y="${y}" width="240" height="32" fill="${colors[i % colors.length]}" stroke="currentColor"/><text x="70" y="${y + 20}" font-size="11">${esc(name)}</text>`;
    }).join("");
    return svgWrap(rects, w, h, caption);
  }

  function timeline({ caption = "時間軸", events = [{ year: "1900", label: "A" }, { year: "1950", label: "B" }] } = {}) {
    const w = 360, h = 100, pad = 30;
    const years = events.map(e => Number(String(e.year).replace(/\D/g, "")) || 0);
    const min = Math.min(...years, 0), max = Math.max(...years, min + 1);
    const x = v => pad + ((v - min) / (max - min || 1)) * (w - pad * 2);
    const ev = events.map(e => {
      const v = Number(String(e.year).replace(/\D/g, "")) || 0;
      return `<circle cx="${x(v)}" cy="50" r="5" fill="#e85d4c"/><text x="${x(v)}" y="35" text-anchor="middle" font-size="10">${esc(e.year)}</text><text x="${x(v)}" y="72" text-anchor="middle" font-size="9">${esc(e.label)}</text>`;
    }).join("");
    return svgWrap(`<line x1="${pad}" y1="50" x2="${w - pad}" y2="50" stroke="currentColor" stroke-width="2"/>${ev}`, w, h, caption);
  }

  const renderers = { numberLine, coordinatePlane, triangle, parallelLines, boxPlot, treeDiagram, circle, barChart, solidPrism, lever, circuit, vtGraph, scaleMap, contourMap, crossSection, timeline };

  function diagramKindForTopic(title = "", section = "") {
    const text = `${title}${section}`;
    if (/數線|絕對值|相反數|正負數/.test(text)) return { kind: "numberLine", caption: "數線示意" };
    if (/坐標|函數圖|線型函數|二次函數|象限|直線/.test(text)) return { kind: "coordinatePlane", caption: "坐標平面" };
    if (/三角形|全等|相似|畢氏|勾股|心|證明/.test(text)) return { kind: "triangle", caption: "三角形" };
    if (/平行|四邊形|截角|同位角|內錯角/.test(text)) return { kind: "parallelLines", caption: "平行線截角" };
    if (/圓|弧|弦|切線|半徑/.test(text)) return { kind: "circle", caption: "圓形" };
    if (/盒狀|四分位|中位數|統計/.test(text)) return { kind: "boxPlot", caption: "盒狀圖" };
    if (/機率|樹狀|組合/.test(text)) return { kind: "treeDiagram", caption: "樹狀圖" };
    if (/長條|折線|圖表|資料/.test(text)) return { kind: "barChart", caption: "長條圖" };
    if (/立體|角柱|角錐|表面積|體積|空間/.test(text)) return { kind: "solidPrism", caption: "立體圖形" };
    if (/比例尺|地圖|圖上距離/.test(text)) return { kind: "scaleMap", caption: "比例尺" };
    if (/等高線|坡度|地形/.test(text)) return { kind: "contourMap", caption: "等高線" };
    if (/地層|板塊|斷層|岩石/.test(text)) return { kind: "crossSection", caption: "地層剖面" };
    if (/電路|串聯|並聯|燈泡|電阻/.test(text)) return { kind: "circuit", caption: "電路" };
    if (/蹺蹺板|力矩|杠杆|槓桿/.test(text)) return { kind: "lever", caption: "蹺蹺板" };
    if (/v-t|速度.*時間|vt圖/.test(text)) return { kind: "vtGraph", caption: "v-t 圖" };
    if (/時間|年代|時期|歷史/.test(text)) return { kind: "timeline", caption: "時間軸" };
    return null;
  }

  function renderDiagram(spec) {
    if (!spec || !spec.kind) return "";
    const fn = renderers[spec.kind];
    return fn ? fn(spec) : "";
  }

  function renderQuestionDiagram(spec) {
    const html = renderDiagram(spec);
    return html ? html.replace(/class="lecture-diagram"/g, 'class="question-diagram"') : "";
  }

  return { renderDiagram, renderQuestionDiagram, diagramKindForTopic, svgWrap, renderers };
})();

window.LECTURE_DIAGRAMS = window.DIAGRAM_ENGINE;
