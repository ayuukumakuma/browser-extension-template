---
title: "Interface: OptionsEntrypointOptions – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/OptionsEntrypointOptions.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > OptionsEntrypointOptions

# Interface: OptionsEntrypointOptions [​](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#interface-optionsentrypointoptions)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#extends)
* [Properties](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#properties)
  + [browserStyle](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#browserstyle)
  + [chromeStyle](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#chromestyle)
  + [exclude](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#exclude)
  + [include](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#include)
  + [openInTab](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#openintab)
  + [title](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#title)

## Extends [​](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#extends)

* [`BaseEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#properties)

### browserStyle [​](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#browserstyle)

> **browserStyle**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`boolean`>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#source)

[packages/wxt/src/types.ts:749](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L749)

---

### chromeStyle [​](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#chromestyle)

> **chromeStyle**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`boolean`>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#source-1)

[packages/wxt/src/types.ts:750](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L750)

---

### exclude [​](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#exclude)

> **exclude**?: `string`[]

List of target browsers to exclude this entrypoint from. Cannot be used with `include`. You must choose one of the two options.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#default)

ts

```
undefined
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#inherited-from)

[`BaseEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html).[`exclude`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#exclude)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#source-2)

[packages/wxt/src/types.ts:570](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L570)

---

### include [​](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#include)

> **include**?: `string`[]

List of target browsers to include this entrypoint in. Defaults to being included in all builds. Cannot be used with `exclude`. You must choose one of the two options.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#default-1)

ts

```
undefined
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#inherited-from-1)

[`BaseEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html).[`include`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#include)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#source-3)

[packages/wxt/src/types.ts:563](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L563)

---

### openInTab [​](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#openintab)

> **openInTab**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`boolean`>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#source-4)

[packages/wxt/src/types.ts:748](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L748)

---

### title [​](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#title)

> **title**?: `string`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html#source-5)

[packages/wxt/src/types.ts:747](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L747)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
