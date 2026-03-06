---
title: "Interface: GeneratedPublicFile – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/generatedpublicfile"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/GeneratedPublicFile.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > GeneratedPublicFile

# Interface: GeneratedPublicFile [​](https://wxt.dev/api/reference/wxt/interfaces/generatedpublicfile.html#interface-generatedpublicfile)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/generatedpublicfile.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/interfaces/generatedpublicfile.html#extends)
* [Properties](https://wxt.dev/api/reference/wxt/interfaces/generatedpublicfile.html#properties)
  + [contents](https://wxt.dev/api/reference/wxt/interfaces/generatedpublicfile.html#contents)
  + [relativeDest](https://wxt.dev/api/reference/wxt/interfaces/generatedpublicfile.html#relativedest)

## Extends [​](https://wxt.dev/api/reference/wxt/interfaces/generatedpublicfile.html#extends)

* [`ResolvedBasePublicFile`](https://wxt.dev/api/reference/wxt/interfaces/resolvedbasepublicfile.html)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/generatedpublicfile.html#properties)

### contents [​](https://wxt.dev/api/reference/wxt/interfaces/generatedpublicfile.html#contents-1)

> **contents**: `string`

Text to write to the file.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/generatedpublicfile.html#source)

[packages/wxt/src/types.ts:1652](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1652)

---

### relativeDest [​](https://wxt.dev/api/reference/wxt/interfaces/generatedpublicfile.html#relativedest)

> **relativeDest**: `string`

The relative path in the output directory to copy the file to.

#### Example [​](https://wxt.dev/api/reference/wxt/interfaces/generatedpublicfile.html#example)

ts

```
'content-scripts/base-styles.css';
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/generatedpublicfile.html#inherited-from)

[`ResolvedBasePublicFile`](https://wxt.dev/api/reference/wxt/interfaces/resolvedbasepublicfile.html).[`relativeDest`](https://wxt.dev/api/reference/wxt/interfaces/resolvedbasepublicfile.html#relativedest)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/generatedpublicfile.html#source-1)

[packages/wxt/src/types.ts:1637](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1637)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
