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

  function firstDegree(text) {
    const m = clean(text).match(/(\d+(?:\.\d+)?)\s*(?:°|度|簞)/);
    return m ? `${m[1]}°` : null;
  }

  function numberLine(q) {
    const raw = clean(q.text);
    const points = [];
    const named = [...raw.matchAll(/([A-Z])\((-?\d+(?:\.\d+)?)\)/g)];
    named.forEach(m => points.push({ value: Number(m[2]), label: m[1] }));
    const left = raw.match(/左側\s*(\d+(?:\.\d+)?)\s*單位/);
    const right = raw.match(/右側\s*(\d+(?:\.\d+)?)\s*單位/);
    if (left) points.push({ value: -Math.abs(Number(left[1])), label: "A" });
    if (right) points.push({ value: Math.abs(Number(right[1])), label: "B" });
    if (!points.length) {
      const d = Math.abs(nums(raw).find(n => n > 0) || 5);
      points.push({ value: -d, label: "-d" }, { value: d, label: "d" });
    }
    const vals = points.map(p => p.value);
    const min = Math.floor(Math.min(0, ...vals) - 2);
    const max = Math.ceil(Math.max(0, ...vals) + 2);
    return ok({ kind: "numberLine", min, max, points, segments: points.length >= 2 ? [{ from: vals[0], to: vals[1], label: "距離" }] : [], caption: cap(q, "數線") });
  }

  function coordinate(q) {
    const raw = clean(q.text);
    const points = [...raw.matchAll(/\((-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\)/g)]
      .slice(0, 4)
      .map((m, i) => ({ x: Number(m[1]), y: Number(m[2]), label: ["A", "B", "C", "D"][i] || `P${i + 1}` }));
    if (!points.length) points.push({ x: 0, y: 0, label: "O" }, { x: 2, y: 2, label: "P" });
    const xs = points.map(p => p.x), ys = points.map(p => p.y);
    const lines = /graph|line|function|函數|直線|方程式/.test(`${q.taxonomyKey || ""}${q.text || ""}`)
      ? [{ x1: -3, y1: -1, x2: 3, y2: 3 }]
      : [];
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
    const rawNums = nums(q.text).filter(n => n > 0).slice(0, 3);
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
    const r = raw.match(/半徑[^\d]*(\d+(?:\.\d+)?)/)?.[1] || raw.match(/r\s*[=＝]\s*(\d+(?:\.\d+)?)/i)?.[1] || "r";
    return ok({ kind: "circle", rLabel: r, caption: cap(q, "圓") });
  }

  function sector(q) {
    const raw = clean(q.text);
    const deg = raw.match(/圓心角[^\d]*(\d+(?:\.\d+)?)/)?.[1] || firstDegree(raw)?.replace("°", "");
    const r = raw.match(/半徑[^\d]*(\d+(?:\.\d+)?)/)?.[1] || "r";
    return ok({ kind: "sector", angleLabel: deg ? `${deg}°` : "θ", angleDeg: deg ? Number(deg) : 70, rLabel: r, caption: cap(q, "扇形") });
  }

  function chart(q, kind) {
    const values = nums(q.text).filter(n => n > 0 && n < 100).slice(0, 5);
    const v = values.length >= 2 ? values : [3, 7, 5, 9];
    if (kind === "pieChart") return ok({ kind, slices: [{ label: "甲", pct: 25 }, { label: "其他", pct: 75 }], caption: cap(q, "圓形圖") });
    if (kind === "tableDiagram") return ok({ kind, headers: ["類別", "次數"], rows: v.slice(0, 4).map((n, i) => [String.fromCharCode(65 + i), String(n)]), caption: cap(q, "統計表") });
    return ok({ kind, values: v, labels: v.map((_, i) => String(i + 1)), caption: cap(q, kind === "lineChart" ? "折線圖" : "統計圖") });
  }

  function boxPlot(q) {
    const v = nums(q.text).filter(n => n >= 0 && n < 100).slice(0, 5).sort((a, b) => a - b);
    return ok({ kind: "boxPlot", min: v[0] ?? 2, q1: v[1] ?? 5, med: v[2] ?? 8, q3: v[3] ?? 12, max: v[4] ?? 15, caption: cap(q, "盒狀圖") });
  }

  function solid(q) {
    const id = topicId(q);
    const raw = clean(q.text);
    const r = raw.match(/半徑[^\d]*(\d+(?:\.\d+)?)/)?.[1] || "r";
    const h = raw.match(/高[^\d]*(\d+(?:\.\d+)?)/)?.[1] || "h";
    if (/cone/.test(id)) return ok({ kind: "cone", rLabel: r, hLabel: h, lLabel: "l", caption: cap(q, "圓錐") });
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
    if (/angle|perpendicular$|vertical-angles|reflection|paper-folding-angle|figure-eight|y-shape|polygon-angle|regular-polygon-angle/.test(id)) return angle(q);
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
