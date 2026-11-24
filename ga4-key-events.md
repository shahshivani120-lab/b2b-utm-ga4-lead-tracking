# GA4 key events and settings

Key events (previously called "conversions") are the actions that mean real buying interest. Mark only those; everything else stays a normal event so your reports stay clean.

## Recommended events for a B2B funnel

| Event name | What it means | Key event? | How it's tracked |
|---|---|---|---|
| `generate_lead` | Demo or contact form submitted | ✅ Yes | [GTM step 3](gtm-setup-guide.md#3-lead-form-submitted--generate_lead) |
| `book_call` | Call booked (Calendly or similar) | ✅ Yes | [GTM step 5](gtm-setup-guide.md#5-calendly-booking--book_call) |
| `whatsapp_click` | Clicked to message on WhatsApp | ✅ Yes | [GTM step 4](gtm-setup-guide.md#4-whatsapp-click--whatsapp_click) |
| `sign_up` / `start_trial` | Account or trial created | ✅ Yes (product-led) | Sign-up confirmation |
| `view_pricing` | Viewed the pricing page | ➖ No, but report on it | [GTM step 6](gtm-setup-guide.md#6-pricing-page-view--view_pricing) |
| `email_click`, `phone_click` | Clicked an email or phone link | Optional | [GTM step 7](gtm-setup-guide.md#7-other-useful-events) |
| `file_download` | Downloaded a PDF (automatic) | ➖ No | Enhanced measurement |
| `scroll`, `click` | Automatic engagement events | ➖ No | Enhanced measurement |

**Use the same event names everywhere** (GTM, GA4, reports). GA4 event names are case-sensitive.

## Mark key events

1. GA4 → **Admin → Data display → Events** (events appear after they've fired at least once; allow up to 24 hours).
2. Find the event (e.g. `generate_lead`) → click the **star / "Mark as key event"**.
3. If you run Google Ads: Google Ads → Goals → Conversions → **Import** → Google Analytics 4 → select the key events.

You can also create a key event before it fires: **Admin → Data display → Key events → New key event**, and type the exact event name.

## Custom dimensions (to report on your event parameters)

GA4 only shows event parameters in reports after you register them. **Admin → Data display → Custom definitions → Create custom dimension**:

| Dimension name | Scope | Event parameter |
|---|---|---|
| Form name | Event | `form_name` |
| Link URL | Event | `link_url` |
| Page | Event | `page` |

## Settings to change on day one

| Setting | Where | Change to | Why |
|---|---|---|---|
| Data retention | Admin → Data collection and modification → Data retention | **14 months** | Default is 2 months for explorations; too short for B2B sales cycles |
| Internal traffic | Admin → Data streams → Configure tag settings → Define internal traffic, then Admin → Data filters | Exclude office/team IPs | Your team shouldn't count as leads |
| Unwanted referrals | Admin → Data streams → Configure tag settings → List unwanted referrals | Add payment and booking domains (e.g. `stripe.com`, `calendly.com`) | Stops them stealing credit for leads |
| Cross-domain | Admin → Data streams → Configure tag settings → Configure your domains | Add your app or checkout domain | Keeps one session across domains |
| Google Ads link | Admin → Product links | Link your account | Campaign data and conversion import |
| Search Console link | Admin → Product links | Link your property | See organic queries in GA4 |

## Understanding source attribution in GA4

| Dimension | Meaning | Use it for |
|---|---|---|
| **First user source / medium** | How this person first found you (ever) | Which channels **find** new people |
| **Session source / medium** | Where this visit came from | Which channels bring **visits** |
| **Source / medium** (on key events) | The source credited with the key event (data-driven or last click, per your attribution settings) | Which channels **drive leads** |

B2B buyers often find you through one channel and convert through another (e.g. find on LinkedIn, return via Google). That's why the [UTM capture script](utm-capture.js) saves **both first and last touch** into your CRM.

## Monthly lead report (one table)

| Channel | Sessions | Pricing views | % to pricing | Leads | Lead rate | Qualified | Customers |
|---|---:|---:|---:|---:|---:|---:|---:|
| Organic Search | | | | | | | |
| Paid Search | | | | | | | |
| Paid Social | | | | | | | |
| Organic Social | | | | | | | |
| Email | | | | | | | |
| Referral | | | | | | | |
| AI assistants | | | | | | | |
| Direct | | | | | | | |

The workbook's **Funnel report** sheet calculates the rates for you. See the [reporting guide](reporting-guide.md) for where each number comes from.
