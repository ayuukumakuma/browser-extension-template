---
title: "Function: defineAppConfig() – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/define-app-config/functions/defineappconfig"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/define-app-config/functions/defineAppConfig.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/define-app-config](https://wxt.dev/api/reference/wxt/utils/define-app-config/index.html) > defineAppConfig

# Function: defineAppConfig() [​](https://wxt.dev/api/reference/wxt/utils/define-app-config/functions/defineappconfig.html#function-defineappconfig)

> **defineAppConfig**(`config`): [`WxtAppConfig`](https://wxt.dev/api/reference/wxt/utils/define-app-config/interfaces/wxtappconfig.html)

Runtime app config defined in `<srcDir>/app.config.ts`.

You can add fields to this interface via ["Module Augmentation"](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation):

ts

```
// app.config.ts
import 'wxt/utils/define-app-config';

declare module 'wxt/utils/define-app-config' {
  export interface WxtAppConfig {
    analytics: AnalyticsConfig;
  }
}
```

## Parameters [​](https://wxt.dev/api/reference/wxt/utils/define-app-config/functions/defineappconfig.html#parameters)

▪ **config**: [`WxtAppConfig`](https://wxt.dev/api/reference/wxt/utils/define-app-config/interfaces/wxtappconfig.html)

## Source [​](https://wxt.dev/api/reference/wxt/utils/define-app-config/functions/defineappconfig.html#source)

[packages/wxt/src/utils/define-app-config.ts:21](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/define-app-config.ts#L21)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
