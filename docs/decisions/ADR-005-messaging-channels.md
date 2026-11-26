# ADR-005: Messaging channels
Status: Accepted · 2026-11-25
## Context
Admin works in chat; nurses are alerted in chat. Since 2026-10-01 Meta charges per WhatsApp business message (including replies within the 24-hour window), beyond a small free monthly quota per number. The Nigerian rate was not confirmed.
## Options
1. WhatsApp Cloud API for nurses, Telegram for admin
2. Telegram for both
3. Unofficial WhatsApp gateway (rule-breaking, ban risk)
## Decision
Option 1, chosen by the owner, with the small per-message cost accepted. Nurse alerts use pre-approved templates. The messaging code sits behind one interface so a nurse channel can be swapped to Telegram later.
## Consequences
+ Nurses stay on the app they already use.
− Small running cost and Meta business setup/template approval; breaks the "zero cost" goal for this part only.
- Start Meta business setup and template approval on Day 1; approval can delay M3.
- A number used on the API usually stops working in the normal WhatsApp app. Sending number is a setting; for now 0805 882 8411.
