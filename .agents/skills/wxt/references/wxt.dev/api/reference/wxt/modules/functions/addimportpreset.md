---
title: "Function: addImportPreset() – WXT"
source_url: "https://wxt.dev/api/reference/wxt/modules/functions/addimportpreset"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/modules/functions/addImportPreset.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/modules](https://wxt.dev/api/reference/wxt/modules/index.html) > addImportPreset

# Function: addImportPreset() [​](https://wxt.dev/api/reference/wxt/modules/functions/addimportpreset.html#function-addimportpreset)

> **addImportPreset**(`wxt`, `preset`): `void`

Add an Unimport preset ([built-in](https://github.com/unjs/unimport?tab=readme-ov-file#built-in-presets), [custom](https://github.com/unjs/unimport?tab=readme-ov-file#custom-presets), or [auto-scanned](https://github.com/unjs/unimport?tab=readme-ov-file#exports-auto-scan)), to the project's list of auto-imported utilities.

Some things to note:

* This function will only de-duplicate built-in preset names. It will not stop you adding duplicate custom or auto-scanned presets.
* If the project has disabled imports, this function has no effect.

## Parameters [​](https://wxt.dev/api/reference/wxt/modules/functions/addimportpreset.html#parameters)

▪ **wxt**: [`Wxt`](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)

The wxt instance provided by the module's setup function.

▪ **preset**: `"vitest"` | `Preset` | `"@vue/composition-api"` | `"@vueuse/core"` | `"@vueuse/head"` | `"pinia"` | `"preact"` | `"quasar"` | `"react"` | `"react-router"` | `"react-router-dom"` | `"svelte"` | `"svelte/animate"` | `"svelte/easing"` | `"svelte/motion"` | `"svelte/store"` | `"svelte/transition"` | `"vee-validate"` | `"vitepress"` | `"vue-demi"` | `"vue-i18n"` | `"vue-router"` | `"vue-router-composables"` | `"vue"` | `"vue/macros"` | `"vuex"` | `"uni-app"` | `"solid-js"` | `"solid-app-router"` | `"rxjs"` | `"date-fns"`

The preset to add to the project.

## Returns [​](https://wxt.dev/api/reference/wxt/modules/functions/addimportpreset.html#returns)

## Example [​](https://wxt.dev/api/reference/wxt/modules/functions/addimportpreset.html#example)

ts

```
export default defineWxtModule((wxt) => {
  // Built-in preset:
  addImportPreset(wxt, "vue");
  // Custom preset:
  addImportPreset(wxt, {
  from: "vue",
  imports: ["ref", "reactive", ...],
  });
  // Auto-scanned preset:
  addImportPreset(wxt, { package: "vue" });
  });
```

## Source [​](https://wxt.dev/api/reference/wxt/modules/functions/addimportpreset.html#source)

[packages/wxt/src/modules.ts:175](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/modules.ts#L175)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
