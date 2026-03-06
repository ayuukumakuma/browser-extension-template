---
title: "Interface: IsolatedWorldContentScriptDefinition – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/IsolatedWorldContentScriptDefinition.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > IsolatedWorldContentScriptDefinition

# Interface: IsolatedWorldContentScriptDefinition [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#interface-isolatedworldcontentscriptdefinition)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#extends)
* [Properties](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#properties)
  + [allFrames](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#allframes)
  + [cssInjectionMode](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#cssinjectionmode)
  + [exclude](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#exclude)
  + [excludeGlobs](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#excludeglobs)
  + [excludeMatches](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#excludematches)
  + [globalName](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#globalname)
  + [include](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#include)
  + [includeGlobs](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#includeglobs)
  + [matchAboutBlank](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#matchaboutblank)
  + [matchOriginAsFallback](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#matchoriginasfallback)
  + [matches](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#matches)
  + [registration](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#registration)
  + [runAt](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#runat)
  + [world](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#world)
* [Methods](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#methods)
  + [main()](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#main)

## Extends [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#extends)

* [`IsolatedWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#properties)

### allFrames [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#allframes)

> **allFrames**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`undefined` | `boolean`>

See <https://developer.chrome.com/docs/extensions/mv3/content_scripts/>

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#default)

ts

```
false
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#inherited-from)

[`IsolatedWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html).[`allFrames`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html#allframes)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#source)

[packages/wxt/src/types.ts:652](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L652)

---

### cssInjectionMode [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#cssinjectionmode)

> **cssInjectionMode**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`"manifest"` | `"manual"` | `"ui"`>

Customize how imported/generated styles are injected with the content script. Regardless of the mode selected, CSS will always be built and included in the output directory.

* `"manifest"` - Include the CSS in the manifest, under the content script's `css` array.
* `"manual"` - Exclude the CSS from the manifest. You are responsible for manually loading it onto the page. Use `browser.runtime.getURL("content-scripts/<name>.css")` to get the file's URL
* `"ui"` - Exclude the CSS from the manifest. CSS will be automatically added to your UI when calling `createShadowRootUi`

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#default-1)

ts

```
'manifest'
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#inherited-from-1)

[`IsolatedWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html).[`cssInjectionMode`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html#cssinjectionmode)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#source-1)

[packages/wxt/src/types.ts:675](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L675)

---

### exclude [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#exclude)

> **exclude**?: `string`[]

List of target browsers to exclude this entrypoint from. Cannot be used with `include`. You must choose one of the two options.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#default-2)

ts

```
undefined
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#inherited-from-2)

[`IsolatedWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html).[`exclude`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html#exclude)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#source-2)

[packages/wxt/src/types.ts:570](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L570)

---

### excludeGlobs [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#excludeglobs)

> **excludeGlobs**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`undefined` | `string`[]>

See <https://developer.chrome.com/docs/extensions/mv3/content_scripts/>

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#default-3)

ts

```
[ ]
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#inherited-from-3)

[`IsolatedWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html).[`excludeGlobs`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html#excludeglobs)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#source-3)

[packages/wxt/src/types.ts:646](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L646)

---

### excludeMatches [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#excludematches)

> **excludeMatches**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`undefined` | `string`[]>

See <https://developer.chrome.com/docs/extensions/mv3/content_scripts/>

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#default-4)

ts

```
[ ]
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#inherited-from-4)

[`IsolatedWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html).[`excludeMatches`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html#excludematches)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#source-4)

[packages/wxt/src/types.ts:634](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L634)

---

### globalName [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#globalname)

> **globalName**?: `string` | `boolean` | (`entrypoint`) => `string`

The variable name for the IIFE in the output bundle.

This option is relevant for scripts inserted into the page context where the default IIFE variable name may conflict with an existing variable on the target page. This applies to content scripts with world=MAIN, and others, such as unlisted scripts, that could be dynamically injected into the page with a `<script>` tag.

Available options:

* `true`: automatically generate a name for the IIFE based on the entrypoint name
* `false`: Output the IIFE without a variable name, making it anonymous. This is the safest option to avoid conflicts with existing variables on the page. This will become the default in a future version of WXT.
* `string`: Use the provided string as the global variable name.
* `function`: A function that receives the entrypoint and returns a string to use as the variable name.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#default-5)

ts

```
true
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#inherited-from-5)

[`IsolatedWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html).[`globalName`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html#globalname)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#source-5)

[packages/wxt/src/types.ts:610](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L610)

---

### include [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#include)

> **include**?: `string`[]

List of target browsers to include this entrypoint in. Defaults to being included in all builds. Cannot be used with `exclude`. You must choose one of the two options.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#default-6)

ts

```
undefined
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#inherited-from-6)

[`IsolatedWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html).[`include`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html#include)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#source-6)

[packages/wxt/src/types.ts:563](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L563)

---

### includeGlobs [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#includeglobs)

> **includeGlobs**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`undefined` | `string`[]>

See <https://developer.chrome.com/docs/extensions/mv3/content_scripts/>

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#default-7)

ts

```
[ ]
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#inherited-from-7)

[`IsolatedWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html).[`includeGlobs`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html#includeglobs)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#source-7)

[packages/wxt/src/types.ts:640](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L640)

---

### matchAboutBlank [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#matchaboutblank)

> **matchAboutBlank**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`undefined` | `boolean`>

See <https://developer.chrome.com/docs/extensions/mv3/content_scripts/>

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#default-8)

ts

```
false
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#inherited-from-8)

[`IsolatedWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html).[`matchAboutBlank`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html#matchaboutblank)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#source-8)

[packages/wxt/src/types.ts:626](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L626)

---

### matchOriginAsFallback [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#matchoriginasfallback)

> **matchOriginAsFallback**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`boolean`>

See <https://developer.chrome.com/docs/extensions/mv3/content_scripts/>

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#default-9)

ts

```
false
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#inherited-from-9)

[`IsolatedWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html).[`matchOriginAsFallback`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html#matchoriginasfallback)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#source-9)

[packages/wxt/src/types.ts:658](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L658)

---

### matches [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#matches)

> **matches**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`string`[]>

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#inherited-from-10)

[`IsolatedWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html).[`matches`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html#matches)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#source-10)

[packages/wxt/src/types.ts:614](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L614)

---

### registration [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#registration)

> **registration**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`"runtime"` | `"manifest"`>

Specify how the content script is registered.

* `"manifest"`: The content script will be added to the `content_scripts` entry in the manifest. This is the normal and most well known way of registering a content script.
* `"runtime"`: The content script's `matches` is added to `host_permissions` and you are responsible for using the scripting API to register/execute the content script dynamically at runtime.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#default-10)

ts

```
'manifest'
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#inherited-from-11)

[`IsolatedWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html).[`registration`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html#registration)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#source-11)

[packages/wxt/src/types.ts:688](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L688)

---

### runAt [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#runat)

> **runAt**?: [`PerBrowserOption`](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)<`undefined` | `RunAt`>

See <https://developer.chrome.com/docs/extensions/mv3/content_scripts/>

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#default-11)

ts

```
'documentIdle'
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#inherited-from-12)

[`IsolatedWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html).[`runAt`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html#runat)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#source-12)

[packages/wxt/src/types.ts:620](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L620)

---

### world [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#world)

> **world**?: `"ISOLATED"`

See <https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts#isolated_world>

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#default-12)

ts

```
'ISOLATED'
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#inherited-from-13)

[`IsolatedWorldContentScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html).[`world`](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html#world)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#source-13)

[packages/wxt/src/types.ts:706](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L706)

## Methods [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#methods)

### main() [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#main)

> **main**(`ctx`): `any`

Main function executed when the content script is loaded.

When running a content script with `browser.scripting.executeScript`, values returned from this function will be returned in the `executeScript` result as well. Otherwise returning a value does nothing.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#parameters)

▪ **ctx**: [`ContentScriptContext`](https://wxt.dev/api/reference/wxt/utils/content-script-context/classes/contentscriptcontext.html)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html#source-14)

[packages/wxt/src/types.ts:882](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L882)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
