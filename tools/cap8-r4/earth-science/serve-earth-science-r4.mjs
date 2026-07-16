import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "..");
const port = Number(process.argv[2] ?? 4179);
const types = { ".css": "text/css", ".html": "text/html", ".js": "text/javascript", ".json": "application/json", ".mjs": "text/javascript", ".pdf": "application/pdf", ".svg": "image/svg+xml", ".webmanifest": "application/manifest+json" };

http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    let file = path.resolve(root, `.${pathname}`);
    if (!file.startsWith(`${root}${path.sep}`) && file !== root) throw new Error("outside root");
    if ((await stat(file)).isDirectory()) file = path.join(file, "index.html");
    response.setHeader("Content-Type", `${types[path.extname(file)] ?? "application/octet-stream"}; charset=utf-8`);
    createReadStream(file).on("error", () => response.writeHead(404).end("Not found")).pipe(response);
  } catch {
    response.writeHead(404).end("Not found");
  }
}).listen(port, "127.0.0.1", () => console.log(`Earth Science R4 test server: http://127.0.0.1:${port}/`));
