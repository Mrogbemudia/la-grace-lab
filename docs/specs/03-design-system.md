# 03 - Design System

Status: APPROVED · ADR-008

- **Kit:** Tailwind CSS + shadcn/ui. Mobile-first (most patients use phones).
- **Colours (tokens):** primary green taken from the lab form and logo (about `#1F8A5B`; exact value to be sampled from the logo file), dark green for headings, white background, light green tint for table headers, red for errors, amber for warnings. Text dark grey on white.
- **Type:** headings in a bold condensed sans (Barlow Condensed, free) to echo the form's title; body in Inter. Same fonts are registered in the PDF.
- **Spacing:** 4 px scale (4, 8, 12, 16, 24, 32, 48). Rounded corners 6 px.
- **Components:** Button, Input, Select, Form field with error text, Card, Table, Badge (one colour per booking status), Dialog, Toast, Navbar, Footer with lab address and phones.
- **Rules:** minimum 44 px tap targets; text contrast at least 4.5:1; every status shown as text plus colour.
