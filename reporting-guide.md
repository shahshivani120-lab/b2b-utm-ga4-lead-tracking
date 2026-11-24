# Reporting guide

How to pull the numbers each month, build a simple dashboard, and turn the data into decisions.

## The monthly funnel, by channel

| Stage | Where the number comes from |
|---|---|
| **Sessions** | GA4 → Reports → Acquisition → **Traffic acquisition** (dimension: Session default channel group, or your "Channels + AI" group) |
| **Pricing page views** | GA4 → **Explore → Free form**: rows = channel, values = Event count, filter Event name = `view_pricing` |
| **Leads** | Same exploration, filter Event name = `generate_lead` (add `book_call`, `whatsapp_click` if you count them as leads) |
| **Qualified leads** | CRM: count leads by **first_utm_medium / source** where status = qualified |
| **Customers** | CRM: deals won, by the same source fields |

Paste them into the workbook's **Funnel report** sheet; the rates calculate themselves.

## GA4 explorations to build once

### 1. Lead funnel exploration
**Explore → Funnel exploration**
- Step 1: `session_start`
- Step 2: `view_pricing`
- Step 3: `generate_lead`
- Breakdown: Session default channel group
- Make it an **open funnel** (users can enter at any step)

This shows where each channel's visitors drop out. In the case study, only ~8% of visitors reached pricing, so the fix was navigation and CTAs, not more traffic.

### 2. Landing pages that create leads
**Explore → Free form**
- Rows: Landing page + query string
- Values: Sessions, Key events, Session key event rate
- Filter: Session default channel group = Organic Search (then repeat for other channels)

### 3. First touch vs last touch
**Explore → Free form**
- Rows: First user source / medium
- Columns: Session source / medium
- Values: Key events

Shows how people **find** you vs how they come back to **convert**.

## Looker Studio dashboard (30 minutes)

1. Go to [lookerstudio.google.com](https://lookerstudio.google.com) → **Blank report** → add data → **Google Analytics** → your GA4 property.
2. Add these charts:

| Chart | Dimension | Metrics |
|---|---|---|
| Scorecards (top row) | — | Sessions, Key events, Session key event rate, Engaged sessions |
| Time series | Date | Sessions, Key events |
| Table | Session default channel group | Sessions, Engaged sessions, Key events, Session key event rate |
| Table | Landing page | Sessions, Key events |
| Bar chart | Event name (filter: your key events) | Event count |

3. Add a **date range control** and a **channel filter control** at the top.
4. Share it with view access, and schedule a monthly PDF email (Share → Schedule delivery).

For CRM data (qualified leads, customers), add a Google Sheet of your lead log as a second data source.

## The monthly review (45 minutes)

**Agenda**
1. **Topline (5 min):** sessions, leads, qualified leads, customers vs last month
2. **By channel (15 min):** which channel improved or dropped? Why?
3. **Funnel (10 min):** biggest drop-off stage and channel
4. **Quality (10 min):** qualified rate by channel (with sales)
5. **Decisions (5 min):** 1–3 changes for next month, with an owner

**Decision guide**

| What you see | Decision |
|---|---|
| A channel has high sessions but a low lead rate | Fix landing pages or offer for that channel before spending more |
| A channel has a high lead rate but low volume | Invest more there |
| Lots of leads, few qualified | Tighten targeting or messaging |
| Few visitors reach pricing | Improve navigation and CTAs to pricing/demo |
| Big share of "Direct" | Check for untagged links (email, WhatsApp, PDFs, QR codes) |
| AI assistant traffic growing | Invest in the pages AI links to (comparisons, buyer guides) |
