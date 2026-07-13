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
    figureId: "fig-u22-tree-conditional",
    specFile: path.join(BASE, "batches", "023-u22-complete", "units", "u22", "s012", "drawing-specs.jsonl"),
    svgFile: path.join(BASE, "batches", "023-u22-complete", "figures", "u22", "fig-u22-tree-conditional.svg"),
    patchSpec(spec) {
      spec.answerLeakageReview = "圖保留題幹已給的分支機率與兩條成功路徑乘積，但不顯示成功總和；學生必須自行相加。";
    },
    replacements: [["<text x=\"610\" y=\"220\" font-size=\"15\">成功總和=1/3</text>", "<text x=\"610\" y=\"220\" font-size=\"15\">成功機率＝兩條成功路徑相加</text>"]]
  },
  {
    figureId: "u21-fig-s002-01",
    specFile: path.join(BASE, "batches", "022-u21-complete", "units", "u21", "s002", "drawing-specs.jsonl"),
    svgFile: path.join(BASE, "batches", "022-u21-complete", "figures", "u21", "u21-fig-s002-01.svg"),
    patchSpec(spec) {
      if (spec.altText.includes("V(2,-3)")) {
        spec.altText = "本圖以高對比線條與文字標籤呈現：拋物線最低點標為 V，垂直虛線 x=2 通過該點，函數式提供垂直位置資訊。";
        spec.figureReview.reviewNote = "人工檢視 u21-fig-s002-01：拋物線最低點 V 與垂直虛線 x=2 的位置一致。已核對曲線方向、對稱軸、文字可讀性與畫布邊界，並移除會直接顯示完整頂點答案的標籤。";
      } else if (!spec.figureReview.reviewNote.includes("移除會直接顯示")) throw new Error("U21 vertex leakage target drift");
    },
    replacements: [
      ["拋物線 y=(x-2)²-3 的最低點標為 V 二負三，虛線 x=2 通過頂點並把曲線分成對稱兩半。", "拋物線的最低點標為 V，虛線 x=2 通過頂點並把曲線分成對稱兩半；圖中函數式提供垂直位置。"],
      [">V(2,-3)</text>", ">V</text>"]
    ]
  },
  {
    figureId: "u17-s009-fig001",
    specFile: path.join(BASE, "batches", "018-u17-complete", "units", "u17", "s009", "drawing-specs.jsonl"),
    svgFile: path.join(BASE, "batches", "018-u17-complete", "figures", "u17", "u17-s009-fig001.svg"),
    patchSpec(spec) {
      const replacement = "平行四邊形 ABCD 畫出兩條連接相對頂點的線段，交於 O，各半段用刻線配對。";
      if (spec.altText.includes("AC與BD")) {
        spec.drawingSpec.description = replacement;
        spec.altText = `${replacement} 圖形不一定按比例。`;
        spec.svgDesc = replacement;
        spec.answerLeakageReview = "圖以連接相對頂點的線段呈現對角線，不在無障礙描述中直接列出待選線段名稱。";
      } else if (!spec.answerLeakageReview.includes("不在無障礙描述")) throw new Error("U17 diagonal leakage target drift");
    },
    replacements: [["平行四邊形ABCD畫出AC與BD，交點O，半段用刻線配對。 圖形不一定按比例，請依標示與題幹條件推理。", "平行四邊形 ABCD 畫出兩條連接相對頂點的線段，交於 O，各半段用刻線配對。圖形不一定按比例，請依標示與題幹條件推理。"]]
  }
];

const repairs = [];
for (const target of targets) {
  const rows = readJsonl(target.specFile);
  const spec = rows.find(row => (row.figureId || row.drawingSpecId) === target.figureId);
  const headSpec = parseJsonl(fromHead(target.specFile)).find(row => (row.figureId || row.drawingSpecId) === target.figureId);
  if (!spec || !headSpec) throw new Error(`${target.figureId}: drawing spec missing`);
  target.patchSpec(spec);
  if ("contentSha256" in spec) spec.contentSha256 = contentSha(spec);
  writeJsonl(target.specFile, rows);
  repairs.push({
    artifactType: "drawing-spec",
    artifactId: target.figureId,
    unitId: spec.unitId,
    skillId: spec.skillId || spec.skillSlot,
    sourcePath: rel(target.specFile),
    beforeSha256: "contentSha256" in headSpec ? contentSha(headSpec) : sha(JSON.stringify(stable(headSpec))),
    afterSha256: spec.contentSha256 || sha(JSON.stringify(stable(spec))),
    changedFields: Object.keys(spec).filter(key => key !== "contentSha256" && JSON.stringify(spec[key]) !== JSON.stringify(headSpec[key])).sort(),
    categories: ["FIGURE_ANSWER_LEAKAGE_FOLLOWUP"],
    reviewer: REVIEWER,
    status: "IMPLEMENTED_PENDING_CENTRAL_ACCEPTANCE"
  });

  const beforeSvg = Buffer.from(fromHead(target.svgFile), "utf8");
  let afterText = fs.readFileSync(target.svgFile, "utf8");
  for (const [from, to] of target.replacements) {
    if (afterText.includes(from)) afterText = afterText.replace(from, to);
    else if (!afterText.includes(to)) throw new Error(`${target.figureId}: SVG target drift: ${from}`);
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
    categories: ["FIGURE_ANSWER_LEAKAGE_FOLLOWUP"],
    reviewer: REVIEWER,
    status: "IMPLEMENTED_PENDING_CENTRAL_ACCEPTANCE"
  });
}

const ledgerFile = path.join(OUT, "repair-ledger.jsonl");
const ledger = readJsonl(ledgerFile);
const retainedLedger = ledger.filter(row => !row.categories?.includes("FIGURE_ANSWER_LEAKAGE_FOLLOWUP"));
const finalLedger = [...retainedLedger, ...repairs];
writeJsonl(ledgerFile, finalLedger);

const summaryFile = path.join(OUT, "repository-review-summary.json");
const summary = JSON.parse(fs.readFileSync(summaryFile, "utf8"));
summary.repairRecords = finalLedger.length;
summary.repairCountsByUnit = {};
for (const row of finalLedger) {
  const unit = summary.repairCountsByUnit[row.unitId] ??= { lecture: 0, mc: 0, cr: 0, drawing: 0, svg: 0, changedFields: 0 };
  const key = row.artifactType === "drawing-spec" ? "drawing" : row.artifactType;
  unit[key] = (unit[key] || 0) + 1;
  unit.changedFields += row.changedFields.length;
}
fs.writeFileSync(summaryFile, `${JSON.stringify(summary, null, 2)}\n`, "utf8");

console.log(JSON.stringify({ status: "FIGURE_ANSWER_LEAKAGE_FOLLOWUP_REPAIRED", repairRecords: repairs.length, figures: targets.map(target => target.figureId) }, null, 2));
