---
title: "Interface: InlineConfig – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/inlineconfig"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/InlineConfig.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > InlineConfig

# Interface: InlineConfig [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#interface-inlineconfig)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#contents)

* [Properties](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#properties)
  + [alias](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#alias)
  + [analysis](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#analysis)
  + [browser](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#browser)
  + [configFile](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#configfile)
  + [debug](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#debug)
  + [dev](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#dev)
  + [entrypointsDir](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#entrypointsdir)
  + [experimental](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#experimental)
  + [filterEntrypoints](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#filterentrypoints)
  + [hooks](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#hooks)
  + [imports](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#imports)
  + [logger](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#logger)
  + [manifest](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#manifest)
  + [manifestVersion](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#manifestversion)
  + [mode](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#mode)
  + [modules](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#modules)
  + [modulesDir](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#modulesdir)
  + [outDir](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#outdir)
  + [outDirTemplate](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#outdirtemplate)
  + [publicDir](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#publicdir)
  + [root](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#root)
  + [runner](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#runner)
  + [srcDir](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#srcdir)
  + [targetBrowsers](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#targetbrowsers)
  + [vite](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#vite)
  + [webExt](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#webext)
  + [zip](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#zip)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#properties)

### alias [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#alias)

> **alias**?: `Record`<`string`, `string`>

Add additional paths to the `.wxt/tsconfig.json`. Use this instead of overwriting the `paths` in the root `tsconfig.json` if you want to add new paths.

The key is the import alias and the value is either a relative path to the root directory or an absolute path.

#### Example [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#example)

ts

```
{ "testing": "src/utils/testing.ts" }
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source)

[packages/wxt/src/types.ts:347](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L347)

---

### analysis [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#analysis)

> **analysis**?: `object`

#### Type declaration [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#type-declaration)

##### enabled [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#enabled)

> **enabled**?: `boolean`

Explicitly include bundle analysis when running `wxt build`. This can be overridden by the command line `--analyze` option.

###### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default)

ts

```
false
```

##### keepArtifacts [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#keepartifacts)

> **keepArtifacts**?: `boolean`

By default, the `stats-*.json` artifacts generated during bundle analysis are deleted. Set to `true` to keep them.

One stats file is output per build step.

###### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-1)

ts

```
false
```

##### open [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#open)

> **open**?: `boolean`

Set to true to automatically open the `stats.html` file when the build is finished. When building in CI, the browser will never open.

###### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-2)

ts

```
false
```

##### outputFile [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#outputfile)

> **outputFile**?: `string`

Name of the output HTML file. Relative to the project's root directory.

Changing the filename of the outputFile also effects the names of the artifacts generated when setting `keepArtifacts` to true:

* "stats.html" => "stats-\*.json"
* "stats/bundle.html" => "bundle-\*.json"
* ".analysis/index.html" => "index-\*.json"

###### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-3)

ts

```
'stats.html'
```

##### template [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#template)

> **template**?: `TemplateType`

When running `wxt build --analyze` or setting `analysis.enabled` to true, customize how the bundle will be visualized. See [`rollup-plugin-visualizer`](https://github.com/btd/rollup-plugin-visualizer#how-to-use-generated-files) for more details.

###### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-4)

ts

```
'treemap'
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-1)

[packages/wxt/src/types.ts:289](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L289)

---

### browser [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#browser)

> **browser**?: `string`

Explicitly set a browser to build for. This will override the default browser for each command, and can be overridden by the command line `--browser` option.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-5)

ts

```
"chrome"
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-2)

[packages/wxt/src/types.ts:119](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L119)

---

### configFile [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#configfile)

> **configFile**?: `string` | `false`

> Only available when using the JS API. Not available in `wxt.config.ts` files

Path to `wxt.config.ts` file or `false` to disable config file discovery.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-6)

ts

```
'wxt.config.ts'
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-3)

[packages/wxt/src/types.ts:84](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L84)

---

### debug [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#debug)

> **debug**?: `boolean`

Set to `true` to show debug logs. Overridden by the command line `--debug` option.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-7)

ts

```
false
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-4)

[packages/wxt/src/types.ts:91](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L91)

---

### dev [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#dev)

> **dev**?: `object`

Config effecting dev mode only.

#### Type declaration [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#type-declaration-1)

##### reloadCommand [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#reloadcommand)

> **reloadCommand**?: `string` | `false`

Controls whether a custom keyboard shortcut command, `Alt+R`, is added during dev mode to quickly reload the extension.

If false, the shortcut is not added during development.

If set to a custom string, you can override the key combo used. See [Chrome's command docs](https://developer.chrome.com/docs/extensions/reference/api/commands) for available options.

###### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-8)

ts

```
'Alt+R'
```

##### server [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#server)

> **server**?: `object`

##### server.host [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#server-host)

> **server.host**?: `string`

Host to bind the dev server to.

###### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-9)

ts

```
'localhost'
```

##### server.hostname [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#server-hostname)

> **server.hostname**?: `string`

Hostname to run the dev server on.

###### Deprecated [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#deprecated)

Use `host` to specify the interface to bind to, or use `origin` to specify the dev server hostname.

##### server.origin [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#server-origin)

> **server.origin**?: `string`

Origin to use to connect from the extension ui runtime to the dev server.

###### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-10)

ts

```
'http://localhost:3000'
```

##### server.port [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#server-port)

> **server.port**?: `number`

Port to run the dev server on. Defaults to the first open port from 3000 to 3010.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-5)

[packages/wxt/src/types.ts:351](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L351)

---

### entrypointsDir [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#entrypointsdir)

> **entrypointsDir**?: `string`

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-11)

ts

```
'${config.srcDir}/entrypoints'
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-6)

[packages/wxt/src/types.ts:38](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L38)

---

### experimental [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#experimental)

> **experimental**?: `object`

Experimental settings - use with caution.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-7)

[packages/wxt/src/types.ts:349](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L349)

---

### filterEntrypoints [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#filterentrypoints)

> **filterEntrypoints**?: `string`[]

A list of entrypoint names (`"popup"`, `"options"`, etc.) to build. Will speed up the build if your extension has lots of entrypoints, and you don't need to build all of them to develop a feature. If specified, this completely overrides the `include`/`exclude` option provided per-entrypoint.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-8)

[packages/wxt/src/types.ts:48](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L48)

---

### hooks [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#hooks)

> **hooks**?: `NestedHooks`<[`WxtHooks`](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html)>

Project hooks for running logic during the build process.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-9)

[packages/wxt/src/types.ts:395](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L395)

---

### imports [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#imports)

> **imports**?: `false` | [`WxtUnimportOptions`](https://wxt.dev/api/reference/wxt/type-aliases/wxtunimportoptions.html)

Customize auto-import options. Set to `false` to disable auto-imports.

For example, to add a directory to auto-import from, you can use:

ts

```
export default defineConfig({
  imports: {
    dirs: ['some-directory'],
  },
});
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-10)

[packages/wxt/src/types.ts:110](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L110)

---

### logger [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#logger)

> **logger**?: [`Logger`](https://wxt.dev/api/reference/wxt/interfaces/logger.html)

Override the logger used.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-12)

ts

```
consola
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-11)

[packages/wxt/src/types.ts:140](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L140)

---

### manifest [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#manifest)

> **manifest**?: [`UserManifest`](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html) | `Promise`<[`UserManifest`](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html)> | [`UserManifestFn`](https://wxt.dev/api/reference/wxt/type-aliases/usermanifestfn.html)

Customize the `manifest.json` output. Can be an object, promise, or function that returns an object or promise.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-12)

[packages/wxt/src/types.ts:145](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L145)

---

### manifestVersion [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#manifestversion)

> **manifestVersion**?: [`TargetManifestVersion`](https://wxt.dev/api/reference/wxt/type-aliases/targetmanifestversion.html)

Explicitly set a manifest version to target. This will override the default manifest version for each command, and can be overridden by the command line `--mv2` or `--mv3` option.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-13)

[packages/wxt/src/types.ts:133](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L133)

---

### mode [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#mode)

> **mode**?: `string`

Explicitly set a mode to run in. This will override the default mode for each command, and can be overridden by the command line `--mode` option.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-14)

[packages/wxt/src/types.ts:96](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L96)

---

### modules [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#modules)

> **modules**?: `string`[]

List of WXT module names to include. Can be the full package name ("wxt-module-analytics"), or just the suffix ("analytics" would resolve to "wxt-module-analytics").

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-15)

[packages/wxt/src/types.ts:401](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L401)

---

### modulesDir [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#modulesdir)

> **modulesDir**?: `string`

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-13)

ts

```
'${config.root}/modules'
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-16)

[packages/wxt/src/types.ts:40](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L40)

---

### outDir [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#outdir)

> **outDir**?: `string`

Output directory that stored build folders and ZIPs.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-14)

ts

```
'.output'
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-17)

[packages/wxt/src/types.ts:54](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L54)

---

### outDirTemplate [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#outdirtemplate)

> **outDirTemplate**?: `string`

Template string for customizing the output directory structure. Available variables:

* `{{browser}}`: The target browser (e.g., 'chrome', 'firefox')
* `{{manifestVersion}}`: The manifest version (e.g., 2 or 3)
* `{{mode}}`: The build mode (e.g., 'development', 'production')
* `{{modeSuffix}}`: A suffix based on the mode ('-dev' for development, '' for production)
* `{{command}}`: The WXT command being run (e.g., 'build', 'serve')

#### Example [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#example-1)

ts

```
{{browser}} -mv{{manifestVersion}}
```

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-15)

`"{{browser}}-mv{{manifestVersion}}{{modeSuffix}}"`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-18)

[packages/wxt/src/types.ts:75](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L75)

---

### publicDir [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#publicdir)

> **publicDir**?: `string`

Directory containing files that will be copied to the output directory as-is.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-16)

ts

```
'${config.root}/public'
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-19)

[packages/wxt/src/types.ts:36](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L36)

---

### root [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#root)

> **root**?: `string`

Your project's root directory containing the `package.json` used to fill out the `manifest.json`.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-17)

ts

```
process.cwd()
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-20)

[packages/wxt/src/types.ts:19](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L19)

---

### runner [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#runner)

> **runner**?: [`WebExtConfig`](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html)

#### Deprecated [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#deprecated-1)

Use `webExt` instead. Same option, just renamed.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-21)

[packages/wxt/src/types.ts:152](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L152)

---

### srcDir [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#srcdir)

> **srcDir**?: `string`

Directory containing all source code. Set to `"src"` to move all source code to a `src/` directory.

After changing, remember to move the `public/` and `entrypoints/` directories into the new source dir.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-18)

ts

```
config.root
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-22)

[packages/wxt/src/types.ts:29](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L29)

---

### targetBrowsers [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#targetbrowsers)

> **targetBrowsers**?: `string`[]

Target browsers to support. When set, `import.meta.env.BROWSER` will be narrowed to a string literal type containing only the specified browser names.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-19)

ts

```
[ ]
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-23)

[packages/wxt/src/types.ts:127](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L127)

---

### vite [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#vite)

> **vite**?: (`env`) => [`WxtViteConfig`](https://wxt.dev/api/reference/wxt/type-aliases/wxtviteconfig.html) | `Promise`<[`WxtViteConfig`](https://wxt.dev/api/reference/wxt/type-aliases/wxtviteconfig.html)>

Return custom Vite options from a function. See <https://vitejs.dev/config/shared-options.html>.

[`root`](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#root), [`configFile`](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#configfile), and [`mode`](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#mode) should be set in WXT's config instead of Vite's.

This is a function because any vite plugins added need to be recreated for each individual build step, incase they have internal state causing them to fail when reused.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#parameters)

▪ **env**: [`ConfigEnv`](https://wxt.dev/api/reference/wxt/interfaces/configenv.html)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-24)

[packages/wxt/src/types.ts:417](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L417)

---

### webExt [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#webext)

> **webExt**?: [`WebExtConfig`](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html)

Configure browser startup. Options set here can be overridden in a `web-ext.config.ts` file.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-25)

[packages/wxt/src/types.ts:150](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L150)

---

### zip [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#zip)

> **zip**?: `object`

#### Type declaration [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#type-declaration-2)

##### artifactTemplate [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#artifacttemplate)

> **artifactTemplate**?: `string`

Configure the filename output when zipping files.

Available template variables:

* `{{name}}` - The project's name converted to kebab-case
* `{{version}}` - The version\_name or version from the manifest
* `{{packageVersion}}` - The version from the package.json
* `{{browser}}` - The target browser from the `--browser` CLI flag
* `{{mode}}` - The current mode
* `{{manifestVersion}}` - Either "2" or "3"

###### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-20)

ts

```
'{{name}}-{{version}}-{{browser}}.zip'
```

##### compressionLevel [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#compressionlevel)

> **compressionLevel**?: `0` | `2` | `1` | `3` | `4` | `5` | `6` | `7` | `8` | `9`

Compression level to use when zipping files.

Levels: 0 (no compression) to 9 (maximum compression).

###### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-21)

ts

```
9
```

##### downloadPackages [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#downloadpackages)

> **downloadPackages**?: `string`[]

The Firefox review process requires the extension be buildable from source to make reviewing easier. This field allows you to use private packages without exposing your auth tokens.

Just list the name of all the packages you want to download and include in the sources zip. Usually, these will be private packages behind auth tokens, but they don't have to be.

All packages listed here will be downloaded to in `.wxt/local_modules/` and an `overrides` or `resolutions` field (depending on your package manager) will be added to the `package.json`, pointing to the downloaded packages.

> ***DO NOT include versions or version filters.*** Just the package name. If multiple versions of a package are present in the project, all versions will be downloaded and referenced in the package.json correctly.

###### Example [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#example-2)

ts

```
// Correct:
  ['@scope/package-name', 'package-name'][
    // Incorrect, don't include versions!!!
    ('@scope/package-name@1.1.3', 'package-name@^2')
  ];
```

###### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-22)

ts

```
[ ]
```

##### exclude [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#exclude)

> **exclude**?: `string`[]

[Minimatch](https://www.npmjs.com/package/minimatch) patterns of files to exclude when zipping the extension.

###### Example [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#example-3)

ts

```
[
    '**/*.map', // Exclude all sourcemaps
  ];
```

##### excludeSources [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#excludesources)

> **excludeSources**?: `string`[]

[Minimatch](https://www.npmjs.com/package/minimatch) patterns of files to exclude when creating a ZIP of all your source code for Firefox. Patterns are relative to your `config.zip.sourcesRoot`.

Hidden files, node\_modules, and tests are ignored by default.

###### Example [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#example-4)

ts

```
[
    'coverage', // Ignore the coverage directory in the `sourcesRoot`
  ];
```

##### includeSources [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#includesources)

> **includeSources**?: `string`[]

[Minimatch](https://www.npmjs.com/package/minimatch) patterns of files to include when creating a ZIP of all your source code for Firefox. Patterns are relative to your `config.zip.sourcesRoot`.

This setting overrides `excludeSources`. So if a file matches both lists, it is included in the ZIP.

###### Example [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#example-5)

ts

```
[
    'coverage', // Include the coverage directory in the `sourcesRoot`
  ];
```

##### name [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#name)

> **name**?: `string`

Override the artifactTemplate's `{name}` template variable. Defaults to the `package.json`'s name, or if that doesn't exist, the current working directories name.

##### sourcesRoot [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#sourcesroot)

> **sourcesRoot**?: `string`

Root directory to ZIP when generating the sources ZIP.

###### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-23)

ts

```
config.root
```

##### sourcesTemplate [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#sourcestemplate)

> **sourcesTemplate**?: `string`

Configure the filename output when zipping files.

Available template variables:

* `{{name}}` - The project's name converted to kebab-case
* `{{version}}` - The version\_name or version from the manifest
* `{{packageVersion}}` - The version from the package.json
* `{{browser}}` - The target browser from the `--browser` CLI flag
* `{{mode}}` - The current mode
* `{{manifestVersion}}` - Either "2" or "3"

###### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-24)

ts

```
'{{name}}-{{version}}-sources.zip'
```

##### zipSources [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#zipsources)

> **zipSources**?: `boolean`

When zipping the extension, also zip sources.

* `undefined`: zip sources if the target browser is "firefox" or "opera"
* `true`: always zip sources
* `false`: never zip sources

###### Default [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#default-25)

ts

```
undefined
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html#source-26)

[packages/wxt/src/types.ts:153](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L153)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
