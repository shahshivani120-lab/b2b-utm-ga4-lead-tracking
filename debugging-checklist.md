# Debugging checklist

Test before you trust the numbers. Do this after setup and after every website change.

## Tools

| Tool | Where | What for |
|---|---|---|
| **GTM Preview / Tag Assistant** | GTM → Preview | See which tags fire on each action |
| **GA4 DebugView** | GA4 → Admin → DebugView | See events arrive in GA4 in real time |
| **GA4 Realtime** | GA4 → Reports → Realtime | Quick check that visits and events arrive |
| **Browser console** | Right-click → Inspect → Console | Run `dataLayer` or `UTMCapture.get()` |

## End-to-end test (15 minutes)

- [ ] Open a **private window** with `?utm_source=test&utm_medium=test&utm_campaign=debug-[date]`
- [ ] GTM Preview shows the GA4 tag fired on page load
- [ ] Visit the pricing page → `view_pricing` fires
- [ ] Click a WhatsApp link → `whatsapp_click` fires
- [ ] Book a test call in Calendly → `book_call` fires
- [ ] Submit a test form → `generate_lead` fires **once** (not twice)
- [ ] DebugView shows all events with the right names and parameters
- [ ] Console: `UTMCapture.get()` shows source `test`
- [ ] CRM: the test contact has `utm_source = test` and a landing page
- [ ] Delete the test contact; run `UTMCapture.reset()`

## Common problems

| Problem | Likely cause | Fix |
|---|---|---|
| No data in GA4 at all | Wrong Measurement ID, or GTM container not published | Check the `G-` ID; publish the container |
| Every visit counted twice | GA4 installed directly **and** via GTM | Remove one |
| Form tag never fires | Form builder doesn't trigger GTM's form submit event | Use a thank-you page or the platform's callback ([GTM guide](gtm-setup-guide.md#3-lead-form-submitted--generate_lead)) |
| `generate_lead` fires twice | Two triggers, or the thank-you page reloads | Keep one trigger; add a "once per page" setting in the tag's advanced settings |
| Key event missing in GA4 | Event never fired, or name differs (case-sensitive) | Check the exact name; wait 24 hours after first firing |
| Leads show source `stripe.com` or `calendly.com` | Payment/booking redirects count as referrals | Add them to **unwanted referrals** ([settings](ga4-key-events.md#settings-to-change-on-day-one)) |
| Lots of "(direct)" traffic | Untagged links in email, WhatsApp, PDFs, QR codes | Tag them ([cheat sheet](platform-utm-cheatsheet.md)) |
| "(not set)" landing page | Events firing before a page view, or session timeouts | Make sure the GA4 tag fires on Initialization |
| Hidden fields are empty | Script not loaded, field names differ, or the form is in an iframe | Check console for `UTMCapture`; match names; see [hidden fields guide](crm-hidden-fields.md) |
| UTMs disappear after redirect | Your site redirects and drops the query string | Fix the redirect to keep query parameters |
| Your own team shows up as leads | Internal traffic not filtered | Define internal traffic + activate the data filter |
