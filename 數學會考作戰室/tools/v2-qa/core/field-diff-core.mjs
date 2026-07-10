import assert from "node:assert/strict";
import { stableStringify } from "./deterministic-json.mjs";

function hasOwn(record, field) {
  return Object.prototype.hasOwnProperty.call(record, field);
}

export function ordinalCompare(a, b) {
  const sa = String(a);
  const sb = String(b);
  if (sa < sb) {
    return -1;
  }
  if (sa > sb) {
    return 1;
  }
  return 0;
}

export function ordinalSort(values) {
  return [...values].sort(ordinalCompare);
}

export function collectTopLevelFieldDiffs(before, after, idField) {
  const beforeById = new Map(before.map(record => [record[idField], record]));
  const afterById = new Map(after.map(record => [record[idField], record]));
  const ids = new Set([...beforeById.keys(), ...afterById.keys()]);
  const diffs = [];

  for (const entityId of ids) {
    const beforeRecord = beforeById.get(entityId);
    const afterRecord = afterById.get(entityId);
    if (!beforeRecord || !afterRecord) {
      continue;
    }

    const fields = new Set([
      ...Object.keys(beforeRecord),
      ...Object.keys(afterRecord)
    ]);

    for (const field of fields) {
      const beforeValue = beforeRecord[field];
      const afterValue = afterRecord[field];
      if (stableStringify(beforeValue) !== stableStringify(afterValue)) {
        diffs.push({
          [idField]: entityId,
          field,
          before: beforeValue,
          after: afterValue
        });
      }
    }
  }

  return sortDiffs(diffs, idField);
}

export function sortDiffs(diffs, idField) {
  return [...diffs].sort((a, b) => {
    const idCmp = ordinalCompare(a[idField], b[idField]);
    if (idCmp !== 0) {
      return idCmp;
    }
    return ordinalCompare(a.field, b.field);
  });
}

export function assertEntityIdsUnique(records, idField) {
  const seen = new Set();
  for (const record of records) {
    const entityId = record[idField];
    assert.equal(typeof entityId, "string", `${idField} must be a string`);
    assert.ok(entityId.length > 0, `${idField} must be non-empty`);
    assert.ok(!seen.has(entityId), `duplicate ${idField}: ${entityId}`);
    seen.add(entityId);
  }
}

export function assertRecordSequenceUnchanged(before, after, idField) {
  assert.equal(before.length, after.length, "record count changed");
  const beforeIds = before.map(record => record[idField]);
  const afterIds = after.map(record => record[idField]);
  assert.deepEqual([...afterIds], [...beforeIds], "record sequence changed");
}

function findRecord(records, entityId, idField) {
  return records.find(record => record[idField] === entityId);
}

function classifyStructuralChange(diff, before, after, idField) {
  const entityId = diff[idField];
  const beforeRecord = findRecord(before, entityId, idField);
  const afterRecord = findRecord(after, entityId, idField);
  const beforeHas = hasOwn(beforeRecord, diff.field);
  const afterHas = hasOwn(afterRecord, diff.field);
  if (!beforeHas && afterHas) {
    return "added-field";
  }
  if (beforeHas && !afterHas) {
    return "removed-field";
  }
  return "changed-field";
}

function buildSummary({ label, changedRecords, changedFields, diffs, idField }) {
  return {
    label,
    changedRecords: ordinalSort([...changedRecords]),
    changedRecordCount: changedRecords.size,
    changedFields,
    diffs: sortDiffs(diffs, idField)
  };
}

export function assertAuthorizedFieldsDiff(options) {
  const {
    label,
    before,
    after,
    idField,
    entries,
    expected
  } = options;

  assertEntityIdsUnique(before, idField);
  assertEntityIdsUnique(after, idField);
  assertRecordSequenceUnchanged(before, after, idField);

  const diffs = collectTopLevelFieldDiffs(before, after, idField);
  const changedRecords = new Set();
  const unauthorized = [];
  const missing = [];

  for (const diff of diffs) {
    const entityId = diff[idField];
    const structural = classifyStructuralChange(diff, before, after, idField);
    if (structural !== "changed-field") {
      unauthorized.push(`${entityId}.${diff.field}:${structural}`);
      continue;
    }
    if (diff.field === idField) {
      unauthorized.push(`${entityId}.${idField}`);
      continue;
    }
    const allowed = entries[entityId];
    if (allowed?.includes(diff.field)) {
      changedRecords.add(entityId);
    } else {
      unauthorized.push(`${entityId}.${diff.field}`);
    }
  }

  for (const [entityId, fields] of Object.entries(entries)) {
    for (const field of fields) {
      if (field === idField) {
        unauthorized.push(`${entityId}.${idField}`);
        continue;
      }
      const changed = diffs.some(diff => diff[idField] === entityId && diff.field === field);
      if (!changed) {
        missing.push(`${entityId}.${field}`);
      }
    }
  }

  const changedFields = diffs.filter(
    diff => entries[diff[idField]]?.includes(diff.field)
  ).length;

  if (unauthorized.length) {
    assert.fail(`${label}: unauthorized changes: ${ordinalSort(unauthorized).join(", ")}`);
  }
  if (missing.length) {
    assert.fail(`${label}: authorized fields not changed: ${ordinalSort(missing).join(", ")}`);
  }
  if (changedRecords.size !== expected.changedRecords) {
    assert.fail(
      `${label}: changed records ${changedRecords.size} (expected ${expected.changedRecords})`
    );
  }
  if (changedFields !== expected.changedFields) {
    assert.fail(
      `${label}: changed fields ${changedFields} (expected ${expected.changedFields})`
    );
  }

  return buildSummary({ label, changedRecords, changedFields, diffs, idField });
}

function allowedFieldsForRecord(entityId, manifest) {
  const global = manifest.allowedFields ?? [];
  const perRecord = manifest.perRecordAllowedFields?.[entityId] ?? [];
  const patchFields = Object.keys(manifest.entries[entityId] ?? {});
  const combined = new Set([...global, ...perRecord, ...patchFields]);
  return ordinalSort([...combined]);
}

export function assertExactPatchDiff(options) {
  const {
    label,
    before,
    after,
    idField,
    manifest,
    expected
  } = options;

  const entries = manifest.entries;
  const manifestIds = new Set(Object.keys(entries));

  assertEntityIdsUnique(before, idField);
  assertEntityIdsUnique(after, idField);
  assertRecordSequenceUnchanged(before, after, idField);

  const diffs = collectTopLevelFieldDiffs(before, after, idField);
  const changedRecords = new Set();
  const unauthorized = [];
  const missing = [];

  for (const diff of diffs) {
    const entityId = diff[idField];
    const structural = classifyStructuralChange(diff, before, after, idField);
    if (structural !== "changed-field") {
      unauthorized.push(`${entityId}.${diff.field}:${structural}`);
      continue;
    }
    if (diff.field === idField) {
      unauthorized.push(`${entityId}.${idField}`);
      continue;
    }
    if (!manifestIds.has(entityId)) {
      unauthorized.push(`${entityId}.${diff.field}:outside-manifest`);
      continue;
    }

    const patch = entries[entityId];
    const allowed = allowedFieldsForRecord(entityId, manifest);
    if (!allowed.includes(diff.field)) {
      unauthorized.push(`${entityId}.${diff.field}:not-allowed`);
      continue;
    }
    if (!hasOwn(patch, diff.field)) {
      unauthorized.push(`${entityId}.${diff.field}:unexpected`);
      continue;
    }

    const afterRecord = findRecord(after, entityId, idField);
    if (stableStringify(afterRecord[diff.field]) !== stableStringify(patch[diff.field])) {
      unauthorized.push(`${entityId}.${diff.field}:wrong-value`);
      continue;
    }

    changedRecords.add(entityId);
  }

  for (const [entityId, patch] of Object.entries(entries)) {
    for (const field of Object.keys(patch)) {
      const changed = diffs.some(diff => diff[idField] === entityId && diff.field === field);
      if (!changed) {
        missing.push(`${entityId}.${field}`);
      }
    }
  }

  const changedFields = diffs.filter(diff => {
    const entityId = diff[idField];
    const patch = entries[entityId];
    return patch && hasOwn(patch, diff.field);
  }).length;

  if (unauthorized.length) {
    assert.fail(`${label}: unauthorized changes: ${ordinalSort(unauthorized).join(", ")}`);
  }
  if (missing.length) {
    assert.fail(`${label}: manifest fields not changed: ${ordinalSort(missing).join(", ")}`);
  }
  if (changedRecords.size !== expected.changedRecords) {
    assert.fail(
      `${label}: changed records ${changedRecords.size} (expected ${expected.changedRecords})`
    );
  }
  if (changedFields !== expected.changedFields) {
    assert.fail(
      `${label}: changed fields ${changedFields} (expected ${expected.changedFields})`
    );
  }

  return buildSummary({ label, changedRecords, changedFields, diffs, idField });
}

export function assertManifestDiff(options) {
  const { manifest } = options;
  if (manifest.kind === "authorized-fields") {
    return assertAuthorizedFieldsDiff(options);
  }
  if (manifest.kind === "exact-patch") {
    return assertExactPatchDiff(options);
  }
  assert.fail(`unknown manifest kind: ${manifest.kind}`);
}
