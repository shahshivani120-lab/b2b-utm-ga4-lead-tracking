# Lead scoring and "qualified lead" definition

Counting leads isn't enough: you need to know which channels bring **good** leads. Agree a simple definition with sales first, then score every lead the same way.

## Step 1: define a qualified lead (in one sentence)

Write it down and get sales to agree. Example:

> A **qualified lead** is a company with **20–500 employees** in our **target industries**, where the contact is a **decision-maker or influencer**, with a **real need in the next 6 months**.

## Step 2: score fit and intent

Score each lead out of 100: **fit** (are they the right company and person?) + **intent** (are they ready to talk?).

### Fit (max 50)

| Criteria | Points |
|---|---:|
| Company size in target range | 15 |
| Industry in target list | 10 |
| Location you serve | 5 |
| Job title: decision-maker (founder, CEO, head of, director) | 15 |
| Job title: influencer (manager, lead) | 8 |
| Uses a competitor or a tool you replace | 5 |

### Intent (max 50)

| Action | Points |
|---|---:|
| Requested a demo or booked a call | 25 |
| Visited the pricing page | 10 |
| Started a WhatsApp/chat conversation | 10 |
| Returned to the site 2+ times | 5 |
| Downloaded a case study or guide | 5 |
| Opened 3+ emails | 3 |
| Said a timeline under 3 months | 10 |

*(Intent is capped at 50 even if the points add up to more.)*

### Score bands

| Score | Status | Next step |
|---|---|---|
| 70–100 | **Sales-qualified (SQL)** | Sales calls within 24 hours |
| 40–69 | **Marketing-qualified (MQL)** | Nurture: case studies, follow-up in 2 weeks |
| 0–39 | **Not qualified yet** | Newsletter only |

## Step 3: log it with the source

Every lead in the [`lead-quality-tracker.csv`](lead-quality-tracker.csv) (or the workbook's "Lead log") has its **first-touch source** from the [hidden fields](crm-hidden-fields.md), its score and its outcome. Then the funnel report can show qualified leads and customers **by channel**.

## Step 4: review monthly with sales

- Which channel brings the highest share of SQLs?
- Are any channels bringing lots of leads but few SQLs? (Change targeting or messaging.)
- Did any "not qualified" leads become customers? (Adjust the scoring.)

## Tips

- **Start simple.** A 3-point score (good / maybe / no) beats a complex model nobody uses.
- **Re-check after 3 months** using real customer data: what did customers have in common?
- Most CRMs (HubSpot, Pipedrive, Zoho, Salesforce) support scoring properties; set the same rules there.
