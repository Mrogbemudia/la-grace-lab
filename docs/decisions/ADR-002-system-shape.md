# ADR-002: System shape
Status: Accepted · 2026-11-25
## Context
n8n can hold logic and data, but that is hard to test and secure.
## Options
1. App owns data and rules; n8n only messaging and timers
2. n8n does everything
3. Separate services
## Decision
Option 1.
## Consequences
+ Rules are testable in code; n8n can be replaced or rebuilt without losing data.
− Two deployables to keep in sync through signed webhooks.
