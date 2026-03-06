---
title: "Interface: MountFunctions – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/content-script-ui/types/interfaces/MountFunctions.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/content-script-ui/types](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/index.html) > MountFunctions

# Interface: MountFunctions [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#interface-mountfunctions)

## Contents [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#extends)
* [Properties](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#properties)
  + [autoMount](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#automount)
  + [mount](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#mount)
  + [remove](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#remove)

## Extends [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#extends)

* [`BaseMountFunctions`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/basemountfunctions.html)

## Properties [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#properties)

### autoMount [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#automount)

> **autoMount**: (`options`?) => `void`

Call `ui.autoMount()` to automatically mount and remove the UI as the anchor is dynamically added/removed by the webpage.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#parameters)

▪ **options?**: [`AutoMountOptions`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/type-aliases/automountoptions.html)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#source)

[packages/wxt/src/utils/content-script-ui/types.ts:120](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L120)

---

### mount [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#mount)

> **mount**: () => `void`

Function that mounts or remounts the UI on the page.

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#inherited-from)

[`BaseMountFunctions`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/basemountfunctions.html).[`mount`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/basemountfunctions.html#mount)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#source-1)

[packages/wxt/src/utils/content-script-ui/types.ts:109](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L109)

---

### remove [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#remove)

> **remove**: () => `void`

Function that removes the UI from the webpage.

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#inherited-from-1)

[`BaseMountFunctions`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/basemountfunctions.html).[`remove`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/basemountfunctions.html#remove)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/mountfunctions.html#source-2)

[packages/wxt/src/utils/content-script-ui/types.ts:112](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L112)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
