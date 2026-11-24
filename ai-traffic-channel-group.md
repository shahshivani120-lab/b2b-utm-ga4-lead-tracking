# Track AI assistant traffic in GA4

Visits from ChatGPT, Perplexity, Copilot, Gemini and other AI assistants usually land in GA4's "Referral" channel, mixed in with every other website. A custom channel group gives them their own row, so you can see whether AI search is bringing visitors and leads.

For one US B2B client (SRA HQ, Jan–Sep 2026), ChatGPT referral visitors engaged at **34%** vs **19%** for Google organic: small in volume (205 sessions), but high in quality.

## Step 1: create the channel group

1. GA4 → **Admin → Data display → Channel groups**
2. Click **Create new channel group** (it starts as a copy of the default group)
3. Name it **"Channels + AI"**

## Step 2: add an "AI assistants" channel

1. Click **Add new channel** → name it **AI assistants**
2. Condition: **Source** → **matches regex** →

```
.*(chatgpt|openai|perplexity|copilot\.microsoft|gemini\.google|claude\.ai|deepseek|meta\.ai|poe\.com|you\.com|mistral\.ai).*
```

3. Save the channel
4. **Reorder** so "AI assistants" sits **above "Referral"** (GA4 assigns each session to the first channel it matches)
5. Save the channel group

## Step 3: use it in reports

- **Reports → Acquisition → Traffic acquisition** → click the dimension picker → choose **Session "Channels + AI"**
- In **Explorations**, add the dimension "Session Channels + AI" or "First user Channels + AI"
- In **Looker Studio**, the custom channel group is available as a dimension in the GA4 connector

Custom channel groups apply to past data as well, so you can see history straight away.

## Step 4: check which AI sources you get

Reports → Acquisition → Traffic acquisition → dimension **Session source** → search for `chatgpt`, `perplexity`, `copilot`, `gemini`. Add any new AI sources you see to the regex.

## What to look at monthly

| Metric | Why |
|---|---|
| Sessions from AI assistants | Is AI search sending you visitors at all? |
| Engagement rate vs Organic Search | AI visitors often arrive with a specific question |
| Key events (leads, bookings) | Is AI traffic turning into pipeline? |
| Landing pages | Which pages AI assistants link to: often comparison and buyer-guide pages |

## Notes

- Not every AI visit is visible. Some AI apps don't pass a referrer, so those visits look like "Direct".
- ChatGPT often adds `utm_source=chatgpt.com` to links it shows, which helps.
- To see what AI assistants **say** about your brand (not just traffic), see the [AI search visibility audit kit](https://github.com/shahshivani120-lab/ai-search-visibility-audit).
