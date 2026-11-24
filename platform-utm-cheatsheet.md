# Platform UTM cheat sheet

Ready-to-use setups for each channel. Replace `example.com` and the campaign names.

## Google Ads

**Use auto-tagging, not manual UTMs.** Google Ads adds a `gclid` to every click, and when Google Ads is linked to GA4, GA4 fills in campaign, ad group and keyword automatically.

1. Google Ads → Admin → Account settings → **Auto-tagging: on**
2. GA4 → Admin → Product links → **Google Ads links** → link your account
3. Optional: add a **final URL suffix** (Account or Campaign settings) for your CRM, since the CRM can't read `gclid` data from GA4:

```
utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={creative}&utm_term={keyword}
```

`{campaignid}`, `{creative}` and `{keyword}` are Google Ads ValueTrack parameters, filled in automatically. Other useful ones: `{adgroupid}`, `{matchtype}`, `{device}`, `{network}`.

## Meta (Facebook & Instagram) Ads

In each ad: **Ad setup → Tracking → URL parameters → Build a URL parameter**, or paste:

```
utm_source={{site_source_name}}&utm_medium=paid-social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{adset.name}}
```

- `{{site_source_name}}` becomes `fb`, `ig`, `msg` or `an` (Audience Network), so you can see Facebook vs Instagram.
- `{{campaign.name}}`, `{{adset.name}}` and `{{ad.name}}` use your Meta names, so **name your campaigns in lowercase with hyphens** (or accept mixed case in reports).
- **Click-to-WhatsApp/Messenger ads** have no website click, so UTMs don't apply. Track those by pre-filled message and ad name (see the [Meta message-testing kit](https://github.com/shahshivani120-lab/meta-ads-message-testing)).

## LinkedIn Ads

Campaign Manager can add UTMs automatically. In the campaign, open the **URL tracking / UTM parameters** settings and choose dynamic values (such as campaign name or ID) or type static ones:

```
utm_source=linkedin&utm_medium=paid-social&utm_campaign=[campaign-name]&utm_content=[ad-name]
```

For **Lead Gen Form** ads, leads stay inside LinkedIn: connect LinkedIn to your CRM (native integration or a tool like Zapier) and record the campaign name as the lead source.

## Organic LinkedIn (company page and founder posts)

```
https://example.com/[page]?utm_source=linkedin&utm_medium=organic-social&utm_campaign=founder-linkedin&utm_content=post-2026-11-18
```

- Use `utm_campaign=company-page` for company-page posts and `founder-linkedin` for founder posts, so you can compare them.
- Put links in the **first comment** if you find posts with links get less reach.
- For the profile **custom button** and **Featured** links: `utm_campaign=profile&utm_content=custom-button`.

## Email (newsletters and sequences)

```
utm_source=newsletter&utm_medium=email&utm_campaign=nov-2026-newsletter&utm_content=cta-header
```

- Many email tools (HubSpot, Mailchimp, Brevo) can add UTMs automatically. Check their settings use your naming rules.
- Tag each link position differently in `utm_content` (`cta-header`, `cta-footer`, `text-link-2`) to see which gets clicks.
- **Email signature:** `utm_source=email-signature&utm_medium=email&utm_campaign=always-on`

## WhatsApp, Slack and Teams links you share

```
utm_source=whatsapp&utm_medium=messaging&utm_campaign=[campaign]
```

Without UTMs, these clicks often show as "(direct)" because messaging apps don't pass a referrer.

## QR codes

```
utm_source=[event-or-place]&utm_medium=qr&utm_campaign=[campaign]&utm_content=[where-it-was-printed]
```

Generate the QR **from the full tagged URL**. Use a different `utm_content` for each print location (banner, flyer, table card).

## Partners, directories and guest posts

```
utm_source=partner-[name]&utm_medium=referral&utm_campaign=[campaign]
```

For review sites: `utm_source=g2&utm_medium=referral&utm_campaign=profile-listing`

## Podcasts, webinars and events

Use a short, memorable URL that redirects to a tagged URL:

```
example.com/podcast  →  https://example.com/?utm_source=podcast-[show]&utm_medium=podcast&utm_campaign=[episode]
```

## AI assistants (ChatGPT, Perplexity…)

You can't tag links that AI assistants show. Instead:
- ChatGPT often adds `utm_source=chatgpt.com` to links it shows, so it appears as a source in GA4.
- For the rest, set up the [AI assistants channel group](ai-traffic-channel-group.md) to group them by referrer.
