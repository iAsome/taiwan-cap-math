# Cursor Instructions — Reviewed Semantic Hotfix and Full Audit Framework R1

## Purpose

Publish only the content that has actually completed manual semantic review:

- conservative fraction renderer;
- U01-S001;
- U02-S012;
- related manifest, syllabus-lock and content-version migration.

Do not claim that the remaining 4,718 questions have passed manual review.

## Safety: do not use the existing dirty working tree

The existing repository working tree contains an unresolved `DU` entry.

Do not clean, reset, stage, resolve or modify that working tree.

Create a fresh clone for this hotfix.

## Required repository state

Repository:

`https://github.com/iAsome/taiwan-cap-math.git`

Required `origin/main` HEAD:

`4924a780c055164a0d56ab8751f23703e42998cf`

Hotfix branch:

`fix/math-v2-reviewed-semantic-hotfix-r1`

Expected new content version:

`72c20aa6e8b15bbab9244693befb14dcaf6ff1b6ea6d1cddadfc265efc4298a5`

## Install

Keep the extracted archive outside the repository initially.

Verify its ZIP SHA-256 against the value provided by ChatGPT.

Set:

```powershell
$sourceKit = "C:/Users/iAsom/Downloads/math-v2-reviewed-hotfix-and-full-semantic-audit-framework-r1"
$repo = "C:/Users/iAsom/Documents/taiwan-cap-math-reviewed-semantic-hotfix-r1"
$root = "$repo/數學會考作戰室/tools/v2-human-content/semantic-audit-release/r1"
$tooling = "$root/tooling"
$externalEvidence = "C:/Users/iAsom/Documents/math-v2-reviewed-semantic-hotfix-external-evidence-r1"
```

The fresh-clone path and external-evidence path must not exist.

Clone and create the branch:

```powershell
git clone https://github.com/iAsome/taiwan-cap-math.git "$repo"
Set-Location "$repo"
git fetch origin --tags
git switch -c fix/math-v2-reviewed-semantic-hotfix-r1 origin/main
```

Require:

- current HEAD exactly `4924a780c055164a0d56ab8751f23703e42998cf`;
- `origin/main` exactly the same;
- clean status.

Copy the extracted kit byte-for-byte to:

`數學會考作戰室/tools/v2-human-content/semantic-audit-release/r1/tooling/`

Verify every tooling file against `KIT-SHA256.json`.

## Tooling self-test

```powershell
node "$tooling/scripts/run-tooling-self-test.mjs"
```

Require:

- `PASS_TOOLING_SELF_TEST`;
- reviewed questions = 28;
- pending questions = 4,718;
- renderer self-tests pass;
- full release remains blocked until pending reaches zero.

## Baseline

```powershell
node "$tooling/scripts/verify-baseline.mjs" --repo "$repo" --root "$root"
```

Require:

- `PASS_REVIEWED_HOTFIX_BASELINE_R1`;
- all locked baseline hashes match;
- the fresh clone starts from the required main commit;
- the original dirty working tree was not used.

## Apply only reviewed content

```powershell
node "$tooling/scripts/apply-reviewed-hotfix.mjs" --repo "$repo" --root "$root"
```

Require:

- `APPLIED_REVIEWED_SEMANTIC_HOTFIX_R1`;
- exactly the approved production files and semantic-audit evidence are changed;
- no other question or lecture is rewritten.

## Ledger gate

```powershell
node "$tooling/scripts/validate-audit-ledger.mjs" --root "$root" --mode hotfix
```

Require:

- `PASS_HOTFIX_AUDIT_LEDGER_R1`;
- ledger rows = 4,746;
- reviewed = 28;
- pending manual = 4,718;
- full release authorized = false.

Do not run the full-release mode as a release gate yet. It is expected to reject while pending questions remain.

## Node and encoding gate

```powershell
node "$tooling/scripts/validate-reviewed-hotfix.mjs" --repo "$repo" --root "$root"
```

Require:

- `PASS_REVIEWED_CONTENT_NODE_GATE_R1`;
- counts remain 23 / 339 / 339 / 4,068 / 678 / 178;
- U01-S001 contains no square root, pi, irrational-number or recurring-decimal dependency;
- U02-S012 contains no visible complex-fraction term;
- 3/3/3/3 difficulty distribution per revised skill;
- answer positions 0–3 each occur exactly three times per revised skill;
- all reviewed content hashes pass;
- no unaudited slash notation remains in the two revised skills;
- all known mojibake and invalid Unicode checks pass;
- content-version history archive is installed.

## Real browser gate

```powershell
node "$tooling/scripts/run-reviewed-hotfix-browser-gate.mjs" --repo "$repo" --root "$root"
```

Set `CHROME_PATH` only if browser discovery requires it.

Require:

- `PASS_REVIEWED_SEMANTIC_HOTFIX_BROWSER_R1`;
- Human Runtime loads;
- new content version exact;
- both revised skill titles and 28 questions load;
- unit quizzes include both revised skills;
- safe renderer tests pass;
- old Human paper history is archived before incompatible active history is cleared;
- mobile layout passes;
- `?generated=1` and `?legacy=1` still load Human Runtime;
- zero console, runtime and network errors.

## Finalize

```powershell
node "$tooling/scripts/finalize-reviewed-hotfix.mjs" --repo "$repo" --root "$root"
```

Require:

- `PASS_REVIEWED_SEMANTIC_HOTFIX_R1`;
- reviewed questions = 28;
- pending manual questions = 4,718;
- full semantic audit complete = false;
- full release authorized = false.

## Review the diff before commit

Run:

```powershell
git diff --stat
git diff -- "shared/fraction-markup.js"
git diff -- "數學會考作戰室/human-runtime/content/units/u01.json"
git diff -- "數學會考作戰室/human-runtime/content/units/u02.json"
git diff -- "數學會考作戰室/human-runtime/content/manifest.json"
git diff -- "數學會考作戰室/human-runtime/content/syllabus-lock.json"
```

Confirm that no unrelated unit content changed.

## Commit and push

Stage only the approved paths:

```powershell
git add -- `
  "shared/fraction-markup.js" `
  "數學會考作戰室/human-runtime/content/units/u01.json" `
  "數學會考作戰室/human-runtime/content/units/u02.json" `
  "數學會考作戰室/human-runtime/content/manifest.json" `
  "數學會考作戰室/human-runtime/content/syllabus-lock.json" `
  "數學會考作戰室/human-runtime/config.mjs" `
  "數學會考作戰室/human-runtime/storage-migration.mjs" `
  "數學會考作戰室/human-runtime/bootstrap.mjs" `
  "數學會考作戰室/tools/v2-human-content/semantic-audit/r1" `
  "數學會考作戰室/tools/v2-human-content/semantic-audit-release/r1"
```

Commit exactly:

`fix(math-v2): publish first reviewed semantic hotfix r1`

Push normally:

```powershell
git commit -m "fix(math-v2): publish first reviewed semantic hotfix r1"
git push -u origin fix/math-v2-reviewed-semantic-hotfix-r1
```

Do not amend and do not force-push.

## PR and deployment

Create a PR to `main`.

Before merging:

- inspect the complete PR diff;
- require all configured checks to pass;
- require no file outside the approved paths;
- do not resolve conflicts by accepting unrelated generated or legacy files.

After merge, wait for GitHub Pages and run:

```powershell
node "$tooling/scripts/verify-live-deployment.mjs" `
  --root "$root" `
  --url "https://iasome.github.io/taiwan-cap-math/數學會考作戰室/" `
  --output "$externalEvidence"
```

Require:

- `PASS_REVIEWED_SEMANTIC_HOTFIX_DEPLOYMENT_R1`;
- new content version exact;
- U01-S001 revised title present;
- U02-S012 revised title present;
- old visible complex-fraction title absent;
- safe renderer result correct;
- no deployment errors.

## Prohibited actions

- Do not touch the original dirty working tree.
- Do not mark the remaining 4,718 questions as PASS.
- Do not use automation to author or approve pending questions.
- Do not modify any other skill.
- Do not claim a complete 4,746-question semantic audit.
- Do not bypass failed CI or branch protection.
- Do not use force-push.

## Required report

Return:

1. Fresh clone path and starting state
2. Archive and KIT hashes
3. Tooling self-test
4. Baseline verification
5. Exact changed paths
6. Safe renderer test results
7. U01-S001 revised-content validation
8. U02-S012 revised-content validation
9. Counts and content-version result
10. UTF-8 and mojibake scan
11. Ledger result: 28 reviewed / 4,718 pending
12. Paper-history version migration result
13. Browser executable and complete browser tests
14. Console/runtime/network errors
15. Final hotfix summary
16. Commit SHA and push
17. PR number, checks and merge commit
18. GitHub Pages deployment result
19. Confirmation original dirty working tree was untouched
20. Confirmation no unreviewed question was modified or marked PASS
