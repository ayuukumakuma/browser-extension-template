---
title: "Interface: WxtBuilder – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/WxtBuilder.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > WxtBuilder

# Interface: WxtBuilder [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#interface-wxtbuilder)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#contents)

* [Properties](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#properties)
  + [name](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#name)
  + [version](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#version)
* [Methods](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#methods)
  + [build()](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#build)
  + [createServer()](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#createserver)
  + [importEntrypoint()](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#importentrypoint)
  + [importEntrypoints()](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#importentrypoints)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#properties)

### name [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#name)

> **name**: `string`

Name of tool used to build. Ex: "Vite" or "Webpack".

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#source)

[packages/wxt/src/types.ts:1102](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1102)

---

### version [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#version)

> **version**: `string`

Version of tool used to build. Ex: "5.0.2"

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#source-1)

[packages/wxt/src/types.ts:1104](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1104)

## Methods [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#methods)

### build() [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#build)

> **build**(`group`): `Promise`<[`BuildStepOutput`](https://wxt.dev/api/reference/wxt/interfaces/buildstepoutput.html)>

Build a single entrypoint group. This is effectively one of the multiple "steps" during the build process.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#parameters)

▪ **group**: [`EntrypointGroup`](https://wxt.dev/api/reference/wxt/type-aliases/entrypointgroup.html)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#source-2)

[packages/wxt/src/types.ts:1116](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1116)

---

### createServer() [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#createserver)

> **createServer**(`info`): `Promise`<[`WxtBuilderServer`](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html)>

Start a dev server at the provided port.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#parameters-1)

▪ **info**: [`ServerInfo`](https://wxt.dev/api/reference/wxt/interfaces/serverinfo.html)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#source-3)

[packages/wxt/src/types.ts:1118](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1118)

---

### importEntrypoint() [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#importentrypoint)

> **importEntrypoint**<`T`>(`path`): `Promise`<`T`>

Import a JS entrypoint file, returning the default export containing the options.

#### Type parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#type-parameters)

▪ **T**

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#parameters-2)

▪ **path**: `string`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#source-4)

[packages/wxt/src/types.ts:1109](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1109)

---

### importEntrypoints() [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#importentrypoints)

> **importEntrypoints**(`paths`): `Promise`<`Record`<`string`, `unknown`>[]>

Import a list of JS entrypoint files, returning their options.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#parameters-3)

▪ **paths**: `string`[]

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html#source-5)

[packages/wxt/src/types.ts:1111](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1111)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
