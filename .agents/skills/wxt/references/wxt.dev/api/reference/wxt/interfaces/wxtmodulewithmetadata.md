---
title: "Interface: WxtModuleWithMetadata<TOptions> – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/WxtModuleWithMetadata.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > WxtModuleWithMetadata

# Interface: WxtModuleWithMetadata`<TOptions>` [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#interface-wxtmodulewithmetadata-toptions)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#extends)
* [Type parameters](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#type-parameters)
* [Properties](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#properties)
  + [configKey](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#configkey)
  + [hooks](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#hooks)
  + [id](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#id)
  + [imports](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#imports)
  + [name](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#name)
  + [setup](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#setup)
  + [type](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#type)

## Extends [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#extends)

* [`WxtModule`](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html)<`TOptions`>

## Type parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#type-parameters)

▪ **TOptions** extends [`WxtModuleOptions`](https://wxt.dev/api/reference/wxt/type-aliases/wxtmoduleoptions.html)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#properties)

### configKey [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#configkey)

> **configKey**?: `string`

Key for users to pass options into your module from their `wxt.config.ts` file.

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#inherited-from)

[`WxtModule`](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html).[`configKey`](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#configkey)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#source)

[packages/wxt/src/types.ts:1606](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1606)

---

### hooks [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#hooks)

> **hooks**?: `NestedHooks`<[`WxtHooks`](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html)>

Alternative to adding hooks in setup function with `wxt.hooks`. Hooks are added before the `setup` function is called.

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#inherited-from-1)

[`WxtModule`](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html).[`hooks`](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#hooks)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#source-1)

[packages/wxt/src/types.ts:1613](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1613)

---

### id [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#id)

> **id**: `string`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#source-2)

[packages/wxt/src/types.ts:1625](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1625)

---

### imports [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#imports)

> **imports**?: `Import`[]

Provide a list of imports to add to auto-imports.

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#inherited-from-2)

[`WxtModule`](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html).[`imports`](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#imports)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#source-3)

[packages/wxt/src/types.ts:1608](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1608)

---

### name [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#name)

> **name**?: `string`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#inherited-from-3)

[`WxtModule`](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html).[`name`](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#name)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#source-4)

[packages/wxt/src/types.ts:1601](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1601)

---

### setup [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#setup)

> **setup**?: [`WxtModuleSetup`](https://wxt.dev/api/reference/wxt/type-aliases/wxtmodulesetup.html)<`TOptions`>

A custom function that can be used to setup hooks and call module-specific APIs.

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#inherited-from-4)

[`WxtModule`](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html).[`setup`](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#setup)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#source-5)

[packages/wxt/src/types.ts:1618](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1618)

---

### type [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#type)

> **type**: `"local"` | `"node_module"`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html#source-6)

[packages/wxt/src/types.ts:1624](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1624)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
