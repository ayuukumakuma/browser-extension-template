---
title: "Testing Updates – WXT"
source_url: "https://wxt.dev/guide/essentials/testing-updates"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /guide/essentials/testing-updates.md for this page in Markdown format

# Testing Updates [​](https://wxt.dev/guide/essentials/testing-updates.html#testing-updates)

## Testing Permission Changes [​](https://wxt.dev/guide/essentials/testing-updates.html#testing-permission-changes)

When `permissions`/`host_permissions` change during an update, depending on what exactly changed, the browser will disable your extension until the user accepts the new permissions.

You can test if your permission changes will result in a disabled extension:

* Chromium: Use [Google's Extension Update Testing tool](https://github.com/GoogleChromeLabs/extension-update-testing-tool)
* Firefox: See their [Test Permission Requests](https://extensionworkshop.com/documentation/develop/test-permission-requests/) page
* Safari: Everyone breaks something in production eventually... 🫡 Good luck soldier

## Update Event [​](https://wxt.dev/guide/essentials/testing-updates.html#update-event)

You can setup a callback that runs after your extension updates like so:

ts

```
browser.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === 'update') {
    // Do something
  }
});
```

If the logic is simple, write a unit test to cover this logic. If you feel the need to manually test this callback, you can either:

1. In dev mode, remove the `if` statement and reload the extension from `chrome://extensions`
2. Use [Google's Extension Update Testing tool](https://github.com/GoogleChromeLabs/extension-update-testing-tool)
