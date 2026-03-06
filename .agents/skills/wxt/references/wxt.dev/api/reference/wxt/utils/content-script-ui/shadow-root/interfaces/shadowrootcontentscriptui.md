---
title: "Interface: ShadowRootContentScriptUi<TMounted> – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/ShadowRootContentScriptUi.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/content-script-ui/shadow-root](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/index.html) > ShadowRootContentScriptUi

# Interface: ShadowRootContentScriptUi`<TMounted>` [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#interface-shadowrootcontentscriptui-tmounted)

## Contents [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#extends)
* [Type parameters](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#type-parameters)
* [Properties](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#properties)
  + [autoMount](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#automount)
  + [mount](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#mount)
  + [mounted](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#mounted)
  + [remove](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#remove)
  + [shadow](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#shadow)
  + [shadowHost](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#shadowhost)
  + [uiContainer](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#uicontainer)

## Extends [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#extends)

* [`ContentScriptUi`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html)<`TMounted`>

## Type parameters [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#type-parameters)

▪ **TMounted**

## Properties [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#properties)

### autoMount [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#automount)

> **autoMount**: (`options`?) => `void`

Call `ui.autoMount()` to automatically mount and remove the UI as the anchor is dynamically added/removed by the webpage.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#parameters)

▪ **options?**: [`AutoMountOptions`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/type-aliases/automountoptions.html)

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#inherited-from)

[`ContentScriptUi`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html).[`autoMount`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#automount)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#source)

[packages/wxt/src/utils/content-script-ui/types.ts:120](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L120)

---

### mount [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#mount)

> **mount**: () => `void`

Function that mounts or remounts the UI on the page.

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#inherited-from-1)

[`ContentScriptUi`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html).[`mount`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#mount)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#source-1)

[packages/wxt/src/utils/content-script-ui/types.ts:109](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L109)

---

### mounted [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#mounted)

> **mounted**: `undefined` | `TMounted`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#inherited-from-2)

[`ContentScriptUi`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html).[`mounted`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#mounted)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#source-2)

[packages/wxt/src/utils/content-script-ui/types.ts:4](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L4)

---

### remove [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#remove)

> **remove**: () => `void`

Function that removes the UI from the webpage.

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#inherited-from-3)

[`ContentScriptUi`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html).[`remove`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptui.html#remove)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#source-3)

[packages/wxt/src/utils/content-script-ui/types.ts:112](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L112)

---

### shadow [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#shadow)

> **shadow**: `ShadowRoot`

The shadow root performing the isolation.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#source-4)

[packages/wxt/src/utils/content-script-ui/shadow-root.ts:151](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/shadow-root.ts#L151)

---

### shadowHost [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#shadowhost)

> **shadowHost**: `HTMLElement`

The `HTMLElement` hosting the shadow root used to isolate the UI's styles. This is the element that get's added to the DOM. This element's style is not isolated from the webpage.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#source-5)

[packages/wxt/src/utils/content-script-ui/shadow-root.ts:144](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/shadow-root.ts#L144)

---

### uiContainer [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#uicontainer)

> **uiContainer**: `HTMLElement`

The container element inside the `ShadowRoot` whose styles are isolated. The UI is mounted inside this `HTMLElement`.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/interfaces/shadowrootcontentscriptui.html#source-6)

[packages/wxt/src/utils/content-script-ui/shadow-root.ts:149](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/shadow-root.ts#L149)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
