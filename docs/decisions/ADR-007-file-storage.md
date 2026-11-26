# ADR-007: Store files in Postgres for v1
Status: Proposed · 2026-11-25
## Context
Render's free filesystem is wiped on restart; receipts and result PDFs must persist. Neon free gives 1 GB.
## Options
1. Store files in Postgres (`files` table, bytea) with size limits (chosen)
2. External object storage (adds a service and possibly a card)
3. Render disk (paid)
## Decision
Receipts limited to 2 MB (images), PDFs are small. Files are only served after an ownership check.
## Consequences
+ No extra service; backed up with the database.
- 1 GB cap; watch usage on the dashboard; move to object storage later if needed (new ADR).
