---
title: "Function: clean() – WXT"
source_url: "https://wxt.dev/api/reference/wxt/functions/clean"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/functions/clean.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > clean

# Function: clean() [​](https://wxt.dev/api/reference/wxt/functions/clean.html#function-clean)

## clean(config) [​](https://wxt.dev/api/reference/wxt/functions/clean.html#clean-config)

> **clean**(`config`?): `Promise`<`void`>

Remove generated/temp files from the directory.

### Parameters [​](https://wxt.dev/api/reference/wxt/functions/clean.html#parameters)

▪ **config?**: [`InlineConfig`](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html)

Optional config that will override your `<root>/wxt.config.ts`.

### Returns [​](https://wxt.dev/api/reference/wxt/functions/clean.html#returns)

### Example [​](https://wxt.dev/api/reference/wxt/functions/clean.html#example)

ts

```
await clean();
```

### Source [​](https://wxt.dev/api/reference/wxt/functions/clean.html#source)

[packages/wxt/src/core/clean.ts:16](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/core/clean.ts#L16)

## clean(root) [​](https://wxt.dev/api/reference/wxt/functions/clean.html#clean-root)

> **clean**(`root`?): `Promise`<`void`>

Remove generated/temp files from the directory.

### Parameters [​](https://wxt.dev/api/reference/wxt/functions/clean.html#parameters-1)

▪ **root?**: `string`

The directory to look for generated/temp files in. Defaults to `process.cwd()`. Can be relative to `process.cwd()` or absolute.

### Returns [​](https://wxt.dev/api/reference/wxt/functions/clean.html#returns-1)

### Deprecated [​](https://wxt.dev/api/reference/wxt/functions/clean.html#deprecated)

### Example [​](https://wxt.dev/api/reference/wxt/functions/clean.html#example-1)

ts

```
await clean();
```

### Source [​](https://wxt.dev/api/reference/wxt/functions/clean.html#source-1)

[packages/wxt/src/core/clean.ts:27](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/core/clean.ts#L27)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
