---
title: "Class: InvalidMatchPattern – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/match-patterns/classes/InvalidMatchPattern.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/match-patterns](https://wxt.dev/api/reference/wxt/utils/match-patterns/index.html) > InvalidMatchPattern

# Class: InvalidMatchPattern [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#class-invalidmatchpattern)

## Contents [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#extends)
* [Constructors](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#constructors)
  + [new InvalidMatchPattern(matchPattern, reason)](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#new-invalidmatchpatternmatchpattern-reason)
* [Properties](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#properties)
  + [cause](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#cause)
  + [message](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#message)
  + [name](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#name)
  + [stack](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#stack)
  + [stackTraceLimit](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#stacktracelimit)
* [Methods](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#methods)
  + [captureStackTrace()](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#capturestacktrace)
  + [isError()](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#iserror)
  + [prepareStackTrace()](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#preparestacktrace)

## Extends [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#extends)

* `Error`

## Constructors [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#constructors)

### new InvalidMatchPattern(matchPattern, reason) [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#new-invalidmatchpattern-matchpattern-reason)

> **new InvalidMatchPattern**(`matchPattern`, `reason`): [`InvalidMatchPattern`](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html)

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#parameters)

▪ **matchPattern**: `string`

▪ **reason**: `string`

#### Overrides [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#overrides)

Error.constructor

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#source)

node\_modules/.pnpm/@webext-core+match-patterns@1.0.3/node\_modules/@webext-core/match-patterns/lib/index.d.ts:37

## Properties [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#properties)

### cause [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#cause)

> **cause**?: `unknown`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#inherited-from)

Error.cause

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#source-1)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

---

### message [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#message)

> **message**: `string`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#inherited-from-1)

Error.message

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#source-2)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

---

### name [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#name)

> **name**: `string`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#inherited-from-2)

Error.name

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#source-3)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

---

### stack [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#stack)

> **stack**?: `string`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#inherited-from-3)

Error.stack

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#source-4)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

---

### stackTraceLimit [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#stacktracelimit)

> **`static`** **stackTraceLimit**: `number`

The `Error.stackTraceLimit` property specifies the number of stack frames collected by a stack trace (whether generated by `new Error().stack` or `Error.captureStackTrace(obj)`).

The default value is `10` but may be set to any valid JavaScript number. Changes will affect any stack trace captured *after* the value has been changed.

If set to a non-number value, or set to a negative number, stack traces will not capture any frames.

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#inherited-from-4)

Error.stackTraceLimit

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#source-5)

node\_modules/.pnpm/@types+node@20.19.32/node\_modules/@types/node/globals.d.ts:68

## Methods [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#methods)

### captureStackTrace() [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#capturestacktrace)

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

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#parameters-1)

▪ **targetObject**: `object`

▪ **constructorOpt?**: `Function`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#inherited-from-5)

Error.captureStackTrace

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#source-6)

node\_modules/.pnpm/@types+node@20.19.32/node\_modules/@types/node/globals.d.ts:52

---

### isError() [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#iserror)

> **`static`** **isError**(`error`): `error is Error`

Indicates whether the argument provided is a built-in Error instance or not.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#parameters-2)

▪ **error**: `unknown`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#inherited-from-6)

Error.isError

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#source-7)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.esnext.error.d.ts:23

---

### prepareStackTrace() [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#preparestacktrace)

> **`static`** **prepareStackTrace**(`err`, `stackTraces`): `any`

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#parameters-3)

▪ **err**: `Error`

▪ **stackTraces**: `CallSite`[]

#### Returns [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#returns)

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#inherited-from-7)

Error.prepareStackTrace

#### See [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#see)

<https://v8.dev/docs/stack-trace-api#customizing-stack-traces>

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/invalidmatchpattern.html#source-8)

node\_modules/.pnpm/@types+node@20.19.32/node\_modules/@types/node/globals.d.ts:56

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
