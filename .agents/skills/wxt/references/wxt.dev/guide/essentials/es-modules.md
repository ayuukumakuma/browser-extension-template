---
title: "ES Modules – WXT"
source_url: "https://wxt.dev/guide/essentials/es-modules"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /guide/essentials/es-modules.md for this page in Markdown format

# ES Modules [​](https://wxt.dev/guide/essentials/es-modules.html#es-modules)

Your source code should always be written as ESM. However, you have some control whether an entrypoint is bundled as ESM.

## HTML Pages ≥0.0.1 [​](https://wxt.dev/guide/essentials/es-modules.html#html-pages)

Vite only supports bundling JS from HTML pages as ESM. Ensure you have added `type="module"` to your `<script>` tags:

html

```
<script src="./main.ts"></script>
<script src="./main.ts" type="module"></script>
```

## Background ≥0.16.0 [​](https://wxt.dev/guide/essentials/es-modules.html#background)

By default, your background will be bundled into a single file as IIFE. You can change this by setting `type: "module"` in your background entrypoint:

ts

```
export default defineBackground({
  type: 'module',
  main() {
    // ...
  },
});
```

This will change the output format to ESM, enable code-spliting between your background script and HTML pages, and set `"type": "module"` in your manifest.

WARNING

Only MV3 supports ESM background scripts/service workers. When targeting MV2, the `type` option is ignored and the background is always bundled into a single file as IIFE.

## Content Scripts [​](https://wxt.dev/guide/essentials/es-modules.html#content-scripts)

WXT does not yet include built-in support for bundling content scripts as ESM. The plan is to add support for chunking to reduce bundle size, but not support HMR for now. There are several technical issues that make implementing a generic solution for HMR impossible. See [Content Script ESM Support #357](https://github.com/wxt-dev/wxt/issues/357) for details.

If you can't wait, and need ESM support right now, you can implement ESM support manually. See the [ESM Content Script UI](https://github.com/wxt-dev/examples/tree/main/examples/esm-content-script-ui) example to learn how.
