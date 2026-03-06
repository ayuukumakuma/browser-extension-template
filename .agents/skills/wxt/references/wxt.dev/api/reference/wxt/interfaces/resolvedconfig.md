---
title: "Interface: ResolvedConfig – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/ResolvedConfig.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > ResolvedConfig

# Interface: ResolvedConfig [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#interface-resolvedconfig)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#contents)

* [Properties](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#properties)
  + [alias](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#alias)
  + [analysis](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#analysis)
  + [browser](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#browser)
  + [builtinModules](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#builtinmodules)
  + [command](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#command)
  + [debug](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#debug)
  + [dev](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#dev)
  + [entrypointsDir](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#entrypointsdir)
  + [env](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#env)
  + [experimental](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#experimental)
  + [filterEntrypoints](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#filterentrypoints)
  + [fsCache](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#fscache)
  + [hooks](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#hooks)
  + [imports](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#imports)
  + [logger](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#logger)
  + [manifest](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#manifest)
  + [manifestVersion](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#manifestversion)
  + [mode](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#mode)
  + [modulesDir](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#modulesdir)
  + [outBaseDir](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#outbasedir)
  + [outDir](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#outdir)
  + [plugins](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#plugins)
  + [publicDir](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#publicdir)
  + [root](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#root)
  + [runnerConfig](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#runnerconfig)
  + [srcDir](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#srcdir)
  + [targetBrowsers](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#targetbrowsers)
  + [typesDir](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#typesdir)
  + [userConfigMetadata](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#userconfigmetadata)
  + [userModules](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#usermodules)
  + [vite](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#vite)
  + [wxtDir](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#wxtdir)
  + [wxtModuleDir](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#wxtmoduledir)
  + [zip](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#zip)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#properties)

### alias [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#alias)

> **alias**: `Record`<`string`, `string`>

Import aliases to absolute paths.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source)

[packages/wxt/src/types.ts:1428](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1428)

---

### analysis [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#analysis)

> **analysis**: `object`

#### Type declaration [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#type-declaration)

##### enabled [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#enabled)

> **enabled**: `boolean`

##### keepArtifacts [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#keepartifacts)

> **keepArtifacts**: `boolean`

##### open [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#open)

> **open**: `boolean`

##### outputDir [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#outputdir)

> **outputDir**: `string`

The directory where the final `stats.html` file is located

##### outputFile [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#outputfile)

> **outputFile**: `string`

Absolute file path to the `stats.html` file

##### outputName [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#outputname)

> **outputName**: `string`

Name of the `stats.html` file, minus ".html"

##### template [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#template)

> **template**: `NonNullable`<`undefined` | `TemplateType`>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-1)

[packages/wxt/src/types.ts:1414](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1414)

---

### browser [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#browser)

> **browser**: `string`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-2)

[packages/wxt/src/types.ts:1391](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1391)

---

### builtinModules [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#builtinmodules)

> **builtinModules**: [`WxtModule`](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html)<`any`>[]

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-3)

[packages/wxt/src/types.ts:1459](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1459)

---

### command [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#command)

> **command**: [`WxtCommand`](https://wxt.dev/api/reference/wxt/type-aliases/wxtcommand.html)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-4)

[packages/wxt/src/types.ts:1390](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1390)

---

### debug [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#debug)

> **debug**: `boolean`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-5)

[packages/wxt/src/types.ts:1383](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1383)

---

### dev [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#dev)

> **dev**: `object`

#### Type declaration [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#type-declaration-1)

##### reloadCommand [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#reloadcommand)

> **reloadCommand**: `string` | `false`

##### server [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#server)

> **server**?: `object`

Only defined during dev command

##### server.host [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#server-host)

> **server.host**: `string`

##### server.origin [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#server-origin)

> **server.origin**: `string`

##### server.port [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#server-port)

> **server.port**: `number`

##### server.watchDebounce [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#server-watchdebounce)

> **server.watchDebounce**: `number`

The milliseconds to debounce when a file is saved before reloading. The only way to set this option is to set the `WXT_WATCH_DEBOUNCE` environment variable, either globally (like in `.bashrc` file) or per-project (in `.env` file).

For example:

```
# ~/.zshrc
export WXT_WATCH_DEBOUNCE=1000
```

Or

```
# .env
WXT_WATCH_DEBOUNCE=1000
```

###### Default [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#default)

ts

```
800
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-6)

[packages/wxt/src/types.ts:1430](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1430)

---

### entrypointsDir [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#entrypointsdir)

> **entrypointsDir**: `string`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-7)

[packages/wxt/src/types.ts:1366](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1366)

---

### env [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#env)

> **env**: [`ConfigEnv`](https://wxt.dev/api/reference/wxt/interfaces/configenv.html)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-8)

[packages/wxt/src/types.ts:1394](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1394)

---

### experimental [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#experimental)

> **experimental**: `object`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-9)

[packages/wxt/src/types.ts:1429](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1429)

---

### filterEntrypoints [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#filterentrypoints)

> **filterEntrypoints**?: `Set`<`string`>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-10)

[packages/wxt/src/types.ts:1368](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1368)

---

### fsCache [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#fscache)

> **fsCache**: [`FsCache`](https://wxt.dev/api/reference/wxt/interfaces/fscache.html)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-11)

[packages/wxt/src/types.ts:1398](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1398)

---

### hooks [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#hooks)

> **hooks**: `NestedHooks`<[`WxtHooks`](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html)>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-12)

[packages/wxt/src/types.ts:1458](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1458)

---

### imports [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#imports)

> **imports**: [`WxtResolvedUnimportOptions`](https://wxt.dev/api/reference/wxt/type-aliases/wxtresolvedunimportoptions.html)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-13)

[packages/wxt/src/types.ts:1396](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1396)

---

### logger [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#logger)

> **logger**: [`Logger`](https://wxt.dev/api/reference/wxt/interfaces/logger.html)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-14)

[packages/wxt/src/types.ts:1395](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1395)

---

### manifest [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#manifest)

> **manifest**: [`UserManifest`](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-15)

[packages/wxt/src/types.ts:1397](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1397)

---

### manifestVersion [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#manifestversion)

> **manifestVersion**: [`TargetManifestVersion`](https://wxt.dev/api/reference/wxt/type-aliases/targetmanifestversion.html)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-16)

[packages/wxt/src/types.ts:1393](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1393)

---

### mode [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#mode)

> **mode**: `string`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-17)

[packages/wxt/src/types.ts:1389](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1389)

---

### modulesDir [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#modulesdir)

> **modulesDir**: `string`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-18)

[packages/wxt/src/types.ts:1367](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1367)

---

### outBaseDir [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#outbasedir)

> **outBaseDir**: `string`

Absolute path to the `.output` directory

#### Example [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#example)

ts

```
'/path/to/project/.output';
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-19)

[packages/wxt/src/types.ts:1375](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1375)

---

### outDir [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#outdir)

> **outDir**: `string`

Absolute path to the target output directory.

#### Example [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#example-1)

ts

```
'/path/to/project/.output/chrome-mv3';
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-20)

[packages/wxt/src/types.ts:1382](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1382)

---

### plugins [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#plugins)

> **plugins**: `string`[]

An array of string to import plugins from. These paths should be resolvable by vite, and they should `export default defineWxtPlugin(...)`.

#### Example [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#example-2)

ts

```
['@wxt-dev/module-vue/plugin', 'wxt-module-google-analytics/plugin'];
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-21)

[packages/wxt/src/types.ts:1468](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1468)

---

### publicDir [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#publicdir)

> **publicDir**: `string`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-22)

[packages/wxt/src/types.ts:1357](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1357)

---

### root [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#root)

> **root**: `string`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-23)

[packages/wxt/src/types.ts:1355](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1355)

---

### runnerConfig [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#runnerconfig)

> **runnerConfig**: `ResolvedConfig`<[`WebExtConfig`](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html), `ConfigLayerMeta`>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-24)

[packages/wxt/src/types.ts:1399](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1399)

---

### srcDir [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#srcdir)

> **srcDir**: `string`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-25)

[packages/wxt/src/types.ts:1356](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1356)

---

### targetBrowsers [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#targetbrowsers)

> **targetBrowsers**: `string`[]

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-26)

[packages/wxt/src/types.ts:1392](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1392)

---

### typesDir [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#typesdir)

> **typesDir**: `string`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-27)

[packages/wxt/src/types.ts:1365](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1365)

---

### userConfigMetadata [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#userconfigmetadata)

> **userConfigMetadata**: `Omit`<`ResolvedConfig`<[`UserConfig`](https://wxt.dev/api/reference/wxt/type-aliases/userconfig.html), `ConfigLayerMeta`>, `"config"`>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-28)

[packages/wxt/src/types.ts:1426](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1426)

---

### userModules [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#usermodules)

> **userModules**: [`WxtModuleWithMetadata`](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html)<`any`>[]

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-29)

[packages/wxt/src/types.ts:1460](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1460)

---

### vite [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#vite)

> **vite**: (`env`) => [`WxtViteConfig`](https://wxt.dev/api/reference/wxt/type-aliases/wxtviteconfig.html) | `Promise`<[`WxtViteConfig`](https://wxt.dev/api/reference/wxt/type-aliases/wxtviteconfig.html)>

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#parameters)

▪ **env**: [`ConfigEnv`](https://wxt.dev/api/reference/wxt/interfaces/configenv.html)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-30)

[packages/wxt/src/types.ts:422](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L422)

---

### wxtDir [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#wxtdir)

> **wxtDir**: `string`

Absolute path pointing to `.wxt` directory in project root.

#### Example [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#example-3)

ts

```
'/path/to/project/.wxt';
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-31)

[packages/wxt/src/types.ts:1364](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1364)

---

### wxtModuleDir [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#wxtmoduledir)

> **wxtModuleDir**: `string`

Absolute path pointing to the `node_modules/wxt` directory, wherever WXT is installed.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-32)

[packages/wxt/src/types.ts:1388](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1388)

---

### zip [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#zip)

> **zip**: `object`

#### Type declaration [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#type-declaration-2)

##### artifactTemplate [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#artifacttemplate)

> **artifactTemplate**: `string`

##### compressionLevel [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#compressionlevel)

> **compressionLevel**: `0` | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9`

##### downloadPackages [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#downloadpackages)

> **downloadPackages**: `string`[]

##### downloadedPackagesDir [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#downloadedpackagesdir)

> **downloadedPackagesDir**: `string`

##### exclude [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#exclude)

> **exclude**: `string`[]

##### excludeSources [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#excludesources)

> **excludeSources**: `string`[]

##### includeSources [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#includesources)

> **includeSources**: `string`[]

##### name [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#name)

> **name**?: `string`

##### sourcesRoot [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#sourcesroot)

> **sourcesRoot**: `string`

##### sourcesTemplate [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#sourcestemplate)

> **sourcesTemplate**: `string`

##### zipSources [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#zipsources)

> **zipSources**: `boolean`

If true, when zipping the extension, also zip the sources.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html#source-33)

[packages/wxt/src/types.ts:1400](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1400)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
