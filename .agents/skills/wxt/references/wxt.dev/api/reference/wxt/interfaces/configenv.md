---
title: "Interface: ConfigEnv – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/configenv"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/ConfigEnv.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > ConfigEnv

# Interface: ConfigEnv [​](https://wxt.dev/api/reference/wxt/interfaces/configenv.html#interface-configenv)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/configenv.html#contents)

* [Properties](https://wxt.dev/api/reference/wxt/interfaces/configenv.html#properties)
  + [browser](https://wxt.dev/api/reference/wxt/interfaces/configenv.html#browser)
  + [command](https://wxt.dev/api/reference/wxt/interfaces/configenv.html#command)
  + [manifestVersion](https://wxt.dev/api/reference/wxt/interfaces/configenv.html#manifestversion)
  + [mode](https://wxt.dev/api/reference/wxt/interfaces/configenv.html#mode)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/configenv.html#properties)

### browser [​](https://wxt.dev/api/reference/wxt/interfaces/configenv.html#browser)

> **browser**: `string`

Browser passed in from the CLI via the `-b` or `--browser` flag. Defaults to `"chrome"` when not passed.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/configenv.html#source)

[packages/wxt/src/types.ts:1012](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1012)

---

### command [​](https://wxt.dev/api/reference/wxt/interfaces/configenv.html#command)

> **command**: [`WxtCommand`](https://wxt.dev/api/reference/wxt/type-aliases/wxtcommand.html)

The command used to run WXT. `"serve"` during development and `"build"` for any other command.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/configenv.html#source-1)

[packages/wxt/src/types.ts:1007](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1007)

---

### manifestVersion [​](https://wxt.dev/api/reference/wxt/interfaces/configenv.html#manifestversion)

> **manifestVersion**: `2` | `3`

Manifest version passed in from the CLI via the `--mv2` or `--mv3` flags. When not passed, it depends on the target browser. See [the guide](https://wxt.dev/guide/key-concepts/multiple-browsers.html#target-manifest-version) for more details.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/configenv.html#source-2)

[packages/wxt/src/types.ts:1019](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1019)

---

### mode [​](https://wxt.dev/api/reference/wxt/interfaces/configenv.html#mode)

> **mode**: `string`

The build mode passed into the CLI. By default, `wxt` uses `"development"` and `wxt build|zip` uses `"production"`.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/configenv.html#source-3)

[packages/wxt/src/types.ts:1002](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1002)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
