// Checks that every clickable subject card on the root hub page (index.html)
// points to an index.html that actually exists on disk.
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");

const hrefs = [...html.matchAll(/<a class="subject-card" href="([^"]+)"/g)].map(m => m[1]);
assert.ok(hrefs.length > 0, "expected at least one clickable subject card on the hub");

for (const href of hrefs) {
  const target = path.join(root, decodeURIComponent(href));
  assert.ok(fs.existsSync(target), `hub link points to missing file: ${href}`);
}

console.log(`OK: ${hrefs.length} hub links all resolve to existing files.`);
