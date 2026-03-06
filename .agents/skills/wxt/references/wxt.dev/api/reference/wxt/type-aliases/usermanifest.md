---
title: "Type alias: UserManifest – WXT"
source_url: "https://wxt.dev/api/reference/wxt/type-aliases/usermanifest"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/type-aliases/UserManifest.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > UserManifest

# Type alias: UserManifest [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#type-alias-usermanifest)

> **UserManifest**: `{ [key in keyof Browser.runtime.ManifestV3 as key extends "action" | "background" | "chrome_url_overrides" | "devtools_page" | "manifest_version" | "options_page" | "options_ui" | "permissions" | "sandbox" | "web_accessible_resources" ? never : key]?: Browser.runtime.ManifestV3[key] }` & `object`

Manifest customization available in the `wxt.config.ts` file. You cannot configure entrypoints here, they are configured inline.

## Type declaration [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#type-declaration)

### action [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#action)

> **action**?: `Browser.runtime.ManifestV3`[`"action"`] & `object`

#### Type declaration [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#type-declaration-1)

##### browser\_style [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#browser-style)

> **browser\_style**?: `boolean`

### browser\_action [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#browser-action)

> **browser\_action**?: `Browser.runtime.ManifestV2`[`"browser_action"`] & `object`

#### Type declaration [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#type-declaration-2)

##### browser\_style [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#browser-style-1)

> **browser\_style**?: `boolean`

### browser\_specific\_settings [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#browser-specific-settings)

> **browser\_specific\_settings**?: `object`

### browser\_specific\_settings.gecko [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#browser-specific-settings-gecko)

> **browser\_specific\_settings.gecko**?: `object`

### browser\_specific\_settings.gecko.id [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#browser-specific-settings-gecko-id)

> **browser\_specific\_settings.gecko.id**?: `string`

### browser\_specific\_settings.gecko.strict\_max\_version [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#browser-specific-settings-gecko-strict-max-version)

> **browser\_specific\_settings.gecko.strict\_max\_version**?: `string`

### browser\_specific\_settings.gecko.strict\_min\_version [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#browser-specific-settings-gecko-strict-min-version)

> **browser\_specific\_settings.gecko.strict\_min\_version**?: `string`

### browser\_specific\_settings.gecko.update\_url [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#browser-specific-settings-gecko-update-url)

> **browser\_specific\_settings.gecko.update\_url**?: `string`

### browser\_specific\_settings.gecko\_android [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#browser-specific-settings-gecko-android)

> **browser\_specific\_settings.gecko\_android**?: `object`

### browser\_specific\_settings.gecko\_android.strict\_max\_version [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#browser-specific-settings-gecko-android-strict-max-version)

> **browser\_specific\_settings.gecko\_android.strict\_max\_version**?: `string`

### browser\_specific\_settings.gecko\_android.strict\_min\_version [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#browser-specific-settings-gecko-android-strict-min-version)

> **browser\_specific\_settings.gecko\_android.strict\_min\_version**?: `string`

### browser\_specific\_settings.safari [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#browser-specific-settings-safari)

> **browser\_specific\_settings.safari**?: `object`

### browser\_specific\_settings.safari.strict\_max\_version [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#browser-specific-settings-safari-strict-max-version)

> **browser\_specific\_settings.safari.strict\_max\_version**?: `string`

### browser\_specific\_settings.safari.strict\_min\_version [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#browser-specific-settings-safari-strict-min-version)

> **browser\_specific\_settings.safari.strict\_min\_version**?: `string`

### page\_action [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#page-action)

> **page\_action**?: `Browser.runtime.ManifestV2`[`"page_action"`] & `object`

#### Type declaration [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#type-declaration-3)

##### browser\_style [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#browser-style-2)

> **browser\_style**?: `boolean`

### permissions [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#permissions)

> **permissions**?: (`Browser.runtime.ManifestPermissions` | `string` & `Record`<`never`, `never`>)[]

### web\_accessible\_resources [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#web-accessible-resources)

> **web\_accessible\_resources**?: `string`[] | `Browser.runtime.ManifestV3`[`"web_accessible_resources"`]

## Source [​](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html#source)

[packages/wxt/src/types.ts:943](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L943)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
