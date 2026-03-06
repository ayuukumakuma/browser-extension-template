---
title: "Extension APIs – WXT"
source_url: "https://wxt.dev/guide/essentials/extension-apis"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /guide/essentials/extension-apis.md for this page in Markdown format

# Extension APIs [​](https://wxt.dev/guide/essentials/extension-apis.html#extension-apis)

[Chrome Docs](https://developer.chrome.com/docs/extensions/reference/api) • [Firefox Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)

Different browsers provide different global variables for accessing the extension APIs (chrome provides `chrome`, firefox provides `browser`, etc).

WXT merges these two into a unified API accessed through the `browser` variable.

ts

```
import { browser } from 'wxt/browser';

browser.action.onClicked.addListener(() => {
  // ...
});
```

TIP

With auto-imports enabled, you don't even need to import this variable from `wxt/browser`!

The `browser` variable WXT provides is a simple export of the `browser` or `chrome` globals provided by the browser at runtime:

mjs

```
export const browser = globalThis.browser?.runtime?.id
  ? globalThis.browser
  : globalThis.chrome;
```

This means you can use the promise-style API for both MV2 and MV3, and it will work across all browsers (Chromium, Firefox, Safari, etc).

## Accessing Types [​](https://wxt.dev/guide/essentials/extension-apis.html#accessing-types)

All types can be accessed via WXT's `Browser` namespace:

ts

```
import { type Browser } from 'wxt/browser';

function handleMessage(message: any, sender: Browser.runtime.MessageSender) {
  // ...
}
```

## Using `webextension-polyfill` [​](https://wxt.dev/guide/essentials/extension-apis.html#using-webextension-polyfill)

If you want to use the `webextension-polyfill` when importing `browser`, you can do so by installing the `@wxt-dev/webextension-polyfill` package.

See it's [Installation Guide](https://github.com/wxt-dev/wxt/blob/main/packages/webextension-polyfill/README.md) to get started.

## Feature Detection [​](https://wxt.dev/guide/essentials/extension-apis.html#feature-detection)

Depending on the manifest version, browser, and permissions, some APIs are not available at runtime. If an API is not available, it will be `undefined`.

WARNING

Types will not help you here. The types WXT provides for `browser` assume all APIs exist. You are responsible for knowing whether an API is available or not.

To check if an API is available, use feature detection:

ts

```
if (browser.runtime.onSuspend != null) {
  browser.runtime.onSuspend.addListener(() => {
    // ...
  });
}
```

Here, [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) is your best friend:

ts

```
browser.runtime.onSuspend?.addListener(() => {
  // ...
});
```

Alternatively, if you're trying to use similar APIs under different names (to support MV2 and MV3), you can do something like this:

ts

```
(browser.action ?? browser.browser_action).onClicked.addListener(() => {
  //
});
```

## Entrypoint Limitations [​](https://wxt.dev/guide/essentials/extension-apis.html#entrypoint-limitations)

Because WXT imports your entrypoint files into a NodeJS, non-extension environment, the `chrome`/`browser` variables provided to extensions by the browser **will not be available**.

To prevent some basic errors, WXT polyfills these globals with the same in-memory, fake implementation it uses for testing: [`@webext-core/fake-browser`](https://webext-core.aklinker1.io/fake-browser/installation/). However, not all the APIs have been implemented.

So it is extremely important to NEVER use `browser.*` extension APIs outside the main function of any JS/TS entrypoints (background, content scripts, and unlisted scripts). If you do, you'll see an error like this:

plaintext

```
✖ Command failed after 440 ms

 ERROR  Browser.action.onClicked.addListener not implemented.
```

The fix is simple, just move your API usage into the entrypoint's main function:

background.tscontent.tsunlisted.ts

ts

```
browser.action.onClicked.addListener(() => {
  /* ... */
});

export default defineBackground(() => {
  browser.action.onClicked.addListener(() => {
    /* ... */
  });
});
```

ts

```
browser.runtime.onMessage.addListener(() => {
  /* ... */
});

export default defineContentScript({
  main() {
    browser.runtime.onMessage.addListener(() => {
      /* ... */
    });
  },
});
```

ts

```
browser.runtime.onMessage.addListener(() => {
  /* ... */
});

export default defineUnlistedScript(() => {
  browser.runtime.onMessage.addListener(() => {
    /* ... */
  });
});
```

Read [Entrypoint Loaders](https://wxt.dev/guide/essentials/config/entrypoint-loaders.html) for more technical details about this limitation.
