---
title: "Hooks – WXT"
source_url: "https://wxt.dev/guide/essentials/config/hooks"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /guide/essentials/config/hooks.md for this page in Markdown format

# Hooks [​](https://wxt.dev/guide/essentials/config/hooks.html#hooks)

WXT includes a system that lets you hook into the build process and make changes.

## Adding Hooks [​](https://wxt.dev/guide/essentials/config/hooks.html#adding-hooks)

The easiest way to add a hook is via the `wxt.config.ts`. Here's an example hook that modifies the `manifest.json` file before it is written to the output directory:

wxt.config.ts

ts

```
export default defineConfig({
  hooks: {
    'build:manifestGenerated': (wxt, manifest) => {
      if (wxt.config.mode === 'development') {
        manifest.name += ' (DEV)';
      }
    },
  },
});
```

Most hooks provide the `wxt` object as the first argument. It contains the resolved config and other info about the current build. The other arguments can be modified by reference to change different parts of the build system.

You can find the [list of all available hooks](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html) in the API reference.

Putting one-off hooks like this in your config file is simple, but if you find yourself writing lots of hooks, you should extract them into [WXT Modules](https://wxt.dev/guide/essentials/wxt-modules.html) instead.

## Execution Order [​](https://wxt.dev/guide/essentials/config/hooks.html#execution-order)

Because hooks can be defined in multiple places, including [WXT Modules](https://wxt.dev/guide/essentials/wxt-modules.html), the order which they're executed can matter. Hooks are executed in the following order:

1. NPM modules in the order listed in the [`modules` config](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#modules)
2. User modules in [`/modules` folder](https://wxt.dev/guide/essentials/project-structure.html), loaded alphabetically
3. Hooks listed in your `wxt.config.ts`

To see the order for your project, run `wxt prepare --debug` flag and search for the "Hook execution order":

plaintext

```
⚙ Hook execution order:
⚙   1. wxt:built-in:unimport
⚙   2. src/modules/auto-icons.ts
⚙   3. src/modules/example.ts
⚙   4. src/modules/i18n.ts
⚙   5. wxt.config.ts > hooks
```

Changing execution order is simple:

* Prefix your user modules with a number (lower numbers are loaded first):

  html

  ```
  📁 modules/
     📄 0.my-module.ts
     📄 1.another-module.ts
  ```
* If you need to run an NPM module after user modules, just make it a user module and prefix the filename with a number!

  ts

  ```
  // modules/2.i18n.ts
  export { default } from '@wxt-dev/i18n/module';
  ```
