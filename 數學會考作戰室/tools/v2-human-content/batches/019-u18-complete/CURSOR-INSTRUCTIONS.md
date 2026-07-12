# CENTRAL_COORDINATOR_APPROVAL_REQUIRED

EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__

## Authority and timing

Do not execute these instructions until the central coordinator has reviewed this immutable ZIP, supplied the exact expected Git HEAD, and explicitly approved Batch 019 integration.

This package is authored source for Unit U18 only. Cursor is implementation-only. Cursor must not invent, rewrite, summarize, repair, expand, translate, or regenerate any lecture, question, answer, rubric, semantic review, drawing specification, SVG, manifest, or audit record.

## Exact destination

Copy the extracted package root to exactly:

`數學會考作戰室/tools/v2-human-content/batches/019-u18-complete/`

Do not rename the batch directory. Do not merge its files into another unit directory.

## Preconditions

1. Work only in repository `iAsome/taiwan-cap-math`.
2. Work only on branch `chatgpt/math-v2-human-authoring-r1`, unless the central coordinator supplies a different explicit integration branch.
3. Replace the placeholder in `EXPECTED_HEAD` only with the coordinator-provided full commit SHA.
4. Before copying anything, run `git rev-parse HEAD` and require an exact byte-for-byte match with the supplied expected SHA.
5. Require a clean working tree or obtain explicit central-coordinator instructions for every pre-existing change.
6. Confirm that no `019-u18-complete` directory already exists. If it exists, stop and report every conflicting path; never merge two versions silently.
7. Do not inspect old production question or lecture banks to “improve” this package. They are outside the trust boundary.

These preconditions prevent parallel batches from integrating against different repository states and prevent old generated content from contaminating human-authored records.

## Copy procedure

1. Extract the ZIP into a temporary directory.
2. Verify that the extracted root is exactly `math-v2-human-content-batch-019-u18-complete/`.
3. Verify that the ZIP contains no `staging/` directory.
4. Copy the complete root contents, without content edits, to the exact destination above.
5. Preserve UTF-8 encoding and line endings. Do not run formatters that reorder JSON keys or rewrite JSONL records because canonical record hashes depend on the reviewed serialization.
6. Do not copy temporary render images, editor metadata, operating-system files, or any path not present in the ZIP.
7. Do not touch U01–U17, U19–U23, production banks, runtime routes, release manifests, or legacy deletion scripts.

## Required validation before emission

From the copied batch directory, run:

```bash
node importer/verify-bundle.mjs
```

The command must exit with code 0 and print a JSON object whose `status` is `PASS`. Confirm at minimum:

- `unitId` is `u18`;
- `skillCount` is 16;
- `lectureCount` is 16;
- `mcQuestionCount` is 192;
- `constructedResponseCount` is 32;
- `semanticReviewCount` is 192;
- `figureCount` is 11;
- all four difficulty counts are 48;
- all four answer-index counts are 48;
- record hashes and file-manifest hashes are verified;
- production activation remains false.

If validation fails, stop. Report the exact command, exit code, stdout, stderr, current HEAD, and changed-file list. Do not edit mathematical content to force a pass. Any mathematical correction must return to the central coordinator and author.

## Staging emission

Only after the source verifier passes, run:

```bash
node importer/emit-unit-modules.mjs
```

This creates serialization modules under the batch-local `staging/` directory. Staging is derived output, not authoring authority and not production content.

Expected result:

- 16 skill modules;
- one batch-local staging manifest;
- no file outside `019-u18-complete/` modified.

Then run the verifier a second time:

```bash
node importer/verify-bundle.mjs
```

The second run must also return `PASS` and report `stagingPresent: true` with `emittedModuleCount: 16`.

## Prohibited actions

- Do not activate or import U18 into the production runtime.
- Do not replace old production questions or lectures.
- Do not delete any legacy database or generator.
- Do not modify default UI routes, release gates, compiled banks, or rollback paths.
- Do not use `author-v2-production-content.mjs`.
- Do not generate missing data with Cursor, Codex, an LLM, templates, loops, or parameter substitution.
- Do not change answer positions, choices, wording, figures, rubrics, or hashes.
- Do not commit, push, or open a pull request unless the central coordinator separately authorizes that exact action after reviewing both verifier outputs.
- Do not integrate another parallel batch in the same unreported step.

These restrictions keep the old database isolated until all 23 units pass the final global release gate.

## Required report to central coordinator

Return a plain-text report containing:

1. repository and branch;
2. expected HEAD and observed HEAD;
3. clean-tree status before copy;
4. exact destination path;
5. copied-file count and byte count;
6. first verifier JSON;
7. emitter JSON and emitted module count;
8. second verifier JSON;
9. `git status --short`;
10. confirmation that no production path or old content was modified;
11. confirmation that no commit, push, pull request, activation, or legacy deletion occurred;
12. any deviation or failure, without attempting an unapproved repair.

The central coordinator owns final acceptance, cross-unit duplicate reconciliation, shared-schema reconciliation, integration order, commits, pushes, production replacement, and final retirement of the old database.
