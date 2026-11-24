# Google Tag Manager setup guide

Step-by-step setup for GA4 and the events a B2B funnel needs. Every step uses GTM's standard interface; nothing needs a developer except adding the GTM snippet once.

## 0. Install GTM (once)

1. Create a container at [tagmanager.google.com](https://tagmanager.google.com) (type: Web).
2. Add the two GTM snippets to every page: one in `<head>`, one right after `<body>`. Most website builders (Webflow, WordPress plugins, Framer, Wix) have a field for this.
3. **Remove any GA4 code added directly to the site** so you don't count visits twice.

## 1. GA4 base tag

| Setting | Value |
|---|---|
| Tag type | Google Tag |
| Tag ID | Your GA4 Measurement ID (`G-XXXXXXX`), from GA4 → Admin → Data streams |
| Trigger | Initialization – All Pages |

In GA4 → Admin → Data streams → your stream → **Enhanced measurement: on** (page views, scrolls, outbound clicks, site search, file downloads, form interactions).

## 2. Turn on built-in variables

GTM → Variables → **Configure** → tick: `Page URL`, `Page Path`, `Click URL`, `Click Text`, `Click Element`, `Form ID`, `Form Classes`, `Form URL`.

## 3. Lead form submitted → `generate_lead`

**Option A: thank-you page (most reliable).** If the form redirects to `/thank-you`:

| | |
|---|---|
| Trigger type | Page View |
| Fires on | Some Page Views → `Page Path` contains `/thank-you` |
| Tag type | Google Analytics: GA4 Event |
| Event name | `generate_lead` |
| Event parameters | `form_name` = `demo` (or the form's purpose) |

**Option B: form submission trigger** (form stays on the same page):

| | |
|---|---|
| Trigger type | Form Submission, tick **Check validation** |
| Fires on | Some Forms → `Form ID` equals `demo-form` (or `Page Path` contains `/demo`) |
| Tag | GA4 Event `generate_lead`, parameter `form_name` = `demo` |

Form submission triggers don't work with every form builder. If it doesn't fire in Preview, use Option A or C.

**Option C: HubSpot embedded forms.** Add a **Custom HTML** tag (trigger: All Pages):

```html
<script>
  window.addEventListener('message', function (event) {
    if (event.data && event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'hubspot_form_submit', form_id: event.data.id });
    }
  });
</script>
```

Then create a **Custom Event** trigger with event name `hubspot_form_submit` and fire the `generate_lead` GA4 event tag on it. (This uses HubSpot's form callback messages; check HubSpot's current documentation if your form version differs.)

## 4. WhatsApp click → `whatsapp_click`

| | |
|---|---|
| Trigger type | Click – Just Links |
| Fires on | Some Link Clicks → `Click URL` matches RegEx `wa\.me\|api\.whatsapp\.com\|web\.whatsapp\.com` |
| Tag | GA4 Event `whatsapp_click`, parameters: `link_url` = `{{Click URL}}`, `page` = `{{Page Path}}` |

## 5. Calendly booking → `book_call`

Calendly's embedded widget sends messages to the page. Add a **Custom HTML** tag (trigger: All Pages):

```html
<script>
  window.addEventListener('message', function (e) {
    if (e.origin === 'https://calendly.com' && e.data && e.data.event && e.data.event.indexOf('calendly.') === 0) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: e.data.event });   // e.g. calendly.event_scheduled
    }
  });
</script>
```

Create a **Custom Event** trigger: event name `calendly.event_scheduled`. Fire a GA4 Event tag named `book_call` on it.

For Calendly **links** (not embedded), track the click instead: Click – Just Links, `Click URL` contains `calendly.com` → GA4 event `booking_link_click`.

## 6. Pricing page view → `view_pricing`

| | |
|---|---|
| Trigger type | Page View |
| Fires on | `Page Path` contains `/pricing` |
| Tag | GA4 Event `view_pricing` |

## 7. Other useful events

| Event | Trigger | Why |
|---|---|---|
| `email_click` | Click – Just Links, `Click URL` starts with `mailto:` | Some buyers email instead of filling forms |
| `phone_click` | Click – Just Links, `Click URL` starts with `tel:` | Phone enquiries from mobile |
| `case_study_download` | Click – Just Links, `Click URL` ends with `.pdf` | Content interest (GA4 also logs `file_download`) |
| `sign_up` | Your app's sign-up confirmation page or dataLayer event | Product-led funnels |
| `demo_cta_click` | Click – All Elements, `Click Text` contains `Book a demo` | Which buttons drive demos |

## 8. UTM capture for your CRM

Add a **Custom HTML** tag on All Pages containing the full [`utm-capture.js`](utm-capture.js) wrapped in `<script>…</script>`, then add hidden fields to your forms ([how](crm-hidden-fields.md)).

## 9. Test and publish

1. Click **Preview** in GTM, open your site, and do each action (submit a test form, click WhatsApp, book a test call).
2. Check each tag shows **Fired** in Tag Assistant.
3. In GA4 → Admin → **DebugView**, check the events arrive with the right names.
4. **Submit** → name the version (e.g. "Lead tracking v1") → **Publish**.
5. Mark the events as key events in GA4 ([guide](ga4-key-events.md)). New events can take up to 24 hours to appear in the list.

See [`debugging-checklist.md`](debugging-checklist.md) if anything doesn't fire.

## Consent

If you have visitors in regions that require cookie consent (such as the EU/UK), set up a consent banner and **Google Consent Mode** before collecting analytics data. Many consent tools have a GTM template.
