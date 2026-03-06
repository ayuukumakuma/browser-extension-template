---
title: "Interface: BackgroundDefinition – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/BackgroundDefinition.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > BackgroundDefinition

# Interface: BackgroundDefinition [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#interface-backgrounddefinition)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#extends)
* [Properties](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#properties)
  + [exclude](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#exclude)
  + [include](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#include)
  + [persistent](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#persistent)
  + [type](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#type)
* [Methods](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#methods)
  + [main()](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#main)

## Extends [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#extends)

* [`BackgroundEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#properties)

### exclude [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#exclude)

> **exclude**?: `string`[]

List of target browsers to exclude this entrypoint from. Cannot be used with `include`. You must choose one of the two options.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#default)

ts

```
undefined
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#inherited-from)

[`BackgroundEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html).[`exclude`](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#exclude)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#source)

[packages/wxt/src/types.ts:570](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L570)

---

### include [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#include)

> **include**?: `string`[]

List of target browsers to include this entrypoint in. Defaults to being included in all builds. Cannot be used with `exclude`. You must choose one of the two options.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#default-1)

ts

```
undefined
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#inherited-from-1)

[`BackgroundEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html).[`include`](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#include)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#source-1)

[packages/wxt/src/types.ts:563](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L563)

---

### persistent [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#persistent)

> **persistent**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`boolean`>

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#inherited-from-2)

[`BackgroundEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html).[`persistent`](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#persistent)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#source-2)

[packages/wxt/src/types.ts:574](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L574)

---

### type [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#type)

> **type**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`"module"`>

Set to `"module"` to output the background entrypoint as ESM. ESM outputs can share chunks and reduce the overall size of the bundled extension.

When `undefined`, the background is bundled individually into an IIFE format.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#default-2)

ts

```
undefined
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#inherited-from-3)

[`BackgroundEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html).[`type`](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html#type)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#source-3)

[packages/wxt/src/types.ts:584](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L584)

## Methods [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#methods)

### main() [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#main)

> **main**(): `void`

Main function executed when the background script is started. Cannot be async.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html#source-4)

[packages/wxt/src/types.ts:905](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L905)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
