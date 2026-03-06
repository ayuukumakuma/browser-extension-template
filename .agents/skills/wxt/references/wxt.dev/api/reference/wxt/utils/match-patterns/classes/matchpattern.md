---
title: "Class: MatchPattern – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/match-patterns/classes/MatchPattern.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/match-patterns](https://wxt.dev/api/reference/wxt/utils/match-patterns/index.html) > MatchPattern

# Class: MatchPattern [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#class-matchpattern)

Class for parsing and performing operations on match patterns.

## Contents [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#contents)

* [Example](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#example)
* [Constructors](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#constructors)
  + [new MatchPattern(matchPattern)](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#new-matchpatternmatchpattern)
* [Properties](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#properties)
  + [convertPatternToRegex](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#convertpatterntoregex)
  + [escapeForRegex](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#escapeforregex)
  + [hostnameMatch](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#hostnamematch)
  + [isAllUrls](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#isallurls)
  + [isFileMatch](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#isfilematch)
  + [isFtpMatch](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#isftpmatch)
  + [isHostPathMatch](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#ishostpathmatch)
  + [isHttpMatch](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#ishttpmatch)
  + [isHttpsMatch](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#ishttpsmatch)
  + [isUrnMatch](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#isurnmatch)
  + [pathnameMatch](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#pathnamematch)
  + [protocolMatches](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#protocolmatches)
  + [PROTOCOLS](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#protocols)
* [Methods](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#methods)
  + [includes()](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#includes)

## Example [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#example)

ts

```
const pattern = new MatchPattern("*://google.com/*");

pattern.includes("https://google.com");            // true
pattern.includes("http://youtube.com/watch?v=123") // false
```

## Constructors [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#constructors)

### new MatchPattern(matchPattern) [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#new-matchpattern-matchpattern)

> **new MatchPattern**(`matchPattern`): [`MatchPattern`](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html)

Parse a match pattern string. If it is invalid, the constructor will throw an `InvalidMatchPattern` error.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#parameters)

▪ **matchPattern**: `string`

The match pattern to parse.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#source)

node\_modules/.pnpm/@webext-core+match-patterns@1.0.3/node\_modules/@webext-core/match-patterns/lib/index.d.ts:22

## Properties [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#properties)

### convertPatternToRegex [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#convertpatterntoregex)

> **`private`** **convertPatternToRegex**: `any`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#source-1)

node\_modules/.pnpm/@webext-core+match-patterns@1.0.3/node\_modules/@webext-core/match-patterns/lib/index.d.ts:33

---

### escapeForRegex [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#escapeforregex)

> **`private`** **escapeForRegex**: `any`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#source-2)

node\_modules/.pnpm/@webext-core+match-patterns@1.0.3/node\_modules/@webext-core/match-patterns/lib/index.d.ts:34

---

### hostnameMatch [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#hostnamematch)

> **`private`** **hostnameMatch**: `any`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#source-3)

node\_modules/.pnpm/@webext-core+match-patterns@1.0.3/node\_modules/@webext-core/match-patterns/lib/index.d.ts:13

---

### isAllUrls [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#isallurls)

> **`private`** **isAllUrls**?: `any`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#source-4)

node\_modules/.pnpm/@webext-core+match-patterns@1.0.3/node\_modules/@webext-core/match-patterns/lib/index.d.ts:15

---

### isFileMatch [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#isfilematch)

> **`private`** **isFileMatch**: `any`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#source-5)

node\_modules/.pnpm/@webext-core+match-patterns@1.0.3/node\_modules/@webext-core/match-patterns/lib/index.d.ts:30

---

### isFtpMatch [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#isftpmatch)

> **`private`** **isFtpMatch**: `any`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#source-6)

node\_modules/.pnpm/@webext-core+match-patterns@1.0.3/node\_modules/@webext-core/match-patterns/lib/index.d.ts:31

---

### isHostPathMatch [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#ishostpathmatch)

> **`private`** **isHostPathMatch**: `any`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#source-7)

node\_modules/.pnpm/@webext-core+match-patterns@1.0.3/node\_modules/@webext-core/match-patterns/lib/index.d.ts:29

---

### isHttpMatch [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#ishttpmatch)

> **`private`** **isHttpMatch**: `any`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#source-8)

node\_modules/.pnpm/@webext-core+match-patterns@1.0.3/node\_modules/@webext-core/match-patterns/lib/index.d.ts:27

---

### isHttpsMatch [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#ishttpsmatch)

> **`private`** **isHttpsMatch**: `any`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#source-9)

node\_modules/.pnpm/@webext-core+match-patterns@1.0.3/node\_modules/@webext-core/match-patterns/lib/index.d.ts:28

---

### isUrnMatch [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#isurnmatch)

> **`private`** **isUrnMatch**: `any`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#source-10)

node\_modules/.pnpm/@webext-core+match-patterns@1.0.3/node\_modules/@webext-core/match-patterns/lib/index.d.ts:32

---

### pathnameMatch [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#pathnamematch)

> **`private`** **pathnameMatch**: `any`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#source-11)

node\_modules/.pnpm/@webext-core+match-patterns@1.0.3/node\_modules/@webext-core/match-patterns/lib/index.d.ts:14

---

### protocolMatches [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#protocolmatches)

> **`private`** **protocolMatches**: `any`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#source-12)

node\_modules/.pnpm/@webext-core+match-patterns@1.0.3/node\_modules/@webext-core/match-patterns/lib/index.d.ts:12

---

### PROTOCOLS [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#protocols)

> **`static`** **PROTOCOLS**: `string`[]

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#source-13)

node\_modules/.pnpm/@webext-core+match-patterns@1.0.3/node\_modules/@webext-core/match-patterns/lib/index.d.ts:11

## Methods [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#methods)

### includes() [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#includes)

> **includes**(`url`): `boolean`

Check if a URL is included in a pattern.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#parameters-1)

▪ **url**: `string` | `URL` | `Location`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/match-patterns/classes/matchpattern.html#source-14)

node\_modules/.pnpm/@webext-core+match-patterns@1.0.3/node\_modules/@webext-core/match-patterns/lib/index.d.ts:26

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
