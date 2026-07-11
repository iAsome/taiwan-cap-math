import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import policy from "./math-tw-v1.mjs";

export function stableValue(value) {
  if (value === null || typeof value !== "object") return value;
  if (Array.isArray(value)) return value.map(stableValue);
  return Object.fromEntries(Object.keys(value).sort().map(key => [key, stableValue(value[key])]));
}

export function stableSerialize(value) {
  return JSON.stringify(stableValue(value));
}

export function hashPolicy({ documentBytes, publicPolicy = policy } = {}) {
  const bytes = documentBytes ?? readFileSync(path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../../../", publicPolicy.documentPath));
  return createHash("sha256").update(bytes).update("\0").update(stableSerialize(publicPolicy)).digest("hex");
}
