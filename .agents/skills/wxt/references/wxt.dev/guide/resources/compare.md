---
title: "Compare – WXT"
source_url: "https://wxt.dev/guide/resources/compare"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /guide/resources/compare.md for this page in Markdown format

# Compare [​](https://wxt.dev/guide/resources/compare.html#compare)

Lets compare the features of WXT vs [Plasmo](https://docs.plasmo.com/framework) (another framework) and [CRXJS](https://crxjs.dev/vite-plugin) (a bundler plugin).

## Overview [​](https://wxt.dev/guide/resources/compare.html#overview)

* ✅ - Full support
* 🟡 - Partial support
* ❌ - No support

| Features | WXT | Plasmo | CRXJS |
| --- | --- | --- | --- |
| Maintained | ✅ | 🟡 [[1]](compare.html#fn1) | 🟡 [[2]](compare.html#fn2) |
| Supports all browsers | ✅ | ✅ | 🟡 [[3]](compare.html#fn3) |
| MV2 Support | ✅ | ✅ | 🟡 [[4]](compare.html#fn4) |
| MV3 Support | ✅ | ✅ | 🟡 [[4]](compare.html#fn4) |
| Create Extension ZIPs | ✅ | ✅ | ❌ |
| Create Firefox Sources ZIP | ✅ | ❌ | ❌ |
| First-class TypeScript support | ✅ | ✅ | ✅ |
| Entrypoint discovery | ✅ [[5]](compare.html#fn5) | ✅ [[5]](compare.html#fn5) | ❌ |
| Inline entrypoint config | ✅ | ✅ | ❌ [[6]](compare.html#fn6) |
| Auto-imports | ✅ | ❌ | ❌ |
| Reusable module system | ✅ | ❌ | ❌ |
| Supports all frontend frameworks | ✅ | 🟡 [[7]](compare.html#fn7) | ✅ |
| Framework specific entrypoints (like `Popup.tsx`) | 🟡 [[8]](compare.html#fn8) | ✅ [[9]](compare.html#fn9) | ❌ |
| Automated publishing | ✅ | ✅ | ❌ |
| Remote Code Bundling (Google Analytics) | ✅ | ✅ | ❌ |
| Unlisted HTML Pages | ✅ | ✅ | ✅ |
| Unlisted Scripts | ✅ | ❌ | ❌ |
| ESM Content Scripts | ❌ [[10]](compare.html#fn10) | ❌ | ✅ |
| **Dev Mode** |  |  |  |
| `.env` Files | ✅ | ✅ | ✅ |
| Opens browser with extension installed | ✅ | ❌ | ❌ |
| HMR for UIs | ✅ | 🟡 [[11]](compare.html#fn11) | ✅ |
| Reload HTML Files on Change | ✅ | 🟡 [[12]](compare.html#fn12) | ✅ |
| Reload Content Scripts on Change | ✅ | 🟡 [[12]](compare.html#fn12) | ✅ |
| Reload Background on Change | 🟡 [[12]](compare.html#fn12) | 🟡 [[12]](compare.html#fn12) | 🟡 [[12]](compare.html#fn12) |
| Respects Content Script `run_at` | ✅ | ✅ | ❌ [[13]](compare.html#fn13) |
| **Built-in Wrappers** |  |  |  |
| Storage | ✅ | ✅ | ❌ [[14]](compare.html#fn14) |
| Messaging | ❌ [[14]](compare.html#fn14) | ✅ | ❌ [[14]](compare.html#fn14) |
| Content Script UI | ✅ | ✅ | ❌ [[14]](compare.html#fn14) |
| I18n | ✅ | ❌ | ❌ |

---

1. Appears to be in maintenance mode with little to no maintainers nor feature development happening and *(see [wxt-dev/wxt#1404 (comment)](https://github.com/wxt-dev/wxt/pull/1404#issuecomment-2643089518))* [↩︎](https://wxt.dev/guide/resources/compare.html#fnref1)
2. See [crxjs/chrome-extension-tools#974](https://github.com/crxjs/chrome-extension-tools/discussions/974) [↩︎](https://wxt.dev/guide/resources/compare.html#fnref2)
3. As of `v2.0.0-beta.23`, but v2 stable hasn't been released yet. [↩︎](https://wxt.dev/guide/resources/compare.html#fnref3)
4. Either MV2 or MV3, not both. [↩︎](https://wxt.dev/guide/resources/compare.html#fnref4) [↩︎](https://wxt.dev/guide/resources/compare.html#fnref4)
5. File based. [↩︎](https://wxt.dev/guide/resources/compare.html#fnref5) [↩︎](https://wxt.dev/guide/resources/compare.html#fnref5)
6. Entrypoint options all configured in `manifest.json`. [↩︎](https://wxt.dev/guide/resources/compare.html#fnref6)
7. Only React, Vue, and Svelte. [↩︎](https://wxt.dev/guide/resources/compare.html#fnref7)
8. `.html`, `.ts`, `.tsx`. [↩︎](https://wxt.dev/guide/resources/compare.html#fnref8)
9. `.html`, `.ts`, `.tsx`, `.vue`, `.svelte`. [↩︎](https://wxt.dev/guide/resources/compare.html#fnref9)
10. WIP, moving very slowly. Follow [wxt-dev/wxt#357](https://github.com/wxt-dev/wxt/issues/357) for updates. [↩︎](https://wxt.dev/guide/resources/compare.html#fnref10)
11. React only. [↩︎](https://wxt.dev/guide/resources/compare.html#fnref11)
12. Reloads entire extension. [↩︎](https://wxt.dev/guide/resources/compare.html#fnref12) [↩︎](https://wxt.dev/guide/resources/compare.html#fnref12) [↩︎](https://wxt.dev/guide/resources/compare.html#fnref12) [↩︎](https://wxt.dev/guide/resources/compare.html#fnref12) [↩︎](https://wxt.dev/guide/resources/compare.html#fnref12)
13. ESM-style loaders run asynchronously. [↩︎](https://wxt.dev/guide/resources/compare.html#fnref13)
14. There is no built-in wrapper around this API. However, you can still access the standard APIs via `chrome`/`browser` globals or use any 3rd party NPM package. [↩︎](https://wxt.dev/guide/resources/compare.html#fnref14) [↩︎](https://wxt.dev/guide/resources/compare.html#fnref14) [↩︎](https://wxt.dev/guide/resources/compare.html#fnref14) [↩︎](https://wxt.dev/guide/resources/compare.html#fnref14)
