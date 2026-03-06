---
title: "Interface: WxtHooks – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/wxthooks"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/WxtHooks.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > WxtHooks

# Interface: WxtHooks [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#interface-wxthooks)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#contents)

* [Properties](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#properties)
  + [build:before](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#buildbefore)
  + [build:done](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#builddone)
  + [build:manifestGenerated](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#buildmanifestgenerated)
  + [build:publicAssets](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#buildpublicassets)
  + [config:resolved](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#configresolved)
  + [entrypoints:found](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#entrypointsfound)
  + [entrypoints:grouped](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#entrypointsgrouped)
  + [entrypoints:resolved](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#entrypointsresolved)
  + [prepare:publicPaths](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#preparepublicpaths)
  + [prepare:types](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#preparetypes)
  + [ready](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#ready)
  + [server:closed](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#serverclosed)
  + [server:created](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#servercreated)
  + [server:started](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#serverstarted)
  + [vite:build:extendConfig](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#vitebuildextendconfig)
  + [vite:devServer:extendConfig](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#vitedevserverextendconfig)
  + [zip:done](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#zipdone)
  + [zip:extension:done](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#zipextensiondone)
  + [zip:extension:start](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#zipextensionstart)
  + [zip:sources:done](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#zipsourcesdone)
  + [zip:sources:start](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#zipsourcesstart)
  + [zip:start](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#zipstart)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#properties)

### build:before [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#build-before)

> **build:before**: (`wxt`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called before the build is started in both dev mode and build mode.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The configured WXT object

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source)

[packages/wxt/src/types.ts:1218](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1218)

---

### build:done [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#build-done)

> **build:done**: (`wxt`, `output`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called once the build process has finished. You can add files to the build summary here by pushing to `output.publicAssets`.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-1)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The configured WXT object

▪ **output**: `Readonly`<[`BuildOutput`](https://wxt.dev/api/reference/wxt/interfaces/buildoutput.html)>

The results of the build

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-1)

[packages/wxt/src/types.ts:1226](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1226)

---

### build:manifestGenerated [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#build-manifestgenerated)

> **build:manifestGenerated**: (`wxt`, `manifest`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called once the manifest has been generated. Used to transform the manifest by reference before it is written to the output directory.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-2)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The configured WXT object

▪ **manifest**: `Manifest`

The manifest that was generated

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-2)

[packages/wxt/src/types.ts:1234](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1234)

---

### build:publicAssets [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#build-publicassets)

> **build:publicAssets**: (`wxt`, `files`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called when public assets are found. You can modify the `files` list by reference to add or remove public files.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-3)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The configured WXT object

▪ **files**: [`ResolvedPublicFile`](https://wxt.dev/api/reference/wxt/type-aliases/resolvedpublicfile.html)[]

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-3)

[packages/wxt/src/types.ts:1270](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1270)

---

### config:resolved [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#config-resolved)

> **config:resolved**: (`wxt`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called whenever config is loaded or reloaded. Use this hook to modify config by modifying `wxt.config`.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-4)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The configured WXT object

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-4)

[packages/wxt/src/types.ts:1175](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1175)

---

### entrypoints:found [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#entrypoints-found)

> **entrypoints:found**: (`wxt`, `infos`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called once the names and paths of all entrypoints have been resolved.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-5)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The configured WXT object

▪ **infos**: [`EntrypointInfo`](https://wxt.dev/api/reference/wxt/interfaces/entrypointinfo.html)[]

List of entrypoints found in the project's `entrypoints` directory

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-5)

[packages/wxt/src/types.ts:1245](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1245)

---

### entrypoints:grouped [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#entrypoints-grouped)

> **entrypoints:grouped**: (`wxt`, `groups`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called once all entrypoints have been grouped into their build groups.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-6)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The configured WXT object

▪ **groups**: [`EntrypointGroup`](https://wxt.dev/api/reference/wxt/type-aliases/entrypointgroup.html)[]

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-6)

[packages/wxt/src/types.ts:1261](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1261)

---

### entrypoints:resolved [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#entrypoints-resolved)

> **entrypoints:resolved**: (`wxt`, `entrypoints`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called once all entrypoints have been loaded from the `entrypointsDir`. Use `wxt.builder.importEntrypoint` to load entrypoint options from the file, or manually define them.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-7)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The configured WXT object

▪ **entrypoints**: [`Entrypoint`](https://wxt.dev/api/reference/wxt/type-aliases/entrypoint.html)[]

The list of entrypoints to be built

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-7)

[packages/wxt/src/types.ts:1254](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1254)

---

### prepare:publicPaths [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#prepare-publicpaths)

> **prepare:publicPaths**: (`wxt`, `paths`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called before generating the list of public paths inside `.wxt/types/paths.d.ts`. Use this hook to add additional paths (relative to output directory) WXT doesn't add automatically.

#### Example [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#example)

ts

```
wxt.hooks.hook('prepare:publicPaths', (wxt, paths) => {
    paths.push('/icons/128.png');
  });
```

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-8)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The configured WXT object

▪ **paths**: `string`[]

This list of paths TypeScript allows `browser.runtime.getURL` to be called with.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-8)

[packages/wxt/src/types.ts:1212](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1212)

---

### prepare:types [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#prepare-types)

> **prepare:types**: (`wxt`, `entries`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called before WXT writes .wxt/tsconfig.json and .wxt/wxt.d.ts, allowing addition of custom references and declarations in wxt.d.ts, or directly modifying the options in `tsconfig.json`.

#### Example [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#example-1)

ts

```
wxt.hooks.hook('prepare:types', (wxt, entries) => {
    // Add a file, ".wxt/types/example.d.ts", that defines a global
    // variable called "example" in the TS project.
    entries.push({
      path: 'types/example.d.ts',
      text: 'declare const a: string;',
      tsReference: true,
    });
    // use module to add Triple-Slash Directive in .wxt/wxt.d.ts
    // eg: /// <reference types="@types/example" />
    entries.push({
      module: '@types/example',
    });
  });
```

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-9)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

▪ **entries**: [`WxtDirEntry`](https://wxt.dev/api/reference/wxt/type-aliases/wxtdirentry.html)[]

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-9)

[packages/wxt/src/types.ts:1197](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1197)

---

### ready [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#ready)

> **ready**: (`wxt`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called after WXT modules are initialized, when the WXT instance is ready to be used. `wxt.server` isn't available yet, use `server:created` to get it.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-10)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The configured WXT object

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-10)

[packages/wxt/src/types.ts:1168](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1168)

---

### server:closed [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#server-closed)

> **server:closed**: (`wxt`, `server`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called when the dev server is stopped.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-11)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The configured WXT object

▪ **server**: [`WxtDevServer`](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html)

Same as `wxt.server`, the object WXT uses to control the dev server.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-11)

[packages/wxt/src/types.ts:1334](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1334)

---

### server:created [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#server-created)

> **server:created**: (`wxt`, `server`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called when the dev server is created (and `wxt.server` is assigned). Server has not been started yet.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-12)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The configured WXT object

▪ **server**: [`WxtDevServer`](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html)

Same as `wxt.server`, the object WXT uses to control the dev server.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-12)

[packages/wxt/src/types.ts:1318](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1318)

---

### server:started [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#server-started)

> **server:started**: (`wxt`, `server`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called when the dev server is started.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-13)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The configured WXT object

▪ **server**: [`WxtDevServer`](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html)

Same as `wxt.server`, the object WXT uses to control the dev server.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-13)

[packages/wxt/src/types.ts:1326](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1326)

---

### vite:build:extendConfig [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#vite-build-extendconfig)

> **vite:build:extendConfig**: (`entrypoints`, `viteConfig`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called when WXT has created Vite's config for a build step. Useful if you want to add plugins or update the vite config per entrypoint group.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-14)

▪ **entrypoints**: readonly [`Entrypoint`](https://wxt.dev/api/reference/wxt/type-aliases/entrypoint.html)[]

The list of entrypoints being built with the provided config.

▪ **viteConfig**: `InlineConfig`

The config that will be used for the dev server.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-14)

[packages/wxt/src/types.ts:441](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L441)

---

### vite:devServer:extendConfig [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#vite-devserver-extendconfig)

> **vite:devServer:extendConfig**: (`config`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called when WXT has created Vite's config for the dev server. Useful if you want to add plugins or update the vite config per entrypoint group.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-15)

▪ **config**: `InlineConfig`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-15)

[packages/wxt/src/types.ts:452](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L452)

---

### zip:done [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#zip-done)

> **zip:done**: (`wxt`, `zipFiles`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called after the entire zip process is complete.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-16)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The configured WXT object

▪ **zipFiles**: `string`[]

An array of paths to all created zip files

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-16)

[packages/wxt/src/types.ts:1309](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1309)

---

### zip:extension:done [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#zip-extension-done)

> **zip:extension:done**: (`wxt`, `zipPath`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called after zipping the extension files.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-17)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The configured WXT object

▪ **zipPath**: `string`

The path to the created extension zip file

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-17)

[packages/wxt/src/types.ts:1289](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1289)

---

### zip:extension:start [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#zip-extension-start)

> **zip:extension:start**: (`wxt`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called before zipping the extension files.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-18)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The configured WXT object

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-18)

[packages/wxt/src/types.ts:1282](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1282)

---

### zip:sources:done [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#zip-sources-done)

> **zip:sources:done**: (`wxt`, `zipPath`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called after zipping the source files (for Firefox).

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-19)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The configured WXT object

▪ **zipPath**: `string`

The path to the created sources zip file

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-19)

[packages/wxt/src/types.ts:1302](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1302)

---

### zip:sources:start [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#zip-sources-start)

> **zip:sources:start**: (`wxt`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called before zipping the source files (for Firefox).

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-20)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The configured WXT object

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-20)

[packages/wxt/src/types.ts:1295](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1295)

---

### zip:start [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#zip-start)

> **zip:start**: (`wxt`) => [`HookResult`](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)

Called before the zip process starts.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#parameters-21)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The configured WXT object

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html#source-21)

[packages/wxt/src/types.ts:1276](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1276)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
