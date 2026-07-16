import { createHash } from "node:crypto";

export const BIOLOGY_COUNTS = Object.freeze({
  authorityNodes: 80,
  skills: 220,
  lectures: 220,
  skillQuestions: 2640,
  stimuli: 220,
  stimulusQuestions: 660,
});

export const BIOLOGY_DIFFICULTY_DISTRIBUTION = Object.freeze({
  foundation: 3,
  standard: 4,
  advanced: 3,
  transfer: 2,
});

export function canonicalJson(value) {
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(",")}]`;
  if (value && typeof value === "object") {
    const entries = Object.keys(value)
      .sort((a, b) => a.localeCompare(b, "en"))
      .map((key) => `${JSON.stringify(key)}:${canonicalJson(value[key])}`);
    return `{${entries.join(",")}}`;
  }
  return JSON.stringify(value);
}

export function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

export function provenance(authorityRefs) {
  return {
    status: "original",
    authorRole: "Codex R4 Biology content author",
    copyrightStatus: "Original wording and data; official sources used only for scope and assessment calibration.",
    sourceRefs: [...authorityRefs],
  };
}
