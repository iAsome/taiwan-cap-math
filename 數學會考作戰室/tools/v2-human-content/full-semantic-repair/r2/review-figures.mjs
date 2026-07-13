#!/usr/bin/env node
"use strict";

import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { launchBrowser } from "../../semantic-audit-release/r1/tooling/scripts/lib/cdp.mjs";

const ROOT = process.cwd();
const HUMAN = path.join(ROOT, "數學會考作戰室", "tools", "v2-human-content");
const BATCHES = path.join(HUMAN, "batches");
const RUNTIME = path.join(ROOT, "數學會考作戰室", "human-runtime", "figures");
const OUT = path.join(HUMAN, "full-semantic-repair", "r2");
const LEDGER = path.join(OUT, "figure-review-ledger.jsonl");
const REVIEWER = "CODEX_IMPLEMENTATION_R2_PENDING_CENTRAL_REVIEW";
const STATUS = "IMPLEMENTATION_RENDER_REVIEWED_PENDING_CENTRAL_ACCEPTANCE";
const SCREEN_ROOT = path.join(os.tmpdir(), "math-v2-figure-review-r2");
const VIEWPORTS = {
  desktop: { width: 1280, height: 900, mobile: false },
  mobile: { width: 390, height: 844, mobile: true }
};
const LEAKAGE_ADJUDICATIONS = {
  "fig-u22-tree-conditional": "圖中的 1/3 是題幹已給的第一層分支機率；數值副本已移除，學生仍須把兩條成功路徑機率相加。",
  "u15-s006-mc01-fig": "題幹明示 x=−2、y=3，圖用來檢查輸入和輸出如何寫成序對並放到坐標平面；沒有額外標記正確選項。",
  "u21-fig-s001-01": "題目要求從取樣點讀圖，(2,4) 是圖的原始資料點，與其他標示點同等呈現，沒有使用顏色或記號指定答案。"
};

const sha = value => crypto.createHash("sha256").update(value).digest("hex");
const stable = value => Array.isArray(value) ? value.map(stable) : value && typeof value === "object"
  ? Object.fromEntries(Object.keys(value).sort().map(key => [key, stable(value[key])])) : value;
const contentSha = record => {
  const copy = structuredClone(record);
  delete copy.contentSha256;
  return sha(JSON.stringify(stable(copy)));
};
const readJsonl = file => fs.readFileSync(file, "utf8").split(/\r?\n/).filter(Boolean).map(JSON.parse);
const writeJsonl = (file, rows) => fs.writeFileSync(file, `${rows.map(row => JSON.stringify(row)).join("\n")}\n`, "utf8");
const rel = file => path.relative(ROOT, file).split(path.sep).join("/");

function discover() {
  const figures = [];
  const linked = new Map();
  for (const batch of fs.readdirSync(BATCHES).sort((a, b) => a.localeCompare(b, "en"))) {
    const batchRoot = path.join(BATCHES, batch);
    const unitsRoot = path.join(batchRoot, "units");
    if (!fs.existsSync(unitsRoot)) continue;
    for (const unit of fs.readdirSync(unitsRoot).sort()) {
      const unitRoot = path.join(unitsRoot, unit);
      for (const skill of fs.readdirSync(unitRoot).sort()) {
        const skillRoot = path.join(unitRoot, skill);
        if (!fs.statSync(skillRoot).isDirectory()) continue;
        for (const name of ["mc-questions.jsonl", "constructed-response.jsonl"]) {
          const file = path.join(skillRoot, name);
          if (!fs.existsSync(file)) continue;
          for (const row of readJsonl(file)) {
            if (!row.figureId) continue;
            const list = linked.get(row.figureId) || [];
            list.push({
              questionId: row.questionId,
              type: row.type || row.itemType,
              prompt: row.text || row.prompt,
              correctChoice: Array.isArray(row.choices) ? row.choices[row.answerIndex] : null
            });
            linked.set(row.figureId, list);
          }
        }
        const drawingFile = path.join(skillRoot, "drawing-specs.jsonl");
        if (!fs.existsSync(drawingFile)) continue;
        for (const spec of readJsonl(drawingFile)) {
          const figureId = spec.figureId || spec.drawingSpecId;
          const declared = spec.svgPath || spec.sourcePath || `figures/${unit}/${figureId}.svg`;
          const sourceFile = path.join(batchRoot, ...declared.split("/"));
          const runtimeFile = path.join(RUNTIME, `${figureId}.svg`);
          figures.push({ batch, unit, skill, figureId, spec, drawingFile, sourceFile, runtimeFile });
        }
      }
    }
  }
  figures.sort((a, b) => a.figureId.localeCompare(b.figureId, "en"));
  if (figures.length !== 178 || new Set(figures.map(row => row.figureId)).size !== 178) {
    throw new Error(`Expected 178 unique figure records, found ${figures.length}`);
  }
  for (const figure of figures) figure.links = linked.get(figure.figureId) || [];
  return figures;
}

function sourceFacts(svg) {
  const title = svg.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i)?.[1]?.trim() || null;
  const desc = svg.match(/<desc(?:\s[^>]*)?>([\s\S]*?)<\/desc>/i)?.[1]?.trim() || null;
  const viewBox = svg.match(/\bviewBox\s*=\s*["']([^"']+)["']/i)?.[1] || null;
  const textCount = (svg.match(/<text\b/gi) || []).length;
  const graphicCount = (svg.match(/<(?:path|line|polyline|polygon|circle|ellipse|rect)\b/gi) || []).length;
  return { title, desc, viewBox, textCount, graphicCount, hasNotToScaleNote: svg.includes("示意圖不按比例繪製") };
}

async function render(session, svg, viewport, output) {
  await session.send("Emulation.setDeviceMetricsOverride", {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: 1,
    mobile: viewport.mobile,
    screenWidth: viewport.width,
    screenHeight: viewport.height
  });
  const html = `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;background:#fff}main{box-sizing:border-box;width:100%;padding:16px}svg{display:block;width:100%;height:auto;max-width:100%}</style><main>${svg}</main>`;
  const loaded = session.waitFor("Page.loadEventFired", 30000);
  await session.send("Page.navigate", { url: `data:text/html;base64,${Buffer.from(html).toString("base64")}` });
  await loaded;
  const metrics = await session.evaluate(`(() => {
    const svg = document.querySelector('svg');
    if (!svg) return null;
    const rect = svg.getBoundingClientRect();
    const vb = svg.viewBox.baseVal;
    let bbox = null;
    try { const b = svg.getBBox(); bbox = {x:b.x,y:b.y,width:b.width,height:b.height}; } catch {}
    const scale = vb && vb.width ? rect.width / vb.width : 1;
    const fonts = [...svg.querySelectorAll('text')].map(node => parseFloat(getComputedStyle(node).fontSize || '0') * scale).filter(Number.isFinite);
    return {
      rect:{x:rect.x,y:rect.y,width:rect.width,height:rect.height,right:rect.right,bottom:rect.bottom},
      viewBox:vb?{x:vb.x,y:vb.y,width:vb.width,height:vb.height}:null,
      contentBox:bbox,
      minRenderedTextPx:fonts.length?Math.min(...fonts):null,
      textCount:svg.querySelectorAll('text').length,
      graphicCount:svg.querySelectorAll('path,line,polyline,polygon,circle,ellipse,rect').length,
      viewport:{width:innerWidth,height:innerHeight},
      horizontalOverflow:document.documentElement.scrollWidth>innerWidth+1
    };
  })()`);
  if (!metrics || !metrics.viewBox || metrics.rect.width <= 0 || metrics.rect.height <= 0) throw new Error(`Blank render: ${output}`);
  const capture = await session.send("Page.captureScreenshot", { format: "png", fromSurface: true, captureBeyondViewport: false });
  const bytes = Buffer.from(capture.data, "base64");
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, bytes);
  const vb = metrics.viewBox;
  const box = metrics.contentBox;
  const clippedInViewBox = box ? box.x < vb.x - 2 || box.y < vb.y - 2 || box.x + box.width > vb.x + vb.width + 2 || box.y + box.height > vb.y + vb.height + 2 : null;
  return {
    screenshotPath: output,
    screenshotSha256: sha(bytes),
    screenshotBytes: bytes.length,
    ...metrics,
    clippedInViewBox
  };
}

function leakageCandidates(svg, links) {
  const normalized = svg.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  return links.flatMap(link => {
    const answer = String(link.correctChoice || "").trim();
    if (!answer || answer.length < 3 || /^[-+−]?\d+(?:\.\d+)?(?:\s*度|°)?$/.test(answer)) return [];
    return normalized.includes(answer) ? [{ questionId: link.questionId, displayedAnswerText: answer }] : [];
  });
}

async function main() {
  const figures = discover();
  fs.mkdirSync(SCREEN_ROOT, { recursive: true });
  const browser = await launchBrowser();
  const session = await browser.newPage();
  await session.send("Page.enable");
  await session.send("Runtime.enable");
  const rows = [];
  try {
    for (let index = 0; index < figures.length; index++) {
      const figure = figures[index];
      if (!fs.existsSync(figure.sourceFile)) throw new Error(`${figure.figureId}: source SVG missing ${figure.sourceFile}`);
      if (!fs.existsSync(figure.runtimeFile)) throw new Error(`${figure.figureId}: runtime SVG missing ${figure.runtimeFile}`);
      const sourceBytes = fs.readFileSync(figure.sourceFile);
      const runtimeBytes = fs.readFileSync(figure.runtimeFile);
      const sourceSvg = sourceBytes.toString("utf8");
      const runtimeSvg = runtimeBytes.toString("utf8");
      const facts = sourceFacts(sourceSvg);
      if (!facts.title || !facts.desc || !facts.viewBox || (!facts.textCount && !facts.graphicCount)) throw new Error(`${figure.figureId}: incomplete SVG semantics`);
      const renders = { source: {}, runtime: {} };
      for (const [name, viewport] of Object.entries(VIEWPORTS)) {
        renders.source[name] = await render(session, sourceSvg, viewport, path.join(SCREEN_ROOT, figure.figureId, `source-${name}.png`));
        renders.runtime[name] = await render(session, runtimeSvg, viewport, path.join(SCREEN_ROOT, figure.figureId, `runtime-${name}.png`));
      }
      const leakage = leakageCandidates(sourceSvg, figure.links);
      if (leakage.length && !LEAKAGE_ADJUDICATIONS[figure.figureId]) throw new Error(`${figure.figureId}: unadjudicated answer-leakage candidate`);
      if (figure.spec.contentSha256 && figure.spec.contentSha256 !== contentSha(figure.spec)) throw new Error(`${figure.figureId}: stale drawing-spec hash`);
      rows.push({
        figureId: figure.figureId,
        unitId: figure.spec.unitId || figure.unit,
        skillId: figure.spec.skillId,
        sourceDrawingSpecPath: rel(figure.drawingFile),
        sourceSvgPath: rel(figure.sourceFile),
        runtimeSvgPath: rel(figure.runtimeFile),
        sourceSvgSha256: sha(sourceBytes),
        runtimeSvgSha256: sha(runtimeBytes),
        sourceRuntimeByteIdentical: sourceBytes.equals(runtimeBytes),
        runtimeSyncExpectedAfterRebuild: !sourceBytes.equals(runtimeBytes),
        drawingSpecContentSha256: figure.spec.contentSha256 || null,
        drawingSpecHashVerified: figure.spec.contentSha256 ? true : null,
        sourceFacts: facts,
        declaredAltText: figure.spec.altText || null,
        declaredScaleNote: figure.spec.drawingSpec?.scaleNote || null,
        linkedQuestions: figure.links,
        possibleAnswerLeakageCandidates: leakage,
        answerLeakageAdjudication: leakage.length ? LEAKAGE_ADJUDICATIONS[figure.figureId] : null,
        renders,
        reviewer: REVIEWER,
        status: STATUS,
        centralSemanticAcceptanceComplete: false
      });
      if ((index + 1) % 20 === 0 || index + 1 === figures.length) console.log(`figure render ${index + 1}/${figures.length}`);
    }
  } finally {
    session.close();
    await browser.close();
  }
  writeJsonl(LEDGER, rows);
  const mismatch = rows.filter(row => !row.sourceRuntimeByteIdentical).map(row => row.figureId);
  const clipping = rows.flatMap(row => ["source", "runtime"].flatMap(kind => Object.entries(row.renders[kind])
    .filter(([, renderResult]) => renderResult.horizontalOverflow || renderResult.clippedInViewBox)
    .map(([viewport]) => `${row.figureId}:${kind}:${viewport}`)));
  console.log(JSON.stringify({
    status: "FIGURE_RENDER_REVIEW_COMPLETE_PENDING_CENTRAL_ACCEPTANCE",
    figures: rows.length,
    sourceRuntimeMismatchCount: mismatch.length,
    sourceRuntimeMismatches: mismatch,
    clippingCandidateCount: clipping.length,
    clippingCandidates: clipping,
    screenshotRoot: SCREEN_ROOT,
    browser: browser.browserVersion
  }, null, 2));
}

await main();
