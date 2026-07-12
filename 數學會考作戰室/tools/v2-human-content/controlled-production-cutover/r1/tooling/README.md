# Math V2 Controlled Production Cutover R1

This kit performs the first real student-route cutover to the Human Runtime.

Safety model:

1. Verify the committed production cutover package and clean branch.
2. Create and push an annotated immutable pre-cutover tag.
3. Apply the exact staged payload already committed in the repository.
4. Verify the applied file hashes.
5. Re-run all 24 human-content batch verifiers and Global Audit R2.
6. Run real-browser production tests for Human default, generated V2 rollback and V1 rollback.
7. Exercise the actual rollback script in a detached worktree.
8. Commit and push the cutover only after every gate passes.

Generated V2 and V1 remain available during this stage. No old runtime is deleted.
