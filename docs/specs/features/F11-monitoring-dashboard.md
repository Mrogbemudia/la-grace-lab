# F11 - Monitoring dashboard (read-only)
Size: M · Depends on: F04, F05, F06, F08, F09

**Story:** As an owner, I want one dashboard that tracks every part of the system so that I can see reports and spot issues.

**Acceptance criteria**
1. Given an owner account, When they log in at any time, Then they see the dashboard; non-owners cannot.
2. Given the dashboard, Then it shows bookings by status (today and this week) and confirmed payment totals.
3. Given the dashboard, Then it lists stuck items: expired transfers, bookings with no nurse accepted, results pending.
4. Given the dashboard, Then it shows failed n8n runs, message delivery failures and nurse response rate.
5. Given the dashboard, Then it shows health status for the website, n8n, the Paystack webhook, WhatsApp and Telegram.
6. Given the dashboard, Then nothing on it can change a booking, nurse, price or result (read-only).
