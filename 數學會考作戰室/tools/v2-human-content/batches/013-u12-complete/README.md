# Math V2 Human Content Batch 013 — U12 Complete

This immutable authoring package supplies the complete human-authored Unit U12 **因式分解**.

## Scope

- Locked unit: `u12`
- Locked skills: 10
- Lectures: 10
- Multiple-choice questions: 120 (12 per skill)
- Constructed-response questions: 20 (2 per skill)
- MC semantic reviews: 120
- SVG figures: 3
- Content authority: `CHATGPT_HUMAN_AUTHORED_R1`

All mathematical teaching content was authored and independently reviewed for this package. Existing generated or production U01–U23 lecture/question banks were not read, copied, transformed, repaired, mined, or accepted as evidence.

## Safety boundary

This package is authoring source only. Production activation is forbidden. The old database remains isolated and unchanged. The delivery ZIP contains no `staging/` directory; reviewed staging modules must be emitted only after clean-source verification.

## Validation

From the extracted package root:

```bash
node importer/verify-bundle.mjs
node importer/emit-unit-modules.mjs
node importer/verify-bundle.mjs
```

The emitter creates temporary reviewed serialization under `staging/`. Do not commit or activate it without central coordinator approval.
