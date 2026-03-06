---
title: "Interface: BaseEntrypoint – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/BaseEntrypoint.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > BaseEntrypoint

# Interface: BaseEntrypoint [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#interface-baseentrypoint)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#contents)

* [Extended By](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#extended-by)
* [Properties](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#properties)
  + [inputPath](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#inputpath)
  + [name](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#name)
  + [outputDir](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#outputdir)
  + [skipped](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#skipped)

## Extended By [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#extended-by)

* [`GenericEntrypoint`](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html)
* [`UnlistedScriptEntrypoint`](https://wxt.dev/api/reference/wxt/interfaces/unlistedscriptentrypoint.html)
* [`BackgroundEntrypoint`](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypoint.html)
* [`ContentScriptEntrypoint`](https://wxt.dev/api/reference/wxt/interfaces/contentscriptentrypoint.html)
* [`PopupEntrypoint`](https://wxt.dev/api/reference/wxt/interfaces/popupentrypoint.html)
* [`OptionsEntrypoint`](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypoint.html)
* [`SidepanelEntrypoint`](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypoint.html)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#properties)

### inputPath [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#inputpath)

> **inputPath**: `string`

Absolute path to the entrypoint's input file.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#source)

[packages/wxt/src/types.ts:791](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L791)

---

### name [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#name)

> **name**: `string`

The entrypoint's name. This is the filename or dirname without the type suffix.

Examples:

* `popup.html` → `popup`
* `options/index.html` → `options`
* `named.sandbox.html` → `named`
* `named.sandbox/index.html` → `named`
* `sandbox.html` → `sandbox`
* `sandbox/index.html` → `sandbox`
* `overlay.content.ts` → `overlay`
* `overlay.content/index.ts` → `overlay`

The name is used when generating an output file: `<entrypoint.outputDir>/<entrypoint.name>.<ext>`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#source-1)

[packages/wxt/src/types.ts:789](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L789)

---

### outputDir [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#outputdir)

> **outputDir**: `string`

Absolute path to the entrypoint's output directory. Can be `wxt.config.outDir` or a subdirectory of it.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#source-2)

[packages/wxt/src/types.ts:796](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L796)

---

### skipped [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#skipped)

> **skipped**?: `boolean`

When true, the entrypoint will not be built by WXT. Normally this is set based on the `filterEntrypoints` config or the entrypoint's `include`/`exclude` options defined inside the file.

See [https://wxt.dev/guide/essentials/target-different-browsers.html#filtering-entrypoints](https://wxt.dev/guide/essentials/target-different-browsers.html#filtering-entrypoints)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#source-3)

[packages/wxt/src/types.ts:805](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L805)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
