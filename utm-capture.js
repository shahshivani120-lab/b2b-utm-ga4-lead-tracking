/*!
 * utm-capture.js — first-touch and last-touch attribution for B2B lead forms
 * Free to use. By Shivani Shah · https://github.com/shahshivani120-lab/b2b-utm-ga4-lead-tracking
 *
 * What it does
 *  1. Reads UTM parameters and click IDs (gclid, fbclid, msclkid, li_fat_id) from the URL.
 *  2. If there are none, works out the source from the referrer (search, social, AI assistant, referral).
 *  3. Saves FIRST touch (kept for `days`) and LAST touch (updated on every tagged visit) in localStorage.
 *  4. Fills hidden form fields named e.g. utm_source / first_utm_source / landing_page, including forms
 *     that load later (watches the page for new forms).
 *
 * How to install (see crm-hidden-fields.md for details)
 *  - Add this file to every page, before </body>, or paste it into a GTM Custom HTML tag (All Pages).
 *  - Add hidden fields to your form with the names listed in FIELD_NAMES below.
 *  - Read values in your own code with:  window.UTMCapture.get()  →  { first: {...}, last: {...} }
 */
(function (window, document) {
  'use strict';

  var CONFIG = {
    days: 90,                         // how long first touch is remembered
    storageKey: 'utm_capture_v1',
    params: ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'],
    clickIds: { gclid: 'google', fbclid: 'facebook', msclkid: 'bing', li_fat_id: 'linkedin' },
    searchEngines: /(^|\.)(google|bing|yahoo|duckduckgo|ecosia|baidu|yandex|brave)\./i,
    social: /(^|\.)(linkedin|lnkd|facebook|fb|instagram|t|x|twitter|youtube|reddit|threads)\.(com|me|in|co)$/i,
    aiAssistants: /(chatgpt\.com|chat\.openai\.com|perplexity\.ai|copilot\.microsoft\.com|gemini\.google\.com|claude\.ai|chat\.deepseek\.com|meta\.ai|you\.com|poe\.com)$/i
  };

  // Hidden field names this script fills. Rename the right-hand side to match your form.
  var FIELD_NAMES = {
    'last.utm_source': 'utm_source',
    'last.utm_medium': 'utm_medium',
    'last.utm_campaign': 'utm_campaign',
    'last.utm_content': 'utm_content',
    'last.utm_term': 'utm_term',
    'last.click_id': 'click_id',
    'first.utm_source': 'first_utm_source',
    'first.utm_medium': 'first_utm_medium',
    'first.utm_campaign': 'first_utm_campaign',
    'first.utm_content': 'first_utm_content',
    'first.landing_page': 'landing_page',
    'first.referrer': 'first_referrer',
    'first.timestamp': 'first_touch_date'
  };

  function safeGet() {
    try { return JSON.parse(window.localStorage.getItem(CONFIG.storageKey)) || {}; }
    catch (e) { return {}; }
  }
  function safeSet(data) {
    try { window.localStorage.setItem(CONFIG.storageKey, JSON.stringify(data)); } catch (e) { /* private mode */ }
  }
  function hostOf(url) {
    try { return new URL(url).hostname.replace(/^www\./, '').toLowerCase(); } catch (e) { return ''; }
  }

  function fromUrl() {
    var q = new URLSearchParams(window.location.search);
    var t = {}, found = false;
    CONFIG.params.forEach(function (p) {
      var v = q.get(p);
      if (v) { t[p] = v.trim().toLowerCase(); found = true; }
    });
    Object.keys(CONFIG.clickIds).forEach(function (id) {
      var v = q.get(id);
      if (v) {
        t.click_id = id + ':' + v;
        if (!t.utm_source) t.utm_source = CONFIG.clickIds[id];
        if (!t.utm_medium) t.utm_medium = 'paid';
        found = true;
      }
    });
    return found ? t : null;
  }

  function fromReferrer() {
    var ref = document.referrer;
    var host = hostOf(ref);
    if (!host || host === window.location.hostname.replace(/^www\./, '')) return null; // direct or internal
    if (CONFIG.aiAssistants.test(host)) return { utm_source: host, utm_medium: 'ai-assistant' };
    var se = host.match(CONFIG.searchEngines);
    if (se) return { utm_source: se[2].toLowerCase(), utm_medium: 'organic' };
    if (CONFIG.social.test(host)) return { utm_source: host, utm_medium: 'organic-social' };
    return { utm_source: host, utm_medium: 'referral' };
  }

  function capture() {
    var data = safeGet();
    var now = Date.now();
    var touch = fromUrl() || fromReferrer();

    // Expire an old first touch
    if (data.first && data.first.ts && now - data.first.ts > CONFIG.days * 864e5) delete data.first;

    if (touch) {
      touch.landing_page = window.location.origin + window.location.pathname;
      touch.referrer = document.referrer || '';
      touch.ts = now;
      touch.timestamp = new Date(now).toISOString().slice(0, 10);
      data.last = touch;
      if (!data.first) data.first = touch;
    } else if (!data.first) {
      // First ever visit with no source information = direct
      data.first = {
        utm_source: '(direct)', utm_medium: '(none)',
        landing_page: window.location.origin + window.location.pathname,
        referrer: '', ts: now, timestamp: new Date(now).toISOString().slice(0, 10)
      };
      data.last = data.first;
    }
    safeSet(data);
    return data;
  }

  function fill(root) {
    var data = safeGet();
    Object.keys(FIELD_NAMES).forEach(function (path) {
      var parts = path.split('.');
      var value = data[parts[0]] && data[parts[0]][parts[1]];
      if (value === undefined || value === null) return;
      var inputs = (root || document).querySelectorAll('input[name="' + FIELD_NAMES[path] + '"]');
      Array.prototype.forEach.call(inputs, function (el) {
        if (!el.value) {
          el.value = value;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          el.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });
    });
  }

  capture();

  function start() {
    fill(document);
    if ('MutationObserver' in window) {
      new MutationObserver(function (mutations) {
        for (var i = 0; i < mutations.length; i++) {
          if (mutations[i].addedNodes.length) { fill(document); break; }
        }
      }).observe(document.body, { childList: true, subtree: true });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();

  window.UTMCapture = {
    get: safeGet,
    fill: fill,
    reset: function () { try { window.localStorage.removeItem(CONFIG.storageKey); } catch (e) {} }
  };
})(window, document);
