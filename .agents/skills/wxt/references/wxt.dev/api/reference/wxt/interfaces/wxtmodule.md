---
title: "Interface: WxtModule<TOptions> – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/wxtmodule"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/WxtModule.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > WxtModule

# Interface: WxtModule`<TOptions>` [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#interface-wxtmodule-toptions)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#contents)

* [Extended By](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#extended-by)
* [Type parameters](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#type-parameters)
* [Properties](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#properties)
  + [configKey](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#configkey)
  + [hooks](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#hooks)
  + [imports](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#imports)
  + [name](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#name)
  + [setup](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#setup)

## Extended By [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#extended-by)

* [`WxtModuleWithMetadata`](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html)

## Type parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#type-parameters)

▪ **TOptions** extends [`WxtModuleOptions`](https://wxt.dev/api/reference/wxt/type-aliases/wxtmoduleoptions.html)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#properties)

### configKey [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#configkey)

> **configKey**?: `string`

Key for users to pass options into your module from their `wxt.config.ts` file.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#source)

[packages/wxt/src/types.ts:1606](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1606)

---

### hooks [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#hooks)

> **hooks**?: `NestedHooks`<[`WxtHooks`](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html)>

Alternative to adding hooks in setup function with `wxt.hooks`. Hooks are added before the `setup` function is called.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#source-1)

[packages/wxt/src/types.ts:1613](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1613)

---

### imports [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#imports)

> **imports**?: `Import`[]

Provide a list of imports to add to auto-imports.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#source-2)

[packages/wxt/src/types.ts:1608](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1608)

---

### name [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#name)

> **name**?: `string`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#source-3)

[packages/wxt/src/types.ts:1601](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1601)

---

### setup [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#setup)

> **setup**?: [`WxtModuleSetup`](https://wxt.dev/api/reference/wxt/type-aliases/wxtmodulesetup.html)<`TOptions`>

A custom function that can be used to setup hooks and call module-specific APIs.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html#source-4)

[packages/wxt/src/types.ts:1618](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1618)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
