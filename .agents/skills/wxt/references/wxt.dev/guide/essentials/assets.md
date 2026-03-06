---
title: "Assets – WXT"
source_url: "https://wxt.dev/guide/essentials/assets"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /guide/essentials/assets.md for this page in Markdown format

# Assets [​](https://wxt.dev/guide/essentials/assets.html#assets)

## `/assets` Directory [​](https://wxt.dev/guide/essentials/assets.html#assets-directory)

Any assets imported or referenced inside the `<srcDir>/assets/` directory will be processed by WXT's bundler.

Here's how you access them:

JSHTMLCSSVueJSX

ts

```
import imageUrl from '~/assets/image.png';

const img = document.createElement('img');
img.src = imageUrl;
```

html

```
<!-- In HTML tags, you must use the relative path --->
<img src="../assets/image.png" />
```

css

```
.bg-image {
  background-image: url(~/assets/image.png);
}
```

vue

```
<script>
import image from '~/assets/image.png';
</script>

<template>
  <img :src="image" />
</template>
```

jsx

```
import image from '~/assets/image.png';

<img src={image} />;
```

## `/public` Directory [​](https://wxt.dev/guide/essentials/assets.html#public-directory)

Files inside `<rootDir>/public/` are copied into the output folder as-is, without being processed by WXT's bundler.

Here's how you access them:

JSHTMLCSSVueJSX

ts

```
import imageUrl from '/image.png';

const img = document.createElement('img');
img.src = imageUrl;
```

html

```
<img src="/image.png" />
```

css

```
.bg-image {
  background-image: url(/image.png);
}
```

vue

```
<template>
  <img src="/image.png" />
</template>
```

jsx

```
<img src="/image.png" />
```

WARNING

Assets in the `public/` directory are ***not*** accessible in content scripts by default. To use a public asset in a content script, you must add it to your manifest's [`web_accessible_resources` array](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#web-accessible-resources).

## Inside Content Scripts [​](https://wxt.dev/guide/essentials/assets.html#inside-content-scripts)

Assets inside content scripts are a little different. By default, when you import an asset, it returns just the path to the asset. This is because Vite assumes you're loading assets from the same hostname.

But, inside content scripts, the hostname is whatever the tab is set to. So if you try to fetch the asset, manually or as an `<img>`'s `src`, it will be loaded from the tab's website, not your extension.

To fix this, you need to convert the image to a full URL using `browser.runtime.getURL`:

entrypoints/content.ts

ts

```
import iconUrl from '/icon/128.png';

export default defineContentScript({
  matches: ['*://*.google.com/*'],
  main() {
    console.log(iconUrl); // "/icon/128.png"
    console.log(browser.runtime.getURL(iconUrl)); // "chrome-extension://<id>/icon/128.png"
  },
});
```

## WASM [​](https://wxt.dev/guide/essentials/assets.html#wasm)

How a `.wasm` file is loaded varies greatly between packages, but most follow a basic setup: Use a JS API to load and execute the `.wasm` file.

For an extension, that means two things:

1. The `.wasm` file needs to be present in output folder so it can be loaded.
2. You must import the JS API to load and initialize the `.wasm` file, usually provided by the NPM package.

For an example, let's say you have a content script needs to parse TS code into AST. We'll use [`@oxc-parser/wasm`](https://www.npmjs.com/package/@oxc-parser/wasm) to do it!

First, we need to copy the `.wasm` file to the output directory. We'll do it with a [WXT module](https://wxt.dev/guide/essentials/wxt-modules.html):

ts

```
// modules/oxc-parser-wasm.ts
import { resolve } from 'node:path';

export default defineWxtModule((wxt) => {
  wxt.hook('build:publicAssets', (_, assets) => {
    assets.push({
      absoluteSrc: resolve(
        'node_modules/@oxc-parser/wasm/web/oxc_parser_wasm_bg.wasm',
      ),
      relativeDest: 'oxc_parser_wasm_bg.wasm',
    });
  });
});
```

Run `wxt build`, and you should see the WASM file copied into your `.output/chrome-mv3` folder!

Next, since this is in a content script and we'll be fetching the WASM file over the network to load it, we need to add the file to the `web_accessible_resources`:

wxt.config.ts

ts

```
export default defineConfig({
  manifest: {
    web_accessible_resources: [
      {
        // We'll use this matches in the content script as well
        matches: ['*://*.github.com/*'],
        // Use the same path as `relativeDest` from the WXT module
        resources: ['/oxc_parser_wasm_bg.wasm'],
      },
    ],
  },
});
```

And finally, we need to load and initialize the `.wasm` file inside the content script to use it:

entrypoints/content.ts

ts

```
import initWasm, { parseSync } from '@oxc-parser/wasm';

export default defineContentScript({
  matches: '*://*.github.com/*',
  async main(ctx) {
    if (!location.pathname.endsWith('.ts')) return;

    // Get text from GitHub
    const code = document.getElementById(
      'read-only-cursor-text-area',
    )?.textContent;
    if (!code) return;
    const sourceFilename = document.getElementById('file-name-id')?.textContent;
    if (!sourceFilename) return;

    // Load the WASM file:
    await initWasm({
      module_or_path: browser.runtime.getURL('/oxc_parser_wasm_bg.wasm'),
    });

    // Once loaded, we can use `parseSync`!
    const ast = parseSync(code, { sourceFilename });
    console.log(ast);
  },
});
```

This code is taken directly from `@oxc-parser/wasm` docs with one exception: We manually pass in a file path. In a standard NodeJS or web project, the default path works just fine so you don't have to pass anything in. However, extensions are different. You should always explicitly pass in the full URL to the WASM file in your output directory, which is what `browser.runtime.getURL` returns.

Run your extension, and you should see OXC parse the TS file!
