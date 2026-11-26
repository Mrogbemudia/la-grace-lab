# F01 - Patient accounts
Size: M · Depends on: none

**Story:** As a patient, I want to register and log in so that I can book tests and see my results.

**Fields at registration:** full name, phone number (Nigerian number, stored in one standard format +234XXXXXXXXXX), sex (Male/Female), age in years, password (at least 8 characters). Sex and age are needed for the result form.

**Acceptance criteria**
1. Given a visitor, When they submit valid details, Then an account is created and they are logged in.
2. Given a phone number already registered, When someone registers with it, Then registration is refused with a clear message.
3. Given a registered patient, When they log in with correct details, Then they reach their account page.
4. Given wrong credentials, When they log in, Then access is refused without saying which field was wrong.
5. Given a visitor who is not logged in, When they open booking or results pages, Then they are sent to log in first.
6. Given a logged-in patient, When they open the account page, Then they see only their own bookings and results.
7. Given 5 wrong passwords in a row for one account, Then the account is locked for 15 minutes and even the correct password is refused until the lock ends.
8. Given a phone number typed as 0803..., +234803... or 234803..., Then all are treated as the same number.
