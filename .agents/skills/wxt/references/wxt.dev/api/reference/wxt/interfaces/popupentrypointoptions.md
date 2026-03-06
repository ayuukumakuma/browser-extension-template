---
title: "Interface: PopupEntrypointOptions – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/PopupEntrypointOptions.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > PopupEntrypointOptions

# Interface: PopupEntrypointOptions [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#interface-popupentrypointoptions)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#extends)
* [Properties](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#properties)
  + [browserStyle](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#browserstyle)
  + [defaultArea](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#defaultarea)
  + [defaultIcon](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#defaulticon)
  + [defaultTitle](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#defaulttitle)
  + [exclude](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#exclude)
  + [include](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#include)
  + [mv2Key](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#mv2key)
  + [themeIcons](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#themeicons)

## Extends [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#extends)

* [`BaseEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#properties)

### browserStyle [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#browserstyle)

> **browserStyle**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`boolean`>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#source)

[packages/wxt/src/types.ts:728](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L728)

---

### defaultArea [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#defaultarea)

> **defaultArea**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`"navbar"` | `"menupanel"` | `"tabstrip"` | `"personaltoolbar"`>

Firefox only. Defines the part of the browser in which the button is initially placed.

#### See [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#see)

<https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action#default_area>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#source-1)

[packages/wxt/src/types.ts:735](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L735)

---

### defaultIcon [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#defaulticon)

> **defaultIcon**?: `Record`<`string`, `string`>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#source-2)

[packages/wxt/src/types.ts:726](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L726)

---

### defaultTitle [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#defaulttitle)

> **defaultTitle**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`string`>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#source-3)

[packages/wxt/src/types.ts:727](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L727)

---

### exclude [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#exclude)

> **exclude**?: `string`[]

List of target browsers to exclude this entrypoint from. Cannot be used with `include`. You must choose one of the two options.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#default)

ts

```
undefined
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#inherited-from)

[`BaseEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html).[`exclude`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#exclude)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#source-4)

[packages/wxt/src/types.ts:570](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L570)

---

### include [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#include)

> **include**?: `string`[]

List of target browsers to include this entrypoint in. Defaults to being included in all builds. Cannot be used with `exclude`. You must choose one of the two options.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#default-1)

ts

```
undefined
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#inherited-from-1)

[`BaseEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html).[`include`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#include)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#source-5)

[packages/wxt/src/types.ts:563](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L563)

---

### mv2Key [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#mv2key)

> **mv2Key**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`"browser_action"` | `"page_action"`>

Defaults to "browser\_action" to be equivalent to MV3's "action" key

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#source-6)

[packages/wxt/src/types.ts:725](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L725)

---

### themeIcons [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#themeicons)

> **themeIcons**?: [`ThemeIcon`](https://wxt.dev/api/reference/wxt/interfaces/themeicon.html)[]

Firefox only. Icons for light and dark themes.

#### See [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#see-1)

<https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action#theme_icons>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html#source-7)

[packages/wxt/src/types.ts:743](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L743)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
