---
title: "Type alias: ContentScriptUiOptions<TMounted> – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/type-aliases/contentscriptuioptions"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/content-script-ui/types/type-aliases/ContentScriptUiOptions.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/content-script-ui/types](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/index.html) > ContentScriptUiOptions

# Type alias: ContentScriptUiOptions`<TMounted>` [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/type-aliases/contentscriptuioptions.html#type-alias-contentscriptuioptions-tmounted)

> **ContentScriptUiOptions**<`TMounted`>: [`ContentScriptPositioningOptions`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/type-aliases/contentscriptpositioningoptions.html) & [`ContentScriptAnchoredOptions`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptanchoredoptions.html) & `object`

## Type declaration [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/type-aliases/contentscriptuioptions.html#type-declaration)

### onRemove [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/type-aliases/contentscriptuioptions.html#onremove)

> **onRemove**?: (`mounted`) => `void`

Callback called before the UI is removed from the webpage. Use to cleanup your UI, like unmounting your Vue or React apps.

Note that this callback is called only when `ui.remove` is called - that means it is not called automatically when the anchor is removed, unless you use `autoMount`.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/type-aliases/contentscriptuioptions.html#parameters)

▪ **mounted**: `TMounted` | `undefined`

## Type parameters [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/type-aliases/contentscriptuioptions.html#type-parameters)

| Parameter |
| --- |
| `TMounted` |

## Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/type-aliases/contentscriptuioptions.html#source)

[packages/wxt/src/utils/content-script-ui/types.ts:7](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L7)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
