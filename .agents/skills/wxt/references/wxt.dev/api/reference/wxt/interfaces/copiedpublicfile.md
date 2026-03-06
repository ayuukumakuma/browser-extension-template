---
title: "Interface: CopiedPublicFile – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/copiedpublicfile"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/CopiedPublicFile.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > CopiedPublicFile

# Interface: CopiedPublicFile [​](https://wxt.dev/api/reference/wxt/interfaces/copiedpublicfile.html#interface-copiedpublicfile)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/copiedpublicfile.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/interfaces/copiedpublicfile.html#extends)
* [Properties](https://wxt.dev/api/reference/wxt/interfaces/copiedpublicfile.html#properties)
  + [absoluteSrc](https://wxt.dev/api/reference/wxt/interfaces/copiedpublicfile.html#absolutesrc)
  + [relativeDest](https://wxt.dev/api/reference/wxt/interfaces/copiedpublicfile.html#relativedest)

## Extends [​](https://wxt.dev/api/reference/wxt/interfaces/copiedpublicfile.html#extends)

* [`ResolvedBasePublicFile`](https://wxt.dev/api/reference/wxt/interfaces/resolvedbasepublicfile.html)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/copiedpublicfile.html#properties)

### absoluteSrc [​](https://wxt.dev/api/reference/wxt/interfaces/copiedpublicfile.html#absolutesrc)

> **absoluteSrc**: `string`

The absolute path to the file that will be copied to the output directory.

#### Example [​](https://wxt.dev/api/reference/wxt/interfaces/copiedpublicfile.html#example)

ts

```
'/path/to/any/file.css';
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/copiedpublicfile.html#source)

[packages/wxt/src/types.ts:1647](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1647)

---

### relativeDest [​](https://wxt.dev/api/reference/wxt/interfaces/copiedpublicfile.html#relativedest)

> **relativeDest**: `string`

The relative path in the output directory to copy the file to.

#### Example [​](https://wxt.dev/api/reference/wxt/interfaces/copiedpublicfile.html#example-1)

ts

```
'content-scripts/base-styles.css';
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/copiedpublicfile.html#inherited-from)

[`ResolvedBasePublicFile`](https://wxt.dev/api/reference/wxt/interfaces/resolvedbasepublicfile.html).[`relativeDest`](https://wxt.dev/api/reference/wxt/interfaces/resolvedbasepublicfile.html#relativedest)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/copiedpublicfile.html#source-1)

[packages/wxt/src/types.ts:1637](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1637)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
