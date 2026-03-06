---
title: "Interface: InjectScriptOptions – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptoptions"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/inject-script/interfaces/InjectScriptOptions.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/inject-script](https://wxt.dev/api/reference/wxt/utils/inject-script/index.html) > InjectScriptOptions

# Interface: InjectScriptOptions [​](https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptoptions.html#interface-injectscriptoptions)

## Contents [​](https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptoptions.html#contents)

* [Properties](https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptoptions.html#properties)
  + [keepInDom](https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptoptions.html#keepindom)
  + [modifyScript](https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptoptions.html#modifyscript)

## Properties [​](https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptoptions.html#properties)

### keepInDom [​](https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptoptions.html#keepindom)

> **keepInDom**?: `boolean`

By default, the injected script is removed from the DOM after being injected. To disable this behavior, set this flag to true.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptoptions.html#source)

[packages/wxt/src/utils/inject-script.ts:81](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/inject-script.ts#L81)

---

### modifyScript [​](https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptoptions.html#modifyscript)

> **modifyScript**?: (`script`) => `void` | `Promise`<`void`>

Modify the script element just before it is added to the DOM.

It can be used to e.g. modify `script.async`/`script.defer`, add event listeners to the element, or pass data to the script via `script.dataset` (which can be accessed by the script via `document.currentScript`).

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptoptions.html#parameters)

▪ **script**: `HTMLScriptElement`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/inject-script/interfaces/injectscriptoptions.html#source-1)

[packages/wxt/src/utils/inject-script.ts:89](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/inject-script.ts#L89)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
