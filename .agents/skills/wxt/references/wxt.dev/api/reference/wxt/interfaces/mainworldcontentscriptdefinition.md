---
title: "Interface: MainWorldContentScriptDefinition – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/MainWorldContentScriptDefinition.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > MainWorldContentScriptDefinition

# Interface: MainWorldContentScriptDefinition [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#interface-mainworldcontentscriptdefinition)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#extends)
* [Properties](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#properties)
  + [allFrames](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#allframes)
  + [cssInjectionMode](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#cssinjectionmode)
  + [exclude](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#exclude)
  + [excludeGlobs](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#excludeglobs)
  + [excludeMatches](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#excludematches)
  + [globalName](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#globalname)
  + [include](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#include)
  + [includeGlobs](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#includeglobs)
  + [matchAboutBlank](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#matchaboutblank)
  + [matchOriginAsFallback](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#matchoriginasfallback)
  + [matches](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#matches)
  + [registration](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#registration)
  + [runAt](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#runat)
  + [world](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#world)
* [Methods](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#methods)
  + [main()](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#main)

## Extends [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#extends)

* [`MainWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#properties)

### allFrames [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#allframes)

> **allFrames**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`undefined` | `boolean`>

See <https://developer.chrome.com/docs/extensions/mv3/content_scripts/>

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#default)

ts

```
false
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#inherited-from)

[`MainWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html).[`allFrames`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html#allframes)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#source)

[packages/wxt/src/types.ts:652](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L652)

---

### cssInjectionMode [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#cssinjectionmode)

> **cssInjectionMode**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`"manifest"` | `"manual"` | `"ui"`>

Customize how imported/generated styles are injected with the content script. Regardless of the mode selected, CSS will always be built and included in the output directory.

* `"manifest"` - Include the CSS in the manifest, under the content script's `css` array.
* `"manual"` - Exclude the CSS from the manifest. You are responsible for manually loading it onto the page. Use `browser.runtime.getURL("content-scripts/<name>.css")` to get the file's URL
* `"ui"` - Exclude the CSS from the manifest. CSS will be automatically added to your UI when calling `createShadowRootUi`

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#default-1)

ts

```
'manifest'
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#inherited-from-1)

[`MainWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html).[`cssInjectionMode`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html#cssinjectionmode)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#source-1)

[packages/wxt/src/types.ts:675](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L675)

---

### exclude [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#exclude)

> **exclude**?: `string`[]

List of target browsers to exclude this entrypoint from. Cannot be used with `include`. You must choose one of the two options.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#default-2)

ts

```
undefined
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#inherited-from-2)

[`MainWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html).[`exclude`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html#exclude)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#source-2)

[packages/wxt/src/types.ts:570](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L570)

---

### excludeGlobs [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#excludeglobs)

> **excludeGlobs**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`undefined` | `string`[]>

See <https://developer.chrome.com/docs/extensions/mv3/content_scripts/>

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#default-3)

ts

```
[ ]
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#inherited-from-3)

[`MainWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html).[`excludeGlobs`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html#excludeglobs)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#source-3)

[packages/wxt/src/types.ts:646](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L646)

---

### excludeMatches [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#excludematches)

> **excludeMatches**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`undefined` | `string`[]>

See <https://developer.chrome.com/docs/extensions/mv3/content_scripts/>

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#default-4)

ts

```
[ ]
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#inherited-from-4)

[`MainWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html).[`excludeMatches`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html#excludematches)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#source-4)

[packages/wxt/src/types.ts:634](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L634)

---

### globalName [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#globalname)

> **globalName**?: `string` | `boolean` | (`entrypoint`) => `string`

The variable name for the IIFE in the output bundle.

This option is relevant for scripts inserted into the page context where the default IIFE variable name may conflict with an existing variable on the target page. This applies to content scripts with world=MAIN, and others, such as unlisted scripts, that could be dynamically injected into the page with a `<script>` tag.

Available options:

* `true`: automatically generate a name for the IIFE based on the entrypoint name
* `false`: Output the IIFE without a variable name, making it anonymous. This is the safest option to avoid conflicts with existing variables on the page. This will become the default in a future version of WXT.
* `string`: Use the provided string as the global variable name.
* `function`: A function that receives the entrypoint and returns a string to use as the variable name.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#default-5)

ts

```
true
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#inherited-from-5)

[`MainWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html).[`globalName`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html#globalname)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#source-5)

[packages/wxt/src/types.ts:610](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L610)

---

### include [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#include)

> **include**?: `string`[]

List of target browsers to include this entrypoint in. Defaults to being included in all builds. Cannot be used with `exclude`. You must choose one of the two options.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#default-6)

ts

```
undefined
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#inherited-from-6)

[`MainWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html).[`include`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html#include)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#source-6)

[packages/wxt/src/types.ts:563](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L563)

---

### includeGlobs [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#includeglobs)

> **includeGlobs**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`undefined` | `string`[]>

See <https://developer.chrome.com/docs/extensions/mv3/content_scripts/>

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#default-7)

ts

```
[ ]
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#inherited-from-7)

[`MainWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html).[`includeGlobs`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html#includeglobs)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#source-7)

[packages/wxt/src/types.ts:640](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L640)

---

### matchAboutBlank [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#matchaboutblank)

> **matchAboutBlank**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`undefined` | `boolean`>

See <https://developer.chrome.com/docs/extensions/mv3/content_scripts/>

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#default-8)

ts

```
false
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#inherited-from-8)

[`MainWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html).[`matchAboutBlank`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html#matchaboutblank)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#source-8)

[packages/wxt/src/types.ts:626](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L626)

---

### matchOriginAsFallback [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#matchoriginasfallback)

> **matchOriginAsFallback**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`boolean`>

See <https://developer.chrome.com/docs/extensions/mv3/content_scripts/>

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#default-9)

ts

```
false
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#inherited-from-9)

[`MainWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html).[`matchOriginAsFallback`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html#matchoriginasfallback)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#source-9)

[packages/wxt/src/types.ts:658](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L658)

---

### matches [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#matches)

> **matches**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`string`[]>

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#inherited-from-10)

[`MainWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html).[`matches`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html#matches)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#source-10)

[packages/wxt/src/types.ts:614](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L614)

---

### registration [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#registration)

> **registration**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`"runtime"` | `"manifest"`>

Specify how the content script is registered.

* `"manifest"`: The content script will be added to the `content_scripts` entry in the manifest. This is the normal and most well known way of registering a content script.
* `"runtime"`: The content script's `matches` is added to `host_permissions` and you are responsible for using the scripting API to register/execute the content script dynamically at runtime.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#default-10)

ts

```
'manifest'
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#inherited-from-11)

[`MainWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html).[`registration`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html#registration)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#source-11)

[packages/wxt/src/types.ts:688](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L688)

---

### runAt [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#runat)

> **runAt**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`undefined` | `RunAt`>

See <https://developer.chrome.com/docs/extensions/mv3/content_scripts/>

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#default-11)

ts

```
'documentIdle'
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#inherited-from-12)

[`MainWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html).[`runAt`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html#runat)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#source-12)

[packages/wxt/src/types.ts:620](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L620)

---

### world [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#world)

> **world**: `"MAIN"`

See <https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts#isolated_world>

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#inherited-from-13)

[`MainWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html).[`world`](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html#world)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#source-13)

[packages/wxt/src/types.ts:696](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L696)

## Methods [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#methods)

### main() [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#main)

> **main**(): `any`

Main function executed when the content script is loaded.

When running a content script with `browser.scripting.executeScript`, values returned from this function will be returned in the `executeScript` result as well. Otherwise returning a value does nothing.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html#source-14)

[packages/wxt/src/types.ts:893](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L893)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
