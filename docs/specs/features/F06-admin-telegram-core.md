# F06 - Admin Telegram bot: access control and alerts
Size: M · Depends on: none (used by F03, F04, F07, F09, F11)

**Story:** As an admin, I want to receive alerts and give commands on Telegram so that I can run the lab without a dashboard.

**Acceptance criteria**
1. Given the first admin (Telegram number 0703 635 9661) opens the bot and presses Start, Then their Telegram account is stored as an approved admin.
2. Given a Telegram user who is not approved, When they send any command, Then nothing is executed and they get a refusal.
3. Given a new booking, Then every approved admin receives an alert with Booking ID, patient name and phone, tests, visit type and location link.
4. Given an n8n workflow fails, Then approved admins get an error alert within 5 minutes.
5. Given an approved admin sends an unknown command, Then the bot replies with the list of valid commands.
