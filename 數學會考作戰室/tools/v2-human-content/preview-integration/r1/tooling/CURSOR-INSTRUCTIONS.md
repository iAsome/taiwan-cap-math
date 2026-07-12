# CURSOR INSTRUCTIONS — HUMAN RUNTIME PREVIEW INTEGRATION R1

## Preconditions

- Repository: `C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1`
- Branch: `chatgpt/math-v2-human-authoring-r1`
- Required HEAD: `cd9217fed972f9485082e57da9f7c67ac39c25bf`
- Latest subject: `audit(math-v2): record global audit r2 readiness gate`
- Clean working tree and synchronized origin.
- Readiness summary must be `PASS_READINESS_GATE_R1` and authorize `ISOLATED_HUMAN_RUNTIME_PREVIEW_INTEGRATION`.

## Copy tooling

Copy this extracted kit byte-for-byte to:

`數學會考作戰室/tools/v2-human-content/preview-integration/r1/tooling/`

Verify `KIT-SHA256.json`.

Set:

```powershell
$repo = "C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1"
$root = "$repo/數學會考作戰室/tools/v2-human-content/preview-integration/r1"
$tooling = "$root/tooling"
```

## Execute

```powershell
node "$tooling/scripts/apply-preview-integration.mjs" --repo "$repo" --root "$root"
node "$tooling/scripts/verify-preview-integration.mjs" --repo "$repo" --root "$root"
node "$tooling/scripts/run-http-smoke-test.mjs" --repo "$repo" --root "$root"
node "$tooling/scripts/finalize-preview-integration.mjs" --root "$root"
```

Require final status:

`PASS_HUMAN_RUNTIME_PREVIEW_INTEGRATION_R1`

Expected content version:

`d402487b40bca04f3278b231262abfb3aa7fd1d1448454e877ff8c76af25082f`

## Allowed changed paths only

- `數學會考作戰室/human-preview.html`
- `數學會考作戰室/human-preview/`
- `數學會考作戰室/tools/v2-human-content/preview-integration/r1/`

## Forbidden changes

Do not modify:

- `數學會考作戰室/index.html`
- `數學會考作戰室/math-bootstrap.js`
- `數學會考作戰室/v2/`
- `數學會考作戰室/tools/v2-content/`
- any human batch source
- V1 rollback files

Do not run `author-v2-production-content.mjs`.
Do not activate production.
Do not link the preview from the main site.
Do not delete generated V2 or V1.
Do not merge or create a PR.

## Git

Stage only the allowed paths.
Commit exactly:

`feat(math-v2): add isolated human runtime preview r1`

Push `chatgpt/math-v2-human-authoring-r1`.

## Return report

Return pre-state, archive/tooling hashes, apply JSON, runtime validation JSON, HTTP smoke JSON, final summary, evidence hashes, all changed paths, commit SHA, push result, clean status, and explicit confirmations that the default route, generated V2, V1, production activation, and old database deletion were unchanged.
