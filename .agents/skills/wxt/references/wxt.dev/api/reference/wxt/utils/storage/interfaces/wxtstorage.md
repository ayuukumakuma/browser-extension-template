---
title: "Interface: WxtStorage – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/storage/interfaces/WxtStorage.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/storage](https://wxt.dev/api/reference/wxt/utils/storage/index.html) > WxtStorage

# Interface: WxtStorage [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#interface-wxtstorage)

## Contents [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#contents)

* [Methods](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#methods)
  + [clear()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#clear)
  + [defineItem()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#defineitem)
  + [getItem()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#getitem)
  + [getItems()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#getitems)
  + [getMeta()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#getmeta)
  + [getMetas()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#getmetas)
  + [removeItem()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#removeitem)
  + [removeItems()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#removeitems)
  + [removeMeta()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#removemeta)
  + [restoreSnapshot()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#restoresnapshot)
  + [setItem()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#setitem)
  + [setItems()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#setitems)
  + [setMeta()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#setmeta)
  + [setMetas()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#setmetas)
  + [snapshot()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#snapshot)
  + [unwatch()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#unwatch)
  + [watch()](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#watch)

## Methods [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#methods)

### clear() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#clear)

> **clear**(`base`): `Promise`<`void`>

Removes all items from the provided storage area.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters)

▪ **base**: [`StorageArea`](https://wxt.dev/api/reference/wxt/utils/storage/type-aliases/storagearea.html)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source)

packages/storage/dist/index.d.mts:109

---

### defineItem() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#defineitem)

#### defineItem(key) [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#defineitem-key)

> **defineItem**<`TValue`, `TMetadata`>(`key`): [`WxtStorageItem`](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html)<`null` | `TValue`, `TMetadata`>

Define a storage item with a default value, type, or versioning.

Read full docs: [https://wxt.dev/storage.html#defining-storage-items](https://wxt.dev/storage.html#defining-storage-items)

##### Type parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#type-parameters)

▪ **TValue**

▪ **TMetadata** extends `Record`<`string`, `unknown`> = `object`

##### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters-1)

▪ **key**: `local:${string}` | `session:${string}` | `sync:${string}` | `managed:${string}`

##### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-1)

packages/storage/dist/index.d.mts:138

#### defineItem(key, options) [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#defineitem-key-options)

> **defineItem**<`TValue`, `TMetadata`>(`key`, `options`): [`WxtStorageItem`](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html)<`TValue`, `TMetadata`>

##### Type parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#type-parameters-1)

▪ **TValue**

▪ **TMetadata** extends `Record`<`string`, `unknown`> = `object`

##### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters-2)

▪ **key**: `local:${string}` | `session:${string}` | `sync:${string}` | `managed:${string}`

▪ **options**: [`WxtStorageItemOptions`](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html)<`TValue`> & `object`

##### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-2)

packages/storage/dist/index.d.mts:139

#### defineItem(key, options) [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#defineitem-key-options-1)

> **defineItem**<`TValue`, `TMetadata`>(`key`, `options`): [`WxtStorageItem`](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html)<`TValue`, `TMetadata`>

##### Type parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#type-parameters-2)

▪ **TValue**

▪ **TMetadata** extends `Record`<`string`, `unknown`> = `object`

##### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters-3)

▪ **key**: `local:${string}` | `session:${string}` | `sync:${string}` | `managed:${string}`

▪ **options**: [`WxtStorageItemOptions`](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html)<`TValue`> & `object`

##### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-3)

packages/storage/dist/index.d.mts:142

#### defineItem(key, options) [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#defineitem-key-options-2)

> **defineItem**<`TValue`, `TMetadata`>(`key`, `options`): [`WxtStorageItem`](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html)<`TValue`, `TMetadata`>

##### Type parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#type-parameters-3)

▪ **TValue**

▪ **TMetadata** extends `Record`<`string`, `unknown`> = `object`

##### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters-4)

▪ **key**: `local:${string}` | `session:${string}` | `sync:${string}` | `managed:${string}`

▪ **options**: [`WxtStorageItemOptions`](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html)<`TValue`> & `object`

##### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-4)

packages/storage/dist/index.d.mts:145

#### defineItem(key, options) [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#defineitem-key-options-3)

> **defineItem**<`TValue`, `TMetadata`>(`key`, `options`): [`WxtStorageItem`](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html)<`null` | `TValue`, `TMetadata`>

##### Type parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#type-parameters-4)

▪ **TValue**

▪ **TMetadata** extends `Record`<`string`, `unknown`> = `object`

##### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters-5)

▪ **key**: `local:${string}` | `session:${string}` | `sync:${string}` | `managed:${string}`

▪ **options**: [`WxtStorageItemOptions`](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitemoptions.html)<`TValue`>

##### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-5)

packages/storage/dist/index.d.mts:148

---

### getItem() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#getitem)

#### getItem(key, opts) [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#getitem-key-opts)

> **getItem**<`TValue`>(`key`, `opts`): `Promise`<`TValue`>

Get an item from storage, or return `null` if it doesn't exist.

##### Type parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#type-parameters-5)

▪ **TValue**

##### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters-6)

▪ **key**: `local:${string}` | `session:${string}` | `sync:${string}` | `managed:${string}`

▪ **opts**: [`GetItemOptions`](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/getitemoptions.html)<`TValue`> & `object`

##### Returns [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#returns)

##### Example [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#example)

ts

```
await storage.getItem<number>('local:installDate');
```

##### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-6)

packages/storage/dist/index.d.mts:12

#### getItem(key, opts) [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#getitem-key-opts-1)

> **getItem**<`TValue`>(`key`, `opts`?): `Promise`<`null` | `TValue`>

##### Type parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#type-parameters-6)

▪ **TValue**

##### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters-7)

▪ **key**: `local:${string}` | `session:${string}` | `sync:${string}` | `managed:${string}`

▪ **opts?**: [`GetItemOptions`](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/getitemoptions.html)<`TValue`>

##### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-7)

packages/storage/dist/index.d.mts:15

---

### getItems() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#getitems)

> **getItems**(`keys`): `Promise`<`object`[]>

Get multiple items from storage. The return order is guaranteed to be the same as the order requested.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters-8)

▪ **keys**: (`local:${string}` | `session:${string}` | `sync:${string}` | `managed:${string}` | [`WxtStorageItem`](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html)<`any`, `any`> | `object`)[]

#### Returns [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#returns-1)

#### Example [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#example-1)

ts

```
await storage.getItems(['local:installDate', 'session:someCounter']);
```

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-8)

packages/storage/dist/index.d.mts:23

---

### getMeta() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#getmeta)

> **getMeta**<`T`>(`key`): `Promise`<`T`>

Return an object containing metadata about the key. Object is stored at `key + "$"`. If value is not an object, it returns an empty object.

#### Type parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#type-parameters-7)

▪ **T** extends `Record`<`string`, `unknown`>

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters-9)

▪ **key**: `local:${string}` | `session:${string}` | `sync:${string}` | `managed:${string}`

#### Returns [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#returns-2)

#### Example [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#example-2)

ts

```
await storage.getMeta('local:installDate');
```

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-9)

packages/storage/dist/index.d.mts:37

---

### getMetas() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#getmetas)

> **getMetas**(`keys`): `Promise`<`object`[]>

Get the metadata of multiple storage items.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters-10)

▪ **keys**: (`local:${string}` | `session:${string}` | `sync:${string}` | `managed:${string}` | [`WxtStorageItem`](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html)<`any`, `any`>)[]

List of keys or items to get the metadata of.

#### Returns [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#returns-3)

An array containing storage keys and their metadata.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-10)

packages/storage/dist/index.d.mts:44

---

### removeItem() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#removeitem)

> **removeItem**(`key`, `opts`?): `Promise`<`void`>

Removes an item from storage.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters-11)

▪ **key**: `local:${string}` | `session:${string}` | `sync:${string}` | `managed:${string}`

▪ **opts?**: [`RemoveItemOptions`](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/removeitemoptions.html)

#### Returns [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#returns-4)

#### Example [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#example-3)

ts

```
await storage.removeItem('local:installDate');
```

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-11)

packages/storage/dist/index.d.mts:99

---

### removeItems() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#removeitems)

> **removeItems**(`keys`): `Promise`<`void`>

Remove a list of keys from storage.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters-12)

▪ **keys**: (`local:${string}` | `session:${string}` | `sync:${string}` | `managed:${string}` | [`WxtStorageItem`](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorageitem.html)<`any`, `any`> | `object` | `object`)[]

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-12)

packages/storage/dist/index.d.mts:101

---

### removeMeta() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#removemeta)

> **removeMeta**(`key`, `properties`?): `Promise`<`void`>

Remove the entire metadata for a key, or specific properties by name.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters-13)

▪ **key**: `local:${string}` | `session:${string}` | `sync:${string}` | `managed:${string}`

▪ **properties?**: `string` | `string`[]

#### Returns [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#returns-5)

#### Example [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#example-4)

ts

```
// Remove all metadata properties from the item
  await storage.removeMeta('local:installDate');

  // Remove only specific the "v" field
  await storage.removeMeta('local:installDate', 'v');
```

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-13)

packages/storage/dist/index.d.mts:120

---

### restoreSnapshot() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#restoresnapshot)

> **restoreSnapshot**(`base`, `data`): `Promise`<`void`>

Restores the results of `snapshot`. If new properties have been saved since the snapshot, they are not overridden. Only values existing in the snapshot are overridden.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters-14)

▪ **base**: [`StorageArea`](https://wxt.dev/api/reference/wxt/utils/storage/type-aliases/storagearea.html)

▪ **data**: `any`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-14)

packages/storage/dist/index.d.mts:128

---

### setItem() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#setitem)

> **setItem**<`T`>(`key`, `value`): `Promise`<`void`>

Set a value in storage. Setting a value to `null` or `undefined` is equivalent to calling `removeItem`.

#### Type parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#type-parameters-8)

▪ **T**

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters-15)

▪ **key**: `local:${string}` | `session:${string}` | `sync:${string}` | `managed:${string}`

▪ **value**: `null` | `T`

#### Returns [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#returns-6)

#### Example [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#example-5)

ts

```
await storage.setItem<number>('local:installDate', Date.now());
```

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-15)

packages/storage/dist/index.d.mts:55

---

### setItems() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#setitems)

> **setItems**(`values`): `Promise`<`void`>

Set multiple values in storage. If a value is set to `null` or `undefined`, the key is removed.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters-16)

▪ **values**: (`object` | `object`)[]

#### Returns [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#returns-7)

#### Example [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#example-6)

ts

```
await storage.setItem([
  { key: "local:installDate", value: Date.now() },
  { key: "session:someCounter, value: 5 },
  ]);
```

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-16)

packages/storage/dist/index.d.mts:66

---

### setMeta() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#setmeta)

> **setMeta**<`T`>(`key`, `properties`): `Promise`<`void`>

Sets metadata properties. If some properties are already set, but are not included in the `properties` parameter, they will not be removed.

#### Type parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#type-parameters-9)

▪ **T** extends `Record`<`string`, `unknown`>

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters-17)

▪ **key**: `local:${string}` | `session:${string}` | `sync:${string}` | `managed:${string}`

▪ **properties**: `null` | `T`

#### Returns [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#returns-8)

#### Example [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#example-7)

ts

```
await storage.setMeta('local:installDate', { appVersion });
```

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-17)

packages/storage/dist/index.d.mts:80

---

### setMetas() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#setmetas)

> **setMetas**(`metas`): `Promise`<`void`>

Set the metadata of multiple storage items.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters-18)

▪ **metas**: (`object` | `object`)[]

List of storage keys or items and metadata to set for each.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-18)

packages/storage/dist/index.d.mts:86

---

### snapshot() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#snapshot)

> **snapshot**(`base`, `opts`?): `Promise`<`Record`<`string`, `unknown`>>

Return all the items in storage.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters-19)

▪ **base**: [`StorageArea`](https://wxt.dev/api/reference/wxt/utils/storage/type-aliases/storagearea.html)

▪ **opts?**: [`SnapshotOptions`](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/snapshotoptions.html)

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-19)

packages/storage/dist/index.d.mts:122

---

### unwatch() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#unwatch)

> **unwatch**(): `void`

Remove all watch listeners.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-20)

packages/storage/dist/index.d.mts:132

---

### watch() [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#watch)

> **watch**<`T`>(`key`, `cb`): [`Unwatch`](https://wxt.dev/api/reference/wxt/utils/storage/type-aliases/unwatch.html)

Watch for changes to a specific key in storage.

#### Type parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#type-parameters-10)

▪ **T**

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#parameters-20)

▪ **key**: `local:${string}` | `session:${string}` | `sync:${string}` | `managed:${string}`

▪ **cb**: [`WatchCallback`](https://wxt.dev/api/reference/wxt/utils/storage/type-aliases/watchcallback.html)<`null` | `T`>

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/interfaces/wxtstorage.html#source-21)

packages/storage/dist/index.d.mts:130

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
