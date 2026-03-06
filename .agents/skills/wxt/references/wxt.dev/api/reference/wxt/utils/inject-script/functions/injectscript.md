---
title: "Function: injectScript() – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/inject-script/functions/injectscript"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/inject-script/functions/injectScript.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/inject-script](https://wxt.dev/api/reference/wxt/utils/inject-script/index.html) > injectScript

# Function: injectScript() [​](https://wxt.dev/api/reference/wxt/utils/inject-script/functions/injectscript.html#function-injectscript)

> **injectScript**(`path`, `options`?): `Promise`<[`InjectScriptResult`](https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptresult.html)>

This function can only be called inside content scripts.

Inject an unlisted script into the page. Scripts are added to the `<head>` element or `document.documentElement` if there is no head.

Make sure to add the injected script to your manifest's `web_accessible_resources`.

## Parameters [​](https://wxt.dev/api/reference/wxt/utils/inject-script/functions/injectscript.html#parameters)

▪ **path**: `any`

▪ **options?**: [`InjectScriptOptions`](https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptoptions.html)

## Returns [​](https://wxt.dev/api/reference/wxt/utils/inject-script/functions/injectscript.html#returns)

A result object containing the created script element.

## Source [​](https://wxt.dev/api/reference/wxt/utils/inject-script/functions/injectscript.html#source)

[packages/wxt/src/utils/inject-script.ts:21](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/inject-script.ts#L21)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
