---
title: "Class: MigrationError – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/storage/classes/MigrationError.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/storage](https://wxt.dev/api/reference/wxt/utils/storage/index.html) > MigrationError

# Class: MigrationError [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#class-migrationerror)

## Contents [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#extends)
* [Constructors](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#constructors)
  + [new MigrationError(key, version, options)](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#new-migrationerrorkey-version-options)
* [Properties](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#properties)
  + [cause](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#cause)
  + [key](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#key)
  + [message](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#message)
  + [name](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#name)
  + [stack](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#stack)
  + [version](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#version)
  + [stackTraceLimit](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#stacktracelimit)
* [Methods](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#methods)
  + [captureStackTrace()](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#capturestacktrace)
  + [isError()](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#iserror)
  + [prepareStackTrace()](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#preparestacktrace)

## Extends [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#extends)

* `Error`

## Constructors [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#constructors)

### new MigrationError(key, version, options) [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#new-migrationerror-key-version-options)

> **new MigrationError**(`key`, `version`, `options`?): [`MigrationError`](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html)

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#parameters)

▪ **key**: `string`

▪ **version**: `number`

▪ **options?**: `ErrorOptions`

#### Overrides [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#overrides)

Error.constructor

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#source)

packages/storage/dist/index.d.mts:250

## Properties [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#properties)

### cause [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#cause)

> **cause**?: `unknown`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#inherited-from)

Error.cause

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#source-1)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

---

### key [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#key)

> **key**: `string`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#source-2)

packages/storage/dist/index.d.mts:248

---

### message [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#message)

> **message**: `string`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#inherited-from-1)

Error.message

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#source-3)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

---

### name [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#name)

> **name**: `string`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#inherited-from-2)

Error.name

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#source-4)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

---

### stack [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#stack)

> **stack**?: `string`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#inherited-from-3)

Error.stack

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#source-5)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

---

### version [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#version)

> **version**: `number`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#source-6)

packages/storage/dist/index.d.mts:249

---

### stackTraceLimit [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#stacktracelimit)

> **`static`** **stackTraceLimit**: `number`

The `Error.stackTraceLimit` property specifies the number of stack frames collected by a stack trace (whether generated by `new Error().stack` or `Error.captureStackTrace(obj)`).

The default value is `10` but may be set to any valid JavaScript number. Changes will affect any stack trace captured *after* the value has been changed.

If set to a non-number value, or set to a negative number, stack traces will not capture any frames.

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#inherited-from-4)

Error.stackTraceLimit

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#source-7)

node\_modules/.pnpm/@types+node@20.19.32/node\_modules/@types/node/globals.d.ts:68

## Methods [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#methods)

### captureStackTrace() [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#capturestacktrace)

> **`static`** **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Creates a `.stack` property on `targetObject`, which when accessed returns a string representing the location in the code at which `Error.captureStackTrace()` was called.

js

```
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
```

The first line of the trace will be prefixed with `${myObject.name}: ${myObject.message}`.

The optional `constructorOpt` argument accepts a function. If given, all frames above `constructorOpt`, including `constructorOpt`, will be omitted from the generated stack trace.

The `constructorOpt` argument is useful for hiding implementation details of error generation from the user. For instance:

js

```
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}

a();
```

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#parameters-1)

▪ **targetObject**: `object`

▪ **constructorOpt?**: `Function`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#inherited-from-5)

Error.captureStackTrace

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#source-8)

node\_modules/.pnpm/@types+node@20.19.32/node\_modules/@types/node/globals.d.ts:52

---

### isError() [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#iserror)

> **`static`** **isError**(`error`): `error is Error`

Indicates whether the argument provided is a built-in Error instance or not.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#parameters-2)

▪ **error**: `unknown`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#inherited-from-6)

Error.isError

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#source-9)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.esnext.error.d.ts:23

---

### prepareStackTrace() [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#preparestacktrace)

> **`static`** **prepareStackTrace**(`err`, `stackTraces`): `any`

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#parameters-3)

▪ **err**: `Error`

▪ **stackTraces**: `CallSite`[]

#### Returns [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#returns)

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#inherited-from-7)

Error.prepareStackTrace

#### See [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#see)

<https://v8.dev/docs/stack-trace-api#customizing-stack-traces>

#### Source [​](https://wxt.dev/api/reference/wxt/utils/storage/classes/migrationerror.html#source-10)

node\_modules/.pnpm/@types+node@20.19.32/node\_modules/@types/node/globals.d.ts:56

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
