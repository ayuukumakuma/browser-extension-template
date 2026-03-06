---
title: "Function: createServer() – WXT"
source_url: "https://wxt.dev/api/reference/wxt/functions/createserver"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/functions/createServer.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > createServer

# Function: createServer() [​](https://wxt.dev/api/reference/wxt/functions/createserver.html#function-createserver)

> **createServer**(`inlineConfig`?): `Promise`<[`WxtDevServer`](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html)>

Creates a dev server and pre-builds all the files that need to exist before loading the extension.

## Parameters [​](https://wxt.dev/api/reference/wxt/functions/createserver.html#parameters)

▪ **inlineConfig?**: [`InlineConfig`](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html)

## Returns [​](https://wxt.dev/api/reference/wxt/functions/createserver.html#returns)

## Example [​](https://wxt.dev/api/reference/wxt/functions/createserver.html#example)

ts

```
const server = await wxt.createServer({
    // Enter config...
  });
  await server.start();
```

## Source [​](https://wxt.dev/api/reference/wxt/functions/createserver.html#source)

[packages/wxt/src/core/create-server.ts:44](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/core/create-server.ts#L44)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
