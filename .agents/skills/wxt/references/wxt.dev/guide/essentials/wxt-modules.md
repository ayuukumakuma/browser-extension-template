---
title: "WXT Modules – WXT"
source_url: "https://wxt.dev/guide/essentials/wxt-modules"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /guide/essentials/wxt-modules.md for this page in Markdown format

# WXT Modules [​](https://wxt.dev/guide/essentials/wxt-modules.html#wxt-modules)

WXT provides a "module system" that let's you run code at different steps in the build process to modify it.

* [Adding a Module](https://wxt.dev/guide/essentials/wxt-modules.html#adding-a-module)
* [Module Options](https://wxt.dev/guide/essentials/wxt-modules.html#module-options)
* [Execution Order](https://wxt.dev/guide/essentials/wxt-modules.html#execution-order)
* [Writing Modules](https://wxt.dev/guide/essentials/wxt-modules.html#writing-modules)
  + [Recipes](https://wxt.dev/guide/essentials/wxt-modules.html#recipes)
  + [Example Modules](https://wxt.dev/guide/essentials/wxt-modules.html#example-modules)

## Adding a Module [​](https://wxt.dev/guide/essentials/wxt-modules.html#adding-a-module)

There are two ways to add a module to your project:

1. **NPM**: install an NPM package, like [`@wxt-dev/auto-icons`](https://www.npmjs.com/package/@wxt-dev/auto-icons) and add it to your config:

   wxt.config.ts

   ts

   ```
   export default defineConfig({
     modules: ['@wxt-dev/auto-icons'],
   });
   ```

   > Searching for ["wxt module"](https://www.npmjs.com/search?q=wxt%20module) on NPM is a good way to find published WXT modules.
2. **Local**: add a file to your project's `modules/` directory:

   plaintext

   ```
   <rootDir>/
     modules/
       my-module.ts
   ```

   > To learn more about writing your own modules, read the [Writing Modules](https://wxt.dev/guide/essentials/wxt-modules.html) docs.

## Module Options [​](https://wxt.dev/guide/essentials/wxt-modules.html#module-options)

WXT modules may require or allow setting custom options to change their behavior. There are two types of options:

1. **Build-time**: Any config used during the build process, like feature flags
2. **Runtime**: Any config accessed at runtime, like callback functions

Build-time options are placed in your `wxt.config.ts`, while runtime options is placed in the [`app.config.ts` file](https://wxt.dev/guide/essentials/config/runtime.html). Refer to each module's documentation about what options are required and where they should be placed.

If you use TypeScript, modules augment WXT's types so you will get type errors if options are missing or incorrect.

## Execution Order [​](https://wxt.dev/guide/essentials/wxt-modules.html#execution-order)

Modules are loaded in the same order as hooks are executed. Refer to the [Hooks documentation](https://wxt.dev/guide/essentials/config/hooks.html#execution-order) for more details.

## Writing Modules [​](https://wxt.dev/guide/essentials/wxt-modules.html#writing-modules)

Here's what a basic WXT module looks like:

ts

```
import { defineWxtModule } from 'wxt/modules';

export default defineWxtModule({
  setup(wxt) {
    // Your module code here...
  },
});
```

Each module's setup function is executed after the `wxt.config.ts` file is loaded. The `wxt` object provides everything you need to write a module:

* Use `wxt.hook(...)` to hook into the build's lifecycle and make changes
* Use `wxt.config` to get the resolved config from the project's `wxt.config.ts` file
* Use `wxt.logger` to log messages to the console
* and more!

Refer to the [API reference](https://wxt.dev/api/reference/wxt/interfaces/wxt.html) for a complete list of properties and functions available.

Also make sure to read about [all the hooks that are available](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html) - they are essential to writing modules.

### Recipes [​](https://wxt.dev/guide/essentials/wxt-modules.html#recipes)

Modules are complex and require a deeper understanding of WXT's code and how it works. The best way to learn is by example.

#### Update resolved config [​](https://wxt.dev/guide/essentials/wxt-modules.html#update-resolved-config)

ts

```
import { defineWxtModule } from 'wxt/modules';

export default defineWxtModule({
  setup(wxt) {
    wxt.hook('config:resolved', () => {
      wxt.config.outDir = 'dist';
    });
  },
});
```

#### Add built-time config [​](https://wxt.dev/guide/essentials/wxt-modules.html#add-built-time-config)

ts

```
import { defineWxtModule } from 'wxt/modules';
import 'wxt';

export interface MyModuleOptions {
  // Add your build-time options here...
}
declare module 'wxt' {
  export interface InlineConfig {
    // Add types for the "myModule" key in wxt.config.ts
    myModule: MyModuleOptions;
  }
}

export default defineWxtModule<AnalyticModuleOptions>({
  configKey: 'myModule',

  // Build time config is available via the second argument of setup
  setup(wxt, options) {
    console.log(options);
  },
});
```

#### Add runtime config [​](https://wxt.dev/guide/essentials/wxt-modules.html#add-runtime-config)

ts

```
import { defineWxtModule } from 'wxt/modules';
import 'wxt/utils/define-app-config';

export interface MyModuleRuntimeOptions {
  // Add your runtime options here...
}
declare module 'wxt/utils/define-app-config' {
  export interface WxtAppConfig {
    myModule: MyModuleOptions;
  }
}
```

Runtime options are returned when calling

ts

```
const config = getAppConfig();
console.log(config.myModule);
```

This is very useful when [generating runtime code](https://wxt.dev/guide/essentials/wxt-modules.html#generate-runtime-module).

#### Add custom entrypoint options [​](https://wxt.dev/guide/essentials/wxt-modules.html#add-custom-entrypoint-options)

Modules can add custom options to entrypoints by augmenting the entrypoint options types. This allows you to add custom configuration that can be accessed during the build process.

ts

```
import { defineWxtModule } from 'wxt/modules';
import 'wxt';

declare module 'wxt' {
  export interface BackgroundEntrypointOptions {
    // Add custom options to the background entrypoint
    myCustomOption?: string;
  }
}

export default defineWxtModule({
  setup(wxt) {
    wxt.hook('entrypoints:resolved', (_, entrypoints) => {
      const background = entrypoints.find((e) => e.type === 'background');
      if (background) {
        console.log('Custom option:', background.options.myCustomOption);
      }
    });
  },
});
```

Now users can set the custom option in their entrypoint:

entrypoints/background.ts

ts

```
export default defineBackground({
  myCustomOption: 'custom value',
  main() {
    // ...
  },
});
```

This works for all other JS and HTML entrypoints, here's an example of how to pass a custom option from an HTML file.

entrypoints/popup.html

html

```
<html>
  <head>
    <meta name="wxt.myHtmlOption" content="custom value" />
    <title>Popup</title>
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

#### Generate output file [​](https://wxt.dev/guide/essentials/wxt-modules.html#generate-output-file)

ts

```
import { defineWxtModule } from 'wxt/modules';

export default defineWxtModule({
  setup(wxt) {
    // Relative to the output directory
    const generatedFilePath = 'some-file.txt';

    wxt.hook('build:publicAssets', (_, assets) => {
      assets.push({
        relativeDest: generatedFilePath,
        contents: 'some generated text',
      });
    });

    wxt.hook('build:manifestGenerated', (_, manifest) => {
      manifest.web_accessible_resources ??= [];
      manifest.web_accessible_resources.push({
        matches: ['*://*'],
        resources: [generatedFilePath],
      });
    });
  },
});
```

This file could then be loaded at runtime:

ts

```
const res = await fetch(browser.runtime.getURL('/some-text.txt'));
```

#### Add custom entrypoints [​](https://wxt.dev/guide/essentials/wxt-modules.html#add-custom-entrypoints)

Once the existing files under the `entrypoints/` directory have been discovered, the `entrypoints:found` hook can be used to add custom entrypoints.

INFO

The `entrypoints:found` hook is triggered before validation is carried out on the list of entrypoints. Thus, any custom entrypoints will still be checked for duplicate names and logged during debugging.

ts

```
import { defineWxtModule } from 'wxt/modules';

export default defineWxtModule({
  setup(wxt) {
    wxt.hook('entrypoints:found', (_, entrypointInfos) => {
      // Add your new entrypoint
      entrypointInfos.push({
        name: 'my-custom-script',
        inputPath: 'path/to/custom-script.js',
        type: 'content-script',
      });
    });
  },
});
```

#### Generate runtime module [​](https://wxt.dev/guide/essentials/wxt-modules.html#generate-runtime-module)

Create a file in `.wxt`, add an alias to import it, and add auto-imports for exported variables.

ts

```
import { defineWxtModule } from 'wxt/modules';
import { resolve } from 'node:path';

export default defineWxtModule({
  imports: [
    // Add auto-imports
    { from: '#analytics', name: 'analytics' },
    { from: '#analytics', name: 'reportEvent' },
    { from: '#analytics', name: 'reportPageView' },
  ],

  setup(wxt) {
    const analyticsModulePath = resolve(
      wxt.config.wxtDir,
      'analytics/index.ts',
    );
    const analyticsModuleCode = `
      import { createAnalytics } from 'some-module';

      export const analytics = createAnalytics(getAppConfig().analytics);
      export const { reportEvent, reportPageView } = analytics;
    `;

    addAlias(wxt, '#analytics', analyticsModulePath);

    wxt.hook('prepare:types', async (_, entries) => {
      entries.push({
        path: analyticsModulePath,
        text: analyticsModuleCode,
      });
    });
  },
});
```

#### Generate declaration file [​](https://wxt.dev/guide/essentials/wxt-modules.html#generate-declaration-file)

ts

```
import { defineWxtModule } from 'wxt/modules';
import { resolve } from 'node:path';

export default defineWxtModule({
  setup(wxt) {
    const typesPath = resolve(wxt.config.wxtDir, 'my-module/types.d.ts');
    const typesCode = `
      // Declare global types, perform type augmentation
    `;

    wxt.hook('prepare:types', async (_, entries) => {
      entries.push({
        path: 'my-module/types.d.ts',
        text: `
          // Declare global types, perform type augmentation, etc
        `,
        // IMPORTANT - without this line your declaration file will not be a part of the TS project:
        tsReference: true,
      });
    });
  },
});
```

### Example Modules [​](https://wxt.dev/guide/essentials/wxt-modules.html#example-modules)

You should also look through the code of modules other people have written and published. Here's some examples:

* [`@wxt-dev/auto-icons`](https://github.com/wxt-dev/wxt/blob/main/packages/auto-icons)
* [`@wxt-dev/i18n`](https://github.com/wxt-dev/wxt/blob/main/packages/i18n)
* [`@wxt-dev/module-vue`](https://github.com/wxt-dev/wxt/blob/main/packages/module-vue)
* [`@wxt-dev/module-solid`](https://github.com/wxt-dev/wxt/blob/main/packages/module-solid)
* [`@wxt-dev/module-react`](https://github.com/wxt-dev/wxt/blob/main/packages/module-react)
* [`@wxt-dev/module-svelte`](https://github.com/wxt-dev/wxt/blob/main/packages/module-svelte)
