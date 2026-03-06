---
title: "Interface: Wxt – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/wxt"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/Wxt.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > Wxt

# Interface: Wxt [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#interface-wxt)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#contents)

* [Properties](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#properties)
  + [builder](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#builder)
  + [config](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#config)
  + [hook](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#hook)
  + [hooks](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#hooks)
  + [logger](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#logger)
  + [pm](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#pm)
  + [reloadConfig](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#reloadconfig)
  + [server](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#server)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#properties)

### builder [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#builder)

> **builder**: [`WxtBuilder`](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html)

The module in charge of executing all the build steps.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#source)

[packages/wxt/src/types.ts:1351](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1351)

---

### config [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#config)

> **config**: [`ResolvedConfig`](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#source-1)

[packages/wxt/src/types.ts:1338](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1338)

---

### hook [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#hook)

> **hook**: <`NameT`>(`name`, `function_`, `options`?) => () => `void`

Alias for `wxt.hooks.hook(...)`.

#### Type parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#type-parameters)

▪ **NameT** extends `HookKeys`<[`WxtHooks`](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html)>

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#parameters)

▪ **name**: `NameT`

▪ **function\_**: `InferCallback`<[`WxtHooks`](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html), `NameT`>

▪ **options?**: `object`

▪ **options.allowDeprecated?**: `boolean`

#### Returns [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#returns)

> > (): `void`
>
> ##### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#source-2)
>
> node\_modules/.pnpm/hookable@6.0.1/node\_modules/hookable/dist/index.d.mts:39

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#source-3)

[packages/wxt/src/types.ts:1341](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1341)

---

### hooks [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#hooks)

> **hooks**: `Hookable`<[`WxtHooks`](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html), `HookKeys`<[`WxtHooks`](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html)>>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#source-4)

[packages/wxt/src/types.ts:1339](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1339)

---

### logger [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#logger)

> **logger**: [`Logger`](https://wxt.dev/api/reference/wxt/interfaces/logger.html)

Alias for config.logger

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#source-5)

[packages/wxt/src/types.ts:1343](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1343)

---

### pm [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#pm)

> **pm**: [`WxtPackageManager`](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html)

Package manager utilities.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#source-6)

[packages/wxt/src/types.ts:1347](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1347)

---

### reloadConfig [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#reloadconfig)

> **reloadConfig**: () => `Promise`<`void`>

Reload config file and update `wxt.config` with the result.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#source-7)

[packages/wxt/src/types.ts:1345](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1345)

---

### server [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#server)

> **server**?: [`WxtDevServer`](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html)

If the dev server was started, it will be available.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxt.html#source-8)

[packages/wxt/src/types.ts:1349](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1349)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
