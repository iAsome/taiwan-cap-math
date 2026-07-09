import { skill, topic, unit } from "./v2-shared.mjs";

/** Minimum skill counts per unit (Phase 2A-R1) */
export const SKILL_MINIMUMS = {
  u01: 15, u02: 15, u03: 15, u04: 14, u05: 12, u06: 12, u07: 12, u08: 14, u09: 16,
  u10: 13, u11: 16, u12: 10, u13: 15, u14: 12, u15: 13, u16: 18, u17: 18, u18: 16,
  u19: 18, u20: 15, u21: 12, u22: 18, u23: 20
};

const S = (skillId, title, topicId, legacyRefs = [], extra = {}) =>
  skill(skillId, title, topicId, legacyRefs, {
    notes: extra.notes ?? "會考基礎範圍；Phase 2B 生成正式題庫。",
    capBoundary: extra.capBoundary ?? "限國中會考範圍；不含高中延伸。",
    ...extra
  });

/** Extra skills to pad each unit to minimum (legacyRefs empty until verified) */
export const EXTRA_SKILLS = {
  u05: [],
  u06: [
    S("ratio-part-total", "部分量與總量", "u06-ratio-basics", ["g7-2-c3/ratio-and-value"]),
    S("proportion-property", "比例式性質", "u06-ratio-basics", ["g7-2-c3/ratio-properties"]),
    S("inverse-variation-graph", "反比圖形概念", "u06-ratio-apps", [], { notes: "以文字描述圖形特徵，不用圖片。" }),
    S("ratio-composite-problem", "比例複合應用", "u06-ratio-apps", [], { notes: "會考基礎範圍。" })
  ],
  u07: [
    S("inequality-number-line", "不等式解的數線表示", "u07-inequality-basics", ["g7-2-c4/linear-inequality-concept"]),
    S("inequality-sign-flip", "乘除負數變號", "u07-inequality-basics", [], { notes: "會考常考陷阱。" }),
    S("inequality-and-word", "不等式與且的語意", "u07-inequality-apps", [], { notes: "會考基礎範圍。" }),
    S("inequality-budget", "預算不等式應用", "u07-inequality-apps", [], { notes: "素養情境題預留。" }),
    S("inequality-range", "解的範圍敘述", "u07-inequality-apps", [], { notes: "會考基礎範圍。" })
  ],
  u08: [
    S("angle-notation", "角的標記", "u08-basic-figures", ["g7-2-c6/figure-notation"]),
    S("perpendicular-basic", "垂直概念", "u08-basic-figures", ["g7-2-c6/perpendicular"]),
    S("complementary-supplementary", "互餘與互补角", "u08-basic-figures", [], { notes: "會考基礎範圍。" }),
    S("polygon-angle-sum", "多邊形內角和", "u08-basic-figures", [], { notes: "會考基礎範圍。" })
  ],
  u09: [
    S("histogram-read", "直方圖判讀", "u09-data-display", ["g7-2-c5/histogram-frequency-polyline"]),
    S("cumulative-frequency", "累積次數", "u09-data-display", ["g7-2-c5/cumulative-relative-frequency"]),
    S("contingency-table", "列聯表", "u09-data-display", ["g7-2-c5/contingency-frequency-table"]),
    S("mean-from-table", "由表格求平均", "u09-central-tendency", [], { notes: "會考基礎範圍。" }),
    S("median-position", "中位數位置", "u09-central-tendency", [], { notes: "會考基礎範圍。" }),
    S("mode-interpret", "眾數意義", "u09-central-tendency", [], { notes: "會考基礎範圍。" }),
    S("stats-compare-datasets", "兩組資料比較", "u09-central-tendency", [], { notes: "素養題預留。" }),
    S("stats-missing-value", "缺值對平均影響", "u09-central-tendency", [], { notes: "會考基礎範圍。" })
  ],
  u10: [
    S("mult-formula-expand", "乘法公式展開", "u10-multiplication-formulas", ["g8-1-c1/common-multiplication-formulas"]),
    S("mult-formula-evaluate", "乘法公式求值", "u10-multiplication-formulas", ["g8-1-c1/formula-evaluate"]),
    S("distributive-evaluate", "分配律求值", "u10-multiplication-formulas", ["g8-1-c1/distributive-evaluate"]),
    S("polynomial-like-terms", "同類項整理", "u10-polynomial-ops", [], { notes: "會考基礎範圍。" }),
    S("polynomial-word-setup", "多項式列式", "u10-polynomial-ops", [], { notes: "會考基礎範圍。" }),
    S("polynomial-degree", "多項式次數", "u10-polynomial-ops", [], { notes: "會考基礎範圍。" })
  ],
  u11: [
    S("sqrt-notation", "平方根記號", "u11-square-root", ["g8-1-c2/sqrt-notation"]),
    S("sqrt-perfect-square", "完全平方數平方根", "u11-square-root", ["g8-1-c2/sqrt-meaning"]),
    S("sqrt-rationalize-simple", "分母有理化基本", "u11-square-root", [], { notes: "限國中會考基本題。" }),
    S("pythagorean-find-leg", "已知斜邊求股", "u11-pythagorean", [], { notes: "會考基礎範圍。" }),
    S("pythagorean-word", "畢氏定理文字應用", "u11-pythagorean", [], { notes: "全文字描述，不用圖。" }),
    S("right-triangle-identify", "直角三角形判定", "u11-pythagorean", [], { notes: "會考基礎範圍。" }),
    S("sqrt-comparison", "平方根大小比較", "u11-square-root", [], { notes: "會考基礎範圍。" }),
    S("pythagorean-converse-basic", "畢氏定理逆命題基本", "u11-pythagorean", [], { notes: "只做概念判斷。" })
  ],
  u12: [
    S("factoring-by-grouping", "分組分解", "u12-factoring-methods", [], { notes: "會考基礎範圍。" }),
    S("factoring-check-expand", "分解後展開檢查", "u12-factoring-apps", [], { notes: "會考基礎範圍。" }),
    S("factoring-quadratic-trinomial", "二次三項式分解", "u12-factoring-methods", [], { notes: "限國中範圍。" }),
    S("factoring-word-area", "面積式因式分解", "u12-factoring-apps", [], { notes: "文字描述，不用圖。" }),
    S("factoring-common-mistake-sign", "分解符號陷阱", "u12-factoring-apps", [], { notes: "常見錯誤預留。" })
  ],
  u13: [
    S("quadratic-standard-form", "標準式與係數", "u13-quadratic-solving", ["g8-1-c4/quadratic-equation-concept"]),
    S("quadratic-solve-by-factoring", "因式分解解方程", "u13-quadratic-solving", ["g8-1-c4/solve-quadratic"]),
    S("quadratic-complete-square-basic", "配方法基本", "u13-quadratic-solving", [], { notes: "會考基礎範圍。" }),
    S("quadratic-roots-count", "根的個數判斷", "u13-quadratic-solving", [], { notes: "用判別式概念。" }),
    S("quadratic-area-problem", "面積問題列方程", "u13-quadratic-apps", [], { notes: "文字描述。" }),
    S("quadratic-consecutive-product", "連續整數乘積", "u13-quadratic-apps", [], { notes: "會考常考型。" }),
    S("quadratic-check-root", "二次方程解的檢查", "u13-quadratic-solving", [], { notes: "會考基礎範圍。" }),
    S("quadratic-formula-basic", "公式解基本", "u13-quadratic-solving", ["g8-1-c4/quadratic-solution"])
  ],
  u14: [
    S("sequence-nth-term", "求第 n 項", "u14-sequences", ["g8-2-c1/sequence-concept"]),
    S("arithmetic-mean-term", "等差中項", "u14-sequences", ["g8-2-c1/arithmetic-mean"]),
    S("arithmetic-series-word", "等差級數應用", "u14-series", [], { notes: "會考基礎範圍。" }),
    S("sequence-pattern-word", "規律觀察列式", "u14-sequences", [], { notes: "會考基礎範圍。" }),
    S("geometric-nth-basic", "等比第 n 項基本", "u14-series", [], { notes: "不含等比級數深題。" }),
    S("series-sum-word", "級數求和應用", "u14-series", [], { notes: "限等差級數。" })
  ],
  u15: [
    S("function-input-output", "自變數與應變數", "u15-function-basics", ["g8-2-c2/independent-dependent-variable"]),
    S("function-notation", "函數記號 f(x)", "u15-function-basics", [], { notes: "會考基礎範圍。" }),
    S("linear-function-slope-intercept", "斜截式", "u15-linear-function", [], { notes: "限線型函數。" }),
    S("linear-function-rate", "速率與線型函數", "u15-linear-function", [], { notes: "會考基礎範圍。" }),
    S("function-domain-range-basic", "定義域值域基本", "u15-function-basics", [], { notes: "限國中會考。" }),
    S("function-graph-read-point", "由圖讀函數值", "u15-linear-function", [], { notes: "文字描述圖形。" }),
    S("piecewise-linear-basic", "分段線型基本", "u15-linear-function", [], { notes: "只做簡單情境。" })
  ],
  u16: [
    S("angle-sum-exterior", "外角定理", "u16-triangle-congruence", [], { notes: "會考基礎範圍。" }),
    S("triangle-sss-sas", "SSS 與 SAS", "u16-triangle-congruence", [], { notes: "全等判定。" }),
    S("triangle-asa-aas", "ASA 與 AAS", "u16-triangle-congruence", [], { notes: "全等判定。" }),
    S("isosceles-properties", "等腰三角形性質", "u16-triangle-congruence", [], { notes: "會考基礎範圍。" }),
    S("equilateral-properties", "等邊三角形性質", "u16-triangle-congruence", [], { notes: "會考基礎範圍。" }),
    S("compass-copy-angle", "複製角", "u16-construction", ["g8-2-c3/compass-straightedge"]),
    S("compass-perpendicular", "過點作垂線", "u16-construction", [], { notes: "尺規作圖概念。" }),
    S("triangle-side-angle-relation", "邊角關係", "u16-construction", [], { notes: "會考基礎範圍。" }),
    S("exterior-angle-sum", "多边形外角和", "u16-construction", [], { notes: "會考基礎範圍。" }),
    S("triangle-medians", "中線概念", "u16-construction", [], { notes: "與重心連結。" }),
    S("triangle-altitude", "高線概念", "u16-construction", [], { notes: "會考基礎範圍。" }),
    S("construction-word-steps", "作圖步驟文字題", "u16-construction", [], { notes: "全文字描述。" })
  ],
  u17: [
    S("parallel-alternate-interior", "內錯角", "u17-parallel-lines", ["g8-2-c4/parallel-transversal-angles"]),
    S("parallel-corresponding", "同位角", "u17-parallel-lines", [], { notes: "會考基礎範圍。" }),
    S("parallel-consecutive-interior", "同側內角", "u17-parallel-lines", [], { notes: "會考基礎範圍。" }),
    S("parallelogram-opposite-sides", "平行四邊形對邊", "u17-quadrilateral", [], { notes: "會考基礎範圍。" }),
    S("parallelogram-diagonal", "平行四邊形對角線", "u17-quadrilateral", [], { notes: "會考基礎範圍。" }),
    S("rhombus-properties", "菱形性質", "u17-quadrilateral", [], { notes: "會考基礎範圍。" }),
    S("rectangle-square-properties", "矩形與正方形", "u17-quadrilateral", [], { notes: "會考基礎範圍。" }),
    S("trapezoid-area", "梯形面積", "u17-quadrilateral", [], { notes: "會考基礎範圍。" }),
    S("quadrilateral-angle-sum", "四邊形內角和", "u17-quadrilateral", [], { notes: "會考基礎範圍。" }),
    S("parallel-lines-distance", "平行線距離", "u17-parallel-lines", [], { notes: "會考基礎範圍。" }),
    S("quadrilateral-proof-basic", "四邊形證明基本", "u17-quadrilateral", [], { notes: "會考基礎範圍。" })
  ],
  u18: [
    S("continued-ratio-word", "連比應用題", "u18-continued-ratio", ["g9-1-c1/continued-proportion"]),
    S("continued-ratio-properties", "連比性質", "u18-continued-ratio", ["g9-1-c1/continued-ratio-properties"]),
    S("similarity-aa", "AA 相似", "u18-similarity", [], { notes: "會考基礎範圍。" }),
    S("similarity-sas", "SAS 相似", "u18-similarity", [], { notes: "會考基礎範圍。" }),
    S("similarity-sss", "SSS 相似", "u18-similarity", [], { notes: "會考基礎範圍。" }),
    S("similar-height-measure", "利用相似測高", "u18-similarity", [], { notes: "文字描述。" }),
    S("similar-shadow-problem", "影子測量", "u18-similarity", [], { notes: "會考常考。" }),
    S("ratio-perimeter-application", "周長比應用", "u18-similarity", [], { notes: "會考基礎範圍。" }),
    S("ratio-area-application", "面積比應用", "u18-similarity", [], { notes: "會考基礎範圍。" })
  ],
  u19: [
    S("circle-chord", "弦與弧", "u19-circle-angles", ["g9-1-c2/circle-vocabulary"]),
    S("inscribed-angle-theorem", "圓周角定理", "u19-circle-angles", [], { notes: "會考基礎範圍。" }),
    S("central-angle-arc", "圓心角與弧", "u19-circle-angles", [], { notes: "會考基礎範圍。" }),
    S("arc-length-formula", "弧長公式", "u19-circle-measure", ["g9-1-c2/arc-length-sector"]),
    S("sector-perimeter", "扇形周長", "u19-circle-measure", [], { notes: "會考基礎範圍。" }),
    S("circle-area", "圓面積", "u19-circle-measure", [], { notes: "會考基礎範圍。" }),
    S("tangent-radius", "切線與半徑", "u19-circle-tangent", [], { notes: "會考基礎範圍。" }),
    S("two-tangent-segments", "切線段相等", "u19-circle-tangent", [], { notes: "會考基礎範圍。" }),
    S("circle-inscribed-basic", "內接角應用", "u19-circle-angles", [], { notes: "會考基礎範圍。" }),
    S("circle-composite-perimeter", "圓組合周長", "u19-circle-measure", [], { notes: "文字描述。" })
  ],
  u20: [
    S("proof-fill-reason", "填充證明理由", "u20-proof", ["g9-1-c3/proof-concept"]),
    S("proof-contrapositive-basic", "逆否命題基本", "u20-proof", [], { notes: "限國中邏輯。" }),
    S("circumcenter-property", "外心性質", "u20-triangle-centers", [], { notes: "會考基礎範圍。" }),
    S("incenter-property", "內心性質", "u20-triangle-centers", [], { notes: "會考基礎範圍。" }),
    S("centroid-property", "重心性質", "u20-triangle-centers", [], { notes: "會考基礎範圍。" }),
    S("orthocenter-identify", "垂心辨識", "u20-triangle-centers", [], { notes: "只做基本辨識。" }),
    S("triangle-center-word", "三角形的心應用", "u20-triangle-centers", [], { notes: "文字描述。" })
  ],
  u21: [
    S("quadratic-standard-to-graph", "標準式與圖形", "u21-quadratic-function", ["g9-2-c1/quadratic-function-concept"]),
    S("quadratic-graph-forms", "圖形表徵", "u21-quadratic-function", ["g9-2-c1/quadratic-graph-forms"]),
    S("quadratic-opening", "開口方向", "u21-quadratic-function", ["g9-2-c1/opening-direction"]),
    S("quadratic-axis-symmetry", "對稱軸求法", "u21-quadratic-function", [], { notes: "會考基礎範圍。" }),
    S("quadratic-vertex-form-basic", "頂點式基本", "u21-quadratic-function", [], { notes: "會考基礎範圍。" }),
    S("quadratic-table-graph", "列表作圖概念", "u21-quadratic-function", [], { notes: "文字描述。" }),
    S("quadratic-application-area", "拋物線面積應用", "u21-quadratic-function", [], { notes: "限簡單情境。" }),
    S("quadratic-shift", "平移概念", "u21-quadratic-function", [], { notes: "會考基礎範圍。" })
  ],
  u22: [
    S("quartile-position", "四分位數位置", "u22-quartile", ["g9-2-c2/quartile-concept"]),
    S("box-plot-components", "盒狀圖五數", "u22-quartile", [], { notes: "會考基礎範圍。" }),
    S("iqr-outlier-basic", "IQR 與離群值", "u22-quartile", [], { notes: "會考基礎範圍。" }),
    S("ogive-read", "累積次數折線圖", "u22-quartile", ["g9-2-c2/ogive-quartile-group"]),
    S("range-iqr-compare", "全距與 IQR 比較", "u22-quartile", ["g9-2-c2/range-iqr"]),
    S("probability-sample-space", "樣本空間", "u22-probability", [], { notes: "會考基礎範圍。" }),
    S("probability-equally-likely", "等可能機率", "u22-probability", [], { notes: "會考基礎範圍。" }),
    S("probability-two-stage", "兩階段機率", "u22-probability", [], { notes: "限樹狀圖基本。" }),
    S("probability-word", "機率應用題", "u22-probability", [], { notes: "會考基礎範圍。" }),
    S("statistics-probability-literacy", "統計機率素養", "u22-probability", [], { questionTarget: 8, notes: "跨題材素養預留。" }),
    S("box-plot-compare", "兩盒狀圖比較", "u22-quartile", [], { notes: "會考基礎範圍。" })
  ],
  u23: [
    S("solid-prism-concept", "角柱概念", "u23-solid-basics", [], { notes: "全文字描述。" }),
    S("solid-pyramid-concept", "角錐概念", "u23-solid-basics", [], { notes: "全文字描述。" }),
    S("solid-cylinder-concept", "圓柱概念", "u23-solid-basics", [], { notes: "會考基礎範圍。" }),
    S("solid-cone-concept", "圓錐概念", "u23-solid-basics", [], { notes: "會考基礎範圍。" }),
    S("solid-sphere-basic", "球體基本", "u23-solid-basics", [], { notes: "限體積公式。" }),
    S("surface-area-net", "由展開圖求表面積", "u23-solid-measure", [], { notes: "文字描述展開圖。" }),
    S("volume-unit-conversion", "體積單位換算", "u23-solid-measure", [], { notes: "會考基礎範圍。" }),
    S("composite-solid-volume", "組合體體積", "u23-solid-measure", [], { notes: "會考基礎範圍。" }),
    S("composite-solid-surface", "組合體表面積", "u23-solid-measure", [], { notes: "會考基礎範圍。" }),
    S("solid-application-word", "立體應用題", "u23-solid-measure", [], { notes: "素養情境。" }),
    S("cross-section-solid", "截面與立體", "u23-solid-basics", [], { notes: "文字描述。" }),
    S("solid-similarity-scale", "縮放與體積比", "u23-solid-measure", [], { notes: "只做縮放概念。" }),
    S("solid-packaging", "包裝問題", "u23-solid-measure", [], { notes: "素養情境。" })
  ]
};

/** Map wrong legacy topic ids to verified v1 ids (partial) */
export const LEGACY_REF_FIXES = {
  "g7-2-c2/distance-formula": "g7-2-c2/point-coordinates",
  "g7-2-c2/midpoint-formula": "g7-2-c2/coordinate-plane",
  "g7-2-c2/slope-concept": "g7-2-c2/point-coordinates",
  "g7-2-c2/linear-equation-graph": "g7-2-c2/coordinate-plane",
  "g7-2-c2/linear-system-graph": "g7-2-c2/coordinate-plane",
  "g7-2-c3/ratio-simplify": "g7-2-c3/ratio-and-value",
  "g7-2-c3/proportion-solve": "g7-2-c3/equal-ratios",
  "g7-2-c3/direct-variation": "g7-2-c3/ratio-properties",
  "g7-2-c3/inverse-variation": "g7-2-c3/ratio-properties",
  "g7-2-c3/scale-drawing": "g7-2-c3/ratio-and-value",
  "g7-2-c3/ratio-word-problem": "g7-2-c3/ratio-and-value",
  "g7-2-c4/inequality-concept": "g7-2-c4/linear-inequality-concept",
  "g7-2-c4/solve-inequality": "g7-2-c4/inequality-solution-concept",
  "g7-2-c4/inequality-integer-solutions": "g7-2-c4/inequality-solution-concept",
  "g7-2-c4/inequality-word-problem": "g7-2-c4/inequality-word-association",
  "g7-2-c5/frequency-table": "g7-2-c5/contingency-frequency-table",
  "g7-2-c5/bar-chart": "g7-2-c5/histogram-frequency-polyline",
  "g7-2-c5/circle-graph": "g7-2-c5/cumulative-relative-frequency",
  "g7-2-c5/line-graph": "g7-2-c5/histogram-frequency-polyline",
  "g7-2-c5/mean-calculation": "g7-2-c5/cumulative-relative-frequency",
  "g7-2-c5/median-mode": "g7-2-c5/cumulative-relative-frequency",
  "g7-2-c6/angle-types": "g7-2-c6/figure-notation",
  "g7-2-c6/line-relationships": "g7-2-c6/perpendicular",
  "g7-2-c6/polygon-basics": "g7-2-c6/figure-notation",
  "g7-2-c6/perpendicular-bisector": "g7-2-c6/perpendicular",
  "g7-2-c6/line-symmetry": "g7-2-c6/figure-notation",
  "g7-2-c6/orthographic-views": "g7-2-c6/figure-notation",
  "g8-1-c1/square-formula": "g8-1-c1/common-multiplication-formulas",
  "g8-1-c1/difference-of-squares": "g8-1-c1/common-multiplication-formulas",
  "g8-1-c1/polynomial-add-subtract": "g8-1-c1/distributive-evaluate",
  "g8-1-c1/polynomial-multiply": "g8-1-c1/distributive-evaluate",
  "g8-1-c1/polynomial-divide": "g8-1-c1/distributive-evaluate",
  "g8-1-c2/square-root-meaning": "g8-1-c2/sqrt-meaning",
  "g8-1-c2/square-root-simplify": "g8-1-c2/sqrt-finding-technique",
  "g8-1-c2/square-root-arithmetic": "g8-1-c2/sqrt-finding-technique",
  "g8-1-c2/pythagorean-theorem": "g8-1-c2/sqrt-meaning",
  "g8-1-c2/pythagorean-application": "g8-1-c2/sqrt-finding-technique",
  "g8-1-c2/coordinate-distance": "g8-1-c2/sqrt-finding-technique",
  "g8-1-c3/factoring-common": "g8-1-c3/common-factor",
  "g8-1-c3/factoring-formula": "g8-1-c3/factorization-concept",
  "g8-1-c3/factoring-cross": "g8-1-c3/factorization-concept",
  "g8-1-c3/factoring-application": "g8-1-c3/factorization-concept",
  "g8-1-c4/quadratic-factor": "g8-1-c4/quadratic-solution",
  "g8-1-c4/quadratic-completing-square": "g8-1-c4/quadratic-solution",
  "g8-1-c4/quadratic-formula": "g8-1-c4/quadratic-solution",
  "g8-1-c4/quadratic-discriminant": "g8-1-c4/quadratic-solution",
  "g8-1-c4/quadratic-word-problem": "g8-1-c4/quadratic-solution",
  "g8-2-c1/sequence-pattern": "g8-2-c1/sequence-concept",
  "g8-2-c1/arithmetic-sequence-nth": "g8-2-c1/arithmetic-sequence",
  "g8-2-c1/arithmetic-series-sum": "g8-2-c1/arithmetic-sequence",
  "g8-2-c1/geometric-basic": "g8-2-c1/sequence-concept",
  "g8-2-c2/function-definition": "g8-2-c2/function-concept",
  "g8-2-c2/function-value": "g8-2-c2/function-concept",
  "g8-2-c2/linear-function-graph": "g8-2-c2/function-concept",
  "g8-2-c2/linear-function-application": "g8-2-c2/function-concept",
  "g8-2-c3/triangle-congruence": "g8-2-c3/angle-concept",
  "g8-2-c3/triangle-congruence-proof": "g8-2-c3/angle-basic-calculation",
  "g8-2-c3/compass-construction": "g8-2-c3/compass-straightedge",
  "g8-2-c3/triangle-inequality": "g8-2-c3/angle-basic-calculation",
  "g8-2-c4/parallel-angle": "g8-2-c4/parallel-transversal-angles",
  "g8-2-c4/parallel-properties": "g8-2-c4/parallel-lines-concept",
  "g8-2-c4/parallelogram-properties": "g8-2-c4/parallel-lines-concept",
  "g8-2-c4/special-quadrilateral": "g8-2-c4/parallel-lines-concept",
  "g8-2-c4/quadrilateral-area": "g8-2-c4/parallel-lines-concept",
  "g9-1-c1/continued-ratio": "g9-1-c1/continued-ratio-concept",
  "g9-1-c1/continued-ratio-application": "g9-1-c1/continued-ratio-concept",
  "g9-1-c1/similar-triangles": "g9-1-c1/continued-ratio-concept",
  "g9-1-c1/similar-ratio-perimeter": "g9-1-c1/continued-ratio-concept",
  "g9-1-c1/similar-ratio-area": "g9-1-c1/continued-ratio-concept",
  "g9-1-c2/central-inscribed-angle": "g9-1-c2/circle-vocabulary",
  "g9-1-c2/arc-angle": "g9-1-c2/circle-vocabulary",
  "g9-1-c2/arc-length": "g9-1-c2/arc-length-sector",
  "g9-1-c2/sector-area": "g9-1-c2/sector-area-perimeter",
  "g9-1-c2/tangent-properties": "g9-1-c2/circle-vocabulary",
  "g9-2-c1/geometry-proof-basic": "g9-1-c3/proof-concept",
  "g9-2-c1/geometry-proof-steps": "g9-1-c3/geometry-proof-properties",
  "g9-2-c1/circumcenter": "g9-1-c3/geometry-proof-properties",
  "g9-2-c1/incenter": "g9-1-c3/geometry-proof-properties",
  "g9-2-c1/centroid": "g9-1-c3/geometry-proof-properties",
  "g9-2-c3/quadratic-function-graph": "g9-2-c1/quadratic-function-concept",
  "g9-2-c3/quadratic-vertex": "g9-2-c1/quadratic-graph-forms",
  "g9-2-c3/quadratic-max-min": "g9-2-c1/opening-direction",
  "g9-2-c2/quartile-calculation": "g9-2-c2/quartile-concept",
  "g9-2-c2/box-plot": "g9-2-c2/quartile-concept",
  "g9-2-c2/probability-basic": "g9-2-c2/quartile-concept",
  "g9-2-c2/probability-complement": "g9-2-c2/quartile-concept",
  "g9-2-c4/solid-nets": "g9-2-c3/plane-plane",
  "g9-2-c4/solid-views": "g9-2-c3/line-plane",
  "g9-2-c4/prism-surface-area": "g9-2-c3/plane-plane",
  "g9-2-c4/prism-volume": "g9-2-c3/line-plane",
  "g9-2-c4/pyramid-cone-volume": "g9-2-c3/line-line"
};

export function sanitizeSkillLegacyRefs(skills, v1Keys, invalidCollector) {
  return skills.map(s => {
    const refs = (s.legacyRefs || []).map(r => LEGACY_REF_FIXES[r] || r).filter(r => {
      if (v1Keys.has(r)) return true;
      invalidCollector.push({ skillId: s.skillId, ref: r });
      return false;
    });
    return {
      ...s,
      legacyRefs: refs,
      notes: (s.notes && String(s.notes).trim()) || "會考基礎範圍"
    };
  });
}

export function expandSyllabusUnit(unitDef, extraList = []) {
  const topics = unitDef.topics.map(t => ({ ...t, skills: [...t.skills] }));
  const existing = new Set(topics.flatMap(t => t.skills.map(s => s.skillId)));
  const toAdd = extraList.filter(s => !existing.has(s.skillId));
  if (toAdd.length) {
    const last = topics[topics.length - 1];
    last.skills = [...last.skills, ...toAdd];
  }
  return { ...unitDef, topics };
}
