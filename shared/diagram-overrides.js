window.DIAGRAM_OVERRIDES = window.DIAGRAM_OVERRIDES || {};

window.DIAGRAM_OVERRIDES.math = (() => {
  const old = window.DIAGRAM_OVERRIDES.math || {};
  const clean = value => String(value || "")
    .replace(/\[\[frac:[^\]]+\]\]/g, " ")
    .replace(/[−－]/g, "-")
    .replace(/[，、]/g, ",");
  const nums = value => [...clean(value).matchAll(/-?\d+(?:\.\d+)?/g)]
    .map(m => Number(m[0]))
    .filter(n => Number.isFinite(n) && Math.abs(n) < 10000);
  const cap = (q, fallback) => q.taxonomyTopic || q.topicTitle || fallback;
  const ok = spec => spec ? { ...spec, verified: true } : null;
  const topicId = q => String(q.taxonomyKey || "").split("/")[1] || "";
  const answerText = q => String((Array.isArray(q.choices) ? q.choices[q.answer] : "") || q.answer || "");
  const round = n => Math.round(Number(n) * 1000) / 1000;
  const coeff = token => token === "" || token === "+" ? 1 : token === "-" ? -1 : Number(token);

  function firstDegree(text) {
    const m = clean(text).match(/(\d+(?:\.\d+)?)\s*(?:°|度|簞)/);
    return m ? `${m[1]}°` : null;
  }

  function numberLine(q) {
    const raw = clean(q.text);
    const id = topicId(q);
    const points = [];
    const named = [...raw.matchAll(/([A-Z])\((-?\d+(?:\.\d+)?)\)/g)];
    named.forEach(m => points.push({ value: Number(m[2]), label: m[1] }));
    const left = raw.match(/左側\s*(\d+(?:\.\d+)?)\s*單位/);
    const right = raw.match(/右側\s*(\d+(?:\.\d+)?)\s*單位/);
    if (left) points.push({ value: -Math.abs(Number(left[1])), label: "A" });
    if (right) points.push({ value: Math.abs(Number(right[1])), label: "B" });
    if (!points.length) {
      const first = nums(raw).find(n => n !== 0);
      const d = Math.abs(first || 5);
      if (/opposite|position/.test(id)) points.push({ value: -d, label: `-${d}` }, { value: d, label: `${d}` });
      else points.push({ value: first || -d, label: String(first || -d) }, { value: 0, label: "0" });
    }
    const vals = points.map(p => p.value);
    const min = Math.floor(Math.min(0, ...vals) - 2);
    const max = Math.ceil(Math.max(0, ...vals) + 2);
    return ok({ kind: "numberLine", min, max, points, segments: points.length >= 2 ? [{ from: vals[0], to: vals[1], label: "距離" }] : [], caption: cap(q, "數線") });
  }

  function coordinate(q) {
    const raw = clean(q.text);
    const compact = raw.replace(/\s+/g, "");
    const points = [...raw.matchAll(/\((-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\)/g)]
      .slice(0, 4)
      .map((m, i) => ({ x: Number(m[1]), y: Number(m[2]), label: ["A", "B", "C", "D"][i] || `P${i + 1}` }));
    const addPoint = (x, y, label = "P") => {
      if (Number.isFinite(x) && Number.isFinite(y) && !points.some(p => p.x === x && p.y === y)) points.push({ x: round(x), y: round(y), label });
    };
    const lineFromSlope = (m, b) => {
      if (!Number.isFinite(m) || !Number.isFinite(b)) return null;
      const x0 = m ? -b / m : 0;
      const x1 = Math.floor(Math.min(-2, 0, x0) - 1);
      const x2 = Math.ceil(Math.max(2, 0, x0) + 1);
      return { m, b, line: { x1, y1: round(m * x1 + b), x2, y2: round(m * x2 + b) } };
    };
    const parseLine = () => {
      let m = compact.match(/y=([+-]?(?:\d+(?:\.\d+)?)?)x([+-]\d+(?:\.\d+)?)?/);
      if (m) return lineFromSlope(coeff(m[1]), Number(m[2] || 0));
      m = raw.match(/斜率\s*(-?\d+(?:\.\d+)?).*?y\s*截距\s*(-?\d+(?:\.\d+)?)/);
      if (m) return lineFromSlope(Number(m[1]), Number(m[2]));
      m = compact.match(/([+-]?(?:\d+(?:\.\d+)?)?)x([+-](?:\d+(?:\.\d+)?)?)y=([+-]?\d+(?:\.\d+)?)/);
      if (m) {
        const a = coeff(m[1]), b = coeff(m[2]), c = Number(m[3]);
        if (b) return lineFromSlope(-a / b, c / b);
        if (a) return { line: { x1: round(c / a), y1: -3, x2: round(c / a), y2: 3 } };
      }
      return null;
    };
    const xMove = raw.match(/x\s*軸(?:右方|右側|向右)\s*(\d+(?:\.\d+)?)\s*單位/) || raw.match(/x\s*軸(?:左方|左側|向左)\s*(\d+(?:\.\d+)?)\s*單位/);
    const yMove = raw.match(/y\s*軸(?:上方|上側|向上)\s*(\d+(?:\.\d+)?)\s*單位/) || raw.match(/y\s*軸(?:下方|下側|向下)\s*(\d+(?:\.\d+)?)\s*單位/);
    if (!points.length && (xMove || yMove)) {
      const x = (xMove ? Number(xMove[1]) : 0) * (/左方|左側|向左/.test(xMove?.[0] || "") ? -1 : 1);
      const y = (yMove ? Number(yMove[1]) : 0) * (/下方|下側|向下/.test(yMove?.[0] || "") ? -1 : 1);
      addPoint(x, y);
    }
    const xy = raw.match(/橫坐標\s*x\s*=?\s*(-?\d+(?:\.\d+)?).*?縱坐標\s*y\s*=?\s*(-?\d+(?:\.\d+)?)/);
    if (!points.length && xy) addPoint(Number(xy[1]), Number(xy[2]));
    const lineInfo = parseLine();
    const wantsLine = /graph|line|function|函數|直線|方程式/.test(`${q.taxonomyKey || ""}${q.text || ""}`);
    const lines = lineInfo?.line ? [lineInfo.line] : wantsLine && points.length >= 2 ? [{ x1: points[0].x, y1: points[0].y, x2: points[1].x, y2: points[1].y }] : [];
    const xAt = raw.match(/x\s*=\s*(-?\d+(?:\.\d+)?)\s*時/);
    if (lineInfo?.m != null && xAt) addPoint(Number(xAt[1]), lineInfo.m * Number(xAt[1]) + lineInfo.b);
    if (lineInfo?.b != null) addPoint(0, lineInfo.b, "Y");
    if (lineInfo?.m) addPoint(-lineInfo.b / lineInfo.m, 0, "X");
    if (!points.length && !lines.length) points.push({ x: 0, y: 0, label: "O" }, { x: 2, y: 2, label: "P" });
    const lineEnds = lines.flatMap(l => [{ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }]);
    const xs = [...points, ...lineEnds].map(p => p.x), ys = [...points, ...lineEnds].map(p => p.y);
    return ok({
      kind: "coordinatePlane",
      minX: Math.floor(Math.min(-1, ...xs) - 1),
      maxX: Math.ceil(Math.max(1, ...xs) + 1),
      minY: Math.floor(Math.min(-1, ...ys) - 1),
      maxY: Math.ceil(Math.max(1, ...ys) + 1),
      points,
      lines,
      caption: cap(q, "坐標平面")
    });
  }

  function triangle(q) {
    const raw = clean(q.text);
    const rawNums = nums(raw.replace(/\d+(?:\.\d+)?\s*(?:°|度)/g, " ")).filter(n => n > 0).slice(0, 3);
    const ladder = raw.match(/梯子長\s*(\d+(?:\.\d+)?)/);
    const foot = raw.match(/腳距牆\s*(\d+(?:\.\d+)?)/);
    if (ladder && foot) {
      const hyp = Number(ladder[1]), base = Number(foot[1]);
      return ok({
        kind: "triangle",
        a: base,
        b: round(Math.sqrt(Math.max(hyp * hyp - base * base, 1))),
        sideLabels: [{ edge: "AB", label: String(base) }, { edge: "BC", label: String(hyp) }],
        angleLabels: [],
        rightAngle: true,
        caption: cap(q, "直角三角形")
      });
    }
    const hypotenuse = raw.match(/斜邊\s*(\d+(?:\.\d+)?)/);
    if (hypotenuse && rawNums.length === 1) {
      return ok({
        kind: "triangle",
        a: 4,
        b: 3,
        sideLabels: [{ edge: "BC", label: hypotenuse[1] }],
        angleLabels: [],
        rightAngle: true,
        caption: cap(q, "直角三角形")
      });
    }
    if (/45\s*°\s*-\s*45\s*°\s*-\s*90\s*°/.test(raw)) {
      return ok({ kind: "triangle", a: 4, b: 4, sideLabels: [], angleLabels: [{ at: "B", label: "45°" }], rightAngle: true, caption: cap(q, "等腰直角三角形") });
    }
    const shortSide = raw.match(/短邊\s*(\d+(?:\.\d+)?)/);
    if (/30\s*°\s*-\s*60\s*°\s*-\s*90\s*°/.test(raw)) {
      const b = Number(shortSide?.[1] || 3);
      return ok({ kind: "triangle", a: round(b * Math.sqrt(3)), b, sideLabels: shortSide ? [{ edge: "CA", label: shortSide[1] }] : [], angleLabels: [{ at: "B", label: "30°" }], rightAngle: true, caption: cap(q, "30°-60°-90°三角形") });
    }
    const edges = ["AB", "CA", "BC"];
    const sideLabels = rawNums.map((n, i) => ({ edge: edges[i], label: String(n) }));
    const deg = firstDegree(q.text);
    return ok({
      kind: "triangle",
      a: rawNums[0] || 4,
      b: rawNums[1] || 3,
      sideLabels,
      angleLabels: deg ? [{ at: "B", label: deg }] : [],
      rightAngle: /pythagorean|right-triangle|畢氏|直角|90/.test(`${q.taxonomyKey || ""}${q.text || ""}`),
      caption: cap(q, "三角形")
    });
  }

  function angle(q) {
    return ok({ kind: "angleDiagram", angleLabel: firstDegree(q.text) || "θ", caption: cap(q, "角") });
  }

  function parallel(q) {
    const deg = firstDegree(q.text);
    return ok({ kind: "parallelLines", angles: deg ? [{ label: deg }] : [], caption: cap(q, "平行線") });
  }

  function quadrilateral(q) {
    const id = topicId(q);
    const shape = /trapezoid/.test(id) ? "trapezoid" : /rectangle/.test(id) ? "rectangle" : "parallelogram";
    return ok({ kind: "quadrilateral", shape, caption: cap(q, "四邊形") });
  }

  function circle(q) {
    const raw = clean(q.text);
    const r = raw.match(/半徑[^\d]*(\d+(?:\.\d+)?)/)?.[1] || raw.match(/O[A-Z]\s*[=＝]\s*(\d+(?:\.\d+)?)/)?.[1] || raw.match(/r\s*[=＝]\s*(\d+(?:\.\d+)?)/i)?.[1] || "r";
    const tangentPair = /兩切線|兩條切線|PA、PB|PA=|PB|切線段等長/.test(`${raw}${q.taxonomyTopic || ""}`);
    return ok({ kind: "circle", rLabel: r, tangent: /切線|切圓|切點|切線段/.test(`${raw}${q.taxonomyTopic || ""}`), tangentPair, caption: cap(q, "圓") });
  }

  function sector(q) {
    const raw = clean(q.text);
    const deg = raw.match(/圓心角[^\d]*(\d+(?:\.\d+)?)/)?.[1] || firstDegree(raw)?.replace("°", "");
    const r = raw.match(/半徑[^\d]*(\d+(?:\.\d+)?)/)?.[1] || "r";
    return ok({ kind: "sector", angleLabel: deg ? `${deg}°` : "θ", angleDeg: deg ? Number(deg) : 70, rLabel: r, caption: cap(q, "扇形") });
  }

  function chart(q, kind) {
    const raw = clean(q.text);
    const dataPart = raw.match(/資料\s*([^中]+)中/)?.[1] || raw;
    const values = nums(dataPart).filter(n => n > 0 && n <= 100).slice(0, 6);
    const fallback = kind === "lineChart" && /向上|增加|上升/.test(raw) ? [2, 4, 6, 8] : kind === "lineChart" && /向下|減少|下降/.test(raw) ? [8, 6, 4, 2] : [3, 7, 5, 9];
    const v = values.length >= 2 ? values : fallback;
    if (kind === "pieChart") {
      const pct = values.find(n => n < 100) || 25;
      return ok({ kind, slices: [{ label: "甲", pct }, { label: "其他", pct: 100 - pct }], caption: cap(q, "圓形圖") });
    }
    if (kind === "tableDiagram") {
      const rows = values.length === 1 ? [["某格", String(values[0])]] : v.slice(0, 4).map((n, i) => [String.fromCharCode(65 + i), String(n)]);
      return ok({ kind, headers: ["類別", "次數"], rows, caption: cap(q, "統計表") });
    }
    return ok({ kind, values: v, labels: v.map((_, i) => String(i + 1)), caption: cap(q, kind === "lineChart" ? "折線圖" : "統計圖") });
  }

  function boxPlot(q) {
    const v = nums(q.text).filter(n => n >= 0 && n < 100).slice(0, 5).sort((a, b) => a - b);
    return ok({ kind: "boxPlot", min: v[0] ?? 2, q1: v[1] ?? 5, med: v[2] ?? 8, q3: v[3] ?? 12, max: v[4] ?? 15, caption: cap(q, "盒狀圖") });
  }

  function solid(q) {
    const id = topicId(q);
    const raw = clean(q.text);
    const r = raw.match(/底圓\s*r\s*[=＝]\s*(\d+(?:\.\d+)?)/)?.[1]
      || raw.match(/底面半徑\s*(\d+(?:\.\d+)?)/)?.[1]
      || raw.match(/\br\s*[=＝]\s*(\d+(?:\.\d+)?)/)?.[1]
      || raw.match(/半徑[^\d]*(\d+(?:\.\d+)?)/)?.[1]
      || "r";
    const h = raw.match(/\bh\s*[=＝]\s*(\d+(?:\.\d+)?)/)?.[1] || raw.match(/高[^\d]*(\d+(?:\.\d+)?)/)?.[1] || "h";
    const l = raw.match(/母線\s*l?\s*[=＝]?\s*(\d+(?:\.\d+)?)/)?.[1] || raw.match(/\bl\s*[=＝]\s*(\d+(?:\.\d+)?)/)?.[1] || "l";
    if (/cone/.test(id)) return ok({ kind: "cone", rLabel: r, hLabel: h, lLabel: l, caption: cap(q, "圓錐") });
    if (/cylinder/.test(id)) return ok({ kind: "cylinder", rLabel: r, hLabel: h, caption: cap(q, "圓柱") });
    if (/pyramid/.test(id)) return ok({ kind: "pyramid", baseLabel: "a", hLabel: h, caption: cap(q, "角錐") });
    return ok({ kind: "solidPrism", caption: cap(q, "立體圖形") });
  }

  function byKey(q) {
    const key = String(q.taxonomyKey || "");
    const id = topicId(q);
    if (!key) return null;
    if (/number-line|absolute|opposite-and-absolute|opposite-number|signed-number|number-classification|addition|subtraction|multiplication-division|operation|integer-arithmetic|distributive|commutative|arithmetic-application|distance-and-midpoint|absolute-difference|inequality.*(number-line|graph)|linear-inequality/.test(id)) return numberLine(q);
    if (/view|three-views|draw-three|direction-views|three-view/.test(id)) return ok({ kind: "threeView", solid: /圓柱/.test(`${q.text || ""}${q.taxonomyTopic || ""}`) ? "圓柱" : "長方體", front: "長方形", top: /圓柱/.test(`${q.text || ""}${q.taxonomyTopic || ""}`) ? "圓形" : "長方形", side: "長方形", caption: cap(q, "三視圖") });
    if (/quadratic|vertex|opening|axis-of-symmetry|graph-translation|graph-key-features|horizontal-line-intersection|max-min|x-intercept|given-max-min/.test(id)) return ok({ kind: "parabola", vertexLabel: "頂點", axisLabel: "對稱軸", caption: cap(q, "二次函數圖形") });
    if (/coordinate|point-coordinates|point-translation|coincident-points|point-position|find-symmetric-point|line-equation-application|distance-to-axes|point-and-axes|polygon-area-from-points|linear-equation-graph|linear-graph|line-through|point-on-line|line-axis|find-line|two-lines|system-graph|quadrant|function-graph|linear-function|linear-from|coordinate-distance|coordinate-point-symmetry|variable|function-concept|function-value|function-type|independent-dependent|intersection-/.test(id)) return coordinate(q);
    if (/pie-chart/.test(id)) return chart(q, "pieChart");
    if (/histogram-frequency-polyline/.test(id)) return chart(q, /折線/.test(answerText(q)) ? "lineChart" : "histogram");
    if (/line-chart|cumulative-frequency-polyline/.test(id)) return chart(q, "lineChart");
    if (/histogram|frequency|statistics-from-chart|statistics-application|range-from-chart|cross-chart|mean|median|mode|identify-statistic/.test(id)) return chart(q, /table/.test(id) ? "tableDiagram" : "histogram");
    if (/contingency.*table|frequency-table|cumulative-frequency-tables/.test(id)) return chart(q, "tableDiagram");
    if (/boxplot|quartile|range-iqr/.test(id)) return boxPlot(q);
    if (/tree-diagram|probability/.test(id)) return ok({ kind: "treeDiagram", caption: cap(q, "樹狀圖") });
    if (/arc-length|sector/.test(id)) return sector(q);
    if (/circle|chord|inscribed|semicircle|arc|radius/.test(id)) return circle(q);
    if (/rotation-sweep/.test(id)) return sector(q);
    if (/parallel-lines|parallel-perpendicular|transversal|parallel-proportional|two-parallels|parallel-test|zigzag|paper-folding-parallels/.test(id)) return parallel(q);
    if (/parallelogram|rectangle|trapezoid|quadrilateral|special-quad|polygon-correspondence|rhombus|kite|square|diagonal/.test(id)) return quadrilateral(q);
    if (/(^|-)angle($|-)|perpendicular$|vertical-angles|reflection|paper-folding-angle|figure-eight|y-shape|polygon-angle|regular-polygon-angle/.test(id)) return angle(q);
    if (/tangent/.test(id)) return circle(q);
    if (/triangle|pythagorean|congruence|similar|right-triangle|altitude|perpendicular-bisector|angle-bisector|point-to-line|line-symmetric|polygon-diagonals|symmetric-angle|symmetric-segment|geometry-proof|circumcenter|incenter|isosceles|equilateral|side-length-range|perimeter-from-range|midsegment|equal-height|life-measurement|special-right-ratio|centroid|special-.*centers|construction-geometric|compass-straightedge/.test(id)) return triangle(q);
    if (/prism|cylinder|pyramid|cone|line-plane|line-line|plane-plane|net-reading|space|volume|surface/.test(id)) return solid(q);
    return null;
  }

  return { ...old, __byKey: byKey };
})();

window.DIAGRAM_OVERRIDES.chinese = window.DIAGRAM_OVERRIDES.chinese || {};
window.DIAGRAM_OVERRIDES.english = window.DIAGRAM_OVERRIDES.english || {};
window.DIAGRAM_OVERRIDES["physics-chem"] = window.DIAGRAM_OVERRIDES["physics-chem"] || {};
window.DIAGRAM_OVERRIDES.biology = window.DIAGRAM_OVERRIDES.biology || {};
window.DIAGRAM_OVERRIDES.earth = window.DIAGRAM_OVERRIDES.earth || {};
window.DIAGRAM_OVERRIDES.history = window.DIAGRAM_OVERRIDES.history || {};
window.DIAGRAM_OVERRIDES.geography = window.DIAGRAM_OVERRIDES.geography || {};
window.DIAGRAM_OVERRIDES.civics = window.DIAGRAM_OVERRIDES.civics || {};
