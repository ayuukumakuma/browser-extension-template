---
title: "Type alias: IframeContentScriptUiOptions<TMounted> – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/type-aliases/iframecontentscriptuioptions"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/content-script-ui/iframe/type-aliases/IframeContentScriptUiOptions.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/content-script-ui/iframe](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/index.html) > IframeContentScriptUiOptions

# Type alias: IframeContentScriptUiOptions`<TMounted>` [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/type-aliases/iframecontentscriptuioptions.html#type-alias-iframecontentscriptuioptions-tmounted)

> **IframeContentScriptUiOptions**<`TMounted`>: [`ContentScriptUiOptions`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/type-aliases/contentscriptuioptions.html)<`TMounted`> & `object`

## Type declaration [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/type-aliases/iframecontentscriptuioptions.html#type-declaration)

### onBeforeMount [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/type-aliases/iframecontentscriptuioptions.html#onbeforemount)

> **onBeforeMount**?: (`wrapper`, `iframe`) => `void`

Callback executed before mounting the UI. Use this function to customize the iframe or wrapper elements before they are injected into the DOM. It is called every time `ui.mount()` is called.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/type-aliases/iframecontentscriptuioptions.html#parameters)

▪ **wrapper**: `HTMLElement`

▪ **iframe**: `HTMLIFrameElement`

### onMount [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/type-aliases/iframecontentscriptuioptions.html#onmount)

> **onMount**?: (`wrapper`, `iframe`) => `TMounted`

Callback executed when mounting the UI. Use this function to customize the iframe or wrapper element's appearance. It is called every time `ui.mount()` is called.

Optionally return a value that can be accessed at `ui.mounted` or in the `onRemove` callback.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/type-aliases/iframecontentscriptuioptions.html#parameters-1)

▪ **wrapper**: `HTMLElement`

▪ **iframe**: `HTMLIFrameElement`

### page [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/type-aliases/iframecontentscriptuioptions.html#page)

> **page**: `HtmlPublicPath`

The path to the HTML page that will be shown in the iframe. This string is passed into `browser.runtime.getURL`.

## Type parameters [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/type-aliases/iframecontentscriptuioptions.html#type-parameters)

| Parameter |
| --- |
| `TMounted` |

## Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/type-aliases/iframecontentscriptuioptions.html#source)

[packages/wxt/src/utils/content-script-ui/iframe.ts:58](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/iframe.ts#L58)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
