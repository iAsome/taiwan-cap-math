import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const port = Math.max(1, Math.min(65535, Number(process.argv[2] || process.env.PORT) || 4173));
const appPath = `/${encodeURIComponent("國文會考作戰室")}/`;
const types = { ".css": "text/css; charset=utf-8", ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".pdf": "application/pdf", ".txt": "text/plain; charset=utf-8" };

createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host || "127.0.0.1"}`);
    if (url.pathname === "/") {
      response.writeHead(302, { Location: appPath });
      return response.end();
    }
    const decoded = decodeURIComponent(url.pathname).replace(/^[/\\]+/u, "");
    let file = resolve(root, decoded);
    if (relative(root, file).startsWith("..")) throw new Error("path outside repository");
    const info = await stat(file);
    if (info.isDirectory()) file = join(file, "index.html");
    const fileInfo = await stat(file);
    response.writeHead(200, { "Content-Type": types[extname(file).toLowerCase()] || "application/octet-stream", "Content-Length": fileInfo.size, "Cache-Control": "no-cache" });
    if (request.method === "HEAD") return response.end();
    createReadStream(file).pipe(response);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("找不到檔案");
  }
}).listen(port, "127.0.0.1", () => console.log(`會考國文作戰室：http://127.0.0.1:${port}${appPath}`));
