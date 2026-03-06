---
title: "Interface: BackgroundEntrypointOptions – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/BackgroundEntrypointOptions.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > BackgroundEntrypointOptions

# Interface: BackgroundEntrypointOptions [​](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#interface-backgroundentrypointoptions)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#extends)
* [Properties](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#properties)
  + [exclude](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#exclude)
  + [include](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#include)
  + [persistent](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#persistent)
  + [type](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#type)

## Extends [​](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#extends)

* [`BaseEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#properties)

### exclude [​](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#exclude)

> **exclude**?: `string`[]

List of target browsers to exclude this entrypoint from. Cannot be used with `include`. You must choose one of the two options.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#default)

ts

```
undefined
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#inherited-from)

[`BaseEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html).[`exclude`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#exclude)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#source)

[packages/wxt/src/types.ts:570](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L570)

---

### include [​](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#include)

> **include**?: `string`[]

List of target browsers to include this entrypoint in. Defaults to being included in all builds. Cannot be used with `exclude`. You must choose one of the two options.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#default-1)

ts

```
undefined
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#inherited-from-1)

[`BaseEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html).[`include`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#include)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#source-1)

[packages/wxt/src/types.ts:563](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L563)

---

### persistent [​](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#persistent)

> **persistent**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`boolean`>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#source-2)

[packages/wxt/src/types.ts:574](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L574)

---

### type [​](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#type)

> **type**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`"module"`>

Set to `"module"` to output the background entrypoint as ESM. ESM outputs can share chunks and reduce the overall size of the bundled extension.

When `undefined`, the background is bundled individually into an IIFE format.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#default-2)

ts

```
undefined
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#source-3)

[packages/wxt/src/types.ts:584](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L584)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
