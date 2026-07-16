# CAP8 R4 math authoring ledgers

Each JSON file under `uXX/` is a bounded, human-authored repair fragment for one or more complete skill slots. A record must include its current `expectedContentSha256`; application stops on drift. Generic padding and generated prose are forbidden.

Supported top-level arrays are `mc`, `constructedResponse`, `lectures`, `drawingSpecs`, and `textFiles`. Content records accept:

- `set`: explicit top-level field replacements;
- `replaceText`: explicit terminology or notation replacements applied to every text field in that named record;
- `appendText`: explicit, question-specific prose appended to an existing text field;
- `appendArray`: explicit entries appended to an existing array;
- `optionReasons`: explicit replacement reasons keyed by zero-based choice index;
- `reviewSet` / `reviewReplaceText` on MC records: matching semantic-review field or terminology corrections.

Example shape:

```json
{
  "schemaVersion": "cap8-r4-math-authoring-ledger-r1",
  "unitId": "u01",
  "batch": "002-u01-complete",
  "skills": ["s001"],
  "mc": [
    {
      "questionId": "u01-s001-v001",
      "expectedContentSha256": "...",
      "set": {
        "explanation": "A complete, item-specific derivation.",
        "steps": ["First authored step.", "Second authored step.", "Third authored check."],
        "commonMistake": "A plausible error specific to this item."
      }
    }
  ],
  "constructedResponse": [],
  "lectures": [],
  "drawingSpecs": [],
  "textFiles": []
}
```

Apply all completed fragments for one unit, then verify its immutable source package and emitted modules:

```text
node apply-authoring-ledgers.mjs --unit u01
node verify-authoring-batch.mjs --unit u01
```

After a unit has already been applied, select a later correction by its unit-relative path so same-named ledgers in other units cannot be selected accidentally:

```text
node apply-authoring-ledgers.mjs --ledger u01/zzz-source-gate-corrections.json
```
