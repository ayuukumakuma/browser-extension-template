---
title: "Interface: FsCache – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/fscache"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/FsCache.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > FsCache

# Interface: FsCache [​](https://wxt.dev/api/reference/wxt/interfaces/fscache.html#interface-fscache)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/fscache.html#contents)

* [Methods](https://wxt.dev/api/reference/wxt/interfaces/fscache.html#methods)
  + [get()](https://wxt.dev/api/reference/wxt/interfaces/fscache.html#get)
  + [set()](https://wxt.dev/api/reference/wxt/interfaces/fscache.html#set)

## Methods [​](https://wxt.dev/api/reference/wxt/interfaces/fscache.html#methods)

### get() [​](https://wxt.dev/api/reference/wxt/interfaces/fscache.html#get)

> **get**(`key`): `Promise`<`undefined` | `string`>

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/fscache.html#parameters)

▪ **key**: `string`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/fscache.html#source)

[packages/wxt/src/types.ts:1473](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1473)

---

### set() [​](https://wxt.dev/api/reference/wxt/interfaces/fscache.html#set)

> **set**(`key`, `value`): `Promise`<`void`>

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/fscache.html#parameters-1)

▪ **key**: `string`

▪ **value**: `string`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/fscache.html#source-1)

[packages/wxt/src/types.ts:1472](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1472)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
