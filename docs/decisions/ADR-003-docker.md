# ADR-003: Docker for n8n only
Status: Accepted · 2026-11-25
## Context
n8n is normally run in a container on the Oracle VM; the web app deploys to Render without a Dockerfile.
## Options
1. Docker only for n8n (Compose)
2. Docker for everything
3. No Docker
## Decision
Option 1.
## Consequences
+ Easy n8n upgrades and restore.
− Needs Docker on the VM; the app is not containerised locally.
