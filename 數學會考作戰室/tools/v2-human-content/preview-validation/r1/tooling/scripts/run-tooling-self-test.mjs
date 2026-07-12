import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { assert, sha256 } from "./lib/common.mjs";

const tooling = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const app = fs.readFileSync(path.join(tooling, "payload/human-preview/app.mjs"), "utf8");
const styles = fs.readFileSync(path.join(tooling, "payload/human-preview/styles.css"), "utf8");
const requiredAppMarkers = [
  "renderMc(question, index + 1)",
  "renderCr(question, index + 1)",
  "前置知識",
  "名詞與符號",
  "正式定義",
  "公式與條件",
  "不適用情況",
  "評分注意事項",
  "HUMAN_PREVIEW_CONFIG.storagePrefix",
  "__HUMAN_PREVIEW_R1__"
];
const missingAppMarkers = requiredAppMarkers.filter(marker => !app.includes(marker));
const requiredStyleMarkers = [":focus-visible", ".table-wrap", "overflow:auto", "prefers-reduced-motion"];
const missingStyleMarkers = requiredStyleMarkers.filter(marker => !styles.includes(marker));
assert(missingAppMarkers.length === 0, `Missing app markers: ${missingAppMarkers.join(", ")}`);
assert(missingStyleMarkers.length === 0, `Missing style markers: ${missingStyleMarkers.join(", ")}`);
assert(!app.includes("productionActivationAllowed: true"), "Payload must not enable production");
assert(!app.includes("localStorage.clear("), "Payload must not clear shared storage");
const result = {
  status: "PASS_TOOLING_SELF_TEST",
  payloadAppSha256: sha256(Buffer.from(app)),
  payloadStylesSha256: sha256(Buffer.from(styles)),
  requiredAppMarkerCount: requiredAppMarkers.length,
  requiredStyleMarkerCount: requiredStyleMarkers.length,
  issues: [],
  productionActivationAllowed: false,
  oldDatabaseDeletionAllowed: false
};
console.log(JSON.stringify(result, null, 2));
