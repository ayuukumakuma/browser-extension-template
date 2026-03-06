---
title: "Function: createShadowRootUi() – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/functions/createshadowrootui"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/content-script-ui/shadow-root/functions/createShadowRootUi.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/content-script-ui/shadow-root](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/index.html) > createShadowRootUi

# Function: createShadowRootUi() [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/functions/createshadowrootui.html#function-createshadowrootui)

> **createShadowRootUi**<`TMounted`>(`ctx`, `options`): `Promise`<[`ShadowRootContentScriptUi`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html)<`TMounted`>>

Create a content script UI inside a [`ShadowRoot`](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot).

> This function is async because it has to load the CSS via a network call.

## Type parameters [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/functions/createshadowrootui.html#type-parameters)

▪ **TMounted**

## Parameters [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/functions/createshadowrootui.html#parameters)

▪ **ctx**: [`ContentScriptContext`](https://wxt.dev/api/reference/wxt/utils/content-script-context/classes/contentscriptcontext.html)

▪ **options**: [`ShadowRootContentScriptUiOptions`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/type-aliases/shadowrootcontentscriptuioptions.html)<`TMounted`>

## Returns [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/functions/createshadowrootui.html#returns)

## See [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/functions/createshadowrootui.html#see)

[https://wxt.dev/guide/essentials/content-scripts.html#shadow-root](https://wxt.dev/guide/essentials/content-scripts.html#shadow-root)

## Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/functions/createshadowrootui.html#source)

[packages/wxt/src/utils/content-script-ui/shadow-root.ts:18](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/shadow-root.ts#L18)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
