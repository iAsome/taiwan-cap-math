window.DIAGRAM_ENGINE = (() => {
  const esc = value => String(value).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const dim = label => `<text class="diagram-dim-label" font-size="11" font-weight="700">${esc(label)}</text>`;

  function svgWrap(content, width = 360, height = 120, caption = "", cssClass = "lecture-diagram") {
    const cap = caption ? `<figcaption class="lecture-diagram-caption">${esc(caption)}</figcaption>` : "";
    return `<figure class="${cssClass}" role="img">${cap}<svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${content}</svg></figure>`;
  }

  // 課本畫法：雙端箭頭、原點 O、等距整數刻度、點標於上方
  function numberLine({ min = -5, max = 5, ticks, points = [], segments = [], caption = "數線示意" } = {}) {
    const pad = 30, w = 360, h = 90, span = max - min || 1;
    const x = v => pad + ((v - min) / span) * (w - pad * 2);
    const tickVals = ticks || (() => {
      const out = [];
      const step = span <= 12 ? 1 : Math.ceil(span / 10);
      for (let v = Math.ceil(min); v <= Math.floor(max); v += step) out.push(v);
      return out.length ? out : [min, max];
    })();
    const tickSvg = tickVals.map(v => `<line x1="${x(v)}" y1="38" x2="${x(v)}" y2="46" stroke="currentColor" stroke-width="1.5"/><text x="${x(v)}" y="66" text-anchor="middle" font-size="12">${esc(v)}</text>`).join("");
    const segSvg = (segments || []).map(s => `<line x1="${x(s.from)}" y1="42" x2="${x(s.to)}" y2="42" stroke="#2a7f62" stroke-width="3"/>${s.label ? `<text x="${x((s.from + s.to) / 2)}" y="24" text-anchor="middle" font-size="10">${esc(s.label)}</text>` : ""}`).join("");
    const pts = points.map(p => `<circle cx="${x(p.value)}" cy="42" r="4.5" fill="${p.color || "#e85d4c"}"/><text x="${x(p.value)}" y="28" text-anchor="middle" font-size="11" font-weight="700">${esc(p.label ?? p.value)}</text>`).join("");
    const originO = (min <= 0 && max >= 0) ? `<text x="${x(0)}" y="82" text-anchor="middle" font-size="10">O</text>` : "";
    return svgWrap(`<line x1="${pad}" y1="42" x2="${w - pad}" y2="42" stroke="currentColor" stroke-width="2"/><polygon points="${w - pad + 2},42 ${w - pad - 7},37.5 ${w - pad - 7},46.5" fill="currentColor"/><polygon points="${pad - 2},42 ${pad + 7},37.5 ${pad + 7},46.5" fill="currentColor"/>${originO}${tickSvg}${segSvg}${pts}`, w, h, caption);
  }

  function coordinatePlane({ minX = -4, maxX = 4, minY = -3, maxY = 3, points = [], lines = [], caption = "坐標平面" } = {}) {
    const w = 360, h = 260, pad = 30;
    const sx = v => pad + ((v - minX) / (maxX - minX || 1)) * (w - pad * 2);
    const sy = v => h - pad - ((v - minY) / (maxY - minY || 1)) * (h - pad * 2);
    const grid = [];
    for (let gx = Math.ceil(minX); gx <= Math.floor(maxX); gx++) grid.push(`<line x1="${sx(gx)}" y1="${pad}" x2="${sx(gx)}" y2="${h - pad}" stroke="#d5dcd7" stroke-width="1"/>`);
    for (let gy = Math.ceil(minY); gy <= Math.floor(maxY); gy++) grid.push(`<line x1="${pad}" y1="${sy(gy)}" x2="${w - pad}" y2="${sy(gy)}" stroke="#d5dcd7" stroke-width="1"/>`);
    // 課本畫法：x／y 軸箭頭＋軸名、原點 O
    const axis = `<line x1="${pad}" y1="${sy(0)}" x2="${w - pad}" y2="${sy(0)}" stroke="currentColor" stroke-width="2"/><line x1="${sx(0)}" y1="${pad}" x2="${sx(0)}" y2="${h - pad}" stroke="currentColor" stroke-width="2"/><polygon points="${w - pad + 2},${sy(0)} ${w - pad - 7},${sy(0) - 4.5} ${w - pad - 7},${sy(0) + 4.5}" fill="currentColor"/><polygon points="${sx(0)},${pad - 2} ${sx(0) - 4.5},${pad + 7} ${sx(0) + 4.5},${pad + 7}" fill="currentColor"/><text x="${w - pad - 4}" y="${sy(0) + 16}" font-size="11" font-style="italic">x</text><text x="${sx(0) + 8}" y="${pad + 6}" font-size="11" font-style="italic">y</text><text x="${sx(0) - 12}" y="${sy(0) + 14}" font-size="10">O</text>`;
    const ln = lines.map(l => `<line x1="${sx(l.x1)}" y1="${sy(l.y1)}" x2="${sx(l.x2)}" y2="${sy(l.y2)}" stroke="${l.color || "#2a7f62"}" stroke-width="2"/>`).join("");
    const pts = points.map(p => `<circle cx="${sx(p.x)}" cy="${sy(p.y)}" r="4" fill="${p.color || "#e85d4c"}"/><text x="${sx(p.x) + 6}" y="${sy(p.y) - 6}" font-size="11" font-weight="700">${esc(p.label || `(${p.x},${p.y})`)}</text>`).join("");
    return svgWrap(`${grid.join("")}${axis}${ln}${pts}`, w, h, caption);
  }

  function triangle({ a = 4, b = 3, labels = ["A", "B", "C"], sideLabels = [], angleLabels = [], rightAngle = false, caption = "三角形" } = {}) {
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
    // 課本畫法：直角處畫小正方形記號
    const raSvg = rightAngle ? `<path d="M${Ax + 12},${Ay} L${Ax + 12},${Ay - 12} L${Ax},${Ay - 12}" fill="none" stroke="currentColor" stroke-width="1.5"/>` : "";
    return svgWrap(`<polygon points="${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}" fill="none" stroke="currentColor" stroke-width="2"/>${raSvg}<text x="${Ax - 8}" y="${Ay + 16}">${esc(labels[0])}</text><text x="${Bx + 4}" y="${By + 16}">${esc(labels[1])}</text><text x="${Cx - 8}" y="${Cy - 8}">${esc(labels[2])}</text>${sideSvg}${angSvg}`, w, h, caption);
  }

  function parallelLines({ caption = "平行線截角", angles = [] } = {}) {
    const w = 360, h = 170;
    const ang = angles[0]?.label ? `<text x="120" y="78" font-size="11" font-weight="700">${esc(angles[0].label)}</text>` : "";
    return svgWrap(`<line x1="30" y1="50" x2="330" y2="50" stroke="currentColor" stroke-width="2"/><line x1="30" y1="110" x2="330" y2="110" stroke="currentColor" stroke-width="2"/><line x1="80" y1="20" x2="280" y2="140" stroke="#e85d4c" stroke-width="2"/><text x="300" y="45" font-size="11">L₁</text><text x="300" y="105" font-size="11">L₂</text>${ang}`, w, h, caption);
  }

  // 課本畫法：圓心 O 實心點、半徑段標 r（或題目數值）
  function circle({ r = 40, rLabel = "r", center = "O", caption = "圓形", tangent = false, tangentPair = false } = {}) {
    const px = Math.min(tangentPair ? 48 : 70, Math.max(25, r));
    const w = tangentPair ? 260 : 200, h = 200, cx = tangentPair ? 78 : 100, cy = 100;
    const base = `<circle cx="${cx}" cy="${cy}" r="${px}" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="${cx}" cy="${cy}" r="2.5" fill="currentColor"/><text x="${cx - 16}" y="${cy - 8}">${esc(center)}</text>`;
    if (tangentPair) {
      const d = px + 98, tx = (px * px) / d, ty = Math.sqrt(px * px - tx * tx);
      const pxp = cx + d, ax = cx + tx, ay = cy - ty, bx = cx + tx, by = cy + ty;
      return svgWrap(base +
        `<line x1="${pxp}" y1="${cy}" x2="${ax}" y2="${ay}" stroke="#2a7f62" stroke-width="2"/><line x1="${pxp}" y1="${cy}" x2="${bx}" y2="${by}" stroke="#2a7f62" stroke-width="2"/>` +
        `<line x1="${cx}" y1="${cy}" x2="${ax}" y2="${ay}" stroke="#e85d4c" stroke-width="1.4"/><line x1="${cx}" y1="${cy}" x2="${bx}" y2="${by}" stroke="#e85d4c" stroke-width="1.4"/>` +
        `<circle cx="${pxp}" cy="${cy}" r="3" fill="currentColor"/><text x="${pxp + 6}" y="${cy + 4}" font-size="11">P</text><text x="${ax - 10}" y="${ay - 6}" font-size="10">A</text><text x="${bx - 10}" y="${by + 14}" font-size="10">B</text>` +
        `<text x="${(pxp + ax) / 2 - 4}" y="${(cy + ay) / 2 - 6}" font-size="10" fill="#2a7f62">PA</text><text x="${(pxp + bx) / 2 - 4}" y="${(cy + by) / 2 + 14}" font-size="10" fill="#2a7f62">PB</text><text x="${(cx + ax) / 2 - 10}" y="${(cy + ay) / 2}" font-size="10" font-weight="700">${esc(rLabel)}</text>`,
        w, h, caption);
    }
    const tangentSvg = tangent
      ? `<line x1="${cx + px}" y1="${cy - 72}" x2="${cx + px}" y2="${cy + 72}" stroke="#2a7f62" stroke-width="2"/><path d="M${cx + px - 12},${cy} L${cx + px - 12},${cy - 12} L${cx + px},${cy - 12}" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="${cx + px + 6}" y="${cy - 54}" font-size="10" fill="#2a7f62">切線</text><text x="${cx + px + 6}" y="${cy + 14}" font-size="10">A</text>`
      : "";
    return svgWrap(`${base}<line x1="${cx}" y1="${cy}" x2="${cx + px}" y2="${cy}" stroke="#e85d4c" stroke-width="1.5"/><text x="${cx + px / 2 - 6}" y="${cy - 8}" font-size="11" font-weight="700">${esc(rLabel)}</text>${tangentSvg}`, w, h, caption);
  }

  // ---- 立體圖形（課本鐵則：被遮稜一律虛線） ----
  const DASH = 'stroke-dasharray="5 4"';

  function cone({ rLabel = "r", hLabel = "h", lLabel = "l", caption = "圓錐" } = {}) {
    const w = 220, h = 210, cx = 110, apexY = 30, baseY = 160, rx = 70, ry = 18;
    return svgWrap(
      `<path d="M${cx - rx},${baseY} A${rx},${ry} 0 0 0 ${cx + rx},${baseY}" fill="none" stroke="currentColor" stroke-width="2"/>` +
      `<path d="M${cx - rx},${baseY} A${rx},${ry} 0 0 1 ${cx + rx},${baseY}" fill="none" stroke="currentColor" stroke-width="1.5" ${DASH}/>` +
      `<line x1="${cx - rx}" y1="${baseY}" x2="${cx}" y2="${apexY}" stroke="currentColor" stroke-width="2"/>` +
      `<line x1="${cx + rx}" y1="${baseY}" x2="${cx}" y2="${apexY}" stroke="currentColor" stroke-width="2"/>` +
      `<line x1="${cx}" y1="${apexY}" x2="${cx}" y2="${baseY}" stroke="#2a7f62" stroke-width="1.5" ${DASH}/>` +
      `<line x1="${cx}" y1="${baseY}" x2="${cx + rx}" y2="${baseY}" stroke="#e85d4c" stroke-width="1.5"/>` +
      `<circle cx="${cx}" cy="${baseY}" r="2.5" fill="currentColor"/>` +
      `<text x="${cx + rx / 2 - 6}" y="${baseY - 6}" font-size="11" font-weight="700">${esc(rLabel)}</text>` +
      `<text x="${cx - 16}" y="${(apexY + baseY) / 2}" font-size="11" font-weight="700" fill="#2a7f62">${esc(hLabel)}</text>` +
      `<text x="${cx + rx / 2 + 8}" y="${(apexY + baseY) / 2 - 10}" font-size="11" font-weight="700">${esc(lLabel)}</text>`,
      w, h, caption);
  }

  function cylinder({ rLabel = "r", hLabel = "h", caption = "圓柱" } = {}) {
    const w = 220, h = 210, cx = 110, topY = 45, botY = 160, rx = 65, ry = 16;
    return svgWrap(
      `<ellipse cx="${cx}" cy="${topY}" rx="${rx}" ry="${ry}" fill="none" stroke="currentColor" stroke-width="2"/>` +
      `<path d="M${cx - rx},${botY} A${rx},${ry} 0 0 0 ${cx + rx},${botY}" fill="none" stroke="currentColor" stroke-width="2"/>` +
      `<path d="M${cx - rx},${botY} A${rx},${ry} 0 0 1 ${cx + rx},${botY}" fill="none" stroke="currentColor" stroke-width="1.5" ${DASH}/>` +
      `<line x1="${cx - rx}" y1="${topY}" x2="${cx - rx}" y2="${botY}" stroke="currentColor" stroke-width="2"/>` +
      `<line x1="${cx + rx}" y1="${topY}" x2="${cx + rx}" y2="${botY}" stroke="currentColor" stroke-width="2"/>` +
      `<line x1="${cx}" y1="${topY}" x2="${cx + rx}" y2="${topY}" stroke="#e85d4c" stroke-width="1.5"/>` +
      `<circle cx="${cx}" cy="${topY}" r="2.5" fill="currentColor"/>` +
      `<text x="${cx + rx / 2 - 6}" y="${topY - 6}" font-size="11" font-weight="700">${esc(rLabel)}</text>` +
      `<text x="${cx + rx + 8}" y="${(topY + botY) / 2 + 4}" font-size="11" font-weight="700">${esc(hLabel)}</text>`,
      w, h, caption);
  }

  function pyramid({ baseLabel = "a", hLabel = "h", caption = "角錐" } = {}) {
    const w = 240, h = 210;
    const ax = 55, ay = 165, bx = 165, by = 175, cx2 = 200, cy2 = 140, dx = 95, dy = 133, tx = 125, ty = 30;
    const bcx = (ax + bx + cx2 + dx) / 4, bcy = (ay + by + cy2 + dy) / 4;
    return svgWrap(
      `<polygon points="${ax},${ay} ${bx},${by} ${cx2},${cy2}" fill="none" stroke="none"/>` +
      `<line x1="${ax}" y1="${ay}" x2="${bx}" y2="${by}" stroke="currentColor" stroke-width="2"/>` +
      `<line x1="${bx}" y1="${by}" x2="${cx2}" y2="${cy2}" stroke="currentColor" stroke-width="2"/>` +
      `<line x1="${cx2}" y1="${cy2}" x2="${dx}" y2="${dy}" stroke="currentColor" stroke-width="1.5" ${DASH}/>` +
      `<line x1="${dx}" y1="${dy}" x2="${ax}" y2="${ay}" stroke="currentColor" stroke-width="1.5" ${DASH}/>` +
      `<line x1="${ax}" y1="${ay}" x2="${tx}" y2="${ty}" stroke="currentColor" stroke-width="2"/>` +
      `<line x1="${bx}" y1="${by}" x2="${tx}" y2="${ty}" stroke="currentColor" stroke-width="2"/>` +
      `<line x1="${cx2}" y1="${cy2}" x2="${tx}" y2="${ty}" stroke="currentColor" stroke-width="2"/>` +
      `<line x1="${dx}" y1="${dy}" x2="${tx}" y2="${ty}" stroke="currentColor" stroke-width="1.5" ${DASH}/>` +
      `<line x1="${tx}" y1="${ty}" x2="${bcx}" y2="${bcy}" stroke="#2a7f62" stroke-width="1.5" ${DASH}/>` +
      `<text x="${(ax + bx) / 2 - 6}" y="${ay + 18}" font-size="11" font-weight="700">${esc(baseLabel)}</text>` +
      `<text x="${bcx + 8}" y="${(ty + bcy) / 2}" font-size="11" font-weight="700" fill="#2a7f62">${esc(hLabel)}</text>`,
      w, h, caption);
  }

  function sphere({ rLabel = "r", caption = "球" } = {}) {
    const w = 200, h = 200, cx = 100, cy = 100, r = 70;
    return svgWrap(
      `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="currentColor" stroke-width="2"/>` +
      `<path d="M${cx - r},${cy} A${r},${r * 0.28} 0 0 0 ${cx + r},${cy}" fill="none" stroke="currentColor" stroke-width="1.5"/>` +
      `<path d="M${cx - r},${cy} A${r},${r * 0.28} 0 0 1 ${cx + r},${cy}" fill="none" stroke="currentColor" stroke-width="1.5" ${DASH}/>` +
      `<circle cx="${cx}" cy="${cy}" r="2.5" fill="currentColor"/>` +
      `<line x1="${cx}" y1="${cy}" x2="${cx + r * 0.72}" y2="${cy - r * 0.6}" stroke="#e85d4c" stroke-width="1.5"/>` +
      `<text x="${cx + r * 0.3}" y="${cy - r * 0.38}" font-size="11" font-weight="700">${esc(rLabel)}</text>` +
      `<text x="${cx - 16}" y="${cy + 14}" font-size="10">O</text>`,
      w, h, caption);
  }

  function sector({ angleLabel = "θ", rLabel = "r", angleDeg = 70, caption = "扇形" } = {}) {
    const w = 220, h = 200, cx = 60, cy = 160, r = 120;
    const a = Math.min(150, Math.max(20, angleDeg)) * Math.PI / 180;
    const x2 = cx + r * Math.cos(a), y2 = cy - r * Math.sin(a);
    const large = 0;
    const midA = a / 2, arcR = 30;
    return svgWrap(
      `<line x1="${cx}" y1="${cy}" x2="${cx + r}" y2="${cy}" stroke="currentColor" stroke-width="2"/>` +
      `<line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="2"/>` +
      `<path d="M${cx + r},${cy} A${r},${r} 0 ${large} 0 ${x2},${y2}" fill="none" stroke="currentColor" stroke-width="2"/>` +
      `<path d="M${cx + arcR},${cy} A${arcR},${arcR} 0 0 0 ${cx + arcR * Math.cos(a)},${cy - arcR * Math.sin(a)}" fill="none" stroke="#e85d4c" stroke-width="1.5"/>` +
      `<text x="${cx + (arcR + 14) * Math.cos(midA) - 4}" y="${cy - (arcR + 14) * Math.sin(midA) + 4}" font-size="11" font-weight="700" fill="#e85d4c">${esc(angleLabel)}</text>` +
      `<circle cx="${cx}" cy="${cy}" r="2.5" fill="currentColor"/><text x="${cx - 14}" y="${cy + 14}" font-size="10">O</text>` +
      `<text x="${cx + r / 2}" y="${cy + 16}" font-size="11" font-weight="700">${esc(rLabel)}</text>`,
      w, h, caption);
  }

  function parabola({ opensUp = true, vertexLabel = "頂點", axisLabel = "", caption = "拋物線" } = {}) {
    const w = 300, h = 240, cx = 150, cy = 130;
    const vy = opensUp ? cy + 60 : cy - 60;
    const sign = opensUp ? -1 : 1;
    const pts = [];
    for (let t = -110; t <= 110; t += 10) pts.push(`${cx + t},${vy + sign * (t * t) / 110}`);
    return svgWrap(
      `<line x1="20" y1="${cy}" x2="${w - 20}" y2="${cy}" stroke="currentColor" stroke-width="1.5"/>` +
      `<polygon points="${w - 18},${cy} ${w - 27},${cy - 4.5} ${w - 27},${cy + 4.5}" fill="currentColor"/>` +
      `<line x1="${cx}" y1="20" x2="${cx}" y2="${h - 20}" stroke="currentColor" stroke-width="1.5"/>` +
      `<polygon points="${cx},18 ${cx - 4.5},27 ${cx + 4.5},27" fill="currentColor"/>` +
      `<text x="${w - 30}" y="${cy + 16}" font-size="11" font-style="italic">x</text><text x="${cx + 8}" y="26" font-size="11" font-style="italic">y</text>` +
      `<polyline points="${pts.join(" ")}" fill="none" stroke="#2a7f62" stroke-width="2.5"/>` +
      `<line x1="${cx}" y1="${Math.min(vy, cy) - 10}" x2="${cx}" y2="${Math.max(vy, cy) + 10}" stroke="#e85d4c" stroke-width="1" ${DASH}/>` +
      `<circle cx="${cx}" cy="${vy}" r="4" fill="#e85d4c"/>` +
      `<text x="${cx + 8}" y="${vy + (opensUp ? 18 : -10)}" font-size="10" font-weight="700">${esc(vertexLabel)}</text>` +
      (axisLabel ? `<text x="${cx + 8}" y="${(opensUp ? h - 26 : 40)}" font-size="9" fill="#e85d4c">${esc(axisLabel)}</text>` : ""),
      w, h, caption);
  }

  function pieChart({ slices = [{ label: "A", pct: 25 }, { label: "B", pct: 75 }], caption = "圓形圖" } = {}) {
    const w = 240, h = 210, cx = 110, cy = 105, r = 80;
    const colors = ["#2a7f62", "#e8f0ec", "#e85d4c", "#d4c4a8", "#a8b8c4"];
    let start = -90, svg = "";
    slices.forEach((s, i) => {
      const sweep = (s.pct / 100) * 360;
      const a1 = start * Math.PI / 180, a2 = (start + sweep) * Math.PI / 180;
      const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
      const x2 = cx + r * Math.cos(a2), y2 = cy + r * Math.sin(a2);
      const large = sweep > 180 ? 1 : 0;
      svg += `<path d="M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large} 1 ${x2},${y2} Z" fill="${colors[i % colors.length]}" stroke="currentColor" stroke-width="1.5"/>`;
      const mid = (start + sweep / 2) * Math.PI / 180;
      svg += `<text x="${cx + r * 0.62 * Math.cos(mid) - 10}" y="${cy + r * 0.62 * Math.sin(mid) + 4}" font-size="10" font-weight="700">${esc(s.label)} ${esc(s.pct)}%</text>`;
      start += sweep;
    });
    return svgWrap(svg + `<circle cx="${cx}" cy="${cy}" r="2" fill="currentColor"/>`, w, h, caption);
  }

  // 直方圖：組距貼合（長條相鄰無間隙），與長條圖區隔
  function histogram({ values = [2, 5, 8, 4, 1], labels = [], caption = "直方圖", xLabel = "組距", yLabel = "次數" } = {}) {
    const w = 360, h = 210, pad = 40, max = Math.max(...values, 1);
    const bw = (w - pad * 2) / values.length;
    const bars = values.map((v, i) => {
      const bh = (v / max) * (h - pad * 2);
      const bx = pad + i * bw;
      return `<rect x="${bx}" y="${h - pad - bh}" width="${bw}" height="${bh}" fill="#2a7f62" stroke="#fff" stroke-width="1"/>` +
        (labels[i] != null ? `<text x="${bx}" y="${h - pad + 14}" text-anchor="middle" font-size="9">${esc(labels[i])}</text>` : "") +
        `<text x="${bx + bw / 2}" y="${h - pad - bh - 5}" text-anchor="middle" font-size="10">${esc(v)}</text>`;
    }).join("");
    return svgWrap(`<line x1="${pad}" y1="${h - pad}" x2="${w - pad}" y2="${h - pad}" stroke="currentColor" stroke-width="2"/><line x1="${pad}" y1="${pad - 6}" x2="${pad}" y2="${h - pad}" stroke="currentColor" stroke-width="2"/><text x="${w - pad + 2}" y="${h - pad + 14}" font-size="10">${esc(xLabel)}</text><text x="${pad - 34}" y="${pad}" font-size="10">${esc(yLabel)}</text>${bars}`, w, h, caption);
  }

  function threeView({ solid = "圓柱", front = "長方形", top = "圓形", side = "長方形", caption = "三視圖" } = {}) {
    const w = 360, h = 150;
    const shape = (kind, cx) => {
      if (/圓/.test(kind)) return `<circle cx="${cx}" cy="70" r="26" fill="none" stroke="#2a7f62" stroke-width="2"/>`;
      if (/三角/.test(kind)) return `<polygon points="${cx - 26},96 ${cx + 26},96 ${cx},44" fill="none" stroke="#2a7f62" stroke-width="2"/>`;
      if (/正方/.test(kind)) return `<rect x="${cx - 24}" y="46" width="48" height="48" fill="none" stroke="#2a7f62" stroke-width="2"/>`;
      return `<rect x="${cx - 26}" y="48" width="52" height="44" fill="none" stroke="#2a7f62" stroke-width="2"/>`;
    };
    return svgWrap(
      shape(front, 70) + `<text x="70" y="126" text-anchor="middle" font-size="10">正視圖（${esc(front)}）</text>` +
      shape(top, 185) + `<text x="185" y="126" text-anchor="middle" font-size="10">俯視圖（${esc(top)}）</text>` +
      shape(side, 300) + `<text x="300" y="126" text-anchor="middle" font-size="10">側視圖（${esc(side)}）</text>` +
      `<text x="16" y="26" font-size="10">立體：${esc(solid)}</text>`,
      w, h, caption);
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

  function angleDiagram({ angleLabel = "θ", caption = "角" } = {}) {
    const w = 240, h = 170, ox = 55, oy = 130, r = 74, deg = Number.parseFloat(angleLabel) || 48;
    const a = Math.min(150, Math.max(20, deg)) * Math.PI / 180;
    const x2 = ox + r * Math.cos(a), y2 = oy - r * Math.sin(a);
    return svgWrap(
      `<line x1="${ox}" y1="${oy}" x2="${ox + 135}" y2="${oy}" stroke="currentColor" stroke-width="2"/>` +
      `<line x1="${ox}" y1="${oy}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="2"/>` +
      `<path d="M${ox + 34},${oy} A34,34 0 0 0 ${ox + 34 * Math.cos(a)},${oy - 34 * Math.sin(a)}" fill="none" stroke="#e85d4c" stroke-width="1.6"/>` +
      `<circle cx="${ox}" cy="${oy}" r="3" fill="currentColor"/><text x="${ox + 42}" y="${oy - 13}" font-size="11" font-weight="700" fill="#e85d4c">${esc(angleLabel)}</text>`,
      w, h, caption);
  }

  function quadrilateral({ shape = "parallelogram", caption = "四邊形", diagonals = false, perpendicular = false, sideLabels = [] } = {}) {
    const w = 270, h = 185;
    const pts = shape === "trapezoid"
      ? [[70, 45], [200, 45], [230, 135], [40, 135]]
      : shape === "rectangle"
        ? [[55, 45], [215, 45], [215, 135], [55, 135]]
        : shape === "square"
          ? [[70, 35], [200, 35], [200, 165], [70, 165]]
          : shape === "rhombus"
            ? [[135, 25], [225, 95], [135, 165], [45, 95]]
            : [[85, 45], [225, 45], [185, 135], [45, 135]];
    const p = pts.map(pair => pair.join(",")).join(" ");
    const labels = ["A", "B", "C", "D"].map((label, i) => `<text x="${pts[i][0] + (i < 2 ? -10 : 6)}" y="${pts[i][1] + (i % 3 === 0 ? -8 : 16)}" font-size="11" font-weight="700">${label}</text>`).join("");
    const diag = diagonals ? `<line x1="${pts[0][0]}" y1="${pts[0][1]}" x2="${pts[2][0]}" y2="${pts[2][1]}" stroke="#2a7f62" stroke-width="1.5"/><line x1="${pts[1][0]}" y1="${pts[1][1]}" x2="${pts[3][0]}" y2="${pts[3][1]}" stroke="#2a7f62" stroke-width="1.5"/>` : "";
    const cx = (pts[0][0] + pts[2][0]) / 2, cy = (pts[0][1] + pts[2][1]) / 2;
    const right = perpendicular ? `<path d="M${cx},${cy} l10,0 l0,10" fill="none" stroke="#e85d4c" stroke-width="1.4"/>` : "";
    const sides = sideLabels.map(s => {
      const pos = { AB: [(pts[0][0] + pts[1][0]) / 2, pts[0][1] - 10], BC: [pts[1][0] + 12, (pts[1][1] + pts[2][1]) / 2], CD: [(pts[2][0] + pts[3][0]) / 2, pts[2][1] + 18], DA: [pts[3][0] - 28, (pts[3][1] + pts[0][1]) / 2] }[s.edge] || [cx, cy];
      return `<text x="${pos[0]}" y="${pos[1]}" font-size="11" font-weight="700" fill="#e85d4c">${esc(s.label)}</text>`;
    }).join("");
    return svgWrap(`<polygon points="${p}" fill="none" stroke="currentColor" stroke-width="2"/>${diag}${right}${labels}${sides}`, w, h, caption);
  }

  function netDiagram({ solid = "rectPrism", caption = "展開圖" } = {}) {
    const w = 320, h = 210;
    if (solid === "cylinder") {
      return svgWrap(`<rect x="90" y="55" width="140" height="85" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="60" cy="98" r="30" fill="none" stroke="#2a7f62" stroke-width="2"/><circle cx="260" cy="98" r="30" fill="none" stroke="#2a7f62" stroke-width="2"/><text x="132" y="102" font-size="11">側面長方形</text><text x="44" y="102" font-size="10">底面</text><text x="244" y="102" font-size="10">底面</text>`, w, h, caption);
    }
    if (solid === "cone") {
      return svgWrap(`<path d="M85,155 A95,95 0 0 1 220,55 L155,155 Z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="235" cy="150" r="28" fill="none" stroke="#2a7f62" stroke-width="2"/><text x="140" y="120" font-size="11">側面扇形</text><text x="222" y="154" font-size="10">底圓</text>`, w, h, caption);
    }
    const cells = [[120,20],[120,65],[120,110],[120,155],[75,65],[165,65]];
    return svgWrap(cells.map(([x,y],i)=>`<rect x="${x}" y="${y}" width="45" height="45" fill="none" stroke="${i<4?'currentColor':'#2a7f62'}" stroke-width="2"/>`).join("") + `<text x="204" y="92" font-size="11">6 個矩形面</text>`, w, h, caption);
  }

  // 長方體線圖，被遮的三稜以虛線表示
  function solidPrism({ caption = "角柱示意", heightLabel = "h", baseLabel = "a" } = {}) {
    const w = 240, h = 180;
    const fx = 55, fy = 145, fw = 100, fh = 75, ox = 45, oy = 32;
    return svgWrap(
      `<rect x="${fx}" y="${fy - fh}" width="${fw}" height="${fh}" fill="none" stroke="currentColor" stroke-width="2"/>` +
      `<line x1="${fx}" y1="${fy - fh}" x2="${fx + ox}" y2="${fy - fh - oy}" stroke="currentColor" stroke-width="2"/>` +
      `<line x1="${fx + fw}" y1="${fy - fh}" x2="${fx + fw + ox}" y2="${fy - fh - oy}" stroke="currentColor" stroke-width="2"/>` +
      `<line x1="${fx + fw}" y1="${fy}" x2="${fx + fw + ox}" y2="${fy - oy}" stroke="currentColor" stroke-width="2"/>` +
      `<line x1="${fx + ox}" y1="${fy - fh - oy}" x2="${fx + fw + ox}" y2="${fy - fh - oy}" stroke="currentColor" stroke-width="2"/>` +
      `<line x1="${fx + fw + ox}" y1="${fy - fh - oy}" x2="${fx + fw + ox}" y2="${fy - oy}" stroke="currentColor" stroke-width="2"/>` +
      `<line x1="${fx}" y1="${fy}" x2="${fx + ox}" y2="${fy - oy}" stroke="currentColor" stroke-width="1.5" ${DASH}/>` +
      `<line x1="${fx + ox}" y1="${fy - oy}" x2="${fx + fw + ox}" y2="${fy - oy}" stroke="currentColor" stroke-width="1.5" ${DASH}/>` +
      `<line x1="${fx + ox}" y1="${fy - oy}" x2="${fx + ox}" y2="${fy - fh - oy}" stroke="currentColor" stroke-width="1.5" ${DASH}/>` +
      `<text x="${fx + fw / 2 - 6}" y="${fy + 18}" font-size="11" font-weight="700">${esc(baseLabel)}</text>` +
      `<text x="${fx + fw + ox + 6}" y="${fy - fh / 2 - oy / 2}" font-size="11" font-weight="700">${esc(heightLabel)}</text>`,
      w, h, caption);
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

  function lineChart({ values = [2, 5, 3, 8], labels = ["1", "2", "3", "4"], caption = "折線圖", xLabel = "", yLabel = "" } = {}) {
    const w = 360, h = 200, pad = 36;
    const max = Math.max(...values, 1);
    const sx = (i) => pad + (i / Math.max(values.length - 1, 1)) * (w - pad * 2);
    const sy = v => h - pad - (v / max) * (h - pad * 2);
    const path = values.map((v, i) => `${i ? "L" : "M"}${sx(i)},${sy(v)}`).join(" ");
    const dots = values.map((v, i) => `<circle cx="${sx(i)}" cy="${sy(v)}" r="4" fill="#2a7f62"/><text x="${sx(i)}" y="${h - pad + 14}" text-anchor="middle" font-size="10">${esc(labels[i] ?? i + 1)}</text>`).join("");
    return svgWrap(`<line x1="${pad}" y1="${h - pad}" x2="${w - pad}" y2="${h - pad}" stroke="currentColor" stroke-width="2"/><line x1="${pad}" y1="${pad}" x2="${pad}" y2="${h - pad}" stroke="currentColor" stroke-width="2"/>${xLabel ? `<text x="${w - 30}" y="${h - pad + 16}" font-size="10">${esc(xLabel)}</text>` : ""}${yLabel ? `<text x="8" y="${pad + 8}" font-size="10">${esc(yLabel)}</text>` : ""}<path d="${path}" fill="none" stroke="#2a7f62" stroke-width="2"/>${dots}`, w, h, caption);
  }

  function magneticField({ caption = "磁場示意", poleN = "N", poleS = "S", forceLabel = "F" } = {}) {
    const w = 360, h = 140;
    return svgWrap(`<rect x="30" y="30" width="300" height="80" rx="40" fill="none" stroke="currentColor" stroke-width="2"/><text x="50" y="55" font-size="12" font-weight="700">${esc(poleN)}</text><text x="280" y="55" font-size="12" font-weight="700">${esc(poleS)}</text><path d="M180,95 L180,115 L195,105 Z" fill="#e85d4c"/><text x="200" y="118" font-size="11">${esc(forceLabel)}</text>`, w, h, caption);
  }

  function tableDiagram({ caption = "表格關係", headers = ["A", "B"], rows = [["1", "2"], ["3", "4"]] } = {}) {
    const w = 360, h = 40 + rows.length * 32;
    const cols = headers.length;
    const cw = 280 / cols;
    let svg = `<rect x="40" y="20" width="${cw * cols}" height="28" fill="#e8f0ec" stroke="currentColor"/>`;
    headers.forEach((h, i) => { svg += `<text x="${52 + i * cw}" y="38" font-size="11" font-weight="700">${esc(h)}</text>`; });
    rows.forEach((row, ri) => {
      const y = 48 + ri * 32;
      svg += `<rect x="40" y="${y}" width="${cw * cols}" height="28" fill="none" stroke="currentColor"/>`;
      row.forEach((cell, ci) => { svg += `<text x="${52 + ci * cw}" y="${y + 18}" font-size="10">${esc(cell)}</text>`; });
    });
    return svgWrap(svg, w, h, caption);
  }

  function cellDiagram({ caption = "細胞示意", label = "細胞" } = {}) {
    const w = 240, h = 160;
    return svgWrap(`<ellipse cx="120" cy="80" rx="90" ry="55" fill="#f4f7f5" stroke="currentColor" stroke-width="2"/><circle cx="120" cy="80" r="18" fill="#e8f0ec" stroke="currentColor"/><text x="108" y="84" font-size="10">核</text><text x="95" y="145" font-size="11">${esc(label)}</text>`, w, h, caption);
  }

  function foodWeb({ caption = "食物網", nodes = ["草", "兔", "狐"] } = {}) {
    const w = 360, h = 140;
    const n = nodes.slice(0, 3);
    return svgWrap(`<text x="40" y="110" font-size="11">${esc(n[0] || "草")}</text><text x="160" y="60" font-size="11">${esc(n[1] || "兔")}</text><text x="280" y="30" font-size="11">${esc(n[2] || "狐")}</text><line x1="70" y1="100" x2="150" y2="70" stroke="currentColor"/><line x1="190" y1="55" x2="270" y2="40" stroke="currentColor"/><polygon points="155,65 165,65 160,75" fill="currentColor"/>`, w, h, caption);
  }

  const renderers = { numberLine, coordinatePlane, triangle, parallelLines, boxPlot, treeDiagram, circle, cone, cylinder, pyramid, sphere, sector, parabola, pieChart, histogram, threeView, barChart, lineChart, angleDiagram, quadrilateral, netDiagram, solidPrism, lever, circuit, vtGraph, scaleMap, contourMap, crossSection, timeline, magneticField, tableDiagram, cellDiagram, foodWeb };

  function diagramKindForTopic(title = "", section = "") {
    const text = `${title}${section}`;
    // 具體 kind 優先於泛用 kind（圓錐≠圓、拋物線≠直線）
    if (/三視圖|視圖/.test(text)) return { kind: "threeView", caption: "三視圖" };
    if (/圓錐/.test(text)) return { kind: "cone", caption: "圓錐" };
    if (/圓柱/.test(text)) return { kind: "cylinder", caption: "圓柱" };
    if (/角錐/.test(text)) return { kind: "pyramid", caption: "角錐" };
    if (/球/.test(text)) return { kind: "sphere", caption: "球" };
    if (/圓形圖|圓餅/.test(text)) return { kind: "pieChart", caption: "圓形圖" };
    if (/直方圖/.test(text)) return { kind: "histogram", caption: "直方圖" };
    if (/扇形|圓心角|弧長/.test(text)) return { kind: "sector", caption: "扇形" };
    if (/二次函數|拋物線|開口|頂點/.test(text)) return { kind: "parabola", caption: "拋物線" };
    if (/數線|絕對值|相反數|正負數/.test(text)) return { kind: "numberLine", caption: "數線示意" };
    if (/坐標|函數圖|線型函數|象限|直線/.test(text)) return { kind: "coordinatePlane", caption: "坐標平面" };
    if (/三角形|全等|相似|畢氏|勾股|心|證明/.test(text)) return { kind: "triangle", caption: "三角形" };
    if (/平行|四邊形|截角|同位角|內錯角/.test(text)) return { kind: "parallelLines", caption: "平行線截角" };
    if (/圓|弧|弦|切線|半徑/.test(text)) return { kind: "circle", caption: "圓形" };
    if (/盒狀|四分位|中位數|統計/.test(text)) return { kind: "boxPlot", caption: "盒狀圖" };
    if (/機率|樹狀|組合/.test(text)) return { kind: "treeDiagram", caption: "樹狀圖" };
    if (/長條|折線|圖表|資料/.test(text)) return { kind: /折線/.test(text) ? "lineChart" : "barChart", caption: "長條圖" };
    if (/立體|角柱|表面積|體積|空間/.test(text)) return { kind: "solidPrism", caption: "立體圖形" };
    if (/比例尺|地圖|圖上距離/.test(text)) return { kind: "scaleMap", caption: "比例尺" };
    if (/等高線|坡度|地形/.test(text)) return { kind: "contourMap", caption: "等高線" };
    if (/地層|板塊|斷層|岩石/.test(text)) return { kind: "crossSection", caption: "地層剖面" };
    if (/電路|串聯|並聯|燈泡|電阻/.test(text)) return { kind: "circuit", caption: "電路" };
    if (/磁場|磁力|N極|S極/.test(text)) return { kind: "magneticField", caption: "磁場" };
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
