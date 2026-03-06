---
title: "Entrypoints – WXT"
source_url: "https://wxt.dev/guide/essentials/entrypoints"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /guide/essentials/entrypoints.md for this page in Markdown format

# Entrypoints [​](https://wxt.dev/guide/essentials/entrypoints.html#entrypoints)

WXT uses the files inside the `entrypoints/` directory as inputs when bundling your extension. They can be HTML, JS, CSS, or any variant of those file types supported by Vite (TS, JSX, SCSS, etc).

## Folder Structure [​](https://wxt.dev/guide/essentials/entrypoints.html#folder-structure)

Inside the `entrypoints/` directory, an entrypoint is defined as a single file or directory (with an `index` file) inside it.

Single FileDirectory

html

```
📂 entrypoints/
   📄 {name}.{ext}
```

html

```
📂 entrypoints/
   📂 {name}/
      📄 index.{ext}
```

The entrypoint's `name` dictates the type of entrypoint. For example, to add a ["Background" entrypoint](https://wxt.dev/guide/essentials/entrypoints.html#background), either of these files would work:

Single FileDirectory

html

```
📂 entrypoints/
   📄 background.ts
```

html

```
📂 entrypoints/
   📂 background/
      📄 index.ts
```

Refer to the [Entrypoint Types](https://wxt.dev/guide/essentials/entrypoints.html#entrypoint-types) section for the full list of listed entrypoints and their filename patterns.

### Including Other Files [​](https://wxt.dev/guide/essentials/entrypoints.html#including-other-files)

When using an entrypoint directory, `entrypoints/{name}/index.{ext}`, you can add related files next to the `index` file.

html

```
📂 entrypoints/
   📂 popup/
      📄 index.html     ← This file is the entrypoint
      📄 main.ts
      📄 style.css
   📂 background/
      📄 index.ts       ← This file is the entrypoint
      📄 alarms.ts
      📄 messaging.ts
   📂 youtube.content/
      📄 index.ts       ← This file is the entrypoint
      📄 style.css
```

DANGER

**DO NOT** put files related to an entrypoint directly inside the `entrypoints/` directory. WXT will treat them as entrypoints and try to build them, usually resulting in an error.

Instead, use a directory for that entrypoint:

html

```
📂 entrypoints/
   📄 popup.html
   📄 popup.ts
   📄 popup.css
   📂 popup/
      📄 index.html
      📄 main.ts
      📄 style.css
```

### Deeply Nested Entrypoints [​](https://wxt.dev/guide/essentials/entrypoints.html#deeply-nested-entrypoints)

While the `entrypoints/` directory might resemble the `pages/` directory of other web frameworks, like Nuxt or Next.js, **it does not support deeply nesting entrypoints** in the same way.

Entrypoints must be zero or one levels deep for WXT to discover and build them:

html

```
📂 entrypoints/
   📂 youtube/
       📂 content/
          📄 index.ts
          📄 ...
       📂 injected/
          📄 index.ts
          📄 ...
   📂 youtube.content/
      📄 index.ts
      📄 ...
   📂 youtube-injected/
      📄 index.ts
      📄 ...
```

## Unlisted Entrypoints [​](https://wxt.dev/guide/essentials/entrypoints.html#unlisted-entrypoints)

In web extensions, there are two types of entrypoints:

1. **Listed**: Referenced in the `manifest.json`
2. **Unlisted**: Not referenced in the `manifest.json`

Throughout the rest of WXT's documentation, listed entrypoints are referred to by name. For example:

* Popup
* Options
* Background
* Content Script

However, not all entrypoints in web extensions are listed in the manifest. Some are not listed in the manifest, but are still used by extensions. For example:

* A welcome page shown in a new tab when the extension is installed
* JS files injected by content scripts into the main world

For more details on how to add unlisted entrypoints, see:

* [Unlisted Pages](https://wxt.dev/guide/essentials/entrypoints.html#unlisted-pages)
* [Unlisted Scripts](https://wxt.dev/guide/essentials/entrypoints.html#unlisted-scripts)
* [Unlisted CSS](https://wxt.dev/guide/essentials/entrypoints.html#unlisted-css)

## Defining Manifest Options [​](https://wxt.dev/guide/essentials/entrypoints.html#defining-manifest-options)

Most listed entrypoints have options that need to be added to the `manifest.json`. However with WXT, instead of defining the options in a separate file, *you define these options inside the entrypoint file itself*.

For example, here's how to define `matches` for content scripts:

entrypoints/content.ts

ts

```
export default defineContentScript({
  matches: ['*://*.wxt.dev/*'],
  main() {
    // ...
  },
});
```

For HTML entrypoints, options are configured as `<meta>` tags. For example, to use a `page_action` for your MV2 popup:

html

```
<!doctype html>
<html lang="en">
  <head>
    <meta name="manifest.type" content="page_action" />
  </head>
</html>
```

> Refer to the [Entrypoint Types](https://wxt.dev/guide/essentials/entrypoints.html#entrypoint-types) sections for a list of options configurable inside each entrypoint, and how to define them.

When building your extension, WXT will look at the options defined in your entrypoints, and generate the manifest accordingly.

## Entrypoint Types [​](https://wxt.dev/guide/essentials/entrypoints.html#entrypoint-types)

### Background [​](https://wxt.dev/guide/essentials/entrypoints.html#background)

[Chrome Docs](https://developer.chrome.com/docs/extensions/mv3/manifest/background/) • [Firefox Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background)

| Filename |  | Output Path |
| --- | --- | --- |
| `entrypoints/background.[jt]s` |  | `/background.js` |
| `entrypoints/background/index.[jt]s` |  | `/background.js` |

MinimalWith Manifest Options

ts

```
export default defineBackground(() => {
  // Executed when background is loaded
});
```

ts

```
export default defineBackground({
  // Set manifest options
  persistent: undefined | true | false,
  type: undefined | 'module',

  // Set include/exclude if the background should be removed from some builds
  include: undefined | string[],
  exclude: undefined | string[],

  main() {
    // Executed when background is loaded, CANNOT BE ASYNC
  },
});
```

For MV2, the background is added as a script to the background page. For MV3, the background becomes a service worker.

When defining your background entrypoint, keep in mind that WXT will import this file in a NodeJS environment during the build process. That means you cannot place any runtime code outside the `main` function.

ts

```
browser.action.onClicked.addListener(() => {
  // ...
});

export default defineBackground(() => {
  browser.action.onClicked.addListener(() => {
    // ...
  });
});
```

Refer to the [Entrypoint Loaders](https://wxt.dev/guide/essentials/config/entrypoint-loaders.html) documentation for more details.

### Bookmarks [​](https://wxt.dev/guide/essentials/entrypoints.html#bookmarks)

[Chrome Docs](https://developer.chrome.com/docs/extensions/mv3/override/) • [Firefox Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides)

| Filename |  | Output Path |
| --- | --- | --- |
| `entrypoints/bookmarks.html` |  | `/bookmarks.html` |
| `entrypoints/bookmarks/index.html` |  | `/bookmarks.html` |

html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Title</title>
    <!-- Set include/exclude if the page should be removed from some builds -->
    <meta name="manifest.include" content="['chrome', ...]" />
    <meta name="manifest.exclude" content="['chrome', ...]" />
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

When you define a Bookmarks entrypoint, WXT will automatically update the manifest to override the browser's bookmarks page with your own HTML page.

### Content Scripts [​](https://wxt.dev/guide/essentials/entrypoints.html#content-scripts)

[Chrome Docs](https://developer.chrome.com/docs/extensions/mv3/content_scripts/) • [Firefox Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)

| Filename |  | Output Path |
| --- | --- | --- |
| `entrypoints/content.[jt]sx?` |  | `/content-scripts/content.js` |
| `entrypoints/content/index.[jt]sx?` |  | `/content-scripts/content.js` |
| `entrypoints/{name}.content.[jt]sx?` |  | `/content-scripts/{name}.js` |
| `entrypoints/{name}.content/index.[jt]sx?` |  | `/content-scripts/{name}.js` |

ts

```
export default defineContentScript({
  // Set manifest options
  matches: string[],
  excludeMatches: undefined | [],
  includeGlobs: undefined | [],
  excludeGlobs: undefined | [],
  allFrames: undefined | true | false,
  runAt: undefined | 'document_start' | 'document_end' | 'document_idle',
  matchAboutBlank: undefined | true | false,
  matchOriginAsFallback: undefined | true | false,
  world: undefined | 'ISOLATED' | 'MAIN',

  // Set include/exclude if the background should be removed from some builds
  include: undefined | string[],
  exclude: undefined | string[],

  // Configure how CSS is injected onto the page
  cssInjectionMode: undefined | "manifest" | "manual" | "ui",

  // Configure how/when content script will be registered
  registration: undefined | "manifest" | "runtime",

  main(ctx: ContentScriptContext) {
    // Executed when content script is loaded, can be async
  },
});
```

When defining content script entrypoints, keep in mind that WXT will import this file in a NodeJS environment during the build process. That means you cannot place any runtime code outside the `main` function.

ts

```
const container = document.createElement('div');
document.body.append(container);

export default defineContentScript({
  main: function () {
    const container = document.createElement('div');
    document.body.append(container);
  },
});
```

Refer to the [Entrypoint Loaders](https://wxt.dev/guide/essentials/config/entrypoint-loaders.html) documentation for more details.

See [Content Script UI](https://wxt.dev/guide/essentials/content-scripts.html) for more info on creating UIs and including CSS in content scripts.

### Devtools [​](https://wxt.dev/guide/essentials/entrypoints.html#devtools)

[Chrome Docs](https://developer.chrome.com/docs/extensions/mv3/devtools/) • [Firefox Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)

| Filename |  | Output Path |
| --- | --- | --- |
| `entrypoints/devtools.html` |  | `/devtools.html` |
| `entrypoints/devtools/index.html` |  | `/devtools.html` |

html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Set include/exclude if the page should be removed from some builds -->
    <meta name="manifest.include" content="['chrome', ...]" />
    <meta name="manifest.exclude" content="['chrome', ...]" />
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

Follow the [Devtools Example](https://github.com/wxt-dev/examples/tree/main/examples/devtools-extension#readme) to add different panels and panes.

### History [​](https://wxt.dev/guide/essentials/entrypoints.html#history)

[Chrome Docs](https://developer.chrome.com/docs/extensions/mv3/override/) • [Firefox Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides)

| Filename |  | Output Path |
| --- | --- | --- |
| `entrypoints/history.html` |  | `/history.html` |
| `entrypoints/history/index.html` |  | `/history.html` |

html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Title</title>
    <!-- Set include/exclude if the page should be removed from some builds -->
    <meta name="manifest.include" content="['chrome', ...]" />
    <meta name="manifest.exclude" content="['chrome', ...]" />
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

When you define a History entrypoint, WXT will automatically update the manifest to override the browser's history page with your own HTML page.

### Newtab [​](https://wxt.dev/guide/essentials/entrypoints.html#newtab)

[Chrome Docs](https://developer.chrome.com/docs/extensions/mv3/override/) • [Firefox Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides)

| Filename |  | Output Path |
| --- | --- | --- |
| `entrypoints/newtab.html` |  | `/newtab.html` |
| `entrypoints/newtab/index.html` |  | `/newtab.html` |

html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Title</title>
    <!-- Set include/exclude if the page should be removed from some builds -->
    <meta name="manifest.include" content="['chrome', ...]" />
    <meta name="manifest.exclude" content="['chrome', ...]" />
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

When you define a Newtab entrypoint, WXT will automatically update the manifest to override the browser's new tab page with your own HTML page.

### Options [​](https://wxt.dev/guide/essentials/entrypoints.html#options)

[Chrome Docs](https://developer.chrome.com/docs/extensions/mv3/options/) • [Firefox Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)

| Filename |  | Output Path |
| --- | --- | --- |
| `entrypoints/options.html` |  | `/options.html` |
| `entrypoints/options/index.html` |  | `/options.html` |

html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Options Title</title>

    <!-- Customize the manifest options -->
    <meta name="manifest.open_in_tab" content="true|false" />
    <meta name="manifest.chrome_style" content="true|false" />
    <meta name="manifest.browser_style" content="true|false" />

    <!-- Set include/exclude if the page should be removed from some builds -->
    <meta name="manifest.include" content="['chrome', ...]" />
    <meta name="manifest.exclude" content="['chrome', ...]" />
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

### Popup [​](https://wxt.dev/guide/essentials/entrypoints.html#popup)

[Chrome Docs](https://developer.chrome.com/docs/extensions/reference/action/) • [Firefox Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action)

| Filename |  | Output Path |
| --- | --- | --- |
| `entrypoints/popup.html` |  | `/popup.html` |
| `entrypoints/popup/index.html` |  | `/popup.html` |

html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Set the `action.default_title` in the manifest -->
    <title>Default Popup Title</title>

    <!-- Customize the manifest options -->
    <meta
      name="manifest.default_icon"
      content="{
        16: '/icon-16.png',
        24: '/icon-24.png',
        ...
      }"
    />
    <meta name="manifest.type" content="page_action|browser_action" />
    <meta name="manifest.browser_style" content="true|false" />
    <!-- Firefox only: where to place the action button -->
    <meta
      name="manifest.default_area"
      content="navbar|menupanel|tabstrip|personaltoolbar"
    />
    <!-- Firefox only: icons for light/dark themes -->
    <meta
      name="manifest.theme_icons"
      content="[
        { light: '/icon-light-16.png', dark: '/icon-dark-16.png', size: 16 },
        { light: '/icon-light-32.png', dark: '/icon-dark-32.png', size: 32 }
      ]"
    />

    <!-- Set include/exclude if the page should be removed from some builds -->
    <meta name="manifest.include" content="['chrome', ...]" />
    <meta name="manifest.exclude" content="['chrome', ...]" />
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

### Sandbox [​](https://wxt.dev/guide/essentials/entrypoints.html#sandbox)

[Chrome Docs](https://developer.chrome.com/docs/extensions/mv3/manifest/sandbox/)

Chromium Only

Firefox does not support sandboxed pages.

| Filename |  | Output Path |
| --- | --- | --- |
| `entrypoints/sandbox.html` |  | `/sandbox.html` |
| `entrypoints/sandbox/index.html` |  | `/sandbox.html` |
| `entrypoints/{name}.sandbox.html` |  | `/{name}.html` |
| `entrypoints/{name}.sandbox/index.html` |  | `/{name}.html` |

html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Title</title>

    <!-- Set include/exclude if the page should be removed from some builds -->
    <meta name="manifest.include" content="['chrome', ...]" />
    <meta name="manifest.exclude" content="['chrome', ...]" />
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

### Side Panel [​](https://wxt.dev/guide/essentials/entrypoints.html#side-panel)

[Chrome Docs](https://developer.chrome.com/docs/extensions/reference/sidePanel/) • [Firefox Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)

| Filename |  | Output Path |
| --- | --- | --- |
| `entrypoints/sidepanel.html` |  | `/sidepanel.html` |
| `entrypoints/sidepanel/index.html` |  | `/sidepanel.html` |
| `entrypoints/{name}.sidepanel.html` |  | `` /{name}.html` `` |
| `entrypoints/{name}.sidepanel/index.html` |  | `` /{name}.html` `` |

html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Default Side Panel Title</title>

    <!-- Customize the manifest options -->
    <meta
      name="manifest.default_icon"
      content="{
        16: '/icon-16.png',
        24: '/icon-24.png',
        ...
      }"
    />
    <meta name="manifest.open_at_install" content="true|false" />
    <meta name="manifest.browser_style" content="true|false" />

    <!-- Set include/exclude if the page should be removed from some builds -->
    <meta name="manifest.include" content="['chrome', ...]" />
    <meta name="manifest.exclude" content="['chrome', ...]" />
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

In Chrome, side panels use the `side_panel` API, while Firefox uses the `sidebar_action` API.

### Unlisted CSS [​](https://wxt.dev/guide/essentials/entrypoints.html#unlisted-css)

| Filename |  | Output Path |
| --- | --- | --- |
| `entrypoints/{name}.(css|scss|sass|less|styl|stylus)` |  | `/{name}.css` |
| `entrypoints/{name}/index.(css|scss|sass|less|styl|stylus)` |  | `/{name}.css` |
| `entrypoints/content.(css|scss|sass|less|styl|stylus)` |  | `/content-scripts/content.css` |
| `entrypoints/content/index.(css|scss|sass|less|styl|stylus)` |  | `/content-scripts/content.css` |
| `entrypoints/{name}.content.(css|scss|sass|less|styl|stylus)` |  | `/content-scripts/{name}.css` |
| `entrypoints/{name}.content/index.(css|scss|sass|less|styl|stylus)` |  | `/content-scripts/{name}.css` |

css

```
body {
  /* ... */
}
```

Follow Vite's guide to setup your preprocessor of choice: <https://vitejs.dev/guide/features.html#css-pre-processors>

CSS entrypoints are always unlisted. To add CSS to a content script, see the [Content Script](https://wxt.dev/guide/essentials/content-scripts.html#css) docs.

### Unlisted Pages [​](https://wxt.dev/guide/essentials/entrypoints.html#unlisted-pages)

| Filename |  | Output Path |
| --- | --- | --- |
| `entrypoints/{name}.html` |  | `/{name}.html` |
| `entrypoints/{name}/index.html` |  | `/{name}.html` |

html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Title</title>

    <!-- Set include/exclude if the page should be removed from some builds -->
    <meta name="manifest.include" content="['chrome', ...]" />
    <meta name="manifest.exclude" content="['chrome', ...]" />
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

At runtime, unlisted pages are accessible at `/{name}.html`:

ts

```
const url = browser.runtime.getURL('/{name}.html');

console.log(url); // "chrome-extension://{id}/{name}.html"
window.open(url); // Open the page in a new tab
```

### Unlisted Scripts [​](https://wxt.dev/guide/essentials/entrypoints.html#unlisted-scripts)

| Filename |  | Output Path |
| --- | --- | --- |
| `entrypoints/{name}.[jt]sx?` |  | `/{name}.js` |
| `entrypoints/{name}/index.[jt]sx?` |  | `/{name}.js` |

MinimalWith Options

ts

```
export default defineUnlistedScript(() => {
  // Executed when script is loaded
});
```

ts

```
export default defineUnlistedScript({
  // Set include/exclude if the script should be removed from some builds
  include: undefined | string[],
  exclude: undefined | string[],

  main() {
    // Executed when script is loaded
  },
});
```

At runtime, unlisted scripts are accessible from `/{name}.js`:

ts

```
const url = browser.runtime.getURL('/{name}.js');

console.log(url); // "chrome-extension://{id}/{name}.js"
```

You are responsible for loading/running these scripts where needed. If necessary, don't forget to add the script and/or any related assets to [`web_accessible_resources`](https://developer.chrome.com/docs/extensions/reference/manifest/web-accessible-resources).

When defining an unlisted script, keep in mind that WXT will import this file in a NodeJS environment during the build process. That means you cannot place any runtime code outside the `main` function.

ts

```
document.querySelectorAll('a').forEach((anchor) => {
  // ...
});

export default defineUnlistedScript(() => {
  document.querySelectorAll('a').forEach((anchor) => {
    // ...
  });
});
```

Refer to the [Entrypoint Loaders](https://wxt.dev/guide/essentials/config/entrypoint-loaders.html) documentation for more details.
