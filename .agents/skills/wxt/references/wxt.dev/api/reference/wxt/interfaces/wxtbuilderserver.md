---
title: "Interface: WxtBuilderServer – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/WxtBuilderServer.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > WxtBuilderServer

# Interface: WxtBuilderServer [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#interface-wxtbuilderserver)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#contents)

* [Properties](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#properties)
  + [watcher](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#watcher)
  + [ws](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#ws)
* [Methods](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#methods)
  + [close()](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#close)
  + [listen()](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#listen)
  + [on()](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#on-1)
  + [transformHtml()](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#transformhtml)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#properties)

### watcher [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#watcher)

> **watcher**: `FSWatcher`

Chokidar file watcher instance.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#source)

[packages/wxt/src/types.ts:1146](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1146)

---

### ws [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#ws)

> **ws**: `object`

The web socket server used to communicate with the extension.

#### Type declaration [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#type-declaration)

##### on() [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#on)

Listen for messages over the server's websocket.

###### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#parameters)

▪ **message**: `string`

▪ **cb**: (`payload`) => `void`

##### send() [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#send)

Send a message via the server's websocket, with an optional payload.

###### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#parameters-1)

▪ **message**: `string`

▪ **payload?**: `any`

###### Returns [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#returns)

###### Example [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#example)

ts

```
ws.send("wxt:reload-extension");
  ws.send("wxt:reload-content-script", { ... });
```

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#source-1)

[packages/wxt/src/types.ts:1133](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1133)

## Methods [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#methods)

### close() [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#close)

> **close**(): `Promise`<`void`>

Stop the server.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#source-2)

[packages/wxt/src/types.ts:1125](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1125)

---

### listen() [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#listen)

> **listen**(): `Promise`<`void`>

Start the server.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#source-3)

[packages/wxt/src/types.ts:1123](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1123)

---

### on() [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#on-1)

> **`optional`** **on**(`event`, `callback`): `void`

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#parameters-2)

▪ **event**: `string`

▪ **callback**: () => `void`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#source-4)

[packages/wxt/src/types.ts:1147](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1147)

---

### transformHtml() [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#transformhtml)

> **transformHtml**(`url`, `html`, `originalUrl`?): `Promise`<`string`>

Transform the HTML for dev mode.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#parameters-3)

▪ **url**: `string`

▪ **html**: `string`

▪ **originalUrl?**: `string`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html#source-5)

[packages/wxt/src/types.ts:1127](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1127)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
