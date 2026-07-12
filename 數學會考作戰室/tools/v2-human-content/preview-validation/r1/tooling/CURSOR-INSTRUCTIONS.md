# CURSOR INSTRUCTIONS — HUMAN PREVIEW BROWSER AND UI VALIDATION R1

## Authorization boundary

This task is preview-only UI repair and real-browser validation.

It does not authorize production activation, default-route changes, merge, generated V2 retirement, V1 modification, or old-database deletion.

## Required repository state

Repository:

`C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1`

Branch:

`chatgpt/math-v2-human-authoring-r1`

Required starting HEAD:

`ab534ad2c6dbfddad424cdf624e7fff7cc068d8b`

Required latest commit subject:

`feat(math-v2): add isolated human runtime preview r1`

Required runtime content version:

`d402487b40bca04f3278b231262abfb3aa7fd1d1448454e877ff8c76af25082f`

## Preconditions

Require all of the following before copying or modifying anything:

- local HEAD equals `origin/chatgpt/math-v2-human-authoring-r1`;
- `git status --short --untracked-files=all` produces no output;
- Preview Integration R1 reports `PASS_HUMAN_RUNTIME_PREVIEW_INTEGRATION_R1`;
- its `nextAuthorizedStage` is `HUMAN_PREVIEW_BROWSER_AND_UI_VALIDATION_R1`;
- `數學會考作戰室/tools/v2-human-content/preview-validation/r1/` does not already exist;
- Node.js provides global WebSocket support; Node 22 or newer is recommended;
- a local Chrome, Chromium, or Edge executable is available.

If browser auto-discovery fails, set one of:

- `CHROME_PATH`
- `EDGE_PATH`

Do not install packages from the network for this task.

## Install tooling

Copy this extracted kit byte-for-byte to:

`數學會考作戰室/tools/v2-human-content/preview-validation/r1/tooling/`

Verify every file against `KIT-SHA256.json`.

Set PowerShell variables:

```powershell
$repo = "C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1"
$root = "$repo/數學會考作戰室/tools/v2-human-content/preview-validation/r1"
$tooling = "$root/tooling"
```

## Step 1 — tooling self-test

Run:

```powershell
node "$tooling/scripts/run-tooling-self-test.mjs"
```

Require:

- `PASS_TOOLING_SELF_TEST`;
- no missing app or style markers;
- production activation false;
- old-database deletion false.

## Step 2 — apply centrally approved preview-only UI repairs

Run:

```powershell
node "$tooling/scripts/apply-browser-ui-validation-r1.mjs" --repo "$repo" --root "$root"
```

Require:

- `APPLIED_CENTRAL_UI_REPAIRS_FOR_BROWSER_VALIDATION`;
- exactly two live preview files repaired:
  - `數學會考作戰室/human-preview/app.mjs`
  - `數學會考作戰室/human-preview/styles.css`;
- three central defect classes recorded;
- protected-path baseline recorded;
- default student route unchanged;
- production activation false;
- old-database deletion false.

The apply script must stop if the current preview source blob hashes do not exactly match Preview Integration R1.

## Step 3 — mandatory real-browser validation

Run:

```powershell
node "$tooling/scripts/run-browser-ui-validation-r1.mjs" --repo "$repo" --root "$root"
```

This script starts a loopback-only static server and launches local Chrome, Chromium, or Edge in headless mode through CDP.

Require:

- status `PASS_HUMAN_PREVIEW_BROWSER_UI_VALIDATION`;
- test count 16;
- passed 16;
- failed 0;
- screenshot count 5;
- units 23;
- skills 339;
- MC questions 4,068;
- constructed responses 678;
- SVG figures 178;
- all 23 unit navigation counts correct;
- one unit quiz displayed with question numbers 1 through its final skill count;
- one engineering mock displayed with MC numbers 1 through 25 and CR numbers 1 through 2;
- same-seed deterministic result true;
- different-seed variation true;
- all 23 browser unit-quiz deterministic checks pass;
- all 178 SVG images decode with non-zero dimensions;
- accessibility contract passes;
- localStorage namespace isolation passes;
- desktop and 390 × 844 mobile layouts have no page-level horizontal overflow;
- console errors empty;
- runtime exceptions empty;
- network errors empty;
- main `index.html` contains no human-preview link;
- `math-bootstrap.js` contains no human-preview route;
- generated V2 default and `legacy=1` rollback markers remain present.

Required screenshots:

- `desktop-initial.jpg`
- `desktop-unit-quiz.jpg`
- `desktop-engineering-mock.jpg`
- `mobile-initial.jpg`
- `mobile-engineering-mock.jpg`

### Browser-policy stop condition

If the browser reports `ERR_BLOCKED_BY_ADMINISTRATOR`, cannot navigate to loopback HTTP, or cannot launch:

- stop without committing;
- do not weaken or bypass the test;
- select an unrestricted local Chrome or Edge using `CHROME_PATH` or `EDGE_PATH`;
- rerun the entire browser step.

A browser-policy failure is not a passing validation result.

## Step 4 — finalize evidence and protected-path validation

Run:

```powershell
node "$tooling/scripts/finalize-browser-ui-validation-r1.mjs" --repo "$repo" --root "$root"
```

Require:

- `PASS_HUMAN_PREVIEW_BROWSER_AND_UI_VALIDATION_R1`;
- browser tests passed 16/16;
- screenshot count 5;
- protected paths unchanged;
- generated V2 remains default;
- V1 rollback remains available;
- default student route unchanged;
- production activation false;
- old-database deletion false;
- merge allowed false;
- next authorized stage `HUMAN_RUNTIME_RELEASE_CANDIDATE_R1`.

## Allowed modified paths

Only:

- `數學會考作戰室/human-preview/app.mjs`
- `數學會考作戰室/human-preview/styles.css`
- `數學會考作戰室/tools/v2-human-content/preview-validation/r1/`

No other path may change.

## Prohibited actions

Do not modify or delete:

- `數學會考作戰室/index.html`
- `數學會考作戰室/math-bootstrap.js`
- `數學會考作戰室/v2/`
- `數學會考作戰室/tools/v2-content/`
- `數學會考作戰室/tools/author-v2-production-content.mjs`
- any `v2-human-content/batches/` source
- V1 rollback files

Do not:

- run `author-v2-production-content.mjs`;
- link the preview from the main site;
- activate production;
- change the default route;
- delete the old database;
- merge or create a pull request;
- weaken any test or verifier;
- mark a blocked browser run as passing.

## Commit

After every required result passes, stage only allowed paths.

Commit once with exactly:

`fix(math-v2): harden and validate human preview ui r1`

Push:

`chatgpt/math-v2-human-authoring-r1`

## Required report

Return:

1. pre-execution branch, HEAD, subject, remote synchronization, and clean status;
2. archive and tooling SHA-256 verification;
3. tooling self-test JSON;
4. UI apply report JSON;
5. browser executable and version;
6. complete 16-test browser result list;
7. all 23 unit navigation and unit-quiz checks;
8. seed determinism and variation result;
9. 178-SVG browser decode result;
10. accessibility and mobile-layout results;
11. console, runtime, network, and HTTP error lists;
12. screenshot paths, byte sizes, and SHA-256 values;
13. final validation summary;
14. evidence manifest;
15. every changed path;
16. commit SHA and push result;
17. final clean Git status;
18. confirmation that `index.html` and `math-bootstrap.js` were unchanged;
19. confirmation that generated V2 remained default;
20. confirmation that V1 rollback remained available;
21. confirmation that production was not activated;
22. confirmation that generated V2, V1, and human batch source were not modified or deleted.
