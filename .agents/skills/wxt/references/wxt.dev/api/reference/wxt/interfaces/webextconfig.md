---
title: "Interface: WebExtConfig – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/webextconfig"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/WebExtConfig.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > WebExtConfig

# Interface: WebExtConfig [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#interface-webextconfig)

Options for how [`web-ext`](https://github.com/mozilla/web-ext) starts the browser.

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#contents)

* [Properties](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#properties)
  + [binaries](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#binaries)
  + [chromiumArgs](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#chromiumargs)
  + [chromiumPort](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#chromiumport)
  + [chromiumPref](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#chromiumpref)
  + [chromiumProfile](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#chromiumprofile)
  + [disabled](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#disabled)
  + [firefoxArgs](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#firefoxargs)
  + [firefoxPref](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#firefoxpref)
  + [firefoxProfile](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#firefoxprofile)
  + [keepProfileChanges](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#keepprofilechanges)
  + [openConsole](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#openconsole)
  + [openDevtools](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#opendevtools)
  + [startUrls](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#starturls)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#properties)

### binaries [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#binaries)

> **binaries**?: `Record`<`string`, `string`>

List of browser names and the binary that should be used to open the browser.

#### See [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#see)

* <https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#chromium-binary>
* <https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#firefox>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#source)

[packages/wxt/src/types.ts:1050](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1050)

---

### chromiumArgs [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#chromiumargs)

> **chromiumArgs**?: `string`[]

#### See [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#see-1)

<https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#args>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#source-1)

[packages/wxt/src/types.ts:1093](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1093)

---

### chromiumPort [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#chromiumport)

> **chromiumPort**?: `number`

By default, chrome opens a random port for debugging. Set this value to use a specific port.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#source-2)

[packages/wxt/src/types.ts:1087](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1087)

---

### chromiumPref [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#chromiumpref)

> **chromiumPref**?: `Record`<`string`, `any`>

An map of chrome preferences from <https://chromium.googlesource.com/chromium/src/+/main/chrome/common/pref_names.h>

#### Example [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#example)

ts

```
// change your downloads directory
  {
  download: {
  default_directory: "/my/custom/dir",
  },
  }
```

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#default)

ts

```
// Enable dev mode and allow content script sourcemaps
{
  devtools: {
    synced_preferences_sync_disabled: {
      skipContentScripts: false,
    },
  }
  extensions: {
    ui: {
      developer_mode: true,
    },
  }
}
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#source-3)

[packages/wxt/src/types.ts:1082](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1082)

---

### chromiumProfile [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#chromiumprofile)

> **chromiumProfile**?: `string`

#### See [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#see-2)

<https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#chromium-profile>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#source-4)

[packages/wxt/src/types.ts:1054](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1054)

---

### disabled [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#disabled)

> **disabled**?: `boolean`

Whether or not to open the browser with the extension installed in dev mode.

#### Default [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#default-1)

ts

```
false
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#source-5)

[packages/wxt/src/types.ts:1038](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1038)

---

### firefoxArgs [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#firefoxargs)

> **firefoxArgs**?: `string`[]

#### See [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#see-3)

<https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#args>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#source-6)

[packages/wxt/src/types.ts:1091](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1091)

---

### firefoxPref [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#firefoxpref)

> **firefoxPref**?: `Record`<`string`, `string` | `number` | `boolean`>

#### See [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#see-4)

<https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#pref>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#source-7)

[packages/wxt/src/types.ts:1089](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1089)

---

### firefoxProfile [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#firefoxprofile)

> **firefoxProfile**?: `string`

#### See [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#see-5)

<https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#firefox-profile>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#source-8)

[packages/wxt/src/types.ts:1052](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1052)

---

### keepProfileChanges [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#keepprofilechanges)

> **keepProfileChanges**?: `boolean`

#### See [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#see-6)

<https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#keep-profile-changes>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#source-9)

[packages/wxt/src/types.ts:1097](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1097)

---

### openConsole [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#openconsole)

> **openConsole**?: `boolean`

#### See [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#see-7)

<https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#browser-console>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#source-10)

[packages/wxt/src/types.ts:1040](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1040)

---

### openDevtools [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#opendevtools)

> **openDevtools**?: `boolean`

#### See [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#see-8)

<https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#devtools>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#source-11)

[packages/wxt/src/types.ts:1042](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1042)

---

### startUrls [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#starturls)

> **startUrls**?: `string`[]

#### See [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#see-9)

<https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#start-url>

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html#source-12)

[packages/wxt/src/types.ts:1095](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1095)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
