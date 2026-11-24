# UTM naming convention

## Golden rules

1. **Lowercase only.** GA4 treats `LinkedIn` and `linkedin` as different sources.
2. **Hyphens, not spaces or underscores** inside values: `black-friday-2026`.
3. **Never tag internal links** (links from your own site to your own site). It resets the session source.
4. **Log every link** in [`utm-builder.csv`](utm-builder.csv) before it goes out.
5. **Same campaign name across channels** so you can compare them.

## Parameters

| Parameter | What it means | Allowed values (examples) |
|---|---|---|
| `utm_source` | Where the click came from | `linkedin`, `facebook`, `instagram`, `google`, `newsletter`, `whatsapp`, `partner-name` |
| `utm_medium` | The type of traffic | `paid-social`, `organic-social`, `cpc`, `email`, `referral`, `qr`, `messaging` |
| `utm_campaign` | The campaign or initiative | `black-friday-2026`, `free-hardware-offer`, `founder-linkedin` |
| `utm_content` | Which ad, post or link variant | `hook-free-hardware`, `hook-89-price`, `post-2026-11-18`, `cta-pricing` |
| `utm_term` | Paid search keyword (optional) | `pos-for-cafes` |

## Medium values map to GA4 channels

Use these exact mediums so GA4's default channel grouping sorts traffic correctly:

| Use this `utm_medium` | GA4 default channel |
|---|---|
| `cpc` | Paid Search (with a search source) |
| `paid-social` | Paid Social |
| `organic-social` | Organic Social |
| `email` | Email |
| `referral` | Referral |

Custom mediums (`qr`, `messaging`) land in "Unassigned" unless you create a custom channel group. That's fine, but be consistent.

## Examples

```
Founder LinkedIn post:
https://example.com/?utm_source=linkedin&utm_medium=organic-social&utm_campaign=founder-linkedin&utm_content=post-2026-11-18

Meta ad testing one hook:
https://example.com/pricing?utm_source=facebook&utm_medium=paid-social&utm_campaign=free-hardware-offer&utm_content=hook-free-hardware

Monthly newsletter:
https://example.com/?utm_source=newsletter&utm_medium=email&utm_campaign=nov-2026-newsletter&utm_content=cta-demo
```
