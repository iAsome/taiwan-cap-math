import assert from "node:assert/strict";
import test from "node:test";
import { repairOfficialSourceMetadata } from "../acquire-official-sources.mjs";

test("official source metadata repair keeps cache paths aligned with filenames", () => {
  const register = {
    files: [{
      filename: "106年國中教育會考各題通過率.pdf",
      cacheRelativePath: "106/106å¹´åä¸­æè²æèåé¡ééç.pdf",
    }],
  };

  assert.equal(repairOfficialSourceMetadata(register), 1);
  assert.equal(register.files[0].cacheRelativePath, "106/106年國中教育會考各題通過率.pdf");
  assert.equal(repairOfficialSourceMetadata(register), 0);
});
