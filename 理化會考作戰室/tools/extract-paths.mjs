import * as mupdf from "mupdf";
import fs from "node:fs";

const [, , pdfPath, pageNum, x0, y0, x1, y1] = process.argv;
const doc = mupdf.Document.openDocument(fs.readFileSync(pdfPath), "application/pdf");
const page = doc.loadPage(Number(pageNum));
const bx0 = Number(x0), by0 = Number(y0), bx1 = Number(x1), by1 = Number(y1);

function inBox(x, y) {
  return x >= bx0 && x <= bx1 && y >= by0 && y <= by1;
}

function tf(ctm, x, y) {
  const [a, b, c, d, e, f] = ctm;
  return [a * x + c * y + e, b * x + d * y + f];
}
function walkPts(path, ctm) {
  const pts = [];
  path.walk({
    moveTo: (x, y) => { const p = tf(ctm, x, y); pts.push(["M", p[0], p[1]]); },
    lineTo: (x, y) => { const p = tf(ctm, x, y); pts.push(["L", p[0], p[1]]); },
    closePath: () => pts.push(["Z"]),
  });
  return pts;
}

const device = new mupdf.Device({
  strokePath(path, stroke, ctm) {
    const pts = walkPts(path, ctm);
    if (pts.some(p => p[0] !== "Z" && inBox(p[1], p[2])))
      console.log("STROKE", JSON.stringify(pts.map(p => p[0] === "Z" ? p : [p[0], Math.round(p[1]*10)/10, Math.round(p[2]*10)/10])));
  },
  fillPath(path, evenOdd, ctm) {
    const pts = walkPts(path, ctm);
    if (pts.some(p => p[0] !== "Z" && inBox(p[1], p[2])))
      console.log("FILL", JSON.stringify(pts.map(p => p[0] === "Z" ? p : [p[0], Math.round(p[1]*10)/10, Math.round(p[2]*10)/10])));
  },
});
page.run(device, mupdf.Matrix.identity);
