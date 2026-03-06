---
title: "Function: addViteConfig() – WXT"
source_url: "https://wxt.dev/api/reference/wxt/modules/functions/addviteconfig"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/modules/functions/addViteConfig.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/modules](https://wxt.dev/api/reference/wxt/modules/index.html) > addViteConfig

# Function: addViteConfig() [​](https://wxt.dev/api/reference/wxt/modules/functions/addviteconfig.html#function-addviteconfig)

> **addViteConfig**(`wxt`, `viteConfig`): `void`

Merge additional vite config for one or more entrypoint "groups" that make up individual builds. Config in the project's `wxt.config.ts` file takes precedence over any config added by this function.

## Parameters [​](https://wxt.dev/api/reference/wxt/modules/functions/addviteconfig.html#parameters)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The wxt instance provided by the module's setup function.

▪ **viteConfig**: (`env`) => `undefined` | `UserConfig`

A function that returns the vite config the module is adding. Same format as `vite` in `wxt.config.ts`.

## Returns [​](https://wxt.dev/api/reference/wxt/modules/functions/addviteconfig.html#returns)

## Example [​](https://wxt.dev/api/reference/wxt/modules/functions/addviteconfig.html#example)

ts

```
export default defineWxtModule((wxt, options) => {
  addViteConfig(wxt, () => ({
  build: {
  sourceMaps: true,
  },
  });
  });
```

## Source [​](https://wxt.dev/api/reference/wxt/modules/functions/addviteconfig.html#source)

[packages/wxt/src/modules.ts:109](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/modules.ts#L109)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
