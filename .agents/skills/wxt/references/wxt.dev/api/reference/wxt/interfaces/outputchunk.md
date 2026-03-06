---
title: "Interface: OutputChunk – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/outputchunk"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/OutputChunk.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > OutputChunk

# Interface: OutputChunk [​](https://wxt.dev/api/reference/wxt/interfaces/outputchunk.html#interface-outputchunk)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/outputchunk.html#contents)

* [Properties](https://wxt.dev/api/reference/wxt/interfaces/outputchunk.html#properties)
  + [fileName](https://wxt.dev/api/reference/wxt/interfaces/outputchunk.html#filename)
  + [moduleIds](https://wxt.dev/api/reference/wxt/interfaces/outputchunk.html#moduleids)
  + [type](https://wxt.dev/api/reference/wxt/interfaces/outputchunk.html#type)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/outputchunk.html#properties)

### fileName [​](https://wxt.dev/api/reference/wxt/interfaces/outputchunk.html#filename)

> **fileName**: `string`

Relative, normalized path relative to the output directory.

Ex: "content-scripts/overlay.js"

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/outputchunk.html#source)

[packages/wxt/src/types.ts:470](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L470)

---

### moduleIds [​](https://wxt.dev/api/reference/wxt/interfaces/outputchunk.html#moduleids)

> **moduleIds**: `string`[]

Absolute, normalized paths to all dependencies this chunk relies on.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/outputchunk.html#source-1)

[packages/wxt/src/types.ts:472](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L472)

---

### type [​](https://wxt.dev/api/reference/wxt/interfaces/outputchunk.html#type)

> **type**: `"chunk"`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/outputchunk.html#source-2)

[packages/wxt/src/types.ts:464](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L464)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
