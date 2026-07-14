# One-shot execution and resume policy

“One-shot” means one user instruction controls the entire eight-subject build and release. It does not forbid internal batches or commits.

Maintain `tools/cap8-r4/execution-state.json` with baseline SHA, current phase, completed subjects, gate status, pending findings, last clean commit, and exact resume command. Update it transactionally after each checkpoint.

Do not send a final response for checkpoints. Do not require user confirmation between subjects. After a recoverable interruption, verify repository state and continue from the first incomplete gate. Never skip a failed gate merely to finish.
