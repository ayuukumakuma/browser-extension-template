---
title: "Interface: WxtDevServer – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/WxtDevServer.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > WxtDevServer

# Interface: WxtDevServer [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#interface-wxtdevserver)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#extends)
* [Properties](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#properties)
  + [currentOutput](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#currentoutput)
  + [host](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#host)
  + [origin](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#origin)
  + [port](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#port)
  + [reloadContentScript](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#reloadcontentscript)
  + [reloadExtension](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#reloadextension)
  + [reloadPage](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#reloadpage)
  + [restartBrowser](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#restartbrowser)
  + [watcher](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#watcher)
  + [ws](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#ws)
* [Methods](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#methods)
  + [on()](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#on-1)
  + [restart()](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#restart)
  + [start()](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#start)
  + [stop()](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#stop)
  + [transformHtml()](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#transformhtml)

## Extends [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#extends)

* `Omit`<[`WxtBuilderServer`](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html), `"listen"` | `"close"`>.[`ServerInfo`](https://wxt.dev/api/reference/wxt/interfaces/serverinfo.html)

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#properties)

### currentOutput [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#currentoutput)

> **currentOutput**: `undefined` | [`BuildOutput`](https://wxt.dev/api/reference/wxt/interfaces/buildoutput.html)

Stores the current build output of the server.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#source)

[packages/wxt/src/types.ts:493](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L493)

---

### host [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#host)

> **host**: `string`

Ex: `"localhost"`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#inherited-from)

[`ServerInfo`](https://wxt.dev/api/reference/wxt/interfaces/serverinfo.html).[`host`](https://wxt.dev/api/reference/wxt/interfaces/serverinfo.html#host)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#source-1)

[packages/wxt/src/types.ts:1152](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1152)

---

### origin [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#origin)

> **origin**: `string`

Ex: `"http://localhost:3000"`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#inherited-from-1)

[`ServerInfo`](https://wxt.dev/api/reference/wxt/interfaces/serverinfo.html).[`origin`](https://wxt.dev/api/reference/wxt/interfaces/serverinfo.html#origin)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#source-2)

[packages/wxt/src/types.ts:1156](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1156)

---

### port [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#port)

> **port**: `number`

Ex: `3000`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#inherited-from-2)

[`ServerInfo`](https://wxt.dev/api/reference/wxt/interfaces/serverinfo.html).[`port`](https://wxt.dev/api/reference/wxt/interfaces/serverinfo.html#port)

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#source-3)

[packages/wxt/src/types.ts:1154](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1154)

---

### reloadContentScript [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#reloadcontentscript)

> **reloadContentScript**: (`payload`) => `void`

Tell the extension to restart a content script.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#parameters)

▪ **payload**: [`ReloadContentScriptPayload`](https://wxt.dev/api/reference/wxt/interfaces/reloadcontentscriptpayload.html)

Information about the content script to reload.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#source-4)

[packages/wxt/src/types.ts:529](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L529)

---

### reloadExtension [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#reloadextension)

> **reloadExtension**: () => `void`

Tell the extension to reload by running `browser.runtime.reload`.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#source-5)

[packages/wxt/src/types.ts:510](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L510)

---

### reloadPage [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#reloadpage)

> **reloadPage**: (`path`) => `void`

Tell an extension page to reload.

The path is the bundle path, not the input paths, so if the input paths is "src/options/index.html", you would pass "options.html" because that's where it is written to in the dist directory, and where it's available at in the actual extension.

#### Example [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#example)

ts

```
server.reloadPage('popup.html');
  server.reloadPage('sandbox.html');
```

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#parameters-1)

▪ **path**: `string`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#source-6)

[packages/wxt/src/types.ts:523](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L523)

---

### restartBrowser [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#restartbrowser)

> **restartBrowser**: () => `void`

Grab the latest runner config and restart the browser.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#source-7)

[packages/wxt/src/types.ts:531](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L531)

---

### watcher [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#watcher)

> **watcher**: `FSWatcher`

Chokidar file watcher instance.

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#inherited-from-3)

Omit.watcher

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#source-8)

[packages/wxt/src/types.ts:1146](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1146)

---

### ws [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#ws)

> **ws**: `object`

The web socket server used to communicate with the extension.

#### Type declaration [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#type-declaration)

##### on() [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#on)

Listen for messages over the server's websocket.

###### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#parameters-2)

▪ **message**: `string`

▪ **cb**: (`payload`) => `void`

##### send() [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#send)

Send a message via the server's websocket, with an optional payload.

###### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#parameters-3)

▪ **message**: `string`

▪ **payload?**: `any`

###### Returns [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#returns)

###### Example [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#example-1)

ts

```
ws.send("wxt:reload-extension");
  ws.send("wxt:reload-content-script", { ... });
```

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#inherited-from-4)

Omit.ws

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#source-9)

[packages/wxt/src/types.ts:1133](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1133)

## Methods [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#methods)

### on() [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#on-1)

> **`optional`** **on**(`event`, `callback`): `void`

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#parameters-4)

▪ **event**: `string`

▪ **callback**: () => `void`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#inherited-from-5)

Omit.on

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#source-10)

[packages/wxt/src/types.ts:1147](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1147)

---

### restart() [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#restart)

> **restart**(): `Promise`<`void`>

Close the browser, stop the server, rebuild the entire extension, and start the server again.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#source-11)

[packages/wxt/src/types.ts:502](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L502)

---

### start() [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#start)

> **start**(): `Promise`<`void`>

Start the server.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#source-12)

[packages/wxt/src/types.ts:495](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L495)

---

### stop() [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#stop)

> **stop**(): `Promise`<`void`>

Stop the server.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#source-13)

[packages/wxt/src/types.ts:497](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L497)

---

### transformHtml() [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#transformhtml)

> **transformHtml**(`url`, `html`, `originalUrl`?): `Promise`<`string`>

Transform the HTML for dev mode.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#parameters-5)

▪ **url**: `string`

▪ **html**: `string`

▪ **originalUrl?**: `string`

#### Overrides [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#overrides)

Omit.transformHtml

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html#source-14)

[packages/wxt/src/types.ts:504](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L504)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
