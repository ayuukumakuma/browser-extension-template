---
title: "Function: build() – WXT"
source_url: "https://wxt.dev/api/reference/wxt/functions/build"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/functions/build.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > build

# Function: build() [​](https://wxt.dev/api/reference/wxt/functions/build.html#function-build)

> **build**(`config`?): `Promise`<[`BuildOutput`](https://wxt.dev/api/reference/wxt/interfaces/buildoutput.html)>

Bundles the extension for production. Returns a promise of the build result. Discovers the `wxt.config.ts` file in the root directory, and merges that config with what is passed in.

## Parameters [​](https://wxt.dev/api/reference/wxt/functions/build.html#parameters)

▪ **config?**: [`InlineConfig`](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html)

## Returns [​](https://wxt.dev/api/reference/wxt/functions/build.html#returns)

## Example [​](https://wxt.dev/api/reference/wxt/functions/build.html#example)

ts

```
// Use config from `wxt.config.ts`
  const res = await build();

  // or override config `from wxt.config.ts`
  const res = await build({
    // Override config...
  });
```

## Source [​](https://wxt.dev/api/reference/wxt/functions/build.html#source)

[packages/wxt/src/core/build.ts:19](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/core/build.ts#L19)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
