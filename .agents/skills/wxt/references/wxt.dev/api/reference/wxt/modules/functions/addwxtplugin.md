---
title: "Function: addWxtPlugin() – WXT"
source_url: "https://wxt.dev/api/reference/wxt/modules/functions/addwxtplugin"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/modules/functions/addWxtPlugin.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/modules](https://wxt.dev/api/reference/wxt/modules/index.html) > addWxtPlugin

# Function: addWxtPlugin() [​](https://wxt.dev/api/reference/wxt/modules/functions/addwxtplugin.html#function-addwxtplugin)

> **addWxtPlugin**(`wxt`, `plugin`): `void`

Add a runtime plugin to the project. In each entrypoint, before executing the `main` function, plugins are executed.

## Parameters [​](https://wxt.dev/api/reference/wxt/modules/functions/addwxtplugin.html#parameters)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The wxt instance provided by the module's setup function.

▪ **plugin**: `string`

An import from an NPM module, or an absolute file path to the file to load at runtime.

## Returns [​](https://wxt.dev/api/reference/wxt/modules/functions/addwxtplugin.html#returns)

## Example [​](https://wxt.dev/api/reference/wxt/modules/functions/addwxtplugin.html#example)

ts

```
export default defineWxtModule((wxt) => {
    addWxtPlugin(wxt, 'wxt-module-analytics/client-plugin');
  });
```

## Source [​](https://wxt.dev/api/reference/wxt/modules/functions/addwxtplugin.html#source)

[packages/wxt/src/modules.ts:139](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/modules.ts#L139)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
