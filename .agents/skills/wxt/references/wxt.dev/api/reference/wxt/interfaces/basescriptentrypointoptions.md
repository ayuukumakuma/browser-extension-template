---
title: "Interface: BaseScriptEntrypointOptions – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/BaseScriptEntrypointOptions.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > BaseScriptEntrypointOptions

# Interface: BaseScriptEntrypointOptions [​](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html#interface-basescriptentrypointoptions)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html#extends)
* [Properties](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html#properties)
  + [exclude](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html#exclude)
  + [globalName](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html#globalname)
  + [include](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html#include)

## Extends [​](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html#extends)

* [`BaseEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html#properties)

### exclude [​](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html#exclude)

> **exclude**?: `string`[]

List of target browsers to exclude this entrypoint from. Cannot be used with `include`. You must choose one of the two options.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html#default)

ts

```
undefined
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html#inherited-from)

[`BaseEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html).[`exclude`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#exclude)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html#source)

[packages/wxt/src/types.ts:570](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L570)

---

### globalName [​](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html#globalname)

> **globalName**?: `string` | `boolean` | (`entrypoint`) => `string`

The variable name for the IIFE in the output bundle.

This option is relevant for scripts inserted into the page context where the default IIFE variable name may conflict with an existing variable on the target page. This applies to content scripts with world=MAIN, and others, such as unlisted scripts, that could be dynamically injected into the page with a `<script>` tag.

Available options:

* `true`: automatically generate a name for the IIFE based on the entrypoint name
* `false`: Output the IIFE without a variable name, making it anonymous. This is the safest option to avoid conflicts with existing variables on the page. This will become the default in a future version of WXT.
* `string`: Use the provided string as the global variable name.
* `function`: A function that receives the entrypoint and returns a string to use as the variable name.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html#default-1)

ts

```
true
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html#source-1)

[packages/wxt/src/types.ts:610](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L610)

---

### include [​](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html#include)

> **include**?: `string`[]

List of target browsers to include this entrypoint in. Defaults to being included in all builds. Cannot be used with `exclude`. You must choose one of the two options.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html#default-2)

ts

```
undefined
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html#inherited-from-1)

[`BaseEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html).[`include`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#include)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html#source-2)

[packages/wxt/src/types.ts:563](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L563)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
