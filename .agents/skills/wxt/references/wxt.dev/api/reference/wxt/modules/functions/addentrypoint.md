---
title: "Function: addEntrypoint() – WXT"
source_url: "https://wxt.dev/api/reference/wxt/modules/functions/addentrypoint"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/modules/functions/addEntrypoint.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/modules](https://wxt.dev/api/reference/wxt/modules/index.html) > addEntrypoint

# Function: addEntrypoint() [​](https://wxt.dev/api/reference/wxt/modules/functions/addentrypoint.html#function-addentrypoint)

> **addEntrypoint**(`wxt`, `entrypoint`): `void`

Adds a TS/JS file as an entrypoint to the project. This file will be bundled along with the other entrypoints.

If you're publishing the module to NPM, you should probably pre-build the entrypoint and use `addPublicAssets` instead to copy pre-bundled assets into the output directory. This will speed up project builds since it just has to copy some files instead of bundling them.

To extract entrypoint options from a JS/TS file, use `wxt.builder.importEntrypoint` (see example).

## Parameters [​](https://wxt.dev/api/reference/wxt/modules/functions/addentrypoint.html#parameters)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The wxt instance provided by the module's setup function.

▪ **entrypoint**: [`Entrypoint`](https://wxt.dev/api/reference/wxt/type-aliases/entrypoint.html)

The entrypoint to be bundled along with the extension.

## Returns [​](https://wxt.dev/api/reference/wxt/modules/functions/addentrypoint.html#returns)

## Example [​](https://wxt.dev/api/reference/wxt/modules/functions/addentrypoint.html#example)

ts

```
export default defineWxtModule(async (wxt, options) => {
    const entrypointPath = '/path/to/my-entrypoint.ts';
    addEntrypoint(wxt, {
      type: 'content-script',
      name: 'some-name',
      inputPath: entrypointPath,
      outputDir: wxt.config.outDir,
      options: await wxt.builder.importEntrypoint(entrypointPath),
    });
  });
```

## Source [​](https://wxt.dev/api/reference/wxt/modules/functions/addentrypoint.html#source)

[packages/wxt/src/modules.ts:56](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/modules.ts#L56)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
