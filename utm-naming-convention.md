# UTM naming convention

UTM parameters are tags you add to a link so analytics knows where a visitor came from. Without one shared set of rules, the same channel shows up as five different rows and your reports can't be trusted.

## The 7 golden rules

1. **Lowercase only.** GA4 treats `LinkedIn` and `linkedin` as two different sources.
2. **Hyphens between words.** `black-friday-2026`, not `Black Friday 2026` or `black_friday_2026`.
3. **Never tag internal links** (links from your site to your own site). It starts a new session and overwrites the real source.
4. **Use only the allowed values** below for `utm_source` and `utm_medium`. Add new ones to the list before using them.
5. **Same campaign name everywhere** for one initiative, so you can compare channels.
6. **Log every link** in the [workbook](tracking-workbook.xlsx) before it goes out.
7. **Don't put personal data in UTMs** (no emails, names or phone numbers).

## The five parameters

| Parameter | Required | Question it answers | Format |
|---|---|---|---|
| `utm_source` | ✅ | **Who** sent the visitor? (the platform or site) | `linkedin`, `google`, `newsletter` |
| `utm_medium` | ✅ | **What type** of traffic? (paid, email, social…) | from the allowed list below |
| `utm_campaign` | ✅ | **Why**: which campaign or initiative? | `[topic]-[yyyy-mm]` or `[offer]-[season]` |
| `utm_content` | Optional | **Which** ad, post, link or button? | `[variant]-[detail]` |
| `utm_term` | Optional | Which keyword or audience? | `[keyword]` or `[audience]` |

## Allowed `utm_medium` values

These map to GA4's default channel groups, so traffic lands in the right row automatically.

| `utm_medium` | Use for | GA4 default channel |
|---|---|---|
| `cpc` | Paid search ads | Paid Search |
| `paid-social` | Paid ads on LinkedIn, Meta, X, TikTok | Paid Social |
| `display` | Banner / display ads | Display |
| `organic-social` | Your own social posts (company or founder) | Organic Social |
| `email` | Newsletters, sequences, one-off emails | Email |
| `referral` | Partner sites, directories, guest posts | Referral |
| `affiliate` | Affiliate links | Affiliates |
| `sms` | SMS messages | SMS |
| `messaging` | WhatsApp, Messenger, Slack, Teams links you send | Unassigned* |
| `qr` | QR codes on print, events, packaging | Unassigned* |
| `podcast` / `video` / `event` | Offline or audio mentions with a link | Unassigned* |

\* Custom mediums land in "Unassigned" in GA4's default channel group. That's fine if you're consistent, or create a [custom channel group](ai-traffic-channel-group.md) for them.

## Allowed `utm_source` values (starter list)

`google`, `bing`, `linkedin`, `facebook`, `instagram`, `x`, `youtube`, `tiktok`, `reddit`, `newsletter`, `hubspot`, `mailchimp`, `whatsapp`, `slack`, `partner-[name]`, `event-[name]`, `podcast-[name]`, `g2`, `capterra`, `producthunt`

## Campaign naming patterns

| Pattern | Example | Use for |
|---|---|---|
| `[topic]-[yyyy-mm]` | `cloud-costs-2026-11` | Ongoing content themes |
| `[offer]-[season-yyyy]` | `free-audit-bf-2026` | Offers and promotions |
| `[product]-launch-[yyyy-mm]` | `rg-agent-launch-2026-10` | Launches |
| `always-on` | `always-on` | Evergreen links (bio links, signatures) |
| `founder-linkedin` | `founder-linkedin` | Founder-led LinkedIn content |

## Content naming patterns

| Pattern | Example |
|---|---|
| Ad variant | `hook-free-hardware`, `video-b`, `carousel-3` |
| Post | `post-2026-11-18` |
| Link position in an email | `cta-header`, `cta-footer`, `text-link-2` |
| Button | `cta-pricing`, `cta-demo` |

## Examples

```
Founder LinkedIn post
https://example.com/?utm_source=linkedin&utm_medium=organic-social&utm_campaign=founder-linkedin&utm_content=post-2026-11-18

Meta ad testing one hook
https://example.com/pricing?utm_source=facebook&utm_medium=paid-social&utm_campaign=free-hardware-bf-2026&utm_content=hook-free-hardware

Monthly newsletter, main button
https://example.com/demo?utm_source=newsletter&utm_medium=email&utm_campaign=nov-2026-newsletter&utm_content=cta-header

QR code on an event stand
https://example.com/?utm_source=event-saas-expo&utm_medium=qr&utm_campaign=saas-expo-2026&utm_content=stand-banner

Email signature (always on)
https://example.com/?utm_source=email-signature&utm_medium=email&utm_campaign=always-on
```

## Common mistakes

| ❌ Mistake | Why it hurts | ✅ Fix |
|---|---|---|
| `utm_source=LinkedIn` and `utm_source=linkedin` | Two rows for one channel | Lowercase only |
| `utm_medium=social` on paid ads | Paid and organic mixed together | `paid-social` vs `organic-social` |
| Tagging links on your own website | Overwrites the real source | Never tag internal links |
| Spaces in values (`%20` in reports) | Messy, hard to filter | Hyphens |
| Different campaign names per channel | Can't compare channels | One name per initiative |
| Tagging Google Ads manually AND auto-tagging | Conflicting data | Use auto-tagging for Google Ads (see [cheat sheet](platform-utm-cheatsheet.md)) |
| Putting UTMs after a `#` | Analytics can't read them | UTMs go before any `#anchor` |
