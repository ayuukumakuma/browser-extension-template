---
title: "Runtime Config – WXT"
source_url: "https://wxt.dev/guide/essentials/config/runtime"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /guide/essentials/config/runtime.md for this page in Markdown format

# Runtime Config [​](https://wxt.dev/guide/essentials/config/runtime.html#runtime-config)

> This API is still a WIP, with more features coming soon!

Define runtime configuration in a single place, `<srcDir>/app.config.ts`:

ts

```
import { defineAppConfig } from '#imports';

// Define types for your config
declare module 'wxt/utils/define-app-config' {
  export interface WxtAppConfig {
    theme?: 'light' | 'dark';
  }
}

export default defineAppConfig({
  theme: 'dark',
});
```

WARNING

This file is committed to the repo, so don't put any secrets here. Instead, use [Environment Variables](https://wxt.dev/guide/essentials/config/environment-variables.html)

To access runtime config, WXT provides the `getAppConfig` function:

ts

```
import { getAppConfig } from '#imports';

console.log(getAppConfig()); // { theme: "dark" }
```

## Environment Variables in App Config [​](https://wxt.dev/guide/essentials/config/runtime.html#environment-variables-in-app-config)

You can use environment variables in the `app.config.ts` file.

ts

```
declare module 'wxt/utils/define-app-config' {
  export interface WxtAppConfig {
    apiKey?: string;
    skipWelcome: boolean;
  }
}

export default defineAppConfig({
  apiKey: import.meta.env.WXT_API_KEY,
  skipWelcome: import.meta.env.WXT_SKIP_WELCOME === 'true',
});
```

This has several advantages:

* Define all expected environment variables in a single file
* Convert strings to other types, like booleans or arrays
* Provide default values if an environment variable is not provided
