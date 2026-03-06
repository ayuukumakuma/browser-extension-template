---
title: "Interface: ExtensionRunner – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/extensionrunner"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/ExtensionRunner.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > ExtensionRunner

# Interface: ExtensionRunner [​](https://wxt.dev/api/reference/wxt/interfaces/extensionrunner.html#interface-extensionrunner)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/extensionrunner.html#contents)

* [Methods](https://wxt.dev/api/reference/wxt/interfaces/extensionrunner.html#methods)
  + [canOpen()](https://wxt.dev/api/reference/wxt/interfaces/extensionrunner.html#canopen)
  + [closeBrowser()](https://wxt.dev/api/reference/wxt/interfaces/extensionrunner.html#closebrowser)
  + [openBrowser()](https://wxt.dev/api/reference/wxt/interfaces/extensionrunner.html#openbrowser)

## Methods [​](https://wxt.dev/api/reference/wxt/interfaces/extensionrunner.html#methods)

### canOpen() [​](https://wxt.dev/api/reference/wxt/interfaces/extensionrunner.html#canopen)

> **`optional`** **canOpen**(): `boolean`

Whether or not this runner actually opens the browser.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/extensionrunner.html#source)

[packages/wxt/src/types.ts:1482](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1482)

---

### closeBrowser() [​](https://wxt.dev/api/reference/wxt/interfaces/extensionrunner.html#closebrowser)

> **`optional`** **closeBrowser**(): `Promise`<`void`>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/extensionrunner.html#source-1)

[packages/wxt/src/types.ts:1479](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1479)

---

### openBrowser() [​](https://wxt.dev/api/reference/wxt/interfaces/extensionrunner.html#openbrowser)

> **openBrowser**(): `Promise`<`void`>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/extensionrunner.html#source-2)

[packages/wxt/src/types.ts:1477](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1477)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
