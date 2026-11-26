# ADR-004: n8n on Oracle Cloud Always Free
Status: Accepted · 2026-11-25
## Context
Telegram, WhatsApp and the timers need n8n always on and reachable over HTTPS.
## Options
1. Oracle Cloud Always Free VM
2. Render/Railway free tiers (sleep or limited credit)
3. n8n Cloud (paid after trial)
## Decision
Option 1.
## Consequences
+ Free and always on.
− Sign-up needs a verification card and may be refused; the VM must be kept on Always Free resources; backups of n8n data are our job. If sign-up fails, record a new ADR.
