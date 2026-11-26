# F07 - Admin chat management
Size: M · Depends on: F06, F02

**Story:** As an admin, I want to manage nurses, the catalog and Selar links from chat so that no dashboard is needed.

**Acceptance criteria**
1. Given an approved admin, When they add a nurse by WhatsApp number, Then the nurse becomes approved and can receive jobs.
2. Given an approved admin, When they delete a nurse, Then that nurse no longer receives jobs, and past assignments remain on record.
3. Given an approved admin, When they add, edit or remove a test and price, Then the catalog (F02) reflects it.
4. Given an approved admin, When they add, edit or remove a Selar/book link, Then the website list reflects it (F10).
5. Given any change, Then the bot confirms what changed; invalid input is rejected with an explanation.
6. Given a non-admin, When they try these commands, Then they are refused (F06).
7. Given an approved admin, When they send a reset-password command for a patient's phone number, Then the patient gets a temporary password (shown only to the admin), the old password stops working, any lock is cleared, and the patient must change it at next login.
