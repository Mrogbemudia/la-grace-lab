# ADR-007: Auth and file storage
Status: Accepted · 2026-11-25
## Context
Neon is only a database, so there is no built-in login or file storage. Registration is phone + password with no OTP.
## Options
1. Own simple auth (argon2 hashing, database sessions, secure cookie); files stored in Postgres
2. An auth library (e.g. Auth.js or Better Auth) plus the same file storage
3. Separate object storage service (extra account, likely needs a card)
## Decision
Option 1 for auth and Postgres file storage (receipts and PDFs under a size limit). Revisit if Neon storage fills.
## Consequences
+ No new service, fewer moving parts.
− We write and test login security ourselves; database grows with files.
- Receipts limited to 2 MB (images); files are served only after an ownership check; watch database size.
