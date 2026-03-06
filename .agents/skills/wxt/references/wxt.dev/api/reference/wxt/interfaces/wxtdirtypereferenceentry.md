---
title: "Interface: WxtDirTypeReferenceEntry – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/wxtdirtypereferenceentry"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/WxtDirTypeReferenceEntry.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > WxtDirTypeReferenceEntry

# Interface: WxtDirTypeReferenceEntry [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdirtypereferenceentry.html#interface-wxtdirtypereferenceentry)

Represents type reference to a node module to be added to `.wxt/wxt.d.ts` file

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdirtypereferenceentry.html#contents)

* [Properties](https://wxt.dev/api/reference/wxt/interfaces/wxtdirtypereferenceentry.html#properties)
  + [module](https://wxt.dev/api/reference/wxt/interfaces/wxtdirtypereferenceentry.html#module)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdirtypereferenceentry.html#properties)

### module [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdirtypereferenceentry.html#module)

> **module**: `string`

Specifies the module name that will be used in the `/// <reference types="..." />` directive. This value will be added to the `.wxt/wxt.d.ts` file to include type definitions from the specified module.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdirtypereferenceentry.html#source)

[packages/wxt/src/types.ts:1669](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1669)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
