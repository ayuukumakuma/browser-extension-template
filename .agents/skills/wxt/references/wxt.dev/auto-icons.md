---
title: "WXT Auto Icons – WXT"
source_url: "https://wxt.dev/auto-icons"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /auto-icons.md for this page in Markdown format

# WXT Auto Icons [​](https://wxt.dev/auto-icons.html#wxt-auto-icons)

[Changelog](https://github.com/wxt-dev/wxt/blob/main/packages/auto-icons/CHANGELOG.md)

## Features [​](https://wxt.dev/auto-icons.html#features)

* Generate extension icons with the correct sizes
* Make the icon greyscale or include a visible overlay during development
* SVG is supported

## Usage [​](https://wxt.dev/auto-icons.html#usage)

Install the package:

sh

```
npm i --save-dev @wxt-dev/auto-icons
pnpm i -D @wxt-dev/auto-icons
yarn add --dev @wxt-dev/auto-icons
bun i -D @wxt-dev/auto-icons
```

Add the module to `wxt.config.ts`:

ts

```
export default defineConfig({
  modules: ['@wxt-dev/auto-icons'],
});
```

And finally, save the base icon to `<srcDir>/assets/icon.png`.

## Configuration [​](https://wxt.dev/auto-icons.html#configuration)

The module can be configured via the `autoIcons` config:

ts

```
export default defineConfig({
  modules: ['@wxt-dev/auto-icons'],
  autoIcons: {
    // ...
  },
});
```

Options have JSDocs available in your editor, or you can read them in the source code: [`AutoIconsOptions`](https://github.com/wxt-dev/wxt/blob/main/packages/auto-icons/src/index.ts).
