---
title: "Interface: ContentScriptUi<TMounted> – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/content-script-ui/types/interfaces/ContentScriptUi.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/content-script-ui/types](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/index.html) > ContentScriptUi

# Interface: ContentScriptUi`<TMounted>` [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#interface-contentscriptui-tmounted)

## Contents [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#extends)
* [Type parameters](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#type-parameters)
* [Properties](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#properties)
  + [autoMount](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#automount)
  + [mount](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#mount)
  + [mounted](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#mounted)
  + [remove](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#remove)

## Extends [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#extends)

* [`MountFunctions`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html)

## Type parameters [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#type-parameters)

▪ **TMounted**

## Properties [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#properties)

### autoMount [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#automount)

> **autoMount**: (`options`?) => `void`

Call `ui.autoMount()` to automatically mount and remove the UI as the anchor is dynamically added/removed by the webpage.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#parameters)

▪ **options?**: [`AutoMountOptions`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/type-aliases/automountoptions.html)

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#inherited-from)

[`MountFunctions`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html).[`autoMount`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#automount)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#source)

[packages/wxt/src/utils/content-script-ui/types.ts:120](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L120)

---

### mount [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#mount)

> **mount**: () => `void`

Function that mounts or remounts the UI on the page.

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#inherited-from-1)

[`MountFunctions`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html).[`mount`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#mount)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#source-1)

[packages/wxt/src/utils/content-script-ui/types.ts:109](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L109)

---

### mounted [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#mounted)

> **mounted**: `undefined` | `TMounted`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#source-2)

[packages/wxt/src/utils/content-script-ui/types.ts:4](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L4)

---

### remove [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#remove)

> **remove**: () => `void`

Function that removes the UI from the webpage.

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#inherited-from-2)

[`MountFunctions`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html).[`remove`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#remove)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#source-3)

[packages/wxt/src/utils/content-script-ui/types.ts:112](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L112)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
