---
title: "Interface: ResolvedBasePublicFile – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/resolvedbasepublicfile"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/ResolvedBasePublicFile.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > ResolvedBasePublicFile

# Interface: ResolvedBasePublicFile [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedbasepublicfile.html#interface-resolvedbasepublicfile)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedbasepublicfile.html#contents)

* [Extended By](https://wxt.dev/api/reference/wxt/interfaces/resolvedbasepublicfile.html#extended-by)
* [Properties](https://wxt.dev/api/reference/wxt/interfaces/resolvedbasepublicfile.html#properties)
  + [relativeDest](https://wxt.dev/api/reference/wxt/interfaces/resolvedbasepublicfile.html#relativedest)

## Extended By [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedbasepublicfile.html#extended-by)

* [`CopiedPublicFile`](https://wxt.dev/api/reference/wxt/interfaces/copiedpublicfile.html)
* [`GeneratedPublicFile`](https://wxt.dev/api/reference/wxt/interfaces/generatedpublicfile.html)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedbasepublicfile.html#properties)

### relativeDest [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedbasepublicfile.html#relativedest)

> **relativeDest**: `string`

The relative path in the output directory to copy the file to.

#### Example [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedbasepublicfile.html#example)

ts

```
'content-scripts/base-styles.css';
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedbasepublicfile.html#source)

[packages/wxt/src/types.ts:1637](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1637)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
