---
title: "Interface: GenericEntrypoint – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/GenericEntrypoint.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > GenericEntrypoint

# Interface: GenericEntrypoint [​](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#interface-genericentrypoint)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#extends)
* [Properties](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#properties)
  + [inputPath](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#inputpath)
  + [name](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#name)
  + [options](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#options)
  + [outputDir](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#outputdir)
  + [skipped](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#skipped)
  + [type](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#type)

## Extends [​](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#extends)

* [`BaseEntrypoint`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#properties)

### inputPath [​](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#inputpath)

> **inputPath**: `string`

Absolute path to the entrypoint's input file.

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#inherited-from)

[`BaseEntrypoint`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html).[`inputPath`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#inputpath)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#source)

[packages/wxt/src/types.ts:791](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L791)

---

### name [​](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#name)

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

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#inherited-from-1)

[`BaseEntrypoint`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html).[`name`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#name)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#source-1)

[packages/wxt/src/types.ts:789](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L789)

---

### options [​](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#options)

> **options**: [`ResolvedPerBrowserOptions`](https://wxt.dev/api/reference/wxt/type-aliases/resolvedperbrowseroptions.html)<[`BaseEntrypointOptions`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html), `never`>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#source-2)

[packages/wxt/src/types.ts:818](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L818)

---

### outputDir [​](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#outputdir)

> **outputDir**: `string`

Absolute path to the entrypoint's output directory. Can be `wxt.config.outDir` or a subdirectory of it.

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#inherited-from-2)

[`BaseEntrypoint`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html).[`outputDir`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#outputdir)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#source-3)

[packages/wxt/src/types.ts:796](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L796)

---

### skipped [​](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#skipped)

> **skipped**?: `boolean`

When true, the entrypoint will not be built by WXT. Normally this is set based on the `filterEntrypoints` config or the entrypoint's `include`/`exclude` options defined inside the file.

See [https://wxt.dev/guide/essentials/target-different-browsers.html#filtering-entrypoints](https://wxt.dev/guide/essentials/target-different-browsers.html#filtering-entrypoints)

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#inherited-from-3)

[`BaseEntrypoint`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html).[`skipped`](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html#skipped)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#source-4)

[packages/wxt/src/types.ts:805](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L805)

---

### type [​](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#type)

> **type**: `"devtools"` | `"bookmarks"` | `"history"` | `"sandbox"` | `"newtab"` | `"unlisted-page"` | `"unlisted-style"` | `"content-script-style"`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html#source-5)

[packages/wxt/src/types.ts:809](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L809)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
