---
title: "Type alias: WxtResolvedUnimportOptions – WXT"
source_url: "https://wxt.dev/api/reference/wxt/type-aliases/wxtresolvedunimportoptions"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/type-aliases/WxtResolvedUnimportOptions.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > WxtResolvedUnimportOptions

# Type alias: WxtResolvedUnimportOptions [​](https://wxt.dev/api/reference/wxt/type-aliases/wxtresolvedunimportoptions.html#type-alias-wxtresolvedunimportoptions)

> **WxtResolvedUnimportOptions**: `Partial`<`UnimportOptions`> & `object`

## Type declaration [​](https://wxt.dev/api/reference/wxt/type-aliases/wxtresolvedunimportoptions.html#type-declaration)

### disabled [​](https://wxt.dev/api/reference/wxt/type-aliases/wxtresolvedunimportoptions.html#disabled)

> **disabled**: `boolean`

Set to `true` when the user disabled auto-imports. We still use unimport for the #imports module, but other features should be disabled.

You don't need to check this value before modifying the auto-import options. Even if `disabled` is `true`, there's no harm in adding imports to the config - they'll just be ignored.

### eslintrc [​](https://wxt.dev/api/reference/wxt/type-aliases/wxtresolvedunimportoptions.html#eslintrc)

> **eslintrc**: [`ResolvedEslintrc`](https://wxt.dev/api/reference/wxt/interfaces/resolvedeslintrc.html)

## Source [​](https://wxt.dev/api/reference/wxt/type-aliases/wxtresolvedunimportoptions.html#source)

[packages/wxt/src/types.ts:1540](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1540)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
