import assert from "node:assert/strict";
import { mergeEvidenceBundles } from "../build-global-final-audit-evidence.mjs";

const bundles = [
  {
    audits: [{ artifactId: "A" }],
    corpus: Buffer.from("abc", "utf8"),
    ranges: [{ artifactId: "A", startByte: 0, endByte: 3 }],
  },
  {
    audits: [{ artifactId: "B" }],
    corpus: Buffer.from("de", "utf8"),
    ranges: [{ artifactId: "B", startByte: 0, endByte: 2 }],
  },
];

const merged = mergeEvidenceBundles(bundles);
assert.deepEqual(merged.audits.map(({ artifactId }) => artifactId), ["A", "B"]);
assert.equal(merged.corpus.toString("utf8"), "abcde");
assert.deepEqual(
  merged.ranges.map(({ artifactId, startByte, endByte }) => ({ artifactId, startByte, endByte })),
  [
    { artifactId: "A", startByte: 0, endByte: 3 },
    { artifactId: "B", startByte: 3, endByte: 5 },
  ],
);

console.log("build-global-final-audit-evidence.test: OK");
