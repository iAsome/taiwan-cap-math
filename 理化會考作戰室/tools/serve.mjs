import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const port = 8791;
const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".png": "image/png" };

http.createServer((req, res) => {
  let filePath = path.join(root, req.url === "/" ? "/index.html" : decodeURIComponent(req.url.split("?")[0]));
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end("not found"); return; }
    res.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream" });
    res.end(data);
  });
}).listen(port, () => console.log(`serving on http://localhost:${port}`));
