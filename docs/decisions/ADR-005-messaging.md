# ADR-005: Telegram for admin, WhatsApp Cloud API for nurses
Status: Accepted · 2026-11-25
## Context
Since 1 Oct 2026 Meta charges per message for WhatsApp business messages (utility and service), beyond a small monthly free quota; the Nigerian rate was not confirmed. You chose to keep nurses on WhatsApp and accept this.
## Options
1. WhatsApp Cloud API for nurses (chosen)
2. Telegram for nurses
3. Unofficial gateway such as WAHA (breaks WhatsApp rules; ban risk)
## Decision
Admin on Telegram (free). Nurses on the official WhatsApp Cloud API through n8n, sending the job offer as a pre-approved template with YES/NO replies. Sending number is a setting; for now 0805 882 8411.
## Consequences
+ Official and reliable; nurses already use WhatsApp.
- Small per-message cost, which breaks the strict zero-budget rule; keep messages minimal.
- Needs Meta business setup and template approval, which can delay M3; start it on Day 1.
- A number used on the API usually stops working in the normal WhatsApp app.
- The channel is isolated behind one n8n sub-workflow so nurses can move to Telegram later.
