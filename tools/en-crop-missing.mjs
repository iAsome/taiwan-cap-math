// Batch-crop PNG diagrams for English reading archive gap questions (106–115).
import * as mupdf from "mupdf";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const enDir = path.join(root, "英文會考作戰室", "official-data");

/** page = 0-based PDF page index; coords in PDF points at render zoom Z=4 */
const CROPS = [
  // 106
  { y: "106", f: "q1.png", p: 1, x0: 380, y0: 125, x1: 575, y1: 235 },
  { y: "106", f: "q18-calendar.png", p: 3, x0: 55, y0: 520, x1: 320, y1: 680 },
  { y: "106", f: "q30.png", p: 9, x0: 40, y0: 55, x1: 555, y1: 520 },
  // 107
  { y: "107", f: "q1.png", p: 1, x0: 380, y0: 125, x1: 575, y1: 235 },
  { y: "107", f: "q31.png", p: 10, x0: 40, y0: 55, x1: 555, y1: 420 },
  // 108
  { y: "108", f: "q1.png", p: 1, x0: 380, y0: 125, x1: 575, y1: 235 },
  { y: "108", f: "q31-chart.png", p: 10, x0: 40, y0: 380, x1: 555, y1: 620 },
  { y: "108", f: "q35.png", p: 11, x0: 40, y0: 55, x1: 555, y1: 420 },
  // 109
  { y: "109", f: "q1.png", p: 1, x0: 380, y0: 125, x1: 575, y1: 235 },
  { y: "109", f: "q22.png", p: 6, x0: 40, y0: 55, x1: 555, y1: 380 },
  // 110
  { y: "110", f: "q1.png", p: 1, x0: 380, y0: 125, x1: 575, y1: 235 },
  { y: "110", f: "q17.png", p: 4, x0: 40, y0: 55, x1: 555, y1: 280 },
  { y: "110", f: "q20.png", p: 5, x0: 40, y0: 55, x1: 555, y1: 280 },
  // 111
  { y: "111", f: "q1.png", p: 1, x0: 380, y0: 125, x1: 575, y1: 235 },
  { y: "111", f: "q21-ad.png", p: 4, x0: 40, y0: 55, x1: 555, y1: 320 },
  { y: "111", f: "q22-postcard.png", p: 4, x0: 40, y0: 320, x1: 555, y1: 520 },
  { y: "111", f: "q23-infographic.png", p: 5, x0: 40, y0: 55, x1: 555, y1: 420 },
  { y: "111", f: "q24-infographic.png", p: 5, x0: 40, y0: 420, x1: 555, y1: 780 },
  { y: "111", f: "q32-charts.png", p: 10, x0: 40, y0: 55, x1: 555, y1: 420 },
  { y: "111", f: "q33-maps.png", p: 10, x0: 40, y0: 420, x1: 555, y1: 780 },
  { y: "111", f: "q39-map.png", p: 12, x0: 40, y0: 55, x1: 555, y1: 420 },
  { y: "111", f: "q41-table.png", p: 13, x0: 40, y0: 55, x1: 555, y1: 280 },
  // 112
  { y: "112", f: "q1.png", p: 1, x0: 380, y0: 125, x1: 575, y1: 235 },
  { y: "112", f: "q24-menu.png", p: 4, x0: 40, y0: 55, x1: 555, y1: 320 },
  { y: "112", f: "q25-calendar.png", p: 4, x0: 40, y0: 320, x1: 555, y1: 520 },
  { y: "112", f: "q26-27-birds.png", p: 5, x0: 40, y0: 55, x1: 555, y1: 420 },
  { y: "112", f: "q28-29-waste.png", p: 6, x0: 40, y0: 55, x1: 555, y1: 420 },
  // 113
  { y: "113", f: "q1.png", p: 1, x0: 380, y0: 125, x1: 575, y1: 235 },
  { y: "113", f: "q24-25-bakery.png", p: 5, x0: 40, y0: 55, x1: 555, y1: 420 },
  { y: "113", f: "q26-27-map.png", p: 6, x0: 40, y0: 55, x1: 555, y1: 420 },
  { y: "113", f: "q41-chart.png", p: 12, x0: 40, y0: 55, x1: 555, y1: 420 },
  // 114
  { y: "114", f: "q1.png", p: 1, x0: 380, y0: 125, x1: 575, y1: 235 },
  { y: "114", f: "q22-23-chat.png", p: 4, x0: 40, y0: 55, x1: 555, y1: 520 },
  { y: "114", f: "q25-map.png", p: 5, x0: 40, y0: 280, x1: 555, y1: 620 },
  // 115
  { y: "115", f: "q1.png", p: 1, x0: 380, y0: 125, x1: 575, y1: 235 },
  { y: "115", f: "q20-21-recipe.png", p: 4, x0: 40, y0: 55, x1: 555, y1: 420 },
  { y: "115", f: "q26-map.png", p: 7, x0: 40, y0: 55, x1: 555, y1: 420 },
];

const Z = 4, S = 2;
for (const { y, f, p, x0, y0, x1, y1 } of CROPS) {
  const dir = path.join(enDir, y);
  const pdf = path.join(dir, `${y}-exam.pdf`);
  const out = path.join(dir, f);
  const doc = mupdf.Document.openDocument(fs.readFileSync(pdf), "application/pdf");
  const page = doc.loadPage(p);
  const matrix = mupdf.Matrix.scale(Z, Z);
  const full = page.toPixmap(matrix, mupdf.ColorSpace.DeviceRGB, false, true);
  const X0 = x0 * Z, Y0 = y0 * Z, X1 = x1 * Z, Y1 = y1 * Z;
  const outW = Math.round((X1 - X0) * S), outH = Math.round((Y1 - Y0) * S);
  const cropped = full.warp([[X0, Y0], [X1, Y0], [X1, Y1], [X0, Y1]], outW, outH);
  fs.writeFileSync(out, cropped.asPNG());
  console.log(y, f);
}
console.log(`cropped ${CROPS.length} PNGs`);
