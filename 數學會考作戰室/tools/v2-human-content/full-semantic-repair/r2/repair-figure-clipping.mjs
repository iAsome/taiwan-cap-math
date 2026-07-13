#!/usr/bin/env node
"use strict";

import crypto from "node:crypto";
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
const readJsonl = file => fs.readFileSync(file, "utf8").split(/\r?\n/).filter(Boolean).map(JSON.parse);
const writeJsonl = (file, rows) => fs.writeFileSync(file, `${rows.map(row => JSON.stringify(row)).join("\n")}\n`, "utf8");
const rel = file => path.relative(ROOT, file).split(path.sep).join("/");

const targets = [
  {
    figureId: "u15-s010-mc07-fig",
    specFile: path.join(BASE, "batches", "016-u15-complete", "units", "u15", "s010", "drawing-specs.jsonl"),
    svgFile: path.join(BASE, "batches", "016-u15-complete", "figures", "u15", "u15-s010-mc07-fig.svg"),
    patchSpec(spec) {
      const geometry = spec.drawingSpec.exactSvgGeometry.find(item => item.id === "u15-s010-mc07-fig-obj-1");
      if (!geometry || geometry.attributes.x2 !== "580.0" || geometry.attributes.y2 !== "-56.0") throw new Error("U15 clipping spec target drift");
      geometry.attributes.x2 = "455.0";
      geometry.attributes.y2 = "40.0";
    },
    patchSvg(svg) {
      const before = '<line id="u15-s010-mc07-fig-obj-1" x1="80.0" y1="328.0" x2="580.0" y2="-56.0"';
      if (!svg.includes(before)) throw new Error("U15 clipping SVG target drift");
      return svg.replace(before, '<line id="u15-s010-mc07-fig-obj-1" x1="80.0" y1="328.0" x2="455.0" y2="40.0"');
    }
  },
  {
    figureId: "u23-s019-fig001",
    specFile: path.join(BASE, "batches", "024-u23-complete", "units", "u23", "s019", "drawing-specs.jsonl"),
    svgFile: path.join(BASE, "batches", "024-u23-complete", "figures", "u23", "u23-s019-fig001.svg"),
    patchSpec(spec) {
      if (spec.canvas.width !== 520 || spec.canvas.viewBox !== "0 0 520 320") throw new Error("U23 clipping spec target drift");
      spec.canvas.width = 600;
      spec.canvas.viewBox = "0 0 600 320";
    },
    patchSvg(svg) {
      const before = '<svg xmlns="http://www.w3.org/2000/svg" width="520" height="320" viewBox="0 0 520 320"';
      if (!svg.includes(before)) throw new Error("U23 clipping SVG target drift");
      return svg.replace(before, '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="320" viewBox="0 0 600 320"');
    }
  }
];

const repairs = [];
for (const target of targets) {
  const rows = readJsonl(target.specFile);
  const spec = rows.find(row => (row.figureId || row.drawingSpecId) === target.figureId);
  if (!spec) throw new Error(`${target.figureId}: drawing spec missing`);
  const beforeSpec = structuredClone(spec);
  target.patchSpec(spec);
  spec.contentSha256 = contentSha(spec);
  writeJsonl(target.specFile, rows);
  repairs.push({
    artifactType: "drawing-spec",
    artifactId: target.figureId,
    unitId: spec.unitId,
    skillId: spec.skillId || spec.skillSlot,
    sourcePath: rel(target.specFile),
    beforeSha256: contentSha(beforeSpec),
    afterSha256: spec.contentSha256,
    changedFields: ["canvas", "drawingSpec"].filter(field => JSON.stringify(beforeSpec[field]) !== JSON.stringify(spec[field])),
    categories: ["FIGURE_CLIPPING_REPAIR"],
    reviewer: REVIEWER,
    status: "IMPLEMENTED_PENDING_CENTRAL_ACCEPTANCE"
  });

  const beforeSvg = fs.readFileSync(target.svgFile);
  const afterText = target.patchSvg(beforeSvg.toString("utf8"));
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
    changedFields: ["svgGeometry"],
    categories: ["FIGURE_CLIPPING_REPAIR"],
    reviewer: REVIEWER,
    status: "IMPLEMENTED_PENDING_CENTRAL_ACCEPTANCE"
  });
}

const ledgerFile = path.join(OUT, "repair-ledger.jsonl");
const ledger = readJsonl(ledgerFile);
if (ledger.some(row => row.categories?.includes("FIGURE_CLIPPING_REPAIR"))) throw new Error("Figure clipping repairs already recorded");
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

console.log(JSON.stringify({ status: "FIGURE_CLIPPING_REPAIRED", repairRecords: repairs.length, figures: targets.map(target => target.figureId) }, null, 2));
