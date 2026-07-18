import { copyFile, mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const ROOT_FILES = new Set([".nojekyll", "hub-styles.css", "icon.svg", "index.html"]);
const DOWNLOAD_EXTENSIONS = new Set([".aac", ".m4a", ".mp3", ".ogg", ".pdf", ".wav", ".webm"]);
const REQUIRED_ROUTES = [
  "國文會考作戰室", "英文會考作戰室", "數學會考作戰室",
  "生物會考作戰室", "理化會考作戰室", "地科會考作戰室",
  "歷史會考作戰室", "地理會考作戰室", "公民會考作戰室",
  "社會會考作戰室", "自然會考作戰室",
].map((dir) => `${dir}/index.html`);

export const PAGES_MAX_BYTES = 1_000_000_000;

function publishable(relative, directory = false) {
  const parts = relative.split("/");
  if (parts.length === 1) return directory ? parts[0] === "shared" || parts[0].endsWith("會考作戰室") : ROOT_FILES.has(parts[0]);
  if (parts.includes("tools")) return false;
  if (parts[0] === "數學會考作戰室" && parts[1] === "v2") return false;
  if (parts[1] === "r4" && ["audit", "evidence", "results", "source"].includes(parts[2])) return false;
  if (parts.includes("official-data")) return directory || DOWNLOAD_EXTENSIONS.has(path.extname(relative).toLowerCase());
  return true;
}

export async function collectPagesFiles() {
  const files = [];
  async function walk(directory, prefix = "") {
    for (const entry of (await readdir(directory, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name, "en"))) {
      const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
      if (entry.isSymbolicLink()) throw new Error(`Pages input must not contain symlinks: ${relative}`);
      if (!publishable(relative, entry.isDirectory())) continue;
      const absolute = path.join(directory, entry.name);
      if (entry.isDirectory()) await walk(absolute, relative);
      else if (entry.isFile()) files.push({ absolute, relative, bytes: (await stat(absolute)).size });
    }
  }
  await walk(ROOT);
  const paths = new Set(files.map(({ relative }) => relative));
  for (const required of ["index.html", ...REQUIRED_ROUTES]) {
    if (!paths.has(required)) throw new Error(`Pages build is missing required route: ${required}`);
  }
  return { files, bytes: files.reduce((sum, file) => sum + file.bytes, 0) };
}

export async function buildPagesSite(outputDirectory) {
  const output = path.resolve(ROOT, outputDirectory);
  if (output === ROOT || !output.startsWith(`${ROOT}${path.sep}`)) throw new Error("Pages output must be a new directory inside the repository");
  try {
    await stat(output);
    throw new Error(`Pages output already exists: ${output}`);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  const result = await collectPagesFiles();
  if (result.bytes >= PAGES_MAX_BYTES) throw new Error(`Pages artifact is ${(result.bytes / 1_000_000).toFixed(1)} MB; limit is ${PAGES_MAX_BYTES / 1_000_000} MB`);
  let next = 0;
  await Promise.all(Array.from({ length: 16 }, async () => {
    while (next < result.files.length) {
      const file = result.files[next++];
      const target = path.join(output, ...file.relative.split("/"));
      await mkdir(path.dirname(target), { recursive: true });
      await copyFile(file.absolute, target);
    }
  }));
  return result;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = process.argv[2] ? await buildPagesSite(process.argv[2]) : await collectPagesFiles();
  if (result.bytes >= PAGES_MAX_BYTES) throw new Error(`Pages artifact is ${(result.bytes / 1_000_000).toFixed(1)} MB; limit is ${PAGES_MAX_BYTES / 1_000_000} MB`);
  console.log(`pages-site: ${result.files.length} files, ${(result.bytes / 1_000_000).toFixed(1)} MB`);
}
