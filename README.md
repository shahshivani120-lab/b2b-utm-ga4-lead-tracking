# B2B UTM & GA4 Lead Tracking Kit

A lightweight setup for B2B SaaS teams that want to answer one question: **which channels bring qualified leads, not just traffic?**

It comes from fixing tracking for an Australian B2B SaaS where organic visitors enquired at **2.12%** (nearly 4x the 0.55% from direct), but only **~8% of visitors reached the pricing page**. Clean UTMs, GA4 key events and lead-quality tracking made that visible, so the team fixed CTAs and navigation instead of buying more traffic.

---

## What's inside

| File | Use it for |
|---|---|
| [`utm-naming-convention.md`](utm-naming-convention.md) | One set of rules for `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` |
| [`utm-builder.csv`](utm-builder.csv) | A shared sheet for building and logging every tagged link |
| [`ga4-key-events.md`](ga4-key-events.md) | Which GA4 events to mark as key events for a B2B funnel, and how |
| [`lead-quality-tracker.csv`](lead-quality-tracker.csv) | Joining leads to their source and outcome (qualified, demo, customer) |

## The setup in 5 steps

1. **Agree on UTM rules** and share them with everyone who posts links (marketing, sales, founders, agencies).
2. **Tag every link you control**: ads, emails, LinkedIn posts, partner links, QR codes. Log them in the builder sheet.
3. **Mark the right GA4 key events**: demo or contact form submit, WhatsApp / chat click, pricing page view, signup or trial start.
4. **Pass the source into your CRM**: capture UTMs in hidden form fields so each lead record keeps its first-touch source.
5. **Review monthly by channel**: sessions → pricing views → enquiries → qualified leads → customers. Fix the biggest drop first.

## The funnel view that matters

| Stage | GA4 / CRM source | Question it answers |
|---|---|---|
| Sessions | GA4 traffic acquisition | Who's arriving, and from where? |
| Pricing page views | GA4 `view_pricing` | Are visitors interested enough to check the price? |
| Enquiries | GA4 `generate_lead`, `whatsapp_click` | Which channels start conversations? |
| Qualified leads | CRM | Which channels bring the right buyers? |
| Customers | CRM | Which channels actually pay back? |

## Common problems this fixes

- **"Direct" traffic that isn't direct**: untagged email, WhatsApp and app links show up as direct.
- **Same source, five spellings**: `LinkedIn`, `linkedin`, `li`, `linkedin.com` split one channel into four rows.
- **Counting clicks instead of leads**: a channel with cheap traffic and zero qualified leads looks like a winner.
- **No path to pricing**: if few visitors reach pricing, fix CTAs and navigation before buying more traffic.

---

**Want help setting this up?** I set up tracking and run growth for B2B SaaS teams.
📅 [Book a free 20-minute call](https://calendly.com/shahshivani120) · 🌐 [Portfolio](https://shahshivani120-lab.github.io/) · 💼 [LinkedIn](https://www.linkedin.com/in/shivanishah-growth)

*Made by [Shivani Shah](https://github.com/shahshivani120-lab). Free to use and adapt.*
