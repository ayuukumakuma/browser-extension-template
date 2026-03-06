---
title: "Type alias: ResolvedPerBrowserOptions<T, TOmitted> – WXT"
source_url: "https://wxt.dev/api/reference/wxt/type-aliases/resolvedperbrowseroptions"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/type-aliases/ResolvedPerBrowserOptions.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > ResolvedPerBrowserOptions

# Type alias: ResolvedPerBrowserOptions`<T, TOmitted>` [​](https://wxt.dev/api/reference/wxt/type-aliases/resolvedperbrowseroptions.html#type-alias-resolvedperbrowseroptions-t-tomitted)

> **ResolvedPerBrowserOptions**<`T`, `TOmitted`>: `{ [key in keyof Omit<T, TOmitted>]: T[key] extends PerBrowserOption<infer U> ? U : T[key] }` & `{ [key in TOmitted]: T[key] }`

Convert `{ key: PerBrowserOption<T> }` to just `{ key: T }`, stripping away the `PerBrowserOption` type for all fields inside the object.

A optional second list of keys can be passed if a field isn't compatible with `PerBrowserOption`, like `defaultIcon`.

## Type parameters [​](https://wxt.dev/api/reference/wxt/type-aliases/resolvedperbrowseroptions.html#type-parameters)

| Parameter | Default |
| --- | --- |
| `T` | - |
| `TOmitted` extends keyof `T` | `never` |

## Source [​](https://wxt.dev/api/reference/wxt/type-aliases/resolvedperbrowseroptions.html#source)

[packages/wxt/src/types.ts:933](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L933)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
