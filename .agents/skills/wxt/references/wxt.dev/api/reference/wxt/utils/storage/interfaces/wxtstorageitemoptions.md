---
title: "Interface: WxtStorageItemOptions<T> – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/storage/interfaces/WxtStorageItemOptions.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/storage](https://wxt.dev/api/reference/wxt/utils/storage/index.html) > WxtStorageItemOptions

# Interface: WxtStorageItemOptions`<T>` [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#interface-wxtstorageitemoptions-t)

## Contents [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#contents)

* [Type parameters](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#type-parameters)
* [Properties](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#properties)
  + [debug](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#debug)
  + [defaultValue](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#defaultvalue)
  + [fallback](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#fallback)
  + [init](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#init)
  + [migrations](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#migrations)
  + [onMigrationComplete](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#onmigrationcomplete)
  + [version](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#version)

## Type parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#type-parameters)

▪ **T**

## Properties [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#properties)

### debug [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#debug)

> **debug**?: `boolean`

Print debug logs, such as migration process.

#### Default [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#default)

ts

```
false
```

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#source)

packages/storage/dist/index.d.mts:231

---

### defaultValue [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#defaultvalue)

> **defaultValue**?: `T`

#### Deprecated [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#deprecated)

Renamed to `fallback`, use it instead.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#source-1)

packages/storage/dist/index.d.mts:205

---

### fallback [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#fallback)

> **fallback**?: `T`

Default value returned when `getValue` would otherwise return `null`.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#source-2)

packages/storage/dist/index.d.mts:207

---

### init [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#init)

> **init**?: () => `T` | `Promise`<`T`>

If passed, a value in storage will be initialized immediately after defining the storage item. This function returns the value that will be saved to storage during the initialization process if a value doesn't already exist.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#source-3)

packages/storage/dist/index.d.mts:214

---

### migrations [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#migrations)

> **migrations**?: `Record`<`number`, (`oldValue`) => `any`>

A map of version numbers to the functions used to migrate the data to that version.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#source-4)

packages/storage/dist/index.d.mts:225

---

### onMigrationComplete [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#onmigrationcomplete)

> **onMigrationComplete**?: (`migratedValue`, `targetVersion`) => `void`

A callback function that runs on migration complete.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#parameters)

▪ **migratedValue**: `T`

▪ **targetVersion**: `number`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#source-5)

packages/storage/dist/index.d.mts:233

---

### version [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#version)

> **version**?: `number`

Provide a version number for the storage item to enable migrations. When changing the version in the future, migration functions will be ran on application startup.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html#source-6)

packages/storage/dist/index.d.mts:220

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
