# Capture the source in your CRM (hidden fields)

GA4 tells you which channels bring leads **in total**. Your CRM needs to know the source of **each lead**, so you can follow it to qualified and customer. Hidden form fields do that.

## How it works

1. A visitor lands from `...?utm_source=linkedin&utm_medium=organic-social...`
2. [`utm-capture.js`](utm-capture.js) saves the source in the browser (first touch for 90 days, last touch on every tagged visit).
3. When they submit a form, hidden fields send the saved values with the lead.
4. The CRM stores them on the contact record.

## Step 1: add the script

Pick one:
- **GTM (recommended):** new Custom HTML tag → paste `<script>` + the contents of `utm-capture.js` + `</script>` → trigger **All Pages**.
- **Directly:** upload `utm-capture.js` to your site and add `<script src="/utm-capture.js"></script>` before `</body>` on every page.

## Step 2: add hidden fields to your form

Use these exact field names (or change `FIELD_NAMES` at the top of the script to match yours):

| Hidden field name | Gets | Example value |
|---|---|---|
| `utm_source` | Last-touch source | `google` |
| `utm_medium` | Last-touch medium | `cpc` |
| `utm_campaign` | Last-touch campaign | `free-audit-bf-2026` |
| `utm_content` | Last-touch content | `hook-free-hardware` |
| `utm_term` | Last-touch term | `pos-for-cafes` |
| `click_id` | Ad click ID | `gclid:Cj0KCQ…` |
| `first_utm_source` | First-touch source | `linkedin` |
| `first_utm_medium` | First-touch medium | `organic-social` |
| `first_utm_campaign` | First-touch campaign | `founder-linkedin` |
| `first_utm_content` | First-touch content | `post-2026-11-18` |
| `landing_page` | First landing page | `https://example.com/blog/cloud-costs` |
| `first_referrer` | First referring URL | `https://www.google.com/` |
| `first_touch_date` | Date of first visit | `2026-11-18` |

When there are no UTMs, the script works out the source from the referrer: search engines become `organic`, social sites `organic-social`, AI assistants `ai-assistant`, other sites `referral`, and no referrer on a first visit becomes `(direct) / (none)`.

## Platform instructions

### Plain HTML form
```html
<form action="/submit" method="post">
  <input name="email" type="email" required>
  <input type="hidden" name="utm_source">
  <input type="hidden" name="utm_medium">
  <input type="hidden" name="utm_campaign">
  <input type="hidden" name="utm_content">
  <input type="hidden" name="first_utm_source">
  <input type="hidden" name="first_utm_medium">
  <input type="hidden" name="landing_page">
  <button type="submit">Book a demo</button>
</form>
```

### HubSpot
1. **Settings → Properties → Create property** (Contact): create single-line text properties named `utm_source`, `first_utm_source`, etc. (HubSpot also has its own "Original source" properties; these give you your own UTM-level detail.)
2. In the form editor, add each property → set it to **Hidden**.
3. HubSpot can fill hidden fields from URL parameters itself, but that only works on the landing page. For forms on later pages, use the script with HubSpot's **raw HTML** form embed, or a non-iframe embed, so the script can reach the fields. (Scripts on your page can't fill fields inside an iframe.)

### Webflow
1. In the form, add an **Embed** element containing the hidden inputs above.
2. Add the script in **Site settings → Custom code → Footer**, or via GTM.
3. Webflow form submissions include the hidden fields; send them on to your CRM with Webflow's integrations, Zapier or Make.

### WordPress (Contact Form 7, Gravity Forms, WPForms, Elementor)
Add hidden fields with the names above (each plugin has a "Hidden" field type, and some can pre-fill from URL parameters). Add the script with GTM or a header/footer plugin.

### Typeform / Tally / embedded iframes
These run in iframes, so the script can't fill them. Use their own **hidden fields** feature and pass values in the embed URL, reading them with `window.UTMCapture.get()`.

## Step 3: check it works

1. Open your site in a private window with `?utm_source=test&utm_medium=test&utm_campaign=test`.
2. Open the browser console and run `UTMCapture.get()`. You should see `first` and `last` with your test values.
3. Submit the form, then check the new contact in your CRM has the values.
4. Run `UTMCapture.reset()` to clear your test data.

## Privacy

The script stores marketing source data (not personal data) in the visitor's browser. If you need consent before storing it, only fire the GTM tag after consent is given.
