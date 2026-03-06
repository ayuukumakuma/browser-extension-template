---
title: "Interface: ReloadContentScriptPayload – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/reloadcontentscriptpayload"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/ReloadContentScriptPayload.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > ReloadContentScriptPayload

# Interface: ReloadContentScriptPayload [​](https://wxt.dev/api/reference/wxt/interfaces/reloadcontentscriptpayload.html#interface-reloadcontentscriptpayload)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/reloadcontentscriptpayload.html#contents)

* [Properties](https://wxt.dev/api/reference/wxt/interfaces/reloadcontentscriptpayload.html#properties)
  + [contentScript](https://wxt.dev/api/reference/wxt/interfaces/reloadcontentscriptpayload.html#contentscript)
  + [registration](https://wxt.dev/api/reference/wxt/interfaces/reloadcontentscriptpayload.html#registration)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/reloadcontentscriptpayload.html#properties)

### contentScript [​](https://wxt.dev/api/reference/wxt/interfaces/reloadcontentscriptpayload.html#contentscript)

> **contentScript**: `Omit`<`RegisteredContentScript`, `"id"`>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/reloadcontentscriptpayload.html#source)

[packages/wxt/src/types.ts:536](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L536)

---

### registration [​](https://wxt.dev/api/reference/wxt/interfaces/reloadcontentscriptpayload.html#registration)

> **registration**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`"runtime"` | `"manifest"`>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/reloadcontentscriptpayload.html#source-1)

[packages/wxt/src/types.ts:535](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L535)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
