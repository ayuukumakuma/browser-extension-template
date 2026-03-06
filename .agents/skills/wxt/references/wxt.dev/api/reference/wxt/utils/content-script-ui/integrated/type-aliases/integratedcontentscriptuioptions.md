---
title: "Type alias: IntegratedContentScriptUiOptions<TMounted> – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/type-aliases/integratedcontentscriptuioptions"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/content-script-ui/integrated/type-aliases/IntegratedContentScriptUiOptions.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/content-script-ui/integrated](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/index.html) > IntegratedContentScriptUiOptions

# Type alias: IntegratedContentScriptUiOptions`<TMounted>` [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/type-aliases/integratedcontentscriptuioptions.html#type-alias-integratedcontentscriptuioptions-tmounted)

> **IntegratedContentScriptUiOptions**<`TMounted`>: [`ContentScriptUiOptions`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/type-aliases/contentscriptuioptions.html)<`TMounted`> & `object`

## Type declaration [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/type-aliases/integratedcontentscriptuioptions.html#type-declaration)

### onMount [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/type-aliases/integratedcontentscriptuioptions.html#onmount)

> **onMount**: (`wrapper`) => `TMounted`

Callback executed when mounting the UI. This function should create and append the UI to the `wrapper` element. It is called every time `ui.mount()` is called.

Optionally return a value that can be accessed at `ui.mounted` or in the `onRemove` callback.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/type-aliases/integratedcontentscriptuioptions.html#parameters)

▪ **wrapper**: `HTMLElement`

### tag [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/type-aliases/integratedcontentscriptuioptions.html#tag)

> **tag**?: `string`

Tag used to create the wrapper element.

#### Default [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/type-aliases/integratedcontentscriptuioptions.html#default)

ts

```
'div'
```

## Type parameters [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/type-aliases/integratedcontentscriptuioptions.html#type-parameters)

| Parameter |
| --- |
| `TMounted` |

## Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/type-aliases/integratedcontentscriptuioptions.html#source)

[packages/wxt/src/utils/content-script-ui/integrated.ts:61](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/integrated.ts#L61)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
