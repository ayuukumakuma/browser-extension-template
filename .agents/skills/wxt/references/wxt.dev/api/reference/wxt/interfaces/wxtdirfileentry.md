---
title: "Interface: WxtDirFileEntry – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/wxtdirfileentry"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/WxtDirFileEntry.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > WxtDirFileEntry

# Interface: WxtDirFileEntry [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdirfileentry.html#interface-wxtdirfileentry)

Represents a file to be written to the project's `.wxt/` directory.

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdirfileentry.html#contents)

* [Properties](https://wxt.dev/api/reference/wxt/interfaces/wxtdirfileentry.html#properties)
  + [path](https://wxt.dev/api/reference/wxt/interfaces/wxtdirfileentry.html#path)
  + [text](https://wxt.dev/api/reference/wxt/interfaces/wxtdirfileentry.html#text)
  + [tsReference](https://wxt.dev/api/reference/wxt/interfaces/wxtdirfileentry.html#tsreference)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdirfileentry.html#properties)

### path [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdirfileentry.html#path)

> **path**: `string`

Path relative to the `.wxt/` directory. So "tsconfig.json" would resolve to ".wxt/tsconfig.json".

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdirfileentry.html#source)

[packages/wxt/src/types.ts:1678](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1678)

---

### text [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdirfileentry.html#text)

> **text**: `string`

The text that will be written to the file.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdirfileentry.html#source-1)

[packages/wxt/src/types.ts:1680](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1680)

---

### tsReference [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdirfileentry.html#tsreference)

> **tsReference**?: `boolean`

Set to `true` to add a reference to this file in `.wxt/wxt.d.ts`.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdirfileentry.html#source-2)

[packages/wxt/src/types.ts:1682](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1682)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
