---
title: "Auto-imports – WXT"
source_url: "https://wxt.dev/guide/essentials/config/auto-imports"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /guide/essentials/config/auto-imports.md for this page in Markdown format

# Auto-imports [​](https://wxt.dev/guide/essentials/config/auto-imports.html#auto-imports)

WXT uses [`unimport`](https://www.npmjs.com/package/unimport), the same tool as Nuxt, to setup auto-imports.

ts

```
export default defineConfig({
  // See https://www.npmjs.com/package/unimport#configurations
  imports: {
    // ...
  },
});
```

By default, WXT automatically sets up auto-imports for all of it's own APIs and some of your project directories:

* `<srcDir>/components/*`
* `<srcDir>/composables/*`
* `<srcDir>/hooks/*`
* `<srcDir>/utils/*`

All named and default exports from files in these directories are available everywhere else in your project without having to import them.

To see the complete list of auto-imported APIs, run [`wxt prepare`](https://wxt.dev/api/cli/wxt-prepare.html) and look at your project's `.wxt/types/imports-module.d.ts` file.

## TypeScript [​](https://wxt.dev/guide/essentials/config/auto-imports.html#typescript)

For TypeScript and your editor to recognize auto-imported variables, you need to run the [`wxt prepare` command](https://wxt.dev/api/cli/wxt-prepare.html).

Add this command to your `postinstall` script so your editor has everything it needs to report type errors after installing dependencies:

jsonc

```
// package.json
{
  "scripts": {
    "postinstall": "wxt prepare",
  },
}
```

## ESLint [​](https://wxt.dev/guide/essentials/config/auto-imports.html#eslint)

ESLint doesn't know about the auto-imported variables unless they are explicitly defined in the ESLint's `globals`. By default, WXT will generate the config if it detects ESLint is installed in your project. If the config isn't generated automatically, you can manually tell WXT to generate it.

ESLint 9ESLint 8

ts

```
export default defineConfig({
  imports: {
    eslintrc: {
      enabled: 9,
    },
  },
});
```

ts

```
export default defineConfig({
  imports: {
    eslintrc: {
      enabled: 8,
    },
  },
});
```

Then in your ESLint config, import and use the generated file:

ESLint 9ESLint 8

js

```
// eslint.config.mjs
import autoImports from './.wxt/eslint-auto-imports.mjs';

export default [
  autoImports,
  {
    // The rest of your config...
  },
];
```

js

```
// .eslintrc.mjs
export default {
  extends: ['./.wxt/eslintrc-auto-import.json'],
  // The rest of your config...
};
```

## Disabling Auto-imports [​](https://wxt.dev/guide/essentials/config/auto-imports.html#disabling-auto-imports)

Not all developers like auto-imports. To disable them, set `imports` to `false`.

ts

```
export default defineConfig({
  imports: false,
});
```

## Explicit Imports (`#imports`) [​](https://wxt.dev/guide/essentials/config/auto-imports.html#explicit-imports-imports)

You can manually import all of WXT's APIs via the `#imports` module:

ts

```
import {
  createShadowRootUi,
  ContentScriptContext,
  MatchPattern,
} from '#imports';
```

To learn more about how the `#imports` module works, read the [related blog post](https://wxt.dev/blog/2024-12-06-using-imports-module.html).

If you've disabled auto-imports, you should still use `#imports` to import all of WXT's APIs from a single place.
