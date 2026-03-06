---
title: "Interface: SidepanelEntrypointOptions – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/SidepanelEntrypointOptions.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > SidepanelEntrypointOptions

# Interface: SidepanelEntrypointOptions [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#interface-sidepanelentrypointoptions)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#extends)
* [Properties](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#properties)
  + [browserStyle](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#browserstyle)
  + [defaultIcon](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#defaulticon)
  + [defaultTitle](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#defaulttitle)
  + [exclude](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#exclude)
  + [include](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#include)
  + [openAtInstall](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#openatinstall)

## Extends [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#extends)

* [`BaseEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#properties)

### browserStyle [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#browserstyle)

> **browserStyle**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`boolean`>

#### Deprecated [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#deprecated)

See <https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action#syntax>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#source)

[packages/wxt/src/types.ts:765](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L765)

---

### defaultIcon [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#defaulticon)

> **defaultIcon**?: `string` | `Record`<`string`, `string`>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#source-1)

[packages/wxt/src/types.ts:766](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L766)

---

### defaultTitle [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#defaulttitle)

> **defaultTitle**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`string`>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#source-2)

[packages/wxt/src/types.ts:767](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L767)

---

### exclude [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#exclude)

> **exclude**?: `string`[]

List of target browsers to exclude this entrypoint from. Cannot be used with `include`. You must choose one of the two options.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#default)

ts

```
undefined
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#inherited-from)

[`BaseEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html).[`exclude`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#exclude)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#source-3)

[packages/wxt/src/types.ts:570](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L570)

---

### include [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#include)

> **include**?: `string`[]

List of target browsers to include this entrypoint in. Defaults to being included in all builds. Cannot be used with `exclude`. You must choose one of the two options.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#default-1)

ts

```
undefined
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#inherited-from-1)

[`BaseEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html).[`include`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#include)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#source-4)

[packages/wxt/src/types.ts:563](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L563)

---

### openAtInstall [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#openatinstall)

> **openAtInstall**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`boolean`>

Firefox only. See <https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action#syntax>

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#default-2)

ts

```
false
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html#source-5)

[packages/wxt/src/types.ts:760](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L760)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
