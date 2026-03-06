---
title: "E2E Testing – WXT"
source_url: "https://wxt.dev/guide/essentials/e2e-testing"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /guide/essentials/e2e-testing.md for this page in Markdown format

# E2E Testing [​](https://wxt.dev/guide/essentials/e2e-testing.html#e2e-testing)

## Playwright [​](https://wxt.dev/guide/essentials/e2e-testing.html#playwright)

[Playwright](https://playwright.dev) is the only good option for writing Chrome Extension end-to-end tests.

To add E2E tests to your project, follow Playwright's [Chrome Extension docs](https://playwright.dev/docs/chrome-extensions). When you have to pass the path to your extension, pass the output directory, `/path/to/project/.output/chrome-mv3`.

For a complete example, see the [WXT's Playwright Example](https://github.com/wxt-dev/examples/tree/main/examples/playwright-e2e-testing).
