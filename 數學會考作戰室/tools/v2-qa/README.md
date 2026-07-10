# math-v2 shared QA foundation

Phase-1 isolated foundation for configuration-driven unit QA.

## Scope (foundation-only)

- Unit config schema and U09 snapshot config
- Hash lock read/validate (no writing)
- Generic field-diff core (`authorized-fields`, `exact-patch`)
- Question and lecture diff checker libraries
- Manifest lint

## Not in this phase

- Legacy checker wrappers
- Release-gate runner
- Review-pack generation
- Manifest migration from unit-specific files
- U08/U10 configs

See `PROJECT_EXECUTION_CONTRACT.md` at repository root.
