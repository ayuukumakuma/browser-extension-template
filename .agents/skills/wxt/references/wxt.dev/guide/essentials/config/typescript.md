---
title: "TypeScript Configuration – WXT"
source_url: "https://wxt.dev/guide/essentials/config/typescript"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /guide/essentials/config/typescript.md for this page in Markdown format

# TypeScript Configuration [​](https://wxt.dev/guide/essentials/config/typescript.html#typescript-configuration)

When you run [`wxt prepare`](https://wxt.dev/api/cli/wxt-prepare.html), WXT generates a base TSConfig file for your project at `<rootDir>/.wxt/tsconfig.json`.

At a minimum, you need to create a TSConfig in your root directory that looks like this:

jsonc

```
// <rootDir>/tsconfig.json
{
  "extends": ".wxt/tsconfig.json",
}
```

Or if you're in a monorepo, you may not want to extend the config. If you don't extend it, you need to add `.wxt/wxt.d.ts` to the TypeScript project:

ts

```
/// <reference path="./.wxt/wxt.d.ts" />
```

## Compiler Options [​](https://wxt.dev/guide/essentials/config/typescript.html#compiler-options)

To specify custom compiler options, add them in `<rootDir>/tsconfig.json`:

jsonc

```
// <rootDir>/tsconfig.json
{
  "extends": ".wxt/tsconfig.json",
  "compilerOptions": {
    "jsx": "preserve",
  },
}
```

## TSConfig Paths [​](https://wxt.dev/guide/essentials/config/typescript.html#tsconfig-paths)

WXT provides a default set of path aliases.

| Alias | To | Example |
| --- | --- | --- |
| `~~` | `<rootDir>/*` | `import "~~/scripts"` |
| `@@` | `<rootDir>/*` | `import "@@/scripts"` |
| `~` | `<srcDir>/*` | `import { toLowerCase } from "~/utils/strings"` |
| `@` | `<srcDir>/*` | `import { toLowerCase } from "@/utils/strings"` |

To add your own, DO NOT add them to your `tsconfig.json`! Instead, use the [`alias` option](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#alias) in `wxt.config.ts`.

This will add your custom aliases to `<rootDir>/.wxt/tsconfig.json` next time you run `wxt prepare`. It also adds your alias to the bundler so it can resolve imports.

ts

```
import { resolve } from 'node:path';

export default defineConfig({
  alias: {
    // Directory:
    testing: resolve('utils/testing'),
    // File:
    strings: resolve('utils/strings.ts'),
  },
});
```

ts

```
import { fakeTab } from 'testing/fake-objects';
import { toLowerCase } from 'strings';
```
