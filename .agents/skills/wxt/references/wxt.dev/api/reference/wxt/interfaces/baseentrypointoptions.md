---
title: "Interface: BaseEntrypointOptions – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/BaseEntrypointOptions.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > BaseEntrypointOptions

# Interface: BaseEntrypointOptions [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#interface-baseentrypointoptions)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#contents)

* [Extended By](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#extended-by)
* [Properties](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#properties)
  + [exclude](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#exclude)
  + [include](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#include)

## Extended By [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#extended-by)

* [`BackgroundEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html)
* [`BaseScriptEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html)
* [`PopupEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html)
* [`OptionsEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html)
* [`SidepanelEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#properties)

### exclude [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#exclude)

> **exclude**?: `string`[]

List of target browsers to exclude this entrypoint from. Cannot be used with `include`. You must choose one of the two options.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#default)

ts

```
undefined
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#source)

[packages/wxt/src/types.ts:570](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L570)

---

### include [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#include)

> **include**?: `string`[]

List of target browsers to include this entrypoint in. Defaults to being included in all builds. Cannot be used with `exclude`. You must choose one of the two options.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#default-1)

ts

```
undefined
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html#source-1)

[packages/wxt/src/types.ts:563](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L563)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
