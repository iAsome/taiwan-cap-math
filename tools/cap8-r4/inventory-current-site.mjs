import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const OUTPUT_ROOT = path.join(HERE, "evidence", "migration");
const ROOTS = [
  ["english", "英文會考作戰室"],
  ["chinese", "國文會考作戰室"],
  ["geography", "地理會考作戰室"],
  ["history", "歷史會考作戰室"],
  ["civics", "公民會考作戰室"],
  ["biology", "生物會考作戰室"],
  ["physics_chemistry", "理化會考作戰室"],
  ["earth_science", "地科會考作戰室"],
  ["integrated_social_evidence", "shared/social-official-data"],
];

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

async function walk(root, current = root) {
  const files = [];
  for (const entry of (await readdir(current, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name, "en"))) {
    const absolute = path.join(current, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(root, absolute)));
    else if (entry.isFile()) files.push(absolute);
  }
  return files;
}

export function classifyCurrentSitePath(relative) {
  const normalized = relative.replaceAll("\\", "/");
  const basename = path.posix.basename(normalized).toLowerCase();
  if (normalized.includes("/r4/")) {
    return { decision: "KEEP", reason: "R4 authoring artifact; production use still requires a complete manifest and final audit" };
  }
  if (normalized.includes("/official-data/") || normalized.startsWith("shared/social-official-data/")) {
    return { decision: "KEEP", reason: "official evidence is retained but must be re-audited before production use" };
  }
  if (/\/(?:tmp|temp|debug|scratch|backup)(?:\/|[-_.])/i.test(`/${normalized}`) || /(?:^|[-_.])(draft|tmp|debug)(?:[-_.]|$)/i.test(basename)) {
    return { decision: "REMOVE", reason: "temporary or draft artifact; deletion requires a later reviewed cleanup" };
  }
  if (normalized.includes("/tools/") || basename === "analysis-data.js" || basename.includes("gap-report") || basename.includes("audit")) {
    return { decision: "LEGACY-ISOLATE", reason: "legacy tooling or derived analysis is migration evidence, not R4 authority" };
  }
  if (normalized.includes("/quiz-banks/") || /^(questions|quiz-taxonomy|quiz-variant-bank|quiz-variants|lecture-taxonomy|reading-bank|vocab-quiz-data)\.js$/i.test(basename)) {
    return { decision: "REPLACE", reason: "procedural or metadata-only assessment source cannot serve R4 static reviewed items" };
  }
  if (/^(data|english-data|geography-data|history-data|civics-data|earth-data)\.js$/i.test(basename)) {
    return { decision: "REPLACE", reason: "legacy lecture/content source requires complete R4 authority mapping and semantic review" };
  }
  if (["index.html", "app.js", "styles.css", "readme.md"].includes(basename)) {
    return { decision: "REPAIR", reason: "reuse the static shell only after R4 runtime, migration, accessibility, and UX integration" };
  }
  if (/\.(?:ico|svg|png|jpg|jpeg|webp|woff2?)$/i.test(basename)) {
    return { decision: "KEEP", reason: "candidate static asset; production use still requires license and accessibility review" };
  }
  return { decision: "LEGACY-ISOLATE", reason: "unclassified legacy artifact is retained outside the trusted R4 runtime" };
}

export async function inventoryCurrentSite() {
  const records = [];
  for (const [subject, rootRelative] of ROOTS) {
    const root = path.join(REPO_ROOT, ...rootRelative.split("/"));
    for (const absolute of await walk(root)) {
      const bytes = await readFile(absolute);
      const repositoryPath = path.relative(REPO_ROOT, absolute).replaceAll("\\", "/");
      records.push({
        subject,
        path: repositoryPath,
        bytes: bytes.length,
        sha256: sha256(bytes),
        ...classifyCurrentSitePath(repositoryPath),
      });
    }
  }
  records.sort((a, b) => a.path.localeCompare(b.path, "en"));
  const counts = Object.fromEntries(
    ["KEEP", "REPAIR", "REPLACE", "LEGACY-ISOLATE", "REMOVE"].map((decision) => [
      decision,
      records.filter((record) => record.decision === decision).length,
    ]),
  );
  return {
    schemaVersion: "cap8-r4-current-site-inventory-v1",
    baselineCommit: "d3a0b432a5b659528d357cb5a24b561f10ac5980",
    classificationIsReleaseAuthority: false,
    deletePerformed: false,
    counts,
    records,
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const inventory = await inventoryCurrentSite();
  await mkdir(OUTPUT_ROOT, { recursive: true });
  const output = path.join(OUTPUT_ROOT, "current-site-inventory.json");
  await writeFile(output, `${JSON.stringify(inventory, null, 2)}\n`, "utf8");
  console.log(`inventory-current-site: OK — ${inventory.records.length} files`);
  console.log(JSON.stringify(inventory.counts));
}
