---
title: "Interface: InjectScriptResult – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptresult"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/inject-script/interfaces/InjectScriptResult.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/inject-script](https://wxt.dev/api/reference/wxt/utils/inject-script/index.html) > InjectScriptResult

# Interface: InjectScriptResult [​](https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptresult.html#interface-injectscriptresult)

## Contents [​](https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptresult.html#contents)

* [Properties](https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptresult.html#properties)
  + [script](https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptresult.html#script)

## Properties [​](https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptresult.html#properties)

### script [​](https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptresult.html#script)

> **script**: `HTMLScriptElement`

The created script element. It can be used to e.g. send messages to the script in the form of custom events. The script can add an event listener for them via `document.currentScript`.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptresult.html#source)

[packages/wxt/src/utils/inject-script.ts:98](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/inject-script.ts#L98)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
