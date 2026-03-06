---
title: "Browser Startup – WXT"
source_url: "https://wxt.dev/guide/essentials/config/browser-startup"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /guide/essentials/config/browser-startup.md for this page in Markdown format

# Browser Startup [​](https://wxt.dev/guide/essentials/config/browser-startup.html#browser-startup)

> See the [API Reference](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html) for a full list of config.

During development, WXT uses [`web-ext` by Mozilla](https://www.npmjs.com/package/web-ext) to automatically open a browser window with your extension installed.

## Config Files [​](https://wxt.dev/guide/essentials/config/browser-startup.html#config-files)

You can configure browser startup in 3 places:

1. `<rootDir>/web-ext.config.ts`: Ignored from version control, this file lets you configure your own options for a specific project without affecting other developers

   web-ext.config.ts

   ts

   ```
   import { defineWebExtConfig } from 'wxt';

   export default defineWebExtConfig({
     // ...
   });
   ```
2. `<rootDir>/wxt.config.ts`: Via the [`webExt` config](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#webext), included in version control
3. `$HOME/web-ext.config.ts`: Provide default values for all WXT projects on your computer

## Recipes [​](https://wxt.dev/guide/essentials/config/browser-startup.html#recipes)

### Set Browser Binaries [​](https://wxt.dev/guide/essentials/config/browser-startup.html#set-browser-binaries)

To set or customize the browser opened during development:

web-ext.config.ts

ts

```
import { defineWebExtConfig } from 'wxt';

export default defineWebExtConfig({
  binaries: {
    chrome: '/path/to/chrome-beta', // Use Chrome Beta instead of regular Chrome
    firefox: 'firefoxdeveloperedition', // Use Firefox Developer Edition instead of regular Firefox
    edge: '/path/to/edge', // Open MS Edge when running "wxt -b edge"
  },
});
```

wxt.config.ts

ts

```
export default defineConfig({
  webExt: {
    binaries: {
      chrome: '/path/to/chrome-beta', // Use Chrome Beta instead of regular Chrome
      firefox: 'firefoxdeveloperedition', // Use Firefox Developer Edition instead of regular Firefox
      edge: '/path/to/edge', // Open MS Edge when running "wxt -b edge"
    },
  },
});
```

By default, WXT will try to automatically discover where Chrome/Firefox are installed. However, if you have chrome installed in a non-standard location, you need to set it manually as shown above.

### Persist Data [​](https://wxt.dev/guide/essentials/config/browser-startup.html#persist-data)

By default, to keep from modifying your browser's existing profiles, `web-ext` creates a brand new profile every time you run the `dev` script.

Right now, Chromium based browsers are the only browsers that support overriding this behavior and persisting data when running the `dev` script multiple times.

To persist data, set the `--user-data-dir` flag in any of the config files mentioned above:

Mac/LinuxWindows

ts

```
import { defineWebExtConfig } from 'wxt';

export default defineWebExtConfig({
  chromiumArgs: ['--user-data-dir=./.wxt/chrome-data'],
});
```

ts

```
import { resolve } from 'node:path';
import { defineWebExtConfig } from 'wxt';

export default defineWebExtConfig({
  // On Windows, the path must be absolute
  chromiumProfile: resolve('.wxt/chrome-data'),
  keepProfileChanges: true,
});
```

Now, next time you run the `dev` script, a persistent profile will be created in `.wxt/chrome-data/{profile-name}`. With a persistent profile, you can install devtools extensions to help with development, allow the browser to remember logins, etc, without worrying about the profile being reset the next time you run the `dev` script.

TIP

You can use any directory you'd like for `--user-data-dir`, the examples above create a persistent profile for each WXT project. To create a profile for all WXT projects, you can put the `chrome-data` directory inside your user's home directory.

### Disable Opening Browser [​](https://wxt.dev/guide/essentials/config/browser-startup.html#disable-opening-browser)

If you prefer to load the extension into your browser manually, you can disable the auto-open behavior:

web-ext.config.ts

ts

```
import { defineWebExtConfig } from 'wxt';

export default defineWebExtConfig({
  disabled: true,
});
```

### Enabling Chrome Features [​](https://wxt.dev/guide/essentials/config/browser-startup.html#enabling-chrome-features)

Some APIs are disabled in Chrome during development because of the default flags `web-ext` uses to launch Chrome, like the [Prompt API](https://developer.chrome.com/docs/ai/prompt-api).

If your extension depends on new features or services, you can enable them via `chromiumArgs`:

ts

```
import { defineWebExtConfig } from 'wxt';

export default defineWebExtConfig({
  chromiumArgs: [
    // For example, this flag enables the Prompt API
    '--disable-features=DisableLoadExtensionCommandLineSwitch',
  ],
});
```

There is no comprehensive list of what feature flags enable what APIs and services.

Alternatively, if you can't find a flag that enables a feature you're looking for, [disable the opening the browser during development](https://wxt.dev/guide/essentials/config/browser-startup.html#disable-opening-browser) and use your regular chrome profile for development.
