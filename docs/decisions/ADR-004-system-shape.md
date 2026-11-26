# ADR-004: App owns data and rules; n8n handles messaging and timers
Status: Accepted · 2026-11-25
## Options
1. App owns data/rules; n8n only messaging and timers (chosen)
2. n8n does everything including database writes
3. Separate services
## Decision
All rules (status order, who wins a nurse job, payment confirmation, PDF creation) live in the app. n8n receives events, talks to Telegram/WhatsApp, runs the 10-minute and 5-minute timers, and calls internal endpoints with a shared secret. The app also checks admin and nurse identity against its tables.
## Consequences
+ Testable rules, safer security, n8n workflows stay small.
- Two systems to deploy; n8n workflow JSON must be exported into the repo.
