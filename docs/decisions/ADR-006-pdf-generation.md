# ADR-006: Result PDF generation
Status: Accepted, conditional · 2026-11-25
## Context
The PDF must look like the lab's paper form (same layout, green styling, labels exactly as printed).
## Options
1. react-pdf inside the app (no browser needed)
2. Chromium container (Gotenberg), accurate but heavy for a small free server
3. Third-party PDF service called from n8n
## Decision
Option 1. After building a sample, the owner compares it with the paper form. If styling or colours do not match, switch to option 3 (new ADR) and keep the same input data.
## Consequences
+ Free, no extra service.
− Close, not pixel-identical; the logo file and fonts are needed. Option 3 may have free-plan limits.
