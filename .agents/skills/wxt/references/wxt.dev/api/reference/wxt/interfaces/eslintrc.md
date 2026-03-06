---
title: "Interface: Eslintrc – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/eslintrc"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/Eslintrc.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > Eslintrc

# Interface: Eslintrc [​](https://wxt.dev/api/reference/wxt/interfaces/eslintrc.html#interface-eslintrc)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/eslintrc.html#contents)

* [Properties](https://wxt.dev/api/reference/wxt/interfaces/eslintrc.html#properties)
  + [enabled](https://wxt.dev/api/reference/wxt/interfaces/eslintrc.html#enabled)
  + [filePath](https://wxt.dev/api/reference/wxt/interfaces/eslintrc.html#filepath)
  + [globalsPropValue](https://wxt.dev/api/reference/wxt/interfaces/eslintrc.html#globalspropvalue)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/eslintrc.html#properties)

### enabled [​](https://wxt.dev/api/reference/wxt/interfaces/eslintrc.html#enabled)

> **enabled**?: `boolean` | `8` | `9` | `"auto"`

When true, generates a file that can be used by ESLint to know which variables are valid globals.

* `false`: Don't generate the file.
* `'auto'`: Check if eslint is installed, and if it is, generate a compatible config file.
* `true`: Same as `8`.
* `8`: Generate a config file compatible with ESLint 8.
* `9`: Generate a config file compatible with ESLint 9.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/eslintrc.html#default)

ts

```
'auto'
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/eslintrc.html#source)

[packages/wxt/src/types.ts:1506](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1506)

---

### filePath [​](https://wxt.dev/api/reference/wxt/interfaces/eslintrc.html#filepath)

> **filePath**?: `string`

File path to save the generated eslint config.

Default depends on version of ESLint used:

* 9 and above: './.wxt/eslint-auto-imports.mjs'
* 8 and below: './.wxt/eslintrc-auto-import.json'

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/eslintrc.html#source-1)

[packages/wxt/src/types.ts:1515](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1515)

---

### globalsPropValue [​](https://wxt.dev/api/reference/wxt/interfaces/eslintrc.html#globalspropvalue)

> **globalsPropValue**?: [`EslintGlobalsPropValue`](https://wxt.dev/api/reference/wxt/type-aliases/eslintglobalspropvalue.html)

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/eslintrc.html#default-1)

ts

```
true
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/eslintrc.html#source-2)

[packages/wxt/src/types.ts:1517](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1517)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
