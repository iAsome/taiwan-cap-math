#!/usr/bin/env node
"use strict";

import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BASE = path.join(ROOT, "數學會考作戰室", "tools", "v2-human-content");
const OUT = path.join(BASE, "full-semantic-repair", "r2");
const REVIEWER = "CODEX_IMPLEMENTATION_R2_PENDING_CENTRAL_REVIEW";
const stable = value => Array.isArray(value) ? value.map(stable) : value && typeof value === "object"
  ? Object.fromEntries(Object.keys(value).sort().map(key => [key, stable(value[key])])) : value;
const sha = value => crypto.createHash("sha256").update(value).digest("hex");
const contentSha = record => {
  const copy = structuredClone(record);
  delete copy.contentSha256;
  return sha(JSON.stringify(stable(copy)));
};
const parseJsonl = text => text.split(/\r?\n/).filter(Boolean).map(JSON.parse);
const readJsonl = file => parseJsonl(fs.readFileSync(file, "utf8"));
const writeJsonl = (file, rows) => fs.writeFileSync(file, `${rows.map(row => JSON.stringify(row)).join("\n")}\n`, "utf8");
const rel = file => path.relative(ROOT, file).split(path.sep).join("/");
const fromHead = file => execFileSync("git", ["show", `HEAD:${rel(file)}`], { cwd: ROOT, encoding: "utf8" });

const targets = [
  {
    figureId: "fig-u22-ogive",
    specFile: path.join(BASE, "batches", "023-u22-complete", "units", "u22", "s007", "drawing-specs.jsonl"),
    svgFile: path.join(BASE, "batches", "023-u22-complete", "figures", "u22", "fig-u22-ogive.svg"),
    patchSpec(spec) {
      const old = "支援由相鄰累積次數求大於70且不超過80分的12人並定位百分位。";
      const replacement = "支援由相鄰累積次數判讀指定分數區間人數並定位百分位。";
      if (spec.drawingPurpose === old && spec.svgTitle === old) {
        spec.drawingPurpose = replacement;
        spec.svgTitle = replacement;
      } else if (spec.drawingPurpose !== replacement || spec.svgTitle !== replacement) throw new Error("U22 ogive leakage target drift");
    },
    replacements: [["支援由相鄰累積次數求大於70且不超過80分的12人並定位百分位。", "支援由相鄰累積次數判讀指定分數區間人數並定位百分位。"]]
  },
  {
    figureId: "u21-fig-s004-01",
    specFile: path.join(BASE, "batches", "022-u21-complete", "units", "u21", "s004", "drawing-specs.jsonl"),
    svgFile: path.join(BASE, "batches", "022-u21-complete", "figures", "u21", "u21-fig-s004-01.svg"),
    patchSpec(spec) {
      if (spec.altText.includes("y=x²-1")) {
        spec.altText = "本圖以高對比線條與文字標籤呈現：左側函數值表與右側五點和平滑拋物線一一對應。";
        spec.figureReview.reviewNote = "人工檢視 u21-fig-s004-01：左側函數值表與右側五點和平滑拋物線一一對應。已核對曲線方向、標記坐標、虛實線語意、文字可讀性與畫布邊界，並移除會直接透露待選方程式的標籤。";
      } else if (!spec.figureReview.reviewNote.includes("移除會直接透露")) throw new Error("U21 equation leakage target drift");
    },
    replacements: [
      ["左側表格列出 y=x²-1 在負二至二的數值，右側座標圖標出五點並以平滑拋物線連接。", "左側表格列出輸入負二至二時的函數值，右側座標圖標出對應五點並以平滑拋物線連接。"],
      ["<text x=\"30\" y=\"35\" font-size=\"20\">y=x²-1</text>", "<text x=\"30\" y=\"35\" font-size=\"20\">函數值表</text>"]
    ]
  },
  {
    figureId: "u23-s004-fig001",
    specFile: path.join(BASE, "batches", "024-u23-complete", "units", "u23", "s004", "drawing-specs.jsonl"),
    svgFile: path.join(BASE, "batches", "024-u23-complete", "figures", "u23", "u23-s004-fig001.svg"),
    patchSpec(spec) {
      if (spec.purpose === "六角柱結構示意") {
        spec.purpose = "角柱結構示意";
        spec.altText = "上下兩個全等且平行的多邊形，對應頂點由側稜連接；須依題幹的總稜數判斷底面。";
        spec.svgTitle = "角柱結構示意";
        spec.svgDescription = spec.altText;
        spec.answerLeakageReview = "無障礙標題與描述不直接命名底面形狀；作答仍須使用題幹的稜數關係。";
      } else if (spec.purpose !== "角柱結構示意") throw new Error("U23 prism leakage target drift");
    },
    replacements: [
      ["六角柱的結構", "角柱的結構"],
      ["上下兩個全等平行六邊形以六條側稜連接，用來觀察六角柱的面、稜與頂點。", "上下兩個全等且平行的多邊形以對應側稜連接，可由題幹總稜數關係判斷底面。"]
    ]
  },
  {
    figureId: "u23-s006-fig001",
    specFile: path.join(BASE, "batches", "024-u23-complete", "units", "u23", "s006", "drawing-specs.jsonl"),
    svgFile: path.join(BASE, "batches", "024-u23-complete", "figures", "u23", "u23-s006-fig001.svg"),
    patchSpec(spec) {
      if (spec.altText.includes("長方形")) {
        spec.altText = "直圓柱沿一條母線剪開並將側面攤平；上下邊對應底面圓周，左右邊對應圓柱高。";
        spec.svgDescription = spec.altText;
        spec.answerLeakageReview = "圖以邊與圓周、高的對應關係呈現展開結果，不再以文字直接寫出待選形狀名稱。";
      } else if (!spec.answerLeakageReview.includes("不再以文字")) throw new Error("U23 cylinder leakage target drift");
    },
    replacements: [
      ["左側為直圓柱，沿一條母線剪開後，右側側面攤平成長方形。", "左側為直圓柱，沿一條母線剪開後，右側呈現攤平的側面邊界。"],
      ["側面展開為長方形", "沿母線剪開後的側面"]
    ]
  }
];

const repairs = [];
for (const target of targets) {
  const rows = readJsonl(target.specFile);
  const spec = rows.find(row => (row.figureId || row.drawingSpecId) === target.figureId);
  if (!spec) throw new Error(`${target.figureId}: drawing spec missing`);
  const headSpec = parseJsonl(fromHead(target.specFile)).find(row => (row.figureId || row.drawingSpecId) === target.figureId);
  if (!headSpec) throw new Error(`${target.figureId}: HEAD drawing spec missing`);
  const beforeSpec = structuredClone(headSpec);
  target.patchSpec(spec);
  if ("contentSha256" in spec) spec.contentSha256 = contentSha(spec);
  writeJsonl(target.specFile, rows);
  repairs.push({
    artifactType: "drawing-spec",
    artifactId: target.figureId,
    unitId: spec.unitId,
    skillId: spec.skillId || spec.skillSlot,
    sourcePath: rel(target.specFile),
    beforeSha256: "contentSha256" in beforeSpec ? contentSha(beforeSpec) : sha(JSON.stringify(stable(beforeSpec))),
    afterSha256: spec.contentSha256 || sha(JSON.stringify(stable(spec))),
    changedFields: Object.keys(spec).filter(key => key !== "contentSha256" && JSON.stringify(spec[key]) !== JSON.stringify(beforeSpec[key])).sort(),
    categories: ["FIGURE_ANSWER_LEAKAGE_REPAIR"],
    reviewer: REVIEWER,
    status: "IMPLEMENTED_PENDING_CENTRAL_ACCEPTANCE"
  });

  const beforeSvg = Buffer.from(fromHead(target.svgFile), "utf8");
  let afterText = fs.readFileSync(target.svgFile, "utf8");
  for (const [from, to] of target.replacements) {
    if (afterText.includes(from)) afterText = afterText.replace(from, to);
    else if (!afterText.includes(to)) throw new Error(`${target.figureId}: SVG leakage target drift: ${from}`);
  }
  fs.writeFileSync(target.svgFile, afterText, "utf8");
  const afterSvg = fs.readFileSync(target.svgFile);
  repairs.push({
    artifactType: "svg",
    artifactId: target.figureId,
    unitId: spec.unitId,
    skillId: spec.skillId || spec.skillSlot,
    sourcePath: rel(target.svgFile),
    beforeSha256: sha(beforeSvg),
    afterSha256: sha(afterSvg),
    changedFields: ["accessibleText", "visibleLabels"],
    categories: ["FIGURE_ANSWER_LEAKAGE_REPAIR"],
    reviewer: REVIEWER,
    status: "IMPLEMENTED_PENDING_CENTRAL_ACCEPTANCE"
  });
}

const ledgerFile = path.join(OUT, "repair-ledger.jsonl");
const ledger = readJsonl(ledgerFile);
if (ledger.some(row => row.categories?.includes("FIGURE_ANSWER_LEAKAGE_REPAIR"))) throw new Error("Figure answer-leakage repairs already recorded");
writeJsonl(ledgerFile, [...ledger, ...repairs]);

const summaryFile = path.join(OUT, "repository-review-summary.json");
const summary = JSON.parse(fs.readFileSync(summaryFile, "utf8"));
summary.repairRecords += repairs.length;
for (const row of repairs) {
  const unit = summary.repairCountsByUnit[row.unitId] ??= { lecture: 0, mc: 0, cr: 0, drawing: 0, svg: 0, changedFields: 0 };
  unit[row.artifactType === "drawing-spec" ? "drawing" : "svg"] = (unit[row.artifactType === "drawing-spec" ? "drawing" : "svg"] || 0) + 1;
  unit.changedFields += row.changedFields.length;
}
fs.writeFileSync(summaryFile, `${JSON.stringify(summary, null, 2)}\n`, "utf8");

console.log(JSON.stringify({ status: "FIGURE_ANSWER_LEAKAGE_REPAIRED", repairRecords: repairs.length, figures: targets.map(target => target.figureId) }, null, 2));
