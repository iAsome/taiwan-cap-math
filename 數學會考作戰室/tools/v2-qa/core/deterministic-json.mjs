export function stableValue(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(stableValue);
  }
  const sorted = {};
  for (const key of Object.keys(value).sort()) {
    sorted[key] = stableValue(value[key]);
  }
  return sorted;
}

export function stableStringify(value) {
  return JSON.stringify(stableValue(value));
}

export function stableParse(text) {
  return JSON.parse(text);
}
