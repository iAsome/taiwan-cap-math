# Math V2 Controlled Human Runtime Cutover Rehearsal R1

This kit rehearses the production loader cutover in a detached temporary Git worktree.

It does **not** change the real student route, does not delete generated V2, does not delete V1, and does not modify human-authored batches.

Rehearsal sequence:

1. Validate the current generated V2 default route.
2. Validate the current V1 `legacy=1` rollback route.
3. Replace `math-bootstrap.js` only inside the temporary worktree.
4. Validate Human Runtime as the temporary default route.
5. Validate temporary `generated=1` rollback.
6. Validate temporary `legacy=1` rollback.
7. Restore the original loader bytes.
8. Validate generated V2 default and V1 rollback again.
9. Remove the temporary worktree only after all gates pass.

A failure is fail-closed: no commit, no production route change, no deletion.
