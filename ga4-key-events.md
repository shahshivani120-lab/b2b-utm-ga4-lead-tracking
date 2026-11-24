# GA4 key events for a B2B funnel

Mark only the actions that mean real buying interest as **key events** (Admin → Data display → Events → mark as key event). Everything else stays a normal event.

## Recommended events

| Event name | Trigger (Google Tag Manager) | Key event? | Why |
|---|---|---|---|
| `generate_lead` | Demo / contact form submitted (thank-you page or form submit trigger) | ✅ Yes | The main enquiry |
| `whatsapp_click` | Click on a `wa.me` or `api.whatsapp.com` link | ✅ Yes | Many SMB buyers prefer to message |
| `book_call` | Click on a Calendly / booking link, or booking confirmed | ✅ Yes | High-intent action |
| `sign_up` / `start_trial` | Account or trial created | ✅ Yes | Product-led funnels |
| `view_pricing` | Page view where page path contains `/pricing` | ➖ No (but report on it) | Shows interest; use it as a funnel step |
| `file_download` | PDF / case study download (GA4 enhanced measurement) | ➖ No | Content engagement |
| `scroll` / `click` | Enhanced measurement defaults | ➖ No | Noise for lead reporting |

## Setup checklist

- [ ] GA4 enhanced measurement on (page views, scrolls, outbound clicks, file downloads)
- [ ] GTM installed on every page, including thank-you pages
- [ ] Form submit tracked once per submission (test for double-firing)
- [ ] WhatsApp and booking-link clicks tracked as their own events
- [ ] Key events marked in GA4 and imported into Google Ads if you run search
- [ ] Hidden form fields capture `utm_source`, `utm_medium`, `utm_campaign` into the CRM
- [ ] Internal traffic filtered (your office / team IPs)
- [ ] Test everything in GA4 DebugView before you trust the numbers

## Monthly report (one table)

| Channel | Sessions | Pricing views | % to pricing | Enquiries | Enquiry rate | Qualified leads | Customers |
|---|---|---|---|---|---|---|---|
| Organic search | | | | | | | |
| Paid social | | | | | | | |
| Organic social | | | | | | | |
| Email | | | | | | | |
| Direct | | | | | | | |
| AI assistants (chatgpt.com, perplexity.ai, copilot) | | | | | | | |

Tip: add a row for AI assistant referrals. ChatGPT, Perplexity and Copilot traffic is often small but highly engaged.
