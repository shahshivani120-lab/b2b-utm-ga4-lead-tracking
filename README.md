# B2B UTM & GA4 Lead Tracking Kit

**A complete, step-by-step setup that shows which marketing channels bring qualified leads and customers, not just traffic.** Built for B2B SaaS and service businesses using Google Analytics 4 (GA4), Google Tag Manager (GTM) and any CRM.

It comes from fixing tracking for an Australian B2B SaaS. Organic visitors enquired at **2.12%**, nearly 4x the 0.55% from direct traffic, but only **~8% of visitors reached the pricing page**. Clean tracking made that visible, so the team fixed CTAs and navigation instead of buying more traffic.

---

## What you'll be able to answer

- Which channel (Google, LinkedIn, Meta, email, AI assistants…) brings the most **qualified** leads?
- Where do visitors drop out: before pricing, before the form, or after the enquiry?
- What does a customer cost by channel?
- How much traffic and how many leads come from **ChatGPT, Perplexity, Copilot and Gemini**?

## Quick start: set it up in one week

| Day | Do this | Use | Time |
|---|---|---|---|
| 1 | Agree UTM rules; share them with everyone who posts links | [`utm-naming-convention.md`](utm-naming-convention.md), [`platform-utm-cheatsheet.md`](platform-utm-cheatsheet.md) | 1 h |
| 1 | Start building every tagged link in the workbook | [`tracking-workbook.xlsx`](tracking-workbook.xlsx) → "UTM builder" | 15 min |
| 2 | Install GTM; set up form, WhatsApp, booking and pricing tracking | [`gtm-setup-guide.md`](gtm-setup-guide.md) | 2–3 h |
| 2 | Mark key events in GA4 | [`ga4-key-events.md`](ga4-key-events.md) | 30 min |
| 3 | Capture UTMs into your CRM with hidden form fields | [`utm-capture.js`](utm-capture.js), [`crm-hidden-fields.md`](crm-hidden-fields.md) | 1–2 h |
| 3 | Add an "AI assistants" channel in GA4 | [`ai-traffic-channel-group.md`](ai-traffic-channel-group.md) | 15 min |
| 4 | Test everything end to end | [`debugging-checklist.md`](debugging-checklist.md) | 1 h |
| 5 | Agree what "qualified" means; set up scoring | [`lead-scoring.md`](lead-scoring.md) | 1 h |
| Monthly | Build the funnel report and decide where to spend | [`reporting-guide.md`](reporting-guide.md), workbook → "Funnel report" | 1 h |

## What's in the kit

| File | What it is |
|---|---|
| [`utm-naming-convention.md`](utm-naming-convention.md) | The rules: allowed values, formats, examples and common mistakes |
| [`platform-utm-cheatsheet.md`](platform-utm-cheatsheet.md) | Ready-to-paste UTM setups for Google Ads, Meta, LinkedIn, email, WhatsApp, QR codes and more |
| [`gtm-setup-guide.md`](gtm-setup-guide.md) | Step-by-step GTM: GA4 tag, form submits, WhatsApp clicks, Calendly bookings, pricing views, file downloads (with code) |
| [`ga4-key-events.md`](ga4-key-events.md) | Which events to mark as key events, custom dimensions, data retention and filters |
| [`utm-capture.js`](utm-capture.js) | A tested script that saves first- and last-touch source and fills hidden form fields |
| [`crm-hidden-fields.md`](crm-hidden-fields.md) | How to add hidden fields in HubSpot, Webflow, WordPress and plain HTML forms |
| [`ai-traffic-channel-group.md`](ai-traffic-channel-group.md) | A GA4 custom channel for ChatGPT, Perplexity, Copilot, Gemini and other AI assistants |
| [`lead-scoring.md`](lead-scoring.md) | A simple fit + intent scoring model and a "qualified lead" definition |
| [`reporting-guide.md`](reporting-guide.md) | GA4 explorations, a Looker Studio dashboard build and the monthly review |
| [`debugging-checklist.md`](debugging-checklist.md) | How to test with GTM Preview and GA4 DebugView, and fix common problems |
| [`tracking-workbook.xlsx`](tracking-workbook.xlsx) | UTM builder with validation, lead log and an automatic funnel report (formulas included) |
| [`utm-builder.csv`](utm-builder.csv), [`lead-quality-tracker.csv`](lead-quality-tracker.csv) | Plain CSV versions |

## How the pieces fit

```
Tagged link (UTMs)  →  Website (GTM + GA4)  →  Form / WhatsApp / booking  →  CRM lead  →  Qualified  →  Customer
     │                      │                         │                        │
 utm-naming-        gtm-setup-guide.md         ga4-key-events.md       utm-capture.js +
 convention.md                                                         crm-hidden-fields.md
                                     └──────────── reporting-guide.md + tracking-workbook.xlsx ──────────┘
```

---

**Want help setting this up?** Paid ads + funnel audit **from US$199**, covering tracking gaps and the path from click to qualified lead.
📅 [Book a free 20-minute call](https://calendly.com/shahshivani120) · 🌐 [Portfolio](https://shahshivani120-lab.github.io/) · 💼 [LinkedIn](https://www.linkedin.com/in/shivanishah-growth)

*Made by [Shivani Shah](https://github.com/shahshivani120-lab). Free to use and adapt. GA4 and GTM menus change from time to time; names below were accurate in late 2026.*
