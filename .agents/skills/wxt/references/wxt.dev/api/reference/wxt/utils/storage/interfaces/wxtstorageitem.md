---
title: "Interface: WxtStorageItem<TValue, TMetadata> – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/storage/interfaces/WxtStorageItem.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/storage](https://wxt.dev/api/reference/wxt/utils/storage/index.html) > WxtStorageItem

# Interface: WxtStorageItem`<TValue, TMetadata>` [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#interface-wxtstorageitem-tvalue-tmetadata)

## Contents [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#contents)

* [Type parameters](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#type-parameters)
* [Properties](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#properties)
  + [defaultValue](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#defaultvalue)
  + [fallback](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#fallback)
  + [key](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#key)
* [Methods](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#methods)
  + [getMeta()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#getmeta)
  + [getValue()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#getvalue)
  + [migrate()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#migrate)
  + [removeMeta()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#removemeta)
  + [removeValue()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#removevalue)
  + [setMeta()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#setmeta)
  + [setValue()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#setvalue)
  + [watch()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#watch)

## Type parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#type-parameters)

▪ **TValue**

▪ **TMetadata** extends `Record`<`string`, `unknown`>

## Properties [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#properties)

### defaultValue [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#defaultvalue)

> **defaultValue**: `TValue`

#### Deprecated [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#deprecated)

Renamed to fallback, use it instead.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#source)

packages/storage/dist/index.d.mts:154

---

### fallback [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#fallback)

> **fallback**: `TValue`

The value provided by the `fallback` option.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#source-1)

packages/storage/dist/index.d.mts:156

---

### key [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#key)

> **key**: `local:${string}` | `session:${string}` | `sync:${string}` | `managed:${string}`

The storage key passed when creating the storage item.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#source-2)

packages/storage/dist/index.d.mts:152

## Methods [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#methods)

### getMeta() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#getmeta)

> **getMeta**(): `Promise`<`NullablePartial`<`TMetadata`>>

Get metadata.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#source-3)

packages/storage/dist/index.d.mts:160

---

### getValue() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#getvalue)

> **getValue**(): `Promise`<`TValue`>

Get the latest value from storage.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#source-4)

packages/storage/dist/index.d.mts:158

---

### migrate() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#migrate)

> **migrate**(): `Promise`<`void`>

If there are migrations defined on the storage item, migrate to the latest version.

**This function is ran automatically whenever the extension updates**, so you don't have to call it manually.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#source-5)

packages/storage/dist/index.d.mts:178

---

### removeMeta() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#removemeta)

> **removeMeta**(`properties`?): `Promise`<`void`>

Remove all metadata or certain properties from metadata.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#parameters)

▪ **properties?**: `string`[]

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#source-6)

packages/storage/dist/index.d.mts:168

---

### removeValue() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#removevalue)

> **removeValue**(`opts`?): `Promise`<`void`>

Remove the value from storage.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#parameters-1)

▪ **opts?**: [`RemoveItemOptions`](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/removeitemoptions.html)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#source-7)

packages/storage/dist/index.d.mts:166

---

### setMeta() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#setmeta)

> **setMeta**(`properties`): `Promise`<`void`>

Set metadata properties.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#parameters-2)

▪ **properties**: `NullablePartial`<`TMetadata`>

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#source-8)

packages/storage/dist/index.d.mts:164

---

### setValue() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#setvalue)

> **setValue**(`value`): `Promise`<`void`>

Set the value in storage.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#parameters-3)

▪ **value**: `TValue`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#source-9)

packages/storage/dist/index.d.mts:162

---

### watch() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#watch)

> **watch**(`cb`): [`Unwatch`](https://wxt.dev/api/reference/wxt/utils/storage/type-aliases/unwatch.html)

Listen for changes to the value in storage.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#parameters-4)

▪ **cb**: [`WatchCallback`](https://wxt.dev/api/reference/wxt/utils/storage/type-aliases/watchcallback.html)<`TValue`>

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html#source-10)

packages/storage/dist/index.d.mts:170

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
