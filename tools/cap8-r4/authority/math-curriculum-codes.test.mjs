import assert from "node:assert/strict";
import { test } from "node:test";
import {
  MATH_FOURTH_STAGE_CODES,
  MATH_FOURTH_STAGE_CODE_SET,
  verifyMathCurriculumCodeRegister,
} from "./math-curriculum-codes.mjs";

test("math fourth-stage code register is bound to the official PDF", () => {
  const result = verifyMathCurriculumCodeRegister();
  assert.deepEqual(result, {
    sourceSha256: "334bc052dc1812516470dc162c818074e9eca0c20a3d3a02af269dd42394188a",
    pageCount: 83,
    codes: 73,
  });
  assert.equal(MATH_FOURTH_STAGE_CODES.length, 73);
  assert(MATH_FOURTH_STAGE_CODE_SET.has("N-7-3"));
  assert(MATH_FOURTH_STAGE_CODE_SET.has("S-9-13"));
  assert(MATH_FOURTH_STAGE_CODE_SET.has("D-9-3"));
  assert(!MATH_FOURTH_STAGE_CODE_SET.has("Ac-Ⅳ-4"));
});
