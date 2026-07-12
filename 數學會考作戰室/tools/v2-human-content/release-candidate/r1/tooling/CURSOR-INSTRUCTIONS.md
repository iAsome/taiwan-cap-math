# CURSOR INSTRUCTIONS — HUMAN RUNTIME RELEASE CANDIDATE R1

## Repository and prerequisite

Repository:

`C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1`

Required branch:

`chatgpt/math-v2-human-authoring-r1`

Required starting HEAD:

`3b565665a6c5530109879711557602dc17353377`

Required latest subject:

`fix(math-v2): harden and validate human preview ui r1`

The working tree and remote branch must be clean and synchronized.

## Safety boundary

This task creates an unlinked, noindex Release Candidate route only. It must not modify the default route, generated V2, V1 rollback, human content batches, `index.html`, `math-bootstrap.js`, or `app.js`.

## Setup

Copy this extracted kit byte-for-byte to:

`數學會考作戰室/tools/v2-human-content/release-candidate/r1/tooling/`

Verify all files against `KIT-SHA256.json`.

Set:

```powershell
$repo = "C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1"
$root = "$repo/數學會考作戰室/tools/v2-human-content/release-candidate/r1"
$tooling = "$root/tooling"
$evidence = "$root/evidence"
```

## Execute gates in order

1. Tooling self-test:

```powershell
node "$tooling/scripts/run-tooling-self-test.mjs"
```

Require `PASS_TOOLING_SELF_TEST`.

2. Online official-source verification:

```powershell
node "$tooling/scripts/verify-official-spec-online.mjs" --output "$evidence"
```

Require `PASS_OFFICIAL_SPEC_ONLINE_R1`. Do not bypass network or marker failures.

3. Apply RC-only files:

```powershell
node "$tooling/scripts/apply-human-runtime-rc-r1.mjs" --repo "$repo" --root "$root"
```

Require `APPLIED_HUMAN_RUNTIME_RELEASE_CANDIDATE_R1`.

4. Node runtime and blueprint validation:

```powershell
node "$tooling/scripts/verify-human-runtime-rc-node.mjs" --repo "$repo" --root "$root"
```

Require `PASS_HUMAN_RUNTIME_RC_NODE_VALIDATION_R1`, 23 units, 339 skills, 4,068 MC, 678 CR, 12 deterministic mock runs, all 23 deterministic quizzes, exact domain/difficulty contracts, at least 3 figure MC per mock, and content version `d402487b40bca04f3278b231262abfb3aa7fd1d1448454e877ff8c76af25082f`.

5. Real browser RC validation:

```powershell
node "$tooling/scripts/run-browser-human-rc-r1.mjs" --repo "$repo" --root "$root"
```

Use Chrome/Edge. Set `CHROME_PATH` or `EDGE_PATH` if needed. Require `PASS_HUMAN_RUNTIME_RC_BROWSER_R1`, zero failed tests, zero console/runtime/network errors, human handbook loaded, 25 MC + 2 CR visible, figures visible, all 23 quizzes deterministic, mobile layout pass, RC storage isolation pass, and default route isolation pass.

6. Finalize:

```powershell
node "$tooling/scripts/finalize-human-runtime-rc-r1.mjs" --repo "$repo" --root "$root"
```

Require `PASS_HUMAN_RUNTIME_RELEASE_CANDIDATE_R1` and next stage `CONTROLLED_HUMAN_RUNTIME_CUTOVER_REHEARSAL_R1`.

## Allowed changed paths only

- `數學會考作戰室/human-rc.html`
- `數學會考作戰室/human-runtime-rc/`
- `數學會考作戰室/tools/v2-human-content/release-candidate/r1/`

## Prohibitions

Do not modify or delete:

- `數學會考作戰室/index.html`
- `數學會考作戰室/math-bootstrap.js`
- `數學會考作戰室/app.js`
- `數學會考作戰室/analysis-data.js`
- `數學會考作戰室/v2/`
- `數學會考作戰室/tools/v2-content/`
- `數學會考作戰室/tools/author-v2-production-content.mjs`
- any V1 rollback file
- any `v2-human-content/batches/` source
- `human-preview.html` or `human-preview/`

Do not activate production. Do not change the student route. Do not delete the old database. Do not merge or create a PR.

## Commit

Stage only the allowed paths. Commit once with exactly:

`feat(math-v2): build human runtime release candidate r1`

Push `chatgpt/math-v2-human-authoring-r1`.

## Required report

Return:

1. pre-execution branch, HEAD, subject, remote sync, clean status;
2. archive and tooling hashes;
3. tooling self-test;
4. official online verification with retrieval timestamps and body hashes;
5. apply report;
6. 12 mock blueprint validation results;
7. all 23 quiz validation results;
8. human lecture adapter validation;
9. browser executable/version and all test results;
10. screenshots and hashes;
11. final RC summary;
12. evidence manifest;
13. every changed path;
14. commit SHA and push result;
15. final clean status;
16. confirmation protected routes and databases were unchanged;
17. confirmation production was not activated and old databases were not deleted.
