window.LECTURE_DIAGRAMS = (() => {
  const esc = value => String(value).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function svgWrap(content, width = 360, height = 120, caption = "") {
    const cap = caption ? `<figcaption class="lecture-diagram-caption">${esc(caption)}</figcaption>` : "";
    return `<figure class="lecture-diagram" role="img">${cap}<svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${content}</svg></figure>`;
  }

  function numberLine({ min = -5, max = 5, points = [], caption = "數線示意" }) {
    const pad = 30, w = 360, h = 80, span = max - min || 1;
    const x = v => pad + ((v - min) / span) * (w - pad * 2);
    const ticks = [];
    for (let v = min; v <= max; v++) ticks.push(`<line x1="${x(v)}" y1="38" x2="${x(v)}" y2="46" stroke="currentColor" stroke-width="1.5"/><text x="${x(v)}" y="62" text-anchor="middle" font-size="12">${esc(v)}</text>`);
    const pts = points.map(p => `<circle cx="${x(p.value)}" cy="42" r="5" fill="${p.color || "#e85d4c"}"/><text x="${x(p.value)}" y="28" text-anchor="middle" font-size="11">${esc(p.label || p.value)}</text>`).join("");
    return svgWrap(`<line x1="${pad}" y1="42" x2="${w - pad}" y2="42" stroke="currentColor" stroke-width="2"/><polygon points="${w - pad},42 ${w - pad - 8},37 ${w - pad - 8},47" fill="currentColor"/>${ticks.join("")}${pts}`, w, h, caption);
  }

  function coordinatePlane({ minX = -4, maxX = 4, minY = -3, maxY = 3, points = [], lines = [], caption = "坐標平面" }) {
    const w = 360, h = 260, pad = 30;
    const sx = v => pad + ((v - minX) / (maxX - minX)) * (w - pad * 2);
    const sy = v => h - pad - ((v - minY) / (maxY - minY)) * (h - pad * 2);
    const grid = [];
    for (let gx = minX; gx <= maxX; gx++) grid.push(`<line x1="${sx(gx)}" y1="${pad}" x2="${sx(gx)}" y2="${h - pad}" stroke="#d5dcd7" stroke-width="1"/>`);
    for (let gy = minY; gy <= maxY; gy++) grid.push(`<line x1="${pad}" y1="${sy(gy)}" x2="${w - pad}" y2="${sy(gy)}" stroke="#d5dcd7" stroke-width="1"/>`);
    const axis = `<line x1="${pad}" y1="${sy(0)}" x2="${w - pad}" y2="${sy(0)}" stroke="currentColor" stroke-width="2"/><line x1="${sx(0)}" y1="${pad}" x2="${sx(0)}" y2="${h - pad}" stroke="currentColor" stroke-width="2"/>`;
    const ln = lines.map(l => `<line x1="${sx(l.x1)}" y1="${sy(l.y1)}" x2="${sx(l.x2)}" y2="${sy(l.y2)}" stroke="${l.color || "#2a7f62"}" stroke-width="2"/>`).join("");
    const pts = points.map(p => `<circle cx="${sx(p.x)}" cy="${sy(p.y)}" r="4" fill="${p.color || "#e85d4c"}"/><text x="${sx(p.x) + 6}" y="${sy(p.y) - 6}" font-size="11">${esc(p.label || `(${p.x},${p.y})`)}</text>`).join("");
    return svgWrap(`${grid.join("")}${axis}${ln}${pts}`, w, h, caption);
  }

  function triangle({ a = 3, b = 4, c = 5, caption = "三角形", labels = ["A", "B", "C"] }) {
    const w = 320, h = 200;
    const Ax = 40, Ay = 160, Bx = 40 + a * 18, By = 160, Cx = 40, Cy = 160 - b * 18;
    return svgWrap(`<polygon points="${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}" fill="none" stroke="currentColor" stroke-width="2"/><text x="${Ax - 8}" y="${Ay + 16}">${esc(labels[0])}</text><text x="${Bx + 4}" y="${By + 16}">${esc(labels[1])}</text><text x="${Cx - 8}" y="${Cy - 8}">${esc(labels[2])}</text><text x="${(Ax + Bx) / 2}" y="${Ay + 18}" font-size="11">${a}</text><text x="${Ax - 18}" y="${(Ay + Cy) / 2}" font-size="11">${b}</text>`, w, h, caption);
  }

  function parallelLines({ caption = "平行線截角" } = {}) {
    const w = 360, h = 160;
    return svgWrap(`<line x1="30" y1="50" x2="330" y2="50" stroke="currentColor" stroke-width="2"/><line x1="30" y1="110" x2="330" y2="110" stroke="currentColor" stroke-width="2"/><line x1="80" y1="20" x2="280" y2="140" stroke="#e85d4c" stroke-width="2"/><text x="300" y="45" font-size="11">L₁</text><text x="300" y="105" font-size="11">L₂</text><text x="290" y="135" font-size="11">截線</text>`, w, h, caption);
  }

  function boxPlot({ min = 2, q1 = 5, med = 8, q3 = 12, max = 15, caption = "盒狀圖" } = {}) {
    const w = 360, h = 100, pad = 30, span = max - min || 1;
    const x = v => pad + ((v - min) / span) * (w - pad * 2);
    return svgWrap(`<line x1="${x(min)}" y1="50" x2="${x(max)}" y2="50" stroke="currentColor" stroke-width="1.5"/><rect x="${x(q1)}" y="35" width="${x(q3) - x(q1)}" height="30" fill="none" stroke="currentColor" stroke-width="2"/><line x1="${x(med)}" y1="35" x2="${x(med)}" y2="65" stroke="#e85d4c" stroke-width="2"/><line x1="${x(min)}" y1="42" x2="${x(min)}" y2="58" stroke="currentColor" stroke-width="2"/><line x1="${x(max)}" y1="42" x2="${x(max)}" y2="58" stroke="currentColor" stroke-width="2"/>`, w, h, caption);
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

  function circle({ r = 40, caption = "圓形", center = "O" } = {}) {
    const w = 200, h = 200, cx = 100, cy = 100;
    return svgWrap(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="currentColor" stroke-width="2"/><line x1="${cx}" y1="${cy}" x2="${cx + r}" y2="${cy}" stroke="#e85d4c" stroke-width="1.5"/><text x="${cx - 6}" y="${cy - 8}">${esc(center)}</text><text x="${cx + r / 2}" y="${cy - 6}" font-size="11">r</text>`, w, h, caption);
  }

  function barChart({ values = [3, 7, 5, 9], labels = ["A", "B", "C", "D"], caption = "長條圖" } = {}) {
    const w = 360, h = 200, pad = 30, max = Math.max(...values, 1);
    const bars = values.map((v, i) => {
      const bw = (w - pad * 2) / values.length * 0.6;
      const x = pad + i * ((w - pad * 2) / values.length) + bw * 0.2;
      const bh = (v / max) * (h - pad * 2);
      return `<rect x="${x}" y="${h - pad - bh}" width="${bw}" height="${bh}" fill="#2a7f62"/><text x="${x + bw / 2}" y="${h - pad + 14}" text-anchor="middle" font-size="11">${esc(labels[i] || i + 1)}</text>`;
    }).join("");
    return svgWrap(`<line x1="${pad}" y1="${h - pad}" x2="${w - pad}" y2="${h - pad}" stroke="currentColor" stroke-width="2"/>${bars}`, w, h, caption);
  }

  function solidPrism({ caption = "角柱示意" } = {}) {
    const w = 240, h = 180;
    return svgWrap(`<polygon points="60,120 140,120 160,80 80,80" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="80,80 160,80 180,40 100,40" fill="none" stroke="currentColor" stroke-width="2"/><line x1="60" y1="120" x2="80" y2="80" stroke="currentColor" stroke-width="2"/><line x1="140" y1="120" x2="160" y2="80" stroke="currentColor" stroke-width="2"/><line x1="140" y1="120" x2="180" y2="40" stroke="currentColor" stroke-width="2"/>`, w, h, caption);
  }

  const diagramKindForTopic = (title = "", section = "") => {
    const text = `${title}${section}`;
    if (/數線|絕對值|相反數|正負數/.test(text)) return { kind: "numberLine", min: -6, max: 6, points: [{ value: -3, label: "A" }, { value: 2, label: "B" }] };
    if (/坐標|函數圖|線型函數|二次函數|圖形/.test(text)) return { kind: "coordinatePlane", points: [{ x: 0, y: 0, label: "O" }, { x: 2, y: 3, label: "P" }], lines: [{ x1: -3, y1: -2, x2: 3, y2: 4 }] };
    if (/三角形|全等|相似|畢氏|勾股|心|證明/.test(text)) return { kind: "triangle" };
    if (/平行|四邊形|截角|同位角|內錯角/.test(text)) return { kind: "parallelLines" };
    if (/圓|弧|弦|切線/.test(text)) return { kind: "circle" };
    if (/盒狀|四分位|中位數|統計/.test(text)) return { kind: "boxPlot" };
    if (/機率|樹狀|組合/.test(text)) return { kind: "treeDiagram" };
    if (/長條|折線|圖表|資料/.test(text)) return { kind: "barChart" };
    if (/立體|角柱|角錐|表面積|體積|空間/.test(text)) return { kind: "solidPrism" };
    return null;
  };

  function renderDiagram(spec) {
    if (!spec || !spec.kind) return "";
    const fn = { numberLine, coordinatePlane, triangle, parallelLines, boxPlot, treeDiagram, circle, barChart, solidPrism }[spec.kind];
    return fn ? fn(spec) : "";
  }

  function renderQuestionDiagram(spec) {
    const html = renderDiagram(spec);
    return html ? html.replace('class="lecture-diagram"', 'class="question-diagram"') : "";
  }

  return { renderDiagram, renderQuestionDiagram, diagramKindForTopic, svgWrap };
})();
