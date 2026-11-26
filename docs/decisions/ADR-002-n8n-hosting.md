# ADR-002: n8n on Oracle Cloud Always Free
Status: Accepted · 2026-11-25
## Context
Telegram and WhatsApp webhooks and the timers need an always-on n8n.
## Options
1. Oracle Cloud Always Free VM (chosen)
2. Render/Railway free tiers (sleep or limited credit)
3. n8n Cloud (not free after trial)
## Decision
Self-host n8n (Community Edition) on an Oracle Cloud Always Free VM with free HTTPS.
## Consequences
+ Free and always on; unlimited executions.
- Oracle sign-up needs a credit card for verification and may refuse some cards; if it fails, write a new ADR (Render with keep-alive is the weak fallback).
- You maintain updates and backups (documented in the runbook).
