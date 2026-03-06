---
title: "Type alias: ShadowRootContentScriptUiOptions<TMounted> – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/type-aliases/shadowrootcontentscriptuioptions"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/content-script-ui/shadow-root/type-aliases/ShadowRootContentScriptUiOptions.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/content-script-ui/shadow-root](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/index.html) > ShadowRootContentScriptUiOptions

# Type alias: ShadowRootContentScriptUiOptions`<TMounted>` [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/type-aliases/shadowrootcontentscriptuioptions.html#type-alias-shadowrootcontentscriptuioptions-tmounted)

> **ShadowRootContentScriptUiOptions**<`TMounted`>: [`ContentScriptUiOptions`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/type-aliases/contentscriptuioptions.html)<`TMounted`> & `object`

## Type declaration [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/type-aliases/shadowrootcontentscriptuioptions.html#type-declaration)

### css [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/type-aliases/shadowrootcontentscriptuioptions.html#css)

> **css**?: `string`

Custom CSS text to apply to the UI. If your content script imports/generates CSS and you've set `cssInjectionMode: "ui"`, the imported CSS will be included automatically. You do not need to pass those styles in here. This is for any additional styles not in the imported CSS.

### inheritStyles [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/type-aliases/shadowrootcontentscriptuioptions.html#inheritstyles)

> **inheritStyles**?: `boolean`

By default, WXT adds `all: initial` to the shadow root before the rest of your CSS. This resets any inheritable CSS styles that [normally pierce the Shadow DOM](https://open-wc.org/guides/knowledge/styling/styles-piercing-shadow-dom/).

WXT resets everything but:

* **`rem` Units**: they continue to scale based off the webpage's HTML `font-size`.
* **CSS Variables/Custom Properties**: CSS variables defined outside the shadow root can be accessed inside it.
* **`@font-face` Definitions**: Fonts defined outside the shadow root can be used inside it.

To disable this behavior and inherit styles from the webpage, set `inheritStyles: true`.

#### Default [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/type-aliases/shadowrootcontentscriptuioptions.html#default)

ts

```
false
```

### isolateEvents [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/type-aliases/shadowrootcontentscriptuioptions.html#isolateevents)

> **isolateEvents**?: `boolean` | `string`[]

When enabled, `event.stopPropagation` will be called on events trying to bubble out of the shadow root.

* Set to `true` to stop the propagation of a default set of events, `["keyup", "keydown", "keypress"]`
* Set to an array of event names to stop the propagation of a custom list of events

### mode [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/type-aliases/shadowrootcontentscriptuioptions.html#mode)

> **mode**?: `"open"` | `"closed"`

ShadowRoot's mode.

#### Default [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/type-aliases/shadowrootcontentscriptuioptions.html#default-1)

ts

```
'open'
```

#### See [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/type-aliases/shadowrootcontentscriptuioptions.html#see)

<https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/mode>

### name [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/type-aliases/shadowrootcontentscriptuioptions.html#name)

> **name**: `string`

The name of the custom component used to host the ShadowRoot. Must be kebab-case.

### onMount [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/type-aliases/shadowrootcontentscriptuioptions.html#onmount)

> **onMount**: (`uiContainer`, `shadow`, `shadowHost`) => `TMounted`

Callback executed when mounting the UI. This function should create and append the UI to the `uiContainer` element. It is called every time `ui.mount()` is called.

Optionally return a value that can be accessed at `ui.mounted` or in the `onRemove` callback.

#### Parameters [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/type-aliases/shadowrootcontentscriptuioptions.html#parameters)

▪ **uiContainer**: `HTMLElement`

▪ **shadow**: `ShadowRoot`

▪ **shadowHost**: `HTMLElement`

## Type parameters [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/type-aliases/shadowrootcontentscriptuioptions.html#type-parameters)

| Parameter |
| --- |
| `TMounted` |

## Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/shadow-root/type-aliases/shadowrootcontentscriptuioptions.html#source)

[packages/wxt/src/utils/content-script-ui/shadow-root.ts:154](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/shadow-root.ts#L154)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
