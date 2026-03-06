---
title: "Function: addPublicAssets() – WXT"
source_url: "https://wxt.dev/api/reference/wxt/modules/functions/addpublicassets"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/modules/functions/addPublicAssets.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/modules](https://wxt.dev/api/reference/wxt/modules/index.html) > addPublicAssets

# Function: addPublicAssets() [​](https://wxt.dev/api/reference/wxt/modules/functions/addpublicassets.html#function-addpublicassets)

> **addPublicAssets**(`wxt`, `dir`): `void`

Copy files inside a directory (as if it were the public directory) into the extension's output directory. The directory itself is not copied, just the files inside it. If a filename matches an existing one, it is ignored.

## Parameters [​](https://wxt.dev/api/reference/wxt/modules/functions/addpublicassets.html#parameters)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The wxt instance provided by the module's setup function.

▪ **dir**: `string`

The directory to copy.

## Returns [​](https://wxt.dev/api/reference/wxt/modules/functions/addpublicassets.html#returns)

## Example [​](https://wxt.dev/api/reference/wxt/modules/functions/addpublicassets.html#example)

ts

```
export default defineWxtModule((wxt, options) => {
    addPublicAssets(wxt, './dist/prebundled');
  });
```

## Source [​](https://wxt.dev/api/reference/wxt/modules/functions/addpublicassets.html#source)

[packages/wxt/src/modules.ts:75](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/modules.ts#L75)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
