---
title: "Interface: IframeContentScriptUi<TMounted> – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/content-script-ui/iframe/interfaces/IframeContentScriptUi.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/content-script-ui/iframe](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/index.html) > IframeContentScriptUi

# Interface: IframeContentScriptUi`<TMounted>` [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#interface-iframecontentscriptui-tmounted)

## Contents [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#extends)
* [Type parameters](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#type-parameters)
* [Properties](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#properties)
  + [autoMount](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#automount)
  + [iframe](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#iframe)
  + [mount](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#mount)
  + [mounted](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#mounted)
  + [remove](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#remove)
  + [wrapper](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#wrapper)

## Extends [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#extends)

* [`ContentScriptUi`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html)<`TMounted`>

## Type parameters [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#type-parameters)

▪ **TMounted**

## Properties [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#properties)

### autoMount [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#automount)

> **autoMount**: (`options`?) => `void`

Call `ui.autoMount()` to automatically mount and remove the UI as the anchor is dynamically added/removed by the webpage.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#parameters)

▪ **options?**: [`AutoMountOptions`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/type-aliases/automountoptions.html)

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#inherited-from)

[`ContentScriptUi`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html).[`autoMount`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#automount)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#source)

[packages/wxt/src/utils/content-script-ui/types.ts:120](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L120)

---

### iframe [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#iframe)

> **iframe**: `HTMLIFrameElement`

The iframe added to the DOM.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#source-1)

[packages/wxt/src/utils/content-script-ui/iframe.ts:53](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/iframe.ts#L53)

---

### mount [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#mount)

> **mount**: () => `void`

Function that mounts or remounts the UI on the page.

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#inherited-from-1)

[`ContentScriptUi`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html).[`mount`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#mount)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#source-2)

[packages/wxt/src/utils/content-script-ui/types.ts:109](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L109)

---

### mounted [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#mounted)

> **mounted**: `undefined` | `TMounted`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#inherited-from-2)

[`ContentScriptUi`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html).[`mounted`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#mounted)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#source-3)

[packages/wxt/src/utils/content-script-ui/types.ts:4](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L4)

---

### remove [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#remove)

> **remove**: () => `void`

Function that removes the UI from the webpage.

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#inherited-from-3)

[`ContentScriptUi`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html).[`remove`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#remove)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#source-4)

[packages/wxt/src/utils/content-script-ui/types.ts:112](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L112)

---

### wrapper [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#wrapper)

> **wrapper**: `HTMLDivElement`

A wrapper div that assists in positioning.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/iframe/interfaces/iframecontentscriptui.html#source-5)

[packages/wxt/src/utils/content-script-ui/iframe.ts:55](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/iframe.ts#L55)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
