import { collectPagesFiles, PAGES_MAX_BYTES } from "./build-pages-site.mjs";

const result = await collectPagesFiles();
const mb = result.bytes / 1_000_000;
if (result.bytes >= PAGES_MAX_BYTES) {
  console.error(`FAIL pages-size: ${mb.toFixed(1)} MB deploy artifact (limit ${PAGES_MAX_BYTES / 1_000_000} MB)`);
  process.exit(1);
}
console.log(`pages-size: ${result.files.length} files, ${mb.toFixed(1)} MB OK (< ${PAGES_MAX_BYTES / 1_000_000} MB)`);
