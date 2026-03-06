---
title: "Function: WxtVitest() – WXT"
source_url: "https://wxt.dev/api/reference/wxt/testing/vitest/functions/wxtvitest"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/testing/vitest/functions/WxtVitest.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/testing/vitest](https://wxt.dev/api/reference/wxt/testing/vitest/index.html) > WxtVitest

# Function: WxtVitest() [​](https://wxt.dev/api/reference/wxt/testing/vitest/functions/wxtvitest.html#function-wxtvitest)

> **WxtVitest**(`inlineConfig`?): `Promise`<`vite.PluginOption`[]>

Vite plugin that configures Vitest with everything required to test a WXT extension, based on the `<root>/wxt.config.ts`

ts

```
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import { WxtVitest } from 'wxt/testing/vitest-plugin';

export default defineConfig({
  plugins: [WxtVitest()],
});
```

## Parameters [​](https://wxt.dev/api/reference/wxt/testing/vitest/functions/wxtvitest.html#parameters)

▪ **inlineConfig?**: [`InlineConfig`](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html)

Customize WXT's config for testing. Any config specified here overrides the config from your `wxt.config.ts` file.

## Source [​](https://wxt.dev/api/reference/wxt/testing/vitest/functions/wxtvitest.html#source)

[packages/wxt/src/testing/wxt-vitest-plugin.ts:37](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/testing/wxt-vitest-plugin.ts#L37)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
