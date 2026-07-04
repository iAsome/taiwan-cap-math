window.DIAGRAM_INFER = (() => {
  const ENGINE = () => window.DIAGRAM_ENGINE;

  const NEEDS = {
    all: /數線|坐標|坐標平面|直角坐標|函數圖|線型函數|二次函數|三角形|全等|相似|畢氏|勾股|平行|四邊形|截角|同位角|內錯角|圓|半徑|弧|弦|切線|盒狀|四分位|統計圖|長條|折線|樹狀|機率|立體|角柱|角錐|表面積|體積|如圖|附圖|圖\(|\u2220|∠|比例尺|等高線|地圖判讀|地形|地層|板塊|電路|串聯|並聯|蹺蹺板|力矩|v-t|速度.*時間|時間軸|年代|象限|原點.*單位|左側.*單位|右側.*單位/,
    math: /數線|絕對值|相反數|正負數|坐標|函數|三角形|圓|半徑|平行|盒狀|立體|角柱|畢氏|勾股|全等|相似/,
    "physics-chem": /如圖|附圖|電路|串聯|並聯|蹺蹺板|力矩|v-t|速度.*時間|磁場|半圓|光路|反射|折射|圖\(/,
    biology: /如圖|附圖|細胞|食物網|遺傳|圖\(/,
    earth: /如圖|附圖|地層|板塊|斷層|剖面|圖\(/,
    geography: /如圖|附圖|比例尺|等高線|地形|地圖|圖上|分布圖|統計圖|長條|折線/,
    history: /如圖|附圖|時間|年代|時期|年表|圖\(/,
    civics: /如圖|附圖|組織圖|流程|圖\(/,
    chinese: /如圖|附圖|表格|圖\(/,
    english: /如圖|附圖|chart|graph|diagram|figure|圖\(/
  };

  function stripFrac(text) {
    return String(text || "").replace(/\[\[frac:[^\]]+\]\]/g, " ").replace(/\s+/g, " ");
  }

  function firstNum(text, re) {
    const m = stripFrac(text).match(re);
    return m ? m[1] : null;
  }

  function allNums(text, re) {
    return [...stripFrac(text).matchAll(re)].map(m => m[1]);
  }

  function parseCoordPairs(text) {
    const pairs = [];
    const re = /\(([−\-]?\d+)\s*[,，]\s*([−\-]?\d+)\)/g;
    let m;
    const raw = stripFrac(text);
    while ((m = re.exec(raw))) pairs.push({ x: Number(m[1].replace("−", "-")), y: Number(m[2].replace("−", "-")), label: `(${m[1]},${m[2]})` });
    return pairs;
  }

  function inferNumberLine(text, topicTitle) {
    const raw = stripFrac(text);
    const points = [];
    const left = raw.match(/([A-ZＡ-Ｚ]|[甲乙丙丁戊])點?在?原點左側\s*([−\-]?\d+)\s*單位/);
    const right = raw.match(/([A-ZＡ-Ｚ]|[甲乙丙丁戊])點?在?原點右側\s*([−\-]?\d+)\s*單位/);
    if (left) points.push({ value: -Math.abs(Number(left[2].replace("−", "-"))), label: left[1] });
    if (right) points.push({ value: Math.abs(Number(right[2].replace("−", "-"))), label: right[1] });
    const coordPair = raw.match(/\(([−\-]?\d+)\s*[,，]\s*([−\-]?\d+)\)/);
    if (coordPair && /數線|坐標/.test(raw + topicTitle)) {
      const x = Number(coordPair[1].replace("−", "-"));
      points.push({ value: x, label: coordPair[0] });
    }
    if (!points.length && /數線|絕對值|相反數/.test(raw + topicTitle)) {
      points.push({ value: -3, label: "A" }, { value: 2, label: "B" });
    }
    const vals = points.map(p => p.value);
    const min = vals.length ? Math.min(...vals, 0) - 2 : -6;
    const max = vals.length ? Math.max(...vals, 0) + 2 : 6;
    return { kind: "numberLine", min, max, points, caption: topicTitle || "數線" };
  }

  function inferCircle(text, topicTitle) {
    const raw = stripFrac(text);
    let rLabel = firstNum(raw, /半徑[為是]?\s*([−\-]?\d+(?:\.\d+)?)/) || firstNum(raw, /半徑\s*([−\-]?\d+(?:\.\d+)?)/);
    if (!rLabel) rLabel = firstNum(raw, /求.*?半徑\s*([xyzr])/i) || firstNum(raw, /半徑\s*([xyzr])/i);
    if (!rLabel && /半徑|圓/.test(raw + topicTitle)) rLabel = "r";
    const rNum = Number(rLabel);
    return { kind: "circle", r: Number.isFinite(rNum) ? Math.min(70, rNum * 8) : 40, rLabel: String(rLabel), caption: topicTitle || "圓形" };
  }

  function inferTriangle(text, topicTitle) {
    const raw = stripFrac(text);
    const sideLabels = [];
    const ab = firstNum(raw, /(?:邊|邊長)?\s*AB\s*[=\＝]\s*([0-9xyz]+)/i);
    const bc = firstNum(raw, /(?:邊|邊長)?\s*BC\s*[=\＝]\s*([0-9xyz]+)/i);
    const ca = firstNum(raw, /(?:邊|邊長)?\s*CA\s*[=\＝]\s*([0-9xyz]+)/i);
    if (ab) sideLabels.push({ edge: "AB", label: ab });
    if (bc) sideLabels.push({ edge: "BC", label: bc });
    if (ca) sideLabels.push({ edge: "CA", label: ca });
    const len = firstNum(raw, /(?:長|長度)[為是]?\s*(\d+)/) || firstNum(raw, /(\d+)\s*(?:公分|cm|公尺|m)/i);
    if (!sideLabels.length && len) sideLabels.push({ edge: "AB", label: len });
    const angleLabels = [];
    const angM = raw.match(/[∠∟]?([A-Z]{1,3})\s*[=\＝]\s*(\d+)\s*°/);
    if (angM) angleLabels.push({ at: angM[1], label: `${angM[2]}°` });
    const degOnly = firstNum(raw, /(\d+)\s*°/);
    if (!angleLabels.length && degOnly && /角|三角形|平行/.test(raw)) angleLabels.push({ at: "B", label: `${degOnly}°` });
    const a = Number(sideLabels.find(s => s.edge === "AB")?.label) || 4;
    const b = Number(sideLabels.find(s => s.edge === "CA")?.label) || 3;
    return { kind: "triangle", a: Number.isFinite(a) ? a : 4, b: Number.isFinite(b) ? b : 3, sideLabels, angleLabels, caption: topicTitle || "三角形" };
  }

  function inferCoordinate(text, topicTitle) {
    const points = parseCoordPairs(text);
    if (!points.length) points.push({ x: 0, y: 0, label: "O" }, { x: 2, y: 3, label: "P" });
    const xs = points.map(p => p.x), ys = points.map(p => p.y);
    return {
      kind: "coordinatePlane",
      minX: Math.min(...xs, -1) - 1, maxX: Math.max(...xs, 1) + 1,
      minY: Math.min(...ys, -1) - 1, maxY: Math.max(...ys, 1) + 1,
      points,
      lines: /直線|一次|y\s*[=\＝]/.test(text) ? [{ x1: -2, y1: -1, x2: 3, y2: 4 }] : [],
      caption: topicTitle || "坐標平面"
    };
  }

  function inferParallel(text, topicTitle) {
    const raw = stripFrac(text);
    const deg = firstNum(raw, /(\d+)\s*°/);
    const angles = deg ? [{ label: `${deg}°` }] : [];
    return { kind: "parallelLines", angles, caption: topicTitle || "平行線截角" };
  }

  function inferScaleMap(text, topicTitle) {
    const scale = firstNum(text, /比例尺\s*1\s*[:\：]\s*(\d+)/) || "50000";
    const mapCm = firstNum(text, /(\d+(?:\.\d+)?)\s*公分/) || "2";
    return { kind: "scaleMap", scale: `1:${scale}`, mapDistance: mapCm, realDistance: "實距", caption: topicTitle || "比例尺" };
  }

  function inferCircuit(text, topicTitle) {
    const nodes = allNums(text, /([甲乙丙丁戊己])燈泡|燈泡\s*([甲乙丙丁戊己])/g).slice(0, 3);
    const labels = nodes.length ? nodes : ["甲", "乙", "丙"];
    return { kind: "circuit", nodes: labels, caption: topicTitle || "電路示意" };
  }

  function inferVtGraph(text, topicTitle) {
    return { kind: "vtGraph", points: [[0, 0], [2, 10], [4, 0]], caption: topicTitle || "v-t 圖" };
  }

  function inferLineChart(text, topicTitle) {
    const nums = [...stripFrac(text).matchAll(/(\d+)/g)].map(m => Number(m[1])).filter(n => n > 0 && n < 100).slice(0, 5);
    const values = nums.length >= 2 ? nums : [2, 5, 3, 8, 6];
    return { kind: "lineChart", values, labels: values.map((_, i) => String(i + 1)), caption: topicTitle || "折線圖" };
  }

  function inferBarChart(text, topicTitle) {
    const nums = [...stripFrac(text).matchAll(/(\d+)/g)].map(m => Number(m[1])).filter(n => n > 0 && n < 100).slice(0, 4);
    const values = nums.length >= 2 ? nums : [3, 7, 5, 9];
    return { kind: "barChart", values, labels: values.map((_, i) => String.fromCharCode(65 + i)), caption: topicTitle || "長條圖" };
  }

  function inferMath(text, ctx) {
    const topic = ctx.topicTitle || "";
    const blob = stripFrac(text) + topic;
    if (/數線|絕對值|相反數|正負數|原點.*單位|左側.*單位/.test(blob)) return inferNumberLine(text, topic);
    if (/半徑|圓|弧|弦|切線/.test(blob)) return inferCircle(text, topic);
    if (/三角形|全等|相似|畢氏|勾股|直角/.test(blob)) return inferTriangle(text, topic);
    if (/平行|截角|同位角|內錯角/.test(blob)) return inferParallel(text, topic);
    if (/坐標|函數圖|象限|直角坐標|一次函數|二次函數|直線/.test(blob)) return inferCoordinate(text, topic);
    if (/盒狀|四分位/.test(blob)) return { kind: "boxPlot", caption: topic || "盒狀圖" };
    if (/樹狀|機率/.test(blob)) return { kind: "treeDiagram", caption: topic || "樹狀圖" };
    if (/折線/.test(blob)) return inferLineChart(text, topic);
    if (/長條|圖表|統計/.test(blob)) return inferBarChart(text, topic);
    if (/立體|角柱|角錐|體積|表面積/.test(blob)) return { kind: "solidPrism", caption: topic || "立體圖形" };
    return ENGINE()?.diagramKindForTopic(topic, "") || null;
  }

  function inferPhysicsChem(text, ctx) {
    const blob = stripFrac(text) + (ctx.topicTitle || "");
    if (/磁場|磁力|N極|S極/.test(blob)) return { kind: "magneticField", caption: ctx.topicTitle || "磁場" };
    if (/電路|串聯|並聯|燈泡|電阻/.test(blob)) return inferCircuit(text, ctx.topicTitle);
    if (/蹺蹺板|力矩|杠杆|槓桿/.test(blob)) return { kind: "lever", caption: ctx.topicTitle || "蹺蹺板" };
    if (/v-t|速度.*時間|等加速度/.test(blob)) return inferVtGraph(text, ctx.topicTitle);
    if (/如圖|附圖|圖\(/.test(blob)) return inferCircuit(text, ctx.topicTitle) || inferVtGraph(text, ctx.topicTitle);
    return ENGINE()?.diagramKindForTopic(ctx.topicTitle || "", blob) || { kind: "circuit", caption: "示意圖" };
  }

  function inferGeography(text, ctx) {
    const blob = stripFrac(text) + (ctx.topicTitle || "");
    if (/比例尺|圖上.*公分|實際距離/.test(blob)) return inferScaleMap(text, ctx.topicTitle);
    if (/等高線|坡度|地形/.test(blob)) return { kind: "contourMap", dense: /密集|陡/.test(blob), caption: ctx.topicTitle || "等高線" };
    if (/長條|折線|統計|圖表/.test(blob)) return /折線/.test(blob) ? inferLineChart(text, ctx.topicTitle) : inferBarChart(text, ctx.topicTitle);
    if (/如圖|附圖|地圖|分布/.test(blob)) return inferScaleMap(text, ctx.topicTitle);
    return ENGINE()?.diagramKindForTopic(ctx.topicTitle || "", blob);
  }

  function inferEarth(text, ctx) {
    const blob = stripFrac(text) + (ctx.topicTitle || "");
    if (/地層|斷層|剖面|岩石/.test(blob)) return { kind: "crossSection", caption: ctx.topicTitle || "地層剖面" };
    if (/如圖|附圖/.test(blob)) return { kind: "crossSection", caption: "地層示意" };
    return ENGINE()?.diagramKindForTopic(ctx.topicTitle || "", blob);
  }

  function inferBiology(text, ctx) {
    const blob = stripFrac(text) + (ctx.topicTitle || "");
    if (/食物網|食物鏈/.test(blob)) return { kind: "foodWeb", caption: ctx.topicTitle || "食物網" };
    if (/細胞|細胞膜|細胞核/.test(blob)) return { kind: "cellDiagram", caption: ctx.topicTitle || "細胞" };
    if (/遺傳|基因|棋盤格/.test(blob)) return { kind: "treeDiagram", caption: ctx.topicTitle || "遺傳圖" };
    if (/如圖|附圖|圖\(/.test(blob)) return { kind: "cellDiagram", caption: "生物示意" };
    return inferGeneric(text, ctx);
  }

  function inferHistoryCivics(text, ctx) {
    const blob = stripFrac(text);
    if (/組織圖|流程|表格|關係圖/.test(blob)) {
      return { kind: "tableDiagram", headers: ["項目", "說明"], rows: [["甲", "乙"], ["丙", "丁"]], caption: ctx.topicTitle || "關係表" };
    }
    const years = [...blob.matchAll(/(\d{3,4})\s*年/g)].map(m => ({ year: m[1], label: "" })).slice(0, 4);
    if (years.length >= 2) return { kind: "timeline", events: years, caption: ctx.topicTitle || "時間軸" };
    if (/如圖|附圖|時間|年代/.test(blob)) return { kind: "timeline", events: [{ year: "1900", label: "A" }, { year: "2000", label: "B" }], caption: ctx.topicTitle || "時間軸" };
    return ENGINE()?.diagramKindForTopic(ctx.topicTitle || "", blob);
  }

  function inferGeneric(text, ctx) {
    const topic = ctx.topicTitle || "";
    const base = ENGINE()?.diagramKindForTopic(topic, stripFrac(text));
    if (base) return { ...base, caption: base.caption || topic };
    if (/如圖|附圖|圖\(/.test(text)) return inferBarChart(text, topic);
    return null;
  }

  function needsDiagram(text, subject = "math", ctx = {}) {
    const blob = stripFrac(text) + (ctx.topicTitle || "") + (ctx.sectionTitle || "");
    const re = NEEDS[subject] || NEEDS.all;
    if (re.test(blob)) return true;
    return Boolean(ENGINE()?.diagramKindForTopic(ctx.topicTitle || "", ctx.sectionTitle || ""));
  }

  function inferDiagramSpec(text, ctx = {}) {
    const subject = ctx.subject || "math";
    const inferrers = {
      math: inferMath,
      "physics-chem": inferPhysicsChem,
      biology: inferBiology,
      earth: inferEarth,
      geography: inferGeography,
      history: inferHistoryCivics,
      civics: inferHistoryCivics,
      chinese: inferGeneric,
      english: inferGeneric
    };
    const fn = inferrers[subject] || inferGeneric;
    let spec = fn(text, ctx);
    if (!spec && ctx.topicTitle) {
      spec = ENGINE()?.diagramKindForTopic(ctx.topicTitle, ctx.sectionTitle || "");
      if (spec) spec = { ...spec, caption: ctx.topicTitle };
    }
    if (!spec && needsDiagram(text, subject, ctx)) {
      spec = inferBarChart(text, ctx.topicTitle) || { kind: "coordinatePlane", caption: "示意圖" };
    }
    return spec;
  }

  function validateSpecLabels(text, spec) {
    if (!spec) return false;
    const raw = stripFrac(text);
    if (spec.kind === "circle") {
      const n = firstNum(raw, /半徑[為是]?\s*([−\-]?\d+(?:\.\d+)?)/) || firstNum(raw, /半徑\s*([−\-]?\d+(?:\.\d+)?)/);
      if (n && spec.rLabel !== n) return false;
      const varR = firstNum(raw, /半徑\s*([xyzr])/i);
      if (varR && spec.rLabel !== varR) return false;
    }
    if (spec.kind === "numberLine" && spec.points?.length) {
      const vals = spec.points.map(p => p.value);
      if (spec.min > Math.min(...vals) || spec.max < Math.max(...vals)) return false;
    }
    if (spec.kind === "triangle") {
      const len = firstNum(raw, /(?:長|長度)[為是]?\s*(\d+)/) || firstNum(raw, /(\d+)\s*(?:公分|cm)/i);
      if (len && spec.sideLabels?.length) {
        if (!spec.sideLabels.some(s => s.label === len)) return false;
      }
    }
    return Boolean(spec.kind);
  }

  return { needsDiagram, inferDiagramSpec, validateSpecLabels, stripFrac };
})();
