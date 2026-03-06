---
title: "Interface: WxtPackageManager – WXT"
source_url: "https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/interfaces/WxtPackageManager.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt](https://wxt.dev/api/reference/wxt.html) > WxtPackageManager

# Interface: WxtPackageManager [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#interface-wxtpackagemanager)

Package management utils built on top of [`nypm`](https://www.npmjs.com/package/nypm)

## Contents [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#extends)
* [Properties](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#properties)
  + [addDependency](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#adddependency)
  + [addDevDependency](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#adddevdependency)
  + [buildMeta](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#buildmeta)
  + [command](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#command)
  + [downloadDependency](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#downloaddependency)
  + [ensureDependencyInstalled](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#ensuredependencyinstalled)
  + [files](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#files)
  + [installDependencies](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#installdependencies)
  + [listDependencies](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#listdependencies)
  + [lockFile](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#lockfile)
  + [majorVersion](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#majorversion)
  + [name](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#name)
  + [overridesKey](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#overrideskey)
  + [removeDependency](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#removedependency)
  + [version](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#version)

## Extends [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#extends)

* `PackageManager`

## Properties [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#properties)

### addDependency [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#adddependency)

> **addDependency**: (`name`, `options`?) => `Promise`<`OperationResult`>

Adds dependency to the project.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#parameters)

▪ **name**: `string` | `string`[]

Name of the dependency to add.

▪ **options?**: `OperationOptions`

Options to pass to the API call.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#source)

[packages/wxt/src/types.ts:1558](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1558)

---

### addDevDependency [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#adddevdependency)

> **addDevDependency**: (`name`, `options`?) => `Promise`<`OperationResult`>

Adds dev dependency to the project.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#parameters-1)

▪ **name**: `string` | `string`[]

Name of the dev dependency to add.

▪ **options?**: `Omit`<`OperationOptions`, `"dev"`>

Options to pass to the API call.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#source-1)

[packages/wxt/src/types.ts:1559](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1559)

---

### buildMeta [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#buildmeta)

> **buildMeta**?: `string`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#inherited-from)

Nypm.PackageManager.buildMeta

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#source-2)

node\_modules/.pnpm/nypm@0.6.5/node\_modules/nypm/dist/index.d.mts:7

---

### command [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#command)

> **command**: `string`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#inherited-from-1)

Nypm.PackageManager.command

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#source-3)

node\_modules/.pnpm/nypm@0.6.5/node\_modules/nypm/dist/index.d.mts:5

---

### downloadDependency [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#downloaddependency)

> **downloadDependency**: (`id`, `downloadDir`) => `Promise`<`string`>

Download a package's TGZ file and move it into the `downloadDir`. Use's `npm pack <name>`, so you must have setup authorization in `.npmrc` file, regardless of the package manager used.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#parameters-2)

▪ **id**: `string`

Name of the package to download, can include a version (like `wxt@0.17.1`)

▪ **downloadDir**: `string`

Where to store the package.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#source-4)

[packages/wxt/src/types.ts:1573](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1573)

---

### ensureDependencyInstalled [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#ensuredependencyinstalled)

> **ensureDependencyInstalled**: (`name`, `options`?) => `Promise`<`true` | `undefined`>

Ensures dependency is installed.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#parameters-3)

▪ **name**: `string`

Name of the dependency.

▪ **options?**: `Pick`<`OperationOptions`, `"workspace"` | `"cwd"` | `"dev"`>

Options to pass to the API call.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#source-5)

[packages/wxt/src/types.ts:1560](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1560)

---

### files [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#files)

> **files**?: `string`[]

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#inherited-from-2)

Nypm.PackageManager.files

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#source-6)

node\_modules/.pnpm/nypm@0.6.5/node\_modules/nypm/dist/index.d.mts:10

---

### installDependencies [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#installdependencies)

> **installDependencies**: (`options`?) => `Promise`<`OperationResult`>

Installs project dependencies.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#parameters-4)

▪ **options?**: `Pick`<`OperationOptions`, `"cwd"` | `"silent"` | `"packageManager"` | `"corepack"` | `"dry"`> & `object`

Options to pass to the API call.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#source-7)

[packages/wxt/src/types.ts:1561](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1561)

---

### listDependencies [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#listdependencies)

> **listDependencies**: (`options`?) => `Promise`<[`Dependency`](https://wxt.dev/api/reference/wxt/interfaces/dependency.html)[]>

Run `npm ls`, `pnpm ls`, or `bun pm ls`, or `yarn list` and return the results.

WARNING: Yarn always returns all dependencies

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#parameters-5)

▪ **options?**: `object`

▪ **options.all?**: `boolean`

▪ **options.cwd?**: `string`

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#source-8)

[packages/wxt/src/types.ts:1580](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1580)

---

### lockFile [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#lockfile)

> **lockFile**?: `string` | `string`[]

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#inherited-from-3)

Nypm.PackageManager.lockFile

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#source-9)

node\_modules/.pnpm/nypm@0.6.5/node\_modules/nypm/dist/index.d.mts:9

---

### majorVersion [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#majorversion)

> **majorVersion**?: `string`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#inherited-from-4)

Nypm.PackageManager.majorVersion

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#source-10)

node\_modules/.pnpm/nypm@0.6.5/node\_modules/nypm/dist/index.d.mts:8

---

### name [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#name)

> **name**: `PackageManagerName`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#inherited-from-5)

Nypm.PackageManager.name

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#source-11)

node\_modules/.pnpm/nypm@0.6.5/node\_modules/nypm/dist/index.d.mts:4

---

### overridesKey [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#overrideskey)

> **overridesKey**: `string`

Key used to override package versions. Sometimes called "resolutions".

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#source-12)

[packages/wxt/src/types.ts:1585](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1585)

---

### removeDependency [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#removedependency)

> **removeDependency**: (`name`, `options`?) => `Promise`<`OperationResult`>

Removes dependency from the project.

#### Parameters [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#parameters-6)

▪ **name**: `string` | `string`[]

Name of the dependency to remove.

▪ **options?**: `OperationOptions`

Options to pass to the API call.

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#source-13)

[packages/wxt/src/types.ts:1562](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/types.ts#L1562)

---

### version [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#version)

> **version**?: `string`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#inherited-from-6)

Nypm.PackageManager.version

#### Source [​](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html#source-14)

node\_modules/.pnpm/nypm@0.6.5/node\_modules/nypm/dist/index.d.mts:6

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
