# Math V2 Reviewed Semantic Hotfix and Full Audit Framework R1

This package has two separate purposes.

## 1. Reviewed production hotfix

It publishes only:

- the conservative fraction renderer;
- the fully rewritten and manually reviewed U01-S001;
- the fully rewritten and manually reviewed U02-S012;
- the related production syllabus lock, manifest, content-version configuration and saved-paper archive migration.

Exactly 28 questions and 2 lectures are authorized for content changes.

## 2. Full semantic-audit framework

The included 4,746-row ledger remains the authority for the continuing audit.

After this hotfix:

- reviewed and revised: 28 questions;
- pending manual review: 4,718 questions;
- no pending question is treated as PASS;
- a full semantic release is blocked until pending count is zero.

## Content version

Old:

`d402487b40bca04f3278b231262abfb3aa7fd1d1448454e877ff8c76af25082f`

New:

`72c20aa6e8b15bbab9244693befb14dcaf6ff1b6ea6d1cddadfc265efc4298a5`

The version migration archives existing Human paper history before clearing incompatible active history.
