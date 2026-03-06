---
title: "Migrate to WXT – WXT"
source_url: "https://wxt.dev/guide/resources/migrate"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /guide/resources/migrate.md for this page in Markdown format

# Migrate to WXT [​](https://wxt.dev/guide/resources/migrate.html#migrate-to-wxt)

> If you have problems migrating to WXT, feel free to ask for help in GitHub by [starting a discussion](https://github.com/wxt-dev/wxt/discussions/new?category=q-a) or in [Discord](https://discord.gg/ZFsZqGery9)!

## Overview [​](https://wxt.dev/guide/resources/migrate.html#overview)

Always start by generating a new vanilla project and merging it into your project one file at a time.

sh

```
cd path/to/your/project
pnpm dlx wxt@latest init example-wxt --template vanilla
```

TIP

We recommend reviewing [project structure](https://wxt.dev/guide/essentials/project-structure.html) before you get started. You can customize directory names in `wxt.config.ts` to match your project's needs.

In general, you'll need to:

Install `wxt`
   [Extend `.wxt/tsconfig.json`](https://wxt.dev/guide/essentials/config/typescript.html#typescript-configuration) in your project's `tsconfig.json`
   Update/create `package.json` scripts to use `wxt` (don't forget about `postinstall`)
   Move entrypoints into `entrypoints/` directory
   Move assets into either the `assets/` or `public/` directories
   Move `manifest.json` content into `wxt.config.ts`
   Convert custom import syntax to be compatible with Vite
   Add a default export to JS entrypoints (`defineBackground`, `defineContentScript`, or `defineUnlistedScript`)
   Use the `browser` global instead of `chrome`
   ⚠️ Compare final `manifest.json` files, making sure permissions and host permissions are unchanged

WARNING

If your extension is already live on the Chrome Web Store, use [Google's update testing tool](https://github.com/GoogleChromeLabs/extension-update-testing-tool) to make sure no new permissions are being requested.

Every project is different, so there's no one-solution-fits-all to migrating your project. Just make sure `wxt dev` runs, `wxt build` results in a working extension, and the list of permissions in the `manifest.json` hasn't changed. If all that looks good, you've finished migrating your extension!

## Popular Tools/Frameworks [​](https://wxt.dev/guide/resources/migrate.html#popular-tools-frameworks)

Here's specific steps for other popular frameworks/build tools.

### Plasmo [​](https://wxt.dev/guide/resources/migrate.html#plasmo)

1. Install `wxt`
2. Move entrypoints into `entrypoints/` directory
   * For JS entrypoints, merge the named exports used to configure your JS entrypoints into WXT's default export
   * For HTML entrypoints, you cannot use JSX/Vue/Svelte files directly, you need to create an HTML file and manually create and mount your app. Refer to the [React](https://github.com/wxt-dev/wxt/tree/main/templates/react/entrypoints/popup), [Vue](https://github.com/wxt-dev/wxt/tree/main/templates/vue/entrypoints/popup), and [Svelte](https://github.com/wxt-dev/wxt/tree/main/templates/svelte/src/entrypoints/popup) templates as an example.
3. Move public `assets/*` into the `public/` directory
4. If you use CSUI, migrate to WXT's `createContentScriptUi`
5. Convert Plasmo's custom import resolutions to Vite's
6. If importing remote code via a URL, add a `url:` prefix so it works with WXT
7. Replace your [Plasmo tags](https://docs.plasmo.com/framework/workflows/build#with-a-custom-tag) (`--tag`) with [WXT build modes](https://wxt.dev/guide/essentials/config/build-mode.html) (`--mode`)
8. ⚠️ Compare the old production manifest to `.output/*/manifest.json`. They should have the same content as before. If not, tweak your entrypoints and config until they are the same.

### CRXJS [​](https://wxt.dev/guide/resources/migrate.html#crxjs)

If you used CRXJS's vite plugin, it's a simple refactor! The main difference between CRXJS and WXT is how the tools decide which entrypoints to build. CRXJS looks at your `manifest` (and vite config for "unlisted" entries), while WXT looks at files in the `entrypoints` directory.

To migrate:

1. Move all entrypoints into the `entrypoints` directory, refactoring to WXT's style (TS files have a default export).
2. Move [entrypoint specific options out of the manifest](https://wxt.dev/guide/essentials/entrypoints.html#defining-manifest-options) and into the entrypoint files themselves (like content script `matches` or `run_at`).
3. Move any other `manifest.json` options [into the `wxt.config.ts` file](https://wxt.dev/guide/essentials/config/manifest.html), like permissions.
4. For simplicity, you'll probably want to [disable auto-imports](https://wxt.dev/guide/essentials/config/auto-imports.html#disabling-auto-imports) at first (unless you were already using them via `unimport` or `unplugin-auto-imports`). If you like the feature, you can enable it later once you've finished the migration.
5. Update your `package.json` to include all of [WXT's suggested scripts (see step 4)](https://wxt.dev/guide/installation.html#from-scratch)
6. Specifically, make sure you add the `"postinstall": "wxt prepare"` script to your `package.json`.
7. Delete your `vite.config.ts` file. Move any plugins into the `wxt.config.ts` file. If you use a frontend framework, [install the relevant WXT module](https://wxt.dev/guide/essentials/frontend-frameworks.html).
8. Update your typescript project. [Extend WXT's generated config](https://wxt.dev/guide/essentials/config/typescript.html), and [add any path aliases to your `wxt.config.ts` file](https://wxt.dev/guide/essentials/config/typescript.html#tsconfig-paths).
9. ⚠️ Compare the old production manifest to `.output/*/manifest.json`. They should have the same content as before. If not, tweak your entrypoints and config until they are the same.

Here's an example migration: [GitHub Better Line Counts - CRXJS → WXT](https://github.com/aklinker1/github-better-line-counts/commit/39d766d2ba86866efefc2e9004af554ee434e2a8)

### `vite-plugin-web-extension` [​](https://wxt.dev/guide/resources/migrate.html#vite-plugin-web-extension)

Since you're already using Vite, it's a simple refactor.

1. Install `wxt`
2. Move and refactor your entrypoints to WXT's style (with a default export)
3. Update package.json scripts to use `wxt`
4. Add `"postinstall": "wxt prepare"` script
5. Move the `manifest.json` into `wxt.config.ts`
6. Move any custom settings from `vite.config.ts` into `wxt.config.ts`'s
7. ⚠️ Compare the old production manifest to `.output/*/manifest.json`. They should have the same content as before. If not, tweak your entrypoints and config until they are the same.
