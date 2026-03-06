---
title: "Interface: IntegratedContentScriptUi<TMounted> – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/content-script-ui/integrated/interfaces/IntegratedContentScriptUi.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/content-script-ui/integrated](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/index.html) > IntegratedContentScriptUi

# Interface: IntegratedContentScriptUi`<TMounted>` [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#interface-integratedcontentscriptui-tmounted)

## Contents [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#extends)
* [Type parameters](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#type-parameters)
* [Properties](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#properties)
  + [autoMount](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#automount)
  + [mount](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#mount)
  + [mounted](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#mounted)
  + [remove](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#remove)
  + [wrapper](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#wrapper)

## Extends [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#extends)

* [`ContentScriptUi`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html)<`TMounted`>

## Type parameters [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#type-parameters)

▪ **TMounted**

## Properties [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#properties)

### autoMount [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#automount)

> **autoMount**: (`options`?) => `void`

Call `ui.autoMount()` to automatically mount and remove the UI as the anchor is dynamically added/removed by the webpage.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#parameters)

▪ **options?**: [`AutoMountOptions`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/type-aliases/automountoptions.html)

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#inherited-from)

[`ContentScriptUi`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html).[`autoMount`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#automount)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#source)

[packages/wxt/src/utils/content-script-ui/types.ts:120](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L120)

---

### mount [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#mount)

> **mount**: () => `void`

Function that mounts or remounts the UI on the page.

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#inherited-from-1)

[`ContentScriptUi`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html).[`mount`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#mount)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#source-1)

[packages/wxt/src/utils/content-script-ui/types.ts:109](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L109)

---

### mounted [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#mounted)

> **mounted**: `undefined` | `TMounted`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#inherited-from-2)

[`ContentScriptUi`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html).[`mounted`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#mounted)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#source-2)

[packages/wxt/src/utils/content-script-ui/types.ts:4](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L4)

---

### remove [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#remove)

> **remove**: () => `void`

Function that removes the UI from the webpage.

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#inherited-from-3)

[`ContentScriptUi`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html).[`remove`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#remove)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#source-3)

[packages/wxt/src/utils/content-script-ui/types.ts:112](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L112)

---

### wrapper [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#wrapper)

> **wrapper**: `HTMLElement`

A wrapper div that assists in positioning.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/integrated/interfaces/integratedcontentscriptui.html#source-4)

[packages/wxt/src/utils/content-script-ui/integrated.ts:58](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/integrated.ts#L58)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
